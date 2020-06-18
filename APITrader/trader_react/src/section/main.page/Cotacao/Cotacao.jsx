import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Button, Paper, Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({   
    root: {
        minWidth: 275,
        maxWidth: 275,
        textAlign: 'center',
        background: '#f1f3fa',
    },
    container: {        
        minWidth: 600, 
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        color: theme.palette.text.secondary, 
        margin: 10,       
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },     
}));

function ShowCard(props){
    const classes = useStyles();
    
    return(
        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary" >
                        {props.obj.name}
                    </Typography>
                    
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.obj.symbol}
                    </Typography>

                    <Typography variant="body2" component="p">
                        Valor: R$ {props.obj.price} <br/>
                        Atualização: {props.obj.updated_at}
                    </Typography>
                </CardContent>
                
            </Card>
        </Grid>
    );
}

function Cotacao() {
    const classes = useStyles();
    const [code, setCode] = useState(null);
    const [company, setCompany] = useState(null);
    const [price, setPrice] = useState(null); 
    const [show,setShow] = useState(false);  
 
    const fetchCompany = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.hgbrasil.com/finance/stock_price?key=90daf038&symbol="+code        

        fetch(proxyurl+url)
        .then(res => res.json())
        .then(json => {setPrice(json.results[code]); setShow(true)});       
        
    };

    const handleCode = event => {
       setCode(event.target.value.toUpperCase());
    };

    const handleCompany = event => {
        setCompany(event.target.value.toUpperCase());
     };

    return (      
        <div> 
            <Paper className={classes.paper}> 
                <Grid container spacing={3} className={classes.container} direction="column" justify="center" alignItems="center">                                        

                        <Grid item xs={12}>
                            <Typography component={'span'} variant={'body2'}>Digite o código ou nome da empresa</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="code" label="Código" variant="outlined" onChange={handleCode}/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="company" label="Empresa" variant="outlined" onChange={handleCompany}/>
                        </Grid>
                        
                        {show &&  <ShowCard obj={price}/> }                         
                        
                        <Grid item xs={12}>                        
                            <Button variant="contained"
                                    color="primary"
                                    style={{background: '#87C701', marginBottom: '10px'}}
                                    onClick={fetchCompany}                                  
                                    >
                                IR
                            </Button>                            
                        </Grid>   
                </Grid>   
            </Paper>                    
            
                      
        </div>
    );
}

export default Cotacao;