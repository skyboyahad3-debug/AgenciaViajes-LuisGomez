import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Alert, Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Button, Card, IconButton, Paragraph, Text, TextInput, Title } from 'react-native-paper';

const { width } = Dimensions.get('window');

const DESTINOS = [
  { id: '1', nombre: 'Maldivas', precio: '$85,000', imagen: 'https://images.unsplash.com/photo-1514282401447-916a2a088c6c?w=800', pais: 'Océano Índico' },
  { id: '2', nombre: 'París, Francia', precio: '$52,000', imagen: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800', pais: 'Europa' },
  { id: '3', nombre: 'Kioto, Japón', precio: '$65,000', imagen: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800', pais: 'Asia' },
  { id: '4', nombre: 'Nueva York, USA', precio: '$58,000', imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800', pais: 'América' },
  { id: '5', nombre: 'Santorini, Grecia', precio: '$72,000', imagen: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800', pais: 'Europa' },
];

export default function AgenciaAppPremium() {
  const [nombre, setNombre] = useState('');
  const [destinoSeleccionado, setDestinoSeleccionado] = useState('');

  const handleReservar = () => {
    if (!nombre || !destinoSeleccionado) {
      Alert.alert("Detalles requeridos", "Por favor, ingresa tu nombre y selecciona un destino.");
      return;
    }
    Alert.alert("¡Reservación Confirmada!", `Bienvenido al lujo, ${nombre}. Tu viaje a ${destinoSeleccionado} ha sido registrado.`);
    setNombre('');
    setDestinoSeleccionado('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000' }} 
        style={StyleSheet.absoluteFillObject}
        blurRadius={2}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <BlurView intensity={90} style={styles.header}>
          <Title style={styles.headerTitle}>Agencia LG - Luxury Travel</Title>
          <IconButton icon="crown" iconColor="#FFD700" size={30} /> 
        </BlurView>

        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Viaja como la Élite</Text>
          <Paragraph style={styles.heroSubtitle}>Descubre destinos que redefinen el lujo.</Paragraph>
        </View>

        <Title style={styles.sectionTitle}>Nuestra Colección</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
          {DESTINOS.map((item) => (
            <Card style={styles.destinosCard} key={item.id} onPress={() => setDestinoSeleccionado(item.nombre)}>
              <Card.Cover source={{ uri: item.imagen }} style={styles.cardImage} />
              <Card.Content style={styles.cardContent}>
                <Text style={styles.cardPais}>{item.pais}</Text>
                <Title style={styles.cardTitle}>{item.nombre}</Title>
                <Paragraph style={styles.precioText}>{item.precio} MXN</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>

        <BlurView intensity={70} style={styles.formCard}>
          <Title style={styles.formTitle}>Cotiza tu Experiencia</Title>
          <TextInput
            label="Nombre Completo"
            value={nombre}
            onChangeText={setNombre}
            mode="flat"
            style={styles.input}
            textColor="white"
            activeUnderlineColor="#FFD700"
          />
          <TextInput
            label="Destino"
            value={destinoSeleccionado}
            editable={false}
            mode="flat"
            style={styles.input}
            textColor="#FFD700"
            placeholder="Toca una tarjeta arriba"
          />
          <Button 
            mode="contained" 
            onPress={handleReservar} 
            style={styles.btn}
            labelStyle={{ fontSize: 18, color: '#121212', fontWeight: 'bold' }}
          >
            Reservar Ahora
          </Button>
        </BlurView>

        <View style={styles.footer}>
          <Text style={{ color: '#bbb' }}>Ing. Luis Antonio Gomez Lopez - TI41</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// --- ESTA ES LA PARTE QUE HACÍA FALTA ---
const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 15 },
  headerTitle: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  heroSection: { padding: 30, paddingBottom: 15 },
  heroTitle: { fontSize: 32, fontWeight: 'bold', color: 'white' },
  heroSubtitle: { color: '#ccc', fontSize: 16 },
  sectionTitle: { marginLeft: 25, marginBottom: 15, fontWeight: 'bold', color: 'white', fontSize: 22 },
  destinosCard: { width: width * 0.7, marginRight: 20, borderRadius: 20, overflow: 'hidden', backgroundColor: '#fff' },
  cardImage: { height: 180 },
  cardContent: { padding: 15 },
  cardPais: { color: 'gray', fontSize: 12, textTransform: 'uppercase' },
  cardTitle: { fontSize: 20, fontWeight: 'bold' },
  precioText: { color: '#2e7d32', fontWeight: 'bold', fontSize: 18 },
  formCard: { margin: 25, borderRadius: 25, padding: 25, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)', overflow: 'hidden' },
  formTitle: { color: 'white', marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 20, backgroundColor: 'transparent' },
  btn: { marginTop: 15, backgroundColor: '#FFD700', borderRadius: 15 },
  footer: { padding: 30, alignItems: 'center' }
});