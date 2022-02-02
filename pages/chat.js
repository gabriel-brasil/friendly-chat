import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function PaginaChat() {
  const [mensagem, setMensagem] = React.useState('');
  const [listaMensagens, setListaMensagens] = React.useState([]);

  function handleNovaMensagem(novaMensagem) {
    const mensagemObj = {
      id: listaMensagens.length + 1,
      de: 'gabriel-brasil',
      texto: novaMensagem,
    };
    if (novaMensagem != '') {
      setListaMensagens([mensagemObj, ...listaMensagens]);
      setMensagem('');
    }
  }

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(/images/background.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: `${appConfig.theme.colors.neutrals[700]}59`,
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />

        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: `${appConfig.theme.colors.neutrals[600]}a9`,
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList mensagens={listaMensagens} />

          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valueInputMensage = event.target.value;
                setMensagem(valueInputMensage);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: `${appConfig.theme.colors.neutrals[800]}a9`,
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              variant="tertiary"
              colorVariant="positive"
              label="Enviar"
              onClick={() => {
                handleNovaMensagem(mensagem);
              }}
              styleSheet={{
                marginBottom: '8px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading5">FriendlyChat 👽</Text>
        <Button variant="tertiary" colorVariant="neutral" label="Logout" href="/" />
      </Box>
    </>
  );
}

function MessageList(props) {
  return (
    <Box
      as="ul"
      styleSheet={{
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {props.mensagens.map((item) => {
        return (
          <Text
            key={item.id}
            as="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                styleSheet={{
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  styleSheet={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                  }}
                  src={`https://github.com/gabriel-brasil.png`}
                />
                <Text as="strong">{item.de}</Text>
                <Text
                  styleSheet={{
                    fontSize: '10px',
                    marginLeft: '8px',
                    color: appConfig.theme.colors.neutrals[300],
                  }}
                  as="span"
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </Box>
            </Box>
            {item.texto}
          </Text>
        );
      })}
    </Box>
  );
}
