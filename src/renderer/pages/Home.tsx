import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

declare global {
  interface Window {
    electron?: any;
  }
}

export default function Home() {
  // @ts-ignore
  const [text, setText] = useState('');
  const [answ, setAnsw] = useState('');

  //const apollo_port = 7000;

  async function talk(msg: string) {
    const retorno = await window.electron.ipcRenderer.talk(msg);
    console.log('AOOO TALK');
    console.log(retorno);
    return retorno;
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextField
          onChange={(e) => setText(e.target.value)}
          id="filled-basic"
          label="Message"
          variant="filled"
        />
        <Button
          variant="contained"
          sx={{ height: 35, alignSelf: 'center', marginLeft: 3 }}
          onClick={async () => setAnsw(await talk(text))}
        >
          Send
        </Button>
      </div>
      <p>Response:{answ}</p>
      {/* <Button variant="contained">Start Server</Button> */}
    </>
  );
}
