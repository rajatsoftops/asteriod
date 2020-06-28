import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { View } from 'react-native';
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
export default function DetailsScreen({ route, navigation }) {
  const { asteroidID } = route.params;
  console.log('asteroidID', asteroidID);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroidID}?api_key=zz8iVkd6lrQU8LNNJfG3jYNjdtzvGMzpvi302ofi`
      );
      console.log('result', result.data);

      setData(result.data);
    };

    fetchData();
  }, []);

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
              <Text>Name</Text>
            </Col>
            <Col>{data && <Text>{data.name}</Text>}</Col>
          </Row>
          <Row
            style={{
              marginVertical: 15,
            }}
          >
            <Col>
              <Text>nasa jpl url</Text>
            </Col>
            <Col>{data && <Text>{data.nasa_jpl_url}</Text>}</Col>
          </Row>
          <Row
            style={{
              marginVertical: 15,
            }}
          >
            <Col>
              <Text>Potentially Hazardous Asteroid</Text>
            </Col>
            <Col>
              {data && (
                <Text>
                  {data.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                </Text>
              )}
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
}
