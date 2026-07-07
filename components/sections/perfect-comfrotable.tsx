import ScrollShowcase, { ShowcaseItem } from "../common/scroll-showcase";



const items: ShowcaseItem[] = [
  {
    id: 'Blue',
    colorClass: 'text-blue-500',
    imageUrl: 'https://picsum.photos/id/16/500/500',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@matthewwmcb' },
    title: <div>
      <h2 className="font-oswald font-bold text-5xl! text-white  ">
        Collection of Must Haves for a <em className="font-dancing-script  ">Bold Stylish Look</em>
      </h2>
    </div>,
    color: "#55043f",
    desc: "Shop now and redefine your fashion game with pieces that are designed to turn heads and make a lasting impression fashion."
  },
  {
    id: 'Red',
    color: "#3b1e34",
    colorClass: 'text-red-500',
    imageUrl:
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@tuannguyenminh' },
    title: <div>
      <h2 className="font-oswald  font-bold text-5xl! text-white  ">
        Everyday Outfits with Our <em className="font-dancing-script  " >High Stylish</em> essentials
      </h2>
    </div>,
    desc: "Our curated selection combines timeless elegance with modern trends, ensuring you look sophisticated no matter the occasion."
  },
  {
    id: 'Green',
    colorClass: 'text-green-600',
    imageUrl:
      'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@ghog' },
    title: <div>
      <h2 className="font-oswald font-bold text-5xl! text-white  ">Season’s Hottest Trends and <em className="font-dancing-script  ">Stylish Clothes</em></h2>
    </div>,
    color: "#45231B",
    desc: "Refresh your wardrobe & embrace the season’s most sought-after trends with our latest collection of stylish clothes."
  },
  {
    id: 'Orange',
    colorClass: 'text-orange-500',
    imageUrl:
      'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    credit: { label: 'Image Credit', href: 'https://unsplash.com/@vinomamba24' },
    title: <div>
      <h2 className="font-oswald font-bold text-5xl! text-white  ">
        Perfect Comfort & Style with <em className="font-dancing-script  ">Latest Fashion</em>
      </h2>

    </div>,
    color: "#240E1E",
    desc: "Discover the ultimate fusion of comfort and style with our latest fashion lineup, designed to offer both exceptional ease."
  },
];

export default function ShowcasePage() {
  return (
    <ScrollShowcase
      items={items}
    />
  );
}