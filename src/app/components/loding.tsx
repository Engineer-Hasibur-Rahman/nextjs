import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Create a context for loading state
interface LoadingContextType {
    isLoading: boolean;
    setLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// 2. Loading Provider
export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

// 3. Custom hook to use the loading context
export const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};

// 4. Global loading overlay component
export const GlobalLoading: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "24px",
                zIndex: 1000,
            }}
        >
            Loading...
        </div>
    );
};
