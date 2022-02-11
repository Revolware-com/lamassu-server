import * as Yup from 'yup'

import SecretInputFormik from 'src/components/inputs/formik/SecretInput'
import TextInputFormik from 'src/components/inputs/formik/TextInput'

import secretTest from './helper'

export default {
  code: 'bitstamp',
  name: 'Bitstamp',
  title: 'Bitstamp (Exchange)',
  elements: [
    {
      code: 'clientId',
      display: 'Client ID',
      component: TextInputFormik,
      face: true,
      long: true
    },
    {
      code: 'key',
      display: 'API Key',
      component: TextInputFormik,
      face: true,
      long: true
    },
    {
      code: 'secret',
      display: 'API Secret',
      component: SecretInputFormik
    }
  ],
  getValidationSchema: account => {
    return Yup.object().shape({
      clientId: Yup.string('The client ID must be a string')
        .max(100, 'The client ID is too long')
        .required('The client ID is required'),
      key: Yup.string('The key must be a string')
        .max(100, 'The key is too long')
        .required('The key is required'),
      secret: Yup.string('The secret must be a string')
        .max(100, 'The secret is too long')
        .test(secretTest(account?.secret))
    })
  }
}
