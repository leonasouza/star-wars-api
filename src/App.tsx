// ROUTES
import { Routes, Route } from 'react-router-dom'

// STYLES
import * as S from './App.styles.ts'

// COMPONENTS
import { Header, Home, Navbar } from '@components'

function App() {
  return (
    <S.Container>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people' element={<>pipou</>} />
      </Routes>
    </S.Container>
  )
}

export default App
