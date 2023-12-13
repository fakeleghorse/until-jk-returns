import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

function App() {
  return (
    <div className="App">
      {/* <marquee className="marquee-style">{'until jungkook returns'}</marquee> */}
      <div className='wrapper-main'>
        <div className='header'>
          <div>until</div>
          <div>jungkook</div>
          <div>returns</div>
        </div>
        <div className='progress-bar'>
          <ProgressBar completed={60} 
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted"
            labelClassName="label"/>
        </div>
      </div>

    </div>
  );
}

export default App;
