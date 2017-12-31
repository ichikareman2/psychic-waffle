# kindOf 100DaysOfCode R1

## R1D1

### Topics:

- Proof of concept for multiple application in a single angular project that shares components. This is research for crm saas, so that there are separate applications for backend and frontend that shares some common services and/or components

### Progress:
- Was able to share components and services, but the build isn't as graceful as I'd like(there isn't a build-all command so I just added build all command in npm). To do this, `.angular-cli.json` needs to be changed to have multiple apps in its array. to run build or serve, run `ng build --app=0` or `ng build --app=frontend`.

### Thoughts:
- not sure but it seems angular doesn't want to share things accross apps?
- upon searches, there is a page that suggests using lazy load. [Link](https://github.com/angular/angular-cli/issues/3213)

### Link/s:
- [Multi application Angular project](./projs/MultiAppInOne)
- #### Other links
  - https://github.com/angular/angular-cli/wiki/stories-multiple-apps
  - https://yakovfain.com/2017/04/06/angular-cli-multiple-apps-in-the-same-project/

## R1D2

### Topics:

- Try making modular angular application to practice modules.

### Progress:

- Added 2 modules About and Home
- Added components to each and a service on About
- App component uses About's alert service

## Thoughts:

- Learned:
  - to **make service in module available** to all, add it to its containing module's **provider**, then add that module in the **imports** of the module you are going to add it in.
  - to **make component/directive available** to all, add it to **exports**(it should be in the **directives** as well). To use the component in another module, or the root module, add it to the **imports** of the module where you're going to use it in.

### Link/s:
- [Module test application](./projs/ModuleTest)
- #### Other links
  - https://angular.io/guide/ngmodule

