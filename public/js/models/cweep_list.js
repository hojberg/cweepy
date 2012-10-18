YUI.add('cweepy:models:cweep_list', function (Y) {

  Y.namespace('Cweepy').CweepList = Y.Base.create('cweepy:cweepList',
    Y.ModelList,
    [Y.ModelSync.REST],
  {
    model: Y.Cweepy.Cweep,
    url: '/cweeps'
  });
  
},
'0.0.1',
{
  requires: [
    'model-list',
    'cweepy:models:cweep',
    'model-sync-rest'
  ]
});
