import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="tagline">Passionate about travel, dedicated to sharing experiences</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travel" />
        </div>

        <div className="about-text">
          <h2>My Story</h2>
          <p>Hello! I'm Deepanshu Sharma, the creator of this Travel Blog. What started as a team project is now a solo journey of exploration and storytelling. My love for discovering new places and cultures across India fuels this blog every day.</p>

          <p>I aim to inspire you to explore India — from the snow-capped peaks of Kashmir to the colorful ghats of Varanasi, the adventurous spirit of Manali, and the divine energy of Vrindavan.</p>

          <h2>My Mission</h2>
          <p>I strive to provide honest travel insights, personal stories, and practical tips to help you make the most of your adventures. I believe that travel is more than sightseeing—it's about connecting with people, places, and moments.</p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Me</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Deepanshu Sharma" />
            <h3>Deepanshu Sharma</h3>
            <p className="role">Founder & Travel Enthusiast</p>
            <p>I manage the blog, write content, explore destinations, and bring all the travel magic to you — solo and passionate.</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get In Touch</h2>
        <p>Have questions or suggestions? I'd love to hear from you!</p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>info@travelblog.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 9876543210</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
