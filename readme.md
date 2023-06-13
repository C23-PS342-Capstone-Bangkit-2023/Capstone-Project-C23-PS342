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
Making the model classification

<div style="text-align: justify">The models used for this classification are multi-class classification which's contains four classes for each part of classification. The classifier was built using Artificial Neural Network which built in TensorFlow API and use of InceptionV3's transfer learning for enhance the performance. The classifier we build made of approximately four hundreds (400) of datasest with each of classes contains 100 images (90:10 split for training and validation test). Datasets are collected manually by using several search engine website, free-popular website images (unsplash, freepik, etc.), and some manually images generated by the team. Before training, the dataset going to the preprocessing cycle for cleaning the datasets.

The Classifier approximately have accuracy up to 75% for skin disease and 80-82% for skin type. Still not good but still decent. All the notebooks code, datasets, and model weight for these purposes are provided in this repository.  
</div>
<br/>

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
    "id": "1654407149"
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
2. Internet Connection.
3. Good condition Front Camera.

#### Installation
1. Download the APK Files [here](https://drive.google.com/file/d/16VFXb8_nopExz600548qxxIaUeicEZJK/view?usp=sharing).
2. Install APK FIles (Allow permission install from Unknown Source).

#### How to use
1. Open App.
2. Press the "Get Started" botton on Landing Page.
3. Select the desired Detection Type (Skin Disease or Skin Type).
3. Press the "Take a selfie" button to take a photo from the front camera, or press the "Upload from gallery" button to select a photo from the gallery.
4. If you choose "Take a selfie", you must give permission to use the camera on this app. Then take a photo by pressing the shutter button.
5. If you choose "Upload from Gallery", select the photo you want to detect, then crop the image and point it directly at your face.
6. if you want to re-take the photo, you can press the "Try Again" button. If not, press the "Procces" button to start the detection.
7. Please wait a moment, let HealthLens detect your facial skin and provide you with accurate results!
8. Now, The prediction about your skin type or skin problem has been out! You can also see recommendations for what to do to take care of your face and product recommendations based on your facial condition!
<br/>
<br/>


## Contact us
* Miftahul Ardli (M2011G1151) - [miftahul18002@mail.unpad.ac.id](mailto:miftahul18002@mail.unpad.ac.id)
* Ni Luh Melika Candra Widyani Mas (M2232F2123) - [melika.candra@gmail.com](mailto:melika.candra@gmail.com)
* Alvin Steven (C2007F0655) - [alvin.pin108@gmail.com](mailto:alvin.pin108@gmail.com)
* Muhammad Alwi Abdul Aziz (C7007F0656) - [112201906316@mhs.dinus.ac.id](mailto:112201906316@mhs.dinus.ac.id)
* Tegar Naufal Hanip (A7009F0996) - [tegarnaufalh@gmail.com](mailto:tegarnaufalh@gmail.com)
* Vinna Mariska (A2009f0997) - [vinna.mariska@gmail.com](mailto:vinna.mariska@gmail.com)