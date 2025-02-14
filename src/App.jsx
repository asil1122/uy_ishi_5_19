import React from "react"
import { Home } from "./page/home"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
