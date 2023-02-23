import { Profile } from "./Profile";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
import transactions from "../data/transactions.json";
export const App = () => {
  return (
    <>
 <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics
        stats={data}
        title='Upload stats'
/>

      
      <FriendList friends={friends} />

      <TransactionHistory
        items={transactions}


       />
    </>
  
   
    
  );
};

