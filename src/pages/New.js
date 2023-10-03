import { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2'
import './New.css'
import { useParams } from 'react-router-dom'

function New() {
  const { id } = useParams()

  let text = localStorage.getItem(`text${id}`)
  if (text === 'null') {
    text = ''
  }
  const [data, setData] = useState(text)

  useEffect(() => {
    localStorage.setItem(`text${id}`, data)
  }, [data, id])

  return (
    <div
      className='New
  '
    >
      <Navbar2 id={id} />
      <textarea
        value={data}
        onChange={e => setData(e.target.value)}
        className='textarea'
        placeholder='Write...'
        autoFocus
      ></textarea>
      {+id === 1 ? (
        ''
      ) : (
        <a className='btn_previous' href={`/new/${+id - 1}`}>
          Previous Page
        </a>
      )}
      <a className='btn_new' href={`/new/${+id + 1}`}>
        Next Page
      </a>
    </div>
  )
}

export default New
