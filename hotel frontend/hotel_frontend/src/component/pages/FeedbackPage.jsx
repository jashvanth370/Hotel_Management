import React, { useState } from "react";
import ApiService from "../../service/ApiService";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.submitFeedback({ message: feedback });
      setMessage("Feedback submitted successfully!");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Something went wrong.");
    }
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
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FeedbackPage;
