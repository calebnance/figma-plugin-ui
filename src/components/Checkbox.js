import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'goober';

const Container = styled('div')`
  background-color: var(--figma-color-bg-brand, #0d99ff);
  font-weight: regular;
`;

function Checkbox({ label, value }) {
  return (
    <Container>
      <span>
        Label:
        {label}
      </span>
      <div>
        Value:
        {value}
      </div>
    </Container>
  );
}

Checkbox.propTypes = {
  // required
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default React.memo(Checkbox);
