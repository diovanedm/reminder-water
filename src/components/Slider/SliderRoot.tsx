
import { ReactNode } from "react";

interface SliderRootProps {
    children: ReactNode
}


export default ({ children }: SliderRootProps) => (
    <div className="w-80">
        {children}
    </div>
);
