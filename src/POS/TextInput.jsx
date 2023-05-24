import React from 'react';
import styled from 'styled-components';

// Styled components
const TextWrapper = styled.div`
  position: relative;
`;

const TextElement = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 1rem;
`;

const SelectInput = ({ value, onChange }) => {
    return (
        <TextWrapper>
            <TextElement type='text' value={value} onChange={onChange}></TextElement>
        </TextWrapper>
    );
};

export default SelectInput;