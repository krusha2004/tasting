import axios from 'axios'
import React, { useEffect } from 'react'

const APIData = () => {

  // const fetchData = () => {
  //     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-23&sortBy=publishedAt&apiKey=d2f6680d6a7d42ca92c77fddcad93b9b")
  //     .then(Response => Response.json())
  //     .then(json => console.log(json))
  // }

  //   const fetchData = async () => {
  //     const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-23&sortBy=publishedAt&apiKey=d2f6680d6a7d42ca92c77fddcad93b9b")
  //     const data = await response.json()
  //     console.log(data, "response========>");   
  // }

  //   const fetchData = async () => {
  //     axios.get = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-11-24&sortBy=publishedAt&apiKey=d2f6680d6a7d42ca92c77fddcad93b9b")
  //     .then((response) => {
  //       console.log(response, "axiosssssssssssssssssssssssss");

  //     })   
  // }

  // const fetchData = async () => {
  //   const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d2f6680d6a7d42ca92c77fddcad93b9b")

  //   console.log(response, "axiosssssssssssssssssssssssss");
  // }

  const data = ({
    firstName: "ABC",
    lastName: "XYZ",
    Country: "INDIA",
    language: "ENGLISH",
    vehicle: [
      "CAR"
    ]
  })

  // const postData = async () => {
  //   fetch('https://dummyjson.com/products/add', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({data})
  //   })
  //   .then(res => res.json())
  // }

  const postData = async () => {
    const post = await axios.post('https://dummyjson.com/products/add', data)
    console.log(data, "respones====================>");

  }

  const putData = () => {
    fetch('https://dummyjson.com/products/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data
      })
    })
      .then(res => res.json())
  }

  // const deleteData = () => {
  //   fetch('https://dummyjson.com/products/1', {
  //     method: 'DELETE'
  //   })
  //     .then(res => res.json())

  // }
  const deleteData = async () => {
    const data1 = await axios.delete('https://dummyjson.com/products/1', data)
    console.log(data1, "response ============>");

  }
  
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div>
      APIData<button onClick={() => postData()}>Save</button>
      <button onClick={() => putData()}>Edit</button>
      <button onClick={() => deleteData()}>Delete</button>

    </div>
  )
}

export default APIData
