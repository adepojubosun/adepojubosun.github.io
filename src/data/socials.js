// Footer social links.
//
// `draft: true` keeps a link off the site. The two drafts below are waiting
// on their real URLs — drop the draft line once each is filled in.
export const socials = [
  { label: 'github', url: 'https://github.com/adepojubosun' },
  { draft: true, label: 'substack', url: '[substack url]' },
  { draft: true, label: 'instagram', url: '[instagram url]' },
];

export const publishedSocials = socials.filter((link) => link.draft !== true);
