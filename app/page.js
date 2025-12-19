import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center gap-6 p-8">
      
      <h1 className="text-4xl font-bold">
        Welcome to Source Recipe
      </h1>

      <p className="font-sans text-lg max-w-xl text-center">
        Here is a simple procedure to make delicious home made pasta.
      </p>

      <Image
        src="/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.avif"
        alt="Space"
        width={400}
        height={250}
        className="rounded-lg shadow-lg"
      />

      <p className="text-lg w-full max-w-xl font-bold">
        Ingredients & Procedure:
      </p>
      <div className="w-full max-w-xl"> {/* Added a container for better alignment */}
        <ol className="list-decimal list-inside">
          <li><b>Ziti,</b> of course! Another tube-shaped pasta, such as penne or rigatoni, would work nicely too.</li>
          <li><b>Marinara sauce </b>– If I have the time, I like to use my homemade marinara sauce here, which comes together with a quick 20-minute simmer on the stove. But store-bought sauce is fair game too! I recommend Rao’s.</li>
          <li><b>Ricotta cheese</b> – It creates a creamy layer in the center of the baked ziti. For the best texture, make sure to use whole milk ricotta in this recipe.</li>
          <li><b>Garlic, lemon zest, oregano, and red pepper flakes</b> – I use these ingredients to season the ricotta. The garlic, oregano, and pepper flakes add classic Italian flavor, and the lemon zest brings a delicious, unexpected brightness.</li>
          <li><b>Fresh spinach</b> – An entire pound wilts down into this comforting pasta.</li>
          <li><b>Smoked mozzarella and pecorino cheeses</b> – For topping. The smoked mozzarella gives the pasta a kick of rich, smoky flavor, which I love, but if you can’t find it, no worries! Sub in regular shredded mozzarella. And in a pinch, salty, nutty Parmesan cheese is a great sub for the pecorino.</li>
          <li><b>Torn fresh basil and chopped parsley</b> – I sprinkle them over the final dish for a fresh, vibrant finishing touch.</li>
          <li><b>Salt and pepper</b> – To make all the flavors pop!</li>
          

        </ol>
      </div>
      <div className="w-full max-w-xl">
        <p className="text-xl w-full max-w-xl font-medium">Method</p>
        <p className="text-s font-italic">
          This baked ziti recipe is easy to make! Here’s how it goes:

          <b>First, cook the pasta.</b> Bring a large pot of salted water to a boil, and cook the pasta until al dente. Be careful not to overcook it! It will soften more while it bakes.

          <b>While the pasta cooks, make the ricotta cheese mixture.</b> Stir together the ricotta, garlic, lemon zest, oregano, and red pepper flakes, and season with salt and pepper.

          Next, <b>sauté the spinach.</b> Drain the pasta, and heat a glug of olive oil in the same pot. Sauté the spinach until it’s just wilted. Tip: Work in batches here! I do 1/2 pound at a time so that the spinach cooks evenly.

          Gently squeeze some of the excess moisture out of the sautéed spinach and roughly chop it.
        </p>
      </div>
      <Image
        src="/best-baked-ziti-recipe-580x889.jpg"
        alt="Space"
        width={400}
        height={250}
        className="rounded-lg shadow-lg"
      />

      <Image
        src="/easy-baked-ziti-580x808.jpg"
        alt="Space"
        width={400}
        height={250}
        className="rounded-lg shadow-lg"
      />

      <Image
        src="/easy-baked-ziti-recipe-580x805.jpg"
        alt="Space"
        width={400}
        height={250}
        className="rounded-lg shadow-xl"
      />
    </main>
  );
}
