
var WithFParams = {
    apiHost: '',
    post: function (path, jsonBody, resultHandler) {
        $.post(
            this.apiHost + path,
            jsonBody,
            resultHandler,
            'json'
        )
    },
    ajax: function (ajaxSettings) {
        $.ajax(
            ajaxSettings
        )
    }
}
