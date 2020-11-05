import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner';
import Lunch from './Lunch'

function App() {
  return (
    <div className="App">
      <hr/>
        <Lunch DishName1= "rotti " DishName2= "Milk Pruducts"></Lunch>  /*this comonnet you could not return more than one componet at same  */
        <hr/>
        <Dinner DishName= "Chicken Karahi"/>  
        <hr/>
        <Dinner DishName= "Chicken Korma"/>
      </div>
  );
}

export default App;
