"use client"

import Image from 'next/image'
import Avatar from '@/assets/avatar.svg'
import Wave from '@/assets/wave.svg'
import Water from '@/assets/water.svg'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ChevronRightIcon, Cross1Icon } from '@radix-ui/react-icons'
import { Slider } from '@/components/Slider'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {
  const [dailyGoal, setDailyGoal] = useState(1500)
  const [quantityPerMinutes, setQuantityPerMinutes] = useState(1500)
  const [percentage, setPercentage] = useState(0)

  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')

  const [dialog, showDialog] = useState(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const timeInMinutes = Number(hours) * 60 + minutes
    const timeInMilleseconds = Number(timeInMinutes) * (60 * 1000)

    setTimeout(() => {
      showDialog(true)
    }, timeInMilleseconds);
  }


  const handleHours = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length > 2 || isNaN(Number(value))) return
    setHours(event.target.value)
  }

  const handleMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length > 2 || isNaN(Number(value))) return
    setMinutes(event.target.value)
  }

  const increasePercentage = () => {
    const newPercentage = (quantityPerMinutes / dailyGoal) * 100
    setPercentage(percentage + newPercentage)
    showDialog(false)
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
            <p className='font-extrabold text-xs text-gray-500'>{parseInt(percentage.toString())}%</p>

            <Image
              src={Water}
              alt={'Water'}
              height={150}
              className='mt-10 mb-8'
            />

            <p className='font-semibold text-xl text-gray-500'>Beber água</p>
            <p className='font-medium text-base text-gray-500'>Meta: {dailyGoal}ml</p>
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


            <button type='submit' className='w-full bg-blue-300 active:bg-blue-400 rounded-md justify-center items-center h-14 flex'>
              <p className='text-gray-500 text-base font-medium'>Começar</p>
              <ChevronRightIcon className='text-gray-500 h-6 w-6' />
            </button>
          </form>
        </div>

        <AlertDialog.Root open={dialog}>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-gray-500 opacity-70 data-[state=open]:animate-overlayShow fixed inset-0" />
            <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-72 max-w-xs translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-gray-400 px-3 pt-4 pb-11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <AlertDialog.Title className='flex justify-end'>
                <Cross1Icon className='bg-gray-200 text-gray-100 w-6 h-6 p-1 rounded-full cursor-pointer' onClick={() => showDialog(false)} />
              </AlertDialog.Title>

              <div className='flex justify-center'>
                <Image
                  src={Water}
                  alt={'Water'}
                  height={62}
                  className='mt-5 mb-6'
                />
              </div>
              <AlertDialog.Description className="text-2xl font-semibold text-blue-300 text-center">
                Lembrete para <br />beber água!
              </AlertDialog.Description>

              <AlertDialog.Action
                onClick={() => increasePercentage()}
                className='w-2/3 bg-blue-300 active:bg-blue-400 rounded-md justify-center items-center h-10 mt-6 flex m-auto'>
                <p className='text-gray-500 text-base font-medium'>Feito</p>
              </AlertDialog.Action>

              <AlertDialog.Action
                onClick={() => showDialog(false)}
                className='w-2/3 active:bg-red-400 bg-red-500 rounded-md justify-center items-center h-10 mt-6 flex m-auto'>
                <p className='text-gray-500 text-base font-medium'>Fechar</p>
              </AlertDialog.Action>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  )
}
