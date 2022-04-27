const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let cats = 0;
  if(arguments.length) {
    for(let i = 0; i < arguments[0].length; i++) {
      if(arguments[0][i].includes('^^')){
        for(let j = 0; j < arguments[0][i].length; j++){
          if(typeof arguments[0][i][j] == 'string' && arguments[0][i][j].includes('^^')){
            cats++
          }
        }
      }
    }
  }
  return cats
}

module.exports = {
  countCats
};
