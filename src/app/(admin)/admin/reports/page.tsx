'use client';

import { useState } from 'react';
import { Flag, CheckCircle, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';

// Mock data
const MOCK_REPORTS = [
  { id: '1', reporter: 'janedoe', targetType: 'ARTICLE', targetTitle: 'Fake News Article', reason: 'MISINFORMATION', status: 'PENDING', createdAt: '2024-05-12' },
  { id: '2', reporter: 'alexsmith', targetType: 'COMMENT', targetTitle: 'Hateful comment', reason: 'HARASSMENT', status: 'PENDING', createdAt: '2024-05-13' },
  { id: '3', reporter: 'johndoe', targetType: 'USER', targetTitle: 'scammer_bot', reason: 'SPAM', status: 'RESOLVED', createdAt: '2024-05-10' },
];

export default function AdminReportsPage() {
  return (
    <div className="p-xl fade-in">
      <div className="m-b-xl">
        <h1 className="text-xl text-bold">Reported Content</h1>
        <p className="text-sm text-secondary">Review and resolve reports from the community.</p>
      </div>

      <div className="grid gap-md">
        {MOCK_REPORTS.map((report) => (
          <div key={report.id} className="card flex justify-between items-center">
            <div className="flex gap-lg items-center">
              <div className={`p-md rounded-full ${report.status === 'PENDING' ? 'bg-error-light text-error' : 'bg-success-light text-success'}`}>
                {report.status === 'PENDING' ? <AlertTriangle size={24} /> : <CheckCircle size={24} />}
              </div>
              <div>
                <div className="flex items-center gap-sm m-b-xs">
                  <Badge variant="outline">{report.targetType}</Badge>
                  <span className="text-bold">{report.targetTitle}</span>
                </div>
                <div className="flex gap-md text-xs text-muted">
                  <span>Reported by: <strong>@{report.reporter}</strong></span>
                  <span>Reason: <strong>{report.reason}</strong></span>
                  <span>Date: {report.createdAt}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-sm">
              <Button variant="ghost" size="sm" title="View Target">
                <ExternalLink size={18} />
              </Button>
              {report.status === 'PENDING' && (
                <>
                  <Button variant="outline" size="sm" className="text-success border-success hover:bg-success/10">
                    <CheckCircle size={18} className="m-r-xs" /> Dismiss
                  </Button>
                  <Button variant="destructive" size="sm">
                    <XCircle size={18} className="m-r-xs" /> Resolve
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
