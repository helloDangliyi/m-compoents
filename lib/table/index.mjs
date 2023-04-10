import { defineComponent as ht, ref as Q, computed as ee, watch as _e, onMounted as Tt, resolveComponent as A, resolveDirective as mt, withDirectives as jt, openBlock as h, createBlock as D, mergeProps as At, unref as d, withCtx as O, createElementBlock as B, Fragment as te, renderList as wt, createVNode as I, createElementVNode as St, withModifiers as he, renderSlot as K, toDisplayString as Ct, resolveDynamicComponent as Ot, createCommentVNode as It } from "vue";
const xt = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
var R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pt() {
  this.__data__ = [], this.size = 0;
}
var Et = Pt;
function Lt(e, t) {
  return e === t || e !== e && t !== t;
}
var qe = Lt, kt = qe;
function Mt(e, t) {
  for (var r = e.length; r--; )
    if (kt(e[r][0], t))
      return r;
  return -1;
}
var q = Mt, Dt = q, Bt = Array.prototype, Ft = Bt.splice;
function Gt(e) {
  var t = this.__data__, r = Dt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Ft.call(t, r, 1), --this.size, !0;
}
var Ut = Gt, Nt = q;
function Vt(e) {
  var t = this.__data__, r = Nt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Kt = Vt, Rt = q;
function Ht(e) {
  return Rt(this.__data__, e) > -1;
}
var zt = Ht, qt = q;
function Wt(e, t) {
  var r = this.__data__, a = qt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Jt = Wt, Yt = Et, Xt = Ut, Zt = Kt, Qt = zt, er = Jt;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Yt;
P.prototype.delete = Xt;
P.prototype.get = Zt;
P.prototype.has = Qt;
P.prototype.set = er;
var W = P, tr = W;
function rr() {
  this.__data__ = new tr(), this.size = 0;
}
var ar = rr;
function nr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var or = nr;
function ir(e) {
  return this.__data__.get(e);
}
var sr = ir;
function cr(e) {
  return this.__data__.has(e);
}
var lr = cr, ur = typeof R == "object" && R && R.Object === Object && R, We = ur, vr = We, fr = typeof self == "object" && self && self.Object === Object && self, pr = vr || fr || Function("return this")(), T = pr, gr = T, dr = gr.Symbol, ce = dr, Te = ce, Je = Object.prototype, yr = Je.hasOwnProperty, br = Je.toString, F = Te ? Te.toStringTag : void 0;
function $r(e) {
  var t = yr.call(e, F), r = e[F];
  try {
    e[F] = void 0;
    var a = !0;
  } catch {
  }
  var n = br.call(e);
  return a && (t ? e[F] = r : delete e[F]), n;
}
var _r = $r, hr = Object.prototype, Tr = hr.toString;
function mr(e) {
  return Tr.call(e);
}
var jr = mr, me = ce, Ar = _r, wr = jr, Sr = "[object Null]", Cr = "[object Undefined]", je = me ? me.toStringTag : void 0;
function Or(e) {
  return e == null ? e === void 0 ? Cr : Sr : je && je in Object(e) ? Ar(e) : wr(e);
}
var J = Or;
function Ir(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var U = Ir, xr = J, Pr = U, Er = "[object AsyncFunction]", Lr = "[object Function]", kr = "[object GeneratorFunction]", Mr = "[object Proxy]";
function Dr(e) {
  if (!Pr(e))
    return !1;
  var t = xr(e);
  return t == Lr || t == kr || t == Er || t == Mr;
}
var Ye = Dr, Br = T, Fr = Br["__core-js_shared__"], Gr = Fr, re = Gr, Ae = function() {
  var e = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ur(e) {
  return !!Ae && Ae in e;
}
var Nr = Ur, Vr = Function.prototype, Kr = Vr.toString;
function Rr(e) {
  if (e != null) {
    try {
      return Kr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xe = Rr, Hr = Ye, zr = Nr, qr = U, Wr = Xe, Jr = /[\\^$.*+?()[\]{}|]/g, Yr = /^\[object .+?Constructor\]$/, Xr = Function.prototype, Zr = Object.prototype, Qr = Xr.toString, ea = Zr.hasOwnProperty, ta = RegExp(
  "^" + Qr.call(ea).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ra(e) {
  if (!qr(e) || zr(e))
    return !1;
  var t = Hr(e) ? ta : Yr;
  return t.test(Wr(e));
}
var aa = ra;
function na(e, t) {
  return e == null ? void 0 : e[t];
}
var oa = na, ia = aa, sa = oa;
function ca(e, t) {
  var r = sa(e, t);
  return ia(r) ? r : void 0;
}
var S = ca, la = S, ua = T, va = la(ua, "Map"), le = va, fa = S, pa = fa(Object, "create"), Y = pa, we = Y;
function ga() {
  this.__data__ = we ? we(null) : {}, this.size = 0;
}
var da = ga;
function ya(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ba = ya, $a = Y, _a = "__lodash_hash_undefined__", ha = Object.prototype, Ta = ha.hasOwnProperty;
function ma(e) {
  var t = this.__data__;
  if ($a) {
    var r = t[e];
    return r === _a ? void 0 : r;
  }
  return Ta.call(t, e) ? t[e] : void 0;
}
var ja = ma, Aa = Y, wa = Object.prototype, Sa = wa.hasOwnProperty;
function Ca(e) {
  var t = this.__data__;
  return Aa ? t[e] !== void 0 : Sa.call(t, e);
}
var Oa = Ca, Ia = Y, xa = "__lodash_hash_undefined__";
function Pa(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ia && t === void 0 ? xa : t, this;
}
var Ea = Pa, La = da, ka = ba, Ma = ja, Da = Oa, Ba = Ea;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = La;
E.prototype.delete = ka;
E.prototype.get = Ma;
E.prototype.has = Da;
E.prototype.set = Ba;
var Fa = E, Se = Fa, Ga = W, Ua = le;
function Na() {
  this.size = 0, this.__data__ = {
    hash: new Se(),
    map: new (Ua || Ga)(),
    string: new Se()
  };
}
var Va = Na;
function Ka(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ra = Ka, Ha = Ra;
function za(e, t) {
  var r = e.__data__;
  return Ha(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var X = za, qa = X;
function Wa(e) {
  var t = qa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ja = Wa, Ya = X;
function Xa(e) {
  return Ya(this, e).get(e);
}
var Za = Xa, Qa = X;
function en(e) {
  return Qa(this, e).has(e);
}
var tn = en, rn = X;
function an(e, t) {
  var r = rn(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var nn = an, on = Va, sn = Ja, cn = Za, ln = tn, un = nn;
function L(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
L.prototype.clear = on;
L.prototype.delete = sn;
L.prototype.get = cn;
L.prototype.has = ln;
L.prototype.set = un;
var vn = L, fn = W, pn = le, gn = vn, dn = 200;
function yn(e, t) {
  var r = this.__data__;
  if (r instanceof fn) {
    var a = r.__data__;
    if (!pn || a.length < dn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new gn(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var bn = yn, $n = W, _n = ar, hn = or, Tn = sr, mn = lr, jn = bn;
function k(e) {
  var t = this.__data__ = new $n(e);
  this.size = t.size;
}
k.prototype.clear = _n;
k.prototype.delete = hn;
k.prototype.get = Tn;
k.prototype.has = mn;
k.prototype.set = jn;
var An = k;
function wn(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Sn = wn, Cn = S, On = function() {
  try {
    var e = Cn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), In = On, Ce = In;
function xn(e, t, r) {
  t == "__proto__" && Ce ? Ce(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Ze = xn, Pn = Ze, En = qe, Ln = Object.prototype, kn = Ln.hasOwnProperty;
function Mn(e, t, r) {
  var a = e[t];
  (!(kn.call(e, t) && En(a, r)) || r === void 0 && !(t in e)) && Pn(e, t, r);
}
var Qe = Mn, Dn = Qe, Bn = Ze;
function Fn(e, t, r, a) {
  var n = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], f = a ? a(r[c], e[c], c, r, e) : void 0;
    f === void 0 && (f = e[c]), n ? Bn(r, c, f) : Dn(r, c, f);
  }
  return r;
}
var Z = Fn;
function Gn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Un = Gn;
function Nn(e) {
  return e != null && typeof e == "object";
}
var N = Nn, Vn = J, Kn = N, Rn = "[object Arguments]";
function Hn(e) {
  return Kn(e) && Vn(e) == Rn;
}
var zn = Hn, Oe = zn, qn = N, et = Object.prototype, Wn = et.hasOwnProperty, Jn = et.propertyIsEnumerable, Yn = Oe(function() {
  return arguments;
}()) ? Oe : function(e) {
  return qn(e) && Wn.call(e, "callee") && !Jn.call(e, "callee");
}, Xn = Yn, Zn = Array.isArray, ue = Zn, G = {}, Qn = {
  get exports() {
    return G;
  },
  set exports(e) {
    G = e;
  }
};
function eo() {
  return !1;
}
var to = eo;
(function(e, t) {
  var r = T, a = to, n = t && !t.nodeType && t, s = n && !0 && e && !e.nodeType && e, o = s && s.exports === n, c = o ? r.Buffer : void 0, f = c ? c.isBuffer : void 0, v = f || a;
  e.exports = v;
})(Qn, G);
var ro = 9007199254740991, ao = /^(?:0|[1-9]\d*)$/;
function no(e, t) {
  var r = typeof e;
  return t = t ?? ro, !!t && (r == "number" || r != "symbol" && ao.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var oo = no, io = 9007199254740991;
function so(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= io;
}
var tt = so, co = J, lo = tt, uo = N, vo = "[object Arguments]", fo = "[object Array]", po = "[object Boolean]", go = "[object Date]", yo = "[object Error]", bo = "[object Function]", $o = "[object Map]", _o = "[object Number]", ho = "[object Object]", To = "[object RegExp]", mo = "[object Set]", jo = "[object String]", Ao = "[object WeakMap]", wo = "[object ArrayBuffer]", So = "[object DataView]", Co = "[object Float32Array]", Oo = "[object Float64Array]", Io = "[object Int8Array]", xo = "[object Int16Array]", Po = "[object Int32Array]", Eo = "[object Uint8Array]", Lo = "[object Uint8ClampedArray]", ko = "[object Uint16Array]", Mo = "[object Uint32Array]", u = {};
u[Co] = u[Oo] = u[Io] = u[xo] = u[Po] = u[Eo] = u[Lo] = u[ko] = u[Mo] = !0;
u[vo] = u[fo] = u[wo] = u[po] = u[So] = u[go] = u[yo] = u[bo] = u[$o] = u[_o] = u[ho] = u[To] = u[mo] = u[jo] = u[Ao] = !1;
function Do(e) {
  return uo(e) && lo(e.length) && !!u[co(e)];
}
var Bo = Do;
function Fo(e) {
  return function(t) {
    return e(t);
  };
}
var ve = Fo, x = {}, Go = {
  get exports() {
    return x;
  },
  set exports(e) {
    x = e;
  }
};
(function(e, t) {
  var r = We, a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s && r.process, c = function() {
    try {
      var f = n && n.require && n.require("util").types;
      return f || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Go, x);
var Uo = Bo, No = ve, Ie = x, xe = Ie && Ie.isTypedArray, Vo = xe ? No(xe) : Uo, Ko = Vo, Ro = Un, Ho = Xn, zo = ue, qo = G, Wo = oo, Jo = Ko, Yo = Object.prototype, Xo = Yo.hasOwnProperty;
function Zo(e, t) {
  var r = zo(e), a = !r && Ho(e), n = !r && !a && qo(e), s = !r && !a && !n && Jo(e), o = r || a || n || s, c = o ? Ro(e.length, String) : [], f = c.length;
  for (var v in e)
    (t || Xo.call(e, v)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    Wo(v, f))) && c.push(v);
  return c;
}
var rt = Zo, Qo = Object.prototype;
function ei(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Qo;
  return e === r;
}
var fe = ei;
function ti(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var at = ti, ri = at, ai = ri(Object.keys, Object), ni = ai, oi = fe, ii = ni, si = Object.prototype, ci = si.hasOwnProperty;
function li(e) {
  if (!oi(e))
    return ii(e);
  var t = [];
  for (var r in Object(e))
    ci.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ui = li, vi = Ye, fi = tt;
function pi(e) {
  return e != null && fi(e.length) && !vi(e);
}
var nt = pi, gi = rt, di = ui, yi = nt;
function bi(e) {
  return yi(e) ? gi(e) : di(e);
}
var pe = bi, $i = Z, _i = pe;
function hi(e, t) {
  return e && $i(t, _i(t), e);
}
var Ti = hi;
function mi(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ji = mi, Ai = U, wi = fe, Si = ji, Ci = Object.prototype, Oi = Ci.hasOwnProperty;
function Ii(e) {
  if (!Ai(e))
    return Si(e);
  var t = wi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Oi.call(e, a)) || r.push(a);
  return r;
}
var xi = Ii, Pi = rt, Ei = xi, Li = nt;
function ki(e) {
  return Li(e) ? Pi(e, !0) : Ei(e);
}
var ge = ki, Mi = Z, Di = ge;
function Bi(e, t) {
  return e && Mi(t, Di(t), e);
}
var Fi = Bi, z = {}, Gi = {
  get exports() {
    return z;
  },
  set exports(e) {
    z = e;
  }
};
(function(e, t) {
  var r = T, a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function f(v, C) {
    if (C)
      return v.slice();
    var _ = v.length, m = c ? c(_) : new v.constructor(_);
    return v.copy(m), m;
  }
  e.exports = f;
})(Gi, z);
function Ui(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Ni = Ui;
function Vi(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = 0, s = []; ++r < a; ) {
    var o = e[r];
    t(o, r, e) && (s[n++] = o);
  }
  return s;
}
var Ki = Vi;
function Ri() {
  return [];
}
var ot = Ri, Hi = Ki, zi = ot, qi = Object.prototype, Wi = qi.propertyIsEnumerable, Pe = Object.getOwnPropertySymbols, Ji = Pe ? function(e) {
  return e == null ? [] : (e = Object(e), Hi(Pe(e), function(t) {
    return Wi.call(e, t);
  }));
} : zi, de = Ji, Yi = Z, Xi = de;
function Zi(e, t) {
  return Yi(e, Xi(e), t);
}
var Qi = Zi;
function es(e, t) {
  for (var r = -1, a = t.length, n = e.length; ++r < a; )
    e[n + r] = t[r];
  return e;
}
var it = es, ts = at, rs = ts(Object.getPrototypeOf, Object), st = rs, as = it, ns = st, os = de, is = ot, ss = Object.getOwnPropertySymbols, cs = ss ? function(e) {
  for (var t = []; e; )
    as(t, os(e)), e = ns(e);
  return t;
} : is, ct = cs, ls = Z, us = ct;
function vs(e, t) {
  return ls(e, us(e), t);
}
var fs = vs, ps = it, gs = ue;
function ds(e, t, r) {
  var a = t(e);
  return gs(e) ? a : ps(a, r(e));
}
var lt = ds, ys = lt, bs = de, $s = pe;
function _s(e) {
  return ys(e, $s, bs);
}
var hs = _s, Ts = lt, ms = ct, js = ge;
function As(e) {
  return Ts(e, js, ms);
}
var ws = As, Ss = S, Cs = T, Os = Ss(Cs, "DataView"), Is = Os, xs = S, Ps = T, Es = xs(Ps, "Promise"), Ls = Es, ks = S, Ms = T, Ds = ks(Ms, "Set"), Bs = Ds, Fs = S, Gs = T, Us = Fs(Gs, "WeakMap"), Ns = Us, ae = Is, ne = le, oe = Ls, ie = Bs, se = Ns, ut = J, M = Xe, Ee = "[object Map]", Vs = "[object Object]", Le = "[object Promise]", ke = "[object Set]", Me = "[object WeakMap]", De = "[object DataView]", Ks = M(ae), Rs = M(ne), Hs = M(oe), zs = M(ie), qs = M(se), w = ut;
(ae && w(new ae(new ArrayBuffer(1))) != De || ne && w(new ne()) != Ee || oe && w(oe.resolve()) != Le || ie && w(new ie()) != ke || se && w(new se()) != Me) && (w = function(e) {
  var t = ut(e), r = t == Vs ? e.constructor : void 0, a = r ? M(r) : "";
  if (a)
    switch (a) {
      case Ks:
        return De;
      case Rs:
        return Ee;
      case Hs:
        return Le;
      case zs:
        return ke;
      case qs:
        return Me;
    }
  return t;
});
var ye = w, Ws = Object.prototype, Js = Ws.hasOwnProperty;
function Ys(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Js.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Xs = Ys, Zs = T, Qs = Zs.Uint8Array, ec = Qs, Be = ec;
function tc(e) {
  var t = new e.constructor(e.byteLength);
  return new Be(t).set(new Be(e)), t;
}
var be = tc, rc = be;
function ac(e, t) {
  var r = t ? rc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var nc = ac, oc = /\w*$/;
function ic(e) {
  var t = new e.constructor(e.source, oc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var sc = ic, Fe = ce, Ge = Fe ? Fe.prototype : void 0, Ue = Ge ? Ge.valueOf : void 0;
function cc(e) {
  return Ue ? Object(Ue.call(e)) : {};
}
var lc = cc, uc = be;
function vc(e, t) {
  var r = t ? uc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var fc = vc, pc = be, gc = nc, dc = sc, yc = lc, bc = fc, $c = "[object Boolean]", _c = "[object Date]", hc = "[object Map]", Tc = "[object Number]", mc = "[object RegExp]", jc = "[object Set]", Ac = "[object String]", wc = "[object Symbol]", Sc = "[object ArrayBuffer]", Cc = "[object DataView]", Oc = "[object Float32Array]", Ic = "[object Float64Array]", xc = "[object Int8Array]", Pc = "[object Int16Array]", Ec = "[object Int32Array]", Lc = "[object Uint8Array]", kc = "[object Uint8ClampedArray]", Mc = "[object Uint16Array]", Dc = "[object Uint32Array]";
function Bc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Sc:
      return pc(e);
    case $c:
    case _c:
      return new a(+e);
    case Cc:
      return gc(e, r);
    case Oc:
    case Ic:
    case xc:
    case Pc:
    case Ec:
    case Lc:
    case kc:
    case Mc:
    case Dc:
      return bc(e, r);
    case hc:
      return new a();
    case Tc:
    case Ac:
      return new a(e);
    case mc:
      return dc(e);
    case jc:
      return new a();
    case wc:
      return yc(e);
  }
}
var Fc = Bc, Gc = U, Ne = Object.create, Uc = function() {
  function e() {
  }
  return function(t) {
    if (!Gc(t))
      return {};
    if (Ne)
      return Ne(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Nc = Uc, Vc = Nc, Kc = st, Rc = fe;
function Hc(e) {
  return typeof e.constructor == "function" && !Rc(e) ? Vc(Kc(e)) : {};
}
var zc = Hc, qc = ye, Wc = N, Jc = "[object Map]";
function Yc(e) {
  return Wc(e) && qc(e) == Jc;
}
var Xc = Yc, Zc = Xc, Qc = ve, Ve = x, Ke = Ve && Ve.isMap, el = Ke ? Qc(Ke) : Zc, tl = el, rl = ye, al = N, nl = "[object Set]";
function ol(e) {
  return al(e) && rl(e) == nl;
}
var il = ol, sl = il, cl = ve, Re = x, He = Re && Re.isSet, ll = He ? cl(He) : sl, ul = ll, vl = An, fl = Sn, pl = Qe, gl = Ti, dl = Fi, yl = z, bl = Ni, $l = Qi, _l = fs, hl = hs, Tl = ws, ml = ye, jl = Xs, Al = Fc, wl = zc, Sl = ue, Cl = G, Ol = tl, Il = U, xl = ul, Pl = pe, El = ge, Ll = 1, kl = 2, Ml = 4, vt = "[object Arguments]", Dl = "[object Array]", Bl = "[object Boolean]", Fl = "[object Date]", Gl = "[object Error]", ft = "[object Function]", Ul = "[object GeneratorFunction]", Nl = "[object Map]", Vl = "[object Number]", pt = "[object Object]", Kl = "[object RegExp]", Rl = "[object Set]", Hl = "[object String]", zl = "[object Symbol]", ql = "[object WeakMap]", Wl = "[object ArrayBuffer]", Jl = "[object DataView]", Yl = "[object Float32Array]", Xl = "[object Float64Array]", Zl = "[object Int8Array]", Ql = "[object Int16Array]", eu = "[object Int32Array]", tu = "[object Uint8Array]", ru = "[object Uint8ClampedArray]", au = "[object Uint16Array]", nu = "[object Uint32Array]", l = {};
l[vt] = l[Dl] = l[Wl] = l[Jl] = l[Bl] = l[Fl] = l[Yl] = l[Xl] = l[Zl] = l[Ql] = l[eu] = l[Nl] = l[Vl] = l[pt] = l[Kl] = l[Rl] = l[Hl] = l[zl] = l[tu] = l[ru] = l[au] = l[nu] = !0;
l[Gl] = l[ft] = l[ql] = !1;
function H(e, t, r, a, n, s) {
  var o, c = t & Ll, f = t & kl, v = t & Ml;
  if (r && (o = n ? r(e, a, n, s) : r(e)), o !== void 0)
    return o;
  if (!Il(e))
    return e;
  var C = Sl(e);
  if (C) {
    if (o = jl(e), !c)
      return bl(e, o);
  } else {
    var _ = ml(e), m = _ == ft || _ == Ul;
    if (Cl(e))
      return yl(e, c);
    if (_ == pt || _ == vt || m && !n) {
      if (o = f || m ? {} : wl(e), !c)
        return f ? _l(e, dl(o, e)) : $l(e, gl(o, e));
    } else {
      if (!l[_])
        return n ? e : {};
      o = Al(e, _, c);
    }
  }
  s || (s = new vl());
  var V = s.get(e);
  if (V)
    return V;
  s.set(e, o), xl(e) ? e.forEach(function(g) {
    o.add(H(g, t, r, g, e, s));
  }) : Ol(e) && e.forEach(function(g, b) {
    o.set(b, H(g, t, r, b, e, s));
  });
  var i = v ? f ? Tl : hl : f ? El : Pl, y = C ? void 0 : i(e);
  return fl(y || e, function(g, b) {
    y && (b = g, g = e[b]), pl(o, b, H(g, t, r, b, e, s));
  }), o;
}
var ou = H, iu = ou, su = 1, cu = 4;
function lu(e) {
  return iu(e, su | cu);
}
var ze = lu;
const uu = {
  key: 1,
  class: "icons"
}, vu = { key: 1 }, fu = /* @__PURE__ */ ht({
  __name: "index",
  props: {
    options: {
      type: Array,
      require: !0
    },
    //表格数据
    data: {
      type: Array,
      require: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String
    },
    // 加载背景色
    elementLoadingBackground: {
      type: String
    },
    // 加载SVG
    elementLoadingSvg: {
      type: String
    },
    // 加载SVG的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 可编辑单元格显示的图标
    editIcon: {
      type: String,
      default: "edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 编辑行按钮的标识
    editRowIndex: {
      type: String,
      default: ""
    }
  },
  emits: ["comfirm", "cancel", "update:editRowIndex"],
  setup(e, { emit: t }) {
    const r = e;
    let a = Q(""), n = Q(ze(r.data)), s = Q(r.editRowIndex), o = ee(() => {
      var i;
      return (i = r.options) == null ? void 0 : i.filter((y) => !y.action);
    }), c = ee(() => {
      var i;
      return (i = r.options) == null ? void 0 : i.find((y) => y.action);
    }), f = ee(() => !r.data || !r.data.length), v = (i) => {
      a.value = i.$index + i.column.id;
    }, C = (i) => {
      t("comfirm", i);
    }, _ = (i) => {
      t("cancel", i);
    }, m = () => {
      a.value = "";
    }, V = (i, y) => {
      var g;
      y.label === ((g = c.value) == null ? void 0 : g.label) && r.isEditRow && s.value === r.editRowIndex && (i.rowEidt = !i.rowEidt, n.value.map((b) => {
        b !== i && (b.rowEidt = !1);
      }), i.rowEidt || t("update:editRowIndex", ""));
    };
    return _e(() => r.data, (i) => {
      n.value = ze(i), n.value.map((y) => {
        y.rowEidt = !1;
      });
    }, { deep: !0 }), _e(() => r.editRowIndex, (i) => {
      i && (s.value = i);
    }), Tt(() => {
      n.value.map((i) => {
        i.rowEidt = !1;
      });
    }), (i, y) => {
      const g = A("el-input"), b = A("el-col"), gt = A("el-icon-check"), dt = A("el-icon-close"), yt = A("el-row"), $e = A("el-table-column"), bt = A("el-table"), $t = mt("loading");
      return jt((h(), D(bt, At(i.$attrs, {
        data: d(n),
        "element-loading-text": e.elementLoadingText,
        "element-loading-spinner": e.elementLoadingSpinner,
        "element-loading-background": e.elementLoadingBackground,
        "element-loading-svg": e.elementLoadingSvg,
        "element-loading-svg-view-box": e.elementLoadingSvgViewBox,
        onRowClick: d(V)
      }), {
        default: O(() => [
          (h(!0), B(te, null, wt(d(o), (p, _t) => (h(), D($e, {
            key: _t,
            prop: p.prop,
            label: p.label,
            width: p.width
          }, {
            default: O(($) => [
              $.row.rowEidt ? (h(), D(g, {
                key: 0,
                modelValue: $.row[p.prop],
                "onUpdate:modelValue": (j) => $.row[p.prop] = j
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (h(), B(te, { key: 1 }, [
                $.$index + $.column.id === d(a) ? (h(), D(yt, { key: 0 }, {
                  default: O(() => [
                    I(b, { span: 13 }, {
                      default: O(() => [
                        I(g, {
                          modelValue: $.row[p.prop],
                          "onUpdate:modelValue": (j) => $.row[p.prop] = j
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    I(b, { span: 11 }, {
                      default: O(() => [
                        St("div", {
                          onClick: y[0] || (y[0] = he(
                            //@ts-ignore
                            (...j) => d(m) && d(m)(...j),
                            ["stop"]
                          ))
                        }, [
                          i.$slots.editCell ? K(i.$slots, "editCell", {
                            key: 0,
                            scope: $
                          }, void 0, !0) : (h(), B("div", uu, [
                            I(gt, {
                              color: "green",
                              class: "check",
                              onClick: (j) => d(C)($)
                            }, null, 8, ["onClick"]),
                            I(dt, {
                              color: "red",
                              class: "close",
                              onClick: (j) => d(_)($)
                            }, null, 8, ["onClick"])
                          ]))
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)) : (h(), B(te, { key: 1 }, [
                  p.slot ? K(i.$slots, p.slot, {
                    key: 0,
                    scope: $
                  }, void 0, !0) : (h(), B("span", vu, Ct($.row[p.prop]), 1)),
                  p.editTable ? (h(), D(Ot(`el-icon-${d(xt)(e.editIcon)}`), {
                    key: 2,
                    onClick: he((j) => d(v)($), ["stop"]),
                    class: "edit"
                  }, null, 8, ["onClick"])) : It("", !0)
                ], 64))
              ], 64))
            ]),
            _: 2
          }, 1032, ["prop", "label", "width"]))), 128)),
          I($e, {
            label: d(c).label,
            align: d(c).align,
            width: d(c).width
          }, {
            default: O((p) => [
              p.row.rowEidt ? K(i.$slots, "editRow", {
                key: 0,
                scope: p
              }, void 0, !0) : K(i.$slots, "action", {
                key: 1,
                scope: p
              }, void 0, !0)
            ]),
            _: 3
          }, 8, ["label", "align", "width"])
        ]),
        _: 3
      }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-view-box", "onRowClick"])), [
        [$t, d(f)]
      ]);
    };
  }
});
const pu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, n] of t)
    r[a] = n;
  return r;
}, gu = /* @__PURE__ */ pu(fu, [["__scopeId", "data-v-f0cea8d7"]]), yu = {
  install(e) {
    e.component("m-table", gu);
  }
};
export {
  yu as default
};
