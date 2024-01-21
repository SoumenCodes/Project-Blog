const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
vconst express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Define routes for products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
// Add more routes as needed...

module.exports = router;
const Product = require('../models/product');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { name, price } = req.body;

    try {
      const newProduct = new Product({ name, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Implement more controller methods as needed...
};

module.exports = ProductController;
