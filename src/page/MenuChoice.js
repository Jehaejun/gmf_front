import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';


const MenuChoice = ({ history }) => {

    const [menus, setMenus] = useState(
        [
            {
                name: '돈까스',
                price: '7500'
            },
            {
                name: '오므라이스',
                price: '7000'
            }
        ]
    )

    const [choiceMenu, setChoiceMenu] = useState(
        [
            /*   {
                  name: '',
                  price: ''
              } */
        ]
    )

    const [viewChoiceMenu, setViewChoiceMenu] = useState(
        []
    )

    const [totPrice, setTotPrice] = useState(
        {
            price: 0
        }
    );

    const updateFieldChanged = (data) => {
        let newArr = [...choiceMenu];
        newArr.push(data)
        setChoiceMenu(newArr);
        makeViewChoiceMenu(newArr);
        makeTotPrice(newArr);
    };

    const removeRow = (index, data) => {
        let newArr = [...choiceMenu];

        var delIndex = 0;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].name === data.name) {
                delIndex = i;
            }
        }

        newArr.splice(delIndex, 1);
        setChoiceMenu(newArr);
        makeViewChoiceMenu(newArr);
        makeTotPrice(newArr);
    }

    const makeViewChoiceMenu = (arr) => {
        let newArr = [];
        let tempMenus = [...menus];

        tempMenus.forEach((v) => {
            let sumCnt = 0;
            let sumPrice = 0;

            arr.forEach((sv) => {
                if (v.name === sv.name) {
                    sumPrice += Number(sv.price);
                    sumCnt++;
                }
            });

            if (sumCnt !== 0) {

                newArr.push(
                    {
                        name: v.name,
                        price: v.price,
                        sumCnt: sumCnt,
                        sumPrice: sumPrice
                    }
                );
            }
        });

        setViewChoiceMenu(newArr);

    }

    const makeTotPrice = (arr) => {
        let total = 0;
        arr.forEach((v) => {
            total += Number(v.price);
        });

        setTotPrice({ price: total });
    }

    const movePage = () => {
        if (choiceMenu.length === 0) {
            alert('메뉴를 선택해주세요.');
            return;
        }

        history.push({ pathname: 'menuCompleted' });

    }
    const goBack = () => {
        history.goBack();
    }
    return (
        <div id="wrap">
            <div className="header">
                <a className="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>메뉴 신청하기</h1>
                <Link className="btn home right" to="/">홈</Link>
            </div>
            <div className="card_bg2">
                <div className="card_box">
                    <div className="info_area">
                        <h2 className="card_name">2020-06-17 저녁</h2><div className="fee">한솥도시락</div><div className="card_detail_info"><dl className="clearfix"><dt>등록자</dt><dd>제해준</dd><dt>등록시간</dt><dd>2020-06-17 15:23:11</dd></dl></div></div></div>
            </div>
            <div className="card_info_area">
                <img className="mt0" src="http://10.254.241.154/images/tt.jpg" alt="창원사랑카드" />
            </div>
            <div className="container2">
                {menus.map((v, i) => (
                    <div className="pr_info mgb3 mgb15 mgt10" >
                        <dl className="pr_list clearfix">
                            <dt>{v.name}</dt>
                            <dd>{v.price}원<a className="pr_btn" onClick={() => updateFieldChanged(v)}>선택</a></dd>
                        </dl>
                    </div>
                ))}
            </div>
            <div className="grey_bg move_ct mgb104">
                <div className="coupon_area">
                    {viewChoiceMenu.map((v, i) => (
                        <div className="coupon clearfix">
                            <div className="coupon_type dpt">
                                <div className="dpc">
                                    <span>{v.name}<i className="ic_x"></i>{v.sumCnt}개</span>
                                </div>
                            </div>
                            <div className="price dpt pdr0">
                                <div className="dpc">
                                    <div className="cp"><span>{v.sumPrice}</span>원</div>
                                </div>
                            </div>
                            <a className="btn_del" onClick={() => removeRow(i, v)}>삭제</a>
                        </div>
                    ))}

                    {/*  <div className="coupon clearfix">
                        <div className="coupon_type dpt">
                            <div className="dpc">
                                <span>돈까스<i className="ic_x"></i>2개</span>
                            </div>
                        </div>
                        <div className="price dpt pdr0">
                            <div className="dpc">
                                <div className="cp"><span>18,800</span>원</div>
                            </div>
                        </div>
                        <a className="btn_del">삭제</a>
                    </div> */}
                </div>
            </div>
            <div className="bottom_area">
                <div className="summary_area total">
                    <div className="container clearfix">
                        <div className="tt">총 신청금액</div>
                        <div className="ct"><span className="total">{totPrice.price} <span className="unit">원</span></span></div>
                    </div>
                </div>
                {/*  <Link to="userChoice"> */}
                <button className="btn full" type="button" onClick={movePage}>신청</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default MenuChoice;