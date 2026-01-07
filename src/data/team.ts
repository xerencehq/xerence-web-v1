export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

// Placeholder team data - can be updated via Sanity later
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Team Member',
    role: 'Founder & CEO',
    bio: 'Passionate about building products that make a difference.',
  },
];

// Flag to show/hide team section
export const SHOW_TEAM_SECTION = false; // Set to true when team data is ready
