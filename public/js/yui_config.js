YUI_config = {

  modules: {
    'cweepy:app': {
      fullpath: 'js/app.js'
    },

    // --- views --- //
    
    'cweepy:views:header': {
      fullpath: 'js/views/header_view.js'
    },
    'cweepy:views:add_cweep': {
      fullpath: 'js/views/add_cweep_view.js'
    },
    'cweepy:views:cweep_list': {
      fullpath: 'js/views/cweep_list_view.js'
    },

    // --- models --- //
    
    'cweepy:models:cweep_list': {
      fullpath: 'js/models/cweep_list.js'
    },
    'cweepy:models:cweep': {
      fullpath: 'js/models/cweep.js'
    }
  }

};
