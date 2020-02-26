import React, { Component } from 'react'
import SHOP_DATA from '../data/shop-data'
import PreviewCollection from '../components/PreviewCollection';
export default class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA
    }
  }
  render() {
    return (
      <div className="shop">
        {
          this.state.collection.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}
