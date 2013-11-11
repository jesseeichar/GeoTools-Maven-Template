    function square(n){
        return n*n;
    }

    function displaySquare(elemId, n) {
        var elem = document['getElementById'](elemId);
        elem['innerText'] = n + ' * ' + n + '=' + square(n);
    }
    window['closureExportedFunctions'] = {
        'square': displaySquare
    };
