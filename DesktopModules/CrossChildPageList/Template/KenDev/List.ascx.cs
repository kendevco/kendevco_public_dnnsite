/*
 *  This is a free module from www.DnnModules.cn, you can use it as your wish.
 *  Any suggestions , please visit our forum at www.DnnModules.cn or mail us at xiaoqi97#msn.com
 * 
 * Version history
 *  11/05/2008 v2.0 First release as free module
 *  
 *  6/13/2009  v2.2 Add two options:"Recursive" and "Child tab prefix"
 *   9/17/2009  v2.5 add six options to build elegant menu style.
 *   
 * 2/1/2010 v2.6 remove viewstate to improve load speed.
 * 2010/11/22 v3.0  display child page from menu root. remove wrap from list item.
 */

using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Web.UI;
using System.Web.UI.WebControls;

using DotNetNuke;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Security;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Entities.Tabs;

namespace Cross.Modules.ChildPageList
{
	/// -----------------------------------------------------------------------------
	/// <summary>
	/// The List class displays the content
	/// </summary>
	/// <remarks>
	/// </remarks>
	/// <history>
	/// </history>
	/// -----------------------------------------------------------------------------
	partial class List : PortalModuleBase
	{
		// Minh Dam added
		private int ROOT_PARENT_TAB_LEVEL = 0;
		private const int MAXIMUM_MENU_ITEM_DEEP = 4;

		#region Private Members
		private string Parent_Tab = "ParentTab";
		private string Include_Self = "IncludeSelf";
		private string Include_Invisible = "IncludeInvisible";
	 
		private string Column_Per_Row = "ColumnPerRow";
	  
		private string Link_Target = "LinkTarget";
		private string Recursive = "Recursive";


		private string DisplayIcon = "DisplayIcon";
	  

		#endregion

		#region public members

		public int ColumnPerRow
		{
			get
			{
				ModuleController ctlModule = new ModuleController();

				//check recursive
				bool isRecursive = false;
				if (ctlModule.GetModuleSettings(ModuleId)[Recursive] != null && ctlModule.GetModuleSettings(ModuleId)[Recursive] != "")
				{
					isRecursive = Convert.ToBoolean(ctlModule.GetModuleSettings(ModuleId)[Recursive]);
				}
				if (isRecursive)
				{
					return 1;
				}
				else
				{
					if (ctlModule.GetModuleSettings(ModuleId)[Column_Per_Row] != null && ctlModule.GetModuleSettings(ModuleId)[Column_Per_Row] != "")
					{
						return Convert.ToInt32(ctlModule.GetModuleSettings(ModuleId)[Column_Per_Row]);
					}
					else
					{
						return 1;
					}
				}
			 
			}
		}

		public string LinkTarget
		{
			get
			{
				ModuleController ctlModule = new ModuleController();
				if (ctlModule.GetModuleSettings(ModuleId)[Link_Target] != null && ctlModule.GetModuleSettings(ModuleId)[Link_Target] != "")
				{
					return Convert.ToString(ctlModule.GetModuleSettings(ModuleId)[Link_Target]);
				}
				else
				{
					return "_self";
				}
			}
		}

		private int? _parentTabId;
		public int ParentTabId
		{
			get
			{
				if (_parentTabId == null)
				{
					ModuleController ctlModule = new ModuleController();
					int parentTabId = -1;//Default value

					if (ctlModule.GetModuleSettings(ModuleId)[Parent_Tab] != null && Convert.ToString(ctlModule.GetModuleSettings(ModuleId)[Parent_Tab]) != "")
					{
						parentTabId = Convert.ToInt32(ctlModule.GetModuleSettings(ModuleId)[Parent_Tab]);
					}

					_parentTabId = parentTabId;
				}

				return _parentTabId.Value;
			}
		}

		// Minh Dam added: get the parent tab of the left menu
		private TabInfo _parentTab;
		public TabInfo ParentTab
		{
			get
			{
				if (_parentTab == null)
				{				
					if (ParentTabId > 0)
					{
						TabController ctlTab = new TabController();
						_parentTab = ctlTab.GetTab(ParentTabId);
					}
					else
					{
						if (PortalSettings.ActiveTab.BreadCrumbs.Count > ROOT_PARENT_TAB_LEVEL)
						{
							_parentTab = (TabInfo)PortalSettings.ActiveTab.BreadCrumbs[ROOT_PARENT_TAB_LEVEL];
						}
						else
						{
							_parentTab = (TabInfo)PortalSettings.ActiveTab.BreadCrumbs[0];
						}
					}
				}

				return _parentTab;
			}
		}

		#endregion

		#region Event Handlers

