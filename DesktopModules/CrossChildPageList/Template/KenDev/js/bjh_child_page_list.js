﻿var ChildPageList = {
	init: function () {
		var $divSubNavLeftMenu = $('.subNavLeftMenu');

		// Hide all items on level 2 and level 3, level 4
		$divSubNavLeftMenu.find('.menuLevel2').hide();
		$divSubNavLeftMenu.find('.menuLevel3').hide();
		$divSubNavLeftMenu.find('.menuLevel4').hide()

		// Add click event for plus sign to expand/collapse sub-items
		var $expendeds = $divSubNavLeftMenu.find('.expanded');
		$expendeds.on('click', function () {
			var $li = $(this).closest('li');
			var tabId = $li.attr('tabId');
			var $subItems = $li.parent().find('li[parentTabId=' + tabId + ']');

			if ($(this).hasClass('plusSign')) {
				ChildPageList.expandChildrenItems($li);
			}
			else {
				ChildPageList.collapseChildrenItems($li);
			}
		});

		$expendeds.each(function () {
			var $li = $(this).closest('li');
			var tabId = $li.attr('tabId');
			var $subItems = $li.parent().find('li[parentTabId=' + tabId + ']');
			if ($subItems.length == 0) {
				$(this).remove();
			}
		});

		// Highlight parent, grandparent,... of selected items
		var $selectedItem = $divSubNavLeftMenu.find('.selected');
		var $rootParentItem = ChildPageList.traverseParentsOfSelectedItem($selectedItem);
		ChildPageList.expandChildrenItems($rootParentItem, 0, true);

	    // Expand all children of open new window links
		$divSubNavLeftMenu.find("a[target='_blank']").each(function () {
		    var $li = $(this).closest("li");
		    ChildPageList.expandChildrenItems($li, 0, true);
		});
	},

	// Highlight direct parent of selected item
	traverseParentsOfSelectedItem: function ($selectedItem) {
		var parentTabId = $selectedItem.attr('parentTabId');
		var $parentItem = $selectedItem.parent().children('[tabId=' + parentTabId + ']');
		$parentItem.addClass('parentSelected');
		this.expandChildrenItems($parentItem, 0);
		if (parentTabId > 0) {
			return ChildPageList.traverseParentsOfSelectedItem($parentItem);
		}
		else {
			return $selectedItem;
		}
	},

	// Expand all direct children items of a parent item
	expandChildrenItems: function ($parentItem, duration, recursive) {
		recursive = recursive || false;
		if (duration === undefined && duration === null)
			duration = 200;

		var tabId = $parentItem.attr('tabId');
		var $childrenItems = $parentItem.parent().find('li[parentTabId=' + tabId + ']');
		if ($childrenItems.length > 0) {
			$parentItem.find('.expanded').removeClass('plusSign minusSign').addClass('minusSign');
			$parentItem.addClass('expand');
			$childrenItems.slideDown(duration);

			if (recursive) {
				$childrenItems.each(function () {
					ChildPageList.expandChildrenItems($(this), duration);
				});
			}
		}
	},

	// Collapse all direct children items of a parent item
	collapseChildrenItems: function ($parentItem, level, duration) {
		if (duration === undefined && duration === null)
			duration = 200;

		var tabId = $parentItem.attr('tabId');
		var $childrenItems = $parentItem.parent().find('li[parentTabId=' + tabId + ']');
		$parentItem.find('.expanded').removeClass('plusSign minusSign').addClass('plusSign'); ;
		$parentItem.removeClass('expand');
		$childrenItems.each(function () {
			$(this).slideUp(duration);
			if (level == 0) {
				//$(this).attr('state', 'hide');
			}

			ChildPageList.collapseChildrenItems($(this), level + 1);
		});
	}
};