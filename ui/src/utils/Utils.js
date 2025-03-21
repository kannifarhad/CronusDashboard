const MENU_KEY = 'menuShow';

export const getMenuShow = () => {
  if (window.localStorage.getItem(MENU_KEY)) {
      return window.localStorage.getItem(MENU_KEY) === "false" ? false : true;
  }
  setMenuShow(true);
  return true;
}

export const setMenuShow = (status) => {
  window.localStorage.setItem(MENU_KEY, status);
}


export function removeCSSClass(ele, cls) {
  const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  ele.className = ele.className.replace(reg, ' ');
}

export function addCSSClass(ele, cls) {
  ele.classList.add(cls);
}

// export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
export const toAbsoluteUrl = (pathname) => pathname;

export const convertDate = (dateString) => {
  var mydate = new Date(dateString);
  return `${mydate.toLocaleDateString('en-GB')} ${mydate.toLocaleTimeString('en-GB')}`;
};

export const convertDateAndTime = (dateString) => {
  var mydate = new Date(dateString);
  return `${mydate.toLocaleDateString('en-GB')} ${mydate.toLocaleTimeString('en-GB')}`;
};

export const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return '0 Bytes';
  if (bytes === undefined) return '';
  var k = 1024,
    dm = decimals <= 0 ? 0 : decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const searchTree = (items, value) => {
  let foundValue;

  // Search surface level of items
  for (let item of items) {
    if (item.id === value) {
      foundValue = item;
      break;
    }
  }

  // If no match was found, then try searching within nested items
  if (typeof foundValue === 'undefined') {
    for (let item of items) {
      if (item.children && item.children.length > 0) {
        foundValue = searchTree(item.children, value);
      }
    }
  }
  return foundValue;
};

export const svgToXml = (imagePath, imgclassName, imgId) => {
  fetch(imagePath)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(text, 'text/xml');

      // Get the SVG tag, ignore the rest
      var svg = xmlDoc.getElementsByTagName('svg')[0];

      // Add replaced image's classes to the new SVG
      if (typeof imgclassName !== 'undefined') {
        svg.setAttribute('class', imgclassName + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      svg.removeAttribute('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
        svg.setAttribute(
          'viewBox',
          '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width')
        );
      }
      return svg;
    });
};
