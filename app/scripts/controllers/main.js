'use strict';

angular.module('chatApp')
  .controller('MainCtrl', function ($scope, chatroom) {
    $scope.getMessages = chatroom.getMessages;
    $scope.getVisitors = chatroom.getVisitors;

    $scope.options = {
      link: true,                   //convert links into anchor tags
      linkTarget: '_blank',
      image: {
        embed: true                      //to allow showing image after the text gif|jpg|jpeg|tiff|png|svg|webp.
      },
      code: {
        highlight: true,        //to allow code highlighting of code written in markdown
        //requires highligh.js (https://highlightjs.org/) as dependency.
        lineNumbers: false        //to show line numbers
      },
      gdevAuth: 'AIzaSyD35jBWFqqymmNbTpXuCiZVoEGXVD5e1yo',
      video: {
        embed: true,    //to allow youtube/vimeo video embedding
        width: null,     //width of embedded player
        height: null,     //height of embedded player
        ytTheme: 'dark',   //youtube player theme (light/dark)
        details: false,    //to show video details (like title, description etc.)
        autoPlay: true,     //to autoplay embedded videos
      },
      twitchtvEmbed: true,
      dailymotionEmbed: true,
      tedEmbed: true,
      dotsubEmbed: true,
      liveleakEmbed: true,
      soundCloudEmbed: true,
    };

    $scope.sendMessage = function () {
      if (!$scope.newMessage) {
        return;
      }
      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };
  });
