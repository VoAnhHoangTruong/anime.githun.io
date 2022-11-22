import classNames from 'classnames/bind';
import styles from './Qc.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Qc() {
    // const ingqc = [
    //     {
    //         to: '/opito',
    //         src: 'https://i.pinimg.com/564x/8a/b9/f1/8ab9f11c1b168a347a0e1f57890dbfa4.jpg',
    //     },
    //     {
    //         to: '/naruto',
    //         src: 'https://i.pinimg.com/564x/8a/b9/f1/8ab9f11c1b168a347a0e1f57890dbfa4.jpg',
    //     },
    //     {
    //         to: '/nanami',
    //         src: 'https://i.pinimg.com/564x/8a/b9/f1/8ab9f11c1b168a347a0e1f57890dbfa4.jpg',
    //     },
    //     {
    //         to: '/geto',
    //         src: 'https://i.pinimg.com/564x/8a/b9/f1/8ab9f11c1b168a347a0e1f57890dbfa4.jpg',
    //     },
    // ]
    return (
        <Link className={cx('wrapper')} to={'/shop'}>
            <img
                alt="quangr caos ddee"
                className={cx('imgqc')}
                src={'https://i.pinimg.com/564x/8a/b9/f1/8ab9f11c1b168a347a0e1f57890dbfa4.jpg'}
            ></img>
        </Link>
    );
}

export default Qc;
