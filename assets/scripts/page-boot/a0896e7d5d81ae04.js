document.querySelectorAll('[data-am-gallery]').forEach(function (root) {
      var main = root.querySelector('.am-pdp__main');
      root.addEventListener('click', function (event) {
        var btn = event.target.closest('button[data-src]');
        if (!btn || !main) return;
        main.src = btn.getAttribute('data-src');
        root.querySelectorAll('button[data-src]').forEach(function (node) {
          node.classList.toggle('is-active', node === btn);
        });
      });
    });
