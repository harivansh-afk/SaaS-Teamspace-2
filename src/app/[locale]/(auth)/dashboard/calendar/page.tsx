'use client';

import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';

const events = [
  {
    id: 1,
    title: 'Team Meeting',
    date: '2024-01-10',
    time: '10:00 AM',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'Project Deadline',
    date: '2024-01-15',
    time: '5:00 PM',
    type: 'deadline',
  },
  {
    id: 3,
    title: 'Client Presentation',
    date: '2024-01-20',
    time: '2:00 PM',
    type: 'presentation',
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map(event => (
              <div
                key={event.id}
                className="flex items-center space-x-4 rounded-lg border p-4"
              >
                <CalendarIcon className="size-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {event.date}
                    {' at '}
                    {event.time}
                  </p>
                </div>
                <span className="text-xs capitalize text-muted-foreground">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
