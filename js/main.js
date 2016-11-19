(function() {
    'use strict';

    if (typeof String.prototype.repeat === 'function') {
        console.log('String.prototype.repeat supported!');

        String.prototype.repeatt = function(counter) {

            if (typeof counter !== 'number') {
                return 'Invalid function arguments';
            }

            if (counter < 0) {
                return 'Invalid counter value';
            }

            var str = '' + this;
            var repeatStr = '';

            if (str.length == 0) {
                return 0
            }

            counter = Math.floor(counter);

            for (var i = 0; i < counter; i++) {
                repeatStr += this;
            }
            return repeatStr;

        }
    }

})();
