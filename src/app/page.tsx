import Image from 'next/image'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LoadMore from '@/components/LoadMore'
import { fetchApi } from './action'

export default function Home() {
  const data = fetchApi(1)
  return (
    <main>
      <Hero/>
      <LoadMore/>
      <Footer/>
    </main>
  )
}
