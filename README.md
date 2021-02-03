# React Native Template

hola!

# After creating RN project

## react-native-vector-icons

```
npx react-native link react-native-vector-icons
```

## enable hermes engine

https://reactnative.dev/docs/hermes

## react-native-config

https://github.com/luggit/react-native-config

on your android/app/build.gradle, add the following:

```
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

## Authentication

set authentication properly
