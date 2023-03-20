import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import './App.css'






export default class App extends Component {
  state = {
    showModal: false,
    currentImage: null,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }






  render() {
    const { showModal } = this.state;
    
    return (<div className="App">
          <Searchbar />
          <ImageGallery />
      {showModal && <Modal onClose={this.toggleModal} />}
          
        </div>
  );
  }
  
};







// API 33581591-1c70c0dad5ebd38d54cbcacf2