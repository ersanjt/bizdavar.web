document.querySelectorAll('[data-am-gallery]').forEach(function (root) {
      var main = root.querySelector('.am-pdp__main');
      var buttons = Array.prototype.slice.call(root.querySelectorAll('button[data-src]'));
      function show(index) {
        if (!buttons.length || !main) return 0;
        var i = (index + buttons.length) % buttons.length;
        var btn = buttons[i];
        main.src = btn.getAttribute('data-src');
        var alt = btn.getAttribute('data-alt');
        if (alt) main.alt = alt;
        buttons.forEach(function (node, n) { node.classList.toggle('is-active', n === i); });
        var box = document.getElementById('amGalleryLight');
        if (box && box.open) {
          var shot = box.querySelector('img');
          shot.src = main.src;
          shot.alt = main.alt;
        }
        return i;
      }
      root.addEventListener('click', function (event) {
        var btn = event.target.closest('button[data-src]');
        if (!btn) return;
        show(buttons.indexOf(btn));
      });
      if (!main) return;
      main.addEventListener('click', function () {
        var box = document.getElementById('amGalleryLight');
        if (!box) {
          box = document.createElement('dialog');
          box.id = 'amGalleryLight';
          box.className = 'am-gallery-light';
          var lang = (document.documentElement.lang || 'fa').slice(0, 2);
          var labels = {
            fa: ['بستن گالری', 'تصویر قبلی', 'تصویر بعدی'],
            tr: ['Kapat', 'Önceki', 'Sonraki'],
            en: ['Close gallery', 'Previous image', 'Next image'],
            ru: ['Закрыть', 'Назад', 'Дальше'],
            ar: ['إغلاق', 'السابق', 'التالي']
          }[lang] || ['Close', 'Previous', 'Next'];
          box.innerHTML = '<button type="button" class="am-gallery-light__close" data-close aria-label="' + labels[0] + '">×</button><button type="button" class="am-gallery-light__nav am-gallery-light__nav--prev" data-prev aria-label="' + labels[1] + '">‹</button><img alt=""><button type="button" class="am-gallery-light__nav am-gallery-light__nav--next" data-next aria-label="' + labels[2] + '">›</button>';
          document.body.appendChild(box);
          box.querySelector('[data-close]').addEventListener('click', function () { box.close(); });
          box.addEventListener('click', function (event) { if (event.target === box) box.close(); });
          box.querySelector('[data-prev]').addEventListener('click', function () {
            var i = buttons.findIndex(function (node) { return node.classList.contains('is-active'); });
            show(i - 1);
          });
          box.querySelector('[data-next]').addEventListener('click', function () {
            var i = buttons.findIndex(function (node) { return node.classList.contains('is-active'); });
            show(i + 1);
          });
        }
        var shot = box.querySelector('img');
        shot.src = main.src;
        shot.alt = main.alt;
        if (typeof box.showModal === 'function') box.showModal();
      });
    });
