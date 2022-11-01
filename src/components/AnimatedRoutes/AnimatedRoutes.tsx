import { FunctionComponent } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { REACT_ROUTS } from "../../constans/routes"

import { Layout } from "../../components"
import { HomePage, StatePage, TodoPage, UsersPage, UserPage, NotFoundPage } from "../../screens"

export const AnimatedRoutes: FunctionComponent = () => {
  const location = useLocation()

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={REACT_ROUTS.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={REACT_ROUTS.STATE} element={<StatePage />} />
          <Route path={REACT_ROUTS.TODO} element={<TodoPage />} />
          <Route path={REACT_ROUTS.USERS} element={<UsersPage />} />
          <Route path={REACT_ROUTS.USER} element={<UserPage />} />
          <Route path={REACT_ROUTS.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
