// CONTENT FILE. Every visible string lives here. The owner's master professional profile is the
// source; this file selects short sections from it for the web rather than showing all 15 sections.
//
// Confirm before going live (mirrored in DESIGN.md and the final handoff):
//   - public name: Emmanuel (or full professional name)
//   - brand: personal "Emmanuel" is used; "Xceptional / Xceptional Intelligence System" is NOT
//     baked in because the master doc marks final naming unconfirmed
//   - email: hello@emmanuel.studio (placeholder)
//   - LinkedIn and Fiverr URLs are placeholders
//   - production URL: https://xis-emmanuel.pages.dev (live; update here if you move to a custom domain)
//   - years of experience: not supplied, deliberately omitted
//   - unverified numeric results are deliberately NOT published (per master doc instruction)
//   - Event photography, Inbound SMS and Voice AI projects carry a status to be confirmed:
//     shown as "In progress" and flagged verify: true
//   - client permission to describe each project publicly

export type ProjectStatus = 'delivered' | 'in-progress' | 'scoped';

export type Project = {
  slug: string;
  code: string;
  title: string;
  category: string;
  status: ProjectStatus;
  featured?: boolean;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  stack: string[];
  platforms?: string[];
  contribution: string;
  outcome: string;
  cover: { src?: string; seed: number; alt: string };
  verify?: boolean;
};

export type Service = {
  code: string;
  title: string;
  tagline: string;
  text: string;
  capabilities: string[];
  technologies: string[];
  application: string;
  core: boolean;
};

export const site = {
  name: 'Emmanuel Akinfesola',
  brand: 'XIS',
  brandFull: 'XCEPTIONAL Intelligence System',
  avatar: '/assets/emmanuel-avatar.webp',
  portrait: '/assets/emmanuel-portrait.webp',
  role: 'AI Automation Specialist & Business Systems Developer',
  pillars: 'AI Automation / AI Agents / Intelligent Business Systems',
  tagline: 'Building intelligent systems that make businesses work smarter.',
  supporting: 'Connecting AI, automation, and business technology to solve real operational challenges.',
  url: 'https://xis-emmanuel.pages.dev',
  description:
    'Emmanuel builds AI agents, voice systems and intelligent workflows that connect tools, remove manual work and make business operations run smarter.',
  email: 'hello@emmanuel.studio',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', placeholder: true },
    { label: 'Fiverr', href: 'https://www.fiverr.com/', placeholder: true },
  ] as { label: string; href: string; placeholder?: boolean }[],
  emailPlaceholder: true,
  urlPlaceholder: false,
};

export const hero = {
  headline: 'Building intelligent systems for modern businesses.',
  intro:
    'I design and develop AI agents, automation systems, and intelligent workflows that help businesses streamline operations, improve customer communication, and work smarter.',
  cta: 'Let’s work together',
  secondary: 'Explore my work',
  nodes: [
    { id: '01', label: 'Capture' },
    { id: '02', label: 'Interpret' },
    { id: '03', label: 'Connect' },
    { id: '04', label: 'Act' },
  ] as const,
};

export const introduction = {
  heading: 'Intelligence wired into your operations.',
  text: 'I combine artificial intelligence, automation, and software integrations to create connected systems that solve real business problems. From automating repetitive processes to developing intelligent voice agents, I focus on building technology that serves a clear purpose.',
  note: 'My core focus: AI Automation, AI Agents, and Intelligent Business Systems.',
};

