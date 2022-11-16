import './Pio.css'
import {CardPio,SectionWrapper,SectionHeader} from '../../components/index'
import PioData from '../../Data/PioData'
import profile from '../../assets/images/profile.jpg'

const Pio = () => {

    const cards = PioData.map(card => {
        return <CardPio key={card.id} image={card.image} title={card.title} views={card.views}/>
      })

  return (
    <div>
      <>
    <SectionWrapper>
         
      <div className='profile'>
        <div className='profile-wrapper'>
          <img className='profile-item-image' src={profile} />
          <div className='profile-item-content'>
            <h4 className='profile-item-name'>Adham Ezaldin <br /><span>You Haven't Gone Live yet. Go Live By Touching The Button Below.</span></h4>
          </div>
        </div>
      </div>

      <div className='space-between'></div>
     <SectionHeader>Your Most Popular Clips</SectionHeader>
      <div className='most-popular-clips'>
       
        {cards}

      </div>
  </SectionWrapper>
  </>
    </div>
  )
}

export default Pio
