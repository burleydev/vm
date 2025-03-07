import '../index.css'

const About = () => {
    return (
        <div className='m-20'>
            <div className=''>
                <h1 className='text-3xl font-bold pb-32'>SUMMARY</h1>
            </div>

            <div className='grid grid-cols-3 gap-18'>
                <div className='flex flex-col items-left'>
                    <img src='https://picsum.photos/300/400' className=''></img>
                    <h3 className='mt-10 text-xl font-bold'>HI, I'M CARLOS</h3>
                    <p className='text-justify my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati qui blanditiis ex placeat dolor! Vitae est veniam, iste mollitia sequi facilis, deserunt dignissimos impedit odio nostrum obcaecati. Sit, voluptates.</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>PROFILE</h1>
                    <hr className="border-t-3 border-black-500 my-2" />
                    <div className=''>
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Address</h2>
                        <h2>N16 7TP</h2>
                        </div>
 
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Phone</h2>
                        <h2>07599 306711</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Email</h2>
                        <a href='mailto:carlos.borrega@pm.me'>carlos.borrega@pm.me</a>
                        </div>

                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>CV</h2>
                        <h2>Click here to download</h2>
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>SKILLS</h1>
                    <hr className="border-t-3 border-black-500 my-2" />
                    <div className=''>
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Visual Merchandising</h2>
                        <h2>Expert in window displays, seasonal concepts, and showroom design</h2>
                        </div>
 
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Leadership</h2>
                        <h2>Skilled in team training, clear communication, and team collaboration</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Creative Direction</h2>
                        <h2>Proficient in designing in-store experiences, product storytelling, and visual concepts</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Industry Expertise</h2>
                        <h2>Strong knowledge of footwear, apparel, accessories, and consumer trends</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;