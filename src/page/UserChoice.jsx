import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';


const UserChoice = ({ history, location }) => {
    const [users, setUsers] = useState(
        [
            {
                emplNm: '제해준',
                deptNm: '상품연구실',
                emplNo: '001'
            },
            {
                emplNm: '홍길동',
                deptNm: '연구소',
                emplNo: '002'
            }
        ]
    )

    const [checkedUser, setCheckedUser] = useState(
        []
    )

    const updateEmpl = (data) => (event) => {
        let newArr = [...checkedUser];

        if (event.currentTarget.checked) {
            newArr.push(data);
            setCheckedUser(newArr);

        } else {
            let delIndex = 0;
            newArr.forEach((v, i) => {
                if (data.emplNo === v.emplMo) {
                    delIndex = i;
                }
            });

            newArr.splice(delIndex, 1);
            setCheckedUser(newArr);
        }

        console.log(newArr);
        console.log(location.state);
    };

    const movePage = () => {
        if (checkedUser.length === 0) {
            alert('직원을 선택해주세요.');
            return;
        }

        history.push('/menuCompleted');
    }

    const goBack = () => {
        history.goBack();
    }
    return (
        <div id="wrap">
            <div className="header">
                <a className="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>초대하기</h1>
                <Link className="btn home right" to="/">홈</Link>
            </div>
            <div className="map_top">
                <div className="cont bgW">
                    <div className="ct_item mt0">
                        <div className="ct_box">
                            <div className="tel_certi">
                                <select className="select_box2">
                                    <option value="">전체</option>
                                </select>
                                <div className="input_btn">
                                    <input className="input" type="text" placeholder="이름 입력" />
                                    <button className="btn_samll" type="button">찾기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chk_box_list grey_area pdt149 pdb70">
                {users.map((v, i) => (
                    <div className="card_box ">
                        <div className="hi">
                            <input id={v.emplNo} className="radio" type="checkbox" value={v.emplNo} onChange={updateEmpl(v)} />
                            <label for={v.emplNo}>{v.emplNm}</label>
                            <div className="ac_num">{v.deptNm}</div>
                        </div>
                    </div>
                ))}

                {/*  <div className="card_box ">
                    <div className="hi">
                        <input id="KH" className="radio" type="checkbox" name="chk_item" />
                        <label for="KH">제해준</label>
                        <div className="ac_num">상품연구실</div>
                    </div>
                </div>
                <div className="card_box">
                    <div className="hi">
                        <input id="KH3" className="radio" type="checkbox" name="chk_item" />
                        <label for="KH3">홍길동</label>
                        <div className="ac_num">상품연구실</div>
                    </div>
                </div> */}
            </div>
            <div class="bottom_area">
                <button class="btn full" type="button" onClick={movePage}>등록</button>
            </div>
        </div>
    )
}

export default UserChoice;