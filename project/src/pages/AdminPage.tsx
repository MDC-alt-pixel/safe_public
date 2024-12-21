import React, { useState } from 'react';
import { Container, Tab, Tabs, Badge } from 'react-bootstrap';
import { ReportList } from '../components/ReportList';

const mockReports = [
  {
    id: '1',
    type: 'Dépôt sauvage',
    description: 'Plusieurs sacs poubelles abandonnés',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      address: '123 rue Example, Ville'
    },
    images: ['https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600'],
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user1'
  }
  // Add more mock reports as needed
];

export const AdminPage = () => {
  const [key, setKey] = useState('pending');

  const filteredReports = mockReports.filter(report => report.status === key);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Gestion des signalements</h1>
      
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k || 'pending')}
        className="mb-4"
      >
        <Tab 
          eventKey="pending" 
          title={
            <span>
              En attente <Badge bg="warning">{mockReports.filter(r => r.status === 'pending').length}</Badge>
            </span>
          }
        >
          <ReportList reports={filteredReports} />
        </Tab>
        <Tab 
          eventKey="in_progress" 
          title={
            <span>
              En cours <Badge bg="info">{mockReports.filter(r => r.status === 'in_progress').length}</Badge>
            </span>
          }
        >
          <ReportList reports={filteredReports} />
        </Tab>
        <Tab 
          eventKey="resolved" 
          title={
            <span>
              Résolus <Badge bg="success">{mockReports.filter(r => r.status === 'resolved').length}</Badge>
            </span>
          }
        >
          <ReportList reports={filteredReports} />
        </Tab>
      </Tabs>
    </Container>
  );
};