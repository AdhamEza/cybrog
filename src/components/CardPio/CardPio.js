import './CardPio.css'
import {FaEye, FaDownload} from 'react-icons/fa'

const CardPio = (props) => {
  return (
    <div className='most-popular-clip'>

<div className='cardpio-wrapper'><img className='most-popular-clip-image' src={props.image}/>

<div className='most-popular-clip-content'><h4 className='most-popular-clip-title'>{props.title}<br/></h4>

<ul> <li> <span style={{"color":"#ec6090"}}><FaEye/></span><span>{props.views}</span></li> </ul>
      
      </div>
    </div>
  </div>
  )
}

export default CardPio
