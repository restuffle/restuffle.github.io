export const roles = [
  'secure cloud pipelines',
  'event-driven systems',
  'AI-powered automation',
  'serverless architectures',
]

export const metrics = [
  { figure: '<3s', label: 'avg transfer time on my SFTP-to-Azure pipeline' },
  { figure: '99%+', label: 'pipeline reliability with retries & monitoring' },
  { figure: '15%', label: 'reduction in patient wait times at SIRA Radiology' },
  { figure: '10%', label: 'productivity gain from operational data analysis' },
]

export const experience = [
  {
    when: 'May 2026 — Aug 2026',
    current: true,
    title: 'AI & Innovation Intern',
    org: 'Cook Medical · Bloomington, IN',
    points: [
      'Returned to Cook Medical on the AI & Innovation team, building an AI-powered automation testing pipeline.',
    ],
    tags: ['AI', 'Test Automation', 'Pipelines'],
  },
  {
    when: 'May 2025 — Aug 2025',
    title: 'Software Engineering / Cloud Engineering Intern',
    org: 'Cook Medical · Bloomington, IN',
    points: [
      'Developed and deployed serverless cloud applications using Azure Functions, Logic Apps, Event Grid, and Cosmos DB, reducing manual team workloads.',
      'Engineered a secure SFTP-to-Azure file transfer pipeline in Java with scheduled processing, centralized logging, monitoring, and fault handling.',
      'Built a real-time Smart Notification System delivering automated alerts to internal medical teams, cutting communication delays.',
      'Integrated Azure OpenAI with REST APIs and MongoDB to create an intelligent medical knowledge bot for clinician resources.',
      'Applied DevOps and cloud security best practices — GitHub version control, RBAC, encrypted configuration, and event-driven monitoring.',
    ],
    tags: ['Azure', 'Java', 'Cosmos DB', 'Event Grid', 'Azure OpenAI', 'DevOps'],
  },
  {
    when: 'Jun 2022 — Sep 2023',
    title: 'Operations Management & Software Engineering Intern',
    org: 'SIRA Radiology',
    points: [
      'Served as the bridge between IT and the radiologists, shaping projects that benefited both departments.',
      'Analyzed and improved scheduling systems, reducing patient wait times by 15%.',
      'Developed quality-control methods for imaging equipment compliant with ACR and MQSA standards.',
      'Analyzed operational data to improve resource allocation, driving a 10% productivity increase.',
      'Oversaw Radiology Information System deployments improving scheduling, billing, and reporting.',
    ],
    tags: ['Agile', 'Data Analysis', 'Healthcare IT', 'RIS', 'Compliance'],
  },
]

export const projects = [
  {
    flagship: true,
    icon: 'pipeline',
    title: 'Secure SFTP-to-Azure Pipeline',
    desc: 'A Java-based Azure Function (timer trigger) that automates SFTP-to-Azure File Share transfers every 5 minutes — replacing manual file handling with a continuous, event-driven workflow. Private-key authentication, encrypted configuration, and retry policies protect PHI-adjacent data, with monitoring through Application Insights.',
    stat: '<3s avg transfer · 99%+ reliability',
    tags: ['Java', 'Azure Functions', 'SFTP', 'Azure Storage SDK', 'App Insights'],
  },
  {
    icon: 'bell',
    title: 'Smart Notification System',
    desc: "A real-time, event-driven alerting system that delivers automated notifications to internal medical teams. Built on Azure's serverless stack, it increased response visibility and cut communication delays for the people who need information fastest.",
    tags: ['Azure Event Grid', 'Logic Apps', 'Cosmos DB', 'Serverless'],
  },
  {
    icon: 'bot',
    title: 'Medical Knowledge Bot',
    desc: "An intelligent knowledge assistant integrating Azure OpenAI with REST APIs and MongoDB, giving clinicians and internal teams faster access to critical information and resources — grounded in the organization's own knowledge base.",
    tags: ['Azure OpenAI', 'REST APIs', 'MongoDB', 'RAG'],
  },
]

export const skillGroups = [
  {
    name: 'languages',
    items: ['Java (Spring Boot / JUnit)', 'Python', 'Kotlin', 'JavaScript', 'SQL'],
  },
  {
    name: 'cloud & data',
    items: ['Azure Functions', 'Logic Apps', 'Event Grid', 'Cosmos DB', 'Azure OpenAI', 'MongoDB', 'Application Insights', 'Azure Storage'],
  },
  {
    name: 'engineering',
    items: ['API Development', 'Microservices', 'Backend Architecture', 'React', 'Android Development', 'Game Development', 'Operating Systems', 'Database Management'],
  },
  {
    name: 'ways of working',
    items: ['Agile & Waterfall', 'Git / GitHub', 'Code Review', 'Project Management', 'Business Analytics', 'Leadership'],
  },
]

export const education = {
  school: 'Indiana University Bloomington',
  detail: 'B.S. Computer Science · Certificate in Business & Statistics · December 2025',
  courses: ['Data Structures & Algorithms', 'Operating Systems', 'Software Engineering', 'UX/UI', 'Artificial Intelligence', 'Mobile App Development', 'SQL Database Management', 'OOP'],
}

export const links = {
  github: 'https://github.com/restuffle',
  linkedin: 'https://www.linkedin.com/in/restuffle/',
  email: 'stuffleryan@outlook.com',
  phone: '812-606-3106',
  resume: '/Resume.pdf',
}
