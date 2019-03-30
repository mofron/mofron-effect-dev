/**
 * @file mofron-effect-dev/index.js
 * @author simpart
 */
const mf = require('mofron');

mf.effect.xxx = class extends mf.Effect {
    
    constructor (prm) {
        try {
            super();
            this.name('xxx');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.xxx;
