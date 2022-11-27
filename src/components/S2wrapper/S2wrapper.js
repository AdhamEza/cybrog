import './S2wrapper.css'

const S2wrapper = (props) => {
    return (
      <div className='s2-wrapper'>
        {props.children}
      </div>
    )
  }

  const S3wrapper = (props) => {
    return (
      <div className='s3-wrapper'>
      {props.children}
      </div>
    )
  }

  

  

  export default S2wrapper
  export {S3wrapper}
