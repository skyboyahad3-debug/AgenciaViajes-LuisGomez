import React from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Appbar, Avatar, Button, Card, Text } from 'react-native-paper';
import { agregarReservacion } from './src/database/db';

export default function HomeScreen() {
  const destinos = [
    { id: 1, nombre: 'Cancún, México', precio: '$12,500', img: 'https://picsum.photos/700' },
    { id: 2, nombre: 'París, Francia', precio: '$35,000', img: 'https://picsum.photos/701' },
    { id: 3, nombre: 'Tokio, Japón', precio: '$42,000', img: 'https://picsum.photos/702' },
  ];

  const handleReservar = async (destinoNombre: string) => {
    const fecha = new Date().toLocaleDateString();
    await agregarReservacion("Luis Gomez", destinoNombre, fecha);
    Alert.alert("¡Éxito!", `Viaje a ${destinoNombre} guardado.`);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header><Appbar.Content title="Agencia GoTravel" /></Appbar.Header>
      <ScrollView style={{ padding: 15 }}>
        <Text variant="headlineSmall">¡Hola, Luis! ✈️</Text>
        {destinos.map((d) => (
          <Card key={d.id} style={{ marginBottom: 15 }}>
            <Card.Cover source={{ uri: d.img }} />
            <Card.Title title={d.nombre} subtitle={`Desde ${d.precio}`} left={(p) => <Avatar.Icon {...p} icon="airplane" />} />
            <Card.Actions><Button mode="contained" onPress={() => handleReservar(d.nombre)}>Reservar</Button></Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}