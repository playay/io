
var WithFParams = {
    apiHost: '',
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
    },
    ajax: function (ajaxSettings) {
        $.ajax(
            ajaxSettings
        )
    }
}
