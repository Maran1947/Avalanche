import React from 'react'
import './Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';

function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        basket.map(item=>dispatch({
            type:"REMOVE_FROM_BASKET",
            id:item.id
        }));
        history.push('/');
    };

    return (
        <div className="payment">
            <div className="payment__Container">

                <h1>
                    Checkout ( <Link to="/checkout">{basket?.length} items</Link> )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>A1 Apartment</p>
                        <p>Street of Heaven</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => {
                            return <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        })}
                    </div>

                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                        {/* <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/> 
                                
                                <div className='payment__priceContainer'>
                                  <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button> 
                                </div>

                                  {/* Errors */}
                        {/* {error && <div>{error}</div>} */}
                        {/* </form> */}
                        <h3>Order total: ${getBasketTotal(basket)}</h3>
                        <button onClick={handleClickOpen}>Order Now</button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                                🙌 Hoorah!
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    ✅ Ordered placed successfully
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Go back to home
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
