import { FC, ReactNode } from "react";
import Error from "../Error";
import Loading from "../Loading";

interface ViewProps {
    children: ReactNode | ReactNode[];
    isLoad: boolean;
    isErr: boolean;
    isFetch: boolean;
}

const View: FC<ViewProps> = ({ children, isLoad, isErr, isFetch }) => {
    return (
        <>
            {
                isLoad || isFetch ?
                    <Loading /> : 
                    isErr ?
                        <Error /> :
                        children 
            }
        </>
    )
}

export default View