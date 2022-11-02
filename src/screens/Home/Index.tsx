import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AddParticipant from "../../components/AddParticipant";
import Participant, { IParticipant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<IParticipant[]>([]);

  const handleParticipantAdd = (participant: IParticipant) => {
    if (participants.findIndex((p) => p.name === participant.name) > -1) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com o mesmo nome"
      );
    }

    setParticipants((previousState) => [participant, ...previousState]);
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          const filteredParticipants = participants.filter(
            (participant) => participant.name !== name
          );

          setParticipants([...filteredParticipants]);

          Alert.alert("Deletado");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <AddParticipant onAddParticipant={handleParticipantAdd} />

      {participants.length > 0 ? (
        <ScrollView>
          {participants.map((participant, index) => (
            <Participant
              {...participant}
              key={index}
              onRemove={handleRemoveParticipant}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.listEmptyText}>
          Ninguém chegou ainda ? adicione participantes a sua lista de presença
        </Text>
      )}
    </View>
  );
}
