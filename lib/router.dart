import 'package:amazon_clone_tutorial/common/widgets/bottom_bar.dart';
import 'package:amazon_clone_tutorial/features/address/screens/address_screen.dart';
import 'package:amazon_clone_tutorial/features/admin/screens/add_product_screen.dart';
import 'package:amazon_clone_tutorial/features/auth/screens/auth_screen.dart';
import 'package:amazon_clone_tutorial/features/home/screens/category_deals_screen.dart';
import 'package:amazon_clone_tutorial/features/home/screens/home_screen.dart';
import 'package:amazon_clone_tutorial/features/order_details/screens/order_details.dart';
import 'package:amazon_clone_tutorial/features/product_details/screens/product_details_screen.dart';
import 'package:amazon_clone_tutorial/features/search/screens/search_screen.dart';
import 'package:amazon_clone_tutorial/models/order.dart';
import 'package:amazon_clone_tutorial/models/product.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const AuthScreen(),
      );
    // Home screen
    case HomeScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const HomeScreen(),
      );
    // Bottom Bar
    case BottomBar.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const BottomBar(),
      );
    // addproduct screen
    case AddProductScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const AddProductScreen(),
      );
    // Category deals screen
    case CategoryDealsScreen.routeName:
      var category = routeSettings.arguments as String;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => CategoryDealsScreen(
          category: category,
        ),
      );
    //
    case SearchScreen.routeName:
      var searchQuery = routeSettings.arguments as String;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => SearchScreen(
          searchQuery: searchQuery,
        ),
      );
    //
    case ProductDetailsScreen.routeName:
      var product = routeSettings.arguments as Product;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => ProductDetailsScreen(
          product: product,
        ),
      );
    //
    case AddressScreen.routeName:
      var totalAmount = routeSettings.arguments as String;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => AddressScreen(
          totalAmount: totalAmount,
        ),
      );
      case OrderDetailsScreen.routeName: 
      var order = routeSettings.arguments as Order;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => OrderDetailsScreen (
          order: order,
        ),
      );
    default:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const Scaffold(
          body: Center(child: Text('Screen does not exist')),
        ),
      );
  }
}
