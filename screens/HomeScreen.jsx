import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Text,
  Button,
  Icon,
  Content,
  Form,
  Item,
  Label,
  Input,
  Col,
  Row,
  Grid,
} from 'native-base';

export default function HomeScreen({ navigation }) {
  const [asteroidID, setAsteroidID] = useState(null);

  async function randomAsteroid() {
    const result = await axios(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=zz8iVkd6lrQU8LNNJfG3jYNjdtzvGMzpvi302ofi`
    );
    console.log('result', result.data);
    const randomElement =
      result.data.near_earth_objects[
        Math.floor(Math.random() * result.data.page.size)
      ];
    console.log('randomElement', randomElement);

    navigation.navigate('Details', {
      asteroidID: randomElement.id,
    });
  }

  return (
    <Container>
      <Content>
        <Grid>
          <Row
            style={{
              marginVertical: 20,
            }}
          >
            <Col>
              <Item floatingLabel>
                <Label>Enter Asteroid ID</Label>
                <Input onChangeText={(text) => setAsteroidID(text)} />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                style={{
                  justifyContent: 'center',
                  marginVertical: 20,
                  // width: '50%',
                }}
                disabled={asteroidID === '' || asteroidID === null}
                primary
                onPress={() =>
                  navigation.navigate('Details', {
                    asteroidID,
                  })
                }
              >
                <Text> Submit </Text>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                style={{
                  justifyContent: 'center',
                  marginVertical: 20,
                }}
                primary
                onPress={randomAsteroid}
              >
                <Text>Random Asteroid</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}
