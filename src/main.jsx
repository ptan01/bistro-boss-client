import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './proveder/AuthProvider'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'







const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-2xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>

)
