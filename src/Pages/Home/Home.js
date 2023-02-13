import './Home.css'
import {Hero,MostPopular,GamingLibrary} from '../../sections/index'

const Home = () => {
  return (
    <>
        <Hero/>
        <MostPopular/>
        <GamingLibrary/>
    </>
  )
  // Since all the data is in the components and exported to the sections, here i just import the related section.
}

export default Home
