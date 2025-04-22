import React, { useEffect, useState } from "react";
import { Redirect, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";

export default function InitialRoute() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAppLaunchStatus = async () => {
      const hasCompletedOnboarding = await AsyncStorage.getItem("hasLaunched");
      const isAuthenticated = auth.currentUser ? "true" : null; // Check Firebase auth state

      if (hasCompletedOnboarding === null) {
        setShouldShowOnboarding(true);
      } else if (isAuthenticated && hasCompletedOnboarding === "true") {
        router.push("/(tabs)/home");
      } else {
        router.replace("/(auth)/login");
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      verifyAppLaunchStatus();
    });

    return () => unsubscribe();
  }, [router]);

  return shouldShowOnboarding ? <Redirect href="/onboarding" /> : null;
}