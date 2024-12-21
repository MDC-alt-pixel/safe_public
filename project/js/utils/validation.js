// Utilitaires de validation de formulaire
const validationUtils = {
    setupFormValidation(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    },

    validateImageFiles(files) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        
        return Array.from(files).every(file => 
            validTypes.includes(file.type) && file.size <= maxSize
        );
    }
};