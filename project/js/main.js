// Initialisation de la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    // Afficher les signalements récents
    reportsComponent.displayRecentReports('recent-reports');

    // Animation au scroll pour les sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});