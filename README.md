# Getting Started with React Template

This template has been created by using CRA. It includes React Query, React Hook Form, Typescript, SCSS and YUP validations. Main aim of this template is creating a strict, type-safe structure. It is using all benefits of typescript. 

# Folder Structure

Assets => Images, icons, svgs etc.<br/>
Components => React components<br/>
Config => Constant variables and Server side configs<br/>
Hooks => React Hooks<br/>
Navigator => Routes and route types<br/>
Services => Rest API paths and types<br/>
Stores => Global stores (Context API, Redux etc.)<br/>
Theme => Style customization, SASS structre and Material UI Customization<br/>
Utils => Helper methods<br/>
Validations => Form schemas and value types<br/>
Views => React components as routes (Website pages)<br/>

![alt text](https://i.ibb.co/xDg8njb/hierarchy.jpg)

# Assets

Section for images, videos, sounds and etc. media files.

# Components

Components of project are shelters here. There is a Button component for example structure.

```
// Button.tsx

import { FunctionComponent } from "react";
import "./Button.scss";

type Props = {};

const Button: FunctionComponent<Props> = () => {
  return <div></div>;
};

export default Button;
```

# Config

Constant variables for example Rest API path can be defined here. New variables can be added according to project requirments.

```
// ServiceConfig.ts

export const baseURL = "http://swapi.dev/api/";

export type pathURLStrings = "people/1/";

export const pathURls: { [key in string]: pathURLStrings } = {
  getPeople: "people/1/",
};
```

Above file, there are path URLs string array and PathURLs Object. They are being used on queries and mutations. In Services chapter, it will be examined deeply.

# Hooks

There are 3 hooks as default. useInterval, useModal, useOnClickOutside hooks. 

useInterval => Interval hooks which is completly suitable for React Lifecycles. <br/>
useModal => Modal manager hook with show, hide and isVisible states. <br/>
useOnClickOutside => Captures an click event which is pointed out of referenced element. <br/>

# Models

Get/Post requests' data types can be created in this folder. Example for result of getPerson data type.

 ```
 // GetPerson.ts
 
 type GetPersonData = {
  name: string;
};

export default GetPersonData;

```

And getPersonData type should be using with react query.

```
 // Home.tsx

 const { isLoading, error, data } = useQuery<GetPersonData>(
    "getPerson",
    getPersonQuery
  );
  
```

# Navigator

React-router-dom is defined here. Every route path is being managed from this folder.

```
// Navigator/index.tsx

import { routes } from "./routes";

const Navigator = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ component, exact, path }, index) => (
          <Route
            key={index}
            path={path}
            component={component}
            exact={exact || false}
          />
        ))}
      </Switch>
    </Router>
  );
};
```

```
// routes.ts

type PathType = "/" | "/login";
type RoutesType = { path: PathType } & RouteProps;

export const routes: RoutesType[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];

```

# Store

There is one custom store in template. It's powered by Context API and provider. Can be found on Store/AppContext. You can create new ones depending on project requirments.

# Theme

## Usage of Variables

Variable SCSS file has constraits within itself.

```
// _variables.scss

$white-color: #fcf5ed;
$dark-color: #402f2b;
$light-color: #e6d5c3;
$medium-color: #977978;
$alert-color: #cb492a;
$light-black-color: #706e72;
$black-color: #414042;
```

Variable module is a connector between SCSS and TSX files. You can define variables, which are being shared.

```
// _variables.module.scss

@import "variables";

:export {
  whiteColor: $white-color;
  darkColor: $dark-color;
  lightColor: $light-color;
  mediumColor: $medium-color;
  alertColor: $alert-color;
  lightBlackColor: $light-black-color;
  blackColor: $black-color;
}
```

Although there is variable.ts which has SASS variables as module.

```
// variables.ts

import themeVariables from "./scss/_variables.module.scss";

type ThemeVariables = {
  whiteColor: string;
  darkColor: string;
  lightColor: string;
  mediumColor: string;
  alertColor: string;
  lightBlackColor: string;
  blackColor: string;
};

export default themeVariables as ThemeVariables;
```

## Customization Material UI Template

You can customize MUI by using MaterialUITemplate. Its constants are based on theme colors whichs are exist on variables.

```
// MaterialUITheme.ts

import themeVariables from "./variables";

export const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: themeVariables.mediumColor,
    },
  },
});
```

## Mixins 

There are 5 mixins as initial. They manage responsive style properties. New mixins can be added here.

```
// _mixins.scss

@mixin tiny-device {
  @media (max-width: $tiny-device-width) {
    @content;
  }
}

@mixin small-device {
  @media (max-width: $small-device-width) {
    @content;
  }
}

@mixin regular-device {
  @media (max-width: $regular-device-width) {
    @content;
  }
}

@mixin big-device {
  @media (max-width: $big-device-width) {
    @content;
  }
}

@mixin large-device {
  @media (min-width: $large-device-width) {
    @content;
  }
}

```

## Component and Views(Containers) Styling

BEM method can be used on class naming. Index SASS file should be imported on Component and View SASS files.

```
@import "index.scss";

#login {
  .login-container{
    &-button{
    }
  }
}
```


