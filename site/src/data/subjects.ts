// Subject metadata — see /DESIGN.md §9
export type SubjectKey =
  | 'biology' | 'chemistry' | 'cs' | 'math'
  | 'neuroscience' | 'physics' | 'psychology';

export interface Subject {
  key: SubjectKey;
  name: string;
  shortName: string;
  color: string;          // hex from DESIGN.md §3
  cssVar: string;         // matches --subj-* in tokens.css
  mentor2025: string | null;
  papers2025: string[];   // empty if no 2025 cohort
  scholars2025: string[]; // empty if no 2025 cohort
  status2026: 'confirmed' | 'under-consideration';
  description: string;    // 1-2 sentence elevator pitch
}

export const subjects: Subject[] = [
  {
    key: 'biology',
    name: 'Biology',
    shortName: 'Bio',
    color: '#6FBE5C',
    cssVar: '--subj-biology',
    mentor2025: 'Jadon Li',
    papers2025: [
      'Understanding and applying biological resilience, from genes to ecosystems',
    ],
    scholars2025: ['Aiden Zheng', 'Allen Zheng', 'Carter Li', 'Elsa Deng', 'Vaibhav Vijaay', 'Vibha Girish', 'Vihaan Vijaay'],
    status2026: 'under-consideration',
    description:
      'From genes to ecosystems — how living systems resist, recover, and adapt. Read papers that explain why some species survive disturbance and others collapse.',
  },
  {
    key: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chem',
    color: '#E879A8',
    cssVar: '--subj-chemistry',
    mentor2025: 'Ashley Kang',
    papers2025: [
      'Occurrence, exposure, and health risk assessment of heavy metals in green tea samples cultivated in the Hangzhou area',
      'Reversible Atmospheric Water Harvesting',
    ],
    scholars2025: ['Aadhya Somi', 'Elsa Deng', 'Leonardo Zhu', 'Rohan Tarun', 'Vibha Girish', 'Vrishankh Pawar'],
    status2026: 'under-consideration',
    description:
      'Chemistry in the world around you. Analyze real-world studies on heavy metals in tea, atmospheric water harvesting, and other applied research.',
  },
  {
    key: 'cs',
    name: 'Computer Science',
    shortName: 'CS',
    color: '#4A90D9',
    cssVar: '--subj-cs',
    mentor2025: 'Kalena Dai',
    papers2025: [
      'Attention Is All You Need (Vaswani et al., 2017)',
      'Parrot: An Agentic Classroom AI (Dai et al.)',
    ],
    scholars2025: ['Aiden Zheng', 'Akhil Rajdeep', 'Allen Zheng', 'Amy Liu', 'Carter Li', 'Vaibhav Vijay', 'Vihaan Vijay'],
    status2026: 'under-consideration',
    description:
      'How modern AI actually works. Read the paper that introduced transformers, then a recent paper on agentic classroom AI.',
  },
  {
    key: 'math',
    name: 'Mathematics',
    shortName: 'Math',
    color: '#E07856',
    cssVar: '--subj-math',
    mentor2025: 'Veer Mahajan',
    papers2025: [
      'Emergence of Scaling in Random Networks (Barabási & Albert)',
      'Modular Arithmetic (Conrad)',
    ],
    scholars2025: ['Kavan Dai', 'Rohan Tarun'],
    status2026: 'under-consideration',
    description:
      'Math in places you do not expect — the structure of social networks, the math behind cryptography, the patterns that organize the World Wide Web.',
  },
  {
    key: 'neuroscience',
    name: 'Neuroscience',
    shortName: 'Neuro',
    color: '#E8C547',
    cssVar: '--subj-neuroscience',
    mentor2025: 'Jennifer Li',
    papers2025: [
      'Loss of Recent Memory After Bilateral Hippocampal Lesions (Scoville & Milner, 1957)',
      'Creating a False Memory in the Hippocampus (Ramirez et al., 2013)',
    ],
    scholars2025: ['Abeera Chaudhary', 'Asma Chaudhary', 'Hrishikesh Dronamraju', 'Kavan Dai', 'Nuanyi Jin', 'Sara Rane', 'Serena Qu'],
    status2026: 'under-consideration',
    description:
      'How memory works — and how it can be created, lost, or even faked. Read the landmark Patient H.M. study, then a paper that built a false memory using light.',
  },
  {
    key: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    color: '#8B7AC8',
    cssVar: '--subj-physics',
    mentor2025: null,
    papers2025: [],
    scholars2025: [],
    status2026: 'under-consideration',
    description:
      'New for 2026. Cohort and papers to be announced once a mentor is confirmed.',
  },
  {
    key: 'psychology',
    name: 'Psychology',
    shortName: 'Psych',
    color: '#F09848',
    cssVar: '--subj-psychology',
    mentor2025: 'Stephanie Leung',
    papers2025: [
      "Milgram's Obedience Study",
      'The mere presence of a smartphone reduces basal attentional performance (Skowronek 2023)',
    ],
    scholars2025: ['Andy Lau', 'Dhritil Vyas', 'Elsa Deng', 'Vibha Girish'],
    status2026: 'under-consideration',
    description:
      'How the mind works — attention, memory, obedience. Analyze the ethics and methods of one of psychology\'s most famous (and controversial) experiments.',
  },
];

export const subjectsByKey: Record<SubjectKey, Subject> =
  Object.fromEntries(subjects.map(s => [s.key, s])) as Record<SubjectKey, Subject>;
