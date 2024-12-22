import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import App from "./App";
import YourComponent from './YourComponent'; // Replace with your actual component

jest.mock("axios");

beforeEach(() => {
  axios.get.mockClear();
  axios.post.mockClear();
});

test("fetches and displays data", async () => {
  axios.get.mockResolvedValue({ data: { message: "Hello from API" } });
  render(
    <App />
  );

  await waitFor(() => {
    expect(screen.getByText("Hello from API")).toBeInTheDocument();
  });

  expect(axios.get).toHaveBeenCalledTimes(1);
});

test("posts data to API", async () => {
  axios.post.mockResolvedValue({ data: { success: true } });

  render(
    <Router>
      <App />
    </Router>,
  );

  // Trigger the post action in your component
  // This depends on how your component works
  // For example, you might need to click a button:
  // fireEvent.click(screen.getByText('Submit'));
  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(1);
  });

  // Add more assertions based on how your component should behave after a successful post
});

test('submits form and calls axios.post', async () => {
  axios.post.mockResolvedValue({ data: {} }); // Mock axios.post to resolve with some data

  render(<YourComponent />);

  fireEvent.click(screen.getByText('Submit')); // Trigger the form submission

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(1); // Check that axios.post was called once
  });
});


function YourComponent() {
  const handleSubmit = async () => {
    try {
      await axios.post('/your-endpoint', { /* your data */ });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
}

export default YourComponent;
