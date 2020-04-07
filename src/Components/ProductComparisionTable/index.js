import React from "react";
import './index.css';

const ProductComparisionTable = ({ productList, selectedProducts }) => (
  <div className={"productComparisionTable"}>
    <table className={"table"}>
      <tbody>
        {productList && productList.products
          ? productList.products.featuresList.map((feature) => (
              <React.Fragment>
                {Object.keys(selectedProducts).length && (
                  <th className={"rowTitle"}>
                    <td colspan={"3"}>{feature.title}</td>
                  </th>
                )}
                {Object.keys(selectedProducts).length
                  ? feature.features.map((feat) => (
                      <tr>
                        <td className={"tableData"}>{feat.featureName}</td>
                        {Object.keys(selectedProducts).map((product) => (
                          <td>{feat.values[selectedProducts[product]]}</td>
                        ))}
                      </tr>
                    ))
                  : null}
              </React.Fragment>
            ))
          : null}
      </tbody>
    </table>
  </div>
);

export default ProductComparisionTable;
