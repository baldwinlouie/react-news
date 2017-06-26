'use strict';

export const errorMessages = {
    LOGIN_REQUIRED: 'You have to login to do that.',
    INVALID_EMAIL: 'Invalid email address.',
    INVALID_PASSWORD: 'Invalid password.',
    INVALID_USER: 'User doesn\'t exist.',
    COMMENT_FAILED: 'Comment submission failed. Try again.',
    NO_COMMENT: 'You have to enter a comment.',
    NO_USERNAME: 'You have to enter a username.',
    EMAIL_TAKEN: 'That email is taken.',
    USERNAME_TAKEN: 'That username is taken.',
    AUTHENTICATION_DISABLED: 'Your administrator needs to configure Firebase authentication',
    generic: 'Something went wrong.'
};

export const config = {
    apiKey: 'API_Key',
    authDomain: 'PROJECT_ID.firebaseapp.com',
    databaseURL: 'https://PROJECT_ID.firebaseio.com',
    projectId: 'PROJECT_ID',
    storageBucket: 'PROJECT_ID.appspot.com',
    messagingSenderId: 'MESSAGE_SENDER_ID'
};
