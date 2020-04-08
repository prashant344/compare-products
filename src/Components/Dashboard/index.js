import React, { Component } from "react";

import AddProduct from "../AddProduct";
import MockResponse from '../../MockResponse/index.json';
import ProductComparisionTable from "../ProductComparisionTable";
import "./index.css";

class DashboardRaw extends Component {
  state = {
    productList: {},
    selectedProducts: {},
  };

  componentDidMount() {
    this.setState({ productList: MockResponse });
  }

  changeSelectedProduct = (selectedProducts) => {
    this.setState({
      selectedProducts,
    });
  };

  render() {
    const titlesList =
      this.state.productList && this.state.productList.products
        ? this.state.productList.products.compareSummary.titles
        : {};
    const productImages =
      this.state.productList && this.state.productList.products
        ? this.state.productList.products.compareSummary.images
        : {};
    const priceSummary =
      this.state.productList && this.state.productList.products
        ? this.state.productList.products.compareSummary.productPricingSummary
        : {};
    const productIds = Object.keys(titlesList);
    return (
      <div className={"dashboard"}>
        <div className={"title"}>Compare</div>
        <AddProduct
          titlesList={titlesList}
          productIds={productIds}
          productImages={productImages}
          totalNumberOfProducts={2}
          priceSummary={priceSummary}
          changeSelectedProduct={this.changeSelectedProduct}
        />
        {Object.keys(this.state.selectedProducts).length ? (
          <ProductComparisionTable
            productList={this.state.productList}
            selectedProducts={this.state.selectedProducts}
          />
        ) : null}
      </div>
    );
  }
}

export default DashboardRaw;
