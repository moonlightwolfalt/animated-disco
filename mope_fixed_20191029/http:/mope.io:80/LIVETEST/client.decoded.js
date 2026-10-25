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
  t.polyfill = function (e, a, i, n) {
    if (a) {
      i = t.global;
      e = e.split(".");
      for (n = 0; n < e.length - 1; n++) {
        var s = e[n];
        if (!(s in i)) {
          i[s] = {};
        }
        i = i[s];
      }
      e = e[e.length - 1];
      n = i[e];
      a = a(n);
      if (a != n && a != null) {
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
  var a = 190;
  var i = true;
  var n = "master1.mope.io";
  var s = 400;
  var r = 500;
  var l = [];
  for (var o = "USA-East USA-West Brazil Europe Russia Asia/Australia".split(" "), h = {}, c = 0; c < o.length; c++) {
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
    var u = "USA-East";
    g("TESTSERVER", "testserver.mope.io", u);
  } else {
    console.log("------------MOPE.IO-------------");
    u = "USA-East";
    g("USA 1 (New York)", "104.207.132.63", u);
    g("USA 2 (New York)", "107.191.40.35", u);
    g("USA 3 (New York)", "107.191.43.180", u);
    g("USA 4 (New York)", "45.63.17.44", u);
    g("USA 5 (New York)", "107.191.40.38", u);
    g("USA 6 (Miami)", "104.238.138.249", u);
    g("USA 7(Chicago)", "45.76.20.213", u);
    g("USA 8(Chicago)", "45.76.28.156", u);
    g("USA 9 (New York)", "45.63.12.8", u);
    g("USA 10 (New York)", "107.191.42.212", u);
    g("USA 11 (New York)", "45.76.2.62", u);
    g("USA 12 (New York)", "104.238.129.16", u);
    u = "USA-West";
    g("USA 13 (California)", "45.63.87.103", u);
    g("USA 14 (California)", "45.32.137.149", u);
    g("USA 14 (California)", "45.76.67.64", u);
    g("USA 15 (California)", "45.63.51.60", u);
    g("USA 16 (Seattle)", "45.32.228.141", u);
    g("USA 17 (Seattle)", "104.207.158.226", u);
    u = "Brazil";
    g("Brazil 1 (Sao Paulo)", "177.54.158.172", u);
    g("Brazil 4 (Texas)", "108.61.224.165", u);
    g("Brazil 5 (Texas)", "107.191.55.233", u);
    g("Brazil 6 (Texas)", "45.32.198.173", u);
    g("Brazil 7 (Texas)", "104.238.147.152", u);
    g("Brazil 8 (Texas)", "108.61.205.88", u);
    u = "Europe";
    g("Europe 1 (London)", "45.63.98.41", u);
    g("Europe 2 (London)", "104.238.170.8", u);
    g("Europe 3 (London)", "45.76.129.33", u);
    g("Europe 4 (London)", "45.76.134.74", u);
    g("Europe 5 (London)", "45.76.135.33", u);
    g("Europe 6 (London)", "45.76.129.125", u);
    g("Europe 7 (Germany)", "45.32.152.68", u);
    g("Europe 8 (Paris)", "45.32.144.28", u);
    g("Europe 9 (Amsterdam)", "185.92.221.137", u);
    g("Europe 10 (Germany)", "45.32.156.214", u);
    g("Europe 11 (Germany)", "45.32.154.83", u);
    g("Europe 12 (Germany)", "45.63.117.122", u);
    u = "Russia";
    g("Russia 1 (Moscow)", "158.255.6.206", u);
    g("Russia 3 (Germany)", "104.238.159.143", u);
    g("Russia 4 (Germany)", "45.32.157.75", u);
    g("Russia 5 (Germany)", "45.32.158.92", u);
    g("Russia 6 (Germany)", "104.207.131.166", u);
    g("Russia 7 (Germany)", "45.76.84.33", u);
    g("Russia 8 (Germany)", "45.76.83.50", u);
    g("Russia 9 (Germany)", "108.61.210.144", u);
    g("Russia 10 (Germany)", "108.61.178.139", u);
    g("Russia 11 (Germany)", "45.76.81.168", u);
    g("Russia 12 (Germany)", "45.32.156.39", u);
    u = "Asia/Australia";
    g("Asia 1(Singapore)", "45.32.101.8", u);
    g("Asia 2(Singapore)", "45.32.116.91", u);
    g("Asia 3 (Tokyo)", "45.32.28.177", u);
    g("Asia 4 (Australia)", "45.63.28.66", u);
    g("Asia 5 (Australia)", "45.76.112.176", u);
  }
  var f = 2;
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
  var M = p.s;
  var T = p.l;
  var x = location.hostname.split(".");
  var S = x.shift();
  var E = S == "miniclipref";
  if (E) {
    var D = document.getElementById("appsDiv");
    if (D) {
      D.style.display = "none";
    }
  }
  if (M != null && T != null && T.length > 5) {
    A = true;
  }
  if (!w) {
    (function (e, t, a, i, n, s, r) {
      e.GoogleAnalyticsObject = n;
      e[n] = e[n] || function () {
        (e[n].q = e[n].q || []).push(arguments);
      };
      e[n].l = new Date() * 1;
      s = t.createElement(a);
      r = t.getElementsByTagName(a)[0];
      s.async = 1;
      s.src = i;
      r.parentNode.insertBefore(s, r);
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
    if (E) {
      console.log("Referral: Tracking Miniclip-referred player!");
    }
    ga("create", "UA-36494583-11", "auto");
    if (E) {
      ga("create", "UA-36494583-12", "auto", "miniclipRef");
    }
    ga("send", "pageview");
    if (E) {
      ga("miniclipRef.send", "pageview");
    }
  }
  function _(e) {
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
      var e = new Si(1);
      e.writeUInt8(255);
      t.testWs.send(e.dataView.buffer);
      this.startT = +new Date();
    };
    this.testWs.onmessage = function (e) {
      e = new xi(new DataView(e.data));
      if (e.readUInt8() == 255) {
        e = +new Date() - t.startT;
        t.pingsRec += 1;
        t.pingsDelayMsTot += e;
        if (t.pingsRec >= 3) {
          t.serverObj.ping = t.pingsDelayMsTot / t.pingsRec;
          t.testWs.close();
          L(t);
        } else {
          t.sendPing();
        }
      }
    };
  }
  var U = i ? o[0] : o[ti(0, Math.max(0, o.length - 1 - 1))];
  var C = 0;
  var B = h[U][C];
  var U = B.region;
  var N = B;
  var R = [];
  var O = false;
  var W = false;
  var F;
  function H() {
    if (W) {
      z();
    } else if (!O) {
      O = true;
      for (var e in h) {
        if (h.hasOwnProperty(e) && h[e].length > 0 && e != "SANDBOX") {
          R.push(new _(h[e][0]));
        }
      }
      F = setTimeout(function () {
        for (var e = 0; e < R.length; e++) {
          R[e].testWs.close();
        }
        z();
      }, 3000);
    }
  }
  function L(e) {
    if (e.serverObj.ping < N.ping) {
      N = e.serverObj;
    }
    e = R.indexOf(e);
    if (e != -1) {
      R.splice(e, 1);
    }
    if (R.length == 0) {
      if (F) {
        clearTimeout(F);
      }
      z();
    }
  }
  function z() {
    if (O) {
      W = true;
    }
    O = false;
    console.log("@@@@  Fastest region is " + N.region + " with ping " + N.ping + "ms ");
    U = N.region;
    G();
  }
  function G() {
    var e = h[U].slice();
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
      if (e[i].playersCount < r && e[i].playersCount >= 0) {
        a = false;
      }
      if (e[i].playersCount < s && e[i].playersCount >= 0) {
        B = e[i];
        C = h[U].indexOf(B);
        t = true;
        break;
      }
    }
    if (!t) {
      if (a && Zn) {
        console.log("All servers in region " + U + " are full/offline! Picking random server...");
        a = true;
        i = 0;
        for (; i < l.length; i++) {
          if (l[i].playersCount < r) {
            B = l[i];
            C = h[B.region].indexOf(B);
            U = B.region;
            break;
          }
        }
      } else {
        B = e[ti(0, e.length - 1)];
        C = e.indexOf(B);
      }
    }
    rs();
    ss();
    ns();
    console.log("Connecting to best server...");
    if (hs()) {
      Jn.close();
    }
    _i();
  }
  var j = 0.175;
  var X = "#3FBA54";
  var Y = "#09992F";
  var V = "#007ec0";
  var J = "grey";
  var q = "#09992F";
  var K = "#4E66E4";
  var Z = "#4655A6";
  var Q = Z;
  var $ = "#c8b745";
  var ee = "#F35F53";
  var te = "#CF6259";
  var ae = "#FF911E";
  var ie = "#C67019";
  var ne = "#EF3C31";
  var se = "#4AE05E";
  var re = "#8C9688";
  function le(e) {
    switch (e) {
      case Pa:
        return V;
      case Ia:
        return J;
      default:
      case wa:
        return Y;
    }
  }
  var oe = 1;
  var he = 2;
  var ce = 3;
  var de = 4;
  var ge = 5;
  var ue = 6;
  var fe = 7;
  var me = 8;
  var pe = 9;
  var be = 10;
  var ye = 11;
  var we = 12;
  var Pe = 13;
  var Ie = 14;
  var ve = 15;
  var ke = 16;
  var Ae = 17;
  var Me = 18;
  var Te = 19;
  var xe = 20;
  var Se = 21;
  var Ee = 22;
  var De = 23;
  var _e = 24;
  var Ue = 25;
  var Ce = 26;
  var Be = 27;
  var Ne = 28;
  var Re = 29;
  var Oe = 30;
  var We = 31;
  var Fe = 32;
  var He = 33;
  var Le = 34;
  var ze = 35;
  var Ge = 36;
  var je = 37;
  var Xe = 38;
  var Ye = 39;
  var Ve = 40;
  var Je = 41;
  var qe = 42;
  var Ke = 43;
  var Ze = 44;
  var Qe = 45;
  var $e = 1;
  var et = 2;
  var tt = 3;
  var at = 4;
  var it = 5;
  var nt = 6;
  var st = 7;
  var rt = 8;
  var lt = 9;
  var ot = 10;
  var ht = 11;
  var ct = 12;
  var dt = 13;
  var gt = 14;
  var ut = 15;
  var ft = 16;
  var mt = 17;
  var pt = 18;
  var bt = 19;
  var yt = 20;
  var wt = 21;
  var Pt = 22;
  var It = 23;
  var vt = 24;
  var kt = 25;
  var At = 26;
  var Mt = 27;
  var Tt = 28;
  var xt = 29;
  var St = 30;
  var Et = 31;
  var Dt = 32;
  var _t = 33;
  var Ut = 34;
  var Ct = 35;
  var Bt = 36;
  var Nt = 37;
  var Rt = 38;
  var Ot = 39;
  var Wt = 40;
  var Ft = 100;
  var Ht = 101;
  var Lt = 0;
  var zt = 1;
  var Gt = 2;
  var jt = 3;
  var Xt = 4;
  var Yt = 5;
  var Vt = 6;
  var Jt = 7;
  var qt = 8;
  var Kt = 9;
  var Zt = 10;
  var Qt = 11;
  var $t = 12;
  var ea = 13;
  var ta = 14;
  var aa = 15;
  var ia = 16;
  var na = 17;
  var sa = 18;
  var ra = 19;
  var la = 20;
  var oa = 21;
  var ha = 22;
  var ca = 23;
  var da = 24;
  var ua = 25;
  var fa = 26;
  var ma = 27;
  var pa = 28;
  var ba = 0;
  var ya = 1;
  var wa = 0;
  var Pa = 1;
  var Ia = 2;
  var va = document.getElementById("gCanvas");
  var ka = null;
  var Aa = null;
  var Ma = va.getContext("2d");
  Ma.shadowColor = "black";
  var Ta = false;
  var xa = Math.min(window.devicePixelRatio, 2);
  var Sa = ("ontouchstart" in window || navigator.maxTouchPoints) == 1;
  if (Sa) {
    console.log("mobile touch device detected!");
  }
  loadedAudio = {};
  function Ea(e) {
    if (!loadedAudio.hasOwnProperty(e) && !Oi) {
      var t = new Audio(e);
      console.log("loading audio: " + e);
      loadedAudio[e] = t;
      if (e == Ua) {
        t.addEventListener("ended", function () {
          this.currentTime = 0;
          try {
            this.play();
          } catch (e) {}
        }, false);
      }
      t.volume = 0.7;
      t.muted = Oi;
    }
    return loadedAudio[e];
  }
  var Da = null;
  var _a = "";
  var Ua = "audio/music_menu.mp3";
  var Ca = "audio/music_game.mp3";
  function Ba(e) {
    if (Da) {
      Da.pause();
      Da.currentTime = 0;
    }
    _a = e;
    if (!Oi) {
      console.log("changed music to " + e);
      Da = Ea(e, true);
      try {
        Da.play();
      } catch (e) {}
    }
  }
  function Na() {
    var e = document.getElementById("button_mute_img");
    if (e) {
      e.src = Oi ? "img/sound_off.png" : "img/sound_on.png";
      for (var t in loadedAudio) {
        if (loadedAudio.hasOwnProperty(t)) {
          loadedAudio[t].muted = Oi;
        }
      }
      if (!Oi && _a && Da == null) {
        Ba(_a);
      }
    }
  }
  var Ra = false;
  function Oa(e) {}
  var Wa = camzoom_n = 2.7;
  var Wa = 1;
  var Fa = camy = camx_n = camy_n = camx_o = camy_o = 0;
  var Ha = 1;
  var La = 0;
  var za = 0;
  var Ga = 0;
  var ja = 0;
  var Xa = 0;
  var Ya = 0;
  var Va = false;
  var Ja = false;
  var qa;
  var Ka;
  var Za = 0;
  var Qa = 0;
  gameMode = 0;
  loadedImgs = {};
  function $a(e) {
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
  function ei(e, t) {
    return Math.random() * (t - e) + e;
  }
  function ti(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  function ai(e) {
    e = Math.trunc(e) % 360 + (e - Math.trunc(e));
    if (e > 0) {
      return e;
    } else {
      return e + 360;
    }
  }
  function ii(e) {
    e = e.split(".");
    return ((+e[0] * 256 + +e[1]) * 256 + +e[2]) * 256 + +e[3];
  }
  function ni(e) {
    var t = e % 256;
    for (var a = 3; a > 0; a--) {
      e = Math.floor(e / 256);
      t = e % 256 + "." + t;
    }
    return t;
  }
  function si(e, t) {
    var a = t.split("?")[0];
    var i;
    var n;
    i = t.indexOf("?") !== -1 ? t.split("?")[1] : "";
    if (i !== "") {
      n = i.split("&");
      for (var s = n.length - 1; s >= 0; --s) {
        i = n[s].split("=")[0];
        if (i === e) {
          n.splice(s, 1);
        }
      }
      a = a + "?" + n.join("&");
    }
    return a;
  }
  function ri(e) {
    return 180 / Math.PI * e;
  }
  function li(e) {
    return Math.PI / 180 * e;
  }
  function oi(e, t, a, i) {
    return Math.atan2(i - t, a - e);
  }
  function hi(e, t) {
    return (e >> t) % 2 != 0;
  }
  function ci(e, t, a) {
    if (a) {
      return e | 1 << t;
    } else {
      return e & ~(1 << t);
    }
  }
  function di(e, t) {
    var a = ai(ri(t - e));
    if (a > 180) {
      a -= 360;
    }
    return li(a);
  }
  function gi(e, t, a) {
    return Math.min(a, Math.max(t, e));
  }
  function ui(e) {
    return unescape(encodeURIComponent(e));
  }
  function fi(e) {
    return decodeURIComponent(escape(e));
  }
  function mi(e, t, a) {
    var i = Ma.measureText("M").width * 1.2;
    e = e.split("\n");
    for (var n = 0; n < e.length; ++n) {
      Ma.fillText(e[n], t, a);
      a += i;
    }
  }
  function pi(e) {
    var t = parseInt(e, 10);
    var a = Math.floor(t / 3600);
    e = Math.floor((t - a * 3600) / 60);
    t = t - a * 3600 - e * 60;
    if (t < 10) {
      t = "0" + t;
    }
    return e + ":" + t;
  }
  function bi(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function yi(e) {
    if (e < 1000) {
      return e;
    } else if (e < 1000000) {
      return Math.trunc(e / 1000 * 10) / 10 + "k";
    } else {
      return Math.trunc(e / 1000000 * 100) / 100 + "m";
    }
  }
  function wi(e, t, a, i, n, s) {
    this.x = e;
    this.y = t;
    this.w = a;
    this.h = i;
    this.aniT = n;
    this.buttonTXT = new ki(12, "white");
    this.buttonTXT.renderScale = 1.5;
    this.buttonTXT.setText(us(n).aniName);
    this.isHighLighted = false;
    this.biomeNum = s;
    e = new Ai(0, et, 0, 0, 30);
    e.x = e.ox = e.nx = 0;
    e.y = e.oy = e.ny = 0;
    e.type = n;
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
    this.setPosAndSize = function (e, t, a, i, n, s) {
      this.w = a;
      this.h = i;
      this.x = e + a * (0.5 - n);
      this.y = t + i * (0.5 - s);
    };
    this.draw = function () {
      Ma.save();
      Ma.translate(this.x, this.y);
      Ma.scale(this.buttonScaleF, this.buttonScaleF);
      var e = Ma.globalAlpha;
      Ma.globalAlpha = e * 0.75;
      switch (this.biomeNum) {
        case 1:
          Ma.fillStyle = "#1C91B8";
          break;
        case 0:
          Ma.fillStyle = "#26A73A";
          break;
        case 2:
          Ma.fillStyle = "#B2B2B2";
      }
      Ma.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      if (this.isHighLighted) {
        Ma.fillStyle = "white";
        Ma.globalAlpha = e * 0.2;
        Ma.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      }
      Ma.globalAlpha = e;
      this.drawnAniObj.nRad = this.drawnAniObj.rad = a * 0.6 / 2 * Ha;
      Ma.save();
      Ma.scale(2, 2);
      this.drawnAniObj.draw();
      Ma.restore();
      this.buttonTXT.setFontSize(Ha * 23);
      this.buttonTXT.x = 0;
      this.buttonTXT.y = -this.h * 0.375;
      this.buttonTXT.draw();
      Ma.restore();
    };
  }
  function Pi(e) {
    var t = Ea("audio/click.mp3");
    if (t) {
      try {
        t.play();
      } catch (e) {}
    }
    newMsg = new Si(2);
    newMsg.writeUInt8(24);
    newMsg.writeUInt8(Us.indexOf(e));
    os(newMsg);
    if (Cs) {
      Nn = false;
      Ls(false);
    }
    Cs = Ds = false;
  }
  Ii.prototype = {
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
    setPosAndSize: function (e, t, a, i, n, s) {
      this.w = a;
      this.h = i;
      this.x = e + a * (0.5 - n);
      this.y = t + i * (0.5 - s);
    },
    onButtonTouchStart: function () {},
    onButtonTouchEnd: function () {}
  };
  function Ii(e) {
    this.buttonTXT = new ki(10, "white");
    this.buttonTXT.renderScale = 1.5;
    this.buttonTXT.setText(e);
    this.draw = function () {
      if (this.visible) {
        Ma.save();
        Ma.globalAlpha = 0.2;
        Ma.fillStyle = this.pressed ? "white" : "#000000";
        Ma.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        Ma.globalAlpha = 0.2;
        this.buttonTXT.setFontSize(xa * 15);
        this.buttonTXT.x = this.x;
        this.buttonTXT.y = this.y;
        this.buttonTXT.draw();
        Ma.restore();
      }
    };
  }
  function vi() {
    this.buttonTXT = new ki(10, "white");
    this.buttonTXT.renderScale = 1.5;
    this.isMiniRechargeBut = false;
    this.abil_Type = 0;
    this.abil_possible = this.abil_usable = this.abil_recharging = this.abil_active = false;
    this.abil_avilableA = this.abil_rechargeBarA = this.abil_rechargeTotalT = this.abil_rechargeEndT = 0;
    this.draw = function () {
      if (this.visible && (this.abil_rechargeBarA += ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA) * 0.1, this.abil_avilableA += ((this.abil_usable || this.abil_active ? 1 : 0.2) - this.abil_avilableA) * 0.1, this.isMiniRechargeBut && (this.h = this.w * 0.6), this.abil_possible)) {
        Ma.save();
        if (this.isMiniRechargeBut) {
          this.h = this.w * 0.8;
          Ma.translate(this.x, this.y + this.h * 0.36);
          Ma.scale(0.65, 0.65);
        } else {
          Ma.translate(this.x, this.y);
        }
        var e = this.abil_avilableA * 0.2;
        var t = this.pressed || Ja ? "#CECECE" : "#000000";
        if (this.abil_active) {
          t = se;
          e = 0.7;
        }
        Ma.fillStyle = t;
        Ma.globalAlpha = e * 1;
        Ma.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        e = gs(this.abil_Type);
        if (t = $a(e.abilImg)) {
          var a = this.w * 0.4;
          Ma.globalAlpha = this.abil_avilableA * 1;
          Ma.drawImage(t, -a, -a * 0.85, a * 2, a * 2);
        }
        this.buttonTXT.setText(e.abilName);
        this.buttonTXT.setFontSize(xa * 15);
        this.buttonTXT.x = 0;
        this.buttonTXT.y = -this.w * 0.35;
        this.buttonTXT.draw();
        e = Math.max(0, this.abil_rechargeEndT - cs);
        this.abil_rechargeBarA += ((this.abil_recharging ? 1 : 0) - this.abil_rechargeBarA) * 0.1;
        if (this.abil_rechargeBarA > 0.01) {
          Ma.globalAlpha = this.abil_rechargeBarA * 0.35;
          Ma.fillStyle = "#000000";
          t = this.w * 0.8;
          a = this.h * 0.5;
          Ma.fillRect(0 - t / 2, 0 - a / 2, t, a);
          Ma.globalAlpha = this.abil_rechargeBarA * 1;
          Ma.fillStyle = "#F3C553";
          Ma.fillRect(0 - t / 2, 0 - a / 2, e / this.abil_rechargeTotalT * t, a);
        }
        Ma.restore();
      }
    };
  }
  vi.prototype = Object.create(Ii.prototype);
  ki.prototype = {
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
        var n = this._fntSize * this.renderScale;
        var s = n + "px Arial";
        t.font = s;
        var r = ~~(n * 0.2);
        t.font = s;
        if (this.multiLine) {
          var l = t.measureText("M").width * 1.2;
          for (var a = a.split("\n"), o = 0, h = 0; h < a.length; ++h) {
            o = Math.max(o, t.measureText(a[h]).width);
          }
          this.width = (o + 6) * i;
          this.height = (l * a.length + r) * i;
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
          n -= r / 2;
          for (h = 0; h < a.length; ++h) {
            t.fillText(a[h], e, n);
            n += l;
          }
        } else {
          this.width = (t.measureText(a).width + 6) * i;
          this.height = (n + r) * i;
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
          t.fillText(a, 3, n - r / 2);
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
        Ma.drawImage(t, this.x - a / 2, this.y - e / 2, a, e);
      }
    }
  };
  function ki(e, t) {
    if (e) {
      this._fntSize = e;
    }
    if (t) {
      this._color = t;
    }
  }
  Ai.prototype = {
    id: 0,
    oType: yt,
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
  function Ai(e, t, a, i, n) {
    this.id = e;
    this.oType = t;
    this.ox = this.x = this.nx = a;
    this.oy = this.y = this.ny = i;
    this.nRad = n;
    this.oRad = this.rad = 0;
    if (t == st || t == mt || t == ot || t == gt || t == tt || t == rt || t == ut || t == ht) {
      this.oRad = this.rad = n;
    }
    this.rPer = ei(0, 1);
    this.updateTime = this.spawnTime = cs;
    this.flag_hurt = false;
    this.hpPer = this.hpPer_n = this.hpBarA = this.hpBarA_n = 0;
    if (this.oType == et) {
      this.flag_iceSliding = this.flag_eff_invincible = this.flag_usingAbility = this.flag_eff_frozen = this.flag_eff_stunned = this.flag_underWater = this.flag_tailBitten = this.flag_lowWat = false;
      this.nameA = this.frozenEffA = this.onFireEffA = this.stunA = this.underwaterA = 0;
      this.getNameSize = function () {
        return 10;
      };
      this.setName = function (e) {
        if (this.name = e) {
          if (this.nameTXT == null) {
            this.nameTXT = new ki(this.getNameSize(), "#FFFFFF");
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
    if (this.oType == et || this.oType == it || this.oType == dt || this.oType == lt) {
      this.chatLines = [];
    }
    this.updateZ = function () {
      switch (this.oType) {
        case $e:
          this.z = -220;
          break;
        case ft:
          this.z = -210;
          break;
        case _t:
          this.z = -202;
          break;
        case Ut:
          this.z = -201;
          break;
        case ct:
          this.z = -200;
          break;
        case Wt:
        case ot:
          this.z = -159;
          break;
        case st:
          this.z = -158;
          break;
        case mt:
          this.z = -157;
          break;
        case at:
          this.z = -156;
          break;
        case gt:
          this.z = this.type == ta || this.type == la || this.type == oa ? 10001 : this.type == pa ? 1002 : -152;
          break;
        case dt:
          this.z = -150;
          break;
        case ht:
          this.z = -102;
          break;
        case lt:
          this.z = -101;
          break;
        case it:
          this.z = -100;
          break;
        case tt:
          this.z = 999;
          break;
        case ut:
          this.z = 1000;
          break;
        case rt:
          this.z = 1001;
          break;
        case Mt:
        case Tt:
          this.z = 1003;
          break;
        case St:
        case xt:
          this.z = 1006;
          break;
        case pt:
          this.z = 1006;
          break;
        case nt:
          this.z = 10000;
          break;
        case et:
          this.z = this.flag_underWater || this.flag_usingAbility && this.type == ue ? -140 : this.type == Ie ? 1007 : this.type == be || this.type == we || this.type == Ne || this.type == Ge || this.type == Ae || this.type == Se || this.type == je || this.type == Ye || this.type == Fe ? 1001 : this.rad;
          break;
        default:
          this.z = this.rad;
      }
    };
    this.draw = function (e) {
      var t = this.moveUpdate();
      Ma.save();
      Ma.translate(this.x, this.y);
      if (!Bi) {
        var a = false;
      }
      switch (this.oType) {
        case yt:
        case xt:
        case Et:
        case Dt:
        case St:
        case wt:
        case pt:
        case Pt:
        case vt:
        case It:
        case it:
        case dt:
        case lt:
        case At:
        case Ct:
        case Bt:
        case Nt:
        case Rt:
        case Ot:
          a = true;
      }
      if (a) {
        var i;
        i = (cs - this.spawnTime) / 1000;
        var n = 1.5;
        var a = 0.1;
        if (this.oType == it || this.oType == lt || this.oType == dt) {
          n = 2.5;
          a = 0.04;
        }
        i = a * Math.sin(Math.PI * 2 / n * i);
        Ma.scale(1 + i, 1 + i / 2);
      }
      n = this.getOutlineColor();
      a = 2;
      Ma.globalAlpha = this.dead ? Ma.globalAlpha * (1 - t) : Ma.globalAlpha * Math.min(1, (cs - this.spawnTime) / (j * 1000));
      switch (this.oType) {
        case tt:
          switch (this.curBiome) {
            case Pa:
              if (e) {
                Ti(0, 0, this.rad, this.getOutlineColor());
              } else {
                Ti(0, 0, this.rad - 1.5, $);
              }
              break;
            case Ia:
              if (e) {
                Ti(0, 0, this.rad, this.getOutlineColor());
              } else {
                Ti(0, 0, this.rad - 1.5, "#1f893a");
              }
              break;
            default:
              this.drawOutlinedCircle("", Y);
          }
          break;
        case Mt:
          Ma.save();
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ma.fillStyle = "#45D157";
          t = this.rad * 0.8;
          this.drawOutlinedCircle("", te);
          Ma.globalAlpha *= 0.98;
          e = -t * 0.5 + this.rPer * 10;
          n = Math.max(0, t * 0.65 + i) + 2;
          Ti(-t * 0.5, e, n, te);
          e = -t * 0.5 - this.rPer * 10;
          n = Math.max(0, t * 0.73 - i);
          Ti(t * 0.5, e, n, te);
          n = Math.max(0, t * 0.78 + i);
          Ti(t * 0.6, t * 0.4, n, te);
          e = t * 0.5 + this.rPer * 10;
          n = Math.max(0, t * 0.6 + this.rPer - i);
          Ti(-t * 0.5, e, n, te);
          Ma.restore();
          break;
        case ut:
          this.drawOutlinedCircle("", "#1AAE31");
          Ma.save();
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ma.fillStyle = X;
          e = this.rad * 0.75;
          Ma.globalAlpha *= 0.8;
          Ma.beginPath();
          Ma.arc(-e * 0.5, -e * 0.5 + this.rPer * 10, Math.max(0, e * 0.65 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(e * 0.5, -e * 0.5 - this.rPer * 10, Math.max(0, e * 0.73 - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(e * 0.6, e * 0.4, Math.max(0, e * 0.78 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(-e * 0.5, e * 0.5, Math.max(0, e * 0.6 + this.rPer - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.restore();
          break;
        case Tt:
          Ma.save();
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          var t = this.rad * 0.8;
          var s = ie;
          this.drawOutlinedCircle("", s);
          Ma.globalAlpha *= 0.98;
          e = -t * 0.5 + this.rPer * 10;
          n = Math.max(0, t * 0.65 + i) + 2;
          Ti(-t * 0.5, e, n, s);
          e = -t * 0.5 - this.rPer * 10;
          n = Math.max(0, t * 0.73 - i);
          Ti(t * 0.5, e, n, s);
          n = Math.max(0, t * 0.78 + i);
          Ti(t * 0.6, t * 0.4, n, s);
          e = t * 0.5 + this.rPer * 10;
          n = Math.max(0, t * 0.6 + this.rPer - i);
          Ti(-t * 0.5, e, n, s);
          Ma.restore();
          break;
        case at:
          this.drawOutlinedCircle("", Z);
          break;
        case yt:
          this.drawOutlinedCircle("", ee);
          break;
        case xt:
          if (i = $a("img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Et:
          if (i = $a("img/rasp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Dt:
          if (i = $a("img/pear" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Ct:
          if (i = $a("img/seaweed" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Bt:
          if (i = $a("img/starfish" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Nt:
          if (i = $a("img/kelp" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Rt:
          if (i = $a("img/clam" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case Ot:
          if (i = $a("img/conch" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad * 1;
            Ma.save();
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
            Ma.restore();
          }
          break;
        case St:
          if (i = $a("img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          }
          break;
        case At:
          this.drawOutlinedCircle("", ae);
          Ma.rotate(this.rPer * Math.PI * 2);
          Ti(this.rad * 0.25, this.rad * 0.4, (0.3 + this.rPer * 0.15) * this.rad, "#905113");
          break;
        case Pt:
        case vt:
          a = 2;
          e = this.oType == vt ? 15 : 9;
          Ma.fillStyle = this.getOutlineColor();
          Ma.beginPath();
          Ma.rect(-e / 2 - a, -a, e + a * 2, this.rad * 0.8 + a * 2);
          Ma.fill();
          Ma.fillStyle = "#FFCA49";
          Ma.beginPath();
          Ma.rect(-e / 2, 0 + a / 2, e, this.rad * 0.8 - a / 2);
          Ma.fill();
          if (!Bi) {
            Ma.beginPath();
            Ma.arc(0, 0, Math.max(0, this.rad), Math.PI, Math.PI * 2);
            Ma.fillStyle = this.getOutlineColor();
            Ma.fill();
          }
          Ma.beginPath();
          Ma.arc(0, 0, Math.max(0, this.rad - a), Math.PI, Math.PI * 2);
          Ma.fillStyle = this.oType == vt ? "#B8413B" : "#CFAD59";
          Ma.fill();
          break;
        case kt:
          a = 2;
          Ma.save();
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ma.fillStyle = "#45D157";
          Ma.globalAlpha *= 0.93;
          Ma.beginPath();
          Ma.arc(-this.rad * 0.5, -this.rad * 0.5 + this.rPer * 10, Math.max(0, this.rad * 0.55 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.5, -this.rad * 0.5 - this.rPer * 10, Math.max(0, this.rad * 0.43 - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.6, this.rad * 0.4, Math.max(0, this.rad * 0.48 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(-this.rad * 0.5, this.rad * 0.5, Math.max(0, this.rad * 0.4 + this.rPer - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.restore();
          e = 20;
          Ma.fillStyle = n;
          Ma.beginPath();
          Ma.rect(-e / 2 - a, -a, e + a * 2, this.rad * 0.8 + a * 2);
          Ma.fill();
          Ma.fillStyle = "#FFCA49";
          Ma.beginPath();
          Ma.rect(-e / 2, 0 + a / 2, e, this.rad * 0.8 - a / 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(0, 0, Math.max(0, this.rad * 0.8), Math.PI, Math.PI * 2);
          Ma.fillStyle = n;
          Ma.fill();
          Ma.beginPath();
          Ma.arc(0, 0, Math.max(0, this.rad * 0.8 - a), Math.PI, Math.PI * 2);
          Ma.fillStyle = "#B8413B";
          Ma.fill();
          break;
        case It:
          if (i = $a("img/lillypad" + (this.isEdibleOutlined() ? "_e" : "") + ".png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          } else {
            Ma.fillStyle = n;
            e = this.rPer * 6.28;
            Ma.beginPath();
            Ma.arc(0, 0, this.rad + 2, 0 + e, e + Math.PI * 2 - 1.57);
            Ma.fill();
            Ma.fillStyle = "#3DAA4C";
            Ma.beginPath();
            Ma.arc(0, 0, this.rad, 0 + e, e + Math.PI * 2 - 1.57);
            Ma.fill();
          }
          break;
        case it:
          this.drawOutlinedCircle("", "#9F8641");
          Ti(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
          Ti(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
          break;
        case gt:
          switch (this.type) {
            case Qt:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.4;
              Ti(0, 0, this.rad, "#7EBCC0");
              Ma.globalAlpha = t * 1;
              Ma.strokeStyle = "white";
              Ma.beginPath();
              e = 10;
              Ma.translate(-5, this.rad * -0.7);
              Ma.moveTo(0, -e);
              Ma.lineTo(0, e);
              Ma.moveTo(-e, -e);
              Ma.lineTo(e, e);
              Ma.moveTo(e, -e);
              Ma.lineTo(-e, e);
              Ma.moveTo(-e, 0);
              Ma.lineTo(e, 0);
              Ma.lineWidth = 3;
              Ma.stroke();
              Ma.restore();
              break;
            case aa:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.15;
              Ti(0, 0, this.rad, "#755A2A");
              Ma.restore();
              break;
            case ta:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 1;
              if (i = $a("img/ability_claw.png")) {
                t = Math.min(1, (cs - this.spawnTime) / 200);
                e = this.rad - 2.5;
                Ma.rotate(this.rPer * Math.PI * 2);
                Ma.drawImage(i, 0, 0, i.width * t, i.height, -e, -e, e * 2 * t, e * 2);
              }
              Ma.restore();
              break;
            case la:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.1;
              Ti(0, 0, this.rad, "#755A2A");
              Ma.globalAlpha = t * 1;
              if (i = $a("img/ability_backkick.png")) {
                t = Math.min(1, (cs - this.spawnTime) / 200);
                e = this.rad * 0.6;
                Ma.rotate(this.angle);
                var n = this.rad;
                var s = e * 2;
                var r = e * 2 * t;
                Ma.drawImage(i, 0 + s * -0.5, n + r * -0.95, s, r);
              }
              Ma.restore();
              break;
            case oa:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.25;
              Ti(0, 0, this.rad, "#44d31f");
              Ma.globalAlpha = t * 1;
              if (i = $a("img/ability_crocBite.png")) {
                t = Math.min(1, (cs - this.spawnTime) / 200);
                e = this.rad * 0.6;
                Ma.rotate(this.angle);
                n = this.rad;
                s = e * 2.5;
                r = e * 2.5 * t;
                Ma.drawImage(i, 0 + s * -0.5, n + r * -0.95, s, r);
                Ma.rotate(Math.PI);
                n = this.rad * 0.5;
                s = e * 2.5;
                r = e * 2.5 * t;
                Ma.drawImage(i, 0 + s * -0.5, n + r * -0.95, s, r);
              }
              Ma.restore();
              break;
            case $t:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.15;
              Ti(0, 0, this.rad, "#6D7471");
              Ma.restore();
              break;
            case pa:
              Ma.save();
              Ma.rotate(this.angle + li(180));
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.8;
              if (i = $a("img/wave.png")) {
                e = this.rad;
                Ma.drawImage(i, -e, -e, e * 2, e * 2);
              }
              Ma.restore();
              break;
            case sa:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.2;
              Ti(0, 0, this.rad, "#746B3E");
              Ma.restore();
              break;
            case jt:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.5;
              Ti(0, 0, this.rad, "#62C5FF");
              Ma.globalAlpha = t * 1;
              Ma.strokeStyle = "#62C5FF";
              Ma.beginPath();
              e = this.rad * -0.7;
              Ma.moveTo(e, -5);
              Ma.lineTo(e - 4, 5);
              Ma.lineTo(e + 4, 2);
              Ma.lineTo(e + 2, 15);
              Ma.lineWidth = 3;
              Ma.stroke();
              Ma.restore();
              break;
            case Yt:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.5;
              e = Math.max(0, this.rad - 30);
              i = (cs - this.spawnTime) / 1000;
              n = 2.2;
              s = Math.cos(Math.PI * 2 / n * i) * 6.5;
              i = Math.sin(Math.PI * 2 / n * i) * 6.5;
              Ma.globalAlpha = t * 0.4;
              Ti(0, 0, e, "#2CAAC4");
              Ma.globalAlpha = t * 0.7;
              if (!Bi) {
                Ti(0 + s / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, e - 6), "#2D93B0");
              }
              Ti(0 + s / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, e - 14), "#29A0BA");
              Ti(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, e - 38.5 + i / 5), "#2B8CAA");
              Ti(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, e - 54.5 + i / 11), "#28829E");
              Ma.restore();
              break;
            case Xt:
              Ma.save();
              t = Ma.globalAlpha;
              if (!Bi) {
                Ma.rotate(this.rPer * 2 * Math.PI);
              }
              i = (cs - this.spawnTime) / 1000;
              i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
              Ma.globalAlpha = t * 0.7;
              a = 4;
              Ma.fillStyle = "black";
              Ma.beginPath();
              Ma.arc(0, 0, this.rad, 0, Math.PI * 2);
              Ma.fill();
              if (!Bi) {
                Ma.fillStyle = "black";
                Ma.globalAlpha = t * 0.5;
                Ma.beginPath();
                Ma.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.beginPath();
                Ma.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
                Ma.beginPath();
                Ma.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
                Ma.fill();
                Ma.beginPath();
              }
              Ma.restore();
              break;
            case ha:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.25;
              Ti(0, 0, this.rad, "#9F8641");
              Ma.restore();
              break;
            case ca:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.25;
              Ti(0, 0, this.rad, "#785228");
              Ma.restore();
              break;
            default:
              Ma.save();
              t = Ma.globalAlpha;
              Ma.globalAlpha = t * 0.15;
              Ti(0, 0, this.rad, "black");
              Ma.restore();
          }
          break;
        case dt:
          i = (cs - this.spawnTime) / 1000;
          n = 1.2;
          s = Math.cos(Math.PI * 2 / n * i) * 2.5;
          i = Math.sin(Math.PI * 2 / n * i) * 2.5;
          this.drawOutlinedCircle("", "#2CAAC4");
          if (!Bi) {
            Ti(0 + s / 2 - this.rPer, 0 + i / 2 - this.rPer, Math.max(0, this.rad - 6), "#2D93B0");
          }
          Ti(0 + s / 4.5 + this.rPer, 1 + i / 1.5, Math.max(0, this.rad - 14), "#29A0BA");
          Ti(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, this.rad - 18.5 + i / 5), "#2B8CAA");
          Ti(0 + s / 1.5 - this.rPer * 2, i, Math.max(0, this.rad - 24.5 + i / 11), "#28829E");
          break;
        case lt:
          this.drawOutlinedCircle("", "#9F8641");
          if (!Bi) {
            Ti(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
          }
          Ti(0 + this.rPer, 1, Math.max(0, this.rad - 14), "#5C4E28");
          Ti(0 - this.rPer * 2 - 3, 1, Math.max(0, this.rad - 18.5), "#40371D");
          break;
        case nt:
          Ma.save();
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 2 * i) * 1.5;
          Ma.fillStyle = "#45D157";
          Ma.globalAlpha *= 0.93;
          Ma.beginPath();
          Ma.arc(-this.rad * 0.5, -this.rad * 0.5 + this.rPer * 10, Math.max(0, this.rad * 0.65 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.5, -this.rad * 0.5 - this.rPer * 10, Math.max(0, this.rad * 0.73 - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.6, this.rad * 0.4, Math.max(0, this.rad * 0.78 + i), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(-this.rad * 0.5, this.rad * 0.5, Math.max(0, this.rad * 0.6 + this.rPer - i), 0, Math.PI * 2);
          Ma.fill();
          Ma.restore();
          break;
        case st:
          Ma.save();
          if (!Bi) {
            Ma.rotate(this.rPer * 2 * Math.PI);
          }
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
          a = 4;
          Ma.fillStyle = "#8B7833";
          Ma.beginPath();
          Ma.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ma.fill();
          if (!Bi) {
            Ma.fillStyle = "#98803A";
            Ma.beginPath();
            Ma.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.beginPath();
            Ma.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.beginPath();
            Ma.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
          }
          Ma.restore();
          break;
        case mt:
          Ma.save();
          if (!Bi) {
            Ma.rotate(this.rPer * 2 * Math.PI);
          }
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 6 * i) * 1.5;
          a = 4;
          Ma.fillStyle = "#8CC3C7";
          Ma.beginPath();
          Ma.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ma.fill();
          if (!Bi) {
            Ma.fillStyle = "#9DDADE";
            Ma.beginPath();
            Ma.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.beginPath();
            Ma.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.beginPath();
            Ma.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
          }
          Ma.restore();
          break;
        case ot:
          Ma.save();
          if (!Bi) {
            Ma.rotate(this.rPer * 2 * Math.PI);
          }
          i = (cs - this.spawnTime) / 1000;
          i = Math.sin(Math.PI * 2 / 4 * i) * 5.5;
          a = 4;
          Ma.fillStyle = $;
          Ma.beginPath();
          Ma.arc(0, 0, this.rad, 0, Math.PI * 2);
          Ma.fill();
          Ma.fillStyle = Z;
          Ma.beginPath();
          Ma.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
          Ma.fill();
          if (!Bi) {
            Ma.beginPath();
            Ma.arc(this.rad * 0.45, -this.rad * 0.45 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad * 0.5, this.rad * 0.5 + this.rPer * 15, Math.max(0, this.rad * 0.4 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.55 * 0.707, +this.rad * 0.55 * 0.707 + this.rPer * 15, Math.max(0, this.rad * 0.5 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(-this.rad * 0.75, -this.rad * 0.35 + this.rPer * 15, Math.max(0, this.rad * 0.3 + i), 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
            Ma.fill();
            Ma.beginPath();
            Ma.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
            Ma.fill();
          }
          Ma.restore();
          break;
        case Ut:
          Ma.save();
          if (!Bi) {
            Ma.rotate(this.rPer * 2 * Math.PI);
          }
          i = (cs - Yn) / 1000;
          i = Math.sin(Math.PI * 2 / 5 * i) * 5.5;
          if (!e) {
            Ma.fillStyle = Q;
            Ma.beginPath();
            Ma.arc(0, 0, Math.max(0, this.rad - a + i), 0, Math.PI * 2);
            Ma.fill();
            if (!Bi) {
              Ma.beginPath();
              Ma.arc(this.rad + this.rPer * 10, this.rPer * 50, 8, 0, Math.PI * 2);
              Ma.fill();
              Ma.beginPath();
              Ma.arc(this.rad - this.rPer * 20, this.rPer * 50, 10, 0, Math.PI * 2);
              Ma.fill();
            }
          }
          Ma.restore();
          break;
        case ct:
          i = (cs - Yn) / 1000;
          e = Math.sin(Math.PI * 2 / 5 * i) * -8.5;
          if ((this.x > Za / 2 ? 1 : 0) == 1) {
            Ma.fillStyle = Q;
            Ma.fillRect(-this.rectW / 2 + e, -this.rectH / 2 + e + 10, this.rectW - e, this.rectH - e - 10);
            Ma.beginPath();
            Ma.arc(-this.rectW / 2 + 50, -this.rectH / 2 + 50, 70 - e, 0, Math.PI * 2);
            Ma.fill();
            e = 35;
          } else {
            Ma.fillStyle = Q;
            e *= -1;
            Ma.fillRect(-this.rectW / 2, -this.rectH / 2 - e + 10, this.rectW + e, this.rectH + e - 10);
            e = 25;
          }
          ms(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case _t:
          Ma.fillStyle = $;
          t = -this.rectW / 2;
          n = this.rectW / 2;
          s = -this.rectH / 2;
          r = this.rectH / 2;
          Ma.beginPath();
          Ma.moveTo(t, s);
          var l = 20;
          var o = [-15, 10, -10, 12, 0, 5, -10, 5, -12, 5, 10, 0, -6];
          var h = 45;
          var d = 0;
          var g = Za - this.x;
          var u = 0 - this.x;
          var f = Qa - this.y;
          var m = 0 - this.y;
          i = t - l;
          for (e = s; e < r; e += h) {
            Ma.lineTo(Math.min(g, Math.max(u, i + o[d])), e);
            d = (d + 1) % o.length;
          }
          Ma.lineTo(t, r);
          e = r + l;
          for (i = t; i < n; i += h) {
            Ma.lineTo(i, Math.min(f, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ma.lineTo(n, r);
          i = n + l;
          for (e = r; e > s; e -= h) {
            Ma.lineTo(Math.min(g, Math.max(u, i + o[d])), e);
            d = (d + 1) % o.length;
          }
          Ma.lineTo(n, s);
          e = s - l;
          for (i = n; i > t; i -= h) {
            Ma.lineTo(i, Math.min(f, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ma.closePath();
          Ma.fill();
          break;
        case ft:
          Ma.fillStyle = "#ececec";
          Ma.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          t = -this.rectW / 2;
          n = this.rectW / 2;
          s = this.rectH / 2 - 20;
          r = this.rectH / 2;
          Ma.beginPath();
          Ma.moveTo(t, s);
          l = 20;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          f = Qa - this.y;
          m = 0 - this.y;
          Ma.lineTo(t, r);
          e = r + l;
          for (i = t; i < n; i += h) {
            Ma.lineTo(i, Math.min(f, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ma.lineTo(n, r);
          Ma.lineTo(n, s);
          Ma.closePath();
          Ma.fill();
          e = 20;
          ms(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case Wt:
          Ma.fillStyle = Z;
          Ma.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          Ma.fillStyle = Z;
          t = -this.rectW / 2;
          n = this.rectW / 2;
          s = -this.rectH / 2 + 3;
          r = -this.rectH / 2 - 15;
          Ma.beginPath();
          Ma.moveTo(t, s);
          l = 0;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          f = Qa - this.y;
          m = 0 - this.y;
          Ma.lineTo(t, r);
          e = r + l;
          for (i = t; i < n; i += h) {
            Ma.lineTo(i, Math.min(f, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ma.lineTo(n, r);
          Ma.lineTo(n, s);
          Ma.closePath();
          Ma.fill();
          Ma.fillStyle = Z;
          t = -this.rectW / 2;
          n = this.rectW / 2;
          s = this.rectH / 2 - 3;
          r = this.rectH / 2 + 15;
          Ma.beginPath();
          Ma.moveTo(t, s);
          l = 0;
          o = [-15, 5, 10, 0, -10, 3, 12, 4, 0, 3, 5, -10, 5, -12, 5, 10, 0, -6];
          h = 60;
          d = 0;
          f = Qa - this.y;
          m = 0 - this.y;
          Ma.lineTo(t, r);
          e = r + l;
          for (i = t; i < n; i += h) {
            Ma.lineTo(i, Math.min(f, Math.max(m, e + o[d])));
            d = (d + 1) % o.length;
          }
          Ma.lineTo(n, r);
          Ma.lineTo(n, s);
          Ma.closePath();
          Ma.fill();
          if (i = $a("img/riverCurrent.png")) {
            e = -this.rectW / 2;
            c = 0;
            for (; c < 40; c++) {
              t = 100 / 120 * this.riverFlowSpeedX * 1000;
              t = (cs - this.spawnTime) % t / t;
              Ma.drawImage(i, e + t * 100, -this.rectH / 2, 100, this.rectH);
              e += 100;
            }
          }
          break;
        case $e:
          Ma.fillStyle = X;
          Ma.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          e = 20;
          ms(-this.rectW / 2 + e, -this.rectH / 2 + e, this.rectW / 2 - e, this.rectH / 2 - e, this.x, this.y);
          break;
        case rt:
          if (e) {
            Ti(0, 0, this.rad, this.getOutlineColor());
          } else {
            Ti(0, 0, this.rad - 1.5, re);
          }
          break;
        case ht:
          Ma.fillStyle = $;
          Ma.beginPath();
          Ma.arc(0, 0, Math.max(0, this.rad), 0, Math.PI * 2);
          Ma.fill();
          Ma.fillStyle = "#E4D04C";
          Ma.beginPath();
          Ma.arc(-5 + this.rPer * 10, -5 + this.rPer * 10, this.rad * 0.8, 0, Math.PI * 2);
          Ma.fill();
          break;
        case wt:
          this.drawOutlinedCircle("", K);
          break;
        case bt:
          if (i = $a("img/snowball.png")) {
            e = this.rad;
            Ma.rotate(this.rPer * Math.PI * 2);
            Ma.drawImage(i, -e, -e, e * 2, e * 2);
          } else {
            this.drawOutlinedCircle("", "white");
          }
          break;
        case pt:
          this.drawOutlinedCircle("", "orange");
          e = 0.15;
          i = (0.8 - e) * 0.5;
          e = e + i + i * Math.sin(Math.PI * 2 / 1 * (cs / 1000));
          Ma.save();
          Ma.globalAlpha *= e;
          Ti(0, 0, Math.max(0, this.rad), "#FFD300");
          Ma.restore();
          e = 0.5;
          i = (1 - e) * 0.5;
          e = e + i + i * Math.sin(Math.PI * 2 / 1 * (cs / 1000));
          if (i = $a(Math.trunc(cs / 300) % 2 == 1 ? "img/fire.png" : "img/fire2.png")) {
            n = this.rad * 0.3;
            s = this.rad * 2 * (2 + e * 2) / 3;
            r = this.rad * 2 * e;
            Ma.save();
            if (i) {
              Ma.globalAlpha = Ma.globalAlpha * this.onFireEffA * e;
              Ma.drawImage(i, 0 + s * -0.5, n + r * -0.95, s, r);
            }
            Ma.restore();
          }
          break;
        case et:
          this.drawAnimal(t);
          break;
        default:
          console.log("Unhandled obj " + this);
          console.log("rect? " + this.isRectangle + " pos " + this.x + "," + this.y);
          if (this.isRectangle) {
            Ma.fillStyle = "black";
            Ma.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);
          } else {
            this.drawOutlinedCircle("????", "black");
          }
      }
      if (this.flag_hurt) {
        Ma.fillStyle = "rgba(255,0,0,0.3)";
        Ma.beginPath();
        Ma.arc(0, 0, Math.max(0, this.rad - a), 0, Math.PI * 2);
        Ma.fill();
      }
      this.hpBarA += (this.hpBarA_n - this.hpBarA) * 0.04;
      if (this.hpBarA > 0.001) {
        this.hpPer += (this.hpPer_n - this.hpPer) * 0.1;
        i = Math.max(1, this.rad / 25);
        a = i * 20;
        e = i * 5;
        i = -this.rad - i * 10;
        Ma.globalAlpha *= this.hpBarA;
        Ma.fillStyle = "rgba(0,0,0,0.35)";
        Ma.fillRect(0 - a / 2, i - e / 2, a, e);
        Ma.fillStyle = "#16D729";
        Ma.fillRect(0 - a / 2, i - e / 2, this.hpPer / 100 * a, e);
      }
      Ma.restore();
    };
    this.drawChat = function () {
      if (!(this.chatLines.length < 1)) {
        Ma.save();
        Ma.font = "10px Arial";
        Ma.lineWidth = 1;
        Ma.textAlign = "center";
        Ma.textBaseline = "middle";
        var e = this.hpBarA > 0.01 ? -10 : 0;
        var t = [];
        for (var a = this.chatLines.length - 1; a >= 0; a--) {
          var i = this.chatLines[a];
          var n = (this.chatLines.length - 1 - a) * -13 + e;
          var s = cs > i.chatFadeT ? 0 : 1;
          i.chatA += (s - i.chatA) * 0.1;
          Ma.shadowOffsetX = 0;
          Ma.shadowOffsetY = 0;
          if (i.chatA < 0.02) {
            if (s < 0.02) {
              i.chatTxt = "";
            }
            t.push(a);
          } else {
            s = Ma.measureText(i.chatTxt).width;
            Ma.globalAlpha = i.chatA * 0.8;
            Ma.fillStyle = le(this.curBiome);
            Ma.fillRect(this.x - 1 - s / 2, n + this.y - this.rad - 10 - 5 - 1, s + 2, 12);
            Ma.fillStyle = "#F1C34C";
            if (!Bi) {
              Ma.shadowOffsetX = 1;
              Ma.shadowOffsetY = 1;
              Ma.shadowColor = "black";
            }
            Ma.globalAlpha = i.chatA;
            Ma.fillText(i.chatTxt, this.x, n + this.y - this.rad - 10);
          }
        }
        for (a = 0; a < t.length; a++) {
          this.chatLines.splice(t[a], 1);
        }
        Ma.restore();
      }
    };
    this.getOutlineColor = function () {
      if (this.alwaysPlainOutline) {
        return Y;
      } else if (this.isEdibleOutlined()) {
        return se;
      } else if (this.oType == et && _n[this.type - 1] > 0 && this.id != Ji) {
        return ne;
      } else {
        return le(this.curBiome);
      }
    };
    this.isEdibleOutlined = function () {
      if (this.oType == et) {
        return Un[this.type - 1] > 0 && this.id != Ji;
      } else {
        return Bn[this.oType - 1] > 0;
      }
    };
    this.gotChat = function (e) {
      this.chatLines.push({
        chatTxt: e,
        chatFadeT: cs + 4000,
        chatA: 0
      });
      if (this.chatLines.length > 5) {
        this.chatLines.splice(this.chatLines.length - 1, 1);
      }
    };
    this.drawOutlinedCircle = function (e, t) {
      var a = this.getOutlineColor();
      if (!Bi || a != Y) {
        Ti(0, 0, this.rad, a);
      }
      Ti(0, 0, Math.max(0, this.rad - 1.5), t);
    };
    this.drawAnimal = function (e) {
      var t = us(this.type);
      var a = t.aniCol;
      var i = t.skinName;
      var n = this.rad * 0.1;
      switch (this.type) {
        case Ue:
        case Le:
        case Be:
        case Se:
        case ye:
          n = this.rad * 0.16;
      }
      switch (this.type) {
        case Ue:
        case Le:
        case Be:
        case Se:
        case Ae:
        case Qe:
          if (this.flag_usingAbility) {
            i += "2";
          }
      }
      Ma.save();
      if (this.angle != 0) {
        Ma.rotate(this.angle);
      }
      var s = (cs - this.spawnTime) / 1000;
      var t = Math.sin(Math.PI * 2 / 2.5 * s) * 0.7;
      var r = this.flag_underWater || this.flag_usingAbility && (this.type == ue || this.type == Re || this.type == Fe) ? 0 : 1;
      this.underwaterA += (r - this.underwaterA) * 0.1;
      Ma.globalAlpha *= this.underwaterA;
      if (this.flag_eff_invincible) {
        var l = 0.3;
        var o = (1 - l) * 0.5;
        Ma.globalAlpha *= l + o + o * Math.sin(Math.PI * 2 / 1 * ((cs - this.spawnTime) / 1000));
      }
      this.nameA += (r - this.nameA) * 0.1;
      if (this.flag_iceSliding) {
        r = Math.sin(Math.PI * 2 / 0.75 * s) * 1;
        l = Ma.globalAlpha;
        Ma.globalAlpha *= 0.8 - r * 0.2;
        Ti(0, this.rad * 0.3, this.rad * (0.9 + r * 0.15), "#7BB7BB");
        Ti(0, -this.rad * 0.3, this.rad * (1.05 + r * 0.1), "#7BB7BB");
        Ma.globalAlpha = l;
      }
      if (!!this.flag_usingAbility && (this.type == ge || this.type == fe || this.type == Ve)) {
        r = Math.sin(Math.PI * 2 / 1.5 * s) * 1;
        l = Ma.globalAlpha;
        Ma.globalAlpha *= 0.8;
        Ti(0, this.rad * 0.3, this.rad * (0.9 + r * 0.12), "#7F582B");
        Ti(0, -this.rad * 0.3, this.rad * (1.05 + r * 0.09), "#7F582B");
        Ma.globalAlpha = l;
      }
      r = this.flag_eff_frozen ? 1 : 0;
      this.frozenEffA += (r - this.frozenEffA) * 0.1;
      if (this.frozenEffA > 0.01) {
        l = Ma.globalAlpha;
        Ma.globalAlpha *= this.frozenEffA;
        Ti(0, 0, this.rad + this.frozenEffA * 1.6, "white");
        Ma.globalAlpha = l;
      }
      t = 2 + t;
      l = this.getOutlineColor();
      if (Bi && l == Y) {
        t = 0;
      } else {
        Ti(0, 0, this.rad, l);
      }
      r = null;
      if (i && !Ui) {
        r = $a("./skins/" + i + ".png");
      }
      if (!r) {
        Ma.fillStyle = a;
        Ma.beginPath();
        Ma.arc(0, 0, Math.max(0, this.rad - t), 0, Math.PI * 2);
        Ma.fill();
      }
      if (this.type != he && this.type != oe && this.type != Ae) {
        s = (cs - this.spawnTime) / 1000;
        s = Math.sin(Math.PI * 2 / 5 * s) * 4;
        i = t * 2.5;
        o = Math.PI / 180;
        Ma.fillStyle = this.flag_tailBitten ? ne : Cn[this.type - 1] > 0 && this.id != Ji ? se : l;
        if (!Bi || Ma.fillStyle == Y) {
          Ma.beginPath();
          Ma.moveTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(o * 282.5));
          Ma.lineTo((this.rad - t + 1) * Math.cos((257.5 - i) * o), (this.rad - t + 1) * Math.sin(o * 257.5));
          Ma.lineTo((this.rad + n + t) * Math.cos((270 + s) * o), (this.rad + n + t) * Math.sin((270 + s) * o));
          Ma.lineTo((this.rad - t + 1) * Math.cos((282.5 + i) * o), (this.rad - t + 1) * Math.sin(o * 282.5));
          Ma.fill();
        }
        if (!Bi && (!r || !!this.flag_tailBitten)) {
          Ma.fillStyle = this.flag_tailBitten ? ne : a;
          Ma.beginPath();
          Ma.moveTo((this.rad - t) * Math.cos(o * 282.5), (this.rad - t) * Math.sin(o * 282.5));
          Ma.lineTo((this.rad - t) * Math.cos(o * 257.5), (this.rad - t) * Math.sin(o * 257.5));
          Ma.lineTo((this.rad + n) * Math.cos((270 + s) * o), (this.rad + n) * Math.sin((270 + s) * o));
          Ma.lineTo((this.rad - t) * Math.cos(o * 282.5), (this.rad - t) * Math.sin(o * 282.5));
          Ma.fill();
        }
      }
      if (r) {
        s = 500 / 340;
        n = this.rad - t;
        Ma.drawImage(r, -n * s, -n * s, n * 2 * s, n * 2 * s);
      }
      if (this.frozenEffA > 0.01) {
        Ma.save();
        Ma.globalAlpha = Ma.globalAlpha * 0.3 * this.frozenEffA;
        Ti(0, 0, Math.max(0, this.rad - t), "white");
        Ma.restore();
      }
      if (this.flag_hurt) {
        Ma.fillStyle = "rgba(255,0,0,0.3)";
        Ma.beginPath();
        Ma.arc(0, 0, Math.max(0, this.rad - t), 0, Math.PI * 2);
        Ma.fill();
      }
      if (this.type == we) {
        Ma.fillStyle = "#E5CF79";
        Ma.beginPath();
        n = this.rad - t;
        s = n * 1;
        Ma.moveTo(n * -0.16, s);
        Ma.lineTo(0, n * (this.flag_usingAbility ? 1.41 : 0.7));
        Ma.lineTo(n * 0.153, s);
        Ma.closePath();
        Ma.fill();
      }
      if (!r) {
        if (this.type == Pe) {
          Ma.fillStyle = a;
          Ma.beginPath();
          Ma.arc(this.rad * 0.2, this.rad * 0.7, Math.max(0, this.rad * 0.55 - t), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(-this.rad * 0.2, this.rad * 0.7, Math.max(0, this.rad * 0.55 - t), 0, Math.PI * 2);
          Ma.fill();
          Ma.fillStyle = "#8C96A6";
          Ma.beginPath();
          Ma.arc(-(this.rad * 0.29), this.rad * 0.7 + 10, Math.max(0, 3 - t / 2), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.29, this.rad * 0.7 + 10, Math.max(0, 3 - t / 2), 0, Math.PI * 2);
          Ma.fill();
        } else if (this.type == pe) {
          Ma.fillStyle = "#B5AE4C";
          Ma.beginPath();
          Ma.arc(this.rad * 0.1, this.rad * -0.45, this.rad * 0.13, 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * -0.4, this.rad * -0.2, this.rad * 0.12, 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.15, this.rad * -0.25, this.rad * 0.16, 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(this.rad * 0.63, this.rad * -0.4, this.rad * 0.1, 0, Math.PI * 2);
          Ma.fill();
        } else if (this.type == fe) {
          Ma.fillStyle = "#000000";
          n = Math.max(0, this.rad - t);
          a = 0;
          Ma.beginPath();
          Ma.moveTo(-n * 1, 0 + a);
          Ma.lineTo(0, -n * 0.2 + a);
          Ma.lineTo(n * 1, 0 + a);
          Ma.lineTo(0, n * 0.1 + a);
          Ma.closePath();
          Ma.fill();
          a -= this.rad * 0.3;
          Ma.beginPath();
          Ma.moveTo(-n * 0.8, 0 + a);
          Ma.lineTo(0, -n * 0.2 + a);
          Ma.lineTo(n * 0.8, 0 + a);
          Ma.lineTo(0, n * 0.1 + a);
          Ma.closePath();
          Ma.fill();
          a -= this.rad * 0.3;
          Ma.beginPath();
          Ma.moveTo(-n * 0.7, 0 + a);
          Ma.lineTo(0, -n * 0.1 + a);
          Ma.lineTo(n * 0.7, 0 + a);
          Ma.lineTo(0, n * 0.1 + a);
          Ma.closePath();
          Ma.fill();
        } else if (this.type == ge) {
          Ma.fillStyle = "#E5C870";
          Ma.beginPath();
          a = -this.rad * 0.35;
          s = -this.rad * 0.1;
          Ma.moveTo(a, s);
          Ma.lineTo(a + this.rad * 0.25, s);
          Ma.lineTo(a - this.rad * 0.35, s - 15);
          Ma.fill();
          Ma.beginPath();
          a = this.rad * 0.35;
          s = -this.rad * 0.1;
          Ma.moveTo(a, s);
          Ma.lineTo(a - this.rad * 0.25, s);
          Ma.lineTo(a + this.rad * 0.35, s - 15);
          Ma.fill();
        } else if (this.type == be) {
          Ma.fillStyle = "black";
          Ma.beginPath();
          Ma.arc(0, this.rad - 3, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ma.fill();
        } else if (this.type == ue) {
          Ma.fillStyle = "#FA2E8D";
          Ma.beginPath();
          Ma.arc(0, this.rad - 3, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ma.fill();
          n = Math.max(0, this.rad + 2.5 - t);
          Ma.fillStyle = "#F64455";
          Ma.beginPath();
          a = -n * 0.707;
          s = n * 0.707;
          Ma.arc(a, s, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(a + 2, s + 2, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ma.fill();
          a = n * 0.707;
          s = n * 0.707;
          Ma.arc(a, s, Math.max(0, 5 - t / 2), 0, Math.PI * 2);
          Ma.fill();
          Ma.beginPath();
          Ma.arc(a - 2, s + 2, Math.max(0, 4 - t / 2), 0, Math.PI * 2);
          Ma.fill();
        }
      }
      if (!r) {
        Ma.save();
        a = Math.max(1, this.rad / 25);
        Ma.scale(a, a);
        this.drawEyeAtPos(6, this.rad * 0.32);
        this.drawEyeAtPos(-6, this.rad * 0.32);
        Ma.restore();
      }
      if (this.flag_underWater || this.flag_usingAbility && this.type == ue) {
        Ma.save();
        Ma.globalAlpha = 1 - this.underwaterA;
        s = (cs - this.spawnTime) / 1000;
        r = Math.sin(Math.PI * 2 / 1.5 * s) * 1;
        if (this.flag_underWater) {
          Ma.globalAlpha *= 0.5;
          if (this.type == ye) {
            Ma.globalAlpha = 0.3;
          }
        }
        Ma.fillStyle = this.flag_underWater ? "#4E71C3" : "#7E6A35";
        a = this.flag_underWater ? this.rad * 0.15 : this.rad * 0.1;
        Ma.beginPath();
        Ma.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        if (this.type == Te) {
          Ma.globalAlpha = 1 - this.underwaterA;
          Ma.fillStyle = "#73799b";
          Ma.beginPath();
          n = this.rad;
          s = n * 0.25;
          Ma.moveTo(n * -0.07, s);
          Ma.lineTo(0, s - n * 0.5);
          Ma.lineTo(n * 0.35, s);
          Ma.closePath();
          Ma.fill();
        } else if (this.type == Ce) {
          Ti(0, this.rad * 0.2, this.rad * 0.12, "#4D4D4D");
        } else if (this.type == _e) {
          Ma.globalAlpha = 1 - this.underwaterA;
          Ti(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#598b30");
          Ti(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#64a034");
          Ti(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#64a034");
          Ti(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#598b30");
        }
        Ma.restore();
      }
      if (this.flag_usingAbility && this.type == Re) {
        Ma.save();
        Ma.globalAlpha = 1 - this.underwaterA;
        if (typeof this.octoDrawObj == "undefined") {
          this.octoDrawObj = new Ai(0, vt, 0, 0, this.rad);
        }
        this.octoDrawObj.oType = this.octoDisguiseObjT;
        if (this.octoDisguiseObjT == et) {
          this.octoDrawObj.type = fe;
          this.octoDrawObj.nRad = this.rad;
        } else if (this.octoDisguiseObjT == vt) {
          this.octoDrawObj.nRad = 25;
        } else if (this.octoDisguiseObjT == At) {
          this.octoDrawObj.nRad = 17;
        } else if (this.octoDisguiseObjT == tt) {
          this.octoDrawObj.curBiome = Pa;
        } else {
          this.octoDrawObj.nRad = this.rad;
        }
        this.octoDrawObj.draw();
        Ma.restore();
      }
      if (this.flag_usingAbility && this.type == Fe) {
        Ma.save();
        Ma.globalAlpha = 1 - this.underwaterA;
        if (a = $a("img/snowball.png")) {
          n = this.rad;
          Ma.rotate(this.rPer * Math.PI * 2);
          Ma.drawImage(a, -n, -n, n * 2, n * 2);
        } else {
          this.drawOutlinedCircle("", "white");
        }
        Ma.restore();
      }
      Ma.restore();
      r = this.flag_eff_stunned ? 1 : 0;
      this.stunA += (r - this.stunA) * 0.1;
      if (this.stunA > 0.01) {
        Ma.save();
        a = 2.5;
        a = cs % (a * 1000) / (a * 1000);
        Ma.rotate(a * 2 * Math.PI);
        Ma.globalAlpha *= this.stunA;
        a = this.rad * 0.2;
        s = (cs - this.spawnTime) / 1000;
        r = (0.5 + a * 0.07) * Math.sin(Math.PI * 2 / 1 * s);
        Ma.fillStyle = "#F3D444";
        Ma.beginPath();
        Ma.arc(this.rad * -0.22, this.rad * -0.22, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * 0.22, this.rad * -0.22, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * 0.22, this.rad * 0.22, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(this.rad * -0.22, this.rad * 0.22, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        Ma.restore();
      }
      r = this.flag_eff_onFire ? 1 : 0;
      this.onFireEffA += (r - this.onFireEffA) * 0.1;
      if (this.onFireEffA > 0.01 && (l = 0.15, o = (0.4 - l) * 0.5, a = l + o + o * Math.sin(Math.PI * 2 / 1 * (cs / 1000)), Ma.save(), Ma.globalAlpha = Ma.globalAlpha * a * this.onFireEffA, Ti(0, 0, Math.max(0, this.rad - t), "orange"), Ma.restore(), l = 0.5, o = (1 - l) * 0.5, r = l + o + o * Math.sin(Math.PI * 2 / 1 * (cs / 1000)), t = Math.trunc(cs / 300) % 2, a = $a(t == 1 ? "img/fire.png" : "img/fire2.png"), t = $a(t == 0 ? "img/fire.png" : "img/fire2.png"), a || t)) {
        n = 0 - this.rad * 0.3;
        s = this.rad * 0.2 - this.rad * 0.3;
        i = this.rad * 1 * (2 + r * 2) / 3;
        l = this.rad * 1 * r;
        Ma.save();
        if (a) {
          Ma.globalAlpha = Ma.globalAlpha * this.onFireEffA * r;
          Ma.drawImage(a, n + i * -0.5, s + l * -0.95, i, l);
        }
        if (t) {
          Ma.globalAlpha = Ma.globalAlpha * this.onFireEffA * r;
          Ma.drawImage(t, n + this.rad * 0.5 + i * -0.5, s + this.rad * 0.5 + l * -0.95, i, l);
        }
        Ma.restore();
      }
      if (this.frozenEffA > 0.01) {
        Ma.save();
        a = 7;
        a = cs % (a * 1000) / (a * 1000);
        Ma.rotate(a * 2 * Math.PI);
        Ma.globalAlpha *= this.frozenEffA;
        a = this.rad * 0.2;
        s = (cs - this.spawnTime) / 1000;
        r = (0.5 + a * 0.07) * Math.sin(Math.PI * 2 / 1 * s);
        Ma.fillStyle = "white";
        t = this.rad * 0.27;
        Ma.beginPath();
        Ma.arc(-t, -t, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(t, -t, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(t, t, Math.max(0, a + r), 0, Math.PI * 2);
        Ma.fill();
        Ma.beginPath();
        Ma.arc(-t, t, Math.max(0, a - r), 0, Math.PI * 2);
        Ma.fill();
        Ma.restore();
      }
      if (this.flag_lowWat) {
        l = 0.2;
        o = (0.8 - l) * 0.5;
        a = l + o + o * Math.sin(Math.PI * 2 / 1.2 * (cs / 1000));
        Ma.save();
        Ma.globalAlpha = a;
        Ma.fillStyle = K;
        Ma.beginPath();
        Ma.arc(0, this.rad + 5, 5, 0, Math.PI * 2);
        Ma.fill();
        Ma.restore();
      }
      Ma.save();
      if (this.name && this.nameTXT && !Ci) {
        Ma.globalAlpha = this.dead ? Ma.globalAlpha * (1 - e) : 1;
        Ma.globalAlpha *= this.nameA;
        this.nameTXT.x = 0;
        this.nameTXT.y = this.rad + 9;
        this.nameTXT.draw();
      }
      Ma.restore();
    };
    this.drawEyeAtPos = function (e, t) {
      Ma.beginPath();
      Ma.arc(e, t, 4.5, 0, Math.PI * 2);
      Ma.fillStyle = "black";
      Ma.fill();
      Ma.beginPath();
      Ma.fillStyle = "white";
      Ma.arc(e - 2, t - 1, 0.99, 0, Math.PI * 2);
      Ma.fill();
    };
    this.moveUpdate = function () {
      var e = (cs - this.updateTime) / 1000 / j;
      var e = e < 0 ? 0 : e > 1 ? 1 : e;
      if (this.dead && e >= 1) {
        Wn.push(this);
      }
      this.x = e * (this.nx - this.ox) + this.ox;
      this.y = e * (this.ny - this.oy) + this.oy;
      this.rad += (this.nRad - this.rad) * 0.1;
      if (this.oType == et) {
        var t = this.angleDelta * 0.1;
        this.angleDelta -= t;
        this.angle += t;
      }
      return Math.min(1, e);
    };
  }
  Mi.prototype = {
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
  function Mi() {}
  function Ti(e, t, a, i) {
    Ma.fillStyle = i;
    Ma.beginPath();
    Ma.arc(e, t, Math.max(0, a), 0, Math.PI * 2);
    Ma.fill();
  }
  function xi(e) {
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
      return fi(t);
    };
  }
  function Si(e) {
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
      e = ui(e);
      len = e.length;
      this.writeUInt16(e.length);
      for (var t = 0; t < len; t++) {
        this.writeUInt8(e.charCodeAt(t));
      }
    };
  }
  var Ei;
  var Di = 0;
  function _i() {
    if (hs()) {
      theWs = Jn;
      Jn = null;
      theWs.close();
    }
    if (Di > 1) {
      C += 1;
      if (C > h[U].length - 1) {
        C = 0;
      }
      B = l[C];
      U = B.region;
      ns();
    }
    tn = false;
    document.getElementById("connecting").style.visibility = "visible";
    zs();
    console.log("Connecting to " + B.name + "...");
    var e = window.location.protocol === "https:" ? "wss://" : "ws://";
    var e = e + B.serverConnURL + ":" + (e == "wss://" ? 7021 : 7020);
    console.log("connecting to " + e);
    Jn = new WebSocket(e);
    Jn.binaryType = "arraybuffer";
    Jn.onopen = function () {
      Di = 0;
      document.getElementById("startMenu").style.visibility = "visible";
      document.getElementById("connecting").style.visibility = "hidden";
    };
    Jn.onmessage = function (e) {
      ls(new DataView(e.data));
    };
    Jn.onclose = function (e) {
      if (this == Jn) {
        Di += 1;
        Zi = Ki = Qi = false;
        if (!tn) {
          Ei = setTimeout(function () {
            _i();
          }, 2000);
          document.getElementById("connecting").style.visibility = "visible";
        }
      }
    };
    Jn.onerror = function () {
      console.log("socket error!");
    };
  }
  var Ui = false;
  var Ci = false;
  var Bi = false;
  var Ni = false;
  var Ri = false;
  var Oi = false;
  var Wi = ba;
  if (window.localStorage) {
    Ui = window.localStorage.getItem("options_noImages") + 0 > 0;
    document.getElementById("options_noImages").checked = Ui;
    Ci = window.localStorage.getItem("options_noNames") + 0 > 0;
    document.getElementById("options_noNames").checked = Ci;
    Bi = window.localStorage.getItem("options_lowGraphics") + 0 > 0;
    document.getElementById("options_lowGraphics").checked = Bi;
    Ni = window.localStorage.getItem("options_noJoystick") + 0 > 0;
    document.getElementById("options_noJoystick").checked = Ni;
    Ni = window.localStorage.getItem("options_noJoystick") + 0 > 0;
    document.getElementById("options_noJoystick").checked = Ni;
    Ri = window.localStorage.getItem("options_leftHanded") + 0 > 0;
    if (D = document.getElementById("options_leftHanded")) {
      D.checked = Ri;
    }
    Oi = window.localStorage.getItem("options_musicMuted") + 0 > 0;
    Na();
  }
  var Fi = 0;
  var Hi = 0;
  var Li = +new Date();
  var zi = "... fps";
  var Gi = +new Date();
  var ji = 0;
  var Xi;
  var Yi = "...";
  var Vi = 0;
  var Ji = 0;
  var qi = oe;
  var Ki = false;
  var Zi = false;
  var Qi = false;
  var $i = false;
  var en = +new Date();
  var tn = false;
  var an = false;
  var nn = water = 100;
  var sn = xp = xpPer = 0;
  var rn = new ki(16, "white");
  var ln = new ki(16, "white");
  var on = new ki(16, "white");
  var hn = new ki(10, "white");
  on.multiLine = true;
  on.renderScale = 1;
  hn.renderScale = 1;
  var cn = 0;
  var dn = 0;
  var gn = "";
  var un = [];
  var fn = new vi();
  fn.onButtonTouchStart = function () {
    ir($s, true);
  };
  fn.onButtonTouchEnd = function () {
    ir($s, false);
    if (pn.pressed && pn.pressedTouchID == -1) {
      pn.pressed = false;
      ir(Qs, false);
    }
  };
  un.push(fn);
  var mn = new vi();
  mn.isMiniRechargeBut = true;
  mn.touchEnabled = false;
  un.push(mn);
  var pn = new Ii("RUN");
  pn.onButtonTouchStart = function () {
    ir(Qs, true);
  };
  pn.onButtonTouchEnd = function () {
    ir(Qs, false);
  };
  un.push(pn);
  var bn = new Ii("CHAT");
  bn.onButtonTouchStart = function () {
    Js();
  };
  un.push(bn);
  var yn = new Ii("UP↑");
  yn.onButtonTouchStart = function () {
    ir(er, true);
  };
  un.push(yn);
  var wn = new Ii("DOWN↓");
  wn.onButtonTouchStart = function () {
    ir(tr, true);
  };
  un.push(wn);
  var Pn = false;
  var In = -1;
  var vn = 0;
  var kn = 0;
  var An = 0;
  var Mn = 0;
  var Tn = 50;
  var xn = 0;
  var Sn = 0;
  var En = 0;
  joystickDistF_n = joystickDistF = 0;
  var Dn = 100;
  var _n = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var Un = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var Cn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var Bn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
  var Nn = false;
  var Rn = [];
  var On = {};
  var Wn = [];
  var Fn = false;
  var Hn = 0;
  var Ln = 1;
  var zn = false;
  var Gn = 0;
  var jn = 1;
  var Xn = false;
  var Yn = +new Date();
  Ea("audio/click.mp3");
  var Vn = +Date.now();
  var Jn;
  Zs();
  dr();
  if (A) {
    console.log("Party link detected! Verifying...");
    var M = ni(M);
    var qn = false;
    for (var c = 0; c < l.length; c++) {
      if (l[c].ip == M && M.length > 5) {
        var B = l[c];
        var C = h[B.region].indexOf(B);
        var U = B.region;
        var Kn = document.getElementById("spawnXpLabel");
        Kn.style.display = "block";
        Kn.style.opacity = 1;
        Kn.textContent = "Joining party server...";
        A = qn = true;
        console.log("Successfuly found party server...");
        break;
      }
    }
    if (qn) {
      console.log("Connecting to party server...");
      rs();
      ss();
      ns();
      _i();
    } else {
      alert("This server for this party link is no longer supported!  Joining auto server...");
      M = null;
      A = false;
      H();
    }
  } else {
    H();
  }
  var Zn = false;
  function Qn() {
    var e = window.location.protocol === "https:" ? "wss://" : "ws://";
    masterWs = new WebSocket(e + n + ":" + (e == "wss://" ? 7501 : 7500));
    masterWs.binaryType = "arraybuffer";
    masterWs.onopen = function () {
      var e = new Si(1);
      e.writeUInt8(200);
      masterWs.send(e.dataView.buffer);
    };
    masterWs.onmessage = function (e) {
      e = new xi(new DataView(e.data));
      if (e.readUInt8() == 100) {
        Zn = true;
        var t = e.readUInt32();
        console.log("MasterServer: " + t + " total players online!");
        hn.setText(bi(t) + " players");
        for (var t = e.readUInt16(), a = 0; a < t; a++) {
          var i = ni(e.readUInt32());
          var n = e.readUInt16();
          for (var s = 0; s < l.length; s++) {
            if (l[s].ip == i) {
              l[s].playersCount = n == 60000 ? -1 : n;
              break;
            }
          }
        }
      }
      rs();
      ss();
    };
    masterWs.onerror = function (e) {
      console.log("MasterServer: error connecting!");
    };
    masterWs.onclose = function (e) {
      console.log("Disconnected from master server!");
    };
  }
  Qn();
  var $n = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  var es = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  if (($n || es) && !w) {
    var ts = false;
    if (window.localStorage) {
      ts = window.localStorage.getItem("oldVisitor") > 0;
      try {
        window.localStorage.setItem("oldVisitor", 1);
      } catch (e) {
        ts = true;
      }
    }
    if (!ts) {
      if ($n) {
        window.location.href = "https://itunes.apple.com/us/app/mope.io/id1086471119?ls=1&mt=8";
      } else if (es) {
        window.location.href = "https://play.google.com/store/apps/details?id=tatarnykov.stan.mopeioandroid";
      }
    }
  }
  document.getElementById("serverSelect").onchange = as;
  function as() {
    C = document.getElementById("serverSelect").selectedIndex - 1;
    B = h[U][C];
    ns();
    console.log("Server changed...");
    if (hs()) {
      Jn.close();
    }
    A = false;
    document.getElementById("spawnXpLabel").style.opacity = 0;
    T = M = null;
    _i();
  }
  document.getElementById("regionSelect").onchange = is;
  function is() {
    console.log("Region changed...");
    var e = document.getElementById("regionSelect").selectedIndex - 1;
    U = o[e];
    if (hs()) {
      Jn.close();
    }
    A = false;
    T = M = null;
    document.getElementById("spawnXpLabel").style.opacity = 0;
    G();
  }
  function ns() {
    document.getElementById("serverSelect").selectedIndex = C + 1;
  }
  function ss() {
    for (var e = document.getElementById("serverSelect"); e.lastChild;) {
      e.removeChild(e.lastChild);
    }
    var t = document.createElement("option");
    t.text = "Choose a server:";
    t.disabled = true;
    e.add(t);
    var a = -1;
    for (var i = h[U], n = 0; n < i.length; n++) {
      t = document.createElement("option");
      t.text = i[n].name + " [" + (i[n].playersCount < 0 ? "..." : i[n].playersCount) + " players " + (i[n].playersCount >= r ? "-FULL!" : "") + "]";
      if (i[n].ip == B.ip) {
        a = n;
      }
      e.add(t);
    }
    if (a == -1) {
      a = 0;
    }
    e.selectedIndex = a + 1;
  }
  function rs() {
    for (var e = document.getElementById("regionSelect"); e.lastChild;) {
      e.removeChild(e.lastChild);
    }
    var t = document.createElement("option");
    t.text = "Choose a region:";
    t.disabled = true;
    e.add(t);
    var a = -1;
    for (var i = 0; i < o.length; i++) {
      var n = o[i];
      for (var t = h[n], s = 0; s < t.length; s++);
      t = document.createElement("option");
      t.text = n;
      if (n == U) {
        a = i;
      }
      e.add(t);
    }
    if (a == -1) {
      a = 0;
    }
    e.selectedIndex = a + 1;
  }
  function ls(e) {
    e = new xi(e);
    switch (e.readUInt8()) {
      case 1:
        nPlayers = e.readUInt16();
        hn.setText(bi(nPlayers) + " players");
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
          Ls(true);
        }
        break;
      case 2:
        var t = e.readUInt8();
        if (t == 100) {
          document.getElementById("startMenuWrapper").style.display = "none";
        }
        if (t == 1) {
          spectating = e.readUInt8() == 2;
          Ki = !spectating;
          Zi = spectating;
          Qi = true;
          if (!$i) {
            Ba(Ua);
            document.getElementById("onconnectDiv").style.visibility = "visible";
          }
          $i = true;
          Ji = spectating ? -1 : e.readUInt32();
          myRoomID = e.readUInt16();
          Za = e.readUInt16();
          Qa = e.readUInt16();
          gameMode = e.readUInt8();
          Oa(gameMode);
          Fa = camx_o = camx_n = e.readUInt16() / 4;
          camy = camy_o = camy_n = e.readUInt16() / 4;
          camzoom_n = e.readUInt16() / 1000;
          Wa = camzoom_n * 1.2;
          if (!spectating) {
            ys(e);
          }
          if (!spectating) {
            document.getElementById("startMenuWrapper").style.display = "none";
            Ba(Ca);
            if (!w) {
              window.onbeforeunload = function (e) {
                return "You're alive in a game, close mope.io?";
              };
            }
          }
          if (!spectating && (Pr += 1, pr += 1, window.localStorage)) {
            try {
              window.localStorage.setItem("gamesSinceAd", pr);
            } catch (e) {}
          }
          if (A) {
            e = document.getElementById("spawnXpLabel");
            e.style.display = "block";
            e.style.opacity = 1;
            e.textContent = "Joined party server :)";
          }
          dr();
        } else if (t == 0) {
          e = document.getElementById("spawnXpLabel");
          e.style.display = "block";
          e.style.opacity = 1;
          e.textContent = "Error: this server is full!";
          A = false;
          var i = B;
          setTimeout(function () {
            if (!Ki && B == i) {
              Di = 100;
              _i();
            }
          }, 1000);
        } else if (t == 2) {
          e = document.getElementById("spawnXpLabel");
          e.style.display = "block";
          e.style.opacity = 1;
          e.textContent = "Error: link is invalid/expired!";
          A = false;
          e = document.location.href;
          e = si("l", e);
          e = si("s", e);
          window.history.pushState("", document.title, e);
          alert("Error, your mope.io party link is invalid/ expired! Joining auto server...");
          setTimeout(function () {
            if (!Ki) {
              Jn.close();
            }
          }, 2000);
        }
        break;
      case 24:
        t = e.readUInt8();
        if (t == 5) {
          Ds = false;
        }
        if (t == 0 || t == 1) {
          var n = t == 1;
          var s = e.readUInt8();
          var t = e.readUInt8();
          Ds = true;
          _s = 0;
          Us = [];
          Cs = n;
          Bs = +new Date();
          Ns = Bs + s * 1000;
          for (n = 0; n < t; n++) {
            var s = e.readUInt8();
            var r = e.readUInt8();
            var s = new wi(0, 0, 100, 100, s, r);
            Us.push(s);
          }
        }
        ks = +new Date();
        break;
      case 8:
        t = e.readUInt16();
        s = e.readUInt8();
        lbData = [];
        for (n = 0; n < s; ++n) {
          lbData.push({
            rank: e.readUInt16(),
            name: e.readString(),
            score: e.readUInt32()
          });
        }
        ws(lbData, 0, t);
        break;
      case 10:
        nPlayers = e.readUInt16();
        hn.setText(bi(nPlayers) + " players");
        break;
      case 18:
        r = e.readUInt8();
        Dn = e.readUInt32();
        Is = us(r).upgradeText;
        vs = "white";
        ks = +new Date() + 9000;
        if (!Nn) {
          Nn = true;
          _n = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          Un = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          Cn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
          Bn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        }
        _n = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        for (var l = e.readUInt8(), t = 0; t < l; t++) {
          _n[e.readUInt8() - 1] = 1;
        }
        n = Un;
        Un = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          Un[e.readUInt8() - 1] = 1;
        }
        Cn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          Cn[e.readUInt8() - 1] = 1;
        }
        s = Bn;
        Bn = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 0);
        l = e.readUInt8();
        for (t = 0; t < l; t++) {
          Bn[e.readUInt8() - 1] = 1;
        }
        As = [];
        Es = r == oe || r == ve;
        for (t = 0; t < Un.length; t++) {
          if (Un[t] > 0 && n[t] == 0) {
            e = new Ai(0, et, 0, 0, 35);
            e.type = t + 1;
            As.push(e);
          }
        }
        for (t = 0; t < Bn.length; t++) {
          if (Bn[t] > 0 && s[t] == 0) {
            e = new Ai(0, t + 1, 0, 0, 35);
            As.push(e);
          }
        }
        Ms = +new Date() + 9000;
        Ts = 0;
        if (As.length > 0) {
          Ss = 1.2;
          e = Math.max(0, As.length - 1) * 45;
          xs = e + 40;
          t = 0;
          for (; t < As.length; t++) {
            n = As[t];
            n.x = n.ox = n.nx = 0 - e / 2 + t / Math.max(1, As.length - 1) * e;
            n.y = n.oy = n.ny = 0;
            n.nRad = 20;
          }
        }
        break;
      case 14:
        var t = e.readUInt8();
        var o = e.readUInt32();
        Is = t == 1 ? "Oh no, You were eaten! \n Watch out for red-circled players!" : t == 2 ? "Oh no, You died from a tail-bite!\n Watch your tail!" : t == 4 ? "You died of thirst :( Don't let your water run out!" : t == 13 ? "You died from burning! (Get to water when on fire!)" : "You died! Watch your health!";
        vs = "#F1C34C";
        ks = +new Date() + 3500;
        Ki = false;
        Zi = true;
        Ds = false;
        cr();
        try {
          if (!w) {
            setTimeout(factorem.refreshAds.bind(factorem, null, true), 800);
          }
        } catch (e) {}
        window.setTimeout(function () {
          if (!Ki) {
            if (b) {
              fr();
            }
            if (y) {
              mr();
            }
            document.getElementById("startMenuWrapper").style.display = "block";
            Ba(Ua);
            gn = o > 0 ? "You'll spawn with +" + yi(o) + " XP!" : "";
            dn = 0;
            var e = document.getElementById("spawnXpLabel");
            e.style.opacity = 0;
            if (gn) {
              setTimeout(function () {
                if (!Ki) {
                  e.style.display = "block";
                  e.style.opacity = 1;
                }
              }, 1000);
            }
            document.getElementById("spawnXpLabel").textContent = gn;
            if (!w) {
              window.onbeforeunload = null;
            }
          }
        }, 2000);
        break;
      case 4:
        ds(e);
        break;
      case 19:
        t = e.readUInt32();
        if (t = On[t]) {
          e = e.readString();
          t.gotChat(e);
        }
        break;
      case 22:
        e = e.readString();
        t = ii(B.ip);
        Gs("mope.io/?s=" + t + "&l=" + e);
        break;
      case 23:
        t = e.readUInt8();
        if (Ki) {
          console.log("event msg");
          ks = cs + 3500;
          switch (t) {
            case 255:
              Is = e.readString();
              break;
            case 2:
              Is = "Ouch! Your tail got bitten!";
              break;
            case 12:
              Is = "You've been stung by a jellyfish!";
              break;
            case 3:
              Is = "ZAP! You've been shocked by a STINGRAY!";
              break;
            case 8:
              Is = "You've been inked!";
              break;
            case 5:
              Is = "Oh no! Escape the kraken's pull!";
              break;
            case 6:
              Is = "Ouch! Pufferfish are pointy!";
              break;
            case 7:
              Is = "That's an octopus in disguise!";
              break;
            case 9:
              Is = "Brrr! You've been frozen!";
              break;
            case 10:
              Is = "Ahh! The wolf's howl scared you!";
              break;
            case 11:
              Is = "Ouch! A VERY LOUD sound hit you!";
              break;
            case 13:
              Is = "Ah! You're on fire!";
              break;
            case 14:
              Is = "BAM! You got kicked by a donkey!";
              break;
            case 16:
              Is = "Ouch! You're getting dragged by a croc!";
              break;
            case 17:
              Is = "A fox DUG you out of the hole!";
              break;
            case 18:
              Is = "A wave has swept you away!";
          }
        }
        break;
      case 25:
        t = e.readUInt8() > 0;
        e = e.readUInt8() / 10;
        if (t) {
          Gn = e * 1000;
          jn = +new Date() + e * 1000;
          zn = true;
        } else {
          Hn = e * 1000;
          Ln = +new Date() + e * 1000;
          Fn = true;
        }
    }
  }
  function os(e) {
    Jn.send(e.dataView.buffer);
  }
  function hs() {
    return Jn != null && Jn.readyState == Jn.OPEN;
  }
  var cs = +new Date();
  var Vn = +new Date();
  function ds(e) {
    Vn = cs = +new Date();
    camx_o = Fa;
    camy_o = camy;
    camx_n = e.readUInt16() / 4;
    camy_n = e.readUInt16() / 4;
    camzoom_n = e.readUInt16() / 1000;
    var t = e.readUInt8();
    var a = hi(t, 0);
    var i = hi(t, 1);
    var n = hi(t, 2);
    Xn = hi(t, 3);
    an = hi(t, 7);
    if (!a) {
      var a = Fn = abil_active = false;
      var s = Lt;
      if (i) {
        a = hi(t, 4);
        Fn = hi(t, 5);
        abil_active = hi(t, 6);
        s = e.readUInt8();
      }
      t = zn = abil_dive_active = false;
      if (n) {
        var r = e.readUInt8();
        var t = hi(r, 0);
        zn = hi(r, 1);
        abil_dive_active = hi(r, 2);
      }
      if (Xn) {
        mn.abil_usable = a;
        mn.abil_recharging = Fn;
        mn.abil_possible = i;
        mn.abil_active = abil_active;
        mn.abil_Type = s;
        fn.abil_usable = t;
        fn.abil_recharging = zn;
        fn.abil_possible = n;
        fn.abil_active = abil_dive_active;
        fn.abil_Type = Ft;
        if (zn) {
          fn.abil_rechargeTotalT = Gn;
          fn.abil_rechargeEndT = jn;
        }
        if (Fn) {
          mn.abil_rechargeTotalT = Hn;
          mn.abil_rechargeEndT = Ln;
        }
      } else {
        fn.abil_usable = a;
        fn.abil_recharging = Fn;
        fn.abil_possible = i;
        fn.abil_active = abil_active;
        fn.abil_Type = s;
        mn.abil_usable = t;
        mn.abil_recharging = zn;
        mn.abil_possible = n;
        mn.abil_active = abil_dive_active;
        mn.abil_Type = Ft;
        if (Fn) {
          fn.abil_rechargeTotalT = Hn;
          fn.abil_rechargeEndT = Ln;
        }
        if (zn) {
          mn.abil_rechargeTotalT = Gn;
          mn.abil_rechargeEndT = jn;
        }
      }
      nn = e.readUInt8();
      xp = e.readUInt32();
      sn = e.readUInt8();
    }
    i = e.readUInt16();
    for (a = 0; a < i; a++) {
      var s = e.readUInt8();
      var l = e.readUInt32();
      var o = e.readUInt16() / 4;
      var h = e.readUInt16() / 4;
      var c = e.readUInt16() / 4;
      var t = e.readUInt8();
      var n = hi(t, 0);
      var d = hi(t, 1);
      var r = hi(t, 3) * 2 + hi(t, 2) * 1;
      var t = null;
      if (n) {
        t = On[e.readUInt32()];
      }
      n = new Ai(l, s, h, c, o);
      o = On[l];
      delete On[l];
      o = Rn.indexOf(o);
      if (o != -1) {
        Rn.splice(o, 1);
      }
      On[l] = n;
      Rn.push(n);
      if (t) {
        n.updateTime = cs;
        n.nx = n.x;
        n.ny = n.y;
        n.ox = t.x;
        n.oy = t.y;
        n.x = t.x;
        n.y = t.y;
      }
      n.curBiome = r;
      if (s == et) {
        t = e.readUInt8();
        r = e.readString();
        if (t == Qe) {
          console.log("Snail nick is '" + r + "', len " + r.length);
        }
        n.type = t;
        n.setName(r ? r : "mope.io");
      }
      if (d) {
        n.isRectangle = true;
        n.rectW = e.readUInt16();
        n.rectH = e.readUInt16();
      }
      if (s == gt) {
        n.type = e.readUInt8();
        if (n.type == la || n.type == oa || n.type == pa) {
          t = e.readUInt8() * 3 + 180;
          n.angle = li(t);
        }
        if (n.type == Qt || n.type == $t || n.type == pa || n.type == sa || n.type == ca) {
          n.rad = n.oRad = 0;
        }
      }
      if (s == Wt) {
        t = e.readUInt8();
        n.riverFlowSpeedX = t == 0 ? 1 : -1;
      }
    }
    i = e.readUInt16();
    for (a = 0; a < i; a++) {
      l = e.readUInt32();
      h = e.readUInt16() / 4;
      c = e.readUInt16() / 4;
      o = e.readUInt16() / 10;
      if (n = On[l]) {
        n.updateTime = cs;
        n.ox = n.x;
        n.oy = n.y;
        n.nx = h;
        n.ny = c;
        n.oRad = n.rad;
        n.nRad = o;
      }
      if (n && n.oType == et) {
        s = e.readUInt8();
        d = e.readUInt8() * 2;
        r = e.readUInt8();
        t = e.readUInt8();
        n.type = s;
        n.curBiome = r;
        s = li(d - 90);
        n.angleDelta = di(n.angle, s);
        n.oAngle = n.angle;
        n.flag_hurt = hi(t, 7);
        n.flag_lowWat = hi(t, 6);
        s = hi(t, 5);
        n.flag_underWater = hi(t, 4);
        n.flag_eff_invincible = hi(t, 2);
        n.flag_usingAbility = hi(t, 1);
        t = hi(t, 0) ? e.readUInt8() : 0;
        n.flag_tailBitten = hi(t, 0);
        n.flag_eff_stunned = hi(t, 1);
        n.flag_iceSliding = hi(t, 2);
        n.flag_eff_frozen = hi(t, 3);
        n.flag_eff_onFire = hi(t, 5);
        if (s) {
          t = e.readUInt8();
          if (n.hpBarA < 0.001) {
            n.hpPer = t;
          }
          n.hpPer_n = t;
          n.hpBarA_n = 1;
        } else {
          n.hpBarA_n = 0;
        }
        if (n.flag_usingAbility && n.type == Re) {
          t = e.readUInt8();
          n.octoDisguiseObjT = t;
        }
      }
      if (!!n && (n.oType == kt || n.oType == Ot)) {
        t = e.readUInt8();
        n.flag_hurt = hi(t, 0);
        if (n.flag_hurt) {
          t = e.readUInt8();
          n.hpBarA = 1;
          n.hpPer = t;
          if (n.hpBarA < 0.5) {
            n.hpPer = t;
          }
          n.hpPer_n = t;
          n.hpBarA_n = 1;
        } else {
          n.hpBarA_n = 0;
        }
      }
      if (!n) {
        console.log("PROBLEM, NO OBJ!");
      }
    }
    i = e.readUInt16();
    for (t = 0; t < i; t++) {
      n = e.readUInt32();
      a = e.readUInt8() > 0 ? e.readUInt32() : 0;
      n = On[n];
      a = a > 0 ? On[a] : undefined;
      if (n) {
        n.dead = true;
        n.updateTime = cs;
        if (n.oType == gt) {
          n.ox = n.x;
          n.oy = n.y;
          n.nx = n.x;
          n.ny = n.y;
        } else if (a) {
          n.ox = n.x;
          n.oy = n.y;
          n.oRad = n.rad;
          n.nx = a.nx;
          n.ny = a.ny;
          n.nRad = Math.min(n.rad, a.rad);
          n.hp_n = 0;
        } else {
          n.ox = n.x;
          n.oy = n.y;
          n.oRad = n.rad;
          n.nx = n.x;
          n.ny = n.y;
          n.nRad = 0;
        }
      }
    }
  }
  function gs(e) {
    var t = {};
    switch (e) {
      case Ft:
        t.abilName = "Dive";
        t.abilImg = "img/ability_dive.png";
        break;
      case ua:
        t.abilName = "Dig For Food";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case Gt:
        t.abilName = "Shell";
        t.abilImg = "skins/" + us(qi).skinName + "2.png";
        break;
      case oa:
        t.abilName = "Bite Drag";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case Jt:
        t.abilName = "Disguise";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case ha:
        t.abilName = "Burrow Hole";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case ca:
        t.abilName = "Pull from Hole";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case Kt:
        t.abilName = "Charge";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case na:
        t.abilName = "Roll snow";
        t.abilImg = "img/snowball.png";
        break;
      case ea:
        t.abilName = "Throw Snow";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case ia:
        t.abilName = "Drop Snow";
        t.abilImg = "img/snowball.png";
        break;
      case sa:
        t.abilName = "Loud Noise";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case ta:
        t.abilName = "Claw Slash";
        t.abilImg = "img/ability_claw.png";
        break;
      case Xt:
        t.abilName = "Ink";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case jt:
        t.abilName = "Shock";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case zt:
        t.abilName = "Hold to Dig";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case $t:
        t.abilName = "Howl";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case da:
        t.abilName = "Throw Banana";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case pa:
        t.abilName = "Cause Wave";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case aa:
        t.abilName = "Extra Boost";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case qt:
        t.abilName = "Slide on ice";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case Zt:
        t.abilName = "Inflate";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
        break;
      case ra:
        t.abilName = "Fire";
        t.abilImg = "img/fire.png";
        break;
      default:
        t.abilName = "Ability";
        t.abilImg = "skins/" + us(qi).skinName + ".png";
    }
    return t;
  }
  function us(e) {
    var t = {};
    switch (e) {
      case Qe:
        t.aniName = "Snail";
        t.aniDesc = "";
        t.upgradeText = "You're a super slow snail!";
        t.aniCol = "#fcc02b";
        t.skinName = "snail";
        break;
      case oe:
        t.aniName = "Mouse";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#9BA9B9";
        t.skinName = "mouse";
        break;
      case he:
        t.aniName = "Rabbit";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to RABBIT! \nPress W to burrow a hole to hide in!";
        t.aniCol = "#AA937E";
        t.skinName = "rabbit";
        break;
      case ce:
        t.aniName = "Pig";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to PIG!\n Pigs move FAST through MUD!";
        t.aniCol = "#DD6BD4";
        t.skinName = "pig";
        break;
      case de:
        t.aniName = "Fox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to FOX! ,\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
        t.aniCol = "#FF9D43";
        t.skinName = "fox";
        break;
      case ge:
        t.aniName = "Deer";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to DEER! \nPress W to dig up food! \nDig in mud for better food!\n Hint:Check water areas for new food sources!";
        t.aniCol = "#C4773E";
        t.skinName = "deer";
        break;
      case ue:
        t.aniName = "Mole";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to MOLE!\n Hold W to dig underground!\nGo under anything, do surprise attacks!";
        t.aniCol = "#4C4A45";
        t.skinName = "mole";
        break;
      case fe:
        t.aniName = "Zebra";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to ZEBRA! \nPress W to dig up food! \nTip: Dig in mud for better food!";
        t.aniCol = "#FFFFFF";
        t.skinName = "zebra";
        break;
      case me:
        t.aniName = "Lion";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to LION!\n Press W to release a mighty ROAR (Rawr!)!";
        t.aniCol = "#f8c923";
        t.skinName = "lion";
        break;
      case pe:
        t.aniName = "Cheetah";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CHEETAH!\n Press W to get a speed boost! (Every 8 seconds)!";
        t.aniCol = "#CAC05B";
        t.skinName = "cheetah";
        break;
      case be:
        t.aniName = "Bear";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to BEAR!\n Bears climb through green hills! (Press W to use your claw!)";
        t.aniCol = "#99591C";
        t.skinName = "bear";
        break;
      case ye:
        t.aniName = "Croc";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CROCODILE!\n Press W to bite and drag around animals! \n+ (Now hide in water spots)+ Swim well in Mud, Lakes & Oceans!";
        t.aniCol = "#30F51C";
        t.skinName = "croc";
        break;
      case Pe:
        t.aniName = "Hippo";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to HIPPO!\nHippos are great swimmers, dominate the Lakes/Oceans/Mud!";
        t.aniCol = "#945A99";
        t.skinName = "hippo";
        break;
      case we:
        t.aniName = "Rhino";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to RHINO!\n Press W to CHARGE with your mighty horn!";
        t.aniCol = "#94a3a9";
        t.skinName = "rhino";
        break;
      case ve:
        t.aniName = "Shrimp";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#f88e37";
        t.skinName = "shrimp";
        break;
      case ke:
        t.aniName = "Trout";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to TROUT!\nHint: Hold Left-click to RUN! (Uses extra water)";
        t.aniCol = "#ac8686";
        t.skinName = "trout";
        break;
      case Ae:
        t.aniName = "Crab";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to CRAB!\n Crabs can survive on dry land!\n (On land, Press W to go into your shell!)";
        t.aniCol = "#bf2408";
        t.skinName = "crab";
        break;
      case Me:
        t.aniName = "Squid";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SQUID!\n Squids can use INK when injured (press W!) \n+ you can hide in plankton bushes!";
        t.aniCol = "#40dda4";
        t.skinName = "squid";
        break;
      case Te:
        t.aniName = "Shark";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SHARK!\n A vicious predator of the oceans!";
        t.aniCol = "#999fc6";
        t.skinName = "shark";
        break;
      case Ee:
        t.aniName = "Sea-horse";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to SEA HORSE!\n An agile hunter!";
        t.aniCol = "#73BE2F";
        t.skinName = "seahorse";
        break;
      case De:
        t.aniName = "Jellyfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to JELLYFISH!\n A slowly-turning animal that can grow quite large!";
        t.aniCol = "#FDB9BA";
        t.skinName = "jellyfish";
        break;
      case Se:
        t.aniName = "Turtle";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to TURTLE!\n Lives well on land & water! (On land, Press W to go into your shell!)";
        t.aniCol = "#502E1A";
        t.skinName = "turtle";
        break;
      case xe:
        t.aniName = "Stringray";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to STINGRAY!\n Use electic shock (Release W key!) to shock animals! \n(Takes time to recharge)";
        t.aniCol = "#164336";
        t.skinName = "stingray";
        break;
      case _e:
        t.aniName = "The Kraken";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)";
        t.aniCol = "#64a034";
        t.skinName = "kraken";
        break;
      case Ue:
        t.aniName = "Pufferfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to PUFFERFISH!\n (Hold W to inflate- become spiky, and dangerous to touch!)";
        t.aniCol = "#6C5C2C";
        t.skinName = "pufferfish";
        break;
      case Ce:
        t.aniName = "Killer Whale";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Killer Whale! \nWhales blow out water when diving! (And sometimes other loot!)";
        t.aniCol = "#141414";
        t.skinName = "killerwhale";
        break;
      case Be:
        t.aniName = "Swordfish";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n (Press W to rush with your sharp nose!)";
        t.aniCol = "#689CD7";
        t.skinName = "swordfish";
        break;
      case Ne:
        t.aniName = "Gorilla";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Gorillas are very fast on hills/trees!\n Press W to throw bananas! (from trees)";
        t.aniCol = "#323232";
        t.skinName = "gorilla";
        break;
      case Re:
        t.aniName = "Octopus";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to Octopus!\nHold W to use your 'Disguise' ability!\n(Hint: wait for prey to bite you- they get stunned!)";
        t.aniCol = "#ff8340";
        t.skinName = "octopus";
        break;
      case Ie:
        t.aniName = "Dragon";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n (WOW, you're amazing!) \nFly over everything, Hold W to shoot fire!";
        t.aniCol = "#22FF8A";
        t.skinName = "dragon";
        break;
      case Je:
        t.aniName = "Arctic Fox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
        t.aniCol = "#CFCFCF";
        t.skinName = "arctic/arcticfox";
        break;
      case We:
        t.aniName = "Arctic Hare";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n \nPress W to burrow a hole to hide in!";
        t.aniCol = "#D5D5D5";
        t.skinName = "arctic/arctichare";
        break;
      case Fe:
        t.aniName = "The Yeti!";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n So it really exists... \n Hold W to turn into snow, release W to freeeeeze!";
        t.aniCol = "#839eb5";
        t.skinName = "arctic/yeti";
        break;
      case He:
        t.aniName = "Chipmunk";
        t.aniDesc = "";
        t.upgradeText = "";
        t.aniCol = "#A77C30";
        t.skinName = "arctic/chipmunk";
        break;
      case Le:
        t.aniName = "Muskox";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to charge with your horns! \nPlus move decently on ice!";
        t.aniCol = "#231f18";
        t.skinName = "arctic/muskox";
        break;
      case ze:
        t.aniName = "Penguin";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
        t.aniCol = "#FFFFFF";
        t.skinName = "arctic/penguin";
        break;
      case Ge:
        t.aniName = "Polar Bear";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Polar bears can climb hills! \n+ They're amazing swimmers!";
        t.aniCol = "#e4e4e4";
        t.skinName = "arctic/polarbear";
        break;
      case je:
        t.aniName = "Seal";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Seals can slide on ice (Hold W) + can climb hills (rocks too!)";
        t.aniCol = "#cfcfcf";
        t.skinName = "arctic/seal";
        break;
      case Xe:
        t.aniName = "Snow leopard";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to get a speed boost! (Every 8 seconds)!";
        t.aniCol = "#cfcfcf";
        t.skinName = "arctic/snowleopard";
        break;
      case Ye:
        t.aniName = "Walrus";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n You can slide on ice (Hold W) + can climb hills (rocks too!)";
        t.aniCol = "#633838";
        t.skinName = "arctic/walrus";
        break;
      case Ve:
        t.aniName = "Reindeer";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to dig up food! \n Your sharp hooves let you turn very well on ice!";
        t.aniCol = "#a68976";
        t.skinName = "arctic/reindeer";
        break;
      case Oe:
        t.aniName = "Wolf";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Wolf paws turn very well on ice!\n Press W to howl!";
        t.aniCol = "#6B6B6B";
        t.skinName = "arctic/wolf";
        break;
      case qe:
        t.aniName = "Wolverine";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Let out a Powerful GROWL! (Knocks back prey!)";
        t.aniCol = "#843A0F";
        t.skinName = "arctic/wolverine";
        break;
      case Ke:
        t.aniName = "Mammoth";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to roll snowballs with your trunk!\n The bigger the snowball gets, the longer the freeze!";
        t.aniCol = "#9d4717";
        t.skinName = "arctic/mammoth";
        break;
      case Ze:
        t.aniName = "Donkey";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED to " + t.aniName + "!\n Press W to Kick any animal behind you";
        t.aniCol = "#8c7c64";
        t.skinName = "donkey";
        break;
      default:
        t.aniName = "(Animal)";
        t.aniDesc = "";
        t.upgradeText = "UPGRADED!";
    }
    return t;
  }
  function fs(e, t) {
    crossHx = e;
    crossHy = t;
    crossL = 30;
    Ma.beginPath();
    Ma.moveTo(crossHx, crossHy - crossL / 2);
    Ma.lineTo(crossHx, crossHy + crossL / 2);
    Ma.stroke();
    Ma.moveTo(crossHx - crossL / 2, crossHy);
    Ma.lineTo(crossHx + crossL / 2, crossHy);
    Ma.stroke();
  }
  function ms(e, t, a, i, n, s) {
    if (!Bi) {
      Ma.save();
      var r = a - e;
      var l = i - t;
      var o = qa / 2 / Wa;
      var h = Ka / 2 / Wa;
      e = Math.max(e, Fa - o - n + 0);
      t = Math.max(t, camy - h - s + 0);
      a = Math.min(a, Fa + o - n - 0);
      i = Math.min(i, camy + h - s - 0);
      Ma.strokeStyle = "black";
      Ma.globalAlpha = 0.055;
      a -= e;
      fillH = i - t;
      for (i = -0.5 + e + (r - e) % 30; i < e + a; i += 30) {
        Ma.beginPath();
        Ma.moveTo(i, t);
        Ma.lineTo(i, t + fillH);
        Ma.stroke();
      }
      for (dy = -0.5 + t + (l - t) % 30; dy < t + fillH; dy += 30) {
        Ma.beginPath();
        Ma.moveTo(e, dy);
        Ma.lineTo(e + a, dy);
        Ma.stroke();
      }
      Ma.restore();
    }
  }
  var ps = 250;
  var bs = 250;
  function ys(e) {
    ps = Za / Qa * bs;
    Aa = document.createElement("canvas");
    Aa.width = ps;
    Aa.height = bs;
    var t = Aa.getContext("2d");
    t.globalAlpha = 0.35;
    t.fillStyle = "#000000";
    t.fillRect(0, 0, Aa.width, Aa.height);
    var a = ps / 200;
    var i = bs / 200;
    var n = e.readUInt16();
    var s = e.readUInt16();
    var r = e.readUInt16();
    for (var l = 0; l < 2; l++) {
      t.fillStyle = Q;
      t.globalAlpha = 0.5;
      var o = ps / Za;
      if (l == 0) {
        t.fillRect(o * 0, r * o, n * o, Qa * o);
      } else {
        t.fillRect((Za - n) * o, r * o, n * o, Qa * o);
      }
    }
    t.fillStyle = "white";
    t.globalAlpha = 0.5;
    o = ps / Za;
    t.fillRect((Za / 2 - s / 2) * o, o * 0, s * o, r * o);
    n = e.readUInt16();
    t.fillStyle = Q;
    t.globalAlpha = 0.5;
    for (l = 0; l < n; l++) {
      var s = e.readUInt16() * (ps / Za);
      var r = e.readUInt16() * (bs / Qa);
      var o = e.readUInt16() * (ps / Za);
      var h = e.readUInt16() * (bs / Qa);
      t.globalAlpha = 0.5;
      t.fillRect(o - s / 2, h - r / 2, s, r);
    }
    n = e.readUInt16();
    t.fillStyle = K;
    t.globalAlpha = 0.5;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, r, Math.max(1, ps / Za * o), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = "#907A33";
    t.globalAlpha = 0.7;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, r, Math.max(1, ps / Za * o), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = "#7BB7BB";
    t.globalAlpha = 0.85;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, r, Math.max(1, ps / Za * o), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = Y;
    t.globalAlpha = 1;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, r, Math.max(1, ps / Za * o), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = "#A89937";
    t.globalAlpha = 0.6;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      o = e.readUInt8() * 5;
      t.beginPath();
      t.arc(s, r, Math.max(1, ps / Za * o), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = ee;
    t.globalAlpha = 1;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, r, Math.max(2.5, ps / Za * 40), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = ae;
    t.globalAlpha = 1;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, r, Math.max(2.5, ps / Za * 40), 0, Math.PI * 2);
      t.fill();
    }
    n = e.readUInt16();
    t.fillStyle = K;
    t.globalAlpha = 1;
    for (l = 0; l < n; l++) {
      s = e.readUInt8() * a;
      r = e.readUInt8() * i;
      t.beginPath();
      t.arc(s, r, Math.max(2.5, ps / Za * 50), 0, Math.PI * 2);
      t.fill();
    }
  }
  function ws(e, t, a) {
    ka = null;
    if (e.length != 0) {
      ka = document.createElement("canvas");
      t = ka.getContext("2d");
      var i;
      i = 55 + e.length * 22;
      ka.width = 220;
      ka.height = i;
      t.globalAlpha = 0.35;
      t.fillStyle = "#000000";
      t.fillRect(0, 0, 200, i);
      t.globalAlpha = 1;
      t.fillStyle = "#FFFFFF";
      i = "Top Players";
      t.font = "27px Arial";
      if (!Bi) {
        t.shadowOffsetX = 1;
        t.shadowOffsetY = 1;
      }
      t.shadowColor = "black";
      t.fillText(i, 95 - t.measureText(i).width / 2, 40);
      var n;
      t.textAlign = "left";
      t.font = "17px Arial";
      for (n = 0; n < e.length; ++n) {
        i = Ci ? "" : e[n].name || "mope.io";
        if (a == e[n].rank) {
          t.fillStyle = "#FEED92";
          if (Ci) {
            i = "you";
          }
        } else {
          t.fillStyle = "#FFFFFF";
        }
        i = e[n].rank + ". " + i + " (" + yi(e[n].score) + (gameMode == ya ? " kills" : "") + ")";
        t.fillText(i, 15, 65 + n * 22);
      }
    }
  }
  function Ps() {
    Ma.save();
    if (Ki) {
      water += (nn - water) * 0.1;
      xpPer += (sn - xpPer) * 0.03;
      var e = On[Ji];
      if (e) {
        qi = e.type;
      }
      var e = 1;
      var t = water <= 25;
      if (t) {
        e = 0.7 + Math.sin(Math.PI * 2 / 1.2 * (cs / 1000)) * 0.3;
      }
      var a = Math.min(450, qa * 0.9) * Ha;
      var i = Ha * 30;
      var n = qa / 2;
      var s = Ka - Ha * 60;
      Ma.globalAlpha = e * 0.35;
      Ma.fillStyle = "#000000";
      Ma.fillRect(n - a / 2, s - i / 2, a, i);
      Ma.globalAlpha = e;
      Ma.fillStyle = an ? "#8CCEF4" : K;
      Ma.fillRect(n - a / 2, s - i / 2, water / 100 * a, i);
      Ma.fillStyle = Va ? t ? ee : "orange" : t ? ee : "white";
      Ma.globalAlpha = e * 1;
      rn.setText(an ? t ? "LOW Air" : "Air" : t ? "LOW Water" : "Water");
      rn.setFontSize(Ha * 22);
      rn.setColor(t ? ee : "white");
      rn.x = n;
      rn.y = s;
      Ma.globalAlpha *= t ? 1 : 0.5;
      rn.draw();
      Ma.globalAlpha = 0.35;
      Ma.fillStyle = "#000000";
      s = Ka - i / 2 - 5;
      a = qa * 0.9;
      Ma.fillRect(n - a / 2, s - i / 2, a, i);
      Ma.globalAlpha = 1;
      Ma.fillStyle = "#F3C553";
      Ma.fillRect(n - a / 2, s - i / 2, xpPer / 100 * a, i);
      Ma.globalAlpha = 1;
      ln.setText("" + yi(xp) + " xp  (" + yi(Dn) + " xp Next Animal)");
      ln.setFontSize(Ha * 22);
      ln.x = n;
      ln.y = s;
      ln.draw();
      for (e = 0; e < un.length; e++) {
        un[e].draw();
      }
      if (Sa) {
        xn += ((Pn ? 1 : 0) - xn) * 0.1;
        if (xn > 0.005 && Ki) {
          Ma.globalAlpha = xn * 0.3;
          Ma.beginPath();
          Ma.arc(vn, kn, Tn * xa, 0, Math.PI * 2);
          Ma.fillStyle = "#000000";
          Ma.fill();
          Ma.globalAlpha = xn * 0.5;
          Ma.beginPath();
          Ma.arc(An, Mn, Tn * xa * 0.57, 0, Math.PI * 2);
          Ma.fillStyle = "#000000";
          Ma.fill();
          e = En * 0.3;
          En -= e;
          Sn += e;
          joystickDistF += (joystickDistF_n - joystickDistF) * 0.1;
          Ma.save();
          Ma.translate(qa / 2, Ka / 2);
          Ma.rotate(Sn);
          Ma.globalAlpha = xn * 0.5;
          Ma.beginPath();
          Ma.fillStyle = "#000000";
          e = xa * 40;
          if (On[Ji]) {
            e = (9 + On[Ji].rad) * Wa;
          }
          e *= 0.1 + joystickDistF * 0.9;
          t = xa * 15;
          Ma.moveTo(e + xa * 30 * (0.2 + joystickDistF * 0.8), 0);
          Ma.lineTo(e, t / 2);
          Ma.lineTo(e, -t / 2);
          Ma.closePath();
          Ma.fill();
          Ma.restore();
        }
      }
    }
    Ma.restore();
  }
  var Is = "Ready to survive!";
  var vs = "white";
  var ks = +new Date() + 0;
  var As = [];
  var Ms = +new Date() + 0;
  var Ts = 0;
  var xs = 100;
  var Ss = 2;
  var Es = false;
  var Ds = false;
  var _s = 0;
  var Us = [];
  var Cs = false;
  var Bs = 0;
  var Ns = 0;
  function Rs(e, t) {
    Is = e;
    ks = +new Date() + t;
  }
  function Os() {
    var e = (ks - cs) / 1000 / 1;
    var e = e < 0 ? 0 : e > 1 ? 1 : e;
    if (e > 0) {
      Ma.save();
      Ma.globalAlpha = e;
      on.setText(Is);
      on.setColor(vs);
      on.setFontSize(Ha * 25);
      on.x = qa / 2;
      on.y = Ka * 0.3;
      on.draw();
      Ma.restore();
    }
    e = Ms - cs > 0 ? 1 : 0;
    Ts += (e - Ts) * 0.1;
    if (Ts > 0.01 && !Bi) {
      if (As.length > 0) {
        Ma.save();
        Ma.translate(qa / 2, Ka * (0.7 + (1 - Ts) * 0.5));
        Ma.scale(Ss * Ha, Ss * Ha);
        Ma.globalAlpha = Ts * 0.2;
        Ma.fillStyle = "black";
        var t = xs + 15 / Ss;
        var a = 40 + 10 / Ss;
        Ma.fillRect(-t / 2, -a / 2, t, a);
        Ma.globalAlpha = Ts;
        for (e = 0; e < As.length; e++) {
          var i = As[e];
          i.draw();
        }
      }
      if (e = $a("./img/instr_eatsymbol.png")) {
        i = a / e.height * Ts;
        Ma.drawImage(e, -t / 2 - e.width * i - 15, -a / 2, e.width * i, e.height * i);
      }
      if (Es) {
        Ma.save();
        Ma.fillStyle = "#52EB59";
        Ma.font = Ha * 16 + "px Arial";
        Ma.lineWidth = 1;
        Ma.textAlign = "center";
        Ma.textBaseline = "middle";
        if (!Bi) {
          Ma.shadowOffsetX = 1;
          Ma.shadowOffsetY = 1;
          Ma.shadowColor = "black";
        }
        Ma.fillText("HINT: Eat LIGHT-GREEN outlined things!", 0, -45);
        Ma.restore();
      }
      Ma.restore();
    }
    e = Ds ? 1 : 0;
    _s += (e - _s) * 0.1;
    if (_s > 0.01) {
      if (Us.length > 0) {
        Ma.save();
        Ma.translate(0, Ka * -0.5 * (1 - _s));
        var t = Ha * 170;
        var a = t + 20;
        var n = qa / 2 - (Math.max(0, Us.length - 1) * (10 + t) + (a - t)) / 2;
        for (var e = 0; e < Us.length; e++) {
          i = Us[e];
          i.buttonScaleF = e == 0 ? a / t : 1;
          i.w = t;
          i.h = t;
          i.x = n;
          i.y = Ka * 0.25;
          n += i.w / 2 * i.buttonScaleF + t / 2 + 10;
        }
        Ma.globalAlpha = _s;
        for (e = 0; e < Us.length; e++) {
          i = Us[e];
          i.draw();
        }
      }
      t = Math.max(0, Ns - cs) / 1000;
      a = 1;
      if (t != 0 && t < 8) {
        a = 0.7 + Math.sin(Math.PI * 2 / 1.2 * (cs / 1000)) * 0.3;
      }
      Ma.save();
      Ma.globalAlpha = _s * a;
      Ma.fillStyle = t != 0 && t < 8 ? "red" : "white";
      Ma.font = Ha * 25 + "px Arial";
      Ma.lineWidth = 1;
      Ma.textAlign = "center";
      Ma.textBaseline = "middle";
      if (!Bi) {
        Ma.shadowOffsetX = 1;
        Ma.shadowOffsetY = 1;
        Ma.shadowColor = "black";
      }
      t = t > 0 ? " (auto in " + Math.trunc(t) + "s)" : "";
      Ma.fillText(Cs ? "Choose which animal to spawn as:" : "Choose an upgrade:" + t, qa / 2, Us[0].y - Us[0].w / 2 - 25);
      Ma.restore();
      Ma.restore();
    }
  }
  var Ws = +new Date();
  function Fs(t) {
    cs = +new Date();
    window.requestAnimationFrame(Fs);
    if (Ma.globalAlpha != 1) {
      Ma.setTransform(1, 0, 0, 1, 0, 0);
      Ma.globalAlpha = 1;
    }
    Ma.clearRect(0, 0, qa, Ka);
    t = (cs - Vn) / 1000 / 0.2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    Fa = t * (camx_n - camx_o) + camx_o;
    camy = t * (camy_n - camy_o) + camy_o;
    Wa = (Wa * 25 + camzoom_n) / 26;
    nr();
    Ma.save();
    t = qa / 2;
    var a = Ka / 2;
    Ma.translate(t * (1 - Wa) + (t - Fa) * Wa, a * (1 - Wa) + (a - camy) * Wa);
    Ma.scale(Wa, Wa);
    Ma.save();
    if ($i) {
      t = 10;
      t = 600;
      Ma.globalAlpha = 1;
      Ma.fillStyle = Y;
      Ma.fillRect(0, 0 - t, Za, t);
      Ma.fillRect(0, Qa, Za, t);
      Ma.fillRect(-t, -t, t, Qa + t * 2);
      Ma.fillRect(Za, -t, t, Qa + t * 2);
    } else {
      ms(lr(0), or(0), lr(qa), or(Ka), 0, 0);
    }
    Ma.restore();
    t = Rn.slice();
    for (var a = [tt, rt], i = {}, n = 0; n < a.length; n++) {
      var s = new Mi();
      i[a[n]] = s;
      t.push(s);
    }
    for (d = t.length - 1; d >= 0; d--) {
      n = t[d];
      e = 0;
      for (; e < a.length; e++) {
        s = a[e];
        if (s == n.oType && !(n instanceof Mi)) {
          i[s].addBatchedObj(n);
          t.splice(d, 1);
          break;
        }
      }
    }
    Wn = [];
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
      n = t[d];
      n.draw();
    }
    if (!Ci) {
      for (d = 0; d < t.length; d++) {
        if (typeof t[d].chatLines != "undefined") {
          t[d].drawChat();
        }
      }
    }
    for (d = 0; d < Wn.length; d++) {
      t = Wn[d];
      if (On.hasOwnProperty(t.id)) {
        delete On[t.id];
      }
      t = Rn.indexOf(t);
      if (t != -1) {
        Rn.splice(t, 1);
      }
    }
    Ma.restore();
    if (Ki && (ka && ka.width && Ma.drawImage(ka, xa * 10, xa * 10, ka.width * Ha, ka.height * Ha), Aa && Aa.width && Ma.drawImage(Aa, qa - (xa * 10 + Aa.width * Ha), xa * 10, ps * Ha, bs * Ha), t = On[Ji])) {
      Ma.fillStyle = "white";
      Ma.beginPath();
      Ma.arc(qa - (xa * 10 + Aa.width * Ha) + t.x * Aa.width * Ha / Za, xa * 10 + t.y * Aa.height * Ha / Qa, 3, 0, Math.PI * 2);
      Ma.fill();
    }
    Os();
    Ps();
    if (qs > 370 && !Ki) {
      if (Bi) {
        Fi += 1;
        if (cs - Li > 1000) {
          Li = +new Date();
          hn.setText(Fi + " fps");
          Fi = 0;
        }
        ji += 1;
      }
      hn.setFontSize(Ha * 15);
      hn.x = qa - 5 - hn.width / 2;
      hn.y = Ka - 2 - hn.height / 2;
      hn.draw();
    }
  }
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(Fs);
  } else {
    setInterval(draw, 1000 / 60);
  }
  var Hs = 0;
  function Ls(e) {
    if (hs() && !Ki) {
      playerName = nickInput.value.replace(/(<([^>]+)>)/gi, "").substring(0, 20);
      var t = 9 + ui(playerName).length + 1;
      if (M != null && T != null) {
        t += ui(T).length + 2;
      }
      mes = new Si(t);
      mes.writeUInt8(2);
      mes.writeString(playerName);
      mes.writeUInt16(qa);
      mes.writeUInt16(Ka);
      mes.writeUInt8(A ? 1 : 0);
      mes.writeUInt8(e ? 1 : 0);
      if (A) {
        mes.writeString(T);
      }
      os(mes);
      if (!e && window.localStorage) {
        try {
          window.localStorage.setItem("nick", playerName + "");
        } catch (e) {}
      }
    }
  }
  function zs() {
    if (document.getElementById("partyLinkOpenBut")) {
      document.getElementById("partyLinkOpenBut").style.display = "block";
      document.getElementById("partyLinkClicked").style.display = "none";
    }
  }
  if (document.getElementById("partyLinkOpenBut")) {
    document.getElementById("partyLinkOpenBut").onclick = function () {
      if (Qi) {
        if (document.getElementById("partyLinkOpenBut")) {
          document.getElementById("partyLinkOpenBut").style.display = "none";
          document.getElementById("partyLinkClicked").style.display = "block";
        }
        newMsg = new Si(1);
        newMsg.writeUInt8(22);
        os(newMsg);
      }
    };
  }
  function Gs(e) {
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
    cr();
    var e = Ea("audio/click.mp3");
    if (e) {
      try {
        e.play();
      } catch (e) {}
    }
    if (!vr && Qi) {
      if (kr()) {
        xr();
      } else {
        Ls(false);
      }
    }
  };
  var js = document.getElementById("button_GMsandbox");
  if (js) {
    js.onclick = function () {
      Oa(ya);
    };
  }
  if (js = document.getElementById("button_GMnormal")) {
    js.onclick = function () {
      Oa(ba);
    };
  }
  if (js = document.getElementById("button_mute")) {
    js.onclick = function () {
      Oi = !Oi;
      Na();
      try {
        window.localStorage.setItem("options_musicMuted", Oi ? 1 : 0);
      } catch (e) {}
    };
  }
  document.getElementById("settingsButton").onclick = function () {
    var e = document.getElementById("optionsDiv");
    e.style.display = e.style.display == "block" ? "none" : "block";
    if (e = Ea("audio/click.mp3")) {
      try {
        e.play();
      } catch (e) {}
    }
  };
  document.getElementById("closeBut").onclick = function () {
    var e = document.getElementById("optionsDiv");
    e.style.display = e.style.display == "block" ? "none" : "block";
    if (e = Ea("audio/click.mp3")) {
      try {
        e.play();
      } catch (e) {}
    }
  };
  document.getElementById("options_noImages").onchange = function () {
    if (window.localStorage) {
      Ui = document.getElementById("options_noImages").checked;
      try {
        window.localStorage.setItem("options_noImages", Ui ? 1 : 0);
      } catch (e) {}
      console.log("options_noimages: saved as " + window.localStorage.getItem("options_noImages"));
    }
  };
  document.getElementById("options_noNames").onchange = function () {
    if (window.localStorage) {
      Ci = document.getElementById("options_noNames").checked;
      try {
        window.localStorage.setItem("options_noNames", Ci ? 1 : 0);
      } catch (e) {}
      console.log("options_noNames: saved as " + window.localStorage.getItem("options_noNames"));
    }
  };
  document.getElementById("options_lowGraphics").onchange = function () {
    if (window.localStorage) {
      Bi = document.getElementById("options_lowGraphics").checked;
      try {
        window.localStorage.setItem("options_lowGraphics", Bi ? 1 : 0);
      } catch (e) {}
      Zs();
      console.log("options_lowGraphics: saved as " + window.localStorage.getItem("options_lowGraphics"));
    }
  };
  document.getElementById("options_noJoystick").onchange = function () {
    if (window.localStorage) {
      Ni = document.getElementById("options_noJoystick").checked;
      try {
        window.localStorage.setItem("options_noJoystick", Ni ? 1 : 0);
      } catch (e) {}
      Zs();
      console.log("options_noJoystick: saved as " + window.localStorage.getItem("options_noJoystick"));
    }
  };
  var Xs = document.getElementById("options_leftHanded");
  if (Xs) {
    Xs.onchange = function () {
      if (window.localStorage) {
        Ri = Xs.checked;
        try {
          window.localStorage.setItem("options_leftHanded", Ri ? 1 : 0);
        } catch (e) {}
        Zs();
        console.log("options_leftHanded: saved as " + window.localStorage.getItem("options_leftHanded"));
      }
    };
  }
  var Ys = false;
  var Vs = false;
  document.onkeydown = function (e) {
    cr();
    var t = e.keyCode || e.which;
    if (!Ys && Ki) {
      switch (t) {
        case 32:
          e.preventDefault();
          ir(Qs, true);
          break;
        case 87:
          e.preventDefault();
          ir($s, true);
          break;
        case 83:
          e.preventDefault();
          ir(ar, true);
          break;
        case 27:
          if (i) {
            e.preventDefault();
            Vs = !Vs;
            Rs("Movement Lock (ESC KEY): " + (Vs ? "ON" : "OFF"), 2500);
          }
      }
    }
  };
  document.onkeyup = function (e) {
    var t = e.keyCode || e.which;
    if (t == 13) {
      if (!Ki && !Ds) {
        document.getElementById("startButton").click();
        return;
      }
      if (Ds) {
        Pi(Us[0]);
        return;
      }
    }
    if (Ki) {
      t = e.keyCode || e.which;
      if (t == 13) {
        Js();
      } else if (!Ys && Ki) {
        switch (t) {
          case 32:
            e.preventDefault();
            ir(Qs, false);
            break;
          case 87:
            e.preventDefault();
            ir($s, false);
            break;
          case 38:
            e.preventDefault();
            ir(er, false);
            break;
          case 40:
            e.preventDefault();
            ir(tr, false);
        }
      }
    }
  };
  function Js() {
    var e = document.getElementById("chatinput");
    if (!Ys && Ki) {
      e.style.visibility = "visible";
      e.focus();
      Ys = true;
      e.onblur = function () {
        if (Ys) {
          Js();
        }
      };
    } else if (Ys) {
      var t = e.value + "";
      Ys = false;
      e.style.visibility = "hidden";
      e.blur();
      if (t.length > 0 && Ki) {
        newMsg = new Si(3 + ui(t).length);
        newMsg.writeUInt8(19);
        newMsg.writeString(t);
        os(newMsg);
      }
      e.value = "";
    }
  }
  window.onresize = Zs;
  var qs = 100;
  var Ks = 100;
  function Zs() {
    qs = window.innerWidth;
    Ks = window.innerHeight;
    xa = window.devicePixelRatio;
    qa = qs * xa;
    Ka = Ks * xa;
    va.width = qa;
    va.height = Ka;
    va.style.width = qs + "px";
    va.style.height = Ks + "px";
    document.getElementById("chatinput").style.marginTop = Ks / 2 - 50 + "px";
    pn.w = pn.h = xa * 95;
    fn.w = fn.h = xa * 95;
    mn.w = mn.h = xa * 95;
    bn.w = xa * 60;
    bn.h = xa * 30;
    pn.x = xa * 25 + pn.w / 2;
    pn.y = Ka - (xa * 40 + pn.w / 2);
    if (Ri) {
      pn.x = qa - pn.x;
    }
    fn.x = pn.x;
    fn.y = Sa ? pn.y - (xa * 10 + fn.w / 2 + pn.w / 2) : pn.y;
    mn.x = pn.x;
    mn.y = fn.y - (xa * 10 + mn.w / 2 + fn.w / 2);
    bn.x = xa * 72.5 + xa * 125;
    bn.y = xa * 15 + bn.h / 2;
    yn.setPosAndSize(bn.x - (bn.w / 2 + xa * 10), bn.y, xa * 60, xa * 30, 1, 0.5);
    wn.setPosAndSize(yn.x, yn.y + yn.h / 2 + xa * 10, xa * 60, xa * 30, 0.5, 0);
    for (var e = 0; e < un.length; e++) {
      un[e].visible = Sa;
    }
    fn.visible = true;
    mn.visible = true;
    yn.visible = yn.touchEnabled = Sa && i;
    wn.visible = wn.touchEnabled = Sa && i;
    Ha = Math.max(qa / 1344, Ka / 756);
    Ha = Math.min(1, Math.max(0.4, Ha * xa));
    if (Math.min(qs, Ks) < 500) {
      Ha = xa / 2 * 0.9;
    }
    if (hs()) {
      mes = new Si(5);
      mes.writeUInt8(17);
      mes.writeUInt16(qa);
      mes.writeUInt16(Ka);
      os(mes);
    }
  }
  var Qs = 1;
  var $s = 2;
  var er = 3;
  var tr = 4;
  var ar = 5;
  function ir(e, t) {
    switch (e) {
      case Qs:
        if (Va != t && hs() && Ki) {
          if (t) {
            hr();
          }
          mes = new Si(2);
          mes.writeUInt8(21);
          mes.writeUInt8(t ? 1 : 0);
          os(mes);
        }
        Va = t;
        break;
      case $s:
        if (Ja != t && hs() && Ki) {
          if (t) {
            hr();
          }
          mes = new Si(2);
          mes.writeUInt8(20);
          mes.writeUInt8(t ? 1 : 0);
          os(mes);
        }
        Ja = t;
        break;
      case er:
        if (i && Ki) {
          mes = new Si(1);
          mes.writeUInt8(26);
          os(mes);
        }
        break;
      case tr:
        if (i && Ki) {
          mes = new Si(1);
          mes.writeUInt8(27);
          os(mes);
        }
        break;
      case ar:
        if (Ki) {
          mes = new Si(1);
          mes.writeUInt8(28);
          os(mes);
        }
    }
  }
  va.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });
  va.ontouchstart = function (e) {
    cr();
    if (Ki) {
      for (var t = 0; t < e.changedTouches.length; t++) {
        var a = e.changedTouches[t];
        for (var i = 0; i < un.length; i++) {
          var n = un[i];
          if (n.testPosHitsButton(a.clientX * xa, a.clientY * xa) && !n.pressed && n.touchEnabled) {
            e.preventDefault();
            n.pressed = true;
            n.pressedTouchID = a.identifier;
            n.onButtonTouchStart();
            return;
          }
        }
      }
      if (Ni || Pn) {
        La = e.touches[0].clientX * xa;
        za = e.touches[0].clientY * xa;
        nr();
      } else {
        a = e.changedTouches[0];
        Pn = true;
        vn = a.clientX * xa;
        kn = a.clientY * xa;
        An = vn;
        Mn = kn;
        In = a.identifier;
      }
    }
  };
  va.ontouchmove = function (e) {
    cr();
    e.preventDefault();
    for (var t = 0; t < e.changedTouches.length; t++) {
      var a = e.changedTouches[t];
      if (a.identifier == fn.pressedTouchID) {
        if (pn.pressedTouchID == -1) {
          var i = pn.testPosHitsButton(a.clientX * xa, a.clientY * xa);
          var a = pn.pressed;
          if ((pn.pressed = i) && !a) {
            ir(Qs, true);
          } else if (!i && a) {
            ir(Qs, false);
          }
        }
      } else if (Ni) {
        La = a.clientX * xa;
        za = a.clientY * xa;
        nr();
      } else if (Pn && a.identifier == In) {
        var i = a.clientX * xa - vn;
        var a = a.clientY * xa - kn;
        var n = Math.sqrt(i * i + a * a);
        if (n > 0) {
          var i = i / n;
          var a = a / n;
          var n = Math.min(1, n / (Tn * xa));
          var s = Math.pow(n, 3);
          if (s < 0.1) {
            s = 0;
          }
          s *= xa * 300;
          En = di(Sn, Math.atan2(a, i));
          joystickDistF_n = n;
          An = vn + Tn * xa * i * n;
          Mn = kn + Tn * xa * a * n;
          La = qa / 2 + i * s;
          za = Ka / 2 + a * s;
          nr();
        }
      }
    }
  };
  va.ontouchend = function (e) {
    if (Sa && Ki) {
      for (var t = 0; t < e.changedTouches.length; t++) {
        var a = e.changedTouches[t];
        if (Pn && a.identifier == In) {
          Pn = false;
          In = -1;
        } else {
          for (var i = 0; i < un.length; i++) {
            var n = un[i];
            if (n.pressed && n.pressedTouchID == a.identifier && n.touchEnabled) {
              n.pressed = false;
              n.pressedTouchID = -1;
              n.onButtonTouchEnd();
              return;
            }
          }
        }
      }
    }
  };
  va.ontouchcancel = function (e) {
    console.log("touch cancel");
    va.ontouchend(e);
  };
  va.ontouchleave = function (e) {
    console.log("touch leave");
  };
  va.onmousemove = function (e) {
    La = e.clientX * xa;
    za = e.clientY * xa;
    nr();
    if (!tn) {
      cr();
    }
    if (Ds && cs - Bs > 650) {
      for (var t = 0; t < Us.length; t++) {
        var a = Us[t];
        a.isHighLighted = a.testPosHitsButton(La, za);
      }
    }
    e.preventDefault();
  };
  va.onmousedown = function (e) {
    cr();
    if (e.which == 1) {
      ir(Qs, true);
    }
    if (e.which == 3) {
      ir($s, true);
    }
    e.preventDefault();
  };
  va.onmouseup = function (e) {
    if (e.which == 1 && (ir(Qs, false), Ds && cs - Bs > 650)) {
      La = e.clientX * xa;
      za = e.clientY * xa;
      for (var t = 0; t < Us.length; t++) {
        var a = Us[t];
        if (a.testPosHitsButton(La, za)) {
          Pi(a);
          break;
        }
      }
    }
    if (e.which == 3) {
      ir($s, false);
    }
    e.preventDefault();
  };
  va.onblur = function (e) {
    ir(Qs, false);
    ir($s, false);
  };
  window.onfocus = function (e) {
    cr();
  };
  window.onmouseout = function (e) {
    if (e.toElement == null && e.relatedTarget == null) {
      ir(Qs, false);
      ir($s, false);
    }
  };
  document.oncontextmenu = document.body.oncontextmenu = function () {
    return !Ki;
  };
  function nr() {
    var e = qa / 2;
    var t = Ka / 2;
    Xa = Ga;
    Ya = ja;
    Ga = (La - (e - Fa * Wa)) / Wa;
    ja = (za - (t - camy * Wa)) / Wa;
  }
  function sr(e) {
    return e * Wa + (qa / 2 - Fa * Wa);
  }
  function rr(e) {
    return e * Wa + (Ka / 2 - camy * Wa);
  }
  function lr(e) {
    return (e - (qa / 2 - Fa * Wa)) / Wa;
  }
  function or(e) {
    return (e - (Ka / 2 - camy * Wa)) / Wa;
  }
  function hr() {
    if (Vs) {
      var e = On[Ji];
      if (e) {
        Ga = e.x;
        ja = e.y + 2;
      } else {
        return;
      }
    }
    if (hs() && Ki && (Math.abs(Xa - Ga) > 0.1 || Math.abs(Ya - ja) > 0.1)) {
      mes = new Si(6);
      mes.writeUInt8(5);
      mes.writeInt16(Ga);
      mes.writeInt16(ja);
      os(mes);
    }
  }
  setInterval(hr, 20);
  function cr() {
    en = +new Date();
    if (tn) {
      tn = false;
      if (!w) {
        window.onbeforeunload = null;
      }
      document.getElementById("connecting").style.visibility = "visible";
      window.location.reload();
    }
  }
  setInterval(function () {
    if (+new Date() - en > (Ki ? 2400 : 10) * 60000 && !tn && Qi) {
      console.log("Disconnected for afk...");
      tn = true;
      if (hs()) {
        Jn.close();
      }
    }
  }, 5000);
  function dr() {
    Zs();
    On = {};
    Rn = [];
    Wn = [];
    nn = water = 100;
    water = nn = sn = xpPer = xp = 0;
    ka = null;
    if (!A) {
      gn = "";
      var e = document.getElementById("spawnXpLabel");
      e.style.display = gn ? "block" : "none";
      e.textContent = gn;
    }
    for (e = 0; e < un.length; e++) {
      un[e].pressed = false;
    }
    Ds = Pn = false;
    _s = 0;
    Us = [];
    Cs = false;
  }
  window.onload = function () {
    Zs();
    if (window.localStorage) {
      var e = document.getElementById("nickInput");
      e.value = window.localStorage.getItem("nick");
      e.setSelectionRange(0, e.value.length);
      if (!Sa) {
        e.focus();
      }
    }
  };
  var gr;
  function ur(e) {
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
    ur(function (e) {
      gr = e;
      e.registerHandler("testJavascriptHandler", function (e, t) {
        console.log("ObjC called testJavascriptHandler with", e);
        t({
          "Javascript Says": "Right back atcha!"
        });
      });
    });
  }
  function fr() {
    if (gr && b) {
      gr.callHandler("adShowCallBack", {
        foo: "bar"
      }, function (e) {
        console.log("JS got response " + e);
      });
    }
  }
  function mr() {
    console.log("Showing ad android...");
    window.location = "myscheme://showAdmob";
  }
  var pr = 0;
  var br = 0;
  if (window.localStorage) {
    var yr = window.localStorage.getItem("lastAdShowT") * 1 || 0;
    var wr = +new Date() - yr;
    var br = wr > 0 ? yr : 0;
    var pr = window.localStorage.getItem("gamesSinceAd") * 1;
  }
  var Pr = 0;
  var Ir = +new Date();
  var vr = false;
  function kr() {
    if (Mr()) {
      if (I) {
        console.log("videoAd: test mode, always show video ad!");
        return true;
      } else if (Pr < 1 && br == 0) {
        console.log("videoAd: no show: NEW PLAYER, no games yet started!");
        return false;
      } else if ((+new Date() - br) / 1000 > 300 && pr > 0) {
        console.log("videoAd: show: time limit passed!");
        return true;
      } else if (pr >= 3) {
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
  var Ar = true;
  function Mr() {
    var e = P && !w && !i;
    if (Ar) {
      return e && typeof adplayer != "undefined";
    } else {
      return e;
    }
  }
  function Tr() {
    if (Ar) {
      Er("//api.adinplay.com/player/v2/MOP/mope.io/player.min.js", function () {
        if (typeof aipPlayer != "undefined") {
          console.log("Loading video preroll...");
          adplayer = new aipPlayer({
            AD_WIDTH: 960,
            AD_HEIGHT: 540,
            AD_FULLSCREEN: false,
            PREROLL_ELEM: document.getElementById("preroll"),
            AIP_COMPLETE: function () {
              console.log("Video ad finished.");
              Sr(true);
            }
          });
        } else {
          console.log("Video ad (blocked) -finished.");
          Sr(false);
        }
      });
    }
  }
  function xr() {
    if (Da) {
      Da.volume = 0.2;
    }
    vr = true;
    document.getElementById("startMenuWrapper").style.display = "none";
    if (Ar) {
      adplayer.startPreRoll();
    } else {
      document.getElementById("pvVidContainer").style.display = "block";
      Br();
    }
  }
  function Sr(e) {
    if (vr) {
      vr = false;
      if (!Ar) {
        document.getElementById("pvVidContainer").style.display = "none";
        document.getElementById("my-content-2").style.display = "none";
      }
      if (e && (pr = 0, br = +new Date(), window.localStorage)) {
        try {
          window.localStorage.setItem("lastAdShowT", br);
          window.localStorage.setItem("gamesSinceAd", pr);
        } catch (e) {}
      }
      if (Da) {
        Da.volume = 0.7;
      }
      var t = Ea("audio/click.mp3");
      if (t) {
        try {
          t.play();
        } catch (e) {}
      }
      console.log("Video done (success: " + e + "), joining game!");
      Ls(false);
    } else {
      console.log("ad isn't playing!");
    }
  }
  function Er(e, t) {
    var a = document.head || document.getElementsByTagName("head")[0];
    var i = document.createElement("script");
    var n = true;
    i.async = "async";
    i.type = "text/javascript";
    i.charset = "UTF-8";
    i.src = e;
    i.onload = i.onreadystatechange = function () {
      if (!!n && (!i.readyState || !!/loaded|complete/.test(i.readyState))) {
        n = false;
        t();
        i.onload = i.onreadystatechange = null;
      }
    };
    a.appendChild(i);
  }
  if (P && !w) {
    Tr();
  }
  var Dr = false;
  var _r = null;
  var Ur = "player-2";
  var Cr = true;
  function Br(e) {
    adSuccess = false;
    e = document.getElementById("pvVidContainer");
    _r = setTimeout(function () {
      console.log("Error: ad failed to start playing!");
      Sr(true);
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
      script.setAttribute("data-id", Ur);
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
    clearTimeout(_r);
    Bolt.on(e, "showPostAdContainer", function () {
      console.log("******BOLT showPostAdContainer***** fired");
      Sr(Dr);
    });
    Bolt.on(e, Bolt.BOLT_AD_STARTED, function () {
      console.log("AD STARTED: SUCCESS");
      Dr = true;
    });
    Bolt.on(e, Bolt.BOLT_AD_ERROR, function () {
      console.log("AD ERROR EVENT FIRED");
    });
  };
  function Nr(e, t, a) {
    return {
      x: e.x + t * Math.cos(a),
      y: e.y + t * Math.sin(a)
    };
  }
  function Rr(e, t, a, i, n) {
    Ma.save();
    Ma.globalAlpha = n;
    Ma.beginPath();
    Ma.translate(e, t);
    Ma.rotate(a);
    Ma.moveTo(-5, -5);
    Ma.lineTo(-5, 5);
    Ma.lineTo(5, 5);
    Ma.lineWidth = 1.5;
    Ma.strokeStyle = i;
    Ma.fillStyle = i;
    Ma.stroke();
    Ma.restore();
  }
  function Or() {
    var e = On[Ji];
    if (e) {
      for (d = 0; d < Rn.length; d++) {
        var t = Rn[d];
        if (e.id != t.id && t.oType === et) {
          var a = t.getOutlineColor();
          var i = false;
          if (a == ne || a == se) {
            i = true;
          }
          if (i) {
            Fr(e, t, a);
          }
        }
      }
    }
  }
  function Wr(e, t) {
    var a = e.x - t.x;
    var i = e.y - t.y;
    return Math.sqrt(a * a + i * i);
  }
  function Fr(e, t, a) {
    var i = oi(t.x, t.y, e.x, e.y);
    sr(t.x);
    rr(t.y);
    e = Nr({
      x: e.x,
      y: e.y
    }, -50 - e.rad, i);
    t = Wr({
      x: e.x,
      y: e.y
    }, {
      x: t.x,
      y: t.y
    });
    if (!(t > 1000) && !(t < 100)) {
      i += li(45);
      Rr(e.x, e.y, i, a, 1);
    }
  }
})();