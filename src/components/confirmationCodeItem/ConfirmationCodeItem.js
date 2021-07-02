import React, {useState} from "react";

import {CodeItem, Border, CodeBlock} from './styled';

const ConfirmationCodeItem = ({update}) => {
  const [ values, setValues ] = React.useState(Array(6).fill(''));

  const onChange = ({ target: t }) => {
    const
      index = +t.dataset.index,
      value = t.value;
    update(values.map((n, i) => i === index ? value : n))
    setValues(values.map((n, i) => i === index ? value : n));

    if (index < values.length - 1 && value) {
      inputRefs[index + 1].focus();
      inputRefs[index + 1].select();
    }
  };
console.log(values)
  const inputRefs = [];

  return (
    <CodeBlock>
      {values.map((n, i) => (
        <div>
          <CodeItem
            key={i}
            type={'text'}
            name={'code'}
            maxLength={'1'}
            value={values[i]}
            data-index={i}
            onChange={onChange}
            ref={input => inputRefs[i] = input}
            required
            autoComplete={'off'}
          />
        </div>
      ))}
    </CodeBlock>
  )
}

export default ConfirmationCodeItem;