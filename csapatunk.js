document.addEventListener("DOMContentLoaded", function() {
  // Add close button to Lightbox overlay
  lightbox.option({
      'fadeDuration': 300,
      'resizeDuration': 300,
      'wrapAround': true,
      'albumLabel': "Image %1 of %2",
      'disableScrolling': true,
      'alwaysShowNavOnTouchDevices': true
  });

  // Create and append the close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  closeButton.classList.add('lightbox-close');
  closeButton.style.position = 'fixed';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '1000';
  closeButton.onclick = function() {
      lightbox.end();
  };

  document.querySelector('body').appendChild(closeButton);
});