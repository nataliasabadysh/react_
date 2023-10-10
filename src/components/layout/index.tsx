import { ReactNode, useContext } from "react";
import { AppContext } from "../../context";

interface FooterProps {
    children: ReactNode;
}


export const Layout: React.FC<FooterProps> = ({ children }) => {
    const context = useContext(AppContext);

    console.log(context);

    return (
        <div className="layout">
            <header>
                <h1>Header App</h1>
            </header>

            <main>{children}</main>

            <footer>
                <p>&copy; 2023 </p>
            </footer>
        </div>
    );
};
