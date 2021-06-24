import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';


const MenuRegDetail = ({ history, location }) => {

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log('onload');
    });

    return (
        <div id="wrap">
            <div className="header">
                <a className="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>메뉴 등록상세내역</h1>
                <Link to="/" className="btn home right">홈</Link>
            </div>
            <div className="card_bg2">
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
                </div>
            </div>
            <div className="move_ct mgb104">
                <div className="coupon_area">
                    <div className="coupon clearfix">
                        <div className="coupon_type dpt">
                            <div className="dpc">
                                <span>돈까스<i className="ic_x"></i>4개</span>
                            </div>
                        </div>
                        <div className="price2 dpt pdr0">
                            <div className="dpc">
                                <div className="cp">
                                    <span>30000</span>원
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coupon clearfix">
                        <div className="coupon_type dpt">
                            <div className="dpc">
                                <span>오므라이스<i className="ic_x"></i>7개</span>
                            </div>
                        </div>
                        <div className="price2 dpt pdr0">
                            <div className="dpc">
                                <div className="cp">
                                    <span>49000</span>원
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_area">
                <div className="summary_area total">
                    <div className="container clearfix">
                        <div className="tt">총 주문금액</div>
                        <div className="ct">
                            <span className="total">79000 <span className="unit">원</span></span>
                        </div>
                    </div>
                </div>
                <button class="btn full typeC" type="button">삭제</button>
            </div>
        </div>
    )
}

export default MenuRegDetail;