define([
  'angular'
], function (angular) {
  'use strict';

  return function () {
    // Set default username
    // Localstorate is used for persistence
    localStorage.setItem('username', 'Ifeanyi');

    function setName(username) {
      localStorage.setItem('username', username);
    }

    function getName() {
      return localStorage.getItem('username');
    }

    return {
      setName: setName,
      getName: getName
    }
  };
});
