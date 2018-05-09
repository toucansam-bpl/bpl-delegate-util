/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = exports = window.fetch;\nexports.Headers = window.Headers;\nexports.Request = window.Request;\nexports.Response = window.Response;\n\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/decode.js?");

/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return map(objectKeys(obj), function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (isArray(obj[k])) {\n        return map(obj[k], function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\nvar isArray = Array.isArray || function (xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nfunction map (xs, f) {\n  if (xs.map) return xs.map(f);\n  var res = [];\n  for (var i = 0; i < xs.length; i++) {\n    res.push(f(xs[i], i));\n  }\n  return res;\n}\n\nvar objectKeys = Object.keys || function (obj) {\n  var res = [];\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);\n  }\n  return res;\n};\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/encode.js?");

/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.decode = exports.parse = __webpack_require__(/*! ./decode */ \"./node_modules/querystring-es3/decode.js\");\nexports.encode = exports.stringify = __webpack_require__(/*! ./encode */ \"./node_modules/querystring-es3/encode.js\");\n\n\n//# sourceURL=webpack:///./node_modules/querystring-es3/index.js?");

/***/ }),

/***/ "./node_modules/wolfy87-eventemitter/EventEmitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/wolfy87-eventemitter/EventEmitter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * EventEmitter v5.2.4 - git.io/ee\n * Unlicense - http://unlicense.org/\n * Oliver Caldwell - http://oli.me.uk/\n * @preserve\n */\n\n;(function (exports) {\n    'use strict';\n\n    /**\n     * Class for managing events.\n     * Can be extended to provide event functionality in other classes.\n     *\n     * @class EventEmitter Manages event registering and emitting.\n     */\n    function EventEmitter() {}\n\n    // Shortcuts to improve speed and size\n    var proto = EventEmitter.prototype;\n    var originalGlobalValue = exports.EventEmitter;\n\n    /**\n     * Finds the index of the listener for the event in its storage array.\n     *\n     * @param {Function[]} listeners Array of listeners to search through.\n     * @param {Function} listener Method to look for.\n     * @return {Number} Index of the specified listener, -1 if not found\n     * @api private\n     */\n    function indexOfListener(listeners, listener) {\n        var i = listeners.length;\n        while (i--) {\n            if (listeners[i].listener === listener) {\n                return i;\n            }\n        }\n\n        return -1;\n    }\n\n    /**\n     * Alias a method while keeping the context correct, to allow for overwriting of target method.\n     *\n     * @param {String} name The name of the target method.\n     * @return {Function} The aliased method\n     * @api private\n     */\n    function alias(name) {\n        return function aliasClosure() {\n            return this[name].apply(this, arguments);\n        };\n    }\n\n    /**\n     * Returns the listener array for the specified event.\n     * Will initialise the event object and listener arrays if required.\n     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.\n     * Each property in the object response is an array of listener functions.\n     *\n     * @param {String|RegExp} evt Name of the event to return the listeners from.\n     * @return {Function[]|Object} All listener functions for the event.\n     */\n    proto.getListeners = function getListeners(evt) {\n        var events = this._getEvents();\n        var response;\n        var key;\n\n        // Return a concatenated array of all matching events if\n        // the selector is a regular expression.\n        if (evt instanceof RegExp) {\n            response = {};\n            for (key in events) {\n                if (events.hasOwnProperty(key) && evt.test(key)) {\n                    response[key] = events[key];\n                }\n            }\n        }\n        else {\n            response = events[evt] || (events[evt] = []);\n        }\n\n        return response;\n    };\n\n    /**\n     * Takes a list of listener objects and flattens it into a list of listener functions.\n     *\n     * @param {Object[]} listeners Raw listener objects.\n     * @return {Function[]} Just the listener functions.\n     */\n    proto.flattenListeners = function flattenListeners(listeners) {\n        var flatListeners = [];\n        var i;\n\n        for (i = 0; i < listeners.length; i += 1) {\n            flatListeners.push(listeners[i].listener);\n        }\n\n        return flatListeners;\n    };\n\n    /**\n     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.\n     *\n     * @param {String|RegExp} evt Name of the event to return the listeners from.\n     * @return {Object} All listener functions for an event in an object.\n     */\n    proto.getListenersAsObject = function getListenersAsObject(evt) {\n        var listeners = this.getListeners(evt);\n        var response;\n\n        if (listeners instanceof Array) {\n            response = {};\n            response[evt] = listeners;\n        }\n\n        return response || listeners;\n    };\n\n    function isValidListener (listener) {\n        if (typeof listener === 'function' || listener instanceof RegExp) {\n            return true\n        } else if (listener && typeof listener === 'object') {\n            return isValidListener(listener.listener)\n        } else {\n            return false\n        }\n    }\n\n    /**\n     * Adds a listener function to the specified event.\n     * The listener will not be added if it is a duplicate.\n     * If the listener returns true then it will be removed after it is called.\n     * If you pass a regular expression as the event name then the listener will be added to all events that match it.\n     *\n     * @param {String|RegExp} evt Name of the event to attach the listener to.\n     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.addListener = function addListener(evt, listener) {\n        if (!isValidListener(listener)) {\n            throw new TypeError('listener must be a function');\n        }\n\n        var listeners = this.getListenersAsObject(evt);\n        var listenerIsWrapped = typeof listener === 'object';\n        var key;\n\n        for (key in listeners) {\n            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {\n                listeners[key].push(listenerIsWrapped ? listener : {\n                    listener: listener,\n                    once: false\n                });\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Alias of addListener\n     */\n    proto.on = alias('addListener');\n\n    /**\n     * Semi-alias of addListener. It will add a listener that will be\n     * automatically removed after its first execution.\n     *\n     * @param {String|RegExp} evt Name of the event to attach the listener to.\n     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.addOnceListener = function addOnceListener(evt, listener) {\n        return this.addListener(evt, {\n            listener: listener,\n            once: true\n        });\n    };\n\n    /**\n     * Alias of addOnceListener.\n     */\n    proto.once = alias('addOnceListener');\n\n    /**\n     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.\n     * You need to tell it what event names should be matched by a regex.\n     *\n     * @param {String} evt Name of the event to create.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.defineEvent = function defineEvent(evt) {\n        this.getListeners(evt);\n        return this;\n    };\n\n    /**\n     * Uses defineEvent to define multiple events.\n     *\n     * @param {String[]} evts An array of event names to define.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.defineEvents = function defineEvents(evts) {\n        for (var i = 0; i < evts.length; i += 1) {\n            this.defineEvent(evts[i]);\n        }\n        return this;\n    };\n\n    /**\n     * Removes a listener function from the specified event.\n     * When passed a regular expression as the event name, it will remove the listener from all events that match it.\n     *\n     * @param {String|RegExp} evt Name of the event to remove the listener from.\n     * @param {Function} listener Method to remove from the event.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.removeListener = function removeListener(evt, listener) {\n        var listeners = this.getListenersAsObject(evt);\n        var index;\n        var key;\n\n        for (key in listeners) {\n            if (listeners.hasOwnProperty(key)) {\n                index = indexOfListener(listeners[key], listener);\n\n                if (index !== -1) {\n                    listeners[key].splice(index, 1);\n                }\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Alias of removeListener\n     */\n    proto.off = alias('removeListener');\n\n    /**\n     * Adds listeners in bulk using the manipulateListeners method.\n     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.\n     * You can also pass it a regular expression to add the array of listeners to all events that match it.\n     * Yeah, this function does quite a bit. That's probably a bad thing.\n     *\n     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.\n     * @param {Function[]} [listeners] An optional array of listener functions to add.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.addListeners = function addListeners(evt, listeners) {\n        // Pass through to manipulateListeners\n        return this.manipulateListeners(false, evt, listeners);\n    };\n\n    /**\n     * Removes listeners in bulk using the manipulateListeners method.\n     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.\n     * You can also pass it an event name and an array of listeners to be removed.\n     * You can also pass it a regular expression to remove the listeners from all events that match it.\n     *\n     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.\n     * @param {Function[]} [listeners] An optional array of listener functions to remove.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.removeListeners = function removeListeners(evt, listeners) {\n        // Pass through to manipulateListeners\n        return this.manipulateListeners(true, evt, listeners);\n    };\n\n    /**\n     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.\n     * The first argument will determine if the listeners are removed (true) or added (false).\n     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.\n     * You can also pass it an event name and an array of listeners to be added/removed.\n     * You can also pass it a regular expression to manipulate the listeners of all events that match it.\n     *\n     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.\n     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.\n     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {\n        var i;\n        var value;\n        var single = remove ? this.removeListener : this.addListener;\n        var multiple = remove ? this.removeListeners : this.addListeners;\n\n        // If evt is an object then pass each of its properties to this method\n        if (typeof evt === 'object' && !(evt instanceof RegExp)) {\n            for (i in evt) {\n                if (evt.hasOwnProperty(i) && (value = evt[i])) {\n                    // Pass the single listener straight through to the singular method\n                    if (typeof value === 'function') {\n                        single.call(this, i, value);\n                    }\n                    else {\n                        // Otherwise pass back to the multiple function\n                        multiple.call(this, i, value);\n                    }\n                }\n            }\n        }\n        else {\n            // So evt must be a string\n            // And listeners must be an array of listeners\n            // Loop over it and pass each one to the multiple method\n            i = listeners.length;\n            while (i--) {\n                single.call(this, evt, listeners[i]);\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Removes all listeners from a specified event.\n     * If you do not specify an event then all listeners will be removed.\n     * That means every event will be emptied.\n     * You can also pass a regex to remove all events that match it.\n     *\n     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.removeEvent = function removeEvent(evt) {\n        var type = typeof evt;\n        var events = this._getEvents();\n        var key;\n\n        // Remove different things depending on the state of evt\n        if (type === 'string') {\n            // Remove all listeners for the specified event\n            delete events[evt];\n        }\n        else if (evt instanceof RegExp) {\n            // Remove all events matching the regex.\n            for (key in events) {\n                if (events.hasOwnProperty(key) && evt.test(key)) {\n                    delete events[key];\n                }\n            }\n        }\n        else {\n            // Remove all listeners in all events\n            delete this._events;\n        }\n\n        return this;\n    };\n\n    /**\n     * Alias of removeEvent.\n     *\n     * Added to mirror the node API.\n     */\n    proto.removeAllListeners = alias('removeEvent');\n\n    /**\n     * Emits an event of your choice.\n     * When emitted, every listener attached to that event will be executed.\n     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.\n     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.\n     * So they will not arrive within the array on the other side, they will be separate.\n     * You can also pass a regular expression to emit to all events that match it.\n     *\n     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.\n     * @param {Array} [args] Optional array of arguments to be passed to each listener.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.emitEvent = function emitEvent(evt, args) {\n        var listenersMap = this.getListenersAsObject(evt);\n        var listeners;\n        var listener;\n        var i;\n        var key;\n        var response;\n\n        for (key in listenersMap) {\n            if (listenersMap.hasOwnProperty(key)) {\n                listeners = listenersMap[key].slice(0);\n\n                for (i = 0; i < listeners.length; i++) {\n                    // If the listener returns true then it shall be removed from the event\n                    // The function is executed either with a basic call or an apply if there is an args array\n                    listener = listeners[i];\n\n                    if (listener.once === true) {\n                        this.removeListener(evt, listener.listener);\n                    }\n\n                    response = listener.listener.apply(this, args || []);\n\n                    if (response === this._getOnceReturnValue()) {\n                        this.removeListener(evt, listener.listener);\n                    }\n                }\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Alias of emitEvent\n     */\n    proto.trigger = alias('emitEvent');\n\n    /**\n     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.\n     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.\n     *\n     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.\n     * @param {...*} Optional additional arguments to be passed to each listener.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.emit = function emit(evt) {\n        var args = Array.prototype.slice.call(arguments, 1);\n        return this.emitEvent(evt, args);\n    };\n\n    /**\n     * Sets the current value to check against when executing listeners. If a\n     * listeners return value matches the one set here then it will be removed\n     * after execution. This value defaults to true.\n     *\n     * @param {*} value The new value to check for when executing listeners.\n     * @return {Object} Current instance of EventEmitter for chaining.\n     */\n    proto.setOnceReturnValue = function setOnceReturnValue(value) {\n        this._onceReturnValue = value;\n        return this;\n    };\n\n    /**\n     * Fetches the current value to check against when executing listeners. If\n     * the listeners return value matches this one then it should be removed\n     * automatically. It will return true by default.\n     *\n     * @return {*|Boolean} The current value to check for or the default, true.\n     * @api private\n     */\n    proto._getOnceReturnValue = function _getOnceReturnValue() {\n        if (this.hasOwnProperty('_onceReturnValue')) {\n            return this._onceReturnValue;\n        }\n        else {\n            return true;\n        }\n    };\n\n    /**\n     * Fetches the events object and creates one if required.\n     *\n     * @return {Object} The events storage object.\n     * @api private\n     */\n    proto._getEvents = function _getEvents() {\n        return this._events || (this._events = {});\n    };\n\n    /**\n     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.\n     *\n     * @return {Function} Non conflicting EventEmitter class.\n     */\n    EventEmitter.noConflict = function noConflict() {\n        exports.EventEmitter = originalGlobalValue;\n        return EventEmitter;\n    };\n\n    // Expose the class either via AMD, CommonJS or the global object\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n            return EventEmitter;\n        }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n    else {}\n}(this || {}));\n\n\n//# sourceURL=webpack:///./node_modules/wolfy87-eventemitter/EventEmitter.js?");

