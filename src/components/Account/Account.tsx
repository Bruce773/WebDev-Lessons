import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { SmSpacer, XsSpacer } from '../GlobalComponents';
import { PropTypes } from '../NavBar';
import { SimplePaywall } from '../SimplePaywall';

export const Account: React.SFC<PropTypes> = ({ currentUser }) => (
  <>
    <SmSpacer />
    {currentUser ? (
      <>
        <Box width={{ md: '70%' }} textAlign="center" margin="auto">
          <Grid container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box style={{ fontWeight: 'bold' }}>Full Name:</Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {currentUser && currentUser.user_metadata.full_name}
              </Grid>
            </Grid>
            <XsSpacer spacing="40px" />
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box style={{ fontWeight: 'bold' }}>Email: </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {currentUser && currentUser.email}
              </Grid>
            </Grid>
            <XsSpacer spacing="40px" />
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box style={{ fontWeight: 'bold' }}>Created At: </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {currentUser && `${new Date(currentUser.created_at)}`}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    ) : (
      <SimplePaywall />
    )}
  </>
);
