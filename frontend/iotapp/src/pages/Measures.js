import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CurrentPath from '../components/CurrentPath'
import CurrentContext from '../components/CurrentContext'
import Main from '../components/Main'

function Measures() {
  return (
    <div className='App'>
        <Sidebar/>
        <Navbar/>
        <CurrentPath/>
        <CurrentContext/>
        <Main layout="Measures"/>
    </div>
  )
}

export default Measures