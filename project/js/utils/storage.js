// Utilitaires pour la gestion du stockage local
const storageUtils = {
    saveReport(report) {
        const reports = this.getReports();
        reports.push({
            ...report,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('reports', JSON.stringify(reports));
    },

    getReports() {
        return JSON.parse(localStorage.getItem('reports') || '[]');
    },

    updateReportStatus(reportId, newStatus) {
        const reports = this.getReports();
        const report = reports.find(r => r.id === reportId);
        if (report) {
            report.status = newStatus;
            report.updatedAt = new Date().toISOString();
            localStorage.setItem('reports', JSON.stringify(reports));
        }
    }
};