import './App.css';
import Confetti from './Confetti';

const shareMessage = 'I just ran my first container using Docker'
const shareLink = 'https://docker.com/'

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Congratulations!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "0px" }}>
          You ran your first container.
        </p>
        <p style={{ marginTop: "5px", marginBottom: "50px"}}>
          Franklin, I made this for you.
        </p>
        <div>
          <a target="_blank" href={"https://www.youtube.com/watch?v=NwTsZHGQ6FE" + shareMessage + "&url=" + shareLink} class="fa fa-twitter" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.youtube.com/watch?v=NwTsZHGQ6FE" + shareLink} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.youtube.com/watch?v=NwTsZHGQ6FE" + shareMessage + "&url=" + shareLink} class="fa fa-reddit" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;