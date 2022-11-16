import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
        <h4>{props.children}</h4>
      </div>
  )
}
const SectionHeaderEm = (props) => {
  return (
    <div className='section-header'><em>{props.children}</em></div>
  )
}

export default SectionHeader
export {SectionHeaderEm}