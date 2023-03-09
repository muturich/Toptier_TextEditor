const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt from showing up
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the custom install button
  butInstall.hidden = false;
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the custom install button
  butInstall.hidden = true;
  // Show the installation prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  const result = await deferredPrompt.userChoice;
  console.log('User response:', result);
  // Reset the deferredPrompt variable
  deferredPrompt = null;
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed:', event);
  // TODO: Add logic for what happens after the app is installed
});
