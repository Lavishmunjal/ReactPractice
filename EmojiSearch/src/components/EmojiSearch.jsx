import React from 'react';

const EmojiSearch = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for an emoji..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default EmojiSearch;