import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import RegistrationLayout from "../layout/RegistrationLayout";
import ChefDetails from "../Pages/Home/ChefDetails/ChefDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ChefDetails></ChefDetails>,
          loader: () => fetch(`http://localhost:5000/chefInfo/`)
        }
      ]
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