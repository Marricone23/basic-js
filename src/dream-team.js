const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members || typeof members !== 'object' || !members.length) return false;
  let names = members.map(name => {
    if(typeof name === 'string') {
      return name.trim().substring(0, 1).toUpperCase();
    }
  });
  return names.sort().join('').trim();
}

module.exports = {
  createDreamTeam
};
