# Capstone Team C23-PS342 [GiziGuru Team]
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-URL, forks-URL, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br/>
<p align="center">
  <a href="#">
    <img src="assets/big-logo.png" alt="Logo" width="100">
  </a>
  
  <h2 align="center">Bangkit Capstone Project 2023: GiziGuru (Helps keep track of your nutrition)</h2>
  <h2 align="center">~ Take care of your nutrition ~</h2>

  <p align="center">
    ·
    <a href="#">Report Bug</a>
  </p>
  
  <a href="#">
    <img src="assets/logo.png" alt="Banner" width="1000">
  </a>
</p>
<br/>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#library">Library</a></li>
      </ul>
    </li>
    <li>
      <a href="#documentation">Documentation</a>
      <ul>
        <li><a href="#machine-learning">Machine Learning</a></li>
        <li><a href="#cloud-computing">Cloud Computing</a></li>
        <li>
          <a href="#mobile-development">Mobile Development</a>
          <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">How to use</a></li>
          </ul>
        </li>
      </ul>
    </li> 
    <li><a href="#contact">Contact us</a></li>
  </ol>
</details>
<br/>
<br/>


## About The Project
<div style="text-align: justify">Our team created this project because we realize that nutritional needs are essential for people to get a better life. We also recognize that there are still so many cases of nutritional deficiencies in Indonesia. Nutritional deficiencies can occur from many factors of life, so we are trying to initiate a change where we will create an application that can provide information and guidance to the nutritional needs.
<br/><br/>
Starting from our small analysis see many people who do not understand the importance of the balance of nutrition needed by their bodies; this also gives rise to many diseases such as diabetes, cholesterol, and obesity. With this application, we solve this problem that occurs; with people knowing their nutritional needs, they can maintain their diet and what foods can fulfill their nutrition.
The application will be as simple as possible so that even ordinary people can use and understand the interface. This is intended so that many people who need to become more familiar with the Nutritional Adequacy Rate can be concerned about their health
.
</div>
<br/>

