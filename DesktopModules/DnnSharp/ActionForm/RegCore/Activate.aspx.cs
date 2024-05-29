using System;
using avt.ActionForm.Core;
using DnnSharp.Common;
using System.Web.UI;
using DnnSharp.Common2.IoC;
using DnnSharp.Common2.Services.Dnn;
using DnnSharp.Common2.EntryPoint;

namespace avt.ActionForm.RegCore {
    public partial class Activate : InjectableActivatePage {

        [IoCService]
        protected IServicesFrameworkLoader ServicesFrameworkLoader { get; set; }

        public Activate() : base(App.Instance.AppInfo) {
        }

        protected override void Page_Load(object sender, EventArgs e) {
            base.Page_Load(sender, e);

            ServicesFrameworkLoader.RequestAjaxAntiForgerySupport();

            Page.Header.DataBind();
            Page.Form.DataBind();
        }

        protected override void OnPreRender(EventArgs e) {
            base.OnPreRender(e);
            ClientResManager.RegisterJquery(Page, AppInfo);

            ClientResManager.RegisterCss(Page, AppInfo, AppInfo.CommonUrl + "/static/bootstrap337/css/bootstrap.min.css?v=" + AppInfo.Build);
            ClientResManager.RegisterCss(Page, AppInfo, AppInfo.CommonUrl + "/static/dnnsf/css/activate.css?v=" + AppInfo.Build);
            ClientResManager.RegisterCss(Page, AppInfo, AppInfo.CommonUrl + "/static/bootstrap337/css/bootstrap.min.css?v=" + AppInfo.Build);
            Page.ClientScript.RegisterClientScriptInclude(typeof(Page), "dnnsftoast", AppInfo.CommonUrl + "/static/dnnsf/dnnsf.js?v=" + AppInfo.Build);

            ServicesFrameworkLoader.RegisterAjaxAntiForgery(this);
        }

    }
}
