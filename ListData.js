window.ListData = {};
ListData.RegisterListDataColumnEvents = function(tbody) {
    $(tbody).find('tr').each(function(index, tr){
        $(tr).click(function(e) {
            alert(e.currentTarget.outerHTML);
        })
    });
}