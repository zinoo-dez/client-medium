'use client';

import { Save, Globe, Shield, Bell, Mail } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export default function AdminSettingsPage() {
  return (
    <div className="p-xl fade-in">
      <div className="flex justify-between items-center m-b-xl">
        <div>
          <h1 className="text-xl text-bold">Platform Settings</h1>
          <p className="text-sm text-secondary">Global configuration for the Medium Clone platform.</p>
        </div>
        <Button variant="default">
          <Save size={18} className="m-r-xs" /> Save All Changes
        </Button>
      </div>

      <div className="grid gap-xl">
        {/* General Settings */}
        <section className="card">
          <div className="flex items-center gap-md m-b-lg">
            <Globe size={20} className="text-brand" />
            <h2 className="text-lg text-bold">General Configuration</h2>
          </div>
          <div className="grid grid-cols-2 gap-lg">
            <div className="form-group">
              <label className="form-label">Site Name</label>
              <Input defaultValue="Medium Clone" />
            </div>
            <div className="form-group">
              <label className="form-label">Site Description</label>
              <Input defaultValue="A production-grade Medium clone built with Next.js" />
            </div>
            <div className="form-group">
              <label className="form-label">Support Email</label>
              <Input defaultValue="support@mediumclone.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Articles per Page</label>
              <Input type="number" defaultValue="20" />
            </div>
          </div>
        </section>

        {/* Security & Moderation */}
        <section className="card">
          <div className="flex items-center gap-md m-b-lg">
            <Shield size={20} className="text-brand" />
            <h2 className="text-lg text-bold">Security & Moderation</h2>
          </div>
          <div className="grid grid-cols-2 gap-lg">
            <div className="form-group">
              <label className="form-label">Auto-hide threshold (Reports)</label>
              <Input type="number" defaultValue="5" />
            </div>
            <div className="form-group">
              <label className="form-label">Max Articles per Day (Free User)</label>
              <Input type="number" defaultValue="3" />
            </div>
            <div className="flex items-center gap-md">
              <input type="checkbox" defaultChecked id="verify-email" />
              <label htmlFor="verify-email" className="text-sm">Require Email Verification</label>
            </div>
            <div className="flex items-center gap-md">
              <input type="checkbox" defaultChecked id="allow-reg" />
              <label htmlFor="allow-reg" className="text-sm">Allow New Registrations</label>
            </div>
          </div>
        </section>

        {/* Email Settings */}
        <section className="card">
          <div className="flex items-center gap-md m-b-lg">
            <Mail size={20} className="text-brand" />
            <h2 className="text-lg text-bold">Email (SMTP) Settings</h2>
          </div>
          <div className="grid grid-cols-2 gap-lg">
            <div className="form-group">
              <label className="form-label">SMTP Host</label>
              <Input defaultValue="smtp.mailtrap.io" />
            </div>
            <div className="form-group">
              <label className="form-label">SMTP Port</label>
              <Input defaultValue="2525" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
