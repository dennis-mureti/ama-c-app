import 'package:flutter/material.dart';

class AddressBox extends StatelessWidget {
  const AddressBox({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 40,
      decoration: const BoxDecoration(
        gradient: LinearGradient(colors: [
          Color.fromARGB(255, 114, 226, 221),
          Color.fromARGB(255, 162, 236, 233),
        ], stops: [
          0.5,
          1.0
        ]),
      ),
      padding: const EdgeInsets.only(left: 10),
      child: Row(
        children: [
          const Icon(
            Icons.location_on_outlined,
            size: 20,
          ),
        ],
      ),
    );
  }
}
