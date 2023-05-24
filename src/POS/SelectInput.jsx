import React from 'react';
import styled from 'styled-components';

// Styled components
const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectElement = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 8px 7px -5px rgba(0, 0, 0, 0.75);
  outline: none;
`;

// Component
const SelectInput = ({ options, value, onChange }) => {
    return (
        <SelectWrapper>
            <SelectElement value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </SelectElement>
        </SelectWrapper>
    );
};

export default SelectInput;