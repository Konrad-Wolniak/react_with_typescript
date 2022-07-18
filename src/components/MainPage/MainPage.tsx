import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import UserInfo from '../UserInfo/UserInfo';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MainPage() {
  const [userData, setUserData] = useState({
    dropdown: '',
    name: '',
    surname: '',
    birthdate: '',
  });

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path='userform'
          element={<InputForm setMyData={setUserData} />}
        />
        <Route path='userinfo' element={<UserInfo {...userData} />} />
      </Routes>
    </>
  );
}
