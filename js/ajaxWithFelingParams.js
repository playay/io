
var WithFParams = {
    apiHost: '',
    post: function (path, jsonBody, resultHandler) {
        $.post(
            this.apiHost + 'path',
            jsonBody,
            resultHandler(result),
            'json'
        )
    },
    ajax: function (ajaxSettings) {
        $.ajax(
            ajaxSettings
        )
    }
}
