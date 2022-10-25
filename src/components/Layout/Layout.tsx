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
      bg-primary 
      bg-gradient
      p-0
    ">
    <Header />
    <main className="container d-flex justify-content-center">
      <Outlet />
    </main>
    <Footer />
  </div>
)
