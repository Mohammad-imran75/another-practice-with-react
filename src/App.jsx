import './App.css'
import LineChart from './Component/LineChart/LineChart'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import DaisyCli from './Component/DaisyCli/DaisyCli'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyCli></DaisyCli> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
