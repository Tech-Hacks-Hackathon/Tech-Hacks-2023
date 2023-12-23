// ignore_for_file: use_build_context_synchronously, file_names

import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'LoginPage.dart';

class ViewProfile extends StatelessWidget {
  const ViewProfile({super.key});
  @override
  Widget build(BuildContext context) {
    User? user = FirebaseAuth.instance.currentUser;

    if (user == null) {
      // Handle the case where the user is not signed in
      return const Drawer();
    }

    return Drawer(
      child: FutureBuilder<DocumentSnapshot>(
        future:
        FirebaseFirestore.instance.collection('users').doc(user.uid).get(),
        builder:
            (BuildContext context, AsyncSnapshot<DocumentSnapshot> snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            // While the document is being fetched, show a loading indicator
            return const CircularProgressIndicator();
          }

          if (snapshot.hasError) {
            // Handle any errors that occurred while fetching the document
            return Text('Error: ${snapshot.error}');
          }

          if (!snapshot.hasData || !snapshot.data!.exists) {
            // Handle the case where the user document does not exist
            return const Drawer();
          }

          if (snapshot.hasData && snapshot.data!.exists) {
            var userData = snapshot.data!.data() as Map<String, dynamic>;
            var name = userData['name'] as String;
            var email = userData['email'] as String;
            var role = userData['role'] as String;
            var githubProfile= userData['githubProfile'] as String;
            var contactNumber = userData['contactNumber'] as String;





            /*
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Profile"),
        backgroundColor: Colors.grey[300],
      ),
    );
  }
  }
  */
            return Scaffold(
              appBar: AppBar(
                title: const Text('User Profile'),
              ),
              body: SingleChildScrollView(child:
              Center(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      CircleAvatar(
                        radius: 50,
                        child: ClipOval(
                          child: Image.asset(
                            'assets/images/pp.jpg',
                            fit: BoxFit.cover,
                            height: double.infinity,
                            width: double.infinity,
                          ),
                        ),

                      ),
                      const SizedBox(height: 30),
                      Text(name,style: const TextStyle(fontSize: 20),
                      ),
                      const SizedBox(height: 15),
                      Text(role,style: const TextStyle(fontSize: 16),
                      ),
                      const SizedBox(height: 15),
                      Text(email,style: const TextStyle(fontSize: 16),
                      ),
                      const SizedBox(height: 15),
                      Text(contactNumber,style: const TextStyle(fontSize: 16),
                      ),
                      const SizedBox(height: 15),
                      Text(githubProfile,style: const TextStyle(fontSize: 16),
                      ),
                      const SizedBox(height: 20),
                      const SizedBox(height: 30),
                      ElevatedButton(
                        onPressed: () {
                          logout(context);
                          // Add any additional functionality or navigation here
                        },
                        child: const Text('Sign Out'),
                      ),
                    ]),
              ),
              ),
            );
          }
          return Container();
        },
      ),
    );
  }

  Future<void> logout(BuildContext context) async
  {
    const CircularProgressIndicator();
    await FirebaseAuth.instance.signOut();
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => LoginPage(),
      ),
    );
  }
}