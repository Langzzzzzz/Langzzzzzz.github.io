import { type AboutMeItemProps } from '@/components/about-me-item';

export const aboutMeConfig: AboutMeItemProps[] = [
  {
    title: 'Bio',
    paragraphs: [
      "Hi, I'm Zhenqing Lang. I compelted my Master of Computer Science in Applied AI at Uottawa on May 2024.",
      'I received my Bachelor of Computer Science from Carleton University and my passion for software engineering blossomed during that time.',
      'I fascinated by outstanding software practices and excellent engineering techniques, and I strongly believe in following good coding standards.',
    ],
    folderColor: 'text-theme-blue',
  },
  {
    title: 'Fun Facts',
    paragraphs: [
      "Python is the first programming language I learned.",
      'I have a cute dog, golden retriver, named Yuanyuan.',
      'I recently took up Rock climbing. It\'s so hard... but so much fun!',
    ],
    folderColor: 'text-theme-green',
  },
  {
    title: 'Keywords',
    paragraphs: [
      'Coding, Traveling, Workout, Foodie, Reading, Trading, Rock climbing, Mediation ... ...',
    ],
    folderColor: 'text-theme-red',
  },
];
