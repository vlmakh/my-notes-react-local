import { Box } from 'components/Box/Box';
import { Form, Text } from './Confirm.styled';
import { Button } from 'components/BtnsBlock/BtnsBlock.styled';

export function Confirm({ onFormSubmit, toggleConfirm, name }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <Text>
        Delete note <b>{name}</b>?
      </Text>
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button type="button" aria-label="Cancel" onClick={toggleConfirm}>
          Cancel
        </Button>

        <Button type="submit" aria-label="Delete note">
          DELETE
        </Button>
      </Box>
    </Form>
  );
}
