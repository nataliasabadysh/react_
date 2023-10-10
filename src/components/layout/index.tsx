import { ReactNode, useContext } from "react";
import { AppContext } from "../../context";
import { AppDrawer } from "../drawer/Drawer";

interface FooterProps {
  children: ReactNode;
}

export const Layout: React.FC<FooterProps> = ({ children }) => {
  const context = useContext(AppContext);

  console.log(context);

  return (
    <div className="layout">
      <AppDrawer>
        <>{children}</>
      </AppDrawer>

      <footer>
        <p>&copy; 2023 </p>
      </footer>
    </div>
  );
};
