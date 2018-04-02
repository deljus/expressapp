import React, { Component } from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";

class TableItemView extends Component {


  render() {

  const { history } = this.props;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Edit Profile"
              cardSubtitle="Complete your profile"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company (disabled)"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={3}>
                      <CustomInput
                        // labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <InputLabel style={{color: "#AAAAAA"}}>
                        About me
                      </InputLabel>
                      <CustomInput
                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={
                <Grid
                  alignItems="baseline"
                  direction="row"
                  justify="space-around"
                  spacing={16}
                >
                    <Button color="primary" onClick={()=> history.goBack() }>Back</Button>

                    <Button color="primary">Save</Button>
                </Grid>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default TableItemView;
