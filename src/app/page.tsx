import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Arcziego w Internecie dziura. Dzień dobry.",
    absolute: "Arcziego w Internecie dziura. Dzień dobry.",
    template: "%s | Arcziego w Internecie dziura | Dzień dobry.",
  },
  description:
    "Zasadniczo, dziennik i nie; zeszyt i nie; popis, ale też nie, bo się źle kojarzy.",
};

export default function Home() {
  return (
    <main className="flex h-full flex-1 gap-1 flex-col justify-center  max-w-2xl mx-auto">
      <header className="flex flex-col gap-1 ">
        <h1 className="text-4xl">Witam.</h1>
        <p className="text-muted-foreground text-sm">
          Ciężko jest powiedzieć coś mądrego, zaniecham więc batalii.
        </p>
      </header>
      <hr />
      <p className="italic my-2 text-xs text-violet-400">
        Na tej stronie są tzw. odnośniki do stron gdzie jest więcej średniej
        jakości słownych ulepów.
      </p>
      <main className="leading-relaxed my-2">
        <p>
          Nie pisało się tego szczególnie miło, więc nie życzę miłej lektury.
          Sądzę jednak, że każdy do interpretacji ma niezbywalne prawo i podróż
          przez subtelnie przestrzelony umysł, a przynajmniej jego kupy,
          dostarczy różnych emocji zależnie od tego każdegosia podejmującego
          się.
        </p>
      </main>
      <footer className="mt-4 text-muted-foreground text-sm">
        <p>
          Gratuluję i dziękuję. Cenię i jestem pod wrażeniem przebrnięcia przez
          pierwsze zdania.
        </p>
      </footer>
    </main>
  );
}
