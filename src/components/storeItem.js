function storeItem ({ item, addItemToCart }) {
  const itemName = () => {
    const firstChar = item.name.charAt(0).toUpperCase()
    const restOfName = item.name.slice(1)
    return `${firstChar}${restOfName}`
  }

  const imageName = () => `${item.id}.svg`

  return (
    <li>
      <div className="store--item-icon">
        <img src={`assets/icons/${imageName()}`} alt={item.name} />
      </div>
      <p>
        {itemName()}
      </p>
      <button onClick={() => addItemToCart(item)}>
        Add to cart
      </button>
    </li>
  )
}

export default storeItem
