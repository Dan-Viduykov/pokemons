import { FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
    className?: string;
    children: ReactNode | ReactNode[];
    size?: number;
    bold?: boolean;
}

const Text: FC<TextProps> = ({ className, children, size = 16, bold }) => {
    return (
        <p
            className={`${styles.text} ${className}`}
            style={{
                fontSize: `${size}px`,
                fontWeight: bold ? 700 : 400,
            }}
            >
            {children}
        </p>
    )
}

export default Text