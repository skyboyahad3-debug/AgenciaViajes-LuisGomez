import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { obtenerReservaciones } from './src/database/db';

interface Reservacion { id: number; cliente: string; destino: string; fecha: string; }

export default function TabTwoScreen() {
  const [reservas, setReservas] = useState<Reservacion[]>([]);

  useFocusEffect(useCallback(() => {
    obtenerReservaciones().then(datos => setReservas(datos as Reservacion[]));
  }, []));

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header><Appbar.Content title="Mis Viajes" /></Appbar.Header>
      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item title={item.destino} description={`${item.cliente} - ${item.fecha}`} left={p => <List.Icon {...p} icon="check" />} />
        )}
      />
    </View>
  );
}