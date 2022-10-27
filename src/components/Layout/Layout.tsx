import { FunctionComponent } from "react"
import { Outlet } from "react-router-dom"

import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout: FunctionComponent = () => (
  <div className="
      d-flex
      flex-column
      fullscreen 
      container-fluid 
      p-0
    ">
    <Header />
    <main className="
      main
      d-flex 
      flex-column
      justify-content-center  
      align-items-center
      mx-auto
      mb-4
      pb-4
    ">
      <Outlet />
    </main>
    <Footer />
  </div>
)
