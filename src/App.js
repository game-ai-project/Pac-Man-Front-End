import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <div className="Grid">
		    <div className="Twitch-view" />
		  </div>
		  
		  <div className="Grid">
		    <div className="Instruction" />
		    <div className="Audio-settings" />
		    <div className="Action-log" />
		    <div className="Record" />
		  </div>
    </div>
  );
}

export default App;
