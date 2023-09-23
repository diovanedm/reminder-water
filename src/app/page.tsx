import Image from 'next/image'
import Avatar from '@/assets/avatar.svg'
import Wave from '@/assets/wave.svg'
import Water from '@/assets/water.svg'

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

        <div className='flex'>
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
        </div>
      </div>
    </div >
  )
}
