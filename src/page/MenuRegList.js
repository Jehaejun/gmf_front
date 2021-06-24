import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';


const MenuRegList = ({ history }) => {
    const [regList, setRegList] = useState(
        [
            {
                bizNm: '한솥도시락',
                type: '저녁',
                regDate: '2021-06-23',
                regDtm: '2021-06-23 11:23:52'
            },
            {
                bizNm: '원이부엌',
                type: '점심',
                regDate: '2021-06-23',
                regDtm: '2021-06-23 11:23:52'
            }
        ]
    )

    const goDetailView = (data) => {
        history.push({ pathname: 'menuRegDetail', state: data });
    }
    const goBack = () => {
        history.goBack();
    }
    return (
        <div id="wrap">
            <div class="header">
                <a class="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>메뉴 등록내역</h1>
                <a class="btn home right" onClick={goBack}>홈</a>
            </div>
            <div class="history_wrap">

                <ul class="history_list">
                    {regList.map((v, i) => (
                        <li>
                            <a onClick={() => goDetailView(v)} style={{ display: "inline-block" }}>
                                <div class="summary clearfix">
                                    <h2 class="tt fl">{v.regDate} {v.type} <font className="biz_name">{v.bizNm}</font></h2>
                                </div>
                                <div class="info clearfix">
                                    <span class="fl">{v.regDtm}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MenuRegList;