import React, { Component } from "react";

import AddProduct from "../AddProduct";
import "./index.css";
import ProductComparisionTable from "../ProductComparisionTable";

class DashboardRaw extends Component {
  state = {
    productList: {},
    selectedProducts: {},
  };
  
  componentDidMount() {
    fetch("http://www.mocky.io/v2/5e86ec5531000011d8814754")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ productList: data });
      });
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
