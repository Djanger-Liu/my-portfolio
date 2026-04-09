(function () {
  const config = window.ANALYTICS_CONFIG || {};
  const gaId = config.gaMeasurementId;
  const clarityId = config.clarityProjectId;

  function loadScript(src, attrs = {}) {
    const script = document.createElement('script');
    script.src = src;
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === true) {
        script.setAttribute(key, '');
      } else if (value !== false && value != null) {
        script.setAttribute(key, value);
      }
    });
    document.head.appendChild(script);
    return script;
  }

  if (gaId && gaId !== 'G-XXXXXXXXXX') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId);

    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId), {
      async: true
    });
  } else {
    console.warn('[analytics] GA4 未配置，跳过加载。');
  }

  if (clarityId && clarityId !== 'YOUR_CLARITY_PROJECT_ID') {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/' + i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, 'clarity', 'script', clarityId);
  } else {
    console.warn('[analytics] Clarity 未配置，跳过加载。');
  }
})();
