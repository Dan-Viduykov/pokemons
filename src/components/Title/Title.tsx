import { FC, ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    className?: string;
}

const Title: FC<TitleProps> = ({ Tag = 'h3', children, className }) => {
    return (
        <Tag className={`${Tag} ${className}`}>{children}</Tag>
    )
}

export default Title