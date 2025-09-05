import '../index.css';
import home from '../images/weekday/home.jpg';

const Home = () => {
  return (
    <div className='h-screen min-h-[40rem] flex flex-col text-center justify-evenly bg-cover bg-top' style={{backgroundImage: `url(${home})`}}>
      
      <div className='lg:mt-[12%] md:mt-[20%] sm:mt-[30%] xs:mt-[40%]'>
        <h1 className='title1 white lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl'>CARLOS BORREGA</h1>
        <h2 className='title2 white mt-10 lg:text-xl md:text-lg sm:text-md xs:text-sm'>VISUAL MERCHANDISER PORTFOLIO</h2>
      </div>
    </div>
  );
};

export default Home;
