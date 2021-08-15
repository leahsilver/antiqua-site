import React from "react";
import Faq from "react-faq-component";
import "./FAQ.css";
const data = {
  rows: [
    {
      title: "Do Antiquities Belong in a Museum?",
      content:
        "We are often asked about the provenance of these artefacts – whether they should be in museums, and so forth. As the vast majority of our items are not rarities, we try to ensure that they will be affordable and ownable by all. In a museum, smaller items of less historical importance are often lost amongst the Rosetta Stones and Elgin Marbles of the world. We believe everyone should have the opportunity to own a small piece of antiquity, provided the artefacts are sufficiently common, have no national value and do not legitimately belong within a museum environment.",
    },
    {
      title: "Do you sell genuine or reproduction items?",
      content: `The items for sale are genuine ancient objects.`,
    },
    {
      title: "Do you guarantee authenticity?",
      content: `We unconditionally guarantee authenticity.

      A detailed receipt is included with all orders guaranteeing the age, culture, description and provenance of each object.`,
    },
    {
      title: "How can we trust your website?",
      content: `We have been trading since 1989 and have one of the best reputations in the business.
      We pride ourselves on our ethical and transparent trading policies which far exceed most of our competitors.
      But don't take our word for it! It makes really good sense to not only search the internet for independent advice but also ask museums, universities, other dealers and trade associations for opinions`,
    },
    {
      title: "Who is the website for?",
      content: `For anyone who loves antiques, who loves to collect.`,
    },
    {
      title: "isn't there a lot of looted material on the market?",
      content: `There are unfortunately a few unpleasant vocal extremists in the archaeological community who oppose the very idea of private possession of antiquities. They apparently believe that only they should be able to handle ancient objects. These people frequently suggest that much of the material on the market is looted and illegally exported from the country of origin. This is used as an argument for forbidding the trade and private possession of antiquities.
 
      We believe that the amount of looted material on the market is greatly exaggerated. As shown above the market is largely supplied by the vast amounts of legally acquired antiquities collected over the last 300 years. Indeed, many of the objects in dealers and auction catalogues have been circulating on the market for decades, even centuries. Those opposed to the antiquities trade frequently say that if an antiquity is unprovenanced then there is a good chance that it is looted. This is an argument that can easily be countered. Firstly, in the 18th and 19th Centuries, provenance was often not considered important and so was not recorded. Secondly, it is sometimes the case, that even when a collector has carefully recorded the provenance of an object in his notes, these may get separated from his/her collection and lost, especially when collections are disposed of, after the collector's death, by heirs who may have little interest in antiquities. Thirdly, collectors often record provenance directly on the objects - but unfortunately worn inscriptions and detached labels are all too common. If an item is unprovenanced, the most likely reason for this is that it has been around for a long time on the market and has had a large number of owners.
       
      In reality, the archaeological world, and indeed all of us, owe collectors a great debt of gratitude. Many collectors have made considerable contributions to our museums, enriching their collections and our heritage, and in some cases paying for refurbishment of galleries and displays. The British Museum itself was founded on the legacy of the great collector Sir Hans Sloane.`,
    },
  ],
};

export default function FAQ() {
  return (
    <div className="all-faq">
      <h1 className="hed-faq">FAQ</h1>
      <Faq data={data} />
    </div>
  );
}
