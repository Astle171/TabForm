import { useEffect, useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    interest: [],
    theme: "dark",
  });
  const [err, setErr] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let errObj = {};
        const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = regex.test(data.email);

        if (!data.name || !data.name.length > 2) {
          errObj = {
            ...errObj,
            name: "Please Enter Valid name",
          };
        }
        if (!data.age || data.age < 18) {
          errObj = {
            ...errObj,
            age: "Please Enter Valid age",
          };
        }
        if (!data.email || !data.email.length > 2 || !isValidEmail) {
          errObj = {
            ...errObj,
            email: "Please Enter Valid email",
          };
        }
        if (errObj.name || errObj.age || errObj.email) {
          setErr(errObj);
          return false;
        }
        setErr({});
        return true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        let errObj = {};
        if (data.interest.length === 0) {
          errObj = {
            ...errObj,
            interest: "Please enter atleast 1 interest",
          };
          if (errObj.interest) {
            setErr(errObj);
            return false;
          }
        }
        setErr({});
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTab = tabs[activeTab].component;
  const handlePrev = () => {
    tabs[activeTab].validate() && setActiveTab(activeTab - 1);
  };
  const handleNext = () => {
    tabs[activeTab].validate() && setActiveTab(activeTab + 1);
  };
  const handleSubmit = () => {
    tabs[activeTab].validate() && console.log(data);
  };
  return (
    <div>
      <div className="tabForm">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="tab"
              onClick={() => {
                tabs[activeTab].validate() && setActiveTab(index);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="body">
        <ActiveTab data={data} setData={setData} err={err} />
      </div>
      <div className="buttons">
        {activeTab > 0 && (
          <button className="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="button" onClick={handleNext}>
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
