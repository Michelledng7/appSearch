import React from 'react'
import Item from './Item'
import { useGlobalContext } from '../context'


const ItemsList = () => {
    const {loading,lists,setSearchTerm} = useGlobalContext()
    console.log({lists})
  return (

    <div className = 'lists-center'>
    <h4 >repositories</h4>
    <div>
    {lists.map((list)=>{
      return <Item key= {list.id} {...list}/>})
    }
    </div>
    
    </div>
  )
}

export default ItemsList