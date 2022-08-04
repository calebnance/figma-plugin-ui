import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'goober';

const Container = styled('button')([
  {
    borderColor: 'transparent',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    fontFamily: 'Inter,sans-serif',
    fontSize: '11px',
    height: '32px',
    lineHeight: '30px',
    maxWidth: '200px',
    padding: '0 11px'
  },
  ({ type }) => {
    if (type === 'primary') {
      return {
        backgroundColor: 'var(--figma-color-bg-brand, #0d99ff)',
        color: '#ffffff',
        '&:hover, &:focus, &:focus-visible': {
          borderColor: 'var(--figma-color-border-brand, #bde3ff)',
          borderWidth: '2px',
          lineHeight: '28px',
          outline: 'none',
          padding: '0 10px'
        }
      };
    }

    // type default & catch-all
    return {
      backgroundColor: 'var(--figma-color-bg, #ffffff)',
      borderColor: 'var(--figma-color-text, rgba(0, 0, 0, 0.9))'
    };
  }
]);

function Button({ onClick, text, type }) {
  return (
    <Container onClick={onClick} type={type}>
      {text}
    </Container>
  );
}

Button.defaultProps = {
  onClick: () => null,
  text: 'Button',
  type: 'default'
};

Button.propTypes = {
  // optional
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'destructive',
    'primary-destructive'
  ])
};

export default React.memo(Button);
