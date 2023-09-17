import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Shaping the Future of Container Orchestration',
    text: 'Kubernetes is revolutionizing container orchestration, streamlining application deployment and scaling. Its adaptability across diverse infrastructures and support for cloud-native practices make it a cornerstone of modern application development.',
  },
  {
    title: 'DevOps Impact',
    text: 'Kubernetes integrates DevOps seamlessly, fostering collaboration and accelerating development. Its role in optimizing resource utilization and ensuring high availability aligns with the demands of the evolving digital landscape.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
