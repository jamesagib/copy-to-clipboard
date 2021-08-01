import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class CopytoClipboard extends Component {

  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.onCopyText = this.onCopyText.bind(this);
  }
  
  onCopyText() {
    const { copyText } = this.props;
    const { smduration } = this.props.actions;

    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), smduration);
    Clipboard.setString(copyText);
  };

  handleSubmit = async () => {
    const { actions } = this.props;

    if (actions.useActions) await actions.useActions();
  };

  
  render() {

    const {
      btntext,
      btntextcolor,
      btncolor,
      btnrounding,
      btnshadow
    } = this.props;

    const { smText } = this.props.actions;
    
    const styles = StyleSheet.create({
      wrapper: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        alignself: 'stretch'
      },
      button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: btnrounding,
        backgroundColor: btncolor,
        // shadow for button
        shadowRadius: btnshadow ? 1 : null,
        shadowColor: btnshadow ? "#000" : null,
        shadowOffset: btnshadow ? {
          width: 0,
          height: 3,
        } : null,
        shadowOpacity: btnshadow ? 0.27 : null,
        shadowRadius: btnshadow ? 4.65 : null,
        elevation: btnshadow ? 6 : null,
      },
      text: {
        color: btntextcolor,
      },
    });

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={() => { this.onCopyText(); this.handleSubmit();}}>
          <Text style={styles.text}>
            {this.state.copied ? smText : btntext}
          </Text>
        </TouchableOpacity>
     </View>
    )
  }
}

export default CopytoClipboard;

