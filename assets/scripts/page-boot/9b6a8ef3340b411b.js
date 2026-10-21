(function () {
      var dialog = document.getElementById('ostLight');
      if (!dialog || typeof dialog.showModal !== 'function') return;
      var img = dialog.querySelector('img');
      var cap = dialog.querySelector('p');
      var closeBtn = dialog.querySelector('[data-ost-close]');
      var labels = { fa: 'بستن', ar: 'إغلاق', ru: 'Закрыть', tr: 'Kapat', en: 'Close' };
      var lang = (document.documentElement.lang || 'en').slice(0, 2);
      if (closeBtn) closeBtn.setAttribute('aria-label', labels[lang] || 'Close');
      document.querySelectorAll('[data-ost-open]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var source = btn.querySelector('img');
          if (!source) return;
          img.src = source.currentSrc || source.src;
          img.alt = source.alt || '';
          var note = btn.querySelector('.ost-shot__cap');
          cap.textContent = note ? note.textContent.trim() : '';
          cap.hidden = !cap.textContent;
          dialog.showModal();
        });
      });
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
      });
      if (closeBtn) closeBtn.addEventListener('click', function () { dialog.close(); });
    })();
