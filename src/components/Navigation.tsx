
import { Link } from 'react-router-dom'

export default function Navigation ({info}: {info: string}) { 
    
    return  <div className="app-header flex  justify-between py-4 px-2">
    <h1 className="text-lg">{info}</h1>
    <nav >
        <ul className="flex [&>*]:border-x [&>*]:border-x-slate-800">
        <Link to="/new">
                <li>new</li>
            </Link>
            <Link to="/threads">
                <li>threads</li>
            </Link>
            <Link  to="/past">
                <li>past</li>
            </Link>
            <Link  to="/comments">
                <li>comments</li>
            </Link>
            <Link  to="/ask">
                <li>ask</li>
            </Link>
            <Link  to="/show">
                <li>show</li>
            </Link>
            <Link  to="/jobs">
                <li>jobs</li>
            </Link>
            <Link  to="/submit">
                <li>submit</li>
            </Link>
        </ul>
    </nav>
    <div className="flex">
    <span>yuvald</span> <span className="accent-teal-900">(1)</span> <Link to='/logout'>logout</Link>
    </div>
  </div>
}