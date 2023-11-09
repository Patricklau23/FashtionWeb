import React, {useState} from 'react';
import { leftArrow, rightArrow } from '../assets';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
        ];

  const prevSlide=()=>{
    console.log(currentSlide);
    setCurrentSlide(currentSlide === 0? 3: currentSlide-1)
    
  };

  const nextSlide= ()=>{
    console.log(currentSlide);
    setCurrentSlide(currentSlide === 3? 0: currentSlide+1)
  };

  return (
    //The main container for banner
    <div className='w-full h-full overflow-x-hidden'>
        <div className='w-[screen] h-[650px] relative'>
            <div 
            style={{transform:`translateX(-${currentSlide * 100}vw)`}}
            className='w-[400vw] h-full flex duration-1000'>

            {data.map((img,index) => (
                <img 
                    className='w-screen h-full object-cover'
                    key={index}
                    src={img}
                    alt={index+1}
                />
            ))}
                    {/* // <img
                        className='w-screen h-full object-cover'
                        src={data[0]} 
                        alt="ImgOne"
                        loading="priority"
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[1]} 
                        alt="ImgTwo"
                        
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[2]} 
                        alt="ImgThree"
                        
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[3]} 
                        alt="ImgFour"
                        
                    /> */}
                    
            </div>
             
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div>            
                    <img onClick={prevSlide} className='w-8 cursor-pointer' src={leftArrow}></img>
                </div>       

                <div>
                    <img onClick={nextSlide} className='w-8 cursor-pointer' src={rightArrow}></img>
                </div>

            </div>

            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-4 bottom-28'>
            {data.map((_, index) => (
            <i
              key={index}
              className={`bi bi-dot ${currentSlide === index ? 'text-yellow-500':'text-gray-500}'}`}
              style={{ fontSize: '3rem' }}
            >      
            </i>
          ))}
            </div>
        </div>
    </div>
  )
}

export default Banner
