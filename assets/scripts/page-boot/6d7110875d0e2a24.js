(function () {
      var dest = {
        ig: '/?utm_source=instagram&utm_medium=social&utm_campaign=bio',
        li: '/?utm_source=linkedin&utm_medium=social&utm_campaign=bio',
        wa: '/?utm_source=whatsapp&utm_medium=chat&utm_campaign=bio',
        mail: '/?utm_source=email&utm_medium=signature&utm_campaign=bio',
        tg: '/?utm_source=telegram&utm_medium=social&utm_campaign=bio'
      };
      var s = '';
      try { s = new URLSearchParams(location.search).get('s') || ''; } catch (e) {}
      location.replace(dest[s] || '/?utm_source=referral&utm_medium=bio&utm_campaign=bio');
    })();
