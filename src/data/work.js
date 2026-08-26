// The /work cards, in render order.
//
// Optional fields:
//   url    — renders the card name as a link to it, in a new tab, with a ↗
//   meta   — the top-right line; omit for cards that carry no dates
//   draft  — true keeps the card out of the built site entirely
export const work = [
  {
    name: 'fintech',
    context: 'Loyalty and rewards · web and mobile',
    body: 'Loyalty and rewards for a major card issuer, across web and mobile. Breaking oversized services into smaller ones, caching the read paths that take the most traffic, building authenticated partner integrations, and shaping the BFF layer both clients run on.',
    tags: ['kotlin', 'java', 'jvm', 'react', 'redis', 'event-driven', 'distributed-systems', 'bff', 'github-actions', 'jenkins'],
  },
  {
    name: 'healthcare',
    context: 'Telehealth product',
    body: 'Event-driven microservices behind a telehealth product, handling scheduling and coordination across care teams. A dropped event here means someone misses an appointment, so the event flows across streaming and queueing infrastructure get a lot of attention, with type-safe persistence underneath.',
    tags: ['kotlin', 'java', 'aws', 'event-driven', 'kinesis', 'eventbridge', 'sqs', 'postgresql', 'sql', 'datadog'],
  },
  {
    name: 'rendezview',
    meta: '2025 — present',
    context: 'BlackTagDevs · co-founder & CTO',
    body: 'Rendezview helps people find events worth going to and plan the ones they host. AI curation on one side, a vendor marketplace on the other. I own architecture and technical direction across a four-person studio, from the event-driven backend to the invite-based beta with tiered access.',
    tags: ['typescript', 'aws', 'event-driven', 'ai'],
  },
  {
    name: 'backroom',
    url: 'https://www.bkrm.io',
    context: 'BlackTagDevs · bkrm.io',
    body: 'A private membership community for founders, decision-makers, and changemakers, built around curated events and intentional connection. One of the products I build as CTO at BlackTagDevs.',
    tags: ['typescript', 'aws', 'event-driven'],
  },
  {
    // Scaffold only — stays off the live site until the bracketed
    // placeholders below are replaced and `draft` is removed.
    draft: true,
    name: 'holm',
    url: 'https://holm.site',
    context: 'BlackTagDevs · [one-word descriptor]',
    body: '[2-3 sentences: what Holm is and my role on it]',
    tags: ['[3-4 stack tags]'],
  },
  {
    name: 'telecommunications',
    context: 'Devices org · pipelines and internal tooling',
    body: 'Worked in the data organization supporting a devices business. Built the ETL pipelines feeding warehouses across Azure, AWS, and Snowflake, moved events through Kafka and Hadoop, and shipped internal React tools that took a lot of friction out of the day to day. The work covered device logistics end to end, from procurement through provisioning, for fleets on-site and online.',
    tags: ['java', 'python', 'kafka', 'hadoop', 'databricks', 'snowflake', 'azure', 'aws', 'terraform', 'react'],
  },
];

export const publishedWork = work.filter((card) => card.draft !== true);
