YUI.add('cweepy:app', function (Y) {

  Y.namespace('Cweepy').App = Y.Base.create('cweepy:app',
    Y.App,
    [],
  {

    views: {
      cweeps: { type: Y.Cweepy.CweepListView } 
    },

    render: function () {
      this.get('viewContainer').insert(
        new Y.Cweepy.HeaderView({
          modelList: this.get('cweepList')
        }).render().get('container'),
        'before'
      );

      return this;
    },

    showCweeps: function () {
      var cweepList = this.get('cweepList');

      this.showView('cweeps', {
        modelList: cweepList
      });

      cweepList.load();
    }

  },
  {
    ATTRS: {
      routes: {
        value: [
          { path: '/', callback: 'showCweeps' }
        ]
      },

      cweepList: {
        valueFn: function () {
          return new Y.Cweepy.CweepList();
        }
      }
    }
  });

},
'0.0.1',
{
  requires: [
    'app-base', 
    'cweepy:views:cweep_list',
    'cweepy:models:cweep_list',
    'cweepy:views:header'
  ]
});
