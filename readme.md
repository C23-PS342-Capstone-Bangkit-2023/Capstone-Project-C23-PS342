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

<div style="text-align: justify">
  lorem 
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