import './CardTopStreamers.css'
import {FaCheck} from 'react-icons/fa'
import {FollowButton} from '../../components/index'


const CardTopStreamers = (props) => {
  return (
    <div className='top-streamers'>
     <ul>
        <li>
            <span>{props.number}</span>
            <img src={props.avatar} alt=""/>
            <h6>
                <i><FaCheck/></i>{props.name}
            </h6>
            <FollowButton>Follow</FollowButton>
        </li>
     </ul>
    </div>
  )
}

export default CardTopStreamers
