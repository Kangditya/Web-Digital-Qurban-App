import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

//form chechout untuk mengisi alamat pengiriman hewan qurban
function AddressForm({ values, onChange, errors }) {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Alamat Pengiriman
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sohibulQurban"
            name="sohibulQurban"
            label="Nama Sohibul Qurban"
            helperText={errors.sohibulQurban}
            error={errors.sohibulQurban ? true : false}
            fullWidth
            value={values.sohibulQurban || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="noTelp"
            name="noTelp"
            label="No. Telp"
            fullWidth
            helperText={errors.noTelp}
            error={errors.noTelp ? true : false}
            value={values.noTelp || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="penerimaQurban"
            name="penerimaQurban"
            label="Nama Penerima Qurban"
            helperText={errors.penerimaQurban}
            error={errors.penerimaQurban ? true : false}
            fullWidth
            value={values.penerimaQurban || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="noTelpPenerima"
            name="noTelpPenerima"
            label="No. Telp Penerima"
            fullWidth
            helperText={errors.noTelpPenerima}
            error={errors.noTelpPenerima ? true : false}
            value={values.noTelpPenerima || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="alamat"
            name="alamat"
            label="Alamat Kirim"
            helperText={errors.alamat}
            error={errors.alamat ? true : false}
            fullWidth
            value={values.alamat || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="kabKota"
            name="kabKota"
            label="Kabupaten/Kota"
            helperText={errors.kabKota}
            error={errors.kabKota ? true : false}
            fullWidth
            value={values.kabKota || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="prov" 
            name="prov" 
            label="Provinci" 
            helperText={errors.prov}
            error={errors.prov ? true : false}
            fullWidth
            value={values.prov || ''}
            onChange={onChange} 
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pos"
            name="pos"
            label="Kode Pos"
            helperText={errors.pos}
            error={errors.pos ? true : false}
            fullWidth
            value={values.pos || ''}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="notes"
            name="notes"
            label="Catatan Pengiriman"
            helperText={errors.notes}
            error={errors.notes ? true : false}
            fullWidth
            value={values.notes || ''}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AddressForm
