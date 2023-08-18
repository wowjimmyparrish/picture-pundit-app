import React, { useContext } from "react";
import { UserContext } from "../context/User";
function ReviewCard({ review }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      
        <ul>
          {review} - {user.username}
        </ul>
      
    </div>
  );
}

export default ReviewCard;