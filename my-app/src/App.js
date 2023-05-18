import './App.css';
import MyComponent from './Components/MyComponent';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("Hola esto esta funcionando");
  const value = { price: 100,  title: "asd"};

  const saludar = () => console.log("Holaa!!")

  return (
    <>
    <NavBar/>
      <div className="App">
     Hola CoDERS
     </div>
     <div className="App">
     chau CoDERS
     </div>
     <MyComponent name="coder" value= {value} saludar= {saludar} />
    </>
  
  );
}

export default App;
