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