export const services: Service[] = [
  {
    code: '01',
    title: 'AI Automation & Workflows',
    tagline: 'Connecting business processes. Eliminating repetitive work.',
    text: 'I design automation systems that connect applications, transfer information, trigger actions, and manage repetitive business processes. Instead of moving data between tools by hand, the work happens on its own.',
    capabilities: ['End-to-end process automation', 'Multi-step workflows', 'Lead capture and distribution', 'CRM synchronisation', 'Data collection and processing', 'Document processing', 'Error handling and recovery'],
    technologies: ['n8n', 'Make.com', 'Zapier', 'Airtable', 'Google Sheets', 'OpenAI', 'Claude', 'REST APIs'],
    application: 'Administrative work, disconnected tools, duplicate data entry, structured processes.',
    core: true,
  },
  {
    code: '02',
    title: 'AI Agents & Intelligent Systems',
    tagline: 'Moving beyond fixed rules into intelligent task execution.',
    text: 'I build AI-powered agents that use language models, context, connected tools, and defined workflows to perform specific tasks. They interpret information, make decisions within boundaries, retrieve data, and act across business systems.',
    capabilities: ['Business and support agents', 'Lead qualification agents', 'Research and retrieval agents', 'Agents connected to CRMs and databases', 'Multi-step agent workflows', 'Human-approved action workflows'],
    technologies: ['OpenAI', 'Claude', 'n8n', 'Make.com', 'Airtable', 'PostgreSQL', 'APIs'],
    application: 'Tasks that involve interpreting information, processing requests and coordinating actions.',
    core: true,
  },
  {
    code: '03',
    title: 'AI Voice Agents',
    tagline: 'Turning business calls into structured interactions.',
    text: 'I develop voice agents that handle inbound and outbound calls. They understand enquiries, collect information, qualify callers, update records, and trigger the next step in the business process.',
    capabilities: ['Inbound AI receptionists', 'Outbound calling agents', 'Appointment booking agents', 'Lead qualification', 'Call routing and escalation', 'Post-call automation', 'CRM-connected voice systems'],
    technologies: ['Vapi', 'Retell AI', 'ElevenLabs', 'Twilio', 'Telnyx', 'n8n', 'GoHighLevel'],
    application: 'Real estate, property management, healthcare, dental, professional services.',
    core: true,
  },
  {
    code: '04',
    title: 'AI Chatbots & Conversational Assistants',
    tagline: 'Smarter ways for businesses to communicate.',
    text: 'I build conversational assistants that handle enquiries, provide information, qualify leads, and support customers. They connect to knowledge bases, databases, CRMs, and booking systems.',
    capabilities: ['Website chatbots', 'Support assistants', 'Knowledge-base bots', 'Lead qualification', 'Multilingual systems', 'Automated ticket creation', 'Human escalation'],
    technologies: ['OpenAI', 'Claude', 'n8n', 'Vapi', 'Retell AI', 'GoHighLevel', 'Airtable'],
    application: 'Responding to enquiries, collecting details and connecting conversations to internal processes.',
    core: true,
  },
  {
    code: '05',
    title: 'CRM & Lead Management',
    tagline: 'Keeping opportunities from getting lost.',
    text: 'I build lead systems that capture, organise, qualify, distribute, and follow up with prospects so leads move through stages without manual intervention.',
    capabilities: ['Automated lead capture', 'Qualification workflows', 'Lead assignment and routing', 'Follow-up sequences', 'Appointment scheduling', 'Pipeline automation', 'Data synchronisation'],
    technologies: ['GoHighLevel', 'HubSpot', 'Airtable', 'Google Sheets', 'n8n', 'Make.com', 'OpenAI'],
    application: 'Real estate agencies, sales teams, B2B companies, marketing agencies.',
    core: false,
  },
  {
    code: '06',
    title: 'WhatsApp, SMS & Email',
    tagline: 'Communication that stays connected and organised.',
    text: 'I connect messaging channels with business applications and customer records to automate routine communication while keeping information in one place.',
    capabilities: ['Notifications and reminders', 'Follow-up sequences', 'Inbound message processing', 'Contact matching', 'Opt-out handling', 'Message-based triggers', 'CRM-connected communication'],
    technologies: ['Twilio', 'WhatsApp Business API', 'Telegram Bot API', 'ManyChat', 'SendApp', 'GoHighLevel', 'n8n'],
    application: 'Customer notifications, appointment reminders and lead communication.',
    core: false,
  },
  {
    code: '07',
    title: 'AI Content & Social Automation',
    tagline: 'From content preparation to distribution.',
    text: 'I connect the stages of content production and publishing into structured workflows rather than treating them as isolated tasks.',
    capabilities: ['AI-assisted content preparation', 'Content research and processing', 'Caption generation', 'Speech-to-text', 'Social media scheduling', 'Multi-platform publishing', 'Approval workflows'],
    technologies: ['OpenAI', 'Claude', 'Blotato', 'ElevenLabs', 'Publer', 'Airtable', 'n8n', 'Make.com'],
    application: 'Businesses, agencies and content teams streamlining preparation and distribution.',
    core: false,
  },
  {
    code: '08',
    title: 'API Integrations',
    tagline: 'Making different applications work together.',
    text: 'I connect applications through APIs, webhooks, and automation platforms so customer data, communication, payments, and operations move between systems.',
    capabilities: ['REST API integrations', 'Webhook integrations', 'Application-to-application communication', 'Database connectivity', 'JSON processing', 'Authentication and configuration', 'API troubleshooting'],
    technologies: ['REST APIs', 'Webhooks', 'JSON', 'n8n', 'Make.com', 'PostgreSQL', 'Supabase', 'Airtable'],
    application: 'Connecting the separate applications a business already relies on.',
    core: false,
  },
  {
    code: '09',
    title: 'Backend Infrastructure',
    tagline: 'Supporting the systems behind the automation.',
    text: 'Beyond workflow platforms, I deploy and configure backend services and self-hosted applications, so I understand the infrastructure that supports APIs and connected systems.',
    capabilities: ['Ubuntu server administration', 'Docker and Docker Compose', 'PostgreSQL configuration', 'Redis', 'Nginx reverse proxy', 'Domain and DNS', 'HTTPS and SSL', 'API deployment'],
    technologies: ['Ubuntu', 'Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Nginx', 'Supabase', 'Certbot'],
    application: 'Self-hosted applications, API environments and reliable service connectivity.',
    core: false,
  },
  {
    code: '10',
    title: 'Course Platform Setup',
    tagline: 'Structuring existing material into learning experiences.',
    text: 'I set up course platforms and connect learning activity to business workflows using existing educational material, rather than writing a curriculum from scratch.',
    capabilities: ['Course and lesson organisation', 'Thinkific and Teachable setup', 'Enrollment workflows', 'Student notifications', 'Enrollment follow-up automation', 'External app integration'],
    technologies: ['Thinkific', 'Teachable', 'n8n', 'Make.com', 'GoHighLevel'],
    application: 'Platform setup and automation around material the client already has.',
    core: false,
  },
];

