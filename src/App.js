import React from 'react';
import './App.css';
import { PopoverButton } from './PopoverButton';

function App() {

  let content = "Sint eiusmod deserunt veniam sunt officia occaecat veniam voluptate. Exercitation anim esse laborum ipsum irure aliquip mollit magna elit ut culpa ex qui. Dolor dolore ad ut incididunt non id officia. Fugiat dolor id cillum proident mollit pariatur qui amet eiusmod aliqua. Consequat esse irure ipsum Lorem culpa est et ipsum ut in irure. Deserunt esse eu sint non. Duis deserunt irure ullamco laborum consectetur sint id veniam cupidatat labore cillum dolore."
  let buttonText = "Wanna see magic"
  
  return (
    <div className="App">
      <PopoverButton buttonText={buttonText} popoverContent={content}/>
    </div>
  );
}

export default App;
