import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

export default function CustomInput({
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
        defaultValue=''
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input {...field} status={error && 'error'} />
            {error && <p>{error.message}</p>}
          </>
        )}
        rules={rules}
      />
    </>
  );
}
