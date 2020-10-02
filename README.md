# AirHah

AirBnB clone. AirHaH (read Air-Ha!) stands for "Air Housing and Hashbrowns" :D . Built with PostgreSQL Rails React.  
Shows a list of rentable `Housings`. While logged in, can make `Bookings` and leave `Reviews` for properties.
https://airhah.herokuapp.com/

## Notable MVPs  
### `HousingShow` React Component
The `HousingShow` component of this app has the most features built into it. These include:
* Show `Housing`'s details
* Show list of `Bookings`
* Show list of `Reviews` and average review score
* Render a `Google Maps` of location
* Allow logged in `User` to leave `Reviews` and `Bookings`  
     * When logged in, `create` forms are rendered. When logged out, they are not shown

### Leaving `Reviews` for Housings
Logged in users can leave `Reviews` on `Housings`. The total amount of reviews and their accumulative average per `Housing` are calculated and are visible througout the app. A `User` may only leave one review per `Housing`.  
  
The `Reviews` feature may be improved by allowing only guests who have completed a stay at a Housing to leave reviews.
## Features to Come

### Better Styling  
Smooth out styling of forms, partitions, and animations to make a better looking app.  

### `Searchbar`  
Implement a working `Searchbar` within the `NavBar` to allow searching of `Housings` from anywhere in the app.  

### Dynamic `HousingsIndex`  
With the implementation of a `Searchbar`, allow for the `HousingsIndex` to dynamically show different lists of properties grouped under different cities.
