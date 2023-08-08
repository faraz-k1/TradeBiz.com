/*! jQuery v3.6.4 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        w = g.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function C(e, t, n) {
        var r, i, o = (n = n || w).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.4 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",
        E = function(e, t) {
            return new E.fn.init(e, t)
        };

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            C(e, {
                nonce: t && t.nonce
            }, n)
        },
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
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return v(a)
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, A = "sizzle" + 1 * new Date,
            d = n.document,
            N = 0,
            r = 0,
            m = ue(),
            b = ue(),
            S = ue(),
            k = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            L = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            O = t.push,
            P = t.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(W),
            X = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                C()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    q.apply(e, P.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && (C(e), e = e || T, E)) {
                if (11 !== d && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n
                    }
                if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return O.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        k(t, !0)
                    } finally {
                        s === A && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[A] = !0, e
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) x.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, C = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : d;
                return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(T.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), p.cssHas = ce(function() {
                    try {
                        return T.querySelector(":has(*,:jqfake)"), !1
                    } catch (e) {
                        return !0
                    }
                }), p.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ce(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function(e) {
                    return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
                }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
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
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W)
                }), p.cssHas || v.push(":has"), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return de(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0
                }), T
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    k(t, !0)
                }
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != T && C(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                    p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [N, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p)
                                    while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                        if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a === e)) break;
                                return (p -= v) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = H(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[A] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);

        function me() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [N, d];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
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

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(p, h, g, v, y, e) {
            return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : Ce(c, s, p, n, r),
                    d = g ? y || (e ? p : l || v) ? [] : t : f;
                if (g && g(f, d, n, r), v) {
                    i = Ce(d, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || p) {
                        if (y) {
                            i = [], o = d.length;
                            while (o--)(a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        o = d.length;
                        while (o--)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < H(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
                        for (n = ++s; n < r; n++)
                            if (x.relative[e[n].type]) break;
                        return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = x.preFilter;
            while (a) {
                for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, b, r, i = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
                (a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        p = e || b && x.find.TAG("*", i),
                        h = N += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            a = 0, t || o.ownerDocument == T || (C(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (N = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = j.call(r));
                            f = Ce(f)
                        }
                        O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (N = h, w = d), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = Q.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], x.relative[s = a.type]) break;
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(g);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        A = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = E.expr.match.needsContext;

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
        }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t))
                    for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, L = E(w);
    var q = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return A(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function B(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = b(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
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
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
            while (t--) B(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        g.setTimeout(function() {
            throw e
        })
    };
    var W = E.Deferred();

    function F() {
        w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready()
    }
    E.fn.ready = function(e) {
        return W.then(e)["catch"](function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E])
        }
    }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === T(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        _ = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(_, U)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = E.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new Q,
        G = new Q,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = w.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };
    var se = {};

    function ue(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var le, ce, fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
    var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ge(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function me(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        f.textContent = "", p = 0;
        while (o = d[p++])
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) pe.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function we() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return w.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.get(t);
            if (X(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(H) || [""]).length;
                while (l--) p = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(H) || [""]).length;
                while (l--)
                    if (p = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
                        while (o--) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        E.event.special[t] = {
            setup: function() {
                return Ee(this, t, Ce), !1
            },
            trigger: function() {
                return Ee(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function ke(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a))
        }
    }

    function qe(n, r, i, o) {
        r = v(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = b(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : C(u.textContent.replace(Se, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);
                else je(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = /^--/,
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = g), t.getComputedStyle(e)
        },
        Re = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Be = new RegExp(ne.join("|"), "i"),
        Me = "[\\x20\\t\\r\\n\\f]",
        We = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g");

    function Fe(e, t, n) {
        var r, i, o, a, s = He.test(t),
            u = e.style;
        return (n = n || Ie(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(We, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Be.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = g.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = w.createElement("div"),
            l = w.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        _e = w.createElement("div").style,
        Ue = {};

    function Ve(e) {
        var t = E.cssProps[e] || Ue[e];
        return t || (e in _e ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in _e) return e
        }(e) || e)
    }
    var Xe, Qe, Ye = /^(none|table(?!-c[ea]).+)/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function et(e, t, n) {
        var r = Ie(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Fe(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = He.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return E.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        u /= 2, l = l || c[3], c = +u || 1;
                        while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, E.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return He.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, u, n) : Re(e, Ge, function() {
                    return et(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !m.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? Ze(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ze(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = $e(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Je)
    }), E.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = g.setTimeout(e, r);
            t.stop = function() {
                g.clearTimeout(n)
            }
        })
    }, Xe = w.createElement("input"), Qe = w.createElement("select").appendChild(w.createElement("option")), Xe.type = "checkbox", m.checkOn = "" !== Xe.value, m.optSelected = Qe.selected, (Xe = w.createElement("input")).value = "t", Xe.type = "radio", m.radioValue = "t" === Xe.value;
    var tt, nt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return $(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), tt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = nt[t] || E.find.attr;
        nt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = nt[o], nt[o] = r, r = null != a(e, t, n) ? o : null, nt[o] = i), r
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;

    function ot(e) {
        return (e.match(H) || []).join(" ")
    }

    function at(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function st(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return $(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return b(t) ? this.each(function(e) {
                E(this).addClass(t.call(this, e, at(this)))
            }) : (e = st(t)).length ? this.each(function() {
                if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = ot(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return b(t) ? this.each(function(e) {
                E(this).removeClass(t.call(this, e, at(this)))
            }) : arguments.length ? (e = st(t)).length ? this.each(function() {
                if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = ot(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return b(t) ? this.each(function(e) {
                E(this).toggleClass(t.call(this, e, at(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = st(t), this.each(function() {
                if (s)
                    for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = at(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ut, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : ot(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = E.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in g;
    var lt = /^(?:focusinfocus|focusoutblur)$/,
        ct = function(e) {
            e.stopPropagation()
        };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = [n || w],
                p = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || p, lt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g)
                }
                i = 0;
                while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ct), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ct), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    }), E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new g.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var ft, dt = /\[\]$/,
        pt = /\r?\n/g,
        ht = /^(?:submit|button|image|reset|file)$/i,
        gt = /^(?:input|select|textarea|keygen)/i;

    function vt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) {
            r || dt.test(n) ? i(n, t) : vt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== T(e)) i(n, e);
        else
            for (t in e) vt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = b(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) vt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(pt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(pt, "\r\n")
                }
            }).get()
        }
    }), E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, m.createHTMLDocument = ((ft = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = $e(m.pixelPosition, function(e, t) {
            if (t) return t = Fe(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var yt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function(e) {
        return null == e ? "" : (e + "").replace(yt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var mt = g.jQuery,
        bt = g.$;
    return E.noConflict = function(e) {
        return g.$ === E && (g.$ = bt), e && g.jQuery === E && (g.jQuery = mt), E
    }, "undefined" == typeof e && (g.jQuery = g.$ = E), E
});

(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else if (typeof exports !== "undefined") {
        module.exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function($) {
    $.fn.marquee = function(options) {
        return this.each(function() {
            var o = $.extend({}, $.fn.marquee.defaults, options),
                $this = $(this),
                $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth, loopCount = 3,
                playState = "animation-play-state",
                css3AnimationIsSupported = false,
                _prefixedEvent = function(element, type, callback) {
                    var pfx = ["webkit", "moz", "MS", "o", ""];
                    for (var p = 0; p < pfx.length; p++) {
                        if (!pfx[p]) type = type.toLowerCase();
                        element.addEventListener(pfx[p] + type, callback, false)
                    }
                },
                _objToString = function(obj) {
                    var tabjson = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            tabjson.push(p + ":" + obj[p])
                        }
                    }
                    tabjson.push();
                    return "{" + tabjson.join(",") + "}"
                },
                _startAnimationWithDelay = function() {
                    $this.timer = setTimeout(animate, o.delayBeforeStart)
                },
                methods = {
                    pause: function() {
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, "paused")
                        } else {
                            if ($.fn.pause) {
                                $marqueeWrapper.pause()
                            }
                        }
                        $this.data("runningStatus", "paused");
                        $this.trigger("paused")
                    },
                    resume: function() {
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, "running")
                        } else {
                            if ($.fn.resume) {
                                $marqueeWrapper.resume()
                            }
                        }
                        $this.data("runningStatus", "resumed");
                        $this.trigger("resumed")
                    },
                    toggle: function() {
                        methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout($this.timer);
                        $this.find("*").addBack().off();
                        $this.html($this.find(".js-marquee:first").html())
                    }
                };
            if (typeof options === "string") {
                if ($.isFunction(methods[options])) {
                    if (!$marqueeWrapper) {
                        $marqueeWrapper = $this.find(".js-marquee-wrapper")
                    }
                    if ($this.data("css3AnimationIsSupported") === true) {
                        css3AnimationIsSupported = true
                    }
                    methods[options]()
                }
                return
            }
            var dataAttributes = {},
                attr;
            $.each(o, function(key) {
                attr = $this.attr("data-" + key);
                if (typeof attr !== "undefined") {
                    switch (attr) {
                        case "true":
                            attr = true;
                            break;
                        case "false":
                            attr = false;
                            break
                    }
                    o[key] = attr
                }
            });
            if (o.speed) {
                o.duration = parseInt($this.width(), 10) / o.speed * 1e3
            }
            verticalDir = o.direction === "up" || o.direction === "down";
            o.gap = o.duplicated ? parseInt(o.gap) : 0;
            $this.wrapInner('<div class="js-marquee"></div>');
            var $el = $this.find(".js-marquee").css({
                "margin-right": o.gap,
                float: "left"
            });
            if (o.duplicated) {
                $el.clone(true).appendTo($this)
            }
            $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
            if (verticalDir) {
                var containerHeight = $this.height();
                $marqueeWrapper.removeAttr("style");
                $this.height(containerHeight);
                $this.find(".js-marquee").css({
                    float: "none",
                    "margin-bottom": o.gap,
                    "margin-right": 0
                });
                if (o.duplicated) {
                    $this.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    })
                }
                var elHeight = $this.find(".js-marquee:first").height() + o.gap;
                if (o.startVisible && !o.duplicated) {
                    o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
                    o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration
                } else {
                    o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration
                }
            } else {
                elWidth = $this.find(".js-marquee:first").width() + o.gap;
                containerWidth = $this.width();
                if (o.startVisible && !o.duplicated) {
                    o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
                    o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration
                } else {
                    o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration
                }
            }
            if (o.duplicated) {
                o.duration = o.duration / 2
            }
            if (o.allowCss3Support) {
                var elm = document.body || document.createElement("div"),
                    animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
                    domPrefixes = "Webkit Moz O ms Khtml".split(" "),
                    animationString = "animation",
                    animationCss3Str = "",
                    keyframeString = "";
                if (elm.style.animation !== undefined) {
                    keyframeString = "@keyframes " + animationName + " ";
                    css3AnimationIsSupported = true
                }
                if (css3AnimationIsSupported === false) {
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
                            var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
                            animationString = prefix + animationString;
                            playState = prefix + playState;
                            keyframeString = "@" + prefix + "keyframes " + animationName + " ";
                            css3AnimationIsSupported = true;
                            break
                        }
                    }
                }
                if (css3AnimationIsSupported) {
                    animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
                    $this.data("css3AnimationIsSupported", true)
                }
            }
            var _rePositionVertically = function() {
                    $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")")
                },
                _rePositionHorizontally = function() {
                    $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")")
                };
            if (o.duplicated) {
                if (verticalDir) {
                    if (o.startVisible) {
                        $marqueeWrapper.css("transform", "translateY(0)")
                    } else {
                        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")")
                    }
                } else {
                    if (o.startVisible) {
                        $marqueeWrapper.css("transform", "translateX(0)")
                    } else {
                        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")")
                    }
                }
                if (!o.startVisible) {
                    loopCount = 1
                }
            } else if (o.startVisible) {
                loopCount = 2
            } else {
                if (verticalDir) {
                    _rePositionVertically()
                } else {
                    _rePositionHorizontally()
                }
            }
            var animate = function() {
                if (o.duplicated) {
                    if (loopCount === 1) {
                        o._originalDuration = o.duration;
                        if (verticalDir) {
                            o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2
                        } else {
                            o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2
                        }
                        if (animationCss3Str) {
                            animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing
                        }
                        loopCount++
                    } else if (loopCount === 2) {
                        o.duration = o._originalDuration;
                        if (animationCss3Str) {
                            animationName = animationName + "0";
                            keyframeString = $.trim(keyframeString) + "0 ";
                            animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing
                        }
                        loopCount++
                    }
                }
                if (verticalDir) {
                    if (o.duplicated) {
                        if (loopCount > 2) {
                            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")")
                        }
                        animationCss = {
                            transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
                        }
                    } else if (o.startVisible) {
                        if (loopCount === 2) {
                            if (animationCss3Str) {
                                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing
                            }
                            animationCss = {
                                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
                            };
                            loopCount++
                        } else if (loopCount === 3) {
                            o.duration = o._completeDuration;
                            if (animationCss3Str) {
                                animationName = animationName + "0";
                                keyframeString = $.trim(keyframeString) + "0 ";
                                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing
                            }
                            _rePositionVertically()
                        }
                    } else {
                        _rePositionVertically();
                        animationCss = {
                            transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
                        }
                    }
                } else {
                    if (o.duplicated) {
                        if (loopCount > 2) {
                            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")")
                        }
                        animationCss = {
                            transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
                        }
                    } else if (o.startVisible) {
                        if (loopCount === 2) {
                            if (animationCss3Str) {
                                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing
                            }
                            animationCss = {
                                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
                            };
                            loopCount++
                        } else if (loopCount === 3) {
                            o.duration = o._completeDuration;
                            if (animationCss3Str) {
                                animationName = animationName + "0";
                                keyframeString = $.trim(keyframeString) + "0 ";
                                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing
                            }
                            _rePositionHorizontally()
                        }
                    } else {
                        _rePositionHorizontally();
                        animationCss = {
                            transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
                        }
                    }
                }
                $this.trigger("beforeStarting");
                if (css3AnimationIsSupported) {
                    $marqueeWrapper.css(animationString, animationCss3Str);
                    var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
                        $styles = $marqueeWrapper.find("style");
                    if ($styles.length !== 0) {
                        $styles.filter(":last").html(keyframeCss)
                    } else {
                        $("head").append("<style>" + keyframeCss + "</style>")
                    }
                    _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function() {
                        $this.trigger("finished")
                    });
                    _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function() {
                        animate();
                        $this.trigger("finished")
                    })
                } else {
                    $marqueeWrapper.animate(animationCss, o.duration, o.easing, function() {
                        $this.trigger("finished");
                        if (o.pauseOnCycle) {
                            _startAnimationWithDelay()
                        } else {
                            animate()
                        }
                    })
                }
                $this.data("runningStatus", "resumed")
            };
            $this.on("pause", methods.pause);
            $this.on("resume", methods.resume);
            if (o.pauseOnHover) {
                $this.on("mouseenter", methods.pause);
                $this.on("mouseleave", methods.resume)
            }
            if (css3AnimationIsSupported && o.allowCss3Support) {
                animate()
            } else {
                _startAnimationWithDelay()
            }
        })
    };
    $.fn.marquee.defaults = {
        allowCss3Support: true,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: false,
        duration: 5e3,
        speed: 0,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: false
    }
});
/*!
 * GSAP 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && Pe
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i););
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new qt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Mt(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ma() {
        var t, e, r = ct.length,
            i = ct.slice(0);
        for (dt = {}, t = ct.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t, e, r, i) {
        ct.length && !B && ma(), t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)), ct.length && !B && ma()
    }

    function oa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function pa(t) {
        return t
    }

    function qa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ta(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ua(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function va(t) {
        var e = t.parent || L,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }(Z(t.keyframes)) : qa;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function xa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function ya(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function za(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function Aa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ca(t, e, r, i) {
        return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Ea(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ga(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ha(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }

    function Ia(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
    }

    function Ja(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e), (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -X
        }
    }

    function Ka(e, r, i, n) {
        return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
    }

    function La(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ma(t, e, r, i, n) {
        return Kt(t, e, n), t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Ra(t, e, r, i) {
        var n = t._repeat,
            a = ja(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
    }

    function Sa(t) {
        return t instanceof Xt ? Aa(t) : Ra(t, t._dur)
    }

    function Va(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Jt(r[0], u, r[1 + o])
    }

    function Wa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Ya(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function _a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function cb(r) {
        return r = Mt(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Mt(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function db(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function eb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = jt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                    d = y[c];
                if (!d) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                        for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                        f--
                    }
                    for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Yt(_) : _
                }
                return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u
            }
    }

    function fb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
        }
    }

    function gb(h, e) {
        var l, f, r = Z(h);
        return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Mt(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
        } : fb(h))
    }

    function hb(t, e, r, i) {
        return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function lb(e, r, t) {
        return Wa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function ob(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function rb(t, e, r) {
        var i, n, a, s = t.labels,
            o = U;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function tb(t) {
        return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!B), t.progress() < 1 && St(t, "onInterrupt"), t
    }

    function wb(t) {
        if (x()) {
            var e = (t = !t.name && t.default || t).name,
                r = s(t),
                i = e && !r && t.init ? function() {
                    this._props = []
                } : t,
                n = {
                    init: T,
                    render: fe,
                    add: Qt,
                    kill: _e,
                    modifier: pe,
                    rawVars: 0
                },
                a = {
                    targetTest: 0,
                    get: 0,
                    getSetter: re,
                    aliases: {},
                    register: 0
                };
            if (Ft(), t !== i) {
                if (pt[e]) return;
                qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            S(e, i), t.register && t.register(Pe, i, ge)
        } else Ct.push(t)
    }

    function zb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0
    }

    function Ab(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & Pt, e & Pt] : 0 : Dt.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Dt[e]) p = Dt[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Pt, p & Pt, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Pt, e & Pt]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = zb(o + 1 / 3, n, a), p[1] = zb(o, n, a), p[2] = zb(o - 1 / 3, n, a);
            else p = e.match(tt) || Dt.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / Pt, a = p[1] / Pt, s = p[2] / Pt, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Bb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Et).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Cb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Et),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = Bb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Fb(t) {
        var e, r = t.join(" ");
        if (Et.lastIndex = 0, Et.test(r)) return e = zt.test(r), t[1] = Cb(t[1], e), t[0] = Cb(t[0], e, Bb(t[1])), !0
    }

    function Ob(t) {
        var e = (t + "").split("("),
            r = It[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Lt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(oa)) : It._CE && Bt.test(t) ? It._CE("", t) : r
    }

    function Qb(t, e) {
        for (var r, i = t._first; i;) i instanceof Xt ? Qb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Sb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in It[t] = ot[t] = a, It[n = t.toLowerCase()] = r, a) It[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = It[t + "." + e] = a[e]
        }), a
    }

    function Tb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Ub(r, t, e) {
        function Im(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / N * (Math.asin(1 / i) || 0),
            s = "out" === r ? Im : "in" === r ? function(t) {
                return 1 - Im(1 - t)
            } : Tb(Im);
        return n = N / n, s.config = function(t, e) {
            return Ub(r, t, e)
        }, s
    }

    function Vb(e, r) {
        function Qm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Qm : "in" === e ? function(t) {
            return 1 - Qm(1 - t)
        } : Tb(Qm);
        return t.config = function(t) {
            return Vb(e, t)
        }, t
    }
    var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, O, k, M, A, C, D, E, z, F, Y, j, V = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        q = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        U = 1e8,
        X = 1 / U,
        N = 2 * Math.PI,
        W = N / 4,
        K = 0,
        G = Math.sqrt,
        $ = Math.cos,
        H = Math.sin,
        J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Z = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ht = {
            suppressEvents: !0,
            kill: !1
        },
        lt = {
            suppressEvents: !0
        },
        ft = {},
        ct = [],
        dt = {},
        pt = {},
        _t = {},
        mt = 30,
        gt = [],
        vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Tt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        wt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || wt,
                h = t.duration() >= U ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (Z(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        Ot = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        kt = [].slice,
        Mt = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? Z(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || _a(t, 1) ? i.push.apply(i, Mt(t)) : i.push(t)
                }) || i
            }(t, i) : _a(t) ? kt.call(t, 0) : t ? [t] : [] : kt.call((e || a).querySelectorAll(t), 0)
        },
        At = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Wa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        St = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = [],
        Pt = 255,
        Dt = {
            aqua: [0, Pt, Pt],
            lime: [0, Pt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Pt],
            navy: [0, 0, 128],
            white: [Pt, Pt, Pt],
            olive: [128, 128, 0],
            yellow: [Pt, Pt, 0],
            orange: [Pt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Pt, 0, 0],
            pink: [Pt, 192, 203],
            cyan: [0, Pt, Pt],
            transparent: [Pt, Pt, Pt, 0]
        },
        Et = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Dt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        zt = /hsl[a]?\(/,
        Rt = (k = Date.now, M = 500, A = 33, C = k(), D = C, z = E = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                xl(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Pe, (h.gsapVersions || (h.gsapVersions = [])).push(Pe.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame, Ct.forEach(wb)), p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, z - 1e3 * g.time + 1 | 0)
                }, d = 1, xl(2))
            },
            sleep: function sleep() {
                (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                M = t || 1 / 0, A = Math.min(e || 33, M)
            },
            fps: function fps(t) {
                E = 1e3 / (t || 240), z = 1e3 * g.time + E
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), F[e ? "unshift" : "push"](a), Ft(), a
            },
            remove: function remove(t, e) {
                ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= O && O--
            },
            _listeners: F = []
        }),
        Ft = function _wake() {
            return !d && Rt.wake()
        },
        It = {},
        Bt = /^[\d.\-M][\d.\-,\s]/,
        Lt = /["']/g,
        Yt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        jt = function _parseEase(t, e) {
            return t && (s(t) ? t : It[t] || Ob(t)) || e
        };

    function xl(t) {
        var e, r, i, n, a = k() - D,
            s = !0 === t;
        if (M < a && (C += a - A), (0 < (e = (i = (D += a) - C) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(xl)), r)
            for (O = 0; O < F.length; O++) F[O](i, b, n, t)
    }

    function fn(t) {
        return t < j ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Sb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), It.Linear.easeNone = It.none = It.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function(t) {
        return 1 - fn(1 - t)
    }, fn), Sb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Sb("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }), Sb("Sine", function(t) {
        return 1 === t ? 1 : 1 - $(t * W)
    }), Sb("Back", Vb("in"), Vb("out"), Vb()), It.SteppedEase = It.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Ot(0, .99999999, t) | 0) + n) * r
            }
        }
    }, q.ease = It["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Vt, qt = function GSCache(t, e) {
            this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : re
        },
        Ut = ((Vt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Vt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Vt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Vt.totalTime = function totalTime(t, e) {
            if (Ft(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
        }, Vt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Vt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Vt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Vt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
        }, Vt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -X ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, this.totalTime(Ot(-Math.abs(this._delay), this._tDur, e), !0), Ha(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Vt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps
        }, Vt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
            }
            return this._start
        }, Vt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Vt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
        }, Vt.revert = function revert(t) {
            void 0 === t && (t = lt);
            var e = B;
            return B = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), B = e, this
        }, Vt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
        }, Vt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Vt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Sa(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Vt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Vt.seek = function seek(t, e) {
            return this.totalTime(xt(this, t), w(e))
        }, Vt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e))
        }, Vt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Vt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Vt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Vt.resume = function resume() {
            return this.paused(!1)
        }, Vt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0
        }, Vt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -X, this
        }, Vt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
        }, Vt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Vt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function Ao() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : pa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Ao() : i._prom = Ao
            })
        }, Vt.kill = function kill() {
            tb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Rt.wake()
    }
    qa(Ut.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Xt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), L && Ka(t.parent || L, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Va(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Va(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Va(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ka(this, Jt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ja(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== L && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && this._tTime - c * o - this._dur <= 0 && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                        var T = d && 1 & c,
                            b = T === (d && 1 & s);
                        if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && St(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Qb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && !s && (St(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -X);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -X : X);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
                this._onUpdate && !e && St(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (St(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof Ut)) {
                if (Z(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = Jt.delayedCall(0, e)
            }
            return this !== e ? Ka(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Jt.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Nt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s;) s instanceof Jt ? la(s._targets, a) && (o ? (!Nt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = xt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Jt.to(i, qa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, qa({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return Aa(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ra(a, a === L && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (L._ts && (na(L, Ga(t, L)), f = Rt.frame), Rt.frame >= mt) {
                mt += V.autoSleep || 120;
                var e = L._first;
                if ((!e || !e._ts) && V.autoSleep && Rt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Rt.sleep()
                }
            }
        }, Timeline
    }(Ut);
    qa(Xt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function ac(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || Z(t) || J(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new ge(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function gc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (Z(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Nt, Wt, Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var c, d = t[e],
                p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = s(d) ? l ? ee : te : Zt;
            if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new ge(this._pt, t, e, 0, 1, le, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new ge(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? oe : se, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
        },
        Kt = function _initTween(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                x = m.onUpdateParams,
                O = m.callbackScope,
                k = m.runBackwards,
                M = m.yoyoEase,
                A = m.keyframes,
                S = m.autoRevert,
                C = t._dur,
                P = t._startAt,
                D = t._targets,
                E = t.parent,
                z = E && "nested" === E.data ? E.vars.targets : D,
                R = "auto" === t._overwrite && !I,
                F = t.timeline;
            if (!F || A && g || (g = "none"), t._ease = jt(g, q.ease), t._yEase = M ? Yt(jt(!0 === M ? g : M, q.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), t._from = !F && !!m.runBackwards, !F || A && !m.stagger) {
                if (p = (l = D[0] ? fa(D[0]).harness : 0) && m[l.prop], i = ua(m, ft), P && (P._zTime < 0 && P.progress(1), e < 0 && k && y && !S ? P.render(-1, !0) : P.revert(k && C ? ht : ut), P._lazy = 0), v) {
                    if (za(t._startAt = Jt.set(D, qa({
                            data: "isStart",
                            overwrite: !1,
                            parent: E,
                            immediateRender: !0,
                            lazy: !P && w(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: x,
                            callbackScope: O,
                            stagger: 0
                        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B || !y && !S) && t._startAt.revert(ht), y && C && e <= 0 && r <= 0) return void(e && (t._zTime = e))
                } else if (k && C && !P)
                    if (e && (y = !1), a = qa({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !P && w(T),
                            immediateRender: y,
                            stagger: 0,
                            parent: E
                        }, i), p && (a[l.prop] = p), za(t._startAt = Jt.set(D, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                        if (!e) return
                    } else _initTween(t._startAt, X, X);
                for (t._pt = t._ptCache = 0, T = C && w(T) || T && !C, n = 0; n < D.length; n++) {
                    if (h = (o = D[n])._gsap || ea(D)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = z === D ? n : z.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, d, z) && (t._pt = s = new ge(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            c[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) pt[a] && (f = ac(a, i, t, d, o, z)) ? f.priority && (u = 1) : c[a] = s = Qt.call(t, o, a, "get", i[a], d, z, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), R && t._pt && (Nt = t, L.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Nt = 0), t._pt && T && (dt[h.id] = 1)
                }
                u && me(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, A && e <= 0 && F.render(U, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
        },
        $t = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ht = {};
    ha($t + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ht[t] = 1
    });
    var Jt = function(z) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                O = p.defaults,
                k = p.scrollTrigger,
                M = p.yoyoEase,
                A = r.parent || L,
                S = (Z(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
            if (a._targets = S.length ? ea(S) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Xt({
                        data: "nested",
                        defaults: O || {},
                        targets: A && "nested" === A.data ? A.vars.targets : S
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = S.length, c = T && eb(T), v(T))
                        for (l in T) ~$t.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = ua(r, Ht)).stagger = 0, M && (u.yoyoEase = M), d && yt(u, d), f = S[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, S), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, S) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, S) : 0), s._ease = It.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    va(qa(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = jt(x.ease || r.ease || "none");
                    var C, P, D, E = 0;
                    if (Z(x)) x.forEach(function(t) {
                        return s.to(S, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (C = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = E = 0; o < C.length; o++)(D = {
                                ease: (P = C[o]).e,
                                duration: (P.t - (o ? C[o - 1].t : 0)) / 100 * _
                            })[l] = P.v, s.to(S, D, E), E += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || I || (Nt = _assertThisInitialized(a), L.killTweensOf(S), Nt = 0), Ka(A, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(A._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -X, a.render(Math.max(0, -m) || 0)), k && La(_assertThisInitialized(a), k), a
        }
        _inheritsLoose(Tween, z);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time,
                d = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = d - X < t && !_ ? d : t < X ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Qb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (c !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && !a && (St(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), St(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && St(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (St(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = Ot(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || B || i || t._zTime === X || !e && t._zTime) {
                    if (!t._initted && Ma(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && St(t, "onUpdate"), l && t._repeat && !r && t.parent && St(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || B || (St(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i) {
            d || Rt.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Kt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                            if ((o = h[l][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                            if (!o) return Wt = 1, t.vars[e] = "+=0", Kt(t, s), Wt = 0, 1;
                            f.push(o)
                        }
                    for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                c = t ? Mt(t) : f,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), tb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = yt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && tb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Va(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Va(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return L.killTweensOf(t, e, r)
        }, Tween
    }(Ut);
    qa(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Jt[r] = function() {
            var t = new Xt,
                e = kt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function oc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function wc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Zt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        te = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        ee = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        re = function _getSetter(t, e) {
            return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt
        },
        se = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        oe = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        le = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        fe = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        pe = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        _e = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        me = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ge = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = wc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || se, this.d = s || this, this.set = o || Zt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Xt, L = new Xt({
        sortChildren: !1,
        defaults: q,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), V.stringFilter = Fb;

    function Dc(t) {
        return (be[t] || xe).map(function(t) {
            return t()
        })
    }

    function Ec() {
        var t = Date.now(),
            o = [];
        2 < t - Oe && (Dc("matchMediaInit"), Te.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Dc("matchMediaRevert"), o.forEach(function(t) {
            return t.onMatch(t)
        }), Oe = t, Dc("matchMedia"))
    }
    var ye, Te = [],
        be = {},
        xe = [],
        Oe = 0,
        Me = ((ye = Context.prototype).add = function add(t, i, n) {
            function Dw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = Dw, t === s ? Dw(a) : t ? a[t] = Dw : Dw
        }, ye.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ye.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Jt && !(t.parent && "nested" === t.parent.data) && e.push(t)
            }), e
        }, ye.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ye.kill = function kill(e, t) {
            var r = this;
            if (e) {
                var i = this.getTweens();
                this.data.forEach(function(t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }))
                }), i.map(function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1
                }).forEach(function(t) {
                    return t.t.revert(e)
                }), this.data.forEach(function(t) {
                    return !(t instanceof Ut) && t.revert && t.revert(e)
                }), this._r.forEach(function(t) {
                    return t(e, r)
                }), this.isReverted = !0
            } else this.data.forEach(function(t) {
                return t.kill && t.kill()
            });
            if (this.clear(), t) {
                var n = Te.indexOf(this);
                ~n && Te.splice(n, 1)
            }
        }, ye.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }
    var Ae, Se = ((Ae = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Me(0, r || this.scope),
            o = s.conditions = {};
        for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (Te.indexOf(s) < 0 && Te.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Ec) : i.addEventListener("change", Ec));
        return a && e(s), this
    }, Ae.revert = function revert(t) {
        this.kill(t || {})
    }, Ae.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t
    }
    var Ce = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return wb(t)
            })
        },
        timeline: function timeline(t) {
            return new Xt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return L.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Mt(i)[0]);
            var a = fa(i || {}).get,
                s = e ? pa : oa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Mt(r)).length) {
                var n = r.map(function(t) {
                        return Pe.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e],
                o = fa(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && fe(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Vx(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Pe.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return Vx.tween = n, Vx
        },
        isTweening: function isTweening(t) {
            return 0 < L.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = jt(t.ease, q.ease)), ta(q, t || {})
        },
        config: function config(t) {
            return ta(V, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function(t, e, r) {
                return n(Mt(t), qa(e || {}, a), r)
            }, r && (Xt.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            It[t] = jt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? jt(t, e) : It
        },
        getById: function getById(t) {
            return L.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Xt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r;) i = r._next, !e && !r._dur && r instanceof Jt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
            return Ka(L, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Me(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Se(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return Te.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Ec()
        },
        addEventListener: function addEventListener(t, e) {
            var r = be[t] || (be[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = be[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return Z(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return Z(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: eb,
            random: hb,
            snap: gb,
            normalize: function normalize(t, e, r) {
                return At(t, e, 0, 1, r)
            },
            getUnit: Ya,
            clamp: function clamp(e, r, t) {
                return Wa(t, function(t) {
                    return Ot(e, r, t)
                })
            },
            splitColor: Ab,
            toArray: Mt,
            selector: cb,
            mapRange: At,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Ya(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        c = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Z(e) && !Z(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt(Z(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Qt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return fe(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Wa(t, a)
            },
            shuffle: db
        },
        install: P,
        effects: _t,
        ticker: Rt,
        updateRoot: Xt.updateRoot,
        plugins: pt,
        globalTimeline: L,
        core: {
            PropTween: ge,
            globals: S,
            Tween: Jt,
            Timeline: Xt,
            Animation: Ut,
            getCache: fa,
            _removeLinkedListItem: ya,
            reverting: function reverting() {
                return B
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return I = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Ce[t] = Jt[t]
    }), Rt.add(Xt.updateRoot), c = Ce.to({}, {
        duration: 0
    });

    function Ic(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Ic(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Pe = Ce.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Kc("roundProps", fb), Kc("modifiers"), Kc("snap", gb)) || Ce;
    Jt.version = Xt.version = Pe.version = "3.11.5", o = 1, x() && Ft();

    function ud(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function vd(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function wd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function xd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function yd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function zd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Ad(t, e, r) {
        return t.style[e] = r
    }

    function Bd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Cd(t, e, r) {
        return t._gsap[e] = r
    }

    function Dd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Ed(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Fd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Id(t, e) {
        var r = this,
            i = this.target,
            n = i.style;
        if (t in nr) {
            if (this.tfm = this.tfm || {}, "transform" === t) return fr.transform.split(",").forEach(function(t) {
                return Id.call(r, t, e)
            });
            if (~(t = fr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return r.tfm[t] = vr(i, t)
                }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : vr(i, t), 0 <= this.props.indexOf(cr)) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(dr, e, "")), t = cr
        }(n || e) && this.props.push(t, e, n[t])
    }

    function Jd(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Kd() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ur, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Be()) && t.isStart || n[cr] || (Jd(n), a.uncache = 1)
        }
    }

    function Ld(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Kd,
            save: Id
        };
        return t._gsap || Pe.core.getCache(t), e && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Nd(t, e) {
        var r = Ee.createElementNS ? Ee.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ee.createElement(t);
        return r.style ? r : Ee.createElement(t)
    }

    function Od(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(ur, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Od(t, _r(e) || e, 1) || ""
    }

    function Rd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (De = window, Ee = De.document, ze = Ee.documentElement, Fe = Nd("div") || {
            style: {}
        }, Nd("div"), cr = _r(cr), dr = cr + "Origin", Fe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Le = !!_r("perspective"), Be = Pe.core.reverting, Re = 1)
    }

    function Sd(t) {
        var e, r = Nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ze.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Sd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ze.removeChild(r), this.style.cssText = a, e
    }

    function Td(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Ud(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Sd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Sd || (r = Sd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Td(e, ["x", "cx", "x1"]) || 0,
            y: +Td(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Vd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ud(t))
    }

    function Wd(t, e) {
        if (e) {
            var r = t.style;
            e in nr && e !== dr && (e = cr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ur, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Xd(t, e, r, i, n, a) {
        var s = new ge(t._pt, e, r, 0, 1, a ? zd : yd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function $d(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Fe.style,
            f = hr.test(e),
            c = "svg" === t.tagName.toLowerCase(),
            d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        return i === h || !u || mr[i] || mr[h] ? u : ("px" === h || p || (u = $d(t, e, r, "px")), o = t.getCTM && Vd(t), !_ && "%" !== h || !nr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ee && a.appendChild || (a = Ee.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || gr[Od(a, "display")] || (l.position = Od(t, "position")), a === t && (l.position = "static"), a.appendChild(Fe), n = Fe[d], a.removeChild(Fe), l.position = "absolute", f && _ && ((s = fa(a)).time = Rt.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)))
    }

    function ae(t, e, r, i) {
        if (!r || "none" === r) {
            var n = _r(e, t, 1),
                a = n && Od(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Od(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new ge(this._pt, t.style, e, 0, 1, le),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Od(t, e) || i, t.style[e] = r), Fb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = $d(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? zd : yd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ce(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = yr[r] || r, e[1] = yr[i] || i, e.join(" ")
    }

    function de(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], nr[r] && (i = 1, r = "transformOrigin" === r ? dr : cr), Wd(a, r);
            i && (Wd(a, cr), u && (u.svg && a.removeAttribute("transform"), xr(a, 1), u.uncache = 1, Jd(s)))
        }
    }

    function he(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ie(t) {
        var e = Od(t, cr);
        return he(e) ? br : e.substr(7).match(et).map(ia)
    }

    function je(t, e) {
        var r, i, n, a, s = t._gsap || fa(t),
            o = t.style,
            u = ie(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? br : u : (u !== br || t.offsetParent || t === ze || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, ze.appendChild(t)), u = ie(t), n ? o.display = n : Wd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ze.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function ke(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || je(t, !0),
            f = h.xOrigin || 0,
            c = h.yOrigin || 0,
            d = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== br && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Ud(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[dr] = "0px 0px", a && (Xd(a, h, "xOrigin", f, w), Xd(a, h, "yOrigin", c, x), Xd(a, h, "xOffset", d, h.xOffset), Xd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function ne(t, e, r) {
        var i = Ya(e);
        return ia(parseFloat(e) + parseFloat($d(t, "x", r + "px", i))) + i
    }

    function ue(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? ar : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new ge(t._pt, e, i, n, l, vd), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function ve(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function we(t, e, r) {
        var i, n, a, s, o, u, h, l = ve({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[cr] = e, i = xr(r, 1), Wd(r, cr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[cr], f[cr] = e, i = xr(r, 1), f[cr] = a), nr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? $d(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ge(t._pt, i, n, o, u - o, ud), t._pt.u = h || 0, t._props.push(n));
        ve(i, l)
    }
    var De, Ee, ze, Re, Fe, Ie, Be, Le, Ye = It.Power0,
        Ve = It.Power1,
        qe = It.Power2,
        Ue = It.Power3,
        Xe = It.Power4,
        Ne = It.Linear,
        We = It.Quad,
        Qe = It.Cubic,
        Ke = It.Quart,
        Ge = It.Quint,
        $e = It.Strong,
        He = It.Elastic,
        Je = It.Back,
        Ze = It.SteppedEase,
        tr = It.Bounce,
        er = It.Sine,
        rr = It.Expo,
        ir = It.Circ,
        nr = {},
        ar = 180 / Math.PI,
        sr = Math.PI / 180,
        or = Math.atan2,
        ur = /([A-Z])/g,
        hr = /(left|right|width|margin|padding|x)/i,
        lr = /[\s,\(]\S/,
        fr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        cr = "transform",
        dr = cr + "Origin",
        pr = "O,Moz,ms,Ms,Webkit".split(","),
        _r = function _checkPropPrefix(t, e, r) {
            var i = (e || Fe).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(pr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? pr[n] : "") + t
        },
        mr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        gr = {
            grid: 1,
            flex: 1
        },
        vr = function _get(t, e, r, i) {
            var n;
            return Re || Rd(), e in fr && "transform" !== e && ~(e = fr[e]).indexOf(",") && (e = e.split(",")[0]), nr[e] && "transform" !== e ? (n = xr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Or(Od(t, dr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Tr[e] && Tr[e](t, e, r) || Od(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? $d(t, e, n, r) + r : n
        },
        yr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Tr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ge(t._pt, e, r, 0, 0, de);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        br = [1, 0, 0, 1, 0, 0],
        wr = {},
        xr = function _parseTransform(t, e) {
            var r = t._gsap || new qt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, O, k, M, A, S, C, P, D, E, z, R, F = t.style,
                I = r.scaleX < 0,
                B = "deg",
                L = getComputedStyle(t),
                Y = Od(t, dr) || "0";
            return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Vd(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[cr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[cr] ? L[cr] : "")), F.scale = F.rotate = F.translate = "none"), m = je(t, r.svg), r.svg && (M = r.uncache ? (A = t.getBBox(), Y = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), ke(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== br && (T = m[0], b = m[1], w = m[2], x = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? or(b, T) * ar : 0, (f = w || x ? or(w, x) * ar + u : 0) && (o *= Math.abs(Math.cos(f * sr))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], E = m[7], C = m[8], P = m[9], D = m[10], z = m[11], i = m[12], n = m[13], a = m[14], h = (g = or(R, D)) * ar, g && (M = O * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), A = k * v + P * y, S = R * v + D * y, C = O * -y + C * v, P = k * -y + P * v, D = R * -y + D * v, z = E * -y + z * v, O = M, k = A, R = S), l = (g = or(-w, D)) * ar, g && (v = Math.cos(-g), z = x * (y = Math.sin(-g)) + z * v, T = M = T * v - C * y, b = A = b * v - P * y, w = S = w * v - D * y), u = (g = or(b, T)) * ar, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), A = O * v + k * y, b = b * v - T * y, k = k * v - O * y, T = M, O = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(k * k + R * R)), g = or(O, k), f = 2e-4 < Math.abs(g) ? g * ar : 0, d = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !he(Od(t, cr)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + B, r.rotationX = ia(h) + B, r.rotationY = ia(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[dr] = Or(Y)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Le ? Cr : kr, r.uncache = 0, r
        },
        Or = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        kr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Cr(t, e)
        },
        Mr = "0deg",
        Ar = "0px",
        Sr = ") ",
        Cr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                d = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Mr || h !== Mr)) {
                var b, w = parseFloat(h) * sr,
                    x = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(l) * sr, b = Math.cos(w), a = ne(g, a, x * b * -v), s = ne(g, s, -Math.sin(w) * -v), o = ne(g, o, O * b * -v + v)
            }
            _ !== Ar && (y += "perspective(" + _ + Sr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ar && s === Ar && o === Ar || (y += o !== Ar || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Sr), u !== Mr && (y += "rotate(" + u + Sr), h !== Mr && (y += "rotateY(" + h + Sr), l !== Mr && (y += "rotateX(" + l + Sr), f === Mr && c === Mr || (y += "skew(" + f + ", " + c + Sr), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Sr), g.style[cr] = y || "translate(0, 0)"
        },
        Pr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                d = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= sr, d *= sr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= sr, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = $d(g, "x", l, "px"), O = $d(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), O = ia(O + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), O = ia(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[cr] = s)
        };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Tr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return vr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Dr, Er, zr, Rr = {
        name: "css",
        register: Rd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                O = i.vars.startAt;
            for (c in Re || Rd(), this.styles = this.styles || Ld(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== c && (o = e[c], !pt[c] || !ac(c, e, i, n, t, a)))
                    if (l = typeof o, f = Tr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Et.lastIndex = 0, Et.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = $d(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);
            else if ("undefined" !== l) {
                if (O && c in O ? (s = "function" == typeof O[c] ? O[c].call(i, n, t, a) : O[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += V.units[c] || Ya(vr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = vr(t, c))) : s = vr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in fr && ("autoAlpha" === c && (1 === h && "hidden" === vr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Xd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = fr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in nr)
                    if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || xr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ge(this._pt, x, cr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new ge(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, ud), this._pt.u = 0, w.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            b.push(dr, 0, x[dr]), o = ce(o), v.svg ? ke(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Xd(this, v, "zOrigin", v.zOrigin, p), Xd(this, x, c, Or(s), Or(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ke(t, o, 1, y, 0, this);
                            continue
                        }
                        if (c in wr) {
                            ue(this, v, c, h, _ ? ka(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Xd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            we(this, o, t);
                            continue
                        }
                    }
                else c in x || (c = _r(c) || c);
                if (m || (u || 0 === u) && (h || 0 === h) && !lr.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in V.units ? V.units[c] : d)) && (h = $d(t, c, s, p)), this._pt = new ge(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? ud : xd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = wd);
                else if (c in x) ae.call(this, t, c, s, _ ? _ + o : o);
                else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
                else if ("parseTransform" !== c) {
                    Q(c, o);
                    continue
                }
                m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c)
            }
            T && me(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Be())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: vr,
        aliases: fr,
        getSetter: function getSetter(t, e, r) {
            var i = fr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in nr && e !== dr && (t._gsap.x || vr(t, "x")) ? r && Ie === r ? "scale" === e ? Dd : Cd : (Ie = r || {}) && ("scale" === e ? Ed : Fd) : t.style && !u(t.style[e]) ? Ad : ~e.indexOf("-") ? Bd : re(t, e)
        },
        core: {
            _removeProperty: Wd,
            _getMatrix: je
        }
    };
    Pe.utils.checkPrefix = _r, Pe.core.getStyleSaver = Ld, zr = ha((Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Er = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        nr[t] = 1
    }), ha(Er, function(t) {
        V.units[t] = "deg", wr[t] = 1
    }), fr[zr[13]] = Dr + "," + Er, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        fr[e[1]] = zr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        V.units[t] = "px"
    }), Pe.registerPlugin(Rr);
    var Fr = Pe.registerPlugin(Rr) || Pe,
        Ir = Fr.core.Tween;
    e.Back = Je, e.Bounce = tr, e.CSSPlugin = Rr, e.Circ = ir, e.Cubic = Qe, e.Elastic = He, e.Expo = rr, e.Linear = Ne, e.Power0 = Ye, e.Power1 = Ve, e.Power2 = qe, e.Power3 = Ue, e.Power4 = Xe, e.Quad = We, e.Quart = Ke, e.Quint = Ge, e.Sine = er, e.SteppedEase = Ze, e.Strong = $e, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = Jt, e.TweenMax = Ir, e.default = Fr, e.gsap = Fr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});


/*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function l() {
        return "undefined" != typeof window
    }

    function m() {
        return f || l() && (f = window.gsap) && f.registerPlugin && f
    }

    function n(e) {
        return "string" == typeof e
    }

    function o(e) {
        return "function" == typeof e
    }

    function p(e, t) {
        var o = "x" === t ? "Width" : "Height",
            n = "scroll" + o,
            l = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[l] || c[l]) : e[n] - e["offset" + o]
    }

    function q(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c),
            function() {
                return e[o]
            }
    }

    function s(e, t) {
        if (!(e = y(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = e.getBoundingClientRect(),
            n = !t || t === T || t === c,
            l = n ? {
                top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
                left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            r = {
                x: o.left - l.left,
                y: o.top - l.top
            };
        return !n && t && (r.x += q(t, "x")(), r.y += q(t, "y")()), r
    }

    function t(e, t, o, l, r) {
        return isNaN(e) || "object" == typeof e ? n(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - r : "max" === e ? p(t, o) - r : Math.min(p(t, o), s(e, t)[o] - r) : parseFloat(e) - r
    }

    function u() {
        f = m(), l() && f && "undefined" != typeof document && document.body && (T = window, c = document.body, i = document.documentElement, y = f.utils.toArray, f.config({
            autoKillThreshold: 7
        }), v = f.config(), a = 1)
    }
    var f, a, T, i, c, y, v, h, r = {
        version: "3.11.5",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            f = e, u()
        },
        init: function init(e, l, r, s, i) {
            a || u();
            var p = this,
                c = f.getProperty(e, "scrollSnapType");
            p.isWin = e === T, p.target = e, p.tween = r, l = function _clean(e, t, l, r) {
                if (o(e) && (e = e(t, l, r)), "object" != typeof e) return n(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {
                    y: e
                };
                if (e.nodeType) return {
                    y: e,
                    x: e
                };
                var s, i = {};
                for (s in e) i[s] = "onAutoKill" !== s && o(e[s]) ? e[s](t, l, r) : e[s];
                return i
            }(l, s, e, i), p.vars = l, p.autoKill = !!l.autoKill, p.getX = q(e, "x"), p.getY = q(e, "y"), p.x = p.xPrev = p.getX(), p.y = p.yPrev = p.getY(), h = h || f.core.globals().ScrollTrigger, "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, {
                scrollBehavior: "auto"
            }), c && "none" !== c && (p.snap = 1, p.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != l.x ? (p.add(p, "x", p.x, t(l.x, e, "x", p.x, l.offsetX || 0), s, i), p._props.push("scrollTo_x")) : p.skipX = 1, null != l.y ? (p.add(p, "y", p.y, t(l.y, e, "y", p.y, l.offsetY || 0), s, i), p._props.push("scrollTo_y")) : p.skipY = 1
        },
        render: function render(e, t) {
            for (var o, n, l, r, s, i = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; i;) i.r(e, i.d), i = i._next;
            o = d || !t.skipX ? t.getX() : a, l = (n = d || !t.skipY ? t.getY() : y) - y, r = o - a, s = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), f && (!t.skipX && (s < r || r < -s) && o < p(c, "x") && (t.skipX = 1), !t.skipY && (s < l || l < -s) && n < p(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !g || 1 !== e && 0 !== e || (n = c.scrollTop, o = c.scrollLeft, x ? c.style.scrollSnapType = x : c.style.removeProperty("scroll-snap-type"), c.scrollTop = n + 1, c.scrollLeft = o + 1, c.scrollTop = n, c.scrollLeft = o), t.xPrev = t.x, t.yPrev = t.y, h && h.update()
        },
        kill: function kill(e) {
            var t = "scrollTo" === e;
            !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1)
        }
    };
    r.max = p, r.getOffset = s, r.buildGetter = q, m() && f.registerPlugin(r), e.ScrollToPlugin = r, e.default = r;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});


/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";

    function _() {}
    _.version = "2.0.8", "undefined" != typeof window && window.addEventListener("mousewheel", void 0);
    var P = "data-scrollmagic-pin-spacer";
    _.Controller = function(e) {
        function t() {
            var e, t, n;
            v && u && (e = R.type.Array(u) ? u : f.slice(0), u = !1, t = d, 0 != (n = (d = l.scrollPos()) - t) && (h = 0 < n ? "FORWARD" : i), h === i && e.reverse(), e.forEach(function(e, t) {
                e.update(!0)
            }))
        }

        function r() {
            n = R.rAF(t)
        }
        var n, o, i = "REVERSE",
            s = "PAUSED",
            a = z.defaults,
            l = this,
            c = R.extend({}, a, e),
            f = [],
            u = !1,
            d = 0,
            h = s,
            p = !0,
            g = 0,
            v = !0,
            m = function() {
                0 < c.refreshInterval && (o = window.setTimeout(E, c.refreshInterval))
            },
            w = function() {
                return c.vertical ? R.get.scrollTop(c.container) : R.get.scrollLeft(c.container)
            },
            y = function() {
                return c.vertical ? R.get.height(c.container) : R.get.width(c.container)
            },
            S = this._setScrollPos = function(e) {
                c.vertical ? p ? window.scrollTo(R.get.scrollLeft(), e) : c.container.scrollTop = e : p ? window.scrollTo(e, R.get.scrollTop()) : c.container.scrollLeft = e
            },
            b = function(e) {
                "resize" == e.type && (g = y(), h = s), !0 !== u && (u = !0, r())
            },
            E = function() {
                if (!p && g != y()) {
                    var t;
                    try {
                        t = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (e) {
                        (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    c.container.dispatchEvent(t)
                }
                f.forEach(function(e, t) {
                    e.refresh()
                }), m()
            };
        this._options = c;

        function x(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        }
        return this.addScene = function(e) {
                if (R.type.Array(e)) e.forEach(function(e, t) {
                    l.addScene(e)
                });
                else if (e instanceof _.Scene)
                    if (e.controller() !== l) e.addTo(l);
                    else if (!~f.indexOf(e))
                    for (var t in f.push(e), f = x(f), e.on("shift.controller_sort", function() {
                            f = x(f)
                        }), c.globalSceneOptions) e[t] && e[t].call(e, c.globalSceneOptions[t]);
                return l
            }, this.removeScene = function(e) {
                var t;
                return R.type.Array(e) ? e.forEach(function(e, t) {
                    l.removeScene(e)
                }) : -1 < (t = f.indexOf(e)) && (e.off("shift.controller_sort"), f.splice(t, 1), e.remove()), l
            }, this.updateScene = function(e, n) {
                return R.type.Array(e) ? e.forEach(function(e, t) {
                    l.updateScene(e, n)
                }) : n ? e.update(!0) : !0 !== u && e instanceof _.Scene && (~(u = u || []).indexOf(e) || u.push(e), u = x(u), r()), l
            }, this.update = function(e) {
                return b({
                    type: "resize"
                }), e && t(), l
            }, this.scrollTo = function(e, t) {
                if (R.type.Number(e)) S.call(c.container, e, t);
                else if (e instanceof _.Scene) e.controller() === l && l.scrollTo(e.scrollOffset(), t);
                else if (R.type.Function(e)) S = e;
                else {
                    var n = R.get.elements(e)[0];
                    if (n) {
                        for (; n.parentNode.hasAttribute(P);) n = n.parentNode;
                        var r = c.vertical ? "top" : "left",
                            o = R.get.offset(c.container),
                            i = R.get.offset(n);
                        p || (o[r] -= l.scrollPos()), l.scrollTo(i[r] - o[r], t)
                    }
                }
                return l
            }, this.scrollPos = function(e) {
                return arguments.length ? (R.type.Function(e) && (w = e), l) : w.call(l)
            }, this.info = function(e) {
                var t = {
                    size: g,
                    vertical: c.vertical,
                    scrollPos: d,
                    scrollDirection: h,
                    container: c.container,
                    isDocument: p
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
            }, this.loglevel = function(e) {
                return l
            }, this.enabled = function(e) {
                return arguments.length ? (v != e && (v = !!e, l.updateScene(f, !0)), l) : v
            }, this.destroy = function(e) {
                window.clearTimeout(o);
                for (var t = f.length; t--;) f[t].destroy(e);
                return c.container.removeEventListener("resize", b), c.container.removeEventListener("scroll", b), R.cAF(n), null
            },
            function() {
                for (var e in c) a.hasOwnProperty(e) || delete c[e];
                if (c.container = R.get.elements(c.container)[0], !c.container) throw "ScrollMagic.Controller init failed.";
                (p = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), g = y(), c.container.addEventListener("resize", b), c.container.addEventListener("scroll", b);
                var t = parseInt(c.refreshInterval, 10);
                c.refreshInterval = R.type.Number(t) ? t : a.refreshInterval, m()
            }(), l
    };
    var z = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    _.Controller.addOption = function(e, t) {
        z.defaults[e] = t
    }, _.Controller.extend = function(e) {
        var t = this;
        _.Controller = function() {
            return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
        }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller
    }, _.Scene = function(e) {
        var n, l, c = "BEFORE",
            f = "DURING",
            u = "AFTER",
            r = D.defaults,
            d = this,
            h = R.extend({}, r, e),
            p = c,
            g = 0,
            a = {
                start: 0,
                end: 0
            },
            v = 0,
            o = !0,
            s = {};
        this.on = function(e, o) {
            return R.type.Function(o) && (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split("."),
                    n = t[0],
                    r = t[1];
                "*" != n && (s[n] || (s[n] = []), s[n].push({
                    namespace: r || "",
                    callback: o
                }))
            }), d
        }, this.off = function(e, i) {
            return e && (e = e.trim().split(" ")).forEach(function(e, t) {
                var n = e.split("."),
                    r = n[0],
                    o = n[1] || "";
                ("*" === r ? Object.keys(s) : [r]).forEach(function(e) {
                    for (var t = s[e] || [], n = t.length; n--;) {
                        var r = t[n];
                        !r || o !== r.namespace && "*" !== o || i && i != r.callback || t.splice(n, 1)
                    }
                    t.length || delete s[e]
                })
            }), d
        }, this.trigger = function(e, n) {
            var t, r, o, i;
            return e && (t = e.trim().split("."), r = t[0], o = t[1], (i = s[r]) && i.forEach(function(e, t) {
                o && o !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n))
            })), d
        }, d.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update())
        }).on("shift.internal", function(e) {
            t(), d.update()
        }), this.addTo = function(e) {
            return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), i(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
                controller: l
            }), d.update()), d
        }, this.enabled = function(e) {
            return arguments.length ? (o != e && (o = !!e, d.update(!0)), d) : o
        }, this.remove = function() {
            var e;
            return l && (l.info("container").removeEventListener("resize", S), e = l, l = void 0, e.removeScene(d), d.trigger("remove")), d
        }, this.destroy = function(e) {
            return d.trigger("destroy", {
                reset: e
            }), d.remove(), d.off("*.*"), null
        }, this.update = function(e) {
            var t, n;
            return l && (e ? l.enabled() && o ? (t = l.info("scrollPos"), n = 0 < h.duration ? (t - a.start) / (a.end - a.start) : t >= a.start ? 1 : 0, d.trigger("update", {
                startPos: a.start,
                endPos: a.end,
                scrollPos: t
            }), d.progress(n)) : m && p === f && T(!0) : l.updateScene(d, !1)), d
        }, this.refresh = function() {
            return i(), y(), d
        }, this.progress = function(e) {
            if (arguments.length) {
                var t, n, r, o = !1,
                    i = p,
                    s = l ? l.info("scrollDirection") : "PAUSED",
                    a = h.reverse || g <= e;
                return 0 === h.duration ? (o = g != e, p = 0 === (g = e < 1 && a ? 0 : 1) ? c : f) : e < 0 && p !== c && a ? (p = c, o = !(g = 0)) : 0 <= e && e < 1 && a ? (g = e, p = f, o = !0) : 1 <= e && p !== u ? (g = 1, p = u, o = !0) : p !== f || a || T(), o && (t = {
                    progress: g,
                    state: p,
                    scrollDirection: s
                }, r = function(e) {
                    d.trigger(e, t)
                }, (n = p != i) && i !== f && (r("enter"), r(i === c ? "start" : "end")), r("progress"), n && p !== f && (r(p === c ? "start" : "end"), r("leave"))), d
            }
            return g
        };
        var m, w, t = function() {
                a = {
                    start: v + h.offset
                }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration
            },
            i = function(e) {
                var t;
                !n || x(t = "duration", n.call(d)) && !e && (d.trigger("change", {
                    what: t,
                    newval: h[t]
                }), d.trigger("shift", {
                    reason: t
                }))
            },
            y = function(e) {
                var t = 0,
                    n = h.triggerElement;
                if (l && (n || 0 < v)) {
                    if (n)
                        if (n.parentNode) {
                            for (var r = l.info(), o = R.get.offset(r.container), i = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) n = n.parentNode;
                            var s = R.get.offset(n);
                            r.isDocument || (o[i] -= l.scrollPos()), t = s[i] - o[i]
                        } else d.triggerElement(void 0);
                    var a = t != v;
                    v = t, a && !e && d.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                }
            },
            S = function(e) {
                0 < h.triggerHook && d.trigger("shift", {
                    reason: "containerResize"
                })
            },
            b = R.extend(D.validate, {
                duration: function(t) {
                    var e;
                    if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/) && (e = parseFloat(t) / 100, t = function() {
                            return l ? l.info("size") * e : 0
                        }), R.type.Function(t)) {
                        n = t;
                        try {
                            t = parseFloat(n.call(d))
                        } catch (e) {
                            t = -1
                        }
                    }
                    if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n = n && void 0, 0;
                    return t
                }
            }),
            E = function(e) {
                (e = arguments.length ? [e] : Object.keys(b)).forEach(function(t, e) {
                    var n;
                    if (b[t]) try {
                        n = b[t](h[t])
                    } catch (e) {
                        n = r[t]
                    } finally {
                        h[t] = n
                    }
                })
            },
            x = function(e, t) {
                var n = !1,
                    r = h[e];
                return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n
            },
            z = function(t) {
                d[t] || (d[t] = function(e) {
                    return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
                        what: t,
                        newval: h[t]
                    }), ~D.shifts.indexOf(t) && d.trigger("shift", {
                        reason: t
                    })), d) : h[t]
                })
            };
        this.controller = function() {
            return l
        }, this.state = function() {
            return p
        }, this.scrollOffset = function() {
            return a.start
        }, this.triggerPosition = function() {
            var e = h.offset;
            return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e
        }, d.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (p === u && t || p === f && 0 === h.duration) && T(), t && A()
        }).on("progress.internal", function(e) {
            T()
        }).on("add.internal", function(e) {
            A()
        }).on("destroy.internal", function(e) {
            d.removePin(e.reset)
        });

        function C() {
            l && m && p === f && !l.info("isDocument") && T()
        }

        function F() {
            l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && A()
        }

        function L(e) {
            l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        }
        var T = function(e) {
                var t, n, r, o, i, s;
                m && l && (t = l.info(), n = w.spacer.firstChild, e || p !== f ? (r = {
                    position: w.inFlow ? "relative" : "absolute",
                    top: 0,
                    left: 0
                }, o = R.css(n, "position") != r.position, w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) || p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom"))) && (o = !0) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), o && A()) : ("fixed" != R.css(n, "position") && (R.css(n, {
                    position: "fixed"
                }), A()), i = R.get.offset(w.spacer, !0), s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10, i[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
                    top: i.top,
                    left: i.left
                })))
            },
            A = function() {
                var e, t, n, r, o;
                m && l && w.inFlow && (e = p === f, t = l.info("vertical"), n = w.spacer.firstChild, r = R.isMarginCollapseType(R.css(w.spacer, "display")), o = {}, w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
                    width: R.get.width(w.spacer)
                }) : R.css(m, {
                    width: "100%"
                }) : (o["min-width"] = R.get.width(t ? m : n, !0, !0), o.width = e ? o["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
                    height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
                }) : R.css(m, {
                    height: "100%"
                }) : (o["min-height"] = R.get.height(t ? n : m, !0, !r), o.height = e ? o["min-height"] : "auto"), w.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = h.duration * g, o["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, o))
            };
        this.setPin = function(e, t) {
            if (t = R.extend({}, {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                }, t), !(e = R.get.elements(e)[0])) return d;
            if ("fixed" === R.css(e, "position")) return d;
            if (m) {
                if (m === e) return d;
                d.removePin()
            }
            var n = (m = e).parentNode.style.display,
                r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            m.parentNode.style.display = "none";
            var o = "absolute" != R.css(m, "position"),
                i = R.css(m, r.concat(["display"])),
                s = R.css(m, ["width", "height"]);
            m.parentNode.style.display = n, !o && t.pushFollowers && (t.pushFollowers = !1);
            var a, l = m.parentNode.insertBefore(document.createElement("div"), m),
                c = R.extend(i, {
                    position: o ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            return o || R.extend(c, R.css(m, ["width", "height"])), R.css(l, c), l.setAttribute(P, ""), R.addClass(l, t.spacerClass), w = {
                spacer: l,
                relSize: {
                    width: "%" === s.width.slice(-1),
                    height: "%" === s.height.slice(-1),
                    autoFullWidth: "auto" === s.width && o && R.isMarginCollapseType(i.display)
                },
                pushFollowers: t.pushFollowers,
                inFlow: o
            }, m.___origStyle || (m.___origStyle = {}, a = m.style, r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                m.___origStyle[e] = a[e] || ""
            })), w.relSize.width && R.css(l, {
                width: s.width
            }), w.relSize.height && R.css(l, {
                height: s.height
            }), l.appendChild(m), R.css(m, {
                position: o ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", C), window.addEventListener("resize", C), window.addEventListener("resize", F), m.addEventListener("mousewheel", L), m.addEventListener("DOMMouseScroll", L), T(), d
        }, this.removePin = function(e) {
            var t, n, r;
            return m && (p === f && T(!0), !e && l || ((t = w.spacer.firstChild).hasAttribute(P) && (n = w.spacer.style, r = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                r[e] = n[e] || ""
            }), R.css(t, r)), w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle)), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), window.removeEventListener("resize", F), m.removeEventListener("mousewheel", L), m.removeEventListener("DOMMouseScroll", L), m = void 0), d
        };
        var N, O = [];
        return d.on("destroy.internal", function(e) {
                d.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var n = R.get.elements(e);
                return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function(e) {
                    var n = "enter" === e.type ? R.addClass : R.removeClass;
                    O.forEach(function(e, t) {
                        n(e, N)
                    })
                })), d
            }, this.removeClassToggle = function(e) {
                return e && O.forEach(function(e, t) {
                    R.removeClass(e, N)
                }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d
            },
            function() {
                for (var e in h) r.hasOwnProperty(e) || delete h[e];
                for (var t in r) z(t);
                E()
            }(), d
    };
    var D = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !R.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = R.get.elements(e)[0];
                    if (!t || !t.parentNode) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    _.Scene.addOption = function(e, t, n, r) {
        e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e))
    }, _.Scene.extend = function(e) {
        var t = this;
        _.Scene = function() {
            return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this
        }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene
    }, _.Event = function(e, t, n, r) {
        for (var o in r = r || {}) this[o] = r[o];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var R = _._util = function(s) {
        function a(e) {
            return parseFloat(e) || 0
        }

        function l(e) {
            return e.currentStyle ? e.currentStyle : s.getComputedStyle(e)
        }

        function r(e, t, n, r) {
            if ((t = t === document ? s : t) === s) r = !1;
            else if (!u.DomElement(t)) return 0;
            e = e[0].toUpperCase() + e.substr(1).toLowerCase();
            var o, i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
            return n && r && (o = l(t), i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)), i
        }

        function c(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        }
        var e = {};
        e.extend = function(e) {
            for (e = e || {}, f = 1; f < arguments.length; f++)
                if (arguments[f])
                    for (var t in arguments[f]) arguments[f].hasOwnProperty(t) && (e[t] = arguments[f][t]);
            return e
        }, e.isMarginCollapseType = function(e) {
            return !!~["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        };
        for (var o = 0, t = ["ms", "moz", "webkit", "o"], n = s.requestAnimationFrame, i = s.cancelAnimationFrame, f = 0; !n && f < 4; ++f) n = s[t[f] + "RequestAnimationFrame"], i = s[t[f] + "CancelAnimationFrame"] || s[t[f] + "CancelRequestAnimationFrame"];
        n = n || function(e) {
            var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - o)),
                r = s.setTimeout(function() {
                    e(t + n)
                }, n);
            return o = t + n, r
        }, i = i || function(e) {
            s.clearTimeout(e)
        }, e.rAF = n.bind(s), e.cAF = i.bind(s);
        var u = e.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        u.String = function(e) {
            return "string" === u(e)
        }, u.Function = function(e) {
            return "function" === u(e)
        }, u.Array = function(e) {
            return Array.isArray(e)
        }, u.Number = function(e) {
            return !u.Array(e) && 0 <= e - parseFloat(e) + 1
        }, u.DomElement = function(e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = e.get = {};
        return d.elements = function(e) {
            var t = [];
            if (u.String(e)) try {
                e = document.querySelectorAll(e)
            } catch (e) {
                return t
            }
            if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
                for (var n = 0, r = t.length = e.length; n < r; n++) {
                    var o = e[n];
                    t[n] = u.DomElement(o) ? o : d.elements(o)
                } else !u.DomElement(e) && e !== document && e !== s || (t = [e]);
            return t
        }, d.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0
        }, d.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0
        }, d.width = function(e, t, n) {
            return r("width", e, t, n)
        }, d.height = function(e, t, n) {
            return r("height", e, t, n)
        }, d.offset = function(e, t) {
            var n, r = {
                top: 0,
                left: 0
            };
            return e && e.getBoundingClientRect && (n = e.getBoundingClientRect(), r.top = n.top, r.left = n.left, t || (r.top += d.scrollTop(), r.left += d.scrollLeft())), r
        }, e.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, e.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, e.css = function(e, t) {
            if (u.String(t)) return l(e)[c(t)];
            if (u.Array(t)) {
                var n = {},
                    r = l(e);
                return t.forEach(function(e, t) {
                    n[e] = r[c(e)]
                }), n
            }
            for (var o in t) {
                var i = t[o];
                i == parseFloat(i) && (i += "px"), e.style[c(o)] = i
            }
        }, e
    }(window || {});
    return _
});
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, n) {
    var r;
    "function" == typeof define && define.amd ? define(["ScrollMagic", "gsap", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (r = require("gsap/dist/gsap") || require("gsap"), n(require("scrollmagic"), r, TweenMax || r, TimelineMax || r)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.gsap, e.gsap || e.TweenMax || e.TweenLite, e.gsap || e.TimelineMax || e.TimelineLite)
}(this, function(e, n, p, u) {
    "use strict";
    var g = n && 3 <= parseFloat(n.version);
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }), e.Scene.extend(function() {
        var o, i = this;
        i.on("progress.plugin_gsap", function() {
            s()
        }), i.on("destroy.plugin_gsap", function(e) {
            i.removeTween(e.reset)
        });
        var s = function() {
            var e, n;
            o && (e = i.progress(), n = i.state(), o.repeat && -1 === o.repeat() ? "DURING" === n && o.paused() ? o.play() : "DURING" === n || o.paused() || o.pause() : e != o.progress() && (0 === i.duration() ? 0 < e ? o.play() : o.reverse() : i.tweenChanges() && o.tweenTo ? o.tweenTo(e * o.duration()) : o.progress(e).pause()))
        };
        i.setTween = function(e, n, r) {
            var t, a;
            1 < arguments.length && (a = "number" == typeof arguments[1], g ? (a || (r = n), r.hasOwnProperty("duration") || (r.duration = a ? n : 1)) : arguments.length < 3 && (r = n, n = 1), e = g ? p.to(e, r) : p.to(e, n, r));
            try {
                (t = u && !g ? new u({
                    smoothChildTiming: !0
                }).add(e) : e).pause()
            } catch (e) {
                return i
            }
            return o && i.removeTween(), o = t, e.repeat && -1 === e.repeat() && (o.repeat(-1), o.yoyo(e.yoyo())), s(), i
        }, i.removeTween = function(e) {
            return o && (e && o.progress(0).pause(), o.kill(), o = void 0), i
        }
    })
});
document.addEventListener("DOMContentLoaded", function() {
    var o, e = [].slice.call(document.querySelectorAll("video.lazy"));
    "IntersectionObserver" in window && (o = new IntersectionObserver(function(e, t) {
        e.forEach(function(e) {
            if (e.isIntersecting) {
                for (var t in e.target.children) {
                    t = e.target.children[t];
                    "string" == typeof t.tagName && "SOURCE" === t.tagName && (t.src = t.dataset.src)
                }
                e.target.load(), e.target.classList.remove("lazy"), o.unobserve(e.target)
            }
        })
    }), e.forEach(function(e) {
        o.observe(e)
    }))
}), window.addEventListener("load", () => {
    document.querySelector("body").removeAttribute("style"), heroLogos(), animation(), headerMenu(), btn()
});
const btn = () => {
        document.querySelectorAll(".btn").forEach(e => {
            var t, o, n, r = getComputedStyle(e),
                i = document.createElement("div"),
                l = (i.classList.add("lines"), document.createElement("div")),
                d = document.createElement("div"),
                a = (a = e.offsetWidth, t = e.offsetHeight, r = parseInt(r.borderRadius, 10), o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = document.createElementNS("http://www.w3.org/2000/svg", "rect"), o.setAttributeNS("http://www.w3.org/2000/svg", "viewBox", `0 0 ${a} ` + t), n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("rx", "" + r), n.setAttribute("ry", "" + r), n.setAttribute("pathLength", "10"), o.appendChild(n), o);
            l.appendChild(a), l.appendChild(a.cloneNode(!0)), l.appendChild(a.cloneNode(!0)), l.appendChild(a.cloneNode(!0)), d.appendChild(a.cloneNode(!0)), d.appendChild(a.cloneNode(!0)), d.appendChild(a.cloneNode(!0)), d.appendChild(a.cloneNode(!0)), i.appendChild(l), i.appendChild(d), e.appendChild(i), e.addEventListener("pointerenter", () => {
                e.classList.add("start")
            }), a.addEventListener("animationend", () => {
                e.classList.remove("start")
            })
        })
    },
    headerMenu = () => {
        let t = document.querySelector(".header");
        document.querySelector(".header-btn").addEventListener("click", e => {
            e.preventDefault(), t.classList.contains("active") ? (t.classList.remove("active"), document.querySelector("html").classList.remove("overflow")) : (t.classList.add("active"), document.querySelector("html").classList.add("overflow"), disableScroll(".header-drop"))
        }), window.addEventListener("resize", () => {
            1024 < window.innerWidth && t.classList.remove("active")
        })
    },
    heroLogos = () => {
        $(".js-hero-logos").marquee({
            duration: 14e3,
            delayBeforeStart: 0,
            duplicated: !0
        })
    },
    animation = () => {
        let r = new ScrollMagic.Controller;
        var e = new TweenMax.fromTo(".header", {
                opacity: 0,
                y: "-100%"
            }, {
                opacity: 1,
                y: "0%",
                duration: 1
            }),
            e = (new ScrollMagic.Scene({
                reverse: !1
            }).setTween(e).addTo(r), new TweenMax.fromTo(".hero-footer", {
                opacity: 0,
                y: "100%"
            }, {
                opacity: 1,
                y: "0%",
                duration: 1
            }));
        if (new ScrollMagic.Scene({
                reverse: !1
            }).setTween(e).addTo(r), 768 < window.innerWidth) {
            let o = document.querySelectorAll(".deploy-item"),
                n = window.innerHeight * o.length;
            const i = e => {
                document.querySelector(".deploy-items").style.height = e.querySelector(".deploy-item__inner").offsetHeight + "px"
            };
            document.querySelector(".deploy-items").style.height = o[0].querySelector(".deploy-item__inner").offsetHeight + "px", o.forEach((e, t) => {
                (0 == t ? (window["deployTween" + t] = TweenMax.fromTo(e, {
                    opacity: 1,
                    y: "0%"
                }, {
                    opacity: 0,
                    y: "-50%",
                    onStart: () => {
                        i(e)
                    },
                    onReverseComplete: () => {
                        i(e)
                    }
                }), new ScrollMagic.Scene({
                    triggerElement: ".section--deploy",
                    triggerHook: 0,
                    duration: n / o.length / 2,
                    offset: n / o.length * t + n / o.length / 2
                }).setTween(window["deployTween" + t])) : t == o.length - 1 ? (window["deployTween" + t] = TweenMax.fromTo(e, {
                    opacity: 0,
                    y: "50%"
                }, {
                    opacity: 1,
                    y: "0%",
                    onStart: () => {
                        i(e)
                    },
                    onReverseComplete: () => {
                        i(e)
                    }
                }), new ScrollMagic.Scene({
                    triggerElement: ".section--deploy",
                    triggerHook: 0,
                    duration: n / o.length / 2,
                    offset: n / o.length * t
                }).setTween(window["deployTween" + t])) : (window["deployTween" + t] = TweenMax.fromTo(e, {
                    opacity: 0,
                    y: "50%"
                }, {
                    opacity: 1,
                    y: "0%",
                    onStart: () => {
                        i(e)
                    },
                    onReverseComplete: () => {
                        i(e)
                    }
                }), new ScrollMagic.Scene({
                    triggerElement: ".section--deploy",
                    triggerHook: 0,
                    duration: n / o.length / 2,
                    offset: n / o.length * t
                }).setTween(window["deployTween" + t]).addTo(r), window["_deployTween" + t] = TweenMax.fromTo(e.querySelector(".deploy-item__inner"), {
                    opacity: 1,
                    y: "0%"
                }, {
                    opacity: 0,
                    y: "-50%"
                }), new ScrollMagic.Scene({
                    triggerElement: ".section--deploy",
                    triggerHook: 0,
                    duration: n / o.length / 2,
                    offset: n / o.length * t + n / o.length / 2
                }).setTween(window["_deployTween" + t]))).addTo(r)
            }), new ScrollMagic.Scene({
                triggerElement: ".section--deploy",
                triggerHook: 0,
                duration: n
            }).setPin(".section--deploy").addTo(r)
        }
        document.querySelectorAll(".anime-item").forEach((e, t) => {
            e.dataset.static ? window["animeItemOffset" + t] = "0%" : (window["animeItemOffset" + t] = "20%", e.offsetHeight / 5 < 30 && (window["animeItemOffset" + t] = "30px"));
            let o;
            o = 768 < window.innerWidth ? e.dataset.delay * (1 / 3) : 0, window["animeItemTween" + t] = new TweenMax.fromTo(e, {
                opacity: 0,
                y: window["animeItemOffset" + t]
            }, {
                opacity: 1,
                y: "0%",
                duration: 1,
                delay: o
            }), new ScrollMagic.Scene({
                triggerElement: e,
                triggerHook: .9,
                reverse: !1
            }).setTween(window["animeItemTween" + t]).addTo(r)
        }), r.scrollTo(function(e) {
            let t;
            1 < Math.abs((e - window.scrollY) / 1500) && Math.abs((e - window.scrollY) / 1500) < 2.5 ? t = Math.abs((e - window.scrollY) / 1500) : 2.5 < Math.abs((e - window.scrollY) / 1500) ? t = 2.5 : Math.abs((e - window.scrollY) / 1500) < 1 && (t = 1), TweenMax.to(window, t, {
                scrollTo: {
                    y: e - document.querySelector(".header").offsetHeight
                }
            })
        }), document.querySelectorAll(".header-menu__link").forEach(t => {
            t.addEventListener("click", e => {
                "#" === t.getAttribute("href")[0] && (e.preventDefault(), window.anchorClick = !0, document.querySelector(".header").classList.contains("active") && (document.querySelector(".header").classList.remove("active"), document.querySelector("html").classList.remove("overflow")), r.scrollTo(t.getAttribute("href")))
            })
        }), document.querySelector(".hero").style.minHeight = window.innerHeight + "px"
    };

function disableScroll(e) {
    var o = document.querySelector(e),
        n = null;
    o.addEventListener("touchstart", function(e) {
        1 === e.targetTouches.length && (n = e.targetTouches[0].clientY)
    }, !1), o.addEventListener("touchmove", function(e) {
        var t;
        1 === e.targetTouches.length && (t = (e = e).targetTouches[0].clientY - n, 0 === o.scrollTop && 0 < t && e.preventDefault(), o.scrollHeight - o.scrollTop <= o.clientHeight) && t < 0 && e.preventDefault()
    }, !1)
}