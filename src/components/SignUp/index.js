import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './styles.css';


const validationSchema = Yup.object({
  name: Yup.string().required("O campo nome é requerido"),
  email: Yup.string().email("Deve ser formato de e-mail").required("O campo email é requerido"),
  password: Yup.string().min(6, "minímo 6 caracteres").required("O campo senha é requerido"),
  whatsapp: Yup.string().min(9, "mínimo 9 caracteres").max(11, 'máximo 11 caracteres').required("O campo whatsapp é requerido"),
  city: Yup.string().required("A cidade é requerida"),
  uf: Yup.string().required("A uf é requerida"),
});


const SignUp = ({handleSubmit, initialValues }) => {
  // const [ufs, setUfs ] = useState([]);
  // const [cities, setCities ] = useState([]);

  // const [selectedUf, setSelectedUf] = useState("0");
  // const [selectedCity, setSelectedCity] = useState("0");


  // useEffect(() => {
  //   axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
  //     const ufInitials = response.data.map(uf => uf.sigla);
  //     setUfs(ufInitials);
  //   })
  // }, []);


  // useEffect(() => {
  //   if(selectedUf === '0'){
  //     return;
  //   }

  //   axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
  //     const cityInitials = response.data.map(city => city.nome);
  //     setCities(cityInitials);
  //   })
  // }, [selectedUf]);
 
  // function handleSelectedUf(event){
  //   const uf = event.target.value;
  //   console.log(event.target.value);
  //   setSelectedUf(uf);
  // }
  
  // function handleSelectedCity(event){
  //   const city = event.target.value;
  //   console.log(event.target.value);
  //   setSelectedCity(city);
  // }
  
  return(
    <Formik initialValues={initialValues}  onSubmit={handleSubmit} validationSchema={validationSchema}>
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
          <Field type="password" placeholder="Senha" name="password"/>
          <ErrorMessage component="span" name="password"/>
          </div>
          <div className="field-input">
          <Field placeholder="Whatsapp" name="whatsapp"/>
          <ErrorMessage component="span" name="whatsapp"/>
          </div>
          <div className="field-input"> 
          <Field name="uf" placeholder="uf" />
          <ErrorMessage component="span" name="uf"/>
          </div>
          <div className="field-input">
          <Field name="city" placeholder="city"/>
          <ErrorMessage component="span" name="city"/>
          </div> 
          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Formik>
      
)
}

export default SignUp;