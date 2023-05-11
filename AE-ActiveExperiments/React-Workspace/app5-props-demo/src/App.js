import './App.css';
import HeaderProps from './Components/HeaderProps';
import HeaderState from './Components/HeaderState';
import MainProps from './Components/MainProps';
import MainState from './Components/MainState';

function App() {
  return (
    <div>
       <h3>Welcome to props-demo</h3>
       <HeaderProps username='Priyanka'/>
       <MainProps userid='1011'/>
       <HeaderState username='Priya'/>
       <MainState data='React-App'/>
    </div>
 
  );
  
}

export default App;
