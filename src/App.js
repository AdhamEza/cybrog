import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'

import {Footer,Header} from './sections/index'
import{Home, Profile,Browse,Streams} from './Pages/index'
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
                <Route path='/Streams' element= {<Streams />} />
            </Routes>
        </Container>
        <Footer/>
    </Router>

    </>
    
    )
}

export default App;