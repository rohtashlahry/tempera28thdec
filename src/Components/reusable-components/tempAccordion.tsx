import React, { useState, useEffect } from "react";
import "./tempAccordion.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const TempAccordion = () => {
  const data = [
    {
      id: 1,
      title: "1 What is a digital marketing agency?",
      subTitle: "Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.",
    },
    {
      id: 2,
      title: "2 What is a digital marketing agency?",
      subTitle: "Sub title What is a digital marketing agency? Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.",
    },
    {
      id: 3,
      title: "3 What is a digital marketing agency?",
      subTitle: "Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.",
    },
    {
      id: 4,
      title: "4 What is a digital marketing agency?",
      subTitle: "Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.Sub title What is a digital marketing agency?",
    },
    {
      id: 5,
      title: "5 What is a digital marketing agency?",
      subTitle: "Digital marketing agencies have expertise in various online channels and strategies, helping businesses reach their target audience, increase online visibility.Sub title What is a digital marketing agency?",
    },
    {
      id: 6,
      title: "6 What is a digital marketing agency?",
      subTitle: "Sub title What is a digital marketing agency?",
    },
  ];
  const [showSubTitle, setShowSubTitle] = useState(false);

  const handleAccordionClick = (index: any) => {
    setShowSubTitle((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="tempCordion_container">
        <h1 className="tempCordion_title">Get answers to all your questions</h1>
        <div className="tempCordion_inner">
          {data.map((x: any) => {
            return (
              <div className={`${showSubTitle === x.id ? "maped_accordion_selected" : "maped_accordion" }`} key={x.id}>
                <div className="maped_accordion_main" onClick={() => handleAccordionClick(x.id)}>
                  <div className="title_cordion">{x.title}</div>
                  <div className="title_cordion_btn">
                    {
                      <p>
                        {showSubTitle === x.id ? <RemoveCircleIcon className="title_cordion_btn_icon"/> : <AddCircleOutlineIcon className="title_cordion_btn_icon"/>}
                      </p>
                    }
                  </div>
                </div>
                {showSubTitle === x.id && (
                  <div className="sub_title_cordion">{x.subTitle}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TempAccordion;
