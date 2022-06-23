import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewSurveyForm from './pages/NewSurveyForm'
import Surveys from './pages/Surveys'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surveys' element={<Surveys />} />
          <Route path='/surveys/new' element={<NewSurveyForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
