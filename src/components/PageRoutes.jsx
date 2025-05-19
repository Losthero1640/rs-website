import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Team from '../pages/Team.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import NotFound from '../pages/NotFound.jsx'
import WorkshopsDetail from "../pages/WorkshopsDetail.jsx"
import CompetitionDetail from "../pages/CompetitionDetail.jsx"
import Competitions from "../pages/Competitions.jsx"
import Workshops from "../pages/Workshops.jsx"
import Achievements from "../pages/Achievements.jsx"
// while adding routes also add the routes in the isNotFound variable in app.jsx
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/workshops/:id" element={<WorkshopsDetail />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/competitions/:id" element={<CompetitionDetail />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="*" element={<NotFound />} />       //page Not found route should always be the last route
    </Routes>
  )
}

export default PageRoutes
