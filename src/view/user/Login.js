import { Link } from 'react-router-dom';
import google from '../../images/img_logo_google.png'
import apple from '../../images/img_logo_apple.png'

const Login = ({ history }) => {

    const kakaoLogin = () => {
        history.push({ pathname: '/user/signUp' });
    }
    return (
        <div id="wrap">
            <div className="flex_box">
                <div className="landing_txt">
                    <p>밥줘밥밥밥밥밥</p>
                    <h2>밥달라고!!!!!!</h2>
                </div>
                <div className="flex_item blue_bg">
                    <div className="message_wrap2">
                        <div className="blue_wrap">
                            <div className="b_txt">
                                <span>밥밥밥밥밥밥밥밥밥</span>
                            </div>
                            <div className="app_btn">
                                <a href="#"><img src={google} alt="download now goolge play" /></a>
                                <a href="#"><img src={apple} alt="download now app store" /></a>
                            </div>
                        </div>
                        <div className="container">
                            <div className="ct_button">
                                <button className="btn full typeD" type="button" onClick={kakaoLogin}>카카오계정 로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;