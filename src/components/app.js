import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;