// Core
import React, { useEffect, ReactNode } from "react";

// Routes
import { book } from "../../navigation/book";

// Hooks
import { useAuth } from "./hooks/useAuth";

interface GuardianProps {
    children: ReactNode;
}

export const Guardian: React.FC<GuardianProps> = ({ children }) => {
    // const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            // navigate(book.root);
        }
    }, [history, isAuthenticated]);

    return <>{children}</>;
};
