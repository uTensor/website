import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TrainingCode = () => {
  const codeString =
    "from __future__ import absolute_import, division, print_function, unicode_literals \nfrom utensor_cgen.api.export import tflm_keras_export \nimport tensorflow as tf \nimport numpy as np \nfrom tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPooling2D \nfrom tensorflow.keras import Model \n \nmnist = tf.keras.datasets.mnist \n(x_train, y_train), (x_test, y_test) = mnist.load_data() \n \nclass MyModel(Model): \n    def __init__(self): \n        super(MyModel, self).__init__() \n        self.conv1 = Conv2D(8, 3, activation='relu') \n        self.pool = MaxPooling2D() \n        self.flatten = Flatten() \n        self.d1 = Dense(10) \n    def call(self, x): \n        x0 = self.conv1(x) \n        x1 = self.pool(x0) \n        x2 = self.flatten(x1) \n        return self.d1(x2) \n \nmodel = MyModel() \ntrain_your_model(model) \n \n# representative data function \n# provides random sample from the dataset \n# to be used for offline-quantization \nnum_calibration_steps = 128 \ncalibration_dtype = tf.float32 \ndef representative_dataset_gen(): \n    for _ in range(num_calibration_steps): \n        rand_idx = np.random.randint(0, x_test.shape[0]-1) \n        sample = x_test[rand_idx] \n        sample = sample[tf.newaxis, ...] \n        sample = tf.cast(sample, dtype=calibration_dtype) \n        yield [sample] \n \n# Export uTensor C++ impplementation with an one-liner \ntflm_keras_export( \n    model, \n    representive_dataset=representative_dataset_gen, \n    model_name='my_model', \n    target='utensor', \n)";
  return (
    <SyntaxHighlighter
      language="python"
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

export default TrainingCode;