/***/ }),

/***/ "./src/BlockRewardCalculator.js":
/*!**************************************!*\
  !*** ./src/BlockRewardCalculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlockRewardCalculator; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toCryptoFormat */ \"./src/toCryptoFormat.js\");\n\n\n\n\n\nclass BlockRewardCalculator extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($blockReward) {\n    super()\n\n    this.$blockReward = $blockReward\n    this.rewards = []\n  }\n  \n  init() {\n    this.calculateTotal()\n  }\n\n\n  calculateTotal() {\n    var total = this.rewards.reduce((sum, reward) => {\n      return reward.addTo(sum)\n    }, Big(0))\n\n    this.$blockReward.text(Object(_toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(total))\n    this.emit('blockRewardTotal.changed', total)\n  }\n  \n  addReward(reward) {\n    this.rewards.push(reward)\n\n    reward.on('reward.updated', () => this.calculateTotal())\n  }\n}\n\n\n//# sourceURL=webpack:///./src/BlockRewardCalculator.js?");

/***/ }),

/***/ "./src/BplBalance.js":
/*!***************************!*\
  !*** ./src/BplBalance.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BplBalance; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass BplBalance extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n\n  constructor($bplBalance) {\n    super()\n\n    this.$bplBalance = $bplBalance\n\n    $bplBalance.change(() => this.emit('bplBalance.changed', Big($bplBalance.val())))\n  }\n  \n  setBalance(bplBalance) {\n    this.$bplBalance.val(bplBalance).change()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/BplBalance.js?");

/***/ }),

