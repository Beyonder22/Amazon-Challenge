import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';

const Order = ({order}) => {
	let rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
	});
	return (
		<div className='order'>
			<h2>Order</h2>
				<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
				<p className='order_id'>
					<small>{order.id}</small>
				</p>
				{order.data.basket?.map(item => (
					<CheckoutProduct id={item.id} 
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
						hideButton/>
				))}
				<h3 className='order_total'>Order Total: {rupeeIndian.format(order.data.amount/100)}</h3>
		</div>
	)
}

export default Order;