// Initialize analytics when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeAnalytics();
});

function initializeAnalytics() {
    // Track page views
    logEvent('view', 'page', document.title);

    // Track clicks on all interactive elements
    document.addEventListener('click', (event) => {
        const target = event.target;
        
        // Determine the type of element clicked
        let elementType = getElementType(target);
        
        // Get any relevant text or alt text
        let elementDescription = getElementDescription(target);
        
        // Log the click event
        logEvent('click', elementType, elementDescription);
    });

    // Track when CV link is clicked
    const cvLink = document.querySelector('a[href$=".pdf"]');
    if (cvLink) {
        cvLink.addEventListener('click', () => {
            logEvent('click', 'cv-download', 'CV PDF');
        });
    }
}

function getElementType(element) {
    // Determine element type based on tag name and classes
    if (element.classList.contains('profile-picture')) return 'profile-image';
    if (element.classList.contains('toggle-button')) return 'navigation-button';
    if (element.tagName.toLowerCase() === 'img') return 'image';
    if (element.tagName.toLowerCase() === 'a') return 'link';
    if (element.classList.contains('content-section')) return 'section';
    return element.tagName.toLowerCase();
}

function getElementDescription(element) {
    // Get meaningful description of the element
    if (element.alt) return element.alt;
    if (element.textContent) return element.textContent.trim().substring(0, 50);
    if (element.className) return element.className;
    return 'unnamed-element';
}

function logEvent(eventType, objectType, description) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}, ${eventType}, ${objectType}: ${description}`;
    console.log(logMessage);
}