/***/ "./src/BplPrice.js":
/*!*************************!*\
  !*** ./src/BplPrice.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BplPrice; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass BplPrice extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($price, $resetPrice, priceStatus) {\n    super()\n\n    this.$price = $price\n    this.$resetPrice = $resetPrice\n    this.enteredPrice = null\n    this.prices = {\n      'BTC': 0,\n      'CNY': 0,\n      'EUR': 0,\n      'GBP': 0,\n      'USD': 0,\n    }\n    this.priceStatus = priceStatus\n    this.selectedCurrency = null\n\n    this.$price.change(() => {\n      this.enteredPrice = this.$price.val()\n      this.updateCurrencyPrice()\n    })\n  \n    this.$resetPrice.click(() => this.reset())\n  }\n\n  init() {\n    this.priceStatus.setLoading()\n    this.retrievePrices()\n    setInterval(() => this.retrievePrices, 60000) // one minute\n  }\n\n\n  isUserDefined() {\n    return this.enteredPrice !== null\n  }\n\n  reset() {\n    this.enteredPrice = null\n    this.updateCurrencyPrice()\n  }\n\n  retrievePrices() {\n    if (!this.isUserDefined()) {\n      this.priceStatus.setLoading()\n    }\n\n    $.get('https://min-api.cryptocompare.com/data/price?fsym=BPL&tsyms=BTC,USD,GBP,EUR,CNY', (res) => {\n      this.prices = res\n\n      if (!this.isUserDefined()) {\n        this.updateCurrencyPrice()\n      }\n    })\n  }\n\n  setCurrency(currency) {\n    this.selectedCurrency = currency\n    this.updateCurrencyPrice()\n  }\n\n  updateCurrencyPrice() {\n    let price = null\n    \n    if (this.isUserDefined()) {\n      price = this.enteredPrice\n      this.priceStatus.setUserDefined()\n    } else {\n      price = this.prices[this.selectedCurrency]\n      this.priceStatus.setLoadDate()\n    }\n\n    this.$price.val(price)\n\n    this.emit('price.changed', new Big(price))\n  }\n}\n\n\n//# sourceURL=webpack:///./src/BplPrice.js?");

/***/ }),

