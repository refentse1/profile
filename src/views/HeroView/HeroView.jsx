import Image from '../../../public/HeroImage.jpg'
import Type from '../../component/Typing/TypeComp';

const HeroView = () => {
    return ( 
        <div style={{height:"50rem"}} className="flex-grow grid grid-cols-2 ">
            <div className=" col-span-1 flex flex-col justify-center ">
                <p className=" text-4xl font-medium mb-4 text-gray-800">
                    Hello I am Refentse Makgoba <br/> Junior Software <Type/>
                </p>
                <p className="font-medium text-gray-500">
                    I am a Junior Java Developer, with hands-on experience in supporting and maintaing existing solutions, as well as developing new ones.
                    I am skilled in automating processes, monitoring builds and deploying code accross various environments. 
                </p>
                <a href='/RefentseCV2.pdf' download="/RefentseCV.pdf" className="mt-5 text-center p-2 w-24 cursor-pointer text-lg font-medium bg-blue-700 rounded-md text-white animate-pulse hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 duration-700" >Hire Me</a>
            </div>
            <div className="col-span-1 flex items-center justify-end">
                   <img className="rounded-full w-72 h-72 object-cover" src={Image} alt="" /> 
            </div>
        </div>
     );
}
 
export default HeroView;