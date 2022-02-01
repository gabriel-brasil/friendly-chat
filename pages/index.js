import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';

function Title(props) {
  const Tag = props.tag || 'h1';

  return (
    <>
      <Tag>{props.children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [username, setUsername] = React.useState('gabriel-brasil');
  const roteamento = useRouter();

  return (
    <>
      {/* wrapper */}
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(/images/background.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        {/* container */}
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'column',
            },
            // width: '100%',
            // maxWidth: '700px',
            borderRadius: '5px',
            padding: {
              xs: '16px',
              sm: '32px',
            },
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: `${appConfig.theme.colors.neutrals[700]}59`,
          }}
        >
          {/* user */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: `${appConfig.theme.colors.neutrals[800]}a9`,
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '10px',
                marginBottom: '16px',
                border: `1px solid ${appConfig.theme.colors.primary[500]}`,
              }}
              src={`https://github.com/${username}.png`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = `/images/avatar.png`;
              }}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px',
              }}
            >
              {username}
            </Text>
          </Box>

          {/* form */}
          <Box
            as="form"
            onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '100%' },
              textAlign: 'center',
              marginBottom: '32px',
              marginTop: '32px',
            }}
          >
            <Title tag="h2">Boas vindas de volta! 🖖🏼</Title>
            <Text
              variant="body3"
              styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}
            >
              {appConfig.name}
            </Text>
            <TextField
              fullWidth
              styleSheet={{
                textAlign: 'center',
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: `${appConfig.theme.colors.neutrals[800]}a9`,
                },
              }}
              value={username}
              onChange={(event) => {
                const valueInputUsername = event.target.value;
                setUsername(valueInputUsername);
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

// function HomePage() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Title tag="h2p">Testess</Title>
//     </div>
//   );
// }

// export default HomePage;
