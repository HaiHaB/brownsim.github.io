/*! cookie-notice-js v1.2.2 by Alessandro Benoit 2022-02-23 */

!(function () {
  "use strict";
  var h,
    v = {
      messageLocales: {
        it: "Utilizziamo i cookie per essere sicuri che tu possa avere la migliore esperienza sul nostro sito. Se continui ad utilizzare questo sito assumiamo che tu ne sia felice.",
        en: "We use cookies to make sure you can have the best experience on our website. If you continue to use this site we assume that you will be happy with it.",
        de: "Wir verwenden Cookies um sicherzustellen dass Sie das beste Erlebnis auf unserer Website haben.",
        oc: "Utilizam de cookies per vos provesir la melhora experiéncia possibla sus nòstre site web. Se contunhatz d'utilizar aqueste site web considerarem que sètz d'acòrdi amb aquò.",
        fr: "Nous utilisons des cookies afin d'être sûr que vous pouvez avoir la meilleure expérience sur notre site. Si vous continuez à utiliser ce site, nous supposons que vous acceptez.",
        hu: "Sütiket használunk a honlapunkkon a legjobb felhasználói élmény érdekében. Ha tovább használja a weblapot, akkor úgy vesszük, hogy egyetért.",
      },
      cookieNoticePosition: "bottom",
      learnMoreLinkEnabled: !1,
      learnMoreLinkHref: "/cookie-banner-information.html",
      learnMoreLinkText: {
        it: "Saperne di più",
        en: "Learn more",
        de: "Mehr erfahren",
        oc: "Ne saber mai",
        fr: "En savoir plus",
        hu: "Tudjon meg többet",
      },
      buttonLocales: { en: "Ok", oc: "D'acòrdi", hu: "Oké" },
      expiresIn: 30,
      buttonBgColor: "#d35400",
      buttonTextColor: "#fff",
      noticeBgColor: "#000",
      noticeTextColor: "#fff",
      linkColor: "#009fdd",
    };
  function g(e) {
    var o = (
      document.documentElement.lang ||
      navigator.language ||
      navigator.userLanguage
    ).substr(0, 2);
    return e[o] ? e[o] : e.en;
  }
  document.addEventListener("DOMContentLoaded", function () {
    h || new cookieNoticeJS();
  }),
    (window.cookieNoticeJS = function () {
      if (
        void 0 === h &&
        ((h = this),
        (document.cookie = "testCookie=1"),
        -1 != document.cookie.indexOf("testCookie") &&
          -1 == document.cookie.indexOf("cookie_notice"))
      ) {
        var e,
          o,
          t,
          n,
          i,
          r,
          a = (function e(o, t) {
            var n;
            for (n in t)
              t.hasOwnProperty(n) &&
                ("object" == typeof o[n]
                  ? (o[n] = e(o[n], t[n]))
                  : (o[n] = t[n]));
            return o;
          })(v, arguments[0] || {}),
          s = (function (e, o, t, n) {
            var i = document.createElement("div"),
              r = i.style;
            (i.innerHTML = e + "&nbsp;"),
              i.setAttribute("id", "cookieNotice"),
              (r.position = "fixed"),
              "top" === n ? (r.top = "0") : (r.bottom = "0");
            return (
              (r.left = "0"),
              (r.right = "0"),
              (r.background = o),
              (r.color = t),
              (r["z-index"] = "999"),
              (r.padding = "10px 5px"),
              (r["text-align"] = "center"),
              (r["font-size"] = "12px"),
              (r["line-height"] = "28px"),
              (r.fontFamily = "Helvetica neue, Helvetica, sans-serif"),
              i
            );
          })(
            g(a.messageLocales),
            a.noticeBgColor,
            a.noticeTextColor,
            a.cookieNoticePosition
          );
        if (a.learnMoreLinkEnabled) {
          var c = g(a.learnMoreLinkText);
          (o = c),
            (t = a.learnMoreLinkHref),
            (n = a.linkColor),
            (i = document.createElement("a")),
            (r = i.style),
            (i.href = t),
            (i.textContent = o),
            (i.target = "_blank"),
            (i.className = "learn-more"),
            (r.color = n),
            (r["text-decoration"] = "none"),
            (r.display = "inline"),
            (e = i);
        }
        var l,
          u,
          d,
          p,
          m,
          k = g(a.buttonLocales),
          f =
            ((l = k),
            (u = a.buttonBgColor),
            (d = a.buttonTextColor),
            (p = document.createElement("a")),
            (m = p.style),
            (p.href = "#"),
            (p.innerHTML = l),
            (p.className = "confirm"),
            (m.background = u),
            (m.color = d),
            (m["text-decoration"] = "none"),
            (m.display = "inline-block"),
            (m.padding = "0 15px"),
            (m.margin = "0 0 0 10px"),
            p);
        f.addEventListener("click", function (e) {
          var o, t, n, i;
          e.preventDefault(),
            (o = 60 * parseInt(a.expiresIn + "", 10) * 1e3 * 60 * 24),
            (t = new Date()),
            (n = new Date()).setTime(t.getTime() + o),
            (document.cookie =
              "cookie_notice=1; expires=" + n.toUTCString() + "; path=/;"),
            ((i = s).style.opacity = 1),
            (function e() {
              (i.style.opacity -= 0.1) < 0.01
                ? i.parentNode.removeChild(i)
                : setTimeout(e, 40);
            })();
        });
        var b = document.body.appendChild(s);
        e && b.appendChild(e), b.appendChild(f);
      }
    });
})();
