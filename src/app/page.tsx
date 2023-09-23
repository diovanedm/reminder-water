"use client"

import Image from 'next/image'
import Avatar from '@/assets/avatar.svg'
import Wave from '@/assets/wave.svg'
import Water from '@/assets/water.svg'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Slider } from '@/components/Slider'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {
  const [dailyGoal, setDailyGoal] = useState(1500)
  const [quantityPerMinutes, setQuantityPerMinutes] = useState(1500)

  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleHours = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) return
    setHours(event.target.value)
  }

  const handleMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) return
    setMinutes(event.target.value)
  }

  return (
    <div className='flex justify-center items-center min-h-screen py-4'>
      <div>
        <header className='pb-20 max-sm:pb-12'>
          <div className='flex flex-row gap-2'>
            <div className='bg-gray-200 w-16 h-16 rounded-full flex justify-center items-center'>
              <Image
                src={Avatar}
                alt="Avatar"
                className='w-14 h-14'
              />
            </div>

            <div>
              <p className='text-white text-2xl font-light'>Boa tarde</p>
              <div className=' flex flex-row gap-2 items-center'>
                <p className='text-white text-2xl font-semibold'>Diovane</p>
                <Image
                  src={Wave}
                  alt="Wave"
                  className='w-6 h-6'
                />
              </div>
            </div>
          </div>
        </header>

        <div className='flex gap-28 max-sm:flex-col max-sm:items-center max-sm:gap-7'>
          {/* Water */}
          <div className='bg-blue-300 rounded-3xl w-52 px-11 py-8 flex flex-col items-center'>
            <p className='font-extrabold text-xs text-gray-500'>80%</p>

            <Image
              src={Water}
              alt={'Water'}
              height={150}
              className='mt-10 mb-8'
            />

            <p className='font-semibold text-xl text-gray-500'>Beber água</p>
            <p className='font-medium text-base text-gray-500'>Meta: 300ml</p>
          </div>

          <form className='flex flex-col gap-10 items-center' onSubmit={handleSubmit}>
            <Slider.Root>
              <Slider.Info title='Meta diária' info={`${dailyGoal} ml`} />

              <Slider.Content
                onValueChange={(value) => setDailyGoal(value[0])}
                defaultValue={[dailyGoal]}
                max={3000}
                step={1}
              />
            </Slider.Root>

            <Slider.Root>
              <Slider.Info title='Quantidade por timer' info={`${quantityPerMinutes} ml`} />
              <Slider.Content
                onValueChange={(value) => setQuantityPerMinutes(value[0])}
                defaultValue={[quantityPerMinutes]}
                max={3000}
                step={1}
              />
            </Slider.Root>



            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1'>
                <input
                  type="text"
                  value={hours}
                  placeholder='00'
                  onChange={handleHours}
                  className='bg-gray-400 rounded-xl  border-[1px] border-gray-200 focus:border-blue-300 w-16 h-16 text-gray-100 text-3xl focus:outline-none text-center placeholder:text-gray-150'
                />

                <p className='text-gray-200 text-base'>h</p>
              </div>

              <p className='text-gray-100  text-3xl'>:</p>

              <div className='flex items-center gap-1'>
                <input
                  type="text"
                  value={minutes}
                  placeholder='00'
                  onChange={handleMinutes}
                  className='bg-gray-400 rounded-xl  border-[1px] border-gray-200 focus:border-blue-300 w-16 h-16 text-gray-100 text-3xl focus:outline-none text-center placeholder:text-gray-150'
                />

                <p className='text-gray-200 text-base'>m</p>
              </div>
            </div>


            <button type='submit' className='w-full bg-blue-300 rounded-md justify-center items-center h-14 flex'>
              <p className='text-gray-500 text-base font-medium'>Começar</p>
              <ChevronRightIcon className='text-gray-500 h-6 w-6' />
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}
