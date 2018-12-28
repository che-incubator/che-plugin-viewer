import CatalogC from './pages/catalogC/catalogC';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-bell',
    title: 'Plugins List',
    to: '/plugins',
    component: CatalogC
  }
];

export { baseName, routes };
