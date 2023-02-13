import './SectionWrapper.css'

// Since im going to use the same section wrapper to all my pages, i made a component to make it easier.

const SectionWrapper = (props) => {
  return (
    <div className='section-wrapper'>
        {props.children}
    </div>
  )
}



export default SectionWrapper

