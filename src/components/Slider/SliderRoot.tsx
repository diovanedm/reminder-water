
import { ReactNode } from "react";

interface SliderRootProps {
    children: ReactNode
}


export function SliderRoot({ children }: SliderRootProps) {
    return (
        <div className="w-80">
            {children}
        </div>
    )
};
