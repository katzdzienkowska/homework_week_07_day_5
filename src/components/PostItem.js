import React from 'react';
import './PostItem.css'

const PostItem = ({post}) => {
    return ( 
        <section>
            <li className='post-item'>
                <a href={post.data.url} target='_blank' rel='noreferrer'>{post.data.title}</a>  
            </li>
        </section>
    );
};

export default PostItem;