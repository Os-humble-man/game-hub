import useGenres from "@/hooks/useGenres";
import React from "react";

export default function GenreList() {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
