import logo from './logo.svg';
import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <img src={twitch_view} className="View-of-Twitch" alt="temporaly" />
		  <div className="Instruction" />
		  <div className="Audio-settings" />
		  <div className="Action-log" />
		  <div className="Record" />
    </div>
  );
}

export default App;
