import React, { useRef, memo, useMemo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { List, ListItemButton as ListItem } from "@mui/material";
import { SiteRoute } from "../../../../routes/types";

interface MenuItemProps {
  item: SiteRoute;
  currentUrl: string;
  parentItem?: SiteRoute;
  userRole?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, currentUrl, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accessRoles = useMemo(() => item.accessRoles ?? [], [item.accessRoles]);
  const hasChildren = item.children.length > 0;

  const isActive = useMemo(() => {
    const isMenuItemActive = (menuItem: SiteRoute): boolean => {
      const menuItemPath = menuItem.getPath({});
  
      if (!menuItemPath) return false;
  
      if (menuItem.children.length > 0) {
        return (
          currentUrl === menuItemPath || 
          currentUrl.startsWith(menuItemPath + "/") || 
          menuItem.children.some(isMenuItemActive)
        );
      }
  
      return currentUrl === menuItemPath;
    };
  
    return isMenuItemActive(item);
  }, [currentUrl, item]);

  const toggleMenu = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (hasChildren) setIsOpen((prev) => !prev);
    },
    [hasChildren]
  );

  if ((userRole && accessRoles.length > 0 && !accessRoles.includes(userRole)) || !item.showInMenu) {
    return null;
  }

  return (
    <ListItem
      component="li"
      disableGutters
      disableTouchRipple={isOpen}
      selected={isActive}
      className={clsx("asideMenuItem", {
        asideMenuHasSubmenu: hasChildren,
        open: isOpen && hasChildren,
        active: isActive && !hasChildren,
        iconOnly: item["icon-only"] ?? false,
      })}
    >
      {hasChildren ? (
        <>
          <div className="menulink" onClick={toggleMenu}>
            <MenuItemText item={item} />
          </div>
          <MenuSubmenu item={item} currentUrl={currentUrl} />
        </>
      ) : (
        <Link to={item.getPath({})} className="menulink">
          <MenuItemText item={item} />
        </Link>
      )}
    </ListItem>
  );
};

interface MenuSubmenuProps {
  item: SiteRoute;
  currentUrl: string;
}

const MenuSubmenu: React.FC<MenuSubmenuProps> = memo(({ item, currentUrl }) => (
  <List className="asideSubmenu">
    {item.children.map((child) => (
      <MenuItem key={child.getPath({})} item={child} parentItem={item} currentUrl={currentUrl} />
    ))}
  </List>
));

const MenuItemText: React.FC<{ item: SiteRoute }> = ({ item }) => (
  <>
    {item.iconName ? <i className={`asideMenuIcon fad ${item.iconName}`} /> : <i className="asideDot"></i>}
    <span className="asideTitle">{item.title}</span>
    {item.children.length > 0 && <i className="far fa-chevron-right iconArrow" />}
  </>
);

export default memo(MenuItem);
