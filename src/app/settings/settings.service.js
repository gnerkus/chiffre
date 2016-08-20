define([
  'angular'
], function (angular) {
  'use strict';

  // Sample settings data.
  // There are 50 different settings, each consisting of three properties:
  // category, priority and the setting's property
  var settings = [
    {
      category: 'account',
      priority: 1,
      property: 'username'
    },
    {
      category: 'account',
      priority: 2,
      property: 'email'
    },
    {
      category: 'account',
      priority: 3,
      property: 'language'
    },
    {
      category: 'account',
      priority: 4,
      property: 'timezone'
    },
    {
      category: 'account',
      priority: 5,
      property: 'country'
    },
    {
      category: 'account',
      priority: 6,
      property: 'media'
    },
    {
      category: 'account',
      priority: 7,
      property: 'video'
    },
    {
      category: 'account',
      priority: 8,
      property: 'timeline'
    },
    {
      category: 'account',
      priority: 9,
      property: 'archive'
    },
    {
      category: 'security',
      priority: 1,
      property: 'verification'
    },
    {
      category: 'security',
      priority: 2,
      property: 'reset'
    },
    {
      category: 'security',
      priority: 3,
      property: 'code'
    },
    {
      category: 'security',
      priority: 4,
      property: 'tagging'
    },
    {
      category: 'security',
      priority: 5,
      property: 'privacy'
    },
    {
      category: 'security',
      priority: 6,
      property: 'location'
    },
    {
      category: 'security',
      priority: 7,
      property: 'discoverablility'
    },
    {
      category: 'security',
      priority: 8,
      property: 'book'
    },
    {
      category: 'security',
      priority: 9,
      property: 'personalization'
    },
    {
      category: 'security',
      priority: 10,
      property: 'promoted'
    },
    {
      category: 'security',
      priority: 11,
      property: 'teams'
    },
    {
      category: 'security',
      priority: 12,
      property: 'direct'
    },
    {
      category: 'password',
      priority: 1,
      property: 'current'
    },
    {
      category: 'password',
      priority: 2,
      property: 'new'
    },
    {
      category: 'password',
      priority: 3,
      property: 'verify'
    },
    {
      category: 'cards',
      priority: 1,
      property: 'payment'
    },
    {
      category: 'cards',
      priority: 2,
      property: 'registered'
    },
    {
      category: 'mobile',
      priority: 1,
      property: 'text'
    },
    {
      category: 'mobile',
      priority: 2,
      property: 'sleep'
    },
    {
      category: 'email',
      priority: 1,
      property: 'like'
    },
    {
      category: 'email',
      priority: 2,
      property: 'mention'
    },
    {
      category: 'email',
      priority: 3,
      property: 'retweet'
    },
    {
      category: 'email',
      priority: 4,
      property: 'remention'
    },
    {
      category: 'email',
      priority: 5,
      property: 'reply'
    },
    {
      category: 'email',
      priority: 6,
      property: 'follow'
    },
    {
      category: 'email',
      priority: 7,
      property: 'direct'
    },
    {
      category: 'email',
      priority: 8,
      property: 'email'
    },
    {
      category: 'email',
      priority: 9,
      property: 'address'
    },
    {
      category: 'email',
      priority: 10,
      property: 'relike'
    },
    {
      category: 'email',
      priority: 11,
      property: 'reretweet'
    },
    {
      category: 'email',
      priority: 12,
      property: 'top'
    },
    {
      category: 'email',
      priority: 13,
      property: 'activity'
    },
    {
      category: 'email',
      priority: 14,
      property: 'performance'
    },
    {
      category: 'email',
      priority: 15,
      property: 'recommendation'
    },
    {
      category: 'email',
      priority: 16,
      property: 'news'
    },
    {
      category: 'email',
      priority: 17,
      property: 'tips'
    },
    {
      category: 'email',
      priority: 18,
      property: 'missed'
    },
    {
      category: 'email',
      priority: 19,
      property: 'partners'
    },
    {
      category: 'email',
      priority: 20,
      property: 'participation'
    },
    {
      category: 'email',
      priority: 21,
      property: 'suggestions'
    },
    {
      category: 'email',
      priority: 22,
      property: 'recent'
    },
  ];

  return function () {
    function getSettings() {
      return settings;
    }

    return {
      getSettings: getSettings,
    };
  };
});
