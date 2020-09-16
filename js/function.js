function buildFunctionPagination(filterdData) {
    let container = $('#pagination');
    container.pagination({
        dataSource: filterdData,
        pageSize :5,
        callback: function (data, pagination) {
            var dataHtml = '';

            $.each(data, function (index, item) {
                dataHtml += '<div class ="card"><h6 class="font2"><a href=' + item.productUrl + '>"' +  item.productName +'</a></h6>'
                + '<img src=' + item.productImage + '><br><font size="5"> ' + item.productPrice +'원</font></div>'
            });

            $("#d-container").html(dataHtml);
            window.scrollTo(0,0);
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
            var name = data[i].productName
            
            //if(name.indexOf(value) > -1) {
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
                dataHtml += '<div class ="card"><h6 class="font2"><a href=' + item.productUrl + '>"' +  item.productName +'</a></h6>'
                + '<img src=' + item.productImage + '><br><font size="5"> ' + item.productPrice +'원</font></div>'
            });

            $("#d-container").html(dataHtml);
            window.scrollTo(0,0);
        }
    })
  })
}