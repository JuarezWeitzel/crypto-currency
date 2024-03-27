import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type LoadingProviderProps = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultLoadingContextValue: LoadingProviderProps = {
    loading: false,
    setLoading: () => {},
}

const LoadingContext = createContext<LoadingProviderProps>(defaultLoadingContextValue);

export function LoadingProvider({ children }: { children: React.ReactNode}) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading}}>
            { children }
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext)
    if(!context) throw new Error("Error when using useLoading!");
    return context;
}