import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'

import Field from 'components/form/field'
import Titlebar from 'components/titlebar'
import { markdownInput, radio, SubmitButton, RadioGroup } from 'components/form'
import Alert from 'components/alert'
import { required } from 'components/form/validators'

import './talkSubmission.css'

function TalkSubmission({
  talk,
  error,
  event,
  update,
  onSubmit,
  unsubmitTalk,
  initialValues,
  isSubmitting,
  isUnsubmitting,
}) {
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, invalid, errors }) => (
        <form className="talk-submission">
          <Titlebar icon="fa fa-microphone" title={talk.title}>
            {update && (
              <SubmitButton
                secondary
                type="button"
                onClick={unsubmitTalk}
                submitting={isUnsubmitting}
              >
                Remove submission
              </SubmitButton>
            )}
          </Titlebar>
          {!isEmpty(error) && (
            <div className="form-error">
              <Alert title={error} type="error" />
            </div>
          )}
          <div className="submit-talk-form card">
            {!isEmpty(event.categories) && (
              <RadioGroup
                name="categories"
                label="Talk categories"
                error={errors.categories}
                inline
              >
                {event.categories.map((c) => (
                  <Field
                    key={c.id}
                    name="categories"
                    value={c.id}
                    label={c.name}
                    type="radio"
                    component={radio}
                    validate={get(event, 'mandatoryFields.categories') ? required : undefined}
                  />
                ))}
              </RadioGroup>
            )}
            {!isEmpty(event.formats) && (
              <RadioGroup name="formats" label="Talk formats" error={errors.formats} inline>
                {event.formats.map((f) => (
                  <Field
                    key={f.id}
                    name="formats"
                    value={f.id}
                    label={f.name}
                    type="radio"
                    component={radio}
                    validate={get(event, 'mandatoryFields.formats') ? required : undefined}
                  />
                ))}
              </RadioGroup>
            )}
            <Field
              name="comments"
              label="Message to organizers"
              hints="Ask special requirements to organizers or just thank them."
              component={markdownInput}
            />
            <SubmitButton onClick={handleSubmit} submitting={isSubmitting} invalid={invalid}>
              {update ? 'Update submission' : `Submit to ${event.name}`}
            </SubmitButton>
          </div>
        </form>
      )}
    </Form>
  )
}

TalkSubmission.propTypes = {
  update: PropTypes.bool,
  talk: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.string,
  event: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
  unsubmitTalk: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  isSubmitting: PropTypes.bool,
  isUnsubmitting: PropTypes.bool,
}

TalkSubmission.defaultProps = {
  update: false,
  error: undefined,
  talk: {},
  event: {},
  initialValues: undefined,
  isSubmitting: false,
  isUnsubmitting: false,
}

export default TalkSubmission
