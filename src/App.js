import React, { lazy } from 'react';
import { useState } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie/ModalDailyCalorie';
// import { DairyProductList } from 'components/DairyProductList/DairyProductList';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const App = () => {
  const [isModalOpen, setIsModalopen] = useState(true);
  const closeModal = () => {
    setIsModalopen(false);
  };
  return (
    <>
      <GlobalStyle />
      {isModalOpen && <ModalDailyCalorie closeModal={closeModal} />}
      {/* <DairyProductList /> */}
      <Routes>
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/login"
              component={<RegistrationPage />}
            />
          }
        />
      </Routes>
    </>
  );
};
