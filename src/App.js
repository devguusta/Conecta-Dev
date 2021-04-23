import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import {  ThemeProvider } from '@material-ui/core/styles';
//import theme from './theme/';
import Auth from '../src/components/Auth';
import GuestRoute from './routes/GuestRoute';
import Home from './pages/Home/';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


import createTheme  from './theme';
import {useSettings} from './context/SettingsContext';

import './mock'



function App() {
  const {settings} = useSettings();


  return (
    
      <ThemeProvider theme={createTheme(settings)}>  

        <BrowserRouter>
        <Auth>
        <Routes>
        <GuestRoute path="/sign-in" element={<SignIn />}/>
        <GuestRoute path="/post/sign-up" element={<SignUp />}/>
            <Route path="//*" element={<Home />}/>
           
           
              
              
                </Routes>



        </Auth>
          
    </BrowserRouter>

    </ThemeProvider>



  
   
   
   
    
    
      
     

   
 
 
   
  );
}

export default App;
