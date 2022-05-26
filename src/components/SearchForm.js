import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  function searchItems () {
    setSearchTerm(searchValue.current.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <section className = "section">
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='form control'>
        <label htmlFor='name'> Search </label>
        <input type='text' id='name' ref={searchValue} onChange = {searchItems}/>
      </div>
    </form>
    
    </section>
  )
}

export default SearchForm