import InnovationItem from './InnovationItem';
import classes from './InnovationList.module.css';

function InnovationList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <InnovationItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default InnovationList;
