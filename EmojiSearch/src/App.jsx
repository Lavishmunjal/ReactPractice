import React, { useState } from 'react';
import EmojiSearch from './components/EmojiSearch';
import EmojiList from './components/EmojiList';
import emojiData from './emoji.json';

const App = () => {
  const [search, setSearch] = useState('');

  const filteredEmojis = emojiData.filter((emoji) => 
    emoji.description.toLowerCase().includes(search.toLowerCase()) ||
    emoji.aliases.some(alias => alias.toLowerCase().includes(search.toLowerCase())) ||
    emoji.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );


  return (
    <div>
      <h1>Emoji Search</h1>
      <EmojiSearch onSearch={setSearch} />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
};

export default App;
