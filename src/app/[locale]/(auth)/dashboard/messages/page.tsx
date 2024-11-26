'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    avatar: '/avatars/01.png',
    message: 'Hey, can you review the latest design changes?',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    sender: 'Sarah Wilson',
    avatar: '/avatars/02.png',
    message: 'The client meeting went well. They loved the proposal!',
    time: '4 hours ago',
    unread: false,
  },
  {
    id: 3,
    sender: 'Michael Brown',
    avatar: '/avatars/03.png',
    message: 'Don\'t forget about the team meeting tomorrow at 10 AM',
    time: '6 hours ago',
    unread: true,
  },
  {
    id: 4,
    sender: 'Emily Davis',
    avatar: '/avatars/04.png',
    message: 'I\'ve updated the project timeline. Please check when you can.',
    time: '1 day ago',
    unread: false,
  },
];

export default function MessagesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
      </div>
      <div className="rounded-lg border bg-card">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex items-center space-x-4 border-b p-4 ${
              message.unread ? 'bg-muted/50' : ''
            }`}
          >
            <Avatar>
              <AvatarImage src={message.avatar} alt={message.sender} />
              <AvatarFallback>
                {message.sender
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{message.sender}</p>
                <p className="text-xs text-muted-foreground">{message.time}</p>
              </div>
              <p className="text-sm text-muted-foreground">{message.message}</p>
            </div>
            {message.unread && (
              <div className="size-2 rounded-full bg-primary"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
