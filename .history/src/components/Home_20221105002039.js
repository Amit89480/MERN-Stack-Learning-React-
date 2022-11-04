import Notes from './Notes';

export const Home = () => {
const {showAlert}=props
    return (
        <div> 
            <Notes showAlert={ showAlert} />
        </div>
    )
}
