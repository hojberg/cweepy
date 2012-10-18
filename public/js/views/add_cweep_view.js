YUI.add('cweepy:views:add_cweep', function (Y) {

  Y.namespace('Cweepy').AddCweepView = Y.Base.create('cweepy:addCweepView',
    Y.View,
    [],
  {

    events: {
      '.button.post': { click: 'save' }
    },

    template: Y.Handlebars.compile(
      Y.one('#add-cweep-tmpl').getContent()
    ),

    render: function () {
      this.get('container').setContent(
        this.template()
      );

      return this;
    },

    save: function () {
      var message = this.get('container').one('.message').get('value');

      this.get('modelList').create({
        avatar: 'https://si0.twimg.com/profile_images/1968705093/avatar.jpg', 
        message: message
      });

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
