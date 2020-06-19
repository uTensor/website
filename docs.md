# Documentation

## General Tutorials
**Start here** if you are new to uTensor or TinyML. These tutorials contain step-by-step instructions to achieve specific tasks.
#### [Mbed - From Training to Flashing](https://github.com/uTensor/utensor-helloworld/tree/re-arch-rc1) 
This repository contains a Jupyter training notebook and Mbed skeleton code to demonstrate the uTensor end-to-end flow.

## Code Generator Documentation
The [uTensor code-generator documentation](https://utensor-cgen.readthedocs.io/en/latest/) is great for those who wish to build their own TinyML pipelines.
### Tutorials
#### [Write You Own Frontend Parser - Jupyter](https://github.com/uTensor/utensor_cgen/blob/re-arch-support/tutorials/component_registration/frontend_registration.ipynb)
uTensor frontend parsers read files or objects and convert them to uTensor's graph representation, `ugraph`. Once the input graphs are converted into the `ugraph` format, existing optimizations and export methods can be applied to them.

#### [Adding a Graph Transformer](https://github.com/uTensor/utensor_cgen/blob/re-arch-support/tutorials/component_registration/transformer_registration.ipynb)
A graph-transformer accepts an input `ugraph`, modifies it, and returns an output `ugraph`. It is used to realize functions such as node fusion/removal/replacement, quantization, and graph-lowering.

#### [Writing a Simple Backend](https://github.com/uTensor/utensor_cgen/blob/re-arch-support/tutorials/component_registration/backend_registration.ipynb)
The backend of uTensor Code-Generator is responsible for converting final `ugraph`s to a deployable model representation. The uTensor C++ code-generation is an example of the backend. Outputting other formats, such as RTL, C, TensorFlow Lite model, are also possible.

## Runtime Documentation
The [uTensor runtime documentation](https://github.com/uTensor/uTensor/tree/re-arch-rc1) summarizes the design philosophy of the uTensor device-code. It also includes tutorials on how to extend the uTensor runtime.

## Addition Resource
- [Why Edge Compute](https://medium.com/@stolendoggy/why-machine-learning-on-the-edge-92fac32105e6)
- [O'Reilly Artificial Intelligent Conference](https://medium.com/r/?url=https%3A%2F%2Fconferences.oreilly.com%2Fartificial-intelligence%2Fai-ca%2Fpublic%2Fschedule%2Fdetail%2F68659)
- [FOSDEM 2018](https://medium.com/r/?url=https%3A%2F%2Ffosdem.org%2F2018%2Fschedule%2Fspeaker%2Fneil_tan%2F)
