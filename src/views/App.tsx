import Form from "@/components/Form";
import { HappyHale } from "@/config/stitches";
import { useEffect, useState } from "react";

// TODO: Yup for validation

const App = () => {
  // Validation of injecting new theme later
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const getTheme = async () => {
      const res = await HappyHale();

      setTheme(res);
    };

    getTheme();
  }, []);
  return (
    <div className={theme}>
      <Form.Container
        onSubmit={({ data, errors }) => {
          console.log(data);
        }}
        css={{
          margin: "auto",
          maxWidth: "1000px",
        }}
      >
        <Form.Input key="price" name="price" label="Price" validateAs="price" />

        <Form.Input
          css={{
            marginTop: "$6",
          }}
          name="address"
          label="Enter address, city, or zip code"
        />

        <Form.Textarea
          key="description"
          css={{
            marginTop: "$6",
          }}
          name="description"
          label="Description"
        />

        <Form.Submit css={{ marginTop: "$6" }} value="Submit" />
      </Form.Container>
    </div>
  );
};

export default App;
