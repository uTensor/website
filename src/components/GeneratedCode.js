import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GeneratedCode = () => {
  const codeString =
    "// Assume Initialized memory allocators \n// Create a 2x2 Tensor from data owned by the user \nint8_t my_input_buffer[4] = {1, 2, 3, 4}; \nTensor a = new BufferTensor({2, 2}, i8, my_input_buffer); \n// Update a value in our buffer. \nmy_input_buffer[3] = 5; \n// Create Tensors of int8_t from const static arrays in ROM \nTensor b = new RomTensor({2, 2}, i8, array_of_values_b); \n// Create a Tensor to store the output in RAM \nTensor c = new RamTensor({2, 2}, i8); \n// Tensors are mapped to the operator's parameters by name and raises compile time errors when mismatch. \n// The name binding + lack of parameter ordering makes ctag jumping and GDB sessions super easy \nMatrixMultOperator<int8_t> mult_AB; \nmult_AB \n    .set_inputs({{MatrixMultOperator<int8_t>::a, a}, {MatrixMultOperator<int8_t>::b, b}}) \n    .set_outputs({{MatrixMultOperator<int8_t>::c, c}}) \n    .eval(); \n// Elements in Tensor c can be accessed with: \nint8_t element = static_cast<int8_t>(c(i,j));";
  return (
    <SyntaxHighlighter
      language="c++"
      style={tomorrowNightEighties}
      wrapLines={true}
      codeTagProps={{
        style: {
          fontFamily: "Hack",
          fontSize: "12px",
        },
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default GeneratedCode;
