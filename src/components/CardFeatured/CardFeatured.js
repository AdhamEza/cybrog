import './CardFeatured.css'

import {FaStar, FaDownload} from 'react-icons/fa'

// CardFeatured will contain all the details of the Featured Games section, such as the image, the title etc..

const CardFeatured = (props) => {
  return (

<div className='featured-games-item'>
    <div className='cardfeatured-wrapper'>
      <img className='featured-games-item-image' src={props.image}/>
      <div className='featured-games-item-content'>
        <h4>{props.title} 
        <br/>
        <span>{props.category}</span>
        </h4>
        <ul>
          <li><i style={{"color":"yellow"}}><FaStar/></i>{props.rate}</li>
          <li><i style={{"color":"var(--color-primary)"}}><FaDownload/></i>{props.download}</li>
        </ul> 
      </div>
    </div>
  </div>
  )
}

export default CardFeatured
