YUI.add('cweepy:views:cweep_list', function (Y) {

  Y.namespace('Cweepy').CweepListView = Y.Base.create('cweepy:cweepsView',
    Y.View,
    [],
  {

    containerTemplate: '<div class="cweep-list"/>',

    template: Y.Handlebars.compile( 
      Y.one('#cweep-list-item-tmpl').getContent() 
    ),

    initializer: function () {
      var modelList = this.get('modelList');

      modelList.after('load', this.render, this);
      modelList.after('add', this._afterModelListAdd, this);
    },

    render: function () {
      Y.Array.each(
        this.get('modelList').toArray(),
        this.add,
        this
      );

      return this;
    },

    _afterModelListAdd: function (ev) {
      this.add( ev.model );
    },

    add: function (model) {
      this.get('container').prepend(
        this.template(model.toJSON())
      );
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
