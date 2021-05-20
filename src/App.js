import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>
     Hello from App.js Name {name} Age {age - 5}  
    <br/>
    <Hello one={name}> </Hello>
    </div>
}
 
export default App;
