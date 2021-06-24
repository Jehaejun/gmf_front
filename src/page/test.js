import { Link } from 'react-router-dom';

function Test() {
    // return <h1>test</h1>;
    return (
        <div id="wrap">
            <div className="header">
                <Link to="/" className="btn back left">
                    뒤로가기
                </Link>
                <h1>메뉴 목록</h1>
                <Link to="/" className="btn home right" href="">홈</Link>
            </div>
            <div className="grey_area">

                <div className="container">
                    <div className="ct_button">
                        <Link to="/menuReg">
                            <button class="btn full typeA" type="button">메뉴 등록하기</button>
                        </Link>
                    </div>
                    <div className="card_box">
                        <div className="info_area">
                            <h2 className="card_name">2020-06-17 저녁</h2>
                            <div className="fee">
                                한솥도시락
					        </div>
                            <div className="card_detail_info">
                                <dl className="clearfix">
                                    <dt>등록자</dt>
                                    <dd>제해준</dd>
                                    <dt>등록시간</dt>
                                    <dd>2020-06-17 15:23:11</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="btn_area">
                            <Link to="menuChoice">
                                <button type="button">신청하기</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;