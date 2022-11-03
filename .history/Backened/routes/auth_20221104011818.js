const express=require('express')
const router = express.Router()
const User=require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser=require('../middlewares/fetchUser')


const JWT_SECRET='amitisagoodboy'



// router #1 create a user


router.post('/createuser',[
    body('name','enter the name').isLength({ min: 3 }),
   
    body('email').isEmail(),
    body('password').isLength({min:5}),
],
    async (req, res) => {
        let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
        }
        

        try {
            
            // as here it is promise so we have use await
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ success,errors: "email already exists" })
            }

            // as here it is promise so we have use await
            const salt = await bcrypt.genSalt(10);
          const   secPassword = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
           
            success = true;
           res.status(200).json()
          
        } catch (error) {
            console.error(error.message)
            res.status(500).send("some error occured")
        }

     
    })

    // route #2 Authenticate a user

router.post('/login', [
       
    body('email').isEmail(),
    body('password', 'password cannot be blank').exists(),
],
    async (req, res) => {
        let success = false;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({success, errors: errors.array() });
            }

            const {email, password} = req.body;
            try {
                let user = await  User.findOne({ email: email });
                if (!user) {
                    return res.status(400).json({error: "invalid credentials" })
                }

                const passwordcompare = await  bcrypt.compare(password, user.password);
                if (!passwordcompare) {
                    success = false;
                    return res.status(400).json({ success,error: "invalid credentials" })
                    
                }

                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                success = true;
                res.json({success,authToken})
                
            } catch (error) {
                console.error(error.message)
                res.status(500).send("internal error")
            }
          


    })
         

    //route #3 get loggedin userdetails, login required
    // here we have to send the tokken
    router.post('/getuser',fetchUser,
        async (req, res) => {
            try {
               userId = req.user.id;
                const user = await User.findById(userId).select("-password")
                res.send(user)
    
            } catch (error) {
                console.error(error.message)
                res.status(500).send("internal server error")
            }
        })
  



module.exports=router