import React , {Fragment} from 'react';
import Home from './Home';
import Recipe from './Recipe';
import Cuisine from './Cuisine';
import Searched from './Searched';
import { Routes, Route,useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function Pages() {
  const location = useLocation();  
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.pathname}>
          <Route path="/cuisine" element={ <Cuisine /> }>
            <Route path=":type" element={ <Cuisine /> }/>
          </Route>
          <Route path="/searched" element={ <Searched /> }>
            <Route path=":search" element={ <Searched /> } />
          </Route>
          <Route path="/recipe/:id" element={ <Recipe /> }/>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </AnimatePresence> 
    </>

  )
}

export default Pages