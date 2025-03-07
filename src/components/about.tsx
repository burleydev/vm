import '../index.css'

const About = () => {
    return (
        <div className='lg:m-20 sm:m-10'>
            <div className=''>
                <h1 className='text-4xl font-bold pb-32'>SUMMARY</h1>
            </div>

            <div className='grid gap-18 lg:grid-cols-3 md:grid-cols-1'>
                <div className='flex flex-col items-left'>
                    <img src='https://picsum.photos/300/400' className='rounded-md'></img>
                    <h3 className='mt-10 text-xl font-bold'>HI, I'M CARLOS</h3>
                    <p className='text-justify my-8'>I am a Visual Merchandiser with over 10 years of experience in the retail sector. I have worked with a variety of brands, ranging from streetwear to high-end fashion. My expertise includes window displays, mannequins, and store layouts. Check my work below!</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>PROFILE</h1>
                    <hr className="border-t-3 border-black-500 my-2" />
                    <div className=''>
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Address</h2>
                        <h2>London, N16 7TP</h2>
                        </div>
 
                        <div className='grid grid-cols-2 my-10'>
                        <h2 className='font-bold'>Phone</h2>
                        <h2>(+44) 7599 306711</h2>
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