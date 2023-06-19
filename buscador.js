var consulta = $(#searchTable).DataTable()

$("#inputBusqueda").keyup(function(){
    consulta.search($(this).val()).draw();
})