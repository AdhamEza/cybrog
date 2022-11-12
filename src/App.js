import './App.css'

import {Container} from './components/index'
import {Footer,Header,Hero,MostPopular} from './sections/index'


const App = () => {
    return (
        <>
        <Header  />
        <Container>
            <Hero/>
            <MostPopular/>
        </Container>
        
        { /*<Footer /> */}
        </>
    );
}

export default App;