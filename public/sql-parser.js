var gt = Object.defineProperty;
var ht = (t, n, i) => n in t ? gt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[n] = i;
var Se = (t, n, i) => (ht(t, typeof n != "symbol" ? n + "" : n, i), i);
var xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var qe = { exports: {} }, Fe = {}, be = {}, Jr = {}, Yr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var n = {}, i = Symbol("test"), u = Object(i);
  if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(u) !== "[object Symbol]")
    return !1;
  var y = 42;
  n[i] = y;
  for (i in n)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(n).length !== 0)
    return !1;
  var A = Object.getOwnPropertySymbols(n);
  if (A.length !== 1 || A[0] !== i || !Object.prototype.propertyIsEnumerable.call(n, i))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var N = Object.getOwnPropertyDescriptor(n, i);
    if (N.value !== y || N.enumerable !== !0)
      return !1;
  }
  return !0;
}, bt = Yr, gr = function() {
  return bt() && !!Symbol.toStringTag;
}, De, vr;
function mt() {
  if (vr)
    return De;
  vr = 1;
  var t = typeof Symbol < "u" && Symbol, n = Yr;
  return De = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
  }, De;
}
var Be, Sr;
function vt() {
  if (Sr)
    return Be;
  Sr = 1;
  var t = {
    foo: {}
  }, n = Object;
  return Be = function() {
    return { __proto__: t }.foo === t.foo && !({ __proto__: null } instanceof n);
  }, Be;
}
var $e, Ar;
function St() {
  if (Ar)
    return $e;
  Ar = 1;
  var t = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, i = Object.prototype.toString, u = "[object Function]";
  return $e = function(A) {
    var N = this;
    if (typeof N != "function" || i.call(N) !== u)
      throw new TypeError(t + N);
    for (var U = n.call(arguments, 1), j, W = function() {
      if (this instanceof j) {
        var _ = N.apply(
          this,
          U.concat(n.call(arguments))
        );
        return Object(_) === _ ? _ : this;
      } else
        return N.apply(
          A,
          U.concat(n.call(arguments))
        );
    }, I = Math.max(0, N.length - U.length), C = [], $ = 0; $ < I; $++)
      C.push("$" + $);
    if (j = Function("binder", "return function (" + C.join(",") + "){ return binder.apply(this,arguments); }")(W), N.prototype) {
      var O = function() {
      };
      O.prototype = N.prototype, j.prototype = new O(), O.prototype = null;
    }
    return j;
  }, $e;
}
var _e, Er;
function hr() {
  if (Er)
    return _e;
  Er = 1;
  var t = St();
  return _e = Function.prototype.bind || t, _e;
}
var Ue, Or;
function At() {
  if (Or)
    return Ue;
  Or = 1;
  var t = hr();
  return Ue = t.call(Function.call, Object.prototype.hasOwnProperty), Ue;
}
var Me, wr;
function Ie() {
  if (wr)
    return Me;
  wr = 1;
  var t, n = SyntaxError, i = Function, u = TypeError, y = function(J) {
    try {
      return i('"use strict"; return (' + J + ").constructor;")();
    } catch {
    }
  }, A = Object.getOwnPropertyDescriptor;
  if (A)
    try {
      A({}, "");
    } catch {
      A = null;
    }
  var N = function() {
    throw new u();
  }, U = A ? function() {
    try {
      return arguments.callee, N;
    } catch {
      try {
        return A(arguments, "callee").get;
      } catch {
        return N;
      }
    }
  }() : N, j = mt()(), W = vt()(), I = Object.getPrototypeOf || (W ? function(J) {
    return J.__proto__;
  } : null), C = {}, $ = typeof Uint8Array > "u" || !I ? t : I(Uint8Array), O = {
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": j && I ? I([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": C,
    "%AsyncGenerator%": C,
    "%AsyncGeneratorFunction%": C,
    "%AsyncIteratorPrototype%": C,
    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? t : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
    "%Function%": i,
    "%GeneratorFunction%": C,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": j && I ? I(I([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !j || !I ? t : I((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !j || !I ? t : I((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": j && I ? I(""[Symbol.iterator]()) : t,
    "%Symbol%": j ? Symbol : t,
    "%SyntaxError%": n,
    "%ThrowTypeError%": U,
    "%TypedArray%": $,
    "%TypeError%": u,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
  };
  if (I)
    try {
      null.error;
    } catch (J) {
      var _ = I(I(J));
      O["%Error.prototype%"] = _;
    }
  var d = function J(Y) {
    var Z;
    if (Y === "%AsyncFunction%")
      Z = y("async function () {}");
    else if (Y === "%GeneratorFunction%")
      Z = y("function* () {}");
    else if (Y === "%AsyncGeneratorFunction%")
      Z = y("async function* () {}");
    else if (Y === "%AsyncGenerator%") {
      var h = J("%AsyncGeneratorFunction%");
      h && (Z = h.prototype);
    } else if (Y === "%AsyncIteratorPrototype%") {
      var g = J("%AsyncGenerator%");
      g && I && (Z = I(g.prototype));
    }
    return O[Y] = Z, Z;
  }, b = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, v = hr(), B = At(), x = v.call(Function.call, Array.prototype.concat), ee = v.call(Function.apply, Array.prototype.splice), R = v.call(Function.call, String.prototype.replace), Q = v.call(Function.call, String.prototype.slice), z = v.call(Function.call, RegExp.prototype.exec), M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, K = /\\(\\)?/g, oe = function(Y) {
    var Z = Q(Y, 0, 1), h = Q(Y, -1);
    if (Z === "%" && h !== "%")
      throw new n("invalid intrinsic syntax, expected closing `%`");
    if (h === "%" && Z !== "%")
      throw new n("invalid intrinsic syntax, expected opening `%`");
    var g = [];
    return R(Y, M, function(m, S, P, k) {
      g[g.length] = P ? R(k, K, "$1") : S || m;
    }), g;
  }, ne = function(Y, Z) {
    var h = Y, g;
    if (B(b, h) && (g = b[h], h = "%" + g[0] + "%"), B(O, h)) {
      var m = O[h];
      if (m === C && (m = d(h)), typeof m > "u" && !Z)
        throw new u("intrinsic " + Y + " exists, but is not available. Please file an issue!");
      return {
        alias: g,
        name: h,
        value: m
      };
    }
    throw new n("intrinsic " + Y + " does not exist!");
  };
  return Me = function(Y, Z) {
    if (typeof Y != "string" || Y.length === 0)
      throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Z != "boolean")
      throw new u('"allowMissing" argument must be a boolean');
    if (z(/^%?[^%]*%?$/, Y) === null)
      throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var h = oe(Y), g = h.length > 0 ? h[0] : "", m = ne("%" + g + "%", Z), S = m.name, P = m.value, k = !1, c = m.alias;
    c && (g = c[0], ee(h, x([0, 1], c)));
    for (var e = 1, r = !0; e < h.length; e += 1) {
      var o = h[e], l = Q(o, 0, 1), s = Q(o, -1);
      if ((l === '"' || l === "'" || l === "`" || s === '"' || s === "'" || s === "`") && l !== s)
        throw new n("property names with quotes must have matching quotes");
      if ((o === "constructor" || !r) && (k = !0), g += "." + o, S = "%" + g + "%", B(O, S))
        P = O[S];
      else if (P != null) {
        if (!(o in P)) {
          if (!Z)
            throw new u("base intrinsic for " + Y + " exists, but the property is not available.");
          return;
        }
        if (A && e + 1 >= h.length) {
          var E = A(P, o);
          r = !!E, r && "get" in E && !("originalValue" in E.get) ? P = E.get : P = P[o];
        } else
          r = B(P, o), P = P[o];
        r && !k && (O[S] = P);
      }
    }
    return P;
  }, Me;
}
var ke = { exports: {} }, jr;
function Re() {
  return jr || (jr = 1, function(t) {
    var n = hr(), i = Ie(), u = i("%Function.prototype.apply%"), y = i("%Function.prototype.call%"), A = i("%Reflect.apply%", !0) || n.call(y, u), N = i("%Object.getOwnPropertyDescriptor%", !0), U = i("%Object.defineProperty%", !0), j = i("%Math.max%");
    if (U)
      try {
        U({}, "a", { value: 1 });
      } catch {
        U = null;
      }
    t.exports = function(C) {
      var $ = A(n, y, arguments);
      if (N && U) {
        var O = N($, "length");
        O.configurable && U(
          $,
          "length",
          { value: 1 + j(0, C.length - (arguments.length - 1)) }
        );
      }
      return $;
    };
    var W = function() {
      return A(n, u, arguments);
    };
    U ? U(t.exports, "apply", { value: W }) : t.exports.apply = W;
  }(ke)), ke.exports;
}
var Zr = Ie(), Xr = Re(), Et = Xr(Zr("String.prototype.indexOf")), Qr = function(n, i) {
  var u = Zr(n, !!i);
  return typeof u == "function" && Et(n, ".prototype.") > -1 ? Xr(u) : u;
}, Ot = gr(), wt = Qr, fr = wt("Object.prototype.toString"), Te = function(n) {
  return Ot && n && typeof n == "object" && Symbol.toStringTag in n ? !1 : fr(n) === "[object Arguments]";
}, Kr = function(n) {
  return Te(n) ? !0 : n !== null && typeof n == "object" && typeof n.length == "number" && n.length >= 0 && fr(n) !== "[object Array]" && fr(n.callee) === "[object Function]";
}, jt = function() {
  return Te(arguments);
}();
Te.isLegacyArguments = Kr;
var Pt = jt ? Te : Kr, It = Object.prototype.toString, Rt = Function.prototype.toString, Tt = /^\s*(?:function)?\*/, et = gr(), Ge = Object.getPrototypeOf, Nt = function() {
  if (!et)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, Ce, qt = function(n) {
  if (typeof n != "function")
    return !1;
  if (Tt.test(Rt.call(n)))
    return !0;
  if (!et) {
    var i = It.call(n);
    return i === "[object GeneratorFunction]";
  }
  if (!Ge)
    return !1;
  if (typeof Ce > "u") {
    var u = Nt();
    Ce = u ? Ge(u) : !1;
  }
  return Ge(n) === Ce;
}, rt = Function.prototype.toString, de = typeof Reflect == "object" && Reflect !== null && Reflect.apply, ur, Ae;
if (typeof de == "function" && typeof Object.defineProperty == "function")
  try {
    ur = Object.defineProperty({}, "length", {
      get: function() {
        throw Ae;
      }
    }), Ae = {}, de(function() {
      throw 42;
    }, null, ur);
  } catch (t) {
    t !== Ae && (de = null);
  }
else
  de = null;
var Ft = /^\s*class\b/, cr = function(n) {
  try {
    var i = rt.call(n);
    return Ft.test(i);
  } catch {
    return !1;
  }
}, Le = function(n) {
  try {
    return cr(n) ? !1 : (rt.call(n), !0);
  } catch {
    return !1;
  }
}, Ee = Object.prototype.toString, Dt = "[object Object]", Bt = "[object Function]", $t = "[object GeneratorFunction]", _t = "[object HTMLAllCollection]", Ut = "[object HTML document.all class]", Mt = "[object HTMLCollection]", kt = typeof Symbol == "function" && !!Symbol.toStringTag, Gt = !(0 in [,]), sr = function() {
  return !1;
};
if (typeof document == "object") {
  var Ct = document.all;
  Ee.call(Ct) === Ee.call(document.all) && (sr = function(n) {
    if ((Gt || !n) && (typeof n > "u" || typeof n == "object"))
      try {
        var i = Ee.call(n);
        return (i === _t || i === Ut || i === Mt || i === Dt) && n("") == null;
      } catch {
      }
    return !1;
  });
}
var Lt = de ? function(n) {
  if (sr(n))
    return !0;
  if (!n || typeof n != "function" && typeof n != "object")
    return !1;
  try {
    de(n, null, ur);
  } catch (i) {
    if (i !== Ae)
      return !1;
  }
  return !cr(n) && Le(n);
} : function(n) {
  if (sr(n))
    return !0;
  if (!n || typeof n != "function" && typeof n != "object")
    return !1;
  if (kt)
    return Le(n);
  if (cr(n))
    return !1;
  var i = Ee.call(n);
  return i !== Bt && i !== $t && !/^\[object HTML/.test(i) ? !1 : Le(n);
}, Vt = Lt, Wt = Object.prototype.toString, tt = Object.prototype.hasOwnProperty, zt = function(n, i, u) {
  for (var y = 0, A = n.length; y < A; y++)
    tt.call(n, y) && (u == null ? i(n[y], y, n) : i.call(u, n[y], y, n));
}, Ht = function(n, i, u) {
  for (var y = 0, A = n.length; y < A; y++)
    u == null ? i(n.charAt(y), y, n) : i.call(u, n.charAt(y), y, n);
}, xt = function(n, i, u) {
  for (var y in n)
    tt.call(n, y) && (u == null ? i(n[y], y, n) : i.call(u, n[y], y, n));
}, Jt = function(n, i, u) {
  if (!Vt(i))
    throw new TypeError("iterator must be a function");
  var y;
  arguments.length >= 3 && (y = u), Wt.call(n) === "[object Array]" ? zt(n, i, y) : typeof n == "string" ? Ht(n, i, y) : xt(n, i, y);
}, Yt = Jt, Ve = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], Zt = typeof globalThis > "u" ? xr : globalThis, Xt = function() {
  for (var n = [], i = 0; i < Ve.length; i++)
    typeof Zt[Ve[i]] == "function" && (n[n.length] = Ve[i]);
  return n;
}, Qt = Ie(), Oe = Qt("%Object.getOwnPropertyDescriptor%", !0);
if (Oe)
  try {
    Oe([], "length");
  } catch {
    Oe = null;
  }
var Kt = Oe, je = Yt, en = Xt, Pr = Re(), dr = Qr, we = Kt, rn = dr("Object.prototype.toString"), nt = gr(), Ir = typeof globalThis > "u" ? xr : globalThis, lr = en(), br = dr("String.prototype.slice"), We = Object.getPrototypeOf, tn = dr("Array.prototype.indexOf", !0) || function(n, i) {
  for (var u = 0; u < n.length; u += 1)
    if (n[u] === i)
      return u;
  return -1;
}, Pe = { __proto__: null };
nt && we && We ? je(lr, function(t) {
  var n = new Ir[t]();
  if (Symbol.toStringTag in n) {
    var i = We(n), u = we(i, Symbol.toStringTag);
    if (!u) {
      var y = We(i);
      u = we(y, Symbol.toStringTag);
    }
    Pe["$" + t] = Pr(u.get);
  }
}) : je(lr, function(t) {
  var n = new Ir[t]();
  Pe["$" + t] = Pr(n.slice);
});
var nn = function(n) {
  var i = !1;
  return je(Pe, function(u, y) {
    if (!i)
      try {
        "$" + u(n) === y && (i = br(y, 1));
      } catch {
      }
  }), i;
}, on = function(n) {
  var i = !1;
  return je(Pe, function(u, y) {
    if (!i)
      try {
        u(n), i = br(y, 1);
      } catch {
      }
  }), i;
}, ot = function(n) {
  if (!n || typeof n != "object")
    return !1;
  if (!nt) {
    var i = br(rn(n), 8, -1);
    return tn(lr, i) > -1 ? i : i !== "Object" ? !1 : on(n);
  }
  return we ? nn(n) : null;
}, an = ot, fn = function(n) {
  return !!an(n);
};
(function(t) {
  var n = Pt, i = qt, u = ot, y = fn;
  function A(p) {
    return p.call.bind(p);
  }
  var N = typeof BigInt < "u", U = typeof Symbol < "u", j = A(Object.prototype.toString), W = A(Number.prototype.valueOf), I = A(String.prototype.valueOf), C = A(Boolean.prototype.valueOf);
  if (N)
    var $ = A(BigInt.prototype.valueOf);
  if (U)
    var O = A(Symbol.prototype.valueOf);
  function _(p, ye) {
    if (typeof p != "object")
      return !1;
    try {
      return ye(p), !0;
    } catch {
      return !1;
    }
  }
  t.isArgumentsObject = n, t.isGeneratorFunction = i, t.isTypedArray = y;
  function d(p) {
    return typeof Promise < "u" && p instanceof Promise || p !== null && typeof p == "object" && typeof p.then == "function" && typeof p.catch == "function";
  }
  t.isPromise = d;
  function b(p) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(p) : y(p) || r(p);
  }
  t.isArrayBufferView = b;
  function v(p) {
    return u(p) === "Uint8Array";
  }
  t.isUint8Array = v;
  function B(p) {
    return u(p) === "Uint8ClampedArray";
  }
  t.isUint8ClampedArray = B;
  function x(p) {
    return u(p) === "Uint16Array";
  }
  t.isUint16Array = x;
  function ee(p) {
    return u(p) === "Uint32Array";
  }
  t.isUint32Array = ee;
  function R(p) {
    return u(p) === "Int8Array";
  }
  t.isInt8Array = R;
  function Q(p) {
    return u(p) === "Int16Array";
  }
  t.isInt16Array = Q;
  function z(p) {
    return u(p) === "Int32Array";
  }
  t.isInt32Array = z;
  function M(p) {
    return u(p) === "Float32Array";
  }
  t.isFloat32Array = M;
  function K(p) {
    return u(p) === "Float64Array";
  }
  t.isFloat64Array = K;
  function oe(p) {
    return u(p) === "BigInt64Array";
  }
  t.isBigInt64Array = oe;
  function ne(p) {
    return u(p) === "BigUint64Array";
  }
  t.isBigUint64Array = ne;
  function J(p) {
    return j(p) === "[object Map]";
  }
  J.working = typeof Map < "u" && J(/* @__PURE__ */ new Map());
  function Y(p) {
    return typeof Map > "u" ? !1 : J.working ? J(p) : p instanceof Map;
  }
  t.isMap = Y;
  function Z(p) {
    return j(p) === "[object Set]";
  }
  Z.working = typeof Set < "u" && Z(/* @__PURE__ */ new Set());
  function h(p) {
    return typeof Set > "u" ? !1 : Z.working ? Z(p) : p instanceof Set;
  }
  t.isSet = h;
  function g(p) {
    return j(p) === "[object WeakMap]";
  }
  g.working = typeof WeakMap < "u" && g(/* @__PURE__ */ new WeakMap());
  function m(p) {
    return typeof WeakMap > "u" ? !1 : g.working ? g(p) : p instanceof WeakMap;
  }
  t.isWeakMap = m;
  function S(p) {
    return j(p) === "[object WeakSet]";
  }
  S.working = typeof WeakSet < "u" && S(/* @__PURE__ */ new WeakSet());
  function P(p) {
    return S(p);
  }
  t.isWeakSet = P;
  function k(p) {
    return j(p) === "[object ArrayBuffer]";
  }
  k.working = typeof ArrayBuffer < "u" && k(new ArrayBuffer());
  function c(p) {
    return typeof ArrayBuffer > "u" ? !1 : k.working ? k(p) : p instanceof ArrayBuffer;
  }
  t.isArrayBuffer = c;
  function e(p) {
    return j(p) === "[object DataView]";
  }
  e.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && e(new DataView(new ArrayBuffer(1), 0, 1));
  function r(p) {
    return typeof DataView > "u" ? !1 : e.working ? e(p) : p instanceof DataView;
  }
  t.isDataView = r;
  var o = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function l(p) {
    return j(p) === "[object SharedArrayBuffer]";
  }
  function s(p) {
    return typeof o > "u" ? !1 : (typeof l.working > "u" && (l.working = l(new o())), l.working ? l(p) : p instanceof o);
  }
  t.isSharedArrayBuffer = s;
  function E(p) {
    return j(p) === "[object AsyncFunction]";
  }
  t.isAsyncFunction = E;
  function q(p) {
    return j(p) === "[object Map Iterator]";
  }
  t.isMapIterator = q;
  function T(p) {
    return j(p) === "[object Set Iterator]";
  }
  t.isSetIterator = T;
  function L(p) {
    return j(p) === "[object Generator]";
  }
  t.isGeneratorObject = L;
  function re(p) {
    return j(p) === "[object WebAssembly.Module]";
  }
  t.isWebAssemblyCompiledModule = re;
  function ae(p) {
    return _(p, W);
  }
  t.isNumberObject = ae;
  function ue(p) {
    return _(p, I);
  }
  t.isStringObject = ue;
  function te(p) {
    return _(p, C);
  }
  t.isBooleanObject = te;
  function se(p) {
    return N && _(p, $);
  }
  t.isBigIntObject = se;
  function pe(p) {
    return U && _(p, O);
  }
  t.isSymbolObject = pe;
  function ie(p) {
    return ae(p) || ue(p) || te(p) || se(p) || pe(p);
  }
  t.isBoxedPrimitive = ie;
  function le(p) {
    return typeof Uint8Array < "u" && (c(p) || s(p));
  }
  t.isAnyArrayBuffer = le, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(p) {
    Object.defineProperty(t, p, {
      enumerable: !1,
      value: function() {
        throw new Error(p + " is not supported in userland");
      }
    });
  });
})(Jr);
var un = function(n) {
  return n && typeof n == "object" && typeof n.copy == "function" && typeof n.fill == "function" && typeof n.readUInt8 == "function";
}, pr = { exports: {} };
typeof Object.create == "function" ? pr.exports = function(n, i) {
  i && (n.super_ = i, n.prototype = Object.create(i.prototype, {
    constructor: {
      value: n,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : pr.exports = function(n, i) {
  if (i) {
    n.super_ = i;
    var u = function() {
    };
    u.prototype = i.prototype, n.prototype = new u(), n.prototype.constructor = n;
  }
};
var cn = pr.exports;
(function(t) {
  var n = Object.getOwnPropertyDescriptors || function(r) {
    for (var o = Object.keys(r), l = {}, s = 0; s < o.length; s++)
      l[o[s]] = Object.getOwnPropertyDescriptor(r, o[s]);
    return l;
  }, i = /%[sdj%]/g;
  t.format = function(e) {
    if (!R(e)) {
      for (var r = [], o = 0; o < arguments.length; o++)
        r.push(N(arguments[o]));
      return r.join(" ");
    }
    for (var o = 1, l = arguments, s = l.length, E = String(e).replace(i, function(T) {
      if (T === "%%")
        return "%";
      if (o >= s)
        return T;
      switch (T) {
        case "%s":
          return String(l[o++]);
        case "%d":
          return Number(l[o++]);
        case "%j":
          try {
            return JSON.stringify(l[o++]);
          } catch {
            return "[Circular]";
          }
        default:
          return T;
      }
    }), q = l[o]; o < s; q = l[++o])
      B(q) || !K(q) ? E += " " + q : E += " " + N(q);
    return E;
  }, t.deprecate = function(e, r) {
    if (typeof process < "u" && process.noDeprecation === !0)
      return e;
    if (typeof process > "u")
      return function() {
        return t.deprecate(e, r).apply(this, arguments);
      };
    var o = !1;
    function l() {
      if (!o) {
        if (process.throwDeprecation)
          throw new Error(r);
        process.traceDeprecation ? console.trace(r) : console.error(r), o = !0;
      }
      return e.apply(this, arguments);
    }
    return l;
  };
  var u = {}, y = /^$/;
  if ({}.NODE_DEBUG) {
    var A = {}.NODE_DEBUG;
    A = A.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), y = new RegExp("^" + A + "$", "i");
  }
  t.debuglog = function(e) {
    if (e = e.toUpperCase(), !u[e])
      if (y.test(e)) {
        var r = process.pid;
        u[e] = function() {
          var o = t.format.apply(t, arguments);
          console.error("%s %d: %s", e, r, o);
        };
      } else
        u[e] = function() {
        };
    return u[e];
  };
  function N(e, r) {
    var o = {
      seen: [],
      stylize: j
    };
    return arguments.length >= 3 && (o.depth = arguments[2]), arguments.length >= 4 && (o.colors = arguments[3]), v(r) ? o.showHidden = r : r && t._extend(o, r), z(o.showHidden) && (o.showHidden = !1), z(o.depth) && (o.depth = 2), z(o.colors) && (o.colors = !1), z(o.customInspect) && (o.customInspect = !0), o.colors && (o.stylize = U), I(o, e, o.depth);
  }
  t.inspect = N, N.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, N.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    // "name": intentionally not styling
    regexp: "red"
  };
  function U(e, r) {
    var o = N.styles[r];
    return o ? "\x1B[" + N.colors[o][0] + "m" + e + "\x1B[" + N.colors[o][1] + "m" : e;
  }
  function j(e, r) {
    return e;
  }
  function W(e) {
    var r = {};
    return e.forEach(function(o, l) {
      r[o] = !0;
    }), r;
  }
  function I(e, r, o) {
    if (e.customInspect && r && J(r.inspect) && // Filter out the util module, it's inspect function is special
    r.inspect !== t.inspect && // Also filter out any prototype objects using the circular check.
    !(r.constructor && r.constructor.prototype === r)) {
      var l = r.inspect(o, e);
      return R(l) || (l = I(e, l, o)), l;
    }
    var s = C(e, r);
    if (s)
      return s;
    var E = Object.keys(r), q = W(E);
    if (e.showHidden && (E = Object.getOwnPropertyNames(r)), ne(r) && (E.indexOf("message") >= 0 || E.indexOf("description") >= 0))
      return $(r);
    if (E.length === 0) {
      if (J(r)) {
        var T = r.name ? ": " + r.name : "";
        return e.stylize("[Function" + T + "]", "special");
      }
      if (M(r))
        return e.stylize(RegExp.prototype.toString.call(r), "regexp");
      if (oe(r))
        return e.stylize(Date.prototype.toString.call(r), "date");
      if (ne(r))
        return $(r);
    }
    var L = "", re = !1, ae = ["{", "}"];
    if (b(r) && (re = !0, ae = ["[", "]"]), J(r)) {
      var ue = r.name ? ": " + r.name : "";
      L = " [Function" + ue + "]";
    }
    if (M(r) && (L = " " + RegExp.prototype.toString.call(r)), oe(r) && (L = " " + Date.prototype.toUTCString.call(r)), ne(r) && (L = " " + $(r)), E.length === 0 && (!re || r.length == 0))
      return ae[0] + L + ae[1];
    if (o < 0)
      return M(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special");
    e.seen.push(r);
    var te;
    return re ? te = O(e, r, o, q, E) : te = E.map(function(se) {
      return _(e, r, o, q, se, re);
    }), e.seen.pop(), d(te, L, ae);
  }
  function C(e, r) {
    if (z(r))
      return e.stylize("undefined", "undefined");
    if (R(r)) {
      var o = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e.stylize(o, "string");
    }
    if (ee(r))
      return e.stylize("" + r, "number");
    if (v(r))
      return e.stylize("" + r, "boolean");
    if (B(r))
      return e.stylize("null", "null");
  }
  function $(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  function O(e, r, o, l, s) {
    for (var E = [], q = 0, T = r.length; q < T; ++q)
      S(r, String(q)) ? E.push(_(
        e,
        r,
        o,
        l,
        String(q),
        !0
      )) : E.push("");
    return s.forEach(function(L) {
      L.match(/^\d+$/) || E.push(_(
        e,
        r,
        o,
        l,
        L,
        !0
      ));
    }), E;
  }
  function _(e, r, o, l, s, E) {
    var q, T, L;
    if (L = Object.getOwnPropertyDescriptor(r, s) || { value: r[s] }, L.get ? L.set ? T = e.stylize("[Getter/Setter]", "special") : T = e.stylize("[Getter]", "special") : L.set && (T = e.stylize("[Setter]", "special")), S(l, s) || (q = "[" + s + "]"), T || (e.seen.indexOf(L.value) < 0 ? (B(o) ? T = I(e, L.value, null) : T = I(e, L.value, o - 1), T.indexOf(`
`) > -1 && (E ? T = T.split(`
`).map(function(re) {
      return "  " + re;
    }).join(`
`).slice(2) : T = `
` + T.split(`
`).map(function(re) {
      return "   " + re;
    }).join(`
`))) : T = e.stylize("[Circular]", "special")), z(q)) {
      if (E && s.match(/^\d+$/))
        return T;
      q = JSON.stringify("" + s), q.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (q = q.slice(1, -1), q = e.stylize(q, "name")) : (q = q.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), q = e.stylize(q, "string"));
    }
    return q + ": " + T;
  }
  function d(e, r, o) {
    var l = e.reduce(function(s, E) {
      return E.indexOf(`
`) >= 0, s + E.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return l > 60 ? o[0] + (r === "" ? "" : r + `
 `) + " " + e.join(`,
  `) + " " + o[1] : o[0] + r + " " + e.join(", ") + " " + o[1];
  }
  t.types = Jr;
  function b(e) {
    return Array.isArray(e);
  }
  t.isArray = b;
  function v(e) {
    return typeof e == "boolean";
  }
  t.isBoolean = v;
  function B(e) {
    return e === null;
  }
  t.isNull = B;
  function x(e) {
    return e == null;
  }
  t.isNullOrUndefined = x;
  function ee(e) {
    return typeof e == "number";
  }
  t.isNumber = ee;
  function R(e) {
    return typeof e == "string";
  }
  t.isString = R;
  function Q(e) {
    return typeof e == "symbol";
  }
  t.isSymbol = Q;
  function z(e) {
    return e === void 0;
  }
  t.isUndefined = z;
  function M(e) {
    return K(e) && Z(e) === "[object RegExp]";
  }
  t.isRegExp = M, t.types.isRegExp = M;
  function K(e) {
    return typeof e == "object" && e !== null;
  }
  t.isObject = K;
  function oe(e) {
    return K(e) && Z(e) === "[object Date]";
  }
  t.isDate = oe, t.types.isDate = oe;
  function ne(e) {
    return K(e) && (Z(e) === "[object Error]" || e instanceof Error);
  }
  t.isError = ne, t.types.isNativeError = ne;
  function J(e) {
    return typeof e == "function";
  }
  t.isFunction = J;
  function Y(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || // ES6 symbol
    typeof e > "u";
  }
  t.isPrimitive = Y, t.isBuffer = un;
  function Z(e) {
    return Object.prototype.toString.call(e);
  }
  function h(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  var g = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function m() {
    var e = /* @__PURE__ */ new Date(), r = [
      h(e.getHours()),
      h(e.getMinutes()),
      h(e.getSeconds())
    ].join(":");
    return [e.getDate(), g[e.getMonth()], r].join(" ");
  }
  t.log = function() {
    console.log("%s - %s", m(), t.format.apply(t, arguments));
  }, t.inherits = cn, t._extend = function(e, r) {
    if (!r || !K(r))
      return e;
    for (var o = Object.keys(r), l = o.length; l--; )
      e[o[l]] = r[o[l]];
    return e;
  };
  function S(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }
  var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  t.promisify = function(r) {
    if (typeof r != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (P && r[P]) {
      var o = r[P];
      if (typeof o != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(o, P, {
        value: o,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), o;
    }
    function o() {
      for (var l, s, E = new Promise(function(L, re) {
        l = L, s = re;
      }), q = [], T = 0; T < arguments.length; T++)
        q.push(arguments[T]);
      q.push(function(L, re) {
        L ? s(L) : l(re);
      });
      try {
        r.apply(this, q);
      } catch (L) {
        s(L);
      }
      return E;
    }
    return Object.setPrototypeOf(o, Object.getPrototypeOf(r)), P && Object.defineProperty(o, P, {
      value: o,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      o,
      n(r)
    );
  }, t.promisify.custom = P;
  function k(e, r) {
    if (!e) {
      var o = new Error("Promise was rejected with a falsy value");
      o.reason = e, e = o;
    }
    return r(e);
  }
  function c(e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function r() {
      for (var o = [], l = 0; l < arguments.length; l++)
        o.push(arguments[l]);
      var s = o.pop();
      if (typeof s != "function")
        throw new TypeError("The last argument must be of type Function");
      var E = this, q = function() {
        return s.apply(E, arguments);
      };
      e.apply(this, o).then(
        function(T) {
          process.nextTick(q.bind(null, null, T));
        },
        function(T) {
          process.nextTick(k.bind(null, T, q));
        }
      );
    }
    return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(
      r,
      n(e)
    ), r;
  }
  t.callbackify = c;
})(be);
var Rr;
function it() {
  if (Rr)
    return Fe;
  Rr = 1;
  function t(d) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(v) {
      return typeof v;
    } : t = function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, t(d);
  }
  function n(d, b) {
    if (!(d instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(d, b) {
    return b && (t(b) === "object" || typeof b == "function") ? b : u(d);
  }
  function u(d) {
    if (d === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return d;
  }
  function y(d) {
    return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(v) {
      return v.__proto__ || Object.getPrototypeOf(v);
    }, y(d);
  }
  function A(d, b) {
    if (typeof b != "function" && b !== null)
      throw new TypeError("Super expression must either be null or a function");
    d.prototype = Object.create(b && b.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), b && N(d, b);
  }
  function N(d, b) {
    return N = Object.setPrototypeOf || function(B, x) {
      return B.__proto__ = x, B;
    }, N(d, b);
  }
  var U = {}, j, W;
  function I(d, b, v) {
    v || (v = Error);
    function B(ee, R, Q) {
      return typeof b == "string" ? b : b(ee, R, Q);
    }
    var x = /* @__PURE__ */ function(ee) {
      A(R, ee);
      function R(Q, z, M) {
        var K;
        return n(this, R), K = i(this, y(R).call(this, B(Q, z, M))), K.code = d, K;
      }
      return R;
    }(v);
    U[d] = x;
  }
  function C(d, b) {
    if (Array.isArray(d)) {
      var v = d.length;
      return d = d.map(function(B) {
        return String(B);
      }), v > 2 ? "one of ".concat(b, " ").concat(d.slice(0, v - 1).join(", "), ", or ") + d[v - 1] : v === 2 ? "one of ".concat(b, " ").concat(d[0], " or ").concat(d[1]) : "of ".concat(b, " ").concat(d[0]);
    } else
      return "of ".concat(b, " ").concat(String(d));
  }
  function $(d, b, v) {
    return d.substr(!v || v < 0 ? 0 : +v, b.length) === b;
  }
  function O(d, b, v) {
    return (v === void 0 || v > d.length) && (v = d.length), d.substring(v - b.length, v) === b;
  }
  function _(d, b, v) {
    return typeof v != "number" && (v = 0), v + b.length > d.length ? !1 : d.indexOf(b, v) !== -1;
  }
  return I("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), I("ERR_INVALID_ARG_TYPE", function(d, b, v) {
    j === void 0 && (j = yr()), j(typeof d == "string", "'name' must be a string");
    var B;
    typeof b == "string" && $(b, "not ") ? (B = "must not be", b = b.replace(/^not /, "")) : B = "must be";
    var x;
    if (O(d, " argument"))
      x = "The ".concat(d, " ").concat(B, " ").concat(C(b, "type"));
    else {
      var ee = _(d, ".") ? "property" : "argument";
      x = 'The "'.concat(d, '" ').concat(ee, " ").concat(B, " ").concat(C(b, "type"));
    }
    return x += ". Received type ".concat(t(v)), x;
  }, TypeError), I("ERR_INVALID_ARG_VALUE", function(d, b) {
    var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    W === void 0 && (W = be);
    var B = W.inspect(b);
    return B.length > 128 && (B = "".concat(B.slice(0, 128), "...")), "The argument '".concat(d, "' ").concat(v, ". Received ").concat(B);
  }, TypeError), I("ERR_INVALID_RETURN_VALUE", function(d, b, v) {
    var B;
    return v && v.constructor && v.constructor.name ? B = "instance of ".concat(v.constructor.name) : B = "type ".concat(t(v)), "Expected ".concat(d, ' to be returned from the "').concat(b, '"') + " function but got ".concat(B, ".");
  }, TypeError), I("ERR_MISSING_ARGS", function() {
    for (var d = arguments.length, b = new Array(d), v = 0; v < d; v++)
      b[v] = arguments[v];
    j === void 0 && (j = yr()), j(b.length > 0, "At least one arg needs to be specified");
    var B = "The ", x = b.length;
    switch (b = b.map(function(ee) {
      return '"'.concat(ee, '"');
    }), x) {
      case 1:
        B += "".concat(b[0], " argument");
        break;
      case 2:
        B += "".concat(b[0], " and ").concat(b[1], " arguments");
        break;
      default:
        B += b.slice(0, x - 1).join(", "), B += ", and ".concat(b[x - 1], " arguments");
        break;
    }
    return "".concat(B, " must be specified");
  }, TypeError), Fe.codes = U, Fe;
}
var ze, Tr;
function sn() {
  if (Tr)
    return ze;
  Tr = 1;
  function t(h) {
    for (var g = 1; g < arguments.length; g++) {
      var m = arguments[g] != null ? arguments[g] : {}, S = Object.keys(m);
      typeof Object.getOwnPropertySymbols == "function" && (S = S.concat(Object.getOwnPropertySymbols(m).filter(function(P) {
        return Object.getOwnPropertyDescriptor(m, P).enumerable;
      }))), S.forEach(function(P) {
        n(h, P, m[P]);
      });
    }
    return h;
  }
  function n(h, g, m) {
    return g in h ? Object.defineProperty(h, g, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : h[g] = m, h;
  }
  function i(h, g) {
    if (!(h instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function u(h, g) {
    for (var m = 0; m < g.length; m++) {
      var S = g[m];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(h, S.key, S);
    }
  }
  function y(h, g, m) {
    return g && u(h.prototype, g), m && u(h, m), h;
  }
  function A(h, g) {
    return g && (_(g) === "object" || typeof g == "function") ? g : N(h);
  }
  function N(h) {
    if (h === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return h;
  }
  function U(h, g) {
    if (typeof g != "function" && g !== null)
      throw new TypeError("Super expression must either be null or a function");
    h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: !0, configurable: !0 } }), g && $(h, g);
  }
  function j(h) {
    var g = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return j = function(S) {
      if (S === null || !C(S))
        return S;
      if (typeof S != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof g < "u") {
        if (g.has(S))
          return g.get(S);
        g.set(S, P);
      }
      function P() {
        return I(S, arguments, O(this).constructor);
      }
      return P.prototype = Object.create(S.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } }), $(P, S);
    }, j(h);
  }
  function W() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function I(h, g, m) {
    return W() ? I = Reflect.construct : I = function(P, k, c) {
      var e = [null];
      e.push.apply(e, k);
      var r = Function.bind.apply(P, e), o = new r();
      return c && $(o, c.prototype), o;
    }, I.apply(null, arguments);
  }
  function C(h) {
    return Function.toString.call(h).indexOf("[native code]") !== -1;
  }
  function $(h, g) {
    return $ = Object.setPrototypeOf || function(S, P) {
      return S.__proto__ = P, S;
    }, $(h, g);
  }
  function O(h) {
    return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(m) {
      return m.__proto__ || Object.getPrototypeOf(m);
    }, O(h);
  }
  function _(h) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _ = function(m) {
      return typeof m;
    } : _ = function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, _(h);
  }
  var d = be, b = d.inspect, v = it(), B = v.codes.ERR_INVALID_ARG_TYPE;
  function x(h, g, m) {
    return (m === void 0 || m > h.length) && (m = h.length), h.substring(m - g.length, m) === g;
  }
  function ee(h, g) {
    if (g = Math.floor(g), h.length == 0 || g == 0)
      return "";
    var m = h.length * g;
    for (g = Math.floor(Math.log(g) / Math.log(2)); g; )
      h += h, g--;
    return h += h.substring(0, m - h.length), h;
  }
  var R = "", Q = "", z = "", M = "", K = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  }, oe = 10;
  function ne(h) {
    var g = Object.keys(h), m = Object.create(Object.getPrototypeOf(h));
    return g.forEach(function(S) {
      m[S] = h[S];
    }), Object.defineProperty(m, "message", {
      value: h.message
    }), m;
  }
  function J(h) {
    return b(h, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      // Assert compares only enumerable properties (with a few exceptions).
      showHidden: !1,
      // Having a long line as error is better than wrapping the line for
      // comparison for now.
      // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
      // have meta information about the inspected properties (i.e., know where
      // in what line the property starts and ends).
      breakLength: 1 / 0,
      // Assert does not detect proxies currently.
      showProxy: !1,
      sorted: !0,
      // Inspect getters as we also check them when comparing entries.
      getters: !0
    });
  }
  function Y(h, g, m) {
    var S = "", P = "", k = 0, c = "", e = !1, r = J(h), o = r.split(`
`), l = J(g).split(`
`), s = 0, E = "";
    if (m === "strictEqual" && _(h) === "object" && _(g) === "object" && h !== null && g !== null && (m = "strictEqualObject"), o.length === 1 && l.length === 1 && o[0] !== l[0]) {
      var q = o[0].length + l[0].length;
      if (q <= oe) {
        if ((_(h) !== "object" || h === null) && (_(g) !== "object" || g === null) && (h !== 0 || g !== 0))
          return "".concat(K[m], `

`) + "".concat(o[0], " !== ").concat(l[0], `
`);
      } else if (m !== "strictEqualObject") {
        var T = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (q < T) {
          for (; o[0][s] === l[0][s]; )
            s++;
          s > 2 && (E = `
  `.concat(ee(" ", s), "^"), s = 0);
        }
      }
    }
    for (var L = o[o.length - 1], re = l[l.length - 1]; L === re && (s++ < 2 ? c = `
  `.concat(L).concat(c) : S = L, o.pop(), l.pop(), !(o.length === 0 || l.length === 0)); )
      L = o[o.length - 1], re = l[l.length - 1];
    var ae = Math.max(o.length, l.length);
    if (ae === 0) {
      var ue = r.split(`
`);
      if (ue.length > 30)
        for (ue[26] = "".concat(R, "...").concat(M); ue.length > 27; )
          ue.pop();
      return "".concat(K.notIdentical, `

`).concat(ue.join(`
`), `
`);
    }
    s > 3 && (c = `
`.concat(R, "...").concat(M).concat(c), e = !0), S !== "" && (c = `
  `.concat(S).concat(c), S = "");
    var te = 0, se = K[m] + `
`.concat(Q, "+ actual").concat(M, " ").concat(z, "- expected").concat(M), pe = " ".concat(R, "...").concat(M, " Lines skipped");
    for (s = 0; s < ae; s++) {
      var ie = s - k;
      if (o.length < s + 1)
        ie > 1 && s > 2 && (ie > 4 ? (P += `
`.concat(R, "...").concat(M), e = !0) : ie > 3 && (P += `
  `.concat(l[s - 2]), te++), P += `
  `.concat(l[s - 1]), te++), k = s, S += `
`.concat(z, "-").concat(M, " ").concat(l[s]), te++;
      else if (l.length < s + 1)
        ie > 1 && s > 2 && (ie > 4 ? (P += `
`.concat(R, "...").concat(M), e = !0) : ie > 3 && (P += `
  `.concat(o[s - 2]), te++), P += `
  `.concat(o[s - 1]), te++), k = s, P += `
`.concat(Q, "+").concat(M, " ").concat(o[s]), te++;
      else {
        var le = l[s], p = o[s], ye = p !== le && (!x(p, ",") || p.slice(0, -1) !== le);
        ye && x(le, ",") && le.slice(0, -1) === p && (ye = !1, p += ","), ye ? (ie > 1 && s > 2 && (ie > 4 ? (P += `
`.concat(R, "...").concat(M), e = !0) : ie > 3 && (P += `
  `.concat(o[s - 2]), te++), P += `
  `.concat(o[s - 1]), te++), k = s, P += `
`.concat(Q, "+").concat(M, " ").concat(p), S += `
`.concat(z, "-").concat(M, " ").concat(le), te += 2) : (P += S, S = "", (ie === 1 || s === 0) && (P += `
  `.concat(p), te++));
      }
      if (te > 20 && s < ae - 2)
        return "".concat(se).concat(pe, `
`).concat(P, `
`).concat(R, "...").concat(M).concat(S, `
`) + "".concat(R, "...").concat(M);
    }
    return "".concat(se).concat(e ? pe : "", `
`).concat(P).concat(S).concat(c).concat(E);
  }
  var Z = /* @__PURE__ */ function(h) {
    U(g, h);
    function g(m) {
      var S;
      if (i(this, g), _(m) !== "object" || m === null)
        throw new B("options", "Object", m);
      var P = m.message, k = m.operator, c = m.stackStartFn, e = m.actual, r = m.expected, o = Error.stackTraceLimit;
      if (Error.stackTraceLimit = 0, P != null)
        S = A(this, O(g).call(this, String(P)));
      else if (process.stderr && process.stderr.isTTY && (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1 ? (R = "\x1B[34m", Q = "\x1B[32m", M = "\x1B[39m", z = "\x1B[31m") : (R = "", Q = "", M = "", z = "")), _(e) === "object" && e !== null && _(r) === "object" && r !== null && "stack" in e && e instanceof Error && "stack" in r && r instanceof Error && (e = ne(e), r = ne(r)), k === "deepStrictEqual" || k === "strictEqual")
        S = A(this, O(g).call(this, Y(e, r, k)));
      else if (k === "notDeepStrictEqual" || k === "notStrictEqual") {
        var l = K[k], s = J(e).split(`
`);
        if (k === "notStrictEqual" && _(e) === "object" && e !== null && (l = K.notStrictEqualObject), s.length > 30)
          for (s[26] = "".concat(R, "...").concat(M); s.length > 27; )
            s.pop();
        s.length === 1 ? S = A(this, O(g).call(this, "".concat(l, " ").concat(s[0]))) : S = A(this, O(g).call(this, "".concat(l, `

`).concat(s.join(`
`), `
`)));
      } else {
        var E = J(e), q = "", T = K[k];
        k === "notDeepEqual" || k === "notEqual" ? (E = "".concat(K[k], `

`).concat(E), E.length > 1024 && (E = "".concat(E.slice(0, 1021), "..."))) : (q = "".concat(J(r)), E.length > 512 && (E = "".concat(E.slice(0, 509), "...")), q.length > 512 && (q = "".concat(q.slice(0, 509), "...")), k === "deepEqual" || k === "equal" ? E = "".concat(T, `

`).concat(E, `

should equal

`) : q = " ".concat(k, " ").concat(q)), S = A(this, O(g).call(this, "".concat(E).concat(q)));
      }
      return Error.stackTraceLimit = o, S.generatedMessage = !P, Object.defineProperty(N(S), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), S.code = "ERR_ASSERTION", S.actual = e, S.expected = r, S.operator = k, Error.captureStackTrace && Error.captureStackTrace(N(S), c), S.stack, S.name = "AssertionError", A(S);
    }
    return y(g, [{
      key: "toString",
      value: function() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: b.custom,
      value: function(S, P) {
        return b(this, t({}, P, {
          customInspect: !1,
          depth: 0
        }));
      }
    }]), g;
  }(j(Error));
  return ze = Z, ze;
}
var He, Nr;
function ln() {
  if (Nr)
    return He;
  Nr = 1;
  function t(i, u) {
    if (i == null)
      throw new TypeError("Cannot convert first argument to object");
    for (var y = Object(i), A = 1; A < arguments.length; A++) {
      var N = arguments[A];
      if (N != null)
        for (var U = Object.keys(Object(N)), j = 0, W = U.length; j < W; j++) {
          var I = U[j], C = Object.getOwnPropertyDescriptor(N, I);
          C !== void 0 && C.enumerable && (y[I] = N[I]);
        }
    }
    return y;
  }
  function n() {
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  return He = {
    assign: t,
    polyfill: n
  }, He;
}
var xe, qr;
function at() {
  if (qr)
    return xe;
  qr = 1;
  var t = Object.prototype.toString;
  return xe = function(i) {
    var u = t.call(i), y = u === "[object Arguments]";
    return y || (y = u !== "[object Array]" && i !== null && typeof i == "object" && typeof i.length == "number" && i.length >= 0 && t.call(i.callee) === "[object Function]"), y;
  }, xe;
}
var Je, Fr;
function pn() {
  if (Fr)
    return Je;
  Fr = 1;
  var t;
  if (!Object.keys) {
    var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, u = at(), y = Object.prototype.propertyIsEnumerable, A = !y.call({ toString: null }, "toString"), N = y.call(function() {
    }, "prototype"), U = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], j = function($) {
      var O = $.constructor;
      return O && O.prototype === $;
    }, W = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, I = function() {
      if (typeof window > "u")
        return !1;
      for (var $ in window)
        try {
          if (!W["$" + $] && n.call(window, $) && window[$] !== null && typeof window[$] == "object")
            try {
              j(window[$]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), C = function($) {
      if (typeof window > "u" || !I)
        return j($);
      try {
        return j($);
      } catch {
        return !1;
      }
    };
    t = function(O) {
      var _ = O !== null && typeof O == "object", d = i.call(O) === "[object Function]", b = u(O), v = _ && i.call(O) === "[object String]", B = [];
      if (!_ && !d && !b)
        throw new TypeError("Object.keys called on a non-object");
      var x = N && d;
      if (v && O.length > 0 && !n.call(O, 0))
        for (var ee = 0; ee < O.length; ++ee)
          B.push(String(ee));
      if (b && O.length > 0)
        for (var R = 0; R < O.length; ++R)
          B.push(String(R));
      else
        for (var Q in O)
          !(x && Q === "prototype") && n.call(O, Q) && B.push(String(Q));
      if (A)
        for (var z = C(O), M = 0; M < U.length; ++M)
          !(z && U[M] === "constructor") && n.call(O, U[M]) && B.push(U[M]);
      return B;
    };
  }
  return Je = t, Je;
}
var Ye, Dr;
function yn() {
  if (Dr)
    return Ye;
  Dr = 1;
  var t = Array.prototype.slice, n = at(), i = Object.keys, u = i ? function(N) {
    return i(N);
  } : pn(), y = Object.keys;
  return u.shim = function() {
    if (Object.keys) {
      var N = function() {
        var U = Object.keys(arguments);
        return U && U.length === arguments.length;
      }(1, 2);
      N || (Object.keys = function(j) {
        return n(j) ? y(t.call(j)) : y(j);
      });
    } else
      Object.keys = u;
    return Object.keys || u;
  }, Ye = u, Ye;
}
var Ze, Br;
function gn() {
  if (Br)
    return Ze;
  Br = 1;
  var t = Ie(), n = t("%Object.defineProperty%", !0), i = function() {
    if (n)
      try {
        return n({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
  return i.hasArrayLengthDefineBug = function() {
    if (!i())
      return null;
    try {
      return n([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Ze = i, Ze;
}
var Xe, $r;
function Ne() {
  if ($r)
    return Xe;
  $r = 1;
  var t = yn(), n = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", i = Object.prototype.toString, u = Array.prototype.concat, y = Object.defineProperty, A = function(I) {
    return typeof I == "function" && i.call(I) === "[object Function]";
  }, N = gn()(), U = y && N, j = function(I, C, $, O) {
    if (C in I) {
      if (O === !0) {
        if (I[C] === $)
          return;
      } else if (!A(O) || !O())
        return;
    }
    U ? y(I, C, {
      configurable: !0,
      enumerable: !1,
      value: $,
      writable: !0
    }) : I[C] = $;
  }, W = function(I, C) {
    var $ = arguments.length > 2 ? arguments[2] : {}, O = t(C);
    n && (O = u.call(O, Object.getOwnPropertySymbols(C)));
    for (var _ = 0; _ < O.length; _ += 1)
      j(I, O[_], C[O[_]], $[O[_]]);
  };
  return W.supportsDescriptors = !!U, Xe = W, Xe;
}
var Qe, _r;
function ft() {
  if (_r)
    return Qe;
  _r = 1;
  var t = function(n) {
    return n !== n;
  };
  return Qe = function(i, u) {
    return i === 0 && u === 0 ? 1 / i === 1 / u : !!(i === u || t(i) && t(u));
  }, Qe;
}
var Ke, Ur;
function ut() {
  if (Ur)
    return Ke;
  Ur = 1;
  var t = ft();
  return Ke = function() {
    return typeof Object.is == "function" ? Object.is : t;
  }, Ke;
}
var er, Mr;
function hn() {
  if (Mr)
    return er;
  Mr = 1;
  var t = ut(), n = Ne();
  return er = function() {
    var u = t();
    return n(Object, { is: u }, {
      is: function() {
        return Object.is !== u;
      }
    }), u;
  }, er;
}
var rr, kr;
function ct() {
  if (kr)
    return rr;
  kr = 1;
  var t = Ne(), n = Re(), i = ft(), u = ut(), y = hn(), A = n(u(), Object);
  return t(A, {
    getPolyfill: u,
    implementation: i,
    shim: y
  }), rr = A, rr;
}
var tr, Gr;
function st() {
  return Gr || (Gr = 1, tr = function(n) {
    return n !== n;
  }), tr;
}
var nr, Cr;
function lt() {
  if (Cr)
    return nr;
  Cr = 1;
  var t = st();
  return nr = function() {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : t;
  }, nr;
}
var or, Lr;
function dn() {
  if (Lr)
    return or;
  Lr = 1;
  var t = Ne(), n = lt();
  return or = function() {
    var u = n();
    return t(Number, { isNaN: u }, {
      isNaN: function() {
        return Number.isNaN !== u;
      }
    }), u;
  }, or;
}
var ir, Vr;
function bn() {
  if (Vr)
    return ir;
  Vr = 1;
  var t = Re(), n = Ne(), i = st(), u = lt(), y = dn(), A = t(u(), Number);
  return n(A, {
    getPolyfill: u,
    implementation: i,
    shim: y
  }), ir = A, ir;
}
var ar, Wr;
function mn() {
  if (Wr)
    return ar;
  Wr = 1;
  function t(a, f) {
    return u(a) || i(a, f) || n();
  }
  function n() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function i(a, f) {
    var w = [], F = !0, D = !1, V = void 0;
    try {
      for (var G = a[Symbol.iterator](), X; !(F = (X = G.next()).done) && (w.push(X.value), !(f && w.length === f)); F = !0)
        ;
    } catch (H) {
      D = !0, V = H;
    } finally {
      try {
        !F && G.return != null && G.return();
      } finally {
        if (D)
          throw V;
      }
    }
    return w;
  }
  function u(a) {
    if (Array.isArray(a))
      return a;
  }
  function y(a) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? y = function(w) {
      return typeof w;
    } : y = function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, y(a);
  }
  var A = /a/g.flags !== void 0, N = function(f) {
    var w = [];
    return f.forEach(function(F) {
      return w.push(F);
    }), w;
  }, U = function(f) {
    var w = [];
    return f.forEach(function(F, D) {
      return w.push([D, F]);
    }), w;
  }, j = Object.is ? Object.is : ct(), W = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  }, I = Number.isNaN ? Number.isNaN : bn();
  function C(a) {
    return a.call.bind(a);
  }
  var $ = C(Object.prototype.hasOwnProperty), O = C(Object.prototype.propertyIsEnumerable), _ = C(Object.prototype.toString), d = be.types, b = d.isAnyArrayBuffer, v = d.isArrayBufferView, B = d.isDate, x = d.isMap, ee = d.isRegExp, R = d.isSet, Q = d.isNativeError, z = d.isBoxedPrimitive, M = d.isNumberObject, K = d.isStringObject, oe = d.isBooleanObject, ne = d.isBigIntObject, J = d.isSymbolObject, Y = d.isFloat32Array, Z = d.isFloat64Array;
  function h(a) {
    if (a.length === 0 || a.length > 10)
      return !0;
    for (var f = 0; f < a.length; f++) {
      var w = a.charCodeAt(f);
      if (w < 48 || w > 57)
        return !0;
    }
    return a.length === 10 && a >= Math.pow(2, 32);
  }
  function g(a) {
    return Object.keys(a).filter(h).concat(W(a).filter(Object.prototype.propertyIsEnumerable.bind(a)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function m(a, f) {
    if (a === f)
      return 0;
    for (var w = a.length, F = f.length, D = 0, V = Math.min(w, F); D < V; ++D)
      if (a[D] !== f[D]) {
        w = a[D], F = f[D];
        break;
      }
    return w < F ? -1 : F < w ? 1 : 0;
  }
  var S = !0, P = !1, k = 0, c = 1, e = 2, r = 3;
  function o(a, f) {
    return A ? a.source === f.source && a.flags === f.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(f);
  }
  function l(a, f) {
    if (a.byteLength !== f.byteLength)
      return !1;
    for (var w = 0; w < a.byteLength; w++)
      if (a[w] !== f[w])
        return !1;
    return !0;
  }
  function s(a, f) {
    return a.byteLength !== f.byteLength ? !1 : m(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(f.buffer, f.byteOffset, f.byteLength)) === 0;
  }
  function E(a, f) {
    return a.byteLength === f.byteLength && m(new Uint8Array(a), new Uint8Array(f)) === 0;
  }
  function q(a, f) {
    return M(a) ? M(f) && j(Number.prototype.valueOf.call(a), Number.prototype.valueOf.call(f)) : K(a) ? K(f) && String.prototype.valueOf.call(a) === String.prototype.valueOf.call(f) : oe(a) ? oe(f) && Boolean.prototype.valueOf.call(a) === Boolean.prototype.valueOf.call(f) : ne(a) ? ne(f) && BigInt.prototype.valueOf.call(a) === BigInt.prototype.valueOf.call(f) : J(f) && Symbol.prototype.valueOf.call(a) === Symbol.prototype.valueOf.call(f);
  }
  function T(a, f, w, F) {
    if (a === f)
      return a !== 0 ? !0 : w ? j(a, f) : !0;
    if (w) {
      if (y(a) !== "object")
        return typeof a == "number" && I(a) && I(f);
      if (y(f) !== "object" || a === null || f === null || Object.getPrototypeOf(a) !== Object.getPrototypeOf(f))
        return !1;
    } else {
      if (a === null || y(a) !== "object")
        return f === null || y(f) !== "object" ? a == f : !1;
      if (f === null || y(f) !== "object")
        return !1;
    }
    var D = _(a), V = _(f);
    if (D !== V)
      return !1;
    if (Array.isArray(a)) {
      if (a.length !== f.length)
        return !1;
      var G = g(a), X = g(f);
      return G.length !== X.length ? !1 : re(a, f, w, F, c, G);
    }
    if (D === "[object Object]" && (!x(a) && x(f) || !R(a) && R(f)))
      return !1;
    if (B(a)) {
      if (!B(f) || Date.prototype.getTime.call(a) !== Date.prototype.getTime.call(f))
        return !1;
    } else if (ee(a)) {
      if (!ee(f) || !o(a, f))
        return !1;
    } else if (Q(a) || a instanceof Error) {
      if (a.message !== f.message || a.name !== f.name)
        return !1;
    } else if (v(a)) {
      if (!w && (Y(a) || Z(a))) {
        if (!l(a, f))
          return !1;
      } else if (!s(a, f))
        return !1;
      var H = g(a), fe = g(f);
      return H.length !== fe.length ? !1 : re(a, f, w, F, k, H);
    } else {
      if (R(a))
        return !R(f) || a.size !== f.size ? !1 : re(a, f, w, F, e);
      if (x(a))
        return !x(f) || a.size !== f.size ? !1 : re(a, f, w, F, r);
      if (b(a)) {
        if (!E(a, f))
          return !1;
      } else if (z(a) && !q(a, f))
        return !1;
    }
    return re(a, f, w, F, k);
  }
  function L(a, f) {
    return f.filter(function(w) {
      return O(a, w);
    });
  }
  function re(a, f, w, F, D, V) {
    if (arguments.length === 5) {
      V = Object.keys(a);
      var G = Object.keys(f);
      if (V.length !== G.length)
        return !1;
    }
    for (var X = 0; X < V.length; X++)
      if (!$(f, V[X]))
        return !1;
    if (w && arguments.length === 5) {
      var H = W(a);
      if (H.length !== 0) {
        var fe = 0;
        for (X = 0; X < H.length; X++) {
          var ce = H[X];
          if (O(a, ce)) {
            if (!O(f, ce))
              return !1;
            V.push(ce), fe++;
          } else if (O(f, ce))
            return !1;
        }
        var me = W(f);
        if (H.length !== me.length && L(f, me).length !== fe)
          return !1;
      } else {
        var ge = W(f);
        if (ge.length !== 0 && L(f, ge).length !== 0)
          return !1;
      }
    }
    if (V.length === 0 && (D === k || D === c && a.length === 0 || a.size === 0))
      return !0;
    if (F === void 0)
      F = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    else {
      var ve = F.val1.get(a);
      if (ve !== void 0) {
        var he = F.val2.get(f);
        if (he !== void 0)
          return ve === he;
      }
      F.position++;
    }
    F.val1.set(a, F.position), F.val2.set(f, F.position);
    var yt = p(a, f, w, V, F, D);
    return F.val1.delete(a), F.val2.delete(f), yt;
  }
  function ae(a, f, w, F) {
    for (var D = N(a), V = 0; V < D.length; V++) {
      var G = D[V];
      if (T(f, G, w, F))
        return a.delete(G), !0;
    }
    return !1;
  }
  function ue(a) {
    switch (y(a)) {
      case "undefined":
        return null;
      case "object":
        return;
      case "symbol":
        return !1;
      case "string":
        a = +a;
      case "number":
        if (I(a))
          return !1;
    }
    return !0;
  }
  function te(a, f, w) {
    var F = ue(w);
    return F ?? (f.has(F) && !a.has(F));
  }
  function se(a, f, w, F, D) {
    var V = ue(w);
    if (V != null)
      return V;
    var G = f.get(V);
    return G === void 0 && !f.has(V) || !T(F, G, !1, D) ? !1 : !a.has(V) && T(F, G, !1, D);
  }
  function pe(a, f, w, F) {
    for (var D = null, V = N(a), G = 0; G < V.length; G++) {
      var X = V[G];
      if (y(X) === "object" && X !== null)
        D === null && (D = /* @__PURE__ */ new Set()), D.add(X);
      else if (!f.has(X)) {
        if (w || !te(a, f, X))
          return !1;
        D === null && (D = /* @__PURE__ */ new Set()), D.add(X);
      }
    }
    if (D !== null) {
      for (var H = N(f), fe = 0; fe < H.length; fe++) {
        var ce = H[fe];
        if (y(ce) === "object" && ce !== null) {
          if (!ae(D, ce, w, F))
            return !1;
        } else if (!w && !a.has(ce) && !ae(D, ce, w, F))
          return !1;
      }
      return D.size === 0;
    }
    return !0;
  }
  function ie(a, f, w, F, D, V) {
    for (var G = N(a), X = 0; X < G.length; X++) {
      var H = G[X];
      if (T(w, H, D, V) && T(F, f.get(H), D, V))
        return a.delete(H), !0;
    }
    return !1;
  }
  function le(a, f, w, F) {
    for (var D = null, V = U(a), G = 0; G < V.length; G++) {
      var X = t(V[G], 2), H = X[0], fe = X[1];
      if (y(H) === "object" && H !== null)
        D === null && (D = /* @__PURE__ */ new Set()), D.add(H);
      else {
        var ce = f.get(H);
        if (ce === void 0 && !f.has(H) || !T(fe, ce, w, F)) {
          if (w || !se(a, f, H, fe, F))
            return !1;
          D === null && (D = /* @__PURE__ */ new Set()), D.add(H);
        }
      }
    }
    if (D !== null) {
      for (var me = U(f), ge = 0; ge < me.length; ge++) {
        var ve = t(me[ge], 2), H = ve[0], he = ve[1];
        if (y(H) === "object" && H !== null) {
          if (!ie(D, a, H, he, w, F))
            return !1;
        } else if (!w && (!a.has(H) || !T(a.get(H), he, !1, F)) && !ie(D, a, H, he, !1, F))
          return !1;
      }
      return D.size === 0;
    }
    return !0;
  }
  function p(a, f, w, F, D, V) {
    var G = 0;
    if (V === e) {
      if (!pe(a, f, w, D))
        return !1;
    } else if (V === r) {
      if (!le(a, f, w, D))
        return !1;
    } else if (V === c)
      for (; G < a.length; G++)
        if ($(a, G)) {
          if (!$(f, G) || !T(a[G], f[G], w, D))
            return !1;
        } else {
          if ($(f, G))
            return !1;
          for (var X = Object.keys(a); G < X.length; G++) {
            var H = X[G];
            if (!$(f, H) || !T(a[H], f[H], w, D))
              return !1;
          }
          return X.length === Object.keys(f).length;
        }
    for (G = 0; G < F.length; G++) {
      var fe = F[G];
      if (!T(a[fe], f[fe], w, D))
        return !1;
    }
    return !0;
  }
  function ye(a, f) {
    return T(a, f, P);
  }
  function mr(a, f) {
    return T(a, f, S);
  }
  return ar = {
    isDeepEqual: ye,
    isDeepStrictEqual: mr
  }, ar;
}
var zr;
function yr() {
  if (zr)
    return qe.exports;
  zr = 1;
  function t(c) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(r) {
      return typeof r;
    } : t = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, t(c);
  }
  function n(c, e) {
    if (!(c instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var i = it(), u = i.codes, y = u.ERR_AMBIGUOUS_ARGUMENT, A = u.ERR_INVALID_ARG_TYPE, N = u.ERR_INVALID_ARG_VALUE, U = u.ERR_INVALID_RETURN_VALUE, j = u.ERR_MISSING_ARGS, W = sn(), I = be, C = I.inspect, $ = be.types, O = $.isPromise, _ = $.isRegExp, d = Object.assign ? Object.assign : ln().assign, b = Object.is ? Object.is : ct(), v, B;
  function x() {
    var c = mn();
    v = c.isDeepEqual, B = c.isDeepStrictEqual;
  }
  var ee = !1, R = qe.exports = oe, Q = {};
  function z(c) {
    throw c.message instanceof Error ? c.message : new W(c);
  }
  function M(c, e, r, o, l) {
    var s = arguments.length, E;
    if (s === 0)
      E = "Failed";
    else if (s === 1)
      r = c, c = void 0;
    else {
      if (ee === !1) {
        ee = !0;
        var q = process.emitWarning ? process.emitWarning : console.warn.bind(console);
        q("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      s === 2 && (o = "!=");
    }
    if (r instanceof Error)
      throw r;
    var T = {
      actual: c,
      expected: e,
      operator: o === void 0 ? "fail" : o,
      stackStartFn: l || M
    };
    r !== void 0 && (T.message = r);
    var L = new W(T);
    throw E && (L.message = E, L.generatedMessage = !0), L;
  }
  R.fail = M, R.AssertionError = W;
  function K(c, e, r, o) {
    if (!r) {
      var l = !1;
      if (e === 0)
        l = !0, o = "No value argument passed to `assert.ok()`";
      else if (o instanceof Error)
        throw o;
      var s = new W({
        actual: r,
        expected: !0,
        message: o,
        operator: "==",
        stackStartFn: c
      });
      throw s.generatedMessage = l, s;
    }
  }
  function oe() {
    for (var c = arguments.length, e = new Array(c), r = 0; r < c; r++)
      e[r] = arguments[r];
    K.apply(void 0, [oe, e.length].concat(e));
  }
  R.ok = oe, R.equal = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    e != r && z({
      actual: e,
      expected: r,
      message: o,
      operator: "==",
      stackStartFn: c
    });
  }, R.notEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    e == r && z({
      actual: e,
      expected: r,
      message: o,
      operator: "!=",
      stackStartFn: c
    });
  }, R.deepEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    v === void 0 && x(), v(e, r) || z({
      actual: e,
      expected: r,
      message: o,
      operator: "deepEqual",
      stackStartFn: c
    });
  }, R.notDeepEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    v === void 0 && x(), v(e, r) && z({
      actual: e,
      expected: r,
      message: o,
      operator: "notDeepEqual",
      stackStartFn: c
    });
  }, R.deepStrictEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    v === void 0 && x(), B(e, r) || z({
      actual: e,
      expected: r,
      message: o,
      operator: "deepStrictEqual",
      stackStartFn: c
    });
  }, R.notDeepStrictEqual = ne;
  function ne(c, e, r) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    v === void 0 && x(), B(c, e) && z({
      actual: c,
      expected: e,
      message: r,
      operator: "notDeepStrictEqual",
      stackStartFn: ne
    });
  }
  R.strictEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    b(e, r) || z({
      actual: e,
      expected: r,
      message: o,
      operator: "strictEqual",
      stackStartFn: c
    });
  }, R.notStrictEqual = function c(e, r, o) {
    if (arguments.length < 2)
      throw new j("actual", "expected");
    b(e, r) && z({
      actual: e,
      expected: r,
      message: o,
      operator: "notStrictEqual",
      stackStartFn: c
    });
  };
  var J = function c(e, r, o) {
    var l = this;
    n(this, c), r.forEach(function(s) {
      s in e && (o !== void 0 && typeof o[s] == "string" && _(e[s]) && e[s].test(o[s]) ? l[s] = o[s] : l[s] = e[s]);
    });
  };
  function Y(c, e, r, o, l, s) {
    if (!(r in c) || !B(c[r], e[r])) {
      if (!o) {
        var E = new J(c, l), q = new J(e, l, c), T = new W({
          actual: E,
          expected: q,
          operator: "deepStrictEqual",
          stackStartFn: s
        });
        throw T.actual = c, T.expected = e, T.operator = s.name, T;
      }
      z({
        actual: c,
        expected: e,
        message: o,
        operator: s.name,
        stackStartFn: s
      });
    }
  }
  function Z(c, e, r, o) {
    if (typeof e != "function") {
      if (_(e))
        return e.test(c);
      if (arguments.length === 2)
        throw new A("expected", ["Function", "RegExp"], e);
      if (t(c) !== "object" || c === null) {
        var l = new W({
          actual: c,
          expected: e,
          message: r,
          operator: "deepStrictEqual",
          stackStartFn: o
        });
        throw l.operator = o.name, l;
      }
      var s = Object.keys(e);
      if (e instanceof Error)
        s.push("name", "message");
      else if (s.length === 0)
        throw new N("error", e, "may not be an empty object");
      return v === void 0 && x(), s.forEach(function(E) {
        typeof c[E] == "string" && _(e[E]) && e[E].test(c[E]) || Y(c, e, E, r, s, o);
      }), !0;
    }
    return e.prototype !== void 0 && c instanceof e ? !0 : Error.isPrototypeOf(e) ? !1 : e.call({}, c) === !0;
  }
  function h(c) {
    if (typeof c != "function")
      throw new A("fn", "Function", c);
    try {
      c();
    } catch (e) {
      return e;
    }
    return Q;
  }
  function g(c) {
    return O(c) || c !== null && t(c) === "object" && typeof c.then == "function" && typeof c.catch == "function";
  }
  function m(c) {
    return Promise.resolve().then(function() {
      var e;
      if (typeof c == "function") {
        if (e = c(), !g(e))
          throw new U("instance of Promise", "promiseFn", e);
      } else if (g(c))
        e = c;
      else
        throw new A("promiseFn", ["Function", "Promise"], c);
      return Promise.resolve().then(function() {
        return e;
      }).then(function() {
        return Q;
      }).catch(function(r) {
        return r;
      });
    });
  }
  function S(c, e, r, o) {
    if (typeof r == "string") {
      if (arguments.length === 4)
        throw new A("error", ["Object", "Error", "Function", "RegExp"], r);
      if (t(e) === "object" && e !== null) {
        if (e.message === r)
          throw new y("error/message", 'The error message "'.concat(e.message, '" is identical to the message.'));
      } else if (e === r)
        throw new y("error/message", 'The error "'.concat(e, '" is identical to the message.'));
      o = r, r = void 0;
    } else if (r != null && t(r) !== "object" && typeof r != "function")
      throw new A("error", ["Object", "Error", "Function", "RegExp"], r);
    if (e === Q) {
      var l = "";
      r && r.name && (l += " (".concat(r.name, ")")), l += o ? ": ".concat(o) : ".";
      var s = c.name === "rejects" ? "rejection" : "exception";
      z({
        actual: void 0,
        expected: r,
        operator: c.name,
        message: "Missing expected ".concat(s).concat(l),
        stackStartFn: c
      });
    }
    if (r && !Z(e, r, o, c))
      throw e;
  }
  function P(c, e, r, o) {
    if (e !== Q) {
      if (typeof r == "string" && (o = r, r = void 0), !r || Z(e, r)) {
        var l = o ? ": ".concat(o) : ".", s = c.name === "doesNotReject" ? "rejection" : "exception";
        z({
          actual: e,
          expected: r,
          operator: c.name,
          message: "Got unwanted ".concat(s).concat(l, `
`) + 'Actual message: "'.concat(e && e.message, '"'),
          stackStartFn: c
        });
      }
      throw e;
    }
  }
  R.throws = function c(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      o[l - 1] = arguments[l];
    S.apply(void 0, [c, h(e)].concat(o));
  }, R.rejects = function c(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      o[l - 1] = arguments[l];
    return m(e).then(function(s) {
      return S.apply(void 0, [c, s].concat(o));
    });
  }, R.doesNotThrow = function c(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      o[l - 1] = arguments[l];
    P.apply(void 0, [c, h(e)].concat(o));
  }, R.doesNotReject = function c(e) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      o[l - 1] = arguments[l];
    return m(e).then(function(s) {
      return P.apply(void 0, [c, s].concat(o));
    });
  }, R.ifError = function c(e) {
    if (e != null) {
      var r = "ifError got unwanted exception: ";
      t(e) === "object" && typeof e.message == "string" ? e.message.length === 0 && e.constructor ? r += e.constructor.name : r += e.message : r += C(e);
      var o = new W({
        actual: e,
        expected: null,
        operator: "ifError",
        message: r,
        stackStartFn: c
      }), l = e.stack;
      if (typeof l == "string") {
        var s = l.split(`
`);
        s.shift();
        for (var E = o.stack.split(`
`), q = 0; q < s.length; q++) {
          var T = E.indexOf(s[q]);
          if (T !== -1) {
            E = E.slice(0, T);
            break;
          }
        }
        o.stack = "".concat(E.join(`
`), `
`).concat(s.join(`
`));
      }
      throw o;
    }
  };
  function k() {
    for (var c = arguments.length, e = new Array(c), r = 0; r < c; r++)
      e[r] = arguments[r];
    K.apply(void 0, [k, e.length].concat(e));
  }
  return R.strict = d(k, R, {
    equal: R.strictEqual,
    deepEqual: R.deepStrictEqual,
    notEqual: R.notStrictEqual,
    notDeepEqual: R.notDeepStrictEqual
  }), R.strict.strict = R.strict, qe.exports;
}
var vn = yr();
const Hr = /* @__PURE__ */ dt(vn), Sn = /^[a-zA-Z_0-9]$/, An = /^[a-zA-Z_0-9]+/, En = /^(SELECT|FROM|WHERE|AND)$/i, On = /^[*=:]$/, wn = /^['"`]$/, jn = /^(["'`])(.*?)\1/;
class pt {
  constructor() {
    Se(this, "pos", { line: 1, cursor: 0 });
    Se(this, "src", "");
    Se(this, "tokens", []);
  }
  static lex(n) {
    return new pt().lex(n);
  }
  lex(n) {
    this.src = n;
    let i = this.nextToken();
    for (; i; )
      this.tokens.push(i), i = this.nextToken();
    return this.tokens;
  }
  nextToken() {
    const n = this.pos.cursor, i = this.src, u = i[n];
    if (!(n >= i.length)) {
      if (u === `
`)
        return this.pos.line++, this.pos.cursor++, this.nextToken();
      if (u === " ") {
        const y = this.lastToken();
        return y && (y.whitespace = !0), this.pos.cursor++, this.nextToken();
      }
      if (Sn.test(u)) {
        const y = this.lastToken(), A = this.readIdentifier();
        return y && !y.whitespace && y.value === ":" ? this.createParameter(this.tokens.pop().value + A) : En.test(A) ? this.createKeyword(A) : this.createIdentifier(A);
      }
      if (On.test(u))
        return this.pos.cursor++, this.createDelimeter(u);
      if (wn.test(u)) {
        const y = this.readDelimitedIdentifier();
        return this.createIdentifier(y);
      }
      throw new Error(`Unexpected character: ${JSON.stringify(i[n])}`);
    }
  }
  lastToken() {
    return this.tokens.at(-1);
  }
  readIdentifier() {
    var u;
    const n = this.readCursor(), i = (u = An.exec(n)) == null ? void 0 : u[0];
    return Hr(i, `Unexpected identifier: ${JSON.stringify(n)}`), this.pos.cursor += i.length, i;
  }
  readDelimitedIdentifier() {
    var u;
    const n = this.readCursor(), i = (u = jn.exec(n)) == null ? void 0 : u[2];
    return Hr(i, `Unexpected string: ${JSON.stringify(n)}`), this.pos.cursor += i.length + 2, i;
  }
  readCursor() {
    return this.src.substring(this.pos.cursor);
  }
  createIdentifier(n) {
    return {
      type: "IDENTIFIER",
      value: n,
      whitespace: !1
    };
  }
  createKeyword(n) {
    return {
      type: "KEYWORD",
      value: n.toUpperCase(),
      whitespace: !1
    };
  }
  createDelimeter(n) {
    return {
      type: "DELIMETER",
      value: n,
      whitespace: !1
    };
  }
  createParameter(n) {
    return {
      type: "PARAMETER",
      value: n,
      whitespace: !1
    };
  }
}
export {
  pt as Lexer
};
