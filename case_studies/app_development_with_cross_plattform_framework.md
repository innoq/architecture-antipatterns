# App Development with a cross platform framework

## Description
When developing an App for an insurance company, the decision was made to build the app with a cross platform JavaScript framework.

## What is the system’s background?
The plan of the system was to build an app for Android and iOS. The app should be a representation of the companies website in the app stores. The plan was to use a JavaScript framework for cross platform development based on Cordova.

## What was the good idea?
The good idea was that the employees of the company would only have to learn how to develop in JavaScript. All the developers that were put on the task to develop the app were previously Java or COBOL developers. The point was to make them learn only one new programming language. Also the plan was that all developers could work on the same app while otherwise the company would have to set up separate development teams for iOS and Android.

## What were the bad consequences, why was everything bad?
When the app was planned, the goal was to recreate the functions that the company website provided to the customer, just as an app in the app stores. When development started it became clear very fast, that what was actually wanted was an app with many "native" features. The first thing that came up was the login for example. When on the website the user had to log in via username and password, in the app the user should be able to save the credentials and use fingerprint or face recognition for the login. When development continued, more and more features a user would expect from an app were wanted, features the website never had. Many of those features were using "native" functions of the underlying operating system on the mobile platform. These functions had wrappers in JavaScript in the cross platform framework. The problem was that the operating system api changed regularly and the open source cross platform framework would not be as fast in changing the wrapping code resulting in breaking functions in the app. 

## What happened, was there a turning or tipping point?

In the end employees from the company had to contribute to the open source cross platform framework to fix the needed functions. This resulted in them not only having to learn JavaScript but also parts of Swift / Objective C and in parts also Ruby wich was used by the cross platform framework for code generation.

## How was the situation resolved?

The situation was not resolved, the problem continued. The situation improved however due to the developers getting more and more firm with all the technologies. However the good idea never came to a conclusion.

## Which patterns were encountered?

* [Misapplied Genericity](../patterns/misapplied_genericity.md)

