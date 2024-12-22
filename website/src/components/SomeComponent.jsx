import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResourceLink } from "./productFinder/components/ResourceLink";

function SomeComponent() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint
    axios
      .get("https://your-api-endpoint.com/products")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Resources</h1>
      {resources.map((resource, index) => (
        <ResourceLink
          key={resource.id}
          text={resource.title}
          showDivider={index < resources.length - 1} // Show divider for all but the last item
        />
      ))}
    </div>
  );
}

export default SomeComponent;
