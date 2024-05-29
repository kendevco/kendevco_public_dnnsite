<%@ Control Language="C#" AutoEventWireup="True" Inherits="avt.ActionForm.DnnTextEditor" EnableViewState="true" CodeBehind="DnnTextEditor.ascx.cs" %>
<%@ Register TagPrefix="dnn" TagName="TextEditor" Src="~/controls/texteditor.ascx" %>

<style>
    .dnnTextEditor {
        margin-bottom: 0;
    }

    body {
        background-color: transparent !important;
    }

    .dnnFormItem p {
        margin-bottom: 0;
    }

    iframe {
        margin: 7px;
    }

    #Table1 {
        width: 100%;
    }
</style>

<dnn:texteditor id="txtContent" runat="server" width="100%" ChooseMode="false"></dnn:texteditor>

<script>
    $(document).ready(function () {
        var currentFrame = $(window.frameElement);
        currentFrame.prev().fadeOut();

        var checkForCkEditor = setInterval(function () {
            if (!CKEDITOR || !CKEDITOR.instances) {
                return;
            }

            var id = $('textarea').attr('id');
            var editor = CKEDITOR.instances[id];
            if (!editor || editor.status != 'ready') {
                return;
            }

            // set initial value.
            editor.setData(currentFrame.attr('data-content'));

            // watch for changes.
            var sc = window.parent.angular.element(currentFrame).scope();
            var fieldId = currentFrame.attr('data-af-field');
            editor.on('change', function (evt, b) {
                sc.form.fields[fieldId].value = evt.editor.getData();
                setTimeout(function () {
                    sc.form.fields[fieldId].onChange && sc.form.fields[fieldId].onChange(sc.form)
                }, 0);
            });

            clearInterval(checkForCkEditor);
        }, 100);


        // keep height of parent iframe in sync
        setInterval(function () {
            currentFrame.height($('body').height());
        }, 200);
    });

    window.getContent = function () {
        switch (true) {
            case (window.CKEDITOR != undefined):
                return CKEDITOR.instances[$('textarea').attr('id')].getData();
                break;
            default:
                var frame = $('iframe:first').length ? $('iframe:first') : $('body').find('textarea.cke_source');
                var content = frame[0].contentWindow ? $('body', frame[0].contentWindow.document).html() : frame.val();
                return content == "<br>" || content == "<p><br></p>" ? "" : content;
        }
    };

    window.setContent = function (content) {
        if (!CKEDITOR) {
            console.warn('[Action Form - Dnn Text Editor] could not find CKEDITOR.');
            return;
        }

        if (!CKEDITOR.instances) {
            console.warn('[Action Form - Dnn Text Editor] could not find CKEDITOR.instances.');
            return;
        }

        var id = $('textarea').attr('id');
        var editor = CKEDITOR.instances[id];
        if (!editor) {
            console.warn('[Action Form - Dnn Text Editor] could not find CKEDITOR.instances["' + id + '"].');
            return;
        }

        if (editor.status !== 'ready') {
            console.warn('[Action Form - Dnn Text Editor] CKEDITOR.instances["' + id + '"] is not ready yet.');
            return;
        }

        editor.setData(content);
    }
</script>