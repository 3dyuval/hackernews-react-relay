import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {
  info: string
  actor: any
}

export default function Navigation({ info, actor }: Props) {
  const [URLSearchParams, setURLSearchParams] = useSearchParams()

  function getToday() {
    /* set URL search params insted of Route */
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Adding 1 to month since it's zero-based
    const day = String(currentDate.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  return (
    <div className="app-header flex py-1 justify-between px-2  ">
      <div className="left flex flex-col md:flex-row">
        <Link to="/" className="left flex">
          <span className="border-white mr-1 box-border border aspect-square px-2 text-white text-center font-semibold text-sm">
            Y
          </span>
          <h1 className="text-md mr-4 whitespace-nowrap font-bold">{info}</h1>
        </Link>
        <nav className="flex items-center">
          <ul className="flex [&>*]:mx-1">
            <NavLink to="/new">
              <li>new</li>
            </NavLink>
            |
            <NavLink to="/threads">
              <li>threads</li>
            </NavLink>
            |
            <Link to={"/?day=" + getToday()} className={URLSearchParams.has('day') ? 'text-white' : null}>
              <li>past</li>
            </Link>
            |
            <NavLink to="/comments">
              <li>comments</li>
            </NavLink>
            |
            <NavLink to="/ask">
              <li>ask</li>
            </NavLink>
            |
            <NavLink to="/show">
              <li>show</li>
            </NavLink>
            |
            <NavLink to="/jobs">
              <li>jobs</li>
            </NavLink>
            |
            <NavLink to="/submit">
              <li>submit</li>
            </NavLink>
            <li className="text-white">
              {URLSearchParams.has('day') && URLSearchParams.get('day')}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <span>{actor?.name}</span> <span className="accent-teal-900">(1)</span>{' '}
        <Link to="/logout">logout</Link>
      </div>
    </div>
  )
}
