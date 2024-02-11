import star1 from '@/app/assets/images/star_1.svg'
import star2 from '@/app/assets/images/star_2.svg'
import Image from 'next/image'


export const Background = () => {
    return(
        <div className="absolute w-[80%] -z-10 aspect-[4/1] inset-1/2 -translate-x-1/2 -translate-y-1/2 border border-secondary/20 rounded-[100%] rotate-12">
            <Image src={star2} alt='stars' className='absolute right-1/4 -top-10'/>
            <Image src={star1} alt='stars' className='absolute right-1/4 -bottom-20'/>
        </div>
    )
}