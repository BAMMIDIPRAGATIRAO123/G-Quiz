import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./components/Landing/Header";
import {AuthProvider} from "../src/Auth";
import Login from "./components/Landing/Login";
import Signup from "./components/Landing/Signup";

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#00C78C',
        dark: '#000'
     },
     secondary: {
       main: '#008B00',
     },
  },
   typography: { 
     useNextVariants: true
  },
  background: 'rgba(0, 0, 0, 0.78);'
});

function App() {
  return (
   <AuthProvider className="App">
      <MuiThemeProvider theme = { theme }>
          <Router>
            <Container maxWidth="sm">
               <Box my={4}>
                  <Header/>
                  <Switch>
                     <Route exact path="/Login" component={Login}></Route>
                     <Route exact path="/Signup" component={Signup}></Route>
                     <Route exact path="/Home" component={Home}></Route>
                  </Switch>
               </Box>
            </Container>
         </Router>
      </MuiThemeProvider>
   </AuthProvider>
  );
}

export default App;

