import React, {Component} from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  HelpBlock,
  FormGroup,
  FormControl,
  Row
} from 'react-bootstrap'

class NewApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        street: '',
        street2  : '',
        city: '',
        zip: '',
        state: '',
        country: '',
        manager: '',
        phone: '',
        hours: '',
        avatar_base: null
      }
    }
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  // ** This is a new function to base64 encode the file
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // ** A custom handler for file uploads
  fileChangeHandler(event){
    const file = event.target.files[0]
    this.getBase64(file).then( (fileString) => {
      const formState = Object.assign({}, this.state.form)
      formState.avatar_base = fileString
      this.setState({form: formState})
    })
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors && this.props.errors[attribute]){
      const errors = this.props.errors[attribute]
      if(errors){
        errorString = errors.join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
     return (
       <form>
         <Row>
           <Col xs={6}>
             {this.props.errors &&
               <Alert bsStyle="danger">
                 Please check the form and try again.
               </Alert>
             }
           </Col>
         </Row>
         <Row>
           <Col xs={6}>
             <FormGroup
               id="street-form-group"
               validationState={this.errorsFor('street') && 'error'}>
               <ControlLabel id="street">Street</ControlLabel>
               <FormControl
                 type="plaintext"
                 name="street"
                 value={this.state.form.street}
                 onChange={this.handleChange.bind(this)}
               />
               {this.errorsFor('street') &&
                 <HelpBlock id="street-help-block">{this.errorsFor('street')}</HelpBlock>
               }
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="street2">Street2</ControlLabel>
               <FormControl
                 type="text"
                 name="street2"
                 onChange={this.handleChange.bind(this)}
                 value={this.state.form.street2}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="city">City</ControlLabel>
               <FormControl
                 type="text"
                 componentClass='textarea'
                 name="city"
                 onChange={this.handleChange.bind(this)}
                 value={this.state.form.city}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="zip">Zip</ControlLabel>
               <FormControl
                 type="text"
                 componentClass='textarea'
                 name="zip"
                 onChange={this.handleChange.bind(this)}
                 value={this.state.form.zip}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="state">State</ControlLabel>
               <FormControl
                 type="text"
                 componentClass='textarea'
                 name="state"
                 onChange={this.handleChange.bind(this)}
                 value={this.state.form.state}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="country">Country</ControlLabel>
               <FormControl
                 type="text"
                 componentClass='textarea'
                 name="country"
                 onChange={this.handleChange.bind(this)}
                 value={this.state.form.country}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <FormGroup>
               <ControlLabel id="avatar">Image</ControlLabel>
               <input
                 type="file"
                 onChange={this.fileChangeHandler.bind(this)}
               />
             </FormGroup>
           </Col>
         </Row>

         <Row>
           <Col xs={6}>
             <Button
               id="submit"
               onClick={this.handleSubmit.bind(this)}
             >Create Cat Profile</Button>
           </Col>
         </Row>

       </form>
     )
   }
 }

export default NewApartment
