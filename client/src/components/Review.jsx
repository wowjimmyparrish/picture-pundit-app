import React from "react";
import ReviewCard from "./ReviewCard";
function Review({ reviews }) {
  const reviewArray = reviews.map((review) => (
    <ReviewCard key={review.id} review={review.review} />
  ));
  return (
    <div
      className="mt-4 d-flex justify-content-center"
      style={{ maxWidth: "600px" }}
    >
      <h2>Reviews:</h2>
      <div
        className=" overflow-auto"
        style={{ maxHeight: "300px", maxWidth: "500px" }}
      >
        {reviewArray}
      </div>
    </div>
  );
}

export default Review;