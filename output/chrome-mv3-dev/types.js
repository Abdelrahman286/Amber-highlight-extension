var types = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  class ExtMessage {
    constructor(messageType) {
      __publicField(this, "content");
      __publicField(this, "from");
      __publicField(this, "messageType");
      this.messageType = messageType;
    }
  }
  types;
  function initPlugins() {
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
  const result = (async () => {
    try {
      initPlugins();
      return await ExtMessage.main();
    } catch (err) {
      logger.error(
        `The unlisted script "${"types"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();
  return result;
}();
types;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2VudHJ5cG9pbnRzL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgY2xpY2tFeHRJY29uID0gXCJjbGlja0V4dEljb25cIixcbiAgY2hhbmdlVGhlbWUgPSBcImNoYW5nZVRoZW1lXCIsXG4gIGNoYW5nZUxvY2FsZSA9IFwiY2hhbmdlTG9jYWxlXCIsXG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VGcm9tIHtcbiAgY29udGVudFNjcmlwdCA9IFwiY29udGVudFNjcmlwdFwiLFxuICBiYWNrZ3JvdW5kID0gXCJiYWNrZ3JvdW5kXCIsXG4gIHBvcFVwID0gXCJwb3BVcFwiLFxuICBzaWRlUGFuZWwgPSBcInNpZGVQYW5lbFwiLFxufVxuXG5jbGFzcyBFeHRNZXNzYWdlIHtcbiAgY29udGVudD86IHN0cmluZztcbiAgZnJvbT86IE1lc3NhZ2VGcm9tO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICAgIHRoaXMubWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZTtcbiAgfVxuXG4gIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXh0TWVzc2FnZTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWFBLE1BQU0sV0FBVztBQUFBLElBSWYsWUFBWSxhQUEwQjtBQUh0QztBQUNBO0FBTUE7QUFIRSxXQUFLLGNBQWM7QUFBQSxJQUNyQjtBQUFBLEVBR0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
