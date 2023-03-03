import React, { useState } from 'react';

type Props = {
  type: string;
};

const useInput: React.FC<Props> = ({ type }): JSX.Element[] => {
  const [value, setValue] = useState('');

  const input = (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  return [value, input];
};

export default useInput;
