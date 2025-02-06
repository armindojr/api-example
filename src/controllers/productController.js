import Product from '../models/Product.js';

const getAllProducts = async (req, res) => {
  const products = await Product.find();

  if (!products) {
    res.status(404).json({ error: 'Produtos não encontrados!' });
  } else {
    res.status(200).json(products);
  }
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).json({ error: 'Produto não encontrado!' });
  } else {
    res.status(200).json(product);
  }
};

const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();

  if (!savedProduct) {
    res.status(404).json({ error: 'Produto não foi criado!' });
  } else {
    res.status(201).json(savedProduct);
  }
};

const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!updatedProduct) {
    res.status(404).json({ error: 'Produto não encontrado!' });
  } else {
    res.status(200).json(updatedProduct);
  }
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    res.status(404).json({ error: 'Produto não encontrado!' });
  } else {
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  }
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
