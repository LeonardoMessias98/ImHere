import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";
import { IParticipant } from "../Participant";

interface IAddParticipantProps {
  onAddParticipant: (participant: IParticipant) => void;
}

const AddParticipant: React.FC<IAddParticipantProps> = ({
  onAddParticipant,
}) => {
  const [name, setName] = useState("");

  const handleAddPartcipant = () => {
    if (onAddParticipant && name) {
      onAddParticipant({ name });
      cleanInput();
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const cleanInput = () => {
    setName("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6b6b6b"}
        value={name}
        onChangeText={handleNameChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddPartcipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddParticipant;
