// ROUTES
import { Routes, Route } from 'react-router-dom'

// STYLES
import * as S from './App.styles.ts'

// COMPONENTS
import { Header, Navbar } from '@components'
import { Home, People } from '@containers'

// STATE MANAGEMENT
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <S.Container>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<People />} />
        </Routes>
      </S.Container>
    </QueryClientProvider>
  )
}

export default App
