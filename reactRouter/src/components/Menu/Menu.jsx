
import { Link } from 'react-router-dom'

function Menu() {

    const menuCategories = [
        {
            title: "Hot Coffee",
            subtitle: "Comfort in every sip.",
            items: [
                {
                    name: "Classic Cappuccino",
                    description: "Rich espresso topped with silky steamed milk and foam.",
                    price: "₹180",
                    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700"
                },
                {
                    name: "Caramel Latte",
                    description: "Smooth espresso, creamy milk and sweet caramel.",
                    price: "₹220",
                    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
                },
                {
                    name: "Classic Espresso",
                    description: "A bold and beautifully balanced shot of coffee.",
                    price: "₹140",
                    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=700"
                }
            ]
        },
        {
            title: "Cold Coffee",
            subtitle: "A refreshing coffee moment.",
            items: [
                {
                    name: "Iced Latte",
                    description: "Chilled espresso with fresh milk and ice.",
                    price: "₹190",
                    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=700"
                },
                {
                    name: "Cold Brew",
                    description: "Slow-steeped coffee with a smooth, rich finish.",
                    price: "₹210",
                    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
                },
                {
                    name: "Iced Caramel Coffee",
                    description: "Refreshing iced coffee with a caramel twist.",
                    price: "₹230",
                    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
                }
            ]
        },
        {
            title: "Bakery & Treats",
            subtitle: "A little something on the side.",
            items: [
                {
                    name: "Butter Croissant",
                    description: "Golden, flaky pastry with a buttery centre.",
                    price: "₹130",
                    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700"
                },
                {
                    name: "Chocolate Muffin",
                    description: "Soft chocolate muffin with rich chocolate flavour.",
                    price: "₹150",
                    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=700"
                },
                {
                    name: "Chocolate Brownie",
                    description: "A rich, fudgy chocolate treat.",
                    price: "₹160",
                    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700"
                }
            ]
        }
    ]

    return (
        <main className="bg-[#FFF9F0] dark:bg-[#241E19] text-[#4B3621] dark:text-[#FFF9F0] transition-colors duration-300">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">

                <p className="uppercase tracking-[0.3em] text-sm text-[#A47148] dark:text-[#D6A477] font-semibold mb-5">
                    Crafted with love
                </p>

                <h1 className="text-4xl md:text-6xl font-semibold mb-7">
                    Our <span className="italic text-[#A47148] dark:text-[#D6A477]">Menu.</span>
                </h1>

                <p className="text-[#6F4E37] dark:text-[#D6C2AE] text-lg leading-relaxed max-w-2xl mx-auto">
                    From your everyday espresso to something a little
                    indulgent, discover flavours made to make your
                    coffee moments special.
                </p>

            </section>


            {/* Menu Categories */}
            {menuCategories.map((category, index) => (

                <section
                    key={category.title}
                    className={`py-20 px-6 ${
                        index % 2 === 0
                            ? "bg-[#F1E4D1] dark:bg-[#302820]"
                            : "bg-[#FFF9F0] dark:bg-[#241E19]"
                    } transition-colors duration-300`}
                >

                    <div className="max-w-7xl mx-auto">

                        {/* Category Heading */}
                        <div className="mb-12">

                            <p className="uppercase tracking-[0.2em] text-sm text-[#A47148] dark:text-[#D6A477] font-semibold mb-4">
                                Collection 0{index + 1}
                            </p>

                            <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                                {category.title}
                            </h2>

                            <p className="text-[#6F4E37] dark:text-[#D6C2AE]">
                                {category.subtitle}
                            </p>

                        </div>


                        {/* Product Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {category.items.map((item) => (

                                <article
                                    key={item.name}
                                    className="bg-white dark:bg-[#382D25] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-full h-64 object-cover"
                                    />

                                    <div className="p-6">

                                        <div className="flex justify-between items-start gap-3 mb-3">

                                            <h3 className="text-xl font-semibold text-[#4B3621] dark:text-[#FFF9F0]">
                                                {item.name}
                                            </h3>

                                            <span className="text-[#A47148] dark:text-[#D6A477] font-bold whitespace-nowrap">
                                                {item.price}
                                            </span>

                                        </div>

                                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] text-sm leading-relaxed">
                                            {item.description}
                                        </p>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>

            ))}


            {/* Closing Section */}
            <section className="bg-[#4B3621] dark:bg-[#382D25] text-[#FFF9F0] px-6 py-24 text-center transition-colors duration-300">

                <div className="max-w-3xl mx-auto">

                    <p className="uppercase tracking-[0.25em] text-sm text-[#D6BFA5] dark:text-[#D6A477] mb-5">
                        Made for your moments
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-7">
                        Your next favourite
                        <span className="block italic text-[#D6BFA5] dark:text-[#D6A477]">
                            cup is waiting.
                        </span>
                    </h2>

                    <p className="text-[#F1E4D1] dark:text-[#D6C2AE] leading-relaxed mb-10">
                        Explore our coffee collection and find
                        something worth coming back for.
                    </p>

                    <Link
                        to="/"
                        className="inline-block bg-[#FFF9F0] text-[#4B3621] px-8 py-3 rounded-lg font-semibold hover:bg-[#F1E4D1] transition duration-300"
                    >
                        Back to Home
                    </Link>

                </div>

            </section>

        </main>
    )
}

export default Menu
