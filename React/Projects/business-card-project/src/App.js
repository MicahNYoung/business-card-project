import React from 'react';
import './index.css';

import { Info } from './Components/Info';
import { About } from './Components/About';
import { Interests } from './Components/Interests';
import { Footer } from './Components/Footer';

export function App(){
    return(
        <div>
            <div className="app">
                <Info/>
                <About/>
                <Interests/>
                <Footer/>
             </div>
        </div>
        
)}