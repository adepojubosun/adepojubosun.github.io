// The /work cards, in render order.
//
// Optional fields:
//   url    — renders the card name as a link to it, in a new tab, with a ↗
//   meta   — the top-right line; omit for cards that carry no dates
//   draft  — true keeps the card out of the built site entirely
export const work = [
  {
    name: 'Fintech',
    context: 'consumer fintech · web and mobile',
    body: "High-traffic consumer systems on web and mobile: a dozen critical APIs serving 3M+ requests a day. The interesting problems are read paths under load: caching strategy, prefetch, circuit breakers, and a BFF layer shaped to what each client actually needs. I also led a legacy monolith's decomposition into microservices: phased, 99% of known vulnerabilities resolved, zero downtime.",
    tags: ['kotlin', 'java', 'jvm', 'react', 'redis', 'event-driven', 'distributed-systems', 'bff', 'github-actions', 'jenkins'],
  },
  {
    name: 'Healthcare',
    context: 'telehealth platform · web and mobile',
    body: 'Scheduling and coordination for a telehealth product, running on event-driven microservices. A lost event here means a patient misses an appointment, so delivery guarantees and audit trails get more of my attention than raw throughput.',
    tags: ['kotlin', 'java', 'aws', 'event-driven', 'kinesis', 'eventbridge', 'sqs', 'postgresql', 'sql', 'datadog'],
  },
  {
    name: 'Rendezview',
    context: 'blacktagdevs · co-founder & cto',
    body: 'Rendezview helps you find events worth your time, then helps you pull off the ones you host yourself. AI curation on one side, a vendor marketplace on the other. I set technical direction for a four-person team and build most of the backend, including the tiered invite system behind the beta.',
    tags: ['typescript', 'aws', 'event-driven', 'ai'],
  },
  {
    name: 'Backroom',
    url: 'https://www.bkrm.io',
    context: 'blacktagdevs · bkrm.io',
    body: 'A private membership community for founders, decision-makers, and changemakers. Fewer events, smaller rooms, and introductions that actually go somewhere. One of the products I build as CTO at BlackTagDevs.',
    tags: ['typescript', 'aws', 'event-driven'],
  },
  {
    name: 'Holm',
    url: 'https://holm.site',
    context: 'blacktagdevs · link-in-bio product',
    body: 'Holm gives you one page to point people at, in the same vein as Linktree. Phoenix and GraphQL underneath, a set of React apps sharing a Turborepo on top. I worked both halves: the profile pages people publish and the admin tooling behind them.',
    tags: ['elixir/phoenix', 'react/typescript', 'graphql', 'postgresql'],
  },
  {
    name: 'Telecommunications',
    context: 'devices org · data platform',
    body: 'Data work for a devices business, tracking hardware from purchase order to the moment it reaches someone\'s desk. I built the pipelines feeding warehouses across three clouds, and the internal React tools the logistics teams lived in day to day.',
    tags: ['java', 'python', 'kafka', 'hadoop', 'databricks', 'snowflake', 'azure', 'aws', 'terraform', 'react'],
  },
];

export const publishedWork = work.filter((card) => card.draft !== true);