/***/ "./src/BplPriceStatus.js":
/*!*******************************!*\
  !*** ./src/BplPriceStatus.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BplPriceStatus; });\n\n\nclass BplPriceStatus {\n  constructor($priceLoading, $priceLoadDate, $userEnteredPrice) {\n    this.$priceLoadDate = $priceLoadDate\n    this.$priceLoading = $priceLoading\n    this.$userEnteredPrice = $userEnteredPrice\n  }\n\n  setLoadDate() {\n    this.$priceLoadDate.text(`As of ${new Date().toLocaleString()}`)\n    this.$priceLoadDate.show()\n\n    this.$priceLoading.hide()\n    this.$userEnteredPrice.hide()\n  }\n\n  setLoading() {\n    this.$priceLoading.show()\n\n    this.$priceLoadDate.hide()\n    this.$userEnteredPrice.hide()\n  }\n\n  setUserDefined() {\n    this.$userEnteredPrice.show()\n\n    this.$priceLoadDate.hide()\n    this.$priceLoading.hide()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/BplPriceStatus.js?");

/***/ }),

/***/ "./src/CurrencyPrice.js":
/*!******************************!*\
  !*** ./src/CurrencyPrice.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CurrencyPrice; });\n\nclass CurrencyPrice {\n  constructor(price, currency) {\n    this.price = price || Big(0)\n    this.currency = currency || 'USD'\n  }\n\n  changeCurrency(currency) {\n    return new CurrencyPrice(this.price, currency)\n  }\n\n  changePrice(price) {\n    return new CurrencyPrice(price, this.currency)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/CurrencyPrice.js?");

/***/ }),

