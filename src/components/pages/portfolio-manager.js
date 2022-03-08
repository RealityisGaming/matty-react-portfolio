import React, { Component } from 'react'
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {

    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
    }

    getPortfolioItems() {
        axios.get("https://trueescape.devcamp.space/portfolio/portfolio_items", {withCredentials: true}
        ).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
            console.log("response from get portfolio items", response);
        }).catch(error => {
            console.log('error in ', error);
        })
    }

    componentDidMount(){
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className='portfolio-manager-container'>
                <div className='left-column'>
                    <h1>Portfolio form...</h1>
                    
                </div>

                <div className='right-column'>
                    <PortfolioSidebarList />
                </div>
            </div>
        )
    }
}
