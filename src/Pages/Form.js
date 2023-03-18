import React,{useState} from 'react'

const Form = ({id, imageUrl, name, title}) => {

  
  return (
    <div >
        <a href={`/FullPage/${id}`}>
        <div key={id} className='iteminfo' >
          <img src={imageUrl} style={{width:'100%',height:'200px'}}/>
          <h1 style={{position:'relative',bottom:'30px'}} >{name}</h1>
          <p style={{position:'relative',bottom:'50px'}}>{title}</p>
          </div>
          </a>
 
  </div>
  )
}

export default Form