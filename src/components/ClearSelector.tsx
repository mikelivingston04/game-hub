import { Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { GameQuery } from '../App';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/useGames';

interface Props {
    onSelectReset: (game: GameQuery) => void;
    selectedGameQuery: GameQuery;
    onSearch: (searchText: string) => void;
}

const ClearSelector = ({onSelectReset, selectedGameQuery, onSearch}: Props) => {

  return (
    <Button 
        onClick={() => {
            onSelectReset(selectedGameQuery);
            onSearch('');
        }}
        colorScheme='gray' 
        margin={'auto 0 auto 10px'} 
        size='xs'>
        <RepeatIcon marginRight='2px'/>Reset
    </Button>
  )
}

export default ClearSelector