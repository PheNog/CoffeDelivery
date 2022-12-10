import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { SuccessOrder } from './pages/SuccessOrder'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success-order" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}