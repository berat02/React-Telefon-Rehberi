import React, { Component } from "react";

export default class Deneme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dizi: [],
      value: "",
      valueNum: "",
    };
  }
  onChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }
  onChangeEventNum(event) {
    if (event.target.value.length>10){
      event.preventDefault();
      return
    }
    this.setState({
      valueNum: event.target.value,
    });
  }
  onSubmitEvent(event) {
    event.preventDefault();
    this.setState((state) => ({
      dizi: state.dizi.concat({
        name: this.state.value,
        phone: this.state.valueNum,
      }),
      value: "",
      valueNum: "",
    }));
  }
  onClickEvent(index) {
    let txt;
    if (window.confirm("Silmek İstediğine Eminmisin ! ")) {
      let yeniDizi = [...this.state.dizi];
      yeniDizi.splice(index, 1);
      this.setState((state) => ({
        dizi: yeniDizi,
      }));
    } else {
      txt = "Silindi";
    }
  }
render() {
    const { dizi } = this.state;
    const sonuc = (
          <div>{dizi.map((item,index) => (
            <div className="div"><h3>Ad: {item.name}</h3><h3>Tel: 0{item.phone}</h3>
            <div className="delete" onClick={() => this.onClickEvent(index)}></div>
          </div>
        ))}
      </div>
    );
    return (
      <div>
        <form onSubmit={this.onSubmitEvent.bind(this)}>
          <input
            type="text"
            onChange={this.onChangeEvent.bind(this)}
            value={this.state.value}
            placeholder="Ad Giriniz "
            maxLength="30"
            required/>
          <input
            type="number" 
            onChange={this.onChangeEventNum.bind(this)}
            value={this.state.valueNum}
            placeholder="(555) 555 55 55"
            required/>
          <button>Kişilere Ekle</button>
        </form>
        <p>{sonuc}</p>
      </div>
    );
  }
}
