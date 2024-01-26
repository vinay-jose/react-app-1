const CartItem = ({item, onEmitDecreaseItem, onEmitIncreaseItem}) => {
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img src={item.thumbnail} className="img-fluid" alt={item.thumbnail}></img>
            </div>
            <div className="information">
                <div>
                    <h4>{item.title}</h4>
                    <div className="pricing">
                        <span>{item.price}</span>
                        <small>{item.discountPercentage} OFF</small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={() => onEmitDecreaseItem(item)}>-</button>
                        <span className="counter">{item.quantity}</span>
                    <button onClick={() => onEmitIncreaseItem(item)}>+</button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;