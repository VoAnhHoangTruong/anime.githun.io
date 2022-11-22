import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/564x/ef/a2/cb/efa2cbb62b194b1d1b7acf66cf3b8b0a.jpg"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Carib</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <h4 className={cx('name')}>Carib</h4>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Followers</strong>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Like</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
