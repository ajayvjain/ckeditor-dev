CKEDITOR.plugins.add('sumtsocialfileupload', {
          icons: 'sumtsocialfileupload',
          init: function (editor) {
            //debugger;
            //Plugin logic goes here.
            editor.addCommand("sumtsocialfileupload", {
              exec: function (edt) {
				  CKEDITOR.fire('fileUpload');
                //alert(edt.getData());
              }
            });
            editor.ui.addButton('sumtsocialfileupload', {

              label: 'My Bold',
              command: 'sumtsocialfileupload',
              toolbar: 'insert,0'
            });
          }
        });