import React from "react";
import { Field, reduxForm } from "redux-form";

class PropertyForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderField({ input, label, type, meta }) {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {meta.touched &&
            ((meta.error && (
              <div className="ui error message">
                <div className="header">{meta.error}</div>
              </div>
            )) ||
              (meta.warning && (
                <div className="ui warning message">
                  <div className="header">{meta.warning}</div>
                </div>
              )))}
        </div>
      </div>
    );
  }

  render() {
    const { pristine, reset, submitting } = this.props;

    return (
      <form
        className="ui form error warning"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="propertyid"
          type="text"
          component={this.renderField}
          label="Property ID"
        />
        <Field
          name="name"
          type="text"
          component={this.renderField}
          label="Name"
        />
        <Field
          name="value"
          type="text"
          component={this.renderField}
          label="Value"
        />
        <Field
          name="defaultvalue"
          type="text"
          component={this.renderField}
          label="Default Value"
        />
        <Field
          name="comments"
          type="text"
          component={this.renderField}
          label="Comments"
        />
        <div>
          <button
            className="ui button primary"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
          <button
            className="ui button negative"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.propertyName) {
    errors.propertyName = "Required";
  } else if (values.propertyName.length < 3) {
    errors.propertyName = "Must be more than 3 characters";
  }

  if (!values.propertyValue) {
    errors.propertyValue = "Required";
  } else if (values.propertyValue.length < 3) {
    errors.propertyValue = "Must be more than 3 characters";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.propertyName && values.propertyName.length > 10) {
    warnings.propertyName = "Hmm, too many characters...";
  }
  return warnings;
};

export default reduxForm({
  form: "propertyForm",
  validate,
  warn
})(PropertyForm);
