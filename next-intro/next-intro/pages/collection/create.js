import Head from 'next/head'
import {useState} from 'react'
import axios from 'axios'

const NewCollection = () => {
  const [list, setList] = useState([])
  const [error, setError] = useState(null)
  const [type, setType] = useState('')

  const handleNewType = (event) => {
    setType(event.target.value)
  }

  const createLists = async () => {
    try {
    const response = await axios.post('/api/collection', {type})
    console.log(response)

      if (response?.data?.success) {
        setList(response.data.data)
      }
    } catch (err) {
      setError(err?.response?.data?.error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createLists()
  } 

  if (error) {
    return <p>Noe gikk galt: {error}</p>
  }

  return (
    <>
      <Head>
        <title>Ny Liste</title>
      </Head>
      <h1>Ny Liste</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="type">Lag en ny liste</label>
        <input id="type" type="text" name="type" value={type} onChange={handleNewType} />
        <button type="submit">Send</button>
      </form>
      {list.map((item) => (
        <h2>{item.type}</h2>
      ))}
    </>
  )
}

export default NewCollection