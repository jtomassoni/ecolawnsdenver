/** Services customers can request without a season pass - plain-language menu. */
export type BookableService = {
  id: string;
  title: string;
  description: string;
  priceHint: string;
  image: string;
};

export const BOOKABLE_SERVICES: BookableService[] = [
  {
    id: 'one-time-mow',
    title: 'One-Time Lawn Mow',
    description:
      'Need your lawn cut this week? Full mow, edge, trim, and cleanup, done with quiet electric equipment.',
    priceHint: 'Most Denver lawns: about $40–60 per visit.',
    image: '/images/lawn-being-cut.png',
  },
  {
    id: 'regular-mowing',
    title: 'Weekly or Bi-Weekly Mowing',
    description:
      'Want us on a regular schedule? We come every week or every two weeks. You pay per visit, no big upfront season payment.',
    priceHint: 'About $40–60 per visit depending on lawn size.',
    image: '/images/lawn-cut-shot.png',
  },
  {
    id: 'cleanup-aeration',
    title: 'Cleanup & Aeration',
    description:
      'Catch-up cleanup, dethatching, aeration, or overseeding when your lawn needs extra attention mid-season.',
    priceHint: 'Most lawns: about $150–200 (we confirm for your yard).',
    image: '/images/leaf-raking.png',
  },
  {
    id: 'fall-cleanup',
    title: 'Fall Cleanup',
    description:
      'Leaf removal and end-of-season prep. Book ahead for later this year.',
    priceHint: 'Most lawns: about $150–200.',
    image: '/images/leaf-raking.png',
  },
];

export function getBookableService(id: string): BookableService | undefined {
  return BOOKABLE_SERVICES.find((s) => s.id === id);
}
