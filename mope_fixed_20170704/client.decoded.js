(function () {
  var t = {
    scope: {}
  };
  t.defineProperty = typeof Object.defineProperties == "function" ? Object.defineProperty : function (e, t, a) {
    if (a.get || a.set) {
      throw new TypeError("ES3 does not support getters and setters.");
    }
    if (e != Array.prototype && e != Object.prototype) {
      e[t] = a.value;
    }
  };
  t.getGlobal = function (e) {
    if (typeof window != "undefined" && window === e) {
      return e;
    } else if (typeof global != "undefined") {
      return global;
    } else {
      return e;
    }
  };
  t.global = t.getGlobal(this);
  t.polyfill = function (e, a, i, r) {
    if (a) {
      i = t.global;
      e = e.split(".");
      for (r = 0; r < e.length - 1; r++) {
        var s = e[r];
        if (!(s in i)) {
          i[s] = {};
        }
        i = i[s];
      }
      e = e[e.length - 1];
      r = i[e];
      a = a(r);
      if (a != r && a != null) {
        t.defineProperty(i, e, {
          configurable: true,
          writable: true,
          value: a
        });
      }
    }
  };
  t.polyfill("Math.trunc", function (e) {
    if (e) {
      return e;
    } else {
      return function (e) {
        e = Number(e);
        if (isNaN(e) || e === Infinity || e === -Infinity || e === 0) {
          return e;
        }
        var t = Math.floor(Math.abs(e));
        if (e < 0) {
          return -t;
        } else {
          return t;
        }
      };
    }
  }, "es6-impl", "es3");
  t.polyfill("Array.prototype.fill", function (e) {
    if (e) {
      return e;
    } else {
      return function (e, t, a) {
        var i = this.length || 0;
        if (t < 0) {
          t = Math.max(0, i + t);
        }
        if (a == null || a > i) {
          a = i;
        }
        a = Number(a);
        if (a < 0) {
          a = Math.max(0, i + a);
        }
        for (t = Number(t || 0); t < a; t++) {
          this[t] = e;
        }
        return this;
      };
    }
  }, "es6-impl", "es3");
  var a = 198;
  var i = false;
  var r = "master1.mope.io";
  var s = 400;
  var n = 500;
  var l = [];
  for (var o = ["USA-East", "USA-West", "Brazil/ USA-South", "Europe", "Asia/Australia"], h = {}, c = 0; c < o.length; c++) {
    h[o[c]] = [];
  }
  function g(e, t, a) {
    e = {
      name: e,
      ip: t,
      serverConnURL: t,
      region: a,
      playersCount: -1,
      ping: 10000,
      domOptionIndex: 0
    };
    if (!i && !isNaN(parseInt(e.ip.substring(0, 1), 10))) {
      e.serverConnURL = "gameserv-" + (e.ip + "").replace(/\./g, "-") + ".mope.io";
    }
    l.push(e);
    h[a].push(e);
    return e;
  }
  if (i) {
    var f = "USA-East";
    g("LOCAL TEST", "127.0.0.1", f);
  } else {
    console.log("------------MOPE.IO-------------");
    f = "USA-East";
    g("USA 1 (New York)", "104.207.132.63", f);
    g("USA 2 (New York)", "107.191.40.35", f);
    g("USA 3 (New York)", "107.191.43.180", f);
    g("USA 4 (New York)", "45.63.17.44", f);
    g("USA 5 (New York)", "107.191.40.38", f);
    g("USA 6 (Miami)", "104.238.138.249", f);
    g("USA 7(Chicago)", "45.76.20.213", f);
    g("USA 8(Chicago)", "45.76.28.156", f);
    f = "USA-West";
    g("USA 9 (California)", "45.63.87.103", f);
    g("USA 10 (California)", "45.32.137.149", f);
    g("USA 11 (California)", "45.76.67.64", f);
    g("USA 12 (California)", "45.63.51.60", f);
    g("USA 12 (Seattle)", "45.32.228.141", f);
    g("USA 14 (Seattle)", "104.207.158.226", f);
    f = "Brazil/ USA-South";
    g("USA 15 (Texas)", "108.61.224.165", f);
    g("USA 16 (Texas)", "107.191.55.233", f);
    g("USA 17 (Texas)", "45.32.198.173", f);
    g("USA 18 (Texas)", "104.238.147.152", f);
    g("USA 19 (Texas)", "108.61.205.88", f);
    f = "Europe";
    g("Europe 1 (London)", "45.63.98.41", f);
    g("Europe 2 (London)", "104.238.170.8", f);
    g("Europe 3 (London)", "45.76.129.33", f);
    g("Europe 4 (London)", "45.76.134.74", f);
    g("Europe 5 (London)", "45.76.135.33", f);
    g("Europe 6 (London)", "45.76.129.125", f);
    g("Europe 7 (Germany)", "45.32.152.68", f);
    g("Europe 8 (Paris)", "45.32.144.28", f);
    g("Europe 9 (Amsterdam)", "185.92.221.137", f);
    g("Europe 10 (Germany)", "45.32.156.214", f);
    g("Europe 11 (Germany)", "45.32.154.83", f);
    g("Europe 12 (Germany)", "45.63.117.122", f);
    g("Europe 13 (Germany)", "104.238.159.143", f);
    g("Europe 14 (Germany)", "45.32.157.75", f);
    f = "Asia/Australia";
    g("Asia 1 (Australia)", "45.63.28.66", f);
    g("Asia 2 (Australia)", "45.76.112.176", f);
    g("Asia 3(Singapore)", "45.32.101.8", f);
  }
  var u = 2;
  function m(e) {
    e = e.split("+").join(" ");
    var t = {};
    for (var a, i = /[?&]?([^=]+)=([^&]*)/g; a = i.exec(e);) {
      t[decodeURIComponent(a[1])] = decodeURIComponent(a[2]);
    }
    return t;
  }
  var p = m(document.location.search);
  var b = p.mobileios > 0;
  var y = p.mobileAndroid > 0;
  var w = b || y;
  var P = true;
  var I = p.videoson > 0;
  var v = p.nofullscr > 0;
  var k = p.videomode > 0;
  if (k) {
    setTimeout(function () {
      var e = document.getElementById("startMenuWrapper");
      if (e) {
        e.style.display = "none";
      }
    }, 4000);
  }
  var A = false;
  if (!w) {
    var M = document.createElement("div");
    M.innerHTML = "&nbsp;";
    M.className = "adsbox";
    document.body.appendChild(M);
    window.setTimeout(function () {
      if (M.offsetHeight === 0) {
        A = true;
        document.getElementById("blockedImg").style.display = "block";
      }
      M.remove();
      console.log("AdBlock Enabled? ", A);
    }, 1000);
  }
  var T = false;
  var x = p.s;
  var S = p.l;
  var E = location.hostname.split(".");
  var D = E.shift();
  var _ = D == "miniclipref";
  if (_) {
    var B = document.getElementById("appsDiv");
    if (B) {
      B.style.display = "none";
    }
  }
  if (x != null && S != null && S.length > 5) {
    T = true;
  }
  if (!w) {
    (function (e, t, a, i, r, s, n) {
      e.GoogleAnalyticsObject = r;
      e[r] = e[r] || function () {
        (e[r].q = e[r].q || []).push(arguments);
      };
      e[r].l = new Date() * 1;
      s = t.createElement(a);
      n = t.getElementsByTagName(a)[0];
      s.async = 1;
      s.src = i;
      n.parentNode.insertBefore(s, n);
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
    if (_) {
      console.log("Referral: Tracking Miniclip-referred player!");
    }
    ga("create", "UA-36494583-11", "auto");
    if (_) {
      ga("create", "UA-36494583-12", "auto", "miniclipRef");
    }
    ga("send", "pageview");
    if (_) {
      ga("miniclipRef.send", "pageview");
    }
  }
  function U(e) {
    this.serverObj = e;
    e = window.location.protocol === "https:" ? "wss://" : "ws://";
    this.testWs = new WebSocket(e + this.serverObj.serverConnURL + ":" + (e == "wss://" ? 7021 : 7020));
    this.startT = +new Date();
    this.testWs.binaryType = "arraybuffer";
    var t = this;
    this.pingsDelayMsTot = this.pingsRec = 0;
    this.testWs.onopen = function () {
      t.sendPing();
    };
    this.sendPing = function () {
      var e = new $i(1);
      e.writeUInt8(255);
      t.testWs.send(e.dataView.buffer);
      this.startT = +new Date();
    };
    this.testWs.onmessage = function (e) {
      e = new Qi(new DataView(e.data));
      if (e.readUInt8() == 255) {
        e = +new Date() - t.startT;
        t.pingsRec += 1;
        t.pingsDelayMsTot += e;
        if (t.pingsRec >= 3) {
          t.serverObj.ping = t.pingsDelayMsTot / t.pingsRec;
          t.testWs.close();
          G(t);
        } else {
          t.sendPing();
        }
      }
    };
  }
  var C = i ? o[0] : o[Ti(0, Math.max(0, o.length - 1 - 1))];
  var N = 0;
  var O = h[C][N];
  var C = O.region;
  var R = O;
  var W = [];
  var F = false;
  var H = false;
  var L;
  function z() {
    if (H) {
      j();
    } else if (!F) {
      F = true;
      for (var e in h) {
        if (h.hasOwnProperty(e) && h[e].length > 0 && e != "SANDBOX") {
          W.push(new U(h[e][0]));
        }
      }
      L = setTimeout(function () {
        for (var e = 0; e < W.length; e++) {
          W[e].testWs.close();
        }
        j();
      }, 3000);
    }
  }
  function G(e) {
    if (e.serverObj.ping < R.ping) {
      R = e.serverObj;
    }
    e = W.indexOf(e);
    if (e != -1) {
      W.splice(e, 1);
    }
    if (W.length == 0) {
      if (L) {
        clearTimeout(L);
      }
      j();
    }
  }
  function j() {
    if (F) {
      H = true;
    }
    F = false;
    console.log("@@@@  Fastest region is " + R.region + " with ping " + R.ping + "ms ");
    C = R.region;
    X();
  }
  function X() {
    var e = h[C].slice();
    e.sort(function (e, t) {
      if (e.playersCount < t.playersCount) {
        return 1;
      } else if (e.playersCount > t.playersCount) {
        return -1;
      } else {
        return 0;
      }
    });
    var t = false;
    var a = true;
    for (var i = 0; i < e.length; i++) {
      if (e[i].playersCount < n && e[i].playersCount >= 0) {
        a = false;
      }
      if (e[i].playersCount < s && e[i].playersCount >= 0) {
        O = e[i];
        N = h[C].indexOf(O);
        t = true;
        break;
      }
    }
    if (!t) {
      if (a && vs) {
        console.log("All servers in region " + C + " are full/offline! Picking random server...");
        a = true;
        i = 0;
        for (; i < l.length; i++) {
          if (l[i].playersCount < n) {
            O = l[i];
            N = h[O.region].indexOf(O);
            C = O.region;
            break;
          }
        }
      } else {
        O = e[Ti(0, e.length - 1)];
        N = e.indexOf(O);
      }
    }
    _s();
    Ds();
    Es();
    console.log("Connecting to best server...");
    if (Cs()) {
      ws.close();
    }
    ir();
  }
  var Y = 0.175;
  var V = "#3FBA54";
  var J = "#09992F";
  var q = "#007ec0";
  var K = "grey";
  var Z = "#09992F";
  var Q = "#4E66E4";
  var $ = "#ff6000";
  var ee = "#4655A6";
  var te = ee;
  var ae = "#c8b745";
  var ie = "#F35F53";
  var re = "#CF6259";
  var se = "#FF911E";
  var ne = "#C67019";
  var le = "#EF3C31";
  var oe = "#4AE05E";
  var he = "#8C9688";
  function ce(e) {
    switch (e) {
      case Xa:
        return q;
      case Ya:
        return K;
      default:
      case ja:
        return J;
    }
  }
  var de = 1;
  var ge = 2;
  var fe = 3;
  var ue = 4;
  var me = 5;
  var pe = 6;
  var be = 7;
  var ye = 8;
  var we = 9;
  var Pe = 10;
  var Ie = 11;
  var ve = 12;
  var ke = 13;
  var Ae = 14;
  var Me = 15;
  var Te = 16;
  var xe = 17;
  var Se = 18;
  var Ee = 19;
  var De = 20;
  var _e = 21;
  var Be = 22;
  var Ue = 23;
  var Ce = 24;
  var Ne = 25;
  var Oe = 26;
  var Re = 27;
  var We = 28;
  var Fe = 29;
  var He = 30;
  var Le = 31;
  var ze = 32;
  var Ge = 33;
  var je = 34;
  var Xe = 35;
  var Ye = 36;
  var Ve = 37;
  var Je = 38;
  var qe = 39;
  var Ke = 40;
  var Ze = 41;
  var Qe = 42;
  var $e = 43;
  var et = 44;
  var tt = 45;
  var at = 46;
  var it = 47;
  var rt = 48;
  var st = 49;
  var nt = 50;
  var lt = 51;
  var ot = 1;
  var ht = 2;
  var ct = 3;
  var dt = 4;
  var gt = 5;
  var ft = 6;
  var ut = 7;
  var mt = 8;
  var pt = 9;
  var bt = 10;
  var yt = 11;
  var wt = 12;
  var Pt = 13;
  var It = 14;
  var vt = 15;
  var kt = 16;
  var At = 17;
  var Mt = 18;
  var Tt = 19;
  var xt = 20;
  var St = 21;
  var Et = 22;
  var Dt = 23;
  var _t = 24;
  var Bt = 25;
  var Ut = 26;
  var Ct = 27;
  var Nt = 28;
  var Ot = 29;
  var Rt = 30;
  var Wt = 31;
  var Ft = 32;
  var Ht = 33;
  var Lt = 34;
  var zt = 35;
  var Gt = 36;
  var jt = 37;
  var Xt = 38;
  var Yt = 39;
  var Vt = 40;
  var Jt = 42;
  var qt = 43;
  var Kt = 44;
  var Zt = 46;
  var Qt = 47;
  var $t = 48;
  var ea = 49;
  var ta = 50;
  var aa = 51;
  var ia = 52;
  var ra = 53;
  var sa = 54;
  var na = 100;
  var la = 101;
  var oa = 0;
  var ha = 1;
  var ca = 2;
  var da = 3;
  var fa = 4;
  var ua = 5;
  var ma = 6;
  var pa = 7;
  var ba = 8;
  var ya = 9;
  var wa = 10;
  var Pa = 11;
  var Ia = 12;
  var va = 13;
  var ka = 14;
  var Aa = 15;
  var Ma = 16;
  var Ta = 17;
  var xa = 18;
  var Sa = 19;
  var Ea = 20;
  var Da = 21;
  var _a = 22;
  var Ba = 23;
  var Ua = 24;
  var Ca = 25;
  var Na = 26;
  var Oa = 27;
  var Ra = 28;
  var Wa = 30;
  var Fa = 31;
  var Ha = 32;
  var La = 33;
  var za = 0;
  var Ga = 1;
  var ja = 0;
  var Xa = 1;
  var Ya = 2;
  var Va = document.getElementById("gCanvas");
  var Ja = null;
  var qa = null;
  var Ka = Va.getContext("2d");
  Ka.shadowColor = "black";
  var Za = false;
  var Qa = Math.min(window.devicePixelRatio, 2);
  var $a = ("ontouchstart" in window || navigator.maxTouchPoints) == 1;
  if ($a) {
    console.log("mobile touch device detected!");
  }
  loadedAudio = {};
  function ei(e) {
    if (!loadedAudio.hasOwnProperty(e) && !hr) {
      var t = new Audio(e);
      console.log("loading audio: " + e);
      loadedAudio[e] = t;
      if (e == ii) {
        t.addEventListener("ended", function () {
          this.currentTime = 0;
          try {
            this.play();
          } catch (e) {}
        }, false);
      }
      t.volume = 0.7;
      t.muted = hr;
    }
    return loadedAudio[e];
  }
  var ti = null;
  var ai = "";
  var ii = "audio/music_menu.mp3";
  var ri = "audio/music_game.mp3";
  function si(e) {
    if (ti) {
      ti.pause();
      ti.currentTime = 0;
    }
    ai = e;
    if (!hr) {
      console.log("changed music to " + e);
      ti = ei(e, true);
      try {
        ti.play();
      } catch (e) {}
    }
  }
  function ni() {
    var e = document.getElementById("button_mute_img");
    if (e) {
      e.src = hr ? "img/sound_off.png" : "img/sound_on.png";
      for (var t in loadedAudio) {
        if (loadedAudio.hasOwnProperty(t)) {
          loadedAudio[t].muted = hr;
        }
      }
      if (!hr && ai && ti == null) {
        si(ai);
      }
    }
  }
  var li = false;
  function oi(e) {}
  var hi = camzoom_n = 2.7;
  var hi = 1;
  var ci = camy = camx_n = camy_n = camx_o = camy_o = 0;
  var di = 1;
  var gi = 0;
  var fi = 0;
  var ui = 0;
  var mi = 0;
  var pi = 0;
  var bi = 0;
  var yi = false;
  var wi = false;
  var Pi;
  var Ii;
  var vi = 0;
  var ki = 0;
  gameMode = 1;
  loadedImgs = {};
  function Ai(e) {
    if (!loadedImgs.hasOwnProperty(e)) {
      loadedImgs[e] = new Image();
      loadedImgs[e].src = e;
    }
    if (loadedImgs[e].width != 0 && loadedImgs[e].complete) {
      return loadedImgs[e];
    } else {
      return null;
    }
  }
  function Mi(e, t) {
    return Math.random() * (t - e) + e;
  }
  function Ti(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  function xi(e) {
    e = Math.trunc(e) % 360 + (e - Math.trunc(e));
    if (e > 0) {
      return e;
    } else {
      return e + 360;
    }
  }
  function Si(e) {
    e = e.split(".");
    return ((+e[0] * 256 + +e[1]) * 256 + +e[2]) * 256 + +e[3];
  }
  function Ei(e) {
    var t = e % 256;
    for (var a = 3; a > 0; a--) {
      e = Math.floor(e / 256);
      t = e % 256 + "." + t;
    }
    return t;
  }
  function Di(e, t) {
    var a = t.split("?")[0];
    var i;
    var r;
    i = t.indexOf("?") !== -1 ? t.split("?")[1] : "";
    if (i !== "") {
      r = i.split("&");
      for (var s = r.length - 1; s >= 0; --s) {
        i = r[s].split("=")[0];
        if (i === e) {
          r.splice(s, 1);
        }
      }
      a = a + "?" + r.join("&");
    }
    return a;
  }
  function _i(e) {
    return 180 / Math.PI * e;
  }
  function Bi(e) {
    return Math.PI / 180 * e;
  }
  function Ui(e, t, a, i) {
    return Math.atan2(i - t, a - e);
  }
  function Ci(e, t) {
    return (e >> t) % 2 != 0;
  }
  function Ni(e, t, a) {
    if (a) {
      return e | 1 << t;
    } else {
      return e & ~(1 << t);
    }
  }
  function Oi(e, t) {
    var a = xi(_i(t - e));
    if (a > 180) {
      a -= 360;
    }
    return Bi(a);
  }
  function Ri(e, t, a) {
    return Math.min(a, Math.max(t, e));
  }
  function Wi(e) {
    return unescape(encodeURIComponent(e));
  }
  function Fi(e) {
    return decodeURIComponent(escape(e));
  }
  function Hi(e, t, a) {
    var i = Ka.measureText("M").width * 1.2;
    e = e.split("\n");
    for (var r = 0; r < e.length; ++r) {
      Ka.fillText(e[r], t, a);
      a += i;
    }
  }
  function Li(e) {
    var t = parseInt(e, 10);
    var a = Math.floor(t / 3600);
    e = Math.floor((t - a * 3600) / 60);
    t = t - a * 3600 - e * 60;
    if (t < 10) {
      t = "0" + t;
    }
    return e + ":" + t;
  }
  function zi(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function Gi(e) {
    return abbreviate_number(e);
  }
  abbreviate_number = function (e, t) {
    if (e === null) {
      return null;
    }
    if (e === 0) {
      return "0";
    }
    t = !t || t < 0 ? 0 : t;
    var a = e.toPrecision(2).split("e");
    var a = a.length === 1 ? 0 : Math.floor(Math.min(a[1].slice(1), 14) / 3);
    var i = a < 1 ? e.toFixed(0 + t) : (e / Math.pow(10, a * 3)).toFixed(2);
    return (i < 0 ? i : Math.abs(i)) + ["", "K", "M", "B", "T"][a];
  };
  function ji(e, t, a, i, r, s) {
    this.x = e;
    this.y = t;
    this.w = a;
    this.h = i;
    this.aniT = r;
    this.buttonTXT = new Ji(12, "white");
    this.buttonTXT.renderScale = 1.5;
    this.buttonTXT.setText(Ws(r).aniName);
    this.isHighLighted = false;
    this.biomeNum = s;
    e = new qi(0, ht, 0, 0, 30);
    e.x = e.ox = e.nx = 0;
    e.y = e.oy = e.ny = 0;
    e.type = r;
    e.alwaysPlainOutline = true;
    this.drawnAniObj = e;
    this.buttonScaleF = 1;
    this.testPosHitsButton = function (e, t) {
      if (e < this.x - this.w / 2 || e > this.x + this.w / 2) {
        return false;
      } else if (t < this.y - this.w / 2 || t > this.y + this.w / 2) {
        return false;
      } else {
        return true;
      }
    };
    this.setPosAndSize = function (e, t, a, i, r, s) {
      this.w = a;
      this.h = i;
      this.x = e + a * (0.5 - r);
      this.y = t + i * (0.5 - s);
    };
    this.draw = function () {
      Ka.save();
      Ka.translate(this.x, this.y);
      Ka.scale(this.buttonScaleF, this.buttonScaleF);
      var e = Ka.globalAlpha;
      Ka.globalAlpha = e * 0.75;
      switch (this.biomeNum) {
        case 1:
          Ka.fillStyle = "#1C91B8";
          break;
        case 0:
          Ka.fillStyle = "#26A73A";
          break;
        case 2:
          Ka.fillStyle = "#B2B2B2";
      }
      Ka.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      if (this.isHighLighted) {
        Ka.fillStyle = "white";
        Ka.globalAlpha = e * 0.2;
        Ka.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      }
      Ka.globalAlpha = e;
      this.drawnAniObj.nRad = this.drawnAniObj.rad = a * 0.6 / 2 * di;
      Ka.save();
      Ka.scale(2, 2);
      this.drawnAniObj.draw();
      Ka.restore();
      this.buttonTXT.setFontSize(di * 23);
      this.buttonTXT.x = 0;
      this.buttonTXT.y = -this.h * 0.375;
      this.buttonTXT.draw();
      Ka.restore();
    };
  }
  function Xi(e) {
    var t = ei("audio/click.mp3");
    if (t) {
      try {
        t.play();
      } catch (e) {}
    }
    newMsg = new $i(2);
    newMsg.writeUInt8(24);
    newMsg.writeUInt8(rn.indexOf(e));
    Us(newMsg);
    if (sn) {
      ns = false;
      fn(false);
    }
    sn = tn = false;
  }
  Yi.prototype = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    visible: true,
    buttonTXT: null,
    pressed: false,
    pressedTouchID: -1,
    touchEnabled: true,
    testPosHitsButton: function (e, t) {
      if (e < this.x - this.w / 2 || e > this.x + this.w / 2) {
        return false;
      } else if (t < this.y - this.w / 2 || t > this.y + this.w / 2) {
        return false;
      } else {
        return true;
      }
    },
    setPosAndSize: function (e, t, a, i, r, s) {
      this.w = a;
      this.h = i;
      this.x = e + a * (0.5 - r);
      this.y = t + i * (0.5 - s);
    },
    onButtonTouchStart: function () {},
    onButtonTouchEnd: function () {}
  };
  function Yi(e) {
    this.buttonTXT = new Ji(10, "white");
    this.buttonTXT.renderScale = 1.5;
    this.buttonTXT.setText(e);
    this.draw = function () {
      if (this.visible) {
        Ka.save();
        Ka.globalAlpha = 0.2;
        Ka.fillStyle = this.pressed ? "white" : "#000000";
        Ka.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        Ka.globalAlpha = 0.2;
        this.buttonTXT.setFontSize(Qa * 15);
        this.buttonTXT.x = this.x;
        this.buttonTXT.y = this.y;
        this.buttonTXT.draw();
        Ka.restore();
      }
    };
  }
  function Vi() {
    this.buttonTXT = new Ji(10, "white");
    this.buttonTXT.renderScale = 1.5;
    this.isMiniRechargeBut = false;
    this.abil_Type = 0;
    this.abil_possible = this.abil_usable = this.abil_recharging = this.abil_active = false;
    this.abil_avilableA = this.abil_rechargeBarA = this.abil_rechargeTotalT = this.abil_rechargeEndT = 0;
    this.draw = function () {
      if (this.visible && (this.abil_rechargeBarA += ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA) * 0.1, this.abil_avilableA += ((this.abil_usable || this.abil_active ? 1 : 0.2) - this.abil_avilableA) * 0.1, this.isMiniRechargeBut && (this.h = this.w * 0.6), this.abil_possible)) {
        Ka.save();
        if (this.isMiniRechargeBut) {
          this.h = this.w * 0.8;
          Ka.translate(this.x, this.y + this.h * 0.36);
          Ka.scale(0.65, 0.65);
        } else {
          Ka.translate(this.x, this.y);
        }
        var e = this.abil_avilableA * 0.2;
        var t = this.pressed || wi ? "#CECECE" : "#000000";
        if (this.abil_active) {
          t = oe;
          e = 0.7;
        }
        Ka.fillStyle = t;
        Ka.globalAlpha = e * 1;
        Ka.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        e = Rs(this.abil_Type);
        if (t = Ai(e.abilImg)) {
          var a = this.w * 0.4;
          Ka.globalAlpha = this.abil_avilableA * 1;
          Ka.drawImage(t, -a, -a * 0.85, a * 2, a * 2);
        }
        this.buttonTXT.setText(e.abilName);
        this.buttonTXT.setFontSize(Qa * 15);
        this.buttonTXT.x = 0;
        this.buttonTXT.y = -this.w * 0.35;
        this.buttonTXT.draw();
        e = Math.max(0, this.abil_rechargeEndT - Ns);
        this.abil_rechargeBarA += ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA) * 0.1;
        if (this.abil_rechargeBarA > 0.01) {
          Ka.globalAlpha = this.abil_rechargeBarA * 0.35;
          Ka.fillStyle = "#000000";
          t = this.w * 0.8;
          a = this.h * 0.5;
          Ka.fillRect(0 - t / 2, 0 - a / 2, t, a);
          Ka.globalAlpha = this.abil_rechargeBarA * 1;
          Ka.fillStyle = "#F3C553";
          Ka.fillRect(0 - t / 2, 0 - a / 2, e / this.abil_rechargeTotalT * t, a);
        }
        Ka.restore();
      }
    };
  }
  Vi.prototype = Object.create(Yi.prototype);
  Ji.prototype = {
    strokeW: 1,
    strokeColor: "#000000",
    multiLine: false,
    _text: "",
    _color: "#000000",
    x: 0,
    y: 0,
    _fntSize: 16,
    _canvas: null,
    _ctx: null,
    _dirty: false,
    renderScale: 1.5,
    _scale: 1,
    width: 0,
    height: 0,
    setColor: function (e) {
      if (this._color != e) {
        this._color = e;
        this._dirty = true;
      }
    },
    setFontSize: function (e) {
      if (this._fntSize != e) {
        this._fntSize = e;
        this._dirty = true;
      }
    },
    setText: function (e) {
      if (e != this._text) {
        this._text = e;
        this._dirty = true;
      }
    },
    getRenderedCanvas: function () {
      if (this._canvas == null) {
        this._canvas = document.createElement("canvas");
        this._ctx = this._canvas.getContext("2d");
      }
      if (this._dirty) {
        this._dirty = false;
        var e = this._canvas;
        var t = this._ctx;
        var a = this._text;
        var i = this._scale;
        var r = this._fntSize * this.renderScale;
        var s = r + "px Arial";
        t.font = s;
        var n = ~~(r * 0.2);
        t.font = s;
        if (this.multiLine) {
          var l = t.measureText("M").width * 1.2;
          for (var a = a.split("\n"), o = 0, h = 0; h < a.length; ++h) {
            o = Math.max(o, t.measureText(a[h]).width);
          }
          this.width = (o + 6) * i;
          this.height = (l * a.length + n) * i;
          e.width = this.width;
          e.height = this.height;
          this.width /= this.renderScale;
          this.height /= this.renderScale;
          t.globalAlpha = 1;
          t.font = s;
          if (this.strokeW > 0) {
            t.shadowOffsetX = this.strokeW;
            t.shadowOffsetY = this.strokeW;
            t.shadowColor = this.strokeColor;
          }
          t.fillStyle = this._color;
          t.textAlign = "center";
          e = 3 + e.width / 2;
          r -= n / 2;
          for (h = 0; h < a.length; ++h) {
            t.fillText(a[h], e, r);
            r += l;
          }
        } else {
          this.width = (t.measureText(a).width + 6) * i;
          this.height = (r + n) * i;
          e.width = this.width;
          e.height = this.height;
          this.width /= this.renderScale;
          this.height /= this.renderScale;
          t.globalAlpha = 1;
          t.font = s;
          if (this.strokeW > 0) {
            t.shadowOffsetX = this.strokeW;
            t.shadowOffsetY = this.strokeW;
            t.shadowColor = this.strokeColor;
          }
          t.fillStyle = this._color;
          t.fillText(a, 3, r - n / 2);
        }
      }
      return this._canvas;
    },
    draw: function () {
      if (this._text) {
        var e = this.renderScale;
        var t = this.getRenderedCanvas();
        var a = t.width / e;
        var e = t.height / e;
        Ka.drawImage(t, this.x - a / 2, this.y - e / 2, a, e);
      }
    }
  };
  function Ji(e, t) {
    if (e) {
      this._fntSize = e;
    }
    if (t) {
      this._color = t;
    }
  }
  qi.prototype = {
    id: 0,
    oType: xt,
    spawnTime: 0,
    rPer: 0,
    updateTime: 0,
    x: 0,
    y: 0,
    ox: 0,
    oy: 0,
    nx: 0,
    ny: 0,
    rad: 0,
    oRad: 0,
    nRad: 0,
    angle: 0,
    oAngle: 0,
    angleDelta: 0,
    z: 0,
    name: "",
    dead: false,
    type: 0,
    curBiome: 0,
    isRectangle: false,
    rectW: 0,
    rectH: 0,
    toString: function () {
      return "[GObj t=" + this.oType + " id=" + this.id + "]";
    }
  };
  function qi(e, t, a, i, r) {
    this.id = e;
    this.oType = t;
    this.ox = this.x = this.nx = a;
    this.oy = this.y = this.ny = i;
    this.nRad = r;
    this.oRad = this.rad = 0;
    if (t == Qt || t == ut || t == At || t == bt || t == It || t == ct || t == mt || t == vt || t == yt) {
      this.oRad = this.rad = r;
    }
    this.rPer = Mi(0, 1);
    this.updateTime = this.spawnTime = Ns;
    this.firstPosUpd = true;
    this.flag_hurt = false;
    this.hpBarTimeoutT = this.hpPer = this.hpPer_n = this.hpBarA = 0;
    if (this.oType == ht) {
      this.flag_iceSliding = this.flag_eff_invincible = this.flag_usingAbility = this.flag_eff_frozen = this.flag_eff_stunned = this.flag_underWater = this.flag_tailBitten = this.flag_lowWat = false;
      this.frozenEffA = this.onFireEffA = this.effA_healing = this.stunA = this.underwaterA = 0;
      this.flag_eff_healing = false;
      this.nameA = 0;
      this.getNameSize = function () {
        return 10;
      };
      this.setName = function (e) {
        if (this.name = e) {
          if (this.nameTXT == null) {
            this.nameTXT = new Ji(this.getNameSize(), "#FFFFFF");
            this.nameTXT.strokeW = 1.5;
            this.nameTXT.renderScale = 5;
          } else {
            this.nameTXT.setFontSize(this.getNameSize());
          }
          this.nameTXT.setText(this.name);
        }
      };
    }
    this.alwaysPlainOutline = false;
    if (this.oType == ht || this.oType == gt || this.oType == Pt || this.oType == pt) {
      this.chatLines = [];
    }
    this.updateZ = function () {
      switch (this.oType) {
        case ot:
          this.z = -220;
          break;
        case kt:
          this.z = -210;
          break;
        case Qt:
          this.z = -209;
          break;
        case Ht:
          this.z = -202;
          break;
        case Lt:
          this.z = -201;
          break;
        case Vt:
        case bt:
        case Kt:
          this.z = -159;
          break;
        case wt:
        case ut:
          this.z = -158;
          break;
        case Jt:
          this.z = -158;
          break;
        case At:
          this.z = -156;
          break;
        case dt:
          this.z = -155;
          break;
        case It:
          this.z = this.type == ka || this.type == Ea || this.type == Ha || this.type == Fa || this.type == Da || this.type == La ? 10001 : this.type == Ra ? 1002 : -152;
          break;
        case Pt:
          this.z = -150;
          break;
        case yt:
          this.z = -102;
          break;
        case pt:
          this.z = -101;
          break;
        case gt:
          this.z = -100;
          break;
        case Zt:
          this.z = -99;
          break;
        case ct:
          this.z = 999;
          break;
        case vt:
          this.z = 1000;
          break;
        case mt:
          this.z = 1001;
          break;
        case Ct:
        case Nt:
          this.z = 1003;
          break;
        case Rt:
        case Ot:
          this.z = 1006;
          break;
        case Mt:
          this.z = 1006;
          break;
        case ft:
          this.z = 10000;
          break;
        case ht:
          this.z = this.flag_underWater || this.flag_usingAbility && this.type == pe ? -140 : this.type == at ? 1008 : this.type == Ae ? 1007 : this.type == Pe || this.type == ve || this.type == We || this.type == Ye || this.type == xe || this.type == _e || this.type == Ve || this.type == qe || this.type == ze || this.type == it ? 1001 : this.rad;
          break;
        default:
          this.z = this.rad;
      }
    };
    this.draw = function (e) {
      var t = this.moveUpdate();
      Ka.save();
      Ka.translate(this.x, this.y);
      if (!nr) {
        var a = false;
      }
      switch (this.oType) {
        case xt:
        case Ot:
        case Wt:
        case Ft:
        case Rt:
        case St:
        case Mt:
        case Et:
        case _t:
        case Dt:
        case gt:
        case Pt:
        case pt:
        case Ut:
        case zt:
        case Gt:
        case jt:
        case Xt:
        case Yt:
        case $t:
        case ea:
        case ta:
        case aa:
        case ia:
        case ra:
        case sa:
          a = true;
      }
      if (a) {
        var i;
        i = (Ns - this.spawnTime) / 1000;
        var r = 1.5;
        var a = 0.1;
        if (this.oType == gt || this.oType == pt || this.oType == Pt) {
          r = 2.5;
          a = 0.04;
        }
        i = a * Math.sin(Math.PI * 2 / r * i);
        Ka.scale(1 + i, 1 + i / 2);
      }
      r = this.getOutlineColor();
      a = 2;
      Ka.globalAlpha = this.dead ? Ka.globalAlpha * (1 - t) : Ka.globalAlpha * Math.min(1, (Ns - this.spawnTime) / (Y * 1000));
      switch (this.oType) {
        case ct:
          switch (this.curBiome) {
            case Xa:
              if (e) {
                Zi(0, 0, this.rad, this.getOutlineColor());
              } else {
                Zi(0, 0, this.rad - 1.5, ae);
              }
              break;
            case Ya:
              if (e) {
                Zi(0, 0, this.rad, this.getOutlineColor());
              } else {
                Zi(0, 0, this.rad - 1.5, "#1f893a");
              }
              break;
            default:
              this.drawOutlinedCircle("", J);
          }
          break;
        case Ct:
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ka.fillStyle = "#45D157";
          t = this.rad * 0.8;
          this.drawOutlinedCircle("", re);
          Ka.globalAlpha *= 0.98;
          e = -t * 0.5 + this.rPer * 10;
          r = Math.max(0, t * 0.65 + i) + 2;
          Zi(-t * 0.5, e, r, re);
          e = -t * 0.5 - this.rPer * 10;
          r = Math.max(0, t * 0.73 - i);
          Zi(t * 0.5, e, r, re);
          r = Math.max(0, t * 0.78 + i);
          Zi(t * 0.6, t * 0.4, r, re);
          e = t * 0.5 + this.rPer * 10;
          r = Math.max(0, t * 0.6 + this.rPer - i);
          Zi(-t * 0.5, e, r, re);
          Ka.restore();
          break;
        case vt:
          this.drawOutlinedCircle("", "#1AAE31");
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ka.fillStyle = V;
          e = this.rad * 0.75;
          Ka.globalAlpha *= 0.8;
          Ka.beginPath();
          Ka.arc(-e * 0.5, -e * 0.5 + this.rPer * 10, Math.max(0, e * 0.65 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(e * 0.5, -e * 0.5 - this.rPer * 10, Math.max(0, e * 0.73 - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(e * 0.6, e * 0.4, Math.max(0, e * 0.78 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(-e * 0.5, e * 0.5, Math.max(0, e * 0.6 + this.rPer - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.restore();
          break;
        case Nt:
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          var t = this.rad * 0.8;
          var s = ne;
          this.drawOutlinedCircle("", s);
          Ka.globalAlpha *= 0.98;
          e = -t * 0.5 + this.rPer * 10;
          r = Math.max(0, t * 0.65 + i) + 2;
          Zi(-t * 0.5, e, r, s);
          e = -t * 0.5 - this.rPer * 10;
          r = Math.max(0, t * 0.73 - i);
          Zi(t * 0.5, e, r, s);
          r = Math.max(0, t * 0.78 + i);
          Zi(t * 0.6, t * 0.4, r, s);
          e = t * 0.5 + this.rPer * 10;
          r = Math.max(0, t * 0.6 + this.rPer - i);
          Zi(-t * 0.5, e, r, s);
          Ka.restore();
          break;
        case dt:
          this.drawOutlinedCircle("", ee);
          break;
        case xt:
          e = ie;
          if (this.curBiome == Ya) {
            e = "#ac443c";
          }
          this.drawOutlinedCircle("", e);
          break;
        case Ot:
          if (i = Ai("img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Wt:
          if (i = Ai("img/rasp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Ft:
          if (i = Ai("img/pear" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case zt:
          if (i = Ai("img/seaweed" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Gt:
          if (i = Ai("img/starfish" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case jt:
          if (i = Ai("img/kelp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Xt:
          if (i = Ai("img/clam" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Yt:
          if (i = Ai("img/conch" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad * 1;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case Rt:
          if (i = Ai("img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Ut:
          this.drawOutlinedCircle("", se);
          Ka.rotate(this.rPer * Math.PI * 2);
          Zi(this.rad * 0.25, this.rad * 0.4, (0.3 + this.rPer * 0.15) * this.rad, "#905113");
          break;
        case Zt:
          switch (this.curBiome) {
            case Xa:
              e = "_ocean";
              break;
            case Ya:
              e = "_arctic";
              break;
            default:
              e = "";
          }
          if (i = Ai("img/healingStone" + e + ".png")) {
            e = this.rad;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case Jt:
          Zi(0, 0, Math.max(0, this.rad * 1), "#815427");
          Zi(0, 0, Math.max(0, this.rad * 0.6), "#6e4b29");
          Zi(0, 0, Math.max(0, this.rad * 0.5), "#543d28");
          Zi(0, 0, Math.max(0, this.rad * 0.45), "#3f3124");
          Zi(0, 0, Math.max(0, this.rad * 0.33), "#241e19");
          Zi(0, 0, Math.max(0, this.rad * 0.25), "#120f0d");
          Zi(0, 0, Math.max(0, this.rad * 0.2), $);
          break;
        case Kt:
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 4 * i) * 2.5;
          if (e) {
            a = 4;
            Ka.fillStyle = "#815427";
            Ka.beginPath();
            Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
            Ka.fill();
          } else {
            Ka.fillStyle = $;
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ka.fill();
            if (!nr) {
              Ka.beginPath();
              Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
              Ka.fill();
            }
            Ka.save();
            Ka.globalAlpha = 1 - this.underwaterA;
            i = (Ns - this.spawnTime) / 1000;
            e = Math.sin(Math.PI * 2 / 1.5 * i) * 8;
            if (this.flag_underWater) {
              Ka.globalAlpha *= 0.5;
              if (this.type == Ie) {
                Ka.globalAlpha = 0.3;
              }
            }
            Ka.fillStyle = "yellow";
            i = this.rad * 0.15;
            Ka.beginPath();
            for (c = 1; c <= 1; c++) {
              Ka.save();
              Ka.globalAlpha = 0.2;
              Ka.rotate(this.rPer * Math.PI * 2 * c);
              Ka.beginPath();
              Ka.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, i + e), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, i - e), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, i + e), 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, i - e), 0, Math.PI * 2);
              Ka.fill();
              Ka.restore();
            }
            Ka.restore();
          }
          Ka.restore();
          break;
        case $t:
          if (i = Ai("img/arcticNut" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            Ka.save();
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case ea:
          if (i = Ai("img/carrot" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case ta:
          if (i = Ai("img/watermelon" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case aa:
          if (i = Ai("img/watermelonSlice" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case ia:
        case ra:
        case sa:
          if (i = Ai("img/meat" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.save();
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
            Ka.restore();
          }
          break;
        case Et:
        case _t:
          a = 2;
          e = this.oType == _t ? 15 : 9;
          Ka.fillStyle = this.getOutlineColor();
          Ka.beginPath();
          Ka.rect(-e / 2 - a, -a, e + a * 2, this.rad * 0.8 + a * 2);
          Ka.fill();
          Ka.fillStyle = "#FFCA49";
          Ka.beginPath();
          Ka.rect(-e / 2, 0 + a / 2, e, this.rad * 0.8 - a / 2);
          Ka.fill();
          if (!nr) {
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad), Math.PI, Math.PI * 2);
            Ka.fillStyle = this.getOutlineColor();
            Ka.fill();
          }
          Ka.beginPath();
          Ka.arc(0, 0, Math.max(0, this.rad - a), Math.PI, Math.PI * 2);
          Ka.fillStyle = this.oType == _t ? "#B8413B" : "#CFAD59";
          Ka.fill();
          break;
        case Bt:
          a = 2;
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ka.fillStyle = "#45D157";
          Ka.globalAlpha *= 0.93;
          Ka.beginPath();
          Ka.arc(-this.rad * 0.5, -this.rad * 0.5 + this.rPer * 10, Math.max(0, this.rad * 0.55 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.5, -this.rad * 0.5 - this.rPer * 10, Math.max(0, this.rad * 0.43 - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.6, this.rad * 0.4, Math.max(0, this.rad * 0.48 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(-this.rad * 0.5, this.rad * 0.5, Math.max(0, this.rad * 0.4 + this.rPer - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.restore();
          e = 20;
          Ka.fillStyle = r;
          Ka.beginPath();
          Ka.rect(-e / 2 - a, -a, e + a * 2, this.rad * 0.8 + a * 2);
          Ka.fill();
          Ka.fillStyle = "#FFCA49";
          Ka.beginPath();
          Ka.rect(-e / 2, 0 + a / 2, e, this.rad * 0.8 - a / 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(0, 0, Math.max(0, this.rad * 0.8), Math.PI, Math.PI * 2);
          Ka.fillStyle = r;
          Ka.fill();
          Ka.beginPath();
          Ka.arc(0, 0, Math.max(0, this.rad * 0.8 - a), Math.PI, Math.PI * 2);
          Ka.fillStyle = "#B8413B";
          Ka.fill();
          break;
        case Dt:
          if (i = Ai("img/lillypad" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          } else {
            Ka.fillStyle = r;
            e = this.rPer * 6.28;
            Ka.beginPath();
            Ka.arc(0, 0, this.rad + 2, 0 + e, e + Math.PI * 2 - 1.57);
            Ka.fill();
            Ka.fillStyle = "#3DAA4C";
            Ka.beginPath();
            Ka.arc(0, 0, this.rad, 0 + e, e + Math.PI * 2 - 1.57);
            Ka.fill();
          }
          break;
        case gt:
          this.drawOutlinedCircle("", "#9F8641");
          Zi(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
          Zi(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
          break;
        case It:
          switch (this.type) {
            case Pa:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.4;
              Zi(0, 0, this.rad, "#7EBCC0");
              Ka.globalAlpha = t * 1;
              Ka.strokeStyle = "white";
              Ka.beginPath();
              e = 10;
              Ka.translate(-5, this.rad * -0.7);
              Ka.moveTo(0, -e);
              Ka.lineTo(0, e);
              Ka.moveTo(-e, -e);
              Ka.lineTo(e, e);
              Ka.moveTo(e, -e);
              Ka.lineTo(-e, e);
              Ka.moveTo(-e, 0);
              Ka.lineTo(e, 0);
              Ka.lineWidth = 3;
              Ka.stroke();
              Ka.restore();
              break;
            case Aa:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.15;
              Zi(0, 0, this.rad, "#755A2A");
              Ka.restore();
              break;
            case La:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_sabertoothJawAttack.png")) {
                t = Math.min(1, (Ns - this.spawnTime) / 200);
                e = this.rad - 2.5;
                Ka.rotate(this.rPer * Math.PI * 2);
                Ka.drawImage(i, 0, 0, i.width * t, i.height, -e, -e, e * 2 * t, e * 2);
              }
              Ka.restore();
              break;
            case ka:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_claw.png")) {
                t = Math.min(1, (Ns - this.spawnTime) / 200);
                e = this.rad - 2.5;
                Ka.rotate(this.rPer * Math.PI * 2);
                Ka.drawImage(i, 0, 0, i.width * t, i.height, -e, -e, e * 2 * t, e * 2);
              }
              Ka.restore();
              break;
            case Ha:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.1;
              Zi(0, 0, this.rad, "#5B7EC7");
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_whaleTailHit.png")) {
                t = Math.min(1, (Ns - this.spawnTime) / 200);
                e = this.rad * 0.85;
                Ka.rotate(this.angle);
                var r = this.rad;
                var s = e * 2;
                var n = e * 2 * t;
                Ka.drawImage(i, 0 + s * -0.5, r + n * -0.95, s, n);
              }
              Ka.restore();
              break;
            case Fa:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.05;
              Zi(0, 0, this.rad, "#E4E7C8");
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_elephantTrunkSmack.png")) {
                t = -(-0.5 + Ri((Ns - this.spawnTime) / 300, 0, 1)) * Bi(90);
                e = this.rad * 0.6;
                Ka.rotate(this.angle + t);
                r = this.rad;
                s = e * 1.4;
                n = e * 2;
                Ka.drawImage(i, 0 + s * -0.75, r + n * -0.95, s, n);
              }
              Ka.restore();
              break;
            case Ea:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.1;
              Zi(0, 0, this.rad, "#755A2A");
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_backkick.png")) {
                t = Math.min(1, (Ns - this.spawnTime) / 200);
                e = this.rad * 0.6;
                Ka.rotate(this.angle);
                r = this.rad;
                s = e * 2;
                n = e * 2 * t;
                Ka.drawImage(i, 0 + s * -0.5, r + n * -0.95, s, n);
              }
              Ka.restore();
              break;
            case Da:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.25;
              Zi(0, 0, this.rad, "#44d31f");
              Ka.globalAlpha = t * 1;
              if (i = Ai("img/ability_crocBite.png")) {
                t = Math.min(1, (Ns - this.spawnTime) / 200);
                e = this.rad * 0.6;
                Ka.rotate(this.angle);
                r = this.rad;
                s = e * 2.5;
                n = e * 2.5 * t;
                Ka.drawImage(i, 0 + s * -0.5, r + n * -0.95, s, n);
                Ka.rotate(Math.PI);
                r = this.rad * 0.5;
                s = e * 2.5;
                n = e * 2.5 * t;
                Ka.drawImage(i, 0 + s * -0.5, r + n * -0.95, s, n);
              }
              Ka.restore();
              break;
            case Ia:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.15;
              Zi(0, 0, this.rad, "#6D7471");
              Ka.restore();
              break;
            case Ra:
              Ka.save();
              Ka.rotate(this.angle + Bi(180));
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.8;
              if (i = Ai("img/wave.png")) {
                e = this.rad;
                Ka.drawImage(i, -e, -e, e * 2, e * 2);
              }
              Ka.restore();
              break;
            case xa:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.2;
              Zi(0, 0, this.rad, "#746B3E");
              Ka.restore();
              break;
            case da:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.5;
              Zi(0, 0, this.rad, "#62C5FF");
              Ka.globalAlpha = t * 1;
              Ka.strokeStyle = "#62C5FF";
              Ka.beginPath();
              e = this.rad * -0.7;
              Ka.moveTo(e, -5);
              Ka.lineTo(e - 4, 5);
              Ka.lineTo(e + 4, 2);
              Ka.lineTo(e + 2, 15);
              Ka.lineWidth = 3;
              Ka.stroke();
              Ka.restore();
              break;
            case ua:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.5;
              e = Math.max(0, this.rad - 30);
              i = (Ns - this.spawnTime) / 1000;
              r = 2.2;
              s = Math.cos(Math.PI * 2 / r * i) * 6.5;
              i = Math.sin(Math.PI * 2 / r * i) * 6.5;
              Ka.globalAlpha = t * 0.4;
              Zi(0, 0, e, "#2CAAC4");
              Ka.globalAlpha = t * 0.7;
              if (!nr) {
                Zi(0 + s / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, e - 6), "#2D93B0");
              }
              Zi(0 + s / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, e - 14), "#29A0BA");
              Zi(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, e - 38.5 + i / 5), "#2B8CAA");
              Zi(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, e - 54.5 + i / 11), "#28829E");
              Ka.restore();
              break;
            case fa:
              Ka.save();
              t = Ka.globalAlpha;
              if (!nr) {
                Ka.rotate(this.rPer * 2 * Math.PI);
              }
              i = (Ns - this.spawnTime) / 1000;
              i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
              Ka.globalAlpha = t * 0.7;
              a = 4;
              Ka.fillStyle = "black";
              Ka.beginPath();
              Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
              Ka.fill();
              if (!nr) {
                Ka.fillStyle = "black";
                Ka.globalAlpha = t * 0.5;
                Ka.beginPath();
                Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.beginPath();
                Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
                Ka.beginPath();
                Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
                Ka.fill();
                Ka.beginPath();
              }
              Ka.restore();
              break;
            case _a:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.25;
              Zi(0, 0, this.rad, "#9F8641");
              Ka.restore();
              break;
            case Ba:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.25;
              Zi(0, 0, this.rad, "#785228");
              Ka.restore();
              break;
            default:
              Ka.save();
              t = Ka.globalAlpha;
              Ka.globalAlpha = t * 0.15;
              Zi(0, 0, this.rad, "black");
              Ka.restore();
          }
          break;
        case Pt:
          i = (Ns - this.spawnTime) / 1000;
          r = 1.2;
          s = Math.cos(Math.PI * 2 / r * i) * 2.5;
          i = Math.sin(Math.PI * 2 / r * i) * 2.5;
          this.drawOutlinedCircle("", "#2CAAC4");
          if (!nr) {
            Zi(0 + s / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, this.rad - 6), "#2D93B0");
          }
          Zi(0 + s / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, this.rad - 14), "#29A0BA");
          Zi(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, this.rad - 18.5 + i / 5), "#2B8CAA");
          Zi(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, this.rad - 24.5 + i / 11), "#28829E");
          break;
        case pt:
          this.drawOutlinedCircle("", "#9F8641");
          if (!nr) {
            Zi(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
          }
          Zi(0 + this.rPer, 1, Math.max(0, this.rad - 14), "#5C4E28");
          Zi(0 - this.rPer * 2 - 3, 1, Math.max(0, this.rad - 18.5), "#40371D");
          break;
        case ft:
          Ka.save();
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          switch (this.curBiome) {
            case Xa:
              e = "#786810";
              break;
            case Ya:
              e = "#CED0D0";
              break;
            default:
            case ja:
              e = "#45D157";
          }
          Ka.fillStyle = e;
          Ka.globalAlpha *= 0.93;
          Ka.beginPath();
          Ka.arc(-this.rad * 0.5, -this.rad * 0.5 + this.rPer * 10, Math.max(0, this.rad * 0.65 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.5, -this.rad * 0.5 - this.rPer * 10, Math.max(0, this.rad * 0.73 - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.6, this.rad * 0.4, Math.max(0, this.rad * 0.78 + i), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(-this.rad * 0.5, this.rad * 0.5, Math.max(0, this.rad * 0.6 + this.rPer - i), 0, Math.PI * 2);
          Ka.fill();
          Ka.restore();
          break;
        case Qt:
          Ka.save();
          if (!nr) {
            Ka.rotate(this.rPer * 2 * Math.PI);
          }
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
          a = 4;
          Ka.fillStyle = "#604729";
          Ka.beginPath();
          Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ka.fill();
          if (!nr) {
            Ka.fillStyle = "#8A681B";
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
          }
          Ka.restore();
          break;
        case ut:
          Ka.save();
          if (!nr) {
            Ka.rotate(this.rPer * 2 * Math.PI);
          }
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
          a = 4;
          Ka.fillStyle = "#8B7833";
          Ka.beginPath();
          Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ka.fill();
          if (!nr) {
            Ka.fillStyle = "#98803A";
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
          }
          Ka.restore();
          break;
        case At:
          Ka.save();
          if (!nr) {
            Ka.rotate(this.rPer * 2 * Math.PI);
          }
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
          a = 4;
          Ka.fillStyle = "#8CC3C7";
          Ka.beginPath();
          Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ka.fill();
          if (!nr) {
            Ka.fillStyle = "#9DDADE";
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.beginPath();
            Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
          }
          Ka.restore();
          break;
        case bt:
          Ka.save();
          if (!nr) {
            Ka.rotate(this.rPer * 2 * Math.PI);
          }
          i = (Ns - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 4 * i) * 5.5;
          a = 4;
          Ka.fillStyle = ae;
          Ka.beginPath();
          Ka.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ka.fill();
          Ka.fillStyle = ee;
          Ka.beginPath();
          Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
          Ka.fill();
          if (!nr) {
            Ka.beginPath();
            Ka.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ka.fill();
            Ka.beginPath();
            Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ka.fill();
          }
          Ka.restore();
          break;
        case Lt:
          Ka.save();
          if (!nr) {
            Ka.rotate(this.rPer * 2 * Math.PI);
          }
          i = (Ns - bs) / 1000;
          i = Math.sin(Math.PI * 2 / 5 * i) * 5.5;
          if (!e) {
            Ka.fillStyle = te;
            Ka.beginPath();
            Ka.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ka.fill();
            if (!nr) {
              Ka.beginPath();
              Ka.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
              Ka.fill();
              Ka.beginPath();
              Ka.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
              Ka.fill();
            }
          }
          Ka.restore();
          break;
        case wt:
          i = (Ns - bs) / 1000;
          e = Math.sin(Math.PI * 2 / 5 * i) * -8.5;
          if ((this.x > vi / 2 ? 1 : 0) == 1) {
            Ka.fillStyle = te;
            Ka.fillRect(-this.rectW / 2 + e, -this.rectH / 2 + e + 10, this.rectW - e, this.rectH - e - 10);
            Ka.beginPath();
            Ka.arc(-this.rectW / 2 + 50, -this.rectH / 2 + 50, 70 - e, 0, Math.PI * 2);
            Ka.fill();
            e = 35;
          } else {
            Ka.fillStyle = te;
            e *= -1;
            Ka.fillRect(-this.rectW / 2, -this.rectH / 2 - e + 10, this.rectW + e, this.rectH + e - 10);
            e = 25;
          }
          Hs(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case Ht:
          Ka.fillStyle = ae;
          t = -this.rectW / 2;
          r = this.rectW / 2;
          s = -this.rectH / 2;
          n = this.rectH / 2;
          Ka.beginPath();
          Ka.moveTo(t, s);
          var l = 20;
          var o = [-15, 10, -10, 12, 0, 5, -10, 5, -12, 5, 10, 0, -6];
          var h = 45;
          var d = 0;
          var g = vi - this.x;
          var f = 0 - this.x;
          var u = ki - this.y;
          var m = 0 - this.y;
          i = t - l;
          for (e = s; e < n; e += h) {
            Ka.lineTo(Math.min(g, Math.max(f, i + o[d])), e);
            d = (d + 1) % o.length;
          }
          Ka.lineTo(t, n);
          e = n + l;
          for (i = t; i < r; i += h) {
            Ka.lineTo(i, Math.min(u, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ka.lineTo(r, n);
          i = r + l;
          for (e = n; e > s; e -= h) {
            Ka.lineTo(Math.min(g, Math.max(f, i + o[d])), e);
            d = (d + 1) % o.length;
          }
          Ka.lineTo(r, s);
          e = s - l;
          for (i = r; i > t; i -= h) {
            Ka.lineTo(i, Math.min(u, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ka.closePath();
          Ka.fill();
          break;
        case kt:
          Ka.fillStyle = "#ececec";
          Ka.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          t = -this.rectW / 2;
          r = this.rectW / 2;
          s = this.rectH / 2 - 20;
          n = this.rectH / 2;
          Ka.beginPath();
          Ka.moveTo(t, s);
          l = 20;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          u = ki - this.y;
          m = 0 - this.y;
          Ka.lineTo(t, n);
          e = n + l;
          for (i = t; i < r; i += h) {
            Ka.lineTo(i, Math.min(u, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ka.lineTo(r, n);
          Ka.lineTo(r, s);
          Ka.closePath();
          Ka.fill();
          e = 20;
          Hs(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case Vt:
          Ka.fillStyle = ee;
          Ka.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          Ka.fillStyle = ee;
          t = -this.rectW / 2;
          r = this.rectW / 2;
          s = -this.rectH / 2 + 3;
          n = -this.rectH / 2 - 15;
          Ka.beginPath();
          Ka.moveTo(t, s);
          l = 0;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          u = ki - this.y;
          m = 0 - this.y;
          Ka.lineTo(t, n);
          e = n + l;
          for (i = t; i < r; i += h) {
            Ka.lineTo(i, Math.min(u, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ka.lineTo(r, n);
          Ka.lineTo(r, s);
          Ka.closePath();
          Ka.fill();
          Ka.fillStyle = ee;
          t = -this.rectW / 2;
          r = this.rectW / 2;
          s = this.rectH / 2 - 3;
          n = this.rectH / 2 + 15;
          Ka.beginPath();
          Ka.moveTo(t, s);
          l = 0;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          u = ki - this.y;
          m = 0 - this.y;
          Ka.lineTo(t, n);
          e = n + l;
          for (i = t; i < r; i += h) {
            Ka.lineTo(i, Math.min(u, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ka.lineTo(r, n);
          Ka.lineTo(r, s);
          Ka.closePath();
          Ka.fill();
          if (i = Ai("img/riverCurrent" + this.riverSpecT + ".png")) {
            e = -this.rectW / 2;
            c = 0;
            for (; c < 40; c++) {
              t = 100 / 120 * this.riverFlowSpeedX * 1000;
              t = (Ns - this.spawnTime) % t / t;
              Ka.drawImage(i, e + t * 100, -this.rectH / 2, 100, this.rectH);
              e += 100;
            }
          }
          break;
        case ot:
          Ka.fillStyle = V;
          Ka.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          e = 20;
          Hs(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case mt:
          if (e) {
            Zi(0, 0, this.rad, this.getOutlineColor());
          } else {
            Zi(0, 0, this.rad - 1.5, he);
          }
          break;
        case yt:
          Ka.fillStyle = ae;
          Ka.beginPath();
          Ka.arc(0, 0, Math.max(0, this.rad), 0, Math.PI * 2);
          Ka.fill();
          Ka.fillStyle = "#E4D04C";
          Ka.beginPath();
          Ka.arc(-5 + this.rPer * 10, -5 + this.rPer * 10, this.rad * 0.8, 0, Math.PI * 2);
          Ka.fill();
          break;
        case St:
          this.drawOutlinedCircle("", Q);
          break;
        case Tt:
          if (i = Ai("img/snowball.png")) {
            e = this.rad;
            Ka.rotate(this.rPer * Math.PI * 2);
            Ka.drawImage(i, -e, -e, e * 2, e * 2);
          } else {
            this.drawOutlinedCircle("", "white");
          }
          break;
        case Mt:
          e = 0.15;
          i = (0.8 - e) * 0.5;
          e = e + i + i * Math.sin(Math.PI * 2 / 1 * (Ns / 1000));
          Ka.save();
          Ka.globalAlpha *= e;
          Zi(0, 0, Math.max(0, this.rad), "#F6EA65");
          Ka.restore();
          e = 0.85;
          i = (1 - e) * 0.5;
          e = e + i + i * Math.sin(Math.PI * 2 / 1 * (Ns / 1000));
          if (i = Ai(Math.trunc(Ns / 300) % 2 == 1 ? "img/fire.png" : "img/fire2.png")) {
            r = this.rad * 0.3;
            s = this.rad * 2 * (2 + e * 2) / 3;
            n = this.rad * 2 * e;
            Ka.save();
            if (i) {
              Ka.globalAlpha = Ka.globalAlpha * this.onFireEffA * e;
              Ka.drawImage(i, 0 + s * -0.5, r + n * -0.95, s, n);
            }
            Ka.restore();
          }
          break;
        case ht:
          this.drawAnimal(t);
          break;
        default:
          console.log("Unhandled obj " + this);
          console.log("rect? " + this.isRectangle + " pos " + this.x + "," + this.y);
          if (this.isRectangle) {
            Ka.fillStyle = "black";
            Ka.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          } else {
            this.drawOutlinedCircle("????", "black");
          }
      }
      if (this.flag_hurt) {
        Ka.fillStyle = "rgba(255,0,0,0.3)";
        Ka.beginPath();
        Ka.arc(0, 0, Math.max(0, this.rad - a), 0, Math.PI * 2);
        Ka.fill();
      }
      this.hpBarA += ((Ns < this.hpBarTimeoutT ? 1 : 0) - this.hpBarA) * 0.04;
      if (this.hpBarA > 0.001) {
        this.hpPer += (this.hpPer_n - this.hpPer) * 0.1;
        i = Math.max(1, this.rad / 25);
        a = i * 20;
        e = i * 5;
        i = -this.rad - i * 10;
        Ka.globalAlpha *= this.hpBarA;
        Ka.fillStyle = "rgba(0,0,0,0.35)";
        Ka.fillRect(0 - a / 2, i - e / 2, a, e);
        Ka.fillStyle = "#16D729";
        Ka.fillRect(0 - a / 2, i - e / 2, this.hpPer / 100 * a, e);
      }
      Ka.restore();
    };
    this.drawChat = function () {
      if (!(this.chatLines.length < 1)) {
        Ka.save();
        Ka.font = "10px Arial";
        Ka.lineWidth = 1;
        Ka.textAlign = "center";
        Ka.textBaseline = "middle";
        var e = this.hpBarA > 0.01 ? -10 : 0;
        var t = [];
        for (var a = this.chatLines.length - 1; a >= 0; a--) {
          var i = this.chatLines[a];
          var r = (this.chatLines.length - 1 - a) * -13 + e;
          var s = Ns > i.chatFadeT ? 0 : 1;
          i.chatA += (s - i.chatA) * 0.1;
          Ka.shadowOffsetX = 0;
          Ka.shadowOffsetY = 0;
          if (i.chatA < 0.02) {
            if (s < 0.02) {
              i.chatTxt = "";
            }
            t.push(a);
          } else {
            s = Ka.measureText(i.chatTxt).width;
            Ka.globalAlpha = i.chatA * 0.8;
            Ka.fillStyle = ce(this.curBiome);
            Ka.fillRect(this.x - 1 - s / 2, r + this.y - this.rad - 10 - 5 - 1, s + 2, 12);
            Ka.fillStyle = "#F1C34C";
            if (!nr) {
              Ka.shadowOffsetX = 1;
              Ka.shadowOffsetY = 1;
              Ka.shadowColor = "black";
            }
            Ka.globalAlpha = i.chatA;
            Ka.fillText(i.chatTxt, this.x, r + this.y - this.rad - 10);
          }
        }
        for (a = 0; a < t.length; a++) {
          this.chatLines.splice(t[a], 1);
        }
        Ka.restore();
      }
    };
    this.getOutlineColor = function () {
      if (this.alwaysPlainOutline) {
        return J;
      } else if (this.isEdibleOutlined()) {
        return oe;
      } else if (this.oType == ht && as[this.type - 1] > 0 && this.id != Pr) {
        return le;
      } else {
        return ce(this.curBiome);
      }
    };
    this.isEdibleOutlined = function () {
      if (this.oType == ht) {
        return is[this.type - 1] > 0 && this.id != Pr;
      } else {
        return ss[this.oType - 1] > 0;
      }
    };
    this.gotChat = function (e) {
      this.chatLines.push({
        chatTxt: e,
        chatFadeT: Ns + 4000,
        chatA: 0
      });
      if (this.chatLines.length > 5) {
        this.chatLines.splice(this.chatLines.length - 1, 1);
      }
    };
    this.drawOutlinedCircle = function (e, t) {
      var a = this.getOutlineColor();
      if (!nr || a != J) {
        Zi(0, 0, this.rad, a);
      }
      Zi(0, 0, Math.max(0, this.rad - 1.5), t);
    };
    this.drawAnimal = function (e) {
      var t = Ws(this.type);
      var a = t.aniCol;
      var i = t.skinName;
      var r = this.rad * 0.1;
      switch (this.type) {
        case Ne:
        case je:
        case Re:
        case _e:
        case Ie:
          r = this.rad * 0.16;
      }
      switch (this.type) {
        case Ne:
        case je:
        case Re:
        case _e:
        case xe:
        case tt:
          if (this.flag_usingAbility) {
            i += "2";
          }
      }
      Ka.save();
      if (this.angle != 0) {
        Ka.rotate(this.angle);
      }
      var s = (Ns - this.spawnTime) / 1000;
      var t = Math.sin(Math.PI * 2 / 2.5 * s) * 0.7;
      var n = this.flag_underWater || this.flag_usingAbility && (this.type == pe || this.type == Fe || this.type == ze) ? 0 : 1;
      this.underwaterA += (n - this.underwaterA) * 0.1;
      Ka.globalAlpha *= this.underwaterA;
      if (this.flag_eff_invincible) {
        var l = 0.3;
        var o = (1 - l) * 0.5;
        Ka.globalAlpha *= l + o + o * Math.sin(Math.PI * 2 / 1 * ((Ns - this.spawnTime) / 1000));
      }
      this.nameA += (n - this.nameA) * 0.1;
      if (this.flag_iceSliding) {
        n = Math.sin(Math.PI * 2 / 0.75 * s) * 1;
        l = Ka.globalAlpha;
        Ka.globalAlpha *= 0.8 - n * 0.2;
        Zi(0, this.rad * 0.3, this.rad * (0.9 + n * 0.15), "#7BB7BB");
        Zi(0, -this.rad * 0.3, this.rad * (1.05 + n * 0.1), "#7BB7BB");
        Ka.globalAlpha = l;
      }
      if (!!this.flag_usingAbility && (this.type == me || this.type == be || this.type == Ke)) {
        n = Math.sin(Math.PI * 2 / 1.5 * s) * 1;
        l = Ka.globalAlpha;
        Ka.globalAlpha *= 0.8;
        Zi(0, this.rad * 0.3, this.rad * (0.9 + n * 0.12), "#7F582B");
        Zi(0, -this.rad * 0.3, this.rad * (1.05 + n * 0.09), "#7F582B");
        Ka.globalAlpha = l;
      }
      n = this.flag_eff_frozen ? 1 : 0;
      this.frozenEffA += (n - this.frozenEffA) * 0.1;
      if (this.frozenEffA > 0.01) {
        l = Ka.globalAlpha;
        Ka.globalAlpha *= this.frozenEffA;
        Zi(0, 0, this.rad + this.frozenEffA * 1.6, "white");
        Ka.globalAlpha = l;
      }
      n = this.flag_eff_healing ? 1 : 0;
      this.effA_healing += (n - this.effA_healing) * 0.1;
      if (this.effA_healing > 0.01) {
        Ka.save();
        Ka.globalAlpha *= this.effA_healing;
        Zi(0, 0, this.rad + this.effA_healing * 2.6, "purple");
        Ka.restore();
      }
      t = 2 + t;
      l = this.getOutlineColor();
      if (nr && l == J) {
        t = 0;
      } else {
        Zi(0, 0, this.rad, l);
      }
      n = null;
      if (i && !rr) {
        n = Ai("./skins/" + i + ".png");
      }
      if (!n) {
        Ka.fillStyle = a;
        Ka.beginPath();
        Ka.arc(0, 0, Math.max(0, this.rad - t), 0, Math.PI * 2);
        Ka.fill();
      }
      if (this.type != ge && this.type != de && this.type != xe) {
        s = (Ns - this.spawnTime) / 1000;
        s = Math.sin(Math.PI * 2 / 5 * s) * 4;
        i = t * 2.5;
        o = Math.PI / 180;
        Ka.fillStyle = this.flag_tailBitten ? le : rs[this.type - 1] > 0 && this.id != Pr ? oe : l;
        if (!nr || Ka.fillStyle == J) {
          Ka.beginPath();
          Ka.moveTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(o * 282.5));
          Ka.lineTo((this.rad - t + 1) * Math.cos((257.5 - i) * o), (this.rad - t + 1) * Math.sin(o * 257.5));
          Ka.lineTo((this.rad + r + t) * Math.cos((270 + s) * o), (this.rad + r + t) * Math.sin((270 + s) * o));
          Ka.lineTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(o * 282.5));
          Ka.fill();
        }
        if (!nr && (!n || !!this.flag_tailBitten)) {
          Ka.fillStyle = this.flag_tailBitten ? le : a;
          Ka.beginPath();
          Ka.moveTo((this.rad - t) * Math.cos(o * 282.5), (this.rad - t) * Math.sin(o * 282.5));
          Ka.lineTo((this.rad - t) * Math.cos(o * 257.5), (this.rad - t) * Math.sin(o * 257.5));
          Ka.lineTo((this.rad + r) * Math.cos((270 + s) * o), (this.rad + r) * Math.sin((270 + s) * o));
          Ka.lineTo((this.rad - t) * Math.cos(o * 282.5), (this.rad - t) * Math.sin(o * 282.5));
          Ka.fill();
        }
      }
      if (n) {
        s = 500 / 340;
        r = this.rad - t;
        Ka.drawImage(n, -r * s, -r * s, r * 2 * s, r * 2 * s);
      }
      if (this.frozenEffA > 0.01) {
        Ka.save();
        Ka.globalAlpha = Ka.globalAlpha * 0.3 * this.frozenEffA;
        Zi(0, 0, Math.max(0, this.rad - t), "white");
        Ka.restore();
      }
      if (this.effA_healing > 0.01) {
        Ka.save();
        Ka.globalAlpha = Ka.globalAlpha * 0.3 * this.effA_healing;
        Zi(0, 0, Math.max(0, this.rad - t), "#ef24ed");
        Ka.restore();
      }
      if (this.flag_hurt) {
        Ka.fillStyle = "rgba(255,0,0,0.3)";
        Ka.beginPath();
        Ka.arc(0, 0, Math.max(0, this.rad - t), 0, Math.PI * 2);
        Ka.fill();
      }
      if (this.type == ve) {
        Ka.fillStyle = "#E5CF79";
        Ka.beginPath();
        r = this.rad - t;
        s = r * 1;
        Ka.moveTo(r * -0.16, s);
        Ka.lineTo(0, r * (this.flag_usingAbility ? 1.41 : 0.7));
        Ka.lineTo(r * 0.153, s);
        Ka.closePath();
        Ka.fill();
      }
      if (!n) {
        if (this.type == ke) {
          Ka.fillStyle = a;
          Ka.beginPath();
          Ka.arc(this.rad * 0.2, this.rad * 0.7, Math.max(0, this.rad * 0.55 - t), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(-this.rad * 0.2, this.rad * 0.7, Math.max(0, this.rad * 0.55 - t), 0, Math.PI * 2);
          Ka.fill();
          Ka.fillStyle = "#8C96A6";
          Ka.beginPath();
          Ka.arc(-(this.rad * 0.29), this.rad * 0.7 + 10, Math.max(0, 3 - t / 2), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.29, this.rad * 0.7 + 10, Math.max(0, 3 - t / 2), 0, Math.PI * 2);
          Ka.fill();
        } else if (this.type == we) {
          Ka.fillStyle = "#B5AE4C";
          Ka.beginPath();
          Ka.arc(this.rad * 0.1, this.rad * -0.45, this.rad * 0.13, 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * -0.4, this.rad * -0.2, this.rad * 0.12, 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.15, this.rad * -0.25, this.rad * 0.16, 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(this.rad * 0.63, this.rad * -0.4, this.rad * 0.1, 0, Math.PI * 2);
          Ka.fill();
        } else if (this.type == be) {
          Ka.fillStyle = "#000000";
          r = Math.max(0, this.rad - t);
          a = 0;
          Ka.beginPath();
          Ka.moveTo(-r * 1, 0 + a);
          Ka.lineTo(0, -r * 0.2 + a);
          Ka.lineTo(r * 1, 0 + a);
          Ka.lineTo(0, r * 0.1 + a);
          Ka.closePath();
          Ka.fill();
          a -= this.rad * 0.3;
          Ka.beginPath();
          Ka.moveTo(-r * 0.8, 0 + a);
          Ka.lineTo(0, -r * 0.2 + a);
          Ka.lineTo(r * 0.8, 0 + a);
          Ka.lineTo(0, r * 0.1 + a);
          Ka.closePath();
          Ka.fill();
          a -= this.rad * 0.3;
          Ka.beginPath();
          Ka.moveTo(-r * 0.7, 0 + a);
          Ka.lineTo(0, -r * 0.1 + a);
          Ka.lineTo(r * 0.7, 0 + a);
          Ka.lineTo(0, r * 0.1 + a);
          Ka.closePath();
          Ka.fill();
        } else if (this.type == me) {
          Ka.fillStyle = "#E5C870";
          Ka.beginPath();
          a = -this.rad * 0.35;
          s = -this.rad * 0.1;
          Ka.moveTo(a, s);
          Ka.lineTo(a + this.rad * 0.25, s);
          Ka.lineTo(a - this.rad * 0.35, s - 15);
          Ka.fill();
          Ka.beginPath();
          a = this.rad * 0.35;
          s = -this.rad * 0.1;
          Ka.moveTo(a, s);
          Ka.lineTo(a - this.rad * 0.25, s);
          Ka.lineTo(a + this.rad * 0.35, s - 15);
          Ka.fill();
        } else if (this.type == Pe) {
          Ka.fillStyle = "black";
          Ka.beginPath();
          Ka.arc(0, this.rad - 3, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ka.fill();
        } else if (this.type == pe) {
          Ka.fillStyle = "#FA2E8D";
          Ka.beginPath();
          Ka.arc(0, this.rad - 3, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ka.fill();
          r = Math.max(0, this.rad + 2.5 - t);
          Ka.fillStyle = "#F64455";
          Ka.beginPath();
          a = -r * 0.707;
          s = r * 0.707;
          Ka.arc(a, s, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(a + 2, s + 2, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ka.fill();
          a = r * 0.707;
          s = r * 0.707;
          Ka.arc(a, s, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ka.fill();
          Ka.beginPath();
          Ka.arc(a - 2, s + 2, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ka.fill();
        }
      }
      if (!n) {
        Ka.save();
        a = Math.max(1, this.rad / 25);
        Ka.scale(a, a);
        this.drawEyeAtPos(6, this.rad * 0.32);
        this.drawEyeAtPos(-6, this.rad * 0.32);
        Ka.restore();
      }
      if (this.flag_underWater || this.flag_usingAbility && this.type == pe) {
        Ka.save();
        Ka.globalAlpha = 1 - this.underwaterA;
        s = (Ns - this.spawnTime) / 1000;
        n = Math.sin(Math.PI * 2 / 1.5 * s) * 1;
        if (this.flag_underWater) {
          Ka.globalAlpha *= 0.5;
          if (this.type == Ie) {
            Ka.globalAlpha = 0.3;
          }
        }
        Ka.fillStyle = this.flag_underWater ? "#4E71C3" : "#7E6A35";
        a = this.flag_underWater ? this.rad * 0.15 : this.rad * 0.1;
        Ka.beginPath();
        Ka.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        if (this.type == Ee) {
          Ka.globalAlpha = 1 - this.underwaterA;
          Ka.fillStyle = "#73799b";
          Ka.beginPath();
          r = this.rad;
          s = r * 0.25;
          Ka.moveTo(r * -0.07, s);
          Ka.lineTo(0, s - r * 0.5);
          Ka.lineTo(r * 0.35, s);
          Ka.closePath();
          Ka.fill();
        } else if (this.type == Oe) {
          Zi(0, this.rad * 0.2, this.rad * 0.12, "#4D4D4D");
        } else if (this.type == Ce) {
          Ka.globalAlpha = 1 - this.underwaterA;
          Zi(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#598b30");
          Zi(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#64a034");
          Zi(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#64a034");
          Zi(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#598b30");
        }
        Ka.restore();
      }
      if (this.flag_usingAbility && this.type == Fe) {
        Ka.save();
        Ka.globalAlpha = 1 - this.underwaterA;
        if (typeof this.octoDrawObj == "undefined") {
          this.octoDrawObj = new qi(0, _t, 0, 0, this.rad);
        }
        this.octoDrawObj.oType = this.octoDisguiseObjT;
        if (this.octoDisguiseObjT == ht) {
          this.octoDrawObj.type = tt;
          this.octoDrawObj.nRad = this.rad;
        } else if (this.octoDisguiseObjT == _t) {
          this.octoDrawObj.nRad = 25;
        } else if (this.octoDisguiseObjT == Ut) {
          this.octoDrawObj.nRad = 17;
        } else if (this.octoDisguiseObjT == ct) {
          this.octoDrawObj.curBiome = Xa;
        }
        this.octoDrawObj.nRad = this.rad;
        this.octoDrawObj.draw();
        Ka.restore();
      }
      if (this.flag_usingAbility && this.type == ze) {
        Ka.save();
        Ka.globalAlpha = 1 - this.underwaterA;
        if (a = Ai("img/snowball.png")) {
          r = this.rad;
          Ka.rotate(this.rPer * Math.PI * 2);
          Ka.drawImage(a, -r, -r, r * 2, r * 2);
        } else {
          this.drawOutlinedCircle("", "white");
        }
        Ka.restore();
      }
      Ka.restore();
      n = this.flag_eff_stunned ? 1 : 0;
      this.stunA += (n - this.stunA) * 0.1;
      if (this.stunA > 0.01) {
        Ka.save();
        a = 2.5;
        a = Ns % (a * 1000) / (a * 1000);
        Ka.rotate(a * 2 * Math.PI);
        Ka.globalAlpha *= this.stunA;
        a = this.rad * 0.2;
        s = (Ns - this.spawnTime) / 1000;
        n = (0.5 + a * 0.07) * Math.sin(Math.PI * 2 / 1 * s);
        Ka.fillStyle = "#F3D444";
        Ka.beginPath();
        Ka.arc(this.rad * -0.22, this.rad * -0.22, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * 0.22, this.rad * -0.22, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * 0.22, this.rad * 0.22, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(this.rad * -0.22, this.rad * 0.22, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        Ka.restore();
      }
      n = this.flag_eff_onFire ? 1 : 0;
      this.onFireEffA += (n - this.onFireEffA) * 0.1;
      if (this.onFireEffA > 0.01 && (l = 0.15, o = (0.4 - l) * 0.5, a = l + o + o * Math.sin(Math.PI * 2 / 1 * (Ns / 1000)), Ka.save(), Ka.globalAlpha = Ka.globalAlpha * a * this.onFireEffA, Zi(0, 0, Math.max(0, this.rad - t), "orange"), Ka.restore(), l = 0.5, o = (1 - l) * 0.5, n = l + o + o * Math.sin(Math.PI * 2 / 1 * (Ns / 1000)), t = Math.trunc(Ns / 300) % 2, a = Ai(t == 1 ? "img/fire.png" : "img/fire2.png"), t = Ai(t == 0 ? "img/fire.png" : "img/fire2.png"), a || t)) {
        r = 0 - this.rad * 0.3;
        s = this.rad * 0.2 - this.rad * 0.3;
        i = this.rad * 1 * (2 + n * 2) / 3;
        l = this.rad * 1 * n;
        Ka.save();
        if (a) {
          Ka.globalAlpha = Ka.globalAlpha * this.onFireEffA * n;
          Ka.drawImage(a, r + i * -0.5, s + l * -0.95, i, l);
        }
        if (t) {
          Ka.globalAlpha = Ka.globalAlpha * this.onFireEffA * n;
          Ka.drawImage(t, r + this.rad * 0.5 + i * -0.5, s + this.rad * 0.5 + l * -0.95, i, l);
        }
        Ka.restore();
      }
      if (this.frozenEffA > 0.01) {
        Ka.save();
        a = 7;
        a = Ns % (a * 1000) / (a * 1000);
        Ka.rotate(a * 2 * Math.PI);
        Ka.globalAlpha *= this.frozenEffA;
        a = this.rad * 0.2;
        s = (Ns - this.spawnTime) / 1000;
        n = (0.5 + a * 0.07) * Math.sin(Math.PI * 2 / 1 * s);
        Ka.fillStyle = "white";
        t = this.rad * 0.27;
        Ka.beginPath();
        Ka.arc(-t, -t, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(t, -t, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(t, t, Math.max(0, a + n), 0, Math.PI * 2);
        Ka.fill();
        Ka.beginPath();
        Ka.arc(-t, t, Math.max(0, a - n), 0, Math.PI * 2);
        Ka.fill();
        Ka.restore();
      }
      if (this.flag_lowWat) {
        l = 0.2;
        o = (0.8 - l) * 0.5;
        a = l + o + o * Math.sin(Math.PI * 2 / 1.2 * (Ns / 1000));
        Ka.save();
        Ka.globalAlpha = a;
        Ka.fillStyle = this.type == at ? $ : Q;
        Ka.beginPath();
        Ka.arc(0, this.rad + 5, 5, 0, Math.PI * 2);
        Ka.fill();
        Ka.restore();
      }
      Ka.save();
      if (this.name && this.nameTXT && !sr) {
        Ka.globalAlpha = this.dead ? Ka.globalAlpha * (1 - e) : 1;
        Ka.globalAlpha *= this.nameA;
        this.nameTXT.x = 0;
        this.nameTXT.y = this.rad + 9;
        this.nameTXT.draw();
      }
      Ka.restore();
    };
    this.drawEyeAtPos = function (e, t) {
      Ka.beginPath();
      Ka.arc(e, t, 4.5, 0, Math.PI * 2);
      Ka.fillStyle = "black";
      Ka.fill();
      Ka.beginPath();
      Ka.fillStyle = "white";
      Ka.arc(e - 2, t - 1, 0.99, 0, Math.PI * 2);
      Ka.fill();
    };
    this.moveUpdate = function () {
      var e = (Ns - this.updateTime) / 1000 / Y;
      var e = e < 0 ? 0 : e > 1 ? 1 : e;
      if (this.dead && e >= 1) {
        hs.push(this);
      }
      this.x = e * (this.nx - this.ox) + this.ox;
      this.y = e * (this.ny - this.oy) + this.oy;
      this.rad += (this.nRad - this.rad) * 0.1;
      if (this.oType == ht) {
        var t = this.angleDelta * 0.1;
        this.angleDelta -= t;
        this.angle += t;
      }
      return Math.min(1, e);
    };
  }
  Ki.prototype = {
    objs: [],
    z: 0,
    id: 0,
    oType: 0,
    updateZ: function () {
      if (this.objs.length > 0) {
        this.objs[0].updateZ();
        this.z = this.objs[0].z;
      }
    },
    draw: function () {
      for (var e = 0; e < this.objs.length; e++) {
        var t = this.objs[e];
        t.draw(true);
      }
      for (e = 0; e < this.objs.length; e++) {
        t = this.objs[e];
        t.draw(false);
      }
    },
    addBatchedObj: function (e) {
      if (this.objs.length == 0) {
        this.oType = e.oType;
        this.objs = [];
      }
      this.objs.push(e);
    }
  };
  function Ki() {}
  function Zi(e, t, a, i) {
    Ka.fillStyle = i;
    Ka.beginPath();
    Ka.arc(e, t, Math.max(0, a), 0, Math.PI * 2);
    Ka.fill();
  }
  function Qi(e) {
    this.data = e;
    this.offset = 0;
    this.readUInt8 = function () {
      var e = this.data.getUint8(this.offset);
      this.offset += 1;
      return e;
    };
    this.readUInt16 = function () {
      try {
        var e = this.data.getUint16(this.offset, false);
        this.offset += 2;
        return e;
      } catch (e) {
        return 0;
      }
    };
    this.readUInt32 = function () {
      var e = this.data.getUint32(this.offset, false);
      this.offset += 4;
      return e;
    };
    this.readString = function () {
      for (var e = this.readUInt16(), t = "", a, i = 0; i < e; i++) {
        a = this.readUInt8();
        if (i != e - 1) {
          t += String.fromCharCode(a);
        }
      }
      return Fi(t);
    };
    this.readMsgReaderBitsGroup = function () {};
    this.readBitGroup = function () {
      return new er(this);
    };
  }
  function $i(e) {
    this.len = 0;
    this.dataView = new DataView(new ArrayBuffer(e));
    this.writeUInt8 = function (e) {
      this.dataView.setUint8(this.len, e);
      this.len += 1;
    };
    this.writeUInt16 = function (e) {
      this.dataView.setUint16(this.len, e, false);
      this.len += 2;
    };
    this.writeInt16 = function (e) {
      this.dataView.setInt16(this.len, e, false);
      this.len += 2;
    };
    this.writeUInt32 = function (e) {
      this.dataView.setUint32(this.len, e, false);
      this.len += 4;
    };
    this.writeString = function (e) {
      e = Wi(e);
      len = e.length;
      this.writeUInt16(e.length);
      for (var t = 0; t < len; t++) {
        this.writeUInt8(e.charCodeAt(t));
      }
    };
  }
  function er(e) {
    this.bytesArray = new Uint8Array(20);
    this.bytesLen = 0;
    this.rBitIndex = 1;
    this.rByteIndex = 0;
    this.getBool = function () {
      var e = Ci(this.bytesArray[this.rByteIndex], this.rBitIndex) > 0;
      this.rBitIndex += 1;
      if (this.rBitIndex > 7) {
        this.rBitIndex = 1;
        this.rByteIndex += 1;
      }
      return e;
    };
    this.getInt0to3 = function () {
      return this.getIntWithXBits(2);
    };
    this.getIntWithXBits = function (e) {
      var t = 0;
      for (var a = 0; a < e; a++) {
        var i = this.getBool();
        var t = Ni(t, a, i);
      }
      return t;
    };
    this.byteToStr = function (e) {
      var t = "";
      for (var a = 0; a < 8; a++) {
        t += Ci(e, a) > 0 ? "1" : "0";
      }
      return t;
    };
    var t = true;
    do {
      t = e.readUInt8();
      this.bytesArray[this.bytesLen++] = t;
      t = Ci(t, 0) > 0;
    } while (t);
  }
  var tr;
  var ar = 0;
  function ir() {
    if (Cs()) {
      theWs = ws;
      ws = null;
      theWs.close();
    }
    if (ar > 1) {
      N += 1;
      if (N > h[C].length - 1) {
        N = 0;
      }
      O = l[N];
      C = O.region;
      Es();
    }
    xr = false;
    document.getElementById("connecting").style.visibility = "visible";
    un();
    console.log("Connecting to " + O.name + "...");
    var e = window.location.protocol === "https:" ? "wss://" : "ws://";
    var e = e + O.serverConnURL + ":" + (e == "wss://" ? 7021 : 7020);
    console.log("connecting to " + e);
    ws = new WebSocket(e);
    ws.binaryType = "arraybuffer";
    ws.onopen = function () {
      ar = 0;
      document.getElementById("startMenu").style.visibility = "visible";
      document.getElementById("connecting").style.visibility = "hidden";
    };
    ws.onmessage = function (e) {
      Bs(new DataView(e.data));
    };
    ws.onclose = function (e) {
      if (this == ws) {
        ar += 1;
        kr = vr = Ar = false;
        if (!xr) {
          tr = setTimeout(function () {
            ir();
          }, 2000);
          document.getElementById("connecting").style.visibility = "visible";
        }
      }
    };
    ws.onerror = function () {
      console.log("socket error!");
    };
  }
  var rr = false;
  var sr = false;
  var nr = false;
  var lr = false;
  var or = false;
  var hr = false;
  var cr = za;
  if (window.localStorage) {
    rr = window.localStorage.getItem("options_noImages") + 0 > 0;
    document.getElementById("options_noImages").checked = rr;
    sr = window.localStorage.getItem("options_noNames") + 0 > 0;
    document.getElementById("options_noNames").checked = sr;
    nr = window.localStorage.getItem("options_lowGraphics") + 0 > 0;
    document.getElementById("options_lowGraphics").checked = nr;
    lr = window.localStorage.getItem("options_noJoystick") + 0 > 0;
    document.getElementById("options_noJoystick").checked = lr;
    lr = window.localStorage.getItem("options_noJoystick") + 0 > 0;
    document.getElementById("options_noJoystick").checked = lr;
    or = window.localStorage.getItem("options_leftHanded") + 0 > 0;
    if (B = document.getElementById("options_leftHanded")) {
      B.checked = or;
    }
    hr = window.localStorage.getItem("options_musicMuted") + 0 > 0;
    ni();
  }
  var dr = 0;
  var gr = 0;
  var fr = +new Date();
  var ur = "... fps";
  var mr = +new Date();
  var pr = 0;
  var br;
  var yr = "...";
  var wr = 0;
  var Pr = 0;
  var Ir = de;
  var vr = false;
  var kr = false;
  var Ar = false;
  var Mr = false;
  var Tr = +new Date();
  var xr = false;
  var Sr = false;
  var Er = waterBarPerc_n = 100;
  var Dr = xp = xpPer = 0;
  var _r = new Ji(16, "white");
  var Br = new Ji(16, "white");
  var Ur = new Ji(16, "white");
  var Cr = new Ji(10, "white");
  Ur.multiLine = true;
  Ur.renderScale = 1;
  Cr.renderScale = 1;
  var Nr = 0;
  var Or = 0;
  var Rr = "";
  var Wr = [];
  var Fr = new Vi();
  Fr.onButtonTouchStart = function () {
    En(Mn, true);
  };
  Fr.onButtonTouchEnd = function () {
    En(Mn, false);
    if (Lr.pressed && Lr.pressedTouchID == -1) {
      Lr.pressed = false;
      En(An, false);
    }
  };
  Wr.push(Fr);
  var Hr = new Vi();
  Hr.isMiniRechargeBut = true;
  Hr.touchEnabled = false;
  Wr.push(Hr);
  var Lr = new Yi("RUN");
  Lr.onButtonTouchStart = function () {
    En(An, true);
  };
  Lr.onButtonTouchEnd = function () {
    En(An, false);
  };
  Wr.push(Lr);
  var zr = new Yi("CHAT");
  zr.onButtonTouchStart = function () {
    Pn();
  };
  Wr.push(zr);
  var Gr = new Yi("S");
  Gr.onButtonTouchStart = function () {
    En(Sn, true);
  };
  Wr.push(Gr);
  var jr = new Yi("DOWN↓");
  jr.onButtonTouchStart = function () {
    En(xn, true);
  };
  Wr.push(jr);
  var Xr = false;
  var Yr = -1;
  var Vr = 0;
  var Jr = 0;
  var qr = 0;
  var Kr = 0;
  var Zr = 50;
  var Qr = 0;
  var $r = 0;
  var es = 0;
  joystickDistF_n = joystickDistF = 0;
  var ts = 100;
  var as = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var is = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var rs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var ss = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var ns = false;
  var ls = [];
  var os = {};
  var hs = [];
  var cs = false;
  var ds = 0;
  var gs = 1;
  var fs = false;
  var us = 0;
  var ms = 1;
  var ps = false;
  var bs = +new Date();
  ei("audio/click.mp3");
  var ys = +Date.now();
  var ws;
  kn();
  Rn();
  if (T) {
    console.log("Party link detected! Verifying...");
    var x = Ei(x);
    var Ps = false;
    for (var c = 0; c < l.length; c++) {
      if (l[c].ip == x && x.length > 5) {
        var O = l[c];
        var N = h[O.region].indexOf(O);
        var C = O.region;
        var Is = document.getElementById("spawnXpLabel");
        Is.style.display = "block";
        Is.style.opacity = 1;
        Is.textContent = "Joining party server...";
        T = Ps = true;
        console.log("Successfuly found party server...");
        break;
      }
    }
    if (Ps) {
      console.log("Connecting to party server...");
      _s();
      Ds();
      Es();
      ir();
    } else {
      alert("This server for this party link is no longer supported!  Joining auto server...");
      x = null;
      T = false;
      z();
    }
  } else {
    z();
  }
  var vs = false;
  function ks() {
    var e = window.location.protocol === "https:" ? "wss://" : "ws://";
    masterWs = new WebSocket(e + r + ":" + (e == "wss://" ? 7501 : 7500));
    masterWs.binaryType = "arraybuffer";
    masterWs.onopen = function () {
      var e = new $i(1);
      e.writeUInt8(200);
      masterWs.send(e.dataView.buffer);
    };
    masterWs.onmessage = function (e) {
      e = new Qi(new DataView(e.data));
      if (e.readUInt8() == 100) {
        vs = true;
        var t = e.readUInt32();
        console.log("MasterServer: " + t + " total players online!");
        Cr.setText(zi(t) + " players");
        for (var t = e.readUInt16(), a = 0; a < t; a++) {
          var i = Ei(e.readUInt32());
          var r = e.readUInt16();
          for (var s = 0; s < l.length; s++) {
            if (l[s].ip == i) {
              l[s].playersCount = r == 60000 ? -1 : r;
              break;
            }
          }
        }
      }
      _s();
      Ds();
    };
    masterWs.onerror = function (e) {
      console.log("MasterServer: error connecting!");
    };
    masterWs.onclose = function (e) {
      console.log("Disconnected from master server!");
    };
  }
  ks();
  var As = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  var Ms = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  if ((As || Ms) && !w) {
    var Ts = false;
    if (window.localStorage) {
      Ts = window.localStorage.getItem("oldVisitor") > 0;
      try {
        window.localStorage.setItem("oldVisitor", 1);
      } catch (e) {
        Ts = true;
      }
    }
    if (!Ts) {
      if (As) {
        window.location.href = "https://itunes.apple.com/us/app/mope.io/id1086471119?ls=1&mt=8";
      } else if (Ms) {
        window.location.href = "https://play.google.com/store/apps/details?id=tatarnykov.stan.mopeioandroid";
      }
    }
  }
  document.getElementById("serverSelect").onchange = xs;
  function xs() {
    N = document.getElementById("serverSelect").selectedIndex - 1;
    O = h[C][N];
    Es();
    console.log("Server changed...");
    if (Cs()) {
      ws.close();
    }
    T = false;
    document.getElementById("spawnXpLabel").style.opacity = 0;
    S = x = null;
    ir();
  }
  document.getElementById("regionSelect").onchange = Ss;
  function Ss() {
    console.log("Region changed...");
    var e = document.getElementById("regionSelect").selectedIndex - 1;
    C = o[e];
    if (Cs()) {
      ws.close();
    }
    T = false;
    S = x = null;
    document.getElementById("spawnXpLabel").style.opacity = 0;
    X();
  }
  function Es() {
    document.getElementById("serverSelect").selectedIndex = N + 1;
  }
  function Ds() {
    for (var e = document.getElementById("serverSelect"); e.lastChild;) {
      e.removeChild(e.lastChild);
    }
    var t = document.createElement("option");
    t.text = "Choose a server:";
    t.disabled = true;
    e.add(t);
    var a = -1;
    for (var i = h[C], r = 0; r < i.length; r++) {
      t = document.createElement("option");
      t.text = i[r].name + " [" + (i[r].playersCount < 0 ? "..." : i[r].playersCount) + " players " + (i[r].playersCount >= n ? "-FULL!" : "") + "]";
      if (i[r].ip == O.ip) {
        a = r;
      }
      e.add(t);
    }
    if (a == -1) {
      a = 0;
    }
    e.selectedIndex = a + 1;
  }
  function _s() {
    for (var e = document.getElementById("regionSelect"); e.lastChild;) {
      e.removeChild(e.lastChild);
    }
    var t = document.createElement("option");
    t.text = "Choose a region:";
    t.disabled = true;
    e.add(t);
    var a = -1;
    for (var i = 0; i < o.length; i++) {
      var r = o[i];
      for (var t = h[r], s = 0; s < t.length; s++);
      t = document.createElement("option");
      t.text = r;
      if (r == C) {
        a = i;
      }
      e.add(t);
    }
    if (a == -1) {
      a = 0;
    }
    e.selectedIndex = a + 1;
  }
  function Bs(e) {
    e = new Qi(e);
    switch (e.readUInt8()) {
      case 1:
        nPlayers = e.readUInt16();
        Cr.setText(zi(nPlayers) + " players");
        serverVer = e.readUInt16();
        if (serverVer > a) {
          setTimeout(function () {
            if (!w) {
              window.onbeforeunload = null;
            }
            console.log("Old client (ver " + a + "/" + serverVer + ")");
            alert("mope.io has been updated! You need to refresh to get the latest version of the game! (If this keeps appearing, hold SHIFT when pressing refresh!)");
            window.location.reload(true);
          }, 1500);
        } else {
          if (serverVer > a) {
            console.log("Old server version detected!");
          }
          document.getElementById("startMenuWrapper").style.display = "block";
          fn(true);
        }
        break;
      case 2:
        var t = e.readUInt8();
        if (t == 100) {
          document.getElementById("startMenuWrapper").style.display = "none";
        }
        if (t == 1) {
          spectating = e.readUInt8() == 2;
          vr = !spectating;
          kr = spectating;
          Ar = true;
          if (!Mr) {
            si(ii);
            document.getElementById("onconnectDiv").style.visibility = "visible";
          }
          Mr = true;
          vi = e.readUInt16();
          ki = e.readUInt16();
          gameMode = e.readUInt8();
          oi(gameMode);
          ci = camx_o = camx_n = e.readUInt16() / 4;
          camy = camy_o = camy_n = e.readUInt16() / 4;
          camzoom_n = e.readUInt16() / 1000;
          hi = camzoom_n * 1.2;
          if (!spectating) {
            Gs(e);
          }
          if (!spectating) {
            document.getElementById("startMenuWrapper").style.display = "none";
            si(ri);
            if (!w) {
              window.onbeforeunload = function (e) {
                return "You're alive in a game, close mope.io?";
              };
            }
          }
          if (!spectating && (Yn += 1, zn += 1, window.localStorage)) {
            try {
              window.localStorage.setItem("gamesSinceAd", zn);
            } catch (e) {}
          }
          if (T) {
            e = document.getElementById("spawnXpLabel");
            e.style.display = "block";
            e.style.opacity = 1;
            e.textContent = "Joined party server :)";
          }
          Rn();
        } else if (t == 0) {
          e = document.getElementById("spawnXpLabel");
          e.style.display = "block";
          e.style.opacity = 1;
          e.textContent = "Error: this server is full!";
          T = false;
          var i = O;
          setTimeout(function () {
            if (!vr && O == i) {
              ar = 100;
              ir();
            }
          }, 1000);
        } else if (t == 2) {
          e = document.getElementById("spawnXpLabel");
          e.style.display = "block";
          e.style.opacity = 1;
          e.textContent = "Error: link is invalid/expired!";
          T = false;
          e = document.location.href;
          e = Di("l", e);
          e = Di("s", e);
          window.history.pushState("", document.title, e);
          alert("Error, your mope.io party link is invalid/ expired! Joining auto server...");
          setTimeout(function () {
            if (!vr) {
              ws.close();
            }
          }, 2000);
        }
        break;
      case 24:
        t = e.readUInt8();
        if (t == 5) {
          tn = false;
        }
        if (t == 0 || t == 1) {
          var r = t == 1;
          var s = e.readUInt8();
          var t = e.readUInt8();
          tn = true;
          an = 0;
          rn = [];
          sn = r;
          nn = +new Date();
          ln = nn + s * 1000;
          for (r = 0; r < t; r++) {
            var s = e.readUInt8();
            var n = e.readUInt8();
            var s = new ji(0, 0, 100, 100, s, n);
            rn.push(s);
          }
        }
        Js = +new Date();
        break;
      case 8:
        t = e.readUInt16();
        s = e.readUInt8();
        lbData = [];
        for (r = 0; r < s; ++r) {
          lbData.push({
            rank: e.readUInt16(),
            name: e.readString(),
            score: e.readUInt32()
          });
        }
        js(lbData, 0, t);
        break;
      case 10:
        nPlayers = e.readUInt16();
        Cr.setText(zi(nPlayers) + " players");
        break;
      case 18:
        r = e.readUInt8();
        t = e.readUInt8() > 0;
        Pr = e.readUInt32();
        ts = e.readUInt32();
        s = Ws(r);
        Ys = t ? "You downgraded to " + s.aniName + "! \nDont lose too much xp!" : s.upgradeText;
        Vs = "white";
        Js = +new Date() + 9000;
        if (!ns) {
          ns = true;
          as = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          is = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          rs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          ss = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        }
        as = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        for (var l = e.readUInt8(), t = 0; t < l; t++) {
          as[e.readUInt8() - 1] = 1;
        }
        s = is;
        is = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          is[e.readUInt8() - 1] = 1;
        }
        rs = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          rs[e.readUInt8() - 1] = 1;
        }
        n = ss;
        ss = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          ss[e.readUInt8() - 1] = 1;
        }
        qs = [];
        en = r == de || r == Me;
        for (t = 0; t < is.length; t++) {
          if (is[t] > 0 && s[t] == 0) {
            e = new qi(0, ht, 0, 0, 35);
            e.type = t + 1;
            qs.push(e);
          }
        }
        for (t = 0; t < ss.length; t++) {
          if (ss[t] > 0 && n[t] == 0) {
            e = new qi(0, t + 1, 0, 0, 35);
            qs.push(e);
          }
        }
        Ks = +new Date() + 9000;
        Zs = 0;
        if (qs.length > 0) {
          $s = 1.2;
          e = Math.max(0, qs.length - 1) * 45;
          Qs = e + 40;
          t = 0;
          for (; t < qs.length; t++) {
            r = qs[t];
            r.x = r.ox = r.nx = 0 - e / 2 + t / Math.max(1, qs.length - 1) * e;
            r.y = r.oy = r.ny = 0;
            r.nRad = 20;
          }
        }
        break;
      case 14:
        var t = e.readUInt8();
        var o = e.readUInt32();
        Ys = t == 1 ? "Oh no, You were eaten! \n Watch out for red-circled players!" : t == 2 ? "Oh no, You died from a tail-bite!\n Watch your tail!" : t == 4 ? "You died of thirst :( Don't let your water run out!" : t == 13 ? "You died from burning! (Get to water when on fire!)" : "You died! Watch your health!";
        Vs = "#F1C34C";
        Js = +new Date() + 3500;
        vr = false;
        kr = true;
        tn = false;
        On();
        try {
          if (!w) {
            setTimeout(factorem.refreshAds.bind(factorem, null, true), 800);
          }
        } catch (e) {}
        window.setTimeout(function () {
          if (!vr) {
            if (b) {
              Hn();
            }
            if (y) {
              Ln();
            }
            document.getElementById("startMenuWrapper").style.display = "block";
            si(ii);
            Rr = o > 0 ? "You'll spawn with +" + Gi(o) + " XP!" : "";
            Or = 0;
            var e = document.getElementById("spawnXpLabel");
            e.style.opacity = 0;
            if (Rr) {
              setTimeout(function () {
                if (!vr) {
                  e.style.display = "block";
                  e.style.opacity = 1;
                }
              }, 1000);
            }
            document.getElementById("spawnXpLabel").textContent = Rr;
            if (!w) {
              window.onbeforeunload = null;
            }
          }
        }, 2000);
        break;
      case 4:
        Os(e);
        break;
      case 19:
        t = e.readUInt32();
        if (t = os[t]) {
          e = e.readString();
          t.gotChat(e);
        }
        break;
      case 22:
        e = e.readString();
        t = Si(O.ip);
        mn("mope.io/?s=" + t + "&l=" + e);
        break;
      case 23:
        t = e.readUInt8();
        if (vr) {
          console.log("event msg");
          Js = Ns + 3500;
          switch (t) {
            case 255:
              Ys = e.readString();
              break;
            case 2:
              Ys = "Ouch! Your tail got bitten!";
              break;
            case 12:
              Ys = "You've been stung by a jellyfish!";
              break;
            case 3:
              Ys = "ZAP! You've been shocked by a STINGRAY!";
              break;
            case 8:
              Ys = "You've been inked!";
              break;
            case 5:
              Ys = "Oh no! Escape the kraken's pull!";
              break;
            case 6:
              Ys = "Ouch! Pufferfish are pointy!";
              break;
            case 7:
              Ys = "That's an octopus in disguise!";
              break;
            case 9:
              Ys = "Brrr! You've been frozen!";
              break;
            case 10:
              Ys = "Ahh! The wolf's howl scared you!";
              break;
            case 11:
              Ys = "Ouch! A VERY LOUD sound hit you!";
              break;
            case 13:
              Ys = "Ah! You're on fire!";
              break;
            case 14:
              Ys = "BAM! You got kicked by a donkey!";
              break;
            case 16:
              Ys = "Ouch! You're getting dragged by a croc!";
              break;
            case 17:
              Ys = "A fox DUG you out of the hole!";
              break;
            case 18:
              Ys = "A wave has swept you away!";
          }
        }
        break;
      case 25:
        t = e.readUInt8() > 0;
        e = e.readUInt8() / 10;
        if (t) {
          us = e * 1000;
          ms = +new Date() + e * 1000;
          fs = true;
        } else {
          ds = e * 1000;
          gs = +new Date() + e * 1000;
          cs = true;
        }
    }
  }
  function Us(e) {
    ws.send(e.dataView.buffer);
  }
  function Cs() {
    return ws != null && ws.readyState == ws.OPEN;
  }
  var Ns = +new Date();
  var ys = +new Date();
  function Os(e) {
    ys = Ns = +new Date();
    camx_o = ci;
    camy_o = camy;
    camx_n = e.readUInt16() / 4;
    camy_n = e.readUInt16() / 4;
    camzoom_n = e.readUInt16() / 1000;
    var t = e.readUInt8();
    var a = Ci(t, 0);
    var i = Ci(t, 1);
    var r = Ci(t, 2);
    ps = Ci(t, 3);
    Sr = Ci(t, 7);
    if (!a) {
      var a = cs = abil_active = false;
      var s = oa;
      if (i) {
        a = Ci(t, 4);
        cs = Ci(t, 5);
        abil_active = Ci(t, 6);
        s = e.readUInt8();
      }
      t = fs = abil_dive_active = false;
      if (r) {
        var n = e.readUInt8();
        var t = Ci(n, 0);
        fs = Ci(n, 1);
        abil_dive_active = Ci(n, 2);
      }
      if (ps) {
        Hr.abil_usable = a;
        Hr.abil_recharging = cs;
        Hr.abil_possible = i;
        Hr.abil_active = abil_active;
        Hr.abil_Type = s;
        Fr.abil_usable = t;
        Fr.abil_recharging = fs;
        Fr.abil_possible = r;
        Fr.abil_active = abil_dive_active;
        Fr.abil_Type = na;
        if (fs) {
          Fr.abil_rechargeTotalT = us;
          Fr.abil_rechargeEndT = ms;
        }
        if (cs) {
          Hr.abil_rechargeTotalT = ds;
          Hr.abil_rechargeEndT = gs;
        }
      } else {
        Fr.abil_usable = a;
        Fr.abil_recharging = cs;
        Fr.abil_possible = i;
        Fr.abil_active = abil_active;
        Fr.abil_Type = s;
        Hr.abil_usable = t;
        Hr.abil_recharging = fs;
        Hr.abil_possible = r;
        Hr.abil_active = abil_dive_active;
        Hr.abil_Type = na;
        if (cs) {
          Fr.abil_rechargeTotalT = ds;
          Fr.abil_rechargeEndT = gs;
        }
        if (fs) {
          Hr.abil_rechargeTotalT = us;
          Hr.abil_rechargeEndT = ms;
        }
      }
      waterBarPerc_n = e.readUInt8();
      xp = e.readUInt32();
      Dr = e.readUInt8();
    }
    i = e.readUInt16();
    for (r = 0; r < i; r++) {
      var s = e.readUInt8();
      var a = e.readUInt32();
      var n = e.readUInt16() / 4;
      var l = e.readUInt16() / 4;
      var o = e.readUInt16() / 4;
      var t = e.readUInt8();
      var h = Ci(t, 0) > 0;
      var c = Ci(t, 1) > 0;
      var d = Ci(t, 3) * 2 + Ci(t, 2) * 1;
      var g = null;
      if (h) {
        g = os[e.readUInt32()];
      }
      t = new qi(a, s, l, o, n);
      n = os[a];
      delete os[a];
      n = ls.indexOf(n);
      if (n != -1) {
        ls.splice(n, 1);
      }
      os[a] = t;
      ls.push(t);
      if (g) {
        t.updateTime = Ns;
        t.nx = t.x;
        t.ny = t.y;
        t.ox = g.x;
        t.oy = g.y;
        t.x = g.x;
        t.y = g.y;
      }
      t.curBiome = d;
      if (s == ht) {
        a = e.readUInt8();
        n = e.readString();
        t.type = a;
        t.setName(n ? n : "mope.io");
      }
      if (c) {
        t.isRectangle = true;
        t.rectW = e.readUInt16();
        t.rectH = e.readUInt16();
      }
      if (s == It) {
        t.type = e.readUInt8();
        if (this.type == t.type == La || t.type == Fa || t.type == Ha || t.type == Ea || t.type == Da || t.type == Ra) {
          a = e.readUInt8() * 3 + 180;
          t.angle = Bi(a);
        }
        if (t.type == Pa || t.type == Ia || t.type == Ra || t.type == xa || t.type == Ba) {
          t.rad = t.oRad = 0;
        }
      }
      if (s == Vt) {
        a = e.readUInt8();
        t.riverSpecT = a;
        t.riverFlowSpeedX = a == 0 ? 1 : -1;
      }
    }
    i = e.readUInt16();
    for (r = 0; r < i; r++) {
      a = e.readUInt32();
      l = e.readUInt16() / 4;
      o = e.readUInt16() / 4;
      n = e.readUInt16() / 10;
      t = e.readBitGroup();
      s = t.getBool();
      c = t.getBool();
      if (t = os[a]) {
        t.updateTime = Ns;
        t.ox = t.x;
        t.oy = t.y;
        t.nx = l;
        t.ny = o;
        t.oRad = t.rad;
        t.nRad = n;
        t.flag_hurt = c;
        if (s) {
          a = e.readUInt8();
          if (t.hpBarA < 0.001) {
            t.hpPer = a;
          }
          t.hpPer_n = a;
          t.hpBarTimeoutT = +new Date() + 3000;
        } else {
          t.hpBarTimeoutT = +new Date();
        }
        if (t.oType == ht) {
          a = e.readUInt8() * 2;
          a = Bi(a - 90);
          t.angleDelta = Oi(t.angle, a);
          t.oAngle = t.angle;
          if (t.firstPosUpd) {
            t.oAngle = t.angle = a;
            t.angleDelta = 0;
          }
          a = e.readBitGroup();
          t.curBiome = a.getIntWithXBits(3);
          t.flag_lowWat = a.getBool();
          t.flag_underWater = a.getBool();
          t.flag_eff_invincible = a.getBool();
          t.flag_usingAbility = a.getBool();
          t.flag_tailBitten = a.getBool();
          t.flag_eff_stunned = a.getBool();
          t.flag_iceSliding = a.getBool();
          t.flag_eff_frozen = a.getBool();
          t.flag_eff_onFire = a.getBool();
          t.flag_eff_healing = a.getBool();
          if (t.type == Fe && t.flag_usingAbility) {
            a = e.readUInt8();
            t.octoDisguiseObjT = a;
          }
        }
        t.firstPosUpd = false;
      }
    }
    i = e.readUInt16();
    for (r = 0; r < i; r++) {
      t = e.readUInt32();
      a = e.readUInt8() > 0 ? e.readUInt32() : 0;
      t = os[t];
      a = a > 0 ? os[a] : undefined;
      if (t) {
        t.dead = true;
        t.updateTime = Ns;
        if (t.oType == It) {
          t.ox = t.x;
          t.oy = t.y;
          t.nx = t.x;
          t.ny = t.y;
        } else if (a) {
          t.ox = t.x;
          t.oy = t.y;
          t.oRad = t.rad;
          t.nx = a.nx;
          t.ny = a.ny;
          t.nRad = Math.min(t.rad, a.rad);
          t.hp_n = 0;
        } else {
          t.ox = t.x;
          t.oy = t.y;
          t.oRad = t.rad;
          t.nx = t.x;
          t.ny = t.y;
          t.nRad = 0;
        }
      }
    }
  }
  function Rs(e) {
    var t = {};
    switch (e) {
      case Ha:
        t.abilName = "Tail Slap";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Fa:
        t.abilName = "Trunk Hit";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case na:
        t.abilName = "Dive";
        t.abilImg = "img/ability_dive.png";
        break;
      case Ca:
        t.abilName = "Dig For Food";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case ca:
        t.abilName = "Shell";
        t.abilImg = "skins/" + Ws(Ir).skinName + "2.png";
        break;
      case Da:
        t.abilName = "Bite Drag";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case pa:
        t.abilName = "Disguise";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case _a:
        t.abilName = "Burrow Hole";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ba:
        t.abilName = "Pull from Hole";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case ya:
        t.abilName = "Charge";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ta:
        t.abilName = "Roll snow";
        t.abilImg = "img/snowball.png";
        break;
      case va:
        t.abilName = "Throw Snow";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ma:
        t.abilName = "Drop Snow";
        t.abilImg = "img/snowball.png";
        break;
      case xa:
        t.abilName = "Loud Noise";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case ka:
        t.abilName = "Claw Slash";
        t.abilImg = "img/ability_claw.png";
        break;
      case fa:
        t.abilName = "Ink";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case da:
        t.abilName = "Shock";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case ha:
        t.abilName = "Hold to Dig";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ia:
        t.abilName = "Howl";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ua:
        t.abilName = "Throw Banana";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Ra:
        t.abilName = "Cause Wave";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Aa:
        t.abilName = "Extra Boost";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case ba:
        t.abilName = "Slide on ice";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case wa:
        t.abilName = "Inflate";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
        break;
      case Sa:
        t.abilName = "Fire";
        t.abilImg = "img/fire.png";
        break;
      case Wa:
        t.abilName = "Fire";
        t.abilImg = "img/fire.png";
        break;
      default:
        t.abilName = "Ability";
        t.abilImg = "skins/" + Ws(Ir).skinName + ".png";
    }
    return t;
  }
  function Ws(e) {
    var t = {};
    switch (e) {
      case tt:
        t.aniName = "Snail";
        t.aniDesc = "";
        t.upgradeText = "You're a super slow snail!";
        t.aniCol = "#fcc02b";
        t.skinName = "snail";
        break;
      case de:
        t.aniName = "Mouse";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#9BA9B9";
        t.skinName = "mouse";
        break;
      case ge:
        t.aniName = "Rabbit";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to RABBIT! \nPress W to burrow a hole to hide in!";
        t.aniCol = "#AA937E";
        t.skinName = "rabbit";
        break;
      case fe:
        t.aniName = "Pig";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to PIG!\n Pigs move FAST through MUD!";
        t.aniCol = "#DD6BD4";
        t.skinName = "pig";
        break;
      case ue:
        t.aniName = "Fox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to FOX! ,\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
        t.aniCol = "#FF9D43";
        t.skinName = "fox";
        break;
      case me:
        t.aniName = "Deer";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to DEER! \nPress W to dig up food! \nDig in mud for better food!\n Hint:Check water areas for new food sources!";
        t.aniCol = "#C4773E";
        t.skinName = "deer";
        break;
      case pe:
        t.aniName = "Mole";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to MOLE!\n Hold W to dig underground!\nGo under anything, do surprise attacks!";
        t.aniCol = "#4C4A45";
        t.skinName = "mole";
        break;
      case be:
        t.aniName = "Zebra";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to ZEBRA! \nPress W to dig up food! \nTip: Dig in mud for better food!";
        t.aniCol = "#FFFFFF";
        t.skinName = "zebra";
        break;
      case ye:
        t.aniName = "Lion";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to LION!\n Press W to release a mighty ROAR (Rawr!)!";
        t.aniCol = "#f8c923";
        t.skinName = "lion";
        break;
      case we:
        t.aniName = "Cheetah";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CHEETAH!\n Press W to get a speed boost! (Every 8 seconds)!";
        t.aniCol = "#CAC05B";
        t.skinName = "cheetah";
        break;
      case Pe:
        t.aniName = "Bear";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to BEAR!\n Bears climb through green hills! (Press W to use your claw!)";
        t.aniCol = "#99591C";
        t.skinName = "bear";
        break;
      case Ie:
        t.aniName = "Croc";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CROCODILE!\n Press W to bite and drag around animals! \n+ (Now hide in water spots)+ Swim well in Mud, Lakes & Oceans!";
        t.aniCol = "#30F51C";
        t.skinName = "croc";
        break;
      case ke:
        t.aniName = "Hippo";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to HIPPO!\nHippos are great swimmers, dominate the Lakes/Oceans/Mud!";
        t.aniCol = "#945A99";
        t.skinName = "hippo";
        break;
      case ve:
        t.aniName = "Rhino";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to RHINO!\n Press W to CHARGE with your mighty horn!";
        t.aniCol = "#94a3a9";
        t.skinName = "rhino";
        break;
      case Me:
        t.aniName = "Shrimp";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#f88e37";
        t.skinName = "shrimp";
        break;
      case Te:
        t.aniName = "Trout";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to TROUT!\nHint: Hold Left-click to RUN! (Uses extra water)";
        t.aniCol = "#ac8686";
        t.skinName = "trout";
        break;
      case xe:
        t.aniName = "Crab";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CRAB!\n Crabs can survive on dry land!\n (On land, Press W to go into your shell!)";
        t.aniCol = "#bf2408";
        t.skinName = "crab";
        break;
      case Se:
        t.aniName = "Squid";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SQUID!\n Squids can use INK when injured (press W!) \n+ you can hide in plankton bushes!";
        t.aniCol = "#40dda4";
        t.skinName = "squid";
        break;
      case Ee:
        t.aniName = "Shark";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SHARK!\n A vicious predator of the oceans!";
        t.aniCol = "#999fc6";
        t.skinName = "shark";
        break;
      case Be:
        t.aniName = "Sea-horse";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SEA HORSE!\n An agile hunter!";
        t.aniCol = "#73BE2F";
        t.skinName = "seahorse";
        break;
      case Ue:
        t.aniName = "Jellyfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to JELLYFISH!\n A slowly-turning animal that can grow quite large!";
        t.aniCol = "#FDB9BA";
        t.skinName = "jellyfish";
        break;
      case _e:
        t.aniName = "Turtle";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to TURTLE!\n Lives well on land & water! (On land, Press W to go into your shell!)";
        t.aniCol = "#502E1A";
        t.skinName = "turtle";
        break;
      case De:
        t.aniName = "Stringray";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to STINGRAY!\n Use electic shock (Release W key!) to shock animals! \n(Takes time to recharge)";
        t.aniCol = "#164336";
        t.skinName = "stingray";
        break;
      case Ce:
        t.aniName = "The Kraken";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)";
        t.aniCol = "#64a034";
        t.skinName = "kraken";
        break;
      case Ne:
        t.aniName = "Pufferfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to PUFFERFISH!\n (Hold W to inflate- become spiky, and dangerous to touch!)";
        t.aniCol = "#6C5C2C";
        t.skinName = "pufferfish";
        break;
      case Oe:
        t.aniName = "Killer Whale";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Killer Whale! \nWhales blow out water when diving! (And sometimes other loot!)";
        t.aniCol = "#141414";
        t.skinName = "killerwhale";
        break;
      case Re:
        t.aniName = "Swordfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n (Press W to rush with your sharp nose!)";
        t.aniCol = "#689CD7";
        t.skinName = "swordfish";
        break;
      case We:
        t.aniName = "Gorilla";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Gorillas are very fast on hills/trees!\n Press W to throw bananas! (from trees)";
        t.aniCol = "#323232";
        t.skinName = "gorilla";
        break;
      case Fe:
        t.aniName = "Octopus";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Octopus!\nHold W to use your 'Disguise' ability!\n(Hint: wait for prey to bite you- they get stunned!)";
        t.aniCol = "#ff8340";
        t.skinName = "octopus";
        break;
      case Ae:
        t.aniName = "Dragon";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n (You're amazing!) \nFly over everything, Hold W to shoot fire!";
        t.aniCol = "#22FF8A";
        t.skinName = "dragon";
        break;
      case at:
        t.aniName = "Black Dragon";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Black dragons drink lava instead of water! Black dragons only heal on healing stones/lava!";
        t.aniCol = "black";
        t.skinName = "blackdragon";
        break;
      case Ze:
        t.aniName = "Arctic Fox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
        t.aniCol = "#CFCFCF";
        t.skinName = "arctic/arcticfox";
        break;
      case Le:
        t.aniName = "Arctic Hare";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n \nPress W to burrow a hole to hide in!";
        t.aniCol = "#D5D5D5";
        t.skinName = "arctic/arctichare";
        break;
      case ze:
        t.aniName = "The Yeti!";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n So it really exists... \n Hold W to turn into snow, release W to freeeeeze!";
        t.aniCol = "#839eb5";
        t.skinName = "arctic/yeti";
        break;
      case Ge:
        t.aniName = "Chipmunk";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#A77C30";
        t.skinName = "arctic/chipmunk";
        break;
      case je:
        t.aniName = "Muskox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to charge with your horns! \nPlus move decently on ice!";
        t.aniCol = "#231f18";
        t.skinName = "arctic/muskox";
        break;
      case Xe:
        t.aniName = "Penguin";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
        t.aniCol = "#FFFFFF";
        t.skinName = "arctic/penguin";
        break;
      case Ye:
        t.aniName = "Polar Bear";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Polar bears can climb hills! \n+ They're amazing swimmers!";
        t.aniCol = "#e4e4e4";
        t.skinName = "arctic/polarbear";
        break;
      case Ve:
        t.aniName = "Seal";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Seals can slide on ice (Hold W) + can climb hills (rocks too!)";
        t.aniCol = "#cfcfcf";
        t.skinName = "arctic/seal";
        break;
      case Je:
        t.aniName = "Snow leopard";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to get a speed boost! (Every 8 seconds)!";
        t.aniCol = "#cfcfcf";
        t.skinName = "arctic/snowleopard";
        break;
      case qe:
        t.aniName = "Walrus";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can slide on ice (Hold W) + can climb hills (rocks too!)";
        t.aniCol = "#633838";
        t.skinName = "arctic/walrus";
        break;
      case Ke:
        t.aniName = "Reindeer";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to dig up food! \n Your sharp hooves let you turn very well on ice!";
        t.aniCol = "#a68976";
        t.skinName = "arctic/reindeer";
        break;
      case He:
        t.aniName = "Wolf";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Wolf paws turn very well on ice!\n Press W to howl!";
        t.aniCol = "#6B6B6B";
        t.skinName = "arctic/wolf";
        break;
      case Qe:
        t.aniName = "Wolverine";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Let out a Powerful GROWL! (Knocks back prey!)";
        t.aniCol = "#843A0F";
        t.skinName = "arctic/wolverine";
        break;
      case $e:
        t.aniName = "Mammoth";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to roll snowballs with your trunk!\n The bigger the snowball gets, the longer the freeze!";
        t.aniCol = "#9d4717";
        t.skinName = "arctic/mammoth";
        break;
      case et:
        t.aniName = "Donkey";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Kick any animal behind you";
        t.aniCol = "#8c7c64";
        t.skinName = "donkey";
        break;
      case it:
        t.aniName = "Sabertooth Tiger";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Sabtertooth Tiger!\nSabertooth Tigers are great swimmers, dominate the Lakes/Oceans/Mud!";
        t.aniCol = "#945A99";
        t.skinName = "sabertoothtiger";
        break;
      case rt:
        t.aniName = "Elephant";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Use your long trunk to attack and eat food!";
        t.aniCol = "#945A99";
        t.skinName = "elephant";
        break;
      case st:
        t.aniName = "Blue Whale";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Blue Whale!\n Smash with your powerful tail!";
        t.aniCol = "#945A99";
        t.skinName = "bluewhale";
        break;
      default:
        t.aniName = "(Animal)";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED!";
    }
    return t;
  }
  function Fs(e, t) {
    crossHx = e;
    crossHy = t;
    crossL = 30;
    Ka.beginPath();
    Ka.moveTo(crossHx, crossHy - crossL / 2);
    Ka.lineTo(crossHx, crossHy + crossL / 2);
    Ka.stroke();
    Ka.moveTo(crossHx - crossL / 2, crossHy);
    Ka.lineTo(crossHx + crossL / 2, crossHy);
    Ka.stroke();
  }
  function Hs(e, t, a, i, r, s) {
    if (!nr) {
      Ka.save();
      var n = a - e;
      var l = i - t;
      var o = Pi / 2 / hi;
      var h = Ii / 2 / hi;
      e = Math.max(e, ci - o - r + 0);
      t = Math.max(t, camy - h - s + 0);
      a = Math.min(a, ci + o - r - 0);
      i = Math.min(i, camy + h - s - 0);
      Ka.strokeStyle = "black";
      Ka.globalAlpha = 0.055;
      a -= e;
      fillH = i - t;
      for (i = -0.5 + e + (n - e) % 30; i < e + a; i += 30) {
        Ka.beginPath();
        Ka.moveTo(i, t);
        Ka.lineTo(i, t + fillH);
        Ka.stroke();
      }
      for (dy = -0.5 + t + (l - t) % 30; dy < t + fillH; dy += 30) {
        Ka.beginPath();
        Ka.moveTo(e, dy);
        Ka.lineTo(e + a, dy);
        Ka.stroke();
      }
      Ka.restore();
    }
  }
  var Ls = 250;
  var zs = 250;
  function Gs(e) {
    Ls = vi / ki * zs;
    qa = document.createElement("canvas");
    qa.width = Ls;
    qa.height = zs;
    var t = qa.getContext("2d");
    t.globalAlpha = 0.35;
    t.fillStyle = "#000000";
    t.fillRect(0, 0, qa.width, qa.height);
    var a = Ls / 200;
    var i = zs / 200;
    var r = e.readUInt16();
    var s = e.readUInt16();
    var n = e.readUInt16();
    for (var l = 0; l < 2; l++) {
      t.fillStyle = te;
      t.globalAlpha = 0.5;
      var o = Ls / vi;
      if (l == 0) {
        t.fillRect(o * 0, n * o, r * o, ki * o);
      } else {
        t.fillRect((vi - r) * o, n * o, r * o, ki * o);
      }
    }
    t.fillStyle = "white";
    t.globalAlpha = 0.5;
    o = Ls / vi;
    t.fillRect((vi / 2 - s / 2) * o, o * 0, s * o, n * o);
    r = e.readUInt16();
    t.fillStyle = te;
    t.globalAlpha = 0.5;
    for (l = 0; l < r; l++) {
      var s = e.readUInt16() * (Ls / vi);
      var n = e.readUInt16() * (zs / ki);
      var o = e.readUInt16() * (Ls / vi);
      var h = e.readUInt16() * (zs / ki);
      t.globalAlpha = 0.5;
      t.fillRect(o - s / 2, h - n / 2, s, n);
    }
    l = e.readUInt8() * 5;
    r = e.readUInt16() * (Ls / vi);
    s = e.readUInt16() * (zs / ki);
    t.fillStyle = $;
    t.globalAlpha = 0.5;
    t.beginPath();
    t.arc(r, s, Math.max(1, Ls / vi * l), 0, Math.PI * 2);
    t.fill();
    r = e.readUInt16();
    t.fillStyle = Q;
    t.globalAlpha = 0.5;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, n, Math.max(1, Ls / vi * o), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = "#907A33";
    t.globalAlpha = 0.7;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, n, Math.max(1, Ls / vi * o), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = "#7BB7BB";
    t.globalAlpha = 0.85;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, n, Math.max(1, Ls / vi * o), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = J;
    t.globalAlpha = 1;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, n, Math.max(1, Ls / vi * o), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = "#A89937";
    t.globalAlpha = 0.6;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, n, Math.max(1, Ls / vi * o), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = ie;
    t.globalAlpha = 1;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, n, Math.max(2.5, Ls / vi * 40), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = se;
    t.globalAlpha = 1;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, n, Math.max(2.5, Ls / vi * 40), 0, Math.PI * 2);
      t.fill();
    }
    r = e.readUInt16();
    t.fillStyle = Q;
    t.globalAlpha = 1;
    for (l = 0; l < r; l++) {
      s = e.readUInt8() * a;
      n = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, n, Math.max(2.5, Ls / vi * 50), 0, Math.PI * 2);
      t.fill();
    }
  }
  function js(e, t, a) {
    Ja = null;
    if (e.length != 0) {
      Ja = document.createElement("canvas");
      t = Ja.getContext("2d");
      var i;
      i = 55 + e.length * 22;
      Ja.width = 220;
      Ja.height = i;
      t.globalAlpha = 0.35;
      t.fillStyle = "#000000";
      t.fillRect(0, 0, 200, i);
      t.globalAlpha = 1;
      t.fillStyle = "#FFFFFF";
      i = "Top Players";
      t.font = "27px Arial";
      if (!nr) {
        t.shadowOffsetX = 1;
        t.shadowOffsetY = 1;
      }
      t.shadowColor = "black";
      t.fillText(i, 95 - t.measureText(i).width / 2, 40);
      var r;
      t.textAlign = "left";
      t.font = "17px Arial";
      for (r = 0; r < e.length; ++r) {
        i = sr ? "" : e[r].name || "mope.io";
        if (a == e[r].rank) {
          t.fillStyle = "#FEED92";
          if (sr) {
            i = "you";
          }
        } else {
          t.fillStyle = "#FFFFFF";
        }
        i = e[r].rank + ". " + i + " (" + Gi(e[r].score) + (gameMode == Ga ? " kills" : "") + ")";
        t.fillText(i, 15, 65 + r * 22);
      }
    }
  }
  function Xs() {
    Ka.save();
    if (vr) {
      Er += (waterBarPerc_n - Er) * 0.1;
      xpPer += (Dr - xpPer) * 0.03;
      var e = os[Pr];
      if (e) {
        Ir = e.type;
      }
      var t = 1;
      var a = Er <= 25;
      if (a) {
        t = 0.7 + Math.sin(Math.PI * 2 / 1.2 * (Ns / 1000)) * 0.3;
      }
      var i = Math.min(450, Pi * 0.9) * di;
      var r = di * 30;
      var s = Pi / 2;
      var n = Ii - di * 60;
      Ka.globalAlpha = t * 0.35;
      Ka.fillStyle = "#000000";
      Ka.fillRect(s - i / 2, n - r / 2, i, r);
      Ka.globalAlpha = t;
      Ka.fillStyle = Ir == at ? $ : Sr ? "#8CCEF4" : Q;
      Ka.fillRect(s - i / 2, n - r / 2, Er / 100 * i, r);
      Ka.fillStyle = yi ? a ? ie : "orange" : a ? ie : "white";
      Ka.globalAlpha = t * 1;
      _r.setText(Sr ? a ? "LOW Air" : "Air" : e && e.type == at ? a ? "LOW Lava" : "Lava" : a ? "LOW Water" : "Water");
      _r.setFontSize(di * 22);
      _r.setColor(a ? ie : "white");
      _r.x = s;
      _r.y = n;
      Ka.globalAlpha *= a ? 1 : 0.5;
      _r.draw();
      Ka.globalAlpha = 0.35;
      Ka.fillStyle = "#000000";
      n = Ii - r / 2 - 5;
      i = Pi * 0.9;
      Ka.fillRect(s - i / 2, n - r / 2, i, r);
      Ka.globalAlpha = 1;
      Ka.fillStyle = "#F3C553";
      Ka.fillRect(s - i / 2, n - r / 2, xpPer / 100 * i, r);
      Ka.globalAlpha = 1;
      Br.setText("" + Gi(xp) + " xp  (" + Gi(ts) + " xp Next Animal)");
      Br.setFontSize(di * 22);
      Br.x = s;
      Br.y = n;
      Br.draw();
      for (e = 0; e < Wr.length; e++) {
        Wr[e].draw();
      }
      if ($a) {
        Qr += ((Xr ? 1 : 0) - Qr) * 0.1;
        if (Qr > 0.005 && vr) {
          Ka.globalAlpha = Qr * 0.3;
          Ka.beginPath();
          Ka.arc(Vr, Jr, Zr * Qa, 0, Math.PI * 2);
          Ka.fillStyle = "#000000";
          Ka.fill();
          Ka.globalAlpha = Qr * 0.5;
          Ka.beginPath();
          Ka.arc(qr, Kr, Zr * Qa * 0.57, 0, Math.PI * 2);
          Ka.fillStyle = "#000000";
          Ka.fill();
          e = es * 0.3;
          es -= e;
          $r += e;
          joystickDistF += (joystickDistF_n - joystickDistF) * 0.1;
          Ka.save();
          Ka.translate(Pi / 2, Ii / 2);
          Ka.rotate($r);
          Ka.globalAlpha = Qr * 0.5;
          Ka.beginPath();
          Ka.fillStyle = "#000000";
          e = Qa * 40;
          if (os[Pr]) {
            e = (9 + os[Pr].rad) * hi;
          }
          e *= 0.1 + joystickDistF * 0.9;
          t = Qa * 15;
          Ka.moveTo(e + Qa * 30 * (0.2 + joystickDistF * 0.8), 0);
          Ka.lineTo(e, t / 2);
          Ka.lineTo(e, -t / 2);
          Ka.closePath();
          Ka.fill();
          Ka.restore();
        }
      }
    }
    Ka.restore();
  }
  var Ys = "Ready to survive!";
  var Vs = "white";
  var Js = +new Date() + 0;
  var qs = [];
  var Ks = +new Date() + 0;
  var Zs = 0;
  var Qs = 100;
  var $s = 2;
  var en = false;
  var tn = false;
  var an = 0;
  var rn = [];
  var sn = false;
  var nn = 0;
  var ln = 0;
  function on(e, t) {
    Ys = e;
    Js = +new Date() + t;
  }
  function hn() {
    var e = (Js - Ns) / 1000 / 1;
    var e = e < 0 ? 0 : e > 1 ? 1 : e;
    if (e > 0) {
      Ka.save();
      Ka.globalAlpha = e;
      Ur.setText(Ys);
      Ur.setColor(Vs);
      Ur.setFontSize(di * 25);
      Ur.x = Pi / 2;
      Ur.y = Ii * 0.3;
      Ur.draw();
      Ka.restore();
    }
    e = Ks - Ns > 0 ? 1 : 0;
    Zs += (e - Zs) * 0.1;
    if (Zs > 0.01 && !nr) {
      if (qs.length > 0) {
        Ka.save();
        Ka.translate(Pi / 2, Ii * (0.7 + (1 - Zs) * 0.5));
        Ka.scale($s * di, $s * di);
        Ka.globalAlpha = Zs * 0.2;
        Ka.fillStyle = "black";
        var t = Qs + 15 / $s;
        var a = 40 + 10 / $s;
        Ka.fillRect(-t / 2, -a / 2, t, a);
        Ka.globalAlpha = Zs;
        for (e = 0; e < qs.length; e++) {
          var i = qs[e];
          i.draw();
        }
      }
      if (e = Ai("./img/instr_eatsymbol.png")) {
        i = a / e.height * Zs;
        Ka.drawImage(e, -t / 2 - e.width * i - 15, -a / 2, e.width * i, e.height * i);
      }
      if (en) {
        Ka.save();
        Ka.fillStyle = "#52EB59";
        Ka.font = di * 16 + "px Arial";
        Ka.lineWidth = 1;
        Ka.textAlign = "center";
        Ka.textBaseline = "middle";
        if (!nr) {
          Ka.shadowOffsetX = 1;
          Ka.shadowOffsetY = 1;
          Ka.shadowColor = "black";
        }
        Ka.fillText("HINT: Edible food is outlined LIGHT-GREEN!", 0, -45);
        Ka.restore();
      }
      Ka.restore();
    }
    e = tn ? 1 : 0;
    an += (e - an) * 0.1;
    if (an > 0.01) {
      if (rn.length > 0) {
        Ka.save();
        Ka.translate(0, Ii * -0.5 * (1 - an));
        var t = di * 170;
        var a = t + 20;
        var r = Pi / 2 - (Math.max(0, rn.length - 1) * (10 + t) + (a - t)) / 2;
        for (var e = 0; e < rn.length; e++) {
          i = rn[e];
          i.buttonScaleF = e == 0 ? a / t : 1;
          i.w = t;
          i.h = t;
          i.x = r;
          i.y = Ii * 0.25;
          r += i.w / 2 * i.buttonScaleF + t / 2 + 10;
        }
        Ka.globalAlpha = an;
        for (e = 0; e < rn.length; e++) {
          i = rn[e];
          i.draw();
        }
      }
      t = Math.max(0, ln - Ns) / 1000;
      a = 1;
      if (t != 0 && t < 8) {
        a = 0.7 + Math.sin(Math.PI * 2 / 1.2 * (Ns / 1000)) * 0.3;
      }
      Ka.save();
      Ka.globalAlpha = an * a;
      Ka.fillStyle = t != 0 && t < 8 ? "red" : "white";
      Ka.font = di * 25 + "px Arial";
      Ka.lineWidth = 1;
      Ka.textAlign = "center";
      Ka.textBaseline = "middle";
      if (!nr) {
        Ka.shadowOffsetX = 1;
        Ka.shadowOffsetY = 1;
        Ka.shadowColor = "black";
      }
      t = t > 0 ? " (auto in " + Math.trunc(t) + "s)" : "";
      Ka.fillText(sn ? "Choose which animal to spawn as:" : "Choose an upgrade:" + t, Pi / 2, rn[0].y - rn[0].w / 2 - 25);
      Ka.restore();
      Ka.restore();
    }
  }
  var cn = +new Date();
  function dn(t) {
    Ns = +new Date();
    window.requestAnimationFrame(dn);
    if (Ka.globalAlpha != 1) {
      Ka.setTransform(1, 0, 0, 1, 0, 0);
      Ka.globalAlpha = 1;
    }
    Ka.clearRect(0, 0, Pi, Ii);
    t = (Ns - ys) / 1000 / 0.2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    ci = t * (camx_n - camx_o) + camx_o;
    camy = t * (camy_n - camy_o) + camy_o;
    hi = (hi * 25 + camzoom_n) / 26;
    Dn();
    Ka.save();
    t = Pi / 2;
    var a = Ii / 2;
    Ka.translate(t * (1 - hi) + (t - ci) * hi, a * (1 - hi) + (a - camy) * hi);
    Ka.scale(hi, hi);
    Ka.save();
    if (Mr) {
      t = 10;
      t = 600;
      Ka.globalAlpha = 1;
      Ka.fillStyle = J;
      Ka.fillRect(0, 0 - t, vi, t);
      Ka.fillRect(0, ki, vi, t);
      Ka.fillRect(-t, -t, t, ki + t * 2);
      Ka.fillRect(vi, -t, t, ki + t * 2);
    } else {
      Hs(Un(0), Cn(0), Un(Pi), Cn(Ii), 0, 0);
    }
    Ka.restore();
    t = ls.slice();
    for (var a = [ct, mt, Kt], i = {}, r = 0; r < a.length; r++) {
      var s = new Ki();
      i[a[r]] = s;
      t.push(s);
    }
    for (d = t.length - 1; d >= 0; d--) {
      r = t[d];
      e = 0;
      for (; e < a.length; e++) {
        s = a[e];
        if (s == r.oType && !(r instanceof Ki)) {
          i[s].addBatchedObj(r);
          t.splice(d, 1);
          break;
        }
      }
    }
    hs = [];
    for (d = 0; d < t.length; d++) {
      t[d].updateZ();
    }
    t.sort(function (e, t) {
      if (e.z == t.z) {
        return e.id - t.id;
      } else {
        return e.z - t.z;
      }
    });
    for (d = 0; d < t.length; d++) {
      r = t[d];
      r.draw();
    }
    if (!sr) {
      for (d = 0; d < t.length; d++) {
        if (typeof t[d].chatLines != "undefined") {
          t[d].drawChat();
        }
      }
    }
    for (d = 0; d < hs.length; d++) {
      t = hs[d];
      if (os.hasOwnProperty(t.id)) {
        delete os[t.id];
      }
      t = ls.indexOf(t);
      if (t != -1) {
        ls.splice(t, 1);
      }
    }
    Ka.restore();
    if (vr && (Ja && Ja.width && Ka.drawImage(Ja, Qa * 10, Qa * 10, Ja.width * di, Ja.height * di), qa && qa.width && Ka.drawImage(qa, Pi - (Qa * 10 + qa.width * di), Qa * 10, Ls * di, zs * di), t = os[Pr])) {
      Ka.fillStyle = "white";
      Ka.beginPath();
      Ka.arc(Pi - (Qa * 10 + qa.width * di) + t.x * qa.width * di / vi, Qa * 10 + t.y * qa.height * di / ki, 3, 0, Math.PI * 2);
      Ka.fill();
    }
    hn();
    Xs();
    if (In > 370 && !vr) {
      if (nr) {
        dr += 1;
        if (Ns - fr > 1000) {
          fr = +new Date();
          Cr.setText(dr + " fps");
          dr = 0;
        }
        pr += 1;
      }
      Cr.setFontSize(di * 15);
      Cr.x = Pi - 5 - Cr.width / 2;
      Cr.y = Ii - 2 - Cr.height / 2;
      Cr.draw();
    }
  }
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(dn);
  } else {
    setInterval(draw, 1000 / 60);
  }
  var gn = 0;
  function fn(e) {
    if (Cs() && !vr) {
      playerName = nickInput.value.replace(/(<([^>]+)>)/gi, "").substring(0, 20);
      var t = 9 + Wi(playerName).length + 1;
      if (x != null && S != null) {
        t += Wi(S).length + 2;
      }
      mes = new $i(t);
      mes.writeUInt8(2);
      mes.writeString(playerName);
      mes.writeUInt16(Pi);
      mes.writeUInt16(Ii);
      mes.writeUInt8(T ? 1 : 0);
      mes.writeUInt8(e ? 1 : 0);
      if (T) {
        mes.writeString(S);
      }
      Us(mes);
      if (!e && window.localStorage) {
        try {
          window.localStorage.setItem("nick", playerName + "");
        } catch (e) {}
      }
    }
  }
  function un() {
    if (document.getElementById("partyLinkOpenBut")) {
      document.getElementById("partyLinkOpenBut").style.display = "block";
      document.getElementById("partyLinkClicked").style.display = "none";
    }
  }
  if (document.getElementById("partyLinkOpenBut")) {
    document.getElementById("partyLinkOpenBut").onclick = function () {
      if (Ar) {
        if (document.getElementById("partyLinkOpenBut")) {
          document.getElementById("partyLinkOpenBut").style.display = "none";
          document.getElementById("partyLinkClicked").style.display = "block";
        }
        newMsg = new $i(1);
        newMsg.writeUInt8(22);
        Us(newMsg);
      }
    };
  }
  function mn(e) {
    var t = document.getElementById("partyLinkTxt");
    t.value = e;
    t.setSelectionRange(0, t.value.length);
    t.focus();
    t.setSelectionRange(0, t.value.length);
  }
  if (document.getElementById("partyLinkCopyBut")) {
    document.getElementById("partyLinkCopyBut").onclick = function () {
      var e = document.getElementById("partyLinkTxt");
      e.focus();
      e.setSelectionRange(0, e.value.length);
      try {
        document.execCommand("copy");
        partyLinkCopyBut.text = "Copied!";
        setTimeout(function () {
          partyLinkCopyBut.text = "Copy";
        }, 1000);
      } catch (e) {}
    };
  }
  document.getElementById("startButton").onclick = function () {
    On();
    var e = ei("audio/click.mp3");
    if (e) {
      try {
        e.play();
      } catch (e) {}
    }
    if (!Jn && Ar) {
      if (qn()) {
        $n();
      } else {
        fn(false);
      }
    }
  };
  var pn = document.getElementById("button_GMsandbox");
  if (pn) {
    pn.onclick = function () {
      oi(Ga);
    };
  }
  if (pn = document.getElementById("button_GMnormal")) {
    pn.onclick = function () {
      oi(za);
    };
  }
  if (pn = document.getElementById("button_mute")) {
    pn.onclick = function () {
      hr = !hr;
      ni();
      try {
        window.localStorage.setItem("options_musicMuted", hr ? 1 : 0);
      } catch (e) {}
    };
  }
  document.getElementById("settingsButton").onclick = function () {
    var e = document.getElementById("optionsDiv");
    e.style.display = e.style.display == "block" ? "none" : "block";
    if (e = ei("audio/click.mp3")) {
      try {
        e.play();
      } catch (e) {}
    }
  };
  document.getElementById("closeBut").onclick = function () {
    var e = document.getElementById("optionsDiv");
    e.style.display = e.style.display == "block" ? "none" : "block";
    if (e = ei("audio/click.mp3")) {
      try {
        e.play();
      } catch (e) {}
    }
  };
  document.getElementById("options_noImages").onchange = function () {
    if (window.localStorage) {
      rr = document.getElementById("options_noImages").checked;
      try {
        window.localStorage.setItem("options_noImages", rr ? 1 : 0);
      } catch (e) {}
      console.log("options_noimages: saved as " + window.localStorage.getItem("options_noImages"));
    }
  };
  document.getElementById("options_noNames").onchange = function () {
    if (window.localStorage) {
      sr = document.getElementById("options_noNames").checked;
      try {
        window.localStorage.setItem("options_noNames", sr ? 1 : 0);
      } catch (e) {}
      console.log("options_noNames: saved as " + window.localStorage.getItem("options_noNames"));
    }
  };
  document.getElementById("options_lowGraphics").onchange = function () {
    if (window.localStorage) {
      nr = document.getElementById("options_lowGraphics").checked;
      try {
        window.localStorage.setItem("options_lowGraphics", nr ? 1 : 0);
      } catch (e) {}
      kn();
      console.log("options_lowGraphics: saved as " + window.localStorage.getItem("options_lowGraphics"));
    }
  };
  document.getElementById("options_noJoystick").onchange = function () {
    if (window.localStorage) {
      lr = document.getElementById("options_noJoystick").checked;
      try {
        window.localStorage.setItem("options_noJoystick", lr ? 1 : 0);
      } catch (e) {}
      kn();
      console.log("options_noJoystick: saved as " + window.localStorage.getItem("options_noJoystick"));
    }
  };
  var bn = document.getElementById("options_leftHanded");
  if (bn) {
    bn.onchange = function () {
      if (window.localStorage) {
        or = bn.checked;
        try {
          window.localStorage.setItem("options_leftHanded", or ? 1 : 0);
        } catch (e) {}
        kn();
        console.log("options_leftHanded: saved as " + window.localStorage.getItem("options_leftHanded"));
      }
    };
  }
  var yn = false;
  var wn = false;
  document.onkeydown = function (e) {
    On();
    var t = e.keyCode || e.which;
    if (!yn && vr) {
      switch (t) {
        case 32:
          e.preventDefault();
          En(An, true);
          break;
        case 87:
          e.preventDefault();
          En(Mn, true);
          break;
        case 83:
          e.preventDefault();
          En(Sn, true);
          break;
        case 27:
          if (i) {
            e.preventDefault();
            wn = !wn;
            on("Movement Lock (ESC KEY): " + (wn ? "ON" : "OFF"), 2500);
          }
      }
    }
  };
  document.onkeyup = function (e) {
    var t = e.keyCode || e.which;
    if (t == 13) {
      if (!vr && !tn) {
        document.getElementById("startButton").click();
        return;
      }
      if (tn) {
        Xi(rn[0]);
        return;
      }
    }
    if (vr) {
      t = e.keyCode || e.which;
      if (t == 13) {
        Pn();
      } else if (!yn && vr) {
        switch (t) {
          case 32:
            e.preventDefault();
            En(An, false);
            break;
          case 87:
            e.preventDefault();
            En(Mn, false);
            break;
          case 38:
            e.preventDefault();
            En(Tn, false);
            break;
          case 40:
            e.preventDefault();
            En(xn, false);
        }
      }
    }
  };
  function Pn() {
    var e = document.getElementById("chatinput");
    if (!yn && vr) {
      e.style.visibility = "visible";
      e.focus();
      yn = true;
      e.onblur = function () {
        if (yn) {
          Pn();
        }
      };
    } else if (yn) {
      var t = e.value + "";
      yn = false;
      e.style.visibility = "hidden";
      e.blur();
      if (t.length > 0 && vr) {
        newMsg = new $i(3 + Wi(t).length);
        newMsg.writeUInt8(19);
        newMsg.writeString(t);
        Us(newMsg);
      }
      e.value = "";
    }
  }
  window.onresize = kn;
  var In = 100;
  var vn = 100;
  function kn() {
    In = window.innerWidth;
    vn = window.innerHeight;
    Qa = window.devicePixelRatio;
    Pi = In * Qa;
    Ii = vn * Qa;
    Va.width = Pi;
    Va.height = Ii;
    Va.style.width = In + "px";
    Va.style.height = vn + "px";
    document.getElementById("chatinput").style.marginTop = vn / 2 - 50 + "px";
    Lr.w = Lr.h = Qa * 95;
    Fr.w = Fr.h = Qa * 95;
    Hr.w = Hr.h = Qa * 95;
    zr.w = Qa * 60;
    zr.h = Qa * 30;
    Lr.x = Qa * 25 + Lr.w / 2;
    Lr.y = Ii - (Qa * 40 + Lr.w / 2);
    if (or) {
      Lr.x = Pi - Lr.x;
    }
    Fr.x = Lr.x;
    Fr.y = $a ? Lr.y - (Qa * 10 + Fr.w / 2 + Lr.w / 2) : Lr.y;
    Hr.x = Lr.x;
    Hr.y = Fr.y - (Qa * 10 + Hr.w / 2 + Fr.w / 2);
    zr.x = Qa * 72.5 + Qa * 125;
    zr.y = Qa * 15 + zr.h / 2;
    Gr.setPosAndSize(zr.x - (zr.w / 2 + Qa * 10), zr.y, Qa * 60, Qa * 30, 1, 0.5);
    jr.setPosAndSize(Gr.x, Gr.y + Gr.h / 2 + Qa * 10, Qa * 60, Qa * 30, 0.5, 0);
    for (var e = 0; e < Wr.length; e++) {
      Wr[e].visible = $a;
    }
    Fr.visible = true;
    Hr.visible = true;
    Gr.visible = Gr.touchEnabled = $a;
    jr.visible = jr.touchEnabled = $a && i;
    di = Math.max(Pi / 1344, Ii / 756);
    di = Math.min(1, Math.max(0.4, di * Qa));
    if (Math.min(In, vn) < 500) {
      di = Qa / 2 * 0.9;
    }
    if (Cs()) {
      mes = new $i(5);
      mes.writeUInt8(17);
      mes.writeUInt16(Pi);
      mes.writeUInt16(Ii);
      Us(mes);
    }
  }
  var An = 1;
  var Mn = 2;
  var Tn = 3;
  var xn = 4;
  var Sn = 5;
  function En(e, t) {
    switch (e) {
      case An:
        if (yi != t && Cs() && vr) {
          if (t) {
            Nn();
          }
          mes = new $i(2);
          mes.writeUInt8(21);
          mes.writeUInt8(t ? 1 : 0);
          Us(mes);
        }
        yi = t;
        break;
      case Mn:
        if (wi != t && Cs() && vr) {
          if (t) {
            Nn();
          }
          mes = new $i(2);
          mes.writeUInt8(20);
          mes.writeUInt8(t ? 1 : 0);
          Us(mes);
        }
        wi = t;
        break;
      case Tn:
        if (i && vr) {
          mes = new $i(1);
          mes.writeUInt8(26);
          Us(mes);
        }
        break;
      case xn:
        if (i && vr) {
          mes = new $i(1);
          mes.writeUInt8(27);
          Us(mes);
        }
        break;
      case Sn:
        if (vr) {
          mes = new $i(1);
          mes.writeUInt8(28);
          Us(mes);
        }
    }
  }
  Va.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });
  Va.ontouchstart = function (e) {
    On();
    if (vr) {
      for (var t = 0; t < e.changedTouches.length; t++) {
        var a = e.changedTouches[t];
        for (var i = 0; i < Wr.length; i++) {
          var r = Wr[i];
          if (r.testPosHitsButton(a.clientX * Qa, a.clientY * Qa) && !r.pressed && r.touchEnabled) {
            e.preventDefault();
            r.pressed = true;
            r.pressedTouchID = a.identifier;
            r.onButtonTouchStart();
            return;
          }
        }
      }
      if (lr || Xr) {
        gi = e.touches[0].clientX * Qa;
        fi = e.touches[0].clientY * Qa;
        Dn();
      } else {
        a = e.changedTouches[0];
        Xr = true;
        Vr = a.clientX * Qa;
        Jr = a.clientY * Qa;
        qr = Vr;
        Kr = Jr;
        Yr = a.identifier;
      }
    }
  };
  Va.ontouchmove = function (e) {
    On();
    e.preventDefault();
    for (var t = 0; t < e.changedTouches.length; t++) {
      var a = e.changedTouches[t];
      if (a.identifier == Fr.pressedTouchID) {
        if (Lr.pressedTouchID == -1) {
          var i = Lr.testPosHitsButton(a.clientX * Qa, a.clientY * Qa);
          var a = Lr.pressed;
          if ((Lr.pressed = i) && !a) {
            En(An, true);
          } else if (!i && a) {
            En(An, false);
          }
        }
      } else if (lr) {
        gi = a.clientX * Qa;
        fi = a.clientY * Qa;
        Dn();
      } else if (Xr && a.identifier == Yr) {
        var i = a.clientX * Qa - Vr;
        var a = a.clientY * Qa - Jr;
        var r = Math.sqrt(i * i + a * a);
        if (r > 0) {
          var i = i / r;
          var a = a / r;
          var r = Math.min(1, r / (Zr * Qa));
          var s = Math.pow(r, 3);
          if (s < 0.1) {
            s = 0;
          }
          s *= Qa * 300;
          es = Oi($r, Math.atan2(a, i));
          joystickDistF_n = r;
          qr = Vr + Zr * Qa * i * r;
          Kr = Jr + Zr * Qa * a * r;
          gi = Pi / 2 + i * s;
          fi = Ii / 2 + a * s;
          Dn();
        }
      }
    }
  };
  Va.ontouchend = function (e) {
    if ($a && vr) {
      for (var t = 0; t < e.changedTouches.length; t++) {
        var a = e.changedTouches[t];
        if (Xr && a.identifier == Yr) {
          Xr = false;
          Yr = -1;
        } else {
          for (var i = 0; i < Wr.length; i++) {
            var r = Wr[i];
            if (r.pressed && r.pressedTouchID == a.identifier && r.touchEnabled) {
              r.pressed = false;
              r.pressedTouchID = -1;
              r.onButtonTouchEnd();
              return;
            }
          }
        }
      }
    }
  };
  Va.ontouchcancel = function (e) {
    console.log("touch cancel");
    Va.ontouchend(e);
  };
  Va.ontouchleave = function (e) {
    console.log("touch leave");
  };
  Va.onmousemove = function (e) {
    gi = e.clientX * Qa;
    fi = e.clientY * Qa;
    Dn();
    if (!xr) {
      On();
    }
    if (tn && Ns - nn > 650) {
      for (var t = 0; t < rn.length; t++) {
        var a = rn[t];
        a.isHighLighted = a.testPosHitsButton(gi, fi);
      }
    }
    e.preventDefault();
  };
  Va.onmousedown = function (e) {
    On();
    if (e.which == 1) {
      En(An, true);
    }
    if (e.which == 3) {
      En(Mn, true);
    }
    e.preventDefault();
  };
  Va.onmouseup = function (e) {
    if (e.which == 1 && (En(An, false), tn && Ns - nn > 650)) {
      gi = e.clientX * Qa;
      fi = e.clientY * Qa;
      for (var t = 0; t < rn.length; t++) {
        var a = rn[t];
        if (a.testPosHitsButton(gi, fi)) {
          Xi(a);
          break;
        }
      }
    }
    if (e.which == 3) {
      En(Mn, false);
    }
    e.preventDefault();
  };
  Va.onblur = function (e) {
    En(An, false);
    En(Mn, false);
  };
  window.onfocus = function (e) {
    On();
  };
  window.onmouseout = function (e) {
    if (e.toElement == null && e.relatedTarget == null) {
      En(An, false);
      En(Mn, false);
    }
  };
  document.oncontextmenu = document.body.oncontextmenu = function () {
    return !vr;
  };
  function Dn() {
    var e = Pi / 2;
    var t = Ii / 2;
    pi = ui;
    bi = mi;
    ui = (gi - (e - ci * hi)) / hi;
    mi = (fi - (t - camy * hi)) / hi;
  }
  function _n(e) {
    return e * hi + (Pi / 2 - ci * hi);
  }
  function Bn(e) {
    return e * hi + (Ii / 2 - camy * hi);
  }
  function Un(e) {
    return (e - (Pi / 2 - ci * hi)) / hi;
  }
  function Cn(e) {
    return (e - (Ii / 2 - camy * hi)) / hi;
  }
  function Nn() {
    if (wn) {
      var e = os[Pr];
      if (e) {
        ui = e.x;
        mi = e.y + 2;
      } else {
        return;
      }
    }
    if (Cs() && vr && (Math.abs(pi - ui) > 0.1 || Math.abs(bi - mi) > 0.1)) {
      mes = new $i(6);
      mes.writeUInt8(5);
      mes.writeInt16(ui);
      mes.writeInt16(mi);
      Us(mes);
    }
  }
  setInterval(Nn, 20);
  function On() {
    Tr = +new Date();
    if (xr) {
      xr = false;
      if (!w) {
        window.onbeforeunload = null;
      }
      document.getElementById("connecting").style.visibility = "visible";
      window.location.reload();
    }
  }
  setInterval(function () {
    if (+new Date() - Tr > (vr ? 2400 : 10) * 60000 && !xr && Ar) {
      console.log("Disconnected for afk...");
      xr = true;
      if (Cs()) {
        ws.close();
      }
    }
  }, 5000);
  function Rn() {
    kn();
    os = {};
    ls = [];
    hs = [];
    Dr = xpPer = xp = waterBarPerc_n = Er = 0;
    Ja = null;
    if (!T) {
      Rr = "";
      var e = document.getElementById("spawnXpLabel");
      e.style.display = Rr ? "block" : "none";
      e.textContent = Rr;
    }
    for (e = 0; e < Wr.length; e++) {
      Wr[e].pressed = false;
    }
    tn = Xr = false;
    an = 0;
    rn = [];
    sn = false;
  }
  window.onload = function () {
    kn();
    if (window.localStorage) {
      var e = document.getElementById("nickInput");
      e.value = window.localStorage.getItem("nick");
      e.setSelectionRange(0, e.value.length);
      if (!$a) {
        e.focus();
      }
    }
  };
  var Wn;
  function Fn(e) {
    if (window.WebViewJavascriptBridge) {
      return e(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(e);
    }
    window.WVJBCallbacks = [e];
    var t = document.createElement("iframe");
    t.style.display = "none";
    t.src = "wvjbscheme://__BRIDGE_LOADED__";
    document.documentElement.appendChild(t);
    setTimeout(function () {
      document.documentElement.removeChild(t);
    }, 0);
  }
  if (b) {
    Fn(function (e) {
      Wn = e;
      e.registerHandler("testJavascriptHandler", function (e, t) {
        console.log("ObjC called testJavascriptHandler with", e);
        t({
          "Javascript Says": "Right back atcha!"
        });
      });
    });
  }
  function Hn() {
    if (Wn && b) {
      Wn.callHandler("adShowCallBack", {
        foo: "bar"
      }, function (e) {
        console.log("JS got response " + e);
      });
    }
  }
  function Ln() {
    console.log("Showing ad android...");
    window.location = "myscheme://showAdmob";
  }
  var zn = 0;
  var Gn = 0;
  if (window.localStorage) {
    var jn = window.localStorage.getItem("lastAdShowT") * 1 || 0;
    var Xn = +new Date() - jn;
    var Gn = Xn > 0 ? jn : 0;
    var zn = window.localStorage.getItem("gamesSinceAd") * 1;
  }
  var Yn = 0;
  var Vn = +new Date();
  var Jn = false;
  function qn() {
    if (Zn()) {
      if (I) {
        console.log("videoAd: test mode, always show video ad!");
        return true;
      } else if (Yn < 1 && Gn == 0) {
        console.log("videoAd: no show: NEW PLAYER, no games yet started!");
        return false;
      } else if ((+new Date() - Gn) / 1000 > 300 && zn > 0) {
        console.log("videoAd: show: time limit passed!");
        return true;
      } else if (zn >= 3) {
        console.log("videoAd: show: 3+ games passed!");
        return true;
      } else {
        return false;
      }
    } else {
      console.log("videoAd: no show: ads disabled");
      return false;
    }
  }
  var Kn = false;
  function Zn() {
    var e = P && !w && !i;
    if (Kn) {
      return e && typeof adplayer != "undefined";
    } else {
      return e;
    }
  }
  function Qn() {
    if (Kn) {
      tl("//api.adinplay.com/player/v2/MOP/mope.io/player.min.js", function () {
        if (typeof aipPlayer != "undefined") {
          console.log("Loading video preroll...");
          adplayer = new aipPlayer({
            AD_WIDTH: 960,
            AD_HEIGHT: 540,
            AD_FULLSCREEN: false,
            PREROLL_ELEM: document.getElementById("preroll"),
            AIP_COMPLETE: function () {
              console.log("Video ad finished.");
              el(true);
            }
          });
        } else {
          console.log("Video ad (blocked) -finished.");
          el(false);
        }
      });
    }
  }
  function $n() {
    if (ti) {
      ti.volume = 0.2;
    }
    Jn = true;
    document.getElementById("startMenuWrapper").style.display = "none";
    if (Kn) {
      adplayer.startPreRoll();
    } else {
      document.getElementById("pvVidContainer").style.display = "block";
      nl();
    }
  }
  function el(e) {
    if (Jn) {
      Jn = false;
      if (!Kn) {
        document.getElementById("pvVidContainer").style.display = "none";
        document.getElementById("my-content-2").style.display = "none";
      }
      if (e && (zn = 0, Gn = +new Date(), window.localStorage)) {
        try {
          window.localStorage.setItem("lastAdShowT", Gn);
          window.localStorage.setItem("gamesSinceAd", zn);
        } catch (e) {}
      }
      if (ti) {
        ti.volume = 0.7;
      }
      var t = ei("audio/click.mp3");
      if (t) {
        try {
          t.play();
        } catch (e) {}
      }
      console.log("Video done (success: " + e + "), joining game!");
      fn(false);
    } else {
      console.log("ad isn't playing!");
    }
  }
  function tl(e, t) {
    var a = document.head || document.getElementsByTagName("head")[0];
    var i = document.createElement("script");
    var r = true;
    i.async = "async";
    i.type = "text/javascript";
    i.charset = "UTF-8";
    i.src = e;
    i.onload = i.onreadystatechange = function () {
      if (!!r && (!i.readyState || !!/loaded|complete/.test(i.readyState))) {
        r = false;
        t();
        i.onload = i.onreadystatechange = null;
      }
    };
    a.appendChild(i);
  }
  if (P && !w) {
    Qn();
  }
  var al = false;
  var il = null;
  var rl = "player-2";
  var sl = true;
  function nl(e) {
    adSuccess = false;
    e = document.getElementById("pvVidContainer");
    il = setTimeout(function () {
      console.log("Error: ad failed to start playing!");
      el(true);
    }, 10000);
    try {
      script = document.createElement("script");
      script.src = "http://cdn.playwire.com/bolt/js/zeus/embed.js";
      script.type = "text/javascript";
      script.id = "script";
      script.setAttribute("charset", "utf-8");
      script.setAttribute("data-config", "http://config.playwire.com/1018393/v2/pre_content.json");
      script.setAttribute("data-width", "100%");
      script.setAttribute("data-height", "100%");
      script.setAttribute("data-id", rl);
      script.setAttribute("data-onready", "onBoltLoaded");
      script.setAttribute("data-post-ad-container", "my-content-2");
      script.setAttribute("data-theme", "http://cdn.playwire.com/bolt/js/zeus/themes/orion/main.js");
      e.appendChild(script);
      console.log("loading player...");
    } catch (e) {
      console.log("Error: " + e);
    }
  }
  this.onBoltLoaded = function (e) {
    console.log("onBoltLoaded: playerName '" + e + "'");
    clearTimeout(il);
    Bolt.on(e, "showHiddenContainer", function () {
      console.log("******BOLT showHiddenContainer***** fired");
      el(al);
    });
    Bolt.on(e, Bolt.BOLT_AD_STARTED, function () {
      console.log("AD STARTED: SUCCESS");
      al = true;
    });
    Bolt.on(e, Bolt.BOLT_AD_ERROR, function () {
      console.log("AD ERROR EVENT FIRED");
      el(al);
    });
  };
  function ll(e, t, a) {
    return {
      x: e.x + t * Math.cos(a),
      y: e.y + t * Math.sin(a)
    };
  }
  function ol(e, t, a, i, r) {
    Ka.save();
    Ka.globalAlpha = r;
    Ka.beginPath();
    Ka.translate(e, t);
    Ka.rotate(a);
    Ka.moveTo(-5, -5);
    Ka.lineTo(-5, 5);
    Ka.lineTo(5, 5);
    Ka.lineWidth = 1.5;
    Ka.strokeStyle = i;
    Ka.fillStyle = i;
    Ka.stroke();
    Ka.restore();
  }
  function hl() {
    var e = os[Pr];
    if (e) {
      for (d = 0; d < ls.length; d++) {
        var t = ls[d];
        if (e.id != t.id && t.oType === ht) {
          var a = t.getOutlineColor();
          var i = false;
          if (a == le || a == oe) {
            i = true;
          }
          if (i) {
            dl(e, t, a);
          }
        }
      }
    }
  }
  function cl(e, t) {
    var a = e.x - t.x;
    var i = e.y - t.y;
    return Math.sqrt(a * a + i * i);
  }
  function dl(e, t, a) {
    var i = Ui(t.x, t.y, e.x, e.y);
    _n(t.x);
    Bn(t.y);
    e = ll({
      x: e.x,
      y: e.y
    }, -50 - e.rad, i);
    t = cl({
      x: e.x,
      y: e.y
    }, {
      x: t.x,
      y: t.y
    });
    if (!(t > 1000) && !(t < 100)) {
      i += Bi(45);
      ol(e.x, e.y, i, a, 1);
    }
  }
})();