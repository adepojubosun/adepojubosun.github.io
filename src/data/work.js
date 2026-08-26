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
    body: 'Loyalty and rewards for a major card issuer, on web and mobile. A lot of the job is untangling services that grew too large, and keeping the read paths quick when everyone checks their points at once. I also build the partner integrations and the BFF layer both apps sit on.',
    tags: ['kotlin', 'java', 'jvm', 'react', 'redis', 'event-driven', 'distributed-systems', 'bff', 'github-actions', 'jenkins'],
  },
  {
    name: 'healthcare',
    context: 'Telehealth product',
    body: 'Scheduling and coordination for a telehealth product, running on event-driven microservices. A lost event here means a patient misses an appointment, so delivery guarantees and audit trails get more of my attention than raw throughput.',
    tags: ['kotlin', 'java', 'aws', 'event-driven', 'kinesis', 'eventbridge', 'sqs', 'postgresql', 'sql', 'datadog'],
  },
  {
    name: 'rendezview',
    meta: '2025 — present',
    context: 'BlackTagDevs · co-founder & CTO',
    body: 'Rendezview helps you find events worth your time, then helps you pull off the ones you host yourself. AI curation on one side, a vendor marketplace on the other. I set technical direction for a four-person team and build most of the backend, including the tiered invite system behind the beta.',
    tags: ['typescript', 'aws', 'event-driven', 'ai'],
  },
  {
    name: 'backroom',
    url: 'https://www.bkrm.io',
    context: 'BlackTagDevs · bkrm.io',
    body: 'A private membership community for founders, decision-makers, and changemakers. Fewer events, smaller rooms, and introductions that actually go somewhere. One of the products I build as CTO at BlackTagDevs.',
    tags: ['typescript', 'aws', 'event-driven'],
  },
  {
    name: 'holm',
    url: 'https://holm.site',
    context: 'Real estate technology',
    body: 'Real estate software, worked end to end. Elixir and Phoenix serving GraphQL on one side, a handful of React apps sharing a Turborepo on the other. I built the admin tooling, the profile flows, and the property pages, which meant living in both halves of the stack most days.',
    tags: ['elixir/phoenix', 'react/typescript', 'graphql', 'postgresql'],
  },
  {
    name: 'telecommunications',
    context: 'Devices org · pipelines and internal tooling',
    body: 'Data work for a devices business, tracking hardware from purchase order to the moment it reaches someone\'s desk. I built the pipelines feeding warehouses across three clouds, and the internal React tools the logistics teams lived in day to day.',
    tags: ['java', 'python', 'kafka', 'hadoop', 'databricks', 'snowflake', 'azure', 'aws', 'terraform', 'react'],
  },
];

export const publishedWork = work.filter((card) => card.draft !== true);
