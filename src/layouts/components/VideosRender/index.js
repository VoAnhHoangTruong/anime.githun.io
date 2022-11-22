import classNames from 'classnames/bind';
import styles from './VideosRender.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function VideosRender() {
    const vdListList = [
        {
            title: 'chansaw',
            to: '/chainsawman',
            img: 'https://images4.alphacoders.com/112/1126211.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.ytimg.com/vi/e6DH_gy555A/hqdefault.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'justu',
            to: '/justu',
            img: 'https://bloganchoi.com/wp-content/uploads/2022/04/gojo-satoru-so-huu-luc-nhan-va-vo-ha-han.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'mob',
            to: '/mob',
            img: 'https://c4.wallpaperflare.com/wallpaper/700/524/23/mob-psycho-100-kageyama-ritsu-hd-wallpaper-preview.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/564x/db/21/61/db2161c832cd0795b9ecc9ec928d5940.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/564x/2d/58/ae/2d58ae5660742665d820e0818658a142.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'my hero',
            to: '/myheroac',
            img: 'https://i.ex-cdn.com/mgn.vn/files/news/2022/06/06/my-hero-academia-nhung-bo-nao-to-nhat-cua-lop-1-a-161205.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'boku',
            to: '/bokunopico',
            img: 'https://i.pinimg.com/736x/cb/7d/29/cb7d2956b269434b62e9361d85fea398.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'saitama',
            to: '/saitama',
            img: 'https://i.pinimg.com/736x/6b/5d/e2/6b5de21dd0059ff9e669c07c394c00a3.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
        {
            title: 'eva elfie',
            to: '/evaelfie',
            img: 'https://i.pinimg.com/564x/82/e4/0e/82e40e193c919da734a37a8afdc31bdf.jpg',
            infoimg: 'https://i.pinimg.com/236x/2a/d4/10/2ad4101c2bdd4c7ce75b35fcd91cf961.jpg',
            info: '/@info',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            {vdListList.map((a, index) => {
                return (
                    <div key={index} className={cx('conten')}>
                        <Link className={cx('item')} to={a.to}>
                            <img className={cx('image')} src={a.img} alt={`dang loi anh ${a.title}`} />
                        </Link>
                        <div className={cx('info-title')}>
                            <Link className={cx('logo')} to={a.info}>
                                <img className={cx('logo-image')} src={a.infoimg} alt={`dang loi anh ${a.title}`} />
                            </Link>
                            <Link className={cx('title')} to={a.to}>
                                <div className={cx('title-name')}>{a.title}</div>
                                <div className={cx('mota')}>
                                    <div className={cx('namekenh')}>Tên tác giả</div>
                                    <div className={cx('time')}>4 giờ trước</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default VideosRender;
