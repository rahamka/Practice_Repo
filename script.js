/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBe(val) {
    let object = val === val ? "ture" : "false";
    console.log(object);
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
