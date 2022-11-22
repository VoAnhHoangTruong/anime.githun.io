import classNames from 'classnames/bind';
import config from '~/config';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMsg, setValidationMsg] = useState({});
    // const [check, setCheck] = useState(false);

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const validateAll = () => {
        const errot = {};

        if (isEmpty(email)) {
            errot.email = 'nhập email nào';
        } else if (!isEmail(email)) {
            errot.email = 'email không chuẩn';
        }
        if (isEmpty(password)) {
            errot.password = ' your pát guột';
        } else if (password.length <= 5) {
            errot.password = ' tối thiểu 6 kí tự';
        }

        setValidationMsg(errot);
        if (Object.keys(errot).length > 0) return false;
        return true;
    };
    const onSubmitLogin = () => {
        const isValid = validateAll();
        if (!isValid) return;
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className={cx('main')}>
                <form id="form-1" action="/" className={cx('form')} onSubmit={handleSubmit}>
                    <Link to={config.routes.home}>
                        <img className={cx('logo')} src={images.logo} alt="tiktok" />
                    </Link>
                    <p className={cx('heading')}>hi cậu Đăng Nhập </p>
                    <div className={cx('spacer')} />
                    <div className={cx('form-group')}>
                        <label htmlFor="email" className={cx('form-label')}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="VD: email@domain.com"
                            className={cx('form-control')}
                            onChange={onChangeEmail}
                        />
                        <span className={cx('form-message')}>{validationMsg.email}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password" className={cx('form-label')}>
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            required
                            placeholder="Nhập mật khẩu"
                            className={cx('form-control')}
                            onChange={onChangePassword}
                        />
                        <span className={cx('form-message')}>{validationMsg.password}</span>
                    </div>
                    <button type="button" className={cx('form-submit')} onClick={onSubmitLogin}>
                        Đăng nhập
                    </button>
                    <Link to={config.routes.signup} className={cx('singin')}>
                        Đăng ký
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signin;
