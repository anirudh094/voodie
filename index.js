

 // Set the target numbers
 const targetOrders = 100; // Replace with your desired target number of orders
 const targetCustomers = 98; // Replace with your desired target number of satisfied customers
 
 // Function to animate the counters
 function animateCounters() {
   let currentOrders = 0;
   let currentCustomers = 0;
   const ordersCounter = document.getElementById('counter');
   const customersCounter = document.getElementById('customers-counter');
 
   const ordersInterval = setInterval(() => {
     if (currentOrders === targetOrders) {
       clearInterval(ordersInterval);
     } else {
       currentOrders++;
       ordersCounter.innerText = currentOrders;
     }
   }, 20);
 
   const customersInterval = setInterval(() => {
     if (currentCustomers === targetCustomers) {
       clearInterval(customersInterval);
     } else {
       currentCustomers++;
       customersCounter.innerText = currentCustomers;
     }
   }, 20);
 }
 
 // Call the animateCounters() function to start the animations
 animateCounters();