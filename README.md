# spfx-by-examples

SharePoint Framework examples

## 1. Getting Started

https://github.com/SharePoint/sp-dev-training-spfx-getting-started

## 2. WebParts

https://github.com/SharePoint/sp-dev-training-spfx-web-parts

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

https://github.com/SharePoint/sp-dev-training-spfx-webpart-proppane

- default values in `*WebPart.manifest.json`
- native controls in @microsoft/sp-webpart-base (https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/integrate-with-property-pane#property-pane-fields, https://docs.microsoft.com/en-us/javascript/api/sp-webpart-base?view=sp-typescript-latest#functions)
- additional controls from https://sharepoint.github.io/sp-dev-fx-property-controls/
- [PropertyFieldPeoplePicker control](https://sharepoint.github.io/sp-dev-fx-property-controls/controls/PropertyFieldPeoplePicker/)

## 4. SP Content

https://github.com/SharePoint/sp-dev-training-spfx-spcontent

- Using SPHttpClient to talk to SharePoint
  - test
- CRUD with SharePoint Data
- Using Mocks to Simulate SharePoint Data
