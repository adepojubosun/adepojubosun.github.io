// The /work cards, in render order.
//
// Optional fields:
//   url    — renders the card name as a link to it, in a new tab, with a ↗
//   meta   — the top-right line; omit for cards that carry no dates
//   draft  — true keeps the card out of the built site entirely
export const work = [
  {
    name: 'fintech',
    context: 'Consumer platform · ongoing',
    body: "High-traffic consumer platform work: decomposing monolithic services into modular architectures, designing caching strategies for hot read paths, building authenticated partner integrations, and shaping BFF layers that serve web and mobile clients. The kind of systems where a bad deploy is a headline.",
    tags: ['kotlin', 'java', 'jvm', 'react', 'redis', 'event-driven', 'distributed-systems', 'bff', 'github-actions', 'jenkins'],
  },
  {
    name: 'healthcare',
    context: 'Care platform · ongoing',
    body: 'Event-driven microservices for a healthcare platform — scheduling and coordination systems where reliability and auditability are table stakes. Designing event flows across streaming and queueing infrastructure, with type-safe persistence and services small enough to reason about.',
    tags: ['kotlin', 'java', 'aws', 'event-driven', 'kinesis', 'eventbridge', 'sqs', 'postgresql', 'sql', 'datadog'],
  },
  {
    name: 'rendezview',
    meta: '2025 — present',
    context: 'BlackTag Devs · co-founder & CTO',
    body: 'Finding good events is a discovery problem; planning them is a vendor problem. Rendezview handles both — AI-powered curation on one side, a vendor marketplace on the other. I own architecture and technical direction across a four-person studio: event-driven backend, invite-based beta onboarding with tiered access.',
    tags: ['typescript', 'aws', 'event-driven', 'ai'],
  },
  {
    name: 'backroom',
    url: 'https://www.bkrm.io',
    context: 'BlackTag Devs · bkrm.io',
    body: 'A private membership community for founders, decision-makers, and changemakers — curated events and intentional connection. One of the products I build as CTO of BlackTag Devs.',
    tags: ['typescript', 'aws', 'event-driven'],
  },
  {
    // Scaffold only — stays off the live site until the bracketed
    // placeholders below are replaced and `draft` is removed.
    draft: true,
    name: 'holm',
    url: '[url if public]',
    context: 'BlackTag Devs · [one-word descriptor]',
    body: "[2-3 sentences: what Holm is and the builder's role]",
    tags: ['[3-4 stack tags]'],
  },
  {
    name: 'telecommunications',
    context: 'Data platform',
    body: 'Data platform engineering for a devices organization: built ETL pipelines feeding warehouses across Azure, AWS, and Snowflake, streamed events through Kafka and Hadoop, and shipped internal React tooling that sped up the whole development loop. Supported device logistics end to end — procurement to provisioning, for fleets both on-site and online. Three warehouses, one source of truth.',
    tags: ['java', 'kafka', 'hadoop', 'databricks', 'snowflake', 'azure', 'aws', 'terraform', 'react'],
  },
];

export const publishedWork = work.filter((card) => card.draft !== true);
