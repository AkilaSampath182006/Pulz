try {
  (function (w, d) {
    zaraz.debug = (eX = "") => {
      document.cookie = `zarazDebug=${eX}; path=/`;
      location.reload();
    };
    window.zaraz._al = function (dZ, d$, ea) {
      w.zaraz.listeners.push({ item: dZ, type: d$, callback: ea });
      dZ.addEventListener(d$, ea);
    };
    zaraz.preview = (db = "") => {
      document.cookie = `zarazPreview=${db}; path=/`;
      location.reload();
    };
    zaraz.i = function (eH) {
      const eI = d.createElement("div");
      eI.innerHTML = unescape(eH);
      const eJ = eI.querySelectorAll("script"),
        eK = d.querySelector("script[nonce]"),
        eL = eK?.nonce || eK?.getAttribute("nonce");
      for (let eM = 0; eM < eJ.length; eM++) {
        const eN = d.createElement("script");
        eL && (eN.nonce = eL);
        eJ[eM].innerHTML && (eN.innerHTML = eJ[eM].innerHTML);
        for (const eO of eJ[eM].attributes) eN.setAttribute(eO.name, eO.value);
        d.head.appendChild(eN);
        eJ[eM].remove();
      }
      d.body.appendChild(eI);
    };
    zaraz.f = async function (eb, ec) {
      const ed = { credentials: "include", keepalive: !0, mode: "no-cors" };
      if (ec) {
        ed.method = "POST";
        ed.body = new URLSearchParams(ec);
        ed.headers = { "Content-Type": "application/x-www-form-urlencoded" };
      }
      return await fetch(eb, ed);
    };
    window.zaraz._p = async (bs) =>
      new Promise((bt) => {
        if (bs) {
          bs.e &&
            bs.e.forEach((bu) => {
              try {
                const bv = d.querySelector("script[nonce]"),
                  bw = bv?.nonce || bv?.getAttribute("nonce"),
                  bx = d.createElement("script");
                bw && (bx.nonce = bw);
                bx.innerHTML = bu;
                bx.onload = () => {
                  d.head.removeChild(bx);
                };
                d.head.appendChild(bx);
              } catch (by) {
                console.error(`Error executing script: ${bu}\n`, by);
              }
            });
          Promise.allSettled((bs.f || []).map((bz) => fetch(bz[0], bz[1])));
        }
        bt();
      });
    zaraz.pageVariables = {};
    zaraz.__zcl = zaraz.__zcl || {};
    zaraz.track = async function (eh, ei, ej) {
      return new Promise((ek, el) => {
        const em = { name: eh, data: {} };
        if (ei?.__zarazClientEvent)
          Object.keys(localStorage)
            .filter((eo) => eo.startsWith("_zaraz_google_consent_"))
            .forEach((en) => (em.data[en] = localStorage.getItem(en)));
        else {
          for (const ep of [localStorage, sessionStorage])
            Object.keys(ep || {})
              .filter((er) => er.startsWith("_zaraz_"))
              .forEach((eq) => {
                try {
                  em.data[eq.slice(7)] = JSON.parse(ep.getItem(eq));
                } catch {
                  em.data[eq.slice(7)] = ep.getItem(eq);
                }
              });
          Object.keys(zaraz.pageVariables).forEach(
            (es) => (em.data[es] = JSON.parse(zaraz.pageVariables[es]))
          );
        }
        Object.keys(zaraz.__zcl).forEach(
          (et) => (em.data[`__zcl_${et}`] = zaraz.__zcl[et])
        );
        em.data.__zarazMCListeners = zaraz.__zarazMCListeners;
        //
        em.data = { ...em.data, ...ei };
        em.zarazData = zarazData;
        fetch("/cdn-cgi/zaraz/t", {
          credentials: "include",
          keepalive: !0,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(em),
        })
          .catch(() => {
            //
            return fetch("/cdn-cgi/zaraz/t", {
              credentials: "include",
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(em),
            });
          })
          .then(function (ev) {
            zarazData._let = new Date().getTime();
            ev.ok || el();
            return 204 !== ev.status && ev.json();
          })
          .then(async (eu) => {
            await zaraz._p(eu);
            "function" == typeof ej && ej();
          })
          .finally(() => ek());
      });
    };
    zaraz.set = function (ew, ex, ey) {
      try {
        ex = JSON.stringify(ex);
      } catch (ez) {
        return;
      }
      prefixedKey = "_zaraz_" + ew;
      sessionStorage && sessionStorage.removeItem(prefixedKey);
      localStorage && localStorage.removeItem(prefixedKey);
      delete zaraz.pageVariables[ew];
      if (void 0 !== ex) {
        ey && "session" == ey.scope
          ? sessionStorage && sessionStorage.setItem(prefixedKey, ex)
          : ey && "page" == ey.scope
          ? (zaraz.pageVariables[ew] = ex)
          : localStorage && localStorage.setItem(prefixedKey, ex);
        zaraz.__watchVar = { key: ew, value: ex };
      }
    };
    for (const { m: eA, a: eB } of zarazData.q.filter(({ m: eC }) =>
      ["debug", "set"].includes(eC)
    ))
      zaraz[eA](...eB);
    for (const { m: eD, a: eE } of zaraz.q) zaraz[eD](...eE);
    delete zaraz.q;
    delete zarazData.q;
    zaraz.spaPageview = () => {
      zarazData.l = d.location.href;
      zarazData.t = d.title;
      zaraz.pageVariables = {};
      zaraz.__zarazMCListeners = {};
      zaraz.track("__zarazSPA");
    };
    zaraz.fulfilTrigger = function (dy, dz, dA, dB) {
      zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
      zaraz.__zarazTriggerMap[dy] || (zaraz.__zarazTriggerMap[dy] = "");
      zaraz.__zarazTriggerMap[dy] += "*" + dz + "*";
      zaraz.track(
        "__zarazEmpty",
        { ...dA, __zarazClientTriggers: zaraz.__zarazTriggerMap[dy] },
        dB
      );
    };
    zaraz._processDataLayer = (eQ) => {
      for (const eR of Object.entries(eQ))
        zaraz.set(eR[0], eR[1], { scope: "page" });
      if (eQ.event) {
        if (
          zarazData.dataLayerIgnore &&
          zarazData.dataLayerIgnore.includes(eQ.event)
        )
          return;
        let eS = {};
        for (let eT of dataLayer.slice(0, dataLayer.indexOf(eQ) + 1))
          eS = { ...eS, ...eT };
        delete eS.event;
        eQ.event.startsWith("gtm.") || zaraz.track(eQ.event, eS);
      }
    };
    window.dataLayer = w.dataLayer || [];
    const eP = w.dataLayer.push;
    Object.defineProperty(w.dataLayer, "push", {
      configurable: !0,
      enumerable: !1,
      writable: !0,
      value: function (...eU) {
        let eV = eP.apply(this, eU);
        zaraz._processDataLayer(eU[0]);
        return eV;
      },
    });
    dataLayer.forEach((eW) => zaraz._processDataLayer(eW));
    zaraz._cts = () => {
      zaraz._timeouts && zaraz._timeouts.forEach((bC) => clearTimeout(bC));
      zaraz._timeouts = [];
    };
    zaraz._rl = function () {
      w.zaraz.listeners &&
        w.zaraz.listeners.forEach((bD) =>
          bD.item.removeEventListener(bD.type, bD.callback)
        );
      window.zaraz.listeners = [];
    };
    history.pushState = function () {
      try {
        zaraz._rl();
        zaraz._cts && zaraz._cts();
      } finally {
        History.prototype.pushState.apply(history, arguments);
        setTimeout(zaraz.spaPageview, 100);
      }
    };
    history.replaceState = function () {
      try {
        zaraz._rl();
        zaraz._cts && zaraz._cts();
      } finally {
        History.prototype.replaceState.apply(history, arguments);
        setTimeout(zaraz.spaPageview, 100);
      }
    };
    zaraz._c = (cZ) => {
      const { event: c$, ...da } = cZ;
      zaraz.track(c$, { ...da, __zarazClientEvent: !0 });
    };
    zaraz._syncedAttributes = [
      "altKey",
      "clientX",
      "clientY",
      "pageX",
      "pageY",
      "button",
    ];
    zaraz.__zcl.track = !0;
    zaraz._p({
      e: [
        '(function(w,d){;w.zarazData.executed.push("Pageview");})(window,document)',
        "(function(w,d){})(window,document)",
      ],
    });
  })(window, document);
} catch (e) {
  throw (fetch("/cdn-cgi/zaraz/t"), e);
}
