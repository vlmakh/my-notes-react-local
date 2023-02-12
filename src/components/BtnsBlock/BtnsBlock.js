import { Box } from 'components/Box/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { Button, Label, CheckMove } from './BtnsBlock.styled';
import { useContext } from 'react';
import { MyContext } from 'utils/context';

export function BtnsBlock({ dragNotes, toggleDragNotes }) {
  const { dispatch } = useContext(MyContext);

  return (
    <Box display="flex">
      <Button
        type="button"
        onClick={() => {
          dispatch({ type: 'addNote' });
        }}
      >
        Add Note <MdAddCircleOutline size="24" />
      </Button>

      <Label
        onClick={toggleDragNotes}
        htmlFor="drag"
        checked={dragNotes ? true : false}
      >
        Drag Notes
        <CheckMove
          name="drag"
          type="checkbox"
          checked={dragNotes ? true : false}
          readOnly
        />
      </Label>
    </Box>
  );
}
