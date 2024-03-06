angular.module('productCatalogApp', [])
  .controller('ProductCatalogController', function() {
    var vm = this;

    vm.products = [
      { name: 'Product A', category: 'Category 1', price: 50, features: ['Feature 1', 'Feature 2'] },
      { name: 'Product B', category: 'Category 2', price: 100, features: ['Feature 1', 'Feature 3'] },
      { name: 'Product C', category: 'Category 1', price: 75, features: ['Feature 2', 'Feature 3'] },
      { name: 'Product D', category: 'Category 3', price: 120, features: ['Feature 1', 'Feature 4'] },
      { name: 'Product E', category: 'Category 2', price: 90, features: ['Feature 2', 'Feature 4'] }
    ];

    vm.categories = ['Category 1', 'Category 2', 'Category 3'];
    vm.features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'];

    vm.selectedCategory = '';
    vm.selectedFeature = '';

    vm.filteredProducts = vm.products;

    vm.filterProducts = function() {
      vm.filteredProducts = vm.products.filter(function(product) {
        return (!vm.selectedCategory || product.category === vm.selectedCategory) &&
               (!vm.selectedFeature || product.features.includes(vm.selectedFeature));
      });
    };
  });
