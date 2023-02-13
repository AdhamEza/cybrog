import './CardXX.css'
import {FaCheck} from 'react-icons/fa'

// CardXX will contain all the details of the Most Popular Live Streams component in the Streams section, 
// such as the image, the title etc..

const CardXX = (props) => {
    return (
      <>

      <div className='stream-item'>
      <div className='cardstream-wrapper'>
        <img className='stream-item-image' src={props.image}/>
      <div className='down-content'>
          <img className='avatar' src={props.avatar}/>
              <span className='fa-check'><FaCheck/></span><i>{props.name}</i></div>
            <h4>{props.sentence}</h4>
          </div>
          
        </div>
        </>
    
    )
  }
  
  export default CardXX

  