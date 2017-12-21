
var WithFParams = {
    apiHost: 'https://5136d4373af142bd9c76b15422794beb-cn-beijing.alicloudapi.com',
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
