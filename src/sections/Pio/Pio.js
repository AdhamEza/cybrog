import './Pio.css'
import {CardPio,SectionWrapper,SectionHeader} from '../../components/index'
import PioData from '../../Data/PioData'
import profile from '../../assets/images/profile.jpg'
import {SecondaryButton} from '../../components/index'
import {PrimaryButton} from '../../components/index'

const Pio = () => {

    const cards = PioData.map(card => {
        return <CardPio key={card.id} image={card.image} title={card.title} views={card.views}/>
      })

  return (
    <div>
      <>
    <SectionWrapper>
    
      <div className='row'>
        <div className='col-lg-4'>
        <img className='profile-img' src={profile}/>
        </div>
            <div className='col-lg-4 align-self-center'>
              <div className='main-info'>
              <span>Offline</span>
            <h4>Adham Ezaldin</h4><p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            </div>
            <div className='main-info-btn'><SecondaryButton>Start Live Stream</SecondaryButton></div>
            </div>
            <div className='col-lg-4 align-self-center'>
              <div className='main-info-stats'>
              <ul>
                <li>Games Downloaded
                  <span>3</span>
                </li>
                <li>Friends Online
                  <span>16</span>
                </li>
                <li>Live Streamers
                  <span>None</span>
                </li>
                <li>Clips
                  <span>29</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
      
      
      <div className='space-between'></div>

     <div className='title'><SectionHeader><i className='sht'>Your Most</i> Popular Clips</SectionHeader></div>
      <div className='most-popular-clips'>
       
        {cards}

      </div>

      <div className='row'>
        <div className='most-popular-clips-btn'><PrimaryButton>Load More Clips</PrimaryButton></div>
      </div>
      
  </SectionWrapper>
  </>
    </div>
  )
}

export default Pio
