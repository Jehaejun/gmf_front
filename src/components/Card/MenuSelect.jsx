import React from 'react';

const MenuSelect = (
    {
        name,
        price,
        onClick
    }
) => {
    return (
        <div className="pr_info mgb7">
            <dl className="pr_list clearfix">
                <dt>{name}</dt>
                <dd>{price}원<a className="pr_btn" onClick={onClick}>선택</a></dd>
            </dl>
        </div>
    );
};

export default MenuSelect;
