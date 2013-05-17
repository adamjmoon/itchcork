define("util", [], function () {
    'use strict';
    return function util() {
    	this.$ = function(id) {
            return typeof id == 'string' ? document.getElementById(id) : id;
        }

        this createElement = function(tagName) {
            return document.createElement(tagName);
        }

        this.setHTML = function(element, html) {
            if ((element = $(element))) {
                element.innerHTML = html == null ? '' : html;
            }
            return element;
        }
    };
});