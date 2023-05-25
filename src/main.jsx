import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './proveder/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <HelmetProvider>
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </HelmetProvider>
  </AuthProvider>

)
