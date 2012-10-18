YUI.add('cweepy:views:cweep_list', function (Y) {

  Y.namespace('Cweepy').CweepListView = Y.Base.create('cweepy:cweepListView',
    Y.View,
    [],
  {

    containerTemplate: '<ul class="cweep-list"/>',

    template: Y.Handlebars.compile(
      Y.one('#cweepy-list-item-tmpl').getContent()
    ),

    initializer: function () {
      var modelList = this.get('modelList');
      modelList.after('load', this.render, this);
      modelList.after('add', this._afterModelListAdd, this);
    },

    _afterModelListAdd: function (ev) {
      this.add( ev.model );
    },

    render: function () {
      this.get('modelList').each(this.add, this);

      return this;
    },

    add: function (model) {
      this.get('container').prepend(
        this.template( model.toJSON() )
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
