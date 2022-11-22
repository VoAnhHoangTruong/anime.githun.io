import classNames from 'classnames/bind';
import ListSearchItem from './ListSearchItem';
import styles from './ListSearch.module.scss';
const cx = classNames.bind(styles);
function ListSearch() {
    return (
        <div className={cx('category')}>
            <ul className={cx('list')}>
                <ListSearchItem />
            </ul>
        </div>
    );
}
export default ListSearch;
