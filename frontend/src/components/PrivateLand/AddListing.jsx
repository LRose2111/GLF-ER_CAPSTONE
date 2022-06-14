import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  description: "",
};

const AddNewListing = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewListing
  );

  async function postNewListing() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/create/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/lost");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="home-container">
      <div className="background">
        <h1>Create New Listing</h1>

        <form className="form-layout" onSubmit={handleSubmit}>
          <div className="form-layout2">
            <label className="form-layout2">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              State:
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Zipcode:
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Description:{" "}
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type = 'submit' className="comm-button">Post</button>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddNewListing;