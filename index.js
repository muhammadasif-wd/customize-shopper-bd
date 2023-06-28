const express = require("express");
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
// const request = require("request")
const port = process.env.PORT || 5000;
const app = express();

// app configuration
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// mongodb uri
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Collection get from Database
    const productsCollection = client
      .db("customize-shopper-bd")
      .collection("products");
    const readyMadeCollection = client
      .db("customize-shopper-bd")
      .collection("readyMade");
    const customizeCollection = client
      .db("customize-shopper-bd")
      .collection("customize");
    const siliconCollection = client
      .db("customize-shopper-bd")
      .collection("silicon");
    const hardCollection = client.db("customize-shopper-bd").collection("hard");
    const twoDCollection = client.db("customize-shopper-bd").collection("twoD");
    const orderCollection = client
      .db("customize-shopper-bd")
      .collection("orderInfo");
    const waterPortCollection = client
      .db("customize-shopper-bd")
      .collection("waterPort");
    const walletCollection = client
      .db("customize-shopper-bd")
      .collection("wallet");
    const tShirtCollection = client
      .db("customize-shopper-bd")
      .collection("tShirt");
    const rimMugsCollection = client
      .db("customize-shopper-bd")
      .collection("rimMugs");
    const magicMirrorCollection = client
      .db("customize-shopper-bd")
      .collection("magicMirror");
    const frameCollection = client
      .db("customize-shopper-bd")
      .collection("frame");
    const contactCollection = client
      .db("customize-shopper-bd")
      .collection("contact");
    const paymentCollection = client
      .db("customize-shopper-bd")
      .collection("payment");


    // bkash payment getaway integrate

    // পেমেন্ট তৈরি করতে ব্যবহার হবেঃ createPayment API
    app.post('/create', (req, res) => {
      const paymentRequest = req.body;
      console.log('paymentRequest', paymentRequest)
      // আপনার পেমেন্ট আইডি ও অন্যান্য পেমেন্ট তথ্য তৈরি করুন
      const paymentID = 'PAYMENT_ID'; // পেমেন্ট আইডি তৈরি করুন
      const createTime = 'CREATE_TIME';
      const orgLogo = 'ORG_LOGO';
      const orgName = 'ORG_NAME';
      const transactionStatus = 'TRANSACTION_STATUS';
      const amount = 'AMOUNT';
      const currency = 'CURRENCY';
      const intent = 'INTENT';
      const merchantInvoiceNumber = 'INVOICE_NUMBER';

      const paymentData = {
        paymentID,
        createTime,
        orgLogo,
        orgName,
        transactionStatus,
        amount,
        currency,
        intent,
        merchantInvoiceNumber,
      };

      // পেমেন্ট ডেটা প্রেরণ করুন
      res.json(paymentData);
    });

    // পেমেন্ট সম্পন্ন করার জন্য ব্যবহার হবেঃ executePayment API
    app.post('/execute/:paymentID', (req, res) => {
      const { paymentID } = req.params;

      // আপনার পেমেন্ট সম্পন্ন করার জন্য যা করতে হবে তা এখানে লিখুন
      // সম্পন্ন পেমেন্ট ডেটা প্রেরণ করুন বা কোন এরর থ্রো করুন
      const paymentData = {
        status: 'success',
        message: 'Payment executed successfully',
      };

      res.json(paymentData);
    });


    // ---------all api create--------

    // products api create...💻
    app.post("/add-order-info", async (req, res) => {
      const orderInfo = req.body;
      await orderCollection.insertOne(orderInfo);
      res.status(200).json({
        status: "success",
        message: "successfully your product has been purchased!✅",
      });
    });
    app.post("/contact", async (req, res) => {
      const contactInfo = req.body;
      const result = await contactCollection.insertOne(contactInfo);
      res.send(result);
    });

    app.get("/contact", async (req, res) => {
      const result = await contactCollection.find({}).toArray();
      res.send(result);
    });

    app.post("/create-product", async (req, res) => {
      const product = req.body;
      if (product.category === "Ready made mugs") {
        await productsCollection.insertOne(product);
        await readyMadeCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      } else if (product.category === "Customize mugs") {
        await productsCollection.insertOne(product);
        await customizeCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      } else if (product.category === "Silicon covers") {
        await productsCollection.insertOne(product);
        await siliconCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      } else if (product.category === "Hard covers") {
        await productsCollection.insertOne(product);
        await hardCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      } else if (product.category === "2D covers") {
        await productsCollection.insertOne(product);
        await twoDCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
      else if (product.category === "Water Port") {
        await productsCollection.insertOne(product);
        await waterPortCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
      else if (product.category === "Wallet") {
        await productsCollection.insertOne(product);
        await walletCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
      else if (product.category === "T-Shirt") {
        await productsCollection.insertOne(product);
        await tShirtCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
      else if (product.category === "Rim Mugs") {
        await productsCollection.insertOne(product);
        await rimMugsCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
      else if (product.category === "Magic Mirror") {
        await productsCollection.insertOne(product);
        await magicMirrorCollection.insertOne(product);
        res.status(200).json({
          status: "success",
          message: "successfully added your product!✅",
        });
      }
    });
    // get products data...🛒
    app.get("/products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });
    app.get("/readyMade", async (req, res) => {
      const result = await readyMadeCollection.find().toArray();
      res.send(result);
    });
    app.get("/customize", async (req, res) => {
      const result = await customizeCollection.find().toArray();
      res.send(result);
    });
    app.get("/hard", async (req, res) => {
      const result = await hardCollection.find().toArray();
      res.send(result);
    });
    app.get("/twoD", async (req, res) => {
      const result = await twoDCollection.find().toArray();
      res.send(result);
    });
    app.get("/silicon", async (req, res) => {
      const result = await siliconCollection.find().toArray();
      res.send(result);
    });
    app.get("/water-port", async (req, res) => {
      const result = await waterPortCollection.find().toArray();
      res.send(result);
    });
    app.get("/wallet", async (req, res) => {
      const result = await walletCollection.find().toArray();
      res.send(result);
    });
    app.get("/t-shirt", async (req, res) => {
      const result = await tShirtCollection.find().toArray();
      res.send(result);
    });
    app.get("/rim-mugs", async (req, res) => {
      const result = await rimMugsCollection.find().toArray();
      res.send(result);
    });
    app.get("/magic-mirror", async (req, res) => {
      const result = await magicMirrorCollection.find().toArray();
      res.send(result);
    });
    app.get("/frame", async (req, res) => {
      const result = await frameCollection.find().toArray();
      res.send(result);
    });
    app.get("/order-info", async (req, res) => {
      const result = await orderCollection.find().toArray();
      res.send(result);
    });

    // get products particular _id data...🛒
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await productsCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/readyMade/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await readyMadeCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/customize/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await customizeCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/silicon/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await siliconCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/hard/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await hardCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/twoD/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await twoDCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/water-port/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await waterPortCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/wallet/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await walletCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/t-shirt/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await tShirtCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/rim-mugs/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await rimMugsCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/magic-mirror/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await magicMirrorCollection.find(filter).toArray();
      res.send(result);
    });
    app.get("/frame/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await frameCollection.find(filter).toArray();
      res.send(result);
    });


    // Delete Product ==>  ID
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const productDelete = await productsCollection.deleteOne(filter);
      await readyMadeCollection.deleteOne(filter);
      await customizeCollection.deleteOne(filter);
      await siliconCollection.deleteOne(filter);
      await hardCollection.deleteOne(filter);
      await twoDCollection.deleteOne(filter);
      await waterPortCollection.deleteOne(filter);
      await walletCollection.deleteOne(filter);
      await tShirtCollection.deleteOne(filter);
      await rimMugsCollection.deleteOne(filter);
      await magicMirrorCollection.deleteOne(filter);
      const result = { productDelete }
      if (result) {
        res.status(200).json({
          status: "success",
          message: "successfully delete your product!✅"
        })
      }
    });


    // Edit Product ==> ID
    app.patch("/product/:id", async (req, res) => {
      const productID = req.params.id;
      const patchData = req.body;
      const result = await productsCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await readyMadeCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await customizeCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await siliconCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await hardCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await twoDCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await waterPortCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await walletCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await tShirtCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await rimMugsCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      await magicMirrorCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      if (result) {
        res.status(200).json({
          status: "success",
          message: "successfully delete your product!✅"
        })
      }
    });




    // update products by particular _id data...🛒
    app.patch("/update-product/:id", async (req, res) => {
      const productID = req.params.id;
      const patchData = req.body;
      console.log(productID, patchData);
      const result = await productsCollection.updateOne(
        { _id: new ObjectId(productID) },
        {
          $set: patchData,
        }
      );
      console.log(result);
      res.send(result);
    });
    // delete products by particular _id to database...❌
    app.delete("/delete-product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("successfully run code...!😊");
  }
}

// Call the function you declare abode
run().catch(console.dir);
// Root Api to check activity
app.get("/", (req, res) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:72px; text-align:center;margin-top:200px">Welcome TO Your Server...♻️</h1>`
  );
});


app.listen(port, () => {
  console.log(`Your server running on ${port} 😲`);
});
