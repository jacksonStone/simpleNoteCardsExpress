const React = require('react');
const { navigatgeToDeckListPage } = require('logic/decks');
module.exports = ()=> {
  return (
    <button onClick={navigatgeToDeckListPage}>Decks</button>
  )
};