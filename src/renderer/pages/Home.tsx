import { TextField, Button } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextField id="filled-basic" label="Message" variant="filled" />
        <Button
          variant="contained"
          sx={{ height: 35, alignSelf: 'center', marginLeft: 3 }}
        >
          Send
        </Button>
      </div>
      <p>Response:</p>
    </>
  );
}
