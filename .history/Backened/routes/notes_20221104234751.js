const express=require('express')
const router = express.Router()
const fetchUser = require('../middlewares/fetchUser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');
const { Note} = require('../../src/components/e');



// Route 1 for getting all the notes

router.get('/fetchallnotes', fetchUser,
    async (req, res) => {
        try {
            
            const notes = await Note.find({ userId: req.user.id })
            res.json(notes)
        }  catch (error) {
            console.error(error.message)
            res.status(500).send("some error occured")
        }
  
   
})

// route 2 add a new note using post

router.post('/addnote', fetchUser,[
  
        body('title', 'please enter your title').isLength({ min: 3 }),
            body('description', 'enter a valid description and description must be 5 character').isLength({min:5}),],
       
    async (req, res) => {
        try {
            
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
             
            const note = new Note({
                title, description, tag, user: req.user.id
                    
            })
            const savednotes = await note.save();

            res.json(savednotes)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("some error occured")
        }
   
    })


    //Route 3 update an existing note

    router.put('/updatenote/:id', fetchUser,
       
        async (req, res) => {
            const { title, description, tag } = req.body;
            // create a newNote objet
            const newNotes = {};
            if (title) { newNotes.title = title };
            if (description) { newNotes.description = description };
            if (tag) { newNotes.tag = tag };

            // find the note to be updated and update it

            let note = await Note.findById(req.params.id);
            if (!note) {
               return  res.status(404).send("not found!")
            }

            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed")
            }
            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNotes }, { new: true })
            res.json({note})
        })

        // Route 4 delete a note

        router.delete('/deletenote/:id', fetchUser,
       
            async (req, res) => {
            
                try {
                    
                
            
                    // find the note to be deleted and delete it

                    let note = await Note.findById(req.params.id);
                    if (!note) {
                        return res.status(404).send("not found!")
                    }
                    // allows delteion only if user own this notes
                    if (note.user.toString() !== req.user.id) {
                        return res.status(401).send("Not Allowed")
                    }
                    note = await Note.findByIdAndDelete(req.params.id)
                    res.json({ "success": "Note has been deleted" })
                }  catch (error) {
                    console.error(error.message)
                    res.status(500).send("some error occured")
                }
                })
            



module.exports=router