/***/ "./src/CurrencySelection.js":
/*!**********************************!*\
  !*** ./src/CurrencySelection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CurrencySelection; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass CurrencySelection extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($selectedCurrency) {\n    super()\n\n    this.$selectedCurrency = $selectedCurrency\n\n    $selectedCurrency.change(() => this.emit('currency.changed', $selectedCurrency.val()))\n  }\n  \n  init() {\n    this.$selectedCurrency.val('USD').change()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/CurrencySelection.js?");

/***/ }),

/***/ "./src/MarketCap.js":
/*!**************************!*\
  !*** ./src/MarketCap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MarketCap; });\n/* harmony import */ var _CurrencyPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrencyPrice */ \"./src/CurrencyPrice.js\");\n/* harmony import */ var _fromApiString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromApiString */ \"./src/fromApiString.js\");\n/* harmony import */ var _toCurrencyFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toCurrencyFormat */ \"./src/toCurrencyFormat.js\");\n\n\n\n\n\nclass MarketCap {\n  constructor ($ele) {\n    this.$ele = $ele\n    this.supply = Big(0)\n    this.price = new _CurrencyPrice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n  }\n\n  init() {\n    this.refreshSupply()\n  }\n\n  refreshSupply() {\n    $.get('https://bit.blockpool.io/wallet/utilities/bpl/supply', (res) => {\n      this.supply = Big(res.supply)\n      \n      this.updateDisplay()\n    })\n  }\n\n  setCurrency(currency) {\n    this.price = this.price.changeCurrency(currency)\n    this.updateDisplay()\n  }\n\n  setPrice(price) {\n    this.price = this.price.changePrice(price)\n    this.updateDisplay()\n  }\n\n  updateDisplay() {\n    var mcap = this.supply.times(this.price.price)\n      , text = mcap.eq(0) ? '--' : Object(_toCurrencyFormat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mcap, this.price.currency)\n    this.$ele.text(text)\n  }\n}\n\n//# sourceURL=webpack:///./src/MarketCap.js?");

/***/ }),

