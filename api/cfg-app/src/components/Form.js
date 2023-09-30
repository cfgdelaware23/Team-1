import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  elements: [{
    name: "Day",
    title: "Enter the day:",
    type: "text"
  }, {
    name: "Time",
    title: "Enter the time:",
    type: "text"
  }, {
    name: "Time",
    title: "Enter the title:",
    type: "text"
  }, {
    name: "Time",
    title: "Enter the account:",
    type: "text"
  }]
};

function App() {
  const survey = new Model(surveyJson);
  const resultsReceived = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
  }, []);

  survey.onComplete.add(resultsReceived);

  return <Survey model={survey} />;
}

export default App;