import React, { useState } from 'react';
import './Card.css';
import { gift } from '../../assets/assets';
import '@fortawesome/fontawesome-free/css/all.min.css';

const pages = gift;

const Card = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePage = (direction) => {
    const newIndex = (pageIndex + direction + pages.length) % pages.length;
    setPageIndex(newIndex);

    // Open the card if it's not the cover (id = 0)
    if (newIndex === 0) {
      setIsOpen(false); // Close the card when returning to the cover
    } else {
      setIsOpen(true); // Open the card for other pages
    }
  };

  return (
    <div className="page-container">
      <div className={`Card-Container ${isOpen ? 'open' : ''}`}>
        {/* Cover (left side) */}
        <div className="card cover">
            <h2>{pages[pageIndex].cover}</h2>
          <img src={pages[0].img} alt={pages[0].title} />
          {!isOpen && (
            <button className="arrows arrows_right" onClick={() => handlePage(1)}>
              <i className="fas fa-arrow-right"></i>
            </button>
          )}
        </div>

        {/* Pages (right side) */}
        <div className="card pages">
          <div className="content">
            {/* Left side: Image */}
            <div className="left-content">
              {isOpen && pageIndex > 0 && (
                <>
                  <img src={pages[pageIndex].img} alt={pages[pageIndex].title} />
                  <div className="hearts">
                    <div className="heart a1"></div>
                    <div className="heart a2"></div>
                    <div className="heart a3"></div>
                  </div>
                  <div className="sparkles">
                    <div className="sparkle s1"></div>
                    <div className="sparkle s2"></div>
                    <div className="sparkle s3"></div>
                  </div>
                </>
              )}
            </div>

            {/* Vertical border */}
            <div className="border"></div>

            {/* Right side: Text */}
            <div className="right-content">
              {isOpen && pageIndex > 0 && (
                <>
                  <h2>{pages[pageIndex].title}</h2>
                  <p>{pages[pageIndex].message1}</p>
                  <p>{pages[pageIndex].message2}</p>
                  <p>{pages[pageIndex].message3}</p>
                </>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          {isOpen && (
            <>
              <button className="arrows arrows_left" onClick={() => handlePage(-1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="arrows arrows_right" onClick={() => handlePage(1)}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;