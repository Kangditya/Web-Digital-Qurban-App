import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

//form chechout untuk mengisi konfirmasi pembayaran hewan qurban
function PaymentForm({ values, onChange, errors }) {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Konfirmasi Pembayaran
      </Typography>
      <Box fontSize="fontSize">Setelah melakukan order, lakukan pembayaran dengan transfer ke rekening BANK MANDIRI kami di <b>1260007683310</b> a/n ADITYA NUR AHYA. Mohon transfer dengan jumlah yang sesuai tertera dikeranjang. Setelah itu konfirmasi ke nomor 081584802994</Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="bank" 
            name="bank"
            label="Nama Bank"
            helperText={errors.bank}
            error={errors.bank ? true : false}
            fullWidth 
            value={values.bank || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="norek" 
            name="norek"
            label="Nomor Rekening"
            helperText={errors.norek}
            error={errors.norek ? true : false} 
            fullWidth
            value={values.norek || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="account" 
            name="account"
            label="Nama Pemilik Rekening"
            helperText={errors.account}
            error={errors.account ? true : false}
            fullWidth
            value={values.account || ''}
            onChange={onChange}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="transfer"
            name="transfer"
            label="Jumlah Transfer"
            helperText={errors.transfer}
            error={errors.transfer ? true : false}
            fullWidth
            value={values.transfer || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default PaymentForm