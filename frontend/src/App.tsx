// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Fullblog } from './pages/Fullblog'
import { PublishComp } from './pages/Publish'
import { RecoilRoot } from 'recoil'
import { SuccPost } from './pages/SuccPost'
import { Errorpage } from './pages/error'
import { MyBlog } from './pages/myblog'
import { Landing } from './pages/landing'



function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/fullblog' element={<Fullblog/>}></Route>
            <Route path='/publish' element={<PublishComp/>}/>
            <Route path='/Success' element={<SuccPost/>}/>
            <Route path='/error' element={<Errorpage/>}/>
            <Route path='/myblog' element={<MyBlog/>}/>
            <Route path='/' element={<Landing/>}/>
          </Routes>

      </BrowserRouter>
    </RecoilRoot>
      
    </>
  )
}

export default App
