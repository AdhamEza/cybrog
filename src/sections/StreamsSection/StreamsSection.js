import './StreamsSection.css'
import {SectionWrapper,CardFeatured,SectionHeader,S2wrapper,CardTopStreamers,CardStreams,CardXX} from '../../components/index'
import FeaturedGamesData from '../../Data/FeaturedGamesData'
import LiveStreamsData from '../../Data/LiveStreamsData'
import XX from '../../Data/XX'
import TopStreamersData from '../../Data/TopStreamersData'
import {S3wrapper} from '../../components/index'
import {StreamButton} from '../../components/index'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const StreamsSection = () => {

  const cards = XX.map(card => {
    return <CardXX key={card.id} image={card.image} avatar={card.avatar} name={card.name} sentence={card.sentence}/>
  })

    const featuredcards = FeaturedGamesData.map(card => {
        return <CardFeatured key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
      })
      
    const streamerscards = TopStreamersData.map(card => {
      return <CardTopStreamers key={card.id} number={card.number} avatar={card.avatar} name={card.name}/>
      })

      const settings = {
        breakpoint: 600,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <div>
      <>
      <div className='stream'>
        <div className="row">
            <div className="col-lg-8">
        <S2wrapper>
          <SectionHeader><i className='sht'>Live</i> Streams</SectionHeader>
          <Slider {...settings}>{featuredcards}</Slider>
        </S2wrapper>
            </div> 

            <div className="col-lg-4">
            <S3wrapper>
              <SectionHeader><i className='sht'>Top</i> Streamers</SectionHeader>
            {streamerscards}
            </S3wrapper>
            </div>
        </div> 
      </div>
      <SectionWrapper>
        <div className='stream-header'><SectionHeader><i className='sht'>Most Popular</i> Live Streams</SectionHeader></div>

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

export default StreamsSection
