import { Route, Routes } from 'react-router-dom'
import DataChart from './components/DataChart'
import DataForm from './components/DataForm'
import Layout from './components/Layout'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<DataForm/>}  />
            <Route path='/add' element={<DataForm/>}  />
            <Route path='/chart' element={<DataChart/>}  />
        </Route>
      </Routes>
    </div>
  )
}

export default App
