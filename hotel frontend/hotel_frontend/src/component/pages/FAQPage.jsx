const FAQPage = () => {
  return (
    <div className="page-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        <div className="faq-item">
          <h3>What time is check-in and check-out?</h3>
          <p>Check-in is from 2:00 PM, and check-out is until 11:00 AM.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer airport transfers?</h3>
          <p>Yes, we provide airport transfer services at an additional cost. Contact our support team to arrange it.</p>
        </div>
        <div className="faq-item">
          <h3>Is breakfast included in the booking?</h3>
          <p>Yes, a continental breakfast is included with most room bookings.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;