import Swal from 'sweetalert2'

export default {
  throwValidationErrors: (errors: Record<string, any>) => {
    console.log(errors)
    let data = ''
    const errorsArray = errors.errors
    errorsArray.forEach((error: Record<string, unknown>) => {
      data = data + '<br> - ' + error.field + ': ' + error.message
    })
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: data,
      heightAuto: false
    })
  },

  throwValidationError: (error: string) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
      heightAuto: false
    })
  },

  success: (message: string) => {
    Swal.fire(
      'Sucesso!',
      message,
      'success'
    )
  },

  danger: (message: string) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }

}
