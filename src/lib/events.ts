export interface Event {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    image: '/images/event1.png', 
    title: 'Tech Conference 2024',
    slug: 'tech-conference-2024',
    location: 'New York',
    date: 'March 15-17, 2024',
    time: '9:00 AM - 6:00 PM'  
  },
  {
    image: '/images/event2.png', 
    title: 'AI & ML Summit',
    slug: 'ai-ml-summit',
    location: 'San Francisco',
    date: 'April 20-21, 2024',
    time: '10:00 AM - 5:00 PM'
  },
  {
    image: '/images/event3.png', 
    title: 'Web Dev Meetup',
    slug: 'web-dev-meetup',
    location: 'Austin',
    date: 'May 10, 2024',
    time: '6:00 PM - 9:00 PM'
  },
  {
    image: '/images/event4.png', 
    title: 'Cloud Expo',
    slug: 'cloud-expo',
    location: 'Seattle',
    date: 'June 5-7, 2024',
    time: '9:00 AM - 6:00 PM'
  },
  {
    image: '/images/event5.png', 
    title: 'Cybersecurity Workshop',
    slug: 'cybersecurity-workshop',
    location: 'Boston',
    date: 'July 12-13, 2024',
    time: '1:00 PM - 5:00 PM'
  },
  {
    image: '/images/event6.png', 
    title: 'DevOps Bootcamp',
    slug: 'devops-bootcamp',
    location: 'Denver',
    date: 'August 8-10, 2024',
    time: '9:00 AM - 4:00 PM'
  },
];