export const projects: Project[] = [
  {
    slug: 'flowdit-support-agent',
    code: 'N00',
    title: 'Flowdit Support Agent',
    category: 'AI Chatbot & Support Automation',
    status: 'delivered',
    featured: true,
    summary: 'An AI agent named Chris answers visitor questions, books meetings and raises support tickets on the Flowdit site.',
    overview: 'A website support agent connected to a knowledge base, booking tools and a ticketing system. Live on flowdit.com.',
    challenge: 'Visitors hit dead ends: a question with no instant answer, and a booking that meant waiting on an email reply. Both needed a human to be present before anything happened.',
    solution: 'An n8n workflow routes each chat through an OpenAI agent backed by a Supabase vector store and Postgres memory. The agent can book time, verify emails, create Zoho tickets and send transcripts by Gmail.',
    capabilities: ['Website chat agent', 'Vector-store knowledge base', 'Conversation memory', 'Booking and ticket tools', 'Email verification', 'Transcript delivery by Gmail'],
    stack: ['n8n', 'OpenAI', 'Supabase vector store', 'Postgres', 'Zoho', 'Google Drive and Docs', 'Gmail'],
    platforms: ['Website'],
    contribution: 'Designing the tool-routing workflow and connecting chat, knowledge, booking, ticketing and email into one agent.',
    outcome: 'Delivered and live. The agent handles visitor questions, bookings and tickets on the production site.',
    cover: {
      src: '/assets/work/flowdit-chatbot-01.webp',
      seed: 7,
      alt: 'The n8n workflow powering the Flowdit chatbot, routing a visitor chat through an AI agent to booking, ticket and transcript tools',
    },
  },
  {
    slug: 'lead-generation-system',
    code: 'N09',
    title: 'Lead Generation System',
    category: 'AI Automation & Lead Generation',
    status: 'delivered',
    summary: 'Finds, qualifies and verifies prospects so the client only sees leads that genuinely need their product.',
    overview: 'A research and enrichment workflow that turns search queries into a shortlist of verified, qualified decision makers.',
    challenge: 'Manual prospecting mixes broad searching with unverified contacts. Time goes into gathering names that were never a good fit.',
    solution: 'A workflow searches for candidates, scrapes company sites, extracts domains, finds decision makers with Apollo.io, qualifies them with AI, then verifies every email through Reoon before assembling a report.',
    capabilities: ['Search and web scraping', 'Company data extraction', 'Decision maker discovery', 'AI lead qualification', 'Email verification', 'Report generation'],
    stack: ['n8n', 'OpenAI', 'Apollo.io', 'Reoon', 'Web scraping'],
    contribution: 'Building the multi-stage pipeline and the qualification and verification logic that filters the output.',
    outcome: 'Delivered. The workflow produces a qualified, verified contact list without manual research.',
    cover: {
      src: '/assets/work/lead-generation-01.webp',
      seed: 21,
      alt: 'Lead generation workflow finding decision makers, qualifying them with AI and verifying every email address',
    },
  },
  {
    slug: 'automated-blog-publishing',
    code: 'N10',
    title: 'Automated Blog Publishing',
    category: 'AI Content Automation',
    status: 'delivered',
    summary: 'Researches, writes, illustrates and publishes a blog post to WordPress on a daily schedule.',
    overview: 'A content workflow that takes a topic from outline to published WordPress post without manual steps in between.',
    challenge: 'Blog publishing stalls when research, drafting, illustration and upload are four separate tasks that someone has to remember to do.',
    solution: 'A scheduled n8n workflow reads topics from Google Sheets, drafts the outline and post with OpenAI, prepares the illustration, and publishes directly to WordPress.',
    capabilities: ['Scheduled triggers', 'Topic intake from Sheets', 'AI outline and drafting', 'Illustration preparation', 'WordPress publishing'],
    stack: ['n8n', 'OpenAI', 'Google Sheets', 'WordPress'],
    contribution: 'Connecting research, drafting and publishing into one scheduled run with no manual handoffs.',
    outcome: 'Delivered. Posts are researched, written and published on a daily schedule.',
    cover: {
      src: '/assets/work/blog-posting-n8n-01.webp',
      seed: 35,
      alt: 'Blog creation workflow drafting outlines, writing posts and publishing them to WordPress',
    },
  },
  {
    slug: 'atlanta-intelligence',
    code: 'N01',
    title: 'Atlanta Intelligence',
    category: 'AI Content Processing & Social Distribution',
    status: 'delivered',
    summary: 'A multi-stage system that prepares, processes and distributes content across Facebook, LinkedIn and TikTok.',
    overview: 'A connected automation workflow that takes content from raw media to published posts without a person repeating the same preparation steps each time.',
    challenge: 'Preparing and distributing content manually involves several repetitive stages, from organising media to processing information and publishing across multiple platforms.',
    solution: 'An n8n workflow connected to Airtable, OpenAI, ElevenLabs and Blotato. Each stage hands its output to the next, so media organisation, analysis, processing and publishing form one run.',
    capabilities: ['Automated media organisation', 'AI image analysis and filtering', 'Content processing', 'Speech-to-text for captions', 'AI-assisted content preparation', 'Multi-platform publishing'],
    stack: ['n8n', 'Airtable', 'OpenAI', 'ElevenLabs', 'Blotato'],
    platforms: ['Facebook', 'LinkedIn', 'TikTok'],
    contribution: 'Connecting AI-powered media processing with workflow automation and multi-platform distribution.',
    outcome: 'Delivered. The workflow runs as a connected pipeline from media intake to scheduled publishing.',
    cover: { seed: 11, alt: 'Diagram of a content pipeline moving from media intake through AI processing to three social platforms' },
  },
  {
    slug: 'multilingual-ai-support',
    code: 'N02',
    title: 'Multilingual AI Customer Support',
    category: 'Conversational AI & Voice AI',
    status: 'delivered',
    summary: 'Website chatbots, WordPress automation and AI calling agents that support enquiries in German, English and Arabic.',
    overview: 'A collection of connected AI systems for customer communication, built to handle enquiries across different channels while keeping information organised.',
    challenge: 'Businesses need to manage enquiries across channels while keeping records organised and making it easy for customers to get relevant help in their own language.',
    solution: 'AI chatbots and calling agents connected to WordPress and business workflows, with language support for German, English and Arabic and paths into lead qualification and support.',
    capabilities: ['AI chatbot development', 'WordPress blog automation', 'AI calling agents', 'Lead qualification', 'Multilingual communication', 'Customer support workflows'],
    stack: ['n8n', 'AI language models', 'Voice AI', 'WordPress'],
    platforms: ['Website', 'Voice', 'WordPress'],
    contribution: 'Developing conversational systems and connecting AI interactions with practical business workflows.',
    outcome: 'Delivered. The systems are built and connected to the client’s web and communication channels.',
    cover: { seed: 27, alt: 'Diagram of a chatbot, a WordPress automation and an AI calling agent sharing one workflow' },
  },
  {
    slug: 'evolution-api-infrastructure',
    code: 'N03',
    title: 'Evolution API Infrastructure',
    category: 'Backend Infrastructure & API Deployment',
    status: 'delivered',
    summary: 'A self-hosted Evolution API environment on Ubuntu, with the database, network and security services configured around it.',
    overview: 'Deployment and configuration of a self-hosted API environment where the application and the services it depends on had to work together.',
    challenge: 'Running a self-hosted application takes more than installing it. The database, networking, domain, and security settings all have to be in place for the API to be reachable and reliable.',
    solution: 'A configured Ubuntu VPS running the application in Docker with PostgreSQL and Redis behind an Nginx reverse proxy, a domain with DNS, and SSL via Certbot.',
    capabilities: ['Ubuntu VPS configuration', 'Docker application deployment', 'PostgreSQL setup', 'Redis configuration', 'Nginx reverse proxy', 'Domain and DNS', 'SSL certificates and HTTPS', 'API availability checks'],
    stack: ['Ubuntu', 'Docker', 'Docker Compose', 'PostgreSQL', 'Redis', 'Nginx', 'Certbot'],
    contribution: 'Configuring the infrastructure required to support the self-hosted application and its API services.',
    outcome: 'Delivered. The API environment was deployed and verified reachable over HTTPS.',
    cover: { seed: 43, alt: 'Diagram of a server, database, cache and reverse proxy supporting one API service' },
  },
  {
    slug: 'event-photography-delivery',
    code: 'N04',
    title: 'Event Photography Delivery',
    category: 'Workflow Automation & File Management',
    status: 'in-progress',
    summary: 'Four connected workflows that sort event photos, deliver links to clients and keep social accounts posting.',
    overview: 'A multi-workflow system that reduces the administrative work after an event: organising exports, sharing selected images and preparing content for social.',
    challenge: 'Photographers and their teams move exported images into client folders, share delivery links, and prepare photographs for social media. Each step is repetitive even when it is simple.',
    solution: 'Four connected workflows: detect the finished AI selection, sort photos into client folders, send the client a WhatsApp share link and push selected work to social, then publish to Google Business on a schedule.',
    capabilities: ['AI selection completion detection', 'Automated photo organisation', 'WhatsApp client delivery', 'Social content distribution', 'Scheduled Google Business publishing'],
    stack: ['Make.com', 'AI photo selection', 'WhatsApp', 'Google Drive'],
    contribution: 'Connecting file processing, client delivery, messaging and content distribution into one coordinated workflow.',
    outcome: 'In progress. Delivery status should be confirmed before publication.',
    cover: { seed: 58, alt: 'Diagram of four workflows moving photos from selection to client delivery and publishing' },
    verify: true,
  },
  {
    slug: 'real-estate-business-case',
    code: 'N05',
    title: 'Real Estate Automation Business Case',
    category: 'Business Process Design',
    status: 'delivered',
    summary: 'A five-system report showing how an agency could support lead management and communication with connected automation.',
    overview: 'A written business case examining how five interconnected systems could support the operations of a property agency.',
    challenge: 'The agency needed to understand where automation would pay before committing budget. A list of tools was not enough. The whole pipeline had to be considered together.',
    solution: 'Five systems were assessed together: lead capture, email nurture, WhatsApp, an AI voice agent and property listing descriptions, with impact considered across time, errors, revenue and hiring on a realistic pipeline.',
    capabilities: ['Lead capture automation', 'Email nurture', 'WhatsApp communication', 'AI voice agent', 'Listing descriptions', 'Operational impact assessment'],
    stack: ['Business process design', 'AI systems', 'Automation architecture'],
    contribution: 'Understanding the operational and business implications of integrating multiple automation systems.',
    outcome: 'Delivered. A report the agency can use to decide what to build first and what to leave alone.',
    cover: { seed: 72, alt: 'Diagram of five connected systems in a property agency pipeline' },
  },
  {
    slug: 'inbound-sms-opt-out',
    code: 'N06',
    title: 'Inbound SMS & Opt-Out',
    category: 'Messaging Automation & CRM Data',
    status: 'in-progress',
    summary: 'Inbound texts are matched to contacts, logged, and checked for opt-out words before status updates.',
    overview: 'An SMS processing workflow that ties each incoming message to the right contact and manages communication preferences without manual sorting.',
    challenge: 'Businesses receiving customer messages need a structured way to match incoming texts to the correct contacts and process communication preferences.',
    solution: 'A workflow that receives messages, matches numbers to contact records, logs the message, checks for words such as STOP, and updates the contact status automatically.',
    capabilities: ['Inbound message receiving', 'Contact number matching', 'Message logging', 'Opt-out keyword detection', 'Contact status updates', 'Structured messaging records'],
    stack: ['Twilio', 'Make.com', 'Airtable'],
    contribution: 'Connecting communication events with contact data and automated preference management.',
    outcome: 'In progress. Delivery status should be confirmed before publication.',
    cover: { seed: 86, alt: 'Diagram of an inbound message being matched to a contact and checked for opt-out words' },
    verify: true,
  },
  {
    slug: 'voice-ai-appointment-follow-up',
    code: 'N07',
    title: 'Voice AI & Appointment Follow-Up',
    category: 'Voice AI & Scheduling',
    status: 'in-progress',
    summary: 'Booked appointments trigger an SMS with a form link, and the submitted details update the calendar event.',
    overview: 'An appointment workflow that links booking, information collection and the calendar so the event holds the current details.',
    challenge: 'Appointment details arrived in a form while the calendar kept older information, so someone was copying fields between the two.',
    solution: 'A booking fires an SMS with a form link. The submitted information is processed and written back to the matching calendar event.',
    capabilities: ['Appointment trigger', 'SMS with form link', 'Information collection', 'Calendar event update'],
    stack: ['GoHighLevel', 'SMS', 'Forms', 'Workflow automation'],
    contribution: 'Connecting appointment booking with customer information collection and calendar updates.',
    outcome: 'In progress. Delivery status should be confirmed before publication.',
    cover: { seed: 101, alt: 'Diagram linking a booked call, an SMS form and a calendar update' },
    verify: true,
  },
  {
    slug: 'private-relationship-assistant',
    code: 'N08',
    title: 'Private Relationship Assistant',
    category: 'AI Assistant & Personal Productivity',
    status: 'scoped',
    summary: 'Voice notes become structured memory per contact, with a morning shortlist and a draft message to approve.',
    overview: 'A proposed assistant that keeps relationship information in structured records and surfaces who needs attention, without sending anything on its own.',
    challenge: 'The details of a relationship live in voice notes and memory. The aim was a private system that keeps those notes usable without becoming a second job.',
    solution: 'One record per contact. Voice notes are stored against that contact, and a morning list drafts a message for each person who needs attention. Nothing sends until a person approves it.',
    capabilities: ['Voice note capture', 'Structured contact memory', 'Attention shortlist', 'Suggested follow-up messages', 'Human-approved sending'],
    stack: ['n8n', 'Airtable', 'AI language models', 'Voice processing'],
    contribution: 'Combining voice capture, AI processing, structured memory and human-approved follow-up.',
    outcome: 'Scoped, not built. No outcome is claimed.',
    cover: { seed: 117, alt: 'Diagram of voice notes becoming contact memory and a morning shortlist' },
  },
];

