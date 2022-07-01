import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@kipkip/component-context";
import { addTypographyStyles } from "../../../utils";
import StockWarning from "../../StockWarning/v1/StockWarning";
import { STATUS_LABELS, inventoryStatus } from "./utils";


const SoldOutSpan = styled.div`
  ${addTypographyStyles("StockWarning", "labelText")}
`;

const DefaultSpan = styled.div`
  ${addTypographyStyles("", "labelText")}
`;

class InventoryStatus extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * The product, whose properties determine which badge(s) to display
     */
    product: PropTypes.shape({
      inventoryAvailableToSell: PropTypes.number,
      isBackorder: PropTypes.bool,
      isLowQuantity: PropTypes.bool,
      isSoldOut: PropTypes.bool
    }),
    /**
     * Labels to use for the various badges
     */
    statusLabels: PropTypes.shape({
      BACKORDER: PropTypes.string,
      LOW_QUANTITY: PropTypes.string,
      SOLD_OUT: PropTypes.string
    })
  };

  static defaultProps = {
    statusLabels: STATUS_LABELS
  };

  render() {
    const { className, product, statusLabels } = this.props;

    const status = inventoryStatus(product, statusLabels);

    if (!status) return null;

    if (status.type && status.type === "LOW_QUANTITY") {
      return (
        <StockWarning
          inventoryQuantity={product.inventoryAvailableToSell}
          isLowInventoryQuantity={product.isLowQuantity}
        />
      );
    }

    if (status.type && status.type === "SOLD_OUT") {
      return (
        <SoldOutSpan className={className}>{status.label}</SoldOutSpan>
      );
    }

    return (
      <DefaultSpan className={className}>{status.label}</DefaultSpan>
    );
  }
}

export default withComponents(InventoryStatus);
