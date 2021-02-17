import './App.css';
import StartPage from './components/StartPage/startPage';
import Home from './components/home/home';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {props.animationDone?<Home />:<StartPage />}
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    animationDone:state.startingAnimDone
  }
}
export default connect(mapStateToProps)(App);
