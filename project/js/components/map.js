// Composant pour la carte
const mapComponent = {
    map: null,
    marker: null,

    init() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        // Initialiser la carte Leaflet
        this.map = L.map('map').setView([48.8566, 2.3522], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

        // Configurer les événements
        this.map.on('click', (e) => this.updateMarker(e.latlng));
        
        document.getElementById('geolocateButton')?.addEventListener('click', 
            () => this.geolocateUser()
        );
    },

    updateMarker(latlng) {
        if (this.marker) {
            this.marker.setLatLng(latlng);
        } else {
            this.marker = L.marker(latlng).addTo(this.map);
        }
        this.map.panTo(latlng);
    },

    async geolocateUser() {
        if (!('geolocation' in navigator)) {
            alert('Géolocalisation non supportée');
            return;
        }

        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const latlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            this.updateMarker(latlng);
            this.map.setView(latlng, 16);
        } catch (err) {
            console.error('Erreur de géolocalisation:', err);
            alert('Impossible d\'obtenir votre position');
        }
    },

    getLocation() {
        return this.marker ? this.marker.getLatLng() : null;
    }
};