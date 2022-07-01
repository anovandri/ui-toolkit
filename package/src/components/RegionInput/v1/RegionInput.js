import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withComponents } from "@kipkip/component-context";

import Select from "../../Select/v1/Select";
import TextInput from "../../TextInput/v1/TextInput";

class RegionInput extends Component {
  static isFormInput = true;

  static propTypes = {
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * Name of input
     */
    name: PropTypes.string.isRequired,
    /**
     * Region options to populate the form's region fields
     */
    options: PropTypes.array,
    /**
     * Prepopulate the input's value
     */
    value: PropTypes.string
  };

  render() {
    const {
      className,
      options,
      value,
      ...props
    } = this.props;

    return (
      <Fragment>
        {
          options && options.length > 1 ? (
            <Select
              className={className}
              alphabetize
              isSearchable
              options={options}
              value={value}
              {...props}
            />
          ) : (
            <TextInput
              className={className}
              value={value}
              {...props}
            />
          )
        }
      </Fragment>
    );
  }
}

export default withComponents(RegionInput);
