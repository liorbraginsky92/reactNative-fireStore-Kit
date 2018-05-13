 <!--
@Author:            Osman Goni Nahid
@Date:              2017-13-12T02:15:00+06:00
@Email:             osman.goni@ekkbaz.com
@Project:           Ekkbaz
@Filename:          README.md
@Last modified by:  Osman Goni Nahid
@Contributors:      [Osman Goni Nahid, Saiful Bashar, Sabbir Ahmed, Musabbir Tuhin, Oskar Ahonen]
@Last modified time: 2017-13-12T02:15:00+06:00
-->


## Getting Started

The repo is for React Native Ekkbaz Mobile solution

  1.Clone the repo
  2.cd to project root folder
  3.run npm install

  ============================================
  *STEPS FOR GENERATING ANDROID RELEASE BUILD*
  ============================================

  *Step 1:*
  =>Clean build from Android studio or cd android/ && ./gradlew clean

  *Step 2:*
  =>run command in RN root project to copy assists in resources

  react-native bundle --platform android --dev false --entry-file .\index.js --bundle-output .\android\app\src\main\assets\index.android.bundle --assets-dest .\android\app\src\main\res\

  *Step 3:*
  =>change react-native-maps/build.gradle to match firebase version as follows:

  compile "com.google.android.gms:play-services-base:11.4.2"

  compile "com.google.android.gms:play-services-maps:11.4.2"

  *Step 4:*
  =>grade clean
  cd android/ && ./gradlew clean

  *Step 5:*
  =>build gradlew with info
  ./gradlew build --info

  if you get lint errors and you don't want to keep on debugging them, you can run the above command excluding the lint task i.e.  ./gradlew build --info -x lint

  *Step 6:*
  =>generate release build
  ./gradlew assembleRelease
  =>Install release build on device
  react-native run-android --configuration=release

---

============================================
*STEPS FOR CONTRIBUTE*
============================================
  1. Clone the repo
  2. `cd` to project root folder
  3. `git checkout develop`
  4. `git fetch --all && git pull`
  5. `git checkout -b your-branch-name`

### Before push your worksÂ

Get last updates from develop and then push your-code to your branch
  `git pull origin develop`


## Understanding the File Structure

- `/android` - The native Android stuff
- `/ios` - The native iOS stuff
- `/app` - Contains the full React Native App codebase
  - `/config` -
  - `/lib` -
  - `/modules` -
  - `/reducers` -
  - `/route` -
  - `/store` -

  /*example:
  - `/components` - 'Dumb-components' / presentational.
  - `/constants` - App-wide variables and config
  - `/containers` - 'Smart-components' / the business logic.
  - `/images` - Self explanatory right?
  - `/lib` - Utils, custom libraries, functions
  - `/navigation`- Routes - wire up the router with any & all screens.
  - `/redux` - Redux Reducers & Actions grouped by type.
  - `/theme` - Theme specific styles and variables*/
