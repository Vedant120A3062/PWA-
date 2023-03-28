if (!('serviceWorker' in navigator)) {
    console.log('Service Not Supported');
    return ;
}

navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
  
            // Registration was successful
  
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
  
        });
  
    
  
  

