import React, { Component } from "react";
import Select from "../SelectDropdown";
import "./index.css";
import ProductPricingSummary from "../ProductPricingSummary";

class AddProductRaw extends Component {
  state = {
    selectedProductIds: {},
  };
  changeProductSlection = (e, id) => {
    const value = e.target.value;
    this.setState(
      (prevState) => {
        let selectedProductIds = {};
        if (prevState.selectedProductIds) {
          selectedProductIds = { ...prevState.selectedProductIds, [id]: value };
        } else {
          selectedProductIds = { [id]: value };
        }
        return { selectedProductIds };
      },
      () => this.props.changeSelectedProduct(this.state.selectedProductIds)
    );
  };
  renderProduct = () => {
    const {
      totalNumberOfProducts,
      titlesList,
      productIds,
      productImages,
      priceSummary,
    } = this.props;
    let products = [];
    for (let i = 1; i <= totalNumberOfProducts; i++) {
      products.push(
        <div className={"productSelectionContainer"}>
          {Object.keys(this.state.selectedProductIds).length &&
          this.state.selectedProductIds[i] ? (
            <img
              className={"productImage"}
              src={productImages[this.state.selectedProductIds[i]]}
              alt={"product"}
            />
          ) : (
            <div>
              <div className={"noProductImage"} />
              <div className={"addProductLabel"}>Add a product</div>
            </div>
          )}
          <Select
            handleChange={this.changeProductSlection}
            selectionId={i}
            optionList={titlesList}
            products={productIds}
          />
          {Object.keys(this.state.selectedProductIds).length &&
            this.state.selectedProductIds[i] ? (
              <ProductPricingSummary
                finalPrice={
                  priceSummary[this.state.selectedProductIds[i]].finalPrice
                }
                price={priceSummary[this.state.selectedProductIds[i]].price}
                discount={priceSummary[this.state.selectedProductIds[i]].totalDiscount}
              />
            ) : null}
        </div>
      );
    }
    return products;
  };
  render() {
    return <div className={"addProductContainer"}>{this.renderProduct()}</div>;
  }
}

export default AddProductRaw;
