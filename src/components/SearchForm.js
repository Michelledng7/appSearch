import React, {useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const { selects, setSelects } = useGlobalContext()
  const searchValue = React.useRef('')
  //const [selects, setSelects] = useState()

  useEffect (() => {
    searchValue.current.focus()
  },[])
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
        <h2> Search </h2>
        <br/>
        <input type='text' id='name' size = '50' ref={searchValue} onChange = {searchItems}/>
        <br/><br/>
      <label>Filter by language: </label>
      <select value = {selects} onChange = {(e) => {setSelects(e.target.value)}}>
        <option default>All</option>
        <option>Ruby</option>
        <option>Pathon</option>
        <option>Golang</option>
        <option>Java</option>
        <option>HTML</option>
      </select>
      </div>
    </form>
    </section>
  )
}

export default SearchForm