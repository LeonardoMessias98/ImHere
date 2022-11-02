import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export type IParticipant = {
  name: string;
};

interface IParticipantProps extends IParticipant {
  onRemove: (name: string) => void;
}

const Participant: React.FC<IParticipantProps> = ({ name, onRemove }) => {
  const handleRemove = () => {
    if (onRemove) onRemove(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participant;
