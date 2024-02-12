const users = [
    'spaceExplorer1',
    'quantumLeap',
    'digitalNomad',
    'greenThumb',
    'mysteryHunter',
    'starGazer',
    'oceanDiver',
    'peakClimber',
    'sunSeeker',
    'dreamWeaver',
    'nightOwl'
];

const thoughtText = [
    'Exploring the unknown spaces',
    'Quantum computing is fascinating',
    'Remote work from a beach sounds perfect',
    'Gardening is my form of meditation',
    'Solving mysteries one book at a time',
    'Stargazing into the infinite',
    'The ocean is full of untold stories',
    'Climbing to new heights, both literal and metaphorical',
    'Chasing the sun across continents',
    'Weaving dreams into reality',
    'The night is full of wonders and secrets'
];

const reactionBody = [
    'Intriguing perspective!',
    'That sounds amazing',
    'Count me in!',
    '💚',
    'Mystery solved!',
    '🌌',
    'Dive deeper!',
    'Reach for the stars',
    'Sunshine on my mind',
    'Dream big',
    'Night owls unite!',
    '🚀',
    '🌊',
    '🌄',
    '🌞',
    '💤',
    '🔍',
    '📚',
    '🌳',
    '🌻'
];

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomUser = () => `${getRandomArrItem(users)}`;

  const getFriendsList = (int) =>{
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            friends: getRandomArrItem(users)
        });
    }
    return results;
  };

  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtText),
            reactions: getRandomArrItem(reactionBody),
        });
    }
    return results;
  };
  
  module.exports = { getRandomUser, getRandomThought, getFriendsList };