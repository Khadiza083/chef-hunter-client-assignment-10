import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import RegistrationLayout from "../layout/RegistrationLayout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: 'loginLayout',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: 'registrationLayout'
        }
      ]
    },
    {
      path: 'registerLayout',
      element: <RegistrationLayout></RegistrationLayout>
    }
  ]);

  export default router;