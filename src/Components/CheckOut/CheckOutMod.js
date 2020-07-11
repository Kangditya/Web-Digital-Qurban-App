import React, { Fragment, useState } from 'react'
import Modal from 'react-modal';
import './CheckOutMod.scss';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { uuid } from 'uuidv4';
import { clearCart } from '../../Action/livestocks';
import { useDispatch, useSelector } from 'react-redux';
import { addShippingInfo, addConfirmTransfer } from '../../Action/payment';
import { useForm } from '../../hooks/useForm';
import validateForm from './CheckOutFormVal';
import { getCartState } from '../../selectors/livestocks';
import { makeOrder } from '../../Action/orders';

//menampilkan tampilan form dengan beberapa steps yang harus dilalui untuk memesan hewan
const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(2, 0, 2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  marginTopSmall: {
    marginTop: theme.spacing(1.5)
  },
  marginTopBig: {
    marginTop: theme.spacing(3)
  }
}));

const CheckoutMod = ({ modal, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let [ activeStep, setActiveStep ] = useState(0);
  const steps = ['Alamat Pengiriman', 'Detail Pembayaran', 'Review Pesanan'];
  const cartState = useSelector(getCartState);

  const cartItems = cartState.map((items) => items);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitFormCallback = () => {
    if (activeStep === 2) {
      // add shipping info
      dispatch(addShippingInfo({
        sohibulQurban,
        noTelp,
        penerimaQurban,
        noTelpPenerima,
        alamat,
        kabKota,
        prov,
        pos,
        notes
      }))

      // add the transfer confirm
      dispatch(addConfirmTransfer({
        bank,
        norek,
        account,
        transfer
      }))

      // combine the shipping info, card info and cart into 1 reducer to create the order
      dispatch(makeOrder({
        shippingInfo: {
            sohibulQurban,
            noTelp,
            penerimaQurban,
            noTelpPenerima,
            alamat,
            kabKota,
            prov,
            pos,
            notes
        },
        confirmTransfer: {
            bank,
            norek,
            account,
            transfer
        },
        items: [ ...cartItems ]
      }))
      handleNext();
    } else {
      handleNext();
    }
  }

  const { values, errors, onChange, onSubmit } = useForm(submitFormCallback, validateForm(activeStep));

  const { sohibulQurban, noTelp, penerimaQurban, noTelpPenerima, alamat, kabKota, prov, pos, notes, bank, norek, account, transfer } = values;

  const resetSteps = () => {
    if (activeStep === steps.length) {
      setActiveStep(activeStep = 0);
      closeModal();
      dispatch(clearCart());
    } else {
      closeModal();
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm values={values} onChange={onChange} errors={errors} />;
      case 1:
        return <PaymentForm values={values} onChange={onChange} errors={errors} />;
      case 2:
        return <Review values={values} />;
      default:
        throw new Error('Unknown step');
    }
  }


  //menampilkan pesan bahwa pesanan telah tercatat oleh sistem dan akan diproses sesuai pesanan
  return (
    <Modal
      isOpen={modal}
      onRequestClose={resetSteps}
      contentLabel='CheckoutModal'
      ariaHideApp={false}
      className='Modal'
      overlayClassName='Overlay'
    >
      <CssBaseline />
      <main >
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Terima Kasih atas pesananmu.
              </Typography>
              <Typography variant="subtitle1">
                  Nomor pesananmu <b>#{uuid().substring(0, 6)}</b> Kami akan menghubungi melalui nomor Sohibul Qurban atau Penerima Qurban untuk mengupdate perkembangan hewan di pertenakan dan pada saat pengiriman.
              </Typography>
              <div className={classes.buttons + ' ' + classes.marginTopBig}>
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={resetSteps}
                >
                Tutup
                </Button>
              </div>
            </Fragment>
          ) : (
              <form onSubmit={onSubmit} noValidate autoComplete='off'>
                {
                  getStepContent(activeStep)
                }
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Kembali
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    type='submit'
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Order Hewan Qurban' : 'Selanjutnya'}
                  </Button>
                </div>
              </form>
            )
          }
        </Fragment>
      </main>
    </Modal>
  )
}

export default CheckoutMod
