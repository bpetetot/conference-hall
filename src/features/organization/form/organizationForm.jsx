import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Field from 'components/form/field'
import { input, SubmitButton } from 'components/form'
import { required } from 'components/form/validators'

import './organizationForm.css'
import { useNavigate } from 'react-router-dom'

function OrganizationForm({ onSubmit, initialValues, submitting }) {
  const navigate = useNavigate()
  const handleFormSubmit = useCallback(
    (data) => {
      onSubmit(data)
      if (data.id) {
        navigate(`/organizer/organization/${data.id}`)
      } else {
        navigate('/organizer/organizations')
      }
    },
    [onSubmit, navigate],
  )

  return (
    <Form onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({ handleSubmit, pristine }) => (
        <form className="organization-form card">
          <Field name="name" label="Name" type="text" component={input} validate={required} />
          <SubmitButton handleSubmit={handleSubmit} pristine={pristine} submitting={submitting}>
            {!initialValues ? 'Create organization' : 'Save organization'}
          </SubmitButton>
        </form>
      )}
    </Form>
  )
}

OrganizationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitting: PropTypes.bool,
}

OrganizationForm.defaultProps = {
  initialValues: undefined,
  submitting: false,
}

export default OrganizationForm
