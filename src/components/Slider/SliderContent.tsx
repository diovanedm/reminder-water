"use client"

import * as Slider from '@radix-ui/react-slider';

interface SliderContentProps extends Slider.SliderProps {
    // Outras propriedades específicas do SliderContent, se necessário
}

export function SliderContent({ ...rest }: SliderContentProps) {

    return (
        <Slider.Root
            {...rest}
            className="relative flex items-center select-none touch-none h-5"
        >
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-[6px]">
                <Slider.Range className="absolute bg-blue-300 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
                className="block w-5 h-5 bg-blue-300 rounded-[10px]"
                aria-label="Volume"
            />
        </Slider.Root>
    )
}