/***/ "./src/PriceResult.js":
/*!****************************!*\
  !*** ./src/PriceResult.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PriceResult; });\n/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencies */ \"./src/currencies.js\");\n/* harmony import */ var _CurrencyPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyPrice */ \"./src/CurrencyPrice.js\");\n/* harmony import */ var _toCurrencyFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toCurrencyFormat */ \"./src/toCurrencyFormat.js\");\n\n\n\n\n\nconst interestPerBlock = Big('0.000005235866863')\nconst blocksPerDay = Big(4 * 60 * 24)\nconst blocksPerWeek = blocksPerDay.times(7)\nconst blocksPerMonth = blocksPerDay.times(30.41) // Average days per month in non-leap year\nconst millisecondsPerDay = 1000 * 60 * 60 * 24\nconst totalDelegateCount = 201\n\n\nclass PriceResult {\n  constructor ($currencyValue, $timePeriod) {\n    this.$currencyValue = $currencyValue\n    this.$timePeriod = $timePeriod\n    this.bplBalance = Big(0)\n    this.currencyPrice = new _CurrencyPrice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    this.timePeriod = $timePeriod.filter('.active').data('time-period')\n\n    this.$timePeriod.click((evt) => {\n      evt.preventDefault()\n      \n      const $selectedLink = $(evt.target)\n      $timePeriod.filter('.active').removeClass('active show')\n      $selectedLink.addClass('active show')\n      this.timePeriod = $selectedLink.data('time-period')\n      this.displayTotals()\n    })\n  }\n  \n  init() {\n    this.setBplBalance(Big(0))\n  }\n\n  getTimePeriodDays() {\n    if (this.timePeriod === 'day') return blocksPerDay\n    if (this.timePeriod === 'week') return blocksPerWeek\n    if (this.timePeriod === 'month') return blocksPerMonth\n    return Big((Date.UTC(2019, 0) - Date.now()) / millisecondsPerDay).times(blocksPerDay)\n  }\n  \n  getValueForTimePeriod(price) {\n    return price.times(this.bplBalance).times(this.getTimePeriodDays()).div(totalDelegateCount)\n  }\n\n  displayTotals() {\n    const valueForTimePeriod = this.getValueForTimePeriod(this.currencyPrice.price)\n    this.$currencyValue.text(Object(_toCurrencyFormat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(valueForTimePeriod, this.currencyPrice.currency))\n  }\n\n  setBplBalance(bpl) {\n    this.bplBalance = bpl\n    this.displayTotals()\n  }\n\n  setPrice(price) {\n    this.currencyPrice = this.currencyPrice.changePrice(price)\n    this.displayTotals()\n  }\n\n  setCurrency(currency) {\n    this.currencyPrice = this.currencyPrice.changeCurrency(currency)\n    this.displayTotals()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/PriceResult.js?");

/***/ }),

/***/ "./src/currencies.js":
/*!***************************!*\
  !*** ./src/currencies.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  BTC: { symbol: '₿', digits: 8 },\n  EUR: { symbol: '€', digits: 2 },\n  CNY: { symbol: '¥', digits: 2 },\n  GBP: { symbol: '£', digits: 2 },\n  USD: { symbol: '$', digits: 2 },\n});\n\n\n//# sourceURL=webpack:///./src/currencies.js?");

/***/ }),

