import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'

import {Footer,Header} from './sections/index'
import{Home, Profile,Browse} from './Pages/index'
import {Container} from './components/index'


const App = () => {
    return (
   <>

    <Router>
        <Header/>
        <Container>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/profile' element= {<Profile />} />
                <Route path='/Browse' element= {<Browse />} />
            </Routes>
        </Container>
        <Footer/>
    </Router>

    </>
    
    )
}

export default App;