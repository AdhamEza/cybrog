import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <div className='button primary-btn'><a href='/#'>{props.children}</a></div> 
    )
}


const SecondaryButton = (props) => {
    return (
      <div className='button secondary-btn'><a href='/#'>{props.children}</a></div>
    )
  }

const StreamButton = (props) => {
    return (
      <div className='button stream-btn'><a href='/stream'>{props.children}</a></div> 
      )
  }

export default PrimaryButton
export {SecondaryButton}
export {StreamButton}