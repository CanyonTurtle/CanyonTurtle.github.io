import { GameCard } from 'app/components/cards';
import { getGames } from 'app/games/utils';

export function GamesList() {
  let allGames = getGames();

  return (
    <div className="space-y-4">
      {allGames
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((game) => (
          <GameCard key={game.slug} game={game} href={`/games/${game.slug}`} />
        ))}
    </div>
  );
}
