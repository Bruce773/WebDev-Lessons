import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import * as React from 'react';
import styled from 'styled-components';

const IframeStyles = styled.div`
  iframe {
    border-width: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const StyledIframe = ({
  src,
  paddingTop = '25px',
  video,
}: {
  src?: string;
  paddingTop?: string;
  // tslint:disable-next-line: no-any
  video?: any;
}) => (
  <Box style={{ padding: '25px 0 20px', paddingTop }}>
    {src ? (
      <Box
        style={{
          overflow: 'hidden',
          paddingTop: '56.26%',
          position: 'relative',
        }}
      >
        <CardMedia
          src={src}
          style={{
            borderWidth: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
          frameBorder={0}
          component="iframe"
        />
      </Box>
    ) : (
      // tslint:disable-next-line: no-unsafe-any
      <Box
        style={{
          overflow: 'hidden',
          paddingTop: '56.26%',
          position: 'relative',
        }}
      >
        <IframeStyles>
          <div dangerouslySetInnerHTML={{ __html: `${video}` }} />
        </IframeStyles>
      </Box>
    )}
  </Box>
);
