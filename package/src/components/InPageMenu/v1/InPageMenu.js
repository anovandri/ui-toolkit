import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@kipkip/component-context";

import InPageMenuItem from "../../InPageMenuItem/v1/InPageMenuItem";

const InPageMenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

class InPageMenu extends Component {
  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * An array that contains objects of label and navigational data for each InPageMenuItem
     */
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      id: PropTypes.string,
      isSelected: PropTypes.bool,
      label: PropTypes.string
    }))
  };

  static defaultProps = {
    menuItems: []
  };

  render() {
    const { className, menuItems } = this.props;

    return (
      <InPageMenuContainer className={className}>
        {menuItems.map((menuItem, index) => (
          <InPageMenuItem
            href={menuItem.href}
            isSelected={menuItem.isSelected}
            key={menuItem.id || `item-${index}`}
            label={menuItem.label}
          />
        ))}
      </InPageMenuContainer>
    );
  }
}

export default withComponents(InPageMenu);

