YUI.add('cweepy:models:cweep', function (Y) {

  Y.namespace('Cweepy').Cweep = Y.Base.create('cweepy:cweep',
    Y.Model,
    [Y.ModelSync.REST],
  {
    root: '/cweeps'
  });


},
'0.0.1',
{
  requires: [
    'model',
    'model-sync-rest'
  ]
});
