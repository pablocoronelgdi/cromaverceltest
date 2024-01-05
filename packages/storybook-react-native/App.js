import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Button, Icon, SwitchIcon, Checkbox } from "@cromaui/react-native/";
import { useState } from "react";

function App() {
  const [value, setvalue] = useState(true);

  return (
    <View style={styles.container}>
      <Icon name="circle" size="medium" />
      <Button variant="outlined" color="success">
        Macro
      </Button>
      <Button variant="outlined">Macro</Button>
      <Button
        variant="filled"
        color="primary"
        iconName="circle"
        iconPosition="right"
      >
        Macro
      </Button>
      <Button variant="link" iconName="circle" iconPosition="left">
        Macro
      </Button>

      <SwitchIcon value={value} onPress={() => setvalue(!value)} />
      <SwitchIcon disabled value={value} onPress={() => setvalue(!value)} />
      <Text>{value ? "Macro on" : "Macro off"}</Text>
      <Checkbox />
    </View>
  );
}

let AppEntryPoint = App;
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
