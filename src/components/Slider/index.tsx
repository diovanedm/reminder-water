"use client"
import * as Slider from '@radix-ui/react-slider';

export default () => (
    <Slider.Root
        className="relative flex items-center select-none touch-none w-80 h-5"
        defaultValue={[50]}
        max={100}
        step={1}
    >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[6px]">
            <Slider.Range className="absolute bg-blue-300 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
            className="block w-5 h-5 bg-blue-300 rounded-[10px]"
            aria-label="Volume"
        />
    </Slider.Root>
);
