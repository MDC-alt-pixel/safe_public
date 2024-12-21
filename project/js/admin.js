// Données de test (à remplacer par des appels API)
const mockReports = {
    pending: [
        {
            id: 1,
            type: 'Dépôt sauvage',
            description: 'Plusieurs sacs poubelles abandonnés',
            location: '123 rue Example',
            date: '2024-03-10',
            images: ['https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600']
        }
    ],
    inProgress: [],
    resolved: []
};

// Fonction pour afficher les signalements
function displayReports(status) {
    const reports = mockReports[status];
    const container = document.querySelector(`#${status} .report-list`);
    
    container.innerHTML = reports.map(report => `
        <div class="card mb-3 report-item">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 class="card-title">${report.type}</h5>
                        <p class="text-muted mb-2">${report.date}</p>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown">
                            Actions
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onclick="updateStatus(${report.id}, 'inProgress')">Marquer en cours</a></li>
                            <li><a class="dropdown-item" href="#" onclick="updateStatus(${report.id}, 'resolved')">Marquer comme résolu</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-text">${report.description}</p>
                <small class="text-muted">
                    <i class="bi bi-geo-alt"></i> ${report.location}
                </small>
                ${report.images ? `
                    <div class="report-images mt-3">
                        ${report.images.map(img => `
                            <img src="${img}" alt="Photo du signalement" class="report-image">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Fonction pour mettre à jour le statut d'un signalement
function updateStatus(reportId, newStatus) {
    // Simuler la mise à jour du statut
    console.log(`Mise à jour du signalement ${reportId} vers ${newStatus}`);
    // Recharger les signalements
    loadAllReports();
}

// Charger tous les signalements
function loadAllReports() {
    displayReports('pending');
    displayReports('inProgress');
    displayReports('resolved');
}

// Initialiser la page
document.addEventListener('DOMContentLoaded', loadAllReports);