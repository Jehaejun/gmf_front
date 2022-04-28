import { Link } from 'react-router-dom';
import ico1 from '../images/ic_main_card_register.png'
import ico2 from '../images/ic_main_card_apply.png'
import ico3 from '../images/ic_main_buy.png'
import ico4 from '../images/ic_main_buy_history.png'

const Main = () => {
    return (
        <div id="wrap">
            <div className="header">
                <h1>메인</h1>
                <Link to="/" className="btn home right" href="">홈</Link>
            </div>
            <div className="grey_area pdr15 pdl15">
                <div className="mgb12"></div>
                <div>
                    <ul className="card_list">
                        <li>
                            <Link to="menuReg">
                                <div className="card_list_box">
                                    <h2 className="card_name">메뉴 등록하기</h2>
                                    <div className="card_info">
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                    </div>
                                    <div className="card_img">
                                        <img src={ico1}></img>
                                        {/* <img src="../images/img_card_s_gh.png" alt="김해사랑카드" /> */}
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="test">
                                <div className="card_list_box">
                                    <h2 className="card_name">메뉴 신청하기</h2>
                                    <div className="card_info">
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                    </div>
                                    <div className="card_img">
                                        <img src={ico2}></img>
                                        {/* <img src="../images/img_card_s_gh.png" alt="김해사랑카드" /> */}
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="menuRegList">
                                <div className="card_list_box">
                                    <h2 className="card_name">메뉴 등록내역</h2>
                                    <div className="card_info">
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                    </div>
                                    <div className="card_img">
                                        <img src={ico3}></img>
                                        {/*  <img src="../images/img_card_s_gh.png" alt="김해사랑카드" /> */}
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="menuRegList">
                                <div className="card_list_box">
                                    <h2 className="card_name">메뉴 신청내역</h2>
                                    <div className="card_info">
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                        <p>Admin에서 등록한 카드 상세 정보가 노출됩니다</p>
                                    </div>
                                    <div className="card_img">
                                        <img src={ico4}></img>
                                        {/*  <img src="../images/img_card_s_gh.png" alt="김해사랑카드" /> */}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;