function showSection(sectionId) {
    // Hide the start interface
    const startInterface = document.getElementById('start-interface');
    if (startInterface) {
        startInterface.classList.add('hidden-start-interface');
    }

    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active'); // Remove active class
        section.style.animation = 'none'; // Reset animation
        section.classList.add('hidden'); // Add hidden class
    });

    // Show the selected section with animation
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        setTimeout(() => {
            activeSection.classList.remove('hidden'); // Remove hidden class
            activeSection.classList.add('active'); // Add active class
            activeSection.style.animation = 'fadeSlideIn 0.8s ease-in-out forwards'; // Trigger animation
        }, 100); // Small delay for smooth transition
    }

    // Highlight the active button
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => button.classList.remove('active')); // Remove active class from all buttons

    const activeButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active'); // Add active class to the clicked button
    }
}