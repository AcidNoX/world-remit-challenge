import { queryClient } from "query/query-client";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";
import { HomeScreen } from "screens/HomeScreen";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
