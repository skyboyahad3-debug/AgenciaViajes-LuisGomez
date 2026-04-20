import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
// Ruta corregida para cuando el archivo está en la misma carpeta que src
import { initDB } from './src/database/db';

export default function RootLayout() {
  useEffect(() => {
    initDB().catch(err => console.log("Error DB:", err));
  }, []);

  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}