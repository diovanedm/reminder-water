import Image from 'next/image'
import Avatar from '@/assets/avatar.svg'
import Wave from '@/assets/wave.svg'
import Water from '@/assets/water.svg'
import Slider from '@/components/Slider'
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function Home() {
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
            <div>
              <div className='flex justify-between pb-1'>
                <p className='text-blue-300 text-base font-medium'>Meta diária</p>
                <p className='text-gray-150 text-xs font-medium'>3000ml</p>
              </div>

              <Slider />
            </div>

            <div>
              <div className='flex justify-between pb-1'>
                <p className='text-blue-300 text-base font-medium'>Quantidade por timer</p>
                <p className='text-gray-150 text-xs font-medium'>3000ml</p>
              </div>

              <Slider />
            </div>

            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1'>
                <div className='bg-gray-400 p-4 rounded-xl  border-[1px] border-gray-200'>
                  <p className='text-gray-100 text-3xl'>00</p>
                </div>
                <p className='text-gray-200 text-base'>h</p>
              </div>

              <p className='text-gray-100  text-3xl'>:</p>

              <div className='flex items-center gap-1'>
                <div className='bg-gray-400 p-4 rounded-xl  border-[1px] border-gray-200'>
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
