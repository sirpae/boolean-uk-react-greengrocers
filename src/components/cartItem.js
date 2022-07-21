function cartItem ({ item, addItemToCart, removeItemFromCart }) {
  const itemName = () => {
    const firstChar = item.name.charAt(0).toUpperCase()
    const restOfName = item.name.slice(1)
    return `${firstChar}${restOfName}`
  }

  const imageName = () => `${item.id}.svg`

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${imageName()}`}
        alt={item.name}
      />
      <p>
        {itemName()}
      </p>
      <button
        className="quantity-btn remove-btn center" 
        onClick={() => removeItemFromCart(item)}>
        -
      </button>
      <span className="quantity-text center">
        {item.quantity}
      </span>
      <button 
        className="quantity-btn add-btn center" 
        onClick={() => addItemToCart(item)}>
        +
      </button>
    </li>
  )
}

export default cartItem