/***/ "./src/fromApiString.js":
/*!******************************!*\
  !*** ./src/fromApiString.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fromApiString; });\n\nfunction fromApiString(rawBplValue) {\n  return Big(rawBplValue).div(100000000)\n}\n\n\n//# sourceURL=webpack:///./src/fromApiString.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BlockRewardCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockRewardCalculator */ \"./src/BlockRewardCalculator.js\");\n/* harmony import */ var _BplBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BplBalance */ \"./src/BplBalance.js\");\n/* harmony import */ var _BplPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BplPrice */ \"./src/BplPrice.js\");\n/* harmony import */ var _CurrencySelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrencySelection */ \"./src/CurrencySelection.js\");\n/* harmony import */ var _rewards_FeeReward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rewards/FeeReward */ \"./src/rewards/FeeReward.js\");\n/* harmony import */ var _rewards_FixedReward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewards/FixedReward */ \"./src/rewards/FixedReward.js\");\n/* harmony import */ var _rewards_InterestReward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards/InterestReward */ \"./src/rewards/InterestReward.js\");\n/* harmony import */ var _MarketCap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MarketCap */ \"./src/MarketCap.js\");\n/* harmony import */ var _PriceResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PriceResult */ \"./src/PriceResult.js\");\n/* harmony import */ var _toCryptoFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toCryptoFormat */ \"./src/toCryptoFormat.js\");\n/* harmony import */ var _BplPriceStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BplPriceStatus */ \"./src/BplPriceStatus.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function($) {\n  var balance = new _BplBalance__WEBPACK_IMPORTED_MODULE_1__[\"default\"]($('#bpl-balance'))\n    , blockReward = new _BlockRewardCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($('#block-reward'))\n    , bplPriceStatus = new _BplPriceStatus__WEBPACK_IMPORTED_MODULE_10__[\"default\"]($('#price-loading'), $('#price-load-date'), $('#user-entered-price'))\n    , marketCap = new _MarketCap__WEBPACK_IMPORTED_MODULE_7__[\"default\"]($('#market-cap'))\n    , price = new _BplPrice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]($('#bpl-price'), $('#reset-price'), bplPriceStatus)\n    , prices = new _PriceResult__WEBPACK_IMPORTED_MODULE_8__[\"default\"]($('#currency-value'), $('#reward-time-period .nav-link'))\n    , feeReward = new _rewards_FeeReward__WEBPACK_IMPORTED_MODULE_4__[\"default\"]($('#fees-value'))\n    , fixedReward = new _rewards_FixedReward__WEBPACK_IMPORTED_MODULE_5__[\"default\"]($('#fixed-reward-value'), $('#include-fixed-reward'))\n    , interestReward = new _rewards_InterestReward__WEBPACK_IMPORTED_MODULE_6__[\"default\"]($('#interest-value'))\n    , currencySelection = new _CurrencySelection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]($('#selected-currency'))\n  \n  balance.on('bplBalance.changed', (bplBalance) => {\n    interestReward.setBplBalance(bplBalance)\n  })\n\n  blockReward.on('blockRewardTotal.changed', (total) => {\n    $('#total-value').text(Object(_toCryptoFormat__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(total))\n    \n    prices.setBplBalance(total)\n  })\n  \n  price.on('price.changed', (price) => {\n    prices.setPrice(price)\n    marketCap.setPrice(price)\n  })\n  \n  currencySelection.on('currency.changed', (currency) => {\n    price.setCurrency(currency)\n    prices.setCurrency(currency)\n    marketCap.setCurrency(currency)\n  })\n\n  \n  blockReward.addReward(interestReward)\n  blockReward.addReward(feeReward)\n  blockReward.addReward(fixedReward)\n\n  balance.setBalance(50000)\n  currencySelection.init()\n  marketCap.init()\n  price.init()\n  prices.init()\n  blockReward.init()\n  feeReward.init()\n  fixedReward.init()\n})(jQuery)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rewards/FeeReward.js":
/*!**********************************!*\
  !*** ./src/rewards/FeeReward.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FeeReward; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fromApiString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fromApiString */ \"./src/fromApiString.js\");\n/* harmony import */ var _util_makeApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/makeApiRequest */ \"./src/util/makeApiRequest.js\");\n/* harmony import */ var _toCryptoFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toCryptoFormat */ \"./src/toCryptoFormat.js\");\n\n\n\n\n\n\n\nconst blocksPerWeek = 4 * 60 * 24 * 2 //7\n\n\nclass FeeReward extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($feesValue) {\n    super()\n\n    this.$feesValue = $feesValue\n    this.blockCount = 0\n    this.feeAverage = Big(0)\n    this.totalFees = Big(0)\n  }\n\n  init() {\n    this.blockCount = 1\n    this.totalFees = Big('0.00100862')\n\n    this.setFeeAverage()\n\n    this.calculateFeeAverage()\n  }\n\n  \n  addTo(partialTotal) {\n    return partialTotal.plus(this.feeAverage)\n  }\n\n  async calculateFeeAverage() {\n    /*\n    const necessaryRequestCount = blocksPerWeek / 100\n    for (let i = 0; i < necessaryRequestCount; i += 1) {\n      let response = await makeApiRequest('blocks', { limit: 100, offset: 100 * i })\n      let blockFees = response.blocks.reduce((sum, block) => sum.plus(fromApiString(block.totalFee)), Big(0))\n      this.blockCount += 100\n      this.totalFees = this.totalFees.plus(blockFees)\n      this.setFeeAverage()\n    }\n    */\n  }\n\n  setFeeAverage() {\n    this.feeAverage = this.blockCount === 0\n      ? Big(0)\n      : this.totalFees.div(this.blockCount)\n\n    this.$feesValue.text(Object(_toCryptoFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.feeAverage))\n\n    this.emit('reward.updated')\n  }\n}\n\n\n//# sourceURL=webpack:///./src/rewards/FeeReward.js?");

