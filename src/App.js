import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router}from "react-router-dom";
import{Routes,Route} from "react-router";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
    <Router>
        <HeaderComponent/>
            <div className="container">
          <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>    
          <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>   
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> {/* Route for updating an employee */}

          </Routes>
            </div> 
            <FooterComponent/>           
    </Router>  
    </div>
  );
}

export default App;
