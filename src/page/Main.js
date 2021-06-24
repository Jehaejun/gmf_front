import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div id="wrap">
            <div className="header">
                <h1>메인</h1>
                <Link to="/" className="btn home right" href="">홈</Link>
            </div>
            <div className="grey_area container">
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
                                    <div className="card_img ico1">
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
                                    <div className="card_img ico2">
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
                                    <div className="card_img ico3">
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
                                    <div className="card_img ico3">
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