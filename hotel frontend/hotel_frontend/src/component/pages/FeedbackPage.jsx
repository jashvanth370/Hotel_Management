import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="page-container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPage;