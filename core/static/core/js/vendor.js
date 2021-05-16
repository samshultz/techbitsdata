/*


 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ██╗ █████╗ ██╗   ██╗████████╗██╗ ██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗████╗  ██║██╔══██╗██║   ██║╚══██╔══╝██║██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██╔██╗ ██║███████║██║   ██║   ██║   ██║██║
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║   ██║   ██║   ██║██║
╚██████╗   ██║   ██████╔╝███████╗██║  ██║██║ ╚████║██║  ██║╚██████╔╝   ██║   ██║╚██████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝

compiled by minify v1.3.60 on Wed, 17 Mar 2021 09:41:07 -0500 (1.4245s)

*/

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.4.1",
        k = function(e, t) { return new k.fn.init(e, t) },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return k.each(this, e) },
        map: function(n) { return this.pushStack(k.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t) { b(e, { nonce: t && t.nonce }) },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(p, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[k] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break } i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        N = k.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? k.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) } k.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) { return 1 === e.nodeType })) }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };

    function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), k.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T(e, "parentNode") }, parentsUntil: function(e, t, n) { return T(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return T(e, "nextSibling") }, prevAll: function(e) { return T(e, "previousSibling") }, nextUntil: function(e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T(e, "previousSibling", n) }, siblings: function(e) { return S((e.parentNode || {}).firstChild, e) }, children: function(e) { return S(e.firstChild) }, contents: function(e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function(r, i) { k.fn[r] = function(e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function I(e) { throw e }

    function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) { n[t] = !0 }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return k.each(arguments, function(e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise()
                    },
                    promise: function(e) { return null != e ? k.extend(e, a) : a }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = k.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() } k.fn.ready = function(e) { return F.then(e)["catch"](function(e) { k.readyException(e) }), this }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(k(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function V(e) { return e.replace(z, "ms-").replace(U, X) }
    var G = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function Y() { this.expando = k.expando + Y.uid++ } Y.uid = 1, Y.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) {} J.set(e, t, n) } else n = void 0;
        return n
    }
    k.extend({ hasData: function(e) { return J.hasData(e) || Q.hasData(e) }, data: function(e, t, n) { return J.access(e, t, n) }, removeData: function(e, t) { J.remove(e, t) }, _data: function(e, t, n) { return Q.access(e, t, n) }, _removeData: function(e, t) { Q.remove(e, t) } }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { J.set(this, n) }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() { J.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { J.remove(this, e) }) }
    }), k.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { k.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function() { Q.remove(e, [t + "queue", n]) }) }) }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { k.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) { return k.contains(e.ownerDocument, e) },
        ae = { composed: !0 };
    ie.getRootNode && (oe = function(e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument });
    var se = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") },
        ue = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return k.css(e, t, "") },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e } k.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { se(this) ? k(this).show() : k(this).hide() }) } });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) } ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() { return !0 }

    function Se() { return !1 }

    function Ne(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function() { k.event.add(this, t, i, r, n) })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[k.expando] ? e : new k.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, k.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function(e, t) { k.event.special[e] = { setup: function() { return De(this, e, Ne), !1 }, trigger: function() { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({ on: function(e, t, n, r) { return Ae(this, e, t, n, r) }, one: function(e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() { k.event.remove(this, e, n, t) }) } });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e }

    function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } k.extend({
        htmlPrefilter: function(e) { return e.replace(je, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) { return We(this, e, !0) },
        remove: function(e) { return We(this, e) },
        text: function(e) { return _(this, function(e) { return void 0 === e ? k.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Ie(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return k.clone(this, e, t) }) },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { k.fn[e] = function(e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), i } }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };

    function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) } k.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() { return tt(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function(i, o) { k.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r); return o }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = { constructor: nt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function() { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function(e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) }

    function ct() { return C.setTimeout(function() { rt = void 0 }), rt = Date.now() }

    function ft(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) }
    }), k.speed = function(e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) }
    }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { k.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function() { it || (it = !0, lt()) }, k.fx.stop = function() { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({ attr: function(e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { k.removeAttr(this, e) }) } }), k.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = { set: function(e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(R) || []).join(" ") }

    function xt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] } k.fn.extend({ prop: function(e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { k.propFix[this.toLowerCase()] = this }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).addClass(t.call(this, e, xt(this))) });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).removeClass(t.call(this, e, xt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: { get: function(e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() { k.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) { e.stopPropagation() };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({ trigger: function(e, t) { return this.each(function() { k.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { k.event.simulate(r, e.target, k.event.fix(e)) };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({ serialize: function() { return k.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function(e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e } Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return k.get(e, t, n, "json") },
        getScript: function(e, t) { return k.get(e, void 0, t, "script") }
    }), k.each(["get", "post"], function(e, i) { k[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function(e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { k.globalEval(e, t) } }) }, k.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { k(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { k(this).replaceWith(this.childNodes) }), this }
    }), k.expr.pseudos.hidden = function(e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var Ut = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), k.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { k.fn[t] = function(e) { return this.on(t, e) } }), k.expr.pseudos.animated = function(t) { return k.grep(k.timers, function(e) { return t === e.elem }).length }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) }
    }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) { k.cssHooks[n] = ze(y.pixelPosition, function(e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function(a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { k.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function(e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return k });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k
});
/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 23-11-2015
 */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], function(b) { return a(b) }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = a(require("jquery")) : a(window.jQuery) }(function(a) {
    "use strict";

    function b(a) {
        void 0 === a && (a = window.navigator.userAgent), a = a.toLowerCase();
        var b = /(edge)\/([\w.]+)/.exec(a) || /(opr)[\/]([\w.]+)/.exec(a) || /(chrome)[ \/]([\w.]+)/.exec(a) || /(iemobile)[\/]([\w.]+)/.exec(a) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [],
            c = /(ipad)/.exec(a) || /(ipod)/.exec(a) || /(windows phone)/.exec(a) || /(iphone)/.exec(a) || /(kindle)/.exec(a) || /(silk)/.exec(a) || /(android)/.exec(a) || /(win)/.exec(a) || /(mac)/.exec(a) || /(linux)/.exec(a) || /(cros)/.exec(a) || /(playbook)/.exec(a) || /(bb)/.exec(a) || /(blackberry)/.exec(a) || [],
            d = {},
            e = { browser: b[5] || b[3] || b[1] || "", version: b[2] || b[4] || "0", versionNumber: b[4] || b[2] || "0", platform: c[0] || "" };
        if (e.browser && (d[e.browser] = !0, d.version = e.version, d.versionNumber = parseInt(e.versionNumber, 10)), e.platform && (d[e.platform] = !0), (d.android || d.bb || d.blackberry || d.ipad || d.iphone || d.ipod || d.kindle || d.playbook || d.silk || d["windows phone"]) && (d.mobile = !0), (d.cros || d.mac || d.linux || d.win) && (d.desktop = !0), (d.chrome || d.opr || d.safari) && (d.webkit = !0), d.rv || d.iemobile) {
            var f = "msie";
            e.browser = f, d[f] = !0
        }
        if (d.edge) {
            delete d.edge;
            var g = "msedge";
            e.browser = g, d[g] = !0
        }
        if (d.safari && d.blackberry) {
            var h = "blackberry";
            e.browser = h, d[h] = !0
        }
        if (d.safari && d.playbook) {
            var i = "playbook";
            e.browser = i, d[i] = !0
        }
        if (d.bb) {
            var j = "blackberry";
            e.browser = j, d[j] = !0
        }
        if (d.opr) {
            var k = "opera";
            e.browser = k, d[k] = !0
        }
        if (d.safari && d.android) {
            var l = "android";
            e.browser = l, d[l] = !0
        }
        if (d.safari && d.kindle) {
            var m = "kindle";
            e.browser = m, d[m] = !0
        }
        if (d.safari && d.silk) {
            var n = "silk";
            e.browser = n, d[n] = !0
        }
        return d.name = e.browser, d.platform = e.platform, d
    }
    return window.jQBrowser = b(window.navigator.userAgent), window.jQBrowser.uaMatch = b, a && (a.browser = window.jQBrowser), window.jQBrowser
});
(function($) {
    $.fn.size = function() {
        return this.each(function() {
            var $this = $(this);
            $this.length
        })
    }
})(jQuery);
(function() {
    'use strict';
    if (typeof window !== 'object') { return }
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) { Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', { get: function() { return this.intersectionRatio > 0 } }) }
        return
    }

    function getFrameElement(doc) { try { return doc.defaultView && doc.defaultView.frameElement || null } catch (e) { return null } }
    var document = (function(startDoc) {
        var doc = startDoc;
        var frame = getFrameElement(doc);
        while (frame) {
            doc = frame.ownerDocument;
            frame = getFrameElement(doc)
        }
        return doc
    })(window.document);
    var registry = [];
    var crossOriginUpdater = null;
    var crossOriginRect = null;

    function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = ensureDOMRect(entry.rootBounds);
        this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
        this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
        this.isIntersecting = !!entry.intersectionRect;
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;
        if (targetArea) { this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4)) } else { this.intersectionRatio = this.isIntersecting ? 1 : 0 }
    }

    function IntersectionObserver(callback, opt_options) {
        var options = opt_options || {};
        if (typeof callback != 'function') { throw new Error('callback must be a function') }
        if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) { throw new Error('root must be a Document or Element') }
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) { return margin.value + margin.unit }).join(' ');
        this._monitoringDocuments = [];
        this._monitoringUnsubscribes = []
    }
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    IntersectionObserver.prototype.POLL_INTERVAL = null;
    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = !0;
    IntersectionObserver._setupCrossOriginUpdater = function() {
        if (!crossOriginUpdater) {
            crossOriginUpdater = function(boundingClientRect, intersectionRect) {
                if (!boundingClientRect || !intersectionRect) { crossOriginRect = getEmptyRect() } else { crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect) }
                registry.forEach(function(observer) { observer._checkForIntersections() })
            }
        }
        return crossOriginUpdater
    };
    IntersectionObserver._resetCrossOriginUpdater = function() {
        crossOriginUpdater = null;
        crossOriginRect = null
    };
    IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) { return item.element == target });
        if (isTargetAlreadyObserved) { return }
        if (!(target && target.nodeType == 1)) { throw new Error('target must be an Element') }
        this._registerInstance();
        this._observationTargets.push({ element: target, entry: null });
        this._monitorIntersections(target.ownerDocument);
        this._checkForIntersections()
    };
    IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) { return item.element != target });
        this._unmonitorIntersections(target.ownerDocument);
        if (this._observationTargets.length == 0) { this._unregisterInstance() }
    };
    IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorAllIntersections();
        this._unregisterInstance()
    };
    IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records
    };
    IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [0];
        if (!Array.isArray(threshold)) threshold = [threshold];
        return threshold.sort().filter(function(t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) { throw new Error('threshold must be a number between 0 and 1 inclusively') }
            return t !== a[i - 1]
        })
    };
    IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || '0px';
        var margins = marginString.split(/\s+/).map(function(margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) { throw new Error('rootMargin must be specified in pixels or percent') }
            return { value: parseFloat(parts[1]), unit: parts[2] }
        });
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];
        return margins
    };
    IntersectionObserver.prototype._monitorIntersections = function(doc) {
        var win = doc.defaultView;
        if (!win) { return }
        if (this._monitoringDocuments.indexOf(doc) != -1) { return }
        var callback = this._checkForIntersections;
        var monitoringInterval = null;
        var domObserver = null;
        if (this.POLL_INTERVAL) { monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL) } else {
            addEvent(win, 'resize', callback, !0);
            addEvent(doc, 'scroll', callback, !0);
            if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
                domObserver = new win.MutationObserver(callback);
                domObserver.observe(doc, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })
            }
        }
        this._monitoringDocuments.push(doc);
        this._monitoringUnsubscribes.push(function() {
            var win = doc.defaultView;
            if (win) {
                if (monitoringInterval) { win.clearInterval(monitoringInterval) }
                removeEvent(win, 'resize', callback, !0)
            }
            removeEvent(doc, 'scroll', callback, !0);
            if (domObserver) { domObserver.disconnect() }
        });
        var rootDoc = (this.root && (this.root.ownerDocument || this.root)) || document;
        if (doc != rootDoc) { var frame = getFrameElement(doc); if (frame) { this._monitorIntersections(frame.ownerDocument) } }
    };
    IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
        var index = this._monitoringDocuments.indexOf(doc);
        if (index == -1) { return }
        var rootDoc = (this.root && (this.root.ownerDocument || this.root)) || document;
        var hasDependentTargets = this._observationTargets.some(function(item) {
            var itemDoc = item.element.ownerDocument;
            if (itemDoc == doc) { return !0 }
            while (itemDoc && itemDoc != rootDoc) {
                var frame = getFrameElement(itemDoc);
                itemDoc = frame && frame.ownerDocument;
                if (itemDoc == doc) { return !0 }
            }
            return !1
        });
        if (hasDependentTargets) { return }
        var unsubscribe = this._monitoringUnsubscribes[index];
        this._monitoringDocuments.splice(index, 1);
        this._monitoringUnsubscribes.splice(index, 1);
        unsubscribe();
        if (doc != rootDoc) { var frame = getFrameElement(doc); if (frame) { this._unmonitorIntersections(frame.ownerDocument) } }
    };
    IntersectionObserver.prototype._unmonitorAllIntersections = function() {
        var unsubscribes = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        this._monitoringUnsubscribes.length = 0;
        for (var i = 0; i < unsubscribes.length; i++) { unsubscribes[i]() }
    };
    IntersectionObserver.prototype._checkForIntersections = function() {
        if (!this.root && crossOriginUpdater && !crossOriginRect) { return }
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function(item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);
            var rootContainsTarget = this._rootContainsTarget(target);
            var oldEntry = item.entry;
            var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
            var rootBounds = null;
            if (!this._rootContainsTarget(target)) { rootBounds = getEmptyRect() } else if (!crossOriginUpdater || this.root) { rootBounds = rootRect }
            var newEntry = item.entry = new IntersectionObserverEntry({ time: now(), target: target, boundingClientRect: targetRect, rootBounds: rootBounds, intersectionRect: intersectionRect });
            if (!oldEntry) { this._queuedEntries.push(newEntry) } else if (rootIsInDom && rootContainsTarget) { if (this._hasCrossedThreshold(oldEntry, newEntry)) { this._queuedEntries.push(newEntry) } } else { if (oldEntry && oldEntry.isIntersecting) { this._queuedEntries.push(newEntry) } }
        }, this);
        if (this._queuedEntries.length) { this._callback(this.takeRecords(), this) }
    };
    IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
        if (window.getComputedStyle(target).display == 'none') return;
        var intersectionRect = targetRect;
        var parent = getParentNode(target);
        var atRoot = !1;
        while (!atRoot && parent) {
            var parentRect = null;
            var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
            if (parentComputedStyle.display == 'none') return null;
            if (parent == this.root || parent.nodeType == 9) {
                atRoot = !0;
                if (parent == this.root || parent == document) {
                    if (crossOriginUpdater && !this.root) {
                        if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
                            parent = null;
                            parentRect = null;
                            intersectionRect = null
                        } else { parentRect = crossOriginRect }
                    } else { parentRect = rootRect }
                } else {
                    var frame = getParentNode(parent);
                    var frameRect = frame && getBoundingClientRect(frame);
                    var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
                    if (frameRect && frameIntersect) {
                        parent = frame;
                        parentRect = convertFromParentRect(frameRect, frameIntersect)
                    } else {
                        parent = null;
                        intersectionRect = null
                    }
                }
            } else { var doc = parent.ownerDocument; if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') { parentRect = getBoundingClientRect(parent) } }
            if (parentRect) { intersectionRect = computeRectIntersection(parentRect, intersectionRect) }
            if (!intersectionRect) break;
            parent = parent && getParentNode(parent)
        }
        return intersectionRect
    };
    IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root && !isDoc(this.root)) { rootRect = getBoundingClientRect(this.root) } else {
            var doc = isDoc(this.root) ? this.root : document;
            var html = doc.documentElement;
            var body = doc.body;
            rootRect = { top: 0, left: 0, right: html.clientWidth || body.clientWidth, width: html.clientWidth || body.clientWidth, bottom: html.clientHeight || body.clientHeight, height: html.clientHeight || body.clientHeight }
        }
        return this._expandRectByRootMargin(rootRect)
    };
    IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) { return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100 });
        var newRect = { top: rect.top - margins[0], right: rect.right + margins[1], bottom: rect.bottom + margins[2], left: rect.left - margins[3] };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;
        return newRect
    };
    IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) { var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1; var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; if (oldRatio === newRatio) return; for (var i = 0; i < this.thresholds.length; i++) { var threshold = this.thresholds[i]; if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) { return !0 } } };
    IntersectionObserver.prototype._rootIsInDom = function() { return !this.root || containsDeep(document, this.root) };
    IntersectionObserver.prototype._rootContainsTarget = function(target) { var rootDoc = (this.root && (this.root.ownerDocument || this.root)) || document; return (containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument)) };
    IntersectionObserver.prototype._registerInstance = function() { if (registry.indexOf(this) < 0) { registry.push(this) } };
    IntersectionObserver.prototype._unregisterInstance = function() { var index = registry.indexOf(this); if (index != -1) registry.splice(index, 1) };

    function now() { return window.performance && performance.now && performance.now() }

    function throttle(fn, timeout) {
        var timer = null;
        return function() {
            if (!timer) {
                timer = setTimeout(function() {
                    fn();
                    timer = null
                }, timeout)
            }
        }
    }

    function addEvent(node, event, fn, opt_useCapture) { if (typeof node.addEventListener == 'function') { node.addEventListener(event, fn, opt_useCapture || !1) } else if (typeof node.attachEvent == 'function') { node.attachEvent('on' + event, fn) } }

    function removeEvent(node, event, fn, opt_useCapture) { if (typeof node.removeEventListener == 'function') { node.removeEventListener(event, fn, opt_useCapture || !1) } else if (typeof node.detatchEvent == 'function') { node.detatchEvent('on' + event, fn) } }

    function computeRectIntersection(rect1, rect2) { var top = Math.max(rect1.top, rect2.top); var bottom = Math.min(rect1.bottom, rect2.bottom); var left = Math.max(rect1.left, rect2.left); var right = Math.min(rect1.right, rect2.right); var width = right - left; var height = bottom - top; return (width >= 0 && height >= 0) && { top: top, bottom: bottom, left: left, right: right, width: width, height: height } || null }

    function getBoundingClientRect(el) {
        var rect;
        try { rect = el.getBoundingClientRect() } catch (err) {}
        if (!rect) return getEmptyRect();
        if (!(rect.width && rect.height)) { rect = { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left, width: rect.right - rect.left, height: rect.bottom - rect.top } }
        return rect
    }

    function getEmptyRect() { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } }

    function ensureDOMRect(rect) {
        if (!rect || 'x' in rect) { return rect }
        return { top: rect.top, y: rect.top, bottom: rect.bottom, left: rect.left, x: rect.left, right: rect.right, width: rect.width, height: rect.height }
    }

    function convertFromParentRect(parentBoundingRect, parentIntersectionRect) { var top = parentIntersectionRect.top - parentBoundingRect.top; var left = parentIntersectionRect.left - parentBoundingRect.left; return { top: top, left: left, height: parentIntersectionRect.height, width: parentIntersectionRect.width, bottom: top + parentIntersectionRect.height, right: left + parentIntersectionRect.width } }

    function containsDeep(parent, child) {
        var node = child;
        while (node) {
            if (node == parent) return !0;
            node = getParentNode(node)
        }
        return !1
    }

    function getParentNode(node) {
        var parent = node.parentNode;
        if (node.nodeType == 9 && node != document) { return getFrameElement(node) }
        if (parent && parent.assignedSlot) { parent = parent.assignedSlot.parentNode }
        if (parent && parent.nodeType == 11 && parent.host) { return parent.host }
        return parent
    }

    function isDoc(node) { return node && node.nodeType === 9 }
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry
}());
if (window.NodeList && !NodeList.prototype.forEach) { NodeList.prototype.forEach = Array.prototype.forEach };
Number.isInteger = Number.isInteger || function(value) { return typeof value === "number" && isFinite(value) && Math.floor(value) === value };
if (!Number.isNaN) {
    (function(global) {
        var defineProperty = (function() {
            try { var object = {}; var $defineProperty = Object.defineProperty; var result = $defineProperty(object, object, object) && $defineProperty } catch (error) {}
            return result
        }());
        var globalIsNaN = global.isNaN;
        var isNaN = function(value) { return typeof value === 'number' && globalIsNaN(value) };
        if (defineProperty) { defineProperty(Number, 'isNaN', { 'value': isNaN, 'configurable': !0, 'writable': !0 }) } else { Number.isNaN = isNaN }
    }(this))
}; /*! (C) Andrea Giammarchi - Mit Style License */
var URLSearchParams = URLSearchParams || function() {
    "use strict";

    function URLSearchParams(query) {
        var index, key, value, pairs, i, length, dict = Object.create(null);
        this[secret] = dict;
        if (!query) return;
        if (typeof query === "string") {
            if (query.charAt(0) === "?") { query = query.slice(1) }
            for (pairs = query.split("&"), i = 0, length = pairs.length; i < length; i++) {
                value = pairs[i];
                index = value.indexOf("=");
                if (-1 < index) { appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1))) } else if (value.length) { appendTo(dict, decode(value), "") }
            }
        } else {
            if (isArray(query)) {
                for (i = 0, length = query.length; i < length; i++) {
                    value = query[i];
                    appendTo(dict, value[0], value[1])
                }
            } else if (query.forEach) { query.forEach(addEach, dict) } else { for (key in query) { appendTo(dict, key, query[key]) } }
        }
    }
    var isArray = Array.isArray,
        URLSearchParamsProto = URLSearchParams.prototype,
        find = /[!'\(\)~]|%20|%00/g,
        plus = /\+/g,
        replace = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" },
        replacer = function(match) { return replace[match] },
        secret = "__URLSearchParams__:" + Math.random();

    function addEach(value, key) { appendTo(this, key, value) }

    function appendTo(dict, name, value) {
        var res = isArray(value) ? value.join(",") : value;
        if (name in dict) dict[name].push(res);
        else dict[name] = [res]
    }

    function decode(str) { return decodeURIComponent(str.replace(plus, " ")) }

    function encode(str) { return encodeURIComponent(str).replace(find, replacer) } URLSearchParamsProto.append = function append(name, value) { appendTo(this[secret], name, value) };
    URLSearchParamsProto["delete"] = function del(name) { delete this[secret][name] };
    URLSearchParamsProto.get = function get(name) { var dict = this[secret]; return name in dict ? dict[name][0] : null };
    URLSearchParamsProto.getAll = function getAll(name) { var dict = this[secret]; return name in dict ? dict[name].slice(0) : [] };
    URLSearchParamsProto.has = function has(name) { return name in this[secret] };
    URLSearchParamsProto.set = function set(name, value) { this[secret][name] = ["" + value] };
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
        var dict = this[secret];
        Object.getOwnPropertyNames(dict).forEach(function(name) { dict[name].forEach(function(value) { callback.call(thisArg, value, name, this) }, this) }, this)
    };
    URLSearchParamsProto.toJSON = function toJSON() { return {} };
    URLSearchParamsProto.toString = function toString() {
        var dict = this[secret],
            query = [],
            i, key, name, value;
        for (key in dict) { name = encode(key); for (i = 0, value = dict[key]; i < value.length; i++) { query.push(name + "=" + encode(value[i])) } }
        return query.join("&")
    };
    var dP = Object.defineProperty,
        gOPD = Object.getOwnPropertyDescriptor,
        createSearchParamsPollute = function(search) {
            function append(name, value) {
                URLSearchParamsProto.append.call(this, name, value);
                name = this.toString();
                search.set.call(this._usp, name ? "?" + name : "")
            }

            function del(name) {
                URLSearchParamsProto["delete"].call(this, name);
                name = this.toString();
                search.set.call(this._usp, name ? "?" + name : "")
            }

            function set(name, value) {
                URLSearchParamsProto.set.call(this, name, value);
                name = this.toString();
                search.set.call(this._usp, name ? "?" + name : "")
            }
            return function(sp, value) {
                sp.append = append;
                sp["delete"] = del;
                sp.set = set;
                return dP(sp, "_usp", { configurable: !0, writable: !0, value: value })
            }
        },
        createSearchParamsCreate = function(polluteSearchParams) { return function(obj, sp) { dP(obj, "_searchParams", { configurable: !0, writable: !0, value: polluteSearchParams(sp, obj) }); return sp } },
        updateSearchParams = function(sp) {
            var append = sp.append;
            sp.append = URLSearchParamsProto.append;
            URLSearchParams.call(sp, sp._usp.search.slice(1));
            sp.append = append
        },
        verifySearchParams = function(obj, Class) { if (!(obj instanceof Class)) throw new TypeError("'searchParams' accessed on an object that " + "does not implement interface " + Class.name) },
        upgradeClass = function(Class) {
            var ClassProto = Class.prototype,
                searchParams = gOPD(ClassProto, "searchParams"),
                href = gOPD(ClassProto, "href"),
                search = gOPD(ClassProto, "search"),
                createSearchParams;
            if (!searchParams && search && search.set) {
                createSearchParams = createSearchParamsCreate(createSearchParamsPollute(search));
                Object.defineProperties(ClassProto, {
                    href: {
                        get: function() { return href.get.call(this) },
                        set: function(value) {
                            var sp = this._searchParams;
                            href.set.call(this, value);
                            if (sp) updateSearchParams(sp)
                        }
                    },
                    search: {
                        get: function() { return search.get.call(this) },
                        set: function(value) {
                            var sp = this._searchParams;
                            search.set.call(this, value);
                            if (sp) updateSearchParams(sp)
                        }
                    },
                    searchParams: {
                        get: function() { verifySearchParams(this, Class); return this._searchParams || createSearchParams(this, new URLSearchParams(this.search.slice(1))) },
                        set: function(sp) {
                            verifySearchParams(this, Class);
                            createSearchParams(this, sp)
                        }
                    }
                })
            }
        };
    upgradeClass(HTMLAnchorElement);
    if (/^function|object$/.test(typeof URL) && URL.prototype) upgradeClass(URL);
    return URLSearchParams
}();
(function(URLSearchParamsProto) {
    var iterable = function() { try { return !!Symbol.iterator } catch (error) { return !1 } }();
    if (!("forEach" in URLSearchParamsProto)) {
        URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
            var names = Object.create(null);
            this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach(function(name) {
                if (!name.length || name in names) return;
                (names[name] = this.getAll(name)).forEach(function(value) { callback.call(thisArg, value, name, this) }, this)
            }, this)
        }
    }
    if (!("keys" in URLSearchParamsProto)) {
        URLSearchParamsProto.keys = function keys() {
            var items = [];
            this.forEach(function(value, name) { items.push(name) });
            var iterator = { next: function() { var value = items.shift(); return { done: value === undefined, value: value } } };
            if (iterable) { iterator[Symbol.iterator] = function() { return iterator } }
            return iterator
        }
    }
    if (!("values" in URLSearchParamsProto)) {
        URLSearchParamsProto.values = function values() {
            var items = [];
            this.forEach(function(value) { items.push(value) });
            var iterator = { next: function() { var value = items.shift(); return { done: value === undefined, value: value } } };
            if (iterable) { iterator[Symbol.iterator] = function() { return iterator } }
            return iterator
        }
    }
    if (!("entries" in URLSearchParamsProto)) {
        URLSearchParamsProto.entries = function entries() {
            var items = [];
            this.forEach(function(value, name) { items.push([name, value]) });
            var iterator = { next: function() { var value = items.shift(); return { done: value === undefined, value: value } } };
            if (iterable) { iterator[Symbol.iterator] = function() { return iterator } }
            return iterator
        }
    }
    if (iterable && !(Symbol.iterator in URLSearchParamsProto)) { URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries }
    if (!("sort" in URLSearchParamsProto)) {
        URLSearchParamsProto.sort = function sort() {
            var entries = this.entries(),
                entry = entries.next(),
                done = entry.done,
                keys = [],
                values = Object.create(null),
                i, key, value;
            while (!done) {
                value = entry.value;
                key = value[0];
                keys.push(key);
                if (!(key in values)) { values[key] = [] } values[key].push(value[1]);
                entry = entries.next();
                done = entry.done
            }
            keys.sort();
            for (i = 0; i < keys.length; i++) { this["delete"](keys[i]) }
            for (i = 0; i < keys.length; i++) {
                key = keys[i];
                this.append(key, values[key].shift())
            }
        }
    }
})(URLSearchParams.prototype);
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-cssremunit-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-mediaqueries-touchevents-prefixed-prefixedcss-prefixedcssvalue-setclasses !*/
! function(e, n, t) {
    function r(e, n) { return typeof e === n }

    function o() {
        var e, n, t, o, i, s, a;
        for (var u in x)
            if (x.hasOwnProperty(u)) {
                if (e = [], n = x[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if (T && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), T ? _.className.baseVal = n : _.className = n)
    }

    function s(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

    function a() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : T ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function u(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function l(e, n) { return e - 1 === n || e === n || e + 1 === n }

    function f(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function d(e, n) { return !!~("" + e).indexOf(n) }

    function c(e, n) { return function() { return e.apply(n, arguments) } }

    function p(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? c(o, t || n) : o);
        return !1
    }

    function m() { var e = n.body; return e || (e = a(T ? "svg" : "body"), e.fake = !0), e }

    function v(e, t, r, o) {
        var i, s, u, l, f = "modernizr",
            d = a("div"),
            c = m();
        if (parseInt(r, 10))
            for (; r--;) u = a("div"), u.id = o ? o[r] : f + (r + 1), d.appendChild(u);
        return i = a("style"), i.type = "text/css", i.id = "s" + f, (c.fake ? c : d).appendChild(i), c.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = f, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = _.style.overflow, _.style.overflow = "hidden", _.appendChild(c)), s = t(d, e), c.fake ? (c.parentNode.removeChild(c), _.style.overflow = l, _.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function h(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(f(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) { for (var i = []; o--;) i.push("(" + f(n[o]) + ":" + r + ")"); return i = i.join(" or "), v("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == u(e, null, "position") }) }
        return t
    }

    function y(e, n, o, i) {
        function u() { f && (delete O.style, delete O.modElem) }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var l = h(e, o); if (!r(l, "undefined")) return l }
        for (var f, c, p, m, v, y = ["modernizr", "tspan", "samp"]; !O.style && y.length;) f = !0, O.modElem = a(y.shift()), O.style = O.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (m = e[c], v = O.style[m], d(m, "-") && (m = s(m)), O.style[m] !== t) { if (i || r(o, "undefined")) return u(), "pfx" == n ? m : !0; try { O.style[m] = o } catch (g) {} if (O.style[m] != v) return u(), "pfx" == n ? m : !0 } return u(), !1
    }

    function g(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + A.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? y(a, n, o, i) : (a = (e + " " + j.join(s + " ") + s).split(" "), p(a, n, t))
    }

    function S(e, n, r) { return g(e, t, t, n, r) }
    var C = [],
        x = [],
        w = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() { n(t[e]) }, 0)
            },
            addTest: function(e, n, t) { x.push({ name: e, fn: n, options: t }) },
            addAsyncTest: function(e) { x.push({ name: null, fn: e }) }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var _ = n.documentElement,
        T = "svg" === _.nodeName.toLowerCase(),
        b = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = b, Modernizr.addTest("cssremunit", function() { var e = a("a").style; try { e.fontSize = "3rem" } catch (n) {} return /rem/.test(e.fontSize) });
    var z = "CSS" in e && "supports" in e.CSS,
        P = "supportsCSS" in e;
    Modernizr.addTest("supports", z || P);
    var E = "Moz O ms Webkit",
        j = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    w._domPrefixes = j;
    var N = function(e, n) {
        var t = !1,
            r = a("div"),
            o = r.style;
        if (e in o) { var i = j.length; for (o[e] = n, t = o[e]; i-- && !t;) o[e] = "-" + j[i] + "-" + n, t = o[e] }
        return "" === t && (t = !1), t
    };
    w.prefixedCSSValue = N;
    var A = w._config.usePrefixes ? E.split(" ") : [];
    w._cssomPrefixes = A;
    var k = function(n) {
        var r, o = b.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = b[s],
                u = a.toUpperCase() + "_" + r;
            if (u in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    w.atRule = k;
    var q = w.testStyles = v;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            q(r, function(e) { t = 9 === e.offsetTop })
        }
        return t
    }), q("#modernizr { height: 50vh; }", function(n) {
        var t = parseInt(e.innerHeight / 2, 10),
            r = parseInt(u(n, null, "height"), 10);
        Modernizr.addTest("cssvhunit", l(r, t))
    }), q("#modernizr { width: 50vw; }", function(n) {
        var t = parseInt(e.innerWidth / 2, 10),
            r = parseInt(u(n, null, "width"), 10);
        Modernizr.addTest("cssvwunit", l(r, t))
    });
    var L = function() { var n = e.matchMedia || e.msMatchMedia; return n ? function(e) { var t = n(e); return t && t.matches || !1 } : function(n) { var t = !1; return v("@media " + n + " { #modernizr { position: absolute; } }", function(n) { t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position }), t } }();
    w.mq = L, Modernizr.addTest("mediaqueries", L("only all"));
    var M = { elem: a("modernizr") };
    Modernizr._q.push(function() { delete M.elem });
    var O = { style: M.elem.style };
    Modernizr._q.unshift(function() { delete O.style }), w.testAllProps = g;
    var I = w.prefixed = function(e, n, t) { return 0 === e.indexOf("@") ? k(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? g(e, n, t) : g(e, "pfx")) };
    w.prefixedCSS = function(e) { var n = I(e); return n && f(n) };
    w.testAllProps = S, Modernizr.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && S("transform", "scale(1)", !0) }), Modernizr.addTest("cssfilters", function() { if (Modernizr.supports) return S("filter", "blur(2px)"); var e = a("a"); return e.style.cssText = b.join("filter:blur(2px); "), !!e.style.length && (n.documentMode === t || n.documentMode > 9) }), Modernizr.addTest("csstransforms3d", function() { return !!S("perspective", "1px", !0) }), Modernizr.addTest("csstransitions", S("transition", "all", !0)), o(), i(C), delete w.addTest, delete w.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);
(function($) {
    function drags(dragElement, resizeElement, container) {
        dragElement.on('mousedown.ba-events touchstart.ba-events', function(e) {
            dragElement.addClass('ba-draggable');
            resizeElement.addClass('ba-resizable');
            var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
            var dragWidth = dragElement.outerWidth(),
                posX = dragElement.offset().left + dragWidth - startX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth();
            minLeft = containerOffset + 10;
            maxLeft = containerOffset + containerWidth - dragWidth - 10;
            dragElement.parents().on("mousemove.ba-events touchmove.ba-events", function(e) {
                var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
                leftValue = moveX + posX - dragWidth;
                if (leftValue < minLeft) { leftValue = minLeft } else if (leftValue > maxLeft) { leftValue = maxLeft }
                widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
                $('.ba-draggable').css('left', widthValue);
                $('.ba-resizable').css('width', widthValue)
            }).on('mouseup.ba-events touchend.ba-events touchcancel.ba-events', function() {
                dragElement.removeClass('ba-draggable');
                resizeElement.removeClass('ba-resizable');
                $(this).off('.ba-events')
            });
            e.preventDefault()
        })
    }
    $.fn.beforeAfter = function() {
        var cur = this;
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        drags(cur.find('.handle'), cur.find('.resize'), cur);
        $(window).resize(function() {
            var width = cur.width() + 'px';
            cur.find('.resize img').css('width', width)
        })
    }
}(jQuery));
/*!
 * Draggabilly PACKAGED v1.1.0
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {



    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('classie/classie', classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

/*!
 * EventEmitter v4.2.2 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function() {
    function EventEmitter() {}
    var proto = EventEmitter.prototype;

    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) { if (listeners[i].listener === listener) { return i } }
        return -1
    }

    function alias(name) { return function aliasClosure() { return this[name].apply(this, arguments) } }
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;
        if (typeof evt === 'object') { response = {}; for (key in events) { if (events.hasOwnProperty(key) && evt.test(key)) { response[key] = events[key] } } } else { response = events[evt] || (events[evt] = []) }
        return response
    };
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) { flatListeners.push(listeners[i].listener) }
        return flatListeners
    };
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;
        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners
        }
        return response || listeners
    };
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;
        for (key in listeners) { if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) { listeners[key].push(listenerIsWrapped ? listener : { listener: listener, once: !1 }) } }
        return this
    };
    proto.on = alias('addListener');
    proto.addOnceListener = function addOnceListener(evt, listener) { return this.addListener(evt, { listener: listener, once: !0 }) };
    proto.once = alias('addOnceListener');
    proto.defineEvent = function defineEvent(evt) { this.getListeners(evt); return this };
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) { this.defineEvent(evts[i]) }
        return this
    };
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;
        for (key in listeners) { if (listeners.hasOwnProperty(key)) { index = indexOfListener(listeners[key], listener); if (index !== -1) { listeners[key].splice(index, 1) } } }
        return this
    };
    proto.off = alias('removeListener');
    proto.addListeners = function addListeners(evt, listeners) { return this.manipulateListeners(!1, evt, listeners) };
    proto.removeListeners = function removeListeners(evt, listeners) { return this.manipulateListeners(!0, evt, listeners) };
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        if (typeof evt === 'object' && !(evt instanceof RegExp)) { for (i in evt) { if (evt.hasOwnProperty(i) && (value = evt[i])) { if (typeof value === 'function') { single.call(this, i, value) } else { multiple.call(this, i, value) } } } } else { i = listeners.length; while (i--) { single.call(this, evt, listeners[i]) } }
        return this
    };
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;
        if (type === 'string') { delete events[evt] } else if (type === 'object') { for (key in events) { if (events.hasOwnProperty(key) && evt.test(key)) { delete events[key] } } } else { delete this._events }
        return this
    };
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;
        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;
                while (i--) {
                    listener = listeners[key][i];
                    response = listener.listener.apply(this, args || []);
                    if (response === this._getOnceReturnValue() || listener.once === !0) { this.removeListener(evt, listener.listener) }
                }
            }
        }
        return this
    };
    proto.trigger = alias('emitEvent');
    proto.emit = function emit(evt) { var args = Array.prototype.slice.call(arguments, 1); return this.emitEvent(evt, args) };
    proto.setOnceReturnValue = function setOnceReturnValue(value) { this._onceReturnValue = value; return this };
    proto._getOnceReturnValue = function _getOnceReturnValue() { if (this.hasOwnProperty('_onceReturnValue')) { return this._onceReturnValue } else { return !0 } };
    proto._getEvents = function _getEvents() { return this._events || (this._events = {}) };
    if (typeof define === 'function' && define.amd) { define('eventEmitter/EventEmitter', [], function() { return EventEmitter }) } else if (typeof module === 'object' && module.exports) { module.exports = EventEmitter } else { this.EventEmitter = EventEmitter }
}.call(this));
/*!
 * eventie v1.0.3
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */
(function(window) {
    var docElem = document.documentElement;
    var bind = function() {};
    if (docElem.addEventListener) { bind = function(obj, type, fn) { obj.addEventListener(type, fn, !1) } } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[type + fn] = fn.handleEvent ? function() {
                var event = window.event;
                event.target = event.target || event.srcElement;
                fn.handleEvent.call(fn, event)
            } : function() {
                var event = window.event;
                event.target = event.target || event.srcElement;
                fn.call(obj, event)
            };
            obj.attachEvent("on" + type, obj[type + fn])
        }
    }
    var unbind = function() {};
    if (docElem.removeEventListener) { unbind = function(obj, type, fn) { obj.removeEventListener(type, fn, !1) } } else if (docElem.detachEvent) { unbind = function(obj, type, fn) { obj.detachEvent("on" + type, obj[type + fn]); try { delete obj[type + fn] } catch (err) { obj[type + fn] = undefined } } }
    var eventie = { bind: bind, unbind: unbind };
    if (typeof define === 'function' && define.amd) { define('eventie/eventie', eventie) } else { window.eventie = eventie }
})(this);
/*!
 * getStyleProperty by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */
(function(window) {
    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) {
        if (!propName) { return }
        if (typeof docElemStyle[propName] === 'string') { return propName }
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) { prefixed = prefixes[i] + propName; if (typeof docElemStyle[prefixed] === 'string') { return prefixed } }
    }
    if (typeof define === 'function' && define.amd) { define('get-style-property/get-style-property', [], function() { return getStyleProperty }) } else { window.getStyleProperty = getStyleProperty }
})(window);
(function(window, undefined) {
    var defView = document.defaultView;
    var getStyle = defView && defView.getComputedStyle ? function(elem) { return defView.getComputedStyle(elem, null) } : function(elem) { return elem.currentStyle };

    function getStyleSize(value) { var num = parseFloat(value); var isValid = value.indexOf('%') === -1 && !isNaN(num); return isValid && num }
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

    function getZeroSize() {
        var size = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 };
        for (var i = 0, len = measurements.length; i < len; i++) {
            var measurement = measurements[i];
            size[measurement] = 0
        }
        return size
    }

    function defineGetSize(getStyleProperty) {
        var boxSizingProp = getStyleProperty('boxSizing');
        var isBoxSizeOuter;
        (function() {
            if (!boxSizingProp) { return }
            var div = document.createElement('div');
            div.style.width = '200px';
            div.style.padding = '1px 2px 3px 4px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px 2px 3px 4px';
            div.style[boxSizingProp] = 'border-box';
            var body = document.body || document.documentElement;
            body.appendChild(div);
            var style = getStyle(div);
            isBoxSizeOuter = getStyleSize(style.width) === 200;
            body.removeChild(div)
        })();

        function getSize(elem) {
            if (typeof elem === 'string') { elem = document.querySelector(elem) }
            if (!elem || typeof elem !== 'object' || !elem.nodeType) { return }
            var style = getStyle(elem);
            if (style.display === 'none') { return getZeroSize() }
            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;
            var isBorderBox = size.isBorderBox = !!(boxSizingProp && style[boxSizingProp] && style[boxSizingProp] === 'border-box');
            for (var i = 0, len = measurements.length; i < len; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                var num = parseFloat(value);
                size[measurement] = !isNaN(num) ? num : 0
            }
            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;
            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== !1) { size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth) }
            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== !1) { size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight) }
            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);
            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;
            return size
        }
        return getSize
    }
    if (typeof define === 'function' && define.amd) { define('get-size/get-size', ['get-style-property/get-style-property'], defineGetSize) } else { window.getSize = defineGetSize(window.getStyleProperty) }
})(window);
/*!
 * Draggabilly v1.1.0
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */
(function(window) {
    var document = window.document;

    function extend(a, b) {
        for (var prop in b) { a[prop] = b[prop] }
        return a
    }

    function noop() {}
    var defView = document.defaultView;
    var getStyle = defView && defView.getComputedStyle ? function(elem) { return defView.getComputedStyle(elem, null) } : function(elem) { return elem.currentStyle };
    var isElement = (typeof HTMLElement === 'object') ? function isElementDOM2(obj) { return obj instanceof HTMLElement } : function isElementQuirky(obj) { return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string' };
    var lastTime = 0;
    var prefixes = 'webkit moz ms o'.split(' ');
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    var prefix;
    for (var i = 0; i < prefixes.length; i++) {
        if (requestAnimationFrame && cancelAnimationFrame) { break }
        prefix = prefixes[i];
        requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
        cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']
    }
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall) }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        };
        cancelAnimationFrame = function(id) { window.clearTimeout(id) }
    }

    function draggabillyDefinition(classie, EventEmitter, eventie, getStyleProperty, getSize) {
        var transformProperty = getStyleProperty('transform');
        var is3d = !!getStyleProperty('perspective');

        function Draggabilly(element, options) {
            this.element = typeof element === 'string' ? document.querySelector(element) : element;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this._create()
        }
        extend(Draggabilly.prototype, EventEmitter.prototype);
        Draggabilly.prototype.options = {};
        Draggabilly.prototype._create = function() {
            this.position = {};
            this._getPosition();
            this.startPoint = { x: 0, y: 0 };
            this.dragPoint = { x: 0, y: 0 };
            this.startPosition = extend({}, this.position);
            var style = getStyle(this.element);
            if (style.position !== 'relative' && style.position !== 'absolute') { this.element.style.position = 'relative' }
            this.enable();
            this.setHandles()
        };
        Draggabilly.prototype.setHandles = function() {
            this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
            for (var i = 0, len = this.handles.length; i < len; i++) {
                var handle = this.handles[i];
                if (window.navigator.pointerEnabled) {
                    eventie.bind(handle, 'pointerdown', this);
                    handle.style.touchAction = 'none'
                } else if (window.navigator.msPointerEnabled) {
                    eventie.bind(handle, 'MSPointerDown', this);
                    handle.style.msTouchAction = 'none'
                } else {
                    eventie.bind(handle, 'mousedown', this);
                    eventie.bind(handle, 'touchstart', this);
                    disableImgOndragstart(handle)
                }
            }
        };

        function noDragStart() { return !1 }
        var isIE8 = 'attachEvent' in document.documentElement;
        var disableImgOndragstart = !isIE8 ? noop : function(handle) {
            if (handle.nodeName === 'IMG') { handle.ondragstart = noDragStart }
            var images = handle.querySelectorAll('img');
            for (var i = 0, len = images.length; i < len; i++) {
                var img = images[i];
                img.ondragstart = noDragStart
            }
        };
        Draggabilly.prototype._getPosition = function() {
            var style = getStyle(this.element);
            var x = parseInt(style.left, 10);
            var y = parseInt(style.top, 10);
            this.position.x = isNaN(x) ? 0 : x;
            this.position.y = isNaN(y) ? 0 : y;
            this._addTransformPosition(style)
        };
        Draggabilly.prototype._addTransformPosition = function(style) {
            if (!transformProperty) { return }
            var transform = style[transformProperty];
            if (transform.indexOf('matrix') !== 0) { return }
            var matrixValues = transform.split(',');
            var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
            var translateX = parseInt(matrixValues[xIndex], 10);
            var translateY = parseInt(matrixValues[xIndex + 1], 10);
            this.position.x += translateX;
            this.position.y += translateY
        };
        Draggabilly.prototype.handleEvent = function(event) { var method = 'on' + event.type; if (this[method]) { this[method](event) } };
        Draggabilly.prototype.getTouch = function(touches) { for (var i = 0, len = touches.length; i < len; i++) { var touch = touches[i]; if (touch.identifier === this.pointerIdentifier) { return touch } } };
        Draggabilly.prototype.onmousedown = function(event) {
            var button = event.button;
            if (button && (button !== 0 && button !== 1)) { return }
            this.dragStart(event, event)
        };
        Draggabilly.prototype.ontouchstart = function(event) {
            if (this.isDragging) { return }
            this.dragStart(event, event.changedTouches[0])
        };
        Draggabilly.prototype.onMSPointerDown = Draggabilly.prototype.onpointerdown = function(event) {
            if (this.isDragging) { return }
            this.dragStart(event, event)
        };

        function setPointerPoint(point, pointer) {
            point.x = pointer.pageX !== undefined ? pointer.pageX : pointer.clientX;
            point.y = pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
        }
        var postStartEvents = { mousedown: ['mousemove', 'mouseup'], touchstart: ['touchmove', 'touchend', 'touchcancel'], pointerdown: ['pointermove', 'pointerup', 'pointercancel'], MSPointerDown: ['MSPointerMove', 'MSPointerUp', 'MSPointerCancel'] };
        Draggabilly.prototype.dragStart = function(event, pointer) {
            if (!this.isEnabled) { return }
            if (event.preventDefault) { event.preventDefault() } else { event.returnValue = !1 }
            this.pointerIdentifier = pointer.pointerId !== undefined ? pointer.pointerId : pointer.identifier;
            this._getPosition();
            this.measureContainment();
            setPointerPoint(this.startPoint, pointer);
            this.startPosition.x = this.position.x;
            this.startPosition.y = this.position.y;
            this.setLeftTop();
            this.dragPoint.x = 0;
            this.dragPoint.y = 0;
            this._bindEvents({ events: postStartEvents[event.type], node: event.preventDefault ? window : document });
            classie.add(this.element, 'is-dragging');
            this.isDragging = !0;
            this.emitEvent('dragStart', [this, event, pointer]);
            this.animate()
        };
        Draggabilly.prototype._bindEvents = function(args) {
            for (var i = 0, len = args.events.length; i < len; i++) {
                var event = args.events[i];
                eventie.bind(args.node, event, this)
            }
            this._boundEvents = args
        };
        Draggabilly.prototype._unbindEvents = function() {
            var args = this._boundEvents;
            if (!args || !args.events) { return }
            for (var i = 0, len = args.events.length; i < len; i++) {
                var event = args.events[i];
                eventie.unbind(args.node, event, this)
            }
            delete this._boundEvents
        };
        Draggabilly.prototype.measureContainment = function() {
            var containment = this.options.containment;
            if (!containment) { return }
            this.size = getSize(this.element);
            var elemRect = this.element.getBoundingClientRect();
            var container = isElement(containment) ? containment : typeof containment === 'string' ? document.querySelector(containment) : this.element.parentNode;
            this.containerSize = getSize(container);
            var containerRect = container.getBoundingClientRect();
            this.relativeStartPosition = { x: elemRect.left - containerRect.left, y: elemRect.top - containerRect.top }
        };
        Draggabilly.prototype.onmousemove = function(event) { this.dragMove(event, event) };
        Draggabilly.prototype.onMSPointerMove = Draggabilly.prototype.onpointermove = function(event) { if (event.pointerId === this.pointerIdentifier) { this.dragMove(event, event) } };
        Draggabilly.prototype.ontouchmove = function(event) { var touch = this.getTouch(event.changedTouches); if (touch) { this.dragMove(event, touch) } };
        Draggabilly.prototype.dragMove = function(event, pointer) {
            setPointerPoint(this.dragPoint, pointer);
            var dragX = this.dragPoint.x - this.startPoint.x;
            var dragY = this.dragPoint.y - this.startPoint.y;
            var grid = this.options.grid;
            var gridX = grid && grid[0];
            var gridY = grid && grid[1];
            dragX = applyGrid(dragX, gridX);
            dragY = applyGrid(dragY, gridY);
            dragX = this.containDrag('x', dragX, gridX);
            dragY = this.containDrag('y', dragY, gridY);
            dragX = this.options.axis === 'y' ? 0 : dragX;
            dragY = this.options.axis === 'x' ? 0 : dragY;
            this.position.x = this.startPosition.x + dragX;
            this.position.y = this.startPosition.y + dragY;
            this.dragPoint.x = dragX;
            this.dragPoint.y = dragY;
            this.emitEvent('dragMove', [this, event, pointer])
        };

        function applyGrid(value, grid, method) { method = method || 'round'; return grid ? Math[method](value / grid) * grid : value }
        Draggabilly.prototype.containDrag = function(axis, drag, grid) {
            if (!this.options.containment) { return drag }
            var measure = axis === 'x' ? 'width' : 'height';
            var rel = this.relativeStartPosition[axis];
            var min = applyGrid(-rel, grid, 'ceil');
            var max = this.containerSize[measure] - rel - this.size[measure];
            max = applyGrid(max, grid, 'floor');
            return Math.min(max, Math.max(min, drag))
        };
        Draggabilly.prototype.onmouseup = function(event) { this.dragEnd(event, event) };
        Draggabilly.prototype.onMSPointerUp = Draggabilly.prototype.onpointerup = function(event) { if (event.pointerId === this.pointerIdentifier) { this.dragEnd(event, event) } };
        Draggabilly.prototype.ontouchend = function(event) { var touch = this.getTouch(event.changedTouches); if (touch) { this.dragEnd(event, touch) } };
        Draggabilly.prototype.dragEnd = function(event, pointer) {
            this.isDragging = !1;
            delete this.pointerIdentifier;
            if (transformProperty) {
                this.element.style[transformProperty] = '';
                this.setLeftTop()
            }
            this._unbindEvents();
            classie.remove(this.element, 'is-dragging');
            this.emitEvent('dragEnd', [this, event, pointer])
        };
        Draggabilly.prototype.onMSPointerCancel = Draggabilly.prototype.onpointercancel = function(event) { if (event.pointerId === this.pointerIdentifier) { this.dragEnd(event, event) } };
        Draggabilly.prototype.ontouchcancel = function(event) {
            var touch = this.getTouch(event.changedTouches);
            this.dragEnd(event, touch)
        };
        Draggabilly.prototype.animate = function() {
            if (!this.isDragging) { return }
            this.positionDrag();
            var _this = this;
            requestAnimationFrame(function animateFrame() { _this.animate() })
        };
        var translate = is3d ? function(x, y) { return 'translate3d( ' + x + 'px, ' + y + 'px, 0)' } : function(x, y) { return 'translate( ' + x + 'px, ' + y + 'px)' };
        Draggabilly.prototype.setLeftTop = function() {
            this.element.style.left = this.position.x + 'px';
            this.element.style.top = this.position.y + 'px'
        };
        Draggabilly.prototype.positionDrag = transformProperty ? function() { this.element.style[transformProperty] = translate(this.dragPoint.x, this.dragPoint.y) } : Draggabilly.prototype.setLeftTop;
        Draggabilly.prototype.enable = function() { this.isEnabled = !0 };
        Draggabilly.prototype.disable = function() { this.isEnabled = !1; if (this.isDragging) { this.dragEnd() } };
        return Draggabilly
    }
    if (typeof define === 'function' && define.amd) { define(['classie/classie', 'eventEmitter/EventEmitter', 'eventie/eventie', 'get-style-property/get-style-property', 'get-size/get-size'], draggabillyDefinition) } else { window.Draggabilly = draggabillyDefinition(window.classie, window.EventEmitter, window.eventie, window.getStyleProperty, window.getSize) }
})(window);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj } } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj } } return _typeof(obj) }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call } return _assertThisInitialized(self) }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function") } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }); if (superClass) _setPrototypeOf(subClass, superClass) }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1;
        descriptor.configurable = !0;
        if ("value" in descriptor) descriptor.writable = !0;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }
var Emitter = function() {
    function Emitter() { _classCallCheck(this, Emitter) }
    _createClass(Emitter, [{
        key: "on",
        value: function on(event, fn) {
            this._callbacks = this._callbacks || {};
            if (!this._callbacks[event]) { this._callbacks[event] = [] }
            this._callbacks[event].push(fn);
            return this
        }
    }, {
        key: "emit",
        value: function emit(event) {
            this._callbacks = this._callbacks || {};
            var callbacks = this._callbacks[event];
            if (callbacks) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) { args[_key - 1] = arguments[_key] }
                var _iteratorNormalCompletion = !0;
                var _didIteratorError = !1;
                var _iteratorError = undefined;
                try {
                    for (var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                        var callback = _step.value;
                        callback.apply(this, args)
                    }
                } catch (err) {
                    _didIteratorError = !0;
                    _iteratorError = err
                } finally { try { if (!_iteratorNormalCompletion && _iterator["return"] != null) { _iterator["return"]() } } finally { if (_didIteratorError) { throw _iteratorError } } }
            }
            return this
        }
    }, {
        key: "off",
        value: function off(event, fn) {
            if (!this._callbacks || arguments.length === 0) { this._callbacks = {}; return this }
            var callbacks = this._callbacks[event];
            if (!callbacks) { return this }
            if (arguments.length === 1) { delete this._callbacks[event]; return this }
            for (var i = 0; i < callbacks.length; i++) { var callback = callbacks[i]; if (callback === fn) { callbacks.splice(i, 1); break } }
            return this
        }
    }]);
    return Emitter
}();
var Dropzone = function(_Emitter) {
    _inherits(Dropzone, _Emitter);
    _createClass(Dropzone, null, [{
        key: "initClass",
        value: function initClass() {
            this.prototype.Emitter = Emitter;
            this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
            this.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: 30000,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2000000,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: 'crop',
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: 0.8,
                resizeMethod: 'contain',
                filesizeBase: 1000,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
                init: function init() {},
                params: function params(files, xhr, chunk) { if (chunk) { return { dzuuid: chunk.file.upload.uuid, dzchunkindex: chunk.index, dztotalfilesize: chunk.file.size, dzchunksize: this.options.chunkSize, dztotalchunkcount: chunk.file.upload.totalChunkCount, dzchunkbyteoffset: chunk.index * this.options.chunkSize } } },
                accept: function accept(file, done) { return done() },
                chunksUploaded: function chunksUploaded(file, done) { done() },
                fallback: function fallback() {
                    var messageElement;
                    this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                    var _iteratorNormalCompletion2 = !0;
                    var _didIteratorError2 = !1;
                    var _iteratorError2 = undefined;
                    try {
                        for (var _iterator2 = this.element.getElementsByTagName("div")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = !0) {
                            var child = _step2.value;
                            if (/(^| )dz-message($| )/.test(child.className)) {
                                messageElement = child;
                                child.className = "dz-message";
                                break
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = !0;
                        _iteratorError2 = err
                    } finally { try { if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) { _iterator2["return"]() } } finally { if (_didIteratorError2) { throw _iteratorError2 } } }
                    if (!messageElement) {
                        messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                        this.element.appendChild(messageElement)
                    }
                    var span = messageElement.getElementsByTagName("span")[0];
                    if (span) { if (span.textContent != null) { span.textContent = this.options.dictFallbackMessage } else if (span.innerText != null) { span.innerText = this.options.dictFallbackMessage } }
                    return this.element.appendChild(this.getFallbackForm())
                },
                resize: function resize(file, width, height, resizeMethod) {
                    var info = { srcX: 0, srcY: 0, srcWidth: file.width, srcHeight: file.height };
                    var srcRatio = file.width / file.height;
                    if (width == null && height == null) {
                        width = info.srcWidth;
                        height = info.srcHeight
                    } else if (width == null) { width = height * srcRatio } else if (height == null) { height = width / srcRatio }
                    width = Math.min(width, info.srcWidth);
                    height = Math.min(height, info.srcHeight);
                    var trgRatio = width / height;
                    if (info.srcWidth > width || info.srcHeight > height) {
                        if (resizeMethod === 'crop') {
                            if (srcRatio > trgRatio) {
                                info.srcHeight = file.height;
                                info.srcWidth = info.srcHeight * trgRatio
                            } else {
                                info.srcWidth = file.width;
                                info.srcHeight = info.srcWidth / trgRatio
                            }
                        } else if (resizeMethod === 'contain') { if (srcRatio > trgRatio) { height = width / srcRatio } else { width = height * srcRatio } } else { throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'")) }
                    }
                    info.srcX = (file.width - info.srcWidth) / 2;
                    info.srcY = (file.height - info.srcHeight) / 2;
                    info.trgWidth = width;
                    info.trgHeight = height;
                    return info
                },
                transformFile: function transformFile(file, done) { if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) { return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done) } else { return done(file) } },
                previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Check</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Error</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
                drop: function drop(e) { return this.element.classList.remove("dz-drag-hover") },
                dragstart: function dragstart(e) {},
                dragend: function dragend(e) { return this.element.classList.remove("dz-drag-hover") },
                dragenter: function dragenter(e) { return this.element.classList.add("dz-drag-hover") },
                dragover: function dragover(e) { return this.element.classList.add("dz-drag-hover") },
                dragleave: function dragleave(e) { return this.element.classList.remove("dz-drag-hover") },
                paste: function paste(e) {},
                reset: function reset() { return this.element.classList.remove("dz-started") },
                addedfile: function addedfile(file) {
                    var _this2 = this;
                    if (this.element === this.previewsContainer) { this.element.classList.add("dz-started") }
                    if (this.previewsContainer) {
                        file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                        file.previewTemplate = file.previewElement;
                        this.previewsContainer.appendChild(file.previewElement);
                        var _iteratorNormalCompletion3 = !0;
                        var _didIteratorError3 = !1;
                        var _iteratorError3 = undefined;
                        try {
                            for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = !0) {
                                var node = _step3.value;
                                node.textContent = file.name
                            }
                        } catch (err) {
                            _didIteratorError3 = !0;
                            _iteratorError3 = err
                        } finally { try { if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) { _iterator3["return"]() } } finally { if (_didIteratorError3) { throw _iteratorError3 } } }
                        var _iteratorNormalCompletion4 = !0;
                        var _didIteratorError4 = !1;
                        var _iteratorError4 = undefined;
                        try {
                            for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = !0) {
                                node = _step4.value;
                                node.innerHTML = this.filesize(file.size)
                            }
                        } catch (err) {
                            _didIteratorError4 = !0;
                            _iteratorError4 = err
                        } finally { try { if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) { _iterator4["return"]() } } finally { if (_didIteratorError4) { throw _iteratorError4 } } }
                        if (this.options.addRemoveLinks) {
                            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
                            file.previewElement.appendChild(file._removeLink)
                        }
                        var removeFileEvent = function removeFileEvent(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) { return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function() { return _this2.removeFile(file) }) } else { if (_this2.options.dictRemoveFileConfirmation) { return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function() { return _this2.removeFile(file) }) } else { return _this2.removeFile(file) } }
                        };
                        var _iteratorNormalCompletion5 = !0;
                        var _didIteratorError5 = !1;
                        var _iteratorError5 = undefined;
                        try {
                            for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = !0) {
                                var removeLink = _step5.value;
                                removeLink.addEventListener("click", removeFileEvent)
                            }
                        } catch (err) {
                            _didIteratorError5 = !0;
                            _iteratorError5 = err
                        } finally { try { if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) { _iterator5["return"]() } } finally { if (_didIteratorError5) { throw _iteratorError5 } } }
                    }
                },
                removedfile: function removedfile(file) {
                    if (file.previewElement != null && file.previewElement.parentNode != null) { file.previewElement.parentNode.removeChild(file.previewElement) }
                    return this._updateMaxFilesReachedClass()
                },
                thumbnail: function thumbnail(file, dataUrl) {
                    if (file.previewElement) {
                        file.previewElement.classList.remove("dz-file-preview");
                        var _iteratorNormalCompletion6 = !0;
                        var _didIteratorError6 = !1;
                        var _iteratorError6 = undefined;
                        try {
                            for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = !0) {
                                var thumbnailElement = _step6.value;
                                thumbnailElement.alt = file.name;
                                thumbnailElement.src = dataUrl
                            }
                        } catch (err) {
                            _didIteratorError6 = !0;
                            _iteratorError6 = err
                        } finally { try { if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) { _iterator6["return"]() } } finally { if (_didIteratorError6) { throw _iteratorError6 } } }
                        return setTimeout(function() { return file.previewElement.classList.add("dz-image-preview") }, 1)
                    }
                },
                error: function error(file, message) {
                    if (file.previewElement) {
                        file.previewElement.classList.add("dz-error");
                        if (typeof message !== "String" && message.error) { message = message.error }
                        var _iteratorNormalCompletion7 = !0;
                        var _didIteratorError7 = !1;
                        var _iteratorError7 = undefined;
                        try {
                            for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]")[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = !0) {
                                var node = _step7.value;
                                node.textContent = message
                            }
                        } catch (err) {
                            _didIteratorError7 = !0;
                            _iteratorError7 = err
                        } finally { try { if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) { _iterator7["return"]() } } finally { if (_didIteratorError7) { throw _iteratorError7 } } }
                    }
                },
                errormultiple: function errormultiple() {},
                processing: function processing(file) { if (file.previewElement) { file.previewElement.classList.add("dz-processing"); if (file._removeLink) { return file._removeLink.innerHTML = this.options.dictCancelUpload } } },
                processingmultiple: function processingmultiple() {},
                uploadprogress: function uploadprogress(file, progress, bytesSent) {
                    if (file.previewElement) {
                        var _iteratorNormalCompletion8 = !0;
                        var _didIteratorError8 = !1;
                        var _iteratorError8 = undefined;
                        try {
                            for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = !0) {
                                var node = _step8.value;
                                node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = "".concat(progress, "%")
                            }
                        } catch (err) {
                            _didIteratorError8 = !0;
                            _iteratorError8 = err
                        } finally { try { if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) { _iterator8["return"]() } } finally { if (_didIteratorError8) { throw _iteratorError8 } } }
                    }
                },
                totaluploadprogress: function totaluploadprogress() {},
                sending: function sending() {},
                sendingmultiple: function sendingmultiple() {},
                success: function success(file) { if (file.previewElement) { return file.previewElement.classList.add("dz-success") } },
                successmultiple: function successmultiple() {},
                canceled: function canceled(file) { return this.emit("error", file, this.options.dictUploadCanceled) },
                canceledmultiple: function canceledmultiple() {},
                complete: function complete(file) {
                    if (file._removeLink) { file._removeLink.innerHTML = this.options.dictRemoveFile }
                    if (file.previewElement) { return file.previewElement.classList.add("dz-complete") }
                },
                completemultiple: function completemultiple() {},
                maxfilesexceeded: function maxfilesexceeded() {},
                maxfilesreached: function maxfilesreached() {},
                queuecomplete: function queuecomplete() {},
                addedfiles: function addedfiles() {}
            };
            this.prototype._thumbnailQueue = [];
            this.prototype._processingThumbnail = !1
        }
    }, {
        key: "extend",
        value: function extend(target) {
            for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) { objects[_key2 - 1] = arguments[_key2] }
            for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
                var object = _objects[_i];
                for (var key in object) {
                    var val = object[key];
                    target[key] = val
                }
            }
            return target
        }
    }]);

    function Dropzone(el, options) {
        var _this;
        _classCallCheck(this, Dropzone);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropzone).call(this));
        var fallback, left;
        _this.element = el;
        _this.version = Dropzone.version;
        _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
        _this.clickableElements = [];
        _this.listeners = [];
        _this.files = [];
        if (typeof _this.element === "string") { _this.element = document.querySelector(_this.element) }
        if (!_this.element || _this.element.nodeType == null) { throw new Error("Invalid dropzone element.") }
        if (_this.element.dropzone) { throw new Error("Dropzone already attached.") }
        Dropzone.instances.push(_assertThisInitialized(_this));
        _this.element.dropzone = _assertThisInitialized(_this);
        var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
        _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {});
        if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) { return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this))) }
        if (_this.options.url == null) { _this.options.url = _this.element.getAttribute("action") }
        if (!_this.options.url) { throw new Error("No URL provided.") }
        if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) { throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.") }
        if (_this.options.uploadMultiple && _this.options.chunking) { throw new Error('You cannot set both: uploadMultiple and chunking.') }
        if (_this.options.acceptedMimeTypes) {
            _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
            delete _this.options.acceptedMimeTypes
        }
        if (_this.options.renameFilename != null) { _this.options.renameFile = function(file) { return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file) } }
        _this.options.method = _this.options.method.toUpperCase();
        if ((fallback = _this.getExistingFallback()) && fallback.parentNode) { fallback.parentNode.removeChild(fallback) }
        if (_this.options.previewsContainer !== !1) { if (_this.options.previewsContainer) { _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer") } else { _this.previewsContainer = _this.element } }
        if (_this.options.clickable) { if (_this.options.clickable === !0) { _this.clickableElements = [_this.element] } else { _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable") } }
        _this.init();
        return _this
    }
    _createClass(Dropzone, [{ key: "getAcceptedFiles", value: function getAcceptedFiles() { return this.files.filter(function(file) { return file.accepted }).map(function(file) { return file }) } }, { key: "getRejectedFiles", value: function getRejectedFiles() { return this.files.filter(function(file) { return !file.accepted }).map(function(file) { return file }) } }, { key: "getFilesWithStatus", value: function getFilesWithStatus(status) { return this.files.filter(function(file) { return file.status === status }).map(function(file) { return file }) } }, { key: "getQueuedFiles", value: function getQueuedFiles() { return this.getFilesWithStatus(Dropzone.QUEUED) } }, { key: "getUploadingFiles", value: function getUploadingFiles() { return this.getFilesWithStatus(Dropzone.UPLOADING) } }, { key: "getAddedFiles", value: function getAddedFiles() { return this.getFilesWithStatus(Dropzone.ADDED) } }, { key: "getActiveFiles", value: function getActiveFiles() { return this.files.filter(function(file) { return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED }).map(function(file) { return file }) } }, {
        key: "init",
        value: function init() {
            var _this3 = this;
            if (this.element.tagName === "form") { this.element.setAttribute("enctype", "multipart/form-data") }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) { this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>"))) }
            if (this.clickableElements.length) {
                var setupHiddenFileInput = function setupHiddenFileInput() {
                    if (_this3.hiddenFileInput) { _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput) }
                    _this3.hiddenFileInput = document.createElement("input");
                    _this3.hiddenFileInput.setAttribute("type", "file");
                    if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) { _this3.hiddenFileInput.setAttribute("multiple", "multiple") }
                    _this3.hiddenFileInput.className = "dz-hidden-input";
                    if (_this3.options.acceptedFiles !== null) { _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles) }
                    if (_this3.options.capture !== null) { _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture) }
                    _this3.hiddenFileInput.style.visibility = "hidden";
                    _this3.hiddenFileInput.style.position = "absolute";
                    _this3.hiddenFileInput.style.top = "0";
                    _this3.hiddenFileInput.style.left = "0";
                    _this3.hiddenFileInput.style.height = "0";
                    _this3.hiddenFileInput.style.width = "0";
                    Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
                    return _this3.hiddenFileInput.addEventListener("change", function() {
                        var files = _this3.hiddenFileInput.files;
                        if (files.length) {
                            var _iteratorNormalCompletion9 = !0;
                            var _didIteratorError9 = !1;
                            var _iteratorError9 = undefined;
                            try {
                                for (var _iterator9 = files[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = !0) {
                                    var file = _step9.value;
                                    _this3.addFile(file)
                                }
                            } catch (err) {
                                _didIteratorError9 = !0;
                                _iteratorError9 = err
                            } finally { try { if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) { _iterator9["return"]() } } finally { if (_didIteratorError9) { throw _iteratorError9 } } }
                        }
                        _this3.emit("addedfiles", files);
                        return setupHiddenFileInput()
                    })
                };
                setupHiddenFileInput()
            }
            this.URL = window.URL !== null ? window.URL : window.webkitURL;
            var _iteratorNormalCompletion10 = !0;
            var _didIteratorError10 = !1;
            var _iteratorError10 = undefined;
            try {
                for (var _iterator10 = this.events[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = !0) {
                    var eventName = _step10.value;
                    this.on(eventName, this.options[eventName])
                }
            } catch (err) {
                _didIteratorError10 = !0;
                _iteratorError10 = err
            } finally { try { if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) { _iterator10["return"]() } } finally { if (_didIteratorError10) { throw _iteratorError10 } } }
            this.on("uploadprogress", function() { return _this3.updateTotalUploadProgress() });
            this.on("removedfile", function() { return _this3.updateTotalUploadProgress() });
            this.on("canceled", function(file) { return _this3.emit("complete", file) });
            this.on("complete", function(file) { if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) { return setTimeout(function() { return _this3.emit("queuecomplete") }, 0) } });
            var containsFiles = function containsFiles(e) { return e.dataTransfer.types && e.dataTransfer.types.some(function(type) { return type == "Files" }) };
            var noPropagation = function noPropagation(e) {
                if (!containsFiles(e)) return;
                e.stopPropagation();
                if (e.preventDefault) { return e.preventDefault() } else { return e.returnValue = !1 }
            };
            this.listeners = [{
                element: this.element,
                events: {
                    "dragstart": function dragstart(e) { return _this3.emit("dragstart", e) },
                    "dragenter": function dragenter(e) { noPropagation(e); return _this3.emit("dragenter", e) },
                    "dragover": function dragover(e) {
                        var efct;
                        try { efct = e.dataTransfer.effectAllowed } catch (error) {}
                        e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                        noPropagation(e);
                        return _this3.emit("dragover", e)
                    },
                    "dragleave": function dragleave(e) { return _this3.emit("dragleave", e) },
                    "drop": function drop(e) { noPropagation(e); return _this3.drop(e) },
                    "dragend": function dragend(e) { return _this3.emit("dragend", e) }
                }
            }];
            this.clickableElements.forEach(function(clickableElement) {
                return _this3.listeners.push({
                    element: clickableElement,
                    events: {
                        "click": function click(evt) {
                            if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) { _this3.hiddenFileInput.click() }
                            return !0
                        }
                    }
                })
            });
            this.enable();
            return this.options.init.call(this)
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.disable();
            this.removeAllFiles(!0);
            if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1)
        }
    }, {
        key: "updateTotalUploadProgress",
        value: function updateTotalUploadProgress() {
            var totalUploadProgress;
            var totalBytesSent = 0;
            var totalBytes = 0;
            var activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
                var _iteratorNormalCompletion11 = !0;
                var _didIteratorError11 = !1;
                var _iteratorError11 = undefined;
                try {
                    for (var _iterator11 = this.getActiveFiles()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = !0) {
                        var file = _step11.value;
                        totalBytesSent += file.upload.bytesSent;
                        totalBytes += file.upload.total
                    }
                } catch (err) {
                    _didIteratorError11 = !0;
                    _iteratorError11 = err
                } finally { try { if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) { _iterator11["return"]() } } finally { if (_didIteratorError11) { throw _iteratorError11 } } }
                totalUploadProgress = 100 * totalBytesSent / totalBytes
            } else { totalUploadProgress = 100 }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent)
        }
    }, { key: "_getParamName", value: function _getParamName(n) { if (typeof this.options.paramName === "function") { return this.options.paramName(n) } else { return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "") } } }, {
        key: "_renameFile",
        value: function _renameFile(file) {
            if (typeof this.options.renameFile !== "function") { return file.name }
            return this.options.renameFile(file)
        }
    }, {
        key: "getFallbackForm",
        value: function getFallbackForm() {
            var existingFallback, form;
            if (existingFallback = this.getExistingFallback()) { return existingFallback }
            var fieldsString = "<div class=\"dz-fallback\">";
            if (this.options.dictFallbackText) { fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>") }
            fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
            var fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
                form.appendChild(fields)
            } else {
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method)
            }
            return form != null ? form : fields
        }
    }, {
        key: "getExistingFallback",
        value: function getExistingFallback() {
            var getFallback = function getFallback(elements) {
                var _iteratorNormalCompletion12 = !0;
                var _didIteratorError12 = !1;
                var _iteratorError12 = undefined;
                try { for (var _iterator12 = elements[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = !0) { var el = _step12.value; if (/(^| )fallback($| )/.test(el.className)) { return el } } } catch (err) {
                    _didIteratorError12 = !0;
                    _iteratorError12 = err
                } finally { try { if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) { _iterator12["return"]() } } finally { if (_didIteratorError12) { throw _iteratorError12 } } }
            };
            for (var _i2 = 0, _arr = ["div", "form"]; _i2 < _arr.length; _i2++) { var tagName = _arr[_i2]; var fallback; if (fallback = getFallback(this.element.getElementsByTagName(tagName))) { return fallback } }
        }
    }, {
        key: "setupEventListeners",
        value: function setupEventListeners() {
            return this.listeners.map(function(elementListeners) {
                return function() {
                    var result = [];
                    for (var event in elementListeners.events) {
                        var listener = elementListeners.events[event];
                        result.push(elementListeners.element.addEventListener(event, listener, !1))
                    }
                    return result
                }()
            })
        }
    }, {
        key: "removeEventListeners",
        value: function removeEventListeners() {
            return this.listeners.map(function(elementListeners) {
                return function() {
                    var result = [];
                    for (var event in elementListeners.events) {
                        var listener = elementListeners.events[event];
                        result.push(elementListeners.element.removeEventListener(event, listener, !1))
                    }
                    return result
                }()
            })
        }
    }, {
        key: "disable",
        value: function disable() {
            var _this4 = this;
            this.clickableElements.forEach(function(element) { return element.classList.remove("dz-clickable") });
            this.removeEventListeners();
            this.disabled = !0;
            return this.files.map(function(file) { return _this4.cancelUpload(file) })
        }
    }, {
        key: "enable",
        value: function enable() {
            delete this.disabled;
            this.clickableElements.forEach(function(element) { return element.classList.add("dz-clickable") });
            return this.setupEventListeners()
        }
    }, {
        key: "filesize",
        value: function filesize(size) {
            var selectedSize = 0;
            var selectedUnit = "b";
            if (size > 0) {
                var units = ['tb', 'gb', 'mb', 'kb', 'b'];
                for (var i = 0; i < units.length; i++) {
                    var unit = units[i];
                    var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break
                    }
                }
                selectedSize = Math.round(10 * selectedSize) / 10
            }
            return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit])
        }
    }, {
        key: "_updateMaxFilesReachedClass",
        value: function _updateMaxFilesReachedClass() {
            if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) { this.emit('maxfilesreached', this.files) }
                return this.element.classList.add("dz-max-files-reached")
            } else { return this.element.classList.remove("dz-max-files-reached") }
        }
    }, {
        key: "drop",
        value: function drop(e) {
            if (!e.dataTransfer) { return }
            this.emit("drop", e);
            var files = [];
            for (var i = 0; i < e.dataTransfer.files.length; i++) { files[i] = e.dataTransfer.files[i] }
            if (files.length) { var items = e.dataTransfer.items; if (items && items.length && items[0].webkitGetAsEntry != null) { this._addFilesFromItems(items) } else { this.handleFiles(files) } }
            this.emit("addedfiles", files)
        }
    }, {
        key: "paste",
        value: function paste(e) {
            if (__guard__(e != null ? e.clipboardData : undefined, function(x) { return x.items }) == null) { return }
            this.emit("paste", e);
            var items = e.clipboardData.items;
            if (items.length) { return this._addFilesFromItems(items) }
        }
    }, {
        key: "handleFiles",
        value: function handleFiles(files) {
            var _iteratorNormalCompletion13 = !0;
            var _didIteratorError13 = !1;
            var _iteratorError13 = undefined;
            try {
                for (var _iterator13 = files[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = !0) {
                    var file = _step13.value;
                    this.addFile(file)
                }
            } catch (err) {
                _didIteratorError13 = !0;
                _iteratorError13 = err
            } finally { try { if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) { _iterator13["return"]() } } finally { if (_didIteratorError13) { throw _iteratorError13 } } }
        }
    }, {
        key: "_addFilesFromItems",
        value: function _addFilesFromItems(items) {
            var _this5 = this;
            return function() {
                var result = [];
                var _iteratorNormalCompletion14 = !0;
                var _didIteratorError14 = !1;
                var _iteratorError14 = undefined;
                try { for (var _iterator14 = items[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = !0) { var item = _step14.value; var entry; if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) { if (entry.isFile) { result.push(_this5.addFile(item.getAsFile())) } else if (entry.isDirectory) { result.push(_this5._addFilesFromDirectory(entry, entry.name)) } else { result.push(undefined) } } else if (item.getAsFile != null) { if (item.kind == null || item.kind === "file") { result.push(_this5.addFile(item.getAsFile())) } else { result.push(undefined) } } else { result.push(undefined) } } } catch (err) {
                    _didIteratorError14 = !0;
                    _iteratorError14 = err
                } finally { try { if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) { _iterator14["return"]() } } finally { if (_didIteratorError14) { throw _iteratorError14 } } }
                return result
            }()
        }
    }, {
        key: "_addFilesFromDirectory",
        value: function _addFilesFromDirectory(directory, path) {
            var _this6 = this;
            var dirReader = directory.createReader();
            var errorHandler = function errorHandler(error) { return __guardMethod__(console, 'log', function(o) { return o.log(error) }) };
            var readEntries = function readEntries() {
                return dirReader.readEntries(function(entries) {
                    if (entries.length > 0) {
                        var _iteratorNormalCompletion15 = !0;
                        var _didIteratorError15 = !1;
                        var _iteratorError15 = undefined;
                        try {
                            for (var _iterator15 = entries[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = !0) {
                                var entry = _step15.value;
                                if (entry.isFile) {
                                    entry.file(function(file) {
                                        if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') { return }
                                        file.fullPath = "".concat(path, "/").concat(file.name);
                                        return _this6.addFile(file)
                                    })
                                } else if (entry.isDirectory) { _this6._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name)) }
                            }
                        } catch (err) {
                            _didIteratorError15 = !0;
                            _iteratorError15 = err
                        } finally { try { if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) { _iterator15["return"]() } } finally { if (_didIteratorError15) { throw _iteratorError15 } } }
                        readEntries()
                    }
                    return null
                }, errorHandler)
            };
            return readEntries()
        }
    }, {
        key: "accept",
        value: function accept(file, done) {
            if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) { done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) { done(this.options.dictInvalidFileType) } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                this.emit("maxfilesexceeded", file)
            } else { this.options.accept.call(this, file, done) }
        }
    }, {
        key: "addFile",
        value: function addFile(file) {
            var _this7 = this;
            file.upload = { uuid: Dropzone.uuidv4(), progress: 0, total: file.size, bytesSent: 0, filename: this._renameFile(file) };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            this.accept(file, function(error) {
                if (error) {
                    file.accepted = !1;
                    _this7._errorProcessing([file], error)
                } else { file.accepted = !0; if (_this7.options.autoQueue) { _this7.enqueueFile(file) } }
                _this7._updateMaxFilesReachedClass()
            })
        }
    }, {
        key: "enqueueFiles",
        value: function enqueueFiles(files) {
            var _iteratorNormalCompletion16 = !0;
            var _didIteratorError16 = !1;
            var _iteratorError16 = undefined;
            try {
                for (var _iterator16 = files[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = !0) {
                    var file = _step16.value;
                    this.enqueueFile(file)
                }
            } catch (err) {
                _didIteratorError16 = !0;
                _iteratorError16 = err
            } finally { try { if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) { _iterator16["return"]() } } finally { if (_didIteratorError16) { throw _iteratorError16 } } }
            return null
        }
    }, { key: "enqueueFile", value: function enqueueFile(file) { var _this8 = this; if (file.status === Dropzone.ADDED && file.accepted === !0) { file.status = Dropzone.QUEUED; if (this.options.autoProcessQueue) { return setTimeout(function() { return _this8.processQueue() }, 0) } } else { throw new Error("This file can't be queued because it has already been processed or was rejected.") } } }, { key: "_enqueueThumbnail", value: function _enqueueThumbnail(file) { var _this9 = this; if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) { this._thumbnailQueue.push(file); return setTimeout(function() { return _this9._processThumbnailQueue() }, 0) } } }, {
        key: "_processThumbnailQueue",
        value: function _processThumbnailQueue() {
            var _this10 = this;
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) { return }
            this._processingThumbnail = !0;
            var file = this._thumbnailQueue.shift();
            return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(dataUrl) {
                _this10.emit("thumbnail", file, dataUrl);
                _this10._processingThumbnail = !1;
                return _this10._processThumbnailQueue()
            })
        }
    }, {
        key: "removeFile",
        value: function removeFile(file) {
            if (file.status === Dropzone.UPLOADING) { this.cancelUpload(file) }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) { return this.emit("reset") }
        }
    }, {
        key: "removeAllFiles",
        value: function removeAllFiles(cancelIfNecessary) {
            if (cancelIfNecessary == null) { cancelIfNecessary = !1 }
            var _iteratorNormalCompletion17 = !0;
            var _didIteratorError17 = !1;
            var _iteratorError17 = undefined;
            try { for (var _iterator17 = this.files.slice()[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = !0) { var file = _step17.value; if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) { this.removeFile(file) } } } catch (err) {
                _didIteratorError17 = !0;
                _iteratorError17 = err
            } finally { try { if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) { _iterator17["return"]() } } finally { if (_didIteratorError17) { throw _iteratorError17 } } }
            return null
        }
    }, {
        key: "resizeImage",
        value: function resizeImage(file, width, height, resizeMethod, callback) {
            var _this11 = this;
            return this.createThumbnail(file, width, height, resizeMethod, !0, function(dataUrl, canvas) {
                if (canvas == null) { return callback(file) } else {
                    var resizeMimeType = _this11.options.resizeMimeType;
                    if (resizeMimeType == null) { resizeMimeType = file.type }
                    var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);
                    if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') { resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL) }
                    return callback(Dropzone.dataURItoBlob(resizedDataURL))
                }
            })
        }
    }, {
        key: "createThumbnail",
        value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
            var _this12 = this;
            var fileReader = new FileReader();
            fileReader.onload = function() {
                file.dataURL = fileReader.result;
                if (file.type === "image/svg+xml") {
                    if (callback != null) { callback(fileReader.result) }
                    return
                }
                _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback)
            };
            fileReader.readAsDataURL(file)
        }
    }, {
        key: "displayExistingFile",
        value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
            var _this13 = this;
            var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
            this.emit("addedfile", mockFile);
            this.emit("complete", mockFile);
            if (!resizeThumbnail) { this.emit("thumbnail", mockFile, imageUrl); if (callback) callback() } else {
                var onDone = function onDone(thumbnail) { _this13.emit('thumbnail', mockFile, thumbnail); if (callback) callback() };
                mockFile.dataURL = imageUrl;
                this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, onDone, crossOrigin)
            }
        }
    }, {
        key: "createThumbnailFromUrl",
        value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
            var _this14 = this;
            var img = document.createElement("img");
            if (crossOrigin) { img.crossOrigin = crossOrigin }
            img.onload = function() {
                var loadExif = function loadExif(callback) { return callback(1) };
                if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) { loadExif = function loadExif(callback) { return EXIF.getData(img, function() { return callback(EXIF.getTag(this, 'Orientation')) }) } }
                return loadExif(function(orientation) {
                    file.width = img.width;
                    file.height = img.height;
                    var resizeInfo = _this14.options.resize.call(_this14, file, width, height, resizeMethod);
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    if (orientation > 4) {
                        canvas.width = resizeInfo.trgHeight;
                        canvas.height = resizeInfo.trgWidth
                    }
                    switch (orientation) {
                        case 2:
                            ctx.translate(canvas.width, 0);
                            ctx.scale(-1, 1);
                            break;
                        case 3:
                            ctx.translate(canvas.width, canvas.height);
                            ctx.rotate(Math.PI);
                            break;
                        case 4:
                            ctx.translate(0, canvas.height);
                            ctx.scale(1, -1);
                            break;
                        case 5:
                            ctx.rotate(0.5 * Math.PI);
                            ctx.scale(1, -1);
                            break;
                        case 6:
                            ctx.rotate(0.5 * Math.PI);
                            ctx.translate(0, -canvas.width);
                            break;
                        case 7:
                            ctx.rotate(0.5 * Math.PI);
                            ctx.translate(canvas.height, -canvas.width);
                            ctx.scale(-1, 1);
                            break;
                        case 8:
                            ctx.rotate(-0.5 * Math.PI);
                            ctx.translate(-canvas.height, 0);
                            break
                    }
                    drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    var thumbnail = canvas.toDataURL("image/png");
                    if (callback != null) { return callback(thumbnail, canvas) }
                })
            };
            if (callback != null) { img.onerror = callback }
            return img.src = file.dataURL
        }
    }, {
        key: "processQueue",
        value: function processQueue() {
            var parallelUploads = this.options.parallelUploads;
            var processingLength = this.getUploadingFiles().length;
            var i = processingLength;
            if (processingLength >= parallelUploads) { return }
            var queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) { return }
            if (this.options.uploadMultiple) { return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength)) } else {
                while (i < parallelUploads) {
                    if (!queuedFiles.length) { return }
                    this.processFile(queuedFiles.shift());
                    i++
                }
            }
        }
    }, { key: "processFile", value: function processFile(file) { return this.processFiles([file]) } }, {
        key: "processFiles",
        value: function processFiles(files) {
            var _iteratorNormalCompletion18 = !0;
            var _didIteratorError18 = !1;
            var _iteratorError18 = undefined;
            try {
                for (var _iterator18 = files[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = !0) {
                    var file = _step18.value;
                    file.processing = !0;
                    file.status = Dropzone.UPLOADING;
                    this.emit("processing", file)
                }
            } catch (err) {
                _didIteratorError18 = !0;
                _iteratorError18 = err
            } finally { try { if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) { _iterator18["return"]() } } finally { if (_didIteratorError18) { throw _iteratorError18 } } }
            if (this.options.uploadMultiple) { this.emit("processingmultiple", files) }
            return this.uploadFiles(files)
        }
    }, { key: "_getFilesWithXhr", value: function _getFilesWithXhr(xhr) { var files; return files = this.files.filter(function(file) { return file.xhr === xhr }).map(function(file) { return file }) } }, {
        key: "cancelUpload",
        value: function cancelUpload(file) {
            if (file.status === Dropzone.UPLOADING) {
                var groupedFiles = this._getFilesWithXhr(file.xhr);
                var _iteratorNormalCompletion19 = !0;
                var _didIteratorError19 = !1;
                var _iteratorError19 = undefined;
                try {
                    for (var _iterator19 = groupedFiles[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = !0) {
                        var groupedFile = _step19.value;
                        groupedFile.status = Dropzone.CANCELED
                    }
                } catch (err) {
                    _didIteratorError19 = !0;
                    _iteratorError19 = err
                } finally { try { if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) { _iterator19["return"]() } } finally { if (_didIteratorError19) { throw _iteratorError19 } } }
                if (typeof file.xhr !== 'undefined') { file.xhr.abort() }
                var _iteratorNormalCompletion20 = !0;
                var _didIteratorError20 = !1;
                var _iteratorError20 = undefined;
                try {
                    for (var _iterator20 = groupedFiles[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = !0) {
                        var _groupedFile = _step20.value;
                        this.emit("canceled", _groupedFile)
                    }
                } catch (err) {
                    _didIteratorError20 = !0;
                    _iteratorError20 = err
                } finally { try { if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) { _iterator20["return"]() } } finally { if (_didIteratorError20) { throw _iteratorError20 } } }
                if (this.options.uploadMultiple) { this.emit("canceledmultiple", groupedFiles) }
            } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);
                if (this.options.uploadMultiple) { this.emit("canceledmultiple", [file]) }
            }
            if (this.options.autoProcessQueue) { return this.processQueue() }
        }
    }, {
        key: "resolveOption",
        value: function resolveOption(option) {
            if (typeof option === 'function') {
                for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) { args[_key3 - 1] = arguments[_key3] }
                return option.apply(this, args)
            }
            return option
        }
    }, { key: "uploadFile", value: function uploadFile(file) { return this.uploadFiles([file]) } }, {
        key: "uploadFiles",
        value: function uploadFiles(files) {
            var _this15 = this;
            this._transformFiles(files, function(transformedFiles) {
                if (_this15.options.chunking) {
                    var transformedFile = transformedFiles[0];
                    files[0].upload.chunked = _this15.options.chunking && (_this15.options.forceChunking || transformedFile.size > _this15.options.chunkSize);
                    files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this15.options.chunkSize)
                }
                if (files[0].upload.chunked) {
                    var file = files[0];
                    var _transformedFile = transformedFiles[0];
                    var startedChunkCount = 0;
                    file.upload.chunks = [];
                    var handleNextChunk = function handleNextChunk() {
                        var chunkIndex = 0;
                        while (file.upload.chunks[chunkIndex] !== undefined) { chunkIndex++ }
                        if (chunkIndex >= file.upload.totalChunkCount) return;
                        startedChunkCount++;
                        var start = chunkIndex * _this15.options.chunkSize;
                        var end = Math.min(start + _this15.options.chunkSize, file.size);
                        var dataBlock = { name: _this15._getParamName(0), data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end), filename: file.upload.filename, chunkIndex: chunkIndex };
                        file.upload.chunks[chunkIndex] = { file: file, index: chunkIndex, dataBlock: dataBlock, status: Dropzone.UPLOADING, progress: 0, retries: 0 };
                        _this15._uploadData(files, [dataBlock])
                    };
                    file.upload.finishedChunkUpload = function(chunk) {
                        var allFinished = !0;
                        chunk.status = Dropzone.SUCCESS;
                        chunk.dataBlock = null;
                        chunk.xhr = null;
                        for (var i = 0; i < file.upload.totalChunkCount; i++) {
                            if (file.upload.chunks[i] === undefined) { return handleNextChunk() }
                            if (file.upload.chunks[i].status !== Dropzone.SUCCESS) { allFinished = !1 }
                        }
                        if (allFinished) { _this15.options.chunksUploaded(file, function() { _this15._finished(files, '', null) }) }
                    };
                    if (_this15.options.parallelChunkUploads) { for (var i = 0; i < file.upload.totalChunkCount; i++) { handleNextChunk() } } else { handleNextChunk() }
                } else {
                    var dataBlocks = [];
                    for (var _i3 = 0; _i3 < files.length; _i3++) { dataBlocks[_i3] = { name: _this15._getParamName(_i3), data: transformedFiles[_i3], filename: files[_i3].upload.filename } }
                    _this15._uploadData(files, dataBlocks)
                }
            })
        }
    }, { key: "_getChunk", value: function _getChunk(file, xhr) { for (var i = 0; i < file.upload.totalChunkCount; i++) { if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) { return file.upload.chunks[i] } } } }, {
        key: "_uploadData",
        value: function _uploadData(files, dataBlocks) {
            var _this16 = this;
            var xhr = new XMLHttpRequest();
            var _iteratorNormalCompletion21 = !0;
            var _didIteratorError21 = !1;
            var _iteratorError21 = undefined;
            try {
                for (var _iterator21 = files[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = !0) {
                    var file = _step21.value;
                    file.xhr = xhr
                }
            } catch (err) {
                _didIteratorError21 = !0;
                _iteratorError21 = err
            } finally { try { if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) { _iterator21["return"]() } } finally { if (_didIteratorError21) { throw _iteratorError21 } } }
            if (files[0].upload.chunked) { files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr }
            var method = this.resolveOption(this.options.method, files);
            var url = this.resolveOption(this.options.url, files);
            xhr.open(method, url, !0);
            xhr.timeout = this.resolveOption(this.options.timeout, files);
            xhr.withCredentials = !!this.options.withCredentials;
            xhr.onload = function(e) { _this16._finishedUploading(files, xhr, e) };
            xhr.ontimeout = function() { _this16._handleUploadError(files, xhr, "Request timedout after ".concat(_this16.options.timeout, " seconds")) };
            xhr.onerror = function() { _this16._handleUploadError(files, xhr) };
            var progressObj = xhr.upload != null ? xhr.upload : xhr;
            progressObj.onprogress = function(e) { return _this16._updateFilesUploadProgress(files, xhr, e) };
            var headers = { "Accept": "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" };
            if (this.options.headers) { Dropzone.extend(headers, this.options.headers) }
            for (var headerName in headers) { var headerValue = headers[headerName]; if (headerValue) { xhr.setRequestHeader(headerName, headerValue) } }
            var formData = new FormData();
            if (this.options.params) {
                var additionalParams = this.options.params;
                if (typeof additionalParams === 'function') { additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null) }
                for (var key in additionalParams) {
                    var value = additionalParams[key];
                    formData.append(key, value)
                }
            }
            var _iteratorNormalCompletion22 = !0;
            var _didIteratorError22 = !1;
            var _iteratorError22 = undefined;
            try {
                for (var _iterator22 = files[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = !0) {
                    var _file = _step22.value;
                    this.emit("sending", _file, xhr, formData)
                }
            } catch (err) {
                _didIteratorError22 = !0;
                _iteratorError22 = err
            } finally { try { if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) { _iterator22["return"]() } } finally { if (_didIteratorError22) { throw _iteratorError22 } } }
            if (this.options.uploadMultiple) { this.emit("sendingmultiple", files, xhr, formData) }
            this._addFormElementData(formData);
            for (var i = 0; i < dataBlocks.length; i++) {
                var dataBlock = dataBlocks[i];
                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename)
            }
            this.submitRequest(xhr, formData, files)
        }
    }, { key: "_transformFiles", value: function _transformFiles(files, done) { var _this17 = this; var transformedFiles = []; var doneCounter = 0; var _loop = function _loop(i) { _this17.options.transformFile.call(_this17, files[i], function(transformedFile) { transformedFiles[i] = transformedFile; if (++doneCounter === files.length) { done(transformedFiles) } }) }; for (var i = 0; i < files.length; i++) { _loop(i) } } }, {
        key: "_addFormElementData",
        value: function _addFormElementData(formData) {
            if (this.element.tagName === "FORM") {
                var _iteratorNormalCompletion23 = !0;
                var _didIteratorError23 = !1;
                var _iteratorError23 = undefined;
                try {
                    for (var _iterator23 = this.element.querySelectorAll("input, textarea, select, button")[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = !0) {
                        var input = _step23.value;
                        var inputName = input.getAttribute("name");
                        var inputType = input.getAttribute("type");
                        if (inputType) inputType = inputType.toLowerCase();
                        if (typeof inputName === 'undefined' || inputName === null) continue;
                        if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                            var _iteratorNormalCompletion24 = !0;
                            var _didIteratorError24 = !1;
                            var _iteratorError24 = undefined;
                            try { for (var _iterator24 = input.options[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = !0) { var option = _step24.value; if (option.selected) { formData.append(inputName, option.value) } } } catch (err) {
                                _didIteratorError24 = !0;
                                _iteratorError24 = err
                            } finally { try { if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) { _iterator24["return"]() } } finally { if (_didIteratorError24) { throw _iteratorError24 } } }
                        } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) { formData.append(inputName, input.value) }
                    }
                } catch (err) {
                    _didIteratorError23 = !0;
                    _iteratorError23 = err
                } finally { try { if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) { _iterator23["return"]() } } finally { if (_didIteratorError23) { throw _iteratorError23 } } }
            }
        }
    }, {
        key: "_updateFilesUploadProgress",
        value: function _updateFilesUploadProgress(files, xhr, e) {
            var progress;
            if (typeof e !== 'undefined') {
                progress = 100 * e.loaded / e.total;
                if (files[0].upload.chunked) {
                    var file = files[0];
                    var chunk = this._getChunk(file, xhr);
                    chunk.progress = progress;
                    chunk.total = e.total;
                    chunk.bytesSent = e.loaded;
                    var fileProgress = 0,
                        fileTotal, fileBytesSent;
                    file.upload.progress = 0;
                    file.upload.total = 0;
                    file.upload.bytesSent = 0;
                    for (var i = 0; i < file.upload.totalChunkCount; i++) {
                        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
                            file.upload.progress += file.upload.chunks[i].progress;
                            file.upload.total += file.upload.chunks[i].total;
                            file.upload.bytesSent += file.upload.chunks[i].bytesSent
                        }
                    }
                    file.upload.progress = file.upload.progress / file.upload.totalChunkCount
                } else {
                    var _iteratorNormalCompletion25 = !0;
                    var _didIteratorError25 = !1;
                    var _iteratorError25 = undefined;
                    try {
                        for (var _iterator25 = files[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = !0) {
                            var _file2 = _step25.value;
                            _file2.upload.progress = progress;
                            _file2.upload.total = e.total;
                            _file2.upload.bytesSent = e.loaded
                        }
                    } catch (err) {
                        _didIteratorError25 = !0;
                        _iteratorError25 = err
                    } finally { try { if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) { _iterator25["return"]() } } finally { if (_didIteratorError25) { throw _iteratorError25 } } }
                }
                var _iteratorNormalCompletion26 = !0;
                var _didIteratorError26 = !1;
                var _iteratorError26 = undefined;
                try {
                    for (var _iterator26 = files[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = !0) {
                        var _file3 = _step26.value;
                        this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent)
                    }
                } catch (err) {
                    _didIteratorError26 = !0;
                    _iteratorError26 = err
                } finally { try { if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) { _iterator26["return"]() } } finally { if (_didIteratorError26) { throw _iteratorError26 } } }
            } else {
                var allFilesFinished = !0;
                progress = 100;
                var _iteratorNormalCompletion27 = !0;
                var _didIteratorError27 = !1;
                var _iteratorError27 = undefined;
                try {
                    for (var _iterator27 = files[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = !0) {
                        var _file4 = _step27.value;
                        if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) { allFilesFinished = !1 }
                        _file4.upload.progress = progress;
                        _file4.upload.bytesSent = _file4.upload.total
                    }
                } catch (err) {
                    _didIteratorError27 = !0;
                    _iteratorError27 = err
                } finally { try { if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) { _iterator27["return"]() } } finally { if (_didIteratorError27) { throw _iteratorError27 } } }
                if (allFilesFinished) { return }
                var _iteratorNormalCompletion28 = !0;
                var _didIteratorError28 = !1;
                var _iteratorError28 = undefined;
                try {
                    for (var _iterator28 = files[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = !0) {
                        var _file5 = _step28.value;
                        this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent)
                    }
                } catch (err) {
                    _didIteratorError28 = !0;
                    _iteratorError28 = err
                } finally { try { if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) { _iterator28["return"]() } } finally { if (_didIteratorError28) { throw _iteratorError28 } } }
            }
        }
    }, {
        key: "_finishedUploading",
        value: function _finishedUploading(files, xhr, e) {
            var response;
            if (files[0].status === Dropzone.CANCELED) { return }
            if (xhr.readyState !== 4) { return }
            if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
                response = xhr.responseText;
                if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                    try { response = JSON.parse(response) } catch (error) {
                        e = error;
                        response = "Invalid JSON response from server."
                    }
                }
            }
            this._updateFilesUploadProgress(files);
            if (!(200 <= xhr.status && xhr.status < 300)) { this._handleUploadError(files, xhr, response) } else { if (files[0].upload.chunked) { files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr)) } else { this._finished(files, response, e) } }
        }
    }, {
        key: "_handleUploadError",
        value: function _handleUploadError(files, xhr, response) {
            if (files[0].status === Dropzone.CANCELED) { return }
            if (files[0].upload.chunked && this.options.retryChunks) { var chunk = this._getChunk(files[0], xhr); if (chunk.retries++ < this.options.retryChunksLimit) { this._uploadData(files, [chunk.dataBlock]); return } else { console.warn('Retried this chunk too often. Giving up.') } }
            this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr)
        }
    }, { key: "submitRequest", value: function submitRequest(xhr, formData, files) { xhr.send(formData) } }, {
        key: "_finished",
        value: function _finished(files, responseText, e) {
            var _iteratorNormalCompletion29 = !0;
            var _didIteratorError29 = !1;
            var _iteratorError29 = undefined;
            try {
                for (var _iterator29 = files[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = !0) {
                    var file = _step29.value;
                    file.status = Dropzone.SUCCESS;
                    this.emit("success", file, responseText, e);
                    this.emit("complete", file)
                }
            } catch (err) {
                _didIteratorError29 = !0;
                _iteratorError29 = err
            } finally { try { if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) { _iterator29["return"]() } } finally { if (_didIteratorError29) { throw _iteratorError29 } } }
            if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files)
            }
            if (this.options.autoProcessQueue) { return this.processQueue() }
        }
    }, {
        key: "_errorProcessing",
        value: function _errorProcessing(files, message, xhr) {
            var _iteratorNormalCompletion30 = !0;
            var _didIteratorError30 = !1;
            var _iteratorError30 = undefined;
            try {
                for (var _iterator30 = files[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = !0) {
                    var file = _step30.value;
                    file.status = Dropzone.ERROR;
                    this.emit("error", file, message, xhr);
                    this.emit("complete", file)
                }
            } catch (err) {
                _didIteratorError30 = !0;
                _iteratorError30 = err
            } finally { try { if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) { _iterator30["return"]() } } finally { if (_didIteratorError30) { throw _iteratorError30 } } }
            if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files)
            }
            if (this.options.autoProcessQueue) { return this.processQueue() }
        }
    }], [{
        key: "uuidv4",
        value: function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16)
            })
        }
    }]);
    return Dropzone
}(Emitter);
Dropzone.initClass();
Dropzone.version = "5.7.0";
Dropzone.options = {};
Dropzone.optionsForElement = function(element) { if (element.getAttribute("id")) { return Dropzone.options[camelize(element.getAttribute("id"))] } else { return undefined } };
Dropzone.instances = [];
Dropzone.forElement = function(element) {
    if (typeof element === "string") { element = document.querySelector(element) }
    if ((element != null ? element.dropzone : undefined) == null) { throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.") }
    return element.dropzone
};
Dropzone.autoDiscover = !0;
Dropzone.discover = function() {
    var dropzones;
    if (document.querySelectorAll) { dropzones = document.querySelectorAll(".dropzone") } else {
        dropzones = [];
        var checkElements = function checkElements(elements) {
            return function() {
                var result = [];
                var _iteratorNormalCompletion31 = !0;
                var _didIteratorError31 = !1;
                var _iteratorError31 = undefined;
                try { for (var _iterator31 = elements[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = !0) { var el = _step31.value; if (/(^| )dropzone($| )/.test(el.className)) { result.push(dropzones.push(el)) } else { result.push(undefined) } } } catch (err) {
                    _didIteratorError31 = !0;
                    _iteratorError31 = err
                } finally { try { if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) { _iterator31["return"]() } } finally { if (_didIteratorError31) { throw _iteratorError31 } } }
                return result
            }()
        };
        checkElements(document.getElementsByTagName("div"));
        checkElements(document.getElementsByTagName("form"))
    }
    return function() {
        var result = [];
        var _iteratorNormalCompletion32 = !0;
        var _didIteratorError32 = !1;
        var _iteratorError32 = undefined;
        try { for (var _iterator32 = dropzones[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = !0) { var dropzone = _step32.value; if (Dropzone.optionsForElement(dropzone) !== !1) { result.push(new Dropzone(dropzone)) } else { result.push(undefined) } } } catch (err) {
            _didIteratorError32 = !0;
            _iteratorError32 = err
        } finally { try { if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) { _iterator32["return"]() } } finally { if (_didIteratorError32) { throw _iteratorError32 } } }
        return result
    }()
};
Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i];
Dropzone.isBrowserSupported = function() {
    var capableBrowser = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
        if (!("classList" in document.createElement("a"))) { capableBrowser = !1 } else {
            var _iteratorNormalCompletion33 = !0;
            var _didIteratorError33 = !1;
            var _iteratorError33 = undefined;
            try { for (var _iterator33 = Dropzone.blacklistedBrowsers[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = !0) { var regex = _step33.value; if (regex.test(navigator.userAgent)) { capableBrowser = !1; continue } } } catch (err) {
                _didIteratorError33 = !0;
                _iteratorError33 = err
            } finally { try { if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) { _iterator33["return"]() } } finally { if (_didIteratorError33) { throw _iteratorError33 } } }
        }
    } else { capableBrowser = !1 }
    return capableBrowser
};
Dropzone.dataURItoBlob = function(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) { ia[i] = byteString.charCodeAt(i) }
    return new Blob([ab], { type: mimeString })
};
var without = function without(list, rejectedItem) { return list.filter(function(item) { return item !== rejectedItem }).map(function(item) { return item }) };
var camelize = function camelize(str) { return str.replace(/[\-_](\w)/g, function(match) { return match.charAt(1).toUpperCase() }) };
Dropzone.createElement = function(string) {
    var div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0]
};
Dropzone.elementInside = function(element, container) {
    if (element === container) { return !0 }
    while (element = element.parentNode) { if (element === container) { return !0 } }
    return !1
};
Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") { element = document.querySelector(el) } else if (el.nodeType != null) { element = el }
    if (element == null) { throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element.")) }
    return element
};
Dropzone.getElements = function(els, name) {
    var el, elements;
    if (els instanceof Array) {
        elements = [];
        try {
            var _iteratorNormalCompletion34 = !0;
            var _didIteratorError34 = !1;
            var _iteratorError34 = undefined;
            try {
                for (var _iterator34 = els[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = !0) {
                    el = _step34.value;
                    elements.push(this.getElement(el, name))
                }
            } catch (err) {
                _didIteratorError34 = !0;
                _iteratorError34 = err
            } finally { try { if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) { _iterator34["return"]() } } finally { if (_didIteratorError34) { throw _iteratorError34 } } }
        } catch (e) { elements = null }
    } else if (typeof els === "string") {
        elements = [];
        var _iteratorNormalCompletion35 = !0;
        var _didIteratorError35 = !1;
        var _iteratorError35 = undefined;
        try {
            for (var _iterator35 = document.querySelectorAll(els)[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = !0) {
                el = _step35.value;
                elements.push(el)
            }
        } catch (err) {
            _didIteratorError35 = !0;
            _iteratorError35 = err
        } finally { try { if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) { _iterator35["return"]() } } finally { if (_didIteratorError35) { throw _iteratorError35 } } }
    } else if (els.nodeType != null) { elements = [els] }
    if (elements == null || !elements.length) { throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.")) }
    return elements
};
Dropzone.confirm = function(question, accepted, rejected) { if (window.confirm(question)) { return accepted() } else if (rejected != null) { return rejected() } };
Dropzone.isValidFile = function(file, acceptedFiles) {
    if (!acceptedFiles) { return !0 }
    acceptedFiles = acceptedFiles.split(",");
    var mimeType = file.type;
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    var _iteratorNormalCompletion36 = !0;
    var _didIteratorError36 = !1;
    var _iteratorError36 = undefined;
    try {
        for (var _iterator36 = acceptedFiles[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = !0) {
            var validType = _step36.value;
            validType = validType.trim();
            if (validType.charAt(0) === ".") { if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) { return !0 } } else if (/\/\*$/.test(validType)) { if (baseMimeType === validType.replace(/\/.*$/, "")) { return !0 } } else { if (mimeType === validType) { return !0 } }
        }
    } catch (err) {
        _didIteratorError36 = !0;
        _iteratorError36 = err
    } finally { try { if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) { _iterator36["return"]() } } finally { if (_didIteratorError36) { throw _iteratorError36 } } }
    return !1
};
if (typeof jQuery !== 'undefined' && jQuery !== null) { jQuery.fn.dropzone = function(options) { return this.each(function() { return new Dropzone(this, options) }) } }
if (typeof module !== 'undefined' && module !== null) { module.exports = Dropzone } else { window.Dropzone = Dropzone }
Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued";
Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING;
Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";
var detectVerticalSquash = function detectVerticalSquash(img) {
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    var canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
        data = _ctx$getImageData.data;
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) { ey = py } else { sy = py }
        py = ey + sy >> 1
    }
    var ratio = py / ih;
    if (ratio === 0) { return 1 } else { return ratio }
};
var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) { var vertSquashRatio = detectVerticalSquash(img); return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio) };
var ExifRestore = function() {
    function ExifRestore() { _classCallCheck(this, ExifRestore) }
    _createClass(ExifRestore, null, [{ key: "initClass", value: function initClass() { this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' } }, {
        key: "encode64",
        value: function encode64(input) {
            var output = '';
            var chr1 = undefined;
            var chr2 = undefined;
            var chr3 = '';
            var enc1 = undefined;
            var enc2 = undefined;
            var enc3 = undefined;
            var enc4 = '';
            var i = 0;
            while (!0) {
                chr1 = input[i++];
                chr2 = input[i++];
                chr3 = input[i++];
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) { enc3 = enc4 = 64 } else if (isNaN(chr3)) { enc4 = 64 }
                output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                chr1 = chr2 = chr3 = '';
                enc1 = enc2 = enc3 = enc4 = '';
                if (!(i < input.length)) { break }
            }
            return output
        }
    }, {
        key: "restore",
        value: function restore(origFileBase64, resizedFileBase64) {
            if (!origFileBase64.match('data:image/jpeg;base64,')) { return resizedFileBase64 }
            var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
            var segments = this.slice2Segments(rawImage);
            var image = this.exifManipulation(resizedFileBase64, segments);
            return "data:image/jpeg;base64,".concat(this.encode64(image))
        }
    }, { key: "exifManipulation", value: function exifManipulation(resizedFileBase64, segments) { var exifArray = this.getExifArray(segments); var newImageArray = this.insertExif(resizedFileBase64, exifArray); var aBuffer = new Uint8Array(newImageArray); return aBuffer } }, {
        key: "getExifArray",
        value: function getExifArray(segments) {
            var seg = undefined;
            var x = 0;
            while (x < segments.length) {
                seg = segments[x];
                if (seg[0] === 255 & seg[1] === 225) { return seg }
                x++
            }
            return []
        }
    }, {
        key: "insertExif",
        value: function insertExif(resizedFileBase64, exifArray) {
            var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
            var buf = this.decode64(imageData);
            var separatePoint = buf.indexOf(255, 3);
            var mae = buf.slice(0, separatePoint);
            var ato = buf.slice(separatePoint);
            var array = mae;
            array = array.concat(exifArray);
            array = array.concat(ato);
            return array
        }
    }, {
        key: "slice2Segments",
        value: function slice2Segments(rawImageArray) {
            var head = 0;
            var segments = [];
            while (!0) {
                var length;
                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) { break }
                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) { head += 2 } else {
                    length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                    var endPoint = head + length + 2;
                    var seg = rawImageArray.slice(head, endPoint);
                    segments.push(seg);
                    head = endPoint
                }
                if (head > rawImageArray.length) { break }
            }
            return segments
        }
    }, {
        key: "decode64",
        value: function decode64(input) {
            var output = '';
            var chr1 = undefined;
            var chr2 = undefined;
            var chr3 = '';
            var enc1 = undefined;
            var enc2 = undefined;
            var enc3 = undefined;
            var enc4 = '';
            var i = 0;
            var buf = [];
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) { console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.') }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (!0) {
                enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                buf.push(chr1);
                if (enc3 !== 64) { buf.push(chr2) }
                if (enc4 !== 64) { buf.push(chr3) }
                chr1 = chr2 = chr3 = '';
                enc1 = enc2 = enc3 = enc4 = '';
                if (!(i < input.length)) { break }
            }
            return buf
        }
    }]);
    return ExifRestore
}();
ExifRestore.initClass();
var contentLoaded = function contentLoaded(win, fn) {
    var done = !1;
    var top = !0;
    var doc = win.document;
    var root = doc.documentElement;
    var add = doc.addEventListener ? "addEventListener" : "attachEvent";
    var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
    var pre = doc.addEventListener ? "" : "on";
    var init = function init(e) { if (e.type === "readystatechange" && doc.readyState !== "complete") { return }(e.type === "load" ? win : doc)[rem](pre + e.type, init, !1); if (!done && (done = !0)) { return fn.call(win, e.type || e) } };
    var poll = function poll() {
        try { root.doScroll("left") } catch (e) { setTimeout(poll, 50); return }
        return init("poll")
    };
    if (doc.readyState !== "complete") {
        if (doc.createEventObject && root.doScroll) {
            try { top = !win.frameElement } catch (error) {}
            if (top) { poll() }
        }
        doc[add](pre + "DOMContentLoaded", init, !1);
        doc[add](pre + "readystatechange", init, !1);
        return win[add](pre + "load", init, !1)
    }
};
Dropzone._autoDiscoverFunction = function() { if (Dropzone.autoDiscover) { return Dropzone.discover() } };
contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) { return typeof value !== 'undefined' && value !== null ? transform(value) : undefined }

function __guardMethod__(obj, methodName, transform) { if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') { return transform(obj, methodName) } else { return undefined } };
(function(name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) { define(definition) } else if (typeof module !== 'undefined' && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
})('Fingerprint2', this, function() {
    'use strict'
    var x64Add = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] + n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] + n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] + n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += m[0] + n[0]
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
    var x64Multiply = function(m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] * n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] * n[3]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[2] += m[3] * n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] * n[3]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[2] * n[2]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[3] * n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
    var x64Rotl = function(m, n) {
        n %= 64
        if (n === 32) { return [m[1], m[0]] } else if (n < 32) { return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))] } else {
            n -= 32
            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
        }
    }
    var x64LeftShift = function(m, n) {
        n %= 64
        if (n === 0) { return m } else if (n < 32) { return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n] } else { return [m[1] << (n - 32), 0] }
    }
    var x64Xor = function(m, n) { return [m[0] ^ n[0], m[1] ^ n[1]] }
    var x64Fmix = function(h) {
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
        h = x64Xor(h, [0, h[0] >>> 1])
        return h
    }
    var x64hash128 = function(key, seed) {
        key = key || ''
        seed = seed || 0
        var remainder = key.length % 16
        var bytes = key.length - remainder
        var h1 = [0, seed]
        var h2 = [0, seed]
        var k1 = [0, 0]
        var k2 = [0, 0]
        var c1 = [0x87c37b91, 0x114253d5]
        var c2 = [0x4cf5ad43, 0x2745937f]
        for (var i = 0; i < bytes; i = i + 16) {
            k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
            k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
            k1 = x64Multiply(k1, c1)
            k1 = x64Rotl(k1, 31)
            k1 = x64Multiply(k1, c2)
            h1 = x64Xor(h1, k1)
            h1 = x64Rotl(h1, 27)
            h1 = x64Add(h1, h2)
            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
            k2 = x64Multiply(k2, c2)
            k2 = x64Rotl(k2, 33)
            k2 = x64Multiply(k2, c1)
            h2 = x64Xor(h2, k2)
            h2 = x64Rotl(h2, 31)
            h2 = x64Add(h2, h1)
            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
        }
        k1 = [0, 0]
        k2 = [0, 0]
        switch (remainder) {
            case 15:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
            case 14:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
            case 13:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
            case 12:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
            case 11:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
            case 10:
                k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
            case 9:
                k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
                k2 = x64Multiply(k2, c2)
                k2 = x64Rotl(k2, 33)
                k2 = x64Multiply(k2, c1)
                h2 = x64Xor(h2, k2)
            case 8:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
            case 7:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
            case 6:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
            case 5:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
            case 4:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
            case 3:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
            case 2:
                k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
            case 1:
                k1 = x64Xor(k1, [0, key.charCodeAt(i)])
                k1 = x64Multiply(k1, c1)
                k1 = x64Rotl(k1, 31)
                k1 = x64Multiply(k1, c2)
                h1 = x64Xor(h1, k1)
        }
        h1 = x64Xor(h1, [0, key.length])
        h2 = x64Xor(h2, [0, key.length])
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        h1 = x64Fmix(h1)
        h2 = x64Fmix(h2)
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
    }
    var defaultOptions = { preprocessor: null, audio: { timeout: 1000, excludeIOS11: !0 }, fonts: { swfContainerId: 'fingerprintjs2', swfPath: 'flash/compiled/FontList.swf', userDefinedFonts: [], extendedJsFonts: !1 }, screen: { detectScreenOrientation: !0 }, plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 }, extraComponents: [], excludes: { 'enumerateDevices': !0, 'pixelRatio': !0, 'doNotTrack': !0, 'fontsFlash': !0 }, NOT_AVAILABLE: 'not available', ERROR: 'error', EXCLUDED: 'excluded' }
    var each = function(obj, iterator) { if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) { obj.forEach(iterator) } else if (obj.length === +obj.length) { for (var i = 0, l = obj.length; i < l; i++) { iterator(obj[i], i, obj) } } else { for (var key in obj) { if (obj.hasOwnProperty(key)) { iterator(obj[key], key, obj) } } } }
    var map = function(obj, iterator) {
        var results = []
        if (obj == null) { return results }
        if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
        each(obj, function(value, index, list) { results.push(iterator(value, index, list)) })
        return results
    }
    var extendSoft = function(target, source) {
        if (source == null) { return target }
        var value
        var key
        for (key in source) {
            value = source[key]
            if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) { target[key] = value }
        }
        return target
    }
    var enumerateDevicesKey = function(done, options) {
        if (!isEnumerateDevicesSupported()) { return done(options.NOT_AVAILABLE) }
        navigator.mediaDevices.enumerateDevices().then(function(devices) { done(devices.map(function(device) { return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label })) })['catch'](function(error) { done(error) })
    }
    var isEnumerateDevicesSupported = function() { return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) }
    var audioKey = function(done, options) {
        var audioOptions = options.audio
        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) { return done(options.EXCLUDED) }
        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext
        if (AudioContext == null) { return done(options.NOT_AVAILABLE) }
        var context = new AudioContext(1, 44100, 44100)
        var oscillator = context.createOscillator()
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(10000, context.currentTime)
        var compressor = context.createDynamicsCompressor()
        each([
            ['threshold', -50],
            ['knee', 40],
            ['ratio', 12],
            ['reduction', -20],
            ['attack', 0],
            ['release', 0.25]
        ], function(item) { if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') { compressor[item[0]].setValueAtTime(item[1], context.currentTime) } })
        oscillator.connect(compressor)
        compressor.connect(context.destination)
        oscillator.start(0)
        context.startRendering()
        var audioTimeoutId = setTimeout(function() {
            console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
            context.oncomplete = function() {}
            context = null
            return done('audioTimeout')
        }, audioOptions.timeout)
        context.oncomplete = function(event) {
            var fingerprint
            try {
                clearTimeout(audioTimeoutId)
                fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function(acc, val) { return acc + Math.abs(val) }, 0).toString()
                oscillator.disconnect()
                compressor.disconnect()
            } catch (error) {
                done(error)
                return
            }
            done(fingerprint)
        }
    }
    var UserAgent = function(done) { done(navigator.userAgent) }
    var webdriver = function(done, options) { done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver) }
    var languageKey = function(done, options) { done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE) }
    var colorDepthKey = function(done, options) { done(window.screen.colorDepth || options.NOT_AVAILABLE) }
    var deviceMemoryKey = function(done, options) { done(navigator.deviceMemory || options.NOT_AVAILABLE) }
    var pixelRatioKey = function(done, options) { done(window.devicePixelRatio || options.NOT_AVAILABLE) }
    var screenResolutionKey = function(done, options) { done(getScreenResolution(options)) }
    var getScreenResolution = function(options) {
        var resolution = [window.screen.width, window.screen.height]
        if (options.screen.detectScreenOrientation) { resolution.sort().reverse() }
        return resolution
    }
    var availableScreenResolutionKey = function(done, options) { done(getAvailableScreenResolution(options)) }
    var getAvailableScreenResolution = function(options) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var available = [window.screen.availHeight, window.screen.availWidth]
            if (options.screen.detectScreenOrientation) { available.sort().reverse() }
            return available
        }
        return options.NOT_AVAILABLE
    }
    var timezoneOffset = function(done) { done(new Date().getTimezoneOffset()) }
    var timezone = function(done, options) {
        if (window.Intl && window.Intl.DateTimeFormat) {
            done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var sessionStorageKey = function(done, options) { done(hasSessionStorage(options)) }
    var localStorageKey = function(done, options) { done(hasLocalStorage(options)) }
    var indexedDbKey = function(done, options) { done(hasIndexedDB(options)) }
    var addBehaviorKey = function(done) { done(!!(document.body && document.body.addBehavior)) }
    var openDatabaseKey = function(done) { done(!!window.openDatabase) }
    var cpuClassKey = function(done, options) { done(getNavigatorCpuClass(options)) }
    var platformKey = function(done, options) { done(getNavigatorPlatform(options)) }
    var doNotTrackKey = function(done, options) { done(getDoNotTrack(options)) }
    var canvasKey = function(done, options) {
        if (isCanvasSupported()) {
            done(getCanvasFp(options))
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglKey = function(done, options) {
        if (isWebGlSupported()) {
            done(getWebglFp())
            return
        }
        done(options.NOT_AVAILABLE)
    }
    var webglVendorAndRendererKey = function(done) {
        if (isWebGlSupported()) {
            done(getWebglVendorAndRenderer())
            return
        }
        done()
    }
    var adBlockKey = function(done) { done(getAdBlock()) }
    var hasLiedLanguagesKey = function(done) { done(getHasLiedLanguages()) }
    var hasLiedResolutionKey = function(done) { done(getHasLiedResolution()) }
    var hasLiedOsKey = function(done) { done(getHasLiedOs()) }
    var hasLiedBrowserKey = function(done) { done(getHasLiedBrowser()) }
    var flashFontsKey = function(done, options) {
        if (!hasSwfObjectLoaded()) { return done('swf object not loaded') }
        if (!hasMinFlashInstalled()) { return done('flash not installed') }
        if (!options.fonts.swfPath) { return done('missing options.fonts.swfPath') }
        loadSwfAndDetectFonts(function(fonts) { done(fonts) }, options)
    }
    var jsFontsKey = function(done, options) {
        var baseFonts = ['monospace', 'sans-serif', 'serif']
        var fontList = ['Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style', 'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New', 'Geneva', 'Georgia', 'Helvetica', 'Helvetica Neue', 'Impact', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO', 'Palatino', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3']
        if (options.fonts.extendedJsFonts) {
            var extendedFontList = ['Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter', 'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER', 'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville', 'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD', 'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed', 'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara', 'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer', 'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte', 'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER', 'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD', 'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV', 'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN', 'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti', 'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli', 'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN', 'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla', 'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket', 'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC', 'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold', 'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
            fontList = fontList.concat(extendedFontList)
        }
        fontList = fontList.concat(options.fonts.userDefinedFonts)
        fontList = fontList.filter(function(font, position) { return fontList.indexOf(font) === position })
        var testString = 'mmmmmmmmmmlli'
        var testSize = '72px'
        var h = document.getElementsByTagName('body')[0]
        var baseFontsDiv = document.createElement('div')
        var fontsDiv = document.createElement('div')
        var defaultWidth = {}
        var defaultHeight = {}
        var createSpan = function() {
            var s = document.createElement('span')
            s.style.position = 'absolute'
            s.style.left = '-9999px'
            s.style.fontSize = testSize
            s.style.fontStyle = 'normal'
            s.style.fontWeight = 'normal'
            s.style.letterSpacing = 'normal'
            s.style.lineBreak = 'auto'
            s.style.lineHeight = 'normal'
            s.style.textTransform = 'none'
            s.style.textAlign = 'left'
            s.style.textDecoration = 'none'
            s.style.textShadow = 'none'
            s.style.whiteSpace = 'normal'
            s.style.wordBreak = 'normal'
            s.style.wordSpacing = 'normal'
            s.innerHTML = testString
            return s
        }
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan()
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
            return s
        }
        var initializeBaseFontsSpans = function() {
            var spans = []
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan()
                s.style.fontFamily = baseFonts[index]
                baseFontsDiv.appendChild(s)
                spans.push(s)
            }
            return spans
        }
        var initializeFontsSpans = function() {
            var spans = {}
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = []
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j])
                    fontsDiv.appendChild(s)
                    fontSpans.push(s)
                }
                spans[fontList[i]] = fontSpans
            }
            return spans
        }
        var isFontAvailable = function(fontSpans) {
            var detected = !1
            for (var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                if (detected) { return detected }
            }
            return detected
        }
        var baseFontsSpans = initializeBaseFontsSpans()
        h.appendChild(baseFontsDiv)
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight
        }
        var fontsSpans = initializeFontsSpans()
        h.appendChild(fontsDiv)
        var available = []
        for (var i = 0, l = fontList.length; i < l; i++) { if (isFontAvailable(fontsSpans[fontList[i]])) { available.push(fontList[i]) } }
        h.removeChild(fontsDiv)
        h.removeChild(baseFontsDiv)
        done(available)
    }
    var pluginsComponent = function(done, options) { if (isIE()) { if (!options.plugins.excludeIE) { done(getIEPlugins(options)) } else { done(options.EXCLUDED) } } else { done(getRegularPlugins(options)) } }
    var getRegularPlugins = function(options) {
        if (navigator.plugins == null) { return options.NOT_AVAILABLE }
        var plugins = []
        for (var i = 0, l = navigator.plugins.length; i < l; i++) { if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) } }
        if (pluginsShouldBeSorted(options)) {
            plugins = plugins.sort(function(a, b) {
                if (a.name > b.name) { return 1 }
                if (a.name < b.name) { return -1 }
                return 0
            })
        }
        return map(plugins, function(p) {
            var mimeTypes = map(p, function(mt) { return [mt.type, mt.suffixes] })
            return [p.name, p.description, mimeTypes]
        })
    }
    var getIEPlugins = function(options) {
        var result = []
        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
            var names = ['AcroPDF.PDF', 'Adodb.Stream', 'AgControl.AgControl', 'DevalVRXCtrl.DevalVRXCtrl.1', 'MacromediaFlashPaper.MacromediaFlashPaper', 'Msxml2.DOMDocument', 'Msxml2.XMLHTTP', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'QuickTimeCheckObject.QuickTimeCheck.1', 'RealPlayer', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'Scripting.Dictionary', 'SWCtl.SWCtl', 'Shell.UIHelper', 'ShockwaveFlash.ShockwaveFlash', 'Skype.Detection', 'TDCCtl.TDCCtl', 'WMPlayer.OCX', 'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1']
            result = map(names, function(name) {
                try {
                    new window.ActiveXObject(name)
                    return name
                } catch (e) { return options.ERROR }
            })
        } else { result.push(options.NOT_AVAILABLE) }
        if (navigator.plugins) { result = result.concat(getRegularPlugins(options)) }
        return result
    }
    var pluginsShouldBeSorted = function(options) {
        var should = !1
        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
            var re = options.plugins.sortPluginsFor[i]
            if (navigator.userAgent.match(re)) {
                should = !0
                break
            }
        }
        return should
    }
    var touchSupportKey = function(done) { done(getTouchSupport()) }
    var hardwareConcurrencyKey = function(done, options) { done(getHardwareConcurrency(options)) }
    var hasSessionStorage = function(options) { try { return !!window.sessionStorage } catch (e) { return options.ERROR } }
    var hasLocalStorage = function(options) { try { return !!window.localStorage } catch (e) { return options.ERROR } }
    var hasIndexedDB = function(options) { try { return !!window.indexedDB } catch (e) { return options.ERROR } }
    var getHardwareConcurrency = function(options) {
        if (navigator.hardwareConcurrency) { return navigator.hardwareConcurrency }
        return options.NOT_AVAILABLE
    }
    var getNavigatorCpuClass = function(options) { return navigator.cpuClass || options.NOT_AVAILABLE }
    var getNavigatorPlatform = function(options) { if (navigator.platform) { return navigator.platform } else { return options.NOT_AVAILABLE } }
    var getDoNotTrack = function(options) { if (navigator.doNotTrack) { return navigator.doNotTrack } else if (navigator.msDoNotTrack) { return navigator.msDoNotTrack } else if (window.doNotTrack) { return window.doNotTrack } else { return options.NOT_AVAILABLE } }
    var getTouchSupport = function() {
        var maxTouchPoints = 0
        var touchEvent
        if (typeof navigator.maxTouchPoints !== 'undefined') { maxTouchPoints = navigator.maxTouchPoints } else if (typeof navigator.msMaxTouchPoints !== 'undefined') { maxTouchPoints = navigator.msMaxTouchPoints }
        try {
            document.createEvent('TouchEvent')
            touchEvent = !0
        } catch (_) { touchEvent = !1 }
        var touchStart = 'ontouchstart' in window
        return [maxTouchPoints, touchEvent, touchStart]
    }
    var getCanvasFp = function(options) {
        var result = []
        var canvas = document.createElement('canvas')
        canvas.width = 2000
        canvas.height = 200
        canvas.style.display = 'inline'
        var ctx = canvas.getContext('2d')
        ctx.rect(0, 0, 10, 10)
        ctx.rect(2, 2, 6, 6)
        result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === !1) ? 'yes' : 'no'))
        ctx.textBaseline = 'alphabetic'
        ctx.fillStyle = '#f60'
        ctx.fillRect(125, 1, 62, 20)
        ctx.fillStyle = '#069'
        if (options.dontUseFakeFontInCanvas) { ctx.font = '11pt Arial' } else { ctx.font = '11pt no-real-font-123' }
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
        ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
        ctx.font = '18pt Arial'
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)
        ctx.globalCompositeOperation = 'multiply'
        ctx.fillStyle = 'rgb(255,0,255)'
        ctx.beginPath()
        ctx.arc(50, 50, 50, 0, Math.PI * 2, !0)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(0,255,255)'
        ctx.beginPath()
        ctx.arc(100, 50, 50, 0, Math.PI * 2, !0)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,255,0)'
        ctx.beginPath()
        ctx.arc(75, 100, 50, 0, Math.PI * 2, !0)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,0,255)'
        ctx.arc(75, 75, 75, 0, Math.PI * 2, !0)
        ctx.arc(75, 75, 25, 0, Math.PI * 2, !0)
        ctx.fill('evenodd')
        if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
        return result
    }
    var getWebglFp = function() {
        var gl
        var fa2s = function(fa) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0)
            gl.enable(gl.DEPTH_TEST)
            gl.depthFunc(gl.LEQUAL)
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            return '[' + fa[0] + ', ' + fa[1] + ']'
        }
        var maxAnisotropy = function(gl) {
            var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
            if (ext) {
                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                if (anisotropy === 0) { anisotropy = 2 }
                return anisotropy
            } else { return null }
        }
        gl = getWebglCanvas()
        if (!gl) { return null }
        var result = []
        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
        var vertexPosBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        vertexPosBuffer.itemSize = 3
        vertexPosBuffer.numItems = 3
        var program = gl.createProgram()
        var vshader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(vshader, vShaderTemplate)
        gl.compileShader(vshader)
        var fshader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(fshader, fShaderTemplate)
        gl.compileShader(fshader)
        gl.attachShader(program, vshader)
        gl.attachShader(program, fshader)
        gl.linkProgram(program)
        gl.useProgram(program)
        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
        gl.enableVertexAttribArray(program.vertexPosArray)
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
        gl.uniform2f(program.offsetUniform, 1, 1)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
        try { result.push(gl.canvas.toDataURL()) } catch (e) {}
        result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
        result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
        result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
        result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
        result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
        result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
        result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
        result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
        result.push('webgl max anisotropy:' + maxAnisotropy(gl))
        result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
        result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
        result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
        result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
        result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
        result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
        result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
        result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
        result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
        result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
        result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
        result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
        result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
        result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
        result.push('webgl version:' + gl.getParameter(gl.VERSION))
        try {
            var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
            if (extensionDebugRendererInfo) {
                result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
                result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
            }
        } catch (e) {}
        if (!gl.getShaderPrecisionFormat) {
            loseWebglContext(gl)
            return result
        }
        each(['FLOAT', 'INT'], function(numType) {
            each(['VERTEX', 'FRAGMENT'], function(shader) {
                each(['HIGH', 'MEDIUM', 'LOW'], function(numSize) {
                    each(['precision', 'rangeMin', 'rangeMax'], function(key) {
                        var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                        if (key !== 'precision') { key = 'precision ' + key }
                        var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
                        result.push(line)
                    })
                })
            })
        })
        loseWebglContext(gl)
        return result
    }
    var getWebglVendorAndRenderer = function() {
        try {
            var glContext = getWebglCanvas()
            var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
            var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
            loseWebglContext(glContext)
            return params
        } catch (e) { return null }
    }
    var getAdBlock = function() {
        var ads = document.createElement('div')
        ads.innerHTML = '&nbsp;'
        ads.className = 'adsbox'
        var result = !1
        try {
            document.body.appendChild(ads)
            result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
            document.body.removeChild(ads)
        } catch (e) { result = !1 }
        return result
    }
    var getHasLiedLanguages = function() {
        if (typeof navigator.languages !== 'undefined') {
            try {
                var firstLanguages = navigator.languages[0].substr(0, 2)
                if (firstLanguages !== navigator.language.substr(0, 2)) { return !0 }
            } catch (err) { return !0 }
        }
        return !1
    }
    var getHasLiedResolution = function() { return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight }
    var getHasLiedOs = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var oscpu = navigator.oscpu
        var platform = navigator.platform.toLowerCase()
        var os
        if (userAgent.indexOf('windows phone') >= 0) { os = 'Windows Phone' } else if (userAgent.indexOf('win') >= 0) { os = 'Windows' } else if (userAgent.indexOf('android') >= 0) { os = 'Android' } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) { os = 'Linux' } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) { os = 'iOS' } else if (userAgent.indexOf('mac') >= 0) { os = 'Mac' } else { os = 'Other' }
        var mobileDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
        if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') { return !0 }
        if (typeof oscpu !== 'undefined') {
            oscpu = oscpu.toLowerCase()
            if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') { return !0 } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') { return !0 } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') { return !0 } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) { return !0 }
        }
        if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') { return !0 } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') { return !0 } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') { return !0 } else {
            var platformIsOther = platform.indexOf('win') < 0 && platform.indexOf('linux') < 0 && platform.indexOf('mac') < 0 && platform.indexOf('iphone') < 0 && platform.indexOf('ipad') < 0
            if (platformIsOther !== (os === 'Other')) { return !0 }
        }
        return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
    }
    var getHasLiedBrowser = function() {
        var userAgent = navigator.userAgent.toLowerCase()
        var productSub = navigator.productSub
        var browser
        if (userAgent.indexOf('firefox') >= 0) { browser = 'Firefox' } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) { browser = 'Opera' } else if (userAgent.indexOf('chrome') >= 0) { browser = 'Chrome' } else if (userAgent.indexOf('safari') >= 0) { browser = 'Safari' } else if (userAgent.indexOf('trident') >= 0) { browser = 'Internet Explorer' } else { browser = 'Other' }
        if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') { return !0 }
        var tempRes = eval.toString().length
        if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') { return !0 } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') { return !0 } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') { return !0 }
        var errFirefox
        try { throw 'a' } catch (err) {
            try {
                err.toSource()
                errFirefox = !0
            } catch (errOfErr) { errFirefox = !1 }
        }
        return errFirefox && browser !== 'Firefox' && browser !== 'Other'
    }
    var isCanvasSupported = function() {
        var elem = document.createElement('canvas')
        return !!(elem.getContext && elem.getContext('2d'))
    }
    var isWebGlSupported = function() {
        if (!isCanvasSupported()) { return !1 }
        var glContext = getWebglCanvas()
        var isSupported = !!window.WebGLRenderingContext && !!glContext
        loseWebglContext(glContext)
        return isSupported
    }
    var isIE = function() {
        if (navigator.appName === 'Microsoft Internet Explorer') { return !0 } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { return !0 }
        return !1
    }
    var hasSwfObjectLoaded = function() { return typeof window.swfobject !== 'undefined' }
    var hasMinFlashInstalled = function() { return window.swfobject.hasFlashPlayerVersion('9.0.0') }
    var addFlashDivNode = function(options) {
        var node = document.createElement('div')
        node.setAttribute('id', options.fonts.swfContainerId)
        document.body.appendChild(node)
    }
    var loadSwfAndDetectFonts = function(done, options) {
        var hiddenCallback = '___fp_swf_loaded'
        window[hiddenCallback] = function(fonts) { done(fonts) }
        var id = options.fonts.swfContainerId
        addFlashDivNode()
        var flashvars = { onReady: hiddenCallback }
        var flashparams = { allowScriptAccess: 'always', menu: 'false' }
        window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', !1, flashvars, flashparams, {})
    }
    var getWebglCanvas = function() {
        var canvas = document.createElement('canvas')
        var gl = null
        try { gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') } catch (e) {}
        if (!gl) { gl = null }
        return gl
    }
    var loseWebglContext = function(context) {
        var loseContextExtension = context.getExtension('WEBGL_lose_context')
        if (loseContextExtension != null) { loseContextExtension.loseContext() }
    }
    var components = [{ key: 'userAgent', getData: UserAgent }, { key: 'webdriver', getData: webdriver }, { key: 'language', getData: languageKey }, { key: 'colorDepth', getData: colorDepthKey }, { key: 'deviceMemory', getData: deviceMemoryKey }, { key: 'pixelRatio', getData: pixelRatioKey }, { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey }, { key: 'screenResolution', getData: screenResolutionKey }, { key: 'availableScreenResolution', getData: availableScreenResolutionKey }, { key: 'timezoneOffset', getData: timezoneOffset }, { key: 'timezone', getData: timezone }, { key: 'sessionStorage', getData: sessionStorageKey }, { key: 'localStorage', getData: localStorageKey }, { key: 'indexedDb', getData: indexedDbKey }, { key: 'addBehavior', getData: addBehaviorKey }, { key: 'openDatabase', getData: openDatabaseKey }, { key: 'cpuClass', getData: cpuClassKey }, { key: 'platform', getData: platformKey }, { key: 'doNotTrack', getData: doNotTrackKey }, { key: 'plugins', getData: pluginsComponent }, { key: 'canvas', getData: canvasKey }, { key: 'webgl', getData: webglKey }, { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey }, { key: 'adBlock', getData: adBlockKey }, { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey }, { key: 'hasLiedResolution', getData: hasLiedResolutionKey }, { key: 'hasLiedOs', getData: hasLiedOsKey }, { key: 'hasLiedBrowser', getData: hasLiedBrowserKey }, { key: 'touchSupport', getData: touchSupportKey }, { key: 'fonts', getData: jsFontsKey, pauseBefore: !0 }, { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: !0 }, { key: 'audio', getData: audioKey }, { key: 'enumerateDevices', getData: enumerateDevicesKey }]
    var Fingerprint2 = function(options) { throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200") }
    Fingerprint2.get = function(options, callback) {
        if (!callback) {
            callback = options
            options = {}
        } else if (!options) { options = {} }
        extendSoft(options, defaultOptions)
        options.components = options.extraComponents.concat(components)
        var keys = {
            data: [],
            addPreprocessedComponent: function(key, value) {
                if (typeof options.preprocessor === 'function') { value = options.preprocessor(key, value) }
                keys.data.push({ key: key, value: value })
            }
        }
        var i = -1
        var chainComponents = function(alreadyWaited) {
            i += 1
            if (i >= options.components.length) {
                callback(keys.data)
                return
            }
            var component = options.components[i]
            if (options.excludes[component.key]) {
                chainComponents(!1)
                return
            }
            if (!alreadyWaited && component.pauseBefore) {
                i -= 1
                setTimeout(function() { chainComponents(!0) }, 1)
                return
            }
            try {
                component.getData(function(value) {
                    keys.addPreprocessedComponent(component.key, value)
                    chainComponents(!1)
                }, options)
            } catch (error) {
                keys.addPreprocessedComponent(component.key, String(error))
                chainComponents(!1)
            }
        }
        chainComponents(!1)
    }
    Fingerprint2.getPromise = function(options) { return new Promise(function(resolve, reject) { Fingerprint2.get(options, resolve) }) }
    Fingerprint2.getV18 = function(options, callback) {
        if (callback == null) {
            callback = options
            options = {}
        }
        return Fingerprint2.get(options, function(components) {
            var newComponents = []
            for (var i = 0; i < components.length; i++) {
                var component = components[i]
                if (component.value === (options.NOT_AVAILABLE || 'not available')) { newComponents.push({ key: component.key, value: 'unknown' }) } else if (component.key === 'plugins') {
                    newComponents.push({
                        key: 'plugins',
                        value: map(component.value, function(p) {
                            var mimeTypes = map(p[2], function(mt) {
                                if (mt.join) { return mt.join('~') }
                                return mt
                            }).join(',')
                            return [p[0], p[1], mimeTypes].join('::')
                        })
                    })
                } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) { newComponents.push({ key: component.key, value: component.value.join('~') }) } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) { if (component.value) { newComponents.push({ key: component.key, value: 1 }) } else { continue } } else { if (component.value) { newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component) } else { newComponents.push({ key: component.key, value: component.value }) } }
            }
            var murmur = x64hash128(map(newComponents, function(component) { return component.value }).join('~~~'), 31)
            callback(murmur, newComponents)
        })
    }
    Fingerprint2.x64hash128 = x64hash128
    Fingerprint2.VERSION = '2.1.0'
    return Fingerprint2
});
/*!
 * Version 0.3
 * Adds simple touch drag and swipe listeners to jQuery.
 *
 * Requires jQuery 1.7 or later.
 *
 * This content is released under the MIT License
 * https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2012 Tyler Ault
 */
(function(h) {
    var j = "startTouch",
        q = "swipeCallback",
        f = "touchDragCallback",
        t = "touchDragHandler",
        l = "touchDragCatcher",
        a = "touchDragAxis",
        m = "touchBubble",
        k = "touchBindings",
        r = "undefined",
        e = 60,
        n = 600,
        u = function(v) { var w = v.originalEvent; if (w.touches && w.touches.length) { return w.touches } else { if (w.changedTouches && w.changedTouches.length) { return w.changedTouches } } },
        c = function(v) {
            v.stopPropagation();
            v.preventDefault()
        },
        s = function(v) {
            var y = h(v),
                x = y.data(t) || null,
                w = y.data(l) || null;
            if (x && w) { h(w).off({ touchmove: x, touchend: x }) } y.data(t, null)
        },
        g = function(E) {
            var D = u(E),
                F = h(this),
                y, w, x, v;
            if (D.length > 1) { return } v = F.data(j);
            if (!v) { return } y = F.data(f);
            x = F.data(a) || 0;
            w = (x > 0) ? F : null;
            if (y || w) {
                var C = D[0],
                    B = C.pageX - v.pageX,
                    A = C.pageY - v.pageY;
                try { if (w && (x == 1 || x == 3)) { w.css("left", (v.left + B) + "px") } if (w && x > 1) { w.css("top", (v.top + A) + "px") } } catch (z) {}
                if (y) { y.apply(w, [E, B, A, v.left, v.top]) }
            }
            c(E)
        },
        b = function(A) {
            var z = u(A),
                C = z[0],
                B = h(this).data(j);
            if (!B || typeof B == r) { return }
            if (z.length > 1) { return }
            var x = C.pageX - B.pageX,
                w = C.pageY - B.pageY,
                y = e * e,
                v = h(this).data(q);
            if (x * x > y || w * w > y) { if (v && new Date().getTime() - B.time < n) { v(A, x, w) } if (h(this).data(m) !== !0) { c(A) } } h(this).data(j, null);
            s(this)
        },
        p = function(v, x) {
            var w = function(y) {
                if (y.type == "touchmove") { g.apply(v, [y]) } else {
                    if (y.type == "touchend") {
                        b.apply(v, [y]);
                        s(v)
                    }
                }
            };
            h(v).data(t, w);
            h(x).on({ touchmove: w, touchend: w })
        },
        d = function(y) {
            var x = u(y),
                A = x[0],
                v = h(this).data(l) || null,
                w = null,
                z = null;
            if (x.length > 1) { return }
            if (v) {
                w = h(y.currentTarget);
                z = w.position();
                p(this, v)
            }
            h(this).data(j, { pageX: A.pageX, pageY: A.pageY, top: w ? z.top : 0, left: w ? z.left : 0, time: new Date().getTime() })
        },
        i = function(v, w) { var x = v.data(k) || []; if (x.length < 1) { v.bind("touchstart", d).bind("touchend", b) } if (h.inArray(w, x) < 0) { x.push(w) } v.data(k, x) },
        o = function(w, x) {
            var y = w.data(k) || [],
                v = h.inArray(x, y);
            if (v > -1) { y.splice(v, 1) }
            if (y.length < 1) { w.unbind("touchstart", d).unbind("touchend", b) } s(w)
        };
    h.fn.swipe = function(x, w) {
        this.unswipe();
        this.data(q, x);
        var v = this.data(m) === !0 ? true : !1;
        this.data(m, (w === !0 ? true : v));
        i(this, "swipe");
        return this
    };
    h.fn.unswipe = function() {
        this.data(q, null);
        this.data(m, null);
        o(this, "swipe");
        return this
    };
    h.fn.unSwipe = h.fn.unswipe;
    h.fn.touchDrag = function(z, v, x) {
        var w = typeof v == "object" ? v : null,
            y = 0;
        if (!x || typeof x == r) { y = 3 } else {
            y += (x.indexOf("x") > -1 ? 1 : 0);
            y += (x.indexOf("y") > -1 ? 2 : 0)
        }
        this.unTouchDrag();
        this.data(f, z);
        this.data(l, w || document);
        this.data(a, y);
        this.data(m, !0);
        i(this, "touchDrag");
        return this
    };
    h.fn.unTouchDrag = function() {
        this.data(f, null);
        this.data(l, null);
        this.data(m, null);
        this.data(a, 0);
        o(this, "touchDrag");
        return this
    }
})(jQuery);
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.19
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { a(jQuery) } }(function(a) {
    a.fn.addBack = a.fn.addBack || a.fn.andSelf;
    a.fn.extend({
        actual: function(b, l) {
            if (!this[b]) { throw '$.actual => The jQuery method "' + b + '" you called does not exist' }
            var f = { absolute: !1, clone: !1, includeMargin: !1, display: "block" };
            var i = a.extend(f, l);
            var e = this.eq(0);
            var h, j;
            if (i.clone === !0) {
                h = function() {
                    var m = "position: absolute !important; top: -1000 !important; ";
                    e = e.clone().attr("style", m).appendTo("body")
                };
                j = function() { e.remove() }
            } else {
                var g = [];
                var d = "";
                var c;
                h = function() {
                    c = e.parents().addBack().filter(":hidden");
                    d += "visibility: hidden !important; display: " + i.display + " !important; ";
                    if (i.absolute === !0) { d += "position: absolute !important; " } c.each(function() {
                        var m = a(this);
                        var n = m.attr("style");
                        g.push(n);
                        m.attr("style", n ? n + ";" + d : d)
                    })
                };
                j = function() { c.each(function(m) { var o = a(this); var n = g[m]; if (n === undefined) { o.removeAttr("style") } else { o.attr("style", n) } }) }
            }
            h();
            var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
            j();
            return k
        }
    })
}));
(function(factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory) } else if (typeof module === 'object' && module.exports) { module.exports = factory(require('jquery')) } else { factory(jQuery) } }(function($) {
    var queues = {};
    var activeReqs = {};
    $.ajaxq = function(qname, opts) {
        if (typeof opts === "undefined") { throw ("AjaxQ: queue name is not provided") }
        var deferred = $.Deferred(),
            promise = deferred.promise();
        promise.success = promise.done;
        promise.error = promise.fail;
        promise.complete = promise.always;
        var deferredOpts = typeof opts === 'function';
        var clonedOptions = !deferredOpts ? $.extend(!0, {}, opts) : null;
        enqueue(function() {
            var jqXHR = $.ajax.apply(window, [deferredOpts ? opts() : clonedOptions]);
            jqXHR.done(function() { deferred.resolve.apply(this, arguments) });
            jqXHR.fail(function() { deferred.reject.apply(this, arguments) });
            jqXHR.always(dequeue);
            return jqXHR
        });
        return promise;

        function enqueue(cb) {
            if (!queues[qname]) {
                queues[qname] = [];
                var xhr = cb();
                activeReqs[qname] = xhr
            } else { queues[qname].push(cb) }
        }

        function dequeue() {
            if (!queues[qname]) { return }
            var nextCallback = queues[qname].shift();
            if (nextCallback) {
                var xhr = nextCallback();
                activeReqs[qname] = xhr
            } else {
                delete queues[qname];
                delete activeReqs[qname]
            }
        }
    };
    $.each(["getq", "postq"], function(i, method) {
        $[method] = function(qname, url, data, callback, type) {
            if ($.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined
            }
            return $.ajaxq(qname, { type: method === "postq" ? "post" : "get", url: url, data: data, success: callback, dataType: type })
        }
    });
    var isQueueRunning = function(qname) { return (queues.hasOwnProperty(qname) && queues[qname].length > 0) || activeReqs.hasOwnProperty(qname) };
    var isAnyQueueRunning = function() {
        for (var i in queues) { if (isQueueRunning(i)) return !0 }
        return !1
    };
    $.ajaxq.isRunning = function(qname) {
        if (qname) return isQueueRunning(qname);
        else return isAnyQueueRunning()
    };
    $.ajaxq.getActiveRequest = function(qname) { if (!qname) throw ("AjaxQ: queue name is required"); return activeReqs[qname] };
    $.ajaxq.abort = function(qname) {
        if (!qname) throw ("AjaxQ: queue name is required");
        var current = $.ajaxq.getActiveRequest(qname);
        delete queues[qname];
        delete activeReqs[qname];
        if (current) current.abort()
    };
    $.ajaxq.clear = function(qname) { if (!qname) { for (var i in queues) { if (queues.hasOwnProperty(i)) { queues[i] = [] } } } else { if (queues[qname]) { queues[qname] = [] } } }
}));
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(window, undefined) {
    '$:nomunge';
    var $ = window.jQuery || window.Cowboy || (window.Cowboy = {}),
        jq_throttle;
    $.throttle = jq_throttle = function(delay, no_trailing, callback, debounce_mode) {
        var timeout_id, last_exec = 0;
        if (typeof no_trailing !== 'boolean') {
            debounce_mode = callback;
            callback = no_trailing;
            no_trailing = undefined
        }

        function wrapper() {
            var that = this,
                elapsed = +new Date() - last_exec,
                args = arguments;

            function exec() {
                last_exec = +new Date();
                callback.apply(that, args)
            };

            function clear() { timeout_id = undefined };
            if (debounce_mode && !timeout_id) { exec() }
            timeout_id && clearTimeout(timeout_id);
            if (debounce_mode === undefined && elapsed > delay) { exec() } else if (no_trailing !== !0) { timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay) }
        };
        if ($.guid) { wrapper.guid = callback.guid = callback.guid || $.guid++ }
        return wrapper
    };
    $.debounce = function(delay, at_begin, callback) { return callback === undefined ? jq_throttle(delay, at_begin, !1) : jq_throttle(delay, callback, at_begin !== !1) }
})(this);
/*!
 * hoverIntent v1.10.1 // 2019.10.05 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2019 Brian Cherne
 */
;
(function(factory) { 'use strict'; if (typeof define === 'function' && define.amd) { define(['jquery'], factory) } else if (typeof module === 'object' && module.exports) { module.exports = factory(require('jquery')) } else if (jQuery && !jQuery.fn.hoverIntent) { factory(jQuery) } })(function($) {
    'use strict';
    var _cfg = { interval: 100, sensitivity: 6, timeout: 0 };
    var INSTANCE_COUNT = 0;
    var cX, cY;
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY
    };
    var compare = function(ev, $el, s, cfg) {
        if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) {
            $el.off(s.event, track);
            delete s.timeoutId;
            s.isActive = !0;
            ev.pageX = cX;
            ev.pageY = cY;
            delete s.pX;
            delete s.pY;
            return cfg.over.apply($el[0], [ev])
        } else {
            s.pX = cX;
            s.pY = cY;
            s.timeoutId = setTimeout(function() { compare(ev, $el, s, cfg) }, cfg.interval)
        }
    };
    var delay = function(ev, $el, s, out) {
        var data = $el.data('hoverIntent');
        if (data) { delete data[s.id] }
        return out.apply($el[0], [ev])
    };
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++;
        var cfg = $.extend({}, _cfg);
        if ($.isPlainObject(handlerIn)) { cfg = $.extend(cfg, handlerIn); if (!$.isFunction(cfg.out)) { cfg.out = cfg.over } } else if ($.isFunction(handlerOut)) { cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector }) } else { cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut }) }
        var handleHover = function(e) {
            var ev = $.extend({}, e);
            var $el = $(this);
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})) }
            var state = hoverIntentData[instanceId];
            if (!state) { hoverIntentData[instanceId] = state = { id: instanceId } }
            if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId) }
            var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;
            if (e.type === 'mouseenter') {
                if (state.isActive) { return }
                state.pX = ev.pageX;
                state.pY = ev.pageY;
                $el.off(mousemove, track).on(mousemove, track);
                state.timeoutId = setTimeout(function() { compare(ev, $el, state, cfg) }, cfg.interval)
            } else {
                if (!state.isActive) { return }
                $el.off(mousemove, track);
                state.timeoutId = setTimeout(function() { delay(ev, $el, state, cfg.out) }, cfg.timeout)
            }
        };
        return this.on({ 'mouseenter.hoverIntent': handleHover, 'mouseleave.hoverIntent': handleHover }, cfg.selector)
    }
});
"undefined" != typeof jQuery && ! function(a) {
    "use strict";
    a.imgpreload = function(b, c) {
        c = a.extend({}, a.fn.imgpreload.defaults, c instanceof Function ? { all: c } : c), "string" == typeof b && (b = [b]);
        var d = [];
        a.each(b, function(e, f) {
            var g = new Image,
                h = f,
                i = g;
            "string" != typeof f && (h = a(f).attr("src") || a(f).css("background-image").replace(/^url\((?:"|')?(.*)(?:'|")?\)$/gm, "$1"), i = f), a(g).bind("load error", function(e) { d.push(i), a.data(i, "loaded", "error" == e.type ? !1 : !0), c.each instanceof Function && c.each.call(i, d.slice(0)), d.length >= b.length && c.all instanceof Function && c.all.call(d), a(this).unbind("load error") }), g.src = h
        })
    }, a.fn.imgpreload = function(b) { return a.imgpreload(this, b), this }, a.fn.imgpreload.defaults = { each: null, all: null }
}(jQuery);
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) {
    var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({
        caret: function(a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) },
        unmask: function() { return this.trigger("unmask") },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 }
            return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B)
                    }
                }

                function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) }

                function q(a) { for (; ++a < n && !j[a];); return a }

                function r(a) { for (; --a >= 0 && !j[a];); return a }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d)
                            } z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e
                        }
                }

                function u() {
                    var a = B.val(),
                        b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() { A(), B.val() != E && B.change() }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode,
                            i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function() { a.proxy(a.fn.caret, B, e)() };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) }

                function z() { B.val(C.join("")) }

                function A(a) {
                    var b, c, d, e = B.val(),
                        f = -1;
                    for (b = 0, d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }
                var B = a(this),
                    C = a.map(c.split(""), function(a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function() { return a.map(C, function(a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function() { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});
/*!
 * Copyright 2012, Chris Wanstrath
 * Released under the MIT License
 * https://github.com/defunkt/jquery-pjax
 */
(function($) {
    function fnPjax(selector, container, options) {
        options = optionsFor(container, options)
        return this.on('click.pjax', selector, function(event) {
            var opts = options
            if (!opts.container) {
                opts = $.extend({}, options)
                opts.container = $(this).attr('data-pjax')
            }
            handleClick(event, opts)
        })
    }

    function handleClick(event, container, options) {
        options = optionsFor(container, options)
        var link = event.currentTarget
        var $link = $(link)
        if (link.tagName.toUpperCase() !== 'A')
            throw "$.fn.pjax or $.pjax.click requires an anchor element"
        if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
            return
        if (location.protocol !== link.protocol || location.hostname !== link.hostname)
            return
        if (link.href.indexOf('#') > -1 && stripHash(link) == stripHash(location))
            return
        if (event.isDefaultPrevented())
            return
        var defaults = { url: link.href, container: $link.attr('data-pjax'), target: link }
        var opts = $.extend({}, defaults, options)
        var clickEvent = $.Event('pjax:click')
        $link.trigger(clickEvent, [opts])
        if (!clickEvent.isDefaultPrevented()) {
            pjax(opts)
            event.preventDefault()
            $link.trigger('pjax:clicked', [opts])
        }
    }

    function handleSubmit(event, container, options) {
        options = optionsFor(container, options)
        var form = event.currentTarget
        var $form = $(form)
        if (form.tagName.toUpperCase() !== 'FORM')
            throw "$.pjax.submit requires a form element"
        var defaults = { type: ($form.attr('method') || 'GET').toUpperCase(), url: $form.attr('action'), container: $form.attr('data-pjax'), target: form }
        if (defaults.type !== 'GET' && window.FormData !== undefined) {
            defaults.data = new FormData(form)
            defaults.processData = !1
            defaults.contentType = !1
        } else {
            if ($form.find(':file').length) { return }
            defaults.data = $form.serializeArray()
        }
        pjax($.extend({}, defaults, options))
        event.preventDefault()
    }

    function pjax(options) {
        options = $.extend(!0, {}, $.ajaxSettings, pjax.defaults, options)
        if ($.isFunction(options.url)) { options.url = options.url() }
        var hash = parseURL(options.url).hash
        var containerType = $.type(options.container)
        if (containerType !== 'string') { throw "expected string value for 'container' option; got " + containerType }
        var context = options.context = $(options.container)
        if (!context.length) { throw "the container selector '" + options.container + "' did not match anything" }
        if (!options.data) options.data = {}
        if ($.isArray(options.data)) { options.data.push({ name: '_pjax', value: options.container }) } else { options.data._pjax = options.container }

        function fire(type, args, props) {
            if (!props) props = {}
            props.relatedTarget = options.target
            var event = $.Event(type, props)
            context.trigger(event, args)
            return !event.isDefaultPrevented()
        }
        var timeoutTimer
        options.beforeSend = function(xhr, settings) {
            if (settings.type !== 'GET') { settings.timeout = 0 }
            xhr.setRequestHeader('X-PJAX', 'true')
            xhr.setRequestHeader('X-PJAX-Container', options.container)
            if (!fire('pjax:beforeSend', [xhr, settings]))
                return !1
            if (settings.timeout > 0) {
                timeoutTimer = setTimeout(function() {
                    if (fire('pjax:timeout', [xhr, options]))
                        xhr.abort('timeout')
                }, settings.timeout)
                settings.timeout = 0
            }
            var url = parseURL(settings.url)
            if (hash) url.hash = hash
            options.requestUrl = stripInternalParams(url)
        }
        options.complete = function(xhr, textStatus) {
            if (timeoutTimer)
                clearTimeout(timeoutTimer)
            fire('pjax:complete', [xhr, textStatus, options])
            fire('pjax:end', [xhr, options])
        }
        options.error = function(xhr, textStatus, errorThrown) {
            var container = extractContainer("", xhr, options)
            var allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options])
            if (options.type == 'GET' && textStatus !== 'abort' && allowed) { locationReplace(container.url) }
        }
        options.success = function(data, status, xhr) {
            var previousState = pjax.state
            var currentVersion = typeof $.pjax.defaults.version === 'function' ? $.pjax.defaults.version() : $.pjax.defaults.version
            var latestVersion = xhr.getResponseHeader('X-PJAX-Version')
            var container = extractContainer(data, xhr, options)
            var url = parseURL(container.url)
            if (hash) {
                url.hash = hash
                container.url = url.href
            }
            if (currentVersion && latestVersion && currentVersion !== latestVersion) {
                locationReplace(container.url)
                return
            }
            if (!container.contents) {
                locationReplace(container.url)
                return
            }
            pjax.state = { id: options.id || uniqueId(), url: container.url, title: container.title, container: options.container, fragment: options.fragment, timeout: options.timeout }
            if (options.push || options.replace) { window.history.replaceState(pjax.state, container.title, container.url) }
            var blurFocus = $.contains(context, document.activeElement)
            if (blurFocus) { try { document.activeElement.blur() } catch (e) {} }
            if (container.title) document.title = container.title
            fire('pjax:beforeReplace', [container.contents, options], { state: pjax.state, previousState: previousState })
            context.html(container.contents)
            var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0]
            if (autofocusEl && document.activeElement !== autofocusEl) { autofocusEl.focus() }
            executeScriptTags(container.scripts)
            var scrollTo = options.scrollTo
            if (hash) {
                var name = decodeURIComponent(hash.slice(1))
                var target = document.getElementById(name) || document.getElementsByName(name)[0]
                if (target) scrollTo = $(target).offset().top
            }
            if (typeof scrollTo == 'number') $(window).scrollTop(scrollTo)
            fire('pjax:success', [data, status, xhr, options])
        }
        if (!pjax.state) {
            pjax.state = { id: uniqueId(), url: window.location.href, title: document.title, container: options.container, fragment: options.fragment, timeout: options.timeout }
            window.history.replaceState(pjax.state, document.title)
        }
        abortXHR(pjax.xhr)
        pjax.options = options
        var xhr = pjax.xhr = $.ajax(options)
        if (xhr.readyState > 0) {
            if (options.push && !options.replace) {
                cachePush(pjax.state.id, [options.container, cloneContents(context)])
                window.history.pushState(null, "", options.requestUrl)
            }
            fire('pjax:start', [xhr, options])
            fire('pjax:send', [xhr, options])
        }
        return pjax.xhr
    }

    function pjaxReload(container, options) {
        var defaults = { url: window.location.href, push: !1, replace: !0, scrollTo: !1 }
        return pjax($.extend(defaults, optionsFor(container, options)))
    }

    function locationReplace(url) {
        window.history.replaceState(null, "", pjax.state.url)
        window.location.replace(url)
    }
    var initialPop = !0
    var initialURL = window.location.href
    var initialState = window.history.state
    if (initialState && initialState.container) { pjax.state = initialState }
    if ('state' in window.history) { initialPop = !1 }

    function onPjaxPopstate(event) {
        if (!initialPop) { abortXHR(pjax.xhr) }
        var previousState = pjax.state
        var state = event.state
        var direction
        if (state && state.container) {
            if (initialPop && initialURL == state.url) return
            if (previousState) {
                if (previousState.id === state.id) return
                direction = previousState.id < state.id ? 'forward' : 'back'
            }
            var cache = cacheMapping[state.id] || []
            var containerSelector = cache[0] || state.container
            var container = $(containerSelector),
                contents = cache[1]
            if (container.length) {
                if (previousState) { cachePop(direction, previousState.id, [containerSelector, cloneContents(container)]) }
                var popstateEvent = $.Event('pjax:popstate', { state: state, direction: direction })
                container.trigger(popstateEvent)
                var options = { id: state.id, url: state.url, container: containerSelector, push: !1, fragment: state.fragment, timeout: state.timeout, scrollTo: !1 }
                if (contents) {
                    container.trigger('pjax:start', [null, options])
                    pjax.state = state
                    if (state.title) document.title = state.title
                    var beforeReplaceEvent = $.Event('pjax:beforeReplace', { state: state, previousState: previousState })
                    container.trigger(beforeReplaceEvent, [contents, options])
                    container.html(contents)
                    container.trigger('pjax:end', [null, options])
                } else { pjax(options) }
                container[0].offsetHeight
            } else { locationReplace(location.href) }
        }
        initialPop = !1
    }

    function fallbackPjax(options) {
        var url = $.isFunction(options.url) ? options.url() : options.url,
            method = options.type ? options.type.toUpperCase() : 'GET'
        var form = $('<form>', { method: method === 'GET' ? 'GET' : 'POST', action: url, style: 'display:none' })
        if (method !== 'GET' && method !== 'POST') { form.append($('<input>', { type: 'hidden', name: '_method', value: method.toLowerCase() })) }
        var data = options.data
        if (typeof data === 'string') {
            $.each(data.split('&'), function(index, value) {
                var pair = value.split('=')
                form.append($('<input>', { type: 'hidden', name: pair[0], value: pair[1] }))
            })
        } else if ($.isArray(data)) { $.each(data, function(index, value) { form.append($('<input>', { type: 'hidden', name: value.name, value: value.value })) }) } else if (typeof data === 'object') {
            var key
            for (key in data)
                form.append($('<input>', { type: 'hidden', name: key, value: data[key] }))
        }
        $(document.body).append(form)
        form.submit()
    }

    function abortXHR(xhr) {
        if (xhr && xhr.readyState < 4) {
            xhr.onreadystatechange = $.noop
            xhr.abort()
        }
    }

    function uniqueId() { return (new Date).getTime() }

    function cloneContents(container) {
        var cloned = container.clone()
        cloned.find('script').each(function() { if (!this.src) $._data(this, 'globalEval', !1) })
        return cloned.contents()
    }

    function stripInternalParams(url) {
        url.search = url.search.replace(/([?&])(_pjax|_)=[^&]*/g, '').replace(/^&/, '')
        return url.href.replace(/\?($|#)/, '$1')
    }

    function parseURL(url) {
        var a = document.createElement('a')
        a.href = url
        return a
    }

    function stripHash(location) { return location.href.replace(/#.*/, '') }

    function optionsFor(container, options) {
        if (container && options) {
            options = $.extend({}, options)
            options.container = container
            return options
        } else if ($.isPlainObject(container)) { return container } else { return { container: container } }
    }

    function findAll(elems, selector) { return elems.filter(selector).add(elems.find(selector)) }

    function parseHTML(html) { return $.parseHTML(html, document, !0) }

    function extractContainer(data, xhr, options) {
        var obj = {},
            fullDocument = /<html/i.test(data)
        var serverUrl = xhr.getResponseHeader('X-PJAX-URL')
        obj.url = serverUrl ? stripInternalParams(parseURL(serverUrl)) : options.requestUrl
        var $head, $body
        if (fullDocument) {
            $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
            var head = data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)
            $head = head != null ? $(parseHTML(head[0])) : $body
        } else { $head = $body = $(parseHTML(data)) }
        if ($body.length === 0)
            return obj
        obj.title = findAll($head, 'title').last().text()
        if (options.fragment) {
            var $fragment = $body
            if (options.fragment !== 'body') { $fragment = findAll($fragment, options.fragment).first() }
            if ($fragment.length) {
                obj.contents = options.fragment === 'body' ? $fragment : $fragment.contents()
                if (!obj.title)
                    obj.title = $fragment.attr('title') || $fragment.data('title')
            }
        } else if (!fullDocument) { obj.contents = $body }
        if (obj.contents) {
            obj.contents = obj.contents.not(function() { return $(this).is('title') })
            obj.contents.find('title').remove()
            obj.scripts = findAll(obj.contents, 'script[src]').remove()
            obj.contents = obj.contents.not(obj.scripts)
        }
        if (obj.title) obj.title = $.trim(obj.title)
        return obj
    }

    function executeScriptTags(scripts) {
        if (!scripts) return
        var existingScripts = $('script[src]')
        scripts.each(function() {
            var src = this.src
            var matchedScripts = existingScripts.filter(function() { return this.src === src })
            if (matchedScripts.length) return
            var script = document.createElement('script')
            var type = $(this).attr('type')
            if (type) script.type = type
            script.src = $(this).attr('src')
            document.head.appendChild(script)
        })
    }
    var cacheMapping = {}
    var cacheForwardStack = []
    var cacheBackStack = []

    function cachePush(id, value) {
        cacheMapping[id] = value
        cacheBackStack.push(id)
        trimCacheStack(cacheForwardStack, 0)
        trimCacheStack(cacheBackStack, pjax.defaults.maxCacheLength)
    }

    function cachePop(direction, id, value) {
        var pushStack, popStack
        cacheMapping[id] = value
        if (direction === 'forward') {
            pushStack = cacheBackStack
            popStack = cacheForwardStack
        } else {
            pushStack = cacheForwardStack
            popStack = cacheBackStack
        }
        pushStack.push(id)
        id = popStack.pop()
        if (id) delete cacheMapping[id]
        trimCacheStack(pushStack, pjax.defaults.maxCacheLength)
    }

    function trimCacheStack(stack, length) {
        while (stack.length > length)
            delete cacheMapping[stack.shift()]
    }

    function findVersion() {
        return $('meta').filter(function() {
            var name = $(this).attr('http-equiv')
            return name && name.toUpperCase() === 'X-PJAX-VERSION'
        }).attr('content')
    }

    function enable() {
        $.fn.pjax = fnPjax
        $.pjax = pjax
        $.pjax.enable = $.noop
        $.pjax.disable = disable
        $.pjax.click = handleClick
        $.pjax.submit = handleSubmit
        $.pjax.reload = pjaxReload
        $.pjax.defaults = { timeout: 650, push: !0, replace: !1, type: 'GET', dataType: 'html', scrollTo: 0, maxCacheLength: 20, version: findVersion }
        $(window).on('popstate.pjax', onPjaxPopstate)
    }

    function disable() {
        $.fn.pjax = function() { return this }
        $.pjax = fallbackPjax
        $.pjax.enable = enable
        $.pjax.disable = $.noop
        $.pjax.click = $.noop
        $.pjax.submit = $.noop
        $.pjax.reload = function() { window.location.reload() }
        $(window).off('popstate.pjax', onPjaxPopstate)
    }
    if ($.event.props && $.inArray('state', $.event.props) < 0) { $.event.props.push('state') } else if (!('state' in $.Event.prototype)) { $.event.addProp('state') }
    $.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
    if ($.support.pjax) { enable() } else { disable() }
})(jQuery);
$.scrollLock = (function scrollLockClosure() {
    'use strict';
    var $html = $('html'),
        locked = !1,
        prevScroll = { scrollLeft: $(window).scrollLeft(), scrollTop: $(window).scrollTop() },
        prevStyles = {},
        lockStyles = { 'overflow-y': 'scroll', 'position': 'fixed', 'width': '100%' };
    saveStyles();

    function saveStyles() {
        var styleAttr = $html.attr('style'),
            styleStrs = [],
            styleHash = {};
        if (!styleAttr) { return }
        var styleAttrSplit = styleAttr.split("--vh");
        styleAttr = $.trim(styleAttrSplit[0]);
        styleStrs = styleAttr.split(/;\s/);
        $.each(styleStrs, function serializeStyleProp(styleString) {
            if (!styleString) { return }
            var keyValue = styleString.split(/\s:\s/);
            if (keyValue.length < 2) { return }
            styleHash[keyValue[0]] = keyValue[1]
        });
        $.extend(prevStyles, styleHash)
    }

    function lock() {
        var appliedLock = {};
        if (locked) { return }
        prevScroll = { scrollLeft: $(window).scrollLeft(), scrollTop: $(window).scrollTop() };
        saveStyles();
        $.extend(appliedLock, lockStyles, { 'left': -prevScroll.scrollLeft + 'px', 'top': -prevScroll.scrollTop + 'px' });
        $html.css(appliedLock);
        $(window).scrollLeft(0).scrollTop(0);
        locked = !0
    }

    function unlock() {
        if (!locked) { return }
        $html.attr('style', $('<x>').css(prevStyles).attr('style') || '');
        $(window).scrollLeft(prevScroll.scrollLeft).scrollTop(prevScroll.scrollTop);
        locked = !1
    }
    return function scrollLock(on) { if (arguments.length) { if (on) { lock() } else { unlock() } } else { if (locked) { unlock() } else { lock() } } }
}());
/**
 * simplyScroll 2 - a scroll-tastic jQuery plugin
 *
 * http://logicbox.net/jquery/simplyscroll/
 *
 * Copyright (c) 2009-2018 Will Kelly - http://logicbox.net
 *
 * @license MIT
 *
 */
(function(factory) { if (typeof module === "object" && typeof module.exports === "object") { module.exports = factory(require("jquery"), window, document) } else { factory(jQuery, window, document) } }(function($, window, document, undefined) {
    $.fn.simplyScroll = function(options) {
        return this.each(function() {
            if (typeof $(this).data('simplyScroll') === "undefined") {
                var simplyScroll = new $.simplyScroll(this, options);
                $(this).data('simplyScroll', simplyScroll)
            }
        })
    };
    var defaults = { customClass: 'simply-scroll', frameRate: 24, speed: 1, orientation: 'horizontal', auto: !0, autoMode: 'loop', manualMode: 'end', direction: 'forwards', pauseOnHover: !0, pauseOnTouch: !0, pauseButton: !1, startOnLoad: !1, initialOffset: 0 };
    $.simplyScroll = function(el, options) {
        var self = this;
        this.o = $.extend({}, defaults, options || {});
        this.isAuto = this.o.auto !== !1 && this.o.autoMode.match(/^loop|bounce$/) !== null;
        this.isHorizontal = this.o.orientation.match(/^horizontal|vertical$/) !== null && this.o.orientation === defaults.orientation;
        this.isRTL = this.isHorizontal && $("html").attr('dir') === 'rtl';
        this.isForwards = !this.isAuto && !this.isRTL || (this.isAuto && this.o.direction.match(/^forwards|backwards$/) !== null && this.o.direction === defaults.direction);
        this.isLoop = this.isAuto && this.o.autoMode === 'loop' || !this.isAuto && this.o.manualMode === 'loop';
        this.supportsTouch = ('createTouch' in document);
        this.events = this.supportsTouch ? { start: 'touchstart MozTouchDown', move: 'touchmove MozTouchMove', end: 'touchend touchcancel MozTouchRelease' } : { start: 'mouseenter', end: 'mouseleave' };
        this.$list = $(el);
        var $items = this.$list.children();
        this.$list.addClass('simply-scroll-list').wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>');
        if (!this.isAuto) { this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>') } else {
            if (this.o.pauseButton) {
                this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>');
                this.o.pauseOnHover = !1
            }
        }
        if ($items.length > 1) {
            var extra_wrap = !1,
                total = 0;
            if (this.isHorizontal) {
                $items.each(function() { total += $(this).outerWidth(!0) });
                extra_wrap = $items.eq(0).outerWidth(!0) * $items.length !== total
            } else {
                $items.each(function() { total += $(this).outerHeight(!0) });
                extra_wrap = $items.eq(0).outerHeight(!0) * $items.length !== total
            }
            if (extra_wrap) { this.$list = this.$list.wrap('<div></div>').parent().addClass('simply-scroll-list'); if (this.isHorizontal) { this.$list.children().css({ "float": 'left', width: total + 'px' }) } else { this.$list.children().css({ height: total + 'px' }) } }
        }
        if (!this.o.startOnLoad) { this.init() } else { $(window).load(function() { self.init() }) }
    };
    $.simplyScroll.fn = $.simplyScroll.prototype = {};
    $.simplyScroll.fn.extend = $.extend;
    $.simplyScroll.fn.extend({
        init: function() {
            var self = this;
            this.$items = this.$list.children();
            this.$clip = this.$list.parent();
            this.$container = this.$clip.parent();
            this.$btnBack = $('.simply-scroll-back', this.$container);
            this.$btnForward = $('.simply-scroll-forward', this.$container);
            if (!this.isHorizontal) {
                this.itemMax = this.$items.eq(0).outerHeight(!0);
                this.clipMax = this.$clip.height();
                this.dimension = 'height';
                this.moveBackClass = 'simply-scroll-btn-up';
                this.moveForwardClass = 'simply-scroll-btn-down';
                this.scrollPos = 'Top'
            } else {
                this.itemMax = this.$items.eq(0).outerWidth(!0);
                this.clipMax = this.$clip.width();
                this.dimension = 'width';
                this.moveBackClass = 'simply-scroll-btn-left';
                this.moveForwardClass = 'simply-scroll-btn-right';
                this.scrollPos = 'Left'
            }
            this.posMin = 0;
            this.posMax = this.$items.length * this.itemMax;
            var addItems = Math.ceil(this.clipMax / this.itemMax);
            if (this.isAuto && this.o.autoMode === 'loop') {
                this.$list.css(this.dimension, this.posMax + (this.itemMax * addItems) + 'px');
                this.posMax += (this.clipMax - this.o.speed);
                if (this.isForwards) {
                    this.$items.slice(0, addItems).clone(!0).appendTo(this.$list);
                    this.resetPosition = 0
                } else {
                    this.$items.slice(-addItems).clone(!0).prependTo(this.$list);
                    this.resetPosition = this.$items.length * this.itemMax;
                    if (this.isRTL) {
                        this.$clip[0].dir = 'ltr';
                        this.$items.css('float', 'right')
                    }
                }
            } else if (!this.isAuto && this.o.manualMode === 'loop') {
                this.posMax += this.itemMax * addItems;
                this.$list.css(this.dimension, this.posMax + (this.itemMax * addItems) + 'px');
                this.posMax += (this.clipMax - this.o.speed);
                this.$items.slice(0, addItems).clone(!0).appendTo(this.$list);
                this.$items.slice(-addItems).clone(!0).prependTo(this.$list);
                this.resetPositionForwards = this.resetPosition = addItems * this.itemMax;
                this.resetPositionBackwards = this.$items.length * this.itemMax;
                this.$btnBack.bind(this.events.start, function() {
                    self.isForwards = !1;
                    self.resetPosition = self.resetPositionBackwards
                });
                this.$btnForward.bind(this.events.start, function() {
                    self.isForwards = !0;
                    self.resetPosition = self.resetPositionForwards
                })
            } else {
                this.$list.css(this.dimension, this.posMax + 'px');
                if (this.isForwards) { this.resetPosition = 0 } else {
                    this.resetPosition = this.$items.length * this.itemMax;
                    if (this.isRTL) {
                        this.$clip[0].dir = 'ltr';
                        this.$items.css('float', 'right')
                    }
                }
            }
            this.resetPos(this.o.initialOffset);
            this.timestamp = null;
            this.interval = null;
            this.destroy = function() {
                cancelAnimationFrame(this.interval);
                this.resetPos(this.o.initialOffset);
                var $wrapper = this.$list.closest('.simply-scroll');
                this.$list.removeClass("simply-scroll-list").removeAttr("style");
                $wrapper.before(this.$list);
                $wrapper.remove();
                this.$list.removeData('simplyScroll')
            }
            if (!(!this.isAuto && this.o.manualMode === 'end')) { while (this.itemMax % this.o.speed !== 0) { this.o.speed--; if (this.o.speed === 0) { this.o.speed = 1; break } } }
            this.trigger = null;
            this.funcMoveBack = function(e) {
                if (e !== undefined) { e.preventDefault() }
                self.trigger = !self.isAuto && self.o.manualMode === 'end' ? this : null;
                if (self.isAuto) { self.isForwards ? self.moveBack() : self.moveForward() } else { self.moveBack() }
            };
            this.funcMoveForward = function(e) {
                if (e !== undefined) { e.preventDefault() }
                self.trigger = !self.isAuto && self.o.manualMode === 'end' ? this : null;
                if (self.isAuto) { self.isForwards ? self.moveForward() : self.moveBack() } else { self.moveForward() }
            };
            this.funcMovePause = function() { self.movePause() };
            this.funcMoveStop = function() { self.moveStop() };
            this.funcMoveResume = function() { self.moveResume() };
            if (this.isAuto) {
                this.paused = !1;

                function togglePause() {
                    if (self.paused === !1) {
                        self.paused = !0;
                        self.funcMovePause()
                    } else {
                        self.paused = !1;
                        self.funcMoveResume()
                    }
                    return self.paused
                }
                if (this.supportsTouch && this.$items.find('a').length) { this.supportsTouch = !1 }
                if (this.isAuto && this.o.pauseOnHover && !this.supportsTouch) { this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume) } else if (this.isAuto && this.o.pauseOnTouch && !this.o.pauseButton && this.supportsTouch) {
                    var touchStartPos, scrollStartPos;
                    this.$clip.bind(this.events.start, function(e) {
                        togglePause();
                        var touch = e.originalEvent.touches[0];
                        touchStartPos = self.isHorizontal ? touch.pageX : touch.pageY;
                        scrollStartPos = self.$clip[0]['scroll' + self.scrollPos];
                        e.stopPropagation();
                        e.preventDefault()
                    }).bind(this.events.move, function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var touch = e.originalEvent.touches[0],
                            endTouchPos = self.isHorizontal ? touch.pageX : touch.pageY,
                            pos = (touchStartPos - endTouchPos) + scrollStartPos;
                        if (pos < 0) pos = 0;
                        else if (pos > self.posMax) pos = self.posMax;
                        self.$clip[0]['scroll' + self.scrollPos] = pos;
                        self.funcMovePause();
                        self.paused = !0
                    })
                } else {
                    if (this.o.pauseButton) {
                        this.$btnPause = $(".simply-scroll-btn-pause", this.$container).bind('click', function(e) {
                            e.preventDefault();
                            togglePause() ? $(this).addClass('active') : $(this).removeClass('active')
                        })
                    }
                }
                this.funcMoveForward()
            } else {
                this.$btnBack.addClass('simply-scroll-btn' + ' ' + this.moveBackClass).bind(this.events.start, this.funcMoveBack).bind(this.events.end, this.funcMoveStop);
                this.$btnForward.addClass('simply-scroll-btn' + ' ' + this.moveForwardClass).bind(this.events.start, this.funcMoveForward).bind(this.events.end, this.funcMoveStop);
                if (this.o.manualMode === 'end') {!this.isRTL ? this.$btnBack.addClass('disabled') : this.$btnForward.addClass('disabled') }
            }
        },
        moveForward: function() {
            var self = this;
            this.movement = 'forward';
            if (this.trigger !== null) { this.$btnBack.removeClass('disabled') }
            var frame = function(timestamp) {
                if (self.$clip[0]['scroll' + self.scrollPos] < (self.posMax - self.clipMax)) {
                    var delta = (timestamp - (self.timestamp || timestamp)) * self.o.speed / self.o.frameRate;
                    self.$clip[0]['scroll' + self.scrollPos] += Math.ceil(delta)
                } else if (self.isLoop) { self.resetPos() } else { self.moveStop(self.movement) }
                self.timestamp = timestamp;
                self.interval = requestAnimationFrame(frame)
            };
            requestAnimationFrame(frame)
        },
        moveBack: function() {
            var self = this;
            this.movement = 'back';
            if (this.trigger !== null) { this.$btnForward.removeClass('disabled') }
            var frame = function(timestamp) {
                if (self.$clip[0]['scroll' + self.scrollPos] > self.posMin) {
                    var delta = (timestamp - (self.timestamp || timestamp)) * self.o.speed / self.o.frameRate;
                    self.$clip[0]['scroll' + self.scrollPos] -= Math.ceil(delta)
                } else if (self.isLoop) { self.resetPos() } else { self.moveStop(self.movement) }
                self.timestamp = timestamp;
                self.interval = requestAnimationFrame(frame)
            };
            requestAnimationFrame(frame)
        },
        movePause: function() {
            cancelAnimationFrame(this.interval);
            this.timestamp = null
        },
        moveStop: function(moveDir) {
            this.movePause();
            this.timestamp = null;
            if (this.trigger !== null) {
                if (typeof moveDir !== 'undefined') { $(this.trigger).addClass('disabled') }
                this.trigger = null
            }
            if (this.isAuto) { if (this.o.autoMode === 'bounce') { moveDir === 'forward' ? this.moveBack() : this.moveForward() } }
        },
        moveResume: function() { this.movement === 'forward' ? this.moveForward() : this.moveBack() },
        resetPos: function(resetPos) { this.$clip[0]['scroll' + this.scrollPos] = resetPos ? resetPos : this.resetPosition }
    })
}));
jQuery.fn.sortElements = (function() {
    var sort = [].sort;
    return function(comparator, getSortable) {
        getSortable = getSortable || function() { return this };
        var placements = this.map(function() {
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);
            return function() {
                if (parentNode === this) { throw new Error("You can't sort elements if any one is a descendant of another.") }
                parentNode.insertBefore(this, nextSibling);
                parentNode.removeChild(nextSibling)
            }
        });
        return sort.call(this, comparator).each(function(i) { placements[i].call(getSortable.call(this)) })
    }
})(); /*! js-cookie v2.2.0 | MIT */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() { return window.Cookies = o, t }
    }
}(function() {
    function e() { for (var e = 0, n = {}; e < arguments.length; e++) { var o = arguments[e]; for (var t in o) n[t] = o[t] } return n }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({ path: "/" }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try { c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c) } catch (e) {} r = o.write ? o.write(r, n) : encodeURIComponent(r + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(n + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                    try {
                        var m = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, m) : o(C, m) || C.replace(d, decodeURIComponent), this.json) try { C = JSON.parse(C) } catch (e) {}
                        if (n === m) { c = C; break } n || (c[m] = C)
                    } catch (e) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) { return t.call(t, e) }, t.getJSON = function() { return t.apply({ json: !0 }, [].slice.call(arguments)) }, t.defaults = {}, t.remove = function(n, o) { t(n, "", e(o, { expires: -1 })) }, t.withConverter = n, t
    }
    return n(function() {})
});
/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2017 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   https://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-beta.2
 *
 */
;
(function(root, factory) { if (typeof exports === "object") { module.exports = factory(root) } else if (typeof define === "function" && define.amd) { define([], factory(root)) } else { root.LazyLoad = factory(root) } })(typeof global !== "undefined" ? global : this.window || this.global, function(root) {
    "use strict";
    var defaults = { src: "data-src", srcset: "data-srcset", selector: ".lazyload" };
    var extend = function() {
        var extended = {};
        var deep = !1;
        var i = 0;
        var length = arguments.length;
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++
        }
        var merge = function(obj) { for (var prop in obj) { if (Object.prototype.hasOwnProperty.call(obj, prop)) { if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") { extended[prop] = extend(!0, extended[prop], obj[prop]) } else { extended[prop] = obj[prop] } } } };
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj)
        }
        return extended
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        this.images = images || document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init()
    }
    LazyLoad.prototype = {
        init: function() {
            if (!root.IntersectionObserver) { this.loadImages(); return }
            var self = this;
            var observerConfig = { root: null, rootMargin: "0px", threshold: [0] };
            this.observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.intersectionRatio > 0) {
                        self.observer.unobserve(entry.target);
                        var src = entry.target.getAttribute(self.settings.src);
                        var srcset = entry.target.getAttribute(self.settings.srcset);
                        if ("img" === entry.target.tagName.toLowerCase()) {
                            if (src) { entry.target.src = src }
                            if (srcset) { entry.target.srcset = srcset }
                        } else { entry.target.style.backgroundImage = "url(" + src + ")" }
                    }
                })
            }, observerConfig);
            this.images.forEach(function(image) { self.observer.observe(image) })
        },
        loadAndDestroy: function() {
            if (!this.settings) { return }
            this.loadImages();
            this.destroy()
        },
        loadImages: function() {
            if (!this.settings) { return }
            var self = this;
            this.images.forEach(function(image) {
                var src = image.getAttribute(self.settings.src);
                var srcset = image.getAttribute(self.settings.srcset);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) { image.src = src }
                    if (srcset) { image.srcset = srcset }
                } else { image.style.backgroundImage = "url(" + src + ")" }
            })
        },
        destroy: function() {
            if (!this.settings) { return }
            this.observer.disconnect();
            this.settings = null
        }
    };
    root.lazyload = function(images, options) { return new LazyLoad(images, options) };
    if (root.jQuery) {
        var $ = root.jQuery;
        $.fn.lazyload = function(options) {
            options = options || {};
            options.attribute = options.attribute || "data-src";
            new LazyLoad($.makeArray(this), options);
            return this
        }
    }
    return LazyLoad
});
(typeof navigator !== "undefined") && (function(root, factory) {
    if (typeof define === "function" && define.amd) { define(function() { return factory(root) }) } else if (typeof module === "object" && module.exports) { module.exports = factory(root) } else {
        root.lottie = factory(root);
        root.bodymovin = root.lottie
    }
}((window || {}), function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg";
    var locationHref = '';
    var initialDefaultFrame = -999999;
    var subframeEnabled = !0;
    var expressionsPlugin;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var cachedColors = {};
    var bm_rounder = Math.round;
    var bm_rnd;
    var bm_pow = Math.pow;
    var bm_sqrt = Math.sqrt;
    var bm_abs = Math.abs;
    var bm_floor = Math.floor;
    var bm_max = Math.max;
    var bm_min = Math.min;
    var blitter = 10;
    var BMMath = {};
    (function() { var propertyNames = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]; var i, len = propertyNames.length; for (i = 0; i < len; i += 1) { BMMath[propertyNames[i]] = Math[propertyNames[i]] } }());

    function ProjectInterface() { return {} }
    BMMath.random = Math.random;
    BMMath.abs = function(val) {
        var tOfVal = typeof val;
        if (tOfVal === 'object' && val.length) {
            var absArr = createSizedArray(val.length);
            var i, len = val.length;
            for (i = 0; i < len; i += 1) { absArr[i] = Math.abs(val[i]) }
            return absArr
        }
        return Math.abs(val)
    };
    var defaultCurveSegments = 150;
    var degToRads = Math.PI / 180;
    var roundCorner = 0.5519;

    function roundValues(flag) { if (flag) { bm_rnd = Math.round } else { bm_rnd = function(val) { return val } } }
    roundValues(!1);

    function styleDiv(element) {
        element.style.position = 'absolute';
        element.style.top = 0;
        element.style.left = 0;
        element.style.display = 'block';
        element.style.transformOrigin = element.style.webkitTransformOrigin = '0 0';
        element.style.backfaceVisibility = element.style.webkitBackfaceVisibility = 'visible';
        element.style.transformStyle = element.style.webkitTransformStyle = element.style.mozTransformStyle = "preserve-3d"
    }

    function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
        this.type = type;
        this.currentTime = currentTime;
        this.totalTime = totalTime;
        this.direction = frameMultiplier < 0 ? -1 : 1
    }

    function BMCompleteEvent(type, frameMultiplier) {
        this.type = type;
        this.direction = frameMultiplier < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
        this.type = type;
        this.currentLoop = currentLoop;
        this.totalLoops = totalLoops;
        this.direction = frameMultiplier < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(type, firstFrame, totalFrames) {
        this.type = type;
        this.firstFrame = firstFrame;
        this.totalFrames = totalFrames
    }

    function BMDestroyEvent(type, target) {
        this.type = type;
        this.target = target
    }

    function BMRenderFrameErrorEvent(nativeError, currentTime) {
        this.type = 'renderFrameError';
        this.nativeError = nativeError;
        this.currentTime = currentTime
    }

    function BMConfigErrorEvent(nativeError) {
        this.type = 'configError';
        this.nativeError = nativeError
    }

    function BMAnimationConfigErrorEvent(type, nativeError) {
        this.type = type;
        this.nativeError = nativeError;
        this.currentTime = currentTime
    }
    var createElementID = (function() { var _count = 0; return function createID() { return '__lottie_element_' + ++_count } }())

    function HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break
        }
        return [r, g, b]
    }

    function RGBtoHSV(r, g, b) {
        var max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h, s = (max === 0 ? 0 : d / max),
            v = max / 255;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break
        }
        return [h, s, v]
    }

    function addSaturationToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[1] += offset;
        if (hsv[1] > 1) { hsv[1] = 1 } else if (hsv[1] <= 0) { hsv[1] = 0 }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2])
    }

    function addBrightnessToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[2] += offset;
        if (hsv[2] > 1) { hsv[2] = 1 } else if (hsv[2] < 0) { hsv[2] = 0 }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2])
    }

    function addHueToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[0] += offset / 360;
        if (hsv[0] > 1) { hsv[0] -= 1 } else if (hsv[0] < 0) { hsv[0] += 1 }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2])
    }
    var rgbToHex = (function() {
        var colorMap = [];
        var i;
        var hex;
        for (i = 0; i < 256; i += 1) {
            hex = i.toString(16);
            colorMap[i] = hex.length == 1 ? '0' + hex : hex
        }
        return function(r, g, b) {
            if (r < 0) { r = 0 }
            if (g < 0) { g = 0 }
            if (b < 0) { b = 0 }
            return '#' + colorMap[r] + colorMap[g] + colorMap[b]
        }
    }());

    function BaseEvent() {}
    BaseEvent.prototype = {
        triggerEvent: function(eventName, args) { if (this._cbs[eventName]) { var len = this._cbs[eventName].length; for (var i = 0; i < len; i++) { this._cbs[eventName][i](args) } } },
        addEventListener: function(eventName, callback) {
            if (!this._cbs[eventName]) { this._cbs[eventName] = [] }
            this._cbs[eventName].push(callback);
            return function() { this.removeEventListener(eventName, callback) }.bind(this)
        },
        removeEventListener: function(eventName, callback) {
            if (!callback) { this._cbs[eventName] = null } else if (this._cbs[eventName]) {
                var i = 0,
                    len = this._cbs[eventName].length;
                while (i < len) {
                    if (this._cbs[eventName][i] === callback) {
                        this._cbs[eventName].splice(i, 1);
                        i -= 1;
                        len -= 1
                    }
                    i += 1
                }
                if (!this._cbs[eventName].length) { this._cbs[eventName] = null }
            }
        }
    };
    var createTypedArray = (function() {
        function createRegularArray(type, len) {
            var i = 0,
                arr = [],
                value;
            switch (type) {
                case 'int16':
                case 'uint8c':
                    value = 1;
                    break;
                default:
                    value = 1.1;
                    break
            }
            for (i = 0; i < len; i += 1) { arr.push(value) }
            return arr
        }

        function createTypedArray(type, len) { if (type === 'float32') { return new Float32Array(len) } else if (type === 'int16') { return new Int16Array(len) } else if (type === 'uint8c') { return new Uint8ClampedArray(len) } }
        if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') { return createTypedArray } else { return createRegularArray }
    }());

    function createSizedArray(len) { return Array.apply(null, { length: len }) }

    function createNS(type) { return document.createElementNS(svgNS, type) }

    function createTag(type) { return document.createElement(type) }

    function DynamicPropertyContainer() {};
    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(prop) {
            if (this.dynamicProperties.indexOf(prop) === -1) {
                this.dynamicProperties.push(prop);
                this.container.addDynamicProperty(this);
                this._isAnimated = !0
            }
        },
        iterateDynamicProperties: function() { this._mdf = !1; var i, len = this.dynamicProperties.length; for (i = 0; i < len; i += 1) { this.dynamicProperties[i].getValue(); if (this.dynamicProperties[i]._mdf) { this._mdf = !0 } } },
        initDynamicPropertyContainer: function(container) {
            this.container = container;
            this.dynamicProperties = [];
            this._mdf = !1;
            this._isAnimated = !1
        }
    }
    var getBlendMode = (function() {
        var blendModeEnums = { 0: 'source-over', 1: 'multiply', 2: 'screen', 3: 'overlay', 4: 'darken', 5: 'lighten', 6: 'color-dodge', 7: 'color-burn', 8: 'hard-light', 9: 'soft-light', 10: 'difference', 11: 'exclusion', 12: 'hue', 13: 'saturation', 14: 'color', 15: 'luminosity' }
        return function(mode) { return blendModeEnums[mode] || '' }
    }())
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Matrix = (function() {
        var _cos = Math.cos;
        var _sin = Math.sin;
        var _tan = Math.tan;
        var _rnd = Math.round;

        function reset() {
            this.props[0] = 1;
            this.props[1] = 0;
            this.props[2] = 0;
            this.props[3] = 0;
            this.props[4] = 0;
            this.props[5] = 1;
            this.props[6] = 0;
            this.props[7] = 0;
            this.props[8] = 0;
            this.props[9] = 0;
            this.props[10] = 1;
            this.props[11] = 0;
            this.props[12] = 0;
            this.props[13] = 0;
            this.props[14] = 0;
            this.props[15] = 1;
            return this
        }

        function rotate(angle) {
            if (angle === 0) { return this }
            var mCos = _cos(angle);
            var mSin = _sin(angle);
            return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function rotateX(angle) {
            if (angle === 0) { return this }
            var mCos = _cos(angle);
            var mSin = _sin(angle);
            return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1)
        }

        function rotateY(angle) {
            if (angle === 0) { return this }
            var mCos = _cos(angle);
            var mSin = _sin(angle);
            return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1)
        }

        function rotateZ(angle) {
            if (angle === 0) { return this }
            var mCos = _cos(angle);
            var mSin = _sin(angle);
            return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function shear(sx, sy) { return this._t(1, sy, sx, 1, 0, 0) }

        function skew(ax, ay) { return this.shear(_tan(ax), _tan(ay)) }

        function skewFromAxis(ax, angle) { var mCos = _cos(angle); var mSin = _sin(angle); return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function scale(sx, sy, sz) {
            if (!sz && sz !== 0) { sz = 1 }
            if (sx === 1 && sy === 1 && sz === 1) { return this }
            return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)
        }

        function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            this.props[0] = a;
            this.props[1] = b;
            this.props[2] = c;
            this.props[3] = d;
            this.props[4] = e;
            this.props[5] = f;
            this.props[6] = g;
            this.props[7] = h;
            this.props[8] = i;
            this.props[9] = j;
            this.props[10] = k;
            this.props[11] = l;
            this.props[12] = m;
            this.props[13] = n;
            this.props[14] = o;
            this.props[15] = p;
            return this
        }

        function translate(tx, ty, tz) {
            tz = tz || 0;
            if (tx !== 0 || ty !== 0 || tz !== 0) { return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1) }
            return this
        }

        function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
            var _p = this.props;
            if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
                _p[12] = _p[12] * a2 + _p[15] * m2;
                _p[13] = _p[13] * f2 + _p[15] * n2;
                _p[14] = _p[14] * k2 + _p[15] * o2;
                _p[15] = _p[15] * p2;
                this._identityCalculated = !1;
                return this
            }
            var a1 = _p[0];
            var b1 = _p[1];
            var c1 = _p[2];
            var d1 = _p[3];
            var e1 = _p[4];
            var f1 = _p[5];
            var g1 = _p[6];
            var h1 = _p[7];
            var i1 = _p[8];
            var j1 = _p[9];
            var k1 = _p[10];
            var l1 = _p[11];
            var m1 = _p[12];
            var n1 = _p[13];
            var o1 = _p[14];
            var p1 = _p[15];
            _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
            _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
            _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
            _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
            _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
            _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
            _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
            _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
            _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
            _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
            _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
            _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
            _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
            _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
            _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
            _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
            this._identityCalculated = !1;
            return this
        }

        function isIdentity() {
            if (!this._identityCalculated) {
                this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
                this._identityCalculated = !0
            }
            return this._identity
        }

        function equals(matr) {
            var i = 0;
            while (i < 16) {
                if (matr.props[i] !== this.props[i]) { return !1 }
                i += 1
            }
            return !0
        }

        function clone(matr) { var i; for (i = 0; i < 16; i += 1) { matr.props[i] = this.props[i] } }

        function cloneFromProps(props) { var i; for (i = 0; i < 16; i += 1) { this.props[i] = props[i] } }

        function applyToPoint(x, y, z) { return { x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14] } }

        function applyToX(x, y, z) { return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12] }

        function applyToY(x, y, z) { return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13] }

        function applyToZ(x, y, z) { return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14] }

        function getInverseMatrix() {
            var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
            var a = this.props[5] / determinant;
            var b = -this.props[1] / determinant;
            var c = -this.props[4] / determinant;
            var d = this.props[0] / determinant;
            var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
            var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
            var inverseMatrix = new Matrix();
            inverseMatrix.props[0] = a;
            inverseMatrix.props[1] = b;
            inverseMatrix.props[4] = c;
            inverseMatrix.props[5] = d;
            inverseMatrix.props[12] = e;
            inverseMatrix.props[13] = f;
            return inverseMatrix
        }

        function inversePoint(pt) { var inverseMatrix = this.getInverseMatrix(); return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0) }

        function inversePoints(pts) {
            var i, len = pts.length,
                retPts = [];
            for (i = 0; i < len; i += 1) { retPts[i] = inversePoint(pts[i]) }
            return retPts
        }

        function applyToTriplePoints(pt1, pt2, pt3) {
            var arr = createTypedArray('float32', 6);
            if (this.isIdentity()) {
                arr[0] = pt1[0];
                arr[1] = pt1[1];
                arr[2] = pt2[0];
                arr[3] = pt2[1];
                arr[4] = pt3[0];
                arr[5] = pt3[1]
            } else {
                var p0 = this.props[0],
                    p1 = this.props[1],
                    p4 = this.props[4],
                    p5 = this.props[5],
                    p12 = this.props[12],
                    p13 = this.props[13];
                arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
                arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
                arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
                arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
                arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
                arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13
            }
            return arr
        }

        function applyToPointArray(x, y, z) {
            var arr;
            if (this.isIdentity()) { arr = [x, y, z] } else { arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]] }
            return arr
        }

        function applyToPointStringified(x, y) {
            if (this.isIdentity()) { return x + ',' + y }
            var _p = this.props;
            return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100
        }

        function toCSS() {
            var i = 0;
            var props = this.props;
            var cssValue = 'matrix3d(';
            var v = 10000;
            while (i < 16) {
                cssValue += _rnd(props[i] * v) / v;
                cssValue += i === 15 ? ')' : ',';
                i += 1
            }
            return cssValue
        }

        function roundMatrixProperty(val) {
            var v = 10000;
            if ((val < 0.000001 && val > 0) || (val > -0.000001 && val < 0)) { return _rnd(val * v) / v }
            return val
        }

        function to2dCSS() { var props = this.props; var _a = roundMatrixProperty(props[0]); var _b = roundMatrixProperty(props[1]); var _c = roundMatrixProperty(props[4]); var _d = roundMatrixProperty(props[5]); var _e = roundMatrixProperty(props[12]); var _f = roundMatrixProperty(props[13]); return "matrix(" + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ")" }
        return function() {
            this.reset = reset;
            this.rotate = rotate;
            this.rotateX = rotateX;
            this.rotateY = rotateY;
            this.rotateZ = rotateZ;
            this.skew = skew;
            this.skewFromAxis = skewFromAxis;
            this.shear = shear;
            this.scale = scale;
            this.setTransform = setTransform;
            this.translate = translate;
            this.transform = transform;
            this.applyToPoint = applyToPoint;
            this.applyToX = applyToX;
            this.applyToY = applyToY;
            this.applyToZ = applyToZ;
            this.applyToPointArray = applyToPointArray;
            this.applyToTriplePoints = applyToTriplePoints;
            this.applyToPointStringified = applyToPointStringified;
            this.toCSS = toCSS;
            this.to2dCSS = to2dCSS;
            this.clone = clone;
            this.cloneFromProps = cloneFromProps;
            this.equals = equals;
            this.inversePoints = inversePoints;
            this.inversePoint = inversePoint;
            this.getInverseMatrix = getInverseMatrix;
            this._t = this.transform;
            this.isIdentity = isIdentity;
            this._identity = !0;
            this._identityCalculated = !1;
            this.props = createTypedArray('float32', 16);
            this.reset()
        }
    }());
    (function(pool, math) {
        var global = this,
            width = 256,
            chunks = 6,
            digits = 52,
            rngname = 'random',
            startdenom = math.pow(width, chunks),
            significance = math.pow(2, digits),
            overflow = significance * 2,
            mask = width - 1,
            nodecrypto;

        function seedrandom(seed, options, callback) {
            var key = [];
            options = (options === !0) ? { entropy: !0 } : (options || {});
            var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : (seed === null) ? autoseed() : seed, 3), key);
            var arc4 = new ARC4(key);
            var prng = function() {
                var n = arc4.g(chunks),
                    d = startdenom,
                    x = 0;
                while (n < significance) {
                    n = (n + x) * width;
                    d *= width;
                    x = arc4.g(1)
                }
                while (n >= overflow) {
                    n /= 2;
                    d /= 2;
                    x >>>= 1
                }
                return (n + x) / d
            };
            prng.int32 = function() { return arc4.g(4) | 0 };
            prng.quick = function() { return arc4.g(4) / 0x100000000 };
            prng.double = prng;
            mixkey(tostring(arc4.S), pool);
            return (options.pass || callback || function(prng, seed, is_math_call, state) {
                if (state) {
                    if (state.S) { copy(state, arc4) }
                    prng.state = function() { return copy(arc4, {}) }
                }
                if (is_math_call) { math[rngname] = prng; return seed } else return prng
            })(prng, shortseed, 'global' in options ? options.global : (this == math), options.state)
        }
        math['seed' + rngname] = seedrandom;

        function ARC4(key) {
            var t, keylen = key.length,
                me = this,
                i = 0,
                j = me.i = me.j = 0,
                s = me.S = [];
            if (!keylen) { key = [keylen++] }
            while (i < width) { s[i] = i++ }
            for (i = 0; i < width; i++) {
                s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
                s[j] = t
            }
            me.g = function(count) {
                var t, r = 0,
                    i = me.i,
                    j = me.j,
                    s = me.S;
                while (count--) {
                    t = s[i = mask & (i + 1)];
                    r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))]
                }
                me.i = i;
                me.j = j;
                return r
            }
        }

        function copy(f, t) {
            t.i = f.i;
            t.j = f.j;
            t.S = f.S.slice();
            return t
        }

        function flatten(obj, depth) {
            var result = [],
                typ = (typeof obj),
                prop;
            if (depth && typ == 'object') { for (prop in obj) { try { result.push(flatten(obj[prop], depth - 1)) } catch (e) {} } }
            return (result.length ? result : typ == 'string' ? obj : obj + '\0')
        }

        function mixkey(seed, key) {
            var stringseed = seed + '',
                smear, j = 0;
            while (j < stringseed.length) { key[mask & j] = mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++)) }
            return tostring(key)
        }

        function autoseed() {
            try {
                if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)) }
                var out = new Uint8Array(width);
                (global.crypto || global.msCrypto).getRandomValues(out);
                return tostring(out)
            } catch (e) {
                var browser = global.navigator,
                    plugins = browser && browser.plugins;
                return [+new Date(), global, plugins, global.screen, tostring(pool)]
            }
        }

        function tostring(a) { return String.fromCharCode.apply(0, a) }
        mixkey(math.random(), pool)
    })([], BMMath);
    var BezierFactory = (function() {
        var ob = {};
        ob.getBezierEasing = getBezierEasing;
        var beziers = {};

        function getBezierEasing(a, b, c, d, nm) {
            var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');
            if (beziers[str]) { return beziers[str] }
            var bezEasing = new BezierEasing([a, b, c, d]);
            beziers[str] = bezEasing;
            return bezEasing
        }
        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 0.001;
        var SUBDIVISION_PRECISION = 0.0000001;
        var SUBDIVISION_MAX_ITERATIONS = 10;
        var kSplineTableSize = 11;
        var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
        var float32ArraySupported = typeof Float32Array === "function";

        function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }

        function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }

        function C(aA1) { return 3.0 * aA1 }

        function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }

        function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

        function binarySubdivide(aX, aA, aB, mX1, mX2) {
            var currentX, currentT, i = 0;
            do {
                currentT = aA + (aB - aA) / 2.0;
                currentX = calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0.0) { aB = currentT } else { aA = currentT }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT
        }

        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
                var currentSlope = getSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0.0) return aGuessT;
                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope
            }
            return aGuessT
        }

        function BezierEasing(points) {
            this._p = points;
            this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
            this._precomputed = !1;
            this.get = this.get.bind(this)
        }
        BezierEasing.prototype = {
            get: function(x) {
                var mX1 = this._p[0],
                    mY1 = this._p[1],
                    mX2 = this._p[2],
                    mY2 = this._p[3];
                if (!this._precomputed) this._precompute();
                if (mX1 === mY1 && mX2 === mY2) return x;
                if (x === 0) return 0;
                if (x === 1) return 1;
                return calcBezier(this._getTForX(x), mY1, mY2)
            },
            _precompute: function() {
                var mX1 = this._p[0],
                    mY1 = this._p[1],
                    mX2 = this._p[2],
                    mY2 = this._p[3];
                this._precomputed = !0;
                if (mX1 !== mY1 || mX2 !== mY2)
                    this._calcSampleValues()
            },
            _calcSampleValues: function() {
                var mX1 = this._p[0],
                    mX2 = this._p[2];
                for (var i = 0; i < kSplineTableSize; ++i) { this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2) }
            },
            _getTForX: function(aX) {
                var mX1 = this._p[0],
                    mX2 = this._p[2],
                    mSampleValues = this._mSampleValues;
                var intervalStart = 0.0;
                var currentSample = 1;
                var lastSample = kSplineTableSize - 1;
                for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) { intervalStart += kSampleStepSize }
                --currentSample;
                var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
                var guessForT = intervalStart + dist * kSampleStepSize;
                var initialSlope = getSlope(guessForT, mX1, mX2);
                if (initialSlope >= NEWTON_MIN_SLOPE) { return newtonRaphsonIterate(aX, guessForT, mX1, mX2) } else if (initialSlope === 0.0) { return guessForT } else { return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2) }
            }
        };
        return ob
    }());
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
        }
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = setTimeout(function() { callback(currTime + timeToCall) }, timeToCall);
                lastTime = currTime + timeToCall;
                return id
            };
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) { clearTimeout(id) }
    }());

    function extendPrototype(sources, destination) {
        var i, len = sources.length,
            sourcePrototype;
        for (i = 0; i < len; i += 1) { sourcePrototype = sources[i].prototype; for (var attr in sourcePrototype) { if (sourcePrototype.hasOwnProperty(attr)) destination.prototype[attr] = sourcePrototype[attr] } }
    }

    function getDescriptor(object, prop) { return Object.getOwnPropertyDescriptor(object, prop) }

    function createProxyFunction(prototype) {
        function ProxyFunction() {}
        ProxyFunction.prototype = prototype;
        return ProxyFunction
    }

    function bezFunction() {
        var easingFunctions = [];
        var math = Math;

        function pointOnLine2D(x1, y1, x2, y2, x3, y3) { var det1 = (x1 * y2) + (y1 * x3) + (x2 * y3) - (x3 * y2) - (y3 * x1) - (x2 * y1); return det1 > -0.001 && det1 < 0.001 }

        function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
            if (z1 === 0 && z2 === 0 && z3 === 0) { return pointOnLine2D(x1, y1, x2, y2, x3, y3) }
            var dist1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
            var dist2 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2) + Math.pow(z3 - z1, 2));
            var dist3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2) + Math.pow(z3 - z2, 2));
            var diffDist;
            if (dist1 > dist2) { if (dist1 > dist3) { diffDist = dist1 - dist2 - dist3 } else { diffDist = dist3 - dist2 - dist1 } } else if (dist3 > dist2) { diffDist = dist3 - dist2 - dist1 } else { diffDist = dist2 - dist1 - dist3 }
            return diffDist > -0.0001 && diffDist < 0.0001
        }
        var getBezierLength = (function() {
            return function(pt1, pt2, pt3, pt4) {
                var curveSegments = defaultCurveSegments;
                var k;
                var i, len;
                var ptCoord, perc, addedLength = 0;
                var ptDistance;
                var point = [],
                    lastPoint = [];
                var lengthData = bezier_length_pool.newElement();
                len = pt3.length;
                for (k = 0; k < curveSegments; k += 1) {
                    perc = k / (curveSegments - 1);
                    ptDistance = 0;
                    for (i = 0; i < len; i += 1) {
                        ptCoord = bm_pow(1 - perc, 3) * pt1[i] + 3 * bm_pow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bm_pow(perc, 2) * pt4[i] + bm_pow(perc, 3) * pt2[i];
                        point[i] = ptCoord;
                        if (lastPoint[i] !== null) { ptDistance += bm_pow(point[i] - lastPoint[i], 2) }
                        lastPoint[i] = point[i]
                    }
                    if (ptDistance) {
                        ptDistance = bm_sqrt(ptDistance);
                        addedLength += ptDistance
                    }
                    lengthData.percents[k] = perc;
                    lengthData.lengths[k] = addedLength
                }
                lengthData.addedLength = addedLength;
                return lengthData
            }
        }());

        function getSegmentsLength(shapeData) {
            var segmentsLength = segments_length_pool.newElement();
            var closed = shapeData.c;
            var pathV = shapeData.v;
            var pathO = shapeData.o;
            var pathI = shapeData.i;
            var i, len = shapeData._length;
            var lengths = segmentsLength.lengths;
            var totalLength = 0;
            for (i = 0; i < len - 1; i += 1) {
                lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
                totalLength += lengths[i].addedLength
            }
            if (closed && len) {
                lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
                totalLength += lengths[i].addedLength
            }
            segmentsLength.totalLength = totalLength;
            return segmentsLength
        }

        function BezierData(length) {
            this.segmentLength = 0;
            this.points = new Array(length)
        }

        function PointData(partial, point) {
            this.partialLength = partial;
            this.point = point
        }
        var buildBezierData = (function() {
            var storedData = {};
            return function(pt1, pt2, pt3, pt4) {
                var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');
                if (!storedData[bezierName]) {
                    var curveSegments = defaultCurveSegments;
                    var k, i, len;
                    var ptCoord, perc, addedLength = 0;
                    var ptDistance;
                    var point, lastPoint = null;
                    if (pt1.length === 2 && (pt1[0] != pt2[0] || pt1[1] != pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) { curveSegments = 2 }
                    var bezierData = new BezierData(curveSegments);
                    len = pt3.length;
                    for (k = 0; k < curveSegments; k += 1) {
                        point = createSizedArray(len);
                        perc = k / (curveSegments - 1);
                        ptDistance = 0;
                        for (i = 0; i < len; i += 1) {
                            ptCoord = bm_pow(1 - perc, 3) * pt1[i] + 3 * bm_pow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bm_pow(perc, 2) * (pt2[i] + pt4[i]) + bm_pow(perc, 3) * pt2[i];
                            point[i] = ptCoord;
                            if (lastPoint !== null) { ptDistance += bm_pow(point[i] - lastPoint[i], 2) }
                        }
                        ptDistance = bm_sqrt(ptDistance);
                        addedLength += ptDistance;
                        bezierData.points[k] = new PointData(ptDistance, point);
                        lastPoint = point
                    }
                    bezierData.segmentLength = addedLength;
                    storedData[bezierName] = bezierData
                }
                return storedData[bezierName]
            }
        }());

        function getDistancePerc(perc, bezierData) {
            var percents = bezierData.percents;
            var lengths = bezierData.lengths;
            var len = percents.length;
            var initPos = bm_floor((len - 1) * perc);
            var lengthPos = perc * bezierData.addedLength;
            var lPerc = 0;
            if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) { return percents[initPos] } else {
                var dir = lengths[initPos] > lengthPos ? -1 : 1;
                var flag = !0;
                while (flag) {
                    if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
                        lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
                        flag = !1
                    } else { initPos += dir }
                    if (initPos < 0 || initPos >= len - 1) {
                        if (initPos === len - 1) { return percents[initPos] }
                        flag = !1
                    }
                }
                return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc
            }
        }

        function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) { var t1 = getDistancePerc(percent, bezierData); var u0 = 1; var u1 = 1 - t1; var ptX = Math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000; var ptY = Math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000; return [ptX, ptY] }

        function getSegmentArray() {}
        var bezier_segment_points = createTypedArray('float32', 8);

        function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
            startPerc = startPerc < 0 ? 0 : startPerc > 1 ? 1 : startPerc;
            var t0 = getDistancePerc(startPerc, bezierData);
            endPerc = endPerc > 1 ? 1 : endPerc;
            var t1 = getDistancePerc(endPerc, bezierData);
            var i, len = pt1.length;
            var u0 = 1 - t0;
            var u1 = 1 - t1;
            var u0u0u0 = u0 * u0 * u0;
            var t0u0u0_3 = t0 * u0 * u0 * 3;
            var t0t0u0_3 = t0 * t0 * u0 * 3;
            var t0t0t0 = t0 * t0 * t0;
            var u0u0u1 = u0 * u0 * u1;
            var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1;
            var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1;
            var t0t0t1 = t0 * t0 * t1;
            var u0u1u1 = u0 * u1 * u1;
            var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1;
            var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1;
            var t0t1t1 = t0 * t1 * t1;
            var u1u1u1 = u1 * u1 * u1;
            var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1;
            var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1;
            var t1t1t1 = t1 * t1 * t1;
            for (i = 0; i < len; i += 1) {
                bezier_segment_points[i * 4] = Math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000;
                bezier_segment_points[i * 4 + 1] = Math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000;
                bezier_segment_points[i * 4 + 2] = Math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000;
                bezier_segment_points[i * 4 + 3] = Math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000
            }
            return bezier_segment_points
        }
        return { getSegmentsLength: getSegmentsLength, getNewSegment: getNewSegment, getPointInSegment: getPointInSegment, buildBezierData: buildBezierData, pointOnLine2D: pointOnLine2D, pointOnLine3D: pointOnLine3D }
    }
    var bez = bezFunction();

    function dataFunctionManager() {
        function completeLayers(layers, comps, fontManager) {
            var layerData;
            var animArray, lastFrame;
            var i, len = layers.length;
            var j, jLen, k, kLen;
            for (i = 0; i < len; i += 1) {
                layerData = layers[i];
                if (!('ks' in layerData) || layerData.completed) { continue }
                layerData.completed = !0;
                if (layerData.tt) { layers[i - 1].td = layerData.tt }
                animArray = [];
                lastFrame = -1;
                if (layerData.hasMask) {
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;
                    for (j = 0; j < jLen; j += 1) {
                        if (maskProps[j].pt.k.i) { convertPathsToAbsoluteValues(maskProps[j].pt.k) } else {
                            kLen = maskProps[j].pt.k.length;
                            for (k = 0; k < kLen; k += 1) {
                                if (maskProps[j].pt.k[k].s) { convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]) }
                                if (maskProps[j].pt.k[k].e) { convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]) }
                            }
                        }
                    }
                }
                if (layerData.ty === 0) {
                    layerData.layers = findCompLayers(layerData.refId, comps);
                    completeLayers(layerData.layers, comps, fontManager)
                } else if (layerData.ty === 4) { completeShapes(layerData.shapes) } else if (layerData.ty == 5) { completeText(layerData, fontManager) }
            }
        }

        function findCompLayers(id, comps) {
            var i = 0,
                len = comps.length;
            while (i < len) {
                if (comps[i].id === id) {
                    if (!comps[i].layers.__used) { comps[i].layers.__used = !0; return comps[i].layers }
                    return JSON.parse(JSON.stringify(comps[i].layers))
                }
                i += 1
            }
        }

        function completeShapes(arr) {
            var i, len = arr.length;
            var j, jLen;
            var hasPaths = !1;
            for (i = len - 1; i >= 0; i -= 1) {
                if (arr[i].ty == 'sh') {
                    if (arr[i].ks.k.i) { convertPathsToAbsoluteValues(arr[i].ks.k) } else {
                        jLen = arr[i].ks.k.length;
                        for (j = 0; j < jLen; j += 1) {
                            if (arr[i].ks.k[j].s) { convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]) }
                            if (arr[i].ks.k[j].e) { convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]) }
                        }
                    }
                    hasPaths = !0
                } else if (arr[i].ty == 'gr') { completeShapes(arr[i].it) }
            }
        }

        function convertPathsToAbsoluteValues(path) {
            var i, len = path.i.length;
            for (i = 0; i < len; i += 1) {
                path.i[i][0] += path.v[i][0];
                path.i[i][1] += path.v[i][1];
                path.o[i][0] += path.v[i][0];
                path.o[i][1] += path.v[i][1]
            }
        }

        function checkVersion(minimum, animVersionString) {
            var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];
            if (minimum[0] > animVersion[0]) { return !0 } else if (animVersion[0] > minimum[0]) { return !1 }
            if (minimum[1] > animVersion[1]) { return !0 } else if (animVersion[1] > minimum[1]) { return !1 }
            if (minimum[2] > animVersion[2]) { return !0 } else if (animVersion[2] > minimum[2]) { return !1 }
        }
        var checkText = (function() {
            var minimumVersion = [4, 4, 14];

            function updateTextLayer(textLayer) {
                var documentData = textLayer.t.d;
                textLayer.t.d = { k: [{ s: documentData, t: 0 }] }
            }

            function iterateLayers(layers) { var i, len = layers.length; for (i = 0; i < len; i += 1) { if (layers[i].ty === 5) { updateTextLayer(layers[i]) } } }
            return function(animationData) { if (checkVersion(minimumVersion, animationData.v)) { iterateLayers(animationData.layers); if (animationData.assets) { var i, len = animationData.assets.length; for (i = 0; i < len; i += 1) { if (animationData.assets[i].layers) { iterateLayers(animationData.assets[i].layers) } } } } }
        }());
        var checkChars = (function() {
            var minimumVersion = [4, 7, 99];
            return function(animationData) {
                if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
                    var i, len = animationData.chars.length,
                        j, jLen, k, kLen;
                    var pathData, paths;
                    for (i = 0; i < len; i += 1) {
                        if (animationData.chars[i].data && animationData.chars[i].data.shapes) {
                            paths = animationData.chars[i].data.shapes[0].it;
                            jLen = paths.length;
                            for (j = 0; j < jLen; j += 1) {
                                pathData = paths[j].ks.k;
                                if (!pathData.__converted) {
                                    convertPathsToAbsoluteValues(paths[j].ks.k);
                                    pathData.__converted = !0
                                }
                            }
                        }
                    }
                }
            }
        }());
        var checkColors = (function() {
            var minimumVersion = [4, 1, 9];

            function iterateShapes(shapes) {
                var i, len = shapes.length;
                var j, jLen;
                for (i = 0; i < len; i += 1) {
                    if (shapes[i].ty === 'gr') { iterateShapes(shapes[i].it) } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
                        if (shapes[i].c.k && shapes[i].c.k[0].i) {
                            jLen = shapes[i].c.k.length;
                            for (j = 0; j < jLen; j += 1) {
                                if (shapes[i].c.k[j].s) {
                                    shapes[i].c.k[j].s[0] /= 255;
                                    shapes[i].c.k[j].s[1] /= 255;
                                    shapes[i].c.k[j].s[2] /= 255;
                                    shapes[i].c.k[j].s[3] /= 255
                                }
                                if (shapes[i].c.k[j].e) {
                                    shapes[i].c.k[j].e[0] /= 255;
                                    shapes[i].c.k[j].e[1] /= 255;
                                    shapes[i].c.k[j].e[2] /= 255;
                                    shapes[i].c.k[j].e[3] /= 255
                                }
                            }
                        } else {
                            shapes[i].c.k[0] /= 255;
                            shapes[i].c.k[1] /= 255;
                            shapes[i].c.k[2] /= 255;
                            shapes[i].c.k[3] /= 255
                        }
                    }
                }
            }

            function iterateLayers(layers) { var i, len = layers.length; for (i = 0; i < len; i += 1) { if (layers[i].ty === 4) { iterateShapes(layers[i].shapes) } } }
            return function(animationData) { if (checkVersion(minimumVersion, animationData.v)) { iterateLayers(animationData.layers); if (animationData.assets) { var i, len = animationData.assets.length; for (i = 0; i < len; i += 1) { if (animationData.assets[i].layers) { iterateLayers(animationData.assets[i].layers) } } } } }
        }());
        var checkShapes = (function() {
            var minimumVersion = [4, 4, 18];

            function completeShapes(arr) {
                var i, len = arr.length;
                var j, jLen;
                var hasPaths = !1;
                for (i = len - 1; i >= 0; i -= 1) {
                    if (arr[i].ty == 'sh') {
                        if (arr[i].ks.k.i) { arr[i].ks.k.c = arr[i].closed } else {
                            jLen = arr[i].ks.k.length;
                            for (j = 0; j < jLen; j += 1) {
                                if (arr[i].ks.k[j].s) { arr[i].ks.k[j].s[0].c = arr[i].closed }
                                if (arr[i].ks.k[j].e) { arr[i].ks.k[j].e[0].c = arr[i].closed }
                            }
                        }
                        hasPaths = !0
                    } else if (arr[i].ty == 'gr') { completeShapes(arr[i].it) }
                }
            }

            function iterateLayers(layers) {
                var layerData;
                var i, len = layers.length;
                var j, jLen, k, kLen;
                for (i = 0; i < len; i += 1) {
                    layerData = layers[i];
                    if (layerData.hasMask) {
                        var maskProps = layerData.masksProperties;
                        jLen = maskProps.length;
                        for (j = 0; j < jLen; j += 1) {
                            if (maskProps[j].pt.k.i) { maskProps[j].pt.k.c = maskProps[j].cl } else {
                                kLen = maskProps[j].pt.k.length;
                                for (k = 0; k < kLen; k += 1) {
                                    if (maskProps[j].pt.k[k].s) { maskProps[j].pt.k[k].s[0].c = maskProps[j].cl }
                                    if (maskProps[j].pt.k[k].e) { maskProps[j].pt.k[k].e[0].c = maskProps[j].cl }
                                }
                            }
                        }
                    }
                    if (layerData.ty === 4) { completeShapes(layerData.shapes) }
                }
            }
            return function(animationData) { if (checkVersion(minimumVersion, animationData.v)) { iterateLayers(animationData.layers); if (animationData.assets) { var i, len = animationData.assets.length; for (i = 0; i < len; i += 1) { if (animationData.assets[i].layers) { iterateLayers(animationData.assets[i].layers) } } } } }
        }());

        function completeData(animationData, fontManager) {
            if (animationData.__complete) { return }
            checkColors(animationData);
            checkText(animationData);
            checkChars(animationData);
            checkShapes(animationData);
            completeLayers(animationData.layers, animationData.assets, fontManager);
            animationData.__complete = !0
        }

        function completeText(data, fontManager) { if (data.t.a.length === 0 && !('m' in data.t.p)) { data.singleShape = !0 } }
        var moduleOb = {};
        moduleOb.completeData = completeData;
        moduleOb.checkColors = checkColors;
        moduleOb.checkChars = checkChars;
        moduleOb.checkShapes = checkShapes;
        moduleOb.completeLayers = completeLayers;
        return moduleOb
    }
    var dataManager = dataFunctionManager();
    var FontManager = (function() {
        var maxWaitingTime = 5000;
        var emptyChar = { w: 0, size: 0, shapes: [] };
        var combinedCharacters = [];
        combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);

        function setUpNode(font, family) {
            var parentNode = createTag('span');
            parentNode.style.fontFamily = family;
            var node = createTag('span');
            node.innerHTML = 'giItT1WQy@!-/#';
            parentNode.style.position = 'absolute';
            parentNode.style.left = '-10000px';
            parentNode.style.top = '-10000px';
            parentNode.style.fontSize = '300px';
            parentNode.style.fontVariant = 'normal';
            parentNode.style.fontStyle = 'normal';
            parentNode.style.fontWeight = 'normal';
            parentNode.style.letterSpacing = '0';
            parentNode.appendChild(node);
            document.body.appendChild(parentNode);
            var width = node.offsetWidth;
            node.style.fontFamily = font + ', ' + family;
            return { node: node, w: width, parent: parentNode }
        }

        function checkLoadedFonts() {
            var i, len = this.fonts.length;
            var node, w;
            var loadedCount = len;
            for (i = 0; i < len; i += 1) {
                if (this.fonts[i].loaded) { loadedCount -= 1; continue }
                if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) { this.fonts[i].loaded = !0 } else {
                    node = this.fonts[i].monoCase.node;
                    w = this.fonts[i].monoCase.w;
                    if (node.offsetWidth !== w) {
                        loadedCount -= 1;
                        this.fonts[i].loaded = !0
                    } else {
                        node = this.fonts[i].sansCase.node;
                        w = this.fonts[i].sansCase.w;
                        if (node.offsetWidth !== w) {
                            loadedCount -= 1;
                            this.fonts[i].loaded = !0
                        }
                    }
                    if (this.fonts[i].loaded) {
                        this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                        this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent)
                    }
                }
            }
            if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) { setTimeout(this.checkLoadedFonts.bind(this), 20) } else { setTimeout(function() { this.isLoaded = !0 }.bind(this), 0) }
        }

        function createHelper(def, fontData) {
            var tHelper = createNS('text');
            tHelper.style.fontSize = '100px';
            tHelper.setAttribute('font-family', fontData.fFamily);
            tHelper.setAttribute('font-style', fontData.fStyle);
            tHelper.setAttribute('font-weight', fontData.fWeight);
            tHelper.textContent = '1';
            if (fontData.fClass) {
                tHelper.style.fontFamily = 'inherit';
                tHelper.setAttribute('class', fontData.fClass)
            } else { tHelper.style.fontFamily = fontData.fFamily }
            def.appendChild(tHelper);
            var tCanvasHelper = createTag('canvas').getContext('2d');
            tCanvasHelper.font = fontData.fWeight + ' ' + fontData.fStyle + ' 100px ' + fontData.fFamily;
            return tHelper
        }

        function addFonts(fontData, defs) {
            if (!fontData) { this.isLoaded = !0; return }
            if (this.chars) {
                this.isLoaded = !0;
                this.fonts = fontData.list;
                return
            }
            var fontArr = fontData.list;
            var i, len = fontArr.length;
            var _pendingFonts = len;
            for (i = 0; i < len; i += 1) {
                var shouldLoadFont = !0;
                var loadedSelector;
                var j;
                fontArr[i].loaded = !1;
                fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
                fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');
                if (!fontArr[i].fPath) {
                    fontArr[i].loaded = !0;
                    _pendingFonts -= 1
                } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
                    loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');
                    if (loadedSelector.length > 0) { shouldLoadFont = !1 }
                    if (shouldLoadFont) {
                        var s = createTag('style');
                        s.setAttribute('f-forigin', fontArr[i].fOrigin);
                        s.setAttribute('f-origin', fontArr[i].origin);
                        s.setAttribute('f-family', fontArr[i].fFamily);
                        s.type = "text/css";
                        s.innerHTML = "@font-face {" + "font-family: " + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
                        defs.appendChild(s)
                    }
                } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
                    loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
                    for (j = 0; j < loadedSelector.length; j++) { if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) { shouldLoadFont = !1 } }
                    if (shouldLoadFont) {
                        var l = createTag('link');
                        l.setAttribute('f-forigin', fontArr[i].fOrigin);
                        l.setAttribute('f-origin', fontArr[i].origin);
                        l.type = "text/css";
                        l.rel = "stylesheet";
                        l.href = fontArr[i].fPath;
                        document.body.appendChild(l)
                    }
                } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
                    loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
                    for (j = 0; j < loadedSelector.length; j++) { if (fontArr[i].fPath === loadedSelector[j].src) { shouldLoadFont = !1 } }
                    if (shouldLoadFont) {
                        var sc = createTag('link');
                        sc.setAttribute('f-forigin', fontArr[i].fOrigin);
                        sc.setAttribute('f-origin', fontArr[i].origin);
                        sc.setAttribute('rel', 'stylesheet');
                        sc.setAttribute('href', fontArr[i].fPath);
                        defs.appendChild(sc)
                    }
                }
                fontArr[i].helper = createHelper(defs, fontArr[i]);
                fontArr[i].cache = {};
                this.fonts.push(fontArr[i])
            }
            if (_pendingFonts === 0) { this.isLoaded = !0 } else { setTimeout(this.checkLoadedFonts.bind(this), 100) }
        }

        function addChars(chars) {
            if (!chars) { return }
            if (!this.chars) { this.chars = [] }
            var i, len = chars.length;
            var j, jLen = this.chars.length,
                found;
            for (i = 0; i < len; i += 1) {
                j = 0;
                found = !1;
                while (j < jLen) {
                    if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) { found = !0 }
                    j += 1
                }
                if (!found) {
                    this.chars.push(chars[i]);
                    jLen += 1
                }
            }
        }

        function getCharData(char, style, font) {
            var i = 0,
                len = this.chars.length;
            while (i < len) {
                if (this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font) { return this.chars[i] }
                i += 1
            }
            if ((typeof char === 'string' && char.charCodeAt(0) !== 13 || !char) && console && console.warn) { console.warn('Missing character from exported characters list: ', char, style, font) }
            return emptyChar
        }

        function measureText(char, fontName, size) {
            var fontData = this.getFontByName(fontName);
            var index = char.charCodeAt(0);
            if (!fontData.cache[index + 1]) {
                var tHelper = fontData.helper;
                if (char === ' ') {
                    tHelper.textContent = '|' + char + '|';
                    var doubleSize = tHelper.getComputedTextLength();
                    tHelper.textContent = '||';
                    var singleSize = tHelper.getComputedTextLength();
                    fontData.cache[index + 1] = (doubleSize - singleSize) / 100
                } else {
                    tHelper.textContent = char;
                    fontData.cache[index + 1] = (tHelper.getComputedTextLength()) / 100
                }
            }
            return fontData.cache[index + 1] * size
        }

        function getFontByName(name) {
            var i = 0,
                len = this.fonts.length;
            while (i < len) {
                if (this.fonts[i].fName === name) { return this.fonts[i] }
                i += 1
            }
            return this.fonts[0]
        }

        function getCombinedCharacterCodes() { return combinedCharacters }

        function loaded() { return this.isLoaded }
        var Font = function() {
            this.fonts = [];
            this.chars = null;
            this.typekitLoaded = 0;
            this.isLoaded = !1;
            this.initTime = Date.now()
        };
        Font.getCombinedCharacterCodes = getCombinedCharacterCodes;
        Font.prototype.addChars = addChars;
        Font.prototype.addFonts = addFonts;
        Font.prototype.getCharData = getCharData;
        Font.prototype.getFontByName = getFontByName;
        Font.prototype.measureText = measureText;
        Font.prototype.checkLoadedFonts = checkLoadedFonts;
        Font.prototype.loaded = loaded;
        return Font
    }());
    var PropertyFactory = (function() {
        var initFrame = initialDefaultFrame;
        var math_abs = Math.abs;

        function interpolateValue(frameNum, caching) {
            var offsetTime = this.offsetTime;
            var newValue;
            if (this.propType === 'multidimensional') { newValue = createTypedArray('float32', this.pv.length) }
            var iterationIndex = caching.lastIndex;
            var i = iterationIndex;
            var len = this.keyframes.length - 1,
                flag = !0;
            var keyData, nextKeyData;
            while (flag) {
                keyData = this.keyframes[i];
                nextKeyData = this.keyframes[i + 1];
                if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
                    if (keyData.h) { keyData = nextKeyData }
                    iterationIndex = 0;
                    break
                }
                if ((nextKeyData.t - offsetTime) > frameNum) { iterationIndex = i; break }
                if (i < len - 1) { i += 1 } else {
                    iterationIndex = 0;
                    flag = !1
                }
            }
            var k, kLen, perc, jLen, j, fnc;
            var nextKeyTime = nextKeyData.t - offsetTime;
            var keyTime = keyData.t - offsetTime;
            var endValue;
            if (keyData.to) {
                if (!keyData.bezierData) { keyData.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti) }
                var bezierData = keyData.bezierData;
                if (frameNum >= nextKeyTime || frameNum < keyTime) {
                    var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
                    kLen = bezierData.points[ind].point.length;
                    for (k = 0; k < kLen; k += 1) { newValue[k] = bezierData.points[ind].point[k] }
                } else {
                    if (keyData.__fnct) { fnc = keyData.__fnct } else {
                        fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
                        keyData.__fnct = fnc
                    }
                    perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
                    var distanceInLine = bezierData.segmentLength * perc;
                    var segmentPerc;
                    var addedLength = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastAddedLength : 0;
                    j = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastPoint : 0;
                    flag = !0;
                    jLen = bezierData.points.length;
                    while (flag) {
                        addedLength += bezierData.points[j].partialLength;
                        if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
                            kLen = bezierData.points[j].point.length;
                            for (k = 0; k < kLen; k += 1) { newValue[k] = bezierData.points[j].point[k] }
                            break
                        } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
                            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
                            kLen = bezierData.points[j].point.length;
                            for (k = 0; k < kLen; k += 1) { newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc }
                            break
                        }
                        if (j < jLen - 1) { j += 1 } else { flag = !1 }
                    }
                    caching._lastPoint = j;
                    caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
                    caching._lastKeyframeIndex = i
                }
            } else {
                var outX, outY, inX, inY, keyValue;
                len = keyData.s.length;
                endValue = nextKeyData.s || keyData.e;
                if (this.sh && keyData.h !== 1) {
                    if (frameNum >= nextKeyTime) {
                        newValue[0] = endValue[0];
                        newValue[1] = endValue[1];
                        newValue[2] = endValue[2]
                    } else if (frameNum <= keyTime) {
                        newValue[0] = keyData.s[0];
                        newValue[1] = keyData.s[1];
                        newValue[2] = keyData.s[2]
                    } else {
                        var quatStart = createQuaternion(keyData.s);
                        var quatEnd = createQuaternion(endValue);
                        var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
                        quaternionToEuler(newValue, slerp(quatStart, quatEnd, time))
                    }
                } else {
                    for (i = 0; i < len; i += 1) {
                        if (keyData.h !== 1) {
                            if (frameNum >= nextKeyTime) { perc = 1 } else if (frameNum < keyTime) { perc = 0 } else {
                                if (keyData.o.x.constructor === Array) {
                                    if (!keyData.__fnct) { keyData.__fnct = [] }
                                    if (!keyData.__fnct[i]) {
                                        outX = (typeof keyData.o.x[i] === 'undefined') ? keyData.o.x[0] : keyData.o.x[i];
                                        outY = (typeof keyData.o.y[i] === 'undefined') ? keyData.o.y[0] : keyData.o.y[i];
                                        inX = (typeof keyData.i.x[i] === 'undefined') ? keyData.i.x[0] : keyData.i.x[i];
                                        inY = (typeof keyData.i.y[i] === 'undefined') ? keyData.i.y[0] : keyData.i.y[i];
                                        fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                                        keyData.__fnct[i] = fnc
                                    } else { fnc = keyData.__fnct[i] }
                                } else {
                                    if (!keyData.__fnct) {
                                        outX = keyData.o.x;
                                        outY = keyData.o.y;
                                        inX = keyData.i.x;
                                        inY = keyData.i.y;
                                        fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                                        keyData.__fnct = fnc
                                    } else { fnc = keyData.__fnct }
                                }
                                perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime))
                            }
                        }
                        endValue = nextKeyData.s || keyData.e;
                        keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;
                        if (this.propType === 'multidimensional') { newValue[i] = keyValue } else { newValue = keyValue }
                    }
                }
            }
            caching.lastIndex = iterationIndex;
            return newValue
        }

        function slerp(a, b, t) {
            var out = [];
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bx = b[0],
                by = b[1],
                bz = b[2],
                bw = b[3]
            var omega, cosom, sinom, scale0, scale1;
            cosom = ax * bx + ay * by + az * bz + aw * bw;
            if (cosom < 0.0) {
                cosom = -cosom;
                bx = -bx;
                by = -by;
                bz = -bz;
                bw = -bw
            }
            if ((1.0 - cosom) > 0.000001) {
                omega = Math.acos(cosom);
                sinom = Math.sin(omega);
                scale0 = Math.sin((1.0 - t) * omega) / sinom;
                scale1 = Math.sin(t * omega) / sinom
            } else {
                scale0 = 1.0 - t;
                scale1 = t
            }
            out[0] = scale0 * ax + scale1 * bx;
            out[1] = scale0 * ay + scale1 * by;
            out[2] = scale0 * az + scale1 * bz;
            out[3] = scale0 * aw + scale1 * bw;
            return out
        }

        function quaternionToEuler(out, quat) {
            var qx = quat[0];
            var qy = quat[1];
            var qz = quat[2];
            var qw = quat[3];
            var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz)
            var attitude = Math.asin(2 * qx * qy + 2 * qz * qw)
            var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
            out[0] = heading / degToRads;
            out[1] = attitude / degToRads;
            out[2] = bank / degToRads
        }

        function createQuaternion(values) { var heading = values[0] * degToRads; var attitude = values[1] * degToRads; var bank = values[2] * degToRads; var c1 = Math.cos(heading / 2); var c2 = Math.cos(attitude / 2); var c3 = Math.cos(bank / 2); var s1 = Math.sin(heading / 2); var s2 = Math.sin(attitude / 2); var s3 = Math.sin(bank / 2); var w = c1 * c2 * c3 - s1 * s2 * s3; var x = s1 * s2 * c3 + c1 * c2 * s3; var y = s1 * c2 * c3 + c1 * s2 * s3; var z = c1 * s2 * c3 - s1 * c2 * s3; return [x, y, z, w] }

        function getValueAtCurrentTime() {
            var frameNum = this.comp.renderedFrame - this.offsetTime;
            var initTime = this.keyframes[0].t - this.offsetTime;
            var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(frameNum === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= endTime && frameNum >= endTime) || (this._caching.lastFrame < initTime && frameNum < initTime))))) {
                if (this._caching.lastFrame >= frameNum) {
                    this._caching._lastKeyframeIndex = -1;
                    this._caching.lastIndex = 0
                }
                var renderResult = this.interpolateValue(frameNum, this._caching);
                this.pv = renderResult
            }
            this._caching.lastFrame = frameNum;
            return this.pv
        }

        function setVValue(val) {
            var multipliedValue;
            if (this.propType === 'unidimensional') {
                multipliedValue = val * this.mult;
                if (math_abs(this.v - multipliedValue) > 0.00001) {
                    this.v = multipliedValue;
                    this._mdf = !0
                }
            } else {
                var i = 0,
                    len = this.v.length;
                while (i < len) {
                    multipliedValue = val[i] * this.mult;
                    if (math_abs(this.v[i] - multipliedValue) > 0.00001) {
                        this.v[i] = multipliedValue;
                        this._mdf = !0
                    }
                    i += 1
                }
            }
        }

        function processEffectsSequence() {
            if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) { return }
            if (this.lock) { this.setVValue(this.pv); return }
            this.lock = !0;
            this._mdf = this._isFirstFrame;
            var multipliedValue;
            var i, len = this.effectsSequence.length;
            var finalValue = this.kf ? this.pv : this.data.k;
            for (i = 0; i < len; i += 1) { finalValue = this.effectsSequence[i](finalValue) }
            this.setVValue(finalValue);
            this._isFirstFrame = !1;
            this.lock = !1;
            this.frameId = this.elem.globalData.frameId
        }

        function addEffect(effectFunction) {
            this.effectsSequence.push(effectFunction);
            this.container.addDynamicProperty(this)
        }

        function ValueProperty(elem, data, mult, container) {
            this.propType = 'unidimensional';
            this.mult = mult || 1;
            this.data = data;
            this.v = mult ? data.k * mult : data.k;
            this.pv = data.k;
            this._mdf = !1;
            this.elem = elem;
            this.container = container;
            this.comp = elem.comp;
            this.k = !1;
            this.kf = !1;
            this.vel = 0;
            this.effectsSequence = [];
            this._isFirstFrame = !0;
            this.getValue = processEffectsSequence;
            this.setVValue = setVValue;
            this.addEffect = addEffect
        }

        function MultiDimensionalProperty(elem, data, mult, container) {
            this.propType = 'multidimensional';
            this.mult = mult || 1;
            this.data = data;
            this._mdf = !1;
            this.elem = elem;
            this.container = container;
            this.comp = elem.comp;
            this.k = !1;
            this.kf = !1;
            this.frameId = -1;
            var i, len = data.k.length;
            this.v = createTypedArray('float32', len);
            this.pv = createTypedArray('float32', len);
            var arr = createTypedArray('float32', len);
            this.vel = createTypedArray('float32', len);
            for (i = 0; i < len; i += 1) {
                this.v[i] = data.k[i] * this.mult;
                this.pv[i] = data.k[i]
            }
            this._isFirstFrame = !0;
            this.effectsSequence = [];
            this.getValue = processEffectsSequence;
            this.setVValue = setVValue;
            this.addEffect = addEffect
        }

        function KeyframedValueProperty(elem, data, mult, container) {
            this.propType = 'unidimensional';
            this.keyframes = data.k;
            this.offsetTime = elem.data.st;
            this.frameId = -1;
            this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 };
            this.k = !0;
            this.kf = !0;
            this.data = data;
            this.mult = mult || 1;
            this.elem = elem;
            this.container = container;
            this.comp = elem.comp;
            this.v = initFrame;
            this.pv = initFrame;
            this._isFirstFrame = !0;
            this.getValue = processEffectsSequence;
            this.setVValue = setVValue;
            this.interpolateValue = interpolateValue;
            this.effectsSequence = [getValueAtCurrentTime.bind(this)];
            this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(elem, data, mult, container) {
            this.propType = 'multidimensional';
            var i, len = data.k.length;
            var s, e, to, ti;
            for (i = 0; i < len - 1; i += 1) {
                if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
                    s = data.k[i].s;
                    e = data.k[i + 1].s;
                    to = data.k[i].to;
                    ti = data.k[i].ti;
                    if ((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2]))) {
                        data.k[i].to = null;
                        data.k[i].ti = null
                    }
                    if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
                        if (s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
                            data.k[i].to = null;
                            data.k[i].ti = null
                        }
                    }
                }
            }
            this.effectsSequence = [getValueAtCurrentTime.bind(this)];
            this.keyframes = data.k;
            this.offsetTime = elem.data.st;
            this.k = !0;
            this.kf = !0;
            this._isFirstFrame = !0;
            this.mult = mult || 1;
            this.elem = elem;
            this.container = container;
            this.comp = elem.comp;
            this.getValue = processEffectsSequence;
            this.setVValue = setVValue;
            this.interpolateValue = interpolateValue;
            this.frameId = -1;
            var arrLen = data.k[0].s.length;
            this.v = createTypedArray('float32', arrLen);
            this.pv = createTypedArray('float32', arrLen);
            for (i = 0; i < arrLen; i += 1) {
                this.v[i] = initFrame;
                this.pv[i] = initFrame
            }
            this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray('float32', arrLen) };
            this.addEffect = addEffect
        }

        function getProp(elem, data, type, mult, container) {
            var p;
            if (!data.k.length) { p = new ValueProperty(elem, data, mult, container) } else if (typeof(data.k[0]) === 'number') { p = new MultiDimensionalProperty(elem, data, mult, container) } else {
                switch (type) {
                    case 0:
                        p = new KeyframedValueProperty(elem, data, mult, container);
                        break;
                    case 1:
                        p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
                        break
                }
            }
            if (p.effectsSequence.length) { container.addDynamicProperty(p) }
            return p
        }
        var ob = { getProp: getProp };
        return ob
    }());
    var TransformPropertyFactory = (function() {
        var defaultVector = [0, 0]

        function applyToMatrix(mat) {
            var _mdf = this._mdf;
            this.iterateDynamicProperties();
            this._mdf = this._mdf || _mdf;
            if (this.a) { mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]) }
            if (this.s) { mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]) }
            if (this.sk) { mat.skewFromAxis(-this.sk.v, this.sa.v) }
            if (this.r) { mat.rotate(-this.r.v) } else { mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]) }
            if (this.data.p.s) { if (this.data.p.z) { mat.translate(this.px.v, this.py.v, -this.pz.v) } else { mat.translate(this.px.v, this.py.v, 0) } } else { mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }
        }

        function processKeys(forceRender) {
            if (this.elem.globalData.frameId === this.frameId) { return }
            if (this._isDirty) {
                this.precalculateMatrix();
                this._isDirty = !1
            }
            this.iterateDynamicProperties();
            if (this._mdf || forceRender) {
                this.v.cloneFromProps(this.pre.props);
                if (this.appliedTransformations < 1) { this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]) }
                if (this.appliedTransformations < 2) { this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]) }
                if (this.sk && this.appliedTransformations < 3) { this.v.skewFromAxis(-this.sk.v, this.sa.v) }
                if (this.r && this.appliedTransformations < 4) { this.v.rotate(-this.r.v) } else if (!this.r && this.appliedTransformations < 4) { this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]) }
                if (this.autoOriented) {
                    var v1, v2, frameRate = this.elem.globalData.frameRate;
                    if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                        if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                            v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
                            v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0)
                        } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                            v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / frameRate), 0);
                            v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0)
                        } else {
                            v1 = this.p.pv;
                            v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime)
                        }
                    } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                        v1 = [];
                        v2 = [];
                        var px = this.px,
                            py = this.py,
                            frameRate;
                        if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
                            v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
                            v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
                            v2[0] = px.getValueAtTime((px.keyframes[0].t) / frameRate, 0);
                            v2[1] = py.getValueAtTime((py.keyframes[0].t) / frameRate, 0)
                        } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
                            v1[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t / frameRate), 0);
                            v1[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t / frameRate), 0);
                            v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
                            v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0)
                        } else {
                            v1 = [px.pv, py.pv];
                            v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
                            v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime)
                        }
                    } else { v1 = v2 = defaultVector }
                    this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]))
                }
                if (this.data.p && this.data.p.s) { if (this.data.p.z) { this.v.translate(this.px.v, this.py.v, -this.pz.v) } else { this.v.translate(this.px.v, this.py.v, 0) } } else { this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }
            }
            this.frameId = this.elem.globalData.frameId
        }

        function precalculateMatrix() {
            if (!this.a.k) {
                this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                this.appliedTransformations = 1
            } else { return }
            if (!this.s.effectsSequence.length) {
                this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                this.appliedTransformations = 2
            } else { return }
            if (this.sk) {
                if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
                    this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                    this.appliedTransformations = 3
                } else { return }
            }
            if (this.r) {
                if (!this.r.effectsSequence.length) {
                    this.pre.rotate(-this.r.v);
                    this.appliedTransformations = 4
                } else { return }
            } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
                this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                this.appliedTransformations = 4
            }
        }

        function autoOrient() {}

        function addDynamicProperty(prop) {
            this._addDynamicProperty(prop);
            this.elem.addDynamicProperty(prop);
            this._isDirty = !0
        }

        function TransformProperty(elem, data, container) {
            this.elem = elem;
            this.frameId = -1;
            this.propType = 'transform';
            this.data = data;
            this.v = new Matrix();
            this.pre = new Matrix();
            this.appliedTransformations = 0;
            this.initDynamicPropertyContainer(container || elem);
            if (data.p && data.p.s) {
                this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
                this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);
                if (data.p.z) { this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this) }
            } else { this.p = PropertyFactory.getProp(elem, data.p || { k: [0, 0, 0] }, 1, 0, this) }
            if (data.rx) {
                this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
                this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
                this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
                if (data.or.k[0].ti) { var i, len = data.or.k.length; for (i = 0; i < len; i += 1) { data.or.k[i].to = data.or.k[i].ti = null } }
                this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
                this.or.sh = !0
            } else { this.r = PropertyFactory.getProp(elem, data.r || { k: 0 }, 0, degToRads, this) }
            if (data.sk) {
                this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
                this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this)
            }
            this.a = PropertyFactory.getProp(elem, data.a || { k: [0, 0, 0] }, 1, 0, this);
            this.s = PropertyFactory.getProp(elem, data.s || { k: [100, 100, 100] }, 1, 0.01, this);
            if (data.o) { this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem) } else { this.o = { _mdf: !1, v: 1 } }
            this._isDirty = !0;
            if (!this.dynamicProperties.length) { this.getValue(!0) }
        }
        TransformProperty.prototype = { applyToMatrix: applyToMatrix, getValue: processKeys, precalculateMatrix: precalculateMatrix, autoOrient: autoOrient }
        extendPrototype([DynamicPropertyContainer], TransformProperty);
        TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
        TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

        function getTransformProperty(elem, data, container) { return new TransformProperty(elem, data, container) }
        return { getTransformProperty: getTransformProperty }
    }());

    function ShapePath() {
        this.c = !1;
        this._length = 0;
        this._maxLength = 8;
        this.v = createSizedArray(this._maxLength);
        this.o = createSizedArray(this._maxLength);
        this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function(closed, len) {
        this.c = closed;
        this.setLength(len);
        var i = 0;
        while (i < len) {
            this.v[i] = point_pool.newElement();
            this.o[i] = point_pool.newElement();
            this.i[i] = point_pool.newElement();
            i += 1
        }
    };
    ShapePath.prototype.setLength = function(len) {
        while (this._maxLength < len) { this.doubleArrayLength() }
        this._length = len
    };
    ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength));
        this.i = this.i.concat(createSizedArray(this._maxLength));
        this.o = this.o.concat(createSizedArray(this._maxLength));
        this._maxLength *= 2
    };
    ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
        var arr;
        this._length = Math.max(this._length, pos + 1);
        if (this._length >= this._maxLength) { this.doubleArrayLength() }
        switch (type) {
            case 'v':
                arr = this.v;
                break;
            case 'i':
                arr = this.i;
                break;
            case 'o':
                arr = this.o;
                break
        }
        if (!arr[pos] || (arr[pos] && !replace)) { arr[pos] = point_pool.newElement() }
        arr[pos][0] = x;
        arr[pos][1] = y
    };
    ShapePath.prototype.setTripleAt = function(vX, vY, oX, oY, iX, iY, pos, replace) {
        this.setXYAt(vX, vY, 'v', pos, replace);
        this.setXYAt(oX, oY, 'o', pos, replace);
        this.setXYAt(iX, iY, 'i', pos, replace)
    };
    ShapePath.prototype.reverse = function() {
        var newPath = new ShapePath();
        newPath.setPathData(this.c, this._length);
        var vertices = this.v,
            outPoints = this.o,
            inPoints = this.i;
        var init = 0;
        if (this.c) {
            newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, !1);
            init = 1
        }
        var cnt = this._length - 1;
        var len = this._length;
        var i;
        for (i = init; i < len; i += 1) {
            newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, !1);
            cnt -= 1
        }
        return newPath
    };
    var ShapePropertyFactory = (function() {
        var initFrame = -999999;

        function interpolateShape(frameNum, previousValue, caching) {
            var iterationIndex = caching.lastIndex;
            var keyPropS, keyPropE, isHold, j, k, jLen, kLen, perc, vertexValue;
            var kf = this.keyframes;
            if (frameNum < kf[0].t - this.offsetTime) {
                keyPropS = kf[0].s[0];
                isHold = !0;
                iterationIndex = 0
            } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
                keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
                isHold = !0
            } else {
                var i = iterationIndex;
                var len = kf.length - 1,
                    flag = !0,
                    keyData, nextKeyData;
                while (flag) {
                    keyData = kf[i];
                    nextKeyData = kf[i + 1];
                    if ((nextKeyData.t - this.offsetTime) > frameNum) { break }
                    if (i < len - 1) { i += 1 } else { flag = !1 }
                }
                isHold = keyData.h === 1;
                iterationIndex = i;
                if (!isHold) {
                    if (frameNum >= nextKeyData.t - this.offsetTime) { perc = 1 } else if (frameNum < keyData.t - this.offsetTime) { perc = 0 } else {
                        var fnc;
                        if (keyData.__fnct) { fnc = keyData.__fnct } else {
                            fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
                            keyData.__fnct = fnc
                        }
                        perc = fnc((frameNum - (keyData.t - this.offsetTime)) / ((nextKeyData.t - this.offsetTime) - (keyData.t - this.offsetTime)))
                    }
                    keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0]
                }
                keyPropS = keyData.s[0]
            }
            jLen = previousValue._length;
            kLen = keyPropS.i[0].length;
            caching.lastIndex = iterationIndex;
            for (j = 0; j < jLen; j += 1) {
                for (k = 0; k < kLen; k += 1) {
                    vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
                    previousValue.i[j][k] = vertexValue;
                    vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
                    previousValue.o[j][k] = vertexValue;
                    vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
                    previousValue.v[j][k] = vertexValue
                }
            }
        }

        function interpolateShapeCurrentTime() {
            var frameNum = this.comp.renderedFrame - this.offsetTime;
            var initTime = this.keyframes[0].t - this.offsetTime;
            var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            var lastFrame = this._caching.lastFrame;
            if (!(lastFrame !== initFrame && ((lastFrame < initTime && frameNum < initTime) || (lastFrame > endTime && frameNum > endTime)))) {
                this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
                this.interpolateShape(frameNum, this.pv, this._caching)
            }
            this._caching.lastFrame = frameNum;
            return this.pv
        }

        function resetShape() { this.paths = this.localShapeCollection }

        function shapesEqual(shape1, shape2) {
            if (shape1._length !== shape2._length || shape1.c !== shape2.c) { return !1 }
            var i, len = shape1._length;
            for (i = 0; i < len; i += 1) { if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) { return !1 } }
            return !0
        }

        function setVValue(newPath) {
            if (!shapesEqual(this.v, newPath)) {
                this.v = shape_pool.clone(newPath);
                this.localShapeCollection.releaseShapes();
                this.localShapeCollection.addShape(this.v);
                this._mdf = !0;
                this.paths = this.localShapeCollection
            }
        }

        function processEffectsSequence() {
            if (this.elem.globalData.frameId === this.frameId) { return } else if (!this.effectsSequence.length) { this._mdf = !1; return }
            if (this.lock) { this.setVValue(this.pv); return }
            this.lock = !0;
            this._mdf = !1;
            var finalValue = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
            var i, len = this.effectsSequence.length;
            for (i = 0; i < len; i += 1) { finalValue = this.effectsSequence[i](finalValue) }
            this.setVValue(finalValue);
            this.lock = !1;
            this.frameId = this.elem.globalData.frameId
        };

        function ShapeProperty(elem, data, type) {
            this.propType = 'shape';
            this.comp = elem.comp;
            this.container = elem;
            this.elem = elem;
            this.data = data;
            this.k = !1;
            this.kf = !1;
            this._mdf = !1;
            var pathData = type === 3 ? data.pt.k : data.ks.k;
            this.v = shape_pool.clone(pathData);
            this.pv = shape_pool.clone(this.v);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.reset = resetShape;
            this.effectsSequence = []
        }

        function addEffect(effectFunction) {
            this.effectsSequence.push(effectFunction);
            this.container.addDynamicProperty(this)
        }
        ShapeProperty.prototype.interpolateShape = interpolateShape;
        ShapeProperty.prototype.getValue = processEffectsSequence;
        ShapeProperty.prototype.setVValue = setVValue;
        ShapeProperty.prototype.addEffect = addEffect;

        function KeyframedShapeProperty(elem, data, type) {
            this.propType = 'shape';
            this.comp = elem.comp;
            this.elem = elem;
            this.container = elem;
            this.offsetTime = elem.data.st;
            this.keyframes = type === 3 ? data.pt.k : data.ks.k;
            this.k = !0;
            this.kf = !0;
            var i, len = this.keyframes[0].s[0].i.length;
            var jLen = this.keyframes[0].s[0].i[0].length;
            this.v = shape_pool.newElement();
            this.v.setPathData(this.keyframes[0].s[0].c, len);
            this.pv = shape_pool.clone(this.v);
            this.localShapeCollection = shapeCollection_pool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.lastFrame = initFrame;
            this.reset = resetShape;
            this._caching = { lastFrame: initFrame, lastIndex: 0 };
            this.effectsSequence = [interpolateShapeCurrentTime.bind(this)]
        }
        KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
        KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
        KeyframedShapeProperty.prototype.setVValue = setVValue;
        KeyframedShapeProperty.prototype.addEffect = addEffect;
        var EllShapeProperty = (function() {
            var cPoint = roundCorner;

            function EllShapeProperty(elem, data) {
                this.v = shape_pool.newElement();
                this.v.setPathData(!0, 4);
                this.localShapeCollection = shapeCollection_pool.newShapeCollection();
                this.paths = this.localShapeCollection;
                this.localShapeCollection.addShape(this.v);
                this.d = data.d;
                this.elem = elem;
                this.comp = elem.comp;
                this.frameId = -1;
                this.initDynamicPropertyContainer(elem);
                this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
                this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
                if (this.dynamicProperties.length) { this.k = !0 } else {
                    this.k = !1;
                    this.convertEllToPath()
                }
            };
            EllShapeProperty.prototype = {
                reset: resetShape,
                getValue: function() {
                    if (this.elem.globalData.frameId === this.frameId) { return }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) { this.convertEllToPath() }
                },
                convertEllToPath: function() {
                    var p0 = this.p.v[0],
                        p1 = this.p.v[1],
                        s0 = this.s.v[0] / 2,
                        s1 = this.s.v[1] / 2;
                    var _cw = this.d !== 3;
                    var _v = this.v;
                    _v.v[0][0] = p0;
                    _v.v[0][1] = p1 - s1;
                    _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
                    _v.v[1][1] = p1;
                    _v.v[2][0] = p0;
                    _v.v[2][1] = p1 + s1;
                    _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
                    _v.v[3][1] = p1;
                    _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                    _v.i[0][1] = p1 - s1;
                    _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
                    _v.i[1][1] = p1 - s1 * cPoint;
                    _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                    _v.i[2][1] = p1 + s1;
                    _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
                    _v.i[3][1] = p1 + s1 * cPoint;
                    _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                    _v.o[0][1] = p1 - s1;
                    _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
                    _v.o[1][1] = p1 + s1 * cPoint;
                    _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                    _v.o[2][1] = p1 + s1;
                    _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
                    _v.o[3][1] = p1 - s1 * cPoint
                }
            }
            extendPrototype([DynamicPropertyContainer], EllShapeProperty);
            return EllShapeProperty
        }());
        var StarShapeProperty = (function() {
            function StarShapeProperty(elem, data) {
                this.v = shape_pool.newElement();
                this.v.setPathData(!0, 0);
                this.elem = elem;
                this.comp = elem.comp;
                this.data = data;
                this.frameId = -1;
                this.d = data.d;
                this.initDynamicPropertyContainer(elem);
                if (data.sy === 1) {
                    this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
                    this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
                    this.convertToPath = this.convertStarToPath
                } else { this.convertToPath = this.convertPolygonToPath }
                this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
                this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
                this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
                this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
                this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
                this.localShapeCollection = shapeCollection_pool.newShapeCollection();
                this.localShapeCollection.addShape(this.v);
                this.paths = this.localShapeCollection;
                if (this.dynamicProperties.length) { this.k = !0 } else {
                    this.k = !1;
                    this.convertToPath()
                }
            };
            StarShapeProperty.prototype = {
                reset: resetShape,
                getValue: function() {
                    if (this.elem.globalData.frameId === this.frameId) { return }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) { this.convertToPath() }
                },
                convertStarToPath: function() {
                    var numPts = Math.floor(this.pt.v) * 2;
                    var angle = Math.PI * 2 / numPts;
                    var longFlag = !0;
                    var longRad = this.or.v;
                    var shortRad = this.ir.v;
                    var longRound = this.os.v;
                    var shortRound = this.is.v;
                    var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
                    var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
                    var i, rad, roundness, perimSegment, currentAng = -Math.PI / 2;
                    currentAng += this.r.v;
                    var dir = this.data.d === 3 ? -1 : 1;
                    this.v._length = 0;
                    for (i = 0; i < numPts; i += 1) {
                        rad = longFlag ? longRad : shortRad;
                        roundness = longFlag ? longRound : shortRound;
                        perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                        var x = rad * Math.cos(currentAng);
                        var y = rad * Math.sin(currentAng);
                        var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                        var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                        x += +this.p.v[0];
                        y += +this.p.v[1];
                        this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, !0);
                        longFlag = !longFlag;
                        currentAng += angle * dir
                    }
                },
                convertPolygonToPath: function() {
                    var numPts = Math.floor(this.pt.v);
                    var angle = Math.PI * 2 / numPts;
                    var rad = this.or.v;
                    var roundness = this.os.v;
                    var perimSegment = 2 * Math.PI * rad / (numPts * 4);
                    var i, currentAng = -Math.PI / 2;
                    var dir = this.data.d === 3 ? -1 : 1;
                    currentAng += this.r.v;
                    this.v._length = 0;
                    for (i = 0; i < numPts; i += 1) {
                        var x = rad * Math.cos(currentAng);
                        var y = rad * Math.sin(currentAng);
                        var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                        var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                        x += +this.p.v[0];
                        y += +this.p.v[1];
                        this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, !0);
                        currentAng += angle * dir
                    }
                    this.paths.length = 0;
                    this.paths[0] = this.v
                }
            }
            extendPrototype([DynamicPropertyContainer], StarShapeProperty);
            return StarShapeProperty
        }());
        var RectShapeProperty = (function() {
            function RectShapeProperty(elem, data) {
                this.v = shape_pool.newElement();
                this.v.c = !0;
                this.localShapeCollection = shapeCollection_pool.newShapeCollection();
                this.localShapeCollection.addShape(this.v);
                this.paths = this.localShapeCollection;
                this.elem = elem;
                this.comp = elem.comp;
                this.frameId = -1;
                this.d = data.d;
                this.initDynamicPropertyContainer(elem);
                this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
                this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
                this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);
                if (this.dynamicProperties.length) { this.k = !0 } else {
                    this.k = !1;
                    this.convertRectToPath()
                }
            };
            RectShapeProperty.prototype = {
                convertRectToPath: function() {
                    var p0 = this.p.v[0],
                        p1 = this.p.v[1],
                        v0 = this.s.v[0] / 2,
                        v1 = this.s.v[1] / 2;
                    var round = bm_min(v0, v1, this.r.v);
                    var cPoint = round * (1 - roundCorner);
                    this.v._length = 0;
                    if (this.d === 2 || this.d === 1) {
                        this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, !0);
                        this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, !0);
                        if (round !== 0) {
                            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, !0);
                            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, !0);
                            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, !0);
                            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, !0);
                            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, !0);
                            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, !0)
                        } else {
                            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
                            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3)
                        }
                    } else {
                        this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, !0);
                        if (round !== 0) {
                            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, !0);
                            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, !0);
                            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, !0);
                            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, !0);
                            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, !0);
                            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, !0);
                            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, !0)
                        } else {
                            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, !0);
                            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, !0);
                            this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, !0)
                        }
                    }
                },
                getValue: function(frameNum) {
                    if (this.elem.globalData.frameId === this.frameId) { return }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) { this.convertRectToPath() }
                },
                reset: resetShape
            }
            extendPrototype([DynamicPropertyContainer], RectShapeProperty);
            return RectShapeProperty
        }());

        function getShapeProp(elem, data, type) {
            var prop;
            if (type === 3 || type === 4) { var dataProp = type === 3 ? data.pt : data.ks; var keys = dataProp.k; if (keys.length) { prop = new KeyframedShapeProperty(elem, data, type) } else { prop = new ShapeProperty(elem, data, type) } } else if (type === 5) { prop = new RectShapeProperty(elem, data) } else if (type === 6) { prop = new EllShapeProperty(elem, data) } else if (type === 7) { prop = new StarShapeProperty(elem, data) }
            if (prop.k) { elem.addDynamicProperty(prop) }
            return prop
        }

        function getConstructorFunction() { return ShapeProperty }

        function getKeyframedConstructorFunction() { return KeyframedShapeProperty }
        var ob = {};
        ob.getShapeProp = getShapeProp;
        ob.getConstructorFunction = getConstructorFunction;
        ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
        return ob
    }());
    var ShapeModifiers = (function() {
        var ob = {};
        var modifiers = {};
        ob.registerModifier = registerModifier;
        ob.getModifier = getModifier;

        function registerModifier(nm, factory) { if (!modifiers[nm]) { modifiers[nm] = factory } }

        function getModifier(nm, elem, data) { return new modifiers[nm](elem, data) }
        return ob
    }());

    function ShapeModifier() {}
    ShapeModifier.prototype.initModifierProperties = function() {};
    ShapeModifier.prototype.addShapeToModifier = function() {};
    ShapeModifier.prototype.addShape = function(data) {
        if (!this.closed) {
            data.sh.container.addDynamicProperty(data.sh);
            var shapeData = { shape: data.sh, data: data, localShapeCollection: shapeCollection_pool.newShapeCollection() };
            this.shapes.push(shapeData);
            this.addShapeToModifier(shapeData);
            if (this._isAnimated) { data.setAsAnimated() }
        }
    };
    ShapeModifier.prototype.init = function(elem, data) {
        this.shapes = [];
        this.elem = elem;
        this.initDynamicPropertyContainer(elem);
        this.initModifierProperties(elem, data);
        this.frameId = initialDefaultFrame;
        this.closed = !1;
        this.k = !1;
        if (this.dynamicProperties.length) { this.k = !0 } else { this.getValue(!0) }
    };
    ShapeModifier.prototype.processKeys = function() {
        if (this.elem.globalData.frameId === this.frameId) { return }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties()
    };
    extendPrototype([DynamicPropertyContainer], ShapeModifier);

    function TrimModifier() {}
    extendPrototype([ShapeModifier], TrimModifier);
    TrimModifier.prototype.initModifierProperties = function(elem, data) {
        this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
        this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
        this.sValue = 0;
        this.eValue = 0;
        this.getValue = this.processKeys;
        this.m = data.m;
        this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    };
    TrimModifier.prototype.addShapeToModifier = function(shapeData) { shapeData.pathsData = [] };
    TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
        var segments = [];
        if (e <= 1) { segments.push({ s: s, e: e }) } else if (s >= 1) { segments.push({ s: s - 1, e: e - 1 }) } else {
            segments.push({ s: s, e: 1 });
            segments.push({ s: 0, e: e - 1 })
        }
        var shapeSegments = [];
        var i, len = segments.length,
            segmentOb;
        for (i = 0; i < len; i += 1) {
            segmentOb = segments[i];
            if (segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength) {} else {
                var shapeS, shapeE;
                if (segmentOb.s * totalModifierLength <= addedLength) { shapeS = 0 } else { shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength }
                if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) { shapeE = 1 } else { shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength) }
                shapeSegments.push([shapeS, shapeE])
            }
        }
        if (!shapeSegments.length) { shapeSegments.push([0, 0]) }
        return shapeSegments
    };
    TrimModifier.prototype.releasePathsData = function(pathsData) {
        var i, len = pathsData.length;
        for (i = 0; i < len; i += 1) { segments_length_pool.release(pathsData[i]) }
        pathsData.length = 0;
        return pathsData
    };
    TrimModifier.prototype.processShapes = function(_isFirstFrame) {
        var s, e;
        if (this._mdf || _isFirstFrame) {
            var o = (this.o.v % 360) / 360;
            if (o < 0) { o += 1 }
            s = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + o;
            e = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + o;
            if (s === e) {}
            if (s > e) {
                var _s = s;
                s = e;
                e = _s
            }
            s = Math.round(s * 10000) * 0.0001;
            e = Math.round(e * 10000) * 0.0001;
            this.sValue = s;
            this.eValue = e
        } else {
            s = this.sValue;
            e = this.eValue
        }
        var shapePaths;
        var i, len = this.shapes.length,
            j, jLen;
        var pathsData, pathData, totalShapeLength, totalModifierLength = 0;
        if (e === s) {
            for (i = 0; i < len; i += 1) {
                this.shapes[i].localShapeCollection.releaseShapes();
                this.shapes[i].shape._mdf = !0;
                this.shapes[i].shape.paths = this.shapes[i].localShapeCollection
            }
        } else if (!((e === 1 && s === 0) || (e === 0 && s === 1))) {
            var segments = [],
                shapeData, localShapeCollection;
            for (i = 0; i < len; i += 1) {
                shapeData = this.shapes[i];
                if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) { shapeData.shape.paths = shapeData.localShapeCollection } else {
                    shapePaths = shapeData.shape.paths;
                    jLen = shapePaths._length;
                    totalShapeLength = 0;
                    if (!shapeData.shape._mdf && shapeData.pathsData.length) { totalShapeLength = shapeData.totalShapeLength } else {
                        pathsData = this.releasePathsData(shapeData.pathsData);
                        for (j = 0; j < jLen; j += 1) {
                            pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
                            pathsData.push(pathData);
                            totalShapeLength += pathData.totalLength
                        }
                        shapeData.totalShapeLength = totalShapeLength;
                        shapeData.pathsData = pathsData
                    }
                    totalModifierLength += totalShapeLength;
                    shapeData.shape._mdf = !0
                }
            }
            var shapeS = s,
                shapeE = e,
                addedLength = 0,
                edges;
            for (i = len - 1; i >= 0; i -= 1) {
                shapeData = this.shapes[i];
                if (shapeData.shape._mdf) {
                    localShapeCollection = shapeData.localShapeCollection;
                    localShapeCollection.releaseShapes();
                    if (this.m === 2 && len > 1) {
                        edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                        addedLength += shapeData.totalShapeLength
                    } else {
                        edges = [
                            [shapeS, shapeE]
                        ]
                    }
                    jLen = edges.length;
                    for (j = 0; j < jLen; j += 1) {
                        shapeS = edges[j][0];
                        shapeE = edges[j][1];
                        segments.length = 0;
                        if (shapeE <= 1) { segments.push({ s: shapeData.totalShapeLength * shapeS, e: shapeData.totalShapeLength * shapeE }) } else if (shapeS >= 1) { segments.push({ s: shapeData.totalShapeLength * (shapeS - 1), e: shapeData.totalShapeLength * (shapeE - 1) }) } else {
                            segments.push({ s: shapeData.totalShapeLength * shapeS, e: shapeData.totalShapeLength });
                            segments.push({ s: 0, e: shapeData.totalShapeLength * (shapeE - 1) })
                        }
                        var newShapesData = this.addShapes(shapeData, segments[0]);
                        if (segments[0].s !== segments[0].e) {
                            if (segments.length > 1) {
                                var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
                                if (lastShapeInCollection.c) {
                                    var lastShape = newShapesData.pop();
                                    this.addPaths(newShapesData, localShapeCollection);
                                    newShapesData = this.addShapes(shapeData, segments[1], lastShape)
                                } else {
                                    this.addPaths(newShapesData, localShapeCollection);
                                    newShapesData = this.addShapes(shapeData, segments[1])
                                }
                            }
                            this.addPaths(newShapesData, localShapeCollection)
                        }
                    }
                    shapeData.shape.paths = localShapeCollection
                }
            }
        } else if (this._mdf) {
            for (i = 0; i < len; i += 1) {
                this.shapes[i].pathsData.length = 0;
                this.shapes[i].shape._mdf = !0
            }
        }
    };
    TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) { var i, len = newPaths.length; for (i = 0; i < len; i += 1) { localShapeCollection.addShape(newPaths[i]) } };
    TrimModifier.prototype.addSegment = function(pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
        shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
        shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);
        if (newShape) { shapePath.setXYAt(pt1[0], pt1[1], 'v', pos) }
        shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1)
    };
    TrimModifier.prototype.addSegmentFromArray = function(points, shapePath, pos, newShape) {
        shapePath.setXYAt(points[1], points[5], 'o', pos);
        shapePath.setXYAt(points[2], points[6], 'i', pos + 1);
        if (newShape) { shapePath.setXYAt(points[0], points[4], 'v', pos) }
        shapePath.setXYAt(points[3], points[7], 'v', pos + 1)
    };
    TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath) {
        var pathsData = shapeData.pathsData;
        var shapePaths = shapeData.shape.paths.shapes;
        var i, len = shapeData.shape.paths._length,
            j, jLen;
        var addedLength = 0;
        var currentLengthData, segmentCount;
        var lengths;
        var segment;
        var shapes = [];
        var initPos;
        var newShape = !0;
        if (!shapePath) {
            shapePath = shape_pool.newElement();
            segmentCount = 0;
            initPos = 0
        } else {
            segmentCount = shapePath._length;
            initPos = shapePath._length
        }
        shapes.push(shapePath);
        for (i = 0; i < len; i += 1) {
            lengths = pathsData[i].lengths;
            shapePath.c = shapePaths[i].c;
            jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
            for (j = 1; j < jLen; j += 1) {
                currentLengthData = lengths[j - 1];
                if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
                    addedLength += currentLengthData.addedLength;
                    shapePath.c = !1
                } else if (addedLength > shapeSegment.e) { shapePath.c = !1; break } else {
                    if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
                        this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
                        newShape = !1
                    } else {
                        segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
                        this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                        newShape = !1;
                        shapePath.c = !1
                    }
                    addedLength += currentLengthData.addedLength;
                    segmentCount += 1
                }
            }
            if (shapePaths[i].c && lengths.length) {
                currentLengthData = lengths[j - 1];
                if (addedLength <= shapeSegment.e) {
                    var segmentLength = lengths[j - 1].addedLength;
                    if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
                        this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
                        newShape = !1
                    } else {
                        segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
                        this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                        newShape = !1;
                        shapePath.c = !1
                    }
                } else { shapePath.c = !1 }
                addedLength += currentLengthData.addedLength;
                segmentCount += 1
            }
            if (shapePath._length) {
                shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
                shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1)
            }
            if (addedLength > shapeSegment.e) { break }
            if (i < len - 1) {
                shapePath = shape_pool.newElement();
                newShape = !0;
                shapes.push(shapePath);
                segmentCount = 0
            }
        }
        return shapes
    };
    ShapeModifiers.registerModifier('tm', TrimModifier);

    function RoundCornersModifier() {}
    extendPrototype([ShapeModifier], RoundCornersModifier);
    RoundCornersModifier.prototype.initModifierProperties = function(elem, data) {
        this.getValue = this.processKeys;
        this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
        this._isAnimated = !!this.rd.effectsSequence.length
    };
    RoundCornersModifier.prototype.processPath = function(path, round) {
        var cloned_path = shape_pool.newElement();
        cloned_path.c = path.c;
        var i, len = path._length;
        var currentV, currentI, currentO, closerV, newV, newO, newI, distance, newPosPerc, index = 0;
        var vX, vY, oX, oY, iX, iY;
        for (i = 0; i < len; i += 1) {
            currentV = path.v[i];
            currentO = path.o[i];
            currentI = path.i[i];
            if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
                if ((i === 0 || i === len - 1) && !path.c) {
                    cloned_path.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
                    index += 1
                } else {
                    if (i === 0) { closerV = path.v[len - 1] } else { closerV = path.v[i - 1] }
                    distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
                    newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
                    vX = iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
                    vY = iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
                    oX = vX - (vX - currentV[0]) * roundCorner;
                    oY = vY - (vY - currentV[1]) * roundCorner;
                    cloned_path.setTripleAt(vX, vY, oX, oY, iX, iY, index);
                    index += 1;
                    if (i === len - 1) { closerV = path.v[0] } else { closerV = path.v[i + 1] }
                    distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
                    newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
                    vX = oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
                    vY = oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
                    iX = vX - (vX - currentV[0]) * roundCorner;
                    iY = vY - (vY - currentV[1]) * roundCorner;
                    cloned_path.setTripleAt(vX, vY, oX, oY, iX, iY, index);
                    index += 1
                }
            } else {
                cloned_path.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
                index += 1
            }
        }
        return cloned_path
    };
    RoundCornersModifier.prototype.processShapes = function(_isFirstFrame) {
        var shapePaths;
        var i, len = this.shapes.length;
        var j, jLen;
        var rd = this.rd.v;
        if (rd !== 0) {
            var shapeData, newPaths, localShapeCollection;
            for (i = 0; i < len; i += 1) {
                shapeData = this.shapes[i];
                newPaths = shapeData.shape.paths;
                localShapeCollection = shapeData.localShapeCollection;
                if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
                    localShapeCollection.releaseShapes();
                    shapeData.shape._mdf = !0;
                    shapePaths = shapeData.shape.paths.shapes;
                    jLen = shapeData.shape.paths._length;
                    for (j = 0; j < jLen; j += 1) { localShapeCollection.addShape(this.processPath(shapePaths[j], rd)) }
                }
                shapeData.shape.paths = shapeData.localShapeCollection
            }
        }
        if (!this.dynamicProperties.length) { this._mdf = !1 }
    };
    ShapeModifiers.registerModifier('rd', RoundCornersModifier);

    function RepeaterModifier() {}
    extendPrototype([ShapeModifier], RepeaterModifier);
    RepeaterModifier.prototype.initModifierProperties = function(elem, data) {
        this.getValue = this.processKeys;
        this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
        this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
        this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
        this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
        this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
        this.data = data;
        if (!this.dynamicProperties.length) { this.getValue(!0) }
        this._isAnimated = !!this.dynamicProperties.length;
        this.pMatrix = new Matrix();
        this.rMatrix = new Matrix();
        this.sMatrix = new Matrix();
        this.tMatrix = new Matrix();
        this.matrix = new Matrix()
    };
    RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform, perc, inv) {
        var dir = inv ? -1 : 1;
        var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
        var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
        pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
        rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
        rMatrix.rotate(-transform.r.v * dir * perc);
        rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
        sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
        sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
        sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2])
    };
    RepeaterModifier.prototype.init = function(elem, arr, pos, elemsData) {
        this.elem = elem;
        this.arr = arr;
        this.pos = pos;
        this.elemsData = elemsData;
        this._currentCopies = 0;
        this._elements = [];
        this._groups = [];
        this.frameId = -1;
        this.initDynamicPropertyContainer(elem);
        this.initModifierProperties(elem, arr[pos]);
        var cont = 0;
        while (pos > 0) {
            pos -= 1;
            this._elements.unshift(arr[pos]);
            cont += 1
        }
        if (this.dynamicProperties.length) { this.k = !0 } else { this.getValue(!0) }
    };
    RepeaterModifier.prototype.resetElements = function(elements) { var i, len = elements.length; for (i = 0; i < len; i += 1) { elements[i]._processed = !1; if (elements[i].ty === 'gr') { this.resetElements(elements[i].it) } } };
    RepeaterModifier.prototype.cloneElements = function(elements) {
        var i, len = elements.length;
        var newElements = JSON.parse(JSON.stringify(elements));
        this.resetElements(newElements);
        return newElements
    };
    RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) { var i, len = elements.length; for (i = 0; i < len; i += 1) { elements[i]._render = renderFlag; if (elements[i].ty === 'gr') { this.changeGroupRender(elements[i].it, renderFlag) } } };
    RepeaterModifier.prototype.processShapes = function(_isFirstFrame) {
        var items, itemsTransform, i, dir, cont;
        if (this._mdf || _isFirstFrame) {
            var copies = Math.ceil(this.c.v);
            if (this._groups.length < copies) {
                while (this._groups.length < copies) {
                    var group = { it: this.cloneElements(this._elements), ty: 'gr' };
                    group.it.push({ "a": { "a": 0, "ix": 1, "k": [0, 0] }, "nm": "Transform", "o": { "a": 0, "ix": 7, "k": 100 }, "p": { "a": 0, "ix": 2, "k": [0, 0] }, "r": { "a": 1, "ix": 6, "k": [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, "s": { "a": 0, "ix": 3, "k": [100, 100] }, "sa": { "a": 0, "ix": 5, "k": 0 }, "sk": { "a": 0, "ix": 4, "k": 0 }, "ty": "tr" });
                    this.arr.splice(0, 0, group);
                    this._groups.splice(0, 0, group);
                    this._currentCopies += 1
                }
                this.elem.reloadShapes()
            }
            cont = 0;
            var renderFlag;
            for (i = 0; i <= this._groups.length - 1; i += 1) {
                renderFlag = cont < copies;
                this._groups[i]._render = renderFlag;
                this.changeGroupRender(this._groups[i].it, renderFlag);
                cont += 1
            }
            this._currentCopies = copies;
            var offset = this.o.v;
            var offsetModulo = offset % 1;
            var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
            var k;
            var tMat = this.tr.v.props;
            var pProps = this.pMatrix.props;
            var rProps = this.rMatrix.props;
            var sProps = this.sMatrix.props;
            this.pMatrix.reset();
            this.rMatrix.reset();
            this.sMatrix.reset();
            this.tMatrix.reset();
            this.matrix.reset();
            var iteration = 0;
            if (offset > 0) {
                while (iteration < roundOffset) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1);
                    iteration += 1
                }
                if (offsetModulo) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, !1);
                    iteration += offsetModulo
                }
            } else if (offset < 0) {
                while (iteration > roundOffset) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0);
                    iteration -= 1
                }
                if (offsetModulo) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, !0);
                    iteration -= offsetModulo
                }
            }
            i = this.data.m === 1 ? 0 : this._currentCopies - 1;
            dir = this.data.m === 1 ? 1 : -1;
            cont = this._currentCopies;
            var j, jLen;
            while (cont) {
                items = this.elemsData[i].it;
                itemsTransform = items[items.length - 1].transform.mProps.v.props;
                jLen = itemsTransform.length;
                items[items.length - 1].transform.mProps._mdf = !0;
                items[items.length - 1].transform.op._mdf = !0;
                items[items.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
                if (iteration !== 0) {
                    if ((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)) { this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1) }
                    this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
                    this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
                    this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);
                    for (j = 0; j < jLen; j += 1) { itemsTransform[j] = this.matrix.props[j] }
                    this.matrix.reset()
                } else { this.matrix.reset(); for (j = 0; j < jLen; j += 1) { itemsTransform[j] = this.matrix.props[j] } }
                iteration += 1;
                cont -= 1;
                i += dir
            }
        } else {
            cont = this._currentCopies;
            i = 0;
            dir = 1;
            while (cont) {
                items = this.elemsData[i].it;
                itemsTransform = items[items.length - 1].transform.mProps.v.props;
                items[items.length - 1].transform.mProps._mdf = !1;
                items[items.length - 1].transform.op._mdf = !1;
                cont -= 1;
                i += dir
            }
        }
    };
    RepeaterModifier.prototype.addShape = function() {};
    ShapeModifiers.registerModifier('rp', RepeaterModifier);

    function ShapeCollection() {
        this._length = 0;
        this._maxLength = 4;
        this.shapes = createSizedArray(this._maxLength)
    }
    ShapeCollection.prototype.addShape = function(shapeData) {
        if (this._length === this._maxLength) {
            this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
            this._maxLength *= 2
        }
        this.shapes[this._length] = shapeData;
        this._length += 1
    };
    ShapeCollection.prototype.releaseShapes = function() {
        var i;
        for (i = 0; i < this._length; i += 1) { shape_pool.release(this.shapes[i]) }
        this._length = 0
    };

    function DashProperty(elem, data, renderer, container) {
        this.elem = elem;
        this.frameId = -1;
        this.dataProps = createSizedArray(data.length);
        this.renderer = renderer;
        this.k = !1;
        this.dashStr = '';
        this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
        this.dashoffset = createTypedArray('float32', 1);
        this.initDynamicPropertyContainer(container);
        var i, len = data.length || 0,
            prop;
        for (i = 0; i < len; i += 1) {
            prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
            this.k = prop.k || this.k;
            this.dataProps[i] = { n: data[i].n, p: prop }
        }
        if (!this.k) { this.getValue(!0) }
        this._isAnimated = this.k
    }
    DashProperty.prototype.getValue = function(forceRender) {
        if (this.elem.globalData.frameId === this.frameId && !forceRender) { return }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        this._mdf = this._mdf || forceRender;
        if (this._mdf) {
            var i = 0,
                len = this.dataProps.length;
            if (this.renderer === 'svg') { this.dashStr = '' }
            for (i = 0; i < len; i += 1) { if (this.dataProps[i].n != 'o') { if (this.renderer === 'svg') { this.dashStr += ' ' + this.dataProps[i].p.v } else { this.dashArray[i] = this.dataProps[i].p.v } } else { this.dashoffset[0] = this.dataProps[i].p.v } }
        }
    };
    extendPrototype([DynamicPropertyContainer], DashProperty);

    function GradientProperty(elem, data, container) {
        this.data = data;
        this.c = createTypedArray('uint8c', data.p * 4);
        var cLength = data.k.k[0].s ? (data.k.k[0].s.length - data.p * 4) : data.k.k.length - data.p * 4;
        this.o = createTypedArray('float32', cLength);
        this._cmdf = !1;
        this._omdf = !1;
        this._collapsable = this.checkCollapsable();
        this._hasOpacity = cLength;
        this.initDynamicPropertyContainer(container);
        this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
        this.k = this.prop.k;
        this.getValue(!0)
    }
    GradientProperty.prototype.comparePoints = function(values, points) {
        var i = 0,
            len = this.o.length / 2,
            diff;
        while (i < len) {
            diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
            if (diff > 0.01) { return !1 }
            i += 1
        }
        return !0
    };
    GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 !== this.c.length / 4) { return !1 }
        if (this.data.k.k[0].s) {
            var i = 0,
                len = this.data.k.k.length;
            while (i < len) {
                if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) { return !1 }
                i += 1
            }
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) { return !1 }
        return !0
    };
    GradientProperty.prototype.getValue = function(forceRender) {
        this.prop.getValue();
        this._mdf = !1;
        this._cmdf = !1;
        this._omdf = !1;
        if (this.prop._mdf || forceRender) {
            var i, len = this.data.p * 4;
            var mult, val;
            for (i = 0; i < len; i += 1) {
                mult = i % 4 === 0 ? 100 : 255;
                val = Math.round(this.prop.v[i] * mult);
                if (this.c[i] !== val) {
                    this.c[i] = val;
                    this._cmdf = !forceRender
                }
            }
            if (this.o.length) {
                len = this.prop.v.length;
                for (i = this.data.p * 4; i < len; i += 1) {
                    mult = i % 2 === 0 ? 100 : 1;
                    val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
                    if (this.o[i - this.data.p * 4] !== val) {
                        this.o[i - this.data.p * 4] = val;
                        this._omdf = !forceRender
                    }
                }
            }
            this._mdf = !forceRender
        }
    };
    extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function(pathNodes, length, closed, mat) {
        if (length === 0) { return '' }
        var _o = pathNodes.o;
        var _i = pathNodes.i;
        var _v = pathNodes.v;
        var i, shapeString = " M" + mat.applyToPointStringified(_v[0][0], _v[0][1]);
        for (i = 1; i < length; i += 1) { shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[i][0], _i[i][1]) + " " + mat.applyToPointStringified(_v[i][0], _v[i][1]) }
        if (closed && length) {
            shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[0][0], _i[0][1]) + " " + mat.applyToPointStringified(_v[0][0], _v[0][1]);
            shapeString += 'z'
        }
        return shapeString
    }
    var ImagePreloader = (function() {
        var proxyImage = (function() {
            var canvas = createTag('canvas');
            canvas.width = 1;
            canvas.height = 1;
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, 1, 1);
            return canvas
        }())

        function imageLoaded() { this.loadedAssets += 1; if (this.loadedAssets === this.totalImages) { if (this.imagesLoadedCb) { this.imagesLoadedCb(null) } } }

        function getAssetsPath(assetData, assetsPath, original_path) {
            var path = '';
            if (assetData.e) { path = assetData.p } else if (assetsPath) {
                var imagePath = assetData.p;
                if (imagePath.indexOf('images/') !== -1) { imagePath = imagePath.split('/')[1] }
                path = assetsPath + imagePath
            } else {
                path = original_path;
                path += assetData.u ? assetData.u : '';
                path += assetData.p
            }
            return path
        }

        function createImageData(assetData) {
            var path = getAssetsPath(assetData, this.assetsPath, this.path);
            var img = createTag('img');
            img.crossOrigin = 'anonymous';
            img.addEventListener('load', this._imageLoaded.bind(this), !1);
            img.addEventListener('error', function() {
                ob.img = proxyImage;
                this._imageLoaded()
            }.bind(this), !1);
            img.src = path;
            var ob = { img: img, assetData: assetData }
            return ob
        }

        function loadAssets(assets, cb) {
            this.imagesLoadedCb = cb;
            var i, len = assets.length;
            for (i = 0; i < len; i += 1) {
                if (!assets[i].layers) {
                    this.totalImages += 1;
                    this.images.push(this._createImageData(assets[i]))
                }
            }
        }

        function setPath(path) { this.path = path || '' }

        function setAssetsPath(path) { this.assetsPath = path || '' }

        function getImage(assetData) {
            var i = 0,
                len = this.images.length;
            while (i < len) {
                if (this.images[i].assetData === assetData) { return this.images[i].img }
                i += 1
            }
        }

        function destroy() {
            this.imagesLoadedCb = null;
            this.images.length = 0
        }

        function loaded() { return this.totalImages === this.loadedAssets }
        return function ImagePreloader() {
            this.loadAssets = loadAssets;
            this.setAssetsPath = setAssetsPath;
            this.setPath = setPath;
            this.loaded = loaded;
            this.destroy = destroy;
            this.getImage = getImage;
            this._createImageData = createImageData;
            this._imageLoaded = imageLoaded;
            this.assetsPath = '';
            this.path = '';
            this.totalImages = 0;
            this.loadedAssets = 0;
            this.imagesLoadedCb = null;
            this.images = []
        }
    }());
    var featureSupport = (function() {
        var ob = { maskType: !0 };
        if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) { ob.maskType = !1 }
        return ob
    }());
    var filtersFactory = (function() {
        var ob = {};
        ob.createFilter = createFilter;
        ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

        function createFilter(filId) {
            var fil = createNS('filter');
            fil.setAttribute('id', filId);
            fil.setAttribute('filterUnits', 'objectBoundingBox');
            fil.setAttribute('x', '0%');
            fil.setAttribute('y', '0%');
            fil.setAttribute('width', '100%');
            fil.setAttribute('height', '100%');
            return fil
        }

        function createAlphaToLuminanceFilter() {
            var feColorMatrix = createNS('feColorMatrix');
            feColorMatrix.setAttribute('type', 'matrix');
            feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
            feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
            return feColorMatrix
        }
        return ob
    }());
    var assetLoader = (function() {
        function formatResponse(xhr) { if (xhr.response && typeof xhr.response === 'object') { return xhr.response } else if (xhr.response && typeof xhr.response === 'string') { return JSON.parse(xhr.response) } else if (xhr.responseText) { return JSON.parse(xhr.responseText) } }

        function loadAsset(path, callback, errorCallback) {
            var response;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', path, !0);
            try { xhr.responseType = "json" } catch (err) {}
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        response = formatResponse(xhr);
                        callback(response)
                    } else {
                        try {
                            response = formatResponse(xhr);
                            callback(response)
                        } catch (err) { if (errorCallback) { errorCallback(err) } }
                    }
                }
            }
        }
        return { load: loadAsset }
    }())

    function TextAnimatorProperty(textData, renderType, elem) {
        this._isFirstFrame = !0;
        this._hasMaskedPath = !1;
        this._frameId = -1;
        this._textData = textData;
        this._renderType = renderType;
        this._elem = elem;
        this._animatorsData = createSizedArray(this._textData.a.length);
        this._pathData = {};
        this._moreOptions = { alignment: {} };
        this.renderedLetters = [];
        this.lettersChangedFlag = !1;
        this.initDynamicPropertyContainer(elem)
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
        var i, len = this._textData.a.length,
            animatorProps;
        var getProp = PropertyFactory.getProp;
        for (i = 0; i < len; i += 1) {
            animatorProps = this._textData.a[i];
            this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this)
        }
        if (this._textData.p && 'm' in this._textData.p) {
            this._pathData = { f: getProp(this._elem, this._textData.p.f, 0, 0, this), l: getProp(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) };
            this._hasMaskedPath = !0
        } else { this._hasMaskedPath = !1 }
        this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this)
    };
    TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag) {
        this.lettersChangedFlag = lettersChangedFlag;
        if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) { return }
        this._isFirstFrame = !1;
        var alignment = this._moreOptions.alignment.v;
        var animators = this._animatorsData;
        var textData = this._textData;
        var matrixHelper = this.mHelper;
        var renderType = this._renderType;
        var renderedLettersCount = this.renderedLetters.length;
        var data = this.data;
        var xPos, yPos;
        var i, len;
        var letters = documentData.l,
            pathInfo, currentLength, currentPoint, segmentLength, flag, pointInd, segmentInd, prevPoint, points, segments, partialLength, totalLength, perc, tanAngle, mask;
        if (this._hasMaskedPath) {
            mask = this._pathData.m;
            if (!this._pathData.n || this._pathData._mdf) {
                var paths = mask.v;
                if (this._pathData.r) { paths = paths.reverse() }
                pathInfo = { tLength: 0, segments: [] };
                len = paths._length - 1;
                var bezierData;
                totalLength = 0;
                for (i = 0; i < len; i += 1) {
                    bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
                    pathInfo.tLength += bezierData.segmentLength;
                    pathInfo.segments.push(bezierData);
                    totalLength += bezierData.segmentLength
                }
                i = len;
                if (mask.v.c) {
                    bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
                    pathInfo.tLength += bezierData.segmentLength;
                    pathInfo.segments.push(bezierData);
                    totalLength += bezierData.segmentLength
                }
                this._pathData.pi = pathInfo
            }
            pathInfo = this._pathData.pi;
            currentLength = this._pathData.f.v;
            segmentInd = 0;
            pointInd = 1;
            segmentLength = 0;
            flag = !0;
            segments = pathInfo.segments;
            if (currentLength < 0 && mask.v.c) {
                if (pathInfo.tLength < Math.abs(currentLength)) { currentLength = -Math.abs(currentLength) % pathInfo.tLength }
                segmentInd = segments.length - 1;
                points = segments[segmentInd].points;
                pointInd = points.length - 1;
                while (currentLength < 0) {
                    currentLength += points[pointInd].partialLength;
                    pointInd -= 1;
                    if (pointInd < 0) {
                        segmentInd -= 1;
                        points = segments[segmentInd].points;
                        pointInd = points.length - 1
                    }
                }
            }
            points = segments[segmentInd].points;
            prevPoint = points[pointInd - 1];
            currentPoint = points[pointInd];
            partialLength = currentPoint.partialLength
        }
        len = letters.length;
        xPos = 0;
        yPos = 0;
        var yOff = documentData.finalSize * 1.2 * 0.714;
        var firstLine = !0;
        var animatorProps, animatorSelector;
        var j, jLen;
        var letterValue;
        jLen = animators.length;
        var lastLetter;
        var mult, ind = -1,
            offf, xPathPos, yPathPos;
        var initPathPos = currentLength,
            initSegmentInd = segmentInd,
            initPointInd = pointInd,
            currentLine = -1;
        var elemOpacity;
        var sc, sw, fc, k;
        var lineLength = 0;
        var letterSw, letterSc, letterFc, letterM = '',
            letterP = this.defaultPropsArray,
            letterO;
        if (documentData.j === 2 || documentData.j === 1) {
            var animatorJustifyOffset = 0;
            var animatorFirstCharOffset = 0;
            var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
            var lastIndex = 0;
            var isNewLine = !0;
            for (i = 0; i < len; i += 1) {
                if (letters[i].n) {
                    if (animatorJustifyOffset) { animatorJustifyOffset += animatorFirstCharOffset }
                    while (lastIndex < i) {
                        letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
                        lastIndex += 1
                    }
                    animatorJustifyOffset = 0;
                    isNewLine = !0
                } else {
                    for (j = 0; j < jLen; j += 1) {
                        animatorProps = animators[j].a;
                        if (animatorProps.t.propType) {
                            if (isNewLine && documentData.j === 2) { animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult }
                            animatorSelector = animators[j].s;
                            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                            if (mult.length) { animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult } else { animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult }
                        }
                    }
                    isNewLine = !1
                }
            }
            if (animatorJustifyOffset) { animatorJustifyOffset += animatorFirstCharOffset }
            while (lastIndex < i) {
                letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
                lastIndex += 1
            }
        }
        for (i = 0; i < len; i += 1) {
            matrixHelper.reset();
            elemOpacity = 1;
            if (letters[i].n) {
                xPos = 0;
                yPos += documentData.yOffset;
                yPos += firstLine ? 1 : 0;
                currentLength = initPathPos;
                firstLine = !1;
                lineLength = 0;
                if (this._hasMaskedPath) {
                    segmentInd = initSegmentInd;
                    pointInd = initPointInd;
                    points = segments[segmentInd].points;
                    prevPoint = points[pointInd - 1];
                    currentPoint = points[pointInd];
                    partialLength = currentPoint.partialLength;
                    segmentLength = 0
                }
                letterO = letterSw = letterFc = letterM = '';
                letterP = this.defaultPropsArray
            } else {
                if (this._hasMaskedPath) {
                    if (currentLine !== letters[i].line) {
                        switch (documentData.j) {
                            case 1:
                                currentLength += totalLength - documentData.lineWidths[letters[i].line];
                                break;
                            case 2:
                                currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
                                break
                        }
                        currentLine = letters[i].line
                    }
                    if (ind !== letters[i].ind) {
                        if (letters[ind]) { currentLength += letters[ind].extra }
                        currentLength += letters[i].an / 2;
                        ind = letters[i].ind
                    }
                    currentLength += alignment[0] * letters[i].an / 200;
                    var animatorOffset = 0;
                    for (j = 0; j < jLen; j += 1) {
                        animatorProps = animators[j].a;
                        if (animatorProps.p.propType) {
                            animatorSelector = animators[j].s;
                            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                            if (mult.length) { animatorOffset += animatorProps.p.v[0] * mult[0] } else { animatorOffset += animatorProps.p.v[0] * mult }
                        }
                        if (animatorProps.a.propType) {
                            animatorSelector = animators[j].s;
                            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                            if (mult.length) { animatorOffset += animatorProps.a.v[0] * mult[0] } else { animatorOffset += animatorProps.a.v[0] * mult }
                        }
                    }
                    flag = !0;
                    while (flag) {
                        if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                            perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                            xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                            yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                            matrixHelper.translate(-alignment[0] * letters[i].an / 200, -(alignment[1] * yOff / 100));
                            flag = !1
                        } else if (points) {
                            segmentLength += currentPoint.partialLength;
                            pointInd += 1;
                            if (pointInd >= points.length) {
                                pointInd = 0;
                                segmentInd += 1;
                                if (!segments[segmentInd]) {
                                    if (mask.v.c) {
                                        pointInd = 0;
                                        segmentInd = 0;
                                        points = segments[segmentInd].points
                                    } else {
                                        segmentLength -= currentPoint.partialLength;
                                        points = null
                                    }
                                } else { points = segments[segmentInd].points }
                            }
                            if (points) {
                                prevPoint = currentPoint;
                                currentPoint = points[pointInd];
                                partialLength = currentPoint.partialLength
                            }
                        }
                    }
                    offf = letters[i].an / 2 - letters[i].add;
                    matrixHelper.translate(-offf, 0, 0)
                } else {
                    offf = letters[i].an / 2 - letters[i].add;
                    matrixHelper.translate(-offf, 0, 0);
                    matrixHelper.translate(-alignment[0] * letters[i].an / 200, -alignment[1] * yOff / 100, 0)
                }
                lineLength += letters[i].l / 2;
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.t.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                        if (xPos !== 0 || documentData.j !== 0) { if (this._hasMaskedPath) { if (mult.length) { currentLength += animatorProps.t.v * mult[0] } else { currentLength += animatorProps.t.v * mult } } else { if (mult.length) { xPos += animatorProps.t.v * mult[0] } else { xPos += animatorProps.t.v * mult } } }
                    }
                }
                lineLength += letters[i].l / 2;
                if (documentData.strokeWidthAnim) { sw = documentData.sw || 0 }
                if (documentData.strokeColorAnim) { if (documentData.sc) { sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]] } else { sc = [0, 0, 0] } }
                if (documentData.fillColorAnim && documentData.fc) { fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]] }
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.a.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                        if (mult.length) { matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]) } else { matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult) }
                    }
                }
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.s.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                        if (mult.length) { matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult[0]), 1 + ((animatorProps.s.v[1] - 1) * mult[1]), 1) } else { matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult), 1 + ((animatorProps.s.v[1] - 1) * mult), 1) }
                    }
                }
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                    if (animatorProps.sk.propType) { if (mult.length) { matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]) } else { matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult) } }
                    if (animatorProps.r.propType) { if (mult.length) { matrixHelper.rotateZ(-animatorProps.r.v * mult[2]) } else { matrixHelper.rotateZ(-animatorProps.r.v * mult) } }
                    if (animatorProps.ry.propType) { if (mult.length) { matrixHelper.rotateY(animatorProps.ry.v * mult[1]) } else { matrixHelper.rotateY(animatorProps.ry.v * mult) } }
                    if (animatorProps.rx.propType) { if (mult.length) { matrixHelper.rotateX(animatorProps.rx.v * mult[0]) } else { matrixHelper.rotateX(animatorProps.rx.v * mult) } }
                    if (animatorProps.o.propType) { if (mult.length) { elemOpacity += ((animatorProps.o.v) * mult[0] - elemOpacity) * mult[0] } else { elemOpacity += ((animatorProps.o.v) * mult - elemOpacity) * mult } }
                    if (documentData.strokeWidthAnim && animatorProps.sw.propType) { if (mult.length) { sw += animatorProps.sw.v * mult[0] } else { sw += animatorProps.sw.v * mult } }
                    if (documentData.strokeColorAnim && animatorProps.sc.propType) { for (k = 0; k < 3; k += 1) { if (mult.length) { sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k]) * mult[0] } else { sc[k] = sc[k] + (animatorProps.sc.v[k] - sc[k]) * mult } } }
                    if (documentData.fillColorAnim && documentData.fc) {
                        if (animatorProps.fc.propType) { for (k = 0; k < 3; k += 1) { if (mult.length) { fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k]) * mult[0] } else { fc[k] = fc[k] + (animatorProps.fc.v[k] - fc[k]) * mult } } }
                        if (animatorProps.fh.propType) { if (mult.length) { fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]) } else { fc = addHueToRGB(fc, animatorProps.fh.v * mult) } }
                        if (animatorProps.fs.propType) { if (mult.length) { fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]) } else { fc = addSaturationToRGB(fc, animatorProps.fs.v * mult) } }
                        if (animatorProps.fb.propType) { if (mult.length) { fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]) } else { fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult) } }
                    }
                }
                for (j = 0; j < jLen; j += 1) {
                    animatorProps = animators[j].a;
                    if (animatorProps.p.propType) {
                        animatorSelector = animators[j].s;
                        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                        if (this._hasMaskedPath) { if (mult.length) { matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]) } else { matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult) } } else { if (mult.length) { matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]) } else { matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult) } }
                    }
                }
                if (documentData.strokeWidthAnim) { letterSw = sw < 0 ? 0 : sw }
                if (documentData.strokeColorAnim) { letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')' }
                if (documentData.fillColorAnim && documentData.fc) { letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')' }
                if (this._hasMaskedPath) {
                    matrixHelper.translate(0, -documentData.ls);
                    matrixHelper.translate(0, alignment[1] * yOff / 100 + yPos, 0);
                    if (textData.p.p) {
                        tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                        var rot = Math.atan(tanAngle) * 180 / Math.PI;
                        if (currentPoint.point[0] < prevPoint.point[0]) { rot += 180 }
                        matrixHelper.rotate(-rot * Math.PI / 180)
                    }
                    matrixHelper.translate(xPathPos, yPathPos, 0);
                    currentLength -= alignment[0] * letters[i].an / 200;
                    if (letters[i + 1] && ind !== letters[i + 1].ind) {
                        currentLength += letters[i].an / 2;
                        currentLength += documentData.tr / 1000 * documentData.finalSize
                    }
                } else {
                    matrixHelper.translate(xPos, yPos, 0);
                    if (documentData.ps) { matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0) }
                    switch (documentData.j) {
                        case 1:
                            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
                            break;
                        case 2:
                            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
                            break
                    }
                    matrixHelper.translate(0, -documentData.ls);
                    matrixHelper.translate(offf, 0, 0);
                    matrixHelper.translate(alignment[0] * letters[i].an / 200, alignment[1] * yOff / 100, 0);
                    xPos += letters[i].l + documentData.tr / 1000 * documentData.finalSize
                }
                if (renderType === 'html') { letterM = matrixHelper.toCSS() } else if (renderType === 'svg') { letterM = matrixHelper.to2dCSS() } else { letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]] }
                letterO = elemOpacity
            }
            if (renderedLettersCount <= i) {
                letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
                this.renderedLetters.push(letterValue);
                renderedLettersCount += 1;
                this.lettersChangedFlag = !0
            } else {
                letterValue = this.renderedLetters[i];
                this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag
            }
        }
    };
    TextAnimatorProperty.prototype.getValue = function() {
        if (this._elem.globalData.frameId === this._frameId) { return }
        this._frameId = this._elem.globalData.frameId;
        this.iterateDynamicProperties()
    };
    TextAnimatorProperty.prototype.mHelper = new Matrix();
    TextAnimatorProperty.prototype.defaultPropsArray = [];
    extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

    function TextAnimatorDataProperty(elem, animatorProps, container) {
        var defaultData = { propType: !1 };
        var getProp = PropertyFactory.getProp;
        var textAnimator_animatables = animatorProps.a;
        this.a = { r: textAnimator_animatables.r ? getProp(elem, textAnimator_animatables.r, 0, degToRads, container) : defaultData, rx: textAnimator_animatables.rx ? getProp(elem, textAnimator_animatables.rx, 0, degToRads, container) : defaultData, ry: textAnimator_animatables.ry ? getProp(elem, textAnimator_animatables.ry, 0, degToRads, container) : defaultData, sk: textAnimator_animatables.sk ? getProp(elem, textAnimator_animatables.sk, 0, degToRads, container) : defaultData, sa: textAnimator_animatables.sa ? getProp(elem, textAnimator_animatables.sa, 0, degToRads, container) : defaultData, s: textAnimator_animatables.s ? getProp(elem, textAnimator_animatables.s, 1, 0.01, container) : defaultData, a: textAnimator_animatables.a ? getProp(elem, textAnimator_animatables.a, 1, 0, container) : defaultData, o: textAnimator_animatables.o ? getProp(elem, textAnimator_animatables.o, 0, 0.01, container) : defaultData, p: textAnimator_animatables.p ? getProp(elem, textAnimator_animatables.p, 1, 0, container) : defaultData, sw: textAnimator_animatables.sw ? getProp(elem, textAnimator_animatables.sw, 0, 0, container) : defaultData, sc: textAnimator_animatables.sc ? getProp(elem, textAnimator_animatables.sc, 1, 0, container) : defaultData, fc: textAnimator_animatables.fc ? getProp(elem, textAnimator_animatables.fc, 1, 0, container) : defaultData, fh: textAnimator_animatables.fh ? getProp(elem, textAnimator_animatables.fh, 0, 0, container) : defaultData, fs: textAnimator_animatables.fs ? getProp(elem, textAnimator_animatables.fs, 0, 0.01, container) : defaultData, fb: textAnimator_animatables.fb ? getProp(elem, textAnimator_animatables.fb, 0, 0.01, container) : defaultData, t: textAnimator_animatables.t ? getProp(elem, textAnimator_animatables.t, 0, 0, container) : defaultData };
        this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
        this.s.t = animatorProps.s.t
    }

    function LetterProps(o, sw, sc, fc, m, p) {
        this.o = o;
        this.sw = sw;
        this.sc = sc;
        this.fc = fc;
        this.m = m;
        this.p = p;
        this._mdf = { o: !0, sw: !!sw, sc: !!sc, fc: !!fc, m: !0, p: !0 }
    }
    LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
        this._mdf.o = !1;
        this._mdf.sw = !1;
        this._mdf.sc = !1;
        this._mdf.fc = !1;
        this._mdf.m = !1;
        this._mdf.p = !1;
        var updated = !1;
        if (this.o !== o) {
            this.o = o;
            this._mdf.o = !0;
            updated = !0
        }
        if (this.sw !== sw) {
            this.sw = sw;
            this._mdf.sw = !0;
            updated = !0
        }
        if (this.sc !== sc) {
            this.sc = sc;
            this._mdf.sc = !0;
            updated = !0
        }
        if (this.fc !== fc) {
            this.fc = fc;
            this._mdf.fc = !0;
            updated = !0
        }
        if (this.m !== m) {
            this.m = m;
            this._mdf.m = !0;
            updated = !0
        }
        if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
            this.p = p;
            this._mdf.p = !0;
            updated = !0
        }
        return updated
    };

    function TextProperty(elem, data) {
        this._frameId = initialDefaultFrame;
        this.pv = '';
        this.v = '';
        this.kf = !1;
        this._isFirstFrame = !0;
        this._mdf = !1;
        this.data = data;
        this.elem = elem;
        this.comp = this.elem.comp;
        this.keysIndex = 0;
        this.canResize = !1;
        this.minimumFontSize = 1;
        this.effectsSequence = [];
        this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: '', fStyle: '', fWeight: '', fc: '', j: '', justifyOffset: '', l: [], lh: 0, lineWidths: [], ls: '', of: '', s: '', sc: '', sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 };
        this.copyData(this.currentData, this.data.d.k[0].s);
        if (!this.searchProperty()) { this.completeTextData(this.currentData) }
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0];
    TextProperty.prototype.copyData = function(obj, data) {
        for (var s in data) { if (data.hasOwnProperty(s)) { obj[s] = data[s] } }
        return obj
    }
    TextProperty.prototype.setCurrentData = function(data) {
        if (!data.__complete) { this.completeTextData(data) }
        this.currentData = data;
        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
        this._mdf = !0
    };
    TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() };
    TextProperty.prototype.searchKeyframes = function() {
        this.kf = this.data.d.k.length > 1;
        if (this.kf) { this.addEffect(this.getKeyframeValue.bind(this)) }
        return this.kf
    }
    TextProperty.prototype.addEffect = function(effectFunction) {
        this.effectsSequence.push(effectFunction);
        this.elem.addDynamicProperty(this)
    };
    TextProperty.prototype.getValue = function(_finalValue) {
        if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) { return }
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var currentValue = this.currentData;
        var currentIndex = this.keysIndex;
        if (this.lock) { this.setCurrentData(this.currentData); return }
        this.lock = !0;
        this._mdf = !1;
        var multipliedValue;
        var i, len = this.effectsSequence.length;
        var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < len; i += 1) { if (currentIndex !== this.keysIndex) { finalValue = this.effectsSequence[i](finalValue, finalValue.t) } else { finalValue = this.effectsSequence[i](this.currentData, finalValue.t) } }
        if (currentValue !== finalValue) { this.setCurrentData(finalValue) }
        this.pv = this.v = this.currentData;
        this.lock = !1;
        this.frameId = this.elem.globalData.frameId
    }
    TextProperty.prototype.getKeyframeValue = function() {
        var textKeys = this.data.d.k,
            textDocumentData;
        var frameNum = this.elem.comp.renderedFrame;
        var i = 0,
            len = textKeys.length;
        while (i <= len - 1) {
            textDocumentData = textKeys[i].s;
            if (i === len - 1 || textKeys[i + 1].t > frameNum) { break }
            i += 1
        }
        if (this.keysIndex !== i) { this.keysIndex = i }
        return this.data.d.k[this.keysIndex].s
    };
    TextProperty.prototype.buildFinalText = function(text) {
        var combinedCharacters = FontManager.getCombinedCharacterCodes();
        var charactersArray = [];
        var i = 0,
            len = text.length;
        var charCode;
        while (i < len) {
            charCode = text.charCodeAt(i);
            if (combinedCharacters.indexOf(charCode) !== -1) { charactersArray[charactersArray.length - 1] += text.charAt(i) } else { if (charCode >= 0xD800 && charCode <= 0xDBFF) { charCode = text.charCodeAt(i + 1); if (charCode >= 0xDC00 && charCode <= 0xDFFF) { charactersArray.push(text.substr(i, 2));++i } else { charactersArray.push(text.charAt(i)) } } else { charactersArray.push(text.charAt(i)) } }
            i += 1
        }
        return charactersArray
    }
    TextProperty.prototype.completeTextData = function(documentData) {
        documentData.__complete = !0;
        var fontManager = this.elem.globalData.fontManager;
        var data = this.data;
        var letters = [];
        var i, len;
        var newLineFlag, index = 0,
            val;
        var anchorGrouping = data.m.g;
        var currentSize = 0,
            currentPos = 0,
            currentLine = 0,
            lineWidths = [];
        var lineWidth = 0;
        var maxLineWidth = 0;
        var j, jLen;
        var fontData = fontManager.getFontByName(documentData.f);
        var charData, cLength = 0;
        var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];
        var fWeight = 'normal',
            fStyle = 'normal';
        len = styles.length;
        var styleName;
        for (i = 0; i < len; i += 1) {
            styleName = styles[i].toLowerCase();
            switch (styleName) {
                case 'italic':
                    fStyle = 'italic';
                    break;
                case 'bold':
                    fWeight = '700';
                    break;
                case 'black':
                    fWeight = '900';
                    break;
                case 'medium':
                    fWeight = '500';
                    break;
                case 'regular':
                case 'normal':
                    fWeight = '400';
                    break;
                case 'light':
                case 'thin':
                    fWeight = '200';
                    break
            }
        }
        documentData.fWeight = fontData.fWeight || fWeight;
        documentData.fStyle = fStyle;
        documentData.finalSize = documentData.s;
        documentData.finalText = this.buildFinalText(documentData.t);
        len = documentData.finalText.length;
        documentData.finalLineHeight = documentData.lh;
        var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
        var charCode;
        if (documentData.sz) {
            var flag = !0;
            var boxWidth = documentData.sz[0];
            var boxHeight = documentData.sz[1];
            var currentHeight, finalText;
            while (flag) {
                finalText = this.buildFinalText(documentData.t);
                currentHeight = 0;
                lineWidth = 0;
                len = finalText.length;
                trackingOffset = documentData.tr / 1000 * documentData.finalSize;
                var lastSpaceIndex = -1;
                for (i = 0; i < len; i += 1) {
                    charCode = finalText[i].charCodeAt(0);
                    newLineFlag = !1;
                    if (finalText[i] === ' ') { lastSpaceIndex = i } else if (charCode === 13 || charCode === 3) {
                        lineWidth = 0;
                        newLineFlag = !0;
                        currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2
                    }
                    if (fontManager.chars) {
                        charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
                        cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100
                    } else { cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize) }
                    if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
                        if (lastSpaceIndex === -1) { len += 1 } else { i = lastSpaceIndex }
                        currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
                        finalText.splice(i, lastSpaceIndex === i ? 1 : 0, "\r");
                        lastSpaceIndex = -1;
                        lineWidth = 0
                    } else {
                        lineWidth += cLength;
                        lineWidth += trackingOffset
                    }
                }
                currentHeight += fontData.ascent * documentData.finalSize / 100;
                if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
                    documentData.finalSize -= 1;
                    documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s
                } else {
                    documentData.finalText = finalText;
                    len = documentData.finalText.length;
                    flag = !1
                }
            }
        }
        lineWidth = -trackingOffset;
        cLength = 0;
        var uncollapsedSpaces = 0;
        var currentChar;
        for (i = 0; i < len; i += 1) {
            newLineFlag = !1;
            currentChar = documentData.finalText[i];
            charCode = currentChar.charCodeAt(0);
            if (currentChar === ' ') { val = '\u00A0' } else if (charCode === 13 || charCode === 3) {
                uncollapsedSpaces = 0;
                lineWidths.push(lineWidth);
                maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
                lineWidth = -2 * trackingOffset;
                val = '';
                newLineFlag = !0;
                currentLine += 1
            } else { val = documentData.finalText[i] }
            if (fontManager.chars) {
                charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
                cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100
            } else { cLength = fontManager.measureText(val, documentData.f, documentData.finalSize) }
            if (currentChar === ' ') { uncollapsedSpaces += cLength + trackingOffset } else {
                lineWidth += cLength + trackingOffset + uncollapsedSpaces;
                uncollapsedSpaces = 0
            }
            letters.push({ l: cLength, an: cLength, add: currentSize, n: newLineFlag, anIndexes: [], val: val, line: currentLine, animatorJustifyOffset: 0 });
            if (anchorGrouping == 2) {
                currentSize += cLength;
                if (val === '' || val === '\u00A0' || i === len - 1) {
                    if (val === '' || val === '\u00A0') { currentSize -= cLength }
                    while (currentPos <= i) {
                        letters[currentPos].an = currentSize;
                        letters[currentPos].ind = index;
                        letters[currentPos].extra = cLength;
                        currentPos += 1
                    }
                    index += 1;
                    currentSize = 0
                }
            } else if (anchorGrouping == 3) {
                currentSize += cLength;
                if (val === '' || i === len - 1) {
                    if (val === '') { currentSize -= cLength }
                    while (currentPos <= i) {
                        letters[currentPos].an = currentSize;
                        letters[currentPos].ind = index;
                        letters[currentPos].extra = cLength;
                        currentPos += 1
                    }
                    currentSize = 0;
                    index += 1
                }
            } else {
                letters[index].ind = index;
                letters[index].extra = 0;
                index += 1
            }
        }
        documentData.l = letters;
        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
        lineWidths.push(lineWidth);
        if (documentData.sz) {
            documentData.boxWidth = documentData.sz[0];
            documentData.justifyOffset = 0
        } else {
            documentData.boxWidth = maxLineWidth;
            switch (documentData.j) {
                case 1:
                    documentData.justifyOffset = -documentData.boxWidth;
                    break;
                case 2:
                    documentData.justifyOffset = -documentData.boxWidth / 2;
                    break;
                default:
                    documentData.justifyOffset = 0
            }
        }
        documentData.lineWidths = lineWidths;
        var animators = data.a,
            animatorData, letterData;
        jLen = animators.length;
        var based, ind, indexes = [];
        for (j = 0; j < jLen; j += 1) {
            animatorData = animators[j];
            if (animatorData.a.sc) { documentData.strokeColorAnim = !0 }
            if (animatorData.a.sw) { documentData.strokeWidthAnim = !0 }
            if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) { documentData.fillColorAnim = !0 }
            ind = 0;
            based = animatorData.s.b;
            for (i = 0; i < len; i += 1) {
                letterData = letters[i];
                letterData.anIndexes[j] = ind;
                if ((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== '\u00A0') || (based == 3 && (letterData.n || letterData.val == '\u00A0' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))) {
                    if (animatorData.s.rn === 1) { indexes.push(ind) }
                    ind += 1
                }
            }
            data.a[j].s.totalChars = ind;
            var currentInd = -1,
                newInd;
            if (animatorData.s.rn === 1) {
                for (i = 0; i < len; i += 1) {
                    letterData = letters[i];
                    if (currentInd != letterData.anIndexes[j]) {
                        currentInd = letterData.anIndexes[j];
                        newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0]
                    }
                    letterData.anIndexes[j] = newInd
                }
            }
        }
        documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
        documentData.ls = documentData.ls || 0;
        documentData.ascent = fontData.ascent * documentData.finalSize / 100
    };
    TextProperty.prototype.updateDocumentData = function(newData, index) {
        index = index === undefined ? this.keysIndex : index;
        var dData = this.copyData({}, this.data.d.k[index].s);
        dData = this.copyData(dData, newData);
        this.data.d.k[index].s = dData;
        this.recalculate(index);
        this.elem.addDynamicProperty(this)
    };
    TextProperty.prototype.recalculate = function(index) {
        var dData = this.data.d.k[index].s;
        dData.__complete = !1;
        this.keysIndex = 0;
        this._isFirstFrame = !0;
        this.getValue(dData)
    }
    TextProperty.prototype.canResizeFont = function(_canResize) {
        this.canResize = _canResize;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this)
    };
    TextProperty.prototype.setMinimumFontSize = function(_fontValue) {
        this.minimumFontSize = Math.floor(_fontValue) || 1;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this)
    };
    var TextSelectorProp = (function() {
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;

        function TextSelectorProp(elem, data) {
            this._currentTextLength = -1;
            this.k = !1;
            this.data = data;
            this.elem = elem;
            this.comp = elem.comp;
            this.finalS = 0;
            this.finalE = 0;
            this.initDynamicPropertyContainer(elem);
            this.s = PropertyFactory.getProp(elem, data.s || { k: 0 }, 0, 0, this);
            if ('e' in data) { this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this) } else { this.e = { v: 100 } }
            this.o = PropertyFactory.getProp(elem, data.o || { k: 0 }, 0, 0, this);
            this.xe = PropertyFactory.getProp(elem, data.xe || { k: 0 }, 0, 0, this);
            this.ne = PropertyFactory.getProp(elem, data.ne || { k: 0 }, 0, 0, this);
            this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);
            if (!this.dynamicProperties.length) { this.getValue() }
        }
        TextSelectorProp.prototype = {
            getMult: function(ind) {
                if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) { this.getValue() }
                var x1 = 0;
                var y1 = 0;
                var x2 = 1;
                var y2 = 1;
                if (this.ne.v > 0) { x1 = this.ne.v / 100.0 } else { y1 = -this.ne.v / 100.0 }
                if (this.xe.v > 0) { x2 = 1.0 - this.xe.v / 100.0 } else { y2 = 1.0 + this.xe.v / 100.0 }
                var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
                var mult = 0;
                var s = this.finalS;
                var e = this.finalE;
                var type = this.data.sh;
                if (type === 2) {
                    if (e === s) { mult = ind >= e ? 1 : 0 } else { mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1)) }
                    mult = easer(mult)
                } else if (type === 3) {
                    if (e === s) { mult = ind >= e ? 0 : 1 } else { mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1)) }
                    mult = easer(mult)
                } else if (type === 4) {
                    if (e === s) { mult = 0 } else { mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1)); if (mult < 0.5) { mult *= 2 } else { mult = 1 - 2 * (mult - 0.5) } }
                    mult = easer(mult)
                } else if (type === 5) {
                    if (e === s) { mult = 0 } else {
                        var tot = e - s;
                        ind = min(max(0, ind + 0.5 - s), e - s);
                        var x = -tot / 2 + ind;
                        var a = tot / 2;
                        mult = Math.sqrt(1 - (x * x) / (a * a))
                    }
                    mult = easer(mult)
                } else if (type === 6) {
                    if (e === s) { mult = 0 } else {
                        ind = min(max(0, ind + 0.5 - s), e - s);
                        mult = (1 + (Math.cos((Math.PI + Math.PI * 2 * (ind) / (e - s))))) / 2
                    }
                    mult = easer(mult)
                } else {
                    if (ind >= floor(s)) { if (ind - s < 0) { mult = max(0, min(min(e, 1) - (s - ind), 1)) } else { mult = max(0, min(e - ind, 1)) } }
                    mult = easer(mult)
                }
                return mult * this.a.v
            },
            getValue: function(newCharsFlag) {
                this.iterateDynamicProperties();
                this._mdf = newCharsFlag || this._mdf;
                this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
                if (newCharsFlag && this.data.r === 2) { this.e.v = this._currentTextLength }
                var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
                var o = this.o.v / divisor;
                var s = this.s.v / divisor + o;
                var e = (this.e.v / divisor) + o;
                if (s > e) {
                    var _s = s;
                    s = e;
                    e = _s
                }
                this.finalS = s;
                this.finalE = e
            }
        }
        extendPrototype([DynamicPropertyContainer], TextSelectorProp);

        function getTextSelectorProp(elem, data, arr) { return new TextSelectorProp(elem, data, arr) }
        return { getTextSelectorProp: getTextSelectorProp }
    }());
    var pool_factory = (function() {
        return function(initialLength, _create, _release, _clone) {
            var _length = 0;
            var _maxLength = initialLength;
            var pool = createSizedArray(_maxLength);
            var ob = { newElement: newElement, release: release };

            function newElement() {
                var element;
                if (_length) {
                    _length -= 1;
                    element = pool[_length]
                } else { element = _create() }
                return element
            }

            function release(element) {
                if (_length === _maxLength) {
                    pool = pooling.double(pool);
                    _maxLength = _maxLength * 2
                }
                if (_release) { _release(element) }
                pool[_length] = element;
                _length += 1
            }

            function clone() { var clonedElement = newElement(); return _clone(clonedElement) }
            return ob
        }
    }());
    var pooling = (function() {
        function double(arr) { return arr.concat(createSizedArray(arr.length)) }
        return { double: double }
    }());
    var point_pool = (function() {
        function create() { return createTypedArray('float32', 2) }
        return pool_factory(8, create)
    }());
    var shape_pool = (function() {
        function create() { return new ShapePath() }

        function release(shapePath) {
            var len = shapePath._length,
                i;
            for (i = 0; i < len; i += 1) {
                point_pool.release(shapePath.v[i]);
                point_pool.release(shapePath.i[i]);
                point_pool.release(shapePath.o[i]);
                shapePath.v[i] = null;
                shapePath.i[i] = null;
                shapePath.o[i] = null
            }
            shapePath._length = 0;
            shapePath.c = !1
        }

        function clone(shape) {
            var cloned = factory.newElement();
            var i, len = shape._length === undefined ? shape.v.length : shape._length;
            cloned.setLength(len);
            cloned.c = shape.c;
            var pt;
            for (i = 0; i < len; i += 1) { cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i) }
            return cloned
        }
        var factory = pool_factory(4, create, release);
        factory.clone = clone;
        return factory
    }());
    var shapeCollection_pool = (function() {
        var ob = { newShapeCollection: newShapeCollection, release: release };
        var _length = 0;
        var _maxLength = 4;
        var pool = createSizedArray(_maxLength);

        function newShapeCollection() {
            var shapeCollection;
            if (_length) {
                _length -= 1;
                shapeCollection = pool[_length]
            } else { shapeCollection = new ShapeCollection() }
            return shapeCollection
        }

        function release(shapeCollection) {
            var i, len = shapeCollection._length;
            for (i = 0; i < len; i += 1) { shape_pool.release(shapeCollection.shapes[i]) }
            shapeCollection._length = 0;
            if (_length === _maxLength) {
                pool = pooling.double(pool);
                _maxLength = _maxLength * 2
            }
            pool[_length] = shapeCollection;
            _length += 1
        }
        return ob
    }());
    var segments_length_pool = (function() {
        function create() { return { lengths: [], totalLength: 0 } }

        function release(element) {
            var i, len = element.lengths.length;
            for (i = 0; i < len; i += 1) { bezier_length_pool.release(element.lengths[i]) }
            element.lengths.length = 0
        }
        return pool_factory(8, create, release)
    }());
    var bezier_length_pool = (function() {
        function create() { return { addedLength: 0, percents: createTypedArray('float32', defaultCurveSegments), lengths: createTypedArray('float32', defaultCurveSegments), } }
        return pool_factory(8, create)
    }());

    function BaseRenderer() {}
    BaseRenderer.prototype.checkLayers = function(num) {
        var i, len = this.layers.length,
            data;
        this.completeLayers = !0;
        for (i = len - 1; i >= 0; i--) {
            if (!this.elements[i]) { data = this.layers[i]; if (data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st)) { this.buildItem(i) } }
            this.completeLayers = this.elements[i] ? this.completeLayers : !1
        }
        this.checkPendingElements()
    };
    BaseRenderer.prototype.createItem = function(layer) {
        switch (layer.ty) {
            case 2:
                return this.createImage(layer);
            case 0:
                return this.createComp(layer);
            case 1:
                return this.createSolid(layer);
            case 3:
                return this.createNull(layer);
            case 4:
                return this.createShape(layer);
            case 5:
                return this.createText(layer);
            case 13:
                return this.createCamera(layer)
        }
        return this.createNull(layer)
    };
    BaseRenderer.prototype.createCamera = function() { throw new Error('You\'re using a 3d camera. Try the html renderer.') };
    BaseRenderer.prototype.buildAllItems = function() {
        var i, len = this.layers.length;
        for (i = 0; i < len; i += 1) { this.buildItem(i) }
        this.checkPendingElements()
    };
    BaseRenderer.prototype.includeLayers = function(newLayers) {
        this.completeLayers = !1;
        var i, len = newLayers.length;
        var j, jLen = this.layers.length;
        for (i = 0; i < len; i += 1) {
            j = 0;
            while (j < jLen) {
                if (this.layers[j].id == newLayers[i].id) { this.layers[j] = newLayers[i]; break }
                j += 1
            }
        }
    };
    BaseRenderer.prototype.setProjectInterface = function(pInterface) { this.globalData.projectInterface = pInterface };
    BaseRenderer.prototype.initItems = function() { if (!this.globalData.progressiveLoad) { this.buildAllItems() } };
    BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy) {
        var elements = this.elements;
        var layers = this.layers;
        var i = 0,
            len = layers.length;
        while (i < len) {
            if (layers[i].ind == parentName) {
                if (!elements[i] || elements[i] === !0) {
                    this.buildItem(i);
                    this.addPendingElement(element)
                } else {
                    hierarchy.push(elements[i]);
                    elements[i].setAsParent();
                    if (layers[i].parent !== undefined) { this.buildElementParenting(element, layers[i].parent, hierarchy) } else { element.setHierarchy(hierarchy) }
                }
            }
            i += 1
        }
    };
    BaseRenderer.prototype.addPendingElement = function(element) { this.pendingElements.push(element) };
    BaseRenderer.prototype.searchExtraCompositions = function(assets) {
        var i, len = assets.length;
        for (i = 0; i < len; i += 1) {
            if (assets[i].xt) {
                var comp = this.createComp(assets[i]);
                comp.initExpressions();
                this.globalData.projectInterface.registerComposition(comp)
            }
        }
    };
    BaseRenderer.prototype.setupGlobalData = function(animData, fontsContainer) {
        this.globalData.fontManager = new FontManager();
        this.globalData.fontManager.addChars(animData.chars);
        this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
        this.globalData.imageLoader = this.animationItem.imagePreloader;
        this.globalData.frameId = 0;
        this.globalData.frameRate = animData.fr;
        this.globalData.nm = animData.nm;
        this.globalData.compSize = { w: animData.w, h: animData.h }
    }

    function SVGRenderer(animationItem, config) {
        this.animationItem = animationItem;
        this.layers = null;
        this.renderedFrame = -1;
        this.svgElement = createNS('svg');
        var ariaLabel = '';
        if (config && config.title) {
            var titleElement = createNS('title');
            var titleId = createElementID();
            titleElement.setAttribute('id', titleId);
            titleElement.textContent = config.title;
            this.svgElement.appendChild(titleElement);
            ariaLabel += titleId
        }
        if (config && config.description) {
            var descElement = createNS('desc');
            var descId = createElementID();
            descElement.setAttribute('id', descId);
            descElement.textContent = config.description;
            this.svgElement.appendChild(descElement);
            ariaLabel += ' ' + descId
        }
        if (ariaLabel) { this.svgElement.setAttribute('aria-labelledby', ariaLabel) }
        var defs = createNS('defs');
        this.svgElement.appendChild(defs);
        var maskElement = createNS('g');
        this.svgElement.appendChild(maskElement);
        this.layerElement = maskElement;
        this.renderConfig = { preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet', imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice', progressiveLoad: (config && config.progressiveLoad) || !1, hideOnTransparent: (config && config.hideOnTransparent === !1) ? !1 : !0, viewBoxOnly: (config && config.viewBoxOnly) || !1, viewBoxSize: (config && config.viewBoxSize) || !1, className: (config && config.className) || '', id: (config && config.id) || '', focusable: config && config.focusable, filterSize: { width: config && config.filterSize && config.filterSize.width || '100%', height: config && config.filterSize && config.filterSize.height || '100%', x: config && config.filterSize && config.filterSize.x || '0%', y: config && config.filterSize && config.filterSize.y || '0%', } };
        this.globalData = { _mdf: !1, frameNum: -1, defs: defs, renderConfig: this.renderConfig };
        this.elements = [];
        this.pendingElements = [];
        this.destroyed = !1;
        this.rendererType = 'svg'
    }
    extendPrototype([BaseRenderer], SVGRenderer);
    SVGRenderer.prototype.createNull = function(data) { return new NullElement(data, this.globalData, this) };
    SVGRenderer.prototype.createShape = function(data) { return new SVGShapeElement(data, this.globalData, this) };
    SVGRenderer.prototype.createText = function(data) { return new SVGTextElement(data, this.globalData, this) };
    SVGRenderer.prototype.createImage = function(data) { return new IImageElement(data, this.globalData, this) };
    SVGRenderer.prototype.createComp = function(data) { return new SVGCompElement(data, this.globalData, this) };
    SVGRenderer.prototype.createSolid = function(data) { return new ISolidElement(data, this.globalData, this) };
    SVGRenderer.prototype.configAnimation = function(animData) {
        this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        if (this.renderConfig.viewBoxSize) { this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize) } else { this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h) }
        if (!this.renderConfig.viewBoxOnly) {
            this.svgElement.setAttribute('width', animData.w);
            this.svgElement.setAttribute('height', animData.h);
            this.svgElement.style.width = '100%';
            this.svgElement.style.height = '100%';
            this.svgElement.style.transform = 'translate3d(0,0,0)'
        }
        if (this.renderConfig.className) { this.svgElement.setAttribute('class', this.renderConfig.className) }
        if (this.renderConfig.id) { this.svgElement.setAttribute('id', this.renderConfig.id) }
        if (this.renderConfig.focusable !== undefined) { this.svgElement.setAttribute('focusable', this.renderConfig.focusable) }
        this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio);
        this.animationItem.wrapper.appendChild(this.svgElement);
        var defs = this.globalData.defs;
        this.setupGlobalData(animData, defs);
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.data = animData;
        var maskElement = createNS('clipPath');
        var rect = createNS('rect');
        rect.setAttribute('width', animData.w);
        rect.setAttribute('height', animData.h);
        rect.setAttribute('x', 0);
        rect.setAttribute('y', 0);
        var maskId = createElementID();
        maskElement.setAttribute('id', maskId);
        maskElement.appendChild(rect);
        this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + maskId + ")");
        defs.appendChild(maskElement);
        this.layers = animData.layers;
        this.elements = createSizedArray(animData.layers.length)
    };
    SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = '';
        this.layerElement = null;
        this.globalData.defs = null;
        var i, len = this.layers ? this.layers.length : 0;
        for (i = 0; i < len; i++) { if (this.elements[i]) { this.elements[i].destroy() } }
        this.elements.length = 0;
        this.destroyed = !0;
        this.animationItem = null
    };
    SVGRenderer.prototype.updateContainerSize = function() {};
    SVGRenderer.prototype.buildItem = function(pos) {
        var elements = this.elements;
        if (elements[pos] || this.layers[pos].ty == 99) { return }
        elements[pos] = !0;
        var element = this.createItem(this.layers[pos]);
        elements[pos] = element;
        if (expressionsPlugin) {
            if (this.layers[pos].ty === 0) { this.globalData.projectInterface.registerComposition(element) }
            element.initExpressions()
        }
        this.appendElementInPos(element, pos);
        if (this.layers[pos].tt) {
            if (!this.elements[pos - 1] || this.elements[pos - 1] === !0) {
                this.buildItem(pos - 1);
                this.addPendingElement(element)
            } else { element.setMatte(elements[pos - 1].layerId) }
        }
    };
    SVGRenderer.prototype.checkPendingElements = function() {
        while (this.pendingElements.length) {
            var element = this.pendingElements.pop();
            element.checkParenting();
            if (element.data.tt) {
                var i = 0,
                    len = this.elements.length;
                while (i < len) {
                    if (this.elements[i] === element) { element.setMatte(this.elements[i - 1].layerId); break }
                    i += 1
                }
            }
        }
    };
    SVGRenderer.prototype.renderFrame = function(num) {
        if (this.renderedFrame === num || this.destroyed) { return }
        if (num === null) { num = this.renderedFrame } else { this.renderedFrame = num }
        this.globalData.frameNum = num;
        this.globalData.frameId += 1;
        this.globalData.projectInterface.currentFrame = num;
        this.globalData._mdf = !1;
        var i, len = this.layers.length;
        if (!this.completeLayers) { this.checkLayers(num) }
        for (i = len - 1; i >= 0; i--) { if (this.completeLayers || this.elements[i]) { this.elements[i].prepareFrame(num - this.layers[i].st) } }
        if (this.globalData._mdf) { for (i = 0; i < len; i += 1) { if (this.completeLayers || this.elements[i]) { this.elements[i].renderFrame() } } }
    };
    SVGRenderer.prototype.appendElementInPos = function(element, pos) {
        var newElement = element.getBaseElement();
        if (!newElement) { return }
        var i = 0;
        var nextElement;
        while (i < pos) {
            if (this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement()) { nextElement = this.elements[i].getBaseElement() }
            i += 1
        }
        if (nextElement) { this.layerElement.insertBefore(newElement, nextElement) } else { this.layerElement.appendChild(newElement) }
    };
    SVGRenderer.prototype.hide = function() { this.layerElement.style.display = 'none' };
    SVGRenderer.prototype.show = function() { this.layerElement.style.display = 'block' };

    function MaskElement(data, element, globalData) {
        this.data = data;
        this.element = element;
        this.globalData = globalData;
        this.storedData = [];
        this.masksProperties = this.data.masksProperties || [];
        this.maskElement = null;
        var defs = this.globalData.defs;
        var i, len = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(len);
        this.solidPath = '';
        var path, properties = this.masksProperties;
        var count = 0;
        var currentMasks = [];
        var j, jLen;
        var layerId = createElementID();
        var rect, expansor, feMorph, x;
        var maskType = 'clipPath',
            maskRef = 'clip-path';
        for (i = 0; i < len; i++) {
            if ((properties[i].mode !== 'a' && properties[i].mode !== 'n') || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
                maskType = 'mask';
                maskRef = 'mask'
            }
            if ((properties[i].mode == 's' || properties[i].mode == 'i') && count === 0) {
                rect = createNS('rect');
                rect.setAttribute('fill', '#ffffff');
                rect.setAttribute('width', this.element.comp.data.w || 0);
                rect.setAttribute('height', this.element.comp.data.h || 0);
                currentMasks.push(rect)
            } else { rect = null }
            path = createNS('path');
            if (properties[i].mode == 'n') {
                this.viewData[i] = { op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3), elem: path, lastPath: '' };
                defs.appendChild(path);
                continue
            }
            count += 1;
            path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
            path.setAttribute('clip-rule', 'nonzero');
            var filterID;
            if (properties[i].x.k !== 0) {
                maskType = 'mask';
                maskRef = 'mask';
                x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
                filterID = createElementID();
                expansor = createNS('filter');
                expansor.setAttribute('id', filterID);
                feMorph = createNS('feMorphology');
                feMorph.setAttribute('operator', 'erode');
                feMorph.setAttribute('in', 'SourceGraphic');
                feMorph.setAttribute('radius', '0');
                expansor.appendChild(feMorph);
                defs.appendChild(expansor);
                path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff')
            } else {
                feMorph = null;
                x = null
            }
            this.storedData[i] = { elem: path, x: x, expan: feMorph, lastPath: '', lastOperator: '', filterId: filterID, lastRadius: 0 };
            if (properties[i].mode == 'i') {
                jLen = currentMasks.length;
                var g = createNS('g');
                for (j = 0; j < jLen; j += 1) { g.appendChild(currentMasks[j]) }
                var mask = createNS('mask');
                mask.setAttribute('mask-type', 'alpha');
                mask.setAttribute('id', layerId + '_' + count);
                mask.appendChild(path);
                defs.appendChild(mask);
                g.setAttribute('mask', 'url(' + locationHref + '#' + layerId + '_' + count + ')');
                currentMasks.length = 0;
                currentMasks.push(g)
            } else { currentMasks.push(path) }
            if (properties[i].inv && !this.solidPath) { this.solidPath = this.createLayerSolidPath() }
            this.viewData[i] = { elem: path, lastPath: '', op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3), invRect: rect };
            if (!this.viewData[i].prop.k) { this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]) }
        }
        this.maskElement = createNS(maskType);
        len = currentMasks.length;
        for (i = 0; i < len; i += 1) { this.maskElement.appendChild(currentMasks[i]) }
        if (count > 0) {
            this.maskElement.setAttribute('id', layerId);
            this.element.maskedElement.setAttribute(maskRef, "url(" + locationHref + "#" + layerId + ")");
            defs.appendChild(this.maskElement)
        }
        if (this.viewData.length) { this.element.addRenderableComponent(this) }
    }
    MaskElement.prototype.getMaskProperty = function(pos) { return this.viewData[pos].prop };
    MaskElement.prototype.renderFrame = function(isFirstFrame) {
        var finalMat = this.element.finalTransform.mat;
        var i, len = this.masksProperties.length;
        for (i = 0; i < len; i++) {
            if (this.viewData[i].prop._mdf || isFirstFrame) { this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]) }
            if (this.viewData[i].op._mdf || isFirstFrame) { this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v) }
            if (this.masksProperties[i].mode !== 'n') {
                if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) { this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS()) }
                if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
                    var feMorph = this.storedData[i].expan;
                    if (this.storedData[i].x.v < 0) {
                        if (this.storedData[i].lastOperator !== 'erode') {
                            this.storedData[i].lastOperator = 'erode';
                            this.storedData[i].elem.setAttribute('filter', 'url(' + locationHref + '#' + this.storedData[i].filterId + ')')
                        }
                        feMorph.setAttribute('radius', -this.storedData[i].x.v)
                    } else {
                        if (this.storedData[i].lastOperator !== 'dilate') {
                            this.storedData[i].lastOperator = 'dilate';
                            this.storedData[i].elem.setAttribute('filter', null)
                        }
                        this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2)
                    }
                }
            }
        }
    };
    MaskElement.prototype.getMaskelement = function() { return this.maskElement };
    MaskElement.prototype.createLayerSolidPath = function() {
        var path = 'M0,0 ';
        path += ' h' + this.globalData.compSize.w;
        path += ' v' + this.globalData.compSize.h;
        path += ' h-' + this.globalData.compSize.w;
        path += ' v-' + this.globalData.compSize.h + ' ';
        return path
    };
    MaskElement.prototype.drawPath = function(pathData, pathNodes, viewData) {
        var pathString = " M" + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
        var i, len;
        len = pathNodes._length;
        for (i = 1; i < len; i += 1) { pathString += " C" + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + " " + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + " " + pathNodes.v[i][0] + ',' + pathNodes.v[i][1] }
        if (pathNodes.c && len > 1) { pathString += " C" + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + " " + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + " " + pathNodes.v[0][0] + ',' + pathNodes.v[0][1] }
        if (viewData.lastPath !== pathString) {
            var pathShapeValue = '';
            if (viewData.elem) {
                if (pathNodes.c) { pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString }
                viewData.elem.setAttribute('d', pathShapeValue)
            }
            viewData.lastPath = pathString
        }
    };
    MaskElement.prototype.destroy = function() {
        this.element = null;
        this.globalData = null;
        this.maskElement = null;
        this.data = null;
        this.masksProperties = null
    };

    function HierarchyElement() {}
    HierarchyElement.prototype = {
        initHierarchy: function() {
            this.hierarchy = [];
            this._isParent = !1;
            this.checkParenting()
        },
        setHierarchy: function(hierarchy) { this.hierarchy = hierarchy },
        setAsParent: function() { this._isParent = !0 },
        checkParenting: function() { if (this.data.parent !== undefined) { this.comp.buildElementParenting(this, this.data.parent, []) } }
    };

    function FrameElement() {}
    FrameElement.prototype = {
        initFrame: function() {
            this._isFirstFrame = !1;
            this.dynamicProperties = [];
            this._mdf = !1
        },
        prepareProperties: function(num, isVisible) {
            var i, len = this.dynamicProperties.length;
            for (i = 0; i < len; i += 1) {
                if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
                    this.dynamicProperties[i].getValue();
                    if (this.dynamicProperties[i]._mdf) {
                        this.globalData._mdf = !0;
                        this._mdf = !0
                    }
                }
            }
        },
        addDynamicProperty: function(prop) { if (this.dynamicProperties.indexOf(prop) === -1) { this.dynamicProperties.push(prop) } }
    };

    function TransformElement() {}
    TransformElement.prototype = {
        initTransform: function() {
            this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix() };
            if (this.data.ao) { this.finalTransform.mProp.autoOriented = !0 }
            if (this.data.ty !== 11) {}
        },
        renderTransform: function() {
            this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
            if (this.hierarchy) {
                var mat;
                var finalMat = this.finalTransform.mat;
                var i = 0,
                    len = this.hierarchy.length;
                if (!this.finalTransform._matMdf) {
                    while (i < len) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break }
                        i += 1
                    }
                }
                if (this.finalTransform._matMdf) {
                    mat = this.finalTransform.mProp.v.props;
                    finalMat.cloneFromProps(mat);
                    for (i = 0; i < len; i += 1) {
                        mat = this.hierarchy[i].finalTransform.mProp.v.props;
                        finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15])
                    }
                }
            }
        },
        globalToLocal: function(pt) {
            var transforms = [];
            transforms.push(this.finalTransform);
            var flag = !0;
            var comp = this.comp;
            while (flag) {
                if (comp.finalTransform) {
                    if (comp.data.hasMask) { transforms.splice(0, 0, comp.finalTransform) }
                    comp = comp.comp
                } else { flag = !1 }
            }
            var i, len = transforms.length,
                ptNew;
            for (i = 0; i < len; i += 1) {
                ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
                pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0]
            }
            return pt
        },
        mHelper: new Matrix()
    };

    function RenderableElement() {}
    RenderableElement.prototype = {
        initRenderable: function() {
            this.isInRange = !1;
            this.hidden = !1;
            this.isTransparent = !1;
            this.renderableComponents = []
        },
        addRenderableComponent: function(component) { if (this.renderableComponents.indexOf(component) === -1) { this.renderableComponents.push(component) } },
        removeRenderableComponent: function(component) { if (this.renderableComponents.indexOf(component) !== -1) { this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1) } },
        prepareRenderableFrame: function(num) { this.checkLayerLimits(num) },
        checkTransparency: function() {
            if (this.finalTransform.mProp.o.v <= 0) {
                if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
                    this.isTransparent = !0;
                    this.hide()
                }
            } else if (this.isTransparent) {
                this.isTransparent = !1;
                this.show()
            }
        },
        checkLayerLimits: function(num) {
            if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
                if (this.isInRange !== !0) {
                    this.globalData._mdf = !0;
                    this._mdf = !0;
                    this.isInRange = !0;
                    this.show()
                }
            } else {
                if (this.isInRange !== !1) {
                    this.globalData._mdf = !0;
                    this.isInRange = !1;
                    this.hide()
                }
            }
        },
        renderRenderable: function() { var i, len = this.renderableComponents.length; for (i = 0; i < len; i += 1) { this.renderableComponents[i].renderFrame(this._isFirstFrame) } },
        sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } },
        getLayerSize: function() { if (this.data.ty === 5) { return { w: this.data.textData.width, h: this.data.textData.height } } else { return { w: this.data.width, h: this.data.height } } }
    };

    function RenderableDOMElement() {}(function() {
        var _prototype = {
            initElement: function(data, globalData, comp) {
                this.initFrame();
                this.initBaseData(data, globalData, comp);
                this.initTransform(data, globalData, comp);
                this.initHierarchy();
                this.initRenderable();
                this.initRendererElement();
                this.createContainerElements();
                this.createRenderableComponents();
                this.createContent();
                this.hide()
            },
            hide: function() {
                if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                    var elem = this.baseElement || this.layerElement;
                    elem.style.display = 'none';
                    this.hidden = !0
                }
            },
            show: function() {
                if (this.isInRange && !this.isTransparent) {
                    if (!this.data.hd) {
                        var elem = this.baseElement || this.layerElement;
                        elem.style.display = 'block'
                    }
                    this.hidden = !1;
                    this._isFirstFrame = !0
                }
            },
            renderFrame: function() {
                if (this.data.hd || this.hidden) { return }
                this.renderTransform();
                this.renderRenderable();
                this.renderElement();
                this.renderInnerContent();
                if (this._isFirstFrame) { this._isFirstFrame = !1 }
            },
            renderInnerContent: function() {},
            prepareFrame: function(num) {
                this._mdf = !1;
                this.prepareRenderableFrame(num);
                this.prepareProperties(num, this.isInRange);
                this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null;
                this.destroyBaseElement()
            }
        };
        extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement)
    }());

    function ProcessedElement(element, position) {
        this.elem = element;
        this.pos = position
    }

    function SVGStyleData(data, level) {
        this.data = data;
        this.type = data.ty;
        this.d = '';
        this.lvl = level;
        this._mdf = !1;
        this.closed = data.hd === !0;
        this.pElem = createNS('path');
        this.msElem = null
    }
    SVGStyleData.prototype.reset = function() {
        this.d = '';
        this._mdf = !1
    };

    function SVGShapeData(transformers, level, shape) {
        this.caches = [];
        this.styles = [];
        this.transformers = transformers;
        this.lStr = '';
        this.sh = shape;
        this.lvl = level;
        this._isAnimated = !!shape.k;
        var i = 0,
            len = transformers.length;
        while (i < len) {
            if (transformers[i].mProps.dynamicProperties.length) { this._isAnimated = !0; break }
            i += 1
        }
    }
    SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }

    function SVGTransformData(mProps, op, container) {
        this.transform = { mProps: mProps, op: op, container: container };
        this.elements = [];
        this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }

    function SVGStrokeStyleData(elem, data, styleOb) {
        this.initDynamicPropertyContainer(elem);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
        this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
        this.d = new DashProperty(elem, data.d || {}, 'svg', this);
        this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
        this.style = styleOb;
        this._isAnimated = !!this._isAnimated
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

    function SVGFillStyleData(elem, data, styleOb) {
        this.initDynamicPropertyContainer(elem);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
        this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
        this.style = styleOb
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

    function SVGGradientFillStyleData(elem, data, styleOb) {
        this.initDynamicPropertyContainer(elem);
        this.getValue = this.iterateDynamicProperties;
        this.initGradientData(elem, data, styleOb)
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(elem, data, styleOb) {
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
        this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
        this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
        this.h = PropertyFactory.getProp(elem, data.h || { k: 0 }, 0, 0.01, this);
        this.a = PropertyFactory.getProp(elem, data.a || { k: 0 }, 0, degToRads, this);
        this.g = new GradientProperty(elem, data.g, this);
        this.style = styleOb;
        this.stops = [];
        this.setGradientData(styleOb.pElem, data);
        this.setGradientOpacity(data, styleOb);
        this._isAnimated = !!this._isAnimated
    };
    SVGGradientFillStyleData.prototype.setGradientData = function(pathElement, data) {
        var gradientId = createElementID();
        var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
        gfill.setAttribute('id', gradientId);
        gfill.setAttribute('spreadMethod', 'pad');
        gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
        var stops = [];
        var stop, j, jLen;
        jLen = data.g.p * 4;
        for (j = 0; j < jLen; j += 4) {
            stop = createNS('stop');
            gfill.appendChild(stop);
            stops.push(stop)
        }
        pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + gradientId + ')');
        this.gf = gfill;
        this.cst = stops
    };
    SVGGradientFillStyleData.prototype.setGradientOpacity = function(data, styleOb) {
        if (this.g._hasOpacity && !this.g._collapsable) {
            var stop, j, jLen;
            var mask = createNS("mask");
            var maskElement = createNS('path');
            mask.appendChild(maskElement);
            var opacityId = createElementID();
            var maskId = createElementID();
            mask.setAttribute('id', maskId);
            var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
            opFill.setAttribute('id', opacityId);
            opFill.setAttribute('spreadMethod', 'pad');
            opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
            jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
            var stops = this.stops;
            for (j = data.g.p * 4; j < jLen; j += 2) {
                stop = createNS('stop');
                stop.setAttribute('stop-color', 'rgb(255,255,255)');
                opFill.appendChild(stop);
                stops.push(stop)
            }
            maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + opacityId + ')');
            this.of = opFill;
            this.ms = mask;
            this.ost = stops;
            this.maskId = maskId;
            styleOb.msElem = maskElement
        }
    };
    extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

    function SVGGradientStrokeStyleData(elem, data, styleOb) {
        this.initDynamicPropertyContainer(elem);
        this.getValue = this.iterateDynamicProperties;
        this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
        this.d = new DashProperty(elem, data.d || {}, 'svg', this);
        this.initGradientData(elem, data, styleOb);
        this._isAnimated = !!this._isAnimated
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

    function ShapeGroupData() {
        this.it = [];
        this.prevViewData = [];
        this.gr = createNS('g')
    }
    var SVGElementsRenderer = (function() {
        var _identityMatrix = new Matrix();
        var _matrixHelper = new Matrix();
        var ob = { createRenderFunction: createRenderFunction }

        function createRenderFunction(data) {
            var ty = data.ty;
            switch (data.ty) {
                case 'fl':
                    return renderFill;
                case 'gf':
                    return renderGradient;
                case 'gs':
                    return renderGradientStroke;
                case 'st':
                    return renderStroke;
                case 'sh':
                case 'el':
                case 'rc':
                case 'sr':
                    return renderPath;
                case 'tr':
                    return renderContentTransform
            }
        }

        function renderContentTransform(styleData, itemData, isFirstFrame) {
            if (isFirstFrame || itemData.transform.op._mdf) { itemData.transform.container.setAttribute('opacity', itemData.transform.op.v) }
            if (isFirstFrame || itemData.transform.mProps._mdf) { itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS()) }
        }

        function renderPath(styleData, itemData, isFirstFrame) {
            var j, jLen, pathStringTransformed, redraw, pathNodes, l, lLen = itemData.styles.length;
            var lvl = itemData.lvl;
            var paths, mat, props, iterations, k;
            for (l = 0; l < lLen; l += 1) {
                redraw = itemData.sh._mdf || isFirstFrame;
                if (itemData.styles[l].lvl < lvl) {
                    mat = _matrixHelper.reset();
                    iterations = lvl - itemData.styles[l].lvl;
                    k = itemData.transformers.length - 1;
                    while (!redraw && iterations > 0) {
                        redraw = itemData.transformers[k].mProps._mdf || redraw;
                        iterations--;
                        k--
                    }
                    if (redraw) {
                        iterations = lvl - itemData.styles[l].lvl;
                        k = itemData.transformers.length - 1;
                        while (iterations > 0) {
                            props = itemData.transformers[k].mProps.v.props;
                            mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
                            iterations--;
                            k--
                        }
                    }
                } else { mat = _identityMatrix }
                paths = itemData.sh.paths;
                jLen = paths._length;
                if (redraw) {
                    pathStringTransformed = '';
                    for (j = 0; j < jLen; j += 1) { pathNodes = paths.shapes[j]; if (pathNodes && pathNodes._length) { pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat) } }
                    itemData.caches[l] = pathStringTransformed
                } else { pathStringTransformed = itemData.caches[l] }
                itemData.styles[l].d += styleData.hd === !0 ? '' : pathStringTransformed;
                itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf
            }
        }

        function renderFill(styleData, itemData, isFirstFrame) {
            var styleElem = itemData.style;
            if (itemData.c._mdf || isFirstFrame) { styleElem.pElem.setAttribute('fill', 'rgb(' + bm_floor(itemData.c.v[0]) + ',' + bm_floor(itemData.c.v[1]) + ',' + bm_floor(itemData.c.v[2]) + ')') }
            if (itemData.o._mdf || isFirstFrame) { styleElem.pElem.setAttribute('fill-opacity', itemData.o.v) }
        };

        function renderGradientStroke(styleData, itemData, isFirstFrame) {
            renderGradient(styleData, itemData, isFirstFrame);
            renderStroke(styleData, itemData, isFirstFrame)
        }

        function renderGradient(styleData, itemData, isFirstFrame) {
            var gfill = itemData.gf;
            var hasOpacity = itemData.g._hasOpacity;
            var pt1 = itemData.s.v,
                pt2 = itemData.e.v;
            if (itemData.o._mdf || isFirstFrame) {
                var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
                itemData.style.pElem.setAttribute(attr, itemData.o.v)
            }
            if (itemData.s._mdf || isFirstFrame) {
                var attr1 = styleData.t === 1 ? 'x1' : 'cx';
                var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
                gfill.setAttribute(attr1, pt1[0]);
                gfill.setAttribute(attr2, pt1[1]);
                if (hasOpacity && !itemData.g._collapsable) {
                    itemData.of.setAttribute(attr1, pt1[0]);
                    itemData.of.setAttribute(attr2, pt1[1])
                }
            }
            var stops, i, len, stop;
            if (itemData.g._cmdf || isFirstFrame) {
                stops = itemData.cst;
                var cValues = itemData.g.c;
                len = stops.length;
                for (i = 0; i < len; i += 1) {
                    stop = stops[i];
                    stop.setAttribute('offset', cValues[i * 4] + '%');
                    stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')')
                }
            }
            if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
                var oValues = itemData.g.o;
                if (itemData.g._collapsable) { stops = itemData.cst } else { stops = itemData.ost }
                len = stops.length;
                for (i = 0; i < len; i += 1) {
                    stop = stops[i];
                    if (!itemData.g._collapsable) { stop.setAttribute('offset', oValues[i * 2] + '%') }
                    stop.setAttribute('stop-opacity', oValues[i * 2 + 1])
                }
            }
            if (styleData.t === 1) {
                if (itemData.e._mdf || isFirstFrame) {
                    gfill.setAttribute('x2', pt2[0]);
                    gfill.setAttribute('y2', pt2[1]);
                    if (hasOpacity && !itemData.g._collapsable) {
                        itemData.of.setAttribute('x2', pt2[0]);
                        itemData.of.setAttribute('y2', pt2[1])
                    }
                }
            } else {
                var rad;
                if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
                    rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
                    gfill.setAttribute('r', rad);
                    if (hasOpacity && !itemData.g._collapsable) { itemData.of.setAttribute('r', rad) }
                }
                if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
                    if (!rad) { rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2)) }
                    var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
                    var percent = itemData.h.v >= 1 ? 0.99 : itemData.h.v <= -1 ? -0.99 : itemData.h.v;
                    var dist = rad * percent;
                    var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
                    var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
                    gfill.setAttribute('fx', x);
                    gfill.setAttribute('fy', y);
                    if (hasOpacity && !itemData.g._collapsable) {
                        itemData.of.setAttribute('fx', x);
                        itemData.of.setAttribute('fy', y)
                    }
                }
            }
        };

        function renderStroke(styleData, itemData, isFirstFrame) {
            var styleElem = itemData.style;
            var d = itemData.d;
            if (d && (d._mdf || isFirstFrame) && d.dashStr) {
                styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
                styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0])
            }
            if (itemData.c && (itemData.c._mdf || isFirstFrame)) { styleElem.pElem.setAttribute('stroke', 'rgb(' + bm_floor(itemData.c.v[0]) + ',' + bm_floor(itemData.c.v[1]) + ',' + bm_floor(itemData.c.v[2]) + ')') }
            if (itemData.o._mdf || isFirstFrame) { styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v) }
            if (itemData.w._mdf || isFirstFrame) { styleElem.pElem.setAttribute('stroke-width', itemData.w.v); if (styleElem.msElem) { styleElem.msElem.setAttribute('stroke-width', itemData.w.v) } }
        };
        return ob
    }())

    function ShapeTransformManager() {
        this.sequences = {};
        this.sequenceList = [];
        this.transform_key_count = 0
    }
    ShapeTransformManager.prototype = {
        addTransformSequence: function(transforms) {
            var i, len = transforms.length;
            var key = '_';
            for (i = 0; i < len; i += 1) { key += transforms[i].transform.key + '_' }
            var sequence = this.sequences[key];
            if (!sequence) {
                sequence = { transforms: [].concat(transforms), finalTransform: new Matrix(), _mdf: !1 };
                this.sequences[key] = sequence;
                this.sequenceList.push(sequence)
            }
            return sequence
        },
        processSequence: function(sequence, isFirstFrame) {
            var i = 0,
                len = sequence.transforms.length,
                _mdf = isFirstFrame;
            while (i < len && !isFirstFrame) {
                if (sequence.transforms[i].transform.mProps._mdf) { _mdf = !0; break }
                i += 1
            }
            if (_mdf) {
                var props;
                sequence.finalTransform.reset();
                for (i = len - 1; i >= 0; i -= 1) {
                    props = sequence.transforms[i].transform.mProps.v.props;
                    sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15])
                }
            }
            sequence._mdf = _mdf
        },
        processSequences: function(isFirstFrame) { var i, len = this.sequenceList.length; for (i = 0; i < len; i += 1) { this.processSequence(this.sequenceList[i], isFirstFrame) } },
        getNewKey: function() { return '_' + this.transform_key_count++ }
    }

    function BaseElement() {}
    BaseElement.prototype = {
        checkMasks: function() {
            if (!this.data.hasMask) { return !1 }
            var i = 0,
                len = this.data.masksProperties.length;
            while (i < len) {
                if ((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== !1)) { return !0 }
                i += 1
            }
            return !1
        },
        initExpressions: function() {
            this.layerInterface = LayerExpressionInterface(this);
            if (this.data.hasMask && this.maskManager) { this.layerInterface.registerMaskInterface(this.maskManager) }
            var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(effectsInterface);
            if (this.data.ty === 0 || this.data.xt) { this.compInterface = CompExpressionInterface(this) } else if (this.data.ty === 4) {
                this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
                this.layerInterface.content = this.layerInterface.shapeInterface
            } else if (this.data.ty === 5) {
                this.layerInterface.textInterface = TextExpressionInterface(this);
                this.layerInterface.text = this.layerInterface.textInterface
            }
        },
        setBlendMode: function() {
            var blendModeValue = getBlendMode(this.data.bm);
            var elem = this.baseElement || this.layerElement;
            elem.style['mix-blend-mode'] = blendModeValue
        },
        initBaseData: function(data, globalData, comp) {
            this.globalData = globalData;
            this.comp = comp;
            this.data = data;
            this.layerId = createElementID();
            if (!this.data.sr) { this.data.sr = 1 }
            this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function() { return this.type },
        sourceRectAtTime: function() {}
    }

    function NullElement(data, globalData, comp) {
        this.initFrame();
        this.initBaseData(data, globalData, comp);
        this.initFrame();
        this.initTransform(data, globalData, comp);
        this.initHierarchy()
    }
    NullElement.prototype.prepareFrame = function(num) { this.prepareProperties(num, !0) };
    NullElement.prototype.renderFrame = function() {};
    NullElement.prototype.getBaseElement = function() { return null };
    NullElement.prototype.destroy = function() {};
    NullElement.prototype.sourceRectAtTime = function() {};
    NullElement.prototype.hide = function() {};
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

    function SVGBaseElement() {}
    SVGBaseElement.prototype = {
        initRendererElement: function() { this.layerElement = createNS('g') },
        createContainerElements: function() {
            this.matteElement = createNS('g');
            this.transformedElement = this.layerElement;
            this.maskedElement = this.layerElement;
            this._sizeChanged = !1;
            var layerElementParent = null;
            var filId, fil, gg;
            if (this.data.td) {
                if (this.data.td == 3 || this.data.td == 1) {
                    var masker = createNS('mask');
                    masker.setAttribute('id', this.layerId);
                    masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha');
                    masker.appendChild(this.layerElement);
                    layerElementParent = masker;
                    this.globalData.defs.appendChild(masker);
                    if (!featureSupport.maskType && this.data.td == 1) {
                        masker.setAttribute('mask-type', 'luminance');
                        filId = createElementID();
                        fil = filtersFactory.createFilter(filId);
                        this.globalData.defs.appendChild(fil);
                        fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                        gg = createNS('g');
                        gg.appendChild(this.layerElement);
                        layerElementParent = gg;
                        masker.appendChild(gg);
                        gg.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')')
                    }
                } else if (this.data.td == 2) {
                    var maskGroup = createNS('mask');
                    maskGroup.setAttribute('id', this.layerId);
                    maskGroup.setAttribute('mask-type', 'alpha');
                    var maskGrouper = createNS('g');
                    maskGroup.appendChild(maskGrouper);
                    filId = createElementID();
                    fil = filtersFactory.createFilter(filId);
                    var feCTr = createNS('feComponentTransfer');
                    feCTr.setAttribute('in', 'SourceGraphic');
                    fil.appendChild(feCTr);
                    var feFunc = createNS('feFuncA');
                    feFunc.setAttribute('type', 'table');
                    feFunc.setAttribute('tableValues', '1.0 0.0');
                    feCTr.appendChild(feFunc);
                    this.globalData.defs.appendChild(fil);
                    var alphaRect = createNS('rect');
                    alphaRect.setAttribute('width', this.comp.data.w);
                    alphaRect.setAttribute('height', this.comp.data.h);
                    alphaRect.setAttribute('x', '0');
                    alphaRect.setAttribute('y', '0');
                    alphaRect.setAttribute('fill', '#ffffff');
                    alphaRect.setAttribute('opacity', '0');
                    maskGrouper.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
                    maskGrouper.appendChild(alphaRect);
                    maskGrouper.appendChild(this.layerElement);
                    layerElementParent = maskGrouper;
                    if (!featureSupport.maskType) {
                        maskGroup.setAttribute('mask-type', 'luminance');
                        fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                        gg = createNS('g');
                        maskGrouper.appendChild(alphaRect);
                        gg.appendChild(this.layerElement);
                        layerElementParent = gg;
                        maskGrouper.appendChild(gg)
                    }
                    this.globalData.defs.appendChild(maskGroup)
                }
            } else if (this.data.tt) {
                this.matteElement.appendChild(this.layerElement);
                layerElementParent = this.matteElement;
                this.baseElement = this.matteElement
            } else { this.baseElement = this.layerElement }
            if (this.data.ln) { this.layerElement.setAttribute('id', this.data.ln) }
            if (this.data.cl) { this.layerElement.setAttribute('class', this.data.cl) }
            if (this.data.ty === 0 && !this.data.hd) {
                var cp = createNS('clipPath');
                var pt = createNS('path');
                pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0' + ' L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
                var clipId = createElementID();
                cp.setAttribute('id', clipId);
                cp.appendChild(pt);
                this.globalData.defs.appendChild(cp);
                if (this.checkMasks()) {
                    var cpGroup = createNS('g');
                    cpGroup.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
                    cpGroup.appendChild(this.layerElement);
                    this.transformedElement = cpGroup;
                    if (layerElementParent) { layerElementParent.appendChild(this.transformedElement) } else { this.baseElement = this.transformedElement }
                } else { this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')') }
            }
            if (this.data.bm !== 0) { this.setBlendMode() }
        },
        renderElement: function() {
            if (this.finalTransform._matMdf) { this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS()) }
            if (this.finalTransform._opMdf) { this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v) }
        },
        destroyBaseElement: function() {
            this.layerElement = null;
            this.matteElement = null;
            this.maskManager.destroy()
        },
        getBaseElement: function() {
            if (this.data.hd) { return null }
            return this.baseElement
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
            this.renderableEffectsManager = new SVGEffects(this)
        },
        setMatte: function(id) {
            if (!this.matteElement) { return }
            this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + id + ")")
        }
    };

    function IShapeElement() {}
    IShapeElement.prototype = {
        addShapeToModifiers: function(data) { var i, len = this.shapeModifiers.length; for (i = 0; i < len; i += 1) { this.shapeModifiers[i].addShape(data) } },
        isShapeInAnimatedModifiers: function(data) {
            var i = 0,
                len = this.shapeModifiers.length;
            while (i < len) { if (this.shapeModifiers[i].isAnimatedWithShape(data)) { return !0 } }
            return !1
        },
        renderModifiers: function() {
            if (!this.shapeModifiers.length) { return }
            var i, len = this.shapes.length;
            for (i = 0; i < len; i += 1) { this.shapes[i].sh.reset() }
            len = this.shapeModifiers.length;
            for (i = len - 1; i >= 0; i -= 1) { this.shapeModifiers[i].processShapes(this._isFirstFrame) }
        },
        lcEnum: { '1': 'butt', '2': 'round', '3': 'square' },
        ljEnum: { '1': 'miter', '2': 'round', '3': 'bevel' },
        searchProcessedElement: function(elem) {
            var elements = this.processedElements;
            var i = 0,
                len = elements.length;
            while (i < len) {
                if (elements[i].elem === elem) { return elements[i].pos }
                i += 1
            }
            return 0
        },
        addProcessedElement: function(elem, pos) {
            var elements = this.processedElements;
            var i = elements.length;
            while (i) { i -= 1; if (elements[i].elem === elem) { elements[i].pos = pos; return } }
            elements.push(new ProcessedElement(elem, pos))
        },
        prepareFrame: function(num) {
            this.prepareRenderableFrame(num);
            this.prepareProperties(num, this.isInRange)
        }
    };

    function ITextElement() {}
    ITextElement.prototype.initElement = function(data, globalData, comp) {
        this.lettersChangedFlag = !0;
        this.initFrame();
        this.initBaseData(data, globalData, comp);
        this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
        this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
        this.initTransform(data, globalData, comp);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
        this.textAnimator.searchProperties(this.dynamicProperties)
    };
    ITextElement.prototype.prepareFrame = function(num) {
        this._mdf = !1;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
            this.buildNewText();
            this.textProperty._isFirstFrame = !1;
            this.textProperty._mdf = !1
        }
    };
    ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
        var j, jLen = shapes.length;
        var k, kLen, pathNodes;
        var shapeStr = '';
        for (j = 0; j < jLen; j += 1) {
            pathNodes = shapes[j].ks.k;
            shapeStr += buildShapeString(pathNodes, pathNodes.i.length, !0, matrixHelper)
        }
        return shapeStr
    };
    ITextElement.prototype.updateDocumentData = function(newData, index) { this.textProperty.updateDocumentData(newData, index) };
    ITextElement.prototype.canResizeFont = function(_canResize) { this.textProperty.canResizeFont(_canResize) };
    ITextElement.prototype.setMinimumFontSize = function(_fontSize) { this.textProperty.setMinimumFontSize(_fontSize) };
    ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData, matrixHelper, lineNumber, xPos, yPos) {
        if (documentData.ps) { matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0) }
        matrixHelper.translate(0, -documentData.ls, 0);
        switch (documentData.j) {
            case 1:
                matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
                break;
            case 2:
                matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
                break
        }
        matrixHelper.translate(xPos, yPos, 0)
    };
    ITextElement.prototype.buildColor = function(colorData) { return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')' };
    ITextElement.prototype.emptyProp = new LetterProps();
    ITextElement.prototype.destroy = function() {};

    function ICompElement() {}
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);
    ICompElement.prototype.initElement = function(data, globalData, comp) {
        this.initFrame();
        this.initBaseData(data, globalData, comp);
        this.initTransform(data, globalData, comp);
        this.initRenderable();
        this.initHierarchy();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        if (this.data.xt || !globalData.progressiveLoad) { this.buildAllItems() }
        this.hide()
    };
    ICompElement.prototype.prepareFrame = function(num) {
        this._mdf = !1;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        if (!this.isInRange && !this.data.xt) { return }
        if (!this.tm._placeholder) {
            var timeRemapped = this.tm.v;
            if (timeRemapped === this.data.op) { timeRemapped = this.data.op - 1 }
            this.renderedFrame = timeRemapped
        } else { this.renderedFrame = num / this.data.sr }
        var i, len = this.elements.length;
        if (!this.completeLayers) { this.checkLayers(this.renderedFrame) }
        for (i = len - 1; i >= 0; i -= 1) { if (this.completeLayers || this.elements[i]) { this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st); if (this.elements[i]._mdf) { this._mdf = !0 } } }
    };
    ICompElement.prototype.renderInnerContent = function() { var i, len = this.layers.length; for (i = 0; i < len; i += 1) { if (this.completeLayers || this.elements[i]) { this.elements[i].renderFrame() } } };
    ICompElement.prototype.setElements = function(elems) { this.elements = elems };
    ICompElement.prototype.getElements = function() { return this.elements };
    ICompElement.prototype.destroyElements = function() { var i, len = this.layers.length; for (i = 0; i < len; i += 1) { if (this.elements[i]) { this.elements[i].destroy() } } };
    ICompElement.prototype.destroy = function() {
        this.destroyElements();
        this.destroyBaseElement()
    };

    function IImageElement(data, globalData, comp) {
        this.assetData = globalData.getAssetData(data.refId);
        this.initElement(data, globalData, comp);
        this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h }
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);
    IImageElement.prototype.createContent = function() {
        var assetPath = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS('image');
        this.innerElem.setAttribute('width', this.assetData.w + "px");
        this.innerElem.setAttribute('height', this.assetData.h + "px");
        this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
        this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
        this.layerElement.appendChild(this.innerElem)
    };
    IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }

    function ISolidElement(data, globalData, comp) { this.initElement(data, globalData, comp) }
    extendPrototype([IImageElement], ISolidElement);
    ISolidElement.prototype.createContent = function() {
        var rect = createNS('rect');
        rect.setAttribute('width', this.data.sw);
        rect.setAttribute('height', this.data.sh);
        rect.setAttribute('fill', this.data.sc);
        this.layerElement.appendChild(rect)
    };

    function SVGCompElement(data, globalData, comp) {
        this.layers = data.layers;
        this.supports3d = !0;
        this.completeLayers = !1;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(data, globalData, comp);
        this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: !0 }
    }
    extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);

    function SVGTextElement(data, globalData, comp) {
        this.textSpans = [];
        this.renderType = 'svg';
        this.initElement(data, globalData, comp)
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement);
    SVGTextElement.prototype.createContent = function() { if (this.data.singleShape && !this.globalData.fontManager.chars) { this.textContainer = createNS('text') } };
    SVGTextElement.prototype.buildTextContents = function(textArray) {
        var i = 0,
            len = textArray.length;
        var textContents = [],
            currentTextContent = '';
        while (i < len) {
            if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
                textContents.push(currentTextContent);
                currentTextContent = ''
            } else { currentTextContent += textArray[i] }
            i += 1
        }
        textContents.push(currentTextContent);
        return textContents
    }
    SVGTextElement.prototype.buildNewText = function() {
        var i, len;
        var documentData = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
        if (documentData.fc) { this.layerElement.setAttribute('fill', this.buildColor(documentData.fc)) } else { this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)') }
        if (documentData.sc) {
            this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
            this.layerElement.setAttribute('stroke-width', documentData.sw)
        }
        this.layerElement.setAttribute('font-size', documentData.finalSize);
        var fontData = this.globalData.fontManager.getFontByName(documentData.f);
        if (fontData.fClass) { this.layerElement.setAttribute('class', fontData.fClass) } else {
            this.layerElement.setAttribute('font-family', fontData.fFamily);
            var fWeight = documentData.fWeight,
                fStyle = documentData.fStyle;
            this.layerElement.setAttribute('font-style', fStyle);
            this.layerElement.setAttribute('font-weight', fWeight)
        }
        this.layerElement.setAttribute('aria-label', documentData.t);
        var letters = documentData.l || [];
        var usesGlyphs = !!this.globalData.fontManager.chars;
        len = letters.length;
        var tSpan;
        var matrixHelper = this.mHelper;
        var shapes, shapeStr = '',
            singleShape = this.data.singleShape;
        var xPos = 0,
            yPos = 0,
            firstLine = !0;
        var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
        if (singleShape && !usesGlyphs && !documentData.sz) {
            var tElement = this.textContainer;
            var justify = 'start';
            switch (documentData.j) {
                case 1:
                    justify = 'end';
                    break;
                case 2:
                    justify = 'middle';
                    break
            }
            tElement.setAttribute('text-anchor', justify);
            tElement.setAttribute('letter-spacing', trackingOffset);
            var textContent = this.buildTextContents(documentData.finalText);
            len = textContent.length;
            yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
            for (i = 0; i < len; i += 1) {
                tSpan = this.textSpans[i] || createNS('tspan');
                tSpan.textContent = textContent[i];
                tSpan.setAttribute('x', 0);
                tSpan.setAttribute('y', yPos);
                tSpan.style.display = 'inherit';
                tElement.appendChild(tSpan);
                this.textSpans[i] = tSpan;
                yPos += documentData.finalLineHeight
            }
            this.layerElement.appendChild(tElement)
        } else {
            var cachedSpansLength = this.textSpans.length;
            var shapeData, charData;
            for (i = 0; i < len; i += 1) {
                if (!usesGlyphs || !singleShape || i === 0) {
                    tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs ? 'path' : 'text');
                    if (cachedSpansLength <= i) {
                        tSpan.setAttribute('stroke-linecap', 'butt');
                        tSpan.setAttribute('stroke-linejoin', 'round');
                        tSpan.setAttribute('stroke-miterlimit', '4');
                        this.textSpans[i] = tSpan;
                        this.layerElement.appendChild(tSpan)
                    }
                    tSpan.style.display = 'inherit'
                }
                matrixHelper.reset();
                matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
                if (singleShape) {
                    if (letters[i].n) {
                        xPos = -trackingOffset;
                        yPos += documentData.yOffset;
                        yPos += firstLine ? 1 : 0;
                        firstLine = !1
                    }
                    this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
                    xPos += letters[i].l || 0;
                    xPos += trackingOffset
                }
                if (usesGlyphs) {
                    charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
                    shapeData = charData && charData.data || {};
                    shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
                    if (!singleShape) { tSpan.setAttribute('d', this.createPathShape(matrixHelper, shapes)) } else { shapeStr += this.createPathShape(matrixHelper, shapes) }
                } else {
                    if (singleShape) { tSpan.setAttribute("transform", "translate(" + matrixHelper.props[12] + "," + matrixHelper.props[13] + ")") }
                    tSpan.textContent = letters[i].val;
                    tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
            }
            if (singleShape && tSpan) { tSpan.setAttribute('d', shapeStr) }
        }
        while (i < this.textSpans.length) {
            this.textSpans[i].style.display = 'none';
            i += 1
        }
        this._sizeChanged = !0
    };
    SVGTextElement.prototype.sourceRectAtTime = function(time) {
        this.prepareFrame(this.comp.renderedFrame - this.data.st);
        this.renderInnerContent();
        if (this._sizeChanged) {
            this._sizeChanged = !1;
            var textBox = this.layerElement.getBBox();
            this.bbox = { top: textBox.y, left: textBox.x, width: textBox.width, height: textBox.height }
        }
        return this.bbox
    };
    SVGTextElement.prototype.renderInnerContent = function() {
        if (!this.data.singleShape) {
            this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                this._sizeChanged = !0;
                var i, len;
                var renderedLetters = this.textAnimator.renderedLetters;
                var letters = this.textProperty.currentData.l;
                len = letters.length;
                var renderedLetter, textSpan;
                for (i = 0; i < len; i += 1) {
                    if (letters[i].n) { continue }
                    renderedLetter = renderedLetters[i];
                    textSpan = this.textSpans[i];
                    if (renderedLetter._mdf.m) { textSpan.setAttribute('transform', renderedLetter.m) }
                    if (renderedLetter._mdf.o) { textSpan.setAttribute('opacity', renderedLetter.o) }
                    if (renderedLetter._mdf.sw) { textSpan.setAttribute('stroke-width', renderedLetter.sw) }
                    if (renderedLetter._mdf.sc) { textSpan.setAttribute('stroke', renderedLetter.sc) }
                    if (renderedLetter._mdf.fc) { textSpan.setAttribute('fill', renderedLetter.fc) }
                }
            }
        }
    };

    function SVGShapeElement(data, globalData, comp) {
        this.shapes = [];
        this.shapesData = data.shapes;
        this.stylesList = [];
        this.shapeModifiers = [];
        this.itemsData = [];
        this.processedElements = [];
        this.animatedContents = [];
        this.initElement(data, globalData, comp);
        this.prevViewData = []
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);
    SVGShapeElement.prototype.initSecondaryElement = function() {};
    SVGShapeElement.prototype.identityMatrix = new Matrix();
    SVGShapeElement.prototype.buildExpressionInterface = function() {};
    SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0);
        this.filterUniqueShapes()
    };
    SVGShapeElement.prototype.filterUniqueShapes = function() {
        var i, len = this.shapes.length,
            shape;
        var j, jLen = this.stylesList.length;
        var style, count = 0;
        var tempShapes = [];
        var areAnimated = !1;
        for (j = 0; j < jLen; j += 1) {
            style = this.stylesList[j];
            areAnimated = !1;
            tempShapes.length = 0;
            for (i = 0; i < len; i += 1) {
                shape = this.shapes[i];
                if (shape.styles.indexOf(style) !== -1) {
                    tempShapes.push(shape);
                    areAnimated = shape._isAnimated || areAnimated
                }
            }
            if (tempShapes.length > 1 && areAnimated) { this.setShapesAsAnimated(tempShapes) }
        }
    }
    SVGShapeElement.prototype.setShapesAsAnimated = function(shapes) { var i, len = shapes.length; for (i = 0; i < len; i += 1) { shapes[i].setAsAnimated() } }
    SVGShapeElement.prototype.createStyleElement = function(data, level) {
        var elementData;
        var styleOb = new SVGStyleData(data, level);
        var pathElement = styleOb.pElem;
        if (data.ty === 'st') { elementData = new SVGStrokeStyleData(this, data, styleOb) } else if (data.ty === 'fl') { elementData = new SVGFillStyleData(this, data, styleOb) } else if (data.ty === 'gf' || data.ty === 'gs') {
            var gradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
            elementData = new gradientConstructor(this, data, styleOb);
            this.globalData.defs.appendChild(elementData.gf);
            if (elementData.maskId) {
                this.globalData.defs.appendChild(elementData.ms);
                this.globalData.defs.appendChild(elementData.of);
                pathElement.setAttribute('mask', 'url(' + locationHref + '#' + elementData.maskId + ')')
            }
        }
        if (data.ty === 'st' || data.ty === 'gs') {
            pathElement.setAttribute('stroke-linecap', this.lcEnum[data.lc] || 'round');
            pathElement.setAttribute('stroke-linejoin', this.ljEnum[data.lj] || 'round');
            pathElement.setAttribute('fill-opacity', '0');
            if (data.lj === 1) { pathElement.setAttribute('stroke-miterlimit', data.ml) }
        }
        if (data.r === 2) { pathElement.setAttribute('fill-rule', 'evenodd') }
        if (data.ln) { pathElement.setAttribute('id', data.ln) }
        if (data.cl) { pathElement.setAttribute('class', data.cl) }
        if (data.bm) { pathElement.style['mix-blend-mode'] = getBlendMode(data.bm) }
        this.stylesList.push(styleOb);
        this.addToAnimatedContents(data, elementData);
        return elementData
    };
    SVGShapeElement.prototype.createGroupElement = function(data) {
        var elementData = new ShapeGroupData();
        if (data.ln) { elementData.gr.setAttribute('id', data.ln) }
        if (data.cl) { elementData.gr.setAttribute('class', data.cl) }
        if (data.bm) { elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm) }
        return elementData
    };
    SVGShapeElement.prototype.createTransformElement = function(data, container) {
        var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
        var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
        this.addToAnimatedContents(data, elementData);
        return elementData
    };
    SVGShapeElement.prototype.createShapeElement = function(data, ownTransformers, level) {
        var ty = 4;
        if (data.ty === 'rc') { ty = 5 } else if (data.ty === 'el') { ty = 6 } else if (data.ty === 'sr') { ty = 7 }
        var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
        var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
        this.shapes.push(elementData);
        this.addShapeToModifiers(elementData);
        this.addToAnimatedContents(data, elementData);
        return elementData
    };
    SVGShapeElement.prototype.addToAnimatedContents = function(data, element) {
        var i = 0,
            len = this.animatedContents.length;
        while (i < len) {
            if (this.animatedContents[i].element === element) { return }
            i += 1
        }
        this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(data), element: element, data: data })
    };
    SVGShapeElement.prototype.setElementStyles = function(elementData) { var arr = elementData.styles; var j, jLen = this.stylesList.length; for (j = 0; j < jLen; j += 1) { if (!this.stylesList[j].closed) { arr.push(this.stylesList[j]) } } };
    SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var i, len = this.itemsData.length;
        for (i = 0; i < len; i += 1) { this.prevViewData[i] = this.itemsData[i] }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0);
        this.filterUniqueShapes();
        len = this.dynamicProperties.length;
        for (i = 0; i < len; i += 1) { this.dynamicProperties[i].getValue() }
        this.renderModifiers()
    };
    SVGShapeElement.prototype.searchShapes = function(arr, itemsData, prevViewData, container, level, transformers, render) {
        var ownTransformers = [].concat(transformers);
        var i, len = arr.length - 1;
        var j, jLen;
        var ownStyles = [],
            ownModifiers = [],
            styleOb, currentTransform, modifier, processedPos;
        for (i = len; i >= 0; i -= 1) {
            processedPos = this.searchProcessedElement(arr[i]);
            if (!processedPos) { arr[i]._render = render } else { itemsData[i] = prevViewData[processedPos - 1] }
            if (arr[i].ty == 'fl' || arr[i].ty == 'st' || arr[i].ty == 'gf' || arr[i].ty == 'gs') {
                if (!processedPos) { itemsData[i] = this.createStyleElement(arr[i], level) } else { itemsData[i].style.closed = !1 }
                if (arr[i]._render) { container.appendChild(itemsData[i].style.pElem) }
                ownStyles.push(itemsData[i].style)
            } else if (arr[i].ty == 'gr') {
                if (!processedPos) { itemsData[i] = this.createGroupElement(arr[i]) } else { jLen = itemsData[i].it.length; for (j = 0; j < jLen; j += 1) { itemsData[i].prevViewData[j] = itemsData[i].it[j] } }
                this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
                if (arr[i]._render) { container.appendChild(itemsData[i].gr) }
            } else if (arr[i].ty == 'tr') {
                if (!processedPos) { itemsData[i] = this.createTransformElement(arr[i], container) }
                currentTransform = itemsData[i].transform;
                ownTransformers.push(currentTransform)
            } else if (arr[i].ty == 'sh' || arr[i].ty == 'rc' || arr[i].ty == 'el' || arr[i].ty == 'sr') {
                if (!processedPos) { itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level) }
                this.setElementStyles(itemsData[i])
            } else if (arr[i].ty == 'tm' || arr[i].ty == 'rd' || arr[i].ty == 'ms') {
                if (!processedPos) {
                    modifier = ShapeModifiers.getModifier(arr[i].ty);
                    modifier.init(this, arr[i]);
                    itemsData[i] = modifier;
                    this.shapeModifiers.push(modifier)
                } else {
                    modifier = itemsData[i];
                    modifier.closed = !1
                }
                ownModifiers.push(modifier)
            } else if (arr[i].ty == 'rp') {
                if (!processedPos) {
                    modifier = ShapeModifiers.getModifier(arr[i].ty);
                    itemsData[i] = modifier;
                    modifier.init(this, arr, i, itemsData);
                    this.shapeModifiers.push(modifier);
                    render = !1
                } else {
                    modifier = itemsData[i];
                    modifier.closed = !0
                }
                ownModifiers.push(modifier)
            }
            this.addProcessedElement(arr[i], i + 1)
        }
        len = ownStyles.length;
        for (i = 0; i < len; i += 1) { ownStyles[i].closed = !0 }
        len = ownModifiers.length;
        for (i = 0; i < len; i += 1) { ownModifiers[i].closed = !0 }
    };
    SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var i, len = this.stylesList.length;
        for (i = 0; i < len; i += 1) { this.stylesList[i].reset() }
        this.renderShape();
        for (i = 0; i < len; i += 1) {
            if (this.stylesList[i]._mdf || this._isFirstFrame) {
                if (this.stylesList[i].msElem) {
                    this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d);
                    this.stylesList[i].d = 'M0 0' + this.stylesList[i].d
                }
                this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0')
            }
        }
    };
    SVGShapeElement.prototype.renderShape = function() { var i, len = this.animatedContents.length; var animatedContent; for (i = 0; i < len; i += 1) { animatedContent = this.animatedContents[i]; if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== !0) { animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame) } } }
    SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement();
        this.shapesData = null;
        this.itemsData = null
    };

    function SVGTintFilter(filter, filterManager) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS('feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
        feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
        feColorMatrix.setAttribute('result', 'f1');
        filter.appendChild(feColorMatrix);
        feColorMatrix = createNS('feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
        feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
        feColorMatrix.setAttribute('result', 'f2');
        filter.appendChild(feColorMatrix);
        this.matrixFilter = feColorMatrix;
        if (filterManager.effectElements[2].p.v !== 100 || filterManager.effectElements[2].p.k) {
            var feMerge = createNS('feMerge');
            filter.appendChild(feMerge);
            var feMergeNode;
            feMergeNode = createNS('feMergeNode');
            feMergeNode.setAttribute('in', 'SourceGraphic');
            feMerge.appendChild(feMergeNode);
            feMergeNode = createNS('feMergeNode');
            feMergeNode.setAttribute('in', 'f2');
            feMerge.appendChild(feMergeNode)
        }
    }
    SVGTintFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            var colorBlack = this.filterManager.effectElements[0].p.v;
            var colorWhite = this.filterManager.effectElements[1].p.v;
            var opacity = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute('values', (colorWhite[0] - colorBlack[0]) + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 ' + opacity + ' 0')
        }
    };

    function SVGFillFilter(filter, filterManager) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS('feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
        feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
        filter.appendChild(feColorMatrix);
        this.matrixFilter = feColorMatrix
    }
    SVGFillFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            var color = this.filterManager.effectElements[2].p.v;
            var opacity = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0')
        }
    };

    function SVGGaussianBlurEffect(filter, filterManager) {
        filter.setAttribute('x', '-100%');
        filter.setAttribute('y', '-100%');
        filter.setAttribute('width', '300%');
        filter.setAttribute('height', '300%');
        this.filterManager = filterManager;
        var feGaussianBlur = createNS('feGaussianBlur');
        filter.appendChild(feGaussianBlur);
        this.feGaussianBlur = feGaussianBlur
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            var kBlurrinessToSigma = 0.3;
            var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;
            var dimensions = this.filterManager.effectElements[1].p.v;
            var sigmaX = (dimensions == 3) ? 0 : sigma;
            var sigmaY = (dimensions == 2) ? 0 : sigma;
            this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + " " + sigmaY);
            var edgeMode = (this.filterManager.effectElements[2].p.v == 1) ? 'wrap' : 'duplicate';
            this.feGaussianBlur.setAttribute('edgeMode', edgeMode)
        }
    }

    function SVGStrokeEffect(elem, filterManager) {
        this.initialized = !1;
        this.filterManager = filterManager;
        this.elem = elem;
        this.paths = []
    }
    SVGStrokeEffect.prototype.initialize = function() {
        var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        var path, groupPath, i, len;
        if (this.filterManager.effectElements[1].p.v === 1) {
            len = this.elem.maskManager.masksProperties.length;
            i = 0
        } else {
            i = this.filterManager.effectElements[0].p.v - 1;
            len = i + 1
        }
        groupPath = createNS('g');
        groupPath.setAttribute('fill', 'none');
        groupPath.setAttribute('stroke-linecap', 'round');
        groupPath.setAttribute('stroke-dashoffset', 1);
        for (i; i < len; i += 1) {
            path = createNS('path');
            groupPath.appendChild(path);
            this.paths.push({ p: path, m: i })
        }
        if (this.filterManager.effectElements[10].p.v === 3) {
            var mask = createNS('mask');
            var id = createElementID();
            mask.setAttribute('id', id);
            mask.setAttribute('mask-type', 'alpha');
            mask.appendChild(groupPath);
            this.elem.globalData.defs.appendChild(mask);
            var g = createNS('g');
            g.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
            while (elemChildren[0]) { g.appendChild(elemChildren[0]) }
            this.elem.layerElement.appendChild(g);
            this.masker = mask;
            groupPath.setAttribute('stroke', '#fff')
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (this.filterManager.effectElements[10].p.v === 2) { elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes; while (elemChildren.length) { this.elem.layerElement.removeChild(elemChildren[0]) } }
            this.elem.layerElement.appendChild(groupPath);
            this.elem.layerElement.removeAttribute('mask');
            groupPath.setAttribute('stroke', '#fff')
        }
        this.initialized = !0;
        this.pathMasker = groupPath
    };
    SVGStrokeEffect.prototype.renderFrame = function(forceRender) {
        if (!this.initialized) { this.initialize() }
        var i, len = this.paths.length;
        var mask, path;
        for (i = 0; i < len; i += 1) {
            if (this.paths[i].m === -1) { continue }
            mask = this.elem.maskManager.viewData[this.paths[i].m];
            path = this.paths[i].p;
            if (forceRender || this.filterManager._mdf || mask.prop._mdf) { path.setAttribute('d', mask.lastPath) }
            if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
                var dasharrayValue;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100;
                    var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100;
                    var l = path.getTotalLength();
                    dasharrayValue = '0 0 0 ' + l * s + ' ';
                    var lineLength = l * (e - s);
                    var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v / 100;
                    var units = Math.floor(lineLength / segment);
                    var j;
                    for (j = 0; j < units; j += 1) { dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v / 100 + ' ' }
                    dasharrayValue += '0 ' + l * 10 + ' 0 0'
                } else { dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v / 100 }
                path.setAttribute('stroke-dasharray', dasharrayValue)
            }
        }
        if (forceRender || this.filterManager.effectElements[4].p._mdf) { this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2) }
        if (forceRender || this.filterManager.effectElements[6].p._mdf) { this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v) }
        if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (forceRender || this.filterManager.effectElements[3].p._mdf) {
                var color = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute('stroke', 'rgb(' + bm_floor(color[0] * 255) + ',' + bm_floor(color[1] * 255) + ',' + bm_floor(color[2] * 255) + ')')
            }
        }
    };

    function SVGTritoneFilter(filter, filterManager) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS('feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
        feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
        feColorMatrix.setAttribute('result', 'f1');
        filter.appendChild(feColorMatrix);
        var feComponentTransfer = createNS('feComponentTransfer');
        feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
        filter.appendChild(feComponentTransfer);
        this.matrixFilter = feComponentTransfer;
        var feFuncR = createNS('feFuncR');
        feFuncR.setAttribute('type', 'table');
        feComponentTransfer.appendChild(feFuncR);
        this.feFuncR = feFuncR;
        var feFuncG = createNS('feFuncG');
        feFuncG.setAttribute('type', 'table');
        feComponentTransfer.appendChild(feFuncG);
        this.feFuncG = feFuncG;
        var feFuncB = createNS('feFuncB');
        feFuncB.setAttribute('type', 'table');
        feComponentTransfer.appendChild(feFuncB);
        this.feFuncB = feFuncB
    }
    SVGTritoneFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            var color1 = this.filterManager.effectElements[0].p.v;
            var color2 = this.filterManager.effectElements[1].p.v;
            var color3 = this.filterManager.effectElements[2].p.v;
            var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
            var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
            var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
            this.feFuncR.setAttribute('tableValues', tableR);
            this.feFuncG.setAttribute('tableValues', tableG);
            this.feFuncB.setAttribute('tableValues', tableB)
        }
    };

    function SVGProLevelsFilter(filter, filterManager) {
        this.filterManager = filterManager;
        var effectElements = this.filterManager.effectElements;
        var feComponentTransfer = createNS('feComponentTransfer');
        var feFuncR, feFuncG, feFuncB;
        if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) { this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer) }
        if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) { this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer) }
        if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) { this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer) }
        if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) { this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer) }
        if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
            feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
            filter.appendChild(feComponentTransfer);
            feComponentTransfer = createNS('feComponentTransfer')
        }
        if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
            feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
            filter.appendChild(feComponentTransfer);
            this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
            this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
            this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer)
        }
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
        var feFunc = createNS(type);
        feFunc.setAttribute('type', 'table');
        feComponentTransfer.appendChild(feFunc);
        return feFunc
    };
    SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
        var cnt = 0;
        var segments = 256;
        var perc;
        var min = Math.min(inputBlack, inputWhite);
        var max = Math.max(inputBlack, inputWhite);
        var table = Array.call(null, { length: segments });
        var colorValue;
        var pos = 0;
        var outputDelta = outputWhite - outputBlack;
        var inputDelta = inputWhite - inputBlack;
        while (cnt <= 256) {
            perc = cnt / 256;
            if (perc <= min) { colorValue = inputDelta < 0 ? outputWhite : outputBlack } else if (perc >= max) { colorValue = inputDelta < 0 ? outputBlack : outputWhite } else { colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma)) }
            table[pos++] = colorValue;
            cnt += 256 / (segments - 1)
        }
        return table.join(' ')
    };
    SVGProLevelsFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            var val, cnt, perc, bezier;
            var effectElements = this.filterManager.effectElements;
            if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
                val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
                this.feFuncRComposed.setAttribute('tableValues', val);
                this.feFuncGComposed.setAttribute('tableValues', val);
                this.feFuncBComposed.setAttribute('tableValues', val)
            }
            if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
                val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
                this.feFuncR.setAttribute('tableValues', val)
            }
            if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
                val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
                this.feFuncG.setAttribute('tableValues', val)
            }
            if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
                val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
                this.feFuncB.setAttribute('tableValues', val)
            }
            if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
                val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
                this.feFuncA.setAttribute('tableValues', val)
            }
        }
    };

    function SVGDropShadowEffect(filter, filterManager) {
        var filterSize = filterManager.container.globalData.renderConfig.filterSize
        filter.setAttribute('x', filterSize.x);
        filter.setAttribute('y', filterSize.y);
        filter.setAttribute('width', filterSize.width);
        filter.setAttribute('height', filterSize.height);
        this.filterManager = filterManager;
        var feGaussianBlur = createNS('feGaussianBlur');
        feGaussianBlur.setAttribute('in', 'SourceAlpha');
        feGaussianBlur.setAttribute('result', 'drop_shadow_1');
        feGaussianBlur.setAttribute('stdDeviation', '0');
        this.feGaussianBlur = feGaussianBlur;
        filter.appendChild(feGaussianBlur);
        var feOffset = createNS('feOffset');
        feOffset.setAttribute('dx', '25');
        feOffset.setAttribute('dy', '0');
        feOffset.setAttribute('in', 'drop_shadow_1');
        feOffset.setAttribute('result', 'drop_shadow_2');
        this.feOffset = feOffset;
        filter.appendChild(feOffset);
        var feFlood = createNS('feFlood');
        feFlood.setAttribute('flood-color', '#00ff00');
        feFlood.setAttribute('flood-opacity', '1');
        feFlood.setAttribute('result', 'drop_shadow_3');
        this.feFlood = feFlood;
        filter.appendChild(feFlood);
        var feComposite = createNS('feComposite');
        feComposite.setAttribute('in', 'drop_shadow_3');
        feComposite.setAttribute('in2', 'drop_shadow_2');
        feComposite.setAttribute('operator', 'in');
        feComposite.setAttribute('result', 'drop_shadow_4');
        filter.appendChild(feComposite);
        var feMerge = createNS('feMerge');
        filter.appendChild(feMerge);
        var feMergeNode;
        feMergeNode = createNS('feMergeNode');
        feMerge.appendChild(feMergeNode);
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in', 'SourceGraphic');
        this.feMergeNode = feMergeNode;
        this.feMerge = feMerge;
        this.originalNodeAdded = !1;
        feMerge.appendChild(feMergeNode)
    }
    SVGDropShadowEffect.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
            if (forceRender || this.filterManager.effectElements[4].p._mdf) { this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4) }
            if (forceRender || this.filterManager.effectElements[0].p._mdf) {
                var col = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)))
            }
            if (forceRender || this.filterManager.effectElements[1].p._mdf) { this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255) }
            if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var distance = this.filterManager.effectElements[3].p.v;
                var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
                var x = distance * Math.cos(angle);
                var y = distance * Math.sin(angle);
                this.feOffset.setAttribute('dx', x);
                this.feOffset.setAttribute('dy', y)
            }
        }
    };
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(filterElem, filterManager, elem) {
        this.initialized = !1;
        this.filterManager = filterManager;
        this.filterElem = filterElem;
        this.elem = elem;
        elem.matteElement = createNS('g');
        elem.matteElement.appendChild(elem.layerElement);
        elem.matteElement.appendChild(elem.transformedElement);
        elem.baseElement = elem.matteElement
    }
    SVGMatte3Effect.prototype.findSymbol = function(mask) {
        var i = 0,
            len = _svgMatteSymbols.length;
        while (i < len) {
            if (_svgMatteSymbols[i] === mask) { return _svgMatteSymbols[i] }
            i += 1
        }
        return null
    };
    SVGMatte3Effect.prototype.replaceInParent = function(mask, symbolId) {
        var parentNode = mask.layerElement.parentNode;
        if (!parentNode) { return }
        var children = parentNode.children;
        var i = 0,
            len = children.length;
        while (i < len) {
            if (children[i] === mask.layerElement) { break }
            i += 1
        }
        var nextChild;
        if (i <= len - 2) { nextChild = children[i + 1] }
        var useElem = createNS('use');
        useElem.setAttribute('href', '#' + symbolId);
        if (nextChild) { parentNode.insertBefore(useElem, nextChild) } else { parentNode.appendChild(useElem) }
    };
    SVGMatte3Effect.prototype.setElementAsMask = function(elem, mask) {
        if (!this.findSymbol(mask)) {
            var symbolId = createElementID();
            var masker = createNS('mask');
            masker.setAttribute('id', mask.layerId);
            masker.setAttribute('mask-type', 'alpha');
            _svgMatteSymbols.push(mask);
            var defs = elem.globalData.defs;
            defs.appendChild(masker);
            var symbol = createNS('symbol');
            symbol.setAttribute('id', symbolId);
            this.replaceInParent(mask, symbolId);
            symbol.appendChild(mask.layerElement);
            defs.appendChild(symbol);
            var useElem = createNS('use');
            useElem.setAttribute('href', '#' + symbolId);
            masker.appendChild(useElem);
            mask.data.hd = !1;
            mask.show()
        }
        elem.setMatte(mask.layerId)
    };
    SVGMatte3Effect.prototype.initialize = function() {
        var ind = this.filterManager.effectElements[0].p.v;
        var elements = this.elem.comp.elements;
        var i = 0,
            len = elements.length;
        while (i < len) {
            if (elements[i] && elements[i].data.ind === ind) { this.setElementAsMask(this.elem, elements[i]) }
            i += 1
        }
        this.initialized = !0
    };
    SVGMatte3Effect.prototype.renderFrame = function() { if (!this.initialized) { this.initialize() } };

    function SVGEffects(elem) {
        var i, len = elem.data.ef ? elem.data.ef.length : 0;
        var filId = createElementID();
        var fil = filtersFactory.createFilter(filId);
        var count = 0;
        this.filters = [];
        var filterManager;
        for (i = 0; i < len; i += 1) {
            filterManager = null;
            if (elem.data.ef[i].ty === 20) {
                count += 1;
                filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i])
            } else if (elem.data.ef[i].ty === 21) {
                count += 1;
                filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i])
            } else if (elem.data.ef[i].ty === 22) { filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]) } else if (elem.data.ef[i].ty === 23) {
                count += 1;
                filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i])
            } else if (elem.data.ef[i].ty === 24) {
                count += 1;
                filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i])
            } else if (elem.data.ef[i].ty === 25) {
                count += 1;
                filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i])
            } else if (elem.data.ef[i].ty === 28) { filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem) } else if (elem.data.ef[i].ty === 29) {
                count += 1;
                filterManager = new SVGGaussianBlurEffect(fil, elem.effectsManager.effectElements[i])
            }
            if (filterManager) { this.filters.push(filterManager) }
        }
        if (count) {
            elem.globalData.defs.appendChild(fil);
            elem.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')')
        }
        if (this.filters.length) { elem.addRenderableComponent(this) }
    }
    SVGEffects.prototype.renderFrame = function(_isFirstFrame) { var i, len = this.filters.length; for (i = 0; i < len; i += 1) { this.filters[i].renderFrame(_isFirstFrame) } };
    var animationManager = (function() {
        var moduleOb = {};
        var registeredAnimations = [];
        var initTime = 0;
        var len = 0;
        var playingAnimationsNum = 0;
        var _stopped = !0;
        var _isFrozen = !1;

        function removeElement(ev) {
            var i = 0;
            var animItem = ev.target;
            while (i < len) {
                if (registeredAnimations[i].animation === animItem) {
                    registeredAnimations.splice(i, 1);
                    i -= 1;
                    len -= 1;
                    if (!animItem.isPaused) { subtractPlayingCount() }
                }
                i += 1
            }
        }

        function registerAnimation(element, animationData) {
            if (!element) { return null }
            var i = 0;
            while (i < len) {
                if (registeredAnimations[i].elem == element && registeredAnimations[i].elem !== null) { return registeredAnimations[i].animation }
                i += 1
            }
            var animItem = new AnimationItem();
            setupAnimation(animItem, element);
            animItem.setData(element, animationData);
            return animItem
        }

        function getRegisteredAnimations() {
            var i, len = registeredAnimations.length;
            var animations = [];
            for (i = 0; i < len; i += 1) { animations.push(registeredAnimations[i].animation) }
            return animations
        }

        function addPlayingCount() {
            playingAnimationsNum += 1;
            activate()
        }

        function subtractPlayingCount() { playingAnimationsNum -= 1 }

        function setupAnimation(animItem, element) {
            animItem.addEventListener('destroy', removeElement);
            animItem.addEventListener('_active', addPlayingCount);
            animItem.addEventListener('_idle', subtractPlayingCount);
            registeredAnimations.push({ elem: element, animation: animItem });
            len += 1
        }

        function loadAnimation(params) {
            var animItem = new AnimationItem();
            setupAnimation(animItem, null);
            animItem.setParams(params);
            return animItem
        }

        function setSpeed(val, animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.setSpeed(val, animation) } }

        function setDirection(val, animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.setDirection(val, animation) } }

        function play(animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.play(animation) } }

        function resume(nowTime) {
            var elapsedTime = nowTime - initTime;
            var i;
            for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.advanceTime(elapsedTime) }
            initTime = nowTime;
            if (playingAnimationsNum && !_isFrozen) { window.requestAnimationFrame(resume) } else { _stopped = !0 }
        }

        function first(nowTime) {
            initTime = nowTime;
            window.requestAnimationFrame(resume)
        }

        function pause(animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.pause(animation) } }

        function goToAndStop(value, isFrame, animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.goToAndStop(value, isFrame, animation) } }

        function stop(animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.stop(animation) } }

        function togglePause(animation) { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.togglePause(animation) } }

        function destroy(animation) { var i; for (i = (len - 1); i >= 0; i -= 1) { registeredAnimations[i].animation.destroy(animation) } }

        function searchAnimations(animationData, standalone, renderer) {
            var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')));
            var i, len = animElements.length;
            for (i = 0; i < len; i += 1) {
                if (renderer) { animElements[i].setAttribute('data-bm-type', renderer) }
                registerAnimation(animElements[i], animationData)
            }
            if (standalone && len === 0) {
                if (!renderer) { renderer = 'svg' }
                var body = document.getElementsByTagName('body')[0];
                body.innerHTML = '';
                var div = createTag('div');
                div.style.width = '100%';
                div.style.height = '100%';
                div.setAttribute('data-bm-type', renderer);
                body.appendChild(div);
                registerAnimation(div, animationData)
            }
        }

        function resize() { var i; for (i = 0; i < len; i += 1) { registeredAnimations[i].animation.resize() } }

        function activate() {
            if (!_isFrozen && playingAnimationsNum) {
                if (_stopped) {
                    window.requestAnimationFrame(first);
                    _stopped = !1
                }
            }
        }

        function freeze() { _isFrozen = !0 }

        function unfreeze() {
            _isFrozen = !1;
            activate()
        }
        moduleOb.registerAnimation = registerAnimation;
        moduleOb.loadAnimation = loadAnimation;
        moduleOb.setSpeed = setSpeed;
        moduleOb.setDirection = setDirection;
        moduleOb.play = play;
        moduleOb.pause = pause;
        moduleOb.stop = stop;
        moduleOb.togglePause = togglePause;
        moduleOb.searchAnimations = searchAnimations;
        moduleOb.resize = resize;
        moduleOb.goToAndStop = goToAndStop;
        moduleOb.destroy = destroy;
        moduleOb.freeze = freeze;
        moduleOb.unfreeze = unfreeze;
        moduleOb.getRegisteredAnimations = getRegisteredAnimations;
        return moduleOb
    }());
    var AnimationItem = function() {
        this._cbs = [];
        this.name = '';
        this.path = '';
        this.isLoaded = !1;
        this.currentFrame = 0;
        this.currentRawFrame = 0;
        this.firstFrame = 0;
        this.totalFrames = 0;
        this.frameRate = 0;
        this.frameMult = 0;
        this.playSpeed = 1;
        this.playDirection = 1;
        this.playCount = 0;
        this.animationData = {};
        this.assets = [];
        this.isPaused = !0;
        this.autoplay = !1;
        this.loop = !0;
        this.renderer = null;
        this.animationID = createElementID();
        this.assetsPath = '';
        this.timeCompleted = 0;
        this.segmentPos = 0;
        this.subframeEnabled = subframeEnabled;
        this.segments = [];
        this._idle = !0;
        this._completedLoop = !1;
        this.projectInterface = ProjectInterface();
        this.imagePreloader = new ImagePreloader()
    };
    extendPrototype([BaseEvent], AnimationItem);
    AnimationItem.prototype.setParams = function(params) {
        if (params.context) { this.context = params.context }
        if (params.wrapper || params.container) { this.wrapper = params.wrapper || params.container }
        var animType = params.animType ? params.animType : params.renderer ? params.renderer : 'svg';
        switch (animType) {
            case 'canvas':
                this.renderer = new CanvasRenderer(this, params.rendererSettings);
                break;
            case 'svg':
                this.renderer = new SVGRenderer(this, params.rendererSettings);
                break;
            default:
                this.renderer = new HybridRenderer(this, params.rendererSettings);
                break
        }
        this.renderer.setProjectInterface(this.projectInterface);
        this.animType = animType;
        if (params.loop === '' || params.loop === null) {} else if (params.loop === !1) { this.loop = !1 } else if (params.loop === !0) { this.loop = !0 } else { this.loop = parseInt(params.loop) }
        this.autoplay = 'autoplay' in params ? params.autoplay : !0;
        this.name = params.name ? params.name : '';
        this.autoloadSegments = params.hasOwnProperty('autoloadSegments') ? params.autoloadSegments : !0;
        this.assetsPath = params.assetsPath;
        if (params.animationData) { this.configAnimation(params.animationData) } else if (params.path) {
            if (params.path.lastIndexOf('\\') !== -1) { this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1) } else { this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1) }
            this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
            assetLoader.load(params.path, this.configAnimation.bind(this), function() { this.trigger('data_failed') }.bind(this))
        }
        this.initialSegment = params.initialSegment
    };
    AnimationItem.prototype.setData = function(wrapper, animationData) {
        var params = { wrapper: wrapper, animationData: animationData ? (typeof animationData === "object") ? animationData : JSON.parse(animationData) : null };
        var wrapperAttributes = wrapper.attributes;
        params.path = wrapperAttributes.getNamedItem('data-animation-path') ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') ? wrapperAttributes.getNamedItem('data-bm-path').value : wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
        params.animType = wrapperAttributes.getNamedItem('data-anim-type') ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') ? wrapperAttributes.getNamedItem('bm-type').value : wrapperAttributes.getNamedItem('data-bm-renderer') ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : 'canvas';
        var loop = wrapperAttributes.getNamedItem('data-anim-loop') ? wrapperAttributes.getNamedItem('data-anim-loop').value : wrapperAttributes.getNamedItem('data-bm-loop') ? wrapperAttributes.getNamedItem('data-bm-loop').value : wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';
        if (loop === '') {} else if (loop === 'false') { params.loop = !1 } else if (loop === 'true') { params.loop = !0 } else { params.loop = parseInt(loop) }
        var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') ? wrapperAttributes.getNamedItem('data-anim-autoplay').value : wrapperAttributes.getNamedItem('data-bm-autoplay') ? wrapperAttributes.getNamedItem('data-bm-autoplay').value : wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : !0;
        params.autoplay = autoplay !== "false";
        params.name = wrapperAttributes.getNamedItem('data-name') ? wrapperAttributes.getNamedItem('data-name').value : wrapperAttributes.getNamedItem('data-bm-name') ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value : '';
        var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') ? wrapperAttributes.getNamedItem('data-anim-prerender').value : wrapperAttributes.getNamedItem('data-bm-prerender') ? wrapperAttributes.getNamedItem('data-bm-prerender').value : wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';
        if (prerender === 'false') { params.prerender = !1 }
        this.setParams(params)
    };
    AnimationItem.prototype.includeLayers = function(data) {
        if (data.op > this.animationData.op) {
            this.animationData.op = data.op;
            this.totalFrames = Math.floor(data.op - this.animationData.ip)
        }
        var layers = this.animationData.layers;
        var i, len = layers.length;
        var newLayers = data.layers;
        var j, jLen = newLayers.length;
        for (j = 0; j < jLen; j += 1) {
            i = 0;
            while (i < len) {
                if (layers[i].id == newLayers[j].id) { layers[i] = newLayers[j]; break }
                i += 1
            }
        }
        if (data.chars || data.fonts) {
            this.renderer.globalData.fontManager.addChars(data.chars);
            this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs)
        }
        if (data.assets) { len = data.assets.length; for (i = 0; i < len; i += 1) { this.animationData.assets.push(data.assets[i]) } }
        this.animationData.__complete = !1;
        dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
        this.renderer.includeLayers(data.layers);
        if (expressionsPlugin) { expressionsPlugin.initExpressions(this) }
        this.loadNextSegment()
    };
    AnimationItem.prototype.loadNextSegment = function() {
        var segments = this.animationData.segments;
        if (!segments || segments.length === 0 || !this.autoloadSegments) {
            this.trigger('data_ready');
            this.timeCompleted = this.totalFrames;
            return
        }
        var segment = segments.shift();
        this.timeCompleted = segment.time * this.frameRate;
        var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
        this.segmentPos += 1;
        assetLoader.load(segmentPath, this.includeLayers.bind(this), function() { this.trigger('data_failed') }.bind(this))
    };
    AnimationItem.prototype.loadSegments = function() {
        var segments = this.animationData.segments;
        if (!segments) { this.timeCompleted = this.totalFrames }
        this.loadNextSegment()
    };
    AnimationItem.prototype.imagesLoaded = function() {
        this.trigger('loaded_images');
        this.checkLoaded()
    }
    AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath);
        this.imagePreloader.setPath(this.path);
        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }
    AnimationItem.prototype.configAnimation = function(animData) {
        if (!this.renderer) { return }
        try {
            this.animationData = animData;
            if (this.initialSegment) {
                this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
                this.firstFrame = Math.round(this.initialSegment[0])
            } else {
                this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
                this.firstFrame = Math.round(this.animationData.ip)
            }
            this.renderer.configAnimation(animData);
            if (!animData.assets) { animData.assets = [] }
            this.assets = this.animationData.assets;
            this.frameRate = this.animationData.fr;
            this.frameMult = this.animationData.fr / 1000;
            this.renderer.searchExtraCompositions(animData.assets);
            this.trigger('config_ready');
            this.preloadImages();
            this.loadSegments();
            this.updaFrameModifier();
            this.waitForFontsLoaded()
        } catch (error) { this.triggerConfigError(error) }
    };
    AnimationItem.prototype.waitForFontsLoaded = function() {
        if (!this.renderer) { return }
        if (this.renderer.globalData.fontManager.loaded()) { this.checkLoaded() } else { setTimeout(this.waitForFontsLoaded.bind(this), 20) }
    }
    AnimationItem.prototype.checkLoaded = function() {
        if (!this.isLoaded && this.renderer.globalData.fontManager.loaded() && (this.imagePreloader.loaded() || this.renderer.rendererType !== 'canvas')) {
            this.isLoaded = !0;
            dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
            if (expressionsPlugin) { expressionsPlugin.initExpressions(this) }
            this.renderer.initItems();
            setTimeout(function() { this.trigger('DOMLoaded') }.bind(this), 0);
            this.gotoFrame();
            if (this.autoplay) { this.play() }
        }
    };
    AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() };
    AnimationItem.prototype.setSubframe = function(flag) { this.subframeEnabled = flag ? !0 : !1 };
    AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
        if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) { this.currentFrame = this.timeCompleted }
        this.trigger('enterFrame');
        this.renderFrame()
    };
    AnimationItem.prototype.renderFrame = function() {
        if (this.isLoaded === !1) { return }
        try { this.renderer.renderFrame(this.currentFrame + this.firstFrame) } catch (error) { this.triggerRenderFrameError(error) }
    };
    AnimationItem.prototype.play = function(name) {
        if (name && this.name != name) { return }
        if (this.isPaused === !0) {
            this.isPaused = !1;
            if (this._idle) {
                this._idle = !1;
                this.trigger('_active')
            }
        }
    };
    AnimationItem.prototype.pause = function(name) {
        if (name && this.name != name) { return }
        if (this.isPaused === !1) {
            this.isPaused = !0;
            this._idle = !0;
            this.trigger('_idle')
        }
    };
    AnimationItem.prototype.togglePause = function(name) {
        if (name && this.name != name) { return }
        if (this.isPaused === !0) { this.play() } else { this.pause() }
    };
    AnimationItem.prototype.stop = function(name) {
        if (name && this.name != name) { return }
        this.pause();
        this.playCount = 0;
        this._completedLoop = !1;
        this.setCurrentRawFrameValue(0)
    };
    AnimationItem.prototype.goToAndStop = function(value, isFrame, name) {
        if (name && this.name != name) { return }
        if (isFrame) { this.setCurrentRawFrameValue(value) } else { this.setCurrentRawFrameValue(value * this.frameModifier) }
        this.pause()
    };
    AnimationItem.prototype.goToAndPlay = function(value, isFrame, name) {
        this.goToAndStop(value, isFrame, name);
        this.play()
    };
    AnimationItem.prototype.advanceTime = function(value) {
        if (this.isPaused === !0 || this.isLoaded === !1) { return }
        var nextValue = this.currentRawFrame + value * this.frameModifier;
        var _isComplete = !1;
        if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
            if (!this.loop || this.playCount === this.loop) {
                if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
                    _isComplete = !0;
                    nextValue = this.totalFrames - 1
                }
            } else if (nextValue >= this.totalFrames) {
                this.playCount += 1;
                if (!this.checkSegments(nextValue % this.totalFrames)) {
                    this.setCurrentRawFrameValue(nextValue % this.totalFrames);
                    this._completedLoop = !0;
                    this.trigger('loopComplete')
                }
            } else { this.setCurrentRawFrameValue(nextValue) }
        } else if (nextValue < 0) {
            if (!this.checkSegments(nextValue % this.totalFrames)) {
                if (this.loop && !(this.playCount-- <= 0 && this.loop !== !0)) { this.setCurrentRawFrameValue(this.totalFrames + (nextValue % this.totalFrames)); if (!this._completedLoop) { this._completedLoop = !0 } else { this.trigger('loopComplete') } } else {
                    _isComplete = !0;
                    nextValue = 0
                }
            }
        } else { this.setCurrentRawFrameValue(nextValue) }
        if (_isComplete) {
            this.setCurrentRawFrameValue(nextValue);
            this.pause();
            this.trigger('complete')
        }
    };
    AnimationItem.prototype.adjustSegment = function(arr, offset) {
        this.playCount = 0;
        if (arr[1] < arr[0]) {
            if (this.frameModifier > 0) { if (this.playSpeed < 0) { this.setSpeed(-this.playSpeed) } else { this.setDirection(-1) } }
            this.timeCompleted = this.totalFrames = arr[0] - arr[1];
            this.firstFrame = arr[1];
            this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset)
        } else if (arr[1] > arr[0]) {
            if (this.frameModifier < 0) { if (this.playSpeed < 0) { this.setSpeed(-this.playSpeed) } else { this.setDirection(1) } }
            this.timeCompleted = this.totalFrames = arr[1] - arr[0];
            this.firstFrame = arr[0];
            this.setCurrentRawFrameValue(0.001 + offset)
        }
        this.trigger('segmentStart')
    };
    AnimationItem.prototype.setSegment = function(init, end) {
        var pendingFrame = -1;
        if (this.isPaused) { if (this.currentRawFrame + this.firstFrame < init) { pendingFrame = init } else if (this.currentRawFrame + this.firstFrame > end) { pendingFrame = end - init } }
        this.firstFrame = init;
        this.timeCompleted = this.totalFrames = end - init;
        if (pendingFrame !== -1) { this.goToAndStop(pendingFrame, !0) }
    };
    AnimationItem.prototype.playSegments = function(arr, forceFlag) {
        if (forceFlag) { this.segments.length = 0 }
        if (typeof arr[0] === 'object') { var i, len = arr.length; for (i = 0; i < len; i += 1) { this.segments.push(arr[i]) } } else { this.segments.push(arr) }
        if (this.segments.length && forceFlag) { this.adjustSegment(this.segments.shift(), 0) }
        if (this.isPaused) { this.play() }
    };
    AnimationItem.prototype.resetSegments = function(forceFlag) {
        this.segments.length = 0;
        this.segments.push([this.animationData.ip, this.animationData.op]);
        if (forceFlag) { this.checkSegments(0) }
    };
    AnimationItem.prototype.checkSegments = function(offset) {
        if (this.segments.length) { this.adjustSegment(this.segments.shift(), offset); return !0 }
        return !1
    };
    AnimationItem.prototype.destroy = function(name) {
        if ((name && this.name != name) || !this.renderer) { return }
        this.renderer.destroy();
        this.imagePreloader.destroy();
        this.trigger('destroy');
        this._cbs = null;
        this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null;
        this.renderer = null
    };
    AnimationItem.prototype.setCurrentRawFrameValue = function(value) {
        this.currentRawFrame = value;
        this.gotoFrame()
    };
    AnimationItem.prototype.setSpeed = function(val) {
        this.playSpeed = val;
        this.updaFrameModifier()
    };
    AnimationItem.prototype.setDirection = function(val) {
        this.playDirection = val < 0 ? -1 : 1;
        this.updaFrameModifier()
    };
    AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection };
    AnimationItem.prototype.getPath = function() { return this.path };
    AnimationItem.prototype.getAssetsPath = function(assetData) {
        var path = '';
        if (assetData.e) { path = assetData.p } else if (this.assetsPath) {
            var imagePath = assetData.p;
            if (imagePath.indexOf('images/') !== -1) { imagePath = imagePath.split('/')[1] }
            path = this.assetsPath + imagePath
        } else {
            path = this.path;
            path += assetData.u ? assetData.u : '';
            path += assetData.p
        }
        return path
    };
    AnimationItem.prototype.getAssetData = function(id) {
        var i = 0,
            len = this.assets.length;
        while (i < len) {
            if (id == this.assets[i].id) { return this.assets[i] }
            i += 1
        }
    };
    AnimationItem.prototype.hide = function() { this.renderer.hide() };
    AnimationItem.prototype.show = function() { this.renderer.show() };
    AnimationItem.prototype.getDuration = function(isFrame) { return isFrame ? this.totalFrames : this.totalFrames / this.frameRate };
    AnimationItem.prototype.trigger = function(name) {
        if (this._cbs && this._cbs[name]) {
            switch (name) {
                case 'enterFrame':
                    this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case 'loopComplete':
                    this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
                    break;
                case 'complete':
                    this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
                    break;
                case 'segmentStart':
                    this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
                    break;
                case 'destroy':
                    this.triggerEvent(name, new BMDestroyEvent(name, this));
                    break;
                default:
                    this.triggerEvent(name)
            }
        }
        if (name === 'enterFrame' && this.onEnterFrame) { this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult)) }
        if (name === 'loopComplete' && this.onLoopComplete) { this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult)) }
        if (name === 'complete' && this.onComplete) { this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult)) }
        if (name === 'segmentStart' && this.onSegmentStart) { this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames)) }
        if (name === 'destroy' && this.onDestroy) { this.onDestroy.call(this, new BMDestroyEvent(name, this)) }
    };
    AnimationItem.prototype.triggerRenderFrameError = function(nativeError) {
        var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
        this.triggerEvent('error', error);
        if (this.onError) { this.onError.call(this, error) }
    }
    AnimationItem.prototype.triggerConfigError = function(nativeError) {
        var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
        this.triggerEvent('error', error);
        if (this.onError) { this.onError.call(this, error) }
    }

    function EffectsManager() {}
    var lottie = {};
    var _isFrozen = !1;

    function setLocationHref(href) { locationHref = href }

    function searchAnimations() { if (standalone === !0) { animationManager.searchAnimations(animationData, standalone, renderer) } else { animationManager.searchAnimations() } }

    function setSubframeRendering(flag) { subframeEnabled = flag }

    function loadAnimation(params) {
        if (standalone === !0) { params.animationData = JSON.parse(animationData) }
        return animationManager.loadAnimation(params)
    }

    function setQuality(value) {
        if (typeof value === 'string') {
            switch (value) {
                case 'high':
                    defaultCurveSegments = 200;
                    break;
                case 'medium':
                    defaultCurveSegments = 50;
                    break;
                case 'low':
                    defaultCurveSegments = 10;
                    break
            }
        } else if (!isNaN(value) && value > 1) { defaultCurveSegments = value }
        if (defaultCurveSegments >= 50) { roundValues(!1) } else { roundValues(!0) }
    }

    function inBrowser() { return typeof navigator !== 'undefined' }

    function installPlugin(type, plugin) { if (type === 'expressions') { expressionsPlugin = plugin } }

    function getFactory(name) {
        switch (name) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix
        }
    }
    lottie.play = animationManager.play;
    lottie.pause = animationManager.pause;
    lottie.setLocationHref = setLocationHref;
    lottie.togglePause = animationManager.togglePause;
    lottie.setSpeed = animationManager.setSpeed;
    lottie.setDirection = animationManager.setDirection;
    lottie.stop = animationManager.stop;
    lottie.searchAnimations = searchAnimations;
    lottie.registerAnimation = animationManager.registerAnimation;
    lottie.loadAnimation = loadAnimation;
    lottie.setSubframeRendering = setSubframeRendering;
    lottie.resize = animationManager.resize;
    lottie.goToAndStop = animationManager.goToAndStop;
    lottie.destroy = animationManager.destroy;
    lottie.setQuality = setQuality;
    lottie.inBrowser = inBrowser;
    lottie.installPlugin = installPlugin;
    lottie.freeze = animationManager.freeze;
    lottie.unfreeze = animationManager.unfreeze;
    lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
    lottie.__getFactory = getFactory;
    lottie.version = '5.6.6';

    function checkReady() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            searchAnimations()
        }
    }

    function getQueryVariable(variable) { var vars = queryString.split('&'); for (var i = 0; i < vars.length; i++) { var pair = vars[i].split('='); if (decodeURIComponent(pair[0]) == variable) { return decodeURIComponent(pair[1]) } } }
    var standalone = '__[STANDALONE]__';
    var animationData = '__[ANIMATIONDATA]__';
    var renderer = '';
    if (standalone) {
        var scripts = document.getElementsByTagName('script');
        var index = scripts.length - 1;
        var myScript = scripts[index] || { src: '' };
        var queryString = myScript.src.replace(/^[^\?]+\??/, '');
        renderer = getQueryVariable('renderer')
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie
}));
(function(factory) { if (typeof define === 'function' && define.amd) { define([], factory) } else if (typeof exports === 'object') { module.exports = factory() } else { window.wNumb = factory() } }(function() {
    'use strict';
    var FormatOptions = ['decimals', 'thousand', 'mark', 'prefix', 'suffix', 'encoder', 'decoder', 'negativeBefore', 'negative', 'edit', 'undo'];

    function strReverse(a) { return a.split('').reverse().join('') }

    function strStartsWith(input, match) { return input.substring(0, match.length) === match }

    function strEndsWith(input, match) { return input.slice(-1 * match.length) === match }

    function throwEqualError(F, a, b) { if ((F[a] || F[b]) && (F[a] === F[b])) { throw new Error(a) } }

    function isValidNumber(input) { return typeof input === 'number' && isFinite(input) }

    function toFixed(value, exp) {
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        value = value.toString().split('e');
        return (+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))).toFixed(exp)
    }

    function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
        var originalInput = input,
            inputIsNegative, inputPieces, inputBase, inputDecimals = '',
            output = '';
        if (encoder) { input = encoder(input) }
        if (!isValidNumber(input)) { return !1 }
        if (decimals !== !1 && parseFloat(input.toFixed(decimals)) === 0) { input = 0 }
        if (input < 0) {
            inputIsNegative = !0;
            input = Math.abs(input)
        }
        if (decimals !== !1) { input = toFixed(input, decimals) }
        input = input.toString();
        if (input.indexOf('.') !== -1) {
            inputPieces = input.split('.');
            inputBase = inputPieces[0];
            if (mark) { inputDecimals = mark + inputPieces[1] }
        } else { inputBase = input }
        if (thousand) {
            inputBase = strReverse(inputBase).match(/.{1,3}/g);
            inputBase = strReverse(inputBase.join(strReverse(thousand)))
        }
        if (inputIsNegative && negativeBefore) { output += negativeBefore }
        if (prefix) { output += prefix }
        if (inputIsNegative && negative) { output += negative }
        output += inputBase;
        output += inputDecimals;
        if (suffix) { output += suffix }
        if (edit) { output = edit(output, originalInput) }
        return output
    }

    function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
        var originalInput = input,
            inputIsNegative, output = '';
        if (undo) { input = undo(input) }
        if (!input || typeof input !== 'string') { return !1 }
        if (negativeBefore && strStartsWith(input, negativeBefore)) {
            input = input.replace(negativeBefore, '');
            inputIsNegative = !0
        }
        if (prefix && strStartsWith(input, prefix)) { input = input.replace(prefix, '') }
        if (negative && strStartsWith(input, negative)) {
            input = input.replace(negative, '');
            inputIsNegative = !0
        }
        if (suffix && strEndsWith(input, suffix)) { input = input.slice(0, -1 * suffix.length) }
        if (thousand) { input = input.split(thousand).join('') }
        if (mark) { input = input.replace(mark, '.') }
        if (inputIsNegative) { output += '-' }
        output += input;
        output = output.replace(/[^0-9\.\-.]/g, '');
        if (output === '') { return !1 }
        output = Number(output);
        if (decoder) { output = decoder(output) }
        if (!isValidNumber(output)) { return !1 }
        return output
    }

    function validate(inputOptions) {
        var i, optionName, optionValue, filteredOptions = {};
        if (inputOptions.suffix === undefined) { inputOptions.suffix = inputOptions.postfix }
        for (i = 0; i < FormatOptions.length; i += 1) {
            optionName = FormatOptions[i];
            optionValue = inputOptions[optionName];
            if (optionValue === undefined) { if (optionName === 'negative' && !filteredOptions.negativeBefore) { filteredOptions[optionName] = '-' } else if (optionName === 'mark' && filteredOptions.thousand !== '.') { filteredOptions[optionName] = '.' } else { filteredOptions[optionName] = !1 } } else if (optionName === 'decimals') { if (optionValue >= 0 && optionValue < 8) { filteredOptions[optionName] = optionValue } else { throw new Error(optionName) } } else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') { if (typeof optionValue === 'function') { filteredOptions[optionName] = optionValue } else { throw new Error(optionName) } } else { if (typeof optionValue === 'string') { filteredOptions[optionName] = optionValue } else { throw new Error(optionName) } }
        }
        throwEqualError(filteredOptions, 'mark', 'thousand');
        throwEqualError(filteredOptions, 'prefix', 'negative');
        throwEqualError(filteredOptions, 'prefix', 'negativeBefore');
        return filteredOptions
    }

    function passAll(options, method, input) {
        var i, args = [];
        for (i = 0; i < FormatOptions.length; i += 1) { args.push(options[FormatOptions[i]]) }
        args.push(input);
        return method.apply('', args)
    }

    function wNumb(options) {
        if (!(this instanceof wNumb)) { return new wNumb(options) }
        if (typeof options !== "object") { return }
        options = validate(options);
        this.to = function(input) { return passAll(options, formatTo, input) };
        this.from = function(input) { return passAll(options, formatFrom, input) }
    }
    return wNumb
})); /*! nouislider - 14.0.1 - 6/21/2019 */
(function(factory) { if (typeof define === "function" && define.amd) { define([], factory) } else if (typeof exports === "object") { module.exports = factory() } else { window.noUiSlider = factory() } })(function() {
    "use strict";
    var VERSION = "14.0.1";

    function isValidFormatter(entry) { return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function" }

    function removeElement(el) { el.parentElement.removeChild(el) }

    function isSet(value) { return value !== null && value !== undefined }

    function preventDefault(e) { e.preventDefault() }

    function unique(array) { return array.filter(function(a) { return !this[a] ? (this[a] = !0) : !1 }, {}) }

    function closest(value, to) { return Math.round(value / to) * to }

    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) { pageOffset.x = 0 }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft
    }

    function isNumeric(a) { return typeof a === "number" && !isNaN(a) && isFinite(a) }

    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() { removeClass(element, className) }, duration)
        }
    }

    function limit(a) { return Math.max(Math.min(a, 100), 0) }

    function asArray(a) { return Array.isArray(a) ? a : [a] }

    function countDecimals(numStr) { numStr = String(numStr); var pieces = numStr.split("."); return pieces.length > 1 ? pieces[1].length : 0 }

    function addClass(el, className) { if (el.classList) { el.classList.add(className) } else { el.className += " " + className } }

    function removeClass(el, className) { if (el.classList) { el.classList.remove(className) } else { el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ") } }

    function hasClass(el, className) { return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className) }

    function getPageOffset(doc) { var supportPageOffset = window.pageXOffset !== undefined; var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat"; var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft; var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop; return { x: x, y: y } }

    function getActions() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } }

    function getSupportsPassive() {
        var supportsPassive = !1;
        try {
            var opts = Object.defineProperty({}, "passive", { get: function() { supportsPassive = !0 } });
            window.addEventListener("test", null, opts)
        } catch (e) {}
        return supportsPassive
    }

    function getSupportsTouchActionNone() { return window.CSS && CSS.supports && CSS.supports("touch-action", "none") }

    function subRangeRatio(pa, pb) { return 100 / (pb - pa) }

    function fromPercentage(range, value) { return (value * 100) / (range[1] - range[0]) }

    function toPercentage(range, value) { return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]) }

    function isPercentage(range, value) { return (value * (range[1] - range[0])) / 100 + range[0] }

    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) { j += 1 }
        return j
    }

    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) { return 100 }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb)
    }

    function fromStepping(xVal, xPct, value) {
        if (value >= 100) { return xVal.slice(-1)[0] }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb))
    }

    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) { return value }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        if (snap) {
            if (value - a > (b - a) / 2) { return b }
            return a
        }
        if (!xSteps[j - 1]) { return value }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1])
    }

    function handleEntryPoint(index, value, that) {
        var percentage;
        if (typeof value === "number") { value = [value] }
        if (!Array.isArray(value)) { throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.") }
        if (index === "min") { percentage = 0 } else if (index === "max") { percentage = 100 } else { percentage = parseFloat(index) }
        if (!isNumeric(percentage) || !isNumeric(value[0])) { throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.") }
        that.xPct.push(percentage);
        that.xVal.push(value[0]);
        if (!percentage) { if (!isNaN(value[1])) { that.xSteps[0] = value[1] } } else { that.xSteps.push(isNaN(value[1]) ? !1 : value[1]) }
        that.xHighestCompleteStep.push(0)
    }

    function handleStepPoint(i, n, that) {
        if (!n) { return }
        if (that.xVal[i] === that.xVal[i + 1]) { that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i]; return }
        that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
        that.xHighestCompleteStep[i] = step
    }

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || !1];
        this.xNumSteps = [!1];
        this.xHighestCompleteStep = [];
        this.snap = snap;
        var index;
        var ordered = [];
        for (index in entry) { if (entry.hasOwnProperty(index)) { ordered.push([entry[index], index]) } }
        if (ordered.length && typeof ordered[0][0] === "object") { ordered.sort(function(a, b) { return a[0][0] - b[0][0] }) } else { ordered.sort(function(a, b) { return a[0] - b[0] }) }
        for (index = 0; index < ordered.length; index++) { handleEntryPoint(ordered[index][1], ordered[index][0], this) }
        this.xNumSteps = this.xSteps.slice(0);
        for (index = 0; index < this.xNumSteps.length; index++) { handleStepPoint(index, this.xNumSteps[index], this) }
    }
    Spectrum.prototype.getMargin = function(value) {
        var step = this.xNumSteps[0];
        if (step && (value / step) % 1 !== 0) { throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.") }
        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : !1
    };
    Spectrum.prototype.toStepping = function(value) { value = toStepping(this.xVal, this.xPct, value); return value };
    Spectrum.prototype.fromStepping = function(value) { return fromStepping(this.xVal, this.xPct, value) };
    Spectrum.prototype.getStep = function(value) { value = getStep(this.xPct, this.xSteps, this.snap, value); return value };
    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
        var j = getJ(value, this.xPct);
        if (value === 100 || (isDown && value === this.xPct[j - 1])) { j = Math.max(j - 1, 1) }
        return (this.xVal[j] - this.xVal[j - 1]) / size
    };
    Spectrum.prototype.getNearbySteps = function(value) { var j = getJ(value, this.xPct); return { stepBefore: { startValue: this.xVal[j - 2], step: this.xNumSteps[j - 2], highestStep: this.xHighestCompleteStep[j - 2] }, thisStep: { startValue: this.xVal[j - 1], step: this.xNumSteps[j - 1], highestStep: this.xHighestCompleteStep[j - 1] }, stepAfter: { startValue: this.xVal[j], step: this.xNumSteps[j], highestStep: this.xHighestCompleteStep[j] } } };
    Spectrum.prototype.countStepDecimals = function() { var stepDecimals = this.xNumSteps.map(countDecimals); return Math.max.apply(null, stepDecimals) };
    Spectrum.prototype.convert = function(value) { return this.getStep(this.toStepping(value)) };
    var defaultFormatter = { to: function(value) { return value !== undefined && value.toFixed(2) }, from: Number };

    function validateFormat(entry) {
        if (isValidFormatter(entry)) { return !0 }
        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.")
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) { throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.") }
        parsed.singleStep = entry
    }

    function testRange(parsed, entry) {
        if (typeof entry !== "object" || Array.isArray(entry)) { throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.") }
        if (entry.min === undefined || entry.max === undefined) { throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.") }
        if (entry.min === entry.max) { throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.") }
        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep)
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);
        if (!Array.isArray(entry) || !entry.length) { throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.") }
        parsed.handles = entry.length;
        parsed.start = entry
    }

    function testSnap(parsed, entry) { parsed.snap = entry; if (typeof entry !== "boolean") { throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.") } }

    function testAnimate(parsed, entry) { parsed.animate = entry; if (typeof entry !== "boolean") { throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.") } }

    function testAnimationDuration(parsed, entry) { parsed.animationDuration = entry; if (typeof entry !== "number") { throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.") } }

    function testConnect(parsed, entry) {
        var connect = [!1];
        var i;
        if (entry === "lower") { entry = [!0, !1] } else if (entry === "upper") { entry = [!1, !0] }
        if (entry === !0 || entry === !1) {
            for (i = 1; i < parsed.handles; i++) { connect.push(entry) }
            connect.push(!1)
        } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) { throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.") } else { connect = entry }
        parsed.connect = connect
    }

    function testOrientation(parsed, entry) {
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.")
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) { throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.") }
        if (entry === 0) { return }
        parsed.margin = parsed.spectrum.getMargin(entry);
        if (!parsed.margin) { throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.") }
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) { throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.") }
        parsed.limit = parsed.spectrum.getMargin(entry);
        if (!parsed.limit || parsed.handles < 2) { throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.") }
    }

    function testPadding(parsed, entry) {
        if (!isNumeric(entry) && !Array.isArray(entry)) { throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.") }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) { throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.") }
        if (entry === 0) { return }
        if (!Array.isArray(entry)) { entry = [entry, entry] }
        parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];
        if (parsed.padding[0] === !1 || parsed.padding[1] === !1) { throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.") }
        if (parsed.padding[0] < 0 || parsed.padding[1] < 0) { throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).") }
        if (parsed.padding[0] + parsed.padding[1] > 100) { throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.") }
    }

    function testDirection(parsed, entry) {
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.")
        }
    }

    function testBehaviour(parsed, entry) {
        if (typeof entry !== "string") { throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.") }
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) { throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles") }
            testMargin(parsed, parsed.start[1] - parsed.start[0])
        }
        if (unconstrained && (parsed.margin || parsed.limit)) { throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit") }
        parsed.events = { tap: tap || snap, drag: drag, fixed: fixed, snap: snap, hover: hover, unconstrained: unconstrained }
    }

    function testTooltips(parsed, entry) {
        if (entry === !1) { return }
        if (entry === !0) { parsed.tooltips = []; for (var i = 0; i < parsed.handles; i++) { parsed.tooltips.push(!0) } } else {
            parsed.tooltips = asArray(entry);
            if (parsed.tooltips.length !== parsed.handles) { throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.") }
            parsed.tooltips.forEach(function(formatter) { if (typeof formatter !== "boolean" && (typeof formatter !== "object" || typeof formatter.to !== "function")) { throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.") } })
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry)
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry)
    }

    function testKeyboardSupport(parsed, entry) { parsed.keyboardSupport = entry; if (typeof entry !== "boolean") { throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.") } }

    function testDocumentElement(parsed, entry) { parsed.documentElement = entry }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== !1) { throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.") }
        parsed.cssPrefix = entry
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") { throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.") }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) { continue }
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key]
            }
        } else { parsed.cssClasses = entry }
    }

    function testOptions(options) {
        var parsed = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: defaultFormatter, format: defaultFormatter };
        var tests = { step: { r: !1, t: testStep }, start: { r: !0, t: testStart }, connect: { r: !0, t: testConnect }, direction: { r: !0, t: testDirection }, snap: { r: !1, t: testSnap }, animate: { r: !1, t: testAnimate }, animationDuration: { r: !1, t: testAnimationDuration }, range: { r: !0, t: testRange }, orientation: { r: !1, t: testOrientation }, margin: { r: !1, t: testMargin }, limit: { r: !1, t: testLimit }, padding: { r: !1, t: testPadding }, behaviour: { r: !0, t: testBehaviour }, ariaFormat: { r: !1, t: testAriaFormat }, format: { r: !1, t: testFormat }, tooltips: { r: !1, t: testTooltips }, keyboardSupport: { r: !0, t: testKeyboardSupport }, documentElement: { r: !1, t: testDocumentElement }, cssPrefix: { r: !0, t: testCssPrefix }, cssClasses: { r: !0, t: testCssClasses } };
        var defaults = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" } };
        if (options.format && !options.ariaFormat) { options.ariaFormat = options.format }
        Object.keys(tests).forEach(function(name) {
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) { throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.") }
                return !0
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name])
        });
        parsed.pips = options.pips;
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        var styles = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed
    }

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        var scope_Self;
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) { addClass(div, className) }
            addTarget.appendChild(div);
            return div
        }

        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", handleNumber);
            if (options.keyboardSupport) {
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function(event) { return eventKeydown(event, handleNumber) })
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) { addClass(handle, options.cssClasses.handleLower) } else if (handleNumber === options.handles - 1) { addClass(handle, options.cssClasses.handleUpper) }
            return origin
        }

        function addConnect(base, add) {
            if (!add) { return !1 }
            return addNodeTo(base, options.cssClasses.connect)
        }

        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            for (var i = 0; i < options.handles; i++) {
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]))
            }
        }

        function addSlider(addTarget) {
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) { addClass(addTarget, options.cssClasses.ltr) } else { addClass(addTarget, options.cssClasses.rtl) }
            if (options.ort === 0) { addClass(addTarget, options.cssClasses.horizontal) } else { addClass(addTarget, options.cssClasses.vertical) }
            return addNodeTo(addTarget, options.cssClasses.base)
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) { return !1 }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip)
        }

        function isSliderDisabled() { return scope_Target.hasAttribute("disabled") }

        function isHandleDisabled(handleNumber) { var handleOrigin = scope_Handles[handleNumber]; return handleOrigin.hasAttribute("disabled") }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function(tooltip) { if (tooltip) { removeElement(tooltip) } });
                scope_Tooltips = null
            }
        }

        function tooltips() {
            removeTooltips();
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update.tooltips", function(values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) { return }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== !0) { formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]) }
                scope_Tooltips[handleNumber].innerHTML = formattedValue
            })
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, !0, !0, !0);
                    var max = checkHandlePosition(scope_Locations, index, 100, !0, !0, !0);
                    var now = positions[index];
                    var text = options.ariaFormat.to(unencoded[index]);
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text)
                })
            })
        }

        function getGroup(mode, values, stepped) {
            if (mode === "range" || mode === "steps") { return scope_Spectrum.xVal }
            if (mode === "count") {
                if (values < 2) { throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.") }
                var interval = values - 1;
                var spread = 100 / interval;
                values = [];
                while (interval--) { values[interval] = interval * spread }
                values.push(100);
                mode = "positions"
            }
            if (mode === "positions") { return values.map(function(value) { return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value) }) }
            if (mode === "values") {
                if (stepped) { return values.map(function(value) { return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value))) }) }
                return values
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) { return (value + increment).toFixed(7) / 1 }
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = !1;
            var ignoreLast = !1;
            var prevPct = 0;
            group = unique(group.slice().sort(function(a, b) { return a - b }));
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = !0
            }
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = !0
            }
            group.forEach(function(current, index) {
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";
                if (isSteps) { step = scope_Spectrum.xNumSteps[index] }
                if (!step) { step = high - low }
                if (low === !1 || high === undefined) { return }
                step = Math.max(step, 0.0000001);
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / density;
                    realSteps = Math.round(steps);
                    stepSize = pctDifference / realSteps;
                    for (q = 1; q <= realSteps; q += 1) {
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0]
                    }
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;
                    if (!index && ignoreFirst) { type = 0 }
                    if (!(i === high && ignoreLast)) { indexes[newPct.toFixed(5)] = [i, type] }
                    prevPct = newPct
                }
            });
            return indexes
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");
            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) { var a = source === options.cssClasses.value; var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses; var sizeClasses = a ? valueSizeClasses : markerSizeClasses; return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type] }

            function addSpread(offset, value, type) {
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === PIPS_NONE) { return }
                var node = addNodeTo(element, !1);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, !1);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value)
                }
            }
            Object.keys(spread).forEach(function(offset) { addSpread(offset, spread[offset][0], spread[offset][1]) });
            return element
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null
            }
        }

        function pips(grid) {
            removePips();
            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || !1;
            var values = grid.values || !1;
            var stepped = grid.stepped || !1;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || { to: Math.round };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips
        }

        function baseSize() { var rect = scope_Base.getBoundingClientRect(); var alt = "offset" + ["Width", "Height"][options.ort]; return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt] }

        function attachEvent(events, element, callback, data) {
            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);
                if (!e) { return !1 }
                if (isSliderDisabled() && !data.doNotReject) { return !1 }
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) { return !1 }
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) { return !1 }
                if (data.hover && e.buttons) { return !1 }
                if (!supportsPassive) { e.preventDefault() }
                e.calcPoint = e.points[options.ort];
                callback(e, data)
            };
            var methods = [];
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: !0 } : !1);
                methods.push([eventName, method])
            });
            return methods
        }

        function fixEvent(e, pageOffset, eventTarget) {
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x;
            var y;
            if (e.type.indexOf("MSPointer") === 0) { pointer = !0 }
            if (touch) {
                var isTouchOnTarget = function(checkTouch) { return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) };
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    if (targetTouches.length > 1) { return !1 }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY
                } else {
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    if (!targetTouch) { return !1 }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer;
            return e
        }

        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal
        }

        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = !1;
            scope_Handles.forEach(function(handle, index) {
                if (isHandleDisabled(index)) { return }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle
                }
            });
            return handleNumber
        }

        function documentLeave(event, data) { if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) { eventEnd(event, data) } }

        function eventMove(event, data) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) { return eventEnd(event, data) }
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers)
        }

        function eventEnd(event, data) {
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1
            }
            data.listeners.forEach(function(c) { scope_DocumentElement.removeEventListener(c[0], c[1]) });
            if (scope_ActiveHandlesCount === 0) {
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault)
                }
            }
            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber)
            })
        }

        function eventStart(event, data) {
            if (data.handleNumbers.some(isHandleDisabled)) { return !1 }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                addClass(handle, options.cssClasses.active)
            }
            event.stopPropagation();
            var listeners = [];
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, { target: event.target, handle: handle, listeners: listeners, startCalcPoint: event.calcPoint, baseSize: baseSize(), pageOffset: event.pageOffset, handleNumbers: data.handleNumbers, buttonsProperty: event.buttons, locations: scope_Locations.slice() });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, { target: event.target, handle: handle, listeners: listeners, doNotReject: !0, handleNumbers: data.handleNumbers });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, { target: event.target, handle: handle, listeners: listeners, doNotReject: !0, handleNumbers: data.handleNumbers });
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            if (event.cursor) {
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                if (scope_Handles.length > 1) { addClass(scope_Target, options.cssClasses.drag) }
                scope_Body.addEventListener("selectstart", preventDefault, !1)
            }
            data.handleNumbers.forEach(function(handleNumber) { fireEvent("start", handleNumber) })
        }

        function eventTap(event) {
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            if (handleNumber === !1) { return !1 }
            if (!options.events.snap) { addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration) }
            setHandle(handleNumber, proposal, !0, !0);
            setZindex();
            fireEvent("slide", handleNumber, !0);
            fireEvent("update", handleNumber, !0);
            fireEvent("change", handleNumber, !0);
            fireEvent("set", handleNumber, !0);
            if (options.events.snap) { eventStart(event, { handleNumbers: [handleNumber] }) }
        }

        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function(targetEvent) { if ("hover" === targetEvent.split(".")[0]) { scope_Events[targetEvent].forEach(function(callback) { callback.call(scope_Self, value) }) } })
        }

        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) { return !1 }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            if (options.dir && !options.ort) { horizontalKeys.reverse() } else if (options.ort && !options.dir) { verticalKeys.reverse() }
            var key = event.key.replace("Arrow", "");
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0];
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1];
            if (!isDown && !isUp) { return !0 }
            event.preventDefault();
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            if (step === null) { return !1 }
            if (step === !1) { step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, 10) }
            step = Math.max(step, 0.0000001);
            step = (isDown ? -1 : 1) * step;
            setHandle(handleNumber, resolveToValue(scope_Values[handleNumber] + step, handleNumber), !0, !0);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return !1
        }

        function bindSliderEvents(behaviour) {
            if (!behaviour.fixed) { scope_Handles.forEach(function(handle, index) { attachEvent(actions.start, handle.children[0], eventStart, { handleNumbers: [index] }) }) }
            if (behaviour.tap) { attachEvent(actions.start, scope_Base, eventTap, {}) }
            if (behaviour.hover) { attachEvent(actions.move, scope_Base, eventHover, { hover: !0 }) }
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === !1 || index === 0 || index === scope_Connects.length - 1) { return }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0])
                    }
                    eventHolders.forEach(function(eventHolder) { attachEvent(actions.start, eventHolder, eventStart, { handles: [handleBefore, handleAfter], handleNumbers: [index - 1, index] }) })
                })
            }
        }

        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            if (namespacedEvent.split(".")[0] === "update") { scope_Handles.forEach(function(a, index) { fireEvent("update", index) }) }
        }

        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);
            Object.keys(scope_Events).forEach(function(bind) { var tEvent = bind.split(".")[0]; var tNamespace = bind.substring(tEvent.length); if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) { delete scope_Events[bind] } })
        }

        function fireEvent(eventName, handleNumber, tap) { Object.keys(scope_Events).forEach(function(targetEvent) { var eventType = targetEvent.split(".")[0]; if (eventName === eventType) { scope_Events[targetEvent].forEach(function(callback) { callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || !1, scope_Locations.slice()) }) } }) }

        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) { to = Math.max(to, reference[handleNumber - 1] + options.margin) }
                if (lookForward && handleNumber < scope_Handles.length - 1) { to = Math.min(to, reference[handleNumber + 1] - options.margin) }
            }
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) { to = Math.min(to, reference[handleNumber - 1] + options.limit) }
                if (lookForward && handleNumber < scope_Handles.length - 1) { to = Math.max(to, reference[handleNumber + 1] - options.limit) }
            }
            if (options.padding) {
                if (handleNumber === 0) { to = Math.max(to, options.padding[0]) }
                if (handleNumber === scope_Handles.length - 1) { to = Math.min(to, 100 - options.padding[1]) }
            }
            to = scope_Spectrum.getStep(to);
            to = limit(to);
            if (to === reference[handleNumber] && !getValue) { return !1 }
            return to
        }

        function inRuleOrder(v, a) { var o = options.ort; return (o ? a : v) + ", " + (o ? v : a) }

        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();
            var b = [!upward, upward];
            var f = [upward, !upward];
            handleNumbers = handleNumbers.slice();
            if (upward) { handleNumbers.reverse() }
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], !1);
                    if (to === !1) { proposal = 0 } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to
                    }
                })
            } else { b = f = [!0] }
            var state = !1;
            handleNumbers.forEach(function(handleNumber, o) { state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state });
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber)
                })
            }
        }

        function transformDirection(a, b) { return options.dir ? 100 - a - b : a }

        function updateHandlePosition(handleNumber, to) {
            scope_Locations[handleNumber] = to;
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1)
        }

        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex
            })
        }

        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, !1);
            if (to === !1) { return !1 }
            updateHandlePosition(handleNumber, to);
            return !0
        }

        function updateConnect(index) {
            if (!scope_Connects[index]) { return }
            var l = 0;
            var h = 100;
            if (index !== 0) { l = scope_Locations[index - 1] }
            if (index !== scope_Connects.length - 1) { h = scope_Locations[index] }
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule
        }

        function resolveToValue(to, handleNumber) {
            if (to === null || to === !1 || to === undefined) { return scope_Locations[handleNumber] }
            if (typeof to === "number") { to = String(to) }
            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);
            if (to === !1 || isNaN(to)) { return scope_Locations[handleNumber] }
            return to
        }

        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            fireSetEvent = fireSetEvent === undefined ? !0 : !!fireSetEvent;
            if (options.animate && !isInit) { addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration) }
            scope_HandleNumbers.forEach(function(handleNumber) { setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), !0, !1) });
            scope_HandleNumbers.forEach(function(handleNumber) { setHandle(handleNumber, scope_Locations[handleNumber], !0, !0) });
            setZindex();
            scope_HandleNumbers.forEach(function(handleNumber) { fireEvent("update", handleNumber); if (values[handleNumber] !== null && fireSetEvent) { fireEvent("set", handleNumber) } })
        }

        function valueReset(fireSetEvent) { valueSet(options.start, fireSetEvent) }

        function valueSetHandle(handleNumber, value, fireSetEvent) {
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) { throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber) }
            setHandle(handleNumber, resolveToValue(value, handleNumber), !0, !0);
            fireEvent("update", handleNumber);
            if (fireSetEvent) { fireEvent("set", handleNumber) }
        }

        function valueGet() {
            var values = scope_Values.map(options.format.to);
            if (values.length === 1) { return values[0] }
            return values
        }

        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) { continue }
                removeClass(scope_Target, options.cssClasses[key])
            }
            while (scope_Target.firstChild) { scope_Target.removeChild(scope_Target.firstChild) }
            delete scope_Target.noUiSlider
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            if (options.snap) { return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null] }
            if (increment !== !1) { if (value + increment > nearbySteps.stepAfter.startValue) { increment = nearbySteps.stepAfter.startValue - value } }
            if (value > nearbySteps.thisStep.startValue) { decrement = nearbySteps.thisStep.step } else if (nearbySteps.stepBefore.step === !1) { decrement = !1 } else { decrement = value - nearbySteps.stepBefore.highestStep }
            if (location === 100) { increment = null } else if (location === 0) { decrement = null }
            var stepDecimals = scope_Spectrum.countStepDecimals();
            if (increment !== null && increment !== !1) { increment = Number(increment.toFixed(stepDecimals)) }
            if (decrement !== null && decrement !== !1) { decrement = Number(decrement.toFixed(stepDecimals)) }
            return [decrement, increment]
        }

        function getNextSteps() { return scope_HandleNumbers.map(getNextStepsForHandle) }

        function updateOptions(optionsToUpdate, fireSetEvent) {
            var v = valueGet();
            var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
            updateAble.forEach(function(name) { if (optionsToUpdate[name] !== undefined) { originalOptions[name] = optionsToUpdate[name] } });
            var newOptions = testOptions(originalOptions);
            updateAble.forEach(function(name) { if (optionsToUpdate[name] !== undefined) { options[name] = newOptions[name] } });
            scope_Spectrum = newOptions.spectrum;
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            if (options.pips) { pips(options.pips) } else { removePips() }
            if (options.tooltips) { tooltips() } else { removeTooltips() }
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent)
        }

        function setupSlider() {
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            bindSliderEvents(options.events);
            valueSet(options.start);
            if (options.pips) { pips(options.pips) }
            if (options.tooltips) { tooltips() }
            aria()
        }
        setupSlider();
        scope_Self = { destroy: destroy, steps: getNextSteps, on: bindEvent, off: removeEvent, get: valueGet, set: valueSet, setHandle: valueSetHandle, reset: valueReset, __moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c) }, options: originalOptions, updateOptions: updateOptions, target: scope_Target, removePips: removePips, removeTooltips: removeTooltips, pips: pips };
        return scope_Self
    }

    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) { throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target) }
        if (target.noUiSlider) { throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.") }
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api
    }
    return { __spectrum: Spectrum, version: VERSION, create: initialize }
});
(function(factory) { 'use strict'; if (typeof define === 'function' && define.amd) { define(['jquery'], factory) } else if (typeof exports !== 'undefined') { module.exports = factory(require('jquery')) } else { factory(jQuery) } }(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this,
                dataSettings;
            _.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: $(element), appendDots: $(element), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3000, centerMode: !1, centerPadding: '50px', cssEase: 'ease', customPaging: function(slider, i) { return $('<button type="button" />').text(i + 1) }, dots: !1, dotsClass: 'slick-dots', draggable: !0, easing: 'linear', edgeFriction: 0.35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: 'ondemand', mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: 'window', responsive: null, rows: 1, rtl: !1, slide: '', slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1000 };
            _.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = !1;
            _.focussed = !1;
            _.interrupted = !1;
            _.hidden = 'hidden';
            _.paused = !0;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = !0;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange'
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange'
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(!0)
        }
        return Slick
    }());
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ 'tabindex': '0' })
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null
        } else if (index < 0 || (index >= _.slideCount)) { return !1 }
        _.unload();
        if (typeof(index) === 'number') { if (index === 0 && _.$slides.length === 0) { $(markup).appendTo(_.$slideTrack) } else if (addBefore) { $(markup).insertBefore(_.$slides.eq(index)) } else { $(markup).insertAfter(_.$slides.eq(index)) } } else { if (addBefore === !0) { $(markup).prependTo(_.$slideTrack) } else { $(markup).appendTo(_.$slideTrack) } }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) { $(element).attr('data-slick-index', index) });
        _.$slidesCache = _.$slides;
        _.reinit()
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.animate({ height: targetHeight }, _.options.speed)
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === !0 && _.options.vertical === !1) { targetLeft = -targetLeft }
        if (_.transformsEnabled === !1) { if (_.options.vertical === !1) { _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback) } else { _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback) } } else {
            if (_.cssTransitions === !1) {
                if (_.options.rtl === !0) { _.currentLeft = -(_.currentLeft) }
                $({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === !1) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps)
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps)
                        }
                    },
                    complete: function() { if (callback) { callback.call() } }
                })
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === !1) { animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)' } else { animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)' }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();
                        callback.call()
                    }, _.options.speed)
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) { asNavFor = $(asNavFor).not(_.$slider) }
        return asNavFor
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === 'object') { asNavFor.each(function() { var target = $(this).slick('getSlick'); if (!target.unslicked) { target.slideHandler(index, !0) } }) }
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === !1) { transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase } else { transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase }
        if (_.options.fade === !1) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) }
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) { _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed) }
    };
    Slick.prototype.autoPlayClear = function() { var _ = this; if (_.autoPlayTimer) { clearInterval(_.autoPlayTimer) } };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === !1) { if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) { _.direction = 0 } else if (_.direction === 0) { slideTo = _.currentSlide - _.options.slidesToScroll; if (_.currentSlide - 1 === 0) { _.direction = 1 } } }
            _.slideHandler(slideTo)
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === !0) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.prependTo(_.options.appendArrows) }
                if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.appendTo(_.options.appendArrows) }
                if (_.options.infinite !== !0) { _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true') }
            } else { _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', 'tabindex': '-1' }) }
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this,
            i, dot;
        if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) { dot.append($('<li />').append(_.options.customPaging.call(this, _, i))) }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active')
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) { $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '') });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === !0 || _.options.swipeToSlide === !0) { _.options.slidesToScroll = 1 }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === !0) { _.$list.addClass('draggable') }
    };
    Slick.prototype.buildRows = function() {
        var _ = this,
            a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) { var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c)); if (originalSlides.get(target)) { row.appendChild(originalSlides.get(target)) } }
                    slide.appendChild(row)
                }
                newSlides.appendChild(slide)
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({ 'width': (100 / _.options.slidesPerRow) + '%', 'display': 'inline-block' })
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = !1;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') { respondToWidth = windowWidth } else if (_.respondTo === 'slider') { respondToWidth = sliderWidth } else if (_.respondTo === 'min') { respondToWidth = Math.min(windowWidth, sliderWidth) }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) { if (_.breakpoints.hasOwnProperty(breakpoint)) { if (_.originalSettings.mobileFirst === !1) { if (respondToWidth < _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } else { if (respondToWidth > _.breakpoints[breakpoint]) { targetBreakpoint = _.breakpoints[breakpoint] } } } }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') { _.unslick(targetBreakpoint) } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === !0) { _.currentSlide = _.options.initialSlide }
                            _.refresh(initial)
                        }
                        triggerBreakpoint = targetBreakpoint
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') { _.unslick(targetBreakpoint) } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === !0) { _.currentSlide = _.options.initialSlide }
                        _.refresh(initial)
                    }
                    triggerBreakpoint = targetBreakpoint
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === !0) { _.currentSlide = _.options.initialSlide }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint
                }
            }
            if (!initial && triggerBreakpoint !== !1) { _.$slider.trigger('breakpoint', [_, triggerBreakpoint]) }
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
        if ($target.is('a')) { event.preventDefault() }
        if (!$target.is('li')) { $target = $target.closest('li') }
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide - slideOffset, !1, dontAnimate) }
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) { _.slideHandler(_.currentSlide + slideOffset, !1, dontAnimate) }
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), !1, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) { index = navigables[navigables.length - 1] } else {
            for (var n in navigables) {
                if (index < navigables[n]) { index = prevNavigable; break }
                prevNavigable = navigables[n]
            }
        }
        return index
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) { $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, !0)).off('mouseleave.slick', $.proxy(_.interrupt, _, !1)); if (_.options.accessibility === !0) { _.$dots.off('keydown.slick', _.keyHandler) } }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
            if (_.options.accessibility === !0) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler)
            }
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === !0) { _.$list.off('keydown.slick', _.keyHandler) }
        if (_.options.focusOnSelect === !0) { $(_.$slideTrack).children().off('click.slick', _.selectHandler) }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition)
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, !0));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, !1))
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this,
            originalSlides;
        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides)
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === !1) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault()
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) { _.$dots.remove() }
        if (_.$prevArrow && _.$prevArrow.length) { _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''); if (_.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() } }
        if (_.$nextArrow && _.$nextArrow.length) { _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''); if (_.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() } }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() { $(this).attr('style', $(this).data('originalStyling')) });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides)
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = !0;
        if (!refresh) { _.$slider.trigger('destroy', [_]) }
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === !1) { _.$slideTrack.css(transition) } else { _.$slides.eq(slide).css(transition) }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === !1) {
            _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });
            _.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback)
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex });
            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);
                    callback.call()
                }, _.options.speed)
            }
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === !1) { _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing) } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 })
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit()
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off('focus.slick blur.slick').on('focus.slick', '*', function(event) {
            var $sf = $(this);
            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    if ($sf.is(':focus')) {
                        _.focussed = !0;
                        _.autoPlay()
                    }
                }
            }, 0)
        }).on('blur.slick', '*', function(event) {
            var $sf = $(this);
            if (_.options.pauseOnFocus) {
                _.focussed = !1;
                _.autoPlay()
            }
        })
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() { var _ = this; return _.currentSlide };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === !0) {
            if (_.slideCount <= _.options.slidesToShow) {++pagerQty } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
                }
            }
        } else if (_.options.centerMode === !0) { pagerQty = _.slideCount } else if (!_.options.asNavFor) { pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll) } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
            }
        }
        return pagerQty - 1
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft, verticalHeight, verticalOffset = 0,
            targetSlide, coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(!0);
        if (_.options.infinite === !0) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1
                if (_.options.vertical === !0 && _.options.centerMode === !0) { if (_.options.slidesToShow === 2) { coef = -1.5 } else if (_.options.slidesToShow === 1) { coef = -2 } }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0
        }
        if (_.options.centerMode === !0 && _.slideCount <= _.options.slidesToShow) { _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2) } else if (_.options.centerMode === !0 && _.options.infinite === !0) { _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth } else if (_.options.centerMode === !0) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        }
        if (_.options.vertical === !1) { targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset } else { targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset }
        if (_.options.variableWidth === !0) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === !1) { targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex) } else { targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow) }
            if (_.options.rtl === !0) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 }
            if (_.options.centerMode === !0) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === !1) { targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex) } else { targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1) }
                if (_.options.rtl === !0) { if (targetSlide[0]) { targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1 } else { targetLeft = 0 } } else { targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0 }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2
            }
        }
        return targetLeft
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) { var _ = this; return _.options[option] };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === !1) { max = _.slideCount } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow
        }
        return indexes
    };
    Slick.prototype.getSlick = function() { return this };
    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;
        centerOffset = _.options.centerMode === !0 ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;
        if (_.options.swipeToSlide === !0) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== !0) { slideOffset += (slideOuterWidth / 2) }
                slideRightBoundary = slideOffset + (slideOuterWidth);
                if (swipeTarget < slideRightBoundary) { swipedSlide = slide; return !1 }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed
        } else { return _.options.slidesToScroll }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({ data: { message: 'index', index: parseInt(slide) } }, dontAnimate)
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(!0);
            _.focusHandler()
        }
        if (creation) { _.$slider.trigger('init', [_]) }
        if (_.options.accessibility === !0) { _.initADA() }
        if (_.options.autoplay) {
            _.paused = !1;
            _.autoPlay()
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) { return (val >= 0) && (val < _.slideCount) });
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).find('a, input, button, select').attr({ 'tabindex': '-1' });
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({ 'role': 'tabpanel', 'id': 'slick-slide' + _.instanceUid + i, 'tabindex': -1 });
                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                    if ($('#' + ariaButtonControl).length) { $(this).attr({ 'aria-describedby': ariaButtonControl }) }
                }
            });
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({ 'role': 'presentation' });
                $(this).find('button').first().attr({ 'role': 'tab', 'id': 'slick-slide-control' + _.instanceUid + i, 'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex, 'aria-label': (i + 1) + ' of ' + numDotGroups, 'aria-selected': null, 'tabindex': '-1' })
            }).eq(_.currentSlide).find('button').attr({ 'aria-selected': 'true', 'tabindex': '0' }).end()
        }
        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) { if (_.options.focusOnChange) { _.$slides.eq(i).attr({ 'tabindex': '0' }) } else { _.$slides.eq(i).removeAttr('tabindex') } }
        _.activateADA()
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, _.changeSlide);
            if (_.options.accessibility === !0) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler)
            }
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) { $('li', _.$dots).on('click.slick', { message: 'index' }, _.changeSlide); if (_.options.accessibility === !0) { _.$dots.on('keydown.slick', _.keyHandler) } }
        if (_.options.dots === !0 && _.options.pauseOnDotsHover === !0 && _.slideCount > _.options.slidesToShow) { $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, !0)).on('mouseleave.slick', $.proxy(_.interrupt, _, !1)) }
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, !0));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, !1))
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', { action: 'end' }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === !0) { _.$list.on('keydown.slick', _.keyHandler) }
        if (_.options.focusOnSelect === !0) { $(_.$slideTrack).children().on('click.slick', _.selectHandler) }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition)
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show()
        }
        if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) { _.$dots.show() }
    };
    Slick.prototype.keyHandler = function(event) { var _ = this; if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) { if (event.keyCode === 37 && _.options.accessibility === !0) { _.changeSlide({ data: { message: _.options.rtl === !0 ? 'next' : 'previous' } }) } else if (event.keyCode === 39 && _.options.accessibility === !0) { _.changeSlide({ data: { message: _.options.rtl === !0 ? 'previous' : 'next' } }) } } };
    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image.animate({ opacity: 0 }, 100, function() {
                        if (imageSrcSet) { image.attr('srcset', imageSrcSet); if (imageSizes) { image.attr('sizes', imageSizes) } }
                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function() { image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading') });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource])
                    })
                };
                imageToLoad.onerror = function() {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource])
                };
                imageToLoad.src = imageSource
            })
        }
        if (_.options.centerMode === !0) {
            if (_.options.infinite === !0) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === !0) { if (rangeStart > 0) rangeStart--; if (rangeEnd <= _.slideCount) rangeEnd++ }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange)
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange)
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange)
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({ opacity: 1 });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') { _.progressiveLazyLoad() }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({ data: { message: 'next' } })
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition()
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = !0
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = !0;
        _.paused = !1;
        _.focussed = !1;
        _.interrupted = !1
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger('afterChange', [_, index]);
            _.animating = !1;
            if (_.slideCount > _.options.slidesToShow) { _.setPosition() }
            _.swipeLeft = null;
            if (_.options.autoplay) { _.autoPlay() }
            if (_.options.accessibility === !0) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus()
                }
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({ data: { message: 'previous' } })
    };
    Slick.prototype.preventDefault = function(event) { event.preventDefault() };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image, imageSource, imageSrcSet, imageSizes, imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                if (imageSrcSet) { image.attr('srcset', imageSrcSet); if (imageSizes) { image.attr('sizes', imageSizes) } }
                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                if (_.options.adaptiveHeight === !0) { _.setPosition() }
                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad()
            };
            imageToLoad.onerror = function() {
                if (tryCount < 3) { setTimeout(function() { _.progressiveLazyLoad(tryCount + 1) }, 500) } else {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    _.progressiveLazyLoad()
                }
            };
            imageToLoad.src = imageSource
        } else { _.$slider.trigger('allImagesLoaded', [_]) }
    };
    Slick.prototype.refresh = function(initializing) {
        var _ = this,
            currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) { _.currentSlide = lastVisibleIndex }
        if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 }
        currentSlide = _.currentSlide;
        _.destroy(!0);
        $.extend(_, _.initials, { currentSlide: currentSlide });
        _.init();
        if (!initializing) { _.changeSlide({ data: { message: 'index', index: currentSlide } }, !1) }
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this,
            breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) { _.breakpoints.splice(l, 1) }
                        l--
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings
                }
            }
            _.breakpoints.sort(function(a, b) { return (_.options.mobileFirst) ? a - b : b - a })
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) { _.currentSlide = _.currentSlide - _.options.slidesToScroll }
        if (_.slideCount <= _.options.slidesToShow) { _.currentSlide = 0 }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(!1, !0);
        if (_.options.focusOnSelect === !0) { $(_.$slideTrack).children().on('click.slick', _.selectHandler) }
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [_])
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) { _.setPosition() }
            }, 50)
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === !0 ? 0 : _.slideCount - 1
        } else { index = removeBefore === !0 ? --index : index }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) { return !1 }
        _.unload();
        if (removeAll === !0) { _.$slideTrack.children().remove() } else { _.$slideTrack.children(this.options.slide).eq(index).remove() }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit()
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x, y;
        if (_.options.rtl === !0) { position = -position }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === !1) { _.$slideTrack.css(positionProps) } else {
            positionProps = {};
            if (_.cssTransitions === !1) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps)
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps)
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === !1) { if (_.options.centerMode === !0) { _.$list.css({ padding: ('0px ' + _.options.centerPadding) }) } } else { _.$list.height(_.$slides.first().outerHeight(!0) * _.options.slidesToShow); if (_.options.centerMode === !0) { _.$list.css({ padding: (_.options.centerPadding + ' 0px') }) } }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === !1 && _.options.variableWidth === !1) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)))
        } else if (_.options.variableWidth === !0) { _.$slideTrack.width(5000 * _.slideCount) } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(!0) * _.$slideTrack.children('.slick-slide').length)))
        }
        var offset = _.$slides.first().outerWidth(!0) - _.$slides.first().width();
        if (_.options.variableWidth === !1) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset)
    };
    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) { targetLeft = (_.slideWidth * index) * -1; if (_.options.rtl === !0) { $(element).css({ position: 'relative', right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } else { $(element).css({ position: 'relative', left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 }) } });
        _.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 })
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === !0 && _.options.vertical === !1) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(!0);
            _.$list.css('height', targetHeight)
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var _ = this,
            l, item, option, value, refresh = !1,
            type;
        if ($.type(arguments[0]) === 'object') {
            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple'
        } else if ($.type(arguments[0]) === 'string') {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') { type = 'responsive' } else if (typeof arguments[1] !== 'undefined') { type = 'single' }
        }
        if (type === 'single') { _.options[option] = value } else if (type === 'multiple') { $.each(option, function(opt, val) { _.options[opt] = val }) } else if (type === 'responsive') {
            for (item in value) {
                if ($.type(_.options.responsive) !== 'array') { _.options.responsive = [value[item]] } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) { _.options.responsive.splice(l, 1) }
                        l--
                    }
                    _.options.responsive.push(value[item])
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit()
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === !1) { _.setCSS(_.getLeft(_.currentSlide)) } else { _.setFade() }
        _.$slider.trigger('setPosition', [_])
    };
    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === !0 ? 'top' : 'left';
        if (_.positionProp === 'top') { _.$slider.addClass('slick-vertical') } else { _.$slider.removeClass('slick-vertical') }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) { if (_.options.useCSS === !0) { _.cssTransitions = !0 } }
        if (_.options.fade) { if (typeof _.options.zIndex === 'number') { if (_.options.zIndex < 3) { _.options.zIndex = 3 } } else { _.options.zIndex = _.defaults.zIndex } }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = !1
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = !1
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = !1
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = !1
        }
        if (bodyStyle.transform !== undefined && _.animType !== !1) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition'
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== !1)
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === !0) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === !0) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) { _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false') } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false')
                }
                if (index === 0) { allSlides.eq(_.options.slidesToShow + _.slideCount + 1).addClass('slick-center') } else if (index === _.slideCount - 1) { allSlides.eq(_.options.slidesToShow).addClass('slick-center') }
            }
            _.$slides.eq(index).addClass('slick-center')
        } else {
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) { _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') } else if (allSlides.length <= _.options.slidesToShow) { allSlides.addClass('slick-active').attr('aria-hidden', 'false') } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === !0 ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) { allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false') } else { allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') }
            }
        }
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') { _.lazyLoad() }
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i, slideIndex, infiniteCount;
        if (_.options.fade === !0) { _.options.centerMode = !1 }
        if (_.options.infinite === !0 && _.options.fade === !1) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === !0) { infiniteCount = _.options.slidesToShow + 1 } else { infiniteCount = _.options.slidesToShow }
                for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(!0).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned')
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(!0).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned')
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() { $(this).attr('id', '') })
            }
        }
    };
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) { _.autoPlay() }
        _.interrupted = toggle
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) { _.slideHandler(index, !1, !0); return }
        _.slideHandler(index)
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || !1;
        if (_.animating === !0 && _.options.waitForAnimate === !0) { return }
        if (_.options.fade === !0 && _.currentSlide === index) { return }
        if (sync === !1) { _.asNavFor(index) }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === !1 && _.options.centerMode === !1 && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === !1) { targetSlide = _.currentSlide; if (dontAnimate !== !0 && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } }
            return
        } else if (_.options.infinite === !1 && _.options.centerMode === !0 && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === !1) { targetSlide = _.currentSlide; if (dontAnimate !== !0 && _.slideCount > _.options.slidesToShow) { _.animateSlide(slideLeft, function() { _.postSlide(targetSlide) }) } else { _.postSlide(targetSlide) } }
            return
        }
        if (_.options.autoplay) { clearInterval(_.autoPlayTimer) }
        if (targetSlide < 0) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll) } else { animSlide = _.slideCount + targetSlide } } else if (targetSlide >= _.slideCount) { if (_.slideCount % _.options.slidesToScroll !== 0) { animSlide = 0 } else { animSlide = targetSlide - _.slideCount } } else { animSlide = targetSlide }
        _.animating = !0;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if (navTarget.slideCount <= navTarget.options.slidesToShow) { navTarget.setSlideClasses(_.currentSlide) }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === !0) {
            if (dontAnimate !== !0) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() { _.postSlide(animSlide) })
            } else { _.postSlide(animSlide) }
            _.animateHeight();
            return
        }
        if (dontAnimate !== !0 && _.slideCount > _.options.slidesToShow) { _.animateSlide(targetLeft, function() { _.postSlide(animSlide) }) } else { _.postSlide(animSlide) }
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide()
        }
        if (_.options.dots === !0 && _.slideCount > _.options.slidesToShow) { _.$dots.hide() }
        _.$slider.addClass('slick-loading')
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) { swipeAngle = 360 - Math.abs(swipeAngle) }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) { return (_.options.rtl === !1 ? 'left' : 'right') }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) { return (_.options.rtl === !1 ? 'left' : 'right') }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) { return (_.options.rtl === !1 ? 'right' : 'left') }
        if (_.options.verticalSwiping === !0) { if ((swipeAngle >= 35) && (swipeAngle <= 135)) { return 'down' } else { return 'up' } }
        return 'vertical'
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount, direction;
        _.dragging = !1;
        _.swiping = !1;
        if (_.scrolling) { _.scrolling = !1; return !1 }
        _.interrupted = !1;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? !1 : !0;
        if (_.touchObject.curX === undefined) { return !1 }
        if (_.touchObject.edgeHit === !0) { _.$slider.trigger('edge', [_, _.swipeDirection()]) }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
                case 'left':
                case 'down':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if (direction != 'vertical') {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction])
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {}
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if ((_.options.swipe === !1) || ('ontouchend' in document && _.options.swipe === !1)) { return } else if (_.options.draggable === !1 && event.type.indexOf('mouse') !== -1) { return }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === !0) { _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold }
        switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = !1,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) { return !1 }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) { _.scrolling = !0; return !1 }
        if (_.options.verticalSwiping === !0) { _.touchObject.swipeLength = verticalSwipeLength }
        swipeDirection = _.swipeDirection();
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = !0;
            event.preventDefault()
        }
        positionOffset = (_.options.rtl === !1 ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === !0) { positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1 }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = !1;
        if (_.options.infinite === !1) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = !0
            }
        }
        if (_.options.vertical === !1) { _.swipeLeft = curLeft + swipeLength * positionOffset } else { _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset }
        if (_.options.verticalSwiping === !0) { _.swipeLeft = curLeft + swipeLength * positionOffset }
        if (_.options.fade === !0 || _.options.touchMove === !1) { return !1 }
        if (_.animating === !0) { _.swipeLeft = null; return !1 }
        _.setCSS(_.swipeLeft)
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;
        _.interrupted = !0;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) { _.touchObject = {}; return !1 }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) { touches = event.originalEvent.touches[0] }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = !0
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit()
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) { _.$dots.remove() }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) { _.$prevArrow.remove() }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) { _.$nextArrow.remove() }
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '')
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy()
    };
    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === !0 && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === !1) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === !0) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').end();
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active')
        }
    };
    Slick.prototype.visibility = function() { var _ = this; if (_.options.autoplay) { if (document[_.hidden]) { _.interrupted = !0 } else { _.interrupted = !1 } } };
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i, ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret
        }
        return _
    }
}))