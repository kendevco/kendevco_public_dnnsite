var settings = {
    keyboard: true, backdrop: true
};
if (context.AllowUserClose != null) {
    settings.backdrop = 'static';
    if (context.AllowUserClose == false) {
        settings.keyboard = false;
    } else {
        settings.keyboard = context.CloseOnEscape;
        if (context.CloseOnClick) {
            settings.backdrop = true;
        }
    }
}

dnnsf.api.actionForm.openPopupById(context.ModuleId, context.Params, context.ReinitForm, settings);