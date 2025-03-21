/*
 * Default text labels.
 */
const getTextLabels = () => ({
  body: {
    noMatch: 'Məlumat tapılmadı',
    toolTip: 'Sort',
  },
  pagination: {
    next: 'Next Page',
    previous: 'Previous Page',
    rowsPerPage: 'Sətirlərin sayı:',
    displayRows: '',
    jumpToPage: 'Jump to Page:',
  },
  toolbar: {
    search: 'Search',
    downloadCsv: 'Download CSV',
    print: 'Print',
    viewColumns: 'View Columns',
    filterTable: 'Filter Table',
  },
  filter: {
    all: 'All',
    title: 'FILTERS',
    reset: 'RESET',
  },
  viewColumns: {
    title: 'Show Columns',
    titleAria: 'Show/Hide Table Columns',
  },
  selectedRows: {
    text: 'row(s) selected',
    delete: 'Delete',
    deleteAria: 'Delete Selected Rows',
  },
});

export default getTextLabels;
