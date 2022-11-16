import './GamingLibrary.css'
import {GamingLibraryCard,SectionHeader,SectionWrapper,SectionHeaderEm} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download}/>
      })


  return (
    <>
    <SectionWrapper>
    <SectionHeader>Your Gaming Library</SectionHeader>
      <div className='gaming-library-cards'>
        
        {cards}

      </div>
  </SectionWrapper>
  </>
  )
}

export default GamingLibrary
