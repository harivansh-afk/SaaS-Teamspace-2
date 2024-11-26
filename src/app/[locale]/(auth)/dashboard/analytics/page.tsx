'use client';

import { Analytics } from '@/components/features/Analytics';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Analytics />
        </div>
        <div className="col-span-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold">Key Metrics</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">12,345</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Sessions</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">2.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
