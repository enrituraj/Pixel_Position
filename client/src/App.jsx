import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'
import Job_card from './components/job_card/job_card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <section className="container">
      <li className="section_title">
        Top Jobs
      </li>
      <div className="row">
        <Job_card title="full stack"/>
        <Job_card title="backend"/>
        <Job_card title="frontend"/>
        <Job_card title="frontend"/>
      </div>
    </section>
    </>
  )
}

export default App
