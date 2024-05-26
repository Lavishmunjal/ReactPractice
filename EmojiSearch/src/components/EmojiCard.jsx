import React from 'react';

const EmojiCard = ({ emoji }) => {
  return (
    <div className="emoji-card">
      <span>{emoji.emoji}</span>
      <span>{emoji.description}</span>
      <div className="tags">
        {emoji.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default EmojiCard;