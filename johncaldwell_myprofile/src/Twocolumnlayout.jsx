import React, { useState } from 'react';

const links = [
  { id: 1, name: 'Google', url: 'https://www.google.com', content: 'Google Search Engine' },
  { id: 2, name: 'Facebook', url: 'https://www.facebook.com', content: 'Facebook Social Media' },
  { id: 3, name: 'Twitter', url: 'https://www.twitter.com', content: 'Twitter Social Media' },
];

function TwoColumnLayout() {
  const [selectedContent, setSelectedContent] = useState('Click a link to see the content');

  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='container'>
      <div>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.url} onClick={(e) => { e.preventDefault(); handleLinkClick(link.content); }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Content</h2>
        <p>{selectedContent}</p>
      </div>
    </div>
  );
}

export default TwoColumnLayout
