# Project Overview

In this project a web-based application that reads RSS feeds was given to me .
The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Using Jasmine to write a number of tests against a pre-existing application.

# Testing Strategy
Testing go through 4 stages:

* The Fist suite -
    Tests allFeeds variable and object and make sure they have been defined and not empty.

* The Second suite -
    The menu element is hidden by default and ensures the menu changes visibility when the menu icon is clicked.

* The Third suite -
    a test the loadFeed function (asynchronous function) when it call and done work a single .entry element within the .feed container.

 * The Fourth suite -
    test and ensures when a new feed is loaded by the loadFeed function that the content actually changes.
