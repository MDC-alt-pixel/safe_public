import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="bg-light min-vh-100">
      <div className="bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 mb-3">Ensemble, améliorons notre ville</h1>
              <p className="lead mb-4">
                Signalez facilement les problèmes urbains : dépôts sauvages, nids de poule, 
                et autres anomalies. Nous les transmettrons aux autorités compétentes.
              </p>
              <Button
                as={Link}
                to="/report"
                variant="light"
                size="lg"
                className="me-3"
              >
                <AlertTriangle className="me-2" />
                Faire un signalement
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600"
                alt="Ville propre"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <h2 className="text-center mb-4">Comment ça marche ?</h2>
        <Row className="g-4">
          <Col md={4}>
            <div className="text-center">
              <div className="bg-success text-white rounded-circle p-3 d-inline-block mb-3">
                <Camera size={32} />
              </div>
              <h3>1. Photographiez</h3>
              <p>Prenez une photo du problème que vous souhaitez signaler</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <div className="bg-success text-white rounded-circle p-3 d-inline-block mb-3">
                <MapPin size={32} />
              </div>
              <h3>2. Localisez</h3>
              <p>Indiquez l'emplacement précis sur la carte</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <div className="bg-success text-white rounded-circle p-3 d-inline-block mb-3">
                <CheckCircle size={32} />
              </div>
              <h3>3. Suivez</h3>
              <p>Suivez l'avancement de votre signalement</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};