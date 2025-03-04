if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(
      function(registration) {
        console.log('Service Worker 註冊成功，範圍:', registration.scope);
      },
      function(err) {
        console.log('Service Worker 註冊失敗:', err);
      }
    );
  });
}
