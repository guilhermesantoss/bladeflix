import React from 'react';
import styled from 'styled-components';

const Input = styled.input``;

function FormField({ label, type, name, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {`${label}:`}
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;