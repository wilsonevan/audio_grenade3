import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from "semantic-ui-react";

const ShippingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [extendedAddress, setExtendedAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // useEffect(() => {

  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Segment basic>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="First Name"
          required
          autoFocus
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={e => setFirstName(e.target.value)}
        />
        <Form.Input
          label="Last Name"
          required
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={e => setLastName(e.target.value)}
        />
          <Form.Input
          label="Email"
          required
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Input
          label="Phone Number"
          name="phone"
          value={phone}
          placeholder="Phone Number"
          onChange={e => setPhone(e.target.value)}
        />
        <p>This is not used for marketing purposes and is not shared. We only use phone numbers for contacting customers directly if there are any shipping issues.</p>
        <Form.Input
          label="Street Address"
          required
          name="streetAddress"
          value={streetAddress}
          placeholder="Street Address"
          onChange={e => setStreetAddress(e.target.value)}
        />
        <Form.Input
          label="Extended Address"
          name="extendedAddress"
          value={extendedAddress}
          placeholder="Extended Address"
          onChange={e => setExtendedAddress(e.target.value)}
        />
        <Form.Input
          label="City"
          required
          name="locality"
          value={locality}
          placeholder="City"
          onChange={e => setLocality(e.target.value)}
        />
        <Form.Input
          label="State"
          required
          name="region"
          value={region}
          placeholder="State"
          onChange={e => setRegion(e.target.value)}
        />
        <Form.Input
          label="Zip Code"
          required
          name="postalCode"
          value={postalCode}
          placeholder="Zip Code"
          onChange={e => setPostalCode(e.target.value)}
        />
        <Form.Input
          label="Country"
          required
          name="countryCode"
          value={countryCode}
          placeholder="Country"
          onChange={e => setCountryCode(e.target.value)}
        />
        <Segment textAlign="center" basic>
          <Button primary type="submit">
            Submit
          </Button>
        </Segment>
      </Form>
    </Segment>
  );
};

export default class ConnectedShippingForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <ShippingForm {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
