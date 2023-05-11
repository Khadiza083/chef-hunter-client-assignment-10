import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import RegistrationLayout from "../layout/RegistrationLayout";
import ChefDetails from "../Pages/Home/ChefDetails/ChefDetails";
import ChefRecipeLayout from "../layout/chefRecipeLayout";
import Login from "../Pages/Login/Login";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound/NotFound";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ChefDetails></ChefDetails>,
        }
      ]
    },
    {
      path: 'loginLayout',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/loginLayout',
          element: <Login></Login>
        },
        {
          path: 'registrationLayout'
        },
        
      ]
    },
    {
      path: 'registerLayout',
      element: <RegistrationLayout></RegistrationLayout>
    },
    {
      path: '/chefRecipe',
      element: <ChefRecipeLayout></ChefRecipeLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>
        },
      ]
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '*', 
      element: <NotFound></NotFound>
    }
    
  ]);

  export default router;