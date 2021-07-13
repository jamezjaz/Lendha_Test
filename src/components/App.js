// import logo from './logo.svg';
import '../styles/App.css';
import Routes from '../Routes';
import { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <h3>LENDHA! LENDHA!! LENDHA!!!</h3>
        <Routes />
      </div>
    );
  }
};

export default App;
