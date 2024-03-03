import * as yup from 'yup';
import {phoneRegExp} from '../constants';

export const loginFormFields = {
  email: '',
  password: '',
};

export const groupFormFields = {
  groupName: '',
};

export const LoginVs = yup.object().shape({
  email: yup.string().email().required('Email Required'),
  password: yup.string().required('Password Required'),
});
export const ForgotFormFields = {
  phone: '',
};

export const signupFormFields = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
};

export const pageFormFields = {
  name: '',
  category: [],
  description: '',
  website: '',
  phone: '',
  email: '',
};

export const ResetFormFields = {
  password: '',
  confirmPassword: '',
};

export const signUpVS = yup.object().shape({
  firstname: yup.string().required('First Name Required'),
  lastname: yup.string().required('Last Name Required'),
  password: yup.string().required('Password Required'),
  email: yup.string().email().required('Email Required'),
  dob: yup.string().required('Date of Birth Required'),
  gender: yup.string().required('Gender Required'),
  phone: yup
    .string()
    .required('Phone number Required')
    .matches(phoneRegExp, 'Phone number is not valid!'),
});

export const GroupVS = yup.object().shape({
  groupName: yup.string().required('Group Name Required'),
});
export const ForgotVs = yup.object().shape({
  phone: yup
    .string()
    .required('Phone number Required')
    .matches(phoneRegExp, 'Phone number is not valid!'),
});

export const pageVS = yup.object().shape({
  name: yup.string().required('Name Required'),
  category: yup.array().required('Category Required'),
  description: yup.string().required('Description Required'),
  website: yup.string().required('Website Required'),
  phone: yup
    .string()
    .required('Phone number Required')
    .matches(phoneRegExp, 'Phone number is not valid!'),
  email: yup.string().email().required('Email Required'),
});

export const ResetPasswordVS = yup.object().shape({
  password: yup.string().required('Password Required'),
  confirmPassword: yup
    .string()
    .required('Confirm New Password Required')
    .oneOf([yup.ref('password'), null], 'New Passwords do not match'),
});
