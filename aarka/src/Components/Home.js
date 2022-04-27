import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/desktop31">Desktop31</Link></li>
            <li><Link to="/desktop109">Desktop109</Link></li>
            <li><Link to="/desktop107">Desktop107</Link></li>
        </ul>
    </div>
  )
}
