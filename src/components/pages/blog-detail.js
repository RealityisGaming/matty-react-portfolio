import React, { Component } from 'react'
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            totalCount: 0 
        };
    }

    
    getBlogItem(){
        axios
        .get(`https://trueescape.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
        .then(response => { 
            this.setState({blogItem: response.data.portfolio_blog})
            console.log("response", response.data.portfolio_blog)
        })
        .catch(error => {
            console.log("error", error)
        });
        
    }
    
    componentDidMount() {
        this.getBlogItem();
    }
    
    render() {  
        const {
            title, 
            content, 
            featured_image_url, 
            blog_status
        } = this.state.blogItem

        return (

        
        <div className='blog-container'>
            <div className='content-container'>
                <h1>{title}</h1>
                <div className='featured-image-container'>
                    <img src={featured_image_url} />
                </div>
                <div className='content'>{content}</div>

                <h2>{blog_status}</h2>
            </div>
        </div>
    )
  }
}
