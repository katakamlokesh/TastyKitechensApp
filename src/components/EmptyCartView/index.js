import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <>
    <img
      alt="empty cart"
      src="https://res.cloudinary.com/dpx8zts9r/image/upload/v1634629174/tasty-kitchens-no-orders-yet-image_hxsp3k.png"
      className="cart-empty-image"
    />
    <h1 className="cart-empty-heading">No Order Yet!</h1>
    <p className="cart-empty-heading-2">
      Your cart is empty. Add something from the menu.
    </p>

    <Link to="/">
      <button type="button" className="order-now-btn">
        Order now
      </button>
    </Link>
  </>
)

export default EmptyCartView
