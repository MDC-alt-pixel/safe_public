import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Report } from '../types';

interface ReportListProps {
  reports: Report[];
}

const getStatusBadge = (status: Report['status']) => {
  const variants = {
    pending: 'warning',
    in_progress: 'info',
    resolved: 'success'
  };
  const labels = {
    pending: 'En attente',
    in_progress: 'En cours',
    resolved: 'Résolu'
  };
  return <Badge bg={variants[status]}>{labels[status]}</Badge>;
};

export const ReportList = ({ reports }: ReportListProps) => {
  return (
    <div className="report-list">
      {reports.map((report) => (
        <Card key={report.id} className="mb-3 shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-1">{report.type}</h5>
                <p className="text-muted mb-2">
                  {format(report.createdAt, 'PPP à HH:mm', { locale: fr })}
                </p>
              </div>
              {getStatusBadge(report.status)}
            </div>
            <p className="mb-2">{report.description}</p>
            <small className="text-muted">
              <MapPin className="me-1" size={16} />
              {report.location.address}
            </small>
            {report.images.length > 0 && (
              <div className="mt-3">
                <div className="d-flex gap-2">
                  {report.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Photo ${index + 1}`}
                      className="rounded"
                      style={{ width: 100, height: 100, objectFit: 'cover' }}
                    />
                  ))}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};