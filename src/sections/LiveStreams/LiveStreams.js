import './LiveStreams.css'
import {CardStreams,SectionWrapper,SectionHeader} from '../../components/index'
import LiveStreamsData from '../../Data/LiveStreamsData'


const LiveStreams = () => {

  const cards = LiveStreamsData.map(card => {
      return <CardStreams key={card.id} image={card.image} avatar={card.avatar} name={card.name} sentence={card.sentence}/>
    })


  return (
    <div>
      <>
      <SectionWrapper>
        <SectionHeader>Most Popular Live Streams</SectionHeader>
        {cards}
      </SectionWrapper>
      </>
    </div>
    
  )
}

export default LiveStreams
