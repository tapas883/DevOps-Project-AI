import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Overview from './components/Overview.jsx'
import Dashboard from './components/Dashboard.jsx'
import Documentation from './components/Documentation.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Dashboard />
        <Documentation />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