/***/ }),

/***/ "./src/rewards/FixedReward.js":
/*!************************************!*\
  !*** ./src/rewards/FixedReward.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FixedReward; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toCryptoFormat */ \"./src/toCryptoFormat.js\");\n\n\n\n\n\nclass FixedReward extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($fixedRewardValue, $isIncludingFixedReward) {\n    super()\n\n    this.$fixedRewardValue = $fixedRewardValue\n    this.$isIncludingFixedReward = $isIncludingFixedReward\n\n    this.fixed = Big(5)\n\n    $isIncludingFixedReward.change(() => this.update())\n  }\n\n  init() {\n    this.displayReward()\n  }\n\n  \n  displayReward() {\n    if (this.$isIncludingFixedReward.is(':checked')) {\n      this.$fixedRewardValue.text(Object(_toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.fixed))\n    } else {\n      this.$fixedRewardValue.text('--')\n    }\n  }\n  \n  update() {\n    this.displayReward()\n\n    this.emit('reward.updated')\n  }\n\n  addTo(partialTotal) {\n    return this.$isIncludingFixedReward.is(':checked')\n      ? partialTotal.plus(this.fixed)\n      : partialTotal\n  }\n}\n\n\n//# sourceURL=webpack:///./src/rewards/FixedReward.js?");

/***/ }),

/***/ "./src/rewards/InterestReward.js":
/*!***************************************!*\
  !*** ./src/rewards/InterestReward.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InterestReward; });\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ \"./node_modules/wolfy87-eventemitter/EventEmitter.js\");\n/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toCryptoFormat */ \"./src/toCryptoFormat.js\");\n\n\n\n\n\nconst interestPerBlock = Big('0.000005235866863')\n\nclass InterestReward extends wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor($interestValue) {\n    super()\n\n    this.$interestValue = $interestValue\n    this.interest = Big(0)\n  }\n  \n\n  addTo(partialTotal) {\n    return partialTotal.plus(this.interest)\n  }\n\n  setBplBalance(bplBalance) {\n    this.interest = bplBalance.times(interestPerBlock)\n    this.$interestValue.text(Object(_toCryptoFormat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.interest))\n    \n    this.emit('reward.updated')\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/rewards/InterestReward.js?");

/***/ }),

/***/ "./src/toCryptoFormat.js":
/*!*******************************!*\
  !*** ./src/toCryptoFormat.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toCryptoFormat; });\n\nfunction toCryptoFormat(amount) {\n  return amount.toFixed(8)\n}\n\n\n//# sourceURL=webpack:///./src/toCryptoFormat.js?");

/***/ }),

/***/ "./src/toCurrencyFormat.js":
/*!*********************************!*\
  !*** ./src/toCurrencyFormat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencies */ \"./src/currencies.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(amount, currencyAbbr) {\n  var currency = _currencies__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currencyAbbr || 'USD']\n    , inFormat = parseFloat(amount.toFixed(currency.digits))\n\n  return accounting.formatMoney(inFormat, currency.symbol, currency.digits)\n});\n\n\n//# sourceURL=webpack:///./src/toCurrencyFormat.js?");

/***/ }),

/***/ "./src/util/makeApiRequest.js":
/*!************************************!*\
  !*** ./src/util/makeApiRequest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst api = 'http://13.56.163.57:9030/api'\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function(url, params) {\n  return new Promise(async (resolve, reject) => {\n    try {\n      const query = params ? `?${querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)}` : ''\n      const requestUrl = `${api}/${url}${query}`\n  \n      const rawResponse = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(requestUrl, {\n        method: 'GET',\n      })\n      const response = await rawResponse.json()\n  \n      if(response.success) {\n        resolve(response)\n      } else {\n        reject(new Error(`Request did not complete successfully.`))\n      }\n    } catch(err) {\n      reject(err)\n    }\n  }) \n});\n\n\n\n//# sourceURL=webpack:///./src/util/makeApiRequest.js?");

/***/ })

/******/ });