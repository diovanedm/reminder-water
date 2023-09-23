interface SliderInfoProps {
    title: string
    info: string
}
export function SliderInfo({ title, info }: SliderInfoProps) {
    return (
        <div className='flex justify-between pb-1'>
            <p className='text-blue-300 text-base font-medium'>{title}</p>
            <p className='text-gray-150 text-xs font-medium'>{info}</p>
        </div>
    )
}