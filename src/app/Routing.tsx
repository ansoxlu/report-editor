import { BrowserHistory, createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Default from '../layouts/Default'
import Home from '../pages/home/Home'
import MedataEditor from '../pages/metadata/MedataEditor'
import TemplateEditor from '../pages/template/TemplateEditor'
import Preview from '../pages/preview/Preview'

export default function Routing() {
  const historyRef = React.useRef<BrowserHistory>()
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window })
  }

  const history = historyRef.current
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={import.meta.env.DEV ? '/' : 'report-editor'}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      <Routes>
        <Route path="/" element={<Default />}>

          <Route path="/metadata/:id" element={<MedataEditor />} />

          <Route path="/template/:id" element={<TemplateEditor />} />

          <Route path="/preview/:id" element={<Preview />} />

          <Route path="/:key" element={<Home />} />

          <Route path="/" element={<Home />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}
