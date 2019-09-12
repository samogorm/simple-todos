import React from 'react';

import './Author.scss';

export const Author = (props) => (
    <div className="app-author">
        <p>A small web app by <a href={props.url}>{props.name}</a></p>
        <p>NOTE: This app only stores data to your browsers local storage.</p>
    </div>
)