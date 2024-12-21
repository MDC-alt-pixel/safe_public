// Composant pour les types de signalement
const reportTypesComponent = {
    types: [
        { id: 'waste', icon: 'trash', label: 'Dépôt sauvage' },
        { id: 'pothole', icon: 'exclamation-triangle', label: 'Nid de poule' },
        { id: 'lighting', icon: 'lightbulb', label: 'Éclairage' },
        { id: 'graffiti', icon: 'brush', label: 'Graffiti' },
        { id: 'vegetation', icon: 'tree', label: 'Végétation' },
        { id: 'other', icon: 'three-dots', label: 'Autre' }
    ],

    init() {
        const container = document.getElementById('reportTypeButtons');
        if (!container) return;

        container.innerHTML = this.types.map(type => `
            <div class="col-6 col-md-4">
                <input type="radio" class="btn-check" name="reportType" 
                       id="${type.id}" value="${type.id}" required>
                <label class="btn btn-outline-success w-100 text-start" for="${type.id}">
                    <i class="bi bi-${type.icon} me-2"></i>${type.label}
                </label>
            </div>
        `).join('');
    }
};