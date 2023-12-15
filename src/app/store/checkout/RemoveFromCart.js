"use client"
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const RemoveFromCart = ({id}) => {
    const {cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItems = (id) => {
        const reamingItems = cartItems.filter(ct => ct.id !== id)
        dispatch(deleteCartItem(reamingItems))
    };
    return (
        <FaTrash onClick={() => handleRemoveItems(id)} />
    );
};

export default RemoveFromCart;