import { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"

import { REACT_ROUTS } from "./constans/routes"

import { Layout } from "./components"
import { AsyncPage, HomePage, StatePage, TodoPage } from "./screens"

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={REACT_ROUTS.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={REACT_ROUTS.STATE} element={<StatePage />} />
        <Route path={REACT_ROUTS.TODO} element={<TodoPage />} />
        <Route path={REACT_ROUTS.ASYNC} element={<AsyncPage />} />
      </Route>
    </Routes>
  )
}

export default App
