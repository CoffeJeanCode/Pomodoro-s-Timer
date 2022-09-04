import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Heading,
  Icon,
  InputGroup,
  Select,
  SliderFilledTrack,
  SliderMark,
  SliderTrack,
  Switch,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FaWrench } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { timersConfig } from "../../state";
import { LONG_BREAK, SHORT_BREAK, WORK } from "../../state/constants";
import { minutesToSeconds, secondsToMinutes } from "../../utils/time.util";
import { SliderSettings } from "./SliderSettings";

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    id: "settings",
  });
  const { toggleColorMode } = useColorMode();

  const [config, setConfig] = useRecoilState(timersConfig);

  const handleAlarm = (evt: any) => {
    console.log(evt.target.value);
  };

  return (
    <>
      <Button leftIcon={<Icon as={FaWrench} />} onClick={onOpen}>
        Settings
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as="h2" size="xl">
              Settings
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Container>
              <Heading as="h3" size="lg">
                Timers
              </Heading>
              <Box>
                <InputGroup flexDirection="column">
                  <SliderSettings
                    title="Work Timer"
                    min={10}
                    max={60}
                    defaultValue={secondsToMinutes(config.timers[WORK])}
                    onChange={(value) =>
                      setConfig({
                        ...config,
                        timers: {
                          ...config.timers,
                          [WORK]: value,
                        },
                      })
                    }
                  >
                    <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                      25
                    </SliderMark>
                    <SliderMark value={40} mt="1" ml="-2.5" fontSize="sm">
                      40
                    </SliderMark>
                    <SliderMark value={60} mt="1" ml="-2.5" fontSize="sm">
                      60
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                  </SliderSettings>
                  <SliderSettings
                    title="Short Break Timer"
                    min={3}
                    max={10}
                    defaultValue={secondsToMinutes(config.timers[SHORT_BREAK])}
                    onChange={(value) =>
                      setConfig({
                        ...config,
                        timers: {
                          ...config.timers,
                          [SHORT_BREAK]: minutesToSeconds(value),
                        },
                      })
                    }
                  >
                    <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                      5
                    </SliderMark>
                    <SliderMark value={7} mt="1" ml="-2.5" fontSize="sm">
                      7
                    </SliderMark>
                    <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
                      10
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                  </SliderSettings>
                  <SliderSettings
                    title="Long Break Timer"
                    min={5}
                    max={20}
                    defaultValue={secondsToMinutes(config.timers[LONG_BREAK])}
                    onChange={(value) =>
                      setConfig({
                        ...config,
                        timers: {
                          ...config.timers,
                          [LONG_BREAK]: minutesToSeconds(value),
                        },
                      })
                    }
                  >
                    <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                      5
                    </SliderMark>
                    <SliderMark value={10} mt="1" ml="-2.5" fontSize="sm">
                      10
                    </SliderMark>
                    <SliderMark value={20} mt="1" ml="-2.5" fontSize="sm">
                      20
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                  </SliderSettings>
                </InputGroup>
              </Box>
              <Heading as="h3" size="lg">
                Alarm
              </Heading>
              <Box>
                <Select onChange={handleAlarm} disabled>
                  {config.alarms.map((alarm: string, index: number) => (
                    <option key={index} value={alarm}>
                      Alarm {index + 1}
                    </option>
                  ))}
                </Select>
              </Box>
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <FormLabel htmlFor="theme">Theme:</FormLabel>
            <Switch size="lg" id="theme" onChange={toggleColorMode} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Settings;
