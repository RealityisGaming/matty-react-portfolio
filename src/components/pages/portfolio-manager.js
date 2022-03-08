import React, { Component } from 'react'
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {

    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        // TODO
        // Update Portfolio state
        // Add to list
    }

    handleFormSubmissionError(error){
        console.log("handleFormSubmissionError error", error)
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
                    <PortfolioForm 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleFormSubmissionError = {this.handleFormSubmissionError}
                    />
                    
                </div>

                <div className='right-column'>
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}
