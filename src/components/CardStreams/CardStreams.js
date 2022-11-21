import './CardStreams.css'
import {FaCheck} from 'react-icons/fa'
const CardStreams = (props) => {
    return (
      <div className='stream-item'>
      <div className='cardstream-wrapper'>
        <img className='stream-item-image' src={props.image}/>
      <div className='down-content'>
          <img className='avatar' src={props.avatar}/>
          
            <div className='fa-check'><span><FaCheck/>{props.name}</span></div>
            <div className='streamcard-sentence'>{props.sentence}</div>
          </div>
        </div>
    </div>
    )
  }
  
  export default CardStreams