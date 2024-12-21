import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Camera, MapPin } from 'lucide-react';

export const ReportForm = () => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log({ type, description, images });
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="mb-4">Signaler une anomalie</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Type d'anomalie</Form.Label>
            <Form.Select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Sélectionnez un type</option>
              <option value="waste">Dépôt sauvage</option>
              <option value="pothole">Nid de poule</option>
              <option value="lighting">Éclairage défectueux</option>
              <option value="graffiti">Graffiti</option>
              <option value="other">Autre</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <Camera className="me-2" />
              Photos
            </Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setImages(e.target.files)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <MapPin className="me-2" />
              Localisation
            </Form.Label>
            <div className="border rounded p-2">
              {/* TODO: Implement map component */}
              <p className="text-muted mb-0">Cliquez pour sélectionner la localisation</p>
            </div>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Envoyer le signalement
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};