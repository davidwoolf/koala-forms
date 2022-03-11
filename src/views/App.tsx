import Form from "@/components/Form";
import { HappyHale } from "@/config/stitches";
import { useState } from "react";

// Components
import { Icon } from "@/components/Icons";

// TODO: Yup for validation

const App = () => {
  // Validation of injecting new theme later
  const [theme, setTheme] = useState("");

  // useEffect(() => {
  //   const getTheme = async () => {
  //     const res = await HappyHale();

  //     setTheme(res);
  //   };

  //   getTheme();
  // }, []);
  return (
    <div className={theme}>
      <Form.Container
        onSubmit={({ data, errors, setSubmitting }) => {
          console.log(data);

          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        css={{
          margin: "auto",
          padding: "$10",
          width: "100%",
        }}
      >
        {({
          isSubmitting,
          isLoadingFields,
          hasErrors,
          hasMissingRequiredFields,
        }: {
          isSubmitting: boolean;
          isLoadingFields: boolean;
          hasErrors: boolean;
          hasMissingRequiredFields: boolean;
        }) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "428px",
              }}
            >
              <Form.Input
                required={true}
                key="first_name"
                name="first_name"
                label="First name"
              />

              <Form.Input
                required={true}
                key="last_name"
                name="last_name"
                label="last name"
              />

              <Form.Input
                required={true}
                key="email"
                type="email"
                name="email"
                label="Email"
              />

              <Form.Input
                required={true}
                key="phone_number"
                type="tel"
                name="phone_number"
                label="Phone Number"
              />

              <Form.Submit
                value={isSubmitting ? "Logging in..." : "Continue as guest"}
              />
            </div>

            <Form.Input
              css={{
                marginTop: "$32",
              }}
              name="address"
              label="Enter address, city, or zip code"
              icon={<Icon.Search />}
              action={
                <button
                  onClick={() => {
                    alert("fetch my location");
                  }}
                  type="button"
                  style={{ appearance: "none", border: 0, background: "none" }}
                >
                  <Icon.Location />
                </button>
              }
            />

            <div role="group" aria-labelledby="checkbox">
              <div>
                <Form.Checkbox
                  css={{
                    marginTop: "$6",
                  }}
                  name="ice_cream_flavors"
                  value="vanilla"
                  label="Vanilla"
                />
              </div>
              <div>
                <Form.Checkbox
                  css={{
                    marginTop: "$6",
                  }}
                  name="ice_cream_flavors"
                  value="chocolate"
                  label="Chocolate"
                />
              </div>
              <div>
                <Form.Checkbox
                  css={{
                    marginTop: "$6",
                  }}
                  name="ice_cream_flavors"
                  value="strawberry"
                  label="Strawberry"
                />
              </div>
            </div>

            <Form.Select
              css={{
                marginTop: "$6",
              }}
              name="options"
              label="Options"
            >
              <option value="first">First choice</option>
              <option value="second">Second choice</option>
              <option value="third">Third choice</option>
            </Form.Select>

            <Form.Textarea
              key="description"
              css={{
                marginTop: "$6",
              }}
              name="description"
              label="Description"
            />

            <Form.Submit
              css={{ marginTop: "$6" }}
              value={isSubmitting ? "Submitting..." : "Submit"}
            />
          </>
        )}
      </Form.Container>
    </div>
  );
};

export default App;
