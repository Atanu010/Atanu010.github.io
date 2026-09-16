import { EventItem, MarketingProject, UiUxProject, ProjectSummary, WritingItem } from '../types';

export const PERSONAL_INFO = {
  name: "Atanu Bhowmick",
  roleTagline: "Events · Operations · Digital Marketing · UI/UX · Content",
  headline: "Turning Ideas Into Experiences, Campaigns & Stories.",
  subheadline:
    "I’m a multidisciplinary professional with a strong focus in event management, operations, digital marketing, UI/UX and content creation. I enjoy transforming ideas into well-executed experiences, engaging campaigns, intuitive designs and meaningful content.",
  email: "bhowmickatanu083@gmail.com",
  phone: "+91 9679644406",
  location: "Balurghat, West Bengal",
  degree: "B.Tech in Electrical Engineering (2022 – 2026)",
  institution: "Future Institute of Engineering and Management (FIEM)",
  cgpa: "7.1",
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Fluent" },
    { name: "Bengali", level: "Native / Mother Tongue" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/atanu-bhowmick",
    instagram: "https://www.instagram.com",
    email: "mailto:bhowmickatanu083@gmail.com",
  },
};

export const CULRAV_TIMELINE = [
  {
    year: "2023",
    role: "Volunteer",
    scope: "Culrav Cultural Club",
    details:
      "Supported on-ground crowd flow, stage hospitality, participant registration desks, and cross-team communications.",
  },
  {
    year: "2024",
    role: "Working Committee",
    scope: "Flames’24 Cultural Fest",
    details:
      "Core working committee; supervised food court integration, photography team coordination, and venue logistics routing.",
  },
  {
    year: "2025",
    role: "Logistics & Security Head",
    scope: "Flames’25 Cultural Fest",
    details:
      "Led comprehensive security perimeter blueprints, crowd barricading, equipment logistics, external agency liaisons, and artist hospitality.",
  },
  {
    year: "2026",
    role: "Mentor",
    scope: "Culrav Cultural Club",
    details:
      "Advising incoming student leads on operational governance, risk contingency models, and vendor negotiation best practices.",
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "flames-25",
    name: "Cultural Fest – Flames’25",
    role: "Logistics & Security Head",
    year: "2025",
    organization: "Culrav · Future Institute of Engineering and Management",
    badge: "Lead Role",
    responsibilities:
      "Spearheaded overall festival security blueprints, barricading architecture, emergency evacuation protocols, and equipment routing across multiple campus zones.",
    workedOn:
      "Coordinated with local security personnel, managed volunteer deployment schedules, handled artist escort security, and supervised audio/visual hardware logistics from arrival to demobilization.",
    learnings:
      "Proactive crowd containment strategies, remaining calm under urgent technical or timeline shifts, and the critical importance of a clear communication hierarchy in high-intensity live production.",
    tags: ["Logistics", "Security Coordination", "Crisis Management", "Vendor Operations", "On-Ground Execution"],
    gallery: [
      {
        src: "/images/flames25/trap-live.jpg",
        caption: "Headliner Performance: The Radical Array Project (TRAP) performing live on the Flames’25 main stage under red truss lighting, supervised under Atanu’s logistics and security coordination.",
      },
      {
        src: "/images/flames25/culrav-core-team.jpg",
        caption: "Culrav Organizing Committee & Logistics/Security Team on stage celebrating a successful, incident-free Flames’25 festival wrap (Nov 24, 1:28 AM).",
      },
      {
        src: "/images/flames25/flames25-stage-bassist.jpg",
        caption: "Live band performance on the Flames’25 stage with illuminated 'FLAMES 25' backdrop, stage monitoring, and crowd barricading.",
      },
    ],
  },
  {
    id: "flames-24",
    name: "Cultural Fest – Flames’24",
    role: "Working Committee Member",
    year: "2024",
    organization: "Culrav · Future Institute of Engineering and Management",
    badge: "Execution Team",
    responsibilities:
      "Coordinated stage hospitality, on-site food court logistics, guest escort services, and photography team route allocations throughout the multi-day festival schedule.",
    workedOn:
      "Liaised directly with catering vendors, ensured seamless artist backstage requirements, and partnered with the photography club to ensure comprehensive archive capture of all competitive segments.",
    learnings:
      "Understanding operational dependencies — how food delays or mic check delays can cause ripple effects throughout an entire event timetable.",
    tags: ["Food Management", "Photography Coordination", "Hospitality", "Team Communication"],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        caption: "Festival arena evening lighting and attendee movement corridors.",
      },
      {
        src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
        caption: "Hospitality coordination and volunteer briefings before showtime.",
      },
    ],
  },
];

