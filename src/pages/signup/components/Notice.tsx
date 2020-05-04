import React from 'react';
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
        <div>
            <h1>Notice to Parents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor quis leo facilisis vehicula. Vivamus fringilla, neque quis consequat auctor, quam enim tempus diam, et suscipit magna enim rhoncus sapien. Mauris posuere tincidunt aliquet. Pellentesque scelerisque et ipsum eget sollicitudin. In luctus elit a nibh rutrum condimentum sit amet congue leo. Nunc vulputate efficitur metus vitae mattis. Proin bibendum, arcu et fringilla tempus, magna sapien lobortis nibh, eget pretium quam velit a lectus. Suspendisse a lobortis orci. Nunc ut velit rhoncus, sagittis arcu eget, posuere justo.</p>
            <Link to='/parent'>Back</Link>
            <Link to='/parent-form'>I Agree</Link>
        </div>
    )
}

export default Notice;