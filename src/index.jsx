import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Results from './pages/Results/'
import Freelances from './pages/Freelances/'
import Error from './components/Error/'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
