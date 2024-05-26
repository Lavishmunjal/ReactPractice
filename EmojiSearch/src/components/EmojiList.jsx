// src/components/EmojiList.js
import React from 'react';
import EmojiCard from './EmojiCard';

const EmojiList = ({ emojis }) => {
  return (
    <div className="emoji-list">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.description} emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojiList;
