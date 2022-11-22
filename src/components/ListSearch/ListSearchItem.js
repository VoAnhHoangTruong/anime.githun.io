import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ListSearch.module.scss';
const cx = classNames.bind(styles);
function ListSearchItem() {
    const list = [
        {
            id: 1,
            title: 'Hành Động',
            to: '/hanhdong',
        },
        {
            id: 2,
            title: 'Viễn Tưởng',
            to: '/vientuong',
        },
        {
            id: 3,
            title: 'Lãng Mạn',
            to: '/langman',
        },
        {
            id: 4,
            title: 'Võ Thuật',
            to: '/vothuat',
        },
        {
            id: 5,
            title: 'guru',
            to: '/guru',
        },
        {
            id: 6,
            title: 'Hài Hước',
            to: '/funny',
        },
        {
            id: 7,
            title: 'Trường Học',
            to: '/school',
        },
        {
            id: 8,
            title: 'Trinh Thám',
            to: '/conan',
        },
        {
            id: 9,
            title: 'Âm Nhạc',
            to: '/muisc',
        },
        {
            id: 10,
            title: 'Chuyển Sinh',
            to: '/isekai',
        },
        {
            id: 11,
            title: 'Phiêu Lưu',
            to: '/phieuluu',
        },
        {
            id: 12,
            title: 'Siêu Nhiên',
            to: '/sieunhien',
        },
        {
            id: 13,
            title: 'Trinh Thám',
            to: '/conan',
        },
        {
            id: 14,
            title: 'Đời Thường',
            to: '/doithuong',
        },
        {
            id: 15,
            title: 'Giả Tưởng',
            to: '/fantasy',
        },
        {
            id: 16,
            title: 'RobotGame',
            to: '/doithuong',
        },
        {
            id: 17,
            title: 'Chinhs kichj',
            to: '/chinhkich',
        },
        {
            id: 18,
            title: 'Pháp Thuật',
            to: '/magic',
        },
    ];
    return list.map((a) => {
        return (
            <li key={a.id} className={cx('item')}>
                <Link to={a.to} className={cx('link')}>
                    {a.title}
                </Link>
            </li>
        );
    });
}

export default ListSearchItem;
