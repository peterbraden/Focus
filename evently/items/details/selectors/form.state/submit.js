function(e) {
  // $.log(e.data.args[2].id)
  var form = $(this),
    app = $$(form).app,
    f = form.serializeObject(),
    d = form.parents(".details"),
    id = d.attr("data-id"),
    rev = d.attr("data-rev");
  app.db.openDoc(id, {
    success : function(doc) {
      doc.state = f.state;
      doc._rev = rev;
      doc.state_at = new Date();
      doc.state_by = $("#account a[target=_new]").text();
      app.db.saveDoc(doc, {
        success : function() {
          form.trigger('details',[{id:id}]);
        }
      });
    }
  });
  return false;
};