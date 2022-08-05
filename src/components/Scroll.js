import React from 'react';

const Scroll = (props) => {
    console.log('scroll')
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '650px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;