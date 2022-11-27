import './LiveStreams.css'
import {CardStreams,CardTopDownloaded,CardFeatured,SectionWrapper,SectionHeader,S2wrapper} from '../../components/index'
import LiveStreamsData from '../../Data/LiveStreamsData'
import FeaturedGamesData from '../../Data/FeaturedGamesData'
import TopDownloadedData from '../../Data/TopDownloadedData'
import {StreamButton} from '../../components/index'
import {S3wrapper} from '../../components/index'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const LiveStreams = () => {

  const cards = LiveStreamsData.map(card => {
      return <CardStreams key={card.id} image={card.image} avatar={card.avatar} name={card.name} sentence={card.sentence}/>
    })

  const featuredcards = FeaturedGamesData.map(card => {
      return <CardFeatured key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })

    const topdownloadedcards = TopDownloadedData.map(card => {
      return <CardTopDownloaded key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
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
          <SectionHeader>Featured Games</SectionHeader>
          <Slider {...settings}>{featuredcards}</Slider>
        </S2wrapper>
          </div> 
        </div>
          
          
          <div className="col-lg-4">
            <S3wrapper>
              <SectionHeader>Top Downloaded</SectionHeader>
              {topdownloadedcards}
            </S3wrapper>
          </div>
      </div>
      

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
