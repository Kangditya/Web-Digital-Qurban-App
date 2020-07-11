import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import { useSelector } from "react-redux";
import { getCartState, getCartTotal } from './../../selectors/livestocks';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

//menampilkan review singkat pembelian hewan qurban sebelum deal membeli
function Review({ values }) {
  const classes = useStyles();
  const products = useSelector(getCartState);
  const total = useSelector(getCartTotal);

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Detail Pesanan
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={`${product.category} ${product.name}`} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">
              <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/>
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column"  xs={12} sm={6}>
          <Typography gutterBottom variant="h6" className={classes.title} >Detail Pengiriman</Typography>
          <Grid container>
            <Grid item xs={12}>
              <Typography gutterBottom>Sohibul Qurban: {values.sohibulQurban}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>Penerima Qurban: {values.penerimaQurban}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>{values.alamat}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>{values.kabKota}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>{values.prov}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>{values.pos}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detail Pembayaran
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Nama Bank</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.bank}</Typography>
            </Grid> 
            <Grid item xs={6}>
              <Typography gutterBottom>No. Rekening</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.norek}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Nama Pemilik Rekening</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{values.account}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Jumlah Transfer</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom><NumberFormat value={values.transfer} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} suffix={',-'}/></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
          <Typography gutterBottom fontSize="fontSize">*Harga sudah termasuk biaya pengiriman dan perawatan hewan sebelum dikirim</Typography>
      </Grid>
    </Fragment>
  )
}

export default Review
