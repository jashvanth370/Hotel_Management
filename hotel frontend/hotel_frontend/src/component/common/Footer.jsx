import { useState } from "react";
import ApiService from "../../service/ApiService";


const FooterComponent = () => {

    const [email, setEmail] = useState('');
    const [message , setMessage ] = useState('');

    const handleSubscribe = async (e) =>{
        e.preventDefault();
        try {
            const response = await ApiService.subscribeNewsletter({ email });
            setMessage(response);
            setEmail('');
        } catch (error) {
            console.log(email)
            console.error("Subscription failed:", error);
            setMessage("Failed to subscribe. Please try again.");
        }
    };

    return (
        <footer className="big-footer">
            <div className="footer-top">
                <div className="footer-column">
                    <h3>About Our Hotel</h3>
                    <p>
                        Experience luxury and comfort at our modern hotel. Whether you're on a business
                        trip or vacation, we offer premium rooms, fine dining, and personalized service.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/rooms">Rooms & Suites</a></li>
                        <li><a href="/find-bookings">Manage Booking</a></li>
                        <li><a href="/events">Events & Conferences</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p><strong>Email:</strong> support@yourhotel.com</p>
                    <p><strong>Phone:</strong> +94 77 123 4567</p>
                    <p><strong>Address:</strong> 123 Beach Road, Colombo, Sri Lanka</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Subscribe to Newsletter</h3>
                    <p>Get the latest updates and hotel deals right in your inbox.</p>
                    <form onSubmit={handleSubscribe} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aurora Luxe. All rights reserved. Designed with ❤️ in Sri Lanka.</p>
            </div>
        </footer>

    );
};

export default FooterComponent;