// Gestionnaire de la page liste des signalements
document.addEventListener('DOMContentLoaded', () => {
    // État de la page
    let currentPage = 1;
    const itemsPerPage = 9;
    let filters = {
        type: '',
        status: '',
        sort: 'newest'
    };

    // Initialiser les filtres
    initializeFilters();
    
    // Charger les signalements
    loadReports();

    // Gestionnaires d'événements pour les filtres
    document.getElementById('typeFilter').addEventListener('change', (e) => {
        filters.type = e.target.value;
        currentPage = 1;
        loadReports();
    });

    document.getElementById('statusFilter').addEventListener('change', (e) => {
        filters.status = e.target.value;
        currentPage = 1;
        loadReports();
    });

    document.getElementById('sortOrder').addEventListener('change', (e) => {
        filters.sort = e.target.value;
        currentPage = 1;
        loadReports();
    });

    function initializeFilters() {
        // Remplir le filtre de types
        const typeFilter = document.getElementById('typeFilter');
        reportTypesComponent.types.forEach(type => {
            const option = document.createElement('option');
            option.value = type.id;
            option.textContent = type.label;
            typeFilter.appendChild(option);
        });
    }

    function loadReports() {
        let reports = storageUtils.getReports();

        // Appliquer les filtres
        if (filters.type) {
            reports = reports.filter(report => report.type === filters.type);
        }
        if (filters.status) {
            reports = reports.filter(report => report.status === filters.status);
        }

        // Appliquer le tri
        reports.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return filters.sort === 'newest' ? dateB - dateA : dateA - dateB;
        });

        // Pagination
        const totalPages = Math.ceil(reports.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedReports = reports.slice(start, start + itemsPerPage);

        // Afficher les signalements
        const container = document.getElementById('reportsList');
        container.innerHTML = paginatedReports.map(report => reportsComponent.renderReportCard(report)).join('');

        // Mettre à jour la pagination
        updatePagination(totalPages);
    }

    function updatePagination(totalPages) {
        const pagination = document.getElementById('pagination');
        let html = '';

        // Bouton précédent
        html += `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage - 1}">
                    <i class="bi bi-chevron-left"></i>
                </a>
            </li>
        `;

        // Pages
        for (let i = 1; i <= totalPages; i++) {
            html += `
                <li class="page-item ${currentPage === i ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        // Bouton suivant
        html += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage + 1}">
                    <i class="bi bi-chevron-right"></i>
                </a>
            </li>
        `;

        pagination.innerHTML = html;

        // Ajouter les gestionnaires d'événements pour la pagination
        pagination.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const newPage = parseInt(e.target.dataset.page);
                if (newPage && newPage !== currentPage && newPage > 0 && newPage <= totalPages) {
                    currentPage = newPage;
                    loadReports();
                }
            });
        });
    }
});