// Builds shown as work in progress or experiments. Each caption describes only what the
// screenshot shows. No client, completion status or result is claimed for these.
export const labs = [
  {
    title: 'JARVIS, a Telegram AI assistant',
    note: 'Routes messages and voice notes through an AI agent to calendar, email, contact and research tools.',
    src: '/assets/work/jarvis-ai-01.webp',
    alt: 'JARVIS Telegram agent workflow connected to calendar, email, contact and research tools',
  },
  {
    title: 'Calendar agent',
    note: 'A sub-workflow that gives an agent get, create, update and delete events on Google Calendar.',
    src: '/assets/work/jarvis-calendar-agent-01.webp',
    alt: 'Calendar agent workflow with Google Calendar event tools',
  },
  {
    title: 'Hiring pipeline',
    note: 'Reads applications from Gmail, extracts fields with AI and writes structured candidates to Google Sheets.',
    src: '/assets/work/hiring-system-01.webp',
    alt: 'Hiring automation reading Gmail applications and writing structured records to Sheets',
  },
  {
    title: 'Checking and booking',
    note: 'A Make.com run that checks Google Calendar availability and returns a webhook response.',
    src: '/assets/work/inbound-bot-01.webp',
    alt: 'Make.com checking and booking run with webhooks, tools and Google Calendar',
  },
  {
    title: 'Social publishing agent',
    note: 'A long content workflow that generates images and captions, then publishes across social accounts.',
    src: '/assets/work/social-media-automation-01.webp',
    alt: 'Social media agent workflow generating content and publishing to multiple platforms',
  },
  {
    title: 'Telegram image bot',
    note: 'Receives a Telegram message, selects an image and returns a reply through the bot.',
    src: '/assets/work/telegram-image-bot-01.webp',
    alt: 'Telegram image bot run showing the message, selection and reply steps',
  },
];

