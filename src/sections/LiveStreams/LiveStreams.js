import './LiveStreams.css'
import {CardStreams,SectionWrapper,SectionHeader,S2wrapper,S3wrapper} from '../../components/index'
import LiveStreamsData from '../../Data/LiveStreamsData'
import {StreamButton} from '../../components/index'


const LiveStreams = () => {

  const cards = LiveStreamsData.map(card => {
      return <CardStreams key={card.id} image={card.image} avatar={card.avatar} name={card.name} sentence={card.sentence}/>
    })


  return (
    <div>
      <>

      <S2wrapper>{cards}</S2wrapper> 
      {/* <S3wrapper>{cards}</S3wrapper> */}
      

      <SectionWrapper>
        <div className='stream-header'><SectionHeader>Most Popular Live Streams</SectionHeader></div>

        <div className='livestream-clips'>
        {cards}
        </div>
        <div className='col-lg-12'>
          <div className='main-button'>
          <StreamButton>Discover All Streams</StreamButton>
          </div>
        </div>
        


      </SectionWrapper>
      </>
    </div>
    
  )
}

export default LiveStreams
