import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import StoreItem from './components/storeItem'
import CartItem from './components/cartItem'
import { useState} from 'react'

export default function App() {
  const [storeItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const getTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)

  const addItemToCart = (item) => {
    const newCart = [...cart]
    const itemIndex = newCart.findIndex(i => i.id === item.id)

    if (itemIndex !== -1) {
      newCart[itemIndex].quantity++
    } else {
      newCart.push({
        ...item,
        quantity: 1
      })
    }

    setCart(newCart)
  }

  const removeItemFromCart = (item) => {
    const newCart = [...cart]
    const itemIndex = newCart.findIndex(i => i.id === item.id)

    if (itemIndex !== -1) {
      newCart[itemIndex].quantity--
      if (newCart[itemIndex].quantity === 0) {
        newCart.splice(itemIndex, 1)
      }
    }

    setCart(newCart)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {
            storeItems.map(item => 
              <StoreItem
                key={item.id}
                item={item}
                addItemToCart={addItemToCart}
              />
          )}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
              cart.map(item => 
                <CartItem
                  key={item.id}
                  item={item}
                  addItemToCart={addItemToCart}
                  removeItemFromCart={removeItemFromCart}
                  />
            )}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              ${getTotal()}
            </span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
