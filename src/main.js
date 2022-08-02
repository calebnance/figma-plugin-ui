import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, setup } from "goober";

setup(React.createElement);

const Container = styled("div")`
  background-color: #18a0fb;
  font-weight: bold;
`;

const LineItem = ({ label, value }) => (
  <Container>
    <div>Label: {label}</div>
    <div>Value: {value}</div>
  </Container>
);

LineItem.propTypes = {
  // required
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default React.memo(LineItem);
