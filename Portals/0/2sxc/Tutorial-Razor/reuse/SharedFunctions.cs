
public class SharedFunctions: Custom.Hybrid.Code14 {

  public string SayHello() {
    return "Hello!";
  }

  public string QrPath(string link) {
        // path to qr-code generator
        var qrPath = "//api.qrserver.com/v1/create-qr-code/?color={foreground}&bgcolor={background}&qzone=0&margin=0&size={dim}x{dim}&ecc={ecc}&data={link}"
            .Replace("{foreground}", App.Settings.QrForegroundColor.Replace("#", ""))
            .Replace("{background}", App.Settings.QrBackgroundColor.Replace("#", ""))
            .Replace("{dim}", App.Settings.QrDimension.ToString())
            .Replace("{ecc}", App.Settings.QrEcc)
            .Replace("{link}", link)
            ;
        return qrPath;
    }

}
