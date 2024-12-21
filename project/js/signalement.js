// Initialisation de la page de signalement
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les composants
    validationUtils.setupFormValidation('reportForm');
    reportTypesComponent.init();
    imagePreviewComponent.init();
    mapComponent.init();

    // Gérer la soumission du formulaire
    const form = document.getElementById('reportForm');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!form.checkValidity()) return;

        const location = mapComponent.getLocation();
        if (!location) {
            alert('Veuillez sélectionner un emplacement sur la carte');
            return;
        }

        const formData = {
            type: document.querySelector('input[name="reportType"]:checked')?.value,
            description: document.getElementById('description')?.value,
            location: {
                latitude: location.lat,
                longitude: location.lng
            },
            images: Array.from(document.getElementById('photos')?.files || [])
        };

        try {
            // Sauvegarder le signalement
            storageUtils.saveReport(formData);
            
            // Rediriger vers la page de confirmation
            window.location.href = 'index.html?status=success';
        } catch (err) {
            console.error('Erreur lors de la sauvegarde:', err);
            alert('Une erreur est survenue lors de l\'envoi du signalement');
        }
    });
});