
var WithFParams = {
    apiHost: 'https://api.feling.io',
    postJSON: function (path, data, resultHandler) {
        data.accessToken = localStorage.accessToken
        $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            url: this.apiHost + path,
            data: JSON.stringify(data),
            success: resultHandler,
            dataType: 'json'
          });
    }
}