export const MARKETING_PROJECTS: MarketingProject[] = [
  {
    id: "mktg-fest-outreach",
    title: "Campus Fest Multi-Channel Digital Outreach & Storytelling",
    tagline: "Transitioning passive campus attendees into active, engaged participants.",
    objective:
      "Build sustained pre-event buzz for Flames, drive early registrations for inter-college competitive tracks, and establish transparent entry guidelines.",
    targetAudience:
      "Undergraduate students across Kolkata colleges, competitive cultural societies, and local student creators.",
    strategy:
      "Implemented a 4-phase rollout: Mystery countdown teaser &rarr; Theme revelation &rarr; Headlining artist silhouette clues &rarr; Practical attendee handbook (gates, schedule, safety rules).",
    creativeAssets:
      "Instagram feed carousels, artist reveal teaser copies, reel hooks, WhatsApp broadcast announcements, and on-campus promotional posters.",
    outcome:
      "Strong organic engagement across campus networks with zero paid media budget; high clarity at entry gates on Day 1 due to pre-published logistics guides.",
    learnings:
      "Publishing logistical FAQs as bite-sized social graphics reduces attendee friction more effectively than standard text circulars.",
    tags: ["Social Media", "Campaign Planning", "Content Calendar", "Audience Research", "Copywriting"],
    isPlaceholder: false,
  },
  {
    id: "mktg-qc-transparency",
    title: "Operational Transparency & Process Storytelling Blueprint",
    tagline: "Translating back-end quality control and manufacturing rigor into consumer trust.",
    objective:
      "Formulate a structured brand communication framework highlighting precision, SOP adherence, and inspection standards as key brand differentiators.",
    targetAudience:
      "Discerning consumers and B2B stakeholders who value meticulous process reliability and product integrity.",
    strategy:
      "Highlight behind-the-scenes testing routines, step-by-step verification checkpoints, and employee dedication through educational micro-content.",
    creativeAssets:
      "Educational LinkedIn articles, process breakdown infographics, quality checklist highlights, and short documentary-style copy snippets.",
    outcome:
      "Structured blueprint ready for brand activation, bridging operational accuracy with relatable audience communication.",
    learnings:
      "Audiences respect genuine operational details far more than vague marketing buzzwords.",
    tags: ["Brand Communication", "Content Strategy", "Storytelling", "Quality Operations"],
    isPlaceholder: true,
  },
];

export const UIUX_PROJECTS: UiUxProject[] = [
  {
    id: "uiux-dispatch",
    title: "Volunteer Shift & Incident Dispatch Platform",
    category: "Operations & Logistics Tool",
    platform: "Responsive Web & Mobile Companion",
    problem:
      "On-ground fest organizers lose 20–30 critical minutes coordinating volunteer locations over scattered chat apps during emergencies and stage delays.",
    user:
      "Student event heads, perimeter security marshals, and mobile volunteers operating in high-noise, fluctuating lighting conditions.",
    research:
      "Observed on-ground pain points during Flames'24: notifications drowned out by stage speakers, single-tap confirmation needed while walking, and patchy connectivity on event lawns.",
    userFlow:
      "Quick Pin Sign-in &rarr; Current Zone Status &rarr; One-Tap Emergency or Shift Swap Alert &rarr; Real-Time Broadcast Queue with Audio Haptic Cue.",
    wireframes:
      "Designed low-fidelity structural wireframes focused on thumb-accessible bottom navigation and 52px+ touch targets.",
    designDecisions:
      "Strict high-contrast neutral theme to prevent screen glare under direct sunlight; color-coded alert badges (Red = Medical/Security, Amber = Logistics/Food, Blue = Stage Timing); offline queue caching.",
    learnings:
      "Field interfaces must be engineered for stress and distraction. Eliminating decorative flourishes and prioritizing visual hierarchy directly saves operational time.",
    figmaPreviewUrl: "https://www.figma.com",
    coverImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    tags: ["UI Design", "UX Thinking", "User Flows", "Wireframes", "Prototyping", "Usability"],
  },
];

