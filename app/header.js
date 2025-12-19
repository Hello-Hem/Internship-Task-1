
export default function Header() {
    return (
        <headerBar className="w-full bg-[#fffdd0] py-10 md:py-16 border-b border-[#36454f]/10">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-[#36454f] text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
                    Source Recipe
                </h1>
                <p className="text-[#36454f]/70 mt-4 text-lg font-medium max-w-2xl mx-auto">
                    A curated collection of culinary inspiration.
                </p>
            </div>
        </headerBar>
    );
}