### Built With
* [Android Studio Chipmunk (2021.2.1 Patch 1)](https://developer.android.com/studio)
* [Kotlin Programming Language](https://kotlinlang.org/)
* [Google Cloud Platform Services](https://cloud.google.com/gcp)
* [Node.Js](https://nodejs.org/en)
* [Google Colaboratory](https://research.google.com/colaboratory/)
* [Python Programming Language (Version 3)](https://www.python.org/)

### Library
* [Express.Js](https://pandas.pydata.org/)
* [Joi](https://pandas.pydata.org/)
* [Pandas](https://pandas.pydata.org/)
* [Numpy](https://numpy.org/)
* [Tensorflow](https://www.tensorflow.org/)
* [Keras](https://keras.io/)
* [Flask](https://flask.palletsprojects.com)
<br/>
<br/>


## Documentation
### Machine Learning

#### Food Classification using MobileNet

##### Introduction
This project is used to detect the nutrition on the food by recognize the food and then get the correspondent nutrition on database 

##### Model Architecture
In this project, we use transfer learning with MobileNet, a pre-trained convolutional neural network (CNN) architecture, to perform food classification. The intuition behind transfer learning for image classification is that if a model is trained on a large and general enough dataset, this model will effectively serve as a generic model of the visual world. we can then take advantage of these learned feature maps without having to start from scratch by training a large model on a large dataset.

1. Loading the Pre-trained MobileNet Model<br> 
We loaded the MobileNet model pre-trained on the ImageNet dataset. The ImageNet weights provide a good initial set of learned features for our food classification task. 

2. Freezing the Base Layer<br> 
To prevent the pre-trained MobileNet model from being updated during training, we froze all the layers. This ensures that only the newly added classification layers will be trained.

3. Adding Custom Classification Layers<br> 
We constructed a sequential model using the tf.keras.models.Sequential class. First, we added the base MobileNet model, followed by a Flatten layer to convert the 3D feature maps into a 1D vector. Then, a fully connected Dense layer with 512 units and ReLU activation was added to capture more complex patterns in the extracted features. We applied a Dropout layer with a rate of 0.5 to reduce overfitting, followed by a BatchNormalization layer for improved training stability. Finally, a Dense layer with 9 units (representing the number of food categories) and a softmax activation function was added as the output layer.

By following this model architecture, we were able to utilize pre-trained MobileNet models and adapt them to our food classification task using transfer learning. This approach allowed us to achieve accurate predictions while significantly reducing training time and the need for a large labeled dataset.

##### Dataset
We collected food images from the internet to create our dataset. We utilized web scraping techniques to gather a diverse range of food images. Due to time limitations, we were able to collect a total of 9 different food categories, with 200 images for each category. To ensure proper evaluation and validation of our model, we split the dataset into training and validation sets. The training set consists of 90% of the data, while the remaining 10% is used for validation. Here is an example of our train dataset and validation dataset:
* Data Train<br><br>
![Data train]("/assets/data_train.jpeg")

* Data Validation<br><br>
![Data validation](/assets/data_train.jpeg)


##### Training
To train our food classification model, we utilized Google Colab, a cloud-based platform that provides free access to GPUs. This allowed us to leverage powerful hardware resources for faster model training. Here is an overview of our training process:

1. Data Augmentation <br>
To enhance the diversity and robustness of our training data, we applied data augmentation techniques using the ImageDataGenerator class from the Keras library. This helped us generate augmented images on-the-fly during training and also reducing overfitting. The following augmentations were applied:
- Rescaling: Each pixel value in the images was rescaled between 0 and 1.
- Width Shift Range: Randomly shifted the width of the images by a fraction of 0.2.
- Height Shift Range: Randomly shifted the height of the images by a fraction of 0.2.
- Shear Range: Applied random shear transformations to the images.
- Zoom Range: Randomly zoomed in or out on the images by a factor of 0.4.
- Horizontal Flip: Randomly flipped the images horizontally.

2. Compiling and Training the Model <br>
We compiled the model using the SGD optimizer with a learning rate of 0.002 and momentum of 0.9. The categorical cross-entropy loss function and accuracy metric were used. The model was trained for 20 epochs. During each epoch, the model iteratively processed batches of augmented images, adjusted its weights based on the calculated loss, and evaluated its performance on the validation set. The training process aimed to optimize the model's parameters to improve accuracy and minimize the loss.

##### Evaluation
We use TensorBoard, a powerful visualization toolkit from TensorFlow, to evaluate and monitor the performance of our food classification model. TensorBoard provides interactive visualizations that help analyze various aspects of the model during training and validation.

1. Logging Training Matrics <br>
During the training process, we logged important metrics to TensorBoard to track the model's progress and performance. These metrics include: <br>

- Loss: We monitored the training loss, which measures the discrepancy between predicted and actual labels. A lower loss indicates better model convergence.

- Accuracy: We tracked the training accuracy, which measures the proportion of correctly classified food images during training.
2. Saving TensorBoard Logs<br>
We saved the TensorBoard logs during training for future reference and comparison. By keeping a record of the logs, we could revisit previous training sessions, compare different model iterations, and track the model's improvement over time.
3. Visualizing Loss and Accuracy in tensorboard
<br>
In the TensorBoard dashboard, we could access the following visualizations:

- Scalar Charts: These charts displayed the trends of the loss and accuracy metrics over training epochs. We could analyze the convergence rate, identify potential overfitting or underfitting, and make informed decisions about model adjustments.

- Histograms: TensorBoard provided histograms of model weights and biases, giving us insights into their distributions and potential issues like vanishing or exploding gradients.

- Graph Visualization: We explored a graphical representation of the model architecture, showing the flow of data between layers. This visualization helped us verify the model's structure and identify any unexpected connections.

##### Detect Nutrition From Image
After training and evaluating our food classification model, we proceeded to the next task of detecting the nutrition information from food photos. To simulate this process, we utilized a CSV (Comma-Separated Values) file instead of a database. We mapped the food labels to corresponding food IDs stored in the CSV file.

1. CSV Data: We prepared a CSV file containing food IDs and their corresponding nutrition information. Each food ID was associated with specific nutrient values such as calories, protein, carbohydrates, and fat.

2. Mapping Food Labels: We replaced the food labels in the classification model with their respective food IDs from the CSV file. This mapping allowed us to associate each food photo prediction with the correct food ID.

3. Prediction and Display: We used the trained classification model to predict the food labels from various food photos. If the prediction was accurate, we retrieved the corresponding food name data from the CSV file using the mapped food ID. Along with the accurate food name, the associated nutrient information was displayed.



##### Deployment
We deployed the model on Mobile Application. to do so we need to convert the  model into TFLite format. The deployment process involved saving the model and converting it into the TFLite format.

- Saving The Model <br>
We saved the trained model, including its architecture and learned weights, to a specified directory.

- Converting to TFLite <br>
The saved model was then converted to the TFLite format, which is optimized for mobile deployment. This format reduces the model's size while maintaining prediction accuracy.



### Cloud Computing
1. Python 3.7
2. Flask
3. Numpy, Keras. TensorFlow, Pandas, (requirement.txt)

#### How to Run
1. use virtualenv and run flask with python
2. and goto "ip"/upload

#### Endpoint
http://104.197.16.252/

#### Upload
<ul>
  <li>URL
    <ul>
      <li><code>/upload</code></li>
    </ul>
  </li>
  <li>Method
    <ul>
      <li>POST</li>
    </ul>
  </li>
  <li>Headers
    <ul>
      <li>
        <code>Content-Type</code> : <code>multipart/form-data</code>
      </li>
    </ul>
  </li>
  <li>Request Body
    <ul>
      <li>
        <code>picture_path</code> as <code>file</code> 
      </li>
      <li>
        <code>kind_model</code> as <code>string</code> 
      </li>
    </ul>
  </li>
  <li>Response</li>

```
{
    "error": false,
    "message": "success",
}
```

</ul>

#### Result
<ul>
  <li>URL
    <ul>
      <li><code>/result</code></li>
    </ul>
  </li>
  <li>Method
    <ul>
      <li>GET</li>
    </ul>
  </li>
  <li>Parameters
    <ul>
      <li>
        <code>id</code> as <code>string</code>
      </li>
    </ul>
  </li>
  <li>Response</li>

```
{
  "error": false, 
  "id": "1654407149", 
  "message": "success", 
  "productList": [
    {
      "linkProduct": "https://www.tokopedia.com/synergypusat/elemence-vera-gel", 
      "name": "Elemence Vera Gel", 
      "photo": "/home/a7009f0996/Gambar/24_Wrinkles/1.png"
    }
  ], 
  "rekomendationList": [
    "Using aloe vera gel", 
    "use vitamin C in the form of L-ascorbic acid", 
    "Avoid sun exposure", 
    "Use the right skin care products", 
    "Use a serum that contains retinol", 
    "Drinks that contain collagen"
  ], 
  "resultDetection": "Wrinkles"
}
```

</ul>

<br/>

### Mobile Development
#### Prerequisites
1. Android 5.0 Lollipop (SDK 21) or above.

#### Installation
1. Download the APK Files [here](#).
2. Install APK FIles (Allow permission install from Unknown Source).

#### How to use
1. Open App.
<br/>
<br/>


## Contact us
* Bayu Setiawan : [warnaf09@gmail.com](warnaf09@gmail.com)
* Andre Maula Raufiq : [andremr107@gmail.com](andremr107@gmail.com)
* Bagus Imam Prakoso : [bagusimamprakoso58@gmail.com](bagusimamprakoso58@gmail.com)
* Ibnu Topan Adib Amrulloh : [resyaderesya@gmail.com](resyaderesya@gmail.com)
* Fadhel Rizky Pratama : [fadhelrizky01@gmail.com](fadhelrizky01@gmail.com)
* Barrata Persada Putra Alam : [barrstapersadaputra@gmail.com](barrstapersadaputra@gmail.com)