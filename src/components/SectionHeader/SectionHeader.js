import './SectionHeader.css'

// Since im going to use the same title CSS , i made a component to make it easier to use.

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
        <h4>{props.children}</h4>
      </div>
  )
}


export default SectionHeader

