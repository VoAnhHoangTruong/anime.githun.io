import { faViadeo } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHomeLg, faLink, faShop, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu from './Menu';
import Foodter from './Foodter';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Vì Cậu" to={config.routes.home} icon={<FontAwesomeIcon icon={faHomeLg} />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUser} />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo} />} />
            </Menu>
            <Menu>
                <MenuItem title="Đã Xem" to={config.routes.home} icon={<FontAwesomeIcon icon={faViadeo} />} />
                <MenuItem title="Đã Thích" to={config.routes.following} icon={<FontAwesomeIcon icon={faLink} />} />
                <MenuItem title="Shop" to={config.routes.live} icon={<FontAwesomeIcon icon={faShop} />} />
            </Menu>
            <SuggestedAccounts label="Following accounts" />
            <Foodter />
        </aside>
    );
}

export default Sidebar;
