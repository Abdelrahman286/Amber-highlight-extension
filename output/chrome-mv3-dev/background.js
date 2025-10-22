var background = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineBackground(arg) {
    if (arg == null || typeof arg === "function") return { main: arg };
    return arg;
  }
  const browser$1 = ((_b = (_a = globalThis.browser) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id) ? globalThis.browser : globalThis.chrome;
  const browser = browser$1;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var dexie$1 = { exports: {} };
  var dexie = dexie$1.exports;
  var hasRequiredDexie;
  function requireDexie() {
    if (hasRequiredDexie) return dexie$1.exports;
    hasRequiredDexie = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory();
      })(dexie, function() {
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __spreadArray(to, from, pack) {
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || Array.prototype.slice.call(from));
        }
        var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : commonjsGlobal;
        var keys = Object.keys;
        var isArray = Array.isArray;
        if (typeof Promise !== "undefined" && !_global.Promise) {
          _global.Promise = Promise;
        }
        function extend(obj, extension) {
          if (typeof extension !== "object")
            return obj;
          keys(extension).forEach(function(key) {
            obj[key] = extension[key];
          });
          return obj;
        }
        var getProto = Object.getPrototypeOf;
        var _hasOwn = {}.hasOwnProperty;
        function hasOwn(obj, prop) {
          return _hasOwn.call(obj, prop);
        }
        function props(proto, extension) {
          if (typeof extension === "function")
            extension = extension(getProto(proto));
          (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
            setProp(proto, key, extension[key]);
          });
        }
        var defineProperty = Object.defineProperty;
        function setProp(obj, prop, functionOrGetSet, options) {
          defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
        }
        function derive(Child) {
          return {
            from: function(Parent) {
              Child.prototype = Object.create(Parent.prototype);
              setProp(Child.prototype, "constructor", Child);
              return {
                extend: props.bind(null, Child.prototype)
              };
            }
          };
        }
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        function getPropertyDescriptor(obj, prop) {
          var pd = getOwnPropertyDescriptor(obj, prop);
          var proto;
          return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
        }
        var _slice = [].slice;
        function slice(args, start, end) {
          return _slice.call(args, start, end);
        }
        function override(origFunc, overridedFactory) {
          return overridedFactory(origFunc);
        }
        function assert(b) {
          if (!b)
            throw new Error("Assertion Failed");
        }
        function asap$1(fn) {
          if (_global.setImmediate)
            setImmediate(fn);
          else
            setTimeout(fn, 0);
        }
        function arrayToObject(array, extractor) {
          return array.reduce(function(result2, item, i) {
            var nameAndValue = extractor(item, i);
            if (nameAndValue)
              result2[nameAndValue[0]] = nameAndValue[1];
            return result2;
          }, {});
        }
        function getByKeyPath(obj, keyPath) {
          if (typeof keyPath === "string" && hasOwn(obj, keyPath))
            return obj[keyPath];
          if (!keyPath)
            return obj;
          if (typeof keyPath !== "string") {
            var rv = [];
            for (var i = 0, l = keyPath.length; i < l; ++i) {
              var val = getByKeyPath(obj, keyPath[i]);
              rv.push(val);
            }
            return rv;
          }
          var period = keyPath.indexOf(".");
          if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
          }
          return void 0;
        }
        function setByKeyPath(obj, keyPath, value) {
          if (!obj || keyPath === void 0)
            return;
          if ("isFrozen" in Object && Object.isFrozen(obj))
            return;
          if (typeof keyPath !== "string" && "length" in keyPath) {
            assert(typeof value !== "string" && "length" in value);
            for (var i = 0, l = keyPath.length; i < l; ++i) {
              setByKeyPath(obj, keyPath[i], value[i]);
            }
          } else {
            var period = keyPath.indexOf(".");
            if (period !== -1) {
              var currentKeyPath = keyPath.substr(0, period);
              var remainingKeyPath = keyPath.substr(period + 1);
              if (remainingKeyPath === "")
                if (value === void 0) {
                  if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                    obj.splice(currentKeyPath, 1);
                  else
                    delete obj[currentKeyPath];
                } else
                  obj[currentKeyPath] = value;
              else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj || !hasOwn(obj, currentKeyPath))
                  innerObj = obj[currentKeyPath] = {};
                setByKeyPath(innerObj, remainingKeyPath, value);
              }
            } else {
              if (value === void 0) {
                if (isArray(obj) && !isNaN(parseInt(keyPath)))
                  obj.splice(keyPath, 1);
                else
                  delete obj[keyPath];
              } else
                obj[keyPath] = value;
            }
          }
        }
        function delByKeyPath(obj, keyPath) {
          if (typeof keyPath === "string")
            setByKeyPath(obj, keyPath, void 0);
          else if ("length" in keyPath)
            [].map.call(keyPath, function(kp) {
              setByKeyPath(obj, kp, void 0);
            });
        }
        function shallowClone(obj) {
          var rv = {};
          for (var m in obj) {
            if (hasOwn(obj, m))
              rv[m] = obj[m];
          }
          return rv;
        }
        var concat = [].concat;
        function flatten(a) {
          return concat.apply([], a);
        }
        var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
          return ["Int", "Uint", "Float"].map(function(t) {
            return t + num + "Array";
          });
        }))).filter(function(t) {
          return _global[t];
        });
        var intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
          return _global[t];
        }));
        function cloneSimpleObjectTree(o) {
          var rv = {};
          for (var k in o)
            if (hasOwn(o, k)) {
              var v = o[k];
              rv[k] = !v || typeof v !== "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
            }
          return rv;
        }
        function objectIsEmpty(o) {
          for (var k in o)
            if (hasOwn(o, k))
              return false;
          return true;
        }
        var circularRefs = null;
        function deepClone(any) {
          circularRefs = /* @__PURE__ */ new WeakMap();
          var rv = innerDeepClone(any);
          circularRefs = null;
          return rv;
        }
        function innerDeepClone(x) {
          if (!x || typeof x !== "object")
            return x;
          var rv = circularRefs.get(x);
          if (rv)
            return rv;
          if (isArray(x)) {
            rv = [];
            circularRefs.set(x, rv);
            for (var i = 0, l = x.length; i < l; ++i) {
              rv.push(innerDeepClone(x[i]));
            }
          } else if (intrinsicTypes.has(x.constructor)) {
            rv = x;
          } else {
            var proto = getProto(x);
            rv = proto === Object.prototype ? {} : Object.create(proto);
            circularRefs.set(x, rv);
            for (var prop in x) {
              if (hasOwn(x, prop)) {
                rv[prop] = innerDeepClone(x[prop]);
              }
            }
          }
          return rv;
        }
        var toString = {}.toString;
        function toStringTag(o) {
          return toString.call(o).slice(8, -1);
        }
        var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
        var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
          var i;
          return x != null && (i = x[iteratorSymbol]) && i.apply(x);
        } : function() {
          return null;
        };
        function delArrayItem(a, x) {
          var i = a.indexOf(x);
          if (i >= 0)
            a.splice(i, 1);
          return i >= 0;
        }
        var NO_CHAR_ARRAY = {};
        function getArrayOf(arrayLike) {
          var i, a, x, it;
          if (arguments.length === 1) {
            if (isArray(arrayLike))
              return arrayLike.slice();
            if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
              return [arrayLike];
            if (it = getIteratorOf(arrayLike)) {
              a = [];
              while (x = it.next(), !x.done)
                a.push(x.value);
              return a;
            }
            if (arrayLike == null)
              return [arrayLike];
            i = arrayLike.length;
            if (typeof i === "number") {
              a = new Array(i);
              while (i--)
                a[i] = arrayLike[i];
              return a;
            }
            return [arrayLike];
          }
          i = arguments.length;
          a = new Array(i);
          while (i--)
            a[i] = arguments[i];
          return a;
        }
        var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn) {
          return fn[Symbol.toStringTag] === "AsyncFunction";
        } : function() {
          return false;
        };
        var dexieErrorNames = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ];
        var idbDomErrorNames = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ];
        var errorList = dexieErrorNames.concat(idbDomErrorNames);
        var defaultTexts = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed",
          MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function DexieError(name, msg) {
          this.name = name;
          this.message = msg;
        }
        derive(DexieError).from(Error).extend({
          toString: function() {
            return this.name + ": " + this.message;
          }
        });
        function getMultiErrorMessage(msg, failures) {
          return msg + ". Errors: " + Object.keys(failures).map(function(key) {
            return failures[key].toString();
          }).filter(function(v, i, s) {
            return s.indexOf(v) === i;
          }).join("\n");
        }
        function ModifyError(msg, failures, successCount, failedKeys) {
          this.failures = failures;
          this.failedKeys = failedKeys;
          this.successCount = successCount;
          this.message = getMultiErrorMessage(msg, failures);
        }
        derive(ModifyError).from(DexieError);
        function BulkError(msg, failures) {
          this.name = "BulkError";
          this.failures = Object.keys(failures).map(function(pos) {
            return failures[pos];
          });
          this.failuresByPos = failures;
          this.message = getMultiErrorMessage(msg, this.failures);
        }
        derive(BulkError).from(DexieError);
        var errnames = errorList.reduce(function(obj, name) {
          return obj[name] = name + "Error", obj;
        }, {});
        var BaseException = DexieError;
        var exceptions = errorList.reduce(function(obj, name) {
          var fullName = name + "Error";
          function DexieError2(msgOrInner, inner) {
            this.name = fullName;
            if (!msgOrInner) {
              this.message = defaultTexts[name] || fullName;
              this.inner = null;
            } else if (typeof msgOrInner === "string") {
              this.message = "".concat(msgOrInner).concat(!inner ? "" : "\n " + inner);
              this.inner = inner || null;
            } else if (typeof msgOrInner === "object") {
              this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message);
              this.inner = msgOrInner;
            }
          }
          derive(DexieError2).from(BaseException);
          obj[name] = DexieError2;
          return obj;
        }, {});
        exceptions.Syntax = SyntaxError;
        exceptions.Type = TypeError;
        exceptions.Range = RangeError;
        var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
          obj[name + "Error"] = exceptions[name];
          return obj;
        }, {});
        function mapError(domError, message) {
          if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
            return domError;
          var rv = new exceptionMap[domError.name](message || domError.message, domError);
          if ("stack" in domError) {
            setProp(rv, "stack", { get: function() {
              return this.inner.stack;
            } });
          }
          return rv;
        }
        var fullNameExceptions = errorList.reduce(function(obj, name) {
          if (["Syntax", "Type", "Range"].indexOf(name) === -1)
            obj[name + "Error"] = exceptions[name];
          return obj;
        }, {});
        fullNameExceptions.ModifyError = ModifyError;
        fullNameExceptions.DexieError = DexieError;
        fullNameExceptions.BulkError = BulkError;
        function nop() {
        }
        function mirror(val) {
          return val;
        }
        function pureFunctionChain(f1, f2) {
          if (f1 == null || f1 === mirror)
            return f2;
          return function(val) {
            return f2(f1(val));
          };
        }
        function callBoth(on1, on2) {
          return function() {
            on1.apply(this, arguments);
            on2.apply(this, arguments);
          };
        }
        function hookCreatingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            var res = f1.apply(this, arguments);
            if (res !== void 0)
              arguments[0] = res;
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res2 !== void 0 ? res2 : res;
          };
        }
        function hookDeletingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            f1.apply(this, arguments);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = this.onerror = null;
            f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          };
        }
        function hookUpdatingChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function(modifications) {
            var res = f1.apply(this, arguments);
            extend(modifications, res);
            var onsuccess = this.onsuccess, onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess)
              this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror)
              this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
          };
        }
        function reverseStoppableEventChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            if (f2.apply(this, arguments) === false)
              return false;
            return f1.apply(this, arguments);
          };
        }
        function promisableChain(f1, f2) {
          if (f1 === nop)
            return f2;
          return function() {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then === "function") {
              var thiz = this, i = arguments.length, args = new Array(i);
              while (i--)
                args[i] = arguments[i];
              return res.then(function() {
                return f2.apply(thiz, args);
              });
            }
            return f2.apply(this, arguments);
          };
        }
        var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function setDebug(value, filter) {
          debug = value;
        }
        var INTERNAL = {};
        var ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function() {
          var globalP = Promise.resolve();
          if (typeof crypto === "undefined" || !crypto.subtle)
            return [globalP, getProto(globalP), globalP];
          var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
          return [
            nativeP,
            getProto(nativeP),
            globalP
          ];
        }(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
        var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
        var patchGlobalPromise = !!resolvedGlobalPromise;
        function schedulePhysicalTick() {
          queueMicrotask(physicalTick);
        }
        var asap = function(callback, args) {
          microtickQueue.push([callback, args]);
          if (needsNewPhysicalTick) {
            schedulePhysicalTick();
            needsNewPhysicalTick = false;
          }
        };
        var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror;
        var globalPSD = {
          id: "global",
          global: true,
          ref: 0,
          unhandleds: [],
          onunhandled: nop,
          pgp: false,
          env: {},
          finalize: nop
        };
        var PSD = globalPSD;
        var microtickQueue = [];
        var numScheduledCalls = 0;
        var tickFinalizers = [];
        function DexiePromise(fn) {
          if (typeof this !== "object")
            throw new TypeError("Promises must be constructed via new");
          this._listeners = [];
          this._lib = false;
          var psd = this._PSD = PSD;
          if (typeof fn !== "function") {
            if (fn !== INTERNAL)
              throw new TypeError("Not a function");
            this._state = arguments[1];
            this._value = arguments[2];
            if (this._state === false)
              handleRejection(this, this._value);
            return;
          }
          this._state = null;
          this._value = null;
          ++psd.ref;
          executePromiseTask(this, fn);
        }
        var thenProp = {
          get: function() {
            var psd = PSD, microTaskId = totalEchoes;
            function then(onFulfilled, onRejected) {
              var _this = this;
              var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
              var cleanup = possibleAwait && !decrementExpectedAwaits();
              var rv = new DexiePromise(function(resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
              });
              if (this._consoleTask)
                rv._consoleTask = this._consoleTask;
              return rv;
            }
            then.prototype = INTERNAL;
            return then;
          },
          set: function(value) {
            setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
              get: function() {
                return value;
              },
              set: thenProp.set
            });
          }
        };
        props(DexiePromise.prototype, {
          then: thenProp,
          _then: function(onFulfilled, onRejected) {
            propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
          },
          catch: function(onRejected) {
            if (arguments.length === 1)
              return this.then(null, onRejected);
            var type2 = arguments[0], handler = arguments[1];
            return typeof type2 === "function" ? this.then(null, function(err) {
              return err instanceof type2 ? handler(err) : PromiseReject(err);
            }) : this.then(null, function(err) {
              return err && err.name === type2 ? handler(err) : PromiseReject(err);
            });
          },
          finally: function(onFinally) {
            return this.then(function(value) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return value;
              });
            }, function(err) {
              return DexiePromise.resolve(onFinally()).then(function() {
                return PromiseReject(err);
              });
            });
          },
          timeout: function(ms, msg) {
            var _this = this;
            return ms < Infinity ? new DexiePromise(function(resolve, reject) {
              var handle = setTimeout(function() {
                return reject(new exceptions.Timeout(msg));
              }, ms);
              _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
          }
        });
        if (typeof Symbol !== "undefined" && Symbol.toStringTag)
          setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
        globalPSD.env = snapShot();
        function Listener(onFulfilled, onRejected, resolve, reject, zone) {
          this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
          this.onRejected = typeof onRejected === "function" ? onRejected : null;
          this.resolve = resolve;
          this.reject = reject;
          this.psd = zone;
        }
        props(DexiePromise, {
          all: function() {
            var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              if (values.length === 0)
                resolve([]);
              var remaining = values.length;
              values.forEach(function(a, i) {
                return DexiePromise.resolve(a).then(function(x) {
                  values[i] = x;
                  if (!--remaining)
                    resolve(values);
                }, reject);
              });
            });
          },
          resolve: function(value) {
            if (value instanceof DexiePromise)
              return value;
            if (value && typeof value.then === "function")
              return new DexiePromise(function(resolve, reject) {
                value.then(resolve, reject);
              });
            var rv = new DexiePromise(INTERNAL, true, value);
            return rv;
          },
          reject: PromiseReject,
          race: function() {
            var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              values.map(function(value) {
                return DexiePromise.resolve(value).then(resolve, reject);
              });
            });
          },
          PSD: {
            get: function() {
              return PSD;
            },
            set: function(value) {
              return PSD = value;
            }
          },
          totalEchoes: { get: function() {
            return totalEchoes;
          } },
          newPSD: newScope,
          usePSD,
          scheduler: {
            get: function() {
              return asap;
            },
            set: function(value) {
              asap = value;
            }
          },
          rejectionMapper: {
            get: function() {
              return rejectionMapper;
            },
            set: function(value) {
              rejectionMapper = value;
            }
          },
          follow: function(fn, zoneProps) {
            return new DexiePromise(function(resolve, reject) {
              return newScope(function(resolve2, reject2) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject2;
                psd.finalize = callBoth(function() {
                  var _this = this;
                  run_at_end_of_this_or_next_physical_tick(function() {
                    _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
                  });
                }, psd.finalize);
                fn();
              }, zoneProps, resolve, reject);
            });
          }
        });
        if (NativePromise) {
          if (NativePromise.allSettled)
            setProp(DexiePromise, "allSettled", function() {
              var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
              return new DexiePromise(function(resolve) {
                if (possiblePromises.length === 0)
                  resolve([]);
                var remaining = possiblePromises.length;
                var results = new Array(remaining);
                possiblePromises.forEach(function(p, i) {
                  return DexiePromise.resolve(p).then(function(value) {
                    return results[i] = { status: "fulfilled", value };
                  }, function(reason) {
                    return results[i] = { status: "rejected", reason };
                  }).then(function() {
                    return --remaining || resolve(results);
                  });
                });
              });
            });
          if (NativePromise.any && typeof AggregateError !== "undefined")
            setProp(DexiePromise, "any", function() {
              var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
              return new DexiePromise(function(resolve, reject) {
                if (possiblePromises.length === 0)
                  reject(new AggregateError([]));
                var remaining = possiblePromises.length;
                var failures = new Array(remaining);
                possiblePromises.forEach(function(p, i) {
                  return DexiePromise.resolve(p).then(function(value) {
                    return resolve(value);
                  }, function(failure) {
                    failures[i] = failure;
                    if (!--remaining)
                      reject(new AggregateError(failures));
                  });
                });
              });
            });
          if (NativePromise.withResolvers)
            DexiePromise.withResolvers = NativePromise.withResolvers;
        }
        function executePromiseTask(promise, fn) {
          try {
            fn(function(value) {
              if (promise._state !== null)
                return;
              if (value === promise)
                throw new TypeError("A promise cannot be resolved with itself.");
              var shouldExecuteTick = promise._lib && beginMicroTickScope();
              if (value && typeof value.then === "function") {
                executePromiseTask(promise, function(resolve, reject) {
                  value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
                });
              } else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
              }
              if (shouldExecuteTick)
                endMicroTickScope();
            }, handleRejection.bind(null, promise));
          } catch (ex) {
            handleRejection(promise, ex);
          }
        }
        function handleRejection(promise, reason) {
          rejectingErrors.push(reason);
          if (promise._state !== null)
            return;
          var shouldExecuteTick = promise._lib && beginMicroTickScope();
          reason = rejectionMapper(reason);
          promise._state = false;
          promise._value = reason;
          addPossiblyUnhandledError(promise);
          propagateAllListeners(promise);
          if (shouldExecuteTick)
            endMicroTickScope();
        }
        function propagateAllListeners(promise) {
          var listeners = promise._listeners;
          promise._listeners = [];
          for (var i = 0, len = listeners.length; i < len; ++i) {
            propagateToListener(promise, listeners[i]);
          }
          var psd = promise._PSD;
          --psd.ref || psd.finalize();
          if (numScheduledCalls === 0) {
            ++numScheduledCalls;
            asap(function() {
              if (--numScheduledCalls === 0)
                finalizePhysicalTick();
            }, []);
          }
        }
        function propagateToListener(promise, listener) {
          if (promise._state === null) {
            promise._listeners.push(listener);
            return;
          }
          var cb = promise._state ? listener.onFulfilled : listener.onRejected;
          if (cb === null) {
            return (promise._state ? listener.resolve : listener.reject)(promise._value);
          }
          ++listener.psd.ref;
          ++numScheduledCalls;
          asap(callListener, [cb, promise, listener]);
        }
        function callListener(cb, promise, listener) {
          try {
            var ret, value = promise._value;
            if (!promise._state && rejectingErrors.length)
              rejectingErrors = [];
            ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
              return cb(value);
            }) : cb(value);
            if (!promise._state && rejectingErrors.indexOf(value) === -1) {
              markErrorAsHandled(promise);
            }
            listener.resolve(ret);
          } catch (e) {
            listener.reject(e);
          } finally {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
            --listener.psd.ref || listener.psd.finalize();
          }
        }
        function physicalTick() {
          usePSD(globalPSD, function() {
            beginMicroTickScope() && endMicroTickScope();
          });
        }
        function beginMicroTickScope() {
          var wasRootExec = isOutsideMicroTick;
          isOutsideMicroTick = false;
          needsNewPhysicalTick = false;
          return wasRootExec;
        }
        function endMicroTickScope() {
          var callbacks, i, l;
          do {
            while (microtickQueue.length > 0) {
              callbacks = microtickQueue;
              microtickQueue = [];
              l = callbacks.length;
              for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
              }
            }
          } while (microtickQueue.length > 0);
          isOutsideMicroTick = true;
          needsNewPhysicalTick = true;
        }
        function finalizePhysicalTick() {
          var unhandledErrs = unhandledErrors;
          unhandledErrors = [];
          unhandledErrs.forEach(function(p) {
            p._PSD.onunhandled.call(null, p._value, p);
          });
          var finalizers = tickFinalizers.slice(0);
          var i = finalizers.length;
          while (i)
            finalizers[--i]();
        }
        function run_at_end_of_this_or_next_physical_tick(fn) {
          function finalizer() {
            fn();
            tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
          }
          tickFinalizers.push(finalizer);
          ++numScheduledCalls;
          asap(function() {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
          }, []);
        }
        function addPossiblyUnhandledError(promise) {
          if (!unhandledErrors.some(function(p) {
            return p._value === promise._value;
          }))
            unhandledErrors.push(promise);
        }
        function markErrorAsHandled(promise) {
          var i = unhandledErrors.length;
          while (i)
            if (unhandledErrors[--i]._value === promise._value) {
              unhandledErrors.splice(i, 1);
              return;
            }
        }
        function PromiseReject(reason) {
          return new DexiePromise(INTERNAL, false, reason);
        }
        function wrap(fn, errorCatcher) {
          var psd = PSD;
          return function() {
            var wasRootExec = beginMicroTickScope(), outerScope = PSD;
            try {
              switchToZone(psd, true);
              return fn.apply(this, arguments);
            } catch (e) {
              errorCatcher && errorCatcher(e);
            } finally {
              switchToZone(outerScope, false);
              if (wasRootExec)
                endMicroTickScope();
            }
          };
        }
        var task = { awaits: 0, echoes: 0, id: 0 };
        var taskCounter = 0;
        var zoneStack = [];
        var zoneEchoes = 0;
        var totalEchoes = 0;
        var zone_id_counter = 0;
        function newScope(fn, props2, a1, a2) {
          var parent = PSD, psd = Object.create(parent);
          psd.parent = parent;
          psd.ref = 0;
          psd.global = false;
          psd.id = ++zone_id_counter;
          globalPSD.env;
          psd.env = patchGlobalPromise ? {
            Promise: DexiePromise,
            PromiseProp: { value: DexiePromise, configurable: true, writable: true },
            all: DexiePromise.all,
            race: DexiePromise.race,
            allSettled: DexiePromise.allSettled,
            any: DexiePromise.any,
            resolve: DexiePromise.resolve,
            reject: DexiePromise.reject
          } : {};
          if (props2)
            extend(psd, props2);
          ++parent.ref;
          psd.finalize = function() {
            --this.parent.ref || this.parent.finalize();
          };
          var rv = usePSD(psd, fn, a1, a2);
          if (psd.ref === 0)
            psd.finalize();
          return rv;
        }
        function incrementExpectedAwaits() {
          if (!task.id)
            task.id = ++taskCounter;
          ++task.awaits;
          task.echoes += ZONE_ECHO_LIMIT;
          return task.id;
        }
        function decrementExpectedAwaits() {
          if (!task.awaits)
            return false;
          if (--task.awaits === 0)
            task.id = 0;
          task.echoes = task.awaits * ZONE_ECHO_LIMIT;
          return true;
        }
        if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
          incrementExpectedAwaits = decrementExpectedAwaits = nop;
        }
        function onPossibleParallellAsync(possiblePromise) {
          if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
            incrementExpectedAwaits();
            return possiblePromise.then(function(x) {
              decrementExpectedAwaits();
              return x;
            }, function(e) {
              decrementExpectedAwaits();
              return rejection(e);
            });
          }
          return possiblePromise;
        }
        function zoneEnterEcho(targetZone) {
          ++totalEchoes;
          if (!task.echoes || --task.echoes === 0) {
            task.echoes = task.awaits = task.id = 0;
          }
          zoneStack.push(PSD);
          switchToZone(targetZone, true);
        }
        function zoneLeaveEcho() {
          var zone = zoneStack[zoneStack.length - 1];
          zoneStack.pop();
          switchToZone(zone, false);
        }
        function switchToZone(targetZone, bEnteringZone) {
          var currentZone = PSD;
          if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
            queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
          }
          if (targetZone === PSD)
            return;
          PSD = targetZone;
          if (currentZone === globalPSD)
            globalPSD.env = snapShot();
          if (patchGlobalPromise) {
            var GlobalPromise = globalPSD.env.Promise;
            var targetEnv = targetZone.env;
            if (currentZone.global || targetZone.global) {
              Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
              GlobalPromise.all = targetEnv.all;
              GlobalPromise.race = targetEnv.race;
              GlobalPromise.resolve = targetEnv.resolve;
              GlobalPromise.reject = targetEnv.reject;
              if (targetEnv.allSettled)
                GlobalPromise.allSettled = targetEnv.allSettled;
              if (targetEnv.any)
                GlobalPromise.any = targetEnv.any;
            }
          }
        }
        function snapShot() {
          var GlobalPromise = _global.Promise;
          return patchGlobalPromise ? {
            Promise: GlobalPromise,
            PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
            all: GlobalPromise.all,
            race: GlobalPromise.race,
            allSettled: GlobalPromise.allSettled,
            any: GlobalPromise.any,
            resolve: GlobalPromise.resolve,
            reject: GlobalPromise.reject
          } : {};
        }
        function usePSD(psd, fn, a1, a2, a3) {
          var outerScope = PSD;
          try {
            switchToZone(psd, true);
            return fn(a1, a2, a3);
          } finally {
            switchToZone(outerScope, false);
          }
        }
        function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
          return typeof fn !== "function" ? fn : function() {
            var outerZone = PSD;
            if (possibleAwait)
              incrementExpectedAwaits();
            switchToZone(zone, true);
            try {
              return fn.apply(this, arguments);
            } finally {
              switchToZone(outerZone, false);
              if (cleanup)
                queueMicrotask(decrementExpectedAwaits);
            }
          };
        }
        function execInGlobalContext(cb) {
          if (Promise === NativePromise && task.echoes === 0) {
            if (zoneEchoes === 0) {
              cb();
            } else {
              enqueueNativeMicroTask(cb);
            }
          } else {
            setTimeout(cb, 0);
          }
        }
        var rejection = DexiePromise.reject;
        function tempTransaction(db2, mode, storeNames, fn) {
          if (!db2.idbdb || !db2._state.openComplete && (!PSD.letThrough && !db2._vip)) {
            if (db2._state.openComplete) {
              return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
            }
            if (!db2._state.isBeingOpened) {
              if (!db2._state.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
              db2.open().catch(nop);
            }
            return db2._state.dbReadyPromise.then(function() {
              return tempTransaction(db2, mode, storeNames, fn);
            });
          } else {
            var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
            try {
              trans.create();
              db2._state.PR1398_maxLoop = 3;
            } catch (ex) {
              if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db2.close({ disableAutoOpen: false });
                return db2.open().then(function() {
                  return tempTransaction(db2, mode, storeNames, fn);
                });
              }
              return rejection(ex);
            }
            return trans._promise(mode, function(resolve, reject) {
              return newScope(function() {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
              });
            }).then(function(result2) {
              if (mode === "readwrite")
                try {
                  trans.idbtrans.commit();
                } catch (_a3) {
                }
              return mode === "readonly" ? result2 : trans._completion.then(function() {
                return result2;
              });
            });
          }
        }
        var DEXIE_VERSION = "4.2.0";
        var maxString = String.fromCharCode(65535);
        var minKey = -Infinity;
        var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
        var STRING_EXPECTED = "String expected.";
        var connections = [];
        var DBNAMES_DB = "__dbnames";
        var READONLY = "readonly";
        var READWRITE = "readwrite";
        function combine(filter1, filter2) {
          return filter1 ? filter2 ? function() {
            return filter1.apply(this, arguments) && filter2.apply(this, arguments);
          } : filter1 : filter2;
        }
        var AnyRange = {
          type: 3,
          lower: -Infinity,
          lowerOpen: false,
          upper: [[]],
          upperOpen: false
        };
        function workaroundForUndefinedPrimKey(keyPath) {
          return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
            if (obj[keyPath] === void 0 && keyPath in obj) {
              obj = deepClone(obj);
              delete obj[keyPath];
            }
            return obj;
          } : function(obj) {
            return obj;
          };
        }
        function Entity2() {
          throw exceptions.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
        }
        function cmp2(a, b) {
          try {
            var ta = type(a);
            var tb = type(b);
            if (ta !== tb) {
              if (ta === "Array")
                return 1;
              if (tb === "Array")
                return -1;
              if (ta === "binary")
                return 1;
              if (tb === "binary")
                return -1;
              if (ta === "string")
                return 1;
              if (tb === "string")
                return -1;
              if (ta === "Date")
                return 1;
              if (tb !== "Date")
                return NaN;
              return -1;
            }
            switch (ta) {
              case "number":
              case "Date":
              case "string":
                return a > b ? 1 : a < b ? -1 : 0;
              case "binary": {
                return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
              }
              case "Array":
                return compareArrays(a, b);
            }
          } catch (_a3) {
          }
          return NaN;
        }
        function compareArrays(a, b) {
          var al = a.length;
          var bl = b.length;
          var l = al < bl ? al : bl;
          for (var i = 0; i < l; ++i) {
            var res = cmp2(a[i], b[i]);
            if (res !== 0)
              return res;
          }
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        function compareUint8Arrays(a, b) {
          var al = a.length;
          var bl = b.length;
          var l = al < bl ? al : bl;
          for (var i = 0; i < l; ++i) {
            if (a[i] !== b[i])
              return a[i] < b[i] ? -1 : 1;
          }
          return al === bl ? 0 : al < bl ? -1 : 1;
        }
        function type(x) {
          var t = typeof x;
          if (t !== "object")
            return t;
          if (ArrayBuffer.isView(x))
            return "binary";
          var tsTag = toStringTag(x);
          return tsTag === "ArrayBuffer" ? "binary" : tsTag;
        }
        function getUint8Array(a) {
          if (a instanceof Uint8Array)
            return a;
          if (ArrayBuffer.isView(a))
            return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
          return new Uint8Array(a);
        }
        function builtInDeletionTrigger(table, keys2, res) {
          var yProps = table.schema.yProps;
          if (!yProps)
            return res;
          if (keys2 && res.numFailures > 0)
            keys2 = keys2.filter(function(_, i) {
              return !res.failures[i];
            });
          return Promise.all(yProps.map(function(_a3) {
            var updatesTable = _a3.updatesTable;
            return keys2 ? table.db.table(updatesTable).where("k").anyOf(keys2).delete() : table.db.table(updatesTable).clear();
          })).then(function() {
            return res;
          });
        }
        var Table = function() {
          function Table2() {
          }
          Table2.prototype._trans = function(mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans;
            var tableName = this.name;
            var task2 = debug && typeof console !== "undefined" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
            function checkTableInTransaction(resolve, reject, trans2) {
              if (!trans2.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
              return fn(trans2.idbtrans, trans2);
            }
            var wasRootExec = beginMicroTickScope();
            try {
              var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
                return trans._promise(mode, checkTableInTransaction, writeLocked);
              }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
              if (task2) {
                p._consoleTask = task2;
                p = p.catch(function(err) {
                  console.trace(err);
                  return rejection(err);
                });
              }
              return p;
            } finally {
              if (wasRootExec)
                endMicroTickScope();
            }
          };
          Table2.prototype.get = function(keyOrCrit, cb) {
            var _this = this;
            if (keyOrCrit && keyOrCrit.constructor === Object)
              return this.where(keyOrCrit).first(cb);
            if (keyOrCrit == null)
              return rejection(new exceptions.Type("Invalid argument to Table.get()"));
            return this._trans("readonly", function(trans) {
              return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
                return _this.hook.reading.fire(res);
              });
            }).then(cb);
          };
          Table2.prototype.where = function(indexOrCrit) {
            if (typeof indexOrCrit === "string")
              return new this.db.WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
              return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
            var keyPaths = keys(indexOrCrit);
            if (keyPaths.length === 1)
              return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
              if (ix.compound && keyPaths.every(function(keyPath) {
                return ix.keyPath.indexOf(keyPath) >= 0;
              })) {
                for (var i = 0; i < keyPaths.length; ++i) {
                  if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                    return false;
                }
                return true;
              }
              return false;
            }).sort(function(a, b) {
              return a.keyPath.length - b.keyPath.length;
            })[0];
            if (compoundIndex && this.db._maxKey !== maxString) {
              var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
              return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
                return indexOrCrit[kp];
              }));
            }
            if (!compoundIndex && debug)
              console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
            var idxByName = this.schema.idxByName;
            function equals(a, b) {
              return cmp2(a, b) === 0;
            }
            var _a3 = keyPaths.reduce(function(_a4, keyPath) {
              var prevIndex = _a4[0], prevFilterFn = _a4[1];
              var index = idxByName[keyPath];
              var value = indexOrCrit[keyPath];
              return [
                prevIndex || index,
                prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                  var prop = getByKeyPath(x, keyPath);
                  return isArray(prop) && prop.some(function(item) {
                    return equals(value, item);
                  });
                } : function(x) {
                  return equals(value, getByKeyPath(x, keyPath));
                }) : prevFilterFn
              ];
            }, [null, null]), idx = _a3[0], filterFunction = _a3[1];
            return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
          };
          Table2.prototype.filter = function(filterFunction) {
            return this.toCollection().and(filterFunction);
          };
          Table2.prototype.count = function(thenShortcut) {
            return this.toCollection().count(thenShortcut);
          };
          Table2.prototype.offset = function(offset) {
            return this.toCollection().offset(offset);
          };
          Table2.prototype.limit = function(numRows) {
            return this.toCollection().limit(numRows);
          };
          Table2.prototype.each = function(callback) {
            return this.toCollection().each(callback);
          };
          Table2.prototype.toArray = function(thenShortcut) {
            return this.toCollection().toArray(thenShortcut);
          };
          Table2.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this));
          };
          Table2.prototype.orderBy = function(index) {
            return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[".concat(index.join("+"), "]") : index));
          };
          Table2.prototype.reverse = function() {
            return this.toCollection().reverse();
          };
          Table2.prototype.mapToClass = function(constructor) {
            var _a3 = this, db2 = _a3.db, tableName = _a3.name;
            this.schema.mappedClass = constructor;
            if (constructor.prototype instanceof Entity2) {
              constructor = function(_super) {
                __extends(class_1, _super);
                function class_1() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(class_1.prototype, "db", {
                  get: function() {
                    return db2;
                  },
                  enumerable: false,
                  configurable: true
                });
                class_1.prototype.table = function() {
                  return tableName;
                };
                return class_1;
              }(constructor);
            }
            var inheritedProps = /* @__PURE__ */ new Set();
            for (var proto = constructor.prototype; proto; proto = getProto(proto)) {
              Object.getOwnPropertyNames(proto).forEach(function(propName) {
                return inheritedProps.add(propName);
              });
            }
            var readHook = function(obj) {
              if (!obj)
                return obj;
              var res = Object.create(constructor.prototype);
              for (var m in obj)
                if (!inheritedProps.has(m))
                  try {
                    res[m] = obj[m];
                  } catch (_) {
                  }
              return res;
            };
            if (this.schema.readHook) {
              this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
          };
          Table2.prototype.defineClass = function() {
            function Class(content) {
              extend(this, content);
            }
            return this.mapToClass(Class);
          };
          Table2.prototype.add = function(obj, key) {
            var _this = this;
            var _a3 = this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
              objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath) {
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch (_) {
                }
              }
              return lastResult;
            });
          };
          Table2.prototype.update = function(keyOrObject, modifications) {
            if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
              var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
              if (key === void 0)
                return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
              return this.where(":id").equals(key).modify(modifications);
            } else {
              return this.where(":id").equals(keyOrObject).modify(modifications);
            }
          };
          Table2.prototype.put = function(obj, key) {
            var _this = this;
            var _a3 = this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
            var objToAdd = obj;
            if (keyPath && auto) {
              objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
            }
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
            }).then(function(lastResult) {
              if (keyPath) {
                try {
                  setByKeyPath(obj, keyPath, lastResult);
                } catch (_) {
                }
              }
              return lastResult;
            });
          };
          Table2.prototype.delete = function(key) {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: [key] }).then(function(res) {
                return builtInDeletionTrigger(_this, [key], res);
              }).then(function(res) {
                return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
              });
            });
          };
          Table2.prototype.clear = function() {
            var _this = this;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange }).then(function(res) {
                return builtInDeletionTrigger(_this, null, res);
              });
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
            });
          };
          Table2.prototype.bulkGet = function(keys2) {
            var _this = this;
            return this._trans("readonly", function(trans) {
              return _this.core.getMany({
                keys: keys2,
                trans
              }).then(function(result2) {
                return result2.map(function(res) {
                  return _this.hook.reading.fire(res);
                });
              });
            });
          };
          Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
            var _this = this;
            var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys2 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a3 = _this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
              if (keyPath && keys2)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
              if (keys2 && keys2.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length;
              var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({ trans, type: "add", keys: keys2, values: objectsToAdd, wantResults }).then(function(_a4) {
                var numFailures = _a4.numFailures, results = _a4.results, lastResult = _a4.lastResult, failures = _a4.failures;
                var result2 = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result2;
                throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          };
          Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
            var _this = this;
            var keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
            options = options || (keys2 ? void 0 : keysOrOptions);
            var wantResults = options ? options.allKeys : void 0;
            return this._trans("readwrite", function(trans) {
              var _a3 = _this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
              if (keyPath && keys2)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
              if (keys2 && keys2.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
              var numObjects = objects.length;
              var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
              return _this.core.mutate({ trans, type: "put", keys: keys2, values: objectsToPut, wantResults }).then(function(_a4) {
                var numFailures = _a4.numFailures, results = _a4.results, lastResult = _a4.lastResult, failures = _a4.failures;
                var result2 = wantResults ? results : lastResult;
                if (numFailures === 0)
                  return result2;
                throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
              });
            });
          };
          Table2.prototype.bulkUpdate = function(keysAndChanges) {
            var _this = this;
            var coreTable = this.core;
            var keys2 = keysAndChanges.map(function(entry) {
              return entry.key;
            });
            var changeSpecs = keysAndChanges.map(function(entry) {
              return entry.changes;
            });
            var offsetMap = [];
            return this._trans("readwrite", function(trans) {
              return coreTable.getMany({ trans, keys: keys2, cache: "clone" }).then(function(objs) {
                var resultKeys = [];
                var resultObjs = [];
                keysAndChanges.forEach(function(_a3, idx) {
                  var key = _a3.key, changes = _a3.changes;
                  var obj = objs[idx];
                  if (obj) {
                    for (var _i = 0, _b2 = Object.keys(changes); _i < _b2.length; _i++) {
                      var keyPath = _b2[_i];
                      var value = changes[keyPath];
                      if (keyPath === _this.schema.primKey.keyPath) {
                        if (cmp2(value, key) !== 0) {
                          throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                        }
                      } else {
                        setByKeyPath(obj, keyPath, value);
                      }
                    }
                    offsetMap.push(idx);
                    resultKeys.push(key);
                    resultObjs.push(obj);
                  }
                });
                var numEntries = resultKeys.length;
                return coreTable.mutate({
                  trans,
                  type: "put",
                  keys: resultKeys,
                  values: resultObjs,
                  updates: {
                    keys: keys2,
                    changeSpecs
                  }
                }).then(function(_a3) {
                  var numFailures = _a3.numFailures, failures = _a3.failures;
                  if (numFailures === 0)
                    return numEntries;
                  for (var _i = 0, _b2 = Object.keys(failures); _i < _b2.length; _i++) {
                    var offset = _b2[_i];
                    var mappedOffset = offsetMap[Number(offset)];
                    if (mappedOffset != null) {
                      var failure = failures[offset];
                      delete failures[offset];
                      failures[mappedOffset] = failure;
                    }
                  }
                  throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
                });
              });
            });
          };
          Table2.prototype.bulkDelete = function(keys2) {
            var _this = this;
            var numKeys = keys2.length;
            return this._trans("readwrite", function(trans) {
              return _this.core.mutate({ trans, type: "delete", keys: keys2 }).then(function(res) {
                return builtInDeletionTrigger(_this, keys2, res);
              });
            }).then(function(_a3) {
              var numFailures = _a3.numFailures, lastResult = _a3.lastResult, failures = _a3.failures;
              if (numFailures === 0)
                return lastResult;
              throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
            });
          };
          return Table2;
        }();
        function Events(ctx) {
          var evs = {};
          var rv = function(eventName, subscriber) {
            if (subscriber) {
              var i2 = arguments.length, args = new Array(i2 - 1);
              while (--i2)
                args[i2 - 1] = arguments[i2];
              evs[eventName].subscribe.apply(null, args);
              return ctx;
            } else if (typeof eventName === "string") {
              return evs[eventName];
            }
          };
          rv.addEventType = add3;
          for (var i = 1, l = arguments.length; i < l; ++i) {
            add3(arguments[i]);
          }
          return rv;
          function add3(eventName, chainFunction, defaultFunction) {
            if (typeof eventName === "object")
              return addConfiguredEvents(eventName);
            if (!chainFunction)
              chainFunction = reverseStoppableEventChain;
            if (!defaultFunction)
              defaultFunction = nop;
            var context = {
              subscribers: [],
              fire: defaultFunction,
              subscribe: function(cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                  context.subscribers.push(cb);
                  context.fire = chainFunction(context.fire, cb);
                }
              },
              unsubscribe: function(cb) {
                context.subscribers = context.subscribers.filter(function(fn) {
                  return fn !== cb;
                });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
              }
            };
            evs[eventName] = rv[eventName] = context;
            return context;
          }
          function addConfiguredEvents(cfg) {
            keys(cfg).forEach(function(eventName) {
              var args = cfg[eventName];
              if (isArray(args)) {
                add3(eventName, cfg[eventName][0], cfg[eventName][1]);
              } else if (args === "asap") {
                var context = add3(eventName, mirror, function fire() {
                  var i2 = arguments.length, args2 = new Array(i2);
                  while (i2--)
                    args2[i2] = arguments[i2];
                  context.subscribers.forEach(function(fn) {
                    asap$1(function fireEvent() {
                      fn.apply(null, args2);
                    });
                  });
                });
              } else
                throw new exceptions.InvalidArgument("Invalid event config");
            });
          }
        }
        function makeClassConstructor(prototype, constructor) {
          derive(constructor).from({ prototype });
          return constructor;
        }
        function createTableConstructor(db2) {
          return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
            this.db = db2;
            this._tx = trans;
            this.name = name;
            this.schema = tableSchema;
            this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
              "creating": [hookCreatingChain, nop],
              "reading": [pureFunctionChain, mirror],
              "updating": [hookUpdatingChain, nop],
              "deleting": [hookDeletingChain, nop]
            });
          });
        }
        function isPlainKeyRange(ctx, ignoreLimitFilter) {
          return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
        }
        function addFilter(ctx, fn) {
          ctx.filter = combine(ctx.filter, fn);
        }
        function addReplayFilter(ctx, factory, isLimitFilter) {
          var curr = ctx.replayFilter;
          ctx.replayFilter = curr ? function() {
            return combine(curr(), factory());
          } : factory;
          ctx.justLimit = isLimitFilter && !curr;
        }
        function addMatchFilter(ctx, fn) {
          ctx.isMatch = combine(ctx.isMatch, fn);
        }
        function getIndexOrStore(ctx, coreSchema) {
          if (ctx.isPrimKey)
            return coreSchema.primaryKey;
          var index = coreSchema.getIndexByKeyPath(ctx.index);
          if (!index)
            throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
          return index;
        }
        function openCursor(ctx, coreTable, trans) {
          var index = getIndexOrStore(ctx, coreTable.schema);
          return coreTable.openCursor({
            trans,
            values: !ctx.keysOnly,
            reverse: ctx.dir === "prev",
            unique: !!ctx.unique,
            query: {
              index,
              range: ctx.range
            }
          });
        }
        function iter(ctx, fn, coreTrans, coreTable) {
          var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
          if (!ctx.or) {
            return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
          } else {
            var set_1 = {};
            var union = function(item, cursor, advance) {
              if (!filter || filter(cursor, advance, function(result2) {
                return cursor.stop(result2);
              }, function(err) {
                return cursor.fail(err);
              })) {
                var primaryKey = cursor.primaryKey;
                var key = "" + primaryKey;
                if (key === "[object ArrayBuffer]")
                  key = "" + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                  set_1[key] = true;
                  fn(item, cursor, advance);
                }
              }
            };
            return Promise.all([
              ctx.or._iterate(union, coreTrans),
              iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
            ]);
          }
        }
        function iterate(cursorPromise, filter, fn, valueMapper) {
          var mappedFn = valueMapper ? function(x, c, a) {
            return fn(valueMapper(x), c, a);
          } : fn;
          var wrappedFn = wrap(mappedFn);
          return cursorPromise.then(function(cursor) {
            if (cursor) {
              return cursor.start(function() {
                var c = function() {
                  return cursor.continue();
                };
                if (!filter || filter(cursor, function(advancer) {
                  return c = advancer;
                }, function(val) {
                  cursor.stop(val);
                  c = nop;
                }, function(e) {
                  cursor.fail(e);
                  c = nop;
                }))
                  wrappedFn(cursor.value, cursor, function(advancer) {
                    return c = advancer;
                  });
                c();
              });
            }
          });
        }
        var PropModification2 = function() {
          function PropModification3(spec) {
            this["@@propmod"] = spec;
          }
          PropModification3.prototype.execute = function(value) {
            var _a3;
            var spec = this["@@propmod"];
            if (spec.add !== void 0) {
              var term = spec.add;
              if (isArray(term)) {
                return __spreadArray(__spreadArray([], isArray(value) ? value : [], true), term).sort();
              }
              if (typeof term === "number")
                return (Number(value) || 0) + term;
              if (typeof term === "bigint") {
                try {
                  return BigInt(value) + term;
                } catch (_b2) {
                  return BigInt(0) + term;
                }
              }
              throw new TypeError("Invalid term ".concat(term));
            }
            if (spec.remove !== void 0) {
              var subtrahend_1 = spec.remove;
              if (isArray(subtrahend_1)) {
                return isArray(value) ? value.filter(function(item) {
                  return !subtrahend_1.includes(item);
                }).sort() : [];
              }
              if (typeof subtrahend_1 === "number")
                return Number(value) - subtrahend_1;
              if (typeof subtrahend_1 === "bigint") {
                try {
                  return BigInt(value) - subtrahend_1;
                } catch (_c) {
                  return BigInt(0) - subtrahend_1;
                }
              }
              throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
            }
            var prefixToReplace = (_a3 = spec.replacePrefix) === null || _a3 === void 0 ? void 0 : _a3[0];
            if (prefixToReplace && typeof value === "string" && value.startsWith(prefixToReplace)) {
              return spec.replacePrefix[1] + value.substring(prefixToReplace.length);
            }
            return value;
          };
          return PropModification3;
        }();
        var Collection = function() {
          function Collection2() {
          }
          Collection2.prototype._read = function(fn, cb) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
          };
          Collection2.prototype._write = function(fn) {
            var ctx = this._ctx;
            return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
          };
          Collection2.prototype._addAlgorithm = function(fn) {
            var ctx = this._ctx;
            ctx.algorithm = combine(ctx.algorithm, fn);
          };
          Collection2.prototype._iterate = function(fn, coreTrans) {
            return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
          };
          Collection2.prototype.clone = function(props2) {
            var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
            if (props2)
              extend(ctx, props2);
            rv._ctx = ctx;
            return rv;
          };
          Collection2.prototype.raw = function() {
            this._ctx.valueMapper = null;
            return this;
          };
          Collection2.prototype.each = function(fn) {
            var ctx = this._ctx;
            return this._read(function(trans) {
              return iter(ctx, fn, trans, ctx.table.core);
            });
          };
          Collection2.prototype.count = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx;
              var coreTable = ctx.table.core;
              if (isPlainKeyRange(ctx, true)) {
                return coreTable.count({
                  trans,
                  query: {
                    index: getIndexOrStore(ctx, coreTable.schema),
                    range: ctx.range
                  }
                }).then(function(count2) {
                  return Math.min(count2, ctx.limit);
                });
              } else {
                var count = 0;
                return iter(ctx, function() {
                  ++count;
                  return false;
                }, trans, coreTable).then(function() {
                  return count;
                });
              }
            }).then(cb);
          };
          Collection2.prototype.sortBy = function(keyPath, cb) {
            var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
            function getval(obj, i) {
              if (i)
                return getval(obj[parts[i]], i - 1);
              return obj[lastPart];
            }
            var order = this._ctx.dir === "next" ? 1 : -1;
            function sorter(a, b) {
              var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
              return cmp2(aVal, bVal) * order;
            }
            return this.toArray(function(a) {
              return a.sort(sorter);
            }).then(cb);
          };
          Collection2.prototype.toArray = function(cb) {
            var _this = this;
            return this._read(function(trans) {
              var ctx = _this._ctx;
              if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  limit: ctx.limit,
                  values: true,
                  query: {
                    index,
                    range: ctx.range
                  }
                }).then(function(_a3) {
                  var result2 = _a3.result;
                  return valueMapper_1 ? result2.map(valueMapper_1) : result2;
                });
              } else {
                var a_1 = [];
                return iter(ctx, function(item) {
                  return a_1.push(item);
                }, trans, ctx.table.core).then(function() {
                  return a_1;
                });
              }
            }, cb);
          };
          Collection2.prototype.offset = function(offset) {
            var ctx = this._ctx;
            if (offset <= 0)
              return this;
            ctx.offset += offset;
            if (isPlainKeyRange(ctx)) {
              addReplayFilter(ctx, function() {
                var offsetLeft = offset;
                return function(cursor, advance) {
                  if (offsetLeft === 0)
                    return true;
                  if (offsetLeft === 1) {
                    --offsetLeft;
                    return false;
                  }
                  advance(function() {
                    cursor.advance(offsetLeft);
                    offsetLeft = 0;
                  });
                  return false;
                };
              });
            } else {
              addReplayFilter(ctx, function() {
                var offsetLeft = offset;
                return function() {
                  return --offsetLeft < 0;
                };
              });
            }
            return this;
          };
          Collection2.prototype.limit = function(numRows) {
            this._ctx.limit = Math.min(this._ctx.limit, numRows);
            addReplayFilter(this._ctx, function() {
              var rowsLeft = numRows;
              return function(cursor, advance, resolve) {
                if (--rowsLeft <= 0)
                  advance(resolve);
                return rowsLeft >= 0;
              };
            }, true);
            return this;
          };
          Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
            addFilter(this._ctx, function(cursor, advance, resolve) {
              if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
              } else {
                return true;
              }
            });
            return this;
          };
          Collection2.prototype.first = function(cb) {
            return this.limit(1).toArray(function(a) {
              return a[0];
            }).then(cb);
          };
          Collection2.prototype.last = function(cb) {
            return this.reverse().first(cb);
          };
          Collection2.prototype.filter = function(filterFunction) {
            addFilter(this._ctx, function(cursor) {
              return filterFunction(cursor.value);
            });
            addMatchFilter(this._ctx, filterFunction);
            return this;
          };
          Collection2.prototype.and = function(filter) {
            return this.filter(filter);
          };
          Collection2.prototype.or = function(indexName) {
            return new this.db.WhereClause(this._ctx.table, indexName, this);
          };
          Collection2.prototype.reverse = function() {
            this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
            if (this._ondirectionchange)
              this._ondirectionchange(this._ctx.dir);
            return this;
          };
          Collection2.prototype.desc = function() {
            return this.reverse();
          };
          Collection2.prototype.eachKey = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function(val, cursor) {
              cb(cursor.key, cursor);
            });
          };
          Collection2.prototype.eachUniqueKey = function(cb) {
            this._ctx.unique = "unique";
            return this.eachKey(cb);
          };
          Collection2.prototype.eachPrimaryKey = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            return this.each(function(val, cursor) {
              cb(cursor.primaryKey, cursor);
            });
          };
          Collection2.prototype.keys = function(cb) {
            var ctx = this._ctx;
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.key);
            }).then(function() {
              return a;
            }).then(cb);
          };
          Collection2.prototype.primaryKeys = function(cb) {
            var ctx = this._ctx;
            if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
              return this._read(function(trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                  trans,
                  values: false,
                  limit: ctx.limit,
                  query: {
                    index,
                    range: ctx.range
                  }
                });
              }).then(function(_a3) {
                var result2 = _a3.result;
                return result2;
              }).then(cb);
            }
            ctx.keysOnly = !ctx.isMatch;
            var a = [];
            return this.each(function(item, cursor) {
              a.push(cursor.primaryKey);
            }).then(function() {
              return a;
            }).then(cb);
          };
          Collection2.prototype.uniqueKeys = function(cb) {
            this._ctx.unique = "unique";
            return this.keys(cb);
          };
          Collection2.prototype.firstKey = function(cb) {
            return this.limit(1).keys(function(a) {
              return a[0];
            }).then(cb);
          };
          Collection2.prototype.lastKey = function(cb) {
            return this.reverse().firstKey(cb);
          };
          Collection2.prototype.distinct = function() {
            var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
            if (!idx || !idx.multi)
              return this;
            var set = {};
            addFilter(this._ctx, function(cursor) {
              var strKey = cursor.primaryKey.toString();
              var found = hasOwn(set, strKey);
              set[strKey] = true;
              return !found;
            });
            return this;
          };
          Collection2.prototype.modify = function(changes) {
            var _this = this;
            var ctx = this._ctx;
            return this._write(function(trans) {
              var modifyer;
              if (typeof changes === "function") {
                modifyer = changes;
              } else {
                var keyPaths = keys(changes);
                var numKeys = keyPaths.length;
                modifyer = function(item) {
                  var anythingModified = false;
                  for (var i = 0; i < numKeys; ++i) {
                    var keyPath = keyPaths[i];
                    var val = changes[keyPath];
                    var origVal = getByKeyPath(item, keyPath);
                    if (val instanceof PropModification2) {
                      setByKeyPath(item, keyPath, val.execute(origVal));
                      anythingModified = true;
                    } else if (origVal !== val) {
                      setByKeyPath(item, keyPath, val);
                      anythingModified = true;
                    }
                  }
                  return anythingModified;
                };
              }
              var coreTable = ctx.table.core;
              var _a3 = coreTable.schema.primaryKey, outbound = _a3.outbound, extractKey = _a3.extractKey;
              var limit = 200;
              var modifyChunkSize = _this.db._options.modifyChunkSize;
              if (modifyChunkSize) {
                if (typeof modifyChunkSize == "object") {
                  limit = modifyChunkSize[coreTable.name] || modifyChunkSize["*"] || 200;
                } else {
                  limit = modifyChunkSize;
                }
              }
              var totalFailures = [];
              var successCount = 0;
              var failedKeys = [];
              var applyMutateResult = function(expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a4 = keys(failures); _i < _a4.length; _i++) {
                  var pos = _a4[_i];
                  totalFailures.push(failures[pos]);
                }
              };
              var isUnconditionalDelete = changes === deleteCallback;
              return _this.clone().primaryKeys().then(function(keys2) {
                var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || isUnconditionalDelete) && {
                  index: ctx.index,
                  range: ctx.range
                };
                var nextChunk = function(offset) {
                  var count = Math.min(limit, keys2.length - offset);
                  var keysInChunk = keys2.slice(offset, offset + count);
                  return (isUnconditionalDelete ? Promise.resolve([]) : coreTable.getMany({
                    trans,
                    keys: keysInChunk,
                    cache: "immutable"
                  })).then(function(values) {
                    var addValues = [];
                    var putValues = [];
                    var putKeys = outbound ? [] : null;
                    var deleteKeys = isUnconditionalDelete ? keysInChunk : [];
                    if (!isUnconditionalDelete)
                      for (var i = 0; i < count; ++i) {
                        var origValue = values[i];
                        var ctx_1 = {
                          value: deepClone(origValue),
                          primKey: keys2[offset + i]
                        };
                        if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                          if (ctx_1.value == null) {
                            deleteKeys.push(keys2[offset + i]);
                          } else if (!outbound && cmp2(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                            deleteKeys.push(keys2[offset + i]);
                            addValues.push(ctx_1.value);
                          } else {
                            putValues.push(ctx_1.value);
                            if (outbound)
                              putKeys.push(keys2[offset + i]);
                          }
                        }
                      }
                    return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                      for (var pos in res.failures) {
                        deleteKeys.splice(parseInt(pos), 1);
                      }
                      applyMutateResult(addValues.length, res);
                    })).then(function() {
                      return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                        trans,
                        type: "put",
                        keys: putKeys,
                        values: putValues,
                        criteria,
                        changeSpec: typeof changes !== "function" && changes,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return applyMutateResult(putValues.length, res);
                      });
                    }).then(function() {
                      return (deleteKeys.length > 0 || criteria && isUnconditionalDelete) && coreTable.mutate({
                        trans,
                        type: "delete",
                        keys: deleteKeys,
                        criteria,
                        isAdditionalChunk: offset > 0
                      }).then(function(res) {
                        return builtInDeletionTrigger(ctx.table, deleteKeys, res);
                      }).then(function(res) {
                        return applyMutateResult(deleteKeys.length, res);
                      });
                    }).then(function() {
                      return keys2.length > offset + count && nextChunk(offset + limit);
                    });
                  });
                };
                return nextChunk(0).then(function() {
                  if (totalFailures.length > 0)
                    throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                  return keys2.length;
                });
              });
            });
          };
          Collection2.prototype.delete = function() {
            var ctx = this._ctx, range = ctx.range;
            if (isPlainKeyRange(ctx) && !ctx.table.schema.yProps && (ctx.isPrimKey || range.type === 3)) {
              return this._write(function(trans) {
                var primaryKey = ctx.table.core.schema.primaryKey;
                var coreRange = range;
                return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
                  return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a3) {
                    var failures = _a3.failures, numFailures = _a3.numFailures;
                    if (numFailures)
                      throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                        return failures[pos];
                      }), count - numFailures);
                    return count - numFailures;
                  });
                });
              });
            }
            return this.modify(deleteCallback);
          };
          return Collection2;
        }();
        var deleteCallback = function(value, ctx) {
          return ctx.value = null;
        };
        function createCollectionConstructor(db2) {
          return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
            this.db = db2;
            var keyRange = AnyRange, error = null;
            if (keyRangeGenerator)
              try {
                keyRange = keyRangeGenerator();
              } catch (ex) {
                error = ex;
              }
            var whereCtx = whereClause._ctx;
            var table = whereCtx.table;
            var readingHook = table.hook.reading.fire;
            this._ctx = {
              table,
              index: whereCtx.index,
              isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
              range: keyRange,
              keysOnly: false,
              dir: "next",
              unique: "",
              algorithm: null,
              filter: null,
              replayFilter: null,
              justLimit: true,
              isMatch: null,
              offset: 0,
              limit: Infinity,
              error,
              or: whereCtx.or,
              valueMapper: readingHook !== mirror ? readingHook : null
            };
          });
        }
        function simpleCompare(a, b) {
          return a < b ? -1 : a === b ? 0 : 1;
        }
        function simpleCompareReverse(a, b) {
          return a > b ? -1 : a === b ? 0 : 1;
        }
        function fail(collectionOrWhereClause, err, T) {
          var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
          collection._ctx.error = T ? new T(err) : new TypeError(err);
          return collection;
        }
        function emptyCollection(whereClause) {
          return new whereClause.Collection(whereClause, function() {
            return rangeEqual("");
          }).limit(0);
        }
        function upperFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toUpperCase();
          } : function(s) {
            return s.toLowerCase();
          };
        }
        function lowerFactory(dir) {
          return dir === "next" ? function(s) {
            return s.toLowerCase();
          } : function(s) {
            return s.toUpperCase();
          };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp3, dir) {
          var length = Math.min(key.length, lowerNeedle.length);
          var llp = -1;
          for (var i = 0; i < length; ++i) {
            var lwrKeyChar = lowerKey[i];
            if (lwrKeyChar !== lowerNeedle[i]) {
              if (cmp3(key[i], upperNeedle[i]) < 0)
                return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
              if (cmp3(key[i], lowerNeedle[i]) < 0)
                return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
              if (llp >= 0)
                return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
              return null;
            }
            if (cmp3(key[i], lwrKeyChar) < 0)
              llp = i;
          }
          if (length < lowerNeedle.length && dir === "next")
            return key + upperNeedle.substr(key.length);
          if (length < key.length && dir === "prev")
            return key.substr(0, upperNeedle.length);
          return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
        }
        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
          var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
          if (!needles.every(function(s) {
            return typeof s === "string";
          })) {
            return fail(whereClause, STRING_EXPECTED);
          }
          function initDirection(dir) {
            upper = upperFactory(dir);
            lower = lowerFactory(dir);
            compare = dir === "next" ? simpleCompare : simpleCompareReverse;
            var needleBounds = needles.map(function(needle) {
              return { lower: lower(needle), upper: upper(needle) };
            }).sort(function(a, b) {
              return compare(a.lower, b.lower);
            });
            upperNeedles = needleBounds.map(function(nb) {
              return nb.upper;
            });
            lowerNeedles = needleBounds.map(function(nb) {
              return nb.lower;
            });
            direction = dir;
            nextKeySuffix = dir === "next" ? "" : suffix;
          }
          initDirection("next");
          var c = new whereClause.Collection(whereClause, function() {
            return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
          });
          c._ondirectionchange = function(direction2) {
            initDirection(direction2);
          };
          var firstPossibleNeedle = 0;
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            if (typeof key !== "string")
              return false;
            var lowerKey = lower(key);
            if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
              return true;
            } else {
              var lowestPossibleCasing = null;
              for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null)
                  firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                  lowestPossibleCasing = casing;
                }
              }
              if (lowestPossibleCasing !== null) {
                advance(function() {
                  cursor.continue(lowestPossibleCasing + nextKeySuffix);
                });
              } else {
                advance(resolve);
              }
              return false;
            }
          });
          return c;
        }
        function createRange(lower, upper, lowerOpen, upperOpen) {
          return {
            type: 2,
            lower,
            upper,
            lowerOpen,
            upperOpen
          };
        }
        function rangeEqual(value) {
          return {
            type: 1,
            lower: value,
            upper: value
          };
        }
        var WhereClause = function() {
          function WhereClause2() {
          }
          Object.defineProperty(WhereClause2.prototype, "Collection", {
            get: function() {
              return this._ctx.table.db.Collection;
            },
            enumerable: false,
            configurable: true
          });
          WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
            includeLower = includeLower !== false;
            includeUpper = includeUpper === true;
            try {
              if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
                return emptyCollection(this);
              return new this.Collection(this, function() {
                return createRange(lower, upper, !includeLower, !includeUpper);
              });
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
          };
          WhereClause2.prototype.equals = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return rangeEqual(value);
            });
          };
          WhereClause2.prototype.above = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(value, void 0, true);
            });
          };
          WhereClause2.prototype.aboveOrEqual = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(value, void 0, false);
            });
          };
          WhereClause2.prototype.below = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(void 0, value, false, true);
            });
          };
          WhereClause2.prototype.belowOrEqual = function(value) {
            if (value == null)
              return fail(this, INVALID_KEY_ARGUMENT);
            return new this.Collection(this, function() {
              return createRange(void 0, value);
            });
          };
          WhereClause2.prototype.startsWith = function(str) {
            if (typeof str !== "string")
              return fail(this, STRING_EXPECTED);
            return this.between(str, str + maxString, true, true);
          };
          WhereClause2.prototype.startsWithIgnoreCase = function(str) {
            if (str === "")
              return this.startsWith(str);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return x.indexOf(a[0]) === 0;
            }, [str], maxString);
          };
          WhereClause2.prototype.equalsIgnoreCase = function(str) {
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return x === a[0];
            }, [str], "");
          };
          WhereClause2.prototype.anyOfIgnoreCase = function() {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
              return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.indexOf(x) !== -1;
            }, set, "");
          };
          WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
              return emptyCollection(this);
            return addIgnoreCaseAlgorithm(this, function(x, a) {
              return a.some(function(n) {
                return x.indexOf(n) === 0;
              });
            }, set, maxString);
          };
          WhereClause2.prototype.anyOf = function() {
            var _this = this;
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            var compare = this._cmp;
            try {
              set.sort(compare);
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            if (set.length === 0)
              return emptyCollection(this);
            var c = new this.Collection(this, function() {
              return createRange(set[0], set[set.length - 1]);
            });
            c._ondirectionchange = function(direction) {
              compare = direction === "next" ? _this._ascending : _this._descending;
              set.sort(compare);
            };
            var i = 0;
            c._addAlgorithm(function(cursor, advance, resolve) {
              var key = cursor.key;
              while (compare(key, set[i]) > 0) {
                ++i;
                if (i === set.length) {
                  advance(resolve);
                  return false;
                }
              }
              if (compare(key, set[i]) === 0) {
                return true;
              } else {
                advance(function() {
                  cursor.continue(set[i]);
                });
                return false;
              }
            });
            return c;
          };
          WhereClause2.prototype.notEqual = function(value) {
            return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
          };
          WhereClause2.prototype.noneOf = function() {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (set.length === 0)
              return new this.Collection(this);
            try {
              set.sort(this._ascending);
            } catch (e) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var ranges = set.reduce(function(res, val) {
              return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
            }, null);
            ranges.push([set[set.length - 1], this.db._maxKey]);
            return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
          };
          WhereClause2.prototype.inAnyRange = function(ranges, options) {
            var _this = this;
            var cmp3 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
            if (ranges.length === 0)
              return emptyCollection(this);
            if (!ranges.every(function(range) {
              return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
            })) {
              return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
            }
            var includeLowers = !options || options.includeLowers !== false;
            var includeUppers = options && options.includeUppers === true;
            function addRange2(ranges2, newRange) {
              var i = 0, l = ranges2.length;
              for (; i < l; ++i) {
                var range = ranges2[i];
                if (cmp3(newRange[0], range[1]) < 0 && cmp3(newRange[1], range[0]) > 0) {
                  range[0] = min(range[0], newRange[0]);
                  range[1] = max(range[1], newRange[1]);
                  break;
                }
              }
              if (i === l)
                ranges2.push(newRange);
              return ranges2;
            }
            var sortDirection = ascending;
            function rangeSorter(a, b) {
              return sortDirection(a[0], b[0]);
            }
            var set;
            try {
              set = ranges.reduce(addRange2, []);
              set.sort(rangeSorter);
            } catch (ex) {
              return fail(this, INVALID_KEY_ARGUMENT);
            }
            var rangePos = 0;
            var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
              return ascending(key, set[rangePos][1]) > 0;
            } : function(key) {
              return ascending(key, set[rangePos][1]) >= 0;
            };
            var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
              return descending(key, set[rangePos][0]) > 0;
            } : function(key) {
              return descending(key, set[rangePos][0]) >= 0;
            };
            function keyWithinCurrentRange(key) {
              return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
            }
            var checkKey = keyIsBeyondCurrentEntry;
            var c = new this.Collection(this, function() {
              return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
            });
            c._ondirectionchange = function(direction) {
              if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
              } else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
              }
              set.sort(rangeSorter);
            };
            c._addAlgorithm(function(cursor, advance, resolve) {
              var key = cursor.key;
              while (checkKey(key)) {
                ++rangePos;
                if (rangePos === set.length) {
                  advance(resolve);
                  return false;
                }
              }
              if (keyWithinCurrentRange(key)) {
                return true;
              } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
                return false;
              } else {
                advance(function() {
                  if (sortDirection === ascending)
                    cursor.continue(set[rangePos][0]);
                  else
                    cursor.continue(set[rangePos][1]);
                });
                return false;
              }
            });
            return c;
          };
          WhereClause2.prototype.startsWithAnyOf = function() {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            if (!set.every(function(s) {
              return typeof s === "string";
            })) {
              return fail(this, "startsWithAnyOf() only works with strings");
            }
            if (set.length === 0)
              return emptyCollection(this);
            return this.inAnyRange(set.map(function(str) {
              return [str, str + maxString];
            }));
          };
          return WhereClause2;
        }();
        function createWhereClauseConstructor(db2) {
          return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
            this.db = db2;
            this._ctx = {
              table,
              index: index === ":id" ? null : index,
              or: orCollection
            };
            this._cmp = this._ascending = cmp2;
            this._descending = function(a, b) {
              return cmp2(b, a);
            };
            this._max = function(a, b) {
              return cmp2(a, b) > 0 ? a : b;
            };
            this._min = function(a, b) {
              return cmp2(a, b) < 0 ? a : b;
            };
            this._IDBKeyRange = db2._deps.IDBKeyRange;
            if (!this._IDBKeyRange)
              throw new exceptions.MissingAPI();
          });
        }
        function eventRejectHandler(reject) {
          return wrap(function(event) {
            preventDefault(event);
            reject(event.target.error);
            return false;
          });
        }
        function preventDefault(event) {
          if (event.stopPropagation)
            event.stopPropagation();
          if (event.preventDefault)
            event.preventDefault();
        }
        var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
        var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
        var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
        var Transaction = function() {
          function Transaction2() {
          }
          Transaction2.prototype._lock = function() {
            assert(!PSD.global);
            ++this._reculock;
            if (this._reculock === 1 && !PSD.global)
              PSD.lockOwnerFor = this;
            return this;
          };
          Transaction2.prototype._unlock = function() {
            assert(!PSD.global);
            if (--this._reculock === 0) {
              if (!PSD.global)
                PSD.lockOwnerFor = null;
              while (this._blockedFuncs.length > 0 && !this._locked()) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                  usePSD(fnAndPSD[1], fnAndPSD[0]);
                } catch (e) {
                }
              }
            }
            return this;
          };
          Transaction2.prototype._locked = function() {
            return this._reculock && PSD.lockOwnerFor !== this;
          };
          Transaction2.prototype.create = function(idbtrans) {
            var _this = this;
            if (!this.mode)
              return this;
            var idbdb = this.db.idbdb;
            var dbOpenError = this.db._state.dbOpenError;
            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
              switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                  throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                  throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                  throw new exceptions.OpenFailed(dbOpenError);
              }
            }
            if (!this.active)
              throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);
            idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
            idbtrans.onerror = wrap(function(ev) {
              preventDefault(ev);
              _this._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function(ev) {
              preventDefault(ev);
              _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
              _this.active = false;
              _this.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function() {
              _this.active = false;
              _this._resolve();
              if ("mutatedParts" in idbtrans) {
                globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
              }
            });
            return this;
          };
          Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
            var _this = this;
            if (mode === "readwrite" && this.mode !== "readwrite")
              return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
              return rejection(new exceptions.TransactionInactive());
            if (this._locked()) {
              return new DexiePromise(function(resolve, reject) {
                _this._blockedFuncs.push([function() {
                  _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                }, PSD]);
              });
            } else if (bWriteLock) {
              return newScope(function() {
                var p2 = new DexiePromise(function(resolve, reject) {
                  _this._lock();
                  var rv = fn(resolve, reject, _this);
                  if (rv && rv.then)
                    rv.then(resolve, reject);
                });
                p2.finally(function() {
                  return _this._unlock();
                });
                p2._lib = true;
                return p2;
              });
            } else {
              var p = new DexiePromise(function(resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                  rv.then(resolve, reject);
              });
              p._lib = true;
              return p;
            }
          };
          Transaction2.prototype._root = function() {
            return this.parent ? this.parent._root() : this;
          };
          Transaction2.prototype.waitFor = function(promiseLike) {
            var root = this._root();
            var promise = DexiePromise.resolve(promiseLike);
            if (root._waitingFor) {
              root._waitingFor = root._waitingFor.then(function() {
                return promise;
              });
            } else {
              root._waitingFor = promise;
              root._waitingQueue = [];
              var store = root.idbtrans.objectStore(root.storeNames[0]);
              (function spin() {
                ++root._spinCount;
                while (root._waitingQueue.length)
                  root._waitingQueue.shift()();
                if (root._waitingFor)
                  store.get(-Infinity).onsuccess = spin;
              })();
            }
            var currentWaitPromise = root._waitingFor;
            return new DexiePromise(function(resolve, reject) {
              promise.then(function(res) {
                return root._waitingQueue.push(wrap(resolve.bind(null, res)));
              }, function(err) {
                return root._waitingQueue.push(wrap(reject.bind(null, err)));
              }).finally(function() {
                if (root._waitingFor === currentWaitPromise) {
                  root._waitingFor = null;
                }
              });
            });
          };
          Transaction2.prototype.abort = function() {
            if (this.active) {
              this.active = false;
              if (this.idbtrans)
                this.idbtrans.abort();
              this._reject(new exceptions.Abort());
            }
          };
          Transaction2.prototype.table = function(tableName) {
            var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
            if (hasOwn(memoizedTables, tableName))
              return memoizedTables[tableName];
            var tableSchema = this.schema[tableName];
            if (!tableSchema) {
              throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            }
            var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
            transactionBoundTable.core = this.db.core.table(tableName);
            memoizedTables[tableName] = transactionBoundTable;
            return transactionBoundTable;
          };
          return Transaction2;
        }();
        function createTransactionConstructor(db2) {
          return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
            var _this = this;
            if (mode !== "readonly")
              storeNames.forEach(function(storeName) {
                var _a3;
                var yProps = (_a3 = dbschema[storeName]) === null || _a3 === void 0 ? void 0 : _a3.yProps;
                if (yProps)
                  storeNames = storeNames.concat(yProps.map(function(p) {
                    return p.updatesTable;
                  }));
              });
            this.db = db2;
            this.mode = mode;
            this.storeNames = storeNames;
            this.schema = dbschema;
            this.chromeTransactionDurability = chromeTransactionDurability;
            this.idbtrans = null;
            this.on = Events(this, "complete", "error", "abort");
            this.parent = parent || null;
            this.active = true;
            this._reculock = 0;
            this._blockedFuncs = [];
            this._resolve = null;
            this._reject = null;
            this._waitingFor = null;
            this._waitingQueue = null;
            this._spinCount = 0;
            this._completion = new DexiePromise(function(resolve, reject) {
              _this._resolve = resolve;
              _this._reject = reject;
            });
            this._completion.then(function() {
              _this.active = false;
              _this.on.complete.fire();
            }, function(e) {
              var wasActive = _this.active;
              _this.active = false;
              _this.on.error.fire(e);
              _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
              return rejection(e);
            });
          });
        }
        function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey, type2) {
          return {
            name,
            keyPath,
            unique,
            multi,
            auto,
            compound,
            src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath),
            type: type2
          };
        }
        function nameFromKeyPath(keyPath) {
          return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
        }
        function createTableSchema(name, primKey, indexes) {
          return {
            name,
            primKey,
            indexes,
            mappedClass: null,
            idxByName: arrayToObject(indexes, function(index) {
              return [index.name, index];
            })
          };
        }
        function safariMultiStoreFix(storeNames) {
          return storeNames.length === 1 ? storeNames[0] : storeNames;
        }
        var getMaxKey = function(IdbKeyRange) {
          try {
            IdbKeyRange.only([[]]);
            getMaxKey = function() {
              return [[]];
            };
            return [[]];
          } catch (e) {
            getMaxKey = function() {
              return maxString;
            };
            return maxString;
          }
        };
        function getKeyExtractor(keyPath) {
          if (keyPath == null) {
            return function() {
              return void 0;
            };
          } else if (typeof keyPath === "string") {
            return getSinglePathKeyExtractor(keyPath);
          } else {
            return function(obj) {
              return getByKeyPath(obj, keyPath);
            };
          }
        }
        function getSinglePathKeyExtractor(keyPath) {
          var split = keyPath.split(".");
          if (split.length === 1) {
            return function(obj) {
              return obj[keyPath];
            };
          } else {
            return function(obj) {
              return getByKeyPath(obj, keyPath);
            };
          }
        }
        function arrayify(arrayLike) {
          return [].slice.call(arrayLike);
        }
        var _id_counter = 0;
        function getKeyPathAlias(keyPath) {
          return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
        }
        function createDBCore(db2, IdbKeyRange, tmpTrans) {
          function extractSchema(db3, trans) {
            var tables2 = arrayify(db3.objectStoreNames);
            return {
              schema: {
                name: db3.name,
                tables: tables2.map(function(table) {
                  return trans.objectStore(table);
                }).map(function(store) {
                  var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                  var compound = isArray(keyPath);
                  var outbound = keyPath == null;
                  var indexByKeyPath = {};
                  var result2 = {
                    name: store.name,
                    primaryKey: {
                      name: null,
                      isPrimaryKey: true,
                      outbound,
                      compound,
                      keyPath,
                      autoIncrement,
                      unique: true,
                      extractKey: getKeyExtractor(keyPath)
                    },
                    indexes: arrayify(store.indexNames).map(function(indexName) {
                      return store.index(indexName);
                    }).map(function(index) {
                      var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
                      var compound2 = isArray(keyPath2);
                      var result3 = {
                        name,
                        compound: compound2,
                        keyPath: keyPath2,
                        unique,
                        multiEntry,
                        extractKey: getKeyExtractor(keyPath2)
                      };
                      indexByKeyPath[getKeyPathAlias(keyPath2)] = result3;
                      return result3;
                    }),
                    getIndexByKeyPath: function(keyPath2) {
                      return indexByKeyPath[getKeyPathAlias(keyPath2)];
                    }
                  };
                  indexByKeyPath[":id"] = result2.primaryKey;
                  if (keyPath != null) {
                    indexByKeyPath[getKeyPathAlias(keyPath)] = result2.primaryKey;
                  }
                  return result2;
                })
              },
              hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            };
          }
          function makeIDBKeyRange(range) {
            if (range.type === 3)
              return null;
            if (range.type === 4)
              throw new Error("Cannot convert never type to IDBKeyRange");
            var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
            var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
            return idbRange;
          }
          function createDbCoreTable(tableSchema) {
            var tableName = tableSchema.name;
            function mutate(_a4) {
              var trans = _a4.trans, type2 = _a4.type, keys2 = _a4.keys, values = _a4.values, range = _a4.range;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type2 === "put" || type2 === "add";
                if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
                  throw new Error("Invalid operation type: " + type2);
                var length = (keys2 || values || { length: 1 }).length;
                if (keys2 && values && keys2.length !== values.length) {
                  throw new Error("Given keys array must have same length as given values array.");
                }
                if (length === 0)
                  return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
                var req;
                var reqs = [];
                var failures = [];
                var numFailures = 0;
                var errorHandler = function(event) {
                  ++numFailures;
                  preventDefault(event);
                };
                if (type2 === "deleteRange") {
                  if (range.type === 4)
                    return resolve({ numFailures, failures, results: [], lastResult: void 0 });
                  if (range.type === 3)
                    reqs.push(req = store.clear());
                  else
                    reqs.push(req = store.delete(makeIDBKeyRange(range)));
                } else {
                  var _a5 = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null], args1 = _a5[0], args2 = _a5[1];
                  if (isAddOrPut) {
                    for (var i = 0; i < length; ++i) {
                      reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
                      req.onerror = errorHandler;
                    }
                  } else {
                    for (var i = 0; i < length; ++i) {
                      reqs.push(req = store[type2](args1[i]));
                      req.onerror = errorHandler;
                    }
                  }
                }
                var done = function(event) {
                  var lastResult = event.target.result;
                  reqs.forEach(function(req2, i2) {
                    return req2.error != null && (failures[i2] = req2.error);
                  });
                  resolve({
                    numFailures,
                    failures,
                    results: type2 === "delete" ? keys2 : reqs.map(function(req2) {
                      return req2.result;
                    }),
                    lastResult
                  });
                };
                req.onerror = function(event) {
                  errorHandler(event);
                  done(event);
                };
                req.onsuccess = done;
              });
            }
            function openCursor2(_a4) {
              var trans = _a4.trans, values = _a4.values, query2 = _a4.query, reverse = _a4.reverse, unique = _a4.unique;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var index = query2.index, range = query2.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
                var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function(ev) {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  cursor.___id = ++_id_counter;
                  cursor.done = false;
                  var _cursorContinue = cursor.continue.bind(cursor);
                  var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                  if (_cursorContinuePrimaryKey)
                    _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                  var _cursorAdvance = cursor.advance.bind(cursor);
                  var doThrowCursorIsNotStarted = function() {
                    throw new Error("Cursor not started");
                  };
                  var doThrowCursorIsStopped = function() {
                    throw new Error("Cursor not stopped");
                  };
                  cursor.trans = trans;
                  cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                  cursor.fail = wrap(reject);
                  cursor.next = function() {
                    var _this = this;
                    var gotOne = 1;
                    return this.start(function() {
                      return gotOne-- ? _this.continue() : _this.stop();
                    }).then(function() {
                      return _this;
                    });
                  };
                  cursor.start = function(callback) {
                    var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                      resolveIteration = wrap(resolveIteration);
                      req.onerror = eventRejectHandler(rejectIteration);
                      cursor.fail = rejectIteration;
                      cursor.stop = function(value) {
                        cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                        resolveIteration(value);
                      };
                    });
                    var guardedCallback = function() {
                      if (req.result) {
                        try {
                          callback();
                        } catch (err) {
                          cursor.fail(err);
                        }
                      } else {
                        cursor.done = true;
                        cursor.start = function() {
                          throw new Error("Cursor behind last entry");
                        };
                        cursor.stop();
                      }
                    };
                    req.onsuccess = wrap(function(ev2) {
                      req.onsuccess = guardedCallback;
                      guardedCallback();
                    });
                    cursor.continue = _cursorContinue;
                    cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                    cursor.advance = _cursorAdvance;
                    guardedCallback();
                    return iterationPromise;
                  };
                  resolve(cursor);
                }, reject);
              });
            }
            function query(hasGetAll2) {
              return function(request) {
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
                  var nonInfinitLimit = limit === Infinity ? void 0 : limit;
                  var index = query2.index, range = query2.range;
                  var store = trans.objectStore(tableName);
                  var source = index.isPrimaryKey ? store : store.index(index.name);
                  var idbKeyRange = makeIDBKeyRange(range);
                  if (limit === 0)
                    return resolve({ result: [] });
                  if (hasGetAll2) {
                    var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                    req.onsuccess = function(event) {
                      return resolve({ result: event.target.result });
                    };
                    req.onerror = eventRejectHandler(reject);
                  } else {
                    var count_1 = 0;
                    var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                    var result_1 = [];
                    req_1.onsuccess = function(event) {
                      var cursor = req_1.result;
                      if (!cursor)
                        return resolve({ result: result_1 });
                      result_1.push(values ? cursor.value : cursor.primaryKey);
                      if (++count_1 === limit)
                        return resolve({ result: result_1 });
                      cursor.continue();
                    };
                    req_1.onerror = eventRejectHandler(reject);
                  }
                });
              };
            }
            return {
              name: tableName,
              schema: tableSchema,
              mutate,
              getMany: function(_a4) {
                var trans = _a4.trans, keys2 = _a4.keys;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var store = trans.objectStore(tableName);
                  var length = keys2.length;
                  var result2 = new Array(length);
                  var keyCount = 0;
                  var callbackCount = 0;
                  var req;
                  var successHandler = function(event) {
                    var req2 = event.target;
                    if ((result2[req2._pos] = req2.result) != null)
                      ;
                    if (++callbackCount === keyCount)
                      resolve(result2);
                  };
                  var errorHandler = eventRejectHandler(reject);
                  for (var i = 0; i < length; ++i) {
                    var key = keys2[i];
                    if (key != null) {
                      req = store.get(keys2[i]);
                      req._pos = i;
                      req.onsuccess = successHandler;
                      req.onerror = errorHandler;
                      ++keyCount;
                    }
                  }
                  if (keyCount === 0)
                    resolve(result2);
                });
              },
              get: function(_a4) {
                var trans = _a4.trans, key = _a4.key;
                return new Promise(function(resolve, reject) {
                  resolve = wrap(resolve);
                  var store = trans.objectStore(tableName);
                  var req = store.get(key);
                  req.onsuccess = function(event) {
                    return resolve(event.target.result);
                  };
                  req.onerror = eventRejectHandler(reject);
                });
              },
              query: query(hasGetAll),
              openCursor: openCursor2,
              count: function(_a4) {
                var query2 = _a4.query, trans = _a4.trans;
                var index = query2.index, range = query2.range;
                return new Promise(function(resolve, reject) {
                  var store = trans.objectStore(tableName);
                  var source = index.isPrimaryKey ? store : store.index(index.name);
                  var idbKeyRange = makeIDBKeyRange(range);
                  var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                  req.onsuccess = wrap(function(ev) {
                    return resolve(ev.target.result);
                  });
                  req.onerror = eventRejectHandler(reject);
                });
              }
            };
          }
          var _a3 = extractSchema(db2, tmpTrans), schema = _a3.schema, hasGetAll = _a3.hasGetAll;
          var tables = schema.tables.map(function(tableSchema) {
            return createDbCoreTable(tableSchema);
          });
          var tableMap = {};
          tables.forEach(function(table) {
            return tableMap[table.name] = table;
          });
          return {
            stack: "dbcore",
            transaction: db2.transaction.bind(db2),
            table: function(name) {
              var result2 = tableMap[name];
              if (!result2)
                throw new Error("Table '".concat(name, "' not found"));
              return tableMap[name];
            },
            MIN_KEY: -Infinity,
            MAX_KEY: getMaxKey(IdbKeyRange),
            schema
          };
        }
        function createMiddlewareStack(stackImpl, middlewares) {
          return middlewares.reduce(function(down, _a3) {
            var create = _a3.create;
            return __assign(__assign({}, down), create(down));
          }, stackImpl);
        }
        function createMiddlewareStacks(middlewares, idbdb, _a3, tmpTrans) {
          var IDBKeyRange = _a3.IDBKeyRange;
          _a3.indexedDB;
          var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
          return {
            dbcore
          };
        }
        function generateMiddlewareStacks(db2, tmpTrans) {
          var idbdb = tmpTrans.db;
          var stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
          db2.core = stacks.dbcore;
          db2.tables.forEach(function(table) {
            var tableName = table.name;
            if (db2.core.schema.tables.some(function(tbl) {
              return tbl.name === tableName;
            })) {
              table.core = db2.core.table(tableName);
              if (db2[tableName] instanceof db2.Table) {
                db2[tableName].core = table.core;
              }
            }
          });
        }
        function setApiOnPlace(db2, objs, tableNames, dbschema) {
          tableNames.forEach(function(tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function(obj) {
              var propDesc = getPropertyDescriptor(obj, tableName);
              if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
                if (obj === db2.Transaction.prototype || obj instanceof db2.Transaction) {
                  setProp(obj, tableName, {
                    get: function() {
                      return this.table(tableName);
                    },
                    set: function(value) {
                      defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
                    }
                  });
                } else {
                  obj[tableName] = new db2.Table(tableName, schema);
                }
              }
            });
          });
        }
        function removeTablesApi(db2, objs) {
          objs.forEach(function(obj) {
            for (var key in obj) {
              if (obj[key] instanceof db2.Table)
                delete obj[key];
            }
          });
        }
        function lowerVersionFirst(a, b) {
          return a._cfg.version - b._cfg.version;
        }
        function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
          var globalSchema = db2._dbSchema;
          if (idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta) {
            globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []);
            db2._storeNames.push("$meta");
          }
          var trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
          trans.create(idbUpgradeTrans);
          trans._completion.catch(reject);
          var rejectTransaction = trans._reject.bind(trans);
          var transless = PSD.transless || PSD;
          newScope(function() {
            PSD.trans = trans;
            PSD.transless = transless;
            if (oldVersion === 0) {
              keys(globalSchema).forEach(function(tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
              });
              generateMiddlewareStacks(db2, idbUpgradeTrans);
              DexiePromise.follow(function() {
                return db2.on.populate.fire(trans);
              }).catch(rejectTransaction);
            } else {
              generateMiddlewareStacks(db2, idbUpgradeTrans);
              return getExistingVersion(db2, trans, oldVersion).then(function(oldVersion2) {
                return updateTablesAndIndexes(db2, oldVersion2, trans, idbUpgradeTrans);
              }).catch(rejectTransaction);
            }
          });
        }
        function patchCurrentVersion(db2, idbUpgradeTrans) {
          createMissingTables(db2._dbSchema, idbUpgradeTrans);
          if (idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta")) {
            idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
          }
          var globalSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
          adjustToExistingIndexNames(db2, db2._dbSchema, idbUpgradeTrans);
          var diff = getSchemaDiff(globalSchema, db2._dbSchema);
          var _loop_1 = function(tableChange2) {
            if (tableChange2.change.length || tableChange2.recreate) {
              console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key."));
              return { value: void 0 };
            }
            var store = idbUpgradeTrans.objectStore(tableChange2.name);
            tableChange2.add.forEach(function(idx) {
              if (debug)
                console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src));
              addIndex(store, idx);
            });
          };
          for (var _i = 0, _a3 = diff.change; _i < _a3.length; _i++) {
            var tableChange = _a3[_i];
            var state_1 = _loop_1(tableChange);
            if (typeof state_1 === "object")
              return state_1.value;
          }
        }
        function getExistingVersion(db2, trans, oldVersion) {
          if (trans.storeNames.includes("$meta")) {
            return trans.table("$meta").get("version").then(function(metaVersion) {
              return metaVersion != null ? metaVersion : oldVersion;
            });
          } else {
            return DexiePromise.resolve(oldVersion);
          }
        }
        function updateTablesAndIndexes(db2, oldVersion, trans, idbUpgradeTrans) {
          var queue = [];
          var versions = db2._versions;
          var globalSchema = db2._dbSchema = buildGlobalSchema(db2, db2.idbdb, idbUpgradeTrans);
          var versToRun = versions.filter(function(v) {
            return v._cfg.version >= oldVersion;
          });
          if (versToRun.length === 0) {
            return DexiePromise.resolve();
          }
          versToRun.forEach(function(version) {
            queue.push(function() {
              var oldSchema = globalSchema;
              var newSchema = version._cfg.dbschema;
              adjustToExistingIndexNames(db2, oldSchema, idbUpgradeTrans);
              adjustToExistingIndexNames(db2, newSchema, idbUpgradeTrans);
              globalSchema = db2._dbSchema = newSchema;
              var diff = getSchemaDiff(oldSchema, newSchema);
              diff.add.forEach(function(tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
              });
              diff.change.forEach(function(change) {
                if (change.recreate) {
                  throw new exceptions.Upgrade("Not yet support for changing primary key");
                } else {
                  var store_1 = idbUpgradeTrans.objectStore(change.name);
                  change.add.forEach(function(idx) {
                    return addIndex(store_1, idx);
                  });
                  change.change.forEach(function(idx) {
                    store_1.deleteIndex(idx.name);
                    addIndex(store_1, idx);
                  });
                  change.del.forEach(function(idxName) {
                    return store_1.deleteIndex(idxName);
                  });
                }
              });
              var contentUpgrade = version._cfg.contentUpgrade;
              if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db2, idbUpgradeTrans);
                trans._memoizedTables = {};
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function(table) {
                  upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db2, [db2.Transaction.prototype]);
                setApiOnPlace(db2, [db2.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) {
                  incrementExpectedAwaits();
                }
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function() {
                  returnValue_1 = contentUpgrade(trans);
                  if (returnValue_1) {
                    if (contentUpgradeIsAsync_1) {
                      var decrementor = decrementExpectedAwaits.bind(null, null);
                      returnValue_1.then(decrementor, decrementor);
                    }
                  }
                });
                return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                  return returnValue_1;
                });
              }
            });
            queue.push(function(idbtrans) {
              var newSchema = version._cfg.dbschema;
              deleteRemovedTables(newSchema, idbtrans);
              removeTablesApi(db2, [db2.Transaction.prototype]);
              setApiOnPlace(db2, [db2.Transaction.prototype], db2._storeNames, db2._dbSchema);
              trans.schema = db2._dbSchema;
            });
            queue.push(function(idbtrans) {
              if (db2.idbdb.objectStoreNames.contains("$meta")) {
                if (Math.ceil(db2.idbdb.version / 10) === version._cfg.version) {
                  db2.idbdb.deleteObjectStore("$meta");
                  delete db2._dbSchema.$meta;
                  db2._storeNames = db2._storeNames.filter(function(name) {
                    return name !== "$meta";
                  });
                } else {
                  idbtrans.objectStore("$meta").put(version._cfg.version, "version");
                }
              }
            });
          });
          function runQueue() {
            return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
          }
          return runQueue().then(function() {
            createMissingTables(globalSchema, idbUpgradeTrans);
          });
        }
        function getSchemaDiff(oldSchema, newSchema) {
          var diff = {
            del: [],
            add: [],
            change: []
          };
          var table;
          for (table in oldSchema) {
            if (!newSchema[table])
              diff.del.push(table);
          }
          for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef) {
              diff.add.push([table, newDef]);
            } else {
              var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
              };
              if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto) {
                change.recreate = true;
                diff.change.push(change);
              } else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for (idxName in oldIndexes) {
                  if (!newIndexes[idxName])
                    change.del.push(idxName);
                }
                for (idxName in newIndexes) {
                  var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                  if (!oldIdx)
                    change.add.push(newIdx);
                  else if (oldIdx.src !== newIdx.src)
                    change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                  diff.change.push(change);
                }
              }
            }
          }
          return diff;
        }
        function createTable(idbtrans, tableName, primKey, indexes) {
          var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
          indexes.forEach(function(idx) {
            return addIndex(store, idx);
          });
          return store;
        }
        function createMissingTables(newSchema, idbtrans) {
          keys(newSchema).forEach(function(tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
              if (debug)
                console.debug("Dexie: Creating missing table", tableName);
              createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
          });
        }
        function deleteRemovedTables(newSchema, idbtrans) {
          [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
            return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
          });
        }
        function addIndex(store, idx) {
          store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
        }
        function buildGlobalSchema(db2, idbdb, tmpTrans) {
          var globalSchema = {};
          var dbStoreNames = slice(idbdb.objectStoreNames, 0);
          dbStoreNames.forEach(function(storeName) {
            var store = tmpTrans.objectStore(storeName);
            var keyPath = store.keyPath;
            var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", true, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
              var idbindex = store.index(store.indexNames[j]);
              keyPath = idbindex.keyPath;
              var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
              indexes.push(index);
            }
            globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
          });
          return globalSchema;
        }
        function readGlobalSchema(db2, idbdb, tmpTrans) {
          db2.verno = idbdb.version / 10;
          var globalSchema = db2._dbSchema = buildGlobalSchema(db2, idbdb, tmpTrans);
          db2._storeNames = slice(idbdb.objectStoreNames, 0);
          setApiOnPlace(db2, [db2._allTables], keys(globalSchema), globalSchema);
        }
        function verifyInstalledSchema(db2, tmpTrans) {
          var installedSchema = buildGlobalSchema(db2, db2.idbdb, tmpTrans);
          var diff = getSchemaDiff(installedSchema, db2._dbSchema);
          return !(diff.add.length || diff.change.some(function(ch) {
            return ch.add.length || ch.change.length;
          }));
        }
        function adjustToExistingIndexNames(db2, schema, idbtrans) {
          var storeNames = idbtrans.db.objectStoreNames;
          for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            db2._hasGetAll = "getAll" in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
              var indexName = store.indexNames[j];
              var keyPath = store.index(indexName).keyPath;
              var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
              if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                  indexSpec.name = indexName;
                  delete schema[storeName].idxByName[dexieName];
                  schema[storeName].idxByName[indexName] = indexSpec;
                }
              }
            }
          }
          if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
            db2._hasGetAll = false;
          }
        }
        function parseIndexSyntax(primKeyAndIndexes) {
          return primKeyAndIndexes.split(",").map(function(index, indexNum) {
            var _a3;
            var typeSplit = index.split(":");
            var type2 = (_a3 = typeSplit[1]) === null || _a3 === void 0 ? void 0 : _a3.trim();
            index = typeSplit[0].trim();
            var name = index.replace(/([&*]|\+\+)/g, "");
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
            return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0, type2);
          });
        }
        var Version = function() {
          function Version2() {
          }
          Version2.prototype._createTableSchema = function(name, primKey, indexes) {
            return createTableSchema(name, primKey, indexes);
          };
          Version2.prototype._parseIndexSyntax = function(primKeyAndIndexes) {
            return parseIndexSyntax(primKeyAndIndexes);
          };
          Version2.prototype._parseStoresSpec = function(stores, outSchema) {
            var _this = this;
            keys(stores).forEach(function(tableName) {
              if (stores[tableName] !== null) {
                var indexes = _this._parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (!primKey) {
                  throw new exceptions.Schema("Invalid schema for table " + tableName + ": " + stores[tableName]);
                }
                primKey.unique = true;
                if (primKey.multi)
                  throw new exceptions.Schema("Primary key cannot be multiEntry*");
                indexes.forEach(function(idx) {
                  if (idx.auto)
                    throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                  if (!idx.keyPath)
                    throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                var tblSchema = _this._createTableSchema(tableName, primKey, indexes);
                outSchema[tableName] = tblSchema;
              }
            });
          };
          Version2.prototype.stores = function(stores) {
            var db2 = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
            var versions = db2._versions;
            var storesSpec = {};
            var dbschema = {};
            versions.forEach(function(version) {
              extend(storesSpec, version._cfg.storesSource);
              dbschema = version._cfg.dbschema = {};
              version._parseStoresSpec(storesSpec, dbschema);
            });
            db2._dbSchema = dbschema;
            removeTablesApi(db2, [db2._allTables, db2, db2.Transaction.prototype]);
            setApiOnPlace(db2, [db2._allTables, db2, db2.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
            db2._storeNames = keys(dbschema);
            return this;
          };
          Version2.prototype.upgrade = function(upgradeFunction) {
            this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
            return this;
          };
          return Version2;
        }();
        function createVersionConstructor(db2) {
          return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
            this.db = db2;
            this._cfg = {
              version: versionNumber,
              storesSource: null,
              dbschema: {},
              tables: {},
              contentUpgrade: null
            };
          });
        }
        function getDbNamesTable(indexedDB2, IDBKeyRange) {
          var dbNamesDB = indexedDB2["_dbNamesDB"];
          if (!dbNamesDB) {
            dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
              addons: [],
              indexedDB: indexedDB2,
              IDBKeyRange
            });
            dbNamesDB.version(1).stores({ dbnames: "name" });
          }
          return dbNamesDB.table("dbnames");
        }
        function hasDatabasesNative(indexedDB2) {
          return indexedDB2 && typeof indexedDB2.databases === "function";
        }
        function getDatabaseNames(_a3) {
          var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
          return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
            return infos.map(function(info) {
              return info.name;
            }).filter(function(name) {
              return name !== DBNAMES_DB;
            });
          }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
        }
        function _onDatabaseCreated(_a3, name) {
          var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop);
        }
        function _onDatabaseDeleted(_a3, name) {
          var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
          !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
        }
        function vip(fn) {
          return newScope(function() {
            PSD.letThrough = true;
            return fn();
          });
        }
        function idbReady() {
          var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
          if (!isSafari || !indexedDB.databases)
            return Promise.resolve();
          var intervalId;
          return new Promise(function(resolve) {
            var tryIdb = function() {
              return indexedDB.databases().finally(resolve);
            };
            intervalId = setInterval(tryIdb, 100);
            tryIdb();
          }).finally(function() {
            return clearInterval(intervalId);
          });
        }
        var _a2;
        function isEmptyRange(node) {
          return !("from" in node);
        }
        var RangeSet2 = function(fromOrTree, to) {
          if (this) {
            extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to : fromOrTree } : { d: 0 });
          } else {
            var rv = new RangeSet2();
            if (fromOrTree && "d" in fromOrTree) {
              extend(rv, fromOrTree);
            }
            return rv;
          }
        };
        props(RangeSet2.prototype, (_a2 = {
          add: function(rangeSet) {
            mergeRanges2(this, rangeSet);
            return this;
          },
          addKey: function(key) {
            addRange(this, key, key);
            return this;
          },
          addKeys: function(keys2) {
            var _this = this;
            keys2.forEach(function(key) {
              return addRange(_this, key, key);
            });
            return this;
          },
          hasKey: function(key) {
            var node = getRangeSetIterator(this).next(key).value;
            return node && cmp2(node.from, key) <= 0 && cmp2(node.to, key) >= 0;
          }
        }, _a2[iteratorSymbol] = function() {
          return getRangeSetIterator(this);
        }, _a2));
        function addRange(target, from, to) {
          var diff = cmp2(from, to);
          if (isNaN(diff))
            return;
          if (diff > 0)
            throw RangeError();
          if (isEmptyRange(target))
            return extend(target, { from, to, d: 1 });
          var left = target.l;
          var right = target.r;
          if (cmp2(to, target.from) < 0) {
            left ? addRange(left, from, to) : target.l = { from, to, d: 1, l: null, r: null };
            return rebalance(target);
          }
          if (cmp2(from, target.to) > 0) {
            right ? addRange(right, from, to) : target.r = { from, to, d: 1, l: null, r: null };
            return rebalance(target);
          }
          if (cmp2(from, target.from) < 0) {
            target.from = from;
            target.l = null;
            target.d = right ? right.d + 1 : 1;
          }
          if (cmp2(to, target.to) > 0) {
            target.to = to;
            target.r = null;
            target.d = target.l ? target.l.d + 1 : 1;
          }
          var rightWasCutOff = !target.r;
          if (left && !target.l) {
            mergeRanges2(target, left);
          }
          if (right && rightWasCutOff) {
            mergeRanges2(target, right);
          }
        }
        function mergeRanges2(target, newSet) {
          function _addRangeSet(target2, _a3) {
            var from = _a3.from, to = _a3.to, l = _a3.l, r = _a3.r;
            addRange(target2, from, to);
            if (l)
              _addRangeSet(target2, l);
            if (r)
              _addRangeSet(target2, r);
          }
          if (!isEmptyRange(newSet))
            _addRangeSet(target, newSet);
        }
        function rangesOverlap2(rangeSet1, rangeSet2) {
          var i1 = getRangeSetIterator(rangeSet2);
          var nextResult1 = i1.next();
          if (nextResult1.done)
            return false;
          var a = nextResult1.value;
          var i2 = getRangeSetIterator(rangeSet1);
          var nextResult2 = i2.next(a.from);
          var b = nextResult2.value;
          while (!nextResult1.done && !nextResult2.done) {
            if (cmp2(b.from, a.to) <= 0 && cmp2(b.to, a.from) >= 0)
              return true;
            cmp2(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
          }
          return false;
        }
        function getRangeSetIterator(node) {
          var state = isEmptyRange(node) ? null : { s: 0, n: node };
          return {
            next: function(key) {
              var keyProvided = arguments.length > 0;
              while (state) {
                switch (state.s) {
                  case 0:
                    state.s = 1;
                    if (keyProvided) {
                      while (state.n.l && cmp2(key, state.n.from) < 0)
                        state = { up: state, n: state.n.l, s: 1 };
                    } else {
                      while (state.n.l)
                        state = { up: state, n: state.n.l, s: 1 };
                    }
                  case 1:
                    state.s = 2;
                    if (!keyProvided || cmp2(key, state.n.to) <= 0)
                      return { value: state.n, done: false };
                  case 2:
                    if (state.n.r) {
                      state.s = 3;
                      state = { up: state, n: state.n.r, s: 0 };
                      continue;
                    }
                  case 3:
                    state = state.up;
                }
              }
              return { done: true };
            }
          };
        }
        function rebalance(target) {
          var _a3, _b2;
          var diff = (((_a3 = target.r) === null || _a3 === void 0 ? void 0 : _a3.d) || 0) - (((_b2 = target.l) === null || _b2 === void 0 ? void 0 : _b2.d) || 0);
          var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
          if (r) {
            var l = r === "r" ? "l" : "r";
            var rootClone = __assign({}, target);
            var oldRootRight = target[r];
            target.from = oldRootRight.from;
            target.to = oldRootRight.to;
            target[r] = oldRootRight[r];
            rootClone[r] = oldRootRight[l];
            target[l] = rootClone;
            rootClone.d = computeDepth(rootClone);
          }
          target.d = computeDepth(target);
        }
        function computeDepth(_a3) {
          var r = _a3.r, l = _a3.l;
          return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
        }
        function extendObservabilitySet(target, newSet) {
          keys(newSet).forEach(function(part) {
            if (target[part])
              mergeRanges2(target[part], newSet[part]);
            else
              target[part] = cloneSimpleObjectTree(newSet[part]);
          });
          return target;
        }
        function obsSetsOverlap(os1, os2) {
          return os1.all || os2.all || Object.keys(os1).some(function(key) {
            return os2[key] && rangesOverlap2(os2[key], os1[key]);
          });
        }
        var cache = {};
        var unsignaledParts = {};
        var isTaskEnqueued = false;
        function signalSubscribersLazily(part, optimistic) {
          extendObservabilitySet(unsignaledParts, part);
          if (!isTaskEnqueued) {
            isTaskEnqueued = true;
            setTimeout(function() {
              isTaskEnqueued = false;
              var parts = unsignaledParts;
              unsignaledParts = {};
              signalSubscribersNow(parts, false);
            }, 0);
          }
        }
        function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
          if (deleteAffectedCacheEntries === void 0) {
            deleteAffectedCacheEntries = false;
          }
          var queriesToSignal = /* @__PURE__ */ new Set();
          if (updatedParts.all) {
            for (var _i = 0, _a3 = Object.values(cache); _i < _a3.length; _i++) {
              var tblCache = _a3[_i];
              collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
            }
          } else {
            for (var key in updatedParts) {
              var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
              if (parts) {
                var dbName = parts[1], tableName = parts[2];
                var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                if (tblCache)
                  collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
              }
            }
          }
          queriesToSignal.forEach(function(requery) {
            return requery();
          });
        }
        function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
          var updatedEntryLists = [];
          for (var _i = 0, _a3 = Object.entries(tblCache.queries.query); _i < _a3.length; _i++) {
            var _b2 = _a3[_i], indexName = _b2[0], entries = _b2[1];
            var filteredEntries = [];
            for (var _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
              var entry = entries_1[_c];
              if (obsSetsOverlap(updatedParts, entry.obsSet)) {
                entry.subscribers.forEach(function(requery) {
                  return outQueriesToSignal.add(requery);
                });
              } else if (deleteAffectedCacheEntries) {
                filteredEntries.push(entry);
              }
            }
            if (deleteAffectedCacheEntries)
              updatedEntryLists.push([indexName, filteredEntries]);
          }
          if (deleteAffectedCacheEntries) {
            for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
              var _e = updatedEntryLists_1[_d], indexName = _e[0], filteredEntries = _e[1];
              tblCache.queries.query[indexName] = filteredEntries;
            }
          }
        }
        function dexieOpen(db2) {
          var state = db2._state;
          var indexedDB2 = db2._deps.indexedDB;
          if (state.isBeingOpened || db2.idbdb)
            return state.dbReadyPromise.then(function() {
              return state.dbOpenError ? rejection(state.dbOpenError) : db2;
            });
          state.isBeingOpened = true;
          state.dbOpenError = null;
          state.openComplete = false;
          var openCanceller = state.openCanceller;
          var nativeVerToOpen = Math.round(db2.verno * 10);
          var schemaPatchMode = false;
          function throwIfCancelled() {
            if (state.openCanceller !== openCanceller)
              throw new exceptions.DatabaseClosed("db.open() was cancelled");
          }
          var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
          var tryOpenDB = function() {
            return new DexiePromise(function(resolve, reject) {
              throwIfCancelled();
              if (!indexedDB2)
                throw new exceptions.MissingAPI();
              var dbName = db2.name;
              var req = state.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
              if (!req)
                throw new exceptions.MissingAPI();
              req.onerror = eventRejectHandler(reject);
              req.onblocked = wrap(db2._fireOnBlocked);
              req.onupgradeneeded = wrap(function(e) {
                upgradeTransaction = req.transaction;
                if (state.autoSchema && !db2._options.allowEmptyDB) {
                  req.onerror = preventDefault;
                  upgradeTransaction.abort();
                  req.result.close();
                  var delreq = indexedDB2.deleteDatabase(dbName);
                  delreq.onsuccess = delreq.onerror = wrap(function() {
                    reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
                  });
                } else {
                  upgradeTransaction.onerror = eventRejectHandler(reject);
                  var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                  wasCreated = oldVer < 1;
                  db2.idbdb = req.result;
                  if (schemaPatchMode) {
                    patchCurrentVersion(db2, upgradeTransaction);
                  }
                  runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
                }
              }, reject);
              req.onsuccess = wrap(function() {
                upgradeTransaction = null;
                var idbdb = db2.idbdb = req.result;
                var objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                  try {
                    var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                    if (state.autoSchema)
                      readGlobalSchema(db2, idbdb, tmpTrans);
                    else {
                      adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans);
                      if (!verifyInstalledSchema(db2, tmpTrans) && !schemaPatchMode) {
                        console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.");
                        idbdb.close();
                        nativeVerToOpen = idbdb.version + 1;
                        schemaPatchMode = true;
                        return resolve(tryOpenDB());
                      }
                    }
                    generateMiddlewareStacks(db2, tmpTrans);
                  } catch (e) {
                  }
                connections.push(db2);
                idbdb.onversionchange = wrap(function(ev) {
                  state.vcFired = true;
                  db2.on("versionchange").fire(ev);
                });
                idbdb.onclose = wrap(function(ev) {
                  db2.on("close").fire(ev);
                });
                if (wasCreated)
                  _onDatabaseCreated(db2._deps, dbName);
                resolve();
              }, reject);
            }).catch(function(err) {
              switch (err === null || err === void 0 ? void 0 : err.name) {
                case "UnknownError":
                  if (state.PR1398_maxLoop > 0) {
                    state.PR1398_maxLoop--;
                    console.warn("Dexie: Workaround for Chrome UnknownError on open()");
                    return tryOpenDB();
                  }
                  break;
                case "VersionError":
                  if (nativeVerToOpen > 0) {
                    nativeVerToOpen = 0;
                    return tryOpenDB();
                  }
                  break;
              }
              return DexiePromise.reject(err);
            });
          };
          return DexiePromise.race([
            openCanceller,
            (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
          ]).then(function() {
            throwIfCancelled();
            state.onReadyBeingFired = [];
            return DexiePromise.resolve(vip(function() {
              return db2.on.ready.fire(db2.vip);
            })).then(function fireRemainders() {
              if (state.onReadyBeingFired.length > 0) {
                var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
                state.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(function() {
                  return remainders_1(db2.vip);
                })).then(fireRemainders);
              }
            });
          }).finally(function() {
            if (state.openCanceller === openCanceller) {
              state.onReadyBeingFired = null;
              state.isBeingOpened = false;
            }
          }).catch(function(err) {
            state.dbOpenError = err;
            try {
              upgradeTransaction && upgradeTransaction.abort();
            } catch (_a3) {
            }
            if (openCanceller === state.openCanceller) {
              db2._close();
            }
            return rejection(err);
          }).finally(function() {
            state.openComplete = true;
            resolveDbReady();
          }).then(function() {
            if (wasCreated) {
              var everything_1 = {};
              db2.tables.forEach(function(table) {
                table.schema.indexes.forEach(function(idx) {
                  if (idx.name)
                    everything_1["idb://".concat(db2.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet2(-Infinity, [[[]]]);
                });
                everything_1["idb://".concat(db2.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db2.name, "/").concat(table.name, "/:dels")] = new RangeSet2(-Infinity, [[[]]]);
              });
              globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1);
              signalSubscribersNow(everything_1, true);
            }
            return db2;
          });
        }
        function awaitIterator(iterator) {
          var callNext = function(result2) {
            return iterator.next(result2);
          }, doThrow = function(error) {
            return iterator.throw(error);
          }, onSuccess = step(callNext), onError = step(doThrow);
          function step(getNext) {
            return function(val) {
              var next = getNext(val), value = next.value;
              return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
            };
          }
          return step(callNext)();
        }
        function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
          var i = arguments.length;
          if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
          var args = new Array(i - 1);
          while (--i)
            args[i - 1] = arguments[i];
          scopeFunc = args.pop();
          var tables = flatten(args);
          return [mode, tables, scopeFunc];
        }
        function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
          return DexiePromise.resolve().then(function() {
            var transless = PSD.transless || PSD;
            var trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction);
            trans.explicit = true;
            var zoneProps = {
              trans,
              transless
            };
            if (parentTransaction) {
              trans.idbtrans = parentTransaction.idbtrans;
            } else {
              try {
                trans.create();
                trans.idbtrans._explicit = true;
                db2._state.PR1398_maxLoop = 3;
              } catch (ex) {
                if (ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0) {
                  console.warn("Dexie: Need to reopen db");
                  db2.close({ disableAutoOpen: false });
                  return db2.open().then(function() {
                    return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
                  });
                }
                return rejection(ex);
              }
            }
            var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
            if (scopeFuncIsAsync) {
              incrementExpectedAwaits();
            }
            var returnValue;
            var promiseFollowed = DexiePromise.follow(function() {
              returnValue = scopeFunc.call(trans, trans);
              if (returnValue) {
                if (scopeFuncIsAsync) {
                  var decrementor = decrementExpectedAwaits.bind(null, null);
                  returnValue.then(decrementor, decrementor);
                } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
                  returnValue = awaitIterator(returnValue);
                }
              }
            }, zoneProps);
            return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
              return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : promiseFollowed.then(function() {
              return returnValue;
            })).then(function(x) {
              if (parentTransaction)
                trans._resolve();
              return trans._completion.then(function() {
                return x;
              });
            }).catch(function(e) {
              trans._reject(e);
              return rejection(e);
            });
          });
        }
        function pad(a, value, count) {
          var result2 = isArray(a) ? a.slice() : [a];
          for (var i = 0; i < count; ++i)
            result2.push(value);
          return result2;
        }
        function createVirtualIndexMiddleware(down) {
          return __assign(__assign({}, down), { table: function(tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
              var keyPathAlias = getKeyPathAlias(keyPath);
              var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
              var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
              var isVirtual = keyTail > 0;
              var virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
              indexList.push(virtualIndex);
              if (!virtualIndex.isPrimaryKey) {
                allVirtualIndexes.push(virtualIndex);
              }
              if (keyLength > 1) {
                var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
                addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
              }
              indexList.sort(function(a, b) {
                return a.keyTail - b.keyTail;
              });
              return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a3 = schema.indexes; _i < _a3.length; _i++) {
              var index = _a3[_i];
              addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
              var result3 = indexLookup[getKeyPathAlias(keyPath)];
              return result3 && result3[0];
            }
            function translateRange(range, keyTail) {
              return {
                type: range.type === 1 ? 2 : range.type,
                lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                lowerOpen: true,
                upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                upperOpen: true
              };
            }
            function translateRequest(req) {
              var index2 = req.query.index;
              return index2.isVirtual ? __assign(__assign({}, req), { query: {
                index: index2.lowLevelIndex,
                range: translateRange(req.query.range, index2.keyTail)
              } }) : req;
            }
            var result2 = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
              return table.count(translateRequest(req));
            }, query: function(req) {
              return table.query(translateRequest(req));
            }, openCursor: function(req) {
              var _a4 = req.query.index, keyTail = _a4.keyTail, isVirtual = _a4.isVirtual, keyLength = _a4.keyLength;
              if (!isVirtual)
                return table.openCursor(req);
              function createVirtualCursor(cursor) {
                function _continue(key) {
                  key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
                }
                var virtualCursor = Object.create(cursor, {
                  continue: { value: _continue },
                  continuePrimaryKey: {
                    value: function(key, primaryKey2) {
                      cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                    }
                  },
                  primaryKey: {
                    get: function() {
                      return cursor.primaryKey;
                    }
                  },
                  key: {
                    get: function() {
                      var key = cursor.key;
                      return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                    }
                  },
                  value: {
                    get: function() {
                      return cursor.value;
                    }
                  }
                });
                return virtualCursor;
              }
              return table.openCursor(translateRequest(req)).then(function(cursor) {
                return cursor && createVirtualCursor(cursor);
              });
            } });
            return result2;
          } });
        }
        var virtualIndexMiddleware = {
          stack: "dbcore",
          name: "VirtualIndexMiddleware",
          level: 1,
          create: createVirtualIndexMiddleware
        };
        function getObjectDiff(a, b, rv, prfx) {
          rv = rv || {};
          prfx = prfx || "";
          keys(a).forEach(function(prop) {
            if (!hasOwn(b, prop)) {
              rv[prfx + prop] = void 0;
            } else {
              var ap = a[prop], bp = b[prop];
              if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName !== bpTypeName) {
                  rv[prfx + prop] = b[prop];
                } else if (apTypeName === "Object") {
                  getObjectDiff(ap, bp, rv, prfx + prop + ".");
                } else if (ap !== bp) {
                  rv[prfx + prop] = b[prop];
                }
              } else if (ap !== bp)
                rv[prfx + prop] = b[prop];
            }
          });
          keys(b).forEach(function(prop) {
            if (!hasOwn(a, prop)) {
              rv[prfx + prop] = b[prop];
            }
          });
          return rv;
        }
        function getEffectiveKeys(primaryKey, req) {
          if (req.type === "delete")
            return req.keys;
          return req.keys || req.values.map(primaryKey.extractKey);
        }
        var hooksMiddleware = {
          stack: "dbcore",
          name: "HooksMiddleware",
          level: 2,
          create: function(downCore) {
            return __assign(__assign({}, downCore), { table: function(tableName) {
              var downTable = downCore.table(tableName);
              var primaryKey = downTable.schema.primaryKey;
              var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
                var dxTrans = PSD.trans;
                var _a3 = dxTrans.table(tableName).hook, deleting = _a3.deleting, creating = _a3.creating, updating = _a3.updating;
                switch (req.type) {
                  case "add":
                    if (creating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "put":
                    if (creating.fire === nop && updating.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "delete":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return addPutOrDelete(req);
                    }, true);
                  case "deleteRange":
                    if (deleting.fire === nop)
                      break;
                    return dxTrans._promise("readwrite", function() {
                      return deleteRange(req);
                    }, true);
                }
                return downTable.mutate(req);
                function addPutOrDelete(req2) {
                  var dxTrans2 = PSD.trans;
                  var keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
                  if (!keys2)
                    throw new Error("Keys missing");
                  req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys2 }) : __assign({}, req2);
                  if (req2.type !== "delete")
                    req2.values = __spreadArray([], req2.values);
                  if (req2.keys)
                    req2.keys = __spreadArray([], req2.keys);
                  return getExistingValues(downTable, req2, keys2).then(function(existingValues) {
                    var contexts = keys2.map(function(key, i) {
                      var existingValue = existingValues[i];
                      var ctx = { onerror: null, onsuccess: null };
                      if (req2.type === "delete") {
                        deleting.fire.call(ctx, key, existingValue, dxTrans2);
                      } else if (req2.type === "add" || existingValue === void 0) {
                        var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                        if (key == null && generatedPrimaryKey != null) {
                          key = generatedPrimaryKey;
                          req2.keys[i] = key;
                          if (!primaryKey.outbound) {
                            setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                          }
                        }
                      } else {
                        var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                        var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                        if (additionalChanges_1) {
                          var requestedValue_1 = req2.values[i];
                          Object.keys(additionalChanges_1).forEach(function(keyPath) {
                            if (hasOwn(requestedValue_1, keyPath)) {
                              requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                            } else {
                              setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                            }
                          });
                        }
                      }
                      return ctx;
                    });
                    return downTable.mutate(req2).then(function(_a4) {
                      var failures = _a4.failures, results = _a4.results, numFailures = _a4.numFailures, lastResult = _a4.lastResult;
                      for (var i = 0; i < keys2.length; ++i) {
                        var primKey = results ? results[i] : keys2[i];
                        var ctx = contexts[i];
                        if (primKey == null) {
                          ctx.onerror && ctx.onerror(failures[i]);
                        } else {
                          ctx.onsuccess && ctx.onsuccess(
                            req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                          );
                        }
                      }
                      return { failures, results, numFailures, lastResult };
                    }).catch(function(error) {
                      contexts.forEach(function(ctx) {
                        return ctx.onerror && ctx.onerror(error);
                      });
                      return Promise.reject(error);
                    });
                  });
                }
                function deleteRange(req2) {
                  return deleteNextChunk(req2.trans, req2.range, 1e4);
                }
                function deleteNextChunk(trans, range, limit) {
                  return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a4) {
                    var result2 = _a4.result;
                    return addPutOrDelete({ type: "delete", keys: result2, trans }).then(function(res) {
                      if (res.numFailures > 0)
                        return Promise.reject(res.failures[0]);
                      if (result2.length < limit) {
                        return { failures: [], numFailures: 0, lastResult: void 0 };
                      } else {
                        return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result2[result2.length - 1], lowerOpen: true }), limit);
                      }
                    });
                  });
                }
              } });
              return tableMiddleware;
            } });
          }
        };
        function getExistingValues(table, req, effectiveKeys) {
          return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
        }
        function getFromTransactionCache(keys2, cache2, clone) {
          try {
            if (!cache2)
              return null;
            if (cache2.keys.length < keys2.length)
              return null;
            var result2 = [];
            for (var i = 0, j = 0; i < cache2.keys.length && j < keys2.length; ++i) {
              if (cmp2(cache2.keys[i], keys2[j]) !== 0)
                continue;
              result2.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
              ++j;
            }
            return result2.length === keys2.length ? result2 : null;
          } catch (_a3) {
            return null;
          }
        }
        var cacheExistingValuesMiddleware = {
          stack: "dbcore",
          level: -1,
          create: function(core) {
            return {
              table: function(tableName) {
                var table = core.table(tableName);
                return __assign(__assign({}, table), { getMany: function(req) {
                  if (!req.cache) {
                    return table.getMany(req);
                  }
                  var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                  if (cachedResult) {
                    return DexiePromise.resolve(cachedResult);
                  }
                  return table.getMany(req).then(function(res) {
                    req.trans["_cache"] = {
                      keys: req.keys,
                      values: req.cache === "clone" ? deepClone(res) : res
                    };
                    return res;
                  });
                }, mutate: function(req) {
                  if (req.type !== "add")
                    req.trans["_cache"] = null;
                  return table.mutate(req);
                } });
              }
            };
          }
        };
        function isCachableContext(ctx, table) {
          return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
        }
        function isCachableRequest(type2, req) {
          switch (type2) {
            case "query":
              return req.values && !req.unique;
            case "get":
              return false;
            case "getMany":
              return false;
            case "count":
              return false;
            case "openCursor":
              return false;
          }
        }
        var observabilityMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Observability",
          create: function(core) {
            var dbName = core.schema.name;
            var FULL_RANGE = new RangeSet2(core.MIN_KEY, core.MAX_KEY);
            return __assign(__assign({}, core), { transaction: function(stores, mode, options) {
              if (PSD.subscr && mode !== "readonly") {
                throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
              }
              return core.transaction(stores, mode, options);
            }, table: function(tableName) {
              var table = core.table(tableName);
              var schema = table.schema;
              var primaryKey = schema.primaryKey, indexes = schema.indexes;
              var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
              var indexesWithAutoIncPK = primaryKey.autoIncrement && indexes.filter(function(index) {
                return index.compound && index.keyPath.includes(primaryKey.keyPath);
              });
              var tableClone = __assign(__assign({}, table), { mutate: function(req) {
                var _a3, _b2;
                var trans = req.trans;
                var mutatedParts = req.mutatedParts || (req.mutatedParts = {});
                var getRangeSet = function(indexName) {
                  var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                  return mutatedParts[part] || (mutatedParts[part] = new RangeSet2());
                };
                var pkRangeSet = getRangeSet("");
                var delsRangeSet = getRangeSet(":dels");
                var type2 = req.type;
                var _c = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [getEffectiveKeys(primaryKey, req).filter(function(id) {
                  return id;
                }), req.values] : [], keys2 = _c[0], newObjs = _c[1];
                var oldCache = req.trans["_cache"];
                if (isArray(keys2)) {
                  pkRangeSet.addKeys(keys2);
                  var oldObjs = type2 === "delete" || keys2.length === newObjs.length ? getFromTransactionCache(keys2, oldCache) : null;
                  if (!oldObjs) {
                    delsRangeSet.addKeys(keys2);
                  }
                  if (oldObjs || newObjs) {
                    trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                  }
                } else if (keys2) {
                  var range = {
                    from: (_a3 = keys2.lower) !== null && _a3 !== void 0 ? _a3 : core.MIN_KEY,
                    to: (_b2 = keys2.upper) !== null && _b2 !== void 0 ? _b2 : core.MAX_KEY
                  };
                  delsRangeSet.add(range);
                  pkRangeSet.add(range);
                } else {
                  pkRangeSet.add(FULL_RANGE);
                  delsRangeSet.add(FULL_RANGE);
                  schema.indexes.forEach(function(idx) {
                    return getRangeSet(idx.name).add(FULL_RANGE);
                  });
                }
                return table.mutate(req).then(function(res) {
                  if (keys2 && (req.type === "add" || req.type === "put")) {
                    pkRangeSet.addKeys(res.results);
                    if (indexesWithAutoIncPK) {
                      indexesWithAutoIncPK.forEach(function(idx) {
                        var idxVals = req.values.map(function(v) {
                          return idx.extractKey(v);
                        });
                        var pkPos = idx.keyPath.findIndex(function(prop) {
                          return prop === primaryKey.keyPath;
                        });
                        for (var i = 0, len = res.results.length; i < len; ++i) {
                          idxVals[i][pkPos] = res.results[i];
                        }
                        getRangeSet(idx.name).addKeys(idxVals);
                      });
                    }
                  }
                  trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts);
                  return res;
                });
              } });
              var getRange = function(_a3) {
                var _b2, _c;
                var _d = _a3.query, index = _d.index, range = _d.range;
                return [
                  index,
                  new RangeSet2((_b2 = range.lower) !== null && _b2 !== void 0 ? _b2 : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
                ];
              };
              var readSubscribers = {
                get: function(req) {
                  return [primaryKey, new RangeSet2(req.key)];
                },
                getMany: function(req) {
                  return [primaryKey, new RangeSet2().addKeys(req.keys)];
                },
                count: getRange,
                query: getRange,
                openCursor: getRange
              };
              keys(readSubscribers).forEach(function(method) {
                tableClone[method] = function(req) {
                  var subscr = PSD.subscr;
                  var isLiveQuery = !!subscr;
                  var cachable = isCachableContext(PSD, table) && isCachableRequest(method, req);
                  var obsSet = cachable ? req.obsSet = {} : subscr;
                  if (isLiveQuery) {
                    var getRangeSet = function(indexName) {
                      var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                      return obsSet[part] || (obsSet[part] = new RangeSet2());
                    };
                    var pkRangeSet_1 = getRangeSet("");
                    var delsRangeSet_1 = getRangeSet(":dels");
                    var _a3 = readSubscribers[method](req), queriedIndex = _a3[0], queriedRanges = _a3[1];
                    if (method === "query" && queriedIndex.isPrimaryKey && !req.values) {
                      delsRangeSet_1.add(queriedRanges);
                    } else {
                      getRangeSet(queriedIndex.name || "").add(queriedRanges);
                    }
                    if (!queriedIndex.isPrimaryKey) {
                      if (method === "count") {
                        delsRangeSet_1.add(FULL_RANGE);
                      } else {
                        var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                        return table[method].apply(this, arguments).then(function(res) {
                          if (method === "query") {
                            if (outbound && req.values) {
                              return keysPromise_1.then(function(_a4) {
                                var resultingKeys = _a4.result;
                                pkRangeSet_1.addKeys(resultingKeys);
                                return res;
                              });
                            }
                            var pKeys = req.values ? res.result.map(extractKey) : res.result;
                            if (req.values) {
                              pkRangeSet_1.addKeys(pKeys);
                            } else {
                              delsRangeSet_1.addKeys(pKeys);
                            }
                          } else if (method === "openCursor") {
                            var cursor_1 = res;
                            var wantValues_1 = req.values;
                            return cursor_1 && Object.create(cursor_1, {
                              key: {
                                get: function() {
                                  delsRangeSet_1.addKey(cursor_1.primaryKey);
                                  return cursor_1.key;
                                }
                              },
                              primaryKey: {
                                get: function() {
                                  var pkey = cursor_1.primaryKey;
                                  delsRangeSet_1.addKey(pkey);
                                  return pkey;
                                }
                              },
                              value: {
                                get: function() {
                                  wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                  return cursor_1.value;
                                }
                              }
                            });
                          }
                          return res;
                        });
                      }
                    }
                  }
                  return table[method].apply(this, arguments);
                };
              });
              return tableClone;
            } });
          }
        };
        function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
          function addAffectedIndex(ix) {
            var rangeSet = getRangeSet(ix.name || "");
            function extractKey(obj) {
              return obj != null ? ix.extractKey(obj) : null;
            }
            var addKeyOrKeys = function(key) {
              return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
                return rangeSet.addKey(key2);
              }) : rangeSet.addKey(key);
            };
            (oldObjs || newObjs).forEach(function(_, i) {
              var oldKey = oldObjs && extractKey(oldObjs[i]);
              var newKey = newObjs && extractKey(newObjs[i]);
              if (cmp2(oldKey, newKey) !== 0) {
                if (oldKey != null)
                  addKeyOrKeys(oldKey);
                if (newKey != null)
                  addKeyOrKeys(newKey);
              }
            });
          }
          schema.indexes.forEach(addAffectedIndex);
        }
        function adjustOptimisticFromFailures(tblCache, req, res) {
          if (res.numFailures === 0)
            return req;
          if (req.type === "deleteRange") {
            return null;
          }
          var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
          if (res.numFailures === numBulkOps) {
            return null;
          }
          var clone = __assign({}, req);
          if (isArray(clone.keys)) {
            clone.keys = clone.keys.filter(function(_, i) {
              return !(i in res.failures);
            });
          }
          if ("values" in clone && isArray(clone.values)) {
            clone.values = clone.values.filter(function(_, i) {
              return !(i in res.failures);
            });
          }
          return clone;
        }
        function isAboveLower(key, range) {
          return range.lower === void 0 ? true : range.lowerOpen ? cmp2(key, range.lower) > 0 : cmp2(key, range.lower) >= 0;
        }
        function isBelowUpper(key, range) {
          return range.upper === void 0 ? true : range.upperOpen ? cmp2(key, range.upper) < 0 : cmp2(key, range.upper) <= 0;
        }
        function isWithinRange(key, range) {
          return isAboveLower(key, range) && isBelowUpper(key, range);
        }
        function applyOptimisticOps(result2, req, ops, table, cacheEntry, immutable) {
          if (!ops || ops.length === 0)
            return result2;
          var index = req.query.index;
          var multiEntry = index.multiEntry;
          var queryRange = req.query.range;
          var primaryKey = table.schema.primaryKey;
          var extractPrimKey = primaryKey.extractKey;
          var extractIndex = index.extractKey;
          var extractLowLevelIndex = (index.lowLevelIndex || index).extractKey;
          var finalResult = ops.reduce(function(result3, op) {
            var modifedResult = result3;
            var includedValues = [];
            if (op.type === "add" || op.type === "put") {
              var includedPKs = new RangeSet2();
              for (var i = op.values.length - 1; i >= 0; --i) {
                var value = op.values[i];
                var pk = extractPrimKey(value);
                if (includedPKs.hasKey(pk))
                  continue;
                var key = extractIndex(value);
                if (multiEntry && isArray(key) ? key.some(function(k) {
                  return isWithinRange(k, queryRange);
                }) : isWithinRange(key, queryRange)) {
                  includedPKs.addKey(pk);
                  includedValues.push(value);
                }
              }
            }
            switch (op.type) {
              case "add": {
                var existingKeys_1 = new RangeSet2().addKeys(req.values ? result3.map(function(v) {
                  return extractPrimKey(v);
                }) : result3);
                modifedResult = result3.concat(req.values ? includedValues.filter(function(v) {
                  var key2 = extractPrimKey(v);
                  if (existingKeys_1.hasKey(key2))
                    return false;
                  existingKeys_1.addKey(key2);
                  return true;
                }) : includedValues.map(function(v) {
                  return extractPrimKey(v);
                }).filter(function(k) {
                  if (existingKeys_1.hasKey(k))
                    return false;
                  existingKeys_1.addKey(k);
                  return true;
                }));
                break;
              }
              case "put": {
                var keySet_1 = new RangeSet2().addKeys(op.values.map(function(v) {
                  return extractPrimKey(v);
                }));
                modifedResult = result3.filter(
                  function(item) {
                    return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
                  }
                ).concat(
                  req.values ? includedValues : includedValues.map(function(v) {
                    return extractPrimKey(v);
                  })
                );
                break;
              }
              case "delete":
                var keysToDelete_1 = new RangeSet2().addKeys(op.keys);
                modifedResult = result3.filter(function(item) {
                  return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
                });
                break;
              case "deleteRange":
                var range_1 = op.range;
                modifedResult = result3.filter(function(item) {
                  return !isWithinRange(extractPrimKey(item), range_1);
                });
                break;
            }
            return modifedResult;
          }, result2);
          if (finalResult === result2)
            return result2;
          finalResult.sort(function(a, b) {
            return cmp2(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp2(extractPrimKey(a), extractPrimKey(b));
          });
          if (req.limit && req.limit < Infinity) {
            if (finalResult.length > req.limit) {
              finalResult.length = req.limit;
            } else if (result2.length === req.limit && finalResult.length < req.limit) {
              cacheEntry.dirty = true;
            }
          }
          return immutable ? Object.freeze(finalResult) : finalResult;
        }
        function areRangesEqual(r1, r2) {
          return cmp2(r1.lower, r2.lower) === 0 && cmp2(r1.upper, r2.upper) === 0 && !!r1.lowerOpen === !!r2.lowerOpen && !!r1.upperOpen === !!r2.upperOpen;
        }
        function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
          if (lower1 === void 0)
            return lower2 !== void 0 ? -1 : 0;
          if (lower2 === void 0)
            return 1;
          var c = cmp2(lower1, lower2);
          if (c === 0) {
            if (lowerOpen1 && lowerOpen2)
              return 0;
            if (lowerOpen1)
              return 1;
            if (lowerOpen2)
              return -1;
          }
          return c;
        }
        function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
          if (upper1 === void 0)
            return upper2 !== void 0 ? 1 : 0;
          if (upper2 === void 0)
            return -1;
          var c = cmp2(upper1, upper2);
          if (c === 0) {
            if (upperOpen1 && upperOpen2)
              return 0;
            if (upperOpen1)
              return -1;
            if (upperOpen2)
              return 1;
          }
          return c;
        }
        function isSuperRange(r1, r2) {
          return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
        }
        function findCompatibleQuery(dbName, tableName, type2, req) {
          var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
          if (!tblCache)
            return [];
          var queries = tblCache.queries[type2];
          if (!queries)
            return [null, false, tblCache, null];
          var indexName = req.query ? req.query.index.name : null;
          var entries = queries[indexName || ""];
          if (!entries)
            return [null, false, tblCache, null];
          switch (type2) {
            case "query":
              var equalEntry = entries.find(function(entry) {
                return entry.req.limit === req.limit && entry.req.values === req.values && areRangesEqual(entry.req.query.range, req.query.range);
              });
              if (equalEntry)
                return [
                  equalEntry,
                  true,
                  tblCache,
                  entries
                ];
              var superEntry = entries.find(function(entry) {
                var limit = "limit" in entry.req ? entry.req.limit : Infinity;
                return limit >= req.limit && (req.values ? entry.req.values : true) && isSuperRange(entry.req.query.range, req.query.range);
              });
              return [superEntry, false, tblCache, entries];
            case "count":
              var countQuery = entries.find(function(entry) {
                return areRangesEqual(entry.req.query.range, req.query.range);
              });
              return [countQuery, !!countQuery, tblCache, entries];
          }
        }
        function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
          cacheEntry.subscribers.add(requery);
          signal.addEventListener("abort", function() {
            cacheEntry.subscribers.delete(requery);
            if (cacheEntry.subscribers.size === 0) {
              enqueForDeletion(cacheEntry, container);
            }
          });
        }
        function enqueForDeletion(cacheEntry, container) {
          setTimeout(function() {
            if (cacheEntry.subscribers.size === 0) {
              delArrayItem(container, cacheEntry);
            }
          }, 3e3);
        }
        var cacheMiddleware = {
          stack: "dbcore",
          level: 0,
          name: "Cache",
          create: function(core) {
            var dbName = core.schema.name;
            var coreMW = __assign(__assign({}, core), { transaction: function(stores, mode, options) {
              var idbtrans = core.transaction(stores, mode, options);
              if (mode === "readwrite") {
                var ac_1 = new AbortController();
                var signal = ac_1.signal;
                var endTransaction = function(wasCommitted) {
                  return function() {
                    ac_1.abort();
                    if (mode === "readwrite") {
                      var affectedSubscribers_1 = /* @__PURE__ */ new Set();
                      for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                        var storeName = stores_1[_i];
                        var tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                        if (tblCache) {
                          var table = core.table(storeName);
                          var ops = tblCache.optimisticOps.filter(function(op) {
                            return op.trans === idbtrans;
                          });
                          if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts) {
                            for (var _a3 = 0, _b2 = Object.values(tblCache.queries.query); _a3 < _b2.length; _a3++) {
                              var entries = _b2[_a3];
                              for (var _c = 0, _d = entries.slice(); _c < _d.length; _c++) {
                                var entry = _d[_c];
                                if (obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts)) {
                                  delArrayItem(entries, entry);
                                  entry.subscribers.forEach(function(requery) {
                                    return affectedSubscribers_1.add(requery);
                                  });
                                }
                              }
                            }
                          } else if (ops.length > 0) {
                            tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                              return op.trans !== idbtrans;
                            });
                            for (var _e = 0, _f = Object.values(tblCache.queries.query); _e < _f.length; _e++) {
                              var entries = _f[_e];
                              for (var _g = 0, _h = entries.slice(); _g < _h.length; _g++) {
                                var entry = _h[_g];
                                if (entry.res != null && idbtrans.mutatedParts) {
                                  if (wasCommitted && !entry.dirty) {
                                    var freezeResults = Object.isFrozen(entry.res);
                                    var modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                    if (entry.dirty) {
                                      delArrayItem(entries, entry);
                                      entry.subscribers.forEach(function(requery) {
                                        return affectedSubscribers_1.add(requery);
                                      });
                                    } else if (modRes !== entry.res) {
                                      entry.res = modRes;
                                      entry.promise = DexiePromise.resolve({ result: modRes });
                                    }
                                  } else {
                                    if (entry.dirty) {
                                      delArrayItem(entries, entry);
                                    }
                                    entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    });
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      affectedSubscribers_1.forEach(function(requery) {
                        return requery();
                      });
                    }
                  };
                };
                idbtrans.addEventListener("abort", endTransaction(false), {
                  signal
                });
                idbtrans.addEventListener("error", endTransaction(false), {
                  signal
                });
                idbtrans.addEventListener("complete", endTransaction(true), {
                  signal
                });
              }
              return idbtrans;
            }, table: function(tableName) {
              var downTable = core.table(tableName);
              var primKey = downTable.schema.primaryKey;
              var tableMW = __assign(__assign({}, downTable), { mutate: function(req) {
                var trans = PSD.trans;
                if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit || trans.idbtrans.mode !== "readwrite") {
                  return downTable.mutate(req);
                }
                var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
                if (!tblCache)
                  return downTable.mutate(req);
                var promise = downTable.mutate(req);
                if ((req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
                  return key == null;
                }))) {
                  promise.then(function(res) {
                    var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                      var _a3;
                      if (res.failures[i])
                        return value;
                      var valueWithKey = ((_a3 = primKey.keyPath) === null || _a3 === void 0 ? void 0 : _a3.includes(".")) ? deepClone(value) : __assign({}, value);
                      setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]);
                      return valueWithKey;
                    }) });
                    var adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                    tblCache.optimisticOps.push(adjustedReq);
                    queueMicrotask(function() {
                      return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                    });
                  });
                } else {
                  tblCache.optimisticOps.push(req);
                  req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  promise.then(function(res) {
                    if (res.numFailures > 0) {
                      delArrayItem(tblCache.optimisticOps, req);
                      var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                      if (adjustedReq) {
                        tblCache.optimisticOps.push(adjustedReq);
                      }
                      req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                    }
                  });
                  promise.catch(function() {
                    delArrayItem(tblCache.optimisticOps, req);
                    req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  });
                }
                return promise;
              }, query: function(req) {
                var _a3;
                if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
                  return downTable.query(req);
                var freezeResults = ((_a3 = PSD.trans) === null || _a3 === void 0 ? void 0 : _a3.db._options.cache) === "immutable";
                var _b2 = PSD, requery = _b2.requery, signal = _b2.signal;
                var _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
                if (cacheEntry && exactMatch) {
                  cacheEntry.obsSet = req.obsSet;
                } else {
                  var promise = downTable.query(req).then(function(res) {
                    var result2 = res.result;
                    if (cacheEntry)
                      cacheEntry.res = result2;
                    if (freezeResults) {
                      for (var i = 0, l = result2.length; i < l; ++i) {
                        Object.freeze(result2[i]);
                      }
                      Object.freeze(result2);
                    } else {
                      res.result = deepClone(result2);
                    }
                    return res;
                  }).catch(function(error) {
                    if (container && cacheEntry)
                      delArrayItem(container, cacheEntry);
                    return Promise.reject(error);
                  });
                  cacheEntry = {
                    obsSet: req.obsSet,
                    promise,
                    subscribers: /* @__PURE__ */ new Set(),
                    type: "query",
                    req,
                    dirty: false
                  };
                  if (container) {
                    container.push(cacheEntry);
                  } else {
                    container = [cacheEntry];
                    if (!tblCache) {
                      tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                        queries: {
                          query: {},
                          count: {}
                        },
                        objs: /* @__PURE__ */ new Map(),
                        optimisticOps: [],
                        unsignaledParts: {}
                      };
                    }
                    tblCache.queries.query[req.query.index.name || ""] = container;
                  }
                }
                subscribeToCacheEntry(cacheEntry, container, requery, signal);
                return cacheEntry.promise.then(function(res) {
                  return {
                    result: applyOptimisticOps(res.result, req, tblCache === null || tblCache === void 0 ? void 0 : tblCache.optimisticOps, downTable, cacheEntry, freezeResults)
                  };
                });
              } });
              return tableMW;
            } });
            return coreMW;
          }
        };
        function vipify(target, vipDb) {
          return new Proxy(target, {
            get: function(target2, prop, receiver) {
              if (prop === "db")
                return vipDb;
              return Reflect.get(target2, prop, receiver);
            }
          });
        }
        var Dexie$1 = function() {
          function Dexie3(name, options) {
            var _this = this;
            this._middlewares = {};
            this.verno = 0;
            var deps = Dexie3.dependencies;
            this._options = options = __assign({
              addons: Dexie3.addons,
              autoOpen: true,
              indexedDB: deps.indexedDB,
              IDBKeyRange: deps.IDBKeyRange,
              cache: "cloned"
            }, options);
            this._deps = {
              indexedDB: options.indexedDB,
              IDBKeyRange: options.IDBKeyRange
            };
            var addons = options.addons;
            this._dbSchema = {};
            this._versions = [];
            this._storeNames = [];
            this._allTables = {};
            this.idbdb = null;
            this._novip = this;
            var state = {
              dbOpenError: null,
              isBeingOpened: false,
              onReadyBeingFired: null,
              openComplete: false,
              dbReadyResolve: nop,
              dbReadyPromise: null,
              cancelOpen: nop,
              openCanceller: null,
              autoSchema: true,
              PR1398_maxLoop: 3,
              autoOpen: options.autoOpen
            };
            state.dbReadyPromise = new DexiePromise(function(resolve) {
              state.dbReadyResolve = resolve;
            });
            state.openCanceller = new DexiePromise(function(_, reject) {
              state.cancelOpen = reject;
            });
            this._state = state;
            this.name = name;
            this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain, nop] });
            this.once = function(event, callback) {
              var fn = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                _this.on(event).unsubscribe(fn);
                callback.apply(_this, args);
              };
              return _this.on(event, fn);
            };
            this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
              return function(subscriber, bSticky) {
                Dexie3.vip(function() {
                  var state2 = _this._state;
                  if (state2.openComplete) {
                    if (!state2.dbOpenError)
                      DexiePromise.resolve().then(subscriber);
                    if (bSticky)
                      subscribe(subscriber);
                  } else if (state2.onReadyBeingFired) {
                    state2.onReadyBeingFired.push(subscriber);
                    if (bSticky)
                      subscribe(subscriber);
                  } else {
                    subscribe(subscriber);
                    var db_1 = _this;
                    if (!bSticky)
                      subscribe(function unsubscribe() {
                        db_1.on.ready.unsubscribe(subscriber);
                        db_1.on.ready.unsubscribe(unsubscribe);
                      });
                  }
                });
              };
            });
            this.Collection = createCollectionConstructor(this);
            this.Table = createTableConstructor(this);
            this.Transaction = createTransactionConstructor(this);
            this.Version = createVersionConstructor(this);
            this.WhereClause = createWhereClauseConstructor(this);
            this.on("versionchange", function(ev) {
              if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade."));
              else
                console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request."));
              _this.close({ disableAutoOpen: false });
            });
            this.on("blocked", function(ev) {
              if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('".concat(_this.name, "') was blocked"));
              else
                console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
            });
            this._maxKey = getMaxKey(options.IDBKeyRange);
            this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
              return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
            };
            this._fireOnBlocked = function(ev) {
              _this.on("blocked").fire(ev);
              connections.filter(function(c) {
                return c.name === _this.name && c !== _this && !c._state.vcFired;
              }).map(function(c) {
                return c.on("versionchange").fire(ev);
              });
            };
            this.use(cacheExistingValuesMiddleware);
            this.use(cacheMiddleware);
            this.use(observabilityMiddleware);
            this.use(virtualIndexMiddleware);
            this.use(hooksMiddleware);
            var vipDB = new Proxy(this, {
              get: function(_, prop, receiver) {
                if (prop === "_vip")
                  return true;
                if (prop === "table")
                  return function(tableName) {
                    return vipify(_this.table(tableName), vipDB);
                  };
                var rv = Reflect.get(_, prop, receiver);
                if (rv instanceof Table)
                  return vipify(rv, vipDB);
                if (prop === "tables")
                  return rv.map(function(t) {
                    return vipify(t, vipDB);
                  });
                if (prop === "_createTransaction")
                  return function() {
                    var tx = rv.apply(this, arguments);
                    return vipify(tx, vipDB);
                  };
                return rv;
              }
            });
            this.vip = vipDB;
            addons.forEach(function(addon) {
              return addon(_this);
            });
          }
          Dexie3.prototype.version = function(versionNumber) {
            if (isNaN(versionNumber) || versionNumber < 0.1)
              throw new exceptions.Type("Given version is not a positive number");
            versionNumber = Math.round(versionNumber * 10) / 10;
            if (this.idbdb || this._state.isBeingOpened)
              throw new exceptions.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versions = this._versions;
            var versionInstance = versions.filter(function(v) {
              return v._cfg.version === versionNumber;
            })[0];
            if (versionInstance)
              return versionInstance;
            versionInstance = new this.Version(versionNumber);
            versions.push(versionInstance);
            versions.sort(lowerVersionFirst);
            versionInstance.stores({});
            this._state.autoSchema = false;
            return versionInstance;
          };
          Dexie3.prototype._whenReady = function(fn) {
            var _this = this;
            return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
              if (_this._state.openComplete) {
                return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
              }
              if (!_this._state.isBeingOpened) {
                if (!_this._state.autoOpen) {
                  reject(new exceptions.DatabaseClosed());
                  return;
                }
                _this.open().catch(nop);
              }
              _this._state.dbReadyPromise.then(resolve, reject);
            }).then(fn);
          };
          Dexie3.prototype.use = function(_a3) {
            var stack = _a3.stack, create = _a3.create, level = _a3.level, name = _a3.name;
            if (name)
              this.unuse({ stack, name });
            var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
            middlewares.push({ stack, create, level: level == null ? 10 : level, name });
            middlewares.sort(function(a, b) {
              return a.level - b.level;
            });
            return this;
          };
          Dexie3.prototype.unuse = function(_a3) {
            var stack = _a3.stack, name = _a3.name, create = _a3.create;
            if (stack && this._middlewares[stack]) {
              this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
                return create ? mw.create !== create : name ? mw.name !== name : false;
              });
            }
            return this;
          };
          Dexie3.prototype.open = function() {
            var _this = this;
            return usePSD(
              globalPSD,
              function() {
                return dexieOpen(_this);
              }
            );
          };
          Dexie3.prototype._close = function() {
            this.on.close.fire(new CustomEvent("close"));
            var state = this._state;
            var idx = connections.indexOf(this);
            if (idx >= 0)
              connections.splice(idx, 1);
            if (this.idbdb) {
              try {
                this.idbdb.close();
              } catch (e) {
              }
              this.idbdb = null;
            }
            if (!state.isBeingOpened) {
              state.dbReadyPromise = new DexiePromise(function(resolve) {
                state.dbReadyResolve = resolve;
              });
              state.openCanceller = new DexiePromise(function(_, reject) {
                state.cancelOpen = reject;
              });
            }
          };
          Dexie3.prototype.close = function(_a3) {
            var _b2 = _a3 === void 0 ? { disableAutoOpen: true } : _a3, disableAutoOpen = _b2.disableAutoOpen;
            var state = this._state;
            if (disableAutoOpen) {
              if (state.isBeingOpened) {
                state.cancelOpen(new exceptions.DatabaseClosed());
              }
              this._close();
              state.autoOpen = false;
              state.dbOpenError = new exceptions.DatabaseClosed();
            } else {
              this._close();
              state.autoOpen = this._options.autoOpen || state.isBeingOpened;
              state.openComplete = false;
              state.dbOpenError = null;
            }
          };
          Dexie3.prototype.delete = function(closeOptions) {
            var _this = this;
            if (closeOptions === void 0) {
              closeOptions = { disableAutoOpen: true };
            }
            var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] !== "object";
            var state = this._state;
            return new DexiePromise(function(resolve, reject) {
              var doDelete = function() {
                _this.close(closeOptions);
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function() {
                  _onDatabaseDeleted(_this._deps, _this.name);
                  resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
              };
              if (hasInvalidArguments)
                throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
              if (state.isBeingOpened) {
                state.dbReadyPromise.then(doDelete);
              } else {
                doDelete();
              }
            });
          };
          Dexie3.prototype.backendDB = function() {
            return this.idbdb;
          };
          Dexie3.prototype.isOpen = function() {
            return this.idbdb !== null;
          };
          Dexie3.prototype.hasBeenClosed = function() {
            var dbOpenError = this._state.dbOpenError;
            return dbOpenError && dbOpenError.name === "DatabaseClosed";
          };
          Dexie3.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null;
          };
          Dexie3.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema;
          };
          Object.defineProperty(Dexie3.prototype, "tables", {
            get: function() {
              var _this = this;
              return keys(this._allTables).map(function(name) {
                return _this._allTables[name];
              });
            },
            enumerable: false,
            configurable: true
          });
          Dexie3.prototype.transaction = function() {
            var args = extractTransactionArgs.apply(this, arguments);
            return this._transaction.apply(this, args);
          };
          Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
            var _this = this;
            var parentTransaction = PSD.trans;
            if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
              parentTransaction = null;
            var onlyIfCompatible = mode.indexOf("?") !== -1;
            mode = mode.replace("!", "").replace("?", "");
            var idbMode, storeNames;
            try {
              storeNames = tables.map(function(table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== "string")
                  throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
              });
              if (mode == "r" || mode === READONLY)
                idbMode = READONLY;
              else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
              else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
              if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                  if (onlyIfCompatible) {
                    parentTransaction = null;
                  } else
                    throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                  storeNames.forEach(function(storeName) {
                    if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                      if (onlyIfCompatible) {
                        parentTransaction = null;
                      } else
                        throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                    }
                  });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                  parentTransaction = null;
                }
              }
            } catch (e) {
              return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
                reject(e);
              }) : rejection(e);
            }
            var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
            return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
              return _this._whenReady(enterTransaction);
            }) : this._whenReady(enterTransaction);
          };
          Dexie3.prototype.table = function(tableName) {
            if (!hasOwn(this._allTables, tableName)) {
              throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
            }
            return this._allTables[tableName];
          };
          return Dexie3;
        }();
        var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
        var Observable = function() {
          function Observable2(subscribe) {
            this._subscribe = subscribe;
          }
          Observable2.prototype.subscribe = function(x, error, complete) {
            return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
          };
          Observable2.prototype[symbolObservable] = function() {
            return this;
          };
          return Observable2;
        }();
        var domDeps;
        try {
          domDeps = {
            indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
            IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
          };
        } catch (e) {
          domDeps = { indexedDB: null, IDBKeyRange: null };
        }
        function liveQuery2(querier) {
          var hasValue = false;
          var currentValue;
          var observable = new Observable(function(observer) {
            var scopeFuncIsAsync = isAsyncFunction(querier);
            function execute(ctx) {
              var wasRootExec = beginMicroTickScope();
              try {
                if (scopeFuncIsAsync) {
                  incrementExpectedAwaits();
                }
                var rv = newScope(querier, ctx);
                if (scopeFuncIsAsync) {
                  rv = rv.finally(decrementExpectedAwaits);
                }
                return rv;
              } finally {
                wasRootExec && endMicroTickScope();
              }
            }
            var closed = false;
            var abortController;
            var accumMuts = {};
            var currentObs = {};
            var subscription = {
              get closed() {
                return closed;
              },
              unsubscribe: function() {
                if (closed)
                  return;
                closed = true;
                if (abortController)
                  abortController.abort();
                if (startedListening)
                  globalEvents.storagemutated.unsubscribe(mutationListener);
              }
            };
            observer.start && observer.start(subscription);
            var startedListening = false;
            var doQuery = function() {
              return execInGlobalContext(_doQuery);
            };
            function shouldNotify() {
              return obsSetsOverlap(currentObs, accumMuts);
            }
            var mutationListener = function(parts) {
              extendObservabilitySet(accumMuts, parts);
              if (shouldNotify()) {
                doQuery();
              }
            };
            var _doQuery = function() {
              if (closed || !domDeps.indexedDB) {
                return;
              }
              accumMuts = {};
              var subscr = {};
              if (abortController)
                abortController.abort();
              abortController = new AbortController();
              var ctx = {
                subscr,
                signal: abortController.signal,
                requery: doQuery,
                querier,
                trans: null
              };
              var ret = execute(ctx);
              Promise.resolve(ret).then(function(result2) {
                hasValue = true;
                currentValue = result2;
                if (closed || ctx.signal.aborted) {
                  return;
                }
                accumMuts = {};
                currentObs = subscr;
                if (!objectIsEmpty(currentObs) && !startedListening) {
                  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                  startedListening = true;
                }
                execInGlobalContext(function() {
                  return !closed && observer.next && observer.next(result2);
                });
              }, function(err) {
                hasValue = false;
                if (!["DatabaseClosedError", "AbortError"].includes(err === null || err === void 0 ? void 0 : err.name)) {
                  if (!closed)
                    execInGlobalContext(function() {
                      if (closed)
                        return;
                      observer.error && observer.error(err);
                    });
                }
              });
            };
            setTimeout(doQuery, 0);
            return subscription;
          });
          observable.hasValue = function() {
            return hasValue;
          };
          observable.getValue = function() {
            return currentValue;
          };
          return observable;
        }
        var Dexie2 = Dexie$1;
        props(Dexie2, __assign(__assign({}, fullNameExceptions), {
          delete: function(databaseName) {
            var db2 = new Dexie2(databaseName, { addons: [] });
            return db2.delete();
          },
          exists: function(name) {
            return new Dexie2(name, { addons: [] }).open().then(function(db2) {
              db2.close();
              return true;
            }).catch("NoSuchDatabaseError", function() {
              return false;
            });
          },
          getDatabaseNames: function(cb) {
            try {
              return getDatabaseNames(Dexie2.dependencies).then(cb);
            } catch (_a3) {
              return rejection(new exceptions.MissingAPI());
            }
          },
          defineClass: function() {
            function Class(content) {
              extend(this, content);
            }
            return Class;
          },
          ignoreTransaction: function(scopeFunc) {
            return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
          },
          vip,
          async: function(generatorFn) {
            return function() {
              try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== "function")
                  return DexiePromise.resolve(rv);
                return rv;
              } catch (e) {
                return rejection(e);
              }
            };
          },
          spawn: function(generatorFn, args, thiz) {
            try {
              var rv = awaitIterator(generatorFn.apply(thiz, args || []));
              if (!rv || typeof rv.then !== "function")
                return DexiePromise.resolve(rv);
              return rv;
            } catch (e) {
              return rejection(e);
            }
          },
          currentTransaction: {
            get: function() {
              return PSD.trans || null;
            }
          },
          waitFor: function(promiseOrFunction, optionalTimeout) {
            var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
            return PSD.trans ? PSD.trans.waitFor(promise) : promise;
          },
          Promise: DexiePromise,
          debug: {
            get: function() {
              return debug;
            },
            set: function(value) {
              setDebug(value);
            }
          },
          derive,
          extend,
          props,
          override,
          Events,
          on: globalEvents,
          liveQuery: liveQuery2,
          extendObservabilitySet,
          getByKeyPath,
          setByKeyPath,
          delByKeyPath,
          shallowClone,
          deepClone,
          getObjectDiff,
          cmp: cmp2,
          asap: asap$1,
          minKey,
          addons: [],
          connections,
          errnames,
          dependencies: domDeps,
          cache,
          semVer: DEXIE_VERSION,
          version: DEXIE_VERSION.split(".").map(function(n) {
            return parseInt(n);
          }).reduce(function(p, c, i) {
            return p + c / Math.pow(10, i * 2);
          })
        }));
        Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange);
        if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
            if (!propagatingLocally) {
              var event_1;
              event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
                detail: updatedParts
              });
              propagatingLocally = true;
              dispatchEvent(event_1);
              propagatingLocally = false;
            }
          });
          addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a3) {
            var detail = _a3.detail;
            if (!propagatingLocally) {
              propagateLocally(detail);
            }
          });
        }
        function propagateLocally(updateParts) {
          var wasMe = propagatingLocally;
          try {
            propagatingLocally = true;
            globalEvents.storagemutated.fire(updateParts);
            signalSubscribersNow(updateParts, true);
          } finally {
            propagatingLocally = wasMe;
          }
        }
        var propagatingLocally = false;
        var bc;
        var createBC = function() {
        };
        if (typeof BroadcastChannel !== "undefined") {
          createBC = function() {
            bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
            bc.onmessage = function(ev) {
              return ev.data && propagateLocally(ev.data);
            };
          };
          createBC();
          if (typeof bc.unref === "function") {
            bc.unref();
          }
          globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
            if (!propagatingLocally) {
              bc.postMessage(changedParts);
            }
          });
        }
        if (typeof addEventListener !== "undefined") {
          addEventListener("pagehide", function(event) {
            if (!Dexie$1.disableBfCache && event.persisted) {
              if (debug)
                console.debug("Dexie: handling persisted pagehide");
              bc === null || bc === void 0 ? void 0 : bc.close();
              for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
                var db2 = connections_1[_i];
                db2.close({ disableAutoOpen: false });
              }
            }
          });
          addEventListener("pageshow", function(event) {
            if (!Dexie$1.disableBfCache && event.persisted) {
              if (debug)
                console.debug("Dexie: handling persisted pageshow");
              createBC();
              propagateLocally({ all: new RangeSet2(-Infinity, [[]]) });
            }
          });
        }
        function add2(value) {
          return new PropModification2({ add: value });
        }
        function remove2(value) {
          return new PropModification2({ remove: value });
        }
        function replacePrefix2(a, b) {
          return new PropModification2({ replacePrefix: [a, b] });
        }
        DexiePromise.rejectionMapper = mapError;
        setDebug(debug);
        var namedExports = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Dexie: Dexie$1,
          liveQuery: liveQuery2,
          Entity: Entity2,
          cmp: cmp2,
          PropModification: PropModification2,
          replacePrefix: replacePrefix2,
          add: add2,
          remove: remove2,
          "default": Dexie$1,
          RangeSet: RangeSet2,
          mergeRanges: mergeRanges2,
          rangesOverlap: rangesOverlap2
        });
        __assign(Dexie$1, namedExports, { default: Dexie$1 });
        return Dexie$1;
      });
    })(dexie$1);
    return dexie$1.exports;
  }
  var dexieExports = requireDexie();
  const _Dexie = /* @__PURE__ */ getDefaultExportFromCjs(dexieExports);
  const DexieSymbol = Symbol.for("Dexie");
  const Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = _Dexie);
  if (_Dexie.semVer !== Dexie.semVer) {
    throw new Error(`Two different versions of Dexie loaded in the same app: ${_Dexie.semVer} and ${Dexie.semVer}`);
  }
  const {
    liveQuery,
    mergeRanges,
    rangesOverlap,
    RangeSet,
    cmp,
    Entity,
    PropModification,
    replacePrefix,
    add,
    remove,
    DexieYProvider
  } = Dexie;
  class AmberDatabase extends Dexie {
    constructor() {
      super("AMBER_DATABASE");
      __publicField(this, "websites");
      __publicField(this, "highlights");
      __publicField(this, "folders");
      this.version(1).stores({
        folders: "id,createdAt,name,parentId,[createdAt+id]"
      });
      this.version(1).stores({
        websites: "id,createdAt,url,[createdAt+id]"
      });
      this.version(1).stores({
        highlights: "id,createdAt,urlId,folderId,color,fontSettings,notes,selectionString,anchorOffset,focusOffset,anchorPath,focusPath,anchorContext,focusContext,[createdAt+id]"
      });
    }
  }
  const db = new AmberDatabase();
  background;
  const getAllHighlightsDB = async () => {
    return db.highlights.toArray().then((data) => {
      return { success: true, data };
    }).catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
  };
  const getHighlightDB = async (id) => {
    try {
      const highlight = await db.highlights.get(id);
      if (!highlight) {
        return { success: false, error: "Highlight not found" };
      }
      return { success: true, data: highlight };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const addHighlightDB = async (data) => {
    return db.highlights.add(data).then(() => {
      return { success: true };
    }).catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
  };
  const deleteAllHighlightsDB = async () => {
    return db.highlights.clear().then(() => {
      console.log("All highlights deleted successfully.");
      return { success: true };
    }).catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
  };
  const deleteHighlightDB = async (id) => {
    try {
      const highlight = await db.highlights.get(id);
      if (!highlight) {
        return { success: false, error: `Highlight with id ${id} not found.` };
      }
      const { urlId } = highlight;
      await db.highlights.delete(id);
      console.log(`Highlight with id ${id} deleted successfully.`);
      const remaining = await db.highlights.where("urlId").equals(urlId).count();
      if (remaining === 0) {
        await db.websites.delete(urlId);
        console.log(`Website with id ${urlId} deleted (no highlights left).`);
      } else {
        console.log(
          `Website with id ${urlId} kept (still ${remaining} highlight(s) left).`
        );
      }
      return { success: true };
    } catch (err) {
      console.error("Error deleting highlight:", err);
      return { success: false, error: err.message };
    }
  };
  const addWebsiteDB = async (data) => {
    try {
      const existing = await db.websites.where("url").equals(data.url).first();
      if (existing) {
        return { success: true, skipped: true, websiteID: existing.id };
      }
      await db.websites.add(data);
      return { success: true, websiteID: data.id };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const getWebsiteHighlightsDB = async (url) => {
    try {
      const website = await db.websites.where("url").equals(url).first();
      if (!website) {
        return { success: false, error: "Website not found" };
      }
      const highlights = await db.highlights.where("urlId").equals(website.id).toArray();
      highlights.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
      return { success: true, data: highlights };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const updateHighlightDB = async (id, updates) => {
    try {
      const existing = await db.highlights.get(id);
      if (!existing) {
        return { success: false, error: "Highlight not found" };
      }
      const result2 = await db.highlights.update(id, updates);
      return { success: true, updated: result2 > 0 };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const getAllWebsitesDB = async () => {
    try {
      const data = await db.websites.toArray();
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const deleteWebsiteDB = async (id) => {
    try {
      const website = await db.websites.get(id);
      if (!website) {
        return { success: false, error: `Website with id ${id} not found.` };
      }
      await db.highlights.where("urlId").equals(id).delete();
      await db.websites.delete(id);
      return { success: true };
    } catch (err) {
      console.error("Error deleting website and its highlights:", err);
      return { success: false, error: err.message };
    }
  };
  const getAllFoldersDb = async () => {
    return db.folders.toArray().then((data) => {
      return { success: true, data };
    }).catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
  };
  const getFolderByHighlightIdDB = async (highlightId) => {
    try {
      const highlight = await db.highlights.get(highlightId);
      if (!highlight) {
        return { success: false, error: "Highlight not found" };
      }
      const folderId = highlight.folderId;
      if (!folderId) {
        return { success: false, error: "Highlight has no folderId" };
      }
      const folder = await db.folders.get(folderId);
      if (!folder) {
        return { success: false, error: "Folder not found" };
      }
      return { success: true, data: folder };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  const getFolderHighlightsDB = async (folderId) => {
    try {
      const highlights = await db.highlights.where("folderId").equals(folderId).toArray();
      const urlIds = Array.from(new Set(highlights.map((h) => h.urlId)));
      const websites = await db.websites.where("id").anyOf(urlIds).toArray();
      const websiteMap = Object.fromEntries(websites.map((w) => [w.id, w]));
      const combined = highlights.map((h) => ({
        ...h,
        website: websiteMap[h.urlId]
      }));
      combined.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
      return { success: true, data: combined };
    } catch (err) {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    }
  };
  background;
  const messageHandlers = {
    // --- Open Side Panel ---
    openSidePanel: (message, sender, sendResponse) => {
      browser.windows.getCurrent((currentWindow) => {
        var _a2;
        if ((currentWindow == null ? void 0 : currentWindow.id) && ((_a2 = browser.sidePanel) == null ? void 0 : _a2.open)) {
          browser.sidePanel.open({ windowId: currentWindow.id }, () => {
            if (browser.runtime.lastError) {
              console.error(
                "Error opening side panel:",
                browser.runtime.lastError
              );
              sendResponse({
                success: false,
                error: browser.runtime.lastError.message
              });
            } else {
              sendResponse({ success: true });
            }
          });
        } else {
          console.log("Side panel API not supported");
          sendResponse({ success: false, error: "Side panel not supported" });
        }
      });
    },
    // --- Get All Highlights ---
    getAllHighlights: async (message, sender, sendResponse) => {
      try {
        const data = await getAllHighlightsDB();
        sendResponse(data);
      } catch (err) {
        sendResponse(err);
      }
    },
    // --- Add Highlight ---
    addHighlight: async (message, sender, sendResponse) => {
      try {
        const res = await addHighlightDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    // --- Delete All Highlights ---
    deleteAllHighlights: async (message, sender, sendResponse) => {
      try {
        const res = await deleteAllHighlightsDB();
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    // --- Save Website ----
    addWebsite: async (message, sender, sendResponse) => {
      try {
        const res = await addWebsiteDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    getWebsites: async (message, sender, sendResponse) => {
      try {
        const res = await getAllWebsitesDB();
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    getWebsiteHighlights: async (message, sender, sendResponse) => {
      try {
        const res = await getWebsiteHighlightsDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    deleteSingleHighlight: async (message, sender, sendResponse) => {
      try {
        const res = await deleteHighlightDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    deleteHighlightFromDocumentToBgScript: (message, sender, sendResponse) => {
      try {
        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          var _a2;
          if ((_a2 = tabs[0]) == null ? void 0 : _a2.id) {
            browser.tabs.sendMessage(tabs[0].id, {
              action: "deleteHighlightFromDocumentToContentScript",
              data: message.data
            });
          }
          sendResponse({ success: true });
        });
      } catch (err) {
        sendResponse({ success: false, error: err });
      }
      return true;
    },
    updateHighlight: async (message, sender, sendResponse) => {
      try {
        const { id, updates } = message.data;
        const res = await updateHighlightDB(id, updates);
        sendResponse(res);
      } catch (err) {
        sendResponse({ success: false, error: err });
      }
    },
    getSingleHighlight: async (message, sender, sendResponse) => {
      try {
        const res = await getHighlightDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse({ success: false, error: err });
      }
    },
    deleteWebsite: async (message, sender, sendResponse) => {
      try {
        const res = await deleteWebsiteDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse({ success: false, error: err });
      }
    },
    getFolders: async (message, sender, sendResponse) => {
      try {
        const res = await getAllFoldersDb();
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    openFoldersManager: async (message, sender, sendResponse) => {
      try {
        const url = browser.runtime.getURL("amberOptionsPage.html") + "?section=folders";
        browser.tabs.create({ url });
        sendResponse({ success: true });
      } catch (err) {
        sendResponse(err);
      }
    },
    openHelpPage: async (message, sender, sendResponse) => {
      try {
        const url = browser.runtime.getURL("amberOptionsPage.html") + "?section=help";
        browser.tabs.create({ url });
        sendResponse({ success: true });
      } catch (err) {
        sendResponse(err);
      }
    },
    getFolderByHighlightId: async (message, sender, sendResponse) => {
      try {
        const res = await getFolderByHighlightIdDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    getFolderHighlights: async (message, sender, sendResponse) => {
      try {
        const res = await getFolderHighlightsDB(message.data);
        sendResponse(res);
      } catch (err) {
        sendResponse(err);
      }
    },
    scrollToHighlight: async (message, sender, sendResponse) => {
      try {
        const [tab] = await browser.tabs.query({
          active: true,
          currentWindow: true
        });
        if (tab == null ? void 0 : tab.id) {
          await browser.tabs.sendMessage(tab.id, {
            action: "scrollToHighlight",
            data: message.data
          });
        }
      } catch (err) {
        sendResponse(err);
      }
    }
  };
  const definition = defineBackground(() => {
    browser.runtime.onInstalled.addListener(async (details) => {
      var _a2;
      if (details.reason === "install") {
        console.log("Extension installed — refreshing tabs and opening guide...");
        try {
          const tabs = await browser.tabs.query({});
          for (const tab of tabs) {
            if (tab.id && ((_a2 = tab.url) == null ? void 0 : _a2.startsWith("http"))) {
              browser.tabs.reload(tab.id);
            }
          }
          const guideUrl = browser.runtime.getURL("AmberGuide.html");
          await browser.tabs.create({ url: guideUrl });
        } catch (error) {
          console.error("Error during install handling:", error);
        }
      }
    });
    browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
      const handler = messageHandlers[message == null ? void 0 : message.action];
      if (handler) {
        handler(message, sender, sendResponse);
        return true;
      }
    });
  });
  background;
  function initPlugins() {
  }
  var _MatchPattern = class {
    constructor(matchPattern) {
      if (matchPattern === "<all_urls>") {
        this.isAllUrls = true;
        this.protocolMatches = [..._MatchPattern.PROTOCOLS];
        this.hostnameMatch = "*";
        this.pathnameMatch = "*";
      } else {
        const groups = /(.*):\/\/(.*?)(\/.*)/.exec(matchPattern);
        if (groups == null)
          throw new InvalidMatchPattern(matchPattern, "Incorrect format");
        const [_, protocol, hostname, pathname] = groups;
        validateProtocol(matchPattern, protocol);
        validateHostname(matchPattern, hostname);
        this.protocolMatches = protocol === "*" ? ["http", "https"] : [protocol];
        this.hostnameMatch = hostname;
        this.pathnameMatch = pathname;
      }
    }
    includes(url) {
      if (this.isAllUrls)
        return true;
      const u = typeof url === "string" ? new URL(url) : url instanceof Location ? new URL(url.href) : url;
      return !!this.protocolMatches.find((protocol) => {
        if (protocol === "http")
          return this.isHttpMatch(u);
        if (protocol === "https")
          return this.isHttpsMatch(u);
        if (protocol === "file")
          return this.isFileMatch(u);
        if (protocol === "ftp")
          return this.isFtpMatch(u);
        if (protocol === "urn")
          return this.isUrnMatch(u);
      });
    }
    isHttpMatch(url) {
      return url.protocol === "http:" && this.isHostPathMatch(url);
    }
    isHttpsMatch(url) {
      return url.protocol === "https:" && this.isHostPathMatch(url);
    }
    isHostPathMatch(url) {
      if (!this.hostnameMatch || !this.pathnameMatch)
        return false;
      const hostnameMatchRegexs = [
        this.convertPatternToRegex(this.hostnameMatch),
        this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))
      ];
      const pathnameMatchRegex = this.convertPatternToRegex(this.pathnameMatch);
      return !!hostnameMatchRegexs.find((regex) => regex.test(url.hostname)) && pathnameMatchRegex.test(url.pathname);
    }
    isFileMatch(url) {
      throw Error("Not implemented: file:// pattern matching. Open a PR to add support");
    }
    isFtpMatch(url) {
      throw Error("Not implemented: ftp:// pattern matching. Open a PR to add support");
    }
    isUrnMatch(url) {
      throw Error("Not implemented: urn:// pattern matching. Open a PR to add support");
    }
    convertPatternToRegex(pattern) {
      const escaped = this.escapeForRegex(pattern);
      const starsReplaced = escaped.replace(/\\\*/g, ".*");
      return RegExp(`^${starsReplaced}$`);
    }
    escapeForRegex(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  };
  var MatchPattern = _MatchPattern;
  MatchPattern.PROTOCOLS = ["http", "https", "file", "ftp", "urn"];
  var InvalidMatchPattern = class extends Error {
    constructor(matchPattern, reason) {
      super(`Invalid match pattern "${matchPattern}": ${reason}`);
    }
  };
  function validateProtocol(matchPattern, protocol) {
    if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*")
      throw new InvalidMatchPattern(
        matchPattern,
        `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`
      );
  }
  function validateHostname(matchPattern, hostname) {
    if (hostname.includes(":"))
      throw new InvalidMatchPattern(matchPattern, `Hostname cannot include a port`);
    if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*."))
      throw new InvalidMatchPattern(
        matchPattern,
        `If using a wildcard (*), it must go at the start of the hostname`
      );
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  let ws;
  function getDevServerWebSocket() {
    if (ws == null) {
      const serverUrl = "http://localhost:3000";
      logger.debug("Connecting to dev server @", serverUrl);
      ws = new WebSocket(serverUrl, "vite-hmr");
      ws.addWxtEventListener = ws.addEventListener.bind(ws);
      ws.sendCustom = (event, payload) => ws == null ? void 0 : ws.send(JSON.stringify({ type: "custom", event, payload }));
      ws.addEventListener("open", () => {
        logger.debug("Connected to dev server");
      });
      ws.addEventListener("close", () => {
        logger.debug("Disconnected from dev server");
      });
      ws.addEventListener("error", (event) => {
        logger.error("Failed to connect to dev server", event);
      });
      ws.addEventListener("message", (e) => {
        try {
          const message = JSON.parse(e.data);
          if (message.type === "custom") {
            ws == null ? void 0 : ws.dispatchEvent(
              new CustomEvent(message.event, { detail: message.data })
            );
          }
        } catch (err) {
          logger.error("Failed to handle message", err);
        }
      });
    }
    return ws;
  }
  function keepServiceWorkerAlive() {
    setInterval(async () => {
      await browser.runtime.getPlatformInfo();
    }, 5e3);
  }
  function reloadContentScript(payload) {
    const manifest = browser.runtime.getManifest();
    if (manifest.manifest_version == 2) {
      void reloadContentScriptMv2();
    } else {
      void reloadContentScriptMv3(payload);
    }
  }
  async function reloadContentScriptMv3({
    registration,
    contentScript
  }) {
    if (registration === "runtime") {
      await reloadRuntimeContentScriptMv3(contentScript);
    } else {
      await reloadManifestContentScriptMv3(contentScript);
    }
  }
  async function reloadManifestContentScriptMv3(contentScript) {
    const id = `wxt:${contentScript.js[0]}`;
    logger.log("Reloading content script:", contentScript);
    const registered = await browser.scripting.getRegisteredContentScripts();
    logger.debug("Existing scripts:", registered);
    const existing = registered.find((cs) => cs.id === id);
    if (existing) {
      logger.debug("Updating content script", existing);
      await browser.scripting.updateContentScripts([{ ...contentScript, id }]);
    } else {
      logger.debug("Registering new content script...");
      await browser.scripting.registerContentScripts([{ ...contentScript, id }]);
    }
    await reloadTabsForContentScript(contentScript);
  }
  async function reloadRuntimeContentScriptMv3(contentScript) {
    logger.log("Reloading content script:", contentScript);
    const registered = await browser.scripting.getRegisteredContentScripts();
    logger.debug("Existing scripts:", registered);
    const matches = registered.filter((cs) => {
      var _a2, _b2;
      const hasJs = (_a2 = contentScript.js) == null ? void 0 : _a2.find((js) => {
        var _a3;
        return (_a3 = cs.js) == null ? void 0 : _a3.includes(js);
      });
      const hasCss = (_b2 = contentScript.css) == null ? void 0 : _b2.find((css) => {
        var _a3;
        return (_a3 = cs.css) == null ? void 0 : _a3.includes(css);
      });
      return hasJs || hasCss;
    });
    if (matches.length === 0) {
      logger.log(
        "Content script is not registered yet, nothing to reload",
        contentScript
      );
      return;
    }
    await browser.scripting.updateContentScripts(matches);
    await reloadTabsForContentScript(contentScript);
  }
  async function reloadTabsForContentScript(contentScript) {
    const allTabs = await browser.tabs.query({});
    const matchPatterns = contentScript.matches.map(
      (match) => new MatchPattern(match)
    );
    const matchingTabs = allTabs.filter((tab) => {
      const url = tab.url;
      if (!url) return false;
      return !!matchPatterns.find((pattern) => pattern.includes(url));
    });
    await Promise.all(
      matchingTabs.map(async (tab) => {
        try {
          await browser.tabs.reload(tab.id);
        } catch (err) {
          logger.warn("Failed to reload tab:", err);
        }
      })
    );
  }
  async function reloadContentScriptMv2(_payload) {
    throw Error("TODO: reloadContentScriptMv2");
  }
  {
    try {
      const ws2 = getDevServerWebSocket();
      ws2.addWxtEventListener("wxt:reload-extension", () => {
        browser.runtime.reload();
      });
      ws2.addWxtEventListener("wxt:reload-content-script", (event) => {
        reloadContentScript(event.detail);
      });
      if (true) {
        ws2.addEventListener(
          "open",
          () => ws2.sendCustom("wxt:background-initialized")
        );
        keepServiceWorkerAlive();
      }
    } catch (err) {
      logger.error("Failed to setup web socket connection with dev server", err);
    }
    browser.commands.onCommand.addListener((command) => {
      if (command === "wxt:reload-extension") {
        browser.runtime.reload();
      }
    });
  }
  let result;
  try {
    initPlugins();
    result = definition.main();
    if (result instanceof Promise) {
      console.warn(
        "The background's main() function return a promise, but it must be synchronous"
      );
    }
  } catch (err) {
    logger.error("The background crashed on startup!");
    throw err;
  }
  const result$1 = result;
  return result$1;
}();
background;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3V0aWxzL2RlZmluZS1iYWNrZ3JvdW5kLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ad3h0LWRldi9icm93c2VyL3NyYy9pbmRleC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvYnJvd3Nlci5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGV4aWUvZGlzdC9kZXhpZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kZXhpZS9pbXBvcnQtd3JhcHBlci5tanMiLCIuLi8uLi9lbnRyeXBvaW50cy9zcmMvZGIudHMiLCIuLi8uLi9lbnRyeXBvaW50cy9zcmMvZGJGdW5jdGlvbi50cyIsIi4uLy4uL2VudHJ5cG9pbnRzL2JhY2tncm91bmQudHMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHdlYmV4dC1jb3JlL21hdGNoLXBhdHRlcm5zL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQmFja2dyb3VuZChhcmcpIHtcbiAgaWYgKGFyZyA9PSBudWxsIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHsgbWFpbjogYXJnIH07XG4gIHJldHVybiBhcmc7XG59XG4iLCIvLyAjcmVnaW9uIHNuaXBwZXRcbmV4cG9ydCBjb25zdCBicm93c2VyID0gZ2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lPy5pZFxuICA/IGdsb2JhbFRoaXMuYnJvd3NlclxuICA6IGdsb2JhbFRoaXMuY2hyb21lO1xuLy8gI2VuZHJlZ2lvbiBzbmlwcGV0XG4iLCJpbXBvcnQgeyBicm93c2VyIGFzIF9icm93c2VyIH0gZnJvbSBcIkB3eHQtZGV2L2Jyb3dzZXJcIjtcbmV4cG9ydCBjb25zdCBicm93c2VyID0gX2Jyb3dzZXI7XG5leHBvcnQge307XG4iLCIvKlxuICogRGV4aWUuanMgLSBhIG1pbmltYWxpc3RpYyB3cmFwcGVyIGZvciBJbmRleGVkREJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogQnkgRGF2aWQgRmFobGFuZGVyLCBkYXZpZC5mYWhsYW5kZXJAZ21haWwuY29tXG4gKlxuICogVmVyc2lvbiA0LjIuMCwgV2VkIEF1ZyAxMyAyMDI1XG4gKlxuICogaHR0cHM6Ly9kZXhpZS5vcmdcbiAqXG4gKiBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgSmFudWFyeSAyMDA0LCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvXG4gKi9cbiBcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkRleGllID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICAgIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICAgIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG4gICAgUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG4gICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuICAgIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAgIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG4gICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuICAgIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH1cbiAgICB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgICAgICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbiAgICB9XG5cbiAgICB2YXIgX2dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOlxuICAgICAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDpcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDpcbiAgICAgICAgICAgICAgICBnbG9iYWw7XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFfZ2xvYmFsLlByb21pc2UpIHtcbiAgICAgICAgX2dsb2JhbC5Qcm9taXNlID0gUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXh0ZW5kKG9iaiwgZXh0ZW5zaW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uICE9PSAnb2JqZWN0JylcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIGtleXMoZXh0ZW5zaW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gZXh0ZW5zaW9uW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gICAgdmFyIF9oYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICBmdW5jdGlvbiBoYXNPd24ob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBfaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvcHMocHJvdG8sIGV4dGVuc2lvbikge1xuICAgICAgICBpZiAodHlwZW9mIGV4dGVuc2lvbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbihnZXRQcm90byhwcm90bykpO1xuICAgICAgICAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgPyBrZXlzIDogUmVmbGVjdC5vd25LZXlzKShleHRlbnNpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgc2V0UHJvcChwcm90bywga2V5LCBleHRlbnNpb25ba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgZnVuY3Rpb24gc2V0UHJvcChvYmosIHByb3AsIGZ1bmN0aW9uT3JHZXRTZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBleHRlbmQoZnVuY3Rpb25PckdldFNldCAmJiBoYXNPd24oZnVuY3Rpb25PckdldFNldCwgXCJnZXRcIikgJiYgdHlwZW9mIGZ1bmN0aW9uT3JHZXRTZXQuZ2V0ID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIHsgZ2V0OiBmdW5jdGlvbk9yR2V0U2V0LmdldCwgc2V0OiBmdW5jdGlvbk9yR2V0U2V0LnNldCwgY29uZmlndXJhYmxlOiB0cnVlIH0gOlxuICAgICAgICAgICAgeyB2YWx1ZTogZnVuY3Rpb25PckdldFNldCwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9LCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlcml2ZShDaGlsZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbTogZnVuY3Rpb24gKFBhcmVudCkge1xuICAgICAgICAgICAgICAgIENoaWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvcChDaGlsZC5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgQ2hpbGQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZDogcHJvcHMuYmluZChudWxsLCBDaGlsZC5wcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgZnVuY3Rpb24gZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCkge1xuICAgICAgICB2YXIgcGQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgdmFyIHByb3RvO1xuICAgICAgICByZXR1cm4gcGQgfHwgKHByb3RvID0gZ2V0UHJvdG8ob2JqKSkgJiYgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICB9XG4gICAgdmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuICAgIGZ1bmN0aW9uIHNsaWNlKGFyZ3MsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIF9zbGljZS5jYWxsKGFyZ3MsIHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvdmVycmlkZShvcmlnRnVuYywgb3ZlcnJpZGVkRmFjdG9yeSkge1xuICAgICAgICByZXR1cm4gb3ZlcnJpZGVkRmFjdG9yeShvcmlnRnVuYyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFzc2VydChiKSB7XG4gICAgICAgIGlmICghYilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2VydGlvbiBGYWlsZWRcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFzYXAkMShmbikge1xuICAgICAgICBpZiAoX2dsb2JhbC5zZXRJbW1lZGlhdGUpXG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnJheSwgZXh0cmFjdG9yKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgaXRlbSwgaSkge1xuICAgICAgICAgICAgdmFyIG5hbWVBbmRWYWx1ZSA9IGV4dHJhY3RvcihpdGVtLCBpKTtcbiAgICAgICAgICAgIGlmIChuYW1lQW5kVmFsdWUpXG4gICAgICAgICAgICAgICAgcmVzdWx0W25hbWVBbmRWYWx1ZVswXV0gPSBuYW1lQW5kVmFsdWVbMV07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEJ5S2V5UGF0aChvYmosIGtleVBhdGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJyAmJiBoYXNPd24ob2JqLCBrZXlQYXRoKSlcbiAgICAgICAgICAgIHJldHVybiBvYmpba2V5UGF0aF07XG4gICAgICAgIGlmICgha2V5UGF0aClcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5UGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBydiA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlQYXRoLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBnZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoW2ldKTtcbiAgICAgICAgICAgICAgICBydi5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBlcmlvZCA9IGtleVBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAocGVyaW9kICE9PSAtMSkge1xuICAgICAgICAgICAgdmFyIGlubmVyT2JqID0gb2JqW2tleVBhdGguc3Vic3RyKDAsIHBlcmlvZCldO1xuICAgICAgICAgICAgcmV0dXJuIGlubmVyT2JqID09IG51bGwgPyB1bmRlZmluZWQgOiBnZXRCeUtleVBhdGgoaW5uZXJPYmosIGtleVBhdGguc3Vic3RyKHBlcmlvZCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIW9iaiB8fCBrZXlQYXRoID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICgnaXNGcm96ZW4nIGluIE9iamVjdCAmJiBPYmplY3QuaXNGcm96ZW4ob2JqKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlQYXRoICE9PSAnc3RyaW5nJyAmJiAnbGVuZ3RoJyBpbiBrZXlQYXRoKSB7XG4gICAgICAgICAgICBhc3NlcnQodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGtleVBhdGgubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aFtpXSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBlcmlvZCA9IGtleVBhdGguaW5kZXhPZignLicpO1xuICAgICAgICAgICAgaWYgKHBlcmlvZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEtleVBhdGggPSBrZXlQYXRoLnN1YnN0cigwLCBwZXJpb2QpO1xuICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmdLZXlQYXRoID0ga2V5UGF0aC5zdWJzdHIocGVyaW9kICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0tleVBhdGggPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShvYmopICYmICFpc05hTihwYXJzZUludChjdXJyZW50S2V5UGF0aCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zcGxpY2UoY3VycmVudEtleVBhdGgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudEtleVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtjdXJyZW50S2V5UGF0aF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlubmVyT2JqID0gb2JqW2N1cnJlbnRLZXlQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbm5lck9iaiB8fCAhaGFzT3duKG9iaiwgY3VycmVudEtleVBhdGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJPYmogPSAob2JqW2N1cnJlbnRLZXlQYXRoXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKGlubmVyT2JqLCByZW1haW5pbmdLZXlQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkob2JqKSAmJiAhaXNOYU4ocGFyc2VJbnQoa2V5UGF0aCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNwbGljZShrZXlQYXRoLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXlQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5UGF0aF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxCeUtleVBhdGgob2JqLCBrZXlQYXRoKSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5UGF0aCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBzZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoLCB1bmRlZmluZWQpO1xuICAgICAgICBlbHNlIGlmICgnbGVuZ3RoJyBpbiBrZXlQYXRoKVxuICAgICAgICAgICAgW10ubWFwLmNhbGwoa2V5UGF0aCwgZnVuY3Rpb24gKGtwKSB7XG4gICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKG9iaiwga3AsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2hhbGxvd0Nsb25lKG9iaikge1xuICAgICAgICB2YXIgcnYgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24ob2JqLCBtKSlcbiAgICAgICAgICAgICAgICBydlttXSA9IG9ialttXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnY7XG4gICAgfVxuICAgIHZhciBjb25jYXQgPSBbXS5jb25jYXQ7XG4gICAgZnVuY3Rpb24gZmxhdHRlbihhKSB7XG4gICAgICAgIHJldHVybiBjb25jYXQuYXBwbHkoW10sIGEpO1xuICAgIH1cbiAgICB2YXIgaW50cmluc2ljVHlwZU5hbWVzID0gXCJCaWdVaW50NjRBcnJheSxCaWdJbnQ2NEFycmF5LEFycmF5LEJvb2xlYW4sU3RyaW5nLERhdGUsUmVnRXhwLEJsb2IsRmlsZSxGaWxlTGlzdCxGaWxlU3lzdGVtRmlsZUhhbmRsZSxGaWxlU3lzdGVtRGlyZWN0b3J5SGFuZGxlLEFycmF5QnVmZmVyLERhdGFWaWV3LFVpbnQ4Q2xhbXBlZEFycmF5LEltYWdlQml0bWFwLEltYWdlRGF0YSxNYXAsU2V0LENyeXB0b0tleVwiXG4gICAgICAgIC5zcGxpdCgnLCcpLmNvbmNhdChmbGF0dGVuKFs4LCAxNiwgMzIsIDY0XS5tYXAoZnVuY3Rpb24gKG51bSkgeyByZXR1cm4gW1wiSW50XCIsIFwiVWludFwiLCBcIkZsb2F0XCJdLm1hcChmdW5jdGlvbiAodCkgeyByZXR1cm4gdCArIG51bSArIFwiQXJyYXlcIjsgfSk7IH0pKSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7IHJldHVybiBfZ2xvYmFsW3RdOyB9KTtcbiAgICB2YXIgaW50cmluc2ljVHlwZXMgPSBuZXcgU2V0KGludHJpbnNpY1R5cGVOYW1lcy5tYXAoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIF9nbG9iYWxbdF07IH0pKTtcbiAgICBmdW5jdGlvbiBjbG9uZVNpbXBsZU9iamVjdFRyZWUobykge1xuICAgICAgICB2YXIgcnYgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKVxuICAgICAgICAgICAgaWYgKGhhc093bihvLCBrKSkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb1trXTtcbiAgICAgICAgICAgICAgICBydltrXSA9ICF2IHx8IHR5cGVvZiB2ICE9PSAnb2JqZWN0JyB8fCBpbnRyaW5zaWNUeXBlcy5oYXModi5jb25zdHJ1Y3RvcikgPyB2IDogY2xvbmVTaW1wbGVPYmplY3RUcmVlKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9iamVjdElzRW1wdHkobykge1xuICAgICAgICBmb3IgKHZhciBrIGluIG8pXG4gICAgICAgICAgICBpZiAoaGFzT3duKG8sIGspKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBjaXJjdWxhclJlZnMgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGRlZXBDbG9uZShhbnkpIHtcbiAgICAgICAgY2lyY3VsYXJSZWZzID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdmFyIHJ2ID0gaW5uZXJEZWVwQ2xvbmUoYW55KTtcbiAgICAgICAgY2lyY3VsYXJSZWZzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbm5lckRlZXBDbG9uZSh4KSB7XG4gICAgICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgdmFyIHJ2ID0gY2lyY3VsYXJSZWZzLmdldCh4KTtcbiAgICAgICAgaWYgKHJ2KVxuICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgICAgcnYgPSBbXTtcbiAgICAgICAgICAgIGNpcmN1bGFyUmVmcy5zZXQoeCwgcnYpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4Lmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgIHJ2LnB1c2goaW5uZXJEZWVwQ2xvbmUoeFtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGludHJpbnNpY1R5cGVzLmhhcyh4LmNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgcnYgPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByb3RvID0gZ2V0UHJvdG8oeCk7XG4gICAgICAgICAgICBydiA9IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlID8ge30gOiBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICAgICAgICAgIGNpcmN1bGFyUmVmcy5zZXQoeCwgcnYpO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093bih4LCBwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICBydltwcm9wXSA9IGlubmVyRGVlcENsb25lKHhbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnY7XG4gICAgfVxuICAgIHZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuICAgIGZ1bmN0aW9uIHRvU3RyaW5nVGFnKG8pIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIFN5bWJvbC5pdGVyYXRvciA6XG4gICAgICAgICdAQGl0ZXJhdG9yJztcbiAgICB2YXIgZ2V0SXRlcmF0b3JPZiA9IHR5cGVvZiBpdGVyYXRvclN5bWJvbCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICByZXR1cm4geCAhPSBudWxsICYmIChpID0geFtpdGVyYXRvclN5bWJvbF0pICYmIGkuYXBwbHkoeCk7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgZnVuY3Rpb24gZGVsQXJyYXlJdGVtKGEsIHgpIHtcbiAgICAgICAgdmFyIGkgPSBhLmluZGV4T2YoeCk7XG4gICAgICAgIGlmIChpID49IDApXG4gICAgICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGkgPj0gMDtcbiAgICB9XG4gICAgdmFyIE5PX0NIQVJfQVJSQVkgPSB7fTtcbiAgICBmdW5jdGlvbiBnZXRBcnJheU9mKGFycmF5TGlrZSkge1xuICAgICAgICB2YXIgaSwgYSwgeCwgaXQ7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShhcnJheUxpa2UpKVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheUxpa2Uuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzID09PSBOT19DSEFSX0FSUkFZICYmIHR5cGVvZiBhcnJheUxpa2UgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHJldHVybiBbYXJyYXlMaWtlXTtcbiAgICAgICAgICAgIGlmICgoaXQgPSBnZXRJdGVyYXRvck9mKGFycmF5TGlrZSkpKSB7XG4gICAgICAgICAgICAgICAgYSA9IFtdO1xuICAgICAgICAgICAgICAgIHdoaWxlICgoeCA9IGl0Lm5leHQoKSksICF4LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIGEucHVzaCh4LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gW2FycmF5TGlrZV07XG4gICAgICAgICAgICBpID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBhID0gbmV3IEFycmF5KGkpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgICAgIGFbaV0gPSBhcnJheUxpa2VbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2FycmF5TGlrZV07XG4gICAgICAgIH1cbiAgICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGEgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICBhW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgdmFyIGlzQXN5bmNGdW5jdGlvbiA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbltTeW1ib2wudG9TdHJpbmdUYWddID09PSAnQXN5bmNGdW5jdGlvbic7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcblxuICAgIHZhciBkZXhpZUVycm9yTmFtZXMgPSBbXG4gICAgICAgICdNb2RpZnknLFxuICAgICAgICAnQnVsaycsXG4gICAgICAgICdPcGVuRmFpbGVkJyxcbiAgICAgICAgJ1ZlcnNpb25DaGFuZ2UnLFxuICAgICAgICAnU2NoZW1hJyxcbiAgICAgICAgJ1VwZ3JhZGUnLFxuICAgICAgICAnSW52YWxpZFRhYmxlJyxcbiAgICAgICAgJ01pc3NpbmdBUEknLFxuICAgICAgICAnTm9TdWNoRGF0YWJhc2UnLFxuICAgICAgICAnSW52YWxpZEFyZ3VtZW50JyxcbiAgICAgICAgJ1N1YlRyYW5zYWN0aW9uJyxcbiAgICAgICAgJ1Vuc3VwcG9ydGVkJyxcbiAgICAgICAgJ0ludGVybmFsJyxcbiAgICAgICAgJ0RhdGFiYXNlQ2xvc2VkJyxcbiAgICAgICAgJ1ByZW1hdHVyZUNvbW1pdCcsXG4gICAgICAgICdGb3JlaWduQXdhaXQnXG4gICAgXTtcbiAgICB2YXIgaWRiRG9tRXJyb3JOYW1lcyA9IFtcbiAgICAgICAgJ1Vua25vd24nLFxuICAgICAgICAnQ29uc3RyYWludCcsXG4gICAgICAgICdEYXRhJyxcbiAgICAgICAgJ1RyYW5zYWN0aW9uSW5hY3RpdmUnLFxuICAgICAgICAnUmVhZE9ubHknLFxuICAgICAgICAnVmVyc2lvbicsXG4gICAgICAgICdOb3RGb3VuZCcsXG4gICAgICAgICdJbnZhbGlkU3RhdGUnLFxuICAgICAgICAnSW52YWxpZEFjY2VzcycsXG4gICAgICAgICdBYm9ydCcsXG4gICAgICAgICdUaW1lb3V0JyxcbiAgICAgICAgJ1F1b3RhRXhjZWVkZWQnLFxuICAgICAgICAnU3ludGF4JyxcbiAgICAgICAgJ0RhdGFDbG9uZSdcbiAgICBdO1xuICAgIHZhciBlcnJvckxpc3QgPSBkZXhpZUVycm9yTmFtZXMuY29uY2F0KGlkYkRvbUVycm9yTmFtZXMpO1xuICAgIHZhciBkZWZhdWx0VGV4dHMgPSB7XG4gICAgICAgIFZlcnNpb25DaGFuZ2VkOiBcIkRhdGFiYXNlIHZlcnNpb24gY2hhbmdlZCBieSBvdGhlciBkYXRhYmFzZSBjb25uZWN0aW9uXCIsXG4gICAgICAgIERhdGFiYXNlQ2xvc2VkOiBcIkRhdGFiYXNlIGhhcyBiZWVuIGNsb3NlZFwiLFxuICAgICAgICBBYm9ydDogXCJUcmFuc2FjdGlvbiBhYm9ydGVkXCIsXG4gICAgICAgIFRyYW5zYWN0aW9uSW5hY3RpdmU6IFwiVHJhbnNhY3Rpb24gaGFzIGFscmVhZHkgY29tcGxldGVkIG9yIGZhaWxlZFwiLFxuICAgICAgICBNaXNzaW5nQVBJOiBcIkluZGV4ZWREQiBBUEkgbWlzc2luZy4gUGxlYXNlIHZpc2l0IGh0dHBzOi8vdGlueXVybC5jb20veTJ1dXZza2JcIlxuICAgIH07XG4gICAgZnVuY3Rpb24gRGV4aWVFcnJvcihuYW1lLCBtc2cpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbXNnO1xuICAgIH1cbiAgICBkZXJpdmUoRGV4aWVFcnJvcikuZnJvbShFcnJvcikuZXh0ZW5kKHtcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZTsgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGdldE11bHRpRXJyb3JNZXNzYWdlKG1zZywgZmFpbHVyZXMpIHtcbiAgICAgICAgcmV0dXJuIG1zZyArIFwiLiBFcnJvcnM6IFwiICsgT2JqZWN0LmtleXMoZmFpbHVyZXMpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZhaWx1cmVzW2tleV0udG9TdHJpbmcoKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHYsIGksIHMpIHsgcmV0dXJuIHMuaW5kZXhPZih2KSA9PT0gaTsgfSlcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTW9kaWZ5RXJyb3IobXNnLCBmYWlsdXJlcywgc3VjY2Vzc0NvdW50LCBmYWlsZWRLZXlzKSB7XG4gICAgICAgIHRoaXMuZmFpbHVyZXMgPSBmYWlsdXJlcztcbiAgICAgICAgdGhpcy5mYWlsZWRLZXlzID0gZmFpbGVkS2V5cztcbiAgICAgICAgdGhpcy5zdWNjZXNzQ291bnQgPSBzdWNjZXNzQ291bnQ7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGdldE11bHRpRXJyb3JNZXNzYWdlKG1zZywgZmFpbHVyZXMpO1xuICAgIH1cbiAgICBkZXJpdmUoTW9kaWZ5RXJyb3IpLmZyb20oRGV4aWVFcnJvcik7XG4gICAgZnVuY3Rpb24gQnVsa0Vycm9yKG1zZywgZmFpbHVyZXMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJCdWxrRXJyb3JcIjtcbiAgICAgICAgdGhpcy5mYWlsdXJlcyA9IE9iamVjdC5rZXlzKGZhaWx1cmVzKS5tYXAoZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gZmFpbHVyZXNbcG9zXTsgfSk7XG4gICAgICAgIHRoaXMuZmFpbHVyZXNCeVBvcyA9IGZhaWx1cmVzO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNdWx0aUVycm9yTWVzc2FnZShtc2csIHRoaXMuZmFpbHVyZXMpO1xuICAgIH1cbiAgICBkZXJpdmUoQnVsa0Vycm9yKS5mcm9tKERleGllRXJyb3IpO1xuICAgIHZhciBlcnJuYW1lcyA9IGVycm9yTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgbmFtZSkgeyByZXR1cm4gKG9ialtuYW1lXSA9IG5hbWUgKyBcIkVycm9yXCIsIG9iaik7IH0sIHt9KTtcbiAgICB2YXIgQmFzZUV4Y2VwdGlvbiA9IERleGllRXJyb3I7XG4gICAgdmFyIGV4Y2VwdGlvbnMgPSBlcnJvckxpc3QucmVkdWNlKGZ1bmN0aW9uIChvYmosIG5hbWUpIHtcbiAgICAgICAgdmFyIGZ1bGxOYW1lID0gbmFtZSArIFwiRXJyb3JcIjtcbiAgICAgICAgZnVuY3Rpb24gRGV4aWVFcnJvcihtc2dPcklubmVyLCBpbm5lcikge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gZnVsbE5hbWU7XG4gICAgICAgICAgICBpZiAoIW1zZ09ySW5uZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkZWZhdWx0VGV4dHNbbmFtZV0gfHwgZnVsbE5hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbXNnT3JJbm5lciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChtc2dPcklubmVyKS5jb25jYXQoIWlubmVyID8gJycgOiAnXFxuICcgKyBpbm5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lciA9IGlubmVyIHx8IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbXNnT3JJbm5lciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChtc2dPcklubmVyLm5hbWUsIFwiIFwiKS5jb25jYXQobXNnT3JJbm5lci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVyID0gbXNnT3JJbm5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZXJpdmUoRGV4aWVFcnJvcikuZnJvbShCYXNlRXhjZXB0aW9uKTtcbiAgICAgICAgb2JqW25hbWVdID0gRGV4aWVFcnJvcjtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgZXhjZXB0aW9ucy5TeW50YXggPSBTeW50YXhFcnJvcjtcbiAgICBleGNlcHRpb25zLlR5cGUgPSBUeXBlRXJyb3I7XG4gICAgZXhjZXB0aW9ucy5SYW5nZSA9IFJhbmdlRXJyb3I7XG4gICAgdmFyIGV4Y2VwdGlvbk1hcCA9IGlkYkRvbUVycm9yTmFtZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIG5hbWUpIHtcbiAgICAgICAgb2JqW25hbWUgKyBcIkVycm9yXCJdID0gZXhjZXB0aW9uc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgZnVuY3Rpb24gbWFwRXJyb3IoZG9tRXJyb3IsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFkb21FcnJvciB8fCBkb21FcnJvciBpbnN0YW5jZW9mIERleGllRXJyb3IgfHwgZG9tRXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IgfHwgZG9tRXJyb3IgaW5zdGFuY2VvZiBTeW50YXhFcnJvciB8fCAhZG9tRXJyb3IubmFtZSB8fCAhZXhjZXB0aW9uTWFwW2RvbUVycm9yLm5hbWVdKVxuICAgICAgICAgICAgcmV0dXJuIGRvbUVycm9yO1xuICAgICAgICB2YXIgcnYgPSBuZXcgZXhjZXB0aW9uTWFwW2RvbUVycm9yLm5hbWVdKG1lc3NhZ2UgfHwgZG9tRXJyb3IubWVzc2FnZSwgZG9tRXJyb3IpO1xuICAgICAgICBpZiAoXCJzdGFja1wiIGluIGRvbUVycm9yKSB7XG4gICAgICAgICAgICBzZXRQcm9wKHJ2LCBcInN0YWNrXCIsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlubmVyLnN0YWNrO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH1cbiAgICB2YXIgZnVsbE5hbWVFeGNlcHRpb25zID0gZXJyb3JMaXN0LnJlZHVjZShmdW5jdGlvbiAob2JqLCBuYW1lKSB7XG4gICAgICAgIGlmIChbXCJTeW50YXhcIiwgXCJUeXBlXCIsIFwiUmFuZ2VcIl0uaW5kZXhPZihuYW1lKSA9PT0gLTEpXG4gICAgICAgICAgICBvYmpbbmFtZSArIFwiRXJyb3JcIl0gPSBleGNlcHRpb25zW25hbWVdO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIHt9KTtcbiAgICBmdWxsTmFtZUV4Y2VwdGlvbnMuTW9kaWZ5RXJyb3IgPSBNb2RpZnlFcnJvcjtcbiAgICBmdWxsTmFtZUV4Y2VwdGlvbnMuRGV4aWVFcnJvciA9IERleGllRXJyb3I7XG4gICAgZnVsbE5hbWVFeGNlcHRpb25zLkJ1bGtFcnJvciA9IEJ1bGtFcnJvcjtcblxuICAgIGZ1bmN0aW9uIG5vcCgpIHsgfVxuICAgIGZ1bmN0aW9uIG1pcnJvcih2YWwpIHsgcmV0dXJuIHZhbDsgfVxuICAgIGZ1bmN0aW9uIHB1cmVGdW5jdGlvbkNoYWluKGYxLCBmMikge1xuICAgICAgICBpZiAoZjEgPT0gbnVsbCB8fCBmMSA9PT0gbWlycm9yKVxuICAgICAgICAgICAgcmV0dXJuIGYyO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGYyKGYxKHZhbCkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxsQm90aChvbjEsIG9uMikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb24xLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBvbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaG9va0NyZWF0aW5nQ2hhaW4oZjEsIGYyKSB7XG4gICAgICAgIGlmIChmMSA9PT0gbm9wKVxuICAgICAgICAgICAgcmV0dXJuIGYyO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcyA9IGYxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gcmVzO1xuICAgICAgICAgICAgdmFyIG9uc3VjY2VzcyA9IHRoaXMub25zdWNjZXNzLFxuICAgICAgICAgICAgb25lcnJvciA9IHRoaXMub25lcnJvcjtcbiAgICAgICAgICAgIHRoaXMub25zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB2YXIgcmVzMiA9IGYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAob25zdWNjZXNzKVxuICAgICAgICAgICAgICAgIHRoaXMub25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MgPyBjYWxsQm90aChvbnN1Y2Nlc3MsIHRoaXMub25zdWNjZXNzKSA6IG9uc3VjY2VzcztcbiAgICAgICAgICAgIGlmIChvbmVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMub25lcnJvciA9IHRoaXMub25lcnJvciA/IGNhbGxCb3RoKG9uZXJyb3IsIHRoaXMub25lcnJvcikgOiBvbmVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIHJlczIgIT09IHVuZGVmaW5lZCA/IHJlczIgOiByZXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhvb2tEZWxldGluZ0NoYWluKGYxLCBmMikge1xuICAgICAgICBpZiAoZjEgPT09IG5vcClcbiAgICAgICAgICAgIHJldHVybiBmMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGYxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgb25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MsXG4gICAgICAgICAgICBvbmVycm9yID0gdGhpcy5vbmVycm9yO1xuICAgICAgICAgICAgdGhpcy5vbnN1Y2Nlc3MgPSB0aGlzLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChvbnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgdGhpcy5vbnN1Y2Nlc3MgPSB0aGlzLm9uc3VjY2VzcyA/IGNhbGxCb3RoKG9uc3VjY2VzcywgdGhpcy5vbnN1Y2Nlc3MpIDogb25zdWNjZXNzO1xuICAgICAgICAgICAgaWYgKG9uZXJyb3IpXG4gICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yID0gdGhpcy5vbmVycm9yID8gY2FsbEJvdGgob25lcnJvciwgdGhpcy5vbmVycm9yKSA6IG9uZXJyb3I7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhvb2tVcGRhdGluZ0NoYWluKGYxLCBmMikge1xuICAgICAgICBpZiAoZjEgPT09IG5vcClcbiAgICAgICAgICAgIHJldHVybiBmMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtb2RpZmljYXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gZjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGV4dGVuZChtb2RpZmljYXRpb25zLCByZXMpO1xuICAgICAgICAgICAgdmFyIG9uc3VjY2VzcyA9IHRoaXMub25zdWNjZXNzLFxuICAgICAgICAgICAgb25lcnJvciA9IHRoaXMub25lcnJvcjtcbiAgICAgICAgICAgIHRoaXMub25zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB2YXIgcmVzMiA9IGYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAob25zdWNjZXNzKVxuICAgICAgICAgICAgICAgIHRoaXMub25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MgPyBjYWxsQm90aChvbnN1Y2Nlc3MsIHRoaXMub25zdWNjZXNzKSA6IG9uc3VjY2VzcztcbiAgICAgICAgICAgIGlmIChvbmVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMub25lcnJvciA9IHRoaXMub25lcnJvciA/IGNhbGxCb3RoKG9uZXJyb3IsIHRoaXMub25lcnJvcikgOiBvbmVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIHJlcyA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAocmVzMiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVzMikgOlxuICAgICAgICAgICAgICAgIChleHRlbmQocmVzLCByZXMyKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJldmVyc2VTdG9wcGFibGVFdmVudENoYWluKGYxLCBmMikge1xuICAgICAgICBpZiAoZjEgPT09IG5vcClcbiAgICAgICAgICAgIHJldHVybiBmMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvbWlzYWJsZUNoYWluKGYxLCBmMikge1xuICAgICAgICBpZiAoZjEgPT09IG5vcClcbiAgICAgICAgICAgIHJldHVybiBmMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBmMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpeiA9IHRoaXMsIGkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGkpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGYyLmFwcGx5KHRoaXosIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGRlYnVnID0gdHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAvXihodHRwfGh0dHBzKTpcXC9cXC8obG9jYWxob3N0fDEyN1xcLjBcXC4wXFwuMSkvLnRlc3QobG9jYXRpb24uaHJlZik7XG4gICAgZnVuY3Rpb24gc2V0RGVidWcodmFsdWUsIGZpbHRlcikge1xuICAgICAgICBkZWJ1ZyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBJTlRFUk5BTCA9IHt9O1xuICAgIHZhciBaT05FX0VDSE9fTElNSVQgPSAxMDAsIF9hJDEgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBbXSA6XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsUCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uc3VidGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBbZ2xvYmFsUCwgZ2V0UHJvdG8oZ2xvYmFsUCksIGdsb2JhbFBdO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVAgPSBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS01MTJcIiwgbmV3IFVpbnQ4QXJyYXkoWzBdKSk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5hdGl2ZVAsXG4gICAgICAgICAgICAgICAgZ2V0UHJvdG8obmF0aXZlUCksXG4gICAgICAgICAgICAgICAgZ2xvYmFsUFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSkoKSwgcmVzb2x2ZWROYXRpdmVQcm9taXNlID0gX2EkMVswXSwgbmF0aXZlUHJvbWlzZVByb3RvID0gX2EkMVsxXSwgcmVzb2x2ZWRHbG9iYWxQcm9taXNlID0gX2EkMVsyXSwgbmF0aXZlUHJvbWlzZVRoZW4gPSBuYXRpdmVQcm9taXNlUHJvdG8gJiYgbmF0aXZlUHJvbWlzZVByb3RvLnRoZW47XG4gICAgdmFyIE5hdGl2ZVByb21pc2UgPSByZXNvbHZlZE5hdGl2ZVByb21pc2UgJiYgcmVzb2x2ZWROYXRpdmVQcm9taXNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBwYXRjaEdsb2JhbFByb21pc2UgPSAhIXJlc29sdmVkR2xvYmFsUHJvbWlzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZVBoeXNpY2FsVGljaygpIHtcbiAgICAgICAgcXVldWVNaWNyb3Rhc2socGh5c2ljYWxUaWNrKTtcbiAgICB9XG4gICAgdmFyIGFzYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICAgICAgbWljcm90aWNrUXVldWUucHVzaChbY2FsbGJhY2ssIGFyZ3NdKTtcbiAgICAgICAgaWYgKG5lZWRzTmV3UGh5c2ljYWxUaWNrKSB7XG4gICAgICAgICAgICBzY2hlZHVsZVBoeXNpY2FsVGljaygpO1xuICAgICAgICAgICAgbmVlZHNOZXdQaHlzaWNhbFRpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGlzT3V0c2lkZU1pY3JvVGljayA9IHRydWUsXG4gICAgbmVlZHNOZXdQaHlzaWNhbFRpY2sgPSB0cnVlLFxuICAgIHVuaGFuZGxlZEVycm9ycyA9IFtdLFxuICAgIHJlamVjdGluZ0Vycm9ycyA9IFtdLFxuICAgIHJlamVjdGlvbk1hcHBlciA9IG1pcnJvcjtcbiAgICB2YXIgZ2xvYmFsUFNEID0ge1xuICAgICAgICBpZDogJ2dsb2JhbCcsXG4gICAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgICAgcmVmOiAwLFxuICAgICAgICB1bmhhbmRsZWRzOiBbXSxcbiAgICAgICAgb251bmhhbmRsZWQ6IG5vcCxcbiAgICAgICAgcGdwOiBmYWxzZSxcbiAgICAgICAgZW52OiB7fSxcbiAgICAgICAgZmluYWxpemU6IG5vcFxuICAgIH07XG4gICAgdmFyIFBTRCA9IGdsb2JhbFBTRDtcbiAgICB2YXIgbWljcm90aWNrUXVldWUgPSBbXTtcbiAgICB2YXIgbnVtU2NoZWR1bGVkQ2FsbHMgPSAwO1xuICAgIHZhciB0aWNrRmluYWxpemVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIERleGllUHJvbWlzZShmbikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9saWIgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBzZCA9ICh0aGlzLl9QU0QgPSBQU0QpO1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZm4gIT09IElOVEVSTkFMKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICBoYW5kbGVSZWplY3Rpb24odGhpcywgdGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICArK3BzZC5yZWY7XG4gICAgICAgIGV4ZWN1dGVQcm9taXNlVGFzayh0aGlzLCBmbik7XG4gICAgfVxuICAgIHZhciB0aGVuUHJvcCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHNkID0gUFNELCBtaWNyb1Rhc2tJZCA9IHRvdGFsRWNob2VzO1xuICAgICAgICAgICAgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlQXdhaXQgPSAhcHNkLmdsb2JhbCAmJiAocHNkICE9PSBQU0QgfHwgbWljcm9UYXNrSWQgIT09IHRvdGFsRWNob2VzKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xlYW51cCA9IHBvc3NpYmxlQXdhaXQgJiYgIWRlY3JlbWVudEV4cGVjdGVkQXdhaXRzKCk7XG4gICAgICAgICAgICAgICAgdmFyIHJ2ID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZVRvTGlzdGVuZXIoX3RoaXMsIG5ldyBMaXN0ZW5lcihuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwKG9uRnVsZmlsbGVkLCBwc2QsIHBvc3NpYmxlQXdhaXQsIGNsZWFudXApLCBuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwKG9uUmVqZWN0ZWQsIHBzZCwgcG9zc2libGVBd2FpdCwgY2xlYW51cCksIHJlc29sdmUsIHJlamVjdCwgcHNkKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnNvbGVUYXNrKVxuICAgICAgICAgICAgICAgICAgICBydi5fY29uc29sZVRhc2sgPSB0aGlzLl9jb25zb2xlVGFzaztcbiAgICAgICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGVuLnByb3RvdHlwZSA9IElOVEVSTkFMO1xuICAgICAgICAgICAgcmV0dXJuIHRoZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRQcm9wKHRoaXMsICd0aGVuJywgdmFsdWUgJiYgdmFsdWUucHJvdG90eXBlID09PSBJTlRFUk5BTCA/XG4gICAgICAgICAgICAgICAgdGhlblByb3AgOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogdGhlblByb3Auc2V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHByb3BzKERleGllUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAgICAgdGhlbjogdGhlblByb3AsXG4gICAgICAgIF90aGVuOiBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHByb3BhZ2F0ZVRvTGlzdGVuZXIodGhpcywgbmV3IExpc3RlbmVyKG51bGwsIG51bGwsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBQU0QpKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2F0Y2g6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBhcmd1bWVudHNbMF0sIGhhbmRsZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiB0eXBlID8gaGFuZGxlcihlcnIpIDogUHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHRoaXMudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnIgJiYgZXJyLm5hbWUgPT09IHR5cGUgPyBoYW5kbGVyKGVycikgOiBQcm9taXNlUmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmFsbHk6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlOyB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUob25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZVJlamVjdChlcnIpOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0aW1lb3V0OiBmdW5jdGlvbiAobXMsIG1zZykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBtcyA8IEluZmluaXR5ID9cbiAgICAgICAgICAgICAgICBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KG5ldyBleGNlcHRpb25zLlRpbWVvdXQobXNnKSk7IH0sIG1zKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGhlbihyZXNvbHZlLCByZWplY3QpLmZpbmFsbHkoY2xlYXJUaW1lb3V0LmJpbmQobnVsbCwgaGFuZGxlKSk7XG4gICAgICAgICAgICAgICAgfSkgOiB0aGlzO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZylcbiAgICAgICAgc2V0UHJvcChEZXhpZVByb21pc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsICdEZXhpZS5Qcm9taXNlJyk7XG4gICAgZ2xvYmFsUFNELmVudiA9IHNuYXBTaG90KCk7XG4gICAgZnVuY3Rpb24gTGlzdGVuZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHJlc29sdmUsIHJlamVjdCwgem9uZSkge1xuICAgICAgICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICAgICAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgdGhpcy5wc2QgPSB6b25lO1xuICAgIH1cbiAgICBwcm9wcyhEZXhpZVByb21pc2UsIHtcbiAgICAgICAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gZ2V0QXJyYXlPZi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgLm1hcChvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkgeyByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUoYSkudGhlbihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSB4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcmVtYWluaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH0sIHJlamVjdCk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGV4aWVQcm9taXNlKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBydiA9IG5ldyBEZXhpZVByb21pc2UoSU5URVJOQUwsIHRydWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0OiBQcm9taXNlUmVqZWN0LFxuICAgICAgICByYWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gZ2V0QXJyYXlPZi5hcHBseShudWxsLCBhcmd1bWVudHMpLm1hcChvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlLCByZWplY3QpOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBQU0Q6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUFNEOyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIFBTRCA9IHZhbHVlOyB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsRWNob2VzOiB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG90YWxFY2hvZXM7IH0gfSxcbiAgICAgICAgbmV3UFNEOiBuZXdTY29wZSxcbiAgICAgICAgdXNlUFNEOiB1c2VQU0QsXG4gICAgICAgIHNjaGVkdWxlcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhc2FwOyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgYXNhcCA9IHZhbHVlOyB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdGlvbk1hcHBlcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3Rpb25NYXBwZXI7IH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZWplY3Rpb25NYXBwZXIgPSB2YWx1ZTsgfVxuICAgICAgICB9LFxuICAgICAgICBmb2xsb3c6IGZ1bmN0aW9uIChmbiwgem9uZVByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Njb3BlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBzZCA9IFBTRDtcbiAgICAgICAgICAgICAgICAgICAgcHNkLnVuaGFuZGxlZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHNkLm9udW5oYW5kbGVkID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICBwc2QuZmluYWxpemUgPSBjYWxsQm90aChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2F0X2VuZF9vZl90aGlzX29yX25leHRfcGh5c2ljYWxfdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5oYW5kbGVkcy5sZW5ndGggPT09IDAgPyByZXNvbHZlKCkgOiByZWplY3QoX3RoaXMudW5oYW5kbGVkc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgcHNkLmZpbmFsaXplKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9LCB6b25lUHJvcHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIGlmIChOYXRpdmVQcm9taXNlLmFsbFNldHRsZWQpXG4gICAgICAgICAgICBzZXRQcm9wKERleGllUHJvbWlzZSwgXCJhbGxTZXR0bGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zc2libGVQcm9taXNlcyA9IGdldEFycmF5T2YuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5tYXAob25Qb3NzaWJsZVBhcmFsbGVsbEFzeW5jKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVQcm9taXNlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZyA9IHBvc3NpYmxlUHJvbWlzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShyZW1haW5pbmcpO1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHsgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHApLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiByZXN1bHRzW2ldID0geyBzdGF0dXM6IFwiZnVsZmlsbGVkXCIsIHZhbHVlOiB2YWx1ZSB9OyB9LCBmdW5jdGlvbiAocmVhc29uKSB7IHJldHVybiByZXN1bHRzW2ldID0geyBzdGF0dXM6IFwicmVqZWN0ZWRcIiwgcmVhc29uOiByZWFzb24gfTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0tcmVtYWluaW5nIHx8IHJlc29sdmUocmVzdWx0cyk7IH0pOyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoTmF0aXZlUHJvbWlzZS5hbnkgJiYgdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHNldFByb3AoRGV4aWVQcm9taXNlLCBcImFueVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlUHJvbWlzZXMgPSBnZXRBcnJheU9mLmFwcGx5KG51bGwsIGFyZ3VtZW50cykubWFwKG9uUG9zc2libGVQYXJhbGxlbGxBc3luYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVQcm9taXNlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmcgPSBwb3NzaWJsZVByb21pc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZhaWx1cmVzID0gbmV3IEFycmF5KHJlbWFpbmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlUHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocCwgaSkgeyByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUocCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9LCBmdW5jdGlvbiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXNbaV0gPSBmYWlsdXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJlbWFpbmluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKGZhaWx1cmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAoTmF0aXZlUHJvbWlzZS53aXRoUmVzb2x2ZXJzKVxuICAgICAgICAgICAgRGV4aWVQcm9taXNlLndpdGhSZXNvbHZlcnMgPSBOYXRpdmVQcm9taXNlLndpdGhSZXNvbHZlcnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVQcm9taXNlVGFzayhwcm9taXNlLCBmbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBwcm9taXNlKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRFeGVjdXRlVGljayA9IHByb21pc2UuX2xpYiAmJiBiZWdpbk1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVQcm9taXNlVGFzayhwcm9taXNlLCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIERleGllUHJvbWlzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuX3RoZW4ocmVzb2x2ZSwgcmVqZWN0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuX3N0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQWxsTGlzdGVuZXJzKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhlY3V0ZVRpY2spXG4gICAgICAgICAgICAgICAgICAgIGVuZE1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgICAgICB9LCBoYW5kbGVSZWplY3Rpb24uYmluZChudWxsLCBwcm9taXNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBoYW5kbGVSZWplY3Rpb24ocHJvbWlzZSwgZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlamVjdGlvbihwcm9taXNlLCByZWFzb24pIHtcbiAgICAgICAgcmVqZWN0aW5nRXJyb3JzLnB1c2gocmVhc29uKTtcbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc2hvdWxkRXhlY3V0ZVRpY2sgPSBwcm9taXNlLl9saWIgJiYgYmVnaW5NaWNyb1RpY2tTY29wZSgpO1xuICAgICAgICByZWFzb24gPSByZWplY3Rpb25NYXBwZXIocmVhc29uKTtcbiAgICAgICAgcHJvbWlzZS5fc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgcHJvbWlzZS5fdmFsdWUgPSByZWFzb247XG4gICAgICAgIGFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IocHJvbWlzZSk7XG4gICAgICAgIHByb3BhZ2F0ZUFsbExpc3RlbmVycyhwcm9taXNlKTtcbiAgICAgICAgaWYgKHNob3VsZEV4ZWN1dGVUaWNrKVxuICAgICAgICAgICAgZW5kTWljcm9UaWNrU2NvcGUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvcGFnYXRlQWxsTGlzdGVuZXJzKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHByb21pc2UuX2xpc3RlbmVycztcbiAgICAgICAgcHJvbWlzZS5fbGlzdGVuZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHByb3BhZ2F0ZVRvTGlzdGVuZXIocHJvbWlzZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHNkID0gcHJvbWlzZS5fUFNEO1xuICAgICAgICAtLXBzZC5yZWYgfHwgcHNkLmZpbmFsaXplKCk7XG4gICAgICAgIGlmIChudW1TY2hlZHVsZWRDYWxscyA9PT0gMCkge1xuICAgICAgICAgICAgKytudW1TY2hlZHVsZWRDYWxscztcbiAgICAgICAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgtLW51bVNjaGVkdWxlZENhbGxzID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZVBoeXNpY2FsVGljaygpO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb3BhZ2F0ZVRvTGlzdGVuZXIocHJvbWlzZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNiID0gcHJvbWlzZS5fc3RhdGUgPyBsaXN0ZW5lci5vbkZ1bGZpbGxlZCA6IGxpc3RlbmVyLm9uUmVqZWN0ZWQ7XG4gICAgICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIChwcm9taXNlLl9zdGF0ZSA/IGxpc3RlbmVyLnJlc29sdmUgOiBsaXN0ZW5lci5yZWplY3QpKHByb21pc2UuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICArK2xpc3RlbmVyLnBzZC5yZWY7XG4gICAgICAgICsrbnVtU2NoZWR1bGVkQ2FsbHM7XG4gICAgICAgIGFzYXAoY2FsbExpc3RlbmVyLCBbY2IsIHByb21pc2UsIGxpc3RlbmVyXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lcihjYiwgcHJvbWlzZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZXQsIHZhbHVlID0gcHJvbWlzZS5fdmFsdWU7XG4gICAgICAgICAgICBpZiAoIXByb21pc2UuX3N0YXRlICYmIHJlamVjdGluZ0Vycm9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmVqZWN0aW5nRXJyb3JzID0gW107XG4gICAgICAgICAgICByZXQgPSBkZWJ1ZyAmJiBwcm9taXNlLl9jb25zb2xlVGFzayA/IHByb21pc2UuX2NvbnNvbGVUYXNrLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBjYih2YWx1ZSk7IH0pIDogY2IodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFwcm9taXNlLl9zdGF0ZSAmJiByZWplY3RpbmdFcnJvcnMuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbWFya0Vycm9yQXNIYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdGVuZXIucmVzb2x2ZShyZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoLS1udW1TY2hlZHVsZWRDYWxscyA9PT0gMClcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZVBoeXNpY2FsVGljaygpO1xuICAgICAgICAgICAgLS1saXN0ZW5lci5wc2QucmVmIHx8IGxpc3RlbmVyLnBzZC5maW5hbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBoeXNpY2FsVGljaygpIHtcbiAgICAgICAgdXNlUFNEKGdsb2JhbFBTRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmVnaW5NaWNyb1RpY2tTY29wZSgpICYmIGVuZE1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiZWdpbk1pY3JvVGlja1Njb3BlKCkge1xuICAgICAgICB2YXIgd2FzUm9vdEV4ZWMgPSBpc091dHNpZGVNaWNyb1RpY2s7XG4gICAgICAgIGlzT3V0c2lkZU1pY3JvVGljayA9IGZhbHNlO1xuICAgICAgICBuZWVkc05ld1BoeXNpY2FsVGljayA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gd2FzUm9vdEV4ZWM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuZE1pY3JvVGlja1Njb3BlKCkge1xuICAgICAgICB2YXIgY2FsbGJhY2tzLCBpLCBsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB3aGlsZSAobWljcm90aWNrUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA9IG1pY3JvdGlja1F1ZXVlO1xuICAgICAgICAgICAgICAgIG1pY3JvdGlja1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgbCA9IGNhbGxiYWNrcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVswXS5hcHBseShudWxsLCBpdGVtWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG1pY3JvdGlja1F1ZXVlLmxlbmd0aCA+IDApO1xuICAgICAgICBpc091dHNpZGVNaWNyb1RpY2sgPSB0cnVlO1xuICAgICAgICBuZWVkc05ld1BoeXNpY2FsVGljayA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmFsaXplUGh5c2ljYWxUaWNrKCkge1xuICAgICAgICB2YXIgdW5oYW5kbGVkRXJycyA9IHVuaGFuZGxlZEVycm9ycztcbiAgICAgICAgdW5oYW5kbGVkRXJyb3JzID0gW107XG4gICAgICAgIHVuaGFuZGxlZEVycnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcC5fUFNELm9udW5oYW5kbGVkLmNhbGwobnVsbCwgcC5fdmFsdWUsIHApO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZpbmFsaXplcnMgPSB0aWNrRmluYWxpemVycy5zbGljZSgwKTtcbiAgICAgICAgdmFyIGkgPSBmaW5hbGl6ZXJzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkpXG4gICAgICAgICAgICBmaW5hbGl6ZXJzWy0taV0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuX2F0X2VuZF9vZl90aGlzX29yX25leHRfcGh5c2ljYWxfdGljayhmbikge1xuICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZXIoKSB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgdGlja0ZpbmFsaXplcnMuc3BsaWNlKHRpY2tGaW5hbGl6ZXJzLmluZGV4T2YoZmluYWxpemVyKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGlja0ZpbmFsaXplcnMucHVzaChmaW5hbGl6ZXIpO1xuICAgICAgICArK251bVNjaGVkdWxlZENhbGxzO1xuICAgICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgtLW51bVNjaGVkdWxlZENhbGxzID09PSAwKVxuICAgICAgICAgICAgICAgIGZpbmFsaXplUGh5c2ljYWxUaWNrKCk7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkUG9zc2libHlVbmhhbmRsZWRFcnJvcihwcm9taXNlKSB7XG4gICAgICAgIGlmICghdW5oYW5kbGVkRXJyb3JzLnNvbWUoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAuX3ZhbHVlID09PSBwcm9taXNlLl92YWx1ZTsgfSkpXG4gICAgICAgICAgICB1bmhhbmRsZWRFcnJvcnMucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFya0Vycm9yQXNIYW5kbGVkKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGkgPSB1bmhhbmRsZWRFcnJvcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaSlcbiAgICAgICAgICAgIGlmICh1bmhhbmRsZWRFcnJvcnNbLS1pXS5fdmFsdWUgPT09IHByb21pc2UuX3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdW5oYW5kbGVkRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFByb21pc2VSZWplY3QocmVhc29uKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGV4aWVQcm9taXNlKElOVEVSTkFMLCBmYWxzZSwgcmVhc29uKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd3JhcChmbiwgZXJyb3JDYXRjaGVyKSB7XG4gICAgICAgIHZhciBwc2QgPSBQU0Q7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FzUm9vdEV4ZWMgPSBiZWdpbk1pY3JvVGlja1Njb3BlKCksIG91dGVyU2NvcGUgPSBQU0Q7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN3aXRjaFRvWm9uZShwc2QsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvckNhdGNoZXIgJiYgZXJyb3JDYXRjaGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoVG9ab25lKG91dGVyU2NvcGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAod2FzUm9vdEV4ZWMpXG4gICAgICAgICAgICAgICAgICAgIGVuZE1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciB0YXNrID0geyBhd2FpdHM6IDAsIGVjaG9lczogMCwgaWQ6IDAgfTtcbiAgICB2YXIgdGFza0NvdW50ZXIgPSAwO1xuICAgIHZhciB6b25lU3RhY2sgPSBbXTtcbiAgICB2YXIgem9uZUVjaG9lcyA9IDA7XG4gICAgdmFyIHRvdGFsRWNob2VzID0gMDtcbiAgICB2YXIgem9uZV9pZF9jb3VudGVyID0gMDtcbiAgICBmdW5jdGlvbiBuZXdTY29wZShmbiwgcHJvcHMsIGExLCBhMikge1xuICAgICAgICB2YXIgcGFyZW50ID0gUFNELCBwc2QgPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7XG4gICAgICAgIHBzZC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHBzZC5yZWYgPSAwO1xuICAgICAgICBwc2QuZ2xvYmFsID0gZmFsc2U7XG4gICAgICAgIHBzZC5pZCA9ICsrem9uZV9pZF9jb3VudGVyO1xuICAgICAgICBnbG9iYWxQU0QuZW52O1xuICAgICAgICBwc2QuZW52ID0gcGF0Y2hHbG9iYWxQcm9taXNlID8ge1xuICAgICAgICAgICAgUHJvbWlzZTogRGV4aWVQcm9taXNlLFxuICAgICAgICAgICAgUHJvbWlzZVByb3A6IHsgdmFsdWU6IERleGllUHJvbWlzZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYWxsOiBEZXhpZVByb21pc2UuYWxsLFxuICAgICAgICAgICAgcmFjZTogRGV4aWVQcm9taXNlLnJhY2UsXG4gICAgICAgICAgICBhbGxTZXR0bGVkOiBEZXhpZVByb21pc2UuYWxsU2V0dGxlZCxcbiAgICAgICAgICAgIGFueTogRGV4aWVQcm9taXNlLmFueSxcbiAgICAgICAgICAgIHJlc29sdmU6IERleGllUHJvbWlzZS5yZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0OiBEZXhpZVByb21pc2UucmVqZWN0LFxuICAgICAgICB9IDoge307XG4gICAgICAgIGlmIChwcm9wcylcbiAgICAgICAgICAgIGV4dGVuZChwc2QsIHByb3BzKTtcbiAgICAgICAgKytwYXJlbnQucmVmO1xuICAgICAgICBwc2QuZmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAtLXRoaXMucGFyZW50LnJlZiB8fCB0aGlzLnBhcmVudC5maW5hbGl6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcnYgPSB1c2VQU0QocHNkLCBmbiwgYTEsIGEyKTtcbiAgICAgICAgaWYgKHBzZC5yZWYgPT09IDApXG4gICAgICAgICAgICBwc2QuZmluYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cygpIHtcbiAgICAgICAgaWYgKCF0YXNrLmlkKVxuICAgICAgICAgICAgdGFzay5pZCA9ICsrdGFza0NvdW50ZXI7XG4gICAgICAgICsrdGFzay5hd2FpdHM7XG4gICAgICAgIHRhc2suZWNob2VzICs9IFpPTkVfRUNIT19MSU1JVDtcbiAgICAgICAgcmV0dXJuIHRhc2suaWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzKCkge1xuICAgICAgICBpZiAoIXRhc2suYXdhaXRzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoLS10YXNrLmF3YWl0cyA9PT0gMClcbiAgICAgICAgICAgIHRhc2suaWQgPSAwO1xuICAgICAgICB0YXNrLmVjaG9lcyA9IHRhc2suYXdhaXRzICogWk9ORV9FQ0hPX0xJTUlUO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCgnJyArIG5hdGl2ZVByb21pc2VUaGVuKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykgPT09IC0xKSB7XG4gICAgICAgIGluY3JlbWVudEV4cGVjdGVkQXdhaXRzID0gZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMgPSBub3A7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUG9zc2libGVQYXJhbGxlbGxBc3luYyhwb3NzaWJsZVByb21pc2UpIHtcbiAgICAgICAgaWYgKHRhc2suZWNob2VzICYmIHBvc3NpYmxlUHJvbWlzZSAmJiBwb3NzaWJsZVByb21pc2UuY29uc3RydWN0b3IgPT09IE5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIGluY3JlbWVudEV4cGVjdGVkQXdhaXRzKCk7XG4gICAgICAgICAgICByZXR1cm4gcG9zc2libGVQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zc2libGVQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB6b25lRW50ZXJFY2hvKHRhcmdldFpvbmUpIHtcbiAgICAgICAgKyt0b3RhbEVjaG9lcztcbiAgICAgICAgaWYgKCF0YXNrLmVjaG9lcyB8fCAtLXRhc2suZWNob2VzID09PSAwKSB7XG4gICAgICAgICAgICB0YXNrLmVjaG9lcyA9IHRhc2suYXdhaXRzID0gdGFzay5pZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgem9uZVN0YWNrLnB1c2goUFNEKTtcbiAgICAgICAgc3dpdGNoVG9ab25lKHRhcmdldFpvbmUsIHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB6b25lTGVhdmVFY2hvKCkge1xuICAgICAgICB2YXIgem9uZSA9IHpvbmVTdGFja1t6b25lU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIHpvbmVTdGFjay5wb3AoKTtcbiAgICAgICAgc3dpdGNoVG9ab25lKHpvbmUsIGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dpdGNoVG9ab25lKHRhcmdldFpvbmUsIGJFbnRlcmluZ1pvbmUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRab25lID0gUFNEO1xuICAgICAgICBpZiAoYkVudGVyaW5nWm9uZSA/IHRhc2suZWNob2VzICYmICghem9uZUVjaG9lcysrIHx8IHRhcmdldFpvbmUgIT09IFBTRCkgOiB6b25lRWNob2VzICYmICghLS16b25lRWNob2VzIHx8IHRhcmdldFpvbmUgIT09IFBTRCkpIHtcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGJFbnRlcmluZ1pvbmUgPyB6b25lRW50ZXJFY2hvLmJpbmQobnVsbCwgdGFyZ2V0Wm9uZSkgOiB6b25lTGVhdmVFY2hvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Wm9uZSA9PT0gUFNEKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBQU0QgPSB0YXJnZXRab25lO1xuICAgICAgICBpZiAoY3VycmVudFpvbmUgPT09IGdsb2JhbFBTRClcbiAgICAgICAgICAgIGdsb2JhbFBTRC5lbnYgPSBzbmFwU2hvdCgpO1xuICAgICAgICBpZiAocGF0Y2hHbG9iYWxQcm9taXNlKSB7XG4gICAgICAgICAgICB2YXIgR2xvYmFsUHJvbWlzZSA9IGdsb2JhbFBTRC5lbnYuUHJvbWlzZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRFbnYgPSB0YXJnZXRab25lLmVudjtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Wm9uZS5nbG9iYWwgfHwgdGFyZ2V0Wm9uZS5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2dsb2JhbCwgJ1Byb21pc2UnLCB0YXJnZXRFbnYuUHJvbWlzZVByb3ApO1xuICAgICAgICAgICAgICAgIEdsb2JhbFByb21pc2UuYWxsID0gdGFyZ2V0RW52LmFsbDtcbiAgICAgICAgICAgICAgICBHbG9iYWxQcm9taXNlLnJhY2UgPSB0YXJnZXRFbnYucmFjZTtcbiAgICAgICAgICAgICAgICBHbG9iYWxQcm9taXNlLnJlc29sdmUgPSB0YXJnZXRFbnYucmVzb2x2ZTtcbiAgICAgICAgICAgICAgICBHbG9iYWxQcm9taXNlLnJlamVjdCA9IHRhcmdldEVudi5yZWplY3Q7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEVudi5hbGxTZXR0bGVkKVxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxQcm9taXNlLmFsbFNldHRsZWQgPSB0YXJnZXRFbnYuYWxsU2V0dGxlZDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RW52LmFueSlcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsUHJvbWlzZS5hbnkgPSB0YXJnZXRFbnYuYW55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNuYXBTaG90KCkge1xuICAgICAgICB2YXIgR2xvYmFsUHJvbWlzZSA9IF9nbG9iYWwuUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHBhdGNoR2xvYmFsUHJvbWlzZSA/IHtcbiAgICAgICAgICAgIFByb21pc2U6IEdsb2JhbFByb21pc2UsXG4gICAgICAgICAgICBQcm9taXNlUHJvcDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfZ2xvYmFsLCBcIlByb21pc2VcIiksXG4gICAgICAgICAgICBhbGw6IEdsb2JhbFByb21pc2UuYWxsLFxuICAgICAgICAgICAgcmFjZTogR2xvYmFsUHJvbWlzZS5yYWNlLFxuICAgICAgICAgICAgYWxsU2V0dGxlZDogR2xvYmFsUHJvbWlzZS5hbGxTZXR0bGVkLFxuICAgICAgICAgICAgYW55OiBHbG9iYWxQcm9taXNlLmFueSxcbiAgICAgICAgICAgIHJlc29sdmU6IEdsb2JhbFByb21pc2UucmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdDogR2xvYmFsUHJvbWlzZS5yZWplY3QsXG4gICAgICAgIH0gOiB7fTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlUFNEKHBzZCwgZm4sIGExLCBhMiwgYTMpIHtcbiAgICAgICAgdmFyIG91dGVyU2NvcGUgPSBQU0Q7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzd2l0Y2hUb1pvbmUocHNkLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBmbihhMSwgYTIsIGEzKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHN3aXRjaFRvWm9uZShvdXRlclNjb3BlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbmF0aXZlQXdhaXRDb21wYXRpYmxlV3JhcChmbiwgem9uZSwgcG9zc2libGVBd2FpdCwgY2xlYW51cCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nID8gZm4gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3V0ZXJab25lID0gUFNEO1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQXdhaXQpXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMoKTtcbiAgICAgICAgICAgIHN3aXRjaFRvWm9uZSh6b25lLCB0cnVlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hUb1pvbmUob3V0ZXJab25lLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFudXApXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXhlY0luR2xvYmFsQ29udGV4dChjYikge1xuICAgICAgICBpZiAoUHJvbWlzZSA9PT0gTmF0aXZlUHJvbWlzZSAmJiB0YXNrLmVjaG9lcyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHpvbmVFY2hvZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5xdWV1ZU5hdGl2ZU1pY3JvVGFzayhjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVqZWN0aW9uID0gRGV4aWVQcm9taXNlLnJlamVjdDtcblxuICAgIGZ1bmN0aW9uIHRlbXBUcmFuc2FjdGlvbihkYiwgbW9kZSwgc3RvcmVOYW1lcywgZm4pIHtcbiAgICAgICAgaWYgKCFkYi5pZGJkYiB8fCAoIWRiLl9zdGF0ZS5vcGVuQ29tcGxldGUgJiYgKCFQU0QubGV0VGhyb3VnaCAmJiAhZGIuX3ZpcCkpKSB7XG4gICAgICAgICAgICBpZiAoZGIuX3N0YXRlLm9wZW5Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuRGF0YWJhc2VDbG9zZWQoZGIuX3N0YXRlLmRiT3BlbkVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRiLl9zdGF0ZS5pc0JlaW5nT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYi5fc3RhdGUuYXV0b09wZW4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuRGF0YWJhc2VDbG9zZWQoKSk7XG4gICAgICAgICAgICAgICAgZGIub3BlbigpLmNhdGNoKG5vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGIuX3N0YXRlLmRiUmVhZHlQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdGVtcFRyYW5zYWN0aW9uKGRiLCBtb2RlLCBzdG9yZU5hbWVzLCBmbik7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRyYW5zID0gZGIuX2NyZWF0ZVRyYW5zYWN0aW9uKG1vZGUsIHN0b3JlTmFtZXMsIGRiLl9kYlNjaGVtYSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGRiLl9zdGF0ZS5QUjEzOThfbWF4TG9vcCA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gZXJybmFtZXMuSW52YWxpZFN0YXRlICYmIGRiLmlzT3BlbigpICYmIC0tZGIuX3N0YXRlLlBSMTM5OF9tYXhMb29wID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RleGllOiBOZWVkIHRvIHJlb3BlbiBkYicpO1xuICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSh7IGRpc2FibGVBdXRvT3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYi5vcGVuKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB0ZW1wVHJhbnNhY3Rpb24oZGIsIG1vZGUsIHN0b3JlTmFtZXMsIGZuKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zLl9wcm9taXNlKG1vZGUsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U2NvcGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBQU0QudHJhbnMgPSB0cmFucztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKHJlc29sdmUsIHJlamVjdCwgdHJhbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFkd3JpdGUnKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnMuaWRidHJhbnMuY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZSA9PT0gJ3JlYWRvbmx5JyA/IHJlc3VsdCA6IHRyYW5zLl9jb21wbGV0aW9uLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzdWx0OyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIERFWElFX1ZFUlNJT04gPSAnNC4yLjAnO1xuICAgIHZhciBtYXhTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1NTM1KTtcbiAgICB2YXIgbWluS2V5ID0gLUluZmluaXR5O1xuICAgIHZhciBJTlZBTElEX0tFWV9BUkdVTUVOVCA9IFwiSW52YWxpZCBrZXkgcHJvdmlkZWQuIEtleXMgbXVzdCBiZSBvZiB0eXBlIHN0cmluZywgbnVtYmVyLCBEYXRlIG9yIEFycmF5PHN0cmluZyB8IG51bWJlciB8IERhdGU+LlwiO1xuICAgIHZhciBTVFJJTkdfRVhQRUNURUQgPSBcIlN0cmluZyBleHBlY3RlZC5cIjtcbiAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcbiAgICB2YXIgREJOQU1FU19EQiA9ICdfX2RibmFtZXMnO1xuICAgIHZhciBSRUFET05MWSA9ICdyZWFkb25seSc7XG4gICAgdmFyIFJFQURXUklURSA9ICdyZWFkd3JpdGUnO1xuXG4gICAgZnVuY3Rpb24gY29tYmluZShmaWx0ZXIxLCBmaWx0ZXIyKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXIxID9cbiAgICAgICAgICAgIGZpbHRlcjIgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbHRlcjEuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBmaWx0ZXIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gOlxuICAgICAgICAgICAgICAgIGZpbHRlcjEgOlxuICAgICAgICAgICAgZmlsdGVyMjtcbiAgICB9XG5cbiAgICB2YXIgQW55UmFuZ2UgPSB7XG4gICAgICAgIHR5cGU6IDMgLFxuICAgICAgICBsb3dlcjogLUluZmluaXR5LFxuICAgICAgICBsb3dlck9wZW46IGZhbHNlLFxuICAgICAgICB1cHBlcjogW1tdXSxcbiAgICAgICAgdXBwZXJPcGVuOiBmYWxzZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleShrZXlQYXRoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Yga2V5UGF0aCA9PT0gXCJzdHJpbmdcIiAmJiAhL1xcLi8udGVzdChrZXlQYXRoKVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ialtrZXlQYXRoXSA9PT0gdW5kZWZpbmVkICYmIChrZXlQYXRoIGluIG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZGVlcENsb25lKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5UGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iajsgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBFbnRpdHkoKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbnMuVHlwZShcIkVudGl0eSBpbnN0YW5jZXMgbXVzdCBuZXZlciBiZSBuZXc6ZWQuIEluc3RhbmNlcyBhcmUgZ2VuZXJhdGVkIGJ5IHRoZSBmcmFtZXdvcmsgYnlwYXNzaW5nIHRoZSBjb25zdHJ1Y3Rvci5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY21wKGEsIGIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB0YSA9IHR5cGUoYSk7XG4gICAgICAgICAgICB2YXIgdGIgPSB0eXBlKGIpO1xuICAgICAgICAgICAgaWYgKHRhICE9PSB0Yikge1xuICAgICAgICAgICAgICAgIGlmICh0YSA9PT0gJ0FycmF5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRiID09PSAnQXJyYXknKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRhID09PSAnYmluYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRiID09PSAnYmluYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmICh0YSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIGlmICh0YiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZiAodGEgPT09ICdEYXRlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRiICE9PSAnRGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoICh0YSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JpbmFyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVVaW50OEFycmF5cyhnZXRVaW50OEFycmF5KGEpLCBnZXRVaW50OEFycmF5KGIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZUFycmF5cyhhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKGEsIGIpIHtcbiAgICAgICAgdmFyIGFsID0gYS5sZW5ndGg7XG4gICAgICAgIHZhciBibCA9IGIubGVuZ3RoO1xuICAgICAgICB2YXIgbCA9IGFsIDwgYmwgPyBhbCA6IGJsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlcyA9IGNtcChhW2ldLCBiW2ldKTtcbiAgICAgICAgICAgIGlmIChyZXMgIT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWwgPT09IGJsID8gMCA6IGFsIDwgYmwgPyAtMSA6IDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBhcmVVaW50OEFycmF5cyhhLCBiKSB7XG4gICAgICAgIHZhciBhbCA9IGEubGVuZ3RoO1xuICAgICAgICB2YXIgYmwgPSBiLmxlbmd0aDtcbiAgICAgICAgdmFyIGwgPSBhbCA8IGJsID8gYWwgOiBibDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBhW2ldIDwgYltpXSA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWwgPT09IGJsID8gMCA6IGFsIDwgYmwgPyAtMSA6IDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHR5cGUoeCkge1xuICAgICAgICB2YXIgdCA9IHR5cGVvZiB4O1xuICAgICAgICBpZiAodCAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh4KSlcbiAgICAgICAgICAgIHJldHVybiAnYmluYXJ5JztcbiAgICAgICAgdmFyIHRzVGFnID0gdG9TdHJpbmdUYWcoeCk7XG4gICAgICAgIHJldHVybiB0c1RhZyA9PT0gJ0FycmF5QnVmZmVyJyA/ICdiaW5hcnknIDogdHNUYWc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFVpbnQ4QXJyYXkoYSkge1xuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhhKSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShhLmJ1ZmZlciwgYS5ieXRlT2Zmc2V0LCBhLmJ5dGVMZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbHRJbkRlbGV0aW9uVHJpZ2dlcih0YWJsZSwga2V5cywgcmVzKSB7XG4gICAgICAgIHZhciB5UHJvcHMgPSB0YWJsZS5zY2hlbWEueVByb3BzO1xuICAgICAgICBpZiAoIXlQcm9wcylcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIGlmIChrZXlzICYmIHJlcy5udW1GYWlsdXJlcyA+IDApXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKF8sIGkpIHsgcmV0dXJuICFyZXMuZmFpbHVyZXNbaV07IH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoeVByb3BzLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVzVGFibGUgPSBfYS51cGRhdGVzVGFibGU7XG4gICAgICAgICAgICByZXR1cm4ga2V5c1xuICAgICAgICAgICAgICAgID8gdGFibGUuZGIudGFibGUodXBkYXRlc1RhYmxlKS53aGVyZSgnaycpLmFueU9mKGtleXMpLmRlbGV0ZSgpXG4gICAgICAgICAgICAgICAgOiB0YWJsZS5kYi50YWJsZSh1cGRhdGVzVGFibGUpLmNsZWFyKCk7XG4gICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlczsgfSk7XG4gICAgfVxuXG4gICAgdmFyIFRhYmxlID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFRhYmxlKCkge1xuICAgICAgICB9XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5fdHJhbnMgPSBmdW5jdGlvbiAobW9kZSwgZm4sIHdyaXRlTG9ja2VkKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnMgPSB0aGlzLl90eCB8fCBQU0QudHJhbnM7XG4gICAgICAgICAgICB2YXIgdGFibGVOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgdmFyIHRhc2sgPSBkZWJ1ZyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5jcmVhdGVUYXNrICYmIGNvbnNvbGUuY3JlYXRlVGFzayhcIkRleGllOiBcIi5jb25jYXQobW9kZSA9PT0gJ3JlYWRvbmx5JyA/ICdyZWFkJyA6ICd3cml0ZScsIFwiIFwiKS5jb25jYXQodGhpcy5uYW1lKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1RhYmxlSW5UcmFuc2FjdGlvbihyZXNvbHZlLCByZWplY3QsIHRyYW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0cmFucy5zY2hlbWFbdGFibGVOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuTm90Rm91bmQoXCJUYWJsZSBcIiArIHRhYmxlTmFtZSArIFwiIG5vdCBwYXJ0IG9mIHRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbih0cmFucy5pZGJ0cmFucywgdHJhbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdhc1Jvb3RFeGVjID0gYmVnaW5NaWNyb1RpY2tTY29wZSgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRyYW5zICYmIHRyYW5zLmRiLl9ub3ZpcCA9PT0gdGhpcy5kYi5fbm92aXAgP1xuICAgICAgICAgICAgICAgICAgICB0cmFucyA9PT0gUFNELnRyYW5zID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zLl9wcm9taXNlKG1vZGUsIGNoZWNrVGFibGVJblRyYW5zYWN0aW9uLCB3cml0ZUxvY2tlZCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2NvcGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJhbnMuX3Byb21pc2UobW9kZSwgY2hlY2tUYWJsZUluVHJhbnNhY3Rpb24sIHdyaXRlTG9ja2VkKTsgfSwgeyB0cmFuczogdHJhbnMsIHRyYW5zbGVzczogUFNELnRyYW5zbGVzcyB8fCBQU0QgfSkgOlxuICAgICAgICAgICAgICAgICAgICB0ZW1wVHJhbnNhY3Rpb24odGhpcy5kYiwgbW9kZSwgW3RoaXMubmFtZV0sIGNoZWNrVGFibGVJblRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwLl9jb25zb2xlVGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHdhc1Jvb3RFeGVjKVxuICAgICAgICAgICAgICAgICAgICBlbmRNaWNyb1RpY2tTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleU9yQ3JpdCwgY2IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoa2V5T3JDcml0ICYmIGtleU9yQ3JpdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZXJlKGtleU9yQ3JpdCkuZmlyc3QoY2IpO1xuICAgICAgICAgICAgaWYgKGtleU9yQ3JpdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuVHlwZShcIkludmFsaWQgYXJndW1lbnQgdG8gVGFibGUuZ2V0KClcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkb25seScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLmdldCh7IHRyYW5zOiB0cmFucywga2V5OiBrZXlPckNyaXQgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gX3RoaXMuaG9vay5yZWFkaW5nLmZpcmUocmVzKTsgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGNiKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLndoZXJlID0gZnVuY3Rpb24gKGluZGV4T3JDcml0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4T3JDcml0ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcywgaW5kZXhPckNyaXQpO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoaW5kZXhPckNyaXQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5kYi5XaGVyZUNsYXVzZSh0aGlzLCBcIltcIi5jb25jYXQoaW5kZXhPckNyaXQuam9pbignKycpLCBcIl1cIikpO1xuICAgICAgICAgICAgdmFyIGtleVBhdGhzID0ga2V5cyhpbmRleE9yQ3JpdCk7XG4gICAgICAgICAgICBpZiAoa2V5UGF0aHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIC53aGVyZShrZXlQYXRoc1swXSlcbiAgICAgICAgICAgICAgICAgICAgLmVxdWFscyhpbmRleE9yQ3JpdFtrZXlQYXRoc1swXV0pO1xuICAgICAgICAgICAgdmFyIGNvbXBvdW5kSW5kZXggPSB0aGlzLnNjaGVtYS5pbmRleGVzLmNvbmNhdCh0aGlzLnNjaGVtYS5wcmltS2V5KS5maWx0ZXIoZnVuY3Rpb24gKGl4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGl4LmNvbXBvdW5kICYmXG4gICAgICAgICAgICAgICAgICAgIGtleVBhdGhzLmV2ZXJ5KGZ1bmN0aW9uIChrZXlQYXRoKSB7IHJldHVybiBpeC5rZXlQYXRoLmluZGV4T2Yoa2V5UGF0aCkgPj0gMDsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlQYXRocy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleVBhdGhzLmluZGV4T2YoaXgua2V5UGF0aFtpXSkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5rZXlQYXRoLmxlbmd0aCAtIGIua2V5UGF0aC5sZW5ndGg7IH0pWzBdO1xuICAgICAgICAgICAgaWYgKGNvbXBvdW5kSW5kZXggJiYgdGhpcy5kYi5fbWF4S2V5ICE9PSBtYXhTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5UGF0aHNJblZhbGlkT3JkZXIgPSBjb21wb3VuZEluZGV4LmtleVBhdGguc2xpY2UoMCwga2V5UGF0aHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgICAgICAgICAud2hlcmUoa2V5UGF0aHNJblZhbGlkT3JkZXIpXG4gICAgICAgICAgICAgICAgICAgIC5lcXVhbHMoa2V5UGF0aHNJblZhbGlkT3JkZXIubWFwKGZ1bmN0aW9uIChrcCkgeyByZXR1cm4gaW5kZXhPckNyaXRba3BdOyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbXBvdW5kSW5kZXggJiYgZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIHF1ZXJ5IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShpbmRleE9yQ3JpdCksIFwiIG9uIFwiKS5jb25jYXQodGhpcy5uYW1lLCBcIiB3b3VsZCBiZW5lZml0IGZyb20gYSBcIikgK1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvdW5kIGluZGV4IFtcIi5jb25jYXQoa2V5UGF0aHMuam9pbignKycpLCBcIl1cIikpO1xuICAgICAgICAgICAgdmFyIGlkeEJ5TmFtZSA9IHRoaXMuc2NoZW1hLmlkeEJ5TmFtZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtcChhLCBiKSA9PT0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IGtleVBhdGhzLnJlZHVjZShmdW5jdGlvbiAoX2EsIGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gX2FbMF0sIHByZXZGaWx0ZXJGbiA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGlkeEJ5TmFtZVtrZXlQYXRoXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbmRleE9yQ3JpdFtrZXlQYXRoXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwcmV2SW5kZXggfHwgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHByZXZJbmRleCB8fCAhaW5kZXggP1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZShwcmV2RmlsdGVyRm4sIGluZGV4ICYmIGluZGV4Lm11bHRpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGdldEJ5S2V5UGF0aCh4LCBrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcCkgJiYgcHJvcC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBlcXVhbHModmFsdWUsIGl0ZW0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGVxdWFscyh2YWx1ZSwgZ2V0QnlLZXlQYXRoKHgsIGtleVBhdGgpKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJldkZpbHRlckZuXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0sIFtudWxsLCBudWxsXSksIGlkeCA9IF9hWzBdLCBmaWx0ZXJGdW5jdGlvbiA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGlkeCA/XG4gICAgICAgICAgICAgICAgdGhpcy53aGVyZShpZHgubmFtZSkuZXF1YWxzKGluZGV4T3JDcml0W2lkeC5rZXlQYXRoXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXJGdW5jdGlvbikgOlxuICAgICAgICAgICAgICAgIGNvbXBvdW5kSW5kZXggP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcihmaWx0ZXJGdW5jdGlvbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLndoZXJlKGtleVBhdGhzKS5lcXVhbHMoJycpO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbGxlY3Rpb24oKS5hbmQoZmlsdGVyRnVuY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAodGhlblNob3J0Y3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbGxlY3Rpb24oKS5jb3VudCh0aGVuU2hvcnRjdXQpO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkub2Zmc2V0KG9mZnNldCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5saW1pdCA9IGZ1bmN0aW9uIChudW1Sb3dzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0NvbGxlY3Rpb24oKS5saW1pdChudW1Sb3dzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmVhY2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICh0aGVuU2hvcnRjdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLnRvQXJyYXkodGhlblNob3J0Y3V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLnRvQ29sbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5kYi5Db2xsZWN0aW9uKG5ldyB0aGlzLmRiLldoZXJlQ2xhdXNlKHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLm9yZGVyQnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5kYi5Db2xsZWN0aW9uKG5ldyB0aGlzLmRiLldoZXJlQ2xhdXNlKHRoaXMsIGlzQXJyYXkoaW5kZXgpID9cbiAgICAgICAgICAgICAgICBcIltcIi5jb25jYXQoaW5kZXguam9pbignKycpLCBcIl1cIikgOlxuICAgICAgICAgICAgICAgIGluZGV4KSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkucmV2ZXJzZSgpO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUubWFwVG9DbGFzcyA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgZGIgPSBfYS5kYiwgdGFibGVOYW1lID0gX2EubmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLm1hcHBlZENsYXNzID0gY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3IucHJvdG90eXBlIGluc3RhbmNlb2YgRW50aXR5KSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IgPSAgKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX19leHRlbmRzKGNsYXNzXzEsIF9zdXBlcik7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImRiXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGI7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWJsZU5hbWU7IH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc18xO1xuICAgICAgICAgICAgICAgIH0oY29uc3RydWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRQcm9wcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3RvID0gY29uc3RydWN0b3IucHJvdG90eXBlOyBwcm90bzsgcHJvdG8gPSBnZXRQcm90byhwcm90bykpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHsgcmV0dXJuIGluaGVyaXRlZFByb3BzLmFkZChwcm9wTmFtZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlYWRIb29rID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIGlmICghb2JqKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5oZXJpdGVkUHJvcHMuaGFzKG0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNbbV0gPSBvYmpbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5zY2hlbWEucmVhZEhvb2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2sucmVhZGluZy51bnN1YnNjcmliZSh0aGlzLnNjaGVtYS5yZWFkSG9vayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkSG9vayA9IHJlYWRIb29rO1xuICAgICAgICAgICAgdGhpcy5ob29rKFwicmVhZGluZ1wiLCByZWFkSG9vayk7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5kZWZpbmVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENsYXNzKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBleHRlbmQodGhpcywgY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBUb0NsYXNzKENsYXNzKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuc2NoZW1hLnByaW1LZXksIGF1dG8gPSBfYS5hdXRvLCBrZXlQYXRoID0gX2Eua2V5UGF0aDtcbiAgICAgICAgICAgIHZhciBvYmpUb0FkZCA9IG9iajtcbiAgICAgICAgICAgIGlmIChrZXlQYXRoICYmIGF1dG8pIHtcbiAgICAgICAgICAgICAgICBvYmpUb0FkZCA9IHdvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5KGtleVBhdGgpKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2FkZCcsIGtleXM6IGtleSAhPSBudWxsID8gW2tleV0gOiBudWxsLCB2YWx1ZXM6IFtvYmpUb0FkZF0gfSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1GYWlsdXJlcyA/IERleGllUHJvbWlzZS5yZWplY3QocmVzLmZhaWx1cmVzWzBdKSA6IHJlcy5sYXN0UmVzdWx0OyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChsYXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ5S2V5UGF0aChvYmosIGtleVBhdGgsIGxhc3RSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChrZXlPck9iamVjdCwgbW9kaWZpY2F0aW9ucykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlPck9iamVjdCA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoa2V5T3JPYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldEJ5S2V5UGF0aChrZXlPck9iamVjdCwgdGhpcy5zY2hlbWEucHJpbUtleS5rZXlQYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiR2l2ZW4gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gaXRzIHByaW1hcnkga2V5XCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVyZShcIjppZFwiKS5lcXVhbHMoa2V5KS5tb2RpZnkobW9kaWZpY2F0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVyZShcIjppZFwiKS5lcXVhbHMoa2V5T3JPYmplY3QpLm1vZGlmeShtb2RpZmljYXRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuc2NoZW1hLnByaW1LZXksIGF1dG8gPSBfYS5hdXRvLCBrZXlQYXRoID0gX2Eua2V5UGF0aDtcbiAgICAgICAgICAgIHZhciBvYmpUb0FkZCA9IG9iajtcbiAgICAgICAgICAgIGlmIChrZXlQYXRoICYmIGF1dG8pIHtcbiAgICAgICAgICAgICAgICBvYmpUb0FkZCA9IHdvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5KGtleVBhdGgpKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykgeyByZXR1cm4gX3RoaXMuY29yZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdwdXQnLCB2YWx1ZXM6IFtvYmpUb0FkZF0sIGtleXM6IGtleSAhPSBudWxsID8gW2tleV0gOiBudWxsIH0pOyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1GYWlsdXJlcyA/IERleGllUHJvbWlzZS5yZWplY3QocmVzLmZhaWx1cmVzWzBdKSA6IHJlcy5sYXN0UmVzdWx0OyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChsYXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ5S2V5UGF0aChvYmosIGtleVBhdGgsIGxhc3RSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykgeyByZXR1cm4gX3RoaXMuY29yZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdkZWxldGUnLCBrZXlzOiBba2V5XSB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIGJ1aWx0SW5EZWxldGlvblRyaWdnZXIoX3RoaXMsIFtrZXldLCByZXMpOyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1GYWlsdXJlcyA/IERleGllUHJvbWlzZS5yZWplY3QocmVzLmZhaWx1cmVzWzBdKSA6IHVuZGVmaW5lZDsgfSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkd3JpdGUnLCBmdW5jdGlvbiAodHJhbnMpIHsgcmV0dXJuIF90aGlzLmNvcmUubXV0YXRlKHsgdHJhbnM6IHRyYW5zLCB0eXBlOiAnZGVsZXRlUmFuZ2UnLCByYW5nZTogQW55UmFuZ2UgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiBidWlsdEluRGVsZXRpb25UcmlnZ2VyKF90aGlzLCBudWxsLCByZXMpOyB9KTsgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMubnVtRmFpbHVyZXMgPyBEZXhpZVByb21pc2UucmVqZWN0KHJlcy5mYWlsdXJlc1swXSkgOiB1bmRlZmluZWQ7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBUYWJsZS5wcm90b3R5cGUuYnVsa0dldCA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkb25seScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLmdldE1hbnkoe1xuICAgICAgICAgICAgICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICAgICAgICAgICAgICB0cmFuczogdHJhbnNcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gX3RoaXMuaG9vay5yZWFkaW5nLmZpcmUocmVzKTsgfSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5idWxrQWRkID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleXNPck9wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIga2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5c09yT3B0aW9ucykgPyBrZXlzT3JPcHRpb25zIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgKGtleXMgPyB1bmRlZmluZWQgOiBrZXlzT3JPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciB3YW50UmVzdWx0cyA9IG9wdGlvbnMgPyBvcHRpb25zLmFsbEtleXMgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnNjaGVtYS5wcmltS2V5LCBhdXRvID0gX2EuYXV0bywga2V5UGF0aCA9IF9hLmtleVBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKGtleVBhdGggJiYga2V5cylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiYnVsa0FkZCgpOiBrZXlzIGFyZ3VtZW50IGludmFsaWQgb24gdGFibGVzIHdpdGggaW5ib3VuZCBrZXlzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzICYmIGtleXMubGVuZ3RoICE9PSBvYmplY3RzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG9iamVjdHMgYW5kIGtleXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbnVtT2JqZWN0cyA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3RzVG9BZGQgPSBrZXlQYXRoICYmIGF1dG8gP1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzLm1hcCh3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleShrZXlQYXRoKSkgOlxuICAgICAgICAgICAgICAgICAgICBvYmplY3RzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2FkZCcsIGtleXM6IGtleXMsIHZhbHVlczogb2JqZWN0c1RvQWRkLCB3YW50UmVzdWx0czogd2FudFJlc3VsdHMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1GYWlsdXJlcyA9IF9hLm51bUZhaWx1cmVzLCByZXN1bHRzID0gX2EucmVzdWx0cywgbGFzdFJlc3VsdCA9IF9hLmxhc3RSZXN1bHQsIGZhaWx1cmVzID0gX2EuZmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB3YW50UmVzdWx0cyA/IHJlc3VsdHMgOiBsYXN0UmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQnVsa0Vycm9yKFwiXCIuY29uY2F0KF90aGlzLm5hbWUsIFwiLmJ1bGtBZGQoKTogXCIpLmNvbmNhdChudW1GYWlsdXJlcywgXCIgb2YgXCIpLmNvbmNhdChudW1PYmplY3RzLCBcIiBvcGVyYXRpb25zIGZhaWxlZFwiKSwgZmFpbHVyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5idWxrUHV0ID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleXNPck9wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIga2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5c09yT3B0aW9ucykgPyBrZXlzT3JPcHRpb25zIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgKGtleXMgPyB1bmRlZmluZWQgOiBrZXlzT3JPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciB3YW50UmVzdWx0cyA9IG9wdGlvbnMgPyBvcHRpb25zLmFsbEtleXMgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnNjaGVtYS5wcmltS2V5LCBhdXRvID0gX2EuYXV0bywga2V5UGF0aCA9IF9hLmtleVBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKGtleVBhdGggJiYga2V5cylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiYnVsa1B1dCgpOiBrZXlzIGFyZ3VtZW50IGludmFsaWQgb24gdGFibGVzIHdpdGggaW5ib3VuZCBrZXlzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzICYmIGtleXMubGVuZ3RoICE9PSBvYmplY3RzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG9iamVjdHMgYW5kIGtleXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbnVtT2JqZWN0cyA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3RzVG9QdXQgPSBrZXlQYXRoICYmIGF1dG8gP1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzLm1hcCh3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleShrZXlQYXRoKSkgOlxuICAgICAgICAgICAgICAgICAgICBvYmplY3RzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ3B1dCcsIGtleXM6IGtleXMsIHZhbHVlczogb2JqZWN0c1RvUHV0LCB3YW50UmVzdWx0czogd2FudFJlc3VsdHMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1GYWlsdXJlcyA9IF9hLm51bUZhaWx1cmVzLCByZXN1bHRzID0gX2EucmVzdWx0cywgbGFzdFJlc3VsdCA9IF9hLmxhc3RSZXN1bHQsIGZhaWx1cmVzID0gX2EuZmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB3YW50UmVzdWx0cyA/IHJlc3VsdHMgOiBsYXN0UmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQnVsa0Vycm9yKFwiXCIuY29uY2F0KF90aGlzLm5hbWUsIFwiLmJ1bGtQdXQoKTogXCIpLmNvbmNhdChudW1GYWlsdXJlcywgXCIgb2YgXCIpLmNvbmNhdChudW1PYmplY3RzLCBcIiBvcGVyYXRpb25zIGZhaWxlZFwiKSwgZmFpbHVyZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFRhYmxlLnByb3RvdHlwZS5idWxrVXBkYXRlID0gZnVuY3Rpb24gKGtleXNBbmRDaGFuZ2VzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGNvcmVUYWJsZSA9IHRoaXMuY29yZTtcbiAgICAgICAgICAgIHZhciBrZXlzID0ga2V5c0FuZENoYW5nZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkgeyByZXR1cm4gZW50cnkua2V5OyB9KTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VTcGVjcyA9IGtleXNBbmRDaGFuZ2VzLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LmNoYW5nZXM7IH0pO1xuICAgICAgICAgICAgdmFyIG9mZnNldE1hcCA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkd3JpdGUnLCBmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yZVRhYmxlLmdldE1hbnkoeyB0cmFuczogdHJhbnMsIGtleXM6IGtleXMsIGNhY2hlOiAnY2xvbmUnIH0pLnRoZW4oZnVuY3Rpb24gKG9ianMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdE9ianMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAga2V5c0FuZENoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoX2EsIGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hLmtleSwgY2hhbmdlcyA9IF9hLmNoYW5nZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gb2Jqc1tpZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBfYltfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNoYW5nZXNba2V5UGF0aF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlQYXRoID09PSBfdGhpcy5zY2hlbWEucHJpbUtleS5rZXlQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY21wKHZhbHVlLCBrZXkpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuQ29uc3RyYWludChcIkNhbm5vdCB1cGRhdGUgcHJpbWFyeSBrZXkgaW4gYnVsa1VwZGF0ZSgpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldE1hcC5wdXNoKGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0T2Jqcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtRW50cmllcyA9IHJlc3VsdEtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29yZVRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAubXV0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zOiB0cmFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5czogcmVzdWx0S2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogcmVzdWx0T2JqcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVNwZWNzOiBjaGFuZ2VTcGVjc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtRmFpbHVyZXMgPSBfYS5udW1GYWlsdXJlcywgZmFpbHVyZXMgPSBfYS5mYWlsdXJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1GYWlsdXJlcyA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtRW50cmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBPYmplY3Qua2V5cyhmYWlsdXJlcyk7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IF9iW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFwcGVkT2Zmc2V0ID0gb2Zmc2V0TWFwW051bWJlcihvZmZzZXQpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGVkT2Zmc2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhaWx1cmUgPSBmYWlsdXJlc1tvZmZzZXRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZmFpbHVyZXNbb2Zmc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXNbbWFwcGVkT2Zmc2V0XSA9IGZhaWx1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJ1bGtFcnJvcihcIlwiLmNvbmNhdChfdGhpcy5uYW1lLCBcIi5idWxrVXBkYXRlKCk6IFwiKS5jb25jYXQobnVtRmFpbHVyZXMsIFwiIG9mIFwiKS5jb25jYXQobnVtRW50cmllcywgXCIgb3BlcmF0aW9ucyBmYWlsZWRcIiksIGZhaWx1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFibGUucHJvdG90eXBlLmJ1bGtEZWxldGUgPSBmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2RlbGV0ZScsIGtleXM6IGtleXMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gYnVpbHRJbkRlbGV0aW9uVHJpZ2dlcihfdGhpcywga2V5cywgcmVzKTsgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBudW1GYWlsdXJlcyA9IF9hLm51bUZhaWx1cmVzLCBsYXN0UmVzdWx0ID0gX2EubGFzdFJlc3VsdCwgZmFpbHVyZXMgPSBfYS5mYWlsdXJlcztcbiAgICAgICAgICAgICAgICBpZiAobnVtRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBCdWxrRXJyb3IoXCJcIi5jb25jYXQoX3RoaXMubmFtZSwgXCIuYnVsa0RlbGV0ZSgpOiBcIikuY29uY2F0KG51bUZhaWx1cmVzLCBcIiBvZiBcIikuY29uY2F0KG51bUtleXMsIFwiIG9wZXJhdGlvbnMgZmFpbGVkXCIpLCBmYWlsdXJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRhYmxlO1xuICAgIH0oKSk7XG5cbiAgICBmdW5jdGlvbiBFdmVudHMoY3R4KSB7XG4gICAgICAgIHZhciBldnMgPSB7fTtcbiAgICAgICAgdmFyIHJ2ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoaSAtIDEpO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkpXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGV2c1tldmVudE5hbWVdLnN1YnNjcmliZS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIChldmVudE5hbWUpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldnNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcnYuYWRkRXZlbnRUeXBlID0gYWRkO1xuICAgICAgICBmb3IgKHZhciBpID0gMSwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIGFkZChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydjtcbiAgICAgICAgZnVuY3Rpb24gYWRkKGV2ZW50TmFtZSwgY2hhaW5GdW5jdGlvbiwgZGVmYXVsdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZENvbmZpZ3VyZWRFdmVudHMoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghY2hhaW5GdW5jdGlvbilcbiAgICAgICAgICAgICAgICBjaGFpbkZ1bmN0aW9uID0gcmV2ZXJzZVN0b3BwYWJsZUV2ZW50Q2hhaW47XG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRGdW5jdGlvbilcbiAgICAgICAgICAgICAgICBkZWZhdWx0RnVuY3Rpb24gPSBub3A7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyczogW10sXG4gICAgICAgICAgICAgICAgZmlyZTogZGVmYXVsdEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnN1YnNjcmliZXJzLmluZGV4T2YoY2IpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdWJzY3JpYmVycy5wdXNoKGNiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlyZSA9IGNoYWluRnVuY3Rpb24oY29udGV4dC5maXJlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdWJzY3JpYmVycyA9IGNvbnRleHQuc3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4gIT09IGNiOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maXJlID0gY29udGV4dC5zdWJzY3JpYmVycy5yZWR1Y2UoY2hhaW5GdW5jdGlvbiwgZGVmYXVsdEZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXZzW2V2ZW50TmFtZV0gPSBydltldmVudE5hbWVdID0gY29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbmZpZ3VyZWRFdmVudHMoY2ZnKSB7XG4gICAgICAgICAgICBrZXlzKGNmZykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBjZmdbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShhcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGQoZXZlbnROYW1lLCBjZmdbZXZlbnROYW1lXVswXSwgY2ZnW2V2ZW50TmFtZV1bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSAnYXNhcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBhZGQoZXZlbnROYW1lLCBtaXJyb3IsIGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNhcCQxKGZ1bmN0aW9uIGZpcmVFdmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiSW52YWxpZCBldmVudCBjb25maWdcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VDbGFzc0NvbnN0cnVjdG9yKHByb3RvdHlwZSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgZGVyaXZlKGNvbnN0cnVjdG9yKS5mcm9tKHsgcHJvdG90eXBlOiBwcm90b3R5cGUgfSk7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJsZUNvbnN0cnVjdG9yKGRiKSB7XG4gICAgICAgIHJldHVybiBtYWtlQ2xhc3NDb25zdHJ1Y3RvcihUYWJsZS5wcm90b3R5cGUsIGZ1bmN0aW9uIFRhYmxlKG5hbWUsIHRhYmxlU2NoZW1hLCB0cmFucykge1xuICAgICAgICAgICAgdGhpcy5kYiA9IGRiO1xuICAgICAgICAgICAgdGhpcy5fdHggPSB0cmFucztcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYSA9IHRhYmxlU2NoZW1hO1xuICAgICAgICAgICAgdGhpcy5ob29rID0gZGIuX2FsbFRhYmxlc1tuYW1lXSA/IGRiLl9hbGxUYWJsZXNbbmFtZV0uaG9vayA6IEV2ZW50cyhudWxsLCB7XG4gICAgICAgICAgICAgICAgXCJjcmVhdGluZ1wiOiBbaG9va0NyZWF0aW5nQ2hhaW4sIG5vcF0sXG4gICAgICAgICAgICAgICAgXCJyZWFkaW5nXCI6IFtwdXJlRnVuY3Rpb25DaGFpbiwgbWlycm9yXSxcbiAgICAgICAgICAgICAgICBcInVwZGF0aW5nXCI6IFtob29rVXBkYXRpbmdDaGFpbiwgbm9wXSxcbiAgICAgICAgICAgICAgICBcImRlbGV0aW5nXCI6IFtob29rRGVsZXRpbmdDaGFpbiwgbm9wXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUGxhaW5LZXlSYW5nZShjdHgsIGlnbm9yZUxpbWl0RmlsdGVyKSB7XG4gICAgICAgIHJldHVybiAhKGN0eC5maWx0ZXIgfHwgY3R4LmFsZ29yaXRobSB8fCBjdHgub3IpICYmXG4gICAgICAgICAgICAoaWdub3JlTGltaXRGaWx0ZXIgPyBjdHguanVzdExpbWl0IDogIWN0eC5yZXBsYXlGaWx0ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRGaWx0ZXIoY3R4LCBmbikge1xuICAgICAgICBjdHguZmlsdGVyID0gY29tYmluZShjdHguZmlsdGVyLCBmbik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFJlcGxheUZpbHRlcihjdHgsIGZhY3RvcnksIGlzTGltaXRGaWx0ZXIpIHtcbiAgICAgICAgdmFyIGN1cnIgPSBjdHgucmVwbGF5RmlsdGVyO1xuICAgICAgICBjdHgucmVwbGF5RmlsdGVyID0gY3VyciA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbWJpbmUoY3VycigpLCBmYWN0b3J5KCkpOyB9IDogZmFjdG9yeTtcbiAgICAgICAgY3R4Lmp1c3RMaW1pdCA9IGlzTGltaXRGaWx0ZXIgJiYgIWN1cnI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1hdGNoRmlsdGVyKGN0eCwgZm4pIHtcbiAgICAgICAgY3R4LmlzTWF0Y2ggPSBjb21iaW5lKGN0eC5pc01hdGNoLCBmbik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEluZGV4T3JTdG9yZShjdHgsIGNvcmVTY2hlbWEpIHtcbiAgICAgICAgaWYgKGN0eC5pc1ByaW1LZXkpXG4gICAgICAgICAgICByZXR1cm4gY29yZVNjaGVtYS5wcmltYXJ5S2V5O1xuICAgICAgICB2YXIgaW5kZXggPSBjb3JlU2NoZW1hLmdldEluZGV4QnlLZXlQYXRoKGN0eC5pbmRleCk7XG4gICAgICAgIGlmICghaW5kZXgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TY2hlbWEoXCJLZXlQYXRoIFwiICsgY3R4LmluZGV4ICsgXCIgb24gb2JqZWN0IHN0b3JlIFwiICsgY29yZVNjaGVtYS5uYW1lICsgXCIgaXMgbm90IGluZGV4ZWRcIik7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgZnVuY3Rpb24gb3BlbkN1cnNvcihjdHgsIGNvcmVUYWJsZSwgdHJhbnMpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhPclN0b3JlKGN0eCwgY29yZVRhYmxlLnNjaGVtYSk7XG4gICAgICAgIHJldHVybiBjb3JlVGFibGUub3BlbkN1cnNvcih7XG4gICAgICAgICAgICB0cmFuczogdHJhbnMsXG4gICAgICAgICAgICB2YWx1ZXM6ICFjdHgua2V5c09ubHksXG4gICAgICAgICAgICByZXZlcnNlOiBjdHguZGlyID09PSAncHJldicsXG4gICAgICAgICAgICB1bmlxdWU6ICEhY3R4LnVuaXF1ZSxcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJhbmdlOiBjdHgucmFuZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGl0ZXIoY3R4LCBmbiwgY29yZVRyYW5zLCBjb3JlVGFibGUpIHtcbiAgICAgICAgdmFyIGZpbHRlciA9IGN0eC5yZXBsYXlGaWx0ZXIgPyBjb21iaW5lKGN0eC5maWx0ZXIsIGN0eC5yZXBsYXlGaWx0ZXIoKSkgOiBjdHguZmlsdGVyO1xuICAgICAgICBpZiAoIWN0eC5vcikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdGUob3BlbkN1cnNvcihjdHgsIGNvcmVUYWJsZSwgY29yZVRyYW5zKSwgY29tYmluZShjdHguYWxnb3JpdGhtLCBmaWx0ZXIpLCBmbiwgIWN0eC5rZXlzT25seSAmJiBjdHgudmFsdWVNYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNldF8xID0ge307XG4gICAgICAgICAgICB2YXIgdW5pb24gPSBmdW5jdGlvbiAoaXRlbSwgY3Vyc29yLCBhZHZhbmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKGN1cnNvciwgYWR2YW5jZSwgZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gY3Vyc29yLnN0b3AocmVzdWx0KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gY3Vyc29yLmZhaWwoZXJyKTsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaW1hcnlLZXkgPSBjdXJzb3IucHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9ICcnICsgcHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9ICcnICsgbmV3IFVpbnQ4QXJyYXkocHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzT3duKHNldF8xLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRfMVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKGl0ZW0sIGN1cnNvciwgYWR2YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBjdHgub3IuX2l0ZXJhdGUodW5pb24sIGNvcmVUcmFucyksXG4gICAgICAgICAgICAgICAgaXRlcmF0ZShvcGVuQ3Vyc29yKGN0eCwgY29yZVRhYmxlLCBjb3JlVHJhbnMpLCBjdHguYWxnb3JpdGhtLCB1bmlvbiwgIWN0eC5rZXlzT25seSAmJiBjdHgudmFsdWVNYXBwZXIpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpdGVyYXRlKGN1cnNvclByb21pc2UsIGZpbHRlciwgZm4sIHZhbHVlTWFwcGVyKSB7XG4gICAgICAgIHZhciBtYXBwZWRGbiA9IHZhbHVlTWFwcGVyID8gZnVuY3Rpb24gKHgsIGMsIGEpIHsgcmV0dXJuIGZuKHZhbHVlTWFwcGVyKHgpLCBjLCBhKTsgfSA6IGZuO1xuICAgICAgICB2YXIgd3JhcHBlZEZuID0gd3JhcChtYXBwZWRGbik7XG4gICAgICAgIHJldHVybiBjdXJzb3JQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGN1cnNvcikge1xuICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3Iuc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN1cnNvci5jb250aW51ZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIoY3Vyc29yLCBmdW5jdGlvbiAoYWR2YW5jZXIpIHsgcmV0dXJuIGMgPSBhZHZhbmNlcjsgfSwgZnVuY3Rpb24gKHZhbCkgeyBjdXJzb3Iuc3RvcCh2YWwpOyBjID0gbm9wOyB9LCBmdW5jdGlvbiAoZSkgeyBjdXJzb3IuZmFpbChlKTsgYyA9IG5vcDsgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVkRm4oY3Vyc29yLnZhbHVlLCBjdXJzb3IsIGZ1bmN0aW9uIChhZHZhbmNlcikgeyByZXR1cm4gYyA9IGFkdmFuY2VyOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgYygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgUHJvcE1vZGlmaWNhdGlvbiA9ICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBQcm9wTW9kaWZpY2F0aW9uKHNwZWMpIHtcbiAgICAgICAgICAgIHRoaXNbXCJAQHByb3Btb2RcIl0gPSBzcGVjO1xuICAgICAgICB9XG4gICAgICAgIFByb3BNb2RpZmljYXRpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBzcGVjID0gdGhpc1tcIkBAcHJvcG1vZFwiXTtcbiAgICAgICAgICAgIGlmIChzcGVjLmFkZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBzcGVjLmFkZDtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSh0ZXJtKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCAoaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdKSwgdHJ1ZSksIHRlcm0sIHRydWUpLnNvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChOdW1iZXIodmFsdWUpIHx8IDApICsgdGVybTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmlnSW50KHZhbHVlKSArIHRlcm07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmlnSW50KDApICsgdGVybTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB0ZXJtIFwiLmNvbmNhdCh0ZXJtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3BlYy5yZW1vdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWJ0cmFoZW5kXzEgPSBzcGVjLnJlbW92ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShzdWJ0cmFoZW5kXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gIXN1YnRyYWhlbmRfMS5pbmNsdWRlcyhpdGVtKTsgfSkuc29ydCgpIDogW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3VidHJhaGVuZF8xID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSkgLSBzdWJ0cmFoZW5kXzE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJ0cmFoZW5kXzEgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmlnSW50KHZhbHVlKSAtIHN1YnRyYWhlbmRfMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCaWdJbnQoMCkgLSBzdWJ0cmFoZW5kXzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgc3VidHJhaGVuZCBcIi5jb25jYXQoc3VidHJhaGVuZF8xKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJlZml4VG9SZXBsYWNlID0gKF9hID0gc3BlYy5yZXBsYWNlUHJlZml4KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF07XG4gICAgICAgICAgICBpZiAocHJlZml4VG9SZXBsYWNlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aChwcmVmaXhUb1JlcGxhY2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwZWMucmVwbGFjZVByZWZpeFsxXSArIHZhbHVlLnN1YnN0cmluZyhwcmVmaXhUb1JlcGxhY2UubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFByb3BNb2RpZmljYXRpb247XG4gICAgfSgpKTtcblxuICAgIHZhciBDb2xsZWN0aW9uID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XG4gICAgICAgIH1cbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAoZm4sIGNiKSB7XG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICAgICAgcmV0dXJuIGN0eC5lcnJvciA/XG4gICAgICAgICAgICAgICAgY3R4LnRhYmxlLl90cmFucyhudWxsLCByZWplY3Rpb24uYmluZChudWxsLCBjdHguZXJyb3IpKSA6XG4gICAgICAgICAgICAgICAgY3R4LnRhYmxlLl90cmFucygncmVhZG9ubHknLCBmbikudGhlbihjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgICAgIHJldHVybiBjdHguZXJyb3IgP1xuICAgICAgICAgICAgICAgIGN0eC50YWJsZS5fdHJhbnMobnVsbCwgcmVqZWN0aW9uLmJpbmQobnVsbCwgY3R4LmVycm9yKSkgOlxuICAgICAgICAgICAgICAgIGN0eC50YWJsZS5fdHJhbnMoJ3JlYWR3cml0ZScsIGZuLCBcImxvY2tlZFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuX2FkZEFsZ29yaXRobSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgICAgIGN0eC5hbGdvcml0aG0gPSBjb21iaW5lKGN0eC5hbGdvcml0aG0sIGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuX2l0ZXJhdGUgPSBmdW5jdGlvbiAoZm4sIGNvcmVUcmFucykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXIodGhpcy5fY3R4LCBmbiwgY29yZVRyYW5zLCB0aGlzLl9jdHgudGFibGUuY29yZSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgcnYgPSBPYmplY3QuY3JlYXRlKHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKSwgY3R4ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLl9jdHgpO1xuICAgICAgICAgICAgaWYgKHByb3BzKVxuICAgICAgICAgICAgICAgIGV4dGVuZChjdHgsIHByb3BzKTtcbiAgICAgICAgICAgIHJ2Ll9jdHggPSBjdHg7XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0eC52YWx1ZU1hcHBlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkKGZ1bmN0aW9uICh0cmFucykgeyByZXR1cm4gaXRlcihjdHgsIGZuLCB0cmFucywgY3R4LnRhYmxlLmNvcmUpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZChmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuX2N0eDtcbiAgICAgICAgICAgICAgICB2YXIgY29yZVRhYmxlID0gY3R4LnRhYmxlLmNvcmU7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGxhaW5LZXlSYW5nZShjdHgsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3JlVGFibGUuY291bnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZ2V0SW5kZXhPclN0b3JlKGN0eCwgY29yZVRhYmxlLnNjaGVtYSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IGN0eC5yYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb3VudCkgeyByZXR1cm4gTWF0aC5taW4oY291bnQsIGN0eC5saW1pdCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXIoY3R4LCBmdW5jdGlvbiAoKSB7ICsrY291bnQ7IHJldHVybiBmYWxzZTsgfSwgdHJhbnMsIGNvcmVUYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvdW50OyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGNiKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuc29ydEJ5ID0gZnVuY3Rpb24gKGtleVBhdGgsIGNiKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBrZXlQYXRoLnNwbGl0KCcuJykucmV2ZXJzZSgpLCBsYXN0UGFydCA9IHBhcnRzWzBdLCBsYXN0SW5kZXggPSBwYXJ0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0dmFsKG9iaiwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dmFsKG9ialtwYXJ0c1tpXV0sIGkgLSAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqW2xhc3RQYXJ0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmRlciA9IHRoaXMuX2N0eC5kaXIgPT09IFwibmV4dFwiID8gMSA6IC0xO1xuICAgICAgICAgICAgZnVuY3Rpb24gc29ydGVyKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYVZhbCA9IGdldHZhbChhLCBsYXN0SW5kZXgpLCBiVmFsID0gZ2V0dmFsKGIsIGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNtcChhVmFsLCBiVmFsKSAqIG9yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9BcnJheShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnNvcnQoc29ydGVyKTtcbiAgICAgICAgICAgIH0pLnRoZW4oY2IpO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IF90aGlzLl9jdHg7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5kaXIgPT09ICduZXh0JyAmJiBpc1BsYWluS2V5UmFuZ2UoY3R4LCB0cnVlKSAmJiBjdHgubGltaXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZU1hcHBlcl8xID0gY3R4LnZhbHVlTWFwcGVyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleE9yU3RvcmUoY3R4LCBjdHgudGFibGUuY29yZS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnRhYmxlLmNvcmUucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGN0eC5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBjdHgucmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfYS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVNYXBwZXJfMSA/IHJlc3VsdC5tYXAodmFsdWVNYXBwZXJfMSkgOiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFfMSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlcihjdHgsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBhXzEucHVzaChpdGVtKTsgfSwgdHJhbnMsIGN0eC50YWJsZS5jb3JlKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFfMTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgY2IpO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgY3R4Lm9mZnNldCArPSBvZmZzZXQ7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbktleVJhbmdlKGN0eCkpIHtcbiAgICAgICAgICAgICAgICBhZGRSZXBsYXlGaWx0ZXIoY3R4LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnNvciwgYWR2YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldExlZnQgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0TGVmdCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShvZmZzZXRMZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkUmVwbGF5RmlsdGVyKGN0eCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuICgtLW9mZnNldExlZnQgPCAwKTsgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5saW1pdCA9IGZ1bmN0aW9uIChudW1Sb3dzKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHgubGltaXQgPSBNYXRoLm1pbih0aGlzLl9jdHgubGltaXQsIG51bVJvd3MpO1xuICAgICAgICAgICAgYWRkUmVwbGF5RmlsdGVyKHRoaXMuX2N0eCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByb3dzTGVmdCA9IG51bVJvd3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UsIHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC0tcm93c0xlZnQgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dzTGVmdCA+PSAwO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS51bnRpbCA9IGZ1bmN0aW9uIChmaWx0ZXJGdW5jdGlvbiwgYkluY2x1ZGVTdG9wRW50cnkpIHtcbiAgICAgICAgICAgIGFkZEZpbHRlcih0aGlzLl9jdHgsIGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UsIHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyRnVuY3Rpb24oY3Vyc29yLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYkluY2x1ZGVTdG9wRW50cnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGltaXQoMSkudG9BcnJheShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYVswXTsgfSkudGhlbihjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5maXJzdChjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmaWx0ZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgYWRkRmlsdGVyKHRoaXMuX2N0eCwgZnVuY3Rpb24gKGN1cnNvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJGdW5jdGlvbihjdXJzb3IudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhZGRNYXRjaEZpbHRlcih0aGlzLl9jdHgsIGZpbHRlckZ1bmN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUub3IgPSBmdW5jdGlvbiAoaW5kZXhOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcy5fY3R4LnRhYmxlLCBpbmRleE5hbWUsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY3R4LmRpciA9ICh0aGlzLl9jdHguZGlyID09PSBcInByZXZcIiA/IFwibmV4dFwiIDogXCJwcmV2XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uZGlyZWN0aW9uY2hhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uZGlyZWN0aW9uY2hhbmdlKHRoaXMuX2N0eC5kaXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmRlc2MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmVhY2hLZXkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgICAgICBjdHgua2V5c09ubHkgPSAhY3R4LmlzTWF0Y2g7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2YWwsIGN1cnNvcikgeyBjYihjdXJzb3Iua2V5LCBjdXJzb3IpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZWFjaFVuaXF1ZUtleSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgdGhpcy5fY3R4LnVuaXF1ZSA9IFwidW5pcXVlXCI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoS2V5KGNiKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZWFjaFByaW1hcnlLZXkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgICAgICBjdHgua2V5c09ubHkgPSAhY3R4LmlzTWF0Y2g7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2YWwsIGN1cnNvcikgeyBjYihjdXJzb3IucHJpbWFyeUtleSwgY3Vyc29yKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgICAgICBjdHgua2V5c09ubHkgPSAhY3R4LmlzTWF0Y2g7XG4gICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgYS5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICB9KS50aGVuKGNiKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUucHJpbWFyeUtleXMgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgICAgICBpZiAoY3R4LmRpciA9PT0gJ25leHQnICYmIGlzUGxhaW5LZXlSYW5nZShjdHgsIHRydWUpICYmIGN0eC5saW1pdCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZChmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhPclN0b3JlKGN0eCwgY3R4LnRhYmxlLmNvcmUuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eC50YWJsZS5jb3JlLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zOiB0cmFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogY3R4LmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IGN0eC5yYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmtleXNPbmx5ID0gIWN0eC5pc01hdGNoO1xuICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGN1cnNvcikge1xuICAgICAgICAgICAgICAgIGEucHVzaChjdXJzb3IucHJpbWFyeUtleSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIH0pLnRoZW4oY2IpO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS51bmlxdWVLZXlzID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHgudW5pcXVlID0gXCJ1bmlxdWVcIjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtleXMoY2IpO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5maXJzdEtleSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGltaXQoMSkua2V5cyhmdW5jdGlvbiAoYSkgeyByZXR1cm4gYVswXTsgfSkudGhlbihjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmxhc3RLZXkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5maXJzdEtleShjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmRpc3RpbmN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eCwgaWR4ID0gY3R4LmluZGV4ICYmIGN0eC50YWJsZS5zY2hlbWEuaWR4QnlOYW1lW2N0eC5pbmRleF07XG4gICAgICAgICAgICBpZiAoIWlkeCB8fCAhaWR4Lm11bHRpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgdmFyIHNldCA9IHt9O1xuICAgICAgICAgICAgYWRkRmlsdGVyKHRoaXMuX2N0eCwgZnVuY3Rpb24gKGN1cnNvcikge1xuICAgICAgICAgICAgICAgIHZhciBzdHJLZXkgPSBjdXJzb3IucHJpbWFyeUtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGhhc093bihzZXQsIHN0cktleSk7XG4gICAgICAgICAgICAgICAgc2V0W3N0cktleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiAhZm91bmQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3JpdGUoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmeWVyO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RpZnllciA9IGNoYW5nZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aHMgPSBrZXlzKGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtS2V5cyA9IGtleVBhdGhzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZ5ZXIgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFueXRoaW5nTW9kaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtS2V5czsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBrZXlQYXRoc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gY2hhbmdlc1trZXlQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ1ZhbCA9IGdldEJ5S2V5UGF0aChpdGVtLCBrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvcE1vZGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCeUtleVBhdGgoaXRlbSwga2V5UGF0aCwgdmFsLmV4ZWN1dGUob3JpZ1ZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnl0aGluZ01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3JpZ1ZhbCAhPT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ5S2V5UGF0aChpdGVtLCBrZXlQYXRoLCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnl0aGluZ01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW55dGhpbmdNb2RpZmllZDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvcmVUYWJsZSA9IGN0eC50YWJsZS5jb3JlO1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IGNvcmVUYWJsZS5zY2hlbWEucHJpbWFyeUtleSwgb3V0Ym91bmQgPSBfYS5vdXRib3VuZCwgZXh0cmFjdEtleSA9IF9hLmV4dHJhY3RLZXk7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gMjAwO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZnlDaHVua1NpemUgPSBfdGhpcy5kYi5fb3B0aW9ucy5tb2RpZnlDaHVua1NpemU7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmeUNodW5rU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmeUNodW5rU2l6ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQgPSBtb2RpZnlDaHVua1NpemVbY29yZVRhYmxlLm5hbWVdIHx8IG1vZGlmeUNodW5rU2l6ZVsnKiddIHx8IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ID0gbW9kaWZ5Q2h1bmtTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b3RhbEZhaWx1cmVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGZhaWxlZEtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgYXBwbHlNdXRhdGVSZXN1bHQgPSBmdW5jdGlvbiAoZXhwZWN0ZWRDb3VudCwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWlsdXJlcyA9IHJlcy5mYWlsdXJlcywgbnVtRmFpbHVyZXMgPSByZXMubnVtRmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDb3VudCArPSBleHBlY3RlZENvdW50IC0gbnVtRmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBrZXlzKGZhaWx1cmVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEZhaWx1cmVzLnB1c2goZmFpbHVyZXNbcG9zXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpc1VuY29uZGl0aW9uYWxEZWxldGUgPSBjaGFuZ2VzID09PSBkZWxldGVDYWxsYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2xvbmUoKS5wcmltYXJ5S2V5cygpLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNyaXRlcmlhID0gaXNQbGFpbktleVJhbmdlKGN0eCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW1pdCA9PT0gSW5maW5pdHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgY2hhbmdlcyAhPT0gJ2Z1bmN0aW9uJyB8fCBpc1VuY29uZGl0aW9uYWxEZWxldGUpICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdHguaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogY3R4LnJhbmdlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2h1bmsgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnQgPSBNYXRoLm1pbihsaW1pdCwga2V5cy5sZW5ndGggLSBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXNJbkNodW5rID0ga2V5cy5zbGljZShvZmZzZXQsIG9mZnNldCArIGNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNVbmNvbmRpdGlvbmFsRGVsZXRlID8gUHJvbWlzZS5yZXNvbHZlKFtdKSA6IGNvcmVUYWJsZS5nZXRNYW55KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuczogdHJhbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czoga2V5c0luQ2h1bmssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IFwiaW1tdXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkVmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHB1dFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdXRLZXlzID0gb3V0Ym91bmQgPyBbXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGV0ZUtleXMgPSBpc1VuY29uZGl0aW9uYWxEZWxldGUgPyBrZXlzSW5DaHVuayA6IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmNvbmRpdGlvbmFsRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnVmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4XzEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZXBDbG9uZShvcmlnVmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1LZXk6IGtleXNbb2Zmc2V0ICsgaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZ5ZXIuY2FsbChjdHhfMSwgY3R4XzEudmFsdWUsIGN0eF8xKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4XzEudmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVLZXlzLnB1c2goa2V5c1tvZmZzZXQgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFvdXRib3VuZCAmJiBjbXAoZXh0cmFjdEtleShvcmlnVmFsdWUpLCBleHRyYWN0S2V5KGN0eF8xLnZhbHVlKSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlS2V5cy5wdXNoKGtleXNbb2Zmc2V0ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRWYWx1ZXMucHVzaChjdHhfMS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXRWYWx1ZXMucHVzaChjdHhfMS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRib3VuZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1dEtleXMucHVzaChrZXlzW29mZnNldCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFkZFZhbHVlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmVUYWJsZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdhZGQnLCB2YWx1ZXM6IGFkZFZhbHVlcyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcG9zIGluIHJlcy5mYWlsdXJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUtleXMuc3BsaWNlKHBhcnNlSW50KHBvcyksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlNdXRhdGVSZXN1bHQoYWRkVmFsdWVzLmxlbmd0aCwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gKHB1dFZhbHVlcy5sZW5ndGggPiAwIHx8IChjcml0ZXJpYSAmJiB0eXBlb2YgY2hhbmdlcyA9PT0gJ29iamVjdCcpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlVGFibGUubXV0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zOiB0cmFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogcHV0S2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogcHV0VmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWE6IGNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlU3BlYzogdHlwZW9mIGNoYW5nZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjaGFuZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGRpdGlvbmFsQ2h1bms6IG9mZnNldCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiBhcHBseU11dGF0ZVJlc3VsdChwdXRWYWx1ZXMubGVuZ3RoLCByZXMpOyB9KTsgfSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiAoZGVsZXRlS2V5cy5sZW5ndGggPiAwIHx8IChjcml0ZXJpYSAmJiBpc1VuY29uZGl0aW9uYWxEZWxldGUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlVGFibGUubXV0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zOiB0cmFucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5czogZGVsZXRlS2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhOiBjcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkaXRpb25hbENodW5rOiBvZmZzZXQgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gYnVpbHRJbkRlbGV0aW9uVHJpZ2dlcihjdHgudGFibGUsIGRlbGV0ZUtleXMsIHJlcyk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiBhcHBseU11dGF0ZVJlc3VsdChkZWxldGVLZXlzLmxlbmd0aCwgcmVzKTsgfSk7IH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGggPiBvZmZzZXQgKyBjb3VudCAmJiBuZXh0Q2h1bmsob2Zmc2V0ICsgbGltaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Q2h1bmsoMCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxGYWlsdXJlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNb2RpZnlFcnJvcihcIkVycm9yIG1vZGlmeWluZyBvbmUgb3IgbW9yZSBvYmplY3RzXCIsIHRvdGFsRmFpbHVyZXMsIHN1Y2Nlc3NDb3VudCwgZmFpbGVkS2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHgsIHJhbmdlID0gY3R4LnJhbmdlO1xuICAgICAgICAgICAgaWYgKGlzUGxhaW5LZXlSYW5nZShjdHgpICYmXG4gICAgICAgICAgICAgICAgIWN0eC50YWJsZS5zY2hlbWEueVByb3BzICYmXG4gICAgICAgICAgICAgICAgKGN0eC5pc1ByaW1LZXkgfHwgcmFuZ2UudHlwZSA9PT0gMyApKVxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd3JpdGUoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmltYXJ5S2V5ID0gY3R4LnRhYmxlLmNvcmUuc2NoZW1hLnByaW1hcnlLZXk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3JlUmFuZ2UgPSByYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eC50YWJsZS5jb3JlLmNvdW50KHsgdHJhbnM6IHRyYW5zLCBxdWVyeTogeyBpbmRleDogcHJpbWFyeUtleSwgcmFuZ2U6IGNvcmVSYW5nZSB9IH0pLnRoZW4oZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnRhYmxlLmNvcmUubXV0YXRlKHsgdHJhbnM6IHRyYW5zLCB0eXBlOiAnZGVsZXRlUmFuZ2UnLCByYW5nZTogY29yZVJhbmdlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhaWx1cmVzID0gX2EuZmFpbHVyZXMsIG51bUZhaWx1cmVzID0gX2EubnVtRmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bUZhaWx1cmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTW9kaWZ5RXJyb3IoXCJDb3VsZCBub3QgZGVsZXRlIHNvbWUgdmFsdWVzXCIsIE9iamVjdC5rZXlzKGZhaWx1cmVzKS5tYXAoZnVuY3Rpb24gKHBvcykgeyByZXR1cm4gZmFpbHVyZXNbcG9zXTsgfSksIGNvdW50IC0gbnVtRmFpbHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudCAtIG51bUZhaWx1cmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kaWZ5KGRlbGV0ZUNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIENvbGxlY3Rpb247XG4gICAgfSgpKTtcbiAgICB2YXIgZGVsZXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsdWUsIGN0eCkgeyByZXR1cm4gY3R4LnZhbHVlID0gbnVsbDsgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb25Db25zdHJ1Y3RvcihkYikge1xuICAgICAgICByZXR1cm4gbWFrZUNsYXNzQ29uc3RydWN0b3IoQ29sbGVjdGlvbi5wcm90b3R5cGUsIGZ1bmN0aW9uIENvbGxlY3Rpb24od2hlcmVDbGF1c2UsIGtleVJhbmdlR2VuZXJhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICB2YXIga2V5UmFuZ2UgPSBBbnlSYW5nZSwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGtleVJhbmdlR2VuZXJhdG9yKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleVJhbmdlID0ga2V5UmFuZ2VHZW5lcmF0b3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdoZXJlQ3R4ID0gd2hlcmVDbGF1c2UuX2N0eDtcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IHdoZXJlQ3R4LnRhYmxlO1xuICAgICAgICAgICAgdmFyIHJlYWRpbmdIb29rID0gdGFibGUuaG9vay5yZWFkaW5nLmZpcmU7XG4gICAgICAgICAgICB0aGlzLl9jdHggPSB7XG4gICAgICAgICAgICAgICAgdGFibGU6IHRhYmxlLFxuICAgICAgICAgICAgICAgIGluZGV4OiB3aGVyZUN0eC5pbmRleCxcbiAgICAgICAgICAgICAgICBpc1ByaW1LZXk6ICghd2hlcmVDdHguaW5kZXggfHwgKHRhYmxlLnNjaGVtYS5wcmltS2V5LmtleVBhdGggJiYgd2hlcmVDdHguaW5kZXggPT09IHRhYmxlLnNjaGVtYS5wcmltS2V5Lm5hbWUpKSxcbiAgICAgICAgICAgICAgICByYW5nZToga2V5UmFuZ2UsXG4gICAgICAgICAgICAgICAga2V5c09ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpcjogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgdW5pcXVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGFsZ29yaXRobTogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVwbGF5RmlsdGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGp1c3RMaW1pdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc01hdGNoOiBudWxsLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBsaW1pdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIG9yOiB3aGVyZUN0eC5vcixcbiAgICAgICAgICAgICAgICB2YWx1ZU1hcHBlcjogcmVhZGluZ0hvb2sgIT09IG1pcnJvciA/IHJlYWRpbmdIb29rIDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2ltcGxlQ29tcGFyZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA9PT0gYiA/IDAgOiAxO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaW1wbGVDb21wYXJlUmV2ZXJzZShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogYSA9PT0gYiA/IDAgOiAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhaWwoY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UsIGVyciwgVCkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25PcldoZXJlQ2xhdXNlIGluc3RhbmNlb2YgV2hlcmVDbGF1c2UgP1xuICAgICAgICAgICAgbmV3IGNvbGxlY3Rpb25PcldoZXJlQ2xhdXNlLkNvbGxlY3Rpb24oY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UpIDpcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PcldoZXJlQ2xhdXNlO1xuICAgICAgICBjb2xsZWN0aW9uLl9jdHguZXJyb3IgPSBUID8gbmV3IFQoZXJyKSA6IG5ldyBUeXBlRXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5Q29sbGVjdGlvbih3aGVyZUNsYXVzZSkge1xuICAgICAgICByZXR1cm4gbmV3IHdoZXJlQ2xhdXNlLkNvbGxlY3Rpb24od2hlcmVDbGF1c2UsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJhbmdlRXF1YWwoXCJcIik7IH0pLmxpbWl0KDApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cHBlckZhY3RvcnkoZGlyKSB7XG4gICAgICAgIHJldHVybiBkaXIgPT09IFwibmV4dFwiID9cbiAgICAgICAgICAgIGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRvVXBwZXJDYXNlKCk7IH0gOlxuICAgICAgICAgICAgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9Mb3dlckNhc2UoKTsgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG93ZXJGYWN0b3J5KGRpcikge1xuICAgICAgICByZXR1cm4gZGlyID09PSBcIm5leHRcIiA/XG4gICAgICAgICAgICBmdW5jdGlvbiAocykgeyByZXR1cm4gcy50b0xvd2VyQ2FzZSgpOyB9IDpcbiAgICAgICAgICAgIGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRvVXBwZXJDYXNlKCk7IH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5leHRDYXNpbmcoa2V5LCBsb3dlcktleSwgdXBwZXJOZWVkbGUsIGxvd2VyTmVlZGxlLCBjbXAsIGRpcikge1xuICAgICAgICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oa2V5Lmxlbmd0aCwgbG93ZXJOZWVkbGUubGVuZ3RoKTtcbiAgICAgICAgdmFyIGxscCA9IC0xO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbHdyS2V5Q2hhciA9IGxvd2VyS2V5W2ldO1xuICAgICAgICAgICAgaWYgKGx3cktleUNoYXIgIT09IGxvd2VyTmVlZGxlW2ldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNtcChrZXlbaV0sIHVwcGVyTmVlZGxlW2ldKSA8IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsIGkpICsgdXBwZXJOZWVkbGVbaV0gKyB1cHBlck5lZWRsZS5zdWJzdHIoaSArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChjbXAoa2V5W2ldLCBsb3dlck5lZWRsZVtpXSkgPCAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpKSArIGxvd2VyTmVlZGxlW2ldICsgdXBwZXJOZWVkbGUuc3Vic3RyKGkgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAobGxwID49IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsIGxscCkgKyBsb3dlcktleVtsbHBdICsgdXBwZXJOZWVkbGUuc3Vic3RyKGxscCArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNtcChrZXlbaV0sIGx3cktleUNoYXIpIDwgMClcbiAgICAgICAgICAgICAgICBsbHAgPSBpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPCBsb3dlck5lZWRsZS5sZW5ndGggJiYgZGlyID09PSBcIm5leHRcIilcbiAgICAgICAgICAgIHJldHVybiBrZXkgKyB1cHBlck5lZWRsZS5zdWJzdHIoa2V5Lmxlbmd0aCk7XG4gICAgICAgIGlmIChsZW5ndGggPCBrZXkubGVuZ3RoICYmIGRpciA9PT0gXCJwcmV2XCIpXG4gICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCB1cHBlck5lZWRsZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gKGxscCA8IDAgPyBudWxsIDoga2V5LnN1YnN0cigwLCBsbHApICsgbG93ZXJOZWVkbGVbbGxwXSArIHVwcGVyTmVlZGxlLnN1YnN0cihsbHAgKyAxKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZElnbm9yZUNhc2VBbGdvcml0aG0od2hlcmVDbGF1c2UsIG1hdGNoLCBuZWVkbGVzLCBzdWZmaXgpIHtcbiAgICAgICAgdmFyIHVwcGVyLCBsb3dlciwgY29tcGFyZSwgdXBwZXJOZWVkbGVzLCBsb3dlck5lZWRsZXMsIGRpcmVjdGlvbiwgbmV4dEtleVN1ZmZpeCwgbmVlZGxlc0xlbiA9IG5lZWRsZXMubGVuZ3RoO1xuICAgICAgICBpZiAoIW5lZWRsZXMuZXZlcnkoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJzsgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWlsKHdoZXJlQ2xhdXNlLCBTVFJJTkdfRVhQRUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluaXREaXJlY3Rpb24oZGlyKSB7XG4gICAgICAgICAgICB1cHBlciA9IHVwcGVyRmFjdG9yeShkaXIpO1xuICAgICAgICAgICAgbG93ZXIgPSBsb3dlckZhY3RvcnkoZGlyKTtcbiAgICAgICAgICAgIGNvbXBhcmUgPSAoZGlyID09PSBcIm5leHRcIiA/IHNpbXBsZUNvbXBhcmUgOiBzaW1wbGVDb21wYXJlUmV2ZXJzZSk7XG4gICAgICAgICAgICB2YXIgbmVlZGxlQm91bmRzID0gbmVlZGxlcy5tYXAoZnVuY3Rpb24gKG5lZWRsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGxvd2VyOiBsb3dlcihuZWVkbGUpLCB1cHBlcjogdXBwZXIobmVlZGxlKSB9O1xuICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGEubG93ZXIsIGIubG93ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1cHBlck5lZWRsZXMgPSBuZWVkbGVCb3VuZHMubWFwKGZ1bmN0aW9uIChuYikgeyByZXR1cm4gbmIudXBwZXI7IH0pO1xuICAgICAgICAgICAgbG93ZXJOZWVkbGVzID0gbmVlZGxlQm91bmRzLm1hcChmdW5jdGlvbiAobmIpIHsgcmV0dXJuIG5iLmxvd2VyOyB9KTtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcjtcbiAgICAgICAgICAgIG5leHRLZXlTdWZmaXggPSAoZGlyID09PSBcIm5leHRcIiA/IFwiXCIgOiBzdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIGluaXREaXJlY3Rpb24oXCJuZXh0XCIpO1xuICAgICAgICB2YXIgYyA9IG5ldyB3aGVyZUNsYXVzZS5Db2xsZWN0aW9uKHdoZXJlQ2xhdXNlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZSh1cHBlck5lZWRsZXNbMF0sIGxvd2VyTmVlZGxlc1tuZWVkbGVzTGVuIC0gMV0gKyBzdWZmaXgpOyB9KTtcbiAgICAgICAgYy5fb25kaXJlY3Rpb25jaGFuZ2UgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpbml0RGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBmaXJzdFBvc3NpYmxlTmVlZGxlID0gMDtcbiAgICAgICAgYy5fYWRkQWxnb3JpdGhtKGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UsIHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBjdXJzb3Iua2V5O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBsb3dlcktleSA9IGxvd2VyKGtleSk7XG4gICAgICAgICAgICBpZiAobWF0Y2gobG93ZXJLZXksIGxvd2VyTmVlZGxlcywgZmlyc3RQb3NzaWJsZU5lZWRsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsb3dlc3RQb3NzaWJsZUNhc2luZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0UG9zc2libGVOZWVkbGU7IGkgPCBuZWVkbGVzTGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhc2luZyA9IG5leHRDYXNpbmcoa2V5LCBsb3dlcktleSwgdXBwZXJOZWVkbGVzW2ldLCBsb3dlck5lZWRsZXNbaV0sIGNvbXBhcmUsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXNpbmcgPT09IG51bGwgJiYgbG93ZXN0UG9zc2libGVDYXNpbmcgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFBvc3NpYmxlTmVlZGxlID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VzdFBvc3NpYmxlQ2FzaW5nID09PSBudWxsIHx8IGNvbXBhcmUobG93ZXN0UG9zc2libGVDYXNpbmcsIGNhc2luZykgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RQb3NzaWJsZUNhc2luZyA9IGNhc2luZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobG93ZXN0UG9zc2libGVDYXNpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZShmdW5jdGlvbiAoKSB7IGN1cnNvci5jb250aW51ZShsb3dlc3RQb3NzaWJsZUNhc2luZyArIG5leHRLZXlTdWZmaXgpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSYW5nZShsb3dlciwgdXBwZXIsIGxvd2VyT3BlbiwgdXBwZXJPcGVuKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAyICxcbiAgICAgICAgICAgIGxvd2VyOiBsb3dlcixcbiAgICAgICAgICAgIHVwcGVyOiB1cHBlcixcbiAgICAgICAgICAgIGxvd2VyT3BlbjogbG93ZXJPcGVuLFxuICAgICAgICAgICAgdXBwZXJPcGVuOiB1cHBlck9wZW5cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZ2VFcXVhbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogMSAsXG4gICAgICAgICAgICBsb3dlcjogdmFsdWUsXG4gICAgICAgICAgICB1cHBlcjogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgV2hlcmVDbGF1c2UgPSAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gV2hlcmVDbGF1c2UoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdoZXJlQ2xhdXNlLnByb3RvdHlwZSwgXCJDb2xsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdHgudGFibGUuZGIuQ29sbGVjdGlvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmJldHdlZW4gPSBmdW5jdGlvbiAobG93ZXIsIHVwcGVyLCBpbmNsdWRlTG93ZXIsIGluY2x1ZGVVcHBlcikge1xuICAgICAgICAgICAgaW5jbHVkZUxvd2VyID0gaW5jbHVkZUxvd2VyICE9PSBmYWxzZTtcbiAgICAgICAgICAgIGluY2x1ZGVVcHBlciA9IGluY2x1ZGVVcHBlciA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLl9jbXAobG93ZXIsIHVwcGVyKSA+IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9jbXAobG93ZXIsIHVwcGVyKSA9PT0gMCAmJiAoaW5jbHVkZUxvd2VyIHx8IGluY2x1ZGVVcHBlcikgJiYgIShpbmNsdWRlTG93ZXIgJiYgaW5jbHVkZVVwcGVyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlUmFuZ2UobG93ZXIsIHVwcGVyLCAhaW5jbHVkZUxvd2VyLCAhaW5jbHVkZVVwcGVyKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIElOVkFMSURfS0VZX0FSR1VNRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmFuZ2VFcXVhbCh2YWx1ZSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYWJvdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIElOVkFMSURfS0VZX0FSR1VNRU5UKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHZhbHVlLCB1bmRlZmluZWQsIHRydWUpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmFib3ZlT3JFcXVhbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlUmFuZ2UodmFsdWUsIHVuZGVmaW5lZCwgZmFsc2UpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmJlbG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZSh1bmRlZmluZWQsIHZhbHVlLCBmYWxzZSwgdHJ1ZSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYmVsb3dPckVxdWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZSh1bmRlZmluZWQsIHZhbHVlKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5zdGFydHNXaXRoID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIFNUUklOR19FWFBFQ1RFRCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZXR3ZWVuKHN0ciwgc3RyICsgbWF4U3RyaW5nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLnN0YXJ0c1dpdGhJZ25vcmVDYXNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgaWYgKHN0ciA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydHNXaXRoKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gYWRkSWdub3JlQ2FzZUFsZ29yaXRobSh0aGlzLCBmdW5jdGlvbiAoeCwgYSkgeyByZXR1cm4geC5pbmRleE9mKGFbMF0pID09PSAwOyB9LCBbc3RyXSwgbWF4U3RyaW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmVxdWFsc0lnbm9yZUNhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWRkSWdub3JlQ2FzZUFsZ29yaXRobSh0aGlzLCBmdW5jdGlvbiAoeCwgYSkgeyByZXR1cm4geCA9PT0gYVswXTsgfSwgW3N0cl0sIFwiXCIpO1xuICAgICAgICB9O1xuICAgICAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYW55T2ZJZ25vcmVDYXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNldCA9IGdldEFycmF5T2YuYXBwbHkoTk9fQ0hBUl9BUlJBWSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChzZXQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYWRkSWdub3JlQ2FzZUFsZ29yaXRobSh0aGlzLCBmdW5jdGlvbiAoeCwgYSkgeyByZXR1cm4gYS5pbmRleE9mKHgpICE9PSAtMTsgfSwgc2V0LCBcIlwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnlPZklnbm9yZUNhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0ID0gZ2V0QXJyYXlPZi5hcHBseShOT19DSEFSX0FSUkFZLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHNldC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Q29sbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBhZGRJZ25vcmVDYXNlQWxnb3JpdGhtKHRoaXMsIGZ1bmN0aW9uICh4LCBhKSB7IHJldHVybiBhLnNvbWUoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIHguaW5kZXhPZihuKSA9PT0gMDsgfSk7IH0sIHNldCwgbWF4U3RyaW5nKTtcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmFueU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzZXQgPSBnZXRBcnJheU9mLmFwcGx5KE5PX0NIQVJfQVJSQVksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY29tcGFyZSA9IHRoaXMuX2NtcDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2V0LnNvcnQoY29tcGFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIElOVkFMSURfS0VZX0FSR1VNRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICB2YXIgYyA9IG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlUmFuZ2Uoc2V0WzBdLCBzZXRbc2V0Lmxlbmd0aCAtIDFdKTsgfSk7XG4gICAgICAgICAgICBjLl9vbmRpcmVjdGlvbmNoYW5nZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlID0gKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgP1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fYXNjZW5kaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2Rlc2NlbmRpbmcpO1xuICAgICAgICAgICAgICAgIHNldC5zb3J0KGNvbXBhcmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIGMuX2FkZEFsZ29yaXRobShmdW5jdGlvbiAoY3Vyc29yLCBhZHZhbmNlLCByZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGN1cnNvci5rZXk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvbXBhcmUoa2V5LCBzZXRbaV0pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBzZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgc2V0W2ldKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoZnVuY3Rpb24gKCkgeyBjdXJzb3IuY29udGludWUoc2V0W2ldKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9O1xuICAgICAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUubm90RXF1YWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluQW55UmFuZ2UoW1ttaW5LZXksIHZhbHVlXSwgW3ZhbHVlLCB0aGlzLmRiLl9tYXhLZXldXSwgeyBpbmNsdWRlTG93ZXJzOiBmYWxzZSwgaW5jbHVkZVVwcGVyczogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5ub25lT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0ID0gZ2V0QXJyYXlPZi5hcHBseShOT19DSEFSX0FSUkFZLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHNldC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNldC5zb3J0KHRoaXMuX2FzY2VuZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIElOVkFMSURfS0VZX0FSR1VNRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByYW5nZXMgPSBzZXQucmVkdWNlKGZ1bmN0aW9uIChyZXMsIHZhbCkgeyByZXR1cm4gcmVzID9cbiAgICAgICAgICAgICAgICByZXMuY29uY2F0KFtbcmVzW3Jlcy5sZW5ndGggLSAxXVsxXSwgdmFsXV0pIDpcbiAgICAgICAgICAgICAgICBbW21pbktleSwgdmFsXV07IH0sIG51bGwpO1xuICAgICAgICAgICAgcmFuZ2VzLnB1c2goW3NldFtzZXQubGVuZ3RoIC0gMV0sIHRoaXMuZGIuX21heEtleV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5BbnlSYW5nZShyYW5nZXMsIHsgaW5jbHVkZUxvd2VyczogZmFsc2UsIGluY2x1ZGVVcHBlcnM6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuaW5BbnlSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgY21wID0gdGhpcy5fY21wLCBhc2NlbmRpbmcgPSB0aGlzLl9hc2NlbmRpbmcsIGRlc2NlbmRpbmcgPSB0aGlzLl9kZXNjZW5kaW5nLCBtaW4gPSB0aGlzLl9taW4sIG1heCA9IHRoaXMuX21heDtcbiAgICAgICAgICAgIGlmIChyYW5nZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICBpZiAoIXJhbmdlcy5ldmVyeShmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VbMF0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICByYW5nZVsxXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZyhyYW5nZVswXSwgcmFuZ2VbMV0pIDw9IDA7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIFwiRmlyc3QgYXJndW1lbnQgdG8gaW5BbnlSYW5nZSgpIG11c3QgYmUgYW4gQXJyYXkgb2YgdHdvLXZhbHVlIEFycmF5cyBbbG93ZXIsdXBwZXJdIHdoZXJlIHVwcGVyIG11c3Qgbm90IGJlIGxvd2VyIHRoYW4gbG93ZXJcIiwgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluY2x1ZGVMb3dlcnMgPSAhb3B0aW9ucyB8fCBvcHRpb25zLmluY2x1ZGVMb3dlcnMgIT09IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGluY2x1ZGVVcHBlcnMgPSBvcHRpb25zICYmIG9wdGlvbnMuaW5jbHVkZVVwcGVycyA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFJhbmdlKHJhbmdlcywgbmV3UmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwgPSByYW5nZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHJhbmdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtcChuZXdSYW5nZVswXSwgcmFuZ2VbMV0pIDwgMCAmJiBjbXAobmV3UmFuZ2VbMV0sIHJhbmdlWzBdKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlWzBdID0gbWluKHJhbmdlWzBdLCBuZXdSYW5nZVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZVsxXSA9IG1heChyYW5nZVsxXSwgbmV3UmFuZ2VbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGwpXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKG5ld1JhbmdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNvcnREaXJlY3Rpb24gPSBhc2NlbmRpbmc7XG4gICAgICAgICAgICBmdW5jdGlvbiByYW5nZVNvcnRlcihhLCBiKSB7IHJldHVybiBzb3J0RGlyZWN0aW9uKGFbMF0sIGJbMF0pOyB9XG4gICAgICAgICAgICB2YXIgc2V0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZXQgPSByYW5nZXMucmVkdWNlKGFkZFJhbmdlLCBbXSk7XG4gICAgICAgICAgICAgICAgc2V0LnNvcnQocmFuZ2VTb3J0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJhbmdlUG9zID0gMDtcbiAgICAgICAgICAgIHZhciBrZXlJc0JleW9uZEN1cnJlbnRFbnRyeSA9IGluY2x1ZGVVcHBlcnMgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGFzY2VuZGluZyhrZXksIHNldFtyYW5nZVBvc11bMV0pID4gMDsgfSA6XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gYXNjZW5kaW5nKGtleSwgc2V0W3JhbmdlUG9zXVsxXSkgPj0gMDsgfTtcbiAgICAgICAgICAgIHZhciBrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeSA9IGluY2x1ZGVMb3dlcnMgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRlc2NlbmRpbmcoa2V5LCBzZXRbcmFuZ2VQb3NdWzBdKSA+IDA7IH0gOlxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRlc2NlbmRpbmcoa2V5LCBzZXRbcmFuZ2VQb3NdWzBdKSA+PSAwOyB9O1xuICAgICAgICAgICAgZnVuY3Rpb24ga2V5V2l0aGluQ3VycmVudFJhbmdlKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAha2V5SXNCZXlvbmRDdXJyZW50RW50cnkoa2V5KSAmJiAha2V5SXNCZWZvcmVDdXJyZW50RW50cnkoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGVja0tleSA9IGtleUlzQmV5b25kQ3VycmVudEVudHJ5O1xuICAgICAgICAgICAgdmFyIGMgPSBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHNldFswXVswXSwgc2V0W3NldC5sZW5ndGggLSAxXVsxXSwgIWluY2x1ZGVMb3dlcnMsICFpbmNsdWRlVXBwZXJzKTsgfSk7XG4gICAgICAgICAgICBjLl9vbmRpcmVjdGlvbmNoYW5nZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0tleSA9IGtleUlzQmV5b25kQ3VycmVudEVudHJ5O1xuICAgICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gYXNjZW5kaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tLZXkgPSBrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbiA9IGRlc2NlbmRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldC5zb3J0KHJhbmdlU29ydGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjLl9hZGRBbGdvcml0aG0oZnVuY3Rpb24gKGN1cnNvciwgYWR2YW5jZSwgcmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBjdXJzb3Iua2V5O1xuICAgICAgICAgICAgICAgIHdoaWxlIChjaGVja0tleShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICsrcmFuZ2VQb3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZVBvcyA9PT0gc2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZShyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5V2l0aGluQ3VycmVudFJhbmdlKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLl9jbXAoa2V5LCBzZXRbcmFuZ2VQb3NdWzFdKSA9PT0gMCB8fCBfdGhpcy5fY21wKGtleSwgc2V0W3JhbmdlUG9zXVswXSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gYXNjZW5kaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZShzZXRbcmFuZ2VQb3NdWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoc2V0W3JhbmdlUG9zXVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfTtcbiAgICAgICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnlPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZXQgPSBnZXRBcnJheU9mLmFwcGx5KE5PX0NIQVJfQVJSQVksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZiAoIXNldC5ldmVyeShmdW5jdGlvbiAocykgeyByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnOyB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHRoaXMsIFwic3RhcnRzV2l0aEFueU9mKCkgb25seSB3b3JrcyB3aXRoIHN0cmluZ3NcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHlDb2xsZWN0aW9uKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5BbnlSYW5nZShzZXQubWFwKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFtzdHIsIHN0ciArIG1heFN0cmluZ107IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFdoZXJlQ2xhdXNlO1xuICAgIH0oKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVXaGVyZUNsYXVzZUNvbnN0cnVjdG9yKGRiKSB7XG4gICAgICAgIHJldHVybiBtYWtlQ2xhc3NDb25zdHJ1Y3RvcihXaGVyZUNsYXVzZS5wcm90b3R5cGUsIGZ1bmN0aW9uIFdoZXJlQ2xhdXNlKHRhYmxlLCBpbmRleCwgb3JDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICB0aGlzLl9jdHggPSB7XG4gICAgICAgICAgICAgICAgdGFibGU6IHRhYmxlLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCA9PT0gXCI6aWRcIiA/IG51bGwgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBvcjogb3JDb2xsZWN0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fY21wID0gdGhpcy5fYXNjZW5kaW5nID0gY21wO1xuICAgICAgICAgICAgdGhpcy5fZGVzY2VuZGluZyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBjbXAoYiwgYSk7IH07XG4gICAgICAgICAgICB0aGlzLl9tYXggPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gY21wKGEsIGIpID4gMCA/IGEgOiBiOyB9O1xuICAgICAgICAgICAgdGhpcy5fbWluID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGNtcChhLCBiKSA8IDAgPyBhIDogYjsgfTtcbiAgICAgICAgICAgIHRoaXMuX0lEQktleVJhbmdlID0gZGIuX2RlcHMuSURCS2V5UmFuZ2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX0lEQktleVJhbmdlKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk1pc3NpbmdBUEkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCkge1xuICAgICAgICByZXR1cm4gd3JhcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICAgICAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBERVhJRV9TVE9SQUdFX01VVEFURURfRVZFTlRfTkFNRSA9ICdzdG9yYWdlbXV0YXRlZCc7XG4gICAgdmFyIFNUT1JBR0VfTVVUQVRFRF9ET01fRVZFTlRfTkFNRSA9ICd4LXN0b3JhZ2VtdXRhdGVkLTEnO1xuICAgIHZhciBnbG9iYWxFdmVudHMgPSBFdmVudHMobnVsbCwgREVYSUVfU1RPUkFHRV9NVVRBVEVEX0VWRU5UX05BTUUpO1xuXG4gICAgdmFyIFRyYW5zYWN0aW9uID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFRyYW5zYWN0aW9uKCkge1xuICAgICAgICB9XG4gICAgICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5fbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydCghUFNELmdsb2JhbCk7XG4gICAgICAgICAgICArK3RoaXMuX3JlY3Vsb2NrO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlY3Vsb2NrID09PSAxICYmICFQU0QuZ2xvYmFsKVxuICAgICAgICAgICAgICAgIFBTRC5sb2NrT3duZXJGb3IgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5fdW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0KCFQU0QuZ2xvYmFsKTtcbiAgICAgICAgICAgIGlmICgtLXRoaXMuX3JlY3Vsb2NrID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFQU0QuZ2xvYmFsKVxuICAgICAgICAgICAgICAgICAgICBQU0QubG9ja093bmVyRm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5fYmxvY2tlZEZ1bmNzLmxlbmd0aCA+IDAgJiYgIXRoaXMuX2xvY2tlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbkFuZFBTRCA9IHRoaXMuX2Jsb2NrZWRGdW5jcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUFNEKGZuQW5kUFNEWzFdLCBmbkFuZFBTRFswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuX2xvY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWN1bG9jayAmJiBQU0QubG9ja093bmVyRm9yICE9PSB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGlkYnRyYW5zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YXIgaWRiZGIgPSB0aGlzLmRiLmlkYmRiO1xuICAgICAgICAgICAgdmFyIGRiT3BlbkVycm9yID0gdGhpcy5kYi5fc3RhdGUuZGJPcGVuRXJyb3I7XG4gICAgICAgICAgICBhc3NlcnQoIXRoaXMuaWRidHJhbnMpO1xuICAgICAgICAgICAgaWYgKCFpZGJ0cmFucyAmJiAhaWRiZGIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRiT3BlbkVycm9yICYmIGRiT3BlbkVycm9yLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRhdGFiYXNlQ2xvc2VkRXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLkRhdGFiYXNlQ2xvc2VkKGRiT3BlbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1pc3NpbmdBUElFcnJvclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuTWlzc2luZ0FQSShkYk9wZW5FcnJvci5tZXNzYWdlLCBkYk9wZW5FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5PcGVuRmFpbGVkKGRiT3BlbkVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlRyYW5zYWN0aW9uSW5hY3RpdmUoKTtcbiAgICAgICAgICAgIGFzc2VydCh0aGlzLl9jb21wbGV0aW9uLl9zdGF0ZSA9PT0gbnVsbCk7XG4gICAgICAgICAgICBpZGJ0cmFucyA9IHRoaXMuaWRidHJhbnMgPSBpZGJ0cmFucyB8fFxuICAgICAgICAgICAgICAgICh0aGlzLmRiLmNvcmVcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRiLmNvcmUudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWVzLCB0aGlzLm1vZGUsIHsgZHVyYWJpbGl0eTogdGhpcy5jaHJvbWVUcmFuc2FjdGlvbkR1cmFiaWxpdHkgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBpZGJkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZXMsIHRoaXMubW9kZSwgeyBkdXJhYmlsaXR5OiB0aGlzLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSB9KSk7XG4gICAgICAgICAgICBpZGJ0cmFucy5vbmVycm9yID0gd3JhcChmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChldik7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlamVjdChpZGJ0cmFucy5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlkYnRyYW5zLm9uYWJvcnQgPSB3cmFwKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGV2KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmUgJiYgX3RoaXMuX3JlamVjdChuZXcgZXhjZXB0aW9ucy5BYm9ydChpZGJ0cmFucy5lcnJvcikpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uKFwiYWJvcnRcIikuZmlyZShldik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlkYnRyYW5zLm9uY29tcGxldGUgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIGlmICgnbXV0YXRlZFBhcnRzJyBpbiBpZGJ0cmFucykge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxFdmVudHMuc3RvcmFnZW11dGF0ZWQuZmlyZShpZGJ0cmFuc1tcIm11dGF0ZWRQYXJ0c1wiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLl9wcm9taXNlID0gZnVuY3Rpb24gKG1vZGUsIGZuLCBiV3JpdGVMb2NrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFkd3JpdGUnICYmIHRoaXMubW9kZSAhPT0gJ3JlYWR3cml0ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGlvbihuZXcgZXhjZXB0aW9ucy5SZWFkT25seShcIlRyYW5zYWN0aW9uIGlzIHJlYWRvbmx5XCIpKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGlvbihuZXcgZXhjZXB0aW9ucy5UcmFuc2FjdGlvbkluYWN0aXZlKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xvY2tlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fYmxvY2tlZEZ1bmNzLnB1c2goW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fcHJvbWlzZShtb2RlLCBmbiwgYldyaXRlTG9jaykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgUFNEXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiV3JpdGVMb2NrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Njb3BlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9sb2NrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnYgPSBmbihyZXNvbHZlLCByZWplY3QsIF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydiAmJiBydi50aGVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ2LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHAuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdW5sb2NrKCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICBwLl9saWIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBydiA9IGZuKHJlc29sdmUsIHJlamVjdCwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnYgJiYgcnYudGhlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ2LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwLl9saWIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuX3Jvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5fcm9vdCgpIDogdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLndhaXRGb3IgPSBmdW5jdGlvbiAocHJvbWlzZUxpa2UpIHtcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5fcm9vdCgpO1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBEZXhpZVByb21pc2UucmVzb2x2ZShwcm9taXNlTGlrZSk7XG4gICAgICAgICAgICBpZiAocm9vdC5fd2FpdGluZ0Zvcikge1xuICAgICAgICAgICAgICAgIHJvb3QuX3dhaXRpbmdGb3IgPSByb290Ll93YWl0aW5nRm9yLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvbWlzZTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Ll93YWl0aW5nRm9yID0gcHJvbWlzZTtcbiAgICAgICAgICAgICAgICByb290Ll93YWl0aW5nUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSByb290LmlkYnRyYW5zLm9iamVjdFN0b3JlKHJvb3Quc3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIHNwaW4oKSB7XG4gICAgICAgICAgICAgICAgICAgICsrcm9vdC5fc3BpbkNvdW50O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocm9vdC5fd2FpdGluZ1F1ZXVlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIChyb290Ll93YWl0aW5nUXVldWUuc2hpZnQoKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QuX3dhaXRpbmdGb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5nZXQoLUluZmluaXR5KS5vbnN1Y2Nlc3MgPSBzcGluO1xuICAgICAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3VycmVudFdhaXRQcm9taXNlID0gcm9vdC5fd2FpdGluZ0ZvcjtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcm9vdC5fd2FpdGluZ1F1ZXVlLnB1c2god3JhcChyZXNvbHZlLmJpbmQobnVsbCwgcmVzKSkpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByb290Ll93YWl0aW5nUXVldWUucHVzaCh3cmFwKHJlamVjdC5iaW5kKG51bGwsIGVycikpKTsgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb290Ll93YWl0aW5nRm9yID09PSBjdXJyZW50V2FpdFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuX3dhaXRpbmdGb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZGJ0cmFucylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGJ0cmFucy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdChuZXcgZXhjZXB0aW9ucy5BYm9ydCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgdmFyIG1lbW9pemVkVGFibGVzID0gKHRoaXMuX21lbW9pemVkVGFibGVzIHx8ICh0aGlzLl9tZW1vaXplZFRhYmxlcyA9IHt9KSk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKG1lbW9pemVkVGFibGVzLCB0YWJsZU5hbWUpKVxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1vaXplZFRhYmxlc1t0YWJsZU5hbWVdO1xuICAgICAgICAgICAgdmFyIHRhYmxlU2NoZW1hID0gdGhpcy5zY2hlbWFbdGFibGVOYW1lXTtcbiAgICAgICAgICAgIGlmICghdGFibGVTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5Ob3RGb3VuZChcIlRhYmxlIFwiICsgdGFibGVOYW1lICsgXCIgbm90IHBhcnQgb2YgdHJhbnNhY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHJhbnNhY3Rpb25Cb3VuZFRhYmxlID0gbmV3IHRoaXMuZGIuVGFibGUodGFibGVOYW1lLCB0YWJsZVNjaGVtYSwgdGhpcyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbkJvdW5kVGFibGUuY29yZSA9IHRoaXMuZGIuY29yZS50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgbWVtb2l6ZWRUYWJsZXNbdGFibGVOYW1lXSA9IHRyYW5zYWN0aW9uQm91bmRUYWJsZTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkJvdW5kVGFibGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvbjtcbiAgICB9KCkpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb25Db25zdHJ1Y3RvcihkYikge1xuICAgICAgICByZXR1cm4gbWFrZUNsYXNzQ29uc3RydWN0b3IoVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBmdW5jdGlvbiBUcmFuc2FjdGlvbihtb2RlLCBzdG9yZU5hbWVzLCBkYnNjaGVtYSwgY2hyb21lVHJhbnNhY3Rpb25EdXJhYmlsaXR5LCBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gJ3JlYWRvbmx5JylcbiAgICAgICAgICAgICAgICBzdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5UHJvcHMgPSAoX2EgPSBkYnNjaGVtYVtzdG9yZU5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EueVByb3BzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeVByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lcyA9IHN0b3JlTmFtZXMuY29uY2F0KHlQcm9wcy5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudXBkYXRlc1RhYmxlOyB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICAgICAgdGhpcy5zdG9yZU5hbWVzID0gc3RvcmVOYW1lcztcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hID0gZGJzY2hlbWE7XG4gICAgICAgICAgICB0aGlzLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSA9IGNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eTtcbiAgICAgICAgICAgIHRoaXMuaWRidHJhbnMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbiA9IEV2ZW50cyh0aGlzLCBcImNvbXBsZXRlXCIsIFwiZXJyb3JcIiwgXCJhYm9ydFwiKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50IHx8IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZWN1bG9jayA9IDA7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja2VkRnVuY3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3dhaXRpbmdGb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ1F1ZXVlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3NwaW5Db3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0aW9uID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRpb24udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMub24uY29tcGxldGUuZmlyZSgpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQWN0aXZlID0gX3RoaXMuYWN0aXZlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uLmVycm9yLmZpcmUoZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFyZW50ID9cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGFyZW50Ll9yZWplY3QoZSkgOlxuICAgICAgICAgICAgICAgICAgICB3YXNBY3RpdmUgJiYgX3RoaXMuaWRidHJhbnMgJiYgX3RoaXMuaWRidHJhbnMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUluZGV4U3BlYyhuYW1lLCBrZXlQYXRoLCB1bmlxdWUsIG11bHRpLCBhdXRvLCBjb21wb3VuZCwgaXNQcmltS2V5LCB0eXBlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAga2V5UGF0aDoga2V5UGF0aCxcbiAgICAgICAgICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgICAgICAgICAgbXVsdGk6IG11bHRpLFxuICAgICAgICAgICAgYXV0bzogYXV0byxcbiAgICAgICAgICAgIGNvbXBvdW5kOiBjb21wb3VuZCxcbiAgICAgICAgICAgIHNyYzogKHVuaXF1ZSAmJiAhaXNQcmltS2V5ID8gJyYnIDogJycpICsgKG11bHRpID8gJyonIDogJycpICsgKGF1dG8gPyBcIisrXCIgOiBcIlwiKSArIG5hbWVGcm9tS2V5UGF0aChrZXlQYXRoKSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbmFtZUZyb21LZXlQYXRoKGtleVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICBrZXlQYXRoIDpcbiAgICAgICAgICAgIGtleVBhdGggPyAoJ1snICsgW10uam9pbi5jYWxsKGtleVBhdGgsICcrJykgKyAnXScpIDogXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJsZVNjaGVtYShuYW1lLCBwcmltS2V5LCBpbmRleGVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgcHJpbUtleTogcHJpbUtleSxcbiAgICAgICAgICAgIGluZGV4ZXM6IGluZGV4ZXMsXG4gICAgICAgICAgICBtYXBwZWRDbGFzczogbnVsbCxcbiAgICAgICAgICAgIGlkeEJ5TmFtZTogYXJyYXlUb09iamVjdChpbmRleGVzLCBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIFtpbmRleC5uYW1lLCBpbmRleF07IH0pLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhZmFyaU11bHRpU3RvcmVGaXgoc3RvcmVOYW1lcykge1xuICAgICAgICByZXR1cm4gc3RvcmVOYW1lcy5sZW5ndGggPT09IDEgPyBzdG9yZU5hbWVzWzBdIDogc3RvcmVOYW1lcztcbiAgICB9XG4gICAgdmFyIGdldE1heEtleSA9IGZ1bmN0aW9uIChJZGJLZXlSYW5nZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgSWRiS2V5UmFuZ2Uub25seShbW11dKTtcbiAgICAgICAgICAgIGdldE1heEtleSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtbXV07IH07XG4gICAgICAgICAgICByZXR1cm4gW1tdXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZ2V0TWF4S2V5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF4U3RyaW5nOyB9O1xuICAgICAgICAgICAgcmV0dXJuIG1heFN0cmluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRLZXlFeHRyYWN0b3Ioa2V5UGF0aCkge1xuICAgICAgICBpZiAoa2V5UGF0aCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGdldFNpbmdsZVBhdGhLZXlFeHRyYWN0b3Ioa2V5UGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gZ2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aCk7IH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2luZ2xlUGF0aEtleUV4dHJhY3RvcihrZXlQYXRoKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGtleVBhdGguc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9ialtrZXlQYXRoXTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBnZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoKTsgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5aWZ5KGFycmF5TGlrZSkge1xuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChhcnJheUxpa2UpO1xuICAgIH1cbiAgICB2YXIgX2lkX2NvdW50ZXIgPSAwO1xuICAgIGZ1bmN0aW9uIGdldEtleVBhdGhBbGlhcyhrZXlQYXRoKSB7XG4gICAgICAgIHJldHVybiBrZXlQYXRoID09IG51bGwgP1xuICAgICAgICAgICAgXCI6aWRcIiA6XG4gICAgICAgICAgICB0eXBlb2Yga2V5UGF0aCA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIGtleVBhdGggOlxuICAgICAgICAgICAgICAgIFwiW1wiLmNvbmNhdChrZXlQYXRoLmpvaW4oJysnKSwgXCJdXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEQkNvcmUoZGIsIElkYktleVJhbmdlLCB0bXBUcmFucykge1xuICAgICAgICBmdW5jdGlvbiBleHRyYWN0U2NoZW1hKGRiLCB0cmFucykge1xuICAgICAgICAgICAgdmFyIHRhYmxlcyA9IGFycmF5aWZ5KGRiLm9iamVjdFN0b3JlTmFtZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGVzOiB0YWJsZXMubWFwKGZ1bmN0aW9uICh0YWJsZSkgeyByZXR1cm4gdHJhbnMub2JqZWN0U3RvcmUodGFibGUpOyB9KS5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aCA9IHN0b3JlLmtleVBhdGgsIGF1dG9JbmNyZW1lbnQgPSBzdG9yZS5hdXRvSW5jcmVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvdW5kID0gaXNBcnJheShrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXRib3VuZCA9IGtleVBhdGggPT0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEJ5S2V5UGF0aCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdG9yZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlLZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmltYXJ5S2V5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRib3VuZDogb3V0Ym91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvdW5kOiBjb21wb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5UGF0aDoga2V5UGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0luY3JlbWVudDogYXV0b0luY3JlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0S2V5OiBnZXRLZXlFeHRyYWN0b3Ioa2V5UGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXM6IGFycmF5aWZ5KHN0b3JlLmluZGV4TmFtZXMpLm1hcChmdW5jdGlvbiAoaW5kZXhOYW1lKSB7IHJldHVybiBzdG9yZS5pbmRleChpbmRleE5hbWUpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGluZGV4Lm5hbWUsIHVuaXF1ZSA9IGluZGV4LnVuaXF1ZSwgbXVsdGlFbnRyeSA9IGluZGV4Lm11bHRpRW50cnksIGtleVBhdGggPSBpbmRleC5rZXlQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG91bmQgPSBpc0FycmF5KGtleVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvdW5kOiBjb21wb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVBhdGg6IGtleVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWU6IHVuaXF1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpRW50cnk6IG11bHRpRW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0S2V5OiBnZXRLZXlFeHRyYWN0b3Ioa2V5UGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhCeUtleVBhdGhbZ2V0S2V5UGF0aEFsaWFzKGtleVBhdGgpXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRJbmRleEJ5S2V5UGF0aDogZnVuY3Rpb24gKGtleVBhdGgpIHsgcmV0dXJuIGluZGV4QnlLZXlQYXRoW2dldEtleVBhdGhBbGlhcyhrZXlQYXRoKV07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleEJ5S2V5UGF0aFtcIjppZFwiXSA9IHJlc3VsdC5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleVBhdGggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QnlLZXlQYXRoW2dldEtleVBhdGhBbGlhcyhrZXlQYXRoKV0gPSByZXN1bHQucHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYXNHZXRBbGw6IHRhYmxlcy5sZW5ndGggPiAwICYmICgnZ2V0QWxsJyBpbiB0cmFucy5vYmplY3RTdG9yZSh0YWJsZXNbMF0pKSAmJlxuICAgICAgICAgICAgICAgICAgICAhKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICEvKENocm9tZVxcL3xFZGdlXFwvKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgW10uY29uY2F0KG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1NhZmFyaVxcLyhcXGQqKS8pKVsxXSA8IDYwNClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZUlEQktleVJhbmdlKHJhbmdlKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UudHlwZSA9PT0gMyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocmFuZ2UudHlwZSA9PT0gNCApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbmV2ZXIgdHlwZSB0byBJREJLZXlSYW5nZVwiKTtcbiAgICAgICAgICAgIHZhciBsb3dlciA9IHJhbmdlLmxvd2VyLCB1cHBlciA9IHJhbmdlLnVwcGVyLCBsb3dlck9wZW4gPSByYW5nZS5sb3dlck9wZW4sIHVwcGVyT3BlbiA9IHJhbmdlLnVwcGVyT3BlbjtcbiAgICAgICAgICAgIHZhciBpZGJSYW5nZSA9IGxvd2VyID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHVwcGVyID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgSWRiS2V5UmFuZ2UudXBwZXJCb3VuZCh1cHBlciwgISF1cHBlck9wZW4pIDpcbiAgICAgICAgICAgICAgICB1cHBlciA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgSWRiS2V5UmFuZ2UubG93ZXJCb3VuZChsb3dlciwgISFsb3dlck9wZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgSWRiS2V5UmFuZ2UuYm91bmQobG93ZXIsIHVwcGVyLCAhIWxvd2VyT3BlbiwgISF1cHBlck9wZW4pO1xuICAgICAgICAgICAgcmV0dXJuIGlkYlJhbmdlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURiQ29yZVRhYmxlKHRhYmxlU2NoZW1hKSB7XG4gICAgICAgICAgICB2YXIgdGFibGVOYW1lID0gdGFibGVTY2hlbWEubmFtZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG11dGF0ZShfYSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFucyA9IF9hLnRyYW5zLCB0eXBlID0gX2EudHlwZSwga2V5cyA9IF9hLmtleXMsIHZhbHVlcyA9IF9hLnZhbHVlcywgcmFuZ2UgPSBfYS5yYW5nZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnMub2JqZWN0U3RvcmUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dGJvdW5kID0gc3RvcmUua2V5UGF0aCA9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNBZGRPclB1dCA9IHR5cGUgPT09IFwicHV0XCIgfHwgdHlwZSA9PT0gXCJhZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FkZE9yUHV0ICYmIHR5cGUgIT09ICdkZWxldGUnICYmIHR5cGUgIT09ICdkZWxldGVSYW5nZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wZXJhdGlvbiB0eXBlOiBcIiArIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gKGtleXMgfHwgdmFsdWVzIHx8IHsgbGVuZ3RoOiAxIH0pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMgJiYgdmFsdWVzICYmIGtleXMubGVuZ3RoICE9PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBrZXlzIGFycmF5IG11c3QgaGF2ZSBzYW1lIGxlbmd0aCBhcyBnaXZlbiB2YWx1ZXMgYXJyYXkuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IG51bUZhaWx1cmVzOiAwLCBmYWlsdXJlczoge30sIHJlc3VsdHM6IFtdLCBsYXN0UmVzdWx0OiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXE7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXFzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWlsdXJlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtRmFpbHVyZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bUZhaWx1cmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RlbGV0ZVJhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlLnR5cGUgPT09IDQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgbnVtRmFpbHVyZXM6IG51bUZhaWx1cmVzLCBmYWlsdXJlczogZmFpbHVyZXMsIHJlc3VsdHM6IFtdLCBsYXN0UmVzdWx0OiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UudHlwZSA9PT0gMyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxcy5wdXNoKHJlcSA9IHN0b3JlLmNsZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXMucHVzaChyZXEgPSBzdG9yZS5kZWxldGUobWFrZUlEQktleVJhbmdlKHJhbmdlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gaXNBZGRPclB1dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0Ym91bmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVzLCBrZXlzXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZXMsIG51bGxdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2V5cywgbnVsbF0sIGFyZ3MxID0gX2FbMF0sIGFyZ3MyID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBZGRPclB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxcy5wdXNoKHJlcSA9IChhcmdzMiAmJiBhcmdzMltpXSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlW3R5cGVdKGFyZ3MxW2ldLCBhcmdzMltpXSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVbdHlwZV0oYXJnczFbaV0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxcy5wdXNoKHJlcSA9IHN0b3JlW3R5cGVdKGFyZ3MxW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXEsIGkpIHsgcmV0dXJuIHJlcS5lcnJvciAhPSBudWxsICYmIChmYWlsdXJlc1tpXSA9IHJlcS5lcnJvcik7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtRmFpbHVyZXM6IG51bUZhaWx1cmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVzOiBmYWlsdXJlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiB0eXBlID09PSBcImRlbGV0ZVwiID8ga2V5cyA6IHJlcXMubWFwKGZ1bmN0aW9uIChyZXEpIHsgcmV0dXJuIHJlcS5yZXN1bHQ7IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSZXN1bHQ6IGxhc3RSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5DdXJzb3IoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnMgPSBfYS50cmFucywgdmFsdWVzID0gX2EudmFsdWVzLCBxdWVyeSA9IF9hLnF1ZXJ5LCByZXZlcnNlID0gX2EucmV2ZXJzZSwgdW5pcXVlID0gX2EudW5pcXVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSB3cmFwKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBxdWVyeS5pbmRleCwgcmFuZ2UgPSBxdWVyeS5yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnMub2JqZWN0U3RvcmUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGluZGV4LmlzUHJpbWFyeUtleSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5pbmRleChpbmRleC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHJldmVyc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXZ1bmlxdWVcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2XCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5leHR1bmlxdWVcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXh0XCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSB2YWx1ZXMgfHwgISgnb3BlbktleUN1cnNvcicgaW4gc291cmNlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2Uub3BlbkN1cnNvcihtYWtlSURCS2V5UmFuZ2UocmFuZ2UpLCBkaXJlY3Rpb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5vcGVuS2V5Q3Vyc29yKG1ha2VJREJLZXlSYW5nZShyYW5nZSksIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSB3cmFwKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvciA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLl9fX2lkID0gKytfaWRfY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2N1cnNvckNvbnRpbnVlID0gY3Vyc29yLmNvbnRpbnVlLmJpbmQoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5ID0gY3Vyc29yLmNvbnRpbnVlUHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkgPSBfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5LmJpbmQoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfY3Vyc29yQWR2YW5jZSA9IGN1cnNvci5hZHZhbmNlLmJpbmQoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb1Rocm93Q3Vyc29ySXNOb3RTdGFydGVkID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDdXJzb3Igbm90IHN0YXJ0ZWRcIik7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9UaHJvd0N1cnNvcklzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ3Vyc29yIG5vdCBzdG9wcGVkXCIpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnRyYW5zID0gdHJhbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Iuc3RvcCA9IGN1cnNvci5jb250aW51ZSA9IGN1cnNvci5jb250aW51ZVByaW1hcnlLZXkgPSBjdXJzb3IuYWR2YW5jZSA9IGRvVGhyb3dDdXJzb3JJc05vdFN0YXJ0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuZmFpbCA9IHdyYXAocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvdE9uZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ290T25lLS0gPyBfdGhpcy5jb250aW51ZSgpIDogX3RoaXMuc3RvcCgpOyB9KS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Iuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlSXRlcmF0aW9uLCByZWplY3RJdGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUl0ZXJhdGlvbiA9IHdyYXAocmVzb2x2ZUl0ZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdEl0ZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5mYWlsID0gcmVqZWN0SXRlcmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Iuc3RvcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0b3AgPSBjdXJzb3IuY29udGludWUgPSBjdXJzb3IuY29udGludWVQcmltYXJ5S2V5ID0gY3Vyc29yLmFkdmFuY2UgPSBkb1Rocm93Q3Vyc29ySXNTdG9wcGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUl0ZXJhdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGd1YXJkZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuZmFpbChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0YXJ0ID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDdXJzb3IgYmVoaW5kIGxhc3QgZW50cnlcIik7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Iuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gd3JhcChmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGd1YXJkZWRDYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlID0gX2N1cnNvckNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZVByaW1hcnlLZXkgPSBfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlID0gX2N1cnNvckFkdmFuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdGlvblByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3IpO1xuICAgICAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcXVlcnkoaGFzR2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFucyA9IHJlcXVlc3QudHJhbnMsIHZhbHVlcyA9IHJlcXVlc3QudmFsdWVzLCBsaW1pdCA9IHJlcXVlc3QubGltaXQsIHF1ZXJ5ID0gcmVxdWVzdC5xdWVyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub25JbmZpbml0TGltaXQgPSBsaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHF1ZXJ5LmluZGV4LCByYW5nZSA9IHF1ZXJ5LnJhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnMub2JqZWN0U3RvcmUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBpbmRleC5pc1ByaW1hcnlLZXkgPyBzdG9yZSA6IHN0b3JlLmluZGV4KGluZGV4Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkYktleVJhbmdlID0gbWFrZUlEQktleVJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IHJlc3VsdDogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzR2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHZhbHVlcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5nZXRBbGwoaWRiS2V5UmFuZ2UsIG5vbkluZmluaXRMaW1pdCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0QWxsS2V5cyhpZGJLZXlSYW5nZSwgbm9uSW5maW5pdExpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiByZXNvbHZlKHsgcmVzdWx0OiBldmVudC50YXJnZXQucmVzdWx0IH0pOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRfMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcV8xID0gdmFsdWVzIHx8ICEoJ29wZW5LZXlDdXJzb3InIGluIHNvdXJjZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2Uub3BlbkN1cnNvcihpZGJLZXlSYW5nZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2Uub3BlbktleUN1cnNvcihpZGJLZXlSYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxXzEub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXFfMS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyByZXN1bHQ6IHJlc3VsdF8xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRfMS5wdXNoKHZhbHVlcyA/IGN1cnNvci52YWx1ZSA6IGN1cnNvci5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCsrY291bnRfMSA9PT0gbGltaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IHJlc3VsdDogcmVzdWx0XzEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxXzEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICAgICAgc2NoZW1hOiB0YWJsZVNjaGVtYSxcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG11dGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRNYW55OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zID0gX2EudHJhbnMsIGtleXMgPSBfYS5rZXlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHdyYXAocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFucy5vYmplY3RTdG9yZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja0NvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVzdWx0W3JlcS5fcG9zXSA9IHJlcS5yZXN1bHQpICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKytjYWxsYmFja0NvdW50ID09PSBrZXlDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvckhhbmRsZXIgPSBldmVudFJlamVjdEhhbmRsZXIocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxID0gc3RvcmUuZ2V0KGtleXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEuX3BvcyA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBzdWNjZXNzSGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsra2V5Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleUNvdW50ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnMgPSBfYS50cmFucywga2V5ID0gX2Eua2V5O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHdyYXAocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFucy5vYmplY3RTdG9yZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5KGhhc0dldEFsbCksXG4gICAgICAgICAgICAgICAgb3BlbkN1cnNvcjogb3BlbkN1cnNvcixcbiAgICAgICAgICAgICAgICBjb3VudDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IF9hLnF1ZXJ5LCB0cmFucyA9IF9hLnRyYW5zO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBxdWVyeS5pbmRleCwgcmFuZ2UgPSBxdWVyeS5yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zLm9iamVjdFN0b3JlKHRhYmxlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gaW5kZXguaXNQcmltYXJ5S2V5ID8gc3RvcmUgOiBzdG9yZS5pbmRleChpbmRleC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGJLZXlSYW5nZSA9IG1ha2VJREJLZXlSYW5nZShyYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gaWRiS2V5UmFuZ2UgPyBzb3VyY2UuY291bnQoaWRiS2V5UmFuZ2UpIDogc291cmNlLmNvdW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gd3JhcChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIHJlc29sdmUoZXYudGFyZ2V0LnJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBldmVudFJlamVjdEhhbmRsZXIocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBleHRyYWN0U2NoZW1hKGRiLCB0bXBUcmFucyksIHNjaGVtYSA9IF9hLnNjaGVtYSwgaGFzR2V0QWxsID0gX2EuaGFzR2V0QWxsO1xuICAgICAgICB2YXIgdGFibGVzID0gc2NoZW1hLnRhYmxlcy5tYXAoZnVuY3Rpb24gKHRhYmxlU2NoZW1hKSB7IHJldHVybiBjcmVhdGVEYkNvcmVUYWJsZSh0YWJsZVNjaGVtYSk7IH0pO1xuICAgICAgICB2YXIgdGFibGVNYXAgPSB7fTtcbiAgICAgICAgdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7IHJldHVybiB0YWJsZU1hcFt0YWJsZS5uYW1lXSA9IHRhYmxlOyB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YWNrOiBcImRiY29yZVwiLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb246IGRiLnRyYW5zYWN0aW9uLmJpbmQoZGIpLFxuICAgICAgICAgICAgdGFibGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhYmxlTWFwW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUYWJsZSAnXCIuY29uY2F0KG5hbWUsIFwiJyBub3QgZm91bmRcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZU1hcFtuYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBNSU5fS0VZOiAtSW5maW5pdHksXG4gICAgICAgICAgICBNQVhfS0VZOiBnZXRNYXhLZXkoSWRiS2V5UmFuZ2UpLFxuICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlU3RhY2soc3RhY2tJbXBsLCBtaWRkbGV3YXJlcykge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZXMucmVkdWNlKGZ1bmN0aW9uIChkb3duLCBfYSkge1xuICAgICAgICAgICAgdmFyIGNyZWF0ZSA9IF9hLmNyZWF0ZTtcbiAgICAgICAgICAgIHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGRvd24pLCBjcmVhdGUoZG93bikpKTtcbiAgICAgICAgfSwgc3RhY2tJbXBsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTWlkZGxld2FyZVN0YWNrcyhtaWRkbGV3YXJlcywgaWRiZGIsIF9hLCB0bXBUcmFucykge1xuICAgICAgICB2YXIgSURCS2V5UmFuZ2UgPSBfYS5JREJLZXlSYW5nZTsgX2EuaW5kZXhlZERCO1xuICAgICAgICB2YXIgZGJjb3JlID0gY3JlYXRlTWlkZGxld2FyZVN0YWNrKGNyZWF0ZURCQ29yZShpZGJkYiwgSURCS2V5UmFuZ2UsIHRtcFRyYW5zKSwgbWlkZGxld2FyZXMuZGJjb3JlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRiY29yZTogZGJjb3JlXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWlkZGxld2FyZVN0YWNrcyhkYiwgdG1wVHJhbnMpIHtcbiAgICAgICAgdmFyIGlkYmRiID0gdG1wVHJhbnMuZGI7XG4gICAgICAgIHZhciBzdGFja3MgPSBjcmVhdGVNaWRkbGV3YXJlU3RhY2tzKGRiLl9taWRkbGV3YXJlcywgaWRiZGIsIGRiLl9kZXBzLCB0bXBUcmFucyk7XG4gICAgICAgIGRiLmNvcmUgPSBzdGFja3MuZGJjb3JlO1xuICAgICAgICBkYi50YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgICAgIHZhciB0YWJsZU5hbWUgPSB0YWJsZS5uYW1lO1xuICAgICAgICAgICAgaWYgKGRiLmNvcmUuc2NoZW1hLnRhYmxlcy5zb21lKGZ1bmN0aW9uICh0YmwpIHsgcmV0dXJuIHRibC5uYW1lID09PSB0YWJsZU5hbWU7IH0pKSB7XG4gICAgICAgICAgICAgICAgdGFibGUuY29yZSA9IGRiLmNvcmUudGFibGUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZGJbdGFibGVOYW1lXSBpbnN0YW5jZW9mIGRiLlRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiW3RhYmxlTmFtZV0uY29yZSA9IHRhYmxlLmNvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBcGlPblBsYWNlKGRiLCBvYmpzLCB0YWJsZU5hbWVzLCBkYnNjaGVtYSkge1xuICAgICAgICB0YWJsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYSA9IGRic2NoZW1hW3RhYmxlTmFtZV07XG4gICAgICAgICAgICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wRGVzYyA9IGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIHRhYmxlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wRGVzYyB8fCAoXCJ2YWx1ZVwiIGluIHByb3BEZXNjICYmIHByb3BEZXNjLnZhbHVlID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmogPT09IGRiLlRyYW5zYWN0aW9uLnByb3RvdHlwZSB8fCBvYmogaW5zdGFuY2VvZiBkYi5UcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcChvYmosIHRhYmxlTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy50YWJsZSh0YWJsZU5hbWUpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIHRhYmxlTmFtZSwgeyB2YWx1ZTogdmFsdWUsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbdGFibGVOYW1lXSA9IG5ldyBkYi5UYWJsZSh0YWJsZU5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhYmxlc0FwaShkYiwgb2Jqcykge1xuICAgICAgICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChvYmpba2V5XSBpbnN0YW5jZW9mIGRiLlRhYmxlKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb3dlclZlcnNpb25GaXJzdChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLl9jZmcudmVyc2lvbiAtIGIuX2NmZy52ZXJzaW9uO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydW5VcGdyYWRlcnMoZGIsIG9sZFZlcnNpb24sIGlkYlVwZ3JhZGVUcmFucywgcmVqZWN0KSB7XG4gICAgICAgIHZhciBnbG9iYWxTY2hlbWEgPSBkYi5fZGJTY2hlbWE7XG4gICAgICAgIGlmIChpZGJVcGdyYWRlVHJhbnMub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnJG1ldGEnKSAmJiAhZ2xvYmFsU2NoZW1hLiRtZXRhKSB7XG4gICAgICAgICAgICBnbG9iYWxTY2hlbWEuJG1ldGEgPSBjcmVhdGVUYWJsZVNjaGVtYShcIiRtZXRhXCIsIHBhcnNlSW5kZXhTeW50YXgoXCJcIilbMF0sIFtdKTtcbiAgICAgICAgICAgIGRiLl9zdG9yZU5hbWVzLnB1c2goJyRtZXRhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYW5zID0gZGIuX2NyZWF0ZVRyYW5zYWN0aW9uKCdyZWFkd3JpdGUnLCBkYi5fc3RvcmVOYW1lcywgZ2xvYmFsU2NoZW1hKTtcbiAgICAgICAgdHJhbnMuY3JlYXRlKGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgIHRyYW5zLl9jb21wbGV0aW9uLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIHZhciByZWplY3RUcmFuc2FjdGlvbiA9IHRyYW5zLl9yZWplY3QuYmluZCh0cmFucyk7XG4gICAgICAgIHZhciB0cmFuc2xlc3MgPSBQU0QudHJhbnNsZXNzIHx8IFBTRDtcbiAgICAgICAgbmV3U2NvcGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgUFNELnRyYW5zID0gdHJhbnM7XG4gICAgICAgICAgICBQU0QudHJhbnNsZXNzID0gdHJhbnNsZXNzO1xuICAgICAgICAgICAgaWYgKG9sZFZlcnNpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzKGdsb2JhbFNjaGVtYSkuZm9yRWFjaChmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhYmxlKGlkYlVwZ3JhZGVUcmFucywgdGFibGVOYW1lLCBnbG9iYWxTY2hlbWFbdGFibGVOYW1lXS5wcmltS2V5LCBnbG9iYWxTY2hlbWFbdGFibGVOYW1lXS5pbmRleGVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MoZGIsIGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgICAgICAgICAgRGV4aWVQcm9taXNlLmZvbGxvdyhmdW5jdGlvbiAoKSB7IHJldHVybiBkYi5vbi5wb3B1bGF0ZS5maXJlKHRyYW5zKTsgfSkuY2F0Y2gocmVqZWN0VHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzKGRiLCBpZGJVcGdyYWRlVHJhbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRFeGlzdGluZ1ZlcnNpb24oZGIsIHRyYW5zLCBvbGRWZXJzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAob2xkVmVyc2lvbikgeyByZXR1cm4gdXBkYXRlVGFibGVzQW5kSW5kZXhlcyhkYiwgb2xkVmVyc2lvbiwgdHJhbnMsIGlkYlVwZ3JhZGVUcmFucyk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3RUcmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEN1cnJlbnRWZXJzaW9uKGRiLCBpZGJVcGdyYWRlVHJhbnMpIHtcbiAgICAgICAgY3JlYXRlTWlzc2luZ1RhYmxlcyhkYi5fZGJTY2hlbWEsIGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgIGlmIChpZGJVcGdyYWRlVHJhbnMuZGIudmVyc2lvbiAlIDEwID09PSAwICYmICFpZGJVcGdyYWRlVHJhbnMub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnJG1ldGEnKSkge1xuICAgICAgICAgICAgaWRiVXBncmFkZVRyYW5zLmRiLmNyZWF0ZU9iamVjdFN0b3JlKCckbWV0YScpLmFkZChNYXRoLmNlaWwoKGlkYlVwZ3JhZGVUcmFucy5kYi52ZXJzaW9uIC8gMTApIC0gMSksICd2ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdsb2JhbFNjaGVtYSA9IGJ1aWxkR2xvYmFsU2NoZW1hKGRiLCBkYi5pZGJkYiwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICAgICAgYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMoZGIsIGRiLl9kYlNjaGVtYSwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICAgICAgdmFyIGRpZmYgPSBnZXRTY2hlbWFEaWZmKGdsb2JhbFNjaGVtYSwgZGIuX2RiU2NoZW1hKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAodGFibGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0YWJsZUNoYW5nZS5jaGFuZ2UubGVuZ3RoIHx8IHRhYmxlQ2hhbmdlLnJlY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIHBhdGNoIGluZGV4ZXMgb2YgdGFibGUgXCIuY29uY2F0KHRhYmxlQ2hhbmdlLm5hbWUsIFwiIGJlY2F1c2UgaXQgaGFzIGNoYW5nZXMgb24gdGhlIHR5cGUgb2YgaW5kZXggb3IgcHJpbWFyeSBrZXkuXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdm9pZCAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBpZGJVcGdyYWRlVHJhbnMub2JqZWN0U3RvcmUodGFibGVDaGFuZ2UubmFtZSk7XG4gICAgICAgICAgICB0YWJsZUNoYW5nZS5hZGQuZm9yRWFjaChmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiRGV4aWUgdXBncmFkZSBwYXRjaDogQ3JlYXRpbmcgbWlzc2luZyBpbmRleCBcIi5jb25jYXQodGFibGVDaGFuZ2UubmFtZSwgXCIuXCIpLmNvbmNhdChpZHguc3JjKSk7XG4gICAgICAgICAgICAgICAgYWRkSW5kZXgoc3RvcmUsIGlkeCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGRpZmYuY2hhbmdlOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHRhYmxlQ2hhbmdlID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKHRhYmxlQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFeGlzdGluZ1ZlcnNpb24oZGIsIHRyYW5zLCBvbGRWZXJzaW9uKSB7XG4gICAgICAgIGlmICh0cmFucy5zdG9yZU5hbWVzLmluY2x1ZGVzKCckbWV0YScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnMudGFibGUoJyRtZXRhJykuZ2V0KCd2ZXJzaW9uJykudGhlbihmdW5jdGlvbiAobWV0YVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YVZlcnNpb24gIT0gbnVsbCA/IG1ldGFWZXJzaW9uIDogb2xkVmVyc2lvbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKG9sZFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhYmxlc0FuZEluZGV4ZXMoZGIsIG9sZFZlcnNpb24sIHRyYW5zLCBpZGJVcGdyYWRlVHJhbnMpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHZhciB2ZXJzaW9ucyA9IGRiLl92ZXJzaW9ucztcbiAgICAgICAgdmFyIGdsb2JhbFNjaGVtYSA9IGRiLl9kYlNjaGVtYSA9IGJ1aWxkR2xvYmFsU2NoZW1hKGRiLCBkYi5pZGJkYiwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICAgICAgdmFyIHZlcnNUb1J1biA9IHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gdi5fY2ZnLnZlcnNpb24gPj0gb2xkVmVyc2lvbjsgfSk7XG4gICAgICAgIGlmICh2ZXJzVG9SdW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2ZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZFNjaGVtYSA9IGdsb2JhbFNjaGVtYTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U2NoZW1hID0gdmVyc2lvbi5fY2ZnLmRic2NoZW1hO1xuICAgICAgICAgICAgICAgIGFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzKGRiLCBvbGRTY2hlbWEsIGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgICAgICAgICAgYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMoZGIsIG5ld1NjaGVtYSwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxTY2hlbWEgPSBkYi5fZGJTY2hlbWEgPSBuZXdTY2hlbWE7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBnZXRTY2hlbWFEaWZmKG9sZFNjaGVtYSwgbmV3U2NoZW1hKTtcbiAgICAgICAgICAgICAgICBkaWZmLmFkZC5mb3JFYWNoKGZ1bmN0aW9uICh0dXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYWJsZShpZGJVcGdyYWRlVHJhbnMsIHR1cGxlWzBdLCB0dXBsZVsxXS5wcmltS2V5LCB0dXBsZVsxXS5pbmRleGVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaWZmLmNoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5yZWNyZWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuVXBncmFkZShcIk5vdCB5ZXQgc3VwcG9ydCBmb3IgY2hhbmdpbmcgcHJpbWFyeSBrZXlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVfMSA9IGlkYlVwZ3JhZGVUcmFucy5vYmplY3RTdG9yZShjaGFuZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuYWRkLmZvckVhY2goZnVuY3Rpb24gKGlkeCkgeyByZXR1cm4gYWRkSW5kZXgoc3RvcmVfMSwgaWR4KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuY2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlXzEuZGVsZXRlSW5kZXgoaWR4Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEluZGV4KHN0b3JlXzEsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5kZWwuZm9yRWFjaChmdW5jdGlvbiAoaWR4TmFtZSkgeyByZXR1cm4gc3RvcmVfMS5kZWxldGVJbmRleChpZHhOYW1lKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudFVwZ3JhZGUgPSB2ZXJzaW9uLl9jZmcuY29udGVudFVwZ3JhZGU7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRVcGdyYWRlICYmIHZlcnNpb24uX2NmZy52ZXJzaW9uID4gb2xkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MoZGIsIGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zLl9tZW1vaXplZFRhYmxlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBncmFkZVNjaGVtYV8xID0gc2hhbGxvd0Nsb25lKG5ld1NjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYuZGVsLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGdyYWRlU2NoZW1hXzFbdGFibGVdID0gb2xkU2NoZW1hW3RhYmxlXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRhYmxlc0FwaShkYiwgW2RiLlRyYW5zYWN0aW9uLnByb3RvdHlwZV0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRBcGlPblBsYWNlKGRiLCBbZGIuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSwga2V5cyh1cGdyYWRlU2NoZW1hXzEpLCB1cGdyYWRlU2NoZW1hXzEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFucy5zY2hlbWEgPSB1cGdyYWRlU2NoZW1hXzE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VXBncmFkZUlzQXN5bmNfMSA9IGlzQXN5bmNGdW5jdGlvbihjb250ZW50VXBncmFkZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VXBncmFkZUlzQXN5bmNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWVfMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2VGb2xsb3dlZCA9IERleGllUHJvbWlzZS5mb2xsb3coZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWVfMSA9IGNvbnRlbnRVcGdyYWRlKHRyYW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRVcGdyYWRlSXNBc3luY18xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyZW1lbnRvciA9IGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzLmJpbmQobnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlXzEudGhlbihkZWNyZW1lbnRvciwgZGVjcmVtZW50b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmV0dXJuVmFsdWVfMSAmJiB0eXBlb2YgcmV0dXJuVmFsdWVfMS50aGVuID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgICAgIERleGllUHJvbWlzZS5yZXNvbHZlKHJldHVyblZhbHVlXzEpIDogcHJvbWlzZUZvbGxvd2VkLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV0dXJuVmFsdWVfMTsgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoaWRidHJhbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U2NoZW1hID0gdmVyc2lvbi5fY2ZnLmRic2NoZW1hO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVJlbW92ZWRUYWJsZXMobmV3U2NoZW1hLCBpZGJ0cmFucyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFibGVzQXBpKGRiLCBbZGIuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSk7XG4gICAgICAgICAgICAgICAgc2V0QXBpT25QbGFjZShkYiwgW2RiLlRyYW5zYWN0aW9uLnByb3RvdHlwZV0sIGRiLl9zdG9yZU5hbWVzLCBkYi5fZGJTY2hlbWEpO1xuICAgICAgICAgICAgICAgIHRyYW5zLnNjaGVtYSA9IGRiLl9kYlNjaGVtYTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoaWRidHJhbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGIuaWRiZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnJG1ldGEnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5jZWlsKGRiLmlkYmRiLnZlcnNpb24gLyAxMCkgPT09IHZlcnNpb24uX2NmZy52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5pZGJkYi5kZWxldGVPYmplY3RTdG9yZSgnJG1ldGEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYi5fZGJTY2hlbWEuJG1ldGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5fc3RvcmVOYW1lcyA9IGRiLl9zdG9yZU5hbWVzLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZSAhPT0gJyRtZXRhJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGJ0cmFucy5vYmplY3RTdG9yZSgnJG1ldGEnKS5wdXQodmVyc2lvbi5fY2ZnLnZlcnNpb24sICd2ZXJzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHJ1blF1ZXVlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlLmxlbmd0aCA/IERleGllUHJvbWlzZS5yZXNvbHZlKHF1ZXVlLnNoaWZ0KCkodHJhbnMuaWRidHJhbnMpKS50aGVuKHJ1blF1ZXVlKSA6XG4gICAgICAgICAgICAgICAgRGV4aWVQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVuUXVldWUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZU1pc3NpbmdUYWJsZXMoZ2xvYmFsU2NoZW1hLCBpZGJVcGdyYWRlVHJhbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2NoZW1hRGlmZihvbGRTY2hlbWEsIG5ld1NjaGVtYSkge1xuICAgICAgICB2YXIgZGlmZiA9IHtcbiAgICAgICAgICAgIGRlbDogW10sXG4gICAgICAgICAgICBhZGQ6IFtdLFxuICAgICAgICAgICAgY2hhbmdlOiBbXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdGFibGU7XG4gICAgICAgIGZvciAodGFibGUgaW4gb2xkU2NoZW1hKSB7XG4gICAgICAgICAgICBpZiAoIW5ld1NjaGVtYVt0YWJsZV0pXG4gICAgICAgICAgICAgICAgZGlmZi5kZWwucHVzaCh0YWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh0YWJsZSBpbiBuZXdTY2hlbWEpIHtcbiAgICAgICAgICAgIHZhciBvbGREZWYgPSBvbGRTY2hlbWFbdGFibGVdLCBuZXdEZWYgPSBuZXdTY2hlbWFbdGFibGVdO1xuICAgICAgICAgICAgaWYgKCFvbGREZWYpIHtcbiAgICAgICAgICAgICAgICBkaWZmLmFkZC5wdXNoKFt0YWJsZSwgbmV3RGVmXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmOiBuZXdEZWYsXG4gICAgICAgICAgICAgICAgICAgIHJlY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYWRkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKChcbiAgICAgICAgICAgICAgICAnJyArIChvbGREZWYucHJpbUtleS5rZXlQYXRoIHx8ICcnKSkgIT09ICgnJyArIChuZXdEZWYucHJpbUtleS5rZXlQYXRoIHx8ICcnKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKG9sZERlZi5wcmltS2V5LmF1dG8gIT09IG5ld0RlZi5wcmltS2V5LmF1dG8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5yZWNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYuY2hhbmdlLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRJbmRleGVzID0gb2xkRGVmLmlkeEJ5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ZXMgPSBuZXdEZWYuaWR4QnlOYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWR4TmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpZHhOYW1lIGluIG9sZEluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3SW5kZXhlc1tpZHhOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuZGVsLnB1c2goaWR4TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpZHhOYW1lIGluIG5ld0luZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRJZHggPSBvbGRJbmRleGVzW2lkeE5hbWVdLCBuZXdJZHggPSBuZXdJbmRleGVzW2lkeE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvbGRJZHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmFkZC5wdXNoKG5ld0lkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRJZHguc3JjICE9PSBuZXdJZHguc3JjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5jaGFuZ2UucHVzaChuZXdJZHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UuZGVsLmxlbmd0aCA+IDAgfHwgY2hhbmdlLmFkZC5sZW5ndGggPiAwIHx8IGNoYW5nZS5jaGFuZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZi5jaGFuZ2UucHVzaChjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWZmO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJsZShpZGJ0cmFucywgdGFibGVOYW1lLCBwcmltS2V5LCBpbmRleGVzKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IGlkYnRyYW5zLmRiLmNyZWF0ZU9iamVjdFN0b3JlKHRhYmxlTmFtZSwgcHJpbUtleS5rZXlQYXRoID9cbiAgICAgICAgICAgIHsga2V5UGF0aDogcHJpbUtleS5rZXlQYXRoLCBhdXRvSW5jcmVtZW50OiBwcmltS2V5LmF1dG8gfSA6XG4gICAgICAgICAgICB7IGF1dG9JbmNyZW1lbnQ6IHByaW1LZXkuYXV0byB9KTtcbiAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHsgcmV0dXJuIGFkZEluZGV4KHN0b3JlLCBpZHgpOyB9KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVNaXNzaW5nVGFibGVzKG5ld1NjaGVtYSwgaWRidHJhbnMpIHtcbiAgICAgICAga2V5cyhuZXdTY2hlbWEpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgaWYgKCFpZGJ0cmFucy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHRhYmxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0RleGllOiBDcmVhdGluZyBtaXNzaW5nIHRhYmxlJywgdGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVUYWJsZShpZGJ0cmFucywgdGFibGVOYW1lLCBuZXdTY2hlbWFbdGFibGVOYW1lXS5wcmltS2V5LCBuZXdTY2hlbWFbdGFibGVOYW1lXS5pbmRleGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlbW92ZWRUYWJsZXMobmV3U2NoZW1hLCBpZGJ0cmFucykge1xuICAgICAgICBbXS5zbGljZS5jYWxsKGlkYnRyYW5zLmRiLm9iamVjdFN0b3JlTmFtZXMpLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NjaGVtYVtzdG9yZU5hbWVdID09IG51bGwgJiYgaWRidHJhbnMuZGIuZGVsZXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEluZGV4KHN0b3JlLCBpZHgpIHtcbiAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoaWR4Lm5hbWUsIGlkeC5rZXlQYXRoLCB7IHVuaXF1ZTogaWR4LnVuaXF1ZSwgbXVsdGlFbnRyeTogaWR4Lm11bHRpIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZEdsb2JhbFNjaGVtYShkYiwgaWRiZGIsIHRtcFRyYW5zKSB7XG4gICAgICAgIHZhciBnbG9iYWxTY2hlbWEgPSB7fTtcbiAgICAgICAgdmFyIGRiU3RvcmVOYW1lcyA9IHNsaWNlKGlkYmRiLm9iamVjdFN0b3JlTmFtZXMsIDApO1xuICAgICAgICBkYlN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0bXBUcmFucy5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgdmFyIGtleVBhdGggPSBzdG9yZS5rZXlQYXRoO1xuICAgICAgICAgICAgdmFyIHByaW1LZXkgPSBjcmVhdGVJbmRleFNwZWMobmFtZUZyb21LZXlQYXRoKGtleVBhdGgpLCBrZXlQYXRoIHx8IFwiXCIsIHRydWUsIGZhbHNlLCAhIXN0b3JlLmF1dG9JbmNyZW1lbnQsIGtleVBhdGggJiYgdHlwZW9mIGtleVBhdGggIT09IFwic3RyaW5nXCIsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3RvcmUuaW5kZXhOYW1lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIHZhciBpZGJpbmRleCA9IHN0b3JlLmluZGV4KHN0b3JlLmluZGV4TmFtZXNbal0pO1xuICAgICAgICAgICAgICAgIGtleVBhdGggPSBpZGJpbmRleC5rZXlQYXRoO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGNyZWF0ZUluZGV4U3BlYyhpZGJpbmRleC5uYW1lLCBrZXlQYXRoLCAhIWlkYmluZGV4LnVuaXF1ZSwgISFpZGJpbmRleC5tdWx0aUVudHJ5LCBmYWxzZSwga2V5UGF0aCAmJiB0eXBlb2Yga2V5UGF0aCAhPT0gXCJzdHJpbmdcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbG9iYWxTY2hlbWFbc3RvcmVOYW1lXSA9IGNyZWF0ZVRhYmxlU2NoZW1hKHN0b3JlTmFtZSwgcHJpbUtleSwgaW5kZXhlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2xvYmFsU2NoZW1hO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFkR2xvYmFsU2NoZW1hKGRiLCBpZGJkYiwgdG1wVHJhbnMpIHtcbiAgICAgICAgZGIudmVybm8gPSBpZGJkYi52ZXJzaW9uIC8gMTA7XG4gICAgICAgIHZhciBnbG9iYWxTY2hlbWEgPSBkYi5fZGJTY2hlbWEgPSBidWlsZEdsb2JhbFNjaGVtYShkYiwgaWRiZGIsIHRtcFRyYW5zKTtcbiAgICAgICAgZGIuX3N0b3JlTmFtZXMgPSBzbGljZShpZGJkYi5vYmplY3RTdG9yZU5hbWVzLCAwKTtcbiAgICAgICAgc2V0QXBpT25QbGFjZShkYiwgW2RiLl9hbGxUYWJsZXNdLCBrZXlzKGdsb2JhbFNjaGVtYSksIGdsb2JhbFNjaGVtYSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZlcmlmeUluc3RhbGxlZFNjaGVtYShkYiwgdG1wVHJhbnMpIHtcbiAgICAgICAgdmFyIGluc3RhbGxlZFNjaGVtYSA9IGJ1aWxkR2xvYmFsU2NoZW1hKGRiLCBkYi5pZGJkYiwgdG1wVHJhbnMpO1xuICAgICAgICB2YXIgZGlmZiA9IGdldFNjaGVtYURpZmYoaW5zdGFsbGVkU2NoZW1hLCBkYi5fZGJTY2hlbWEpO1xuICAgICAgICByZXR1cm4gIShkaWZmLmFkZC5sZW5ndGggfHwgZGlmZi5jaGFuZ2Uuc29tZShmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGNoLmFkZC5sZW5ndGggfHwgY2guY2hhbmdlLmxlbmd0aDsgfSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGp1c3RUb0V4aXN0aW5nSW5kZXhOYW1lcyhkYiwgc2NoZW1hLCBpZGJ0cmFucykge1xuICAgICAgICB2YXIgc3RvcmVOYW1lcyA9IGlkYnRyYW5zLmRiLm9iamVjdFN0b3JlTmFtZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RvcmVOYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHN0b3JlTmFtZSA9IHN0b3JlTmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBpZGJ0cmFucy5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgZGIuX2hhc0dldEFsbCA9ICdnZXRBbGwnIGluIHN0b3JlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzdG9yZS5pbmRleE5hbWVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4TmFtZSA9IHN0b3JlLmluZGV4TmFtZXNbal07XG4gICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBzdG9yZS5pbmRleChpbmRleE5hbWUpLmtleVBhdGg7XG4gICAgICAgICAgICAgICAgdmFyIGRleGllTmFtZSA9IHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJyA/IGtleVBhdGggOiBcIltcIiArIHNsaWNlKGtleVBhdGgpLmpvaW4oJysnKSArIFwiXVwiO1xuICAgICAgICAgICAgICAgIGlmIChzY2hlbWFbc3RvcmVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhTcGVjID0gc2NoZW1hW3N0b3JlTmFtZV0uaWR4QnlOYW1lW2RleGllTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleFNwZWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4U3BlYy5uYW1lID0gaW5kZXhOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjaGVtYVtzdG9yZU5hbWVdLmlkeEJ5TmFtZVtkZXhpZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hW3N0b3JlTmFtZV0uaWR4QnlOYW1lW2luZGV4TmFtZV0gPSBpbmRleFNwZWM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiZcbiAgICAgICAgICAgICEvKENocm9tZVxcL3xFZGdlXFwvKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJlxuICAgICAgICAgICAgX2dsb2JhbC5Xb3JrZXJHbG9iYWxTY29wZSAmJiBfZ2xvYmFsIGluc3RhbmNlb2YgX2dsb2JhbC5Xb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgICAgICAgICAgW10uY29uY2F0KG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1NhZmFyaVxcLyhcXGQqKS8pKVsxXSA8IDYwNCkge1xuICAgICAgICAgICAgZGIuX2hhc0dldEFsbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlSW5kZXhTeW50YXgocHJpbUtleUFuZEluZGV4ZXMpIHtcbiAgICAgICAgcmV0dXJuIHByaW1LZXlBbmRJbmRleGVzLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpbmRleCwgaW5kZXhOdW0pIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciB0eXBlU3BsaXQgPSBpbmRleC5zcGxpdCgnOicpO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSAoX2EgPSB0eXBlU3BsaXRbMV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCk7XG4gICAgICAgICAgICBpbmRleCA9IHR5cGVTcGxpdFswXS50cmltKCk7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGluZGV4LnJlcGxhY2UoLyhbJipdfFxcK1xcKykvZywgXCJcIik7XG4gICAgICAgICAgICB2YXIga2V5UGF0aCA9IC9eXFxbLy50ZXN0KG5hbWUpID8gbmFtZS5tYXRjaCgvXlxcWyguKilcXF0kLylbMV0uc3BsaXQoJysnKSA6IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW5kZXhTcGVjKG5hbWUsIGtleVBhdGggfHwgbnVsbCwgL1xcJi8udGVzdChpbmRleCksIC9cXCovLnRlc3QoaW5kZXgpLCAvXFwrXFwrLy50ZXN0KGluZGV4KSwgaXNBcnJheShrZXlQYXRoKSwgaW5kZXhOdW0gPT09IDAsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgVmVyc2lvbiA9ICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWZXJzaW9uKCkge1xuICAgICAgICB9XG4gICAgICAgIFZlcnNpb24ucHJvdG90eXBlLl9jcmVhdGVUYWJsZVNjaGVtYSA9IGZ1bmN0aW9uIChuYW1lLCBwcmltS2V5LCBpbmRleGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVGFibGVTY2hlbWEobmFtZSwgcHJpbUtleSwgaW5kZXhlcyk7XG4gICAgICAgIH07XG4gICAgICAgIFZlcnNpb24ucHJvdG90eXBlLl9wYXJzZUluZGV4U3ludGF4ID0gZnVuY3Rpb24gKHByaW1LZXlBbmRJbmRleGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbmRleFN5bnRheChwcmltS2V5QW5kSW5kZXhlcyk7XG4gICAgICAgIH07XG4gICAgICAgIFZlcnNpb24ucHJvdG90eXBlLl9wYXJzZVN0b3Jlc1NwZWMgPSBmdW5jdGlvbiAoc3RvcmVzLCBvdXRTY2hlbWEpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBrZXlzKHN0b3JlcykuZm9yRWFjaChmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3Jlc1t0YWJsZU5hbWVdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleGVzID0gX3RoaXMuX3BhcnNlSW5kZXhTeW50YXgoc3RvcmVzW3RhYmxlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpbUtleSA9IGluZGV4ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmltS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TY2hlbWEoJ0ludmFsaWQgc2NoZW1hIGZvciB0YWJsZSAnICsgdGFibGVOYW1lICsgJzogJyArIHN0b3Jlc1t0YWJsZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmltS2V5LnVuaXF1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmltS2V5Lm11bHRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuU2NoZW1hKCdQcmltYXJ5IGtleSBjYW5ub3QgYmUgbXVsdGlFbnRyeSonKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHguYXV0bylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TY2hlbWEoJ09ubHkgcHJpbWFyeSBrZXkgY2FuIGJlIG1hcmtlZCBhcyBhdXRvSW5jcmVtZW50ICgrKyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWR4LmtleVBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuU2NoZW1hKCdJbmRleCBtdXN0IGhhdmUgYSBuYW1lIGFuZCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGJsU2NoZW1hID0gX3RoaXMuX2NyZWF0ZVRhYmxlU2NoZW1hKHRhYmxlTmFtZSwgcHJpbUtleSwgaW5kZXhlcyk7XG4gICAgICAgICAgICAgICAgICAgIG91dFNjaGVtYVt0YWJsZU5hbWVdID0gdGJsU2NoZW1hO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBWZXJzaW9uLnByb3RvdHlwZS5zdG9yZXMgPSBmdW5jdGlvbiAoc3RvcmVzKSB7XG4gICAgICAgICAgICB2YXIgZGIgPSB0aGlzLmRiO1xuICAgICAgICAgICAgdGhpcy5fY2ZnLnN0b3Jlc1NvdXJjZSA9IHRoaXMuX2NmZy5zdG9yZXNTb3VyY2VcbiAgICAgICAgICAgICAgICA/IGV4dGVuZCh0aGlzLl9jZmcuc3RvcmVzU291cmNlLCBzdG9yZXMpXG4gICAgICAgICAgICAgICAgOiBzdG9yZXM7XG4gICAgICAgICAgICB2YXIgdmVyc2lvbnMgPSBkYi5fdmVyc2lvbnM7XG4gICAgICAgICAgICB2YXIgc3RvcmVzU3BlYyA9IHt9O1xuICAgICAgICAgICAgdmFyIGRic2NoZW1hID0ge307XG4gICAgICAgICAgICB2ZXJzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHN0b3Jlc1NwZWMsIHZlcnNpb24uX2NmZy5zdG9yZXNTb3VyY2UpO1xuICAgICAgICAgICAgICAgIGRic2NoZW1hID0gdmVyc2lvbi5fY2ZnLmRic2NoZW1hID0ge307XG4gICAgICAgICAgICAgICAgdmVyc2lvbi5fcGFyc2VTdG9yZXNTcGVjKHN0b3Jlc1NwZWMsIGRic2NoZW1hKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGIuX2RiU2NoZW1hID0gZGJzY2hlbWE7XG4gICAgICAgICAgICByZW1vdmVUYWJsZXNBcGkoZGIsIFtkYi5fYWxsVGFibGVzLCBkYiwgZGIuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSk7XG4gICAgICAgICAgICBzZXRBcGlPblBsYWNlKGRiLCBbZGIuX2FsbFRhYmxlcywgZGIsIGRiLlRyYW5zYWN0aW9uLnByb3RvdHlwZSwgdGhpcy5fY2ZnLnRhYmxlc10sIGtleXMoZGJzY2hlbWEpLCBkYnNjaGVtYSk7XG4gICAgICAgICAgICBkYi5fc3RvcmVOYW1lcyA9IGtleXMoZGJzY2hlbWEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIFZlcnNpb24ucHJvdG90eXBlLnVwZ3JhZGUgPSBmdW5jdGlvbiAodXBncmFkZUZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9jZmcuY29udGVudFVwZ3JhZGUgPSBwcm9taXNhYmxlQ2hhaW4odGhpcy5fY2ZnLmNvbnRlbnRVcGdyYWRlIHx8IG5vcCwgdXBncmFkZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmVyc2lvbjtcbiAgICB9KCkpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVmVyc2lvbkNvbnN0cnVjdG9yKGRiKSB7XG4gICAgICAgIHJldHVybiBtYWtlQ2xhc3NDb25zdHJ1Y3RvcihWZXJzaW9uLnByb3RvdHlwZSwgZnVuY3Rpb24gVmVyc2lvbih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICB0aGlzLl9jZmcgPSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbk51bWJlcixcbiAgICAgICAgICAgICAgICBzdG9yZXNTb3VyY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgZGJzY2hlbWE6IHt9LFxuICAgICAgICAgICAgICAgIHRhYmxlczoge30sXG4gICAgICAgICAgICAgICAgY29udGVudFVwZ3JhZGU6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERiTmFtZXNUYWJsZShpbmRleGVkREIsIElEQktleVJhbmdlKSB7XG4gICAgICAgIHZhciBkYk5hbWVzREIgPSBpbmRleGVkREJbXCJfZGJOYW1lc0RCXCJdO1xuICAgICAgICBpZiAoIWRiTmFtZXNEQikge1xuICAgICAgICAgICAgZGJOYW1lc0RCID0gaW5kZXhlZERCW1wiX2RiTmFtZXNEQlwiXSA9IG5ldyBEZXhpZSQxKERCTkFNRVNfREIsIHtcbiAgICAgICAgICAgICAgICBhZGRvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGluZGV4ZWREQjogaW5kZXhlZERCLFxuICAgICAgICAgICAgICAgIElEQktleVJhbmdlOiBJREJLZXlSYW5nZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGJOYW1lc0RCLnZlcnNpb24oMSkuc3RvcmVzKHsgZGJuYW1lczogXCJuYW1lXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiTmFtZXNEQi50YWJsZShcImRibmFtZXNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc0RhdGFiYXNlc05hdGl2ZShpbmRleGVkREIpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ZWREQiAmJiB0eXBlb2YgaW5kZXhlZERCLmRhdGFiYXNlcyA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRhYmFzZU5hbWVzKF9hKSB7XG4gICAgICAgIHZhciBpbmRleGVkREIgPSBfYS5pbmRleGVkREIsIElEQktleVJhbmdlID0gX2EuSURCS2V5UmFuZ2U7XG4gICAgICAgIHJldHVybiBoYXNEYXRhYmFzZXNOYXRpdmUoaW5kZXhlZERCKVxuICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUoaW5kZXhlZERCLmRhdGFiYXNlcygpKS50aGVuKGZ1bmN0aW9uIChpbmZvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmZvc1xuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpbmZvKSB7IHJldHVybiBpbmZvLm5hbWU7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWUgIT09IERCTkFNRVNfREI7IH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogZ2V0RGJOYW1lc1RhYmxlKGluZGV4ZWREQiwgSURCS2V5UmFuZ2UpLnRvQ29sbGVjdGlvbigpLnByaW1hcnlLZXlzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vbkRhdGFiYXNlQ3JlYXRlZChfYSwgbmFtZSkge1xuICAgICAgICB2YXIgaW5kZXhlZERCID0gX2EuaW5kZXhlZERCLCBJREJLZXlSYW5nZSA9IF9hLklEQktleVJhbmdlO1xuICAgICAgICAhaGFzRGF0YWJhc2VzTmF0aXZlKGluZGV4ZWREQikgJiZcbiAgICAgICAgICAgIG5hbWUgIT09IERCTkFNRVNfREIgJiZcbiAgICAgICAgICAgIGdldERiTmFtZXNUYWJsZShpbmRleGVkREIsIElEQktleVJhbmdlKS5wdXQoeyBuYW1lOiBuYW1lIH0pLmNhdGNoKG5vcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vbkRhdGFiYXNlRGVsZXRlZChfYSwgbmFtZSkge1xuICAgICAgICB2YXIgaW5kZXhlZERCID0gX2EuaW5kZXhlZERCLCBJREJLZXlSYW5nZSA9IF9hLklEQktleVJhbmdlO1xuICAgICAgICAhaGFzRGF0YWJhc2VzTmF0aXZlKGluZGV4ZWREQikgJiZcbiAgICAgICAgICAgIG5hbWUgIT09IERCTkFNRVNfREIgJiZcbiAgICAgICAgICAgIGdldERiTmFtZXNUYWJsZShpbmRleGVkREIsIElEQktleVJhbmdlKS5kZWxldGUobmFtZSkuY2F0Y2gobm9wKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2aXAoZm4pIHtcbiAgICAgICAgcmV0dXJuIG5ld1Njb3BlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFBTRC5sZXRUaHJvdWdoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpZGJSZWFkeSgpIHtcbiAgICAgICAgdmFyIGlzU2FmYXJpID0gIW5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXG4gICAgICAgICAgICAvU2FmYXJpXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXG4gICAgICAgICAgICAhL0Nocm9tKGV8aXVtKVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgaWYgKCFpc1NhZmFyaSB8fCAhaW5kZXhlZERCLmRhdGFiYXNlcylcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdmFyIGludGVydmFsSWQ7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIHRyeUlkYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluZGV4ZWREQi5kYXRhYmFzZXMoKS5maW5hbGx5KHJlc29sdmUpOyB9O1xuICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRyeUlkYiwgMTAwKTtcbiAgICAgICAgICAgIHRyeUlkYigpO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7IH0pO1xuICAgIH1cblxuICAgIHZhciBfYTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5UmFuZ2Uobm9kZSkge1xuICAgICAgICByZXR1cm4gIShcImZyb21cIiBpbiBub2RlKTtcbiAgICB9XG4gICAgdmFyIFJhbmdlU2V0ID0gZnVuY3Rpb24gKGZyb21PclRyZWUsIHRvKSB7XG4gICAgICAgIGlmICh0aGlzKSB7XG4gICAgICAgICAgICBleHRlbmQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IHsgZDogMSwgZnJvbTogZnJvbU9yVHJlZSwgdG86IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gdG8gOiBmcm9tT3JUcmVlIH0gOiB7IGQ6IDAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcnYgPSBuZXcgUmFuZ2VTZXQoKTtcbiAgICAgICAgICAgIGlmIChmcm9tT3JUcmVlICYmIChcImRcIiBpbiBmcm9tT3JUcmVlKSkge1xuICAgICAgICAgICAgICAgIGV4dGVuZChydiwgZnJvbU9yVHJlZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHByb3BzKFJhbmdlU2V0LnByb3RvdHlwZSwgKF9hID0ge1xuICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiAocmFuZ2VTZXQpIHtcbiAgICAgICAgICAgICAgICBtZXJnZVJhbmdlcyh0aGlzLCByYW5nZVNldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkS2V5OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgYWRkUmFuZ2UodGhpcywga2V5LCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZEtleXM6IGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gYWRkUmFuZ2UoX3RoaXMsIGtleSwga2V5KTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzS2V5OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBnZXRSYW5nZVNldEl0ZXJhdG9yKHRoaXMpLm5leHQoa2V5KS52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSAmJiBjbXAobm9kZS5mcm9tLCBrZXkpIDw9IDAgJiYgY21wKG5vZGUudG8sIGtleSkgPj0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2FbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFJhbmdlU2V0SXRlcmF0b3IodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIF9hKSk7XG4gICAgZnVuY3Rpb24gYWRkUmFuZ2UodGFyZ2V0LCBmcm9tLCB0bykge1xuICAgICAgICB2YXIgZGlmZiA9IGNtcChmcm9tLCB0byk7XG4gICAgICAgIGlmIChpc05hTihkaWZmKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGRpZmYgPiAwKVxuICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgICAgICBpZiAoaXNFbXB0eVJhbmdlKHRhcmdldCkpXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHRhcmdldCwgeyBmcm9tOiBmcm9tLCB0bzogdG8sIGQ6IDEgfSk7XG4gICAgICAgIHZhciBsZWZ0ID0gdGFyZ2V0Lmw7XG4gICAgICAgIHZhciByaWdodCA9IHRhcmdldC5yO1xuICAgICAgICBpZiAoY21wKHRvLCB0YXJnZXQuZnJvbSkgPCAwKSB7XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgICAgICAgPyBhZGRSYW5nZShsZWZ0LCBmcm9tLCB0bylcbiAgICAgICAgICAgICAgICA6ICh0YXJnZXQubCA9IHsgZnJvbTogZnJvbSwgdG86IHRvLCBkOiAxLCBsOiBudWxsLCByOiBudWxsIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlYmFsYW5jZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbXAoZnJvbSwgdGFyZ2V0LnRvKSA+IDApIHtcbiAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgICAgPyBhZGRSYW5nZShyaWdodCwgZnJvbSwgdG8pXG4gICAgICAgICAgICAgICAgOiAodGFyZ2V0LnIgPSB7IGZyb206IGZyb20sIHRvOiB0bywgZDogMSwgbDogbnVsbCwgcjogbnVsbCB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWJhbGFuY2UodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY21wKGZyb20sIHRhcmdldC5mcm9tKSA8IDApIHtcbiAgICAgICAgICAgIHRhcmdldC5mcm9tID0gZnJvbTtcbiAgICAgICAgICAgIHRhcmdldC5sID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5kID0gcmlnaHQgPyByaWdodC5kICsgMSA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNtcCh0bywgdGFyZ2V0LnRvKSA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldC50byA9IHRvO1xuICAgICAgICAgICAgdGFyZ2V0LnIgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmQgPSB0YXJnZXQubCA/IHRhcmdldC5sLmQgKyAxIDogMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmlnaHRXYXNDdXRPZmYgPSAhdGFyZ2V0LnI7XG4gICAgICAgIGlmIChsZWZ0ICYmICF0YXJnZXQubCkge1xuICAgICAgICAgICAgbWVyZ2VSYW5nZXModGFyZ2V0LCBsZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHQgJiYgcmlnaHRXYXNDdXRPZmYpIHtcbiAgICAgICAgICAgIG1lcmdlUmFuZ2VzKHRhcmdldCwgcmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1lcmdlUmFuZ2VzKHRhcmdldCwgbmV3U2V0KSB7XG4gICAgICAgIGZ1bmN0aW9uIF9hZGRSYW5nZVNldCh0YXJnZXQsIF9hKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IF9hLmZyb20sIHRvID0gX2EudG8sIGwgPSBfYS5sLCByID0gX2EucjtcbiAgICAgICAgICAgIGFkZFJhbmdlKHRhcmdldCwgZnJvbSwgdG8pO1xuICAgICAgICAgICAgaWYgKGwpXG4gICAgICAgICAgICAgICAgX2FkZFJhbmdlU2V0KHRhcmdldCwgbCk7XG4gICAgICAgICAgICBpZiAocilcbiAgICAgICAgICAgICAgICBfYWRkUmFuZ2VTZXQodGFyZ2V0LCByKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW1wdHlSYW5nZShuZXdTZXQpKVxuICAgICAgICAgICAgX2FkZFJhbmdlU2V0KHRhcmdldCwgbmV3U2V0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZ2VzT3ZlcmxhcChyYW5nZVNldDEsIHJhbmdlU2V0Mikge1xuICAgICAgICB2YXIgaTEgPSBnZXRSYW5nZVNldEl0ZXJhdG9yKHJhbmdlU2V0Mik7XG4gICAgICAgIHZhciBuZXh0UmVzdWx0MSA9IGkxLm5leHQoKTtcbiAgICAgICAgaWYgKG5leHRSZXN1bHQxLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBhID0gbmV4dFJlc3VsdDEudmFsdWU7XG4gICAgICAgIHZhciBpMiA9IGdldFJhbmdlU2V0SXRlcmF0b3IocmFuZ2VTZXQxKTtcbiAgICAgICAgdmFyIG5leHRSZXN1bHQyID0gaTIubmV4dChhLmZyb20pO1xuICAgICAgICB2YXIgYiA9IG5leHRSZXN1bHQyLnZhbHVlO1xuICAgICAgICB3aGlsZSAoIW5leHRSZXN1bHQxLmRvbmUgJiYgIW5leHRSZXN1bHQyLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChjbXAoYi5mcm9tLCBhLnRvKSA8PSAwICYmIGNtcChiLnRvLCBhLmZyb20pID49IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjbXAoYS5mcm9tLCBiLmZyb20pIDwgMFxuICAgICAgICAgICAgICAgID8gKGEgPSAobmV4dFJlc3VsdDEgPSBpMS5uZXh0KGIuZnJvbSkpLnZhbHVlKVxuICAgICAgICAgICAgICAgIDogKGIgPSAobmV4dFJlc3VsdDIgPSBpMi5uZXh0KGEuZnJvbSkpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFJhbmdlU2V0SXRlcmF0b3Iobm9kZSkge1xuICAgICAgICB2YXIgc3RhdGUgPSBpc0VtcHR5UmFuZ2Uobm9kZSkgPyBudWxsIDogeyBzOiAwLCBuOiBub2RlIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleVByb3ZpZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnMgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlQcm92aWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhdGUubi5sICYmIGNtcChrZXksIHN0YXRlLm4uZnJvbSkgPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7IHVwOiBzdGF0ZSwgbjogc3RhdGUubi5sLCBzOiAxIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhdGUubi5sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7IHVwOiBzdGF0ZSwgbjogc3RhdGUubi5sLCBzOiAxIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnMgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5UHJvdmlkZWQgfHwgY21wKGtleSwgc3RhdGUubi50bykgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHN0YXRlLm4sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLm4ucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7IHVwOiBzdGF0ZSwgbjogc3RhdGUubi5yLCBzOiAwIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlLnVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlYmFsYW5jZSh0YXJnZXQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIGRpZmYgPSAoKChfYSA9IHRhcmdldC5yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZCkgfHwgMCkgLSAoKChfYiA9IHRhcmdldC5sKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZCkgfHwgMCk7XG4gICAgICAgIHZhciByID0gZGlmZiA+IDEgPyBcInJcIiA6IGRpZmYgPCAtMSA/IFwibFwiIDogXCJcIjtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHZhciBsID0gciA9PT0gXCJyXCIgPyBcImxcIiA6IFwiclwiO1xuICAgICAgICAgICAgdmFyIHJvb3RDbG9uZSA9IF9fYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgICAgICAgICAgdmFyIG9sZFJvb3RSaWdodCA9IHRhcmdldFtyXTtcbiAgICAgICAgICAgIHRhcmdldC5mcm9tID0gb2xkUm9vdFJpZ2h0LmZyb207XG4gICAgICAgICAgICB0YXJnZXQudG8gPSBvbGRSb290UmlnaHQudG87XG4gICAgICAgICAgICB0YXJnZXRbcl0gPSBvbGRSb290UmlnaHRbcl07XG4gICAgICAgICAgICByb290Q2xvbmVbcl0gPSBvbGRSb290UmlnaHRbbF07XG4gICAgICAgICAgICB0YXJnZXRbbF0gPSByb290Q2xvbmU7XG4gICAgICAgICAgICByb290Q2xvbmUuZCA9IGNvbXB1dGVEZXB0aChyb290Q2xvbmUpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5kID0gY29tcHV0ZURlcHRoKHRhcmdldCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXB1dGVEZXB0aChfYSkge1xuICAgICAgICB2YXIgciA9IF9hLnIsIGwgPSBfYS5sO1xuICAgICAgICByZXR1cm4gKHIgPyAobCA/IE1hdGgubWF4KHIuZCwgbC5kKSA6IHIuZCkgOiBsID8gbC5kIDogMCkgKyAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZE9ic2VydmFiaWxpdHlTZXQodGFyZ2V0LCBuZXdTZXQpIHtcbiAgICAgICAga2V5cyhuZXdTZXQpLmZvckVhY2goZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRbcGFydF0pXG4gICAgICAgICAgICAgICAgbWVyZ2VSYW5nZXModGFyZ2V0W3BhcnRdLCBuZXdTZXRbcGFydF0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRhcmdldFtwYXJ0XSA9IGNsb25lU2ltcGxlT2JqZWN0VHJlZShuZXdTZXRbcGFydF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvYnNTZXRzT3ZlcmxhcChvczEsIG9zMikge1xuICAgICAgICByZXR1cm4gb3MxLmFsbCB8fCBvczIuYWxsIHx8IE9iamVjdC5rZXlzKG9zMSkuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBvczJba2V5XSAmJiByYW5nZXNPdmVybGFwKG9zMltrZXldLCBvczFba2V5XSk7IH0pO1xuICAgIH1cblxuICAgIHZhciBjYWNoZSA9IHt9O1xuXG4gICAgdmFyIHVuc2lnbmFsZWRQYXJ0cyA9IHt9O1xuICAgIHZhciBpc1Rhc2tFbnF1ZXVlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHNpZ25hbFN1YnNjcmliZXJzTGF6aWx5KHBhcnQsIG9wdGltaXN0aWMpIHtcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldCh1bnNpZ25hbGVkUGFydHMsIHBhcnQpO1xuICAgICAgICBpZiAoIWlzVGFza0VucXVldWVkKSB7XG4gICAgICAgICAgICBpc1Rhc2tFbnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpc1Rhc2tFbnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IHVuc2lnbmFsZWRQYXJ0cztcbiAgICAgICAgICAgICAgICB1bnNpZ25hbGVkUGFydHMgPSB7fTtcbiAgICAgICAgICAgICAgICBzaWduYWxTdWJzY3JpYmVyc05vdyhwYXJ0cywgZmFsc2UpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2lnbmFsU3Vic2NyaWJlcnNOb3codXBkYXRlZFBhcnRzLCBkZWxldGVBZmZlY3RlZENhY2hlRW50cmllcykge1xuICAgICAgICBpZiAoZGVsZXRlQWZmZWN0ZWRDYWNoZUVudHJpZXMgPT09IHZvaWQgMCkgeyBkZWxldGVBZmZlY3RlZENhY2hlRW50cmllcyA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBxdWVyaWVzVG9TaWduYWwgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmICh1cGRhdGVkUGFydHMuYWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LnZhbHVlcyhjYWNoZSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRibENhY2hlID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGNvbGxlY3RUYWJsZVN1YnNjcmliZXJzKHRibENhY2hlLCB1cGRhdGVkUGFydHMsIHF1ZXJpZXNUb1NpZ25hbCwgZGVsZXRlQWZmZWN0ZWRDYWNoZUVudHJpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHVwZGF0ZWRQYXJ0cykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IC9eaWRiXFw6XFwvXFwvKC4qKVxcLyguKilcXC8vLmV4ZWMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRiTmFtZSA9IHBhcnRzWzFdLCB0YWJsZU5hbWUgPSBwYXJ0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRibENhY2hlID0gY2FjaGVbXCJpZGI6Ly9cIi5jb25jYXQoZGJOYW1lLCBcIi9cIikuY29uY2F0KHRhYmxlTmFtZSldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGJsQ2FjaGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0VGFibGVTdWJzY3JpYmVycyh0YmxDYWNoZSwgdXBkYXRlZFBhcnRzLCBxdWVyaWVzVG9TaWduYWwsIGRlbGV0ZUFmZmVjdGVkQ2FjaGVFbnRyaWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVlcmllc1RvU2lnbmFsLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlcnkpIHsgcmV0dXJuIHJlcXVlcnkoKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbGxlY3RUYWJsZVN1YnNjcmliZXJzKHRibENhY2hlLCB1cGRhdGVkUGFydHMsIG91dFF1ZXJpZXNUb1NpZ25hbCwgZGVsZXRlQWZmZWN0ZWRDYWNoZUVudHJpZXMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRFbnRyeUxpc3RzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyh0YmxDYWNoZS5xdWVyaWVzLnF1ZXJ5KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgaW5kZXhOYW1lID0gX2JbMF0sIGVudHJpZXMgPSBfYlsxXTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEVudHJpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2MgPCBlbnRyaWVzXzEubGVuZ3RoOyBfYysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllc18xW19jXTtcbiAgICAgICAgICAgICAgICBpZiAob2JzU2V0c092ZXJsYXAodXBkYXRlZFBhcnRzLCBlbnRyeS5vYnNTZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlcnkpIHsgcmV0dXJuIG91dFF1ZXJpZXNUb1NpZ25hbC5hZGQocmVxdWVyeSk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWxldGVBZmZlY3RlZENhY2hlRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlbGV0ZUFmZmVjdGVkQ2FjaGVFbnRyaWVzKVxuICAgICAgICAgICAgICAgIHVwZGF0ZWRFbnRyeUxpc3RzLnB1c2goW2luZGV4TmFtZSwgZmlsdGVyZWRFbnRyaWVzXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGV0ZUFmZmVjdGVkQ2FjaGVFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIHVwZGF0ZWRFbnRyeUxpc3RzXzEgPSB1cGRhdGVkRW50cnlMaXN0czsgX2QgPCB1cGRhdGVkRW50cnlMaXN0c18xLmxlbmd0aDsgX2QrKykge1xuICAgICAgICAgICAgICAgIHZhciBfZSA9IHVwZGF0ZWRFbnRyeUxpc3RzXzFbX2RdLCBpbmRleE5hbWUgPSBfZVswXSwgZmlsdGVyZWRFbnRyaWVzID0gX2VbMV07XG4gICAgICAgICAgICAgICAgdGJsQ2FjaGUucXVlcmllcy5xdWVyeVtpbmRleE5hbWVdID0gZmlsdGVyZWRFbnRyaWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGV4aWVPcGVuKGRiKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGRiLl9zdGF0ZTtcbiAgICAgICAgdmFyIGluZGV4ZWREQiA9IGRiLl9kZXBzLmluZGV4ZWREQjtcbiAgICAgICAgaWYgKHN0YXRlLmlzQmVpbmdPcGVuZWQgfHwgZGIuaWRiZGIpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZGJSZWFkeVByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZS5kYk9wZW5FcnJvciA/XG4gICAgICAgICAgICAgICAgcmVqZWN0aW9uKHN0YXRlLmRiT3BlbkVycm9yKSA6XG4gICAgICAgICAgICAgICAgZGI7IH0pO1xuICAgICAgICBzdGF0ZS5pc0JlaW5nT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZGJPcGVuRXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5vcGVuQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIG9wZW5DYW5jZWxsZXIgPSBzdGF0ZS5vcGVuQ2FuY2VsbGVyO1xuICAgICAgICB2YXIgbmF0aXZlVmVyVG9PcGVuID0gTWF0aC5yb3VuZChkYi52ZXJubyAqIDEwKTtcbiAgICAgICAgdmFyIHNjaGVtYVBhdGNoTW9kZSA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGVkKCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLm9wZW5DYW5jZWxsZXIgIT09IG9wZW5DYW5jZWxsZXIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuRGF0YWJhc2VDbG9zZWQoJ2RiLm9wZW4oKSB3YXMgY2FuY2VsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc29sdmVEYlJlYWR5ID0gc3RhdGUuZGJSZWFkeVJlc29sdmUsXG4gICAgICAgIHVwZ3JhZGVUcmFuc2FjdGlvbiA9IG51bGwsIHdhc0NyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRyeU9wZW5EQiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdGhyb3dJZkNhbmNlbGxlZCgpO1xuICAgICAgICAgICAgaWYgKCFpbmRleGVkREIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuTWlzc2luZ0FQSSgpO1xuICAgICAgICAgICAgdmFyIGRiTmFtZSA9IGRiLm5hbWU7XG4gICAgICAgICAgICB2YXIgcmVxID0gc3RhdGUuYXV0b1NjaGVtYSB8fCAhbmF0aXZlVmVyVG9PcGVuID9cbiAgICAgICAgICAgICAgICBpbmRleGVkREIub3BlbihkYk5hbWUpIDpcbiAgICAgICAgICAgICAgICBpbmRleGVkREIub3BlbihkYk5hbWUsIG5hdGl2ZVZlclRvT3Blbik7XG4gICAgICAgICAgICBpZiAoIXJlcSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5NaXNzaW5nQVBJKCk7XG4gICAgICAgICAgICByZXEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgcmVxLm9uYmxvY2tlZCA9IHdyYXAoZGIuX2ZpcmVPbkJsb2NrZWQpO1xuICAgICAgICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9IHdyYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB1cGdyYWRlVHJhbnNhY3Rpb24gPSByZXEudHJhbnNhY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmF1dG9TY2hlbWEgJiYgIWRiLl9vcHRpb25zLmFsbG93RW1wdHlEQikge1xuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IHByZXZlbnREZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB1cGdyYWRlVHJhbnNhY3Rpb24uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxLnJlc3VsdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVscmVxID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKGRiTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbHJlcS5vbnN1Y2Nlc3MgPSBkZWxyZXEub25lcnJvciA9IHdyYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBleGNlcHRpb25zLk5vU3VjaERhdGFiYXNlKFwiRGF0YWJhc2UgXCIuY29uY2F0KGRiTmFtZSwgXCIgZG9lc250IGV4aXN0XCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBncmFkZVRyYW5zYWN0aW9uLm9uZXJyb3IgPSBldmVudFJlamVjdEhhbmRsZXIocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFZlciA9IGUub2xkVmVyc2lvbiA+IE1hdGgucG93KDIsIDYyKSA/IDAgOiBlLm9sZFZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIHdhc0NyZWF0ZWQgPSBvbGRWZXIgPCAxO1xuICAgICAgICAgICAgICAgICAgICBkYi5pZGJkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFQYXRjaE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoQ3VycmVudFZlcnNpb24oZGIsIHVwZ3JhZGVUcmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcnVuVXBncmFkZXJzKGRiLCBvbGRWZXIgLyAxMCwgdXBncmFkZVRyYW5zYWN0aW9uLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICByZXEub25zdWNjZXNzID0gd3JhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdXBncmFkZVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgaWRiZGIgPSBkYi5pZGJkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdFN0b3JlTmFtZXMgPSBzbGljZShpZGJkYi5vYmplY3RTdG9yZU5hbWVzKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U3RvcmVOYW1lcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcFRyYW5zID0gaWRiZGIudHJhbnNhY3Rpb24oc2FmYXJpTXVsdGlTdG9yZUZpeChvYmplY3RTdG9yZU5hbWVzKSwgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuYXV0b1NjaGVtYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkR2xvYmFsU2NoZW1hKGRiLCBpZGJkYiwgdG1wVHJhbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMoZGIsIGRiLl9kYlNjaGVtYSwgdG1wVHJhbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmVyaWZ5SW5zdGFsbGVkU2NoZW1hKGRiLCB0bXBUcmFucykgJiYgIXNjaGVtYVBhdGNoTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEZXhpZSBTY2hlbWFEaWZmOiBTY2hlbWEgd2FzIGV4dGVuZGVkIHdpdGhvdXQgaW5jcmVhc2luZyB0aGUgbnVtYmVyIHBhc3NlZCB0byBkYi52ZXJzaW9uKCkuIERleGllIHdpbGwgYWRkIG1pc3NpbmcgcGFydHMgYW5kIGluY3JlbWVudCBuYXRpdmUgdmVyc2lvbiBudW1iZXIgdG8gd29ya2Fyb3VuZCB0aGlzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRiZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlVmVyVG9PcGVuID0gaWRiZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGNoTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRyeU9wZW5EQigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MoZGIsIHRtcFRyYW5zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChkYik7XG4gICAgICAgICAgICAgICAgaWRiZGIub252ZXJzaW9uY2hhbmdlID0gd3JhcChmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudmNGaXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRiLm9uKFwidmVyc2lvbmNoYW5nZVwiKS5maXJlKGV2KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZGJkYi5vbmNsb3NlID0gd3JhcChmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgZGIub24oXCJjbG9zZVwiKS5maXJlKGV2KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAod2FzQ3JlYXRlZClcbiAgICAgICAgICAgICAgICAgICAgX29uRGF0YWJhc2VDcmVhdGVkKGRiLl9kZXBzLCBkYk5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyID09PSBudWxsIHx8IGVyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiVW5rbm93bkVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5QUjEzOThfbWF4TG9vcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLlBSMTM5OF9tYXhMb29wLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RleGllOiBXb3JrYXJvdW5kIGZvciBDaHJvbWUgVW5rbm93bkVycm9yIG9uIG9wZW4oKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeU9wZW5EQigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJWZXJzaW9uRXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdGl2ZVZlclRvT3BlbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVZlclRvT3BlbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5T3BlbkRCKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gRGV4aWVQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIG9wZW5DYW5jZWxsZXIsXG4gICAgICAgICAgICAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyBEZXhpZVByb21pc2UucmVzb2x2ZSgpIDogaWRiUmVhZHkoKSkudGhlbih0cnlPcGVuREIpXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3dJZkNhbmNlbGxlZCgpO1xuICAgICAgICAgICAgc3RhdGUub25SZWFkeUJlaW5nRmlyZWQgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZSh2aXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gZGIub24ucmVhZHkuZmlyZShkYi52aXApOyB9KSkudGhlbihmdW5jdGlvbiBmaXJlUmVtYWluZGVycygpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUub25SZWFkeUJlaW5nRmlyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtYWluZGVyc18xID0gc3RhdGUub25SZWFkeUJlaW5nRmlyZWQucmVkdWNlKHByb21pc2FibGVDaGFpbiwgbm9wKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUub25SZWFkeUJlaW5nRmlyZWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHZpcChmdW5jdGlvbiAoKSB7IHJldHVybiByZW1haW5kZXJzXzEoZGIudmlwKTsgfSkpLnRoZW4oZmlyZVJlbWFpbmRlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5vcGVuQ2FuY2VsbGVyID09PSBvcGVuQ2FuY2VsbGVyKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUub25SZWFkeUJlaW5nRmlyZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzQmVpbmdPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RhdGUuZGJPcGVuRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHVwZ3JhZGVUcmFuc2FjdGlvbiAmJiB1cGdyYWRlVHJhbnNhY3Rpb24uYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XG4gICAgICAgICAgICBpZiAob3BlbkNhbmNlbGxlciA9PT0gc3RhdGUub3BlbkNhbmNlbGxlcikge1xuICAgICAgICAgICAgICAgIGRiLl9jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdGlvbihlcnIpO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlLm9wZW5Db21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlRGJSZWFkeSgpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3YXNDcmVhdGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZXJ5dGhpbmdfMSA9IHt9O1xuICAgICAgICAgICAgICAgIGRiLnRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5zY2hlbWEuaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHgubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVyeXRoaW5nXzFbXCJpZGI6Ly9cIi5jb25jYXQoZGIubmFtZSwgXCIvXCIpLmNvbmNhdCh0YWJsZS5uYW1lLCBcIi9cIikuY29uY2F0KGlkeC5uYW1lKV0gPSBuZXcgUmFuZ2VTZXQoLUluZmluaXR5LCBbW1tdXV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZXZlcnl0aGluZ18xW1wiaWRiOi8vXCIuY29uY2F0KGRiLm5hbWUsIFwiL1wiKS5jb25jYXQodGFibGUubmFtZSwgXCIvXCIpXSA9IGV2ZXJ5dGhpbmdfMVtcImlkYjovL1wiLmNvbmNhdChkYi5uYW1lLCBcIi9cIikuY29uY2F0KHRhYmxlLm5hbWUsIFwiLzpkZWxzXCIpXSA9IG5ldyBSYW5nZVNldCgtSW5maW5pdHksIFtbW11dXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRzKERFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FKS5maXJlKGV2ZXJ5dGhpbmdfMSk7XG4gICAgICAgICAgICAgICAgc2lnbmFsU3Vic2NyaWJlcnNOb3coZXZlcnl0aGluZ18xLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXdhaXRJdGVyYXRvcihpdGVyYXRvcikge1xuICAgICAgICB2YXIgY2FsbE5leHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiBpdGVyYXRvci5uZXh0KHJlc3VsdCk7IH0sIGRvVGhyb3cgPSBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGl0ZXJhdG9yLnRocm93KGVycm9yKTsgfSwgb25TdWNjZXNzID0gc3RlcChjYWxsTmV4dCksIG9uRXJyb3IgPSBzdGVwKGRvVGhyb3cpO1xuICAgICAgICBmdW5jdGlvbiBzdGVwKGdldE5leHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBnZXROZXh0KHZhbCksIHZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5kb25lID8gdmFsdWUgOlxuICAgICAgICAgICAgICAgICAgICAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZS50aGVuICE9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXJyYXkodmFsdWUpID8gUHJvbWlzZS5hbGwodmFsdWUpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKSA6IG9uU3VjY2Vzcyh2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ZXAoY2FsbE5leHQpKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0cmFjdFRyYW5zYWN0aW9uQXJncyhtb2RlLCBfdGFibGVBcmdzXywgc2NvcGVGdW5jKSB7XG4gICAgICAgIHZhciBpID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgaWYgKGkgPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiVG9vIGZldyBhcmd1bWVudHNcIik7XG4gICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGkgLSAxKTtcbiAgICAgICAgd2hpbGUgKC0taSlcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBzY29wZUZ1bmMgPSBhcmdzLnBvcCgpO1xuICAgICAgICB2YXIgdGFibGVzID0gZmxhdHRlbihhcmdzKTtcbiAgICAgICAgcmV0dXJuIFttb2RlLCB0YWJsZXMsIHNjb3BlRnVuY107XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVudGVyVHJhbnNhY3Rpb25TY29wZShkYiwgbW9kZSwgc3RvcmVOYW1lcywgcGFyZW50VHJhbnNhY3Rpb24sIHNjb3BlRnVuYykge1xuICAgICAgICByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xlc3MgPSBQU0QudHJhbnNsZXNzIHx8IFBTRDtcbiAgICAgICAgICAgIHZhciB0cmFucyA9IGRiLl9jcmVhdGVUcmFuc2FjdGlvbihtb2RlLCBzdG9yZU5hbWVzLCBkYi5fZGJTY2hlbWEsIHBhcmVudFRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIHRyYW5zLmV4cGxpY2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB6b25lUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICAgICAgICAgIHRyYW5zbGVzczogdHJhbnNsZXNzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJhbnMuaWRidHJhbnMgPSBwYXJlbnRUcmFuc2FjdGlvbi5pZGJ0cmFucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFucy5pZGJ0cmFucy5fZXhwbGljaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYi5fc3RhdGUuUFIxMzk4X21heExvb3AgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09IGVycm5hbWVzLkludmFsaWRTdGF0ZSAmJiBkYi5pc09wZW4oKSAmJiAtLWRiLl9zdGF0ZS5QUjEzOThfbWF4TG9vcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRGV4aWU6IE5lZWQgdG8gcmVvcGVuIGRiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSh7IGRpc2FibGVBdXRvT3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIub3BlbigpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZW50ZXJUcmFuc2FjdGlvblNjb3BlKGRiLCBtb2RlLCBzdG9yZU5hbWVzLCBudWxsLCBzY29wZUZ1bmMpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2NvcGVGdW5jSXNBc3luYyA9IGlzQXN5bmNGdW5jdGlvbihzY29wZUZ1bmMpO1xuICAgICAgICAgICAgaWYgKHNjb3BlRnVuY0lzQXN5bmMpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgdmFyIHByb21pc2VGb2xsb3dlZCA9IERleGllUHJvbWlzZS5mb2xsb3coZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gc2NvcGVGdW5jLmNhbGwodHJhbnMsIHRyYW5zKTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlRnVuY0lzQXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyZW1lbnRvciA9IGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzLmJpbmQobnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKGRlY3JlbWVudG9yLCBkZWNyZW1lbnRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJldHVyblZhbHVlLm5leHQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJldHVyblZhbHVlLnRocm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGF3YWl0SXRlcmF0b3IocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgem9uZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiAocmV0dXJuVmFsdWUgJiYgdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgICAgIERleGllUHJvbWlzZS5yZXNvbHZlKHJldHVyblZhbHVlKS50aGVuKGZ1bmN0aW9uICh4KSB7IHJldHVybiB0cmFucy5hY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICB4XG4gICAgICAgICAgICAgICAgICAgIDogcmVqZWN0aW9uKG5ldyBleGNlcHRpb25zLlByZW1hdHVyZUNvbW1pdChcIlRyYW5zYWN0aW9uIGNvbW1pdHRlZCB0b28gZWFybHkuIFNlZSBodHRwOi8vYml0Lmx5LzJrZGNrTW5cIikpOyB9KVxuICAgICAgICAgICAgICAgIDogcHJvbWlzZUZvbGxvd2VkLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV0dXJuVmFsdWU7IH0pKS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICB0cmFucy5fcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFucy5fY29tcGxldGlvbi50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0cmFucy5fcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFkKGEsIHZhbHVlLCBjb3VudCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gaXNBcnJheShhKSA/IGEuc2xpY2UoKSA6IFthXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlKGRvd24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkb3duKSwgeyB0YWJsZTogZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IGRvd24udGFibGUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NoZW1hID0gdGFibGUuc2NoZW1hO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleExvb2t1cCA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBhbGxWaXJ0dWFsSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFZpcnR1YWxJbmRleGVzKGtleVBhdGgsIGtleVRhaWwsIGxvd0xldmVsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGhBbGlhcyA9IGdldEtleVBhdGhBbGlhcyhrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4TGlzdCA9IChpbmRleExvb2t1cFtrZXlQYXRoQWxpYXNdID0gaW5kZXhMb29rdXBba2V5UGF0aEFsaWFzXSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlMZW5ndGggPSBrZXlQYXRoID09IG51bGwgPyAwIDogdHlwZW9mIGtleVBhdGggPT09ICdzdHJpbmcnID8gMSA6IGtleVBhdGgubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNWaXJ0dWFsID0ga2V5VGFpbCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2aXJ0dWFsSW5kZXggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbG93TGV2ZWxJbmRleCksIHsgbmFtZTogaXNWaXJ0dWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiLmNvbmNhdChrZXlQYXRoQWxpYXMsIFwiKHZpcnR1YWwtZnJvbTpcIikuY29uY2F0KGxvd0xldmVsSW5kZXgubmFtZSwgXCIpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb3dMZXZlbEluZGV4Lm5hbWUsIGxvd0xldmVsSW5kZXg6IGxvd0xldmVsSW5kZXgsIGlzVmlydHVhbDogaXNWaXJ0dWFsLCBrZXlUYWlsOiBrZXlUYWlsLCBrZXlMZW5ndGg6IGtleUxlbmd0aCwgZXh0cmFjdEtleTogZ2V0S2V5RXh0cmFjdG9yKGtleVBhdGgpLCB1bmlxdWU6ICFpc1ZpcnR1YWwgJiYgbG93TGV2ZWxJbmRleC51bmlxdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4TGlzdC5wdXNoKHZpcnR1YWxJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmlydHVhbEluZGV4LmlzUHJpbWFyeUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVmlydHVhbEluZGV4ZXMucHVzaCh2aXJ0dWFsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlMZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlydHVhbEtleVBhdGggPSBrZXlMZW5ndGggPT09IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVBhdGhbMF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVBhdGguc2xpY2UoMCwga2V5TGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRWaXJ0dWFsSW5kZXhlcyh2aXJ0dWFsS2V5UGF0aCwga2V5VGFpbCArIDEsIGxvd0xldmVsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4TGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmtleVRhaWwgLSBiLmtleVRhaWw7IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlydHVhbEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJpbWFyeUtleSA9IGFkZFZpcnR1YWxJbmRleGVzKHNjaGVtYS5wcmltYXJ5S2V5LmtleVBhdGgsIDAsIHNjaGVtYS5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICBpbmRleExvb2t1cFtcIjppZFwiXSA9IFtwcmltYXJ5S2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gc2NoZW1hLmluZGV4ZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVmlydHVhbEluZGV4ZXMoaW5kZXgua2V5UGF0aCwgMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaW5kQmVzdEluZGV4KGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGluZGV4TG9va3VwW2dldEtleVBhdGhBbGlhcyhrZXlQYXRoKV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0cmFuc2xhdGVSYW5nZShyYW5nZSwga2V5VGFpbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmFuZ2UudHlwZSA9PT0gMSAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXI6IHBhZChyYW5nZS5sb3dlciwgcmFuZ2UubG93ZXJPcGVuID8gZG93bi5NQVhfS0VZIDogZG93bi5NSU5fS0VZLCBrZXlUYWlsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyOiBwYWQocmFuZ2UudXBwZXIsIHJhbmdlLnVwcGVyT3BlbiA/IGRvd24uTUlOX0tFWSA6IGRvd24uTUFYX0tFWSwga2V5VGFpbCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlck9wZW46IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHJhbnNsYXRlUmVxdWVzdChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcmVxLnF1ZXJ5LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXguaXNWaXJ0dWFsID8gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlcSksIHsgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgubG93TGV2ZWxJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJhbnNsYXRlUmFuZ2UocmVxLnF1ZXJ5LnJhbmdlLCBpbmRleC5rZXlUYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSA6IHJlcTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0YWJsZSksIHsgc2NoZW1hOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2NoZW1hKSwgeyBwcmltYXJ5S2V5OiBwcmltYXJ5S2V5LCBpbmRleGVzOiBhbGxWaXJ0dWFsSW5kZXhlcywgZ2V0SW5kZXhCeUtleVBhdGg6IGZpbmRCZXN0SW5kZXggfSksIGNvdW50OiBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUuY291bnQodHJhbnNsYXRlUmVxdWVzdChyZXEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgcXVlcnk6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZS5xdWVyeSh0cmFuc2xhdGVSZXF1ZXN0KHJlcSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCBvcGVuQ3Vyc29yOiBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXEucXVlcnkuaW5kZXgsIGtleVRhaWwgPSBfYS5rZXlUYWlsLCBpc1ZpcnR1YWwgPSBfYS5pc1ZpcnR1YWwsIGtleUxlbmd0aCA9IF9hLmtleUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWaXJ0dWFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZS5vcGVuQ3Vyc29yKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVWaXJ0dWFsQ3Vyc29yKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jb250aW51ZShrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICE9IG51bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKHBhZChrZXksIHJlcS5yZXZlcnNlID8gZG93bi5NQVhfS0VZIDogZG93bi5NSU5fS0VZLCBrZXlUYWlsKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnVuaXF1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKGN1cnNvci5rZXkuc2xpY2UoMCwga2V5TGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHJlcS5yZXZlcnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG93bi5NSU5fS0VZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZG93bi5NQVhfS0VZLCBrZXlUYWlsKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlydHVhbEN1cnNvciA9IE9iamVjdC5jcmVhdGUoY3Vyc29yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOiB7IHZhbHVlOiBfY29udGludWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVQcmltYXJ5S2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGtleSwgcHJpbWFyeUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZVByaW1hcnlLZXkocGFkKGtleSwgZG93bi5NQVhfS0VZLCBrZXlUYWlsKSwgcHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlLZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3IucHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gY3Vyc29yLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5TGVuZ3RoID09PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5WzBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LnNsaWNlKDAsIGtleUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpcnR1YWxDdXJzb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUub3BlbkN1cnNvcih0cmFuc2xhdGVSZXF1ZXN0KHJlcSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGN1cnNvcikgeyByZXR1cm4gY3Vyc29yICYmIGNyZWF0ZVZpcnR1YWxDdXJzb3IoY3Vyc29yKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIHZhciB2aXJ0dWFsSW5kZXhNaWRkbGV3YXJlID0ge1xuICAgICAgICBzdGFjazogXCJkYmNvcmVcIixcbiAgICAgICAgbmFtZTogXCJWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlXCIsXG4gICAgICAgIGxldmVsOiAxLFxuICAgICAgICBjcmVhdGU6IGNyZWF0ZVZpcnR1YWxJbmRleE1pZGRsZXdhcmVcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0RGlmZihhLCBiLCBydiwgcHJmeCkge1xuICAgICAgICBydiA9IHJ2IHx8IHt9O1xuICAgICAgICBwcmZ4ID0gcHJmeCB8fCAnJztcbiAgICAgICAga2V5cyhhKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICBpZiAoIWhhc093bihiLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBhcCA9IGFbcHJvcF0sIGJwID0gYltwcm9wXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYnAgPT09ICdvYmplY3QnICYmIGFwICYmIGJwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcFR5cGVOYW1lID0gdG9TdHJpbmdUYWcoYXApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnBUeXBlTmFtZSA9IHRvU3RyaW5nVGFnKGJwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwVHlwZU5hbWUgIT09IGJwVHlwZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IGJbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXBUeXBlTmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9iamVjdERpZmYoYXAsIGJwLCBydiwgcHJmeCArIHByb3AgKyAnLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFwICE9PSBicCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcnZbcHJmeCArIHByb3BdID0gYltwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcCAhPT0gYnApXG4gICAgICAgICAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IGJbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBrZXlzKGIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duKGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcnZbcHJmeCArIHByb3BdID0gYltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBydjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFZmZlY3RpdmVLZXlzKHByaW1hcnlLZXksIHJlcSkge1xuICAgICAgICBpZiAocmVxLnR5cGUgPT09ICdkZWxldGUnKVxuICAgICAgICAgICAgcmV0dXJuIHJlcS5rZXlzO1xuICAgICAgICByZXR1cm4gcmVxLmtleXMgfHwgcmVxLnZhbHVlcy5tYXAocHJpbWFyeUtleS5leHRyYWN0S2V5KTtcbiAgICB9XG5cbiAgICB2YXIgaG9va3NNaWRkbGV3YXJlID0ge1xuICAgICAgICBzdGFjazogXCJkYmNvcmVcIixcbiAgICAgICAgbmFtZTogXCJIb29rc01pZGRsZXdhcmVcIixcbiAgICAgICAgbGV2ZWw6IDIsXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKGRvd25Db3JlKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGRvd25Db3JlKSwgeyB0YWJsZTogZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBkb3duVGFibGUgPSBkb3duQ29yZS50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBwcmltYXJ5S2V5ID0gZG93blRhYmxlLnNjaGVtYS5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZU1pZGRsZXdhcmUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZG93blRhYmxlKSwgeyBtdXRhdGU6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkeFRyYW5zID0gUFNELnRyYW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gZHhUcmFucy50YWJsZSh0YWJsZU5hbWUpLmhvb2ssIGRlbGV0aW5nID0gX2EuZGVsZXRpbmcsIGNyZWF0aW5nID0gX2EuY3JlYXRpbmcsIHVwZGF0aW5nID0gX2EudXBkYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0aW5nLmZpcmUgPT09IG5vcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHhUcmFucy5fcHJvbWlzZSgncmVhZHdyaXRlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRkUHV0T3JEZWxldGUocmVxKTsgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0aW5nLmZpcmUgPT09IG5vcCAmJiB1cGRhdGluZy5maXJlID09PSBub3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR4VHJhbnMuX3Byb21pc2UoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkZFB1dE9yRGVsZXRlKHJlcSk7IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGluZy5maXJlID09PSBub3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR4VHJhbnMuX3Byb21pc2UoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkZFB1dE9yRGVsZXRlKHJlcSk7IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZVJhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0aW5nLmZpcmUgPT09IG5vcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHhUcmFucy5fcHJvbWlzZSgncmVhZHdyaXRlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVsZXRlUmFuZ2UocmVxKTsgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG93blRhYmxlLm11dGF0ZShyZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYWRkUHV0T3JEZWxldGUocmVxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR4VHJhbnMgPSBQU0QudHJhbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSByZXEua2V5cyB8fCBnZXRFZmZlY3RpdmVLZXlzKHByaW1hcnlLZXksIHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLZXlzIG1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxID0gcmVxLnR5cGUgPT09ICdhZGQnIHx8IHJlcS50eXBlID09PSAncHV0JyA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXEpLCB7IGtleXM6IGtleXMgfSkgOiBfX2Fzc2lnbih7fSwgcmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLnR5cGUgIT09ICdkZWxldGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEudmFsdWVzID0gX19zcHJlYWRBcnJheShbXSwgcmVxLnZhbHVlcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5rZXlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEua2V5cyA9IF9fc3ByZWFkQXJyYXkoW10sIHJlcS5rZXlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RXhpc3RpbmdWYWx1ZXMoZG93blRhYmxlLCByZXEsIGtleXMpLnRoZW4oZnVuY3Rpb24gKGV4aXN0aW5nVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0cyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gZXhpc3RpbmdWYWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0geyBvbmVycm9yOiBudWxsLCBvbnN1Y2Nlc3M6IG51bGwgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEudHlwZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGluZy5maXJlLmNhbGwoY3R4LCBrZXksIGV4aXN0aW5nVmFsdWUsIGR4VHJhbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVxLnR5cGUgPT09ICdhZGQnIHx8IGV4aXN0aW5nVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZW5lcmF0ZWRQcmltYXJ5S2V5ID0gY3JlYXRpbmcuZmlyZS5jYWxsKGN0eCwga2V5LCByZXEudmFsdWVzW2ldLCBkeFRyYW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IG51bGwgJiYgZ2VuZXJhdGVkUHJpbWFyeUtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGdlbmVyYXRlZFByaW1hcnlLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5rZXlzW2ldID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByaW1hcnlLZXkub3V0Ym91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ5S2V5UGF0aChyZXEudmFsdWVzW2ldLCBwcmltYXJ5S2V5LmtleVBhdGgsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0RGlmZiA9IGdldE9iamVjdERpZmYoZXhpc3RpbmdWYWx1ZSwgcmVxLnZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZGl0aW9uYWxDaGFuZ2VzXzEgPSB1cGRhdGluZy5maXJlLmNhbGwoY3R4LCBvYmplY3REaWZmLCBrZXksIGV4aXN0aW5nVmFsdWUsIGR4VHJhbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRpdGlvbmFsQ2hhbmdlc18xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ZWRWYWx1ZV8xID0gcmVxLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYWRkaXRpb25hbENoYW5nZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093bihyZXF1ZXN0ZWRWYWx1ZV8xLCBrZXlQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZhbHVlXzFba2V5UGF0aF0gPSBhZGRpdGlvbmFsQ2hhbmdlc18xW2tleVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKHJlcXVlc3RlZFZhbHVlXzEsIGtleVBhdGgsIGFkZGl0aW9uYWxDaGFuZ2VzXzFba2V5UGF0aF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvd25UYWJsZS5tdXRhdGUocmVxKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZhaWx1cmVzID0gX2EuZmFpbHVyZXMsIHJlc3VsdHMgPSBfYS5yZXN1bHRzLCBudW1GYWlsdXJlcyA9IF9hLm51bUZhaWx1cmVzLCBsYXN0UmVzdWx0ID0gX2EubGFzdFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmltS2V5ID0gcmVzdWx0cyA/IHJlc3VsdHNbaV0gOiBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBjb250ZXh0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpbUtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5vbmVycm9yICYmIGN0eC5vbmVycm9yKGZhaWx1cmVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5vbnN1Y2Nlc3MgJiYgY3R4Lm9uc3VjY2VzcyhyZXEudHlwZSA9PT0gJ3B1dCcgJiYgZXhpc3RpbmdWYWx1ZXNbaV0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnZhbHVlc1tpXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZmFpbHVyZXM6IGZhaWx1cmVzLCByZXN1bHRzOiByZXN1bHRzLCBudW1GYWlsdXJlczogbnVtRmFpbHVyZXMsIGxhc3RSZXN1bHQ6IGxhc3RSZXN1bHQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIGN0eC5vbmVycm9yICYmIGN0eC5vbmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVJhbmdlKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVOZXh0Q2h1bmsocmVxLnRyYW5zLCByZXEucmFuZ2UsIDEwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU5leHRDaHVuayh0cmFucywgcmFuZ2UsIGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvd25UYWJsZS5xdWVyeSh7IHRyYW5zOiB0cmFucywgdmFsdWVzOiBmYWxzZSwgcXVlcnk6IHsgaW5kZXg6IHByaW1hcnlLZXksIHJhbmdlOiByYW5nZSB9LCBsaW1pdDogbGltaXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfYS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRQdXRPckRlbGV0ZSh7IHR5cGU6ICdkZWxldGUnLCBrZXlzOiByZXN1bHQsIHRyYW5zOiB0cmFucyB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMubnVtRmFpbHVyZXMgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXMuZmFpbHVyZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGZhaWx1cmVzOiBbXSwgbnVtRmFpbHVyZXM6IDAsIGxhc3RSZXN1bHQ6IHVuZGVmaW5lZCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZU5leHRDaHVuayh0cmFucywgX19hc3NpZ24oX19hc3NpZ24oe30sIHJhbmdlKSwgeyBsb3dlcjogcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSwgbG93ZXJPcGVuOiB0cnVlIH0pLCBsaW1pdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZU1pZGRsZXdhcmU7XG4gICAgICAgICAgICB9IH0pKTsgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0RXhpc3RpbmdWYWx1ZXModGFibGUsIHJlcSwgZWZmZWN0aXZlS2V5cykge1xuICAgICAgICByZXR1cm4gcmVxLnR5cGUgPT09IFwiYWRkXCJcbiAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgICAgICAgOiB0YWJsZS5nZXRNYW55KHsgdHJhbnM6IHJlcS50cmFucywga2V5czogZWZmZWN0aXZlS2V5cywgY2FjaGU6IFwiaW1tdXRhYmxlXCIgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUoa2V5cywgY2FjaGUsIGNsb25lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKGNhY2hlLmtleXMubGVuZ3RoIDwga2V5cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBjYWNoZS5rZXlzLmxlbmd0aCAmJiBqIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChjbXAoY2FjaGUua2V5c1tpXSwga2V5c1tqXSkgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNsb25lID8gZGVlcENsb25lKGNhY2hlLnZhbHVlc1tpXSkgOiBjYWNoZS52YWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQubGVuZ3RoID09PSBrZXlzLmxlbmd0aCA/IHJlc3VsdCA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY2FjaGVFeGlzdGluZ1ZhbHVlc01pZGRsZXdhcmUgPSB7XG4gICAgICAgIHN0YWNrOiBcImRiY29yZVwiLFxuICAgICAgICBsZXZlbDogLTEsXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFibGU6IGZ1bmN0aW9uICh0YWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gY29yZS50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhYmxlKSwgeyBnZXRNYW55OiBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXEuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlLmdldE1hbnkocmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlZFJlc3VsdCA9IGdldEZyb21UcmFuc2FjdGlvbkNhY2hlKHJlcS5rZXlzLCByZXEudHJhbnNbXCJfY2FjaGVcIl0sIHJlcS5jYWNoZSA9PT0gXCJjbG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZShjYWNoZWRSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUuZ2V0TWFueShyZXEpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEudHJhbnNbXCJfY2FjaGVcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiByZXEua2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogcmVxLmNhY2hlID09PSBcImNsb25lXCIgPyBkZWVwQ2xvbmUocmVzKSA6IHJlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG11dGF0ZTogZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEudHlwZSAhPT0gXCJhZGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnRyYW5zW1wiX2NhY2hlXCJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUubXV0YXRlKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0NhY2hhYmxlQ29udGV4dChjdHgsIHRhYmxlKSB7XG4gICAgICAgIHJldHVybiAoY3R4LnRyYW5zLm1vZGUgPT09ICdyZWFkb25seScgJiZcbiAgICAgICAgICAgICEhY3R4LnN1YnNjciAmJlxuICAgICAgICAgICAgIWN0eC50cmFucy5leHBsaWNpdCAmJlxuICAgICAgICAgICAgY3R4LnRyYW5zLmRiLl9vcHRpb25zLmNhY2hlICE9PSAnZGlzYWJsZWQnICYmXG4gICAgICAgICAgICAhdGFibGUuc2NoZW1hLnByaW1hcnlLZXkub3V0Ym91bmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ2FjaGFibGVSZXF1ZXN0KHR5cGUsIHJlcSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxLnZhbHVlcyAmJiAhcmVxLnVuaXF1ZTtcbiAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAnZ2V0TWFueSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ29wZW5DdXJzb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvYnNlcnZhYmlsaXR5TWlkZGxld2FyZSA9IHtcbiAgICAgICAgc3RhY2s6IFwiZGJjb3JlXCIsXG4gICAgICAgIGxldmVsOiAwLFxuICAgICAgICBuYW1lOiBcIk9ic2VydmFiaWxpdHlcIixcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoY29yZSkge1xuICAgICAgICAgICAgdmFyIGRiTmFtZSA9IGNvcmUuc2NoZW1hLm5hbWU7XG4gICAgICAgICAgICB2YXIgRlVMTF9SQU5HRSA9IG5ldyBSYW5nZVNldChjb3JlLk1JTl9LRVksIGNvcmUuTUFYX0tFWSk7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvcmUpLCB7IHRyYW5zYWN0aW9uOiBmdW5jdGlvbiAoc3RvcmVzLCBtb2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQU0Quc3Vic2NyICYmIG1vZGUgIT09ICdyZWFkb25seScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlJlYWRPbmx5KFwiUmVhZHdyaXRlIHRyYW5zYWN0aW9uIGluIGxpdmVRdWVyeSBjb250ZXh0LiBRdWVyaWVyIHNvdXJjZTogXCIuY29uY2F0KFBTRC5xdWVyaWVyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvcmUudHJhbnNhY3Rpb24oc3RvcmVzLCBtb2RlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LCB0YWJsZTogZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBjb3JlLnRhYmxlKHRhYmxlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2hlbWEgPSB0YWJsZS5zY2hlbWE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmltYXJ5S2V5ID0gc2NoZW1hLnByaW1hcnlLZXksIGluZGV4ZXMgPSBzY2hlbWEuaW5kZXhlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RLZXkgPSBwcmltYXJ5S2V5LmV4dHJhY3RLZXksIG91dGJvdW5kID0gcHJpbWFyeUtleS5vdXRib3VuZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ZXNXaXRoQXV0b0luY1BLID0gcHJpbWFyeUtleS5hdXRvSW5jcmVtZW50ICYmIGluZGV4ZXMuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gaW5kZXguY29tcG91bmQgJiYgaW5kZXgua2V5UGF0aC5pbmNsdWRlcyhwcmltYXJ5S2V5LmtleVBhdGgpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlQ2xvbmUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGFibGUpLCB7IG11dGF0ZTogZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zID0gcmVxLnRyYW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGVkUGFydHMgPSByZXEubXV0YXRlZFBhcnRzIHx8IChyZXEubXV0YXRlZFBhcnRzID0ge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnZXRSYW5nZVNldCA9IGZ1bmN0aW9uIChpbmRleE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBcImlkYjovL1wiLmNvbmNhdChkYk5hbWUsIFwiL1wiKS5jb25jYXQodGFibGVOYW1lLCBcIi9cIikuY29uY2F0KGluZGV4TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobXV0YXRlZFBhcnRzW3BhcnRdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobXV0YXRlZFBhcnRzW3BhcnRdID0gbmV3IFJhbmdlU2V0KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwa1JhbmdlU2V0ID0gZ2V0UmFuZ2VTZXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHNSYW5nZVNldCA9IGdldFJhbmdlU2V0KFwiOmRlbHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSByZXEudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSByZXEudHlwZSA9PT0gXCJkZWxldGVSYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW3JlcS5yYW5nZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByZXEudHlwZSA9PT0gXCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbcmVxLmtleXNdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJlcS52YWx1ZXMubGVuZ3RoIDwgNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtnZXRFZmZlY3RpdmVLZXlzKHByaW1hcnlLZXksIHJlcSkuZmlsdGVyKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gaWQ7IH0pLCByZXEudmFsdWVzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sIGtleXMgPSBfY1swXSwgbmV3T2JqcyA9IF9jWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRDYWNoZSA9IHJlcS50cmFuc1tcIl9jYWNoZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShrZXlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwa1JhbmdlU2V0LmFkZEtleXMoa2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRPYmpzID0gdHlwZSA9PT0gJ2RlbGV0ZScgfHwga2V5cy5sZW5ndGggPT09IG5ld09ianMubGVuZ3RoID8gZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUoa2V5cywgb2xkQ2FjaGUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvbGRPYmpzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxzUmFuZ2VTZXQuYWRkS2V5cyhrZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkT2JqcyB8fCBuZXdPYmpzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja0FmZmVjdGVkSW5kZXhlcyhnZXRSYW5nZVNldCwgc2NoZW1hLCBvbGRPYmpzLCBuZXdPYmpzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IChfYSA9IGtleXMubG93ZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvcmUuTUlOX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAoX2IgPSBrZXlzLnVwcGVyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBjb3JlLk1BWF9LRVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsc1JhbmdlU2V0LmFkZChyYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrUmFuZ2VTZXQuYWRkKHJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrUmFuZ2VTZXQuYWRkKEZVTExfUkFOR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxzUmFuZ2VTZXQuYWRkKEZVTExfUkFOR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEuaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHsgcmV0dXJuIGdldFJhbmdlU2V0KGlkeC5uYW1lKS5hZGQoRlVMTF9SQU5HRSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUubXV0YXRlKHJlcSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzICYmIChyZXEudHlwZSA9PT0gJ2FkZCcgfHwgcmVxLnR5cGUgPT09ICdwdXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtSYW5nZVNldC5hZGRLZXlzKHJlcy5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleGVzV2l0aEF1dG9JbmNQSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXNXaXRoQXV0b0luY1BLLmZvckVhY2goZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4VmFscyA9IHJlcS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBpZHguZXh0cmFjdEtleSh2KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwa1BvcyA9IGlkeC5rZXlQYXRoLmZpbmRJbmRleChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gcHJvcCA9PT0gcHJpbWFyeUtleS5rZXlQYXRoOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJlcy5yZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHhWYWxzW2ldW3BrUG9zXSA9IHJlcy5yZXN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFJhbmdlU2V0KGlkeC5uYW1lKS5hZGRLZXlzKGlkeFZhbHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zLm11dGF0ZWRQYXJ0cyA9IGV4dGVuZE9ic2VydmFiaWxpdHlTZXQodHJhbnMubXV0YXRlZFBhcnRzIHx8IHt9LCBtdXRhdGVkUGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldFJhbmdlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX2EucXVlcnksIGluZGV4ID0gX2QuaW5kZXgsIHJhbmdlID0gX2QucmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSYW5nZVNldCgoX2IgPSByYW5nZS5sb3dlcikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogY29yZS5NSU5fS0VZLCAoX2MgPSByYW5nZS51cHBlcikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogY29yZS5NQVhfS0VZKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFkU3Vic2NyaWJlcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChyZXEpIHsgcmV0dXJuIFtwcmltYXJ5S2V5LCBuZXcgUmFuZ2VTZXQocmVxLmtleSldOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFueTogZnVuY3Rpb24gKHJlcSkgeyByZXR1cm4gW3ByaW1hcnlLZXksIG5ldyBSYW5nZVNldCgpLmFkZEtleXMocmVxLmtleXMpXTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBnZXRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBnZXRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5DdXJzb3I6IGdldFJhbmdlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBrZXlzKHJlYWRTdWJzY3JpYmVycykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsb25lW21ldGhvZF0gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YnNjciA9IFBTRC5zdWJzY3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTGl2ZVF1ZXJ5ID0gISFzdWJzY3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hhYmxlID0gaXNDYWNoYWJsZUNvbnRleHQoUFNELCB0YWJsZSkgJiYgaXNDYWNoYWJsZVJlcXVlc3QobWV0aG9kLCByZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYnNTZXQgPSBjYWNoYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlcS5vYnNTZXQgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN1YnNjcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMaXZlUXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdldFJhbmdlU2V0ID0gZnVuY3Rpb24gKGluZGV4TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBcImlkYjovL1wiLmNvbmNhdChkYk5hbWUsIFwiL1wiKS5jb25jYXQodGFibGVOYW1lLCBcIi9cIikuY29uY2F0KGluZGV4TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG9ic1NldFtwYXJ0XSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvYnNTZXRbcGFydF0gPSBuZXcgUmFuZ2VTZXQoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGtSYW5nZVNldF8xID0gZ2V0UmFuZ2VTZXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWxzUmFuZ2VTZXRfMSA9IGdldFJhbmdlU2V0KFwiOmRlbHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlYWRTdWJzY3JpYmVyc1ttZXRob2RdKHJlcSksIHF1ZXJpZWRJbmRleCA9IF9hWzBdLCBxdWVyaWVkUmFuZ2VzID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdxdWVyeScgJiYgcXVlcmllZEluZGV4LmlzUHJpbWFyeUtleSAmJiAhcmVxLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsc1JhbmdlU2V0XzEuYWRkKHF1ZXJpZWRSYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmFuZ2VTZXQocXVlcmllZEluZGV4Lm5hbWUgfHwgXCJcIikuYWRkKHF1ZXJpZWRSYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcXVlcmllZEluZGV4LmlzUHJpbWFyeUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJjb3VudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsc1JhbmdlU2V0XzEuYWRkKEZVTExfUkFOR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXNQcm9taXNlXzEgPSBtZXRob2QgPT09IFwicXVlcnlcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRib3VuZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEudmFsdWVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnF1ZXJ5KF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXEpLCB7IHZhbHVlczogZmFsc2UgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZVttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicXVlcnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dGJvdW5kICYmIHJlcS52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5c1Byb21pc2VfMS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0aW5nS2V5cyA9IF9hLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtSYW5nZVNldF8xLmFkZEtleXMocmVzdWx0aW5nS2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcEtleXMgPSByZXEudmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZXMucmVzdWx0Lm1hcChleHRyYWN0S2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEudmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtSYW5nZVNldF8xLmFkZEtleXMocEtleXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsc1JhbmdlU2V0XzEuYWRkS2V5cyhwS2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWV0aG9kID09PSBcIm9wZW5DdXJzb3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnNvcl8xID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhbnRWYWx1ZXNfMSA9IHJlcS52YWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGN1cnNvcl8xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmNyZWF0ZShjdXJzb3JfMSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHNSYW5nZVNldF8xLmFkZEtleShjdXJzb3JfMS5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yXzEua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBrZXkgPSBjdXJzb3JfMS5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHNSYW5nZVNldF8xLmFkZEtleShwa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YW50VmFsdWVzXzEgJiYgcGtSYW5nZVNldF8xLmFkZEtleShjdXJzb3JfMS5wcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZVttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlQ2xvbmU7XG4gICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHRyYWNrQWZmZWN0ZWRJbmRleGVzKGdldFJhbmdlU2V0LCBzY2hlbWEsIG9sZE9ianMsIG5ld09ianMpIHtcbiAgICAgICAgZnVuY3Rpb24gYWRkQWZmZWN0ZWRJbmRleChpeCkge1xuICAgICAgICAgICAgdmFyIHJhbmdlU2V0ID0gZ2V0UmFuZ2VTZXQoaXgubmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4dHJhY3RLZXkob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAhPSBudWxsID8gaXguZXh0cmFjdEtleShvYmopIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhZGRLZXlPcktleXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBpeC5tdWx0aUVudHJ5ICYmIGlzQXJyYXkoa2V5KVxuICAgICAgICAgICAgICAgID8ga2V5LmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gcmFuZ2VTZXQuYWRkS2V5KGtleSk7IH0pXG4gICAgICAgICAgICAgICAgOiByYW5nZVNldC5hZGRLZXkoa2V5KTsgfTtcbiAgICAgICAgICAgIChvbGRPYmpzIHx8IG5ld09ianMpLmZvckVhY2goZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkS2V5ID0gb2xkT2JqcyAmJiBleHRyYWN0S2V5KG9sZE9ianNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBuZXdPYmpzICYmIGV4dHJhY3RLZXkobmV3T2Jqc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNtcChvbGRLZXksIG5ld0tleSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEtleSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkS2V5T3JLZXlzKG9sZEtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdLZXkgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEtleU9yS2V5cyhuZXdLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVtYS5pbmRleGVzLmZvckVhY2goYWRkQWZmZWN0ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRqdXN0T3B0aW1pc3RpY0Zyb21GYWlsdXJlcyh0YmxDYWNoZSwgcmVxLCByZXMpIHtcbiAgICAgICAgaWYgKHJlcy5udW1GYWlsdXJlcyA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiByZXE7XG4gICAgICAgIGlmIChyZXEudHlwZSA9PT0gJ2RlbGV0ZVJhbmdlJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bUJ1bGtPcHMgPSByZXEua2V5c1xuICAgICAgICAgICAgPyByZXEua2V5cy5sZW5ndGhcbiAgICAgICAgICAgIDogJ3ZhbHVlcycgaW4gcmVxICYmIHJlcS52YWx1ZXNcbiAgICAgICAgICAgICAgICA/IHJlcS52YWx1ZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICBpZiAocmVzLm51bUZhaWx1cmVzID09PSBudW1CdWxrT3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xvbmUgPSBfX2Fzc2lnbih7fSwgcmVxKTtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2xvbmUua2V5cykpIHtcbiAgICAgICAgICAgIGNsb25lLmtleXMgPSBjbG9uZS5rZXlzLmZpbHRlcihmdW5jdGlvbiAoXywgaSkgeyByZXR1cm4gIShpIGluIHJlcy5mYWlsdXJlcyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgndmFsdWVzJyBpbiBjbG9uZSAmJiBpc0FycmF5KGNsb25lLnZhbHVlcykpIHtcbiAgICAgICAgICAgIGNsb25lLnZhbHVlcyA9IGNsb25lLnZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKF8sIGkpIHsgcmV0dXJuICEoaSBpbiByZXMuZmFpbHVyZXMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBYm92ZUxvd2VyKGtleSwgcmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlLmxvd2VyID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiByYW5nZS5sb3dlck9wZW5cbiAgICAgICAgICAgICAgICA/IGNtcChrZXksIHJhbmdlLmxvd2VyKSA+IDBcbiAgICAgICAgICAgICAgICA6IGNtcChrZXksIHJhbmdlLmxvd2VyKSA+PSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0JlbG93VXBwZXIoa2V5LCByYW5nZSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UudXBwZXIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHJhbmdlLnVwcGVyT3BlblxuICAgICAgICAgICAgICAgID8gY21wKGtleSwgcmFuZ2UudXBwZXIpIDwgMFxuICAgICAgICAgICAgICAgIDogY21wKGtleSwgcmFuZ2UudXBwZXIpIDw9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzV2l0aGluUmFuZ2Uoa2V5LCByYW5nZSkge1xuICAgICAgICByZXR1cm4gaXNBYm92ZUxvd2VyKGtleSwgcmFuZ2UpICYmIGlzQmVsb3dVcHBlcihrZXksIHJhbmdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseU9wdGltaXN0aWNPcHMocmVzdWx0LCByZXEsIG9wcywgdGFibGUsIGNhY2hlRW50cnksIGltbXV0YWJsZSkge1xuICAgICAgICBpZiAoIW9wcyB8fCBvcHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcmVxLnF1ZXJ5LmluZGV4O1xuICAgICAgICB2YXIgbXVsdGlFbnRyeSA9IGluZGV4Lm11bHRpRW50cnk7XG4gICAgICAgIHZhciBxdWVyeVJhbmdlID0gcmVxLnF1ZXJ5LnJhbmdlO1xuICAgICAgICB2YXIgcHJpbWFyeUtleSA9IHRhYmxlLnNjaGVtYS5wcmltYXJ5S2V5O1xuICAgICAgICB2YXIgZXh0cmFjdFByaW1LZXkgPSBwcmltYXJ5S2V5LmV4dHJhY3RLZXk7XG4gICAgICAgIHZhciBleHRyYWN0SW5kZXggPSBpbmRleC5leHRyYWN0S2V5O1xuICAgICAgICB2YXIgZXh0cmFjdExvd0xldmVsSW5kZXggPSAoaW5kZXgubG93TGV2ZWxJbmRleCB8fCBpbmRleCkuZXh0cmFjdEtleTtcbiAgICAgICAgdmFyIGZpbmFsUmVzdWx0ID0gb3BzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBvcCkge1xuICAgICAgICAgICAgdmFyIG1vZGlmZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgaW5jbHVkZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChvcC50eXBlID09PSAnYWRkJyB8fCBvcC50eXBlID09PSAncHV0Jykge1xuICAgICAgICAgICAgICAgIHZhciBpbmNsdWRlZFBLcyA9IG5ldyBSYW5nZVNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBvcC52YWx1ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gb3AudmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGsgPSBleHRyYWN0UHJpbUtleSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlZFBLcy5oYXNLZXkocGspKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBleHRyYWN0SW5kZXgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlFbnRyeSAmJiBpc0FycmF5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8ga2V5LnNvbWUoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGlzV2l0aGluUmFuZ2UoaywgcXVlcnlSYW5nZSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGlzV2l0aGluUmFuZ2Uoa2V5LCBxdWVyeVJhbmdlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRQS3MuYWRkS2V5KHBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChvcC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRkJzoge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdLZXlzXzEgPSBuZXcgUmFuZ2VTZXQoKS5hZGRLZXlzKHJlcS52YWx1ZXMgPyByZXN1bHQubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBleHRyYWN0UHJpbUtleSh2KTsgfSkgOiByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmVkUmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyZXEudmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGluY2x1ZGVkVmFsdWVzLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBleHRyYWN0UHJpbUtleSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdLZXlzXzEuaGFzS2V5KGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0tleXNfMS5hZGRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGluY2x1ZGVkVmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZXh0cmFjdFByaW1LZXkodik7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0tleXNfMS5oYXNLZXkoaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0tleXNfMS5hZGRLZXkoayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdwdXQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlTZXRfMSA9IG5ldyBSYW5nZVNldCgpLmFkZEtleXMob3AudmFsdWVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZXh0cmFjdFByaW1LZXkodik7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZlZFJlc3VsdCA9IHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICFrZXlTZXRfMS5oYXNLZXkocmVxLnZhbHVlcyA/IGV4dHJhY3RQcmltS2V5KGl0ZW0pIDogaXRlbSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICByZXEudmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGluY2x1ZGVkVmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGluY2x1ZGVkVmFsdWVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZXh0cmFjdFByaW1LZXkodik7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzVG9EZWxldGVfMSA9IG5ldyBSYW5nZVNldCgpLmFkZEtleXMob3Aua2V5cyk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmZWRSZXN1bHQgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWtleXNUb0RlbGV0ZV8xLmhhc0tleShyZXEudmFsdWVzID8gZXh0cmFjdFByaW1LZXkoaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZVJhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlXzEgPSBvcC5yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZlZFJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICFpc1dpdGhpblJhbmdlKGV4dHJhY3RQcmltS2V5KGl0ZW0pLCByYW5nZV8xKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmZWRSZXN1bHQ7XG4gICAgICAgIH0sIHJlc3VsdCk7XG4gICAgICAgIGlmIChmaW5hbFJlc3VsdCA9PT0gcmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZmluYWxSZXN1bHQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGNtcChleHRyYWN0TG93TGV2ZWxJbmRleChhKSwgZXh0cmFjdExvd0xldmVsSW5kZXgoYikpIHx8XG4gICAgICAgICAgICAgICAgY21wKGV4dHJhY3RQcmltS2V5KGEpLCBleHRyYWN0UHJpbUtleShiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVxLmxpbWl0ICYmIHJlcS5saW1pdCA8IEluZmluaXR5KSB7XG4gICAgICAgICAgICBpZiAoZmluYWxSZXN1bHQubGVuZ3RoID4gcmVxLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgZmluYWxSZXN1bHQubGVuZ3RoID0gcmVxLmxpbWl0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gcmVxLmxpbWl0ICYmIGZpbmFsUmVzdWx0Lmxlbmd0aCA8IHJlcS5saW1pdCkge1xuICAgICAgICAgICAgICAgIGNhY2hlRW50cnkuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbW11dGFibGUgPyBPYmplY3QuZnJlZXplKGZpbmFsUmVzdWx0KSA6IGZpbmFsUmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFyZVJhbmdlc0VxdWFsKHIxLCByMikge1xuICAgICAgICByZXR1cm4gKGNtcChyMS5sb3dlciwgcjIubG93ZXIpID09PSAwICYmXG4gICAgICAgICAgICBjbXAocjEudXBwZXIsIHIyLnVwcGVyKSA9PT0gMCAmJlxuICAgICAgICAgICAgISFyMS5sb3dlck9wZW4gPT09ICEhcjIubG93ZXJPcGVuICYmXG4gICAgICAgICAgICAhIXIxLnVwcGVyT3BlbiA9PT0gISFyMi51cHBlck9wZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBhcmVMb3dlcnMobG93ZXIxLCBsb3dlcjIsIGxvd2VyT3BlbjEsIGxvd2VyT3BlbjIpIHtcbiAgICAgICAgaWYgKGxvd2VyMSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGxvd2VyMiAhPT0gdW5kZWZpbmVkID8gLTEgOiAwO1xuICAgICAgICBpZiAobG93ZXIyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgdmFyIGMgPSBjbXAobG93ZXIxLCBsb3dlcjIpO1xuICAgICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGxvd2VyT3BlbjEgJiYgbG93ZXJPcGVuMilcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIGlmIChsb3dlck9wZW4xKVxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGxvd2VyT3BlbjIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wYXJlVXBwZXJzKHVwcGVyMSwgdXBwZXIyLCB1cHBlck9wZW4xLCB1cHBlck9wZW4yKSB7XG4gICAgICAgIGlmICh1cHBlcjEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB1cHBlcjIgIT09IHVuZGVmaW5lZCA/IDEgOiAwO1xuICAgICAgICBpZiAodXBwZXIyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIHZhciBjID0gY21wKHVwcGVyMSwgdXBwZXIyKTtcbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh1cHBlck9wZW4xICYmIHVwcGVyT3BlbjIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAodXBwZXJPcGVuMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAodXBwZXJPcGVuMilcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTdXBlclJhbmdlKHIxLCByMikge1xuICAgICAgICByZXR1cm4gKGNvbXBhcmVMb3dlcnMocjEubG93ZXIsIHIyLmxvd2VyLCByMS5sb3dlck9wZW4sIHIyLmxvd2VyT3BlbikgPD0gMCAmJlxuICAgICAgICAgICAgY29tcGFyZVVwcGVycyhyMS51cHBlciwgcjIudXBwZXIsIHIxLnVwcGVyT3BlbiwgcjIudXBwZXJPcGVuKSA+PSAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQ29tcGF0aWJsZVF1ZXJ5KGRiTmFtZSwgdGFibGVOYW1lLCB0eXBlLCByZXEpIHtcbiAgICAgICAgdmFyIHRibENhY2hlID0gY2FjaGVbXCJpZGI6Ly9cIi5jb25jYXQoZGJOYW1lLCBcIi9cIikuY29uY2F0KHRhYmxlTmFtZSldO1xuICAgICAgICBpZiAoIXRibENhY2hlKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB2YXIgcXVlcmllcyA9IHRibENhY2hlLnF1ZXJpZXNbdHlwZV07XG4gICAgICAgIGlmICghcXVlcmllcylcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZmFsc2UsIHRibENhY2hlLCBudWxsXTtcbiAgICAgICAgdmFyIGluZGV4TmFtZSA9IHJlcS5xdWVyeSA/IHJlcS5xdWVyeS5pbmRleC5uYW1lIDogbnVsbDtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBxdWVyaWVzW2luZGV4TmFtZSB8fCAnJ107XG4gICAgICAgIGlmICghZW50cmllcylcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZmFsc2UsIHRibENhY2hlLCBudWxsXTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgICAgICAgICAgdmFyIGVxdWFsRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS5yZXEubGltaXQgPT09IHJlcS5saW1pdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkucmVxLnZhbHVlcyA9PT0gcmVxLnZhbHVlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJlUmFuZ2VzRXF1YWwoZW50cnkucmVxLnF1ZXJ5LnJhbmdlLCByZXEucXVlcnkucmFuZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlcXVhbEVudHJ5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxFbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YmxDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgdmFyIHN1cGVyRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9ICdsaW1pdCcgaW4gZW50cnkucmVxID8gZW50cnkucmVxLmxpbWl0IDogSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobGltaXQgPj0gcmVxLmxpbWl0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVxLnZhbHVlcyA/IGVudHJ5LnJlcS52YWx1ZXMgOiB0cnVlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdXBlclJhbmdlKGVudHJ5LnJlcS5xdWVyeS5yYW5nZSwgcmVxLnF1ZXJ5LnJhbmdlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdXBlckVudHJ5LCBmYWxzZSwgdGJsQ2FjaGUsIGVudHJpZXNdO1xuICAgICAgICAgICAgY2FzZSAnY291bnQnOlxuICAgICAgICAgICAgICAgIHZhciBjb3VudFF1ZXJ5ID0gZW50cmllcy5maW5kKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJlUmFuZ2VzRXF1YWwoZW50cnkucmVxLnF1ZXJ5LnJhbmdlLCByZXEucXVlcnkucmFuZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbY291bnRRdWVyeSwgISFjb3VudFF1ZXJ5LCB0YmxDYWNoZSwgZW50cmllc107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmVUb0NhY2hlRW50cnkoY2FjaGVFbnRyeSwgY29udGFpbmVyLCByZXF1ZXJ5LCBzaWduYWwpIHtcbiAgICAgICAgY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5hZGQocmVxdWVyeSk7XG4gICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5kZWxldGUocmVxdWVyeSk7XG4gICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZW5xdWVGb3JEZWxldGlvbihjYWNoZUVudHJ5LCBjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW5xdWVGb3JEZWxldGlvbihjYWNoZUVudHJ5LCBjb250YWluZXIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsQXJyYXlJdGVtKGNvbnRhaW5lciwgY2FjaGVFbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHZhciBjYWNoZU1pZGRsZXdhcmUgPSB7XG4gICAgICAgIHN0YWNrOiAnZGJjb3JlJyxcbiAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgIG5hbWU6ICdDYWNoZScsXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgICAgICAgIHZhciBkYk5hbWUgPSBjb3JlLnNjaGVtYS5uYW1lO1xuICAgICAgICAgICAgdmFyIGNvcmVNVyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb3JlKSwgeyB0cmFuc2FjdGlvbjogZnVuY3Rpb24gKHN0b3JlcywgbW9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWRidHJhbnMgPSBjb3JlLnRyYW5zYWN0aW9uKHN0b3JlcywgbW9kZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhZHdyaXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjXzEgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbmFsID0gYWNfMS5zaWduYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAod2FzQ29tbWl0dGVkKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNfMS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhZHdyaXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWZmZWN0ZWRTdWJzY3JpYmVyc18xID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHN0b3Jlc18xID0gc3RvcmVzOyBfaSA8IHN0b3Jlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZSA9IHN0b3Jlc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YmxDYWNoZSA9IGNhY2hlW1wiaWRiOi8vXCIuY29uY2F0KGRiTmFtZSwgXCIvXCIpLmNvbmNhdChzdG9yZU5hbWUpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YmxDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IGNvcmUudGFibGUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BzID0gdGJsQ2FjaGUub3B0aW1pc3RpY09wcy5maWx0ZXIoZnVuY3Rpb24gKG9wKSB7IHJldHVybiBvcC50cmFucyA9PT0gaWRidHJhbnM7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZGJ0cmFucy5fZXhwbGljaXQgJiYgd2FzQ29tbWl0dGVkICYmIGlkYnRyYW5zLm11dGF0ZWRQYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gT2JqZWN0LnZhbHVlcyh0YmxDYWNoZS5xdWVyaWVzLnF1ZXJ5KTsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gX2JbX2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSAwLCBfZCA9IGVudHJpZXMuc2xpY2UoKTsgX2MgPCBfZC5sZW5ndGg7IF9jKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfZFtfY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ic1NldHNPdmVybGFwKGVudHJ5Lm9ic1NldCwgaWRidHJhbnMubXV0YXRlZFBhcnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxBcnJheUl0ZW0oZW50cmllcywgZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1ZXJ5KSB7IHJldHVybiBhZmZlY3RlZFN1YnNjcmliZXJzXzEuYWRkKHJlcXVlcnkpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3BzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJsQ2FjaGUub3B0aW1pc3RpY09wcyA9IHRibENhY2hlLm9wdGltaXN0aWNPcHMuZmlsdGVyKGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gb3AudHJhbnMgIT09IGlkYnRyYW5zOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2UgPSAwLCBfZiA9IE9iamVjdC52YWx1ZXModGJsQ2FjaGUucXVlcmllcy5xdWVyeSk7IF9lIDwgX2YubGVuZ3RoOyBfZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IF9mW19lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9nID0gMCwgX2ggPSBlbnRyaWVzLnNsaWNlKCk7IF9nIDwgX2gubGVuZ3RoOyBfZysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2hbX2ddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5yZXMgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGJ0cmFucy5tdXRhdGVkUGFydHNcbiAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0NvbW1pdHRlZCAmJiAhZW50cnkuZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmVlemVSZXN1bHRzID0gT2JqZWN0LmlzRnJvemVuKGVudHJ5LnJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUmVzID0gYXBwbHlPcHRpbWlzdGljT3BzKGVudHJ5LnJlcywgZW50cnkucmVxLCBvcHMsIHRhYmxlLCBlbnRyeSwgZnJlZXplUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxBcnJheUl0ZW0oZW50cmllcywgZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlcnkpIHsgcmV0dXJuIGFmZmVjdGVkU3Vic2NyaWJlcnNfMS5hZGQocmVxdWVyeSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobW9kUmVzICE9PSBlbnRyeS5yZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5yZXMgPSBtb2RSZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkucHJvbWlzZSA9IERleGllUHJvbWlzZS5yZXNvbHZlKHsgcmVzdWx0OiBtb2RSZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxBcnJheUl0ZW0oZW50cmllcywgZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWVyeSkgeyByZXR1cm4gYWZmZWN0ZWRTdWJzY3JpYmVyc18xLmFkZChyZXF1ZXJ5KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZmZWN0ZWRTdWJzY3JpYmVyc18xLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlcnkpIHsgcmV0dXJuIHJlcXVlcnkoKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkYnRyYW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZW5kVHJhbnNhY3Rpb24oZmFsc2UpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBzaWduYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkYnRyYW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZW5kVHJhbnNhY3Rpb24oZmFsc2UpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBzaWduYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkYnRyYW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgZW5kVHJhbnNhY3Rpb24odHJ1ZSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IHNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZGJ0cmFucztcbiAgICAgICAgICAgICAgICB9LCB0YWJsZTogZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG93blRhYmxlID0gY29yZS50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpbUtleSA9IGRvd25UYWJsZS5zY2hlbWEucHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlTVcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZG93blRhYmxlKSwgeyBtdXRhdGU6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnMgPSBQU0QudHJhbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaW1LZXkub3V0Ym91bmQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnMuZGIuX29wdGlvbnMuY2FjaGUgPT09ICdkaXNhYmxlZCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnMuZXhwbGljaXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnMuaWRidHJhbnMubW9kZSAhPT0gJ3JlYWR3cml0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvd25UYWJsZS5tdXRhdGUocmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRibENhY2hlID0gY2FjaGVbXCJpZGI6Ly9cIi5jb25jYXQoZGJOYW1lLCBcIi9cIikuY29uY2F0KHRhYmxlTmFtZSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGJsQ2FjaGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb3duVGFibGUubXV0YXRlKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBkb3duVGFibGUubXV0YXRlKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZXEudHlwZSA9PT0gJ2FkZCcgfHwgcmVxLnR5cGUgPT09ICdwdXQnKSAmJiAocmVxLnZhbHVlcy5sZW5ndGggPj0gNTAgfHwgZ2V0RWZmZWN0aXZlS2V5cyhwcmltS2V5LCByZXEpLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ID09IG51bGw7IH0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcVdpdGhSZXNvbHZlZEtleXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVxKSwgeyB2YWx1ZXM6IHJlcS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZmFpbHVyZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVdpdGhLZXkgPSAoKF9hID0gcHJpbUtleS5rZXlQYXRoKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5jbHVkZXMoJy4nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVlcENsb25lKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2Fzc2lnbih7fSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCeUtleVBhdGgodmFsdWVXaXRoS2V5LCBwcmltS2V5LmtleVBhdGgsIHJlcy5yZXN1bHRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlV2l0aEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZFJlcSA9IGFkanVzdE9wdGltaXN0aWNGcm9tRmFpbHVyZXModGJsQ2FjaGUsIHJlcVdpdGhSZXNvbHZlZEtleXMsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YmxDYWNoZS5vcHRpbWlzdGljT3BzLnB1c2goYWRqdXN0ZWRSZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxLm11dGF0ZWRQYXJ0cyAmJiBzaWduYWxTdWJzY3JpYmVyc0xhemlseShyZXEubXV0YXRlZFBhcnRzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJsQ2FjaGUub3B0aW1pc3RpY09wcy5wdXNoKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5tdXRhdGVkUGFydHMgJiYgc2lnbmFsU3Vic2NyaWJlcnNMYXppbHkocmVxLm11dGF0ZWRQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLm51bUZhaWx1cmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbEFycmF5SXRlbSh0YmxDYWNoZS5vcHRpbWlzdGljT3BzLCByZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGp1c3RlZFJlcSA9IGFkanVzdE9wdGltaXN0aWNGcm9tRmFpbHVyZXModGJsQ2FjaGUsIHJlcSwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRqdXN0ZWRSZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJsQ2FjaGUub3B0aW1pc3RpY09wcy5wdXNoKGFkanVzdGVkUmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm11dGF0ZWRQYXJ0cyAmJiBzaWduYWxTdWJzY3JpYmVyc0xhemlseShyZXEubXV0YXRlZFBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsQXJyYXlJdGVtKHRibENhY2hlLm9wdGltaXN0aWNPcHMsIHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEubXV0YXRlZFBhcnRzICYmIHNpZ25hbFN1YnNjcmliZXJzTGF6aWx5KHJlcS5tdXRhdGVkUGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBxdWVyeTogZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ2FjaGFibGVDb250ZXh0KFBTRCwgZG93blRhYmxlKSB8fCAhaXNDYWNoYWJsZVJlcXVlc3QoXCJxdWVyeVwiLCByZXEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG93blRhYmxlLnF1ZXJ5KHJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyZWV6ZVJlc3VsdHMgPSAoKF9hID0gUFNELnRyYW5zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGIuX29wdGlvbnMuY2FjaGUpID09PSAnaW1tdXRhYmxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBQU0QsIHJlcXVlcnkgPSBfYi5yZXF1ZXJ5LCBzaWduYWwgPSBfYi5zaWduYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gZmluZENvbXBhdGlibGVRdWVyeShkYk5hbWUsIHRhYmxlTmFtZSwgJ3F1ZXJ5JywgcmVxKSwgY2FjaGVFbnRyeSA9IF9jWzBdLCBleGFjdE1hdGNoID0gX2NbMV0sIHRibENhY2hlID0gX2NbMl0sIGNvbnRhaW5lciA9IF9jWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5ICYmIGV4YWN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVFbnRyeS5vYnNTZXQgPSByZXEub2JzU2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBkb3duVGFibGUucXVlcnkocmVxKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlRW50cnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVFbnRyeS5yZXMgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJlZXplUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5mcmVlemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5yZXN1bHQgPSBkZWVwQ2xvbmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjYWNoZUVudHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbEFycmF5SXRlbShjb250YWluZXIsIGNhY2hlRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNTZXQ6IHJlcS5vYnNTZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcnM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdxdWVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXE6IHJlcSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goY2FjaGVFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBbY2FjaGVFbnRyeV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRibENhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJsQ2FjaGUgPSBjYWNoZVtcImlkYjovL1wiLmNvbmNhdChkYk5hbWUsIFwiL1wiKS5jb25jYXQodGFibGVOYW1lKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljT3BzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zaWduYWxlZFBhcnRzOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YmxDYWNoZS5xdWVyaWVzLnF1ZXJ5W3JlcS5xdWVyeS5pbmRleC5uYW1lIHx8ICcnXSA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVUb0NhY2hlRW50cnkoY2FjaGVFbnRyeSwgY29udGFpbmVyLCByZXF1ZXJ5LCBzaWduYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZUVudHJ5LnByb21pc2UudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGFwcGx5T3B0aW1pc3RpY09wcyhyZXMucmVzdWx0LCByZXEsIHRibENhY2hlID09PSBudWxsIHx8IHRibENhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YmxDYWNoZS5vcHRpbWlzdGljT3BzLCBkb3duVGFibGUsIGNhY2hlRW50cnksIGZyZWV6ZVJlc3VsdHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlTVc7XG4gICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIHJldHVybiBjb3JlTVc7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHZpcGlmeSh0YXJnZXQsIHZpcERiKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkYicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXBEYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBEZXhpZSQxID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIERleGllKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9taWRkbGV3YXJlcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy52ZXJubyA9IDA7XG4gICAgICAgICAgICB2YXIgZGVwcyA9IERleGllLmRlcGVuZGVuY2llcztcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zID0gX19hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGFkZG9uczogRGV4aWUuYWRkb25zLCBhdXRvT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmRleGVkREI6IGRlcHMuaW5kZXhlZERCLCBJREJLZXlSYW5nZTogZGVwcy5JREJLZXlSYW5nZSwgY2FjaGU6ICdjbG9uZWQnIH0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5fZGVwcyA9IHtcbiAgICAgICAgICAgICAgICBpbmRleGVkREI6IG9wdGlvbnMuaW5kZXhlZERCLFxuICAgICAgICAgICAgICAgIElEQktleVJhbmdlOiBvcHRpb25zLklEQktleVJhbmdlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFkZG9ucyA9IG9wdGlvbnMuYWRkb25zO1xuICAgICAgICAgICAgdGhpcy5fZGJTY2hlbWEgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3ZlcnNpb25zID0gW107XG4gICAgICAgICAgICB0aGlzLl9zdG9yZU5hbWVzID0gW107XG4gICAgICAgICAgICB0aGlzLl9hbGxUYWJsZXMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaWRiZGIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbm92aXAgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGRiT3BlbkVycm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGlzQmVpbmdPcGVuZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uUmVhZHlCZWluZ0ZpcmVkOiBudWxsLFxuICAgICAgICAgICAgICAgIG9wZW5Db21wbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGJSZWFkeVJlc29sdmU6IG5vcCxcbiAgICAgICAgICAgICAgICBkYlJlYWR5UHJvbWlzZTogbnVsbCxcbiAgICAgICAgICAgICAgICBjYW5jZWxPcGVuOiBub3AsXG4gICAgICAgICAgICAgICAgb3BlbkNhbmNlbGxlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRvU2NoZW1hOiB0cnVlLFxuICAgICAgICAgICAgICAgIFBSMTM5OF9tYXhMb29wOiAzLFxuICAgICAgICAgICAgICAgIGF1dG9PcGVuOiBvcHRpb25zLmF1dG9PcGVuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0YXRlLmRiUmVhZHlQcm9taXNlID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmRiUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUub3BlbkNhbmNlbGxlciA9IG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmNhbmNlbE9wZW4gPSByZWplY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5vbiA9IEV2ZW50cyh0aGlzLCBcInBvcHVsYXRlXCIsIFwiYmxvY2tlZFwiLCBcInZlcnNpb25jaGFuZ2VcIiwgXCJjbG9zZVwiLCB7IHJlYWR5OiBbcHJvbWlzYWJsZUNoYWluLCBub3BdIH0pO1xuICAgICAgICAgICAgdGhpcy5vbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbihldmVudCkudW5zdWJzY3JpYmUoZm4pO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub24oZXZlbnQsIGZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm9uLnJlYWR5LnN1YnNjcmliZSA9IG92ZXJyaWRlKHRoaXMub24ucmVhZHkuc3Vic2NyaWJlLCBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBiU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIERleGllLnZpcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUub3BlbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5kYk9wZW5FcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV4aWVQcm9taXNlLnJlc29sdmUoKS50aGVuKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiU3RpY2t5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZS5vblJlYWR5QmVpbmdGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9uUmVhZHlCZWluZ0ZpcmVkLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJTdGlja3kpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGJfMSA9IF90aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYlN0aWNreSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlKGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJfMS5vbi5yZWFkeS51bnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiXzEub24ucmVhZHkudW5zdWJzY3JpYmUodW5zdWJzY3JpYmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5Db2xsZWN0aW9uID0gY3JlYXRlQ29sbGVjdGlvbkNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5UYWJsZSA9IGNyZWF0ZVRhYmxlQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgICAgICB0aGlzLlRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb25Db25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuVmVyc2lvbiA9IGNyZWF0ZVZlcnNpb25Db25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuV2hlcmVDbGF1c2UgPSBjcmVhdGVXaGVyZUNsYXVzZUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbihcInZlcnNpb25jaGFuZ2VcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2Lm5ld1ZlcnNpb24gPiAwKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBbm90aGVyIGNvbm5lY3Rpb24gd2FudHMgdG8gdXBncmFkZSBkYXRhYmFzZSAnXCIuY29uY2F0KF90aGlzLm5hbWUsIFwiJy4gQ2xvc2luZyBkYiBub3cgdG8gcmVzdW1lIHRoZSB1cGdyYWRlLlwiKSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBbm90aGVyIGNvbm5lY3Rpb24gd2FudHMgdG8gZGVsZXRlIGRhdGFiYXNlICdcIi5jb25jYXQoX3RoaXMubmFtZSwgXCInLiBDbG9zaW5nIGRiIG5vdyB0byByZXN1bWUgdGhlIGRlbGV0ZSByZXF1ZXN0LlwiKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoeyBkaXNhYmxlQXV0b09wZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm9uKFwiYmxvY2tlZFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2Lm5ld1ZlcnNpb24gfHwgZXYubmV3VmVyc2lvbiA8IGV2Lm9sZFZlcnNpb24pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRleGllLmRlbGV0ZSgnXCIuY29uY2F0KF90aGlzLm5hbWUsIFwiJykgd2FzIGJsb2NrZWRcIikpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVXBncmFkZSAnXCIuY29uY2F0KF90aGlzLm5hbWUsIFwiJyBibG9ja2VkIGJ5IG90aGVyIGNvbm5lY3Rpb24gaG9sZGluZyB2ZXJzaW9uIFwiKS5jb25jYXQoZXYub2xkVmVyc2lvbiAvIDEwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX21heEtleSA9IGdldE1heEtleShvcHRpb25zLklEQktleVJhbmdlKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKG1vZGUsIHN0b3JlTmFtZXMsIGRic2NoZW1hLCBwYXJlbnRUcmFuc2FjdGlvbikgeyByZXR1cm4gbmV3IF90aGlzLlRyYW5zYWN0aW9uKG1vZGUsIHN0b3JlTmFtZXMsIGRic2NoZW1hLCBfdGhpcy5fb3B0aW9ucy5jaHJvbWVUcmFuc2FjdGlvbkR1cmFiaWxpdHksIHBhcmVudFRyYW5zYWN0aW9uKTsgfTtcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVPbkJsb2NrZWQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbihcImJsb2NrZWRcIikuZmlyZShldik7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5uYW1lID09PSBfdGhpcy5uYW1lICYmIGMgIT09IF90aGlzICYmICFjLl9zdGF0ZS52Y0ZpcmVkOyB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLm9uKFwidmVyc2lvbmNoYW5nZVwiKS5maXJlKGV2KTsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy51c2UoY2FjaGVFeGlzdGluZ1ZhbHVlc01pZGRsZXdhcmUpO1xuICAgICAgICAgICAgdGhpcy51c2UoY2FjaGVNaWRkbGV3YXJlKTtcbiAgICAgICAgICAgIHRoaXMudXNlKG9ic2VydmFiaWxpdHlNaWRkbGV3YXJlKTtcbiAgICAgICAgICAgIHRoaXMudXNlKHZpcnR1YWxJbmRleE1pZGRsZXdhcmUpO1xuICAgICAgICAgICAgdGhpcy51c2UoaG9va3NNaWRkbGV3YXJlKTtcbiAgICAgICAgICAgIHZhciB2aXBEQiA9IG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdfdmlwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RhYmxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFibGVOYW1lKSB7IHJldHVybiB2aXBpZnkoX3RoaXMudGFibGUodGFibGVOYW1lKSwgdmlwREIpOyB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnYgPSBSZWZsZWN0LmdldChfLCBwcm9wLCByZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChydiBpbnN0YW5jZW9mIFRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpcGlmeShydiwgdmlwREIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RhYmxlcycpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnYubWFwKGZ1bmN0aW9uICh0KSB7IHJldHVybiB2aXBpZnkodCwgdmlwREIpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdfY3JlYXRlVHJhbnNhY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSBydi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXBpZnkodHgsIHZpcERCKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudmlwID0gdmlwREI7XG4gICAgICAgICAgICBhZGRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWRkb24pIHsgcmV0dXJuIGFkZG9uKF90aGlzKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgRGV4aWUucHJvdG90eXBlLnZlcnNpb24gPSBmdW5jdGlvbiAodmVyc2lvbk51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZlcnNpb25OdW1iZXIpIHx8IHZlcnNpb25OdW1iZXIgPCAwLjEpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuVHlwZShcIkdpdmVuIHZlcnNpb24gaXMgbm90IGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICAgICAgdmVyc2lvbk51bWJlciA9IE1hdGgucm91bmQodmVyc2lvbk51bWJlciAqIDEwKSAvIDEwO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWRiZGIgfHwgdGhpcy5fc3RhdGUuaXNCZWluZ09wZW5lZClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TY2hlbWEoXCJDYW5ub3QgYWRkIHZlcnNpb24gd2hlbiBkYXRhYmFzZSBpcyBvcGVuXCIpO1xuICAgICAgICAgICAgdGhpcy52ZXJubyA9IE1hdGgubWF4KHRoaXMudmVybm8sIHZlcnNpb25OdW1iZXIpO1xuICAgICAgICAgICAgdmFyIHZlcnNpb25zID0gdGhpcy5fdmVyc2lvbnM7XG4gICAgICAgICAgICB2YXIgdmVyc2lvbkluc3RhbmNlID0gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2Ll9jZmcudmVyc2lvbiA9PT0gdmVyc2lvbk51bWJlcjsgfSlbMF07XG4gICAgICAgICAgICBpZiAodmVyc2lvbkluc3RhbmNlKVxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uSW5zdGFuY2U7XG4gICAgICAgICAgICB2ZXJzaW9uSW5zdGFuY2UgPSBuZXcgdGhpcy5WZXJzaW9uKHZlcnNpb25OdW1iZXIpO1xuICAgICAgICAgICAgdmVyc2lvbnMucHVzaCh2ZXJzaW9uSW5zdGFuY2UpO1xuICAgICAgICAgICAgdmVyc2lvbnMuc29ydChsb3dlclZlcnNpb25GaXJzdCk7XG4gICAgICAgICAgICB2ZXJzaW9uSW5zdGFuY2Uuc3RvcmVzKHt9KTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLmF1dG9TY2hlbWEgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uSW5zdGFuY2U7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5fd2hlblJlYWR5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmlkYmRiICYmICh0aGlzLl9zdGF0ZS5vcGVuQ29tcGxldGUgfHwgUFNELmxldFRocm91Z2ggfHwgdGhpcy5fdmlwKSkgPyBmbigpIDogbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9zdGF0ZS5vcGVuQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhjZXB0aW9ucy5EYXRhYmFzZUNsb3NlZChfdGhpcy5fc3RhdGUuZGJPcGVuRXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fc3RhdGUuaXNCZWluZ09wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9zdGF0ZS5hdXRvT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBleGNlcHRpb25zLkRhdGFiYXNlQ2xvc2VkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wZW4oKS5jYXRjaChub3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5fc3RhdGUuZGJSZWFkeVByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSkudGhlbihmbik7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IF9hLnN0YWNrLCBjcmVhdGUgPSBfYS5jcmVhdGUsIGxldmVsID0gX2EubGV2ZWwsIG5hbWUgPSBfYS5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUpXG4gICAgICAgICAgICAgICAgdGhpcy51bnVzZSh7IHN0YWNrOiBzdGFjaywgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgIHZhciBtaWRkbGV3YXJlcyA9IHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXSB8fCAodGhpcy5fbWlkZGxld2FyZXNbc3RhY2tdID0gW10pO1xuICAgICAgICAgICAgbWlkZGxld2FyZXMucHVzaCh7IHN0YWNrOiBzdGFjaywgY3JlYXRlOiBjcmVhdGUsIGxldmVsOiBsZXZlbCA9PSBudWxsID8gMTAgOiBsZXZlbCwgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgIG1pZGRsZXdhcmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEubGV2ZWwgLSBiLmxldmVsOyB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBEZXhpZS5wcm90b3R5cGUudW51c2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IF9hLnN0YWNrLCBuYW1lID0gX2EubmFtZSwgY3JlYXRlID0gX2EuY3JlYXRlO1xuICAgICAgICAgICAgaWYgKHN0YWNrICYmIHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXSA9IHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXS5maWx0ZXIoZnVuY3Rpb24gKG13KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGUgPyBtdy5jcmVhdGUgIT09IGNyZWF0ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID8gbXcubmFtZSAhPT0gbmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgRGV4aWUucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHVzZVBTRChnbG9iYWxQU0QsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXhpZU9wZW4oX3RoaXMpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgRGV4aWUucHJvdG90eXBlLl9jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub24uY2xvc2UuZmlyZShuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICB2YXIgaWR4ID0gY29ubmVjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkYmRiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGJkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICAgICAgdGhpcy5pZGJkYiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLmlzQmVpbmdPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYlJlYWR5UHJvbWlzZSA9IG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGJSZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXRlLm9wZW5DYW5jZWxsZXIgPSBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY2FuY2VsT3BlbiA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRGV4aWUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8geyBkaXNhYmxlQXV0b09wZW46IHRydWUgfSA6IF9hLCBkaXNhYmxlQXV0b09wZW4gPSBfYi5kaXNhYmxlQXV0b09wZW47XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlQXV0b09wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaXNCZWluZ09wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jYW5jZWxPcGVuKG5ldyBleGNlcHRpb25zLkRhdGFiYXNlQ2xvc2VkKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmF1dG9PcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuZGJPcGVuRXJyb3IgPSBuZXcgZXhjZXB0aW9ucy5EYXRhYmFzZUNsb3NlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5hdXRvT3BlbiA9IHRoaXMuX29wdGlvbnMuYXV0b09wZW4gfHxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaXNCZWluZ09wZW5lZDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5vcGVuQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYk9wZW5FcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoY2xvc2VPcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGNsb3NlT3B0aW9ucyA9PT0gdm9pZCAwKSB7IGNsb3NlT3B0aW9ucyA9IHsgZGlzYWJsZUF1dG9PcGVuOiB0cnVlIH07IH1cbiAgICAgICAgICAgIHZhciBoYXNJbnZhbGlkQXJndW1lbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCc7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9EZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKGNsb3NlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBfdGhpcy5fZGVwcy5pbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoX3RoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vbkRhdGFiYXNlRGVsZXRlZChfdGhpcy5fZGVwcywgX3RoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICByZXEub25ibG9ja2VkID0gX3RoaXMuX2ZpcmVPbkJsb2NrZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzSW52YWxpZEFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiSW52YWxpZCBjbG9zZU9wdGlvbnMgYXJndW1lbnQgdG8gZGIuZGVsZXRlKClcIik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmlzQmVpbmdPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGJSZWFkeVByb21pc2UudGhlbihkb0RlbGV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb0RlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBEZXhpZS5wcm90b3R5cGUuYmFja2VuZERCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRiZGI7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZGJkYiAhPT0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgRGV4aWUucHJvdG90eXBlLmhhc0JlZW5DbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJPcGVuRXJyb3IgPSB0aGlzLl9zdGF0ZS5kYk9wZW5FcnJvcjtcbiAgICAgICAgICAgIHJldHVybiBkYk9wZW5FcnJvciAmJiAoZGJPcGVuRXJyb3IubmFtZSA9PT0gJ0RhdGFiYXNlQ2xvc2VkJyk7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5oYXNGYWlsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUuZGJPcGVuRXJyb3IgIT09IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5keW5hbWljYWxseU9wZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5hdXRvU2NoZW1hO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGV4aWUucHJvdG90eXBlLCBcInRhYmxlc1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlzKHRoaXMuX2FsbFRhYmxlcykubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBfdGhpcy5fYWxsVGFibGVzW25hbWVdOyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgRGV4aWUucHJvdG90eXBlLnRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBleHRyYWN0VHJhbnNhY3Rpb25BcmdzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNhY3Rpb24uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS5fdHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAobW9kZSwgdGFibGVzLCBzY29wZUZ1bmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcGFyZW50VHJhbnNhY3Rpb24gPSBQU0QudHJhbnM7XG4gICAgICAgICAgICBpZiAoIXBhcmVudFRyYW5zYWN0aW9uIHx8IHBhcmVudFRyYW5zYWN0aW9uLmRiICE9PSB0aGlzIHx8IG1vZGUuaW5kZXhPZignIScpICE9PSAtMSlcbiAgICAgICAgICAgICAgICBwYXJlbnRUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB2YXIgb25seUlmQ29tcGF0aWJsZSA9IG1vZGUuaW5kZXhPZignPycpICE9PSAtMTtcbiAgICAgICAgICAgIG1vZGUgPSBtb2RlLnJlcGxhY2UoJyEnLCAnJykucmVwbGFjZSgnPycsICcnKTtcbiAgICAgICAgICAgIHZhciBpZGJNb2RlLCBzdG9yZU5hbWVzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdG9yZU5hbWVzID0gdGFibGVzLm1hcChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZSA9IHRhYmxlIGluc3RhbmNlb2YgX3RoaXMuVGFibGUgPyB0YWJsZS5uYW1lIDogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmVOYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhYmxlIGFyZ3VtZW50IHRvIERleGllLnRyYW5zYWN0aW9uKCkuIE9ubHkgVGFibGUgb3IgU3RyaW5nIGFyZSBhbGxvd2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVOYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09IFwiclwiIHx8IG1vZGUgPT09IFJFQURPTkxZKVxuICAgICAgICAgICAgICAgICAgICBpZGJNb2RlID0gUkVBRE9OTFk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobW9kZSA9PSBcInJ3XCIgfHwgbW9kZSA9PSBSRUFEV1JJVEUpXG4gICAgICAgICAgICAgICAgICAgIGlkYk1vZGUgPSBSRUFEV1JJVEU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJJbnZhbGlkIHRyYW5zYWN0aW9uIG1vZGU6IFwiICsgbW9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRUcmFuc2FjdGlvbi5tb2RlID09PSBSRUFET05MWSAmJiBpZGJNb2RlID09PSBSRUFEV1JJVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5SWZDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50VHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlN1YlRyYW5zYWN0aW9uKFwiQ2Fubm90IGVudGVyIGEgc3ViLXRyYW5zYWN0aW9uIHdpdGggUkVBRFdSSVRFIG1vZGUgd2hlbiBwYXJlbnQgdHJhbnNhY3Rpb24gaXMgUkVBRE9OTFlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRUcmFuc2FjdGlvbiAmJiBwYXJlbnRUcmFuc2FjdGlvbi5zdG9yZU5hbWVzLmluZGV4T2Yoc3RvcmVOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlJZkNvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TdWJUcmFuc2FjdGlvbihcIlRhYmxlIFwiICsgc3RvcmVOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBub3QgaW5jbHVkZWQgaW4gcGFyZW50IHRyYW5zYWN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob25seUlmQ29tcGF0aWJsZSAmJiBwYXJlbnRUcmFuc2FjdGlvbiAmJiAhcGFyZW50VHJhbnNhY3Rpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRUcmFuc2FjdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRyYW5zYWN0aW9uLl9wcm9taXNlKG51bGwsIGZ1bmN0aW9uIChfLCByZWplY3QpIHsgcmVqZWN0KGUpOyB9KSA6XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbnRlclRyYW5zYWN0aW9uID0gZW50ZXJUcmFuc2FjdGlvblNjb3BlLmJpbmQobnVsbCwgdGhpcywgaWRiTW9kZSwgc3RvcmVOYW1lcywgcGFyZW50VHJhbnNhY3Rpb24sIHNjb3BlRnVuYyk7XG4gICAgICAgICAgICByZXR1cm4gKHBhcmVudFRyYW5zYWN0aW9uID9cbiAgICAgICAgICAgICAgICBwYXJlbnRUcmFuc2FjdGlvbi5fcHJvbWlzZShpZGJNb2RlLCBlbnRlclRyYW5zYWN0aW9uLCBcImxvY2tcIikgOlxuICAgICAgICAgICAgICAgIFBTRC50cmFucyA/XG4gICAgICAgICAgICAgICAgICAgIHVzZVBTRChQU0QudHJhbnNsZXNzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fd2hlblJlYWR5KGVudGVyVHJhbnNhY3Rpb24pOyB9KSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3doZW5SZWFkeShlbnRlclRyYW5zYWN0aW9uKSk7XG4gICAgICAgIH07XG4gICAgICAgIERleGllLnByb3RvdHlwZS50YWJsZSA9IGZ1bmN0aW9uICh0YWJsZU5hbWUpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duKHRoaXMuX2FsbFRhYmxlcywgdGFibGVOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLkludmFsaWRUYWJsZShcIlRhYmxlIFwiLmNvbmNhdCh0YWJsZU5hbWUsIFwiIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbGxUYWJsZXNbdGFibGVOYW1lXTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIERleGllO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgc3ltYm9sT2JzZXJ2YWJsZSA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgXCJvYnNlcnZhYmxlXCIgaW4gU3ltYm9sXG4gICAgICAgID8gU3ltYm9sLm9ic2VydmFibGVcbiAgICAgICAgOiBcIkBAb2JzZXJ2YWJsZVwiO1xuICAgIHZhciBPYnNlcnZhYmxlID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICAgICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHgsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZSgheCB8fCB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8geyBuZXh0OiB4LCBlcnJvcjogZXJyb3IsIGNvbXBsZXRlOiBjb21wbGV0ZSB9IDogeCk7XG4gICAgICAgIH07XG4gICAgICAgIE9ic2VydmFibGUucHJvdG90eXBlW3N5bWJvbE9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgZG9tRGVwcztcbiAgICB0cnkge1xuICAgICAgICBkb21EZXBzID0ge1xuICAgICAgICAgICAgaW5kZXhlZERCOiBfZ2xvYmFsLmluZGV4ZWREQiB8fCBfZ2xvYmFsLm1vekluZGV4ZWREQiB8fCBfZ2xvYmFsLndlYmtpdEluZGV4ZWREQiB8fCBfZ2xvYmFsLm1zSW5kZXhlZERCLFxuICAgICAgICAgICAgSURCS2V5UmFuZ2U6IF9nbG9iYWwuSURCS2V5UmFuZ2UgfHwgX2dsb2JhbC53ZWJraXRJREJLZXlSYW5nZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBkb21EZXBzID0geyBpbmRleGVkREI6IG51bGwsIElEQktleVJhbmdlOiBudWxsIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGl2ZVF1ZXJ5KHF1ZXJpZXIpIHtcbiAgICAgICAgdmFyIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWU7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc2NvcGVGdW5jSXNBc3luYyA9IGlzQXN5bmNGdW5jdGlvbihxdWVyaWVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGUoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHdhc1Jvb3RFeGVjID0gYmVnaW5NaWNyb1RpY2tTY29wZSgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZUZ1bmNJc0FzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBydiA9IG5ld1Njb3BlKHF1ZXJpZXIsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZUZ1bmNJc0FzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBydiA9IHJ2LmZpbmFsbHkoZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHdhc1Jvb3RFeGVjICYmIGVuZE1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGFib3J0Q29udHJvbGxlcjtcbiAgICAgICAgICAgIHZhciBhY2N1bU11dHMgPSB7fTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50T2JzID0ge307XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWJvcnRDb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydGVkTGlzdGVuaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRzLnN0b3JhZ2VtdXRhdGVkLnVuc3Vic2NyaWJlKG11dGF0aW9uTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JzZXJ2ZXIuc3RhcnQgJiYgb2JzZXJ2ZXIuc3RhcnQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHZhciBzdGFydGVkTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgZG9RdWVyeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4ZWNJbkdsb2JhbENvbnRleHQoX2RvUXVlcnkpOyB9O1xuICAgICAgICAgICAgZnVuY3Rpb24gc2hvdWxkTm90aWZ5KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNTZXRzT3ZlcmxhcChjdXJyZW50T2JzLCBhY2N1bU11dHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG11dGF0aW9uTGlzdGVuZXIgPSBmdW5jdGlvbiAocGFydHMpIHtcbiAgICAgICAgICAgICAgICBleHRlbmRPYnNlcnZhYmlsaXR5U2V0KGFjY3VtTXV0cywgcGFydHMpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBkb1F1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBfZG9RdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VkIHx8XG4gICAgICAgICAgICAgICAgICAgICFkb21EZXBzLmluZGV4ZWREQilcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjY3VtTXV0cyA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBzdWJzY3IgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoYWJvcnRDb250cm9sbGVyKVxuICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyOiBzdWJzY3IsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVyeTogZG9RdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllcjogcXVlcmllcixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnM6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBleGVjdXRlKGN0eCk7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHJldCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VkIHx8IGN0eC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtTXV0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JzID0gc3Vic2NyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9iamVjdElzRW1wdHkoY3VycmVudE9icykgJiYgIXN0YXJ0ZWRMaXN0ZW5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50cyhERVhJRV9TVE9SQUdFX01VVEFURURfRVZFTlRfTkFNRSwgbXV0YXRpb25MaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBleGVjSW5HbG9iYWxDb250ZXh0KGZ1bmN0aW9uICgpIHsgcmV0dXJuICFjbG9zZWQgJiYgb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KHJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFbJ0RhdGFiYXNlQ2xvc2VkRXJyb3InLCAnQWJvcnRFcnJvciddLmluY2x1ZGVzKGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0luR2xvYmFsQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yICYmIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRvUXVlcnksIDApO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmFibGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBoYXNWYWx1ZTsgfTtcbiAgICAgICAgb2JzZXJ2YWJsZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN1cnJlbnRWYWx1ZTsgfTtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfVxuXG4gICAgdmFyIERleGllID0gRGV4aWUkMTtcbiAgICBwcm9wcyhEZXhpZSwgX19hc3NpZ24oX19hc3NpZ24oe30sIGZ1bGxOYW1lRXhjZXB0aW9ucyksIHtcbiAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAoZGF0YWJhc2VOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZGIgPSBuZXcgRGV4aWUoZGF0YWJhc2VOYW1lLCB7IGFkZG9uczogW10gfSk7XG4gICAgICAgICAgICByZXR1cm4gZGIuZGVsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4aXN0czogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGV4aWUobmFtZSwgeyBhZGRvbnM6IFtdIH0pLm9wZW4oKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KS5jYXRjaCgnTm9TdWNoRGF0YWJhc2VFcnJvcicsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF0YWJhc2VOYW1lczogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXRhYmFzZU5hbWVzKERleGllLmRlcGVuZGVuY2llcykudGhlbihjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKG5ldyBleGNlcHRpb25zLk1pc3NpbmdBUEkoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmluZUNsYXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBDbGFzcyhjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRoaXMsIGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIENsYXNzO1xuICAgICAgICB9LCBpZ25vcmVUcmFuc2FjdGlvbjogZnVuY3Rpb24gKHNjb3BlRnVuYykge1xuICAgICAgICAgICAgcmV0dXJuIFBTRC50cmFucyA/XG4gICAgICAgICAgICAgICAgdXNlUFNEKFBTRC50cmFuc2xlc3MsIHNjb3BlRnVuYykgOlxuICAgICAgICAgICAgICAgIHNjb3BlRnVuYygpO1xuICAgICAgICB9LCB2aXA6IHZpcCwgYXN5bmM6IGZ1bmN0aW9uIChnZW5lcmF0b3JGbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcnYgPSBhd2FpdEl0ZXJhdG9yKGdlbmVyYXRvckZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ2IHx8IHR5cGVvZiBydi50aGVuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHJ2KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHNwYXduOiBmdW5jdGlvbiAoZ2VuZXJhdG9yRm4sIGFyZ3MsIHRoaXopIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ2ID0gYXdhaXRJdGVyYXRvcihnZW5lcmF0b3JGbi5hcHBseSh0aGl6LCBhcmdzIHx8IFtdKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFydiB8fCB0eXBlb2YgcnYudGhlbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHJ2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRUcmFuc2FjdGlvbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQU0QudHJhbnMgfHwgbnVsbDsgfVxuICAgICAgICB9LCB3YWl0Rm9yOiBmdW5jdGlvbiAocHJvbWlzZU9yRnVuY3Rpb24sIG9wdGlvbmFsVGltZW91dCkge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBEZXhpZVByb21pc2UucmVzb2x2ZSh0eXBlb2YgcHJvbWlzZU9yRnVuY3Rpb24gPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgICAgIERleGllLmlnbm9yZVRyYW5zYWN0aW9uKHByb21pc2VPckZ1bmN0aW9uKSA6XG4gICAgICAgICAgICAgICAgcHJvbWlzZU9yRnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgLnRpbWVvdXQob3B0aW9uYWxUaW1lb3V0IHx8IDYwMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBQU0QudHJhbnMgP1xuICAgICAgICAgICAgICAgIFBTRC50cmFucy53YWl0Rm9yKHByb21pc2UpIDpcbiAgICAgICAgICAgICAgICBwcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBQcm9taXNlOiBEZXhpZVByb21pc2UsXG4gICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlYnVnOyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXREZWJ1Zyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlcml2ZTogZGVyaXZlLCBleHRlbmQ6IGV4dGVuZCwgcHJvcHM6IHByb3BzLCBvdmVycmlkZTogb3ZlcnJpZGUsXG4gICAgICAgIEV2ZW50czogRXZlbnRzLCBvbjogZ2xvYmFsRXZlbnRzLCBsaXZlUXVlcnk6IGxpdmVRdWVyeSwgZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldDogZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldCxcbiAgICAgICAgZ2V0QnlLZXlQYXRoOiBnZXRCeUtleVBhdGgsIHNldEJ5S2V5UGF0aDogc2V0QnlLZXlQYXRoLCBkZWxCeUtleVBhdGg6IGRlbEJ5S2V5UGF0aCwgc2hhbGxvd0Nsb25lOiBzaGFsbG93Q2xvbmUsIGRlZXBDbG9uZTogZGVlcENsb25lLCBnZXRPYmplY3REaWZmOiBnZXRPYmplY3REaWZmLCBjbXA6IGNtcCwgYXNhcDogYXNhcCQxLFxuICAgICAgICBtaW5LZXk6IG1pbktleSxcbiAgICAgICAgYWRkb25zOiBbXSxcbiAgICAgICAgY29ubmVjdGlvbnM6IGNvbm5lY3Rpb25zLFxuICAgICAgICBlcnJuYW1lczogZXJybmFtZXMsXG4gICAgICAgIGRlcGVuZGVuY2llczogZG9tRGVwcywgY2FjaGU6IGNhY2hlLFxuICAgICAgICBzZW1WZXI6IERFWElFX1ZFUlNJT04sIHZlcnNpb246IERFWElFX1ZFUlNJT04uc3BsaXQoJy4nKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gcGFyc2VJbnQobik7IH0pXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwLCBjLCBpKSB7IHJldHVybiBwICsgKGMgLyBNYXRoLnBvdygxMCwgaSAqIDIpKTsgfSkgfSkpO1xuICAgIERleGllLm1heEtleSA9IGdldE1heEtleShEZXhpZS5kZXBlbmRlbmNpZXMuSURCS2V5UmFuZ2UpO1xuXG4gICAgaWYgKHR5cGVvZiBkaXNwYXRjaEV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZ2xvYmFsRXZlbnRzKERFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FLCBmdW5jdGlvbiAodXBkYXRlZFBhcnRzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BhZ2F0aW5nTG9jYWxseSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudF8xO1xuICAgICAgICAgICAgICAgIGV2ZW50XzEgPSBuZXcgQ3VzdG9tRXZlbnQoU1RPUkFHRV9NVVRBVEVEX0RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdXBkYXRlZFBhcnRzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvcGFnYXRpbmdMb2NhbGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50XzEpO1xuICAgICAgICAgICAgICAgIHByb3BhZ2F0aW5nTG9jYWxseSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihTVE9SQUdFX01VVEFURURfRE9NX0VWRU5UX05BTUUsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9IF9hLmRldGFpbDtcbiAgICAgICAgICAgIGlmICghcHJvcGFnYXRpbmdMb2NhbGx5KSB7XG4gICAgICAgICAgICAgICAgcHJvcGFnYXRlTG9jYWxseShkZXRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvcGFnYXRlTG9jYWxseSh1cGRhdGVQYXJ0cykge1xuICAgICAgICB2YXIgd2FzTWUgPSBwcm9wYWdhdGluZ0xvY2FsbHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9wYWdhdGluZ0xvY2FsbHkgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsRXZlbnRzLnN0b3JhZ2VtdXRhdGVkLmZpcmUodXBkYXRlUGFydHMpO1xuICAgICAgICAgICAgc2lnbmFsU3Vic2NyaWJlcnNOb3codXBkYXRlUGFydHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgcHJvcGFnYXRpbmdMb2NhbGx5ID0gd2FzTWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHByb3BhZ2F0aW5nTG9jYWxseSA9IGZhbHNlO1xuXG4gICAgdmFyIGJjO1xuICAgIHZhciBjcmVhdGVCQyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBpZiAodHlwZW9mIEJyb2FkY2FzdENoYW5uZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNyZWF0ZUJDID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmMgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChTVE9SQUdFX01VVEFURURfRE9NX0VWRU5UX05BTUUpO1xuICAgICAgICAgICAgYmMub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7IHJldHVybiBldi5kYXRhICYmIHByb3BhZ2F0ZUxvY2FsbHkoZXYuZGF0YSk7IH07XG4gICAgICAgIH07XG4gICAgICAgIGNyZWF0ZUJDKCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmMudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJjLnVucmVmKCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsRXZlbnRzKERFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FLCBmdW5jdGlvbiAoY2hhbmdlZFBhcnRzKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BhZ2F0aW5nTG9jYWxseSkge1xuICAgICAgICAgICAgICAgIGJjLnBvc3RNZXNzYWdlKGNoYW5nZWRQYXJ0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghRGV4aWUkMS5kaXNhYmxlQmZDYWNoZSAmJiBldmVudC5wZXJzaXN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0RleGllOiBoYW5kbGluZyBwZXJzaXN0ZWQgcGFnZWhpZGUnKTtcbiAgICAgICAgICAgICAgICBiYyA9PT0gbnVsbCB8fCBiYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbm5lY3Rpb25zXzEgPSBjb25uZWN0aW9uczsgX2kgPCBjb25uZWN0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSBjb25uZWN0aW9uc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoeyBkaXNhYmxlQXV0b09wZW46IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIURleGllJDEuZGlzYWJsZUJmQ2FjaGUgJiYgZXZlbnQucGVyc2lzdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdEZXhpZTogaGFuZGxpbmcgcGVyc2lzdGVkIHBhZ2VzaG93Jyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQkMoKTtcbiAgICAgICAgICAgICAgICBwcm9wYWdhdGVMb2NhbGx5KHsgYWxsOiBuZXcgUmFuZ2VTZXQoLUluZmluaXR5LCBbW11dKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcE1vZGlmaWNhdGlvbih7IGFkZDogdmFsdWUgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcE1vZGlmaWNhdGlvbih7IHJlbW92ZTogdmFsdWUgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZVByZWZpeChhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcE1vZGlmaWNhdGlvbih7IHJlcGxhY2VQcmVmaXg6IFthLCBiXSB9KTtcbiAgICB9XG5cbiAgICBEZXhpZVByb21pc2UucmVqZWN0aW9uTWFwcGVyID0gbWFwRXJyb3I7XG4gICAgc2V0RGVidWcoZGVidWcpO1xuXG4gICAgdmFyIG5hbWVkRXhwb3J0cyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICBEZXhpZTogRGV4aWUkMSxcbiAgICAgICAgbGl2ZVF1ZXJ5OiBsaXZlUXVlcnksXG4gICAgICAgIEVudGl0eTogRW50aXR5LFxuICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgUHJvcE1vZGlmaWNhdGlvbjogUHJvcE1vZGlmaWNhdGlvbixcbiAgICAgICAgcmVwbGFjZVByZWZpeDogcmVwbGFjZVByZWZpeCxcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICAnZGVmYXVsdCc6IERleGllJDEsXG4gICAgICAgIFJhbmdlU2V0OiBSYW5nZVNldCxcbiAgICAgICAgbWVyZ2VSYW5nZXM6IG1lcmdlUmFuZ2VzLFxuICAgICAgICByYW5nZXNPdmVybGFwOiByYW5nZXNPdmVybGFwXG4gICAgfSk7XG5cbiAgICBfX2Fzc2lnbihEZXhpZSQxLCBuYW1lZEV4cG9ydHMsIHsgZGVmYXVsdDogRGV4aWUkMSB9KTtcblxuICAgIHJldHVybiBEZXhpZSQxO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXhpZS5qcy5tYXBcbiIsIi8vIE1ha2luZyB0aGUgbW9kdWxlIHZlcnNpb24gY29uc3VtYWJsZSB2aWEgcmVxdWlyZSAtIHRvIHByb2hpYml0XG4vLyBtdWx0aXBsZSBvY2N1cnJhbmNpZXMgb2YgdGhlIHNhbWUgbW9kdWxlIGluIHRoZSBzYW1lIGFwcFxuLy8gKGR1YWwgcGFja2FnZSBoYXphcmQsIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvcGFja2FnZXMuaHRtbCNkdWFsLXBhY2thZ2UtaGF6YXJkKVxuaW1wb3J0IF9EZXhpZSBmcm9tIFwiLi9kaXN0L2RleGllLmpzXCI7XG5jb25zdCBEZXhpZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJEZXhpZVwiKTtcbmNvbnN0IERleGllID0gZ2xvYmFsVGhpc1tEZXhpZVN5bWJvbF0gfHwgKGdsb2JhbFRoaXNbRGV4aWVTeW1ib2xdID0gX0RleGllKTtcbmlmIChfRGV4aWUuc2VtVmVyICE9PSBEZXhpZS5zZW1WZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFR3byBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgRGV4aWUgbG9hZGVkIGluIHRoZSBzYW1lIGFwcDogJHtfRGV4aWUuc2VtVmVyfSBhbmQgJHtEZXhpZS5zZW1WZXJ9YCk7XG59XG5jb25zdCB7IGxpdmVRdWVyeSwgbWVyZ2VSYW5nZXMsIHJhbmdlc092ZXJsYXAsIFJhbmdlU2V0LCBjbXAsIEVudGl0eSxcbiAgICBQcm9wTW9kaWZpY2F0aW9uLCByZXBsYWNlUHJlZml4LCBhZGQsIHJlbW92ZSxcbiAgICBEZXhpZVlQcm92aWRlciB9ID0gRGV4aWU7XG5leHBvcnQgeyBsaXZlUXVlcnksIG1lcmdlUmFuZ2VzLCByYW5nZXNPdmVybGFwLCBSYW5nZVNldCwgY21wLCBEZXhpZSwgRW50aXR5LFxuICAgIFByb3BNb2RpZmljYXRpb24sIHJlcGxhY2VQcmVmaXgsIGFkZCwgcmVtb3ZlLFxuICAgIERleGllWVByb3ZpZGVyfTtcbiAgICBcbmV4cG9ydCBkZWZhdWx0IERleGllO1xuIiwiLy8gc3JjL2RiLnRzXG5pbXBvcnQgRGV4aWUsIHsgVGFibGUgfSBmcm9tIFwiZGV4aWVcIjtcbmltcG9ydCB7IFdlYnNpdGVzLCBTdG9yZWRIaWdobGlnaHQsIEZvbGRlciB9IGZyb20gXCIuLi9jb250ZW50L3R5cGVcIjtcblxuLy8gRXh0ZW5kIERleGllIHdpdGggdHlwZWQgdGFibGVzXG5leHBvcnQgY2xhc3MgQW1iZXJEYXRhYmFzZSBleHRlbmRzIERleGllIHtcbiAgd2Vic2l0ZXMhOiBUYWJsZTxXZWJzaXRlcz47XG4gIGhpZ2hsaWdodHMhOiBUYWJsZTxTdG9yZWRIaWdobGlnaHQ+O1xuICBmb2xkZXJzITogVGFibGU8Rm9sZGVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkFNQkVSX0RBVEFCQVNFXCIpO1xuXG4gICAgLy8gRGVmaW5lIHNjaGVtYSAodmVyc2lvbmVkKVxuICAgIHRoaXMudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgICAgZm9sZGVyczogXCJpZCxjcmVhdGVkQXQsbmFtZSxwYXJlbnRJZCxbY3JlYXRlZEF0K2lkXVwiLFxuICAgIH0pO1xuICAgIHRoaXMudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgICAgd2Vic2l0ZXM6IFwiaWQsY3JlYXRlZEF0LHVybCxbY3JlYXRlZEF0K2lkXVwiLFxuICAgIH0pO1xuICAgIHRoaXMudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgICAgaGlnaGxpZ2h0czpcbiAgICAgICAgXCJpZCxjcmVhdGVkQXQsdXJsSWQsZm9sZGVySWQsY29sb3IsZm9udFNldHRpbmdzLG5vdGVzLHNlbGVjdGlvblN0cmluZyxhbmNob3JPZmZzZXQsZm9jdXNPZmZzZXQsYW5jaG9yUGF0aCxmb2N1c1BhdGgsYW5jaG9yQ29udGV4dCxmb2N1c0NvbnRleHQsW2NyZWF0ZWRBdCtpZF1cIixcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCBkYXRhYmFzZSBpbnN0YW5jZVxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IEFtYmVyRGF0YWJhc2UoKTtcbiIsImltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZGJcIjtcbmltcG9ydCB7IEZvbGRlciwgU3RvcmVkSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL2NvbnRlbnQvdHlwZVwiO1xuaW1wb3J0IHsgV2Vic2l0ZXMgfSBmcm9tIFwiLi4vY29udGVudC90eXBlXCI7XG5cbi8vIC0tLSBUZXN0IERlbGF5IC0tLVxuZXhwb3J0IGNvbnN0IGRlbGF5ID0gKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59O1xuXG4vLyAtLS0gR2V0IEFsbCBIaWdobGlnaHRzIC0tLVxuZXhwb3J0IGNvbnN0IGdldEFsbEhpZ2hsaWdodHNEQiA9IGFzeW5jICgpOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZGF0YT86IFN0b3JlZEhpZ2hsaWdodFtdO1xuICBlcnJvcj86IHN0cmluZyB8IEVycm9yO1xufT4gPT4ge1xuICByZXR1cm4gZGIuaGlnaGxpZ2h0c1xuICAgIC50b0FycmF5KClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YSB9O1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gICAgfSk7XG59O1xuXG4vLyAtLS0gR2V0IFNpbmdsZSBIaWdobGlnaHQgYnkgSUQgLS0tXG5leHBvcnQgY29uc3QgZ2V0SGlnaGxpZ2h0REIgPSBhc3luYyAoXG4gIGlkOiBzdHJpbmdcbik6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBkYXRhPzogU3RvcmVkSGlnaGxpZ2h0O1xuICBlcnJvcj86IHN0cmluZyB8IEVycm9yO1xufT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IGF3YWl0IGRiLmhpZ2hsaWdodHMuZ2V0KGlkKTtcblxuICAgIGlmICghaGlnaGxpZ2h0KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSGlnaGxpZ2h0IG5vdCBmb3VuZFwiIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogaGlnaGxpZ2h0IH07XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICB9XG59O1xuXG4vLyAtLS0gQWRkIEhpZ2hsaWdodCAtLS1cbmV4cG9ydCBjb25zdCBhZGRIaWdobGlnaHREQiA9IGFzeW5jIChcbiAgZGF0YTogU3RvcmVkSGlnaGxpZ2h0XG4pOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfCBFcnJvciB9PiA9PiB7XG4gIHJldHVybiBkYi5oaWdobGlnaHRzXG4gICAgLmFkZChkYXRhKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICAgIH0pO1xufTtcblxuLy8gLS0tIERlbGV0ZSBBbGwgSGlnaGxpZ2h0cyAtLS1cbmV4cG9ydCBjb25zdCBkZWxldGVBbGxIaWdobGlnaHRzREIgPSBhc3luYyAoKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgRXJyb3I7XG59PiA9PiB7XG4gIHJldHVybiBkYi5oaWdobGlnaHRzXG4gICAgLmNsZWFyKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFsbCBoaWdobGlnaHRzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICAgIH0pO1xufTtcbi8vIC0tLSBEZWxldGUgU2luZ2xlIEhpZ2hsaWdodCAtLS1cbmV4cG9ydCBjb25zdCBkZWxldGVIaWdobGlnaHREQiA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH0+ID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBGaXJzdCwgZ2V0IHRoZSBoaWdobGlnaHQgKHRvIHJldHJpZXZlIHVybElkKVxuICAgIGNvbnN0IGhpZ2hsaWdodCA9IGF3YWl0IGRiLmhpZ2hsaWdodHMuZ2V0KGlkKTtcbiAgICBpZiAoIWhpZ2hsaWdodCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgSGlnaGxpZ2h0IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kLmAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVybElkIH0gPSBoaWdobGlnaHQ7XG5cbiAgICAvLyBEZWxldGUgdGhlIGhpZ2hsaWdodFxuICAgIGF3YWl0IGRiLmhpZ2hsaWdodHMuZGVsZXRlKGlkKTtcbiAgICBjb25zb2xlLmxvZyhgSGlnaGxpZ2h0IHdpdGggaWQgJHtpZH0gZGVsZXRlZCBzdWNjZXNzZnVsbHkuYCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgb3RoZXIgaGlnaGxpZ2h0cyBmb3IgdGhpcyB1cmxJZFxuICAgIGNvbnN0IHJlbWFpbmluZyA9IGF3YWl0IGRiLmhpZ2hsaWdodHMud2hlcmUoXCJ1cmxJZFwiKS5lcXVhbHModXJsSWQpLmNvdW50KCk7XG5cbiAgICBpZiAocmVtYWluaW5nID09PSAwKSB7XG4gICAgICAvLyBObyBvdGhlciBoaWdobGlnaHRzIOKGkiBkZWxldGUgd2Vic2l0ZSByZWNvcmRcbiAgICAgIGF3YWl0IGRiLndlYnNpdGVzLmRlbGV0ZSh1cmxJZCk7XG4gICAgICBjb25zb2xlLmxvZyhgV2Vic2l0ZSB3aXRoIGlkICR7dXJsSWR9IGRlbGV0ZWQgKG5vIGhpZ2hsaWdodHMgbGVmdCkuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgV2Vic2l0ZSB3aXRoIGlkICR7dXJsSWR9IGtlcHQgKHN0aWxsICR7cmVtYWluaW5nfSBoaWdobGlnaHQocykgbGVmdCkuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGhpZ2hsaWdodDpcIiwgZXJyKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyci5tZXNzYWdlIH07XG4gIH1cbn07XG5cbi8vIC0tLSBBZGQgV2Vic2l0ZSAtLS1cbmV4cG9ydCBjb25zdCBhZGRXZWJzaXRlREIgPSBhc3luYyAoXG4gIGRhdGE6IFdlYnNpdGVzXG4pOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBFcnJvcjtcbiAgc2tpcHBlZD86IGJvb2xlYW47XG4gIHdlYnNpdGVJRD86IHN0cmluZztcbn0+ID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBjaGVjayBpZiB0aGlzIHVybCBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIud2Vic2l0ZXMud2hlcmUoXCJ1cmxcIikuZXF1YWxzKGRhdGEudXJsKS5maXJzdCgpO1xuXG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBza2lwcGVkOiB0cnVlLCB3ZWJzaXRlSUQ6IGV4aXN0aW5nLmlkIH07IC8vIGFscmVhZHkgZXhpc3RzLCBza2lwIGluc2VydFxuICAgIH1cblxuICAgIGF3YWl0IGRiLndlYnNpdGVzLmFkZChkYXRhKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB3ZWJzaXRlSUQ6IGRhdGEuaWQgfTtcbiAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn07XG5cbi8vIC0tLSBnZXQgd2Vic2l0ZSBoaWdobGlnaHRzIC0tLVxuZXhwb3J0IGNvbnN0IGdldFdlYnNpdGVIaWdobGlnaHRzREIgPSBhc3luYyAoXG4gIHVybDogc3RyaW5nXG4pOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBFcnJvcjtcbiAgZGF0YT86IFN0b3JlZEhpZ2hsaWdodFtdO1xufT4gPT4ge1xuICB0cnkge1xuICAgIC8vIDEuIEZpbmQgdGhlIHdlYnNpdGUgZW50cnkgYnkgaXRzIHVybFxuICAgIGNvbnN0IHdlYnNpdGUgPSBhd2FpdCBkYi53ZWJzaXRlcy53aGVyZShcInVybFwiKS5lcXVhbHModXJsKS5maXJzdCgpO1xuXG4gICAgaWYgKCF3ZWJzaXRlKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiV2Vic2l0ZSBub3QgZm91bmRcIiB9O1xuICAgIH1cblxuICAgIC8vIDIuIFVzZSB3ZWJzaXRlLmlkICh1cmxJZCkgdG8gZ2V0IGFsbCBoaWdobGlnaHRzXG4gICAgY29uc3QgaGlnaGxpZ2h0cyA9IGF3YWl0IGRiLmhpZ2hsaWdodHNcbiAgICAgIC53aGVyZShcInVybElkXCIpXG4gICAgICAuZXF1YWxzKHdlYnNpdGUuaWQpXG4gICAgICAudG9BcnJheSgpO1xuXG4gICAgLy8gMy4gU29ydCBieSBjcmVhdGVkQXRcbiAgICBoaWdobGlnaHRzLnNvcnQoKGEsIGIpID0+IE51bWJlcihhLmNyZWF0ZWRBdCkgLSBOdW1iZXIoYi5jcmVhdGVkQXQpKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGhpZ2hsaWdodHMgfTtcbiAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn07XG5cbi8vIC0tLSB1cGRhdGUgcHJvcGVydHkgaW4gaGlnaGxpZ2h0cyAtLS1cbmV4cG9ydCBjb25zdCB1cGRhdGVIaWdobGlnaHREQiA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxTdG9yZWRIaWdobGlnaHQ+XG4pOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBFcnJvcjtcbiAgdXBkYXRlZD86IGJvb2xlYW47XG59PiA9PiB7XG4gIHRyeSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSByZWNvcmQgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5oaWdobGlnaHRzLmdldChpZCk7XG5cbiAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSGlnaGxpZ2h0IG5vdCBmb3VuZFwiIH07XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG9ubHkgdGhlIGdpdmVuIGZpZWxkc1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmhpZ2hsaWdodHMudXBkYXRlKGlkLCB1cGRhdGVzKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB1cGRhdGVkOiByZXN1bHQgPiAwIH07XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICB9XG59O1xuXG4vLyBnZXQgYWxsIHdlYnNpdGVzIGxpc3RcbmV4cG9ydCBjb25zdCBnZXRBbGxXZWJzaXRlc0RCID0gYXN5bmMgKCk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IEVycm9yO1xuICBkYXRhPzogV2Vic2l0ZXNbXTtcbn0+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIud2Vic2l0ZXMudG9BcnJheSgpOyAvLyBmZXRjaCBhbGwgd2Vic2l0ZXNcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICB9XG59O1xuXG4vLyBkZWxldGUgd2Vic2l0ZSBhbmQgaXQncyBvd24gaGlnaGxpZ2h0c1xuXG5leHBvcnQgY29uc3QgZGVsZXRlV2Vic2l0ZURCID0gYXN5bmMgKFxuICBpZDogc3RyaW5nXG4pOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4gPT4ge1xuICB0cnkge1xuICAgIC8vIENoZWNrIGlmIHRoZSB3ZWJzaXRlIGV4aXN0c1xuICAgIGNvbnN0IHdlYnNpdGUgPSBhd2FpdCBkYi53ZWJzaXRlcy5nZXQoaWQpO1xuICAgIGlmICghd2Vic2l0ZSkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgV2Vic2l0ZSB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZC5gIH07XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIGFsbCBoaWdobGlnaHRzIGxpbmtlZCB0byB0aGlzIHdlYnNpdGVcbiAgICBhd2FpdCBkYi5oaWdobGlnaHRzLndoZXJlKFwidXJsSWRcIikuZXF1YWxzKGlkKS5kZWxldGUoKTtcblxuICAgIC8vIERlbGV0ZSB0aGUgd2Vic2l0ZSBpdHNlbGZcbiAgICBhd2FpdCBkYi53ZWJzaXRlcy5kZWxldGUoaWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgd2Vic2l0ZSBhbmQgaXRzIGhpZ2hsaWdodHM6XCIsIGVycik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnIubWVzc2FnZSB9O1xuICB9XG59O1xuXG4vLyBnZXQgYWxsIGZvbGRlcnNcbmV4cG9ydCBjb25zdCBnZXRBbGxGb2xkZXJzRGIgPSBhc3luYyAoKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGRhdGE/OiBGb2xkZXJbXTtcbiAgZXJyb3I/OiBzdHJpbmcgfCBFcnJvcjtcbn0+ID0+IHtcbiAgcmV0dXJuIGRiLmZvbGRlcnNcbiAgICAudG9BcnJheSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICAgIH0pO1xufTtcblxuLy8gZ2V0IGZvbGRlciBkYXRhIG9mIGEgc2luZ2xlIGhpZ2hsaWdodFxuZXhwb3J0IGNvbnN0IGdldEZvbGRlckJ5SGlnaGxpZ2h0SWREQiA9IGFzeW5jIChcbiAgaGlnaGxpZ2h0SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGRhdGE/OiBGb2xkZXI7XG4gIGVycm9yPzogc3RyaW5nIHwgRXJyb3I7XG59PiA9PiB7XG4gIHRyeSB7XG4gICAgLy8gMe+4j+KDoyBHZXQgdGhlIGhpZ2hsaWdodCBmaXJzdFxuICAgIGNvbnN0IGhpZ2hsaWdodCA9IGF3YWl0IGRiLmhpZ2hsaWdodHMuZ2V0KGhpZ2hsaWdodElkKTtcblxuICAgIGlmICghaGlnaGxpZ2h0KSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSGlnaGxpZ2h0IG5vdCBmb3VuZFwiIH07XG4gICAgfVxuXG4gICAgLy8gMu+4j+KDoyBFeHRyYWN0IGZvbGRlcklkXG4gICAgY29uc3QgZm9sZGVySWQgPSBoaWdobGlnaHQuZm9sZGVySWQ7XG4gICAgaWYgKCFmb2xkZXJJZCkge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkhpZ2hsaWdodCBoYXMgbm8gZm9sZGVySWRcIiB9O1xuICAgIH1cblxuICAgIC8vIDPvuI/ig6MgRmV0Y2ggdGhlIGZvbGRlclxuICAgIGNvbnN0IGZvbGRlciA9IGF3YWl0IGRiLmZvbGRlcnMuZ2V0KGZvbGRlcklkKTtcbiAgICBpZiAoIWZvbGRlcikge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZvbGRlciBub3QgZm91bmRcIiB9O1xuICAgIH1cblxuICAgIC8vIDTvuI/ig6MgUmV0dXJuIHN1Y2Nlc3NcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb2xkZXIgfTtcbiAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn07XG5cbi8vIC0tLSBnZXQgZm9sZGVyIGhpZ2hsaWdodHMgLS0tXG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJIaWdobGlnaHRzREIgPSBhc3luYyAoXG4gIGZvbGRlcklkOiBzdHJpbmdcbik6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IEVycm9yO1xuICBkYXRhPzogKFN0b3JlZEhpZ2hsaWdodCAmIHsgd2Vic2l0ZT86IFdlYnNpdGVzIH0pW107XG59PiA9PiB7XG4gIHRyeSB7XG4gICAgLy8gMS4gR2V0IGFsbCBoaWdobGlnaHRzIGZvciB0aGUgZm9sZGVyXG4gICAgY29uc3QgaGlnaGxpZ2h0cyA9IGF3YWl0IGRiLmhpZ2hsaWdodHNcbiAgICAgIC53aGVyZShcImZvbGRlcklkXCIpXG4gICAgICAuZXF1YWxzKGZvbGRlcklkKVxuICAgICAgLnRvQXJyYXkoKTtcblxuICAgIC8vIDIuIEV4dHJhY3QgYWxsIHVuaXF1ZSB1cmxJZHNcbiAgICBjb25zdCB1cmxJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoaGlnaGxpZ2h0cy5tYXAoKGgpID0+IGgudXJsSWQpKSk7XG5cbiAgICAvLyAzLiBHZXQgYWxsIHJlbGF0ZWQgd2Vic2l0ZXMgaW4gb25lIGJhdGNoIHF1ZXJ5XG4gICAgY29uc3Qgd2Vic2l0ZXMgPSBhd2FpdCBkYi53ZWJzaXRlcy53aGVyZShcImlkXCIpLmFueU9mKHVybElkcykudG9BcnJheSgpO1xuXG4gICAgLy8gNC4gTWFwIHdlYnNpdGVzIGJ5IGlkIGZvciBxdWljayBsb29rdXBcbiAgICBjb25zdCB3ZWJzaXRlTWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKHdlYnNpdGVzLm1hcCgodykgPT4gW3cuaWQsIHddKSk7XG5cbiAgICAvLyA1LiBDb21iaW5lIGhpZ2hsaWdodCArIHdlYnNpdGUgZGF0YVxuICAgIGNvbnN0IGNvbWJpbmVkID0gaGlnaGxpZ2h0cy5tYXAoKGgpID0+ICh7XG4gICAgICAuLi5oLFxuICAgICAgd2Vic2l0ZTogd2Vic2l0ZU1hcFtoLnVybElkXSxcbiAgICB9KSk7XG5cbiAgICAvLyA2LiBTb3J0IGJ5IGNyZWF0ZWRBdFxuICAgIGNvbWJpbmVkLnNvcnQoKGEsIGIpID0+IE51bWJlcihhLmNyZWF0ZWRBdCkgLSBOdW1iZXIoYi5jcmVhdGVkQXQpKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNvbWJpbmVkIH07XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICB9XG59O1xuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsSGlnaGxpZ2h0c0RCLFxuICBhZGRIaWdobGlnaHREQixcbiAgZGVsZXRlQWxsSGlnaGxpZ2h0c0RCLFxuICBhZGRXZWJzaXRlREIsXG4gIGdldFdlYnNpdGVIaWdobGlnaHRzREIsXG4gIGRlbGV0ZUhpZ2hsaWdodERCLFxuICB1cGRhdGVIaWdobGlnaHREQixcbiAgZ2V0SGlnaGxpZ2h0REIsXG4gIGdldEFsbFdlYnNpdGVzREIsXG4gIGRlbGV0ZVdlYnNpdGVEQixcbiAgZ2V0QWxsRm9sZGVyc0RiLFxuICBnZXRGb2xkZXJCeUhpZ2hsaWdodElkREIsXG4gIGdldEZvbGRlckhpZ2hsaWdodHNEQixcbn0gZnJvbSBcIi4vc3JjL2RiRnVuY3Rpb25cIjtcblxuLy8gRGVmaW5lIGhhbmRsZXJzIG1hcFxuY29uc3QgbWVzc2FnZUhhbmRsZXJzOiBSZWNvcmQ8XG4gIHN0cmluZyxcbiAgKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnksIHNlbmRSZXNwb25zZTogKHJlczogYW55KSA9PiB2b2lkKSA9PiB2b2lkXG4+ID0ge1xuICAvLyAtLS0gT3BlbiBTaWRlIFBhbmVsIC0tLVxuICBvcGVuU2lkZVBhbmVsOiAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBicm93c2VyLndpbmRvd3MuZ2V0Q3VycmVudCgoY3VycmVudFdpbmRvdykgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRXaW5kb3c/LmlkICYmIGJyb3dzZXIuc2lkZVBhbmVsPy5vcGVuKSB7XG4gICAgICAgIGJyb3dzZXIuc2lkZVBhbmVsLm9wZW4oeyB3aW5kb3dJZDogY3VycmVudFdpbmRvdy5pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGJyb3dzZXIucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiRXJyb3Igb3BlbmluZyBzaWRlIHBhbmVsOlwiLFxuICAgICAgICAgICAgICBicm93c2VyLnJ1bnRpbWUubGFzdEVycm9yXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yOiBicm93c2VyLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWRlIHBhbmVsIEFQSSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiU2lkZSBwYW5lbCBub3Qgc3VwcG9ydGVkXCIgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gLS0tIEdldCBBbGwgSGlnaGxpZ2h0cyAtLS1cbiAgZ2V0QWxsSGlnaGxpZ2h0czogYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxIaWdobGlnaHRzREIoKTtcbiAgICAgIHNlbmRSZXNwb25zZShkYXRhKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2VuZFJlc3BvbnNlKGVycik7XG4gICAgfVxuICB9LFxuXG4gIC8vIC0tLSBBZGQgSGlnaGxpZ2h0IC0tLVxuICBhZGRIaWdobGlnaHQ6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhZGRIaWdobGlnaHREQihtZXNzYWdlLmRhdGEpO1xuICAgICAgc2VuZFJlc3BvbnNlKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZShlcnIpO1xuICAgIH1cbiAgfSxcblxuICAvLyAtLS0gRGVsZXRlIEFsbCBIaWdobGlnaHRzIC0tLVxuICBkZWxldGVBbGxIaWdobGlnaHRzOiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGVsZXRlQWxsSGlnaGxpZ2h0c0RCKCk7XG4gICAgICBzZW5kUmVzcG9uc2UocmVzKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2VuZFJlc3BvbnNlKGVycik7XG4gICAgfVxuICB9LFxuXG4gIC8vIC0tLSBTYXZlIFdlYnNpdGUgLS0tLVxuXG4gIGFkZFdlYnNpdGU6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhZGRXZWJzaXRlREIobWVzc2FnZS5kYXRhKTtcbiAgICAgIHNlbmRSZXNwb25zZShyZXMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBzZW5kUmVzcG9uc2UoZXJyKTtcbiAgICB9XG4gIH0sXG4gIGdldFdlYnNpdGVzOiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0QWxsV2Vic2l0ZXNEQigpO1xuICAgICAgc2VuZFJlc3BvbnNlKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZShlcnIpO1xuICAgIH1cbiAgfSxcblxuICBnZXRXZWJzaXRlSGlnaGxpZ2h0czogYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFdlYnNpdGVIaWdobGlnaHRzREIobWVzc2FnZS5kYXRhKTtcbiAgICAgIHNlbmRSZXNwb25zZShyZXMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBzZW5kUmVzcG9uc2UoZXJyKTtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlU2luZ2xlSGlnaGxpZ2h0OiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGVsZXRlSGlnaGxpZ2h0REIobWVzc2FnZS5kYXRhKTtcbiAgICAgIHNlbmRSZXNwb25zZShyZXMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBzZW5kUmVzcG9uc2UoZXJyKTtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlSGlnaGxpZ2h0RnJvbURvY3VtZW50VG9CZ1NjcmlwdDogKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGJyb3dzZXIudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICBpZiAodGFic1swXT8uaWQpIHtcbiAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgICAgICAgICAgYWN0aW9uOiBcImRlbGV0ZUhpZ2hsaWdodEZyb21Eb2N1bWVudFRvQ29udGVudFNjcmlwdFwiLFxuICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOKchSByZXNwb25kIG9uY2UgZG9uZVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyIH0pO1xuICAgIH1cblxuICAgIC8vIOKchSBrZWVwIGNoYW5uZWwgb3BlbiB1bnRpbCBzZW5kUmVzcG9uc2UgaXMgY2FsbGVkXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgdXBkYXRlSGlnaGxpZ2h0OiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCwgdXBkYXRlcyB9ID0gbWVzc2FnZS5kYXRhO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlSGlnaGxpZ2h0REIoaWQsIHVwZGF0ZXMpO1xuICAgICAgc2VuZFJlc3BvbnNlKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfSxcblxuICBnZXRTaW5nbGVIaWdobGlnaHQ6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRIaWdobGlnaHREQihtZXNzYWdlLmRhdGEpO1xuICAgICAgc2VuZFJlc3BvbnNlKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfSxcblxuICBkZWxldGVXZWJzaXRlOiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGVsZXRlV2Vic2l0ZURCKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBzZW5kUmVzcG9uc2UocmVzKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9LFxuXG4gIGdldEZvbGRlcnM6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRBbGxGb2xkZXJzRGIoKTtcbiAgICAgIHNlbmRSZXNwb25zZShyZXMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBzZW5kUmVzcG9uc2UoZXJyKTtcbiAgICB9XG4gIH0sXG5cbiAgb3BlbkZvbGRlcnNNYW5hZ2VyOiBhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID1cbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLmdldFVSTChcImFtYmVyT3B0aW9uc1BhZ2UuaHRtbFwiIGFzIGFueSkgK1xuICAgICAgICBcIj9zZWN0aW9uPWZvbGRlcnNcIjtcblxuICAgICAgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCB9KTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZShlcnIpO1xuICAgIH1cbiAgfSxcblxuICBvcGVuSGVscFBhZ2U6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPVxuICAgICAgICBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKFwiYW1iZXJPcHRpb25zUGFnZS5odG1sXCIgYXMgYW55KSArXG4gICAgICAgIFwiP3NlY3Rpb249aGVscFwiO1xuXG4gICAgICBicm93c2VyLnRhYnMuY3JlYXRlKHsgdXJsIH0pO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2VuZFJlc3BvbnNlKGVycik7XG4gICAgfVxuICB9LFxuXG4gIGdldEZvbGRlckJ5SGlnaGxpZ2h0SWQ6IGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRGb2xkZXJCeUhpZ2hsaWdodElkREIobWVzc2FnZS5kYXRhKTtcbiAgICAgIHNlbmRSZXNwb25zZShyZXMpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBzZW5kUmVzcG9uc2UoZXJyKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0Rm9sZGVySGlnaGxpZ2h0czogYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEZvbGRlckhpZ2hsaWdodHNEQihtZXNzYWdlLmRhdGEpO1xuICAgICAgc2VuZFJlc3BvbnNlKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNlbmRSZXNwb25zZShlcnIpO1xuICAgIH1cbiAgfSxcblxuICBzY3JvbGxUb0hpZ2hsaWdodDogYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBpZiAodGFiPy5pZCkge1xuICAgICAgICBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgYWN0aW9uOiBcInNjcm9sbFRvSGlnaGxpZ2h0XCIsXG4gICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2VuZFJlc3BvbnNlKGVycik7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQmFja2dyb3VuZCgoKSA9PiB7XG4gIC8vIG9uIGluc3RhbGwgZ3VpZGVcbiAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gICAgLy8gMS4gT25seSBydW4gb24gZnJlc2ggaW5zdGFsbCAobm90IHVwZGF0ZSlcbiAgICBpZiAoZGV0YWlscy5yZWFzb24gPT09IFwiaW5zdGFsbFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV4dGVuc2lvbiBpbnN0YWxsZWQg4oCUIHJlZnJlc2hpbmcgdGFicyBhbmQgb3BlbmluZyBndWlkZS4uLlwiKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gMi4gUmVmcmVzaCBhbGwgb3BlbiB0YWJzXG4gICAgICAgIGNvbnN0IHRhYnMgPSBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe30pO1xuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICAgICAgaWYgKHRhYi5pZCAmJiB0YWIudXJsPy5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICAgICAgYnJvd3Nlci50YWJzLnJlbG9hZCh0YWIuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDMuIE9wZW4geW91ciBndWlkZSBVUkxcbiAgICAgICAgY29uc3QgZ3VpZGVVcmwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKFwiQW1iZXJHdWlkZS5odG1sXCIgYXMgYW55KTtcbiAgICAgICAgYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybDogZ3VpZGVVcmwgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGluc3RhbGwgaGFuZGxpbmc6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhhbmRsZSBNZXNzYWdlc1xuICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBtZXNzYWdlSGFuZGxlcnNbbWVzc2FnZT8uYWN0aW9uXTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8ga2VlcCBzZW5kUmVzcG9uc2UgYWxpdmUgZm9yIGFzeW5jXG4gICAgfVxuICB9KTtcbn0pO1xuIiwiLy8gc3JjL2luZGV4LnRzXG52YXIgX01hdGNoUGF0dGVybiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IobWF0Y2hQYXR0ZXJuKSB7XG4gICAgaWYgKG1hdGNoUGF0dGVybiA9PT0gXCI8YWxsX3VybHM+XCIpIHtcbiAgICAgIHRoaXMuaXNBbGxVcmxzID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gWy4uLl9NYXRjaFBhdHRlcm4uUFJPVE9DT0xTXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IFwiKlwiO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gXCIqXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IC8oLiopOlxcL1xcLyguKj8pKFxcLy4qKS8uZXhlYyhtYXRjaFBhdHRlcm4pO1xuICAgICAgaWYgKGdyb3VwcyA9PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIFwiSW5jb3JyZWN0IGZvcm1hdFwiKTtcbiAgICAgIGNvbnN0IFtfLCBwcm90b2NvbCwgaG9zdG5hbWUsIHBhdGhuYW1lXSA9IGdyb3VwcztcbiAgICAgIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCk7XG4gICAgICB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpO1xuICAgICAgdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKTtcbiAgICAgIHRoaXMucHJvdG9jb2xNYXRjaGVzID0gcHJvdG9jb2wgPT09IFwiKlwiID8gW1wiaHR0cFwiLCBcImh0dHBzXCJdIDogW3Byb3RvY29sXTtcbiAgICAgIHRoaXMuaG9zdG5hbWVNYXRjaCA9IGhvc3RuYW1lO1xuICAgICAgdGhpcy5wYXRobmFtZU1hdGNoID0gcGF0aG5hbWU7XG4gICAgfVxuICB9XG4gIGluY2x1ZGVzKHVybCkge1xuICAgIGlmICh0aGlzLmlzQWxsVXJscylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHUgPSB0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiID8gbmV3IFVSTCh1cmwpIDogdXJsIGluc3RhbmNlb2YgTG9jYXRpb24gPyBuZXcgVVJMKHVybC5ocmVmKSA6IHVybDtcbiAgICByZXR1cm4gISF0aGlzLnByb3RvY29sTWF0Y2hlcy5maW5kKChwcm90b2NvbCkgPT4ge1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImh0dHBcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiaHR0cHNcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNIdHRwc01hdGNoKHUpO1xuICAgICAgaWYgKHByb3RvY29sID09PSBcImZpbGVcIilcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaWxlTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwiZnRwXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnRwTWF0Y2godSk7XG4gICAgICBpZiAocHJvdG9jb2wgPT09IFwidXJuXCIpXG4gICAgICAgIHJldHVybiB0aGlzLmlzVXJuTWF0Y2godSk7XG4gICAgfSk7XG4gIH1cbiAgaXNIdHRwTWF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIHRoaXMuaXNIb3N0UGF0aE1hdGNoKHVybCk7XG4gIH1cbiAgaXNIdHRwc01hdGNoKHVybCkge1xuICAgIHJldHVybiB1cmwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgJiYgdGhpcy5pc0hvc3RQYXRoTWF0Y2godXJsKTtcbiAgfVxuICBpc0hvc3RQYXRoTWF0Y2godXJsKSB7XG4gICAgaWYgKCF0aGlzLmhvc3RuYW1lTWF0Y2ggfHwgIXRoaXMucGF0aG5hbWVNYXRjaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBob3N0bmFtZU1hdGNoUmVnZXhzID0gW1xuICAgICAgdGhpcy5jb252ZXJ0UGF0dGVyblRvUmVnZXgodGhpcy5ob3N0bmFtZU1hdGNoKSxcbiAgICAgIHRoaXMuY29udmVydFBhdHRlcm5Ub1JlZ2V4KHRoaXMuaG9zdG5hbWVNYXRjaC5yZXBsYWNlKC9eXFwqXFwuLywgXCJcIikpXG4gICAgXTtcbiAgICBjb25zdCBwYXRobmFtZU1hdGNoUmVnZXggPSB0aGlzLmNvbnZlcnRQYXR0ZXJuVG9SZWdleCh0aGlzLnBhdGhuYW1lTWF0Y2gpO1xuICAgIHJldHVybiAhIWhvc3RuYW1lTWF0Y2hSZWdleHMuZmluZCgocmVnZXgpID0+IHJlZ2V4LnRlc3QodXJsLmhvc3RuYW1lKSkgJiYgcGF0aG5hbWVNYXRjaFJlZ2V4LnRlc3QodXJsLnBhdGhuYW1lKTtcbiAgfVxuICBpc0ZpbGVNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZmlsZTovLyBwYXR0ZXJuIG1hdGNoaW5nLiBPcGVuIGEgUFIgdG8gYWRkIHN1cHBvcnRcIik7XG4gIH1cbiAgaXNGdHBNYXRjaCh1cmwpIHtcbiAgICB0aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZnRwOi8vIHBhdHRlcm4gbWF0Y2hpbmcuIE9wZW4gYSBQUiB0byBhZGQgc3VwcG9ydFwiKTtcbiAgfVxuICBpc1Vybk1hdGNoKHVybCkge1xuICAgIHRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiB1cm46Ly8gcGF0dGVybiBtYXRjaGluZy4gT3BlbiBhIFBSIHRvIGFkZCBzdXBwb3J0XCIpO1xuICB9XG4gIGNvbnZlcnRQYXR0ZXJuVG9SZWdleChwYXR0ZXJuKSB7XG4gICAgY29uc3QgZXNjYXBlZCA9IHRoaXMuZXNjYXBlRm9yUmVnZXgocGF0dGVybik7XG4gICAgY29uc3Qgc3RhcnNSZXBsYWNlZCA9IGVzY2FwZWQucmVwbGFjZSgvXFxcXFxcKi9nLCBcIi4qXCIpO1xuICAgIHJldHVybiBSZWdFeHAoYF4ke3N0YXJzUmVwbGFjZWR9JGApO1xuICB9XG4gIGVzY2FwZUZvclJlZ2V4KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xuICB9XG59O1xudmFyIE1hdGNoUGF0dGVybiA9IF9NYXRjaFBhdHRlcm47XG5NYXRjaFBhdHRlcm4uUFJPVE9DT0xTID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiZmlsZVwiLCBcImZ0cFwiLCBcInVyblwiXTtcbnZhciBJbnZhbGlkTWF0Y2hQYXR0ZXJuID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoUGF0dGVybiwgcmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgbWF0Y2ggcGF0dGVybiBcIiR7bWF0Y2hQYXR0ZXJufVwiOiAke3JlYXNvbn1gKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvdG9jb2wobWF0Y2hQYXR0ZXJuLCBwcm90b2NvbCkge1xuICBpZiAoIU1hdGNoUGF0dGVybi5QUk9UT0NPTFMuaW5jbHVkZXMocHJvdG9jb2wpICYmIHByb3RvY29sICE9PSBcIipcIilcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihcbiAgICAgIG1hdGNoUGF0dGVybixcbiAgICAgIGAke3Byb3RvY29sfSBub3QgYSB2YWxpZCBwcm90b2NvbCAoJHtNYXRjaFBhdHRlcm4uUFJPVE9DT0xTLmpvaW4oXCIsIFwiKX0pYFxuICAgICk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUhvc3RuYW1lKG1hdGNoUGF0dGVybiwgaG9zdG5hbWUpIHtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiOlwiKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZE1hdGNoUGF0dGVybihtYXRjaFBhdHRlcm4sIGBIb3N0bmFtZSBjYW5ub3QgaW5jbHVkZSBhIHBvcnRgKTtcbiAgaWYgKGhvc3RuYW1lLmluY2x1ZGVzKFwiKlwiKSAmJiBob3N0bmFtZS5sZW5ndGggPiAxICYmICFob3N0bmFtZS5zdGFydHNXaXRoKFwiKi5cIikpXG4gICAgdGhyb3cgbmV3IEludmFsaWRNYXRjaFBhdHRlcm4oXG4gICAgICBtYXRjaFBhdHRlcm4sXG4gICAgICBgSWYgdXNpbmcgYSB3aWxkY2FyZCAoKiksIGl0IG11c3QgZ28gYXQgdGhlIHN0YXJ0IG9mIHRoZSBob3N0bmFtZWBcbiAgICApO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXRobmFtZShtYXRjaFBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHJldHVybjtcbn1cbmV4cG9ydCB7XG4gIEludmFsaWRNYXRjaFBhdHRlcm4sXG4gIE1hdGNoUGF0dGVyblxufTtcbiJdLCJuYW1lcyI6WyJicm93c2VyIiwiX2Jyb3dzZXIiLCJnbG9iYWwiLCJ0aGlzIiwiZCIsImIiLCJfX2Fzc2lnbiIsInJlc3VsdCIsIkRleGllRXJyb3IiLCJ0eXBlIiwicmVzb2x2ZSIsInJlamVjdCIsInByb3BzIiwiZGIiLCJfYSIsIkVudGl0eSIsImNtcCIsImtleXMiLCJUYWJsZSIsInRhc2siLCJ0cmFucyIsIl9iIiwiaSIsImFkZCIsImFyZ3MiLCJQcm9wTW9kaWZpY2F0aW9uIiwiQ29sbGVjdGlvbiIsImNvdW50IiwiZGlyZWN0aW9uIiwiV2hlcmVDbGF1c2UiLCJhZGRSYW5nZSIsInJhbmdlcyIsIlRyYW5zYWN0aW9uIiwicCIsInRhYmxlcyIsImtleVBhdGgiLCJjb21wb3VuZCIsInJlcSIsIm9wZW5DdXJzb3IiLCJxdWVyeSIsImV2IiwiaGFzR2V0QWxsIiwib2xkVmVyc2lvbiIsInRhYmxlQ2hhbmdlIiwiVmVyc2lvbiIsImluZGV4ZWREQiIsIlJhbmdlU2V0IiwibWVyZ2VSYW5nZXMiLCJ0YXJnZXQiLCJyYW5nZXNPdmVybGFwIiwiaW5kZXgiLCJwcmltYXJ5S2V5IiwiZHhUcmFucyIsImNhY2hlIiwia2V5IiwiRGV4aWUiLCJzdGF0ZSIsIk9ic2VydmFibGUiLCJsaXZlUXVlcnkiLCJyZW1vdmUiLCJyZXBsYWNlUHJlZml4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxXQUFTLGlCQUFpQixLQUFLO0FBQ3BDLFFBQUksT0FBTyxRQUFRLE9BQU8sUUFBUSxXQUFZLFFBQU8sRUFBRSxNQUFNLElBQUc7QUFDaEUsV0FBTztBQUFBLEVBQ1Q7QUNGTyxRQUFNQSxjQUFVLHNCQUFXLFlBQVgsbUJBQW9CLFlBQXBCLG1CQUE2QixNQUNoRCxXQUFXLFVBQ1gsV0FBVztBQ0ZSLFFBQU0sVUFBVUM7Ozs7Ozs7Ozs7OztBQ1l2QixPQUFDLFNBQVVDLFNBQVEsU0FBUztBQUN1QyxlQUFBLFVBQWlCO01BR3BGLEdBQUdDLE9BQU8sV0FBWTtBQUFBLFFBRXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlJLFlBQUksZ0JBQWdCLFNBQVMsR0FBRyxHQUFHO0FBQy9CLDBCQUFnQixPQUFPLGtCQUNsQixFQUFFLFdBQVcsQ0FBQSxlQUFnQixTQUFTLFNBQVVDLElBQUdDLElBQUc7QUFBRSxZQUFBRCxHQUFFLFlBQVlDO0FBQUEsVUFBRSxLQUN6RSxTQUFVRCxJQUFHQyxJQUFHO0FBQUUscUJBQVMsS0FBS0EsR0FBRyxLQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUtBLElBQUcsQ0FBQyxFQUFHLENBQUFELEdBQUUsQ0FBQyxJQUFJQyxHQUFFLENBQUM7QUFBQSxVQUFFO0FBQ25HLGlCQUFPLGNBQWMsR0FBRyxDQUFDO0FBQUEsUUFDakM7QUFDSSxpQkFBUyxVQUFVLEdBQUcsR0FBRztBQUNyQixjQUFJLE9BQU8sTUFBTSxjQUFjLE1BQU07QUFDakMsa0JBQU0sSUFBSSxVQUFVLHlCQUF5QixPQUFPLENBQUMsSUFBSSwrQkFBK0I7QUFDNUYsd0JBQWMsR0FBRyxDQUFDO0FBQ2xCLG1CQUFTLEtBQUs7QUFBRSxpQkFBSyxjQUFjO0FBQUEsVUFBRTtBQUNyQyxZQUFFLFlBQVksTUFBTSxPQUFPLE9BQU8sT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsV0FBVyxJQUFJLEdBQUU7QUFBQSxRQUN6RjtBQUNJLFlBQUksV0FBVyxXQUFXO0FBQ3RCLHFCQUFXLE9BQU8sVUFBVSxTQUFTQyxVQUFTLEdBQUc7QUFDN0MscUJBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDakQsa0JBQUksVUFBVSxDQUFDO0FBQ2YsdUJBQVMsS0FBSyxFQUFHLEtBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxHQUFHLENBQUMsRUFBRyxHQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFBQSxZQUMzRjtBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxpQkFBTyxTQUFTLE1BQU0sTUFBTSxTQUFTO0FBQUEsUUFDN0M7QUFDSSxpQkFBUyxjQUFjLElBQUksTUFBTSxNQUFNO0FBQ0MsbUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxHQUFHLEtBQUs7QUFDakYsZ0JBQUksTUFBTSxFQUFFLEtBQUssT0FBTztBQUNwQixrQkFBSSxDQUFDLEdBQUksTUFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sR0FBRyxDQUFDO0FBQ25ELGlCQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBQSxZQUM5QjtBQUFBLFVBQ0E7QUFDUSxpQkFBTyxHQUFHLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLFFBQy9EO0FBRUksWUFBSSxVQUFVLE9BQU8sZUFBZSxjQUFjLGFBQzlDLE9BQU8sU0FBUyxjQUFjLE9BQzFCLE9BQU8sV0FBVyxjQUFjLFNBQzVCSjtBQUVaLFlBQUksT0FBTyxPQUFPO0FBQ2xCLFlBQUksVUFBVSxNQUFNO0FBQ3BCLFlBQUksT0FBTyxZQUFZLGVBQWUsQ0FBQyxRQUFRLFNBQVM7QUFDcEQsa0JBQVEsVUFBVTtBQUFBLFFBQzFCO0FBQ0ksaUJBQVMsT0FBTyxLQUFLLFdBQVc7QUFDNUIsY0FBSSxPQUFPLGNBQWM7QUFDckIsbUJBQU87QUFDWCxlQUFLLFNBQVMsRUFBRSxRQUFRLFNBQVUsS0FBSztBQUNuQyxnQkFBSSxHQUFHLElBQUksVUFBVSxHQUFHO0FBQUEsVUFDcEMsQ0FBUztBQUNELGlCQUFPO0FBQUEsUUFDZjtBQUNJLFlBQUksV0FBVyxPQUFPO0FBQ3RCLFlBQUksVUFBVSxDQUFBLEVBQUc7QUFDakIsaUJBQVMsT0FBTyxLQUFLLE1BQU07QUFDdkIsaUJBQU8sUUFBUSxLQUFLLEtBQUssSUFBSTtBQUFBLFFBQ3JDO0FBQ0ksaUJBQVMsTUFBTSxPQUFPLFdBQVc7QUFDN0IsY0FBSSxPQUFPLGNBQWM7QUFDckIsd0JBQVksVUFBVSxTQUFTLEtBQUssQ0FBQztBQUN6QyxXQUFDLE9BQU8sWUFBWSxjQUFjLE9BQU8sUUFBUSxTQUFTLFNBQVMsRUFBRSxRQUFRLFNBQVUsS0FBSztBQUN4RixvQkFBUSxPQUFPLEtBQUssVUFBVSxHQUFHLENBQUM7QUFBQSxVQUM5QyxDQUFTO0FBQUEsUUFDVDtBQUNJLFlBQUksaUJBQWlCLE9BQU87QUFDNUIsaUJBQVMsUUFBUSxLQUFLLE1BQU0sa0JBQWtCLFNBQVM7QUFDbkQseUJBQWUsS0FBSyxNQUFNLE9BQU8sb0JBQW9CLE9BQU8sa0JBQWtCLEtBQUssS0FBSyxPQUFPLGlCQUFpQixRQUFRLGFBQ3BILEVBQUUsS0FBSyxpQkFBaUIsS0FBSyxLQUFLLGlCQUFpQixLQUFLLGNBQWMsS0FBSSxJQUMxRSxFQUFFLE9BQU8sa0JBQWtCLGNBQWMsTUFBTSxVQUFVLEtBQUksR0FBSSxPQUFPLENBQUM7QUFBQSxRQUNyRjtBQUNJLGlCQUFTLE9BQU8sT0FBTztBQUNuQixpQkFBTztBQUFBLFlBQ0gsTUFBTSxTQUFVLFFBQVE7QUFDcEIsb0JBQU0sWUFBWSxPQUFPLE9BQU8sT0FBTyxTQUFTO0FBQ2hELHNCQUFRLE1BQU0sV0FBVyxlQUFlLEtBQUs7QUFDN0MscUJBQU87QUFBQSxnQkFDSCxRQUFRLE1BQU0sS0FBSyxNQUFNLE1BQU0sU0FBUztBQUFBO1lBRTVEO0FBQUE7UUFFQTtBQUNJLFlBQUksMkJBQTJCLE9BQU87QUFDdEMsaUJBQVMsc0JBQXNCLEtBQUssTUFBTTtBQUN0QyxjQUFJLEtBQUsseUJBQXlCLEtBQUssSUFBSTtBQUMzQyxjQUFJO0FBQ0osaUJBQU8sT0FBTyxRQUFRLFNBQVMsR0FBRyxNQUFNLHNCQUFzQixPQUFPLElBQUk7QUFBQSxRQUNqRjtBQUNJLFlBQUksU0FBUyxDQUFBLEVBQUc7QUFDaEIsaUJBQVMsTUFBTSxNQUFNLE9BQU8sS0FBSztBQUM3QixpQkFBTyxPQUFPLEtBQUssTUFBTSxPQUFPLEdBQUc7QUFBQSxRQUMzQztBQUNJLGlCQUFTLFNBQVMsVUFBVSxrQkFBa0I7QUFDMUMsaUJBQU8saUJBQWlCLFFBQVE7QUFBQSxRQUN4QztBQUNJLGlCQUFTLE9BQU8sR0FBRztBQUNmLGNBQUksQ0FBQztBQUNELGtCQUFNLElBQUksTUFBTSxrQkFBa0I7QUFBQSxRQUM5QztBQUNJLGlCQUFTLE9BQU8sSUFBSTtBQUNoQixjQUFJLFFBQVE7QUFDUix5QkFBYSxFQUFFO0FBQUE7QUFFZix1QkFBVyxJQUFJLENBQUM7QUFBQSxRQUM1QjtBQUNJLGlCQUFTLGNBQWMsT0FBTyxXQUFXO0FBQ3JDLGlCQUFPLE1BQU0sT0FBTyxTQUFVSyxTQUFRLE1BQU0sR0FBRztBQUMzQyxnQkFBSSxlQUFlLFVBQVUsTUFBTSxDQUFDO0FBQ3BDLGdCQUFJO0FBQ0EsY0FBQUEsUUFBTyxhQUFhLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQztBQUM1QyxtQkFBT0E7QUFBQSxVQUNuQixHQUFXLENBQUEsQ0FBRTtBQUFBLFFBQ2I7QUFDSSxpQkFBUyxhQUFhLEtBQUssU0FBUztBQUNoQyxjQUFJLE9BQU8sWUFBWSxZQUFZLE9BQU8sS0FBSyxPQUFPO0FBQ2xELG1CQUFPLElBQUksT0FBTztBQUN0QixjQUFJLENBQUM7QUFDRCxtQkFBTztBQUNYLGNBQUksT0FBTyxZQUFZLFVBQVU7QUFDN0IsZ0JBQUksS0FBSyxDQUFBO0FBQ1QscUJBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxRQUFRLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDNUMsa0JBQUksTUFBTSxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUM7QUFDdEMsaUJBQUcsS0FBSyxHQUFHO0FBQUEsWUFDM0I7QUFDWSxtQkFBTztBQUFBLFVBQ25CO0FBQ1EsY0FBSSxTQUFTLFFBQVEsUUFBUSxHQUFHO0FBQ2hDLGNBQUksV0FBVyxJQUFJO0FBQ2YsZ0JBQUksV0FBVyxJQUFJLFFBQVEsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUM1QyxtQkFBTyxZQUFZLE9BQU8sU0FBWSxhQUFhLFVBQVUsUUFBUSxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBQUEsVUFDbkc7QUFDUSxpQkFBTztBQUFBLFFBQ2Y7QUFDSSxpQkFBUyxhQUFhLEtBQUssU0FBUyxPQUFPO0FBQ3ZDLGNBQUksQ0FBQyxPQUFPLFlBQVk7QUFDcEI7QUFDSixjQUFJLGNBQWMsVUFBVSxPQUFPLFNBQVMsR0FBRztBQUMzQztBQUNKLGNBQUksT0FBTyxZQUFZLFlBQVksWUFBWSxTQUFTO0FBQ3BELG1CQUFPLE9BQU8sVUFBVSxZQUFZLFlBQVksS0FBSztBQUNyRCxxQkFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUM1QywyQkFBYSxLQUFLLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQUEsWUFDdEQ7QUFBQSxVQUNBLE9BQ2E7QUFDRCxnQkFBSSxTQUFTLFFBQVEsUUFBUSxHQUFHO0FBQ2hDLGdCQUFJLFdBQVcsSUFBSTtBQUNmLGtCQUFJLGlCQUFpQixRQUFRLE9BQU8sR0FBRyxNQUFNO0FBQzdDLGtCQUFJLG1CQUFtQixRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ2hELGtCQUFJLHFCQUFxQjtBQUNyQixvQkFBSSxVQUFVLFFBQVc7QUFDckIsc0JBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLFNBQVMsY0FBYyxDQUFDO0FBQy9DLHdCQUFJLE9BQU8sZ0JBQWdCLENBQUM7QUFBQTtBQUU1QiwyQkFBTyxJQUFJLGNBQWM7QUFBQSxnQkFDckQ7QUFFd0Isc0JBQUksY0FBYyxJQUFJO0FBQUEsbUJBQ3pCO0FBQ0Qsb0JBQUksV0FBVyxJQUFJLGNBQWM7QUFDakMsb0JBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLGNBQWM7QUFDeEMsNkJBQVksSUFBSSxjQUFjLElBQUk7QUFDdEMsNkJBQWEsVUFBVSxrQkFBa0IsS0FBSztBQUFBLGNBQ2xFO0FBQUEsWUFDQSxPQUNpQjtBQUNELGtCQUFJLFVBQVUsUUFBVztBQUNyQixvQkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sU0FBUyxPQUFPLENBQUM7QUFDeEMsc0JBQUksT0FBTyxTQUFTLENBQUM7QUFBQTtBQUVyQix5QkFBTyxJQUFJLE9BQU87QUFBQSxjQUMxQztBQUVvQixvQkFBSSxPQUFPLElBQUk7QUFBQSxZQUNuQztBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsYUFBYSxLQUFLLFNBQVM7QUFDaEMsY0FBSSxPQUFPLFlBQVk7QUFDbkIseUJBQWEsS0FBSyxTQUFTLE1BQVM7QUFBQSxtQkFDL0IsWUFBWTtBQUNqQixhQUFBLEVBQUcsSUFBSSxLQUFLLFNBQVMsU0FBVSxJQUFJO0FBQy9CLDJCQUFhLEtBQUssSUFBSSxNQUFTO0FBQUEsWUFDL0MsQ0FBYTtBQUFBLFFBQ2I7QUFDSSxpQkFBUyxhQUFhLEtBQUs7QUFDdkIsY0FBSSxLQUFLLENBQUE7QUFDVCxtQkFBUyxLQUFLLEtBQUs7QUFDZixnQkFBSSxPQUFPLEtBQUssQ0FBQztBQUNiLGlCQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBQSxVQUM3QjtBQUNRLGlCQUFPO0FBQUEsUUFDZjtBQUNJLFlBQUksU0FBUyxDQUFBLEVBQUc7QUFDaEIsaUJBQVMsUUFBUSxHQUFHO0FBQ2hCLGlCQUFPLE9BQU8sTUFBTSxDQUFBLEdBQUksQ0FBQztBQUFBLFFBQ2pDO0FBQ0ksWUFBSSxxQkFBcUIsaU5BQ3BCLE1BQU0sR0FBRyxFQUFFLE9BQU8sUUFBUSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLFNBQVUsS0FBSztBQUFFLGlCQUFPLENBQUMsT0FBTyxRQUFRLE9BQU8sRUFBRSxJQUFJLFNBQVUsR0FBRztBQUFFLG1CQUFPLElBQUksTUFBTTtBQUFBLFVBQVEsQ0FBRTtBQUFBLFFBQUUsQ0FBRSxDQUFDLENBQUMsRUFBRSxPQUFPLFNBQVUsR0FBRztBQUFFLGlCQUFPLFFBQVEsQ0FBQztBQUFBLFNBQUk7QUFDcE0sWUFBSSxpQkFBaUIsSUFBSSxJQUFJLG1CQUFtQixJQUFJLFNBQVUsR0FBRztBQUFFLGlCQUFPLFFBQVEsQ0FBQztBQUFBLFFBQUUsQ0FBRSxDQUFDO0FBQ3hGLGlCQUFTLHNCQUFzQixHQUFHO0FBQzlCLGNBQUksS0FBSyxDQUFBO0FBQ1QsbUJBQVMsS0FBSztBQUNWLGdCQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUc7QUFDZCxrQkFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLGlCQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxNQUFNLFlBQVksZUFBZSxJQUFJLEVBQUUsV0FBVyxJQUFJLElBQUksc0JBQXNCLENBQUM7QUFBQSxZQUN0SDtBQUNRLGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLGNBQWMsR0FBRztBQUN0QixtQkFBUyxLQUFLO0FBQ1YsZ0JBQUksT0FBTyxHQUFHLENBQUM7QUFDWCxxQkFBTztBQUNmLGlCQUFPO0FBQUEsUUFDZjtBQUNJLFlBQUksZUFBZTtBQUNuQixpQkFBUyxVQUFVLEtBQUs7QUFDcEIseUJBQWUsb0JBQUksUUFBTztBQUMxQixjQUFJLEtBQUssZUFBZSxHQUFHO0FBQzNCLHlCQUFlO0FBQ2YsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsZUFBZSxHQUFHO0FBQ3ZCLGNBQUksQ0FBQyxLQUFLLE9BQU8sTUFBTTtBQUNuQixtQkFBTztBQUNYLGNBQUksS0FBSyxhQUFhLElBQUksQ0FBQztBQUMzQixjQUFJO0FBQ0EsbUJBQU87QUFDWCxjQUFJLFFBQVEsQ0FBQyxHQUFHO0FBQ1osaUJBQUssQ0FBQTtBQUNMLHlCQUFhLElBQUksR0FBRyxFQUFFO0FBQ3RCLHFCQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ3RDLGlCQUFHLEtBQUssZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFDNUM7QUFBQSxVQUNBLFdBQ2lCLGVBQWUsSUFBSSxFQUFFLFdBQVcsR0FBRztBQUN4QyxpQkFBSztBQUFBLFVBQ2pCLE9BQ2E7QUFDRCxnQkFBSSxRQUFRLFNBQVMsQ0FBQztBQUN0QixpQkFBSyxVQUFVLE9BQU8sWUFBWSxDQUFBLElBQUssT0FBTyxPQUFPLEtBQUs7QUFDMUQseUJBQWEsSUFBSSxHQUFHLEVBQUU7QUFDdEIscUJBQVMsUUFBUSxHQUFHO0FBQ2hCLGtCQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUc7QUFDakIsbUJBQUcsSUFBSSxJQUFJLGVBQWUsRUFBRSxJQUFJLENBQUM7QUFBQSxjQUNyRDtBQUFBLFlBQ0E7QUFBQSxVQUNBO0FBQ1EsaUJBQU87QUFBQSxRQUNmO0FBQ0ksWUFBSSxXQUFXLENBQUEsRUFBRztBQUNsQixpQkFBUyxZQUFZLEdBQUc7QUFDcEIsaUJBQU8sU0FBUyxLQUFLLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUFBLFFBQzNDO0FBQ0ksWUFBSSxpQkFBaUIsT0FBTyxXQUFXLGNBQ25DLE9BQU8sV0FDUDtBQUNKLFlBQUksZ0JBQWdCLE9BQU8sbUJBQW1CLFdBQVcsU0FBVSxHQUFHO0FBQ2xFLGNBQUk7QUFDSixpQkFBTyxLQUFLLFNBQVMsSUFBSSxFQUFFLGNBQWMsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUFBLFFBQ2hFLElBQVEsV0FBWTtBQUFFLGlCQUFPO0FBQUEsUUFBSztBQUM5QixpQkFBUyxhQUFhLEdBQUcsR0FBRztBQUN4QixjQUFJLElBQUksRUFBRSxRQUFRLENBQUM7QUFDbkIsY0FBSSxLQUFLO0FBQ0wsY0FBRSxPQUFPLEdBQUcsQ0FBQztBQUNqQixpQkFBTyxLQUFLO0FBQUEsUUFDcEI7QUFDSSxZQUFJLGdCQUFnQixDQUFBO0FBQ3BCLGlCQUFTLFdBQVcsV0FBVztBQUMzQixjQUFJLEdBQUcsR0FBRyxHQUFHO0FBQ2IsY0FBSSxVQUFVLFdBQVcsR0FBRztBQUN4QixnQkFBSSxRQUFRLFNBQVM7QUFDakIscUJBQU8sVUFBVSxNQUFLO0FBQzFCLGdCQUFJLFNBQVMsaUJBQWlCLE9BQU8sY0FBYztBQUMvQyxxQkFBTyxDQUFDLFNBQVM7QUFDckIsZ0JBQUssS0FBSyxjQUFjLFNBQVMsR0FBSTtBQUNqQyxrQkFBSSxDQUFBO0FBQ0oscUJBQVEsSUFBSSxHQUFHLEtBQUksR0FBSyxDQUFDLEVBQUU7QUFDdkIsa0JBQUUsS0FBSyxFQUFFLEtBQUs7QUFDbEIscUJBQU87QUFBQSxZQUN2QjtBQUNZLGdCQUFJLGFBQWE7QUFDYixxQkFBTyxDQUFDLFNBQVM7QUFDckIsZ0JBQUksVUFBVTtBQUNkLGdCQUFJLE9BQU8sTUFBTSxVQUFVO0FBQ3ZCLGtCQUFJLElBQUksTUFBTSxDQUFDO0FBQ2YscUJBQU87QUFDSCxrQkFBRSxDQUFDLElBQUksVUFBVSxDQUFDO0FBQ3RCLHFCQUFPO0FBQUEsWUFDdkI7QUFDWSxtQkFBTyxDQUFDLFNBQVM7QUFBQSxVQUM3QjtBQUNRLGNBQUksVUFBVTtBQUNkLGNBQUksSUFBSSxNQUFNLENBQUM7QUFDZixpQkFBTztBQUNILGNBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQztBQUN0QixpQkFBTztBQUFBLFFBQ2Y7QUFDSSxZQUFJLGtCQUFrQixPQUFPLFdBQVcsY0FDbEMsU0FBVSxJQUFJO0FBQUUsaUJBQU8sR0FBRyxPQUFPLFdBQVcsTUFBTTtBQUFBLFFBQWdCLElBQ2xFLFdBQVk7QUFBRSxpQkFBTztBQUFBLFFBQU07QUFFakMsWUFBSSxrQkFBa0I7QUFBQSxVQUNsQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBO0FBRUosWUFBSSxtQkFBbUI7QUFBQSxVQUNuQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQTtBQUVKLFlBQUksWUFBWSxnQkFBZ0IsT0FBTyxnQkFBZ0I7QUFDdkQsWUFBSSxlQUFlO0FBQUEsVUFDZixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixPQUFPO0FBQUEsVUFDUCxxQkFBcUI7QUFBQSxVQUNyQixZQUFZO0FBQUE7QUFFaEIsaUJBQVMsV0FBVyxNQUFNLEtBQUs7QUFDM0IsZUFBSyxPQUFPO0FBQ1osZUFBSyxVQUFVO0FBQUEsUUFDdkI7QUFDSSxlQUFPLFVBQVUsRUFBRSxLQUFLLEtBQUssRUFBRSxPQUFPO0FBQUEsVUFDbEMsVUFBVSxXQUFZO0FBQUUsbUJBQU8sS0FBSyxPQUFPLE9BQU8sS0FBSztBQUFBLFVBQVE7QUFBQSxRQUN2RSxDQUFLO0FBQ0QsaUJBQVMscUJBQXFCLEtBQUssVUFBVTtBQUN6QyxpQkFBTyxNQUFNLGVBQWUsT0FBTyxLQUFLLFFBQVEsRUFDM0MsSUFBSSxTQUFVLEtBQUs7QUFBRSxtQkFBTyxTQUFTLEdBQUcsRUFBRSxTQUFRO0FBQUEsVUFBRyxDQUFFLEVBQ3ZELE9BQU8sU0FBVSxHQUFHLEdBQUcsR0FBRztBQUFFLG1CQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU07QUFBQSxVQUFFLENBQUUsRUFDeEQsS0FBSyxJQUFJO0FBQUEsUUFDdEI7QUFDSSxpQkFBUyxZQUFZLEtBQUssVUFBVSxjQUFjLFlBQVk7QUFDMUQsZUFBSyxXQUFXO0FBQ2hCLGVBQUssYUFBYTtBQUNsQixlQUFLLGVBQWU7QUFDcEIsZUFBSyxVQUFVLHFCQUFxQixLQUFLLFFBQVE7QUFBQSxRQUN6RDtBQUNJLGVBQU8sV0FBVyxFQUFFLEtBQUssVUFBVTtBQUNuQyxpQkFBUyxVQUFVLEtBQUssVUFBVTtBQUM5QixlQUFLLE9BQU87QUFDWixlQUFLLFdBQVcsT0FBTyxLQUFLLFFBQVEsRUFBRSxJQUFJLFNBQVUsS0FBSztBQUFFLG1CQUFPLFNBQVMsR0FBRztBQUFBLFVBQUUsQ0FBRTtBQUNsRixlQUFLLGdCQUFnQjtBQUNyQixlQUFLLFVBQVUscUJBQXFCLEtBQUssS0FBSyxRQUFRO0FBQUEsUUFDOUQ7QUFDSSxlQUFPLFNBQVMsRUFBRSxLQUFLLFVBQVU7QUFDakMsWUFBSSxXQUFXLFVBQVUsT0FBTyxTQUFVLEtBQUssTUFBTTtBQUFFLGlCQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQUssR0FBSSxFQUFFO0FBQ3RHLFlBQUksZ0JBQWdCO0FBQ3BCLFlBQUksYUFBYSxVQUFVLE9BQU8sU0FBVSxLQUFLLE1BQU07QUFDbkQsY0FBSSxXQUFXLE9BQU87QUFDdEIsbUJBQVNDLFlBQVcsWUFBWSxPQUFPO0FBQ25DLGlCQUFLLE9BQU87QUFDWixnQkFBSSxDQUFDLFlBQVk7QUFDYixtQkFBSyxVQUFVLGFBQWEsSUFBSSxLQUFLO0FBQ3JDLG1CQUFLLFFBQVE7QUFBQSxZQUM3QixXQUNxQixPQUFPLGVBQWUsVUFBVTtBQUNyQyxtQkFBSyxVQUFVLEdBQUcsT0FBTyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEtBQUs7QUFDdkUsbUJBQUssUUFBUSxTQUFTO0FBQUEsWUFDdEMsV0FDcUIsT0FBTyxlQUFlLFVBQVU7QUFDckMsbUJBQUssVUFBVSxHQUFHLE9BQU8sV0FBVyxNQUFNLEdBQUcsRUFBRSxPQUFPLFdBQVcsT0FBTztBQUN4RSxtQkFBSyxRQUFRO0FBQUEsWUFDN0I7QUFBQSxVQUNBO0FBQ1EsaUJBQU9BLFdBQVUsRUFBRSxLQUFLLGFBQWE7QUFDckMsY0FBSSxJQUFJLElBQUlBO0FBQ1osaUJBQU87QUFBQSxRQUNmLEdBQU8sQ0FBQSxDQUFFO0FBQ0wsbUJBQVcsU0FBUztBQUNwQixtQkFBVyxPQUFPO0FBQ2xCLG1CQUFXLFFBQVE7QUFDbkIsWUFBSSxlQUFlLGlCQUFpQixPQUFPLFNBQVUsS0FBSyxNQUFNO0FBQzVELGNBQUksT0FBTyxPQUFPLElBQUksV0FBVyxJQUFJO0FBQ3JDLGlCQUFPO0FBQUEsUUFDZixHQUFPLENBQUEsQ0FBRTtBQUNMLGlCQUFTLFNBQVMsVUFBVSxTQUFTO0FBQ2pDLGNBQUksQ0FBQyxZQUFZLG9CQUFvQixjQUFjLG9CQUFvQixhQUFhLG9CQUFvQixlQUFlLENBQUMsU0FBUyxRQUFRLENBQUMsYUFBYSxTQUFTLElBQUk7QUFDaEssbUJBQU87QUFDWCxjQUFJLEtBQUssSUFBSSxhQUFhLFNBQVMsSUFBSSxFQUFFLFdBQVcsU0FBUyxTQUFTLFFBQVE7QUFDOUUsY0FBSSxXQUFXLFVBQVU7QUFDckIsb0JBQVEsSUFBSSxTQUFTLEVBQUUsS0FBSyxXQUFZO0FBQ2hDLHFCQUFPLEtBQUssTUFBTTtBQUFBLFlBQ3RDLEdBQW1CO0FBQUEsVUFDbkI7QUFDUSxpQkFBTztBQUFBLFFBQ2Y7QUFDSSxZQUFJLHFCQUFxQixVQUFVLE9BQU8sU0FBVSxLQUFLLE1BQU07QUFDM0QsY0FBSSxDQUFDLFVBQVUsUUFBUSxPQUFPLEVBQUUsUUFBUSxJQUFJLE1BQU07QUFDOUMsZ0JBQUksT0FBTyxPQUFPLElBQUksV0FBVyxJQUFJO0FBQ3pDLGlCQUFPO0FBQUEsUUFDZixHQUFPLENBQUEsQ0FBRTtBQUNMLDJCQUFtQixjQUFjO0FBQ2pDLDJCQUFtQixhQUFhO0FBQ2hDLDJCQUFtQixZQUFZO0FBRS9CLGlCQUFTLE1BQU07QUFBQSxRQUFBO0FBQ2YsaUJBQVMsT0FBTyxLQUFLO0FBQUUsaUJBQU87QUFBQSxRQUFJO0FBQ2xDLGlCQUFTLGtCQUFrQixJQUFJLElBQUk7QUFDL0IsY0FBSSxNQUFNLFFBQVEsT0FBTztBQUNyQixtQkFBTztBQUNYLGlCQUFPLFNBQVUsS0FBSztBQUNsQixtQkFBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsVUFDN0I7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsU0FBUyxLQUFLLEtBQUs7QUFDeEIsaUJBQU8sV0FBWTtBQUNmLGdCQUFJLE1BQU0sTUFBTSxTQUFTO0FBQ3pCLGdCQUFJLE1BQU0sTUFBTSxTQUFTO0FBQUEsVUFDckM7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsa0JBQWtCLElBQUksSUFBSTtBQUMvQixjQUFJLE9BQU87QUFDUCxtQkFBTztBQUNYLGlCQUFPLFdBQVk7QUFDZixnQkFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFDbEMsZ0JBQUksUUFBUTtBQUNSLHdCQUFVLENBQUMsSUFBSTtBQUNuQixnQkFBSSxZQUFZLEtBQUssV0FDckIsVUFBVSxLQUFLO0FBQ2YsaUJBQUssWUFBWTtBQUNqQixpQkFBSyxVQUFVO0FBQ2YsZ0JBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQ25DLGdCQUFJO0FBQ0EsbUJBQUssWUFBWSxLQUFLLFlBQVksU0FBUyxXQUFXLEtBQUssU0FBUyxJQUFJO0FBQzVFLGdCQUFJO0FBQ0EsbUJBQUssVUFBVSxLQUFLLFVBQVUsU0FBUyxTQUFTLEtBQUssT0FBTyxJQUFJO0FBQ3BFLG1CQUFPLFNBQVMsU0FBWSxPQUFPO0FBQUEsVUFDL0M7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsa0JBQWtCLElBQUksSUFBSTtBQUMvQixjQUFJLE9BQU87QUFDUCxtQkFBTztBQUNYLGlCQUFPLFdBQVk7QUFDZixlQUFHLE1BQU0sTUFBTSxTQUFTO0FBQ3hCLGdCQUFJLFlBQVksS0FBSyxXQUNyQixVQUFVLEtBQUs7QUFDZixpQkFBSyxZQUFZLEtBQUssVUFBVTtBQUNoQyxlQUFHLE1BQU0sTUFBTSxTQUFTO0FBQ3hCLGdCQUFJO0FBQ0EsbUJBQUssWUFBWSxLQUFLLFlBQVksU0FBUyxXQUFXLEtBQUssU0FBUyxJQUFJO0FBQzVFLGdCQUFJO0FBQ0EsbUJBQUssVUFBVSxLQUFLLFVBQVUsU0FBUyxTQUFTLEtBQUssT0FBTyxJQUFJO0FBQUEsVUFDaEY7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsa0JBQWtCLElBQUksSUFBSTtBQUMvQixjQUFJLE9BQU87QUFDUCxtQkFBTztBQUNYLGlCQUFPLFNBQVUsZUFBZTtBQUM1QixnQkFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFDbEMsbUJBQU8sZUFBZSxHQUFHO0FBQ3pCLGdCQUFJLFlBQVksS0FBSyxXQUNyQixVQUFVLEtBQUs7QUFDZixpQkFBSyxZQUFZO0FBQ2pCLGlCQUFLLFVBQVU7QUFDZixnQkFBSSxPQUFPLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFDbkMsZ0JBQUk7QUFDQSxtQkFBSyxZQUFZLEtBQUssWUFBWSxTQUFTLFdBQVcsS0FBSyxTQUFTLElBQUk7QUFDNUUsZ0JBQUk7QUFDQSxtQkFBSyxVQUFVLEtBQUssVUFBVSxTQUFTLFNBQVMsS0FBSyxPQUFPLElBQUk7QUFDcEUsbUJBQU8sUUFBUSxTQUNWLFNBQVMsU0FBWSxTQUFZLE9BQ2pDLE9BQU8sS0FBSyxJQUFJO0FBQUEsVUFDakM7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsMkJBQTJCLElBQUksSUFBSTtBQUN4QyxjQUFJLE9BQU87QUFDUCxtQkFBTztBQUNYLGlCQUFPLFdBQVk7QUFDZixnQkFBSSxHQUFHLE1BQU0sTUFBTSxTQUFTLE1BQU07QUFDOUIscUJBQU87QUFDWCxtQkFBTyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQUEsVUFDM0M7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsZ0JBQWdCLElBQUksSUFBSTtBQUM3QixjQUFJLE9BQU87QUFDUCxtQkFBTztBQUNYLGlCQUFPLFdBQVk7QUFDZixnQkFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFDbEMsZ0JBQUksT0FBTyxPQUFPLElBQUksU0FBUyxZQUFZO0FBQ3ZDLGtCQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxDQUFDO0FBQ3pELHFCQUFPO0FBQ0gscUJBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQztBQUN6QixxQkFBTyxJQUFJLEtBQUssV0FBWTtBQUN4Qix1QkFBTyxHQUFHLE1BQU0sTUFBTSxJQUFJO0FBQUEsY0FDOUMsQ0FBaUI7QUFBQSxZQUNqQjtBQUNZLG1CQUFPLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFBQSxVQUMzQztBQUFBLFFBQ0E7QUFFSSxZQUFJLFFBQVEsT0FBTyxhQUFhLGVBQzVCLDZDQUE2QyxLQUFLLFNBQVMsSUFBSTtBQUNuRSxpQkFBUyxTQUFTLE9BQU8sUUFBUTtBQUM3QixrQkFBUTtBQUFBLFFBQ2hCO0FBRUksWUFBSSxXQUFXLENBQUE7QUFDZixZQUFJLGtCQUFrQixLQUFLLE9BQU8sT0FBTyxZQUFZLGNBQ2pELENBQUEsSUFDQyxXQUFZO0FBQ1QsY0FBSSxVQUFVLFFBQVEsUUFBTztBQUM3QixjQUFJLE9BQU8sV0FBVyxlQUFlLENBQUMsT0FBTztBQUN6QyxtQkFBTyxDQUFDLFNBQVMsU0FBUyxPQUFPLEdBQUcsT0FBTztBQUMvQyxjQUFJLFVBQVUsT0FBTyxPQUFPLE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxpQkFBTztBQUFBLFlBQ0g7QUFBQSxZQUNBLFNBQVMsT0FBTztBQUFBLFlBQ2hCO0FBQUE7UUFFaEIsRUFBUyxHQUFLLHdCQUF3QixLQUFLLENBQUMsR0FBRyxxQkFBcUIsS0FBSyxDQUFDLEdBQUcsd0JBQXdCLEtBQUssQ0FBQyxHQUFHLG9CQUFvQixzQkFBc0IsbUJBQW1CO0FBQ3ZLLFlBQUksZ0JBQWdCLHlCQUF5QixzQkFBc0I7QUFDbkUsWUFBSSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzNCLGlCQUFTLHVCQUF1QjtBQUM1Qix5QkFBZSxZQUFZO0FBQUEsUUFDbkM7QUFDSSxZQUFJLE9BQU8sU0FBVSxVQUFVLE1BQU07QUFDakMseUJBQWUsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDO0FBQ3BDLGNBQUksc0JBQXNCO0FBQ3RCLGlDQUFvQjtBQUNwQixtQ0FBdUI7QUFBQSxVQUNuQztBQUFBLFFBQ0E7QUFDSSxZQUFJLHFCQUFxQixNQUN6Qix1QkFBdUIsTUFDdkIsa0JBQWtCLENBQUEsR0FDbEIsa0JBQWtCLENBQUEsR0FDbEIsa0JBQWtCO0FBQ2xCLFlBQUksWUFBWTtBQUFBLFVBQ1osSUFBSTtBQUFBLFVBQ0osUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBLFVBQ0wsWUFBWSxDQUFBO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixLQUFLO0FBQUEsVUFDTCxLQUFLLENBQUE7QUFBQSxVQUNMLFVBQVU7QUFBQTtBQUVkLFlBQUksTUFBTTtBQUNWLFlBQUksaUJBQWlCLENBQUE7QUFDckIsWUFBSSxvQkFBb0I7QUFDeEIsWUFBSSxpQkFBaUIsQ0FBQTtBQUNyQixpQkFBUyxhQUFhLElBQUk7QUFDdEIsY0FBSSxPQUFPLFNBQVM7QUFDaEIsa0JBQU0sSUFBSSxVQUFVLHNDQUFzQztBQUM5RCxlQUFLLGFBQWEsQ0FBQTtBQUNsQixlQUFLLE9BQU87QUFDWixjQUFJLE1BQU8sS0FBSyxPQUFPO0FBQ3ZCLGNBQUksT0FBTyxPQUFPLFlBQVk7QUFDMUIsZ0JBQUksT0FBTztBQUNQLG9CQUFNLElBQUksVUFBVSxnQkFBZ0I7QUFDeEMsaUJBQUssU0FBUyxVQUFVLENBQUM7QUFDekIsaUJBQUssU0FBUyxVQUFVLENBQUM7QUFDekIsZ0JBQUksS0FBSyxXQUFXO0FBQ2hCLDhCQUFnQixNQUFNLEtBQUssTUFBTTtBQUNyQztBQUFBLFVBQ1o7QUFDUSxlQUFLLFNBQVM7QUFDZCxlQUFLLFNBQVM7QUFDZCxZQUFFLElBQUk7QUFDTiw2QkFBbUIsTUFBTSxFQUFFO0FBQUEsUUFDbkM7QUFDSSxZQUFJLFdBQVc7QUFBQSxVQUNYLEtBQUssV0FBWTtBQUNiLGdCQUFJLE1BQU0sS0FBSyxjQUFjO0FBQzdCLHFCQUFTLEtBQUssYUFBYSxZQUFZO0FBQ25DLGtCQUFJLFFBQVE7QUFDWixrQkFBSSxnQkFBZ0IsQ0FBQyxJQUFJLFdBQVcsUUFBUSxPQUFPLGdCQUFnQjtBQUNuRSxrQkFBSSxVQUFVLGlCQUFpQixDQUFDLHdCQUF1QjtBQUN2RCxrQkFBSSxLQUFLLElBQUksYUFBYSxTQUFVLFNBQVMsUUFBUTtBQUNqRCxvQ0FBb0IsT0FBTyxJQUFJLFNBQVMsMEJBQTBCLGFBQWEsS0FBSyxlQUFlLE9BQU8sR0FBRywwQkFBMEIsWUFBWSxLQUFLLGVBQWUsT0FBTyxHQUFHLFNBQVMsUUFBUSxHQUFHLENBQUM7QUFBQSxjQUMxTixDQUFpQjtBQUNELGtCQUFJLEtBQUs7QUFDTCxtQkFBRyxlQUFlLEtBQUs7QUFDM0IscUJBQU87QUFBQSxZQUN2QjtBQUNZLGlCQUFLLFlBQVk7QUFDakIsbUJBQU87QUFBQSxVQUNuQjtBQUFBLFVBQ1EsS0FBSyxTQUFVLE9BQU87QUFDbEIsb0JBQVEsTUFBTSxRQUFRLFNBQVMsTUFBTSxjQUFjLFdBQy9DLFdBQ0E7QUFBQSxjQUNJLEtBQUssV0FBWTtBQUNiLHVCQUFPO0FBQUEsY0FDL0I7QUFBQSxjQUNvQixLQUFLLFNBQVM7QUFBQSxZQUNsQyxDQUFpQjtBQUFBLFVBQ2pCO0FBQUE7QUFFSSxjQUFNLGFBQWEsV0FBVztBQUFBLFVBQzFCLE1BQU07QUFBQSxVQUNOLE9BQU8sU0FBVSxhQUFhLFlBQVk7QUFDdEMsZ0NBQW9CLE1BQU0sSUFBSSxTQUFTLE1BQU0sTUFBTSxhQUFhLFlBQVksR0FBRyxDQUFDO0FBQUEsVUFDNUY7QUFBQSxVQUNRLE9BQU8sU0FBVSxZQUFZO0FBQ3pCLGdCQUFJLFVBQVUsV0FBVztBQUNyQixxQkFBTyxLQUFLLEtBQUssTUFBTSxVQUFVO0FBQ3JDLGdCQUFJQyxRQUFPLFVBQVUsQ0FBQyxHQUFHLFVBQVUsVUFBVSxDQUFDO0FBQzlDLG1CQUFPLE9BQU9BLFVBQVMsYUFBYSxLQUFLLEtBQUssTUFBTSxTQUFVLEtBQUs7QUFDL0QscUJBQU8sZUFBZUEsUUFBTyxRQUFRLEdBQUcsSUFBSSxjQUFjLEdBQUc7QUFBQSxZQUM3RSxDQUFhLElBQ0ssS0FBSyxLQUFLLE1BQU0sU0FBVSxLQUFLO0FBQzdCLHFCQUFPLE9BQU8sSUFBSSxTQUFTQSxRQUFPLFFBQVEsR0FBRyxJQUFJLGNBQWMsR0FBRztBQUFBLFlBQ3RGLENBQWlCO0FBQUEsVUFDakI7QUFBQSxVQUNRLFNBQVMsU0FBVSxXQUFXO0FBQzFCLG1CQUFPLEtBQUssS0FBSyxTQUFVLE9BQU87QUFDOUIscUJBQU8sYUFBYSxRQUFRLFdBQVcsRUFBRSxLQUFLLFdBQVk7QUFBRSx1QkFBTztBQUFBLGVBQVE7QUFBQSxZQUMzRixHQUFlLFNBQVUsS0FBSztBQUNkLHFCQUFPLGFBQWEsUUFBUSxVQUFTLENBQUUsRUFBRSxLQUFLLFdBQVk7QUFBRSx1QkFBTyxjQUFjLEdBQUc7QUFBQSxlQUFJO0FBQUEsWUFDeEcsQ0FBYTtBQUFBLFVBQ2I7QUFBQSxVQUNRLFNBQVMsU0FBVSxJQUFJLEtBQUs7QUFDeEIsZ0JBQUksUUFBUTtBQUNaLG1CQUFPLEtBQUssV0FDUixJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDeEMsa0JBQUksU0FBUyxXQUFXLFdBQVk7QUFBRSx1QkFBTyxPQUFPLElBQUksV0FBVyxRQUFRLEdBQUcsQ0FBQztBQUFBLGNBQUUsR0FBSSxFQUFFO0FBQ3ZGLG9CQUFNLEtBQUssU0FBUyxNQUFNLEVBQUUsUUFBUSxhQUFhLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBQSxZQUN2RixDQUFpQixJQUFJO0FBQUEsVUFDckI7QUFBQSxRQUNBLENBQUs7QUFDRCxZQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU87QUFDeEMsa0JBQVEsYUFBYSxXQUFXLE9BQU8sYUFBYSxlQUFlO0FBQ3ZFLGtCQUFVLE1BQU0sU0FBUTtBQUN4QixpQkFBUyxTQUFTLGFBQWEsWUFBWSxTQUFTLFFBQVEsTUFBTTtBQUM5RCxlQUFLLGNBQWMsT0FBTyxnQkFBZ0IsYUFBYSxjQUFjO0FBQ3JFLGVBQUssYUFBYSxPQUFPLGVBQWUsYUFBYSxhQUFhO0FBQ2xFLGVBQUssVUFBVTtBQUNmLGVBQUssU0FBUztBQUNkLGVBQUssTUFBTTtBQUFBLFFBQ25CO0FBQ0ksY0FBTSxjQUFjO0FBQUEsVUFDaEIsS0FBSyxXQUFZO0FBQ2IsZ0JBQUksU0FBUyxXQUFXLE1BQU0sTUFBTSxTQUFTLEVBQ3hDLElBQUksd0JBQXdCO0FBQ2pDLG1CQUFPLElBQUksYUFBYSxTQUFVLFNBQVMsUUFBUTtBQUMvQyxrQkFBSSxPQUFPLFdBQVc7QUFDbEIsd0JBQVEsQ0FBQSxDQUFFO0FBQ2Qsa0JBQUksWUFBWSxPQUFPO0FBQ3ZCLHFCQUFPLFFBQVEsU0FBVSxHQUFHLEdBQUc7QUFBRSx1QkFBTyxhQUFhLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBVSxHQUFHO0FBQzlFLHlCQUFPLENBQUMsSUFBSTtBQUNaLHNCQUFJLENBQUMsRUFBRTtBQUNILDRCQUFRLE1BQU07QUFBQSxnQkFDdEMsR0FBbUIsTUFBTTtBQUFBLGVBQUk7QUFBQSxZQUM3QixDQUFhO0FBQUEsVUFDYjtBQUFBLFVBQ1EsU0FBUyxTQUFVLE9BQU87QUFDdEIsZ0JBQUksaUJBQWlCO0FBQ2pCLHFCQUFPO0FBQ1gsZ0JBQUksU0FBUyxPQUFPLE1BQU0sU0FBUztBQUMvQixxQkFBTyxJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDL0Msc0JBQU0sS0FBSyxTQUFTLE1BQU07QUFBQSxjQUM5QyxDQUFpQjtBQUNMLGdCQUFJLEtBQUssSUFBSSxhQUFhLFVBQVUsTUFBTSxLQUFLO0FBQy9DLG1CQUFPO0FBQUEsVUFDbkI7QUFBQSxVQUNRLFFBQVE7QUFBQSxVQUNSLE1BQU0sV0FBWTtBQUNkLGdCQUFJLFNBQVMsV0FBVyxNQUFNLE1BQU0sU0FBUyxFQUFFLElBQUksd0JBQXdCO0FBQzNFLG1CQUFPLElBQUksYUFBYSxTQUFVLFNBQVMsUUFBUTtBQUMvQyxxQkFBTyxJQUFJLFNBQVUsT0FBTztBQUFFLHVCQUFPLGFBQWEsUUFBUSxLQUFLLEVBQUUsS0FBSyxTQUFTLE1BQU07QUFBQSxjQUFFLENBQUU7QUFBQSxZQUN6RyxDQUFhO0FBQUEsVUFDYjtBQUFBLFVBQ1EsS0FBSztBQUFBLFlBQ0QsS0FBSyxXQUFZO0FBQUUscUJBQU87QUFBQSxZQUFJO0FBQUEsWUFDOUIsS0FBSyxTQUFVLE9BQU87QUFBRSxxQkFBTyxNQUFNO0FBQUEsWUFBTTtBQUFBO1VBRS9DLGFBQWEsRUFBRSxLQUFLLFdBQVk7QUFBRSxtQkFBTztBQUFBLFVBQVksRUFBRTtBQUFBLFVBQ3ZELFFBQVE7QUFBQSxVQUNSO0FBQUEsVUFDQSxXQUFXO0FBQUEsWUFDUCxLQUFLLFdBQVk7QUFBRSxxQkFBTztBQUFBLFlBQUs7QUFBQSxZQUMvQixLQUFLLFNBQVUsT0FBTztBQUFFLHFCQUFPO0FBQUEsWUFBTTtBQUFBO1VBRXpDLGlCQUFpQjtBQUFBLFlBQ2IsS0FBSyxXQUFZO0FBQUUscUJBQU87QUFBQSxZQUFnQjtBQUFBLFlBQzFDLEtBQUssU0FBVSxPQUFPO0FBQUUsZ0NBQWtCO0FBQUEsWUFBTTtBQUFBO1VBRXBELFFBQVEsU0FBVSxJQUFJLFdBQVc7QUFDN0IsbUJBQU8sSUFBSSxhQUFhLFNBQVUsU0FBUyxRQUFRO0FBQy9DLHFCQUFPLFNBQVMsU0FBVUMsVUFBU0MsU0FBUTtBQUN2QyxvQkFBSSxNQUFNO0FBQ1Ysb0JBQUksYUFBYSxDQUFBO0FBQ2pCLG9CQUFJLGNBQWNBO0FBQ2xCLG9CQUFJLFdBQVcsU0FBUyxXQUFZO0FBQ2hDLHNCQUFJLFFBQVE7QUFDWiwyREFBeUMsV0FBWTtBQUNqRCwwQkFBTSxXQUFXLFdBQVcsSUFBSUQsYUFBWUMsUUFBTyxNQUFNLFdBQVcsQ0FBQyxDQUFDO0FBQUEsa0JBQ2xHLENBQXlCO0FBQUEsZ0JBQ3pCLEdBQXVCLElBQUksUUFBUTtBQUNmLG1CQUFFO0FBQUEsY0FDdEIsR0FBbUIsV0FBVyxTQUFTLE1BQU07QUFBQSxZQUM3QyxDQUFhO0FBQUEsVUFDYjtBQUFBLFFBQ0EsQ0FBSztBQUNELFlBQUksZUFBZTtBQUNmLGNBQUksY0FBYztBQUNkLG9CQUFRLGNBQWMsY0FBYyxXQUFZO0FBQzVDLGtCQUFJLG1CQUFtQixXQUFXLE1BQU0sTUFBTSxTQUFTLEVBQUUsSUFBSSx3QkFBd0I7QUFDckYscUJBQU8sSUFBSSxhQUFhLFNBQVUsU0FBUztBQUN2QyxvQkFBSSxpQkFBaUIsV0FBVztBQUM1QiwwQkFBUSxDQUFBLENBQUU7QUFDZCxvQkFBSSxZQUFZLGlCQUFpQjtBQUNqQyxvQkFBSSxVQUFVLElBQUksTUFBTSxTQUFTO0FBQ2pDLGlDQUFpQixRQUFRLFNBQVUsR0FBRyxHQUFHO0FBQUUseUJBQU8sYUFBYSxRQUFRLENBQUMsRUFBRSxLQUFLLFNBQVUsT0FBTztBQUFFLDJCQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxhQUFhLE1BQVk7QUFBQSxrQkFBRyxHQUFJLFNBQVUsUUFBUTtBQUFFLDJCQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxZQUFZLE9BQWM7QUFBQSxrQkFBRyxDQUFFLEVBQzVPLEtBQUssV0FBWTtBQUFFLDJCQUFPLEVBQUUsYUFBYSxRQUFRLE9BQU87QUFBQSxtQkFBSTtBQUFBLGlCQUFJO0FBQUEsY0FDekYsQ0FBaUI7QUFBQSxZQUNqQixDQUFhO0FBQ0wsY0FBSSxjQUFjLE9BQU8sT0FBTyxtQkFBbUI7QUFDL0Msb0JBQVEsY0FBYyxPQUFPLFdBQVk7QUFDckMsa0JBQUksbUJBQW1CLFdBQVcsTUFBTSxNQUFNLFNBQVMsRUFBRSxJQUFJLHdCQUF3QjtBQUNyRixxQkFBTyxJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDL0Msb0JBQUksaUJBQWlCLFdBQVc7QUFDNUIseUJBQU8sSUFBSSxlQUFlLENBQUEsQ0FBRSxDQUFDO0FBQ2pDLG9CQUFJLFlBQVksaUJBQWlCO0FBQ2pDLG9CQUFJLFdBQVcsSUFBSSxNQUFNLFNBQVM7QUFDbEMsaUNBQWlCLFFBQVEsU0FBVSxHQUFHLEdBQUc7QUFBRSx5QkFBTyxhQUFhLFFBQVEsQ0FBQyxFQUFFLEtBQUssU0FBVSxPQUFPO0FBQUUsMkJBQU8sUUFBUSxLQUFLO0FBQUEsa0JBQUUsR0FBSSxTQUFVLFNBQVM7QUFDM0ksNkJBQVMsQ0FBQyxJQUFJO0FBQ2Qsd0JBQUksQ0FBQyxFQUFFO0FBQ0gsNkJBQU8sSUFBSSxlQUFlLFFBQVEsQ0FBQztBQUFBLGtCQUMvRCxDQUFxQjtBQUFBLGdCQUFFLENBQUU7QUFBQSxjQUN6QixDQUFpQjtBQUFBLFlBQ2pCLENBQWE7QUFDTCxjQUFJLGNBQWM7QUFDZCx5QkFBYSxnQkFBZ0IsY0FBYztBQUFBLFFBQ3ZEO0FBQ0ksaUJBQVMsbUJBQW1CLFNBQVMsSUFBSTtBQUNyQyxjQUFJO0FBQ0EsZUFBRyxTQUFVLE9BQU87QUFDaEIsa0JBQUksUUFBUSxXQUFXO0FBQ25CO0FBQ0osa0JBQUksVUFBVTtBQUNWLHNCQUFNLElBQUksVUFBVSwyQ0FBMkM7QUFDbkUsa0JBQUksb0JBQW9CLFFBQVEsUUFBUSxvQkFBbUI7QUFDM0Qsa0JBQUksU0FBUyxPQUFPLE1BQU0sU0FBUyxZQUFZO0FBQzNDLG1DQUFtQixTQUFTLFNBQVUsU0FBUyxRQUFRO0FBQ25ELG1DQUFpQixlQUNiLE1BQU0sTUFBTSxTQUFTLE1BQU0sSUFDM0IsTUFBTSxLQUFLLFNBQVMsTUFBTTtBQUFBLGdCQUN0RCxDQUFxQjtBQUFBLGNBQ3JCLE9BQ3FCO0FBQ0Qsd0JBQVEsU0FBUztBQUNqQix3QkFBUSxTQUFTO0FBQ2pCLHNDQUFzQixPQUFPO0FBQUEsY0FDakQ7QUFDZ0Isa0JBQUk7QUFDQSxrQ0FBaUI7QUFBQSxZQUNyQyxHQUFlLGdCQUFnQixLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUEsVUFDbEQsU0FDZSxJQUFJO0FBQ1AsNEJBQWdCLFNBQVMsRUFBRTtBQUFBLFVBQ3ZDO0FBQUEsUUFDQTtBQUNJLGlCQUFTLGdCQUFnQixTQUFTLFFBQVE7QUFDdEMsMEJBQWdCLEtBQUssTUFBTTtBQUMzQixjQUFJLFFBQVEsV0FBVztBQUNuQjtBQUNKLGNBQUksb0JBQW9CLFFBQVEsUUFBUSxvQkFBbUI7QUFDM0QsbUJBQVMsZ0JBQWdCLE1BQU07QUFDL0Isa0JBQVEsU0FBUztBQUNqQixrQkFBUSxTQUFTO0FBQ2pCLG9DQUEwQixPQUFPO0FBQ2pDLGdDQUFzQixPQUFPO0FBQzdCLGNBQUk7QUFDQSw4QkFBaUI7QUFBQSxRQUM3QjtBQUNJLGlCQUFTLHNCQUFzQixTQUFTO0FBQ3BDLGNBQUksWUFBWSxRQUFRO0FBQ3hCLGtCQUFRLGFBQWEsQ0FBQTtBQUNyQixtQkFBUyxJQUFJLEdBQUcsTUFBTSxVQUFVLFFBQVEsSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNsRCxnQ0FBb0IsU0FBUyxVQUFVLENBQUMsQ0FBQztBQUFBLFVBQ3JEO0FBQ1EsY0FBSSxNQUFNLFFBQVE7QUFDbEIsWUFBRSxJQUFJLE9BQU8sSUFBSSxTQUFRO0FBQ3pCLGNBQUksc0JBQXNCLEdBQUc7QUFDekIsY0FBRTtBQUNGLGlCQUFLLFdBQVk7QUFDYixrQkFBSSxFQUFFLHNCQUFzQjtBQUN4QixxQ0FBb0I7QUFBQSxZQUN4QyxHQUFlLENBQUEsQ0FBRTtBQUFBLFVBQ2pCO0FBQUEsUUFDQTtBQUNJLGlCQUFTLG9CQUFvQixTQUFTLFVBQVU7QUFDNUMsY0FBSSxRQUFRLFdBQVcsTUFBTTtBQUN6QixvQkFBUSxXQUFXLEtBQUssUUFBUTtBQUNoQztBQUFBLFVBQ1o7QUFDUSxjQUFJLEtBQUssUUFBUSxTQUFTLFNBQVMsY0FBYyxTQUFTO0FBQzFELGNBQUksT0FBTyxNQUFNO0FBQ2Isb0JBQVEsUUFBUSxTQUFTLFNBQVMsVUFBVSxTQUFTLFFBQVEsUUFBUSxNQUFNO0FBQUEsVUFDdkY7QUFDUSxZQUFFLFNBQVMsSUFBSTtBQUNmLFlBQUU7QUFDRixlQUFLLGNBQWMsQ0FBQyxJQUFJLFNBQVMsUUFBUSxDQUFDO0FBQUEsUUFDbEQ7QUFDSSxpQkFBUyxhQUFhLElBQUksU0FBUyxVQUFVO0FBQ3pDLGNBQUk7QUFDQSxnQkFBSSxLQUFLLFFBQVEsUUFBUTtBQUN6QixnQkFBSSxDQUFDLFFBQVEsVUFBVSxnQkFBZ0I7QUFDbkMsZ0NBQWtCLENBQUE7QUFDdEIsa0JBQU0sU0FBUyxRQUFRLGVBQWUsUUFBUSxhQUFhLElBQUksV0FBWTtBQUFFLHFCQUFPLEdBQUcsS0FBSztBQUFBLFlBQUUsQ0FBRSxJQUFJLEdBQUcsS0FBSztBQUM1RyxnQkFBSSxDQUFDLFFBQVEsVUFBVSxnQkFBZ0IsUUFBUSxLQUFLLE1BQU0sSUFBSTtBQUMxRCxpQ0FBbUIsT0FBTztBQUFBLFlBQzFDO0FBQ1kscUJBQVMsUUFBUSxHQUFHO0FBQUEsVUFDaEMsU0FDZSxHQUFHO0FBQ04scUJBQVMsT0FBTyxDQUFDO0FBQUEsVUFDN0I7QUFFWSxnQkFBSSxFQUFFLHNCQUFzQjtBQUN4QixtQ0FBb0I7QUFDeEIsY0FBRSxTQUFTLElBQUksT0FBTyxTQUFTLElBQUksU0FBUTtBQUFBLFVBQ3ZEO0FBQUEsUUFDQTtBQUNJLGlCQUFTLGVBQWU7QUFDcEIsaUJBQU8sV0FBVyxXQUFZO0FBQzFCLGdDQUFtQixLQUFNLGtCQUFpQjtBQUFBLFVBQ3RELENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsc0JBQXNCO0FBQzNCLGNBQUksY0FBYztBQUNsQiwrQkFBcUI7QUFDckIsaUNBQXVCO0FBQ3ZCLGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLG9CQUFvQjtBQUN6QixjQUFJLFdBQVcsR0FBRztBQUNsQixhQUFHO0FBQ0MsbUJBQU8sZUFBZSxTQUFTLEdBQUc7QUFDOUIsMEJBQVk7QUFDWiwrQkFBaUIsQ0FBQTtBQUNqQixrQkFBSSxVQUFVO0FBQ2QsbUJBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDcEIsb0JBQUksT0FBTyxVQUFVLENBQUM7QUFDdEIscUJBQUssQ0FBQyxFQUFFLE1BQU0sTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLGNBQy9DO0FBQUEsWUFDQTtBQUFBLFVBQ0EsU0FBaUIsZUFBZSxTQUFTO0FBQ2pDLCtCQUFxQjtBQUNyQixpQ0FBdUI7QUFBQSxRQUMvQjtBQUNJLGlCQUFTLHVCQUF1QjtBQUM1QixjQUFJLGdCQUFnQjtBQUNwQiw0QkFBa0IsQ0FBQTtBQUNsQix3QkFBYyxRQUFRLFNBQVUsR0FBRztBQUMvQixjQUFFLEtBQUssWUFBWSxLQUFLLE1BQU0sRUFBRSxRQUFRLENBQUM7QUFBQSxVQUNyRCxDQUFTO0FBQ0QsY0FBSSxhQUFhLGVBQWUsTUFBTSxDQUFDO0FBQ3ZDLGNBQUksSUFBSSxXQUFXO0FBQ25CLGlCQUFPO0FBQ0gsdUJBQVcsRUFBRSxDQUFDLEVBQUM7QUFBQSxRQUMzQjtBQUNJLGlCQUFTLHlDQUF5QyxJQUFJO0FBQ2xELG1CQUFTLFlBQVk7QUFDakIsZUFBRTtBQUNGLDJCQUFlLE9BQU8sZUFBZSxRQUFRLFNBQVMsR0FBRyxDQUFDO0FBQUEsVUFDdEU7QUFDUSx5QkFBZSxLQUFLLFNBQVM7QUFDN0IsWUFBRTtBQUNGLGVBQUssV0FBWTtBQUNiLGdCQUFJLEVBQUUsc0JBQXNCO0FBQ3hCLG1DQUFvQjtBQUFBLFVBQ3BDLEdBQVcsQ0FBQSxDQUFFO0FBQUEsUUFDYjtBQUNJLGlCQUFTLDBCQUEwQixTQUFTO0FBQ3hDLGNBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFVLEdBQUc7QUFBRSxtQkFBTyxFQUFFLFdBQVcsUUFBUTtBQUFBLFdBQVM7QUFDMUUsNEJBQWdCLEtBQUssT0FBTztBQUFBLFFBQ3hDO0FBQ0ksaUJBQVMsbUJBQW1CLFNBQVM7QUFDakMsY0FBSSxJQUFJLGdCQUFnQjtBQUN4QixpQkFBTztBQUNILGdCQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRSxXQUFXLFFBQVEsUUFBUTtBQUNoRCw4QkFBZ0IsT0FBTyxHQUFHLENBQUM7QUFDM0I7QUFBQSxZQUNoQjtBQUFBLFFBQ0E7QUFDSSxpQkFBUyxjQUFjLFFBQVE7QUFDM0IsaUJBQU8sSUFBSSxhQUFhLFVBQVUsT0FBTyxNQUFNO0FBQUEsUUFDdkQ7QUFDSSxpQkFBUyxLQUFLLElBQUksY0FBYztBQUM1QixjQUFJLE1BQU07QUFDVixpQkFBTyxXQUFZO0FBQ2YsZ0JBQUksY0FBYyx1QkFBdUIsYUFBYTtBQUN0RCxnQkFBSTtBQUNBLDJCQUFhLEtBQUssSUFBSTtBQUN0QixxQkFBTyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQUEsWUFDL0MsU0FDbUIsR0FBRztBQUNOLDhCQUFnQixhQUFhLENBQUM7QUFBQSxZQUM5QztBQUVnQiwyQkFBYSxZQUFZLEtBQUs7QUFDOUIsa0JBQUk7QUFDQSxrQ0FBaUI7QUFBQSxZQUNyQztBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQ0ksWUFBSSxPQUFPLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJLEVBQUM7QUFDeEMsWUFBSSxjQUFjO0FBQ2xCLFlBQUksWUFBWSxDQUFBO0FBQ2hCLFlBQUksYUFBYTtBQUNqQixZQUFJLGNBQWM7QUFDbEIsWUFBSSxrQkFBa0I7QUFDdEIsaUJBQVMsU0FBUyxJQUFJQyxRQUFPLElBQUksSUFBSTtBQUNqQyxjQUFJLFNBQVMsS0FBSyxNQUFNLE9BQU8sT0FBTyxNQUFNO0FBQzVDLGNBQUksU0FBUztBQUNiLGNBQUksTUFBTTtBQUNWLGNBQUksU0FBUztBQUNiLGNBQUksS0FBSyxFQUFFO0FBQ1gsb0JBQVU7QUFDVixjQUFJLE1BQU0scUJBQXFCO0FBQUEsWUFDM0IsU0FBUztBQUFBLFlBQ1QsYUFBYSxFQUFFLE9BQU8sY0FBYyxjQUFjLE1BQU0sVUFBVSxLQUFJO0FBQUEsWUFDdEUsS0FBSyxhQUFhO0FBQUEsWUFDbEIsTUFBTSxhQUFhO0FBQUEsWUFDbkIsWUFBWSxhQUFhO0FBQUEsWUFDekIsS0FBSyxhQUFhO0FBQUEsWUFDbEIsU0FBUyxhQUFhO0FBQUEsWUFDdEIsUUFBUSxhQUFhO0FBQUEsVUFDakMsSUFBWSxDQUFBO0FBQ0osY0FBSUE7QUFDQSxtQkFBTyxLQUFLQSxNQUFLO0FBQ3JCLFlBQUUsT0FBTztBQUNULGNBQUksV0FBVyxXQUFZO0FBQ3ZCLGNBQUUsS0FBSyxPQUFPLE9BQU8sS0FBSyxPQUFPLFNBQVE7QUFBQSxVQUNyRDtBQUNRLGNBQUksS0FBSyxPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFDL0IsY0FBSSxJQUFJLFFBQVE7QUFDWixnQkFBSSxTQUFRO0FBQ2hCLGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLDBCQUEwQjtBQUMvQixjQUFJLENBQUMsS0FBSztBQUNOLGlCQUFLLEtBQUssRUFBRTtBQUNoQixZQUFFLEtBQUs7QUFDUCxlQUFLLFVBQVU7QUFDZixpQkFBTyxLQUFLO0FBQUEsUUFDcEI7QUFDSSxpQkFBUywwQkFBMEI7QUFDL0IsY0FBSSxDQUFDLEtBQUs7QUFDTixtQkFBTztBQUNYLGNBQUksRUFBRSxLQUFLLFdBQVc7QUFDbEIsaUJBQUssS0FBSztBQUNkLGVBQUssU0FBUyxLQUFLLFNBQVM7QUFDNUIsaUJBQU87QUFBQSxRQUNmO0FBQ0ksYUFBSyxLQUFLLG1CQUFtQixRQUFRLGVBQWUsTUFBTSxJQUFJO0FBQzFELG9DQUEwQiwwQkFBMEI7QUFBQSxRQUM1RDtBQUNJLGlCQUFTLHlCQUF5QixpQkFBaUI7QUFDL0MsY0FBSSxLQUFLLFVBQVUsbUJBQW1CLGdCQUFnQixnQkFBZ0IsZUFBZTtBQUNqRixvQ0FBdUI7QUFDdkIsbUJBQU8sZ0JBQWdCLEtBQUssU0FBVSxHQUFHO0FBQ3JDLHNDQUF1QjtBQUN2QixxQkFBTztBQUFBLFlBQ3ZCLEdBQWUsU0FBVSxHQUFHO0FBQ1osc0NBQXVCO0FBQ3ZCLHFCQUFPLFVBQVUsQ0FBQztBQUFBLFlBQ2xDLENBQWE7QUFBQSxVQUNiO0FBQ1EsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsY0FBYyxZQUFZO0FBQy9CLFlBQUU7QUFDRixjQUFJLENBQUMsS0FBSyxVQUFVLEVBQUUsS0FBSyxXQUFXLEdBQUc7QUFDckMsaUJBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLO0FBQUEsVUFDbEQ7QUFDUSxvQkFBVSxLQUFLLEdBQUc7QUFDbEIsdUJBQWEsWUFBWSxJQUFJO0FBQUEsUUFDckM7QUFDSSxpQkFBUyxnQkFBZ0I7QUFDckIsY0FBSSxPQUFPLFVBQVUsVUFBVSxTQUFTLENBQUM7QUFDekMsb0JBQVUsSUFBRztBQUNiLHVCQUFhLE1BQU0sS0FBSztBQUFBLFFBQ2hDO0FBQ0ksaUJBQVMsYUFBYSxZQUFZLGVBQWU7QUFDN0MsY0FBSSxjQUFjO0FBQ2xCLGNBQUksZ0JBQWdCLEtBQUssV0FBVyxDQUFDLGdCQUFnQixlQUFlLE9BQU8sZUFBZSxDQUFDLEVBQUUsY0FBYyxlQUFlLE1BQU07QUFDNUgsMkJBQWUsZ0JBQWdCLGNBQWMsS0FBSyxNQUFNLFVBQVUsSUFBSSxhQUFhO0FBQUEsVUFDL0Y7QUFDUSxjQUFJLGVBQWU7QUFDZjtBQUNKLGdCQUFNO0FBQ04sY0FBSSxnQkFBZ0I7QUFDaEIsc0JBQVUsTUFBTSxTQUFRO0FBQzVCLGNBQUksb0JBQW9CO0FBQ3BCLGdCQUFJLGdCQUFnQixVQUFVLElBQUk7QUFDbEMsZ0JBQUksWUFBWSxXQUFXO0FBQzNCLGdCQUFJLFlBQVksVUFBVSxXQUFXLFFBQVE7QUFDekMscUJBQU8sZUFBZSxTQUFTLFdBQVcsVUFBVSxXQUFXO0FBQy9ELDRCQUFjLE1BQU0sVUFBVTtBQUM5Qiw0QkFBYyxPQUFPLFVBQVU7QUFDL0IsNEJBQWMsVUFBVSxVQUFVO0FBQ2xDLDRCQUFjLFNBQVMsVUFBVTtBQUNqQyxrQkFBSSxVQUFVO0FBQ1YsOEJBQWMsYUFBYSxVQUFVO0FBQ3pDLGtCQUFJLFVBQVU7QUFDViw4QkFBYyxNQUFNLFVBQVU7QUFBQSxZQUNsRDtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsV0FBVztBQUNoQixjQUFJLGdCQUFnQixRQUFRO0FBQzVCLGlCQUFPLHFCQUFxQjtBQUFBLFlBQ3hCLFNBQVM7QUFBQSxZQUNULGFBQWEsT0FBTyx5QkFBeUIsU0FBUyxTQUFTO0FBQUEsWUFDL0QsS0FBSyxjQUFjO0FBQUEsWUFDbkIsTUFBTSxjQUFjO0FBQUEsWUFDcEIsWUFBWSxjQUFjO0FBQUEsWUFDMUIsS0FBSyxjQUFjO0FBQUEsWUFDbkIsU0FBUyxjQUFjO0FBQUEsWUFDdkIsUUFBUSxjQUFjO0FBQUEsVUFDbEMsSUFBWSxDQUFBO0FBQUEsUUFDWjtBQUNJLGlCQUFTLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2pDLGNBQUksYUFBYTtBQUNqQixjQUFJO0FBQ0EseUJBQWEsS0FBSyxJQUFJO0FBQ3RCLG1CQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxVQUNoQztBQUVZLHlCQUFhLFlBQVksS0FBSztBQUFBLFVBQzFDO0FBQUEsUUFDQTtBQUNJLGlCQUFTLDBCQUEwQixJQUFJLE1BQU0sZUFBZSxTQUFTO0FBQ2pFLGlCQUFPLE9BQU8sT0FBTyxhQUFhLEtBQUssV0FBWTtBQUMvQyxnQkFBSSxZQUFZO0FBQ2hCLGdCQUFJO0FBQ0Esc0NBQXVCO0FBQzNCLHlCQUFhLE1BQU0sSUFBSTtBQUN2QixnQkFBSTtBQUNBLHFCQUFPLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFBQSxZQUMvQztBQUVnQiwyQkFBYSxXQUFXLEtBQUs7QUFDN0Isa0JBQUk7QUFDQSwrQkFBZSx1QkFBdUI7QUFBQSxZQUMxRDtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsb0JBQW9CLElBQUk7QUFDN0IsY0FBSSxZQUFZLGlCQUFpQixLQUFLLFdBQVcsR0FBRztBQUNoRCxnQkFBSSxlQUFlLEdBQUc7QUFDbEIsaUJBQUU7QUFBQSxZQUNsQixPQUNpQjtBQUNELHFDQUF1QixFQUFFO0FBQUEsWUFDekM7QUFBQSxVQUNBLE9BQ2E7QUFDRCx1QkFBVyxJQUFJLENBQUM7QUFBQSxVQUM1QjtBQUFBLFFBQ0E7QUFDSSxZQUFJLFlBQVksYUFBYTtBQUU3QixpQkFBUyxnQkFBZ0JDLEtBQUksTUFBTSxZQUFZLElBQUk7QUFDL0MsY0FBSSxDQUFDQSxJQUFHLFNBQVUsQ0FBQ0EsSUFBRyxPQUFPLGlCQUFpQixDQUFDLElBQUksY0FBYyxDQUFDQSxJQUFHLE9BQVE7QUFDekUsZ0JBQUlBLElBQUcsT0FBTyxjQUFjO0FBQ3hCLHFCQUFPLFVBQVUsSUFBSSxXQUFXLGVBQWVBLElBQUcsT0FBTyxXQUFXLENBQUM7QUFBQSxZQUNyRjtBQUNZLGdCQUFJLENBQUNBLElBQUcsT0FBTyxlQUFlO0FBQzFCLGtCQUFJLENBQUNBLElBQUcsT0FBTztBQUNYLHVCQUFPLFVBQVUsSUFBSSxXQUFXLGdCQUFnQjtBQUNwRCxjQUFBQSxJQUFHLEtBQUksRUFBRyxNQUFNLEdBQUc7QUFBQSxZQUNuQztBQUNZLG1CQUFPQSxJQUFHLE9BQU8sZUFBZSxLQUFLLFdBQVk7QUFBRSxxQkFBTyxnQkFBZ0JBLEtBQUksTUFBTSxZQUFZLEVBQUU7QUFBQSxZQUFFLENBQUU7QUFBQSxVQUNsSCxPQUNhO0FBQ0QsZ0JBQUksUUFBUUEsSUFBRyxtQkFBbUIsTUFBTSxZQUFZQSxJQUFHLFNBQVM7QUFDaEUsZ0JBQUk7QUFDQSxvQkFBTSxPQUFNO0FBQ1osY0FBQUEsSUFBRyxPQUFPLGlCQUFpQjtBQUFBLFlBQzNDLFNBQ21CLElBQUk7QUFDUCxrQkFBSSxHQUFHLFNBQVMsU0FBUyxnQkFBZ0JBLElBQUcsT0FBTSxLQUFNLEVBQUVBLElBQUcsT0FBTyxpQkFBaUIsR0FBRztBQUNwRix3QkFBUSxLQUFLLDBCQUEwQjtBQUN2QyxnQkFBQUEsSUFBRyxNQUFNLEVBQUUsaUJBQWlCLE1BQUssQ0FBRTtBQUNuQyx1QkFBT0EsSUFBRyxLQUFJLEVBQUcsS0FBSyxXQUFZO0FBQUUseUJBQU8sZ0JBQWdCQSxLQUFJLE1BQU0sWUFBWSxFQUFFO0FBQUEsZ0JBQUUsQ0FBRTtBQUFBLGNBQzNHO0FBQ2dCLHFCQUFPLFVBQVUsRUFBRTtBQUFBLFlBQ25DO0FBQ1ksbUJBQU8sTUFBTSxTQUFTLE1BQU0sU0FBVSxTQUFTLFFBQVE7QUFDbkQscUJBQU8sU0FBUyxXQUFZO0FBQ3hCLG9CQUFJLFFBQVE7QUFDWix1QkFBTyxHQUFHLFNBQVMsUUFBUSxLQUFLO0FBQUEsY0FDcEQsQ0FBaUI7QUFBQSxZQUNqQixDQUFhLEVBQUUsS0FBSyxTQUFVTixTQUFRO0FBQ3RCLGtCQUFJLFNBQVM7QUFDVCxvQkFBSTtBQUNBLHdCQUFNLFNBQVMsT0FBTTtBQUFBLGdCQUM3QyxTQUMyQk8sS0FBSTtBQUFBLGdCQUFBO0FBQ2YscUJBQU8sU0FBUyxhQUFhUCxVQUFTLE1BQU0sWUFBWSxLQUFLLFdBQVk7QUFBRSx1QkFBT0E7QUFBQSxlQUFTO0FBQUEsWUFDM0csQ0FBYTtBQUFBLFVBQ2I7QUFBQSxRQUNBO0FBRUksWUFBSSxnQkFBZ0I7QUFDcEIsWUFBSSxZQUFZLE9BQU8sYUFBYSxLQUFLO0FBQ3pDLFlBQUksU0FBUztBQUNiLFlBQUksdUJBQXVCO0FBQzNCLFlBQUksa0JBQWtCO0FBQ3RCLFlBQUksY0FBYyxDQUFBO0FBQ2xCLFlBQUksYUFBYTtBQUNqQixZQUFJLFdBQVc7QUFDZixZQUFJLFlBQVk7QUFFaEIsaUJBQVMsUUFBUSxTQUFTLFNBQVM7QUFDL0IsaUJBQU8sVUFDSCxVQUNJLFdBQVk7QUFBRSxtQkFBTyxRQUFRLE1BQU0sTUFBTSxTQUFTLEtBQUssUUFBUSxNQUFNLE1BQU0sU0FBUztBQUFBLFVBQUUsSUFDdEYsVUFDSjtBQUFBLFFBQ1o7QUFFSSxZQUFJLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFdBQVc7QUFBQSxVQUNYLE9BQU8sQ0FBQyxDQUFBLENBQUU7QUFBQSxVQUNWLFdBQVc7QUFBQTtBQUdmLGlCQUFTLDhCQUE4QixTQUFTO0FBQzVDLGlCQUFPLE9BQU8sWUFBWSxZQUFZLENBQUMsS0FBSyxLQUFLLE9BQU8sSUFDbEQsU0FBVSxLQUFLO0FBQ2IsZ0JBQUksSUFBSSxPQUFPLE1BQU0sVUFBYyxXQUFXLEtBQU07QUFDaEQsb0JBQU0sVUFBVSxHQUFHO0FBQ25CLHFCQUFPLElBQUksT0FBTztBQUFBLFlBQ3RDO0FBQ2dCLG1CQUFPO0FBQUEsVUFDdkIsSUFDYyxTQUFVLEtBQUs7QUFBRSxtQkFBTztBQUFBLFVBQUk7QUFBQSxRQUMxQztBQUVJLGlCQUFTUSxVQUFTO0FBQ2QsZ0JBQU0sV0FBVyxLQUFLLDRHQUE0RztBQUFBLFFBQzFJO0FBRUksaUJBQVNDLEtBQUksR0FBRyxHQUFHO0FBQ2YsY0FBSTtBQUNBLGdCQUFJLEtBQUssS0FBSyxDQUFDO0FBQ2YsZ0JBQUksS0FBSyxLQUFLLENBQUM7QUFDZixnQkFBSSxPQUFPLElBQUk7QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxrQkFBSSxPQUFPO0FBQ1AsdUJBQU87QUFDWCxxQkFBTztBQUFBLFlBQ3ZCO0FBQ1ksb0JBQVEsSUFBRTtBQUFBLGNBQ04sS0FBSztBQUFBLGNBQ0wsS0FBSztBQUFBLGNBQ0wsS0FBSztBQUNELHVCQUFPLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLO0FBQUEsY0FDcEMsS0FBSyxVQUFVO0FBQ1gsdUJBQU8sbUJBQW1CLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDO0FBQUEsY0FDaEY7QUFBQSxjQUNnQixLQUFLO0FBQ0QsdUJBQU8sY0FBYyxHQUFHLENBQUM7QUFBQSxZQUM3QztBQUFBLFVBQ0EsU0FDZUYsS0FBSTtBQUFBLFVBQUE7QUFDWCxpQkFBTztBQUFBLFFBQ2Y7QUFDSSxpQkFBUyxjQUFjLEdBQUcsR0FBRztBQUN6QixjQUFJLEtBQUssRUFBRTtBQUNYLGNBQUksS0FBSyxFQUFFO0FBQ1gsY0FBSSxJQUFJLEtBQUssS0FBSyxLQUFLO0FBQ3ZCLG1CQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ3hCLGdCQUFJLE1BQU1FLEtBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDeEIsZ0JBQUksUUFBUTtBQUNSLHFCQUFPO0FBQUEsVUFDdkI7QUFDUSxpQkFBTyxPQUFPLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztBQUFBLFFBQzlDO0FBQ0ksaUJBQVMsbUJBQW1CLEdBQUcsR0FBRztBQUM5QixjQUFJLEtBQUssRUFBRTtBQUNYLGNBQUksS0FBSyxFQUFFO0FBQ1gsY0FBSSxJQUFJLEtBQUssS0FBSyxLQUFLO0FBQ3ZCLG1CQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ3hCLGdCQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNaLHFCQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUs7QUFBQSxVQUMxQztBQUNRLGlCQUFPLE9BQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLO0FBQUEsUUFDOUM7QUFDSSxpQkFBUyxLQUFLLEdBQUc7QUFDYixjQUFJLElBQUksT0FBTztBQUNmLGNBQUksTUFBTTtBQUNOLG1CQUFPO0FBQ1gsY0FBSSxZQUFZLE9BQU8sQ0FBQztBQUNwQixtQkFBTztBQUNYLGNBQUksUUFBUSxZQUFZLENBQUM7QUFDekIsaUJBQU8sVUFBVSxnQkFBZ0IsV0FBVztBQUFBLFFBQ3BEO0FBQ0ksaUJBQVMsY0FBYyxHQUFHO0FBQ3RCLGNBQUksYUFBYTtBQUNiLG1CQUFPO0FBQ1gsY0FBSSxZQUFZLE9BQU8sQ0FBQztBQUNwQixtQkFBTyxJQUFJLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFVBQVU7QUFDOUQsaUJBQU8sSUFBSSxXQUFXLENBQUM7QUFBQSxRQUMvQjtBQUVJLGlCQUFTLHVCQUF1QixPQUFPQyxPQUFNLEtBQUs7QUFDOUMsY0FBSSxTQUFTLE1BQU0sT0FBTztBQUMxQixjQUFJLENBQUM7QUFDRCxtQkFBTztBQUNYLGNBQUlBLFNBQVEsSUFBSSxjQUFjO0FBQzFCLFlBQUFBLFFBQU9BLE1BQUssT0FBTyxTQUFVLEdBQUcsR0FBRztBQUFFLHFCQUFPLENBQUMsSUFBSSxTQUFTLENBQUM7QUFBQSxZQUFFLENBQUU7QUFDbkUsaUJBQU8sUUFBUSxJQUFJLE9BQU8sSUFBSSxTQUFVSCxLQUFJO0FBQ3hDLGdCQUFJLGVBQWVBLElBQUc7QUFDdEIsbUJBQU9HLFFBQ0QsTUFBTSxHQUFHLE1BQU0sWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFLE1BQU1BLEtBQUksRUFBRSxPQUFNLElBQzFELE1BQU0sR0FBRyxNQUFNLFlBQVksRUFBRSxNQUFLO0FBQUEsVUFDcEQsQ0FBUyxDQUFDLEVBQUUsS0FBSyxXQUFZO0FBQUUsbUJBQU87QUFBQSxVQUFJLENBQUU7QUFBQSxRQUM1QztBQUVJLFlBQUksUUFBVSxXQUFZO0FBQ3RCLG1CQUFTQyxTQUFRO0FBQUEsVUFDekI7QUFDUSxVQUFBQSxPQUFNLFVBQVUsU0FBUyxTQUFVLE1BQU0sSUFBSSxhQUFhO0FBQ3RELGdCQUFJLFFBQVEsS0FBSyxPQUFPLElBQUk7QUFDNUIsZ0JBQUksWUFBWSxLQUFLO0FBQ3JCLGdCQUFJQyxRQUFPLFNBQVMsT0FBTyxZQUFZLGVBQWUsUUFBUSxjQUFjLFFBQVEsV0FBVyxVQUFVLE9BQU8sU0FBUyxhQUFhLFNBQVMsU0FBUyxHQUFHLEVBQUUsT0FBTyxLQUFLLElBQUksQ0FBQztBQUM5SyxxQkFBUyx3QkFBd0IsU0FBUyxRQUFRQyxRQUFPO0FBQ3JELGtCQUFJLENBQUNBLE9BQU0sT0FBTyxTQUFTO0FBQ3ZCLHNCQUFNLElBQUksV0FBVyxTQUFTLFdBQVcsWUFBWSwwQkFBMEI7QUFDbkYscUJBQU8sR0FBR0EsT0FBTSxVQUFVQSxNQUFLO0FBQUEsWUFDL0M7QUFDWSxnQkFBSSxjQUFjLG9CQUFtQjtBQUNyQyxnQkFBSTtBQUNBLGtCQUFJLElBQUksU0FBUyxNQUFNLEdBQUcsV0FBVyxLQUFLLEdBQUcsU0FDekMsVUFBVSxJQUFJLFFBQ1YsTUFBTSxTQUFTLE1BQU0seUJBQXlCLFdBQVcsSUFDekQsU0FBUyxXQUFZO0FBQUUsdUJBQU8sTUFBTSxTQUFTLE1BQU0seUJBQXlCLFdBQVc7QUFBQSxjQUFFLEdBQUksRUFBRSxPQUFjLFdBQVcsSUFBSSxhQUFhLEtBQUssSUFDbEosZ0JBQWdCLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsdUJBQXVCO0FBQ3ZFLGtCQUFJRCxPQUFNO0FBQ04sa0JBQUUsZUFBZUE7QUFDakIsb0JBQUksRUFBRSxNQUFNLFNBQVUsS0FBSztBQUN2QiwwQkFBUSxNQUFNLEdBQUc7QUFDakIseUJBQU8sVUFBVSxHQUFHO0FBQUEsZ0JBQzVDLENBQXFCO0FBQUEsY0FDckI7QUFDZ0IscUJBQU87QUFBQSxZQUN2QjtBQUVnQixrQkFBSTtBQUNBLGtDQUFpQjtBQUFBLFlBQ3JDO0FBQUEsVUFDQTtBQUNRLFVBQUFELE9BQU0sVUFBVSxNQUFNLFNBQVUsV0FBVyxJQUFJO0FBQzNDLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxhQUFhLFVBQVUsZ0JBQWdCO0FBQ3ZDLHFCQUFPLEtBQUssTUFBTSxTQUFTLEVBQUUsTUFBTSxFQUFFO0FBQ3pDLGdCQUFJLGFBQWE7QUFDYixxQkFBTyxVQUFVLElBQUksV0FBVyxLQUFLLGlDQUFpQyxDQUFDO0FBQzNFLG1CQUFPLEtBQUssT0FBTyxZQUFZLFNBQVUsT0FBTztBQUM1QyxxQkFBTyxNQUFNLEtBQUssSUFBSSxFQUFFLE9BQWMsS0FBSyxVQUFTLENBQUUsRUFDakQsS0FBSyxTQUFVLEtBQUs7QUFBRSx1QkFBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEdBQUc7QUFBQSxlQUFJO0FBQUEsWUFDakYsQ0FBYSxFQUFFLEtBQUssRUFBRTtBQUFBLFVBQ3RCO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLFFBQVEsU0FBVSxhQUFhO0FBQzNDLGdCQUFJLE9BQU8sZ0JBQWdCO0FBQ3ZCLHFCQUFPLElBQUksS0FBSyxHQUFHLFlBQVksTUFBTSxXQUFXO0FBQ3BELGdCQUFJLFFBQVEsV0FBVztBQUNuQixxQkFBTyxJQUFJLEtBQUssR0FBRyxZQUFZLE1BQU0sSUFBSSxPQUFPLFlBQVksS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9FLGdCQUFJLFdBQVcsS0FBSyxXQUFXO0FBQy9CLGdCQUFJLFNBQVMsV0FBVztBQUNwQixxQkFBTyxLQUNGLE1BQU0sU0FBUyxDQUFDLENBQUMsRUFDakIsT0FBTyxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZ0JBQUksZ0JBQWdCLEtBQUssT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPLE9BQU8sRUFBRSxPQUFPLFNBQVUsSUFBSTtBQUNyRixrQkFBSSxHQUFHLFlBQ0gsU0FBUyxNQUFNLFNBQVUsU0FBUztBQUFFLHVCQUFPLEdBQUcsUUFBUSxRQUFRLE9BQU8sS0FBSztBQUFBLGNBQUUsQ0FBRSxHQUFHO0FBQ2pGLHlCQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxFQUFFLEdBQUc7QUFDdEMsc0JBQUksU0FBUyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTTtBQUNwQywyQkFBTztBQUFBLGdCQUNuQztBQUNvQix1QkFBTztBQUFBLGNBQzNCO0FBQ2dCLHFCQUFPO0FBQUEsWUFDdkIsQ0FBYSxFQUFFLEtBQUssU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBTyxFQUFFLFFBQVEsU0FBUyxFQUFFLFFBQVE7QUFBQSxZQUFPLENBQUUsRUFBRSxDQUFDO0FBQzFFLGdCQUFJLGlCQUFpQixLQUFLLEdBQUcsWUFBWSxXQUFXO0FBQ2hELGtCQUFJLHVCQUF1QixjQUFjLFFBQVEsTUFBTSxHQUFHLFNBQVMsTUFBTTtBQUN6RSxxQkFBTyxLQUNGLE1BQU0sb0JBQW9CLEVBQzFCLE9BQU8scUJBQXFCLElBQUksU0FBVSxJQUFJO0FBQUUsdUJBQU8sWUFBWSxFQUFFO0FBQUEsY0FBRSxDQUFFLENBQUM7QUFBQSxZQUMvRjtBQUNZLGdCQUFJLENBQUMsaUJBQWlCO0FBQ2xCLHNCQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLEdBQUcsTUFBTSxFQUFFLE9BQU8sS0FBSyxNQUFNLHdCQUF3QixJQUM1RyxtQkFBbUIsT0FBTyxTQUFTLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMxRCxnQkFBSSxZQUFZLEtBQUssT0FBTztBQUM1QixxQkFBUyxPQUFPLEdBQUcsR0FBRztBQUNsQixxQkFBT0YsS0FBSSxHQUFHLENBQUMsTUFBTTtBQUFBLFlBQ3JDO0FBQ1ksZ0JBQUlGLE1BQUssU0FBUyxPQUFPLFNBQVVBLEtBQUksU0FBUztBQUM1QyxrQkFBSSxZQUFZQSxJQUFHLENBQUMsR0FBRyxlQUFlQSxJQUFHLENBQUM7QUFDMUMsa0JBQUksUUFBUSxVQUFVLE9BQU87QUFDN0Isa0JBQUksUUFBUSxZQUFZLE9BQU87QUFDL0IscUJBQU87QUFBQSxnQkFDSCxhQUFhO0FBQUEsZ0JBQ2IsYUFBYSxDQUFDLFFBQ1YsUUFBUSxjQUFjLFNBQVMsTUFBTSxRQUNqQyxTQUFVLEdBQUc7QUFDVCxzQkFBSSxPQUFPLGFBQWEsR0FBRyxPQUFPO0FBQ2xDLHlCQUFPLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSyxTQUFVLE1BQU07QUFBRSwyQkFBTyxPQUFPLE9BQU8sSUFBSTtBQUFBLGtCQUFFLENBQUU7QUFBQSxnQkFDakgsSUFBZ0MsU0FBVSxHQUFHO0FBQUUseUJBQU8sT0FBTyxPQUFPLGFBQWEsR0FBRyxPQUFPLENBQUM7QUFBQSxnQkFBRSxDQUFFLElBQ3RFO0FBQUE7WUFFMUIsR0FBZSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTUEsSUFBRyxDQUFDLEdBQUcsaUJBQWlCQSxJQUFHLENBQUM7QUFDcEQsbUJBQU8sTUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsT0FBTyxZQUFZLElBQUksT0FBTyxDQUFDLEVBQy9DLE9BQU8sY0FBYyxJQUMxQixnQkFDSSxLQUFLLE9BQU8sY0FBYyxJQUMxQixLQUFLLE1BQU0sUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUFBLFVBQ2xEO0FBQ1EsVUFBQUksT0FBTSxVQUFVLFNBQVMsU0FBVSxnQkFBZ0I7QUFDL0MsbUJBQU8sS0FBSyxlQUFlLElBQUksY0FBYztBQUFBLFVBQ3pEO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLFFBQVEsU0FBVSxjQUFjO0FBQzVDLG1CQUFPLEtBQUssZUFBZSxNQUFNLFlBQVk7QUFBQSxVQUN6RDtBQUNRLFVBQUFBLE9BQU0sVUFBVSxTQUFTLFNBQVUsUUFBUTtBQUN2QyxtQkFBTyxLQUFLLGVBQWUsT0FBTyxNQUFNO0FBQUEsVUFDcEQ7QUFDUSxVQUFBQSxPQUFNLFVBQVUsUUFBUSxTQUFVLFNBQVM7QUFDdkMsbUJBQU8sS0FBSyxlQUFlLE1BQU0sT0FBTztBQUFBLFVBQ3BEO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLE9BQU8sU0FBVSxVQUFVO0FBQ3ZDLG1CQUFPLEtBQUssZUFBZSxLQUFLLFFBQVE7QUFBQSxVQUNwRDtBQUNRLFVBQUFBLE9BQU0sVUFBVSxVQUFVLFNBQVUsY0FBYztBQUM5QyxtQkFBTyxLQUFLLGVBQWUsUUFBUSxZQUFZO0FBQUEsVUFDM0Q7QUFDUSxVQUFBQSxPQUFNLFVBQVUsZUFBZSxXQUFZO0FBQ3ZDLG1CQUFPLElBQUksS0FBSyxHQUFHLFdBQVcsSUFBSSxLQUFLLEdBQUcsWUFBWSxJQUFJLENBQUM7QUFBQSxVQUN2RTtBQUNRLFVBQUFBLE9BQU0sVUFBVSxVQUFVLFNBQVUsT0FBTztBQUN2QyxtQkFBTyxJQUFJLEtBQUssR0FBRyxXQUFXLElBQUksS0FBSyxHQUFHLFlBQVksTUFBTSxRQUFRLEtBQUssSUFDckUsSUFBSSxPQUFPLE1BQU0sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUMvQixLQUFLLENBQUM7QUFBQSxVQUN0QjtBQUNRLFVBQUFBLE9BQU0sVUFBVSxVQUFVLFdBQVk7QUFDbEMsbUJBQU8sS0FBSyxhQUFZLEVBQUcsUUFBTztBQUFBLFVBQzlDO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLGFBQWEsU0FBVSxhQUFhO0FBQ2hELGdCQUFJSixNQUFLLE1BQU1ELE1BQUtDLElBQUcsSUFBSSxZQUFZQSxJQUFHO0FBQzFDLGlCQUFLLE9BQU8sY0FBYztBQUMxQixnQkFBSSxZQUFZLHFCQUFxQkMsU0FBUTtBQUN6Qyw0QkFBZ0IsU0FBVSxRQUFRO0FBQzlCLDBCQUFVLFNBQVMsTUFBTTtBQUN6Qix5QkFBUyxVQUFVO0FBQ2YseUJBQU8sV0FBVyxRQUFRLE9BQU8sTUFBTSxNQUFNLFNBQVMsS0FBSztBQUFBLGdCQUNuRjtBQUNvQix1QkFBTyxlQUFlLFFBQVEsV0FBVyxNQUFNO0FBQUEsa0JBQzNDLEtBQUssV0FBWTtBQUFFLDJCQUFPRjtBQUFBLGtCQUFHO0FBQUEsa0JBQzdCLFlBQVk7QUFBQSxrQkFDWixjQUFjO0FBQUEsZ0JBQ3RDLENBQXFCO0FBQ0Qsd0JBQVEsVUFBVSxRQUFRLFdBQVk7QUFBRSx5QkFBTztBQUFBLGdCQUFVO0FBQ3pELHVCQUFPO0FBQUEsY0FDM0IsRUFBa0IsV0FBVztBQUFBLFlBQzdCO0FBQ1ksZ0JBQUksaUJBQWlCLG9CQUFJLElBQUc7QUFDNUIscUJBQVMsUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFNBQVMsS0FBSyxHQUFHO0FBQ3BFLHFCQUFPLG9CQUFvQixLQUFLLEVBQUUsUUFBUSxTQUFVLFVBQVU7QUFBRSx1QkFBTyxlQUFlLElBQUksUUFBUTtBQUFBLGNBQUUsQ0FBRTtBQUFBLFlBQ3RIO0FBQ1ksZ0JBQUksV0FBVyxTQUFVLEtBQUs7QUFDMUIsa0JBQUksQ0FBQztBQUNELHVCQUFPO0FBQ1gsa0JBQUksTUFBTSxPQUFPLE9BQU8sWUFBWSxTQUFTO0FBQzdDLHVCQUFTLEtBQUs7QUFDVixvQkFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDO0FBQ3JCLHNCQUFJO0FBQ0Esd0JBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUFBLGtCQUMxQyxTQUMrQixHQUFHO0FBQUEsa0JBQUE7QUFDbEIscUJBQU87QUFBQSxZQUN2QjtBQUNZLGdCQUFJLEtBQUssT0FBTyxVQUFVO0FBQ3RCLG1CQUFLLEtBQUssUUFBUSxZQUFZLEtBQUssT0FBTyxRQUFRO0FBQUEsWUFDbEU7QUFDWSxpQkFBSyxPQUFPLFdBQVc7QUFDdkIsaUJBQUssS0FBSyxXQUFXLFFBQVE7QUFDN0IsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFLLE9BQU0sVUFBVSxjQUFjLFdBQVk7QUFDdEMscUJBQVMsTUFBTSxTQUFTO0FBQ3BCLHFCQUFPLE1BQU0sT0FBTztBQUFBLFlBQ3BDO0FBQ1ksbUJBQU8sS0FBSyxXQUFXLEtBQUs7QUFBQSxVQUN4QztBQUNRLFVBQUFBLE9BQU0sVUFBVSxNQUFNLFNBQVUsS0FBSyxLQUFLO0FBQ3RDLGdCQUFJLFFBQVE7QUFDWixnQkFBSUosTUFBSyxLQUFLLE9BQU8sU0FBUyxPQUFPQSxJQUFHLE1BQU0sVUFBVUEsSUFBRztBQUMzRCxnQkFBSSxXQUFXO0FBQ2YsZ0JBQUksV0FBVyxNQUFNO0FBQ2pCLHlCQUFXLDhCQUE4QixPQUFPLEVBQUUsR0FBRztBQUFBLFlBQ3JFO0FBQ1ksbUJBQU8sS0FBSyxPQUFPLGFBQWEsU0FBVSxPQUFPO0FBQzdDLHFCQUFPLE1BQU0sS0FBSyxPQUFPLEVBQUUsT0FBYyxNQUFNLE9BQU8sTUFBTSxPQUFPLE9BQU8sQ0FBQyxHQUFHLElBQUksTUFBTSxRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsWUFDNUgsQ0FBYSxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQUUscUJBQU8sSUFBSSxjQUFjLGFBQWEsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSTtBQUFBLFlBQVcsQ0FBRSxFQUNyRyxLQUFLLFNBQVUsWUFBWTtBQUM1QixrQkFBSSxTQUFTO0FBQ1Qsb0JBQUk7QUFDQSwrQkFBYSxLQUFLLFNBQVMsVUFBVTtBQUFBLGdCQUM3RCxTQUMyQixHQUFHO0FBQUEsZ0JBQUE7QUFBQSxjQUM5QjtBQUNnQixxQkFBTztBQUFBLFlBQ3ZCLENBQWE7QUFBQSxVQUNiO0FBQ1EsVUFBQUksT0FBTSxVQUFVLFNBQVMsU0FBVSxhQUFhLGVBQWU7QUFDM0QsZ0JBQUksT0FBTyxnQkFBZ0IsWUFBWSxDQUFDLFFBQVEsV0FBVyxHQUFHO0FBQzFELGtCQUFJLE1BQU0sYUFBYSxhQUFhLEtBQUssT0FBTyxRQUFRLE9BQU87QUFDL0Qsa0JBQUksUUFBUTtBQUNSLHVCQUFPLFVBQVUsSUFBSSxXQUFXLGdCQUFnQiwrQ0FBK0MsQ0FBQztBQUNwRyxxQkFBTyxLQUFLLE1BQU0sS0FBSyxFQUFFLE9BQU8sR0FBRyxFQUFFLE9BQU8sYUFBYTtBQUFBLFlBQ3pFLE9BQ2lCO0FBQ0QscUJBQU8sS0FBSyxNQUFNLEtBQUssRUFBRSxPQUFPLFdBQVcsRUFBRSxPQUFPLGFBQWE7QUFBQSxZQUNqRjtBQUFBLFVBQ0E7QUFDUSxVQUFBQSxPQUFNLFVBQVUsTUFBTSxTQUFVLEtBQUssS0FBSztBQUN0QyxnQkFBSSxRQUFRO0FBQ1osZ0JBQUlKLE1BQUssS0FBSyxPQUFPLFNBQVMsT0FBT0EsSUFBRyxNQUFNLFVBQVVBLElBQUc7QUFDM0QsZ0JBQUksV0FBVztBQUNmLGdCQUFJLFdBQVcsTUFBTTtBQUNqQix5QkFBVyw4QkFBOEIsT0FBTyxFQUFFLEdBQUc7QUFBQSxZQUNyRTtBQUNZLG1CQUFPLEtBQUssT0FBTyxhQUFhLFNBQVUsT0FBTztBQUFFLHFCQUFPLE1BQU0sS0FBSyxPQUFPLEVBQUUsT0FBYyxNQUFNLE9BQU8sUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLE9BQU8sT0FBTyxDQUFDLEdBQUcsSUFBSSxLQUFJLENBQUU7QUFBQSxZQUFFLENBQUUsRUFDOUosS0FBSyxTQUFVLEtBQUs7QUFBRSxxQkFBTyxJQUFJLGNBQWMsYUFBYSxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJO0FBQUEsWUFBVyxDQUFFLEVBQ3ZHLEtBQUssU0FBVSxZQUFZO0FBQzVCLGtCQUFJLFNBQVM7QUFDVCxvQkFBSTtBQUNBLCtCQUFhLEtBQUssU0FBUyxVQUFVO0FBQUEsZ0JBQzdELFNBQzJCLEdBQUc7QUFBQSxnQkFBQTtBQUFBLGNBQzlCO0FBQ2dCLHFCQUFPO0FBQUEsWUFDdkIsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxVQUFBSSxPQUFNLFVBQVUsU0FBUyxTQUFVLEtBQUs7QUFDcEMsZ0JBQUksUUFBUTtBQUNaLG1CQUFPLEtBQUssT0FBTyxhQUFhLFNBQVUsT0FBTztBQUFFLHFCQUFPLE1BQU0sS0FBSyxPQUFPLEVBQUUsT0FBYyxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFFLEVBQ3BILEtBQUssU0FBVSxLQUFLO0FBQUUsdUJBQU8sdUJBQXVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRztBQUFBLGNBQUUsQ0FBRSxFQUN6RSxLQUFLLFNBQVUsS0FBSztBQUFFLHVCQUFPLElBQUksY0FBYyxhQUFhLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJO0FBQUEsY0FBVSxDQUFFO0FBQUEsYUFBSTtBQUFBLFVBQ3ZIO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLFFBQVEsV0FBWTtBQUNoQyxnQkFBSSxRQUFRO0FBQ1osbUJBQU8sS0FBSyxPQUFPLGFBQWEsU0FBVSxPQUFPO0FBQUUscUJBQU8sTUFBTSxLQUFLLE9BQU8sRUFBRSxPQUFjLE1BQU0sZUFBZSxPQUFPLFNBQVEsQ0FBRSxFQUM3SCxLQUFLLFNBQVUsS0FBSztBQUFFLHVCQUFPLHVCQUF1QixPQUFPLE1BQU0sR0FBRztBQUFBLGNBQUUsQ0FBRTtBQUFBLFlBQUUsQ0FBRSxFQUM1RSxLQUFLLFNBQVUsS0FBSztBQUFFLHFCQUFPLElBQUksY0FBYyxhQUFhLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxJQUFJO0FBQUEsWUFBVSxDQUFFO0FBQUEsVUFDbkg7QUFDUSxVQUFBQSxPQUFNLFVBQVUsVUFBVSxTQUFVRCxPQUFNO0FBQ3RDLGdCQUFJLFFBQVE7QUFDWixtQkFBTyxLQUFLLE9BQU8sWUFBWSxTQUFVLE9BQU87QUFDNUMscUJBQU8sTUFBTSxLQUFLLFFBQVE7QUFBQSxnQkFDdEIsTUFBTUE7QUFBQSxnQkFDTjtBQUFBLGNBQ3BCLENBQWlCLEVBQUUsS0FBSyxTQUFVVixTQUFRO0FBQUUsdUJBQU9BLFFBQU8sSUFBSSxTQUFVLEtBQUs7QUFBRSx5QkFBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEdBQUc7QUFBQSxnQkFBRSxDQUFFO0FBQUEsZUFBSTtBQUFBLFlBQ3pILENBQWE7QUFBQSxVQUNiO0FBQ1EsVUFBQVcsT0FBTSxVQUFVLFVBQVUsU0FBVSxTQUFTLGVBQWUsU0FBUztBQUNqRSxnQkFBSSxRQUFRO0FBQ1osZ0JBQUlELFFBQU8sTUFBTSxRQUFRLGFBQWEsSUFBSSxnQkFBZ0I7QUFDMUQsc0JBQVUsWUFBWUEsUUFBTyxTQUFZO0FBQ3pDLGdCQUFJLGNBQWMsVUFBVSxRQUFRLFVBQVU7QUFDOUMsbUJBQU8sS0FBSyxPQUFPLGFBQWEsU0FBVSxPQUFPO0FBQzdDLGtCQUFJSCxNQUFLLE1BQU0sT0FBTyxTQUFTLE9BQU9BLElBQUcsTUFBTSxVQUFVQSxJQUFHO0FBQzVELGtCQUFJLFdBQVdHO0FBQ1gsc0JBQU0sSUFBSSxXQUFXLGdCQUFnQiw4REFBOEQ7QUFDdkcsa0JBQUlBLFNBQVFBLE1BQUssV0FBVyxRQUFRO0FBQ2hDLHNCQUFNLElBQUksV0FBVyxnQkFBZ0Isc0RBQXNEO0FBQy9GLGtCQUFJLGFBQWEsUUFBUTtBQUN6QixrQkFBSSxlQUFlLFdBQVcsT0FDMUIsUUFBUSxJQUFJLDhCQUE4QixPQUFPLENBQUMsSUFDbEQ7QUFDSixxQkFBTyxNQUFNLEtBQUssT0FBTyxFQUFFLE9BQWMsTUFBTSxPQUFPLE1BQU1BLE9BQU0sUUFBUSxjQUFjLFlBQXdCLENBQUUsRUFDN0csS0FBSyxTQUFVSCxLQUFJO0FBQ3BCLG9CQUFJLGNBQWNBLElBQUcsYUFBYSxVQUFVQSxJQUFHLFNBQVMsYUFBYUEsSUFBRyxZQUFZLFdBQVdBLElBQUc7QUFDbEcsb0JBQUlQLFVBQVMsY0FBYyxVQUFVO0FBQ3JDLG9CQUFJLGdCQUFnQjtBQUNoQix5QkFBT0E7QUFDWCxzQkFBTSxJQUFJLFVBQVUsR0FBRyxPQUFPLE1BQU0sTUFBTSxjQUFjLEVBQUUsT0FBTyxhQUFhLE1BQU0sRUFBRSxPQUFPLFlBQVksb0JBQW9CLEdBQUcsUUFBUTtBQUFBLGNBQzVKLENBQWlCO0FBQUEsWUFDakIsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxVQUFBVyxPQUFNLFVBQVUsVUFBVSxTQUFVLFNBQVMsZUFBZSxTQUFTO0FBQ2pFLGdCQUFJLFFBQVE7QUFDWixnQkFBSUQsUUFBTyxNQUFNLFFBQVEsYUFBYSxJQUFJLGdCQUFnQjtBQUMxRCxzQkFBVSxZQUFZQSxRQUFPLFNBQVk7QUFDekMsZ0JBQUksY0FBYyxVQUFVLFFBQVEsVUFBVTtBQUM5QyxtQkFBTyxLQUFLLE9BQU8sYUFBYSxTQUFVLE9BQU87QUFDN0Msa0JBQUlILE1BQUssTUFBTSxPQUFPLFNBQVMsT0FBT0EsSUFBRyxNQUFNLFVBQVVBLElBQUc7QUFDNUQsa0JBQUksV0FBV0c7QUFDWCxzQkFBTSxJQUFJLFdBQVcsZ0JBQWdCLDhEQUE4RDtBQUN2RyxrQkFBSUEsU0FBUUEsTUFBSyxXQUFXLFFBQVE7QUFDaEMsc0JBQU0sSUFBSSxXQUFXLGdCQUFnQixzREFBc0Q7QUFDL0Ysa0JBQUksYUFBYSxRQUFRO0FBQ3pCLGtCQUFJLGVBQWUsV0FBVyxPQUMxQixRQUFRLElBQUksOEJBQThCLE9BQU8sQ0FBQyxJQUNsRDtBQUNKLHFCQUFPLE1BQU0sS0FBSyxPQUFPLEVBQUUsT0FBYyxNQUFNLE9BQU8sTUFBTUEsT0FBTSxRQUFRLGNBQWMsWUFBd0IsQ0FBRSxFQUM3RyxLQUFLLFNBQVVILEtBQUk7QUFDcEIsb0JBQUksY0FBY0EsSUFBRyxhQUFhLFVBQVVBLElBQUcsU0FBUyxhQUFhQSxJQUFHLFlBQVksV0FBV0EsSUFBRztBQUNsRyxvQkFBSVAsVUFBUyxjQUFjLFVBQVU7QUFDckMsb0JBQUksZ0JBQWdCO0FBQ2hCLHlCQUFPQTtBQUNYLHNCQUFNLElBQUksVUFBVSxHQUFHLE9BQU8sTUFBTSxNQUFNLGNBQWMsRUFBRSxPQUFPLGFBQWEsTUFBTSxFQUFFLE9BQU8sWUFBWSxvQkFBb0IsR0FBRyxRQUFRO0FBQUEsY0FDNUosQ0FBaUI7QUFBQSxZQUNqQixDQUFhO0FBQUEsVUFDYjtBQUNRLFVBQUFXLE9BQU0sVUFBVSxhQUFhLFNBQVUsZ0JBQWdCO0FBQ25ELGdCQUFJLFFBQVE7QUFDWixnQkFBSSxZQUFZLEtBQUs7QUFDckIsZ0JBQUlELFFBQU8sZUFBZSxJQUFJLFNBQVUsT0FBTztBQUFFLHFCQUFPLE1BQU07QUFBQSxhQUFNO0FBQ3BFLGdCQUFJLGNBQWMsZUFBZSxJQUFJLFNBQVUsT0FBTztBQUFFLHFCQUFPLE1BQU07QUFBQSxhQUFVO0FBQy9FLGdCQUFJLFlBQVksQ0FBQTtBQUNoQixtQkFBTyxLQUFLLE9BQU8sYUFBYSxTQUFVLE9BQU87QUFDN0MscUJBQU8sVUFBVSxRQUFRLEVBQUUsT0FBYyxNQUFNQSxPQUFNLE9BQU8sUUFBTyxDQUFFLEVBQUUsS0FBSyxTQUFVLE1BQU07QUFDeEYsb0JBQUksYUFBYSxDQUFBO0FBQ2pCLG9CQUFJLGFBQWEsQ0FBQTtBQUNqQiwrQkFBZSxRQUFRLFNBQVVILEtBQUksS0FBSztBQUN0QyxzQkFBSSxNQUFNQSxJQUFHLEtBQUssVUFBVUEsSUFBRztBQUMvQixzQkFBSSxNQUFNLEtBQUssR0FBRztBQUNsQixzQkFBSSxLQUFLO0FBQ0wsNkJBQVMsS0FBSyxHQUFHTyxNQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsS0FBS0EsSUFBRyxRQUFRLE1BQU07QUFDOUQsMEJBQUksVUFBVUEsSUFBRyxFQUFFO0FBQ25CLDBCQUFJLFFBQVEsUUFBUSxPQUFPO0FBQzNCLDBCQUFJLFlBQVksTUFBTSxPQUFPLFFBQVEsU0FBUztBQUMxQyw0QkFBSUwsS0FBSSxPQUFPLEdBQUcsTUFBTSxHQUFHO0FBQ3ZCLGdDQUFNLElBQUksV0FBVyxXQUFXLDJDQUEyQztBQUFBLHdCQUNuSDtBQUFBLHNCQUNBLE9BQ3FDO0FBQ0QscUNBQWEsS0FBSyxTQUFTLEtBQUs7QUFBQSxzQkFDcEU7QUFBQSxvQkFDQTtBQUM0Qiw4QkFBVSxLQUFLLEdBQUc7QUFDbEIsK0JBQVcsS0FBSyxHQUFHO0FBQ25CLCtCQUFXLEtBQUssR0FBRztBQUFBLGtCQUMvQztBQUFBLGdCQUNBLENBQXFCO0FBQ0Qsb0JBQUksYUFBYSxXQUFXO0FBQzVCLHVCQUFPLFVBQ0YsT0FBTztBQUFBLGtCQUNSO0FBQUEsa0JBQ0EsTUFBTTtBQUFBLGtCQUNOLE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsa0JBQ1IsU0FBUztBQUFBLG9CQUNMLE1BQU1DO0FBQUEsb0JBQ047QUFBQSxrQkFDNUI7QUFBQSxpQkFDcUIsRUFDSSxLQUFLLFNBQVVILEtBQUk7QUFDcEIsc0JBQUksY0FBY0EsSUFBRyxhQUFhLFdBQVdBLElBQUc7QUFDaEQsc0JBQUksZ0JBQWdCO0FBQ2hCLDJCQUFPO0FBQ1gsMkJBQVMsS0FBSyxHQUFHTyxNQUFLLE9BQU8sS0FBSyxRQUFRLEdBQUcsS0FBS0EsSUFBRyxRQUFRLE1BQU07QUFDL0Qsd0JBQUksU0FBU0EsSUFBRyxFQUFFO0FBQ2xCLHdCQUFJLGVBQWUsVUFBVSxPQUFPLE1BQU0sQ0FBQztBQUMzQyx3QkFBSSxnQkFBZ0IsTUFBTTtBQUN0QiwwQkFBSSxVQUFVLFNBQVMsTUFBTTtBQUM3Qiw2QkFBTyxTQUFTLE1BQU07QUFDdEIsK0JBQVMsWUFBWSxJQUFJO0FBQUEsb0JBQ3pEO0FBQUEsa0JBQ0E7QUFDd0Isd0JBQU0sSUFBSSxVQUFVLEdBQUcsT0FBTyxNQUFNLE1BQU0saUJBQWlCLEVBQUUsT0FBTyxhQUFhLE1BQU0sRUFBRSxPQUFPLFlBQVksb0JBQW9CLEdBQUcsUUFBUTtBQUFBLGdCQUNuSyxDQUFxQjtBQUFBLGNBQ3JCLENBQWlCO0FBQUEsWUFDakIsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxVQUFBSCxPQUFNLFVBQVUsYUFBYSxTQUFVRCxPQUFNO0FBQ3pDLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxVQUFVQSxNQUFLO0FBQ25CLG1CQUFPLEtBQUssT0FBTyxhQUFhLFNBQVUsT0FBTztBQUM3QyxxQkFBTyxNQUFNLEtBQUssT0FBTyxFQUFFLE9BQWMsTUFBTSxVQUFVLE1BQU1BLE1BQUksQ0FBRSxFQUNoRSxLQUFLLFNBQVUsS0FBSztBQUFFLHVCQUFPLHVCQUF1QixPQUFPQSxPQUFNLEdBQUc7QUFBQSxlQUFJO0FBQUEsWUFDN0YsQ0FBYSxFQUFFLEtBQUssU0FBVUgsS0FBSTtBQUNsQixrQkFBSSxjQUFjQSxJQUFHLGFBQWEsYUFBYUEsSUFBRyxZQUFZLFdBQVdBLElBQUc7QUFDNUUsa0JBQUksZ0JBQWdCO0FBQ2hCLHVCQUFPO0FBQ1gsb0JBQU0sSUFBSSxVQUFVLEdBQUcsT0FBTyxNQUFNLE1BQU0saUJBQWlCLEVBQUUsT0FBTyxhQUFhLE1BQU0sRUFBRSxPQUFPLFNBQVMsb0JBQW9CLEdBQUcsUUFBUTtBQUFBLFlBQ3hKLENBQWE7QUFBQSxVQUNiO0FBQ1EsaUJBQU9JO0FBQUEsUUFDZjtBQUVJLGlCQUFTLE9BQU8sS0FBSztBQUNqQixjQUFJLE1BQU0sQ0FBQTtBQUNWLGNBQUksS0FBSyxTQUFVLFdBQVcsWUFBWTtBQUN0QyxnQkFBSSxZQUFZO0FBQ1osa0JBQUlJLEtBQUksVUFBVSxRQUFRLE9BQU8sSUFBSSxNQUFNQSxLQUFJLENBQUM7QUFDaEQscUJBQU8sRUFBRUE7QUFDTCxxQkFBS0EsS0FBSSxDQUFDLElBQUksVUFBVUEsRUFBQztBQUM3QixrQkFBSSxTQUFTLEVBQUUsVUFBVSxNQUFNLE1BQU0sSUFBSTtBQUN6QyxxQkFBTztBQUFBLFlBQ3ZCLFdBQ3FCLE9BQVEsY0FBZSxVQUFVO0FBQ3RDLHFCQUFPLElBQUksU0FBUztBQUFBLFlBQ3BDO0FBQUEsVUFDQTtBQUNRLGFBQUcsZUFBZUM7QUFDbEIsbUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDOUMsWUFBQUEsS0FBSSxVQUFVLENBQUMsQ0FBQztBQUFBLFVBQzVCO0FBQ1EsaUJBQU87QUFDUCxtQkFBU0EsS0FBSSxXQUFXLGVBQWUsaUJBQWlCO0FBQ3BELGdCQUFJLE9BQU8sY0FBYztBQUNyQixxQkFBTyxvQkFBb0IsU0FBUztBQUN4QyxnQkFBSSxDQUFDO0FBQ0QsOEJBQWdCO0FBQ3BCLGdCQUFJLENBQUM7QUFDRCxnQ0FBa0I7QUFDdEIsZ0JBQUksVUFBVTtBQUFBLGNBQ1YsYUFBYSxDQUFBO0FBQUEsY0FDYixNQUFNO0FBQUEsY0FDTixXQUFXLFNBQVUsSUFBSTtBQUNyQixvQkFBSSxRQUFRLFlBQVksUUFBUSxFQUFFLE1BQU0sSUFBSTtBQUN4QywwQkFBUSxZQUFZLEtBQUssRUFBRTtBQUMzQiwwQkFBUSxPQUFPLGNBQWMsUUFBUSxNQUFNLEVBQUU7QUFBQSxnQkFDckU7QUFBQSxjQUNBO0FBQUEsY0FDZ0IsYUFBYSxTQUFVLElBQUk7QUFDdkIsd0JBQVEsY0FBYyxRQUFRLFlBQVksT0FBTyxTQUFVLElBQUk7QUFBRSx5QkFBTyxPQUFPO0FBQUEsaUJBQUs7QUFDcEYsd0JBQVEsT0FBTyxRQUFRLFlBQVksT0FBTyxlQUFlLGVBQWU7QUFBQSxjQUM1RjtBQUFBO0FBRVksZ0JBQUksU0FBUyxJQUFJLEdBQUcsU0FBUyxJQUFJO0FBQ2pDLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxtQkFBUyxvQkFBb0IsS0FBSztBQUM5QixpQkFBSyxHQUFHLEVBQUUsUUFBUSxTQUFVLFdBQVc7QUFDbkMsa0JBQUksT0FBTyxJQUFJLFNBQVM7QUFDeEIsa0JBQUksUUFBUSxJQUFJLEdBQUc7QUFDZixnQkFBQUEsS0FBSSxXQUFXLElBQUksU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFBQSxjQUN2RSxXQUN5QixTQUFTLFFBQVE7QUFDdEIsb0JBQUksVUFBVUEsS0FBSSxXQUFXLFFBQVEsU0FBUyxPQUFPO0FBQ2pELHNCQUFJRCxLQUFJLFVBQVUsUUFBUUUsUUFBTyxJQUFJLE1BQU1GLEVBQUM7QUFDNUMseUJBQU9BO0FBQ0gsb0JBQUFFLE1BQUtGLEVBQUMsSUFBSSxVQUFVQSxFQUFDO0FBQ3pCLDBCQUFRLFlBQVksUUFBUSxTQUFVLElBQUk7QUFDdEMsMkJBQU8sU0FBUyxZQUFZO0FBQ3hCLHlCQUFHLE1BQU0sTUFBTUUsS0FBSTtBQUFBLG9CQUNuRCxDQUE2QjtBQUFBLGtCQUM3QixDQUF5QjtBQUFBLGdCQUN6QixDQUFxQjtBQUFBLGNBQ3JCO0FBRW9CLHNCQUFNLElBQUksV0FBVyxnQkFBZ0Isc0JBQXNCO0FBQUEsWUFDL0UsQ0FBYTtBQUFBLFVBQ2I7QUFBQSxRQUNBO0FBRUksaUJBQVMscUJBQXFCLFdBQVcsYUFBYTtBQUNsRCxpQkFBTyxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQW9CLENBQUU7QUFDakQsaUJBQU87QUFBQSxRQUNmO0FBRUksaUJBQVMsdUJBQXVCWCxLQUFJO0FBQ2hDLGlCQUFPLHFCQUFxQixNQUFNLFdBQVcsU0FBU0ssT0FBTSxNQUFNLGFBQWEsT0FBTztBQUNsRixpQkFBSyxLQUFLTDtBQUNWLGlCQUFLLE1BQU07QUFDWCxpQkFBSyxPQUFPO0FBQ1osaUJBQUssU0FBUztBQUNkLGlCQUFLLE9BQU9BLElBQUcsV0FBVyxJQUFJLElBQUlBLElBQUcsV0FBVyxJQUFJLEVBQUUsT0FBTyxPQUFPLE1BQU07QUFBQSxjQUN0RSxZQUFZLENBQUMsbUJBQW1CLEdBQUc7QUFBQSxjQUNuQyxXQUFXLENBQUMsbUJBQW1CLE1BQU07QUFBQSxjQUNyQyxZQUFZLENBQUMsbUJBQW1CLEdBQUc7QUFBQSxjQUNuQyxZQUFZLENBQUMsbUJBQW1CLEdBQUc7QUFBQSxZQUNuRCxDQUFhO0FBQUEsVUFDYixDQUFTO0FBQUEsUUFDVDtBQUVJLGlCQUFTLGdCQUFnQixLQUFLLG1CQUFtQjtBQUM3QyxpQkFBTyxFQUFFLElBQUksVUFBVSxJQUFJLGFBQWEsSUFBSSxRQUN2QyxvQkFBb0IsSUFBSSxZQUFZLENBQUMsSUFBSTtBQUFBLFFBQ3REO0FBQ0ksaUJBQVMsVUFBVSxLQUFLLElBQUk7QUFDeEIsY0FBSSxTQUFTLFFBQVEsSUFBSSxRQUFRLEVBQUU7QUFBQSxRQUMzQztBQUNJLGlCQUFTLGdCQUFnQixLQUFLLFNBQVMsZUFBZTtBQUNsRCxjQUFJLE9BQU8sSUFBSTtBQUNmLGNBQUksZUFBZSxPQUFPLFdBQVk7QUFBRSxtQkFBTyxRQUFRLEtBQUksR0FBSSxRQUFPLENBQUU7QUFBQSxVQUFFLElBQUs7QUFDL0UsY0FBSSxZQUFZLGlCQUFpQixDQUFDO0FBQUEsUUFDMUM7QUFDSSxpQkFBUyxlQUFlLEtBQUssSUFBSTtBQUM3QixjQUFJLFVBQVUsUUFBUSxJQUFJLFNBQVMsRUFBRTtBQUFBLFFBQzdDO0FBQ0ksaUJBQVMsZ0JBQWdCLEtBQUssWUFBWTtBQUN0QyxjQUFJLElBQUk7QUFDSixtQkFBTyxXQUFXO0FBQ3RCLGNBQUksUUFBUSxXQUFXLGtCQUFrQixJQUFJLEtBQUs7QUFDbEQsY0FBSSxDQUFDO0FBQ0Qsa0JBQU0sSUFBSSxXQUFXLE9BQU8sYUFBYSxJQUFJLFFBQVEsc0JBQXNCLFdBQVcsT0FBTyxpQkFBaUI7QUFDbEgsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsV0FBVyxLQUFLLFdBQVcsT0FBTztBQUN2QyxjQUFJLFFBQVEsZ0JBQWdCLEtBQUssVUFBVSxNQUFNO0FBQ2pELGlCQUFPLFVBQVUsV0FBVztBQUFBLFlBQ3hCO0FBQUEsWUFDQSxRQUFRLENBQUMsSUFBSTtBQUFBLFlBQ2IsU0FBUyxJQUFJLFFBQVE7QUFBQSxZQUNyQixRQUFRLENBQUMsQ0FBQyxJQUFJO0FBQUEsWUFDZCxPQUFPO0FBQUEsY0FDSDtBQUFBLGNBQ0EsT0FBTyxJQUFJO0FBQUEsWUFDM0I7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsS0FBSyxLQUFLLElBQUksV0FBVyxXQUFXO0FBQ3pDLGNBQUksU0FBUyxJQUFJLGVBQWUsUUFBUSxJQUFJLFFBQVEsSUFBSSxjQUFjLElBQUksSUFBSTtBQUM5RSxjQUFJLENBQUMsSUFBSSxJQUFJO0FBQ1QsbUJBQU8sUUFBUSxXQUFXLEtBQUssV0FBVyxTQUFTLEdBQUcsUUFBUSxJQUFJLFdBQVcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxXQUFXO0FBQUEsVUFDdEksT0FDYTtBQUNELGdCQUFJLFFBQVEsQ0FBQTtBQUNaLGdCQUFJLFFBQVEsU0FBVSxNQUFNLFFBQVEsU0FBUztBQUN6QyxrQkFBSSxDQUFDLFVBQVUsT0FBTyxRQUFRLFNBQVMsU0FBVU4sU0FBUTtBQUFFLHVCQUFPLE9BQU8sS0FBS0EsT0FBTTtBQUFBLGNBQUUsR0FBSSxTQUFVLEtBQUs7QUFBRSx1QkFBTyxPQUFPLEtBQUssR0FBRztBQUFBLGNBQUUsQ0FBRSxHQUFHO0FBQ3BJLG9CQUFJLGFBQWEsT0FBTztBQUN4QixvQkFBSSxNQUFNLEtBQUs7QUFDZixvQkFBSSxRQUFRO0FBQ1Isd0JBQU0sS0FBSyxJQUFJLFdBQVcsVUFBVTtBQUN4QyxvQkFBSSxDQUFDLE9BQU8sT0FBTyxHQUFHLEdBQUc7QUFDckIsd0JBQU0sR0FBRyxJQUFJO0FBQ2IscUJBQUcsTUFBTSxRQUFRLE9BQU87QUFBQSxnQkFDaEQ7QUFBQSxjQUNBO0FBQUEsWUFDQTtBQUNZLG1CQUFPLFFBQVEsSUFBSTtBQUFBLGNBQ2YsSUFBSSxHQUFHLFNBQVMsT0FBTyxTQUFTO0FBQUEsY0FDaEMsUUFBUSxXQUFXLEtBQUssV0FBVyxTQUFTLEdBQUcsSUFBSSxXQUFXLE9BQU8sQ0FBQyxJQUFJLFlBQVksSUFBSSxXQUFXO0FBQUEsWUFDckgsQ0FBYTtBQUFBLFVBQ2I7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsUUFBUSxlQUFlLFFBQVEsSUFBSSxhQUFhO0FBQ3JELGNBQUksV0FBVyxjQUFjLFNBQVUsR0FBRyxHQUFHLEdBQUc7QUFBRSxtQkFBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUFBLFVBQUUsSUFBSztBQUN2RixjQUFJLFlBQVksS0FBSyxRQUFRO0FBQzdCLGlCQUFPLGNBQWMsS0FBSyxTQUFVLFFBQVE7QUFDeEMsZ0JBQUksUUFBUTtBQUNSLHFCQUFPLE9BQU8sTUFBTSxXQUFZO0FBQzVCLG9CQUFJLElBQUksV0FBWTtBQUFFLHlCQUFPLE9BQU8sU0FBUTtBQUFBLGdCQUFHO0FBQy9DLG9CQUFJLENBQUMsVUFBVSxPQUFPLFFBQVEsU0FBVSxVQUFVO0FBQUUseUJBQU8sSUFBSTtBQUFBLGdCQUFTLEdBQUksU0FBVSxLQUFLO0FBQUUseUJBQU8sS0FBSyxHQUFHO0FBQUcsc0JBQUk7QUFBQSxnQkFBSSxHQUFJLFNBQVUsR0FBRztBQUFFLHlCQUFPLEtBQUssQ0FBQztBQUFHLHNCQUFJO0FBQUEsZ0JBQUksQ0FBRTtBQUNoSyw0QkFBVSxPQUFPLE9BQU8sUUFBUSxTQUFVLFVBQVU7QUFBRSwyQkFBTyxJQUFJO0FBQUEsbUJBQVc7QUFDaEYsa0JBQUM7QUFBQSxjQUNyQixDQUFpQjtBQUFBLFlBQ2pCO0FBQUEsVUFDQSxDQUFTO0FBQUEsUUFDVDtBQUVJLFlBQUlrQixvQkFBcUIsV0FBWTtBQUNqQyxtQkFBU0Esa0JBQWlCLE1BQU07QUFDNUIsaUJBQUssV0FBVyxJQUFJO0FBQUEsVUFDaEM7QUFDUSxVQUFBQSxrQkFBaUIsVUFBVSxVQUFVLFNBQVUsT0FBTztBQUNsRCxnQkFBSVg7QUFDSixnQkFBSSxPQUFPLEtBQUssV0FBVztBQUMzQixnQkFBSSxLQUFLLFFBQVEsUUFBVztBQUN4QixrQkFBSSxPQUFPLEtBQUs7QUFDaEIsa0JBQUksUUFBUSxJQUFJLEdBQUc7QUFDZix1QkFBTyxjQUFjLGNBQWMsQ0FBQSxHQUFLLFFBQVEsS0FBSyxJQUFJLFFBQVEsQ0FBQSxHQUFLLElBQUksR0FBRyxJQUFVLEVBQUUsS0FBSTtBQUFBLGNBQ2pIO0FBQ2dCLGtCQUFJLE9BQU8sU0FBUztBQUNoQix3QkFBUSxPQUFPLEtBQUssS0FBSyxLQUFLO0FBQ2xDLGtCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzFCLG9CQUFJO0FBQ0EseUJBQU8sT0FBTyxLQUFLLElBQUk7QUFBQSxnQkFDL0MsU0FDMkJPLEtBQUk7QUFDUCx5QkFBTyxPQUFPLENBQUMsSUFBSTtBQUFBLGdCQUMzQztBQUFBLGNBQ0E7QUFDZ0Isb0JBQU0sSUFBSSxVQUFVLGdCQUFnQixPQUFPLElBQUksQ0FBQztBQUFBLFlBQ2hFO0FBQ1ksZ0JBQUksS0FBSyxXQUFXLFFBQVc7QUFDM0Isa0JBQUksZUFBZSxLQUFLO0FBQ3hCLGtCQUFJLFFBQVEsWUFBWSxHQUFHO0FBQ3ZCLHVCQUFPLFFBQVEsS0FBSyxJQUFJLE1BQU0sT0FBTyxTQUFVLE1BQU07QUFBRSx5QkFBTyxDQUFDLGFBQWEsU0FBUyxJQUFJO0FBQUEsZ0JBQUUsQ0FBRSxFQUFFLEtBQUksSUFBSyxDQUFBO0FBQUEsY0FDNUg7QUFDZ0Isa0JBQUksT0FBTyxpQkFBaUI7QUFDeEIsdUJBQU8sT0FBTyxLQUFLLElBQUk7QUFDM0Isa0JBQUksT0FBTyxpQkFBaUIsVUFBVTtBQUNsQyxvQkFBSTtBQUNBLHlCQUFPLE9BQU8sS0FBSyxJQUFJO0FBQUEsZ0JBQy9DLFNBQzJCLElBQUk7QUFDUCx5QkFBTyxPQUFPLENBQUMsSUFBSTtBQUFBLGdCQUMzQztBQUFBLGNBQ0E7QUFDZ0Isb0JBQU0sSUFBSSxVQUFVLHNCQUFzQixPQUFPLFlBQVksQ0FBQztBQUFBLFlBQzlFO0FBQ1ksZ0JBQUksbUJBQW1CUCxNQUFLLEtBQUssbUJBQW1CLFFBQVFBLFFBQU8sU0FBUyxTQUFTQSxJQUFHLENBQUM7QUFDekYsZ0JBQUksbUJBQW1CLE9BQU8sVUFBVSxZQUFZLE1BQU0sV0FBVyxlQUFlLEdBQUc7QUFDbkYscUJBQU8sS0FBSyxjQUFjLENBQUMsSUFBSSxNQUFNLFVBQVUsZ0JBQWdCLE1BQU07QUFBQSxZQUNyRjtBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxpQkFBT1c7QUFBQSxRQUNmO0FBRUksWUFBSSxhQUFlLFdBQVk7QUFDM0IsbUJBQVNDLGNBQWE7QUFBQSxVQUM5QjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxRQUFRLFNBQVUsSUFBSSxJQUFJO0FBQzNDLGdCQUFJLE1BQU0sS0FBSztBQUNmLG1CQUFPLElBQUksUUFDUCxJQUFJLE1BQU0sT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLElBQ3RELElBQUksTUFBTSxPQUFPLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRTtBQUFBLFVBQ3hEO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLFNBQVMsU0FBVSxJQUFJO0FBQ3hDLGdCQUFJLE1BQU0sS0FBSztBQUNmLG1CQUFPLElBQUksUUFDUCxJQUFJLE1BQU0sT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLElBQ3RELElBQUksTUFBTSxPQUFPLGFBQWEsSUFBSSxRQUFRO0FBQUEsVUFDMUQ7QUFDUSxVQUFBQSxZQUFXLFVBQVUsZ0JBQWdCLFNBQVUsSUFBSTtBQUMvQyxnQkFBSSxNQUFNLEtBQUs7QUFDZixnQkFBSSxZQUFZLFFBQVEsSUFBSSxXQUFXLEVBQUU7QUFBQSxVQUNyRDtBQUNRLFVBQUFBLFlBQVcsVUFBVSxXQUFXLFNBQVUsSUFBSSxXQUFXO0FBQ3JELG1CQUFPLEtBQUssS0FBSyxNQUFNLElBQUksV0FBVyxLQUFLLEtBQUssTUFBTSxJQUFJO0FBQUEsVUFDdEU7QUFDUSxVQUFBQSxZQUFXLFVBQVUsUUFBUSxTQUFVZCxRQUFPO0FBQzFDLGdCQUFJLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxTQUFTLEdBQUcsTUFBTSxPQUFPLE9BQU8sS0FBSyxJQUFJO0FBQ2pGLGdCQUFJQTtBQUNBLHFCQUFPLEtBQUtBLE1BQUs7QUFDckIsZUFBRyxPQUFPO0FBQ1YsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFjLFlBQVcsVUFBVSxNQUFNLFdBQVk7QUFDbkMsaUJBQUssS0FBSyxjQUFjO0FBQ3hCLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBQSxZQUFXLFVBQVUsT0FBTyxTQUFVLElBQUk7QUFDdEMsZ0JBQUksTUFBTSxLQUFLO0FBQ2YsbUJBQU8sS0FBSyxNQUFNLFNBQVUsT0FBTztBQUFFLHFCQUFPLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUk7QUFBQSxZQUFFLENBQUU7QUFBQSxVQUMvRjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxRQUFRLFNBQVUsSUFBSTtBQUN2QyxnQkFBSSxRQUFRO0FBQ1osbUJBQU8sS0FBSyxNQUFNLFNBQVUsT0FBTztBQUMvQixrQkFBSSxNQUFNLE1BQU07QUFDaEIsa0JBQUksWUFBWSxJQUFJLE1BQU07QUFDMUIsa0JBQUksZ0JBQWdCLEtBQUssSUFBSSxHQUFHO0FBQzVCLHVCQUFPLFVBQVUsTUFBTTtBQUFBLGtCQUNuQjtBQUFBLGtCQUNBLE9BQU87QUFBQSxvQkFDSCxPQUFPLGdCQUFnQixLQUFLLFVBQVUsTUFBTTtBQUFBLG9CQUM1QyxPQUFPLElBQUk7QUFBQSxrQkFDdkM7QUFBQSxpQkFDcUIsRUFBRSxLQUFLLFNBQVVDLFFBQU87QUFBRSx5QkFBTyxLQUFLLElBQUlBLFFBQU8sSUFBSSxLQUFLO0FBQUEsZ0JBQUUsQ0FBRTtBQUFBLGNBQ25GLE9BQ3FCO0FBQ0Qsb0JBQUksUUFBUTtBQUNaLHVCQUFPLEtBQUssS0FBSyxXQUFZO0FBQUUsb0JBQUU7QUFBTyx5QkFBTztBQUFBLG1CQUFVLE9BQU8sU0FBUyxFQUNwRSxLQUFLLFdBQVk7QUFBRSx5QkFBTztBQUFBLGlCQUFRO0FBQUEsY0FDM0Q7QUFBQSxZQUNBLENBQWEsRUFBRSxLQUFLLEVBQUU7QUFBQSxVQUN0QjtBQUNRLFVBQUFELFlBQVcsVUFBVSxTQUFTLFNBQVUsU0FBUyxJQUFJO0FBQ2pELGdCQUFJLFFBQVEsUUFBUSxNQUFNLEdBQUcsRUFBRSxRQUFPLEdBQUksV0FBVyxNQUFNLENBQUMsR0FBRyxZQUFZLE1BQU0sU0FBUztBQUMxRixxQkFBUyxPQUFPLEtBQUssR0FBRztBQUNwQixrQkFBSTtBQUNBLHVCQUFPLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN0QyxxQkFBTyxJQUFJLFFBQVE7QUFBQSxZQUNuQztBQUNZLGdCQUFJLFFBQVEsS0FBSyxLQUFLLFFBQVEsU0FBUyxJQUFJO0FBQzNDLHFCQUFTLE9BQU8sR0FBRyxHQUFHO0FBQ2xCLGtCQUFJLE9BQU8sT0FBTyxHQUFHLFNBQVMsR0FBRyxPQUFPLE9BQU8sR0FBRyxTQUFTO0FBQzNELHFCQUFPVixLQUFJLE1BQU0sSUFBSSxJQUFJO0FBQUEsWUFDekM7QUFDWSxtQkFBTyxLQUFLLFFBQVEsU0FBVSxHQUFHO0FBQzdCLHFCQUFPLEVBQUUsS0FBSyxNQUFNO0FBQUEsWUFDcEMsQ0FBYSxFQUFFLEtBQUssRUFBRTtBQUFBLFVBQ3RCO0FBQ1EsVUFBQVUsWUFBVyxVQUFVLFVBQVUsU0FBVSxJQUFJO0FBQ3pDLGdCQUFJLFFBQVE7QUFDWixtQkFBTyxLQUFLLE1BQU0sU0FBVSxPQUFPO0FBQy9CLGtCQUFJLE1BQU0sTUFBTTtBQUNoQixrQkFBSSxJQUFJLFFBQVEsVUFBVSxnQkFBZ0IsS0FBSyxJQUFJLEtBQUssSUFBSSxRQUFRLEdBQUc7QUFDbkUsb0JBQUksZ0JBQWdCLElBQUk7QUFDeEIsb0JBQUksUUFBUSxnQkFBZ0IsS0FBSyxJQUFJLE1BQU0sS0FBSyxNQUFNO0FBQ3RELHVCQUFPLElBQUksTUFBTSxLQUFLLE1BQU07QUFBQSxrQkFDeEI7QUFBQSxrQkFDQSxPQUFPLElBQUk7QUFBQSxrQkFDWCxRQUFRO0FBQUEsa0JBQ1IsT0FBTztBQUFBLG9CQUNIO0FBQUEsb0JBQ0EsT0FBTyxJQUFJO0FBQUEsa0JBQ3ZDO0FBQUEsZ0JBQ0EsQ0FBcUIsRUFBRSxLQUFLLFNBQVVaLEtBQUk7QUFDbEIsc0JBQUlQLFVBQVNPLElBQUc7QUFDaEIseUJBQU8sZ0JBQWdCUCxRQUFPLElBQUksYUFBYSxJQUFJQTtBQUFBLGdCQUMzRSxDQUFxQjtBQUFBLGNBQ3JCLE9BQ3FCO0FBQ0Qsb0JBQUksTUFBTSxDQUFBO0FBQ1YsdUJBQU8sS0FBSyxLQUFLLFNBQVUsTUFBTTtBQUFFLHlCQUFPLElBQUksS0FBSyxJQUFJO0FBQUEsZ0JBQUUsR0FBSSxPQUFPLElBQUksTUFBTSxJQUFJLEVBQUUsS0FBSyxXQUFZO0FBQUUseUJBQU87QUFBQSxpQkFBTTtBQUFBLGNBQ3hJO0FBQUEsWUFDQSxHQUFlLEVBQUU7QUFBQSxVQUNqQjtBQUNRLFVBQUFtQixZQUFXLFVBQVUsU0FBUyxTQUFVLFFBQVE7QUFDNUMsZ0JBQUksTUFBTSxLQUFLO0FBQ2YsZ0JBQUksVUFBVTtBQUNWLHFCQUFPO0FBQ1gsZ0JBQUksVUFBVTtBQUNkLGdCQUFJLGdCQUFnQixHQUFHLEdBQUc7QUFDdEIsOEJBQWdCLEtBQUssV0FBWTtBQUM3QixvQkFBSSxhQUFhO0FBQ2pCLHVCQUFPLFNBQVUsUUFBUSxTQUFTO0FBQzlCLHNCQUFJLGVBQWU7QUFDZiwyQkFBTztBQUNYLHNCQUFJLGVBQWUsR0FBRztBQUNsQixzQkFBRTtBQUNGLDJCQUFPO0FBQUEsa0JBQ25DO0FBQ3dCLDBCQUFRLFdBQVk7QUFDaEIsMkJBQU8sUUFBUSxVQUFVO0FBQ3pCLGlDQUFhO0FBQUEsa0JBQ3pDLENBQXlCO0FBQ0QseUJBQU87QUFBQSxnQkFDL0I7QUFBQSxjQUNBLENBQWlCO0FBQUEsWUFDakIsT0FDaUI7QUFDRCw4QkFBZ0IsS0FBSyxXQUFZO0FBQzdCLG9CQUFJLGFBQWE7QUFDakIsdUJBQU8sV0FBWTtBQUFFLHlCQUFRLEVBQUUsYUFBYTtBQUFBLGdCQUFHO0FBQUEsY0FDbkUsQ0FBaUI7QUFBQSxZQUNqQjtBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBQSxZQUFXLFVBQVUsUUFBUSxTQUFVLFNBQVM7QUFDNUMsaUJBQUssS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLEtBQUssT0FBTyxPQUFPO0FBQ25ELDRCQUFnQixLQUFLLE1BQU0sV0FBWTtBQUNuQyxrQkFBSSxXQUFXO0FBQ2YscUJBQU8sU0FBVSxRQUFRLFNBQVMsU0FBUztBQUN2QyxvQkFBSSxFQUFFLFlBQVk7QUFDZCwwQkFBUSxPQUFPO0FBQ25CLHVCQUFPLFlBQVk7QUFBQSxjQUN2QztBQUFBLFlBQ0EsR0FBZSxJQUFJO0FBQ1AsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxRQUFRLFNBQVUsZ0JBQWdCLG1CQUFtQjtBQUN0RSxzQkFBVSxLQUFLLE1BQU0sU0FBVSxRQUFRLFNBQVMsU0FBUztBQUNyRCxrQkFBSSxlQUFlLE9BQU8sS0FBSyxHQUFHO0FBQzlCLHdCQUFRLE9BQU87QUFDZix1QkFBTztBQUFBLGNBQzNCLE9BQ3FCO0FBQ0QsdUJBQU87QUFBQSxjQUMzQjtBQUFBLFlBQ0EsQ0FBYTtBQUNELG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBQSxZQUFXLFVBQVUsUUFBUSxTQUFVLElBQUk7QUFDdkMsbUJBQU8sS0FBSyxNQUFNLENBQUMsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUFFLHFCQUFPLEVBQUUsQ0FBQztBQUFBLFlBQUUsQ0FBRSxFQUFFLEtBQUssRUFBRTtBQUFBLFVBQy9FO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLE9BQU8sU0FBVSxJQUFJO0FBQ3RDLG1CQUFPLEtBQUssVUFBVSxNQUFNLEVBQUU7QUFBQSxVQUMxQztBQUNRLFVBQUFBLFlBQVcsVUFBVSxTQUFTLFNBQVUsZ0JBQWdCO0FBQ3BELHNCQUFVLEtBQUssTUFBTSxTQUFVLFFBQVE7QUFDbkMscUJBQU8sZUFBZSxPQUFPLEtBQUs7QUFBQSxZQUNsRCxDQUFhO0FBQ0QsMkJBQWUsS0FBSyxNQUFNLGNBQWM7QUFDeEMsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxNQUFNLFNBQVUsUUFBUTtBQUN6QyxtQkFBTyxLQUFLLE9BQU8sTUFBTTtBQUFBLFVBQ3JDO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLEtBQUssU0FBVSxXQUFXO0FBQzNDLG1CQUFPLElBQUksS0FBSyxHQUFHLFlBQVksS0FBSyxLQUFLLE9BQU8sV0FBVyxJQUFJO0FBQUEsVUFDM0U7QUFDUSxVQUFBQSxZQUFXLFVBQVUsVUFBVSxXQUFZO0FBQ3ZDLGlCQUFLLEtBQUssTUFBTyxLQUFLLEtBQUssUUFBUSxTQUFTLFNBQVM7QUFDckQsZ0JBQUksS0FBSztBQUNMLG1CQUFLLG1CQUFtQixLQUFLLEtBQUssR0FBRztBQUN6QyxtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLE9BQU8sV0FBWTtBQUNwQyxtQkFBTyxLQUFLLFFBQU87QUFBQSxVQUMvQjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxVQUFVLFNBQVUsSUFBSTtBQUN6QyxnQkFBSSxNQUFNLEtBQUs7QUFDZixnQkFBSSxXQUFXLENBQUMsSUFBSTtBQUNwQixtQkFBTyxLQUFLLEtBQUssU0FBVSxLQUFLLFFBQVE7QUFBRSxpQkFBRyxPQUFPLEtBQUssTUFBTTtBQUFBLFlBQUUsQ0FBRTtBQUFBLFVBQy9FO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLGdCQUFnQixTQUFVLElBQUk7QUFDL0MsaUJBQUssS0FBSyxTQUFTO0FBQ25CLG1CQUFPLEtBQUssUUFBUSxFQUFFO0FBQUEsVUFDbEM7QUFDUSxVQUFBQSxZQUFXLFVBQVUsaUJBQWlCLFNBQVUsSUFBSTtBQUNoRCxnQkFBSSxNQUFNLEtBQUs7QUFDZixnQkFBSSxXQUFXLENBQUMsSUFBSTtBQUNwQixtQkFBTyxLQUFLLEtBQUssU0FBVSxLQUFLLFFBQVE7QUFBRSxpQkFBRyxPQUFPLFlBQVksTUFBTTtBQUFBLFlBQUUsQ0FBRTtBQUFBLFVBQ3RGO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLE9BQU8sU0FBVSxJQUFJO0FBQ3RDLGdCQUFJLE1BQU0sS0FBSztBQUNmLGdCQUFJLFdBQVcsQ0FBQyxJQUFJO0FBQ3BCLGdCQUFJLElBQUksQ0FBQTtBQUNSLG1CQUFPLEtBQUssS0FBSyxTQUFVLE1BQU0sUUFBUTtBQUNyQyxnQkFBRSxLQUFLLE9BQU8sR0FBRztBQUFBLFlBQ2pDLENBQWEsRUFBRSxLQUFLLFdBQVk7QUFDaEIscUJBQU87QUFBQSxZQUN2QixDQUFhLEVBQUUsS0FBSyxFQUFFO0FBQUEsVUFDdEI7QUFDUSxVQUFBQSxZQUFXLFVBQVUsY0FBYyxTQUFVLElBQUk7QUFDN0MsZ0JBQUksTUFBTSxLQUFLO0FBQ2YsZ0JBQUksSUFBSSxRQUFRLFVBQVUsZ0JBQWdCLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxHQUFHO0FBQ25FLHFCQUFPLEtBQUssTUFBTSxTQUFVLE9BQU87QUFDL0Isb0JBQUksUUFBUSxnQkFBZ0IsS0FBSyxJQUFJLE1BQU0sS0FBSyxNQUFNO0FBQ3RELHVCQUFPLElBQUksTUFBTSxLQUFLLE1BQU07QUFBQSxrQkFDeEI7QUFBQSxrQkFDQSxRQUFRO0FBQUEsa0JBQ1IsT0FBTyxJQUFJO0FBQUEsa0JBQ1gsT0FBTztBQUFBLG9CQUNIO0FBQUEsb0JBQ0EsT0FBTyxJQUFJO0FBQUEsa0JBQ3ZDO0FBQUEsZ0JBQ0EsQ0FBcUI7QUFBQSxjQUNyQixDQUFpQixFQUFFLEtBQUssU0FBVVosS0FBSTtBQUNsQixvQkFBSVAsVUFBU08sSUFBRztBQUNoQix1QkFBT1A7QUFBQSxjQUMzQixDQUFpQixFQUFFLEtBQUssRUFBRTtBQUFBLFlBQzFCO0FBQ1ksZ0JBQUksV0FBVyxDQUFDLElBQUk7QUFDcEIsZ0JBQUksSUFBSSxDQUFBO0FBQ1IsbUJBQU8sS0FBSyxLQUFLLFNBQVUsTUFBTSxRQUFRO0FBQ3JDLGdCQUFFLEtBQUssT0FBTyxVQUFVO0FBQUEsWUFDeEMsQ0FBYSxFQUFFLEtBQUssV0FBWTtBQUNoQixxQkFBTztBQUFBLFlBQ3ZCLENBQWEsRUFBRSxLQUFLLEVBQUU7QUFBQSxVQUN0QjtBQUNRLFVBQUFtQixZQUFXLFVBQVUsYUFBYSxTQUFVLElBQUk7QUFDNUMsaUJBQUssS0FBSyxTQUFTO0FBQ25CLG1CQUFPLEtBQUssS0FBSyxFQUFFO0FBQUEsVUFDL0I7QUFDUSxVQUFBQSxZQUFXLFVBQVUsV0FBVyxTQUFVLElBQUk7QUFDMUMsbUJBQU8sS0FBSyxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQVUsR0FBRztBQUFFLHFCQUFPLEVBQUUsQ0FBQztBQUFBLFlBQUUsQ0FBRSxFQUFFLEtBQUssRUFBRTtBQUFBLFVBQzVFO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLFVBQVUsU0FBVSxJQUFJO0FBQ3pDLG1CQUFPLEtBQUssVUFBVSxTQUFTLEVBQUU7QUFBQSxVQUM3QztBQUNRLFVBQUFBLFlBQVcsVUFBVSxXQUFXLFdBQVk7QUFDeEMsZ0JBQUksTUFBTSxLQUFLLE1BQU0sTUFBTSxJQUFJLFNBQVMsSUFBSSxNQUFNLE9BQU8sVUFBVSxJQUFJLEtBQUs7QUFDNUUsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUNiLHFCQUFPO0FBQ1gsZ0JBQUksTUFBTSxDQUFBO0FBQ1Ysc0JBQVUsS0FBSyxNQUFNLFNBQVUsUUFBUTtBQUNuQyxrQkFBSSxTQUFTLE9BQU8sV0FBVyxTQUFRO0FBQ3ZDLGtCQUFJLFFBQVEsT0FBTyxLQUFLLE1BQU07QUFDOUIsa0JBQUksTUFBTSxJQUFJO0FBQ2QscUJBQU8sQ0FBQztBQUFBLFlBQ3hCLENBQWE7QUFDRCxtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLFNBQVMsU0FBVSxTQUFTO0FBQzdDLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxNQUFNLEtBQUs7QUFDZixtQkFBTyxLQUFLLE9BQU8sU0FBVSxPQUFPO0FBQ2hDLGtCQUFJO0FBQ0osa0JBQUksT0FBTyxZQUFZLFlBQVk7QUFDL0IsMkJBQVc7QUFBQSxjQUMvQixPQUNxQjtBQUNELG9CQUFJLFdBQVcsS0FBSyxPQUFPO0FBQzNCLG9CQUFJLFVBQVUsU0FBUztBQUN2QiwyQkFBVyxTQUFVLE1BQU07QUFDdkIsc0JBQUksbUJBQW1CO0FBQ3ZCLDJCQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRSxHQUFHO0FBQzlCLHdCQUFJLFVBQVUsU0FBUyxDQUFDO0FBQ3hCLHdCQUFJLE1BQU0sUUFBUSxPQUFPO0FBQ3pCLHdCQUFJLFVBQVUsYUFBYSxNQUFNLE9BQU87QUFDeEMsd0JBQUksZUFBZUQsbUJBQWtCO0FBQ2pDLG1DQUFhLE1BQU0sU0FBUyxJQUFJLFFBQVEsT0FBTyxDQUFDO0FBQ2hELHlDQUFtQjtBQUFBLG9CQUNuRCxXQUNxQyxZQUFZLEtBQUs7QUFDdEIsbUNBQWEsTUFBTSxTQUFTLEdBQUc7QUFDL0IseUNBQW1CO0FBQUEsb0JBQ25EO0FBQUEsa0JBQ0E7QUFDd0IseUJBQU87QUFBQSxnQkFDL0I7QUFBQSxjQUNBO0FBQ2dCLGtCQUFJLFlBQVksSUFBSSxNQUFNO0FBQzFCLGtCQUFJWCxNQUFLLFVBQVUsT0FBTyxZQUFZLFdBQVdBLElBQUcsVUFBVSxhQUFhQSxJQUFHO0FBQzlFLGtCQUFJLFFBQVE7QUFDWixrQkFBSSxrQkFBa0IsTUFBTSxHQUFHLFNBQVM7QUFDeEMsa0JBQUksaUJBQWlCO0FBQ2pCLG9CQUFJLE9BQU8sbUJBQW1CLFVBQVU7QUFDcEMsMEJBQVEsZ0JBQWdCLFVBQVUsSUFBSSxLQUFLLGdCQUFnQixHQUFHLEtBQUs7QUFBQSxnQkFDM0YsT0FDeUI7QUFDRCwwQkFBUTtBQUFBLGdCQUNoQztBQUFBLGNBQ0E7QUFDZ0Isa0JBQUksZ0JBQWdCLENBQUE7QUFDcEIsa0JBQUksZUFBZTtBQUNuQixrQkFBSSxhQUFhLENBQUE7QUFDakIsa0JBQUksb0JBQW9CLFNBQVUsZUFBZSxLQUFLO0FBQ2xELG9CQUFJLFdBQVcsSUFBSSxVQUFVLGNBQWMsSUFBSTtBQUMvQyxnQ0FBZ0IsZ0JBQWdCO0FBQ2hDLHlCQUFTLEtBQUssR0FBR0EsTUFBSyxLQUFLLFFBQVEsR0FBRyxLQUFLQSxJQUFHLFFBQVEsTUFBTTtBQUN4RCxzQkFBSSxNQUFNQSxJQUFHLEVBQUU7QUFDZixnQ0FBYyxLQUFLLFNBQVMsR0FBRyxDQUFDO0FBQUEsZ0JBQ3hEO0FBQUEsY0FDQTtBQUNnQixrQkFBSSx3QkFBd0IsWUFBWTtBQUN4QyxxQkFBTyxNQUFNLE1BQUssRUFBRyxZQUFXLEVBQUcsS0FBSyxTQUFVRyxPQUFNO0FBQ3BELG9CQUFJLFdBQVcsZ0JBQWdCLEdBQUcsS0FDOUIsSUFBSSxVQUFVLGFBQ2IsT0FBTyxZQUFZLGNBQWMsMEJBQTBCO0FBQUEsa0JBQzVELE9BQU8sSUFBSTtBQUFBLGtCQUNYLE9BQU8sSUFBSTtBQUFBO0FBRWYsb0JBQUksWUFBWSxTQUFVLFFBQVE7QUFDOUIsc0JBQUksUUFBUSxLQUFLLElBQUksT0FBT0EsTUFBSyxTQUFTLE1BQU07QUFDaEQsc0JBQUksY0FBY0EsTUFBSyxNQUFNLFFBQVEsU0FBUyxLQUFLO0FBQ25ELDBCQUFRLHdCQUF3QixRQUFRLFFBQVEsQ0FBQSxDQUFFLElBQUksVUFBVSxRQUFRO0FBQUEsb0JBQ3BFO0FBQUEsb0JBQ0EsTUFBTTtBQUFBLG9CQUNOLE9BQU87QUFBQSxrQkFDbkMsQ0FBeUIsR0FBRyxLQUFLLFNBQVUsUUFBUTtBQUN2Qix3QkFBSSxZQUFZLENBQUE7QUFDaEIsd0JBQUksWUFBWSxDQUFBO0FBQ2hCLHdCQUFJLFVBQVUsV0FBVyxDQUFBLElBQUs7QUFDOUIsd0JBQUksYUFBYSx3QkFBd0IsY0FBYyxDQUFBO0FBQ3ZELHdCQUFJLENBQUM7QUFDRCwrQkFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsR0FBRztBQUM1Qiw0QkFBSSxZQUFZLE9BQU8sQ0FBQztBQUN4Qiw0QkFBSSxRQUFRO0FBQUEsMEJBQ1IsT0FBTyxVQUFVLFNBQVM7QUFBQSwwQkFDMUIsU0FBU0EsTUFBSyxTQUFTLENBQUM7QUFBQTtBQUU1Qiw0QkFBSSxTQUFTLEtBQUssT0FBTyxNQUFNLE9BQU8sS0FBSyxNQUFNLE9BQU87QUFDcEQsOEJBQUksTUFBTSxTQUFTLE1BQU07QUFDckIsdUNBQVcsS0FBS0EsTUFBSyxTQUFTLENBQUMsQ0FBQztBQUFBLDBCQUM1RSxXQUNpRCxDQUFDLFlBQVlELEtBQUksV0FBVyxTQUFTLEdBQUcsV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLEdBQUc7QUFDN0UsdUNBQVcsS0FBS0MsTUFBSyxTQUFTLENBQUMsQ0FBQztBQUNoQyxzQ0FBVSxLQUFLLE1BQU0sS0FBSztBQUFBLDBCQUN0RSxPQUM2QztBQUNELHNDQUFVLEtBQUssTUFBTSxLQUFLO0FBQzFCLGdDQUFJO0FBQ0Esc0NBQVEsS0FBS0EsTUFBSyxTQUFTLENBQUMsQ0FBQztBQUFBLDBCQUM3RTtBQUFBLHdCQUNBO0FBQUEsc0JBQ0E7QUFDNEIsMkJBQU8sUUFBUSxRQUFRLFVBQVUsU0FBUyxLQUN0QyxVQUFVLE9BQU8sRUFBRSxPQUFjLE1BQU0sT0FBTyxRQUFRLFVBQVMsQ0FBRSxFQUM1RCxLQUFLLFNBQVUsS0FBSztBQUNyQiwrQkFBUyxPQUFPLElBQUksVUFBVTtBQUMxQixtQ0FBVyxPQUFPLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFBQSxzQkFDMUU7QUFDb0Msd0NBQWtCLFVBQVUsUUFBUSxHQUFHO0FBQUEsb0JBQzNFLENBQWlDLENBQUMsRUFBRSxLQUFLLFdBQVk7QUFBRSw4QkFBUSxVQUFVLFNBQVMsS0FBTSxZQUFZLE9BQU8sWUFBWSxhQUN2RixVQUFVLE9BQU87QUFBQSx3QkFDYjtBQUFBLHdCQUNBLE1BQU07QUFBQSx3QkFDTixNQUFNO0FBQUEsd0JBQ04sUUFBUTtBQUFBLHdCQUNSO0FBQUEsd0JBQ0EsWUFBWSxPQUFPLFlBQVksY0FDeEI7QUFBQSx3QkFDUCxtQkFBbUIsU0FBUztBQUFBLHNCQUNoRSxDQUFpQyxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQUUsK0JBQU8sa0JBQWtCLFVBQVUsUUFBUSxHQUFHO0FBQUEsc0JBQUUsQ0FBRTtBQUFBLHFCQUFJLEVBQUUsS0FBSyxXQUFZO0FBQUUsOEJBQVEsV0FBVyxTQUFTLEtBQU0sWUFBWSwwQkFDbEosVUFBVSxPQUFPO0FBQUEsd0JBQ2I7QUFBQSx3QkFDQSxNQUFNO0FBQUEsd0JBQ04sTUFBTTtBQUFBLHdCQUNOO0FBQUEsd0JBQ0EsbUJBQW1CLFNBQVM7QUFBQSx1QkFDL0IsRUFBRSxLQUFLLFNBQVUsS0FBSztBQUFFLCtCQUFPLHVCQUF1QixJQUFJLE9BQU8sWUFBWSxHQUFHO0FBQUEsc0JBQUUsQ0FBRSxFQUNoRixLQUFLLFNBQVUsS0FBSztBQUFFLCtCQUFPLGtCQUFrQixXQUFXLFFBQVEsR0FBRztBQUFBLHNCQUFFLENBQUU7QUFBQSxxQkFBSSxFQUFFLEtBQUssV0FBWTtBQUNyRyw2QkFBT0EsTUFBSyxTQUFTLFNBQVMsU0FBUyxVQUFVLFNBQVMsS0FBSztBQUFBLG9CQUMvRixDQUE2QjtBQUFBLGtCQUM3QixDQUF5QjtBQUFBLGdCQUN6QjtBQUNvQix1QkFBTyxVQUFVLENBQUMsRUFBRSxLQUFLLFdBQVk7QUFDakMsc0JBQUksY0FBYyxTQUFTO0FBQ3ZCLDBCQUFNLElBQUksWUFBWSx1Q0FBdUMsZUFBZSxjQUFjLFVBQVU7QUFDeEcseUJBQU9BLE1BQUs7QUFBQSxnQkFDcEMsQ0FBcUI7QUFBQSxjQUNyQixDQUFpQjtBQUFBLFlBQ2pCLENBQWE7QUFBQSxVQUNiO0FBQ1EsVUFBQVMsWUFBVyxVQUFVLFNBQVMsV0FBWTtBQUN0QyxnQkFBSSxNQUFNLEtBQUssTUFBTSxRQUFRLElBQUk7QUFDakMsZ0JBQUksZ0JBQWdCLEdBQUcsS0FDbkIsQ0FBQyxJQUFJLE1BQU0sT0FBTyxXQUNqQixJQUFJLGFBQWEsTUFBTSxTQUFTLElBQ3BDO0FBQ0cscUJBQU8sS0FBSyxPQUFPLFNBQVUsT0FBTztBQUNoQyxvQkFBSSxhQUFhLElBQUksTUFBTSxLQUFLLE9BQU87QUFDdkMsb0JBQUksWUFBWTtBQUNoQix1QkFBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUUsT0FBYyxPQUFPLEVBQUUsT0FBTyxZQUFZLE9BQU8sVUFBUyxFQUFFLENBQUUsRUFBRSxLQUFLLFNBQVUsT0FBTztBQUNoSCx5QkFBTyxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUUsT0FBYyxNQUFNLGVBQWUsT0FBTyxVQUFTLENBQUUsRUFDL0UsS0FBSyxTQUFVWixLQUFJO0FBQ3BCLHdCQUFJLFdBQVdBLElBQUcsVUFBVSxjQUFjQSxJQUFHO0FBQzdDLHdCQUFJO0FBQ0EsNEJBQU0sSUFBSSxZQUFZLGdDQUFnQyxPQUFPLEtBQUssUUFBUSxFQUFFLElBQUksU0FBVSxLQUFLO0FBQUUsK0JBQU8sU0FBUyxHQUFHO0FBQUEsc0JBQUUsQ0FBRSxHQUFHLFFBQVEsV0FBVztBQUNsSiwyQkFBTyxRQUFRO0FBQUEsa0JBQzNDLENBQXlCO0FBQUEsZ0JBQ3pCLENBQXFCO0FBQUEsY0FDckIsQ0FBaUI7QUFBQSxZQUNqQjtBQUNZLG1CQUFPLEtBQUssT0FBTyxjQUFjO0FBQUEsVUFDN0M7QUFDUSxpQkFBT1k7QUFBQSxRQUNmO0FBQ0ksWUFBSSxpQkFBaUIsU0FBVSxPQUFPLEtBQUs7QUFBRSxpQkFBTyxJQUFJLFFBQVE7QUFBQSxRQUFLO0FBRXJFLGlCQUFTLDRCQUE0QmIsS0FBSTtBQUNyQyxpQkFBTyxxQkFBcUIsV0FBVyxXQUFXLFNBQVNhLFlBQVcsYUFBYSxtQkFBbUI7QUFDbEcsaUJBQUssS0FBS2I7QUFDVixnQkFBSSxXQUFXLFVBQVUsUUFBUTtBQUNqQyxnQkFBSTtBQUNBLGtCQUFJO0FBQ0EsMkJBQVcsa0JBQWlCO0FBQUEsY0FDaEQsU0FDdUIsSUFBSTtBQUNQLHdCQUFRO0FBQUEsY0FDNUI7QUFDWSxnQkFBSSxXQUFXLFlBQVk7QUFDM0IsZ0JBQUksUUFBUSxTQUFTO0FBQ3JCLGdCQUFJLGNBQWMsTUFBTSxLQUFLLFFBQVE7QUFDckMsaUJBQUssT0FBTztBQUFBLGNBQ1I7QUFBQSxjQUNBLE9BQU8sU0FBUztBQUFBLGNBQ2hCLFdBQVksQ0FBQyxTQUFTLFNBQVUsTUFBTSxPQUFPLFFBQVEsV0FBVyxTQUFTLFVBQVUsTUFBTSxPQUFPLFFBQVE7QUFBQSxjQUN4RyxPQUFPO0FBQUEsY0FDUCxVQUFVO0FBQUEsY0FDVixLQUFLO0FBQUEsY0FDTCxRQUFRO0FBQUEsY0FDUixXQUFXO0FBQUEsY0FDWCxRQUFRO0FBQUEsY0FDUixjQUFjO0FBQUEsY0FDZCxXQUFXO0FBQUEsY0FDWCxTQUFTO0FBQUEsY0FDVCxRQUFRO0FBQUEsY0FDUixPQUFPO0FBQUEsY0FDUDtBQUFBLGNBQ0EsSUFBSSxTQUFTO0FBQUEsY0FDYixhQUFhLGdCQUFnQixTQUFTLGNBQWM7QUFBQTtVQUVwRSxDQUFTO0FBQUEsUUFDVDtBQUVJLGlCQUFTLGNBQWMsR0FBRyxHQUFHO0FBQ3pCLGlCQUFPLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQUEsUUFDMUM7QUFDSSxpQkFBUyxxQkFBcUIsR0FBRyxHQUFHO0FBQ2hDLGlCQUFPLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJO0FBQUEsUUFDMUM7QUFFSSxpQkFBUyxLQUFLLHlCQUF5QixLQUFLLEdBQUc7QUFDM0MsY0FBSSxhQUFhLG1DQUFtQyxjQUNoRCxJQUFJLHdCQUF3QixXQUFXLHVCQUF1QixJQUM5RDtBQUNKLHFCQUFXLEtBQUssUUFBUSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxVQUFVLEdBQUc7QUFDMUQsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsZ0JBQWdCLGFBQWE7QUFDbEMsaUJBQU8sSUFBSSxZQUFZLFdBQVcsYUFBYSxXQUFZO0FBQUUsbUJBQU8sV0FBVyxFQUFFO0FBQUEsVUFBRSxDQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUEsUUFDdEc7QUFDSSxpQkFBUyxhQUFhLEtBQUs7QUFDdkIsaUJBQU8sUUFBUSxTQUNYLFNBQVUsR0FBRztBQUFFLG1CQUFPLEVBQUUsWUFBVztBQUFBLFVBQUcsSUFDdEMsU0FBVSxHQUFHO0FBQUUsbUJBQU8sRUFBRSxZQUFXO0FBQUEsVUFBRztBQUFBLFFBQ2xEO0FBQ0ksaUJBQVMsYUFBYSxLQUFLO0FBQ3ZCLGlCQUFPLFFBQVEsU0FDWCxTQUFVLEdBQUc7QUFBRSxtQkFBTyxFQUFFLFlBQVc7QUFBQSxVQUFHLElBQ3RDLFNBQVUsR0FBRztBQUFFLG1CQUFPLEVBQUUsWUFBVztBQUFBLFVBQUc7QUFBQSxRQUNsRDtBQUNJLGlCQUFTLFdBQVcsS0FBSyxVQUFVLGFBQWEsYUFBYUcsTUFBSyxLQUFLO0FBQ25FLGNBQUksU0FBUyxLQUFLLElBQUksSUFBSSxRQUFRLFlBQVksTUFBTTtBQUNwRCxjQUFJLE1BQU07QUFDVixtQkFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsR0FBRztBQUM3QixnQkFBSSxhQUFhLFNBQVMsQ0FBQztBQUMzQixnQkFBSSxlQUFlLFlBQVksQ0FBQyxHQUFHO0FBQy9CLGtCQUFJQSxLQUFJLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLElBQUk7QUFDOUIsdUJBQU8sSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLFlBQVksT0FBTyxJQUFJLENBQUM7QUFDdkUsa0JBQUlBLEtBQUksSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsSUFBSTtBQUM5Qix1QkFBTyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksWUFBWSxPQUFPLElBQUksQ0FBQztBQUN2RSxrQkFBSSxPQUFPO0FBQ1AsdUJBQU8sSUFBSSxPQUFPLEdBQUcsR0FBRyxJQUFJLFNBQVMsR0FBRyxJQUFJLFlBQVksT0FBTyxNQUFNLENBQUM7QUFDMUUscUJBQU87QUFBQSxZQUN2QjtBQUNZLGdCQUFJQSxLQUFJLElBQUksQ0FBQyxHQUFHLFVBQVUsSUFBSTtBQUMxQixvQkFBTTtBQUFBLFVBQ3RCO0FBQ1EsY0FBSSxTQUFTLFlBQVksVUFBVSxRQUFRO0FBQ3ZDLG1CQUFPLE1BQU0sWUFBWSxPQUFPLElBQUksTUFBTTtBQUM5QyxjQUFJLFNBQVMsSUFBSSxVQUFVLFFBQVE7QUFDL0IsbUJBQU8sSUFBSSxPQUFPLEdBQUcsWUFBWSxNQUFNO0FBQzNDLGlCQUFRLE1BQU0sSUFBSSxPQUFPLElBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLE9BQU8sTUFBTSxDQUFDO0FBQUEsUUFDbkc7QUFDSSxpQkFBUyx1QkFBdUIsYUFBYSxPQUFPLFNBQVMsUUFBUTtBQUNqRSxjQUFJLE9BQU8sT0FBTyxTQUFTLGNBQWMsY0FBYyxXQUFXLGVBQWUsYUFBYSxRQUFRO0FBQ3RHLGNBQUksQ0FBQyxRQUFRLE1BQU0sU0FBVSxHQUFHO0FBQUUsbUJBQU8sT0FBTyxNQUFNO0FBQUEsVUFBUyxDQUFFLEdBQUc7QUFDaEUsbUJBQU8sS0FBSyxhQUFhLGVBQWU7QUFBQSxVQUNwRDtBQUNRLG1CQUFTLGNBQWMsS0FBSztBQUN4QixvQkFBUSxhQUFhLEdBQUc7QUFDeEIsb0JBQVEsYUFBYSxHQUFHO0FBQ3hCLHNCQUFXLFFBQVEsU0FBUyxnQkFBZ0I7QUFDNUMsZ0JBQUksZUFBZSxRQUFRLElBQUksU0FBVSxRQUFRO0FBQzdDLHFCQUFPLEVBQUUsT0FBTyxNQUFNLE1BQU0sR0FBRyxPQUFPLE1BQU0sTUFBTSxFQUFDO0FBQUEsWUFDbkUsQ0FBYSxFQUFFLEtBQUssU0FBVSxHQUFHLEdBQUc7QUFDcEIscUJBQU8sUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLO0FBQUEsWUFDL0MsQ0FBYTtBQUNELDJCQUFlLGFBQWEsSUFBSSxTQUFVLElBQUk7QUFBRSxxQkFBTyxHQUFHO0FBQUEsYUFBUTtBQUNsRSwyQkFBZSxhQUFhLElBQUksU0FBVSxJQUFJO0FBQUUscUJBQU8sR0FBRztBQUFBLGFBQVE7QUFDbEUsd0JBQVk7QUFDWiw0QkFBaUIsUUFBUSxTQUFTLEtBQUs7QUFBQSxVQUNuRDtBQUNRLHdCQUFjLE1BQU07QUFDcEIsY0FBSSxJQUFJLElBQUksWUFBWSxXQUFXLGFBQWEsV0FBWTtBQUFFLG1CQUFPLFlBQVksYUFBYSxDQUFDLEdBQUcsYUFBYSxhQUFhLENBQUMsSUFBSSxNQUFNO0FBQUEsV0FBSTtBQUMzSSxZQUFFLHFCQUFxQixTQUFVWSxZQUFXO0FBQ3hDLDBCQUFjQSxVQUFTO0FBQUEsVUFDbkM7QUFDUSxjQUFJLHNCQUFzQjtBQUMxQixZQUFFLGNBQWMsU0FBVSxRQUFRLFNBQVMsU0FBUztBQUNoRCxnQkFBSSxNQUFNLE9BQU87QUFDakIsZ0JBQUksT0FBTyxRQUFRO0FBQ2YscUJBQU87QUFDWCxnQkFBSSxXQUFXLE1BQU0sR0FBRztBQUN4QixnQkFBSSxNQUFNLFVBQVUsY0FBYyxtQkFBbUIsR0FBRztBQUNwRCxxQkFBTztBQUFBLFlBQ3ZCLE9BQ2lCO0FBQ0Qsa0JBQUksdUJBQXVCO0FBQzNCLHVCQUFTLElBQUkscUJBQXFCLElBQUksWUFBWSxFQUFFLEdBQUc7QUFDbkQsb0JBQUksU0FBUyxXQUFXLEtBQUssVUFBVSxhQUFhLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxTQUFTLFNBQVM7QUFDM0Ysb0JBQUksV0FBVyxRQUFRLHlCQUF5QjtBQUM1Qyx3Q0FBc0IsSUFBSTtBQUFBLHlCQUNyQix5QkFBeUIsUUFBUSxRQUFRLHNCQUFzQixNQUFNLElBQUksR0FBRztBQUNqRix5Q0FBdUI7QUFBQSxnQkFDL0M7QUFBQSxjQUNBO0FBQ2dCLGtCQUFJLHlCQUF5QixNQUFNO0FBQy9CLHdCQUFRLFdBQVk7QUFBRSx5QkFBTyxTQUFTLHVCQUF1QixhQUFhO0FBQUEsaUJBQUk7QUFBQSxjQUNsRyxPQUNxQjtBQUNELHdCQUFRLE9BQU87QUFBQSxjQUNuQztBQUNnQixxQkFBTztBQUFBLFlBQ3ZCO0FBQUEsVUFDQSxDQUFTO0FBQ0QsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXO0FBQ3JELGlCQUFPO0FBQUEsWUFDSCxNQUFNO0FBQUEsWUFDTjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBO1FBRVo7QUFDSSxpQkFBUyxXQUFXLE9BQU87QUFDdkIsaUJBQU87QUFBQSxZQUNILE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQTtRQUVuQjtBQUVJLFlBQUksY0FBZ0IsV0FBWTtBQUM1QixtQkFBU0MsZUFBYztBQUFBLFVBQy9CO0FBQ1EsaUJBQU8sZUFBZUEsYUFBWSxXQUFXLGNBQWM7QUFBQSxZQUN2RCxLQUFLLFdBQVk7QUFDYixxQkFBTyxLQUFLLEtBQUssTUFBTSxHQUFHO0FBQUEsWUFDMUM7QUFBQSxZQUNZLFlBQVk7QUFBQSxZQUNaLGNBQWM7QUFBQSxVQUMxQixDQUFTO0FBQ0QsVUFBQUEsYUFBWSxVQUFVLFVBQVUsU0FBVSxPQUFPLE9BQU8sY0FBYyxjQUFjO0FBQ2hGLDJCQUFlLGlCQUFpQjtBQUNoQywyQkFBZSxpQkFBaUI7QUFDaEMsZ0JBQUk7QUFDQSxrQkFBSyxLQUFLLEtBQUssT0FBTyxLQUFLLElBQUksS0FDMUIsS0FBSyxLQUFLLE9BQU8sS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLGlCQUFpQixFQUFFLGdCQUFnQjtBQUN0Rix1QkFBTyxnQkFBZ0IsSUFBSTtBQUMvQixxQkFBTyxJQUFJLEtBQUssV0FBVyxNQUFNLFdBQVk7QUFBRSx1QkFBTyxZQUFZLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZO0FBQUEsY0FBRSxDQUFFO0FBQUEsWUFDaEksU0FDbUIsR0FBRztBQUNOLHFCQUFPLEtBQUssTUFBTSxvQkFBb0I7QUFBQSxZQUN0RDtBQUFBLFVBQ0E7QUFDUSxVQUFBQSxhQUFZLFVBQVUsU0FBUyxTQUFVLE9BQU87QUFDNUMsZ0JBQUksU0FBUztBQUNULHFCQUFPLEtBQUssTUFBTSxvQkFBb0I7QUFDMUMsbUJBQU8sSUFBSSxLQUFLLFdBQVcsTUFBTSxXQUFZO0FBQUUscUJBQU8sV0FBVyxLQUFLO0FBQUEsYUFBSTtBQUFBLFVBQ3RGO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLFFBQVEsU0FBVSxPQUFPO0FBQzNDLGdCQUFJLFNBQVM7QUFDVCxxQkFBTyxLQUFLLE1BQU0sb0JBQW9CO0FBQzFDLG1CQUFPLElBQUksS0FBSyxXQUFXLE1BQU0sV0FBWTtBQUFFLHFCQUFPLFlBQVksT0FBTyxRQUFXLElBQUk7QUFBQSxZQUFFLENBQUU7QUFBQSxVQUN4RztBQUNRLFVBQUFBLGFBQVksVUFBVSxlQUFlLFNBQVUsT0FBTztBQUNsRCxnQkFBSSxTQUFTO0FBQ1QscUJBQU8sS0FBSyxNQUFNLG9CQUFvQjtBQUMxQyxtQkFBTyxJQUFJLEtBQUssV0FBVyxNQUFNLFdBQVk7QUFBRSxxQkFBTyxZQUFZLE9BQU8sUUFBVyxLQUFLO0FBQUEsWUFBRSxDQUFFO0FBQUEsVUFDekc7QUFDUSxVQUFBQSxhQUFZLFVBQVUsUUFBUSxTQUFVLE9BQU87QUFDM0MsZ0JBQUksU0FBUztBQUNULHFCQUFPLEtBQUssTUFBTSxvQkFBb0I7QUFDMUMsbUJBQU8sSUFBSSxLQUFLLFdBQVcsTUFBTSxXQUFZO0FBQUUscUJBQU8sWUFBWSxRQUFXLE9BQU8sT0FBTyxJQUFJO0FBQUEsWUFBRSxDQUFFO0FBQUEsVUFDL0c7QUFDUSxVQUFBQSxhQUFZLFVBQVUsZUFBZSxTQUFVLE9BQU87QUFDbEQsZ0JBQUksU0FBUztBQUNULHFCQUFPLEtBQUssTUFBTSxvQkFBb0I7QUFDMUMsbUJBQU8sSUFBSSxLQUFLLFdBQVcsTUFBTSxXQUFZO0FBQUUscUJBQU8sWUFBWSxRQUFXLEtBQUs7QUFBQSxhQUFJO0FBQUEsVUFDbEc7QUFDUSxVQUFBQSxhQUFZLFVBQVUsYUFBYSxTQUFVLEtBQUs7QUFDOUMsZ0JBQUksT0FBTyxRQUFRO0FBQ2YscUJBQU8sS0FBSyxNQUFNLGVBQWU7QUFDckMsbUJBQU8sS0FBSyxRQUFRLEtBQUssTUFBTSxXQUFXLE1BQU0sSUFBSTtBQUFBLFVBQ2hFO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLHVCQUF1QixTQUFVLEtBQUs7QUFDeEQsZ0JBQUksUUFBUTtBQUNSLHFCQUFPLEtBQUssV0FBVyxHQUFHO0FBQzlCLG1CQUFPLHVCQUF1QixNQUFNLFNBQVUsR0FBRyxHQUFHO0FBQUUscUJBQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFBQSxZQUFFLEdBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUztBQUFBLFVBQ25IO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLG1CQUFtQixTQUFVLEtBQUs7QUFDcEQsbUJBQU8sdUJBQXVCLE1BQU0sU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBTyxNQUFNLEVBQUUsQ0FBQztBQUFBLFlBQUUsR0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsVUFDakc7QUFDUSxVQUFBQSxhQUFZLFVBQVUsa0JBQWtCLFdBQVk7QUFDaEQsZ0JBQUksTUFBTSxXQUFXLE1BQU0sZUFBZSxTQUFTO0FBQ25ELGdCQUFJLElBQUksV0FBVztBQUNmLHFCQUFPLGdCQUFnQixJQUFJO0FBQy9CLG1CQUFPLHVCQUF1QixNQUFNLFNBQVUsR0FBRyxHQUFHO0FBQUUscUJBQU8sRUFBRSxRQUFRLENBQUMsTUFBTTtBQUFBLFlBQUcsR0FBSSxLQUFLLEVBQUU7QUFBQSxVQUN4RztBQUNRLFVBQUFBLGFBQVksVUFBVSw0QkFBNEIsV0FBWTtBQUMxRCxnQkFBSSxNQUFNLFdBQVcsTUFBTSxlQUFlLFNBQVM7QUFDbkQsZ0JBQUksSUFBSSxXQUFXO0FBQ2YscUJBQU8sZ0JBQWdCLElBQUk7QUFDL0IsbUJBQU8sdUJBQXVCLE1BQU0sU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBTyxFQUFFLEtBQUssU0FBVSxHQUFHO0FBQUUsdUJBQU8sRUFBRSxRQUFRLENBQUMsTUFBTTtBQUFBLGNBQUUsQ0FBRTtBQUFBLFlBQUUsR0FBSSxLQUFLLFNBQVM7QUFBQSxVQUMvSTtBQUNRLFVBQUFBLGFBQVksVUFBVSxRQUFRLFdBQVk7QUFDdEMsZ0JBQUksUUFBUTtBQUNaLGdCQUFJLE1BQU0sV0FBVyxNQUFNLGVBQWUsU0FBUztBQUNuRCxnQkFBSSxVQUFVLEtBQUs7QUFDbkIsZ0JBQUk7QUFDQSxrQkFBSSxLQUFLLE9BQU87QUFBQSxZQUNoQyxTQUNtQixHQUFHO0FBQ04scUJBQU8sS0FBSyxNQUFNLG9CQUFvQjtBQUFBLFlBQ3REO0FBQ1ksZ0JBQUksSUFBSSxXQUFXO0FBQ2YscUJBQU8sZ0JBQWdCLElBQUk7QUFDL0IsZ0JBQUksSUFBSSxJQUFJLEtBQUssV0FBVyxNQUFNLFdBQVk7QUFBRSxxQkFBTyxZQUFZLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQztBQUFBLGFBQUk7QUFDbEcsY0FBRSxxQkFBcUIsU0FBVSxXQUFXO0FBQ3hDLHdCQUFXLGNBQWMsU0FDckIsTUFBTSxhQUNOLE1BQU07QUFDVixrQkFBSSxLQUFLLE9BQU87QUFBQSxZQUNoQztBQUNZLGdCQUFJLElBQUk7QUFDUixjQUFFLGNBQWMsU0FBVSxRQUFRLFNBQVMsU0FBUztBQUNoRCxrQkFBSSxNQUFNLE9BQU87QUFDakIscUJBQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRztBQUM3QixrQkFBRTtBQUNGLG9CQUFJLE1BQU0sSUFBSSxRQUFRO0FBQ2xCLDBCQUFRLE9BQU87QUFDZix5QkFBTztBQUFBLGdCQUMvQjtBQUFBLGNBQ0E7QUFDZ0Isa0JBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRztBQUM1Qix1QkFBTztBQUFBLGNBQzNCLE9BQ3FCO0FBQ0Qsd0JBQVEsV0FBWTtBQUFFLHlCQUFPLFNBQVMsSUFBSSxDQUFDLENBQUM7QUFBQSxpQkFBSTtBQUNoRCx1QkFBTztBQUFBLGNBQzNCO0FBQUEsWUFDQSxDQUFhO0FBQ0QsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFBLGFBQVksVUFBVSxXQUFXLFNBQVUsT0FBTztBQUM5QyxtQkFBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsT0FBTyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxlQUFlLE9BQU8sZUFBZSxPQUFPO0FBQUEsVUFDOUg7QUFDUSxVQUFBQSxhQUFZLFVBQVUsU0FBUyxXQUFZO0FBQ3ZDLGdCQUFJLE1BQU0sV0FBVyxNQUFNLGVBQWUsU0FBUztBQUNuRCxnQkFBSSxJQUFJLFdBQVc7QUFDZixxQkFBTyxJQUFJLEtBQUssV0FBVyxJQUFJO0FBQ25DLGdCQUFJO0FBQ0Esa0JBQUksS0FBSyxLQUFLLFVBQVU7QUFBQSxZQUN4QyxTQUNtQixHQUFHO0FBQ04scUJBQU8sS0FBSyxNQUFNLG9CQUFvQjtBQUFBLFlBQ3REO0FBQ1ksZ0JBQUksU0FBUyxJQUFJLE9BQU8sU0FBVSxLQUFLLEtBQUs7QUFBRSxxQkFBTyxNQUNqRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFDMUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDO0FBQUEsWUFBRSxHQUFJLElBQUk7QUFDNUIsbUJBQU8sS0FBSyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ2xELG1CQUFPLEtBQUssV0FBVyxRQUFRLEVBQUUsZUFBZSxPQUFPLGVBQWUsT0FBTztBQUFBLFVBQ3pGO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLGFBQWEsU0FBVSxRQUFRLFNBQVM7QUFDMUQsZ0JBQUksUUFBUTtBQUNaLGdCQUFJYixPQUFNLEtBQUssTUFBTSxZQUFZLEtBQUssWUFBWSxhQUFhLEtBQUssYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUs7QUFDN0csZ0JBQUksT0FBTyxXQUFXO0FBQ2xCLHFCQUFPLGdCQUFnQixJQUFJO0FBQy9CLGdCQUFJLENBQUMsT0FBTyxNQUFNLFNBQVUsT0FBTztBQUMvQixxQkFBTyxNQUFNLENBQUMsTUFBTSxVQUNoQixNQUFNLENBQUMsTUFBTSxVQUNiLFVBQVUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsS0FBSztBQUFBLFlBQ3JELENBQWEsR0FBRztBQUNBLHFCQUFPLEtBQUssTUFBTSw4SEFBOEgsV0FBVyxlQUFlO0FBQUEsWUFDMUw7QUFDWSxnQkFBSSxnQkFBZ0IsQ0FBQyxXQUFXLFFBQVEsa0JBQWtCO0FBQzFELGdCQUFJLGdCQUFnQixXQUFXLFFBQVEsa0JBQWtCO0FBQ3pELHFCQUFTYyxVQUFTQyxTQUFRLFVBQVU7QUFDaEMsa0JBQUksSUFBSSxHQUFHLElBQUlBLFFBQU87QUFDdEIscUJBQU8sSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNmLG9CQUFJLFFBQVFBLFFBQU8sQ0FBQztBQUNwQixvQkFBSWYsS0FBSSxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUtBLEtBQUksU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHO0FBQ2xFLHdCQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLHdCQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDO0FBQUEsZ0JBQ3hCO0FBQUEsY0FDQTtBQUNnQixrQkFBSSxNQUFNO0FBQ04sZ0JBQUFlLFFBQU8sS0FBSyxRQUFRO0FBQ3hCLHFCQUFPQTtBQUFBLFlBQ3ZCO0FBQ1ksZ0JBQUksZ0JBQWdCO0FBQ3BCLHFCQUFTLFlBQVksR0FBRyxHQUFHO0FBQUUscUJBQU8sY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLFlBQUU7QUFDOUQsZ0JBQUk7QUFDSixnQkFBSTtBQUNBLG9CQUFNLE9BQU8sT0FBT0QsV0FBVSxDQUFBLENBQUU7QUFDaEMsa0JBQUksS0FBSyxXQUFXO0FBQUEsWUFDcEMsU0FDbUIsSUFBSTtBQUNQLHFCQUFPLEtBQUssTUFBTSxvQkFBb0I7QUFBQSxZQUN0RDtBQUNZLGdCQUFJLFdBQVc7QUFDZixnQkFBSSwwQkFBMEIsZ0JBQzFCLFNBQVUsS0FBSztBQUFFLHFCQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSTtBQUFBLFlBQUUsSUFDN0QsU0FBVSxLQUFLO0FBQUUscUJBQU8sVUFBVSxLQUFLLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQUEsWUFBRTtBQUNsRSxnQkFBSSwwQkFBMEIsZ0JBQzFCLFNBQVUsS0FBSztBQUFFLHFCQUFPLFdBQVcsS0FBSyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSTtBQUFBLFlBQUUsSUFDOUQsU0FBVSxLQUFLO0FBQUUscUJBQU8sV0FBVyxLQUFLLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQUEsWUFBRTtBQUNuRSxxQkFBUyxzQkFBc0IsS0FBSztBQUNoQyxxQkFBTyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyx3QkFBd0IsR0FBRztBQUFBLFlBQ3BGO0FBQ1ksZ0JBQUksV0FBVztBQUNmLGdCQUFJLElBQUksSUFBSSxLQUFLLFdBQVcsTUFBTSxXQUFZO0FBQUUscUJBQU8sWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxhQUFhO0FBQUEsYUFBSTtBQUN4SSxjQUFFLHFCQUFxQixTQUFVLFdBQVc7QUFDeEMsa0JBQUksY0FBYyxRQUFRO0FBQ3RCLDJCQUFXO0FBQ1gsZ0NBQWdCO0FBQUEsY0FDcEMsT0FDcUI7QUFDRCwyQkFBVztBQUNYLGdDQUFnQjtBQUFBLGNBQ3BDO0FBQ2dCLGtCQUFJLEtBQUssV0FBVztBQUFBLFlBQ3BDO0FBQ1ksY0FBRSxjQUFjLFNBQVUsUUFBUSxTQUFTLFNBQVM7QUFDaEQsa0JBQUksTUFBTSxPQUFPO0FBQ2pCLHFCQUFPLFNBQVMsR0FBRyxHQUFHO0FBQ2xCLGtCQUFFO0FBQ0Ysb0JBQUksYUFBYSxJQUFJLFFBQVE7QUFDekIsMEJBQVEsT0FBTztBQUNmLHlCQUFPO0FBQUEsZ0JBQy9CO0FBQUEsY0FDQTtBQUNnQixrQkFBSSxzQkFBc0IsR0FBRyxHQUFHO0FBQzVCLHVCQUFPO0FBQUEsY0FDM0IsV0FDeUIsTUFBTSxLQUFLLEtBQUssSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHO0FBQ3pGLHVCQUFPO0FBQUEsY0FDM0IsT0FDcUI7QUFDRCx3QkFBUSxXQUFZO0FBQ2hCLHNCQUFJLGtCQUFrQjtBQUNsQiwyQkFBTyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBRWhDLDJCQUFPLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQUEsZ0JBQzVELENBQXFCO0FBQ0QsdUJBQU87QUFBQSxjQUMzQjtBQUFBLFlBQ0EsQ0FBYTtBQUNELG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBRCxhQUFZLFVBQVUsa0JBQWtCLFdBQVk7QUFDaEQsZ0JBQUksTUFBTSxXQUFXLE1BQU0sZUFBZSxTQUFTO0FBQ25ELGdCQUFJLENBQUMsSUFBSSxNQUFNLFNBQVUsR0FBRztBQUFFLHFCQUFPLE9BQU8sTUFBTTtBQUFBLFlBQVMsQ0FBRSxHQUFHO0FBQzVELHFCQUFPLEtBQUssTUFBTSwyQ0FBMkM7QUFBQSxZQUM3RTtBQUNZLGdCQUFJLElBQUksV0FBVztBQUNmLHFCQUFPLGdCQUFnQixJQUFJO0FBQy9CLG1CQUFPLEtBQUssV0FBVyxJQUFJLElBQUksU0FBVSxLQUFLO0FBQUUscUJBQU8sQ0FBQyxLQUFLLE1BQU0sU0FBUztBQUFBLFlBQUUsQ0FBRSxDQUFDO0FBQUEsVUFDN0Y7QUFDUSxpQkFBT0E7QUFBQSxRQUNmO0FBRUksaUJBQVMsNkJBQTZCaEIsS0FBSTtBQUN0QyxpQkFBTyxxQkFBcUIsWUFBWSxXQUFXLFNBQVNnQixhQUFZLE9BQU8sT0FBTyxjQUFjO0FBQ2hHLGlCQUFLLEtBQUtoQjtBQUNWLGlCQUFLLE9BQU87QUFBQSxjQUNSO0FBQUEsY0FDQSxPQUFPLFVBQVUsUUFBUSxPQUFPO0FBQUEsY0FDaEMsSUFBSTtBQUFBO0FBRVIsaUJBQUssT0FBTyxLQUFLLGFBQWFHO0FBQzlCLGlCQUFLLGNBQWMsU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBT0EsS0FBSSxHQUFHLENBQUM7QUFBQSxZQUFFO0FBQ3RELGlCQUFLLE9BQU8sU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBT0EsS0FBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7QUFBQSxZQUFFO0FBQzNELGlCQUFLLE9BQU8sU0FBVSxHQUFHLEdBQUc7QUFBRSxxQkFBT0EsS0FBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7QUFBQSxZQUFFO0FBQzNELGlCQUFLLGVBQWVILElBQUcsTUFBTTtBQUM3QixnQkFBSSxDQUFDLEtBQUs7QUFDTixvQkFBTSxJQUFJLFdBQVcsV0FBVTtBQUFBLFVBQy9DLENBQVM7QUFBQSxRQUNUO0FBRUksaUJBQVMsbUJBQW1CLFFBQVE7QUFDaEMsaUJBQU8sS0FBSyxTQUFVLE9BQU87QUFDekIsMkJBQWUsS0FBSztBQUNwQixtQkFBTyxNQUFNLE9BQU8sS0FBSztBQUN6QixtQkFBTztBQUFBLFVBQ25CLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsZUFBZSxPQUFPO0FBQzNCLGNBQUksTUFBTTtBQUNOLGtCQUFNLGdCQUFlO0FBQ3pCLGNBQUksTUFBTTtBQUNOLGtCQUFNLGVBQWM7QUFBQSxRQUNoQztBQUVJLFlBQUksbUNBQW1DO0FBQ3ZDLFlBQUksaUNBQWlDO0FBQ3JDLFlBQUksZUFBZSxPQUFPLE1BQU0sZ0NBQWdDO0FBRWhFLFlBQUksY0FBZ0IsV0FBWTtBQUM1QixtQkFBU21CLGVBQWM7QUFBQSxVQUMvQjtBQUNRLFVBQUFBLGFBQVksVUFBVSxRQUFRLFdBQVk7QUFDdEMsbUJBQU8sQ0FBQyxJQUFJLE1BQU07QUFDbEIsY0FBRSxLQUFLO0FBQ1AsZ0JBQUksS0FBSyxjQUFjLEtBQUssQ0FBQyxJQUFJO0FBQzdCLGtCQUFJLGVBQWU7QUFDdkIsbUJBQU87QUFBQSxVQUNuQjtBQUNRLFVBQUFBLGFBQVksVUFBVSxVQUFVLFdBQVk7QUFDeEMsbUJBQU8sQ0FBQyxJQUFJLE1BQU07QUFDbEIsZ0JBQUksRUFBRSxLQUFLLGNBQWMsR0FBRztBQUN4QixrQkFBSSxDQUFDLElBQUk7QUFDTCxvQkFBSSxlQUFlO0FBQ3ZCLHFCQUFPLEtBQUssY0FBYyxTQUFTLEtBQUssQ0FBQyxLQUFLLFdBQVc7QUFDckQsb0JBQUksV0FBVyxLQUFLLGNBQWMsTUFBSztBQUN2QyxvQkFBSTtBQUNBLHlCQUFPLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQUEsZ0JBQ3ZELFNBQzJCLEdBQUc7QUFBQSxnQkFBQTtBQUFBLGNBQzlCO0FBQUEsWUFDQTtBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBQSxhQUFZLFVBQVUsVUFBVSxXQUFZO0FBQ3hDLG1CQUFPLEtBQUssYUFBYSxJQUFJLGlCQUFpQjtBQUFBLFVBQzFEO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLFNBQVMsU0FBVSxVQUFVO0FBQy9DLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxDQUFDLEtBQUs7QUFDTixxQkFBTztBQUNYLGdCQUFJLFFBQVEsS0FBSyxHQUFHO0FBQ3BCLGdCQUFJLGNBQWMsS0FBSyxHQUFHLE9BQU87QUFDakMsbUJBQU8sQ0FBQyxLQUFLLFFBQVE7QUFDckIsZ0JBQUksQ0FBQyxZQUFZLENBQUMsT0FBTztBQUNyQixzQkFBUSxlQUFlLFlBQVksTUFBSTtBQUFBLGdCQUNuQyxLQUFLO0FBQ0Qsd0JBQU0sSUFBSSxXQUFXLGVBQWUsV0FBVztBQUFBLGdCQUNuRCxLQUFLO0FBQ0Qsd0JBQU0sSUFBSSxXQUFXLFdBQVcsWUFBWSxTQUFTLFdBQVc7QUFBQSxnQkFDcEU7QUFDSSx3QkFBTSxJQUFJLFdBQVcsV0FBVyxXQUFXO0FBQUEsY0FDbkU7QUFBQSxZQUNBO0FBQ1ksZ0JBQUksQ0FBQyxLQUFLO0FBQ04sb0JBQU0sSUFBSSxXQUFXLG9CQUFtQjtBQUM1QyxtQkFBTyxLQUFLLFlBQVksV0FBVyxJQUFJO0FBQ3ZDLHVCQUFXLEtBQUssV0FBVyxhQUN0QixLQUFLLEdBQUcsT0FDSCxLQUFLLEdBQUcsS0FBSyxZQUFZLEtBQUssWUFBWSxLQUFLLE1BQU0sRUFBRSxZQUFZLEtBQUssNEJBQTJCLENBQUUsSUFDckcsTUFBTSxZQUFZLEtBQUssWUFBWSxLQUFLLE1BQU0sRUFBRSxZQUFZLEtBQUssNEJBQTJCLENBQUU7QUFDeEcscUJBQVMsVUFBVSxLQUFLLFNBQVUsSUFBSTtBQUNsQyw2QkFBZSxFQUFFO0FBQ2pCLG9CQUFNLFFBQVEsU0FBUyxLQUFLO0FBQUEsWUFDNUMsQ0FBYTtBQUNELHFCQUFTLFVBQVUsS0FBSyxTQUFVLElBQUk7QUFDbEMsNkJBQWUsRUFBRTtBQUNqQixvQkFBTSxVQUFVLE1BQU0sUUFBUSxJQUFJLFdBQVcsTUFBTSxTQUFTLEtBQUssQ0FBQztBQUNsRSxvQkFBTSxTQUFTO0FBQ2Ysb0JBQU0sR0FBRyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQUEsWUFDekMsQ0FBYTtBQUNELHFCQUFTLGFBQWEsS0FBSyxXQUFZO0FBQ25DLG9CQUFNLFNBQVM7QUFDZixvQkFBTSxTQUFRO0FBQ2Qsa0JBQUksa0JBQWtCLFVBQVU7QUFDNUIsNkJBQWEsZUFBZSxLQUFLLFNBQVMsY0FBYyxDQUFDO0FBQUEsY0FDN0U7QUFBQSxZQUNBLENBQWE7QUFDRCxtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLFdBQVcsU0FBVSxNQUFNLElBQUksWUFBWTtBQUM3RCxnQkFBSSxRQUFRO0FBQ1osZ0JBQUksU0FBUyxlQUFlLEtBQUssU0FBUztBQUN0QyxxQkFBTyxVQUFVLElBQUksV0FBVyxTQUFTLHlCQUF5QixDQUFDO0FBQ3ZFLGdCQUFJLENBQUMsS0FBSztBQUNOLHFCQUFPLFVBQVUsSUFBSSxXQUFXLHFCQUFxQjtBQUN6RCxnQkFBSSxLQUFLLFdBQVc7QUFDaEIscUJBQU8sSUFBSSxhQUFhLFNBQVUsU0FBUyxRQUFRO0FBQy9DLHNCQUFNLGNBQWMsS0FBSyxDQUFDLFdBQVk7QUFDOUIsd0JBQU0sU0FBUyxNQUFNLElBQUksVUFBVSxFQUFFLEtBQUssU0FBUyxNQUFNO0FBQUEsZ0JBQ3JGLEdBQTJCLEdBQUcsQ0FBQztBQUFBLGNBQy9CLENBQWlCO0FBQUEsWUFDakIsV0FDcUIsWUFBWTtBQUNqQixxQkFBTyxTQUFTLFdBQVk7QUFDeEIsb0JBQUlDLEtBQUksSUFBSSxhQUFhLFNBQVUsU0FBUyxRQUFRO0FBQ2hELHdCQUFNLE1BQUs7QUFDWCxzQkFBSSxLQUFLLEdBQUcsU0FBUyxRQUFRLEtBQUs7QUFDbEMsc0JBQUksTUFBTSxHQUFHO0FBQ1QsdUJBQUcsS0FBSyxTQUFTLE1BQU07QUFBQSxnQkFDbkQsQ0FBcUI7QUFDRCxnQkFBQUEsR0FBRSxRQUFRLFdBQVk7QUFBRSx5QkFBTyxNQUFNLFFBQU87QUFBQSxpQkFBSztBQUNqRCxnQkFBQUEsR0FBRSxPQUFPO0FBQ1QsdUJBQU9BO0FBQUEsY0FDM0IsQ0FBaUI7QUFBQSxZQUNqQixPQUNpQjtBQUNELGtCQUFJLElBQUksSUFBSSxhQUFhLFNBQVUsU0FBUyxRQUFRO0FBQ2hELG9CQUFJLEtBQUssR0FBRyxTQUFTLFFBQVEsS0FBSztBQUNsQyxvQkFBSSxNQUFNLEdBQUc7QUFDVCxxQkFBRyxLQUFLLFNBQVMsTUFBTTtBQUFBLGNBQy9DLENBQWlCO0FBQ0QsZ0JBQUUsT0FBTztBQUNULHFCQUFPO0FBQUEsWUFDdkI7QUFBQSxVQUNBO0FBQ1EsVUFBQUQsYUFBWSxVQUFVLFFBQVEsV0FBWTtBQUN0QyxtQkFBTyxLQUFLLFNBQVMsS0FBSyxPQUFPLE1BQUssSUFBSztBQUFBLFVBQ3ZEO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLFVBQVUsU0FBVSxhQUFhO0FBQ25ELGdCQUFJLE9BQU8sS0FBSyxNQUFLO0FBQ3JCLGdCQUFJLFVBQVUsYUFBYSxRQUFRLFdBQVc7QUFDOUMsZ0JBQUksS0FBSyxhQUFhO0FBQ2xCLG1CQUFLLGNBQWMsS0FBSyxZQUFZLEtBQUssV0FBWTtBQUFFLHVCQUFPO0FBQUEsZUFBVTtBQUFBLFlBQ3hGLE9BQ2lCO0FBQ0QsbUJBQUssY0FBYztBQUNuQixtQkFBSyxnQkFBZ0IsQ0FBQTtBQUNyQixrQkFBSSxRQUFRLEtBQUssU0FBUyxZQUFZLEtBQUssV0FBVyxDQUFDLENBQUM7QUFDeEQsZUFBQyxTQUFTLE9BQU87QUFDYixrQkFBRSxLQUFLO0FBQ1AsdUJBQU8sS0FBSyxjQUFjO0FBQ3RCLGtCQUFDLEtBQUssY0FBYyxRQUFPO0FBQy9CLG9CQUFJLEtBQUs7QUFDTCx3QkFBTSxJQUFJLFNBQVMsRUFBRSxZQUFZO0FBQUEsY0FDekQsR0FBaUI7QUFBQSxZQUNqQjtBQUNZLGdCQUFJLHFCQUFxQixLQUFLO0FBQzlCLG1CQUFPLElBQUksYUFBYSxTQUFVLFNBQVMsUUFBUTtBQUMvQyxzQkFBUSxLQUFLLFNBQVUsS0FBSztBQUFFLHVCQUFPLEtBQUssY0FBYyxLQUFLLEtBQUssUUFBUSxLQUFLLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFBQSxjQUFFLEdBQUksU0FBVSxLQUFLO0FBQUUsdUJBQU8sS0FBSyxjQUFjLEtBQUssS0FBSyxPQUFPLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQztBQUFBLGNBQUUsQ0FBRSxFQUFFLFFBQVEsV0FBWTtBQUNsTSxvQkFBSSxLQUFLLGdCQUFnQixvQkFBb0I7QUFDekMsdUJBQUssY0FBYztBQUFBLGdCQUMzQztBQUFBLGNBQ0EsQ0FBaUI7QUFBQSxZQUNqQixDQUFhO0FBQUEsVUFDYjtBQUNRLFVBQUFBLGFBQVksVUFBVSxRQUFRLFdBQVk7QUFDdEMsZ0JBQUksS0FBSyxRQUFRO0FBQ2IsbUJBQUssU0FBUztBQUNkLGtCQUFJLEtBQUs7QUFDTCxxQkFBSyxTQUFTLE1BQUs7QUFDdkIsbUJBQUssUUFBUSxJQUFJLFdBQVcsTUFBSyxDQUFFO0FBQUEsWUFDbkQ7QUFBQSxVQUNBO0FBQ1EsVUFBQUEsYUFBWSxVQUFVLFFBQVEsU0FBVSxXQUFXO0FBQy9DLGdCQUFJLGlCQUFrQixLQUFLLG9CQUFvQixLQUFLLGtCQUFrQixDQUFBO0FBQ3RFLGdCQUFJLE9BQU8sZ0JBQWdCLFNBQVM7QUFDaEMscUJBQU8sZUFBZSxTQUFTO0FBQ25DLGdCQUFJLGNBQWMsS0FBSyxPQUFPLFNBQVM7QUFDdkMsZ0JBQUksQ0FBQyxhQUFhO0FBQ2Qsb0JBQU0sSUFBSSxXQUFXLFNBQVMsV0FBVyxZQUFZLDBCQUEwQjtBQUFBLFlBQy9GO0FBQ1ksZ0JBQUksd0JBQXdCLElBQUksS0FBSyxHQUFHLE1BQU0sV0FBVyxhQUFhLElBQUk7QUFDMUUsa0NBQXNCLE9BQU8sS0FBSyxHQUFHLEtBQUssTUFBTSxTQUFTO0FBQ3pELDJCQUFlLFNBQVMsSUFBSTtBQUM1QixtQkFBTztBQUFBLFVBQ25CO0FBQ1EsaUJBQU9BO0FBQUEsUUFDZjtBQUVJLGlCQUFTLDZCQUE2Qm5CLEtBQUk7QUFDdEMsaUJBQU8scUJBQXFCLFlBQVksV0FBVyxTQUFTbUIsYUFBWSxNQUFNLFlBQVksVUFBVSw2QkFBNkIsUUFBUTtBQUNySSxnQkFBSSxRQUFRO0FBQ1osZ0JBQUksU0FBUztBQUNULHlCQUFXLFFBQVEsU0FBVSxXQUFXO0FBQ3BDLG9CQUFJbEI7QUFDSixvQkFBSSxVQUFVQSxNQUFLLFNBQVMsU0FBUyxPQUFPLFFBQVFBLFFBQU8sU0FBUyxTQUFTQSxJQUFHO0FBQ2hGLG9CQUFJO0FBQ0EsK0JBQWEsV0FBVyxPQUFPLE9BQU8sSUFBSSxTQUFVLEdBQUc7QUFBRSwyQkFBTyxFQUFFO0FBQUEsa0JBQWEsQ0FBRSxDQUFDO0FBQUEsY0FDMUcsQ0FBaUI7QUFDTCxpQkFBSyxLQUFLRDtBQUNWLGlCQUFLLE9BQU87QUFDWixpQkFBSyxhQUFhO0FBQ2xCLGlCQUFLLFNBQVM7QUFDZCxpQkFBSyw4QkFBOEI7QUFDbkMsaUJBQUssV0FBVztBQUNoQixpQkFBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLFNBQVMsT0FBTztBQUNuRCxpQkFBSyxTQUFTLFVBQVU7QUFDeEIsaUJBQUssU0FBUztBQUNkLGlCQUFLLFlBQVk7QUFDakIsaUJBQUssZ0JBQWdCLENBQUE7QUFDckIsaUJBQUssV0FBVztBQUNoQixpQkFBSyxVQUFVO0FBQ2YsaUJBQUssY0FBYztBQUNuQixpQkFBSyxnQkFBZ0I7QUFDckIsaUJBQUssYUFBYTtBQUNsQixpQkFBSyxjQUFjLElBQUksYUFBYSxTQUFVLFNBQVMsUUFBUTtBQUMzRCxvQkFBTSxXQUFXO0FBQ2pCLG9CQUFNLFVBQVU7QUFBQSxZQUNoQyxDQUFhO0FBQ0QsaUJBQUssWUFBWSxLQUFLLFdBQVk7QUFDOUIsb0JBQU0sU0FBUztBQUNmLG9CQUFNLEdBQUcsU0FBUyxLQUFJO0FBQUEsWUFDdEMsR0FBZSxTQUFVLEdBQUc7QUFDWixrQkFBSSxZQUFZLE1BQU07QUFDdEIsb0JBQU0sU0FBUztBQUNmLG9CQUFNLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDckIsb0JBQU0sU0FDRixNQUFNLE9BQU8sUUFBUSxDQUFDLElBQ3RCLGFBQWEsTUFBTSxZQUFZLE1BQU0sU0FBUyxNQUFLO0FBQ3ZELHFCQUFPLFVBQVUsQ0FBQztBQUFBLFlBQ2xDLENBQWE7QUFBQSxVQUNiLENBQVM7QUFBQSxRQUNUO0FBRUksaUJBQVMsZ0JBQWdCLE1BQU0sU0FBUyxRQUFRLE9BQU8sTUFBTSxVQUFVLFdBQVdKLE9BQU07QUFDcEYsaUJBQU87QUFBQSxZQUNIO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBLE1BQU0sVUFBVSxDQUFDLFlBQVksTUFBTSxPQUFPLFFBQVEsTUFBTSxPQUFPLE9BQU8sT0FBTyxNQUFNLGdCQUFnQixPQUFPO0FBQUEsWUFDMUcsTUFBTUE7QUFBQTtRQUVsQjtBQUNJLGlCQUFTLGdCQUFnQixTQUFTO0FBQzlCLGlCQUFPLE9BQU8sWUFBWSxXQUN0QixVQUNBLFVBQVcsTUFBTSxDQUFBLEVBQUcsS0FBSyxLQUFLLFNBQVMsR0FBRyxJQUFJLE1BQU87QUFBQSxRQUNqRTtBQUVJLGlCQUFTLGtCQUFrQixNQUFNLFNBQVMsU0FBUztBQUMvQyxpQkFBTztBQUFBLFlBQ0g7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsYUFBYTtBQUFBLFlBQ2IsV0FBVyxjQUFjLFNBQVMsU0FBVSxPQUFPO0FBQUUscUJBQU8sQ0FBQyxNQUFNLE1BQU0sS0FBSztBQUFBLGFBQUk7QUFBQTtRQUU5RjtBQUVJLGlCQUFTLG9CQUFvQixZQUFZO0FBQ3JDLGlCQUFPLFdBQVcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJO0FBQUEsUUFDekQ7QUFDSSxZQUFJLFlBQVksU0FBVSxhQUFhO0FBQ25DLGNBQUk7QUFDQSx3QkFBWSxLQUFLLENBQUMsQ0FBQSxDQUFFLENBQUM7QUFDckIsd0JBQVksV0FBWTtBQUFFLHFCQUFPLENBQUMsQ0FBQSxDQUFFO0FBQUEsWUFBRTtBQUN0QyxtQkFBTyxDQUFDLENBQUEsQ0FBRTtBQUFBLFVBQ3RCLFNBQ2UsR0FBRztBQUNOLHdCQUFZLFdBQVk7QUFBRSxxQkFBTztBQUFBLFlBQVU7QUFDM0MsbUJBQU87QUFBQSxVQUNuQjtBQUFBLFFBQ0E7QUFFSSxpQkFBUyxnQkFBZ0IsU0FBUztBQUM5QixjQUFJLFdBQVcsTUFBTTtBQUNqQixtQkFBTyxXQUFZO0FBQUUscUJBQU87QUFBQSxZQUFVO0FBQUEsVUFDbEQsV0FDaUIsT0FBTyxZQUFZLFVBQVU7QUFDbEMsbUJBQU8sMEJBQTBCLE9BQU87QUFBQSxVQUNwRCxPQUNhO0FBQ0QsbUJBQU8sU0FBVSxLQUFLO0FBQUUscUJBQU8sYUFBYSxLQUFLLE9BQU87QUFBQSxZQUFFO0FBQUEsVUFDdEU7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsMEJBQTBCLFNBQVM7QUFDeEMsY0FBSSxRQUFRLFFBQVEsTUFBTSxHQUFHO0FBQzdCLGNBQUksTUFBTSxXQUFXLEdBQUc7QUFDcEIsbUJBQU8sU0FBVSxLQUFLO0FBQUUscUJBQU8sSUFBSSxPQUFPO0FBQUEsWUFBRTtBQUFBLFVBQ3hELE9BQ2E7QUFDRCxtQkFBTyxTQUFVLEtBQUs7QUFBRSxxQkFBTyxhQUFhLEtBQUssT0FBTztBQUFBLFlBQUU7QUFBQSxVQUN0RTtBQUFBLFFBQ0E7QUFFSSxpQkFBUyxTQUFTLFdBQVc7QUFDekIsaUJBQU8sR0FBRyxNQUFNLEtBQUssU0FBUztBQUFBLFFBQ3RDO0FBQ0ksWUFBSSxjQUFjO0FBQ2xCLGlCQUFTLGdCQUFnQixTQUFTO0FBQzlCLGlCQUFPLFdBQVcsT0FDZCxRQUNBLE9BQU8sWUFBWSxXQUNmLFVBQ0EsSUFBSSxPQUFPLFFBQVEsS0FBSyxHQUFHLEdBQUcsR0FBRztBQUFBLFFBQ2pEO0FBQ0ksaUJBQVMsYUFBYUksS0FBSSxhQUFhLFVBQVU7QUFDN0MsbUJBQVMsY0FBY0EsS0FBSSxPQUFPO0FBQzlCLGdCQUFJcUIsVUFBUyxTQUFTckIsSUFBRyxnQkFBZ0I7QUFDekMsbUJBQU87QUFBQSxjQUNILFFBQVE7QUFBQSxnQkFDSixNQUFNQSxJQUFHO0FBQUEsZ0JBQ1QsUUFBUXFCLFFBQU8sSUFBSSxTQUFVLE9BQU87QUFBRSx5QkFBTyxNQUFNLFlBQVksS0FBSztBQUFBLGdCQUFFLENBQUUsRUFBRSxJQUFJLFNBQVUsT0FBTztBQUMzRixzQkFBSSxVQUFVLE1BQU0sU0FBUyxnQkFBZ0IsTUFBTTtBQUNuRCxzQkFBSSxXQUFXLFFBQVEsT0FBTztBQUM5QixzQkFBSSxXQUFXLFdBQVc7QUFDMUIsc0JBQUksaUJBQWlCLENBQUE7QUFDckIsc0JBQUkzQixVQUFTO0FBQUEsb0JBQ1QsTUFBTSxNQUFNO0FBQUEsb0JBQ1osWUFBWTtBQUFBLHNCQUNSLE1BQU07QUFBQSxzQkFDTixjQUFjO0FBQUEsc0JBQ2Q7QUFBQSxzQkFDQTtBQUFBLHNCQUNBO0FBQUEsc0JBQ0E7QUFBQSxzQkFDQSxRQUFRO0FBQUEsc0JBQ1IsWUFBWSxnQkFBZ0IsT0FBTztBQUFBO29CQUV2QyxTQUFTLFNBQVMsTUFBTSxVQUFVLEVBQUUsSUFBSSxTQUFVLFdBQVc7QUFBRSw2QkFBTyxNQUFNLE1BQU0sU0FBUztBQUFBLG9CQUFFLENBQUUsRUFDMUYsSUFBSSxTQUFVLE9BQU87QUFDdEIsMEJBQUksT0FBTyxNQUFNLE1BQU0sU0FBUyxNQUFNLFFBQVEsYUFBYSxNQUFNLFlBQVk0QixXQUFVLE1BQU07QUFDN0YsMEJBQUlDLFlBQVcsUUFBUUQsUUFBTztBQUM5QiwwQkFBSTVCLFVBQVM7QUFBQSx3QkFDVDtBQUFBLHdCQUNBLFVBQVU2QjtBQUFBLHdCQUNWLFNBQVNEO0FBQUEsd0JBQ1Q7QUFBQSx3QkFDQTtBQUFBLHdCQUNBLFlBQVksZ0JBQWdCQSxRQUFPO0FBQUE7QUFFdkMscUNBQWUsZ0JBQWdCQSxRQUFPLENBQUMsSUFBSTVCO0FBQzNDLDZCQUFPQTtBQUFBLG9CQUN2QyxDQUE2QjtBQUFBLG9CQUNELG1CQUFtQixTQUFVNEIsVUFBUztBQUFFLDZCQUFPLGVBQWUsZ0JBQWdCQSxRQUFPLENBQUM7QUFBQSxvQkFBRTtBQUFBO0FBRTVGLGlDQUFlLEtBQUssSUFBSTVCLFFBQU87QUFDL0Isc0JBQUksV0FBVyxNQUFNO0FBQ2pCLG1DQUFlLGdCQUFnQixPQUFPLENBQUMsSUFBSUEsUUFBTztBQUFBLGtCQUM5RTtBQUN3Qix5QkFBT0E7QUFBQSxnQkFDL0IsQ0FBcUI7QUFBQTtjQUVMLFdBQVcyQixRQUFPLFNBQVMsS0FBTSxZQUFZLE1BQU0sWUFBWUEsUUFBTyxDQUFDLENBQUMsS0FDcEUsRUFBRSxPQUFPLGNBQWMsZUFBZSxTQUFTLEtBQUssVUFBVSxTQUFTLEtBQ25FLENBQUMsb0JBQW9CLEtBQUssVUFBVSxTQUFTLEtBQzdDLEdBQUcsT0FBTyxVQUFVLFVBQVUsTUFBTSxlQUFlLENBQUMsRUFBRSxDQUFDLElBQUk7QUFBQTtVQUVuRjtBQUNRLG1CQUFTLGdCQUFnQixPQUFPO0FBQzVCLGdCQUFJLE1BQU0sU0FBUztBQUNmLHFCQUFPO0FBQ1gsZ0JBQUksTUFBTSxTQUFTO0FBQ2Ysb0JBQU0sSUFBSSxNQUFNLDBDQUEwQztBQUM5RCxnQkFBSSxRQUFRLE1BQU0sT0FBTyxRQUFRLE1BQU0sT0FBTyxZQUFZLE1BQU0sV0FBVyxZQUFZLE1BQU07QUFDN0YsZ0JBQUksV0FBVyxVQUFVLFNBQ3JCLFVBQVUsU0FDTixPQUNBLFlBQVksV0FBVyxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQzdDLFVBQVUsU0FDTixZQUFZLFdBQVcsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUN6QyxZQUFZLE1BQU0sT0FBTyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO0FBQ2hFLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxtQkFBUyxrQkFBa0IsYUFBYTtBQUNwQyxnQkFBSSxZQUFZLFlBQVk7QUFDNUIscUJBQVMsT0FBT3BCLEtBQUk7QUFDaEIsa0JBQUksUUFBUUEsSUFBRyxPQUFPTCxRQUFPSyxJQUFHLE1BQU1HLFFBQU9ILElBQUcsTUFBTSxTQUFTQSxJQUFHLFFBQVEsUUFBUUEsSUFBRztBQUNyRixxQkFBTyxJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFDMUMsMEJBQVUsS0FBSyxPQUFPO0FBQ3RCLG9CQUFJLFFBQVEsTUFBTSxZQUFZLFNBQVM7QUFDdkMsb0JBQUksV0FBVyxNQUFNLFdBQVc7QUFDaEMsb0JBQUksYUFBYUwsVUFBUyxTQUFTQSxVQUFTO0FBQzVDLG9CQUFJLENBQUMsY0FBY0EsVUFBUyxZQUFZQSxVQUFTO0FBQzdDLHdCQUFNLElBQUksTUFBTSw2QkFBNkJBLEtBQUk7QUFDckQsb0JBQUksVUFBVVEsU0FBUSxVQUFVLEVBQUUsUUFBUSxFQUFDLEdBQUk7QUFDL0Msb0JBQUlBLFNBQVEsVUFBVUEsTUFBSyxXQUFXLE9BQU8sUUFBUTtBQUNqRCx3QkFBTSxJQUFJLE1BQU0sK0RBQStEO0FBQUEsZ0JBQ3ZHO0FBQ29CLG9CQUFJLFdBQVc7QUFDWCx5QkFBTyxRQUFRLEVBQUUsYUFBYSxHQUFHLFVBQVUsSUFBSSxTQUFTLENBQUEsR0FBSSxZQUFZLFFBQVc7QUFDdkYsb0JBQUk7QUFDSixvQkFBSSxPQUFPLENBQUE7QUFDWCxvQkFBSSxXQUFXLENBQUE7QUFDZixvQkFBSSxjQUFjO0FBQ2xCLG9CQUFJLGVBQWUsU0FBVSxPQUFPO0FBQ2hDLG9CQUFFO0FBQ0YsaUNBQWUsS0FBSztBQUFBLGdCQUM1QztBQUNvQixvQkFBSVIsVUFBUyxlQUFlO0FBQ3hCLHNCQUFJLE1BQU0sU0FBUztBQUNmLDJCQUFPLFFBQVEsRUFBRSxhQUEwQixVQUFvQixTQUFTLENBQUEsR0FBSSxZQUFZLFFBQVc7QUFDdkcsc0JBQUksTUFBTSxTQUFTO0FBQ2YseUJBQUssS0FBSyxNQUFNLE1BQU0sTUFBSyxDQUFFO0FBQUE7QUFFN0IseUJBQUssS0FBSyxNQUFNLE1BQU0sT0FBTyxnQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFBQSxnQkFDaEYsT0FDeUI7QUFDRCxzQkFBSUssTUFBSyxhQUNMLFdBQ0ksQ0FBQyxRQUFRRyxLQUFJLElBQ2IsQ0FBQyxRQUFRLElBQUksSUFDakIsQ0FBQ0EsT0FBTSxJQUFJLEdBQUcsUUFBUUgsSUFBRyxDQUFDLEdBQUcsUUFBUUEsSUFBRyxDQUFDO0FBQzdDLHNCQUFJLFlBQVk7QUFDWiw2QkFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUUsR0FBRztBQUM3QiwyQkFBSyxLQUFLLE1BQU8sU0FBUyxNQUFNLENBQUMsTUFBTSxTQUNuQyxNQUFNTCxLQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFDOUIsTUFBTUEsS0FBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUU7QUFDMUIsMEJBQUksVUFBVTtBQUFBLG9CQUM5QztBQUFBLGtCQUNBLE9BQzZCO0FBQ0QsNkJBQVMsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLEdBQUc7QUFDN0IsMkJBQUssS0FBSyxNQUFNLE1BQU1BLEtBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLDBCQUFJLFVBQVU7QUFBQSxvQkFDOUM7QUFBQSxrQkFDQTtBQUFBLGdCQUNBO0FBQ29CLG9CQUFJLE9BQU8sU0FBVSxPQUFPO0FBQ3hCLHNCQUFJLGFBQWEsTUFBTSxPQUFPO0FBQzlCLHVCQUFLLFFBQVEsU0FBVTRCLE1BQUtmLElBQUc7QUFBRSwyQkFBT2UsS0FBSSxTQUFTLFNBQVMsU0FBU2YsRUFBQyxJQUFJZSxLQUFJO0FBQUEsa0JBQU8sQ0FBRTtBQUN6RiwwQkFBUTtBQUFBLG9CQUNKO0FBQUEsb0JBQ0E7QUFBQSxvQkFDQSxTQUFTNUIsVUFBUyxXQUFXUSxRQUFPLEtBQUssSUFBSSxTQUFVb0IsTUFBSztBQUFFLDZCQUFPQSxLQUFJO0FBQUEsb0JBQU8sQ0FBRTtBQUFBLG9CQUNsRjtBQUFBLGtCQUM1QixDQUF5QjtBQUFBLGdCQUN6QjtBQUNvQixvQkFBSSxVQUFVLFNBQVUsT0FBTztBQUMzQiwrQkFBYSxLQUFLO0FBQ2xCLHVCQUFLLEtBQUs7QUFBQSxnQkFDbEM7QUFDb0Isb0JBQUksWUFBWTtBQUFBLGNBQ3BDLENBQWlCO0FBQUEsWUFDakI7QUFDWSxxQkFBU0MsWUFBV3hCLEtBQUk7QUFDcEIsa0JBQUksUUFBUUEsSUFBRyxPQUFPLFNBQVNBLElBQUcsUUFBUXlCLFNBQVF6QixJQUFHLE9BQU8sVUFBVUEsSUFBRyxTQUFTLFNBQVNBLElBQUc7QUFDOUYscUJBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQzFDLDBCQUFVLEtBQUssT0FBTztBQUN0QixvQkFBSSxRQUFReUIsT0FBTSxPQUFPLFFBQVFBLE9BQU07QUFDdkMsb0JBQUksUUFBUSxNQUFNLFlBQVksU0FBUztBQUN2QyxvQkFBSSxTQUFTLE1BQU0sZUFDZixRQUNBLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDMUIsb0JBQUksWUFBWSxVQUNaLFNBQ0ksZUFDQSxTQUNKLFNBQ0ksZUFDQTtBQUNSLG9CQUFJLE1BQU0sVUFBVSxFQUFFLG1CQUFtQixVQUNyQyxPQUFPLFdBQVcsZ0JBQWdCLEtBQUssR0FBRyxTQUFTLElBQ25ELE9BQU8sY0FBYyxnQkFBZ0IsS0FBSyxHQUFHLFNBQVM7QUFDMUQsb0JBQUksVUFBVSxtQkFBbUIsTUFBTTtBQUN2QyxvQkFBSSxZQUFZLEtBQUssU0FBVSxJQUFJO0FBQy9CLHNCQUFJLFNBQVMsSUFBSTtBQUNqQixzQkFBSSxDQUFDLFFBQVE7QUFDVCw0QkFBUSxJQUFJO0FBQ1o7QUFBQSxrQkFDNUI7QUFDd0IseUJBQU8sUUFBUSxFQUFFO0FBQ2pCLHlCQUFPLE9BQU87QUFDZCxzQkFBSSxrQkFBa0IsT0FBTyxTQUFTLEtBQUssTUFBTTtBQUNqRCxzQkFBSSw0QkFBNEIsT0FBTztBQUN2QyxzQkFBSTtBQUNBLGdEQUE0QiwwQkFBMEIsS0FBSyxNQUFNO0FBQ3JFLHNCQUFJLGlCQUFpQixPQUFPLFFBQVEsS0FBSyxNQUFNO0FBQy9DLHNCQUFJLDRCQUE0QixXQUFZO0FBQUUsMEJBQU0sSUFBSSxNQUFNLG9CQUFvQjtBQUFBLGtCQUFFO0FBQ3BGLHNCQUFJLHlCQUF5QixXQUFZO0FBQUUsMEJBQU0sSUFBSSxNQUFNLG9CQUFvQjtBQUFBLGtCQUFFO0FBQ2pGLHlCQUFPLFFBQVE7QUFDZix5QkFBTyxPQUFPLE9BQU8sV0FBVyxPQUFPLHFCQUFxQixPQUFPLFVBQVU7QUFDN0UseUJBQU8sT0FBTyxLQUFLLE1BQU07QUFDekIseUJBQU8sT0FBTyxXQUFZO0FBQ3RCLHdCQUFJLFFBQVE7QUFDWix3QkFBSSxTQUFTO0FBQ2IsMkJBQU8sS0FBSyxNQUFNLFdBQVk7QUFBRSw2QkFBTyxXQUFXLE1BQU0sYUFBYSxNQUFNLEtBQUk7QUFBQSxvQkFBRyxDQUFFLEVBQUUsS0FBSyxXQUFZO0FBQUUsNkJBQU87QUFBQSxxQkFBUTtBQUFBLGtCQUNwSjtBQUN3Qix5QkFBTyxRQUFRLFNBQVUsVUFBVTtBQUMvQix3QkFBSSxtQkFBbUIsSUFBSSxRQUFRLFNBQVUsa0JBQWtCLGlCQUFpQjtBQUM1RSx5Q0FBbUIsS0FBSyxnQkFBZ0I7QUFDeEMsMEJBQUksVUFBVSxtQkFBbUIsZUFBZTtBQUNoRCw2QkFBTyxPQUFPO0FBQ2QsNkJBQU8sT0FBTyxTQUFVLE9BQU87QUFDM0IsK0JBQU8sT0FBTyxPQUFPLFdBQVcsT0FBTyxxQkFBcUIsT0FBTyxVQUFVO0FBQzdFLHlDQUFpQixLQUFLO0FBQUEsc0JBQzFEO0FBQUEsb0JBQ0EsQ0FBNkI7QUFDRCx3QkFBSSxrQkFBa0IsV0FBWTtBQUM5QiwwQkFBSSxJQUFJLFFBQVE7QUFDWiw0QkFBSTtBQUNBLG1DQUFRO0FBQUEsd0JBQ2hELFNBQzJDLEtBQUs7QUFDUixpQ0FBTyxLQUFLLEdBQUc7QUFBQSx3QkFDdkQ7QUFBQSxzQkFDQSxPQUNxQztBQUNELCtCQUFPLE9BQU87QUFDZCwrQkFBTyxRQUFRLFdBQVk7QUFBRSxnQ0FBTSxJQUFJLE1BQU0sMEJBQTBCO0FBQUEsd0JBQUU7QUFDekUsK0JBQU8sS0FBSTtBQUFBLHNCQUMvQztBQUFBLG9CQUNBO0FBQzRCLHdCQUFJLFlBQVksS0FBSyxTQUFVQyxLQUFJO0FBQy9CLDBCQUFJLFlBQVk7QUFDaEIsc0NBQWU7QUFBQSxvQkFDL0MsQ0FBNkI7QUFDRCwyQkFBTyxXQUFXO0FBQ2xCLDJCQUFPLHFCQUFxQjtBQUM1QiwyQkFBTyxVQUFVO0FBQ2pCLG9DQUFlO0FBQ2YsMkJBQU87QUFBQSxrQkFDbkM7QUFDd0IsMEJBQVEsTUFBTTtBQUFBLGdCQUN0QyxHQUF1QixNQUFNO0FBQUEsY0FDN0IsQ0FBaUI7QUFBQSxZQUNqQjtBQUNZLHFCQUFTLE1BQU1DLFlBQVc7QUFDdEIscUJBQU8sU0FBVSxTQUFTO0FBQ3RCLHVCQUFPLElBQUksUUFBUSxTQUFVLFNBQVMsUUFBUTtBQUMxQyw0QkFBVSxLQUFLLE9BQU87QUFDdEIsc0JBQUksUUFBUSxRQUFRLE9BQU8sU0FBUyxRQUFRLFFBQVEsUUFBUSxRQUFRLE9BQU9GLFNBQVEsUUFBUTtBQUMzRixzQkFBSSxrQkFBa0IsVUFBVSxXQUFXLFNBQVk7QUFDdkQsc0JBQUksUUFBUUEsT0FBTSxPQUFPLFFBQVFBLE9BQU07QUFDdkMsc0JBQUksUUFBUSxNQUFNLFlBQVksU0FBUztBQUN2QyxzQkFBSSxTQUFTLE1BQU0sZUFBZSxRQUFRLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFDaEUsc0JBQUksY0FBYyxnQkFBZ0IsS0FBSztBQUN2QyxzQkFBSSxVQUFVO0FBQ1YsMkJBQU8sUUFBUSxFQUFFLFFBQVEsQ0FBQSxHQUFJO0FBQ2pDLHNCQUFJRSxZQUFXO0FBQ1gsd0JBQUksTUFBTSxTQUNOLE9BQU8sT0FBTyxhQUFhLGVBQWUsSUFDMUMsT0FBTyxXQUFXLGFBQWEsZUFBZTtBQUNsRCx3QkFBSSxZQUFZLFNBQVUsT0FBTztBQUFFLDZCQUFPLFFBQVEsRUFBRSxRQUFRLE1BQU0sT0FBTyxPQUFNLENBQUU7QUFBQSxvQkFBRTtBQUNuRix3QkFBSSxVQUFVLG1CQUFtQixNQUFNO0FBQUEsa0JBQ25FLE9BQzZCO0FBQ0Qsd0JBQUksVUFBVTtBQUNkLHdCQUFJLFFBQVEsVUFBVSxFQUFFLG1CQUFtQixVQUN2QyxPQUFPLFdBQVcsV0FBVyxJQUM3QixPQUFPLGNBQWMsV0FBVztBQUNwQyx3QkFBSSxXQUFXLENBQUE7QUFDZiwwQkFBTSxZQUFZLFNBQVUsT0FBTztBQUMvQiwwQkFBSSxTQUFTLE1BQU07QUFDbkIsMEJBQUksQ0FBQztBQUNELCtCQUFPLFFBQVEsRUFBRSxRQUFRLFVBQVU7QUFDdkMsK0JBQVMsS0FBSyxTQUFTLE9BQU8sUUFBUSxPQUFPLFVBQVU7QUFDdkQsMEJBQUksRUFBRSxZQUFZO0FBQ2QsK0JBQU8sUUFBUSxFQUFFLFFBQVEsVUFBVTtBQUN2Qyw2QkFBTyxTQUFRO0FBQUEsb0JBQy9DO0FBQzRCLDBCQUFNLFVBQVUsbUJBQW1CLE1BQU07QUFBQSxrQkFDckU7QUFBQSxnQkFDQSxDQUFxQjtBQUFBLGNBQ3JCO0FBQUEsWUFDQTtBQUNZLG1CQUFPO0FBQUEsY0FDSCxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUjtBQUFBLGNBQ0EsU0FBUyxTQUFVM0IsS0FBSTtBQUNuQixvQkFBSSxRQUFRQSxJQUFHLE9BQU9HLFFBQU9ILElBQUc7QUFDaEMsdUJBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQzFDLDRCQUFVLEtBQUssT0FBTztBQUN0QixzQkFBSSxRQUFRLE1BQU0sWUFBWSxTQUFTO0FBQ3ZDLHNCQUFJLFNBQVNHLE1BQUs7QUFDbEIsc0JBQUlWLFVBQVMsSUFBSSxNQUFNLE1BQU07QUFDN0Isc0JBQUksV0FBVztBQUNmLHNCQUFJLGdCQUFnQjtBQUNwQixzQkFBSTtBQUNKLHNCQUFJLGlCQUFpQixTQUFVLE9BQU87QUFDbEMsd0JBQUk4QixPQUFNLE1BQU07QUFDaEIseUJBQUs5QixRQUFPOEIsS0FBSSxJQUFJLElBQUlBLEtBQUksV0FBVztBQUNuQztBQUNKLHdCQUFJLEVBQUUsa0JBQWtCO0FBQ3BCLDhCQUFROUIsT0FBTTtBQUFBLGtCQUM5QztBQUN3QixzQkFBSSxlQUFlLG1CQUFtQixNQUFNO0FBQzVDLDJCQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxHQUFHO0FBQzdCLHdCQUFJLE1BQU1VLE1BQUssQ0FBQztBQUNoQix3QkFBSSxPQUFPLE1BQU07QUFDYiw0QkFBTSxNQUFNLElBQUlBLE1BQUssQ0FBQyxDQUFDO0FBQ3ZCLDBCQUFJLE9BQU87QUFDWCwwQkFBSSxZQUFZO0FBQ2hCLDBCQUFJLFVBQVU7QUFDZCx3QkFBRTtBQUFBLG9CQUNsQztBQUFBLGtCQUNBO0FBQ3dCLHNCQUFJLGFBQWE7QUFDYiw0QkFBUVYsT0FBTTtBQUFBLGdCQUMxQyxDQUFxQjtBQUFBLGNBQ3JCO0FBQUEsY0FDZ0IsS0FBSyxTQUFVTyxLQUFJO0FBQ2Ysb0JBQUksUUFBUUEsSUFBRyxPQUFPLE1BQU1BLElBQUc7QUFDL0IsdUJBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQzFDLDRCQUFVLEtBQUssT0FBTztBQUN0QixzQkFBSSxRQUFRLE1BQU0sWUFBWSxTQUFTO0FBQ3ZDLHNCQUFJLE1BQU0sTUFBTSxJQUFJLEdBQUc7QUFDdkIsc0JBQUksWUFBWSxTQUFVLE9BQU87QUFBRSwyQkFBTyxRQUFRLE1BQU0sT0FBTyxNQUFNO0FBQUEsa0JBQUU7QUFDdkUsc0JBQUksVUFBVSxtQkFBbUIsTUFBTTtBQUFBLGdCQUMvRCxDQUFxQjtBQUFBLGNBQ3JCO0FBQUEsY0FDZ0IsT0FBTyxNQUFNLFNBQVM7QUFBQSxjQUN0QixZQUFZd0I7QUFBQSxjQUNaLE9BQU8sU0FBVXhCLEtBQUk7QUFDakIsb0JBQUl5QixTQUFRekIsSUFBRyxPQUFPLFFBQVFBLElBQUc7QUFDakMsb0JBQUksUUFBUXlCLE9BQU0sT0FBTyxRQUFRQSxPQUFNO0FBQ3ZDLHVCQUFPLElBQUksUUFBUSxTQUFVLFNBQVMsUUFBUTtBQUMxQyxzQkFBSSxRQUFRLE1BQU0sWUFBWSxTQUFTO0FBQ3ZDLHNCQUFJLFNBQVMsTUFBTSxlQUFlLFFBQVEsTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUNoRSxzQkFBSSxjQUFjLGdCQUFnQixLQUFLO0FBQ3ZDLHNCQUFJLE1BQU0sY0FBYyxPQUFPLE1BQU0sV0FBVyxJQUFJLE9BQU8sTUFBSztBQUNoRSxzQkFBSSxZQUFZLEtBQUssU0FBVSxJQUFJO0FBQUUsMkJBQU8sUUFBUSxHQUFHLE9BQU8sTUFBTTtBQUFBLGtCQUFFLENBQUU7QUFDeEUsc0JBQUksVUFBVSxtQkFBbUIsTUFBTTtBQUFBLGdCQUMvRCxDQUFxQjtBQUFBLGNBQ3JCO0FBQUE7VUFFQTtBQUNRLGNBQUl6QixNQUFLLGNBQWNELEtBQUksUUFBUSxHQUFHLFNBQVNDLElBQUcsUUFBUSxZQUFZQSxJQUFHO0FBQ3pFLGNBQUksU0FBUyxPQUFPLE9BQU8sSUFBSSxTQUFVLGFBQWE7QUFBRSxtQkFBTyxrQkFBa0IsV0FBVztBQUFBLFdBQUk7QUFDaEcsY0FBSSxXQUFXLENBQUE7QUFDZixpQkFBTyxRQUFRLFNBQVUsT0FBTztBQUFFLG1CQUFPLFNBQVMsTUFBTSxJQUFJLElBQUk7QUFBQSxXQUFRO0FBQ3hFLGlCQUFPO0FBQUEsWUFDSCxPQUFPO0FBQUEsWUFDUCxhQUFhRCxJQUFHLFlBQVksS0FBS0EsR0FBRTtBQUFBLFlBQ25DLE9BQU8sU0FBVSxNQUFNO0FBQ25CLGtCQUFJTixVQUFTLFNBQVMsSUFBSTtBQUMxQixrQkFBSSxDQUFDQTtBQUNELHNCQUFNLElBQUksTUFBTSxVQUFVLE9BQU8sTUFBTSxhQUFhLENBQUM7QUFDekQscUJBQU8sU0FBUyxJQUFJO0FBQUEsWUFDcEM7QUFBQSxZQUNZLFNBQVM7QUFBQSxZQUNULFNBQVMsVUFBVSxXQUFXO0FBQUEsWUFDOUI7QUFBQTtRQUVaO0FBRUksaUJBQVMsc0JBQXNCLFdBQVcsYUFBYTtBQUNuRCxpQkFBTyxZQUFZLE9BQU8sU0FBVSxNQUFNTyxLQUFJO0FBQzFDLGdCQUFJLFNBQVNBLElBQUc7QUFDaEIsbUJBQVEsU0FBUyxTQUFTLENBQUEsR0FBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFBQSxVQUM3RCxHQUFXLFNBQVM7QUFBQSxRQUNwQjtBQUNJLGlCQUFTLHVCQUF1QixhQUFhLE9BQU9BLEtBQUksVUFBVTtBQUM5RCxjQUFJLGNBQWNBLElBQUc7QUFBYSxVQUFBQSxJQUFHO0FBQ3JDLGNBQUksU0FBUyxzQkFBc0IsYUFBYSxPQUFPLGFBQWEsUUFBUSxHQUFHLFlBQVksTUFBTTtBQUNqRyxpQkFBTztBQUFBLFlBQ0g7QUFBQTtRQUVaO0FBQ0ksaUJBQVMseUJBQXlCRCxLQUFJLFVBQVU7QUFDNUMsY0FBSSxRQUFRLFNBQVM7QUFDckIsY0FBSSxTQUFTLHVCQUF1QkEsSUFBRyxjQUFjLE9BQU9BLElBQUcsT0FBTyxRQUFRO0FBQzlFLFVBQUFBLElBQUcsT0FBTyxPQUFPO0FBQ2pCLFVBQUFBLElBQUcsT0FBTyxRQUFRLFNBQVUsT0FBTztBQUMvQixnQkFBSSxZQUFZLE1BQU07QUFDdEIsZ0JBQUlBLElBQUcsS0FBSyxPQUFPLE9BQU8sS0FBSyxTQUFVLEtBQUs7QUFBRSxxQkFBTyxJQUFJLFNBQVM7QUFBQSxZQUFVLENBQUUsR0FBRztBQUMvRSxvQkFBTSxPQUFPQSxJQUFHLEtBQUssTUFBTSxTQUFTO0FBQ3BDLGtCQUFJQSxJQUFHLFNBQVMsYUFBYUEsSUFBRyxPQUFPO0FBQ25DLGdCQUFBQSxJQUFHLFNBQVMsRUFBRSxPQUFPLE1BQU07QUFBQSxjQUMvQztBQUFBLFlBQ0E7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBRUksaUJBQVMsY0FBY0EsS0FBSSxNQUFNLFlBQVksVUFBVTtBQUNuRCxxQkFBVyxRQUFRLFNBQVUsV0FBVztBQUNwQyxnQkFBSSxTQUFTLFNBQVMsU0FBUztBQUMvQixpQkFBSyxRQUFRLFNBQVUsS0FBSztBQUN4QixrQkFBSSxXQUFXLHNCQUFzQixLQUFLLFNBQVM7QUFDbkQsa0JBQUksQ0FBQyxZQUFhLFdBQVcsWUFBWSxTQUFTLFVBQVUsUUFBWTtBQUNwRSxvQkFBSSxRQUFRQSxJQUFHLFlBQVksYUFBYSxlQUFlQSxJQUFHLGFBQWE7QUFDbkUsMEJBQVEsS0FBSyxXQUFXO0FBQUEsb0JBQ3BCLEtBQUssV0FBWTtBQUFFLDZCQUFPLEtBQUssTUFBTSxTQUFTO0FBQUEsb0JBQUU7QUFBQSxvQkFDaEQsS0FBSyxTQUFVLE9BQU87QUFDbEIscUNBQWUsTUFBTSxXQUFXLEVBQUUsT0FBYyxVQUFVLE1BQU0sY0FBYyxNQUFNLFlBQVksS0FBSSxDQUFFO0FBQUEsb0JBQ3RJO0FBQUEsa0JBQ0EsQ0FBeUI7QUFBQSxnQkFDekIsT0FDeUI7QUFDRCxzQkFBSSxTQUFTLElBQUksSUFBSUEsSUFBRyxNQUFNLFdBQVcsTUFBTTtBQUFBLGdCQUN2RTtBQUFBLGNBQ0E7QUFBQSxZQUNBLENBQWE7QUFBQSxVQUNiLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsZ0JBQWdCQSxLQUFJLE1BQU07QUFDL0IsZUFBSyxRQUFRLFNBQVUsS0FBSztBQUN4QixxQkFBUyxPQUFPLEtBQUs7QUFDakIsa0JBQUksSUFBSSxHQUFHLGFBQWFBLElBQUc7QUFDdkIsdUJBQU8sSUFBSSxHQUFHO0FBQUEsWUFDbEM7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsa0JBQWtCLEdBQUcsR0FBRztBQUM3QixpQkFBTyxFQUFFLEtBQUssVUFBVSxFQUFFLEtBQUs7QUFBQSxRQUN2QztBQUNJLGlCQUFTLGFBQWFBLEtBQUksWUFBWSxpQkFBaUIsUUFBUTtBQUMzRCxjQUFJLGVBQWVBLElBQUc7QUFDdEIsY0FBSSxnQkFBZ0IsaUJBQWlCLFNBQVMsT0FBTyxLQUFLLENBQUMsYUFBYSxPQUFPO0FBQzNFLHlCQUFhLFFBQVEsa0JBQWtCLFNBQVMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUMzRSxZQUFBQSxJQUFHLFlBQVksS0FBSyxPQUFPO0FBQUEsVUFDdkM7QUFDUSxjQUFJLFFBQVFBLElBQUcsbUJBQW1CLGFBQWFBLElBQUcsYUFBYSxZQUFZO0FBQzNFLGdCQUFNLE9BQU8sZUFBZTtBQUM1QixnQkFBTSxZQUFZLE1BQU0sTUFBTTtBQUM5QixjQUFJLG9CQUFvQixNQUFNLFFBQVEsS0FBSyxLQUFLO0FBQ2hELGNBQUksWUFBWSxJQUFJLGFBQWE7QUFDakMsbUJBQVMsV0FBWTtBQUNqQixnQkFBSSxRQUFRO0FBQ1osZ0JBQUksWUFBWTtBQUNoQixnQkFBSSxlQUFlLEdBQUc7QUFDbEIsbUJBQUssWUFBWSxFQUFFLFFBQVEsU0FBVSxXQUFXO0FBQzVDLDRCQUFZLGlCQUFpQixXQUFXLGFBQWEsU0FBUyxFQUFFLFNBQVMsYUFBYSxTQUFTLEVBQUUsT0FBTztBQUFBLGNBQzVILENBQWlCO0FBQ0QsdUNBQXlCQSxLQUFJLGVBQWU7QUFDNUMsMkJBQWEsT0FBTyxXQUFZO0FBQUUsdUJBQU9BLElBQUcsR0FBRyxTQUFTLEtBQUssS0FBSztBQUFBLGNBQUUsQ0FBRSxFQUFFLE1BQU0saUJBQWlCO0FBQUEsWUFDL0csT0FDaUI7QUFDRCx1Q0FBeUJBLEtBQUksZUFBZTtBQUM1QyxxQkFBTyxtQkFBbUJBLEtBQUksT0FBTyxVQUFVLEVBQzFDLEtBQUssU0FBVTZCLGFBQVk7QUFBRSx1QkFBTyx1QkFBdUI3QixLQUFJNkIsYUFBWSxPQUFPLGVBQWU7QUFBQSxjQUFFLENBQUUsRUFDckcsTUFBTSxpQkFBaUI7QUFBQSxZQUM1QztBQUFBLFVBQ0EsQ0FBUztBQUFBLFFBQ1Q7QUFDSSxpQkFBUyxvQkFBb0I3QixLQUFJLGlCQUFpQjtBQUM5Qyw4QkFBb0JBLElBQUcsV0FBVyxlQUFlO0FBQ2pELGNBQUksZ0JBQWdCLEdBQUcsVUFBVSxPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsaUJBQWlCLFNBQVMsT0FBTyxHQUFHO0FBQzlGLDRCQUFnQixHQUFHLGtCQUFrQixPQUFPLEVBQUUsSUFBSSxLQUFLLEtBQU0sZ0JBQWdCLEdBQUcsVUFBVSxLQUFNLENBQUMsR0FBRyxTQUFTO0FBQUEsVUFDekg7QUFDUSxjQUFJLGVBQWUsa0JBQWtCQSxLQUFJQSxJQUFHLE9BQU8sZUFBZTtBQUNsRSxxQ0FBMkJBLEtBQUlBLElBQUcsV0FBVyxlQUFlO0FBQzVELGNBQUksT0FBTyxjQUFjLGNBQWNBLElBQUcsU0FBUztBQUNuRCxjQUFJLFVBQVUsU0FBVThCLGNBQWE7QUFDakMsZ0JBQUlBLGFBQVksT0FBTyxVQUFVQSxhQUFZLFVBQVU7QUFDbkQsc0JBQVEsS0FBSyxvQ0FBb0MsT0FBT0EsYUFBWSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pJLHFCQUFPLEVBQUUsT0FBTyxPQUFNO0FBQUEsWUFDdEM7QUFDWSxnQkFBSSxRQUFRLGdCQUFnQixZQUFZQSxhQUFZLElBQUk7QUFDeEQsWUFBQUEsYUFBWSxJQUFJLFFBQVEsU0FBVSxLQUFLO0FBQ25DLGtCQUFJO0FBQ0Esd0JBQVEsTUFBTSwrQ0FBK0MsT0FBT0EsYUFBWSxNQUFNLEdBQUcsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQzlHLHVCQUFTLE9BQU8sR0FBRztBQUFBLFlBQ25DLENBQWE7QUFBQSxVQUNiO0FBQ1EsbUJBQVMsS0FBSyxHQUFHN0IsTUFBSyxLQUFLLFFBQVEsS0FBS0EsSUFBRyxRQUFRLE1BQU07QUFDckQsZ0JBQUksY0FBY0EsSUFBRyxFQUFFO0FBQ3ZCLGdCQUFJLFVBQVUsUUFBUSxXQUFXO0FBQ2pDLGdCQUFJLE9BQU8sWUFBWTtBQUNuQixxQkFBTyxRQUFRO0FBQUEsVUFDL0I7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsbUJBQW1CRCxLQUFJLE9BQU8sWUFBWTtBQUMvQyxjQUFJLE1BQU0sV0FBVyxTQUFTLE9BQU8sR0FBRztBQUNwQyxtQkFBTyxNQUFNLE1BQU0sT0FBTyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssU0FBVSxhQUFhO0FBQ25FLHFCQUFPLGVBQWUsT0FBTyxjQUFjO0FBQUEsWUFDM0QsQ0FBYTtBQUFBLFVBQ2IsT0FDYTtBQUNELG1CQUFPLGFBQWEsUUFBUSxVQUFVO0FBQUEsVUFDbEQ7QUFBQSxRQUNBO0FBQ0ksaUJBQVMsdUJBQXVCQSxLQUFJLFlBQVksT0FBTyxpQkFBaUI7QUFDcEUsY0FBSSxRQUFRLENBQUE7QUFDWixjQUFJLFdBQVdBLElBQUc7QUFDbEIsY0FBSSxlQUFlQSxJQUFHLFlBQVksa0JBQWtCQSxLQUFJQSxJQUFHLE9BQU8sZUFBZTtBQUNqRixjQUFJLFlBQVksU0FBUyxPQUFPLFNBQVUsR0FBRztBQUFFLG1CQUFPLEVBQUUsS0FBSyxXQUFXO0FBQUEsVUFBVyxDQUFFO0FBQ3JGLGNBQUksVUFBVSxXQUFXLEdBQUc7QUFDeEIsbUJBQU8sYUFBYSxRQUFPO0FBQUEsVUFDdkM7QUFDUSxvQkFBVSxRQUFRLFNBQVUsU0FBUztBQUNqQyxrQkFBTSxLQUFLLFdBQVk7QUFDbkIsa0JBQUksWUFBWTtBQUNoQixrQkFBSSxZQUFZLFFBQVEsS0FBSztBQUM3Qix5Q0FBMkJBLEtBQUksV0FBVyxlQUFlO0FBQ3pELHlDQUEyQkEsS0FBSSxXQUFXLGVBQWU7QUFDekQsNkJBQWVBLElBQUcsWUFBWTtBQUM5QixrQkFBSSxPQUFPLGNBQWMsV0FBVyxTQUFTO0FBQzdDLG1CQUFLLElBQUksUUFBUSxTQUFVLE9BQU87QUFDOUIsNEJBQVksaUJBQWlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLFNBQVMsTUFBTSxDQUFDLEVBQUUsT0FBTztBQUFBLGNBQzdGLENBQWlCO0FBQ0QsbUJBQUssT0FBTyxRQUFRLFNBQVUsUUFBUTtBQUNsQyxvQkFBSSxPQUFPLFVBQVU7QUFDakIsd0JBQU0sSUFBSSxXQUFXLFFBQVEsMENBQTBDO0FBQUEsZ0JBQy9GLE9BQ3lCO0FBQ0Qsc0JBQUksVUFBVSxnQkFBZ0IsWUFBWSxPQUFPLElBQUk7QUFDckQseUJBQU8sSUFBSSxRQUFRLFNBQVUsS0FBSztBQUFFLDJCQUFPLFNBQVMsU0FBUyxHQUFHO0FBQUEsbUJBQUk7QUFDcEUseUJBQU8sT0FBTyxRQUFRLFNBQVUsS0FBSztBQUNqQyw0QkFBUSxZQUFZLElBQUksSUFBSTtBQUM1Qiw2QkFBUyxTQUFTLEdBQUc7QUFBQSxrQkFDakQsQ0FBeUI7QUFDRCx5QkFBTyxJQUFJLFFBQVEsU0FBVSxTQUFTO0FBQUUsMkJBQU8sUUFBUSxZQUFZLE9BQU87QUFBQSxtQkFBSTtBQUFBLGdCQUN0RztBQUFBLGNBQ0EsQ0FBaUI7QUFDRCxrQkFBSSxpQkFBaUIsUUFBUSxLQUFLO0FBQ2xDLGtCQUFJLGtCQUFrQixRQUFRLEtBQUssVUFBVSxZQUFZO0FBQ3JELHlDQUF5QkEsS0FBSSxlQUFlO0FBQzVDLHNCQUFNLGtCQUFrQixDQUFBO0FBQ3hCLG9CQUFJLGtCQUFrQixhQUFhLFNBQVM7QUFDNUMscUJBQUssSUFBSSxRQUFRLFNBQVUsT0FBTztBQUM5QixrQ0FBZ0IsS0FBSyxJQUFJLFVBQVUsS0FBSztBQUFBLGdCQUNoRSxDQUFxQjtBQUNELGdDQUFnQkEsS0FBSSxDQUFDQSxJQUFHLFlBQVksU0FBUyxDQUFDO0FBQzlDLDhCQUFjQSxLQUFJLENBQUNBLElBQUcsWUFBWSxTQUFTLEdBQUcsS0FBSyxlQUFlLEdBQUcsZUFBZTtBQUNwRixzQkFBTSxTQUFTO0FBQ2Ysb0JBQUksMEJBQTBCLGdCQUFnQixjQUFjO0FBQzVELG9CQUFJLHlCQUF5QjtBQUN6QiwwQ0FBdUI7QUFBQSxnQkFDL0M7QUFDb0Isb0JBQUk7QUFDSixvQkFBSSxrQkFBa0IsYUFBYSxPQUFPLFdBQVk7QUFDbEQsa0NBQWdCLGVBQWUsS0FBSztBQUNwQyxzQkFBSSxlQUFlO0FBQ2Ysd0JBQUkseUJBQXlCO0FBQ3pCLDBCQUFJLGNBQWMsd0JBQXdCLEtBQUssTUFBTSxJQUFJO0FBQ3pELG9DQUFjLEtBQUssYUFBYSxXQUFXO0FBQUEsb0JBQzNFO0FBQUEsa0JBQ0E7QUFBQSxnQkFDQSxDQUFxQjtBQUNELHVCQUFRLGlCQUFpQixPQUFPLGNBQWMsU0FBUyxhQUNuRCxhQUFhLFFBQVEsYUFBYSxJQUFJLGdCQUFnQixLQUFLLFdBQVk7QUFBRSx5QkFBTztBQUFBLGlCQUFnQjtBQUFBLGNBQ3hIO0FBQUEsWUFDQSxDQUFhO0FBQ0Qsa0JBQU0sS0FBSyxTQUFVLFVBQVU7QUFDM0Isa0JBQUksWUFBWSxRQUFRLEtBQUs7QUFDN0Isa0NBQW9CLFdBQVcsUUFBUTtBQUN2Qyw4QkFBZ0JBLEtBQUksQ0FBQ0EsSUFBRyxZQUFZLFNBQVMsQ0FBQztBQUM5Qyw0QkFBY0EsS0FBSSxDQUFDQSxJQUFHLFlBQVksU0FBUyxHQUFHQSxJQUFHLGFBQWFBLElBQUcsU0FBUztBQUMxRSxvQkFBTSxTQUFTQSxJQUFHO0FBQUEsWUFDbEMsQ0FBYTtBQUNELGtCQUFNLEtBQUssU0FBVSxVQUFVO0FBQzNCLGtCQUFJQSxJQUFHLE1BQU0saUJBQWlCLFNBQVMsT0FBTyxHQUFHO0FBQzdDLG9CQUFJLEtBQUssS0FBS0EsSUFBRyxNQUFNLFVBQVUsRUFBRSxNQUFNLFFBQVEsS0FBSyxTQUFTO0FBQzNELGtCQUFBQSxJQUFHLE1BQU0sa0JBQWtCLE9BQU87QUFDbEMseUJBQU9BLElBQUcsVUFBVTtBQUNwQixrQkFBQUEsSUFBRyxjQUFjQSxJQUFHLFlBQVksT0FBTyxTQUFVLE1BQU07QUFBRSwyQkFBTyxTQUFTO0FBQUEsbUJBQVU7QUFBQSxnQkFDM0csT0FDeUI7QUFDRCwyQkFBUyxZQUFZLE9BQU8sRUFBRSxJQUFJLFFBQVEsS0FBSyxTQUFTLFNBQVM7QUFBQSxnQkFDekY7QUFBQSxjQUNBO0FBQUEsWUFDQSxDQUFhO0FBQUEsVUFDYixDQUFTO0FBQ0QsbUJBQVMsV0FBVztBQUNoQixtQkFBTyxNQUFNLFNBQVMsYUFBYSxRQUFRLE1BQU0sTUFBSyxFQUFHLE1BQU0sUUFBUSxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQ25GLGFBQWEsUUFBTztBQUFBLFVBQ3BDO0FBQ1EsaUJBQU8sU0FBUSxFQUFHLEtBQUssV0FBWTtBQUMvQixnQ0FBb0IsY0FBYyxlQUFlO0FBQUEsVUFDN0QsQ0FBUztBQUFBLFFBQ1Q7QUFDSSxpQkFBUyxjQUFjLFdBQVcsV0FBVztBQUN6QyxjQUFJLE9BQU87QUFBQSxZQUNQLEtBQUssQ0FBQTtBQUFBLFlBQ0wsS0FBSyxDQUFBO0FBQUEsWUFDTCxRQUFRLENBQUE7QUFBQTtBQUVaLGNBQUk7QUFDSixlQUFLLFNBQVMsV0FBVztBQUNyQixnQkFBSSxDQUFDLFVBQVUsS0FBSztBQUNoQixtQkFBSyxJQUFJLEtBQUssS0FBSztBQUFBLFVBQ25DO0FBQ1EsZUFBSyxTQUFTLFdBQVc7QUFDckIsZ0JBQUksU0FBUyxVQUFVLEtBQUssR0FBRyxTQUFTLFVBQVUsS0FBSztBQUN2RCxnQkFBSSxDQUFDLFFBQVE7QUFDVCxtQkFBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQztBQUFBLFlBQzdDLE9BQ2lCO0FBQ0Qsa0JBQUksU0FBUztBQUFBLGdCQUNULE1BQU07QUFBQSxnQkFDTixLQUFLO0FBQUEsZ0JBQ0wsVUFBVTtBQUFBLGdCQUNWLEtBQUssQ0FBQTtBQUFBLGdCQUNMLEtBQUssQ0FBQTtBQUFBLGdCQUNMLFFBQVEsQ0FBQTtBQUFBO0FBRVosa0JBQ0EsTUFBTSxPQUFPLFFBQVEsV0FBVyxRQUFVLE1BQU0sT0FBTyxRQUFRLFdBQVcsT0FDckUsT0FBTyxRQUFRLFNBQVMsT0FBTyxRQUFRLE1BQU87QUFDL0MsdUJBQU8sV0FBVztBQUNsQixxQkFBSyxPQUFPLEtBQUssTUFBTTtBQUFBLGNBQzNDLE9BQ3FCO0FBQ0Qsb0JBQUksYUFBYSxPQUFPO0FBQ3hCLG9CQUFJLGFBQWEsT0FBTztBQUN4QixvQkFBSSxVQUFVO0FBQ2QscUJBQUssV0FBVyxZQUFZO0FBQ3hCLHNCQUFJLENBQUMsV0FBVyxPQUFPO0FBQ25CLDJCQUFPLElBQUksS0FBSyxPQUFPO0FBQUEsZ0JBQ25EO0FBQ29CLHFCQUFLLFdBQVcsWUFBWTtBQUN4QixzQkFBSSxTQUFTLFdBQVcsT0FBTyxHQUFHLFNBQVMsV0FBVyxPQUFPO0FBQzdELHNCQUFJLENBQUM7QUFDRCwyQkFBTyxJQUFJLEtBQUssTUFBTTtBQUFBLDJCQUNqQixPQUFPLFFBQVEsT0FBTztBQUMzQiwyQkFBTyxPQUFPLEtBQUssTUFBTTtBQUFBLGdCQUNyRDtBQUNvQixvQkFBSSxPQUFPLElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxTQUFTLEtBQUssT0FBTyxPQUFPLFNBQVMsR0FBRztBQUM1RSx1QkFBSyxPQUFPLEtBQUssTUFBTTtBQUFBLGdCQUMvQztBQUFBLGNBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUNRLGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLFlBQVksVUFBVSxXQUFXLFNBQVMsU0FBUztBQUN4RCxjQUFJLFFBQVEsU0FBUyxHQUFHLGtCQUFrQixXQUFXLFFBQVEsVUFDekQsRUFBRSxTQUFTLFFBQVEsU0FBUyxlQUFlLFFBQVEsS0FBSSxJQUN2RCxFQUFFLGVBQWUsUUFBUSxNQUFNO0FBQ25DLGtCQUFRLFFBQVEsU0FBVSxLQUFLO0FBQUUsbUJBQU8sU0FBUyxPQUFPLEdBQUc7QUFBQSxXQUFJO0FBQy9ELGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLG9CQUFvQixXQUFXLFVBQVU7QUFDOUMsZUFBSyxTQUFTLEVBQUUsUUFBUSxTQUFVLFdBQVc7QUFDekMsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLFNBQVMsU0FBUyxHQUFHO0FBQ25ELGtCQUFJO0FBQ0Esd0JBQVEsTUFBTSxpQ0FBaUMsU0FBUztBQUM1RCwwQkFBWSxVQUFVLFdBQVcsVUFBVSxTQUFTLEVBQUUsU0FBUyxVQUFVLFNBQVMsRUFBRSxPQUFPO0FBQUEsWUFDM0c7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsb0JBQW9CLFdBQVcsVUFBVTtBQUM5QyxhQUFHLE1BQU0sS0FBSyxTQUFTLEdBQUcsZ0JBQWdCLEVBQUUsUUFBUSxTQUFVLFdBQVc7QUFDckUsbUJBQU8sVUFBVSxTQUFTLEtBQUssUUFBUSxTQUFTLEdBQUcsa0JBQWtCLFNBQVM7QUFBQSxVQUMxRixDQUFTO0FBQUEsUUFDVDtBQUNJLGlCQUFTLFNBQVMsT0FBTyxLQUFLO0FBQzFCLGdCQUFNLFlBQVksSUFBSSxNQUFNLElBQUksU0FBUyxFQUFFLFFBQVEsSUFBSSxRQUFRLFlBQVksSUFBSSxNQUFLLENBQUU7QUFBQSxRQUM5RjtBQUNJLGlCQUFTLGtCQUFrQkEsS0FBSSxPQUFPLFVBQVU7QUFDNUMsY0FBSSxlQUFlLENBQUE7QUFDbkIsY0FBSSxlQUFlLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCx1QkFBYSxRQUFRLFNBQVUsV0FBVztBQUN0QyxnQkFBSSxRQUFRLFNBQVMsWUFBWSxTQUFTO0FBQzFDLGdCQUFJLFVBQVUsTUFBTTtBQUNwQixnQkFBSSxVQUFVLGdCQUFnQixnQkFBZ0IsT0FBTyxHQUFHLFdBQVcsSUFBSSxNQUFNLE9BQU8sQ0FBQyxDQUFDLE1BQU0sZUFBZSxXQUFXLE9BQU8sWUFBWSxVQUFVLElBQUk7QUFDdkosZ0JBQUksVUFBVSxDQUFBO0FBQ2QscUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxXQUFXLFFBQVEsRUFBRSxHQUFHO0FBQzlDLGtCQUFJLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxDQUFDLENBQUM7QUFDOUMsd0JBQVUsU0FBUztBQUNuQixrQkFBSSxRQUFRLGdCQUFnQixTQUFTLE1BQU0sU0FBUyxDQUFDLENBQUMsU0FBUyxRQUFRLENBQUMsQ0FBQyxTQUFTLFlBQVksT0FBTyxXQUFXLE9BQU8sWUFBWSxVQUFVLEtBQUs7QUFDbEosc0JBQVEsS0FBSyxLQUFLO0FBQUEsWUFDbEM7QUFDWSx5QkFBYSxTQUFTLElBQUksa0JBQWtCLFdBQVcsU0FBUyxPQUFPO0FBQUEsVUFDbkYsQ0FBUztBQUNELGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLGlCQUFpQkEsS0FBSSxPQUFPLFVBQVU7QUFDM0MsVUFBQUEsSUFBRyxRQUFRLE1BQU0sVUFBVTtBQUMzQixjQUFJLGVBQWVBLElBQUcsWUFBWSxrQkFBa0JBLEtBQUksT0FBTyxRQUFRO0FBQ3ZFLFVBQUFBLElBQUcsY0FBYyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsd0JBQWNBLEtBQUksQ0FBQ0EsSUFBRyxVQUFVLEdBQUcsS0FBSyxZQUFZLEdBQUcsWUFBWTtBQUFBLFFBQzNFO0FBQ0ksaUJBQVMsc0JBQXNCQSxLQUFJLFVBQVU7QUFDekMsY0FBSSxrQkFBa0Isa0JBQWtCQSxLQUFJQSxJQUFHLE9BQU8sUUFBUTtBQUM5RCxjQUFJLE9BQU8sY0FBYyxpQkFBaUJBLElBQUcsU0FBUztBQUN0RCxpQkFBTyxFQUFFLEtBQUssSUFBSSxVQUFVLEtBQUssT0FBTyxLQUFLLFNBQVUsSUFBSTtBQUFFLG1CQUFPLEdBQUcsSUFBSSxVQUFVLEdBQUcsT0FBTztBQUFBLFVBQU8sQ0FBRTtBQUFBLFFBQ2hIO0FBQ0ksaUJBQVMsMkJBQTJCQSxLQUFJLFFBQVEsVUFBVTtBQUN0RCxjQUFJLGFBQWEsU0FBUyxHQUFHO0FBQzdCLG1CQUFTLElBQUksR0FBRyxJQUFJLFdBQVcsUUFBUSxFQUFFLEdBQUc7QUFDeEMsZ0JBQUksWUFBWSxXQUFXLENBQUM7QUFDNUIsZ0JBQUksUUFBUSxTQUFTLFlBQVksU0FBUztBQUMxQyxZQUFBQSxJQUFHLGFBQWEsWUFBWTtBQUM1QixxQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFdBQVcsUUFBUSxFQUFFLEdBQUc7QUFDOUMsa0JBQUksWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUNsQyxrQkFBSSxVQUFVLE1BQU0sTUFBTSxTQUFTLEVBQUU7QUFDckMsa0JBQUksWUFBWSxPQUFPLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUk7QUFDekYsa0JBQUksT0FBTyxTQUFTLEdBQUc7QUFDbkIsb0JBQUksWUFBWSxPQUFPLFNBQVMsRUFBRSxVQUFVLFNBQVM7QUFDckQsb0JBQUksV0FBVztBQUNYLDRCQUFVLE9BQU87QUFDakIseUJBQU8sT0FBTyxTQUFTLEVBQUUsVUFBVSxTQUFTO0FBQzVDLHlCQUFPLFNBQVMsRUFBRSxVQUFVLFNBQVMsSUFBSTtBQUFBLGdCQUNqRTtBQUFBLGNBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUNRLGNBQUksT0FBTyxjQUFjLGVBQWUsU0FBUyxLQUFLLFVBQVUsU0FBUyxLQUNyRSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsU0FBUyxLQUM3QyxRQUFRLHFCQUFxQixtQkFBbUIsUUFBUSxxQkFDeEQsR0FBRyxPQUFPLFVBQVUsVUFBVSxNQUFNLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLO0FBQ2hFLFlBQUFBLElBQUcsYUFBYTtBQUFBLFVBQzVCO0FBQUEsUUFDQTtBQUNJLGlCQUFTLGlCQUFpQixtQkFBbUI7QUFDekMsaUJBQU8sa0JBQWtCLE1BQU0sR0FBRyxFQUFFLElBQUksU0FBVSxPQUFPLFVBQVU7QUFDL0QsZ0JBQUlDO0FBQ0osZ0JBQUksWUFBWSxNQUFNLE1BQU0sR0FBRztBQUMvQixnQkFBSUwsU0FBUUssTUFBSyxVQUFVLENBQUMsT0FBTyxRQUFRQSxRQUFPLFNBQVMsU0FBU0EsSUFBRyxLQUFJO0FBQzNFLG9CQUFRLFVBQVUsQ0FBQyxFQUFFLEtBQUk7QUFDekIsZ0JBQUksT0FBTyxNQUFNLFFBQVEsZ0JBQWdCLEVBQUU7QUFDM0MsZ0JBQUksVUFBVSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssTUFBTSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJO0FBQzFFLG1CQUFPLGdCQUFnQixNQUFNLFdBQVcsTUFBTSxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSyxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssR0FBRyxRQUFRLE9BQU8sR0FBRyxhQUFhLEdBQUdMLEtBQUk7QUFBQSxVQUN4SixDQUFTO0FBQUEsUUFDVDtBQUVJLFlBQUksVUFBWSxXQUFZO0FBQ3hCLG1CQUFTbUMsV0FBVTtBQUFBLFVBQzNCO0FBQ1EsVUFBQUEsU0FBUSxVQUFVLHFCQUFxQixTQUFVLE1BQU0sU0FBUyxTQUFTO0FBQ3JFLG1CQUFPLGtCQUFrQixNQUFNLFNBQVMsT0FBTztBQUFBLFVBQzNEO0FBQ1EsVUFBQUEsU0FBUSxVQUFVLG9CQUFvQixTQUFVLG1CQUFtQjtBQUMvRCxtQkFBTyxpQkFBaUIsaUJBQWlCO0FBQUEsVUFDckQ7QUFDUSxVQUFBQSxTQUFRLFVBQVUsbUJBQW1CLFNBQVUsUUFBUSxXQUFXO0FBQzlELGdCQUFJLFFBQVE7QUFDWixpQkFBSyxNQUFNLEVBQUUsUUFBUSxTQUFVLFdBQVc7QUFDdEMsa0JBQUksT0FBTyxTQUFTLE1BQU0sTUFBTTtBQUM1QixvQkFBSSxVQUFVLE1BQU0sa0JBQWtCLE9BQU8sU0FBUyxDQUFDO0FBQ3ZELG9CQUFJLFVBQVUsUUFBUSxNQUFLO0FBQzNCLG9CQUFJLENBQUMsU0FBUztBQUNWLHdCQUFNLElBQUksV0FBVyxPQUFPLDhCQUE4QixZQUFZLE9BQU8sT0FBTyxTQUFTLENBQUM7QUFBQSxnQkFDdEg7QUFDb0Isd0JBQVEsU0FBUztBQUNqQixvQkFBSSxRQUFRO0FBQ1Isd0JBQU0sSUFBSSxXQUFXLE9BQU8sbUNBQW1DO0FBQ25FLHdCQUFRLFFBQVEsU0FBVSxLQUFLO0FBQzNCLHNCQUFJLElBQUk7QUFDSiwwQkFBTSxJQUFJLFdBQVcsT0FBTyxzREFBc0Q7QUFDdEYsc0JBQUksQ0FBQyxJQUFJO0FBQ0wsMEJBQU0sSUFBSSxXQUFXLE9BQU8sc0RBQXNEO0FBQUEsZ0JBQzlHLENBQXFCO0FBQ0Qsb0JBQUksWUFBWSxNQUFNLG1CQUFtQixXQUFXLFNBQVMsT0FBTztBQUNwRSwwQkFBVSxTQUFTLElBQUk7QUFBQSxjQUMzQztBQUFBLFlBQ0EsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxVQUFBQSxTQUFRLFVBQVUsU0FBUyxTQUFVLFFBQVE7QUFDekMsZ0JBQUkvQixNQUFLLEtBQUs7QUFDZCxpQkFBSyxLQUFLLGVBQWUsS0FBSyxLQUFLLGVBQzdCLE9BQU8sS0FBSyxLQUFLLGNBQWMsTUFBTSxJQUNyQztBQUNOLGdCQUFJLFdBQVdBLElBQUc7QUFDbEIsZ0JBQUksYUFBYSxDQUFBO0FBQ2pCLGdCQUFJLFdBQVcsQ0FBQTtBQUNmLHFCQUFTLFFBQVEsU0FBVSxTQUFTO0FBQ2hDLHFCQUFPLFlBQVksUUFBUSxLQUFLLFlBQVk7QUFDNUMseUJBQVcsUUFBUSxLQUFLLFdBQVcsQ0FBQTtBQUNuQyxzQkFBUSxpQkFBaUIsWUFBWSxRQUFRO0FBQUEsWUFDN0QsQ0FBYTtBQUNELFlBQUFBLElBQUcsWUFBWTtBQUNmLDRCQUFnQkEsS0FBSSxDQUFDQSxJQUFHLFlBQVlBLEtBQUlBLElBQUcsWUFBWSxTQUFTLENBQUM7QUFDakUsMEJBQWNBLEtBQUksQ0FBQ0EsSUFBRyxZQUFZQSxLQUFJQSxJQUFHLFlBQVksV0FBVyxLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssUUFBUSxHQUFHLFFBQVE7QUFDM0csWUFBQUEsSUFBRyxjQUFjLEtBQUssUUFBUTtBQUM5QixtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQStCLFNBQVEsVUFBVSxVQUFVLFNBQVUsaUJBQWlCO0FBQ25ELGlCQUFLLEtBQUssaUJBQWlCLGdCQUFnQixLQUFLLEtBQUssa0JBQWtCLEtBQUssZUFBZTtBQUMzRixtQkFBTztBQUFBLFVBQ25CO0FBQ1EsaUJBQU9BO0FBQUEsUUFDZjtBQUVJLGlCQUFTLHlCQUF5Qi9CLEtBQUk7QUFDbEMsaUJBQU8scUJBQXFCLFFBQVEsV0FBVyxTQUFTK0IsU0FBUSxlQUFlO0FBQzNFLGlCQUFLLEtBQUsvQjtBQUNWLGlCQUFLLE9BQU87QUFBQSxjQUNSLFNBQVM7QUFBQSxjQUNULGNBQWM7QUFBQSxjQUNkLFVBQVUsQ0FBQTtBQUFBLGNBQ1YsUUFBUSxDQUFBO0FBQUEsY0FDUixnQkFBZ0I7QUFBQTtVQUVoQyxDQUFTO0FBQUEsUUFDVDtBQUVJLGlCQUFTLGdCQUFnQmdDLFlBQVcsYUFBYTtBQUM3QyxjQUFJLFlBQVlBLFdBQVUsWUFBWTtBQUN0QyxjQUFJLENBQUMsV0FBVztBQUNaLHdCQUFZQSxXQUFVLFlBQVksSUFBSSxJQUFJLFFBQVEsWUFBWTtBQUFBLGNBQzFELFFBQVEsQ0FBQTtBQUFBLGNBQ1IsV0FBV0E7QUFBQSxjQUNYO0FBQUEsWUFDaEIsQ0FBYTtBQUNELHNCQUFVLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLFFBQVE7QUFBQSxVQUMzRDtBQUNRLGlCQUFPLFVBQVUsTUFBTSxTQUFTO0FBQUEsUUFDeEM7QUFDSSxpQkFBUyxtQkFBbUJBLFlBQVc7QUFDbkMsaUJBQU9BLGNBQWEsT0FBT0EsV0FBVSxjQUFjO0FBQUEsUUFDM0Q7QUFDSSxpQkFBUyxpQkFBaUIvQixLQUFJO0FBQzFCLGNBQUkrQixhQUFZL0IsSUFBRyxXQUFXLGNBQWNBLElBQUc7QUFDL0MsaUJBQU8sbUJBQW1CK0IsVUFBUyxJQUM3QixRQUFRLFFBQVFBLFdBQVUsVUFBUyxDQUFFLEVBQUUsS0FBSyxTQUFVLE9BQU87QUFDM0QsbUJBQU8sTUFDRixJQUFJLFNBQVUsTUFBTTtBQUFFLHFCQUFPLEtBQUs7QUFBQSxZQUFLLENBQUUsRUFDekMsT0FBTyxTQUFVLE1BQU07QUFBRSxxQkFBTyxTQUFTO0FBQUEsWUFBVyxDQUFFO0FBQUEsVUFDM0UsQ0FBYSxJQUNDLGdCQUFnQkEsWUFBVyxXQUFXLEVBQUUsYUFBWSxFQUFHLFlBQVc7QUFBQSxRQUNoRjtBQUNJLGlCQUFTLG1CQUFtQi9CLEtBQUksTUFBTTtBQUNsQyxjQUFJK0IsYUFBWS9CLElBQUcsV0FBVyxjQUFjQSxJQUFHO0FBQy9DLFdBQUMsbUJBQW1CK0IsVUFBUyxLQUN6QixTQUFTLGNBQ1QsZ0JBQWdCQSxZQUFXLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBVSxDQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUEsUUFDakY7QUFDSSxpQkFBUyxtQkFBbUIvQixLQUFJLE1BQU07QUFDbEMsY0FBSStCLGFBQVkvQixJQUFHLFdBQVcsY0FBY0EsSUFBRztBQUMvQyxXQUFDLG1CQUFtQitCLFVBQVMsS0FDekIsU0FBUyxjQUNULGdCQUFnQkEsWUFBVyxXQUFXLEVBQUUsT0FBTyxJQUFJLEVBQUUsTUFBTSxHQUFHO0FBQUEsUUFDMUU7QUFFSSxpQkFBUyxJQUFJLElBQUk7QUFDYixpQkFBTyxTQUFTLFdBQVk7QUFDeEIsZ0JBQUksYUFBYTtBQUNqQixtQkFBTyxHQUFFO0FBQUEsVUFDckIsQ0FBUztBQUFBLFFBQ1Q7QUFFSSxpQkFBUyxXQUFXO0FBQ2hCLGNBQUksV0FBVyxDQUFDLFVBQVUsaUJBQ3RCLFdBQVcsS0FBSyxVQUFVLFNBQVMsS0FDbkMsQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLFNBQVM7QUFDOUMsY0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO0FBQ3hCLG1CQUFPLFFBQVEsUUFBTztBQUMxQixjQUFJO0FBQ0osaUJBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUztBQUNsQyxnQkFBSSxTQUFTLFdBQVk7QUFBRSxxQkFBTyxVQUFVLFVBQVMsRUFBRyxRQUFRLE9BQU87QUFBQSxZQUFFO0FBQ3pFLHlCQUFhLFlBQVksUUFBUSxHQUFHO0FBQ3BDLG1CQUFNO0FBQUEsVUFDbEIsQ0FBUyxFQUFFLFFBQVEsV0FBWTtBQUFFLG1CQUFPLGNBQWMsVUFBVTtBQUFBLFdBQUk7QUFBQSxRQUNwRTtBQUVJLFlBQUkvQjtBQUNKLGlCQUFTLGFBQWEsTUFBTTtBQUN4QixpQkFBTyxFQUFFLFVBQVU7QUFBQSxRQUMzQjtBQUNJLFlBQUlnQyxZQUFXLFNBQVUsWUFBWSxJQUFJO0FBQ3JDLGNBQUksTUFBTTtBQUNOLG1CQUFPLE1BQU0sVUFBVSxTQUFTLEVBQUUsR0FBRyxHQUFHLE1BQU0sWUFBWSxJQUFJLFVBQVUsU0FBUyxJQUFJLEtBQUssV0FBVSxJQUFLLEVBQUUsR0FBRyxHQUFHO0FBQUEsVUFDN0gsT0FDYTtBQUNELGdCQUFJLEtBQUssSUFBSUEsVUFBUTtBQUNyQixnQkFBSSxjQUFlLE9BQU8sWUFBYTtBQUNuQyxxQkFBTyxJQUFJLFVBQVU7QUFBQSxZQUNyQztBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFBQSxRQUNBO0FBQ0ksY0FBTUEsVUFBUyxZQUFZaEMsTUFBSztBQUFBLFVBQ3hCLEtBQUssU0FBVSxVQUFVO0FBQ3JCLFlBQUFpQyxhQUFZLE1BQU0sUUFBUTtBQUMxQixtQkFBTztBQUFBLFVBQ3ZCO0FBQUEsVUFDWSxRQUFRLFNBQVUsS0FBSztBQUNuQixxQkFBUyxNQUFNLEtBQUssR0FBRztBQUN2QixtQkFBTztBQUFBLFVBQ3ZCO0FBQUEsVUFDWSxTQUFTLFNBQVU5QixPQUFNO0FBQ3JCLGdCQUFJLFFBQVE7QUFDWixZQUFBQSxNQUFLLFFBQVEsU0FBVSxLQUFLO0FBQUUscUJBQU8sU0FBUyxPQUFPLEtBQUssR0FBRztBQUFBLGFBQUk7QUFDakUsbUJBQU87QUFBQSxVQUN2QjtBQUFBLFVBQ1ksUUFBUSxTQUFVLEtBQUs7QUFDbkIsZ0JBQUksT0FBTyxvQkFBb0IsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFO0FBQy9DLG1CQUFPLFFBQVFELEtBQUksS0FBSyxNQUFNLEdBQUcsS0FBSyxLQUFLQSxLQUFJLEtBQUssSUFBSSxHQUFHLEtBQUs7QUFBQSxVQUNoRjtBQUFBLFdBRVFGLElBQUcsY0FBYyxJQUFJLFdBQVk7QUFDN0IsaUJBQU8sb0JBQW9CLElBQUk7QUFBQSxRQUMzQyxHQUNRQSxJQUFFO0FBQ04saUJBQVMsU0FBUyxRQUFRLE1BQU0sSUFBSTtBQUNoQyxjQUFJLE9BQU9FLEtBQUksTUFBTSxFQUFFO0FBQ3ZCLGNBQUksTUFBTSxJQUFJO0FBQ1Y7QUFDSixjQUFJLE9BQU87QUFDUCxrQkFBTSxXQUFVO0FBQ3BCLGNBQUksYUFBYSxNQUFNO0FBQ25CLG1CQUFPLE9BQU8sUUFBUSxFQUFFLE1BQVksSUFBUSxHQUFHLEdBQUc7QUFDdEQsY0FBSSxPQUFPLE9BQU87QUFDbEIsY0FBSSxRQUFRLE9BQU87QUFDbkIsY0FBSUEsS0FBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFDMUIsbUJBQ00sU0FBUyxNQUFNLE1BQU0sRUFBRSxJQUN0QixPQUFPLElBQUksRUFBRSxNQUFZLElBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUk7QUFDOUQsbUJBQU8sVUFBVSxNQUFNO0FBQUEsVUFDbkM7QUFDUSxjQUFJQSxLQUFJLE1BQU0sT0FBTyxFQUFFLElBQUksR0FBRztBQUMxQixvQkFDTSxTQUFTLE9BQU8sTUFBTSxFQUFFLElBQ3ZCLE9BQU8sSUFBSSxFQUFFLE1BQVksSUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSTtBQUM5RCxtQkFBTyxVQUFVLE1BQU07QUFBQSxVQUNuQztBQUNRLGNBQUlBLEtBQUksTUFBTSxPQUFPLElBQUksSUFBSSxHQUFHO0FBQzVCLG1CQUFPLE9BQU87QUFDZCxtQkFBTyxJQUFJO0FBQ1gsbUJBQU8sSUFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJO0FBQUEsVUFDN0M7QUFDUSxjQUFJQSxLQUFJLElBQUksT0FBTyxFQUFFLElBQUksR0FBRztBQUN4QixtQkFBTyxLQUFLO0FBQ1osbUJBQU8sSUFBSTtBQUNYLG1CQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRSxJQUFJLElBQUk7QUFBQSxVQUNuRDtBQUNRLGNBQUksaUJBQWlCLENBQUMsT0FBTztBQUM3QixjQUFJLFFBQVEsQ0FBQyxPQUFPLEdBQUc7QUFDbkIsWUFBQStCLGFBQVksUUFBUSxJQUFJO0FBQUEsVUFDcEM7QUFDUSxjQUFJLFNBQVMsZ0JBQWdCO0FBQ3pCLFlBQUFBLGFBQVksUUFBUSxLQUFLO0FBQUEsVUFDckM7QUFBQSxRQUNBO0FBQ0ksaUJBQVNBLGFBQVksUUFBUSxRQUFRO0FBQ2pDLG1CQUFTLGFBQWFDLFNBQVFsQyxLQUFJO0FBQzlCLGdCQUFJLE9BQU9BLElBQUcsTUFBTSxLQUFLQSxJQUFHLElBQUksSUFBSUEsSUFBRyxHQUFHLElBQUlBLElBQUc7QUFDakQscUJBQVNrQyxTQUFRLE1BQU0sRUFBRTtBQUN6QixnQkFBSTtBQUNBLDJCQUFhQSxTQUFRLENBQUM7QUFDMUIsZ0JBQUk7QUFDQSwyQkFBYUEsU0FBUSxDQUFDO0FBQUEsVUFDdEM7QUFDUSxjQUFJLENBQUMsYUFBYSxNQUFNO0FBQ3BCLHlCQUFhLFFBQVEsTUFBTTtBQUFBLFFBQ3ZDO0FBQ0ksaUJBQVNDLGVBQWMsV0FBVyxXQUFXO0FBQ3pDLGNBQUksS0FBSyxvQkFBb0IsU0FBUztBQUN0QyxjQUFJLGNBQWMsR0FBRyxLQUFJO0FBQ3pCLGNBQUksWUFBWTtBQUNaLG1CQUFPO0FBQ1gsY0FBSSxJQUFJLFlBQVk7QUFDcEIsY0FBSSxLQUFLLG9CQUFvQixTQUFTO0FBQ3RDLGNBQUksY0FBYyxHQUFHLEtBQUssRUFBRSxJQUFJO0FBQ2hDLGNBQUksSUFBSSxZQUFZO0FBQ3BCLGlCQUFPLENBQUMsWUFBWSxRQUFRLENBQUMsWUFBWSxNQUFNO0FBQzNDLGdCQUFJakMsS0FBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssS0FBS0EsS0FBSSxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUs7QUFDL0MscUJBQU87QUFDWCxZQUFBQSxLQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxJQUNmLEtBQUssY0FBYyxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUcsUUFDcEMsS0FBSyxjQUFjLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRztBQUFBLFVBQ3ZEO0FBQ1EsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsb0JBQW9CLE1BQU07QUFDL0IsY0FBSSxRQUFRLGFBQWEsSUFBSSxJQUFJLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFJO0FBQ3ZELGlCQUFPO0FBQUEsWUFDSCxNQUFNLFNBQVUsS0FBSztBQUNqQixrQkFBSSxjQUFjLFVBQVUsU0FBUztBQUNyQyxxQkFBTyxPQUFPO0FBQ1Ysd0JBQVEsTUFBTSxHQUFDO0FBQUEsa0JBQ1gsS0FBSztBQUNELDBCQUFNLElBQUk7QUFDVix3QkFBSSxhQUFhO0FBQ2IsNkJBQU8sTUFBTSxFQUFFLEtBQUtBLEtBQUksS0FBSyxNQUFNLEVBQUUsSUFBSSxJQUFJO0FBQ3pDLGdDQUFRLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFDO0FBQUEsb0JBQzNFLE9BQ2lDO0FBQ0QsNkJBQU8sTUFBTSxFQUFFO0FBQ1gsZ0NBQVEsRUFBRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUM7QUFBQSxvQkFDM0U7QUFBQSxrQkFDd0IsS0FBSztBQUNELDBCQUFNLElBQUk7QUFDVix3QkFBSSxDQUFDLGVBQWVBLEtBQUksS0FBSyxNQUFNLEVBQUUsRUFBRSxLQUFLO0FBQ3hDLDZCQUFPLEVBQUUsT0FBTyxNQUFNLEdBQUcsTUFBTSxNQUFLO0FBQUEsa0JBQzVDLEtBQUs7QUFDRCx3QkFBSSxNQUFNLEVBQUUsR0FBRztBQUNYLDRCQUFNLElBQUk7QUFDViw4QkFBUSxFQUFFLElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBQztBQUN2QztBQUFBLG9CQUNoQztBQUFBLGtCQUN3QixLQUFLO0FBQ0QsNEJBQVEsTUFBTTtBQUFBLGdCQUMxQztBQUFBLGNBQ0E7QUFDZ0IscUJBQU8sRUFBRSxNQUFNLEtBQUk7QUFBQSxZQUNuQztBQUFBO1FBRUE7QUFDSSxpQkFBUyxVQUFVLFFBQVE7QUFDdkIsY0FBSUYsS0FBSU87QUFDUixjQUFJLFVBQVVQLE1BQUssT0FBTyxPQUFPLFFBQVFBLFFBQU8sU0FBUyxTQUFTQSxJQUFHLE1BQU0sUUFBUU8sTUFBSyxPQUFPLE9BQU8sUUFBUUEsUUFBTyxTQUFTLFNBQVNBLElBQUcsTUFBTTtBQUNoSixjQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sT0FBTyxLQUFLLE1BQU07QUFDM0MsY0FBSSxHQUFHO0FBQ0gsZ0JBQUksSUFBSSxNQUFNLE1BQU0sTUFBTTtBQUMxQixnQkFBSSxZQUFZLFNBQVMsQ0FBQSxHQUFJLE1BQU07QUFDbkMsZ0JBQUksZUFBZSxPQUFPLENBQUM7QUFDM0IsbUJBQU8sT0FBTyxhQUFhO0FBQzNCLG1CQUFPLEtBQUssYUFBYTtBQUN6QixtQkFBTyxDQUFDLElBQUksYUFBYSxDQUFDO0FBQzFCLHNCQUFVLENBQUMsSUFBSSxhQUFhLENBQUM7QUFDN0IsbUJBQU8sQ0FBQyxJQUFJO0FBQ1osc0JBQVUsSUFBSSxhQUFhLFNBQVM7QUFBQSxVQUNoRDtBQUNRLGlCQUFPLElBQUksYUFBYSxNQUFNO0FBQUEsUUFDdEM7QUFDSSxpQkFBUyxhQUFhUCxLQUFJO0FBQ3RCLGNBQUksSUFBSUEsSUFBRyxHQUFHLElBQUlBLElBQUc7QUFDckIsa0JBQVEsSUFBSyxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFLLElBQUksRUFBRSxJQUFJLEtBQUs7QUFBQSxRQUNwRTtBQUVJLGlCQUFTLHVCQUF1QixRQUFRLFFBQVE7QUFDNUMsZUFBSyxNQUFNLEVBQUUsUUFBUSxTQUFVLE1BQU07QUFDakMsZ0JBQUksT0FBTyxJQUFJO0FBQ1gsY0FBQWlDLGFBQVksT0FBTyxJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUM7QUFBQTtBQUV0QyxxQkFBTyxJQUFJLElBQUksc0JBQXNCLE9BQU8sSUFBSSxDQUFDO0FBQUEsVUFDakUsQ0FBUztBQUNELGlCQUFPO0FBQUEsUUFDZjtBQUVJLGlCQUFTLGVBQWUsS0FBSyxLQUFLO0FBQzlCLGlCQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLEdBQUcsRUFBRSxLQUFLLFNBQVUsS0FBSztBQUFFLG1CQUFPLElBQUksR0FBRyxLQUFLRSxlQUFjLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0FBQUEsV0FBSTtBQUFBLFFBQ25JO0FBRUksWUFBSSxRQUFRLENBQUE7QUFFWixZQUFJLGtCQUFrQixDQUFBO0FBQ3RCLFlBQUksaUJBQWlCO0FBQ3JCLGlCQUFTLHdCQUF3QixNQUFNLFlBQVk7QUFDL0MsaUNBQXVCLGlCQUFpQixJQUFJO0FBQzVDLGNBQUksQ0FBQyxnQkFBZ0I7QUFDakIsNkJBQWlCO0FBQ2pCLHVCQUFXLFdBQVk7QUFDbkIsK0JBQWlCO0FBQ2pCLGtCQUFJLFFBQVE7QUFDWixnQ0FBa0IsQ0FBQTtBQUNsQixtQ0FBcUIsT0FBTyxLQUFLO0FBQUEsWUFDakQsR0FBZSxDQUFDO0FBQUEsVUFDaEI7QUFBQSxRQUNBO0FBQ0ksaUJBQVMscUJBQXFCLGNBQWMsNEJBQTRCO0FBQ3BFLGNBQUksK0JBQStCLFFBQVE7QUFBRSx5Q0FBNkI7QUFBQSxVQUFNO0FBQ2hGLGNBQUksa0JBQWtCLG9CQUFJLElBQUc7QUFDN0IsY0FBSSxhQUFhLEtBQUs7QUFDbEIscUJBQVMsS0FBSyxHQUFHbkMsTUFBSyxPQUFPLE9BQU8sS0FBSyxHQUFHLEtBQUtBLElBQUcsUUFBUSxNQUFNO0FBQzlELGtCQUFJLFdBQVdBLElBQUcsRUFBRTtBQUNwQixzQ0FBd0IsVUFBVSxjQUFjLGlCQUFpQiwwQkFBMEI7QUFBQSxZQUMzRztBQUFBLFVBQ0EsT0FDYTtBQUNELHFCQUFTLE9BQU8sY0FBYztBQUMxQixrQkFBSSxRQUFRLHlCQUF5QixLQUFLLEdBQUc7QUFDN0Msa0JBQUksT0FBTztBQUNQLG9CQUFJLFNBQVMsTUFBTSxDQUFDLEdBQUcsWUFBWSxNQUFNLENBQUM7QUFDMUMsb0JBQUksV0FBVyxNQUFNLFNBQVMsT0FBTyxRQUFRLEdBQUcsRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUNuRSxvQkFBSTtBQUNBLDBDQUF3QixVQUFVLGNBQWMsaUJBQWlCLDBCQUEwQjtBQUFBLGNBQ25IO0FBQUEsWUFDQTtBQUFBLFVBQ0E7QUFDUSwwQkFBZ0IsUUFBUSxTQUFVLFNBQVM7QUFBRSxtQkFBTyxRQUFPO0FBQUEsV0FBSztBQUFBLFFBQ3hFO0FBQ0ksaUJBQVMsd0JBQXdCLFVBQVUsY0FBYyxvQkFBb0IsNEJBQTRCO0FBQ3JHLGNBQUksb0JBQW9CLENBQUE7QUFDeEIsbUJBQVMsS0FBSyxHQUFHQSxNQUFLLE9BQU8sUUFBUSxTQUFTLFFBQVEsS0FBSyxHQUFHLEtBQUtBLElBQUcsUUFBUSxNQUFNO0FBQ2hGLGdCQUFJTyxNQUFLUCxJQUFHLEVBQUUsR0FBRyxZQUFZTyxJQUFHLENBQUMsR0FBRyxVQUFVQSxJQUFHLENBQUM7QUFDbEQsZ0JBQUksa0JBQWtCLENBQUE7QUFDdEIscUJBQVMsS0FBSyxHQUFHLFlBQVksU0FBUyxLQUFLLFVBQVUsUUFBUSxNQUFNO0FBQy9ELGtCQUFJLFFBQVEsVUFBVSxFQUFFO0FBQ3hCLGtCQUFJLGVBQWUsY0FBYyxNQUFNLE1BQU0sR0FBRztBQUM1QyxzQkFBTSxZQUFZLFFBQVEsU0FBVSxTQUFTO0FBQUUseUJBQU8sbUJBQW1CLElBQUksT0FBTztBQUFBLGlCQUFJO0FBQUEsY0FDNUcsV0FDeUIsNEJBQTRCO0FBQ2pDLGdDQUFnQixLQUFLLEtBQUs7QUFBQSxjQUM5QztBQUFBLFlBQ0E7QUFDWSxnQkFBSTtBQUNBLGdDQUFrQixLQUFLLENBQUMsV0FBVyxlQUFlLENBQUM7QUFBQSxVQUNuRTtBQUNRLGNBQUksNEJBQTRCO0FBQzVCLHFCQUFTLEtBQUssR0FBRyxzQkFBc0IsbUJBQW1CLEtBQUssb0JBQW9CLFFBQVEsTUFBTTtBQUM3RixrQkFBSSxLQUFLLG9CQUFvQixFQUFFLEdBQUcsWUFBWSxHQUFHLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxDQUFDO0FBQzNFLHVCQUFTLFFBQVEsTUFBTSxTQUFTLElBQUk7QUFBQSxZQUNwRDtBQUFBLFVBQ0E7QUFBQSxRQUNBO0FBRUksaUJBQVMsVUFBVVIsS0FBSTtBQUNuQixjQUFJLFFBQVFBLElBQUc7QUFDZixjQUFJZ0MsYUFBWWhDLElBQUcsTUFBTTtBQUN6QixjQUFJLE1BQU0saUJBQWlCQSxJQUFHO0FBQzFCLG1CQUFPLE1BQU0sZUFBZSxLQUFLLFdBQVk7QUFBRSxxQkFBTyxNQUFNLGNBQ3hELFVBQVUsTUFBTSxXQUFXLElBQzNCQTtBQUFBLFlBQUcsQ0FBRTtBQUNiLGdCQUFNLGdCQUFnQjtBQUN0QixnQkFBTSxjQUFjO0FBQ3BCLGdCQUFNLGVBQWU7QUFDckIsY0FBSSxnQkFBZ0IsTUFBTTtBQUMxQixjQUFJLGtCQUFrQixLQUFLLE1BQU1BLElBQUcsUUFBUSxFQUFFO0FBQzlDLGNBQUksa0JBQWtCO0FBQ3RCLG1CQUFTLG1CQUFtQjtBQUN4QixnQkFBSSxNQUFNLGtCQUFrQjtBQUN4QixvQkFBTSxJQUFJLFdBQVcsZUFBZSx5QkFBeUI7QUFBQSxVQUM3RTtBQUNRLGNBQUksaUJBQWlCLE1BQU0sZ0JBQzNCLHFCQUFxQixNQUFNLGFBQWE7QUFDeEMsY0FBSSxZQUFZLFdBQVk7QUFBRSxtQkFBTyxJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDN0UsK0JBQWdCO0FBQ2hCLGtCQUFJLENBQUNnQztBQUNELHNCQUFNLElBQUksV0FBVyxXQUFVO0FBQ25DLGtCQUFJLFNBQVNoQyxJQUFHO0FBQ2hCLGtCQUFJLE1BQU0sTUFBTSxjQUFjLENBQUMsa0JBQzNCZ0MsV0FBVSxLQUFLLE1BQU0sSUFDckJBLFdBQVUsS0FBSyxRQUFRLGVBQWU7QUFDMUMsa0JBQUksQ0FBQztBQUNELHNCQUFNLElBQUksV0FBVyxXQUFVO0FBQ25DLGtCQUFJLFVBQVUsbUJBQW1CLE1BQU07QUFDdkMsa0JBQUksWUFBWSxLQUFLaEMsSUFBRyxjQUFjO0FBQ3RDLGtCQUFJLGtCQUFrQixLQUFLLFNBQVUsR0FBRztBQUNwQyxxQ0FBcUIsSUFBSTtBQUN6QixvQkFBSSxNQUFNLGNBQWMsQ0FBQ0EsSUFBRyxTQUFTLGNBQWM7QUFDL0Msc0JBQUksVUFBVTtBQUNkLHFDQUFtQixNQUFLO0FBQ3hCLHNCQUFJLE9BQU8sTUFBSztBQUNoQixzQkFBSSxTQUFTZ0MsV0FBVSxlQUFlLE1BQU07QUFDNUMseUJBQU8sWUFBWSxPQUFPLFVBQVUsS0FBSyxXQUFZO0FBQ2pELDJCQUFPLElBQUksV0FBVyxlQUFlLFlBQVksT0FBTyxRQUFRLGVBQWUsQ0FBQyxDQUFDO0FBQUEsa0JBQ3pHLENBQXFCO0FBQUEsZ0JBQ3JCLE9BQ3FCO0FBQ0QscUNBQW1CLFVBQVUsbUJBQW1CLE1BQU07QUFDdEQsc0JBQUksU0FBUyxFQUFFLGFBQWEsS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRTtBQUNwRCwrQkFBYSxTQUFTO0FBQ3RCLGtCQUFBaEMsSUFBRyxRQUFRLElBQUk7QUFDZixzQkFBSSxpQkFBaUI7QUFDakIsd0NBQW9CQSxLQUFJLGtCQUFrQjtBQUFBLGtCQUNsRTtBQUNvQiwrQkFBYUEsS0FBSSxTQUFTLElBQUksb0JBQW9CLE1BQU07QUFBQSxnQkFDNUU7QUFBQSxjQUNBLEdBQWUsTUFBTTtBQUNULGtCQUFJLFlBQVksS0FBSyxXQUFZO0FBQzdCLHFDQUFxQjtBQUNyQixvQkFBSSxRQUFRQSxJQUFHLFFBQVEsSUFBSTtBQUMzQixvQkFBSSxtQkFBbUIsTUFBTSxNQUFNLGdCQUFnQjtBQUNuRCxvQkFBSSxpQkFBaUIsU0FBUztBQUMxQixzQkFBSTtBQUNBLHdCQUFJLFdBQVcsTUFBTSxZQUFZLG9CQUFvQixnQkFBZ0IsR0FBRyxVQUFVO0FBQ2xGLHdCQUFJLE1BQU07QUFDTix1Q0FBaUJBLEtBQUksT0FBTyxRQUFRO0FBQUEseUJBQ25DO0FBQ0QsaURBQTJCQSxLQUFJQSxJQUFHLFdBQVcsUUFBUTtBQUNyRCwwQkFBSSxDQUFDLHNCQUFzQkEsS0FBSSxRQUFRLEtBQUssQ0FBQyxpQkFBaUI7QUFDMUQsZ0NBQVEsS0FBSyxrTEFBa0w7QUFDL0wsOEJBQU0sTUFBSztBQUNYLDBDQUFrQixNQUFNLFVBQVU7QUFDbEMsMENBQWtCO0FBQ2xCLCtCQUFPLFFBQVEsV0FBVztBQUFBLHNCQUMxRDtBQUFBLG9CQUNBO0FBQ3dCLDZDQUF5QkEsS0FBSSxRQUFRO0FBQUEsa0JBQzdELFNBQzJCLEdBQUc7QUFBQSxrQkFDOUI7QUFDZ0IsNEJBQVksS0FBS0EsR0FBRTtBQUNuQixzQkFBTSxrQkFBa0IsS0FBSyxTQUFVLElBQUk7QUFDdkMsd0JBQU0sVUFBVTtBQUNoQixrQkFBQUEsSUFBRyxHQUFHLGVBQWUsRUFBRSxLQUFLLEVBQUU7QUFBQSxnQkFDbEQsQ0FBaUI7QUFDRCxzQkFBTSxVQUFVLEtBQUssU0FBVSxJQUFJO0FBQy9CLGtCQUFBQSxJQUFHLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUFBLGdCQUMxQyxDQUFpQjtBQUNELG9CQUFJO0FBQ0EscUNBQW1CQSxJQUFHLE9BQU8sTUFBTTtBQUN2Qyx3QkFBTztBQUFBLGNBQ3ZCLEdBQWUsTUFBTTtBQUFBLFlBQ3JCLENBQVMsRUFBRSxNQUFNLFNBQVUsS0FBSztBQUNwQixzQkFBUSxRQUFRLFFBQVEsUUFBUSxTQUFTLFNBQVMsSUFBSSxNQUFJO0FBQUEsZ0JBQ3RELEtBQUs7QUFDRCxzQkFBSSxNQUFNLGlCQUFpQixHQUFHO0FBQzFCLDBCQUFNO0FBQ04sNEJBQVEsS0FBSyxxREFBcUQ7QUFDbEUsMkJBQU8sVUFBUztBQUFBLGtCQUN4QztBQUNvQjtBQUFBLGdCQUNKLEtBQUs7QUFDRCxzQkFBSSxrQkFBa0IsR0FBRztBQUNyQixzQ0FBa0I7QUFDbEIsMkJBQU8sVUFBUztBQUFBLGtCQUN4QztBQUNvQjtBQUFBLGNBQ3BCO0FBQ1kscUJBQU8sYUFBYSxPQUFPLEdBQUc7QUFBQSxZQUMxQyxDQUFTO0FBQUEsVUFBRTtBQUNILGlCQUFPLGFBQWEsS0FBSztBQUFBLFlBQ3JCO0FBQUEsYUFDQyxPQUFPLGNBQWMsY0FBYyxhQUFhLFFBQU8sSUFBSyxTQUFRLEdBQUksS0FBSyxTQUFTO0FBQUEsVUFDbkcsQ0FBUyxFQUFFLEtBQUssV0FBWTtBQUNoQiw2QkFBZ0I7QUFDaEIsa0JBQU0sb0JBQW9CLENBQUE7QUFDMUIsbUJBQU8sYUFBYSxRQUFRLElBQUksV0FBWTtBQUFFLHFCQUFPQSxJQUFHLEdBQUcsTUFBTSxLQUFLQSxJQUFHLEdBQUc7QUFBQSxZQUFFLENBQUUsQ0FBQyxFQUFFLEtBQUssU0FBUyxpQkFBaUI7QUFDOUcsa0JBQUksTUFBTSxrQkFBa0IsU0FBUyxHQUFHO0FBQ3BDLG9CQUFJLGVBQWUsTUFBTSxrQkFBa0IsT0FBTyxpQkFBaUIsR0FBRztBQUN0RSxzQkFBTSxvQkFBb0IsQ0FBQTtBQUMxQix1QkFBTyxhQUFhLFFBQVEsSUFBSSxXQUFZO0FBQUUseUJBQU8sYUFBYUEsSUFBRyxHQUFHO0FBQUEsZ0JBQUUsQ0FBRSxDQUFDLEVBQUUsS0FBSyxjQUFjO0FBQUEsY0FDdEg7QUFBQSxZQUNBLENBQWE7QUFBQSxVQUNiLENBQVMsRUFBRSxRQUFRLFdBQVk7QUFDbkIsZ0JBQUksTUFBTSxrQkFBa0IsZUFBZTtBQUN2QyxvQkFBTSxvQkFBb0I7QUFDMUIsb0JBQU0sZ0JBQWdCO0FBQUEsWUFDdEM7QUFBQSxVQUNBLENBQVMsRUFBRSxNQUFNLFNBQVUsS0FBSztBQUNwQixrQkFBTSxjQUFjO0FBQ3BCLGdCQUFJO0FBQ0Esb0NBQXNCLG1CQUFtQixNQUFLO0FBQUEsWUFDOUQsU0FDbUJDLEtBQUk7QUFBQSxZQUFBO0FBQ1gsZ0JBQUksa0JBQWtCLE1BQU0sZUFBZTtBQUN2QyxjQUFBRCxJQUFHLE9BQU07QUFBQSxZQUN6QjtBQUNZLG1CQUFPLFVBQVUsR0FBRztBQUFBLFVBQ2hDLENBQVMsRUFBRSxRQUFRLFdBQVk7QUFDbkIsa0JBQU0sZUFBZTtBQUNyQiwyQkFBYztBQUFBLFVBQzFCLENBQVMsRUFBRSxLQUFLLFdBQVk7QUFDaEIsZ0JBQUksWUFBWTtBQUNaLGtCQUFJLGVBQWUsQ0FBQTtBQUNuQixjQUFBQSxJQUFHLE9BQU8sUUFBUSxTQUFVLE9BQU87QUFDL0Isc0JBQU0sT0FBTyxRQUFRLFFBQVEsU0FBVSxLQUFLO0FBQ3hDLHNCQUFJLElBQUk7QUFDSixpQ0FBYSxTQUFTLE9BQU9BLElBQUcsTUFBTSxHQUFHLEVBQUUsT0FBTyxNQUFNLE1BQU0sR0FBRyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJaUMsVUFBUyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUUsQ0FBQyxDQUFDO0FBQUEsZ0JBQ2pKLENBQXFCO0FBQ0QsNkJBQWEsU0FBUyxPQUFPakMsSUFBRyxNQUFNLEdBQUcsRUFBRSxPQUFPLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxhQUFhLFNBQVMsT0FBT0EsSUFBRyxNQUFNLEdBQUcsRUFBRSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUMsSUFBSSxJQUFJaUMsVUFBUyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUUsQ0FBQyxDQUFDO0FBQUEsY0FDbk0sQ0FBaUI7QUFDRCwyQkFBYSxnQ0FBZ0MsRUFBRSxLQUFLLFlBQVk7QUFDaEUsbUNBQXFCLGNBQWMsSUFBSTtBQUFBLFlBQ3ZEO0FBQ1ksbUJBQU9qQztBQUFBLFVBQ25CLENBQVM7QUFBQSxRQUNUO0FBRUksaUJBQVMsY0FBYyxVQUFVO0FBQzdCLGNBQUksV0FBVyxTQUFVTixTQUFRO0FBQUUsbUJBQU8sU0FBUyxLQUFLQSxPQUFNO0FBQUEsVUFBRSxHQUFJLFVBQVUsU0FBVSxPQUFPO0FBQUUsbUJBQU8sU0FBUyxNQUFNLEtBQUs7QUFBQSxhQUFNLFlBQVksS0FBSyxRQUFRLEdBQUcsVUFBVSxLQUFLLE9BQU87QUFDcEwsbUJBQVMsS0FBSyxTQUFTO0FBQ25CLG1CQUFPLFNBQVUsS0FBSztBQUNsQixrQkFBSSxPQUFPLFFBQVEsR0FBRyxHQUFHLFFBQVEsS0FBSztBQUN0QyxxQkFBTyxLQUFLLE9BQU8sUUFDZCxDQUFDLFNBQVMsT0FBTyxNQUFNLFNBQVMsYUFDN0IsUUFBUSxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssRUFBRSxLQUFLLFdBQVcsT0FBTyxJQUFJLFVBQVUsS0FBSyxJQUM5RSxNQUFNLEtBQUssV0FBVyxPQUFPO0FBQUEsWUFDckQ7QUFBQSxVQUNBO0FBQ1EsaUJBQU8sS0FBSyxRQUFRLEVBQUM7QUFBQSxRQUM3QjtBQUVJLGlCQUFTLHVCQUF1QixNQUFNLGFBQWEsV0FBVztBQUMxRCxjQUFJLElBQUksVUFBVTtBQUNsQixjQUFJLElBQUk7QUFDSixrQkFBTSxJQUFJLFdBQVcsZ0JBQWdCLG1CQUFtQjtBQUM1RCxjQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksQ0FBQztBQUMxQixpQkFBTyxFQUFFO0FBQ0wsaUJBQUssSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDO0FBQzdCLHNCQUFZLEtBQUssSUFBRztBQUNwQixjQUFJLFNBQVMsUUFBUSxJQUFJO0FBQ3pCLGlCQUFPLENBQUMsTUFBTSxRQUFRLFNBQVM7QUFBQSxRQUN2QztBQUNJLGlCQUFTLHNCQUFzQk0sS0FBSSxNQUFNLFlBQVksbUJBQW1CLFdBQVc7QUFDL0UsaUJBQU8sYUFBYSxVQUFVLEtBQUssV0FBWTtBQUMzQyxnQkFBSSxZQUFZLElBQUksYUFBYTtBQUNqQyxnQkFBSSxRQUFRQSxJQUFHLG1CQUFtQixNQUFNLFlBQVlBLElBQUcsV0FBVyxpQkFBaUI7QUFDbkYsa0JBQU0sV0FBVztBQUNqQixnQkFBSSxZQUFZO0FBQUEsY0FDWjtBQUFBLGNBQ0E7QUFBQTtBQUVKLGdCQUFJLG1CQUFtQjtBQUNuQixvQkFBTSxXQUFXLGtCQUFrQjtBQUFBLFlBQ25ELE9BQ2lCO0FBQ0Qsa0JBQUk7QUFDQSxzQkFBTSxPQUFNO0FBQ1osc0JBQU0sU0FBUyxZQUFZO0FBQzNCLGdCQUFBQSxJQUFHLE9BQU8saUJBQWlCO0FBQUEsY0FDL0MsU0FDdUIsSUFBSTtBQUNQLG9CQUFJLEdBQUcsU0FBUyxTQUFTLGdCQUFnQkEsSUFBRyxPQUFNLEtBQU0sRUFBRUEsSUFBRyxPQUFPLGlCQUFpQixHQUFHO0FBQ3BGLDBCQUFRLEtBQUssMEJBQTBCO0FBQ3ZDLGtCQUFBQSxJQUFHLE1BQU0sRUFBRSxpQkFBaUIsTUFBSyxDQUFFO0FBQ25DLHlCQUFPQSxJQUFHLEtBQUksRUFBRyxLQUFLLFdBQVk7QUFBRSwyQkFBTyxzQkFBc0JBLEtBQUksTUFBTSxZQUFZLE1BQU0sU0FBUztBQUFBLGtCQUFFLENBQUU7QUFBQSxnQkFDbEk7QUFDb0IsdUJBQU8sVUFBVSxFQUFFO0FBQUEsY0FDdkM7QUFBQSxZQUNBO0FBQ1ksZ0JBQUksbUJBQW1CLGdCQUFnQixTQUFTO0FBQ2hELGdCQUFJLGtCQUFrQjtBQUNsQixzQ0FBdUI7QUFBQSxZQUN2QztBQUNZLGdCQUFJO0FBQ0osZ0JBQUksa0JBQWtCLGFBQWEsT0FBTyxXQUFZO0FBQ2xELDRCQUFjLFVBQVUsS0FBSyxPQUFPLEtBQUs7QUFDekMsa0JBQUksYUFBYTtBQUNiLG9CQUFJLGtCQUFrQjtBQUNsQixzQkFBSSxjQUFjLHdCQUF3QixLQUFLLE1BQU0sSUFBSTtBQUN6RCw4QkFBWSxLQUFLLGFBQWEsV0FBVztBQUFBLGdCQUNqRSxXQUM2QixPQUFPLFlBQVksU0FBUyxjQUFjLE9BQU8sWUFBWSxVQUFVLFlBQVk7QUFDeEYsZ0NBQWMsY0FBYyxXQUFXO0FBQUEsZ0JBQy9EO0FBQUEsY0FDQTtBQUFBLFlBQ0EsR0FBZSxTQUFTO0FBQ1osb0JBQVEsZUFBZSxPQUFPLFlBQVksU0FBUyxhQUMvQyxhQUFhLFFBQVEsV0FBVyxFQUFFLEtBQUssU0FBVSxHQUFHO0FBQUUscUJBQU8sTUFBTSxTQUMvRCxJQUNFLFVBQVUsSUFBSSxXQUFXLGdCQUFnQiw0REFBNEQsQ0FBQztBQUFBLFlBQUUsQ0FBRSxJQUM5RyxnQkFBZ0IsS0FBSyxXQUFZO0FBQUUscUJBQU87QUFBQSxZQUFZLENBQUUsR0FBRyxLQUFLLFNBQVUsR0FBRztBQUMvRSxrQkFBSTtBQUNBLHNCQUFNLFNBQVE7QUFDbEIscUJBQU8sTUFBTSxZQUFZLEtBQUssV0FBWTtBQUFFLHVCQUFPO0FBQUEsZUFBSTtBQUFBLFlBQ3ZFLENBQWEsRUFBRSxNQUFNLFNBQVUsR0FBRztBQUNsQixvQkFBTSxRQUFRLENBQUM7QUFDZixxQkFBTyxVQUFVLENBQUM7QUFBQSxZQUNsQyxDQUFhO0FBQUEsVUFDYixDQUFTO0FBQUEsUUFDVDtBQUVJLGlCQUFTLElBQUksR0FBRyxPQUFPLE9BQU87QUFDMUIsY0FBSU4sVUFBUyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQUssSUFBSyxDQUFDLENBQUM7QUFDeEMsbUJBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQ3pCLFlBQUFBLFFBQU8sS0FBSyxLQUFLO0FBQ3JCLGlCQUFPQTtBQUFBLFFBQ2Y7QUFDSSxpQkFBUyw2QkFBNkIsTUFBTTtBQUN4QyxpQkFBTyxTQUFTLFNBQVMsQ0FBQSxHQUFJLElBQUksR0FBRyxFQUFFLE9BQU8sU0FBVSxXQUFXO0FBQzFELGdCQUFJLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFDaEMsZ0JBQUksU0FBUyxNQUFNO0FBQ25CLGdCQUFJLGNBQWMsQ0FBQTtBQUNsQixnQkFBSSxvQkFBb0IsQ0FBQTtBQUN4QixxQkFBUyxrQkFBa0IsU0FBUyxTQUFTLGVBQWU7QUFDeEQsa0JBQUksZUFBZSxnQkFBZ0IsT0FBTztBQUMxQyxrQkFBSSxZQUFhLFlBQVksWUFBWSxJQUFJLFlBQVksWUFBWSxLQUFLO0FBQzFFLGtCQUFJLFlBQVksV0FBVyxPQUFPLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxRQUFRO0FBQ2hGLGtCQUFJLFlBQVksVUFBVTtBQUMxQixrQkFBSSxlQUFlLFNBQVMsU0FBUyxDQUFBLEdBQUksYUFBYSxHQUFHLEVBQUUsTUFBTSxZQUN2RCxHQUFHLE9BQU8sY0FBYyxnQkFBZ0IsRUFBRSxPQUFPLGNBQWMsTUFBTSxHQUFHLElBQ3hFLGNBQWMsTUFBTSxlQUE4QixXQUFzQixTQUFrQixXQUFzQixZQUFZLGdCQUFnQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsY0FBYyxRQUFRO0FBQzVNLHdCQUFVLEtBQUssWUFBWTtBQUMzQixrQkFBSSxDQUFDLGFBQWEsY0FBYztBQUM1QixrQ0FBa0IsS0FBSyxZQUFZO0FBQUEsY0FDM0Q7QUFDb0Isa0JBQUksWUFBWSxHQUFHO0FBQ2Ysb0JBQUksaUJBQWlCLGNBQWMsSUFDL0IsUUFBUSxDQUFDLElBQ1QsUUFBUSxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBQ2xDLGtDQUFrQixnQkFBZ0IsVUFBVSxHQUFHLGFBQWE7QUFBQSxjQUNwRjtBQUNvQix3QkFBVSxLQUFLLFNBQVUsR0FBRyxHQUFHO0FBQUUsdUJBQU8sRUFBRSxVQUFVLEVBQUU7QUFBQSxlQUFVO0FBQ2hFLHFCQUFPO0FBQUEsWUFDM0I7QUFDZ0IsZ0JBQUksYUFBYSxrQkFBa0IsT0FBTyxXQUFXLFNBQVMsR0FBRyxPQUFPLFVBQVU7QUFDbEYsd0JBQVksS0FBSyxJQUFJLENBQUMsVUFBVTtBQUNoQyxxQkFBUyxLQUFLLEdBQUdPLE1BQUssT0FBTyxTQUFTLEtBQUtBLElBQUcsUUFBUSxNQUFNO0FBQ3hELGtCQUFJLFFBQVFBLElBQUcsRUFBRTtBQUNqQixnQ0FBa0IsTUFBTSxTQUFTLEdBQUcsS0FBSztBQUFBLFlBQzdEO0FBQ2dCLHFCQUFTLGNBQWMsU0FBUztBQUM1QixrQkFBSVAsVUFBUyxZQUFZLGdCQUFnQixPQUFPLENBQUM7QUFDakQscUJBQU9BLFdBQVVBLFFBQU8sQ0FBQztBQUFBLFlBQzdDO0FBQ2dCLHFCQUFTLGVBQWUsT0FBTyxTQUFTO0FBQ3BDLHFCQUFPO0FBQUEsZ0JBQ0gsTUFBTSxNQUFNLFNBQVMsSUFDakIsSUFDQSxNQUFNO0FBQUEsZ0JBQ1YsT0FBTyxJQUFJLE1BQU0sT0FBTyxNQUFNLFlBQVksS0FBSyxVQUFVLEtBQUssU0FBUyxPQUFPO0FBQUEsZ0JBQzlFLFdBQVc7QUFBQSxnQkFDWCxPQUFPLElBQUksTUFBTSxPQUFPLE1BQU0sWUFBWSxLQUFLLFVBQVUsS0FBSyxTQUFTLE9BQU87QUFBQSxnQkFDOUUsV0FBVztBQUFBO1lBRW5DO0FBQ2dCLHFCQUFTLGlCQUFpQixLQUFLO0FBQzNCLGtCQUFJMkMsU0FBUSxJQUFJLE1BQU07QUFDdEIscUJBQU9BLE9BQU0sWUFBWSxTQUFTLFNBQVMsQ0FBQSxHQUFJLEdBQUcsR0FBRyxFQUFFLE9BQU87QUFBQSxnQkFDdEQsT0FBT0EsT0FBTTtBQUFBLGdCQUNiLE9BQU8sZUFBZSxJQUFJLE1BQU0sT0FBT0EsT0FBTSxPQUFPO0FBQUEsZ0JBQ3ZELENBQUUsSUFBSTtBQUFBLFlBQy9CO0FBQ2dCLGdCQUFJM0MsVUFBUyxTQUFTLFNBQVMsQ0FBQSxHQUFJLEtBQUssR0FBRyxFQUFFLFFBQVEsU0FBUyxTQUFTLENBQUEsR0FBSSxNQUFNLEdBQUcsRUFBRSxZQUF3QixTQUFTLG1CQUFtQixtQkFBbUIsZUFBZSxHQUFHLE9BQU8sU0FBVSxLQUFLO0FBQzdMLHFCQUFPLE1BQU0sTUFBTSxpQkFBaUIsR0FBRyxDQUFDO0FBQUEsWUFDaEUsR0FBdUIsT0FBTyxTQUFVLEtBQUs7QUFDckIscUJBQU8sTUFBTSxNQUFNLGlCQUFpQixHQUFHLENBQUM7QUFBQSxZQUNoRSxHQUF1QixZQUFZLFNBQVUsS0FBSztBQUMxQixrQkFBSU8sTUFBSyxJQUFJLE1BQU0sT0FBTyxVQUFVQSxJQUFHLFNBQVMsWUFBWUEsSUFBRyxXQUFXLFlBQVlBLElBQUc7QUFDekYsa0JBQUksQ0FBQztBQUNELHVCQUFPLE1BQU0sV0FBVyxHQUFHO0FBQy9CLHVCQUFTLG9CQUFvQixRQUFRO0FBQ2pDLHlCQUFTLFVBQVUsS0FBSztBQUNwQix5QkFBTyxPQUNILE9BQU8sU0FBUyxJQUFJLEtBQUssSUFBSSxVQUFVLEtBQUssVUFBVSxLQUFLLFNBQVMsT0FBTyxDQUFDLElBQzVFLElBQUksU0FDQSxPQUFPLFNBQVMsT0FBTyxJQUFJLE1BQU0sR0FBRyxTQUFTLEVBQ3hDLE9BQU8sSUFBSSxVQUNWLEtBQUssVUFDTCxLQUFLLFNBQVMsT0FBTyxDQUFDLElBQzVCLE9BQU8sU0FBUTtBQUFBLGdCQUN2RDtBQUM0QixvQkFBSSxnQkFBZ0IsT0FBTyxPQUFPLFFBQVE7QUFBQSxrQkFDdEMsVUFBVSxFQUFFLE9BQU8sVUFBUztBQUFBLGtCQUM1QixvQkFBb0I7QUFBQSxvQkFDaEIsT0FBTyxTQUFVLEtBQUtxQyxhQUFZO0FBQzlCLDZCQUFPLG1CQUFtQixJQUFJLEtBQUssS0FBSyxTQUFTLE9BQU8sR0FBR0EsV0FBVTtBQUFBLG9CQUM3RztBQUFBO2tCQUVnQyxZQUFZO0FBQUEsb0JBQ1IsS0FBSyxXQUFZO0FBQ2IsNkJBQU8sT0FBTztBQUFBLG9CQUN0RDtBQUFBO2tCQUVnQyxLQUFLO0FBQUEsb0JBQ0QsS0FBSyxXQUFZO0FBQ2IsMEJBQUksTUFBTSxPQUFPO0FBQ2pCLDZCQUFPLGNBQWMsSUFDakIsSUFBSSxDQUFDLElBQ0wsSUFBSSxNQUFNLEdBQUcsU0FBUztBQUFBLG9CQUNsRTtBQUFBO2tCQUVnQyxPQUFPO0FBQUEsb0JBQ0gsS0FBSyxXQUFZO0FBQ2IsNkJBQU8sT0FBTztBQUFBLG9CQUN0RDtBQUFBLGtCQUNBO0FBQUEsZ0JBQ0EsQ0FBNkI7QUFDRCx1QkFBTztBQUFBLGNBQ25DO0FBQ3dCLHFCQUFPLE1BQU0sV0FBVyxpQkFBaUIsR0FBRyxDQUFDLEVBQ3hDLEtBQUssU0FBVSxRQUFRO0FBQUUsdUJBQU8sVUFBVSxvQkFBb0IsTUFBTTtBQUFBLGVBQUk7QUFBQSxZQUNyRyxHQUF1QjtBQUNQLG1CQUFPNUM7QUFBQSxVQUN2QixHQUFlO0FBQUEsUUFDZjtBQUNJLFlBQUkseUJBQXlCO0FBQUEsVUFDekIsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBO0FBR1osaUJBQVMsY0FBYyxHQUFHLEdBQUcsSUFBSSxNQUFNO0FBQ25DLGVBQUssTUFBTSxDQUFBO0FBQ1gsaUJBQU8sUUFBUTtBQUNmLGVBQUssQ0FBQyxFQUFFLFFBQVEsU0FBVSxNQUFNO0FBQzVCLGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRztBQUNsQixpQkFBRyxPQUFPLElBQUksSUFBSTtBQUFBLFlBQ2xDLE9BQ2lCO0FBQ0Qsa0JBQUksS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSTtBQUM3QixrQkFBSSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxNQUFNLElBQUk7QUFDOUQsb0JBQUksYUFBYSxZQUFZLEVBQUU7QUFDL0Isb0JBQUksYUFBYSxZQUFZLEVBQUU7QUFDL0Isb0JBQUksZUFBZSxZQUFZO0FBQzNCLHFCQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUFBLGdCQUNoRCxXQUM2QixlQUFlLFVBQVU7QUFDOUIsZ0NBQWMsSUFBSSxJQUFJLElBQUksT0FBTyxPQUFPLEdBQUc7QUFBQSxnQkFDbkUsV0FDNkIsT0FBTyxJQUFJO0FBQ2hCLHFCQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUFBLGdCQUNoRDtBQUFBLGNBQ0EsV0FDeUIsT0FBTztBQUNaLG1CQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUFBLFlBQzVDO0FBQUEsVUFDQSxDQUFTO0FBQ0QsZUFBSyxDQUFDLEVBQUUsUUFBUSxTQUFVLE1BQU07QUFDNUIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHO0FBQ2xCLGlCQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUFBLFlBQ3hDO0FBQUEsVUFDQSxDQUFTO0FBQ0QsaUJBQU87QUFBQSxRQUNmO0FBRUksaUJBQVMsaUJBQWlCLFlBQVksS0FBSztBQUN2QyxjQUFJLElBQUksU0FBUztBQUNiLG1CQUFPLElBQUk7QUFDZixpQkFBTyxJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksV0FBVyxVQUFVO0FBQUEsUUFDL0Q7QUFFSSxZQUFJLGtCQUFrQjtBQUFBLFVBQ2xCLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVEsU0FBVSxVQUFVO0FBQUUsbUJBQVEsU0FBUyxTQUFTLENBQUEsR0FBSSxRQUFRLEdBQUcsRUFBRSxPQUFPLFNBQVUsV0FBVztBQUM3RixrQkFBSSxZQUFZLFNBQVMsTUFBTSxTQUFTO0FBQ3hDLGtCQUFJLGFBQWEsVUFBVSxPQUFPO0FBQ2xDLGtCQUFJLGtCQUFrQixTQUFTLFNBQVMsQ0FBQSxHQUFJLFNBQVMsR0FBRyxFQUFFLFFBQVEsU0FBVSxLQUFLO0FBQ3pFLG9CQUFJLFVBQVUsSUFBSTtBQUNsQixvQkFBSU8sTUFBSyxRQUFRLE1BQU0sU0FBUyxFQUFFLE1BQU0sV0FBV0EsSUFBRyxVQUFVLFdBQVdBLElBQUcsVUFBVSxXQUFXQSxJQUFHO0FBQ3RHLHdCQUFRLElBQUksTUFBSTtBQUFBLGtCQUNaLEtBQUs7QUFDRCx3QkFBSSxTQUFTLFNBQVM7QUFDbEI7QUFDSiwyQkFBTyxRQUFRLFNBQVMsYUFBYSxXQUFZO0FBQUUsNkJBQU8sZUFBZSxHQUFHO0FBQUEsb0JBQUUsR0FBSSxJQUFJO0FBQUEsa0JBQzFGLEtBQUs7QUFDRCx3QkFBSSxTQUFTLFNBQVMsT0FBTyxTQUFTLFNBQVM7QUFDM0M7QUFDSiwyQkFBTyxRQUFRLFNBQVMsYUFBYSxXQUFZO0FBQUUsNkJBQU8sZUFBZSxHQUFHO0FBQUEsb0JBQUUsR0FBSSxJQUFJO0FBQUEsa0JBQzFGLEtBQUs7QUFDRCx3QkFBSSxTQUFTLFNBQVM7QUFDbEI7QUFDSiwyQkFBTyxRQUFRLFNBQVMsYUFBYSxXQUFZO0FBQUUsNkJBQU8sZUFBZSxHQUFHO0FBQUEsb0JBQUUsR0FBSSxJQUFJO0FBQUEsa0JBQzFGLEtBQUs7QUFDRCx3QkFBSSxTQUFTLFNBQVM7QUFDbEI7QUFDSiwyQkFBTyxRQUFRLFNBQVMsYUFBYSxXQUFZO0FBQUUsNkJBQU8sWUFBWSxHQUFHO0FBQUEsb0JBQUUsR0FBSSxJQUFJO0FBQUEsZ0JBQ25IO0FBQ3dCLHVCQUFPLFVBQVUsT0FBTyxHQUFHO0FBQzNCLHlCQUFTLGVBQWV1QixNQUFLO0FBQ3pCLHNCQUFJZSxXQUFVLElBQUk7QUFDbEIsc0JBQUluQyxRQUFPb0IsS0FBSSxRQUFRLGlCQUFpQixZQUFZQSxJQUFHO0FBQ3ZELHNCQUFJLENBQUNwQjtBQUNELDBCQUFNLElBQUksTUFBTSxjQUFjO0FBQ2xDLGtCQUFBb0IsT0FBTUEsS0FBSSxTQUFTLFNBQVNBLEtBQUksU0FBUyxRQUFRLFNBQVMsU0FBUyxDQUFBLEdBQUlBLElBQUcsR0FBRyxFQUFFLE1BQU1wQixNQUFJLENBQUUsSUFBSSxTQUFTLENBQUEsR0FBSW9CLElBQUc7QUFDL0csc0JBQUlBLEtBQUksU0FBUztBQUNiLG9CQUFBQSxLQUFJLFNBQVMsY0FBYyxDQUFBLEdBQUlBLEtBQUksTUFBWTtBQUNuRCxzQkFBSUEsS0FBSTtBQUNKLG9CQUFBQSxLQUFJLE9BQU8sY0FBYyxDQUFBLEdBQUlBLEtBQUksSUFBVTtBQUMvQyx5QkFBTyxrQkFBa0IsV0FBV0EsTUFBS3BCLEtBQUksRUFBRSxLQUFLLFNBQVUsZ0JBQWdCO0FBQzFFLHdCQUFJLFdBQVdBLE1BQUssSUFBSSxTQUFVLEtBQUssR0FBRztBQUN0QywwQkFBSSxnQkFBZ0IsZUFBZSxDQUFDO0FBQ3BDLDBCQUFJLE1BQU0sRUFBRSxTQUFTLE1BQU0sV0FBVyxLQUFJO0FBQzFDLDBCQUFJb0IsS0FBSSxTQUFTLFVBQVU7QUFDdkIsaUNBQVMsS0FBSyxLQUFLLEtBQUssS0FBSyxlQUFlZSxRQUFPO0FBQUEsc0JBQzNGLFdBQzZDZixLQUFJLFNBQVMsU0FBUyxrQkFBa0IsUUFBVztBQUN4RCw0QkFBSSxzQkFBc0IsU0FBUyxLQUFLLEtBQUssS0FBSyxLQUFLQSxLQUFJLE9BQU8sQ0FBQyxHQUFHZSxRQUFPO0FBQzdFLDRCQUFJLE9BQU8sUUFBUSx1QkFBdUIsTUFBTTtBQUM1QyxnQ0FBTTtBQUNOLDBCQUFBZixLQUFJLEtBQUssQ0FBQyxJQUFJO0FBQ2QsOEJBQUksQ0FBQyxXQUFXLFVBQVU7QUFDdEIseUNBQWFBLEtBQUksT0FBTyxDQUFDLEdBQUcsV0FBVyxTQUFTLEdBQUc7QUFBQSwwQkFDbkc7QUFBQSx3QkFDQTtBQUFBLHNCQUNBLE9BQ3lDO0FBQ0QsNEJBQUksYUFBYSxjQUFjLGVBQWVBLEtBQUksT0FBTyxDQUFDLENBQUM7QUFDM0QsNEJBQUksc0JBQXNCLFNBQVMsS0FBSyxLQUFLLEtBQUssWUFBWSxLQUFLLGVBQWVlLFFBQU87QUFDekYsNEJBQUkscUJBQXFCO0FBQ3JCLDhCQUFJLG1CQUFtQmYsS0FBSSxPQUFPLENBQUM7QUFDbkMsaUNBQU8sS0FBSyxtQkFBbUIsRUFBRSxRQUFRLFNBQVUsU0FBUztBQUN4RCxnQ0FBSSxPQUFPLGtCQUFrQixPQUFPLEdBQUc7QUFDbkMsK0NBQWlCLE9BQU8sSUFBSSxvQkFBb0IsT0FBTztBQUFBLDRCQUMzRyxPQUNxRDtBQUNELDJDQUFhLGtCQUFrQixTQUFTLG9CQUFvQixPQUFPLENBQUM7QUFBQSw0QkFDeEg7QUFBQSwwQkFDQSxDQUE2QztBQUFBLHdCQUM3QztBQUFBLHNCQUNBO0FBQ29DLDZCQUFPO0FBQUEsb0JBQzNDLENBQWlDO0FBQ0QsMkJBQU8sVUFBVSxPQUFPQSxJQUFHLEVBQUUsS0FBSyxTQUFVdkIsS0FBSTtBQUM1QywwQkFBSSxXQUFXQSxJQUFHLFVBQVUsVUFBVUEsSUFBRyxTQUFTLGNBQWNBLElBQUcsYUFBYSxhQUFhQSxJQUFHO0FBQ2hHLCtCQUFTLElBQUksR0FBRyxJQUFJRyxNQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ2xDLDRCQUFJLFVBQVUsVUFBVSxRQUFRLENBQUMsSUFBSUEsTUFBSyxDQUFDO0FBQzNDLDRCQUFJLE1BQU0sU0FBUyxDQUFDO0FBQ3BCLDRCQUFJLFdBQVcsTUFBTTtBQUNqQiw4QkFBSSxXQUFXLElBQUksUUFBUSxTQUFTLENBQUMsQ0FBQztBQUFBLHdCQUNsRixPQUM2QztBQUNELDhCQUFJLGFBQWEsSUFBSTtBQUFBLDRCQUFVb0IsS0FBSSxTQUFTLFNBQVMsZUFBZSxDQUFDLElBQ2pFQSxLQUFJLE9BQU8sQ0FBQyxJQUNaO0FBQUE7d0JBRWhEO0FBQUEsc0JBQ0E7QUFDb0MsNkJBQU8sRUFBRSxVQUFvQixTQUFrQixhQUEwQixXQUFzQjtBQUFBLG9CQUNuSSxDQUFpQyxFQUFFLE1BQU0sU0FBVSxPQUFPO0FBQ3RCLCtCQUFTLFFBQVEsU0FBVSxLQUFLO0FBQUUsK0JBQU8sSUFBSSxXQUFXLElBQUksUUFBUSxLQUFLO0FBQUEsc0JBQUUsQ0FBRTtBQUM3RSw2QkFBTyxRQUFRLE9BQU8sS0FBSztBQUFBLG9CQUMvRCxDQUFpQztBQUFBLGtCQUNqQyxDQUE2QjtBQUFBLGdCQUM3QjtBQUN3Qix5QkFBUyxZQUFZQSxNQUFLO0FBQ3RCLHlCQUFPLGdCQUFnQkEsS0FBSSxPQUFPQSxLQUFJLE9BQU8sR0FBSztBQUFBLGdCQUM5RTtBQUN3Qix5QkFBUyxnQkFBZ0IsT0FBTyxPQUFPLE9BQU87QUFDMUMseUJBQU8sVUFBVSxNQUFNLEVBQUUsT0FBYyxRQUFRLE9BQU8sT0FBTyxFQUFFLE9BQU8sWUFBWSxNQUFZLEdBQUksTUFBWSxDQUFFLEVBQzNHLEtBQUssU0FBVXZCLEtBQUk7QUFDcEIsd0JBQUlQLFVBQVNPLElBQUc7QUFDaEIsMkJBQU8sZUFBZSxFQUFFLE1BQU0sVUFBVSxNQUFNUCxTQUFRLE1BQVksQ0FBRSxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQ3RGLDBCQUFJLElBQUksY0FBYztBQUNsQiwrQkFBTyxRQUFRLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQztBQUN6QywwQkFBSUEsUUFBTyxTQUFTLE9BQU87QUFDdkIsK0JBQU8sRUFBRSxVQUFVLENBQUEsR0FBSSxhQUFhLEdBQUcsWUFBWSxPQUFTO0FBQUEsc0JBQ3BHLE9BQ3lDO0FBQ0QsK0JBQU8sZ0JBQWdCLE9BQU8sU0FBUyxTQUFTLENBQUEsR0FBSSxLQUFLLEdBQUcsRUFBRSxPQUFPQSxRQUFPQSxRQUFPLFNBQVMsQ0FBQyxHQUFHLFdBQVcsS0FBSSxDQUFFLEdBQUcsS0FBSztBQUFBLHNCQUNqSztBQUFBLG9CQUNBLENBQWlDO0FBQUEsa0JBQ2pDLENBQTZCO0FBQUEsZ0JBQzdCO0FBQUEsY0FDQSxHQUF1QjtBQUNQLHFCQUFPO0FBQUEsWUFDdkIsRUFBYSxDQUFFO0FBQUEsVUFBRztBQUFBO0FBRWQsaUJBQVMsa0JBQWtCLE9BQU8sS0FBSyxlQUFlO0FBQ2xELGlCQUFPLElBQUksU0FBUyxRQUNkLFFBQVEsUUFBUSxDQUFBLENBQUUsSUFDbEIsTUFBTSxRQUFRLEVBQUUsT0FBTyxJQUFJLE9BQU8sTUFBTSxlQUFlLE9BQU8sYUFBYTtBQUFBLFFBQ3pGO0FBRUksaUJBQVMsd0JBQXdCVSxPQUFNb0MsUUFBTyxPQUFPO0FBQ2pELGNBQUk7QUFDQSxnQkFBSSxDQUFDQTtBQUNELHFCQUFPO0FBQ1gsZ0JBQUlBLE9BQU0sS0FBSyxTQUFTcEMsTUFBSztBQUN6QixxQkFBTztBQUNYLGdCQUFJVixVQUFTLENBQUE7QUFDYixxQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk4QyxPQUFNLEtBQUssVUFBVSxJQUFJcEMsTUFBSyxRQUFRLEVBQUUsR0FBRztBQUNsRSxrQkFBSUQsS0FBSXFDLE9BQU0sS0FBSyxDQUFDLEdBQUdwQyxNQUFLLENBQUMsQ0FBQyxNQUFNO0FBQ2hDO0FBQ0osY0FBQVYsUUFBTyxLQUFLLFFBQVEsVUFBVThDLE9BQU0sT0FBTyxDQUFDLENBQUMsSUFBSUEsT0FBTSxPQUFPLENBQUMsQ0FBQztBQUNoRSxnQkFBRTtBQUFBLFlBQ2xCO0FBQ1ksbUJBQU85QyxRQUFPLFdBQVdVLE1BQUssU0FBU1YsVUFBUztBQUFBLFVBQzVELFNBQ2VPLEtBQUk7QUFDUCxtQkFBTztBQUFBLFVBQ25CO0FBQUEsUUFDQTtBQUNJLFlBQUksZ0NBQWdDO0FBQUEsVUFDaEMsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsUUFBUSxTQUFVLE1BQU07QUFDcEIsbUJBQU87QUFBQSxjQUNILE9BQU8sU0FBVSxXQUFXO0FBQ3hCLG9CQUFJLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFDaEMsdUJBQU8sU0FBUyxTQUFTLENBQUEsR0FBSSxLQUFLLEdBQUcsRUFBRSxTQUFTLFNBQVUsS0FBSztBQUN2RCxzQkFBSSxDQUFDLElBQUksT0FBTztBQUNaLDJCQUFPLE1BQU0sUUFBUSxHQUFHO0FBQUEsa0JBQ3hEO0FBQzRCLHNCQUFJLGVBQWUsd0JBQXdCLElBQUksTUFBTSxJQUFJLE1BQU0sUUFBUSxHQUFHLElBQUksVUFBVSxPQUFPO0FBQy9GLHNCQUFJLGNBQWM7QUFDZCwyQkFBTyxhQUFhLFFBQVEsWUFBWTtBQUFBLGtCQUN4RTtBQUM0Qix5QkFBTyxNQUFNLFFBQVEsR0FBRyxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQzFDLHdCQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsc0JBQ2xCLE1BQU0sSUFBSTtBQUFBLHNCQUNWLFFBQVEsSUFBSSxVQUFVLFVBQVUsVUFBVSxHQUFHLElBQUk7QUFBQTtBQUVyRCwyQkFBTztBQUFBLGtCQUN2QyxDQUE2QjtBQUFBLGdCQUM3QixHQUEyQixRQUFRLFNBQVUsS0FBSztBQUN0QixzQkFBSSxJQUFJLFNBQVM7QUFDYix3QkFBSSxNQUFNLFFBQVEsSUFBSTtBQUMxQix5QkFBTyxNQUFNLE9BQU8sR0FBRztBQUFBLGdCQUNuRCxHQUEyQjtBQUFBLGNBQzNCO0FBQUE7VUFFQTtBQUFBO0FBR0ksaUJBQVMsa0JBQWtCLEtBQUssT0FBTztBQUNuQyxpQkFBUSxJQUFJLE1BQU0sU0FBUyxjQUN2QixDQUFDLENBQUMsSUFBSSxVQUNOLENBQUMsSUFBSSxNQUFNLFlBQ1gsSUFBSSxNQUFNLEdBQUcsU0FBUyxVQUFVLGNBQ2hDLENBQUMsTUFBTSxPQUFPLFdBQVc7QUFBQSxRQUNyQztBQUVJLGlCQUFTLGtCQUFrQkwsT0FBTSxLQUFLO0FBQ2xDLGtCQUFRQSxPQUFJO0FBQUEsWUFDUixLQUFLO0FBQ0QscUJBQU8sSUFBSSxVQUFVLENBQUMsSUFBSTtBQUFBLFlBQzlCLEtBQUs7QUFDRCxxQkFBTztBQUFBLFlBQ1gsS0FBSztBQUNELHFCQUFPO0FBQUEsWUFDWCxLQUFLO0FBQ0QscUJBQU87QUFBQSxZQUNYLEtBQUs7QUFDRCxxQkFBTztBQUFBLFVBQ3ZCO0FBQUEsUUFDQTtBQUVJLFlBQUksMEJBQTBCO0FBQUEsVUFDMUIsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sUUFBUSxTQUFVLE1BQU07QUFDcEIsZ0JBQUksU0FBUyxLQUFLLE9BQU87QUFDekIsZ0JBQUksYUFBYSxJQUFJcUMsVUFBUyxLQUFLLFNBQVMsS0FBSyxPQUFPO0FBQ3hELG1CQUFPLFNBQVMsU0FBUyxDQUFBLEdBQUksSUFBSSxHQUFHLEVBQUUsYUFBYSxTQUFVLFFBQVEsTUFBTSxTQUFTO0FBQzVFLGtCQUFJLElBQUksVUFBVSxTQUFTLFlBQVk7QUFDbkMsc0JBQU0sSUFBSSxXQUFXLFNBQVMsK0RBQStELE9BQU8sSUFBSSxPQUFPLENBQUM7QUFBQSxjQUN4STtBQUNvQixxQkFBTyxLQUFLLFlBQVksUUFBUSxNQUFNLE9BQU87QUFBQSxZQUNqRSxHQUFtQixPQUFPLFNBQVUsV0FBVztBQUMzQixrQkFBSSxRQUFRLEtBQUssTUFBTSxTQUFTO0FBQ2hDLGtCQUFJLFNBQVMsTUFBTTtBQUNuQixrQkFBSSxhQUFhLE9BQU8sWUFBWSxVQUFVLE9BQU87QUFDckQsa0JBQUksYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXO0FBQzlELGtCQUFJLHVCQUF1QixXQUFXLGlCQUFpQixRQUFRLE9BQU8sU0FBVSxPQUFPO0FBQUUsdUJBQU8sTUFBTSxZQUFZLE1BQU0sUUFBUSxTQUFTLFdBQVcsT0FBTztBQUFBLGVBQUk7QUFDL0osa0JBQUksYUFBYSxTQUFTLFNBQVMsQ0FBQSxHQUFJLEtBQUssR0FBRyxFQUFFLFFBQVEsU0FBVSxLQUFLO0FBQ2hFLG9CQUFJaEMsS0FBSU87QUFDUixvQkFBSSxRQUFRLElBQUk7QUFDaEIsb0JBQUksZUFBZSxJQUFJLGlCQUFpQixJQUFJLGVBQWUsQ0FBQTtBQUMzRCxvQkFBSSxjQUFjLFNBQVUsV0FBVztBQUNuQyxzQkFBSSxPQUFPLFNBQVMsT0FBTyxRQUFRLEdBQUcsRUFBRSxPQUFPLFdBQVcsR0FBRyxFQUFFLE9BQU8sU0FBUztBQUMvRSx5QkFBUSxhQUFhLElBQUksTUFDcEIsYUFBYSxJQUFJLElBQUksSUFBSXlCO2dCQUM5RDtBQUM0QixvQkFBSSxhQUFhLFlBQVksRUFBRTtBQUMvQixvQkFBSSxlQUFlLFlBQVksT0FBTztBQUN0QyxvQkFBSXJDLFFBQU8sSUFBSTtBQUNmLG9CQUFJLEtBQUssSUFBSSxTQUFTLGdCQUNoQixDQUFDLElBQUksS0FBSyxJQUNWLElBQUksU0FBUyxXQUNULENBQUMsSUFBSSxJQUFJLElBQ1QsSUFBSSxPQUFPLFNBQVMsS0FDaEIsQ0FBQyxpQkFBaUIsWUFBWSxHQUFHLEVBQUUsT0FBTyxTQUFVLElBQUk7QUFBRSx5QkFBTztBQUFBLGlCQUFLLEdBQUcsSUFBSSxNQUFNLElBQ25GLENBQUEsR0FBSVEsUUFBTyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQztBQUM5QyxvQkFBSSxXQUFXLElBQUksTUFBTSxRQUFRO0FBQ2pDLG9CQUFJLFFBQVFBLEtBQUksR0FBRztBQUNmLDZCQUFXLFFBQVFBLEtBQUk7QUFDdkIsc0JBQUksVUFBVVIsVUFBUyxZQUFZUSxNQUFLLFdBQVcsUUFBUSxTQUFTLHdCQUF3QkEsT0FBTSxRQUFRLElBQUk7QUFDOUcsc0JBQUksQ0FBQyxTQUFTO0FBQ1YsaUNBQWEsUUFBUUEsS0FBSTtBQUFBLGtCQUM3RDtBQUNnQyxzQkFBSSxXQUFXLFNBQVM7QUFDcEIseUNBQXFCLGFBQWEsUUFBUSxTQUFTLE9BQU87QUFBQSxrQkFDOUY7QUFBQSxnQkFDQSxXQUNxQ0EsT0FBTTtBQUNYLHNCQUFJLFFBQVE7QUFBQSxvQkFDUixPQUFPSCxNQUFLRyxNQUFLLFdBQVcsUUFBUUgsUUFBTyxTQUFTQSxNQUFLLEtBQUs7QUFBQSxvQkFDOUQsS0FBS08sTUFBS0osTUFBSyxXQUFXLFFBQVFJLFFBQU8sU0FBU0EsTUFBSyxLQUFLO0FBQUE7QUFFaEUsK0JBQWEsSUFBSSxLQUFLO0FBQ3RCLDZCQUFXLElBQUksS0FBSztBQUFBLGdCQUNwRCxPQUNpQztBQUNELDZCQUFXLElBQUksVUFBVTtBQUN6QiwrQkFBYSxJQUFJLFVBQVU7QUFDM0IseUJBQU8sUUFBUSxRQUFRLFNBQVUsS0FBSztBQUFFLDJCQUFPLFlBQVksSUFBSSxJQUFJLEVBQUUsSUFBSSxVQUFVO0FBQUEsa0JBQUUsQ0FBRTtBQUFBLGdCQUN2SDtBQUM0Qix1QkFBTyxNQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssU0FBVSxLQUFLO0FBQ3pDLHNCQUFJSixVQUFTLElBQUksU0FBUyxTQUFTLElBQUksU0FBUyxRQUFRO0FBQ3BELCtCQUFXLFFBQVEsSUFBSSxPQUFPO0FBQzlCLHdCQUFJLHNCQUFzQjtBQUN0QiwyQ0FBcUIsUUFBUSxTQUFVLEtBQUs7QUFDeEMsNEJBQUksVUFBVSxJQUFJLE9BQU8sSUFBSSxTQUFVLEdBQUc7QUFBRSxpQ0FBTyxJQUFJLFdBQVcsQ0FBQztBQUFBLHdCQUFFLENBQUU7QUFDdkUsNEJBQUksUUFBUSxJQUFJLFFBQVEsVUFBVSxTQUFVLE1BQU07QUFBRSxpQ0FBTyxTQUFTLFdBQVc7QUFBQSx3QkFBUSxDQUFFO0FBQ3pGLGlDQUFTLElBQUksR0FBRyxNQUFNLElBQUksUUFBUSxRQUFRLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDcEQsa0NBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLFFBQVEsQ0FBQztBQUFBLHdCQUNqRjtBQUM0QyxvQ0FBWSxJQUFJLElBQUksRUFBRSxRQUFRLE9BQU87QUFBQSxzQkFDakYsQ0FBeUM7QUFBQSxvQkFDekM7QUFBQSxrQkFDQTtBQUNnQyx3QkFBTSxlQUFlLHVCQUF1QixNQUFNLGdCQUFnQixDQUFBLEdBQUksWUFBWTtBQUNsRix5QkFBTztBQUFBLGdCQUN2QyxDQUE2QjtBQUFBLGNBQzdCLEdBQTJCO0FBQ1Asa0JBQUksV0FBVyxTQUFVSCxLQUFJO0FBQ3pCLG9CQUFJTyxLQUFJO0FBQ1Isb0JBQUksS0FBS1AsSUFBRyxPQUFPLFFBQVEsR0FBRyxPQUFPLFFBQVEsR0FBRztBQUNoRCx1QkFBTztBQUFBLGtCQUNIO0FBQUEsa0JBQ0EsSUFBSWdDLFdBQVV6QixNQUFLLE1BQU0sV0FBVyxRQUFRQSxRQUFPLFNBQVNBLE1BQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFFBQVEsT0FBTyxTQUFTLEtBQUssS0FBSyxPQUFPO0FBQUE7Y0FFM0s7QUFDb0Isa0JBQUksa0JBQWtCO0FBQUEsZ0JBQ2xCLEtBQUssU0FBVSxLQUFLO0FBQUUseUJBQU8sQ0FBQyxZQUFZLElBQUl5QixVQUFTLElBQUksR0FBRyxDQUFDO0FBQUEsZ0JBQUU7QUFBQSxnQkFDakUsU0FBUyxTQUFVLEtBQUs7QUFBRSx5QkFBTyxDQUFDLFlBQVksSUFBSUEsVUFBUSxFQUFHLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFBQSxnQkFBRTtBQUFBLGdCQUNoRixPQUFPO0FBQUEsZ0JBQ1AsT0FBTztBQUFBLGdCQUNQLFlBQVk7QUFBQTtBQUVoQixtQkFBSyxlQUFlLEVBQUUsUUFBUSxTQUFVLFFBQVE7QUFDNUMsMkJBQVcsTUFBTSxJQUFJLFNBQVUsS0FBSztBQUNoQyxzQkFBSSxTQUFTLElBQUk7QUFDakIsc0JBQUksY0FBYyxDQUFDLENBQUM7QUFDcEIsc0JBQUksV0FBVyxrQkFBa0IsS0FBSyxLQUFLLEtBQUssa0JBQWtCLFFBQVEsR0FBRztBQUM3RSxzQkFBSSxTQUFTLFdBQ1AsSUFBSSxTQUFTLENBQUEsSUFDYjtBQUNOLHNCQUFJLGFBQWE7QUFDYix3QkFBSSxjQUFjLFNBQVUsV0FBVztBQUNuQywwQkFBSSxPQUFPLFNBQVMsT0FBTyxRQUFRLEdBQUcsRUFBRSxPQUFPLFdBQVcsR0FBRyxFQUFFLE9BQU8sU0FBUztBQUMvRSw2QkFBUSxPQUFPLElBQUksTUFDZCxPQUFPLElBQUksSUFBSSxJQUFJQTtvQkFDNUQ7QUFDZ0Msd0JBQUksZUFBZSxZQUFZLEVBQUU7QUFDakMsd0JBQUksaUJBQWlCLFlBQVksT0FBTztBQUN4Qyx3QkFBSWhDLE1BQUssZ0JBQWdCLE1BQU0sRUFBRSxHQUFHLEdBQUcsZUFBZUEsSUFBRyxDQUFDLEdBQUcsZ0JBQWdCQSxJQUFHLENBQUM7QUFDakYsd0JBQUksV0FBVyxXQUFXLGFBQWEsZ0JBQWdCLENBQUMsSUFBSSxRQUFRO0FBQ2hFLHFDQUFlLElBQUksYUFBYTtBQUFBLG9CQUNwRSxPQUNxQztBQUNELGtDQUFZLGFBQWEsUUFBUSxFQUFFLEVBQUUsSUFBSSxhQUFhO0FBQUEsb0JBQzFGO0FBQ2dDLHdCQUFJLENBQUMsYUFBYSxjQUFjO0FBQzVCLDBCQUFJLFdBQVcsU0FBUztBQUNwQix1Q0FBZSxJQUFJLFVBQVU7QUFBQSxzQkFDckUsT0FDeUM7QUFDRCw0QkFBSSxnQkFBZ0IsV0FBVyxXQUMzQixZQUNBLElBQUksVUFDSixNQUFNLE1BQU0sU0FBUyxTQUFTLENBQUEsR0FBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLE1BQUssQ0FBRSxDQUFDO0FBQzlELCtCQUFPLE1BQU0sTUFBTSxFQUFFLE1BQU0sTUFBTSxTQUFTLEVBQUUsS0FBSyxTQUFVLEtBQUs7QUFDNUQsOEJBQUksV0FBVyxTQUFTO0FBQ3BCLGdDQUFJLFlBQVksSUFBSSxRQUFRO0FBQ3hCLHFDQUFPLGNBQWMsS0FBSyxTQUFVQSxLQUFJO0FBQ3BDLG9DQUFJLGdCQUFnQkEsSUFBRztBQUN2Qiw2Q0FBYSxRQUFRLGFBQWE7QUFDbEMsdUNBQU87QUFBQSw4QkFDL0QsQ0FBcUQ7QUFBQSw0QkFDckQ7QUFDZ0QsZ0NBQUksUUFBUSxJQUFJLFNBQ1YsSUFBSSxPQUFPLElBQUksVUFBVSxJQUN6QixJQUFJO0FBQ1YsZ0NBQUksSUFBSSxRQUFRO0FBQ1osMkNBQWEsUUFBUSxLQUFLO0FBQUEsNEJBQzlFLE9BQ3FEO0FBQ0QsNkNBQWUsUUFBUSxLQUFLO0FBQUEsNEJBQ2hGO0FBQUEsMEJBQ0EsV0FDcUQsV0FBVyxjQUFjO0FBQzlCLGdDQUFJLFdBQVc7QUFDZixnQ0FBSSxlQUFlLElBQUk7QUFDdkIsbUNBQVEsWUFDSixPQUFPLE9BQU8sVUFBVTtBQUFBLDhCQUNwQixLQUFLO0FBQUEsZ0NBQ0QsS0FBSyxXQUFZO0FBQ2IsaURBQWUsT0FBTyxTQUFTLFVBQVU7QUFDekMseUNBQU8sU0FBUztBQUFBLGdDQUNoRjtBQUFBOzhCQUV3RCxZQUFZO0FBQUEsZ0NBQ1IsS0FBSyxXQUFZO0FBQ2Isc0NBQUksT0FBTyxTQUFTO0FBQ3BCLGlEQUFlLE9BQU8sSUFBSTtBQUMxQix5Q0FBTztBQUFBLGdDQUN2RTtBQUFBOzhCQUV3RCxPQUFPO0FBQUEsZ0NBQ0gsS0FBSyxXQUFZO0FBQ2Isa0RBQWdCLGFBQWEsT0FBTyxTQUFTLFVBQVU7QUFDdkQseUNBQU8sU0FBUztBQUFBLGdDQUNoRjtBQUFBOzRCQUVBLENBQXFEO0FBQUEsMEJBQ3JEO0FBQzRDLGlDQUFPO0FBQUEsd0JBQ25ELENBQXlDO0FBQUEsc0JBQ3pDO0FBQUEsb0JBQ0E7QUFBQSxrQkFDQTtBQUM0Qix5QkFBTyxNQUFNLE1BQU0sRUFBRSxNQUFNLE1BQU0sU0FBUztBQUFBLGdCQUN0RTtBQUFBLGNBQ0EsQ0FBcUI7QUFDRCxxQkFBTztBQUFBLFlBQzNCLEdBQW1CO0FBQUEsVUFDbkI7QUFBQTtBQUVJLGlCQUFTLHFCQUFxQixhQUFhLFFBQVEsU0FBUyxTQUFTO0FBQ2pFLG1CQUFTLGlCQUFpQixJQUFJO0FBQzFCLGdCQUFJLFdBQVcsWUFBWSxHQUFHLFFBQVEsRUFBRTtBQUN4QyxxQkFBUyxXQUFXLEtBQUs7QUFDckIscUJBQU8sT0FBTyxPQUFPLEdBQUcsV0FBVyxHQUFHLElBQUk7QUFBQSxZQUMxRDtBQUNZLGdCQUFJLGVBQWUsU0FBVSxLQUFLO0FBQUUscUJBQU8sR0FBRyxjQUFjLFFBQVEsR0FBRyxJQUNqRSxJQUFJLFFBQVEsU0FBVXdDLE1BQUs7QUFBRSx1QkFBTyxTQUFTLE9BQU9BLElBQUc7QUFBQSxjQUFFLENBQUUsSUFDM0QsU0FBUyxPQUFPLEdBQUc7QUFBQSxZQUFFO0FBQzNCLGFBQUMsV0FBVyxTQUFTLFFBQVEsU0FBVSxHQUFHLEdBQUc7QUFDekMsa0JBQUksU0FBUyxXQUFXLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDN0Msa0JBQUksU0FBUyxXQUFXLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFDN0Msa0JBQUl0QyxLQUFJLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDM0Isb0JBQUksVUFBVTtBQUNWLCtCQUFhLE1BQU07QUFDdkIsb0JBQUksVUFBVTtBQUNWLCtCQUFhLE1BQU07QUFBQSxjQUMzQztBQUFBLFlBQ0EsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxpQkFBTyxRQUFRLFFBQVEsZ0JBQWdCO0FBQUEsUUFDL0M7QUFFSSxpQkFBUyw2QkFBNkIsVUFBVSxLQUFLLEtBQUs7QUFDdEQsY0FBSSxJQUFJLGdCQUFnQjtBQUNwQixtQkFBTztBQUNYLGNBQUksSUFBSSxTQUFTLGVBQWU7QUFDNUIsbUJBQU87QUFBQSxVQUNuQjtBQUNRLGNBQUksYUFBYSxJQUFJLE9BQ2YsSUFBSSxLQUFLLFNBQ1QsWUFBWSxPQUFPLElBQUksU0FDbkIsSUFBSSxPQUFPLFNBQ1g7QUFDVixjQUFJLElBQUksZ0JBQWdCLFlBQVk7QUFDaEMsbUJBQU87QUFBQSxVQUNuQjtBQUNRLGNBQUksUUFBUSxTQUFTLENBQUEsR0FBSSxHQUFHO0FBQzVCLGNBQUksUUFBUSxNQUFNLElBQUksR0FBRztBQUNyQixrQkFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLFNBQVUsR0FBRyxHQUFHO0FBQUUscUJBQU8sRUFBRSxLQUFLLElBQUk7QUFBQSxZQUFVLENBQUU7QUFBQSxVQUMzRjtBQUNRLGNBQUksWUFBWSxTQUFTLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDNUMsa0JBQU0sU0FBUyxNQUFNLE9BQU8sT0FBTyxTQUFVLEdBQUcsR0FBRztBQUFFLHFCQUFPLEVBQUUsS0FBSyxJQUFJO0FBQUEsWUFBVSxDQUFFO0FBQUEsVUFDL0Y7QUFDUSxpQkFBTztBQUFBLFFBQ2Y7QUFFSSxpQkFBUyxhQUFhLEtBQUssT0FBTztBQUM5QixpQkFBTyxNQUFNLFVBQVUsU0FDakIsT0FDQSxNQUFNLFlBQ0ZBLEtBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxJQUN4QkEsS0FBSSxLQUFLLE1BQU0sS0FBSyxLQUFLO0FBQUEsUUFDM0M7QUFDSSxpQkFBUyxhQUFhLEtBQUssT0FBTztBQUM5QixpQkFBTyxNQUFNLFVBQVUsU0FDakIsT0FDQSxNQUFNLFlBQ0ZBLEtBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxJQUN4QkEsS0FBSSxLQUFLLE1BQU0sS0FBSyxLQUFLO0FBQUEsUUFDM0M7QUFDSSxpQkFBUyxjQUFjLEtBQUssT0FBTztBQUMvQixpQkFBTyxhQUFhLEtBQUssS0FBSyxLQUFLLGFBQWEsS0FBSyxLQUFLO0FBQUEsUUFDbEU7QUFFSSxpQkFBUyxtQkFBbUJULFNBQVEsS0FBSyxLQUFLLE9BQU8sWUFBWSxXQUFXO0FBQ3hFLGNBQUksQ0FBQyxPQUFPLElBQUksV0FBVztBQUN2QixtQkFBT0E7QUFDWCxjQUFJLFFBQVEsSUFBSSxNQUFNO0FBQ3RCLGNBQUksYUFBYSxNQUFNO0FBQ3ZCLGNBQUksYUFBYSxJQUFJLE1BQU07QUFDM0IsY0FBSSxhQUFhLE1BQU0sT0FBTztBQUM5QixjQUFJLGlCQUFpQixXQUFXO0FBQ2hDLGNBQUksZUFBZSxNQUFNO0FBQ3pCLGNBQUksd0JBQXdCLE1BQU0saUJBQWlCLE9BQU87QUFDMUQsY0FBSSxjQUFjLElBQUksT0FBTyxTQUFVQSxTQUFRLElBQUk7QUFDL0MsZ0JBQUksZ0JBQWdCQTtBQUNwQixnQkFBSSxpQkFBaUIsQ0FBQTtBQUNyQixnQkFBSSxHQUFHLFNBQVMsU0FBUyxHQUFHLFNBQVMsT0FBTztBQUN4QyxrQkFBSSxjQUFjLElBQUl1QyxVQUFRO0FBQzlCLHVCQUFTLElBQUksR0FBRyxPQUFPLFNBQVMsR0FBRyxLQUFLLEdBQUcsRUFBRSxHQUFHO0FBQzVDLG9CQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsb0JBQUksS0FBSyxlQUFlLEtBQUs7QUFDN0Isb0JBQUksWUFBWSxPQUFPLEVBQUU7QUFDckI7QUFDSixvQkFBSSxNQUFNLGFBQWEsS0FBSztBQUM1QixvQkFBSSxjQUFjLFFBQVEsR0FBRyxJQUN2QixJQUFJLEtBQUssU0FBVSxHQUFHO0FBQUUseUJBQU8sY0FBYyxHQUFHLFVBQVU7QUFBQSxnQkFBRSxDQUFFLElBQzlELGNBQWMsS0FBSyxVQUFVLEdBQUc7QUFDbEMsOEJBQVksT0FBTyxFQUFFO0FBQ3JCLGlDQUFlLEtBQUssS0FBSztBQUFBLGdCQUNqRDtBQUFBLGNBQ0E7QUFBQSxZQUNBO0FBQ1ksb0JBQVEsR0FBRyxNQUFJO0FBQUEsY0FDWCxLQUFLLE9BQU87QUFDUixvQkFBSSxpQkFBaUIsSUFBSUEsVUFBUSxFQUFHLFFBQVEsSUFBSSxTQUFTdkMsUUFBTyxJQUFJLFNBQVUsR0FBRztBQUFFLHlCQUFPLGVBQWUsQ0FBQztBQUFBLGdCQUFFLENBQUUsSUFBSUEsT0FBTTtBQUN4SCxnQ0FBZ0JBLFFBQU8sT0FBTyxJQUFJLFNBQzVCLGVBQWUsT0FBTyxTQUFVLEdBQUc7QUFDakMsc0JBQUkrQyxPQUFNLGVBQWUsQ0FBQztBQUMxQixzQkFBSSxlQUFlLE9BQU9BLElBQUc7QUFDekIsMkJBQU87QUFDWCxpQ0FBZSxPQUFPQSxJQUFHO0FBQ3pCLHlCQUFPO0FBQUEsZ0JBQ25DLENBQXlCLElBQ0MsZUFDRyxJQUFJLFNBQVUsR0FBRztBQUFFLHlCQUFPLGVBQWUsQ0FBQztBQUFBLGdCQUFFLENBQUUsRUFDOUMsT0FBTyxTQUFVLEdBQUc7QUFDckIsc0JBQUksZUFBZSxPQUFPLENBQUM7QUFDdkIsMkJBQU87QUFDWCxpQ0FBZSxPQUFPLENBQUM7QUFDdkIseUJBQU87QUFBQSxnQkFDbkMsQ0FBeUIsQ0FBQztBQUNOO0FBQUEsY0FDcEI7QUFBQSxjQUNnQixLQUFLLE9BQU87QUFDUixvQkFBSSxXQUFXLElBQUlSLFVBQVEsRUFBRyxRQUFRLEdBQUcsT0FBTyxJQUFJLFNBQVUsR0FBRztBQUFFLHlCQUFPLGVBQWUsQ0FBQztBQUFBLGdCQUFFLENBQUUsQ0FBQztBQUMvRixnQ0FBZ0J2QyxRQUNYO0FBQUEsa0JBQ0wsU0FBVSxNQUFNO0FBQUUsMkJBQU8sQ0FBQyxTQUFTLE9BQU8sSUFBSSxTQUFTLGVBQWUsSUFBSSxJQUFJLElBQUk7QUFBQSxrQkFBRTtBQUFBLGdCQUFFLEVBQ2pGO0FBQUEsa0JBQ0wsSUFBSSxTQUNFLGlCQUNBLGVBQWUsSUFBSSxTQUFVLEdBQUc7QUFBRSwyQkFBTyxlQUFlLENBQUM7QUFBQSxrQkFBRSxDQUFFO0FBQUEsZ0JBQUM7QUFDcEU7QUFBQSxjQUNwQjtBQUFBLGNBQ2dCLEtBQUs7QUFDRCxvQkFBSSxpQkFBaUIsSUFBSXVDLFVBQVEsRUFBRyxRQUFRLEdBQUcsSUFBSTtBQUNuRCxnQ0FBZ0J2QyxRQUFPLE9BQU8sU0FBVSxNQUFNO0FBQzFDLHlCQUFPLENBQUMsZUFBZSxPQUFPLElBQUksU0FBUyxlQUFlLElBQUksSUFBSSxJQUFJO0FBQUEsZ0JBQzlGLENBQXFCO0FBQ0Q7QUFBQSxjQUNKLEtBQUs7QUFDRCxvQkFBSSxVQUFVLEdBQUc7QUFDakIsZ0NBQWdCQSxRQUFPLE9BQU8sU0FBVSxNQUFNO0FBQUUseUJBQU8sQ0FBQyxjQUFjLGVBQWUsSUFBSSxHQUFHLE9BQU87QUFBQSxnQkFBRSxDQUFFO0FBQ3ZHO0FBQUEsWUFDcEI7QUFDWSxtQkFBTztBQUFBLFVBQ25CLEdBQVdBLE9BQU07QUFDVCxjQUFJLGdCQUFnQkE7QUFDaEIsbUJBQU9BO0FBQ1gsc0JBQVksS0FBSyxTQUFVLEdBQUcsR0FBRztBQUM3QixtQkFBT1MsS0FBSSxxQkFBcUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDLENBQUMsS0FDdkRBLEtBQUksZUFBZSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFBQSxVQUN4RCxDQUFTO0FBQ0QsY0FBSSxJQUFJLFNBQVMsSUFBSSxRQUFRLFVBQVU7QUFDbkMsZ0JBQUksWUFBWSxTQUFTLElBQUksT0FBTztBQUNoQywwQkFBWSxTQUFTLElBQUk7QUFBQSxZQUN6QyxXQUNxQlQsUUFBTyxXQUFXLElBQUksU0FBUyxZQUFZLFNBQVMsSUFBSSxPQUFPO0FBQ3BFLHlCQUFXLFFBQVE7QUFBQSxZQUNuQztBQUFBLFVBQ0E7QUFDUSxpQkFBTyxZQUFZLE9BQU8sT0FBTyxXQUFXLElBQUk7QUFBQSxRQUN4RDtBQUVJLGlCQUFTLGVBQWUsSUFBSSxJQUFJO0FBQzVCLGlCQUFRUyxLQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssTUFBTSxLQUNoQ0EsS0FBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLE1BQU0sS0FDNUIsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxhQUN4QixDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHO0FBQUEsUUFDcEM7QUFFSSxpQkFBUyxjQUFjLFFBQVEsUUFBUSxZQUFZLFlBQVk7QUFDM0QsY0FBSSxXQUFXO0FBQ1gsbUJBQU8sV0FBVyxTQUFZLEtBQUs7QUFDdkMsY0FBSSxXQUFXO0FBQ1gsbUJBQU87QUFDWCxjQUFJLElBQUlBLEtBQUksUUFBUSxNQUFNO0FBQzFCLGNBQUksTUFBTSxHQUFHO0FBQ1QsZ0JBQUksY0FBYztBQUNkLHFCQUFPO0FBQ1gsZ0JBQUk7QUFDQSxxQkFBTztBQUNYLGdCQUFJO0FBQ0EscUJBQU87QUFBQSxVQUN2QjtBQUNRLGlCQUFPO0FBQUEsUUFDZjtBQUNJLGlCQUFTLGNBQWMsUUFBUSxRQUFRLFlBQVksWUFBWTtBQUMzRCxjQUFJLFdBQVc7QUFDWCxtQkFBTyxXQUFXLFNBQVksSUFBSTtBQUN0QyxjQUFJLFdBQVc7QUFDWCxtQkFBTztBQUNYLGNBQUksSUFBSUEsS0FBSSxRQUFRLE1BQU07QUFDMUIsY0FBSSxNQUFNLEdBQUc7QUFDVCxnQkFBSSxjQUFjO0FBQ2QscUJBQU87QUFDWCxnQkFBSTtBQUNBLHFCQUFPO0FBQ1gsZ0JBQUk7QUFDQSxxQkFBTztBQUFBLFVBQ3ZCO0FBQ1EsaUJBQU87QUFBQSxRQUNmO0FBQ0ksaUJBQVMsYUFBYSxJQUFJLElBQUk7QUFDMUIsaUJBQVEsY0FBYyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsV0FBVyxHQUFHLFNBQVMsS0FBSyxLQUNyRSxjQUFjLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsU0FBUyxLQUFLO0FBQUEsUUFDN0U7QUFFSSxpQkFBUyxvQkFBb0IsUUFBUSxXQUFXUCxPQUFNLEtBQUs7QUFDdkQsY0FBSSxXQUFXLE1BQU0sU0FBUyxPQUFPLFFBQVEsR0FBRyxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25FLGNBQUksQ0FBQztBQUNELG1CQUFPLENBQUE7QUFDWCxjQUFJLFVBQVUsU0FBUyxRQUFRQSxLQUFJO0FBQ25DLGNBQUksQ0FBQztBQUNELG1CQUFPLENBQUMsTUFBTSxPQUFPLFVBQVUsSUFBSTtBQUN2QyxjQUFJLFlBQVksSUFBSSxRQUFRLElBQUksTUFBTSxNQUFNLE9BQU87QUFDbkQsY0FBSSxVQUFVLFFBQVEsYUFBYSxFQUFFO0FBQ3JDLGNBQUksQ0FBQztBQUNELG1CQUFPLENBQUMsTUFBTSxPQUFPLFVBQVUsSUFBSTtBQUN2QyxrQkFBUUEsT0FBSTtBQUFBLFlBQ1IsS0FBSztBQUNELGtCQUFJLGFBQWEsUUFBUSxLQUFLLFNBQVUsT0FBTztBQUMzQyx1QkFBTyxNQUFNLElBQUksVUFBVSxJQUFJLFNBQzNCLE1BQU0sSUFBSSxXQUFXLElBQUksVUFDekIsZUFBZSxNQUFNLElBQUksTUFBTSxPQUFPLElBQUksTUFBTSxLQUFLO0FBQUEsY0FDN0UsQ0FBaUI7QUFDRCxrQkFBSTtBQUNBLHVCQUFPO0FBQUEsa0JBQ0g7QUFBQSxrQkFDQTtBQUFBLGtCQUNBO0FBQUEsa0JBQ0E7QUFBQTtBQUVSLGtCQUFJLGFBQWEsUUFBUSxLQUFLLFNBQVUsT0FBTztBQUMzQyxvQkFBSSxRQUFRLFdBQVcsTUFBTSxNQUFNLE1BQU0sSUFBSSxRQUFRO0FBQ3JELHVCQUFRLFNBQVMsSUFBSSxVQUNoQixJQUFJLFNBQVMsTUFBTSxJQUFJLFNBQVMsU0FDakMsYUFBYSxNQUFNLElBQUksTUFBTSxPQUFPLElBQUksTUFBTSxLQUFLO0FBQUEsY0FDM0UsQ0FBaUI7QUFDRCxxQkFBTyxDQUFDLFlBQVksT0FBTyxVQUFVLE9BQU87QUFBQSxZQUNoRCxLQUFLO0FBQ0Qsa0JBQUksYUFBYSxRQUFRLEtBQUssU0FBVSxPQUFPO0FBQzNDLHVCQUFPLGVBQWUsTUFBTSxJQUFJLE1BQU0sT0FBTyxJQUFJLE1BQU0sS0FBSztBQUFBLGNBQ2hGLENBQWlCO0FBQ0QscUJBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLFVBQVUsT0FBTztBQUFBLFVBQ25FO0FBQUEsUUFDQTtBQUVJLGlCQUFTLHNCQUFzQixZQUFZLFdBQVcsU0FBUyxRQUFRO0FBQ25FLHFCQUFXLFlBQVksSUFBSSxPQUFPO0FBQ2xDLGlCQUFPLGlCQUFpQixTQUFTLFdBQVk7QUFDekMsdUJBQVcsWUFBWSxPQUFPLE9BQU87QUFDckMsZ0JBQUksV0FBVyxZQUFZLFNBQVMsR0FBRztBQUNuQywrQkFBaUIsWUFBWSxTQUFTO0FBQUEsWUFDdEQ7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsaUJBQWlCLFlBQVksV0FBVztBQUM3QyxxQkFBVyxXQUFZO0FBQ25CLGdCQUFJLFdBQVcsWUFBWSxTQUFTLEdBQUc7QUFDbkMsMkJBQWEsV0FBVyxVQUFVO0FBQUEsWUFDbEQ7QUFBQSxVQUNBLEdBQVcsR0FBSTtBQUFBLFFBQ2Y7QUFFSSxZQUFJLGtCQUFrQjtBQUFBLFVBQ2xCLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLFFBQVEsU0FBVSxNQUFNO0FBQ3BCLGdCQUFJLFNBQVMsS0FBSyxPQUFPO0FBQ3pCLGdCQUFJLFNBQVMsU0FBUyxTQUFTLElBQUksSUFBSSxHQUFHLEVBQUUsYUFBYSxTQUFVLFFBQVEsTUFBTSxTQUFTO0FBQ2xGLGtCQUFJLFdBQVcsS0FBSyxZQUFZLFFBQVEsTUFBTSxPQUFPO0FBQ3JELGtCQUFJLFNBQVMsYUFBYTtBQUN0QixvQkFBSSxPQUFPLElBQUksZ0JBQWU7QUFDOUIsb0JBQUksU0FBUyxLQUFLO0FBQ2xCLG9CQUFJLGlCQUFpQixTQUFVLGNBQWM7QUFBRSx5QkFBTyxXQUFZO0FBQzlELHlCQUFLLE1BQUs7QUFDVix3QkFBSSxTQUFTLGFBQWE7QUFDdEIsMEJBQUksd0JBQXdCLG9CQUFJLElBQUc7QUFDbkMsK0JBQVMsS0FBSyxHQUFHLFdBQVcsUUFBUSxLQUFLLFNBQVMsUUFBUSxNQUFNO0FBQzVELDRCQUFJLFlBQVksU0FBUyxFQUFFO0FBQzNCLDRCQUFJLFdBQVcsTUFBTSxTQUFTLE9BQU8sUUFBUSxHQUFHLEVBQUUsT0FBTyxTQUFTLENBQUM7QUFDbkUsNEJBQUksVUFBVTtBQUNWLDhCQUFJLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFDaEMsOEJBQUksTUFBTSxTQUFTLGNBQWMsT0FBTyxTQUFVLElBQUk7QUFBRSxtQ0FBTyxHQUFHLFVBQVU7QUFBQSwwQkFBUyxDQUFFO0FBQ3ZGLDhCQUFJLFNBQVMsYUFBYSxnQkFBZ0IsU0FBUyxjQUFjO0FBQzdELHFDQUFTSyxNQUFLLEdBQUdPLE1BQUssT0FBTyxPQUFPLFNBQVMsUUFBUSxLQUFLLEdBQUdQLE1BQUtPLElBQUcsUUFBUVAsT0FBTTtBQUMvRSxrQ0FBSSxVQUFVTyxJQUFHUCxHQUFFO0FBQ25CLHVDQUFTLEtBQUssR0FBRyxLQUFLLFFBQVEsTUFBSyxHQUFJLEtBQUssR0FBRyxRQUFRLE1BQU07QUFDekQsb0NBQUksUUFBUSxHQUFHLEVBQUU7QUFDakIsb0NBQUksZUFBZSxNQUFNLFFBQVEsU0FBUyxZQUFZLEdBQUc7QUFDckQsK0NBQWEsU0FBUyxLQUFLO0FBQzNCLHdDQUFNLFlBQVksUUFBUSxTQUFVLFNBQVM7QUFBRSwyQ0FBTyxzQkFBc0IsSUFBSSxPQUFPO0FBQUEsbUNBQUk7QUFBQSxnQ0FDbko7QUFBQSw4QkFDQTtBQUFBLDRCQUNBO0FBQUEsMEJBQ0EsV0FDaUQsSUFBSSxTQUFTLEdBQUc7QUFDckIscUNBQVMsZ0JBQWdCLFNBQVMsY0FBYyxPQUFPLFNBQVUsSUFBSTtBQUFFLHFDQUFPLEdBQUcsVUFBVTtBQUFBLDRCQUFTLENBQUU7QUFDdEcscUNBQVMsS0FBSyxHQUFHLEtBQUssT0FBTyxPQUFPLFNBQVMsUUFBUSxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsTUFBTTtBQUMvRSxrQ0FBSSxVQUFVLEdBQUcsRUFBRTtBQUNuQix1Q0FBUyxLQUFLLEdBQUcsS0FBSyxRQUFRLE1BQUssR0FBSSxLQUFLLEdBQUcsUUFBUSxNQUFNO0FBQ3pELG9DQUFJLFFBQVEsR0FBRyxFQUFFO0FBQ2pCLG9DQUFJLE1BQU0sT0FBTyxRQUNiLFNBQVMsY0FDM0Q7QUFDa0Qsc0NBQUksZ0JBQWdCLENBQUMsTUFBTSxPQUFPO0FBQzlCLHdDQUFJLGdCQUFnQixPQUFPLFNBQVMsTUFBTSxHQUFHO0FBQzdDLHdDQUFJLFNBQVMsbUJBQW1CLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYTtBQUN0Rix3Q0FBSSxNQUFNLE9BQU87QUFDYixtREFBYSxTQUFTLEtBQUs7QUFDM0IsNENBQU0sWUFBWSxRQUFRLFNBQVUsU0FBUztBQUFFLCtDQUFPLHNCQUFzQixJQUFJLE9BQU87QUFBQSx1Q0FBSTtBQUFBLG9DQUMzSixXQUNxRSxXQUFXLE1BQU0sS0FBSztBQUMzQiw0Q0FBTSxNQUFNO0FBQ1osNENBQU0sVUFBVSxhQUFhLFFBQVEsRUFBRSxRQUFRLFFBQVE7QUFBQSxvQ0FDdkg7QUFBQSxrQ0FDQSxPQUM2RDtBQUNELHdDQUFJLE1BQU0sT0FBTztBQUNiLG1EQUFhLFNBQVMsS0FBSztBQUFBLG9DQUMzRjtBQUM0RCwwQ0FBTSxZQUFZLFFBQVEsU0FBVSxTQUFTO0FBQUUsNkNBQU8sc0JBQXNCLElBQUksT0FBTztBQUFBLHFDQUFJO0FBQUEsa0NBQ3ZKO0FBQUEsZ0NBQ0E7QUFBQSw4QkFDQTtBQUFBLDRCQUNBO0FBQUEsMEJBQ0E7QUFBQSx3QkFDQTtBQUFBLHNCQUNBO0FBQ2dDLDRDQUFzQixRQUFRLFNBQVUsU0FBUztBQUFFLCtCQUFPLFFBQU87QUFBQSx1QkFBSztBQUFBLG9CQUN0RztBQUFBLGtCQUNBO0FBQUEsZ0JBQTBCO0FBQ0YseUJBQVMsaUJBQWlCLFNBQVMsZUFBZSxLQUFLLEdBQUc7QUFBQSxrQkFDdEQ7QUFBQSxnQkFDNUIsQ0FBeUI7QUFDRCx5QkFBUyxpQkFBaUIsU0FBUyxlQUFlLEtBQUssR0FBRztBQUFBLGtCQUN0RDtBQUFBLGdCQUM1QixDQUF5QjtBQUNELHlCQUFTLGlCQUFpQixZQUFZLGVBQWUsSUFBSSxHQUFHO0FBQUEsa0JBQ3hEO0FBQUEsZ0JBQzVCLENBQXlCO0FBQUEsY0FDekI7QUFDb0IscUJBQU87QUFBQSxZQUMzQixHQUFtQixPQUFPLFNBQVUsV0FBVztBQUMzQixrQkFBSSxZQUFZLEtBQUssTUFBTSxTQUFTO0FBQ3BDLGtCQUFJLFVBQVUsVUFBVSxPQUFPO0FBQy9CLGtCQUFJLFVBQVUsU0FBUyxTQUFTLENBQUEsR0FBSSxTQUFTLEdBQUcsRUFBRSxRQUFRLFNBQVUsS0FBSztBQUNqRSxvQkFBSSxRQUFRLElBQUk7QUFDaEIsb0JBQUksUUFBUSxZQUNSLE1BQU0sR0FBRyxTQUFTLFVBQVUsY0FDNUIsTUFBTSxZQUNOLE1BQU0sU0FBUyxTQUFTLGFBQzFCO0FBQ0UseUJBQU8sVUFBVSxPQUFPLEdBQUc7QUFBQSxnQkFDM0Q7QUFDNEIsb0JBQUksV0FBVyxNQUFNLFNBQVMsT0FBTyxRQUFRLEdBQUcsRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUNuRSxvQkFBSSxDQUFDO0FBQ0QseUJBQU8sVUFBVSxPQUFPLEdBQUc7QUFDL0Isb0JBQUksVUFBVSxVQUFVLE9BQU8sR0FBRztBQUNsQyxxQkFBSyxJQUFJLFNBQVMsU0FBUyxJQUFJLFNBQVMsV0FBVyxJQUFJLE9BQU8sVUFBVSxNQUFNLGlCQUFpQixTQUFTLEdBQUcsRUFBRSxLQUFLLFNBQVUsS0FBSztBQUFFLHlCQUFPLE9BQU87QUFBQSxnQkFBSyxDQUFFLElBQUk7QUFDeEosMEJBQVEsS0FBSyxTQUFVLEtBQUs7QUFDeEIsd0JBQUksc0JBQXNCLFNBQVMsU0FBUyxDQUFBLEdBQUksR0FBRyxHQUFHLEVBQUUsUUFBUSxJQUFJLE9BQU8sSUFBSSxTQUFVLE9BQU8sR0FBRztBQUMzRiwwQkFBSUE7QUFDSiwwQkFBSSxJQUFJLFNBQVMsQ0FBQztBQUNkLCtCQUFPO0FBQ1gsMEJBQUksaUJBQWlCQSxNQUFLLFFBQVEsYUFBYSxRQUFRQSxRQUFPLFNBQVMsU0FBU0EsSUFBRyxTQUFTLEdBQUcsS0FDekYsVUFBVSxLQUFLLElBQ2YsU0FBUyxDQUFBLEdBQUksS0FBSztBQUN4QixtQ0FBYSxjQUFjLFFBQVEsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQzFELDZCQUFPO0FBQUEsb0JBQ25ELENBQXlDLEVBQUMsQ0FBRTtBQUNSLHdCQUFJLGNBQWMsNkJBQTZCLFVBQVUscUJBQXFCLEdBQUc7QUFDakYsNkJBQVMsY0FBYyxLQUFLLFdBQVc7QUFDdkMsbUNBQWUsV0FBWTtBQUFFLDZCQUFPLElBQUksZ0JBQWdCLHdCQUF3QixJQUFJLFlBQVk7QUFBQSxxQkFBSTtBQUFBLGtCQUN4SSxDQUFpQztBQUFBLGdCQUNqQyxPQUNpQztBQUNELDJCQUFTLGNBQWMsS0FBSyxHQUFHO0FBQy9CLHNCQUFJLGdCQUFnQix3QkFBd0IsSUFBSSxZQUFZO0FBQzVELDBCQUFRLEtBQUssU0FBVSxLQUFLO0FBQ3hCLHdCQUFJLElBQUksY0FBYyxHQUFHO0FBQ3JCLG1DQUFhLFNBQVMsZUFBZSxHQUFHO0FBQ3hDLDBCQUFJLGNBQWMsNkJBQTZCLFVBQVUsS0FBSyxHQUFHO0FBQ2pFLDBCQUFJLGFBQWE7QUFDYixpQ0FBUyxjQUFjLEtBQUssV0FBVztBQUFBLHNCQUNuRjtBQUN3QywwQkFBSSxnQkFBZ0Isd0JBQXdCLElBQUksWUFBWTtBQUFBLG9CQUNwRztBQUFBLGtCQUNBLENBQWlDO0FBQ0QsMEJBQVEsTUFBTSxXQUFZO0FBQ3RCLGlDQUFhLFNBQVMsZUFBZSxHQUFHO0FBQ3hDLHdCQUFJLGdCQUFnQix3QkFBd0IsSUFBSSxZQUFZO0FBQUEsa0JBQ2hHLENBQWlDO0FBQUEsZ0JBQ2pDO0FBQzRCLHVCQUFPO0FBQUEsY0FDbkMsR0FBMkIsT0FBTyxTQUFVLEtBQUs7QUFDckIsb0JBQUlBO0FBQ0osb0JBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEtBQUssQ0FBQyxrQkFBa0IsU0FBUyxHQUFHO0FBQ3JFLHlCQUFPLFVBQVUsTUFBTSxHQUFHO0FBQzlCLG9CQUFJLGtCQUFrQkEsTUFBSyxJQUFJLFdBQVcsUUFBUUEsUUFBTyxTQUFTLFNBQVNBLElBQUcsR0FBRyxTQUFTLFdBQVc7QUFDckcsb0JBQUlPLE1BQUssS0FBSyxVQUFVQSxJQUFHLFNBQVMsU0FBU0EsSUFBRztBQUNoRCxvQkFBSSxLQUFLLG9CQUFvQixRQUFRLFdBQVcsU0FBUyxHQUFHLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUM7QUFDekksb0JBQUksY0FBYyxZQUFZO0FBQzFCLDZCQUFXLFNBQVMsSUFBSTtBQUFBLGdCQUN4RCxPQUNpQztBQUNELHNCQUFJLFVBQVUsVUFBVSxNQUFNLEdBQUcsRUFBRSxLQUFLLFNBQVUsS0FBSztBQUNuRCx3QkFBSWQsVUFBUyxJQUFJO0FBQ2pCLHdCQUFJO0FBQ0EsaUNBQVcsTUFBTUE7QUFDckIsd0JBQUksZUFBZTtBQUNmLCtCQUFTLElBQUksR0FBRyxJQUFJQSxRQUFPLFFBQVEsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUMzQywrQkFBTyxPQUFPQSxRQUFPLENBQUMsQ0FBQztBQUFBLHNCQUNuRTtBQUN3Qyw2QkFBTyxPQUFPQSxPQUFNO0FBQUEsb0JBQzVELE9BQ3lDO0FBQ0QsMEJBQUksU0FBUyxVQUFVQSxPQUFNO0FBQUEsb0JBQ3JFO0FBQ29DLDJCQUFPO0FBQUEsa0JBQzNDLENBQWlDLEVBQUUsTUFBTSxTQUFVLE9BQU87QUFDdEIsd0JBQUksYUFBYTtBQUNiLG1DQUFhLFdBQVcsVUFBVTtBQUN0QywyQkFBTyxRQUFRLE9BQU8sS0FBSztBQUFBLGtCQUMvRCxDQUFpQztBQUNELCtCQUFhO0FBQUEsb0JBQ1QsUUFBUSxJQUFJO0FBQUEsb0JBQ1o7QUFBQSxvQkFDQSxhQUFhLG9CQUFJLElBQUc7QUFBQSxvQkFDcEIsTUFBTTtBQUFBLG9CQUNOO0FBQUEsb0JBQ0EsT0FBTztBQUFBO0FBRVgsc0JBQUksV0FBVztBQUNYLDhCQUFVLEtBQUssVUFBVTtBQUFBLGtCQUM3RCxPQUNxQztBQUNELGdDQUFZLENBQUMsVUFBVTtBQUN2Qix3QkFBSSxDQUFDLFVBQVU7QUFDWCxpQ0FBVyxNQUFNLFNBQVMsT0FBTyxRQUFRLEdBQUcsRUFBRSxPQUFPLFNBQVMsQ0FBQyxJQUFJO0FBQUEsd0JBQy9ELFNBQVM7QUFBQSwwQkFDTCxPQUFPLENBQUE7QUFBQSwwQkFDUCxPQUFPLENBQUE7QUFBQTt3QkFFWCxNQUFNLG9CQUFJLElBQUc7QUFBQSx3QkFDYixlQUFlLENBQUE7QUFBQSx3QkFDZixpQkFBaUIsQ0FBQTtBQUFBO29CQUU3RDtBQUNvQyw2QkFBUyxRQUFRLE1BQU0sSUFBSSxNQUFNLE1BQU0sUUFBUSxFQUFFLElBQUk7QUFBQSxrQkFDekY7QUFBQSxnQkFDQTtBQUM0QixzQ0FBc0IsWUFBWSxXQUFXLFNBQVMsTUFBTTtBQUM1RCx1QkFBTyxXQUFXLFFBQVEsS0FBSyxTQUFVLEtBQUs7QUFDMUMseUJBQU87QUFBQSxvQkFDSCxRQUFRLG1CQUFtQixJQUFJLFFBQVEsS0FBSyxhQUFhLFFBQVEsYUFBYSxTQUFTLFNBQVMsU0FBUyxlQUFlLFdBQVcsWUFBWSxhQUFhO0FBQUE7Z0JBRWhNLENBQTZCO0FBQUEsY0FDN0IsR0FBMkI7QUFDUCxxQkFBTztBQUFBLFlBQzNCLEdBQW1CO0FBQ1AsbUJBQU87QUFBQSxVQUNuQjtBQUFBO0FBR0ksaUJBQVMsT0FBTyxRQUFRLE9BQU87QUFDM0IsaUJBQU8sSUFBSSxNQUFNLFFBQVE7QUFBQSxZQUNyQixLQUFLLFNBQVV5QyxTQUFRLE1BQU0sVUFBVTtBQUNuQyxrQkFBSSxTQUFTO0FBQ1QsdUJBQU87QUFDWCxxQkFBTyxRQUFRLElBQUlBLFNBQVEsTUFBTSxRQUFRO0FBQUEsWUFDekQ7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBRUksWUFBSSxVQUFZLFdBQVk7QUFDeEIsbUJBQVNPLE9BQU0sTUFBTSxTQUFTO0FBQzFCLGdCQUFJLFFBQVE7QUFDWixpQkFBSyxlQUFlLENBQUE7QUFDcEIsaUJBQUssUUFBUTtBQUNiLGdCQUFJLE9BQU9BLE9BQU07QUFDakIsaUJBQUssV0FBVyxVQUFVLFNBQVM7QUFBQSxjQUMvQixRQUFRQSxPQUFNO0FBQUEsY0FBUSxVQUFVO0FBQUEsY0FDaEMsV0FBVyxLQUFLO0FBQUEsY0FBVyxhQUFhLEtBQUs7QUFBQSxjQUFhLE9BQU87QUFBQSxZQUFRLEdBQUksT0FBTztBQUN4RixpQkFBSyxRQUFRO0FBQUEsY0FDVCxXQUFXLFFBQVE7QUFBQSxjQUNuQixhQUFhLFFBQVE7QUFBQTtBQUV6QixnQkFBSSxTQUFTLFFBQVE7QUFDckIsaUJBQUssWUFBWSxDQUFBO0FBQ2pCLGlCQUFLLFlBQVksQ0FBQTtBQUNqQixpQkFBSyxjQUFjLENBQUE7QUFDbkIsaUJBQUssYUFBYSxDQUFBO0FBQ2xCLGlCQUFLLFFBQVE7QUFDYixpQkFBSyxTQUFTO0FBQ2QsZ0JBQUksUUFBUTtBQUFBLGNBQ1IsYUFBYTtBQUFBLGNBQ2IsZUFBZTtBQUFBLGNBQ2YsbUJBQW1CO0FBQUEsY0FDbkIsY0FBYztBQUFBLGNBQ2QsZ0JBQWdCO0FBQUEsY0FDaEIsZ0JBQWdCO0FBQUEsY0FDaEIsWUFBWTtBQUFBLGNBQ1osZUFBZTtBQUFBLGNBQ2YsWUFBWTtBQUFBLGNBQ1osZ0JBQWdCO0FBQUEsY0FDaEIsVUFBVSxRQUFRO0FBQUE7QUFFdEIsa0JBQU0saUJBQWlCLElBQUksYUFBYSxTQUFVLFNBQVM7QUFDdkQsb0JBQU0saUJBQWlCO0FBQUEsWUFDdkMsQ0FBYTtBQUNELGtCQUFNLGdCQUFnQixJQUFJLGFBQWEsU0FBVSxHQUFHLFFBQVE7QUFDeEQsb0JBQU0sYUFBYTtBQUFBLFlBQ25DLENBQWE7QUFDRCxpQkFBSyxTQUFTO0FBQ2QsaUJBQUssT0FBTztBQUNaLGlCQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxpQkFBaUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxFQUFDLENBQUU7QUFDekcsaUJBQUssT0FBTyxTQUFVLE9BQU8sVUFBVTtBQUNuQyxrQkFBSSxLQUFLLFdBQVk7QUFDakIsb0JBQUksT0FBTyxDQUFBO0FBQ1gseUJBQVMsS0FBSyxHQUFHLEtBQUssVUFBVSxRQUFRLE1BQU07QUFDMUMsdUJBQUssRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUFBLGdCQUMvQztBQUNvQixzQkFBTSxHQUFHLEtBQUssRUFBRSxZQUFZLEVBQUU7QUFDOUIseUJBQVMsTUFBTSxPQUFPLElBQUk7QUFBQSxjQUM5QztBQUNnQixxQkFBTyxNQUFNLEdBQUcsT0FBTyxFQUFFO0FBQUEsWUFDekM7QUFDWSxpQkFBSyxHQUFHLE1BQU0sWUFBWSxTQUFTLEtBQUssR0FBRyxNQUFNLFdBQVcsU0FBVSxXQUFXO0FBQzdFLHFCQUFPLFNBQVUsWUFBWSxTQUFTO0FBQ2xDLGdCQUFBQSxPQUFNLElBQUksV0FBWTtBQUNsQixzQkFBSUMsU0FBUSxNQUFNO0FBQ2xCLHNCQUFJQSxPQUFNLGNBQWM7QUFDcEIsd0JBQUksQ0FBQ0EsT0FBTTtBQUNQLG1DQUFhLFFBQU8sRUFBRyxLQUFLLFVBQVU7QUFDMUMsd0JBQUk7QUFDQSxnQ0FBVSxVQUFVO0FBQUEsa0JBQ3BELFdBQ2lDQSxPQUFNLG1CQUFtQjtBQUM5QixvQkFBQUEsT0FBTSxrQkFBa0IsS0FBSyxVQUFVO0FBQ3ZDLHdCQUFJO0FBQ0EsZ0NBQVUsVUFBVTtBQUFBLGtCQUNwRCxPQUM2QjtBQUNELDhCQUFVLFVBQVU7QUFDcEIsd0JBQUksT0FBTztBQUNYLHdCQUFJLENBQUM7QUFDRCxnQ0FBVSxTQUFTLGNBQWM7QUFDN0IsNkJBQUssR0FBRyxNQUFNLFlBQVksVUFBVTtBQUNwQyw2QkFBSyxHQUFHLE1BQU0sWUFBWSxXQUFXO0FBQUEsc0JBQ3pFLENBQWlDO0FBQUEsa0JBQ2pDO0FBQUEsZ0JBQ0EsQ0FBcUI7QUFBQSxjQUNyQjtBQUFBLFlBQ0EsQ0FBYTtBQUNELGlCQUFLLGFBQWEsNEJBQTRCLElBQUk7QUFDbEQsaUJBQUssUUFBUSx1QkFBdUIsSUFBSTtBQUN4QyxpQkFBSyxjQUFjLDZCQUE2QixJQUFJO0FBQ3BELGlCQUFLLFVBQVUseUJBQXlCLElBQUk7QUFDNUMsaUJBQUssY0FBYyw2QkFBNkIsSUFBSTtBQUNwRCxpQkFBSyxHQUFHLGlCQUFpQixTQUFVLElBQUk7QUFDbkMsa0JBQUksR0FBRyxhQUFhO0FBQ2hCLHdCQUFRLEtBQUssaURBQWlELE9BQU8sTUFBTSxNQUFNLDBDQUEwQyxDQUFDO0FBQUE7QUFFNUgsd0JBQVEsS0FBSyxnREFBZ0QsT0FBTyxNQUFNLE1BQU0saURBQWlELENBQUM7QUFDdEksb0JBQU0sTUFBTSxFQUFFLGlCQUFpQixNQUFLLENBQUU7QUFBQSxZQUN0RCxDQUFhO0FBQ0QsaUJBQUssR0FBRyxXQUFXLFNBQVUsSUFBSTtBQUM3QixrQkFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLGFBQWEsR0FBRztBQUNyQyx3QkFBUSxLQUFLLGlCQUFpQixPQUFPLE1BQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUFBO0FBRWxFLHdCQUFRLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxnREFBZ0QsRUFBRSxPQUFPLEdBQUcsYUFBYSxFQUFFLENBQUM7QUFBQSxZQUM1SSxDQUFhO0FBQ0QsaUJBQUssVUFBVSxVQUFVLFFBQVEsV0FBVztBQUM1QyxpQkFBSyxxQkFBcUIsU0FBVSxNQUFNLFlBQVksVUFBVSxtQkFBbUI7QUFBRSxxQkFBTyxJQUFJLE1BQU0sWUFBWSxNQUFNLFlBQVksVUFBVSxNQUFNLFNBQVMsNkJBQTZCLGlCQUFpQjtBQUFBLFlBQUU7QUFDN00saUJBQUssaUJBQWlCLFNBQVUsSUFBSTtBQUNoQyxvQkFBTSxHQUFHLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDM0IsMEJBQ0ssT0FBTyxTQUFVLEdBQUc7QUFBRSx1QkFBTyxFQUFFLFNBQVMsTUFBTSxRQUFRLE1BQU0sU0FBUyxDQUFDLEVBQUUsT0FBTztBQUFBLGNBQVEsQ0FBRSxFQUN6RixJQUFJLFNBQVUsR0FBRztBQUFFLHVCQUFPLEVBQUUsR0FBRyxlQUFlLEVBQUUsS0FBSyxFQUFFO0FBQUEsZUFBSTtBQUFBLFlBQ2hGO0FBQ1ksaUJBQUssSUFBSSw2QkFBNkI7QUFDdEMsaUJBQUssSUFBSSxlQUFlO0FBQ3hCLGlCQUFLLElBQUksdUJBQXVCO0FBQ2hDLGlCQUFLLElBQUksc0JBQXNCO0FBQy9CLGlCQUFLLElBQUksZUFBZTtBQUN4QixnQkFBSSxRQUFRLElBQUksTUFBTSxNQUFNO0FBQUEsY0FDeEIsS0FBSyxTQUFVLEdBQUcsTUFBTSxVQUFVO0FBQzlCLG9CQUFJLFNBQVM7QUFDVCx5QkFBTztBQUNYLG9CQUFJLFNBQVM7QUFDVCx5QkFBTyxTQUFVLFdBQVc7QUFBRSwyQkFBTyxPQUFPLE1BQU0sTUFBTSxTQUFTLEdBQUcsS0FBSztBQUFBLGtCQUFFO0FBQy9FLG9CQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsTUFBTSxRQUFRO0FBQ3RDLG9CQUFJLGNBQWM7QUFDZCx5QkFBTyxPQUFPLElBQUksS0FBSztBQUMzQixvQkFBSSxTQUFTO0FBQ1QseUJBQU8sR0FBRyxJQUFJLFNBQVUsR0FBRztBQUFFLDJCQUFPLE9BQU8sR0FBRyxLQUFLO0FBQUEsbUJBQUk7QUFDM0Qsb0JBQUksU0FBUztBQUNULHlCQUFPLFdBQVk7QUFDZix3QkFBSSxLQUFLLEdBQUcsTUFBTSxNQUFNLFNBQVM7QUFDakMsMkJBQU8sT0FBTyxJQUFJLEtBQUs7QUFBQSxrQkFDbkQ7QUFDb0IsdUJBQU87QUFBQSxjQUMzQjtBQUFBLFlBQ0EsQ0FBYTtBQUNELGlCQUFLLE1BQU07QUFDWCxtQkFBTyxRQUFRLFNBQVUsT0FBTztBQUFFLHFCQUFPLE1BQU0sS0FBSztBQUFBLGFBQUk7QUFBQSxVQUNwRTtBQUNRLFVBQUFELE9BQU0sVUFBVSxVQUFVLFNBQVUsZUFBZTtBQUMvQyxnQkFBSSxNQUFNLGFBQWEsS0FBSyxnQkFBZ0I7QUFDeEMsb0JBQU0sSUFBSSxXQUFXLEtBQUssd0NBQXdDO0FBQ3RFLDRCQUFnQixLQUFLLE1BQU0sZ0JBQWdCLEVBQUUsSUFBSTtBQUNqRCxnQkFBSSxLQUFLLFNBQVMsS0FBSyxPQUFPO0FBQzFCLG9CQUFNLElBQUksV0FBVyxPQUFPLDBDQUEwQztBQUMxRSxpQkFBSyxRQUFRLEtBQUssSUFBSSxLQUFLLE9BQU8sYUFBYTtBQUMvQyxnQkFBSSxXQUFXLEtBQUs7QUFDcEIsZ0JBQUksa0JBQWtCLFNBQVMsT0FBTyxTQUFVLEdBQUc7QUFBRSxxQkFBTyxFQUFFLEtBQUssWUFBWTtBQUFBLFlBQWMsQ0FBRSxFQUFFLENBQUM7QUFDbEcsZ0JBQUk7QUFDQSxxQkFBTztBQUNYLDhCQUFrQixJQUFJLEtBQUssUUFBUSxhQUFhO0FBQ2hELHFCQUFTLEtBQUssZUFBZTtBQUM3QixxQkFBUyxLQUFLLGlCQUFpQjtBQUMvQiw0QkFBZ0IsT0FBTyxFQUFFO0FBQ3pCLGlCQUFLLE9BQU8sYUFBYTtBQUN6QixtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLGFBQWEsU0FBVSxJQUFJO0FBQ3ZDLGdCQUFJLFFBQVE7QUFDWixtQkFBUSxLQUFLLFVBQVUsS0FBSyxPQUFPLGdCQUFnQixJQUFJLGNBQWMsS0FBSyxRQUFTLEdBQUUsSUFBSyxJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDbEksa0JBQUksTUFBTSxPQUFPLGNBQWM7QUFDM0IsdUJBQU8sT0FBTyxJQUFJLFdBQVcsZUFBZSxNQUFNLE9BQU8sV0FBVyxDQUFDO0FBQUEsY0FDekY7QUFDZ0Isa0JBQUksQ0FBQyxNQUFNLE9BQU8sZUFBZTtBQUM3QixvQkFBSSxDQUFDLE1BQU0sT0FBTyxVQUFVO0FBQ3hCLHlCQUFPLElBQUksV0FBVyxnQkFBZ0I7QUFDdEM7QUFBQSxnQkFDeEI7QUFDb0Isc0JBQU0sS0FBSSxFQUFHLE1BQU0sR0FBRztBQUFBLGNBQzFDO0FBQ2dCLG9CQUFNLE9BQU8sZUFBZSxLQUFLLFNBQVMsTUFBTTtBQUFBLFlBQ2hFLENBQWEsRUFBRSxLQUFLLEVBQUU7QUFBQSxVQUN0QjtBQUNRLFVBQUFBLE9BQU0sVUFBVSxNQUFNLFNBQVV6QyxLQUFJO0FBQ2hDLGdCQUFJLFFBQVFBLElBQUcsT0FBTyxTQUFTQSxJQUFHLFFBQVEsUUFBUUEsSUFBRyxPQUFPLE9BQU9BLElBQUc7QUFDdEUsZ0JBQUk7QUFDQSxtQkFBSyxNQUFNLEVBQUUsT0FBYyxNQUFZO0FBQzNDLGdCQUFJLGNBQWMsS0FBSyxhQUFhLEtBQUssTUFBTSxLQUFLLGFBQWEsS0FBSyxJQUFJO0FBQzFFLHdCQUFZLEtBQUssRUFBRSxPQUFjLFFBQWdCLE9BQU8sU0FBUyxPQUFPLEtBQUssT0FBTyxLQUFVLENBQUU7QUFDaEcsd0JBQVksS0FBSyxTQUFVLEdBQUcsR0FBRztBQUFFLHFCQUFPLEVBQUUsUUFBUSxFQUFFO0FBQUEsYUFBUTtBQUM5RCxtQkFBTztBQUFBLFVBQ25CO0FBQ1EsVUFBQXlDLE9BQU0sVUFBVSxRQUFRLFNBQVV6QyxLQUFJO0FBQ2xDLGdCQUFJLFFBQVFBLElBQUcsT0FBTyxPQUFPQSxJQUFHLE1BQU0sU0FBU0EsSUFBRztBQUNsRCxnQkFBSSxTQUFTLEtBQUssYUFBYSxLQUFLLEdBQUc7QUFDbkMsbUJBQUssYUFBYSxLQUFLLElBQUksS0FBSyxhQUFhLEtBQUssRUFBRSxPQUFPLFNBQVUsSUFBSTtBQUNyRSx1QkFBTyxTQUFTLEdBQUcsV0FBVyxTQUMxQixPQUFPLEdBQUcsU0FBUyxPQUNmO0FBQUEsY0FDNUIsQ0FBaUI7QUFBQSxZQUNqQjtBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFDUSxVQUFBeUMsT0FBTSxVQUFVLE9BQU8sV0FBWTtBQUMvQixnQkFBSSxRQUFRO0FBQ1osbUJBQU87QUFBQSxjQUFPO0FBQUEsY0FDZCxXQUFZO0FBQUUsdUJBQU8sVUFBVSxLQUFLO0FBQUEsY0FBRTtBQUFBLFlBQUU7QUFBQSxVQUNwRDtBQUNRLFVBQUFBLE9BQU0sVUFBVSxTQUFTLFdBQVk7QUFDakMsaUJBQUssR0FBRyxNQUFNLEtBQUssSUFBSSxZQUFZLE9BQU8sQ0FBQztBQUMzQyxnQkFBSSxRQUFRLEtBQUs7QUFDakIsZ0JBQUksTUFBTSxZQUFZLFFBQVEsSUFBSTtBQUNsQyxnQkFBSSxPQUFPO0FBQ1AsMEJBQVksT0FBTyxLQUFLLENBQUM7QUFDN0IsZ0JBQUksS0FBSyxPQUFPO0FBQ1osa0JBQUk7QUFDQSxxQkFBSyxNQUFNLE1BQUs7QUFBQSxjQUNwQyxTQUN1QixHQUFHO0FBQUEsY0FBQTtBQUNWLG1CQUFLLFFBQVE7QUFBQSxZQUM3QjtBQUNZLGdCQUFJLENBQUMsTUFBTSxlQUFlO0FBQ3RCLG9CQUFNLGlCQUFpQixJQUFJLGFBQWEsU0FBVSxTQUFTO0FBQ3ZELHNCQUFNLGlCQUFpQjtBQUFBLGNBQzNDLENBQWlCO0FBQ0Qsb0JBQU0sZ0JBQWdCLElBQUksYUFBYSxTQUFVLEdBQUcsUUFBUTtBQUN4RCxzQkFBTSxhQUFhO0FBQUEsY0FDdkMsQ0FBaUI7QUFBQSxZQUNqQjtBQUFBLFVBQ0E7QUFDUSxVQUFBQSxPQUFNLFVBQVUsUUFBUSxTQUFVekMsS0FBSTtBQUNsQyxnQkFBSU8sTUFBS1AsUUFBTyxTQUFTLEVBQUUsaUJBQWlCLEtBQUksSUFBS0EsS0FBSSxrQkFBa0JPLElBQUc7QUFDOUUsZ0JBQUksUUFBUSxLQUFLO0FBQ2pCLGdCQUFJLGlCQUFpQjtBQUNqQixrQkFBSSxNQUFNLGVBQWU7QUFDckIsc0JBQU0sV0FBVyxJQUFJLFdBQVcsZUFBYyxDQUFFO0FBQUEsY0FDcEU7QUFDZ0IsbUJBQUssT0FBTTtBQUNYLG9CQUFNLFdBQVc7QUFDakIsb0JBQU0sY0FBYyxJQUFJLFdBQVcsZUFBYztBQUFBLFlBQ2pFLE9BQ2lCO0FBQ0QsbUJBQUssT0FBTTtBQUNYLG9CQUFNLFdBQVcsS0FBSyxTQUFTLFlBQzNCLE1BQU07QUFDVixvQkFBTSxlQUFlO0FBQ3JCLG9CQUFNLGNBQWM7QUFBQSxZQUNwQztBQUFBLFVBQ0E7QUFDUSxVQUFBa0MsT0FBTSxVQUFVLFNBQVMsU0FBVSxjQUFjO0FBQzdDLGdCQUFJLFFBQVE7QUFDWixnQkFBSSxpQkFBaUIsUUFBUTtBQUFFLDZCQUFlLEVBQUUsaUJBQWlCLEtBQUk7QUFBQSxZQUFHO0FBQ3hFLGdCQUFJLHNCQUFzQixVQUFVLFNBQVMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxNQUFNO0FBQzFFLGdCQUFJLFFBQVEsS0FBSztBQUNqQixtQkFBTyxJQUFJLGFBQWEsU0FBVSxTQUFTLFFBQVE7QUFDL0Msa0JBQUksV0FBVyxXQUFZO0FBQ3ZCLHNCQUFNLE1BQU0sWUFBWTtBQUN4QixvQkFBSSxNQUFNLE1BQU0sTUFBTSxVQUFVLGVBQWUsTUFBTSxJQUFJO0FBQ3pELG9CQUFJLFlBQVksS0FBSyxXQUFZO0FBQzdCLHFDQUFtQixNQUFNLE9BQU8sTUFBTSxJQUFJO0FBQzFDLDBCQUFPO0FBQUEsZ0JBQy9CLENBQXFCO0FBQ0Qsb0JBQUksVUFBVSxtQkFBbUIsTUFBTTtBQUN2QyxvQkFBSSxZQUFZLE1BQU07QUFBQSxjQUMxQztBQUNnQixrQkFBSTtBQUNBLHNCQUFNLElBQUksV0FBVyxnQkFBZ0IsOENBQThDO0FBQ3ZGLGtCQUFJLE1BQU0sZUFBZTtBQUNyQixzQkFBTSxlQUFlLEtBQUssUUFBUTtBQUFBLGNBQ3RELE9BQ3FCO0FBQ0QseUJBQVE7QUFBQSxjQUM1QjtBQUFBLFlBQ0EsQ0FBYTtBQUFBLFVBQ2I7QUFDUSxVQUFBQSxPQUFNLFVBQVUsWUFBWSxXQUFZO0FBQ3BDLG1CQUFPLEtBQUs7QUFBQSxVQUN4QjtBQUNRLFVBQUFBLE9BQU0sVUFBVSxTQUFTLFdBQVk7QUFDakMsbUJBQU8sS0FBSyxVQUFVO0FBQUEsVUFDbEM7QUFDUSxVQUFBQSxPQUFNLFVBQVUsZ0JBQWdCLFdBQVk7QUFDeEMsZ0JBQUksY0FBYyxLQUFLLE9BQU87QUFDOUIsbUJBQU8sZUFBZ0IsWUFBWSxTQUFTO0FBQUEsVUFDeEQ7QUFDUSxVQUFBQSxPQUFNLFVBQVUsWUFBWSxXQUFZO0FBQ3BDLG1CQUFPLEtBQUssT0FBTyxnQkFBZ0I7QUFBQSxVQUMvQztBQUNRLFVBQUFBLE9BQU0sVUFBVSxvQkFBb0IsV0FBWTtBQUM1QyxtQkFBTyxLQUFLLE9BQU87QUFBQSxVQUMvQjtBQUNRLGlCQUFPLGVBQWVBLE9BQU0sV0FBVyxVQUFVO0FBQUEsWUFDN0MsS0FBSyxXQUFZO0FBQ2Isa0JBQUksUUFBUTtBQUNaLHFCQUFPLEtBQUssS0FBSyxVQUFVLEVBQUUsSUFBSSxTQUFVLE1BQU07QUFBRSx1QkFBTyxNQUFNLFdBQVcsSUFBSTtBQUFBLGNBQUUsQ0FBRTtBQUFBLFlBQ25HO0FBQUEsWUFDWSxZQUFZO0FBQUEsWUFDWixjQUFjO0FBQUEsVUFDMUIsQ0FBUztBQUNELFVBQUFBLE9BQU0sVUFBVSxjQUFjLFdBQVk7QUFDdEMsZ0JBQUksT0FBTyx1QkFBdUIsTUFBTSxNQUFNLFNBQVM7QUFDdkQsbUJBQU8sS0FBSyxhQUFhLE1BQU0sTUFBTSxJQUFJO0FBQUEsVUFDckQ7QUFDUSxVQUFBQSxPQUFNLFVBQVUsZUFBZSxTQUFVLE1BQU0sUUFBUSxXQUFXO0FBQzlELGdCQUFJLFFBQVE7QUFDWixnQkFBSSxvQkFBb0IsSUFBSTtBQUM1QixnQkFBSSxDQUFDLHFCQUFxQixrQkFBa0IsT0FBTyxRQUFRLEtBQUssUUFBUSxHQUFHLE1BQU07QUFDN0Usa0NBQW9CO0FBQ3hCLGdCQUFJLG1CQUFtQixLQUFLLFFBQVEsR0FBRyxNQUFNO0FBQzdDLG1CQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsRUFBRSxRQUFRLEtBQUssRUFBRTtBQUM1QyxnQkFBSSxTQUFTO0FBQ2IsZ0JBQUk7QUFDQSwyQkFBYSxPQUFPLElBQUksU0FBVSxPQUFPO0FBQ3JDLG9CQUFJLFlBQVksaUJBQWlCLE1BQU0sUUFBUSxNQUFNLE9BQU87QUFDNUQsb0JBQUksT0FBTyxjQUFjO0FBQ3JCLHdCQUFNLElBQUksVUFBVSxpRkFBaUY7QUFDekcsdUJBQU87QUFBQSxjQUMzQixDQUFpQjtBQUNELGtCQUFJLFFBQVEsT0FBTyxTQUFTO0FBQ3hCLDBCQUFVO0FBQUEsdUJBQ0wsUUFBUSxRQUFRLFFBQVE7QUFDN0IsMEJBQVU7QUFBQTtBQUVWLHNCQUFNLElBQUksV0FBVyxnQkFBZ0IsK0JBQStCLElBQUk7QUFDNUUsa0JBQUksbUJBQW1CO0FBQ25CLG9CQUFJLGtCQUFrQixTQUFTLFlBQVksWUFBWSxXQUFXO0FBQzlELHNCQUFJLGtCQUFrQjtBQUNsQix3Q0FBb0I7QUFBQSxrQkFDaEQ7QUFFNEIsMEJBQU0sSUFBSSxXQUFXLGVBQWUsd0ZBQXdGO0FBQUEsZ0JBQ3hKO0FBQ29CLG9CQUFJLG1CQUFtQjtBQUNuQiw2QkFBVyxRQUFRLFNBQVUsV0FBVztBQUNwQyx3QkFBSSxxQkFBcUIsa0JBQWtCLFdBQVcsUUFBUSxTQUFTLE1BQU0sSUFBSTtBQUM3RSwwQkFBSSxrQkFBa0I7QUFDbEIsNENBQW9CO0FBQUEsc0JBQ3hEO0FBRW9DLDhCQUFNLElBQUksV0FBVyxlQUFlLFdBQVcsWUFDM0Msc0NBQXNDO0FBQUEsb0JBQzlFO0FBQUEsa0JBQ0EsQ0FBeUI7QUFBQSxnQkFDekI7QUFDb0Isb0JBQUksb0JBQW9CLHFCQUFxQixDQUFDLGtCQUFrQixRQUFRO0FBQ3BFLHNDQUFvQjtBQUFBLGdCQUM1QztBQUFBLGNBQ0E7QUFBQSxZQUNBLFNBQ21CLEdBQUc7QUFDTixxQkFBTyxvQkFDSCxrQkFBa0IsU0FBUyxNQUFNLFNBQVUsR0FBRyxRQUFRO0FBQUUsdUJBQU8sQ0FBQztBQUFBLGVBQUksSUFDcEUsVUFBVSxDQUFDO0FBQUEsWUFDL0I7QUFDWSxnQkFBSSxtQkFBbUIsc0JBQXNCLEtBQUssTUFBTSxNQUFNLFNBQVMsWUFBWSxtQkFBbUIsU0FBUztBQUMvRyxtQkFBUSxvQkFDSixrQkFBa0IsU0FBUyxTQUFTLGtCQUFrQixNQUFNLElBQzVELElBQUksUUFDQSxPQUFPLElBQUksV0FBVyxXQUFZO0FBQUUscUJBQU8sTUFBTSxXQUFXLGdCQUFnQjtBQUFBLGFBQUksSUFDaEYsS0FBSyxXQUFXLGdCQUFnQjtBQUFBLFVBQ3BEO0FBQ1EsVUFBQUEsT0FBTSxVQUFVLFFBQVEsU0FBVSxXQUFXO0FBQ3pDLGdCQUFJLENBQUMsT0FBTyxLQUFLLFlBQVksU0FBUyxHQUFHO0FBQ3JDLG9CQUFNLElBQUksV0FBVyxhQUFhLFNBQVMsT0FBTyxXQUFXLGlCQUFpQixDQUFDO0FBQUEsWUFDL0Y7QUFDWSxtQkFBTyxLQUFLLFdBQVcsU0FBUztBQUFBLFVBQzVDO0FBQ1EsaUJBQU9BO0FBQUEsUUFDZjtBQUVJLFlBQUksbUJBQW1CLE9BQU8sV0FBVyxlQUFlLGdCQUFnQixTQUNsRSxPQUFPLGFBQ1A7QUFDTixZQUFJLGFBQWUsV0FBWTtBQUMzQixtQkFBU0UsWUFBVyxXQUFXO0FBQzNCLGlCQUFLLGFBQWE7QUFBQSxVQUM5QjtBQUNRLFVBQUFBLFlBQVcsVUFBVSxZQUFZLFNBQVUsR0FBRyxPQUFPLFVBQVU7QUFDM0QsbUJBQU8sS0FBSyxXQUFXLENBQUMsS0FBSyxPQUFPLE1BQU0sYUFBYSxFQUFFLE1BQU0sR0FBRyxPQUFjLFNBQWtCLElBQUssQ0FBQztBQUFBLFVBQ3BIO0FBQ1EsVUFBQUEsWUFBVyxVQUFVLGdCQUFnQixJQUFJLFdBQVk7QUFDakQsbUJBQU87QUFBQSxVQUNuQjtBQUNRLGlCQUFPQTtBQUFBLFFBQ2Y7QUFFSSxZQUFJO0FBQ0osWUFBSTtBQUNBLG9CQUFVO0FBQUEsWUFDTixXQUFXLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixRQUFRLG1CQUFtQixRQUFRO0FBQUEsWUFDM0YsYUFBYSxRQUFRLGVBQWUsUUFBUTtBQUFBO1FBRXhELFNBQ1csR0FBRztBQUNOLG9CQUFVLEVBQUUsV0FBVyxNQUFNLGFBQWEsS0FBSTtBQUFBLFFBQ3REO0FBRUksaUJBQVNDLFdBQVUsU0FBUztBQUN4QixjQUFJLFdBQVc7QUFDZixjQUFJO0FBQ0osY0FBSSxhQUFhLElBQUksV0FBVyxTQUFVLFVBQVU7QUFDaEQsZ0JBQUksbUJBQW1CLGdCQUFnQixPQUFPO0FBQzlDLHFCQUFTLFFBQVEsS0FBSztBQUNsQixrQkFBSSxjQUFjLG9CQUFtQjtBQUNyQyxrQkFBSTtBQUNBLG9CQUFJLGtCQUFrQjtBQUNsQiwwQ0FBdUI7QUFBQSxnQkFDL0M7QUFDb0Isb0JBQUksS0FBSyxTQUFTLFNBQVMsR0FBRztBQUM5QixvQkFBSSxrQkFBa0I7QUFDbEIsdUJBQUssR0FBRyxRQUFRLHVCQUF1QjtBQUFBLGdCQUMvRDtBQUNvQix1QkFBTztBQUFBLGNBQzNCO0FBRW9CLCtCQUFlLGtCQUFpQjtBQUFBLGNBQ3BEO0FBQUEsWUFDQTtBQUNZLGdCQUFJLFNBQVM7QUFDYixnQkFBSTtBQUNKLGdCQUFJLFlBQVksQ0FBQTtBQUNoQixnQkFBSSxhQUFhLENBQUE7QUFDakIsZ0JBQUksZUFBZTtBQUFBLGNBQ2YsSUFBSSxTQUFTO0FBQ1QsdUJBQU87QUFBQSxjQUMzQjtBQUFBLGNBQ2dCLGFBQWEsV0FBWTtBQUNyQixvQkFBSTtBQUNBO0FBQ0oseUJBQVM7QUFDVCxvQkFBSTtBQUNBLGtDQUFnQixNQUFLO0FBQ3pCLG9CQUFJO0FBQ0EsK0JBQWEsZUFBZSxZQUFZLGdCQUFnQjtBQUFBLGNBQ2hGO0FBQUE7QUFFWSxxQkFBUyxTQUFTLFNBQVMsTUFBTSxZQUFZO0FBQzdDLGdCQUFJLG1CQUFtQjtBQUN2QixnQkFBSSxVQUFVLFdBQVk7QUFBRSxxQkFBTyxvQkFBb0IsUUFBUTtBQUFBLFlBQUU7QUFDakUscUJBQVMsZUFBZTtBQUNwQixxQkFBTyxlQUFlLFlBQVksU0FBUztBQUFBLFlBQzNEO0FBQ1ksZ0JBQUksbUJBQW1CLFNBQVUsT0FBTztBQUNwQyxxQ0FBdUIsV0FBVyxLQUFLO0FBQ3ZDLGtCQUFJLGFBQVksR0FBSTtBQUNoQix3QkFBTztBQUFBLGNBQzNCO0FBQUEsWUFDQTtBQUNZLGdCQUFJLFdBQVcsV0FBWTtBQUN2QixrQkFBSSxVQUNBLENBQUMsUUFBUSxXQUNaO0FBQ0c7QUFBQSxjQUNwQjtBQUNnQiwwQkFBWSxDQUFBO0FBQ1osa0JBQUksU0FBUyxDQUFBO0FBQ2Isa0JBQUk7QUFDQSxnQ0FBZ0IsTUFBSztBQUN6QixnQ0FBa0IsSUFBSSxnQkFBZTtBQUNyQyxrQkFBSSxNQUFNO0FBQUEsZ0JBQ047QUFBQSxnQkFDQSxRQUFRLGdCQUFnQjtBQUFBLGdCQUN4QixTQUFTO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQSxPQUFPO0FBQUE7QUFFWCxrQkFBSSxNQUFNLFFBQVEsR0FBRztBQUNyQixzQkFBUSxRQUFRLEdBQUcsRUFBRSxLQUFLLFNBQVVuRCxTQUFRO0FBQ3hDLDJCQUFXO0FBQ1gsK0JBQWVBO0FBQ2Ysb0JBQUksVUFBVSxJQUFJLE9BQU8sU0FBUztBQUM5QjtBQUFBLGdCQUN4QjtBQUNvQiw0QkFBWSxDQUFBO0FBQ1osNkJBQWE7QUFDYixvQkFBSSxDQUFDLGNBQWMsVUFBVSxLQUFLLENBQUMsa0JBQWtCO0FBQ2pELCtCQUFhLGtDQUFrQyxnQkFBZ0I7QUFDL0QscUNBQW1CO0FBQUEsZ0JBQzNDO0FBQ29CLG9DQUFvQixXQUFZO0FBQUUseUJBQU8sQ0FBQyxVQUFVLFNBQVMsUUFBUSxTQUFTLEtBQUtBLE9BQU07QUFBQSxpQkFBSTtBQUFBLGNBQ2pILEdBQW1CLFNBQVUsS0FBSztBQUNkLDJCQUFXO0FBQ1gsb0JBQUksQ0FBQyxDQUFDLHVCQUF1QixZQUFZLEVBQUUsU0FBUyxRQUFRLFFBQVEsUUFBUSxTQUFTLFNBQVMsSUFBSSxJQUFJLEdBQUc7QUFDckcsc0JBQUksQ0FBQztBQUNELHdDQUFvQixXQUFZO0FBQzVCLDBCQUFJO0FBQ0E7QUFDSiwrQkFBUyxTQUFTLFNBQVMsTUFBTSxHQUFHO0FBQUEsb0JBQ3BFLENBQTZCO0FBQUEsZ0JBQzdCO0FBQUEsY0FDQSxDQUFpQjtBQUFBLFlBQ2pCO0FBQ1ksdUJBQVcsU0FBUyxDQUFDO0FBQ3JCLG1CQUFPO0FBQUEsVUFDbkIsQ0FBUztBQUNELHFCQUFXLFdBQVcsV0FBWTtBQUFFLG1CQUFPO0FBQUEsVUFBUztBQUNwRCxxQkFBVyxXQUFXLFdBQVk7QUFBRSxtQkFBTztBQUFBLFVBQWE7QUFDeEQsaUJBQU87QUFBQSxRQUNmO0FBRUksWUFBSWdELFNBQVE7QUFDWixjQUFNQSxRQUFPLFNBQVMsU0FBUyxDQUFBLEdBQUksa0JBQWtCLEdBQUc7QUFBQSxVQUNwRCxRQUFRLFNBQVUsY0FBYztBQUM1QixnQkFBSTFDLE1BQUssSUFBSTBDLE9BQU0sY0FBYyxFQUFFLFFBQVEsQ0FBQSxHQUFJO0FBQy9DLG1CQUFPMUMsSUFBRyxPQUFNO0FBQUEsVUFDNUI7QUFBQSxVQUNRLFFBQVEsU0FBVSxNQUFNO0FBQ3BCLG1CQUFPLElBQUkwQyxPQUFNLE1BQU0sRUFBRSxRQUFRLENBQUEsR0FBSSxFQUFFLEtBQUksRUFBRyxLQUFLLFNBQVUxQyxLQUFJO0FBQzdELGNBQUFBLElBQUcsTUFBSztBQUNSLHFCQUFPO0FBQUEsWUFDdkIsQ0FBYSxFQUFFLE1BQU0sdUJBQXVCLFdBQVk7QUFBRSxxQkFBTztBQUFBLFlBQU0sQ0FBRTtBQUFBLFVBQ3pFO0FBQUEsVUFDUSxrQkFBa0IsU0FBVSxJQUFJO0FBQzVCLGdCQUFJO0FBQ0EscUJBQU8saUJBQWlCMEMsT0FBTSxZQUFZLEVBQUUsS0FBSyxFQUFFO0FBQUEsWUFDbkUsU0FDbUJ6QyxLQUFJO0FBQ1AscUJBQU8sVUFBVSxJQUFJLFdBQVcsWUFBWTtBQUFBLFlBQzVEO0FBQUEsVUFDQTtBQUFBLFVBQ1EsYUFBYSxXQUFZO0FBQ3JCLHFCQUFTLE1BQU0sU0FBUztBQUNwQixxQkFBTyxNQUFNLE9BQU87QUFBQSxZQUNwQztBQUNZLG1CQUFPO0FBQUEsVUFDbkI7QUFBQSxVQUFXLG1CQUFtQixTQUFVLFdBQVc7QUFDdkMsbUJBQU8sSUFBSSxRQUNQLE9BQU8sSUFBSSxXQUFXLFNBQVMsSUFDL0IsVUFBUztBQUFBLFVBQ3pCO0FBQUEsVUFBVztBQUFBLFVBQVUsT0FBTyxTQUFVLGFBQWE7QUFDdkMsbUJBQU8sV0FBWTtBQUNmLGtCQUFJO0FBQ0Esb0JBQUksS0FBSyxjQUFjLFlBQVksTUFBTSxNQUFNLFNBQVMsQ0FBQztBQUN6RCxvQkFBSSxDQUFDLE1BQU0sT0FBTyxHQUFHLFNBQVM7QUFDMUIseUJBQU8sYUFBYSxRQUFRLEVBQUU7QUFDbEMsdUJBQU87QUFBQSxjQUMzQixTQUN1QixHQUFHO0FBQ04sdUJBQU8sVUFBVSxDQUFDO0FBQUEsY0FDdEM7QUFBQSxZQUNBO0FBQUEsVUFDQTtBQUFBLFVBQVcsT0FBTyxTQUFVLGFBQWEsTUFBTSxNQUFNO0FBQ3pDLGdCQUFJO0FBQ0Esa0JBQUksS0FBSyxjQUFjLFlBQVksTUFBTSxNQUFNLFFBQVEsQ0FBQSxDQUFFLENBQUM7QUFDMUQsa0JBQUksQ0FBQyxNQUFNLE9BQU8sR0FBRyxTQUFTO0FBQzFCLHVCQUFPLGFBQWEsUUFBUSxFQUFFO0FBQ2xDLHFCQUFPO0FBQUEsWUFDdkIsU0FDbUIsR0FBRztBQUNOLHFCQUFPLFVBQVUsQ0FBQztBQUFBLFlBQ2xDO0FBQUEsVUFDQTtBQUFBLFVBQ1Esb0JBQW9CO0FBQUEsWUFDaEIsS0FBSyxXQUFZO0FBQUUscUJBQU8sSUFBSSxTQUFTO0FBQUEsWUFBSztBQUFBLFVBQ3hEO0FBQUEsVUFBVyxTQUFTLFNBQVUsbUJBQW1CLGlCQUFpQjtBQUN0RCxnQkFBSSxVQUFVLGFBQWEsUUFBUSxPQUFPLHNCQUFzQixhQUM1RHlDLE9BQU0sa0JBQWtCLGlCQUFpQixJQUN6QyxpQkFBaUIsRUFDaEIsUUFBUSxtQkFBbUIsR0FBSztBQUNyQyxtQkFBTyxJQUFJLFFBQ1AsSUFBSSxNQUFNLFFBQVEsT0FBTyxJQUN6QjtBQUFBLFVBQ2hCO0FBQUEsVUFDUSxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsWUFDSCxLQUFLLFdBQVk7QUFBRSxxQkFBTztBQUFBLFlBQU07QUFBQSxZQUNoQyxLQUFLLFNBQVUsT0FBTztBQUNsQix1QkFBUyxLQUFLO0FBQUEsWUFDOUI7QUFBQTtVQUVRO0FBQUEsVUFBZ0I7QUFBQSxVQUFnQjtBQUFBLFVBQWM7QUFBQSxVQUM5QztBQUFBLFVBQWdCLElBQUk7QUFBQSxVQUFjLFdBQVdHO0FBQUEsVUFBVztBQUFBLFVBQ3hEO0FBQUEsVUFBNEI7QUFBQSxVQUE0QjtBQUFBLFVBQTRCO0FBQUEsVUFBNEI7QUFBQSxVQUFzQjtBQUFBLFVBQThCLEtBQUsxQztBQUFBLFVBQUssTUFBTTtBQUFBLFVBQ3BMO0FBQUEsVUFDQSxRQUFRLENBQUE7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0EsY0FBYztBQUFBLFVBQVM7QUFBQSxVQUN2QixRQUFRO0FBQUEsVUFBZSxTQUFTLGNBQWMsTUFBTSxHQUFHLEVBQ2xELElBQUksU0FBVSxHQUFHO0FBQUUsbUJBQU8sU0FBUyxDQUFDO0FBQUEsVUFBRSxDQUFFLEVBQ3hDLE9BQU8sU0FBVSxHQUFHLEdBQUcsR0FBRztBQUFFLG1CQUFPLElBQUssSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxVQUFHLENBQUU7QUFBQSxRQUFDLENBQUUsQ0FBQztBQUNoRixRQUFBdUMsT0FBTSxTQUFTLFVBQVVBLE9BQU0sYUFBYSxXQUFXO0FBRXZELFlBQUksT0FBTyxrQkFBa0IsZUFBZSxPQUFPLHFCQUFxQixhQUFhO0FBQ2pGLHVCQUFhLGtDQUFrQyxTQUFVLGNBQWM7QUFDbkUsZ0JBQUksQ0FBQyxvQkFBb0I7QUFDckIsa0JBQUk7QUFDSix3QkFBVSxJQUFJLFlBQVksZ0NBQWdDO0FBQUEsZ0JBQ3RELFFBQVE7QUFBQSxjQUM1QixDQUFpQjtBQUNELG1DQUFxQjtBQUNyQiw0QkFBYyxPQUFPO0FBQ3JCLG1DQUFxQjtBQUFBLFlBQ3JDO0FBQUEsVUFDQSxDQUFTO0FBQ0QsMkJBQWlCLGdDQUFnQyxTQUFVekMsS0FBSTtBQUMzRCxnQkFBSSxTQUFTQSxJQUFHO0FBQ2hCLGdCQUFJLENBQUMsb0JBQW9CO0FBQ3JCLCtCQUFpQixNQUFNO0FBQUEsWUFDdkM7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBQ0ksaUJBQVMsaUJBQWlCLGFBQWE7QUFDbkMsY0FBSSxRQUFRO0FBQ1osY0FBSTtBQUNBLGlDQUFxQjtBQUNyQix5QkFBYSxlQUFlLEtBQUssV0FBVztBQUM1QyxpQ0FBcUIsYUFBYSxJQUFJO0FBQUEsVUFDbEQ7QUFFWSxpQ0FBcUI7QUFBQSxVQUNqQztBQUFBLFFBQ0E7QUFDSSxZQUFJLHFCQUFxQjtBQUV6QixZQUFJO0FBQ0osWUFBSSxXQUFXLFdBQVk7QUFBQSxRQUFBO0FBQzNCLFlBQUksT0FBTyxxQkFBcUIsYUFBYTtBQUN6QyxxQkFBVyxXQUFZO0FBQ25CLGlCQUFLLElBQUksaUJBQWlCLDhCQUE4QjtBQUN4RCxlQUFHLFlBQVksU0FBVSxJQUFJO0FBQUUscUJBQU8sR0FBRyxRQUFRLGlCQUFpQixHQUFHLElBQUk7QUFBQSxZQUFFO0FBQUEsVUFDdkY7QUFDUSxtQkFBUTtBQUNSLGNBQUksT0FBTyxHQUFHLFVBQVUsWUFBWTtBQUNoQyxlQUFHLE1BQUs7QUFBQSxVQUNwQjtBQUNRLHVCQUFhLGtDQUFrQyxTQUFVLGNBQWM7QUFDbkUsZ0JBQUksQ0FBQyxvQkFBb0I7QUFDckIsaUJBQUcsWUFBWSxZQUFZO0FBQUEsWUFDM0M7QUFBQSxVQUNBLENBQVM7QUFBQSxRQUNUO0FBRUksWUFBSSxPQUFPLHFCQUFxQixhQUFhO0FBQ3pDLDJCQUFpQixZQUFZLFNBQVUsT0FBTztBQUMxQyxnQkFBSSxDQUFDLFFBQVEsa0JBQWtCLE1BQU0sV0FBVztBQUM1QyxrQkFBSTtBQUNBLHdCQUFRLE1BQU0sb0NBQW9DO0FBQ3RELHFCQUFPLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxNQUFLO0FBQ2hELHVCQUFTLEtBQUssR0FBRyxnQkFBZ0IsYUFBYSxLQUFLLGNBQWMsUUFBUSxNQUFNO0FBQzNFLG9CQUFJRCxNQUFLLGNBQWMsRUFBRTtBQUN6QixnQkFBQUEsSUFBRyxNQUFNLEVBQUUsaUJBQWlCLE1BQUssQ0FBRTtBQUFBLGNBQ3ZEO0FBQUEsWUFDQTtBQUFBLFVBQ0EsQ0FBUztBQUNELDJCQUFpQixZQUFZLFNBQVUsT0FBTztBQUMxQyxnQkFBSSxDQUFDLFFBQVEsa0JBQWtCLE1BQU0sV0FBVztBQUM1QyxrQkFBSTtBQUNBLHdCQUFRLE1BQU0sb0NBQW9DO0FBQ3RELHVCQUFRO0FBQ1IsK0JBQWlCLEVBQUUsS0FBSyxJQUFJaUMsVUFBUyxXQUFXLENBQUMsQ0FBQSxDQUFFLENBQUMsR0FBRztBQUFBLFlBQ3ZFO0FBQUEsVUFDQSxDQUFTO0FBQUEsUUFDVDtBQUVJLGlCQUFTdkIsS0FBSSxPQUFPO0FBQ2hCLGlCQUFPLElBQUlFLGtCQUFpQixFQUFFLEtBQUssTUFBSyxDQUFFO0FBQUEsUUFDbEQ7QUFFSSxpQkFBU2tDLFFBQU8sT0FBTztBQUNuQixpQkFBTyxJQUFJbEMsa0JBQWlCLEVBQUUsUUFBUSxNQUFLLENBQUU7QUFBQSxRQUNyRDtBQUVJLGlCQUFTbUMsZUFBYyxHQUFHLEdBQUc7QUFDekIsaUJBQU8sSUFBSW5DLGtCQUFpQixFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRztBQUFBLFFBQzdEO0FBRUkscUJBQWEsa0JBQWtCO0FBQy9CLGlCQUFTLEtBQUs7QUFFZCxZQUFJLGVBQTRCLHVCQUFPLE9BQU87QUFBQSxVQUMxQyxXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxXQUFXaUM7QUFBQSxVQUNYLFFBQVEzQztBQUFBLFVBQ1IsS0FBS0M7QUFBQSxVQUNMLGtCQUFrQlM7QUFBQSxVQUNsQixlQUFlbUM7QUFBQSxVQUNmLEtBQUtyQztBQUFBLFVBQ0wsUUFBUW9DO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxVQUFVYjtBQUFBLFVBQ1YsYUFBYUM7QUFBQSxVQUNiLGVBQWVFO0FBQUEsUUFDdkIsQ0FBSztBQUVELGlCQUFTLFNBQVMsY0FBYyxFQUFFLFNBQVMsUUFBTyxDQUFFO0FBRXBELGVBQU87QUFBQSxNQUVYLENBQUM7QUFBQTs7Ozs7QUNwMkxELFFBQU0sY0FBYyxPQUFPLElBQUksT0FBTztBQUN0QyxRQUFNLFFBQVEsV0FBVyxXQUFXLE1BQU0sV0FBVyxXQUFXLElBQUk7QUFDcEUsTUFBSSxPQUFPLFdBQVcsTUFBTSxRQUFRO0FBQ2hDLFVBQU0sSUFBSSxNQUFNLDJEQUEyRCxPQUFPLE1BQU0sUUFBUSxNQUFNLE1BQU0sRUFBRTtBQUFBLEVBQ2xIO0FBQ0EsUUFBTTtBQUFBLElBQUU7QUFBQSxJQUFXO0FBQUEsSUFBYTtBQUFBLElBQWU7QUFBQSxJQUFVO0FBQUEsSUFBSztBQUFBLElBQzFEO0FBQUEsSUFBa0I7QUFBQSxJQUFlO0FBQUEsSUFBSztBQUFBLElBQ3RDO0FBQUEsRUFBYyxJQUFLO0FBQUEsRUNOaEIsTUFBTSxzQkFBc0IsTUFBTTtBQUFBLElBS3ZDLGNBQWM7QUFDWixZQUFNLGdCQUFnQjtBQUx4QjtBQUNBO0FBQ0E7QUFNRSxXQUFLLFFBQVEsQ0FBQyxFQUFFLE9BQU87QUFBQSxRQUNyQixTQUFTO0FBQUEsTUFBQSxDQUNWO0FBQ0QsV0FBSyxRQUFRLENBQUMsRUFBRSxPQUFPO0FBQUEsUUFDckIsVUFBVTtBQUFBLE1BQUEsQ0FDWDtBQUNELFdBQUssUUFBUSxDQUFDLEVBQUUsT0FBTztBQUFBLFFBQ3JCLFlBQ0U7QUFBQSxNQUFBLENBQ0g7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUdPLFFBQU0sS0FBSyxJQUFJLGNBQUE7O0FDbEJmLFFBQU0scUJBQXFCLFlBSTVCO0FBQ0osV0FBTyxHQUFHLFdBQ1AsUUFBQSxFQUNBLEtBQUssQ0FBQyxTQUFTO0FBQ2QsYUFBTyxFQUFFLFNBQVMsTUFBTSxLQUFBO0FBQUEsSUFDMUIsQ0FBQyxFQUNBLE1BQU0sQ0FBQyxRQUFpQjtBQUN2QixZQUFNLGVBQWUsZUFBZSxRQUFRLE1BQU0sSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxhQUFBO0FBQUEsSUFDbEMsQ0FBQztBQUFBLEVBQ0w7QUFHTyxRQUFNLGlCQUFpQixPQUM1QixPQUtJO0FBQ0osUUFBSTtBQUNGLFlBQU0sWUFBWSxNQUFNLEdBQUcsV0FBVyxJQUFJLEVBQUU7QUFFNUMsVUFBSSxDQUFDLFdBQVc7QUFDZCxlQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sc0JBQUE7QUFBQSxNQUNsQztBQUVBLGFBQU8sRUFBRSxTQUFTLE1BQU0sTUFBTSxVQUFBO0FBQUEsSUFDaEMsU0FBUyxLQUFjO0FBQ3JCLFlBQU0sZUFBZSxlQUFlLFFBQVEsTUFBTSxJQUFJLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDdkUsYUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLGFBQUE7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFHTyxRQUFNLGlCQUFpQixPQUM1QixTQUMwRDtBQUMxRCxXQUFPLEdBQUcsV0FDUCxJQUFJLElBQUksRUFDUixLQUFLLE1BQU07QUFDVixhQUFPLEVBQUUsU0FBUyxLQUFBO0FBQUEsSUFDcEIsQ0FBQyxFQUNBLE1BQU0sQ0FBQyxRQUFRO0FBQ2QsWUFBTSxlQUFlLGVBQWUsUUFBUSxNQUFNLElBQUksTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUN2RSxhQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sYUFBQTtBQUFBLElBQ2xDLENBQUM7QUFBQSxFQUNMO0FBR08sUUFBTSx3QkFBd0IsWUFHL0I7QUFDSixXQUFPLEdBQUcsV0FDUCxNQUFBLEVBQ0EsS0FBSyxNQUFNO0FBQ1YsY0FBUSxJQUFJLHNDQUFzQztBQUNsRCxhQUFPLEVBQUUsU0FBUyxLQUFBO0FBQUEsSUFDcEIsQ0FBQyxFQUNBLE1BQU0sQ0FBQyxRQUFRO0FBQ2QsWUFBTSxlQUFlLGVBQWUsUUFBUSxNQUFNLElBQUksTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUN2RSxhQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sYUFBQTtBQUFBLElBQ2xDLENBQUM7QUFBQSxFQUNMO0FBRU8sUUFBTSxvQkFBb0IsT0FDL0IsT0FDa0Q7QUFDbEQsUUFBSTtBQUVGLFlBQU0sWUFBWSxNQUFNLEdBQUcsV0FBVyxJQUFJLEVBQUU7QUFDNUMsVUFBSSxDQUFDLFdBQVc7QUFDZCxlQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8scUJBQXFCLEVBQUUsY0FBQTtBQUFBLE1BQ3pEO0FBRUEsWUFBTSxFQUFFLFVBQVU7QUFHbEIsWUFBTSxHQUFHLFdBQVcsT0FBTyxFQUFFO0FBQzdCLGNBQVEsSUFBSSxxQkFBcUIsRUFBRSx3QkFBd0I7QUFHM0QsWUFBTSxZQUFZLE1BQU0sR0FBRyxXQUFXLE1BQU0sT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLE1BQUE7QUFFbkUsVUFBSSxjQUFjLEdBQUc7QUFFbkIsY0FBTSxHQUFHLFNBQVMsT0FBTyxLQUFLO0FBQzlCLGdCQUFRLElBQUksbUJBQW1CLEtBQUssZ0NBQWdDO0FBQUEsTUFDdEUsT0FBTztBQUNMLGdCQUFRO0FBQUEsVUFDTixtQkFBbUIsS0FBSyxnQkFBZ0IsU0FBUztBQUFBLFFBQUE7QUFBQSxNQUVyRDtBQUVBLGFBQU8sRUFBRSxTQUFTLEtBQUE7QUFBQSxJQUNwQixTQUFTLEtBQVU7QUFDakIsY0FBUSxNQUFNLDZCQUE2QixHQUFHO0FBQzlDLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxJQUFJLFFBQUE7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFHTyxRQUFNLGVBQWUsT0FDMUIsU0FNSTtBQUNKLFFBQUk7QUFFRixZQUFNLFdBQVcsTUFBTSxHQUFHLFNBQVMsTUFBTSxLQUFLLEVBQUUsT0FBTyxLQUFLLEdBQUcsRUFBRSxNQUFBO0FBRWpFLFVBQUksVUFBVTtBQUNaLGVBQU8sRUFBRSxTQUFTLE1BQU0sU0FBUyxNQUFNLFdBQVcsU0FBUyxHQUFBO0FBQUEsTUFDN0Q7QUFFQSxZQUFNLEdBQUcsU0FBUyxJQUFJLElBQUk7QUFDMUIsYUFBTyxFQUFFLFNBQVMsTUFBTSxXQUFXLEtBQUssR0FBQTtBQUFBLElBQzFDLFNBQVMsS0FBYztBQUNyQixZQUFNLGVBQWUsZUFBZSxRQUFRLE1BQU0sSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxhQUFBO0FBQUEsSUFDbEM7QUFBQSxFQUNGO0FBR08sUUFBTSx5QkFBeUIsT0FDcEMsUUFLSTtBQUNKLFFBQUk7QUFFRixZQUFNLFVBQVUsTUFBTSxHQUFHLFNBQVMsTUFBTSxLQUFLLEVBQUUsT0FBTyxHQUFHLEVBQUUsTUFBQTtBQUUzRCxVQUFJLENBQUMsU0FBUztBQUNaLGVBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxvQkFBQTtBQUFBLE1BQ2xDO0FBR0EsWUFBTSxhQUFhLE1BQU0sR0FBRyxXQUN6QixNQUFNLE9BQU8sRUFDYixPQUFPLFFBQVEsRUFBRSxFQUNqQixRQUFBO0FBR0gsaUJBQVcsS0FBSyxDQUFDLEdBQUcsTUFBTSxPQUFPLEVBQUUsU0FBUyxJQUFJLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFFbkUsYUFBTyxFQUFFLFNBQVMsTUFBTSxNQUFNLFdBQUE7QUFBQSxJQUNoQyxTQUFTLEtBQWM7QUFDckIsWUFBTSxlQUFlLGVBQWUsUUFBUSxNQUFNLElBQUksTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUN2RSxhQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sYUFBQTtBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUdPLFFBQU0sb0JBQW9CLE9BQy9CLElBQ0EsWUFLSTtBQUNKLFFBQUk7QUFFRixZQUFNLFdBQVcsTUFBTSxHQUFHLFdBQVcsSUFBSSxFQUFFO0FBRTNDLFVBQUksQ0FBQyxVQUFVO0FBQ2IsZUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLHNCQUFBO0FBQUEsTUFDbEM7QUFHQSxZQUFNMUMsVUFBUyxNQUFNLEdBQUcsV0FBVyxPQUFPLElBQUksT0FBTztBQUNyRCxhQUFPLEVBQUUsU0FBUyxNQUFNLFNBQVNBLFVBQVMsRUFBQTtBQUFBLElBQzVDLFNBQVMsS0FBYztBQUNyQixZQUFNLGVBQWUsZUFBZSxRQUFRLE1BQU0sSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxhQUFBO0FBQUEsSUFDbEM7QUFBQSxFQUNGO0FBR08sUUFBTSxtQkFBbUIsWUFJMUI7QUFDSixRQUFJO0FBQ0YsWUFBTSxPQUFPLE1BQU0sR0FBRyxTQUFTLFFBQUE7QUFDL0IsYUFBTyxFQUFFLFNBQVMsTUFBTSxLQUFBO0FBQUEsSUFDMUIsU0FBUyxLQUFjO0FBQ3JCLFlBQU0sZUFBZSxlQUFlLFFBQVEsTUFBTSxJQUFJLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDdkUsYUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLGFBQUE7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFJTyxRQUFNLGtCQUFrQixPQUM3QixPQUNrRDtBQUNsRCxRQUFJO0FBRUYsWUFBTSxVQUFVLE1BQU0sR0FBRyxTQUFTLElBQUksRUFBRTtBQUN4QyxVQUFJLENBQUMsU0FBUztBQUNaLGVBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxtQkFBbUIsRUFBRSxjQUFBO0FBQUEsTUFDdkQ7QUFHQSxZQUFNLEdBQUcsV0FBVyxNQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFBO0FBRzlDLFlBQU0sR0FBRyxTQUFTLE9BQU8sRUFBRTtBQUMzQixhQUFPLEVBQUUsU0FBUyxLQUFBO0FBQUEsSUFDcEIsU0FBUyxLQUFVO0FBQ2pCLGNBQVEsTUFBTSw4Q0FBOEMsR0FBRztBQUMvRCxhQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sSUFBSSxRQUFBO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBR08sUUFBTSxrQkFBa0IsWUFJekI7QUFDSixXQUFPLEdBQUcsUUFDUCxRQUFBLEVBQ0EsS0FBSyxDQUFDLFNBQVM7QUFDZCxhQUFPLEVBQUUsU0FBUyxNQUFNLEtBQUE7QUFBQSxJQUMxQixDQUFDLEVBQ0EsTUFBTSxDQUFDLFFBQWlCO0FBQ3ZCLFlBQU0sZUFBZSxlQUFlLFFBQVEsTUFBTSxJQUFJLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDdkUsYUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLGFBQUE7QUFBQSxJQUNsQyxDQUFDO0FBQUEsRUFDTDtBQUdPLFFBQU0sMkJBQTJCLE9BQ3RDLGdCQUtJO0FBQ0osUUFBSTtBQUVGLFlBQU0sWUFBWSxNQUFNLEdBQUcsV0FBVyxJQUFJLFdBQVc7QUFFckQsVUFBSSxDQUFDLFdBQVc7QUFDZCxlQUFPLEVBQUUsU0FBUyxPQUFPLE9BQU8sc0JBQUE7QUFBQSxNQUNsQztBQUdBLFlBQU0sV0FBVyxVQUFVO0FBQzNCLFVBQUksQ0FBQyxVQUFVO0FBQ2IsZUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLDRCQUFBO0FBQUEsTUFDbEM7QUFHQSxZQUFNLFNBQVMsTUFBTSxHQUFHLFFBQVEsSUFBSSxRQUFRO0FBQzVDLFVBQUksQ0FBQyxRQUFRO0FBQ1gsZUFBTyxFQUFFLFNBQVMsT0FBTyxPQUFPLG1CQUFBO0FBQUEsTUFDbEM7QUFHQSxhQUFPLEVBQUUsU0FBUyxNQUFNLE1BQU0sT0FBQTtBQUFBLElBQ2hDLFNBQVMsS0FBYztBQUNyQixZQUFNLGVBQWUsZUFBZSxRQUFRLE1BQU0sSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxhQUFBO0FBQUEsSUFDbEM7QUFBQSxFQUNGO0FBSU8sUUFBTSx3QkFBd0IsT0FDbkMsYUFLSTtBQUNKLFFBQUk7QUFFRixZQUFNLGFBQWEsTUFBTSxHQUFHLFdBQ3pCLE1BQU0sVUFBVSxFQUNoQixPQUFPLFFBQVEsRUFDZixRQUFBO0FBR0gsWUFBTSxTQUFTLE1BQU0sS0FBSyxJQUFJLElBQUksV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBR2pFLFlBQU0sV0FBVyxNQUFNLEdBQUcsU0FBUyxNQUFNLElBQUksRUFBRSxNQUFNLE1BQU0sRUFBRSxRQUFBO0FBRzdELFlBQU0sYUFBYSxPQUFPLFlBQVksU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUdwRSxZQUFNLFdBQVcsV0FBVyxJQUFJLENBQUMsT0FBTztBQUFBLFFBQ3RDLEdBQUc7QUFBQSxRQUNILFNBQVMsV0FBVyxFQUFFLEtBQUs7QUFBQSxNQUFBLEVBQzNCO0FBR0YsZUFBUyxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sRUFBRSxTQUFTLElBQUksT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUVqRSxhQUFPLEVBQUUsU0FBUyxNQUFNLE1BQU0sU0FBQTtBQUFBLElBQ2hDLFNBQVMsS0FBYztBQUNyQixZQUFNLGVBQWUsZUFBZSxRQUFRLE1BQU0sSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxTQUFTLE9BQU8sT0FBTyxhQUFBO0FBQUEsSUFDbEM7QUFBQSxFQUNGOztBQ3hUQSxRQUFBLGtCQUFBO0FBQUE7QUFBQSxJQUdJLGVBQUEsQ0FBQSxTQUFBLFFBQUEsaUJBQUE7QUFHQSxjQUFBLFFBQUEsV0FBQSxDQUFBLGtCQUFBOztBQUNFLGFBQUEsK0NBQUEsU0FBQU8sTUFBQSxRQUFBLGNBQUEsZ0JBQUFBLElBQUEsT0FBQTtBQUNFLGtCQUFBLFVBQUEsS0FBQSxFQUFBLFVBQUEsY0FBQSxHQUFBLEdBQUEsTUFBQTtBQUNFLGdCQUFBLFFBQUEsUUFBQSxXQUFBO0FBQ0Usc0JBQUE7QUFBQSxnQkFBUTtBQUFBLGdCQUNOLFFBQUEsUUFBQTtBQUFBLGNBQ2dCO0FBRWxCLDJCQUFBO0FBQUEsZ0JBQWEsU0FBQTtBQUFBLGdCQUNGLE9BQUEsUUFBQSxRQUFBLFVBQUE7QUFBQSxjQUN3QixDQUFBO0FBQUEsWUFDbEMsT0FBQTtBQUVELDJCQUFBLEVBQUEsU0FBQSxNQUFBO0FBQUEsWUFBOEI7QUFBQSxVQUNoQyxDQUFBO0FBQUEsUUFDRCxPQUFBO0FBRUQsa0JBQUEsSUFBQSw4QkFBQTtBQUNBLHVCQUFBLEVBQUEsU0FBQSxPQUFBLE9BQUEsMkJBQUEsQ0FBQTtBQUFBLFFBQWtFO0FBQUEsTUFDcEUsQ0FBQTtBQUFBLElBQ0Q7QUFBQTtBQUFBLElBQ0gsa0JBQUEsT0FBQSxTQUFBLFFBQUEsaUJBQUE7QUFJRSxVQUFBO0FBQ0UsY0FBQSxPQUFBLE1BQUEsbUJBQUE7QUFDQSxxQkFBQSxJQUFBO0FBQUEsTUFBaUIsU0FBQSxLQUFBO0FBRWpCLHFCQUFBLEdBQUE7QUFBQSxNQUFnQjtBQUFBLElBQ2xCO0FBQUE7QUFBQSxJQUNGLGNBQUEsT0FBQSxTQUFBLFFBQUEsaUJBQUE7QUFJRSxVQUFBO0FBQ0UsY0FBQSxNQUFBLE1BQUEsZUFBQSxRQUFBLElBQUE7QUFDQSxxQkFBQSxHQUFBO0FBQUEsTUFBZ0IsU0FBQSxLQUFBO0FBRWhCLHFCQUFBLEdBQUE7QUFBQSxNQUFnQjtBQUFBLElBQ2xCO0FBQUE7QUFBQSxJQUNGLHFCQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBSUUsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLHNCQUFBO0FBQ0EscUJBQUEsR0FBQTtBQUFBLE1BQWdCLFNBQUEsS0FBQTtBQUVoQixxQkFBQSxHQUFBO0FBQUEsTUFBZ0I7QUFBQSxJQUNsQjtBQUFBO0FBQUEsSUFDRixZQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBS0UsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLGFBQUEsUUFBQSxJQUFBO0FBQ0EscUJBQUEsR0FBQTtBQUFBLE1BQWdCLFNBQUEsS0FBQTtBQUVoQixxQkFBQSxHQUFBO0FBQUEsTUFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0YsYUFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUVFLFVBQUE7QUFDRSxjQUFBLE1BQUEsTUFBQSxpQkFBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsR0FBQTtBQUFBLE1BQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNGLHNCQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBR0UsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLHVCQUFBLFFBQUEsSUFBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsR0FBQTtBQUFBLE1BQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNGLHVCQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBR0UsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLGtCQUFBLFFBQUEsSUFBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsR0FBQTtBQUFBLE1BQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNGLHVDQUFBLENBQUEsU0FBQSxRQUFBLGlCQUFBO0FBR0UsVUFBQTtBQUNFLGdCQUFBLEtBQUEsTUFBQSxFQUFBLFFBQUEsTUFBQSxlQUFBLFFBQUEsQ0FBQSxTQUFBOztBQUNFLGVBQUFBLE1BQUEsS0FBQSxDQUFBLE1BQUEsZ0JBQUFBLElBQUEsSUFBQTtBQUNFLG9CQUFBLEtBQUEsWUFBQSxLQUFBLENBQUEsRUFBQSxJQUFBO0FBQUEsY0FBcUMsUUFBQTtBQUFBLGNBQzNCLE1BQUEsUUFBQTtBQUFBLFlBQ00sQ0FBQTtBQUFBLFVBQ2Y7QUFHSCx1QkFBQSxFQUFBLFNBQUEsTUFBQTtBQUFBLFFBQThCLENBQUE7QUFBQSxNQUMvQixTQUFBLEtBQUE7QUFFRCxxQkFBQSxFQUFBLFNBQUEsT0FBQSxPQUFBLElBQUEsQ0FBQTtBQUFBLE1BQTJDO0FBSTdDLGFBQUE7QUFBQSxJQUFPO0FBQUEsSUFDVCxpQkFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLEVBQUEsSUFBQSxRQUFBLElBQUEsUUFBQTtBQUNBLGNBQUEsTUFBQSxNQUFBLGtCQUFBLElBQUEsT0FBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsRUFBQSxTQUFBLE9BQUEsT0FBQSxJQUFBLENBQUE7QUFBQSxNQUEyQztBQUFBLElBQzdDO0FBQUEsSUFDRixvQkFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLE1BQUEsTUFBQSxlQUFBLFFBQUEsSUFBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsRUFBQSxTQUFBLE9BQUEsT0FBQSxJQUFBLENBQUE7QUFBQSxNQUEyQztBQUFBLElBQzdDO0FBQUEsSUFDRixlQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBR0UsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLGdCQUFBLFFBQUEsSUFBQTtBQUNBLHFCQUFBLEdBQUE7QUFBQSxNQUFnQixTQUFBLEtBQUE7QUFFaEIscUJBQUEsRUFBQSxTQUFBLE9BQUEsT0FBQSxJQUFBLENBQUE7QUFBQSxNQUEyQztBQUFBLElBQzdDO0FBQUEsSUFDRixZQUFBLE9BQUEsU0FBQSxRQUFBLGlCQUFBO0FBR0UsVUFBQTtBQUNFLGNBQUEsTUFBQSxNQUFBLGdCQUFBO0FBQ0EscUJBQUEsR0FBQTtBQUFBLE1BQWdCLFNBQUEsS0FBQTtBQUVoQixxQkFBQSxHQUFBO0FBQUEsTUFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0Ysb0JBQUEsT0FBQSxTQUFBLFFBQUEsaUJBQUE7QUFHRSxVQUFBO0FBQ0UsY0FBQSxNQUFBLFFBQUEsUUFBQSxPQUFBLHVCQUFBLElBQUE7QUFJQSxnQkFBQSxLQUFBLE9BQUEsRUFBQSxJQUFBLENBQUE7QUFDQSxxQkFBQSxFQUFBLFNBQUEsTUFBQTtBQUFBLE1BQThCLFNBQUEsS0FBQTtBQUU5QixxQkFBQSxHQUFBO0FBQUEsTUFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0YsY0FBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLE1BQUEsUUFBQSxRQUFBLE9BQUEsdUJBQUEsSUFBQTtBQUlBLGdCQUFBLEtBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQTtBQUNBLHFCQUFBLEVBQUEsU0FBQSxNQUFBO0FBQUEsTUFBOEIsU0FBQSxLQUFBO0FBRTlCLHFCQUFBLEdBQUE7QUFBQSxNQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDRix3QkFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLE1BQUEsTUFBQSx5QkFBQSxRQUFBLElBQUE7QUFDQSxxQkFBQSxHQUFBO0FBQUEsTUFBZ0IsU0FBQSxLQUFBO0FBRWhCLHFCQUFBLEdBQUE7QUFBQSxNQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDRixxQkFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLE1BQUEsTUFBQSxzQkFBQSxRQUFBLElBQUE7QUFDQSxxQkFBQSxHQUFBO0FBQUEsTUFBZ0IsU0FBQSxLQUFBO0FBRWhCLHFCQUFBLEdBQUE7QUFBQSxNQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDRixtQkFBQSxPQUFBLFNBQUEsUUFBQSxpQkFBQTtBQUdFLFVBQUE7QUFDRSxjQUFBLENBQUEsR0FBQSxJQUFBLE1BQUEsUUFBQSxLQUFBLE1BQUE7QUFBQSxVQUF1QyxRQUFBO0FBQUEsVUFDN0IsZUFBQTtBQUFBLFFBQ08sQ0FBQTtBQUVqQixZQUFBLDJCQUFBLElBQUE7QUFDRSxnQkFBQSxRQUFBLEtBQUEsWUFBQSxJQUFBLElBQUE7QUFBQSxZQUF1QyxRQUFBO0FBQUEsWUFDN0IsTUFBQSxRQUFBO0FBQUEsVUFDTSxDQUFBO0FBQUEsUUFDZjtBQUFBLE1BQ0gsU0FBQSxLQUFBO0FBRUEscUJBQUEsR0FBQTtBQUFBLE1BQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUVKO0FBRUEsUUFBQSxhQUFBLGlCQUFBLE1BQUE7QUFFRSxZQUFBLFFBQUEsWUFBQSxZQUFBLE9BQUEsWUFBQTs7QUFFRSxVQUFBLFFBQUEsV0FBQSxXQUFBO0FBQ0UsZ0JBQUEsSUFBQSw0REFBQTtBQUVBLFlBQUE7QUFFRSxnQkFBQSxPQUFBLE1BQUEsUUFBQSxLQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQ0EscUJBQUEsT0FBQSxNQUFBO0FBQ0UsZ0JBQUEsSUFBQSxRQUFBQSxNQUFBLElBQUEsUUFBQSxnQkFBQUEsSUFBQSxXQUFBLFVBQUE7QUFDRSxzQkFBQSxLQUFBLE9BQUEsSUFBQSxFQUFBO0FBQUEsWUFBMEI7QUFBQSxVQUM1QjtBQUlGLGdCQUFBLFdBQUEsUUFBQSxRQUFBLE9BQUEsaUJBQUE7QUFDQSxnQkFBQSxRQUFBLEtBQUEsT0FBQSxFQUFBLEtBQUEsU0FBQSxDQUFBO0FBQUEsUUFBMkMsU0FBQSxPQUFBO0FBRTNDLGtCQUFBLE1BQUEsa0NBQUEsS0FBQTtBQUFBLFFBQXFEO0FBQUEsTUFDdkQ7QUFBQSxJQUNGLENBQUE7QUFJRixZQUFBLFFBQUEsVUFBQSxZQUFBLENBQUEsU0FBQSxRQUFBLGlCQUFBO0FBQ0UsWUFBQSxVQUFBLGdCQUFBLG1DQUFBLE1BQUE7QUFDQSxVQUFBLFNBQUE7QUFDRSxnQkFBQSxTQUFBLFFBQUEsWUFBQTtBQUNBLGVBQUE7QUFBQSxNQUFPO0FBQUEsSUFDVCxDQUFBO0FBQUEsRUFFSixDQUFBOzs7O0FDelFBLE1BQUksZ0JBQWdCLE1BQU07QUFBQSxJQUN4QixZQUFZLGNBQWM7QUFDeEIsVUFBSSxpQkFBaUIsY0FBYztBQUNqQyxhQUFLLFlBQVk7QUFDakIsYUFBSyxrQkFBa0IsQ0FBQyxHQUFHLGNBQWMsU0FBUztBQUNsRCxhQUFLLGdCQUFnQjtBQUNyQixhQUFLLGdCQUFnQjtBQUFBLE1BQ3ZCLE9BQU87QUFDTCxjQUFNLFNBQVMsdUJBQXVCLEtBQUssWUFBWTtBQUN2RCxZQUFJLFVBQVU7QUFDWixnQkFBTSxJQUFJLG9CQUFvQixjQUFjLGtCQUFrQjtBQUNoRSxjQUFNLENBQUMsR0FBRyxVQUFVLFVBQVUsUUFBUSxJQUFJO0FBQzFDLHlCQUFpQixjQUFjLFFBQVE7QUFDdkMseUJBQWlCLGNBQWMsUUFBUTtBQUV2QyxhQUFLLGtCQUFrQixhQUFhLE1BQU0sQ0FBQyxRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVE7QUFDdkUsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxnQkFBZ0I7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsS0FBSztBQUNaLFVBQUksS0FBSztBQUNQLGVBQU87QUFDVCxZQUFNLElBQUksT0FBTyxRQUFRLFdBQVcsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFlLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2pHLGFBQU8sQ0FBQyxDQUFDLEtBQUssZ0JBQWdCLEtBQUssQ0FBQyxhQUFhO0FBQy9DLFlBQUksYUFBYTtBQUNmLGlCQUFPLEtBQUssWUFBWSxDQUFDO0FBQzNCLFlBQUksYUFBYTtBQUNmLGlCQUFPLEtBQUssYUFBYSxDQUFDO0FBQzVCLFlBQUksYUFBYTtBQUNmLGlCQUFPLEtBQUssWUFBWSxDQUFDO0FBQzNCLFlBQUksYUFBYTtBQUNmLGlCQUFPLEtBQUssV0FBVyxDQUFDO0FBQzFCLFlBQUksYUFBYTtBQUNmLGlCQUFPLEtBQUssV0FBVyxDQUFDO0FBQUEsTUFDNUIsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFlBQVksS0FBSztBQUNmLGFBQU8sSUFBSSxhQUFhLFdBQVcsS0FBSyxnQkFBZ0IsR0FBRztBQUFBLElBQzdEO0FBQUEsSUFDQSxhQUFhLEtBQUs7QUFDaEIsYUFBTyxJQUFJLGFBQWEsWUFBWSxLQUFLLGdCQUFnQixHQUFHO0FBQUEsSUFDOUQ7QUFBQSxJQUNBLGdCQUFnQixLQUFLO0FBQ25CLFVBQUksQ0FBQyxLQUFLLGlCQUFpQixDQUFDLEtBQUs7QUFDL0IsZUFBTztBQUNULFlBQU0sc0JBQXNCO0FBQUEsUUFDMUIsS0FBSyxzQkFBc0IsS0FBSyxhQUFhO0FBQUEsUUFDN0MsS0FBSyxzQkFBc0IsS0FBSyxjQUFjLFFBQVEsU0FBUyxFQUFFLENBQUM7QUFBQSxNQUN4RTtBQUNJLFlBQU0scUJBQXFCLEtBQUssc0JBQXNCLEtBQUssYUFBYTtBQUN4RSxhQUFPLENBQUMsQ0FBQyxvQkFBb0IsS0FBSyxDQUFDLFVBQVUsTUFBTSxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssbUJBQW1CLEtBQUssSUFBSSxRQUFRO0FBQUEsSUFDaEg7QUFBQSxJQUNBLFlBQVksS0FBSztBQUNmLFlBQU0sTUFBTSxxRUFBcUU7QUFBQSxJQUNuRjtBQUFBLElBQ0EsV0FBVyxLQUFLO0FBQ2QsWUFBTSxNQUFNLG9FQUFvRTtBQUFBLElBQ2xGO0FBQUEsSUFDQSxXQUFXLEtBQUs7QUFDZCxZQUFNLE1BQU0sb0VBQW9FO0FBQUEsSUFDbEY7QUFBQSxJQUNBLHNCQUFzQixTQUFTO0FBQzdCLFlBQU0sVUFBVSxLQUFLLGVBQWUsT0FBTztBQUMzQyxZQUFNLGdCQUFnQixRQUFRLFFBQVEsU0FBUyxJQUFJO0FBQ25ELGFBQU8sT0FBTyxJQUFJLGFBQWEsR0FBRztBQUFBLElBQ3BDO0FBQUEsSUFDQSxlQUFlLFFBQVE7QUFDckIsYUFBTyxPQUFPLFFBQVEsdUJBQXVCLE1BQU07QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFDQSxNQUFJLGVBQWU7QUFDbkIsZUFBYSxZQUFZLENBQUMsUUFBUSxTQUFTLFFBQVEsT0FBTyxLQUFLO0FBQy9ELE1BQUksc0JBQXNCLGNBQWMsTUFBTTtBQUFBLElBQzVDLFlBQVksY0FBYyxRQUFRO0FBQ2hDLFlBQU0sMEJBQTBCLFlBQVksTUFBTSxNQUFNLEVBQUU7QUFBQSxJQUM1RDtBQUFBLEVBQ0Y7QUFDQSxXQUFTLGlCQUFpQixjQUFjLFVBQVU7QUFDaEQsUUFBSSxDQUFDLGFBQWEsVUFBVSxTQUFTLFFBQVEsS0FBSyxhQUFhO0FBQzdELFlBQU0sSUFBSTtBQUFBLFFBQ1I7QUFBQSxRQUNBLEdBQUcsUUFBUSwwQkFBMEIsYUFBYSxVQUFVLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDNUU7QUFBQSxFQUNBO0FBQ0EsV0FBUyxpQkFBaUIsY0FBYyxVQUFVO0FBQ2hELFFBQUksU0FBUyxTQUFTLEdBQUc7QUFDdkIsWUFBTSxJQUFJLG9CQUFvQixjQUFjLGdDQUFnQztBQUM5RSxRQUFJLFNBQVMsU0FBUyxHQUFHLEtBQUssU0FBUyxTQUFTLEtBQUssQ0FBQyxTQUFTLFdBQVcsSUFBSTtBQUM1RSxZQUFNLElBQUk7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ047QUFBQSxFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsOF19
