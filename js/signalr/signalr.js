(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["signalR"] = factory();
    else
        root["signalR"] = factory();
})(window, function() {
    return (function(modules) {
            var installedModules = {};

            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) {
                    return installedModules[moduleId].exports;
                }
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: false,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = true;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                if (!__webpack_require__.o(exports, name)) {
                    Object.defineProperty(exports, name, {
                        enumerable: true,
                        get: getter
                    });
                }
            };
            __webpack_require__.r = function(exports) {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                    });
                }
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
            };
            __webpack_require__.t = function(value, mode) {
                if (mode & 1) value = __webpack_require__(value);
                if (mode & 8) return value;
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, 'default', {
                    enumerable: true,
                    value: value
                });
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function getDefault() {
                    return module['default'];
                } : function getModuleExports() {
                    return module;
                };
                __webpack_require__.d(getter, 'a', getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        })
        ([(function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__);
            var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
            __webpack_require__.d(__webpack_exports__, "VERSION", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["VERSION"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpError", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HttpError"];
            });
            __webpack_require__.d(__webpack_exports__, "TimeoutError", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"];
            });
            __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["DefaultHttpClient"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpClient", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpResponse", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"];
            });
            __webpack_require__.d(__webpack_exports__, "HubConnection", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnection"];
            });
            __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"];
            });
            __webpack_require__.d(__webpack_exports__, "MessageType", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["MessageType"];
            });
            __webpack_require__.d(__webpack_exports__, "LogLevel", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["LogLevel"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"];
            });
            __webpack_require__.d(__webpack_exports__, "TransferFormat", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"];
            });
            __webpack_require__.d(__webpack_exports__, "NullLogger", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["NullLogger"];
            });
            __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() {
                return _index__WEBPACK_IMPORTED_MODULE_1__["JsonHubProtocol"];
            });
            if (!Uint8Array.prototype.indexOf) {
                Object.defineProperty(Uint8Array.prototype, "indexOf", {
                    value: Array.prototype.indexOf,
                    writable: true,
                });
            }
            if (!Uint8Array.prototype.slice) {
                Object.defineProperty(Uint8Array.prototype, "slice", {
                    value: Array.prototype.slice,
                    writable: true,
                });
            }
            if (!Uint8Array.prototype.forEach) {
                Object.defineProperty(Uint8Array.prototype, "forEach", {
                    value: Array.prototype.forEach,
                    writable: true,
                });
            }
        }), (function(module, exports, __webpack_require__) {
            (function(global) {
                var require;
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license Licensed under MIT license
                 * See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version v4.2.2+97478eb6
                 */
                (function(global, factory) {
                    true ? module.exports = factory() : undefined;
                }(this, (function() {
                    'use strict';

                    function objectOrFunction(x) {
                        var type = typeof x;
                        return x !== null && (type === 'object' || type === 'function');
                    }

                    function isFunction(x) {
                        return typeof x === 'function';
                    }
                    var _isArray = void 0;
                    if (Array.isArray) {
                        _isArray = Array.isArray;
                    } else {
                        _isArray = function(x) {
                            return Object.prototype.toString.call(x) === '[object Array]';
                        };
                    }
                    var isArray = _isArray;
                    var len = 0;
                    var vertxNext = void 0;
                    var customSchedulerFn = void 0;
                    var asap = function asap(callback, arg) {
                        queue[len] = callback;
                        queue[len + 1] = arg;
                        len += 2;
                        if (len === 2) {
                            if (customSchedulerFn) {
                                customSchedulerFn(flush);
                            } else {
                                scheduleFlush();
                            }
                        }
                    };

                    function setScheduler(scheduleFn) {
                        customSchedulerFn = scheduleFn;
                    }

                    function setAsap(asapFn) {
                        asap = asapFn;
                    }
                    var browserWindow = typeof window !== 'undefined' ? window : undefined;
                    var browserGlobal = browserWindow || {};
                    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
                    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

                    function useNextTick() {
                        return function() {
                            return process.nextTick(flush);
                        };
                    }

                    function useVertxTimer() {
                        if (typeof vertxNext !== 'undefined') {
                            return function() {
                                vertxNext(flush);
                            };
                        }
                        return useSetTimeout();
                    }

                    function useMutationObserver() {
                        var iterations = 0;
                        var observer = new BrowserMutationObserver(flush);
                        var node = document.createTextNode('');
                        observer.observe(node, {
                            characterData: true
                        });
                        return function() {
                            node.data = iterations = ++iterations % 2;
                        };
                    }

                    function useMessageChannel() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = flush;
                        return function() {
                            return channel.port2.postMessage(0);
                        };
                    }

                    function useSetTimeout() {
                        var globalSetTimeout = setTimeout;
                        return function() {
                            return globalSetTimeout(flush, 1);
                        };
                    }
                    var queue = new Array(1000);

                    function flush() {
                        for (var i = 0; i < len; i += 2) {
                            var callback = queue[i];
                            var arg = queue[i + 1];
                            callback(arg);
                            queue[i] = undefined;
                            queue[i + 1] = undefined;
                        }
                        len = 0;
                    }

                    function attemptVertx() {
                        try {
                            var r = require;
                            var vertx = __webpack_require__(!(function webpackMissingModule() {
                                var e = new Error("Cannot find module 'vertx'");
                                e.code = 'MODULE_NOT_FOUND';
                                throw e;
                            }()));
                            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                            return useVertxTimer();
                        } catch (e) {
                            return useSetTimeout();
                        }
                    }
                    var scheduleFlush = void 0;
                    if (isNode) {
                        scheduleFlush = useNextTick();
                    } else if (BrowserMutationObserver) {
                        scheduleFlush = useMutationObserver();
                    } else if (isWorker) {
                        scheduleFlush = useMessageChannel();
                    } else if (browserWindow === undefined && "function" === 'function') {
                        scheduleFlush = attemptVertx();
                    } else {
                        scheduleFlush = useSetTimeout();
                    }

                    function then(onFulfillment, onRejection) {
                        var parent = this;
                        var child = new this.constructor(noop);
                        if (child[PROMISE_ID] === undefined) {
                            makePromise(child);
                        }
                        var _state = parent._state;
                        if (_state) {
                            var callback = arguments[_state - 1];
                            asap(function() {
                                return invokeCallback(_state, child, callback, parent._result);
                            });
                        } else {
                            subscribe(parent, child, onFulfillment, onRejection);
                        }
                        return child;
                    }

                    function resolve$1(object) {
                        var Constructor = this;
                        if (object && typeof object === 'object' && object.constructor === Constructor) {
                            return object;
                        }
                        var promise = new Constructor(noop);
                        resolve(promise, object);
                        return promise;
                    }
                    var PROMISE_ID = Math.random().toString(36).substring(16);

                    function noop() {}
                    var PENDING = void 0;
                    var FULFILLED = 1;
                    var REJECTED = 2;
                    var GET_THEN_ERROR = new ErrorObject();

                    function selfFulfillment() {
                        return new TypeError("You cannot resolve a promise with itself");
                    }

                    function cannotReturnOwn() {
                        return new TypeError('A promises callback cannot return that same promise.');
                    }

                    function getThen(promise) {
                        try {
                            return promise.then;
                        } catch (error) {
                            GET_THEN_ERROR.error = error;
                            return GET_THEN_ERROR;
                        }
                    }

                    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                        try {
                            then$$1.call(value, fulfillmentHandler, rejectionHandler);
                        } catch (e) {
                            return e;
                        }
                    }

                    function handleForeignThenable(promise, thenable, then$$1) {
                        asap(function(promise) {
                            var sealed = false;
                            var error = tryThen(then$$1, thenable, function(value) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;
                                if (thenable !== value) {
                                    resolve(promise, value);
                                } else {
                                    fulfill(promise, value);
                                }
                            }, function(reason) {
                                if (sealed) {
                                    return;
                                }
                                sealed = true;
                                reject(promise, reason);
                            }, 'Settle: ' + (promise._label || ' unknown promise'));
                            if (!sealed && error) {
                                sealed = true;
                                reject(promise, error);
                            }
                        }, promise);
                    }

                    function handleOwnThenable(promise, thenable) {
                        if (thenable._state === FULFILLED) {
                            fulfill(promise, thenable._result);
                        } else if (thenable._state === REJECTED) {
                            reject(promise, thenable._result);
                        } else {
                            subscribe(thenable, undefined, function(value) {
                                return resolve(promise, value);
                            }, function(reason) {
                                return reject(promise, reason);
                            });
                        }
                    }

                    function handleMaybeThenable(promise, maybeThenable, then$$1) {
                        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                            handleOwnThenable(promise, maybeThenable);
                        } else {
                            if (then$$1 === GET_THEN_ERROR) {
                                reject(promise, GET_THEN_ERROR.error);
                                GET_THEN_ERROR.error = null;
                            } else if (then$$1 === undefined) {
                                fulfill(promise, maybeThenable);
                            } else if (isFunction(then$$1)) {
                                handleForeignThenable(promise, maybeThenable, then$$1);
                            } else {
                                fulfill(promise, maybeThenable);
                            }
                        }
                    }

                    function resolve(promise, value) {
                        if (promise === value) {
                            reject(promise, selfFulfillment());
                        } else if (objectOrFunction(value)) {
                            handleMaybeThenable(promise, value, getThen(value));
                        } else {
                            fulfill(promise, value);
                        }
                    }

                    function publishRejection(promise) {
                        if (promise._onerror) {
                            promise._onerror(promise._result);
                        }
                        publish(promise);
                    }

                    function fulfill(promise, value) {
                        if (promise._state !== PENDING) {
                            return;
                        }
                        promise._result = value;
                        promise._state = FULFILLED;
                        if (promise._subscribers.length !== 0) {
                            asap(publish, promise);
                        }
                    }

                    function reject(promise, reason) {
                        if (promise._state !== PENDING) {
                            return;
                        }
                        promise._state = REJECTED;
                        promise._result = reason;
                        asap(publishRejection, promise);
                    }

                    function subscribe(parent, child, onFulfillment, onRejection) {
                        var _subscribers = parent._subscribers;
                        var length = _subscribers.length;
                        parent._onerror = null;
                        _subscribers[length] = child;
                        _subscribers[length + FULFILLED] = onFulfillment;
                        _subscribers[length + REJECTED] = onRejection;
                        if (length === 0 && parent._state) {
                            asap(publish, parent);
                        }
                    }

                    function publish(promise) {
                        var subscribers = promise._subscribers;
                        var settled = promise._state;
                        if (subscribers.length === 0) {
                            return;
                        }
                        var child = void 0,
                            callback = void 0,
                            detail = promise._result;
                        for (var i = 0; i < subscribers.length; i += 3) {
                            child = subscribers[i];
                            callback = subscribers[i + settled];
                            if (child) {
                                invokeCallback(settled, child, callback, detail);
                            } else {
                                callback(detail);
                            }
                        }
                        promise._subscribers.length = 0;
                    }

                    function ErrorObject() {
                        this.error = null;
                    }
                    var TRY_CATCH_ERROR = new ErrorObject();

                    function tryCatch(callback, detail) {
                        try {
                            return callback(detail);
                        } catch (e) {
                            TRY_CATCH_ERROR.error = e;
                            return TRY_CATCH_ERROR;
                        }
                    }

                    function invokeCallback(settled, promise, callback, detail) {
                        var hasCallback = isFunction(callback),
                            value = void 0,
                            error = void 0,
                            succeeded = void 0,
                            failed = void 0;
                        if (hasCallback) {
                            value = tryCatch(callback, detail);
                            if (value === TRY_CATCH_ERROR) {
                                failed = true;
                                error = value.error;
                                value.error = null;
                            } else {
                                succeeded = true;
                            }
                            if (promise === value) {
                                reject(promise, cannotReturnOwn());
                                return;
                            }
                        } else {
                            value = detail;
                            succeeded = true;
                        }
                        if (promise._state !== PENDING) {} else if (hasCallback && succeeded) {
                            resolve(promise, value);
                        } else if (failed) {
                            reject(promise, error);
                        } else if (settled === FULFILLED) {
                            fulfill(promise, value);
                        } else if (settled === REJECTED) {
                            reject(promise, value);
                        }
                    }

                    function initializePromise(promise, resolver) {
                        try {
                            resolver(function resolvePromise(value) {
                                resolve(promise, value);
                            }, function rejectPromise(reason) {
                                reject(promise, reason);
                            });
                        } catch (e) {
                            reject(promise, e);
                        }
                    }
                    var id = 0;

                    function nextId() {
                        return id++;
                    }

                    function makePromise(promise) {
                        promise[PROMISE_ID] = id++;
                        promise._state = undefined;
                        promise._result = undefined;
                        promise._subscribers = [];
                    }

                    function validationError() {
                        return new Error('Array Methods must be provided an Array');
                    }

                    function validationError() {
                        return new Error('Array Methods must be provided an Array');
                    }
                    var Enumerator = function() {
                        function Enumerator(Constructor, input) {
                            this._instanceConstructor = Constructor;
                            this.promise = new Constructor(noop);
                            if (!this.promise[PROMISE_ID]) {
                                makePromise(this.promise);
                            }
                            if (isArray(input)) {
                                this.length = input.length;
                                this._remaining = input.length;
                                this._result = new Array(this.length);
                                if (this.length === 0) {
                                    fulfill(this.promise, this._result);
                                } else {
                                    this.length = this.length || 0;
                                    this._enumerate(input);
                                    if (this._remaining === 0) {
                                        fulfill(this.promise, this._result);
                                    }
                                }
                            } else {
                                reject(this.promise, validationError());
                            }
                        }
                        Enumerator.prototype._enumerate = function _enumerate(input) {
                            for (var i = 0; this._state === PENDING && i < input.length; i++) {
                                this._eachEntry(input[i], i);
                            }
                        };
                        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                            var c = this._instanceConstructor;
                            var resolve$$1 = c.resolve;
                            if (resolve$$1 === resolve$1) {
                                var _then = getThen(entry);
                                if (_then === then && entry._state !== PENDING) {
                                    this._settledAt(entry._state, i, entry._result);
                                } else if (typeof _then !== 'function') {
                                    this._remaining--;
                                    this._result[i] = entry;
                                } else if (c === Promise$2) {
                                    var promise = new c(noop);
                                    handleMaybeThenable(promise, entry, _then);
                                    this._willSettleAt(promise, i);
                                } else {
                                    this._willSettleAt(new c(function(resolve$$1) {
                                        return resolve$$1(entry);
                                    }), i);
                                }
                            } else {
                                this._willSettleAt(resolve$$1(entry), i);
                            }
                        };
                        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                            var promise = this.promise;
                            if (promise._state === PENDING) {
                                this._remaining--;
                                if (state === REJECTED) {
                                    reject(promise, value);
                                } else {
                                    this._result[i] = value;
                                }
                            }
                            if (this._remaining === 0) {
                                fulfill(promise, this._result);
                            }
                        };
                        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                            var enumerator = this;
                            subscribe(promise, undefined, function(value) {
                                return enumerator._settledAt(FULFILLED, i, value);
                            }, function(reason) {
                                return enumerator._settledAt(REJECTED, i, reason);
                            });
                        };
                        return Enumerator;
                    }();

                    function all(entries) {
                        return new Enumerator(this, entries).promise;
                    }

                    function race(entries) {
                        var Constructor = this;
                        if (!isArray(entries)) {
                            return new Constructor(function(_, reject) {
                                return reject(new TypeError('You must pass an array to race.'));
                            });
                        } else {
                            return new Constructor(function(resolve, reject) {
                                var length = entries.length;
                                for (var i = 0; i < length; i++) {
                                    Constructor.resolve(entries[i]).then(resolve, reject);
                                }
                            });
                        }
                    }

                    function reject$1(reason) {
                        var Constructor = this;
                        var promise = new Constructor(noop);
                        reject(promise, reason);
                        return promise;
                    }

                    function needsResolver() {
                        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    }

                    function needsNew() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }
                    var Promise$2 = function() {
                        function Promise(resolver) {
                            this[PROMISE_ID] = nextId();
                            this._result = this._state = undefined;
                            this._subscribers = [];
                            if (noop !== resolver) {
                                typeof resolver !== 'function' && needsResolver();
                                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
                            }
                        }
                        Promise.prototype.catch = function _catch(onRejection) {
                            return this.then(null, onRejection);
                        };
                        Promise.prototype.finally = function _finally(callback) {
                            var promise = this;
                            var constructor = promise.constructor;
                            return promise.then(function(value) {
                                return constructor.resolve(callback()).then(function() {
                                    return value;
                                });
                            }, function(reason) {
                                return constructor.resolve(callback()).then(function() {
                                    throw reason;
                                });
                            });
                        };
                        return Promise;
                    }();
                    Promise$2.prototype.then = then;
                    Promise$2.all = all;
                    Promise$2.race = race;
                    Promise$2.resolve = resolve$1;
                    Promise$2.reject = reject$1;
                    Promise$2._setScheduler = setScheduler;
                    Promise$2._setAsap = setAsap;
                    Promise$2._asap = asap;

                    function polyfill() {
                        var local = void 0;
                        if (typeof global !== 'undefined') {
                            local = global;
                        } else if (typeof self !== 'undefined') {
                            local = self;
                        } else {
                            try {
                                local = Function('return this')();
                            } catch (e) {
                                throw new Error('polyfill failed because global object is unavailable in this environment');
                            }
                        }
                        var P = local.Promise;
                        if (P) {
                            var promiseToString = null;
                            try {
                                promiseToString = Object.prototype.toString.call(P.resolve());
                            } catch (e) {}
                            if (promiseToString === '[object Promise]' && !P.cast) {
                                return;
                            }
                        }
                        local.Promise = Promise$2;
                    }
                    Promise$2.polyfill = polyfill;
                    Promise$2.Promise = Promise$2;
                    Promise$2.polyfill();
                    return Promise$2;
                })));
            }.call(this, __webpack_require__(2)))
        }), (function(module, exports) {
            var g;
            g = (function() {
                return this;
            })();
            try {
                g = g || Function("return this")() || (1, eval)("this");
            } catch (e) {
                if (typeof window === "object") g = window;
            }
            module.exports = g;
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "VERSION", function() {
                return VERSION;
            });
            var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
            __webpack_require__.d(__webpack_exports__, "HttpError", function() {
                return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"];
            });
            __webpack_require__.d(__webpack_exports__, "TimeoutError", function() {
                return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"];
            });
            var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
            __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() {
                return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["DefaultHttpClient"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpClient", function() {
                return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];
            });
            __webpack_require__.d(__webpack_exports__, "HttpResponse", function() {
                return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"];
            });
            var _HubConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
            __webpack_require__.d(__webpack_exports__, "HubConnection", function() {
                return _HubConnection__WEBPACK_IMPORTED_MODULE_2__["HubConnection"];
            });
            var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
            __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() {
                return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"];
            });
            var _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
            __webpack_require__.d(__webpack_exports__, "MessageType", function() {
                return _IHubProtocol__WEBPACK_IMPORTED_MODULE_4__["MessageType"];
            });
            var _ILogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
            __webpack_require__.d(__webpack_exports__, "LogLevel", function() {
                return _ILogger__WEBPACK_IMPORTED_MODULE_5__["LogLevel"];
            });
            var _ITransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
            __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() {
                return _ITransport__WEBPACK_IMPORTED_MODULE_6__["HttpTransportType"];
            });
            __webpack_require__.d(__webpack_exports__, "TransferFormat", function() {
                return _ITransport__WEBPACK_IMPORTED_MODULE_6__["TransferFormat"];
            });
            var _Loggers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
            __webpack_require__.d(__webpack_exports__, "NullLogger", function() {
                return _Loggers__WEBPACK_IMPORTED_MODULE_7__["NullLogger"];
            });
            var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
            __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() {
                return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_8__["JsonHubProtocol"];
            });
            var VERSION = "1.0.4";
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HttpError", function() {
                return HttpError;
            });
            __webpack_require__.d(__webpack_exports__, "TimeoutError", function() {
                return TimeoutError;
            });
            var __extends = (undefined && undefined.__extends) || (function() {
                var extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    }) || function(d, b) {
                    for (var p in b)
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return function(d, b) {
                    extendStatics(d, b);

                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var HttpError = (function(_super) {
                __extends(HttpError, _super);

                function HttpError(errorMessage, statusCode) {
                    var _newTarget = this.constructor;
                    var _this = this;
                    var trueProto = _newTarget.prototype;
                    _this = _super.call(this, errorMessage) || this;
                    _this.statusCode = statusCode;
                    _this.__proto__ = trueProto;
                    return _this;
                }
                return HttpError;
            }(Error));
            var TimeoutError = (function(_super) {
                __extends(TimeoutError, _super);

                function TimeoutError(errorMessage) {
                    var _newTarget = this.constructor;
                    if (errorMessage === void 0) {
                        errorMessage = "A timeout occurred.";
                    }
                    var _this = this;
                    var trueProto = _newTarget.prototype;
                    _this = _super.call(this, errorMessage) || this;
                    _this.__proto__ = trueProto;
                    return _this;
                }
                return TimeoutError;
            }(Error));
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HttpResponse", function() {
                return HttpResponse;
            });
            __webpack_require__.d(__webpack_exports__, "HttpClient", function() {
                return HttpClient;
            });
            __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() {
                return DefaultHttpClient;
            });
            var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
            var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
            var __extends = (undefined && undefined.__extends) || (function() {
                var extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    }) || function(d, b) {
                    for (var p in b)
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return function(d, b) {
                    extendStatics(d, b);

                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            })();
            var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
            var HttpResponse = (function() {
                function HttpResponse(statusCode, statusText, content) {
                    this.statusCode = statusCode;
                    this.statusText = statusText;
                    this.content = content;
                }
                return HttpResponse;
            }());
            var HttpClient = (function() {
                function HttpClient() {}
                HttpClient.prototype.get = function(url, options) {
                    return this.send(__assign({}, options, {
                        method: "GET",
                        url: url
                    }));
                };
                HttpClient.prototype.post = function(url, options) {
                    return this.send(__assign({}, options, {
                        method: "POST",
                        url: url
                    }));
                };
                HttpClient.prototype.delete = function(url, options) {
                    return this.send(__assign({}, options, {
                        method: "DELETE",
                        url: url
                    }));
                };
                return HttpClient;
            }());
            var DefaultHttpClient = (function(_super) {
                __extends(DefaultHttpClient, _super);

                function DefaultHttpClient(logger) {
                    var _this = _super.call(this) || this;
                    _this.logger = logger;
                    return _this;
                }
                DefaultHttpClient.prototype.send = function(request) {
                    var _this = this;
                    return new Promise(function(resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open(request.method, request.url, true);
                        xhr.withCredentials = true;
                        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                        if (request.headers) {
                            Object.keys(request.headers).forEach(function(header) {
                                return xhr.setRequestHeader(header, request.headers[header]);
                            });
                        }
                        if (request.responseType) {
                            xhr.responseType = request.responseType;
                        }
                        if (request.abortSignal) {
                            request.abortSignal.onabort = function() {
                                xhr.abort();
                            };
                        }
                        if (request.timeout) {
                            xhr.timeout = request.timeout;
                        }
                        xhr.onload = function() {
                            if (request.abortSignal) {
                                request.abortSignal.onabort = null;
                            }
                            if (xhr.status >= 200 && xhr.status < 300) {
                                resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                            } else {
                                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                            }
                        };
                        xhr.onerror = function() {
                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText);
                            reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                        };
                        xhr.ontimeout = function() {
                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Warning, "Timeout from HTTP request.");
                            reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
                        };
                        xhr.send(request.content || "");
                    });
                };
                return DefaultHttpClient;
            }(HttpClient));
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "LogLevel", function() {
                return LogLevel;
            });
            var LogLevel;
            (function(LogLevel) {
                LogLevel[LogLevel["Trace"] = 0] = "Trace";
                LogLevel[LogLevel["Debug"] = 1] = "Debug";
                LogLevel[LogLevel["Information"] = 2] = "Information";
                LogLevel[LogLevel["Warning"] = 3] = "Warning";
                LogLevel[LogLevel["Error"] = 4] = "Error";
                LogLevel[LogLevel["Critical"] = 5] = "Critical";
                LogLevel[LogLevel["None"] = 6] = "None";
            })(LogLevel || (LogLevel = {}));
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HubConnection", function() {
                return HubConnection;
            });
            var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
            var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
            var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
            var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
            var HubConnection = (function() {
                function HubConnection(connection, logger, protocol) {
                    var _this = this;
                    _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(connection, "connection");
                    _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(logger, "logger");
                    _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(protocol, "protocol");
                    this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
                    this.logger = logger;
                    this.protocol = protocol;
                    this.connection = connection;
                    this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
                    this.connection.onreceive = function(data) {
                        return _this.processIncomingData(data);
                    };
                    this.connection.onclose = function(error) {
                        return _this.connectionClosed(error);
                    };
                    this.callbacks = {};
                    this.methods = {};
                    this.closedCallbacks = [];
                    this.id = 0;
                }
                HubConnection.create = function(connection, logger, protocol) {
                    return new HubConnection(connection, logger, protocol);
                };
                HubConnection.prototype.start = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var handshakeRequest;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    handshakeRequest = {
                                        protocol: this.protocol.name,
                                        version: this.protocol.version,
                                    };
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                                    this.receivedHandshakeResponse = false;
                                    return [4, this.connection.start(this.protocol.transferFormat)];
                                case 1:
                                    _a.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                                    return [4, this.connection.send(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                                case 2:
                                    _a.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                                    this.cleanupTimeout();
                                    this.configureTimeout();
                                    return [2];
                            }
                        });
                    });
                };
                HubConnection.prototype.stop = function() {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
                    this.cleanupTimeout();
                    return this.connection.stop();
                };
                HubConnection.prototype.stream = function(methodName) {
                    var _this = this;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var invocationDescriptor = this.createStreamInvocation(methodName, args);
                    var subject = new _Utils__WEBPACK_IMPORTED_MODULE_3__["Subject"](function() {
                        var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
                        var cancelMessage = _this.protocol.writeMessage(cancelInvocation);
                        delete _this.callbacks[invocationDescriptor.invocationId];
                        return _this.connection.send(cancelMessage);
                    });
                    this.callbacks[invocationDescriptor.invocationId] = function(invocationEvent, error) {
                        if (error) {
                            subject.error(error);
                            return;
                        }
                        if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                            if (invocationEvent.error) {
                                subject.error(new Error(invocationEvent.error));
                            } else {
                                subject.complete();
                            }
                        } else {
                            subject.next((invocationEvent.item));
                        }
                    };
                    var message = this.protocol.writeMessage(invocationDescriptor);
                    this.connection.send(message).catch(function(e) {
                        subject.error(e);
                        delete _this.callbacks[invocationDescriptor.invocationId];
                    });
                    return subject;
                };
                HubConnection.prototype.send = function(methodName) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var invocationDescriptor = this.createInvocation(methodName, args, true);
                    var message = this.protocol.writeMessage(invocationDescriptor);
                    return this.connection.send(message);
                };
                HubConnection.prototype.invoke = function(methodName) {
                    var _this = this;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var invocationDescriptor = this.createInvocation(methodName, args, false);
                    var p = new Promise(function(resolve, reject) {
                        _this.callbacks[invocationDescriptor.invocationId] = function(invocationEvent, error) {
                            if (error) {
                                reject(error);
                                return;
                            }
                            if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                var completionMessage = invocationEvent;
                                if (completionMessage.error) {
                                    reject(new Error(completionMessage.error));
                                } else {
                                    resolve(completionMessage.result);
                                }
                            } else {
                                reject(new Error("Unexpected message type: " + invocationEvent.type));
                            }
                        };
                        var message = _this.protocol.writeMessage(invocationDescriptor);
                        _this.connection.send(message).catch(function(e) {
                            reject(e);
                            delete _this.callbacks[invocationDescriptor.invocationId];
                        });
                    });
                    return p;
                };
                HubConnection.prototype.on = function(methodName, newMethod) {
                    if (!methodName || !newMethod) {
                        return;
                    }
                    methodName = methodName.toLowerCase();
                    if (!this.methods[methodName]) {
                        this.methods[methodName] = [];
                    }
                    if (this.methods[methodName].indexOf(newMethod) !== -1) {
                        return;
                    }
                    this.methods[methodName].push(newMethod);
                };
                HubConnection.prototype.off = function(methodName, method) {
                    if (!methodName) {
                        return;
                    }
                    methodName = methodName.toLowerCase();
                    var handlers = this.methods[methodName];
                    if (!handlers) {
                        return;
                    }
                    if (method) {
                        var removeIdx = handlers.indexOf(method);
                        if (removeIdx !== -1) {
                            handlers.splice(removeIdx, 1);
                            if (handlers.length === 0) {
                                delete this.methods[methodName];
                            }
                        }
                    } else {
                        delete this.methods[methodName];
                    }
                };
                HubConnection.prototype.onclose = function(callback) {
                    if (callback) {
                        this.closedCallbacks.push(callback);
                    }
                };
                HubConnection.prototype.processIncomingData = function(data) {
                    this.cleanupTimeout();
                    if (!this.receivedHandshakeResponse) {
                        data = this.processHandshakeResponse(data);
                        this.receivedHandshakeResponse = true;
                    }
                    if (data) {
                        var messages = this.protocol.parseMessages(data, this.logger);
                        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                            var message = messages_1[_i];
                            switch (message.type) {
                                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                                    this.invokeClientMethod(message);
                                    break;
                                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                                    var callback = this.callbacks[message.invocationId];
                                    if (callback != null) {
                                        if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                            delete this.callbacks[message.invocationId];
                                        }
                                        callback(message);
                                    }
                                    break;
                                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                                    break;
                                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                                    this.connection.stop(message.error ? new Error("Server returned an error on close: " + message.error) : null);
                                    break;
                                default:
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type);
                                    break;
                            }
                        }
                    }
                    this.configureTimeout();
                };
                HubConnection.prototype.processHandshakeResponse = function(data) {
                    var _a;
                    var responseMessage;
                    var remainingData;
                    try {
                        _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
                    } catch (e) {
                        var message = "Error parsing handshake response: " + e;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                        var error = new Error(message);
                        this.connection.stop(error);
                        throw error;
                    }
                    if (responseMessage.error) {
                        var message = "Server returned handshake error: " + responseMessage.error;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                        this.connection.stop(new Error(message));
                    } else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
                    }
                    return remainingData;
                };
                HubConnection.prototype.configureTimeout = function() {
                    var _this = this;
                    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
                        this.timeoutHandle = setTimeout(function() {
                            return _this.serverTimeout();
                        }, this.serverTimeoutInMilliseconds);
                    }
                };
                HubConnection.prototype.serverTimeout = function() {
                    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
                };
                HubConnection.prototype.invokeClientMethod = function(invocationMessage) {
                    var _this = this;
                    var methods = this.methods[invocationMessage.target.toLowerCase()];
                    if (methods) {
                        methods.forEach(function(m) {
                            return m.apply(_this, invocationMessage.arguments);
                        });
                        if (invocationMessage.invocationId) {
                            var message = "Server requested a response, which is not supported in this version of the client.";
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                            this.connection.stop(new Error(message));
                        }
                    } else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
                    }
                };
                HubConnection.prototype.connectionClosed = function(error) {
                    var _this = this;
                    var callbacks = this.callbacks;
                    this.callbacks = {};
                    Object.keys(callbacks).forEach(function(key) {
                        var callback = callbacks[key];
                        callback(undefined, error ? error : new Error("Invocation canceled due to connection being closed."));
                    });
                    this.cleanupTimeout();
                    this.closedCallbacks.forEach(function(c) {
                        return c.apply(_this, [error]);
                    });
                };
                HubConnection.prototype.cleanupTimeout = function() {
                    if (this.timeoutHandle) {
                        clearTimeout(this.timeoutHandle);
                    }
                };
                HubConnection.prototype.createInvocation = function(methodName, args, nonblocking) {
                    if (nonblocking) {
                        return {
                            arguments: args,
                            target: methodName,
                            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                        };
                    } else {
                        var id = this.id;
                        this.id++;
                        return {
                            arguments: args,
                            invocationId: id.toString(),
                            target: methodName,
                            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
                        };
                    }
                };
                HubConnection.prototype.createStreamInvocation = function(methodName, args) {
                    var id = this.id;
                    this.id++;
                    return {
                        arguments: args,
                        invocationId: id.toString(),
                        target: methodName,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
                    };
                };
                HubConnection.prototype.createCancelInvocation = function(id) {
                    return {
                        invocationId: id,
                        type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
                    };
                };
                return HubConnection;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() {
                return HandshakeProtocol;
            });
            var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
            var HandshakeProtocol = (function() {
                function HandshakeProtocol() {}
                HandshakeProtocol.prototype.writeHandshakeRequest = function(handshakeRequest) {
                    return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
                };
                HandshakeProtocol.prototype.parseHandshakeResponse = function(data) {
                    var responseMessage;
                    var messageData;
                    var remainingData;
                    if (data instanceof ArrayBuffer) {
                        var binaryData = new Uint8Array(data);
                        var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
                        if (separatorIndex === -1) {
                            throw new Error("Message is incomplete.");
                        }
                        var responseLength = separatorIndex + 1;
                        messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
                        remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
                    } else {
                        var textData = data;
                        var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
                        if (separatorIndex === -1) {
                            throw new Error("Message is incomplete.");
                        }
                        var responseLength = separatorIndex + 1;
                        messageData = textData.substring(0, responseLength);
                        remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
                    }
                    var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
                    responseMessage = JSON.parse(messages[0]);
                    return [remainingData, responseMessage];
                };
                return HandshakeProtocol;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() {
                return TextMessageFormat;
            });
            var TextMessageFormat = (function() {
                function TextMessageFormat() {}
                TextMessageFormat.write = function(output) {
                    return "" + output + TextMessageFormat.RecordSeparator;
                };
                TextMessageFormat.parse = function(input) {
                    if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
                        throw new Error("Message is incomplete.");
                    }
                    var messages = input.split(TextMessageFormat.RecordSeparator);
                    messages.pop();
                    return messages;
                };
                TextMessageFormat.RecordSeparatorCode = 0x1e;
                TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
                return TextMessageFormat;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "MessageType", function() {
                return MessageType;
            });
            var MessageType;
            (function(MessageType) {
                MessageType[MessageType["Invocation"] = 1] = "Invocation";
                MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
                MessageType[MessageType["Completion"] = 3] = "Completion";
                MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
                MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
                MessageType[MessageType["Ping"] = 6] = "Ping";
                MessageType[MessageType["Close"] = 7] = "Close";
            })(MessageType || (MessageType = {}));
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Arg", function() {
                return Arg;
            });
            __webpack_require__.d(__webpack_exports__, "getDataDetail", function() {
                return getDataDetail;
            });
            __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() {
                return formatArrayBuffer;
            });
            __webpack_require__.d(__webpack_exports__, "sendMessage", function() {
                return sendMessage;
            });
            __webpack_require__.d(__webpack_exports__, "createLogger", function() {
                return createLogger;
            });
            __webpack_require__.d(__webpack_exports__, "Subject", function() {
                return Subject;
            });
            __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() {
                return SubjectSubscription;
            });
            __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() {
                return ConsoleLogger;
            });
            var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
            var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var Arg = (function() {
                function Arg() {}
                Arg.isRequired = function(val, name) {
                    if (val === null || val === undefined) {
                        throw new Error("The '" + name + "' argument is required.");
                    }
                };
                Arg.isIn = function(val, values, name) {
                    if (!(val in values)) {
                        throw new Error("Unknown " + name + " value: " + val + ".");
                    }
                };
                return Arg;
            }());

            function getDataDetail(data, includeContent) {
                var length = null;
                if (data instanceof ArrayBuffer) {
                    length = "Binary data of length " + data.byteLength;
                    if (includeContent) {
                        length += ". Content: '" + formatArrayBuffer(data) + "'";
                    }
                } else if (typeof data === "string") {
                    length = "String data of length " + data.length;
                    if (includeContent) {
                        length += ". Content: '" + data + "'.";
                    }
                }
                return length;
            }

            function formatArrayBuffer(data) {
                var view = new Uint8Array(data);
                var str = "";
                view.forEach(function(num) {
                    var pad = num < 16 ? "0" : "";
                    str += "0x" + pad + num.toString(16) + " ";
                });
                return str.substr(0, str.length - 1);
            }

            function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
                return __awaiter(this, void 0, void 0, function() {
                    var _a, headers, token, response;
                    return __generator(this, function(_b) {
                        switch (_b.label) {
                            case 0:
                                return [4, accessTokenFactory()];
                            case 1:
                                token = _b.sent();
                                if (token) {
                                    headers = (_a = {}, _a["Authorization"] = "Bearer " + token, _a);
                                }
                                logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                                return [4, httpClient.post(url, {
                                    content: content,
                                    headers: headers,
                                })];
                            case 2:
                                response = _b.sent();
                                logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                                return [2];
                        }
                    });
                });
            }

            function createLogger(logger) {
                if (logger === undefined) {
                    return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
                }
                if (logger === null) {
                    return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
                }
                if (logger.log) {
                    return logger;
                }
                return new ConsoleLogger(logger);
            }
            var Subject = (function() {
                function Subject(cancelCallback) {
                    this.observers = [];
                    this.cancelCallback = cancelCallback;
                }
                Subject.prototype.next = function(item) {
                    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                        var observer = _a[_i];
                        observer.next(item);
                    }
                };
                Subject.prototype.error = function(err) {
                    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                        var observer = _a[_i];
                        if (observer.error) {
                            observer.error(err);
                        }
                    }
                };
                Subject.prototype.complete = function() {
                    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                        var observer = _a[_i];
                        if (observer.complete) {
                            observer.complete();
                        }
                    }
                };
                Subject.prototype.subscribe = function(observer) {
                    this.observers.push(observer);
                    return new SubjectSubscription(this, observer);
                };
                return Subject;
            }());
            var SubjectSubscription = (function() {
                function SubjectSubscription(subject, observer) {
                    this.subject = subject;
                    this.observer = observer;
                }
                SubjectSubscription.prototype.dispose = function() {
                    var index = this.subject.observers.indexOf(this.observer);
                    if (index > -1) {
                        this.subject.observers.splice(index, 1);
                    }
                    if (this.subject.observers.length === 0) {
                        this.subject.cancelCallback().catch(function(_) {});
                    }
                };
                return SubjectSubscription;
            }());
            var ConsoleLogger = (function() {
                function ConsoleLogger(minimumLogLevel) {
                    this.minimumLogLevel = minimumLogLevel;
                }
                ConsoleLogger.prototype.log = function(logLevel, message) {
                    if (logLevel >= this.minimumLogLevel) {
                        switch (logLevel) {
                            case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                            case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                                console.error(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                                break;
                            case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                                console.warn(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                                break;
                            case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                                console.info(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                                break;
                            default:
                                console.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                                break;
                        }
                    }
                };
                return ConsoleLogger;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "NullLogger", function() {
                return NullLogger;
            });
            var NullLogger = (function() {
                function NullLogger() {}
                NullLogger.prototype.log = function(_logLevel, _message) {};
                NullLogger.instance = new NullLogger();
                return NullLogger;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() {
                return HubConnectionBuilder;
            });
            var _HttpConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
            var _HubConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
            var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
            var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
            var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
            var HubConnectionBuilder = (function() {
                function HubConnectionBuilder() {}
                HubConnectionBuilder.prototype.configureLogging = function(logging) {
                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logging, "logging");
                    if (isLogger(logging)) {
                        this.logger = logging;
                    } else {
                        this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_4__["ConsoleLogger"](logging);
                    }
                    return this;
                };
                HubConnectionBuilder.prototype.withUrl = function(url, transportTypeOrOptions) {
                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                    this.url = url;
                    if (typeof transportTypeOrOptions === "object") {
                        this.httpConnectionOptions = transportTypeOrOptions;
                    } else {
                        this.httpConnectionOptions = {
                            transport: transportTypeOrOptions,
                        };
                    }
                    return this;
                };
                HubConnectionBuilder.prototype.withHubProtocol = function(protocol) {
                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
                    this.protocol = protocol;
                    return this;
                };
                HubConnectionBuilder.prototype.build = function() {
                    var httpConnectionOptions = this.httpConnectionOptions || {};
                    if (httpConnectionOptions.logger === undefined) {
                        httpConnectionOptions.logger = this.logger;
                    }
                    if (!this.url) {
                        throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                    }
                    var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_0__["HttpConnection"](this.url, httpConnectionOptions);
                    return _HubConnection__WEBPACK_IMPORTED_MODULE_1__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__["JsonHubProtocol"]());
                };
                return HubConnectionBuilder;
            }());

            function isLogger(logger) {
                return logger.log !== undefined;
            }
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HttpConnection", function() {
                return HttpConnection;
            });
            var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
            var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
            var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
            var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
            var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
            var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
            var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var MAX_REDIRECTS = 100;
            var HttpConnection = (function() {
                function HttpConnection(url, options) {
                    if (options === void 0) {
                        options = {};
                    }
                    this.features = {};
                    _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
                    this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
                    this.baseUrl = this.resolveUrl(url);
                    options = options || {};
                    options.accessTokenFactory = options.accessTokenFactory || (function() {
                        return null;
                    });
                    options.logMessageContent = options.logMessageContent || false;
                    this.httpClient = options.httpClient || new _HttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
                    this.connectionState = 2;
                    this.options = options;
                }
                HttpConnection.prototype.start = function(transferFormat) {
                    transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
                    _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
                    if (this.connectionState !== 2) {
                        return Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state."));
                    }
                    this.connectionState = 0;
                    this.startPromise = this.startInternal(transferFormat);
                    return this.startPromise;
                };
                HttpConnection.prototype.send = function(data) {
                    if (this.connectionState !== 1) {
                        throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
                    }
                    return this.transport.send(data);
                };
                HttpConnection.prototype.stop = function(error) {
                    return __awaiter(this, void 0, void 0, function() {
                        var e_1;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    this.connectionState = 2;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4, this.startPromise];
                                case 2:
                                    _a.sent();
                                    return [3, 4];
                                case 3:
                                    e_1 = _a.sent();
                                    return [3, 4];
                                case 4:
                                    if (!this.transport) return [3, 6];
                                    this.stopError = error;
                                    return [4, this.transport.stop()];
                                case 5:
                                    _a.sent();
                                    this.transport = null;
                                    _a.label = 6;
                                case 6:
                                    return [2];
                            }
                        });
                    });
                };
                HttpConnection.prototype.startInternal = function(transferFormat) {
                    return __awaiter(this, void 0, void 0, function() {
                        var url, negotiateResponse, redirects, _loop_1, this_1, state_1, e_2;
                        var _this = this;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    url = this.baseUrl;
                                    this.accessTokenFactory = this.options.accessTokenFactory;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 12, , 13]);
                                    if (!this.options.skipNegotiation) return [3, 5];
                                    if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3, 3];
                                    this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                                    return [4, this.transport.connect(url, transferFormat)];
                                case 2:
                                    _a.sent();
                                    return [3, 4];
                                case 3:
                                    throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                                case 4:
                                    return [3, 11];
                                case 5:
                                    negotiateResponse = null;
                                    redirects = 0;
                                    _loop_1 = function() {
                                        var accessToken_1;
                                        return __generator(this, function(_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    return [4, this_1.getNegotiationResponse(url)];
                                                case 1:
                                                    negotiateResponse = _a.sent();
                                                    if (this_1.connectionState === 2) {
                                                        return [2, {
                                                            value: void 0
                                                        }];
                                                    }
                                                    if (negotiateResponse.url) {
                                                        url = negotiateResponse.url;
                                                    }
                                                    if (negotiateResponse.accessToken) {
                                                        accessToken_1 = negotiateResponse.accessToken;
                                                        this_1.accessTokenFactory = function() {
                                                            return accessToken_1;
                                                        };
                                                    }
                                                    redirects++;
                                                    return [2];
                                            }
                                        });
                                    };
                                    this_1 = this;
                                    _a.label = 6;
                                case 6:
                                    return [5, _loop_1()];
                                case 7:
                                    state_1 = _a.sent();
                                    if (typeof state_1 === "object")
                                        return [2, state_1.value];
                                    _a.label = 8;
                                case 8:
                                    if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3, 6];
                                    _a.label = 9;
                                case 9:
                                    if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                                        throw Error("Negotiate redirection limit exceeded.");
                                    }
                                    return [4, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                                case 10:
                                    _a.sent();
                                    _a.label = 11;
                                case 11:
                                    if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                                        this.features.inherentKeepAlive = true;
                                    }
                                    this.transport.onreceive = this.onreceive;
                                    this.transport.onclose = function(e) {
                                        return _this.stopConnection(e);
                                    };
                                    this.changeState(0, 1);
                                    return [3, 13];
                                case 12:
                                    e_2 = _a.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_2);
                                    this.connectionState = 2;
                                    this.transport = null;
                                    throw e_2;
                                case 13:
                                    return [2];
                            }
                        });
                    });
                };
                HttpConnection.prototype.getNegotiationResponse = function(url) {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a, token, headers, negotiateUrl, response, e_3;
                        return __generator(this, function(_b) {
                            switch (_b.label) {
                                case 0:
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    token = _b.sent();
                                    if (token) {
                                        headers = (_a = {}, _a["Authorization"] = "Bearer " + token, _a);
                                    }
                                    negotiateUrl = this.resolveNegotiateUrl(url);
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl);
                                    _b.label = 2;
                                case 2:
                                    _b.trys.push([2, 4, , 5]);
                                    return [4, this.httpClient.post(negotiateUrl, {
                                        content: "",
                                        headers: headers,
                                    })];
                                case 3:
                                    response = _b.sent();
                                    if (response.statusCode !== 200) {
                                        throw Error("Unexpected status code returned from negotiate " + response.statusCode);
                                    }
                                    return [2, JSON.parse(response.content)];
                                case 4:
                                    e_3 = _b.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_3);
                                    throw e_3;
                                case 5:
                                    return [2];
                            }
                        });
                    });
                };
                HttpConnection.prototype.createConnectUrl = function(url, connectionId) {
                    return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
                };
                HttpConnection.prototype.createTransport = function(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
                    return __awaiter(this, void 0, void 0, function() {
                        var connectUrl, transports, _i, transports_1, endpoint, transport, ex_1;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                                    if (!this.isITransport(requestedTransport)) return [3, 2];
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                                    this.transport = requestedTransport;
                                    return [4, this.transport.connect(connectUrl, requestedTransferFormat)];
                                case 1:
                                    _a.sent();
                                    this.changeState(0, 1);
                                    return [2];
                                case 2:
                                    transports = negotiateResponse.availableTransports;
                                    _i = 0, transports_1 = transports;
                                    _a.label = 3;
                                case 3:
                                    if (!(_i < transports_1.length)) return [3, 9];
                                    endpoint = transports_1[_i];
                                    this.connectionState = 0;
                                    transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat);
                                    if (!(typeof transport === "number")) return [3, 8];
                                    this.transport = this.constructTransport(transport);
                                    if (!(negotiateResponse.connectionId === null)) return [3, 5];
                                    return [4, this.getNegotiationResponse(url)];
                                case 4:
                                    negotiateResponse = _a.sent();
                                    connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                                    _a.label = 5;
                                case 5:
                                    _a.trys.push([5, 7, , 8]);
                                    return [4, this.transport.connect(connectUrl, requestedTransferFormat)];
                                case 6:
                                    _a.sent();
                                    this.changeState(0, 1);
                                    return [2];
                                case 7:
                                    ex_1 = _a.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "': " + ex_1);
                                    this.connectionState = 2;
                                    negotiateResponse.connectionId = null;
                                    return [3, 8];
                                case 8:
                                    _i++;
                                    return [3, 3];
                                case 9:
                                    throw new Error("Unable to initialize any of the available transports.");
                            }
                        });
                    });
                };
                HttpConnection.prototype.constructTransport = function(transport) {
                    switch (transport) {
                        case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                            return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                            return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                            return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
                        default:
                            throw new Error("Unknown transport: " + transport + ".");
                    }
                };
                HttpConnection.prototype.resolveTransport = function(endpoint, requestedTransport, requestedTransferFormat) {
                    var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
                    if (transport === null || transport === undefined) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
                    } else {
                        var transferFormats = endpoint.transferFormats.map(function(s) {
                            return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s];
                        });
                        if (transportMatches(requestedTransport, transport)) {
                            if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                                if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && typeof WebSocket === "undefined") || (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && typeof EventSource === "undefined")) {
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                                } else {
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'");
                                    return transport;
                                }
                            } else {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                            }
                        } else {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
                        }
                    }
                    return null;
                };
                HttpConnection.prototype.isITransport = function(transport) {
                    return transport && typeof(transport) === "object" && "connect" in transport;
                };
                HttpConnection.prototype.changeState = function(from, to) {
                    if (this.connectionState === from) {
                        this.connectionState = to;
                        return true;
                    }
                    return false;
                };
                HttpConnection.prototype.stopConnection = function(error) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            this.transport = null;
                            error = this.stopError || error;
                            if (error) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
                            } else {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
                            }
                            this.connectionState = 2;
                            if (this.onclose) {
                                this.onclose(error);
                            }
                            return [2];
                        });
                    });
                };
                HttpConnection.prototype.resolveUrl = function(url) {
                    if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
                        return url;
                    }
                    if (typeof window === "undefined" || !window || !window.document) {
                        throw new Error("Cannot resolve '" + url + "'.");
                    }
                    var aTag = window.document.createElement("a");
                    aTag.href = url;
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
                    return aTag.href;
                };
                HttpConnection.prototype.resolveNegotiateUrl = function(url) {
                    var index = url.indexOf("?");
                    var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
                    if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
                        negotiateUrl += "/";
                    }
                    negotiateUrl += "negotiate";
                    negotiateUrl += index === -1 ? "" : url.substring(index);
                    return negotiateUrl;
                };
                return HttpConnection;
            }());

            function transportMatches(requestedTransport, actualTransport) {
                return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
            }
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() {
                return HttpTransportType;
            });
            __webpack_require__.d(__webpack_exports__, "TransferFormat", function() {
                return TransferFormat;
            });
            var HttpTransportType;
            (function(HttpTransportType) {
                HttpTransportType[HttpTransportType["None"] = 0] = "None";
                HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
                HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
                HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
            })(HttpTransportType || (HttpTransportType = {}));
            var TransferFormat;
            (function(TransferFormat) {
                TransferFormat[TransferFormat["Text"] = 1] = "Text";
                TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
            })(TransferFormat || (TransferFormat = {}));
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() {
                return LongPollingTransport;
            });
            var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
            var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
            var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
            var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
            var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var SHUTDOWN_TIMEOUT = 5 * 1000;
            var LongPollingTransport = (function() {
                function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent, shutdownTimeout) {
                    this.httpClient = httpClient;
                    this.accessTokenFactory = accessTokenFactory || (function() {
                        return null;
                    });
                    this.logger = logger;
                    this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
                    this.logMessageContent = logMessageContent;
                    this.shutdownTimeout = shutdownTimeout || SHUTDOWN_TIMEOUT;
                }
                Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
                    get: function() {
                        return this.pollAbort.aborted;
                    },
                    enumerable: true,
                    configurable: true
                });
                LongPollingTransport.prototype.connect = function(url, transferFormat) {
                    return __awaiter(this, void 0, void 0, function() {
                        var pollOptions, token, closeError, pollUrl, response;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                                    _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                                    this.url = url;
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting");
                                    if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary && (typeof new XMLHttpRequest().responseType !== "string")) {
                                        throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                                    }
                                    pollOptions = {
                                        abortSignal: this.pollAbort.signal,
                                        headers: {},
                                        timeout: 90000,
                                    };
                                    if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                                        pollOptions.responseType = "arraybuffer";
                                    }
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    token = _a.sent();
                                    this.updateHeaderToken(pollOptions, token);
                                    pollUrl = url + "&_=" + Date.now();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl);
                                    return [4, this.httpClient.get(pollUrl, pollOptions)];
                                case 2:
                                    response = _a.sent();
                                    if (response.statusCode !== 200) {
                                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode);
                                        closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText, response.statusCode);
                                        this.running = false;
                                    } else {
                                        this.running = true;
                                    }
                                    this.poll(this.url, pollOptions, closeError);
                                    return [2, Promise.resolve()];
                            }
                        });
                    });
                };
                LongPollingTransport.prototype.updateHeaderToken = function(request, token) {
                    if (token) {
                        request.headers["Authorization"] = "Bearer " + token;
                        return;
                    }
                    if (request.headers["Authorization"]) {
                        delete request.headers["Authorization"];
                    }
                };
                LongPollingTransport.prototype.poll = function(url, pollOptions, closeError) {
                    return __awaiter(this, void 0, void 0, function() {
                        var token, pollUrl, response, e_1;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, , 8, 9]);
                                    _a.label = 1;
                                case 1:
                                    if (!this.running) return [3, 7];
                                    return [4, this.accessTokenFactory()];
                                case 2:
                                    token = _a.sent();
                                    this.updateHeaderToken(pollOptions, token);
                                    _a.label = 3;
                                case 3:
                                    _a.trys.push([3, 5, , 6]);
                                    pollUrl = url + "&_=" + Date.now();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl);
                                    return [4, this.httpClient.get(pollUrl, pollOptions)];
                                case 4:
                                    response = _a.sent();
                                    if (response.statusCode === 204) {
                                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server");
                                        this.running = false;
                                    } else if (response.statusCode !== 200) {
                                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode);
                                        closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText, response.statusCode);
                                        this.running = false;
                                    } else {
                                        if (response.content) {
                                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent));
                                            if (this.onreceive) {
                                                this.onreceive(response.content);
                                            }
                                        } else {
                                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                                        }
                                    }
                                    return [3, 6];
                                case 5:
                                    e_1 = _a.sent();
                                    if (!this.running) {
                                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                                    } else {
                                        if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                                        } else {
                                            closeError = e_1;
                                            this.running = false;
                                        }
                                    }
                                    return [3, 6];
                                case 6:
                                    return [3, 1];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    this.stopped = true;
                                    if (this.shutdownTimer) {
                                        clearTimeout(this.shutdownTimer);
                                    }
                                    if (this.onclose) {
                                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Firing onclose event. Error: " + (closeError || "<undefined>"));
                                        this.onclose(closeError);
                                    }
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Transport finished.");
                                    return [7];
                                case 9:
                                    return [2];
                            }
                        });
                    });
                };
                LongPollingTransport.prototype.send = function(data) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            if (!this.running) {
                                return [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
                            }
                            return [2, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
                        });
                    });
                };
                LongPollingTransport.prototype.stop = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var deleteOptions, token;
                        var _this = this;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, , 3, 4]);
                                    this.running = false;
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                                    deleteOptions = {
                                        headers: {},
                                    };
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    token = _a.sent();
                                    this.updateHeaderToken(deleteOptions, token);
                                    return [4, this.httpClient.delete(this.url, deleteOptions)];
                                case 2:
                                    _a.sent();
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request accepted.");
                                    return [3, 4];
                                case 3:
                                    if (!this.stopped) {
                                        this.shutdownTimer = setTimeout(function() {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "(LongPolling transport) server did not terminate after DELETE request, canceling poll.");
                                            _this.pollAbort.abort();
                                        }, this.shutdownTimeout);
                                    }
                                    return [7];
                                case 4:
                                    return [2];
                            }
                        });
                    });
                };
                return LongPollingTransport;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "AbortController", function() {
                return AbortController;
            });
            var AbortController = (function() {
                function AbortController() {
                    this.isAborted = false;
                }
                AbortController.prototype.abort = function() {
                    if (!this.isAborted) {
                        this.isAborted = true;
                        if (this.onabort) {
                            this.onabort();
                        }
                    }
                };
                Object.defineProperty(AbortController.prototype, "signal", {
                    get: function() {
                        return this;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbortController.prototype, "aborted", {
                    get: function() {
                        return this.isAborted;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AbortController;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() {
                return ServerSentEventsTransport;
            });
            var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
            var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
            var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var ServerSentEventsTransport = (function() {
                function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
                    this.httpClient = httpClient;
                    this.accessTokenFactory = accessTokenFactory || (function() {
                        return null;
                    });
                    this.logger = logger;
                    this.logMessageContent = logMessageContent;
                }
                ServerSentEventsTransport.prototype.connect = function(url, transferFormat) {
                    return __awaiter(this, void 0, void 0, function() {
                        var token;
                        var _this = this;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                                    if (typeof(EventSource) === "undefined") {
                                        throw new Error("'EventSource' is not supported in your environment.");
                                    }
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting");
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    token = _a.sent();
                                    if (token) {
                                        url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                                    }
                                    this.url = url;
                                    return [2, new Promise(function(resolve, reject) {
                                        var opened = false;
                                        if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                            reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                        }
                                        var eventSource = new EventSource(url, {
                                            withCredentials: true
                                        });
                                        try {
                                            eventSource.onmessage = function(e) {
                                                if (_this.onreceive) {
                                                    try {
                                                        _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                                        _this.onreceive(e.data);
                                                    } catch (error) {
                                                        if (_this.onclose) {
                                                            _this.onclose(error);
                                                        }
                                                        return;
                                                    }
                                                }
                                            };
                                            eventSource.onerror = function(e) {
                                                var error = new Error(e.message || "Error occurred");
                                                if (opened) {
                                                    _this.close(error);
                                                } else {
                                                    reject(error);
                                                }
                                            };
                                            eventSource.onopen = function() {
                                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                                _this.eventSource = eventSource;
                                                opened = true;
                                                resolve();
                                            };
                                        } catch (e) {
                                            return Promise.reject(e);
                                        }
                                    })];
                            }
                        });
                    });
                };
                ServerSentEventsTransport.prototype.send = function(data) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            if (!this.eventSource) {
                                return [2, Promise.reject(new Error("Cannot send until the transport is connected"))];
                            }
                            return [2, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
                        });
                    });
                };
                ServerSentEventsTransport.prototype.stop = function() {
                    this.close();
                    return Promise.resolve();
                };
                ServerSentEventsTransport.prototype.close = function(e) {
                    if (this.eventSource) {
                        this.eventSource.close();
                        this.eventSource = null;
                        if (this.onclose) {
                            this.onclose(e);
                        }
                    }
                };
                return ServerSentEventsTransport;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() {
                return WebSocketTransport;
            });
            var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
            var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
            var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
            var __awaiter = (undefined && undefined.__awaiter) || function(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function(resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;

                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var WebSocketTransport = (function() {
                function WebSocketTransport(accessTokenFactory, logger, logMessageContent) {
                    this.logger = logger;
                    this.accessTokenFactory = accessTokenFactory || (function() {
                        return null;
                    });
                    this.logMessageContent = logMessageContent;
                }
                WebSocketTransport.prototype.connect = function(url, transferFormat) {
                    return __awaiter(this, void 0, void 0, function() {
                        var token;
                        var _this = this;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                                    _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                                    if (typeof(WebSocket) === "undefined") {
                                        throw new Error("'WebSocket' is not supported in your environment.");
                                    }
                                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting");
                                    return [4, this.accessTokenFactory()];
                                case 1:
                                    token = _a.sent();
                                    if (token) {
                                        url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                                    }
                                    return [2, new Promise(function(resolve, reject) {
                                        url = url.replace(/^http/, "ws");
                                        var webSocket = new WebSocket(url);
                                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                            webSocket.binaryType = "arraybuffer";
                                        }
                                        webSocket.onopen = function(_event) {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url);
                                            _this.webSocket = webSocket;
                                            resolve();
                                        };
                                        webSocket.onerror = function(event) {
                                            reject(event.error);
                                        };
                                        webSocket.onmessage = function(message) {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                            if (_this.onreceive) {
                                                _this.onreceive(message.data);
                                            }
                                        };
                                        webSocket.onclose = function(event) {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
                                            if (_this.onclose) {
                                                if (event.wasClean === false || event.code !== 1000) {
                                                    _this.onclose(new Error("Websocket closed with status code: " + event.code + " (" + event.reason + ")"));
                                                } else {
                                                    _this.onclose();
                                                }
                                            }
                                        };
                                    })];
                            }
                        });
                    });
                };
                WebSocketTransport.prototype.send = function(data) {
                    if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
                        this.webSocket.send(data);
                        return Promise.resolve();
                    }
                    return Promise.reject("WebSocket is not in the OPEN state");
                };
                WebSocketTransport.prototype.stop = function() {
                    if (this.webSocket) {
                        this.webSocket.close();
                        this.webSocket = null;
                    }
                    return Promise.resolve();
                };
                return WebSocketTransport;
            }());
        }), (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() {
                return JsonHubProtocol;
            });
            var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
            var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
            var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
            var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
            var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
            var JSON_HUB_PROTOCOL_NAME = "json";
            var JsonHubProtocol = (function() {
                function JsonHubProtocol() {
                    this.name = JSON_HUB_PROTOCOL_NAME;
                    this.version = 1;
                    this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
                }
                JsonHubProtocol.prototype.parseMessages = function(input, logger) {
                    if (typeof input !== "string") {
                        throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                    }
                    if (!input) {
                        return [];
                    }
                    if (logger === null) {
                        logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
                    }
                    var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
                    var hubMessages = [];
                    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                        var message = messages_1[_i];
                        var parsedMessage = JSON.parse(message);
                        if (typeof parsedMessage.type !== "number") {
                            throw new Error("Invalid payload.");
                        }
                        switch (parsedMessage.type) {
                            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                                this.isInvocationMessage(parsedMessage);
                                break;
                            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                                this.isStreamItemMessage(parsedMessage);
                                break;
                            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                                this.isCompletionMessage(parsedMessage);
                                break;
                            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                                break;
                            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                                break;
                            default:
                                logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                                continue;
                        }
                        hubMessages.push(parsedMessage);
                    }
                    return hubMessages;
                };
                JsonHubProtocol.prototype.writeMessage = function(message) {
                    return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
                };
                JsonHubProtocol.prototype.isInvocationMessage = function(message) {
                    this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
                    if (message.invocationId !== undefined) {
                        this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
                    }
                };
                JsonHubProtocol.prototype.isStreamItemMessage = function(message) {
                    this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
                    if (message.item === undefined) {
                        throw new Error("Invalid payload for StreamItem message.");
                    }
                };
                JsonHubProtocol.prototype.isCompletionMessage = function(message) {
                    if (message.result && message.error) {
                        throw new Error("Invalid payload for Completion message.");
                    }
                    if (!message.result && message.error) {
                        this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
                    }
                    this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
                };
                JsonHubProtocol.prototype.assertNotEmptyString = function(value, errorMessage) {
                    if (typeof value !== "string" || value === "") {
                        throw new Error(errorMessage);
                    }
                };
                return JsonHubProtocol;
            }());
        })]);
});