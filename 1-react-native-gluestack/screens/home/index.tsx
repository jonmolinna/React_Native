import { Button, ButtonText } from "@/components/ui/button";
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import {SafeAreaViewBase} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
   const [showDrawer, setShowDrawer] = useState(false);

  return (

      <SafeAreaView style={{ flex: 1 }}>
      
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Open Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        size="sm"
        anchor="bottom"
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Text size="lg">Menu</Text>
            
          </DrawerHeader>
          <DrawerBody>
            <Text>This is the basic drawer component.</Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </SafeAreaView>
  );
};


// SafeAreaViewBase -> NO USAR