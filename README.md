# Inspiration
In the light of recent events in Houston and Florida, we found that when disaster strikes, there are a lot of people who need help and a lot of people who want to offer help. However the system is ridden with inefficiencies:

  * Multiple platforms, organizations, social media create an information overload, where a volunteer feels overwhelmed with the people and areas that need their attention.
  * Human dispatchers have to answer calls from victims, manually note down their details and again manually direct volunteers to them. Their access to volunteers is limited and the process is overwhelming, stressful and inefficient as brought to light by this [article](http://www.houstonchronicle.com/local/gray-matters/article/I-downloaded-an-app-And-suddenly-I-was-talking-12172506.php)
  * Illegitimate rescue/help requests from people attempting to rob the volunteers

We wanted to eliminate these issues and simplify the way volunteers can reach and rescue those in need, while also ensuring the process is personal and assures human contact.

# What it does
In the event of a disaster, RescueMe connects victims who need help to the volunteer who is best suited to help them

## To offer help
A registered volunteer who is currently active in or near the disaster area logs-in securely to RescueMe and updates

  * their current location
  * the type of vehicle they have access to
  * how many people can be accommodated in the vehicle
  * whether they are have EMT training
  * whether or not they are currently active and ready to rescue Their details are saved to a database and they will be notified via text message (with the name, phone number and location of person needing help) as soon as they are matched to a rescue request.

## To get help
A disaster victim in need of rescue (or someone aware of their situation) visits our website and enters

  * their location
  * the number of people on their group needing rescue
  * phone number to reach them
  * whether they have a medical emergency When they request a rescue, the victim is assigned a rescuer and they receive a text message with the rescuer's name and phone number.

Rescuers are matched to rescue-seekers based on whether they have access to the required mode of transportation, can accommodate the number of people in the group, proximity and whether they are qualified to address medical emergencies.

# How we built it
We built a web application using Node.js with a PostgresSQL database system. We used Nexmo's SMS API to send text messages to facilitate the rescue mission and MapQuest's Geocoding API to associate a user's co-ordinates with their address to match volunteers and victims. We used React.js and responsive design to create a minimalistic user interface that can be accessed from any device.

# Challenges and lessons
People requiring help are often stressed and in duress. The design of help requests needed to be extremely intuitive and easy to use. Tech used needed to be simple and lightweight so that connectivity is possible even with unreliable network.

# What's next for RescueMe
Allow disaster victims to seek help through different means - call (speech to text), text messages - aside from accessing the website.
Optimizations like including more than one rescue stop based on proximity and logistical feasibility.
Optimizations to match volunteer to victim based on type of disaster, priority, volunteers' experience
Consider ways to offer help and comfort when no rescue volunteer is available
Making RescueMe a one stop platform for all rescue operations for various disaster relief organizations

# Built With
1. javascript
2. node.js
3. react.js
4. postgresql
5. nexmo
6. mapquest
7. express.js
8. sequelize
9. html
10. css
