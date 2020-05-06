import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 18px;
  margin: 10px 15px 0px 15px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #eeeeee;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ color }) => color };
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: ${({ color }) => color};
`;

