import React, { useState, useRef } from 'react'
//import { Link } from 'react-router-dom';


const SignUp = ({ history }) => {

    const [inputName, setInputName] = useState(
        {}
    )

    const [isNameEmpty, setIsNameEmpty] = useState(
        true
    )

    const goBack = () => {
        history.goBack();
    }

    const userSignUp = () => {
        history.push({ pathname: '/' });
    }

    const btn = useRef();

    const nameCheck = (e) => {
        const { name, value } = e.target;

        setInputName(
            {
                ...inputName,
                [name]: value
            }
        )

        if (value !== '') {
            setIsNameEmpty(false);
        } else {
            setIsNameEmpty(true);
        }

    }
    return (
        <div id="wrap">
            <div className="header">
                <a className="btn back left" onClick={goBack}>뒤로가기</a>
                <h1>회원가입</h1>
            </div>
            <div className="grey_area container" style={{ paddingBottom: "71px" }}>

                <div className="ct_item">
                    <div className="ct_tt">개인정보</div>
                    <div className="ct_box">
                        <div>
                            <input className="input" type="text" placeholder="이름" name="userName" onChange={nameCheck} />
                        </div>
                    </div>
                </div>
                <div className="ct_item">
                    <div className="ct_tt">회사정보</div>
                    <div className="ct_box">
                        <div className="tel_certi">
                            <select className="select_box mgb3">
                                <option value="WC" >웹케시</option>
                            </select>
                            <select className="select_box">
                                <option value="A000">상품연구실</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_area">
                <button className="btn full" type="button" disabled={isNameEmpty} ref={btn} onClick={userSignUp}>확인</button>
            </div>
        </div>
    )
}

export default SignUp;