import { WorkExperienceItemProps } from '@/components/work-experience-item';

export const workExperienceConfig: WorkExperienceItemProps[] = [
  {
    company: 'University of Ottawa',
    title: 'Teaching Assistant (Corrector)',
    date: 'September 2022 - May 2024',
    location: 'Ottawa, Ontario',
    descriptions: [
      "Efficiently marked and graded over 150 students' assignments and exams focused on C++.",
      "Actively contributed to student project presentations, providing constructive feedback to enhance their understanding and improve their projects."
    ],
  },
  {
    company: 'Nokia',
    title: 'SW Automation Specialist',
    date: 'May 2021 - December 2021',
    location: 'Ottawa, Ontario',
    descriptions: [
      "Developed over 20 new automation test cases by JavaScript, Docker, and Mocha to validate Model Driven Mediation applications, improved test coverage and efficiency.",
      "Monitored and analyzed the Selenium test report routinely, followed by updating the results and identifying areas for improvement.",
      "Collaborated closely with other software testers to ensure efficiency and functionality."
    ],
  },
  {
    company: 'Nokia',
    title: 'Web UI Software Designer',
    date: 'September 2020 - May 2021',
    location: 'Ottawa, Ontario',
    descriptions: [
      "Developed and maintained web GUI components and utilities built with React and JavaScript, and integrated components into web application called Showbook.",
      "Removed deprecated components, reduced repository size by 20% and improved application performance and maintainability.",
      "Collaborated effectively with testers and UX teams and discussed UI design details under a team-based Agile environment.", 
    ],
  },
  {
    company: 'Carleton University',
    title: 'Teaching Assistant',
    date: 'September 2020 - May 2021',
    location: 'Ottawa, Ontario',
    descriptions: [
      "Conducted weekly office hours, providing individual support to over 50 students per semester, resulting in a significant increase in student comprehension and performance.",
      "Created and distributed supplemental learning materials for tutorial session, such as example problems and step- by-step guides, which enhanced students' understanding of data structure concept.",
      "Collaborated with the professor to identify common problems and develop targeted supplemental learning materials."
    ],
  }
];
