import { Route, Routes } from 'react-router'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Register } from './components/pages/Register'
import { Home } from './components/pages/Home'
import { Profile } from './components/pages/Profile'
import { ShoppingItemsPage } from './components/pages/ShoppingItemPage'
 
export const App = () => {
  return (
    <Routes>
    <Route path='/' element =   {< LoginForm />}/>
    <Route  path='/register' element = { < Register />}/>
    <Route path='/homepage' element = { < Home />}/>
    <Route path='/profilepage' element = { < Profile />} />
    <Route path='/ShoppingItemPage' element= {< ShoppingItemsPage/>}/>
    </Routes>
  )
}
