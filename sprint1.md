Sprint 1

Scenario for KHABO

  

Hakkim is a bachelor, he does not know how to cook nor does he want to bother. He does not want to hire someone to do so because he feels uncomfortable as he does not stay at home much and he has some health concerns and dietary constraints which he must maintain. He did not like ordering from Foodpanda everyday and wasting half his time just scrolling for the right meal. So he decided to go to ‘KHABO’ s website. After entering the homepage he was greeted with a few options.

  

After logging in, he was able to set either a weekly plan, a monthly plan or even a yearly plan. He could make his own packages from ‘KHABO’s selection of food to be delivered to his home, he could set a menu for breakfast, lunch and dinner separately. He could also select pre-made packages that follow various dietary methods or health concerns (Keto, low carb high protein, Diabetic, etc.). He could also customize those packages as well. If he wanted he could add his health information and using those ‘KHABO’ can suggest the best package for him according to his required calories or health issues. ‘KHABO’ can maintain a calorie count according to the food he consumes.  
  
He could set an auto payment method according to his plan and the amount of food he wants in his packages. Hakkim can cancel his plan anytime and modify his packages whenever he desires. He can set the delivery location to wherever he desires using google maps and before any delivery is on its way ‘KHABO’ is able to confirm his location if he desires to share his live location. Since Hakkim is not comfortable with that, he can also confirm manually through the website, he can schedule deliveries and cancel on the days he does not want food delivered.  
  
To not waste food from ‘KHABO’, delivery is only made if Hakkim confirms. If Hakkim wants he can turn on the option to receive a call before any delivery is on its way.  
  
Hakkim is really happy to have a service such as ‘KHABO’ because he does not have to worry about overspending, overeating or wasting food.

  
  
  

Requirement Analysis:

  

User Authentication and Profile Management:

  

1.  Users should be able to create an account and log in securely.
    
2.  Users should have the ability to update their profile information, including dietary preferences, health concerns, and delivery address.
    

  

Meal Planning and Customization:

  

1.  Users should be able to set meal plans for breakfast, lunch, and dinner separately.
    
2.  Users should have the option to create custom meal packages from a selection of foods provided by KHABO.
    
3.  Pre-made packages should be available and categorized according to various dietary methods and health concerns (e.g., Keto, low carb high protein, Diabetic, etc.).
    
4.  Users should have the ability to customize pre-made packages according to their preferences and dietary requirements.
    
5.  User can chat with a chat-bot
    

  

Calorie Count and Health Information Integration:

  

1.  Users can input their health information, dietary constraints, and required calorie intake.
    
2.  KHABO should suggest the best package for the user based on their health information and calorie requirements.
    
3.  The system should maintain a calorie count according to the food consumed by the user.
    
4.  AI can determine determine food packages with given bmi information
    

  

Subscription and Payment Management:

  

1.  Users can select subscription plans (weekly, monthly, yearly).
    
2.  Auto payment methods should be available for subscription plans.
    
3.  Users should have the flexibility to modify or cancel their subscription plans at any time.
    

  

Delivery Management:

  

1.  Users can set the delivery location using Google Maps.
    
2.  Users should have the option to confirm their location manually through the website.
    
3.  Scheduled deliveries should be possible, and users should have the ability to cancel deliveries for specific days.
    
4.  Delivery is only made upon user confirmation to avoid food wastage.
    
5.  Users can opt to receive a call before any delivery is dispatched.
    

  

User Interface and Experience:

  

1.  The website should have a user-friendly interface for easy navigation.
    
2.  The design should be responsive and accessible across different devices.
    
3.  Clear instructions and prompts should guide users through the meal planning and customization process.
    

  

Privacy and Security:

  

1.  The system should prioritize user privacy and data security.
    
2.  Secure authentication methods should be implemented to protect user accounts.
    
3.  User data, including health information and payment details, should be encrypted and stored securely.
    

  

Specification

  

1.  MERN stack
    
2.  openAI
    
3.  Google maps
    

Feasibility

  

1.  Technical Feasibility: The system requirements are technically feasible. Our chosen framework which is MERN Stack can easily support secure user authentication, profile management, meal planning, customization delivery management, and user interface/experience requirements. Integration with Google Maps for location services and encryption for data security are also well-established practices. We can also handle Subscriptions but for the payment method we can use a dummy system just to show that it is working for this project (Stripe can be implemented for this case). We can use Open AI to implement our chat bot without any issue.
    

  

2.  Operational Feasibility: The system appears to be operationally feasible. It aligns with current trends in the food delivery industry, such as meal customization and health-conscious options. The system’s focus on user-friendly interfaces and clear instructions should facilitate user adoption.
    

  

3.  Economic Feasibility: The system does seem economically feasible and costs would include development, maintenance, and operational costs (such as delivery and ingredient sourcing) but benefits would come from user subscriptions and potential partnerships with health and wellness entities.
    

  

4.  Schedule Feasibility: Considering our Team of four, we can easily build this product but because of our inexperience with MERN stack it may require some time which is why we are trying to start as early as possible, so that we can keep up with the sprints and finish building our product before our deadline.
    

  

Diagrams:

  
![](https://lh7-us.googleusercontent.com/xkafc9eStP6CgULDcH8_nsvMJ2aVqY4lMkarNdyHd5dQdQ2lns0Qqx-npSGkHcraYmZTNTvz1j0ltndDRpWO5wOAGkmVOkv_KIGHO4g6PNAxEHHVOo03krMzW01ldyxQUzegfIobrPva2t8TXwVlIl8)

  

  

  

  

  

Functional Requirements:

1.  User will be able to signup and login.
    
2.  Profile Management
    
3.  Setting meal plans
    
4.  Calorie adjustments
    
5.  Subscription and payment management
    

  

  

  

Non Functional Requirements:

1.  Privacy and security: not being able to log back in without password
    
2.  reliability: calculate all values accurately, user management
    
3.  Integration with google for authentication.
    
4.  The interface needs to be useable, easy to navigate
    
5.  compatibility other devices (smartphone)