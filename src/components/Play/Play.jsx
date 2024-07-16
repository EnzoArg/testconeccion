import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";


function Play() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
  
      </Container>
    </div>
  );
}

export default Play;
