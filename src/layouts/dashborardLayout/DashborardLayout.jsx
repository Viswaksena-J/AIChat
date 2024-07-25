import { Outlet } from 'react-router-dom'
import './dashborardLayout.css'

const DashborardLayout = () => {
  return (
    <div className='dashborardLayout'>
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashborardLayout