import Head from 'next/head'
import Sidebar from './components/sidebar';
import Header from './components/header';


export default function Home() {
  return (
    <div>
     <Sidebar />
     <Header />
  </div>
  )
}
