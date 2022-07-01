import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@kipkip/component-context";

import CartItem from "../../CartItem/v1/CartItem";

const Items = styled.div``;

class CartItems extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Is in a MiniCart component
     */
    isMiniCart: PropTypes.bool,
    /**
     * Hide remove button and quantity input
     */
    isReadOnly: PropTypes.bool,
    /**
     * CartItem data. Only the `_id` prop is required by this component. Each item is passed to
     * CartItem, which may require additional props.
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      /**
       * The cart item ID
       */
      _id: PropTypes.string.isRequired
    })).isRequired,
    /**
     * On cart item quantity change handler
     */
    onChangeCartItemQuantity: PropTypes.func,
    /**
     * On remove item from cart handler
     */
    onRemoveItemFromCart: PropTypes.func,
    /**
     * Product URL path to be prepended before the slug. Should end with with "/"
     */
    productURLPath: PropTypes.string
  };

  static defaultProps = {
    isMiniCart: false,
    isReadOnly: false,
    onChangeCartItemQuantity() { },
    onRemoveItemFromCart() { }
  };

  render() {
    const { className, items, ...props } = this.props;
    return (
      <Items className={className}>
        {items.map((item) => <CartItem key={item._id} item={item} {...props} />)}
      </Items>
    );
  }
}

export default withComponents(CartItems);
