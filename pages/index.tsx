import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/pages/index.module.scss'
// import Header from '../components/Landing/Header'
import Hero from '../components/Landing/Hero'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hashtune</title>
      </Head>
      {/* <Header/> */}
      <Hero/>
      
    </div>
  )
}

export default Home
