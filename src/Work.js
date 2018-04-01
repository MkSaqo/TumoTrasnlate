import React, { Component } from 'react';
import _ from 'lodash';
import speak from 'browser-speak';
import translate from './translate';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
// import SearchBar from './SearchBar';

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleListen = this.handleListen.bind(this);

    this.state = { translation: '', text: '', len: 'hy', res: {} };
  }

  componentDidMount() {
    var keys = ["Albanian", "Amharic", "English", "Arabic", "Armenian", "Afrikaans", "Basque", "Bashkir", "Belarusian", "Bengali", "Burmese", "Bulgarian", "Bosnian", "Welsh", "Hungarian", "Vietnamese", "Haitian", "Galician", "Dutch", "Hill", "Greek", "Georgian", "Gujarati", "Danish", "Hebrew", "Yiddish", "Indonesian", "Irish", "Italian", "Icelandic", "Spanish", "Kazakh", "Kannada", "Catalan", "Kyrgyz", "Chinese", "Korean", "Xhosa", "Khmer", "Laotian", "Latin", "Latvian", "Lithuanian", "Luxembourgish", "Malagasy", "Malay", "Malayalam", "Maltese", "Macedonian", "Maori", "Marathi", "Mari", "Mongolian", "German", "Nepali", "Norwegian", "Punjabi", "Papiamento", "Persian", "Polish", "Portuguese", "Romanian", "Russian", "Cebuano", "Serbian", "Sinhala", "Slovakian", "Slovenian", "Swahili", "Sundanese", "Tajik", "Thai", "Tagalog", "Tamil", "Tatar", "Telugu", "Turkish", "Udmurt", "Uzbek", "Ukrainian", "Urdu", "Finnish", "French", "Hindi", "Croatian", "Czech", "Swedish", "Scottish", "Estonian", "Esperanto", "Javanese", "Japanese"];
    var values = ["sq", "am", "en", "ar", "hy", "af", "eu", "ba", "be", "bn", "my", "bg", "bs", "cy", "hu", "vi", "ht", "gl", "nl", "mrj", "el", "ka", "gu", "da", "he", "yi", "id", "ga", "it", "is", "es", "kk", "kn", "ca", "ky", "zh", "ko", "xh", "km", "lo", "la", "lv", "lt", "lb", "mg", "ms", "ml", "mt", "mk", "mi", "mr", "mhr", "mn", "de", "ne", "no", "pa", "pap", "fa", "pl", "pt", "ro", "ru", "ceb", "sr", "si", "sk", "sl", "sw", "su", "tg", "th", "tl", "ta", "tt", "te", "tr", "udm", "uz", "uk", "ur", "fi", "fr", "hi", "hr", "cs", "sv", "gd", "et", "eo", "jv", "ja"];
    var result = {};
    keys.forEach((key, i) => result[key] = values[i]);
    this.setState({ res: result })

  }
  clickSubmit(text) {
    if(text){
    this.handleTraslate(text)
    this.setState({ text })
    }else{
      this.handleTraslate(" ")
    this.setState({ text:'' })
    }
  }
  speech(value) {
    var ran = document.getElementById("range").value;
    speak(value, ran);
  }
  lenchange = (event) => {
    this.setState({ len: event.target.value });
    this.clickSubmit(this.state.text)
  }
  handleTraslate(text) {
    translate({ lang: this.state.len, text })
      .then(response => {
        this.setState({ translation: response.text[0] });
      })
      .catch(console.error);

  }
  handleListen() {
    fetch('http://localhost:8080/api/speech-to-text/token')
      .then(response => {
        return response.text();
      })
      .then(token => {
        let stream = recognizeMic({
          token: token,
          objectMode: true,
          extractResults: true,
          format: false,
        });
        stream.on('data', data => {
          this.setState({
            text: data.alternatives[0].transcript,
          });
          this.clickSubmit(this.state.text)
        });
        stream.on('error', err => {
          console.log(err);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {

    return (<div className="all_w">
      <div>
        <input type="range" id="range" min="1" max="30" />
        <div className="my_w"><input className="i_w" id="read" cols="30" rows="10" placeholder="Write here" onChange={event => this.clickSubmit(event.target.value)} value={this.state.text} />
        <br />
        <select onChange={event => this.lenchange(event)} value={this.state.len} >
          {
            _.map(this.state.res, function (num, key) {
              return (<option value={num} key={key} >{key}</option>)
            })
          }
        </select>

        <h3 className="h3_w">{this.state.translation}</h3></div>

        <button  className="App-btn" onClick={this.handleListen}>
          Click &amp; Start Talking
         </button><br />
        <img alt='speaker' src='http://freevector.co/wp-content/uploads/2013/02/53838-speaker-audio-interface-symbol.png' width='50px' onClick={() => this.speech(this.state.translation)} />


      </div>
    </div>);
  }
}

export default Work;