		/// -----------------------------------------------------------------------------
		/// <summary>
		/// Page_Load runs when the control is loaded
		/// </summary>
		/// <remarks>
		/// </remarks>
		/// <history>
		/// </history>
		/// -----------------------------------------------------------------------------
		protected void Page_Load(System.Object sender, System.EventArgs e)
		{
			try
			{
				LocalResourceFile = Localization.GetResourceFile(this, "List.ascx");

				ModuleController ctlModule = new ModuleController();

				//int parentTab = TabId;//Default value
				int parentTab = ParentTab.TabID;

				//if (ctlModule.GetModuleSettings(ModuleId)[Parent_Tab] != null && Convert.ToString(ctlModule.GetModuleSettings(ModuleId)[Parent_Tab]) != "")
				//{
				//	parentTab = Convert.ToInt32(ctlModule.GetModuleSettings(ModuleId)[Parent_Tab]);
				//}

				//// Minh Dam added: always set parentTab to top menu
				//if (parentTab == 0)
				//{
				//	parentTab = RootParentTab.TabID;
				//}

				DotNetNuke.Entities.Tabs.TabController ctlTab = new DotNetNuke.Entities.Tabs.TabController();
				TabInfo objParent = ctlTab.GetTab(parentTab);


				if ((ParentTabId != DotNetNuke.Common.Utilities.Null.NullInteger) && (objParent == null || !objParent.HasChildren))
				{
					return;
				}

				//Check include self
				bool includeSelf = false;
				if (ctlModule.GetModuleSettings(ModuleId)[Include_Self] != null && ctlModule.GetModuleSettings(ModuleId)[Include_Self] != "")
				{
					includeSelf = Convert.ToBoolean(ctlModule.GetModuleSettings(ModuleId)[Include_Self]);
				}

				//check include invisible
				bool includeInvisible = false;
				if (ctlModule.GetModuleSettings(ModuleId)[Include_Invisible] != null && ctlModule.GetModuleSettings(ModuleId)[Include_Invisible] != "")
				{
					includeInvisible = Convert.ToBoolean(ctlModule.GetModuleSettings(ModuleId)[Include_Invisible]);
				}

				//check recursive
				bool isRecursive = false;
				if (ctlModule.GetModuleSettings(ModuleId)[Recursive] != null && ctlModule.GetModuleSettings(ModuleId)[Recursive] != "")
				{
					isRecursive = Convert.ToBoolean(ctlModule.GetModuleSettings(ModuleId)[Recursive]);
				}

				//check display icon
				bool isDisplayIcon = false;
				if (ctlModule.GetModuleSettings(ModuleId)[DisplayIcon] != null && ctlModule.GetModuleSettings(ModuleId)[DisplayIcon] != "")
				{
					isDisplayIcon = Convert.ToBoolean(ctlModule.GetModuleSettings(ModuleId)[DisplayIcon]);
				}

				ArrayList arrTab = new ArrayList();

				if (isRecursive)
				{
						arrTab = GetChildPageList(parentTab,
							parentTab == DotNetNuke.Common.Utilities.Null.NullInteger ? -1 : objParent.Level,
							includeSelf, includeInvisible, isDisplayIcon);
				}
				else
				{
					ArrayList tabList = new ArrayList();
					if (parentTab == DotNetNuke.Common.Utilities.Null.NullInteger)//默认为根菜单
					{
						foreach (TabInfo tabInfo in ctlTab.GetTabs(PortalId))
						{
							if (tabInfo.Level == 0 && tabInfo.ParentId == -1)//找到第一层tab
							{
								tabList.Add(tabInfo);
							}
						}
					}
					else
					{
						tabList = ctlTab.GetTabsByParentId(parentTab);
					}
					foreach (TabInfo tabInfo in tabList)
					{
						if (PortalSecurity.IsInRoles(tabInfo.AuthorizedRoles) && (!tabInfo.IsDeleted) && (!tabInfo.DisableLink))
						{
							if (tabInfo.IsVisible || includeInvisible)
							{
								//不等于本页面或者等于本页面，但模块设置中显示本页面
								if (tabInfo.TabID != TabId || includeSelf)
								{
									TabInfo childTab = tabInfo.Clone();
									string iconUrl = "";
									if (isDisplayIcon)
									{
										if (string.IsNullOrEmpty(childTab.IconFile))
										{
											iconUrl = string.Format("<img src='{0}' border='0' width='16px' height='16px'/>", Page.ResolveUrl("~/images/icon_unknown_16px.gif"));
										}
										else
										{
											iconUrl = string.Format("<img src='{0}' border='0' width='16px' height='16px'/>", Page.ResolveUrl(childTab.IconFile));
										}
									}
									childTab.TabName = iconUrl + tabInfo.TabName;
									arrTab.Add(childTab);
								}
							}

						}
					}
				}
				if (arrTab.Count > 0)
				{
					// Minh Dam add: bind Repeater to data source
					rptSubTabList.DataSource = arrTab;
					rptSubTabList.DataBind();
				}
			}
			catch (Exception exc) //Module failed to load
			{
				Exceptions.ProcessModuleLoadException(this, exc);
			}

		}

