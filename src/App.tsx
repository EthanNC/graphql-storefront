import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/products";
import { CouponList } from "./components/CouponList";
import React from "react";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

const client = new Client({
  url: "http://127.0.0.1:8787",
  exchanges: [cacheExchange, fetchExchange],
});

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);
const Layout = React.lazy(() => import("./components/Layout"));
const router = createBrowserRouter([
  {
    path: "/",
    loader: CouponList.loader,
    element: (
      <React.Suspense fallback={<Loader />}>
        <Layout />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        loader: Products.loader,
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
