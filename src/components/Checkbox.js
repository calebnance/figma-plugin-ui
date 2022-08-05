import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'goober';

const Container = styled('div')`
  cursor: pointer;
  position: relative;
`;

const Input = styled('input')`
  cursor: pointer;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;

const Checkmark = styled('span')`
  background-color: #eee;
  height: 25px;
  width: 25px;
`;

function Checkbox({ checked, label }) {
  return (
    <Container>
      <Input type="checkbox" checked={checked} />
      <Checkmark />
      {label}
    </Container>
  );
}

Checkbox.defaultProps = {
  label: null
};

Checkbox.propTypes = {
  // required
  checked: PropTypes.bool.isRequired,

  // optional
  label: PropTypes.string
};

export default React.memo(Checkbox);
