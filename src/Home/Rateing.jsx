// // import React from "react";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // const reviews = [
// //   {
// //     id: 1,
// //     name: "abcd",
// //     rating: 5,
// //     date: "30/03/2025",
// //     property: "2 BD Tiara Palm Views, Beach & Pool, Amazing views",
// //     comment: "There are no comments available for this review",
// //     platform: "Booking",
// //     platformIcon: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Booking.com_Logo.svg",
// //   },
// //   {
// //     id: 2,
// //     name: "Jacobus",
// //     rating: 5,
// //     date: "24/03/2025",
// //     property: "Luxury Holiday Apartment Palm Jumeirah Al Hamri",
// //     comment:
// //       "Clean, well-appointed apartment in a great location. The host was always responsible, friendly, and helpful. When we extended our stay beyond the original booking, they even offered a free cleaning session. I can highly recommend this host and would not hesitate to book with them again.",
// //     platform: "Airbnb",
// //     platformIcon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Airbnb_Logo_Bélo.svg",
// //   },
// // ];

// // const ReviewCard = ({ review }) => {
// //   return (
// //     <div className="card mb-3 p-3 border-0 shadow-sm rounded-3">
// //       <div className="d-flex align-items-center">
// //         <div className="me-3">
// //           <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "20px" }}>
// //             {review.name.charAt(0)}
// //           </div>
// //         </div>
// //         <div>
// //           <h5 className="mb-1">{review.name}</h5>
// //           <div className="text-warning mb-1">{'★'.repeat(review.rating)}</div>
// //           <small className="text-muted">{review.date}</small>
// //         </div>
// //       </div>
// //       <div className="mt-2">
// //         <a href="#" className="text-primary text-decoration-none fw-bold">
// //           {review.property}
// //         </a>
// //         <p className="mb-1 text-muted">{review.comment}</p>
// //         <div className="text-end">
// //           <span className="text-muted me-2">Posted on</span>
// //           <img src={review.platformIcon} alt={review.platform} style={{ height: "20px" }} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const ReviewList = () => {
// //   return (
// //     <div className="p-3 mt-4 mb-4">
// //       <h2 className="mb-4">Dubai Vacation Homes</h2>
// //       <div className="row">
// //         {reviews.map((review) => (
// //           <div key={review.id} className="col-12">
// //             <ReviewCard review={review} />
// //           </div>

// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewList;
// import React from "react";
// import AvatarImg from "../assets/images/avatar/01.jpg";

// const Reviews = () => {
//   return (
//     <div className="rd-reviews container">
//       <h4>Reviews</h4>
//       {[1, 2].map((index) => (
//         <div className="review-item" key={index}>
//           <div className="ri-pic">
//             {/* <img src={`img/room/avatar/avatar-${index}.jpg`} alt="Avatar" /> */}
//             <img className="avatar-img " src={AvatarImg} alt="avatar" />
//           </div>
//           <div className="ri-text">
//             <span>27 Aug 2019</span>
//             <div className="rating">            
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star"></i>
//                 <i className="fa fa-star-half-alt"></i>
             
//             </div>
//             <h5>Brandon Kelley</h5>
//             <p>
//               Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet,
//               consectetur, adipisci velit, sed quia non numquam eius modi
//               tempora. incidunt ut labore et dolore magnam.
//             </p>
//           </div>
//         </div>
//       ))}
//       <div className="review-add">
//         <h4>Add Review</h4>
//         <form action="#" className="ra-form">
//           <div className="row">
//             <div className="col-lg-6">
//               <input type="text" placeholder="Name*" />
//             </div>
//             <div className="col-lg-6">
//               <input type="text" placeholder="Email*" />
//             </div>  
//             <div className="col-lg-12">
//               <div>
//                 <h5>Your Rating:</h5>
//                 <div className="rating">
//                   <i className="icon_star"></i>
//                   <i className="icon_star"></i>
//                   <i className="icon_star"></i>
//                   <i className="icon_star"></i>
//                   <i className="icon_star-half_alt"></i>
//                 </div>
//               </div>
//               <textarea placeholder="Your Review"></textarea>
//               <button type="submit">Submit Now</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
import React, { useState, useEffect } from "react";
import AvatarImg from "../assets/images/avatar/01.jpg";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

 
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && reviewText) {
      const newReview = {
        id: Date.now(),
        name,
        email,
        rating,
        reviewText,
        date: new Date().toLocaleDateString(),
      };

      // Add the new review to the existing reviews
      const updatedReviews = [...reviews, newReview];

      // Save reviews to localStorage
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      // Update the state
      setReviews(updatedReviews);
      setName("");
      setEmail("");
      setRating(0);
      setReviewText("");
    }
  };

  return (
    <div className="rd-reviews container">
      <h4>Reviews</h4>
      {reviews.map((review) => (
        <div className="review-item" key={review.id}>
          <div className="ri-pic">
            <img className="avatar-img " src={AvatarImg} alt="avatar" />
          </div>
          <div className="ri-text">
            <span>{review.date}</span>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fa fa-star${index < review.rating ? "" : "-half-alt"}`}
                ></i>
              ))}
            </div>
            <h5>{review.name}</h5>
            <p>{review.reviewText}</p>
          </div>
        </div>
      ))}

      <div className="review-add">
        <h4>Add Review</h4>
        <form onSubmit={handleSubmit} className="ra-form">
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-lg-12">
              <div>
                <h5>Your Rating:</h5>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`icon_star${index < rating ? "" : "-half_alt"}`}
                      onClick={() => handleRatingChange(index + 1)}
                    ></i>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
              <button type="submit">Submit Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
