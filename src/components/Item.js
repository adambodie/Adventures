import React from 'react';

const Item = props => (
        <img src={`./src/images/adventure${props.index}.jpg`} alt={props.title}/>
);

export default Item;