		private ArrayList GetChildPageList(int parentTabId, int parentTabLevel, bool includeSelf, bool includeInvisible, bool isDisplayIcon)
		{
			ArrayList arrTab = new ArrayList();

			ArrayList tabList = new ArrayList();
			DotNetNuke.Entities.Tabs.TabController ctlTab = new DotNetNuke.Entities.Tabs.TabController();
			if (parentTabId == DotNetNuke.Common.Utilities.Null.NullInteger)//parenttabid为根菜单
			{
				foreach (TabInfo tabInfo in ctlTab.GetTabs(PortalId))
				{
					if (tabInfo.Level == 0 && tabInfo.ParentId == -1)//找到第一层tab list
					{
						tabList.Add(tabInfo);
					}
				}
			}
			else
			{
				tabList = ctlTab.GetTabsByParentId(parentTabId);//否则找到当前的子菜单 list
			}

			TabInfo objParent = new TabInfo();
			if (parentTabId != DotNetNuke.Common.Utilities.Null.NullInteger)
			{
				objParent=ctlTab.GetTab(parentTabId);
				if (objParent == null || !objParent.HasChildren)//递归到没有下级菜单，则返回
				{
					return arrTab;
				}
			}

			foreach (TabInfo tabInfo in tabList)
			{
				if (PortalSecurity.IsInRoles(tabInfo.AuthorizedRoles) && (!tabInfo.IsDeleted) && (!tabInfo.DisableLink))
				{
					if (tabInfo.IsVisible || includeInvisible)
					{
						//不等于本页面或者等于本页面，但模块设置中显示本页面
						if (tabInfo.TabID != TabId || includeSelf)
						{
							TabInfo childTab = tabInfo.Clone();
							//检查tab level的层次差距，大于2层以上才加childTabPrefix
							int levelDiff = tabInfo.Level - parentTabLevel;
							string prefix = "";
							for (int i = 2; i < levelDiff; i++)
							{
								//prefix += string.Format("<img src='{0}' border='0'/>", Page.ResolveUrl("~/desktopmodules/CrossChildPageList/images/line.gif"));
							}
							if (levelDiff > 1)
							{
								//prefix += string.Format("<img src='{0}' border='0'/>", Page.ResolveUrl("~/desktopmodules/CrossChildPageList/images/node.gif"));
							}

							string iconUrl = "";
							if (isDisplayIcon)
							{
								if (string.IsNullOrEmpty(childTab.IconFile))
								{
									iconUrl = string.Format("<img src='{0}' border='0' width='16px' height='16px'/>", Page.ResolveUrl("~/images/icon_unknown_16px.gif"));
								}
								else
								{
									iconUrl = string.Format("<img src='{0}' border='0' width='16px' height='16px'/>", Page.ResolveUrl(childTab.IconFile));
								}
							}
							childTab.TabName = prefix + iconUrl + tabInfo.TabName;
							arrTab.Add(childTab);

							//递归获取下一层次的array tab
							if (tabInfo.Level < ParentTab.Level + MAXIMUM_MENU_ITEM_DEEP) // Minh Dam added
							{ 
								ArrayList subTabArr = GetChildPageList(tabInfo.TabID, parentTabLevel, includeSelf, includeInvisible, isDisplayIcon);
								foreach (object subTabItem in subTabArr)
								{
									arrTab.Add(subTabItem);
								}
							}
						}
					}

				}

			}

			return arrTab;
		}

		#endregion


		private string[] _expandedClasses = new string[] { "blue", "green", "yellow", "red", "orange" };
		private int _currentIndex = 0;

		// Minh Dam added: render a tab when binding
		protected string RenderTabItem(TabInfo tabInfo)
		{
			string html = "";

			string expanded = "";
			string css = "";
			if (tabInfo.HasChildren)
			{
				if (tabInfo.Level - ParentTab.Level == 1)
				{
					var index = _currentIndex % _expandedClasses.Length;
					expanded = String.Format("<span class='expanded plusSign {0}'>&nbsp;</span>", _expandedClasses[index]);
					_currentIndex++;
				}
				else
				{
					expanded = "<span class='expanded plusSign'>&nbsp;</span>";
				}
				
				css = "hasChild";
			}

			int linkTabId;
			bool isInternalLink = String.IsNullOrEmpty(tabInfo.Url) || int.TryParse(tabInfo.Url, out linkTabId);			
			string linkTarget = isInternalLink ? "" : "_blank";
			string link = String.Format("<a href='{0}' target='{2}'>{1}</a>",
											isInternalLink || tabInfo.Url.Contains("FileID") ? DotNetNuke.Common.Globals.NavigateURL(tabInfo.TabID) : tabInfo.Url,
											Server.HtmlDecode(tabInfo.TabName),
											linkTarget);

			if (tabInfo.TabID == TabId) // Selected Tab
			{
                html += String.Format("<li class='menuLevel{0} selected {5}' tabId='{3}' parentTabId='{4}'>{1}{2}</li>",
										tabInfo.Level - ParentTab.Level,
										link,
										expanded,
										tabInfo.TabID,
										tabInfo.Level > (ParentTab.Level + 1) ? tabInfo.ParentId : 0,
										css);
			}
			else
			{
                html += String.Format("<li class='menuLevel{0} {5}' tabId='{3}' parentTabId='{4}'>{1}{2}</li>",
										tabInfo.Level - ParentTab.Level, 
										link,
										expanded,
										tabInfo.TabID,
										tabInfo.Level > (ParentTab.Level + 1) ? tabInfo.ParentId : 0,
										css);
			}

			return html;
		}
	}
}

