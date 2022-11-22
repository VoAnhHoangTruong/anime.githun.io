import classNames from 'classnames/bind';
import styles from './Trend.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { SmoothHorizontalScrolling } from '~/utils';
const cx = classNames.bind(styles);
function Trend() {
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth,
                sliderRef.current.scrollLeft,
            );
        }
    };
    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth,
                sliderRef.current.scrollLeft,
            );
        }
    };
    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);
    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };
    const onDragEnd = (e) => {
        setIsDrag(false);
    };
    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };
    const trendList = [
        {
            title: 'chansaw',
            to: '/chainsawman',
            img: 'https://images4.alphacoders.com/112/1126211.jpg',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.ytimg.com/vi/e6DH_gy555A/hqdefault.jpg',
        },
        {
            title: 'justu',
            to: '/justu',
            img: 'https://bloganchoi.com/wp-content/uploads/2022/04/gojo-satoru-so-huu-luc-nhan-va-vo-ha-han.jpg',
        },
        {
            title: 'mob',
            to: '/mob',
            img: 'https://c4.wallpaperflare.com/wallpaper/700/524/23/mob-psycho-100-kageyama-ritsu-hd-wallpaper-preview.jpg',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/564x/db/21/61/db2161c832cd0795b9ecc9ec928d5940.jpg',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/564x/2d/58/ae/2d58ae5660742665d820e0818658a142.jpg',
        },
        {
            title: 'my hero',
            to: '/myheroac',
            img: 'https://i.ex-cdn.com/mgn.vn/files/news/2022/06/06/my-hero-academia-nhung-bo-nao-to-nhat-cua-lop-1-a-161205.jpg',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/736x/cb/7d/29/cb7d2956b269434b62e9361d85fea398.jpg',
        },
        {
            title: 'saitama',
            to: '/saitama',
            img: 'https://i.pinimg.com/736x/6b/5d/e2/6b5de21dd0059ff9e669c07c394c00a3.jpg',
        },
        {
            title: 'eva elfie',
            to: '/evaelfie',
            img: 'https://i.pinimg.com/564x/82/e4/0e/82e40e193c919da734a37a8afdc31bdf.jpg',
        },
    ];

    return (
        <div className={cx('container')} draggable={false}>
            <div
                className={cx('slided')}
                ref={sliderRef}
                draggable={true}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >
                {trendList.map((a, index) => {
                    return (
                        <Link key={index} className={cx('item')} to={a.to} ref={movieRef} draggable={false}>
                            <img
                                className={cx('image')}
                                src={a.img}
                                alt={`dang loi anh ${a.title}`}
                                draggable={false}
                            />
                            <div className={cx('name')}>{a.title}</div>
                        </Link>
                    );
                })}
            </div>
            <div className={cx('btnLeft')} onClick={handleScrollLeft}>
                <FontAwesomeIcon className={cx('a')} icon={faChevronCircleLeft} />
            </div>
            <div className={cx('btnRigth')} onClick={handleScrollRight}>
                <FontAwesomeIcon className={cx('a')} icon={faChevronCircleRight} />
            </div>
        </div>
    );
}

export default Trend;