export const industries = [
  { name: 'Real estate & property management', note: 'Enquiry handling, lead qualification, viewings, follow-up and content.' },
  { name: 'Healthcare & dental', note: 'Reception, appointment enquiries, reminders and information collection.' },
  { name: 'Marketing & digital agencies', note: 'Lead management, content pipelines, onboarding and reporting.' },
  { name: 'B2B & sales organisations', note: 'Capture, qualification, routing, follow-up and data synchronisation.' },
  { name: 'Service businesses', note: 'Virtual receptionists, scheduling, enquiries and reminders.' },
  { name: 'E-commerce & online business', note: 'Support chatbots, order enquiries, notifications and data sync.' },
];

export const approach = [
  { code: '01', title: 'Understand', text: 'I learn the business, its current process, the tools it uses and the challenge it wants to address.' },
  { code: '02', title: 'Analyse', text: 'I find bottlenecks, repeated tasks and disconnected systems, then set out what the build includes.' },
  { code: '03', title: 'Design', text: 'I map the architecture: triggers, data flows, AI responsibilities, integrations and approval points.' },
  { code: '04', title: 'Build', text: 'I build the workflows, configure integrations and connect applications in clear milestones.' },
  { code: '05', title: 'Test', text: 'I test the intended use cases and failure scenarios, including data accuracy and unexpected inputs.' },
  { code: '06', title: 'Handover', text: 'I document how the system works so your team can run and edit it. Support is scoped up front.' },
];

