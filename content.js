$(function(){
    const sample = $('.lang-ja').find('[id^=pre-sample]')
    $('#main-container').append('<button id="test-button">ボタン</button>');
    $('#test-button').on('click', function() {
        console.log($('.CodeMirror-code').find('.cm-variable').get())
        var samples = []
        for(var i = 0; i < sample.get().length; i++) { // iが0から9までの間の繰り返し（毎囘最後に i++ を実行）
            samples.push(sample.get()[i].textContent);
        }

        const token = $('input[name="csrf_token"]').load("../custom_test").val()
        const postData = {"input":"aa", "data.LanguageId":3024, "sourceCode":'puts "Yay!"', "csrf_token":token};

        $.post( '../custom_test', postData )
            .done( data => { } )
            .fail( () => { console.log("err") } )

        const getCodeResult = () => {
            return $.get('../custom_test')
                .done((data) => {
                    return data
                })
                .fail(() => { console.log( "err") } )
        }
        /*
        setTimeout(() => {
            $(".CodeMirror").remove()
        }, 3000)
        */

        const getPromise = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(getCodeResult())
                }, 3000)
            })
        }
        getPromise().then( value => {
                console.log(samples[1])
                console.log($("#stdout").html(value).find("#stdout").val() == samples[0])
            }
        ).then(() => $(".CodeMirror").remove())


    });


})
