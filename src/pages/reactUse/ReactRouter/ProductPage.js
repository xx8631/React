import React, { Component } from 'react'

export default class ProductPage extends Component {

  constructor(props) {
    super(props);
    const { match } = props;
    this.state = {
      id: match.params.id
    }
  }
  render(props) {

    return (
      <div>
        <h3>ProductPage {this.state.id}</h3>
        {/* <Link>详情</Link>
        <Route></Route> */}
      </div>
    )
  }
}