export const philosophy = [
  { title: 'Understanding before building', text: 'Every business has its own process. I understand the problem before recommending a technical solution.' },
  { title: 'Functionality over complexity', text: 'A solution should be as simple as it can be while still doing the job. Reliable beats clever.' },
  { title: 'Outcomes over features', text: 'The point is not building workflows or configuring agents. It is what those systems accomplish for the people using them.' },
  { title: 'Continuous improvement', text: 'Technology moves and business needs change. I keep testing and improving what I build.' },
];

export const about = {
  intro: 'I am Emmanuel Akinfesola, an AI Automation Specialist focused on designing and developing intelligent business systems that help companies streamline operations, improve customer experiences, and eliminate unnecessary manual work.',
  background: 'My academic background is in Mechanical Engineering. It shapes how I solve problems: break a system into its parts, understand how they interact, and build from there. Over time my interests moved into artificial intelligence, software automation, conversational systems and business technology.',
  thinking: 'I do not approach automation as simply connecting one application to another. A voice agent should not just answer a call. It should collect information, interact with the right applications, update records and trigger the next step. A lead workflow should do more than collect details. It should organise them, qualify where appropriate, notify the right people and support the follow-up.',
  interests: 'I am particularly interested in projects where several technologies have to communicate to reach one objective, and in systems that move beyond isolated tasks to support complete business workflows.',
  philosophyLead: 'Technology should solve problems, not create new ones.',
  direction: 'My direction is centred on AI automation, intelligent agents and connected business systems, at the meeting point of voice technology, workflow orchestration, CRM systems and API-driven integrations. I want to be a trusted technical partner for businesses adopting AI in practical, sustainable ways.',
  education: 'Mechanical Engineering',
  who: [
    'Business owners looking to streamline operations.',
    'Real estate and property management teams improving enquiry handling.',
    'Marketing and digital agencies that need connected automation.',
    'Sales teams that want more organised lead management.',
    'Service businesses exploring AI receptionists.',
    'Organisations that need their software applications to communicate.',
  ],
};

