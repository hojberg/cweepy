YUI.add('cweepy:views:header', function (Y) {

  Y.namespace('Cweepy').HeaderView = Y.Base.create('cweepy:headerView',
    Y.View,
    [],
  {

    events: {
      '.add-cweep': { click: 'showAddCweep' }
    },

    template: Y.Handlebars.compile(
      Y.one('#cweepy-header-tmpl').getContent()
    ),

    render: function () {
      this.get('container').setContent(
        this.template()
      );
      return this;
    },

    showAddCweep: function () {
      this.get('container').append(
        this.get('addCweepView').render().get('container')
      );
    }

  },
  {
    ATTRS: {
      addCweepView: {
        valueFn: function () {
          return new Y.Cweepy.AddCweepView({
            modelList: this.get('modelList')
          });
        }
      }
    }
  });

},
'0.0.1',
{
  requires: [
    'view',
    'cweepy:views:add_cweep'
  ]
});
