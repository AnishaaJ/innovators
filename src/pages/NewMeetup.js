import { useHistory } from 'react-router-dom';

import NewInnovationForm from '../components/meetups/NewInnovationForm';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Innovation</h1>
      <NewInnovationForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
