import CartIcon from "../../../assets/add_cart.svg";
import { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, removeItemHandler } from "../../../actions";

const ListItem = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const item = useSelector(state => state.items.find(item => item.id === data.id));
    const dispatch = useDispatch();

    const increaseCounterByOne = (event) => {
        event.stopPropagation();  
        dispatch(addItemHandler(data))      
    };

    const decreaseCounterByOne = (event) => {
        event.stopPropagation();
        dispatch(removeItemHandler(data.id));
    };

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    };

    return (
        <Fragment>
        <div onClick={handleModal} className="item-card">
            <img className="item-fluid" src={data.thumbnail} alt={data.thumbnail}/>
            <div className="item-card__information">
                <div className="pricing">
                    <span>₹ {data.price} </span>
                    <small>{data.discountPercentage} % OFF</small>
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
            </div>
            {    
                !item || item.quantity < 1 ?
                    <button className="cart-add" onClick={increaseCounterByOne}>
                        <span>Add to cart</span>
                        <img src={CartIcon} alt="cart"/>
                    </button>
                    :
                    <div className="cart-addon">
                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{item.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
            }
        </div>
        { showModal && <Modal onClose={handleModal}>
            <div className="item-card__modal">
                <div className="img-wrap">
                    <img className="item-fluid" src={data.thumbnail} alt={data.thumbnail}/>
                </div>
                <div className="meta">
                    <h3>{data.title}</h3>
                    <div className="pricing">
                        <span>₹ {data.price} </span>
                        <small>{data.discountPercentage} % OFF</small>
                    </div>
                    <h4>{data.description}</h4>
                </div>
                {    
                !item || item.quantity < 1 ?
                    <button className="cart-add" onClick={increaseCounterByOne}>
                        <span>Add to cart</span>
                        <img src={CartIcon} alt="cart"/>
                    </button>
                    :
                    <div className="cart-addon">
                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{item.quantity}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
                }
            </div>
        </Modal>}

        </Fragment>
    )
}

export default ListItem;