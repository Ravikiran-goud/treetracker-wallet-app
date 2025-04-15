export default {
    name: "TreeTracker Wallet",
    slug: "treetracker-wallet-app",
    version: "1.0.0",
    android: {
      package: "org.greenstand.treetrackerwallet",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON || "./google-services.json",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.example.app",
    },
    plugins: ["expo-router", "expo-font"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "13087f02-09f4-4a04-9b96-c85a6aeb48ce",
      },
    },
  };