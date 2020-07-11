//function validasi pengisian form checkout
const validateForm = (step) => (values) => {
    let errors = {};
  
      if (step === 0) {
        if (!values.sohibulQurban) {
          errors.sohibulQurban = 'Masukkan Nama Sohibul Qurban'
        } else if (!values.sohibulQurban.trim().match(/^[a-zA-Z ]*$/)) {
          errors.sohibulQurban = 'Minimal 4 Huruf'
        }

        if (!values.noTelp) {
          errors.noTelp = 'Masukkan Nomor Telepon'
        } else if (!values.noTelp.trim().match(/^[0-9]{2,}$/)) {
          errors.noTelp = 'Masukkan Nomor Telepon yang Dapat dihubungi'
        }
  
        if (!values.penerimaQurban) {
          errors.penerimaQurban = 'Masukkan Nama Penerima Qurban'
        } else if (!values.penerimaQurban.trim().match(/^[a-zA-Z ]*$/)) {
          errors.penerimaQurban = 'Minimal 4 Huruf'
        }

        if (!values.noTelpPenerima) {
          errors.noTelpPenerima = 'Masukkan Nomor Telepon'
        } else if (!values.noTelpPenerima.trim().match(/^[0-9]{2,}$/)) {
          errors.noTelpPenerima = 'Masukkan Nomor Telepon yang Dapat dihubungi'
        }
  
        if (!values.alamat) {
          errors.alamat = 'Masukkan Alamat Pengiriman'
        } else if (!values.alamat.trim().match(/^[a-zA-Z0-9/ ]{2,}$/)) {
          errors.alamat = 'Masukkan Alamat Pengiriman Dengan Benar'
        }
  
        if (!values.kabKota) {
          errors.kabKota = 'Masukkan Kabupaten/Kota'
        } else if (!values.kabKota.trim().match(/^[a-zA-Z ]{2,}$/)) {
          errors.kabKota = 'Masukkan Kabupaten/Kota Dengan Benar'
        }
  
        if (!values.prov) {
          errors.prov = 'Masukkan Provinsi'
        } else if (!values.prov.trim().match(/^[a-zA-Z ]{2,}$/)) {
          errors.prov = 'Masukkan Provinsi Dengan Benar'
        }
  
        if (!values.pos) {
          errors.pos = 'Masukkan Kode POS'
        } else if (!values.pos.trim().match(/^[0-9]{2,}$/)) {
          errors.pos = 'Masukkan Kode POS Dengan Benar'
        }
      } else if (step === 1) {
        if (!values.bank) {
          errors.bank = 'Masukkan Nama Bank'
        } else if (!values.bank.trim().match(/^[a-zA-Z ]{2,}$/)) {
          errors.bank = 'Masukkan Nama Bank Dengan Benar'
        }
  
        if (!values.norek) {
          errors.norek = 'Masukkan Nomor Rekening'
        } else if (!values.norek.trim().match(/^[0-9]{2,}$/)) {
          errors.norek = 'Masukkan Nomor Rekening Dengan Benar'
        }

        if (!values.account) {
          errors.account = 'Masukkan Nama Pemilik Rekening'
        } else if (!values.account.trim().match(/^[a-zA-Z ]{2,}$/)) {
          errors.account = 'Masukkan Nama Pemilik Rekening Dengan Benar'
        }
  
        if (!values.transfer) {
          errors.transfer = 'Masukkan Nominal Transfer'
        } else if (!values.transfer.trim().match(/^[0-9]{2,}$/)) {
          errors.transfer = 'Masukkan Nominal Transfer Dengan Benar(tanpa huruf dan tanda.(titik))'
        }
      }
    return errors;
  }
  
  export default validateForm;