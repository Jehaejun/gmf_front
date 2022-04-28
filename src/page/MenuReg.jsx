import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';


const MenuReg = ({ history }) => {
    const [inputs, setInputs] = useState(
        {
            title: '',
            contents: '',
            imgName: '',
        }
    );

    const [menus, setMenus] = useState(
        [
            {
                name: '',
                price: ''
            }
        ]
    )

    const setValue = (e) => {
        const { name, value } = e.target;

        setInputs(
            {
                ...inputs,
                [name]: value
            }
        )
    }

    const updateFieldChanged = (index) => (event) => {
        let newArr = menus.map((item, i) => {
            const { name, value } = event.target;

            if (index === i) {
                return {
                    ...item,
                    [name]: value
                };
            } else {
                return item;
            }

        });
        setMenus(newArr);
    };

    const movePage = () => {
        if (menus.length === 0) {
            alert('메뉴를 입력해주세요.');
            return;
        }

        history.push({ pathname: 'userChoice', state: { param: menus } });

    }

    const addMenuRow = () => {
        //let rows = menus;

        /* let rows = menus.map((item, i) => {
            return item;
        }); */
        let rows = [...menus];

        rows.push({ name: '', price: '' });
        setMenus(rows);
    }

    const removeRow = (index) => {
        if (menus.length === 1) {
            alert('마지막 행은 삭제할 수 없습니다.');
            return;
        }
        let rows = [...menus];

        rows.splice(index, 1);
        setMenus(rows);
    }
    const fileInput = useRef();

    const fileUpload = () => {
        fileInput.current.value = '';
        //  document.getElementById('upload').click();
        console.log(fileInput);
        fileInput.current.click();
    }
    const setFileData = (e) => {
        let imgPath = e.target.value;
        imgPath = imgPath.split('\\')

        let data = { ...inputs };
        data.imgName = imgPath[imgPath.length - 1];

        setInputs(data);
    }

    const goBack = () => {
        history.goBack();
    }
    return (
        <div id="wrap">
            <div className="header">
                <a className="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>메뉴 등록하기</h1>
                <Link className="btn home right" to="/">홈</Link>
            </div>
            <div className="container">
                <div className="top_txt">
                    <div className="main_txt">
                        <strong>배달메뉴</strong> 등록
			        </div>
                    <div className="ic_div">

                        <span className="on"></span>
                    </div>
                    <div className="sub_txt">
                        <p>주문 받을 메뉴정보를 입력해주세요</p>
                    </div>
                </div>
                <div className="ct_item">
                    <div className="ct_tt">상호명</div>
                    <div className="ct_box">
                        <div>
                            <input className="input" name="title" type="text" placeholder="상호명" onChange={setValue} />
                        </div>
                    </div>
                </div>
                <div className="ct_item">
                    <div className="ct_tt ">일자</div>
                    <div className="ct_box mgb3">
                        <div className="d_input2">
                            <select className="select_box" required="">
                                <option value="R">점심</option>
                                <option value="D">저녁</option>
                            </select>
                            <input className="input" type="date" name="date" />
                        </div>
                    </div>
                    {/*  <div className="ct_box mgb3">
                        <div className="tel_certi">
                            <select class="select_box" required="">
                                <option value="R">점심</option>
                                <option value="D">저녁</option>
                            </select>
                            <div className="input_btn2">
                                <input className="input" type="date" name="date" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="ct_item">
                    <div className="ct_tt">내용</div>
                    <div className="ct_box">
                        <div>
                            <textarea name="contents" rows="5" cols="30" className="textarea" placeholder="내용을 입력하세요." onChange={setValue}></textarea>
                        </div>
                    </div>
                </div>
                <div className="ct_item">
                    <div className="ct_tt">이미지명</div>
                    <div className="ct_box">
                        <div>
                            <input className="input" type="text" value={inputs.imgName} readOnly />
                            <input type="file" id="upload" ref={fileInput} onChange={setFileData} />
                        </div>
                    </div>
                </div>
                <a className="btn_qr" onClick={fileUpload}><i></i>업로드</a>


                <div className="ct_item">
                    <div className="ct_tt ">메뉴명 / 가격</div>
                    {menus.map((v, i) => (
                        /*  <div className="ct_box mgb3" key={i}>
                             <div className="d_input">
                                 <input className="input" type="text" placeholder="메뉴명" name="name" value={v.name} onChange={updateFieldChanged(i)} />
                                 <input className="input" type="number" placeholder="가격" name="price" value={v.price} onChange={updateFieldChanged(i)} />
                             </div>
                         </div>  */
                        <div className="ct_box mgb3" key={i}>
                            <div className="tel_certi">
                                <input className="input2" type="text" placeholder="메뉴명" name="name" maxLength="11" value={v.name} onChange={updateFieldChanged(i)} />
                                <div className="input_btn2">
                                    <input className="input" type="number" placeholder="가격" name="price" maxLength="6" value={v.price} onChange={updateFieldChanged(i)} />
                                    <button className="btn_samll" type="button" onClick={() => removeRow(i)}>X</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/*  <div className="ct_item">
                    <div className="ct_tt ">메뉴명 / 가격</div>
                    <div className="ct_box mgb3">
                        <div className="d_input">
                            <input className="input" type="text" placeholder="메뉴명" />
                            <input className="input" type="number" placeholder="가격" />
                        </div>
                    </div>
                </div> */}
                <div className="btn_more">
                    <a onClick={addMenuRow}>추가</a>
                </div>
            </div>
            <div className="bottom_area">
                <button className="btn full" type="button" onClick={movePage}>다음</button>
            </div>
        </div>
    )
}

export default MenuReg;