import './index.css'

const AddSubtractCounter = props => {
  const {
    id,
    toggleCounter,
    cartList,
    incrementFoodItemQuantity,
    decrementFoodItemQuantity,
  } = props

  const foodItem = cartList.find(each => each.id === id)

  const quantityCount = foodItem ? foodItem.quantity : 0

  const onIncrement = () => {
    incrementFoodItemQuantity(id)
  }

  const onDecrement = () => {
    if (quantityCount > 1) {
      decrementFoodItemQuantity(id)
    } else {
      decrementFoodItemQuantity(id)
      toggleCounter()
    }
  }

  return (
    <div className="add-subtract-counter-container">
      <button
        testid="decrement-count"
        type="button"
        onClick={onDecrement}
        className="add-subtract-counter-button"
      >
        -
      </button>
      <p testid="active-count" className="add-subtract-quantity-count">
        {quantityCount}
      </p>
      <button
        testid="increment-count"
        type="button"
        onClick={onIncrement}
        className="add-subtract-counter-button"
      >
        +
      </button>
    </div>
  )
}

export default AddSubtractCounter
