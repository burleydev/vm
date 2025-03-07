import '../index.css'
import resume from '../docs/Carlos Borrega CV.pdf'
import profile from '../images/profile/profile.jpg'

const About = () => {
    return (
        <div className='sm:m-20 xs:my-20 xs:mx-5'>
            <div className=''>
                <h1 className='sm:text-4xl xs:text-3xl font-bold pb-32'>SUMMARY</h1>
            </div>

            <div className='grid gap-18 lg:grid-cols-3 md:grid-cols-1'>
                <div className='flex flex-col items-left'>
                    <img src={profile} className='rounded-md'></img>
                    <h3 className='mt-10 text-xl font-bold'>HI, I'M CARLOS</h3>
                    <p className='xs:text-left sm:text-justify my-8'>I am a Visual Merchandiser with over 10 years of experience in the retail sector. I have worked with a variety of brands, ranging from streetwear to high-end fashion. My expertise includes window displays, mannequins, and store layouts. Check my work below!</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>PROFILE</h1>
                    <hr className="border-t-3 border-black-500 my-2" />
                    <div>
                        <div className='grid grid-cols-2 my-10'>
                            <h2 className='font-bold'>Address</h2>
                            <h2 className='xs:text-right sm:text-left'>London, N16 7TP</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10'>
                            <h2 className='font-bold'>Phone</h2>
                            <h2 className='xs:text-right sm:text-left'>(+44) 7599 306711</h2>
                        </div>

                        <div className='grid grid-cols-4 my-10'>
                            <h2 className='font-bold xs:col-span-1 sm:col-span-2 col-span-1'>Email</h2>
                            <div className='w-full xs:col-span-3 sm:col-span-2 xs:text-right sm:text-left'>
                                <a href='mailto:carlos.borrega@pm.me'>
                                    carlos.borrega@pm.me
                                </a>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 my-10'>
                            <h2 className='font-bold xs:col-span-1 sm:col-span-2 col-span-1'>CV</h2>
                            <div className='w-full xs:col-span-3 sm:col-span-2 xs:text-right sm:text-left'>
                                <a href={resume} download={'Carlos Borrega CV'}>
                                    Click here to download
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>SKILLS</h1>
                    <hr className="border-t-3 border-black-500 my-2" />
                    <div className=''>
                        <div className='grid grid-cols-2 my-10 gap-2'>
                            <h2 className='font-bold'>Visual Merchandising</h2>
                            <h2>Expert in window displays, seasonal concepts, and showroom design</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10 gap-2'>
                            <h2 className='font-bold'>Leadership</h2>
                            <h2>Skilled in team training, clear communication, and team collaboration</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10 gap-2'>
                            <h2 className='font-bold'>Creative Direction</h2>
                            <h2>Proficient in designing in-store experiences, product storytelling, and visual concepts</h2>
                        </div>

                        <div className='grid grid-cols-2 my-10 gap-2'>
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