document.addEventListener('DOMContentLoaded', function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const urlParams = new URLSearchParams(window.location.search);
    const isLaunchedFromPWA = urlParams.get('source') === 'pwa';

    if (!isMobile) {
        // Show message for mobile-only app
        document.getElementById('mobileOnly').style.display = 'block';
    } else if (isMobile && !isLaunchedFromPWA) {
        // It's mobile but not launched as PWA
        document.getElementById('installPrompt').style.display = 'block';
        // Additional logic to guide installation can be added here
    } else {
        // It's mobile and launched as PWA
        document.getElementById('napApp').style.display = 'block';
    }
});
