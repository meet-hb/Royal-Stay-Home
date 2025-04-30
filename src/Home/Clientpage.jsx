import React from 'react';

// Import client images
import client1 from '../assets/images/client/01.svg';
import client2 from '../assets/images/client/02.svg';
import client3 from '../assets/images/client/03.svg';
import client4 from '../assets/images/client/04.svg';
import client5 from '../assets/images/client/05.svg';
import client6 from '../assets/images/client/06.svg';

const clients = [
  { img: client1, alt: 'Client 1' },
  { img: client2, alt: 'Client 2' },
  { img: client3, alt: 'Client 3' },
  { img: client4, alt: 'Client 4' },
  { img: client5, alt: 'Client 5' },
  { img: client6, alt: 'Client 6' }
];

export const Clientpage = () => {
  return (
    <section className="py-0 py-md-5">
      <div className="container">
        <div className="row g-4 g-lg-7 justify-content-center align-items-center">
          {clients.map((client, index) => (
            <div key={index} className="col-5 col-sm-3 col-xl-2">
              <img 
                src={client.img} 
                className="grayscale" 
                alt={client.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

