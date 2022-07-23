import { FC } from "react";
import "./Loading.scss";

interface LoadingProps {
    className?: string;
}

const Loading: FC<LoadingProps> = ({ className }) => {
    return (
        <div className={`loadingio-spinner-interwind-z9i911kxb57 ${className}`}>
                <div className="ldio-ssclpmcfrc">
                <div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading