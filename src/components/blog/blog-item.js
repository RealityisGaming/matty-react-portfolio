import React from 'react'
import { Link } from 'react-router-dom';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

    return ( 
        <div className='blog-container'>
            <div className='content-container'>
                <Link to={`/b/${id}`}>
                    <h1>{title}</h1>
                </Link>
                <div>
                    {content}
                </div>

                <div className='content-container'>
                    <img src={featured_image_url} />
                </div>

                {blog_status}

            </div>
        </div>
    );

}

export default BlogItem;