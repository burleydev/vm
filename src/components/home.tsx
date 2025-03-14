import '../index.css';
import home from '../images/weekday/home.jpg';

const Home = () => {
  return (
    <div className='h-screen min-h-[40rem] flex flex-col text-center justify-evenly bg-cover bg-top' style={{backgroundImage: `url(${home})`}}>
      
      <div className='lg:mt-[12%] md:mt-[20%] sm:mt-[30%] xs:mt-[40%]'>
        <h1 className='title font-bold tracking-wider lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl'>PORTFOLIO</h1>
        <h2 className='title font-bold mt-10 tracking-wider lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl'>VISUAL MERCHANDISING</h2>
      </div>

      <div className=''>
        <h3 className='title font-bold tracking-wider lg:text-2xl md:text-xl sm:text-lg xs:text-md'>CARLOS BORREGA</h3>
      </div>
    </div>
  );
};

export default Home;
