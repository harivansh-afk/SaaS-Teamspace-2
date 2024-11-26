import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TeamMember = {
  name: string;
  email: string;
  avatar?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@example.com',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@example.com',
  },
  {
    name: 'Isabella Kim',
    email: 'isabella.kim@example.com',
  },
  {
    name: 'William Chen',
    email: 'william.chen@example.com',
  },
  {
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
  },
];

export function TeamMembers() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium tracking-tight">Team Members</h3>
      </div>
      <div className="divide-y">
        {teamMembers.map(member => (
          <div
            key={member.email}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                {member.avatar && (
                  <AvatarImage src={member.avatar} alt={member.name} />
                )}
                <AvatarFallback>
                  {member.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
