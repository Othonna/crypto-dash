import Head from 'next/head'
import Sidebar from './components/Sidebar';
import Header from './components/Header';


export default function Home() {
  return (
  <div>
    <div>
      <Sidebar />
      <Header />
    </div>
  </div>
  )
}
