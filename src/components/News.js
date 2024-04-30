import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "medical-news-today",
        name: "Medical News Today",
      },
      author: "Corrie Pelc",
      title:
        "Food additives in cakes, biscuits may increase type 2 diabetes risk",
      description:
        "A new study has identified 7 food additive emulsifiers found in common, mass-produced foods that are linked to an increased risk of type 2 diabetes.",
      url: "https://www.medicalnewstoday.com/articles/do-common-food-additives-found-in-cakes-and-biscuits-increase-type-2-diabetes-risk",
      urlToImage:
        "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/04/cake-factory-overhead-1200-628-facebook.jpg",
      publishedAt: "2024-04-28T06:00:00Z",
      content:
        "<ul><li>About 530 million adults around the world have diabetes, with type 2 diabetes accounting for 98% of cases.</li><li>Certain lifestyle choices, such as following an unhealthy diet and eating ul… [+7684 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Heather Haddon",
      title: "California Fast-Food Chains Are Now Serving Sticker Shock",
      description:
        "Higher state minimum wage went into effect April 1; chains say burritos and burgers are getting more expensive in response",
      url: "https://www.wsj.com/business/hospitality/california-fast-food-chains-are-now-serving-sticker-shock-64009282?mod=hp_lead_pos5",
      urlToImage: "https://images.wsj.net/im-953919/social",
      publishedAt: "2024-04-28T03:00:00Z",
      content: null,
    },
    {
      source: {
        id: "recode",
        name: "Recode",
      },
      author: "Whizy Kim",
      title: "From DoorDash to UberEats, why is food delivery so expensive?",
      description:
        "As delivery discourse rages, don’t forget the middlemen: apps like UberEats, DoorDash, and Grubhub.",
      url: "https://www.vox.com/money/24118201/food-delivery-cost-expensive-doordash-ubereats-grubhub",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/NQzdUYLcPRVFIQRAogROp0lgNv0=/0x0:4244x2222/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25366168/GettyImages_1287186696.jpg",
      publishedAt: "2024-04-02T12:00:00Z",
      content:
        "No one is happy about the delivery apps. Not the customers, who feel gouged by an avalanche of fees. Not restaurants, who feel gut-punched by the commission apps take from them. Certainly not deliver… [+12105 chars]",
    },
    {
      source: {
        id: "the-next-web",
        name: "The Next Web",
      },
      author: "Siôn Geschwindt",
      title:
        "Mobility giant Bolt adopts self-driving Starship robots for food delivery",
      description:
        "Bolt plans to roll out thousands of the robots across multiple countries, starting in its home city of Tallinn later this year.",
      url: "http://thenextweb.com/news/mobility-giant-bolt-adopts-self-driving-starship-robots-for-food-delivery",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2Fbolt-starship-robot-delivery.jpg&signature=c902ce701ce95e20f6fd703a50ad52ca",
      publishedAt: "2023-06-22T09:17:15Z",
      content:
        "European ride-hailing firm Bolt will start using self-driving robots to deliver customers food as part of a new partnership with fellow Estonian company Starship Technologies, announced yesterday.  \r… [+2447 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Dipak K Dash",
      title:
        "Government to provide 5 kg free food grains to poor for May & June",
      description:
        "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      url: "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-04-23T04:23:00Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("hyy i am constructor from news compo");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News-24/7 - Top Headlines</h2>
        {this.state.articles.map((element) => {
          console.log(element);
        })}
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" imageUrl="" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
