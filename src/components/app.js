import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Catalog from './pages/catalog/catalog.js';
import Pleasure from './pages/pleasure/pleasure.js';
import Homepage from './pages/Homepage/homepage.js';


const App = () => {
    
    return (
        <Router>
            <div className="app">
                <main>
                    <Routes>
                        <Route path="/" element = {<Homepage/>}/>
                        <Route path='/pleasure' element = {<Pleasure/>}/>
                        <Route path='/catalog' element = {<Catalog/>}/>

                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;