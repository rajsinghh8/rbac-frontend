import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'

ReactDOM.render(<StrictMode><RouterProvider router={router} /></StrictMode>, document.getElementById('root'))
