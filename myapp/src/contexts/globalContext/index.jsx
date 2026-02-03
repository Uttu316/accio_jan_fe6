import { createContext, useContext, useState } from "react";

export const GloabalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    cart: [],
    user: null,
    route: {},
    theme: {},
    config: {},
  });
  return <GloabalContext value={global}>{children}</GloabalContext>;
};

export default GlobalProvider;
// const { cart, user, route, theme, config } = useContext(GloabalContext);
{
  /* <GlobalProvider>
    <App/>
</GlobalProvider> */
}
