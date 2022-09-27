import {useDispatch} from "react-redux";
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {cartActions} from '../../store/cart-slice';

const MainHeader = (props) => {

    const dispatch = useDispatch();


    const toggleCartHandler = () => {
        dispatch(cartActions.toggleCart());
    } 
      
    
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton cartHandler={toggleCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
