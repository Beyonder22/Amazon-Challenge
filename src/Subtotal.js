import React from 'react';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from "./reducer";
import {useNavigate  } from 'react-router-dom';
function Subtotal() {
	const navigate = useNavigate();
	let rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});
	const [{basket}, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<p>
				Subtotal ({basket.length} items): <strong>{rupeeIndian.format(getBasketTotal(basket))}</strong>
			</p>
			<small className="subtotal_gift">
				<input type="checkbox"/>This order contains a gift
			</small>
			<button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;