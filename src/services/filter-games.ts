import { Game } from "@/hooks/useGames"

const filteredGamesByGenre = (games: Game[], selectedGenreId: number) => {
    return selectedGenreId
    ? games.filter((game) =>
        game.genres.some((genre) => genre.id === selectedGenreId)
      )
    : games;
}

export default filteredGamesByGenre