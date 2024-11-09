import { Game } from "@/hooks/useGames"

const filteredGamesByGenre = (games: Game[], selectedGenreId: number) => {
    console.log(selectedGenreId );
    
    return selectedGenreId
    ? games.filter((game) => game.id === selectedGenreId) : games
}

export default filteredGamesByGenre