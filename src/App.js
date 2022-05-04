import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPost, searchByTitle } from './redux/actions'
import { Posts } from './components/Posts/Posts'
import searchIcon from "./img/icons/search.png"
import './App.scss'
import axios from 'axios'

function App() {

  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchByTitle(title))
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch(getAllPost(res.data))
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Поиск'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type='submit'><img src={searchIcon} alt="" /></button>
      </form>
      <Posts />
    </div >
  );
}

export default App
