import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Form } from './InputForm.styled';
import 'antd/dist/antd.css';
import moment from 'moment';
import CustomInput from './formElements/CustomInput';
import CustomDropdown from './formElements/CustomDropdown';
import CustomDatePicker from './formElements/CustomDatePicker';

type Inputs = {
  dropdown: string;
  name: string;
  surname: string;
  birthdate: Date;
};

export default function InputForm({ setMyData }: any) {
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert('Success!');

    setMyData({
      ...data,
      birthdate: moment(data.birthdate).format('DD-MM-YYYY'),
    });
  };

  function UseDropdownValidation(
    selectedOption: string,
    surnameLength: number
  ) {
    if (selectedOption === 'C' && surnameLength < 5) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomDropdown
          name='dropdown'
          label='Choose option'
          rules={{
            validate: {
              dropdownRules: (val: string) =>
                UseDropdownValidation(val, methods.watch('surname').length) ||
                'Criteria not met!',
            },
          }}
        />

        <CustomInput name='name' label='Name' rules={{}} />

        <CustomInput
          name='surname'
          label='Surname'
          rules={{ required: 'This field is required!' }}
        />

        <CustomDatePicker
          name='birthdate'
          label='Birth date'
          rules={{
            validate: {
              isAfter: (value: moment.MomentInput) => !moment(value).isAfter(),
              isVeryOld: (value: moment.MomentInput) =>
                !moment(value).isBefore('1900', 'year'),
            },
          }}
        />

        <input
          style={{
            backgroundColor:
              methods.formState.errors.birthdate?.type === 'isVeryOld'
                ? 'aqua'
                : 'lightgreen',
            margin: '10px 0',
          }}
          type='submit'
          disabled={methods.formState.errors.birthdate?.type === 'isAfter'}
        />
      </Form>
    </FormProvider>
  );
}
