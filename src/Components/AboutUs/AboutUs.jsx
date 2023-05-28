import React from 'react';
import './AboutUs.css';

const profiles = [
  {
    name: 'Fleece Marigold',
    role: 'Founder',
    bio: 'Which is worse, that everyone has his price, or that the price is always so low.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg',
    linkedinUrl: 'https://www.linkedin.com/profile-url-1',
    githubUrl: 'https://github.com/profile-url-1', // Add GitHub URL for each profile
  },
  {
    name: 'Norman Gordon',
    role: 'Web Designer',
    bio: "I'm killing time while I wait for life to shower me with meaning and happiness.",
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample83.jpg',
    linkedinUrl: 'https://www.linkedin.com/profile-url-2',
    githubUrl: 'https://github.com/profile-url-2', // Add GitHub URL for each profile
  },
  {
    name: 'Ruby Von Rails',
    role: 'Public Relations',
    bio: 'The only skills I have the patience to learn are those that have no real application in life.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg',
    linkedinUrl: 'https://www.linkedin.com/profile-url-3',
    githubUrl: 'https://github.com/profile-url-3', // Add GitHub URL for each profile
  },
  {
    name: 'Ruby Von Rails',
    role: 'Public Relations',
    bio: 'The only skills I have the patience to learn are those that have no real application in life.',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg',
    linkedinUrl: 'https://www.linkedin.com/profile-url-4',
    githubUrl: 'https://github.com/profile-url-4', // Add GitHub URL for each profile
  }
];

const ProfileCard = ({ name, role, bio, image, linkedinUrl, githubUrl }) => (
  <figure className="snip1515">
    <div className="profile-image">
      <img src={image} alt={name} />
    </div>
    <figcaption>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{bio}</p>
      <div className="icons">
        <a href={linkedinUrl}><i className="ion-social-linkedin"></i></a>
        <a href={githubUrl}><i className="ion-social-github"></i></a>
      </div>
    </figcaption>
  </figure>
);

const AboutUs = () => (
  <div>
    <div className="content-container">
      <div className="header-image">
        <img src="http://www.avmizo.in/images/about.png" alt="Header" />
      </div>
      <div className="content">
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          dolor vitae risus consectetur vestibulum. Nulla non eros elementum,
          volutpat metus quis, iaculis ipsum.
        </p>
        <h2>Our Ambition</h2>
        <p>
          Sed aliquam tincidunt tortor non tincidunt. Integer in faucibus erat.
          Donec facilisis, odio at feugiat tristique, mauris est dictum sem, id
          vulputate lectus est a odio.
        </p>
      </div>
    </div>
    <div className="card-container">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  </div>
);

export default AboutUs;
