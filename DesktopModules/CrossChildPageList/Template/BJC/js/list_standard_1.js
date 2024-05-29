// Put the menuLevel2 inside menuLevel1
var ChildPageList = {
	init: function () {
		var $divSubNavLeftMenu = $('.subNavLeftMenu');

		// Hide all items on level 2 and level 3
		$divSubNavLeftMenu.find('.menuLevel2').hide();
		$divSubNavLeftMenu.find('.menuLevel3').hide();

		// Restructure the DOM to separate parent and children items
		var $menuLevel2 = $divSubNavLeftMenu.find('.menuLevel2')
		$menuLevel2.each(function (index) {
			var $childItems = ChildPageList.getChildItems($(this));
			$(this).append($childItems);
		});

		var $menuLevel1 = $divSubNavLeftMenu.find('.menuLevel1')
		$menuLevel1.each(function (index) {
			var $childItems = ChildPageList.getChildItems($(this));
			$(this).append($childItems);
		});

		// Add click event for plus sign to expand/collapse sub-items
		var $expendeds = $divSubNavLeftMenu.find('.expanded');
		$expendeds.live('click', function () {
			var $li = $(this).closest('li');
			var $childItems = ChildPageList.getChildItems($li);

			if ($(this).hasClass('plusSign')) {
				ChildPageList.expandChildItems($li);
			}
			else {
				ChildPageList.collapseChildItems($li);
			}
		});

		$expendeds.each(function () {
			var $li = $(this).closest('li');
			var $childItems = ChildPageList.getChildItems($li);
			if ($childItems.length == 0) {
				$(this).remove();
			}
		});

		// Highlight parent, grandparent,... of selected items
		var $selectedItem = $divSubNavLeftMenu.find('li.selected');
		ChildPageList.traverseParentsOfSelectedItem($selectedItem);
		ChildPageList.expandChildItems($selectedItem, 0);

		// Remove invisible items
		$divSubNavLeftMenu.find('li.invisible').remove();

		// Update the collapse/expand status
		$menuLevel1.each(function (index) {
			var $childItems = ChildPageList.getChildItems($(this));
			if ($childItems.length > 0) {
				$(this).addClass('hasChild');
			}
			else {
				$(this).removeClass('hasChild');
				$(this).find('.expanded').remove();
			}
		});

		$menuLevel2.each(function (index) {
			var $childItems = ChildPageList.getChildItems($(this));
			if ($childItems.length > 0) {
				$(this).addClass('hasChild');
			}
			else {
				$(this).removeClass('hasChild');
				$(this).find('.expanded').remove();
			}
		});
	},

	getChildItems: function ($li) {
		var tabId = $li.attr('tabId');
		var $childItems = $li.parent().find('li[parentTabId=' + tabId + ']');
		return $childItems;
	},

	// Highlight direct parent of selected item
	traverseParentsOfSelectedItem: function ($selectedItem) {
		var parentTabId = $selectedItem.attr('parentTabId');
		var $parentItem = $selectedItem.parent();
		//$parentItem.addClass('parentSelected');
		if ($selectedItem.hasClass('invisible')) {
			$parentItem.addClass('selected');
		}

		if ($parentItem.is('li')) {
			//$parentItem.find('span.expanded').click();
			this.expandChildItems($parentItem, 0);
			if (parentTabId > 0) {
				ChildPageList.traverseParentsOfSelectedItem($parentItem);
			}
		}
	},

	// Expand all direct child items of a parent item
	expandChildItems: function ($parentItem, duration) {
		if (duration === undefined || duration === null)
			duration = 500;

		var tabId = $parentItem.attr('tabId');
		var $childItems = $parentItem.parent().find('li[parentTabId=' + tabId + ']');
		var $expanded = $parentItem.find('> .expanded');
		$expanded.removeClass('plusSign minusSign').addClass('minusSign');
		$parentItem.addClass('expand');
		//$expanded.height(30);
		$childItems.slideDown(duration, function () {
			//$expanded.height(40);
			$(this).css("overflow", "inherit");
		});
	},

	// Collapse all direct child items of a parent item
	collapseChildItems: function ($parentItem, level, duration) {
		if (duration === undefined || duration === null)
			duration = 500;

		if (level === undefined || level === null)
			level = 0;

		var tabId = $parentItem.attr('tabId');
		var $childItems = $parentItem.parent().find('li[parentTabId=' + tabId + ']');
		var $expanded = $parentItem.find('> .expanded');
		if (level == 0) {
			$expanded.removeClass('plusSign minusSign').addClass('plusSign'); ;
		}

		$parentItem.removeClass('expand');
		//$expanded.height(20);
		if ($childItems.length > 0) {
			$childItems.each(function () {
				$(this).slideUp(duration, function () {
					ChildPageList.collapseChildItems($(this), level + 1);
				});
			});
		}
		else {
			//$expanded.height(40);
		}
	}
};