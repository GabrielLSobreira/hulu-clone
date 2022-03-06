import FlipMove from 'react-flip-move';
import { Movie } from '../../types/Movie';
import Thumbnail from '../Thumbnail';

interface ResultsProps {
  results: Movie[];
}

function Results({ results }: ResultsProps) {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
