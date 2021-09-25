# Hip-Hop, Pizza, and Wangs

[![Netlify Status](https://api.netlify.com/api/v1/badges/adc89a2e-4447-4647-94dc-82331f6a933c/deploy-status)](https://app.netlify.com/sites/hip-hop-pizza-and-wangs-thonth/deploys)

This POS system allows users to create and manage customer orders and items on those orders. It also allows the user to take payment on orders and gives information about revenue totals.

Site Link: https://hip-hop-pizza-and-wangs-thonth.netlify.app/

## Get Started 

```
git clone git@github.com:nss-evening-cohort-16/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair.git

cd hip-hop-pizza-and-wangs-to-hair-or-not-to-hair
```

## About the User

The user is a restaurant employee who needs to keep track of many orders with multiple items on each order.

## Features 

...coming soon.

## Video Walkthrough

...coming soon.

## Relevant Links

Group Repo: https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair

Flow Chart: https://docs.google.com/presentation/d/1Qgufr6pGdFCHUMvFWE_VAuMySfiHPk7DIsD19MITBLs/edit#slide=id.p

ERD: https://dbdiagram.io/d/613ff10d825b5b0146007626

Planning outline: https://docs.google.com/document/d/1bM0xNup80ojB7FfoTbzg0g_TirNbltSMiF3WdK9OvMs/edit

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->

```
const orderItemsTotal = async () => {
  const closedOrders = await getClosedOrders();
  const itemPromiseArray = closedOrders.map((items) => getItems(items.firebaseKey));
  const itemPromise = await Promise.all(itemPromiseArray).then((items) => {
    const closedItems = [];
    items.forEach((item) => {
      closedItems.push(...item);
    });
    return closedItems;
  });
  return itemPromise;
};
```

The above code was a group effort, and returns all of the closed items in an array. This array then is used to calculate the total revenue.

## Project Screenshot

![ss-hhpw](https://user-images.githubusercontent.com/70224936/134779574-d97f7f98-662d-49be-819f-49845ee1e538.png)

## Contributors

Elle Lawrence: https://github.com/elle-lawrence

Derek Malone: https://github.com/DerekMalone

Joe Gibbs: https://github.com/jgibbs1188

Austin Parker: https://github.com/austincparker
