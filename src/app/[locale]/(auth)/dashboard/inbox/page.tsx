'use client';

import { Mail, Star, Trash2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const emails = [
  {
    id: 1,
    sender: 'Alice Johnson',
    avatar: '/avatars/05.png',
    subject: 'Project Update: Q1 Goals',
    preview: 'I wanted to share the latest updates on our Q1 goals and progress...',
    time: '10:30 AM',
    unread: true,
    starred: false,
  },
  {
    id: 2,
    sender: 'Robert Smith',
    avatar: '/avatars/06.png',
    subject: 'Design Review Meeting',
    preview: 'Let\'s schedule a design review meeting for the new feature...',
    time: 'Yesterday',
    unread: false,
    starred: true,
  },
  {
    id: 3,
    sender: 'Emma Davis',
    avatar: '/avatars/07.png',
    subject: 'Client Feedback',
    preview: 'The client has provided feedback on the latest deliverables...',
    time: 'Yesterday',
    unread: true,
    starred: false,
  },
  {
    id: 4,
    sender: 'James Wilson',
    avatar: '/avatars/08.png',
    subject: 'Team Building Event',
    preview: 'I\'m excited to announce our upcoming team building event...',
    time: 'Dec 20',
    unread: false,
    starred: false,
  },
];

export default function InboxPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inbox</h2>
      </div>
      <div className="rounded-lg border bg-card">
        {emails.map(email => (
          <div
            key={email.id}
            className={`flex cursor-pointer items-center space-x-4 border-b p-4 hover:bg-muted/50 ${
              email.unread ? 'bg-muted/30' : ''
            }`}
          >
            <Avatar>
              <AvatarImage src={email.avatar} alt={email.sender} />
              <AvatarFallback>
                {email.sender
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className={`text-sm ${email.unread ? 'font-semibold' : 'font-medium'}`}>
                  {email.sender}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-muted-foreground">{email.time}</p>
                  {email.starred && (
                    <Star className="size-4 fill-primary text-primary" />
                  )}
                </div>
              </div>
              <p className={`text-sm ${email.unread ? 'font-medium' : ''}`}>
                {email.subject}
              </p>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                {email.preview}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="rounded-full p-2 hover:bg-muted">
                <Mail className="size-4 text-muted-foreground" />
              </button>
              <button className="rounded-full p-2 hover:bg-muted">
                <Trash2 className="size-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
