YUI.add('cweepy:views:add_cweep', function (Y) {

  var avatar = 'https://si0.twimg.com/profile_images/1968705093/avatar.jpg';

  Y.namespace('Cweepy').AddCweepView = Y.Base.create('cweepy:addCweepView',
    Y.View,
    [],
  {
    events: {
      '.button.post': { click: 'save' }
    },

    template: Y.Handlebars.compile(
      Y.one('#cweepy-add-cweep-tmpl').getContent()
    ),

    render: function () {
      this.get('container').setContent(
        this.template()
      );
      return this;
    },

    save: function () {
      var message = this.get('container').one('.message').get('value');

      this.get('modelList').create(
        { message: message, avatar: avatar }
      );

      this.remove();
    }

  });

},
'0.0.1',
{
  requires: [
    'view', 
    'handlebars'
  ]
});
