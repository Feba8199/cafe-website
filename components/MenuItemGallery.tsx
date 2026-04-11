import Image from 'next/image';
import Link from 'next/link';

const featuredItems = [
  {
    name: 'Flat White',
    image: '/menu-items/item-1.jpeg',
    tag: 'Popular',
  },
  {
    name: 'Iced Coffee',
    image: '/menu-items/item-2.png',
    tag: 'Cold Favourite',
  },
  {
    name: 'Avocado Toast',
    image: '/menu-items/item-3.jpeg',
    tag: 'Fresh',
  },
  {
    name: 'Eggs on Toast',
    image: '/menu-items/item-4.png',
    tag: 'Cafe Classic',
  },
  {
    name: 'Chicken Sandwich',
    image: '/menu-items/item-5.jpg',
    tag: 'Lunch Pick',
  },
  {
    name: 'Cheesecake',
    image: '/menu-items/item-6.jpeg',
    tag: 'Sweet Treat',
  },
  { name: 'Pancakes', image: '/menu-items/item-7.jpeg' },
  { name: 'Smoothie Bowl', image: '/menu-items/item-8.jpeg' },
  { name: 'Some Bowl', image: '/menu-items/item-9.jpeg' },
];

export default function MenuItemGallery() {
  return (
    <section className="menu-items-section">
      <div className="menu-items-header">
        <p className="section-kicker">Menu Highlights</p>
        <h2>A few customer favourites</h2>
        <p>Explore a selection of drinks and dishes from our cafe menu.</p>
      </div>

      <div className="menu-items-grid">
        {featuredItems.slice(0, 9).map((item) => (
          <article key={item.name} className="menu-item-card">
            <div className="menu-item-image-wrap">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="menu-item-image"
              />
            </div>

            {/* <div className="menu-item-body">
              <p className="menu-item-tag">{item.tag}</p>
              <h3>{item.name}</h3>
            </div> */}
          </article>
        ))}
      </div>

      <div className="menu-items-cta">
        <Link href="/menu" className="button-link">
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
