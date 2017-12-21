
var WithFParams = {
    apiHost: '',
    post: function (path, jsonBody, resultHandler) {
        $.post(
            apiHost + 'path',
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
