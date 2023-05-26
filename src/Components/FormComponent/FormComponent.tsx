import { Form, Formik } from 'formik';
import React from 'react';

import styled from '@emotion/styled';

export const FormComponent: React.FC<IFormComponent> = ({
  initialValues,
  schema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleSubmit, handleChange }) => (
        <FormWrapper onSubmit={handleSubmit} autoComplete="off" noValidate>
          {React.Children.map(children, (child) => {
            const onChange = handleChange;
            let error = errors[''];
            let touch = touched[''];
            if (child.props.id !== undefined) {
              error = errors[`${child.props.id}`];
              touch = touched[`${child.props.id}`];
            }
            const newChild = React.cloneElement(child, {
              onChange,
              error,
              touch,
            });
            return newChild;
          })}
        </FormWrapper>
      )}
    </Formik>
  );
};

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// === interfaces
interface IFormComponent {
  initialValues: any;
  schema: any;
  onSubmit: any;
  children: React.ReactElement[];
}
