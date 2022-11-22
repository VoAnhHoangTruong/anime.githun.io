import classNames from 'classnames/bind';
import FoodterItem from './FoodterItem';
import styles from './Foodter.module.scss';
const cx = classNames.bind(styles);
function Foodter() {
    return (
        <div className={cx('wrapper')}>
            <FoodterItem title="giới Thiệu" />
            <FoodterItem title="Bản quyền" />
            <FoodterItem title="BÁo  chí " />
            <FoodterItem title="Liên hệ" />
            <FoodterItem title="hoangtruongqh03@gmail.com" />
            <FoodterItem title="chính sách" />
            <FoodterItem title="quyền riêng tư" />
        </div>
    );
}

export default Foodter;
