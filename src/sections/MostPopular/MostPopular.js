import './MostPopular.css'
import {Card,SectionWrapper,SectionHeader} from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {

const cards = MostPopularData.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
  })
  return (
    <>
    <SectionWrapper>
    <SectionHeader><i className='sht'>Most Popular</i> Right Now</SectionHeader>
      <div className='most-popular-items'>
        
        {cards}

      </div>
  </SectionWrapper>
  </>
  )
}

export default MostPopular
