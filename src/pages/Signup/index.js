import classNames from 'classnames/bind';
import config from '~/config';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Signup() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcf, setPasswordCf] = useState('');
    const [validationMsg, setValidationMsg] = useState({});

    const onChangeName = (e) => {
        const value = e.target.value;
        setFullname(value);
    };
    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };
    const onChangePasswordConfirmation = (e) => {
        const value = e.target.value;
        setPasswordCf(value);
    };

    const validateAll = () => {
        const errot = {};

        if (isEmpty(fullname)) {
            errot.fullname = 'đê em em nhập tên còn sai';
        }
        if (isEmpty(email)) {
            errot.email = 'nhập email nào';
        } else if (!isEmail(email)) {
            errot.email = 'email không chuẩn';
        }
        if (isEmpty(password)) {
            errot.password = ' your pát guột';
        } else if (passwordcf && password !== passwordcf) {
            errot.password = 'does not match';
        } else if (password.length <= 5) {
            errot.password = ' tối thiểu 6 kí tự';
        }
        if (isEmpty(passwordcf)) {
            errot.passwordcf = 'your bát guột again';
        } else if (password && passwordcf !== password) {
            errot.passwordcf = 'does not match';
        }
        setValidationMsg(errot);
        if (Object.keys(errot).length > 0) return false;
        return true;
    };
    const onSubmitLogin = () => {
        const isValid = validateAll();
        if (!isValid) return;
        localStorage.setItem('flag', true);
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
                    <p className={cx('heading')}>hi cậu</p>
                    <div className={cx('spacer')} />
                    <div className={cx('form-group')}>
                        <label htmlFor="fullname" className={cx('form-label')}>
                            Tên đầy đủ
                        </label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            placeholder="VD: My Linh"
                            className={cx('form-control')}
                            onChange={onChangeName}
                        />
                        <span className={cx('form-message')}>{validationMsg.fullname}</span>
                    </div>
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
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            required
                            placeholder="Nhập mật khẩu"
                            className={cx('form-control')}
                            onChange={onChangePassword}
                        />
                        <span className={cx('form-message')}>{validationMsg.password}</span>
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="password_confirmation" className={cx('form-label"')}>
                            Nhập lại mật khẩu
                        </label>
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Nhập lại mật khẩu"
                            type="password"
                            className={cx('form-control')}
                            onChange={onChangePasswordConfirmation}
                        />
                        <span className={cx('form-message')}>{validationMsg.passwordcf}</span>
                    </div>

                    <div className={cx('form-group')}>
                        <div className={cx('form-radio')}>
                            <label htmlFor="password_confirmation" className={cx('form-label')}>
                                Giới tính :
                            </label>
                            <div>
                                <input name="gender" type="radio" defaultValue="male" className={cx('form-control')} />
                                Nam
                            </div>
                            <div>
                                <input
                                    name="gender"
                                    type="radio"
                                    defaultValue="female"
                                    className={cx('form-control')}
                                />
                                Nữ
                            </div>
                            <div>
                                <input
                                    name="gender"
                                    type="radio"
                                    defaultValue="orther"
                                    className={cx('form-control')}
                                />
                                Khác
                            </div>
                            <span className={cx('form-message')} />
                        </div>
                    </div>
                    <button type="button" className={cx('form-submit')} onClick={onSubmitLogin}>
                        Đăng nhập
                    </button>
                    <Link to={config.routes.signin} className={cx('singin')}>
                        Niu Nichs
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
