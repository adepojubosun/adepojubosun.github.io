// Footer social links. `draft: true` keeps a link off the site.
export const socials = [
  { label: 'github', url: 'https://github.com/adepojubosun' },
  { label: 'linkedin', url: 'https://linkedin.com/in/bosun-adepoju' },
  { label: 'substack', url: 'https://substack.com/@bosunadepoju' },
  { label: 'instagram', url: 'https://instagram.com/boss_un' },
];

export const publishedSocials = socials.filter((link) => link.draft !== true);
