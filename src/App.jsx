import { useState } from 'react'
import Nav from './components/nav'
import Header from './components/burgerHeader'
import Menuslider from './components/menuslider'
import Itemspage from './components/Itemspage'
import Appdownload from './components/Appdownload'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <Menuslider></Menuslider>
    <Itemspage></Itemspage>
    <Appdownload/>
    <Footer/>
    </>
  )
}

export default App
