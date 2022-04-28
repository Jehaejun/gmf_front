import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';


const MenuCompleted = () => {

    return (
        <div id="wrap">
            <div class="grey_area flex_wrap pdb56">
                <div class="message_wrap">
                    <div class="ic_message done">
                        <p class="main_txt">메뉴신청이
                        <br />
                            <strong>완료되었습니다</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div class="bottom_area">
                <Link to="/">
                    <button class="btn full" type="button">확인</button>
                </Link>
            </div>
        </div>
    )
}

export default MenuCompleted;