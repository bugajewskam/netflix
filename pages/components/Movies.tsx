import Image from "next/image";
import { Item } from "../../interface";

export interface ContentProps {
    moviesOrSeries: Item[];
}
export const Movies = ({moviesOrSeries}: ContentProps) => {
  return (
    <div className="container">
      {moviesOrSeries?.map((move: Item) => (
        <div className="move" key={move.title}>
          {move.title}
          <Image
            src={`/${move.thumbnail.regular.large}`}
            alt={move.title}
            width="200px"
            height="200px"
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
