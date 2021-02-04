# React Native Template

hola!

default settings:

1. react navigation
2. redux and redux-thunk
3. react native elements
4. hermes engine is enabled
5. react-native-config
6. react-native-vector-icons

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
