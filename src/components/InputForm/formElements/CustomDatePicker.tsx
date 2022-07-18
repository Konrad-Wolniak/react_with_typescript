import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker, Space } from 'antd';

export default function CustomDatePicker({
  name,
  label,
  rules,
}: {
  name: string;
  label: string;
  rules: Object;
}) {
  const { control } = useFormContext();
  return (
    <>
      <label>{label}:</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Space direction='vertical'>
              <DatePicker
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            </Space>
          );
        }}
        rules={rules}
      />
    </>
  );
}
