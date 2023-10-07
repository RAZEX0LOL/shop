import React from "react";

export default function Categories(props) {
    const categories = [
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'PC',
            name: 'ПК'
        },
        {
            key: 'PS',
            name: 'PlayStation'
        },
        {
            key: 'XBOX',
            name: 'XBOX'
        },
        {
            key: 'Nintendo Switch',
            name: 'Nintendo Switch'
        }
    ];

    return (
        <div className={'categories'}>
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}




