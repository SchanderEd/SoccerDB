import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { Header } from "./header";
import { QueryProvider } from "../providers/query-client";

export const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <div className="container mx-auto space-y-6">
        <QueryProvider>
          <Outlet />
        </QueryProvider>
      </div>
    </>
  );
};
