import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import OutlinedCard from '../home-card/home-card.component';

const arrTitle = ['Bills Table', 'Categories', 'launch']
const arrbuttonName = ['See Bills', 'See Category', 'See Launch']
const arrRedirect = ['bills', 'categories', 'launch']

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 9 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(arrTitle.length)).map((title, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
                <OutlinedCard title={arrTitle[index]} button={arrbuttonName[index]} redirect={arrRedirect[index]} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}