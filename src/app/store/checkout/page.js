import { Empty } from 'keep-react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/Redux/features/cart/cartSlice';
import NumberInput from '@/components/NumberInput/NumberInput';
import TransparentButton from '@/components/Buttons/TransparentButton';
import RemoveFromCart from './RemoveFromCart';
import Link from 'next/link';
import Image from 'next/image';

const CheckOut = () => {
    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const {cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const updateQuantity = (index, newQuantity) => {
        const updatedCart = cartItems.map((item, i) => {
            if (i === index) {
                return {
                    
                    ...item,
                        ...item.book,
                        quantity: newQuantity,
                  
                };
            }
            return item;
        });
        dispatch(addToCart(updatedCart));

    };

    // let price = [];
    // for (let item of cartItems) {
    //     price.push(item.book.price * item.book.quantity)

    // }
    // const totalPrice = price.reduce((a, b) => a + b, 0);

    return (
        <div className={`w-full flex flex-col md:flex-row md:justify-between items-start p-5 md:p-10`}>
            {
                cartItems.length ? (
                    <>
                        <div className='grid grid-cols-1 gap-5 w-full md:w-1/2'>
                            {
                                cartItems?.map((item, index) => (
                                    <div key={index} className='flex flex-row items-center justify-start border-2 border-gray-600 rounded-md p-2 flex-grow'>
                                        <Image width={200} height={250} className='w-20' src={item.image} alt={item.title} />
                                        <div className='flex flex-col space-y-1 ml-3 flex-grow'>
                                            <p className='font-semibold'>{item.title}</p>
                                            <p className='font-semibold'>Quantity: {item.quantity}</p>
                                            <p className='font-semibold'>Total price: {item.quantity * item.price.sellingPrice} BDT</p>
                                        </div>
                                        <div className='flex flex-col space-y-4 items-center justify-end'>
                                            <NumberInput
                                                sizing="md"
                                                value={item.quantity}
                                                setValue={(newValue) => updateQuantity(index, newValue)}
                                            />
                                            <div className='bg-red-800 text-white p-2 rounded-md cursor-pointer'>
                                                <RemoveFromCart id={item._id}/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`w-full md:w-1/2 mt-7 md:mt-0 rounded-md p-5 md:p-10 md:ml-7 space-y-3`}>
                            <p className='font-semibold text-xl md:text-2xl'>Total Books: {cartItems?.length} Books</p>
                            {/* <p className='font-semibold text-xl md:text-2xl'>Total Price: {totalPrice} BDT</p> */}
                            <p className='font-semibold text-xl md:text-2xl'>Shipping Cost: 100 BDT</p>
                            <p className='font-semibold text-xl md:text-2xl'>Discount: 45%</p>
                            {/* <p className='font-semibold text-xl md:text-2xl'>Total Cost: {totalPrice - (totalPrice * 0.45) + 100} BDT</p> */}
                            <p className='text-sm text-lime-900 pt-5'>If you have any coupon please apply</p>
                            <form className='flex flex-row items-start '>
                                <input type="text" name='coupon' className='p-2 text-gray-800 uppercase focus:outline-none' placeholder='Apply Coupon' />
                                <button className='rounded-none'>APPLY</button>
                            </form>
                            <div className='flex flex-col md:flex-row w-full md:justify-between pt-5 md:pt-10'>
                                <Link to='/'><TransparentButton customClass='px-5 md:px-10'>CONTINUE SHOPPING</TransparentButton></Link>
                               <CheckOut/>
                            </div>
                        </div>
                    </>
                ) :<></>
                    // <Empty
                    //     title="Your cart is empty"
                    //     content="You haven't added any books to your cart yet. Please go to the home page and add some books to your cart."
                    //     buttonText="Go To Home Page"
                    //     redirectBtnSize="sm"
                    //     redirectUrl="/"
                    //     image={
                    //         <Image className='w-72'
                    //             src="https://pennpowergroup.com/images/EmptyCart.png"
                    //             alt="404"
                    //             width={200}
                    //             height={200}
                    //         />
                    //     }
                    // />
            }
        </div>
    );
};

export default CheckOut;
