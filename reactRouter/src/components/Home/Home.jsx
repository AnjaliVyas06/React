
import { Link } from 'react-router-dom'

function Home() {
    const coffees = [
        {
            name: "Classic Cappuccino",
            description: "Rich espresso blended with silky steamed milk.",
            price: "₹180",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600"
        },
        {
            name: "Caramel Latte",
            description: "Smooth espresso with creamy milk and caramel.",
            price: "₹220",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
        },
        {
            name: "Cold Coffee",
            description: "A refreshing chilled coffee for every mood.",
            price: "₹200",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600"
        }
    ]

    return (
        <main className="bg-[#FFF9F0] text-[#4B3621]">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-[#A47148] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                            Welcome to Brewed & Co.
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            A little warmth
                            <span className="block text-[#A47148]">
                                in every cup.
                            </span>
                        </h1>

                        <p className="text-[#6F4E37] text-lg leading-relaxed mb-8 max-w-lg">
                            Great coffee, beautiful moments and conversations
                            that last. Discover your perfect cup at Brewed & Co.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/menu"
                                className="bg-[#6F4E37] text-white px-7 py-3 rounded-lg hover:bg-[#4B3621] transition duration-300"
                            >
                                Explore Our Menu
                            </Link>

                            <Link
                                to="/about"
                                className="border border-[#6F4E37] px-7 py-3 rounded-lg hover:bg-[#F1E4D1] transition duration-300"
                            >
                                Our Story
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
                            alt="Warm and inviting coffee shop"
                            className="w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl"
                        />

                        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 rounded-xl shadow-lg">
                            <p className="text-sm text-[#A47148]">
                                Made with passion
                            </p>
                            <p className="font-bold text-xl">
                                Freshly Brewed Daily
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* Introduction Section */}
            <section className="bg-[#F1E4D1] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-[#A47148] uppercase tracking-widest text-sm font-semibold mb-3">
                        More than just coffee
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Your happy place, one cup at a time.
                    </h2>

                    <p className="text-[#6F4E37] text-lg leading-relaxed">
                        At Brewed & Co., we believe every cup tells a story.
                        From carefully selected coffee beans to the perfect
                        brewing process, we bring you an experience worth
                        slowing down for.
                    </p>

                </div>
            </section>


            {/* Popular Coffee Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-12">
                    <p className="text-[#A47148] uppercase tracking-widest text-sm font-semibold mb-3">
                        Customer favourites
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our Popular Coffee
                    </h2>

                    <p className="text-[#6F4E37] mt-4">
                        A few favourites that make every day better.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {coffees.map((coffee) => (
                        <div
                            key={coffee.name}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                        >
                            <img
                                src={coffee.image}
                                alt={coffee.name}
                                className="w-full h-60 object-cover"
                            />

                            <div className="p-6">
                                <div className="flex justify-between items-center gap-3 mb-3">
                                    <h3 className="text-xl font-bold">
                                        {coffee.name}
                                    </h3>

                                    <span className="text-[#A47148] font-bold whitespace-nowrap">
                                        {coffee.price}
                                    </span>
                                </div>

                                <p className="text-[#6F4E37] leading-relaxed">
                                    {coffee.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/menu"
                        className="inline-block bg-[#6F4E37] text-white px-8 py-3 rounded-lg hover:bg-[#4B3621] transition duration-300"
                    >
                        View Full Menu
                    </Link>
                </div>

            </section>


            {/* Call To Action */}
            <section className="bg-[#4B3621] text-[#FFF9F0] py-20 px-6 text-center">

                <div className="max-w-3xl mx-auto">

                    <p className="text-[#D6BFA5] uppercase tracking-widest text-sm mb-4">
                        Your coffee moment awaits
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Life is better with coffee.
                    </h2>

                    <p className="text-[#F1E4D1] text-lg mb-8">
                        Take a break, grab your favourite cup and make
                        your day a little more special.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block bg-[#FFF9F0] text-[#4B3621] px-8 py-3 rounded-lg font-semibold hover:bg-[#F1E4D1] transition duration-300"
                    >
                        Find Your Favourite
                    </Link>

                </div>

            </section>

        </main>
    )
}

export default Home
