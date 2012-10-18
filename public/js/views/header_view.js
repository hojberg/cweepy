YUI.add('cweepy:views:header', function (Y) {

  Y.namespace('Cweepy').HeaderView = Y.Base.create('cweepy:app',
    Y.View,
    [],
  {

    events: {
      '.add-cweep': { click: 'showAddCweep' }
    },

    template: Y.Handlebars.compile(
      Y.one('#header-tmpl').getContent()
    ),

    render: function () {
      this.get('container').setContent(
        this.template()
      );

      return this;
    },

    showAddCweep: function () {
      this.get('container').append(
        new Y.Cweepy.AddCweepView({
          modelList: this.get('modelList')
        }).render().get('container')
      );
    }

  });

},
'0.0.1', 
{
  requires: [
    'view',
    'cweepy:views:add_cweep',
    'handlebars'
  ]
});
