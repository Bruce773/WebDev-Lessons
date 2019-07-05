import * as React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

export const StyledIframe = ({
  src,
  paddingTop = '25px',
}: {
  src: string;
  paddingTop?: string;
}) => (
  <Box style={{ padding: '25px 0 20px', paddingTop: paddingTop }}>
    <Box
      style={{
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '56.26%',
      }}
    >
      <CardMedia
        src={src}
        style={{
          borderWidth: 0,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        frameBorder={0}
        component="iframe"
      />
    </Box>
  </Box>
);
