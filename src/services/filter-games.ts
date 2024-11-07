import { Game } from "@/hooks/useGames"

const filteredGamesByGenre = (games: Game[], genre: number) => {
    return games.filter((game) => game.genres.some((g) => g.id === genre));
}


export default filteredGamesByGenre