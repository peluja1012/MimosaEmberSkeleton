MimosaEmberSkeleton
===================

A skeleton for Ember apps

Defeature
=========

This example uses the `mimosa-defeature` module to feature flag and remove features from builds. The examples defines two features: 'posts-edit' and 'about'. If you run the application without specifying a `mimosa` profile, these two features will be included in the app by default. If your run mimosa with the 'app_no_edit' profile (`mimosa watch -s -P app_no_edit`), all the code related to editing posts will be removed from the app when you `watch` or `build`. Similarly when you run mimosa with the 'app_no_about' profile (mimosa watch -s -P app_no_about), all the code related to the about page will be removed.