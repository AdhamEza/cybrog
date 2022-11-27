import './CardTopDownloaded.css'
import {FaStar, FaDownload} from 'react-icons/fa'

const CardTopDownloaded = (props) => {
  return (
    <div className='top-downloaded'>
      <ul>
        <li>
        <img src={props.image}/>
        <h4>{props.title}</h4>
        <h6>{props.category}</h6>
        <span><i style={{"color":"yellow"}}><FaStar/></i>{props.rate}</span>
        <span><i style={{"color":"var(--color-primary)"}}><FaDownload/></i>{props.download}</span>
        </li>
      </ul>
      
    </div>
  )
}

export default CardTopDownloaded
