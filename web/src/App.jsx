import { Fragment } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootDashboardLayout from "./layouts/navbar";
import Signin from "./pages/auth/signin";
import Users from "./pages/users/users";
import PrivateRoute from "./utils/privateRoutes/privateRoutes";
import AddUser from "./pages/users/addUser";

const publicRoutes = (
  <Route>
    <Route path="signin" element={<Signin />} />
  </Route>
);

const privateRoutes = (
  <Route path="/" element={<PrivateRoute Component={RootDashboardLayout} />}>
    <Route index element={<PrivateRoute Component={Users} />} />
    <Route path="/addUser" element={<PrivateRoute Component={AddUser} />} />
  </Route>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      {publicRoutes}
      {privateRoutes}
    </Fragment>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
