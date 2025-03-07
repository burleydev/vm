import '../index.css';

import ugg1 from '../images/ugg/ugg1.jpg'
// import ugg2 from '../images/ugg/ugg2.jpg'
import ugg3 from '../images/ugg/ugg3.jpg'
import ugg4 from '../images/ugg/ugg4.jpg'

import club1 from '../images/club/club1.jpg'
import club2 from '../images/club/club2.jpg'
// import club3 from '../images/club/club3.jpg'
import club4 from '../images/club/club4.jpg'

import weekday1 from '../images/weekday/weekday1.jpg'
import weekday2 from '../images/weekday/weekday2.jpg'
import weekday3 from '../images/weekday/weekday3.jpg'
import weekday4 from '../images/weekday/weekday4.jpg'

import stories1 from '../images/stories/stories1.jpg'
import stories2 from '../images/stories/stories2.jpg'
import stories3 from '../images/stories/stories3.jpg'
import stories4 from '../images/stories/stories4.jpg'



const Visual = () => {
  return (
    <div className='sm:m-20 xs:my-20 xs:mx-5'>

      <div className=''>
        <h1 className='sm:text-4xl xs:text-3xl font-bold pb-32'>VISUAL MERCHANDISING PROJECTS</h1>
      </div>

      <div id='ugg' className='mb-32'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>UGG</h2>
        <h3 className='mb-10'>Showroom display at head office showcasing the new A/W 2025 collection.</h3>
        <div className='grid grid-cols-4 gap-10'>
          <img src={ugg4} className='rounded-md col-span-4 w-screen' />
          <img src={ugg3} className='rounded-md sm:col-span-2 xs:col-span-4 h-full'/>
          <img src={ugg1} className='rounded-md sm:col-span-2 xs:col-span-4'/>
        </div>
      </div>

      <div id='club' className='mb-32'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>Club Monaco</h2>
        <h3 className='mb-10'>Women's and men's collections showcased at the flagship store in Sloane Square.</h3>
        <div className='grid grid-cols-4 gap-10'>
          <img src={club4} className='rounded-md col-span-4 w-screen' />
          <img src={club1} className='rounded-md sm:col-span-2 xs:col-span-4 h-full'/>
          <img src={club2} className='rounded-md sm:col-span-2 xs:col-span-4'/>
        </div>
      </div>

      <div id='weekday' className='mb-32'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>Weekday</h2>
        <h3 className='mb-10'>Window displays and store interiors at the Westfield Stratford store.</h3>
        <div className='grid grid-cols-4 gap-10'>
          <img src={weekday4} className='rounded-md col-span-4 w-screen' />
          <img src={weekday2} className='rounded-md sm:col-span-2 xs:col-span-4 h-full'/>
          <img src={weekday3} className='rounded-md sm:col-span-2 xs:col-span-4'/>
          <img src={weekday1} className='rounded-md col-span-4 w-screen' />
        </div>
      </div>

      <div id='stories' className='mb-32'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>& Other Stories</h2>
        <h3 className='mb-10'>Window displays and store interiors at the Regent Street flagship.</h3>
        <div className='grid grid-cols-4 gap-10'>
          <img src={stories3} className='rounded-md col-span-4 w-screen' />
          <img src={stories2} className='rounded-md sm:col-span-2 xs:col-span-4 h-full'/>
          <img src={stories4} className='rounded-md sm:col-span-2 xs:col-span-4'/>
          <img src={stories1} className='rounded-md col-span-4 w-screen' />
        </div>
      </div>

    </div>
  );
};

export default Visual;
