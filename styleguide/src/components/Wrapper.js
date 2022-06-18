import { Component } from "react";
import PropTypes from "prop-types";

class Wrapper extends Component {
  static propTypes = {
    /** Description of prop "foo". */
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Description of prop "baz". */
    foo: PropTypes.number
  }
  static defaultProps = {
    foo: 42
  }

  render() {
    /* ... */
  }
}

export default Wrapper;
