// Initialize analytics when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Debug line to verify script loading
    console.log('Analytics script loaded at:', new Date().toISOString());
    
    try {
        initializeAnalytics();
    } catch (error) {
        console.error('Analytics initialization error:', error);
    }
});

function initializeAnalytics() {
    // Track initial page view
    logEvent('view', 'page', 'Initial page load');

    // Track section views
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                logEvent('view', 'section', entry.target.id);
            }
        });
    });

    sections.forEach(section => observer.observe(section));

    // Track clicks on all interactive elements
    document.addEventListener('click', (event) => {
        const target = event.target;
        const eventDetails = getEventDetails(target);
        logEvent('click', eventDetails.type, eventDetails.description);
    });
}

function getEventDetails(element) {
    // Profile picture
    if (element.classList.contains('profile-picture')) {
        return {
            type: 'image',
            description: 'Profile Picture'
        };
    }

    // Gallery images
    if (element.closest('.gallery-item')) {
        return {
            type: 'image',
            description: `Gallery Image: ${element.alt || 'Unnamed'}`
        };
    }

    // Navigation buttons
    if (element.classList.contains('toggle-button')) {
        return {
            type: 'navigation',
            description: `Section: ${element.textContent}`
        };
    }

    // CV download link
    if (element.matches('a[href$=".pdf"]')) {
        return {
            type: 'download',
            description: 'CV PDF'
        };
    }

    // Text content
    if (element.tagName === 'P' || element.tagName === 'LI') {
        return {
            type: 'text',
            description: element.textContent.substring(0, 50) + '...'
        };
    }

    // Text analyzer button
    if (element.classList.contains('analyze-button')) {
        return {
            type: 'button',
            description: 'Text Analyzer'
        };
    }

    // Default case
    return {
        type: element.tagName.toLowerCase(),
        description: element.className || 'unnamed-element'
    };
}

function logEvent(eventType, objectType, description) {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}, ${eventType}, ${objectType}: ${description}`);
}