import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstNameBlur: false,
    lastNameBlur: false,
    isSubmited: false,
  }

  changeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  changeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  blurFirstName = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({firstNameBlur: true})
    } else {
      this.setState({firstNameBlur: false})
    }
  }

  blurLastName = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({lastNameBlur: true})
    } else {
      this.setState({lastNameBlur: false})
    }
  }

  submitedSucess = () => {
    this.setState({isSubmited: true, firstname: '', lastname: ''})
  }

  onSubmited = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.submitedSucess()
    } else {
      this.blurFirstName()
      this.blurLastName()
    }
  }

  onStatusChange = () => {
    this.setState({isSubmited: false})
  }

  renderSuccessCard = () => (
    <div className="form-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button className="button" type="button" onClick={this.onStatusChange}>
        Submit Another Response
      </button>
    </div>
  )

  renderForm = () => {
    const {firstname, lastname, firstNameBlur, lastNameBlur} = this.state

    const firstNameInputStyle = firstNameBlur ? 'blured-filed' : 'input-filed'

    const lastNameInputStyle = lastNameBlur ? 'blured-filed' : 'input-filed'

    const requiredFirstname = firstNameBlur && (
      <p className="error">Required*</p>
    )

    const requiredLastname = lastNameBlur && <p className="error">Required*</p>
    return (
      <form onSubmit={this.onSubmited} className="form-con">
        <div className="input-con">
          <label className="label-el" htmlFor="firstname">
            FIRST NAME
          </label>
          <input
            value={firstname}
            onBlur={this.blurFirstName}
            onChange={this.changeFirstName}
            type="text"
            id="firstname"
            className={firstNameInputStyle}
            placeholder="First Name"
          />
          {requiredFirstname}
        </div>
        <div className="input-con">
          <label className="label-el" htmlFor="lastname">
            LAST NAME
          </label>
          <input
            value={lastname}
            onBlur={this.blurLastName}
            onChange={this.changeLastName}
            type="text"
            id="lastname"
            className={lastNameInputStyle}
            placeholder="Last Name"
          />
          {requiredLastname}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmited} = this.state
    return (
      <div className="registration-form-con">
        <h1 className="heading">Registration</h1>
        {isSubmited ? this.renderSuccessCard() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