export const stack = [
  { name: 'Workflow', items: ['n8n', 'Make.com', 'Zapier'] },
  { name: 'AI & language models', items: ['OpenAI', 'Claude', 'AI agents', 'LLM integrations'] },
  { name: 'Voice & speech', items: ['Vapi', 'Retell AI', 'ElevenLabs', 'Speech to text', 'Text to speech'] },
  { name: 'CRM & platforms', items: ['GoHighLevel', 'HubSpot', 'Zoho CRM', 'Zoho Desk', 'Follow Up Boss', 'Thinkific', 'Teachable'] },
  { name: 'Messaging', items: ['Twilio', 'Telnyx', 'WhatsApp Business API', 'Telegram Bot API', 'ManyChat', 'SendApp'] },
  { name: 'Data & databases', items: ['PostgreSQL', 'Supabase', 'Redis', 'Airtable', 'Google Sheets', 'Notion'] },
  { name: 'Backend', items: ['Ubuntu', 'Docker', 'Docker Compose', 'Nginx', 'REST APIs', 'Webhooks', 'SSL / HTTPS', 'DNS'] },
  { name: 'Content', items: ['Blotato', 'Publer', 'Perplexity', 'HeyGen', 'Google Drive', 'Canva'] },
];

export const dontDo = [
  'Paid advertising or media buying.',
  'Full-service social media marketing.',
  'Writing a complete course curriculum.',
  'Native mobile application development.',
];

