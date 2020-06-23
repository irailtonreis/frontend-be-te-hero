import React  from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage, } from 'formik';

import '../../pages/Register/styles.css';


const validationSchema = Yup.object({
  name: Yup.string().required("O Campo nome é requerido"),
  email: Yup.string().email("Deve ser formato de e-mail").required("O Campo email é requerido"),
  password: Yup.string().min(6, "minímo 6 caracteres").required("O Campo senha é requerido"),
  whatsapp: Yup.string().min(9, "mínimo 9 caracteres").max(11, 'máximo 11 caracteres').required("O Campo whatsapp é requerido"),
});



const SignUp = ({handleSubmit, initialValues }) => (

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form>
          <div className="field-input">
          <Field placeholder="Nome da ONG" name="name" />
          <ErrorMessage component="span" name="name"/>
          </div>
          <div className="field-input">
          <Field type="email" placeholder="E-mail" name="email" />
          <ErrorMessage component="span" name="email"/>
          </div>
          <div className="field-input">
          <Field type="password" placeholder="senha" name="password"/>
          <ErrorMessage component="span" name="password"/>
          </div>
          <div className="field-input">
          <Field placeholder="whatsapp" name="whatsapp"/>
          <ErrorMessage component="span" name="whatsapp"/>
          </div>
          <div className="div input-group"> 
          <Field placeholder="Cidade" name="city"/>
          <Field placeholder="UF" name="uf" style={{width: 80}}/> 
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Formik>

)

SignUp.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
}

export default SignUp;

