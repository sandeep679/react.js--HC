import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from "./components/User/User.jsx"
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router =createBrowserRouter([                       // first way
//   {
//     path:"/",           // it top level element because everyone is in nested
//     element : <Layout/>  ,
//     children:[                    //because it have further value in nested     
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element: <Contact/>
//       }
//     ]                       
//   } 
// ])


const router=createBrowserRouter(                  //2nd ways
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
    
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github/>}/>

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/> 
  </StrictMode>,
)
