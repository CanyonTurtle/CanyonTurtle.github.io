import { GamesList } from 'app/components/games';

export const metadata = {
  title: 'Games',
  description: 'Read my game reviews and thoughts.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My games</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Games I've made. You'll see I have a bit of a love for wasm4.org games :D
      </p>
      <GamesList />
    </section>
  );
}
