import { ProjectItemProps } from '@/components/projects-item';

export const projectsConfig: ProjectItemProps[] = [
  {
    title: 'Video Object Segmentation with Tracking',
    date: 'March 2024',
    tags: ['PyTorch', 'NumPy', 'Pandas', 'OpenCV', 'PWC-Net', 'DAVIS', 'Optical Flow'],
    descriptions: [
      "Developed a confidence-score based video object segmentation system by integrating optical flow results to improve segmentation accuracy and stability in dynamic scenes.",
      "Utilized PWC-Net to compute optical flow between consecutive frames and designed an algorithm to evaluate the optical flow confidence scores.",
      "Compared three fusion strategies (argmax, selective update, and neural network) to combine confidence scores from the optical flow and segmentation networks.",
      "Conducted extensive experiments on the DAVIS 2016 and 2017 dataset, demonstrating that the neural network fusion strategy achieved competitive results with a J&F-Mean score of 0.9215, argmax with a score of 0.9134 and selective update with a score 0.9190.",
    ],
  },
  {
    title: 'Machine-Generated Text Detection System',
    date: 'March 2024',
    tags: ["PyTorch", "Scikit-Learn", "Transformer", "GPT", "RoBERTa", "T5", "Random Forest"],
    descriptions: [
      "Developed a binary text classification system to distinguish between human-written and machine-generated text using three different models: Random Forest (87.54% accuracy), RoBERTa (87.93% accuracy), and T5 (accuracy 72.02%).",
      "Conducted a comparative analysis of model performance, with RoBERTa achieving the highest scores in accuracy, Macro-F1, and Micro-F1 metrics.",
    ],
  },
  {
    title: 'Cryptocurrency Portfolio Management App ',
    date: 'April 2022',
    tags: ["React Native", "Node.js", "Firebase", "Rainbow", "React Navigation", "Redux"],
    descriptions: [
      "Developed a cross-platform mobile application using React Native, enabling users to browse, search, and manage cryptocurrency information and portfolios.",
      "Integrated interactive historical price charts using data visualization libraries (Rainbow) for enhancing user experience.",
      "Designed Firebase dataset structure to efficiently store and manage user account and portfolio information.",
    ],
  },
  {
    title: 'Expense Tracker',
    date: 'April 2020',
    tags: ["Android", "Java", "SQLite", "Git", "OOD", "Design Patterns", "Singleton", "MVC"],
    descriptions: [
      "Utilizing object-oriented design and the Model-View-Controller (MVC) pattern to ensure maintainability and scalability.",
      "Implemented features for adding, editing, and deleting expenses, providing users with easy financial management tools.",
      "Utilized Git for version control, ensuring smooth collaboration among team members.",
    ],
  },
];
