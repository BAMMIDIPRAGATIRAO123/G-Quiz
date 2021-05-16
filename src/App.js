import React from 'react';
import './App.css';
import Home from '../src/component/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Javascript from "../src/component/Topic/Javascript";
import Header from "../src/component/Landing/Header";
import {AuthProvider} from "../src/Auth";
import Login from "../src/component/Landing/Login";
import Signup from "../src/component/Landing/Signup";
import Python from './component/Topic/Python';
import REACT from './component/Topic/REACT';
import CSS from './component/Topic/CSS';
import Bootstrap from './component/Topic/Bootstrap';
import JSQuiz from '../src/component/Quiz/JSQuiz';
import PythonQuiz from '../src/component/Quiz/PythonQuiz';
import About from "../src/component/About/About";
import board from "../src/component/Leaderboard/board";
import REACTQuiz from "../src/component/Quiz/REACTQuiz";
import BootstrapQuiz from "../src/component/Quiz/BootstrapQuiz";
import CSSQuiz from "../src/component/Quiz/CSSQuiz";
import Feedback from './component/Feedback/Feedback';
import comment from './component/Feedback/comment';

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
                     <Route exact path="/board" component={board}></Route>
                     <Route exact path="/JSQuiz" component={JSQuiz}></Route>
                     <Route exact path="/PythonQuiz" component={PythonQuiz}></Route>
                     <Route exact path="/REACTQuiz" component={REACTQuiz}></Route>
                     <Route exact path="/CSSQuiz" component={CSSQuiz}></Route>
                     <Route exact path="/BootstrapQuiz" component={BootstrapQuiz}></Route>
                     <Route exact path="/Javascript" component={Javascript}></Route>
                     <Route exact path="/Python" component={Python}></Route>
                     <Route exact path="/REACT" component={REACT}></Route>
                     <Route exact path="/CSS" component={CSS}></Route>
                     <Route exact path="/Bootstrap" component={Bootstrap}></Route>
                     <Route exact path="/About" component={About}></Route>
                     <Route exact path="/Feedback" component={Feedback}></Route>
                     <Route exact path="/comment" component={comment}></Route>
                  </Switch>
               </Box>
            </Container>
         </Router>
      </MuiThemeProvider>
   </AuthProvider>
  );
}

export default App;
