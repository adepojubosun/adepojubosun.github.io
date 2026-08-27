// The /now rows, in order. `draft: true` keeps a row off the site — use it
// for rows whose value is still a placeholder.
export const now = [
  { key: 'building', value: 'Rendezview at BlackTagDevs' },
  { key: 'learning', value: 'AI evals and distributed systems' },
  { key: 'creating', value: 'Writing and video content' },
  { key: 'fitness', value: 'Lifting and MMA' },
  { key: 'watching', value: 'Silo' },
  { key: 'interests', value: 'Aviation, health and longevity' },
];

export const publishedNow = now.filter((row) => row.draft !== true);
