import { Header } from "./header";

export const LoggedInLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