export const contact = {
  headline: 'Have a business process you want to improve?',
  text: 'Whether you want to automate repetitive tasks, build an AI voice agent, connect your applications, or develop a complete intelligent workflow, I would like to understand what you are trying to achieve. Let us discuss the problem and explore the right solution.',
  closing: 'I don’t just connect applications. I build systems that help businesses work smarter.',
  signoff: 'Have a process worth improving? Let’s build something intelligent.',
  fields: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    goal: 'What are you looking to build?',
    challenge: 'Tell me about the challenge',
    tools: 'Current tools or platforms',
  },
};

export const testimonials = [
  {
    quote: 'I honestly didn’t expect this level of service. My AI now handles our lead calls well, qualifies leads, book meetings and updates the CRM. The system works perfectly and he went above what we paid for. Communication was smooth, delivery was clean. It was worth every penny.',
    author: 'kinglextypeotec',
    location: 'United States',
    context: 'Fiverr review · AI lead-call system',
  },
  {
    quote: 'Emmanuel delivered a complex, multi-layered automation project that required both technical depth and adaptability as the scope evolved. He solved difficult problems along the way, communicated clearly throughout, and flagged issues proactively. The result is a fully functioning system that saves me significant time as a solo operator. Highly recommended.',
    author: 'christianpaulss',
    location: 'Sweden',
    context: 'Fiverr review · Multi-step automation',
  },
  {
    quote: 'Communication was clear, fast, and professional throughout the project. He adjusted turn detection, response timing, and voice settings, and the improvement in call flow is very noticeable. Now the conversations sound natural and smooth. Highly recommended if you need help with AI voice agents or automation setups.',
    author: 'foldernhilop',
    location: 'United States',
    context: 'Fiverr review · AI voice agent',
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  delivered: 'Delivered',
  'in-progress': 'In progress',
  scoped: 'Scoped',
};
