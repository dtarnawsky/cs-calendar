
# Calendar Options for Capacitor

## [cordova-plugin-calendar](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin)
This plugin has an open PR for iOS 17 support [here](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin/pull/570). It has been open a month. A fixed version was released to [npm](https://www.npmjs.com/package/cordova-plugin-calendar-ios-fix).

## [capacitor-calendar](https://github.com/Fir3st/capacitor-calendar)
This plugin is missing the iOS 17 permission fix (mentioned in this [outstanding issue](https://github.com/Fir3st/capacitor-calendar/issues/25)). There is no PR for this, or patched package and the Capacitor project has a peer dependency of Capacitor 3.

## Web Options
You can download an ICS file: https://github.com/nwcell/ics.js
There is a snippet to generate a file [here](https://stackoverflow.com/a/77079292), download it with @capacitor/filesystem and use [@capawesome-team/capacitor-file-opener](https://github.com/capawesome-team/capacitor-plugins/tree/main/packages/file-opener) to open it.

## Summary

`cordova-plugin-calendar` provides the best support at the moment.
Installing:

```bash
npm i cordova-plugin-calendar-ios-fix
```

On Android add the following permissions to `androidmanifest.xml`:
```xml
<uses-permission android:name="android.permission.READ_CALENDAR"/>
<uses-permission android:name="android.permission.WRITE_CALENDAR"/>
```