import Head from 'next/head'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Container from './components/Container';


export default function Home() {
  return (
  <div>
    <div className='flex '>
      <Sidebar />
      <div className='w-screen'>
      <Header />
      <Container />
      </div>
    </div>
  </div>
  )
}
