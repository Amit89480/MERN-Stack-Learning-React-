import Notes from './Notes';

export const Home = (props) => {
    const { showAlert } = props;
    return (
        <div> 
            <h2></h2>
            <Notes showAlert={ showAlert} />
        </div>
    )
}
