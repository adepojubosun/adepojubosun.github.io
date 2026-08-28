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
    body: 'Consumer systems on web and mobile: a dozen critical APIs serving 3M+ requests a day. Caching, prefetch, and circuit breakers keep them fast when traffic spikes, and a BFF layer feeds each client what it needs. I led the decomposition of a legacy monolith into microservices: phased, zero downtime, known vulnerabilities cleared along the way.',
    tags: ['kotlin', 'java', 'vert.x', 'react', 'redis', 'caching', 'oauth2', 'bff', 'github-actions', 'jenkins'],
  },
  {
    name: 'Healthcare',
    context: 'telehealth platform · web and mobile',
    body: 'Telehealth and clinical trials. On the telehealth side: event-driven microservices behind care workflows and the assessment scheduling system I built. A lost event can mean a patient misses care, so delivery guarantees and audit trails get more attention than throughput. On the trials side: patient recruitment platforms used at research centers across the US and Canada.',
    tags: ['kotlin', 'java', '.net', 'react', 'aws', 'kinesis', 'eventbridge', 'sqs', 'postgresql', 'datadog'],
  },
  {
    name: 'Telecommunications',
    context: 'devices supply chain · data platform',
    body: 'Data platform work for the devices supply chain org. The systems tracked hardware from purchase order to delivery: real-time streams processing 200K+ events an hour through Kafka, ETL across three warehouse platforms, and a Golang tool that generated pipeline schemas automatically and cut development time by 70%.',
    tags: ['java', 'python', 'golang', 'scala', 'kafka', 'rabbitmq', 'spring-boot', 'databricks', 'snowflake', 'azure', 'aws', 'terraform', 'react'],
  },
  {
    name: 'Rendezview',
    url: 'https://rendezview.app',
    context: 'blacktagdevs · co-founder & cto',
    body: 'Rendezview uses AI to help you plan events, with a vendor marketplace underneath. I set technical direction for a four-person team and build most of the backend, including the tiered invite system behind the beta.',
    tags: ['typescript', 'gcp', 'postgresql', 'ai-orchestration'],
  },
  {
    name: 'Backroom',
    url: 'https://www.bkrm.io',
    context: 'blacktagdevs · bkrm.io',
    body: 'A private membership community for founders, decision-makers, and changemakers. Fewer events, smaller rooms, and introductions that actually go somewhere. One of the products I build as CTO at BlackTagDevs.',
    tags: ['typescript', 'railway', 'postgresql', 'stripe', 'subscriptions'],
  },
  {
    name: 'Holm',
    url: 'https://holm.site',
    context: 'blacktagdevs · link-in-bio product',
    body: 'Holm gives you one page to point people at, in the same vein as Linktree. Phoenix and GraphQL underneath, a set of React apps sharing a Turborepo on top. I worked both halves: the profile pages people publish and the admin tooling behind them.',
    tags: ['elixir/phoenix', 'react/typescript', 'graphql', 'postgresql', 'gcp', 'monorepo'],
  },
];

export const publishedWork = work.filter((card) => card.draft !== true);
