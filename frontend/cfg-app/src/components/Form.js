import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  // Form inputs
  elements: [{
    name: "Day",
    title: "Day:",
    type: "text"
  }, {
    name: "Time",
    title: "Time:",
    type: "text"
  }, {
    name: "Time",
    title: "Title:",
    type: "text"
  }, {
    name: "Time",
    title: "Account:",
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