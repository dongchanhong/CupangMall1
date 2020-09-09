function buildFunctionPagination(filterdData) {
    let container = $('#pagination');
    container.pagination({
        dataSource: filterdData,
        pageSize :5,
        callback: function (data, pagination) {
            var dataHtml = '';

            $.each(data, function (index, item) {
                dataHtml += '<div class ="card"><h4><a href=' + item.mesage + '>"' +  item.title +'</a></h4>'
                            + '<img src=' + item.image + '></div>'
            });

            $("#d-container").html(dataHtml);
        }        })
}

function filterFunction(data) {
        var value = document.getElementById("search-input").value
        console.log("input value")
        console.log(value)
        if(value=="") {
            console.log("babo")
        }
        
        else {
        var filterdData = []
    
        for (var i=0; i<data.length;i++) {
            //console.log(data[i])
            var name = data[i].title
            
            if(name.indexOf(value) > -1) {
                //console.log(value)
                //console.log(name.indexOf(value))
                filterdData.push(data[i])
            }
            

        }
        console.log("검색")
        console.log(filterdData)
        buildFunctionPagination(filterdData)
    }
}
    
function resetFunction() {
    document.getElementById("search-input").value = "";
    $(function () {
    let container = $('#pagination');
    container.pagination({
        dataSource: data,
        pageSize :5,
        callback: function (data, pagination) {
            var dataHtml = '';

            $.each(data, function (index, item) {
                dataHtml += '<div class ="card"><h4><a href=' + item.message + '>"' +  item.title +'</a></h4>'
                            + '<img src=' + item.image + '></div>'
            });

            $("#d-container").html(dataHtml);
        }
    })
  })
}