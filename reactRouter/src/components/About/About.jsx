
import { Link } from 'react-router-dom'

function About() {
    return (
        <main className="bg-[#FFF9F0] dark:bg-[#241E19] text-[#4B3621] dark:text-[#FFF9F0] transition-colors duration-300">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

                <div className="max-w-3xl mx-auto text-center">

                    <p className="uppercase tracking-[0.3em] text-sm text-[#A47148] dark:text-[#D6A477] font-semibold mb-5">
                        Our Story
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
                        Every great cup has a
                        <span className="text-[#A47148] dark:text-[#D6A477] italic"> story.</span>
                    </h1>

                    <p className="text-[#6F4E37] dark:text-[#D6C2AE] text-lg leading-relaxed">
                        We believe coffee is more than just a drink.
                        It's a moment to pause, connect, and enjoy
                        the little things in life.
                    </p>

                </div>

                <div className="mt-16">
                    <img
                        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85"
                        alt="Warm and welcoming coffee shop interior"
                        className="w-full h-[300px] md:h-[520px] object-cover rounded-2xl"
                    />
                </div>

            </section>


            {/* Our Story Section */}
            <section className="bg-[#F1E4D1] dark:bg-[#302820] py-20 px-6 transition-colors duration-300">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div>
                        <p className="uppercase tracking-[0.2em] text-sm text-[#A47148] dark:text-[#D6A477] font-semibold mb-4">
                            A little about us
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-7">
                            Born from a love
                            <span className="italic text-[#A47148] dark:text-[#D6A477]"> of coffee.</span>
                        </h2>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed mb-5">
                            Brewed & Co. was created with one simple
                            idea: to make every coffee moment special.
                        </p>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed mb-5">
                            From the aroma of freshly ground beans
                            to the first sip of your favourite latte,
                            we believe every detail matters.
                        </p>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed">
                            Whether you're meeting a friend, enjoying
                            a quiet morning, or taking a break from
                            a busy day, there's always a place for you
                            at our table.
                        </p>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000"
                            alt="Freshly prepared coffee"
                            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                </div>

            </section>


            {/* Our Philosophy */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="text-center max-w-2xl mx-auto mb-16">

                    <p className="uppercase tracking-[0.2em] text-sm text-[#A47148] dark:text-[#D6A477] font-semibold mb-4">
                        What we believe
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold mb-5">
                        Coffee with a purpose.
                    </h2>

                    <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed">
                        Good coffee is about quality, care and
                        the experience behind every cup.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-10">

                    <div className="border-t border-[#E8DCCB] dark:border-[#4A3B30] pt-7">
                        <span className="text-[#A47148] dark:text-[#D6A477] text-sm tracking-widest">
                            01
                        </span>

                        <h3 className="text-2xl font-semibold mt-4 mb-4">
                            Quality First
                        </h3>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed">
                            Every great coffee experience starts
                            with carefully selected ingredients
                            and attention to detail.
                        </p>
                    </div>

                    <div className="border-t border-[#E8DCCB] dark:border-[#4A3B30] pt-7">
                        <span className="text-[#A47148] dark:text-[#D6A477] text-sm tracking-widest">
                            02
                        </span>

                        <h3 className="text-2xl font-semibold mt-4 mb-4">
                            Made With Care
                        </h3>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed">
                            We believe the little details make
                            the biggest difference, from brewing
                            to the final pour.
                        </p>
                    </div>

                    <div className="border-t border-[#E8DCCB] dark:border-[#4A3B30] pt-7">
                        <span className="text-[#A47148] dark:text-[#D6A477] text-sm tracking-widest">
                            03
                        </span>

                        <h3 className="text-2xl font-semibold mt-4 mb-4">
                            Community Matters
                        </h3>

                        <p className="text-[#6F4E37] dark:text-[#D6C2AE] leading-relaxed">
                            A coffee shop should feel like a place
                            where people connect, relax and belong.
                        </p>
                    </div>

                </div>

            </section>


            {/* Coffee Experience */}
            <section className="bg-[#4B3621] dark:bg-[#382D25] text-[#FFF9F0] px-6 py-24 transition-colors duration-300">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="uppercase tracking-[0.25em] text-sm text-[#D6BFA5] dark:text-[#D6A477] mb-5">
                        The Brewed & Co. Experience
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-7">
                        Slow down. Sip slowly.
                        <span className="block italic text-[#D6BFA5] dark:text-[#D6A477]">
                            Enjoy the moment.
                        </span>
                    </h2>

                    <p className="text-[#F1E4D1] dark:text-[#D6C2AE] leading-relaxed max-w-2xl mx-auto mb-10">
                        Your everyday coffee deserves something special.
                        Come discover your next favourite cup.
                    </p>

                    <Link
                        to="/menu"
                        className="inline-block bg-[#FFF9F0] text-[#4B3621] px-8 py-3 rounded-lg font-semibold hover:bg-[#F1E4D1] transition duration-300"
                    >
                        Explore Our Menu
                    </Link>

                </div>

            </section>

        </main>
    )
}

export default About
