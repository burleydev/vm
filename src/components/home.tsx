import '../index.css';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-colour'>
      
      <div className='text-center'>
        <h1 className='text-8xl font-bold'>PORTFOLIO</h1>
        <h2 className='text-4xl font-bold mt-4'>VISUAL MERCHANDISER</h2>
      </div>

      <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-xl font-bold'>CARLOS BORREGA</h3>
      </div>
    </div>
  );
};

export default Home;
