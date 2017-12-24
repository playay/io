
var WithFParams = {
    apiHost: 'https://api.feling.io',
    postJson: function (path, data, resultHandler) {
        data.accessToken = localStorage.accessToken
        return $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            url: this.apiHost + path,
            data: JSON.stringify(data),
            success: resultHandler,
            dataType: 'json'
        })
    },
    postForm: function (path, data, resultHandler) {
        data.accessToken = localStorage.accessToken
        return $.ajax({
            type: 'POST',
            url: this.apiHost + path,
            data: data,
            success: resultHandler,
            dataType: 'json'
        })
    },
}
