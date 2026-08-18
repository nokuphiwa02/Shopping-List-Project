import { Route, Routes } from 'react-router'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Register } from './components/pages/Register'

export const App = () => {
  return (
    <Routes>
    <Route path='/' element =   {< LoginForm />}/>
    <Route  path='register' element = { < Register />}/>
    </Routes>
  )
}
