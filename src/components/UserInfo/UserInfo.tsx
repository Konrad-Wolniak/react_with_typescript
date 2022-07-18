export default function UserInfo({ dropdown, name, surname, birthdate }: any) {
  return (
    <div>
      Dropdown: {dropdown}
      <br />
      Name: {name}
      <br />
      Surname: {surname}
      <br />
      Birth date: {birthdate}
      <br />
    </div>
  );
}
