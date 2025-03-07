import '../index.css';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-colour'>
      
      <div className='text-center'>
        <h1 className='font-bold tracking-wider lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl'>PORTFOLIO</h1>
        <h2 className='font-bold mt-4 tracking-wider lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl'>VISUAL MERCHANDISER</h2>
      </div>

      <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-xl font-bold'>CARLOS BORREGA</h3>
      </div>
    </div>
  );
};

export default Home;
