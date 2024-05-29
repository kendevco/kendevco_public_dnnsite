using ToSic.Razor.Blade;

public class Parts: Custom.Hybrid.Code12
{
  public dynamic RowClasses(dynamic data) {
    var textPosition = Text.First(data.TextPosition, Content.TextPosition, App.Settings.TextPosition, "none");
    return "row h-100 " + (textPosition == "cl" || textPosition == "cc" || textPosition == "cr" ? "align-items-center" : "") + " " + (textPosition == "bl" || textPosition == "bc" || textPosition == "br" ? "align-items-end" : "");
  }

  public dynamic ContentClasses(dynamic data) {
    var textPosition = Text.First(data.TextPosition, Content.TextPosition, App.Settings.TextPosition, "none");
    return (textPosition == "tc" || textPosition == "cc" || textPosition == "bc" ? "text-center" : "") + " " + (textPosition == "tr" || textPosition == "cr" || textPosition == "br" ? "text-right" : "");
  }

  public dynamic WrapperClasses(dynamic data) {
    var contentEffect = Text.First(data.ContentEffect, Content.ContentEffect, App.Settings.ContentEffect, "none");
    var contentTextPosition = Text.First(data.TextPosition, Content.TextPosition, App.Settings.TextPosition, "none");
    return "content-position-" + contentTextPosition + " content-effect-" + contentEffect + " " + (data.DarkContent ?? Content.DarkContent ?? App.Settings.DarkContent ? "dark-content" : "light-content");
  }
}


