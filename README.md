1)Spent about an hour trying to figure out why my requests to bd dont work. It appeared that the problem was in the first lines of my code: I tried to access process.env.DATABASE_URL before calling dotenv.config(). Changed the places and everything started to work.
2)Added the Form component using class demo.
3)Set a route from the form to my db
4)Made a new component for guest's comments
