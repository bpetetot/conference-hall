import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'

import {
  input, address, markdownInput, SubmitButton,
} from 'components/form'
import Avatar from 'components/avatar'

import './profile.css'

const Profile = ({
  displayName,
  photoURL,
  email,
  onSubmit,
  initialValues,
}) => (
  <div className="profile">
    <div className="profile-header card">
      <Avatar name={displayName} src={photoURL} className="profile-avatar" square />
      <div>
        <h1>{displayName}</h1>
        <small>{email}</small>
      </div>
    </div>

    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, pristine, invalid }) => (
        <form className="profile-form card">
          <Field name="company" label="Company" type="text" component={input} />
          <Field name="phone" label="Phone" type="text" component={input} />
          <Field name="language" label="Favorite language" type="text" component={input} />
          <Field name="twitter" label="Twitter" type="text" component={input} placeholder="@username" />
          <Field name="github" label="Github" type="text" component={input} placeholder="username" />
          <Field name="city" label="City" type="text" component={address} />
          <Field name="bio" label="Biography" component={markdownInput} />

          <SubmitButton handleSubmit={handleSubmit} pristine={pristine} invalid={invalid}>
            Save profile
          </SubmitButton>
        </form>
      )}
    </Form>
  </div>
)

Profile.propTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string,
  photoURL: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
}

Profile.defaultProps = {
  displayName: undefined,
  email: undefined,
  photoURL: undefined,
  initialValues: {},
}

export default Profile
