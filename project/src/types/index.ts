export type ReportStatus = 'pending' | 'in_progress' | 'resolved';

export interface Report {
  id: string;
  type: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  images: string[];
  status: ReportStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}