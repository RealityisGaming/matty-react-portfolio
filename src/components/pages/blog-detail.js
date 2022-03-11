import React, { Component } from 'react'

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.blog.id
        }
    }
  render() {
    return (
        <div>
            <h1>BlogDetail</h1>
        </div>
    )
  }
}
