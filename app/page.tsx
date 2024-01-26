import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>Sign Up</Link>
      <Link href='/agenda'>Agenda</Link>
    </>
  )
}

export default Home
