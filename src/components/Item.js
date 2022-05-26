import React from 'react'
import star16 from '../star16.svg'
import logo from '../logo.svg'

const Item = ({id, 
              name,
              des,
              keyWords,
              count,
              lang,
              license,
              updated}) => {
  return (
    <article className='item'>
      
      <div>
      <p><img src = {logo}></img><h4 style={{color:'steelblue'}}>{name}</h4></p>
        <h5>{des}</h5>
        <p className='keywords'>{keyWords}</p>
        <p> <img src = {star16}></img> {count}<br/>{lang}<br/></p>
        <p>Updated: {updated}</p>
      </div>
    </article>
  )
}

export default Item