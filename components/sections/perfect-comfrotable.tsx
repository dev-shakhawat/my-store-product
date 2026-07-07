import ScrollShowcase, { ShowcaseItem } from "../common/scroll-showcase";

 

const items: ShowcaseItem[] = [
  {
    id: 'Blue',
    colorClass: 'text-blue-500',
    imageUrl: 'https://picsum.photos/id/16/500/500',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@matthewwmcb' },
  },
  {
    id: 'Red',
    colorClass: 'text-red-500',
    imageUrl:
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@tuannguyenminh' },
  },
  {
    id: 'Green',
    colorClass: 'text-green-600',
    imageUrl:
      'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@ghog' },
  },
  {
    id: 'Orange',
    colorClass: 'text-orange-500',
    imageUrl:
      'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@vinomamba24' },
  },
  {
    id: 'Purple',
    colorClass: 'text-purple-600',
    imageUrl:
      'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@virussinside' },
  },
];

export default function ShowcasePage() {
  return (
    <ScrollShowcase
      items={items}
      heading={
        <div className="relative z-10 max-w-lg text-center text-neutral-500">
          <p className="text-2xl">
            <strong className="text-green-600">Green</strong> is for{' '}
            <strong className="text-green-600">GreenSock</strong>.
          </p>
          <p className="mt-4 text-2xl">
            <strong className="text-green-600">Scroll</strong> is for{' '}
            <strong className="text-green-600">ScrollTrigger</strong>.
          </p>
        </div>
      }
      footer={
        <div className="text-center text-neutral-500">
          <p>
            Fueled by{' '}
            <a
              className="text-neutral-300 hover:text-[#88CE02]"
              href="https://greensock.com/docs/v3/Plugins/ScrollTrigger"
              target="_blank"
              rel="noopener noreferrer"
            >
              GSAP
            </a>
          </p>
          <p className="mt-2">
            Inspired by{' '}
            <a
              className="text-neutral-300 hover:text-[#EB008A]"
              href="https://www.easytigerfilms.fr/en/actualites"
              target="_blank"
              rel="noopener noreferrer"
            >
              EasyTigerFilms
            </a>
          </p>
        </div>
      }
    />
  );
}