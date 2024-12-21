// Composant pour la prévisualisation des images
const imagePreviewComponent = {
    init() {
        const input = document.getElementById('photos');
        const container = document.getElementById('imagePreviewContainer');
        const captureButton = document.getElementById('captureButton');
        
        if (!input || !container || !captureButton) return;

        input.addEventListener('change', () => this.handleImageSelection(input.files));
        
        // Configuration de la capture photo si disponible
        if ('mediaDevices' in navigator) {
            captureButton.addEventListener('click', () => this.startCapture());
        } else {
            captureButton.style.display = 'none';
        }
    },

    handleImageSelection(files) {
        if (!validationUtils.validateImageFiles(files)) {
            alert('Veuillez sélectionner des images valides (JPG, PNG, max 5MB)');
            return;
        }

        const container = document.getElementById('imagePreviewContainer');
        container.innerHTML = Array.from(files).map((file, index) => `
            <div class="position-relative">
                <img src="${URL.createObjectURL(file)}" 
                     alt="Aperçu ${index + 1}" 
                     class="rounded" 
                     style="height: 80px; width: 80px; object-fit: cover;">
                <button type="button" class="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onclick="imagePreviewComponent.removeImage(${index})">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `).join('');
    },

    removeImage(index) {
        const input = document.getElementById('photos');
        const container = document.getElementById('imagePreviewContainer');
        
        const dt = new DataTransfer();
        Array.from(input.files).forEach((file, i) => {
            if (i !== index) dt.items.add(file);
        });
        
        input.files = dt.files;
        this.handleImageSelection(input.files);
    },

    async startCapture() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // Implémenter la capture photo
        } catch (err) {
            console.error('Erreur de capture:', err);
            alert('Impossible d\'accéder à la caméra');
        }
    }
};