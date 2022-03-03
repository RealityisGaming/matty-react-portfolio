import React, {Component} from "react";
import Axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to something surprising",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);

    }
    
    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.catergory === filter;
            })
        })
    }

    getPortfolioItems() {
        Axios
        .get('https://trueescape.devcamp.space/portfolio/portfolio_items')
        .then(response => {
            this.setState({
                data: response.data.portfolio_items
            })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      }

    portfolioItems() {
        return this.state.data.map(item => {
          return <PortfolioItem key={item.id} item={item} />;
        });
      }
    
    componentDidMount() {
        this.getPortfolioItems();
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