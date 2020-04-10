import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { View, Text, Image, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();

  const messageDefault = 'Olá APAD, estou entrando em contato, pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$120,00';

  const navigatioBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    MailComposer.composeAsync({
        subject: 'Herói do caso: Cadelinha atropelada',
        recipients: ['willianpcastro@hotmail.com'],
        body:messageDefault
    });
  };

  const sendWhatsapp = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigatioBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso: </Text>
        <Text style={styles.incidentValue}>Cadela atropelada</Text>

        <Text style={styles.incidentProperty}>Valor: </Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato.</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
