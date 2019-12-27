# spfx-by-examples

SharePoint Framework examples
[doc](https://developer.microsoft.com/en-us/sharepoint/blogs/updated-sharepoint-framework-developer-training-package-december-2019/)

## 1. Getting Started

[doc](https://github.com/SharePoint/sp-dev-training-spfx-getting-started)

## 2. WebParts

[doc](https://github.com/SharePoint/sp-dev-training-spfx-web-parts)

- `yo @microsoft/sharepoint` and `npm i`
- or `yo @microsoft/sharepoint --skip-install` and `yarn init`
- `gulp serve` to run it locally
- `gulp serve --nobrowser` to run server locally and the open https://matiishyn.sharepoint.com/_layouts/15/Workbench.aspx
- https://developer.microsoft.com/en-us/fabric#/styles/icons icons for your WebPart
- `serveConfigurations` -> `pageUrl` to open Hosted Workbench automatically
- `DisplayMode`, `Environment`, `EnvironmentType`
- `Log.info`, `Log.warn`, `Log.error`, `Log.verbose`
- loading - `this.context.statusRenderer.displayLoadingIndicator(this.domElement, "message");` -> `.clearLoadingIndicator(this.domElement);`

## 3. Property Pane

[doc](https://github.com/SharePoint/sp-dev-training-spfx-webpart-proppane)

- default values in `*WebPart.manifest.json`
- native controls in [@microsoft/sp-webpart-base](https://docs.microsoft.com/en-us/javascript/api/sp-webpart-base?view=sp-typescript-latest#functions), [example](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/integrate-with-property-pane#property-pane-fields)
- additional controls from [sp-dev-fx-property-controls](https://sharepoint.github.io/sp-dev-fx-property-controls/)
- [PropertyFieldPeoplePicker control](https://sharepoint.github.io/sp-dev-fx-property-controls/controls/PropertyFieldPeoplePicker/)

## 4. SP Content

[doc](https://github.com/SharePoint/sp-dev-training-spfx-spcontent)

- [Using SPHttpClient to talk to SharePoint](https://github.com/SharePoint/sp-dev-training-spfx-spcontent/blob/master/Lab.md#exercise1)
- [CRUD with SharePoint Data](https://github.com/SharePoint/sp-dev-training-spfx-spcontent/blob/master/Lab.md#exercise-2-crud-with-sharepoint-data)
- [Using Mocks to Simulate SharePoint Data](https://github.com/SharePoint/sp-dev-training-spfx-spcontent/blob/master/Lab.md#exercise-3-using-mocks-to-simulate-sharepoint-data)

## 5. SPFx Extensions

[doc](https://github.com/SharePoint/sp-dev-training-spfx-extensions)

- [Introduction to Extensions & Application Customizer](https://github.com/SharePoint/sp-dev-training-spfx-extensions/blob/master/Lab.md#exercise-1-introduction-to-extensions--application-customizer)
- [Field Customizers](https://github.com/SharePoint/sp-dev-training-spfx-extensions/blob/master/Lab.md#exercise2)
- [List View Command Sets](https://github.com/SharePoint/sp-dev-training-spfx-extensions/blob/master/Lab.md#exercise3)

## 6. Microsoft Graph & 3rd Party APIs

[doc](https://github.com/SharePoint/sp-dev-training-spfx-graph-3rdpartyapis)

- [Calling Anonymous 3rd Party REST APIs](https://github.com/SharePoint/sp-dev-training-spfx-graph-3rdpartyapis/blob/master/Lab.md#exercise1)
- [Calling Azure AD Secured 3rd Party REST APIs](Calling Anonymous 3rd Party REST APIs
  Calling Azure AD Secured 3rd Party REST APIs
  Working with the Microsoft Graph)
- [Working with the Microsoft Graph](https://github.com/SharePoint/sp-dev-training-spfx-graph-3rdpartyapis/blob/master/Lab.md#exercise3)
