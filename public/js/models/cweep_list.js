YUI.add('cweepy:models:cweep_list', function (Y) {

  Y.namespace('Cweepy').CweepList = Y.Base.create('cweepy:cweep_list',
    Y.ModelList,
    [Y.ModelSync.REST],
  {
    url: '/cweeps',
    model: Y.Cweepy.Cweep
  });

},
'0.0.1',
{
  requires: [
    'model-list',
    'model-sync-rest',
    'cweepy:models:cweep'
  ]
});
