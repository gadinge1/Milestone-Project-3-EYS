# Milestone-Project-3-EYS-Ellavate-Your-Skin
Developed a Full Stack Web Application which provides an E-Commerce service. Customers can see a list of Beauty Products for skincare which is sorted in different categories. Also, customers can add items to a cart, pay them through payment services, and see order history.

### Features

Home, About Us, Shop All, User, Cart with CRUD functionality, Order History and Payments

### Bonus Features

Payments, Order History

## Important Links

- Heroku App: ([Link])
- Github Repo: ([Link](https://github.com/gadinge1/Milestone-Project-3-EYS.git))

## Functionality

- Be able to click on the Nav Links 
- Each Nav Link has its own page
- User will Sign Up and Log In
- User will have to Log In to Purchase
- User can add products in the cart

## Bonus Functionality

- User can pay after adding products to cart
- User can see Order History under user's account

## Data Models

Models for SQL Tables

### Account Table

| AccountId | Name | Email | Password | Phone | ShippingAdd | BillingAdd | Username |

### Sales Order Table

| SalesOrderId | CartId | AccountId | ShippingAdd | BillingAdd |

### Cart Table

| CartId |

### Product Table

| ProductId | Category | Description | Manufacturer | Name | Price |

### Routes

| Controller | Method | Route | Description|
| --- | --- | --- | --- |
| Accounts | Get | 'accounts/' | Fetches list of Accounts |
| Accounts | Get | 'accounts/:id' | Fetches specific Account |
|Accounts | Get | 'accounts/sales_order/sales_orderId' | Fetches Accounts for specific Sales Order |
| Accounts | Post | 'accounts/' | Creates a new note |
| Accounts | Put | 'accounts/:id' | Modifies an existing account |
| Accounts | Delete | 'accounts/:id' | Deletes an existing account |
| --- | --- | --- | --- |
| SalesOrders | Get | 'sales_orders/' | Fetches list of sales orders |
| SalesOrders | Get | 'sales_orders/:id' | Fetches specific sales order |
| SalesOrders | Get | 'sales_orders/account/accountId' | Fetches Sales Orders for specific Account |
| SalesOrders | Post | 'sales_orders/' | Creates a new sales order |
| SalesOrders | Put | 'sales_orders/:id' | Modifies an existing sales order |
| SalesOrders | Delete | 'sales_orders/:id' | Deletes an existing sales order |
| --- | --- | --- | --- |
| Carts | Get | 'carts/' | Fetches list of carts |
| Carts | Get | 'carts/:id' | Fetches specific cart |
| Carts | Post | 'carts/' | Creates a new cart |
| Carts | Put | 'carts/:id' | Modifies an existing cart |
| Carts | Delete | 'carts/:id' | Deletes an existing cart |
| ---   | --- | --- | --- |
| Products | Get | 'products/' | Fetches list of products |
| Products | Get | 'products/:id' | Fetches specific product |
| Products | Post | 'products/' | Creates a new product |
| Products | Put | 'products/:id' | Modifies an existing product |
| Products | Delete | 'products/:id' | Deletes an existing product |


### Table Relations
<!-- >![MilestoneProject3-api drawio](https://user-images.githubusercontent.com/92125395/179365995-53fcfe36-05d9-498e-8ff5-96a99a621f32.png)  -->

![MilestoneProject3-api drawio](https://user-images.githubusercontent.com/92125395/179365995-53fcfe36-05d9-498e-8ff5-96a99a621f32.png)
