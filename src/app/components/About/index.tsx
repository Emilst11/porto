import Image from "next/image"
import aboutBg from '@/app/assets/images/about.png'
import stars from '@/app/assets/images/star_2_grey.svg'

export const About = () => {
    return(
        <div className="container relative mx-auto p-5 min-h-screen flex items-center">
            <Image src={aboutBg} alt="about" className="absolute w-2/3 right-0 -z-30"/>
            <div className="absolute w-full aspect-[2/1] bg-gradient-to-r from-base via-base/90 -z-20"></div>
            <div className="space-y-5 p-5">
                <h2>about <span>me</span></h2>
                <p className="w-1/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore repudiandae praesentium distinctio hic suscipit vero provident eius cupiditate magni autem ullam facere aliquid nobis explicabo minima voluptate similique, ratione repellat!</p>
                <div>
                    <p className="text-secondary">Tech Stack</p>
                    <div></div>
                </div>
            </div>
            <Image src={stars} alt="stars" className="absolute bottom-0 translate-y-[-50%] translate-x-[30%] right-0"/>
        </div>
    )
}