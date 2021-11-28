import './App.css';
import Equipaments from './Components/Equipaments';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Sales from './Components/Sales';
import Header from './Components/Header';
import Provider from './Context/Provider';
import Workforce from './Components/Workforce';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider>
        <Header/>
        <Sales/>
        <Orders/>
        <Products/>
        <Equipaments/>
        <Workforce/>
        </Provider>
        
      </header>
    </div>
  );
}

export default App;
