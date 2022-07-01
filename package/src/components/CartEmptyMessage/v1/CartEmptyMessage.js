import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@kipkip/component-context";
import { addTypographyStyles, applyTheme } from "../../../utils";

import Button from "../../Button/v1/Button";

const EmptyButton = styled.div`
  display: flex;
  justify-content: center;
`;

const EmptyMessage = styled.div`
  ${addTypographyStyles("CartEmptyMessage", "bodyText")}
  display: flex;
  justify-content: center;
  margin-bottom: ${applyTheme("CartEmptyMessage.textToButtonSpacing")};
`;

class CartEmptyMessage extends Component {
  static propTypes = {
    /**
     * Text to display inside the button
     */
    buttonText: PropTypes.string,
    /**
     * Text to display inside the message area
     */
    messageText: PropTypes.string,
    /**
     * Onclick function to pass to the Button component. Not handled internally, directly passed
     */
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    buttonText: "Continue shopping",
    messageText: "Your shopping cart is empty."
  };

  handleOnClick = () => {
    this.props.onClick();
  }

  render() {
    const { buttonText, messageText } = this.props;

    return (
      <Fragment>
        <EmptyMessage>{messageText}</EmptyMessage>
        <EmptyButton>
          <Button actionType="important" onClick={this.handleOnClick}>{buttonText}</Button>
        </EmptyButton>
      </Fragment>
    );
  }
}

export default withComponents(CartEmptyMessage);
