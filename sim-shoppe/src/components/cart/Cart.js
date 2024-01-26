import { Fragment, useState } from "react"
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import OrderSuccessModal from "./Order";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, clearCartHandler, removeItemHandler } from "../../actions";

const Cart = ()=>{
    const [showCartModal, setShowCartModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const items = useSelector(state => state.items);
    const totalAmount = useSelector(state => state.totalAmount);
    const dispatch = useDispatch();

    const handleCartModal = () => {
        setShowCartModal(previousState => !previousState);
    };

    const handleOrderModal = () => {
        setShowCartModal(false);
        dispatch(clearCartHandler())
        setShowOrderModal(previousState => !previousState);
    }

    const dispatchEvents = (item, type) => {
        if (type === 1){
            dispatch(addItemHandler(item));
        }
        else if (type === -1){
            dispatch(removeItemHandler(item.id));
        }

    }
    return (
        <Fragment>
        <div className="cart-container" onClick={handleCartModal}>
            <button>
                <span data-items={items.length}></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
        </div>
        { showCartModal && <Modal onClose={handleCartModal}>    
            <div className="checkout-modal">
                <h2>Checkout</h2>
                
                { 
                items.length > 0 ?
                    <>
                        <div className="checkout-modal_list">
                            {
                                items.map(item => {
                                    return(
                                        <CartItem 
                                            item = {item} 
                                            key = {item.id}
                                            onEmitDecreaseItem = {item => dispatchEvents(item, -1)}
                                            onEmitIncreaseItem = {item => dispatchEvents(item, 1)}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="checkout-modal_footer">
                            <div className="totalAmount">
                                <h4>Total Amount : </h4>
                                <h4>₹ { totalAmount }</h4>
                            </div>
                            <button onClick={handleOrderModal}>Order Now</button>
                        </div>
                    </>
                    :
                    <div className="checkout-modal_list">
                        <div className="empty-cart">Please add items in your cart..</div>
                    </div>
                }
            </div>        
        </Modal> }
        { showOrderModal && <OrderSuccessModal onClose={handleOrderModal}/> }
        </Fragment>
    );
};

export default Cart;