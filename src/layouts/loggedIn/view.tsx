import { Header } from "./header";

/** A layout that renders a header on top of the children, showing user info. */
export const LoggedInLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
