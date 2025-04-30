import React from "react";
import Services from "../Home/Services";
import { Link } from "react-router-dom";
import room1 from "../assets/images/room/room-b1.jpg";
import room2 from "../assets/images/room/room-b2.jpg";
import room3 from "../assets/images/room/room-b3.jpg";
import room4 from "../assets/images/room/room-b4.jpg";
import Herosectionservice from "../Home/Herosectionservice";

const Ourservices = () => {
  const rooms = [
    {
      image: room1,
      title: "Double Room",
      price: "199",
      details: {
        size: "30 ft",
        capacity: "Max person 5",
        bed: "King Beds",
        services: "Wifi, Television, Bathroom,...",
      },
    },
    {
      image: room2,
      title: "Premium King Room",
      price: "159",
      details: {
        size: "30 ft",
        capacity: "Max person 5",
        bed: "King Beds",
        services: "Wifi, Television, Bathroom,...",
      },
    },
    {
      image: room3,
      title: "Deluxe Room",
      price: "198",
      details: {
        size: "30 ft",
        capacity: "Max person 5",
        bed: "King Beds",
        services: "Wifi, Television, Bathroom,...",
      },
    },
    {
      image: room4,
      title: "Family Room",
      price: "299",
      details: {
        size: "30 ft",
        capacity: "Max person 5",
        bed: "King Beds",
        services: "Wifi, Television, Bathroom,...",
      },
    },
  ];

  return (
    <>
      <Herosectionservice />
      <Services />
      <section className="hp-room-section">
        <div className="container-fluid">
          <div className="hp-room-items">
            <div className="row">
              {rooms.map((room, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div
                    className="hp-room-item"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    <div className="hr-text">
                      <h3>{room.title}</h3>
                      <h2>
                        ${room.price}
                        <span>/Pernight</span>
                      </h2>
                      <table>
                        <tbody>
                          <tr>
                            <td className="r-o">Size:</td>
                            <td>{room.details.size}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Capacity:</td>
                            <td>{room.details.capacity}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Bed:</td>
                            <td>{room.details.bed}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Services:</td>
                            <td>{room.details.services}</td>
                          </tr>
                        </tbody>
                      </table>
                      <Link to="#" className="primary-btn MoreDetails">
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourservices;
