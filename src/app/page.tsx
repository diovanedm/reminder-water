"use client"

import Image from 'next/image'
import Avatar from '@/assets/avatar.svg'
import Wave from '@/assets/wave.svg'
import Water from '@/assets/water.svg'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Slider } from '@/components/Slider'
import { useState } from 'react'

export default function Home() {
  const [dailyGoal, setDailyGoal] = useState(1500)
  const [quantityPerMinutes, setQuantityPerMinutes] = useState(1500)

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div>
        <header className='pb-20'>
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

        <div className='flex gap-28'>
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

          <div className='flex flex-col gap-10 items-center'>
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
                <div className='bg-gray-400 p-4 rounded-xl  border-[1px] border-gray-200 hover:border-blue-300'>
                  <p className='text-gray-100 text-3xl'>00</p>
                </div>
                <p className='text-gray-200 text-base'>h</p>
              </div>

              <p className='text-gray-100  text-3xl'>:</p>

              <div className='flex items-center gap-1'>
                <div className='bg-gray-400 p-4 rounded-xl  border-[1px] border-gray-200 hover:border-blue-300'>
                  <p className='text-gray-100 text-3xl'>00</p>
                </div>
                <p className='text-gray-200 text-base'>m</p>
              </div>
            </div>


            <button className='w-full bg-blue-300 rounded-md justify-center items-center h-14 flex'>
              <p className='text-gray-500 text-base font-medium'>Começar</p>
              <ChevronRightIcon className='text-gray-500 h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
