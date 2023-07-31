import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <div className='mt-44'>
        <div className=" w-screen overflowx-hidden">
          <div className=" animate-slide-infinite">
            <div className=' w-screen'>
              <div className='text-5xl font-black'>This is a text which is horizontally scrolling automatically.</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
