// The /now rows, in order. `draft: true` keeps a row off the site — use it
// for rows whose value is still a placeholder.
export const now = [
  { key: 'building', value: 'Rendezview, with the BlackTagDevs team' },
  { key: 'learning', value: 'Product and customer development. Learning to ask users questions instead of answering them for myself' },
  { key: 'writing', value: 'Getting this site up and building a bi-weekly habit' },
  { key: 'fitness', value: 'Lifting four days a week and boxing on Fridays. I follow MMA closely enough to have opinions' },
  { draft: true, key: 'watching', value: '[FILL BEFORE DEPLOY: current show/film]' },
  { key: 'off-hours', value: 'Aviation, and reading about health and living longer' },
];

export const publishedNow = now.filter((row) => row.draft !== true);
