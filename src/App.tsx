import { BrowserRouter as Router , Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContatoPage/ContatoPage'
import FaqPage from './pages/FaqPage/FaqPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RecomPage from './pages/RecomPage/RecomPage'
import SolutionPage from './pages/SolutionPage/SolutionPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Header from './components/Header/Header'

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/About' element={<AboutPage />}/>
          <Route path='/Contact' element={<ContactPage />}/>
          <Route path='/Faq' element={<FaqPage />}/>
          <Route path='/Platform' element={<LoginPage />}/>
          <Route path='/Recomendation' element={<RecomPage />}/>
          <Route path='/Solution' element={<SolutionPage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </Router>
  )
}

export default App
