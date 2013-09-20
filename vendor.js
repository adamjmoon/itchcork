/*! Knockout JavaScript library v3.0.0beta
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)*/
(function () {
    function F(p) {
        return function () {
            return p
        }
    };
    (function (p) {
        var w = this || (0, eval)("this"), u = w.document, G = w.navigator, t = w.jQuery, B = w.JSON;
        (function (p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], p) : p(w.ko = {})
        })(function (C) {
            function E(b, c, d, e) {
                a.d[b] = {init: function (b) {
                    a.a.f.set(b, H, {});
                    return{controlsDescendantBindings: !0}
                }, update: function (b, f, l, k, h) {
                    l = a.a.f.get(b, H);
                    f = a.a.c(f());
                    k = !d !== !f;
                    var n = !l.jb;
                    if (n || c || k !== l.Bb)n && (l.jb =
                        a.a.Ta(a.e.childNodes(b), !0)), k ? (n || a.e.R(b, a.a.Ta(l.jb)), a.Qa(e ? e(h, f) : h, b)) : a.e.ga(b), l.Bb = k
                }};
                a.g.W[b] = !1;
                a.e.N[b] = !0
            }

            var a = "undefined" !== typeof C ? C : {};
            a.b = function (b, c) {
                for (var d = b.split("."), e = a, g = 0; g < d.length - 1; g++)e = e[d[g]];
                e[d[d.length - 1]] = c
            };
            a.s = function (a, c, d) {
                a[c] = d
            };
            a.version = "3.0.0beta";
            a.b("version", a.version);
            a.a = function () {
                function b(a, b) {
                    for (var h in a)a.hasOwnProperty(h) && b(h, a[h])
                }

                function c(b, k) {
                    if ("input" !== a.a.v(b) || !b.type || "click" != k.toLowerCase())return!1;
                    var h = b.type;
                    return"checkbox" ==
                        h || "radio" == h
                }

                var d = {}, e = {};
                d[G && /Firefox\/2/i.test(G.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                d.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(d, function (a, b) {
                    if (b.length)for (var h = 0, c = b.length; h < c; h++)e[b[h]] = a
                });
                var g = {propertychange: !0}, f = u && function () {
                    for (var a = 3, b = u.createElement("div"), h = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", h[0];);
                    return 4 < a ? a :
                        p
                }();
                return{Xa: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], m: function (a, b) {
                    for (var h = 0, c = a.length; h < c; h++)b(a[h])
                }, k: function (a, b) {
                    if ("function" == typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a, b);
                    for (var h = 0, c = a.length; h < c; h++)if (a[h] === b)return h;
                    return-1
                }, Ra: function (a, b, h) {
                    for (var c = 0, d = a.length; c < d; c++)if (b.call(h, a[c]))return a[c];
                    return null
                }, fa: function (b, c) {
                    var h = a.a.k(b, c);
                    0 <= h && b.splice(h, 1)
                }, Sa: function (b) {
                    b = b || [];
                    for (var c = [], h = 0, d = b.length; h < d; h++)0 >
                        a.a.k(c, b[h]) && c.push(b[h]);
                    return c
                }, ea: function (a, b) {
                    a = a || [];
                    for (var c = [], d = 0, f = a.length; d < f; d++)c.push(b(a[d]));
                    return c
                }, da: function (a, b) {
                    a = a || [];
                    for (var c = [], d = 0, f = a.length; d < f; d++)b(a[d]) && c.push(a[d]);
                    return c
                }, V: function (a, b) {
                    if (b instanceof Array)a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++)a.push(b[c]);
                    return a
                }, T: function (b, c, h) {
                    var d = a.a.k(a.a.Fa(b), c);
                    0 > d ? h && b.push(c) : h || b.splice(d, 1)
                }, extend: function (a, b) {
                    if (b)for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }, H: b, Ba: function (a, b) {
                    if (!a)return a;
                    var c = {}, d;
                    for (d in a)a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                    return c
                }, ua: function (b) {
                    for (; b.firstChild;)a.removeNode(b.firstChild)
                }, Tb: function (b) {
                    b = a.a.P(b);
                    for (var c = u.createElement("div"), h = 0, d = b.length; h < d; h++)c.appendChild(a.J(b[h]));
                    return c
                }, Ta: function (b, c) {
                    for (var d = 0, f = b.length, e = []; d < f; d++) {
                        var m = b[d].cloneNode(!0);
                        e.push(c ? a.J(m) : m)
                    }
                    return e
                }, R: function (b, c) {
                    a.a.ua(b);
                    if (c)for (var d = 0, f = c.length; d < f; d++)b.appendChild(c[d])
                }, ib: function (b, c) {
                    var d = b.nodeType ? [b] : b;
                    if (0 <
                        d.length) {
                        for (var f = d[0], e = f.parentNode, m = 0, g = c.length; m < g; m++)e.insertBefore(c[m], f);
                        m = 0;
                        for (g = d.length; m < g; m++)a.removeNode(d[m])
                    }
                }, X: function (a, b) {
                    if (a.length) {
                        for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)a.splice(0, 1);
                        if (1 < a.length) {
                            var c = a[0], d = a[a.length - 1];
                            for (a.length = 0; c !== d;)if (a.push(c), c = c.nextSibling, !c)return;
                            a.push(d)
                        }
                    }
                    return a
                }, lb: function (a, b) {
                    7 > f ? a.setAttribute("selected", b) : a.selected = b
                }, ka: function (a) {
                    return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,
                        "")
                }, cc: function (b, c) {
                    for (var d = [], f = (b || "").split(c), e = 0, m = f.length; e < m; e++) {
                        var g = a.a.ka(f[e]);
                        "" !== g && d.push(g)
                    }
                    return d
                }, Zb: function (a, b) {
                    a = a || "";
                    return b.length > a.length ? !1 : a.substring(0, b.length) === b
                }, Eb: function (a, b) {
                    if (b.compareDocumentPosition)return 16 == (b.compareDocumentPosition(a) & 16);
                    for (; null != a;) {
                        if (a == b)return!0;
                        a = a.parentNode
                    }
                    return!1
                }, ta: function (b) {
                    return a.a.Eb(b, b.ownerDocument)
                }, Oa: function (b) {
                    return!!a.a.Ra(b, a.a.ta)
                }, v: function (a) {
                    return a && a.tagName && a.tagName.toLowerCase()
                },
                    r: function (b, d, h) {
                        var e = f && g[d];
                        if (e || "undefined" == typeof t)if (e || "function" != typeof b.addEventListener)if ("undefined" != typeof b.attachEvent) {
                            var q = function (a) {
                                h.call(b, a)
                            }, m = "on" + d;
                            b.attachEvent(m, q);
                            a.a.B.ba(b, function () {
                                b.detachEvent(m, q)
                            })
                        } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(d, h, !1); else {
                            if (c(b, d)) {
                                var x = h;
                                h = function (a, b) {
                                    var c = this.checked;
                                    b && (this.checked = !0 !== b.yb);
                                    x.call(this, a);
                                    this.checked = c
                                }
                            }
                            t(b).bind(d, h)
                        }
                    }, aa: function (a, b) {
                        if (!a || !a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
                        if ("undefined" != typeof t) {
                            var d = [];
                            c(a, b) && d.push({yb: a.checked});
                            t(a).trigger(b, d)
                        } else if ("function" == typeof u.createEvent)if ("function" == typeof a.dispatchEvent)d = u.createEvent(e[b] || "HTMLEvents"), d.initEvent(b, !0, !0, w, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if ("undefined" != typeof a.fireEvent)c(a, b) && (a.checked = !0 !== a.checked),
                            a.fireEvent("on" + b); else throw Error("Browser doesn't support triggering events");
                    }, c: function (b) {
                        return a.O(b) ? b() : b
                    }, Fa: function (b) {
                        return a.O(b) ? b.u() : b
                    }, la: function (b, c, d) {
                        if (c) {
                            var f = /\S+/g, e = b.className.match(f) || [];
                            a.a.m(c.match(f), function (b) {
                                a.a.T(e, b, d)
                            });
                            b.className = e.join(" ")
                        }
                    }, mb: function (b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p)d = "";
                        var f = a.e.firstChild(b);
                        !f || 3 != f.nodeType || a.e.nextSibling(f) ? a.e.R(b, [u.createTextNode(d)]) : f.data = d;
                        a.a.Hb(b)
                    }, kb: function (a, b) {
                        a.name = b;
                        if (7 >= f)try {
                            a.mergeAttributes(u.createElement("<input name='" +
                                a.name + "'/>"), !1)
                        } catch (c) {
                        }
                    }, Hb: function (a) {
                        9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                    }, Fb: function (a) {
                        if (f) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    }, Xb: function (b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], f = b; f <= c; f++)d.push(f);
                        return d
                    }, P: function (a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c]);
                        return b
                    }, ac: 6 === f, bc: 7 === f, ha: f, Ya: function (b, c) {
                        for (var d = a.a.P(b.getElementsByTagName("input")).concat(a.a.P(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function (a) {
                            return a.name === c
                        } : function (a) {
                            return c.test(a.name)
                        }, e = [], m = d.length - 1; 0 <= m; m--)f(d[m]) && e.push(d[m]);
                        return e
                    }, Ub: function (b) {
                        return"string" == typeof b && (b = a.a.ka(b)) ? B && B.parse ? B.parse(b) : (new Function("return " + b))() : null
                    }, Ja: function (b, c, d) {
                        if (!B || !B.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return B.stringify(a.a.c(b), c, d)
                    }, Vb: function (c, d, f) {
                        f = f || {};
                        var e = f.params || {}, g = f.includeFields || this.Xa, m = c;
                        if ("object" == typeof c && "form" === a.a.v(c))for (var m = c.action, x = g.length - 1; 0 <= x; x--)for (var v = a.a.Ya(c, g[x]), y = v.length - 1; 0 <= y; y--)e[v[y].name] = v[y].value;
                        d = a.a.c(d);
                        var r = u.createElement("form");
                        r.style.display = "none";
                        r.action = m;
                        r.method = "post";
                        for (var p in d)c = u.createElement("input"), c.name = p, c.value = a.a.Ja(a.a.c(d[p])), r.appendChild(c);
                        b(e, function (a, b) {
                            var c = u.createElement("input");
                            c.name =
                                a;
                            c.value = b;
                            r.appendChild(c)
                        });
                        u.body.appendChild(r);
                        f.submitter ? f.submitter(r) : r.submit();
                        setTimeout(function () {
                            r.parentNode.removeChild(r)
                        }, 0)
                    }}
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.m);
            a.b("utils.arrayFirst", a.a.Ra);
            a.b("utils.arrayFilter", a.a.da);
            a.b("utils.arrayGetDistinctValues", a.a.Sa);
            a.b("utils.arrayIndexOf", a.a.k);
            a.b("utils.arrayMap", a.a.ea);
            a.b("utils.arrayPushAll", a.a.V);
            a.b("utils.arrayRemoveItem", a.a.fa);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost",
                a.a.Xa);
            a.b("utils.getFormFields", a.a.Ya);
            a.b("utils.peekObservable", a.a.Fa);
            a.b("utils.postJson", a.a.Vb);
            a.b("utils.parseJson", a.a.Ub);
            a.b("utils.registerEventHandler", a.a.r);
            a.b("utils.stringifyJson", a.a.Ja);
            a.b("utils.range", a.a.Xb);
            a.b("utils.toggleDomNodeCssClass", a.a.la);
            a.b("utils.triggerEvent", a.a.aa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.H);
            a.b("utils.addOrRemoveItem", a.a.T);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (a) {
                var c =
                    this, d = Array.prototype.slice.call(arguments);
                a = d.shift();
                return function () {
                    return c.apply(a, d.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.f = new function () {
                var b = 0, c = "__ko__" + (new Date).getTime(), d = {};
                return{get: function (b, c) {
                    var d = a.a.f.va(b, !1);
                    return d === p ? p : d[c]
                }, set: function (b, c, d) {
                    if (d !== p || a.a.f.va(b, !1) !== p)a.a.f.va(b, !0)[c] = d
                }, va: function (a, g) {
                    var f = a[c];
                    if (!f || "null" === f || !d[f]) {
                        if (!g)return p;
                        f = a[c] = "ko" + b++;
                        d[f] = {}
                    }
                    return d[f]
                }, clear: function (a) {
                    var b = a[c];
                    return b ? (delete d[b],
                        a[c] = null, !0) : !1
                }}
            };
            a.b("utils.domData", a.a.f);
            a.b("utils.domData.clear", a.a.f.clear);
            a.a.B = new function () {
                function b(b, c) {
                    var e = a.a.f.get(b, d);
                    e === p && c && (e = [], a.a.f.set(b, d, e));
                    return e
                }

                function c(d) {
                    var e = b(d, !1);
                    if (e)for (var e = e.slice(0), k = 0; k < e.length; k++)e[k](d);
                    a.a.f.clear(d);
                    "function" == typeof t && "function" == typeof t.cleanData && t.cleanData([d]);
                    if (g[d.nodeType])for (e = d.firstChild; d = e;)e = d.nextSibling, 8 === d.nodeType && c(d)
                }

                var d = "__ko_domNodeDisposal__" + (new Date).getTime(), e = {1: !0, 8: !0, 9: !0},
                    g = {1: !0, 9: !0};
                return{ba: function (a, c) {
                    if ("function" != typeof c)throw Error("Callback must be a function");
                    b(a, !0).push(c)
                }, hb: function (c, e) {
                    var k = b(c, !1);
                    k && (a.a.fa(k, e), 0 == k.length && a.a.f.set(c, d, p))
                }, J: function (b) {
                    if (e[b.nodeType] && (c(b), g[b.nodeType])) {
                        var d = [];
                        a.a.V(d, b.getElementsByTagName("*"));
                        for (var k = 0, h = d.length; k < h; k++)c(d[k])
                    }
                    return b
                }, removeNode: function (b) {
                    a.J(b);
                    b.parentNode && b.parentNode.removeChild(b)
                }}
            };
            a.J = a.a.B.J;
            a.removeNode = a.a.B.removeNode;
            a.b("cleanNode", a.J);
            a.b("removeNode",
                a.removeNode);
            a.b("utils.domNodeDisposal", a.a.B);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.B.ba);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.B.hb);
            (function () {
                a.a.Da = function (b) {
                    var c;
                    if ("undefined" != typeof t)if (t.parseHTML)c = t.parseHTML(b) || []; else {
                        if ((c = t.clean([b])) && c[0]) {
                            for (b = c[0]; b.parentNode && 11 !== b.parentNode.nodeType;)b = b.parentNode;
                            b.parentNode && b.parentNode.removeChild(b)
                        }
                    } else {
                        var d = a.a.ka(b).toLowerCase();
                        c = u.createElement("div");
                        d = d.match(/^<(thead|tbody|tfoot)/) &&
                            [1, "<table>", "</table>"] || !d.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!d.indexOf("<td") || !d.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + d[1] + b + d[2] + "</div>";
                        for ("function" == typeof w.innerShiv ? c.appendChild(w.innerShiv(b)) : c.innerHTML = b; d[0]--;)c = c.lastChild;
                        c = a.a.P(c.lastChild.childNodes)
                    }
                    return c
                };
                a.a.ja = function (b, c) {
                    a.a.ua(b);
                    c = a.a.c(c);
                    if (null !== c && c !== p)if ("string" != typeof c && (c = c.toString()), "undefined" != typeof t)t(b).html(c);
                    else for (var d = a.a.Da(c), e = 0; e < d.length; e++)b.appendChild(d[e])
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.Da);
            a.b("utils.setHtml", a.a.ja);
            a.t = function () {
                function b(c, e) {
                    if (c)if (8 == c.nodeType) {
                        var g = a.t.eb(c.nodeValue);
                        null != g && e.push({Db: c, Rb: g})
                    } else if (1 == c.nodeType)for (var g = 0, f = c.childNodes, l = f.length; g < l; g++)b(f[g], e)
                }

                var c = {};
                return{Aa: function (a) {
                    if ("function" != typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");
                    var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) +
                        (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                    c[b] = a;
                    return"\x3c!--[ko_memo:" + b + "]--\x3e"
                }, qb: function (a, b) {
                    var g = c[a];
                    if (g === p)throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                    try {
                        return g.apply(null, b || []), !0
                    } finally {
                        delete c[a]
                    }
                }, rb: function (c, e) {
                    var g = [];
                    b(c, g);
                    for (var f = 0, l = g.length; f < l; f++) {
                        var k = g[f].Db, h = [k];
                        e && a.a.V(h, e);
                        a.t.qb(g[f].Rb, h);
                        k.nodeValue = "";
                        k.parentNode && k.parentNode.removeChild(k)
                    }
                }, eb: function (a) {
                    return(a = a.match(/^\[ko_memo\:(.*?)\]$/)) ?
                        a[1] : null
                }}
            }();
            a.b("memoization", a.t);
            a.b("memoization.memoize", a.t.Aa);
            a.b("memoization.unmemoize", a.t.qb);
            a.b("memoization.parseMemoText", a.t.eb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.t.rb);
            a.Wa = {throttle: function (b, c) {
                b.throttleEvaluation = c;
                var d = null;
                return a.h({read: b, write: function (a) {
                    clearTimeout(d);
                    d = setTimeout(function () {
                        b(a)
                    }, c)
                }})
            }, notify: function (b, c) {
                b.equalityComparer = "always" == c ? F(!1) : a.o.fn.equalityComparer;
                return b
            }};
            a.b("extenders", a.Wa);
            a.ob = function (b, c, d) {
                this.target =
                    b;
                this.pa = c;
                this.Cb = d;
                a.s(this, "dispose", this.A)
            };
            a.ob.prototype.A = function () {
                this.Ob = !0;
                this.Cb()
            };
            a.$ = function () {
                this.I = {};
                a.a.extend(this, a.$.fn);
                a.s(this, "subscribe", this.Ka);
                a.s(this, "extend", this.extend);
                a.s(this, "getSubscriptionsCount", this.Jb)
            };
            a.$.fn = {Ka: function (b, c, d) {
                d = d || "change";
                var e = new a.ob(this, c ? b.bind(c) : b, function () {
                    a.a.fa(this.I[d], e)
                }.bind(this));
                this.I[d] || (this.I[d] = []);
                this.I[d].push(e);
                return e
            }, notifySubscribers: function (b, c) {
                c = c || "change";
                this.I[c] && a.l.q(function () {
                    a.a.m(this.I[c].slice(0),
                        function (a) {
                            a && !0 !== a.Ob && a.pa(b)
                        })
                }, this)
            }, Jb: function () {
                var b = 0;
                a.a.H(this.I, function (a, d) {
                    b += d.length
                });
                return b
            }, extend: function (b) {
                var c = this;
                b && a.a.H(b, function (b, e) {
                    var g = a.Wa[b];
                    "function" == typeof g && (c = g(c, e))
                });
                return c
            }};
            a.$a = function (a) {
                return null != a && "function" == typeof a.Ka && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.$);
            a.b("isSubscribable", a.$a);
            a.l = function () {
                var b = [];
                return{wb: function (a) {
                    b.push({pa: a, Va: []})
                }, end: function () {
                    b.pop()
                }, gb: function (c) {
                    if (!a.$a(c))throw Error("Only subscribable things can act as dependencies");
                    if (0 < b.length) {
                        var d = b[b.length - 1];
                        !d || 0 <= a.a.k(d.Va, c) || (d.Va.push(c), d.pa(c))
                    }
                }, q: function (a, d, e) {
                    try {
                        return b.push(null), a.apply(d, e || [])
                    } finally {
                        b.pop()
                    }
                }}
            }();
            var K = {undefined: !0, "boolean": !0, number: !0, string: !0};
            a.o = function (b) {
                function c() {
                    if (0 < arguments.length)return c.equalityComparer && c.equalityComparer(d, arguments[0]) || (c.M(), d = arguments[0], c.L()), this;
                    a.l.gb(c);
                    return d
                }

                var d = b;
                a.$.call(c);
                c.u = function () {
                    return d
                };
                c.L = function () {
                    c.notifySubscribers(d)
                };
                c.M = function () {
                    c.notifySubscribers(d,
                        "beforeChange")
                };
                a.a.extend(c, a.o.fn);
                a.s(c, "peek", c.u);
                a.s(c, "valueHasMutated", c.L);
                a.s(c, "valueWillMutate", c.M);
                return c
            };
            a.o.fn = {equalityComparer: function (a, c) {
                return null === a || typeof a in K ? a === c : !1
            }};
            var A = a.o.Wb = "__ko_proto__";
            a.o.fn[A] = a.o;
            a.wa = function (b, c) {
                return null === b || b === p || b[A] === p ? !1 : b[A] === c ? !0 : a.wa(b[A], c)
            };
            a.O = function (b) {
                return a.wa(b, a.o)
            };
            a.ab = function (b) {
                return"function" == typeof b && b[A] === a.o || "function" == typeof b && b[A] === a.h && b.Lb ? !0 : !1
            };
            a.b("observable", a.o);
            a.b("isObservable",
                a.O);
            a.b("isWriteableObservable", a.ab);
            a.Z = function (b) {
                b = b || [];
                if ("object" != typeof b || !("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.o(b);
                a.a.extend(b, a.Z.fn);
                return b
            };
            a.Z.fn = {remove: function (a) {
                for (var c = this.u(), d = [], e = "function" == typeof a ? a : function (c) {
                    return c === a
                }, g = 0; g < c.length; g++) {
                    var f = c[g];
                    e(f) && (0 === d.length && this.M(), d.push(f), c.splice(g, 1), g--)
                }
                d.length && this.L();
                return d
            }, removeAll: function (b) {
                if (b ===
                    p) {
                    var c = this.u(), d = c.slice(0);
                    this.M();
                    c.splice(0, c.length);
                    this.L();
                    return d
                }
                return b ? this.remove(function (c) {
                    return 0 <= a.a.k(b, c)
                }) : []
            }, destroy: function (a) {
                var c = this.u(), d = "function" == typeof a ? a : function (c) {
                    return c === a
                };
                this.M();
                for (var e = c.length - 1; 0 <= e; e--)d(c[e]) && (c[e]._destroy = !0);
                this.L()
            }, destroyAll: function (b) {
                return b === p ? this.destroy(F(!0)) : b ? this.destroy(function (c) {
                    return 0 <= a.a.k(b, c)
                }) : []
            }, indexOf: function (b) {
                var c = this();
                return a.a.k(c, b)
            }, replace: function (a, c) {
                var d = this.indexOf(a);
                0 <= d && (this.M(), this.u()[d] = c, this.L())
            }};
            a.a.m("pop push reverse shift sort splice unshift".split(" "), function (b) {
                a.Z.fn[b] = function () {
                    var a = this.u();
                    this.M();
                    a = a[b].apply(a, arguments);
                    this.L();
                    return a
                }
            });
            a.a.m(["slice"], function (b) {
                a.Z.fn[b] = function () {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.b("observableArray", a.Z);
            a.h = function (b, c, d) {
                function e() {
                    a.a.m(D, function (a) {
                        a.A()
                    });
                    D = []
                }

                function g() {
                    var a = l.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(I), I = setTimeout(f, a)) : f()
                }

                function f() {
                    if (!q)if (n &&
                        y())r(); else {
                        q = !0;
                        try {
                            var b = a.a.ea(D, function (a) {
                                return a.target
                            });
                            a.l.wb(function (c) {
                                var d;
                                0 <= (d = a.a.k(b, c)) ? b[d] = p : D.push(c.Ka(g))
                            });
                            for (var d = m.call(c), f = b.length - 1; 0 <= f; f--)b[f] && D.splice(f, 1)[0].A();
                            n = !0;
                            l.notifySubscribers(h, "beforeChange");
                            h = d;
                            l.notifySubscribers(h)
                        } finally {
                            a.l.end(), q = !1
                        }
                        D.length || r()
                    }
                }

                function l() {
                    if (0 < arguments.length) {
                        if ("function" === typeof x)x.apply(c, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    n || f();
                    a.l.gb(l);
                    return h
                }

                function k() {
                    return!n || 0 < D.length
                }

                var h, n = !1, q = !1, m = b;
                m && "object" == typeof m ? (d = m, m = d.read) : (d = d || {}, m || (m = d.read));
                if ("function" != typeof m)throw Error("Pass a function that returns the value of the ko.computed");
                var x = d.write, v = d.disposeWhenNodeIsRemoved || d.K || null, y = d.disposeWhen || d.sa || F(!1), r = e, D = [], I = null;
                c || (c = d.owner);
                l.u = function () {
                    n || f();
                    return h
                };
                l.Ib = function () {
                    return D.length
                };
                l.Lb = "function" === typeof d.write;
                l.A = function () {
                    r()
                };
                l.Y = k;
                a.$.call(l);
                a.a.extend(l,
                    a.h.fn);
                a.s(l, "peek", l.u);
                a.s(l, "dispose", l.A);
                a.s(l, "isActive", l.Y);
                a.s(l, "getDependenciesCount", l.Ib);
                !0 !== d.deferEvaluation && f();
                if (v && k()) {
                    r = function () {
                        a.a.B.hb(v, r);
                        e()
                    };
                    a.a.B.ba(v, r);
                    var s = y, y = function () {
                        return!a.a.ta(v) || s()
                    }
                }
                return l
            };
            a.Nb = function (b) {
                return a.wa(b, a.h)
            };
            C = a.o.Wb;
            a.h[C] = a.o;
            a.h.fn = {};
            a.h.fn[C] = a.h;
            a.b("dependentObservable", a.h);
            a.b("computed", a.h);
            a.b("isComputed", a.Nb);
            (function () {
                function b(a, g, f) {
                    f = f || new d;
                    a = g(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date ||
                        a instanceof String || a instanceof Number || a instanceof Boolean)return a;
                    var l = a instanceof Array ? [] : {};
                    f.save(a, l);
                    c(a, function (c) {
                        var d = g(a[c]);
                        switch (typeof d) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                l[c] = d;
                                break;
                            case "object":
                            case "undefined":
                                var n = f.get(d);
                                l[c] = n !== p ? n : b(d, g, f)
                        }
                    });
                    return l
                }

                function c(b, c) {
                    if (b instanceof Array) {
                        for (var d = 0; d < b.length; d++)c(d);
                        "function" == typeof b.toJSON && c("toJSON")
                    } else for (d in b)("function" !== typeof b[d] || a.O(b[d])) && c(d)
                }

                function d() {
                    this.keys =
                        [];
                    this.Na = []
                }

                a.pb = function (c) {
                    if (0 == arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function (b) {
                        for (var c = 0; a.O(b) && 10 > c; c++)b = b();
                        return b
                    })
                };
                a.toJSON = function (b, c, d) {
                    b = a.pb(b);
                    return a.a.Ja(b, c, d)
                };
                d.prototype = {save: function (b, c) {
                    var d = a.a.k(this.keys, b);
                    0 <= d ? this.Na[d] = c : (this.keys.push(b), this.Na.push(c))
                }, get: function (b) {
                    b = a.a.k(this.keys, b);
                    return 0 <= b ? this.Na[b] : p
                }}
            })();
            a.b("toJS", a.pb);
            a.b("toJSON", a.toJSON);
            (function () {
                a.j = {p: function (b) {
                    switch (a.a.v(b)) {
                        case "option":
                            return!0 ===
                                b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.Ca) : 7 >= a.a.ha ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select":
                            return 0 <= b.selectedIndex ? a.j.p(b.options[b.selectedIndex]) : p;
                        default:
                            return b.value
                    }
                }, ma: function (b, c) {
                    switch (a.a.v(b)) {
                        case "option":
                            switch (typeof c) {
                                case "string":
                                    a.a.f.set(b, a.d.options.Ca, p);
                                    "__ko__hasDomDataOptionValue__"in b && delete b.__ko__hasDomDataOptionValue__;
                                    b.value = c;
                                    break;
                                default:
                                    a.a.f.set(b, a.d.options.Ca, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""
                            }
                            break;
                        case "select":
                            "" === c && (c = p);
                            if (null === c || c === p)b.selectedIndex = -1;
                            for (var d = b.options.length - 1; 0 <= d; d--)if (a.j.p(b.options[d]) == c) {
                                b.selectedIndex = d;
                                break
                            }
                            1 < b.size || -1 !== b.selectedIndex || (b.selectedIndex = 0);
                            break;
                        default:
                            if (null === c || c === p)c = "";
                            b.value = c
                    }
                }}
            })();
            a.b("selectExtensions", a.j);
            a.b("selectExtensions.readValue", a.j.p);
            a.b("selectExtensions.writeValue", a.j.ma);
            a.g = function () {
                function b(b) {
                    b = a.a.ka(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c =
                        [], d = b.match(e), l, m, x = 0;
                    if (d) {
                        d.push(",");
                        for (var v = 0, y; y = d[v]; ++v) {
                            var r = y.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= x) {
                                    l && c.push(m ? {key: l, value: m.join("")} : {unknown: l});
                                    l = m = x = 0;
                                    continue
                                }
                            } else if (58 === r) {
                                if (!m)continue
                            } else if (47 === r && v && 1 < y.length)(r = d[v - 1].match(g)) && !f[r[0]] && (b = b.substr(b.indexOf(y) + 1), d = b.match(e), d.push(","), v = -1, y = "/"); else if (40 === r || 123 === r || 91 === r)++x; else if (41 === r || 125 === r || 93 === r)--x; else if (!l && !m) {
                                l = 34 === r || 39 === r ? y.slice(1, -1) : y;
                                continue
                            }
                            m ? m.push(y) : m = [y]
                        }
                    }
                    return c
                }

                var c = ["true",
                    "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), g = /[\])"'A-Za-z0-9_$]+$/, f = {"in": 1, "return": 1, "typeof": 1}, l = {};
                return{W: [], S: l, Ea: b, ia: function (f, h) {
                    function e(b, h) {
                        var f, k = a.getBindingHandler(b);
                        if (k && k.preprocess ? h = k.preprocess(h, b, e) : 1) {
                            if (k = l[b])f = h, 0 <= a.a.k(c, f) ? f = !1 : (k = f.match(d), f = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" +
                                k[2] : f), k = f;
                            k && m.push("'" + b + "':function(_z){" + f + "=_z}");
                            x && (h = "function(){return " + h + " }");
                            g.push("'" + b + "':" + h)
                        }
                    }

                    h = h || {};
                    var g = [], m = [], x = h.valueAccessors, v = "string" === typeof f ? b(f) : f;
                    a.a.m(v, function (a) {
                        e(a.key || a.unknown, a.value)
                    });
                    m.length && e("_ko_property_writers", "{" + m.join(",") + "}");
                    return g.join(",")
                }, Qb: function (a, b) {
                    for (var c = 0; c < a.length; c++)if (a[c].key == b)return!0;
                    return!1
                }, na: function (b, c, d, f, m) {
                    if (b && a.O(b))!a.ab(b) || m && b.u() === f || b(f); else if ((b = c.get("_ko_property_writers")) && b[d])b[d](f)
                }}
            }();
            a.b("expressionRewriting", a.g);
            a.b("expressionRewriting.bindingRewriteValidators", a.g.W);
            a.b("expressionRewriting.parseObjectLiteral", a.g.Ea);
            a.b("expressionRewriting.preProcessBindings", a.g.ia);
            a.b("expressionRewriting._twoWayBindings", a.g.S);
            a.b("jsonExpressionRewriting", a.g);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.g.ia);
            (function () {
                function b(a) {
                    return 8 == a.nodeType && (g ? a.text : a.nodeValue).match(f)
                }

                function c(a) {
                    return 8 == a.nodeType && (g ? a.text : a.nodeValue).match(l)
                }

                function d(a, d) {
                    for (var f = a, m = 1, e = []; f = f.nextSibling;) {
                        if (c(f) && (m--, 0 === m))return e;
                        e.push(f);
                        b(f) && m++
                    }
                    if (!d)throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null
                }

                function e(a, b) {
                    var c = d(a, b);
                    return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                }

                var g = u && "\x3c!--test--\x3e" === u.createComment("test").text, f = g ? /^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/, l = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, k = {ul: !0, ol: !0};
                a.e = {N: {}, childNodes: function (a) {
                    return b(a) ?
                        d(a) : a.childNodes
                }, ga: function (c) {
                    if (b(c)) {
                        c = a.e.childNodes(c);
                        for (var d = 0, f = c.length; d < f; d++)a.removeNode(c[d])
                    } else a.a.ua(c)
                }, R: function (c, d) {
                    if (b(c)) {
                        a.e.ga(c);
                        for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++)f.parentNode.insertBefore(d[e], f)
                    } else a.a.R(c, d)
                }, fb: function (a, c) {
                    b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                }, Za: function (c, d, f) {
                    f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) :
                        c.appendChild(d) : a.e.fb(c, d)
                }, firstChild: function (a) {
                    return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
                }, nextSibling: function (a) {
                    b(a) && (a = e(a));
                    return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
                }, sb: function (a) {
                    return(a = b(a)) ? a[1] : null
                }, cb: function (d) {
                    if (k[a.a.v(d)]) {
                        var f = d.firstChild;
                        if (f) {
                            do if (1 === f.nodeType) {
                                var g;
                                g = f.firstChild;
                                var m = null;
                                if (g) {
                                    do if (m)m.push(g); else if (b(g)) {
                                        var l = e(g, !0);
                                        l ? g = l : m = [g]
                                    } else c(g) && (m = [g]); while (g = g.nextSibling)
                                }
                                if (g = m)for (m = f.nextSibling,
                                                   l = 0; l < g.length; l++)m ? d.insertBefore(g[l], m) : d.appendChild(g[l])
                            } while (f = f.nextSibling)
                        }
                    }
                }}
            })();
            a.b("virtualElements", a.e);
            a.b("virtualElements.allowedBindings", a.e.N);
            a.b("virtualElements.emptyNode", a.e.ga);
            a.b("virtualElements.insertAfter", a.e.Za);
            a.b("virtualElements.prepend", a.e.fb);
            a.b("virtualElements.setDomNodeChildren", a.e.R);
            (function () {
                a.F = function () {
                    this.xb = {}
                };
                a.a.extend(a.F.prototype, {nodeHasBindings: function (b) {
                    switch (b.nodeType) {
                        case 1:
                            return null != b.getAttribute("data-bind");
                        case 8:
                            return null !=
                                a.e.sb(b);
                        default:
                            return!1
                    }
                }, getBindings: function (a, c) {
                    var d = this.getBindingsString(a, c);
                    return d ? this.parseBindingsString(d, c, a) : null
                }, getBindingAccessors: function (a, c) {
                    var d = this.getBindingsString(a, c);
                    return d ? this.parseBindingsString(d, c, a, {valueAccessors: !0}) : null
                }, getBindingsString: function (b) {
                    switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.e.sb(b);
                        default:
                            return null
                    }
                }, parseBindingsString: function (b, c, d, e) {
                    try {
                        var g = this.xb, f = b + (e && e.valueAccessors || ""), l;
                        if (!(l =
                            g[f])) {
                            var k, h = "with($context){with($data||{}){return{" + a.g.ia(b, e) + "}}}";
                            k = new Function("$context", "$element", h);
                            l = g[f] = k
                        }
                        return l(c, d)
                    } catch (n) {
                        throw n.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + n.message, n;
                    }
                }});
                a.F.instance = new a.F
            })();
            a.b("bindingProvider", a.F);
            (function () {
                function b(a) {
                    return function () {
                        return a
                    }
                }

                function c(a) {
                    return a()
                }

                function d(b) {
                    return a.a.Ba(a.l.q(b), function (a, c) {
                        return function () {
                            return b()[c]
                        }
                    })
                }

                function e(a, b) {
                    return d(this.getBindings.bind(this,
                        a, b))
                }

                function g(b, c, d) {
                    var e, g = a.e.firstChild(c), k = a.F.instance, h = k.preprocessNode;
                    if (h) {
                        for (; e = g;)g = a.e.nextSibling(e), h.call(k, e);
                        g = a.e.firstChild(c)
                    }
                    for (; e = g;)g = a.e.nextSibling(e), f(b, e, d)
                }

                function f(b, c, d) {
                    var f = !0, e = 1 === c.nodeType;
                    e && a.e.cb(c);
                    if (e && d || a.F.instance.nodeHasBindings(c))f = k(c, null, b, d).shouldBindDescendants;
                    f && !n[a.a.v(c)] && g(b, c, !e)
                }

                function l(b) {
                    var c = [], d = {}, f = [];
                    a.a.H(b, function D(e) {
                        if (!d[e]) {
                            var g = a.getBindingHandler(e);
                            g && (g.after && (f.push(e), a.a.m(g.after, function (c) {
                                if (b[c]) {
                                    if (-1 !==
                                        a.a.k(f, c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));
                                    D(c)
                                }
                            }), f.pop()), c.push({key: e, Kb: g}));
                            d[e] = !0
                        }
                    });
                    return c
                }

                function k(b, d, f, g) {
                    var k = a.a.f.get(b, q);
                    if (!d) {
                        if (k)throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.f.set(b, q, !0)
                    }
                    !k && g && a.nb(b, f);
                    var h;
                    if (d && "function" !== typeof d)h = d; else {
                        var n = a.F.instance, s = n.getBindingAccessors || e, z = a.h(function () {
                                (h = d ? d(f, b) : s.call(n, b, f)) && f.C && f.C();
                                return h
                            }, null,
                            {K: b});
                        h && z.Y() || (z = null)
                    }
                    var t;
                    if (h) {
                        var u = z ? function (a) {
                            return function () {
                                return c(z()[a])
                            }
                        } : function (a) {
                            return h[a]
                        }, w = function () {
                            return a.a.Ba(z ? z() : h, c)
                        };
                        w.get = function (a) {
                            return h[a] && c(u(a))
                        };
                        w.has = function (a) {
                            return a in h
                        };
                        g = l(h);
                        a.a.m(g, function (c) {
                            var d = c.key, e = c.Kb;
                            if (8 === b.nodeType && !a.e.N[d])throw Error("The binding '" + d + "' cannot be used with virtual elements");
                            a.l.q(function () {
                                var a = e.init;
                                if ("function" == typeof a && (a = a(b, u(d), w, f.$data, f)) && a.controlsDescendantBindings) {
                                    if (t !== p)throw Error("Multiple bindings (" +
                                        t + " and " + d + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    t = d
                                }
                            });
                            a.h(function () {
                                var a = e.update;
                                "function" == typeof a && a(b, u(d), w, f.$data, f)
                            }, null, {K: b})
                        })
                    }
                    return{shouldBindDescendants: t === p}
                }

                function h(b) {
                    return b && b instanceof a.D ? b : new a.D(b)
                }

                a.d = {};
                var n = {script: !0};
                a.getBindingHandler = function (b) {
                    return a.d[b]
                };
                a.D = function (b, c, d, f) {
                    var e = this, g = "function" == typeof b, k = [], h = a.h(function () {
                        var k = g ? b() : b;
                        c ? (c.C && c.C(),
                            a.a.extend(e, c), h && (e.$dataFn = e.C = h)) : (e.$parents = [], e.$root = k, e.ko = a);
                        e.$data = k;
                        d && (e[d] = k);
                        f && f(e, c, k);
                        return e.$data
                    }, null, {sa: function () {
                        return!a.a.Oa(k)
                    }});
                    h.Y() ? (e.$dataFn = e.C = h, h.$b = k, h.tb = function (b) {
                        k.push(b);
                        a.a.B.ba(b, function (b) {
                            a.a.fa(k, b);
                            k.length || (h.A(), e.C = h = p)
                        })
                    }) : e.$dataFn = function () {
                        return e.$data
                    }
                };
                a.D.prototype.createChildContext = function (b, c, d) {
                    return new a.D(b, this, c, function (a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    })
                };
                a.D.prototype.extend = function (b) {
                    return new a.D(this.$dataFn, this, null, function (c) {
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    })
                };
                var q = "__ko_boundElement";
                a.nb = function (b, c) {
                    if (2 == arguments.length)a.a.f.set(b, "__ko_bindingContext__", c), c.C && c.C.tb(b); else return a.a.f.get(b, "__ko_bindingContext__")
                };
                a.oa = function (b, c, d) {
                    1 === b.nodeType && a.e.cb(b);
                    return k(b, c, h(d), !0)
                };
                a.ub = function (c, f, e) {
                    e = h(e);
                    return a.oa(c, "function" === typeof f ? d(f.bind(null, e, c)) : a.a.Ba(f, b), e)
                };
                a.Qa = function (a, b) {
                    1 !==
                        b.nodeType && 8 !== b.nodeType || g(h(a), b, !0)
                };
                a.Pa = function (a, b) {
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || w.document.body;
                    f(h(a), b, !0)
                };
                a.ra = function (b) {
                    switch (b.nodeType) {
                        case 1:
                        case 8:
                            var c = a.nb(b);
                            if (c)return c;
                            if (b.parentNode)return a.ra(b.parentNode)
                    }
                    return p
                };
                a.Ab = function (b) {
                    return(b = a.ra(b)) ? b.$data : p
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.Pa);
                a.b("applyBindingsToDescendants",
                    a.Qa);
                a.b("applyBindingAccessorsToNode", a.oa);
                a.b("applyBindingsToNode", a.ub);
                a.b("contextFor", a.ra);
                a.b("dataFor", a.Ab)
            })();
            var J = {"class": "className", "for": "htmlFor"};
            a.d.attr = {update: function (b, c) {
                var d = a.a.c(c()) || {};
                a.a.H(d, function (c, d) {
                    d = a.a.c(d);
                    var f = !1 === d || null === d || d === p;
                    f && b.removeAttribute(c);
                    8 >= a.a.ha && c in J ? (c = J[c], f ? b.removeAttribute(c) : b[c] = d) : f || b.setAttribute(c, d.toString());
                    "name" === c && a.a.kb(b, f ? "" : d.toString())
                })
            }};
            (function () {
                a.d.checked = {after: ["value", "attr"], init: function (b, c, d) {
                    function e() {
                        return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : b.value
                    }

                    function g() {
                        var f = b.checked, g = q ? e() : f;
                        if (m && (!k || f)) {
                            var l = a.l.q(c);
                            h ? n !== g ? (f && (a.a.T(l, g, !0), a.a.T(l, n, !1)), n = g) : a.a.T(l, g, f) : a.g.na(l, d, "checked", g, !0)
                        }
                    }

                    function f() {
                        var d = a.a.c(c());
                        b.checked = h ? 0 <= a.a.k(d, e()) : l ? d : e() === d
                    }

                    var l = "checkbox" == b.type, k = "radio" == b.type;
                    if (l || k) {
                        var h = l && a.a.c(c())instanceof Array, n = h ? e() : p, q = k || h, m = !1;
                        k && !b.name && a.d.uniqueName.init(b, F(!0));
                        a.h(g, null, {K: b});
                        a.a.r(b, "click", g);
                        a.h(f,
                            null, {K: b});
                        m = !0
                    }
                }};
                a.g.S.checked = !0;
                a.d.checkedValue = {update: function (b, c) {
                    b.value = a.a.c(c())
                }}
            })();
            a.d.css = {update: function (b, c) {
                var d = a.a.c(c());
                "object" == typeof d ? a.a.H(d, function (c, d) {
                    d = a.a.c(d);
                    a.a.la(b, c, d)
                }) : (d = String(d || ""), a.a.la(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.la(b, d, !0))
            }};
            a.d.enable = {update: function (b, c) {
                var d = a.a.c(c());
                d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
            }};
            a.d.disable = {update: function (b, c) {
                a.d.enable.update(b, function () {
                    return!a.a.c(c())
                })
            }};
            a.d.event = {init: function (b, c, d, e, g) {
                var f = c() || {};
                a.a.H(f, function (f) {
                    "string" == typeof f && a.a.r(b, f, function (b) {
                        var h, n = c()[f];
                        if (n) {
                            try {
                                var q = a.a.P(arguments);
                                e = g.$data;
                                q.unshift(e);
                                h = n.apply(e, q)
                            } finally {
                                !0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                            }
                            !1 === d.get(f + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                        }
                    })
                })
            }};
            a.d.foreach = {bb: function (b) {
                return function () {
                    var c = b(), d = a.a.Fa(c);
                    if (!d || "number" == typeof d.length)return{foreach: c, templateEngine: a.G.ya};
                    a.a.c(c);
                    return{foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.G.ya}
                }
            }, init: function (b, c) {
                return a.d.template.init(b, a.d.foreach.bb(c))
            }, update: function (b, c, d, e, g) {
                return a.d.template.update(b, a.d.foreach.bb(c), d, e, g)
            }};
            a.g.W.foreach = !1;
            a.e.N.foreach = !0;
            a.d.hasfocus = {init: function (b, c, d) {
                function e(f) {
                    b.__ko_hasfocusUpdating = !0;
                    var e = b.ownerDocument;
                    if ("activeElement"in
                        e) {
                        var g;
                        try {
                            g = e.activeElement
                        } catch (n) {
                            g = e.body
                        }
                        f = g === b
                    }
                    e = c();
                    a.g.na(e, d, "hasfocus", f, !0);
                    b.__ko_hasfocusLastValue = f;
                    b.__ko_hasfocusUpdating = !1
                }

                var g = e.bind(null, !0), f = e.bind(null, !1);
                a.a.r(b, "focus", g);
                a.a.r(b, "focusin", g);
                a.a.r(b, "blur", f);
                a.a.r(b, "focusout", f)
            }, update: function (b, c) {
                var d = !!a.a.c(c());
                b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), a.l.q(a.a.aa, null, [b, d ? "focusin" : "focusout"]))
            }};
            a.g.S.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.g.S.hasFocus = !0;
            a.d.html =
            {init: function () {
                return{controlsDescendantBindings: !0}
            }, update: function (b, c) {
                a.a.ja(b, c())
            }};
            var H = "__ko_withIfBindingData";
            E("if");
            E("ifnot", !1, !0);
            E("with", !0, !1, function (a, c) {
                return a.createChildContext(c)
            });
            a.d.options = {init: function (b) {
                if ("select" !== a.a.v(b))throw Error("options binding applies only to SELECT elements");
                for (; 0 < b.length;)b.remove(0);
                return{controlsDescendantBindings: !0}
            }, update: function (b, c, d) {
                function e() {
                    return b.selectedOptions || a.a.da(b.options, function (a) {
                        return a.selected
                    })
                }

                function g(a, b, c) {
                    var d = typeof b;
                    return"function" == d ? b(a) : "string" == d ? a[b] : c
                }

                function f(c, d) {
                    if (n.length) {
                        var f = 0 <= a.a.k(n, a.j.p(d[0]));
                        a.a.lb(d[0], f);
                        m && !f && a.l.q(a.a.aa, null, [b, "change"])
                    }
                }

                var l = 0 != b.length && b.multiple ? b.scrollTop : null;
                c = a.a.c(c());
                var k = d.get("optionsIncludeDestroyed"), h = {}, n;
                n = b.multiple ? a.a.ea(e(), a.j.p) : 0 <= b.selectedIndex ? [a.j.p(b.options[b.selectedIndex])] : [];
                if (c) {
                    "undefined" == typeof c.length && (c = [c]);
                    var q = a.a.da(c, function (b) {
                        return k || b === p || null === b || !a.a.c(b._destroy)
                    });
                    d.has("optionsCaption") && (c = a.a.c(d.get("optionsCaption")), null !== c && c !== p && q.unshift(h))
                } else c = [];
                var m = !1;
                c = f;
                d.has("optionsAfterRender") && (c = function (b, c) {
                    f(0, c);
                    a.l.q(d.get("optionsAfterRender"), null, [c[0], b !== h ? b : p])
                });
                a.a.Ha(b, q, function (b, c, f) {
                    f.length && (n = f[0].selected ? [a.j.p(f[0])] : [], m = !0);
                    c = u.createElement("option");
                    b === h ? (a.a.ja(c, d.get("optionsCaption")), a.j.ma(c, p)) : (f = g(b, d.get("optionsValue"), b), a.j.ma(c, a.a.c(f)), b = g(b, d.get("optionsText"), f), a.a.mb(c, b));
                    return[c]
                }, null, c);
                (b.multiple ?
                    n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? a.j.p(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && a.l.q(a.a.aa, null, [b, "change"]);
                a.a.Fb(b);
                l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l)
            }};
            a.d.options.Ca = "__ko.optionValueDomData__";
            a.d.selectedOptions = {after: ["options", "foreach"], init: function (b, c, d) {
                a.a.r(b, "change", function () {
                    var e = c(), g = [];
                    a.a.m(b.getElementsByTagName("option"), function (b) {
                        b.selected && g.push(a.j.p(b))
                    });
                    a.g.na(e, d, "selectedOptions", g)
                })
            }, update: function (b, c) {
                if ("select" != a.a.v(b))throw Error("values binding applies only to SELECT elements");
                var d = a.a.c(c());
                d && "number" == typeof d.length && a.a.m(b.getElementsByTagName("option"), function (b) {
                    var c = 0 <= a.a.k(d, a.j.p(b));
                    a.a.lb(b, c)
                })
            }};
            a.g.S.selectedOptions = !0;
            a.d.style = {update: function (b, c) {
                var d = a.a.c(c() || {});
                a.a.H(d, function (c, d) {
                    d = a.a.c(d);
                    b.style[c] = d || ""
                })
            }};
            a.d.submit = {init: function (b, c, d, e, g) {
                if ("function" != typeof c())throw Error("The value for a submit binding must be a function");
                a.a.r(b, "submit",
                    function (a) {
                        var d, e = c();
                        try {
                            d = e.call(g.$data, b)
                        } finally {
                            !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
            }};
            a.d.text = {init: function () {
                return{controlsDescendantBindings: !0}
            }, update: function (b, c) {
                a.a.mb(b, c())
            }};
            a.e.N.text = !0;
            a.d.uniqueName = {init: function (b, c) {
                if (c()) {
                    var d = "ko_unique_" + ++a.d.uniqueName.zb;
                    a.a.kb(b, d)
                }
            }};
            a.d.uniqueName.zb = 0;
            a.d.value = {after: ["options", "foreach"], init: function (b, c, d) {
                function e() {
                    l = !1;
                    var f = c(), e = a.j.p(b);
                    a.g.na(f, d, "value", e)
                }

                var g = ["change"], f = d.get("valueUpdate"),
                    l = !1;
                f && ("string" == typeof f && (f = [f]), a.a.V(g, f), g = a.a.Sa(g));
                !a.a.ha || ("input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete) || -1 != a.a.k(g, "propertychange") || (a.a.r(b, "propertychange", function () {
                    l = !0
                }), a.a.r(b, "blur", function () {
                    l && e()
                }));
                a.a.m(g, function (c) {
                    var d = e;
                    a.a.Zb(c, "after") && (d = function () {
                        setTimeout(e, 0)
                    }, c = c.substring(5));
                    a.a.r(b, c, d)
                })
            }, update: function (b, c) {
                var d = "select" === a.a.v(b), e = a.a.c(c()), g = a.j.p(b);
                e !== g && (g = function () {
                    a.j.ma(b,
                        e)
                }, g(), d && (e !== a.j.p(b) ? a.l.q(a.a.aa, null, [b, "change"]) : setTimeout(g, 0)))
            }};
            a.g.S.value = !0;
            a.d.visible = {update: function (b, c) {
                var d = a.a.c(c()), e = "none" != b.style.display;
                d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
            }};
            (function (b) {
                a.d[b] = {init: function (c, d, e, g, f) {
                    return a.d.event.init.call(this, c, function () {
                        var a = {};
                        a[b] = d();
                        return a
                    }, e, g, f)
                }}
            })("click");
            a.w = function () {
            };
            a.w.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource");
            };
            a.w.prototype.createJavaScriptEvaluatorBlock =
                function () {
                    throw Error("Override createJavaScriptEvaluatorBlock");
                };
            a.w.prototype.makeTemplateSource = function (b, c) {
                if ("string" == typeof b) {
                    c = c || u;
                    var d = c.getElementById(b);
                    if (!d)throw Error("Cannot find template with ID " + b);
                    return new a.n.i(d)
                }
                if (1 == b.nodeType || 8 == b.nodeType)return new a.n.U(b);
                throw Error("Unknown template type: " + b);
            };
            a.w.prototype.renderTemplate = function (a, c, d, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, c, d)
            };
            a.w.prototype.isTemplateRewritten = function (a, c) {
                return!1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
            };
            a.w.prototype.rewriteTemplate = function (a, c, d) {
                a = this.makeTemplateSource(a, d);
                c = c(a.text());
                a.text(c);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.w);
            a.La = function () {
                function b(b, c, d, l) {
                    b = a.g.Ea(b);
                    for (var k = a.g.W, h = 0; h < b.length; h++) {
                        var n = b[h].key;
                        if (k.hasOwnProperty(n)) {
                            var q = k[n];
                            if ("function" === typeof q) {
                                if (n = q(b[h].value))throw Error(n);
                            } else if (!q)throw Error("This template engine does not support the '" +
                                n + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.g.ia(b, {valueAccessors: !0}) + " } })()},'" + d.toLowerCase() + "')";
                    return l.createJavaScriptEvaluatorBlock(d) + c
                }

                var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return{Gb: function (b, c, d) {
                    c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                            return a.La.Sb(b, c)
                        },
                        d)
                }, Sb: function (a, g) {
                    return a.replace(c,function (a, c, d, e, n) {
                        return b(n, c, d, g)
                    }).replace(d, function (a, c) {
                        return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                    })
                }, vb: function (b, c) {
                    return a.t.Aa(function (d, l) {
                        var k = d.nextSibling;
                        k && k.nodeName.toLowerCase() === c && a.oa(k, b, l)
                    })
                }}
            }();
            a.b("__tr_ambtns", a.La.vb);
            (function () {
                a.n = {};
                a.n.i = function (a) {
                    this.i = a
                };
                a.n.i.prototype.text = function () {
                    var b = a.a.v(this.i), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length)return this.i[b];
                    var c = arguments[0];
                    "innerHTML" === b ? a.a.ja(this.i, c) : this.i[b] = c
                };
                a.n.i.prototype.data = function (b) {
                    if (1 === arguments.length)return a.a.f.get(this.i, "templateSourceData_" + b);
                    a.a.f.set(this.i, "templateSourceData_" + b, arguments[1])
                };
                a.n.U = function (a) {
                    this.i = a
                };
                a.n.U.prototype = new a.n.i;
                a.n.U.prototype.text = function () {
                    if (0 == arguments.length) {
                        var b = a.a.f.get(this.i, "__ko_anon_template__") || {};
                        b.Ma === p && b.qa && (b.Ma = b.qa.innerHTML);
                        return b.Ma
                    }
                    a.a.f.set(this.i, "__ko_anon_template__", {Ma: arguments[0]})
                };
                a.n.i.prototype.nodes =
                    function () {
                        if (0 == arguments.length)return(a.a.f.get(this.i, "__ko_anon_template__") || {}).qa;
                        a.a.f.set(this.i, "__ko_anon_template__", {qa: arguments[0]})
                    };
                a.b("templateSources", a.n);
                a.b("templateSources.domElement", a.n.i);
                a.b("templateSources.anonymousTemplate", a.n.U)
            })();
            (function () {
                function b(b, c, d) {
                    var e;
                    for (c = a.e.nextSibling(c); b && (e = b) !== c;)b = a.e.nextSibling(e), d(e, b)
                }

                function c(c, d) {
                    if (c.length) {
                        var e = c[0], g = c[c.length - 1], n = e.parentNode, q = a.F.instance, m = q.preprocessNode;
                        if (m) {
                            b(e, g, function (a, b) {
                                var c =
                                    a.previousSibling, d = m.call(q, a);
                                d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e)return;
                            e === g ? c.push(e) : (c.push(e, g), a.a.X(c, n))
                        }
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.Pa(d, b)
                        });
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.t.rb(b, [d])
                        });
                        a.a.X(c, n)
                    }
                }

                function d(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }

                function e(b, e, k, h, n) {
                    n = n || {};
                    var q = b && d(b), q = q && q.ownerDocument, m = n.templateEngine || g;
                    a.La.Gb(k, m, q);
                    k = m.renderTemplate(k, h, n, q);
                    if ("number" != typeof k.length ||
                        0 < k.length && "number" != typeof k[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
                    q = !1;
                    switch (e) {
                        case "replaceChildren":
                            a.e.R(b, k);
                            q = !0;
                            break;
                        case "replaceNode":
                            a.a.ib(b, k);
                            q = !0;
                            break;
                        case "ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " + e);
                    }
                    q && (c(k, h), n.afterRender && a.l.q(n.afterRender, null, [k, h.$data]));
                    return k
                }

                var g;
                a.Ia = function (b) {
                    if (b != p && !(b instanceof a.w))throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b
                };
                a.Ga = function (b, c, k, h, n) {
                    k = k || {};
                    if ((k.templateEngine || g) == p)throw Error("Set a template engine before calling renderTemplate");
                    n = n || "replaceChildren";
                    if (h) {
                        var q = d(h);
                        return a.h(function () {
                            var g = c && c instanceof a.D ? c : new a.D(a.a.c(c)), p = "function" == typeof b ? b(g.$data, g) : b, g = e(h, n, p, g, k);
                            "replaceNode" == n && (h = g, q = d(h))
                        }, null, {sa: function () {
                            return!q || !a.a.ta(q)
                        }, K: q && "replaceNode" == n ? q.parentNode : q})
                    }
                    return a.t.Aa(function (d) {
                        a.Ga(b, c, k, d, "replaceNode")
                    })
                };
                a.Yb = function (b, d, g, h, n) {
                    function q(a, b) {
                        c(b, x);
                        g.afterRender &&
                        g.afterRender(b, a)
                    }

                    function m(c, d) {
                        x = n.createChildContext(a.a.c(c), g.as, function (a) {
                            a.$index = d
                        });
                        var h = "function" == typeof b ? b(c, x) : b;
                        return e(null, "ignoreTargetNode", h, x, g)
                    }

                    var x;
                    return a.h(function () {
                        var b = a.a.c(d) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.da(b, function (b) {
                            return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
                        });
                        a.l.q(a.a.Ha, null, [h, b, m, g, q])
                    }, null, {K: h})
                };
                a.d.template = {init: function (b, c) {
                    var d = a.a.c(c());
                    "string" == typeof d || (d.name || 1 != b.nodeType && 8 != b.nodeType) ||
                    (d = 1 == b.nodeType ? b.childNodes : a.e.childNodes(b), d = a.a.Tb(d), (new a.n.U(b)).nodes(d));
                    return{controlsDescendantBindings: !0}
                }, update: function (b, c, d, e, g) {
                    c = a.a.c(c());
                    d = {};
                    e = !0;
                    var q, m = null;
                    "string" != typeof c && (d = c, c = a.a.c(d.name), "if"in d && (e = a.a.c(d["if"])), e && "ifnot"in d && (e = !a.a.c(d.ifnot)), q = a.a.c(d.data));
                    "foreach"in d ? m = a.Yb(c || b, e && d.foreach || [], d, b, g) : e ? (g = "data"in d ? g.createChildContext(q, d.as) : g, m = a.Ga(c || b, g, d, b)) : a.e.ga(b);
                    g = m;
                    (q = a.a.f.get(b, "__ko__templateComputedDomDataKey__")) && "function" == typeof q.A && q.A();
                    a.a.f.set(b, "__ko__templateComputedDomDataKey__", g && g.Y() ? g : p)
                }};
                a.g.W.template = function (b) {
                    b = a.g.Ea(b);
                    return 1 == b.length && b[0].unknown || a.g.Qb(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.e.N.template = !0
            })();
            a.b("setTemplateEngine", a.Ia);
            a.b("renderTemplate", a.Ga);
            a.a.Ua = function () {
                function a(b, d, e, g, f) {
                    var l = Math.min, k = Math.max, h = [], n, q = b.length, m, p = d.length, v = p - q || 1, t = q + p + 1, r, u, w;
                    for (n = 0; n <= q; n++)for (u = r, h.push(r = []),
                                                     w = l(p, n + v), m = k(0, n - 1); m <= w; m++)r[m] = m ? n ? b[n - 1] === d[m - 1] ? u[m - 1] : l(u[m] || t, r[m - 1] || t) + 1 : m + 1 : n + 1;
                    l = [];
                    k = [];
                    v = [];
                    n = q;
                    for (m = p; n || m;)p = h[n][m] - 1, m && p === h[n][m - 1] ? k.push(l[l.length] = {status: e, value: d[--m], index: m}) : n && p === h[n - 1][m] ? v.push(l[l.length] = {status: g, value: b[--n], index: n}) : (l.push({status: "retained", value: d[--m]}), --n);
                    if (k.length && v.length) {
                        b = 10 * q;
                        var s;
                        for (d = e = 0; (f || d < b) && (s = k[e]); e++) {
                            for (g = 0; h = v[g]; g++)if (s.value === h.value) {
                                s.moved = h.index;
                                h.moved = s.index;
                                v.splice(g, 1);
                                d = g = 0;
                                break
                            }
                            d += g
                        }
                    }
                    return l.reverse()
                }

                return function (c, d, e) {
                    c = c || [];
                    d = d || [];
                    return c.length <= d.length ? a(c, d, "added", "deleted", e) : a(d, c, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Ua);
            (function () {
                function b(b, d, e, g, f) {
                    var l = [], k = a.h(function () {
                        var h = d(e, f, a.a.X(l, b)) || [];
                        0 < l.length && (a.a.ib(l, h), g && a.l.q(g, null, [e, h, f]));
                        l.splice(0, l.length);
                        a.a.V(l, h)
                    }, null, {K: b, sa: function () {
                        return!a.a.Oa(l)
                    }});
                    return{Q: l, h: k.Y() ? k : p}
                }

                a.a.Ha = function (c, d, e, g, f) {
                    function l(b, d) {
                        s = n[d];
                        u !== d && (B[b] = s);
                        s.xa(u++);
                        a.a.X(s.Q, c);
                        t.push(s);
                        w.push(s)
                    }

                    function k(b, c) {
                        if (b)for (var d = 0, e = c.length; d < e; d++)c[d] && a.a.m(c[d].Q, function (a) {
                            b(a, d, c[d].ca)
                        })
                    }

                    d = d || [];
                    g = g || {};
                    var h = a.a.f.get(c, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === p, n = a.a.f.get(c, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], q = a.a.ea(n, function (a) {
                        return a.ca
                    }), m = a.a.Ua(q, d, g.dontLimitMoves), t = [], v = 0, u = 0, r = [], w = [];
                    d = [];
                    for (var B = [], q = [], s, z = 0, A, C; A = m[z]; z++)switch (C = A.moved, A.status) {
                        case "deleted":
                            C === p && (s = n[v], s.h && s.h.A(), r.push.apply(r, a.a.X(s.Q, c)),
                                g.beforeRemove && (d[z] = s, w.push(s)));
                            v++;
                            break;
                        case "retained":
                            l(z, v++);
                            break;
                        case "added":
                            C !== p ? l(z, C) : (s = {ca: A.value, xa: a.o(u++)}, t.push(s), w.push(s), h || (q[z] = s))
                    }
                    k(g.beforeMove, B);
                    a.a.m(r, g.beforeRemove ? a.J : a.removeNode);
                    for (var z = 0, h = a.e.firstChild(c), E; s = w[z]; z++) {
                        s.Q || a.a.extend(s, b(c, e, s.ca, f, s.xa));
                        for (v = 0; m = s.Q[v]; h = m.nextSibling, E = m, v++)m !== h && a.e.Za(c, m, E);
                        !s.Mb && f && (f(s.ca, s.Q, s.xa), s.Mb = !0)
                    }
                    k(g.beforeRemove, d);
                    k(g.afterMove, B);
                    k(g.afterAdd, q);
                    a.a.f.set(c, "setDomNodeChildrenFromArrayMapping_lastMappingResult",
                        t)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Ha);
            a.G = function () {
                this.allowTemplateRewriting = !1
            };
            a.G.prototype = new a.w;
            a.G.prototype.renderTemplateSource = function (b) {
                var c = (9 > a.a.ha ? 0 : b.nodes) ? b.nodes() : null;
                if (c)return a.a.P(c.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.Da(b)
            };
            a.G.ya = new a.G;
            a.Ia(a.G.ya);
            a.b("nativeTemplateEngine", a.G);
            (function () {
                a.za = function () {
                    var a = this.Pb = function () {
                        if ("undefined" == typeof t || !t.tmpl)return 0;
                        try {
                            if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2
                        } catch (a) {
                        }
                        return 1
                    }();
                    this.renderTemplateSource = function (b, e, g) {
                        g = g || {};
                        if (2 > a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var f = b.data("precompiled");
                        f || (f = b.text() || "", f = t.template(null, "{{ko_with $item.koBindingContext}}" + f + "{{/ko_with}}"), b.data("precompiled", f));
                        b = [e.$data];
                        e = t.extend({koBindingContext: e}, g.templateOptions);
                        e = t.tmpl(f, b, e);
                        e.appendTo(u.createElement("div"));
                        t.fragments = {};
                        return e
                    };
                    this.createJavaScriptEvaluatorBlock = function (a) {
                        return"{{ko_code ((function() { return " +
                            a + " })()) }}"
                    };
                    this.addTemplate = function (a, b) {
                        u.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (t.tmpl.tag.ko_code = {open: "__.push($1 || '');"}, t.tmpl.tag.ko_with = {open: "with($1) {", close: "} "})
                };
                a.za.prototype = new a.w;
                var b = new a.za;
                0 < b.Pb && a.Ia(b);
                a.b("jqueryTmplTemplateEngine", a.za)
            })()
        })
    })();
})();
/*! Underscore.js 1.4.4
// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.*/(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*!
 * Bootstrap.js by @fat & @mdo
 * plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||f.toggleClass("open"),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" ");for(i=g.length;i--;)h=g[i],h=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):h!="manual"&&(e=h=="hover"?"mouseenter":"focus",f=h=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a.fn[this.type].defaults,d={},e;this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)},this),e=a(b.currentTarget)[this.type](d).data(this.type);if(!e.options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){e.hoverState=="in"&&e.show()},e.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(h);if(h.isDefaultPrevented())return;b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight;switch(f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight,f,g,h,i;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,b=="top"&&g!=e&&(a.top=a.top+e-g,i=!0),b=="bottom"||b=="top"?(h=0,a.left<0&&(h=a.left*-2,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip(),d=a.Event("hide");this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=(typeof c.content=="function"?c.content.call(b[0]):c.content)||b.attr("data-content"),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning||this.$element.hasClass("in"))return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning||!this.$element.hasClass("in"))return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),typeof c=="object"&&c);e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery)
/*!
 * @license
 * Lo-Dash 1.2.0 (Custom Build) lodash.com/license
 * Build: `lodash modern -o ./dist/lodash.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(o){function f(n){if(!n||ue.call(n)!=S)return a;var t=n.valueOf,e=typeof t=="function"&&(e=Zt(t))&&Zt(e);return e?n==e||Zt(n)==e:X(n)}function q(n,t,e){if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(var r=-1,u=F[typeof n]?me(n):[],o=u.length;++r<o&&(e=u[r],!(t(n[e],e,n)===a)););return n}function D(n,t,e){var r;if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(r in n)if(t(n[r],r,n)===a)break;return n}function z(n,t,e){var r,u=n,a=u;
if(!u)return a;for(var o=arguments,i=0,f=typeof e=="number"?2:o.length;++i<f;)if((u=o[i])&&F[typeof u]){var c=u.length;if(r=-1,rt(u))for(;++r<c;)"undefined"==typeof a[r]&&(a[r]=u[r]);else for(var l=-1,p=F[typeof u]?me(u):[],c=p.length;++l<c;)r=p[l],"undefined"==typeof a[r]&&(a[r]=u[r])}return a}function P(n,t,e){var r,u=n,a=u;if(!u)return a;var o=arguments,i=0,f=typeof e=="number"?2:o.length;if(3<f&&"function"==typeof o[f-2])var c=M.createCallback(o[--f-1],o[f--],2);else 2<f&&"function"==typeof o[f-1]&&(c=o[--f]);
for(;++i<f;)if((u=o[i])&&F[typeof u]){var l=u.length;if(r=-1,rt(u))for(;++r<l;)a[r]=c?c(a[r],u[r]):u[r];else for(var p=-1,s=F[typeof u]?me(u):[],l=s.length;++p<l;)r=s[p],a[r]=c?c(a[r],u[r]):u[r]}return a}function K(n){var t,e=[];if(!n||!F[typeof n])return e;for(t in n)ne.call(n,t)&&e.push(t);return e}function M(n){return n&&typeof n=="object"&&!rt(n)&&ne.call(n,"__wrapped__")?n:new Q(n)}function U(n){var t=n.length,e=t>=s;if(e)for(var r={},u=-1;++u<t;){var a=p+n[u];(r[a]||(r[a]=[])).push(n[u])}return function(t){if(e){var u=p+t;
return r[u]&&-1<xt(r[u],t)}return-1<xt(n,t)}}function V(n){return n.charCodeAt(0)}function G(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return e<r?-1:1}function H(n,t,e,r){function a(){var r=arguments,l=i?this:t;return o||(n=t[f]),e.length&&(r=r.length?(r=ge.call(r),c?r.concat(e):e.concat(r)):e),this instanceof a?(W.prototype=n.prototype,l=new W,W.prototype=u,r=n.apply(l,r),ot(r)?r:l):n.apply(l,r)}var o=at(n),i=!e,f=t;if(i){var c=r;
e=t}else if(!o){if(!r)throw new Vt;t=n}return a}function J(n){return"\\"+R[n]}function L(n){return be[n]}function Q(n){this.__wrapped__=n}function W(){}function X(n){var t=a;if(!n||ue.call(n)!=S)return t;var e=n.constructor;return(at(e)?e instanceof e:he.nodeClass||!isNode(n))?(D(n,function(n,e){t=e}),t===a||ne.call(n,t)):t}function Y(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Rt(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function Z(n){return de[n]}function nt(n,t,r,u,o,i){var f=n;
if(typeof t=="function"&&(u=r,r=t,t=a),typeof r=="function"){if(r=typeof u=="undefined"?r:M.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=ot(f)){var c=ue.call(f);if(!B[c])return f;var l=rt(f)}if(!u||!t)return u?l?Y(f):P({},f):f;switch(u=ye[c],c){case N:case E:return new u(+f);case I:case $:return new u(f);case A:return u(f.source,b.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(ne.call(n,"index")&&(f.index=n.index),ne.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?yt:q)(n,function(n,u){f[u]=nt(n,t,r,e,o,i)
}),f}function tt(n){var t=[];return D(n,function(n,e){at(n)&&t.push(e)}),t.sort()}function et(n){for(var t=-1,e=me(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function rt(n){return n instanceof Rt||oe(n)}function ut(n,t,e,o,i,f){var c=e===l;if(typeof e=="function"&&!c){e=M.createCallback(e,o,2);var p=e(n,t);if(typeof p!="undefined")return!!p}if(n===t)return 0!==n||1/n==1/t;var s=typeof n,v=typeof t;if(n===n&&(!n||"function"!=s&&"object"!=s)&&(!t||"function"!=v&&"object"!=v))return a;
if(n==u||t==u)return n===t;if(v=ue.call(n),s=ue.call(t),v==x&&(v=S),s==x&&(s=S),v!=s)return a;switch(v){case N:case E:return+n==+t;case I:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case A:case $:return n==Ut(t)}if(s=v==O,!s){if(ne.call(n,"__wrapped__")||ne.call(t,"__wrapped__"))return ut(n.__wrapped__||n,t.__wrapped__||t,e,o,i,f);if(v!=S)return a;var v=n.constructor,g=t.constructor;if(v!=g&&(!at(v)||!(v instanceof v&&at(g)&&g instanceof g)))return a}for(i||(i=[]),f||(f=[]),v=i.length;v--;)if(i[v]==n)return f[v]==t;
var y=0,p=r;if(i.push(n),f.push(t),s){if(v=n.length,y=t.length,p=y==n.length,!p&&!c)return p;for(;y--;)if(s=v,g=t[y],c)for(;s--&&!(p=ut(n[s],g,e,o,i,f)););else if(!(p=ut(n[y],g,e,o,i,f)))break;return p}return D(t,function(t,r,u){return ne.call(u,r)?(y++,p=ne.call(n,r)&&ut(n[r],t,e,o,i,f)):void 0}),p&&!c&&D(n,function(n,t,e){return ne.call(e,t)?p=-1<--y:void 0}),p}function at(n){return typeof n=="function"}function ot(n){return n?F[typeof n]:a}function it(n){return typeof n=="number"||ue.call(n)==I}function ft(n){return typeof n=="string"||ue.call(n)==$
}function ct(n,t,e){var r=arguments,u=0,a=2;if(!ot(n))return n;if(e===l)var o=r[3],i=r[4],c=r[5];else i=[],c=[],typeof e!="number"&&(a=r.length),3<a&&"function"==typeof r[a-2]?o=M.createCallback(r[--a-1],r[a--],2):2<a&&"function"==typeof r[a-1]&&(o=r[--a]);for(;++u<a;)(rt(r[u])?yt:q)(r[u],function(t,e){var r,u,a=t,p=n[e];if(t&&((u=rt(t))||f(t))){for(a=i.length;a--;)if(r=i[a]==t){p=c[a];break}if(!r){var s;o&&(a=o(p,t),s=typeof a!="undefined")&&(p=a),s||(p=u?rt(p)?p:[]:f(p)?p:{}),i.push(t),c.push(p),s||(p=ct(p,t,l,o,i,c))
}}else o&&(a=o(p,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(p=a);n[e]=p});return n}function lt(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u}function pt(n,t,e){var r=-1,u=n?n.length:0,o=a;return e=(0>e?le(0,u+e):e)||0,typeof u=="number"?o=-1<(ft(n)?n.indexOf(t,e):xt(n,t,e)):q(n,function(n){return++r<e?void 0:!(o=n===t)}),o}function st(n,t,e){var u=r;t=M.createCallback(t,e),e=-1;var a=n?n.length:0;if(typeof a=="number")for(;++e<a&&(u=!!t(n[e],e,n)););else q(n,function(n,e,r){return u=!!t(n,e,r)
});return u}function vt(n,t,e){var r=[];t=M.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var a=n[e];t(a,e,n)&&r.push(a)}else q(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function gt(n,t,e){t=M.createCallback(t,e),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return q(n,function(n,e,r){return t(n,e,r)?(u=n,a):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function yt(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:M.createCallback(t,e),typeof u=="number")for(;++r<u&&t(n[r],r,n)!==a;);else q(n,t);
return n}function ht(n,t,e){var r=-1,u=n?n.length:0;if(t=M.createCallback(t,e),typeof u=="number")for(var a=Rt(u);++r<u;)a[r]=t(n[r],r,n);else a=[],q(n,function(n,e,u){a[++r]=t(n,e,u)});return a}function mt(n,t,e){var r=-1/0,u=r;if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o>u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)});return u}function bt(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Rt(r);++e<r;)u[e]=n[e][t];return u||ht(n,t)
}function dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=M.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else q(n,function(n,r,o){e=u?(u=a,n):t(e,n,r,o)});return e}function _t(n,t,e,r){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=me(n),u=i.length;return t=M.createCallback(t,r,4),yt(n,function(r,f,c){f=i?i[--u]:--u,e=o?(o=a,n[f]):t(e,n[f],f,c)}),e}function kt(n,t,e){var r;t=M.createCallback(t,e),e=-1;var u=n?n.length:0;
if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else q(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function wt(n){for(var t=-1,e=n?n.length:0,r=Xt.apply(Gt,ge.call(arguments,1)),r=U(r),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u}function Ct(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=-1;for(t=M.createCallback(t,e);++o<a&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[0];return Y(n,0,pe(le(0,r),a))}}function jt(n,t,e,r){var o=-1,i=n?n.length:0,f=[];for(typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a),e!=u&&(e=M.createCallback(e,r));++o<i;)r=n[o],e&&(r=e(r,o,n)),rt(r)?te.apply(f,t?r:jt(r)):f.push(r);
return f}function xt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?le(0,u+e):e||0)-1;else if(e)return r=Nt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function Ot(n,t,e){if(typeof t!="number"&&t!=u){var r=0,a=-1,o=n?n.length:0;for(t=M.createCallback(t,e);++a<o&&t(n[a],a,n);)r++}else r=t==u||e?1:le(0,t);return Y(n,r)}function Nt(n,t,e,r){var u=0,a=n?n.length:u;for(e=e?M.createCallback(e,r,1):$t,t=e(t);u<a;)r=u+a>>>1,e(n[r])<t?u=r+1:a=r;return u}function Et(n,t,e,r){var o=-1,i=n?n.length:0,f=[],c=f;
typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a);var l=!t&&i>=s;if(l)var v={};for(e!=u&&(c=[],e=M.createCallback(e,r));++o<i;){r=n[o];var g=e?e(r,o,n):r;if(l)var y=p+g,y=v[y]?!(c=v[y]):c=v[y]=[];(t?!o||c[c.length-1]!==g:y||0>xt(c,g))&&((e||l)&&c.push(g),f.push(r))}return f}function It(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function St(n,t){return he.fastBind||ae&&2<arguments.length?ae.call.apply(ae,arguments):H(n,t,ge.call(arguments,2))}function At(n){var t=ge.call(arguments,1);
return re(function(){n.apply(e,t)},1)}function $t(n){return n}function Bt(n){yt(tt(n),function(t){var e=M[t]=n[t];M.prototype[t]=function(){var n=this.__wrapped__,t=[n];return te.apply(t,arguments),t=e.apply(M,t),n&&typeof n=="object"&&n==t?this:new Q(t)}})}function Ft(){return this.__wrapped__}o=o?T.defaults(n.Object(),o,T.pick(n,j)):n;var Rt=o.Array,Tt=o.Boolean,qt=o.Date,Dt=o.Function,zt=o.Math,Pt=o.Number,Kt=o.Object,Mt=o.RegExp,Ut=o.String,Vt=o.TypeError,Gt=Rt(),Ht=Kt(),Jt=o._,Lt=Mt("^"+Ut(Ht.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qt=zt.ceil,Wt=o.clearTimeout,Xt=Gt.concat,Yt=zt.floor,Zt=Lt.test(Zt=Kt.getPrototypeOf)&&Zt,ne=Ht.hasOwnProperty,te=Gt.push,ee=o.setImmediate,re=o.setTimeout,ue=Ht.toString,ae=Lt.test(ae=ue.bind)&&ae,oe=Lt.test(oe=Rt.isArray)&&oe,ie=o.isFinite,fe=o.isNaN,ce=Lt.test(ce=Kt.keys)&&ce,le=zt.max,pe=zt.min,se=o.parseInt,ve=zt.random,ge=Gt.slice,zt=Lt.test(o.attachEvent),zt=ae&&!/\n|true/.test(ae+zt),ye={};
ye[O]=Rt,ye[N]=Tt,ye[E]=qt,ye[S]=Kt,ye[I]=Pt,ye[A]=Mt,ye[$]=Ut;var he=M.support={};he.fastBind=ae&&!zt,M.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:d,variable:"",imports:{_:M}},Q.prototype=M.prototype;var me=ce?function(n){return ot(n)?ce(n):[]}:K,be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=et(be);return zt&&i&&typeof ee=="function"&&(At=St(ee,o)),Tt=8==se("08")?se:function(n,t){return se(ft(n)?n.replace(_,""):n,t||0)},M.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0
}},M.assign=P,M.at=function(n){for(var t=-1,e=Xt.apply(Gt,ge.call(arguments,1)),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u},M.bind=St,M.bindAll=function(n){for(var t=1<arguments.length?Xt.apply(Gt,ge.call(arguments,1)):tt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=St(n[u],n)}return n},M.bindKey=function(n,t){return H(n,t,ge.call(arguments,2),l)},M.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},M.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];
return t[0]}},M.countBy=function(n,t,e){var r={};return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),ne.call(r,e)?r[e]++:r[e]=1}),r},M.createCallback=function(n,t,e){if(n==u)return $t;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var o=me(n);return function(t){for(var e=o.length,r=a;e--&&(r=ut(t[o[e]],n[o[e]],l)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
}:function(e,r,u){return n.call(t,e,r,u)}:n},M.debounce=function(n,t,e){function o(){l=u,p&&(f=n.apply(c,i))}var i,f,c,l,p=r;if(e===r)var s=r,p=a;else e&&F[typeof e]&&(s=e.leading,p="trailing"in e?e.trailing:p);return function(){var e=s&&!l;return i=arguments,c=this,Wt(l),l=re(o,t),e&&(f=n.apply(c,i)),f}},M.defaults=z,M.defer=At,M.delay=function(n,t){var r=ge.call(arguments,2);return re(function(){n.apply(e,r)},t)},M.difference=wt,M.filter=vt,M.flatten=jt,M.forEach=yt,M.forIn=D,M.forOwn=q,M.functions=tt,M.groupBy=function(n,t,e){var r={};
return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),(ne.call(r,e)?r[e]:r[e]=[]).push(n)}),r},M.initial=function(n,t,e){if(!n)return[];var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=t==u||e?1:t||r;return Y(n,0,pe(le(0,a-r),a))},M.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=a>=s,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=p+c,l=r[0][l]?!(f=r[0][l]):f=r[0][l]=[];if(l||0>xt(f,c)){o&&f.push(c);
for(var v=e;--v;)if(!(r[v]||(r[v]=U(t[v])))(c))continue n;i.push(c)}}return i},M.invert=et,M.invoke=function(n,t){var e=ge.call(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Rt(typeof a=="number"?a:0);return yt(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},M.keys=me,M.map=ht,M.max=mt,M.memoize=function(n,t){var e={};return function(){var r=p+(t?t.apply(this,arguments):arguments[0]);return ne.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},M.merge=ct,M.min=function(n,t,e){var r=1/0,u=r;
if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o<u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},M.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=M.createCallback(t,e);else var a=Xt.apply(Gt,ge.call(arguments,1));return D(n,function(n,e,o){(r?!t(n,e,o):0>xt(a,e))&&(u[e]=n)}),u},M.once=function(n){var t,e;return function(){return t?e:(t=r,e=n.apply(this,arguments),n=u,e)}},M.pairs=function(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;){var a=e[t];
u[t]=[a,n[a]]}return u},M.partial=function(n){return H(n,ge.call(arguments,1))},M.partialRight=function(n){return H(n,ge.call(arguments,1),u,l)},M.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,a=Xt.apply(Gt,ge.call(arguments,1)),o=ot(n)?a.length:0;++u<o;){var i=a[u];i in n&&(r[i]=n[i])}else t=M.createCallback(t,e),D(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},M.pluck=bt,M.range=function(n,t,e){n=+n||0,e=+e||1,t==u&&(t=n,n=0);var r=-1;t=le(0,Qt((t-n)/e));for(var a=Rt(t);++r<t;)a[r]=n,n+=e;
return a},M.reject=function(n,t,e){return t=M.createCallback(t,e),vt(n,function(n,e,r){return!t(n,e,r)})},M.rest=Ot,M.shuffle=function(n){var t=-1,e=n?n.length:0,r=Rt(typeof e=="number"?e:0);return yt(n,function(n){var e=Yt(ve()*(++t+1));r[t]=r[e],r[e]=n}),r},M.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,a=Rt(typeof u=="number"?u:0);for(t=M.createCallback(t,e),yt(n,function(n,e,u){a[++r]={a:t(n,e,u),b:r,c:n}}),u=a.length,a.sort(G);u--;)a[u]=a[u].c;return a},M.tap=function(n,t){return t(n),n},M.throttle=function(n,t,e){function o(){p=new qt,l=u,v&&(f=n.apply(c,i))
}var i,f,c,l,p=0,s=r,v=r;return e===a?s=a:e&&F[typeof e]&&(s="leading"in e?e.leading:s,v="trailing"in e?e.trailing:v),function(){var e=new qt;!l&&!s&&(p=e);var r=t-(e-p);return i=arguments,c=this,0<r?l||(l=re(o,r)):(Wt(l),l=u,p=e,f=n.apply(c,i)),f}},M.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Rt(n);for(t=M.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},M.toArray=function(n){return n&&typeof n.length=="number"?Y(n):lt(n)},M.union=function(n){return rt(n)||(arguments[0]=n?ge.call(n):Gt),Et(Xt.apply(Gt,arguments))
},M.uniq=Et,M.unzip=function(n){for(var t=-1,e=n?n.length:0,r=e?mt(bt(n,"length")):0,u=Rt(r);++t<e;)for(var a=-1,o=n[t];++a<r;)(u[a]||(u[a]=Rt(e)))[t]=o[a];return u},M.values=lt,M.where=vt,M.without=function(n){return wt(n,ge.call(arguments,1))},M.wrap=function(n,t){return function(){var e=[n];return te.apply(e,arguments),t.apply(this,e)}},M.zip=function(n){for(var t=-1,e=n?mt(bt(arguments,"length")):0,r=Rt(e);++t<e;)r[t]=bt(arguments,t);return r},M.zipObject=It,M.collect=ht,M.drop=Ot,M.each=yt,M.extend=P,M.methods=tt,M.object=It,M.select=vt,M.tail=Ot,M.unique=Et,Bt(M),M.clone=nt,M.cloneDeep=function(n,t,e){return nt(n,r,t,e)
},M.contains=pt,M.escape=function(n){return n==u?"":Ut(n).replace(w,L)},M.every=st,M.find=gt,M.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=M.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},M.findKey=function(n,t,e){var r;return t=M.createCallback(t,e),q(n,function(n,e,u){return t(n,e,u)?(r=e,a):void 0}),r},M.has=function(n,t){return n?ne.call(n,t):a},M.identity=$t,M.indexOf=xt,M.isArguments=function(n){return ue.call(n)==x},M.isArray=rt,M.isBoolean=function(n){return n===r||n===a||ue.call(n)==N
},M.isDate=function(n){return n instanceof qt||ue.call(n)==E},M.isElement=function(n){return n?1===n.nodeType:a},M.isEmpty=function(n){var t=r;if(!n)return t;var e=ue.call(n),u=n.length;return e==O||e==$||e==x||e==S&&typeof u=="number"&&at(n.splice)?!u:(q(n,function(){return t=a}),t)},M.isEqual=ut,M.isFinite=function(n){return ie(n)&&!fe(parseFloat(n))},M.isFunction=at,M.isNaN=function(n){return it(n)&&n!=+n},M.isNull=function(n){return n===u},M.isNumber=it,M.isObject=ot,M.isPlainObject=f,M.isRegExp=function(n){return n instanceof Mt||ue.call(n)==A
},M.isString=ft,M.isUndefined=function(n){return typeof n=="undefined"},M.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?le(0,r+e):pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},M.mixin=Bt,M.noConflict=function(){return o._=Jt,this},M.parseInt=Tt,M.random=function(n,t){return n==u&&t==u&&(t=1),n=+n||0,t==u&&(t=n,n=0),n+Yt(ve()*((+t||0)-n+1))},M.reduce=dt,M.reduceRight=_t,M.result=function(n,t){var r=n?n[t]:e;return at(r)?n[t]():r},M.runInContext=t,M.size=function(n){var t=n?n.length:0;
return typeof t=="number"?t:me(n).length},M.some=kt,M.sortedIndex=Nt,M.template=function(n,t,u){var a=M.templateSettings;n||(n=""),u=z({},u,a);var o,i=z({},u.imports,a.imports),a=me(i),i=lt(i),f=0,c=u.interpolate||k,l="__p+='",c=Mt((u.escape||k).source+"|"+c.source+"|"+(c===d?m:k).source+"|"+(u.evaluate||k).source+"|$","g");n.replace(c,function(t,e,u,a,i,c){return u||(u=a),l+=n.slice(f,c).replace(C,J),e&&(l+="'+__e("+e+")+'"),i&&(o=r,l+="';"+i+";__p+='"),u&&(l+="'+((__t=("+u+"))==null?'':__t)+'"),f=c+t.length,t
}),l+="';\n",c=u=u.variable,c||(u="obj",l="with("+u+"){"+l+"}"),l=(o?l.replace(v,""):l).replace(g,"$1").replace(y,"$1;"),l="function("+u+"){"+(c?"":u+"||("+u+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var p=Dt(a,"return "+l).apply(e,i)}catch(s){throw s.source=l,s}return t?p(t):(p.source=l,p)},M.unescape=function(n){return n==u?"":Ut(n).replace(h,Z)},M.uniqueId=function(n){var t=++c;return Ut(n==u?"":n)+t
},M.all=st,M.any=kt,M.detect=gt,M.foldl=dt,M.foldr=_t,M.include=pt,M.inject=dt,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(){var t=[this.__wrapped__];return te.apply(t,arguments),n.apply(M,t)})}),M.first=Ct,M.last=function(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[a-1];return Y(n,le(0,a-r))}},M.take=Ct,M.head=Ct,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);
return t==u||e&&typeof t!="function"?r:new Q(r)})}),M.VERSION="1.2.0",M.prototype.toString=function(){return Ut(this.__wrapped__)},M.prototype.value=Ft,M.prototype.valueOf=Ft,yt(["join","pop","shift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)}}),yt(["push","reverse","sort","unshift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),yt(["concat","slice","splice"],function(n){var t=Gt[n];M.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments))
}}),M}var e,r=!0,u=null,a=!1,o=typeof exports=="object"&&exports,i=typeof module=="object"&&module&&module.exports==o&&module,f=typeof global=="object"&&global;(f.global===f||f.window===f)&&(n=f);var c=0,l={},p=+new Date+"",s=200,v=/\b__p\+='';/g,g=/\b(__p\+=)''\+/g,y=/(__e\(.*?\)|\b__t\))\+'';/g,h=/&(?:amp|lt|gt|quot|#39);/g,m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/\w*$/,d=/<%=([\s\S]+?)%>/g,_=/^0+(?=.$)/,k=/($^)/,w=/[&<>"']/g,C=/['\n\r\t\u2028\u2029\\]/g,j="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),x="[object Arguments]",O="[object Array]",N="[object Boolean]",E="[object Date]",I="[object Number]",S="[object Object]",A="[object RegExp]",$="[object String]",B={"[object Function]":a};
B[x]=B[O]=B[N]=B[E]=B[I]=B[S]=B[A]=B[$]=r;var F={"boolean":a,"function":r,object:r,number:a,string:a,undefined:a},R={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},T=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=T,define(function(){return T})):o&&!o.nodeType?i?(i.exports=T)._=T:o._=T:n._=T})(this);
/*!
 * Sinon.JS 1.5.2, 2012/11/27
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @author Contributors: https://github.com/cjohansen/Sinon.JS/blob/master/AUTHORS
 *
 * (The BSD License)
 *
 * Copyright (c) 2010-2012, Christian Johansen, christian@cjohansen.no
 * All rights reserved.
 */var sinon=function(){"use strict";var buster=function(e,t){var n=typeof require=="function"&&typeof module=="object";var r=typeof document!="undefined"&&document.createElement("div");var i=function(){};var s={bind:function(t,n){var r=typeof n=="string"?t[n]:n;var i=Array.prototype.slice.call(arguments,2);return function(){var e=i.concat(Array.prototype.slice.call(arguments));return r.apply(t,e)}},partial:function(t){var n=[].slice.call(arguments,1);return function(){return t.apply(this,n.concat([].slice.call(arguments)))}},create:function(t){i.prototype=t;return new i},extend:function(t){if(!t){return}for(var n=1,r=arguments.length,i;n<r;++n){for(i in arguments[n]){t[i]=arguments[n][i]}}return t},nextTick:function(n){if(typeof process!="undefined"&&process.nextTick){return process.nextTick(n)}e(n,0)},functionName:function(t){if(!t)return"";if(t.displayName)return t.displayName;if(t.name)return t.name;var n=t.toString().match(/function\s+([^\(]+)/m);return n&&n[1]||""},isNode:function(t){if(!r)return false;try{t.appendChild(r);t.removeChild(r)}catch(n){return false}return true},isElement:function(t){return t&&t.nodeType===1&&s.isNode(t)},isArray:function(t){return Object.prototype.toString.call(t)=="[object Array]"},flatten:function a(e){var t=[],e=e||[];for(var n=0,r=e.length;n<r;++n){t=t.concat(s.isArray(e[n])?a(e[n]):e[n])}return t},each:function(t,n){for(var r=0,i=t.length;r<i;++r){n(t[r])}},map:function(t,n){var r=[];for(var i=0,s=t.length;i<s;++i){r.push(n(t[i]))}return r},parallel:function(t,n){function r(e,t){if(typeof n=="function"){n(e,t);n=null}}function o(e){return function(n,o){if(n){return r(n)}s[e]=o;if(--i==0){r(null,s)}}}if(t.length==0){return r(null,[])}var i=t.length,s=[];for(var u=0,a=t.length;u<a;++u){t[u](o(u))}},series:function(t,n){function r(e,t){if(typeof n=="function"){n(e,t)}}function u(){if(i.length==0)return r(null,o);var e=i.shift()(a);if(e&&typeof e.then=="function"){e.then(s.partial(a,null),a)}}function a(e,t){if(e)return r(e);o.push(t);u()}var i=t.slice();var o=[];u()},countdown:function(t,n){return function(){if(--t==0)n()}}};if(typeof process==="object"&&typeof require==="function"&&typeof module==="object"){var o=require("crypto");var u=require("path");s.tmpFile=function(e){var t=o.createHash("sha1");t.update(e);var n=t.digest("hex");if(process.platform=="win32"){return u.join(process.env["TEMP"],n)}else{return u.join("/tmp",n)}}}if(Array.prototype.some){s.some=function(e,t,n){return e.some(t,n)}}else{s.some=function(e,t,n){if(e==null){throw new TypeError}e=Object(e);var r=e.length>>>0;if(typeof t!=="function"){throw new TypeError}for(var i=0;i<r;i++){if(e.hasOwnProperty(i)&&t.call(n,e[i],i,e)){return true}}return false}}if(Array.prototype.filter){s.filter=function(e,t,n){return e.filter(t,n)}}else{s.filter=function(e,t){if(this==null){throw new TypeError}var n=Object(this);var r=n.length>>>0;if(typeof e!="function"){throw new TypeError}var i=[];for(var s=0;s<r;s++){if(s in n){var o=n[s];if(e.call(t,o,s,n)){i.push(o)}}}return i}}if(n){module.exports=s;s.eventEmitter=require("./buster-event-emitter");Object.defineProperty(s,"defineVersionGetter",{get:function(){return require("./define-version-getter")}})}return s.extend(t||{},s)}(setTimeout,buster);if(typeof buster==="undefined"){var buster={}}if(typeof module==="object"&&typeof require==="function"){buster=require("buster-core")}buster.format=buster.format||{};buster.format.excludeConstructors=["Object",/^.$/];buster.format.quoteStrings=true;buster.format.ascii=function(){function n(t){var n=Object.keys&&Object.keys(t)||[];if(n.length==0){for(var r in t){if(e.call(t,r)){n.push(r)}}}return n.sort()}function r(e,t){if(typeof e!="object"){return false}for(var n=0,r=t.length;n<r;++n){if(t[n]===e){return true}}return false}function i(e,n,s){if(typeof e=="string"){var o=typeof this.quoteStrings!="boolean"||this.quoteStrings;return n||o?'"'+e+'"':e}if(typeof e=="function"&&!(e instanceof RegExp)){return i.func(e)}n=n||[];if(r(e,n)){return"[Circular]"}if(Object.prototype.toString.call(e)=="[object Array]"){return i.array.call(this,e,n)}if(!e){return""+e}if(buster.isElement(e)){return i.element(e)}if(typeof e.toString=="function"&&e.toString!==Object.prototype.toString){return e.toString()}for(var u=0,a=t.length;u<a;u++){if(e===t[u].obj){return t[u].value}}return i.object.call(this,e,n,s)}var e=Object.prototype.hasOwnProperty;var t=[];if(typeof global!="undefined"){t.push({obj:global,value:"[object global]"})}if(typeof document!="undefined"){t.push({obj:document,value:"[object HTMLDocument]"})}if(typeof window!="undefined"){t.push({obj:window,value:"[object Window]"})}i.func=function(e){return"function "+buster.functionName(e)+"() {}"};i.array=function(e,t){t=t||[];t.push(e);var n=[];for(var r=0,s=e.length;r<s;++r){n.push(i.call(this,e[r],t))}return"["+n.join(", ")+"]"};i.object=function(e,t,s){t=t||[];t.push(e);s=s||0;var o=[],u=n(e),a,f,l;var c="";var h=3;for(var p=0,d=s;p<d;++p){c+=" "}for(p=0,d=u.length;p<d;++p){a=u[p];l=e[a];if(r(l,t)){f="[Circular]"}else{f=i.call(this,l,t,s+2)}f=(/\s/.test(a)?'"'+a+'"':a)+": "+f;h+=f.length;o.push(f)}var v=i.constructorName.call(this,e);var m=v?"["+v+"] ":"";return h+s>80?m+"{\n  "+c+o.join(",\n  "+c)+"\n"+c+"}":m+"{ "+o.join(", ")+" }"};i.element=function(e){var t=e.tagName.toLowerCase();var n=e.attributes,r,i=[],s;for(var o=0,u=n.length;o<u;++o){r=n.item(o);s=r.nodeName.toLowerCase().replace("html:","");if(s=="contenteditable"&&r.nodeValue=="inherit"){continue}if(!!r.nodeValue){i.push(s+'="'+r.nodeValue+'"')}}var a="<"+t+(i.length>0?" ":"");var f=e.innerHTML;if(f.length>20){f=f.substr(0,20)+"[...]"}var l=a+i.join(" ")+">"+f+"</"+t+">";return l.replace(/ contentEditable="inherit"/,"")};i.constructorName=function(e){var t=buster.functionName(e&&e.constructor);var n=this.excludeConstructors||buster.format.excludeConstructors||[];for(var r=0,i=n.length;r<i;++r){if(typeof n[r]=="string"&&n[r]==t){return""}else if(n[r].test&&n[r].test(t)){return""}}return t};return i}();if(typeof module!="undefined"){module.exports=buster.format}var sinon=function(e){function r(e){var n=false;try{e.appendChild(t);n=t.parentNode==e}catch(r){return false}finally{try{e.removeChild(t)}catch(r){}}return n}function i(e){return t&&e&&e.nodeType===1&&r(e)}function s(e){return typeof e==="function"||!!(e&&e.constructor&&e.call&&e.apply)}function o(e,t){for(var r in t){if(!n.call(e,r)){e[r]=t[r]}}}var t=typeof document!="undefined"&&document.createElement("div");var n=Object.prototype.hasOwnProperty;var u={wrapMethod:function(t,r,i){if(!t){throw new TypeError("Should wrap property of object")}if(typeof i!="function"){throw new TypeError("Method wrapper should be function")}var u=t[r];if(!s(u)){throw new TypeError("Attempted to wrap "+typeof u+" property "+r+" as function")}if(u.restore&&u.restore.sinon){throw new TypeError("Attempted to wrap "+r+" which is already wrapped")}if(u.calledBefore){var a=!!u.returns?"stubbed":"spied on";throw new TypeError("Attempted to wrap "+r+" which is already "+a)}var f=n.call(t,r);t[r]=i;i.displayName=r;i.restore=function(){if(!f){delete t[r]}if(t[r]===i){t[r]=u}};i.restore.sinon=true;o(i,u);return i},extend:function(t){for(var n=1,r=arguments.length;n<r;n+=1){for(var i in arguments[n]){if(arguments[n].hasOwnProperty(i)){t[i]=arguments[n][i]}if(arguments[n].hasOwnProperty("toString")&&arguments[n].toString!=t.toString){t.toString=arguments[n].toString}}}return t},create:function(t){var n=function(){};n.prototype=t;return new n},deepEqual:function h(e,t){if(u.match&&u.match.isMatcher(e)){return e.test(t)}if(typeof e!="object"||typeof t!="object"){return e===t}if(i(e)||i(t)){return e===t}if(e===t){return true}if(e===null&&t!==null||e!==null&&t===null){return false}var n=Object.prototype.toString.call(e);if(n!=Object.prototype.toString.call(t)){return false}if(n=="[object Array]"){if(e.length!==t.length){return false}for(var r=0,s=e.length;r<s;r+=1){if(!h(e[r],t[r])){return false}}return true}var o,a=0,f=0;for(o in e){a+=1;if(!h(e[o],t[o])){return false}}for(o in t){f+=1}if(a!=f){return false}return true},functionName:function(t){var n=t.displayName||t.name;if(!n){var r=t.toString().match(/function ([^\s\(]+)/);n=r&&r[1]}return n},functionToString:function p(){if(this.getCall&&this.callCount){var e,t,n=this.callCount;while(n--){e=this.getCall(n).thisValue;for(t in e){if(e[t]===this){return t}}}}return this.displayName||"sinon fake"},getConfig:function(e){var t={};e=e||{};var n=u.defaultConfig;for(var r in n){if(n.hasOwnProperty(r)){t[r]=e.hasOwnProperty(r)?e[r]:n[r]}}return t},format:function(e){return""+e},defaultConfig:{injectIntoThis:true,injectInto:null,properties:["spy","stub","mock","clock","server","requests"],useFakeTimers:true,useFakeServer:true},timesInWords:function(t){return t==1&&"once"||t==2&&"twice"||t==3&&"thrice"||(t||0)+" times"},calledInOrder:function(e){for(var t=1,n=e.length;t<n;t++){if(!e[t-1].calledBefore(e[t])){return false}}return true},orderByFirstCall:function(e){return e.sort(function(e,t){var n=e.getCall(0);var r=t.getCall(0);var i=n&&n.callId||-1;var s=r&&r.callId||-1;return i<s?-1:1})},log:function(){},logError:function(e,t){var n=e+" threw exception: ";u.log(n+"["+t.name+"] "+t.message);if(t.stack){u.log(t.stack)}setTimeout(function(){t.message=n+t.message;throw t},0)},typeOf:function(e){if(e===null){return"null"}else if(e===undefined){return"undefined"}var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1).toLowerCase()}};var a=typeof module=="object"&&typeof require=="function";if(a){try{e={format:require("buster-format")}}catch(f){}module.exports=u;module.exports.spy=require("./sinon/spy");module.exports.stub=require("./sinon/stub");module.exports.mock=require("./sinon/mock");module.exports.collection=require("./sinon/collection");module.exports.assert=require("./sinon/assert");module.exports.sandbox=require("./sinon/sandbox");module.exports.test=require("./sinon/test");module.exports.testCase=require("./sinon/test_case");module.exports.assert=require("./sinon/assert");module.exports.match=require("./sinon/match")}if(e){var l=u.create(e.format);l.quoteStrings=false;u.format=function(){return l.ascii.apply(l,arguments)}}else if(a){try{var c=require("util");u.format=function(e){return typeof e=="object"&&e.toString===Object.prototype.toString?c.inspect(e):e}}catch(f){}}return u}(typeof buster=="object"&&buster);(function(e){function n(t,n,r){var i=e.typeOf(t);if(i!==n){throw new TypeError("Expected type of "+r+" to be "+n+", but was "+i)}}function i(e){return r.isPrototypeOf(e)}function s(t,n){if(n===null||n===undefined){return false}for(var r in t){if(t.hasOwnProperty(r)){var i=t[r];var u=n[r];if(o.isMatcher(i)){if(!i.test(u)){return false}}else if(e.typeOf(i)==="object"){if(!s(i,u)){return false}}else if(!e.deepEqual(i,u)){return false}}}return true}function u(t,r){return function(i,s){n(i,"string","property");var u=arguments.length===1;var a=r+'("'+i+'"';if(!u){a+=", "+s}a+=")";return o(function(n){if(n===undefined||n===null||!t(n,i)){return false}return u||e.deepEqual(s,n[i])},a)}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}var r={toString:function(){return this.message}};r.or=function(t){if(!i(t)){throw new TypeError("Matcher expected")}var n=this;var s=e.create(r);s.test=function(e){return n.test(e)||t.test(e)};s.message=n.message+".or("+t.message+")";return s};r.and=function(t){if(!i(t)){throw new TypeError("Matcher expected")}var n=this;var s=e.create(r);s.test=function(e){return n.test(e)&&t.test(e)};s.message=n.message+".and("+t.message+")";return s};var o=function(t,n){var i=e.create(r);var o=e.typeOf(t);switch(o){case"object":if(typeof t.test==="function"){i.test=function(e){return t.test(e)===true};i.message="match("+e.functionName(t.test)+")";return i}var u=[];for(var a in t){if(t.hasOwnProperty(a)){u.push(a+": "+t[a])}}i.test=function(e){return s(t,e)};i.message="match("+u.join(", ")+")";break;case"number":i.test=function(e){return t==e};break;case"string":i.test=function(e){if(typeof e!=="string"){return false}return e.indexOf(t)!==-1};i.message='match("'+t+'")';break;case"regexp":i.test=function(e){if(typeof e!=="string"){return false}return t.test(e)};break;case"function":i.test=t;if(n){i.message=n}else{i.message="match("+e.functionName(t)+")"}break;default:i.test=function(n){return e.deepEqual(t,n)}}if(!i.message){i.message="match("+t+")"}return i};o.isMatcher=i;o.any=o(function(){return true},"any");o.defined=o(function(e){return e!==null&&e!==undefined},"defined");o.truthy=o(function(e){return!!e},"truthy");o.falsy=o(function(e){return!e},"falsy");o.same=function(e){return o(function(t){return e===t},"same("+e+")")};o.typeOf=function(t){n(t,"string","type");return o(function(n){return e.typeOf(n)===t},'typeOf("'+t+'")')};o.instanceOf=function(t){n(t,"function","type");return o(function(e){return e instanceof t},"instanceOf("+e.functionName(t)+")")};o.has=u(function(e,t){if(typeof e==="object"){return t in e}return e[t]!==undefined},"has");o.hasOwn=u(function(e,t){return e.hasOwnProperty(t)},"hasOwn");o.bool=o.typeOf("boolean");o.number=o.typeOf("number");o.string=o.typeOf("string");o.object=o.typeOf("object");o.func=o.typeOf("function");o.array=o.typeOf("array");o.regexp=o.typeOf("regexp");o.date=o.typeOf("date");if(t){module.exports=o}else{e.match=o}})(typeof sinon=="object"&&sinon||null);(function(sinon){function spy(e,t){if(!t&&typeof e=="function"){return spy.create(e)}if(!e&&!t){return spy.create(function(){})}var n=e[t];return sinon.wrapMethod(e,t,spy.create(n))}var commonJSModule=typeof module=="object"&&typeof require=="function";var spyCall;var callId=0;var push=[].push;var slice=Array.prototype.slice;if(!sinon&&commonJSModule){sinon=require("../sinon")}if(!sinon){return}sinon.extend(spy,function(){function delegateToCalls(e,t,n,r,i){e[t]=function(){if(!this.called){if(i){return i.apply(this,arguments)}return false}var e;var s=0;for(var o=0,u=this.callCount;o<u;o+=1){e=this.getCall(o);if(e[r||t].apply(e,arguments)){s+=1;if(n){return true}}}return s===this.callCount}}function matchingFake(e,t,n){if(!e){return}var r=t.length;for(var i=0,s=e.length;i<s;i++){if(e[i].matches(t,n)){return e[i]}}}function incrementCallCount(){this.called=true;this.callCount+=1;this.notCalled=false;this.calledOnce=this.callCount==1;this.calledTwice=this.callCount==2;this.calledThrice=this.callCount==3}function createCallProperties(){this.firstCall=this.getCall(0);this.secondCall=this.getCall(1);this.thirdCall=this.getCall(2);this.lastCall=this.getCall(this.callCount-1)}function createProxy(func){var p;if(func.length){eval("p = (function proxy("+vars.substring(0,func.length*2-1)+") { return p.invoke(func, this, slice.call(arguments)); });")}else{p=function(){return p.invoke(func,this,slice.call(arguments))}}return p}var vars="a,b,c,d,e,f,g,h,i,j,k,l";var uuid=0;var spyApi={reset:function(){this.called=false;this.notCalled=true;this.calledOnce=false;this.calledTwice=false;this.calledThrice=false;this.callCount=0;this.firstCall=null;this.secondCall=null;this.thirdCall=null;this.lastCall=null;this.args=[];this.returnValues=[];this.thisValues=[];this.exceptions=[];this.callIds=[];if(this.fakes){for(var e=0;e<this.fakes.length;e++){this.fakes[e].reset()}}},create:function(t){var n;if(typeof t!="function"){t=function(){}}else{n=sinon.functionName(t)}var r=createProxy(t);sinon.extend(r,spy);delete r.create;sinon.extend(r,t);r.reset();r.prototype=t.prototype;r.displayName=n||"spy";r.toString=sinon.functionToString;r._create=sinon.spy.create;r.id="spy#"+uuid++;return r},invoke:function(t,n,r){var i=matchingFake(this.fakes,r);var s,o;incrementCallCount.call(this);push.call(this.thisValues,n);push.call(this.args,r);push.call(this.callIds,callId++);try{if(i){o=i.invoke(t,n,r)}else{o=(this.func||t).apply(n,r)}}catch(u){push.call(this.returnValues,undefined);s=u;throw u}finally{push.call(this.exceptions,s)}push.call(this.returnValues,o);createCallProperties.call(this);return o},getCall:function(t){if(t<0||t>=this.callCount){return null}return spyCall.create(this,this.thisValues[t],this.args[t],this.returnValues[t],this.exceptions[t],this.callIds[t])},calledBefore:function(t){if(!this.called){return false}if(!t.called){return true}return this.callIds[0]<t.callIds[t.callIds.length-1]},calledAfter:function(t){if(!this.called||!t.called){return false}return this.callIds[this.callCount-1]>t.callIds[t.callCount-1]},withArgs:function(){var e=slice.call(arguments);if(this.fakes){var t=matchingFake(this.fakes,e,true);if(t){return t}}else{this.fakes=[]}var n=this;var r=this._create();r.matchingAguments=e;push.call(this.fakes,r);r.withArgs=function(){return n.withArgs.apply(n,arguments)};for(var i=0;i<this.args.length;i++){if(r.matches(this.args[i])){incrementCallCount.call(r);push.call(r.thisValues,this.thisValues[i]);push.call(r.args,this.args[i]);push.call(r.returnValues,this.returnValues[i]);push.call(r.exceptions,this.exceptions[i]);push.call(r.callIds,this.callIds[i])}}createCallProperties.call(r);return r},matches:function(e,t){var n=this.matchingAguments;if(n.length<=e.length&&sinon.deepEqual(n,e.slice(0,n.length))){return!t||n.length==e.length}},printf:function(e){var t=this;var n=slice.call(arguments,1);var r;return(e||"").replace(/%(.)/g,function(e,i){r=spyApi.formatters[i];if(typeof r=="function"){return r.call(null,t,n)}else if(!isNaN(parseInt(i),10)){return sinon.format(n[i-1])}return"%"+i})}};delegateToCalls(spyApi,"calledOn",true);delegateToCalls(spyApi,"alwaysCalledOn",false,"calledOn");delegateToCalls(spyApi,"calledWith",true);delegateToCalls(spyApi,"calledWithMatch",true);delegateToCalls(spyApi,"alwaysCalledWith",false,"calledWith");delegateToCalls(spyApi,"alwaysCalledWithMatch",false,"calledWithMatch");delegateToCalls(spyApi,"calledWithExactly",true);delegateToCalls(spyApi,"alwaysCalledWithExactly",false,"calledWithExactly");delegateToCalls(spyApi,"neverCalledWith",false,"notCalledWith",function(){return true});delegateToCalls(spyApi,"neverCalledWithMatch",false,"notCalledWithMatch",function(){return true});delegateToCalls(spyApi,"threw",true);delegateToCalls(spyApi,"alwaysThrew",false,"threw");delegateToCalls(spyApi,"returned",true);delegateToCalls(spyApi,"alwaysReturned",false,"returned");delegateToCalls(spyApi,"calledWithNew",true);delegateToCalls(spyApi,"alwaysCalledWithNew",false,"calledWithNew");delegateToCalls(spyApi,"callArg",false,"callArgWith",function(){throw new Error(this.toString()+" cannot call arg since it was not yet invoked.")});spyApi.callArgWith=spyApi.callArg;delegateToCalls(spyApi,"yield",false,"yield",function(){throw new Error(this.toString()+" cannot yield since it was not yet invoked.")});spyApi.invokeCallback=spyApi.yield;delegateToCalls(spyApi,"yieldTo",false,"yieldTo",function(e){throw new Error(this.toString()+" cannot yield to '"+e+"' since it was not yet invoked.")});spyApi.formatters={c:function(e){return sinon.timesInWords(e.callCount)},n:function(e){return e.toString()},C:function(e){var t=[];for(var n=0,r=e.callCount;n<r;++n){push.call(t,"    "+e.getCall(n).toString())}return t.length>0?"\n"+t.join("\n"):""},t:function(e){var t=[];for(var n=0,r=e.callCount;n<r;++n){push.call(t,sinon.format(e.thisValues[n]))}return t.join(", ")},"*":function(e,t){var n=[];for(var r=0,i=t.length;r<i;++r){push.call(n,sinon.format(t[r]))}return n.join(", ")}};return spyApi}());spyCall=function(){function e(e,t,n){var r=sinon.functionName(e)+t;if(n.length){r+=" Received ["+slice.call(n).join(", ")+"]"}throw new Error(r)}var t={create:function(t,n,r,i,s,o){var u=sinon.create(spyCall);delete u.create;u.proxy=t;u.thisValue=n;u.args=r;u.returnValue=i;u.exception=s;u.callId=typeof o=="number"&&o||callId++;return u},calledOn:function(t){if(sinon.match&&sinon.match.isMatcher(t)){return t.test(this.thisValue)}return this.thisValue===t},calledWith:function(){for(var t=0,n=arguments.length;t<n;t+=1){if(!sinon.deepEqual(arguments[t],this.args[t])){return false}}return true},calledWithMatch:function(){for(var t=0,n=arguments.length;t<n;t+=1){var r=this.args[t];var i=arguments[t];if(!sinon.match||!sinon.match(i).test(r)){return false}}return true},calledWithExactly:function(){return arguments.length==this.args.length&&this.calledWith.apply(this,arguments)},notCalledWith:function(){return!this.calledWith.apply(this,arguments)},notCalledWithMatch:function(){return!this.calledWithMatch.apply(this,arguments)},returned:function(t){return sinon.deepEqual(t,this.returnValue)},threw:function(t){if(typeof t=="undefined"||!this.exception){return!!this.exception}if(typeof t=="string"){return this.exception.name==t}return this.exception===t},calledWithNew:function(t){return this.thisValue instanceof this.proxy},calledBefore:function(e){return this.callId<e.callId},calledAfter:function(e){return this.callId>e.callId},callArg:function(e){this.args[e]()},callArgWith:function(e){var t=slice.call(arguments,1);this.args[e].apply(null,t)},yield:function(){var t=this.args;for(var n=0,r=t.length;n<r;++n){if(typeof t[n]==="function"){t[n].apply(null,slice.call(arguments));return}}e(this.proxy," cannot yield since no callback was passed.",t)},yieldTo:function(t){var n=this.args;for(var r=0,i=n.length;r<i;++r){if(n[r]&&typeof n[r][t]==="function"){n[r][t].apply(null,slice.call(arguments,1));return}}e(this.proxy," cannot yield to '"+t+"' since no callback was passed.",n)},toString:function(){var e=this.proxy.toString()+"(";var t=[];for(var n=0,r=this.args.length;n<r;++n){push.call(t,sinon.format(this.args[n]))}e=e+t.join(", ")+")";if(typeof this.returnValue!="undefined"){e+=" => "+sinon.format(this.returnValue)}if(this.exception){e+=" !"+this.exception.name;if(this.exception.message){e+="("+this.exception.message+")"}}return e}};t.invokeCallback=t.yield;return t}();spy.spyCall=spyCall;sinon.spyCall=spyCall;if(commonJSModule){module.exports=spy}else{sinon.spy=spy}})(typeof sinon=="object"&&sinon||null);(function(e){function n(t,r,i){if(!!i&&typeof i!="function"){throw new TypeError("Custom stub should be function")}var s;if(i){s=e.spy&&e.spy.create?e.spy.create(i):i}else{s=n.create()}if(!t&&!r){return e.stub.create()}if(!r&&!!t&&typeof t=="object"){for(var o in t){if(typeof t[o]==="function"){n(t,o)}}return t}return e.wrapMethod(t,r,s)}function r(e,t){var n=e.callCount-1;var r=n in e[t]?e[t][n]:e[t+"Last"];e[t+"Last"]=r;return r}function i(e,t){var n=r(e,"callArgAts");if(n<0){var i=r(e,"callArgProps");for(var s=0,o=t.length;s<o;++s){if(!i&&typeof t[s]=="function"){return t[s]}if(i&&t[s]&&typeof t[s][i]=="function"){return t[s][i]}}return null}return t[n]}function o(t,n,r){if(t.callArgAtsLast<0){var i;if(t.callArgPropsLast){i=e.functionName(t)+" expected to yield to '"+t.callArgPropsLast+"', but no object with such a property was passed."}else{i=e.functionName(t)+" expected to yield, but no callback was passed."}if(r.length>0){i+=" Received ["+s.call(r,", ")+"]"}return i}return"argument at index "+t.callArgAtsLast+" is not a function: "+n}function a(e,t){if(e.callArgAts.length>0){var n=i(e,t);if(typeof n!="function"){throw new TypeError(o(e,n,t))}var s=e.callCount-1;var a=r(e,"callbackArguments");var f=r(e,"callbackContexts");if(e.callbackAsync){u(function(){n.apply(f,a)})}else{n.apply(f,a)}}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}var s=Array.prototype.join;var u=function(){if(typeof process==="object"&&typeof process.nextTick==="function"){return process.nextTick}else if(typeof msSetImmediate==="function"){return msSetImmediate.bind(window)}else if(typeof setImmediate==="function"){return setImmediate}else{return function(e){setTimeout(e,0)}}}();var f=0;e.extend(n,function(){function i(e,t){if(typeof e=="string"){this.exception=new Error(t||"");this.exception.name=e}else if(!e){this.exception=new Error("Error")}else{this.exception=e}return this}var t=Array.prototype.slice,r;r={create:function(){var r=function(){a(r,arguments);if(r.exception){throw r.exception}else if(typeof r.returnArgAt=="number"){return arguments[r.returnArgAt]}else if(r.returnThis){return this}return r.returnValue};r.id="stub#"+f++;var i=r;r=e.spy.create(r);r.func=i;r.callArgAts=[];r.callbackArguments=[];r.callbackContexts=[];r.callArgProps=[];e.extend(r,n);r._create=e.stub.create;r.displayName="stub";r.toString=e.functionToString;return r},returns:function(t){this.returnValue=t;return this},returnsArg:function(t){if(typeof t!="number"){throw new TypeError("argument index is not number")}this.returnArgAt=t;return this},returnsThis:function(){this.returnThis=true;return this},"throws":i,throwsException:i,callsArg:function(t){if(typeof t!="number"){throw new TypeError("argument index is not number")}this.callArgAts.push(t);this.callbackArguments.push([]);this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},callsArgOn:function(t,n){if(typeof t!="number"){throw new TypeError("argument index is not number")}if(typeof n!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(t);this.callbackArguments.push([]);this.callbackContexts.push(n);this.callArgProps.push(undefined);return this},callsArgWith:function(n){if(typeof n!="number"){throw new TypeError("argument index is not number")}this.callArgAts.push(n);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},callsArgOnWith:function(n,r){if(typeof n!="number"){throw new TypeError("argument index is not number")}if(typeof r!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(n);this.callbackArguments.push(t.call(arguments,2));this.callbackContexts.push(r);this.callArgProps.push(undefined);return this},yields:function(){this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,0));this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},yieldsOn:function(e){if(typeof e!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(e);this.callArgProps.push(undefined);return this},yieldsTo:function(e){this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(undefined);this.callArgProps.push(e);return this},yieldsToOn:function(e,n){if(typeof n!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,2));this.callbackContexts.push(n);this.callArgProps.push(e);return this}};for(var s in r){if(r.hasOwnProperty(s)&&s.match(/^(callsArg|yields|thenYields$)/)&&!s.match(/Async/)){r[s+"Async"]=function(e){return function(){this.callbackAsync=true;return this[e].apply(this,arguments)}}(s)}}return r}());if(t){module.exports=n}else{e.stub=n}})(typeof sinon=="object"&&sinon||null);(function(e){function r(t){if(!t){return e.expectation.create("Anonymous mock")}return r.create(t)}var t=typeof module=="object"&&typeof require=="function";var n=[].push;if(!e&&t){e=require("../sinon")}if(!e){return}e.mock=r;e.extend(r,function(){function t(e,t){if(!e){return}for(var n=0,r=e.length;n<r;n+=1){t(e[n])}}return{create:function(n){if(!n){throw new TypeError("object is null")}var i=e.extend({},r);i.object=n;delete i.create;return i},expects:function(r){if(!r){throw new TypeError("method is falsy")}if(!this.expectations){this.expectations={};this.proxies=[]}if(!this.expectations[r]){this.expectations[r]=[];var i=this;e.wrapMethod(this.object,r,function(){return i.invokeMethod(r,this,arguments)});n.call(this.proxies,r)}var s=e.expectation.create(r);n.call(this.expectations[r],s);return s},restore:function(){var n=this.object;t(this.proxies,function(e){if(typeof n[e].restore=="function"){n[e].restore()}})},verify:function(){var i=this.expectations||{};var s=[],o=[];t(this.proxies,function(e){t(i[e],function(e){if(!e.met()){n.call(s,e.toString())}else{n.call(o,e.toString())}})});this.restore();if(s.length>0){e.expectation.fail(s.concat(o).join("\n"))}else{e.expectation.pass(s.concat(o).join("\n"))}return true},invokeMethod:function(r,i,s){var o=this.expectations&&this.expectations[r];var u=o&&o.length||0,a;for(a=0;a<u;a+=1){if(!o[a].met()&&o[a].allowsCall(i,s)){return o[a].apply(i,s)}}var f=[],l,c=0;for(a=0;a<u;a+=1){if(o[a].allowsCall(i,s)){l=l||o[a]}else{c+=1}n.call(f,"    "+o[a].toString())}if(c===0){return l.apply(i,s)}f.unshift("Unexpected call: "+e.spyCall.toString.call({proxy:r,args:s}));e.expectation.fail(f.join("\n"))}}}());var i=e.timesInWords;e.expectation=function(){function s(e){if(e==0){return"never called"}else{return"called "+i(e)}}function o(e){var t=e.minCalls;var n=e.maxCalls;if(typeof t=="number"&&typeof n=="number"){var r=i(t);if(t!=n){r="at least "+r+" and at most "+i(n)}return r}if(typeof t=="number"){return"at least "+i(t)}return"at most "+i(n)}function u(e){var t=typeof e.minCalls=="number";return!t||e.callCount>=e.minCalls}function a(e){if(typeof e.maxCalls!="number"){return false}return e.callCount==e.maxCalls}var t=Array.prototype.slice;var r=e.spy.invoke;return{minCalls:1,maxCalls:1,create:function(n){var r=e.extend(e.stub.create(),e.expectation);delete r.create;r.method=n;return r},invoke:function(t,n,i){this.verifyCallAllowed(n,i);return r.apply(this,arguments)},atLeast:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not number")}if(!this.limitsSet){this.maxCalls=null;this.limitsSet=true}this.minCalls=t;return this},atMost:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not number")}if(!this.limitsSet){this.minCalls=null;this.limitsSet=true}this.maxCalls=t;return this},never:function(){return this.exactly(0)},once:function(){return this.exactly(1)},twice:function(){return this.exactly(2)},thrice:function(){return this.exactly(3)},exactly:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not a number")}this.atLeast(t);return this.atMost(t)},met:function(){return!this.failed&&u(this)},verifyCallAllowed:function(n,r){if(a(this)){this.failed=true;e.expectation.fail(this.method+" already called "+i(this.maxCalls))}if("expectedThis"in this&&this.expectedThis!==n){e.expectation.fail(this.method+" called with "+n+" as thisValue, expected "+this.expectedThis)}if(!("expectedArguments"in this)){return}if(!r){e.expectation.fail(this.method+" received no arguments, expected "+e.format(this.expectedArguments))}if(r.length<this.expectedArguments.length){e.expectation.fail(this.method+" received too few arguments ("+e.format(r)+"), expected "+e.format(this.expectedArguments))}if(this.expectsExactArgCount&&r.length!=this.expectedArguments.length){e.expectation.fail(this.method+" received too many arguments ("+e.format(r)+"), expected "+e.format(this.expectedArguments))}for(var s=0,o=this.expectedArguments.length;s<o;s+=1){if(!e.deepEqual(this.expectedArguments[s],r[s])){e.expectation.fail(this.method+" received wrong arguments "+e.format(r)+", expected "+e.format(this.expectedArguments))}}},allowsCall:function(n,r){if(this.met()&&a(this)){return false}if("expectedThis"in this&&this.expectedThis!==n){return false}if(!("expectedArguments"in this)){return true}r=r||[];if(r.length<this.expectedArguments.length){return false}if(this.expectsExactArgCount&&r.length!=this.expectedArguments.length){return false}for(var i=0,s=this.expectedArguments.length;i<s;i+=1){if(!e.deepEqual(this.expectedArguments[i],r[i])){return false}}return true},withArgs:function(){this.expectedArguments=t.call(arguments);return this},withExactArgs:function(){this.withArgs.apply(this,arguments);this.expectsExactArgCount=true;return this},on:function(t){this.expectedThis=t;return this},toString:function(){var t=(this.expectedArguments||[]).slice();if(!this.expectsExactArgCount){n.call(t,"[...]")}var r=e.spyCall.toString.call({proxy:this.method,args:t});var i=r.replace(", [...","[, ...")+" "+o(this);if(this.met()){return"Expectation met: "+i}return"Expected "+i+" ("+s(this.callCount)+")"},verify:function(){if(!this.met()){e.expectation.fail(this.toString())}else{e.expectation.pass(this.toString())}return true},pass:function(t){e.assert.pass(t)},fail:function(e){var t=new Error(e);t.name="ExpectationError";throw t}}}();if(t){module.exports=r}else{e.mock=r}})(typeof sinon=="object"&&sinon||null);(function(e){function i(e){if(!e.fakes){e.fakes=[]}return e.fakes}function s(e,t){var n=i(e);for(var r=0,s=n.length;r<s;r+=1){if(typeof n[r][t]=="function"){n[r][t]()}}}function o(e){var t=i(e);var n=0;while(n<t.length){t.splice(n,1)}}var t=typeof module=="object"&&typeof require=="function";var n=[].push;var r=Object.prototype.hasOwnProperty;if(!e&&t){e=require("../sinon")}if(!e){return}var u={verify:function(){s(this,"verify")},restore:function(){s(this,"restore");o(this)},verifyAndRestore:function(){var t;try{this.verify()}catch(n){t=n}this.restore();if(t){throw t}},add:function(t){n.call(i(this),t);return t},spy:function(){return this.add(e.spy.apply(e,arguments))},stub:function(n,i,s){if(i){var o=n[i];if(typeof o!="function"){if(!r.call(n,i)){throw new TypeError("Cannot stub non-existent own property "+i)}n[i]=s;return this.add({restore:function(){n[i]=o}})}}if(!i&&!!n&&typeof n=="object"){var u=e.stub.apply(e,arguments);for(var a in u){if(typeof u[a]==="function"){this.add(u[a])}}return u}return this.add(e.stub.apply(e,arguments))},mock:function(){return this.add(e.mock.apply(e,arguments))},inject:function(t){var n=this;t.spy=function(){return n.spy.apply(n,arguments)};t.stub=function(){return n.stub.apply(n,arguments)};t.mock=function(){return n.mock.apply(n,arguments)};return t}};if(t){module.exports=u}else{e.collection=u}})(typeof sinon=="object"&&sinon||null);if(typeof sinon=="undefined"){var sinon={}}(function(global){function addTimer(e,t){if(e.length===0){throw new Error("Function requires at least 1 parameter")}var n=id++;var r=e[1]||0;if(!this.timeouts){this.timeouts={}}this.timeouts[n]={id:n,func:e[0],callAt:this.now+r,invokeArgs:Array.prototype.slice.call(e,2)};if(t===true){this.timeouts[n].interval=r}return n}function parseTime(e){if(!e){return 0}var t=e.split(":");var n=t.length,r=n;var i=0,s;if(n>3||!/^(\d\d:){0,2}\d\d?$/.test(e)){throw new Error("tick only understands numbers and 'h:m:s'")}while(r--){s=parseInt(t[r],10);if(s>=60){throw new Error("Invalid time "+e)}i+=s*Math.pow(60,n-r-1)}return i*1e3}function createObject(e){var t;if(Object.create){t=Object.create(e)}else{var n=function(){};n.prototype=e;t=new n}t.Date.clock=t;return t}function mirrorDateProperties(e,t){if(t.now){e.now=function(){return e.clock.now}}else{delete e.now}if(t.toSource){e.toSource=function(){return t.toSource()}}else{delete e.toSource}e.toString=function n(){return t.toString()};e.prototype=t.prototype;e.parse=t.parse;e.UTC=t.UTC;e.prototype.toUTCString=t.prototype.toUTCString;return e}function restore(){var e;for(var t=0,n=this.methods.length;t<n;t++){e=this.methods[t];if(global[e].hadOwnProperty){global[e]=this["_"+e]}else{delete global[e]}}this.methods=[]}function stubGlobal(e,t){t[e].hadOwnProperty=Object.prototype.hasOwnProperty.call(global,e);t["_"+e]=global[e];if(e=="Date"){var n=mirrorDateProperties(t[e],global[e]);global[e]=n}else{global[e]=function(){return t[e].apply(t,arguments)};for(var r in t[e]){if(t[e].hasOwnProperty(r)){global[e][r]=t[e][r]}}}global[e].clock=t}var id=1;sinon.clock={now:0,create:function(t){var n=createObject(this);if(typeof t=="number"){n.now=t}if(!!t&&typeof t=="object"){throw new TypeError("now should be milliseconds since UNIX epoch")}return n},setTimeout:function(t,n){return addTimer.call(this,arguments,false)},clearTimeout:function(t){if(!this.timeouts){this.timeouts=[]}if(t in this.timeouts){delete this.timeouts[t]}},setInterval:function(t,n){return addTimer.call(this,arguments,true)},clearInterval:function(t){this.clearTimeout(t)},tick:function(t){t=typeof t=="number"?t:parseTime(t);var n=this.now,r=this.now+t,i=this.now;var s=this.firstTimerInRange(n,r);var o;while(s&&n<=r){if(this.timeouts[s.id]){n=this.now=s.callAt;try{this.callTimer(s)}catch(u){o=o||u}}s=this.firstTimerInRange(i,r);i=n}this.now=r;if(o){throw o}},firstTimerInRange:function(e,t){var n,r,i;for(var s in this.timeouts){if(this.timeouts.hasOwnProperty(s)){if(this.timeouts[s].callAt<e||this.timeouts[s].callAt>t){continue}if(!r||this.timeouts[s].callAt<r){i=this.timeouts[s];r=this.timeouts[s].callAt;n={func:this.timeouts[s].func,callAt:this.timeouts[s].callAt,interval:this.timeouts[s].interval,id:this.timeouts[s].id,invokeArgs:this.timeouts[s].invokeArgs}}}}return n||null},callTimer:function(timer){if(typeof timer.interval=="number"){this.timeouts[timer.id].callAt+=timer.interval}else{delete this.timeouts[timer.id]}try{if(typeof timer.func=="function"){timer.func.apply(null,timer.invokeArgs)}else{eval(timer.func)}}catch(e){var exception=e}if(!this.timeouts[timer.id]){if(exception){throw exception}return}if(exception){throw exception}},reset:function(){this.timeouts={}},Date:function(){function t(n,r,i,s,o,u,a){switch(arguments.length){case 0:return new e(t.clock.now);case 1:return new e(n);case 2:return new e(n,r);case 3:return new e(n,r,i);case 4:return new e(n,r,i,s);case 5:return new e(n,r,i,s,o);case 6:return new e(n,r,i,s,o,u);default:return new e(n,r,i,s,o,u,a)}}var e=Date;return mirrorDateProperties(t,e)}()};var methods=["Date","setTimeout","setInterval","clearTimeout","clearInterval"];sinon.useFakeTimers=function(t){var n=sinon.clock.create(t);n.restore=restore;n.methods=Array.prototype.slice.call(arguments,typeof t=="number"?1:0);if(n.methods.length===0){n.methods=methods}for(var r=0,i=n.methods.length;r<i;r++){stubGlobal(n.methods[r],n)}return n}})(typeof global!="undefined"&&typeof global!=="function"?global:this);sinon.timers={setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval,Date:Date};if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}if(typeof sinon=="undefined"){this.sinon={}}(function(){var e=[].push;sinon.Event=function(t,n,r){this.initEvent(t,n,r)};sinon.Event.prototype={initEvent:function(e,t,n){this.type=e;this.bubbles=t;this.cancelable=n},stopPropagation:function(){},preventDefault:function(){this.defaultPrevented=true}};sinon.EventTarget={addEventListener:function(n,r,i){this.eventListeners=this.eventListeners||{};this.eventListeners[n]=this.eventListeners[n]||[];e.call(this.eventListeners[n],r)},removeEventListener:function(t,n,r){var i=this.eventListeners&&this.eventListeners[t]||[];for(var s=0,o=i.length;s<o;++s){if(i[s]==n){return i.splice(s,1)}}},dispatchEvent:function(t){var n=t.type;var r=this.eventListeners&&this.eventListeners[n]||[];for(var i=0;i<r.length;i++){if(typeof r[i]=="function"){r[i].call(this,t)}else{r[i].handleEvent(t)}}return!!t.defaultPrevented}}})();if(typeof sinon=="undefined"){this.sinon={}}sinon.xhr={XMLHttpRequest:this.XMLHttpRequest};(function(e){function r(){this.readyState=r.UNSENT;this.requestHeaders={};this.requestBody=null;this.status=0;this.statusText="";if(typeof r.onCreate=="function"){r.onCreate(this)}}function i(e){if(e.readyState!==r.OPENED){throw new Error("INVALID_STATE_ERR")}if(e.sendFlag){throw new Error("INVALID_STATE_ERR")}}function s(e,t){if(!e)return;for(var n=0,r=e.length;n<r;n+=1){t(e[n])}}function o(e,t){for(var n=0;n<e.length;n++){if(t(e[n])===true)return true}return false}function f(e){if(e.readyState==r.DONE){throw new Error("Request done")}}function l(e){if(e.async&&e.readyState!=r.HEADERS_RECEIVED){throw new Error("No headers received")}}function c(e){if(typeof e!="string"){var t=new Error("Attempted to respond to fake XMLHttpRequest with "+e+", which is not a string.");t.name="InvalidBodyException";throw t}}var t=sinon.xhr;t.GlobalXMLHttpRequest=e.XMLHttpRequest;t.GlobalActiveXObject=e.ActiveXObject;t.supportsActiveX=typeof t.GlobalActiveXObject!="undefined";t.supportsXHR=typeof t.GlobalXMLHttpRequest!="undefined";t.workingXHR=t.supportsXHR?t.GlobalXMLHttpRequest:t.supportsActiveX?function(){return new t.GlobalActiveXObject("MSXML2.XMLHTTP.3.0")}:false;var n={"Accept-Charset":true,"Accept-Encoding":true,Connection:true,"Content-Length":true,Cookie:true,Cookie2:true,"Content-Transfer-Encoding":true,Date:true,Expect:true,Host:true,"Keep-Alive":true,Referer:true,TE:true,Trailer:true,"Transfer-Encoding":true,Upgrade:true,"User-Agent":true,Via:true};var u=function(e,t,n){switch(n.length){case 0:return e[t]();case 1:return e[t](n[0]);case 2:return e[t](n[0],n[1]);case 3:return e[t](n[0],n[1],n[2]);case 4:return e[t](n[0],n[1],n[2],n[3]);case 5:return e[t](n[0],n[1],n[2],n[3],n[4])}};r.filters=[];r.addFilter=function(e){this.filters.push(e)};var a=/MSIE 6/;r.defake=function(e,t){var n=new sinon.xhr.workingXHR;s(["open","setRequestHeader","send","abort","getResponseHeader","getAllResponseHeaders","addEventListener","overrideMimeType","removeEventListener"],function(t){e[t]=function(){return u(n,t,arguments)}});var i=function(t){s(t,function(t){try{e[t]=n[t]}catch(r){if(!a.test(navigator.userAgent))throw r}})};var o=function(){e.readyState=n.readyState;if(n.readyState>=r.HEADERS_RECEIVED){i(["status","statusText"])}if(n.readyState>=r.LOADING){i(["responseText"])}if(n.readyState===r.DONE){i(["responseXML"])}if(e.onreadystatechange)e.onreadystatechange.call(e)};if(n.addEventListener){for(var f in e.eventListeners){if(e.eventListeners.hasOwnProperty(f)){s(e.eventListeners[f],function(e){n.addEventListener(f,e)})}}n.addEventListener("readystatechange",o)}else{n.onreadystatechange=o}u(n,"open",t)};r.useFilters=false;sinon.extend(r.prototype,sinon.EventTarget,{async:true,open:function(t,n,i,s,u){this.method=t;this.url=n;this.async=typeof i=="boolean"?i:true;this.username=s;this.password=u;this.responseText=null;this.responseXML=null;this.requestHeaders={};this.sendFlag=false;if(sinon.FakeXMLHttpRequest.useFilters===true){var a=arguments;var f=o(r.filters,function(e){return e.apply(this,a)});if(f){return sinon.FakeXMLHttpRequest.defake(this,arguments)}}this.readyStateChange(r.OPENED)},readyStateChange:function(t){this.readyState=t;if(typeof this.onreadystatechange=="function"){try{this.onreadystatechange()}catch(n){sinon.logError("Fake XHR onreadystatechange handler",n)}}this.dispatchEvent(new sinon.Event("readystatechange"))},setRequestHeader:function(t,r){i(this);if(n[t]||/^(Sec-|Proxy-)/.test(t)){throw new Error('Refused to set unsafe header "'+t+'"')}if(this.requestHeaders[t]){this.requestHeaders[t]+=","+r}else{this.requestHeaders[t]=r}},setResponseHeaders:function(t){this.responseHeaders={};for(var n in t){if(t.hasOwnProperty(n)){this.responseHeaders[n]=t[n]}}if(this.async){this.readyStateChange(r.HEADERS_RECEIVED)}},send:function(t){i(this);if(!/^(get|head)$/i.test(this.method)){if(this.requestHeaders["Content-Type"]){var n=this.requestHeaders["Content-Type"].split(";");this.requestHeaders["Content-Type"]=n[0]+";charset=utf-8"}else{this.requestHeaders["Content-Type"]="text/plain;charset=utf-8"}this.requestBody=t}this.errorFlag=false;this.sendFlag=this.async;this.readyStateChange(r.OPENED);if(typeof this.onSend=="function"){this.onSend(this)}},abort:function(){this.aborted=true;this.responseText=null;this.errorFlag=true;this.requestHeaders={};if(this.readyState>sinon.FakeXMLHttpRequest.UNSENT&&this.sendFlag){this.readyStateChange(sinon.FakeXMLHttpRequest.DONE);this.sendFlag=false}this.readyState=sinon.FakeXMLHttpRequest.UNSENT},getResponseHeader:function(t){if(this.readyState<r.HEADERS_RECEIVED){return null}if(/^Set-Cookie2?$/i.test(t)){return null}t=t.toLowerCase();for(var n in this.responseHeaders){if(n.toLowerCase()==t){return this.responseHeaders[n]}}return null},getAllResponseHeaders:function(){if(this.readyState<r.HEADERS_RECEIVED){return""}var t="";for(var n in this.responseHeaders){if(this.responseHeaders.hasOwnProperty(n)&&!/^Set-Cookie2?$/i.test(n)){t+=n+": "+this.responseHeaders[n]+"\r\n"}}return t},setResponseBody:function(t){f(this);l(this);c(t);var n=this.chunkSize||10;var i=0;this.responseText="";do{if(this.async){this.readyStateChange(r.LOADING)}this.responseText+=t.substring(i,i+n);i+=n}while(i<t.length);var s=this.getResponseHeader("Content-Type");if(this.responseText&&(!s||/(text\/xml)|(application\/xml)|(\+xml)/.test(s))){try{this.responseXML=r.parseXML(this.responseText)}catch(o){}}if(this.async){this.readyStateChange(r.DONE)}else{this.readyState=r.DONE}},respond:function(t,n,i){this.setResponseHeaders(n||{});this.status=typeof t=="number"?t:200;this.statusText=r.statusCodes[this.status];this.setResponseBody(i||"")}});sinon.extend(r,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4});r.parseXML=function(t){var n;if(typeof DOMParser!="undefined"){var r=new DOMParser;n=r.parseFromString(t,"text/xml")}else{n=new ActiveXObject("Microsoft.XMLDOM");n.async="false";n.loadXML(t)}return n};r.statusCodes={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};sinon.useFakeXMLHttpRequest=function(){sinon.FakeXMLHttpRequest.restore=function(r){if(t.supportsXHR){e.XMLHttpRequest=t.GlobalXMLHttpRequest}if(t.supportsActiveX){e.ActiveXObject=t.GlobalActiveXObject}delete sinon.FakeXMLHttpRequest.restore;if(r!==true){delete sinon.FakeXMLHttpRequest.onCreate}};if(t.supportsXHR){e.XMLHttpRequest=sinon.FakeXMLHttpRequest}if(t.supportsActiveX){e.ActiveXObject=function(n){if(n=="Microsoft.XMLHTTP"||/^Msxml2\.XMLHTTP/i.test(n)){return new sinon.FakeXMLHttpRequest}return new t.GlobalActiveXObject(n)}}return sinon.FakeXMLHttpRequest};sinon.FakeXMLHttpRequest=r})(this);if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}if(typeof sinon=="undefined"){var sinon={}}sinon.fakeServer=function(){function t(){}function n(e){t.prototype=e;return new t}function r(e){var t=e;if(Object.prototype.toString.call(e)!="[object Array]"){t=[200,{},e]}if(typeof t[2]!="string"){throw new TypeError("Fake server response body should be string, but was "+typeof t[2])}return t}function o(e,t,n){var r=e.method;var i=!r||r.toLowerCase()==t.toLowerCase();var s=e.url;var o=!s||s==n||typeof s.test=="function"&&s.test(n);return i&&o}function u(e,t){var n=this.getHTTPMethod(t);var r=t.url;if(!/^https?:\/\//.test(r)||s.test(r)){r=r.replace(s,"")}if(o(e,this.getHTTPMethod(t),r)){if(typeof e.response=="function"){var i=e.url;var u=[t].concat(!i?[]:r.match(i).slice(1));return e.response.apply(e,u)}return true}return false}var e=[].push;var i=typeof window!=="undefined"?window.location:{};var s=new RegExp("^"+i.protocol+"//"+i.host);return{create:function(){var e=n(this);this.xhr=sinon.useFakeXMLHttpRequest();e.requests=[];this.xhr.onCreate=function(t){e.addRequest(t)};return e},addRequest:function(n){var r=this;e.call(this.requests,n);n.onSend=function(){r.handleRequest(this)};if(this.autoRespond&&!this.responding){setTimeout(function(){r.responding=false;r.respond()},this.autoRespondAfter||10);this.responding=true}},getHTTPMethod:function(t){if(this.fakeHTTPMethods&&/post/i.test(t.method)){var n=(t.requestBody||"").match(/_method=([^\b;]+)/);return!!n?n[1]:t.method}return t.method},handleRequest:function(n){if(n.async){if(!this.queue){this.queue=[]}e.call(this.queue,n)}else{this.processRequest(n)}},respondWith:function(n,i,s){if(arguments.length==1&&typeof n!="function"){this.response=r(n);return}if(!this.responses){this.responses=[]}if(arguments.length==1){s=n;i=n=null}if(arguments.length==2){s=i;i=n;n=null}e.call(this.responses,{method:n,url:i,response:typeof s=="function"?s:r(s)})},respond:function(){if(arguments.length>0)this.respondWith.apply(this,arguments);var t=this.queue||[];var n;while(n=t.shift()){this.processRequest(n)}},processRequest:function(t){try{if(t.aborted){return}var n=this.response||[404,{},""];if(this.responses){for(var r=0,i=this.responses.length;r<i;r++){if(u.call(this,this.responses[r],t)){n=this.responses[r].response;break}}}if(t.readyState!=4){t.respond(n[0],n[1],n[2])}}catch(s){sinon.logError("Fake server request processing",s)}},restore:function(){return this.xhr.restore&&this.xhr.restore.apply(this.xhr,arguments)}}}();if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}(function(){function e(){}e.prototype=sinon.fakeServer;sinon.fakeServerWithClock=new e;sinon.fakeServerWithClock.addRequest=function(t){if(t.async){if(typeof setTimeout.clock=="object"){this.clock=setTimeout.clock}else{this.clock=sinon.useFakeTimers();this.resetClock=true}if(!this.longestTimeout){var n=this.clock.setTimeout;var r=this.clock.setInterval;var i=this;this.clock.setTimeout=function(e,t){i.longestTimeout=Math.max(t,i.longestTimeout||0);return n.apply(this,arguments)};this.clock.setInterval=function(e,t){i.longestTimeout=Math.max(t,i.longestTimeout||0);return r.apply(this,arguments)}}}return sinon.fakeServer.addRequest.call(this,t)};sinon.fakeServerWithClock.respond=function(){var t=sinon.fakeServer.respond.apply(this,arguments);if(this.clock){this.clock.tick(this.longestTimeout||0);this.longestTimeout=0;if(this.resetClock){this.clock.restore();this.resetClock=false}}return t};sinon.fakeServerWithClock.restore=function(){if(this.clock){this.clock.restore()}return sinon.fakeServer.restore.apply(this,arguments)}})();if(typeof module=="object"&&typeof require=="function"){var sinon=require("../sinon");sinon.extend(sinon,require("./util/fake_timers"))}(function(){function t(t,n,r,i){if(!i){return}if(n.injectInto){n.injectInto[r]=i}else{e.call(t.args,i)}}function n(e){var t=sinon.create(sinon.sandbox);if(e.useFakeServer){if(typeof e.useFakeServer=="object"){t.serverPrototype=e.useFakeServer}t.useFakeServer()}if(e.useFakeTimers){if(typeof e.useFakeTimers=="object"){t.useFakeTimers.apply(t,e.useFakeTimers)}else{t.useFakeTimers()}}return t}var e=[].push;sinon.sandbox=sinon.extend(sinon.create(sinon.collection),{useFakeTimers:function(){this.clock=sinon.useFakeTimers.apply(sinon,arguments);return this.add(this.clock)},serverPrototype:sinon.fakeServer,useFakeServer:function(){var t=this.serverPrototype||sinon.fakeServer;if(!t||!t.create){return null}this.server=t.create();return this.add(this.server)},inject:function(e){sinon.collection.inject.call(this,e);if(this.clock){e.clock=this.clock}if(this.server){e.server=this.server;e.requests=this.server.requests}return e},create:function(e){if(!e){return sinon.create(sinon.sandbox)}var r=n(e);r.args=r.args||[];var i,s,o=r.inject({});if(e.properties){for(var u=0,a=e.properties.length;u<a;u++){i=e.properties[u];s=o[i]||i=="sandbox"&&r;t(r,e,i,s)}}else{t(r,e,"sandbox",s)}return r}});sinon.sandbox.useFakeXMLHttpRequest=sinon.sandbox.useFakeServer;if(typeof module=="object"&&typeof require=="function"){module.exports=sinon.sandbox}})();(function(e){function n(t){var n=typeof t;if(n!="function"){throw new TypeError("sinon.test needs to wrap a test function, got "+n)}return function(){var n=e.getConfig(e.config);n.injectInto=n.injectIntoThis&&this||n.injectInto;var r=e.sandbox.create(n);var i,s;var o=Array.prototype.slice.call(arguments).concat(r.args);try{s=t.apply(this,o)}catch(u){i=u}if(typeof i!=="undefined"){r.restore();throw i}else{r.verifyAndRestore()}return s}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}n.config={injectIntoThis:true,injectInto:null,properties:["spy","stub","mock","clock","server","requests"],useFakeTimers:true,useFakeServer:true};if(t){module.exports=n}else{e.test=n}})(typeof sinon=="object"&&sinon||null);(function(e){function n(e,t,n){return function(){if(t){t.apply(this,arguments)}var r,i;try{i=e.apply(this,arguments)}catch(s){r=s}if(n){n.apply(this,arguments)}if(r){throw r}return i}}function r(t,r){if(!t||typeof t!="object"){throw new TypeError("sinon.testCase needs an object with test functions")}r=r||"test";var i=new RegExp("^"+r);var s={},o,u,a;var f=t.setUp;var l=t.tearDown;for(o in t){if(t.hasOwnProperty(o)){u=t[o];if(/^(setUp|tearDown)$/.test(o)){continue}if(typeof u=="function"&&i.test(o)){a=u;if(f||l){a=n(u,f,l)}s[o]=e.test(a)}else{s[o]=t[o]}}}return s}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e||!Object.prototype.hasOwnProperty){return}if(t){module.exports=r}else{e.testCase=r}})(typeof sinon=="object"&&sinon||null);(function(e,t){function s(){var e;for(var t=0,n=arguments.length;t<n;++t){e=arguments[t];if(!e){i.fail("fake is not a spy")}if(typeof e!="function"){i.fail(e+" is not a function")}if(typeof e.getCall!="function"){i.fail(e+" is not stubbed")}}}function o(e,n){e=e||t;var r=e.fail||i.fail;r.call(e,n)}function u(e,t,n){if(arguments.length==2){n=t;t=e}i[e]=function(u){s(u);var a=r.call(arguments,1);var f=false;if(typeof t=="function"){f=!t(u)}else{f=typeof u[t]=="function"?!u[t].apply(u,a):!u[t]}if(f){o(this,u.printf.apply(u,[n].concat(a)))}else{i.pass(e)}}}function a(e,t){return!e||/^fail/.test(t)?t:e+t.slice(0,1).toUpperCase()+t.slice(1)}var n=typeof module=="object"&&typeof require=="function";var r=Array.prototype.slice;var i;if(!e&&n){e=require("../sinon")}if(!e){return}i={failException:"AssertError",fail:function(t){var n=new Error(t);n.name=this.failException||i.failException;throw n},pass:function(t){},callOrder:function(){s.apply(null,arguments);var n="",u="";if(!e.calledInOrder(arguments)){try{n=[].join.call(arguments,", ");u=e.orderByFirstCall(r.call(arguments)).join(", ")}catch(a){}o(this,"expected "+n+" to be "+"called in order but were called as "+u)}else{i.pass("callOrder")}},callCount:function(n,r){s(n);if(n.callCount!=r){var u="expected %n to be called "+e.timesInWords(r)+" but was called %c%C";o(this,n.printf(u))}else{i.pass("callCount")}},expose:function(t,n){if(!t){throw new TypeError("target is null or undefined")}var r=n||{};var i=typeof r.prefix=="undefined"&&"assert"||r.prefix;var s=typeof r.includeFail=="undefined"||!!r.includeFail;for(var o in this){if(o!="export"&&(s||!/^(fail)/.test(o))){t[a(i,o)]=this[o]}}return t}};u("called","expected %n to have been called at least once but was never called");u("notCalled",function(e){return!e.called},"expected %n to not have been called but was called %c%C");u("calledOnce","expected %n to be called once but was called %c%C");u("calledTwice","expected %n to be called twice but was called %c%C");u("calledThrice","expected %n to be called thrice but was called %c%C");u("calledOn","expected %n to be called with %1 as this but was called with %t");u("alwaysCalledOn","expected %n to always be called with %1 as this but was called with %t");u("calledWithNew","expected %n to be called with new");u("alwaysCalledWithNew","expected %n to always be called with new");u("calledWith","expected %n to be called with arguments %*%C");u("calledWithMatch","expected %n to be called with match %*%C");u("alwaysCalledWith","expected %n to always be called with arguments %*%C");u("alwaysCalledWithMatch","expected %n to always be called with match %*%C");u("calledWithExactly","expected %n to be called with exact arguments %*%C");u("alwaysCalledWithExactly","expected %n to always be called with exact arguments %*%C");u("neverCalledWith","expected %n to never be called with arguments %*%C");u("neverCalledWithMatch","expected %n to never be called with match %*%C");u("threw","%n did not throw exception%C");u("alwaysThrew","%n did not always throw exception%C");if(n){module.exports=i}else{e.assert=i}})(typeof sinon=="object"&&sinon||null,typeof window!="undefined"?window:global);return sinon}.call(typeof window!="undefined"&&window||{})
/*!chai.js*/
(function () {
    function require(e, t, n) {
        var r = require.resolve(e);
        if (null == r) {
            n = n || e;
            t = t || "root";
            var i = new Error('Failed to require "' + n + '" from "' + t + '"');
            i.path = n;
            i.parent = t;
            i.require = true;
            throw i
        }
        var s = require.modules[r];
        if (!s.exports) {
            s.exports = {};
            s.client = s.component = true;
            s.call(this, s.exports, require.relative(r), s)
        }
        return s.exports
    }

    require.modules = {};
    require.aliases = {};
    require.resolve = function (e) {
        if (e.charAt(0) === "/")e = e.slice(1);
        var t = e + "/index.js";
        var n = [e, e + ".js", e + ".json", e + "/index.js", e + "/index.json"];
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            if (require.modules.hasOwnProperty(e))return e
        }
        if (require.aliases.hasOwnProperty(t)) {
            return require.aliases[t]
        }
    };
    require.normalize = function (e, t) {
        var n = [];
        if ("." != t.charAt(0))return t;
        e = e.split("/");
        t = t.split("/");
        for (var r = 0; r < t.length; ++r) {
            if (".." == t[r]) {
                e.pop()
            } else if ("." != t[r] && "" != t[r]) {
                n.push(t[r])
            }
        }
        return e.concat(n).join("/")
    };
    require.register = function (e, t) {
        require.modules[e] = t
    };
    require.alias = function (e, t) {
        if (!require.modules.hasOwnProperty(e)) {
            throw new Error('Failed to alias "' + e + '", it does not exist')
        }
        require.aliases[t] = e
    };
    require.relative = function (e) {
        function n(e, t) {
            var n = e.length;
            while (n--) {
                if (e[n] === t)return n
            }
            return-1
        }

        function r(t) {
            var n = r.resolve(t);
            return require(n, e, t)
        }

        var t = require.normalize(e, "..");
        r.resolve = function (r) {
            var i = r.charAt(0);
            if ("/" == i)return r.slice(1);
            if ("." == i)return require.normalize(t, r);
            var s = e.split("/");
            var o = n(s, "deps") + 1;
            if (!o)o = 0;
            r = s.slice(0, o + 1).join("/") + "/deps/" + r;
            return r
        };
        r.exists = function (e) {
            return require.modules.hasOwnProperty(r.resolve(e))
        };
        return r
    };
    require.register("chai/index.js", function (e, t, n) {
        n.exports = t("./lib/chai")
    });
    require.register("chai/lib/chai.js", function (e, t, n) {
        var r = [], e = n.exports = {};
        e.version = "1.6.0";
        e.Assertion = t("./chai/assertion");
        e.AssertionError = t("./chai/error");
        var i = t("./chai/utils");
        e.use = function (e) {
            if (!~r.indexOf(e)) {
                e(this, i);
                r.push(e)
            }
            return this
        };
        var s = t("./chai/core/assertions");
        e.use(s);
        var o = t("./chai/interface/expect");
        e.use(o);
        var u = t("./chai/interface/should");
        e.use(u);
        var a = t("./chai/interface/assert");
        e.use(a)
    });
    require.register("chai/lib/chai/assertion.js", function (e, t, n) {
        function o(e, t, n) {
            s(this, "ssfi", n || arguments.callee);
            s(this, "object", e);
            s(this, "message", t)
        }

        var r = t("./error"), i = t("./utils"), s = i.flag;
        n.exports = o;
        o.includeStack = false;
        o.showDiff = true;
        o.addProperty = function (e, t) {
            i.addProperty(this.prototype, e, t)
        };
        o.addMethod = function (e, t) {
            i.addMethod(this.prototype, e, t)
        };
        o.addChainableMethod = function (e, t, n) {
            i.addChainableMethod(this.prototype, e, t, n)
        };
        o.overwriteProperty = function (e, t) {
            i.overwriteProperty(this.prototype, e, t)
        };
        o.overwriteMethod = function (e, t) {
            i.overwriteMethod(this.prototype, e, t)
        };
        o.prototype.assert = function (e, t, n, u, a, f) {
            var l = i.test(this, arguments);
            if (true !== f)f = false;
            if (true !== o.showDiff)f = false;
            if (!l) {
                var t = i.getMessage(this, arguments), c = i.getActual(this, arguments);
                throw new r({message: t, actual: c, expected: u, stackStartFunction: o.includeStack ? this.assert : s(this, "ssfi"), showDiff: f})
            }
        };
        Object.defineProperty(o.prototype, "_obj", {get: function () {
            return s(this, "object")
        }, set: function (e) {
            s(this, "object", e)
        }})
    });
    require.register("chai/lib/chai/error.js", function (e, t, n) {
        function r(e) {
            e = e || {};
            this.message = e.message;
            this.actual = e.actual;
            this.expected = e.expected;
            this.operator = e.operator;
            this.showDiff = e.showDiff;
            if (e.stackStartFunction && Error.captureStackTrace) {
                var t = e.stackStartFunction;
                Error.captureStackTrace(this, t)
            }
        }

        n.exports = r;
        r.prototype = Object.create(Error.prototype);
        r.prototype.name = "AssertionError";
        r.prototype.constructor = r;
        r.prototype.toString = function () {
            return this.message
        }
    });
    require.register("chai/lib/chai/core/assertions.js", function (e, t, n) {
        n.exports = function (e, t) {
            function s(e, n) {
                if (n)i(this, "message", n);
                e = e.toLowerCase();
                var r = i(this, "object"), s = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
                this.assert(e === t.type(r), "expected #{this} to be " + s + e, "expected #{this} not to be " + s + e)
            }

            function o() {
                i(this, "contains", true)
            }

            function u(e, n) {
                if (n)i(this, "message", n);
                var r = i(this, "object");
                this.assert(~r.indexOf(e), "expected #{this} to include " + t.inspect(e), "expected #{this} to not include " + t.inspect(e))
            }

            function a() {
                var e = i(this, "object"), t = Object.prototype.toString.call(e);
                this.assert("[object Arguments]" === t, "expected #{this} to be arguments but got " + t, "expected #{this} to not be arguments")
            }

            function f(e, t) {
                if (t)i(this, "message", t);
                var n = i(this, "object");
                if (i(this, "deep")) {
                    return this.eql(e)
                } else {
                    this.assert(e === n, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e, this._obj, true)
                }
            }

            function l(e, n) {
                if (n)i(this, "message", n);
                this.assert(t.eql(e, i(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", e, this._obj, true)
            }

            function c(e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                if (i(this, "doLength")) {
                    (new n(r, t)).to.have.property("length");
                    var s = r.length;
                    this.assert(s > e, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", e, s)
                } else {
                    this.assert(r > e, "expected #{this} to be above " + e, "expected #{this} to be at most " + e)
                }
            }

            function h(e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                if (i(this, "doLength")) {
                    (new n(r, t)).to.have.property("length");
                    var s = r.length;
                    this.assert(s >= e, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", e, s)
                } else {
                    this.assert(r >= e, "expected #{this} to be at least " + e, "expected #{this} to be below " + e)
                }
            }

            function p(e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                if (i(this, "doLength")) {
                    (new n(r, t)).to.have.property("length");
                    var s = r.length;
                    this.assert(s < e, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", e, s)
                } else {
                    this.assert(r < e, "expected #{this} to be below " + e, "expected #{this} to be at least " + e)
                }
            }

            function d(e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                if (i(this, "doLength")) {
                    (new n(r, t)).to.have.property("length");
                    var s = r.length;
                    this.assert(s <= e, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", e, s)
                } else {
                    this.assert(r <= e, "expected #{this} to be at most " + e, "expected #{this} to be above " + e)
                }
            }

            function v(e, n) {
                if (n)i(this, "message", n);
                var r = t.getName(e);
                this.assert(i(this, "object")instanceof e, "expected #{this} to be an instance of " + r, "expected #{this} to not be an instance of " + r)
            }

            function m(e, n) {
                if (n)i(this, "message", n);
                var r = i(this, "object");
                this.assert(r.hasOwnProperty(e), "expected #{this} to have own property " + t.inspect(e), "expected #{this} to not have own property " + t.inspect(e))
            }

            function g() {
                i(this, "doLength", true)
            }

            function y(e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                (new n(r, t)).to.have.property("length");
                var s = r.length;
                this.assert(s == e, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", e, s)
            }

            function b(e) {
                var n = i(this, "object"), r, s = true;
                e = e instanceof Array ? e : Array.prototype.slice.call(arguments);
                if (!e.length)throw new Error("keys required");
                var o = Object.keys(n), u = e.length;
                s = e.every(function (e) {
                    return~o.indexOf(e)
                });
                if (!i(this, "negate") && !i(this, "contains")) {
                    s = s && e.length == o.length
                }
                if (u > 1) {
                    e = e.map(function (e) {
                        return t.inspect(e)
                    });
                    var a = e.pop();
                    r = e.join(", ") + ", and " + a
                } else {
                    r = t.inspect(e[0])
                }
                r = (u > 1 ? "keys " : "key ") + r;
                r = (i(this, "contains") ? "contain " : "have ") + r;
                this.assert(s, "expected #{this} to " + r, "expected #{this} to not " + r)
            }

            function w(e, r, s) {
                if (s)i(this, "message", s);
                var o = i(this, "object");
                (new n(o, s)).is.a("function");
                var u = false, a = null, f = null, l = null;
                if (arguments.length === 0) {
                    r = null;
                    e = null
                } else if (e && (e instanceof RegExp || "string" === typeof e)) {
                    r = e;
                    e = null
                } else if (e && e instanceof Error) {
                    a = e;
                    e = null;
                    r = null
                } else if (typeof e === "function") {
                    f = (new e).name
                } else {
                    e = null
                }
                try {
                    o()
                } catch (c) {
                    if (a) {
                        this.assert(c === a, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", a, c);
                        return this
                    }
                    if (e) {
                        this.assert(c instanceof e, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", f, c);
                        if (!r)return this
                    }
                    var h = "object" === t.type(c) && "message"in c ? c.message : "" + c;
                    if (h != null && r && r instanceof RegExp) {
                        this.assert(r.exec(h), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", r, h);
                        return this
                    } else if (h != null && r && "string" === typeof r) {
                        this.assert(~h.indexOf(r), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", r, h);
                        return this
                    } else {
                        u = true;
                        l = c
                    }
                }
                var p = "", d = f !== null ? f : a ? "#{exp}" : "an error";
                if (u) {
                    p = " but #{act} was thrown"
                }
                this.assert(u === true, "expected #{this} to throw " + d + p, "expected #{this} to not throw " + d + p, a, l)
            }

            function E(e, t) {
                return e.every(function (e) {
                    return t.indexOf(e) !== -1
                })
            }

            var n = e.Assertion, r = Object.prototype.toString, i = t.flag;
            ["to", "be", "been", "is", "and", "have", "with", "that", "at", "of", "same"].forEach(function (e) {
                n.addProperty(e, function () {
                    return this
                })
            });
            n.addProperty("not", function () {
                i(this, "negate", true)
            });
            n.addProperty("deep", function () {
                i(this, "deep", true)
            });
            n.addChainableMethod("an", s);
            n.addChainableMethod("a", s);
            n.addChainableMethod("include", u, o);
            n.addChainableMethod("contain", u, o);
            n.addProperty("ok", function () {
                this.assert(i(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy")
            });
            n.addProperty("true", function () {
                this.assert(true === i(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate ? false : true)
            });
            n.addProperty("false", function () {
                this.assert(false === i(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate ? true : false)
            });
            n.addProperty("null", function () {
                this.assert(null === i(this, "object"), "expected #{this} to be null", "expected #{this} not to be null")
            });
            n.addProperty("undefined", function () {
                this.assert(undefined === i(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined")
            });
            n.addProperty("exist", function () {
                this.assert(null != i(this, "object"), "expected #{this} to exist", "expected #{this} to not exist")
            });
            n.addProperty("empty", function () {
                var e = i(this, "object"), t = e;
                if (Array.isArray(e) || "string" === typeof object) {
                    t = e.length
                } else if (typeof e === "object") {
                    t = Object.keys(e).length
                }
                this.assert(!t, "expected #{this} to be empty", "expected #{this} not to be empty")
            });
            n.addProperty("arguments", a);
            n.addProperty("Arguments", a);
            n.addMethod("equal", f);
            n.addMethod("equals", f);
            n.addMethod("eq", f);
            n.addMethod("eql", l);
            n.addMethod("eqls", l);
            n.addMethod("above", c);
            n.addMethod("gt", c);
            n.addMethod("greaterThan", c);
            n.addMethod("least", h);
            n.addMethod("gte", h);
            n.addMethod("below", p);
            n.addMethod("lt", p);
            n.addMethod("lessThan", p);
            n.addMethod("most", d);
            n.addMethod("lte", d);
            n.addMethod("within", function (e, t, r) {
                if (r)i(this, "message", r);
                var s = i(this, "object"), o = e + ".." + t;
                if (i(this, "doLength")) {
                    (new n(s, r)).to.have.property("length");
                    var u = s.length;
                    this.assert(u >= e && u <= t, "expected #{this} to have a length within " + o, "expected #{this} to not have a length within " + o)
                } else {
                    this.assert(s >= e && s <= t, "expected #{this} to be within " + o, "expected #{this} to not be within " + o)
                }
            });
            n.addMethod("instanceof", v);
            n.addMethod("instanceOf", v);
            n.addMethod("property", function (e, n, r) {
                if (r)i(this, "message", r);
                var s = i(this, "deep") ? "deep property " : "property ", o = i(this, "negate"), u = i(this, "object"), a = i(this, "deep") ? t.getPathValue(e, u) : u[e];
                if (o && undefined !== n) {
                    if (undefined === a) {
                        r = r != null ? r + ": " : "";
                        throw new Error(r + t.inspect(u) + " has no " + s + t.inspect(e))
                    }
                } else {
                    this.assert(undefined !== a, "expected #{this} to have a " + s + t.inspect(e), "expected #{this} to not have " + s + t.inspect(e))
                }
                if (undefined !== n) {
                    this.assert(n === a, "expected #{this} to have a " + s + t.inspect(e) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + s + t.inspect(e) + " of #{act}", n, a)
                }
                i(this, "object", a)
            });
            n.addMethod("ownProperty", m);
            n.addMethod("haveOwnProperty", m);
            n.addChainableMethod("length", y, g);
            n.addMethod("lengthOf", y, g);
            n.addMethod("match", function (e, t) {
                if (t)i(this, "message", t);
                var n = i(this, "object");
                this.assert(e.exec(n), "expected #{this} to match " + e, "expected #{this} not to match " + e)
            });
            n.addMethod("string", function (e, r) {
                if (r)i(this, "message", r);
                var s = i(this, "object");
                (new n(s, r)).is.a("string");
                this.assert(~s.indexOf(e), "expected #{this} to contain " + t.inspect(e), "expected #{this} to not contain " + t.inspect(e))
            });
            n.addMethod("keys", b);
            n.addMethod("key", b);
            n.addMethod("throw", w);
            n.addMethod("throws", w);
            n.addMethod("Throw", w);
            n.addMethod("respondTo", function (e, n) {
                if (n)i(this, "message", n);
                var r = i(this, "object"), s = i(this, "itself"), o = "function" === t.type(r) && !s ? r.prototype[e] : r[e];
                this.assert("function" === typeof o, "expected #{this} to respond to " + t.inspect(e), "expected #{this} to not respond to " + t.inspect(e))
            });
            n.addProperty("itself", function () {
                i(this, "itself", true)
            });
            n.addMethod("satisfy", function (e, n) {
                if (n)i(this, "message", n);
                var r = i(this, "object");
                this.assert(e(r), "expected #{this} to satisfy " + t.objDisplay(e), "expected #{this} to not satisfy" + t.objDisplay(e), this.negate ? false : true, e(r))
            });
            n.addMethod("closeTo", function (e, t, n) {
                if (n)i(this, "message", n);
                var r = i(this, "object");
                this.assert(Math.abs(r - e) <= t, "expected #{this} to be close to " + e + " +/- " + t, "expected #{this} not to be close to " + e + " +/- " + t)
            });
            n.addMethod("members", function (e, t) {
                if (t)i(this, "message", t);
                var r = i(this, "object");
                (new n(r)).to.be.an("array");
                (new n(e)).to.be.an("array");
                if (i(this, "contains")) {
                    return this.assert(E(e, r), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", r, e)
                }
                this.assert(E(r, e) && E(e, r), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", r, e)
            })
        }
    });
    require.register("chai/lib/chai/interface/assert.js", function (exports, require, module) {
        module.exports = function (chai, util) {
            var Assertion = chai.Assertion, flag = util.flag;
            var assert = chai.assert = function (e, t) {
                var n = new Assertion(null);
                n.assert(e, t, "[ negation message unavailable ]")
            };
            assert.fail = function (e, t, n, r) {
                throw new chai.AssertionError({actual: e, expected: t, message: n, operator: r, stackStartFunction: assert.fail})
            };
            assert.ok = function (e, t) {
                (new Assertion(e, t)).is.ok
            };
            assert.equal = function (e, t, n) {
                var r = new Assertion(e, n);
                r.assert(t == flag(r, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t, e)
            };
            assert.notEqual = function (e, t, n) {
                var r = new Assertion(e, n);
                r.assert(t != flag(r, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t, e)
            };
            assert.strictEqual = function (e, t, n) {
                (new Assertion(e, n)).to.equal(t)
            };
            assert.notStrictEqual = function (e, t, n) {
                (new Assertion(e, n)).to.not.equal(t)
            };
            assert.deepEqual = function (e, t, n) {
                (new Assertion(e, n)).to.eql(t)
            };
            assert.notDeepEqual = function (e, t, n) {
                (new Assertion(e, n)).to.not.eql(t)
            };
            assert.isTrue = function (e, t) {
                (new Assertion(e, t)).is["true"]
            };
            assert.isFalse = function (e, t) {
                (new Assertion(e, t)).is["false"]
            };
            assert.isNull = function (e, t) {
                (new Assertion(e, t)).to.equal(null)
            };
            assert.isNotNull = function (e, t) {
                (new Assertion(e, t)).to.not.equal(null)
            };
            assert.isUndefined = function (e, t) {
                (new Assertion(e, t)).to.equal(undefined)
            };
            assert.isDefined = function (e, t) {
                (new Assertion(e, t)).to.not.equal(undefined)
            };
            assert.isFunction = function (e, t) {
                (new Assertion(e, t)).to.be.a("function")
            };
            assert.isNotFunction = function (e, t) {
                (new Assertion(e, t)).to.not.be.a("function")
            };
            assert.isObject = function (e, t) {
                (new Assertion(e, t)).to.be.a("object")
            };
            assert.isNotObject = function (e, t) {
                (new Assertion(e, t)).to.not.be.a("object")
            };
            assert.isArray = function (e, t) {
                (new Assertion(e, t)).to.be.an("array")
            };
            assert.isNotArray = function (e, t) {
                (new Assertion(e, t)).to.not.be.an("array")
            };
            assert.isString = function (e, t) {
                (new Assertion(e, t)).to.be.a("string")
            };
            assert.isNotString = function (e, t) {
                (new Assertion(e, t)).to.not.be.a("string")
            };
            assert.isNumber = function (e, t) {
                (new Assertion(e, t)).to.be.a("number")
            };
            assert.isNotNumber = function (e, t) {
                (new Assertion(e, t)).to.not.be.a("number")
            };
            assert.isBoolean = function (e, t) {
                (new Assertion(e, t)).to.be.a("boolean")
            };
            assert.isNotBoolean = function (e, t) {
                (new Assertion(e, t)).to.not.be.a("boolean")
            };
            assert.typeOf = function (e, t, n) {
                (new Assertion(e, n)).to.be.a(t)
            };
            assert.notTypeOf = function (e, t, n) {
                (new Assertion(e, n)).to.not.be.a(t)
            };
            assert.instanceOf = function (e, t, n) {
                (new Assertion(e, n)).to.be.instanceOf(t)
            };
            assert.notInstanceOf = function (e, t, n) {
                (new Assertion(e, n)).to.not.be.instanceOf(t)
            };
            assert.include = function (e, t, n) {
                var r = new Assertion(e, n);
                if (Array.isArray(e)) {
                    r.to.include(t)
                } else if ("string" === typeof e) {
                    r.to.contain.string(t)
                } else {
                    throw new chai.AssertionError({message: "expected an array or string", stackStartFunction: assert.include})
                }
            };
            assert.notInclude = function (e, t, n) {
                var r = new Assertion(e, n);
                if (Array.isArray(e)) {
                    r.to.not.include(t)
                } else if ("string" === typeof e) {
                    r.to.not.contain.string(t)
                } else {
                    throw new chai.AssertionError({message: "expected an array or string", stackStartFunction: assert.include})
                }
            };
            assert.match = function (e, t, n) {
                (new Assertion(e, n)).to.match(t)
            };
            assert.notMatch = function (e, t, n) {
                (new Assertion(e, n)).to.not.match(t)
            };
            assert.property = function (e, t, n) {
                (new Assertion(e, n)).to.have.property(t)
            };
            assert.notProperty = function (e, t, n) {
                (new Assertion(e, n)).to.not.have.property(t)
            };
            assert.deepProperty = function (e, t, n) {
                (new Assertion(e, n)).to.have.deep.property(t)
            };
            assert.notDeepProperty = function (e, t, n) {
                (new Assertion(e, n)).to.not.have.deep.property(t)
            };
            assert.propertyVal = function (e, t, n, r) {
                (new Assertion(e, r)).to.have.property(t, n)
            };
            assert.propertyNotVal = function (e, t, n, r) {
                (new Assertion(e, r)).to.not.have.property(t, n)
            };
            assert.deepPropertyVal = function (e, t, n, r) {
                (new Assertion(e, r)).to.have.deep.property(t, n)
            };
            assert.deepPropertyNotVal = function (e, t, n, r) {
                (new Assertion(e, r)).to.not.have.deep.property(t, n)
            };
            assert.lengthOf = function (e, t, n) {
                (new Assertion(e, n)).to.have.length(t)
            };
            assert.Throw = function (e, t, n, r) {
                if ("string" === typeof t || t instanceof RegExp) {
                    n = t;
                    t = null
                }
                (new Assertion(e, r)).to.Throw(t, n)
            };
            assert.doesNotThrow = function (e, t, n) {
                if ("string" === typeof t) {
                    n = t;
                    t = null
                }
                (new Assertion(e, n)).to.not.Throw(t)
            };
            assert.operator = function (val, operator, val2, msg) {
                if (!~["==", "===", ">", ">=", "<", "<=", "!=", "!=="].indexOf(operator)) {
                    throw new Error('Invalid operator "' + operator + '"')
                }
                var test = new Assertion(eval(val + operator + val2), msg);
                test.assert(true === flag(test, "object"), "expected " + util.inspect(val) + " to be " + operator + " " + util.inspect(val2), "expected " + util.inspect(val) + " to not be " + operator + " " + util.inspect(val2))
            };
            assert.closeTo = function (e, t, n, r) {
                (new Assertion(e, r)).to.be.closeTo(t, n)
            };
            assert.sameMembers = function (e, t, n) {
                (new Assertion(e, n)).to.have.same.members(t)
            };
            assert.includeMembers = function (e, t, n) {
                (new Assertion(e, n)).to.include.members(t)
            };
            assert.ifError = function (e, t) {
                (new Assertion(e, t)).to.not.be.ok
            };
            (function alias(e, t) {
                assert[t] = assert[e];
                return alias
            })("Throw", "throw")("Throw", "throws")
        }
    });
    require.register("chai/lib/chai/interface/expect.js", function (e, t, n) {
        n.exports = function (e, t) {
            e.expect = function (t, n) {
                return new e.Assertion(t, n)
            }
        }
    });
    require.register("chai/lib/chai/interface/should.js", function (e, t, n) {
        n.exports = function (e, t) {
            function r() {
                Object.defineProperty(Object.prototype, "should", {set: function (e) {
                    Object.defineProperty(this, "should", {value: e, enumerable: true, configurable: true, writable: true})
                }, get: function () {
                    if (this instanceof String || this instanceof Number) {
                        return new n(this.constructor(this))
                    } else if (this instanceof Boolean) {
                        return new n(this == true)
                    }
                    return new n(this)
                }, configurable: true});
                var e = {};
                e.equal = function (e, t, r) {
                    (new n(e, r)).to.equal(t)
                };
                e.Throw = function (e, t, r, i) {
                    (new n(e, i)).to.Throw(t, r)
                };
                e.exist = function (e, t) {
                    (new n(e, t)).to.exist
                };
                e.not = {};
                e.not.equal = function (e, t, r) {
                    (new n(e, r)).to.not.equal(t)
                };
                e.not.Throw = function (e, t, r, i) {
                    (new n(e, i)).to.not.Throw(t, r)
                };
                e.not.exist = function (e, t) {
                    (new n(e, t)).to.not.exist
                };
                e["throw"] = e["Throw"];
                e.not["throw"] = e.not["Throw"];
                return e
            }

            var n = e.Assertion;
            e.should = r;
            e.Should = r
        }
    });
    require.register("chai/lib/chai/utils/addChainableMethod.js", function (e, t, n) {
        var r = t("./transferFlags");
        var i = "__proto__"in Object;
        var s = /^(?:length|name|arguments|caller)$/;
        var o = Function.prototype.call, u = Function.prototype.apply;
        n.exports = function (e, t, n, a) {
            if (typeof a !== "function")a = function () {
            };
            Object.defineProperty(e, t, {get: function () {
                a.call(this);
                var t = function () {
                    var e = n.apply(this, arguments);
                    return e === undefined ? this : e
                };
                if (i) {
                    var f = t.__proto__ = Object.create(this);
                    f.call = o;
                    f.apply = u
                } else {
                    var l = Object.getOwnPropertyNames(e);
                    l.forEach(function (n) {
                        if (!s.test(n)) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r)
                        }
                    })
                }
                r(this, t);
                return t
            }, configurable: true})
        }
    });
    require.register("chai/lib/chai/utils/addMethod.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            e[t] = function () {
                var e = n.apply(this, arguments);
                return e === undefined ? this : e
            }
        }
    });
    require.register("chai/lib/chai/utils/addProperty.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            Object.defineProperty(e, t, {get: function () {
                var e = n.call(this);
                return e === undefined ? this : e
            }, configurable: true})
        }
    });
    require.register("chai/lib/chai/utils/eql.js", function (e, t, n) {
        function o(e, t, n) {
            if (e === t) {
                return true
            } else if (i.isBuffer(e) && i.isBuffer(t)) {
                if (e.length != t.length)return false;
                for (var r = 0; r < e.length; r++) {
                    if (e[r] !== t[r])return false
                }
                return true
            } else if (e instanceof Date && t instanceof Date) {
                return e.getTime() === t.getTime()
            } else if (typeof e != "object" && typeof t != "object") {
                return e === t
            } else {
                return f(e, t, n)
            }
        }

        function u(e) {
            return e === null || e === undefined
        }

        function a(e) {
            return Object.prototype.toString.call(e) == "[object Arguments]"
        }

        function f(e, t, n) {
            if (u(e) || u(t))return false;
            if (e.prototype !== t.prototype)return false;
            var i;
            if (n) {
                for (i = 0; i < n.length; i++) {
                    if (n[i][0] === e && n[i][1] === t || n[i][0] === t && n[i][1] === e)return true
                }
            } else {
                n = []
            }
            if (a(e)) {
                if (!a(t)) {
                    return false
                }
                e = pSlice.call(e);
                t = pSlice.call(t);
                return o(e, t, n)
            }
            try {
                var s = r(e), f = r(t), l
            } catch (c) {
                return false
            }
            if (s.length != f.length)return false;
            s.sort();
            f.sort();
            for (i = s.length - 1; i >= 0; i--) {
                if (s[i] != f[i])return false
            }
            n.push([e, t]);
            for (i = s.length - 1; i >= 0; i--) {
                l = s[i];
                if (!o(e[l], t[l], n))return false
            }
            return true
        }

        n.exports = o;
        var r = t("./getEnumerableProperties");
        var i;
        try {
            i = t("buffer").Buffer
        } catch (s) {
            i = {isBuffer: function () {
                return false
            }}
        }
    });
    require.register("chai/lib/chai/utils/flag.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            var r = e.__flags || (e.__flags = Object.create(null));
            if (arguments.length === 3) {
                r[t] = n
            } else {
                return r[t]
            }
        }
    });
    require.register("chai/lib/chai/utils/getActual.js", function (e, t, n) {
        n.exports = function (e, t) {
            var n = t[4];
            return"undefined" !== typeof n ? n : e._obj
        }
    });
    require.register("chai/lib/chai/utils/getEnumerableProperties.js", function (e, t, n) {
        n.exports = function (t) {
            var n = [];
            for (var r in t) {
                n.push(r)
            }
            return n
        }
    });
    require.register("chai/lib/chai/utils/getMessage.js", function (e, t, n) {
        var r = t("./flag"), i = t("./getActual"), s = t("./inspect"), o = t("./objDisplay");
        n.exports = function (e, t) {
            var n = r(e, "negate"), s = r(e, "object"), u = t[3], a = i(e, t), f = n ? t[2] : t[1], l = r(e, "message");
            f = f || "";
            f = f.replace(/#{this}/g, o(s)).replace(/#{act}/g, o(a)).replace(/#{exp}/g, o(u));
            return l ? l + ": " + f : f
        }
    });
    require.register("chai/lib/chai/utils/getName.js", function (e, t, n) {
        n.exports = function (e) {
            if (e.name)return e.name;
            var t = /^\s?function ([^(]*)\(/.exec(e);
            return t && t[1] ? t[1] : ""
        }
    });
    require.register("chai/lib/chai/utils/getPathValue.js", function (e, t, n) {
        function i(e) {
            var t = e.replace(/\[/g, ".["), n = t.match(/(\\\.|[^.]+?)+/g);
            return n.map(function (e) {
                var t = /\[(\d+)\]$/, n = t.exec(e);
                if (n)return{i: parseFloat(n[1])}; else return{p: e}
            })
        }

        function s(e, t) {
            var n = t, r;
            for (var i = 0, s = e.length; i < s; i++) {
                var o = e[i];
                if (n) {
                    if ("undefined" !== typeof o.p)n = n[o.p]; else if ("undefined" !== typeof o.i)n = n[o.i];
                    if (i == s - 1)r = n
                } else {
                    r = undefined
                }
            }
            return r
        }

        var r = n.exports = function (e, t) {
            var n = i(e);
            return s(n, t)
        };
    });
    require.register("chai/lib/chai/utils/getProperties.js", function (e, t, n) {
        n.exports = function (t) {
            function r(e) {
                if (n.indexOf(e) === -1) {
                    n.push(e)
                }
            }

            var n = Object.getOwnPropertyNames(subject);
            var i = Object.getPrototypeOf(subject);
            while (i !== null) {
                Object.getOwnPropertyNames(i).forEach(r);
                i = Object.getPrototypeOf(i)
            }
            return n
        }
    });
    require.register("chai/lib/chai/utils/index.js", function (e, t, n) {
        var e = n.exports = {};
        e.test = t("./test");
        e.type = t("./type");
        e.getMessage = t("./getMessage");
        e.getActual = t("./getActual");
        e.inspect = t("./inspect");
        e.objDisplay = t("./objDisplay");
        e.flag = t("./flag");
        e.transferFlags = t("./transferFlags");
        e.eql = t("./eql");
        e.getPathValue = t("./getPathValue");
        e.getName = t("./getName");
        e.addProperty = t("./addProperty");
        e.addMethod = t("./addMethod");
        e.overwriteProperty = t("./overwriteProperty");
        e.overwriteMethod = t("./overwriteMethod");
        e.addChainableMethod = t("./addChainableMethod")
    });
    require.register("chai/lib/chai/utils/inspect.js", function (e, t, n) {
        function o(e, t, n, r) {
            var i = {showHidden: t, seen: [], stylize: function (e) {
                return e
            }};
            return f(i, e, typeof n === "undefined" ? 2 : n)
        }

        function f(t, n, o) {
            if (n && typeof n.inspect === "function" && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
                return n.inspect(o)
            }
            var f = l(t, n);
            if (f) {
                return f
            }
            if (a(n)) {
                return u(n)
            }
            var b = s(n);
            var w = t.showHidden ? i(n) : b;
            if (w.length === 0 || y(n) && (w.length === 1 && w[0] === "stack" || w.length === 2 && w[0] === "description" && w[1] === "stack")) {
                if (typeof n === "function") {
                    var E = r(n);
                    var S = E ? ": " + E : "";
                    return t.stylize("[Function" + S + "]", "special")
                }
                if (m(n)) {
                    return t.stylize(RegExp.prototype.toString.call(n), "regexp")
                }
                if (g(n)) {
                    return t.stylize(Date.prototype.toUTCString.call(n), "date")
                }
                if (y(n)) {
                    return c(n)
                }
            }
            var x = "", T = false, N = ["{", "}"];
            if (v(n)) {
                T = true;
                N = ["[", "]"]
            }
            if (typeof n === "function") {
                var E = r(n);
                var S = E ? ": " + E : "";
                x = " [Function" + S + "]"
            }
            if (m(n)) {
                x = " " + RegExp.prototype.toString.call(n)
            }
            if (g(n)) {
                x = " " + Date.prototype.toUTCString.call(n)
            }
            if (y(n)) {
                return c(n)
            }
            if (w.length === 0 && (!T || n.length == 0)) {
                return N[0] + x + N[1]
            }
            if (o < 0) {
                if (m(n)) {
                    return t.stylize(RegExp.prototype.toString.call(n), "regexp")
                } else {
                    return t.stylize("[Object]", "special")
                }
            }
            t.seen.push(n);
            var C;
            if (T) {
                C = h(t, n, o, b, w)
            } else {
                C = w.map(function (e) {
                    return p(t, n, o, b, e, T)
                })
            }
            t.seen.pop();
            return d(C, x, N)
        }

        function l(e, t) {
            switch (typeof t) {
                case"undefined":
                    return e.stylize("undefined", "undefined");
                case"string":
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string");
                case"number":
                    return e.stylize("" + t, "number");
                case"boolean":
                    return e.stylize("" + t, "boolean")
            }
            if (t === null) {
                return e.stylize("null", "null")
            }
        }

        function c(e) {
            return"[" + Error.prototype.toString.call(e) + "]"
        }

        function h(e, t, n, r, i) {
            var s = [];
            for (var o = 0, u = t.length; o < u; ++o) {
                if (Object.prototype.hasOwnProperty.call(t, String(o))) {
                    s.push(p(e, t, n, r, String(o), true))
                } else {
                    s.push("")
                }
            }
            i.forEach(function (i) {
                if (!i.match(/^\d+$/)) {
                    s.push(p(e, t, n, r, i, true))
                }
            });
            return s
        }

        function p(e, t, n, r, i, s) {
            var o, u;
            if (t.__lookupGetter__) {
                if (t.__lookupGetter__(i)) {
                    if (t.__lookupSetter__(i)) {
                        u = e.stylize("[Getter/Setter]", "special")
                    } else {
                        u = e.stylize("[Getter]", "special")
                    }
                } else {
                    if (t.__lookupSetter__(i)) {
                        u = e.stylize("[Setter]", "special")
                    }
                }
            }
            if (r.indexOf(i) < 0) {
                o = "[" + i + "]"
            }
            if (!u) {
                if (e.seen.indexOf(t[i]) < 0) {
                    if (n === null) {
                        u = f(e, t[i], null)
                    } else {
                        u = f(e, t[i], n - 1)
                    }
                    if (u.indexOf("\n") > -1) {
                        if (s) {
                            u = u.split("\n").map(function (e) {
                                return"  " + e
                            }).join("\n").substr(2)
                        } else {
                            u = "\n" + u.split("\n").map(function (e) {
                                return"   " + e
                            }).join("\n")
                        }
                    }
                } else {
                    u = e.stylize("[Circular]", "special")
                }
            }
            if (typeof o === "undefined") {
                if (s && i.match(/^\d+$/)) {
                    return u
                }
                o = JSON.stringify("" + i);
                if (o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                    o = o.substr(1, o.length - 2);
                    o = e.stylize(o, "name")
                } else {
                    o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                    o = e.stylize(o, "string")
                }
            }
            return o + ": " + u
        }

        function d(e, t, n) {
            var r = 0;
            var i = e.reduce(function (e, t) {
                r++;
                if (t.indexOf("\n") >= 0)r++;
                return e + t.length + 1
            }, 0);
            if (i > 60) {
                return n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1]
            }
            return n[0] + t + " " + e.join(", ") + " " + n[1]
        }

        function v(e) {
            return Array.isArray(e) || typeof e === "object" && b(e) === "[object Array]"
        }

        function m(e) {
            return typeof e === "object" && b(e) === "[object RegExp]"
        }

        function g(e) {
            return typeof e === "object" && b(e) === "[object Date]"
        }

        function y(e) {
            return typeof e === "object" && b(e) === "[object Error]"
        }

        function b(e) {
            return Object.prototype.toString.call(e)
        }

        var r = t("./getName");
        var i = t("./getProperties");
        var s = t("./getEnumerableProperties");
        n.exports = o;
        var u = function (e) {
            if ("outerHTML"in e)return e.outerHTML;
            var t = "http://www.w3.org/1999/xhtml";
            var n = document.createElementNS(t, "_");
            var r = (window.HTMLElement || window.Element).prototype;
            var i = new XMLSerializer;
            var s;
            if (document.xmlVersion) {
                return i.serializeToString(e)
            } else {
                n.appendChild(e.cloneNode(false));
                s = n.innerHTML.replace("><", ">" + e.innerHTML + "<");
                n.innerHTML = "";
                return s
            }
        };
        var a = function (e) {
            if (typeof HTMLElement === "object") {
                return e instanceof HTMLElement
            } else {
                return e && typeof e === "object" && e.nodeType === 1 && typeof e.nodeName === "string"
            }
        }
    });
    require.register("chai/lib/chai/utils/objDisplay.js", function (e, t, n) {
        var r = t("./inspect");
        n.exports = function (e) {
            var t = r(e), n = Object.prototype.toString.call(e);
            if (t.length >= 40) {
                if (n === "[object Function]") {
                    return!e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]"
                } else if (n === "[object Array]") {
                    return"[ Array(" + e.length + ") ]"
                } else if (n === "[object Object]") {
                    var i = Object.keys(e), s = i.length > 2 ? i.splice(0, 2).join(", ") + ", ..." : i.join(", ");
                    return"{ Object (" + s + ") }"
                } else {
                    return t
                }
            } else {
                return t
            }
        }
    });
    require.register("chai/lib/chai/utils/overwriteMethod.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            var r = e[t], i = function () {
                return this
            };
            if (r && "function" === typeof r)i = r;
            e[t] = function () {
                var e = n(i).apply(this, arguments);
                return e === undefined ? this : e
            }
        }
    });
    require.register("chai/lib/chai/utils/overwriteProperty.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            var r = Object.getOwnPropertyDescriptor(e, t), i = function () {
            };
            if (r && "function" === typeof r.get)i = r.get;
            Object.defineProperty(e, t, {get: function () {
                var e = n(i).call(this);
                return e === undefined ? this : e
            }, configurable: true})
        }
    });
    require.register("chai/lib/chai/utils/test.js", function (e, t, n) {
        var r = t("./flag");
        n.exports = function (e, t) {
            var n = r(e, "negate"), i = t[0];
            return n ? !i : i
        }
    });
    require.register("chai/lib/chai/utils/transferFlags.js", function (e, t, n) {
        n.exports = function (e, t, n) {
            var r = e.__flags || (e.__flags = Object.create(null));
            if (!t.__flags) {
                t.__flags = Object.create(null)
            }
            n = arguments.length === 3 ? n : true;
            for (var i in r) {
                if (n || i !== "object" && i !== "ssfi" && i != "message") {
                    t.__flags[i] = r[i]
                }
            }
        }
    });
    require.register("chai/lib/chai/utils/type.js", function (e, t, n) {
        var r = {"[object Arguments]": "arguments", "[object Array]": "array", "[object Date]": "date", "[object Function]": "function", "[object Number]": "number", "[object RegExp]": "regexp", "[object String]": "string"};
        n.exports = function (e) {
            var t = Object.prototype.toString.call(e);
            if (r[t])return r[t];
            if (e === null)return"null";
            if (e === undefined)return"undefined";
            if (e === Object(e))return"object";
            return typeof e
        }
    });
    require.alias("chai/index.js", "chai/index.js");
    if (typeof module != 'undefined' && typeof exports == "object") {
        module.exports = require("chai")
    } else if (typeof define == "function" && define.amd) {
        define(function () {
            return require("chai")
        })
    } else {
        this["chai"] = require("chai")
    }
})();
/*!sinonChai*/
(function(e){"use strict";if(typeof require==="function"&&typeof exports==="object"&&typeof module==="object"){module.exports=e}else if(typeof define==="function"&&define.amd){define(function(){return e})}else{chai.use(e)}})(function(t,n){"use strict";function i(e){return typeof e==="function"&&typeof e.getCall==="function"&&typeof e.calledWithExactly==="function"}function s(e){return e&&i(e.proxy)}function o(e){if(!i(e._obj)&&!s(e._obj)){throw new TypeError(n.inspect(e._obj)+" is not a spy or a call to a spy!")}}function u(e,t,n,r,s){function u(t){return e.printf.apply(e,t)}var o=r?"always have ":"have ";n=n||"";if(i(e.proxy)){e=e.proxy}return{affirmative:u(["expected %n to "+o+t+n].concat(s)),negative:u(["expected %n to not "+o+t].concat(s))}}function a(e,r,i){n.addProperty(t.Assertion.prototype,e,function(){o(this);var t=u(this._obj,r,i,false);this.assert(this._obj[e],t.affirmative,t.negative)})}function f(e,t,i){return function(){o(this);var s="always"+e[0].toUpperCase()+e.substring(1);var a=n.flag(this,"always")&&typeof this._obj[s]==="function";var f=a?s:e;var l=u(this._obj,t,i,a,r.call(arguments));this.assert(this._obj[f].apply(this._obj,arguments),l.affirmative,l.negative)}}function l(e,r,i){var s=f(e,r,i);n.addProperty(t.Assertion.prototype,e,s)}function c(e,r,i,s){var o=f(r,i,s);n.addMethod(t.Assertion.prototype,e,o)}function h(e,t,n){c(e,e,t,n)}var r=Array.prototype.slice;n.addProperty(t.Assertion.prototype,"always",function(){n.flag(this,"always",true)});a("called","been called"," at least once, but it was never called");a("calledOnce","been called exactly once",", but it was called %c%C");a("calledTwice","been called exactly twice",", but it was called %c%C");a("calledThrice","been called exactly thrice",", but it was called %c%C");l("calledWithNew","been called with new");h("calledBefore","been called before %1");h("calledAfter","been called after %1");h("calledOn","been called with %1 as this",", but it was called with %t instead");h("calledWith","been called with arguments %*","%C");h("calledWithExactly","been called with exact arguments %*","%C");h("calledWithMatch","been called with arguments matching %*","%C");h("returned","returned %1");c("thrown","threw","thrown %1")});
/**
 * CoffeeScript Compiler v1.3.3
 * http://coffeescript.org
 *
 * Copyright 2011, Jeremy Ashkenas
 * Released under the MIT License
 */
(function(root){var CoffeeScript=function(){function require(a){return require[a]}require["./helpers"]=new function(){var a=this;(function(){var b,c;a.starts=function(a,b,c){return b===a.substr(c,b.length)},a.ends=function(a,b,c){var d;d=b.length;return b===a.substr(a.length-d-(c||0),d)},a.compact=function(a){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b&&e.push(b);return e},a.count=function(a,b){var c,d;c=d=0;if(!b.length)return 1/0;while(d=1+a.indexOf(b,d))c++;return c},a.merge=function(a,c){return b(b({},a),c)},b=a.extend=function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},a.flatten=c=function(a){var b,d,e,f;d=[];for(e=0,f=a.length;e<f;e++)b=a[e],b instanceof Array?d=d.concat(c(b)):d.push(b);return d},a.del=function(a,b){var c;c=a[b],delete a[b];return c},a.last=function(a,b){return a[a.length-(b||0)-1]}}).call(this)},require["./rewriter"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},u=[].slice;a.Rewriter=function(){function a(){}a.prototype.rewrite=function(a){this.tokens=a,this.removeLeadingNewlines(),this.removeMidExpressionNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.addImplicitIndentation(),this.tagPostfixConditionals(),this.addImplicitBraces(),this.addImplicitParentheses();return this.tokens},a.prototype.scanTokens=function(a){var b,c,d;d=this.tokens,b=0;while(c=d[b])b+=a.call(this,c,b,d);return!0},a.prototype.detectEnd=function(a,b,c){var f,g,h,i,j;h=this.tokens,f=0;while(g=h[a]){if(f===0&&b.call(this,g,a))return c.call(this,g,a);if(!g||f<0)return c.call(this,g,a-1);if(i=g[0],t.call(e,i)>=0)f+=1;else if(j=g[0],t.call(d,j)>=0)f-=1;a+=1}return a-1},a.prototype.removeLeadingNewlines=function(){var a,b,c,d,e;e=this.tokens;for(a=c=0,d=e.length;c<d;a=++c){b=e[a][0];if(b!=="TERMINATOR")break}if(a)return this.tokens.splice(0,a)},a.prototype.removeMidExpressionNewlines=function(){return this.scanTokens(function(a,b,d){var e;if(!(a[0]==="TERMINATOR"&&(e=this.tag(b+1),t.call(c,e)>=0)))return 1;d.splice(b,1);return 0})},a.prototype.closeOpenCalls=function(){var a,b;b=function(a,b){var c;return(c=a[0])===")"||c==="CALL_END"||a[0]==="OUTDENT"&&this.tag(b-1)===")"},a=function(a,b){return this.tokens[a[0]==="OUTDENT"?b-1:b][0]="CALL_END"};return this.scanTokens(function(c,d){c[0]==="CALL_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.closeOpenIndexes=function(){var a,b;b=function(a,b){var c;return(c=a[0])==="]"||c==="INDEX_END"},a=function(a,b){return a[0]="INDEX_END"};return this.scanTokens(function(c,d){c[0]==="INDEX_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.addImplicitBraces=function(){var a,b,c,f,g,i,j,k;f=[],g=null,k=null,c=!0,i=0,j=0,b=function(a,b){var d,e,f,g,i,m;i=this.tokens.slice(b+1,b+3+1||9e9),d=i[0],g=i[1],f=i[2];if("HERECOMMENT"===(d!=null?d[0]:void 0))return!1;e=a[0],t.call(l,e)>=0&&(c=!1);return(e==="TERMINATOR"||e==="OUTDENT"||t.call(h,e)>=0&&c&&b-j!==1)&&(!k&&this.tag(b-1)!==","||(g!=null?g[0]:void 0)!==":"&&((d!=null?d[0]:void 0)!=="@"||(f!=null?f[0]:void 0)!==":"))||e===","&&d&&(m=d[0])!=="IDENTIFIER"&&m!=="NUMBER"&&m!=="STRING"&&m!=="@"&&m!=="TERMINATOR"&&m!=="OUTDENT"},a=function(a,b){var c;c=this.generate("}","}",a[2]);return this.tokens.splice(b,0,c)};return this.scanTokens(function(h,i,m){var n,o,p,q,r,s,u,v;if(u=q=h[0],t.call(e,u)>=0){f.push([q==="INDENT"&&this.tag(i-1)==="{"?"{":q,i]);return 1}if(t.call(d,q)>=0){g=f.pop();return 1}if(q!==":"||(n=this.tag(i-2))!==":"&&((v=f[f.length-1])!=null?v[0]:void 0)==="{")return 1;c=!0,j=i+1,f.push(["{"]),o=n==="@"?i-2:i-1;while(this.tag(o-2)==="HERECOMMENT")o-=2;p=this.tag(o-1),k=!p||t.call(l,p)>=0,s=new String("{"),s.generated=!0,r=this.generate("{",s,h[2]),m.splice(o,0,r),this.detectEnd(i+2,b,a);return 2})},a.prototype.addImplicitParentheses=function(){var a,b,c,d,e;c=e=d=!1,b=function(a,b){var c,g,i,j;g=a[0];if(!e&&a.fromThen)return!0;if(g==="IF"||g==="ELSE"||g==="CATCH"||g==="->"||g==="=>"||g==="CLASS")e=!0;if(g==="IF"||g==="ELSE"||g==="SWITCH"||g==="TRY"||g==="=")d=!0;if((g==="."||g==="?."||g==="::")&&this.tag(b-1)==="OUTDENT")return!0;return!a.generated&&this.tag(b-1)!==","&&(t.call(h,g)>=0||g==="INDENT"&&!d)&&(g!=="INDENT"||(i=this.tag(b-2))!=="CLASS"&&i!=="EXTENDS"&&(j=this.tag(b-1),t.call(f,j)<0)&&(!(c=this.tokens[b+1])||!c.generated||c[0]!=="{"))},a=function(a,b){return this.tokens.splice(b,0,this.generate("CALL_END",")",a[2]))};return this.scanTokens(function(f,h,k){var m,n,o,p,q,r,s,u;q=f[0];if(q==="CLASS"||q==="IF"||q==="FOR"||q==="WHILE")c=!0;r=k.slice(h-1,h+1+1||9e9),p=r[0],n=r[1],o=r[2],m=!c&&q==="INDENT"&&o&&o.generated&&o[0]==="{"&&p&&(s=p[0],t.call(i,s)>=0),e=!1,d=!1,t.call(l,q)>=0&&(c=!1),p&&!p.spaced&&q==="?"&&(f.call=!0);if(f.fromThen)return 1;if(!(m||(p!=null?p.spaced:void 0)&&(p.call||(u=p[0],t.call(i,u)>=0))&&(t.call(g,q)>=0||!f.spaced&&!f.newLine&&t.call(j,q)>=0)))return 1;k.splice(h,0,this.generate("CALL_START","(",f[2])),this.detectEnd(h+1,b,a),p[0]==="?"&&(p[0]="FUNC_EXIST");return 2})},a.prototype.addImplicitIndentation=function(){var a,b,c,d,e;e=c=d=null,b=function(a,b){var c;return a[1]!==";"&&(c=a[0],t.call(m,c)>=0)&&(a[0]!=="ELSE"||e==="IF"||e==="THEN")},a=function(a,b){return this.tokens.splice(this.tag(b-1)===","?b-1:b,0,d)};return this.scanTokens(function(f,g,h){var i,j,k;i=f[0];if(i==="TERMINATOR"&&this.tag(g+1)==="THEN"){h.splice(g,1);return 0}if(i==="ELSE"&&this.tag(g-1)!=="OUTDENT"){h.splice.apply(h,[g,0].concat(u.call(this.indentation(f))));return 2}if(i==="CATCH"&&((j=this.tag(g+2))==="OUTDENT"||j==="TERMINATOR"||j==="FINALLY")){h.splice.apply(h,[g+2,0].concat(u.call(this.indentation(f))));return 4}if(t.call(n,i)>=0&&this.tag(g+1)!=="INDENT"&&(i!=="ELSE"||this.tag(g+1)!=="IF")){e=i,k=this.indentation(f,!0),c=k[0],d=k[1],e==="THEN"&&(c.fromThen=!0),h.splice(g+1,0,c),this.detectEnd(g+2,b,a),i==="THEN"&&h.splice(g,1);return 1}return 1})},a.prototype.tagPostfixConditionals=function(){var a,b,c;c=null,b=function(a,b){var c;return(c=a[0])==="TERMINATOR"||c==="INDENT"},a=function(a,b){if(a[0]!=="INDENT"||a.generated&&!a.fromThen)return c[0]="POST_"+c[0]};return this.scanTokens(function(d,e){if(d[0]!=="IF")return 1;c=d,this.detectEnd(e+1,b,a);return 1})},a.prototype.indentation=function(a,b){var c,d;b==null&&(b=!1),c=["INDENT",2,a[2]],d=["OUTDENT",2,a[2]],b&&(c.generated=d.generated=!0);return[c,d]},a.prototype.generate=function(a,b,c){var d;d=[a,b,c],d.generated=!0;return d},a.prototype.tag=function(a){var b;return(b=this.tokens[a])!=null?b[0]:void 0};return a}(),b=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"]],a.INVERSES=k={},e=[],d=[];for(q=0,r=b.length;q<r;q++)s=b[q],o=s[0],p=s[1],e.push(k[p]=o),d.push(k[o]=p);c=["CATCH","WHEN","ELSE","FINALLY"].concat(d),i=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],g=["IDENTIFIER","NUMBER","STRING","JS","REGEX","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","NULL","UNDEFINED","UNARY","SUPER","@","->","=>","[","(","{","--","++"],j=["+","-"],f=["->","=>","{","[",","],h=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR"],n=["ELSE","->","=>","TRY","FINALLY","THEN"],m=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],l=["TERMINATOR","INDENT","OUTDENT"]}).call(this)},require["./lexer"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};V=require("./rewriter"),J=V.Rewriter,r=V.INVERSES,W=require("./helpers"),R=W.count,U=W.starts,Q=W.compact,T=W.last,a.Lexer=y=function(){function a(){}a.prototype.tokenize=function(a,b){var c,d;b==null&&(b={}),P.test(a)&&(a="\n"+a),a=a.replace(/\r/g,"").replace(N,""),this.code=a,this.line=b.line||0,this.indent=0,this.indebt=0,this.outdebt=0,this.indents=[],this.ends=[],this.tokens=[],c=0;while(this.chunk=a.slice(c))c+=this.identifierToken()||this.commentToken()||this.whitespaceToken()||this.lineToken()||this.heredocToken()||this.stringToken()||this.numberToken()||this.regexToken()||this.jsToken()||this.literalToken();this.closeIndentation(),(d=this.ends.pop())&&this.error("missing "+d);if(b.rewrite===!1)return this.tokens;return(new J).rewrite(this.tokens)},a.prototype.identifierToken=function(){var a,b,c,d,h,i,j,k,l;if(!(h=p.exec(this.chunk)))return 0;d=h[0],c=h[1],a=h[2];if(c==="own"&&this.tag()==="FOR"){this.token("OWN",c);return c.length}b=a||(i=T(this.tokens))&&((k=i[0])==="."||k==="?."||k==="::"||!i.spaced&&i[0]==="@"),j="IDENTIFIER",!b&&(X.call(u,c)>=0||X.call(g,c)>=0)&&(j=c.toUpperCase(),j==="WHEN"&&(l=this.tag(),X.call(v,l)>=0)?j="LEADING_WHEN":j==="FOR"?this.seenFor=!0:j==="UNLESS"?j="IF":X.call(O,j)>=0?j="UNARY":X.call(H,j)>=0&&(j!=="INSTANCEOF"&&this.seenFor?(j="FOR"+j,this.seenFor=!1):(j="RELATION",this.value()==="!"&&(this.tokens.pop(),c="!"+c)))),X.call(t,c)>=0&&(b?(j="IDENTIFIER",c=new String(c),c.reserved=!0):X.call(I,c)>=0&&this.error('reserved word "'+c+'"')),b||(X.call(e,c)>=0&&(c=f[c]),j=function(){switch(c){case"!":return"UNARY";case"==":case"!=":return"COMPARE";case"&&":case"||":return"LOGIC";case"true":case"false":return"BOOL";case"break":case"continue":return"STATEMENT";default:return j}}()),this.token(j,c),a&&this.token(":",":");return d.length},a.prototype.numberToken=function(){var a,b,c,d,e;if(!(c=E.exec(this.chunk)))return 0;d=c[0],/^0[BOX]/.test(d)?this.error("radix prefix '"+d+"' must be lowercase"):/E/.test(d)&&!/^0x/.test(d)?this.error("exponential notation '"+d+"' must be indicated with a lowercase 'e'"):/^0\d*[89]/.test(d)?this.error("decimal literal '"+d+"' must not be prefixed with '0'"):/^0\d+/.test(d)&&this.error("octal literal '"+d+"' must be prefixed with '0o'"),b=d.length;if(e=/^0o([0-7]+)/.exec(d))d="0x"+parseInt(e[1],8).toString(16);if(a=/^0b([01]+)/.exec(d))d="0x"+parseInt(a[1],2).toString(16);this.token("NUMBER",d);return b},a.prototype.stringToken=function(){var a,b,c;switch(this.chunk.charAt(0)){case"'":if(!(a=L.exec(this.chunk)))return 0;this.token("STRING",(c=a[0]).replace(A,"\\\n"));break;case'"':if(!(c=this.balancedString(this.chunk,'"')))return 0;0<c.indexOf("#{",1)?this.interpolateString(c.slice(1,-1)):this.token("STRING",this.escapeLines(c));break;default:return 0}(b=/^(?:\\.|[^\\])*\\(?:0[0-7]|[1-7])/.test(c))&&this.error("octal escape sequences "+c+" are not allowed"),this.line+=R(c,"\n");return c.length},a.prototype.heredocToken=function(){var a,b,c,d;if(!(c=k.exec(this.chunk)))return 0;b=c[0],d=b.charAt(0),a=this.sanitizeHeredoc(c[2],{quote:d,indent:null}),d==='"'&&0<=a.indexOf("#{")?this.interpolateString(a,{heredoc:!0}):this.token("STRING",this.makeString(a,d,!0)),this.line+=R(b,"\n");return b.length},a.prototype.commentToken=function(){var a,b,c;if(!(c=this.chunk.match(h)))return 0;a=c[0],b=c[1],b&&this.token("HERECOMMENT",this.sanitizeHeredoc(b,{herecomment:!0,indent:Array(this.indent+1).join(" ")})),this.line+=R(a,"\n");return a.length},a.prototype.jsToken=function(){var a,b;if(this.chunk.charAt(0)!=="`"||!(a=s.exec(this.chunk)))return 0;this.token("JS",(b=a[0]).slice(1,-1));return b.length},a.prototype.regexToken=function(){var a,b,c,d,e,f,g;if(this.chunk.charAt(0)!=="/")return 0;if(c=n.exec(this.chunk)){b=this.heregexToken(c),this.line+=R(c[0],"\n");return b}d=T(this.tokens);if(d&&(f=d[0],X.call(d.spaced?C:D,f)>=0))return 0;if(!(c=G.exec(this.chunk)))return 0;g=c,c=g[0],e=g[1],a=g[2],e.slice(0,2)==="/*"&&this.error("regular expressions cannot begin with `*`"),e==="//"&&(e="/(?:)/"),this.token("REGEX",""+e+a);return c.length},a.prototype.heregexToken=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;d=a[0],b=a[1],c=a[2];if(0>b.indexOf("#{")){e=b.replace(o,"").replace(/\//g,"\\/"),e.match(/^\*/)&&this.error("regular expressions cannot begin with `*`"),this.token("REGEX","/"+(e||"(?:)")+"/"+c);return d.length}this.token("IDENTIFIER","RegExp"),this.tokens.push(["CALL_START","("]),g=[],k=this.interpolateString(b,{regex:!0});for(i=0,j=k.length;i<j;i++){l=k[i],f=l[0],h=l[1];if(f==="TOKENS")g.push.apply(g,h);else{if(!(h=h.replace(o,"")))continue;h=h.replace(/\\/g,"\\\\"),g.push(["STRING",this.makeString(h,'"',!0)])}g.push(["+","+"])}g.pop(),((m=g[0])!=null?m[0]:void 0)!=="STRING"&&this.tokens.push(["STRING",'""'],["+","+"]),(n=this.tokens).push.apply(n,g),c&&this.tokens.push([",",","],["STRING",'"'+c+'"']),this.token(")",")");return d.length},a.prototype.lineToken=function(){var a,b,c,d,e,f;if(!(c=B.exec(this.chunk)))return 0;b=c[0],this.line+=R(b,"\n"),this.seenFor=!1,e=T(this.tokens,1),f=b.length-1-b.lastIndexOf("\n"),d=this.unfinished();if(f-this.indebt===this.indent){d?this.suppressNewlines():this.newlineToken();return b.length}if(f>this.indent){if(d){this.indebt=f-this.indent,this.suppressNewlines();return b.length}a=f-this.indent+this.outdebt,this.token("INDENT",a),this.indents.push(a),this.ends.push("OUTDENT"),this.outdebt=this.indebt=0}else this.indebt=0,this.outdentToken(this.indent-f,d);this.indent=f;return b.length},a.prototype.outdentToken=function(a,b){var c,d;while(a>0)d=this.indents.length-1,this.indents[d]===void 0?a=0:this.indents[d]===this.outdebt?(a-=this.outdebt,this.outdebt=0):this.indents[d]<this.outdebt?(this.outdebt-=this.indents[d],a-=this.indents[d]):(c=this.indents.pop()-this.outdebt,a-=c,this.outdebt=0,this.pair("OUTDENT"),this.token("OUTDENT",c));c&&(this.outdebt-=a);while(this.value()===";")this.tokens.pop();this.tag()!=="TERMINATOR"&&!b&&this.token("TERMINATOR","\n");return this},a.prototype.whitespaceToken=function(){var a,b,c;if(!(a=P.exec(this.chunk))&&!(b=this.chunk.charAt(0)==="\n"))return 0;c=T(this.tokens),c&&(c[a?"spaced":"newLine"]=!0);return a?a[0].length:0},a.prototype.newlineToken=function(){while(this.value()===";")this.tokens.pop();this.tag()!=="TERMINATOR"&&this.token("TERMINATOR","\n");return this},a.prototype.suppressNewlines=function(){this.value()==="\\"&&this.tokens.pop();return this},a.prototype.literalToken=function(){var a,b,e,f,g,h,k,l;(a=F.exec(this.chunk))?(f=a[0],d.test(f)&&this.tagParameters()):f=this.chunk.charAt(0),e=f,b=T(this.tokens);if(f==="="&&b){!b[1].reserved&&(g=b[1],X.call(t,g)>=0)&&this.error('reserved word "'+this.value()+"\" can't be assigned");if((h=b[1])==="||"||h==="&&"){b[0]="COMPOUND_ASSIGN",b[1]+="=";return f.length}}if(f===";")this.seenFor=!1,e="TERMINATOR";else if(X.call(z,f)>=0)e="MATH";else if(X.call(i,f)>=0)e="COMPARE";else if(X.call(j,f)>=0)e="COMPOUND_ASSIGN";else if(X.call(O,f)>=0)e="UNARY";else if(X.call(K,f)>=0)e="SHIFT";else if(X.call(x,f)>=0||f==="?"&&(b!=null?b.spaced:void 0))e="LOGIC";else if(b&&!b.spaced)if(f==="("&&(k=b[0],X.call(c,k)>=0))b[0]==="?"&&(b[0]="FUNC_EXIST"),e="CALL_START";else if(f==="["&&(l=b[0],X.call(q,l)>=0)){e="INDEX_START";switch(b[0]){case"?":b[0]="INDEX_SOAK"}}switch(f){case"(":case"{":case"[":this.ends.push(r[f]);break;case")":case"}":case"]":this.pair(f)}this.token(e,f);return f.length},a.prototype.sanitizeHeredoc=function(a,b){var c,d,e,f,g;e=b.indent,d=b.herecomment;if(d){l.test(a)&&this.error('block comment cannot contain "*/", starting');if(a.indexOf("\n")<=0)return a}else while(f=m.exec(a)){c=f[1];if(e===null||0<(g=c.length)&&g<e.length)e=c}e&&(a=a.replace(RegExp("\\n"+e,"g"),"\n")),d||(a=a.replace(/^\n/,""));return a},a.prototype.tagParameters=function(){var a,b,c,d;if(this.tag()!==")")return this;b=[],d=this.tokens,a=d.length,d[--a][0]="PARAM_END";while(c=d[--a])switch(c[0]){case")":b.push(c);break;case"(":case"CALL_START":if(b.length)b.pop();else{if(c[0]==="("){c[0]="PARAM_START";return this}return this}}return this},a.prototype.closeIndentation=function(){return this.outdentToken(this.indent)},a.prototype.balancedString=function(a,b){var c,d,e,f,g,h,i,j;c=0,h=[b];for(d=i=1,j=a.length;1<=j?i<j:i>j;d=1<=j?++i:--i){if(c){--c;continue}switch(e=a.charAt(d)){case"\\":++c;continue;case b:h.pop();if(!h.length)return a.slice(0,d+1||9e9);b=h[h.length-1];continue}b!=="}"||e!=='"'&&e!=="'"?b==="}"&&e==="/"&&(f=n.exec(a.slice(d))||G.exec(a.slice(d)))?c+=f[0].length-1:b==="}"&&e==="{"?h.push(b="}"):b==='"'&&g==="#"&&e==="{"&&h.push(b="}"):h.push(b=e),g=e}return this.error("missing "+h.pop()+", starting")},a.prototype.interpolateString=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c==null&&(c={}),e=c.heredoc,m=c.regex,o=[],l=0,f=-1;while(j=b.charAt(f+=1)){if(j==="\\"){f+=1;continue}if(j!=="#"||b.charAt(f+1)!=="{"||!(d=this.balancedString(b.slice(f+1),"}")))continue;l<f&&o.push(["NEOSTRING",b.slice(l,f)]),g=d.slice(1,-1);if(g.length){k=(new a).tokenize(g,{line:this.line,rewrite:!1}),k.pop(),((s=k[0])!=null?s[0]:void 0)==="TERMINATOR"&&k.shift();if(i=k.length)i>1&&(k.unshift(["(","(",this.line]),k.push([")",")",this.line])),o.push(["TOKENS",k])}f+=d.length,l=f+1}f>l&&l<b.length&&o.push(["NEOSTRING",b.slice(l)]);if(m)return o;if(!o.length)return this.token("STRING",'""');o[0][0]!=="NEOSTRING"&&o.unshift(["",""]),(h=o.length>1)&&this.token("(","(");for(f=q=0,r=o.length;q<r;f=++q)t=o[f],n=t[0],p=t[1],f&&this.token("+","+"),n==="TOKENS"?(u=this.tokens).push.apply(u,p):this.token("STRING",this.makeString(p,'"',e));h&&this.token(")",")");return o},a.prototype.pair=function(a){var b,c;if(a!==(c=T(this.ends))){"OUTDENT"!==c&&this.error("unmatched "+a),this.indent-=b=T(this.indents),this.outdentToken(b,!0);return this.pair(a)}return this.ends.pop()},a.prototype.token=function(a,b){return this.tokens.push([a,b,this.line])},a.prototype.tag=function(a,b){var c;return(c=T(this.tokens,a))&&(b?c[0]=b:c[0])},a.prototype.value=function(a,b){var c;return(c=T(this.tokens,a))&&(b?c[1]=b:c[1])},a.prototype.unfinished=function(){var a;return w.test(this.chunk)||(a=this.tag())==="\\"||a==="."||a==="?."||a==="UNARY"||a==="MATH"||a==="+"||a==="-"||a==="SHIFT"||a==="RELATION"||a==="COMPARE"||a==="LOGIC"||a==="THROW"||a==="EXTENDS"},a.prototype.escapeLines=function(a,b){return a.replace(A,b?"\\n":"")},a.prototype.makeString=function(a,b,c){if(!a)return b+b;a=a.replace(/\\([\s\S])/g,function(a,c){return c==="\n"||c===b?c:a}),a=a.replace(RegExp(""+b,"g"),"\\$&");return b+this.escapeLines(a,c)+b},a.prototype.error=function(a){throw SyntaxError(""+a+" on line "+(this.line+1))};return a}(),u=["true","false","null","this","new","delete","typeof","in","instanceof","return","throw","break","continue","debugger","if","else","switch","for","while","do","try","catch","finally","class","extends","super"],g=["undefined","then","unless","until","loop","of","by","when"],f={and:"&&",or:"||",is:"==",isnt:"!=",not:"!",yes:"true",no:"false",on:"true",off:"false"},e=function(){var a;a=[];for(S in f)a.push(S);return a}(),g=g.concat(e),I=["case","default","function","var","void","with","const","let","enum","export","import","native","__hasProp","__extends","__slice","__bind","__indexOf","implements","interface","let","package","private","protected","public","static","yield"],M=["arguments","eval"],t=u.concat(I).concat(M),a.RESERVED=I.concat(u).concat(g).concat(M),a.STRICT_PROSCRIBED=M,p=/^([$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)([^\n\S]*:(?!:))?/,E=/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i,k=/^("""|''')([\s\S]*?)(?:\n[^\n\S]*)?\1/,F=/^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/,P=/^[^\n\S]+/,h=/^###([^#][\s\S]*?)(?:###[^\n\S]*|(?:###)?$)|^(?:\s*#(?!##[^#]).*)+/,d=/^[-=]>/,B=/^(?:\n[^\n\S]*)+/,L=/^'[^\\']*(?:\\.[^\\']*)*'/,s=/^`[^\\`]*(?:\\.[^\\`]*)*`/,G=/^(\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)([imgy]{0,4})(?!\w)/,n=/^\/{3}([\s\S]+?)\/{3}([imgy]{0,4})(?!\w)/,o=/\s+(?:#.*)?/g,A=/\n/g,m=/\n+([^\n\S]*)/g,l=/\*\//,w=/^\s*(?:,|\??\.(?![.\d])|::)/,N=/\s+$/,j=["-=","+=","/=","*=","%=","||=","&&=","?=","<<=",">>=",">>>=","&=","^=","|="],O=["!","~","NEW","TYPEOF","DELETE","DO"],x=["&&","||","&","|","^"],K=["<<",">>",">>>"],i=["==","!=","<",">","<=",">="],z=["*","/","%"],H=["IN","OF","INSTANCEOF"],b=["TRUE","FALSE"],C=["NUMBER","REGEX","BOOL","NULL","UNDEFINED","++","--","]"],D=C.concat(")","}","THIS","IDENTIFIER","STRING"),c=["IDENTIFIER","STRING","REGEX",")","]","}","?","::","@","THIS","SUPER"],q=c.concat("NUMBER","BOOL","NULL","UNDEFINED"),v=["INDENT","OUTDENT","TERMINATOR"]}).call(this)},require["./parser"]=new function(){var a=this,b=function(){var a={trace:function(){},yy:{},symbols_:{error:2,Root:3,Body:4,Block:5,TERMINATOR:6,Line:7,Expression:8,Statement:9,Return:10,Comment:11,STATEMENT:12,Value:13,Invocation:14,Code:15,Operation:16,Assign:17,If:18,Try:19,While:20,For:21,Switch:22,Class:23,Throw:24,INDENT:25,OUTDENT:26,Identifier:27,IDENTIFIER:28,AlphaNumeric:29,NUMBER:30,STRING:31,Literal:32,JS:33,REGEX:34,DEBUGGER:35,UNDEFINED:36,NULL:37,BOOL:38,Assignable:39,"=":40,AssignObj:41,ObjAssignable:42,":":43,ThisProperty:44,RETURN:45,HERECOMMENT:46,PARAM_START:47,ParamList:48,PARAM_END:49,FuncGlyph:50,"->":51,"=>":52,OptComma:53,",":54,Param:55,ParamVar:56,"...":57,Array:58,Object:59,Splat:60,SimpleAssignable:61,Accessor:62,Parenthetical:63,Range:64,This:65,".":66,"?.":67,"::":68,Index:69,INDEX_START:70,IndexValue:71,INDEX_END:72,INDEX_SOAK:73,Slice:74,"{":75,AssignList:76,"}":77,CLASS:78,EXTENDS:79,OptFuncExist:80,Arguments:81,SUPER:82,FUNC_EXIST:83,CALL_START:84,CALL_END:85,ArgList:86,THIS:87,"@":88,"[":89,"]":90,RangeDots:91,"..":92,Arg:93,SimpleArgs:94,TRY:95,Catch:96,FINALLY:97,CATCH:98,THROW:99,"(":100,")":101,WhileSource:102,WHILE:103,WHEN:104,UNTIL:105,Loop:106,LOOP:107,ForBody:108,FOR:109,ForStart:110,ForSource:111,ForVariables:112,OWN:113,ForValue:114,FORIN:115,FOROF:116,BY:117,SWITCH:118,Whens:119,ELSE:120,When:121,LEADING_WHEN:122,IfBlock:123,IF:124,POST_IF:125,UNARY:126,"-":127,"+":128,"--":129,"++":130,"?":131,MATH:132,SHIFT:133,COMPARE:134,LOGIC:135,RELATION:136,COMPOUND_ASSIGN:137,$accept:0,$end:1},terminals_:{2:"error",6:"TERMINATOR",12:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",31:"STRING",33:"JS",34:"REGEX",35:"DEBUGGER",36:"UNDEFINED",37:"NULL",38:"BOOL",40:"=",43:":",45:"RETURN",46:"HERECOMMENT",47:"PARAM_START",49:"PARAM_END",51:"->",52:"=>",54:",",57:"...",66:".",67:"?.",68:"::",70:"INDEX_START",72:"INDEX_END",73:"INDEX_SOAK",75:"{",77:"}",78:"CLASS",79:"EXTENDS",82:"SUPER",83:"FUNC_EXIST",84:"CALL_START",85:"CALL_END",87:"THIS",88:"@",89:"[",90:"]",92:"..",95:"TRY",97:"FINALLY",98:"CATCH",99:"THROW",100:"(",101:")",103:"WHILE",104:"WHEN",105:"UNTIL",107:"LOOP",109:"FOR",113:"OWN",115:"FORIN",116:"FOROF",117:"BY",118:"SWITCH",120:"ELSE",122:"LEADING_WHEN",124:"IF",125:"POST_IF",126:"UNARY",127:"-",128:"+",129:"--",130:"++",131:"?",132:"MATH",133:"SHIFT",134:"COMPARE",135:"LOGIC",136:"RELATION",137:"COMPOUND_ASSIGN"},productions_:[0,[3,0],[3,1],[3,2],[4,1],[4,3],[4,2],[7,1],[7,1],[9,1],[9,1],[9,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[5,2],[5,3],[27,1],[29,1],[29,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[17,3],[17,4],[17,5],[41,1],[41,3],[41,5],[41,1],[42,1],[42,1],[42,1],[10,2],[10,1],[11,1],[15,5],[15,2],[50,1],[50,1],[53,0],[53,1],[48,0],[48,1],[48,3],[48,4],[48,6],[55,1],[55,2],[55,3],[56,1],[56,1],[56,1],[56,1],[60,2],[61,1],[61,2],[61,2],[61,1],[39,1],[39,1],[39,1],[13,1],[13,1],[13,1],[13,1],[13,1],[62,2],[62,2],[62,2],[62,1],[62,1],[69,3],[69,2],[71,1],[71,1],[59,4],[76,0],[76,1],[76,3],[76,4],[76,6],[23,1],[23,2],[23,3],[23,4],[23,2],[23,3],[23,4],[23,5],[14,3],[14,3],[14,1],[14,2],[80,0],[80,1],[81,2],[81,4],[65,1],[65,1],[44,2],[58,2],[58,4],[91,1],[91,1],[64,5],[74,3],[74,2],[74,2],[74,1],[86,1],[86,3],[86,4],[86,4],[86,6],[93,1],[93,1],[94,1],[94,3],[19,2],[19,3],[19,4],[19,5],[96,3],[24,2],[63,3],[63,5],[102,2],[102,4],[102,2],[102,4],[20,2],[20,2],[20,2],[20,1],[106,2],[106,2],[21,2],[21,2],[21,2],[108,2],[108,2],[110,2],[110,3],[114,1],[114,1],[114,1],[114,1],[112,1],[112,3],[111,2],[111,2],[111,4],[111,4],[111,4],[111,6],[111,6],[22,5],[22,7],[22,4],[22,6],[119,1],[119,2],[121,3],[121,4],[123,3],[123,5],[18,1],[18,3],[18,3],[18,3],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,5],[16,3]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return this.$=new d.Block;case 2:return this.$=f[h];case 3:return this.$=f[h-1];case 4:this.$=d.Block.wrap([f[h]]);break;case 5:this.$=f[h-2].push(f[h]);break;case 6:this.$=f[h-1];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$=f[h];break;case 10:this.$=f[h];break;case 11:this.$=new d.Literal(f[h]);break;case 12:this.$=f[h];break;case 13:this.$=f[h];break;case 14:this.$=f[h];break;case 15:this.$=f[h];break;case 16:this.$=f[h];break;case 17:this.$=f[h];break;case 18:this.$=f[h];break;case 19:this.$=f[h];break;case 20:this.$=f[h];break;case 21:this.$=f[h];break;case 22:this.$=f[h];break;case 23:this.$=f[h];break;case 24:this.$=new d.Block;break;case 25:this.$=f[h-1];break;case 26:this.$=new d.Literal(f[h]);break;case 27:this.$=new d.Literal(f[h]);break;case 28:this.$=new d.Literal(f[h]);break;case 29:this.$=f[h];break;case 30:this.$=new d.Literal(f[h]);break;case 31:this.$=new d.Literal(f[h]);break;case 32:this.$=new d.Literal(f[h]);break;case 33:this.$=new d.Undefined;break;case 34:this.$=new d.Null;break;case 35:this.$=new d.Bool(f[h]);break;case 36:this.$=new d.Assign(f[h-2],f[h]);break;case 37:this.$=new d.Assign(f[h-3],f[h]);break;case 38:this.$=new d.Assign(f[h-4],f[h-1]);break;case 39:this.$=new d.Value(f[h]);break;case 40:this.$=new d.Assign(new d.Value(f[h-2]),f[h],"object");break;case 41:this.$=new d.Assign(new d.Value(f[h-4]),f[h-1],"object");break;case 42:this.$=f[h];break;case 43:this.$=f[h];break;case 44:this.$=f[h];break;case 45:this.$=f[h];break;case 46:this.$=new d.Return(f[h]);break;case 47:this.$=new d.Return;break;case 48:this.$=new d.Comment(f[h]);break;case 49:this.$=new d.Code(f[h-3],f[h],f[h-1]);break;case 50:this.$=new d.Code([],f[h],f[h-1]);break;case 51:this.$="func";break;case 52:this.$="boundfunc";break;case 53:this.$=f[h];break;case 54:this.$=f[h];break;case 55:this.$=[];break;case 56:this.$=[f[h]];break;case 57:this.$=f[h-2].concat(f[h]);break;case 58:this.$=f[h-3].concat(f[h]);break;case 59:this.$=f[h-5].concat(f[h-2]);break;case 60:this.$=new d.Param(f[h]);break;case 61:this.$=new d.Param(f[h-1],null,!0);break;case 62:this.$=new d.Param(f[h-2],f[h]);break;case 63:this.$=f[h];break;case 64:this.$=f[h];break;case 65:this.$=f[h];break;case 66:this.$=f[h];break;case 67:this.$=new d.Splat(f[h-1]);break;case 68:this.$=new d.Value(f[h]);break;case 69:this.$=f[h-1].add(f[h]);break;case 70:this.$=new d.Value(f[h-1],[].concat(f[h]));break;case 71:this.$=f[h];break;case 72:this.$=f[h];break;case 73:this.$=new d.Value(f[h]);break;case 74:this.$=new d.Value(f[h]);break;case 75:this.$=f[h];break;case 76:this.$=new d.Value(f[h]);break;case 77:this.$=new d.Value(f[h]);break;case 78:this.$=new d.Value(f[h]);break;case 79:this.$=f[h];break;case 80:this.$=new d.Access(f[h]);break;case 81:this.$=new d.Access(f[h],"soak");break;case 82:this.$=[new d.Access(new d.Literal("prototype")),new d.Access(f[h])];break;case 83:this.$=new d.Access(new d.Literal("prototype"));break;case 84:this.$=f[h];break;case 85:this.$=f[h-1];break;case 86:this.$=d.extend(f[h],{soak:!0});break;case 87:this.$=new d.Index(f[h]);break;case 88:this.$=new d.Slice(f[h]);break;case 89:this.$=new d.Obj(f[h-2],f[h-3].generated);break;case 90:this.$=[];break;case 91:this.$=[f[h]];break;case 92:this.$=f[h-2].concat(f[h]);break;case 93:this.$=f[h-3].concat(f[h]);break;case 94:this.$=f[h-5].concat(f[h-2]);break;case 95:this.$=new d.Class;break;case 96:this.$=new d.Class(null,null,f[h]);break;case 97:this.$=new d.Class(null,f[h]);break;case 98:this.$=new d.Class(null,f[h-1],f[h]);break;case 99:this.$=new d.Class(f[h]);break;case 100:this.$=new d.Class(f[h-1],null,f[h]);break;case 101:this.$=new d.Class(f[h-2],f[h]);break;case 102:this.$=new d.Class(f[h-3],f[h-1],f[h]);break;case 103:this.$=new d.Call(f[h-2],f[h],f[h-1]);break;case 104:this.$=new d.Call(f[h-2],f[h],f[h-1]);break;case 105:this.$=new d.Call("super",[new d.Splat(new d.Literal("arguments"))]);break;case 106:this.$=new d.Call("super",f[h]);break;case 107:this.$=!1;break;case 108:this.$=!0;break;case 109:this.$=[];break;case 110:this.$=f[h-2];break;case 111:this.$=new d.Value(new d.Literal("this"));break;case 112:this.$=new d.Value(new d.Literal("this"));break;case 113:this.$=new d.Value(new d.Literal("this"),[new d.Access(f[h])],"this");break;case 114:this.$=new d.Arr([]);break;case 115:this.$=new d.Arr(f[h-2]);break;case 116:this.$="inclusive";break;case 117:this.$="exclusive";break;case 118:this.$=new d.Range(f[h-3],f[h-1],f[h-2]);break;case 119:this.$=new d.Range(f[h-2],f[h],f[h-1]);break;case 120:this.$=new d.Range(f[h-1],null,f[h]);break;case 121:this.$=new d.Range(null,f[h],f[h-1]);break;case 122:this.$=new d.Range(null,null,f[h]);break;case 123:this.$=[f[h]];break;case 124:this.$=f[h-2].concat(f[h]);break;case 125:this.$=f[h-3].concat(f[h]);break;case 126:this.$=f[h-2];break;case 127:this.$=f[h-5].concat(f[h-2]);break;case 128:this.$=f[h];break;case 129:this.$=f[h];break;case 130:this.$=f[h];break;case 131:this.$=[].concat(f[h-2],f[h]);break;case 132:this.$=new d.Try(f[h]);break;case 133:this.$=new d.Try(f[h-1],f[h][0],f[h][1]);break;case 134:this.$=new d.Try(f[h-2],null,null,f[h]);break;case 135:this.$=new d.Try(f[h-3],f[h-2][0],f[h-2][1],f[h]);break;case 136:this.$=[f[h-1],f[h]];break;case 137:this.$=new d.Throw(f[h]);break;case 138:this.$=new d.Parens(f[h-1]);break;case 139:this.$=new d.Parens(f[h-2]);break;case 140:this.$=new d.While(f[h]);break;case 141:this.$=new d.While(f[h-2],{guard:f[h]});break;case 142:this.$=new d.While(f[h],{invert:!0});break;case 143:this.$=new d.While(f[h-2],{invert:!0,guard:f[h]});break;case 144:this.$=f[h-1].addBody(f[h]);break;case 145:this.$=f[h].addBody(d.Block.wrap([f[h-1]]));break;case 146:this.$=f[h].addBody(d.Block.wrap([f[h-1]]));break;case 147:this.$=f[h];break;case 148:this.$=(new d.While(new d.Literal("true"))).addBody(f[h]);break;case 149:this.$=(new d.While(new d.Literal("true"))).addBody(d.Block.wrap([f[h]]));break;case 150:this.$=new d.For(f[h-1],f[h]);break;case 151:this.$=new d.For(f[h-1],f[h]);break;case 152:this.$=new d.For(f[h],f[h-1]);break;case 153:this.$={source:new d.Value(f[h])};break;case 154:this.$=function(){f[h].own=f[h-1].own,f[h].name=f[h-1][0],f[h].index=f[h-1][1];return f[h]}();break;case 155:this.$=f[h];break;case 156:this.$=function(){f[h].own=!0;return f[h]}();break;case 157:this.$=f[h];break;case 158:this.$=f[h];break;case 159:this.$=new d.Value(f[h]);break;case 160:this.$=new d.Value(f[h]);break;case 161:this.$=[f[h]];break;case 162:this.$=[f[h-2],f[h]];break;case 163:this.$={source:f[h]};break;case 164:this.$={source:f[h],object:!0};break;case 165:this.$={source:f[h-2],guard:f[h]};break;case 166:this.$={source:f[h-2],guard:f[h],object:!0};break;case 167:this.$={source:f[h-2],step:f[h]};break;case 168:this.$={source:f[h-4],guard:f[h-2],step:f[h]};break;case 169:this.$={source:f[h-4],step:f[h-2],guard:f[h]};break;case 170:this.$=new d.Switch(f[h-3],f[h-1]);break;case 171:this.$=new d.Switch(f[h-5],f[h-3],f[h-1]);break;case 172:this.$=new d.Switch(null,f[h-1]);break;case 173:this.$=new d.Switch(null,f[h-3],f[h-1]);break;case 174:this.$=f[h];break;case 175:this.$=f[h-1].concat(f[h]);break;case 176:this.$=[[f[h-1],f[h]]];break;case 177:this.$=[[f[h-2],f[h-1]]];break;case 178:this.$=new d.If(f[h-1],f[h],{type:f[h-2]});break;case 179:this.$=f[h-4].addElse(new d.If(f[h-1],f[h],{type:f[h-2]}));break;case 180:this.$=f[h];break;case 181:this.$=f[h-2].addElse(f[h]);break;case 182:this.$=new d.If(f[h],d.Block.wrap([f[h-2]]),{type:f[h-1],statement:!0});break;case 183:this.$=new d.If(f[h],d.Block.wrap([f[h-2]]),{type:f[h-1],statement:!0});break;case 184:this.$=new d.Op(f[h-1],f[h]);break;case 185:this.$=new d.Op("-",f[h]);break;case 186:this.$=new d.Op("+",f[h]);break;case 187:this.$=new d.Op("--",f[h]);break;case 188:this.$=new d.Op("++",f[h]);break;case 189:this.$=new d.Op("--",f[h-1],null,!0);break;case 190:this.$=new d.Op("++",f[h-1],null,!0);break;case 191:this.$=new d.Existence(f[h-1]);break;case 192:this.$=new d.Op("+",f[h-2],f[h]);break;case 193:this.$=new d.Op("-",f[h-2],f[h]);break;case 194:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 195:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 196:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 197:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 198:this.$=function(){return f[h-1].charAt(0)==="!"?(new d.Op(f[h-1].slice(1),f[h-2],f[h])).invert():new d.Op(f[h-1],f[h-2],f[h])}();break;case 199:this.$=new d.Assign(f[h-2],f[h],f[h-1]);break;case 200:this.$=new d.Assign(f[h-4],f[h-1],f[h-3]);break;case 201:this.$=new d.Extends(f[h-2],f[h])}},table:[{1:[2,1],3:1,4:2,5:3,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,5],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[3]},{1:[2,2],6:[1,74]},{6:[1,75]},{1:[2,4],6:[2,4],26:[2,4],101:[2,4]},{4:77,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[1,76],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,7],6:[2,7],26:[2,7],101:[2,7],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,8],6:[2,8],26:[2,8],101:[2,8],102:90,103:[1,65],105:[1,66],108:91,109:[1,68],110:69,125:[1,89]},{1:[2,12],6:[2,12],25:[2,12],26:[2,12],49:[2,12],54:[2,12],57:[2,12],62:93,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],72:[2,12],73:[1,100],77:[2,12],80:92,83:[1,94],84:[2,107],85:[2,12],90:[2,12],92:[2,12],101:[2,12],103:[2,12],104:[2,12],105:[2,12],109:[2,12],117:[2,12],125:[2,12],127:[2,12],128:[2,12],131:[2,12],132:[2,12],133:[2,12],134:[2,12],135:[2,12],136:[2,12]},{1:[2,13],6:[2,13],25:[2,13],26:[2,13],49:[2,13],54:[2,13],57:[2,13],62:102,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],72:[2,13],73:[1,100],77:[2,13],80:101,83:[1,94],84:[2,107],85:[2,13],90:[2,13],92:[2,13],101:[2,13],103:[2,13],104:[2,13],105:[2,13],109:[2,13],117:[2,13],125:[2,13],127:[2,13],128:[2,13],131:[2,13],132:[2,13],133:[2,13],134:[2,13],135:[2,13],136:[2,13]},{1:[2,14],6:[2,14],25:[2,14],26:[2,14],49:[2,14],54:[2,14],57:[2,14],72:[2,14],77:[2,14],85:[2,14],90:[2,14],92:[2,14],101:[2,14],103:[2,14],104:[2,14],105:[2,14],109:[2,14],117:[2,14],125:[2,14],127:[2,14],128:[2,14],131:[2,14],132:[2,14],133:[2,14],134:[2,14],135:[2,14],136:[2,14]},{1:[2,15],6:[2,15],25:[2,15],26:[2,15],49:[2,15],54:[2,15],57:[2,15],72:[2,15],77:[2,15],85:[2,15],90:[2,15],92:[2,15],101:[2,15],103:[2,15],104:[2,15],105:[2,15],109:[2,15],117:[2,15],125:[2,15],127:[2,15],128:[2,15],131:[2,15],132:[2,15],133:[2,15],134:[2,15],135:[2,15],136:[2,15]},{1:[2,16],6:[2,16],25:[2,16],26:[2,16],49:[2,16],54:[2,16],57:[2,16],72:[2,16],77:[2,16],85:[2,16],90:[2,16],92:[2,16],101:[2,16],103:[2,16],104:[2,16],105:[2,16],109:[2,16],117:[2,16],125:[2,16],127:[2,16],128:[2,16],131:[2,16],132:[2,16],133:[2,16],134:[2,16],135:[2,16],136:[2,16]},{1:[2,17],6:[2,17],25:[2,17],26:[2,17],49:[2,17],54:[2,17],57:[2,17],72:[2,17],77:[2,17],85:[2,17],90:[2,17],92:[2,17],101:[2,17],103:[2,17],104:[2,17],105:[2,17],109:[2,17],117:[2,17],125:[2,17],127:[2,17],128:[2,17],131:[2,17],132:[2,17],133:[2,17],134:[2,17],135:[2,17],136:[2,17]},{1:[2,18],6:[2,18],25:[2,18],26:[2,18],49:[2,18],54:[2,18],57:[2,18],72:[2,18],77:[2,18],85:[2,18],90:[2,18],92:[2,18],101:[2,18],103:[2,18],104:[2,18],105:[2,18],109:[2,18],117:[2,18],125:[2,18],127:[2,18],128:[2,18],131:[2,18],132:[2,18],133:[2,18],134:[2,18],135:[2,18],136:[2,18]},{1:[2,19],6:[2,19],25:[2,19],26:[2,19],49:[2,19],54:[2,19],57:[2,19],72:[2,19],77:[2,19],85:[2,19],90:[2,19],92:[2,19],101:[2,19],103:[2,19],104:[2,19],105:[2,19],109:[2,19],117:[2,19],125:[2,19],127:[2,19],128:[2,19],131:[2,19],132:[2,19],133:[2,19],134:[2,19],135:[2,19],136:[2,19]},{1:[2,20],6:[2,20],25:[2,20],26:[2,20],49:[2,20],54:[2,20],57:[2,20],72:[2,20],77:[2,20],85:[2,20],90:[2,20],92:[2,20],101:[2,20],103:[2,20],104:[2,20],105:[2,20],109:[2,20],117:[2,20],125:[2,20],127:[2,20],128:[2,20],131:[2,20],132:[2,20],133:[2,20],134:[2,20],135:[2,20],136:[2,20]},{1:[2,21],6:[2,21],25:[2,21],26:[2,21],49:[2,21],54:[2,21],57:[2,21],72:[2,21],77:[2,21],85:[2,21],90:[2,21],92:[2,21],101:[2,21],103:[2,21],104:[2,21],105:[2,21],109:[2,21],117:[2,21],125:[2,21],127:[2,21],128:[2,21],131:[2,21],132:[2,21],133:[2,21],134:[2,21],135:[2,21],136:[2,21]},{1:[2,22],6:[2,22],25:[2,22],26:[2,22],49:[2,22],54:[2,22],57:[2,22],72:[2,22],77:[2,22],85:[2,22],90:[2,22],92:[2,22],101:[2,22],103:[2,22],104:[2,22],105:[2,22],109:[2,22],117:[2,22],125:[2,22],127:[2,22],128:[2,22],131:[2,22],132:[2,22],133:[2,22],134:[2,22],135:[2,22],136:[2,22]},{1:[2,23],6:[2,23],25:[2,23],26:[2,23],49:[2,23],54:[2,23],57:[2,23],72:[2,23],77:[2,23],85:[2,23],90:[2,23],92:[2,23],101:[2,23],103:[2,23],104:[2,23],105:[2,23],109:[2,23],117:[2,23],125:[2,23],127:[2,23],128:[2,23],131:[2,23],132:[2,23],133:[2,23],134:[2,23],135:[2,23],136:[2,23]},{1:[2,9],6:[2,9],26:[2,9],101:[2,9],103:[2,9],105:[2,9],109:[2,9],125:[2,9]},{1:[2,10],6:[2,10],26:[2,10],101:[2,10],103:[2,10],105:[2,10],109:[2,10],125:[2,10]},{1:[2,11],6:[2,11],26:[2,11],101:[2,11],103:[2,11],105:[2,11],109:[2,11],125:[2,11]},{1:[2,75],6:[2,75],25:[2,75],26:[2,75],40:[1,103],49:[2,75],54:[2,75],57:[2,75],66:[2,75],67:[2,75],68:[2,75],70:[2,75],72:[2,75],73:[2,75],77:[2,75],83:[2,75],84:[2,75],85:[2,75],90:[2,75],92:[2,75],101:[2,75],103:[2,75],104:[2,75],105:[2,75],109:[2,75],117:[2,75],125:[2,75],127:[2,75],128:[2,75],131:[2,75],132:[2,75],133:[2,75],134:[2,75],135:[2,75],136:[2,75]},{1:[2,76],6:[2,76],25:[2,76],26:[2,76],49:[2,76],54:[2,76],57:[2,76],66:[2,76],67:[2,76],68:[2,76],70:[2,76],72:[2,76],73:[2,76],77:[2,76],83:[2,76],84:[2,76],85:[2,76],90:[2,76],92:[2,76],101:[2,76],103:[2,76],104:[2,76],105:[2,76],109:[2,76],117:[2,76],125:[2,76],127:[2,76],128:[2,76],131:[2,76],132:[2,76],133:[2,76],134:[2,76],135:[2,76],136:[2,76]},{1:[2,77],6:[2,77],25:[2,77],26:[2,77],49:[2,77],54:[2,77],57:[2,77],66:[2,77],67:[2,77],68:[2,77],70:[2,77],72:[2,77],73:[2,77],77:[2,77],83:[2,77],84:[2,77],85:[2,77],90:[2,77],92:[2,77],101:[2,77],103:[2,77],104:[2,77],105:[2,77],109:[2,77],117:[2,77],125:[2,77],127:[2,77],128:[2,77],131:[2,77],132:[2,77],133:[2,77],134:[2,77],135:[2,77],136:[2,77]},{1:[2,78],6:[2,78],25:[2,78],26:[2,78],49:[2,78],54:[2,78],57:[2,78],66:[2,78],67:[2,78],68:[2,78],70:[2,78],72:[2,78],73:[2,78],77:[2,78],83:[2,78],84:[2,78],85:[2,78],90:[2,78],92:[2,78],101:[2,78],103:[2,78],104:[2,78],105:[2,78],109:[2,78],117:[2,78],125:[2,78],127:[2,78],128:[2,78],131:[2,78],132:[2,78],133:[2,78],134:[2,78],135:[2,78],136:[2,78]},{1:[2,79],6:[2,79],25:[2,79],26:[2,79],49:[2,79],54:[2,79],57:[2,79],66:[2,79],67:[2,79],68:[2,79],70:[2,79],72:[2,79],73:[2,79],77:[2,79],83:[2,79],84:[2,79],85:[2,79],90:[2,79],92:[2,79],101:[2,79],103:[2,79],104:[2,79],105:[2,79],109:[2,79],117:[2,79],125:[2,79],127:[2,79],128:[2,79],131:[2,79],132:[2,79],133:[2,79],134:[2,79],135:[2,79],136:[2,79]},{1:[2,105],6:[2,105],25:[2,105],26:[2,105],49:[2,105],54:[2,105],57:[2,105],66:[2,105],67:[2,105],68:[2,105],70:[2,105],72:[2,105],73:[2,105],77:[2,105],81:104,83:[2,105],84:[1,105],85:[2,105],90:[2,105],92:[2,105],101:[2,105],103:[2,105],104:[2,105],105:[2,105],109:[2,105],117:[2,105],125:[2,105],127:[2,105],128:[2,105],131:[2,105],132:[2,105],133:[2,105],134:[2,105],135:[2,105],136:[2,105]},{6:[2,55],25:[2,55],27:109,28:[1,73],44:110,48:106,49:[2,55],54:[2,55],55:107,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{5:115,25:[1,5]},{8:116,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:118,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:119,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{13:121,14:122,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,58:47,59:48,61:120,63:25,64:26,65:27,75:[1,70],82:[1,28],87:[1,58],88:[1,59],89:[1,57],100:[1,56]},{13:121,14:122,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,58:47,59:48,61:124,63:25,64:26,65:27,75:[1,70],82:[1,28],87:[1,58],88:[1,59],89:[1,57],100:[1,56]},{1:[2,72],6:[2,72],25:[2,72],26:[2,72],40:[2,72],49:[2,72],54:[2,72],57:[2,72],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,72],73:[2,72],77:[2,72],79:[1,128],83:[2,72],84:[2,72],85:[2,72],90:[2,72],92:[2,72],101:[2,72],103:[2,72],104:[2,72],105:[2,72],109:[2,72],117:[2,72],125:[2,72],127:[2,72],128:[2,72],129:[1,125],130:[1,126],131:[2,72],132:[2,72],133:[2,72],134:[2,72],135:[2,72],136:[2,72],137:[1,127]},{1:[2,180],6:[2,180],25:[2,180],26:[2,180],49:[2,180],54:[2,180],57:[2,180],72:[2,180],77:[2,180],85:[2,180],90:[2,180],92:[2,180],101:[2,180],103:[2,180],104:[2,180],105:[2,180],109:[2,180],117:[2,180],120:[1,129],125:[2,180],127:[2,180],128:[2,180],131:[2,180],132:[2,180],133:[2,180],134:[2,180],135:[2,180],136:[2,180]},{5:130,25:[1,5]},{5:131,25:[1,5]},{1:[2,147],6:[2,147],25:[2,147],26:[2,147],49:[2,147],54:[2,147],57:[2,147],72:[2,147],77:[2,147],85:[2,147],90:[2,147],92:[2,147],101:[2,147],103:[2,147],104:[2,147],105:[2,147],109:[2,147],117:[2,147],125:[2,147],127:[2,147],128:[2,147],131:[2,147],132:[2,147],133:[2,147],134:[2,147],135:[2,147],136:[2,147]},{5:132,25:[1,5]},{8:133,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,134],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,95],5:135,6:[2,95],13:121,14:122,25:[1,5],26:[2,95],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,49:[2,95],54:[2,95],57:[2,95],58:47,59:48,61:137,63:25,64:26,65:27,72:[2,95],75:[1,70],77:[2,95],79:[1,136],82:[1,28],85:[2,95],87:[1,58],88:[1,59],89:[1,57],90:[2,95],92:[2,95],100:[1,56],101:[2,95],103:[2,95],104:[2,95],105:[2,95],109:[2,95],117:[2,95],125:[2,95],127:[2,95],128:[2,95],131:[2,95],132:[2,95],133:[2,95],134:[2,95],135:[2,95],136:[2,95]},{8:138,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,47],6:[2,47],8:139,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[2,47],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],101:[2,47],102:39,103:[2,47],105:[2,47],106:40,107:[1,67],108:41,109:[2,47],110:69,118:[1,42],123:37,124:[1,64],125:[2,47],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,48],6:[2,48],25:[2,48],26:[2,48],54:[2,48],77:[2,48],101:[2,48],103:[2,48],105:[2,48],109:[2,48],125:[2,48]},{1:[2,73],6:[2,73],25:[2,73],26:[2,73],40:[2,73],49:[2,73],54:[2,73],57:[2,73],66:[2,73],67:[2,73],68:[2,73],70:[2,73],72:[2,73],73:[2,73],77:[2,73],83:[2,73],84:[2,73],85:[2,73],90:[2,73],92:[2,73],101:[2,73],103:[2,73],104:[2,73],105:[2,73],109:[2,73],117:[2,73],125:[2,73],127:[2,73],128:[2,73],131:[2,73],132:[2,73],133:[2,73],134:[2,73],135:[2,73],136:[2,73]},{1:[2,74],6:[2,74],25:[2,74],26:[2,74],40:[2,74],49:[2,74],54:[2,74],57:[2,74],66:[2,74],67:[2,74],68:[2,74],70:[2,74],72:[2,74],73:[2,74],77:[2,74],83:[2,74],84:[2,74],85:[2,74],90:[2,74],92:[2,74],101:[2,74],103:[2,74],104:[2,74],105:[2,74],109:[2,74],117:[2,74],125:[2,74],127:[2,74],128:[2,74],131:[2,74],132:[2,74],133:[2,74],134:[2,74],135:[2,74],136:[2,74]},{1:[2,29],6:[2,29],25:[2,29],26:[2,29],49:[2,29],54:[2,29],57:[2,29],66:[2,29],67:[2,29],68:[2,29],70:[2,29],72:[2,29],73:[2,29],77:[2,29],83:[2,29],84:[2,29],85:[2,29],90:[2,29],92:[2,29],101:[2,29],103:[2,29],104:[2,29],105:[2,29],109:[2,29],117:[2,29],125:[2,29],127:[2,29],128:[2,29],131:[2,29],132:[2,29],133:[2,29],134:[2,29],135:[2,29],136:[2,29]},{1:[2,30],6:[2,30],25:[2,30],26:[2,30],49:[2,30],54:[2,30],57:[2,30],66:[2,30],67:[2,30],68:[2,30],70:[2,30],72:[2,30],73:[2,30],77:[2,30],83:[2,30],84:[2,30],85:[2,30],90:[2,30],92:[2,30],101:[2,30],103:[2,30],104:[2,30],105:[2,30],109:[2,30],117:[2,30],125:[2,30],127:[2,30],128:[2,30],131:[2,30],132:[2,30],133:[2,30],134:[2,30],135:[2,30],136:[2,30]},{1:[2,31],6:[2,31],25:[2,31],26:[2,31],49:[2,31],54:[2,31],57:[2,31],66:[2,31],67:[2,31],68:[2,31],70:[2,31],72:[2,31],73:[2,31],77:[2,31],83:[2,31],84:[2,31],85:[2,31],90:[2,31],92:[2,31],101:[2,31],103:[2,31],104:[2,31],105:[2,31],109:[2,31],117:[2,31],125:[2,31],127:[2,31],128:[2,31],131:[2,31],132:[2,31],133:[2,31],134:[2,31],135:[2,31],136:[2,31]},{1:[2,32],6:[2,32],25:[2,32],26:[2,32],49:[2,32],54:[2,32],57:[2,32],66:[2,32],67:[2,32],68:[2,32],70:[2,32],72:[2,32],73:[2,32],77:[2,32],83:[2,32],84:[2,32],85:[2,32],90:[2,32],92:[2,32],101:[2,32],103:[2,32],104:[2,32],105:[2,32],109:[2,32],117:[2,32],125:[2,32],127:[2,32],128:[2,32],131:[2,32],132:[2,32],133:[2,32],134:[2,32],135:[2,32],136:[2,32]},{1:[2,33],6:[2,33],25:[2,33],26:[2,33],49:[2,33],54:[2,33],57:[2,33],66:[2,33],67:[2,33],68:[2,33],70:[2,33],72:[2,33],73:[2,33],77:[2,33],83:[2,33],84:[2,33],85:[2,33],90:[2,33],92:[2,33],101:[2,33],103:[2,33],104:[2,33],105:[2,33],109:[2,33],117:[2,33],125:[2,33],127:[2,33],128:[2,33],131:[2,33],132:[2,33],133:[2,33],134:[2,33],135:[2,33],136:[2,33]},{1:[2,34],6:[2,34],25:[2,34],26:[2,34],49:[2,34],54:[2,34],57:[2,34],66:[2,34],67:[2,34],68:[2,34],70:[2,34],72:[2,34],73:[2,34],77:[2,34],83:[2,34],84:[2,34],85:[2,34],90:[2,34],92:[2,34],101:[2,34],103:[2,34],104:[2,34],105:[2,34],109:[2,34],117:[2,34],125:[2,34],127:[2,34],128:[2,34],131:[2,34],132:[2,34],133:[2,34],134:[2,34],135:[2,34],136:[2,34]},{1:[2,35],6:[2,35],25:[2,35],26:[2,35],49:[2,35],54:[2,35],57:[2,35],66:[2,35],67:[2,35],68:[2,35],70:[2,35],72:[2,35],73:[2,35],77:[2,35],83:[2,35],84:[2,35],85:[2,35],90:[2,35],92:[2,35],101:[2,35],103:[2,35],104:[2,35],105:[2,35],109:[2,35],117:[2,35],125:[2,35],127:[2,35],128:[2,35],131:[2,35],132:[2,35],133:[2,35],134:[2,35],135:[2,35],136:[2,35]},{4:140,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,141],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:142,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:144,87:[1,58],88:[1,59],89:[1,57],90:[1,143],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,111],6:[2,111],25:[2,111],26:[2,111],49:[2,111],54:[2,111],57:[2,111],66:[2,111],67:[2,111],68:[2,111],70:[2,111],72:[2,111],73:[2,111],77:[2,111],83:[2,111],84:[2,111],85:[2,111],90:[2,111],92:[2,111],101:[2,111],103:[2,111],104:[2,111],105:[2,111],109:[2,111],117:[2,111],125:[2,111],127:[2,111],128:[2,111],131:[2,111],132:[2,111],133:[2,111],134:[2,111],135:[2,111],136:[2,111]},{1:[2,112],6:[2,112],25:[2,112],26:[2,112],27:148,28:[1,73],49:[2,112],54:[2,112],57:[2,112],66:[2,112],67:[2,112],68:[2,112],70:[2,112],72:[2,112],73:[2,112],77:[2,112],83:[2,112],84:[2,112],85:[2,112],90:[2,112],92:[2,112],101:[2,112],103:[2,112],104:[2,112],105:[2,112],109:[2,112],117:[2,112],125:[2,112],127:[2,112],128:[2,112],131:[2,112],132:[2,112],133:[2,112],134:[2,112],135:[2,112],136:[2,112]},{25:[2,51]},{25:[2,52]},{1:[2,68],6:[2,68],25:[2,68],26:[2,68],40:[2,68],49:[2,68],54:[2,68],57:[2,68],66:[2,68],67:[2,68],68:[2,68],70:[2,68],72:[2,68],73:[2,68],77:[2,68],79:[2,68],83:[2,68],84:[2,68],85:[2,68],90:[2,68],92:[2,68],101:[2,68],103:[2,68],104:[2,68],105:[2,68],109:[2,68],117:[2,68],125:[2,68],127:[2,68],128:[2,68],129:[2,68],130:[2,68],131:[2,68],132:[2,68],133:[2,68],134:[2,68],135:[2,68],136:[2,68],137:[2,68]},{1:[2,71],6:[2,71],25:[2,71],26:[2,71],40:[2,71],49:[2,71],54:[2,71],57:[2,71],66:[2,71],67:[2,71],68:[2,71],70:[2,71],72:[2,71],73:[2,71],77:[2,71],79:[2,71],83:[2,71],84:[2,71],85:[2,71],90:[2,71],92:[2,71],101:[2,71],103:[2,71],104:[2,71],105:[2,71],109:[2,71],117:[2,71],125:[2,71],127:[2,71],128:[2,71],129:[2,71],130:[2,71],131:[2,71],132:[2,71],133:[2,71],134:[2,71],135:[2,71],136:[2,71],137:[2,71]},{8:149,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:150,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:151,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{5:152,8:153,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,5],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{27:158,28:[1,73],44:159,58:160,59:161,64:154,75:[1,70],88:[1,113],89:[1,57],112:155,113:[1,156],114:157},{111:162,115:[1,163],116:[1,164]},{6:[2,90],11:168,25:[2,90],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:166,42:167,44:171,46:[1,46],54:[2,90],76:165,77:[2,90],88:[1,113]},{1:[2,27],6:[2,27],25:[2,27],26:[2,27],43:[2,27],49:[2,27],54:[2,27],57:[2,27],66:[2,27],67:[2,27],68:[2,27],70:[2,27],72:[2,27],73:[2,27],77:[2,27],83:[2,27],84:[2,27],85:[2,27],90:[2,27],92:[2,27],101:[2,27],103:[2,27],104:[2,27],105:[2,27],109:[2,27],117:[2,27],125:[2,27],127:[2,27],128:[2,27],131:[2,27],132:[2,27],133:[2,27],134:[2,27],135:[2,27],136:[2,27]},{1:[2,28],6:[2,28],25:[2,28],26:[2,28],43:[2,28],49:[2,28],54:[2,28],57:[2,28],66:[2,28],67:[2,28],68:[2,28],70:[2,28],72:[2,28],73:[2,28],77:[2,28],83:[2,28],84:[2,28],85:[2,28],90:[2,28],92:[2,28],101:[2,28],103:[2,28],104:[2,28],105:[2,28],109:[2,28],117:[2,28],125:[2,28],127:[2,28],128:[2,28],131:[2,28],132:[2,28],133:[2,28],134:[2,28],135:[2,28],136:[2,28]},{1:[2,26],6:[2,26],25:[2,26],26:[2,26],40:[2,26],43:[2,26],49:[2,26],54:[2,26],57:[2,26],66:[2,26],67:[2,26],68:[2,26],70:[2,26],72:[2,26],73:[2,26],77:[2,26],79:[2,26],83:[2,26],84:[2,26],85:[2,26],90:[2,26],92:[2,26],101:[2,26],103:[2,26],104:[2,26],105:[2,26],109:[2,26],115:[2,26],116:[2,26],117:[2,26],125:[2,26],127:[2,26],128:[2,26],129:[2,26],130:[2,26],131:[2,26],132:[2,26],133:[2,26],134:[2,26],135:[2,26],136:[2,26],137:[2,26]},{1:[2,6],6:[2,6],7:172,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[2,6],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],101:[2,6],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,3]},{1:[2,24],6:[2,24],25:[2,24],26:[2,24],49:[2,24],54:[2,24],57:[2,24],72:[2,24],77:[2,24],85:[2,24],90:[2,24],92:[2,24],97:[2,24],98:[2,24],101:[2,24],103:[2,24],104:[2,24],105:[2,24],109:[2,24],117:[2,24],120:[2,24],122:[2,24],125:[2,24],127:[2,24],128:[2,24],131:[2,24],132:[2,24],133:[2,24],134:[2,24],135:[2,24],136:[2,24]},{6:[1,74],26:[1,173]},{1:[2,191],6:[2,191],25:[2,191],26:[2,191],49:[2,191],54:[2,191],57:[2,191],72:[2,191],77:[2,191],85:[2,191],90:[2,191],92:[2,191],101:[2,191],103:[2,191],104:[2,191],105:[2,191],109:[2,191],117:[2,191],125:[2,191],127:[2,191],128:[2,191],131:[2,191],132:[2,191],133:[2,191],134:[2,191],135:[2,191],136:[2,191]},{8:174,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:175,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:176,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:177,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:178,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:179,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:180,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:181,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,146],6:[2,146],25:[2,146],26:[2,146],49:[2,146],54:[2,146],57:[2,146],72:[2,146],77:[2,146],85:[2,146],90:[2,146],92:[2,146],101:[2,146],103:[2,146],104:[2,146],105:[2,146],109:[2,146],117:[2,146],125:[2,146],127:[2,146],128:[2,146],131:[2,146],132:[2,146],133:[2,146],134:[2,146],135:[2,146],136:[2,146]},{1:[2,151],6:[2,151],25:[2,151],26:[2,151],49:[2,151],54:[2,151],57:[2,151],72:[2,151],77:[2,151],85:[2,151],90:[2,151],92:[2,151],101:[2,151],103:[2,151],104:[2,151],105:[2,151],109:[2,151],117:[2,151],125:[2,151],127:[2,151],128:[2,151],131:[2,151],132:[2,151],133:[2,151],134:[2,151],135:[2,151],136:[2,151]},{8:182,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,145],6:[2,145],25:[2,145],26:[2,145],49:[2,145],54:[2,145],57:[2,145],72:[2,145],77:[2,145],85:[2,145],90:[2,145],92:[2,145],101:[2,145],103:[2,145],104:[2,145],105:[2,145],109:[2,145],117:[2,145],125:[2,145],127:[2,145],128:[2,145],131:[2,145],132:[2,145],133:[2,145],134:[2,145],135:[2,145],136:[2,145]},{1:[2,150],6:[2,150],25:[2,150],26:[2,150],49:[2,150],54:[2,150],57:[2,150],72:[2,150],77:[2,150],85:[2,150],90:[2,150],92:[2,150],101:[2,150],103:[2,150],104:[2,150],105:[2,150],109:[2,150],117:[2,150],125:[2,150],127:[2,150],128:[2,150],131:[2,150],132:[2,150],133:[2,150],134:[2,150],135:[2,150],136:[2,150]},{81:183,84:[1,105]},{1:[2,69],6:[2,69],25:[2,69],26:[2,69],40:[2,69],49:[2,69],54:[2,69],57:[2,69],66:[2,69],67:[2,69],68:[2,69],70:[2,69],72:[2,69],73:[2,69],77:[2,69],79:[2,69],83:[2,69],84:[2,69],85:[2,69],90:[2,69],92:[2,69],101:[2,69],103:[2,69],104:[2,69],105:[2,69],109:[2,69],117:[2,69],125:[2,69],127:[2,69],128:[2,69],129:[2,69],130:[2,69],131:[2,69],132:[2,69],133:[2,69],134:[2,69],135:[2,69],136:[2,69],137:[2,69]},{84:[2,108]},{27:184,28:[1,73]},{27:185,28:[1,73]},{1:[2,83],6:[2,83],25:[2,83],26:[2,83],27:186,28:[1,73],40:[2,83],49:[2,83],54:[2,83],57:[2,83],66:[2,83],67:[2,83],68:[2,83],70:[2,83],72:[2,83],73:[2,83],77:[2,83],79:[2,83],83:[2,83],84:[2,83],85:[2,83],90:[2,83],92:[2,83],101:[2,83],103:[2,83],104:[2,83],105:[2,83],109:[2,83],117:[2,83],125:[2,83],127:[2,83],128:[2,83],129:[2,83],130:[2,83],131:[2,83],132:[2,83],133:[2,83],134:[2,83],135:[2,83],136:[2,83],137:[2,83]},{1:[2,84],6:[2,84],25:[2,84],26:[2,84],40:[2,84],49:[2,84],54:[2,84],57:[2,84],66:[2,84],67:[2,84],68:[2,84],70:[2,84],72:[2,84],73:[2,84],77:[2,84],79:[2,84],83:[2,84],84:[2,84],85:[2,84],90:[2,84],92:[2,84],101:[2,84],103:[2,84],104:[2,84],105:[2,84],109:[2,84],117:[2,84],125:[2,84],127:[2,84],128:[2,84],129:[2,84],130:[2,84],131:[2,84],132:[2,84],133:[2,84],134:[2,84],135:[2,84],136:[2,84],137:[2,84]},{8:188,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],57:[1,192],58:47,59:48,61:36,63:25,64:26,65:27,71:187,74:189,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],91:190,92:[1,191],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{69:193,70:[1,99],73:[1,100]},{81:194,84:[1,105]},{1:[2,70],6:[2,70],25:[2,70],26:[2,70],40:[2,70],49:[2,70],54:[2,70],57:[2,70],66:[2,70],67:[2,70],68:[2,70],70:[2,70],72:[2,70],73:[2,70],77:[2,70],79:[2,70],83:[2,70],84:[2,70],85:[2,70],90:[2,70],92:[2,70],101:[2,70],103:[2,70],104:[2,70],105:[2,70],109:[2,70],117:[2,70],125:[2,70],127:[2,70],128:[2,70],129:[2,70],130:[2,70],131:[2,70],132:[2,70],133:[2,70],134:[2,70],135:[2,70],136:[2,70],137:[2,70]},{6:[1,196],8:195,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,197],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,106],6:[2,106],25:[2,106],26:[2,106],49:[2,106],54:[2,106],57:[2,106],66:[2,106],67:[2,106],68:[2,106],70:[2,106],72:[2,106],73:[2,106],77:[2,106],83:[2,106],84:[2,106],85:[2,106],90:[2,106],92:[2,106],101:[2,106],103:[2,106],104:[2,106],105:[2,106],109:[2,106],117:[2,106],125:[2,106],127:[2,106],128:[2,106],131:[2,106],132:[2,106],133:[2,106],134:[2,106],135:[2,106],136:[2,106]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],85:[1,198],86:199,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],49:[1,201],53:203,54:[1,202]},{6:[2,56],25:[2,56],26:[2,56],49:[2,56],54:[2,56]},{6:[2,60],25:[2,60],26:[2,60],40:[1,205],49:[2,60],54:[2,60],57:[1,204]},{6:[2,63],25:[2,63],26:[2,63],40:[2,63],49:[2,63],54:[2,63],57:[2,63]},{6:[2,64],25:[2,64],26:[2,64],40:[2,64],49:[2,64],54:[2,64],57:[2,64]},{6:[2,65],25:[2,65],26:[2,65],40:[2,65],49:[2,65],54:[2,65],57:[2,65]},{6:[2,66],25:[2,66],26:[2,66],40:[2,66],49:[2,66],54:[2,66],57:[2,66]},{27:148,28:[1,73]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:144,87:[1,58],88:[1,59],89:[1,57],90:[1,143],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,50],6:[2,50],25:[2,50],26:[2,50],49:[2,50],54:[2,50],57:[2,50],72:[2,50],77:[2,50],85:[2,50],90:[2,50],92:[2,50],101:[2,50],103:[2,50],104:[2,50],105:[2,50],109:[2,50],117:[2,50],125:[2,50],127:[2,50],128:[2,50],131:[2,50],132:[2,50],133:[2,50],134:[2,50],135:[2,50],136:[2,50]},{1:[2,184],6:[2,184],25:[2,184],26:[2,184],49:[2,184],54:[2,184],57:[2,184],72:[2,184],77:[2,184],85:[2,184],90:[2,184],92:[2,184],101:[2,184],102:87,103:[2,184],104:[2,184],105:[2,184],108:88,109:[2,184],110:69,117:[2,184],125:[2,184],127:[2,184],128:[2,184],131:[1,78],132:[2,184],133:[2,184],134:[2,184],135:[2,184],136:[2,184]},{102:90,103:[1,65],105:[1,66],108:91,109:[1,68],110:69,125:[1,89]},{1:[2,185],6:[2,185],25:[2,185],26:[2,185],49:[2,185],54:[2,185],57:[2,185],72:[2,185],77:[2,185],85:[2,185],90:[2,185],92:[2,185],101:[2,185],102:87,103:[2,185],104:[2,185],105:[2,185],108:88,109:[2,185],110:69,117:[2,185],125:[2,185],127:[2,185],128:[2,185],131:[1,78],132:[2,185],133:[2,185],134:[2,185],135:[2,185],136:[2,185]},{1:[2,186],6:[2,186],25:[2,186],26:[2,186],49:[2,186],54:[2,186],57:[2,186],72:[2,186],77:[2,186],85:[2,186],90:[2,186],92:[2,186],101:[2,186],102:87,103:[2,186],104:[2,186],105:[2,186],108:88,109:[2,186],110:69,117:[2,186],125:[2,186],127:[2,186],128:[2,186],131:[1,78],132:[2,186],133:[2,186],134:[2,186],135:[2,186],136:[2,186]},{1:[2,187],6:[2,187],25:[2,187],26:[2,187],49:[2,187],54:[2,187],57:[2,187],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,187],73:[2,72],77:[2,187],83:[2,72],84:[2,72],85:[2,187],90:[2,187],92:[2,187],101:[2,187],103:[2,187],104:[2,187],105:[2,187],109:[2,187],117:[2,187],125:[2,187],127:[2,187],128:[2,187],131:[2,187],132:[2,187],133:[2,187],134:[2,187],135:[2,187],136:[2,187]},{62:93,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],73:[1,100],80:92,83:[1,94],84:[2,107]},{62:102,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],73:[1,100],80:101,83:[1,94],84:[2,107]},{66:[2,75],67:[2,75],68:[2,75],70:[2,75],73:[2,75],83:[2,75],84:[2,75]},{1:[2,188],6:[2,188],25:[2,188],26:[2,188],49:[2,188],54:[2,188],57:[2,188],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,188],73:[2,72],77:[2,188],83:[2,72],84:[2,72],85:[2,188],90:[2,188],92:[2,188],101:[2,188],103:[2,188],104:[2,188],105:[2,188],109:[2,188],117:[2,188],125:[2,188],127:[2,188],128:[2,188],131:[2,188],132:[2,188],133:[2,188],134:[2,188],135:[2,188],136:[2,188]},{1:[2,189],6:[2,189],25:[2,189],26:[2,189],49:[2,189],54:[2,189],57:[2,189],72:[2,189],77:[2,189],85:[2,189],90:[2,189],92:[2,189],101:[2,189],103:[2,189],104:[2,189],105:[2,189],109:[2,189],117:[2,189],125:[2,189],127:[2,189],128:[2,189],131:[2,189],132:[2,189],133:[2,189],134:[2,189],135:[2,189],136:[2,189]},{1:[2,190],6:[2,190],25:[2,190],26:[2,190],49:[2,190],54:[2,190],57:[2,190],72:[2,190],77:[2,190],85:[2,190],90:[2,190],92:[2,190],101:[2,190],103:[2,190],104:[2,190],105:[2,190],109:[2,190],117:[2,190],125:[2,190],127:[2,190],128:[2,190],131:[2,190],132:[2,190],133:[2,190],134:[2,190],135:[2,190],136:[2,190]},{8:206,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,207],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:208,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{5:209,25:[1,5],124:[1,210]},{1:[2,132],6:[2,132],25:[2,132],26:[2,132],49:[2,132],54:[2,132],57:[2,132],72:[2,132],77:[2,132],85:[2,132],90:[2,132],92:[2,132],96:211,97:[1,212],98:[1,213],101:[2,132],103:[2,132],104:[2,132],105:[2,132],109:[2,132],117:[2,132],125:[2,132],127:[2,132],128:[2,132],131:[2,132],132:[2,132],133:[2,132],134:[2,132],135:[2,132],136:[2,132]},{1:[2,144],6:[2,144],25:[2,144],26:[2,144],49:[2,144],54:[2,144],57:[2,144],72:[2,144],77:[2,144],85:[2,144],90:[2,144],92:[2,144],101:[2,144],103:[2,144],104:[2,144],105:[2,144],109:[2,144],117:[2,144],125:[2,144],127:[2,144],128:[2,144],131:[2,144],132:[2,144],133:[2,144],134:[2,144],135:[2,144],136:[2,144]},{1:[2,152],6:[2,152],25:[2,152],26:[2,152],49:[2,152],54:[2,152],57:[2,152],72:[2,152],77:[2,152],85:[2,152],90:[2,152],92:[2,152],101:[2,152],103:[2,152],104:[2,152],105:[2,152],109:[2,152],117:[2,152],125:[2,152],127:[2,152],128:[2,152],131:[2,152],132:[2,152],133:[2,152],134:[2,152],135:[2,152],136:[2,152]},{25:[1,214],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{119:215,121:216,122:[1,217]},{1:[2,96],6:[2,96],25:[2,96],26:[2,96],49:[2,96],54:[2,96],57:[2,96],72:[2,96],77:[2,96],85:[2,96],90:[2,96],92:[2,96],101:[2,96],103:[2,96],104:[2,96],105:[2,96],109:[2,96],117:[2,96],125:[2,96],127:[2,96],128:[2,96],131:[2,96],132:[2,96],133:[2,96],134:[2,96],135:[2,96],136:[2,96]},{8:218,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,99],5:219,6:[2,99],25:[1,5],26:[2,99],49:[2,99],54:[2,99],57:[2,99],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,99],73:[2,72],77:[2,99],79:[1,220],83:[2,72],84:[2,72],85:[2,99],90:[2,99],92:[2,99],101:[2,99],103:[2,99],104:[2,99],105:[2,99],109:[2,99],117:[2,99],125:[2,99],127:[2,99],128:[2,99],131:[2,99],132:[2,99],133:[2,99],134:[2,99],135:[2,99],136:[2,99]},{1:[2,137],6:[2,137],25:[2,137],26:[2,137],49:[2,137],54:[2,137],57:[2,137],72:[2,137],77:[2,137],85:[2,137],90:[2,137],92:[2,137],101:[2,137],102:87,103:[2,137],104:[2,137],105:[2,137],108:88,109:[2,137],110:69,117:[2,137],125:[2,137],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,46],6:[2,46],26:[2,46],101:[2,46],102:87,103:[2,46],105:[2,46],108:88,109:[2,46],110:69,125:[2,46],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,74],101:[1,221]},{4:222,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,128],25:[2,128],54:[2,128],57:[1,224],90:[2,128],91:223,92:[1,191],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,114],6:[2,114],25:[2,114],26:[2,114],40:[2,114],49:[2,114],54:[2,114],57:[2,114],66:[2,114],67:[2,114],68:[2,114],70:[2,114],72:[2,114],73:[2,114],77:[2,114],83:[2,114],84:[2,114],85:[2,114],90:[2,114],92:[2,114],101:[2,114],103:[2,114],104:[2,114],105:[2,114],109:[2,114],115:[2,114],116:[2,114],117:[2,114],125:[2,114],127:[2,114],128:[2,114],131:[2,114],132:[2,114],133:[2,114],134:[2,114],135:[2,114],136:[2,114]},{6:[2,53],25:[2,53],53:225,54:[1,226],90:[2,53]},{6:[2,123],25:[2,123],26:[2,123],54:[2,123],85:[2,123],90:[2,123]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:227,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,129],25:[2,129],26:[2,129],54:[2,129],85:[2,129],90:[2,129]},{1:[2,113],6:[2,113],25:[2,113],26:[2,113],40:[2,113],43:[2,113],49:[2,113],54:[2,113],57:[2,113],66:[2,113],67:[2,113],68:[2,113],70:[2,113],72:[2,113],73:[2,113],77:[2,113],79:[2,113],83:[2,113],84:[2,113],85:[2,113],90:[2,113],92:[2,113],101:[2,113],103:[2,113],104:[2,113],105:[2,113],109:[2,113],115:[2,113],116:[2,113],117:[2,113],125:[2,113],127:[2,113],128:[2,113],129:[2,113],130:[2,113],131:[2,113],132:[2,113],133:[2,113],134:[2,113],135:[2,113],136:[2,113],137:[2,113]},{5:228,25:[1,5],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,140],6:[2,140],25:[2,140],26:[2,140],49:[2,140],54:[2,140],57:[2,140],72:[2,140],77:[2,140],85:[2,140],90:[2,140],92:[2,140],101:[2,140],102:87,103:[1,65],104:[1,229],105:[1,66],108:88,109:[1,68],110:69,117:[2,140],125:[2,140],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,142],6:[2,142],25:[2,142],26:[2,142],49:[2,142],54:[2,142],57:[2,142],72:[2,142],77:[2,142],85:[2,142],90:[2,142],92:[2,142],101:[2,142],102:87,103:[1,65],104:[1,230],105:[1,66],108:88,109:[1,68],110:69,117:[2,142],125:[2,142],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,148],6:[2,148],25:[2,148],26:[2,148],49:[2,148],54:[2,148],57:[2,148],72:[2,148],77:[2,148],85:[2,148],90:[2,148],92:[2,148],101:[2,148],103:[2,148],104:[2,148],105:[2,148],109:[2,148],117:[2,148],125:[2,148],127:[2,148],128:[2,148],131:[2,148],132:[2,148],133:[2,148],134:[2,148],135:[2,148],136:[2,148]},{1:[2,149],6:[2,149],25:[2,149],26:[2,149],49:[2,149],54:[2,149],57:[2,149],72:[2,149],77:[2,149],85:[2,149],90:[2,149],92:[2,149],101:[2,149],102:87,103:[1,65],104:[2,149],105:[1,66],108:88,109:[1,68],110:69,117:[2,149],125:[2,149],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,153],6:[2,153],25:[2,153],26:[2,153],49:[2,153],54:[2,153],57:[2,153],72:[2,153],77:[2,153],85:[2,153],90:[2,153],92:[2,153],101:[2,153],103:[2,153],104:[2,153],105:[2,153],109:[2,153],117:[2,153],125:[2,153],127:[2,153],128:[2,153],131:[2,153],132:[2,153],133:[2,153],134:[2,153],135:[2,153],136:[2,153]},{115:[2,155],116:[2,155]},{27:158,28:[1,73],44:159,58:160,59:161,75:[1,70],88:[1,113],89:[1,114],112:231,114:157},{54:[1,232],115:[2,161],116:[2,161]},{54:[2,157],115:[2,157],116:[2,157]},{54:[2,158],115:[2,158],116:[2,158]},{54:[2,159],115:[2,159],116:[2,159]},{54:[2,160],115:[2,160],116:[2,160]},{1:[2,154],6:[2,154],25:[2,154],26:[2,154],49:[2,154],54:[2,154],57:[2,154],72:[2,154],77:[2,154],85:[2,154],90:[2,154],92:[2,154],101:[2,154],103:[2,154],104:[2,154],105:[2,154],109:[2,154],117:[2,154],125:[2,154],127:[2,154],128:[2,154],131:[2,154],132:[2,154],133:[2,154],134:[2,154],135:[2,154],136:[2,154]},{8:233,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:234,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],53:235,54:[1,236],77:[2,53]},{6:[2,91],25:[2,91],26:[2,91],54:[2,91],77:[2,91]},{6:[2,39],25:[2,39],26:[2,39],43:[1,237],54:[2,39],77:[2,39]},{6:[2,42],25:[2,42],26:[2,42],54:[2,42],77:[2,42]},{6:[2,43],25:[2,43],26:[2,43],43:[2,43],54:[2,43],77:[2,43]},{6:[2,44],25:[2,44],26:[2,44],43:[2,44],54:[2,44],77:[2,44]},{6:[2,45],25:[2,45],26:[2,45],43:[2,45],54:[2,45],77:[2,45]},{1:[2,5],6:[2,5],26:[2,5],101:[2,5]},{1:[2,25],6:[2,25],25:[2,25],26:[2,25],49:[2,25],54:[2,25],57:[2,25],72:[2,25],77:[2,25],85:[2,25],90:[2,25],92:[2,25],97:[2,25],98:[2,25],101:[2,25],103:[2,25],104:[2,25],105:[2,25],109:[2,25],117:[2,25],120:[2,25],122:[2,25],125:[2,25],127:[2,25],128:[2,25],131:[2,25],132:[2,25],133:[2,25],134:[2,25],135:[2,25],136:[2,25]},{1:[2,192],6:[2,192],25:[2,192],26:[2,192],49:[2,192],54:[2,192],57:[2,192],72:[2,192],77:[2,192],85:[2,192],90:[2,192],92:[2,192],101:[2,192],102:87,103:[2,192],104:[2,192],105:[2,192],108:88,109:[2,192],110:69,117:[2,192],125:[2,192],127:[2,192],128:[2,192],131:[1,78],132:[1,81],133:[2,192],134:[2,192],135:[2,192],136:[2,192]},{1:[2,193],6:[2,193],25:[2,193],26:[2,193],49:[2,193],54:[2,193],57:[2,193],72:[2,193],77:[2,193],85:[2,193],90:[2,193],92:[2,193],101:[2,193],102:87,103:[2,193],104:[2,193],105:[2,193],108:88,109:[2,193],110:69,117:[2,193],125:[2,193],127:[2,193],128:[2,193],131:[1,78],132:[1,81],133:[2,193],134:[2,193],135:[2,193],136:[2,193]},{1:[2,194],6:[2,194],25:[2,194],26:[2,194],49:[2,194],54:[2,194],57:[2,194],72:[2,194],77:[2,194],85:[2,194],90:[2,194],92:[2,194],101:[2,194],102:87,103:[2,194],104:[2,194],105:[2,194],108:88,109:[2,194],110:69,117:[2,194],125:[2,194],127:[2,194],128:[2,194],131:[1,78],132:[2,194],133:[2,194],134:[2,194],135:[2,194],136:[2,194]},{1:[2,195],6:[2,195],25:[2,195],26:[2,195],49:[2,195],54:[2,195],57:[2,195],72:[2,195],77:[2,195],85:[2,195],90:[2,195],92:[2,195],101:[2,195],102:87,103:[2,195],104:[2,195],105:[2,195],108:88,109:[2,195],110:69,117:[2,195],125:[2,195],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[2,195],134:[2,195],135:[2,195],136:[2,195]},{1:[2,196],6:[2,196],25:[2,196],26:[2,196],49:[2,196],54:[2,196],57:[2,196],72:[2,196],77:[2,196],85:[2,196],90:[2,196],92:[2,196],101:[2,196],102:87,103:[2,196],104:[2,196],105:[2,196],108:88,109:[2,196],110:69,117:[2,196],125:[2,196],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[2,196],135:[2,196],136:[1,85]},{1:[2,197],6:[2,197],25:[2,197],26:[2,197],49:[2,197],54:[2,197],57:[2,197],72:[2,197],77:[2,197],85:[2,197],90:[2,197],92:[2,197],101:[2,197],102:87,103:[2,197],104:[2,197],105:[2,197],108:88,109:[2,197],110:69,117:[2,197],125:[2,197],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[2,197],136:[1,85]},{1:[2,198],6:[2,198],25:[2,198],26:[2,198],49:[2,198],54:[2,198],57:[2,198],72:[2,198],77:[2,198],85:[2,198],90:[2,198],92:[2,198],101:[2,198],102:87,103:[2,198],104:[2,198],105:[2,198],108:88,109:[2,198],110:69,117:[2,198],125:[2,198],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[2,198],135:[2,198],136:[2,198]},{1:[2,183],6:[2,183],25:[2,183],26:[2,183],49:[2,183],54:[2,183],57:[2,183],72:[2,183],77:[2,183],85:[2,183],90:[2,183],92:[2,183],101:[2,183],102:87,103:[1,65],104:[2,183],105:[1,66],108:88,109:[1,68],110:69,117:[2,183],125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,182],6:[2,182],25:[2,182],26:[2,182],49:[2,182],54:[2,182],57:[2,182],72:[2,182],77:[2,182],85:[2,182],90:[2,182],92:[2,182],101:[2,182],102:87,103:[1,65],104:[2,182],105:[1,66],108:88,109:[1,68],110:69,117:[2,182],125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,103],6:[2,103],25:[2,103],26:[2,103],49:[2,103],54:[2,103],57:[2,103],66:[2,103],67:[2,103],68:[2,103],70:[2,103],72:[2,103],73:[2,103],77:[2,103],83:[2,103],84:[2,103],85:[2,103],90:[2,103],92:[2,103],101:[2,103],103:[2,103],104:[2,103],105:[2,103],109:[2,103],117:[2,103],125:[2,103],127:[2,103],128:[2,103],131:[2,103],132:[2,103],133:[2,103],134:[2,103],135:[2,103],136:[2,103]},{1:[2,80],6:[2,80],25:[2,80],26:[2,80],40:[2,80],49:[2,80],54:[2,80],57:[2,80],66:[2,80],67:[2,80],68:[2,80],70:[2,80],72:[2,80],73:[2,80],77:[2,80],79:[2,80],83:[2,80],84:[2,80],85:[2,80],90:[2,80],92:[2,80],101:[2,80],103:[2,80],104:[2,80],105:[2,80],109:[2,80],117:[2,80],125:[2,80],127:[2,80],128:[2,80],129:[2,80],130:[2,80],131:[2,80],132:[2,80],133:[2,80],134:[2,80],135:[2,80],136:[2,80],137:[2,80]},{1:[2,81],6:[2,81],25:[2,81],26:[2,81],40:[2,81],49:[2,81],54:[2,81],57:[2,81],66:[2,81],67:[2,81],68:[2,81],70:[2,81],72:[2,81],73:[2,81],77:[2,81],79:[2,81],83:[2,81],84:[2,81],85:[2,81],90:[2,81],92:[2,81],101:[2,81],103:[2,81],104:[2,81],105:[2,81],109:[2,81],117:[2,81],125:[2,81],127:[2,81],128:[2,81],129:[2,81],130:[2,81],131:[2,81],132:[2,81],133:[2,81],134:[2,81],135:[2,81],136:[2,81],137:[2,81]},{1:[2,82],6:[2,82],25:[2,82],26:[2,82],40:[2,82],49:[2,82],54:[2,82],57:[2,82],66:[2,82],67:[2,82],68:[2,82],70:[2,82],72:[2,82],73:[2,82],77:[2,82],79:[2,82],83:[2,82],84:[2,82],85:[2,82],90:[2,82],92:[2,82],101:[2,82],103:[2,82],104:[2,82],105:[2,82],109:[2,82],117:[2,82],125:[2,82],127:[2,82],128:[2,82],129:[2,82],130:[2,82],131:[2,82],132:[2,82],133:[2,82],134:[2,82],135:[2,82],136:[2,82],137:[2,82]},{72:[1,238]},{57:[1,192],72:[2,87],91:239,92:[1,191],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{72:[2,88]},{8:240,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,72:[2,122],75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{12:[2,116],28:[2,116],30:[2,116],31:[2,116],33:[2,116],34:[2,116],35:[2,116],36:[2,116],37:[2,116],38:[2,116],45:[2,116],46:[2,116],47:[2,116],51:[2,116],52:[2,116],72:[2,116],75:[2,116],78:[2,116],82:[2,116],87:[2,116],88:[2,116],89:[2,116],95:[2,116],99:[2,116],100:[2,116],103:[2,116],105:[2,116],107:[2,116],109:[2,116],118:[2,116],124:[2,116],126:[2,116],127:[2,116],128:[2,116],129:[2,116],130:[2,116]},{12:[2,117],28:[2,117],30:[2,117],31:[2,117],33:[2,117],34:[2,117],35:[2,117],36:[2,117],37:[2,117],38:[2,117],45:[2,117],46:[2,117],47:[2,117],51:[2,117],52:[2,117],72:[2,117],75:[2,117],78:[2,117],82:[2,117],87:[2,117],88:[2,117],89:[2,117],95:[2,117],99:[2,117],100:[2,117],103:[2,117],105:[2,117],107:[2,117],109:[2,117],118:[2,117],124:[2,117],126:[2,117],127:[2,117],128:[2,117],129:[2,117],130:[2,117]},{1:[2,86],6:[2,86],25:[2,86],26:[2,86],40:[2,86],49:[2,86],54:[2,86],57:[2,86],66:[2,86],67:[2,86],68:[2,86],70:[2,86],72:[2,86],73:[2,86],77:[2,86],79:[2,86],83:[2,86],84:[2,86],85:[2,86],90:[2,86],92:[2,86],101:[2,86],103:[2,86],104:[2,86],105:[2,86],109:[2,86],117:[2,86],125:[2,86],127:[2,86],128:[2,86],129:[2,86],130:[2,86],131:[2,86],132:[2,86],133:[2,86],134:[2,86],135:[2,86],136:[2,86],137:[2,86]},{1:[2,104],6:[2,104],25:[2,104],26:[2,104],49:[2,104],54:[2,104],57:[2,104],66:[2,104],67:[2,104],68:[2,104],70:[2,104],72:[2,104],73:[2,104],77:[2,104],83:[2,104],84:[2,104],85:[2,104],90:[2,104],92:[2,104],101:[2,104],103:[2,104],104:[2,104],105:[2,104],109:[2,104],117:[2,104],125:[2,104],127:[2,104],128:[2,104],131:[2,104],132:[2,104],133:[2,104],134:[2,104],135:[2,104],136:[2,104]},{1:[2,36],6:[2,36],25:[2,36],26:[2,36],49:[2,36],54:[2,36],57:[2,36],72:[2,36],77:[2,36],85:[2,36],90:[2,36],92:[2,36],101:[2,36],102:87,103:[2,36],104:[2,36],105:[2,36],108:88,109:[2,36],110:69,117:[2,36],125:[2,36],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:241,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:242,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,109],6:[2,109],25:[2,109],26:[2,109],49:[2,109],54:[2,109],57:[2,109],66:[2,109],67:[2,109],68:[2,109],70:[2,109],72:[2,109],73:[2,109],77:[2,109],83:[2,109],84:[2,109],85:[2,109],90:[2,109],92:[2,109],101:[2,109],103:[2,109],104:[2,109],105:[2,109],109:[2,109],117:[2,109],125:[2,109],127:[2,109],128:[2,109],131:[2,109],132:[2,109],133:[2,109],134:[2,109],135:[2,109],136:[2,109]},{6:[2,53],25:[2,53],53:243,54:[1,226],85:[2,53]},{6:[2,128],25:[2,128],26:[2,128],54:[2,128],57:[1,244],85:[2,128],90:[2,128],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{50:245,51:[1,60],52:[1,61]},{6:[2,54],25:[2,54],26:[2,54],27:109,28:[1,73],44:110,55:246,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[1,247],25:[1,248]},{6:[2,61],25:[2,61],26:[2,61],49:[2,61],54:[2,61]},{8:249,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,199],6:[2,199],25:[2,199],26:[2,199],49:[2,199],54:[2,199],57:[2,199],72:[2,199],77:[2,199],85:[2,199],90:[2,199],92:[2,199],101:[2,199],102:87,103:[2,199],104:[2,199],105:[2,199],108:88,109:[2,199],110:69,117:[2,199],125:[2,199],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:250,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,201],6:[2,201],25:[2,201],26:[2,201],49:[2,201],54:[2,201],57:[2,201],72:[2,201],77:[2,201],85:[2,201],90:[2,201],92:[2,201],101:[2,201],102:87,103:[2,201],104:[2,201],105:[2,201],108:88,109:[2,201],110:69,117:[2,201],125:[2,201],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,181],6:[2,181],25:[2,181],26:[2,181],49:[2,181],54:[2,181],57:[2,181],72:[2,181],77:[2,181],85:[2,181],90:[2,181],92:[2,181],101:[2,181],103:[2,181],104:[2,181],105:[2,181],109:[2,181],117:[2,181],125:[2,181],127:[2,181],128:[2,181],131:[2,181],132:[2,181],133:[2,181],134:[2,181],135:[2,181],136:[2,181]},{8:251,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,133],6:[2,133],25:[2,133],26:[2,133],49:[2,133],54:[2,133],57:[2,133],72:[2,133],77:[2,133],85:[2,133],90:[2,133],92:[2,133],97:[1,252],101:[2,133],103:[2,133],104:[2,133],105:[2,133],109:[2,133],117:[2,133],125:[2,133],127:[2,133],128:[2,133],131:[2,133],132:[2,133],133:[2,133],134:[2,133],135:[2,133],136:[2,133]},{5:253,25:[1,5]},{27:254,28:[1,73]},{119:255,121:216,122:[1,217]},{26:[1,256],120:[1,257],121:258,122:[1,217]},{26:[2,174],120:[2,174],122:[2,174]},{8:260,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],94:259,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,97],5:261,6:[2,97],25:[1,5],26:[2,97],49:[2,97],54:[2,97],57:[2,97],72:[2,97],77:[2,97],85:[2,97],90:[2,97],92:[2,97],101:[2,97],102:87,103:[1,65],104:[2,97],105:[1,66],108:88,109:[1,68],110:69,117:[2,97],125:[2,97],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,100],6:[2,100],25:[2,100],26:[2,100],49:[2,100],54:[2,100],57:[2,100],72:[2,100],77:[2,100],85:[2,100],90:[2,100],92:[2,100],101:[2,100],103:[2,100],104:[2,100],105:[2,100],109:[2,100],117:[2,100],125:[2,100],127:[2,100],128:[2,100],131:[2,100],132:[2,100],133:[2,100],134:[2,100],135:[2,100],136:[2,100]},{8:262,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,138],6:[2,138],25:[2,138],26:[2,138],49:[2,138],54:[2,138],57:[2,138],66:[2,138],67:[2,138],68:[2,138],70:[2,138],72:[2,138],73:[2,138],77:[2,138],83:[2,138],84:[2,138],85:[2,138],90:[2,138],92:[2,138],101:[2,138],103:[2,138],104:[2,138],105:[2,138],109:[2,138],117:[2,138],125:[2,138],127:[2,138],128:[2,138],131:[2,138],132:[2,138],133:[2,138],134:[2,138],135:[2,138],136:[2,138]},{6:[1,74],26:[1,263]},{8:264,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,67],12:[2,117],25:[2,67],28:[2,117],30:[2,117],31:[2,117],33:[2,117],34:[2,117],35:[2,117],36:[2,117],37:[2,117],38:[2,117],45:[2,117],46:[2,117],47:[2,117],51:[2,117],52:[2,117],54:[2,67],75:[2,117],78:[2,117],82:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,67],95:[2,117],99:[2,117],100:[2,117],103:[2,117],105:[2,117],107:[2,117],109:[2,117],118:[2,117],124:[2,117],126:[2,117],127:[2,117],128:[2,117],129:[2,117],130:[2,117]},{6:[1,266],25:[1,267],90:[1,265]},{6:[2,54],8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[2,54],26:[2,54],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],85:[2,54],87:[1,58],88:[1,59],89:[1,57],90:[2,54],93:268,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],26:[2,53],53:269,54:[1,226]},{1:[2,178],6:[2,178],25:[2,178],26:[2,178],49:[2,178],54:[2,178],57:[2,178],72:[2,178],77:[2,178],85:[2,178],90:[2,178],92:[2,178],101:[2,178],103:[2,178],104:[2,178],105:[2,178],109:[2,178],117:[2,178],120:[2,178],125:[2,178],127:[2,178],128:[2,178],131:[2,178],132:[2,178],133:[2,178],134:[2,178],135:[2,178],136:[2,178]},{8:270,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:271,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{115:[2,156],116:[2,156]},{27:158,28:[1,73],44:159,58:160,59:161,75:[1,70],88:[1,113],89:[1,114],114:272},{1:[2,163],6:[2,163],25:[2,163],26:[2,163],49:[2,163],54:[2,163],57:[2,163],72:[2,163],77:[2,163],85:[2,163],90:[2,163],92:[2,163],101:[2,163],102:87,103:[2,163],104:[1,273],105:[2,163],108:88,109:[2,163],110:69,117:[1,274],125:[2,163],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,164],6:[2,164],25:[2,164],26:[2,164],49:[2,164],54:[2,164],57:[2,164],72:[2,164],77:[2,164],85:[2,164],90:[2,164],92:[2,164],101:[2,164],102:87,103:[2,164],104:[1,275],105:[2,164],108:88,109:[2,164],110:69,117:[2,164],125:[2,164],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,277],25:[1,278],77:[1,276]},{6:[2,54],11:168,25:[2,54],26:[2,54],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:279,42:167,44:171,46:[1,46],77:[2,54],88:[1,113]},{8:280,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,281],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,85],6:[2,85],25:[2,85],26:[2,85],40:[2,85],49:[2,85],54:[2,85],57:[2,85],66:[2,85],67:[2,85],68:[2,85],70:[2,85],72:[2,85],73:[2,85],77:[2,85],79:[2,85],83:[2,85],84:[2,85],85:[2,85],90:[2,85],92:[2,85],101:[2,85],103:[2,85],104:[2,85],105:[2,85],109:[2,85],117:[2,85],125:[2,85],127:[2,85],128:[2,85],129:[2,85],130:[2,85],131:[2,85],132:[2,85],133:[2,85],134:[2,85],135:[2,85],136:[2,85],137:[2,85]},{8:282,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,72:[2,120],75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{72:[2,121],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,37],6:[2,37],25:[2,37],26:[2,37],49:[2,37],54:[2,37],57:[2,37],72:[2,37],77:[2,37],85:[2,37],90:[2,37],92:[2,37],101:[2,37],102:87,103:[2,37],104:[2,37],105:[2,37],108:88,109:[2,37],110:69,117:[2,37],125:[2,37],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{26:[1,283],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,266],25:[1,267],85:[1,284]},{6:[2,67],25:[2,67],26:[2,67],54:[2,67],85:[2,67],90:[2,67]},{5:285,25:[1,5]},{6:[2,57],25:[2,57],26:[2,57],49:[2,57],54:[2,57]},{27:109,28:[1,73],44:110,55:286,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[2,55],25:[2,55],26:[2,55],27:109,28:[1,73],44:110,48:287,54:[2,55],55:107,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[2,62],25:[2,62],26:[2,62],49:[2,62],54:[2,62],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{26:[1,288],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{5:289,25:[1,5],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{5:290,25:[1,5]},{1:[2,134],6:[2,134],25:[2,134],26:[2,134],49:[2,134],54:[2,134],57:[2,134],72:[2,134],77:[2,134],85:[2,134],90:[2,134],92:[2,134],101:[2,134],103:[2,134],104:[2,134],105:[2,134],109:[2,134],117:[2,134],125:[2,134],127:[2,134],128:[2,134],131:[2,134],132:[2,134],133:[2,134],134:[2,134],135:[2,134],136:[2,134]},{5:291,25:[1,5]},{26:[1,292],120:[1,293],121:258,122:[1,217]},{1:[2,172],6:[2,172],25:[2,172],26:[2,172],49:[2,172],54:[2,172],57:[2,172],72:[2,172],77:[2,172],85:[2,172],90:[2,172],92:[2,172],101:[2,172],103:[2,172],104:[2,172],105:[2,172],109:[2,172],117:[2,172],125:[2,172],127:[2,172],128:[2,172],131:[2,172],132:[2,172],133:[2,172],134:[2,172],135:[2,172],136:[2,172]},{5:294,25:[1,5]},{26:[2,175],120:[2,175],122:[2,175]},{5:295,25:[1,5],54:[1,296]},{25:[2,130],54:[2,130],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,98],6:[2,98],25:[2,98],26:[2,98],49:[2,98],54:[2,98],57:[2,98],72:[2,98],77:[2,98],85:[2,98],90:[2,98],92:[2,98],101:[2,98],103:[2,98],104:[2,98],105:[2,98],109:[2,98],117:[2,98],125:[2,98],127:[2,98],128:[2,98],131:[2,98],132:[2,98],133:[2,98],134:[2,98],135:[2,98],136:[2,98]},{1:[2,101],5:297,6:[2,101],25:[1,5],26:[2,101],49:[2,101],54:[2,101],57:[2,101],72:[2,101],77:[2,101],85:[2,101],90:[2,101],92:[2,101],101:[2,101],102:87,103:[1,65],104:[2,101],105:[1,66],108:88,109:[1,68],110:69,117:[2,101],125:[2,101],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{101:[1,298]},{90:[1,299],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,115],6:[2,115],25:[2,115],26:[2,115],40:[2,115],49:[2,115],54:[2,115],57:[2,115],66:[2,115],67:[2,115],68:[2,115],70:[2,115],72:[2,115],73:[2,115],77:[2,115],83:[2,115],84:[2,115],85:[2,115],90:[2,115],92:[2,115],101:[2,115],103:[2,115],104:[2,115],105:[2,115],109:[2,115],115:[2,115],116:[2,115],117:[2,115],125:[2,115],127:[2,115],128:[2,115],131:[2,115],132:[2,115],133:[2,115],134:[2,115],135:[2,115],136:[2,115]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],93:300,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:301,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,124],25:[2,124],26:[2,124],54:[2,124],85:[2,124],90:[2,124]},{6:[1,266],25:[1,267],26:[1,302]},{1:[2,141],6:[2,141],25:[2,141],26:[2,141],49:[2,141],54:[2,141],57:[2,141],72:[2,141],77:[2,141],85:[2,141],90:[2,141],92:[2,141],101:[2,141],102:87,103:[1,65],104:[2,141],105:[1,66],108:88,109:[1,68],110:69,117:[2,141],125:[2,141],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,143],6:[2,143],25:[2,143],26:[2,143],49:[2,143],54:[2,143],57:[2,143],72:[2,143],77:[2,143],85:[2,143],90:[2,143],92:[2,143],101:[2,143],102:87,103:[1,65],104:[2,143],105:[1,66],108:88,109:[1,68],110:69,117:[2,143],125:[2,143],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{115:[2,162],116:[2,162]},{8:303,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:304,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:305,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,89],6:[2,89],25:[2,89],26:[2,89],40:[2,89],49:[2,89],54:[2,89],57:[2,89],66:[2,89],67:[2,89],68:[2,89],70:[2,89],72:[2,89],73:[2,89],77:[2,89],83:[2,89],84:[2,89],85:[2,89],90:[2,89],92:[2,89],101:[2,89],103:[2,89],104:[2,89],105:[2,89],109:[2,89],115:[2,89],116:[2,89],117:[2,89],125:[2,89],127:[2,89],128:[2,89],131:[2,89],132:[2,89],133:[2,89],134:[2,89],135:[2,89],136:[2,89]},{11:168,27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:306,42:167,44:171,46:[1,46],88:[1,113]},{6:[2,90],11:168,25:[2,90],26:[2,90],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:166,42:167,44:171,46:[1,46],54:[2,90],76:307,88:[1,113]},{6:[2,92],25:[2,92],26:[2,92],54:[2,92],77:[2,92]},{6:[2,40],25:[2,40],26:[2,40],54:[2,40],77:[2,40],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:308,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{72:[2,119],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,38],6:[2,38],25:[2,38],26:[2,38],49:[2,38],54:[2,38],57:[2,38],72:[2,38],77:[2,38],85:[2,38],90:[2,38],92:[2,38],101:[2,38],103:[2,38],104:[2,38],105:[2,38],109:[2,38],117:[2,38],125:[2,38],127:[2,38],128:[2,38],131:[2,38],132:[2,38],133:[2,38],134:[2,38],135:[2,38],136:[2,38]},{1:[2,110],6:[2,110],25:[2,110],26:[2,110],49:[2,110],54:[2,110],57:[2,110],66:[2,110],67:[2,110],68:[2,110],70:[2,110],72:[2,110],73:[2,110],77:[2,110],83:[2,110],84:[2,110],85:[2,110],90:[2,110],92:[2,110],101:[2,110],103:[2,110],104:[2,110],105:[2,110],109:[2,110],117:[2,110],125:[2,110],127:[2,110],128:[2,110],131:[2,110],132:[2,110],133:[2,110],134:[2,110],135:[2,110],136:[2,110]},{1:[2,49],6:[2,49],25:[2,49],26:[2,49],49:[2,49],54:[2,49],57:[2,49],72:[2,49],77:[2,49],85:[2,49],90:[2,49],92:[2,49],101:[2,49],103:[2,49],104:[2,49],105:[2,49],109:[2,49],117:[2,49],125:[2,49],127:[2,49],128:[2,49],131:[2,49],132:[2,49],133:[2,49],134:[2,49],135:[2,49],136:[2,49]},{6:[2,58],25:[2,58],26:[2,58],49:[2,58],54:[2,58]},{6:[2,53],25:[2,53],26:[2,53],53:309,54:[1,202]},{1:[2,200],6:[2,200],25:[2,200],26:[2,200],49:[2,200],54:[2,200],57:[2,200],72:[2,200],77:[2,200],85:[2,200],90:[2,200],92:[2,200],101:[2,200],103:[2,200],104:[2,200],105:[2,200],109:[2,200],117:[2,200],125:[2,200],127:[2,200],128:[2,200],131:[2,200],132:[2,200],133:[2,200],134:[2,200],135:[2,200],136:[2,200]},{1:[2,179],6:[2,179],25:[2,179],26:[2,179],49:[2,179],54:[2,179],57:[2,179],72:[2,179],77:[2,179],85:[2,179],90:[2,179],92:[2,179],101:[2,179],103:[2,179],104:[2,179],105:[2,179],109:[2,179],117:[2,179],120:[2,179],125:[2,179],127:[2,179],128:[2,179],131:[2,179],132:[2,179],133:[2,179],134:[2,179],135:[2,179],136:[2,179]},{1:[2,135],6:[2,135],25:[2,135],26:[2,135],49:[2,135],54:[2,135],57:[2,135],72:[2,135],77:[2,135],85:[2,135],90:[2,135],92:[2,135],101:[2,135],103:[2,135],104:[2,135],105:[2,135],109:[2,135],117:[2,135],125:[2,135],127:[2,135],128:[2,135],131:[2,135],132:[2,135],133:[2,135],134:[2,135],135:[2,135],136:[2,135]},{1:[2,136],6:[2,136],25:[2,136],26:[2,136],49:[2,136],54:[2,136],57:[2,136],72:[2,136],77:[2,136],85:[2,136],90:[2,136],92:[2,136],97:[2,136],101:[2,136],103:[2,136],104:[2,136],105:[2,136],109:[2,136],117:[2,136],125:[2,136],127:[2,136],128:[2,136],131:[2,136],132:[2,136],133:[2,136],134:[2,136],135:[2,136],136:[2,136]},{1:[2,170],6:[2,170],25:[2,170],26:[2,170],49:[2,170],54:[2,170],57:[2,170],72:[2,170],77:[2,170],85:[2,170],90:[2,170],92:[2,170],101:[2,170],103:[2,170],104:[2,170],105:[2,170],109:[2,170],117:[2,170],125:[2,170],127:[2,170],128:[2,170],131:[2,170],132:[2,170],133:[2,170],134:[2,170],135:[2,170],136:[2,170]},{5:310,25:[1,5]},{26:[1,311]},{6:[1,312],26:[2,176],120:[2,176],122:[2,176]},{8:313,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,102],6:[2,102],25:[2,102],26:[2,102],49:[2,102],54:[2,102],57:[2,102],72:[2,102],77:[2,102],85:[2,102],90:[2,102],92:[2,102],101:[2,102],103:[2,102],104:[2,102],105:[2,102],109:[2,102],117:[2,102],125:[2,102],127:[2,102],128:[2,102],131:[2,102],132:[2,102],133:[2,102],134:[2,102],135:[2,102],136:[2,102]},{1:[2,139],6:[2,139],25:[2,139],26:[2,139],49:[2,139],54:[2,139],57:[2,139],66:[2,139],67:[2,139],68:[2,139],70:[2,139],72:[2,139],73:[2,139],77:[2,139],83:[2,139],84:[2,139],85:[2,139],90:[2,139],92:[2,139],101:[2,139],103:[2,139],104:[2,139],105:[2,139],109:[2,139],117:[2,139],125:[2,139],127:[2,139],128:[2,139],131:[2,139],132:[2,139],133:[2,139],134:[2,139],135:[2,139],136:[2,139]},{1:[2,118],6:[2,118],25:[2,118],26:[2,118],49:[2,118],54:[2,118],57:[2,118],66:[2,118],67:[2,118],68:[2,118],70:[2,118],72:[2,118],73:[2,118],77:[2,118],83:[2,118],84:[2,118],85:[2,118],90:[2,118],92:[2,118],101:[2,118],103:[2,118],104:[2,118],105:[2,118],109:[2,118],117:[2,118],125:[2,118],127:[2,118],128:[2,118],131:[2,118],132:[2,118],133:[2,118],134:[2,118],135:[2,118],136:[2,118]},{6:[2,125],25:[2,125],26:[2,125],54:[2,125],85:[2,125],90:[2,125]},{6:[2,53],25:[2,53],26:[2,53],53:314,54:[1,226]},{6:[2,126],25:[2,126],26:[2,126],54:[2,126],85:[2,126],90:[2,126]},{1:[2,165],6:[2,165],25:[2,165],26:[2,165],49:[2,165],54:[2,165],57:[2,165],72:[2,165],77:[2,165],85:[2,165],90:[2,165],92:[2,165],101:[2,165],102:87,103:[2,165],104:[2,165],105:[2,165],108:88,109:[2,165],110:69,117:[1,315],125:[2,165],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,167],6:[2,167],25:[2,167],26:[2,167],49:[2,167],54:[2,167],57:[2,167],72:[2,167],77:[2,167],85:[2,167],90:[2,167],92:[2,167],101:[2,167],102:87,103:[2,167],104:[1,316],105:[2,167],108:88,109:[2,167],110:69,117:[2,167],125:[2,167],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,166],6:[2,166],25:[2,166],26:[2,166],49:[2,166],54:[2,166],57:[2,166],72:[2,166],77:[2,166],85:[2,166],90:[2,166],92:[2,166],101:[2,166],102:87,103:[2,166],104:[2,166],105:[2,166],108:88,109:[2,166],110:69,117:[2,166],125:[2,166],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[2,93],25:[2,93],26:[2,93],54:[2,93],77:[2,93]},{6:[2,53],25:[2,53],26:[2,53],53:317,54:[1,236]},{26:[1,318],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,247],25:[1,248],26:[1,319]},{26:[1,320]},{1:[2,173],6:[2,173],25:[2,173],26:[2,173],49:[2,173],54:[2,173],57:[2,173],72:[2,173],77:[2,173],85:[2,173],90:[2,173],92:[2,173],101:[2,173],103:[2,173],104:[2,173],105:[2,173],109:[2,173],117:[2,173],125:[2,173],127:[2,173],128:[2,173],131:[2,173],132:[2,173],133:[2,173],134:[2,173],135:[2,173],136:[2,173]},{26:[2,177],120:[2,177],122:[2,177]},{25:[2,131],54:[2,131],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,266],25:[1,267],26:[1,321]},{8:322,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:323,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[1,277],25:[1,278],26:[1,324]},{6:[2,41],25:[2,41],26:[2,41],54:[2,41],77:[2,41]},{6:[2,59],25:[2,59],26:[2,59],49:[2,59],54:[2,59]},{1:[2,171],6:[2,171],25:[2,171],26:[2,171],49:[2,171],54:[2,171],57:[2,171],72:[2,171],77:[2,171],85:[2,171],90:[2,171],92:[2,171],101:[2,171],103:[2,171],104:[2,171],105:[2,171],109:[2,171],117:[2,171],125:[2,171],127:[2,171],128:[2,171],131:[2,171],132:[2,171],133:[2,171],134:[2,171],135:[2,171],136:[2,171]},{6:[2,127],25:[2,127],26:[2,127],54:[2,127],85:[2,127],90:[2,127]},{1:[2,168],6:[2,168],25:[2,168],26:[2,168],49:[2,168],54:[2,168],57:[2,168],72:[2,168],77:[2,168],85:[2,168],90:[2,168],92:[2,168],101:[2,168],102:87,103:[2,168],104:[2,168],105:[2,168],108:88,109:[2,168],110:69,117:[2,168],125:[2,168],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,169],6:[2,169],25:[2,169],26:[2,169],49:[2,169],54:[2,169],57:[2,169],72:[2,169],77:[2,169],85:[2,169],90:[2,169],92:[2,169],101:[2,169],102:87,103:[2,169],104:[2,169],105:[2,169],108:88,109:[2,169],110:69,117:[2,169],125:[2,169],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[2,94],25:[2,94],26:[2,94],54:[2,94],77:[2,94]}],defaultActions:{60:[2,51],61:[2,52],75:[2,3],94:[2,108],189:[2,88]},parseError:function(a,b){throw new Error(a)},parse:function(a){function o(){var a;a=b.lexer.lex()||1,typeof a!="number"&&(a=b.symbols_[a]||a);return a}function n(a){c.length=c.length-2*a,d.length=d.length-a,e.length=e.length-a}var b=this,c=[0],d=[null],e=[],f=this.table,g="",h=0,i=0,j=0,k=2,l=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var m=this.lexer.yylloc;e.push(m),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var p,q,r,s,t,u,v={},w,x,y,z;for(;;){r=c[c.length-1],this.defaultActions[r]?s=this.defaultActions[r]:(p==null&&(p=o()),s=f[r]&&f[r][p]);_handle_error:if(typeof s=="undefined"||!s.length||!s[0]){if(!j){z=[];for(w in f[r])this.terminals_[w]&&w>2&&z.push("'"+this.terminals_[w]+"'");var A="";this.lexer.showPosition?A="Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+z.join(", ")+", got '"+this.terminals_[p]+"'":A="Parse error on line "+(h+1)+": Unexpected "+(p==1?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(A,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:m,expected:z})}if(j==3){if(p==l)throw new Error(A||"Parsing halted.");i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,p=o()}for(;;){if(k.toString()in f[r])break;if(r==0)throw new Error(A||"Parsing halted.");n(1),r=c[c.length-1]}q=p,p=k,r=c[c.length-1],s=f[r]&&f[r][k],j=3}if(s[0]instanceof Array&&s.length>1)throw new Error("Parse Error: multiple actions possible at state: "+r+", token: "+p);switch(s[0]){case 1:c.push(p),d.push(this.lexer.yytext),e.push(this.lexer.yylloc),c.push(s[1]),p=null,q?(p=q,q=null):(i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,j>0&&j--);break;case 2:x=this.productions_[s[1]][1],v.$=d[d.length-x],v._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column},u=this.performAction.call(v,g,i,h,this.yy,s[1],d,e);if(typeof u!="undefined")return u;x&&(c=c.slice(0,-1*x*2),d=d.slice(0,-1*x),e=e.slice(0,-1*x)),c.push(this.productions_[s[1]][0]),d.push(v.$),e.push(v._$),y=f[c[c.length-2]][c[c.length-1]],c.push(y);break;case 3:return!0}}return!0}};undefined;return a}();typeof require!="undefined"&&typeof a!="undefined"&&(a.parser=b,a.parse=function(){return b.parse.apply(b,arguments)},a.main=function(b){if(!b[1])throw new Error("Usage: "+b[0]+" FILE");if(typeof process!="undefined")var c=require("fs").readFileSync(require("path").join(process.cwd(),b[1]),"utf8");else var d=require("file").path(require("file").cwd()),c=d.join(b[1]).read({charset:"utf-8"});return a.parser.parse(c)},typeof module!="undefined"&&require.main===module&&a.main(typeof process!="undefined"?process.argv.slice(1):require("system").args))},require["./scope"]=new function(){var a=this;(function(){var b,c,d,e;e=require("./helpers"),c=e.extend,d=e.last,a.Scope=b=function(){function a(b,c,d){this.parent=b,this.expressions=c,this.method=d,this.variables=[{name:"arguments",type:"arguments"}],this.positions={},this.parent||(a.root=this)}a.root=null,a.prototype.add=function(a,b,c){if(this.shared&&!c)return this.parent.add(a,b,c);return Object.prototype.hasOwnProperty.call(this.positions,a)?this.variables[this.positions[a]].type=b:this.positions[a]=this.variables.push({name:a,type:b})-1},a.prototype.namedMethod=function(){if(this.method.name||!this.parent)return this.method;return this.parent.namedMethod()},a.prototype.find=function(a){if(this.check(a))return!0;this.add(a,"var");return!1},a.prototype.parameter=function(a){if(!this.shared||!this.parent.check(a,!0))return this.add(a,"param")},a.prototype.check=function(a){var b;return!!(this.type(a)||((b=this.parent)!=null?b.check(a):void 0))},a.prototype.temporary=function(a,b){return a.length>1?"_"+a+(b>1?b-1:""):"_"+(b+parseInt(a,36)).toString(36).replace(/\d/g,"a")},a.prototype.type=function(a){var b,c,d,e;e=this.variables;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.name===a)return b.type}return null},a.prototype.freeVariable=function(a,b){var c,d;b==null&&(b=!0),c=0;while(this.check(d=this.temporary(a,c)))c++;b&&this.add(d,"var",!0);return d},a.prototype.assign=function(a,b){this.add(a,{value:b,assigned:!0},!0);return this.hasAssignments=!0},a.prototype.hasDeclarations=function(){return!!this.declaredVariables().length},a.prototype.declaredVariables=function(){var a,b,c,d,e,f;a=[],b=[],f=this.variables;for(d=0,e=f.length;d<e;d++)c=f[d],c.type==="var"&&(c.name.charAt(0)==="_"?b:a).push(c.name);return a.sort().concat(b.sort())},a.prototype.assignedVariables=function(){var a,b,c,d,e;d=this.variables,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],a.type.assigned&&e.push(""+a.name+" = "+a.type.value);return e};return a}()}).call(this)},require["./nodes"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk=({}).hasOwnProperty,bl=function(a,b){function d(){this.constructor=a}for(var c in b)bk.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype;return a},bm=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};N=require("./scope").Scope,bi=require("./lexer"),I=bi.RESERVED,M=bi.STRICT_PROSCRIBED,bj=require("./helpers"),Z=bj.compact,bb=bj.flatten,ba=bj.extend,bd=bj.merge,$=bj.del,bf=bj.starts,_=bj.ends,bc=bj.last,a.extend=ba,Y=function(){return!0},D=function(){return!1},S=function(){return this},C=function(){this.negated=!this.negated;return this},a.Base=e=function(){function a(){}a.prototype.compile=function(a,b){var c;a=ba({},a),b&&(a.level=b),c=this.unfoldSoak(a)||this,c.tab=a.indent;return a.level===z||!c.isStatement(a)?c.compileNode(a):c.compileClosure(a)},a.prototype.compileClosure=function(a){if(this.jumps())throw SyntaxError("cannot use a pure statement in an expression.");a.sharedScope=!0;return i.wrap(this).compileNode(a)},a.prototype.cache=function(a,b,c){var e,f;if(!this.isComplex()){e=b?this.compile(a,b):this;return[e,e]}e=new A(c||a.scope.freeVariable("ref")),f=new d(e,this);return b?[f.compile(a,b),e.value]:[f,e]},a.prototype.compileLoopReference=function(a,b){var c,d;c=d=this.compile(a,w),-Infinity<+c&&+c<Infinity||o.test(c)&&a.scope.check(c,!0)||(c=""+(d=a.scope.freeVariable(b))+" = "+c);return[c,d]},a.prototype.makeReturn=function(a){var b;b=this.unwrapAll();return a?new g(new A(""+a+".push"),[b]):new K(b)},a.prototype.contains=function(a){var b;b=!1,this.traverseChildren(!1,function(c){if(a(c)){b=!0;return!1}});return b},a.prototype.containsType=function(a){return this instanceof a||this.contains(function(b){return b instanceof a})},a.prototype.lastNonComment=function(a){var b;b=a.length;while(b--)if(!(a[b]instanceof k))return a[b];return null},a.prototype.toString=function(a,b){var c;a==null&&(a=""),b==null&&(b=this.constructor.name),c="\n"+a+b,this.soak&&(c+="?"),this.eachChild(function(b){return c+=b.toString(a+R)});return c},a.prototype.eachChild=function(a){var b,c,d,e,f,g,h,i;if(!this.children)return this;h=this.children;for(d=0,f=h.length;d<f;d++){b=h[d];if(this[b]){i=bb([this[b]]);for(e=0,g=i.length;e<g;e++){c=i[e];if(a(c)===!1)return this}}}return this},a.prototype.traverseChildren=function(a,b){return this.eachChild(function(c){if(b(c)===!1)return!1;return c.traverseChildren(a,b)})},a.prototype.invert=function(){return new F("!",this)},a.prototype.unwrapAll=function(){var a;a=this;while(a!==(a=a.unwrap()))continue;return a},a.prototype.children=[],a.prototype.isStatement=D,a.prototype.jumps=D,a.prototype.isComplex=Y,a.prototype.isChainable=D,a.prototype.isAssignable=D,a.prototype.unwrap=S,a.prototype.unfoldSoak=D,a.prototype.assigns=D;return a}(),a.Block=f=function(a){function b(a){this.expressions=Z(bb(a||[]))}bl(b,a),b.prototype.children=["expressions"],b.prototype.push=function(a){this.expressions.push(a);return this},b.prototype.pop=function(){return this.expressions.pop()},b.prototype.unshift=function(a){this.expressions.unshift(a);return this},b.prototype.unwrap=function(){return this.expressions.length===1?this.expressions[0]:this},b.prototype.isEmpty=function(){return!this.expressions.length},b.prototype.isStatement=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.isStatement(a))return!0}return!1},b.prototype.jumps=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.jumps(a))return b}},b.prototype.makeReturn=function(a){var b,c;c=this.expressions.length;while(c--){b=this.expressions[c];if(!(b instanceof k)){this.expressions[c]=b.makeReturn(a),b instanceof K&&!b.expression&&this.expressions.splice(c,1);break}}return this},b.prototype.compile=function(a,c){a==null&&(a={});return a.scope?b.__super__.compile.call(this,a,c):this.compileRoot(a)},b.prototype.compileNode=function(a){var c,d,e,f,g,h,i;this.tab=a.indent,f=a.level===z,d=[],i=this.expressions;for(g=0,h=i.length;g<h;g++)e=i[g],e=e.unwrapAll(),e=e.unfoldSoak(a)||e,e instanceof b?d.push(e.compileNode(a)):f?(e.front=!0,c=e.compile(a),e.isStatement(a)||(c=""+this.tab+c+";",e instanceof A&&(c=""+c+"\n")),d.push(c)):d.push(e.compile(a,w));if(f)return this.spaced?"\n"+d.join("\n\n")+"\n":d.join("\n");c=d.join(", ")||"void 0";return d.length>1&&a.level>=w?"("+c+")":c},b.prototype.compileRoot=function(a){var b,c,d,e,f,g;a.indent=a.bare?"":R,a.scope=new N(null,this,null),a.level=z,this.spaced=!0,e="",a.bare||(f=function(){var a,b,e,f;e=this.expressions,f=[];for(d=a=0,b=e.length;a<b;d=++a){c=e[d];if(!(c.unwrap()instanceof k))break;f.push(c)}return f}.call(this),g=this.expressions.slice(f.length),this.expressions=f,f.length&&(e=""+this.compileNode(bd(a,{indent:""}))+"\n"),this.expressions=g),b=this.compileWithDeclarations(a);if(a.bare)return b;return""+e+"(function() {\n"+b+"\n}).call(this);\n"},b.prototype.compileWithDeclarations=function(a){var b,c,d,e,f,g,h,i,j,l,m,n,o,p;c=g="",n=this.expressions;for(f=l=0,m=n.length;l<m;f=++l){e=n[f],e=e.unwrap();if(!(e instanceof k||e instanceof A))break}a=bd(a,{level:z}),f&&(h=this.expressions.splice(f,9e9),o=[this.spaced,!1],j=o[0],this.spaced=o[1],p=[this.compileNode(a),j],c=p[0],this.spaced=p[1],this.expressions=h),g=this.compileNode(a),i=a.scope;if(i.expressions===this){d=a.scope.hasDeclarations(),b=i.hasAssignments;if(d||b)f&&(c+="\n"),c+=""+this.tab+"var ",d&&(c+=i.declaredVariables().join(", ")),b&&(d&&(c+=",\n"+(this.tab+R)),c+=i.assignedVariables().join(",\n"+(this.tab+R))),c+=";\n"}return c+g},b.wrap=function(a){if(a.length===1&&a[0]instanceof b)return a[0];return new b(a)};return b}(e),a.Literal=A=function(a){function b(a){this.value=a}bl(b,a),b.prototype.makeReturn=function(){return this.isStatement()?this:b.__super__.makeReturn.apply(this,arguments)},b.prototype.isAssignable=function(){return o.test(this.value)},b.prototype.isStatement=function(){var a;return(a=this.value)==="break"||a==="continue"||a==="debugger"},b.prototype.isComplex=D,b.prototype.assigns=function(a){return a===this.value},b.prototype.jumps=function(a){if(this.value==="break"&&!((a!=null?a.loop:void 0)||(a!=null?a.block:void 0)))return this;if(this.value==="continue"&&(a!=null?!a.loop:!void 0))return this},b.prototype.compileNode=function(a){var b,c;b=this.value==="this"?((c=a.scope.method)!=null?c.bound:void 0)?a.scope.method.context:this.value:this.value.reserved?'"'+this.value+'"':this.value;return this.isStatement()?""+this.tab+b+";":b},b.prototype.toString=function(){return' "'+this.value+'"'};return b}(e),a.Undefined=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(a){return a.level>=u?"(void 0)":"void 0"};return b}(e),a.Null=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(){return"null"};return b}(e),a.Bool=function(a){function b(a){this.val=a}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(){return this.val};return b}(e),a.Return=K=function(a){function b(a){a&&!a.unwrap().isUndefined&&(this.expression=a)}bl(b,a),b.prototype.children=["expression"],b.prototype.isStatement=Y,b.prototype.makeReturn=S,b.prototype.jumps=S,b.prototype.compile=function(a,c){var d,e;d=(e=this.expression)!=null?e.makeReturn():void 0;return!d||d instanceof b?b.__super__.compile.call(this,a,c):d.compile(a,c)},b.prototype.compileNode=function(a){return this.tab+("return"+[this.expression?" "+this.expression.compile(a,y):void 0]+";")};return b}(e),a.Value=W=function(a){function b(a,c,d){if(!c&&a instanceof b)return a;this.base=a,this.properties=c||[],d&&(this[d]=!0);return this}bl(b,a),b.prototype.children=["base","properties"],b.prototype.add=function(a){this.properties=this.properties.concat(a);return this},b.prototype.hasProperties=function(){return!!this.properties.length},b.prototype.isArray=function(){return!this.properties.length&&this.base instanceof c},b.prototype.isComplex=function(){return this.hasProperties()||this.base.isComplex()},b.prototype.isAssignable=function(){return this.hasProperties()||this.base.isAssignable()},b.prototype.isSimpleNumber=function(){return this.base instanceof A&&L.test(this.base.value)},b.prototype.isString=function(){return this.base instanceof A&&q.test(this.base.value)},b.prototype.isAtomic=function(){var a,b,c,d;d=this.properties.concat(this.base);for(b=0,c=d.length;b<c;b++){a=d[b];if(a.soak||a instanceof g)return!1}return!0},b.prototype.isStatement=function(a){return!this.properties.length&&this.base.isStatement(a)},b.prototype.assigns=function(a){return!this.properties.length&&this.base.assigns(a)},b.prototype.jumps=function(a){return!this.properties.length&&this.base.jumps(a)},b.prototype.isObject=function(a){if(this.properties.length)return!1;return this.base instanceof E&&(!a||this.base.generated)},b.prototype.isSplice=function(){return bc(this.properties)instanceof O},b.prototype.unwrap=function(){return this.properties.length?this:this.base},b.prototype.cacheReference=function(a){var c,e,f,g;f=bc(this.properties);if(this.properties.length<2&&!this.base.isComplex()&&(f!=null?!f.isComplex():!void 0))return[this,this];c=new b(this.base,this.properties.slice(0,-1)),c.isComplex()&&(e=new A(a.scope.freeVariable("base")),c=new b(new H(new d(e,c))));if(!f)return[c,e];f.isComplex()&&(g=new A(a.scope.freeVariable("name")),f=new t(new d(g,f.index)),g=new t(g));return[c.add(f),new b(e||c.base,[g||f])]},b.prototype.compileNode=function(a){var b,c,d,e,f;this.base.front=this.front,d=this.properties,b=this.base.compile(a,d.length?u:null),(this.base instanceof H||d.length)&&L.test(b)&&(b=""+b+".");for(e=0,f=d.length;e<f;e++)c=d[e],b+=c.compile(a);return b},b.prototype.unfoldSoak=function(a){var c,e=this;if(this.unfoldedSoak!=null)return this.unfoldedSoak;c=function(){var c,f,g,h,i,j,k,m,n;if(g=e.base.unfoldSoak(a)){Array.prototype.push.apply(g.body.properties,e.properties);return g}n=e.properties;for(f=k=0,m=n.length;k<m;f=++k){h=n[f];if(!h.soak)continue;h.soak=!1,c=new b(e.base,e.properties.slice(0,f)),j=new b(e.base,e.properties.slice(f)),c.isComplex()&&(i=new A(a.scope.freeVariable("ref")),c=new H(new d(i,c)),j.base=i);return new r(new l(c),j,{soak:!0})}return null}();return this.unfoldedSoak=c||!1};return b}(e),a.Comment=k=function(a){function b(a){this.comment=a}bl(b,a),b.prototype.isStatement=Y,b.prototype.makeReturn=S,b.prototype.compileNode=function(a,b){var c;c="/*"+be(this.comment,this.tab)+("\n"+this.tab+"*/\n"),(b||a.level)===z&&(c=a.indent+c);return c};return b}(e),a.Call=g=function(a){function c(a,b,c){this.args=b!=null?b:[],this.soak=c,this.isNew=!1,this.isSuper=a==="super",this.variable=this.isSuper?null:a}bl(c,a),c.prototype.children=["variable","args"],c.prototype.newInstance=function(){var a,b;a=((b=this.variable)!=null?b.base:void 0)||this.variable,a instanceof c&&!a.isNew?a.newInstance():this.isNew=!0;return this},c.prototype.superReference=function(a){var c,d,e;d=a.scope.namedMethod();if(!d)throw SyntaxError("cannot call super outside of a function.");e=d.name;if(e==null)throw SyntaxError("cannot call super on an anonymous function.");if(d.klass){c=[new b(new A("__super__"))],d["static"]&&c.push(new b(new A("constructor"))),c.push(new b(new A(e)));return(new W(new A(d.klass),c)).compile(a)}return""+e+".__super__.constructor"},c.prototype.superThis=function(a){var b;b=a.scope.method;return b&&!b.klass&&b.context||"this"},c.prototype.unfoldSoak=function(a){var b,d,e,f,g,h,i,j,k;if(this.soak){if(this.variable){if(d=bg(a,this,"variable"))return d;j=(new W(this.variable)).cacheReference(a),e=j[0],g=j[1]}else e=new A(this.superReference(a)),g=new W(e);g=new c(g,this.args),g.isNew=this.isNew,e=new A("typeof "+e.compile(a)+' === "function"');return new r(e,new W(g),{soak:!0})}b=this,f=[];for(;;){if(b.variable instanceof c){f.push(b),b=b.variable;continue}if(!(b.variable instanceof W))break;f.push(b);if(!((b=b.variable.base)instanceof c))break}k=f.reverse();for(h=0,i=k.length;h<i;h++)b=k[h],d&&(b.variable instanceof c?b.variable=d:b.variable.base=d),d=bg(a,b,"variable");return d},c.prototype.filterImplicitObjects=function(a){var b,c,e,f,g,h,i,j,l,m;c=[];for(h=0,j=a.length;h<j;h++){b=a[h];if(!((typeof b.isObject=="function"?b.isObject():void 0)&&b.base.generated)){c.push(b);continue}e=null,m=b.base.properties;for(i=0,l=m.length;i<l;i++)f=m[i],f instanceof d||f instanceof k?(e||c.push(e=new E(g=[],!0)),g.push(f)):(c.push(f),e=null)}return c},c.prototype.compileNode=function(a){var b,c,d,e;(e=this.variable)!=null&&(e.front=this.front);if(d=P.compileSplattedArray(a,this.args,!0))return this.compileSplat(a,d);c=this.filterImplicitObjects(this.args),c=function(){var d,e,f;f=[];for(d=0,e=c.length;d<e;d++)b=c[d],f.push(b.compile(a,w));return f}().join(", ");return this.isSuper?this.superReference(a)+(".call("+this.superThis(a)+(c&&", "+c)+")"):(this.isNew?"new ":"")+this.variable.compile(a,u)+("("+c+")")},c.prototype.compileSuper=function(a,b){return""+this.superReference(b)+".call("+this.superThis(b)+(a.length?", ":"")+a+")"},c.prototype.compileSplat=function(a,b){var c,d,e,f,g;if(this.isSuper)return""+this.superReference(a)+".apply("+this.superThis(a)+", "+b+")";if(this.isNew){e=this.tab+R;return"(function(func, args, ctor) {\n"+e+"ctor.prototype = func.prototype;\n"+e+"var child = new ctor, result = func.apply(child, args), t = typeof result;\n"+e+'return t == "object" || t == "function" ? result || child : child;\n'+this.tab+"})("+this.variable.compile(a,w)+", "+b+", function(){})"}c=new W(this.variable),(f=c.properties.pop())&&c.isComplex()?(g=a.scope.freeVariable("ref"),d="("+g+" = "+c.compile(a,w)+")"+f.compile(a)):(d=c.compile(a,u),L.test(d)&&(d="("+d+")"),f?(g=d,d+=f.compile(a)):g="null");return""+d+".apply("+g+", "+b+")"};return c}(e),a.Extends=m=function(a){function b(a,b){this.child=a,this.parent=b}bl(b,a),b.prototype.children=["child","parent"],b.prototype.compile=function(a){return(new g(new W(new A(bh("extends"))),[this.child,this.parent])).compile(a)};return b}(e),a.Access=b=function(a){function b(a,b){this.name=a,this.name.asKey=!0,this.soak=b==="soak"}bl(b,a),b.prototype.children=["name"],b.prototype.compile=function(a){var b;b=this.name.compile(a);return o.test(b)?"."+b:"["+b+"]"},b.prototype.isComplex=D;return b}(e),a.Index=t=function(a){function b(a){this.index=a}bl(b,a),b.prototype.children=["index"],b.prototype.compile=function(a){return"["+this.index.compile(a,y)+"]"},b.prototype.isComplex=function(){return this.index.isComplex()};return b}(e),a.Range=J=function(a){function b(a,b,c){this.from=a,this.to=b,this.exclusive=c==="exclusive",this.equals=this.exclusive?"":"="}bl(b,a),b.prototype.children=["from","to"],b.prototype.compileVariables=function(a){var b,c,d,e,f;a=bd(a,{top:!0}),c=this.from.cache(a,w),this.fromC=c[0],this.fromVar=c[1],d=this.to.cache(a,w),this.toC=d[0],this.toVar=d[1];if(b=$(a,"step"))e=b.cache(a,w),this.step=e[0],this.stepVar=e[1];f=[this.fromVar.match(L),this.toVar.match(L)],this.fromNum=f[0],this.toNum=f[1];if(this.stepVar)return this.stepNum=this.stepVar.match(L)},b.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;this.fromVar||this.compileVariables(a);if(!a.index)return this.compileArray(a);h=this.fromNum&&this.toNum,f=$(a,"index"),g=$(a,"name"),j=g&&g!==f,m=""+f+" = "+this.fromC,this.toC!==this.toVar&&(m+=", "+this.toC),this.step!==this.stepVar&&(m+=", "+this.step),n=[""+f+" <"+this.equals,""+f+" >"+this.equals],i=n[0],e=n[1],c=this.stepNum?+this.stepNum>0?""+i+" "+this.toVar:""+e+" "+this.toVar:h?(o=[+this.fromNum,+this.toNum],d=o[0],l=o[1],o,d<=l?""+i+" "+l:""+e+" "+l):(b=""+this.fromVar+" <= "+this.toVar,""+b+" ? "+i+" "+this.toVar+" : "+e+" "+this.toVar),k=this.stepVar?""+f+" += "+this.stepVar:h?j?d<=l?"++"+f:"--"+f:d<=l?""+f+"++":""+f+"--":j?""+b+" ? ++"+f+" : --"+f:""+b+" ? "+f+"++ : "+f+"--",j&&(m=""+g+" = "+m),j&&(k=""+g+" = "+k);return""+m+"; "+c+"; "+k},b.prototype.compileArray=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(this.fromNum&&this.toNum&&Math.abs(this.fromNum-this.toNum)<=20){j=function(){p=[];for(var a=n=+this.fromNum,b=+this.toNum;n<=b?a<=b:a>=b;n<=b?a++:a--)p.push(a);return p}.apply(this),this.exclusive&&j.pop();return"["+j.join(", ")+"]"}g=this.tab+R,f=a.scope.freeVariable("i"),k=a.scope.freeVariable("results"),i="\n"+g+k+" = [];",this.fromNum&&this.toNum?(a.index=f,c=this.compileNode(a)):(l=""+f+" = "+this.fromC+(this.toC!==this.toVar?", "+this.toC:""),d=""+this.fromVar+" <= "+this.toVar,c="var "+l+"; "+d+" ? "+f+" <"+this.equals+" "+this.toVar+" : "+f+" >"+this.equals+" "+this.toVar+"; "+d+" ? "+f+"++ : "+f+"--"),h="{ "+k+".push("+f+"); }\n"+g+"return "+k+";\n"+a.indent,e=function(a){return a!=null?a.contains(function(a){return a instanceof A&&a.value==="arguments"&&!a.asKey}):void 0};if(e(this.from)||e(this.to))b=", arguments";return"(function() {"+i+"\n"+g+"for ("+c+")"+h+"}).apply(this"+(b!=null?b:"")+")"};return b}(e),a.Slice=O=function(a){function b(a){this.range=a,b.__super__.constructor.call(this)}bl(b,a),b.prototype.children=["range"],b.prototype.compileNode=function(a){var b,c,d,e,f,g;g=this.range,e=g.to,c=g.from,d=c&&c.compile(a,y)||"0",b=e&&e.compile(a,y),e&&(!!this.range.exclusive||+b!==-1)&&(f=", "+(this.range.exclusive?b:L.test(b)?""+(+b+1):(b=e.compile(a,u),""+b+" + 1 || 9e9")));return".slice("+d+(f||"")+")"};return b}(e),a.Obj=E=function(a){function b(a,b){this.generated=b!=null?b:!1,this.objects=this.properties=a||[]}bl(b,a),b.prototype.children=["properties"],b.prototype.compileNode=function(a){var b,c,e,f,g,h,i,j,l,m,n,o,p,q,r,s;n=this.properties,m=[],s=this.properties;for(o=0,q=s.length;o<q;o++){j=s[o],j.isComplex()&&(j=j.variable);if(j!=null){l=j.unwrapAll().value.toString();if(bm.call(m,l)>=0)throw SyntaxError('multiple object literal properties named "'+l+'"');m.push(l)}}if(!n.length)return this.front?"({})":"{}";if(this.generated)for(p=0,r=n.length;p<r;p++){h=n[p];if(h instanceof W)throw new Error("cannot have an implicit value in an implicit object")}c=a.indent+=R,g=this.lastNonComment(this.properties),n=function(){var h,i,l;l=[];for(b=h=0,i=n.length;h<i;b=++h)j=n[b],f=b===n.length-1?"":j===g||j instanceof k?"\n":",\n",e=j instanceof k?"":c,j instanceof W&&j["this"]&&(j=new d(j.properties[0].name,j,"object")),j instanceof k||(j instanceof d||(j=new d(j,j,"object")),(j.variable.base||j.variable).asKey=!0),l.push(e+j.compile(a,z)+f);return l}(),n=n.join(""),i="{"+(n&&"\n"+n+"\n"+this.tab)+"}";return this.front?"("+i+")":i},b.prototype.assigns=function(a){var b,c,d,e;e=this.properties;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return b}(e),a.Arr=c=function(a){function b(a){this.objects=a||[]}bl(b,a),b.prototype.children=["objects"],b.prototype.filterImplicitObjects=g.prototype.filterImplicitObjects,b.prototype.compileNode=function(a){var b,c,d;if(!this.objects.length)return"[]";a.indent+=R,d=this.filterImplicitObjects(this.objects);if(b=P.compileSplattedArray(a,d))return b;b=function(){var b,e,f;f=[];for(b=0,e=d.length;b<e;b++)c=d[b],f.push(c.compile(a,w));return f}().join(", ");return b.indexOf("\n")>=0?"[\n"+a.indent+b+"\n"+this.tab+"]":"["+b+"]"},b.prototype.assigns=function(a){var b,c,d,e;e=this.objects;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return b}(e),a.Class=h=function(a){function c(a,b,c){this.variable=a,this.parent=b,this.body=c!=null?c:new f,this.boundFuncs=[],this.body.classBody=!0}bl(c,a),c.prototype.children=["variable","parent","body"],c.prototype.determineName=function(){var a,c;if(!this.variable)return null;a=(c=bc(this.variable.properties))?c instanceof b&&c.name.value:this.variable.base.value;if(bm.call(M,a)>=0)throw SyntaxError("variable name may not be "+a);return a&&(a=o.test(a)&&a)},c.prototype.setContext=function(a){return this.body.traverseChildren(!1,function(b){if(b.classBody)return!1;if(b instanceof A&&b.value==="this")return b.value=a;if(b instanceof j){b.klass=a;if(b.bound)return b.context=a}})},c.prototype.addBoundFunctions=function(a){var c,d,e,f,g,h;if(this.boundFuncs.length){g=this.boundFuncs,h=[];for(e=0,f=g.length;e<f;e++)c=g[e],d=(new W(new A("this"),[new b(c)])).compile(a),h.push(this.ctor.body.unshift(new A(""+d+" = "+bh("bind")+"("+d+", this)")));return h}},c.prototype.addProperties=function(a,c,e){var f,g,h,i,k;k=a.base.properties.slice(0),h=function(){var a;a=[];while(f=k.shift()){if(f instanceof d){g=f.variable.base,delete f.context,i=f.value;if(g.value==="constructor"){if(this.ctor)throw new Error("cannot define more than one constructor in a class");if(i.bound)throw new Error("cannot define a constructor as a bound function");i instanceof j?f=this.ctor=i:(this.externalCtor=e.scope.freeVariable("class"),f=new d(new A(this.externalCtor),i))}else f.variable["this"]?(i["static"]=!0,i.bound&&(i.context=c)):(f.variable=new W(new A(c),[new b(new A("prototype")),new b(g)]),i instanceof j&&i.bound&&(this.boundFuncs.push(g),i.bound=!1))}a.push(f)}return a}.call(this);return Z(h)},c.prototype.walkBody=function(a,b){var d=this;return this.traverseChildren(!1,function(e){var g,h,i,j,k,l;if(e instanceof c)return!1;if(e instanceof f){l=g=e.expressions;for(h=j=0,k=l.length;j<k;h=++j)i=l[h],i instanceof W&&i.isObject(!0)&&(g[h]=d.addProperties(i,a,b));return e.expressions=g=bb(g)}})},c.prototype.hoistDirectivePrologue=function(){var a,b,c;b=0,a=this.body.expressions;while((c=a[b])&&c instanceof k||c instanceof W&&c.isString())++b;return this.directives=a.splice(0,b)},c.prototype.ensureConstructor=function(a){this.ctor||(this.ctor=new j,this.parent&&this.ctor.body.push(new A(""+a+".__super__.constructor.apply(this, arguments)")),this.externalCtor&&this.ctor.body.push(new A(""+this.externalCtor+".apply(this, arguments)")),this.ctor.body.makeReturn(),this.body.expressions.unshift(this.ctor)),this.ctor.ctor=this.ctor.name=a,this.ctor.klass=null;return this.ctor.noReturn=!0},c.prototype.compileNode=function(a){var b,c,e,f,g,h,k;c=this.determineName(),g=c||"_Class",g.reserved&&(g="_"+g),f=new A(g),this.hoistDirectivePrologue(),this.setContext(g),this.walkBody(g,a),this.ensureConstructor(g),this.body.spaced=!0,this.ctor instanceof j||this.body.expressions.unshift(this.ctor),this.body.expressions.push(f),(k=this.body.expressions).unshift.apply(k,this.directives),this.addBoundFunctions(a),b=i.wrap(this.body),this.parent&&(this.superClass=new A(a.scope.freeVariable("super",!1)),this.body.expressions.unshift(new m(f,this.superClass)),b.args.push(this.parent),h=b.variable.params||b.variable.base.params,h.push(new G(this.superClass))),e=new H(b,!0),this.variable&&(e=new d(this.variable,e));return e.compile(a)};return c}(e),a.Assign=d=function(a){function c(a,b,c,d){var e,f,g;this.variable=a,this.value=b,this.context=c,this.param=d&&d.param,this.subpattern=d&&d.subpattern,e=(g=f=this.variable.unwrapAll().value,bm.call(M,g)>=0);if(e&&this.context!=="object")throw SyntaxError('variable name may not be "'+f+'"')}bl(c,a),c.prototype.children=["variable","value"],c.prototype.isStatement=function(a){return(a!=null?a.level:void 0)===z&&this.context!=null&&bm.call(this.context,"?")>=0},c.prototype.assigns=function(a){return this[this.context==="object"?"value":"variable"].assigns(a)},c.prototype.unfoldSoak=function(a){return bg(a,this,"variable")},c.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,k;if(b=this.variable instanceof W){if(this.variable.isArray()||this.variable.isObject())return this.compilePatternMatch(a);if(this.variable.isSplice())return this.compileSplice(a);if((g=this.context)==="||="||g==="&&="||g==="?=")return this.compileConditional(a)}d=this.variable.compile(a,w);if(!this.context){if(!(f=this.variable.unwrapAll()).isAssignable())throw SyntaxError('"'+this.variable.compile(a)+'" cannot be assigned.');if(typeof f.hasProperties=="function"?!f.hasProperties():!void 0)this.param?a.scope.add(d,"var"):a.scope.find(d)}this.value instanceof j&&(c=B.exec(d))&&(c[1]&&(this.value.klass=c[1]),this.value.name=(h=(i=(k=c[2])!=null?k:c[3])!=null?i:c[4])!=null?h:c[5]),e=this.value.compile(a,w);if(this.context==="object")return""+d+": "+e;e=d+(" "+(this.context||"=")+" ")+e;return a.level<=w?e:"("+e+")"},c.prototype.compilePatternMatch=function(a){var d,e,f,g,h,i,j,k,l,m,n,p,q,r,s,u,v,y,B,C,D,E,F,G,J,K,L;s=a.level===z,v=this.value,m=this.variable.base.objects;if(!(n=m.length)){f=v.compile(a);return a.level>=x?"("+f+")":f}i=this.variable.isObject();if(s&&n===1&&!((l=m[0])instanceof P)){l instanceof c?(D=l,E=D.variable,h=E.base,l=D.value):l.base instanceof H?(F=(new W(l.unwrapAll())).cacheReference(a),l=F[0],h=F[1]):h=i?l["this"]?l.properties[0].name:l:new A(0),d=o.test(h.unwrap().value||0),v=new W(v),v.properties.push(new(d?b:t)(h));if(G=l.unwrap().value,bm.call(I,G)>=0)throw new SyntaxError("assignment to a reserved word: "+l.compile(a)+" = "+v.compile(a));return(new c(l,v,null,{param:this.param})).compile(a,z)}y=v.compile(a,w),e=[],r=!1;if(!o.test(y)||this.variable.assigns(y))e.push(""+(p=a.scope.freeVariable("ref"))+" = "+y),y=p;for(g=B=0,C=m.length;B<C;g=++B){l=m[g],h=g,i&&(l instanceof c?(J=l,K=J.variable,h=K.base,l=J.value):l.base instanceof H?(L=(new W(l.unwrapAll())).cacheReference(a),l=L[0],h=L[1]):h=l["this"]?l.properties[0].name:l);if(!r&&l instanceof P)k=l.name.unwrap().value,l=l.unwrap(),u=""+n+" <= "+y+".length ? "+bh("slice")+".call("+y+", "+g,(q=n-g-1)?(j=a.scope.freeVariable("i"),u+=", "+j+" = "+y+".length - "+q+") : ("+j+" = "+g+", [])"):u+=") : []",u=new A(u),r=""+j+"++";else{k=l.unwrap().value;if(l instanceof P){l=l.name.compile(a);throw new SyntaxError("multiple splats are disallowed in an assignment: "+l+"...")}typeof h=="number"?(h=new A(r||h),d=!1):d=i&&o.test(h.unwrap().value||0),u=new W(new A(y),[new(d?b:t)(h)])}if(k!=null&&bm.call(I,k)>=0)throw new SyntaxError("assignment to a reserved word: "+l.compile(a)+" = "+u.compile(a));e.push((new c(l,u,null,{param:this.param,subpattern:!0})).compile(a,w))}!s&&!this.subpattern&&e.push(y),f=e.join(", ");return a.level<w?f:"("+f+")"},c.prototype.compileConditional=function(a){var b,d,e;e=this.variable.cacheReference(a),b=e[0],d=e[1];if(!b.properties.length&&b.base instanceof A&&b.base.value!=="this"&&!a.scope.check(b.base.value))throw new Error('the variable "'+b.base.value+"\" can't be assigned with "+this.context+" because it has not been defined.");bm.call(this.context,"?")>=0&&(a.isExistentialEquals=!0);return(new F(this.context.slice(0,-1),b,new c(d,this.value,"="))).compile(a)},c.prototype.compileSplice=function(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=this.variable.properties.pop().range,d=k.from,h=k.to,c=k.exclusive,g=this.variable.compile(a),l=(d!=null?d.cache(a,x):void 0)||["0","0"],e=l[0],f=l[1],h?(d!=null?d.isSimpleNumber():void 0)&&h.isSimpleNumber()?(h=+h.compile(a)- +f,c||(h+=1)):(h=h.compile(a,u)+" - "+f,c||(h+=" + 1")):h="9e9",m=this.value.cache(a,w),i=m[0],j=m[1],b="[].splice.apply("+g+", ["+e+", "+h+"].concat("+i+")), "+j;return a.level>z?"("+b+")":b};return c}(e),a.Code=j=function(a){function b(a,b,c){this.params=a||[],this.body=b||new f,this.bound=c==="boundfunc",this.bound&&(this.context="_this")}bl(b,a),b.prototype.children=["params","body"],b.prototype.isStatement=function(){return!!this.ctor},b.prototype.jumps=D,b.prototype.compileNode=function(a){var b,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,v,w,x,y,z,B,C,D,E,G,H,I,J,K,L,M,O;a.scope=new N(a.scope,this.body,this),a.scope.shared=$(a,"sharedScope"),a.indent+=R,delete a.bare,delete a.isExistentialEquals,l=[],e=[],H=this.paramNames();for(s=0,x=H.length;s<x;s++)i=H[s],a.scope.check(i)||a.scope.parameter(i);I=this.params;for(t=0,y=I.length;t<y;t++){k=I[t];if(!k.splat)continue;J=this.params;for(v=0,z=J.length;v<z;v++)j=J[v].name,j["this"]&&(j=j.properties[0].name),j.value&&a.scope.add(j.value,"var",!0);n=new d(new W(new c(function(){var b,c,d,e;d=this.params,e=[];for(b=0,c=d.length;b<c;b++)j=d[b],e.push(j.asReference(a));return e}.call(this))),new W(new A("arguments")));break}K=this.params;for(w=0,B=K.length;w<B;w++)k=K[w],k.isComplex()?(p=m=k.asReference(a),k.value&&(p=new F("?",m,k.value)),e.push(new d(new W(k.name),p,"=",{param:!0}))):(m=k,k.value&&(h=new A(m.name.value+" == null"),p=new d(new W(k.name),k.value,"="),e.push(new r(h,p)))),n||l.push(m);q=this.body.isEmpty(),n&&e.unshift(n),e.length&&(L=this.body.expressions).unshift.apply(L,e);for(f=E=0,C=l.length;E<C;f=++E)j=l[f],a.scope.parameter(l[f]=j.compile(a));o=[],M=this.paramNames();for(G=0,D=M.length;G<D;G++){i=M[G];if(bm.call(o,i)>=0)throw SyntaxError("multiple parameters named '"+i+"'");o.push(i)}!q&&!this.noReturn&&this.body.makeReturn(),this.bound&&(((O=a.scope.parent.method)!=null?O.bound:void 0)?this.bound=this.context=a.scope.parent.method.context:this["static"]||a.scope.parent.assign("_this","this")),g=a.indent,b="function",this.ctor&&(b+=" "+this.name),b+="("+l.join(", ")+") {",this.body.isEmpty()||(b+="\n"+this.body.compileWithDeclarations(a)+"\n"+this.tab),b+="}";if(this.ctor)return this.tab+b;return this.front||a.level>=u?"("+b+")":b},b.prototype.paramNames=function(){var a,b,c,d,e;a=[],e=this.params;for(c=0,d=e.length;c<d;c++)b=e[c],a.push.apply(a,b.names());return a},b.prototype.traverseChildren=function(a,c){if(a)return b.__super__.traverseChildren.call(this,a,c)};return b}(e),a.Param=G=function(a){function b(a,b,c){var d;this.name=a,this.value=b,this.splat=c;if(d=a=this.name.unwrapAll().value,bm.call(M,d)>=0)throw SyntaxError('parameter name "'+a+'" is not allowed')}bl(b,a),b.prototype.children=["name","value"],b.prototype.compile=function(a){return this.name.compile(a,w)},b.prototype.asReference=function(a){var b;if(this.reference)return this.reference;b=this.name,b["this"]?(b=b.properties[0].name,b.value.reserved&&(b=new A(a.scope.freeVariable(b.value)))):b.isComplex()&&(b=new A(a.scope.freeVariable("arg"))),b=new W(b),this.splat&&(b=new P(b));return this.reference=b},b.prototype.isComplex=function(){return this.name.isComplex()},b.prototype.names=function(a){var b,c,e,f,g,h;a==null&&(a=this.name),b=function(a){var b;b=a.properties[0].name.value;return b.reserved?[]:[b]};if(a instanceof A)return[a.value];if(a instanceof W)return b(a);c=[],h=a.objects;for(f=0,g=h.length;f<g;f++){e=h[f];if(e instanceof d)c.push(e.value.unwrap().value);else if(e instanceof P)c.push(e.name.unwrap().value);else if(e instanceof W)e.isArray()||e.isObject()?c.push.apply(c,this.names(e.base)):e["this"]?c.push.apply(c,b(e)):c.push(e.base.value);else throw SyntaxError("illegal parameter "+e.compile())}return c};return b}(e),a.Splat=P=function(a){function b(a){this.name=a.compile?a:new A(a)}bl(b,a),b.prototype.children=["name"],b.prototype.isAssignable=Y,b.prototype.assigns=function(a){return this.name.assigns(a)},b.prototype.compile=function(a){return this.index!=null?this.compileParam(a):this.name.compile(a)},b.prototype.unwrap=function(){return this.name},b.compileSplattedArray=function(a,c,d){var e,f,g,h,i,j,k,l;i=-1;while((j=c[++i])&&!(j instanceof b))continue;if(i>=c.length)return"";if(c.length===1){g=c[0].compile(a,w);if(d)return g;return""+bh("slice")+".call("+g+")"}e=c.slice(i);for(h=k=0,l=e.length;k<l;h=++k)j=e[h],g=j.compile(a,w),e[h]=j instanceof b?""+bh("slice")+".call("+g+")":"["+g+"]";if(i===0)return e[0]+(".concat("+e.slice(1).join(", ")+")");f=function(){var b,d,e,f;e=c.slice(0,i),f=[];for(b=0,d=e.length;b<d;b++)j=e[b],f.push(j.compile(a,w));return f}();return"["+f.join(", ")+"].concat("+e.join(", ")+")"};return b}(e),a.While=X=function(a){function b(a,b){this.condition=(b!=null?b.invert:void 0)?a.invert():a,this.guard=b!=null?b.guard:void 0}bl(b,a),b.prototype.children=["condition","guard","body"],b.prototype.isStatement=Y,b.prototype.makeReturn=function(a){if(a)return b.__super__.makeReturn.apply(this,arguments);this.returns=!this.jumps({loop:!0});return this},b.prototype.addBody=function(a){this.body=a;return this},b.prototype.jumps=function(){var a,b,c,d;a=this.body.expressions;if(!a.length)return!1;for(c=0,d=a.length;c<d;c++){b=a[c];if(b.jumps({loop:!0}))return b}return!1},b.prototype.compileNode=function(a){var b,c,d,e;a.indent+=R,e="",b=this.body,b.isEmpty()?b="":(this.returns&&(b.makeReturn(d=a.scope.freeVariable("results")),e=""+this.tab+d+" = [];\n"),this.guard&&(b.expressions.length>1?b.expressions.unshift(new r((new H(this.guard)).invert(),new A("continue"))):this.guard&&(b=f.wrap([new r(this.guard,b)]))),b="\n"+b.compile(a,z)+"\n"+this.tab),c=e+this.tab+("while ("+this.condition.compile(a,y)+") {"+b+"}"),this.returns&&(c+="\n"+this.tab+"return "+d+";");return c};return b}(e),a.Op=F=function(a){function e(a,c,d,e){if(a==="in")return new s(c,d);if(a==="do")return this.generateDo(c);if(a==="new"){if(c instanceof g&&!c["do"]&&!c.isNew)return c.newInstance();if(c instanceof j&&c.bound||c["do"])c=new H(c)}this.operator=b[a]||a,this.first=c,this.second=d,this.flip=!!e;return this}var b,c;bl(e,a),b={"==":"===","!=":"!==",of:"in"},c={"!==":"===","===":"!=="},e.prototype.children=["first","second"],e.prototype.isSimpleNumber=D,e.prototype.isUnary=function(){return!this.second},e.prototype.isComplex=function(){var a;return!this.isUnary()||(a=this.operator)!=="+"&&a!=="-"||this.first.isComplex()},e.prototype.isChainable=function(){var a;return(a=this.operator)==="<"||a===">"||a===">="||a==="<="||a==="==="||a==="!=="},e.prototype.invert=function(){var a,b,d,f,g;if(this.isChainable()&&this.first.isChainable()){a=!0,b=this;while(b&&b.operator)a&&(a=b.operator in c),b=b.first;if(!a)return(new H(this)).invert();b=this;while(b&&b.operator)b.invert=!b.invert,b.operator=c[b.operator],b=b.first;return this}if(f=c[this.operator]){this.operator=f,this.first.unwrap()instanceof e&&this.first.invert();return this}return this.second?(new H(this)).invert():this.operator==="!"&&(d=this.first.unwrap())instanceof e&&((g=d.operator)==="!"||g==="in"||g==="instanceof")?d:new e("!",this)},e.prototype.unfoldSoak=function(a){var b;return((b=this.operator)==="++"||b==="--"||b==="delete")&&bg(a,this,"first")},e.prototype.generateDo=function(a){var b,c,e,f,h,i,k,l;f=[],c=a instanceof d&&(h=a.value.unwrap())instanceof j?h:a,l=c.params||[];for(i=0,k=l.length;i<k;i++)e=l[i],e.value?(f.push(e.value),delete e.value):f.push(e);b=new g(a,f),b["do"]=!0;return b},e.prototype.compileNode=function(a){var b,c,d,e;c=this.isChainable()&&this.first.isChainable(),c||(this.first.front=this.front);if(this.operator==="delete"&&a.scope.check(this.first.unwrapAll().value))throw SyntaxError("delete operand may not be argument or var");if(((d=this.operator)==="--"||d==="++")&&(e=this.first.unwrapAll().value,bm.call(M,e)>=0))throw SyntaxError("prefix increment/decrement may not have eval or arguments operand");if(this.isUnary())return this.compileUnary(a);if(c)return this.compileChain(a);if(this.operator==="?")return this.compileExistence(a);b=this.first.compile(a,x)+" "+this.operator+" "+this.second.compile(a,x);return a.level<=x?b:"("+b+")"},e.prototype.compileChain=function(a){var b,c,d,e;e=this.first.second.cache(a),this.first.second=e[0],d=e[1],c=this.first.compile(a,x),b=""+c+" "+(this.invert?"&&":"||")+" "+d.compile(a)+" "+this.operator+" "+this.second.compile(a,x);return"("+b+")"},e.prototype.compileExistence=function(a){var b,c;this.first.isComplex()?(c=new A(a.scope.freeVariable("ref")),b=new H(new d(c,this.first))):(b=this.first,c=b);return(new r(new l(b),c,{type:"if"})).addElse(this.second).compile(a)},e.prototype.compileUnary=function(a){var b,c,d;if(a.level>=u)return(new H(this)).compile(a);c=[b=this.operator],d=b==="+"||b==="-",(b==="new"||b==="typeof"||b==="delete"||d&&this.first instanceof e&&this.first.operator===b)&&c.push(" ");if(d&&this.first instanceof e||b==="new"&&this.first.isStatement(a))this.first=new H(this.first);c.push(this.first.compile(a,x)),this.flip&&c.reverse();return c.join("")},e.prototype.toString=function(a){return e.__super__.toString.call(this,a,this.constructor.name+" "+this.operator)};return e}(e),a.In=s=function(a){function b(a,b){this.object=a,this.array=b}bl(b,a),b.prototype.children=["object","array"],b.prototype.invert=C,b.prototype.compileNode=function(a){var b,c,d,e,f;if(this.array instanceof W&&this.array.isArray()){f=this.array.base.objects;for(d=0,e=f.length;d<e;d++){c=f[d];if(!(c instanceof P))continue;b=!0;break}if(!b)return this.compileOrTest(a)}return this.compileLoopTest(a)},b.prototype.compileOrTest=function(a){var b,c,d,e,f,g,h,i,j;if(this.array.base.objects.length===0)return""+!!this.negated;i=this.object.cache(a,x),g=i[0],f=i[1],j=this.negated?[" !== "," && "]:[" === "," || "],b=j[0],c=j[1],h=function(){var c,h,i,j;i=this.array.base.objects,j=[];for(d=c=0,h=i.length;c<h;d=++c)e=i[d],j.push((d?f:g)+b+e.compile(a,u));return j}.call(this),h=h.join(c);return a.level<x?h:"("+h+")"},b.prototype.compileLoopTest=function(a){var b,c,d,e;e=this.object.cache(a,w),d=e[0],c=e[1],b=bh("indexOf")+(".call("+this.array.compile(a,w)+", "+c+") ")+(this.negated?"< 0":">= 0");if(d===c)return b;b=d+", "+b;return a.level<w?b:"("+b+")"},b.prototype.toString=function(a){return b.__super__.toString.call(this,a,this.constructor.name+(this.negated?"!":""))};return b}(e),a.Try=U=function(a){function b(a,b,c,d){this.attempt=a,this.error=b,this.recovery=c,this.ensure=d}bl(b,a),b.prototype.children=["attempt","recovery","ensure"],b.prototype.isStatement=Y,b.prototype.jumps=function(a){var b;return this.attempt.jumps(a)||((b=this.recovery)!=null?b.jumps(a):void 0)},b.prototype.makeReturn=function(a){this.attempt&&(this.attempt=this.attempt.makeReturn(a)),this.recovery&&(this.recovery=this.recovery.makeReturn(a));return this},b.prototype.compileNode=function(a){var b,c,d,e;a.indent+=R,d=this.error?" ("+this.error.compile(a)+") ":" ",e=this.attempt.compile(a,z),b=function(){var b;if(this.recovery){if(b=this.error.value,bm.call(M,b)>=0)throw SyntaxError('catch variable may not be "'+this.error.value+'"');a.scope.check(this.error.value)||a.scope.add(this.error.value,"param");return" catch"+d+"{\n"+this.recovery.compile(a,z)+"\n"+this.tab+"}"}if(!this.ensure&&!this.recovery)return" catch (_error) {}"}.call(this),c=this.ensure?" finally {\n"+this.ensure.compile(a,z)+"\n"+this.tab+"}":"";return""+this.tab+"try {\n"+e+"\n"+this.tab+"}"+(b||"")+c};return b}(e),a.Throw=T=function(a){function b(a){this.expression=a}bl(b,a),b.prototype.children=["expression"],b.prototype.isStatement=Y,b.prototype.jumps=D,b.prototype.makeReturn=S,b.prototype.compileNode=function(a){return this.tab+("throw "+this.expression.compile(a)+";")};return b}(e),a.Existence=l=function(a){function b(a){this.expression=a}bl(b,a),b.prototype.children=["expression"],b.prototype.invert=C,b.prototype.compileNode=function(a){var b,c,d,e;this.expression.front=this.front,d=this.expression.compile(a,x),o.test(d)&&!a.scope.check(d)?(e=this.negated?["===","||"]:["!==","&&"],b=e[0],c=e[1],d="typeof "+d+" "+b+' "undefined" '+c+" "+d+" "+b+" null"):d=""+d+" "+(this.negated?"==":"!=")+" null";return a.level<=v?d:"("+d+")"};return b}(e),a.Parens=H=function(a){function b(a){this.body=a}bl(b,a),b.prototype.children=["body"],b.prototype.unwrap=function(){return this.body},b.prototype.isComplex=function(){return this.body.isComplex()},b.prototype.compileNode=function(a){var b,c,d;d=this.body.unwrap();if(d instanceof W&&d.isAtomic()){d.front=this.front;return d.compile(a)}c=d.compile(a,y),b=a.level<x&&(d instanceof F||d instanceof g||d instanceof n&&d.returns);return b?c:"("+c+")"};return b}(e),a.For=n=function(a){function b(a,b){var c;this.source=b.source,this.guard=b.guard,this.step=b.step,this.name=b.name,this.index=b.index,this.body=f.wrap([a]),this.own=!!b.own,this.object=!!b.object,this.object&&(c=[this.index,this.name],this.name=c[0],this.index=c[1]);if(this.index instanceof W)throw SyntaxError("index cannot be a pattern matching expression");this.range=this.source instanceof W&&this.source.base instanceof J&&!this.source.properties.length,this.pattern=this.name instanceof W;if(this.range&&this.index)throw SyntaxError("indexes do not apply to range loops");if(this.range&&this.pattern)throw SyntaxError("cannot pattern match over range loops");this.returns=!1}bl(b,a),b.prototype.children=["body","source","guard","step"],b.prototype.compileNode=function(a){var b,c,e,g,h,i,j,k,l,m,n,p,q,s,t,u,v,y,B,C,D,E,F,G,I;b=f.wrap([this.body]),n=(I=bc(b.expressions))!=null?I.jumps():void 0,n&&n instanceof K&&(this.returns=!1),C=this.range?this.source.base:this.source,B=a.scope,q=this.name&&this.name.compile(a,w),j=this.index&&this.index.compile(a,w),q&&!this.pattern&&B.find(q),j&&B.find(j),this.returns&&(y=B.freeVariable("results")),k=this.object&&j||B.freeVariable("i"),l=this.range&&q||j||k,m=l!==k?""+l+" = ":"",this.step&&!this.range&&(E=B.freeVariable("step")),this.pattern&&(q=k),G="",h="",c="",i=this.tab+R,this.range?e=C.compile(bd(a,{index:k,name:q,step:this.step})):(F=this.source.compile(a,w),(q||this.own)&&!o.test(F)&&(c=""+this.tab+(t=B.freeVariable("ref"))+" = "+F+";\n",F=t),q&&!this.pattern&&(s=""+q+" = "+F+"["+l+"]"),this.object||(p=B.freeVariable("len"),g=""+m+k+" = 0, "+p+" = "+F+".length",this.step&&(g+=", "+E+" = "+this.step.compile(a,x)),D=""+m+(this.step?""+k+" += "+E:l!==k?"++"+k:""+k+"++"),e=""+g+"; "+k+" < "+p+"; "+D)),this.returns&&(u=""+this.tab+y+" = [];\n",v="\n"+this.tab+"return "+y+";",b.makeReturn(y)),this.guard&&(b.expressions.length>1?b.expressions.unshift(new r((new H(this.guard)).invert(),new A("continue"))):this.guard&&(b=f.wrap([new r(this.guard,b)]))),this.pattern&&b.expressions.unshift(new d(this.name,new A(""+F+"["+l+"]"))),c+=this.pluckDirectCall(a,b),s&&(G="\n"+i+s+";"),this.object&&(e=""+l+" in "+F,this.own&&(h="\n"+i+"if (!"+bh("hasProp")+".call("+F+", "+l+")) continue;")),b=b.compile(bd(a,{indent:i}),z),b&&(b="\n"+b+"\n");return""+c+(u||"")+this.tab+"for ("+e+") {"+h+G+b+this.tab+"}"+(v||"")},b.prototype.pluckDirectCall=function(a,b){var c,e,f,h,i,k,l,m,n,o,p,q,r,s,t;e="",o=b.expressions;for(i=m=0,n=o.length;m<n;i=++m){f=o[i],f=f.unwrapAll();if(!(f instanceof g))continue;l=f.variable.unwrapAll();if(!(l instanceof j||l instanceof W&&((p=l.base)!=null?p.unwrapAll():void 0)instanceof j&&l.properties.length===1&&((q=(r=l.properties[0].name)!=null?r.value:void 0)==="call"||q==="apply")))continue;h=((s=l.base)!=null?s.unwrapAll():void 0)||l,k=new A(a.scope.freeVariable("fn")),c=new W(k),l.base&&(t=[c,l],l.base=t[0],c=t[1]),b.expressions[i]=new g(c,f.args),e+=this.tab+(new d(k,h)).compile(a,z)+";\n"}return e};return b}(X),a.Switch=Q=function(a){function b(a,b,c){this.subject=a,this.cases=b,this.otherwise=c}bl(b,a),b.prototype.children=["subject","cases","otherwise"],b.prototype.isStatement=Y,b.prototype.jumps=function(a){var b,c,d,e,f,g,h;a==null&&(a={block:!0}),f=this.cases;for(d=0,e=f.length;d<e;d++){g=f[d],c=g[0],b=g[1];if(b.jumps(a))return b}return(h=this.otherwise)!=null?h.jumps(a):void 0},b.prototype.makeReturn=function(a){var b,c,d,e,g;e=this.cases;for(c=0,d=e.length;c<d;c++)b=e[c],b[1].makeReturn(a);a&&(this.otherwise||(this.otherwise=new f([new A("void 0")]))),(g=this.otherwise)!=null&&g.makeReturn(a);return this},b.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;i=a.indent+R,j=a.indent=i+R,d=this.tab+("switch ("+(((o=this.subject)!=null?o.compile(a,y):void 0)||!1)+") {\n"),p=this.cases;for(h=k=0,m=p.length;k<m;h=++k){q=p[h],f=q[0],b=q[1],r=bb([f]);for(l=0,n=r.length;l<n;l++)e=r[l],this.subject||(e=e.invert()),d+=i+("case "+e.compile(a,y)+":\n");if(c=b.compile(a,z))d+=c+"\n";if(h===this.cases.length-1&&!this.otherwise)break;g=this.lastNonComment(b.expressions);if(g instanceof K||g instanceof A&&g.jumps()&&g.value!=="debugger")continue;d+=j+"break;\n"}this.otherwise&&this.otherwise.expressions.length&&(d+=i+("default:\n"+this.otherwise.compile(a,z)+"\n"));return d+this.tab+"}"};return b}(e),a.If=r=function(a){function b(a,b,c){this.body=b,c==null&&(c={}),this.condition=c.type==="unless"?a.invert():a,this.elseBody=null,this.isChain=!1,this.soak=c.soak}bl(b,a),b.prototype.children=["condition","body","elseBody"],b.prototype.bodyNode=function(){var a;return(a=this.body)!=null?a.unwrap():void 0},b.prototype.elseBodyNode=function(){var a;return(a=this.elseBody)!=null?a.unwrap():void 0},b.prototype.addElse=function(a){this.isChain?this.elseBodyNode().addElse(a):(this.isChain=a instanceof b,this.elseBody=this.ensureBlock(a));return this},b.prototype.isStatement=function(a){var b;return(a!=null?a.level:void 0)===z||this.bodyNode().isStatement(a)||((b=this.elseBodyNode())!=null?b.isStatement(a):void 0)},b.prototype.jumps=function(a){var b;return this.body.jumps(a)||((b=this.elseBody)!=null?b.jumps(a):void 0)},b.prototype.compileNode=function(a){return this.isStatement(a)?this.compileStatement(a):this.compileExpression(a)},b.prototype.makeReturn=function(a){a&&(this.elseBody||(this.elseBody=new f([new A("void 0")]))),this.body&&(this.body=new f([this.body.makeReturn(a)])),this.elseBody&&(this.elseBody=new f([this.elseBody.makeReturn(a)]));return this},b.prototype.ensureBlock=function(a){return a instanceof f?a:new f([a])},b.prototype.compileStatement=function(a){var c,d,e,f,g;d=$(a,"chainChild"),f=$(a,"isExistentialEquals");if(f)return(new b(this.condition.invert(),this.elseBodyNode(),{type:"if"})).compile(a);e=this.condition.compile(a,y),a.indent+=R,c=this.ensureBlock(this.body),g="if ("+e+") {\n"+c.compile(a)+"\n"+this.tab+"}",d||(g=this.tab+g);if(!this.elseBody)return g;return g+" else "+(this.isChain?(a.indent=this.tab,a.chainChild=!0,this.elseBody.unwrap().compile(a,z)):"{\n"+this.elseBody.compile(a,z)+"\n"+this.tab+"}")},b.prototype.compileExpression=function(a){var b,c,d,e;e=this.condition.compile(a,v),c=this.bodyNode().compile(a,w),b=this.elseBodyNode()?this.elseBodyNode().compile(a,w):"void 0",d=""+e+" ? "+c+" : "+b;return a.level>=v?"("+d+")":d},b.prototype.unfoldSoak=function(){return this.soak&&this};return b}(e),i={wrap:function(a,c,d){var e,h,i,k,l;if(a.jumps())return a;i=new j([],f.wrap([a])),e=[];if((k=a.contains(this.literalArgs))||a.contains(this.literalThis))l=new A(k?"apply":"call"),e=[new A("this")],k&&e.push(new A("arguments")),i=new W(i,[new b(l)]);i.noReturn=d,h=new g(i,e);return c?f.wrap([h]):h},literalArgs:function(a){return a instanceof A&&a.value==="arguments"&&!a.asKey},literalThis:function(a){return a instanceof A&&a.value==="this"&&!a.asKey||a instanceof j&&a.bound||a instanceof g&&a.isSuper}},bg=function(a,b,c){var d;if(!!(d=b[c].unfoldSoak(a))){b[c]=d.body,d.body=new W(b);return d}},V={"extends":function(){return"function(child, parent) { for (var key in parent) { if ("+bh("hasProp")+".call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }"},bind:function(){return"function(fn, me){ return function(){ return fn.apply(me, arguments); }; }"},indexOf:function(){return"[].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }"},hasProp:function(){return"{}.hasOwnProperty"},slice:function(){return"[].slice"}},z=1,y=2,w=3,v=4,x=5,u=6,R="  ",p="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",o=RegExp("^"+p+"$"),L=/^[+-]?\d+$/,B=RegExp("^(?:("+p+")\\.prototype(?:\\.("+p+")|\\[(\"(?:[^\\\\\"\\r\\n]|\\\\.)*\"|'(?:[^\\\\'\\r\\n]|\\\\.)*')\\]|\\[(0x[\\da-fA-F]+|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\]))|("+p+")$"),q=/^['"]/,bh=function(a){var b;b="__"+a,N.root.assign(b,V[a]());return b},be=function(a,b){a=a.replace(/\n/g,"$&"+b);return a.replace(/\s+$/,"")}}).call(this)},require["./coffee-script"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k=({}).hasOwnProperty;e=require("fs"),h=require("path"),j=require("./lexer"),b=j.Lexer,c=j.RESERVED,g=require("./parser").parser,i=require("vm"),require.extensions?require.extensions[".coffee"]=function(a,b){var c;c=d(e.readFileSync(b,"utf8"),{filename:b});return a._compile(c,b)}:require.registerExtension&&require.registerExtension(".coffee",function(a){return d(a)}),a.VERSION="1.3.3",a.RESERVED=c,a.helpers=require("./helpers"),a.compile=d=function(b,c){var d,e,h;c==null&&(c={}),h=a.helpers.merge;try{e=g.parse(f.tokenize(b)).compile(c);if(!c.header)return e}catch(i){c.filename&&(i.message="In "+c.filename+", "+i.message);throw i}d="Generated by CoffeeScript "+this.VERSION;return"// "+d+"\n"+e},a.tokens=function(a,b){return f.tokenize(a,b)},a.nodes=function(a,b){return typeof a=="string"?g.parse(f.tokenize(a,b)):g.parse(a)},a.run=function(a,b){var c;b==null&&(b={}),c=require.main,c.filename=process.argv[1]=b.filename?e.realpathSync(b.filename):".",c.moduleCache&&(c.moduleCache={}),c.paths=require("module")._nodeModulePaths(h.dirname(e.realpathSync(b.filename)));return h.extname(c.filename)!==".coffee"||require.extensions?c._compile(d(a,b),c.filename):c._compile(a,c.filename)},a.eval=function(a,b){var c,e,f,g,j,l,m,n,o,p,q,r,s,t;b==null&&(b={});if(!!(a=a.trim())){e=i.Script;if(e){if(b.sandbox!=null){if(b.sandbox instanceof e.createContext().constructor)m=b.sandbox;else{m=e.createContext(),r=b.sandbox;for(g in r){if(!k.call(r,g))continue;n=r[g],m[g]=n}}m.global=m.root=m.GLOBAL=m}else m=global;m.__filename=b.filename||"eval",m.__dirname=h.dirname(m.__filename);if(m===global&&!m.module&&!m.require){c=require("module"),m.module=q=new c(b.modulename||"eval"),m.require=t=function(a){return c._load(a,q,!0)},q.filename=m.__filename,s=Object.getOwnPropertyNames(require);for(o=0,p=s.length;o<p;o++)l=s[o],l!=="paths"&&(t[l]=require[l]);t.paths=q.paths=c._nodeModulePaths(process.cwd()),t.resolve=function(a){return c._resolveFilename(a,q)}}}j={};for(g in b){if(!k.call(b,g))continue;n=b[g],j[g]=n}j.bare=!0,f=d(a,j);return m===global?i.runInThisContext(f):i.runInContext(f,m)}},f=new b,g.lexer={lex:function(){var a,b;b=this.tokens[this.pos++]||[""],a=b[0],this.yytext=b[1],this.yylineno=b[2];return a},setInput:function(a){this.tokens=a;return this.pos=0},upcomingInput:function(){return""}},g.yy=require("./nodes")}).call(this)},require["./browser"]=new function(){var exports=this;(function(){var CoffeeScript,runScripts;CoffeeScript=require("./coffee-script"),CoffeeScript.require=require,CoffeeScript.eval=function(code,options){var _ref;options==null&&(options={}),(_ref=options.bare)==null&&(options.bare=!0);return eval(CoffeeScript.compile(code,options))},CoffeeScript.run=function(a,b){b==null&&(b={}),b.bare=!0;return Function(CoffeeScript.compile(a,b))()};typeof window!="undefined"&&window!==null&&(CoffeeScript.load=function(a,b){var c;c=new(window.ActiveXObject||XMLHttpRequest)("Microsoft.XMLHTTP"),c.open("GET",a,!0),"overrideMimeType"in c&&c.overrideMimeType("text/plain"),c.onreadystatechange=function(){var d;if(c.readyState===4){if((d=c.status)===0||d===200)CoffeeScript.run(c.responseText);else throw new Error("Could not load "+a);if(b)return b()}};return c.send(null)},runScripts=function(){var a,b,c,d,e,f;f=document.getElementsByTagName("script"),a=function(){var a,b,c;c=[];for(a=0,b=f.length;a<b;a++)e=f[a],e.type==="text/coffeescript"&&c.push(e);return c}(),c=0,d=a.length,(b=function(){var d;d=a[c++];if((d!=null?d.type:void 0)==="text/coffeescript"){if(d.src)return CoffeeScript.load(d.src,b);CoffeeScript.run(d.innerHTML);return b()}})();return null},window.addEventListener?addEventListener("DOMContentLoaded",runScripts,!1):attachEvent("onload",runScripts))}).call(this)};return require["./coffee-script"]}();typeof define=="function"&&define.amd?define(function(){return CoffeeScript}):root.CoffeeScript=CoffeeScript})(this);
/*!js2coffee*/
if(typeof module=='undefined'){this.Narcissus=new Object;}
(function(){var narcissus={options:{version:185,},hostGlobal:this};Narcissus=narcissus;})();Narcissus.definitions=(function(){var tokens=["END","\n",";",",","=","?",":","CONDITIONAL","||","&&","|","^","&","==","!=","===","!==","<","<=",">=",">","<<",">>",">>>","+","-","*","/","%","!","~","UNARY_PLUS","UNARY_MINUS","++","--",".","[","]","{","}","(",")","SCRIPT","BLOCK","LABEL","FOR_IN","CALL","NEW_WITH_ARGS","INDEX","ARRAY_INIT","OBJECT_INIT","PROPERTY_INIT","GETTER","SETTER","GROUP","LIST","LET_BLOCK","ARRAY_COMP","GENERATOR","COMP_TAIL","IDENTIFIER","NUMBER","STRING","REGEXP","break","case","catch","const","continue","debugger","default","delete","do","else","false","finally","for","function","if","in","instanceof","let","new","null","return","switch","this","throw","true","try","typeof","var","void","yield","while","with",];var statementStartTokens=["break","const","continue","debugger","do","for","if","return","switch","throw","try","var","yield","while","with",];var opTypeNames={'\n':"NEWLINE",';':"SEMICOLON",',':"COMMA",'?':"HOOK",':':"COLON",'||':"OR",'&&':"AND",'|':"BITWISE_OR",'^':"BITWISE_XOR",'&':"BITWISE_AND",'===':"STRICT_EQ",'==':"EQ",'=':"ASSIGN",'!==':"STRICT_NE",'!=':"NE",'<<':"LSH",'<=':"LE",'<':"LT",'>>>':"URSH",'>>':"RSH",'>=':"GE",'>':"GT",'++':"INCREMENT",'--':"DECREMENT",'+':"PLUS",'-':"MINUS",'*':"MUL",'/':"DIV",'%':"MOD",'!':"NOT",'~':"BITWISE_NOT",'.':"DOT",'[':"LEFT_BRACKET",']':"RIGHT_BRACKET",'{':"LEFT_CURLY",'}':"RIGHT_CURLY",'(':"LEFT_PAREN",')':"RIGHT_PAREN"};var keywords={__proto__:null};var tokenIds={};var consts="const ";for(var i=0,j=tokens.length;i<j;i++){if(i>0)
consts+=", ";var t=tokens[i];var name;if(/^[a-z]/.test(t)){name=t.toUpperCase();keywords[t]=i;}else{name=(/^\W/.test(t)?opTypeNames[t]:t);}
consts+=name+" = "+i;tokenIds[name]=i;tokens[t]=i;}
consts+=";";var isStatementStartCode={__proto__:null};for(i=0,j=statementStartTokens.length;i<j;i++)
isStatementStartCode[keywords[statementStartTokens[i]]]=true;var assignOps=['|','^','&','<<','>>','>>>','+','-','*','/','%'];for(i=0,j=assignOps.length;i<j;i++){t=assignOps[i];assignOps[t]=tokens[t];}
function defineGetter(obj,prop,fn,dontDelete,dontEnum){Object.defineProperty(obj,prop,{get:fn,configurable:!dontDelete,enumerable:!dontEnum});}
function defineProperty(obj,prop,val,dontDelete,readOnly,dontEnum){Object.defineProperty(obj,prop,{value:val,writable:!readOnly,configurable:!dontDelete,enumerable:!dontEnum});}
function isNativeCode(fn){return((typeof fn)==="function")&&fn.toString().match(/\[native code\]/);}
function getPropertyDescriptor(obj,name){while(obj){if(({}).hasOwnProperty.call(obj,name))
return Object.getOwnPropertyDescriptor(obj,name);obj=Object.getPrototypeOf(obj);}}
function getOwnProperties(obj){var map={};for(var name in Object.getOwnPropertyNames(obj))
map[name]=Object.getOwnPropertyDescriptor(obj,name);return map;}
function makePassthruHandler(obj){return{getOwnPropertyDescriptor:function(name){var desc=Object.getOwnPropertyDescriptor(obj,name);desc.configurable=true;return desc;},getPropertyDescriptor:function(name){var desc=getPropertyDescriptor(obj,name);desc.configurable=true;return desc;},getOwnPropertyNames:function(){return Object.getOwnPropertyNames(obj);},defineProperty:function(name,desc){Object.defineProperty(obj,name,desc);},"delete":function(name){return delete obj[name];},fix:function(){if(Object.isFrozen(obj)){return getOwnProperties(obj);}
return undefined;},has:function(name){return name in obj;},hasOwn:function(name){return({}).hasOwnProperty.call(obj,name);},get:function(receiver,name){return obj[name];},set:function(receiver,name,val){obj[name]=val;return true;},enumerate:function(){var result=[];for(name in obj){result.push(name);};return result;},keys:function(){return Object.keys(obj);}};}
function noPropFound(){return undefined;}
var hasOwnProperty=({}).hasOwnProperty;function StringMap(){this.table=Object.create(null,{});this.size=0;}
StringMap.prototype={has:function(x){return hasOwnProperty.call(this.table,x);},set:function(x,v){if(!hasOwnProperty.call(this.table,x))
this.size++;this.table[x]=v;},get:function(x){return this.table[x];},getDef:function(x,thunk){if(!hasOwnProperty.call(this.table,x)){this.size++;this.table[x]=thunk();}
return this.table[x];},forEach:function(f){var table=this.table;for(var key in table)
f.call(this,key,table[key]);},toString:function(){return"[object StringMap]"}};function Stack(elts){this.elts=elts||null;}
Stack.prototype={push:function(x){return new Stack({top:x,rest:this.elts});},top:function(){if(!this.elts)
throw new Error("empty stack");return this.elts.top;},isEmpty:function(){return this.top===null;},find:function(test){for(var elts=this.elts;elts;elts=elts.rest){if(test(elts.top))
return elts.top;}
return null;},has:function(x){return Boolean(this.find(function(elt){return elt===x}));},forEach:function(f){for(var elts=this.elts;elts;elts=elts.rest){f(elts.top);}}};return{tokens:tokens,opTypeNames:opTypeNames,keywords:keywords,isStatementStartCode:isStatementStartCode,tokenIds:tokenIds,consts:consts,assignOps:assignOps,defineGetter:defineGetter,defineProperty:defineProperty,isNativeCode:isNativeCode,makePassthruHandler:makePassthruHandler,noPropFound:noPropFound,StringMap:StringMap,Stack:Stack};}());Narcissus.lexer=(function(){var definitions=Narcissus.definitions;eval(definitions.consts);var opTokens={};for(var op in definitions.opTypeNames){if(op==='\n'||op==='.')
continue;var node=opTokens;for(var i=0;i<op.length;i++){var ch=op[i];if(!(ch in node))
node[ch]={};node=node[ch];node.op=op;}}
function Tokenizer(s,f,l){this.cursor=0;this.source=String(s);this.tokens=[];this.tokenIndex=0;this.lookahead=0;this.scanNewlines=false;this.unexpectedEOF=false;this.filename=f||"";this.lineno=l||1;this.comments=[];}
Tokenizer.prototype={get done(){return this.peek(true)===END;},get token(){return this.tokens[this.tokenIndex];},match:function(tt,scanOperand){return this.get(scanOperand)===tt||this.unget();},mustMatch:function(tt){if(!this.match(tt)){throw this.newSyntaxError("Missing "+definitions.tokens[tt].toLowerCase());}
return this.token;},peek:function(scanOperand){var tt,next;if(this.lookahead){next=this.tokens[(this.tokenIndex+this.lookahead)&3];tt=(this.scanNewlines&&next.lineno!==this.lineno)?NEWLINE:next.type;}else{tt=this.get(scanOperand);this.unget();}
return tt;},peekOnSameLine:function(scanOperand){this.scanNewlines=true;var tt=this.peek(scanOperand);this.scanNewlines=false;return tt;},skip:function(){var input=this.source;var cstart;var clineno;var comments=[];var comment;var nlcount=0;for(;;){var ch=input[this.cursor++];var next=input[this.cursor];if(ch==='\n'&&!this.scanNewlines){this.lineno++;nlcount++;}else if(ch==='/'&&next==='*'){cstart=this.cursor;clineno=this.lineno;this.cursor++;for(;;){ch=input[this.cursor++];if(ch===undefined)
throw this.newSyntaxError("Unterminated comment");if(ch==='*'){next=input[this.cursor];if(next==='/'){this.cursor++;comment={type:"BLOCK_COMMENT",nlcount:nlcount,start:cstart-1,end:this.cursor,lineno:clineno,endlineno:this.lineno,value:input.substring(cstart+1,this.cursor-2)}
this.comments.push(comment);nlcount=0;break;}}else if(ch==='\n'){this.lineno++;}}}else if(ch==='/'&&next==='/'){cstart=this.cursor;this.cursor++;for(;;){ch=input[this.cursor++];if(ch===undefined){comment={type:"LINE_COMMENT",start:cstart,end:this.cursor,lineno:this.lineno,nlcount:nlcount,value:input.substring(cstart+1,this.cursor-1)};this.comments.push(comment);return;}
if(ch==='\n'){comment={type:"LINE_COMMENT",start:cstart,end:this.cursor,lineno:this.lineno,nlcount:nlcount,value:input.substring(cstart+1,this.cursor-1)};this.comments.push(comment);nlcount=0;this.lineno++;break;}}}else if(ch!==' '&&ch!=='\t'){this.cursor--;return;}}},lexExponent:function(){var input=this.source;var next=input[this.cursor];if(next==='e'||next==='E'){this.cursor++;ch=input[this.cursor++];if(ch==='+'||ch==='-')
ch=input[this.cursor++];if(ch<'0'||ch>'9')
throw this.newSyntaxError("Missing exponent");do{ch=input[this.cursor++];}while(ch>='0'&&ch<='9');this.cursor--;return true;}
return false;},lexZeroNumber:function(ch){var token=this.token,input=this.source;token.type=NUMBER;ch=input[this.cursor++];if(ch==='.'){do{ch=input[this.cursor++];}while(ch>='0'&&ch<='9');this.cursor--;this.lexExponent();token.value=parseFloat(token.start,this.cursor);}else if(ch==='x'||ch==='X'){do{ch=input[this.cursor++];}while((ch>='0'&&ch<='9')||(ch>='a'&&ch<='f')||(ch>='A'&&ch<='F'));this.cursor--;token.value=parseInt(input.substring(token.start,this.cursor));}else if(ch>='0'&&ch<='7'){do{ch=input[this.cursor++];}while(ch>='0'&&ch<='7');this.cursor--;token.value=parseInt(input.substring(token.start,this.cursor));}else{this.cursor--;this.lexExponent();token.value=0;}},lexNumber:function(ch){var token=this.token,input=this.source;token.type=NUMBER;var floating=false;do{ch=input[this.cursor++];if(ch==='.'&&!floating){floating=true;ch=input[this.cursor++];}}while(ch>='0'&&ch<='9');this.cursor--;var exponent=this.lexExponent();floating=floating||exponent;var str=input.substring(token.start,this.cursor);token.value=floating?parseFloat(str):parseInt(str);},lexDot:function(ch){var token=this.token,input=this.source;var next=input[this.cursor];if(next>='0'&&next<='9'){do{ch=input[this.cursor++];}while(ch>='0'&&ch<='9');this.cursor--;this.lexExponent();token.type=NUMBER;token.value=parseFloat(token.start,this.cursor);}else{token.type=DOT;token.assignOp=null;token.value='.';}},lexString:function(ch){var token=this.token,input=this.source;token.type=STRING;var hasEscapes=false;var delim=ch;while((ch=input[this.cursor++])!==delim){if(this.cursor>=input.length)
throw this.newSyntaxError("Unterminated string literal");if(ch==='\\'){hasEscapes=true;if(++this.cursor==input.length)
throw this.newSyntaxError("Unterminated string literal");}}
token.value=hasEscapes?eval(input.substring(token.start,this.cursor)):input.substring(token.start+1,this.cursor-1);},lexRegExp:function(ch){var token=this.token,input=this.source;token.type=REGEXP;do{ch=input[this.cursor++];if(ch==='\\'){this.cursor++;}else if(ch==='['){do{if(ch===undefined)
throw this.newSyntaxError("Unterminated character class");if(ch==='\\')
this.cursor++;ch=input[this.cursor++];}while(ch!==']');}else if(ch===undefined){throw this.newSyntaxError("Unterminated regex");}}while(ch!=='/');do{ch=input[this.cursor++];}while(ch>='a'&&ch<='z');this.cursor--;token.value=eval(input.substring(token.start,this.cursor));},lexOp:function(ch){var token=this.token,input=this.source;var node=opTokens[ch];var next=input[this.cursor];if(next in node){node=node[next];this.cursor++;next=input[this.cursor];if(next in node){node=node[next];this.cursor++;next=input[this.cursor];}}
var op=node.op;if(definitions.assignOps[op]&&input[this.cursor]==='='){this.cursor++;token.type=ASSIGN;token.assignOp=definitions.tokenIds[definitions.opTypeNames[op]];op+='=';}else{token.type=definitions.tokenIds[definitions.opTypeNames[op]];token.assignOp=null;}
token.value=op;},lexIdent:function(ch){var token=this.token,input=this.source;do{ch=input[this.cursor++];}while((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||(ch>='0'&&ch<='9')||ch==='$'||ch==='_');this.cursor--;var id=input.substring(token.start,this.cursor);token.type=definitions.keywords[id]||IDENTIFIER;token.value=id;},get:function(scanOperand){var token;while(this.lookahead){--this.lookahead;this.tokenIndex=(this.tokenIndex+1)&3;token=this.tokens[this.tokenIndex];if(token.type!==NEWLINE||this.scanNewlines)
return token.type;}
this.skip();this.tokenIndex=(this.tokenIndex+1)&3;token=this.tokens[this.tokenIndex];if(!token)
this.tokens[this.tokenIndex]=token={};var input=this.source;if(this.cursor===input.length)
return token.type=END;token.start=this.cursor;token.lineno=this.lineno;var ch=input[this.cursor++];if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||ch==='$'||ch==='_'){this.lexIdent(ch);}else if(scanOperand&&ch==='/'){this.lexRegExp(ch);}else if(ch in opTokens){this.lexOp(ch);}else if(ch==='.'){this.lexDot(ch);}else if(ch>='1'&&ch<='9'){this.lexNumber(ch);}else if(ch==='0'){this.lexZeroNumber(ch);}else if(ch==='"'||ch==="'"){this.lexString(ch);}else if(this.scanNewlines&&ch==='\n'){token.type=NEWLINE;token.value='\n';this.lineno++;}else{throw this.newSyntaxError("Illegal token");}
token.end=this.cursor;return token.type;},unget:function(){if(++this.lookahead===4)throw"PANIC: too much lookahead!";this.tokenIndex=(this.tokenIndex-1)&3;},newSyntaxError:function(m){var e=new SyntaxError(m,this.filename,this.lineno);e.source=this.source;e.cursor=this.lookahead?this.tokens[(this.tokenIndex+this.lookahead)&3].start:this.cursor;return e;},};return{Tokenizer:Tokenizer};}());Narcissus.parser=(function(){var lexer=Narcissus.lexer;var definitions=Narcissus.definitions;const StringMap=definitions.StringMap;const Stack=definitions.Stack;eval(definitions.consts);function pushDestructuringVarDecls(n,s){for(var i in n){var sub=n[i];if(sub.type===IDENTIFIER){s.varDecls.push(sub);}else{pushDestructuringVarDecls(sub,s);}}}
const NESTING_TOP=0,NESTING_SHALLOW=1,NESTING_DEEP=2;function StaticContext(parentScript,parentBlock,inFunction,inForLoopInit,nesting){this.parentScript=parentScript;this.parentBlock=parentBlock;this.inFunction=inFunction;this.inForLoopInit=inForLoopInit;this.nesting=nesting;this.allLabels=new Stack();this.currentLabels=new Stack();this.labeledTargets=new Stack();this.defaultTarget=null;Narcissus.options.ecma3OnlyMode&&(this.ecma3OnlyMode=true);Narcissus.options.parenFreeMode&&(this.parenFreeMode=true);}
StaticContext.prototype={ecma3OnlyMode:false,parenFreeMode:false,update:function(ext){var desc={};for(var key in ext){desc[key]={value:ext[key],writable:true,enumerable:true,configurable:true}}
return Object.create(this,desc);},pushLabel:function(label){return this.update({currentLabels:this.currentLabels.push(label),allLabels:this.allLabels.push(label)});},pushTarget:function(target){var isDefaultTarget=target.isLoop||target.type===SWITCH;if(this.currentLabels.isEmpty()){return isDefaultTarget?this.update({defaultTarget:target}):this;}
target.labels=new StringMap();this.currentLabels.forEach(function(label){target.labels.set(label,true);});return this.update({currentLabels:new Stack(),labeledTargets:this.labeledTargets.push(target),defaultTarget:isDefaultTarget?target:this.defaultTarget});},nest:function(atLeast){var nesting=Math.max(this.nesting,atLeast);return(nesting!==this.nesting)?this.update({nesting:nesting}):this;}};function Script(t,inFunction){var n=new Node(t,scriptInit());var x=new StaticContext(n,n,inFunction,false,NESTING_TOP);Statements(t,x,n);return n;}
definitions.defineProperty(Array.prototype,"top",function(){return this.length&&this[this.length-1];},false,false,true);function Node(t,init){var token=t.token;if(token){this.type=token.type;this.value=token.value;this.lineno=token.lineno;this.start=token.start;this.end=token.end;}else{this.lineno=t.lineno;}
this.tokenizer=t;this.children=[];for(var prop in init)
this[prop]=init[prop];}
var Np=Node.prototype={};Np.constructor=Node;Np.toSource=Object.prototype.toSource;Np.push=function(kid){if(kid!==null){if(kid.start<this.start)
this.start=kid.start;if(this.end<kid.end)
this.end=kid.end;}
return this.children.push(kid);}
Node.indentLevel=0;function tokenString(tt){var t=definitions.tokens[tt];return/^\W/.test(t)?definitions.opTypeNames[t]:t.toUpperCase();}
Np.toString=function(){var a=[];for(var i in this){if(this.hasOwnProperty(i)&&i!=='type'&&i!=='target')
a.push({id:i,value:this[i]});}
a.sort(function(a,b){return(a.id<b.id)?-1:1;});const INDENTATION="    ";var n=++Node.indentLevel;var s="{\n"+INDENTATION.repeat(n)+"type: "+tokenString(this.type);for(i=0;i<a.length;i++)
s+=",\n"+INDENTATION.repeat(n)+a[i].id+": "+a[i].value;n=--Node.indentLevel;s+="\n"+INDENTATION.repeat(n)+"}";return s;}
Np.getSource=function(){return this.tokenizer.source.slice(this.start,this.end);};const LOOP_INIT={isLoop:true};function blockInit(){return{type:BLOCK,varDecls:[]};}
function scriptInit(){return{type:SCRIPT,funDecls:[],varDecls:[],modDecls:[],impDecls:[],expDecls:[],loadDeps:[],hasEmptyReturn:false,hasReturnWithValue:false,isGenerator:false};}
definitions.defineGetter(Np,"filename",function(){return this.tokenizer.filename;});definitions.defineGetter(Np,"length",function(){throw new Error("Node.prototype.length is gone; "+"use n.children.length instead");});definitions.defineProperty(String.prototype,"repeat",function(n){var s="",t=this+s;while(--n>=0)
s+=t;return s;},false,false,true);function MaybeLeftParen(t,x){if(x.parenFreeMode)
return t.match(LEFT_PAREN)?LEFT_PAREN:END;return t.mustMatch(LEFT_PAREN).type;}
function MaybeRightParen(t,p){if(p===LEFT_PAREN)
t.mustMatch(RIGHT_PAREN);}
function Statements(t,x,n){try{while(!t.done&&t.peek(true)!==RIGHT_CURLY)
{n.push(Statement(t,x));}}catch(e){if(t.done)
{t.unexpectedEOF=true;}
throw(e);}}
function Block(t,x){t.mustMatch(LEFT_CURLY);var n=new Node(t,blockInit());Statements(t,x.update({parentBlock:n}).pushTarget(n),n);t.mustMatch(RIGHT_CURLY);return n;}
const DECLARED_FORM=0,EXPRESSED_FORM=1,STATEMENT_FORM=2;function Statement(t,x){var i,label,n,n2,p,c,ss,tt=t.get(true),tt2,x2,x3;switch(tt){case FUNCTION:return FunctionDefinition(t,x,true,(x.nesting!==NESTING_TOP)?STATEMENT_FORM:DECLARED_FORM);case LEFT_CURLY:n=new Node(t,blockInit());Statements(t,x.update({parentBlock:n}).pushTarget(n).nest(NESTING_SHALLOW),n);t.mustMatch(RIGHT_CURLY);return n;case IF:n=new Node(t);n.condition=HeadExpression(t,x);x2=x.pushTarget(n).nest(NESTING_DEEP);n.thenPart=Statement(t,x2);n.elsePart=t.match(ELSE)?Statement(t,x2):null;return n;case SWITCH:n=new Node(t,{cases:[],defaultIndex:-1});n.discriminant=HeadExpression(t,x);x2=x.pushTarget(n).nest(NESTING_DEEP);t.mustMatch(LEFT_CURLY);while((tt=t.get())!==RIGHT_CURLY){switch(tt){case DEFAULT:if(n.defaultIndex>=0)
throw t.newSyntaxError("More than one switch default");case CASE:n2=new Node(t);if(tt===DEFAULT)
n.defaultIndex=n.cases.length;else
n2.caseLabel=Expression(t,x2,COLON);break;default:throw t.newSyntaxError("Invalid switch case");}
t.mustMatch(COLON);n2.statements=new Node(t,blockInit());while((tt=t.peek(true))!==CASE&&tt!==DEFAULT&&tt!==RIGHT_CURLY)
n2.statements.push(Statement(t,x2));n.cases.push(n2);}
return n;case FOR:n=new Node(t,LOOP_INIT);if(t.match(IDENTIFIER)){if(t.token.value==="each")
n.isEach=true;else
t.unget();}
if(!x.parenFreeMode)
t.mustMatch(LEFT_PAREN);x2=x.pushTarget(n).nest(NESTING_DEEP);x3=x.update({inForLoopInit:true});if((tt=t.peek())!==SEMICOLON){if(tt===VAR||tt===CONST){t.get();n2=Variables(t,x3);}else if(tt===LET){t.get();if(t.peek()===LEFT_PAREN){n2=LetBlock(t,x3,false);}else{x3.parentBlock=n;n.varDecls=[];n2=Variables(t,x3);}}else{n2=Expression(t,x3);}}
if(n2&&t.match(IN)){n.type=FOR_IN;n.object=Expression(t,x3);if(n2.type===VAR||n2.type===LET){c=n2.children;if(c.length!==1&&n2.destructurings.length!==1){throw new SyntaxError("Invalid for..in left-hand side",t.filename,n2.lineno);}
if(n2.destructurings.length>0){n.iterator=n2.destructurings[0];}else{n.iterator=c[0];}
n.varDecl=n2;}else{if(n2.type===ARRAY_INIT||n2.type===OBJECT_INIT){n2.destructuredNames=checkDestructuring(t,x3,n2);}
n.iterator=n2;}}else{n.setup=n2;t.mustMatch(SEMICOLON);if(n.isEach)
throw t.newSyntaxError("Invalid for each..in loop");n.condition=(t.peek()===SEMICOLON)?null:Expression(t,x3);t.mustMatch(SEMICOLON);tt2=t.peek();n.update=(x.parenFreeMode?tt2===LEFT_CURLY||definitions.isStatementStartCode[tt2]:tt2===RIGHT_PAREN)?null:Expression(t,x3);}
if(!x.parenFreeMode)
t.mustMatch(RIGHT_PAREN);n.body=Statement(t,x2);return n;case WHILE:n=new Node(t,{isLoop:true});n.condition=HeadExpression(t,x);n.body=Statement(t,x.pushTarget(n).nest(NESTING_DEEP));return n;case DO:n=new Node(t,{isLoop:true});n.body=Statement(t,x.pushTarget(n).nest(NESTING_DEEP));t.mustMatch(WHILE);n.condition=HeadExpression(t,x);if(!x.ecmaStrictMode){t.match(SEMICOLON);return n;}
break;case BREAK:case CONTINUE:n=new Node(t);x2=x.pushTarget(n);if(t.peekOnSameLine()===IDENTIFIER){t.get();n.label=t.token.value;}
n.target=n.label?x2.labeledTargets.find(function(target){return target.labels.has(n.label)}):x2.defaultTarget;if(!n.target)
throw t.newSyntaxError("Invalid "+((tt===BREAK)?"break":"continue"));if(!n.target.isLoop&&tt===CONTINUE)
throw t.newSyntaxError("Invalid continue");break;case TRY:n=new Node(t,{catchClauses:[]});n.tryBlock=Block(t,x);while(t.match(CATCH)){n2=new Node(t);p=MaybeLeftParen(t,x);switch(t.get()){case LEFT_BRACKET:case LEFT_CURLY:t.unget();n2.varName=DestructuringExpression(t,x,true);break;case IDENTIFIER:n2.varName=t.token.value;break;default:throw t.newSyntaxError("missing identifier in catch");break;}
if(t.match(IF)){if(x.ecma3OnlyMode)
throw t.newSyntaxError("Illegal catch guard");if(n.catchClauses.length&&!n.catchClauses.top().guard)
throw t.newSyntaxError("Guarded catch after unguarded");n2.guard=Expression(t,x);}
MaybeRightParen(t,p);n2.block=Block(t,x);n.catchClauses.push(n2);}
if(t.match(FINALLY))
n.finallyBlock=Block(t,x);if(!n.catchClauses.length&&!n.finallyBlock)
throw t.newSyntaxError("Invalid try statement");return n;case CATCH:case FINALLY:throw t.newSyntaxError(definitions.tokens[tt]+" without preceding try");case THROW:n=new Node(t);n.exception=Expression(t,x);break;case RETURN:n=ReturnOrYield(t,x);break;case WITH:n=new Node(t);n.object=HeadExpression(t,x);n.body=Statement(t,x.pushTarget(n).nest(NESTING_DEEP));return n;case VAR:case CONST:n=Variables(t,x);break;case LET:if(t.peek()===LEFT_PAREN)
n=LetBlock(t,x,true);else
n=Variables(t,x);break;case DEBUGGER:n=new Node(t);break;case NEWLINE:case SEMICOLON:n=new Node(t,{type:SEMICOLON});n.expression=null;return n;default:if(tt===IDENTIFIER){tt=t.peek();if(tt===COLON){label=t.token.value;if(x.allLabels.has(label))
throw t.newSyntaxError("Duplicate label");t.get();n=new Node(t,{type:LABEL,label:label});n.statement=Statement(t,x.pushLabel(label).nest(NESTING_SHALLOW));n.target=(n.statement.type===LABEL)?n.statement.target:n.statement;return n;}}
n=new Node(t,{type:SEMICOLON});t.unget();n.expression=Expression(t,x);n.end=n.expression.end;break;}
MagicalSemicolon(t);return n;}
function MagicalSemicolon(t){var tt;if(t.lineno===t.token.lineno){tt=t.peekOnSameLine();if(tt!==END&&tt!==NEWLINE&&tt!==SEMICOLON&&tt!==RIGHT_CURLY)
throw t.newSyntaxError("missing ; before statement");}
t.match(SEMICOLON);}
function ReturnOrYield(t,x){var n,b,tt=t.token.type,tt2;var parentScript=x.parentScript;if(tt===RETURN){if(!x.inFunction)
throw t.newSyntaxError("Return not in function");}else{if(!x.inFunction)
throw t.newSyntaxError("Yield not in function");parentScript.isGenerator=true;}
n=new Node(t,{value:undefined});tt2=t.peek(true);if(tt2!==END&&tt2!==NEWLINE&&tt2!==SEMICOLON&&tt2!==RIGHT_CURLY&&(tt!==YIELD||(tt2!==tt&&tt2!==RIGHT_BRACKET&&tt2!==RIGHT_PAREN&&tt2!==COLON&&tt2!==COMMA))){if(tt===RETURN){n.value=Expression(t,x);parentScript.hasReturnWithValue=true;}else{n.value=AssignExpression(t,x);}}else if(tt===RETURN){parentScript.hasEmptyReturn=true;}
if(parentScript.hasReturnWithValue&&parentScript.isGenerator)
throw t.newSyntaxError("Generator returns a value");return n;}
function FunctionDefinition(t,x,requireName,functionForm){var tt;var f=new Node(t,{params:[]});if(f.type!==FUNCTION)
f.type=(f.value==="get")?GETTER:SETTER;if(t.match(IDENTIFIER))
f.name=t.token.value;else if(requireName)
throw t.newSyntaxError("missing function identifier");var x2=new StaticContext(null,null,true,false,NESTING_TOP);t.mustMatch(LEFT_PAREN);if(!t.match(RIGHT_PAREN)){do{switch(t.get()){case LEFT_BRACKET:case LEFT_CURLY:t.unget();f.params.push(DestructuringExpression(t,x2));break;case IDENTIFIER:f.params.push(t.token.value);break;default:throw t.newSyntaxError("missing formal parameter");break;}}while(t.match(COMMA));t.mustMatch(RIGHT_PAREN);}
tt=t.get();if(tt!==LEFT_CURLY)
t.unget();if(tt!==LEFT_CURLY){f.body=AssignExpression(t,x2);if(f.body.isGenerator)
throw t.newSyntaxError("Generator returns a value");}else{f.body=Script(t,true);}
if(tt===LEFT_CURLY)
t.mustMatch(RIGHT_CURLY);f.end=t.token.end;f.functionForm=functionForm;if(functionForm===DECLARED_FORM)
x.parentScript.funDecls.push(f);return f;}
function Variables(t,x,letBlock){var n,n2,ss,i,s,tt;tt=t.token.type;switch(tt){case VAR:case CONST:s=x.parentScript;break;case LET:s=x.parentBlock;break;case LEFT_PAREN:tt=LET;s=letBlock;break;}
n=new Node(t,{type:tt,destructurings:[]});do{tt=t.get();if(tt===LEFT_BRACKET||tt===LEFT_CURLY){t.unget();var dexp=DestructuringExpression(t,x,true);n2=new Node(t,{type:IDENTIFIER,name:dexp,readOnly:n.type===CONST});n.push(n2);pushDestructuringVarDecls(n2.name.destructuredNames,s);n.destructurings.push({exp:dexp,decl:n2});if(x.inForLoopInit&&t.peek()===IN){continue;}
t.mustMatch(ASSIGN);if(t.token.assignOp)
throw t.newSyntaxError("Invalid variable initialization");n2.initializer=AssignExpression(t,x);continue;}
if(tt!==IDENTIFIER)
throw t.newSyntaxError("missing variable name");n2=new Node(t,{type:IDENTIFIER,name:t.token.value,readOnly:n.type===CONST});n.push(n2);s.varDecls.push(n2);if(t.match(ASSIGN)){if(t.token.assignOp)
throw t.newSyntaxError("Invalid variable initialization");n2.initializer=AssignExpression(t,x);}}while(t.match(COMMA));return n;}
function LetBlock(t,x,isStatement){var n,n2;n=new Node(t,{type:LET_BLOCK,varDecls:[]});t.mustMatch(LEFT_PAREN);n.variables=Variables(t,x,n);t.mustMatch(RIGHT_PAREN);if(isStatement&&t.peek()!==LEFT_CURLY){n2=new Node(t,{type:SEMICOLON,expression:n});isStatement=false;}
if(isStatement)
n.block=Block(t,x);else
n.expression=AssignExpression(t,x);return n;}
function checkDestructuring(t,x,n,simpleNamesOnly){if(n.type===ARRAY_COMP)
throw t.newSyntaxError("Invalid array comprehension left-hand side");if(n.type!==ARRAY_INIT&&n.type!==OBJECT_INIT)
return;var lhss={};var nn,n2,idx,sub,cc,c=n.children;for(var i=0,j=c.length;i<j;i++){if(!(nn=c[i]))
continue;if(nn.type===PROPERTY_INIT){cc=nn.children;sub=cc[1];idx=cc[0].value;}else if(n.type===OBJECT_INIT){sub=nn;idx=nn.value;}else{sub=nn;idx=i;}
if(sub.type===ARRAY_INIT||sub.type===OBJECT_INIT){lhss[idx]=checkDestructuring(t,x,sub,simpleNamesOnly);}else{if(simpleNamesOnly&&sub.type!==IDENTIFIER){throw t.newSyntaxError("missing name in pattern");}
lhss[idx]=sub;}}
return lhss;}
function DestructuringExpression(t,x,simpleNamesOnly){var n=PrimaryExpression(t,x);n.destructuredNames=checkDestructuring(t,x,n,simpleNamesOnly);return n;}
function GeneratorExpression(t,x,e){return new Node(t,{type:GENERATOR,expression:e,tail:ComprehensionTail(t,x)});}
function ComprehensionTail(t,x){var body,n,n2,n3,p;body=new Node(t,{type:COMP_TAIL});do{n=new Node(t,{type:FOR_IN,isLoop:true});if(t.match(IDENTIFIER)){if(t.token.value==="each")
n.isEach=true;else
t.unget();}
p=MaybeLeftParen(t,x);switch(t.get()){case LEFT_BRACKET:case LEFT_CURLY:t.unget();n.iterator=DestructuringExpression(t,x);break;case IDENTIFIER:n.iterator=n3=new Node(t,{type:IDENTIFIER});n3.name=n3.value;n.varDecl=n2=new Node(t,{type:VAR});n2.push(n3);x.parentScript.varDecls.push(n3);break;default:throw t.newSyntaxError("missing identifier");}
t.mustMatch(IN);n.object=Expression(t,x);MaybeRightParen(t,p);body.push(n);}while(t.match(FOR));if(t.match(IF))
body.guard=HeadExpression(t,x);return body;}
function HeadExpression(t,x){var p=MaybeLeftParen(t,x);var n=ParenExpression(t,x);MaybeRightParen(t,p);if(p===END&&!n.parenthesized){var tt=t.peek();if(tt!==LEFT_CURLY&&!definitions.isStatementStartCode[tt])
throw t.newSyntaxError("Unparenthesized head followed by unbraced body");}
return n;}
function ParenExpression(t,x){var n=Expression(t,x.update({inForLoopInit:x.inForLoopInit&&(t.token.type===LEFT_PAREN)}));if(t.match(FOR)){if(n.type===YIELD&&!n.parenthesized)
throw t.newSyntaxError("Yield expression must be parenthesized");if(n.type===COMMA&&!n.parenthesized)
throw t.newSyntaxError("Generator expression must be parenthesized");n=GeneratorExpression(t,x,n);}
return n;}
function Expression(t,x){var n,n2;n=AssignExpression(t,x);if(t.match(COMMA)){n2=new Node(t,{type:COMMA});n2.push(n);n=n2;do{n2=n.children[n.children.length-1];if(n2.type===YIELD&&!n2.parenthesized)
throw t.newSyntaxError("Yield expression must be parenthesized");n.push(AssignExpression(t,x));}while(t.match(COMMA));}
return n;}
function AssignExpression(t,x){var n,lhs;if(t.match(YIELD,true))
return ReturnOrYield(t,x);n=new Node(t,{type:ASSIGN});lhs=ConditionalExpression(t,x);if(!t.match(ASSIGN)){return lhs;}
switch(lhs.type){case OBJECT_INIT:case ARRAY_INIT:lhs.destructuredNames=checkDestructuring(t,x,lhs);case IDENTIFIER:case DOT:case INDEX:case CALL:break;default:throw t.newSyntaxError("Bad left-hand side of assignment");break;}
n.assignOp=t.token.assignOp;n.push(lhs);n.push(AssignExpression(t,x));return n;}
function ConditionalExpression(t,x){var n,n2;n=OrExpression(t,x);if(t.match(HOOK)){n2=n;n=new Node(t,{type:HOOK});n.push(n2);n.push(AssignExpression(t,x.update({inForLoopInit:false})));if(!t.match(COLON))
throw t.newSyntaxError("missing : after ?");n.push(AssignExpression(t,x));}
return n;}
function OrExpression(t,x){var n,n2;n=AndExpression(t,x);while(t.match(OR)){n2=new Node(t);n2.push(n);n2.push(AndExpression(t,x));n=n2;}
return n;}
function AndExpression(t,x){var n,n2;n=BitwiseOrExpression(t,x);while(t.match(AND)){n2=new Node(t);n2.push(n);n2.push(BitwiseOrExpression(t,x));n=n2;}
return n;}
function BitwiseOrExpression(t,x){var n,n2;n=BitwiseXorExpression(t,x);while(t.match(BITWISE_OR)){n2=new Node(t);n2.push(n);n2.push(BitwiseXorExpression(t,x));n=n2;}
return n;}
function BitwiseXorExpression(t,x){var n,n2;n=BitwiseAndExpression(t,x);while(t.match(BITWISE_XOR)){n2=new Node(t);n2.push(n);n2.push(BitwiseAndExpression(t,x));n=n2;}
return n;}
function BitwiseAndExpression(t,x){var n,n2;n=EqualityExpression(t,x);while(t.match(BITWISE_AND)){n2=new Node(t);n2.push(n);n2.push(EqualityExpression(t,x));n=n2;}
return n;}
function EqualityExpression(t,x){var n,n2;n=RelationalExpression(t,x);while(t.match(EQ)||t.match(NE)||t.match(STRICT_EQ)||t.match(STRICT_NE)){n2=new Node(t);n2.push(n);n2.push(RelationalExpression(t,x));n=n2;}
return n;}
function RelationalExpression(t,x){var n,n2;var x2=x.update({inForLoopInit:false});n=ShiftExpression(t,x2);while((t.match(LT)||t.match(LE)||t.match(GE)||t.match(GT)||(!x.inForLoopInit&&t.match(IN))||t.match(INSTANCEOF))){n2=new Node(t);n2.push(n);n2.push(ShiftExpression(t,x2));n=n2;}
return n;}
function ShiftExpression(t,x){var n,n2;n=AddExpression(t,x);while(t.match(LSH)||t.match(RSH)||t.match(URSH)){n2=new Node(t);n2.push(n);n2.push(AddExpression(t,x));n=n2;}
return n;}
function AddExpression(t,x){var n,n2;n=MultiplyExpression(t,x);while(t.match(PLUS)||t.match(MINUS)){n2=new Node(t);n2.push(n);n2.push(MultiplyExpression(t,x));n=n2;}
return n;}
function MultiplyExpression(t,x){var n,n2;n=UnaryExpression(t,x);while(t.match(MUL)||t.match(DIV)||t.match(MOD)){n2=new Node(t);n2.push(n);n2.push(UnaryExpression(t,x));n=n2;}
return n;}
function UnaryExpression(t,x){var n,n2,tt;switch(tt=t.get(true)){case DELETE:case VOID:case TYPEOF:case NOT:case BITWISE_NOT:case PLUS:case MINUS:if(tt===PLUS)
n=new Node(t,{type:UNARY_PLUS});else if(tt===MINUS)
n=new Node(t,{type:UNARY_MINUS});else
n=new Node(t);n.push(UnaryExpression(t,x));break;case INCREMENT:case DECREMENT:n=new Node(t);n.push(MemberExpression(t,x,true));break;default:t.unget();n=MemberExpression(t,x,true);if(t.tokens[(t.tokenIndex+t.lookahead-1)&3].lineno===t.lineno){if(t.match(INCREMENT)||t.match(DECREMENT)){n2=new Node(t,{postfix:true});n2.push(n);n=n2;}}
break;}
return n;}
function MemberExpression(t,x,allowCallSyntax){var n,n2,name,tt;if(t.match(NEW)){n=new Node(t);n.push(MemberExpression(t,x,false));if(t.match(LEFT_PAREN)){n.type=NEW_WITH_ARGS;n.push(ArgumentList(t,x));}}else{n=PrimaryExpression(t,x);}
while((tt=t.get())!==END){switch(tt){case DOT:n2=new Node(t);n2.push(n);t.mustMatch(IDENTIFIER);n2.push(new Node(t));break;case LEFT_BRACKET:n2=new Node(t,{type:INDEX});n2.push(n);n2.push(Expression(t,x));t.mustMatch(RIGHT_BRACKET);break;case LEFT_PAREN:if(allowCallSyntax){n2=new Node(t,{type:CALL});n2.push(n);n2.push(ArgumentList(t,x));break;}
default:t.unget();return n;}
n=n2;}
return n;}
function ArgumentList(t,x){var n,n2;n=new Node(t,{type:LIST});if(t.match(RIGHT_PAREN,true))
return n;do{n2=AssignExpression(t,x);if(n2.type===YIELD&&!n2.parenthesized&&t.peek()===COMMA)
throw t.newSyntaxError("Yield expression must be parenthesized");if(t.match(FOR)){n2=GeneratorExpression(t,x,n2);if(n.children.length>1||t.peek(true)===COMMA)
throw t.newSyntaxError("Generator expression must be parenthesized");}
n.push(n2);}while(t.match(COMMA));t.mustMatch(RIGHT_PAREN);return n;}
function PrimaryExpression(t,x){var n,n2,tt=t.get(true);switch(tt){case FUNCTION:n=FunctionDefinition(t,x,false,EXPRESSED_FORM);break;case LEFT_BRACKET:n=new Node(t,{type:ARRAY_INIT});while((tt=t.peek(true))!==RIGHT_BRACKET){if(tt===COMMA){t.get();n.push(null);continue;}
n.push(AssignExpression(t,x));if(tt!==COMMA&&!t.match(COMMA))
break;}
if(n.children.length===1&&t.match(FOR)){n2=new Node(t,{type:ARRAY_COMP,expression:n.children[0],tail:ComprehensionTail(t,x)});n=n2;}
t.mustMatch(RIGHT_BRACKET);break;case LEFT_CURLY:var id,fd;n=new Node(t,{type:OBJECT_INIT});object_init:if(!t.match(RIGHT_CURLY)){do{tt=t.get();if((t.token.value==="get"||t.token.value==="set")&&t.peek()===IDENTIFIER){if(x.ecma3OnlyMode)
throw t.newSyntaxError("Illegal property accessor");n.push(FunctionDefinition(t,x,true,EXPRESSED_FORM));}else{switch(tt){case IDENTIFIER:case NUMBER:case STRING:id=new Node(t,{type:IDENTIFIER});break;case RIGHT_CURLY:if(x.ecma3OnlyMode)
throw t.newSyntaxError("Illegal trailing ,");break object_init;default:if(t.token.value in definitions.keywords){id=new Node(t,{type:IDENTIFIER});break;}
throw t.newSyntaxError("Invalid property name");}
if(t.match(COLON)){n2=new Node(t,{type:PROPERTY_INIT});n2.push(id);n2.push(AssignExpression(t,x));n.push(n2);}else{if(t.peek()!==COMMA&&t.peek()!==RIGHT_CURLY)
throw t.newSyntaxError("missing : after property");n.push(id);}}}while(t.match(COMMA));t.mustMatch(RIGHT_CURLY);}
break;case LEFT_PAREN:n=ParenExpression(t,x);t.mustMatch(RIGHT_PAREN);n.parenthesized=true;break;case LET:n=LetBlock(t,x,false);break;case NULL:case THIS:case TRUE:case FALSE:case IDENTIFIER:case NUMBER:case STRING:case REGEXP:n=new Node(t);break;default:throw t.newSyntaxError("missing operand");break;}
return n;}
function parse(s,f,l){var t=new lexer.Tokenizer(s,f,l);var n=Script(t,false);if(!t.done)
throw t.newSyntaxError("Syntax error");return n;}
function parseStdin(s,ln){for(;;){try{var t=new lexer.Tokenizer(s,"stdin",ln.value);var n=Script(t,false);ln.value=t.lineno;return n;}catch(e){if(!t.unexpectedEOF)
throw e;var more=readline();if(!more)
throw e;s+="\n"+more;}}}
return{parse:parse,parseStdin:parseStdin,Node:Node,DECLARED_FORM:DECLARED_FORM,EXPRESSED_FORM:EXPRESSED_FORM,STATEMENT_FORM:STATEMENT_FORM,Tokenizer:lexer.Tokenizer,FunctionDefinition:FunctionDefinition};}());var exports={definitions:Narcissus.definitions,lexer:Narcissus.lexer,parser:Narcissus.parser};if(typeof module!='undefined'){module.exports=exports;};(function(){var Node,Typenames,Types,exports,narcissus,parser,tokens,_,__indexOf=Array.prototype.indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;},__slice=Array.prototype.slice;narcissus=this.Narcissus||require('./narcissus_packed');_=this._||require('underscore');tokens=narcissus.definitions.tokens;parser=narcissus.parser;Node=parser.Node;Node.prototype.left=function(){return this.children[0];};Node.prototype.right=function(){return this.children[1];};Node.prototype.last=function(){return this.children[this.children.length-1];};Node.prototype.walk=function(options,fn,parent,list){if(parent==null)parent=null;if(list==null)list=null;if(parent)fn(parent,this,list);if(options.last)if(this.last()!=null)this.last().walk(options,fn,this);if(this.thenPart!=null)this.thenPart.walk(options,fn,this,'thenPart');if(this.elsePart!=null)this.elsePart.walk(options,fn,this,'elsePart');if(this.cases){return _.each(this.cases,function(item){return item.statements.walk(options,fn,item,'cases');});}};Node.prototype.clone=function(hash){var i;for(i in this){if(i==='tokenizer'||i==='length'||i==='filename')continue;if(hash[i]==null)hash[i]=this[i];}
return new Node(this.tokenizer,hash);};Node.prototype.toHash=function(done){var hash,i,toHash;if(done==null)done=[];hash={};toHash=function(what){if(!what)return null;if(what.toHash){if(__indexOf.call(done,what)>=0){return"--recursive "+what.id+"--";}
what.id=done.push(what);return what.toHash(done);}else{return what;}};hash.type=this.typeName();hash.src=this.src();for(i in this){if(i==='filename'||i==='length'||i==='type'||i==='start'||i==='end'||i==='tokenizer'){continue;}
if(typeof this[i]==='function')continue;if(!this[i])continue;if(this[i].constructor===Array){hash[i]=_.map(this[i],function(item){return toHash(item);});}else{hash[i]=toHash(this[i]);}}
return hash;};Node.prototype.inspect=function(){return JSON.stringify(this.toHash(),null,'  ');};Node.prototype.src=function(){return this.tokenizer.source.substr(this.start,this.end-this.start);};Node.prototype.typeName=function(){return Types[this.type];};Node.prototype.isA=function(){var what,_ref;what=1<=arguments.length?__slice.call(arguments,0):[];return _ref=Types[this.type],__indexOf.call(what,_ref)>=0;};Types=(function(){var dict,i,last;dict={};last=0;for(i in tokens){if(typeof tokens[i]==='number'){dict[tokens[i]]=i.toLowerCase();last=tokens[i];}}
dict[++last]='call_statement';dict[++last]='existence_check';return dict;})();Typenames=(function(){var dict,i;dict={};for(i in Types){dict[Types[i]]=i;}
return dict;})();this.NodeExt=exports={Types:Types,Typenames:Typenames,Node:Node};if(typeof module!=="undefined"&&module!==null)module.exports=exports;}).call(this);(function(){var Code,CoffeeScript,blockTrim,coffeescript_reserved,exports,indentLines,isSingleLine,ltrim,p,paren,rtrim,strEscape,strRepeat,trim,truthy,unreserve,unshift,word,__indexOf=Array.prototype.indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};CoffeeScript=this.CoffeeScript||require('coffee-script');Code=(function(){function Code(){this.code='';}
Code.prototype.add=function(str){this.code+=str.toString();return this;};Code.prototype.scope=function(str,level){var indent;if(level==null)level=1;indent=strRepeat("  ",level);this.code=rtrim(this.code)+"\n";this.code+=indent+rtrim(str).replace(/\n/g,"\n"+indent)+"\n";return this;};Code.prototype.toString=function(){return this.code;};return Code;})();paren=function(string){var str;str=string.toString();if(str.substr(0,1)==='('&&str.substr(-1,1)===')'){return str;}else{return"("+str+")";}};strRepeat=function(str,times){var i;return((function(){var _results;_results=[];for(i=0;0<=times?i<times:i>times;0<=times?i++:i--){_results.push(str);}
return _results;})()).join('');};ltrim=function(str){return(""+str).replace(/^\s*/g,'');};rtrim=function(str){return(""+str).replace(/\s*$/g,'');};blockTrim=function(str){return(""+str).replace(/^\s*\n|\s*$/g,'');};trim=function(str){return(""+str).replace(/^\s*|\s*$/g,'');};isSingleLine=function(str){return trim(str).indexOf("\n")===-1;};unshift=function(str){var m1,m2;str=""+str;while(true){m1=str.match(/^/gm);m2=str.match(/^ /gm);if(!m1||!m2||m1.length!==m2.length)return str;str=str.replace(/^ /gm,'');}};truthy=function(n){return n.isA('true')||(n.isA('number')&&parseFloat(n.src())!==0.0);};strEscape=function(str){return JSON.stringify(""+str);};p=function(str){if(str.constructor===String){console.log(JSON.stringify(str));}else{console.log(str);}
return'';};coffeescript_reserved=(function(){var _i,_len,_ref,_results;_ref=CoffeeScript.RESERVED;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){word=_ref[_i];if(word!=='undefined')_results.push(word);}
return _results;})();unreserve=function(str){var _ref;if(_ref=""+str,__indexOf.call(coffeescript_reserved,_ref)>=0){return""+str+"_";}else{return""+str;}};indentLines=function(indent,lines){return indent+lines.replace(/\n/g,"\n"+indent);};this.Js2coffeeHelpers=exports={Code:Code,p:p,strEscape:strEscape,unreserve:unreserve,unshift:unshift,isSingleLine:isSingleLine,trim:trim,blockTrim:blockTrim,ltrim:ltrim,rtrim:rtrim,strRepeat:strRepeat,paren:paren,truthy:truthy,indentLines:indentLines};if(typeof module!=="undefined"&&module!==null)module.exports=exports;}).call(this);(function(){var Builder,Code,Node,Transformer,Typenames,Types,UnsupportedError,blockTrim,buildCoffee,exports,indentLines,isSingleLine,ltrim,p,paren,parser,rtrim,strEscape,strRepeat,trim,truthy,unreserve,unshift,_,_ref,_ref2,__indexOf=Array.prototype.indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;},__slice=Array.prototype.slice,__hasProp=Object.prototype.hasOwnProperty;parser=(this.Narcissus||require('./narcissus_packed')).parser;_=this._||require('underscore');_ref=this.NodeExt||require('./node_ext'),Types=_ref.Types,Typenames=_ref.Typenames,Node=_ref.Node;_ref2=this.Js2coffeeHelpers||require('./helpers'),Code=_ref2.Code,p=_ref2.p,strEscape=_ref2.strEscape,unreserve=_ref2.unreserve,unshift=_ref2.unshift,isSingleLine=_ref2.isSingleLine,trim=_ref2.trim,blockTrim=_ref2.blockTrim,ltrim=_ref2.ltrim,rtrim=_ref2.rtrim,strRepeat=_ref2.strRepeat,paren=_ref2.paren,truthy=_ref2.truthy,indentLines=_ref2.indentLines;buildCoffee=function(str,opts){var builder,comments,indent,keepLineNumbers,l,line,minline,output,precomments,res,scriptNode,srclines,text,_i,_len,_ref3;if(opts==null)opts={};str=str.replace(/\r/g,'');str+="\n";builder=new Builder(opts);scriptNode=parser.parse(str);output=trim(builder.build(scriptNode));if(opts.no_comments){return((function(){var _i,_len,_ref3,_results;_ref3=output.split('\n');_results=[];for(_i=0,_len=_ref3.length;_i<_len;_i++){line=_ref3[_i];_results.push(rtrim(line));}
return _results;})()).join('\n');}else{keepLineNumbers=opts.show_src_lineno;res=[];_ref3=output.split("\n");for(_i=0,_len=_ref3.length;_i<_len;_i++){l=_ref3[_i];srclines=[];text=l.replace(/\uFEFE([0-9]+).*?\uFEFE/g,function(m,g){srclines.push(parseInt(g));return"";});srclines=_.sortBy(_.uniq(srclines),function(i){return i;});text=rtrim(text);indent=text.match(/^\s*/);if(srclines.length>0){minline=_.last(srclines);precomments=builder.commentsNotDoneTo(minline);if(precomments)res.push(indentLines(indent,precomments));}
if(text){if(keepLineNumbers)text=text+"#"+srclines.join(",")+"#  ";res.push(rtrim(text+" "+ltrim(builder.lineComments(srclines))));}else{res.push("");}}
comments=builder.commentsNotDoneTo(1e10);if(comments)res.push(comments);return res.join("\n");}};Builder=(function(){function Builder(options){this.options=options!=null?options:{};this.transformer=new Transformer;}
Builder.prototype.l=function(n){if(this.options.no_comments)return'';if(n&&n.lineno){return"\uFEFE"+n.lineno+"\uFEFE";}else{return"";}};Builder.prototype.makeComment=function(comment){var c,line;if(comment.type==="BLOCK_COMMENT"){c=comment.value.split("\n");if(c.length>0&&c[0].length>0&&c[0][0]==="*"){c=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=c.length;_i<_len;_i++){line=c[_i];_results.push(line.replace(/^[\s\*]*/,''));}
return _results;})();c=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=c.length;_i<_len;_i++){line=c[_i];_results.push(line.replace(/[\s]*$/,''));}
return _results;})();while(c.length>0&&c[0].length===0){c.shift();}
while(c.length>0&&c[c.length-1].length===0){c.pop();}
c.unshift('###');c.push('###');}else{c=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=c.length;_i<_len;_i++){line=c[_i];_results.push("#"+line);}
return _results;})();}}else{c=['#'+comment.value];}
if(comment.nlcount>0)c.unshift('');return c.join('\n');};Builder.prototype.commentsNotDoneTo=function(lineno){var c,res;res=[];while(true){if(this.comments.length===0)break;c=this.comments[0];if(c.lineno<lineno){res.push(this.makeComment(c));this.comments.shift();continue;}
break;}
return res.join("\n");};Builder.prototype.lineComments=function(linenos){var c,selection;selection=(function(){var _i,_len,_ref3,_ref4,_results;_ref3=this.comments;_results=[];for(_i=0,_len=_ref3.length;_i<_len;_i++){c=_ref3[_i];if(_ref4=c.lineno,__indexOf.call(linenos,_ref4)>=0){_results.push(c);}}
return _results;}).call(this);this.comments=_.difference(this.comments,selection);return((function(){var _i,_len,_results;_results=[];for(_i=0,_len=selection.length;_i<_len;_i++){c=selection[_i];_results.push(this.makeComment(c));}
return _results;}).call(this)).join("\n");};Builder.prototype.build=function(){var args,fn,name,node,out;args=1<=arguments.length?__slice.call(arguments,0):[];node=args[0];if(!(this.comments!=null)){this.comments=_.sortBy(node.tokenizer.comments,function(n){return n.start;});}
this.transform(node);name='other';if(node!==void 0&&node.typeName)name=node.typeName();fn=this[name]||this.other;out=fn.apply(this,args);if(node.parenthesized){return paren(out);}else{return out;}};Builder.prototype.transform=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return this.transformer.transform.apply(this.transformer,args);};Builder.prototype.body=function(node,opts){var str;if(opts==null)opts={};str=this.build(node,opts);str=blockTrim(str);str=unshift(str);if(str.length>0){return str;}else{return"";}};Builder.prototype['script']=function(n,opts){var c,_this=this;if(opts==null)opts={};c=new Code;_.each(n.functions,function(item){return c.add(_this.build(item));});_.each(n.nonfunctions,function(item){return c.add(_this.build(item));});return c.toString();};Builder.prototype['property_identifier']=function(n){var str;str=n.value.toString();if(str.match(/^([_\$a-z][_\$a-z0-9]*)$/i)||str.match(/^[0-9]+$/i)){return this.l(n)+str;}else{return this.l(n)+strEscape(str);}};Builder.prototype['identifier']=function(n){if(n.value==='undefined'){return this.l(n)+'`undefined`';}else if(n.property_accessor){return this.l(n)+n.value.toString();}else{return this.l(n)+unreserve(n.value.toString());}};Builder.prototype['number']=function(n){return this.l(n)+(""+(n.src()));};Builder.prototype['id']=function(n){if(n.property_accessor){return this.l(n)+n;}else{return this.l(n)+unreserve(n);}};Builder.prototype['id_param']=function(n){var _ref3;if((_ref3=n.toString())==='undefined'){return this.l(n)+(""+n+"_");}else{return this.l(n)+this.id(n);}};Builder.prototype['return']=function(n){if(!(n.value!=null)){return this.l(n)+"return\n";}else{return this.l(n)+("return "+(this.build(n.value))+"\n");}};Builder.prototype[';']=function(n){var src;if(n.expression==null){return"";}else if(n.expression.typeName()==='object_init'){src=this.object_init(n.expression);if(n.parenthesized){return src;}else{return""+(unshift(blockTrim(src)))+"\n";}}else{return this.build(n.expression)+"\n";}};Builder.prototype['new']=function(n){return this.l(n)+("new "+(this.build(n.left())));};Builder.prototype['new_with_args']=function(n){return this.l(n)+("new "+(this.build(n.left()))+"("+(this.build(n.right()))+")");};Builder.prototype['unary_plus']=function(n){return"+"+(this.build(n.left()));};Builder.prototype['unary_minus']=function(n){return"-"+(this.build(n.left()));};Builder.prototype['this']=function(n){return this.l(n)+'this';};Builder.prototype['null']=function(n){return this.l(n)+'null';};Builder.prototype['true']=function(n){return this.l(n)+'true';};Builder.prototype['false']=function(n){return this.l(n)+'false';};Builder.prototype['void']=function(n){return this.l(n)+'undefined';};Builder.prototype['debugger']=function(n){return this.l(n)+"debugger\n";};Builder.prototype['break']=function(n){return this.l(n)+"break\n";};Builder.prototype['continue']=function(n){return this.l(n)+"continue\n";};Builder.prototype['~']=function(n){return"~"+(this.build(n.left()));};Builder.prototype['typeof']=function(n){return this.l(n)+("typeof "+(this.build(n.left())));};Builder.prototype['index']=function(n){var right;right=this.build(n.right());if(_.any(n.children,function(child){return child.typeName()==='object_init'&&child.children.length>1;})){right="{"+right+"}";}
return this.l(n)+(""+(this.build(n.left()))+"["+right+"]");};Builder.prototype['throw']=function(n){return this.l(n)+("throw "+(this.build(n.exception)));};Builder.prototype['!']=function(n){var negations,target;target=n.left();negations=1;while((target.isA('!'))&&(target=target.left())){++negations;}
if((negations&1)&&target.isA('==','!=','===','!==','in','instanceof')){target.negated=!target.negated;return this.build(target);}
return this.l(n)+(""+(negations&1?'not ':'!!')+(this.build(target)));};Builder.prototype["in"]=function(n){return this.binary_operator(n,'of');};Builder.prototype['+']=function(n){return this.binary_operator(n,'+');};Builder.prototype['-']=function(n){return this.binary_operator(n,'-');};Builder.prototype['*']=function(n){return this.binary_operator(n,'*');};Builder.prototype['/']=function(n){return this.binary_operator(n,'/');};Builder.prototype['%']=function(n){return this.binary_operator(n,'%');};Builder.prototype['>']=function(n){return this.binary_operator(n,'>');};Builder.prototype['<']=function(n){return this.binary_operator(n,'<');};Builder.prototype['&']=function(n){return this.binary_operator(n,'&');};Builder.prototype['|']=function(n){return this.binary_operator(n,'|');};Builder.prototype['^']=function(n){return this.binary_operator(n,'^');};Builder.prototype['&&']=function(n){return this.binary_operator(n,'and');};Builder.prototype['||']=function(n){return this.binary_operator(n,'or');};Builder.prototype['<<']=function(n){return this.binary_operator(n,'<<');};Builder.prototype['<=']=function(n){return this.binary_operator(n,'<=');};Builder.prototype['>>']=function(n){return this.binary_operator(n,'>>');};Builder.prototype['>=']=function(n){return this.binary_operator(n,'>=');};Builder.prototype['===']=function(n){return this.binary_operator(n,'is');};Builder.prototype['!==']=function(n){return this.binary_operator(n,'isnt');};Builder.prototype['>>>']=function(n){return this.binary_operator(n,'>>>');};Builder.prototype["instanceof"]=function(n){return this.binary_operator(n,'instanceof');};Builder.prototype['==']=function(n){return this.binary_operator(n,'is');};Builder.prototype['!=']=function(n){return this.binary_operator(n,'isnt');};Builder.prototype['binary_operator']=(function(){var INVERSIONS,k,v;INVERSIONS={is:'isnt',"in":'not in',of:'not of',"instanceof":'not instanceof'};for(k in INVERSIONS){if(!__hasProp.call(INVERSIONS,k))continue;v=INVERSIONS[k];INVERSIONS[v]=k;}
return function(n,sign){if(n.negated)sign=INVERSIONS[sign];return this.l(n)+(""+(this.build(n.left()))+" "+sign+" "+(this.build(n.right())));};})();Builder.prototype['--']=function(n){return this.increment_decrement(n,'--');};Builder.prototype['++']=function(n){return this.increment_decrement(n,'++');};Builder.prototype['increment_decrement']=function(n,sign){if(n.postfix){return this.l(n)+(""+(this.build(n.left()))+sign);}else{return this.l(n)+(""+sign+(this.build(n.left())));}};Builder.prototype['=']=function(n){var sign;sign=n.assignOp!=null?Types[n.assignOp]+'=':'=';return this.l(n)+(""+(this.build(n.left()))+" "+sign+" "+(this.build(n.right())));};Builder.prototype[',']=function(n){var list,_this=this;list=_.map(n.children,function(item){return _this.l(item)+_this.build(item)+"\n";});return list.join('');};Builder.prototype['regexp']=function(n){var begins_with,flag,m,value;m=n.value.toString().match(/^\/(.*)\/([a-z]?)/);value=m[1];flag=m[2];begins_with=value[0];if(begins_with===' '||begins_with==='='){if(flag.length>0){return this.l(n)+("RegExp("+(strEscape(value))+", \""+flag+"\")");}else{return this.l(n)+("RegExp("+(strEscape(value))+")");}}else{return this.l(n)+("/"+value+"/"+flag);}};Builder.prototype['string']=function(n){return this.l(n)+strEscape(n.value);};Builder.prototype['call']=function(n){if(n.right().children.length===0){return(""+(this.build(n.left()))+"()")+this.l(n);}else{return(""+(this.build(n.left()))+"("+(this.build(n.right()))+")")+this.l(n);}};Builder.prototype['call_statement']=function(n){var left;left=this.build(n.left());if(n.left().isA('function'))left=paren(left);if(n.right().children.length===0){return(""+left+"()")+this.l(n);}else{return(""+left+" "+(this.build(n.right())))+this.l(n);}};Builder.prototype['list']=function(n){var list,_this=this;list=_.map(n.children,function(item){if(n.children.length>1)item.is_list_element=true;return _this.build(item);});return this.l(n)+list.join(", ");};Builder.prototype['delete']=function(n){var ids,_this=this;ids=_.map(n.children,function(el){return _this.build(el);});ids=ids.join(', ');return this.l(n)+("delete "+ids+"\n");};Builder.prototype['.']=function(n){var left,right,right_obj;left=this.build(n.left());right_obj=n.right();right_obj.property_accessor=true;right=this.build(right_obj);if(n.isThis&&n.isPrototype){return this.l(n)+"@::";}else if(n.isThis){return this.l(n)+("@"+right);}else if(n.isPrototype){return this.l(n)+(""+left+"::");}else if(n.left().isPrototype){return this.l(n)+(""+left+right);}else{return this.l(n)+(""+left+"."+right);}};Builder.prototype['try']=function(n){var c,_this=this;c=new Code;c.add('try');c.scope(this.body(n.tryBlock));_.each(n.catchClauses,function(clause){return c.add(_this.build(clause));});if(n.finallyBlock!=null){c.add("finally");c.scope(this.body(n.finallyBlock));}
return this.l(n)+c;};Builder.prototype['catch']=function(n){var body_,c;body_=this.body(n.block);if(trim(body_).length===0)return'';c=new Code;if(n.varName!=null){c.add("catch "+n.varName);}else{c.add('catch');}
c.scope(this.body(n.block));return this.l(n)+c;};Builder.prototype['?']=function(n){return this.l(n)+("(if "+(this.build(n.left()))+" then "+(this.build(n.children[1]))+" else "+(this.build(n.children[2]))+")");};Builder.prototype['for']=function(n){var c;c=new Code;if(n.setup!=null)c.add(""+(this.build(n.setup))+"\n");if(n.condition!=null){c.add("while "+(this.build(n.condition))+"\n");}else{c.add("loop");}
c.scope(this.body(n.body));if(n.update!=null)c.scope(this.body(n.update));return this.l(n)+c;};Builder.prototype['for_in']=function(n){var c;c=new Code;c.add("for "+(this.build(n.iterator))+" of "+(this.build(n.object)));c.scope(this.body(n.body));return this.l(n)+c;};Builder.prototype['while']=function(n){var body_,c,keyword,statement;c=new Code;keyword=n.positive?"while":"until";body_=this.body(n.body);if(truthy(n.condition)){statement="loop";}else{statement=""+keyword+" "+(this.build(n.condition));}
if(isSingleLine(body_)&&statement!=="loop"){c.add(""+(trim(body_))+"  "+statement+"\n");}else{c.add(statement);c.scope(body_);}
return this.l(n)+c;};Builder.prototype['do']=function(n){var c;c=new Code;c.add("loop");c.scope(this.body(n.body));if(n.condition!=null){c.scope("break unless "+(this.build(n.condition)));}
return this.l(n)+c;};Builder.prototype['if']=function(n){var body_,c,keyword;c=new Code;keyword=n.positive?"if":"unless";body_=this.body(n.thenPart);n.condition.parenthesized=false;if(n.thenPart.isA('block')&&n.thenPart.children.length===0&&!(n.elsePart!=null)){console.log(n.thenPart);c.add(""+(this.build(n.condition))+"\n");}else if(isSingleLine(body_)&&!(n.elsePart!=null)){c.add(""+(trim(body_))+"  "+keyword+" "+(this.build(n.condition))+"\n");}else{c.add(""+keyword+" "+(this.build(n.condition)));c.scope(this.body(n.thenPart));if(n.elsePart!=null){if(n.elsePart.typeName()==='if'){c.add("else "+(this.build(n.elsePart).toString()));}else{c.add(this.l(n.elsePart)+"else\n");c.scope(this.body(n.elsePart));}}}
return this.l(n)+c;};Builder.prototype['switch']=function(n){var c,fall_through,_this=this;c=new Code;c.add("switch "+(this.build(n.discriminant))+"\n");fall_through=false;_.each(n.cases,function(item){var first;if(item.value==='default'){c.scope(_this.l(item)+"else");}else{if(fall_through===true){c.add(_this.l(item)+(", "+(_this.build(item.caseLabel))+"\n"));}else{c.add(_this.l(item)+("  when "+(_this.build(item.caseLabel))));}}
if(_this.body(item.statements).length===0){fall_through=true;}else{fall_through=false;c.add("\n");c.scope(_this.body(item.statements),2);}
return first=false;});return this.l(n)+c;};Builder.prototype['existence_check']=function(n){return this.l(n)+(""+(this.build(n.left()))+"?");};Builder.prototype['array_init']=function(n){if(n.children.length===0){return this.l(n)+"[]";}else{return this.l(n)+("["+(this.list(n))+"]");}};Builder.prototype['property_init']=function(n){var left,right;left=n.left();right=n.right();right.is_property_value=true;return""+(this.property_identifier(left))+": "+(this.build(right));};Builder.prototype['object_init']=function(n,options){var c,list,_this=this;if(options==null)options={};if(n.children.length===0){return this.l(n)+"{}";}else if(n.children.length===1&&!(n.is_property_value||n.is_list_element)){return this.build(n.children[0]);}else{list=_.map(n.children,function(item){return _this.build(item);});c=new Code(this,n);c.scope(list.join("\n"));if(options.brackets!=null)c="{"+c+"}";return c;}};Builder.prototype['function']=function(n){var body,c,params,_this=this;c=new Code;params=_.map(n.params,function(str){if(str.constructor===String){return _this.id_param(str);}else{return _this.build(str);}});if(n.name)c.add(""+n.name+" = ");if(n.params.length>0){c.add("("+(params.join(', '))+") ->");}else{c.add("->");}
body=this.body(n.body);if(trim(body).length>0){c.scope(body);}else{c.add("\n");}
return this.l(n)+c;};Builder.prototype['var']=function(n){var list,_this=this;list=_.map(n.children,function(item){return""+(unreserve(item.value))+" = "+(item.initializer!=null?_this.build(item.initializer):'undefined');});return this.l(n)+_.compact(list).join("\n")+"\n";};Builder.prototype['other']=function(n){return this.unsupported(n,""+(n.typeName())+" is not supported yet");};Builder.prototype['getter']=function(n){return this.unsupported(n,"getter syntax is not supported; use __defineGetter__");};Builder.prototype['setter']=function(n){return this.unsupported(n,"setter syntax is not supported; use __defineSetter__");};Builder.prototype['label']=function(n){return this.unsupported(n,"labels are not supported by CoffeeScript");};Builder.prototype['const']=function(n){return this.unsupported(n,"consts are not supported by CoffeeScript");};Builder.prototype['block']=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return this.script.apply(this,args);};Builder.prototype['unsupported']=function(node,message){throw new UnsupportedError("Unsupported: "+message,node);};return Builder;})();Transformer=(function(){function Transformer(){}
Transformer.prototype.transform=function(){var args,fn,node,type;args=1<=arguments.length?__slice.call(arguments,0):[];node=args[0];if(node.transformed!=null)return;type=node.typeName();fn=this[type];if(fn){fn.apply(this,args);return node.transformed=true;}};Transformer.prototype['script']=function(n){var last,_this=this;n.functions=[];n.nonfunctions=[];_.each(n.children,function(item){if(item.isA('function')){return n.functions.push(item);}else{return n.nonfunctions.push(item);}});last=null;return _.each(n.nonfunctions,function(item){var expr;if(item.expression!=null){expr=item.expression;if((last!=null?last.isA('object_init'):void 0)&&expr.isA('object_init')){item.parenthesized=true;}else{item.parenthesized=false;}
return last=expr;}});};Transformer.prototype['.']=function(n){n.isThis=n.left().isA('this');return n.isPrototype=n.right().isA('identifier')&&n.right().value==='prototype';};Transformer.prototype[';']=function(n){if(n.expression!=null){n.expression.parenthesized=false;if(n.expression.isA('call')){n.expression.type=Typenames['call_statement'];return this.call_statement(n);}}};Transformer.prototype['function']=function(n){return n.body.walk({last:true},function(parent,node,list){var lastNode;if(node.isA('return')&&node.value){lastNode=list?parent[list]:parent.children[parent.children.length-1];if(lastNode){lastNode.type=Typenames[';'];return lastNode.expression=lastNode.value;}}});};Transformer.prototype['switch']=function(n){var _this=this;return _.each(n.cases,function(item){var block,ch,_ref3;block=item.statements;ch=block.children;if((_ref3=block.last())!=null?_ref3.isA('break'):void 0){return delete ch[ch.length-1];}});};Transformer.prototype['call_statement']=function(n){if(n.children[1]){return _.each(n.children[1].children,function(child,i){if(child.isA('function')&&i!==n.children[1].children.length-1){return child.parenthesized=true;}});}};Transformer.prototype['return']=function(n){if(n.value&&n.value.isA('object_init')&&n.value.children.length>1){return n.value.parenthesized=true;}};Transformer.prototype['block']=function(n){return this.script(n);};Transformer.prototype['if']=function(n){var _ref3;if(n.thenPart.children.length===0&&((_ref3=n.elsePart)!=null?_ref3.children.length:void 0)>0){n.positive=false;n.thenPart=n.elsePart;delete n.elsePart;}
return this.inversible(n);};Transformer.prototype['while']=function(n){if(n.body.children.length===0){n.body.children.push(n.clone({type:Typenames['continue'],value:'continue',children:[]}));}
return this.inversible(n);};Transformer.prototype['inversible']=function(n){var positive;this.transform(n.condition);positive=n.positive!=null?n.positive:true;if(n.condition.isA('!=')){n.condition.type=Typenames['=='];return n.positive=!positive;}else if(n.condition.isA('!')){n.condition=n.condition.left();return n.positive=!positive;}else{return n.positive=positive;}};Transformer.prototype['==']=function(n){if(n.right().isA('null','void')){n.type=Typenames['!'];return n.children=[n.clone({type:Typenames['existence_check'],children:[n.left()]})];}};Transformer.prototype['!=']=function(n){if(n.right().isA('null','void')){n.type=Typenames['existence_check'];return n.children=[n.left()];}};return Transformer;})();UnsupportedError=(function(){function UnsupportedError(str,src){this.message=str;this.cursor=src.start;this.line=src.lineno;this.source=src.tokenizer.source;}
UnsupportedError.prototype.toString=function(){return this.message;};return UnsupportedError;})();this.Js2coffee=exports={VERSION:'0.2.0',build:buildCoffee,UnsupportedError:UnsupportedError};if(typeof module!=="undefined"&&module!==null)module.exports=exports;}).call(this);
/*!
 * Platform.js v1.0.0 <http://mths.be/platform>
 * Copyright 2010-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
(function(f){var p=f;var c=typeof exports=="object"&&exports;var n=typeof global=="object"&&global&&(global==global.global?(f=global):global);var k=/Opera/;var q=Object.prototype.toString;var l=/Java/.test(w(f.java))&&f.java;var B=l&&w(f.environment)=="Environment";var b=l?"a":"\u03b1";var x=l?"b":"\u03b2";var A=f.document||{};var h={}.hasOwnProperty;var e=f.navigator||{};var u=f.operamini||f.opera;var j=k.test(j=w(u))?j:(u=null);var d=this;var y=e.userAgent||"";function g(C){C=String(C);return C.charAt(0).toUpperCase()+C.slice(1)}function a(D,F){var C=-1,E=D.length;if(E==E>>>0){while(++C<E){F(D[C],C,D)}}else{v(D,F)}}function t(C){C=s(C);return/^(?:webOS|i(?:OS|P))/.test(C)?C:g(C)}function v(C,E){for(var D in C){z(C,D)&&E(C[D],D,C)}}function w(C){return C==null?g(C):q.call(C).slice(8,-1)}function z(){z=function(C,D){var E=C!=null&&(C.constructor||Object).prototype;return !!E&&D in Object(C)&&!(D in E&&C[D]===E[D])};if(w(h)=="Function"){z=function(C,D){return C!=null&&h.call(C,D)}}else{if({}.__proto__==Object.prototype){z=function(D,E){var C=false;if(D!=null){D=Object(D);D.__proto__=[D.__proto__,D.__proto__=null,C=E in D][0]}return C}}}return z.apply(this,arguments)}function o(C,E){var D=C!=null?typeof C[E]:"number";return !/^(?:boolean|number|string|undefined)$/.test(D)&&(D=="object"?!!C[E]:true)}function r(C){return String(C).replace(/([ -])(?!$)/g,"$1?")}function i(E,D){var C=null;a(E,function(G,F){C=D(C,G,F,E)});return C}function s(C){return String(C).replace(/^ +| +$/g,"")}function m(K){K||(K=y);var T;var U=K;var J=[];var F=null;var L=K==y;var D=L&&u&&typeof u.version=="function"&&u.version();var P=M([{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","Trident","KHTML","Gecko"]);var V=I(["Adobe AIR","Arora","Avant Browser","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","Iron","K-Meleon","Konqueror","Lunascape","Maxthon","Midori","Nook Browser","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser","Sunrise","Swiftfox","WebPositive","Opera Mini","Opera","Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"IE",pattern:"MSIE"},"Safari"]);var C=N(["BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},"Google TV","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nook","PlayBook","PlayStation Vita","TouchPad","Transformer","Xoom"]);var S=H({Apple:{iPad:1,iPhone:1,iPod:1},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1},HP:{TouchPad:1},LG:{},Motorola:{Xoom:1},Nokia:{},Samsung:{"Galaxy S":1,"Galaxy S2":1},Sony:{"PlayStation Vita":1}});var E=Q(["Android","CentOS","Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function M(W){return i(W,function(X,Y){return X||RegExp("\\b"+(Y.pattern||r(Y))+"\\b","i").exec(K)&&(Y.label||Y)})}function H(W){return i(W,function(X,Z,Y){return X||(Z[C]||Z[0,/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)]||RegExp("\\b"+(Y.pattern||r(Y))+"(?:\\b|\\w*\\d)","i").exec(K))&&(Y.label||Y)})}function I(W){return i(W,function(X,Y){return X||RegExp("\\b"+(Y.pattern||r(Y))+"\\b","i").exec(K)&&(Y.label||Y)})}function Q(W){return i(W,function(X,Z){var Y=Z.pattern||r(Z);if(!X&&(X=RegExp("\\b"+Y+"(?:/[\\d.]+|[ \\w.]*)","i").exec(K))){T={"6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};if(/^Win/i.test(X)&&(T=T[0,/[\d.]+$/.exec(X)])){X="Windows "+T}X=t(String(X).replace(RegExp(Y,"i"),Z.label||Z).replace(/ ce$/i," CE").replace(/hpw/i,"web").replace(/Macintosh/,"Mac OS").replace(/_PowerPC/i," OS").replace(/(OS X) [^ \d]+/i,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/x86\.64/gi,"x86_64").split(" on ")[0])}return X})}function N(W){return i(W,function(X,Z){var Y=Z.pattern||r(Z);if(!X&&(X=RegExp("\\b"+Y+" *\\d+[.\\w_]*","i").exec(K)||RegExp("\\b"+Y+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(K))){if((X=String(Z.label||X).split("/"))[1]&&!/[\d.]+/.test(X[0])){X[0]+=" "+X[1]}Z=Z.label||Z;X=t(X[0].replace(RegExp(Y,"i"),Z).replace(RegExp("; *(?:"+Z+"[_-])?","i")," ").replace(RegExp("("+Z+")(\\w)","i"),"$1 $2"))}return X})}function G(W){return i(W,function(X,Y){return X||(RegExp(Y+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(K)||0)[1]||null})}function R(){return this.description||""}P&&(P=[P]);if(S&&!C){C=N([S])}if((T=/Google TV/.exec(C))){C=T[0]}if(/\bSimulator\b/i.test(K)){C=(C?C+" ":"")+"Simulator"}if(/^iP/.test(C)){V||(V="Safari");E="iOS"+((T=/ OS ([\d_]+)/i.exec(K))?" "+T[1].replace(/_/g,"."):"")}else{if(V=="Konqueror"&&!/buntu/i.test(E)){E="Kubuntu"}else{if(S&&S!="Google"&&/Chrome|Vita/.test(V+";"+C)){V="Android Browser";E=/Android/.test(E)?E:"Android"}else{if(!V||(T=!/\bMinefield\b/i.test(K)&&/Firefox|Safari/.exec(V))){if(V&&!C&&/[\/,]|^[^(]+?\)/.test(K.slice(K.indexOf(T+"/")+8))){V=null}if((T=C||S||E)&&(C||S||/Android|Symbian OS|Tablet OS|webOS/.test(E))){V=/[a-z]+(?: Hat)?/i.exec(/Android/.test(E)?E:T)+" Browser"}}}}}if(!D){D=G(["(?:Cloud9|CriOS|CrMo|Opera ?Mini|Raven|Silk(?!/[\\d.]+$))","Version",r(V),"(?:Firefox|Minefield|NetFront)"])}if(P=="iCab"&&parseFloat(D)>3){P=["WebKit"]}else{if((T=/Opera/.test(V)&&"Presto"||/\b(?:Midori|Nook|Safari)\b/i.test(K)&&"WebKit"||!P&&/\bMSIE\b/i.test(K)&&(/^Mac/.test(E)?"Tasman":"Trident"))){P=[T]}}if(L){if(o(f,"global")){if(l){T=l.lang.System;U=T.getProperty("os.arch");E=E||T.getProperty("os.name")+" "+T.getProperty("os.version")}if(c){if(d==p&&typeof system=="object"&&(T=[system])[0]){E||(E=T[0].os||null);try{T[1]=require("ringo/engine").version;D=T[1].join(".");V="RingoJS"}catch(O){if(T[0].global==n){V="Narwhal"}}}else{if(typeof process=="object"&&(T=process)){V="Node.js";U=T.arch;E=T.platform;D=/[\d.]+/.exec(T.version)[0]}else{if(B){V="Rhino"}}}}else{if(B){V="Rhino"}}}else{if(w((T=f.runtime))=="ScriptBridgingProxyObject"){V="Adobe AIR";E=T.flash.system.Capabilities.os}else{if(w((T=f.phantom))=="RuntimeObject"){V="PhantomJS";D=(T=T.version||null)&&(T.major+"."+T.minor+"."+T.patch)}else{if(typeof A.documentMode=="number"&&(T=/\bTrident\/(\d+)/i.exec(K))){D=[D,A.documentMode];if((T=+T[1]+4)!=D[1]){J.push("IE "+D[1]+" mode");P[1]="";D[1]=T}D=V=="IE"?String(D[1].toFixed(1)):D[0]}}}}E=E&&t(E)}if(D&&(T=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D)||/(?:alpha|beta)(?: ?\d)?/i.exec(K+";"+(L&&e.appMinorVersion))||/\bMinefield\b/i.test(K)&&"a")){F=/b/i.test(T)?"beta":"alpha";D=D.replace(RegExp(T+"\\+?$"),"")+(F=="beta"?x:b)+(/\d+\+?/.exec(T)||"")}if(V=="Fennec"){V="Firefox Mobile"}else{if(V=="Maxthon"&&D){D=D.replace(/\.[\d.]+/,".x")}else{if(V=="Silk"){if(!/Mobi/i.test(K)){E="Android";J.unshift("desktop mode")}if(/Accelerated *= *true/i.test(K)){J.unshift("accelerated")}}else{if(V=="IE"&&(T=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(K)||0)[1])){V+=" Mobile";E="Windows Phone OS "+T+".x";J.unshift("desktop mode")}else{if((V=="IE"||V&&!C&&!/Browser|Mobi/.test(V))&&(E=="Windows CE"||/Mobi/i.test(K))){V+=" Mobile"}else{if(V=="IE"&&L&&typeof external=="object"&&!external){J.unshift("platform preview")}else{if(/BlackBerry/.test(C)&&(T=(RegExp(C.replace(/ +/g," *")+"/([.\\d]+)","i").exec(K)||0)[1]||D)){E="Device Software "+T;D=null}else{if(this!=v&&((L&&u)||(/Opera/.test(V)&&/\b(?:MSIE|Firefox)\b/i.test(K))||(V=="Firefox"&&/OS X (?:\d+\.){2,}/.test(E))||(V=="IE"&&((E&&!/^Win/.test(E)&&D>5.5)||/Windows XP/.test(E)&&D>8||D==8&&!/Trident/.test(K))))&&!k.test((T=m.call(v,K.replace(k,"")+";")))&&T.name){T="ing as "+T.name+((T=T.version)?" "+T:"");if(k.test(V)){if(/IE/.test(T)&&E=="Mac OS"){E=null}T="identify"+T}else{T="mask"+T;if(j){V=t(j.replace(/([a-z])([A-Z])/g,"$1 $2"))}else{V="Opera"}if(/IE/.test(T)){E=null}if(!L){D=null}}P=["Presto"];J.push(T)}}}}}}}}if((T=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(K)||0)[1])){T=[parseFloat(T.replace(/\.(\d)$/,".0$1")),T];if(V=="Safari"&&T[1].slice(-1)=="+"){V="WebKit Nightly";F="alpha";D=T[1].slice(0,-1)}else{if(D==T[1]||D==(/\bSafari\/([\d.]+\+?)/i.exec(K)||0)[1]){D=null}}T=[T[0],(/\bChrome\/([\d.]+)/i.exec(K)||0)[1]];if(!L||(/internal|\n/i.test(q.toString())&&!T[1])){P[1]="like Safari";T=(T=T[0],T<400?1:T<500?2:T<526?3:T<533?4:T<534?"4+":T<535?5:"5")}else{P[1]="like Chrome";T=T[1]||(T=T[0],T<530?1:T<532?2:T<532.05?3:T<533?4:T<534.03?5:T<534.07?6:T<534.1?7:T<534.13?8:T<534.16?9:T<534.24?10:T<534.3?11:T<535.01?12:T<535.02?"13+":T<535.07?15:T<535.11?16:T<535.19?17:T<536.05?18:T<536.1?19:T<537.01?20:"21")}P[1]+=" "+(T+=typeof T=="number"?".x":/[.+]/.test(T)?"":"+");if(V=="Safari"&&(!D||parseInt(D)>45)){D=T}}if(V=="Opera"&&(T=/(?:zbov|zvav)$/.exec(E))){V+=" ";J.unshift("desktop mode");if(T=="zvav"){V+="Mini";D=null}else{V+="Mobile"}}else{if(V=="Safari"&&/Chrome/.exec(P[1])){J.unshift("desktop mode");V="Chrome Mobile";D=null;if(/Mac OS X/.test(E)){S="Apple";E="iOS 4.3+"}else{E=null}}}if(D&&D.indexOf((T=/[\d.]+$/.exec(E)))==0&&K.indexOf("/"+T+"-")>-1){E=s(E.replace(T,""))}if(P&&!/Avant|Nook/.test(V)&&(/Browser|Lunascape|Maxthon/.test(V)||/^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(V)&&P[1])){(T=P[P.length-1])&&J.push(T)}if(J.length){J=["("+J.join("; ")+")"]}if(S&&C&&C.indexOf(S)<0){J.push("on "+S)}if(C){J.push((/^on /.test(J[J.length-1])?"":"on ")+C)}if(E){T=/ ([\d.+]+)$/.exec(E);E={architecture:32,family:T?E.replace(T[0],""):E,version:T?T[1]:null,toString:function(){var W=this.version;return this.family+(W?" "+W:"")+(this.architecture==64?" 64-bit":"")}}}if((T=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U))&&!/\bi686\b/i.test(U)){if(E){E.architecture=64;E.family=E.family.replace(RegExp(" *"+T),"")}if(V&&(/WOW64/i.test(K)||(L&&/\w(?:86|32)$/.test(e.cpuClass||e.platform)))){J.unshift("32-bit")}}K||(K=null);return{version:V&&D&&(J.unshift(D),D),name:V&&(J.unshift(V),V),os:E?(V&&!(E==String(E).split(" ")[0]&&(E==V.split(" ")[0]||C))&&J.push(C?"("+E+")":"on "+E),E):{architecture:null,family:null,version:null,toString:function(){return"null"}},description:J.length?J.join(" "):K,layout:P&&P[0],manufacturer:S,prerelease:F,product:C,ua:K,parse:m,toString:R}}if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return m()})}else{if(c&&!c.nodeType){v(m(),function(D,C){c[C]=D})}else{f.platform=m()}}}(this));
/*!
 * Benchmark.js v1.0.0 <http://benchmarkjs.com/>
 * Copyright 2010-2013 Mathias Bynens <http://mths.be/>
 * Based on JSLitmus.js, copyright Robert Kieffer <http://broofa.com/>
 * Modified by John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
(function(j,e){var g=typeof define=="function"&&typeof define.amd=="object"&&define.amd&&define;var l=typeof exports=="object"&&exports;var d=typeof module=="object"&&module&&module.exports==l&&module;var i=typeof require=="function"&&require;var b=typeof global=="object"&&global;if(b.global===b||b.window===b){j=b}var a=0;var c=/^(?:boolean|number|string|undefined)$/;var o=["Array","Date","Function","Math","Object","RegExp","String","_","clearTimeout","chrome","chromium","document","java","navigator","performance","platform","process","runtime","setTimeout"];var k={"1":4096,"2":512,"3":64,"4":8,"5":0};var f={"1":12.706,"2":4.303,"3":3.182,"4":2.776,"5":2.571,"6":2.447,"7":2.365,"8":2.306,"9":2.262,"10":2.228,"11":2.201,"12":2.179,"13":2.16,"14":2.145,"15":2.131,"16":2.12,"17":2.11,"18":2.101,"19":2.093,"20":2.086,"21":2.08,"22":2.074,"23":2.069,"24":2.064,"25":2.06,"26":2.056,"27":2.052,"28":2.048,"29":2.045,"30":2.042,infinity:1.96};var h={"5":[0,1,2],"6":[1,2,3,5],"7":[1,3,5,6,8],"8":[2,4,6,8,10,13],"9":[2,4,7,10,12,15,17],"10":[3,5,8,11,14,17,20,23],"11":[3,6,9,13,16,19,23,26,30],"12":[4,7,11,14,18,22,26,29,33,37],"13":[4,8,12,16,20,24,28,33,37,41,45],"14":[5,9,13,17,22,26,31,36,40,45,50,55],"15":[5,10,14,19,24,29,34,39,44,49,54,59,64],"16":[6,11,15,21,26,31,37,42,47,53,59,64,70,75],"17":[6,11,17,22,28,34,39,45,51,57,63,67,75,81,87],"18":[7,12,18,24,30,36,42,48,55,61,67,74,80,86,93,99],"19":[7,13,19,25,32,38,45,52,58,65,72,78,85,92,99,106,113],"20":[8,14,20,27,34,41,48,55,62,69,76,83,90,98,105,112,119,127],"21":[8,15,22,29,36,43,50,58,65,73,80,88,96,103,111,119,126,134,142],"22":[9,16,23,30,38,45,53,61,69,77,85,93,101,109,117,125,133,141,150,158],"23":[9,17,24,32,40,48,56,64,73,81,89,98,106,115,123,132,140,149,157,166,175],"24":[10,17,25,33,42,50,59,67,76,85,94,102,111,120,129,138,147,156,165,174,183,192],"25":[10,18,27,35,44,53,62,71,80,89,98,107,117,126,135,145,154,163,173,182,192,201,211],"26":[11,19,28,37,46,55,64,74,83,93,102,112,122,132,141,151,161,171,181,191,200,210,220,230],"27":[11,20,29,38,48,57,67,77,87,97,107,118,125,138,147,158,168,178,188,199,209,219,230,240,250],"28":[12,21,30,40,50,60,70,80,90,101,111,122,132,143,154,164,175,186,196,207,218,228,239,250,261,272],"29":[13,22,32,42,52,62,73,83,94,105,116,127,138,149,160,171,182,193,204,215,226,238,249,260,271,282,294],"30":[13,23,33,43,54,65,76,87,98,109,120,131,143,154,166,177,189,200,212,223,235,247,258,270,282,293,305,317]};function n(aq){var ab=aq&&aq._||U("lodash")||j._;if(!ab){aN.runInContext=n;return aN}aq=aq?ab.defaults(j.Object(),aq,ab.pick(j,o)):j;var aB=aq.Array,Q=aq.Date,X=aq.Function,ak=aq.Math,ax=aq.Object,A=aq.RegExp,L=aq.String;var u=aB(),Y=ax();var V=ak.abs,aD=aq.clearTimeout,ac=ak.floor,r=ak.log,C=ak.max,aK=ak.min,aE=ak.pow,av=aq.setTimeout,ai=u.shift,E=u.slice,M=ak.sqrt,ap=Y.toString;var J=aL(aq,"document")&&aq.document;var I=U("microtime");var O=aL(aq,"performance")&&aq.performance;var af=O&&(O.now&&"now"||O.webkitNow&&"webkitNow");var s=aL(aq,"process")&&aq.process;var aG=J&&J.createElement("div");var ay="uid"+(+new Q);var aj={};var aH={};(function(){aH.air=aa(aq.runtime,"ScriptBridgingProxyObject");aH.browser=J&&aL(aq,"navigator")&&!aL(aq,"phantom");aH.java=aa(aq.java,"JavaPackage");aH.timeout=aL(aq,"setTimeout")&&aL(aq,"clearTimeout");try{aH.decompilation=X("return ("+(function(aP){return{x:""+(1+aP)+"",y:0}})+")")()(0).x==="1"}catch(aO){aH.decompilation=false}}());var Z={ns:Q,start:null,stop:null};function aN(aP,aR,aO){var aQ=this;if(aQ==null||aQ.constructor!=aN){return new aN(aP,aR,aO)}if(ab.isPlainObject(aP)){aO=aP}else{if(ab.isFunction(aP)){aO=aR;aR=aP}else{if(ab.isPlainObject(aR)){aO=aR;aR=null;aQ.name=aP}else{aQ.name=aP}}}an(aQ,aO);aQ.id||(aQ.id=++a);aQ.fn==null&&(aQ.fn=aR);aQ.stats=aA(aQ.stats);aQ.times=aA(aQ.times)}function t(aP){var aO=this;if(aO==null||aO.constructor!=t){return new t(aP)}aO.benchmark=aP;q(aO)}function W(aO){var aP=this;return(aP==null||aP.constructor!=W)?new W(aO):(aO instanceof W?aO:ab.extend(aP,{timeStamp:+new Q},typeof aO=="string"?{type:aO}:aO))}function az(aP,aO){var aQ=this;if(aQ==null||aQ.constructor!=az){return new az(aP,aO)}if(aa(aP,"Object")){aO=aP}else{aQ.name=aP}an(aQ,aO)}var aA=ab.partialRight(ab.cloneDeep,function(aO){return(typeof aO=="object"&&!ab.isArray(aO)&&!ab.isPlainObject(aO))?aO:e});function z(){z=function(aR,aP){var aO,aQ=g?g.amd:aN,aS=ay+"createFunction";am((g?"define.amd.":"Benchmark.")+aS+"=function("+aR+"){"+aP+"}");aO=aQ[aS];delete aQ[aS];return aO};z=aH.browser&&(z("",'return"'+ay+'"')||aC)()==ay?z:X;return z.apply(null,arguments)}function p(aO,aP){aO._timerId=ab.delay(aP,aO.delay*1000)}function aI(aO){aG.appendChild(aO);aG.innerHTML=""}function S(aO){return(!ab.has(aO,"toString")&&(/^[\s(]*function[^(]*\(([^\s,)]+)/.exec(aO)||0)[1])||""}function F(aO){return aE(ak.E,ab.reduce(aO,function(aQ,aP){return aQ+r(aP)})/aO.length)||0}function w(aO){return(ab.reduce(aO,function(aQ,aP){return aQ+aP})/aO.length)||0}function al(aP,aQ){var aO=aQ;if(P(aP)){aO=L(aP)}else{if(aH.decompilation){aO=(/^[^{]+\{([\s\S]*)\}\s*$/.exec(aP)||0)[1]}}aO=(aO||"").replace(/^\s+|\s+$/g,"");return/^(?:\/\*+[\w|\W]*?\*\/|\/\/.*?[\n\r\u2028\u2029]|\s)*(["'])use strict\1;?$/.test(aO)?"":aO}function aa(aP,aO){return aP!=null&&ap.call(aP)=="[object "+aO+"]"}function aL(aO,aQ){if(aO==null){return false}var aP=typeof aO[aQ];return !c.test(aP)&&(aP!="object"||!!aO[aQ])}function P(aO){return ab.has(aO,"toString")||aa(aO,"String")}function aC(){}function U(aQ){try{var aO=l&&i(aQ)}catch(aP){}return aO||null}function am(aS){var aP=g?define.amd:aN,aO=J.createElement("script"),aR=J.getElementsByTagName("script")[0],aQ=aR.parentNode,aV=ay+"runScript",aT="("+(g?"define.amd.":"Benchmark.")+aV+"||function(){})();";try{aO.appendChild(J.createTextNode(aT+aS));aP[aV]=function(){aI(aO)}}catch(aU){aQ=aQ.cloneNode(false);aR=null;aO.text=aS}aQ.insertBefore(aO,aR);delete aP[aV]}function an(aP,aO){aO=ab.extend({},aP.constructor.options,aO);aP.options=ab.forOwn(aO,function(aR,aQ){if(aR!=null){if(/^on[A-Z]/.test(aQ)){ab.each(aQ.split(" "),function(aS){aP.on(aS.slice(2).toLowerCase(),aR)})}else{if(!ab.has(aP,aQ)){aP[aQ]=aA(aR)}}}})}function ag(){var aO=this,aQ=aO.benchmark,aP=aQ._original;if(aP.aborted){aO.teardown();aQ.running=false;K(aO)}else{if(++aO.cycles<aQ.count){aQ.compiled.call(aO,aq,Z)}else{Z.stop(aO);aO.teardown();p(aQ,function(){K(aO)})}}}function H(aR,aQ,aP){if(aQ==="successful"){aQ=function(aS){return aS.cycles&&ab.isFinite(aS.hz)}}else{if(aQ==="fastest"||aQ==="slowest"){var aO=H(aR,"successful").sort(function(aT,aS){aT=aT.stats;aS=aS.stats;return(aT.mean+aT.moe>aS.mean+aS.moe?1:-1)*(aQ==="fastest"?1:-1)});return ab.filter(aO,function(aS){return aO[0].compare(aS)==0})}}return ab.filter(aR,aQ,aP)}function y(aO){aO=L(aO).split(".");return aO[0].replace(/(?=(?:\d{3})+$)(?!\b)/g,",")+(aO[1]?"."+aO[1]:"")}function N(aR,aQ){var aW,aP,aO,aV=-1,aS={currentTarget:aR},a0={onStart:aC,onCycle:aC,onComplete:aC},aZ=ab.toArray(aR);function aX(){var a2,a1=aT(aP);if(a1){aP.on("complete",aU);a2=aP.events.complete;a2.splice(0,0,a2.pop())}aZ[aV]=ab.isFunction(aP&&aP[aQ])?aP[aQ].apply(aP,aW):e;return !a1&&aU()}function aU(a4){var a1,a3=aP,a2=aT(a3);if(a2){a3.off("complete",aU);a3.emit("complete")}aS.type="cycle";aS.target=a3;a1=W(aS);a0.onCycle.call(aR,a1);if(!a1.aborted&&aY()!==false){aP=aO?aR[0]:aZ[aV];if(aT(aP)){p(aP,aX)}else{if(a2){while(aX()){}}else{return true}}}else{aS.type="complete";a0.onComplete.call(aR,W(aS))}if(a4){a4.aborted=true}else{return false}}function aT(a1){var a2=aW[0]&&aW[0].async;return ax(a1).constructor==aN&&aQ=="run"&&((a2==null?a1.options.async:a2)&&aH.timeout||a1.defer)}function aY(){aV++;if(aO&&aV>0){ai.call(aR)}return(aO?aR.length:aV<aZ.length)?aV:(aV=false)}if(ab.isString(aQ)){aW=E.call(arguments,2)}else{a0=ab.extend(a0,aQ);aQ=a0.name;aW=ab.isArray(aW="args" in a0?a0.args:[])?aW:[aW];aO=a0.queued}if(aY()!==false){aP=aZ[aV];aS.type="start";aS.target=aP;a0.onStart.call(aR,W(aS));if(aR.aborted&&aR.constructor==az&&aQ=="run"){aS.type="cycle";a0.onCycle.call(aR,W(aS));aS.type="complete";a0.onComplete.call(aR,W(aS))}else{if(aT(aP)){p(aP,aX)}else{while(aX()){}}}}return aZ}function ao(aR,aS,aQ){var aP=[],aT=(aR=ax(aR)).length,aO=aT===aT>>>0;aQ||(aQ=": ");ab.each(aR,function(aV,aU){aP.push(aO?aV:aU+aQ+aV)});return aP.join(aS||",")}function ad(){var aP,aO=this,aQ=aj.resetSuite;if(aO.running){aP=W("abort");aO.emit(aP);if(!aP.cancelled||aQ){aj.abortSuite=true;aO.reset();delete aj.abortSuite;if(!aQ){aO.aborted=true;N(aO,"abort")}}}return aO}function B(aP,aS,aO){var aR=this,aQ=new aN(aP,aS,aO),aT=W({type:"add",target:aQ});if(aR.emit(aT),!aT.cancelled){aR.push(aQ)}return aR}function au(aP){var aQ=this,aO=new aQ.constructor(ab.extend({},aQ.options,aP));ab.forOwn(aQ,function(aS,aR){if(!ab.has(aO,aR)){aO[aR]=aS&&ab.isFunction(aS.clone)?aS.clone():aA(aS)}});return aO}function v(aQ){var aP=this,aO=new aP.constructor;aO.push.apply(aO,H(aP,aQ));return aO}function x(){var aP,aO=this,aQ=aj.abortSuite;if(aO.running&&!aQ){aj.resetSuite=true;aO.abort();delete aj.resetSuite}else{if((aO.aborted||aO.running)&&(aO.emit(aP=W("reset")),!aP.cancelled)){aO.running=false;if(!aQ){N(aO,"reset")}}}return aO}function D(aO){var aP=this;aP.reset();aP.running=true;aO||(aO={});N(aP,{name:"run",args:aO,queued:aO.queued,onStart:function(aQ){aP.emit(aQ)},onCycle:function(aR){var aQ=aR.target;if(aQ.error){aP.emit({type:"error",target:aQ})}aP.emit(aR);aR.aborted=aP.aborted},onComplete:function(aQ){aP.running=false;aP.emit(aQ)}});return aP}function ah(aS){var aR,aP=this,aT=W(aS),aQ=aP.events,aO=(arguments[0]=aT,arguments);aT.currentTarget||(aT.currentTarget=aP);aT.target||(aT.target=aP);delete aT.result;if(aQ&&(aR=ab.has(aQ,aT.type)&&aQ[aT.type])){ab.each(aR.slice(),function(aU){if((aT.result=aU.apply(aP,aO))===false){aT.cancelled=true}return !aT.aborted})}return aT.result}function aw(aQ){var aO=this,aP=aO.events||(aO.events={});return ab.has(aP,aQ)?aP[aQ]:(aP[aQ]=[])}function T(aQ,aR){var aO=this,aP=aO.events;if(!aP){return aO}ab.each(aQ?aQ.split(" "):aP,function(aU,aT){var aS;if(typeof aU=="string"){aT=aU;aU=ab.has(aP,aT)&&aP[aT]}if(aU){if(aR){aS=ab.indexOf(aU,aR);if(aS>-1){aU.splice(aS,1)}}else{aU.length=0}}});return aO}function R(aQ,aR){var aO=this,aP=aO.events||(aO.events={});ab.each(aQ.split(" "),function(aS){(ab.has(aP,aS)?aP[aS]:(aP[aS]=[])).push(aR)});return aO}function ar(){var aP,aO=this,aQ=aj.reset;if(aO.running){aP=W("abort");aO.emit(aP);if(!aP.cancelled||aQ){aj.abort=true;aO.reset();delete aj.abort;if(aH.timeout){aD(aO._timerId);delete aO._timerId}if(!aQ){aO.aborted=true;aO.running=false}}}return aO}function G(aP){var aQ=this,aR=aQ.stats.sample,aO=new aQ.constructor(ab.extend({},aQ,aP));aO.options=ab.extend({},aQ.options,aP);ab.forOwn(aQ,function(aT,aS){if(!ab.has(aO,aS)){aO[aS]=aA(aT)}});return aO}function aJ(aW){var aX,aT,aP=this,aV=aP.stats.sample,aU=aW.stats.sample,a2=aV.length,a1=aU.length,a0=C(a2,a1),aR=aK(a2,a1),aS=aO(aV,aU),aQ=aO(aU,aV),a3=aK(aS,aQ);function aZ(a5,a4){return ab.reduce(a4,function(a6,a7){return a6+(a7>a5?0:a7<a5?1:0.5)},0)}function aO(a5,a4){return ab.reduce(a5,function(a6,a7){return a6+aZ(a7,a4)},0)}function aY(a4){return(a4-((a2*a1)/2))/M((a2*a1*(a2+a1+1))/12)}if(aP==aW){return 0}if(a2+a1>30){aT=aY(a3);return V(aT)>1.96?(aT>0?-1:1):0}aX=a0<5||aR<3?0:h[a0][aR-3];return a3<=aX?(a3==aS?1:-1):0}function ae(){var aT,aS,aQ=this,aP=0,aR={length:0},aO={length:0};if(aQ.running&&!aj.abort){aj.reset=true;aQ.abort();delete aj.reset}else{aT={destination:aQ,source:ab.extend({},aQ.constructor.prototype,aQ.options)};do{ab.forOwn(aT.source,function(aX,aW){var aY,aU=aT.destination,aV=aU[aW];if(aX&&typeof aX=="object"){if(ab.isArray(aX)){if(!ab.isArray(aV)){aY=aV=[]}if(aV.length!=aX.length){aY=aV=aV.slice(0,aX.length);aV.length=aX.length}}else{if(!aV||typeof aV!="object"){aY=aV={}}}if(aY){aR[aR.length++]={destination:aU,key:aW,value:aV}}aO[aO.length++]={destination:aV,source:aX}}else{if(aX!==aV&&!(aX==null||ab.isFunction(aX))){aR[aR.length++]={destination:aU,key:aW,value:aX}}}})}while((aT=aO[aP++]));if(aR.length&&(aQ.emit(aS=W("reset")),!aS.cancelled)){ab.each(aR,function(aU){aU.destination[aU.key]=aU.value})}}return aQ}function at(){var aT=this,aP=aT.error,aU=aT.hz,aV=aT.id,aS=aT.stats,aR=aS.sample.length,aQ=aH.java?"+/-":"\xb1",aO=aT.name||(ab.isNaN(aV)?aV:"<Test #"+aV+">");if(aP){aO+=": "+ao(aP)}else{aO+=" x "+y(aU.toFixed(aU<100?2:0))+" ops/sec "+aQ+aS.rme.toFixed(2)+"% ("+aR+" run"+(aR==1?"":"s")+" sampled)"}return aO}function q(){var aR,aQ=aN.options,aT=[{ns:Z.ns,res:C(0.0015,aP("ms")),unit:"ms"}];var aS={begin:aO("s#=new n#"),end:aO("r#=(new n#-s#)/1e3"),uid:ay};q=function(a4){var a9;if(a4 instanceof t){a9=a4;a4=a9.benchmark}var aX=a4._original,a6=aX.fn,a0=a9?S(a6)||"deferred":"",a7=P(a6);ab.extend(aS,{setup:al(aX.setup,aO("m#.setup()")),fn:al(a6,aO("m#.fn("+a0+")")),fnArg:a0,teardown:al(aX.teardown,aO("m#.teardown()"))});var a1=aX.count=a4.count,a8=aH.decompilation||a7,aY=aX.id,aZ=!(aS.fn||a7),aW=aX.name||(typeof aY=="number"?"<Test #"+aY+">":aY),a5=Z.ns,ba=0;a4.minTime=aX.minTime||(aX.minTime=aX.options.minTime=aQ.minTime);if(aR){try{a5.nanoTime()}catch(a2){a5=Z.ns=new aR.Packages.nano}}var a3=aX.compiled=aV(a9?'var d#=this,${fnArg}=d#,m#=d#.benchmark._original,f#=m#.fn,su#=m#.setup,td#=m#.teardown;if(!d#.cycles){d#.fn=function(){var ${fnArg}=d#;if(typeof f#=="function"){try{${fn}\n}catch(e#){f#(d#)}}else{${fn}\n}};d#.teardown=function(){d#.cycles=0;if(typeof td#=="function"){try{${teardown}\n}catch(e#){td#()}}else{${teardown}\n}};if(typeof su#=="function"){try{${setup}\n}catch(e#){su#()}}else{${setup}\n};t#.start(d#);}d#.fn();return{}':'var r#,s#,m#=this,f#=m#.fn,i#=m#.count,n#=t#.ns;${setup}\n${begin};while(i#--){${fn}\n}${end};${teardown}\nreturn{elapsed:r#,uid:"${uid}"}');try{if(aZ){throw new Error('The test "'+aW+'" is empty. This may be the result of dead code removal.')}else{if(!a9){aX.count=1;a3=(a3.call(aX,aq,Z)||{}).uid==ay&&a3;aX.count=a1}}}catch(a2){a3=null;a4.error=a2||new Error(L(a2));aX.count=a1}if(a8&&!a3&&!a9&&!aZ){a3=aV((a4.error&&!a7?"var r#,s#,m#=this,f#=m#.fn,i#=m#.count":"function f#(){${fn}\n}var r#,s#,m#=this,i#=m#.count")+",n#=t#.ns;${setup}\n${begin};m#.f#=f#;while(i#--){m#.f#()}${end};delete m#.f#;${teardown}\nreturn{elapsed:r#}");try{aX.count=1;a3.call(aX,aq,Z);aX.compiled=a3;aX.count=a1;delete a4.error}catch(a2){aX.count=a1;if(a4.error){a3=null}else{aX.compiled=a3;a4.error=a2||new Error(L(a2))}}}a4.compiled=a3;if(!a4.error){ba=a3.call(a9||aX,aq,Z).elapsed}return ba};function aV(aW){return z(aO("window,t#"),"var global = window, clearTimeout = global.clearTimeout, setTimeout = global.setTimeout;\n"+aO(aW))}function aP(a1){var aW,aY,a0=30,a2=1000,aX=Z.ns,aZ=[];while(a0--){if(a1=="us"){a2=1000000;if(aX.stop){aX.start();while(!(aW=aX.microseconds())){}}else{if(aX[af]){a2=1000;aW=X("n","var r,s=n."+af+"();while(!(r=n."+af+"()-s)){};return r")(aX)}else{aY=aX();while(!(aW=aX()-aY)){}}}}else{if(a1=="ns"){a2=1000000000;if(aX.nanoTime){aY=aX.nanoTime();while(!(aW=aX.nanoTime()-aY)){}}else{aY=(aY=aX())[0]+(aY[1]/a2);while(!(aW=((aW=aX())[0]+(aW[1]/a2))-aY)){}a2=1}}else{aY=new aX;while(!(aW=new aX-aY)){}}}if(aW>0){aZ.push(aW)}else{aZ.push(Infinity);break}}return w(aZ)/a2}function aO(aW){return ab.template(aW.replace(/\#/g,/\d+/.exec(ay)),aS||{})}ab.each(J&&J.applets||[],function(aW){return !(Z.ns=aR="nanoTime" in aW&&aW)});try{if(typeof Z.ns.nanoTime()=="number"){aT.push({ns:Z.ns,res:aP("ns"),unit:"ns"})}}catch(aU){}try{if((Z.ns=new (aq.chrome||aq.chromium).Interval)){aT.push({ns:Z.ns,res:aP("us"),unit:"us"})}}catch(aU){}if((Z.ns=af&&O)){aT.push({ns:Z.ns,res:aP("us"),unit:"us"})}if(s&&typeof(Z.ns=s.hrtime)=="function"){aT.push({ns:Z.ns,res:aP("ns"),unit:"ns"})}if(I&&typeof(Z.ns=I.now)=="function"){aT.push({ns:Z.ns,res:aP("us"),unit:"us"})}Z=ab.reduce(aT,function(aX,aW){return aW.res<aX.res?aW:aX});if(Z.unit!="ns"&&aR){aR=aI(aR)}if(Z.res==Infinity){throw new Error("Benchmark.js was unable to find a working timer.")}if(Z.unit=="ns"){if(Z.ns.nanoTime){ab.extend(aS,{begin:aO("s#=n#.nanoTime()"),end:aO("r#=(n#.nanoTime()-s#)/1e9")})}else{ab.extend(aS,{begin:aO("s#=n#()"),end:aO("r#=n#(s#);r#=r#[0]+(r#[1]/1e9)")})}}else{if(Z.unit=="us"){if(Z.ns.stop){ab.extend(aS,{begin:aO("s#=n#.start()"),end:aO("r#=n#.microseconds()/1e6")})}else{if(af){ab.extend(aS,{begin:aO("s#=n#."+af+"()"),end:aO("r#=(n#."+af+"()-s#)/1e3")})}else{ab.extend(aS,{begin:aO("s#=n#()"),end:aO("r#=(n#()-s#)/1e6")})}}}}Z.start=z(aO("o#"),aO("var n#=this.ns,${begin};o#.elapsed=0;o#.timeStamp=s#"));Z.stop=z(aO("o#"),aO("var n#=this.ns,s#=o#.timeStamp,${end};o#.elapsed=r#"));aQ.minTime||(aQ.minTime=C(Z.res/2/0.01,0.05));return q.apply(null,arguments)}function aM(aO,aY){aY||(aY={});var aR=aY.async,aX=0,aT=aO.initCount,aW=aO.minSamples,aU=[],aV=aO.stats.sample;function aP(){aU.push(aO.clone({_original:aO,events:{abort:[aS],cycle:[aS],error:[aS],start:[aS]}}))}function aS(a0){var a1=this,aZ=a0.type;if(aO.running){if(aZ=="start"){a1.count=aO.initCount}else{if(aZ=="error"){aO.error=a1.error}if(aZ=="abort"){aO.abort();aO.emit("cycle")}else{a0.currentTarget=a0.target=aO;aO.emit(a0)}}}else{if(aO.aborted){a1.events.abort.length=0;a1.abort()}}}function aQ(a1){var bb,bc,be,ba,a6,a8,a3,a0,a9=a1.target,a5=aO.aborted,a2=+new Q,bd=aV.push(a9.times.period),a7=bd>=aW&&(aX+=a2-a9.times.timeStamp)/1000>aO.maxTime,aZ=aO.times,a4=function(bg,bf){return bg+aE(bf-be,2)};if(a5||a9.hz==Infinity){a7=!(bd=aV.length=aU.length=0)}if(!a5){be=w(aV);a0=ab.reduce(aV,a4,0)/(bd-1)||0;a8=M(a0);a3=a8/M(bd);bc=bd-1;bb=f[ak.round(bc)||1]||f.infinity;ba=a3*bb;a6=(ba/be)*100||0;ab.extend(aO.stats,{deviation:a8,mean:be,moe:ba,rme:a6,sem:a3,variance:a0});if(a7){aO.initCount=aT;aO.running=false;a5=true;aZ.elapsed=(a2-aZ.timeStamp)/1000}if(aO.hz!=Infinity){aO.hz=1/be;aZ.cycle=be*aO.count;aZ.period=be}}if(aU.length<2&&!a7){aP()}a1.aborted=a5}aP();N(aU,{name:"run",args:{async:aR},queued:true,onCycle:aQ,onComplete:function(){aO.emit("complete")}})}function K(aY,a0){a0||(a0={});var aZ;if(aY instanceof t){aZ=aY;aY=aY.benchmark}var aS,aU,aR,aQ,aV,aX,aT=a0.async,aP=aY._original,aW=aY.count,aO=aY.times;if(aY.running){aU=++aY.cycles;aS=aZ?aZ.elapsed:q(aY);aV=aY.minTime;if(aU>aP.cycles){aP.cycles=aU}if(aY.error){aQ=W("error");aQ.message=aY.error;aY.emit(aQ);if(!aQ.cancelled){aY.abort()}}}if(aY.running){aP.times.cycle=aO.cycle=aS;aX=aP.times.period=aO.period=aS/aW;aP.hz=aY.hz=1/aX;aP.initCount=aY.initCount=aW;aY.running=aS<aV;if(aY.running){if(!aS&&(aR=k[aY.cycles])!=null){aW=ac(4000000/aR)}if(aW<=aY.count){aW+=ak.ceil((aV-aS)/aX)}aY.running=aW!=Infinity}}aQ=W("cycle");aY.emit(aQ);if(aQ.aborted){aY.abort()}if(aY.running){aY.count=aW;if(aZ){aY.compiled.call(aZ,aq,Z)}else{if(aT){p(aY,function(){K(aY,a0)})}else{K(aY)}}}else{if(aH.browser){am(ay+"=1;delete "+ay)}aY.emit("complete")}}function aF(aO){var aP=this,aQ=W("start");aP.running=false;aP.reset();aP.running=true;aP.count=aP.initCount;aP.times.timeStamp=+new Q;aP.emit(aQ);if(!aQ.cancelled){aO={async:((aO=aO&&aO.async)==null?aP.async:aO)&&aH.timeout};if(aP._original){if(aP.defer){t(aP)}else{K(aP,aO)}}else{aM(aP,aO)}}return aP}ab.extend(aN,{options:{async:false,defer:false,delay:0.005,id:e,initCount:1,maxTime:5,minSamples:5,minTime:0,name:e,onAbort:e,onComplete:e,onCycle:e,onError:e,onReset:e,onStart:e},platform:aq.platform||U("platform")||({description:aq.navigator&&aq.navigator.userAgent||null,layout:null,product:null,name:null,manufacturer:null,os:null,prerelease:null,version:null,toString:function(){return this.description||""}}),version:"1.0.0"});ab.extend(aN,{filter:H,formatNumber:y,invoke:N,join:ao,runInContext:n,support:aH});ab.extend(aN.prototype,{count:0,cycles:0,hz:0,compiled:e,error:e,fn:e,aborted:false,running:false,setup:aC,teardown:aC,stats:{moe:0,rme:0,sem:0,deviation:0,mean:0,sample:[],variance:0},times:{cycle:0,elapsed:0,period:0,timeStamp:0}});ab.extend(aN.prototype,{abort:ar,clone:G,compare:aJ,emit:ah,listeners:aw,off:T,on:R,reset:ae,run:aF,toString:at});ab.extend(t.prototype,{benchmark:null,cycles:0,elapsed:0,timeStamp:0});ab.extend(t.prototype,{resolve:ag});ab.extend(W.prototype,{aborted:false,cancelled:false,currentTarget:e,result:e,target:e,timeStamp:0,type:""});az.options={name:e};ab.extend(az.prototype,{length:0,aborted:false,running:false});ab.extend(az.prototype,{abort:ad,add:B,clone:au,emit:ah,filter:v,join:u.join,listeners:aw,off:T,on:R,pop:u.pop,push:u.push,reset:x,run:D,reverse:u.reverse,shift:ai,sort:u.sort,splice:u.splice,unshift:u.unshift});ab.extend(aN,{Deferred:t,Event:W,Suite:az});if(!ab.support.spliceObjects){ab.each(["pop","shift","splice"],function(aO){var aP=u[aO];az.prototype[aO]=function(){var aR=this,aQ=aP.apply(aR,arguments);if(aR.length===0){delete aR[0]}return aQ}})}if(aH.air){q({_original:{fn:aC,count:1,options:{}}})}return aN}if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(["lodash","platform"],function(q,p){return n({_:q,platform:p})})}else{var m=n();if(l&&!l.nodeType){if(d){(d.exports=m).Benchmark=m}else{l.Benchmark=m}}else{j.Benchmark=m}}}(this));
;(function(){


// CommonJS require()

function require(p){
    var path = require.resolve(p)
      , mod = require.modules[path];
    if (!mod) throw new Error('failed to require "' + p + '"');
    if (!mod.exports) {
      mod.exports = {};
      mod.call(mod.exports, mod, mod.exports, require.relative(path));
    }
    return mod.exports;
  }

require.modules = {};

require.resolve = function (path){
    var orig = path
      , reg = path + '.js'
      , index = path + '/index.js';
    return require.modules[reg] && reg
      || require.modules[index] && index
      || orig;
  };

require.register = function (path, fn){
    require.modules[path] = fn;
  };

require.relative = function (parent) {
    return function(p){
      if ('.' != p.charAt(0)) return require(p);
      
      var path = parent.split('/')
        , segs = p.split('/');
      path.pop();
      
      for (var i = 0; i < segs.length; i++) {
        var seg = segs[i];
        if ('..' == seg) path.pop();
        else if ('.' != seg) path.push(seg);
      }

      return require(path.join('/'));
    };
  };


require.register("browser/debug.js", function(module, exports, require){

module.exports = function(type){
  return function(){
    
  }
};
}); // module: browser/debug.js

require.register("browser/diff.js", function(module, exports, require){
/* See license.txt for terms of usage */

/*
 * Text diff implementation.
 * 
 * This library supports the following APIS:
 * JsDiff.diffChars: Character by character diff
 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
 * JsDiff.diffLines: Line based diff
 * 
 * JsDiff.diffCss: Diff targeted at CSS content
 * 
 * These methods are based on the implementation proposed in
 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
 */
var JsDiff = (function() {
  function clonePath(path) {
    return { newPos: path.newPos, components: path.components.slice(0) };
  }
  function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  }
  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, "&amp;");
    n = n.replace(/</g, "&lt;");
    n = n.replace(/>/g, "&gt;");
    n = n.replace(/"/g, "&quot;");

    return n;
  }


  var fbDiff = function(ignoreWhitespace) {
    this.ignoreWhitespace = ignoreWhitespace;
  };
  fbDiff.prototype = {
      diff: function(oldString, newString) {
        // Handle the identity case (this is due to unrolling editLength == 0
        if (newString == oldString) {
          return [{ value: newString }];
        }
        if (!newString) {
          return [{ value: oldString, removed: true }];
        }
        if (!oldString) {
          return [{ value: newString, added: true }];
        }

        newString = this.tokenize(newString);
        oldString = this.tokenize(oldString);

        var newLen = newString.length, oldLen = oldString.length;
        var maxEditLength = newLen + oldLen;
        var bestPath = [{ newPos: -1, components: [] }];

        // Seed editLength = 0
        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {
          return bestPath[0].components;
        }

        for (var editLength = 1; editLength <= maxEditLength; editLength++) {
          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {
            var basePath;
            var addPath = bestPath[diagonalPath-1],
                removePath = bestPath[diagonalPath+1];
            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
            if (addPath) {
              // No one else is going to attempt to use this value, clear it
              bestPath[diagonalPath-1] = undefined;
            }

            var canAdd = addPath && addPath.newPos+1 < newLen;
            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
            if (!canAdd && !canRemove) {
              bestPath[diagonalPath] = undefined;
              continue;
            }

            // Select the diagonal that we want to branch from. We select the prior
            // path whose position in the new string is the farthest from the origin
            // and does not pass the bounds of the diff graph
            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
              basePath = clonePath(removePath);
              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);
            } else {
              basePath = clonePath(addPath);
              basePath.newPos++;
              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);
            }

            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);

            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {
              return basePath.components;
            } else {
              bestPath[diagonalPath] = basePath;
            }
          }
        }
      },

      pushComponent: function(components, value, added, removed) {
        var last = components[components.length-1];
        if (last && last.added === added && last.removed === removed) {
          // We need to clone here as the component clone operation is just
          // as shallow array clone
          components[components.length-1] =
            {value: this.join(last.value, value), added: added, removed: removed };
        } else {
          components.push({value: value, added: added, removed: removed });
        }
      },
      extractCommon: function(basePath, newString, oldString, diagonalPath) {
        var newLen = newString.length,
            oldLen = oldString.length,
            newPos = basePath.newPos,
            oldPos = newPos - diagonalPath;
        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {
          newPos++;
          oldPos++;
          
          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);
        }
        basePath.newPos = newPos;
        return oldPos;
      },

      equals: function(left, right) {
        var reWhitespace = /\S/;
        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {
          return true;
        } else {
          return left == right;
        }
      },
      join: function(left, right) {
        return left + right;
      },
      tokenize: function(value) {
        return value;
      }
  };
  
  var CharDiff = new fbDiff();
  
  var WordDiff = new fbDiff(true);
  WordDiff.tokenize = function(value) {
    return removeEmpty(value.split(/(\s+|\b)/));
  };
  
  var CssDiff = new fbDiff(true);
  CssDiff.tokenize = function(value) {
    return removeEmpty(value.split(/([{}:;,]|\s+)/));
  };
  
  var LineDiff = new fbDiff();
  LineDiff.tokenize = function(value) {
    return value.split(/^/m);
  };
  
  return {
    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },
    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },
    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },

    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },

    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
      var ret = [];

      ret.push("Index: " + fileName);
      ret.push("===================================================================");
      ret.push("--- " + fileName + (typeof oldHeader === "undefined" ? "" : "\t" + oldHeader));
      ret.push("+++ " + fileName + (typeof newHeader === "undefined" ? "" : "\t" + newHeader));

      var diff = LineDiff.diff(oldStr, newStr);
      if (!diff[diff.length-1].value) {
        diff.pop();   // Remove trailing newline add
      }
      diff.push({value: "", lines: []});   // Append an empty value to make cleanup easier

      function contextLines(lines) {
        return lines.map(function(entry) { return ' ' + entry; });
      }
      function eofNL(curRange, i, current) {
        var last = diff[diff.length-2],
            isLast = i === diff.length-2,
            isLastOfType = i === diff.length-3 && (current.added === !last.added || current.removed === !last.removed);

        // Figure out if this is the last line for the given file and missing NL
        if (!/\n$/.test(current.value) && (isLast || isLastOfType)) {
          curRange.push('\\ No newline at end of file');
        }
      }

      var oldRangeStart = 0, newRangeStart = 0, curRange = [],
          oldLine = 1, newLine = 1;
      for (var i = 0; i < diff.length; i++) {
        var current = diff[i],
            lines = current.lines || current.value.replace(/\n$/, "").split("\n");
        current.lines = lines;

        if (current.added || current.removed) {
          if (!oldRangeStart) {
            var prev = diff[i-1];
            oldRangeStart = oldLine;
            newRangeStart = newLine;
            
            if (prev) {
              curRange = contextLines(prev.lines.slice(-4));
              oldRangeStart -= curRange.length;
              newRangeStart -= curRange.length;
            }
          }
          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?"+":"-") + entry; }));
          eofNL(curRange, i, current);

          if (current.added) {
            newLine += lines.length;
          } else {
            oldLine += lines.length;
          }
        } else {
          if (oldRangeStart) {
            // Close out any changes that have been output (or join overlapping)
            if (lines.length <= 8 && i < diff.length-2) {
              // Overlapping
              curRange.push.apply(curRange, contextLines(lines));
            } else {
              // end the range and output
              var contextSize = Math.min(lines.length, 4);
              ret.push(
                  "@@ -" + oldRangeStart + "," + (oldLine-oldRangeStart+contextSize)
                  + " +" + newRangeStart + "," + (newLine-newRangeStart+contextSize)
                  + " @@");
              ret.push.apply(ret, curRange);
              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
              if (lines.length <= 4) {
                eofNL(ret, i, current);
              }

              oldRangeStart = 0;  newRangeStart = 0; curRange = [];
            }
          }
          oldLine += lines.length;
          newLine += lines.length;
        }
      }

      return ret.join('\n') + '\n';
    },

    convertChangesToXML: function(changes){
      var ret = [];
      for ( var i = 0; i < changes.length; i++) {
        var change = changes[i];
        if (change.added) {
          ret.push("<ins>");
        } else if (change.removed) {
          ret.push("<del>");
        }

        ret.push(escapeHTML(change.value));

        if (change.added) {
          ret.push("</ins>");
        } else if (change.removed) {
          ret.push("</del>");
        }
      }
      return ret.join("");
    }
  };
})();

if (typeof module !== "undefined") {
    module.exports = JsDiff;
}

}); // module: browser/diff.js

require.register("browser/events.js", function(module, exports, require){

/**
 * Module exports.
 */

exports.EventEmitter = EventEmitter;

/**
 * Check if `obj` is an array.
 */

function isArray(obj) {
  return '[object Array]' == {}.toString.call(obj);
}

/**
 * Event emitter constructor.
 *
 * @api public
 */

function EventEmitter(){};

/**
 * Adds a listener.
 *
 * @api public
 */

EventEmitter.prototype.on = function (name, fn) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = fn;
  } else if (isArray(this.$events[name])) {
    this.$events[name].push(fn);
  } else {
    this.$events[name] = [this.$events[name], fn];
  }

  return this;
};

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

/**
 * Adds a volatile listener.
 *
 * @api public
 */

EventEmitter.prototype.once = function (name, fn) {
  var self = this;

  function on () {
    self.removeListener(name, on);
    fn.apply(this, arguments);
  };

  on.listener = fn;
  this.on(name, on);

  return this;
};

/**
 * Removes a listener.
 *
 * @api public
 */

EventEmitter.prototype.removeListener = function (name, fn) {
  if (this.$events && this.$events[name]) {
    var list = this.$events[name];

    if (isArray(list)) {
      var pos = -1;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
          pos = i;
          break;
        }
      }

      if (pos < 0) {
        return this;
      }

      list.splice(pos, 1);

      if (!list.length) {
        delete this.$events[name];
      }
    } else if (list === fn || (list.listener && list.listener === fn)) {
      delete this.$events[name];
    }
  }

  return this;
};

/**
 * Removes all listeners for an event.
 *
 * @api public
 */

EventEmitter.prototype.removeAllListeners = function (name) {
  if (name === undefined) {
    this.$events = {};
    return this;
  }

  if (this.$events && this.$events[name]) {
    this.$events[name] = null;
  }

  return this;
};

/**
 * Gets all listeners for a certain event.
 *
 * @api public
 */

EventEmitter.prototype.listeners = function (name) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = [];
  }

  if (!isArray(this.$events[name])) {
    this.$events[name] = [this.$events[name]];
  }

  return this.$events[name];
};

/**
 * Emits an event.
 *
 * @api public
 */

EventEmitter.prototype.emit = function (name) {
  if (!this.$events) {
    return false;
  }

  var handler = this.$events[name];

  if (!handler) {
    return false;
  }

  var args = [].slice.call(arguments, 1);

  if ('function' == typeof handler) {
    handler.apply(this, args);
  } else if (isArray(handler)) {
    var listeners = handler.slice();

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
  } else {
    return false;
  }

  return true;
};
}); // module: browser/events.js

require.register("browser/fs.js", function(module, exports, require){

}); // module: browser/fs.js

require.register("browser/path.js", function(module, exports, require){

}); // module: browser/path.js

require.register("browser/progress.js", function(module, exports, require){

/**
 * Expose `Progress`.
 */

module.exports = Progress;

/**
 * Initialize a new `Progress` indicator.
 */

function Progress() {
  this.percent = 0;
  this.size(0);
  this.fontSize(11);
  this.font('helvetica, arial, sans-serif');
}

/**
 * Set progress size to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.size = function(n){
  this._size = n;
  return this;
};

/**
 * Set text to `str`.
 *
 * @param {String} str
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.text = function(str){
  this._text = str;
  return this;
};

/**
 * Set font size to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.fontSize = function(n){
  this._fontSize = n;
  return this;
};

/**
 * Set font `family`.
 *
 * @param {String} family
 * @return {Progress} for chaining
 */

Progress.prototype.font = function(family){
  this._font = family;
  return this;
};

/**
 * Update percentage to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 */

Progress.prototype.update = function(n){
  this.percent = n;
  return this;
};

/**
 * Draw on `ctx`.
 *
 * @param {CanvasRenderingContext2d} ctx
 * @return {Progress} for chaining
 */

Progress.prototype.draw = function(ctx){
//  var percent = Math.min(this.percent, 100)
//    , size = this._size
//    , half = size / 2
//    , x = half
//    , y = half
//    , rad = half - 1
//    , fontSize = this._fontSize;
//
//  ctx.font = fontSize + 'px ' + this._font;
//
//  var angle = Math.PI * 2 * (percent / 100);
//  ctx.clearRect(0, 0, size, size);
//
//  // outer circle
//  ctx.strokeStyle = '#9f9f9f';
//  ctx.beginPath();
//  ctx.arc(x, y, rad, 0, angle, false);
//  ctx.stroke();
//
//  // inner circle
//  ctx.strokeStyle = '#eee';
//  ctx.beginPath();
//  ctx.arc(x, y, rad - 1, 0, angle, true);
//  ctx.stroke();
//
//  // text
//  var text = this._text || (percent | 0) + '%'
//    , w = ctx.measureText(text).width;
//
//  ctx.fillText(
//      text
//    , x - w / 2 + 1
//    , y + fontSize / 2 - 1);

  return this;
};

}); // module: browser/progress.js

require.register("browser/tty.js", function(module, exports, require){

exports.isatty = function(){
  return true;
};

exports.getWindowSize = function(){
  return [window.innerHeight, window.innerWidth];
};
}); // module: browser/tty.js

require.register("context.js", function(module, exports, require){

/**
 * Expose `Context`.
 */

module.exports = Context;

/**
 * Initialize a new `Context`.
 *
 * @api private
 */

function Context(){}

/**
 * Set or get the context `Runnable` to `runnable`.
 *
 * @param {Runnable} runnable
 * @return {Context}
 * @api private
 */

Context.prototype.runnable = function(runnable){
  if (0 == arguments.length) return this._runnable;
  this.test = this._runnable = runnable;
  return this;
};

/**
 * Set test timeout `ms`.
 *
 * @param {Number} ms
 * @return {Context} self
 * @api private
 */

Context.prototype.timeout = function(ms){
  this.runnable().timeout(ms);
  return this;
};

/**
 * Set test slowness threshold `ms`.
 *
 * @param {Number} ms
 * @return {Context} self
 * @api private
 */

Context.prototype.slow = function(ms){
  this.runnable().slow(ms);
  return this;
};

/**
 * Inspect the context void of `._runnable`.
 *
 * @return {String}
 * @api private
 */

Context.prototype.inspect = function(){
  return JSON.stringify(this, function(key, val){
    if ('_runnable' == key) return;
    if ('test' == key) return;
    return val;
  }, 2);
};

}); // module: context.js

require.register("hook.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Runnable = require('./runnable');

/**
 * Expose `Hook`.
 */

module.exports = Hook;

/**
 * Initialize a new `Hook` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Hook(title, fn) {
  Runnable.call(this, title, fn);
  this.type = 'hook';
}

/**
 * Inherit from `Runnable.prototype`.
 */

function F(){};
F.prototype = Runnable.prototype;
Hook.prototype = new F;
Hook.prototype.constructor = Hook;


/**
 * Get or set the test `err`.
 *
 * @param {Error} err
 * @return {Error}
 * @api public
 */

Hook.prototype.error = function(err){
  if (0 == arguments.length) {
    var err = this._error;
    this._error = null;
    return err;
  }

  this._error = err;
};


}); // module: hook.js

require.register("interfaces/bdd.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * BDD-style interface:
 * 
 *      describe('Array', function(){
 *        describe('#indexOf()', function(){
 *          it('should return -1 when not present', function(){
 *
 *          });
 *
 *          it('should return the index when present', function(){
 *
 *          });
 *        });
 *      });
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context, file, mocha){

    /**
     * Execute before running tests.
     */

    context.before = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after running tests.
     */

    context.after = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Execute before each test case.
     */

    context.beforeEach = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.afterEach = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Describe a "suite" with the given `title`
     * and callback `fn` containing nested suites
     * and/or tests.
     */
  
    context.describe = context.context = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
      return suite;
    };

    /**
     * Pending describe.
     */

    context.xdescribe =
    context.xcontext =
    context.describe.skip = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suite.pending = true;
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
    };

    /**
     * Exclusive suite.
     */

    context.describe.only = function(title, fn){
      var suite = context.describe(title, fn);
      mocha.grep(suite.fullTitle());
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.it = context.specify = function(title, fn){
      var suite = suites[0];
      if (suite.pending) var fn = null;
      var test = new Test(title, fn);
      suite.addTest(test);
      return test;
    };

    /**
     * Exclusive test-case.
     */

    context.it.only = function(title, fn){
      var test = context.it(title, fn);
      mocha.grep(test.fullTitle());
    };

    /**
     * Pending test case.
     */

    context.xit =
    context.xspecify =
    context.it.skip = function(title){
      context.it(title);
    };
  });
};

}); // module: interfaces/bdd.js

require.register("interfaces/exports.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * TDD-style interface:
 * 
 *     exports.Array = {
 *       '#indexOf()': {
 *         'should return -1 when the value is not present': function(){
 *           
 *         },
 *
 *         'should return the correct index when the value is present': function(){
 *           
 *         }
 *       }
 *     };
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('require', visit);

  function visit(obj) {
    var suite;
    for (var key in obj) {
      if ('function' == typeof obj[key]) {
        var fn = obj[key];
        switch (key) {
          case 'before':
            suites[0].beforeAll(fn);
            break;
          case 'after':
            suites[0].afterAll(fn);
            break;
          case 'beforeEach':
            suites[0].beforeEach(fn);
            break;
          case 'afterEach':
            suites[0].afterEach(fn);
            break;
          default:
            suites[0].addTest(new Test(key, fn));
        }
      } else {
        var suite = Suite.create(suites[0], key);
        suites.unshift(suite);
        visit(obj[key]);
        suites.shift();
      }
    }
  }
};
}); // module: interfaces/exports.js

require.register("interfaces/index.js", function(module, exports, require){

exports.bdd = require('./bdd');
exports.tdd = require('./tdd');
exports.qunit = require('./qunit');
exports.exports = require('./exports');

}); // module: interfaces/index.js

require.register("interfaces/qunit.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * QUnit-style interface:
 * 
 *     suite('Array');
 *     
 *     test('#length', function(){
 *       var arr = [1,2,3];
 *       ok(arr.length == 3);
 *     });
 *     
 *     test('#indexOf()', function(){
 *       var arr = [1,2,3];
 *       ok(arr.indexOf(1) == 0);
 *       ok(arr.indexOf(2) == 1);
 *       ok(arr.indexOf(3) == 2);
 *     });
 *     
 *     suite('String');
 *     
 *     test('#length', function(){
 *       ok('foo'.length == 3);
 *     });
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context){

    /**
     * Execute before running tests.
     */

    context.before = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after running tests.
     */

    context.after = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Execute before each test case.
     */

    context.beforeEach = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.afterEach = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Describe a "suite" with the given `title`.
     */
  
    context.suite = function(title){
      if (suites.length > 1) suites.shift();
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.test = function(title, fn){
      suites[0].addTest(new Test(title, fn));
    };
  });
};

}); // module: interfaces/qunit.js

require.register("interfaces/tdd.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * TDD-style interface:
 *
 *      suite('Array', function(){
 *        suite('#indexOf()', function(){
 *          suiteSetup(function(){
 *
 *          });
 *          
 *          test('should return -1 when not present', function(){
 *
 *          });
 *
 *          test('should return the index when present', function(){
 *
 *          });
 *
 *          suiteTeardown(function(){
 *
 *          });
 *        });
 *      });
 *
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context, file, mocha){

    /**
     * Execute before each test case.
     */

    context.setup = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.teardown = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Execute before the suite.
     */

    context.suiteSetup = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after the suite.
     */

    context.suiteTeardown = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Describe a "suite" with the given `title`
     * and callback `fn` containing nested suites
     * and/or tests.
     */

    context.suite = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
      return suite;
    };

    /**
     * Exclusive test-case.
     */

    context.suite.only = function(title, fn){
      var suite = context.suite(title, fn);
      mocha.grep(suite.fullTitle());
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.test = function(title, fn){
      var test = new Test(title, fn);
      suites[0].addTest(test);
      return test;
    };

    /**
     * Exclusive test-case.
     */

    context.test.only = function(title, fn){
      var test = context.test(title, fn);
      mocha.grep(test.fullTitle());
    };

    /**
     * Pending test case.
     */

    context.test.skip = function(title){
      context.test(title);
    };
  });
};

}); // module: interfaces/tdd.js

require.register("mocha.js", function(module, exports, require){
/*!
 * mocha
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var path = require('browser/path')
  , utils = require('./utils');

/**
 * Expose `Mocha`.
 */

exports = module.exports = Mocha;

/**
 * Expose internals.
 */

exports.utils = utils;
exports.interfaces = require('./interfaces');
exports.reporters = require('./reporters');
exports.Runnable = require('./runnable');
exports.Context = require('./context');
exports.Runner = require('./runner');
exports.Suite = require('./suite');
exports.Hook = require('./hook');
exports.Test = require('./test');

/**
 * Return image `name` path.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function image(name) {
  return __dirname + '/../images/' + name + '.png';
}

/**
 * Setup mocha with `options`.
 *
 * Options:
 *
 *   - `ui` name "bdd", "tdd", "exports" etc
 *   - `reporter` reporter instance, defaults to `mocha.reporters.Dot`
 *   - `globals` array of accepted globals
 *   - `timeout` timeout in milliseconds
 *   - `bail` bail on the first test failure
 *   - `slow` milliseconds to wait before considering a test slow
 *   - `ignoreLeaks` ignore global leaks
 *   - `grep` string or regexp to filter tests with
 *
 * @param {Object} options
 * @api public
 */

function Mocha(options) {
  options = options || {};
  this.files = [];
  this.options = options;
  this.grep(options.grep);
  this.suite = new exports.Suite('', new exports.Context);
  this.ui(options.ui);
  this.bail(options.bail);
  this.reporter(options.reporter);
  if (options.timeout) this.timeout(options.timeout);
  if (options.slow) this.slow(options.slow);
}

/**
 * Enable or disable bailing on the first failure.
 *
 * @param {Boolean} [bail]
 * @api public
 */

Mocha.prototype.bail = function(bail){
  if (0 == arguments.length) bail = true;
  this.suite.bail(bail);
  return this;
};

/**
 * Add test `file`.
 *
 * @param {String} file
 * @api public
 */

Mocha.prototype.addFile = function(file){
  this.files.push(file);
  return this;
};

/**
 * Set reporter to `reporter`, defaults to "dot".
 *
 * @param {String|Function} reporter name or constructor
 * @api public
 */

Mocha.prototype.reporter = function(reporter){
  if ('function' == typeof reporter) {
    this._reporter = reporter;
  } else {
    reporter = reporter || 'dot';
    try {
      this._reporter = require('./reporters/' + reporter);
    } catch (err) {
      this._reporter = require(reporter);
    }
    if (!this._reporter) throw new Error('invalid reporter "' + reporter + '"');
  }
  return this;
};

/**
 * Set test UI `name`, defaults to "bdd".
 *
 * @param {String} bdd
 * @api public
 */

Mocha.prototype.ui = function(name){
  name = name || 'bdd';
  this._ui = exports.interfaces[name];
  if (!this._ui) throw new Error('invalid interface "' + name + '"');
  this._ui = this._ui(this.suite);
  return this;
};

/**
 * Load registered files.
 *
 * @api private
 */

Mocha.prototype.loadFiles = function(fn){
  var self = this;
  var suite = this.suite;
  var pending = this.files.length;
  this.files.forEach(function(file){
    file = path.resolve(file);
    suite.emit('pre-require', global, file, self);
    suite.emit('require', require(file), file, self);
    suite.emit('post-require', global, file, self);
    --pending || (fn && fn());
  });
};

/**
 * Enable growl support.
 *
 * @api private
 */

Mocha.prototype._growl = function(runner, reporter) {
  var notify = require('growl');

  runner.on('end', function(){
    var stats = reporter.stats;
    if (stats.failures) {
      var msg = stats.failures + ' of ' + runner.total + ' tests failed';
      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });
    } else {
      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {
          name: 'mocha'
        , title: 'Passed'
        , image: image('ok')
      });
    }
  });
};

/**
 * Add regexp to grep, if `re` is a string it is escaped.
 *
 * @param {RegExp|String} re
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.grep = function(re){
  this.options.grep = 'string' == typeof re
    ? new RegExp(utils.escapeRegexp(re))
    : re;
  return this;
};

/**
 * Invert `.grep()` matches.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.invert = function(){
  this.options.invert = true;
  return this;
};

/**
 * Ignore global leaks.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.ignoreLeaks = function(){
  this.options.ignoreLeaks = true;
  return this;
};

/**
 * Enable global leak checking.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.checkLeaks = function(){
  this.options.ignoreLeaks = false;
  return this;
};

/**
 * Enable growl support.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.growl = function(){
  this.options.growl = true;
  return this;
};

/**
 * Ignore `globals` array or string.
 *
 * @param {Array|String} globals
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.globals = function(globals){
  this.options.globals = (this.options.globals || []).concat(globals);
  return this;
};

/**
 * Set the timeout in milliseconds.
 *
 * @param {Number} timeout
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.timeout = function(timeout){
  this.suite.timeout(timeout);
  return this;
};

/**
 * Set slowness threshold in milliseconds.
 *
 * @param {Number} slow
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.slow = function(slow){
  this.suite.slow(slow);
  return this;
};

/**
 * Makes all tests async (accepting a callback)
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.asyncOnly = function(){
  this.options.asyncOnly = true;
  return this;
};

/**
 * Run tests and invoke `fn()` when complete.
 *
 * @param {Function} fn
 * @return {Runner}
 * @api public
 */

Mocha.prototype.run = function(fn){
  if (this.files.length) this.loadFiles();
  var suite = this.suite;
  var options = this.options;
  var runner = new exports.Runner(suite);
  var reporter = new this._reporter(runner);
  runner.ignoreLeaks = options.ignoreLeaks;
  runner.asyncOnly = options.asyncOnly;
  if (options.grep) runner.grep(options.grep, options.invert);
  if (options.globals) runner.globals(options.globals);
  if (options.growl) this._growl(runner, reporter);
  return runner.run(fn);
};

}); // module: mocha.js

require.register("ms.js", function(module, exports, require){

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;

/**
 * Parse or format the given `val`.
 *
 * @param {String|Number} val
 * @return {String|Number}
 * @api public
 */

module.exports = function(val){
  if ('string' == typeof val) return parse(val);
  return format(val);
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var m = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!m) return;
  var n = parseFloat(m[1]);
  var type = (m[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * 31557600000;
    case 'days':
    case 'day':
    case 'd':
      return n * 86400000;
    case 'hours':
    case 'hour':
    case 'h':
      return n * 3600000;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * 60000;
    case 'seconds':
    case 'second':
    case 's':
      return n * 1000;
    case 'ms':
      return n;
  }
}

/**
 * Format the given `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api public
 */

function format(ms) {
  if (ms == d) return Math.round(ms / d) + ' day';
  if (ms > d) return Math.round(ms / d) + ' days';
  if (ms == h) return Math.round(ms / h) + ' hour';
  if (ms > h) return Math.round(ms / h) + ' hours';
  if (ms == m) return Math.round(ms / m) + ' minute';
  if (ms > m) return Math.round(ms / m) + ' minutes';
  if (ms == s) return Math.round(ms / s) + ' second';
  if (ms > s) return Math.round(ms / s) + ' seconds';
  return ms + ' ms';
}
}); // module: ms.js

require.register("reporters/base.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var tty = require('browser/tty')
  , diff = require('browser/diff')
  , ms = require('../ms');

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Check if both stdio streams are associated with a tty.
 */

var isatty = tty.isatty(1) && tty.isatty(2);

/**
 * Expose `Base`.
 */

exports = module.exports = Base;

/**
 * Enable coloring by default.
 */

exports.useColors = isatty;

/**
 * Default color map.
 */

exports.colors = {
    'pass': 90
  , 'fail': 31
  , 'bright pass': 92
  , 'bright fail': 91
  , 'bright yellow': 93
  , 'pending': 36
  , 'suite': 0
  , 'error title': 0
  , 'error message': 31
  , 'error stack': 90
  , 'checkmark': 32
  , 'fast': 90
  , 'medium': 33
  , 'slow': 31
  , 'green': 32
  , 'light': 90
  , 'diff gutter': 90
  , 'diff added': 42
  , 'diff removed': 41
};

/**
 * Default symbol map.
 */
 
exports.symbols = {
  ok: '✓',
  err: '✖',
  dot: '․'
};

// With node.js on Windows: use symbols available in terminal default fonts
if ('win32' == process.platform) {
  exports.symbols.ok = '\u221A';
  exports.symbols.err = '\u00D7';
  exports.symbols.dot = '.';
}

/**
 * Color `str` with the given `type`,
 * allowing colors to be disabled,
 * as well as user-defined color
 * schemes.
 *
 * @param {String} type
 * @param {String} str
 * @return {String}
 * @api private
 */

var color = exports.color = function(type, str) {
  if (!exports.useColors) return str;
  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
};

/**
 * Expose term window size, with some
 * defaults for when stderr is not a tty.
 */

exports.window = {
  width: isatty
    ? process.stdout.getWindowSize
      ? process.stdout.getWindowSize(1)[0]
      : tty.getWindowSize()[1]
    : 75
};

/**
 * Expose some basic cursor interactions
 * that are common among reporters.
 */

exports.cursor = {
  hide: function(){
    process.stdout.write('\u001b[?25l');
  },

  show: function(){
    process.stdout.write('\u001b[?25h');
  },

  deleteLine: function(){
    process.stdout.write('\u001b[2K');
  },

  beginningOfLine: function(){
    process.stdout.write('\u001b[0G');
  },

  CR: function(){
    exports.cursor.deleteLine();
    exports.cursor.beginningOfLine();
  }
};

/**
 * Outut the given `failures` as a list.
 *
 * @param {Array} failures
 * @api public
 */

exports.list = function(failures){
  console.error();
  failures.forEach(function(test, i){
    // format
    var fmt = color('error title', '  %s) %s:\n')
      + color('error message', '     %s')
      + color('error stack', '\n%s\n');

    // msg
    var err = test.err
      , message = err.message || ''
      , stack = err.stack || message
      , index = stack.indexOf(message) + message.length
      , msg = stack.slice(0, index)
      , actual = err.actual
      , expected = err.expected
      , escape = true;

    // explicitly show diff
    if (err.showDiff) {
      escape = false;
      err.actual = actual = JSON.stringify(actual, null, 2);
      err.expected = expected = JSON.stringify(expected, null, 2);
    }

    // actual / expected diff
    if ('string' == typeof actual && 'string' == typeof expected) {
      var len = Math.max(actual.length, expected.length);

      if (len < 20) msg = errorDiff(err, 'Chars', escape);
      else msg = errorDiff(err, 'Words', escape);

      // linenos
      var lines = msg.split('\n');
      if (lines.length > 4) {
        var width = String(lines.length).length;
        msg = lines.map(function(str, i){
          return pad(++i, width) + ' |' + ' ' + str;
        }).join('\n');
      }

      // legend
      msg = '\n'
        + color('diff removed', 'actual')
        + ' '
        + color('diff added', 'expected')
        + '\n\n'
        + msg
        + '\n';

      // indent
      msg = msg.replace(/^/gm, '      ');

      fmt = color('error title', '  %s) %s:\n%s')
        + color('error stack', '\n%s\n');
    }

    // indent stack trace without msg
    stack = stack.slice(index ? index + 1 : index)
      .replace(/^/gm, '  ');

    console.error(fmt, (i + 1), test.fullTitle(), msg, stack);
  });
};

/**
 * Initialize a new `Base` reporter.
 *
 * All other reporters generally
 * inherit from this reporter, providing
 * stats such as test duration, number
 * of tests passed / failed etc.
 *
 * @param {Runner} runner
 * @api public
 */

function Base(runner) {
  var self = this
    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }
    , failures = this.failures = [];

  if (!runner) return;
  this.runner = runner;

  runner.stats = stats;

  runner.on('start', function(){
    stats.start = new Date;
  });

  runner.on('suite', function(suite){
    stats.suites = stats.suites || 0;
    suite.root || stats.suites++;
  });

  runner.on('test end', function(test){
    stats.tests = stats.tests || 0;
    stats.tests++;
  });

  runner.on('pass', function(test){
    stats.passes = stats.passes || 0;

    var medium = test.slow() / 2;
    test.speed = test.duration > test.slow()
      ? 'slow'
      : test.duration > medium
        ? 'medium'
        : 'fast';

    stats.passes++;
  });

  runner.on('fail', function(test, err){
    stats.failures = stats.failures || 0;
    stats.failures++;
    test.err = err;
    failures.push(test);
  });

  runner.on('end', function(){
    stats.end = new Date;
    stats.duration = new Date - stats.start;
  });

  runner.on('pending', function(){
    stats.pending++;
  });
}

/**
 * Output common epilogue used by many of
 * the bundled reporters.
 *
 * @api public
 */

Base.prototype.epilogue = function(){
  var stats = this.stats
    , fmt
    , tests;

  console.log();

  function pluralize(n) {
    return 1 == n ? 'test' : 'tests';
  }

  // failure
  if (stats.failures) {
    fmt = color('bright fail', '  ' + exports.symbols.err)
      + color('fail', ' %d of %d %s failed')
      + color('light', ':')

    console.error(fmt,
      stats.failures,
      this.runner.total,
      pluralize(this.runner.total));

    Base.list(this.failures);
    console.error();
    return;
  }

  // pass
  fmt = color('bright pass', ' ')
    + color('green', ' %d %s complete')
    + color('light', ' (%s)');

  console.log(fmt,
    stats.tests || 0,
    pluralize(stats.tests),
    ms(stats.duration));

  // pending
  if (stats.pending) {
    fmt = color('pending', ' ')
      + color('pending', ' %d %s pending');

    console.log(fmt, stats.pending, pluralize(stats.pending));
  }

  console.log();
};

/**
 * Pad the given `str` to `len`.
 *
 * @param {String} str
 * @param {String} len
 * @return {String}
 * @api private
 */

function pad(str, len) {
  str = String(str);
  return Array(len - str.length + 1).join(' ') + str;
}

/**
 * Return a character diff for `err`.
 *
 * @param {Error} err
 * @return {String}
 * @api private
 */

function errorDiff(err, type, escape) {
  return diff['diff' + type](err.actual, err.expected).map(function(str){
    if (escape) {
      str.value = str.value
        .replace(/\t/g, '<tab>')
        .replace(/\r/g, '<CR>')
        .replace(/\n/g, '<LF>\n');
    }
    if (str.added) return colorLines('diff added', str.value);
    if (str.removed) return colorLines('diff removed', str.value);
    return str.value;
  }).join('');
}

/**
 * Color lines for `str`, using the color `name`.
 *
 * @param {String} name
 * @param {String} str
 * @return {String}
 * @api private
 */

function colorLines(name, str) {
  return str.split('\n').map(function(str){
    return color(name, str);
  }).join('\n');
}

}); // module: reporters/base.js

require.register("reporters/doc.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils');

/**
 * Expose `Doc`.
 */

exports = module.exports = Doc;

/**
 * Initialize a new `Doc` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Doc(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total
    , indents = 2;

  function indent() {
    return Array(indents).join('  ');
  }

  runner.on('suite', function(suite){
    if (suite.root) return;
    ++indents;
    console.log('%s<section class="suite">', indent());
    ++indents;
    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));
    console.log('%s<dl>', indent());
  });

  runner.on('suite end', function(suite){
    if (suite.root) return;
    console.log('%s</dl>', indent());
    --indents;
    console.log('%s</section>', indent());
    --indents;
  });

  runner.on('pass', function(test){
    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));
    var code = utils.escape(utils.clean(test.fn.toString()));
    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);
  });
}

}); // module: reporters/doc.js

require.register("reporters/dot.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `Dot`.
 */

exports = module.exports = Dot;

/**
 * Initialize a new `Dot` matrix test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Dot(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , n = 0;

  runner.on('start', function(){
    process.stdout.write('\n  ');
  });

  runner.on('pending', function(test){
    process.stdout.write(color('pending', Base.symbols.dot));
  });

  runner.on('pass', function(test){
    if (++n % width == 0) process.stdout.write('\n  ');
    if ('slow' == test.speed) {
      process.stdout.write(color('bright yellow', Base.symbols.dot));
    } else {
      process.stdout.write(color(test.speed, Base.symbols.dot));
    }
  });

  runner.on('fail', function(test, err){
    if (++n % width == 0) process.stdout.write('\n  ');
    process.stdout.write(color('fail', Base.symbols.dot));
  });

  runner.on('end', function(){
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Dot.prototype = new F;
Dot.prototype.constructor = Dot;

}); // module: reporters/dot.js

require.register("reporters/html-cov.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var JSONCov = require('./json-cov')
  , fs = require('browser/fs');

/**
 * Expose `HTMLCov`.
 */

exports = module.exports = HTMLCov;

/**
 * Initialize a new `JsCoverage` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function HTMLCov(runner) {
  var jade = require('jade')
    , file = __dirname + '/templates/coverage.jade'
    , str = fs.readFileSync(file, 'utf8')
    , fn = jade.compile(str, { filename: file })
    , self = this;

  JSONCov.call(this, runner, false);

  runner.on('end', function(){
    process.stdout.write(fn({
        cov: self.cov
      , coverageClass: coverageClass
    }));
  });
}

/**
 * Return coverage class for `n`.
 *
 * @return {String}
 * @api private
 */

function coverageClass(n) {
  if (n >= 75) return 'high';
  if (n >= 50) return 'medium';
  if (n >= 25) return 'low';
  return 'terrible';
}
}); // module: reporters/html-cov.js

require.register("reporters/html.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils')
  , Progress = require('../browser/progress')
  , escape = utils.escape;

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Expose `Doc`.
 */

exports = module.exports = HTML;

/**
 * Stats template.
 */

var statsTemplate = '<ul id="mocha-stats">'
  + '<li class="progress"><canvas width="40" height="40"></canvas></li>'
  + '<li class="passes"><a href="#">passes:</a> <em>0</em></li>'
  + '<li class="failures"><a href="#">failures:</a> <em>0</em></li>'
  + '<li class="duration">duration: <em>0</em>s</li>'
  + '</ul>';

/**
 * Initialize a new `Doc` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function HTML(runner, root) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total
    , stat = fragment(statsTemplate)
    , items = stat.getElementsByTagName('li')
    , passes = items[1].getElementsByTagName('em')[0]
    , passesLink = items[1].getElementsByTagName('a')[0]
    , failures = items[2].getElementsByTagName('em')[0]
    , failuresLink = items[2].getElementsByTagName('a')[0]
    , duration = items[3].getElementsByTagName('em')[0]
    , canvas = stat.getElementsByTagName('canvas')[0]
    , report = fragment('<ul id="mocha-report"></ul>')
    , stack = [report]
    , progress
    , ctx

  root = root || document.getElementById('mocha');

  if (canvas.getContext) {
    var ratio = window.devicePixelRatio || 1;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    canvas.width *= ratio;
    canvas.height *= ratio;
    ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    progress = new Progress;
  }

  if (!root) return error('#mocha div missing, add it to your document');

  // pass toggle
  on(passesLink, 'click', function(){
    unhide();
    var name = /pass/.test(report.className) ? '' : ' pass';
    report.className = report.className.replace(/fail|pass/g, '') + name;
    if (report.className.trim()) hideSuitesWithout('test pass');
  });

  // failure toggle
  on(failuresLink, 'click', function(){
    unhide();
    var name = /fail/.test(report.className) ? '' : ' fail';
    report.className = report.className.replace(/fail|pass/g, '') + name;
    if (report.className.trim()) hideSuitesWithout('test fail');
  });

  root.appendChild(stat);
  root.appendChild(report);

  if (progress) progress.size(40);

  runner.on('suite', function(suite){
    if (suite.root) return;

    // suite
    var url = '?grep=' + encodeURIComponent(suite.fullTitle());
    var el = fragment('<li class="suite"><h1><a href="%s">%s</a></h1></li>', url, escape(suite.title));

    // container
    stack[0].appendChild(el);
    stack.unshift(document.createElement('ul'));
    el.appendChild(stack[0]);
  });

  runner.on('suite end', function(suite){
    if (suite.root) return;
    stack.shift();
  });

  runner.on('fail', function(test, err){
    if ('hook' == test.type) runner.emit('test end', test);
  });

  runner.on('test end', function(test){
    window.scrollTo(0, document.body.scrollHeight);

    // TODO: add to stats
    var percent = stats.tests / this.total * 100 | 0;
    if (progress) progress.update(percent).draw(ctx);

    // update stats
    var ms = new Date - stats.start;
    text(passes, stats.passes);
    text(failures, stats.failures);
    text(duration, (ms / 1000).toFixed(2));

    // test
    if ('passed' == test.state) {
      var el = fragment('<li class="test pass %e"><h2>%e<span class="duration">%ems</span> <a href="?grep=%e" class="replay">‣</a></h2></li>', test.speed, test.title, test.duration, encodeURIComponent(test.fullTitle()));
    } else if (test.pending) {
      var el = fragment('<li class="test pass pending"><h2>%e</h2></li>', test.title);
    } else {
      var el = fragment('<li class="test fail"><h2>%e <a href="?grep=%e" class="replay">‣</a></h2></li>', test.title, encodeURIComponent(test.fullTitle()));
      var str = test.err.stack || test.err.toString();

      // FF / Opera do not add the message
      if (!~str.indexOf(test.err.message)) {
        str = test.err.message + '\n' + str;
      }

      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we
      // check for the result of the stringifying.
      if ('[object Error]' == str) str = test.err.message;

      // Safari doesn't give you a stack. Let's at least provide a source line.
      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {
        str += "\n(" + test.err.sourceURL + ":" + test.err.line + ")";
      }

      el.appendChild(fragment('<pre class="error">%e</pre>', str));
    }

    // toggle code
    // TODO: defer
    if (!test.pending) {
      var h2 = el.getElementsByTagName('h2')[0];

      on(h2, 'click', function(){
        pre.style.display = 'none' == pre.style.display
          ? 'block'
          : 'none';
      });

      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.fn.toString()));
      el.appendChild(pre);
      pre.style.display = 'none';
    }

    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.
    if (stack[0]) stack[0].appendChild(el);
  });
}

/**
 * Display error `msg`.
 */

function error(msg) {
  document.body.appendChild(fragment('<div id="mocha-error">%s</div>', msg));
}

/**
 * Return a DOM fragment from `html`.
 */

function fragment(html) {
  var args = arguments
    , div = document.createElement('div')
    , i = 1;

  div.innerHTML = html.replace(/%([se])/g, function(_, type){
    switch (type) {
      case 's': return String(args[i++]);
      case 'e': return escape(args[i++]);
    }
  });

  return div.firstChild;
}

/**
 * Check for suites that do not have elements
 * with `classname`, and hide them.
 */

function hideSuitesWithout(classname) {
  var suites = document.getElementsByClassName('suite');
  for (var i = 0; i < suites.length; i++) {
    var els = suites[i].getElementsByClassName(classname);
    if (0 == els.length) suites[i].className += ' hidden';
  }
}

/**
 * Unhide .hidden suites.
 */

function unhide() {
  var els = document.getElementsByClassName('suite hidden');
  for (var i = 0; i < els.length; ++i) {
    els[i].className = els[i].className.replace('suite hidden', 'suite');
  }
}

/**
 * Set `el` text to `str`.
 */

function text(el, str) {
  if (el.textContent) {
    el.textContent = str;
  } else {
    el.innerText = str;
  }
}

/**
 * Listen on `event` with callback `fn`.
 */

function on(el, event, fn) {
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
  } else {
    el.attachEvent('on' + event, fn);
  }
}

}); // module: reporters/html.js

require.register("reporters/index.js", function(module, exports, require){

exports.Base = require('./base');
exports.Dot = require('./dot');
exports.Doc = require('./doc');
exports.TAP = require('./tap');
exports.JSON = require('./json');
exports.HTML = require('./html');
exports.List = require('./list');
exports.Min = require('./min');
exports.Spec = require('./spec');
exports.Nyan = require('./nyan');
exports.XUnit = require('./xunit');
exports.Markdown = require('./markdown');
exports.Progress = require('./progress');
exports.Landing = require('./landing');
exports.JSONCov = require('./json-cov');
exports.HTMLCov = require('./html-cov');
exports.JSONStream = require('./json-stream');
exports.Teamcity = require('./teamcity');

}); // module: reporters/index.js

require.register("reporters/json-cov.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `JSONCov`.
 */

exports = module.exports = JSONCov;

/**
 * Initialize a new `JsCoverage` reporter.
 *
 * @param {Runner} runner
 * @param {Boolean} output
 * @api public
 */

function JSONCov(runner, output) {
  var self = this
    , output = 1 == arguments.length ? true : output;

  Base.call(this, runner);

  var tests = []
    , failures = []
    , passes = [];

  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var cov = global._$jscoverage || {};
    var result = self.cov = map(cov);
    result.stats = self.stats;
    result.tests = tests.map(clean);
    result.failures = failures.map(clean);
    result.passes = passes.map(clean);
    if (!output) return;
    process.stdout.write(JSON.stringify(result, null, 2 ));
  });
}

/**
 * Map jscoverage data to a JSON structure
 * suitable for reporting.
 *
 * @param {Object} cov
 * @return {Object}
 * @api private
 */

function map(cov) {
  var ret = {
      instrumentation: 'node-jscoverage'
    , sloc: 0
    , hits: 0
    , misses: 0
    , coverage: 0
    , files: []
  };

  for (var filename in cov) {
    var data = coverage(filename, cov[filename]);
    ret.files.push(data);
    ret.hits += data.hits;
    ret.misses += data.misses;
    ret.sloc += data.sloc;
  }

  ret.files.sort(function(a, b) {
    return a.filename.localeCompare(b.filename);
  });

  if (ret.sloc > 0) {
    ret.coverage = (ret.hits / ret.sloc) * 100;
  }

  return ret;
};

/**
 * Map jscoverage data for a single source file
 * to a JSON structure suitable for reporting.
 *
 * @param {String} filename name of the source file
 * @param {Object} data jscoverage coverage data
 * @return {Object}
 * @api private
 */

function coverage(filename, data) {
  var ret = {
    filename: filename,
    coverage: 0,
    hits: 0,
    misses: 0,
    sloc: 0,
    source: {}
  };

  data.source.forEach(function(line, num){
    num++;

    if (data[num] === 0) {
      ret.misses++;
      ret.sloc++;
    } else if (data[num] !== undefined) {
      ret.hits++;
      ret.sloc++;
    }

    ret.source[num] = {
        source: line
      , coverage: data[num] === undefined
        ? ''
        : data[num]
    };
  });

  ret.coverage = ret.hits / ret.sloc * 100;

  return ret;
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}

}); // module: reporters/json-cov.js

require.register("reporters/json-stream.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `List`.
 */

exports = module.exports = List;

/**
 * Initialize a new `List` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function List(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total;

  runner.on('start', function(){
    console.log(JSON.stringify(['start', { total: total }]));
  });

  runner.on('pass', function(test){
    console.log(JSON.stringify(['pass', clean(test)]));
  });

  runner.on('fail', function(test, err){
    console.log(JSON.stringify(['fail', clean(test)]));
  });

  runner.on('end', function(){
    process.stdout.write(JSON.stringify(['end', self.stats]));
  });
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}
}); // module: reporters/json-stream.js

require.register("reporters/json.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `JSON`.
 */

exports = module.exports = JSONReporter;

/**
 * Initialize a new `JSON` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function JSONReporter(runner) {
  var self = this;
  Base.call(this, runner);

  var tests = []
    , failures = []
    , passes = [];

  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var obj = {
        stats: self.stats
      , tests: tests.map(clean)
      , failures: failures.map(clean)
      , passes: passes.map(clean)
    };

    process.stdout.write(JSON.stringify(obj, null, 2));
  });
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}
}); // module: reporters/json.js

require.register("reporters/landing.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Landing`.
 */

exports = module.exports = Landing;

/**
 * Airplane color.
 */

Base.colors.plane = 0;

/**
 * Airplane crash color.
 */

Base.colors['plane crash'] = 31;

/**
 * Runway color.
 */

Base.colors.runway = 90;

/**
 * Initialize a new `Landing` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Landing(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , total = runner.total
    , stream = process.stdout
    , plane = color('plane', '✈')
    , crashed = -1
    , n = 0;

  function runway() {
    var buf = Array(width).join('-');
    return '  ' + color('runway', buf);
  }

  runner.on('start', function(){
    stream.write('\n  ');
    cursor.hide();
  });

  runner.on('test end', function(test){
    // check if the plane crashed
    var col = -1 == crashed
      ? width * ++n / total | 0
      : crashed;

    // show the crash
    if ('failed' == test.state) {
      plane = color('plane crash', '✈');
      crashed = col;
    }

    // render landing strip
    stream.write('\u001b[4F\n\n');
    stream.write(runway());
    stream.write('\n  ');
    stream.write(color('runway', Array(col).join('⋅')));
    stream.write(plane)
    stream.write(color('runway', Array(width - col).join('⋅') + '\n'));
    stream.write(runway());
    stream.write('\u001b[0m');
  });

  runner.on('end', function(){
    cursor.show();
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Landing.prototype = new F;
Landing.prototype.constructor = Landing;

}); // module: reporters/landing.js

require.register("reporters/list.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `List`.
 */

exports = module.exports = List;

/**
 * Initialize a new `List` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function List(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , n = 0;

  runner.on('start', function(){
    console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
  });

  runner.on('pending', function(test){
    var fmt = color('checkmark', '  -')
      + color('pending', ' %s');
    console.log(fmt, test.fullTitle());
  });

  runner.on('pass', function(test){
    var fmt = color('checkmark', '  '+Base.symbols.dot)
      + color('pass', ' %s: ')
      + color(test.speed, '%dms');
    cursor.CR();
    console.log(fmt, test.fullTitle(), test.duration);
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

  runner.on('end', self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
List.prototype = new F;
List.prototype.constructor = List;


}); // module: reporters/list.js

require.register("reporters/markdown.js", function(module, exports, require){
/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils');

/**
 * Expose `Markdown`.
 */

exports = module.exports = Markdown;

/**
 * Initialize a new `Markdown` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Markdown(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , level = 0
    , buf = '';

  function title(str) {
    return Array(level).join('#') + ' ' + str;
  }

  function indent() {
    return Array(level).join('  ');
  }

  function mapTOC(suite, obj) {
    var ret = obj;
    obj = obj[suite.title] = obj[suite.title] || { suite: suite };
    suite.suites.forEach(function(suite){
      mapTOC(suite, obj);
    });
    return ret;
  }

  function stringifyTOC(obj, level) {
    ++level;
    var buf = '';
    var link;
    for (var key in obj) {
      if ('suite' == key) continue;
      if (key) link = ' - [' + key + '](#' + utils.slug(obj[key].suite.fullTitle()) + ')\n';
      if (key) buf += Array(level).join('  ') + link;
      buf += stringifyTOC(obj[key], level);
    }
    --level;
    return buf;
  }

  function generateTOC(suite) {
    var obj = mapTOC(suite, {});
    return stringifyTOC(obj, 0);
  }

  generateTOC(runner.suite);

  runner.on('suite', function(suite){
    ++level;
    var slug = utils.slug(suite.fullTitle());
    buf += '<a name="' + slug + '"></a>' + '\n';
    buf += title(suite.title) + '\n';
  });

  runner.on('suite end', function(suite){
    --level;
  });

  runner.on('pass', function(test){
    var code = utils.clean(test.fn.toString());
    buf += test.title + '.\n';
    buf += '\n```js\n';
    buf += code + '\n';
    buf += '```\n\n';
  });

  runner.on('end', function(){
    process.stdout.write('# TOC\n');
    process.stdout.write(generateTOC(runner.suite));
    process.stdout.write(buf);
  });
}
}); // module: reporters/markdown.js

require.register("reporters/min.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `Min`.
 */

exports = module.exports = Min;

/**
 * Initialize a new `Min` minimal test reporter (best used with --watch).
 *
 * @param {Runner} runner
 * @api public
 */

function Min(runner) {
  Base.call(this, runner);
  
  runner.on('start', function(){
    // clear screen
    process.stdout.write('\u001b[2J');
    // set cursor position
    process.stdout.write('\u001b[1;3H');
  });

  runner.on('end', this.epilogue.bind(this));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Min.prototype = new F;
Min.prototype.constructor = Min;

}); // module: reporters/min.js

require.register("reporters/nyan.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `Dot`.
 */

exports = module.exports = NyanCat;

/**
 * Initialize a new `Dot` matrix test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function NyanCat(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , rainbowColors = this.rainbowColors = self.generateColors()
    , colorIndex = this.colorIndex = 0
    , numerOfLines = this.numberOfLines = 4
    , trajectories = this.trajectories = [[], [], [], []]
    , nyanCatWidth = this.nyanCatWidth = 11
    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)
    , scoreboardWidth = this.scoreboardWidth = 5
    , tick = this.tick = 0
    , n = 0;

  runner.on('start', function(){
    Base.cursor.hide();
    self.draw('start');
  });

  runner.on('pending', function(test){
    self.draw('pending');
  });

  runner.on('pass', function(test){
    self.draw('pass');
  });

  runner.on('fail', function(test, err){
    self.draw('fail');
  });

  runner.on('end', function(){
    Base.cursor.show();
    for (var i = 0; i < self.numberOfLines; i++) write('\n');
    self.epilogue();
  });
}

/**
 * Draw the nyan cat with runner `status`.
 *
 * @param {String} status
 * @api private
 */

NyanCat.prototype.draw = function(status){
  this.appendRainbow();
  this.drawScoreboard();
  this.drawRainbow();
  this.drawNyanCat(status);
  this.tick = !this.tick;
};

/**
 * Draw the "scoreboard" showing the number
 * of passes, failures and pending tests.
 *
 * @api private
 */

NyanCat.prototype.drawScoreboard = function(){
  var stats = this.stats;
  var colors = Base.colors;

  function draw(color, n) {
    write(' ');
    write('\u001b[' + color + 'm' + n + '\u001b[0m');
    write('\n');
  }

  draw(colors.green, stats.passes);
  draw(colors.fail, stats.failures);
  draw(colors.pending, stats.pending);
  write('\n');

  this.cursorUp(this.numberOfLines);
};

/**
 * Append the rainbow.
 *
 * @api private
 */

NyanCat.prototype.appendRainbow = function(){
  var segment = this.tick ? '_' : '-';
  var rainbowified = this.rainbowify(segment);

  for (var index = 0; index < this.numberOfLines; index++) {
    var trajectory = this.trajectories[index];
    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();
    trajectory.push(rainbowified);
  }
};

/**
 * Draw the rainbow.
 *
 * @api private
 */

NyanCat.prototype.drawRainbow = function(){
  var self = this;

  this.trajectories.forEach(function(line, index) {
    write('\u001b[' + self.scoreboardWidth + 'C');
    write(line.join(''));
    write('\n');
  });

  this.cursorUp(this.numberOfLines);
};

/**
 * Draw the nyan cat with `status`.
 *
 * @param {String} status
 * @api private
 */

NyanCat.prototype.drawNyanCat = function(status) {
  var self = this;
  var startWidth = this.scoreboardWidth + this.trajectories[0].length;

  [0, 1, 2, 3].forEach(function(index) {
    write('\u001b[' + startWidth + 'C');

    switch (index) {
      case 0:
        write('_,------,');
        write('\n');
        break;
      case 1:
        var padding = self.tick ? '  ' : '   ';
        write('_|' + padding + '/\\_/\\ ');
        write('\n');
        break;
      case 2:
        var padding = self.tick ? '_' : '__';
        var tail = self.tick ? '~' : '^';
        var face;
        switch (status) {
          case 'pass':
            face = '( ^ .^)';
            break;
          case 'fail':
            face = '( o .o)';
            break;
          default:
            face = '( - .-)';
        }
        write(tail + '|' + padding + face + ' ');
        write('\n');
        break;
      case 3:
        var padding = self.tick ? ' ' : '  ';
        write(padding + '""  "" ');
        write('\n');
        break;
    }
  });

  this.cursorUp(this.numberOfLines);
};

/**
 * Move cursor up `n`.
 *
 * @param {Number} n
 * @api private
 */

NyanCat.prototype.cursorUp = function(n) {
  write('\u001b[' + n + 'A');
};

/**
 * Move cursor down `n`.
 *
 * @param {Number} n
 * @api private
 */

NyanCat.prototype.cursorDown = function(n) {
  write('\u001b[' + n + 'B');
};

/**
 * Generate rainbow colors.
 *
 * @return {Array}
 * @api private
 */

NyanCat.prototype.generateColors = function(){
  var colors = [];

  for (var i = 0; i < (6 * 7); i++) {
    var pi3 = Math.floor(Math.PI / 3);
    var n = (i * (1.0 / 6));
    var r = Math.floor(3 * Math.sin(n) + 3);
    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
    colors.push(36 * r + 6 * g + b + 16);
  }

  return colors;
};

/**
 * Apply rainbow to the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

NyanCat.prototype.rainbowify = function(str){
  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];
  this.colorIndex += 1;
  return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
};

/**
 * Stdout helper.
 */

function write(string) {
  process.stdout.write(string);
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
NyanCat.prototype = new F;
NyanCat.prototype.constructor = NyanCat;


}); // module: reporters/nyan.js

require.register("reporters/progress.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Progress`.
 */

exports = module.exports = Progress;

/**
 * General progress bar color.
 */

Base.colors.progress = 90;

/**
 * Initialize a new `Progress` bar test reporter.
 *
 * @param {Runner} runner
 * @param {Object} options
 * @api public
 */

function Progress(runner, options) {
  Base.call(this, runner);

  var self = this
    , options = options || {}
    , stats = this.stats
    , width = Base.window.width * .50 | 0
    , total = runner.total
    , complete = 0
    , max = Math.max;

  // default chars
  options.open = options.open || '[';
  options.complete = options.complete || '▬';
  options.incomplete = options.incomplete || Base.symbols.dot;
  options.close = options.close || ']';
  options.verbose = false;

  // tests started
  runner.on('start', function(){
    console.log();
    cursor.hide();
  });

  // tests complete
  runner.on('test end', function(){
    complete++;
    var incomplete = total - complete
      , percent = complete / total
      , n = width * percent | 0
      , i = width - n;

    cursor.CR();
    process.stdout.write('\u001b[J');
    process.stdout.write(color('progress', '  ' + options.open));
    process.stdout.write(Array(n).join(options.complete));
    process.stdout.write(Array(i).join(options.incomplete));
    process.stdout.write(color('progress', options.close));
    if (options.verbose) {
      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));
    }
  });

  // tests are complete, output some stats
  // and the failures if any
  runner.on('end', function(){
    cursor.show();
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Progress.prototype = new F;
Progress.prototype.constructor = Progress;


}); // module: reporters/progress.js

require.register("reporters/spec.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Spec`.
 */

exports = module.exports = Spec;

/**
 * Initialize a new `Spec` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Spec(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , indents = 0
    , n = 0;

  function indent() {
    return Array(indents).join('  ')
  }

  runner.on('start', function(){
    console.log();
  });

  runner.on('suite', function(suite){
    ++indents;
    console.log(color('suite', '%s%s'), indent(), suite.title);
  });

  runner.on('suite end', function(suite){
    --indents;
    if (1 == indents) console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(indent() + color('pass', '  ◦ ' + test.title + ': '));
  });

  runner.on('pending', function(test){
    var fmt = indent() + color('pending', '  - %s');
    console.log(fmt, test.title);
  });

  runner.on('pass', function(test){
    if ('fast' == test.speed) {
      var fmt = indent()
        + color('checkmark', '  ' + Base.symbols.ok)
        + color('pass', ' %s ');
      cursor.CR();
      console.log(fmt, test.title);
    } else {
      var fmt = indent()
        + color('checkmark', '  ' + Base.symbols.ok)
        + color('pass', ' %s ')
        + color(test.speed, '(%dms)');
      cursor.CR();
      console.log(fmt, test.title, test.duration);
    }
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);
  });

  runner.on('end', self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Spec.prototype = new F;
Spec.prototype.constructor = Spec;


}); // module: reporters/spec.js

require.register("reporters/tap.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `TAP`.
 */

exports = module.exports = TAP;

/**
 * Initialize a new `TAP` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function TAP(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , n = 1
    , passes = 0
    , failures = 0;

  runner.on('start', function(){
    var total = runner.grepTotal(runner.suite);
    console.log('%d..%d', 1, total);
  });

  runner.on('test end', function(){
    ++n;
  });

  runner.on('pending', function(test){
    console.log('ok %d %s # SKIP -', n, title(test));
  });

  runner.on('pass', function(test){
    passes++;
    console.log('ok %d %s', n, title(test));
  });

  runner.on('fail', function(test, err){
    failures++;
    console.log('not ok %d %s', n, title(test));
    if (err.stack) console.log(err.stack.replace(/^/gm, '  '));
  });

  runner.on('end', function(){
    console.log('# tests ' + (passes + failures));
    console.log('# pass ' + passes);
    console.log('# fail ' + failures);
  });
}

/**
 * Return a TAP-safe title of `test`
 *
 * @param {Object} test
 * @return {String}
 * @api private
 */

function title(test) {
  return test.fullTitle().replace(/#/g, '');
}

}); // module: reporters/tap.js

require.register("reporters/teamcity.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `Teamcity`.
 */

exports = module.exports = Teamcity;

/**
 * Initialize a new `Teamcity` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Teamcity(runner) {
  Base.call(this, runner);
  var stats = this.stats;

  runner.on('start', function() {
    console.log("##teamcity[testSuiteStarted name='mocha.suite']");
  });

  runner.on('test', function(test) {
    console.log("##teamcity[testStarted name='" + escape(test.fullTitle()) + "']");
  });

  runner.on('fail', function(test, err) {
    console.log("##teamcity[testFailed name='" + escape(test.fullTitle()) + "' message='" + escape(err.message) + "']");
  });

  runner.on('pending', function(test) {
    console.log("##teamcity[testIgnored name='" + escape(test.fullTitle()) + "' message='pending']");
  });

  runner.on('test end', function(test) {
    console.log("##teamcity[testFinished name='" + escape(test.fullTitle()) + "' duration='" + test.duration + "']");
  });

  runner.on('end', function() {
    console.log("##teamcity[testSuiteFinished name='mocha.suite' duration='" + stats.duration + "']");
  });
}

/**
 * Escape the given `str`.
 */

function escape(str) {
  return str
    .replace(/\|/g, "||")
    .replace(/\n/g, "|n")
    .replace(/\r/g, "|r")
    .replace(/\[/g, "|[")
    .replace(/\]/g, "|]")
    .replace(/\u0085/g, "|x")
    .replace(/\u2028/g, "|l")
    .replace(/\u2029/g, "|p")
    .replace(/'/g, "|'");
}

}); // module: reporters/teamcity.js

require.register("reporters/xunit.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils')
  , escape = utils.escape;

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Expose `XUnit`.
 */

exports = module.exports = XUnit;

/**
 * Initialize a new `XUnit` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function XUnit(runner) {
  Base.call(this, runner);
  var stats = this.stats
    , tests = []
    , self = this;

  runner.on('pass', function(test){
    tests.push(test);
  });
  
  runner.on('fail', function(test){
    tests.push(test);
  });

  runner.on('end', function(){
    console.log(tag('testsuite', {
        name: 'Mocha Tests'
      , tests: stats.tests
      , failures: stats.failures
      , errors: stats.failures
      , skip: stats.tests - stats.failures - stats.passes
      , timestamp: (new Date).toUTCString()
      , time: stats.duration / 1000
    }, false));

    tests.forEach(test);
    console.log('</testsuite>');    
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
XUnit.prototype = new F;
XUnit.prototype.constructor = XUnit;


/**
 * Output tag for the given `test.`
 */

function test(test) {
  var attrs = {
      classname: test.parent.fullTitle()
    , name: test.title
    , time: test.duration / 1000
  };

  if ('failed' == test.state) {
    var err = test.err;
    attrs.message = escape(err.message);
    console.log(tag('testcase', attrs, false, tag('failure', attrs, false, cdata(err.stack))));
  } else if (test.pending) {
    console.log(tag('testcase', attrs, false, tag('skipped', {}, true)));
  } else {
    console.log(tag('testcase', attrs, true) );
  }
}

/**
 * HTML tag helper.
 */

function tag(name, attrs, close, content) {
  var end = close ? '/>' : '>'
    , pairs = []
    , tag;

  for (var key in attrs) {
    pairs.push(key + '="' + escape(attrs[key]) + '"');
  }

  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;
  if (content) tag += content + '</' + name + end;
  return tag;
}

/**
 * Return cdata escaped CDATA `str`.
 */

function cdata(str) {
  return '<![CDATA[' + escape(str) + ']]>';
}

}); // module: reporters/xunit.js

require.register("runnable.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:runnable')
  , milliseconds = require('./ms');

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Object#toString().
 */

var toString = Object.prototype.toString;

/**
 * Expose `Runnable`.
 */

module.exports = Runnable;

/**
 * Initialize a new `Runnable` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Runnable(title, fn) {
  this.title = title;
  this.fn = fn;
  this.async = fn && fn.length;
  this.sync = ! this.async;
  this._timeout = 2000;
  this._slow = 75;
  this.timedOut = false;
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Runnable.prototype = new F;
Runnable.prototype.constructor = Runnable;


/**
 * Set & get timeout `ms`.
 *
 * @param {Number|String} ms
 * @return {Runnable|Number} ms or self
 * @api private
 */

Runnable.prototype.timeout = function(ms){
  if (0 == arguments.length) return this._timeout;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._timeout = ms;
  if (this.timer) this.resetTimeout();
  return this;
};

/**
 * Set & get slow `ms`.
 *
 * @param {Number|String} ms
 * @return {Runnable|Number} ms or self
 * @api private
 */

Runnable.prototype.slow = function(ms){
  if (0 === arguments.length) return this._slow;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._slow = ms;
  return this;
};

/**
 * Return the full title generated by recursively
 * concatenating the parent's full title.
 *
 * @return {String}
 * @api public
 */

Runnable.prototype.fullTitle = function(){
  return this.parent.fullTitle() + ' ' + this.title;
};

/**
 * Clear the timeout.
 *
 * @api private
 */

Runnable.prototype.clearTimeout = function(){
  clearTimeout(this.timer);
};

/**
 * Inspect the runnable void of private properties.
 *
 * @return {String}
 * @api private
 */

Runnable.prototype.inspect = function(){
  return JSON.stringify(this, function(key, val){
    if ('_' == key[0]) return;
    if ('parent' == key) return '#<Suite>';
    if ('ctx' == key) return '#<Context>';
    return val;
  }, 2);
};

/**
 * Reset the timeout.
 *
 * @api private
 */

Runnable.prototype.resetTimeout = function(){
  var self = this
    , ms = this.timeout();

  this.clearTimeout();
  if (ms) {
    this.timer = setTimeout(function(){
      self.callback(new Error('timeout of ' + ms + 'ms exceeded'));
      self.timedOut = true;
    }, ms);
  }
};

/**
 * Run the test and invoke `fn(err)`.
 *
 * @param {Function} fn
 * @api private
 */

Runnable.prototype.run = function(fn){
  var self = this
    , ms = this.timeout()
    , start = new Date
    , ctx = this.ctx
    , finished
    , emitted;

  if (ctx) ctx.runnable(this);

  // timeout
  if (this.async) {
    if (ms) {
      this.timer = setTimeout(function(){
        done(new Error('timeout of ' + ms + 'ms exceeded'));
        self.timedOut = true;
      }, ms);
    }
  }

  // called multiple times
  function multiple(err) {
    if (emitted) return;
    emitted = true;
    self.emit('error', err || new Error('done() called multiple times'));
  }

  // finished
  function done(err) {
    if (self.timedOut) return;
    if (finished) return multiple(err);
    self.clearTimeout();
    self.duration = new Date - start;
    finished = true;
    fn(err);
  }

  // for .resetTimeout()
  this.callback = done;

  // async
  if (this.async) {
    try {
      this.fn.call(ctx, function(err){
        if (err instanceof Error || toString.call(err) === "[object Error]") return done(err);
        if (null != err) return done(new Error('done() invoked with non-Error: ' + err));
        done();
      });
    } catch (err) {
      done(err);
    }
    return;
  }

  if (this.asyncOnly) {
    return done(new Error('--async-only option in use without declaring `done()`'));
  }

  // sync
  try {
    if (!this.pending) this.fn.call(ctx);
    this.duration = new Date - start;
    fn();
  } catch (err) {
    fn(err);
  }
};

}); // module: runnable.js

require.register("runner.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:runner')
  , Test = require('./test')
  , utils = require('./utils')
  , filter = utils.filter
  , keys = utils.keys
  , noop = function(){}
  , immediately = global.setImmediate || process.nextTick;

/**
 * Non-enumerable globals.
 */

var globals = [
  'setTimeout',
  'clearTimeout',
  'setInterval',
  'clearInterval',
  'XMLHttpRequest',
  'Date'
];

/**
 * Expose `Runner`.
 */

module.exports = Runner;

/**
 * Initialize a `Runner` for the given `suite`.
 *
 * Events:
 *
 *   - `start`  execution started
 *   - `end`  execution complete
 *   - `suite`  (suite) test suite execution started
 *   - `suite end`  (suite) all tests (and sub-suites) have finished
 *   - `test`  (test) test execution started
 *   - `test end`  (test) test completed
 *   - `hook`  (hook) hook execution started
 *   - `hook end`  (hook) hook complete
 *   - `pass`  (test) test passed
 *   - `fail`  (test, err) test failed
 *
 * @api public
 */

function Runner(suite) {
  var self = this;
  this._globals = [];
  this.suite = suite;
  this.total = suite.total();
  this.failures = 0;
  this.on('test end', function(test){ self.checkGlobals(test); });
  this.on('hook end', function(hook){ self.checkGlobals(hook); });
  this.grep(/.*/);
  this.globals(this.globalProps().concat(['errno']));
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Runner.prototype = new F;
Runner.prototype.constructor = Runner;


/**
 * Run tests with full titles matching `re`. Updates runner.total
 * with number of tests matched.
 *
 * @param {RegExp} re
 * @param {Boolean} invert
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.grep = function(re, invert){
  debug('grep %s', re);
  this._grep = re;
  this._invert = invert;
  this.total = this.grepTotal(this.suite);
  return this;
};

/**
 * Returns the number of tests matching the grep search for the
 * given suite.
 *
 * @param {Suite} suite
 * @return {Number}
 * @api public
 */

Runner.prototype.grepTotal = function(suite) {
  var self = this;
  var total = 0;

  suite.eachTest(function(test){
    var match = self._grep.test(test.fullTitle());
    if (self._invert) match = !match;
    if (match) total++;
  });

  return total;
};

/**
 * Return a list of global properties.
 *
 * @return {Array}
 * @api private
 */

Runner.prototype.globalProps = function() {
  var props = utils.keys(global);

  // non-enumerables
  for (var i = 0; i < globals.length; ++i) {
    if (~utils.indexOf(props, globals[i])) continue;
    props.push(globals[i]);
  }

  return props;
};

/**
 * Allow the given `arr` of globals.
 *
 * @param {Array} arr
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.globals = function(arr){
  if (0 == arguments.length) return this._globals;
  debug('globals %j', arr);
  utils.forEach(arr, function(arr){
    this._globals.push(arr);
  }, this);
  return this;
};

/**
 * Check for global variable leaks.
 *
 * @api private
 */

Runner.prototype.checkGlobals = function(test){
  if (this.ignoreLeaks) return;
  var ok = this._globals;
  var globals = this.globalProps();
  var isNode = process.kill;
  var leaks;

  // check length - 2 ('errno' and 'location' globals)
  if (isNode && 1 == ok.length - globals.length) return
  else if (2 == ok.length - globals.length) return;

  leaks = filterLeaks(ok, globals);
  this._globals = this._globals.concat(leaks);

  if (leaks.length > 1) {
    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));
  } else if (leaks.length) {
    this.fail(test, new Error('global leak detected: ' + leaks[0]));
  }
};

/**
 * Fail the given `test`.
 *
 * @param {Test} test
 * @param {Error} err
 * @api private
 */

Runner.prototype.fail = function(test, err){
  ++this.failures;
  test.state = 'failed';

  if ('string' == typeof err) {
    err = new Error('the string "' + err + '" was thrown, throw an Error :)');
  }

  this.emit('fail', test, err);
};

/**
 * Fail the given `hook` with `err`.
 *
 * Hook failures (currently) hard-end due
 * to that fact that a failing hook will
 * surely cause subsequent tests to fail,
 * causing jumbled reporting.
 *
 * @param {Hook} hook
 * @param {Error} err
 * @api private
 */

Runner.prototype.failHook = function(hook, err){
  this.fail(hook, err);
  this.emit('end');
};

/**
 * Run hook `name` callbacks and then invoke `fn()`.
 *
 * @param {String} name
 * @param {Function} function
 * @api private
 */

Runner.prototype.hook = function(name, fn){
  var suite = this.suite
    , hooks = suite['_' + name]
    , self = this
    , timer;

  function next(i) {
    var hook = hooks[i];
    if (!hook) return fn();
    self.currentRunnable = hook;

    self.emit('hook', hook);

    hook.on('error', function(err){
      self.failHook(hook, err);
    });

    hook.run(function(err){
      hook.removeAllListeners('error');
      var testError = hook.error();
      if (testError) self.fail(self.test, testError);
      if (err) return self.failHook(hook, err);
      self.emit('hook end', hook);
      next(++i);
    });
  }

  immediately(function(){
    next(0);
  });
};

/**
 * Run hook `name` for the given array of `suites`
 * in order, and callback `fn(err)`.
 *
 * @param {String} name
 * @param {Array} suites
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hooks = function(name, suites, fn){
  var self = this
    , orig = this.suite;

  function next(suite) {
    self.suite = suite;

    if (!suite) {
      self.suite = orig;
      return fn();
    }

    self.hook(name, function(err){
      if (err) {
        self.suite = orig;
        return fn(err);
      }

      next(suites.pop());
    });
  }

  next(suites.pop());
};

/**
 * Run hooks from the top level down.
 *
 * @param {String} name
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hookUp = function(name, fn){
  var suites = [this.suite].concat(this.parents()).reverse();
  this.hooks(name, suites, fn);
};

/**
 * Run hooks from the bottom up.
 *
 * @param {String} name
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hookDown = function(name, fn){
  var suites = [this.suite].concat(this.parents());
  this.hooks(name, suites, fn);
};

/**
 * Return an array of parent Suites from
 * closest to furthest.
 *
 * @return {Array}
 * @api private
 */

Runner.prototype.parents = function(){
  var suite = this.suite
    , suites = [];
  while (suite = suite.parent) suites.push(suite);
  return suites;
};

/**
 * Run the current test and callback `fn(err)`.
 *
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runTest = function(fn){
  var test = this.test
    , self = this;

  if (this.asyncOnly) test.asyncOnly = true;

  try {
    test.on('error', function(err){
      self.fail(test, err);
    });
    test.run(fn);
  } catch (err) {
    fn(err);
  }
};

/**
 * Run tests in the given `suite` and invoke
 * the callback `fn()` when complete.
 *
 * @param {Suite} suite
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runTests = function(suite, fn){
  var self = this
    , tests = suite.tests.slice()
    , test;

  function next(err) {
    // if we bail after first err
    if (self.failures && suite._bail) return fn();

    // next test
    test = tests.shift();

    // all done
    if (!test) return fn();

    // grep
    var match = self._grep.test(test.fullTitle());
    if (self._invert) match = !match;
    if (!match) return next();

    // pending
    if (test.pending) {
      self.emit('pending', test);
      self.emit('test end', test);
      return next();
    }

    // execute test and hook(s)
    self.emit('test', self.test = test);
    self.hookDown('beforeEach', function(){
      self.currentRunnable = self.test;
      self.runTest(function(err){
        test = self.test;

        if (err) {
          self.fail(test, err);
          self.emit('test end', test);
          return self.hookUp('afterEach', next);
        }

        test.state = 'passed';
        self.emit('pass', test);
        self.emit('test end', test);
        self.hookUp('afterEach', next);
      });
    });
  }

  this.next = next;
  next();
};

/**
 * Run the given `suite` and invoke the
 * callback `fn()` when complete.
 *
 * @param {Suite} suite
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runSuite = function(suite, fn){
  var total = this.grepTotal(suite)
    , self = this
    , i = 0;

  debug('run suite %s', suite.fullTitle());

  if (!total) return fn();

  this.emit('suite', this.suite = suite);

  function next() {
    var curr = suite.suites[i++];
    if (!curr) return done();
    self.runSuite(curr, next);
  }

  function done() {
    self.suite = suite;
    self.hook('afterAll', function(){
      self.emit('suite end', suite);
      fn();
    });
  }

  this.hook('beforeAll', function(){
    self.runTests(suite, next);
  });
};

/**
 * Handle uncaught exceptions.
 *
 * @param {Error} err
 * @api private
 */

Runner.prototype.uncaught = function(err){
  debug('uncaught exception %s', err.message);
  var runnable = this.currentRunnable;
  if (!runnable || 'failed' == runnable.state) return;
  runnable.clearTimeout();
  err.uncaught = true;
  this.fail(runnable, err);

  // recover from test
  if ('test' == runnable.type) {
    this.emit('test end', runnable);
    this.hookUp('afterEach', this.next);
    return;
  }

  // bail on hooks
  this.emit('end');
};

/**
 * Run the root suite and invoke `fn(failures)`
 * on completion.
 *
 * @param {Function} fn
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.run = function(fn){
  var self = this
    , fn = fn || function(){};

  function uncaught(err){
    self.uncaught(err);
  }

  debug('start');

  // callback
  this.on('end', function(){
    debug('end');
    process.removeListener('uncaughtException', uncaught);
    fn(self.failures);
  });

  // run suites
  this.emit('start');
  this.runSuite(this.suite, function(){
    debug('finished running');
    self.emit('end');
  });

  // uncaught exception
  process.on('uncaughtException', uncaught);

  return this;
};

/**
 * Filter leaks with the given globals flagged as `ok`.
 *
 * @param {Array} ok
 * @param {Array} globals
 * @return {Array}
 * @api private
 */

function filterLeaks(ok, globals) {
  return filter(globals, function(key){
    var matched = filter(ok, function(ok){
      if (~ok.indexOf('*')) return 0 == key.indexOf(ok.split('*')[0]);
      // Opera and IE expose global variables for HTML element IDs (issue #243)
      if (/^mocha-/.test(key)) return true;
      return key == ok;
    });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
  });
}

}); // module: runner.js

require.register("suite.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:suite')
  , milliseconds = require('./ms')
  , utils = require('./utils')
  , Hook = require('./hook');

/**
 * Expose `Suite`.
 */

exports = module.exports = Suite;

/**
 * Create a new `Suite` with the given `title`
 * and parent `Suite`. When a suite with the
 * same title is already present, that suite
 * is returned to provide nicer reporter
 * and more flexible meta-testing.
 *
 * @param {Suite} parent
 * @param {String} title
 * @return {Suite}
 * @api public
 */

exports.create = function(parent, title){
  var suite = new Suite(title, parent.ctx);
  suite.parent = parent;
  if (parent.pending) suite.pending = true;
  title = suite.fullTitle();
  parent.addSuite(suite);
  return suite;
};

/**
 * Initialize a new `Suite` with the given
 * `title` and `ctx`.
 *
 * @param {String} title
 * @param {Context} ctx
 * @api private
 */

function Suite(title, ctx) {
  this.title = title;
  this.ctx = ctx;
  this.suites = [];
  this.tests = [];
  this.pending = false;
  this._beforeEach = [];
  this._beforeAll = [];
  this._afterEach = [];
  this._afterAll = [];
  this.root = !title;
  this._timeout = 2000;
  this._slow = 75;
  this._bail = false;
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Suite.prototype = new F;
Suite.prototype.constructor = Suite;


/**
 * Return a clone of this `Suite`.
 *
 * @return {Suite}
 * @api private
 */

Suite.prototype.clone = function(){
  var suite = new Suite(this.title);
  debug('clone');
  suite.ctx = this.ctx;
  suite.timeout(this.timeout());
  suite.slow(this.slow());
  suite.bail(this.bail());
  return suite;
};

/**
 * Set timeout `ms` or short-hand such as "2s".
 *
 * @param {Number|String} ms
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.timeout = function(ms){
  if (0 == arguments.length) return this._timeout;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._timeout = parseInt(ms, 10);
  return this;
};

/**
 * Set slow `ms` or short-hand such as "2s".
 *
 * @param {Number|String} ms
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.slow = function(ms){
  if (0 === arguments.length) return this._slow;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('slow %d', ms);
  this._slow = ms;
  return this;
};

/**
 * Sets whether to bail after first error.
 *
 * @parma {Boolean} bail
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.bail = function(bail){
  if (0 == arguments.length) return this._bail;
  debug('bail %s', bail);
  this._bail = bail;
  return this;
};

/**
 * Run `fn(test[, done])` before running tests.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.beforeAll = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"before all" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._beforeAll.push(hook);
  this.emit('beforeAll', hook);
  return this;
};

/**
 * Run `fn(test[, done])` after running tests.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.afterAll = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"after all" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._afterAll.push(hook);
  this.emit('afterAll', hook);
  return this;
};

/**
 * Run `fn(test[, done])` before each test case.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.beforeEach = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"before each" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._beforeEach.push(hook);
  this.emit('beforeEach', hook);
  return this;
};

/**
 * Run `fn(test[, done])` after each test case.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.afterEach = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"after each" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._afterEach.push(hook);
  this.emit('afterEach', hook);
  return this;
};

/**
 * Add a test `suite`.
 *
 * @param {Suite} suite
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.addSuite = function(suite){
  suite.parent = this;
  suite.timeout(this.timeout());
  suite.slow(this.slow());
  suite.bail(this.bail());
  this.suites.push(suite);
  this.emit('suite', suite);
  return this;
};

/**
 * Add a `test` to this suite.
 *
 * @param {Test} test
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.addTest = function(test){
  test.parent = this;
  test.timeout(this.timeout());
  test.slow(this.slow());
  test.ctx = this.ctx;
  this.tests.push(test);
  this.emit('test', test);
  return this;
};

/**
 * Return the full title generated by recursively
 * concatenating the parent's full title.
 *
 * @return {String}
 * @api public
 */

Suite.prototype.fullTitle = function(){
  if (this.parent) {
    var full = this.parent.fullTitle();
    if (full) return full + ' ' + this.title;
  }
  return this.title;
};

/**
 * Return the total number of tests.
 *
 * @return {Number}
 * @api public
 */

Suite.prototype.total = function(){
  return utils.reduce(this.suites, function(sum, suite){
    return sum + suite.total();
  }, 0) + this.tests.length;
};

/**
 * Iterates through each suite recursively to find
 * all tests. Applies a function in the format
 * `fn(test)`.
 *
 * @param {Function} fn
 * @return {Suite}
 * @api private
 */

Suite.prototype.eachTest = function(fn){
  utils.forEach(this.tests, fn);
  utils.forEach(this.suites, function(suite){
    suite.eachTest(fn);
  });
  return this;
};

}); // module: suite.js

require.register("test.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Runnable = require('./runnable');

/**
 * Expose `Test`.
 */

module.exports = Test;

/**
 * Initialize a new `Test` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Test(title, fn) {
  Runnable.call(this, title, fn);
  this.pending = !fn;
  this.type = 'test';
}

/**
 * Inherit from `Runnable.prototype`.
 */

function F(){};
F.prototype = Runnable.prototype;
Test.prototype = new F;
Test.prototype.constructor = Test;


}); // module: test.js

require.register("utils.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var fs = require('browser/fs')
  , path = require('browser/path')
  , join = path.join
  , debug = require('browser/debug')('mocha:watch');

/**
 * Ignored directories.
 */

var ignore = ['node_modules', '.git'];

/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 * @api private
 */

exports.escape = function(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Array#forEach (<=IE8)
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {Object} scope
 * @api private
 */

exports.forEach = function(arr, fn, scope){
  for (var i = 0, l = arr.length; i < l; i++)
    fn.call(scope, arr[i], i);
};

/**
 * Array#indexOf (<=IE8)
 *
 * @parma {Array} arr
 * @param {Object} obj to find index of
 * @param {Number} start
 * @api private
 */

exports.indexOf = function(arr, obj, start){
  for (var i = start || 0, l = arr.length; i < l; i++) {
    if (arr[i] === obj)
      return i;
  }
  return -1;
};

/**
 * Array#reduce (<=IE8)
 * 
 * @param {Array} array
 * @param {Function} fn
 * @param {Object} initial value
 * @api private
 */

exports.reduce = function(arr, fn, val){
  var rval = val;

  for (var i = 0, l = arr.length; i < l; i++) {
    rval = fn(rval, arr[i], i, arr);
  }

  return rval;
};

/**
 * Array#filter (<=IE8)
 *
 * @param {Array} array
 * @param {Function} fn
 * @api private
 */

exports.filter = function(arr, fn){
  var ret = [];

  for (var i = 0, l = arr.length; i < l; i++) {
    var val = arr[i];
    if (fn(val, i, arr)) ret.push(val);
  }

  return ret;
};

/**
 * Object.keys (<=IE8)
 *
 * @param {Object} obj
 * @return {Array} keys
 * @api private
 */

exports.keys = Object.keys || function(obj) {
  var keys = []
    , has = Object.prototype.hasOwnProperty // for `window` on <=IE8

  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }

  return keys;
};

/**
 * Watch the given `files` for changes
 * and invoke `fn(file)` on modification.
 *
 * @param {Array} files
 * @param {Function} fn
 * @api private
 */

exports.watch = function(files, fn){
  var options = { interval: 100 };
  files.forEach(function(file){
    debug('file %s', file);
    fs.watchFile(file, options, function(curr, prev){
      if (prev.mtime < curr.mtime) fn(file);
    });
  });
};

/**
 * Ignored files.
 */

function ignored(path){
  return !~ignore.indexOf(path);
}

/**
 * Lookup files in the given `dir`.
 *
 * @return {Array}
 * @api private
 */

exports.files = function(dir, ret){
  ret = ret || [];

  fs.readdirSync(dir)
  .filter(ignored)
  .forEach(function(path){
    path = join(dir, path);
    if (fs.statSync(path).isDirectory()) {
      exports.files(path, ret);
    } else if (path.match(/\.(js|coffee)$/)) {
      ret.push(path);
    }
  });

  return ret;
};

/**
 * Compute a slug from the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.slug = function(str){
  return str
    .toLowerCase()
    .replace(/ +/g, '-')
    .replace(/[^-\w]/g, '');
};

/**
 * Strip the function definition from `str`,
 * and re-indent for pre whitespace.
 */

exports.clean = function(str) {
  str = str
    .replace(/^function *\(.*\) *{/, '')
    .replace(/\s+\}$/, '');

  var spaces = str.match(/^\n?( *)/)[1].length
    , re = new RegExp('^ {' + spaces + '}', 'gm');

  str = str.replace(re, '');

  return exports.trim(str);
};

/**
 * Escape regular expression characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.escapeRegexp = function(str){
  return str.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

/**
 * Trim the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.trim = function(str){
  return str.replace(/^\s+|\s+$/g, '');
};

/**
 * Parse the given `qs`.
 *
 * @param {String} qs
 * @return {Object}
 * @api private
 */

exports.parseQuery = function(qs){
  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair){
    var i = pair.indexOf('=')
      , key = pair.slice(0, i)
      , val = pair.slice(++i);

    obj[key] = decodeURIComponent(val);
    return obj;
  }, {});
};

/**
 * Highlight the given string of `js`.
 *
 * @param {String} js
 * @return {String}
 * @api private
 */

function highlight(js) {
  return js
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
    .replace(/('.*?')/gm, '<span class="string">$1</span>')
    .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
    .replace(/(\d+)/gm, '<span class="number">$1</span>')
    .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
    .replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>')
}

/**
 * Highlight the contents of tag `name`.
 *
 * @param {String} name
 * @api private
 */

exports.highlightTags = function(name) {
  var code = document.getElementsByTagName(name);
  for (var i = 0, len = code.length; i < len; ++i) {
    code[i].innerHTML = highlight(code[i].innerHTML);
  }
};

}); // module: utils.js
/**
 * Node shims.
 *
 * These are meant only to allow
 * mocha.js to run untouched, not
 * to allow running node code in
 * the browser.
 */

process = {};
process.exit = function(status){};
process.stdout = {};
global = window;

/**
 * next tick implementation.
 */

process.nextTick = (function(){
  // postMessage behaves badly on IE8
  if (window.ActiveXObject || !window.postMessage) {
    return function(fn){ fn() };
  }

  // based on setZeroTimeout by David Baron
  // - http://dbaron.org/log/20100309-faster-timeouts
  var timeouts = []
    , name = 'mocha-zero-timeout'

  window.addEventListener('message', function(e){
    if (e.source == window && e.data == name) {
      if (e.stopPropagation) e.stopPropagation();
      if (timeouts.length) timeouts.shift()();
    }
  }, true);

  return function(fn){
    timeouts.push(fn);
    window.postMessage(name, '*');
  }
})();

/**
 * Remove uncaughtException listener.
 */

process.removeListener = function(e){
  if ('uncaughtException' == e) {
    window.onerror = null;
  }
};

/**
 * Implements uncaughtException listener.
 */

process.on = function(e, fn){
  if ('uncaughtException' == e) {
    window.onerror = function(err, url, line){
      fn(new Error(err + ' (' + url + ':' + line + ')'));
    };
  }
};

// boot
;(function(){

  /**
   * Expose mocha.
   */

  var Mocha = window.Mocha = require('mocha'),
      mocha = window.mocha = new Mocha({ reporter: 'html' });

  /**
   * Override ui to ensure that the ui functions are initialized.
   * Normally this would happen in Mocha.prototype.loadFiles.
   */

  mocha.ui = function(ui){
    Mocha.prototype.ui.call(this, ui);
    this.suite.emit('pre-require', window, null, this);
    return this;
  };

  /**
   * Setup mocha with the given setting options.
   */

  mocha.setup = function(opts){
    if ('string' == typeof opts) opts = { ui: opts };
    for (var opt in opts) this[opt](opts[opt]);
    return this;
  };

  /**
   * Run mocha, returning the Runner.
   */

  mocha.run = function(fn){
    var options = mocha.options;
    mocha.globals('location');

    var query = Mocha.utils.parseQuery(window.location.search || '');
    if (query.grep) mocha.grep(query.grep);
    if (query.invert) mocha.invert();

    return Mocha.prototype.run.call(mocha, function(){
      Mocha.utils.highlightTags('code');
      if (fn) fn();
    });
  };
})();
})();
/*!
 RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
var requirejs, require, define;
(function (Z) {
    function H(b) {
        return"[object Function]" === L.call(b)
    }

    function I(b) {
        return"[object Array]" === L.call(b)
    }

    function y(b, c) {
        if (b) {
            var d;
            for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1);
        }
    }

    function M(b, c) {
        if (b) {
            var d;
            for (d = b.length - 1; -1 < d && (!b[d] || !c(b[d], d, b)); d -= 1);
        }
    }

    function s(b, c) {
        return ga.call(b, c)
    }

    function l(b, c) {
        return s(b, c) && b[c]
    }

    function F(b, c) {
        for (var d in b)if (s(b, d) && c(b[d], d))break
    }

    function Q(b, c, d, h) {
        c && F(c, function (c, j) {
            if (d || !s(b, j))h && "string" !== typeof c ? (b[j] || (b[j] = {}), Q(b[j],
                c, d, h)) : b[j] = c
        });
        return b
    }

    function u(b, c) {
        return function () {
            return c.apply(b, arguments)
        }
    }

    function aa(b) {
        throw b;
    }

    function ba(b) {
        if (!b)return b;
        var c = Z;
        y(b.split("."), function (b) {
            c = c[b]
        });
        return c
    }

    function A(b, c, d, h) {
        c = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + b);
        c.requireType = b;
        c.requireModules = h;
        d && (c.originalError = d);
        return c
    }

    function ha(b) {
        function c(a, f, b) {
            var e, m, c, g, d, h, j, i = f && f.split("/");
            e = i;
            var n = k.map, p = n && n["*"];
            if (a && "." === a.charAt(0))if (f) {
                e = l(k.pkgs, f) ? i = [f] : i.slice(0, i.length -
                    1);
                f = a = e.concat(a.split("/"));
                for (e = 0; f[e]; e += 1)if (m = f[e], "." === m)f.splice(e, 1), e -= 1; else if (".." === m)if (1 === e && (".." === f[2] || ".." === f[0]))break; else 0 < e && (f.splice(e - 1, 2), e -= 2);
                e = l(k.pkgs, f = a[0]);
                a = a.join("/");
                e && a === f + "/" + e.main && (a = f)
            } else 0 === a.indexOf("./") && (a = a.substring(2));
            if (b && n && (i || p)) {
                f = a.split("/");
                for (e = f.length; 0 < e; e -= 1) {
                    c = f.slice(0, e).join("/");
                    if (i)for (m = i.length; 0 < m; m -= 1)if (b = l(n, i.slice(0, m).join("/")))if (b = l(b, c)) {
                        g = b;
                        d = e;
                        break
                    }
                    if (g)break;
                    !h && (p && l(p, c)) && (h = l(p, c), j = e)
                }
                !g &&
                    h && (g = h, d = j);
                g && (f.splice(0, d, g), a = f.join("/"))
            }
            return a
        }

        function d(a) {
            z && y(document.getElementsByTagName("script"), function (f) {
                if (f.getAttribute("data-requiremodule") === a && f.getAttribute("data-requirecontext") === i.contextName)return f.parentNode.removeChild(f), !0
            })
        }

        function h(a) {
            var f = l(k.paths, a);
            if (f && I(f) && 1 < f.length)return d(a), f.shift(), i.require.undef(a), i.require([a]), !0
        }

        function $(a) {
            var f, b = a ? a.indexOf("!") : -1;
            -1 < b && (f = a.substring(0, b), a = a.substring(b + 1, a.length));
            return[f, a]
        }

        function n(a, f, b, e) {
            var m, B, g = null, d = f ? f.name : null, h = a, j = !0, k = "";
            a || (j = !1, a = "_@r" + (L += 1));
            a = $(a);
            g = a[0];
            a = a[1];
            g && (g = c(g, d, e), B = l(r, g));
            a && (g ? k = B && B.normalize ? B.normalize(a, function (a) {
                return c(a, d, e)
            }) : c(a, d, e) : (k = c(a, d, e), a = $(k), g = a[0], k = a[1], b = !0, m = i.nameToUrl(k)));
            b = g && !B && !b ? "_unnormalized" + (M += 1) : "";
            return{prefix: g, name: k, parentMap: f, unnormalized: !!b, url: m, originalName: h, isDefine: j, id: (g ? g + "!" + k : k) + b}
        }

        function q(a) {
            var f = a.id, b = l(p, f);
            b || (b = p[f] = new i.Module(a));
            return b
        }

        function t(a, f, b) {
            var e = a.id, m = l(p,
                e);
            if (s(r, e) && (!m || m.defineEmitComplete))"defined" === f && b(r[e]); else if (m = q(a), m.error && "error" === f)b(m.error); else m.on(f, b)
        }

        function v(a, f) {
            var b = a.requireModules, e = !1;
            if (f)f(a); else if (y(b, function (f) {
                if (f = l(p, f))f.error = a, f.events.error && (e = !0, f.emit("error", a))
            }), !e)j.onError(a)
        }

        function w() {
            R.length && (ia.apply(G, [G.length - 1, 0].concat(R)), R = [])
        }

        function x(a) {
            delete p[a];
            delete T[a]
        }

        function E(a, f, b) {
            var e = a.map.id;
            a.error ? a.emit("error", a.error) : (f[e] = !0, y(a.depMaps, function (e, c) {
                var g = e.id,
                    d = l(p, g);
                d && (!a.depMatched[c] && !b[g]) && (l(f, g) ? (a.defineDep(c, r[g]), a.check()) : E(d, f, b))
            }), b[e] = !0)
        }

        function C() {
            var a, f, b, e, m = (b = 1E3 * k.waitSeconds) && i.startTime + b < (new Date).getTime(), c = [], g = [], j = !1, l = !0;
            if (!U) {
                U = !0;
                F(T, function (b) {
                    a = b.map;
                    f = a.id;
                    if (b.enabled && (a.isDefine || g.push(b), !b.error))if (!b.inited && m)h(f) ? j = e = !0 : (c.push(f), d(f)); else if (!b.inited && (b.fetched && a.isDefine) && (j = !0, !a.prefix))return l = !1
                });
                if (m && c.length)return b = A("timeout", "Load timeout for modules: " + c, null, c), b.contextName =
                    i.contextName, v(b);
                l && y(g, function (a) {
                    E(a, {}, {})
                });
                if ((!m || e) && j)if ((z || da) && !V)V = setTimeout(function () {
                    V = 0;
                    C()
                }, 50);
                U = !1
            }
        }

        function D(a) {
            s(r, a[0]) || q(n(a[0], null, !0)).init(a[1], a[2])
        }

        function J(a) {
            var a = a.currentTarget || a.srcElement, b = i.onScriptLoad;
            a.detachEvent && !W ? a.detachEvent("onreadystatechange", b) : a.removeEventListener("load", b, !1);
            b = i.onScriptError;
            (!a.detachEvent || W) && a.removeEventListener("error", b, !1);
            return{node: a, id: a && a.getAttribute("data-requiremodule")}
        }

        function K() {
            var a;
            for (w(); G.length;) {
                a =
                    G.shift();
                if (null === a[0])return v(A("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                D(a)
            }
        }

        var U, X, i, N, V, k = {waitSeconds: 7, baseUrl: "./", paths: {}, pkgs: {}, shim: {}, config: {}}, p = {}, T = {}, Y = {}, G = [], r = {}, S = {}, L = 1, M = 1;
        N = {require: function (a) {
            return a.require ? a.require : a.require = i.makeRequire(a.map)
        }, exports: function (a) {
            a.usingExports = !0;
            if (a.map.isDefine)return a.exports ? a.exports : a.exports = r[a.map.id] = {}
        }, module: function (a) {
            return a.module ? a.module : a.module = {id: a.map.id, uri: a.map.url, config: function () {
                var b =
                    l(k.pkgs, a.map.id);
                return(b ? l(k.config, a.map.id + "/" + b.main) : l(k.config, a.map.id)) || {}
            }, exports: r[a.map.id]}
        }};
        X = function (a) {
            this.events = l(Y, a.id) || {};
            this.map = a;
            this.shim = l(k.shim, a.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        };
        X.prototype = {init: function (a, b, c, e) {
            e = e || {};
            if (!this.inited) {
                this.factory = b;
                if (c)this.on("error", c); else this.events.error && (c = u(this, function (a) {
                    this.emit("error", a)
                }));
                this.depMaps = a && a.slice(0);
                this.errback = c;
                this.inited = !0;
                this.ignore = e.ignore;
                e.enabled || this.enabled ? this.enable() : this.check()
            }
        }, defineDep: function (a, b) {
            this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
        }, fetch: function () {
            if (!this.fetched) {
                this.fetched = !0;
                i.startTime = (new Date).getTime();
                var a = this.map;
                if (this.shim)i.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], u(this, function () {
                    return a.prefix ? this.callPlugin() : this.load()
                })); else return a.prefix ? this.callPlugin() : this.load()
            }
        }, load: function () {
            var a =
                this.map.url;
            S[a] || (S[a] = !0, i.load(this.map.id, a))
        }, check: function () {
            if (this.enabled && !this.enabling) {
                var a, b, c = this.map.id;
                b = this.depExports;
                var e = this.exports, m = this.factory;
                if (this.inited)if (this.error)this.emit("error", this.error); else {
                    if (!this.defining) {
                        this.defining = !0;
                        if (1 > this.depCount && !this.defined) {
                            if (H(m)) {
                                if (this.events.error && this.map.isDefine || j.onError !== aa)try {
                                    e = i.execCb(c, m, b, e)
                                } catch (d) {
                                    a = d
                                } else e = i.execCb(c, m, b, e);
                                this.map.isDefine && ((b = this.module) && void 0 !== b.exports && b.exports !==
                                    this.exports ? e = b.exports : void 0 === e && this.usingExports && (e = this.exports));
                                if (a)return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", v(this.error = a)
                            } else e = m;
                            this.exports = e;
                            if (this.map.isDefine && !this.ignore && (r[c] = e, j.onResourceLoad))j.onResourceLoad(i, this.map, this.depMaps);
                            x(c);
                            this.defined = !0
                        }
                        this.defining = !1;
                        this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                    }
                } else this.fetch()
            }
        }, callPlugin: function () {
            var a = this.map, b = a.id, d = n(a.prefix);
            this.depMaps.push(d);
            t(d, "defined", u(this, function (e) {
                var m, d;
                d = this.map.name;
                var g = this.map.parentMap ? this.map.parentMap.name : null, h = i.makeRequire(a.parentMap, {enableBuildCallback: !0});
                if (this.map.unnormalized) {
                    if (e.normalize && (d = e.normalize(d, function (a) {
                        return c(a, g, !0)
                    }) || ""), e = n(a.prefix + "!" + d, this.map.parentMap), t(e, "defined", u(this, function (a) {
                        this.init([], function () {
                            return a
                        }, null, {enabled: !0, ignore: !0})
                    })),
                        d = l(p, e.id)) {
                        this.depMaps.push(e);
                        if (this.events.error)d.on("error", u(this, function (a) {
                            this.emit("error", a)
                        }));
                        d.enable()
                    }
                } else m = u(this, function (a) {
                    this.init([], function () {
                        return a
                    }, null, {enabled: !0})
                }), m.error = u(this, function (a) {
                    this.inited = !0;
                    this.error = a;
                    a.requireModules = [b];
                    F(p, function (a) {
                        0 === a.map.id.indexOf(b + "_unnormalized") && x(a.map.id)
                    });
                    v(a)
                }), m.fromText = u(this, function (e, c) {
                    var d = a.name, g = n(d), B = O;
                    c && (e = c);
                    B && (O = !1);
                    q(g);
                    s(k.config, b) && (k.config[d] = k.config[b]);
                    try {
                        j.exec(e)
                    } catch (ca) {
                        return v(A("fromtexteval",
                            "fromText eval for " + b + " failed: " + ca, ca, [b]))
                    }
                    B && (O = !0);
                    this.depMaps.push(g);
                    i.completeLoad(d);
                    h([d], m)
                }), e.load(a.name, h, m, k)
            }));
            i.enable(d, this);
            this.pluginMaps[d.id] = d
        }, enable: function () {
            T[this.map.id] = this;
            this.enabling = this.enabled = !0;
            y(this.depMaps, u(this, function (a, b) {
                var c, e;
                if ("string" === typeof a) {
                    a = n(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap);
                    this.depMaps[b] = a;
                    if (c = l(N, a.id)) {
                        this.depExports[b] = c(this);
                        return
                    }
                    this.depCount += 1;
                    t(a, "defined", u(this, function (a) {
                        this.defineDep(b,
                            a);
                        this.check()
                    }));
                    this.errback && t(a, "error", u(this, this.errback))
                }
                c = a.id;
                e = p[c];
                !s(N, c) && (e && !e.enabled) && i.enable(a, this)
            }));
            F(this.pluginMaps, u(this, function (a) {
                var b = l(p, a.id);
                b && !b.enabled && i.enable(a, this)
            }));
            this.enabling = !1;
            this.check()
        }, on: function (a, b) {
            var c = this.events[a];
            c || (c = this.events[a] = []);
            c.push(b)
        }, emit: function (a, b) {
            y(this.events[a], function (a) {
                a(b)
            });
            "error" === a && delete this.events[a]
        }};
        i = {config: k, contextName: b, registry: p, defined: r, urlFetched: S, defQueue: G, Module: X, makeModuleMap: n,
            nextTick: j.nextTick, onError: v, configure: function (a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = k.pkgs, c = k.shim, e = {paths: !0, config: !0, map: !0};
                F(a, function (a, b) {
                    e[b] ? "map" === b ? (k.map || (k.map = {}), Q(k[b], a, !0, !0)) : Q(k[b], a, !0) : k[b] = a
                });
                a.shim && (F(a.shim, function (a, b) {
                    I(a) && (a = {deps: a});
                    if ((a.exports || a.init) && !a.exportsFn)a.exportsFn = i.makeShimExports(a);
                    c[b] = a
                }), k.shim = c);
                a.packages && (y(a.packages, function (a) {
                    a = "string" === typeof a ? {name: a} : a;
                    b[a.name] = {name: a.name,
                        location: a.location || a.name, main: (a.main || "main").replace(ja, "").replace(ea, "")}
                }), k.pkgs = b);
                F(p, function (a, b) {
                    !a.inited && !a.map.unnormalized && (a.map = n(b))
                });
                if (a.deps || a.callback)i.require(a.deps || [], a.callback)
            }, makeShimExports: function (a) {
                return function () {
                    var b;
                    a.init && (b = a.init.apply(Z, arguments));
                    return b || a.exports && ba(a.exports)
                }
            }, makeRequire: function (a, f) {
                function d(e, c, h) {
                    var g, k;
                    f.enableBuildCallback && (c && H(c)) && (c.__requireJsBuild = !0);
                    if ("string" === typeof e) {
                        if (H(c))return v(A("requireargs",
                            "Invalid require call"), h);
                        if (a && s(N, e))return N[e](p[a.id]);
                        if (j.get)return j.get(i, e, a, d);
                        g = n(e, a, !1, !0);
                        g = g.id;
                        return!s(r, g) ? v(A("notloaded", 'Module name "' + g + '" has not been loaded yet for context: ' + b + (a ? "" : ". Use require([])"))) : r[g]
                    }
                    K();
                    i.nextTick(function () {
                        K();
                        k = q(n(null, a));
                        k.skipMap = f.skipMap;
                        k.init(e, c, h, {enabled: !0});
                        C()
                    });
                    return d
                }

                f = f || {};
                Q(d, {isBrowser: z, toUrl: function (b) {
                    var d, f = b.lastIndexOf("."), g = b.split("/")[0];
                    if (-1 !== f && (!("." === g || ".." === g) || 1 < f))d = b.substring(f, b.length), b =
                        b.substring(0, f);
                    return i.nameToUrl(c(b, a && a.id, !0), d, !0)
                }, defined: function (b) {
                    return s(r, n(b, a, !1, !0).id)
                }, specified: function (b) {
                    b = n(b, a, !1, !0).id;
                    return s(r, b) || s(p, b)
                }});
                a || (d.undef = function (b) {
                    w();
                    var c = n(b, a, !0), f = l(p, b);
                    delete r[b];
                    delete S[c.url];
                    delete Y[b];
                    f && (f.events.defined && (Y[b] = f.events), x(b))
                });
                return d
            }, enable: function (a) {
                l(p, a.id) && q(a).enable()
            }, completeLoad: function (a) {
                var b, c, e = l(k.shim, a) || {}, d = e.exports;
                for (w(); G.length;) {
                    c = G.shift();
                    if (null === c[0]) {
                        c[0] = a;
                        if (b)break;
                        b = !0
                    } else c[0] ===
                        a && (b = !0);
                    D(c)
                }
                c = l(p, a);
                if (!b && !s(r, a) && c && !c.inited) {
                    if (k.enforceDefine && (!d || !ba(d)))return h(a) ? void 0 : v(A("nodefine", "No define call for " + a, null, [a]));
                    D([a, e.deps || [], e.exportsFn])
                }
                C()
            }, nameToUrl: function (a, b, c) {
                var e, d, h, g, i, n;
                if (j.jsExtRegExp.test(a))g = a + (b || ""); else {
                    e = k.paths;
                    d = k.pkgs;
                    g = a.split("/");
                    for (i = g.length; 0 < i; i -= 1)if (n = g.slice(0, i).join("/"), h = l(d, n), n = l(e, n)) {
                        I(n) && (n = n[0]);
                        g.splice(0, i, n);
                        break
                    } else if (h) {
                        a = a === h.name ? h.location + "/" + h.main : h.location;
                        g.splice(0, i, a);
                        break
                    }
                    g = g.join("/");
                    g += b || (/\?/.test(g) || c ? "" : ".js");
                    g = ("/" === g.charAt(0) || g.match(/^[\w\+\.\-]+:/) ? "" : k.baseUrl) + g
                }
                return k.urlArgs ? g + ((-1 === g.indexOf("?") ? "?" : "&") + k.urlArgs) : g
            }, load: function (a, b) {
                j.load(i, a, b)
            }, execCb: function (a, b, c, e) {
                return b.apply(e, c)
            }, onScriptLoad: function (a) {
                if ("load" === a.type || ka.test((a.currentTarget || a.srcElement).readyState))P = null, a = J(a), i.completeLoad(a.id)
            }, onScriptError: function (a) {
                var b = J(a);
                if (!h(b.id))return v(A("scripterror", "Script error for: " + b.id, a, [b.id]))
            }};
        i.require = i.makeRequire();
        return i
    }

    var j, w, x, C, J, D, P, K, q, fa, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, ea = /\.js$/, ja = /^\.\//;
    w = Object.prototype;
    var L = w.toString, ga = w.hasOwnProperty, ia = Array.prototype.splice, z = !!("undefined" !== typeof window && navigator && window.document), da = !z && "undefined" !== typeof importScripts, ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, W = "undefined" !== typeof opera && "[object Opera]" === opera.toString(), E = {}, t = {}, R = [], O =
        !1;
    if ("undefined" === typeof define) {
        if ("undefined" !== typeof requirejs) {
            if (H(requirejs))return;
            t = requirejs;
            requirejs = void 0
        }
        "undefined" !== typeof require && !H(require) && (t = require, require = void 0);
        j = requirejs = function (b, c, d, h) {
            var q, n = "_";
            !I(b) && "string" !== typeof b && (q = b, I(c) ? (b = c, c = d, d = h) : b = []);
            q && q.context && (n = q.context);
            (h = l(E, n)) || (h = E[n] = j.s.newContext(n));
            q && h.configure(q);
            return h.require(b, c, d)
        };
        j.config = function (b) {
            return j(b)
        };
        j.nextTick = "undefined" !== typeof setTimeout ? function (b) {
            setTimeout(b,
                4)
        } : function (b) {
            b()
        };
        require || (require = j);
        j.version = "2.1.8";
        j.jsExtRegExp = /^\/|:|\?|\.js$/;
        j.isBrowser = z;
        w = j.s = {contexts: E, newContext: ha};
        j({});
        y(["toUrl", "undef", "defined", "specified"], function (b) {
            j[b] = function () {
                var c = E._;
                return c.require[b].apply(c, arguments)
            }
        });
        if (z && (x = w.head = document.getElementsByTagName("head")[0], C = document.getElementsByTagName("base")[0]))x = w.head = C.parentNode;
        j.onError = aa;
        j.createNode = function (b) {
            var c = b.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") :
                document.createElement("script");
            c.type = b.scriptType || "text/javascript";
            c.charset = "utf-8";
            c.async = !0;
            return c
        };
        j.load = function (b, c, d) {
            var h = b && b.config || {};
            if (z)return h = j.createNode(h, c, d), h.setAttribute("data-requirecontext", b.contextName), h.setAttribute("data-requiremodule", c), h.attachEvent && !(h.attachEvent.toString && 0 > h.attachEvent.toString().indexOf("[native code")) && !W ? (O = !0, h.attachEvent("onreadystatechange", b.onScriptLoad)) : (h.addEventListener("load", b.onScriptLoad, !1), h.addEventListener("error",
                b.onScriptError, !1)), h.src = d, K = h, C ? x.insertBefore(h, C) : x.appendChild(h), K = null, h;
            if (da)try {
                importScripts(d), b.completeLoad(c)
            } catch (l) {
                b.onError(A("importscripts", "importScripts failed for " + c + " at " + d, l, [c]))
            }
        };
        z && M(document.getElementsByTagName("script"), function (b) {
            x || (x = b.parentNode);
            if (J = b.getAttribute("data-main"))return q = J, t.baseUrl || (D = q.split("/"), q = D.pop(), fa = D.length ? D.join("/") + "/" : "./", t.baseUrl = fa), q = q.replace(ea, ""), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q) : [q], !0
        });
        define = function (b, c, d) {
            var h, j;
            "string" !== typeof b && (d = c, c = b, b = null);
            I(c) || (d = c, c = null);
            !c && H(d) && (c = [], d.length && (d.toString().replace(la, "").replace(ma, function (b, d) {
                c.push(d)
            }), c = (1 === d.length ? ["require"] : ["require", "exports", "module"]).concat(c)));
            if (O) {
                if (!(h = K))P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function (b) {
                    if ("interactive" === b.readyState)return P = b
                }), h = P;
                h && (b || (b = h.getAttribute("data-requiremodule")), j = E[h.getAttribute("data-requirecontext")])
            }
            (j ? j.defQueue :
                R).push([b, c, d])
        };
        define.amd = {jQuery: !0};
        j.exec = function (b) {
            return eval(b)
        };
        j(t)
    }
})(this);
/*!
 * jscolor, JavaScript Color Picker
 *
 * @version 1.4.1
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Jan Odvarko, http://odvarko.cz
 * @created 2008-06-15
 * @updated 2013-04-08
 * @link    http://jscolor.com
 */
;var jscolor={dir:"",bindClass:"color",binding:true,preloading:true,install:function(){jscolor.addEvent(window,"load",jscolor.init)},init:function(){if(jscolor.binding){jscolor.bind()}if(jscolor.preloading){jscolor.preload()}},getDir:function(){if(!jscolor.dir){var a=jscolor.detectDir();jscolor.dir=a!==false?a:"jscolor/"}return jscolor.dir},detectDir:function(){var c=location.href;var d=document.getElementsByTagName("base");for(var a=0;a<d.length;a+=1){if(d[a].href){c=d[a].href}}var d=document.getElementsByTagName("script");for(var a=0;a<d.length;a+=1){if(d[a].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(d[a].src)){var f=new jscolor.URI(d[a].src);var b=f.toAbsolute(c);b.path=b.path.replace(/[^\/]+$/,"");b.query=null;b.fragment=null;return b.toString()}}return false},bind:function(){var d=new RegExp("(^|\\s)("+jscolor.bindClass+")\\s*(\\{[^}]*\\})?","i");var f=document.getElementsByTagName("input");for(var c=0;c<f.length;c+=1){var b;if(!f[c].color&&f[c].className&&(b=f[c].className.match(d))){var g={};if(b[3]){try{g=(new Function("return ("+b[3]+")"))()}catch(a){}}f[c].color=new jscolor.color(f[c],g)}}},preload:function(){for(var a in jscolor.imgRequire){if(jscolor.imgRequire.hasOwnProperty(a)){jscolor.loadImage(a)}}},images:{pad:[181,101],sld:[16,101],cross:[15,15],arrow:[7,11]},imgRequire:{},imgLoaded:{},requireImage:function(a){jscolor.imgRequire[a]=true},loadImage:function(a){if(!jscolor.imgLoaded[a]){jscolor.imgLoaded[a]=new Image();jscolor.imgLoaded[a].src=jscolor.getDir()+a}},fetchElement:function(a){return typeof a==="string"?document.getElementById(a):a},addEvent:function(a,c,b){if(a.addEventListener){a.addEventListener(c,b,false)}else{if(a.attachEvent){a.attachEvent("on"+c,b)}}},fireEvent:function(a,c){if(!a){return}if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent(c,true,true);a.dispatchEvent(b)}else{if(document.createEventObject){var b=document.createEventObject();a.fireEvent("on"+c,b)}else{if(a["on"+c]){a["on"+c]()}}}},getElementPos:function(c){var d=c,b=c;var a=0,f=0;if(d.offsetParent){do{a+=d.offsetLeft;f+=d.offsetTop}while(d=d.offsetParent)}while((b=b.parentNode)&&b.nodeName.toUpperCase()!=="BODY"){a-=b.scrollLeft;f-=b.scrollTop}return[a,f]},getElementSize:function(a){return[a.offsetWidth,a.offsetHeight]},getRelMousePos:function(b){var a=0,c=0;if(!b){b=window.event}if(typeof b.offsetX==="number"){a=b.offsetX;c=b.offsetY}else{if(typeof b.layerX==="number"){a=b.layerX;c=b.layerY}}return{x:a,y:c}},getViewPos:function(){if(typeof window.pageYOffset==="number"){return[window.pageXOffset,window.pageYOffset]}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){return[document.body.scrollLeft,document.body.scrollTop]}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){return[document.documentElement.scrollLeft,document.documentElement.scrollTop]}else{return[0,0]}}}},getViewSize:function(){if(typeof window.innerWidth==="number"){return[window.innerWidth,window.innerHeight]}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){return[document.body.clientWidth,document.body.clientHeight]}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){return[document.documentElement.clientWidth,document.documentElement.clientHeight]}else{return[0,0]}}}},URI:function(a){this.scheme=null;this.authority=null;this.path="";this.query=null;this.fragment=null;this.parse=function(d){var c=d.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);this.scheme=c[3]?c[2]:null;this.authority=c[5]?c[6]:null;this.path=c[7];this.query=c[9]?c[10]:null;this.fragment=c[12]?c[13]:null;return this};this.toString=function(){var c="";if(this.scheme!==null){c=c+this.scheme+":"}if(this.authority!==null){c=c+"//"+this.authority}if(this.path!==null){c=c+this.path}if(this.query!==null){c=c+"?"+this.query}if(this.fragment!==null){c=c+"#"+this.fragment}return c};this.toAbsolute=function(e){var e=new jscolor.URI(e);var d=this;var c=new jscolor.URI;if(e.scheme===null){return false}if(d.scheme!==null&&d.scheme.toLowerCase()===e.scheme.toLowerCase()){d.scheme=null}if(d.scheme!==null){c.scheme=d.scheme;c.authority=d.authority;c.path=b(d.path);c.query=d.query}else{if(d.authority!==null){c.authority=d.authority;c.path=b(d.path);c.query=d.query}else{if(d.path===""){c.path=e.path;if(d.query!==null){c.query=d.query}else{c.query=e.query}}else{if(d.path.substr(0,1)==="/"){c.path=b(d.path)}else{if(e.authority!==null&&e.path===""){c.path="/"+d.path}else{c.path=e.path.replace(/[^\/]+$/,"")+d.path}c.path=b(c.path)}c.query=d.query}c.authority=e.authority}c.scheme=e.scheme}c.fragment=d.fragment;return c};function b(e){var c="";while(e){if(e.substr(0,3)==="../"||e.substr(0,2)==="./"){e=e.replace(/^\.+/,"").substr(1)}else{if(e.substr(0,3)==="/./"||e==="/."){e="/"+e.substr(3)}else{if(e.substr(0,4)==="/../"||e==="/.."){e="/"+e.substr(4);c=c.replace(/\/?[^\/]*$/,"")}else{if(e==="."||e===".."){e=""}else{var d=e.match(/^\/?[^\/]*/)[0];e=e.substr(d.length);c=c+d}}}}}return c}if(a){this.parse(a)}},color:function(B,d){this.required=true;this.adjust=true;this.hash=false;this.caps=true;this.slider=true;this.valueElement=B;this.styleElement=B;this.onImmediateChange=null;this.hsv=[0,0,1];this.rgb=[1,1,1];this.minH=0;this.maxH=6;this.minS=0;this.maxS=1;this.minV=0;this.maxV=1;this.pickerOnfocus=true;this.pickerMode="HSV";this.pickerPosition="bottom";this.pickerSmartPosition=true;this.pickerButtonHeight=20;this.pickerClosable=false;this.pickerCloseText="Close";this.pickerButtonColor="ButtonText";this.pickerFace=10;this.pickerFaceColor="ThreeDFace";this.pickerBorder=1;this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight";this.pickerInset=1;this.pickerInsetColor="ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow";this.pickerZIndex=10000;for(var s in d){if(d.hasOwnProperty(s)){this[s]=d[s]}}this.hidePicker=function(){if(u()){g()}};this.showPicker=function(){if(!u()){var K=jscolor.getElementPos(B);var H=jscolor.getElementSize(B);var E=jscolor.getViewPos();var M=jscolor.getViewSize();var p=t(this);var L,J,I;switch(this.pickerPosition.toLowerCase()){case"left":L=1;J=0;I=-1;break;case"right":L=1;J=0;I=1;break;case"top":L=0;J=1;I=-1;break;default:L=0;J=1;I=1;break}var G=(H[J]+p[J])/2;if(!this.pickerSmartPosition){var F=[K[L],K[J]+H[J]-G+G*I]}else{var F=[-E[L]+K[L]+p[L]>M[L]?(-E[L]+K[L]+H[L]/2>M[L]/2&&K[L]+H[L]-p[L]>=0?K[L]+H[L]-p[L]:K[L]):K[L],-E[J]+K[J]+H[J]+p[J]-G+G*I>M[J]?(-E[J]+K[J]+H[J]/2>M[J]/2&&K[J]+H[J]-G-G*I>=0?K[J]+H[J]-G-G*I:K[J]+H[J]-G+G*I):(K[J]+H[J]-G+G*I>=0?K[J]+H[J]-G+G*I:K[J]+H[J]-G-G*I)]}k(F[L],F[J])}};this.importColor=function(){if(!a){this.exportColor()}else{if(!this.adjust){if(!this.fromString(a.value,x)){D.style.backgroundImage=D.jscStyle.backgroundImage;D.style.backgroundColor=D.jscStyle.backgroundColor;D.style.color=D.jscStyle.color;this.exportColor(x|C)}}else{if(!this.required&&/^\s*$/.test(a.value)){a.value="";D.style.backgroundImage=D.jscStyle.backgroundImage;D.style.backgroundColor=D.jscStyle.backgroundColor;D.style.color=D.jscStyle.color;this.exportColor(x|C)}else{if(this.fromString(a.value)){}else{this.exportColor()}}}}};this.exportColor=function(p){if(!(p&x)&&a){var E=this.toString();if(this.caps){E=E.toUpperCase()}if(this.hash){E="#"+E}a.value=E}if(!(p&C)&&D){D.style.backgroundImage="none";D.style.backgroundColor="#"+this.toString();D.style.color=0.213*this.rgb[0]+0.715*this.rgb[1]+0.072*this.rgb[2]<0.5?"#FFF":"#000"}if(!(p&v)&&u()){r()}if(!(p&e)&&u()){A()}};this.fromHSV=function(G,F,E,p){if(G!==null){G=Math.max(0,this.minH,Math.min(6,this.maxH,G))}if(F!==null){F=Math.max(0,this.minS,Math.min(1,this.maxS,F))}if(E!==null){E=Math.max(0,this.minV,Math.min(1,this.maxV,E))}this.rgb=h(G===null?this.hsv[0]:(this.hsv[0]=G),F===null?this.hsv[1]:(this.hsv[1]=F),E===null?this.hsv[2]:(this.hsv[2]=E));this.exportColor(p)};this.fromRGB=function(I,H,p,E){if(I!==null){I=Math.max(0,Math.min(1,I))}if(H!==null){H=Math.max(0,Math.min(1,H))}if(p!==null){p=Math.max(0,Math.min(1,p))}var G=y(I===null?this.rgb[0]:I,H===null?this.rgb[1]:H,p===null?this.rgb[2]:p);if(G[0]!==null){this.hsv[0]=Math.max(0,this.minH,Math.min(6,this.maxH,G[0]))}if(G[2]!==0){this.hsv[1]=G[1]===null?null:Math.max(0,this.minS,Math.min(1,this.maxS,G[1]))}this.hsv[2]=G[2]===null?null:Math.max(0,this.minV,Math.min(1,this.maxV,G[2]));var F=h(this.hsv[0],this.hsv[1],this.hsv[2]);this.rgb[0]=F[0];this.rgb[1]=F[1];this.rgb[2]=F[2];this.exportColor(E)};this.fromString=function(F,E){var p=F.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);if(!p){return false}else{if(p[1].length===6){this.fromRGB(parseInt(p[1].substr(0,2),16)/255,parseInt(p[1].substr(2,2),16)/255,parseInt(p[1].substr(4,2),16)/255,E)}else{this.fromRGB(parseInt(p[1].charAt(0)+p[1].charAt(0),16)/255,parseInt(p[1].charAt(1)+p[1].charAt(1),16)/255,parseInt(p[1].charAt(2)+p[1].charAt(2),16)/255,E)}return true}};this.toString=function(){return((256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1))};function y(I,H,E){var J=Math.min(Math.min(I,H),E);var F=Math.max(Math.max(I,H),E);var p=F-J;if(p===0){return[null,0,F]}var G=I===J?3+(E-H)/p:(H===J?5+(I-E)/p:1+(H-I)/p);return[G===6?0:G,p/F,F]}function h(H,G,E){if(H===null){return[E,E,E]}var F=Math.floor(H);var I=F%2?H-F:1-(H-F);var p=E*(1-G);var J=E*(1-G*I);switch(F){case 6:case 0:return[E,J,p];case 1:return[J,E,p];case 2:return[p,E,J];case 3:return[p,J,E];case 4:return[J,p,E];case 5:return[E,p,J]}}function g(){delete jscolor.picker.owner;document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB)}function k(L,K){if(!jscolor.picker){jscolor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),btn:document.createElement("div"),btnS:document.createElement("span"),btnT:document.createTextNode(l.pickerCloseText)};for(var I=0,J=4;I<jscolor.images.sld[1];I+=J){var H=document.createElement("div");H.style.height=J+"px";H.style.fontSize="1px";H.style.lineHeight="0";jscolor.picker.sld.appendChild(H)}jscolor.picker.sldB.appendChild(jscolor.picker.sld);jscolor.picker.box.appendChild(jscolor.picker.sldB);jscolor.picker.box.appendChild(jscolor.picker.sldM);jscolor.picker.padB.appendChild(jscolor.picker.pad);jscolor.picker.box.appendChild(jscolor.picker.padB);jscolor.picker.box.appendChild(jscolor.picker.padM);jscolor.picker.btnS.appendChild(jscolor.picker.btnT);jscolor.picker.btn.appendChild(jscolor.picker.btnS);jscolor.picker.box.appendChild(jscolor.picker.btn);jscolor.picker.boxB.appendChild(jscolor.picker.box)}var E=jscolor.picker;E.box.onmouseup=E.box.onmouseout=function(){B.focus()};E.box.onmousedown=function(){n=true};E.box.onmousemove=function(p){if(c||o){c&&w(p);o&&i(p);if(document.selection){document.selection.empty()}else{if(window.getSelection){window.getSelection().removeAllRanges()}}f()}};if("ontouchstart" in window){E.box.addEventListener("touchmove",function(O){var p={offsetX:O.touches[0].pageX-j.X,offsetY:O.touches[0].pageY-j.Y};if(c||o){c&&w(p);o&&i(p);f()}O.stopPropagation();O.preventDefault()},false)}E.padM.onmouseup=E.padM.onmouseout=function(){if(c){c=false;jscolor.fireEvent(a,"change")}};E.padM.onmousedown=function(p){switch(b){case 0:if(l.hsv[2]===0){l.fromHSV(null,null,1)}break;case 1:if(l.hsv[1]===0){l.fromHSV(null,1,null)}break}o=false;c=true;w(p);f()};if("ontouchstart" in window){E.padM.addEventListener("touchstart",function(p){j={X:p.target.offsetParent.offsetLeft,Y:p.target.offsetParent.offsetTop};this.onmousedown({offsetX:p.touches[0].pageX-j.X,offsetY:p.touches[0].pageY-j.Y})})}E.sldM.onmouseup=E.sldM.onmouseout=function(){if(o){o=false;jscolor.fireEvent(a,"change")}};E.sldM.onmousedown=function(p){c=false;o=true;i(p);f()};if("ontouchstart" in window){E.sldM.addEventListener("touchstart",function(p){j={X:p.target.offsetParent.offsetLeft,Y:p.target.offsetParent.offsetTop};this.onmousedown({offsetX:p.touches[0].pageX-j.X,offsetY:p.touches[0].pageY-j.Y})})}var N=t(l);E.box.style.width=N[0]+"px";E.box.style.height=N[1]+"px";E.boxB.style.position="absolute";E.boxB.style.clear="both";E.boxB.style.left=L+"px";E.boxB.style.top=K+"px";E.boxB.style.zIndex=l.pickerZIndex;E.boxB.style.border=l.pickerBorder+"px solid";E.boxB.style.borderColor=l.pickerBorderColor;E.boxB.style.background=l.pickerFaceColor;E.pad.style.width=jscolor.images.pad[0]+"px";E.pad.style.height=jscolor.images.pad[1]+"px";E.padB.style.position="absolute";E.padB.style.left=l.pickerFace+"px";E.padB.style.top=l.pickerFace+"px";E.padB.style.border=l.pickerInset+"px solid";E.padB.style.borderColor=l.pickerInsetColor;E.padM.style.position="absolute";E.padM.style.left="0";E.padM.style.top="0";E.padM.style.width=l.pickerFace+2*l.pickerInset+jscolor.images.pad[0]+jscolor.images.arrow[0]+"px";E.padM.style.height=E.box.style.height;E.padM.style.cursor="crosshair";E.sld.style.overflow="hidden";E.sld.style.width=jscolor.images.sld[0]+"px";E.sld.style.height=jscolor.images.sld[1]+"px";E.sldB.style.display=l.slider?"block":"none";E.sldB.style.position="absolute";E.sldB.style.right=l.pickerFace+"px";E.sldB.style.top=l.pickerFace+"px";E.sldB.style.border=l.pickerInset+"px solid";E.sldB.style.borderColor=l.pickerInsetColor;E.sldM.style.display=l.slider?"block":"none";E.sldM.style.position="absolute";E.sldM.style.right="0";E.sldM.style.top="0";E.sldM.style.width=jscolor.images.sld[0]+jscolor.images.arrow[0]+l.pickerFace+2*l.pickerInset+"px";E.sldM.style.height=E.box.style.height;try{E.sldM.style.cursor="pointer"}catch(G){E.sldM.style.cursor="hand"}function M(){var p=l.pickerInsetColor.split(/\s+/);var O=p.length<2?p[0]:p[1]+" "+p[0]+" "+p[0]+" "+p[1];E.btn.style.borderColor=O}E.btn.style.display=l.pickerClosable?"block":"none";E.btn.style.position="absolute";E.btn.style.left=l.pickerFace+"px";E.btn.style.bottom=l.pickerFace+"px";E.btn.style.padding="0 15px";E.btn.style.height="18px";E.btn.style.border=l.pickerInset+"px solid";M();E.btn.style.color=l.pickerButtonColor;E.btn.style.font="12px sans-serif";E.btn.style.textAlign="center";try{E.btn.style.cursor="pointer"}catch(G){E.btn.style.cursor="hand"}E.btn.onmousedown=function(){l.hidePicker()};E.btnS.style.lineHeight=E.btn.style.height;switch(b){case 0:var F="hs.png";break;case 1:var F="hv.png";break}E.padM.style.backgroundImage="url('"+jscolor.getDir()+"cross.gif')";E.padM.style.backgroundRepeat="no-repeat";E.sldM.style.backgroundImage="url('"+jscolor.getDir()+"arrow.gif')";E.sldM.style.backgroundRepeat="no-repeat";E.pad.style.backgroundImage="url('"+jscolor.getDir()+F+"')";E.pad.style.backgroundRepeat="no-repeat";E.pad.style.backgroundPosition="0 0";r();A();jscolor.picker.owner=l;document.getElementsByTagName("body")[0].appendChild(E.boxB)}function t(E){var p=[2*E.pickerInset+2*E.pickerFace+jscolor.images.pad[0]+(E.slider?2*E.pickerInset+2*jscolor.images.arrow[0]+jscolor.images.sld[0]:0),E.pickerClosable?4*E.pickerInset+3*E.pickerFace+jscolor.images.pad[1]+E.pickerButtonHeight:2*E.pickerInset+2*E.pickerFace+jscolor.images.pad[1]];return p}function r(){switch(b){case 0:var G=1;break;case 1:var G=2;break}var K=Math.round((l.hsv[0]/6)*(jscolor.images.pad[0]-1));var J=Math.round((1-l.hsv[G])*(jscolor.images.pad[1]-1));jscolor.picker.padM.style.backgroundPosition=(l.pickerFace+l.pickerInset+K-Math.floor(jscolor.images.cross[0]/2))+"px "+(l.pickerFace+l.pickerInset+J-Math.floor(jscolor.images.cross[1]/2))+"px";var p=jscolor.picker.sld.childNodes;switch(b){case 0:var I=h(l.hsv[0],l.hsv[1],1);for(var E=0;E<p.length;E+=1){p[E].style.backgroundColor="rgb("+(I[0]*(1-E/p.length)*100)+"%,"+(I[1]*(1-E/p.length)*100)+"%,"+(I[2]*(1-E/p.length)*100)+"%)"}break;case 1:var I,L,H=[l.hsv[2],0,0];var E=Math.floor(l.hsv[0]);var F=E%2?l.hsv[0]-E:1-(l.hsv[0]-E);switch(E){case 6:case 0:I=[0,1,2];break;case 1:I=[1,0,2];break;case 2:I=[2,0,1];break;case 3:I=[2,1,0];break;case 4:I=[1,2,0];break;case 5:I=[0,2,1];break}for(var E=0;E<p.length;E+=1){L=1-1/(p.length-1)*E;H[1]=H[0]*(1-L*F);H[2]=H[0]*(1-L);p[E].style.backgroundColor="rgb("+(H[I[0]]*100)+"%,"+(H[I[1]]*100)+"%,"+(H[I[2]]*100)+"%)"}break}}function A(){switch(b){case 0:var p=2;break;case 1:var p=1;break}var E=Math.round((1-l.hsv[p])*(jscolor.images.sld[1]-1));jscolor.picker.sldM.style.backgroundPosition="0 "+(l.pickerFace+l.pickerInset+E-Math.floor(jscolor.images.arrow[1]/2))+"px"}function u(){return jscolor.picker&&jscolor.picker.owner===l}function q(){if(a===B){l.importColor()}if(l.pickerOnfocus){l.hidePicker()}}function m(){if(a!==B){l.importColor()}}function w(F){var E=jscolor.getRelMousePos(F);var p=E.x-l.pickerFace-l.pickerInset;var G=E.y-l.pickerFace-l.pickerInset;switch(b){case 0:l.fromHSV(p*(6/(jscolor.images.pad[0]-1)),1-G/(jscolor.images.pad[1]-1),null,e);break;case 1:l.fromHSV(p*(6/(jscolor.images.pad[0]-1)),null,1-G/(jscolor.images.pad[1]-1),e);break}}function i(E){var p=jscolor.getRelMousePos(E);var F=p.y-l.pickerFace-l.pickerInset;switch(b){case 0:l.fromHSV(null,null,1-F/(jscolor.images.sld[1]-1),v);break;case 1:l.fromHSV(null,1-F/(jscolor.images.sld[1]-1),null,v);break}}function f(){if(l.onImmediateChange){var p;if(typeof l.onImmediateChange==="string"){p=new Function(l.onImmediateChange)}else{p=l.onImmediateChange}p.call(l)}}var l=this;var b=this.pickerMode.toLowerCase()==="hvs"?1:0;var n=false;var a=jscolor.fetchElement(this.valueElement),D=jscolor.fetchElement(this.styleElement);var c=false,o=false,j={};var x=1<<0,C=1<<1,v=1<<2,e=1<<3;jscolor.addEvent(B,"focus",function(){if(l.pickerOnfocus){l.showPicker()}});jscolor.addEvent(B,"blur",function(){if(!n){window.setTimeout(function(){n||q();n=false},0)}else{n=false}});if(a){var z=function(){l.fromString(a.value,x);f()};jscolor.addEvent(a,"keyup",z);jscolor.addEvent(a,"input",z);jscolor.addEvent(a,"blur",m);a.setAttribute("autocomplete","off")}if(D){D.jscStyle={backgroundImage:D.style.backgroundImage,backgroundColor:D.style.backgroundColor,color:D.style.color}}switch(b){case 0:jscolor.requireImage("hs.png");break;case 1:jscolor.requireImage("hv.png");break}jscolor.requireImage("cross.gif");jscolor.requireImage("arrow.gif");this.importColor()}};
window.ThemeManager = (function () {
    var themeManager = {};

    var theme = function () {
        this.bodyFontColor = "#000";
        this.radius = "5px";
        this.badgeRadius = "9px";
        this.bodyBackgroundColor = "#fff";
        this.bodyGradientFromColor = "#fff";
        this.bodyGradientToColor = "#fff";
        this.infoColor = "#333";
        this.badgeSuccess = "#669900";
        this.badgeWarning = "#f80";
        this.codeColor = "#000";
        this.hoverColor = "#33b5e5";
        this.wellBackgroundColor = "#fff";
        this.navBackgroundColor = "#000";
        this.navBarInnerBackgroundColor = "#252a30";
        this.inverseColor = "#9933CC";
        this.successColor = "#5c8a00";
        this.errorColor = "#c00";
        this.completedColor = "#5c8a00";
        this.tableBorderColor = "#222";
        this.codeFontFamily = "Menlo,Monaco,Consolas,monospace";
        this.fontSize = "12px";
    };

    themeManager['cyborg'] = new theme();
    themeManager['cyborg'].bodyFontColor = "#999";
    themeManager['cyborg'].radius = "4px";
    themeManager['cyborg'].badgeRadius = "9px";
    themeManager['cyborg'].bodyBackgroundColor = "#121417";
    themeManager['cyborg'].bodyGradientFromColor = "#060606";
    themeManager['cyborg'].bodyGradientToColor = "#252a30";
    themeManager['cyborg'].infoColor = "#33b5e5";
    themeManager['cyborg'].badgeSuccess = "#669900";
    themeManager['cyborg'].badgeWarning = "#f80";
    themeManager['cyborg'].codeColor = "#fff";
    themeManager['cyborg'].hoverColor = "#33b5e5";
    themeManager['cyborg'].wellBackgroundColor = "#131517";
    themeManager['cyborg'].navBackgroundColor = "#020202";
    themeManager['cyborg'].navBarInnerBackgroundColor = "#252a30";
    themeManager['cyborg'].inverseColor = "#9933CC";
    themeManager['cyborg'].successColor = "#5c8a00";
    themeManager['cyborg'].errorColor = "#c00";
    themeManager['cyborg'].completedColor = "#5c8a00";
    themeManager['cyborg'].tableBorderColor = "#222";
    themeManager['cyborg'].codeFontFamily = "Menlo,Monaco,Consolas,monospace";
    themeManager['cyborg'].fontSize = "12px";
    themeManager['custom'] = new theme();
    if (!amplify.store('customTheme'))
        amplify.store('customTheme', themeManager['custom']);
    themeManager['cosmo'] = new theme();
    themeManager['cosmo'].bodyFontColor = "#000";
    themeManager['cosmo'].bodyBackgroundColor = "#fff";
    themeManager['cosmo'].bodyGradientFromColor = "#fff";
    themeManager['cosmo'].bodyGradientToColor = "#fff";
    themeManager['cosmo'].infoColor = "#000";
    themeManager['cosmo'].badgeSuccess = "#3FB618";
    themeManager['cosmo'].badgeRadius = "0px";
    themeManager['cosmo'].badgeWarning = "#FE6600";
    themeManager['cosmo'].codeColor = "#fff";
    themeManager['cosmo'].hoverColor = "#0072E6";
    themeManager['cosmo'].wellBackgroundColor = "#131517";
    themeManager['cosmo'].navBackgroundColor = "#020202";
    themeManager['cosmo'].navBarInnerBackgroundColor = "#0072EB";
    themeManager['cosmo'].inverseColor = "#000";
    themeManager['cosmo'].successColor = "#41BB19";
    themeManager['cosmo'].errorColor = "#E60033";
    themeManager['cosmo'].completedColor = "#41BB19";
    themeManager['cosmo'].tableBorderColor = "#ddd";
    themeManager['curelean'] = new theme();
    themeManager['curelean'].bodyFontColor = "#000";
    themeManager['curelean'].bodyBackgroundColor = "#fff";
    themeManager['curelean'].bodyGradientFromColor = "#fff";
    themeManager['curelean'].bodyGradientToColor = "#fff";
    themeManager['curelean'].radius = "0px";
    themeManager['curelean'].badgeRadius = "5px";
    themeManager['curelean'].infoColor = "#33b5e5";
    themeManager['curelean'].badgeSuccess = "#669900";
    themeManager['curelean'].badgeWarning = "#f80";
    themeManager['curelean'].codeColor = "#fff";
    themeManager['curelean'].hoverColor = "#FF2B2B";
    themeManager['curelean'].wellBackgroundColor = "#0a1366";
    themeManager['curelean'].navBackgroundColor = "#4cc6ef";
    themeManager['curelean'].navBarInnerBackgroundColor = "#0a1366";
    themeManager['curelean'].inverseColor = "#9933CC";
    themeManager['curelean'].successColor = "#5c8a00";
    themeManager['curelean'].errorColor = "#c00";
    themeManager['curelean'].completedColor = "#5c8a00";
    themeManager['curelean'].tableBorderColor = "#ddd";
    themeManager['superhero'] = new theme();
    themeManager['superhero'].bodyFontColor = "#ece9d7";
    themeManager['superhero'].radius = "5px";
    themeManager['superhero'].badgeRadius = "5px";
    themeManager['superhero'].bodyBackgroundColor = "#2A333C";
    themeManager['superhero'].bodyGradientFromColor = "#2A333C";
    themeManager['superhero'].bodyGradientToColor = "#2A333C";
    themeManager['superhero'].infoColor = "#E36B23";
    themeManager['superhero'].badgeSuccess = "#51A351";
    themeManager['superhero'].badgeWarning = "#E36B23";
    themeManager['superhero'].codeColor = "#ece9d7";
    themeManager['superhero'].hoverColor = "#E36B23";
    themeManager['superhero'].wellBackgroundColor = "#45515F";
    themeManager['superhero'].navBackgroundColor = "#2A333C";
    themeManager['superhero'].navBarInnerBackgroundColor = "#45515F";
    themeManager['superhero'].inverseColor = "#414141";
    themeManager['superhero'].successColor = "#51A351";
    themeManager['superhero'].errorColor = "#c00";
    themeManager['superhero'].completedColor = "#51A351";
    themeManager['superhero'].tableBorderColor = "transparent";

    var themeStyleTag = document.createElement('style');
    themeStyleTag.setAttribute("id", "theme");
    var s = document.getElementsByTagName('link')[0];
    s.parentNode.insertBefore(themeStyleTag, s);

    var apply = function () {
        var t;

        if (amplify.store('currentTheme') === 'customTheme') {
            t = amplify.store('customTheme');
        }
        else {
            t = themeManager[amplify.store('currentTheme')];
        }

        themeStyleTag.innerHTML = ".clearfix{*zoom:1}.clearfix:before,.clearfix:after{display:table;line-height:0;content:''}.clearfix:after{clear:both}.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.input-block-level{display:block;width:100%;min-height:30px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none}html{overflow:hidden;font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}a:hover,a:active{outline:0}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{width:auto;height:auto;max-width:100%;vertical-align:middle;border:0;-ms-interpolation-mode:bicubic}#map_canvas img,.google-maps img{max-width:none}button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}button,input{*overflow:visible;line-height:normal}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}button,html input[type='button'],input[type='reset'],input[type='submit']{cursor:pointer;-webkit-appearance:button}label,select,button,input[type='button'],input[type='reset'],input[type='submit'],input[type='radio'],input[type='checkbox']{cursor:pointer}input[type='search']{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-cancel-button{-webkit-appearance:none}textarea{overflow:auto;vertical-align:top}@media print{*{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:' (' attr(href) ')'}abbr[title]:after{content:' (' attr(title) ')'}.ir a:after,a[href^='javascript:']:after,a[href^='#']:after{content:''}pre,blockquote{border:1px solid "
            + t.bodyFontColor + ";page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}@page{margin:.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}body{margin:0;font-family:'Droid Sans',sans-serif;font-size:14px;line-height:20px;color:"
            + t.bodyFontColor + ";background-color:"
            + t.bodyGradientFromColor + "}a{color:"
            + t.hoverColor + ";text-decoration:none}a:hover,a:focus{color:#fff;text-decoration:none}.img-rounded{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.img-polaroid{padding:4px;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.1);box-shadow:0 1px 3px rgba(0,0,0,0.1)}.img-circle{-webkit-border-radius:500px;-moz-border-radius:500px;border-radius:500px}.row{margin-left:-20px;*zoom:1}.row:before,.row:after{display:table;line-height:0;content:''}.row:after{clear:both}[class*='span']{float:left;min-height:1px;margin-left:20px}.container,.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container{width:940px}.span12{width:940px}.span11{width:860px}.span10{width:780px}.span9{width:700px}.span8{width:620px}.span7{width:540px}.span6{width:460px}.span5{width:380px}.span4{width:300px}.span3{width:220px}.span2{width:140px}.span1{width:60px}.offset12{margin-left:980px}.offset11{margin-left:900px}.offset10{margin-left:820px}.offset9{margin-left:740px}.offset8{margin-left:660px}.offset7{margin-left:580px}.offset6{margin-left:500px}.offset5{margin-left:420px}.offset4{margin-left:340px}.offset3{margin-left:260px}.offset2{margin-left:180px}.offset1{margin-left:100px}.row-fluid{width:100%;*zoom:1}.row-fluid:before,.row-fluid:after{display:table;line-height:0;content:''}.row-fluid:after{clear:both}.row-fluid [class*='span']{display:block;float:left;width:100%;min-height:30px;margin-left:2.127659574468085%;*margin-left:2.074468085106383%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*='span']:first-child{margin-left:0}.row-fluid .controls-row [class*='span']+[class*='span']{margin-left:2.127659574468085%}.row-fluid .span12{width:100%;*width:99.94680851063829%}.row-fluid .span11{width:91.48936170212765%;*width:91.43617021276594%}.row-fluid .span10{width:82.97872340425532%;*width:82.92553191489361%}.row-fluid .span9{width:74.46808510638297%;*width:74.41489361702126%}.row-fluid .span8{width:65.95744680851064%;*width:65.90425531914893%}.row-fluid .span7{width:57.44680851063829%;*width:57.39361702127659%}.row-fluid .span6{width:48.93617021276595%;*width:48.88297872340425%}.row-fluid .span5{width:40.42553191489362%;*width:40.37234042553192%}.row-fluid .span4{width:31.914893617021278%;*width:31.861702127659576%}.row-fluid .span3{width:23.404255319148934%;*width:23.351063829787233%}.row-fluid .span2{width:14.893617021276595%;*width:14.840425531914894%}.row-fluid .span1{width:6.382978723404255%;*width:6.329787234042553%}.row-fluid .offset12{margin-left:104.25531914893617%;*margin-left:104.14893617021275%}.row-fluid .offset12:first-child{margin-left:102.12765957446808%;*margin-left:102.02127659574467%}.row-fluid .offset11{margin-left:95.74468085106382%;*margin-left:95.6382978723404%}.row-fluid .offset11:first-child{margin-left:93.61702127659574%;*margin-left:93.51063829787232%}.row-fluid .offset10{margin-left:87.23404255319149%;*margin-left:87.12765957446807%}.row-fluid .offset10:first-child{margin-left:85.1063829787234%;*margin-left:84.99999999999999%}.row-fluid .offset9{margin-left:78.72340425531914%;*margin-left:78.61702127659572%}.row-fluid .offset9:first-child{margin-left:76.59574468085106%;*margin-left:76.48936170212764%}.row-fluid .offset8{margin-left:70.2127659574468%;*margin-left:70.10638297872339%}.row-fluid .offset8:first-child{margin-left:68.08510638297872%;*margin-left:67.9787234042553%}.row-fluid .offset7{margin-left:61.70212765957446%;*margin-left:61.59574468085106%}.row-fluid .offset7:first-child{margin-left:59.574468085106375%;*margin-left:59.46808510638297%}.row-fluid .offset6{margin-left:53.191489361702125%;*margin-left:53.085106382978715%}.row-fluid .offset6:first-child{margin-left:51.063829787234035%;*margin-left:50.95744680851063%}.row-fluid .offset5{margin-left:44.68085106382979%;*margin-left:44.57446808510638%}.row-fluid .offset5:first-child{margin-left:42.5531914893617%;*margin-left:42.4468085106383%}.row-fluid .offset4{margin-left:36.170212765957444%;*margin-left:36.06382978723405%}.row-fluid .offset4:first-child{margin-left:34.04255319148936%;*margin-left:33.93617021276596%}.row-fluid .offset3{margin-left:27.659574468085104%;*margin-left:27.5531914893617%}.row-fluid .offset3:first-child{margin-left:25.53191489361702%;*margin-left:25.425531914893618%}.row-fluid .offset2{margin-left:19.148936170212764%;*margin-left:19.04255319148936%}.row-fluid .offset2:first-child{margin-left:17.02127659574468%;*margin-left:16.914893617021278%}.row-fluid .offset1{margin-left:10.638297872340425%;*margin-left:10.53191489361702%}.row-fluid .offset1:first-child{margin-left:8.51063829787234%;*margin-left:8.404255319148938%}[class*='span'].hide,.row-fluid [class*='span'].hide{display:none}[class*='span'].pull-right,.row-fluid [class*='span'].pull-right{float:right}.container{margin-right:auto;margin-left:auto;*zoom:1}.container:before,.container:after{display:table;line-height:0;content:''}.container:after{clear:both}.container-fluid{padding-right:0;padding-left:0;*zoom:1}.container-fluid:before,.container-fluid:after{display:table;line-height:0;content:''}.container-fluid:after{clear:both}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:21px;font-weight:200;line-height:30px}small{font-size:85%}strong{font-weight:bold}em{font-style:italic}cite{font-style:normal}.muted{color:#adafae}a.muted:hover,a.muted:focus{color:#939695}.text-warning{color:#a47e3c}a.text-warning:hover,a.text-warning:focus{color:#7f612e}.text-error{color:#b94a48}a.text-error:hover,a.text-error:focus{color:#953b39}.text-info{color:"
            + t.infoColor + "}a.text-info:hover,a.text-info:focus{color:#007399}.text-success{color:"
            + t.badgeSuccess + "}a.text-success:hover,a.text-success:focus{color:#356635}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}h1,h2,h3,h4,h5,h6{margin:10px 0;font-family:inherit;font-weight:normal;line-height:20px;color:#fff;text-rendering:optimizelegibility}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-weight:normal;line-height:1;color:#adafae}h1,h2,h3{line-height:40px}h1{font-size:38.5px}h2{font-size:31.5px}h3{font-size:24.5px}h4{font-size:17.5px}h5{font-size:14px}h6{font-size:11.9px}h1 small{font-size:24.5px}h2 small{font-size:17.5px}h3 small{font-size:14px}h4 small{font-size:14px}.page-header{padding-bottom:9px;margin:20px 0 30px;border-bottom:1px solid #eee}ul,ol{padding:0;margin:0 0 10px 25px}ul ul,ul ol,ol ol,ol ul{margin-bottom:0}li{line-height:20px}ul.unstyled,ol.unstyled{margin-left:0;list-style:none}ul.inline,ol.inline{margin-left:0;list-style:none}ul.inline>li,ol.inline>li{display:inline-block;*display:inline;padding-right:5px;padding-left:5px;*zoom:1}dl{margin-bottom:0}dt,dd{line-height:20px}dt{font-weight:bold}dd{margin-left:10px}.dl-horizontal{*zoom:1}.dl-horizontal:before,.dl-horizontal:after{display:table;line-height:0;content:''}.dl-horizontal:after{clear:both}.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}hr{margin:20px 0;border:0;border-top:1px solid "
            + t.tableBorderColor + ";border-bottom:1px solid #fff}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #adafae}abbr.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:0 0 0 15px;margin:0 0 20px;border-left:5px solid #eee}blockquote p{margin-bottom:0;font-size:17.5px;font-weight:300;line-height:1.25}blockquote small{display:block;line-height:20px;color:#adafae}blockquote small:before{content:'\2014 \00A0'}blockquote.pull-right{float:right;padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0}blockquote.pull-right p,blockquote.pull-right small{text-align:right}blockquote.pull-right small:before{content:''}blockquote.pull-right small:after{content:'\00A0 \2014'}q:before,q:after,blockquote:before,blockquote:after{content:''}address{display:block;margin-bottom:20px;font-style:normal;line-height:20px}code,pre{padding:0 3px 2px;font-family:"
            + t.codeFontFamily + ";font-size:"
            + t.fontSize + ";color:#222;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}code{padding:2px 4px;color:#d14;white-space:nowrap;background-color:#f7f7f9;border:1px solid #e1e1e8}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:20px;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap;background-color:#f5f5f5;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}pre.prettyprint{margin-bottom:0}code{font-weight: bold !important;suit}pre code{padding:0;color:inherit;white-space:pre;white-space:pre-wrap;background-color:transparent;border:0}.pre-scrollable{max-height:340px;overflow-y:scroll}form{margin:0 0 20px}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:40px;color:#222;border:0;border-bottom:1px solid #e5e5e5}legend small{font-size:15px;color:#adafae}label,input,button,select,textarea{font-size:14px;font-weight:normal;line-height:20px}input,button,select,textarea{font-family:'Droid Sans',sans-serif}label{display:block;margin-bottom:5px}select,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{display:inline-block;height:20px;padding:4px 6px;margin-bottom:10px;font-size:14px;line-height:20px;color:"
            + t.bodyFontColor + ";vertical-align:middle;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}input,textarea,.uneditable-input{width:206px}textarea{height:auto}textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{background-color:#ccc;border:1px solid #bbb;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border linear .2s,box-shadow linear .2s;-moz-transition:border linear .2s,box-shadow linear .2s;-o-transition:border linear .2s,box-shadow linear .2s;transition:border linear .2s,box-shadow linear .2s}textarea:focus,input[type='text']:focus,input[type='password']:focus,input[type='datetime']:focus,input[type='datetime-local']:focus,input[type='date']:focus,input[type='month']:focus,input[type='time']:focus,input[type='week']:focus,input[type='number']:focus,input[type='email']:focus,input[type='url']:focus,input[type='search']:focus,input[type='tel']:focus,input[type='color']:focus,.uneditable-input:focus{border-color:rgba(82,168,236,0.8);outline:0;outline:thin dotted ;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6)}input[type='radio'],input[type='checkbox']{margin:4px 0 0;margin-top:1px ;*margin-top:0;line-height:normal}input[type='file'],input[type='image'],input[type='submit'],input[type='reset'],input[type='button'],input[type='radio'],input[type='checkbox']{width:auto}select,input[type='file']{height:30px;*margin-top:4px;line-height:30px}select{width:220px;background-color:#ccc;border:1px solid #bbb}select[multiple],select[size]{height:auto}select:focus,input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.uneditable-input,.uneditable-textarea{color:#adafae;cursor:not-allowed;background-color:#c9c9c9;border-color:#bbb;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.025);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.025);box-shadow:inset 0 1px 2px rgba(0,0,0,0.025)}.uneditable-input{overflow:hidden;white-space:nowrap}.uneditable-textarea{width:auto;height:auto}input:-moz-placeholder,textarea:-moz-placeholder{color:#adafae}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#adafae}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#adafae}.radio,.checkbox{min-height:20px;padding-left:20px}.radio input[type='radio'],.checkbox input[type='checkbox']{float:left;margin-left:-20px}.controls>.radio:first-child,.controls>.checkbox:first-child{padding-top:5px}.radio.inline,.checkbox.inline{display:inline-block;padding-top:5px;margin-bottom:0;vertical-align:middle}.radio.inline+.radio.inline,.checkbox.inline+.checkbox.inline{margin-left:10px}.input-mini{width:60px}.input-small{width:90px}.input-medium{width:150px}.input-large{width:210px}.input-xlarge{width:270px}.input-xxlarge{width:530px}input[class*='span'],select[class*='span'],textarea[class*='span'],.uneditable-input[class*='span'],.row-fluid input[class*='span'],.row-fluid select[class*='span'],.row-fluid textarea[class*='span'],.row-fluid .uneditable-input[class*='span']{float:none;margin-left:0}.input-append input[class*='span'],.input-append .uneditable-input[class*='span'],.input-prepend input[class*='span'],.input-prepend .uneditable-input[class*='span'],.row-fluid input[class*='span'],.row-fluid select[class*='span'],.row-fluid textarea[class*='span'],.row-fluid .uneditable-input[class*='span'],.row-fluid .input-prepend [class*='span'],.row-fluid .input-append [class*='span']{display:inline-block}input,textarea,.uneditable-input{margin-left:0}.controls-row [class*='span']+[class*='span']{margin-left:20px}input.span12,textarea.span12,.uneditable-input.span12{width:926px}input.span11,textarea.span11,.uneditable-input.span11{width:846px}input.span10,textarea.span10,.uneditable-input.span10{width:766px}input.span9,textarea.span9,.uneditable-input.span9{width:686px}input.span8,textarea.span8,.uneditable-input.span8{width:606px}input.span7,textarea.span7,.uneditable-input.span7{width:526px}input.span6,textarea.span6,.uneditable-input.span6{width:446px}input.span5,textarea.span5,.uneditable-input.span5{width:366px}input.span4,textarea.span4,.uneditable-input.span4{width:286px}input.span3,textarea.span3,.uneditable-input.span3{width:206px}input.span2,textarea.span2,.uneditable-input.span2{width:126px}input.span1,textarea.span1,.uneditable-input.span1{width:46px}.controls-row{*zoom:1}.controls-row:before,.controls-row:after{display:table;line-height:0;content:''}.controls-row:after{clear:both}.controls-row [class*='span'],.row-fluid .controls-row [class*='span']{float:left}.controls-row .checkbox[class*='span'],.controls-row .radio[class*='span']{padding-top:5px}input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly]{cursor:not-allowed;background-color:#555}input[type='radio'][disabled],input[type='checkbox'][disabled],input[type='radio'][readonly],input[type='checkbox'][readonly]{background-color:transparent}.control-group.warning .control-label,.control-group.warning .help-block,.control-group.warning .help-inline{color:#a47e3c}.control-group.warning .checkbox,.control-group.warning .radio,.control-group.warning input,.control-group.warning select,.control-group.warning textarea{color:#a47e3c}.control-group.warning input,.control-group.warning select,.control-group.warning textarea{border-color:#a47e3c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.warning input:focus,.control-group.warning select:focus,.control-group.warning textarea:focus{border-color:#7f612e;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78}.control-group.warning .input-prepend .add-on,.control-group.warning .input-append .add-on{color:#a47e3c;background-color:#eee;border-color:#a47e3c}.control-group.error .control-label,.control-group.error .help-block,.control-group.error .help-inline{color:#b94a48}.control-group.error .checkbox,.control-group.error .radio,.control-group.error input,.control-group.error select,.control-group.error textarea{color:#b94a48}.control-group.error input,.control-group.error select,.control-group.error textarea{border-color:#b94a48;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.error input:focus,.control-group.error select:focus,.control-group.error textarea:focus{border-color:#953b39;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392}.control-group.error .input-prepend .add-on,.control-group.error .input-append .add-on{color:#b94a48;background-color:#eee;border-color:#b94a48}.control-group.success .control-label,.control-group.success .help-block,.control-group.success .help-inline{color:"
            + t.badgeSuccess + "}.control-group.success .checkbox,.control-group.success .radio,.control-group.success input,.control-group.success select,.control-group.success textarea{color:"
            + t.badgeSuccess + "}.control-group.success input,.control-group.success select,.control-group.success textarea{border-color:"
            + t.badgeSuccess + ";-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.success input:focus,.control-group.success select:focus,.control-group.success textarea:focus{border-color:#356635;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b}.control-group.success .input-prepend .add-on,.control-group.success .input-append .add-on{color:"
            + t.badgeSuccess + ";background-color:#eee;border-color:"
            + t.badgeSuccess + "}.control-group.info .control-label,.control-group.info .help-block,.control-group.info .help-inline{color:"
            + t.infoColor + "}.control-group.info .checkbox,.control-group.info .radio,.control-group.info input,.control-group.info select,.control-group.info textarea{color:"
            + t.infoColor + "}.control-group.info input,.control-group.info select,.control-group.info textarea{border-color:"
            + t.infoColor + ";-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.info input:focus,.control-group.info select:focus,.control-group.info textarea:focus{border-color:#007399;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf}.control-group.info .input-prepend .add-on,.control-group.info .input-append .add-on{color:"
            + t.infoColor + ";background-color:#eee;border-color:"
            + t.infoColor + "}input:focus:invalid,textarea:focus:invalid,select:focus:invalid{color:#b94a48;border-color:#ee5f5b}input:focus:invalid:focus,textarea:focus:invalid:focus,select:focus:invalid:focus{border-color:#e9322d;-webkit-box-shadow:0 0 6px #f8b9b7;-moz-box-shadow:0 0 6px #f8b9b7;box-shadow:0 0 6px #f8b9b7}.form-actions{padding:19px 20px 20px;margin-top:20px;margin-bottom:20px;background-color:transparent;border-top:1px solid #e5e5e5;*zoom:1}.form-actions:before,.form-actions:after{display:table;line-height:0;content:''}.form-actions:after{clear:both}.help-block,.help-inline{color:"
            + t.codeColor + "}.help-block{display:block;margin-bottom:10px}.help-inline{display:inline-block;*display:inline;padding-left:5px;vertical-align:middle;*zoom:1}.input-append,.input-prepend{display:inline-block;margin-bottom:10px;font-size:0;white-space:nowrap;vertical-align:middle}.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input,.input-append .dropdown-menu,.input-prepend .dropdown-menu,.input-append .popover,.input-prepend .popover{font-size:14px}.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input{position:relative;margin-bottom:0;*margin-left:0;vertical-align:top;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-append input:focus,.input-prepend input:focus,.input-append select:focus,.input-prepend select:focus,.input-append .uneditable-input:focus,.input-prepend .uneditable-input:focus{z-index:2}.input-append .add-on,.input-prepend .add-on{display:inline-block;width:auto;height:20px;min-width:16px;padding:4px 5px;font-size:14px;font-weight:normal;line-height:20px;text-align:center;text-shadow:0 1px 0 #fff;background-color:#eee;border:1px solid #ccc}.input-append .add-on,.input-prepend .add-on,.input-append .btn,.input-prepend .btn,.input-append .btn-group>.dropdown-toggle,.input-prepend .btn-group>.dropdown-toggle{vertical-align:top;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-append .active,.input-prepend .active{background-color:#bf3;border-color:"
            + t.successColor + "}.input-prepend .add-on,.input-prepend .btn{margin-right:-1px}.input-prepend .add-on:first-child,.input-prepend .btn:first-child{-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-append input,.input-append select,.input-append .uneditable-input{-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-append input+.btn-group .btn:last-child,.input-append select+.btn-group .btn:last-child,.input-append .uneditable-input+.btn-group .btn:last-child{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-append .add-on,.input-append .btn,.input-append .btn-group{margin-left:-1px}.input-append .add-on:last-child,.input-append .btn:last-child,.input-append .btn-group:last-child>.dropdown-toggle{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append input,.input-prepend.input-append select,.input-prepend.input-append .uneditable-input{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-prepend.input-append input+.btn-group .btn,.input-prepend.input-append select+.btn-group .btn,.input-prepend.input-append .uneditable-input+.btn-group .btn{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append .add-on:first-child,.input-prepend.input-append .btn:first-child{margin-right:-1px;-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-prepend.input-append .add-on:last-child,.input-prepend.input-append .btn:last-child{margin-left:-1px;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append .btn-group:first-child{margin-left:0}input.search-query{padding-right:14px;padding-right:4px;padding-left:14px;padding-left:4px;margin-bottom:0;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.form-search .input-append .search-query,.form-search .input-prepend .search-query{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.form-search .input-append .search-query{-webkit-border-radius:14px 0 0 14px;-moz-border-radius:14px 0 0 14px;border-radius:14px 0 0 14px}.form-search .input-append .btn{-webkit-border-radius:0 14px 14px 0;-moz-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0}.form-search .input-prepend .search-query{-webkit-border-radius:0 14px 14px 0;-moz-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0}.form-search .input-prepend .btn{-webkit-border-radius:14px 0 0 14px;-moz-border-radius:14px 0 0 14px;border-radius:14px 0 0 14px}.form-search input,.form-inline input,.form-horizontal input,.form-search textarea,.form-inline textarea,.form-horizontal textarea,.form-search select,.form-inline select,.form-horizontal select,.form-search .help-inline,.form-inline .help-inline,.form-horizontal .help-inline,.form-search .uneditable-input,.form-inline .uneditable-input,.form-horizontal .uneditable-input,.form-search .input-prepend,.form-inline .input-prepend,.form-horizontal .input-prepend,.form-search .input-append,.form-inline .input-append,.form-horizontal .input-append{display:inline-block;*display:inline;margin-bottom:0;vertical-align:middle;*zoom:1}.form-search .hide,.form-inline .hide,.form-horizontal .hide{display:none}.form-search label,.form-inline label,.form-search .btn-group,.form-inline .btn-group{display:inline-block}.form-search .input-append,.form-inline .input-append,.form-search .input-prepend,.form-inline .input-prepend{margin-bottom:0}.form-search .radio,.form-search .checkbox,.form-inline .radio,.form-inline .checkbox{padding-left:0;margin-bottom:0;vertical-align:middle}.form-search .radio input[type='radio'],.form-search .checkbox input[type='checkbox'],.form-inline .radio input[type='radio'],.form-inline .checkbox input[type='checkbox']{float:left;margin-right:3px;margin-left:0}.control-group{margin-bottom:10px}legend+.control-group{margin-top:20px;-webkit-margin-top-collapse:separate}.form-horizontal .control-group{margin-bottom:20px;*zoom:1}.form-horizontal .control-group:before,.form-horizontal .control-group:after{display:table;line-height:0;content:''}.form-horizontal .control-group:after{clear:both}.form-horizontal .control-label{float:left;width:160px;padding-top:5px;text-align:right}.form-horizontal .controls{*display:inline-block;*padding-left:20px;margin-left:180px;*margin-left:0}.form-horizontal .controls:first-child{*padding-left:180px}.form-horizontal .help-block{margin-bottom:0}.form-horizontal input+.help-block,.form-horizontal select+.help-block,.form-horizontal textarea+.help-block,.form-horizontal .uneditable-input+.help-block,.form-horizontal .input-prepend+.help-block,.form-horizontal .input-append+.help-block{margin-top:10px}.form-horizontal .form-actions{padding-left:180px}table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0}.table{width:100%;margin-bottom:0}.table th,.table td{padding:8px;line-height:20px;text-align:left;vertical-align:top;border-top:1px solid "
            + t.tableBorderColor + "}.table th{font-weight:bold}.table thead th{vertical-align:bottom}.table caption+thead tr:first-child th,.table caption+thead tr:first-child td,.table colgroup+thead tr:first-child th,.table colgroup+thead tr:first-child td,.table thead:first-child tr:first-child th,.table thead:first-child tr:first-child td{border-top:0}.table tbody+tbody{border-top:2px solid #222}.table .table{background-color:"
            + t.bodyGradientFromColor + "}.table-condensed th,.table-condensed td{padding:4px 5px}.table-bordered{border:1px solid "
            + t.tableBorderColor + ";border-collapse:separate;*border-collapse:collapse;border-left:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.table-bordered th,.table-bordered td{border-left:1px solid "
            + t.tableBorderColor + "}.table-bordered caption+thead tr:first-child th,.table-bordered caption+tbody tr:first-child th,.table-bordered caption+tbody tr:first-child td,.table-bordered colgroup+thead tr:first-child th,.table-bordered colgroup+tbody tr:first-child th,.table-bordered colgroup+tbody tr:first-child td,.table-bordered thead:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child td{border-top:0}.table-bordered thead:first-child tr:first-child>th:first-child,.table-bordered tbody:first-child tr:first-child>td:first-child,.table-bordered tbody:first-child tr:first-child>th:first-child{-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-topleft:4px}.table-bordered thead:first-child tr:first-child>th:last-child,.table-bordered tbody:first-child tr:first-child>td:last-child,.table-bordered tbody:first-child tr:first-child>th:last-child{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px}.table-bordered thead:last-child tr:last-child>th:first-child,.table-bordered tbody:last-child tr:last-child>td:first-child,.table-bordered tbody:last-child tr:last-child>th:first-child,.table-bordered tfoot:last-child tr:last-child>td:first-child,.table-bordered tfoot:last-child tr:last-child>th:first-child{-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px}.table-bordered thead:last-child tr:last-child>th:last-child,.table-bordered tbody:last-child tr:last-child>td:last-child,.table-bordered tbody:last-child tr:last-child>th:last-child,.table-bordered tfoot:last-child tr:last-child>td:last-child,.table-bordered tfoot:last-child tr:last-child>th:last-child{-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-bottomright:4px}.table-bordered tfoot+tbody:last-child tr:last-child td:first-child{-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-moz-border-radius-bottomleft:0}.table-bordered tfoot+tbody:last-child tr:last-child td:last-child{-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;-moz-border-radius-bottomright:0}.table-bordered caption+thead tr:first-child th:first-child,.table-bordered caption+tbody tr:first-child td:first-child,.table-bordered colgroup+thead tr:first-child th:first-child,.table-bordered colgroup+tbody tr:first-child td:first-child{-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-topleft:4px}.table-bordered caption+thead tr:first-child th:last-child,.table-bordered caption+tbody tr:first-child td:last-child,.table-bordered colgroup+thead tr:first-child th:last-child,.table-bordered colgroup+tbody tr:first-child td:last-child{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px}.table-striped tbody>tr:nth-child(odd)>td,.table-striped tbody>tr:nth-child(odd)>th{background-color:rgba(100,100,100,0.1)}.table-hover tbody tr:hover>td,.table-hover tbody tr:hover>th{background-color:#222}table td[class*='span'],table th[class*='span'],.row-fluid table td[class*='span'],.row-fluid table th[class*='span']{display:table-cell;float:none;margin-left:0}.table td.span1,.table th.span1{float:none;width:44px;margin-left:0}.table td.span2,.table th.span2{float:none;width:124px;margin-left:0}.table td.span3,.table th.span3{float:none;width:204px;margin-left:0}.table td.span4,.table th.span4{float:none;width:284px;margin-left:0}.table td.span5,.table th.span5{float:none;width:364px;margin-left:0}.table td.span6,.table th.span6{float:none;width:444px;margin-left:0}.table td.span7,.table th.span7{float:none;width:524px;margin-left:0}.table td.span8,.table th.span8{float:none;width:604px;margin-left:0}.table td.span9,.table th.span9{float:none;width:684px;margin-left:0}.table td.span10,.table th.span10{float:none;width:764px;margin-left:0}.table td.span11,.table th.span11{float:none;width:844px;margin-left:0}.table td.span12,.table th.span12{float:none;width:924px;margin-left:0}.table tbody tr.success>td{background-color:#eee}.table tbody tr.error>td{background-color:#eee}.table tbody tr.warning>td{background-color:#eee}.table tbody tr.info>td{background-color:#eee}.table-hover tbody tr.success:hover>td{background-color:#e1e1e1}.table-hover tbody tr.error:hover>td{background-color:#e1e1e1}.table-hover tbody tr.warning:hover>td{background-color:#e1e1e1}.table-hover tbody tr.info:hover>td{background-color:#e1e1e1}[class^='icon-'],[class*=' icon-']{display:inline-block;width:14px;height:14px;margin-top:1px;*margin-right:.3em;line-height:14px;vertical-align:text-top;background-image:url('../img/glyphicons-halflings.png');background-position:14px 14px;background-repeat:no-repeat}.icon-white,.nav-pills>.active>a>[class^='icon-'],.nav-pills>.active>a>[class*=' icon-'],.nav-list>.active>a>[class^='icon-'],.nav-list>.active>a>[class*=' icon-'],.navbar-inverse .nav>.active>a>[class^='icon-'],.navbar-inverse .nav>.active>a>[class*=' icon-'],.dropdown-menu>li>a:hover>[class^='icon-'],.dropdown-menu>li>a:focus>[class^='icon-'],.dropdown-menu>li>a:hover>[class*=' icon-'],.dropdown-menu>li>a:focus>[class*=' icon-'],.dropdown-menu>.active>a>[class^='icon-'],.dropdown-menu>.active>a>[class*=' icon-'],.dropdown-submenu:hover>a>[class^='icon-'],.dropdown-submenu:focus>a>[class^='icon-'],.dropdown-submenu:hover>a>[class*=' icon-'],.dropdown-submenu:focus>a>[class*=' icon-']{background-image:url('../img/glyphicons-halflings-white.png')}.icon-glass{background-position:0 0}.icon-music{background-position:-24px 0}.icon-search{background-position:-48px 0}.icon-envelope{background-position:-72px 0}.icon-heart{background-position:-96px 0}.icon-star{background-position:-120px 0}.icon-star-empty{background-position:-144px 0}.icon-user{background-position:-168px 0}.icon-film{background-position:-192px 0}.icon-th-large{background-position:-216px 0}.icon-th{background-position:-240px 0}.icon-th-list{background-position:-264px 0}.icon-ok{background-position:-288px 0}.icon-remove{background-position:-312px 0}.icon-zoom-in{background-position:-336px 0}.icon-zoom-out{background-position:-360px 0}.icon-off{background-position:-384px 0}.icon-signal{background-position:-408px 0}.icon-cog{background-position:-432px 0}.icon-trash{background-position:-456px 0}.icon-home{background-position:0 -24px}.icon-file{background-position:-24px -24px}.icon-time{background-position:-48px -24px}.icon-road{background-position:-72px -24px}.icon-download-alt{background-position:-96px -24px}.icon-download{background-position:-120px -24px}.icon-upload{background-position:-144px -24px}.icon-inbox{background-position:-168px -24px}.icon-play-circle{background-position:-192px -24px}.icon-repeat{background-position:-216px -24px}.icon-refresh{background-position:-240px -24px}.icon-list-alt{background-position:-264px -24px}.icon-lock{background-position:-287px -24px}.icon-flag{background-position:-312px -24px}.icon-headphones{background-position:-336px -24px}.icon-volume-off{background-position:-360px -24px}.icon-volume-down{background-position:-384px -24px}.icon-volume-up{background-position:-408px -24px}.icon-qrcode{background-position:-432px -24px}.icon-barcode{background-position:-456px -24px}.icon-tag{background-position:0 -48px}.icon-tags{background-position:-25px -48px}.icon-book{background-position:-48px -48px}.icon-bookmark{background-position:-72px -48px}.icon-print{background-position:-96px -48px}.icon-camera{background-position:-120px -48px}.icon-font{background-position:-144px -48px}.icon-bold{background-position:-167px -48px}.icon-italic{background-position:-192px -48px}.icon-text-height{background-position:-216px -48px}.icon-text-width{background-position:-240px -48px}.icon-align-left{background-position:-264px -48px}.icon-align-center{background-position:-288px -48px}.icon-align-right{background-position:-312px -48px}.icon-align-justify{background-position:-336px -48px}.icon-list{background-position:-360px -48px}.icon-indent-left{background-position:-384px -48px}.icon-indent-right{background-position:-408px -48px}.icon-facetime-video{background-position:-432px -48px}.icon-picture{background-position:-456px -48px}.icon-pencil{background-position:0 -72px}.icon-map-marker{background-position:-24px -72px}.icon-adjust{background-position:-48px -72px}.icon-tint{background-position:-72px -72px}.icon-edit{background-position:-96px -72px}.icon-share{background-position:-120px -72px}.icon-check{background-position:-144px -72px}.icon-move{background-position:-168px -72px}.icon-step-backward{background-position:-192px -72px}.icon-fast-backward{background-position:-216px -72px}.icon-backward{background-position:-240px -72px}.icon-play{background-position:-264px -72px}.icon-pause{background-position:-288px -72px}.icon-stop{background-position:-312px -72px}.icon-forward{background-position:-336px -72px}.icon-fast-forward{background-position:-360px -72px}.icon-step-forward{background-position:-384px -72px}.icon-eject{background-position:-408px -72px}.icon-chevron-left{background-position:-432px -72px}.icon-chevron-right{background-position:-456px -72px}.icon-plus-sign{background-position:0 -96px}.icon-minus-sign{background-position:-24px -96px}.icon-remove-sign{background-position:-48px -96px}.icon-ok-sign{background-position:-72px -96px}.icon-question-sign{background-position:-96px -96px}.icon-info-sign{background-position:-120px -96px}.icon-screenshot{background-position:-144px -96px}.icon-remove-circle{background-position:-168px -96px}.icon-ok-circle{background-position:-192px -96px}.icon-ban-circle{background-position:-216px -96px}.icon-arrow-left{background-position:-240px -96px}.icon-arrow-right{background-position:-264px -96px}.icon-arrow-up{background-position:-289px -96px}.icon-arrow-down{background-position:-312px -96px}.icon-share-alt{background-position:-336px -96px}.icon-resize-full{background-position:-360px -96px}.icon-resize-small{background-position:-384px -96px}.icon-plus{background-position:-408px -96px}.icon-minus{background-position:-433px -96px}.icon-asterisk{background-position:-456px -96px}.icon-exclamation-sign{background-position:0 -120px}.icon-gift{background-position:-24px -120px}.icon-leaf{background-position:-48px -120px}.icon-fire{background-position:-72px -120px}.icon-eye-open{background-position:-96px -120px}.icon-eye-close{background-position:-120px -120px}.icon-warning-sign{background-position:-144px -120px}.icon-plane{background-position:-168px -120px}.icon-calendar{background-position:-192px -120px}.icon-random{width:16px;background-position:-216px -120px}.icon-comment{background-position:-240px -120px}.icon-magnet{background-position:-264px -120px}.icon-chevron-up{background-position:-288px -120px}.icon-chevron-down{background-position:-313px -119px}.icon-retweet{background-position:-336px -120px}.icon-shopping-cart{background-position:-360px -120px}.icon-folder-close{width:16px;background-position:-384px -120px}.icon-folder-open{width:16px;background-position:-408px -120px}.icon-resize-vertical{background-position:-432px -119px}.icon-resize-horizontal{background-position:-456px -118px}.icon-hdd{background-position:0 -144px}.icon-bullhorn{background-position:-24px -144px}.icon-bell{background-position:-48px -144px}.icon-certificate{background-position:-72px -144px}.icon-thumbs-up{background-position:-96px -144px}.icon-thumbs-down{background-position:-120px -144px}.icon-hand-right{background-position:-144px -144px}.icon-hand-left{background-position:-168px -144px}.icon-hand-up{background-position:-192px -144px}.icon-hand-down{background-position:-216px -144px}.icon-circle-arrow-right{background-position:-240px -144px}.icon-circle-arrow-left{background-position:-264px -144px}.icon-circle-arrow-up{background-position:-288px -144px}.icon-circle-arrow-down{background-position:-312px -144px}.icon-globe{background-position:-336px -144px}.icon-wrench{background-position:-360px -144px}.icon-tasks{background-position:-384px -144px}.icon-filter{background-position:-408px -144px}.icon-briefcase{background-position:-432px -144px}.icon-fullscreen{background-position:-456px -144px}.dropup,.dropdown{position:relative}.dropdown-toggle{*margin-bottom:-3px}.dropdown-toggle:active,.open .dropdown-toggle{outline:0}.caret{display:inline-block;width:0;height:0;vertical-align:top;border-top:4px solid #000;border-right:4px solid transparent;border-left:4px solid transparent;content:''}.dropdown .caret{margin-top:8px;margin-left:2px}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;background-color:"
            + t.wellBackgroundColor + ";border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);*border-right-width:2px;*border-bottom-width:2px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{*width:100%;height:1px;margin:9px 1px;*margin:-5px 0 5px;overflow:hidden;background-color:transparent;border-bottom:1px solid "
            + t.tableBorderColor + "}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:20px;color:"
            + t.bodyFontColor + ";white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-submenu:hover>a,.dropdown-submenu:focus>a{color:#fff;text-decoration:none;background-color:#2ab2e4;background-image:-moz-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.hoverColor + "),to(#1dade2));background-image:-webkit-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-o-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:linear-gradient(to bottom,"
            + t.hoverColor + ",#1dade2);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff33b5e5',endColorstr='#ff1dade2',GradientType=0)}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;background-color:#2ab2e4;background-image:-moz-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.hoverColor + "),to(#1dade2));background-image:-webkit-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-o-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:linear-gradient(to bottom,"
            + t.hoverColor + ",#1dade2);background-repeat:repeat-x;outline:0;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff33b5e5',endColorstr='#ff1dade2',GradientType=0)}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#adafae}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;cursor:default;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open{*z-index:1000}.open>.dropdown-menu{display:block}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid #000;content:''}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}.dropdown-submenu{position:relative}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:-6px;margin-left:-1px;-webkit-border-radius:0 6px 6px 6px;-moz-border-radius:0 6px 6px 6px;border-radius:0 6px 6px 6px}.dropdown-submenu:hover>.dropdown-menu{display:block}.dropup .dropdown-submenu>.dropdown-menu{top:auto;bottom:0;margin-top:0;margin-bottom:-2px;-webkit-border-radius:5px 5px 5px 0;-moz-border-radius:5px 5px 5px 0;border-radius:5px 5px 5px 0}.dropdown-submenu>a:after{display:block;float:right;width:0;height:0;margin-top:5px;margin-right:-10px;border-color:transparent;border-left-color:#000;border-style:solid;border-width:5px 0 5px 5px;content:' '}.dropdown-submenu:hover>a:after{border-left-color:#fff}.dropdown-submenu.pull-left{float:none}.dropdown-submenu.pull-left>.dropdown-menu{left:-100%;margin-left:10px;-webkit-border-radius:6px 0 6px 6px;-moz-border-radius:6px 0 6px 6px;border-radius:6px 0 6px 6px}.dropdown .dropdown-menu .nav-header{padding-right:20px;padding-left:20px}.typeahead{z-index:1051;margin-top:2px;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.well{min-height:20px;padding:0!important;margin-bottom:2px!important;background-color:"
            + t.wellBackgroundColor + ";border:0!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;border-radius:0!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-large{padding:24px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.well-small{padding:9px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.fade{opacity:0;-webkit-transition:opacity .15s linear;-moz-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;-moz-transition:height .35s ease;-o-transition:height .35s ease;transition:height .35s ease}.collapse.in{height:auto}.close{float:right;font-size:20px;font-weight:bold;line-height:20px;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.4;filter:alpha(opacity=40)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.btn{display:inline-block;*display:inline;padding:4px 12px;margin-bottom:0;*margin-left:.3em;font-size:14px;line-height:20px;color:#222;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,0.75);vertical-align:middle;cursor:pointer;background-color:#616161;*background-color:#595959;background-image:-moz-linear-gradient(top,#666,#595959);background-image:-webkit-gradient(linear,0 0,0 100%,from(#666),to(#595959));background-image:-webkit-linear-gradient(top,#666,#595959);background-image:-o-linear-gradient(top,#666,#595959);background-image:linear-gradient(to bottom,#666,#595959);background-repeat:repeat-x;border:1px solid rgba(0,0,0,0);*border:0;border-color:#595959 #595959 #333;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);border-bottom-color:rgba(0,0,0,0);-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff666666',endColorstr='#ff595959',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);*zoom:1}" +
            ".btn,.btn:hover{text-shadow:none;background-image:none;border:0;-webkit-box-shadow:-2px 2px 0 rgba(0,0,0,0.2);-moz-box-shadow:-2px 2px 0 rgba(0,0,0,0.2);box-shadow:-2px 2px 0 rgba(0,0,0,0.2)}.btn:hover,.btn:focus{color:#333;text-decoration:none;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn:hover,.btn:focus,.btn:active,.btn.active,.btn.disabled,.btn[disabled]{color:#222;background-color:#595959;*background-color:#4d4d4d}.btn:active,.btn.active{background-color:#404040 }.btn:first-child{*margin-left:0}.btn:hover,.btn:focus{color:#222;text-decoration:none;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)}.btn.disabled,.btn[disabled]{cursor:default;background-image:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.btn-large{padding:11px 19px;font-size:17.5px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.btn-large [class^='icon-'],.btn-large [class*=' icon-']{margin-top:4px}.btn-small{padding:2px 10px;font-size:11.9px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.btn-small [class^='icon-'],.btn-small [class*=' icon-']{margin-top:0}.btn-mini [class^='icon-'],.btn-mini [class*=' icon-']{margin-top:-1px}.btn-mini{padding:0 6px;font-size:10.5px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.btn-block{display:block;width:100%;padding-right:0;padding-left:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.btn-block+.btn-block{margin-top:5px}input[type='submit'].btn-block,input[type='reset'].btn-block,input[type='button'].btn-block{width:100%}.btn-primary.active,.btn-warning.active,.btn-danger.active,.btn-success.active,.btn-info.active,.btn-inverse.active{color:rgba(255,255,255,0.75)}.btn-primary{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#008ab8;*background-color:#007399;background-image:-moz-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.infoColor + "),to(#007399));background-image:-webkit-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-o-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:linear-gradient(to bottom,"
            + t.infoColor + ",#007399);background-repeat:repeat-x;border-color:#007399 #007399 #00394d;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0099cc',endColorstr='#ff007399',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled]{color:#fff;background-color:#007399;*background-color:#006080}.btn-primary:active,.btn-primary.active{background-color:#004d66 }.btn-warning{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#ff9d2e;*background-color:#f80;background-image:-moz-linear-gradient(top,#ffac4d,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffac4d),to(#f80));background-image:-webkit-linear-gradient(top,#ffac4d,#f80);background-image:-o-linear-gradient(top,#ffac4d,#f80);background-image:linear-gradient(to bottom,#ffac4d,#f80);background-repeat:repeat-x;border-color:#f80 #f80 #b35f00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffac4d',endColorstr='#ffff8800',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.btn-warning.disabled,.btn-warning[disabled]{color:#fff;background-color:#f80;*background-color:#e67a00}.btn-warning:active,.btn-warning.active{background-color:#cc6d00 }.btn-danger{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#eb0000;*background-color:"
            + t.errorColor + ";background-image:-moz-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#f00),to("
            + t.errorColor + "));background-image:-webkit-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-o-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:linear-gradient(to bottom,#f00,"
            + t.errorColor + ");background-repeat:repeat-x;border-color:"
            + t.errorColor + " "
            + t.errorColor + " #800000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff0000',endColorstr='#ffcc0000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled]{color:#fff;background-color:"
            + t.errorColor + ";*background-color:#b30000}.btn-danger:active,.btn-danger.active{background-color:#900 }.btn-success{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#7ab800;*background-color:"
            + t.successColor + ";background-image:-moz-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#8c0),to("
            + t.successColor + "));background-image:-webkit-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-o-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:linear-gradient(to bottom,#8c0,"
            + t.successColor + ");background-repeat:repeat-x;border-color:"
            + t.successColor + " "
            + t.successColor + " #334d00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff88cc00',endColorstr='#ff669900',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.btn-success.disabled,.btn-success[disabled]{color:#fff;background-color:"
            + t.successColor + ";*background-color:#558000}.btn-success:active,.btn-success.active{background-color:#460 }.btn-info{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#292929;*background-color:#191919;background-image:-moz-linear-gradient(top,#333,#191919);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#191919));background-image:-webkit-linear-gradient(top,#333,#191919);background-image:-o-linear-gradient(top,#333,#191919);background-image:linear-gradient(to bottom,#333,#191919);background-repeat:repeat-x;border-color:#191919 #191919 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff333333',endColorstr='#ff191919',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.btn-info.disabled,.btn-info[disabled]{color:#fff;background-color:#191919;*background-color:#0d0d0d}.btn-info:active,.btn-info.active{background-color:#000 }.btn-inverse{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#9f3fcf;*background-color:"
            + t.inverseColor + ";background-image:-moz-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#a347d1),to("
            + t.inverseColor + "));background-image:-webkit-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-o-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:linear-gradient(to bottom,#a347d1,"
            + t.inverseColor + ");background-repeat:repeat-x;border-color:"
            + t.inverseColor + " "
            + t.inverseColor + " #6b248f;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffa347d1',endColorstr='#ff9933cc',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-inverse:hover,.btn-inverse:focus,.btn-inverse:active,.btn-inverse.active,.btn-inverse.disabled,.btn-inverse[disabled]{color:#fff;background-color:"
            + t.inverseColor + ";*background-color:#8a2eb8}.btn-inverse:active,.btn-inverse.active{background-color:#7a29a3}button.btn,input[type='submit'].btn{*padding-top:3px;*padding-bottom:3px}button.btn::-moz-focus-inner,input[type='submit'].btn::-moz-focus-inner{padding:0;border:0}button.btn.btn-large,input[type='submit'].btn.btn-large{*padding-top:7px;*padding-bottom:7px}button.btn.btn-small,input[type='submit'].btn.btn-small{*padding-top:3px;*padding-bottom:3px}button.btn.btn-mini,input[type='submit'].btn.btn-mini{*padding-top:1px;*padding-bottom:1px}.btn-link,.btn-link:active,.btn-link[disabled]{background-color:transparent;background-image:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.btn-link{color:"
            + t.hoverColor + ";cursor:pointer;border-color:transparent;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-link:hover,.btn-link:focus{color:#fff;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,.btn-link[disabled]:focus{color:#222;text-decoration:none}.btn-group{position:relative;display:inline-block;*display:inline;*margin-left:.3em;font-size:0;white-space:nowrap;vertical-align:middle;*zoom:1}.btn-group:first-child{*margin-left:0}.btn-group+.btn-group{margin-left:5px}.btn-toolbar{margin-top:10px;margin-bottom:10px;font-size:0}.btn-toolbar>.btn+.btn,.btn-toolbar>.btn-group+.btn,.btn-toolbar>.btn+.btn-group{margin-left:5px}.btn-group>.btn{position:relative;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-group>.btn+.btn{margin-left:-1px}.btn-group>.btn,.btn-group>.dropdown-menu,.btn-group>.popover{font-size:14px}.btn-group>.btn-mini{font-size:10.5px}.btn-group>.btn-small{font-size:11.9px}.btn-group>.btn-large{font-size:17.5px}.btn-group>.btn:first-child{margin-left:0;-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px;-moz-border-radius-topleft:4px}.btn-group>.btn:last-child,.btn-group>.dropdown-toggle{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px}.btn-group>.btn.large:first-child{margin-left:0;-webkit-border-bottom-left-radius:6px;border-bottom-left-radius:6px;-webkit-border-top-left-radius:6px;border-top-left-radius:6px;-moz-border-radius-bottomleft:6px;-moz-border-radius-topleft:6px}.btn-group>.btn.large:last-child,.btn-group>.large.dropdown-toggle{-webkit-border-top-right-radius:6px;border-top-right-radius:6px;-webkit-border-bottom-right-radius:6px;border-bottom-right-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px}.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active{z-index:2}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{*padding-top:5px;padding-right:8px;*padding-bottom:5px;padding-left:8px;-webkit-box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05)}.btn-group>.btn-mini+.dropdown-toggle{*padding-top:2px;padding-right:5px;*padding-bottom:2px;padding-left:5px}.btn-group>.btn-small+.dropdown-toggle{*padding-top:5px;*padding-bottom:4px}.btn-group>.btn-large+.dropdown-toggle{*padding-top:7px;padding-right:12px;*padding-bottom:7px;padding-left:12px}.btn-group.open .dropdown-toggle{background-image:none;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)}.btn-group.open .btn.dropdown-toggle{background-color:#595959}.btn-group.open .btn-primary.dropdown-toggle{background-color:#007399}.btn-group.open .btn-warning.dropdown-toggle{background-color:#f80}.btn-group.open .btn-danger.dropdown-toggle{background-color:"
            + t.errorColor + "}.btn-group.open .btn-success.dropdown-toggle{background-color:"
            + t.successColor + "}.btn-group.open .btn-info.dropdown-toggle{background-color:#191919}.btn-group.open .btn-inverse.dropdown-toggle{background-color:"
            + t.inverseColor + "}.btn .caret{margin-top:8px;margin-left:0}.btn-large .caret{margin-top:6px}.btn-large .caret{border-top-width:5px;border-right-width:5px;border-left-width:5px}.btn-mini .caret,.btn-small .caret{margin-top:8px}.dropup .btn-large .caret{border-bottom-width:5px}.btn-primary .caret,.btn-warning .caret,.btn-danger .caret,.btn-info .caret,.btn-success .caret,.btn-inverse .caret{border-top-color:#fff;border-bottom-color:#fff}.btn-group-vertical{display:inline-block;*display:inline;*zoom:1}.btn-group-vertical>.btn{display:block;float:none;max-width:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-group-vertical>.btn+.btn{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:first-child{-webkit-border-radius: "
            + t.radius + " 4px 0 0;-moz-border-radius: "
            + t.radius + " 4px 0 0;border-radius: "
            + t.radius + " 4px 0 0}.btn-group-vertical>.btn:last-child{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.btn-group-vertical>.btn-large:first-child{-webkit-border-radius:6px 6px 0 0;-moz-border-radius:6px 6px 0 0;border-radius:6px 6px 0 0}.btn-group-vertical>.btn-large:last-child{-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px}.alert{padding:8px 35px 8px 14px;margin-bottom:20px;text-shadow:0 1px 0 rgba(255,255,255,0.5);background-color:#eee;border:1px solid transparent;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.alert,.alert h4{color:#a47e3c}.alert h4{margin:0}.alert .close{position:relative;top:-2px;right:-21px;line-height:20px}.alert-success{color:"
            + t.badgeSuccess + ";background-color:#eee;border-color:#e1e1e1}.alert-success h4{color:"
            + t.badgeSuccess + "}.alert-danger,.alert-error{color:#b94a48;background-color:#eee;border-color:#e6e6e6}.alert-danger h4,.alert-error h4{color:#b94a48}.alert-info{color:"
            + t.infoColor + ";background-color:#eee;border-color:#dcdcdc}.alert-info h4{color:"
            + t.infoColor + "}.alert-block{padding-top:14px;padding-bottom:14px}.alert-block>p,.alert-block>ul{margin-bottom:0}.alert-block p+p{margin-top:5px}.nav{margin-bottom:20px;margin-left:0;list-style:none}.nav>li>a{display:block}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li>a>img{max-width:none}.nav>.pull-right{float:right}.nav-header{display:block;padding:3px 15px;font-size:11px;font-weight:bold;line-height:20px;color:#adafae;text-shadow:0 1px 0 rgba(255,255,255,0.5);text-transform:uppercase}.nav li+.nav-header{margin-top:9px}.nav-list{padding-right:15px;padding-left:15px;margin-bottom:0}.nav-list>li>a,.nav-list .nav-header{margin-right:-15px;margin-left:-15px;text-shadow:0 1px 0 rgba(255,255,255,0.5)}.nav-list>li>a{padding:3px 15px}.nav-list>.active>a,.nav-list>.active>a:hover,.nav-list>.active>a:focus{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.2);background-color:"
            + t.hoverColor + "}.nav-list [class^='icon-'],.nav-list [class*=' icon-']{margin-right:2px}.nav-list .divider{*width:100%;height:1px;margin:9px 1px;*margin:-5px 0 5px;overflow:hidden;background-color:#e5e5e5;border-bottom:1px solid #fff}.nav-tabs,.nav-pills{*zoom:1}.nav-tabs:before,.nav-pills:before,.nav-tabs:after,.nav-pills:after{display:table;line-height:0;content:''}.nav-tabs:after,.nav-pills:after{clear:both}.nav-tabs>li,.nav-pills>li{float:left}.nav-tabs>li>a,.nav-pills>li>a{padding-right:12px;padding-left:12px;margin-right:2px;line-height:14px}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{margin-bottom:-1px}.nav-tabs>li>a{padding-top:8px;padding-bottom:8px;line-height:20px;border:1px solid transparent;-webkit-border-radius: "
            + t.radius + " 4px 0 0;-moz-border-radius: "
            + t.radius + " 4px 0 0;border-radius: "
            + t.radius + " 4px 0 0}.nav-tabs>li>a:hover,.nav-tabs>li>a:focus{border-color:#eee #eee #ddd}.nav-tabs>.active>a,.nav-tabs>.active>a:hover,.nav-tabs>.active>a:focus{color:"
            + t.bodyFontColor + ";cursor:default;background-color:"
            + t.bodyGradientFromColor + ";border:1px solid #ddd;border-bottom-color:transparent}.nav-pills>li>a{padding-top:8px;padding-bottom:8px;margin-top:2px;margin-bottom:2px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.nav-pills>.active>a,.nav-pills>.active>a:hover,.nav-pills>.active>a:focus{color:#fff;background-color:"
            + t.hoverColor + "}.nav-stacked>li{float:none}.nav-stacked>li>a{margin-right:0}.nav-tabs.nav-stacked{border-bottom:0}.nav-tabs.nav-stacked>li>a{border:1px solid #ddd;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}"
            + ".nav-tabs.nav-stacked>li>a:hover,.nav-tabs.nav-stacked>li>a:focus{z-index:2;border-color:#ddd}.nav-pills.nav-stacked>li>a{margin-bottom:3px}.nav-pills.nav-stacked>li:last-child>a{margin-bottom:1px}.nav-tabs .dropdown-menu{-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px}.nav-pills .dropdown-menu{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.nav .dropdown-toggle .caret{margin-top:6px;border-top-color:"
            + t.hoverColor + ";border-bottom-color:"
            + t.hoverColor + "}.nav .dropdown-toggle:hover .caret,.nav .dropdown-toggle:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.nav-tabs .dropdown-toggle .caret{margin-top:8px}.nav .active .dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.nav-tabs .active .dropdown-toggle .caret{border-top-color:"
            + t.bodyFontColor + ";border-bottom-color:"
            + t.bodyFontColor + "}.nav>.dropdown.active>a:hover,.nav>.dropdown.active>a:focus{cursor:pointer}.nav-tabs .open .dropdown-toggle,.nav-pills .open .dropdown-toggle,.nav>li.dropdown.open.active>a:hover,.nav>li.dropdown.open.active>a:focus{color:#fff;background-color:#adafae;border-color:#adafae}.nav li.dropdown.open .caret,.nav li.dropdown.open.active .caret,.nav li.dropdown.open a:hover .caret,.nav li.dropdown.open a:focus .caret{border-top-color:#fff;border-bottom-color:#fff;opacity:1;filter:alpha(opacity=100)}.tabs-stacked .open>a:hover,.tabs-stacked .open>a:focus{border-color:#adafae}.tabbable{*zoom:1}.tabbable:before,.tabbable:after{display:table;line-height:0;content:''}.tabbable:after{clear:both}.tab-content{overflow:auto}.tabs-below>.nav-tabs,.tabs-right>.nav-tabs,.tabs-left>.nav-tabs{border-bottom:0}.tab-content>.tab-pane,.pill-content>.pill-pane{display:none}.tab-content>.active,.pill-content>.active{display:block}.tabs-below>.nav-tabs{border-top:1px solid #ddd}.tabs-below>.nav-tabs>li{margin-top:-1px;margin-bottom:0}.tabs-below>.nav-tabs>li>a{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.tabs-below>.nav-tabs>li>a:hover,.tabs-below>.nav-tabs>li>a:focus{border-top-color:#ddd;border-bottom-color:transparent}.tabs-below>.nav-tabs>.active>a,.tabs-below>.nav-tabs>.active>a:hover,.tabs-below>.nav-tabs>.active>a:focus{border-color:transparent #ddd #ddd #ddd}.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li{float:none}.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a{min-width:74px;margin-right:0;margin-bottom:3px}.tabs-left>.nav-tabs{float:left;margin-right:19px;border-right:1px solid #ddd}.tabs-left>.nav-tabs>li>a{margin-right:-1px;-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.tabs-left>.nav-tabs>li>a:hover,.tabs-left>.nav-tabs>li>a:focus{border-color:#eee #ddd #eee #eee}.tabs-left>.nav-tabs .active>a,.tabs-left>.nav-tabs .active>a:hover,.tabs-left>.nav-tabs .active>a:focus{border-color:#ddd transparent #ddd #ddd;*border-right-color:#fff}.tabs-right>.nav-tabs{float:right;margin-left:19px;border-left:1px solid #ddd}.tabs-right>.nav-tabs>li>a{margin-left:-1px;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.tabs-right>.nav-tabs>li>a:hover,.tabs-right>.nav-tabs>li>a:focus{border-color:#eee #eee #eee #ddd}.tabs-right>.nav-tabs .active>a,.tabs-right>.nav-tabs .active>a:hover,.tabs-right>.nav-tabs .active>a:focus{border-color:#ddd #ddd #ddd transparent;*border-left-color:#fff}.nav>.disabled>a{color:#adafae}.nav>.disabled>a:hover,.nav>.disabled>a:focus{text-decoration:none;cursor:default;background-color:transparent}.navbar{*position:relative;*z-index:2;margin-bottom:0;overflow:visible}.navbar-inner{min-height:24px;padding:0px 0px 2px 0px !important;font-size:1.0;line-height:24px;color:#fff;background-color:"
            + t.navBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.navBackgroundColor + "),to("
            + t.navBackgroundColor + "));background-image:-webkit-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:-o-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:linear-gradient(to bottom,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-repeat:repeat-x;border:1px solid #000;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff020202',endColorstr='#ff020202',GradientType=0);*zoom:1;-webkit-box-shadow:0 1px 4px rgba(0,0,0,0.065);-moz-box-shadow:0 1px 4px rgba(0,0,0,0.065);box-shadow:0 1px 4px rgba(0,0,0,0.065)}.navbar-inner:before,.navbar-inner:after{display:table;line-height:0;content:''}.navbar-inner:after{clear:both}.navbar .container{width:auto}.nav-collapse.collapse{height:auto;overflow:visible}.navbar .brand{display:block;float:left;padding:15px 20px 15px;margin-left:-20px;font-size:20px;font-weight:200;color:#adafae;text-shadow:0 1px 0 "
            + t.navBackgroundColor + "}.navbar .brand:hover,.navbar .brand:focus{text-decoration:none}.navbar-text{margin-bottom:0;line-height:50px;color:#adafae}.navbar-link{color:#adafae}.navbar-link:hover,.navbar-link:focus{color:#fff}.navbar .divider-vertical{height:50px;margin:0 9px;border-right:1px solid "
            + t.navBackgroundColor + ";border-left:1px solid "
            + t.navBackgroundColor + "}.navbar .btn,.navbar .btn-group{margin-top:10px}.navbar .btn-group .btn,.navbar .input-prepend .btn,.navbar .input-append .btn,.navbar .input-prepend .btn-group,.navbar .input-append .btn-group{margin-top:0}.navbar-form{margin-bottom:0;*zoom:1}.navbar-form:before,.navbar-form:after{display:table;line-height:0;content:''}.navbar-form:after{clear:both}.navbar-form input,.navbar-form select,.navbar-form .radio,.navbar-form .checkbox{margin-top:10px}.navbar-form input,.navbar-form select,.navbar-form .btn{display:inline-block;margin-bottom:0}.navbar-form input[type='image'],.navbar-form input[type='checkbox'],.navbar-form input[type='radio']{margin-top:3px}.navbar-form .input-append,.navbar-form .input-prepend{margin-top:5px;white-space:nowrap}.navbar-form .input-append input,.navbar-form .input-prepend input{margin-top:0}.navbar-search{position:relative;float:left;margin-top:10px;margin-bottom:0}.navbar-search .search-query{padding:4px 14px;margin-bottom:0;font-family:'Droid Sans',sans-serif;font-size:13px;font-weight:normal;line-height:1;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.navbar-static-top{position:static;margin-bottom:0}.navbar-static-top .navbar-inner{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030;margin-bottom:0}.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner{border-width:0 0 1px}.navbar-fixed-bottom .navbar-inner{border-width:1px 0 0}.navbar-fixed-top .navbar-inner,.navbar-fixed-bottom .navbar-inner{padding-right:0;padding-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container{width:940px}.navbar-fixed-top{top:0}.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner{-webkit-box-shadow:0 1px 10px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 10px rgba(0,0,0,0.1);box-shadow:0 1px 10px rgba(0,0,0,0.1)}.navbar-fixed-bottom{bottom:0}.navbar-fixed-bottom .navbar-inner{-webkit-box-shadow:0 -1px 10px rgba(0,0,0,0.1);-moz-box-shadow:0 -1px 10px rgba(0,0,0,0.1);box-shadow:0 -1px 10px rgba(0,0,0,0.1)}.navbar .nav{position:relative;left:0;display:block;float:left;margin:0 10px 0 0}.navbar .nav.pull-right{float:right;margin-right:0}.navbar .nav>li{float:left}.navbar .nav>li>a{float:none;padding:15px 15px 15px;color:#adafae;text-decoration:none;text-shadow:0 1px 0 "
            + t.navBackgroundColor + "}.navbar .nav .dropdown-toggle .caret{margin-top:8px}.navbar .nav>li>a:focus,.navbar .nav>li>a:hover{color:#fff;text-decoration:none;background-color:transparent}.navbar .nav>.active>a,.navbar .nav>.active>a:hover,.navbar .nav>.active>a:focus{color:#fff;text-decoration:none;background-color:"
            + t.navBackgroundColor + ";-webkit-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);-moz-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);box-shadow:inset 0 3px 8px rgba(0,0,0,0.125)}.navbar .btn-navbar{display:none;float:right;padding:7px 10px;margin-right:5px;margin-left:5px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#000;*background-color:#000;background-image:-moz-linear-gradient(top,#000,#000);background-image:-webkit-gradient(linear,0 0,0 100%,from(#000),to(#000));background-image:-webkit-linear-gradient(top,#000,#000);background-image:-o-linear-gradient(top,#000,#000);background-image:linear-gradient(to bottom,#000,#000);background-repeat:repeat-x;border-color:#000 #000 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff000000',endColorstr='#ff000000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075)}.navbar .btn-navbar:hover,.navbar .btn-navbar:focus,.navbar .btn-navbar:active,.navbar .btn-navbar.active,.navbar .btn-navbar.disabled,.navbar .btn-navbar[disabled]{color:#fff;background-color:#000;*background-color:#000}.navbar .btn-navbar:active,.navbar .btn-navbar.active{background-color:#000 }.navbar .btn-navbar .icon-bar{display:block;width:18px;height:2px;background-color:#f5f5f5;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.25);-moz-box-shadow:0 1px 0 rgba(0,0,0,0.25);box-shadow:0 1px 0 rgba(0,0,0,0.25)}.btn-navbar .icon-bar+.icon-bar{margin-top:3px}.navbar .nav>li>.dropdown-menu:before{position:absolute;top:-7px;left:9px;display:inline-block;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-left:7px solid transparent;border-bottom-color:rgba(0,0,0,0.2);content:''}.navbar .nav>li>.dropdown-menu:after{position:absolute;top:-6px;left:10px;display:inline-block;border-right:6px solid transparent;border-bottom:6px solid "
            + t.wellBackgroundColor + ";border-left:6px solid transparent;content:''}.navbar-fixed-bottom .nav>li>.dropdown-menu:before{top:auto;bottom:-7px;border-top:7px solid #ccc;border-bottom:0;border-top-color:rgba(0,0,0,0.2)}.navbar-fixed-bottom .nav>li>.dropdown-menu:after{top:auto;bottom:-6px;border-top:6px solid "
            + t.wellBackgroundColor + ";border-bottom:0}.navbar .nav li.dropdown>a:hover .caret,.navbar .nav li.dropdown>a:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar .nav li.dropdown.open>.dropdown-toggle,.navbar .nav li.dropdown.active>.dropdown-toggle,.navbar .nav li.dropdown.open.active>.dropdown-toggle{color:#fff;background-color:"
            + t.navBackgroundColor + "}.navbar .nav li.dropdown>.dropdown-toggle .caret{border-top-color:#adafae;border-bottom-color:#adafae}.navbar .nav li.dropdown.open>.dropdown-toggle .caret,.navbar .nav li.dropdown.active>.dropdown-toggle .caret,.navbar .nav li.dropdown.open.active>.dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar .pull-right>li>.dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right{right:0;left:auto}.navbar .pull-right>li>.dropdown-menu:before,.navbar .nav>li>.dropdown-menu.pull-right:before{right:12px;left:auto}.navbar .pull-right>li>.dropdown-menu:after,.navbar .nav>li>.dropdown-menu.pull-right:after{right:13px;left:auto}.navbar .pull-right>li>.dropdown-menu .dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right .dropdown-menu{right:100%;left:auto;margin-right:-1px;margin-left:0;-webkit-border-radius:6px 0 6px 6px;-moz-border-radius:6px 0 6px 6px;border-radius:6px 0 6px 6px}.navbar-inverse .navbar-inner{background-color:"
            + t.navBarInnerBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.navBarInnerBackgroundColor + "),to("
            + t.navBarInnerBackgroundColor + "));background-image:-webkit-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:-o-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:linear-gradient(to bottom,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-repeat:repeat-x;border-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff252a30',endColorstr='#ff252a30',GradientType=0)}.navbar-inverse .brand,.navbar-inverse .nav>li>a{color:#adafae;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.navbar-inverse .brand:hover,.navbar-inverse .nav>li>a:hover,.navbar-inverse .brand:focus,.navbar-inverse .nav>li>a:focus{color:#fff}.navbar-inverse .brand{color:#adafae}.navbar-inverse .navbar-text{color:#adafae}.navbar-inverse .nav>li>a:focus,.navbar-inverse .nav>li>a:hover{color:#fff;background-color:#242a31}.navbar-inverse .nav .active>a,.navbar-inverse .nav .active>a:hover,.navbar-inverse .nav .active>a:focus{color:#fff;background-color:#242a31}.navbar-inverse .navbar-link{color:#adafae}.navbar-inverse .navbar-link:hover,.navbar-inverse .navbar-link:focus{color:#fff}.navbar-inverse .divider-vertical{border-right-color:"
            + t.navBarInnerBackgroundColor + ";border-left-color:"
            + t.navBarInnerBackgroundColor + "}.navbar-inverse .nav li.dropdown.open>.dropdown-toggle,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle{color:#fff;background-color:#242a31}.navbar-inverse .nav li.dropdown>a:hover .caret,.navbar-inverse .nav li.dropdown>a:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar-inverse .nav li.dropdown>.dropdown-toggle .caret{border-top-color:#adafae;border-bottom-color:#adafae}.navbar-inverse .nav li.dropdown.open>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar-inverse .navbar-search .search-query{color:#fff;background-color:#5d6978;border-color:"
            + t.navBarInnerBackgroundColor + ";-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.navbar-inverse .navbar-search .search-query:-moz-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query:-ms-input-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query::-webkit-input-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query:focus,.navbar-inverse .navbar-search .search-query.focused{padding:5px 15px;color:#222;text-shadow:0 1px 0 #fff;background-color:#fff;border:0;outline:0;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.15);-moz-box-shadow:0 0 3px rgba(0,0,0,0.15);box-shadow:0 0 3px rgba(0,0,0,0.15)}.navbar-inverse .btn-navbar{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#1a1d22;*background-color:#1a1d22;background-image:-moz-linear-gradient(top,#1a1d22,#1a1d22);background-image:-webkit-gradient(linear,0 0,0 100%,from(#1a1d22),to(#1a1d22));background-image:-webkit-linear-gradient(top,#1a1d22,#1a1d22);background-image:-o-linear-gradient(top,#1a1d22,#1a1d22);background-image:linear-gradient(to bottom,#1a1d22,#1a1d22);background-repeat:repeat-x;border-color:#1a1d22 #1a1d22 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1a1d22',endColorstr='#ff1a1d22',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.navbar-inverse .btn-navbar:hover,.navbar-inverse .btn-navbar:focus,.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active,.navbar-inverse .btn-navbar.disabled,.navbar-inverse .btn-navbar[disabled]{color:#fff;background-color:#1a1d22;*background-color:#0f1113}.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active{background-color:#040405}.breadcrumb{padding:8px 15px;margin:0 0 20px;list-style:none;background-color:#f5f5f5;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.breadcrumb>li{display:inline-block;*display:inline;text-shadow:0 1px 0 #fff;*zoom:1}.breadcrumb>li>.divider{padding:0 5px;color:#ccc}.breadcrumb>.active{color:#adafae}.pagination{margin:20px 0}.pagination ul{display:inline-block;*display:inline;margin-bottom:0;margin-left:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";*zoom:1;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,0.05);box-shadow:0 1px 2px rgba(0,0,0,0.05)}.pagination ul>li{display:inline}.pagination ul>li>a,.pagination ul>li>span{float:left;padding:4px 12px;line-height:20px;text-decoration:none;background-color:"
            + t.bodyGradientFromColor + ";border:1px solid transparent;border-left-width:0}.pagination ul>li>a:hover,.pagination ul>li>a:focus,.pagination ul>.active>a,.pagination ul>.active>span{background-color:"
            + t.hoverColor + "}.pagination ul>.active>a,.pagination ul>.active>span{color:#adafae;cursor:default}.pagination ul>.disabled>span,.pagination ul>.disabled>a,.pagination ul>.disabled>a:hover,.pagination ul>.disabled>a:focus{color:#adafae;cursor:default;background-color:transparent}.pagination ul>li:first-child>a,.pagination ul>li:first-child>span{border-left-width:1px;-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px;-moz-border-radius-topleft:4px}.pagination ul>li:last-child>a,.pagination ul>li:last-child>span{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px}.pagination-centered{text-align:center}.pagination-right{text-align:right}.pagination-large ul>li>a,.pagination-large ul>li>span{padding:11px 19px;font-size:17.5px}.pagination-large ul>li:first-child>a,.pagination-large ul>li:first-child>span{-webkit-border-bottom-left-radius:6px;border-bottom-left-radius:6px;-webkit-border-top-left-radius:6px;border-top-left-radius:6px;-moz-border-radius-bottomleft:6px;-moz-border-radius-topleft:6px}.pagination-large ul>li:last-child>a,.pagination-large ul>li:last-child>span{-webkit-border-top-right-radius:6px;border-top-right-radius:6px;-webkit-border-bottom-right-radius:6px;border-bottom-right-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px}.pagination-mini ul>li:first-child>a,.pagination-small ul>li:first-child>a,.pagination-mini ul>li:first-child>span,.pagination-small ul>li:first-child>span{-webkit-border-bottom-left-radius:3px;border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-top-left-radius:3px;-moz-border-radius-bottomleft:3px;-moz-border-radius-topleft:3px}.pagination-mini ul>li:last-child>a,.pagination-small ul>li:last-child>a,.pagination-mini ul>li:last-child>span,.pagination-small ul>li:last-child>span{-webkit-border-top-right-radius:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;border-bottom-right-radius:3px;-moz-border-radius-topright:3px;-moz-border-radius-bottomright:3px}.pagination-small ul>li>a,.pagination-small ul>li>span{padding:2px 10px;font-size:11.9px}.pagination-mini ul>li>a,.pagination-mini ul>li>span{padding:0 6px;font-size:10.5px}.pager{margin:20px 0;text-align:center;list-style:none;*zoom:1}.pager:before,.pager:after{display:table;line-height:0;content:''}.pager:after{clear:both}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#f5f5f5}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#adafae;cursor:default;background-color:#fff}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop,.modal-backdrop.fade.in{opacity:.8;filter:alpha(opacity=80)}.modal{position:fixed;top:10%;left:50%;z-index:1050;width:560px;margin-left:-280px;background-color:#fff;border:1px solid "
            + t.bodyFontColor + ";border:1px solid rgba(0,0,0,0.3);*border:1px solid "
            + t.bodyFontColor + ";-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;outline:0;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3);-webkit-background-clip:padding-box;-moz-background-clip:padding-box;background-clip:padding-box}.modal.fade{top:-25%;-webkit-transition:opacity .3s linear,top .3s ease-out;-moz-transition:opacity .3s linear,top .3s ease-out;-o-transition:opacity .3s linear,top .3s ease-out;transition:opacity .3s linear,top .3s ease-out}.modal.fade.in{top:10%}.modal-header{padding:9px 15px;border-bottom:1px solid #eee}.modal-header .close{margin-top:2px}.modal-header h3{margin:0;line-height:30px}.modal-body{position:relative;max-height:400px;padding:15px;overflow-y:auto}.modal-form{margin-bottom:0}.modal-footer{padding:14px 15px 15px;margin-bottom:0;text-align:right;background-color:#f5f5f5;border-top:1px solid #ddd;-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px;*zoom:1;-webkit-box-shadow:inset 0 1px 0 #fff;-moz-box-shadow:inset 0 1px 0 #fff;box-shadow:inset 0 1px 0 #fff}.modal-footer:before,.modal-footer:after{display:table;line-height:0;content:''}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.tooltip{position:absolute;z-index:1020;display:block;font-size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);visibility:visible}.tooltip.in{opacity:.8;filter:alpha(opacity=80)}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:8px;color:#fff;text-align:center;text-decoration:none;background-color:"
            + t.wellBackgroundColor + ";-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-top-color:"
            + t.wellBackgroundColor + ";border-width:5px 5px 0}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-right-color:"
            + t.wellBackgroundColor + ";border-width:5px 5px 5px 0}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-left-color:"
            + t.wellBackgroundColor + ";border-width:5px 0 5px 5px}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-bottom-color:"
            + t.wellBackgroundColor + ";border-width:0 5px 5px}.popover{position:absolute;top:0;left:0;z-index:1010;display:none;max-width:276px;padding:1px;text-align:left;white-space:normal;background-color:"
            + t.wellBackgroundColor + ";border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;font-weight:normal;line-height:18px;background-color:"
            + t.wellBackgroundColor + ";border-bottom:1px solid #070809;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover .arrow,.popover .arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover .arrow{border-width:11px}.popover .arrow:after{border-width:10px;content:''}.popover.top .arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:"
            + t.bodyFontColor + ";border-top-color:rgba(0,0,0,0.25);border-bottom-width:0}.popover.top .arrow:after{bottom:1px;margin-left:-10px;border-top-color:"
            + t.wellBackgroundColor + ";border-bottom-width:0}.popover.right .arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:"
            + t.bodyFontColor + ";border-right-color:rgba(0,0,0,0.25);border-left-width:0}.popover.right .arrow:after{bottom:-10px;left:1px;border-right-color:"
            + t.wellBackgroundColor + ";border-left-width:0}.popover.bottom .arrow{top:-11px;left:50%;margin-left:-11px;border-bottom-color:"
            + t.bodyFontColor + ";border-bottom-color:rgba(0,0,0,0.25);border-top-width:0}.popover.bottom .arrow:after{top:1px;margin-left:-10px;border-bottom-color:"
            + t.wellBackgroundColor + ";border-top-width:0}.popover.left .arrow{top:50%;right:-11px;margin-top:-11px;border-left-color:"
            + t.bodyFontColor + ";border-left-color:rgba(0,0,0,0.25);border-right-width:0}.popover.left .arrow:after{right:1px;bottom:-10px;border-left-color:"
            + t.wellBackgroundColor + ";border-right-width:0}.thumbnails{margin-left:-20px;list-style:none;*zoom:1}.thumbnails:before,.thumbnails:after{display:table;line-height:0;content:''}.thumbnails:after{clear:both}.row-fluid .thumbnails{margin-left:0}.thumbnails>li{float:left;margin-bottom:20px;margin-left:20px}.thumbnail{display:block;padding:4px;line-height:20px;border:1px solid #ddd;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.055);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.055);box-shadow:0 1px 3px rgba(0,0,0,0.055);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a.thumbnail:hover,a.thumbnail:focus{border-color:"
            + t.hoverColor + ";-webkit-box-shadow:0 1px 4px rgba(0,105,214,0.25);-moz-box-shadow:0 1px 4px rgba(0,105,214,0.25);box-shadow:0 1px 4px rgba(0,105,214,0.25)}.thumbnail>img{display:block;max-width:100%;margin-right:auto;margin-left:auto}.thumbnail .caption{padding:9px;color:"
            + t.bodyFontColor + "}.media,.media-body{overflow:hidden;*overflow:visible;zoom:1}.media,.media .media{margin-top:15px}.media:first-child{margin-top:0}.media-object{display:block}.media-heading{margin:0 0 5px}.media>.pull-left{margin-right:10px}.media>.pull-right{margin-left:10px}.media-list{margin-left:0;list-style:none}.label,.badge{display:inline-block;padding:2px 4px;font-size:"
            + t.fontSize + ";font-weight:bold;line-height:14px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);white-space:nowrap;vertical-align:baseline;background-color:#adafae}.label{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.badge{-webkit-border-radius:"
            + t.badgeRadius + ";-moz-border-radius:"
            + t.badgeRadius + ";border-radius:"
            + t.badgeRadius + "}.label:empty,.badge:empty{display:none}a.label:hover,a.label:focus,a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}.label-important,.badge-important{background-color:#b94a48}.label-important[href],.badge-important[href]{background-color:#953b39}.label-warning,.badge-warning{background-color:#f80}.label-warning[href],.badge-warning[href]{background-color:#cc6d00}.label-success,.badge-success{background-color:"
            + t.badgeSuccess + "}.label-success[href],.badge-success[href]{background-color:#356635}.label-info,.badge-info{border: 1px solid #fff;margin-bottom: 2px !important;background-color:"
            + t.infoColor + "}.label-info[href],.badge-info[href]{background-color:#007399}.label-inverse,.badge-inverse{background-color:#222}.label-inverse[href],.badge-inverse[href]{background-color:#080808}.btn .label,.btn .badge{position:relative;top:-1px}.btn-mini .label,.btn-mini .badge{top:0}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-moz-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-ms-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{margin-bottom:20px;overflow:hidden;background-color:#f7f7f7;background-image:-moz-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f5f5f5),to(#f9f9f9));background-image:-webkit-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-o-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:linear-gradient(to bottom,#f5f5f5,#f9f9f9);background-repeat:repeat-x;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress .bar{float:left;width:0;height:100%;font-size:12px;color:#fff;text-align:center;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#0e90d2;background-image:-moz-linear-gradient(top,#149bdf,#0480be);background-image:-webkit-gradient(linear,0 0,0 100%,from(#149bdf),to(#0480be));background-image:-webkit-linear-gradient(top,#149bdf,#0480be);background-image:-o-linear-gradient(top,#149bdf,#0480be);background-image:linear-gradient(to bottom,#149bdf,#0480be);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-moz-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:width .6s ease;-moz-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress .bar+.bar{-webkit-box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15);-moz-box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15)}.progress-striped .bar{background-color:#149bdf;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}.progress.active .bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-moz-animation:progress-bar-stripes 2s linear infinite;-ms-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-danger .bar,.progress .bar-danger{background-color:#dd514c;background-image:-moz-linear-gradient(top,#ee5f5b,#c43c35);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee5f5b),to(#c43c35));background-image:-webkit-linear-gradient(top,#ee5f5b,#c43c35);background-image:-o-linear-gradient(top,#ee5f5b,#c43c35);background-image:linear-gradient(to bottom,#ee5f5b,#c43c35);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b',endColorstr='#ffc43c35',GradientType=0)}.progress-danger.progress-striped .bar,.progress-striped .bar-danger{background-color:#ee5f5b;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-success .bar,.progress .bar-success{background-color:#5eb95e;background-image:-moz-linear-gradient(top,#62c462,#57a957);background-image:-webkit-gradient(linear,0 0,0 100%,from(#62c462),to(#57a957));background-image:-webkit-linear-gradient(top,#62c462,#57a957);background-image:-o-linear-gradient(top,#62c462,#57a957);background-image:linear-gradient(to bottom,#62c462,#57a957);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462',endColorstr='#ff57a957',GradientType=0)}.progress-success.progress-striped .bar,.progress-striped .bar-success{background-color:#62c462;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-info .bar,.progress .bar-info{background-color:#4bb1cf;background-image:-moz-linear-gradient(top,#5bc0de,#339bb9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#5bc0de),to(#339bb9));background-image:-webkit-linear-gradient(top,#5bc0de,#339bb9);background-image:-o-linear-gradient(top,#5bc0de,#339bb9);background-image:linear-gradient(to bottom,#5bc0de,#339bb9);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de',endColorstr='#ff339bb9',GradientType=0)}.progress-info.progress-striped .bar,.progress-striped .bar-info{background-color:#5bc0de;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-warning .bar,.progress .bar-warning{background-color:#ff9d2e;background-image:-moz-linear-gradient(top,#ffac4d,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffac4d),to(#f80));background-image:-webkit-linear-gradient(top,#ffac4d,#f80);background-image:-o-linear-gradient(top,#ffac4d,#f80);background-image:linear-gradient(to bottom,#ffac4d,#f80);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffac4d',endColorstr='#ffff8800',GradientType=0)}.progress-warning.progress-striped .bar,.progress-striped .bar-warning{background-color:#ffac4d;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.accordion{margin-top:0;margin-bottom:0;border-top:0}"
            + ".accordion-group{margin-bottom:0px;border:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.accordion-heading{border-bottom:0}.accordion-heading .accordion-toggle{display:block;padding:4px 4px;margin:0}.accordion-toggle{cursor:pointer}.accordion-inner{padding:5px 4px 0 4px;border-top:1px solid #e5e5e5}.carousel{position:relative;margin-bottom:0;line-height:1}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-moz-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;line-height:1}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:40%;left:15px;width:40px;height:40px;margin-top:-20px;font-size:60px;font-weight:100;line-height:30px;color:#fff;text-align:center;background:"
            + t.navBackgroundColor + ";border:3px solid #fff;-webkit-border-radius:23px;-moz-border-radius:23px;border-radius:23px;opacity:.5;filter:alpha(opacity=50)}.carousel-control.right{right:15px;left:auto}.carousel-control:hover,.carousel-control:focus{color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-indicators{position:absolute;top:15px;right:15px;z-index:5;margin:0;list-style:none}.carousel-indicators li{display:block;float:left;width:10px;height:10px;margin-left:5px;text-indent:-999px;background-color:#ccc;background-color:rgba(255,255,255,0.25);border-radius:5px}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:0;bottom:0;left:0;padding:15px;background:#222;background:rgba(0,0,0,0.75)}.carousel-caption h4,.carousel-caption p{line-height:20px;color:#fff}.carousel-caption h4{margin:0 0 5px}.carousel-caption p{margin-bottom:0}.hero-unit{padding:60px;margin-bottom:30px;font-size:18px;font-weight:200;line-height:30px;color:inherit;background-color:"
            + t.wellBackgroundColor + ";-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.hero-unit h1{margin-bottom:0;font-size:60px;line-height:1;letter-spacing:-1px;color:inherit}.hero-unit li{line-height:30px}.pull-right{float:right}.pull-left{float:left}.hide{display:none}.show{display:block}.invisible{visibility:hidden}.affix{position:fixed}label,input,button,select,textarea,.navbar .search-query:-moz-placeholder,.navbar .search-query::-webkit-input-placeholder{font-family:'Droid Sans',sans-serif;color:"
            + t.bodyFontColor + "}code,pre{background-color:#eee}blockquote{border-left:5px solid #222}blockquote.pull-right{border-right:5px solid #222}html{min-height:100%}body{min-height:100%;background-color: "
            + t.bodyBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.bodyGradientFromColor + "),to("
            + t.bodyGradientToColor + "));background-image:-webkit-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:-o-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:linear-gradient(to bottom,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff060606',endColorstr='#ff252a30',GradientType=0)}.page-header{border-bottom:1px solid "
            + t.tableBorderColor + "}hr{border-bottom:0}.navbar .navbar-inner{border-bottom:0px solid "
            + t.tableBorderColor + ";-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.navbar .brand{padding:15px 20px 15px;font-weight:normal;color:#eee;text-shadow:none}.navbar .nav>li>a{padding:15px 15px 14px;border-bottom:1px solid transparent}.navbar .nav>li>a:hover,.navbar .nav>.active>a,.navbar .nav>.active>a:hover{border-bottom:1px solid "
            + t.hoverColor + "}.navbar .nav>.active>a,.navbar .nav>.active>a:hover,.navbar .nav>.active>a:focus{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.navbar .navbar-text{padding:15px 15px 14px;margin-bottom:1px;line-height:inherit}.navbar .divider-vertical{margin:0;border-left:1px solid "
            + t.tableBorderColor + ";border-right-width:0}.navbar .search-query,.navbar .search-query:focus,.navbar .search-query.focused{line-height:normal;color:#adafae;text-shadow:none;background-color:#222;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.navbar .search-query:-moz-placeholder,.navbar .search-query:focus:-moz-placeholder,.navbar .search-query.focused:-moz-placeholder{color:"
            + t.bodyFontColor + "}.navbar .search-query:-ms-input-placeholder,.navbar .search-query:focus:-ms-input-placeholder,.navbar .search-query.focused:-ms-input-placeholder{color:"
            + t.bodyFontColor + "}.navbar .search-query::-webkit-input-placeholder,.navbar .search-query:focus::-webkit-input-placeholder,.navbar .search-query.focused::-webkit-input-placeholder{color:"
            + t.bodyFontColor + "}@media(max-width:979px){.navbar .nav-collapse .nav li>a{font-weight:normal;color:#eee;text-shadow:none;border:0}.navbar .nav-collapse .nav li>a:hover{background-color:"
            + t.hoverColor + ";border:0}.navbar .nav-collapse .nav .active>a{background-color:"
            + t.hoverColor + ";border:0}.navbar .nav-collapse .dropdown-menu a:hover{background-color:"
            + t.hoverColor + "}.navbar .nav-collapse .navbar-form,.navbar .nav-collapse .navbar-search{border-top:0;border-bottom:0}.navbar .nav-collapse .nav-header{color:rgba(128,128,128,0.6)}.navbar-inverse .nav-collapse .nav li>a:hover{background-color:#111}.navbar-inverse .nav-collapse .nav .active>a{background-color:#111}.navbar-inverse .nav-collapse .nav li.dropdown.open>.dropdown-toggle,.navbar-inverse .nav-collapse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav-collapse .nav li.dropdown.open.active>.dropdown-toggle{background-color:#111}}div.subnav{margin:0 1px;background-color:"
            + t.navBackgroundColor + ";background-image:none;border:0;border-bottom:1px solid "
            + t.tableBorderColor + "}div.subnav .nav>li>a,div.subnav .nav>li:first-child>a,div.subnav .nav>li:first-child>a:hover{padding:11px 12px;color:#adafae;background-color:"
            + t.navBackgroundColor + ";border:0}div.subnav .nav>li>a:hover,div.subnav .nav>li.active>a,div.subnav .nav>li.active>a:hover,div.subnav .nav>li:first-child>a:hover{padding:11px 12px;color:#fff;background:transparent;border:0;border-bottom:1px solid "
            + t.hoverColor + "}div.subnav .nav li.nav-header{text-shadow:none}div.subnav-fixed{top:50px;margin:0}.nav-tabs{border-bottom:1px solid "
            + t.tableBorderColor + "}.nav-tabs li>a:hover,.nav-tabs li.active>a,.nav-tabs li.active>a:hover{color:#fff;background-color:"
            + t.hoverColor + ";border-color:transparent}.nav-tabs li.disabled>a{color:"
            + t.bodyFontColor + "}.nav-tabs .open .dropdown-toggle{background-color:"
            + t.bodyGradientFromColor + ";border-color:transparent}.nav-pills li>a:hover{color:#fff;background-color:"
            + t.hoverColor + "}.nav-pills li.disabled>a{color:"
            + t.bodyFontColor + "}.nav-pills .open .dropdown-toggle{background-color:"
            + t.bodyGradientFromColor + "}.nav-pills .dropdown-menu li>a:hover{border:0}.nav-list li>a{text-shadow:none}.nav-list li>a:hover{color:#fff;background-color:"
            + t.hoverColor + "}.nav-list .nav-header{text-shadow:none}.nav-list .divider{background-color:transparent;border-bottom:1px solid "
            + t.tableBorderColor + "}.nav-stacked li>a{border:1px solid "
            + t.tableBorderColor + "!important}.nav-stacked li>a:hover,.nav-stacked li.active>a{color:#fff;background-color:"
            + t.hoverColor + "}.tabbable .nav-tabs,.tabbable .nav-tabs li.active>a{border-color:#222}.breadcrumb{font-size:14px;background-color:transparent;background-image:none;border-width:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.breadcrumb li{text-shadow:none}.breadcrumb li>a{color:"
            + t.hoverColor + ";text-shadow:none}.pagination ul{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.pagination ul>.disabled>a,.pagination ul>.disabled>a:hover,.pagination ul>.disabled>span,.pagination ul>.disabled>span:hover{background-color:rgba(0,0,0,0.2)}.pager li>a,.pager li>span{background-color:"
            + t.bodyGradientFromColor + ";border:0}.pager li>a:hover,.pager li>span:hover{background-color:"
            + t.hoverColor + "}.pager .disabled a,.pager .disabled a:hover{background-color:"
            + t.bodyGradientFromColor + "}.btn{padding:7px 10px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);text-shadow:none;background-image:-moz-linear-gradient(top,#666,#4d4d4d);background-image:-webkit-gradient(linear,0 0,0 100%,from(#666),to(#4d4d4d));background-image:-webkit-linear-gradient(top,#666,#4d4d4d);background-image:-o-linear-gradient(top,#666,#4d4d4d);background-image:linear-gradient(to bottom,#666,#4d4d4d);background-repeat:repeat-x;border-color:#4d4d4d #4d4d4d #262626;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff666666',endColorstr='#ff4d4d4d',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-box-shadow:1px 1px 2px #111;-moz-box-shadow:1px 1px 2px #111;box-shadow:1px 1px 2px #111}.btn:hover,.btn:focus,.btn:active,.btn.active,.btn.disabled,.btn[disabled]{color:#fff;background-color:#4d4d4d;*background-color:#404040}.btn:active,.btn.active{background-color:#333}.btn:hover{color:#fff;text-shadow:none}.btn-primary{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#008ab8;*background-color:#007399;background-image:-moz-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.infoColor + "),to(#007399));background-image:-webkit-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-o-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:linear-gradient(to bottom,"
            + t.infoColor + ",#007399);background-repeat:repeat-x;border-color:#007399 #007399 #00394d;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0099cc',endColorstr='#ff007399',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled]{color:#fff;background-color:#007399;*background-color:#006080}.btn-primary:active,.btn-primary.active{background-color:#004d66}.btn-warning{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#ff961f;*background-color:#f80;background-image:-moz-linear-gradient(top,#ffa033,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffa033),to(#f80));background-image:-webkit-linear-gradient(top,#ffa033,#f80);background-image:-o-linear-gradient(top,#ffa033,#f80);background-image:linear-gradient(to bottom,#ffa033,#f80);background-repeat:repeat-x;border-color:#f80 #f80 #b35f00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffa033',endColorstr='#ffff8800',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.btn-warning.disabled,.btn-warning[disabled]{color:#fff;background-color:#f80;*background-color:#e67a00}.btn-warning:active,.btn-warning.active{background-color:#cc6d00 }.btn-danger{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#eb0000;*background-color:"
            + t.errorColor + ";background-image:-moz-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#f00),to("
            + t.errorColor + "));background-image:-webkit-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-o-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:linear-gradient(to bottom,#f00,"
            + t.errorColor + ");background-repeat:repeat-x;border-color:"
            + t.errorColor + " " + t.errorColor + " #800000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff0000',endColorstr='#ffcc0000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled]{color:#fff;background-color:"
            + t.errorColor + ";*background-color:#b30000}.btn-danger:active,.btn-danger.active{background-color:#900}.btn-success{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#7ab800;*background-color:"
            + t.successColor + ";background-image:-moz-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#8c0),to("
            + t.successColor + "));background-image:-webkit-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-o-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:linear-gradient(to bottom,#8c0,"
            + t.successColor + ");background-repeat:repeat-x;border-color:"
            + t.successColor + " "
            + t.successColor + " #334d00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff88cc00',endColorstr='#ff669900',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.btn-success.disabled,.btn-success[disabled]{color:#fff;background-color:"
            + t.successColor + ";*background-color:#558000}.btn-success:active,.btn-success.active{background-color:#460}.btn-info{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#292929;*background-color:#191919;background-image:-moz-linear-gradient(top,#333,#191919);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#191919));background-image:-webkit-linear-gradient(top,#333,#191919);background-image:-o-linear-gradient(top,#333,#191919);background-image:linear-gradient(to bottom,#333,#191919);background-repeat:repeat-x;border-color:#191919 #191919 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff333333',endColorstr='#ff191919',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.btn-info.disabled,.btn-info[disabled]{color:#fff;background-color:#191919;*background-color:#0d0d0d}.btn-info:active,.btn-info.active{background-color:#000}.btn-inverse{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#9f3fcf;*background-color:"
            + t.inverseColor + ";background-image:-moz-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#a347d1),to("
            + t.inverseColor + "));background-image:-webkit-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-o-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:linear-gradient(to bottom,#a347d1,"
            + t.inverseColor + ");background-repeat:repeat-x;border-color:"
            + t.inverseColor + " "
            + t.inverseColor + " #6b248f;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffa347d1',endColorstr='#ff9933cc',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-inverse:hover,.btn-inverse:focus,.btn-inverse:active,.btn-inverse.active,.btn-inverse.disabled,.btn-inverse[disabled]{color:#fff;background-color:"
            + t.inverseColor + ";*background-color:#8a2eb8}.btn-inverse:active,.btn-inverse.active{background-color:#7a29a3}.btn .caret{border-top:4px solid black;opacity:.3}.btn-group>.dropdown-menu>li>a:hover{border-bottom:0}.btn.disabled,.btn[disabled]{background-color:#adafae}input,textarea,select{border-width:2px;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}select,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{color:#222}input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly],.uneditable-input{border-color:#444}input:focus,textarea:focus,input.focused,textarea.focused{border-color:#52a8ec;outline:0;outline:thin dotted}input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus,select:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}legend,label{color:"
            + t.bodyFontColor + ";border-bottom:0 solid #222}.form-actions{border-top:1px solid "
            + t.tableBorderColor + "}.table{-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.table tbody tr.success td{color:#fff;background-color:"
            + t.successColor + "}.table tbody tr.error td{color:#fff;background-color:"
            + t.errorColor + "}.table tbody tr.info td{color:#fff;background-color:"
            + t.hoverColor + "}.dropdown-menu{-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.8);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.8);box-shadow:0 2px 4px rgba(0,0,0,0.8)}.alert,.alert .alert-heading,.alert-success,.alert-success .alert-heading,.alert-danger,.alert-error,.alert-danger .alert-heading,.alert-error .alert-heading,.alert-info,.alert-info .alert-heading{padding:15px;margin-bottom:0;color:#eee;text-shadow:none;border:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.label{color:#eee}.label,.alert{background-color:#666}.label:hover{background-color:#4d4d4d}.label-important,.alert-danger,.alert-error{background-color:"
            + t.errorColor + "}.label-important:hover{background-color:#900}.label-warning{background-color:#cc6d00}.label-warning:hover{background-color:#995200}.label-success,.alert-success{background-color:#5c8a00}.label-success:hover{background-color:#3a5700}.label-info,.alert-info{background-color:#007399}.label-info:hover{background-color:#004d66}.well,.hero-unit{-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.well,.hero-unit{border-top:solid 1px #2f2f2f;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.8);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.8);box-shadow:0 2px 4px rgba(0,0,0,0.8)}.thumbnail{border-color:#222}.progress{background-color:"
            + t.bodyGradientFromColor + ";background-image:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.modal{background-color:#222;border-top:solid 1px #2f2f2f;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.modal-header{border-bottom:1px solid "
            + t.tableBorderColor + "}.modal-footer{background-color:#222;border-top:1px solid "
            + t.tableBorderColor + ";-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.footer{border-top:1px solid "
            + t.tableBorderColor + "}@media(max-width:768px){div.subnav .nav>li+li>a,div.subnav .nav>li:first-child>a{border-top:1px solid "
            + t.tableBorderColor + ";border-left:1px solid "
            + t.tableBorderColor + "}.subnav .nav>li+li>a:hover,.subnav .nav>li:first-child>a:hover{background-color:"
            + t.hoverColor + ";border-bottom:0}}@media(max-width:768px){div.subnav .nav>li+li>a,div.subnav .nav>li:first-child>a{border-top:1px solid "
            + t.tableBorderColor + ";border-left:1px solid "
            + t.tableBorderColor + "}.subnav .nav>li+li>a:hover,.subnav .nav>li:first-child>a:hover{background-color:"
            + t.hoverColor + ";border-bottom:0}}"
            + "@media screen and (max-width:60em){body{ font-weight: 10px !important;} pre code{font-size:8pt}code{font-size:8pt}.js{width:100% !important;}div.well.coffee{width:100% !important;margin-left:0px !important;}.accordion-inner{padding: 5px 1px 0px 1px  !important;}}"
            + "@media screen and (max-width:40em){div.menu{width: 320px !important;}.accordion-inner{padding: 0px !important;}}"
            + ".hide{display:none}.show{display:block}.invisible{visibility:hidden}.affix{position:fixed}pre code{overflow:auto;white-space:pre}.navbar{margin-bottom:0!important}.navbar-inner{min-height:24px!important;padding:0!important;font-size:1.0!important;line-height:24px!important;color:#fff!important}.nav-tabs.nav-stacked>li>a{border:0!important}.logo{margin-right:15px}body .frame .navbar .navbar-inner{padding-left:5px;border-radius:0}"
            + "body .frame .menu.collapse{float:left;width:300px}.menu{margin:0 2px 0 0!important;}body .frame .menu .navbar .navbar-inner{font-size:1.1em;line-height:23px;text-align:center;border-right:0}body .frame .menu .nav-stacked{padding:0}body .frame .menu .nav-stacked{margin:0!important}body .frame .menu .nav-stacked li input{padding:0!important;margin:0!important}body .frame .view{height:100%;overflow:auto;}body .frame .view .navbar .navbar-inner .btn-navbar{display:block;float:left}body .frame .view #content{text-align:justify}code.well{padding:1px!important}a:hover,a:focus{text-decoration:none!important}"
            + ".suiteDesc{padding:2px!important; height: 55px; margin-bottom: 2px !important;}.run-again{margin-left:4px!important}.navbar .btn,.navbar .btn-group{margin-top:10px} div.js{overflow-x: auto;} div.coffee{overflow-x: auto;} div.results{ overflow-x: auto !important;} pre.well {border: none;overflow-x: auto;}.frame{overflow-y: auto !important;}"
            + ".count{border: 1px solid #fff; margin: 0px 0 0px 0 !important;}.autoOverFlow{overflow-x:auto;}"
            + ".headCount{border: 1px solid #fff; height:26px; width: 24px; line-height: 23px !important; margin: 0px 1px 0px 1px !important; text-align:center;}.autoOverFlow{overflow-x:auto;}"
            + ".nicescroll-rails{margin-top:45px !important;} #mocha-stats{display: none;}"
            + "a.logoBtn:active {height: 100%;-webkit-transform: rotate(180deg);-webkit-transition: all .5s linear;}"
            + ".collapseAll {-webkit-transform: rotate(0deg);-webkit-transition: all .5s linear;}"
            + ".expandAll {-webkit-transform: rotate(90deg);-webkit-transition: all .5s linear;} input {margin-right: 1px; width: 100%;border: 0px !important; border-top: dotted 1px !important; border-bottom: dotted 1px !important;height: 30px; } div.accordion-heading span{ margin-left: 5px;} ";


    };
    themeManager.set = function (newTheme) {
        if (newTheme != amplify.store('currentTheme')) {
            amplify.store('currentTheme', newTheme);
            apply();
        }
    };

    themeManager.resetCustomTheme = function (prop, value) {
        amplify.store('customTheme', new theme());
        apply();
    }

    themeManager.updateCustom = function (prop, value) {
        var currentCustomTheme = amplify.store('customTheme');
        if (prop.indexOf('Color') > 0)
            currentCustomTheme[prop] = '#' + value;
        else
            currentCustomTheme[prop] = value;
        amplify.store('customTheme', currentCustomTheme);
        apply();
    }

    if (!amplify.store('currentTheme')) {
        themeManager.set('cyborg');
    } else {
        apply();
    }

    return themeManager;
}());
/*
 RequireJS 2.1.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;
(function(aa){function I(b){return"[object Function]"===L.call(b)}function J(b){return"[object Array]"===L.call(b)}function y(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function M(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ga.call(b,c)}function m(b,c){return s(b,c)&&b[c]}function G(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function R(b,c,d,m){c&&G(c,function(c,j){if(d||!s(b,j))m&&"string"!==typeof c?(b[j]||(b[j]={}),R(b[j],
    c,d,m)):b[j]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ba(b){if(!b)return b;var c=aa;y(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,m){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=m;d&&(c.originalError=d);return c}function ha(b){function c(a,f,b){var e,n,c,g,d,S,i,h=f&&f.split("/");e=h;var j=k.map,l=j&&j["*"];if(a&&"."===a.charAt(0))if(f){e=m(k.pkgs,f)?h=[f]:h.slice(0,h.length-1);f=a=e.concat(a.split("/"));
    for(e=0;f[e];e+=1)if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=m(k.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&j&&(h||l)){f=a.split("/");for(e=f.length;0<e;e-=1){c=f.slice(0,e).join("/");if(h)for(n=h.length;0<n;n-=1)if(b=m(j,h.slice(0,n).join("/")))if(b=m(b,c)){g=b;d=e;break}if(g)break;!S&&(l&&m(l,c))&&(S=m(l,c),i=e)}!g&&S&&(g=S,d=i);g&&(f.splice(0,d,
    g),a=f.join("/"))}return a}function d(a){A&&y(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===i.contextName)return f.parentNode.removeChild(f),!0})}function z(a){var f=m(k.paths,a);if(f&&J(f)&&1<f.length)return d(a),f.shift(),i.require.undef(a),i.require([a]),!0}function h(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function j(a,f,b,e){var n,C,g=null,d=f?f.name:
    null,j=a,l=!0,k="";a||(l=!1,a="_@r"+(M+=1));a=h(a);g=a[0];a=a[1];g&&(g=c(g,d,e),C=m(q,g));a&&(g?k=C&&C.normalize?C.normalize(a,function(a){return c(a,d,e)}):c(a,d,e):(k=c(a,d,e),a=h(k),g=a[0],k=a[1],b=!0,n=i.nameToUrl(k)));b=g&&!C&&!b?"_unnormalized"+(Q+=1):"";return{prefix:g,name:k,parentMap:f,unnormalized:!!b,url:n,originalName:j,isDefine:l,id:(g?g+"!"+k:k)+b}}function r(a){var f=a.id,b=m(p,f);b||(b=p[f]=new i.Module(a));return b}function t(a,f,b){var e=a.id,n=m(p,e);if(s(q,e)&&(!n||n.defineEmitComplete))"defined"===
    f&&b(q[e]);else r(a).on(f,b)}function v(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(y(b,function(f){if(f=m(p,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)l.onError(a)}function w(){T.length&&(ia.apply(H,[H.length-1,0].concat(T)),T=[])}function x(a){delete p[a];delete V[a]}function F(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,y(a.depMaps,function(e,c){var g=e.id,d=m(p,g);d&&(!a.depMatched[c]&&!b[g])&&(m(f,g)?(a.defineDep(c,q[g]),a.check()):F(d,f,b))}),b[e]=!0)}
    function D(){var a,f,b,e,n=(b=1E3*k.waitSeconds)&&i.startTime+b<(new Date).getTime(),c=[],g=[],h=!1,j=!0;if(!W){W=!0;G(V,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||g.push(b),!b.error))if(!b.inited&&n)z(f)?h=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(h=!0,!a.prefix))return j=!1});if(n&&c.length)return b=B("timeout","Load timeout for modules: "+c,null,c),b.contextName=i.contextName,v(b);j&&y(g,function(a){F(a,{},{})});if((!n||e)&&h)if((A||da)&&!X)X=setTimeout(function(){X=
        0;D()},50);W=!1}}function E(a){s(q,a[0])||r(j(a[0],null,!0)).init(a[1],a[2])}function K(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function L(){var a;for(w();H.length;){a=H.shift();if(null===a[0])return v(B("mismatch","Mismatched anonymous define() module: "+a[a.length-
        1]));E(a)}}var W,Z,i,N,X,k={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},p={},V={},$={},H=[],q={},U={},M=1,Q=1;N={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=q[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return k.config&&m(k.config,a.map.id)||{}},exports:q[a.map.id]}}};Z=function(a){this.events=
        m($,a.id)||{};this.map=a;this.shim=m(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=
        !0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;U[a]||(U[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;
        var e=this.exports,n=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(I(n)){if(this.events.error)try{e=i.execCb(c,n,b,e)}catch(d){a=d}else e=i.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=[this.map.id],a.requireType="define",v(this.error=
            a)}else e=n;this.exports=e;if(this.map.isDefine&&!this.ignore&&(q[c]=e,l.onResourceLoad))l.onResourceLoad(i,this.map,this.depMaps);x(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=j(a.prefix);this.depMaps.push(d);t(d,"defined",u(this,function(e){var n,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,h=
        i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0)})||""),e=j(a.prefix+"!"+d,this.map.parentMap),t(e,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(p,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else n=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),n.error=u(this,
        function(a){this.inited=!0;this.error=a;a.requireModules=[b];G(p,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&x(a.map.id)});v(a)}),n.fromText=u(this,function(e,c){var d=a.name,g=j(d),C=O;c&&(e=c);C&&(O=!1);r(g);s(k.config,b)&&(k.config[d]=k.config[b]);try{l.exec(e)}catch(ca){return v(B("fromtexteval","fromText eval for "+b+" failed: "+ca,ca,[b]))}C&&(O=!0);this.depMaps.push(g);i.completeLoad(d);h([d],n)}),e.load(a.name,h,n,k)}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=
        this;this.enabling=this.enabled=!0;y(this.depMaps,u(this,function(a,b){var c,e;if("string"===typeof a){a=j(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;t(a,"defined",u(this,function(a){this.defineDep(b,a);this.check()}));this.errback&&t(a,"error",this.errback)}c=a.id;e=p[c];!s(N,c)&&(e&&!e.enabled)&&i.enable(a,this)}));G(this.pluginMaps,u(this,function(a){var b=m(p,a.id);b&&!b.enabled&&i.enable(a,
        this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:k,contextName:b,registry:p,defined:q,urlFetched:U,defQueue:H,Module:Z,makeModuleMap:j,nextTick:l.nextTick,onError:v,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.pkgs,c=k.shim,e={paths:!0,config:!0,map:!0};G(a,function(a,b){e[b]?
        "map"===b?(k.map||(k.map={}),R(k[b],a,!0,!0)):R(k[b],a,!0):k[b]=a});a.shim&&(G(a.shim,function(a,b){J(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);c[b]=a}),k.shim=c);a.packages&&(y(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),k.pkgs=b);G(p,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=j(b))});if(a.deps||a.callback)i.require(a.deps||[],
        a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(aa,arguments));return b||a.exports&&ba(a.exports)}},makeRequire:function(a,f){function d(e,c,h){var g,k;f.enableBuildCallback&&(c&&I(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(I(c))return v(B("requireargs","Invalid require call"),h);if(a&&s(N,e))return N[e](p[a.id]);if(l.get)return l.get(i,e,a,d);g=j(e,a,!1,!0);g=g.id;return!s(q,g)?v(B("notloaded",'Module name "'+g+'" has not been loaded yet for context: '+
        b+(a?"":". Use require([])"))):q[g]}L();i.nextTick(function(){L();k=r(j(null,a));k.skipMap=f.skipMap;k.init(e,c,h,{enabled:!0});D()});return d}f=f||{};R(d,{isBrowser:A,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=b.substring(0,f);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return s(q,j(b,a,!1,!0).id)},specified:function(b){b=j(b,a,!1,!0).id;return s(q,b)||s(p,b)}});a||(d.undef=function(b){w();var c=
        j(b,a,!0),d=m(p,b);delete q[b];delete U[c.url];delete $[b];d&&(d.events.defined&&($[b]=d.events),x(b))});return d},enable:function(a){m(p,a.id)&&r(a).enable()},completeLoad:function(a){var b,c,e=m(k.shim,a)||{},d=e.exports;for(w();H.length;){c=H.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(p,a);if(!b&&!s(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!d||!ba(d)))return z(a)?void 0:v(B("nodefine","No define call for "+a,null,[a]));E([a,e.deps||[],e.exportsFn])}D()},nameToUrl:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b,c){var e,d,h,g,j,i;if(l.jsExtRegExp.test(a))g=a+(b||"");else{e=k.paths;d=k.pkgs;g=a.split("/");for(j=g.length;0<j;j-=1)if(i=g.slice(0,j).join("/"),h=m(d,i),i=m(e,i)){J(i)&&(i=i[0]);g.splice(0,j,i);break}else if(h){a=a===h.name?h.location+"/"+h.main:h.location;g.splice(0,j,a);break}g=g.join("/");g+=b||(/\?/.test(g)||c?"":".js");g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+g}return k.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+k.urlArgs):g},load:function(a,b){l.load(i,a,b)},execCb:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=K(a),i.completeLoad(a.id)},onScriptError:function(a){var b=K(a);if(!z(b.id))return v(B("scripterror","Script error",a,[b.id]))}};i.require=i.makeRequire();return i}var l,w,x,D,t,E,P,K,Q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=
    Array.prototype.splice,A=!!("undefined"!==typeof window&&navigator&&document),da=!A&&"undefined"!==typeof importScripts,ka=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},r={},T=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(I(requirejs))return;r=requirejs;requirejs=void 0}"undefined"!==typeof require&&!I(require)&&(r=require,require=void 0);l=requirejs=function(b,c,d,z){var h,
    j="_";!J(b)&&"string"!==typeof b&&(h=b,J(c)?(b=c,c=d,d=z):b=[]);h&&h.context&&(j=h.context);(z=m(F,j))||(z=F[j]=l.s.newContext(j));h&&z.configure(h);return z.require(b,c,d)};l.config=function(b){return l(b)};l.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=l);l.version="2.1.5";l.jsExtRegExp=/^\/|:|\?|\.js$/;l.isBrowser=A;w=l.s={contexts:F,newContext:ha};l({});y(["toUrl","undef","defined","specified"],function(b){l[b]=function(){var c=F._;return c.require[b].apply(c,
    arguments)}});if(A&&(x=w.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))x=w.head=D.parentNode;l.onError=function(b){throw b;};l.load=function(b,c,d){var l=b&&b.config||{},h;if(A)return h=l.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),h.type=l.scriptType||"text/javascript",h.charset="utf-8",h.async=!0,h.setAttribute("data-requirecontext",b.contextName),h.setAttribute("data-requiremodule",c),
    h.attachEvent&&!(h.attachEvent.toString&&0>h.attachEvent.toString().indexOf("[native code"))&&!Y?(O=!0,h.attachEvent("onreadystatechange",b.onScriptLoad)):(h.addEventListener("load",b.onScriptLoad,!1),h.addEventListener("error",b.onScriptError,!1)),h.src=d,K=h,D?x.insertBefore(h,D):x.appendChild(h),K=null,h;if(da)try{importScripts(d),b.completeLoad(c)}catch(j){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,j,[c]))}};A&&M(document.getElementsByTagName("script"),function(b){x||(x=
    b.parentNode);if(t=b.getAttribute("data-main"))return r.baseUrl||(E=t.split("/"),Q=E.pop(),fa=E.length?E.join("/")+"/":"./",r.baseUrl=fa,t=Q),t=t.replace(ea,""),r.deps=r.deps?r.deps.concat(t):[t],!0});define=function(b,c,d){var l,h;"string"!==typeof b&&(d=c,c=b,b=null);J(c)||(d=c,c=[]);!c.length&&I(d)&&d.length&&(d.toString().replace(la,"").replace(ma,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c));if(O){if(!(l=K))P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),
    function(b){if("interactive"===b.readyState)return P=b}),l=P;l&&(b||(b=l.getAttribute("data-requiremodule")),h=F[l.getAttribute("data-requirecontext")])}(h?h.defQueue:T).push([b,c,d])};define.amd={jQuery:!0};l.exec=function(b){return eval(b)};l(r)}})(this);
/* jquery.nicescroll 3.4.1 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var D=!1,G=!1,N=5E3,O=2E3,C=0,J,u=document.getElementsByTagName("script"),u=u[u.length-1].src.split("?")[0];J=0<u.split("/").length?u.split("/").slice(0,-1).join("/")+"/":"";Array.prototype.forEach||(Array.prototype.forEach=function(e,d){for(var k=0,s=this.length;k<s;++k)e.call(d,this[k],k,this)});var w=window.requestAnimationFrame||!1,x=window.cancelAnimationFrame||!1;["ms","moz","webkit","o"].forEach(function(e){w||(w=window[e+"RequestAnimationFrame"]);x||(x=window[e+"CancelAnimationFrame"]||
window[e+"CancelRequestAnimationFrame"])});var E=window.MutationObserver||window.WebKitMutationObserver||!1,K={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,
railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},H=!1,P=function(j,d){function k(){var c=
b.win;if("zIndex"in c)return c.zIndex();for(;0<c.length&&9!=c[0].nodeType;){var g=c.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);c=c.parent()}return!1}function s(c,g,p){g=c.css(g);c=parseFloat(g);return isNaN(c)?(c=B[g]||0,p=3==c?p?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&c&&(c+=1),p?c:0):c}function n(c,g,p,d){b._bind(c,g,function(b){b=b?b:window.event;var d={original:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==
b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==g?(d.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(d.deltaX=-0.025*b.wheelDeltaX)):d.deltaY=b.detail;return p.call(c,d)},d)}function v(c,g,d){var f,e;0==c.deltaMode?(f=-Math.floor(c.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(c.deltaY*(b.opt.mousescrollstep/
54))):1==c.deltaMode&&(f=-Math.floor(c.deltaX*b.opt.mousescrollstep),e=-Math.floor(c.deltaY*b.opt.mousescrollstep));g&&(0==f&&e)&&(f=e,e=0);f&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=f,b.debounced("mousewheelx",function(){var c=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(c)},120));if(e){if(b.opt.nativeparentscrolling&&d&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=
e;b.debounced("mousewheely",function(){var c=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(c)},120)}c.stopImmediatePropagation();return c.preventDefault()}var b=this;this.version="3.4.0";this.name="nicescroll";this.me=d;this.opt={doc:e("body"),win:!1};e.extend(this.opt,K);this.opt.snapbackspeed=80;if(j)for(var m in b.opt)"undefined"!=typeof j[m]&&(b.opt[m]=j[m]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:
this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=
this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+O++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=
this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;if(H)m=H;else{m=document.createElement("DIV");var h={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};h.isopera="opera"in window;h.isopera12=h.isopera&&
"getUserMedia"in navigator;h.isie="all"in document&&"attachEvent"in m&&!h.isopera;h.isieold=h.isie&&!("msInterpolationMode"in m.style);h.isie7=h.isie&&!h.isieold&&(!("documentMode"in document)||7==document.documentMode);h.isie8=h.isie&&"documentMode"in document&&8==document.documentMode;h.isie9=h.isie&&"performance"in window&&9<=document.documentMode;h.isie10=h.isie&&"performance"in window&&10<=document.documentMode;h.isie9mobile=/iemobile.9/i.test(navigator.userAgent);h.isie9mobile&&(h.isie9=!1);
h.isie7mobile=!h.isie9mobile&&h.isie7&&/iemobile/i.test(navigator.userAgent);h.ismozilla="MozAppearance"in m.style;h.iswebkit="WebkitAppearance"in m.style;h.ischrome="chrome"in window;h.ischrome22=h.ischrome&&h.haspointerlock;h.ischrome26=h.ischrome&&"transition"in m.style;h.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;h.hasmstouch=window.navigator.msPointerEnabled||!1;h.ismac=/^mac$/i.test(navigator.platform);h.isios=h.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);
h.isios4=h.isios&&!("seal"in Object);h.isandroid=/android/i.test(navigator.userAgent);h.trstyle=!1;h.hastransform=!1;h.hastranslate3d=!1;h.transitionstyle=!1;h.hastransition=!1;h.transitionend=!1;for(var q=["transform","msTransform","webkitTransform","MozTransform","OTransform"],r=0;r<q.length;r++)if("undefined"!=typeof m.style[q[r]]){h.trstyle=q[r];break}h.hastransform=!1!=h.trstyle;h.hastransform&&(m.style[h.trstyle]="translate3d(1px,2px,3px)",h.hastranslate3d=/translate3d/.test(m.style[h.trstyle]));
h.transitionstyle=!1;h.prefixstyle="";h.transitionend=!1;for(var q="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),A=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),u="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),r=0;r<q.length;r++)if(q[r]in m.style){h.transitionstyle=q[r];h.prefixstyle=A[r];h.transitionend=u[r];break}h.ischrome26&&(h.prefixstyle=A[1]);h.hastransition=
h.transitionstyle;b:{q=["-moz-grab","-webkit-grab","grab"];if(h.ischrome&&!h.ischrome22||h.isie)q=[];for(r=0;r<q.length;r++)if(A=q[r],m.style.cursor=A,m.style.cursor==A){q=A;break b}q="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}h.cursorgrabvalue=q;h.hasmousecapture="setCapture"in m;h.hasMutationObserver=!1!==E;m=null;m=H=h}this.detected=m;var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=
!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&(this.istouchcapable=!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(c,g,d,f){var e=b.delaylist[c],h=(new Date).getTime();if(!f&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+d>h&&!e.tt)b.delaylist[c]={last:h+d,tt:setTimeout(function(){b.delaylist[c].tt=0;g.call()},d)};else if(!e||!e.tt)b.delaylist[c]=
{last:h,tt:0},setTimeout(function(){g.call()},0)};this.debounced=function(c,g,d){var e=b.delaylist[c];(new Date).getTime();b.delaylist[c]=g;e||setTimeout(function(){var g=b.delaylist[c];b.delaylist[c]=!1;g.call()},d)};this.synched=function(c,g){b.synclist[c]=g;b.onsync||(w(function(){b.onsync=!1;for(c in b.synclist){var g=b.synclist[c];g&&g.call(b);b.synclist[c]=!1}}),b.onsync=!0);return c};this.unsynched=function(c){b.synclist[c]&&(b.synclist[c]=!1)};this.css=function(c,g){for(var d in g)b.saved.css.push([c,
d,c.css(d)]),c.css(d,g[d])};this.scrollTop=function(c){return"undefined"==typeof c?b.getScrollTop():b.setScrollTop(c)};this.scrollLeft=function(c){return"undefined"==typeof c?b.getScrollLeft():b.setScrollLeft(c)};BezierClass=function(b,g,d,e,f,h,k){this.st=b;this.ed=g;this.spd=d;this.p1=e||0;this.p2=f||1;this.p3=h||0;this.p4=k||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-
b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*g)},update:function(b,g){this.st=this.getNow();this.ed=b;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var z=function(){var c=b.doc.css(f.trstyle);return c&&"matrix"==
c.substr(0,6)?c.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(c){if(!c){if(c=z())return 16==c.length?-c[13]:-c[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(c){if(!c){if(c=z())return 16==c.length?-c[12]:-c[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var g=document.createEvent("UIEvents");
g.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(g)}:document.fireEvent?function(b){var g=document.createEventObject();b.fireEvent("onscroll");g.cancelBubble=!0}:function(){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+
"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
function(){return b.docscroll.scrollTop()},this.setScrollTop=function(c){return b.docscroll.scrollTop(c)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(c){return b.docscroll.scrollLeft(c)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,g){if(!b)return!1;for(var d=b.target||b.srcElement||b||!1;d&&d.id!=g;)d=d.parentNode||!1;return!1!==d};var B={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var c=b.win.offset(),g=b.viewport.offset();return{top:c.top-g.top+b.viewport.scrollTop(),left:c.left-g.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(c){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var g=b.getOffset(),d=g.top,e=g.left,d=d+s(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var e=e+(b.rail.align?b.win.outerWidth()-
s(b.win,"border-right-width")-b.rail.width:s(b.win,"border-left-width")),f=b.opt.railoffset;f&&(f.top&&(d+=f.top),b.rail.align&&f.left&&(e+=f.left));b.locked||b.rail.css({top:d,left:e,height:c?c.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:d+1,left:1==b.rail.align?e-20:e+b.rail.width+4});b.railh&&!b.locked&&(d=g.top,e=g.left,c=b.railh.align?d+s(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:d+s(b.win,"border-top-width",!0),e+=s(b.win,"border-left-width"),b.railh.css({top:c,left:e,
width:b.railh.width}))}};this.doRailClick=function(c,g,d){var e;b.locked||(b.cancelEvent(c),g?(g=d?b.doScrollLeft:b.doScrollTop,e=d?(c.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(c.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,g(e)):(g=d?b.doScrollLeftBy:b.doScrollBy,e=d?b.scroll.x:b.scroll.y,c=d?c.pageX-b.railh.offset().left:c.pageY-b.rail.offset().top,d=d?b.view.w:b.view.h,e>=c?g(d):g(-d)))};b.hasanimationframe=w;b.hascancelanimationframe=x;b.hasanimationframe?b.hascancelanimationframe||
(x=function(){b.cancelAnimationFrame=!0}):(w=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},x=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?k()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>C&&(C=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&!f.isieold&&
!f.isie9mobile){var c=b.docscroll;b.ispage&&(c=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(c,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var g=e(document.createElement("div"));g.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.hborder=parseFloat(g.outerHeight()-g.innerHeight());b.cursor=g;var d=e(document.createElement("div"));d.attr("id",b.id);d.addClass("nicescroll-rails");var h,j,y=["left","right"],s;for(s in y)j=y[s],(h=b.opt.railpadding[j])?d.css("padding-"+j,h+"px"):b.opt.railpadding[j]=0;d.append(g);d.width=Math.max(parseFloat(b.opt.cursorwidth),
g.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;d.css({width:d.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});d.visibility=!0;d.scrollable=!0;d.align="left"==b.opt.railalign?0:1;b.rail=d;g=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(g=document.createElement("div"),b.bind(g,"click",b.doZoom),b.zoom=e(g),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+J+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&
b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(c){1.5<c.scale&&b.doZoomIn(c);0.8>c.scale&&b.doZoomOut(c);return b.cancelEvent(c)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(c,{"overflow-x":"hidden"});g=e(document.createElement("div"));g.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,
"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.wborder=parseFloat(g.outerWidth()-g.innerWidth());b.cursorh=g;var l=e(document.createElement("div"));l.attr("id",b.id+"-hr");l.addClass("nicescroll-rails");l.height=Math.max(parseFloat(b.opt.cursorwidth),g.outerHeight());l.css({height:l.height+"px",zIndex:b.zindex,background:b.opt.background});l.append(g);l.visibility=!0;l.scrollable=!0;l.align="top"==b.opt.railvalign?0:1;b.railh=l;b.railh.drag=!1}b.ispage?
(d.css({position:"fixed",top:"0px",height:"100%"}),d.align?d.css({right:"0px"}):d.css({left:"0px"}),b.body.append(d),b.railh&&(l.css({position:"fixed",left:"0px",width:"100%"}),l.align?l.css({bottom:"0px"}):l.css({top:"0px"}),b.body.append(l))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),c="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":d.width+4}),c.append(b.zoom)),d.css({position:"absolute",top:0}),
d.align?d.css({right:0}):d.css({left:0}),c.append(d),l&&(l.css({position:"absolute",left:0,bottom:0}),l.align?l.css({bottom:0}):l.css({top:0}),c.append(l))):(b.isfixed="fixed"==b.win.css("position"),c=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),d.css({position:c}),b.zoom&&b.zoom.css({position:c}),b.updateScrollBar(),b.body.append(d),b.zoom&&
b.body.append(b.zoom),b.railh&&(l.css({position:c}),b.body.append(l))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):!0===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&
(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new L(b),b.onmangotouch=
function(){var c=b.getScrollTop(),d=b.getScrollLeft();if(c==b.scrollmom.lastscrolly&&d==b.scrollmom.lastscrollx)return!0;var g=c-b.mangotouch.sy,e=d-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(g,2)))){var f=0>g?-1:1,p=0>e?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=f||b.mangotouch.drx!=p?(b.scrollmom.stop(),b.scrollmom.reset(d,c),b.mangotouch.sy=c,b.mangotouch.ly=c,b.mangotouch.sx=d,b.mangotouch.lx=d,b.mangotouch.dry=
f,b.mangotouch.drx=p,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-e,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-c),Math.abs(b.mangotouch.lx-d)),b.mangotouch.ly=c,b.mangotouch.lx=d,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},d=b.getScrollTop(),l=b.getScrollLeft(),b.mangotouch={sy:d,ly:d,dry:0,sx:l,lx:l,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,
"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new L(b);b.ontouchstart=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(!b.locked){if(f.hasmstouch)for(var d=c.target?c.target:!1;d;){var g=e(d).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==d.nodeName&&d.id==b.id)break;d=d.parentNode?d.parentNode:!1}b.cancelScroll();if((d=b.getTarget(c))&&/INPUT/i.test(d.nodeName)&&/range/i.test(d.type))return b.stopPropagation(c);
!("clientX"in c)&&"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);b.forcescreen&&(g=c,c={original:c.original?c.original:c},c.clientX=g.screenX,c.clientY=g.screenY);b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl="f";else{var g=e(window).width(),p=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),p=Math.max(0,k-p),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<p?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(c.clientX,c.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!d||
!/INPUT|SELECT|TEXTAREA/i.test(d.nodeName))return!b.ispage&&f.hasmousecapture&&d.setCapture(),b.cancelEvent(c);/SUBMIT|CANCEL|BUTTON/i.test(e(d).attr("type"))&&(pc={tg:d,click:!1},b.preventclick=pc)}}};b.ontouchend=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(c)};var n=b.opt.touchbehavior&&
b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(c,d){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof c.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);c=e.extend({original:c},c);"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);if(b.forcescreen){var g=c;c={original:c.original?
c.original:c};c.clientX=g.screenX;c.clientY=g.screenY}g=ofy=0;if(n&&!d){var p=b.win.position(),g=-p.left;ofy=-p.top}var h=c.clientY+ofy,p=h-b.rail.drag.y,k=c.clientX+g,j=k-b.rail.drag.x,t=b.rail.drag.st-p;b.ishwscroll&&b.opt.bouncescroll?0>t?t=Math.round(t/2):t>b.page.maxh&&(t=b.page.maxh+Math.round((t-b.page.maxh)/2)):(0>t&&(h=t=0),t>b.page.maxh&&(t=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var l=b.rail.drag.sl-j;b.ishwscroll&&b.opt.bouncescroll?0>l?l=Math.round(l/2):l>b.page.maxw&&(l=b.page.maxw+
Math.round((l-b.page.maxw)/2)):(0>l&&(k=l=0),l>b.page.maxw&&(l=b.page.maxw,k=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?l=b.rail.drag.sl:"h"==b.rail.drag.dl&&(t=b.rail.drag.st);else{var p=Math.abs(p),j=Math.abs(j),y=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(p>y&&j<=0.3*p)return b.rail.drag=!1,!0;j>y&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(j>y&&p<=0.3*az)return b.rail.drag=!1,!0;p>y&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",
function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(t),b.scrollmom.update(k,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(l),b.showCursor(t,l)):b.showCursor(t),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(c)}}}b.onmousedown=function(c,d){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(c);b.cancelScroll();b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,
sy:b.scroll.y,pt:1,hr:!!d};var g=b.getTarget(c);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(c)}};b.onmouseup=function(c){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(c)};b.onmousemove=function(c){if(b.rail.drag&&
1==b.rail.drag.pt){if(f.ischrome&&0==c.which)return b.onmouseup(c);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(c.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var d=b.scrollvaluemaxw;b.scroll.x>d&&(b.scroll.x=d)}else b.scroll.y=b.rail.drag.sy+(c.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),d=b.scrollvaluemax,b.scroll.y>d&&(b.scroll.y=d);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*
b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(c)}};if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(c){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(c)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(c){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(c)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var m=function(c){if(b.selectiondrag){if(c){var d=b.win.outerHeight();c=c.pageY-b.selectiondrag.top;0<c&&c<d&&(c=0);c>=d&&(c-=d);b.selectiondrag.df=c}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){m()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=
document.selection.type}:function(){return!1};b.onselectionstart=function(){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(){b.selectiondrag=!1};b.onselectiondrag=function(c){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){m(c)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",
b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(c){b.onmousedown(c,!0)}),b.bind(b.cursorh,
"mouseup",function(c){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(c)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&
(b.bind(b.rail,"click",function(c){b.doRailClick(c,!1,!1)}),b.bind(b.rail,"dblclick",function(c){b.doRailClick(c,!0,!1)}),b.bind(b.cursor,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursor,"dblclick",function(c){b.cancelEvent(c)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(c){b.doRailClick(c,
!1,!0)}),b.bind(b.railh,"dblclick",function(c){b.doRailClick(c,!0,!0)}),b.bind(b.cursorh,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursorh,"dblclick",function(c){b.cancelEvent(c)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),
b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&
(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",b.onmousedown),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:N++}),
b.jqbind(b.win,"focus",function(c){D=b.getTarget(c).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(){D=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(c){G=b.getTarget(c).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){G=!1;b.hasmousefocus=!1}))}b.onkeypress=function(c){if(b.locked&&0==b.page.maxh)return!0;c=c?c:window.e;var d=b.getTarget(c);if(d&&/INPUT|TEXTAREA|SELECT|OPTION/.test(d.nodeName)&&
(!d.getAttribute("type")&&!d.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!D||b.ispage&&!D&&!G){d=c.keyCode;if(b.locked&&27!=d)return b.cancelEvent(c);var g=c.ctrlKey||!1,e=c.shiftKey||!1,f=!1;switch(d){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;
case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(e?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(c)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&
!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var r=b.win.attr("style"),d=parseFloat(b.win.css("width"))+1;b.win.css("width",d);b.synched("chromefix",function(){b.win.attr("style",r)})}b.onAttributeChange=function(){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==E?(b.observer=new E(function(c){c.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],
{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new E(function(c){c.forEach(function(c){if(0<c.removedNodes.length)for(var d in c.removedNodes)if(c.removedNodes[d]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",
function(c){c.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var q=function(){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(d){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&
(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));if(!f.isios&&b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);b.doc.height("");var g=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight);b.doc.height(g)}b.lazyResize(30);f.isie7&&
b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.onmousedown),b.bind(c,"mousemove",function(c){b.onmousemove(c,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&
b.css(e(c.body),{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){q.call(b.doc[0],!1)},500);b.bind(this.doc,"load",q)}};this.showCursor=function(c,d){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),
b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof c&&!1!==c&&(b.scroll.y=Math.round(1*c/b.scrollratio.y)),"undefined"!=typeof d&&(b.scroll.x=Math.round(1*d/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=
function(c){!b.cursortimeout&&(b.rail&&b.autohidedom)&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},c||b.opt.hidecursordelay))};this.noticeCursor=function(c,d,e){b.showCursor(d,e);b.rail.active||b.hideCursor(c)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(c,d){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&
b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var e=b.page.maxh,f=b.page.maxw,h=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=d?d:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==e&&b.page.maxw==f&&b.view.w==h){if(b.ispage)return b;e=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==e.top&&f.left==
e.left))return b;b.lastposition=e}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():
!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=
b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),
b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(c){c=isNaN(c)?30:c;b.delayed("resize",b.resize,c);return b};this._bind=function(c,d,e,f){b.events.push({e:c,n:d,f:e,b:f,q:!1});c.addEventListener?c.addEventListener(d,e,f||!1):c.attachEvent?c.attachEvent("on"+d,e):c["on"+d]=e};this.jqbind=function(c,d,f){b.events.push({e:c,
n:d,f:f,q:!0});e(c).bind(d,f)};this.bind=function(c,d,e,h){var k="jquery"in c?c[0]:c;"mousewheel"==d?"onwheel"in b.win?b._bind(k,"wheel",e,h||!1):(c="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(k,c,e,h||!1),"DOMMouseScroll"==c&&n(k,"MozMousePixelScroll",e,h||!1)):k.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(d)&&b._bind(k,"mousedown"==d?"touchstart":"mouseup"==d?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var c=b.touches.length?
b.touches[0]:b;c.original=b;e.call(this,c)}}else b.changedTouches&&(c=b.changedTouches[0],c.original=b,e.call(this,c))},h||!1),b._bind(k,d,e,h||!1),f.cantouch&&"mouseup"==d&&b._bind(k,"touchcancel",e,h||!1)):b._bind(k,d,function(c){if((c=c||window.event||!1)&&c.srcElement)c.target=c.srcElement;"pageY"in c||(c.pageX=c.clientX+document.documentElement.scrollLeft,c.pageY=c.clientY+document.documentElement.scrollTop);return!1===e.call(k,c)||!1===h?b.cancelEvent(c):!0})};this._unbind=function(b,d,e,f){b.removeEventListener?
b.removeEventListener(d,e,f):b.detachEvent?b.detachEvent("on"+d,e):b["on"+d]=!1};this.unbindAll=function(){for(var c=0;c<b.events.length;c++){var d=b.events[c];d.q?d.e.unbind(d.n,d.f):b._unbind(d.e,d.n,d.f,d.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=
function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=
function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();
b.unbindAll();!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=[];b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var c=0;c<b.saved.css.length;c++){var d=b.saved.css[c];d[0].css(d[1],"undefined"==typeof d[2]?"":d[2])}b.saved=!1;b.me.data("__nicescroll","");e.nicescroll.remove(b);for(var f in b)b[f]=null,delete b[f];b=null};this.scrollstart=function(c){this.onscrollstart=
c;return b};this.scrollend=function(c){this.onscrollend=c;return b};this.scrollcancel=function(c){this.onscrollcancel=c;return b};this.zoomin=function(c){this.onzoomin=c;return b};this.zoomout=function(c){this.onzoomout=c;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),d=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(d))return b.clientHeight!=b.scrollHeight;
b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),f=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(f)&&b.clientHeight!=b.scrollHeight||0<d.getNiceScroll().length)return d;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(c){if(b.locked)return!0;if(b.rail.drag)return b.cancelEvent(c);if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?
b.onmousewheelhr(c):!0;var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;if(b.nativescrollingarea)return!0;if(c=v(c,!1,e))b.checkarea=0;return c};this.onmousewheelhr=function(c){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(c);var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;return b.nativescrollingarea?
!0:b.locked?b.cancelEvent(c):v(c,!0,e)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var d=Math.round(10*b.opt.scrollspeed);c=Math.min(d,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,d){var e=d?20<c?c:0:b.getTransitionSpeed(c),
h=e?f.prefixstyle+"transform "+e+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return e},this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*
(c-k))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&d==b.newscrolly)return!1;b.newscrolly=d;b.newscrollx=c;b.newscrollspeed=e||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var e=b.getScrollTop(),h=b.getScrollLeft(),k,p;k=c-h;p=d-e;k=Math.round(Math.sqrt(Math.pow(k,2)+Math.pow(p,2)));k=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(k);b.newscrollspeed&&
1>=b.newscrollspeed&&(k*=b.newscrollspeed);b.prepareTransition(k,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);0<k&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:e},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:k}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,
k)),b.timerscroll={bz:new BezierClass(e,b.newscrolly,k,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,k,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),
d=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,d);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&
b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),d=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.noticeCursor(!1,c,d);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>d?d=0:d>b.page.maxw&&(d=b.page.maxw);if(c!=b.newscrolly||d!=b.newscrollx)return b.doScrollPos(d,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:d,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=
!1}):(this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){function f(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(n=1-n)return b.timer=w(f)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,e=d-sy;if(0>e&&d<b.newscrolly||0<e&&d>b.newscrolly)d=
b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var g=sx=b.getScrollLeft();if(b.dst.ax){g=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;e=g-sx;if(0>e&&g<b.newscrollx||0<e&&g>b.newscrollx)g=b.newscrollx;b.setScrollLeft(g);g==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>g?g=0:g>b.page.maxw&&(g=b.page.maxw),g!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(g,d):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=w(f)||1}d="undefined"==typeof d||!1===d?b.getScrollTop(!0):d;if(b.timer&&b.newscrolly==d&&b.newscrollx==c)return!0;b.timer&&x(b.timer);b.timer=0;var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*(c-k))&&b.cancelScroll();b.newscrolly=d;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||
!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-k;b.dst.y=d-h;b.dst.px=k;b.dst.py=h;var j=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/j;b.dst.ay=b.dst.y/j;var l=0,s=j;0==b.dst.x?(l=h,s=d,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(l=k,s=c,b.dst.ax=1,b.dst.px=0);j=b.getTransitionSpeed(j);e&&1>=e&&(j*=e);b.bzscroll=0<j?b.bzscroll?b.bzscroll.update(s,j):new BezierClass(l,s,j,0,1,0,1):!1;if(!b.timer){(h==
b.page.maxh&&d>=b.page.maxh||k==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var n=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:k,y:h},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:j});f();(h==b.page.maxh&&d>=h||k==b.page.maxw&&c>=k)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&x(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,
d){var e=b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var f=d>b.page.maxh?b.page.maxh:d;0>f&&(f=0);b.synched("scroll",function(){b.setScrollTop(f);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var f=
Math.round(b.view.h/2);e<-f?e=-f:e>b.page.maxh+f&&(e=b.page.maxh+f)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>e&&0>=py)return b.noticeCursor();if(e>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(e)};this.doScrollLeftBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var f=Math.round(b.view.w/2);e<-f?e=-f:e>b.page.maxw+f&&(e=b.page.maxw+f)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);
if(0>e&&0>=px||e>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(e)};this.doScrollTo=function(c,d){d&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));
b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=!0;b.zoomrestore={style:{}};var d="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),h=b.win[0].style,k;for(k in d){var j=d[k];b.zoomrestore.style[j]="undefined"!=typeof h[j]?h[j]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-
b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":C+100,margin:"0px"});d=b.win.css("backgroundColor");(""==d||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":C+101});b.zoom.css({"z-index":C+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=
function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-
b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},L=function(e){var d=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,j){d.stop();var n=d.time();d.steptime=
0;d.lasttime=n;d.speedx=0;d.speedy=0;d.lastx=e;d.lasty=j;d.lastscrollx=-1;d.lastscrolly=-1};this.update=function(e,j){var n=d.time();d.steptime=n-d.lasttime;d.lasttime=n;var n=j-d.lasty,v=e-d.lastx,b=d.nc.getScrollTop(),m=d.nc.getScrollLeft(),b=b+n,m=m+v;d.snapx=0>m||m>d.nc.page.maxw;d.snapy=0>b||b>d.nc.page.maxh;d.speedx=v;d.speedy=n;d.lastx=e;d.lasty=j};this.stop=function(){d.nc.unsynched("domomentum2d");d.timer&&clearTimeout(d.timer);d.timer=0;d.lastscrollx=-1;d.lastscrolly=-1};this.doSnapy=function(e,
j){var n=!1;0>j?(j=0,n=!0):j>d.nc.page.maxh&&(j=d.nc.page.maxh,n=!0);0>e?(e=0,n=!0):e>d.nc.page.maxw&&(e=d.nc.page.maxw,n=!0);n&&d.nc.doScrollPos(e,j,d.nc.opt.snapbackspeed)};this.doMomentum=function(e){var j=d.time(),n=e?j+e:d.lasttime;e=d.nc.getScrollLeft();var v=d.nc.getScrollTop(),b=d.nc.page.maxh,m=d.nc.page.maxw;d.speedx=0<m?Math.min(60,d.speedx):0;d.speedy=0<b?Math.min(60,d.speedy):0;n=n&&50>=j-n;if(0>v||v>b||0>e||e>m)n=!1;e=d.speedx&&n?d.speedx:!1;if(d.speedy&&n&&d.speedy||e){var h=Math.max(16,
d.steptime);50<h&&(e=h/50,d.speedx*=e,d.speedy*=e,h=50);d.demulxy=0;d.lastscrollx=d.nc.getScrollLeft();d.chkx=d.lastscrollx;d.lastscrolly=d.nc.getScrollTop();d.chky=d.lastscrolly;var q=d.lastscrollx,r=d.lastscrolly,u=function(){var e=600<d.time()-j?0.04:0.02;if(d.speedx&&(q=Math.floor(d.lastscrollx-d.speedx*(1-d.demulxy)),d.lastscrollx=q,0>q||q>m))e=0.1;if(d.speedy&&(r=Math.floor(d.lastscrolly-d.speedy*(1-d.demulxy)),d.lastscrolly=r,0>r||r>b))e=0.1;d.demulxy=Math.min(1,d.demulxy+e);d.nc.synched("domomentum2d",
function(){d.speedx&&(d.nc.getScrollLeft()!=d.chkx&&d.stop(),d.chkx=q,d.nc.setScrollLeft(q));d.speedy&&(d.nc.getScrollTop()!=d.chky&&d.stop(),d.chky=r,d.nc.setScrollTop(r));d.timer||(d.nc.hideCursor(),d.doSnapy(q,r))});1>d.demulxy?d.timer=setTimeout(u,h):(d.stop(),d.nc.hideCursor(),d.doSnapy(q,r))};u()}else d.doSnapy(d.nc.getScrollLeft(),d.nc.getScrollTop())}},z=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(j){var d=e.data(j,"__nicescroll")||!1;return d&&d.ishwscroll?d.getScrollTop():z.call(j)},
set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollTop(parseInt(d)):z.call(j,d);return this}};e.fn.scrollTop=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollTop():z.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollTop(parseInt(j)):z.call(e(this),j)})};var B=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(j){var d=e.data(j,"__nicescroll")||
!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(j)},set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollLeft(parseInt(d)):B.call(j,d);return this}};e.fn.scrollLeft=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollLeft(parseInt(j)):B.call(e(this),j)})};for(var F=function(j){var d=this;
this.length=0;this.name="nicescrollarray";this.each=function(e){for(var j=0,k=0;k<d.length;k++)e.call(d[k],j++);return d};this.push=function(e){d[d.length]=e;d.length++};this.remove=function(e){d.each(function(j){this.id===e.id&&(delete d[j],d.length--)})};this.eq=function(e){return d[e]};if(j)for(a=0;a<j.length;a++){var k=e.data(j[a],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this},u=F.prototype,M="show hide toggle onResize resize remove stop doScrollPos".split(" "),Q=function(e,
d){e[d]=function(){var e=arguments;return this.each(function(){this[d].apply(this,e)})}},I=0;I<M.length;I++)Q(u,M[I]);e.fn.getNiceScroll=function(j){return"undefined"==typeof j?new F(this):e.data(this[j],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(j){return e.data(j,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(j,d){"undefined"==typeof d&&("object"==typeof j&&!("jquery"in j))&&(d=j,j=!1);var k=new F;"undefined"==typeof d&&(d={});j&&(d.doc=e(j),d.win=e(this));var s=!("doc"in
d);!s&&!("win"in d)&&(d.win=e(this));this.each(function(){var j=e(this).data("__nicescroll")||!1;j||(d.doc=s?e(this):d.doc,j=new P(d,e(this)),e(this).data("__nicescroll",j));k.push(j)});return 1==k.length?k[0]:k};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new F,e.nicescroll.options=K)})(jQuery);

define("BenchmarkViewModel", [], function () {
    var vm = function () {
        this.name = ko.observable('');
        this.expression = ko.observable('');
        this.hz = ko.observable(0);
        this.relativateMarginError = ko.observable('');
        this.timesFaster = ko.observable('pending...');
        this.slowest = ko.observable(false);
        this.fastest = ko.observable(false);
        this.iterationPerSampleCycle = ko.observable(0);
        this.numAnalysisCycles = ko.observable(0);
        this.numSampleCycles = ko.observable(0);
    };

    return vm;
});
define("Spy", [], function () {
    "use strict";
    return function (F) {
        function G() {
            var args = Array.prototype.slice.call(arguments);
            G.calls.push(args);
            F.apply(this, args);
        }

        G.prototype = F.prototype;
        G.calls = [];

        return G;
    };
});
define("Suite", ['Test', 'benchmark', 'SuiteViewModel'], function (Test, Benchmark, sVM) {
    function suite(desc, jsFunc, framework) {
        "use strict";
        var self = this;
        self.vm, self.jsContext;
        self.themeManager = window.ThemeManager;
        self.framework = "itchcork";
        if (framework) {
            self.framework = framework;
        }
        self.highlight = function (code) {
            if (self.framework == "itchcork") {

                return code
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/('.*?')/gm, '<span class="string">$1</span>')
                    .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
                    .replace(/(function|new|throw|return|var|if|else|prototype|Object|Array|Boolean|-&gt;|@|::|this)/g, '<span class="keyword">$1</span>');
            } else {
                return code;
            }
        };
        self.setupContextBreakdown = function (context, name) {
            console.log(context);
            var jsStr = '', coffeeStr = '';

            for (var prop in context) {
                if (context[prop] instanceof Function) {
                    jsStr = context[prop].toString();
                    try {
                        coffeeStr = Js2coffee.build(jsStr);
                        var tc = { name: name + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: self.highlight(coffeeStr)};
                        self.vm.testCases.push(tc);
                    } catch (err) {
                        var tc = { name: name + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: ''};
                        self.vm.testCases.push(tc);
                    }

                } else if (context[prop] instanceof Object) {
                    var tc = { name: name + prop, jsStr: Object.toSource ? context[prop].toSource() : 'is instanceof Object', coffeeStr: ''};
                    self.vm.testCases.push(tc);
                }
                if (context[prop] && context[prop].prototype && prop !== "constructor") {
                    self.setupContextBreakdown(context[prop].prototype, name + '.' + prop + '.prototype');
                }
            }
        };

        self.map = function () {
            self.vm = new sVM();
            self.vm.suiteDesc(desc);
            self.vm.jsContextStr(jsFunc.toString());
            self.vm.coffeeContextStr(self.highlight(Js2coffee.build(self.vm.jsContextStr())));
            self.vm.jsContextStr(self.highlight(self.vm.jsContextStr()));
            self.jsContext = new jsFunc();
            self.setupContextBreakdown(self.jsContext, jsFunc.name);
        };

        self.map(desc);


        self.add = function (shouldEqual, func) {
            if (typeof func == 'function') {
                self.addTestWithBenchmarks(shouldEqual, func, null, false);
            }
            return self;
        }

        self.currentTest;

        self.it = function (describe, func, shouldBe) {
            self.currentTest = self.addTestWithBenchmarks(shouldBe, func, describe, null, true);

            return self;
        };

        self.shouldBe = function shouldBe(val) {
            self.currentTest.shouldEqual = val;
            self.processTest(self.currentTest);
            return self;
        };

        self.processTest = function (test) {
            if (test.run()) {
                self.vm.passedCount(self.vm.passedCount() + 1);
                if (window.suiteView)
                    window.suiteView.incrementPassedCount();
            } else {
                self.vm.failedCount(self.vm.failedCount() + 1);
                if (window.suiteView)
                    window.suiteView.incrementFailedCount();
            }
            self.vm.tests.push(test);
        }

        self.addTestWithBenchmarks = function (shouldEqual, testFunc, describe, name, defer) {
            var test = new Test(shouldEqual, testFunc, new jsFunc(), name, describe);
            if (!defer) {
                self.processTest(test);
            }


            if (name) {
                var fn = (function (context, name) {
                    return function () {
                        context[name]();
                    };
                })(self.jsContext, name);
                self.vm.benchmarkSuite.add({
                    'name': test.expression,
                    'fn': fn,
                    'async': true,
                    'queued': true,
                    'minSamples': 100});
            }
            else {
                self.vm.benchmarkSuite.add(test.expression, function () {
                        testFunc(test.context);
                    },
                    { 'async': true, 'queued': true, 'minSamples': 100});
            }


            return test;
        };

        self.shouldEqual = function (shouldEqual) {
            self.shouldEqualValue = shouldEqual;
            return self;
        };

        self.compareBenchmarks = function () {
            var func = function (c, tc) {
                return c[tc]();
            };
            for (var testcase in self.jsContext) {
                console.log(typeof self.jsContext[testcase]);
                if (typeof self.jsContext[testcase] === 'function') {
                    self.addTestWithBenchmarks(self.shouldEqualValue, func, testcase, false);
                }
            }
            self.benchmark();

            return self;
        };

        self.benchmark = function () {
            self.vm.benchmarkingEnabled(true);
            self.vm.processBenchmarks();
        };

        if (window.suiteView)
            window.suiteView.add(self);
    };
    return suite;
});
define("SuiteView", ['UnitTestFrameworkManager'], function (utfm) {
    function view() {

        var self = this;

        self.unitTestFrameworkManager = new utfm();
        self.unitTestFrameworkManager.init();
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.suites = new ko.observableArray([]);
        self.totalTests = new ko.observable(0);
        self.totalPassed = new ko.observable(0);
        self.totalFailed = new ko.observable(0);
        self.githubAccount = new ko.observable('adamjmoon');
        self.githubRepo = new ko.observable('itchcork');
        self.githubBranch = new ko.observable('master');
        self.contextRoot = new ko.observable('raw.github.com/' + self.githubAccount() + '/' + self.githubRepo() + '/' + self.githubBranch() + '/');
        self.vendorRoot = new ko.observable(self.contextRoot() + 'vendor/');
        self.currentTheme = ko.observable(amplify.store('currentTheme'));
        self.currentView = ko.observable('');
        var customTheme = amplify.store('customTheme');
        self.cto = {};
        for (var prop in customTheme) {
            self.cto[prop] = ko.observable(customTheme[prop]);
        }
        for (var prop in self.cto) {
            self.cto[prop].subscribe(new Function('newValue', "window.ThemeManager.updateCustom('" + prop + "',newValue);")

            );
        }

        self.reset = function () {
            "use strict";
            self.suites([]);
            self.totalTests(0);
            self.totalPassed(0);
            self.totalFailed(0);
        }


        self.setMenuHeight = function () {

            if (self.view.scrollHeight > window.innerHeight) {
                if (self.view.scrollHeight > self.menu.scrollHeight) {
                    self.menu.style.height = self.view.scrollHeight - 45 + 'px';
                }
            }
            else {
                self.menu.style.height = window.innerHeight - 45 + 'px';
            }

        };

        self.add = function (suite) {

            suite.vm.num = self.suites().length + 1;
            self.suites.push(suite.vm);
            if (self.suites().length === 1 && self.unitTestFrameworkManager.getFramework() === 'itchcork') {
                self.bindView();
            }

            suite.vm.benchmarksDone.subscribe(function (newValue) {
                self.setMenuHeight();
            });

        };

        self.incrementPassedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalPassed(self.totalPassed() + 1);
        };

        self.incrementFailedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalFailed(self.totalFailed() + 1);
        };

        self.bindView = function () {

            ko.applyBindings(self, document.getElementById('frame'));
            self.setMenuHeight();
            require([self.vendorRoot() + 'jscolor'], function () {
                jscolor.init();
            });
            self.setupNiceScroll();

        };


        self.setTheme = function (theme) {
            window.ThemeManager.set(theme);
            self.currentTheme(theme);
        };

        self.toggleMenu = function () {
            var menu = document.getElementById('menu');
            if (menu.style.display != 'none') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        };


        self.setupNiceScroll = function () {
            window.scrollTo(0, 0);
            $("html").niceScroll();
            $("#view").niceScroll();
            self.view.onresize = function () {
                self.nice.resize();
            };
        };
        self.scrollToSelector = function (selector) {
            window.scrollTo(0, $(selector).position().top);
        };

        self.collapseAll = function () {
            if ($("#rightCorkCollapse").hasClass('expandAll')) {
                $('div.collapsed').click();
                $("#rightCorkCollapse").removeClass('expandAll').addClass('collapseAll');
            } else {
                $('div.in').siblings().children('.collapseToggle').click();
                $("#rightCorkCollapse").removeClass('collapseAll').addClass('expandAll');
            }
        };

    };
    return view;
});

define("SuiteViewModel", ['benchmark', 'BenchmarkViewModel'], function (Benchmark, bVM) {
    var vm = function () {
        var self = this;
        this.num = 0;
        self.passedCount = ko.observable(0), self.failedCount = ko.observable(0);
        this.suiteDesc = ko.observable('');
        this.jsContextStr = ko.observable('');
        this.coffeeContextStr = ko.observable('');
        this.tests = ko.observableArray([]);
        this.testCases = ko.observableArray([]);
        this.shouldShow = ko.observable(true);
        self.benchmarks = ko.observableArray([]);
        this.benchmarksDone = ko.observable(false);
        this.benchmarkPlatform = ko.observable('');
        this.benchmarkSuite = new Benchmark.Suite();
        this.benchmarkPlatform(Benchmark.platform.description);
        this.benchmarkingEnabled = ko.observable(false);

        this.processBenchmarks = function () {
            self.benchmarksDone(false);
            self.benchmarks.removeAll();
            self.runBenchmarks();
        }

        this.runBenchmarks = function () {
            self.benchmarkSuite.on('cycle', function (event) {
                var b = event.target;

                var bm = new bVM();
                bm.name(b.name);
                bm.expression(b.name.replace(/context\.(.*?)\(\)\;/gi, '$1'));
                bm.hz(b.hz.toFixed(0));
                bm.relativateMarginError(b.stats.rme.toFixed(2) + '%');
                bm.iterationPerSampleCycle(b.count);
                bm.numAnalysisCycles(b.cycles);
                bm.numSampleCycles(b.stats.sample.length);

                self.benchmarks.push(bm);
            })
                .on('complete', function () {

                    self.benchmarks.sort(function (left, right) {
                        var leftHz = parseInt(left.hz());
                        var rightHz = parseInt(right.hz());
                        return leftHz == rightHz ? 0 : (leftHz > rightHz ? -1 : 1)
                    });
                    self.benchmarks()[0].fastest(true);
                    var length = self.benchmarks().length;
                    self.benchmarks()[length - 1].slowest(true);
                    var slowestHz = self.benchmarks()[length - 1].hz();
                    for (var i = 0; i < length; i++) {
                        self.benchmarks()[i].timesFaster((self.benchmarks()[i].hz() / slowestHz).toFixed(3));
                    }
                    self.benchmarksDone(true);
                });


            self.benchmarkSuite.run();
        };


    };

    return vm;
});
define("Test", [], function () {

    var test = function (shouldEqual, func, ctx, testName, describe) {
        'use strict';
        var expressionStr = func.toString().trim(), self = this;
        this.context = ctx;
        this.passed = false;
        this.describe = describe;
        if (testName) {
            this.expression = testName + '()';
            this.actual = func(this.context, testName);

        } else {
            this.expression = expressionStr.replace(/\n/gm, '')
                .replace(/function +?\(c\) +?\{+?return(.*?)\;+?\}/g, '$1')
                .replace(/function +?\(c\) +?\{ +?return(.*?)\; +?\}/g, '$1');


            this.actual = func(this.context);
        }
        this.shouldEqual = shouldEqual;

        this.typeOf = typeof(this.actual);

        this.run = function () {
            self.passed = self.shouldEqual === self.actual;
            return self.passed;
        };
    };

    return test;
});
define("UnitTestFrameworkManager", [], function () {
    return function UnitTestFrameworkManager() {

        UnitTestFrameworkManager.prototype.init = function () {
            if (!amplify.store('currentUnitTestFramework')) {
                this.set('itchcork');
            }
            return this.getFramework();
        }
        UnitTestFrameworkManager.prototype.set = function (framework) {
            if (framework != amplify.store('currentUnitTestFramework')) {
                amplify.store('currentUnitTestFramework', framework);
            }
        };
        UnitTestFrameworkManager.prototype.getFramework = function () {
            return amplify.store('currentUnitTestFramework');
        };
    };
});
define("Verify", [], function () {
    return function (F) {
        'use strict';
        return function () {
            var args = Array.prototype.slice.call(arguments),
                i,
                j,
                call,
                count = 0,
                matched;

            for (i = 0; i < F.calls.length; i += 1) {
                call = F.calls[i];
                matched = true;
                for (j = 0; j < args.length; j += 1) {
                    if (args[j] !== call[j]) {
                        matched = false;
                        break;
                    }
                }
                if (matched) {
                    count += 1;
                }
            }

            return count > 0;
        };
    };
});
define("itchcork", ['Suite', 'Test', 'Spy', 'Verify'], function (Suite, Test, Spy, Verify) {
    'use strict';
    var itchcork = function () {

        itchcork.prototype.Suite = Suite;
        itchcork.prototype.Test = Test;
        itchcork.prototype.Spy = Spy;
        itchcork.prototype.Verify = Verify;
    };
    window.ItchCork = new itchcork();
    return window.ItchCork;
});


    require(['SuiteView', 'itchcork', 'context'], function (sv, itchcork) {

        window.suiteView = new sv();
        var context = '';
        if (window.location.pathname && window.location.pathname.length > 1)
            context = window.location.pathname.split('/')[1];
        else if (window.location.hash && window.location.hash.length > 1)
            context = window.location.hash.split('#')[1];

        var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
        var suiteFilePath = suiteView.contextRoot() + 'examples/test';

        requirejs.config({
            baseUrl: 'https://',
            paths: {
                'context': suiteView.contextRoot() + 'examples/all-context',
                'suite': suiteFilePath + "/" + suite,
                'suitePath': suiteFilePath
            }
        });

            $("#topNav").show();
            $('div.frame').show();

        require(['ItchCork', 'context'], function (itchcork) {
            if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
                require(['suite'], function () {

                });
            }

            var runItchCork = function () {
                "use strict";
                $.get('/benchmarkList', function (benchmarks) {
                    require(benchmarks, function () {
                    });
                });
            };

            var runMocha = function () {
                chai.use(sinonChai);
                window.assert = chai.assert;
                window.should = chai.should();
                   require(['chai', 'sinon-chai','mocha'], function (chai, sinonChai, mocha) {

                        if (window.location.search) {
                            var array = window.location.search.split('?');
                            var spec = array[1];
                            run([spec]);
                        } else {
                            $.get('/specs', function (specs) {

                                run(specs);

                            });
                        }


                        var run = function (specs) {
                            if (window.mochaPhantomJS) {
                                mochaPhantomJS.run();
                            }
                            else {
                                mocha.checkLeaks();
                                mocha.globals(['jQuery']);
                                mocha.run();
                                mocha.setup('bdd');
                                mocha.reporter('html');
                                require(specs, function () {
                                    var runner = mocha.run();

                                    runner.on('end', function () {
                                        window.suiteView.totalTests(runner.total);
                                        window.suiteView.totalPassed(runner.total - runner.failures);
                                        window.suiteView.totalFailed(runner.failures);
                                            _.each(runner.suite.suites,
                                                function (s) {
                                                    require([s.title], function (c) {
                                                       // var suite = new window.ItchCork.Suite(s.title, c, "mocha");
                                                    });
                                                });
                                        var suites = $("ul#mocha-report li.suite ul");
                                        $("#collapse").click(function () {
                                            $(suites).each(function (index, element) {
                                                element.hidden = true;
                                            });
                                            $("#collapse").hide();
                                            $("#expand").show();
                                        });
                                        $("#expand").click(function () {
                                            $(suites).each(function (index, element) {
                                                element.hidden = false;
                                            });
                                            $("#expand").hide();

                                            $("#collapse").show();
                                        });
                                        postResults(runner.stats, function () {
                                            }
                                        );
                                        window.suiteView.bindView();
                                    });
                                });
                            }
                        }
                    });
                };




                    else if (view.indexOf('benchmarks') > -1) {
                        window.suiteView.currentView('Benchmarks');
                        window.suiteView.unitTestFrameworkManager.set('itchcork');
                        require(['/js/app.js'], function () {
                            "use strict";
                            runItchCork();
                        })
                        ;
                    }
                    else {

                        window.suiteView.currentView('UnitTests');
                        window.suiteView.unitTestFrameworkManager.set('mocha');
                        require(['mocha','/js/app.js'], function () {
                            window.mocha = mocha;
                            runMocha();
                        });
                    }
                });
            });
        });
    });
});
/*!ui.browserscope.js*/
(function(e,t){function g(e,t,n){if(e=typeof e=="string"?x(e)[0]:e){if(typeof e.addEventListener!="undefined"){e.addEventListener(t,n,false)}else if(typeof e.attachEvent!="undefined"){e.attachEvent("on"+t,n)}}return e}function y(e,n,r){var i;n&&n.nodeType&&(r=n,n=0);r=r?r.ownerDocument||r:t;n||(n="");try{i=r.createElement("<"+e+' name="'+n+'">')}catch(s){(i=r.createElement(e)).name=n}return i}function b(e,t){var n=y("div",t);n.innerHTML="x<style>"+e+"</style>";return n.lastChild}function w(e,t){t||(t={});for(var n in t){e[n]=t[n]}return e}function E(e){e=x(e)[0];return e&&(e.textContent||e.innerText)||""}function S(e,t,n){n=t?t.ownerDocument||[t,t=0][0]:n;var r=y("script",n),i=t?t.nextSibling:x("script",n).pop();r.src=e;return(t||i).parentNode.insertBefore(r,i)}function x(e,n){var r=[];e||(e="");n=typeof n=="string"?x(n)[0]:n||t;if(e.nodeType){r=[e]}else if(n){f(e.split(","),function(e){f(/^#/.test(e)?[n.getElementById(e.slice(1))]:n.getElementsByTagName(e),function(e){r.push(e)})})}return r}function T(e,t,n){if(e=x(e)[0]){e.innerHTML=P(t,n)}return e}function N(e,t){var n=ui.browserscope,r=n.container;if(r){r.className="bs-rt-message";T(r,e,t)}}function C(){var e=ui.browserscope,t=[],n=frames[x("iframe",e.container)[0].name].document,r=x("text,textpath",n),i=e.uaClass,o=false;if(r.length){f(x("link,style"),function(e){try{var n=e.sheet||e.styleSheet;f(n.cssRules||n.rules,function(e){if((e.selectorText||e.cssText).indexOf("."+i)>-1){t.push(e.style&&e.style.cssText||/[^{}]*(?=})/.exec(e.cssText)||"")}})}catch(r){}});x("head",n)[0].appendChild(b("."+i+"{"+t.join(";")+"}",n));f(r,function(e){var t;if((e.string||E(e)).charAt(0)==s){if(e.string){e.className=i;t=e.nextSibling;e.parentNode.insertBefore(e.removeNode(),t)}else{e.setAttribute("class",i)}o=true}})}return o}function k(){var e=ui.browserscope,t=e.timings,r=n.timers,i=n.trash,s=t.cleanup*1e3;if(r.cleanup&&!ui.running){f(x("iframe,script"),function(e){var n=+(/^browserscope-\d+-(\d+)$/.exec(e.name)||0)[1]+u(s,t.timeout*1e3);if(new Date>n||/browserscope\.org|google\.com/.test(e.src)){i.appendChild(e);i.innerHTML=""}})}r.cleanup=setTimeout(k,s)}function L(e){var t,n,r=e;if(D(e)){r=v(e,L)}else if(e===Object(e)){n=e.constructor;r=n==Object?{}:(t=function(){},t.prototype=n.prototype,new t);c(e,function(e,t){r[t]=L(e)})}return r}function A(){var e=d(l(ui.benchmarks,function(e){return e.cycles&&isFinite(e.hz)}),"clone");var t;f(e.sort(function(e,t){e=e.stats;t=t.stats;return e.mean+e.moe>t.mean+t.moe?-1:1}),function(e){if(t&&!t.compare(e)){e.count=t.count;e.cycles=t.cycles;e.hz=t.hz;e.stats=w({},t.stats)}t=e});return m(e,function(e,t,n){var r=t.stats;e||(e={});n=F(t.name);e[n&&!p(e,n)?n:n+t.id]=o(1/(r.mean+r.moe));return e},null)}function O(e){var t=[];c(e,function(e){return!(D(e)&&(t=e))});return t}function M(e){var t=[],n={};c(e,function(e){return!(D(e)&&0 in e&&"type"in e[0]&&(t=e))});f(ui.benchmarks,function(e){var t=F(e.name);n[t&&!p(n,t)?t:t+e.id]=e.name});return f(t,function(e){var t=n[e.label];t&&(e.label=t)})}function _(e){var t,r=n.lastFilterBy,i=j(E(x("strong","#bs-ua")[0]),r),s=ui.browserscope.uaClass,o=[];c(e,function(e,n){return!(D(e)&&0 in e&&!("type"in e[0])&&(t=n,o=e))});if(o.length){o=e[t]=l(o,function(e){var t=O(e),n=t[0],o=t[1];if(n&&o&&o.f){delete n.p.className;if(i==j(n.f,r)){n.p.className=s}return true}})}return o}function D(e){return i.call(e)=="[object Array]"}function P(e,t){c(t,function(t,n){e=e.replace(RegExp("#\\{"+n+"\\}","g"),t)});return e}function H(e,t){function n(r){if(r||e()!==false){setTimeout(n,t*1e3)}}n(true)}function B(e){clearTimeout(n.timers[n.lastAction]);n.lastAction=e}function j(e,t){e||(e="");if(t=="all"){e=e.replace(/(\d+)[.0]+$/,"$1")}else if(t=="family"){e=e.replace(/[.\d\s]+$/,"")}else if(/minor|popular/.test(t)&&/\d+(?:\.[1-9])+$/.test(e)){e=e.replace(/(\d+\.[1-9])(\.[.\d]+$)/,"$1")}else{e=e.replace(/(\d+)(?:(\.[1-9]$)|(\.[.\d]+$))/,"$1$2")}return e}function F(e){return(e||"").replace(/[^a-z0-9]+/gi," ")}function I(t){function c(e){var t=a[u];if(!i){i=true;if(u==n.lastFilterBy){s.render({force:true,response:t||e})}else if(!t&&e&&!e.isError()){a[u]=e}}}t||(t={});var i,s=ui.browserscope,o=s.container,u=n.lastFilterBy=t.filterBy||n.lastFilterBy,a=n.responses,f=n.responses[u],l=e.google&&google.visualization;B("load");if(!o||!l||f){o&&c(f)}else if(!ui.running){n.timers.load=setTimeout(c,s.timings.timeout*1e3);N(s.texts.loading);(new l.Query("//www.browserscope.org/gviz_table_data?category=usertest_"+s.key+"&v="+r[u],{sendMethod:"scriptInjection"})).send(c)}}function q(){var e,r,i=t.body,s=ui.browserscope,o=s.key,u=s.timings,a="browserscope-"+n.counter++ +"-"+ +(new Date),f=A();B("post");if(o&&f&&s.postable&&!ui.running&&!/Simulator/i.test(Benchmark.platform)){r=y("iframe",a);i.insertBefore(r,i.firstChild);e=frames[a].document;r.style.display="none";s.snapshot=f;N(s.texts.post);e.write(P("#{doctype}<html><body><script>"+"with(parent.ui.browserscope){"+"var _bTestResults=snapshot,"+"_bC=function(){clearTimeout(_bT);parent.setTimeout(function(){purge();load()},#{refresh}*1e3)},"+"_bT=setTimeout(function(){_bC=function(){};render()},#{timeout}*1e3)"+"}</script>"+"<script src=//www.browserscope.org/user/beacon/#{key}?callback=_bC></script>"+"</body></html>",{doctype:/css/i.test(t.compatMode)?"<!doctype html>":"",key:o,refresh:u.refresh,timeout:u.timeout}));e.close()}else{s.load()}}function R(e){var t=n.responses;if(e){delete t[e]}else{c(t,function(e,n){delete t[n]})}}function U(t){function G(e){var r=n.lastAction;if(e||ui.running){n.timers[r]=setTimeout(G,d.timings.retry*1e3)}else{d[r].apply(d,r=="render"?[t]:[])}}t||(t={});var r,i,o,l,c,p,d=ui.browserscope,v=d.container,m=n.responses,g=e.google&&google.visualization,y=n.lastChart,b=n.lastChart=t.chart||y,w=n.lastFilterBy,E=n.lastFilterBy=t.filterBy||w,S=m[E],x=m[E]="response"in t?(x=t.response)&&!x.isError()&&x:S,T="100%",k=80,A=13,D="auto",P="operations per second (higher is better)",j=48,F=240,q="top",R=0,U=20,z=0,W=480,X=v&&v.offsetWidth||948,V="",$=50,J="",K=48,Q=X;B(x?"render":n.lastAction);if(!v||g&&(E!=w||!t.force&&b==y&&x==S)){v&&E!=w&&I(t)}else if(!x||!g){!x&&g&&N(d.texts.error);G(true)}else if(!ui.running){v.className="";o=L(x.getDataTable());l=M(o);p=_(o);c=p.length;b=b.charAt(0).toUpperCase()+b.slice(1).toLowerCase();if(b!="Table"){l.pop();f(p,function(e){f(O(e),function(e,t,n){var r=n.length-1;if(/^[\d.,]+$/.test(e.f)){e.v=+e.f.replace(/,/g,"");e.f+=" ops/sec";z=u(z,e.v)}else if(e.f){e.f+=b=="Pie"?"":" ("+(n[r].v||1)+")";R=a(U,u(R,e.f.length))}if(b=="Pie"){if(t==r){n[1].f=h(n[1].v)+" total ops/sec"}else if(t>1&&typeof e.v=="number"){n[1].v+=e.v}}if(e.p&&e.p.className){e.f=s+e.f;H(function(){return!C()},.01)}})});if(b=="Bar"){D=u(W,$+c*k);F=R*(A/1.6)+10;T=100-(F+50)/Q*100+"%"}else{J=[P,P=J][0];D=W;if(b=="Pie"){q="right";V="Total operations per second by browser (higher is better)"}else{j=28;F=K+h(z).length*(A/1.6)+13;i=R*(A/2)+26;Q=u(X,F+c*i)}}r=100-(j+A+$+8)/D*100+"%";b+="Chart"}if(c&&g[b]){(new g[b](v)).draw(o,{fontSize:A,is3D:true,legend:q,height:D,title:V,width:Q,chartArea:{height:r,left:F,top:$,width:T},hAxis:{title:P},vAxis:{title:J}})}else{N(d.texts.empty)}}}var n={counter:0,lastAction:"load",lastChart:"bar",lastFilterBy:"all",responses:{},timers:{},trash:y("div")},r={all:3,desktop:"top-d",family:0,major:1,minor:2,mobile:"top-m",popular:"top",prerelease:"top-d-e"},i={}.toString,s="\u2028",o=Math.floor,u=Math.max,a=Math.min,f=Benchmark.each,l=Benchmark.filter,c=Benchmark.forOwn,h=Benchmark.formatNumber,p=Benchmark.hasKey,d=Benchmark.invoke,v=Benchmark.map,m=Benchmark.reduce;ui.browserscope={key:"113842991729471998627",postable:true,selector:"#bs-results",uaClass:"rt-ua-cur",timings:{cleanup:10,refresh:3,retry:5,timeout:10},texts:{empty:"No data available",error:"The get/post request has failed :(",loading:"Loading cumulative results data…",post:"Posting results snapshot…",wait:"Benchmarks running. Please wait…"},load:I,post:q,purge:R,render:U};g(e,"load",function(){var e=ui.browserscope,t=e.key,n=t&&x(e.selector)[0];if(n){T(n,"<h1 id=bs-logo><a href=//www.browserscope.org/user/tests/table/#{key}>"+"<span>Browserscope</span></a></h1>"+"<div class=bs-rt><div id=bs-chart></div></div>",{key:t});e.container=x("#bs-chart")[0];S("//www.browserscope.org/ua?o=js",e.container).id="bs-ua-script";S("//www.google.com/jsapi?autoload="+encodeURIComponent("{"+"modules:[{"+'name:"visualization",'+"version:1,"+'packages:["corechart","table"],'+"callback:ui.browserscope.load"+"}]"+"}"));k()}});ui.addListener("start",function(){N(ui.browserscope.texts.wait)}).addListener("abort",function(){ui.browserscope.render({force:true})})})(this,document);