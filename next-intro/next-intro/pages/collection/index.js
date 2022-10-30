import Head from 'next/head'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Collection = () => {
  const [list, setList] = useState([])

  const getLists = async () => {
    try {
    const response = await axios.get('/api/collection')
    console.log(response)
      if (response?.data?.success) {
        setList(response.data.data)
      }
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getLists()
  }, [])

  return (
    <>
    <Head>
      <title>Liste</title>
    </Head>
    <h1>Liste</h1>
    <section>{list.map((item) => (
      <>
        <h3>{item.type}</h3>
        <ul>
            {item.movies?.map((movie, i) => (
              <li key={i}>
              {movie.movie}
              </li>
            ))}
        </ul>
      </>
    ))}</section>
    </>
  )
}

export default Collection