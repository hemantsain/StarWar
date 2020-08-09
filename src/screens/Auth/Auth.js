import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Styles} from '../../styles';
import {routes} from '../../common/routes';
import {useDispatch, useSelector} from 'react-redux';
import {doLoginRequest} from '../../state/actions';

export default function Auth(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();
  const authResult = useSelector((state) => state.appReducer);

  const handleSubmit = () => {
    const data = {
      username,
      password,
    };
    dispatch(doLoginRequest(data));
  };

  useEffect(() => {
    const authState = authResult.userLoginResult;
    if (authState && authState.length > 0) {
      if (
        authState[0].name.toLowerCase() === username.toLocaleLowerCase() &&
        authState[0].birth_year.toLowerCase() === password.toLocaleLowerCase()
      ) {
        props.navigation.navigate(routes.search);
      } else {
        authState && username.trim().length > 0 && password.trim().length > 0
          ? setErrorMsg('Username or password is wrong. Please try again')
          : setErrorMsg('');
      }
    }
  }, [authResult.userLoginResult, password, props.navigation, username]);

  useEffect(() => {
    if (username.trim().length > 0 && password.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [password, username]);

  return (
    <SafeAreaView style={Styles.rootContainer}>
      <View style={Styles.appContainer}>
        <View>
          <TextInput
            style={Styles.roundedBoxContainer}
            keyboardType="default"
            placeholder="Enter Username"
            value={username}
            onChangeText={setUserName}
          />
          <TextInput
            style={Styles.roundedBoxContainer}
            keyboardType="default"
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
          />
          <Text>{errorMsg}</Text>
          <View style={{marginVertical: 15}}>
            {authResult && authResult.isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
