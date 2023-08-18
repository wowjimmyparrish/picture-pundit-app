import React, { useState, useContext } from "react";
import { UserContext } from "../context/User";
function AddReview({ addReview, movie }) {
  const { user } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    review: "",
    movie_id: movie.id,
    user_id: user.id,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", requestOptions).then((r) => {
      if (r.ok) {
        r.json().then((review) => {
          addReview(review);
          setData({ review: "", movie_id: movie.id, user_id: user.id });
        });
      } else {
        r.json().then((errorData) => setErrors(errorData.errors.user_id));
        setData({ review: "", movie_id: movie.id, user_id: user.id });
        //this clears the input after errors
      }
    });
  }

  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          placeholder="review"
          value={data.review}
          onChange={(e) =>
            setData({
              review: e.target.value,
              movie_id: movie.id,
              user_id: user.id,
            })
          }
        />
        <button
          className="ms-2"
          type="submit"
          disabled={!data.review}
          onClick={handleSubmit}
        >
          Submit
        </button>
        {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
      </form>
    </div>
  );
}

export default AddReview;