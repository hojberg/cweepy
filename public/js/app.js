YUI.add('cweepy:app', function (Y) {

  Y.namespace('Cweepy').App = Y.Base.create('cweepy:app', 
    Y.App,
    [],
  {

    views: {
      cweeps: { type: Y.Cweepy.CweepListView }
    },

    render: function () {
      this.constructor.superclass.render.call(this);
      this._renderHeader();
      return this;
    },

    _renderHeader: function () {
      this.get('viewContainer').insert(
        this.get('headerView').render().get('container'),
        'before'
      );
    },

    showCweeps: function (req, res) {
      var cweepList = this.get('cweepList');

      this.showView(
        'cweeps', 
        { modelList: cweepList }
      );

      cweepList.load();
    }

  },
  {
    ATTRS: {

      routes: {
        value: [
          { path: '/', callbacks: 'showCweeps' }
        ]
      },

      cweepList: {
        valueFn: function () {
          return new Y.Cweepy.CweepList();
        }
      },

      headerView: {
        valueFn: function () {
          return new Y.Cweepy.HeaderView({
            modelList: this.get('cweepList')
          });
        }
      }

    }
  });

},
'0.0.1',
{
  requires: [
    'app',
    'cweepy:models:cweep_list',
    'cweepy:views:header',
    'cweepy:views:cweep_list'
  ]
});
