import React from "react";
import Slide from "../Slide/Slide";
import Card from "./Card";
import Footer from "../Footer/Footer";
import CardTwo from "./CardTwo";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titleTwo: "STRONG STYLE",
      paraOne: "how Women are Readirecting Hollywood",
      pataTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to shop Mindfully",
      qrCode: "/Images/qrcode.png",
      cover: "/images/blog5.jpg",
    },
  ];
  return (
    <>
      <section className="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content" key={value.id}>
                <div className="logo">
                  <h1>M</h1>
                </div>
                <div className="home-img">
                  <img src={value.cover} alt="cover img" />
                </div>
                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className="text text2">
                  <h1>{value.titleTwo}</h1>
                  <p>{value.pataTwo}</p>
                  <span>{value.subTitle}</span>
                </div>
                <div className="qrcode">
                  <img src={value.qrCode} alt="qr code" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
