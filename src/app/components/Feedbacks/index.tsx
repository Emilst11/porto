import background from '@/app/assets/images/feedbackBG.svg'
import Image from 'next/image'

export const Feedbacks = () => {
    return(
        <div className="min-h-screen relative">
            <div className="container mx-auto p-5">
                <h2 className='text-center'>WHAT THEY <span>SAID</span></h2>
                <div className='grid grid-cols-3 gap-5'></div>
            </div>
            <div className='bg-gradient-to-b from-base/0 to-base absolute w-full aspect-[2/1] bottom-0'></div>
            <Image src={background} alt='background feedback' className='absolute bottom-0 w-1/2 -z-10'/>
        </div>
    )
}