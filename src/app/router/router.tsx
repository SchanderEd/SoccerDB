import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../layout/root-layout";
import App from "../app";

export const Router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <App /> }],
  },
]);
