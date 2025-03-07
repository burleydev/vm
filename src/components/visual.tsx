import '../index.css';

// Import images
import ugg1 from '../images/ugg/ugg1.jpg';
import ugg2 from '../images/ugg/ugg2.jpg';
import ugg3 from '../images/ugg/ugg3.jpg';
import ugg4 from '../images/ugg/ugg4.jpg';

import club1 from '../images/club/club1.jpg';
import club2 from '../images/club/club2.jpg';
import club3 from '../images/club/club3.jpg';
import club4 from '../images/club/club4.jpg';

import weekday1 from '../images/weekday/weekday1.jpg';
import weekday2 from '../images/weekday/weekday2.jpg';
import weekday3 from '../images/weekday/weekday3.jpg';
import weekday4 from '../images/weekday/weekday4.jpg';

import stories1 from '../images/stories/stories1.jpg';
import stories2 from '../images/stories/stories2.jpg';
import stories3 from '../images/stories/stories3.jpg';
import stories4 from '../images/stories/stories4.jpg';

// Group projects
const projects = [
  {
    id: 'ugg',
    title: 'UGG',
    description: 'Showroom display at head office showcasing the new A/W 2025 collection.',
    images: [
      { src: ugg4, span: 'col-span-4 w-screen' },
      { src: ugg3, span: 'col-span-2 h-full' },
      { src: ugg1, span: 'col-span-2' },
    ],
  },
  {
    id: 'club',
    title: 'Club Monaco',
    description: "Women's and men's collections showcased at the flagship store in Sloane Square.",
    images: [
      { src: club4, span: 'col-span-4 w-screen' },
      { src: club1, span: 'col-span-2 h-full' },
      { src: club2, span: 'col-span-2' },
    ],
  },
  {
    id: 'weekday',
    title: 'Weekday',
    description: 'Window displays and store interiors at the Westfield Stratford store.',
    images: [
      { src: weekday4, span: 'col-span-4 w-screen' },
      { src: weekday2, span: 'col-span-2 h-full' },
      { src: weekday3, span: 'col-span-2' },
      { src: weekday1, span: 'col-span-4 w-screen' },
    ],
  },
  {
    id: 'stories',
    title: '& Other Stories',
    description: 'Window displays and store interiors at the Regent Street flagship.',
    images: [
      { src: stories3, span: 'col-span-4 w-screen' },
      { src: stories2, span: 'col-span-2 h-full' },
      { src: stories4, span: 'col-span-2' },
      { src: stories1, span: 'col-span-4 w-screen' },
    ],
  },
];

const Visual = () => {
  return (
    <div className="m-20">
      <h1 className="text-4xl font-bold pb-32">VISUAL MERCHANDISING PROJECTS</h1>

      {projects.map(({ id, title, description, images }) => (
        <div key={id} id={id} className="mb-32">
          <h2 className="font-bold text-3xl mb-2">{title}</h2>
          <h3 className="mb-10 text-lg">{description}</h3>
          <div className="grid grid-cols-4 gap-10">
            {images.map((image, index) => (
              <img key={index} src={image.src} className={`rounded-md ${image.span}`} alt={title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Visual;
