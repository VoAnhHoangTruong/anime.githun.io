import classNames from 'classnames/bind';
import styles from './FoodterItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function FoodterItem({ title }) {
    return (
        <Link className={cx('item')} to="/shop">
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

export default FoodterItem;
