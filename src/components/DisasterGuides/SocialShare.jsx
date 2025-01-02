import React from 'react';
import PropTypes from 'prop-types';

const SocialShare = ({ url, title }) => {
  const shareLinks = [
    {
      platform: 'Facebook',
      icon: 'fab fa-facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      platform: 'Twitter',
      icon: 'fab fa-twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    },
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    {
      platform: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: `whatsapp://send?text=${encodeURIComponent(`${title} ${url}`)}`
    }
  ];

  return (
    <div className="mt-8 text-center">
      <h3 className="text-xl font-bold text-primary mb-4">Share these guides:</h3>
      <div className="flex justify-center space-x-4">
        {shareLinks.map(({ platform, icon, url }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${platform}`}
            className="text-2xl text-primary hover:text-secondary transition-colors"
          >
            <i className={icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SocialShare;