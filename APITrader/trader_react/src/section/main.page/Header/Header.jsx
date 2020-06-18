import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, Tabs, Tab, Box} from '@material-ui/core';
import Logo from '../../../assets/Logo.png'

import Cotacao from '../Cotacao/Cotacao'
import Carteira from '../Carteira/Carteira'

const useStyles = makeStyles((theme) => ({  
    navebar:{
        background: 'white',
    },
    menu:{
        marginTop: '10px',
        marginBottom: '10px'       
    },
    background:{
        background:'#161D30',
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (  
        <>
            {/* Login e Codastro */}
            <Grid container spacing={1} direction='row' justify='center' alignItems='center'>
                <Grid item xs={4}>{/*Utilizado para alinhar os menus */}</Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" style={{background: '#87C701', marginBottom: '10px'}}>
                        Cadastro
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" color="primary" style={{background: '#87C701', marginBottom: '10px'}}>
                        Login
                    </Button>
                </Grid>
            </Grid>
            
            {/* NavBar*/}
            <Grid container spacing={3} direction='row' justify='center' alignItems='center' className={classes.navebar}>
                <Grid item xs={2} className={classes.menu}>
                    <img src={Logo} width='70%'/>
                </Grid>               
                <Grid>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Minha carteira" {...a11yProps(0)}/>
                        <Tab label="Cotação" {...a11yProps(1)}/>
                        <Tab label="Critérios" {...a11yProps(2)}/>
                        <Tab label="Ranking" {...a11yProps(3)}/>
                    </Tabs>                       
                </Grid>
            </Grid>

            {/*Componente*/}
            
                <TabPanel value={value} index={0}>
                    <Carteira/>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Cotacao/>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    
                </TabPanel>

                <TabPanel value={value} index={3}>
                    
                </TabPanel>            
        </>
    );
}

export default Header;