export const INITIAL_WRITINGS: WritingItem[] = [
  {
    id: 1,
    title: "The Anatomy of Calm Under Pressure: Event Operations Behind the Scenes",
    category: "Articles",
    date: "Jan 18, 2025",
    readTime: "4 min read",
    featured: true,
    desc: "When a stage schedule slips by 20 minutes or a logistics vehicle stalls, authority isn't declared with a loud voice. It is created through calm coordination.",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    content: `In live festival execution, uncertainty is not an anomaly — it is the baseline condition.

During my responsibilities heading security and logistics at college cultural fests, I learned early that the true mark of operational leadership is emotional neutrality. When two sound vendors arrive at the same loading bay at 7:00 AM with overlapping credentials, panic achieves nothing. The only currency that matters is step-by-step clarity:

1. Confirm immediate priorities (which stage goes live first).
2. Create physical buffer spaces so bottlenecking does not spill into the main audience concourse.
3. Keep volunteers informed on only their next immediate instruction. Overloading team members with full-scope chaos causes panic; feeding them single, actionable steps restores momentum.

The audience never sees the frantic backstage calls. If an event feels effortless to an attendee, it means someone behind the scenes absorbed chaos quietly so the experience could remain intact.`,
    tags: ["Operations", "Events", "Crisis Management", "Leadership"],
  },
  {
    id: 2,
    title: "Why Content Strategy Must Precede Design in Any Campaign",
    category: "Marketing Copy",
    date: "Nov 12, 2024",
    readTime: "3 min read",
    featured: true,
    desc: "Designing a poster, landing screen, or social post with 'Lorem Ipsum' is building a house without knowing who will live in it.",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    content: `A common pitfall in campaign planning is finalizing the visual template before answering a single strategic question: What is the exact transformation we expect from the reader?

When words follow templates, copy becomes fluffy padding. When copy leads, the visual framework exists exclusively to highlight the argument:

- What does the reader know before seeing this?
- What one emotion or fact must stand out in the first 1.5 seconds?
- What friction is holding them back from clicking or registering?

Copywriting is not decorative prose. It is user experience executed with words. When marketing messaging and UI architecture work in unison, conversions stop being accidental.`,
    tags: ["Marketing", "Strategy", "Copywriting", "UI/UX"],
  },
  {
    id: 3,
    title: "From Volunteer to Head: What Culrav Taught Me About Organizational Trust",
    category: "Event Content",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    featured: false,
    desc: "Starting at the ground floor checking gate tags in 2023 taught me how to lead incoming heads by 2025.",
    coverImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80",
    content: `Climbing the operational ladder in a major cultural club like Culrav teaches you humility before authority. In 2023, my day consisted of checking badges, running water packs to console operators, and ensuring safety stanchions remained upright. 

By the time I held the role of Logistics & Security Head for Flames'25, I knew exactly why volunteer rosters fail if meals are late, or why security radios require dedicated channel discipline. 

True organizational empathy is built by having stood on your feet for 14 hours in the exact spots where you now assign younger volunteers. Experience cannot be simulated with slides.`,
    tags: ["Culrav", "Festival", "Operations", "Team Building"],
  },
  {
    id: 4,
    title: "The Quality Control Mindset: Why Small Tolerances Matter Everywhere",
    category: "Blogs",
    date: "Aug 22, 2024",
    readTime: "4 min read",
    featured: false,
    desc: "How working with strict manufacturing standard operating procedures (SOPs) reshapes the way you approach design systems and event timelines.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    content: `When inspecting finished hardware components, a variance of half a millimeter is the difference between a pristine product and a failure in the field. 

Carrying this perspective over to creative operations changes how you view deadlines, proofreading, and UI padding:
- A typo on an event banner printed 20 feet wide cannot be 'patched' like code.
- A missing power extension box at 4 PM stalls a stage soundcheck for 200 musicians.
- A button with 8px margin when the spec required 16px breaks the optical rhythm of a screen.

Rigorous SOP adherence is not about bureaucratic hesitation; it is about respecting the final recipient enough to get the invisible details right the first time.`,
    tags: ["Quality Control", "Operations", "Attention to Detail", "Mindset"],
  },
];

export const SELECTED_PROJECTS: ProjectSummary[] = [
  {
    id: "proj-flames25",
    title: "Festival Logistics & Security Protocol",
    category: "events",
    categoryLabel: "Events & Operations",
    year: "2025",
    desc: "Comprehensive crowd partitioning, perimeter control, vendor movement, and hardware allocation for Flames’25.",
    skills: "Logistics · Security · Vendor Operations",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    actionLabel: "View Case Breakdown",
  },
  {
    id: "proj-mktg-buzz",
    title: "Multi-Channel Fest Teaser & Outreach Strategy",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    year: "2024",
    desc: "Phased editorial calendar built to drive organic registrations through student-led brand storytelling.",
    skills: "Content Strategy · Social Media · Copywriting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    actionLabel: "View Campaign Blueprint",
  },
  {
    id: "proj-uiux-dispatch",
    title: "Volunteer Shift Dispatch Interface",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    year: "2024",
    desc: "High-contrast, quick-action dispatch interface engineered for noisy, fast-paced live event scenarios.",
    skills: "Figma · User Flows · Wireframes · IA",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    actionLabel: "View UX Breakdown",
  },
  {
    id: "proj-essay-calm",
    title: "The Anatomy of Calm Under Pressure",
    category: "content",
    categoryLabel: "Content Writing",
    year: "2025",
    desc: "An operational reflection on maintaining composure, crisis hierarchy, and volunteer trust during live festival execution.",
    skills: "Long-form Essay · Operational Insight",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    actionLabel: "Read Essay",
  },
  {
    id: "proj-ultrahuman-qc",
    title: "SOP Adherence & Quality Inspection Record",
    category: "events",
    categoryLabel: "Operations",
    year: "2026",
    desc: "Quality control inspection protocols, process verification, and maintaining high manufacturing accuracy at Ultrahuman Facility.",
    skills: "Quality Operations · SOP Compliance · Detail",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    actionLabel: "View Operational Notes",
  },
  {
    id: "proj-food-vendor",
    title: "Vendor & Food Court Integration",
    category: "events",
    categoryLabel: "Events & Operations",
    year: "2024",
    desc: "Managing vendor stalls, safety clearances, waste management, and electrical routing for Flames’24.",
    skills: "On-Ground Logistics · Vendor Relations",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    actionLabel: "View Case Breakdown",
  },
];
