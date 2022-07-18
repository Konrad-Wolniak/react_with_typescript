import { render } from '@testing-library/react';
import { Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

export default function CustomDropdown({
  name,
  label,
  rules,
}: {
  name: string;
  label: string;
  rules: Object;
}) {
  const { Option } = Select;
  const { control } = useFormContext();
  return (
    <>
      <label>{label}:</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select {...field} status={error && 'error'}>
              <Option value={'A'}>A</Option>
              <Option value={'B'}>B</Option>
              <Option value={'C'}>C</Option>
            </Select>
            {error && <p>{error.message}</p>}
          </>
        )}
        rules={rules}
      />
    </>
  );
}
