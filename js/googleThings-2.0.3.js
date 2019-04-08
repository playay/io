var the_gfw = new Image();
the_gfw.src = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico?t=" + parseInt(new Date().getTime() / 100000);
setTimeout(
    function () {
        if (!the_gfw.complete || !the_gfw.naturalWidth) {
            the_gfw.src = '' // 没能请求到谷歌的icon
            $("#disqus_thread_modal_entrance").hide()
            return
        }
        $("#disqus_thread_modal_entrance").show()
        $("#googleThings").load("//cdn.feling.io/googleThings-2.0.2.html")
    },
    1500
);