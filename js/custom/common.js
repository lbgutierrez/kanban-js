function showSuccessMSG( msg ) {
    msgArea = document.getElementById("message-area");
    if ( msgArea != null ) {
        htmlMSG = "<div class=\"alert alert-success\" role=\"alert\"><strong>Bien hecho!</strong> " + msg + "</div>";
        msgArea.innerHTML = htmlMSG;
        closeMSG();
    }
}

function showErrorMSG( msg ) {
    msgArea = document.getElementById("message-area");
    if ( msgArea != null ) {
        htmlMSG = "<div class=\"alert alert-danger\" role=\"alert\"><strong>Ooops!</strong> " + msg + "</div>";
        msgArea.innerHTML = htmlMSG;
        closeMSG();
    }
}

var msgpid = -1;
function closeMSG() {
    if ( msgpid != -1 ) {
        clearTimeout( msgpid )
    }
    msgpid = setTimeout(function(){ 
        msgArea = document.getElementById("message-area");
        msgArea.innerHTML = "";
        msgpid = -1;
    }, 15000);
}

function delRow( tblId, rowId ) {
    var table = document.getElementById( tblId );
    var row = document.getElementById( rowId );
    if ( table != null && row != null ) {
        table.deleteRow( row.rowIndex );
    }
}

function capitalize( el ) {
    el.value = el.value.toLowerCase();
    el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1)
}