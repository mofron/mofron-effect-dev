/**
 * @file mofron-effect-dev/index.js
 * @brief effect module template for developper
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name("");      // please set effect modume name
            this.shortForm(""); // please set short form parameter
            
            /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
            /* effect contents */
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
