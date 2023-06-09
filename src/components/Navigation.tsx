
import { Link, NavLink } from 'react-router-dom'

export default function Navigation ({info}: {info: string}) { 
    
    return  <div className="app-header flex py-1 justify-between px-2  ">
        <div className="left flex flex-col md:flex-row">
            <Link to='/' className="left flex">
            <span className="border-white mr-1 box-border border aspect-square px-2 text-white text-center font-semibold text-sm">Y</span>
    <h1 className="text-md mr-4 whitespace-nowrap font-bold">{info}</h1>
            </Link>
    <nav className="flex items-center">
        <ul className="flex [&>*]:mx-1">
        <NavLink to="/new" >
                <li>new</li>
            </NavLink>
            |
            <NavLink to="/threads">
                <li>threads</li>
            </NavLink>
            |
            <NavLink  to="/past">
                <li>past</li>
            </NavLink>
            |
            <NavLink  to="/comments">
                <li>comments</li>
            </NavLink>
            |
            <NavLink  to="/ask">
                <li>ask</li>
            </NavLink>
            |
            <NavLink  to="/show">
                <li>show</li>
            </NavLink>
            |
            <NavLink  to="/jobs">
                <li>jobs</li>
            </NavLink>
            |
            <NavLink  to="/submit">
                <li>submit</li>
            </NavLink>
        </ul>
    </nav>
        </div>
  
    <div className="flex">
    <span>yuvald</span> <span className="accent-teal-900">(1)</span> <Link to='/logout'>logout</Link>
    </div>
  </div>
}