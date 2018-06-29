import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'

import { input, textarea, SubmitButton } from 'components/form'
import { required } from 'components/form/validators'

import './categoryForm.css'

const CategoryForm = ({ edit, ...formProps }) => (
  <form className="category-form">
    <h2>{edit ? 'Update category' : 'Add a new category'}</h2>
    <div className="category-form-content">
      <Field name="name" label="Name" type="text" component={input} validate={required} />
      <Field name="description" label="Description" type="text" component={textarea} />
      <SubmitButton {...formProps}>
        {edit ? 'Save category' : 'Add category'}
      </SubmitButton>
    </div>
  </form>
)

CategoryForm.propTypes = {
  ...propTypes,
}

export default reduxForm({ form: 'category' })(CategoryForm)
