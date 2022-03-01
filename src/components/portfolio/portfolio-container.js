import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: 'Welcome to something confusing',
            isLoading: false,
            data: [
                {title: 'Gaming', catergory: 'Variety'},
                {title: 'Twitch', catergory: "Entertainment"}, 
                {title: 'TikTok', catergory: "Entertainment"}, 
                {title: 'YouTube', catergory: "Entertainment"}, 
                {title: 'My Own Video Game', catergory: 'Solo'}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this)

    }
    
    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.catergory === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
          return <PortfolioItem title={item.title} url={"google.com"} />;
        });
      }


    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Variety')}>
                    Variety
                </button>
                <button onClick={() => this.handleFilter("Entertainment")}
                    >Entertainment
                </button>
                <button onClick={() => this.handleFilter('Solo')}>
                    Solo
                </button>
                
                {this.portfolioItems()}

            </div>
            
        )
    }
}