import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

import ugg1 from '../images/ugg/ugg1.jpg';
import ugg3 from '../images/ugg/ugg3.jpg';
import ugg4 from '../images/ugg/ugg4.jpg';

import club1 from '../images/club/club1.jpg';
import club2 from '../images/club/club2.jpg';
import club4 from '../images/club/club4.jpg';

import weekday1 from '../images/weekday/weekday1.jpg';
import weekday2 from '../images/weekday/weekday2.jpg';
import weekday3 from '../images/weekday/weekday3.jpg';
import weekday4 from '../images/weekday/weekday4.jpg';

import stories1 from '../images/stories/stories1.jpg';
import stories2 from '../images/stories/stories2.jpg';
import stories3 from '../images/stories/stories3.jpg';
import stories4 from '../images/stories/stories4.jpg';

const Visual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const modalRef = useRef(null);

  const allImages = [
    ugg1, ugg3, ugg4,
    club1, club2, club4,
    weekday1, weekday2, weekday3, weekday4,
    stories1, stories2, stories3, stories4,
  ];

  // Open modal and set selected image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    setImages(allImages);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === 'ArrowLeft') {
          goToPrevious();
        } else if (event.key === 'ArrowRight') {
          goToNext();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, selectedImageIndex]);

  // Handle touch events for swipe gestures
  useEffect(() => {
    const handleTouchStart = (event) => {
      setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
      setTouchEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const deltaX = touchEndX - touchStartX;
        if (deltaX > 50) {
          goToPrevious();
        } else if (deltaX < -50) {
          goToNext();
        }
      }
      setTouchStartX(null);
      setTouchEndX(null);
    };

    const modalElement = modalRef.current;
    if (isModalOpen && modalElement) {
      modalElement.addEventListener('touchstart', handleTouchStart);
      modalElement.addEventListener('touchmove', handleTouchMove);
      modalElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('touchstart', handleTouchStart);
        modalElement.removeEventListener('touchmove', handleTouchMove);
        modalElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isModalOpen]); // Only depend on isModalOpen

  // Handle click outside the image to close the modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='sm:m-20 xs:my-20 xs:mx-5'>
      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <div className='relative'>
            {/* Close button (×) */}
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-white text-4xl z-50'
            >
              &times;
            </button>
            <img
              src={images[selectedImageIndex]}
              alt='Selected'
              className='max-w-full max-h-screen'
            />
            <button
              onClick={goToPrevious}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl'
            >
              &#10094;
            </button>
            <button
              onClick={goToNext}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl'
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      {/* Your existing content */}
      <div className=''>
        <h1 className='sm:text-4xl xs:text-3xl font-bold pb-32'>VISUAL MERCHANDISING PROJECTS</h1>
      </div>

      <div id='ugg' className='mb-32 lg:px-20'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>UGG</h2>
        <h3 className='mb-10'>Showroom display at head office showcasing the new A/W 2025 collection.</h3>
        <div className='grid grid-cols-4 gap-10 justify-items-center mx-auto'>
          <img
            src={ugg4}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(ugg4))}
          />
          <img
            src={ugg3}
            className='rounded-md lg:col-span-2 xs:col-span-4 xs:h-auto sm:h-full cursor-pointer'
            onClick={() => openModal(allImages.indexOf(ugg3))}
          />
          <img
            src={ugg1}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(ugg1))}
          />
        </div>
      </div>

      <div id='club' className='mb-32 lg:px-20'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>Club Monaco</h2>
        <h3 className='mb-10'>Women's and men's collections showcased at the flagship store in Sloane Square.</h3>
        <div className='grid grid-cols-4 gap-10 justify-items-center mx-auto'>
          <img
            src={club4}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(club4))}
          />
          <img
            src={club1}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(club1))}
          />
          <img
            src={club2}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(club2))}
          />
        </div>
      </div>

      <div id='weekday' className='mb-32 lg:px-20'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>Weekday</h2>
        <h3 className='mb-10'>Window displays and store interiors at the Westfield Stratford store.</h3>
        <div className='grid grid-cols-4 gap-10 justify-items-center mx-auto'>
          <img
            src={weekday4}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(weekday4))}
          />
          <img
            src={weekday2}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(weekday2))}
          />
          <img
            src={weekday3}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(weekday3))}
          />
          <img
            src={weekday1}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(weekday1))}
          />
        </div>
      </div>

      <div id='stories' className='mb-32 lg:px-20'>
        <h2 className='xs:text-2xl sm:text-3xl font-bold mb-2'>& Other Stories</h2>
        <h3 className='mb-10'>Window displays and store interiors at the Regent Street flagship.</h3>
        <div className='grid grid-cols-4 gap-10 justify-items-center mx-auto'>
          <img
            src={stories3}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(stories3))}
          />
          <img
            src={stories2}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(stories2))}
          />
          <img
            src={stories4}
            className='rounded-md lg:col-span-2 xs:col-span-4 cursor-pointer'
            onClick={() => openModal(allImages.indexOf(stories4))}
          />
          <img
            src={stories1}
            className='rounded-md col-span-4 w-screen cursor-pointer'
            onClick={() => openModal(allImages.indexOf(stories1))}
          />
        </div>
      </div>
    </div>
  );
};

export default Visual;