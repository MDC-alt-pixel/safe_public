// Composant pour l'affichage des signalements
const reportsComponent = {
    renderReportCard(report) {
        const statusLabels = {
            pending: 'En attente',
            in_progress: 'En cours',
            resolved: 'Résolu'
        };

        return `
            <div class="col-md-4">
                <div class="card report-card border-0 shadow-sm">
                    <div class="position-relative">
                        <img src="${report.images[0]}" class="card-img-top report-image" alt="${report.type}">
                        <span class="badge badge-${report.status} report-status">
                            ${statusLabels[report.status]}
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${report.type}</h5>
                        <p class="card-text text-muted">${report.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                                <i class="bi bi-geo-alt me-1"></i>${report.location}
                            </small>
                            <small class="text-muted">
                                ${dateUtils.timeAgo(report.createdAt)}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    displayRecentReports(containerId, limit = 6) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const reports = storageUtils.getReports()
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, limit);

        container.innerHTML = reports.map(this.renderReportCard).join('');
    }
};