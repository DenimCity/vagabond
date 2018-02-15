User.destroy_all
City.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user = User.create(name:'Danny',current_city:'Miami', description:'Im a retired Farmer from Michigan', user_photo:'http://stevensegallery.com/200/300', gender:'Male', relationship_status:'single')
city = City.create(name: 'Atlanta', photo_url: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-0.3.5&s=a593b58c119168e3b1eefc1d5cf9acf1&auto=format&fit=crop&w=1350&q=80', summary:' The City of Trees founded in 1521 by Jeans Jams', latitude:'33.7490', longitude: '84.3880', state:'Georgia', country:'US', nickname:'Home of the FreakNik', population:'472,522', city_type:'Urban'  )
post = Post.create(city: city, title: 'Vortex', body: 'Over-the-top burgers such as a triple cheeseburger between two grilled cheese sandwiches', post_photo:'http://www.q100atlanta.com/wp-content/uploads/sites/214/2016/06/20140516-293110-atlanta-top-10-burgers-vortex-storefront.jpg')
post = Post.create(city: city, title: 'Ponce City Market', body: 'Ponce City Market is a mixed-use development located in a historic building in Atlanta.', post_photo: 'http://www.q100atlanta.com/wp-content/uploads/sites/214/2016/06/20140516-293110-atlanta-top-10-burgers-vortex-storefront.jpg')
post = Post.create(city: city, title: 'The Mercedes-Benz Stadium', body: 'The Mercedes-Benz Stadium is a multi-purpose retractable roof stadium located in Atlanta, Georgia.', post_photo: 'http://stadiumdb.com/pictures/stadiums/usa/mercedes_benz_stadium/mercedes_benz_stadium01.jpg')
post = Post.create(city: city, title: 'Philips Arena', body: `The arena is home to the NBA's Atlanta Hawks and the WNBA's Atlanta Dream.`, post_photo:'http://www.gafollowers.com/wp-content/uploads/2017/02/Arena.jpg', )


city = City.create(name: 'San Francisco', photo_url: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-0.3.5&s=a593b58c119168e3b1eefc1d5cf9acf1&auto=format&fit=crop&w=1350&q=80', summary: 'The City of Bays founded in 1521 by Jeans James', latitude:'33.7490', longitude: '84.3880', state:'California', country:'US', nickname:'City with The Red Bridge', population:'522,446', city_type:'Urban')
post = Post.create(city: city, title: 'Alcatraz', body: 'This is where the movie The Rock was filmed.', post_photo:'https://pbs.twimg.com/media/CDEbI8JUgAEtUIS.jpg')
post = Post.create(city: city, title: 'General Assembly', body: 'This is where I am teaching.', post_photo:'http://payload377.cargocollective.com/1/3/122186/9852796/MR_150105_General-Assembly_0029_670.jpg')

user = User.create(name: 'Tom', current_city: 'Orlando', description:'Hi, I am a professional golfer', user_photo: 'https://placeimg.com/200/300/people', gender: 'Male', relationship_status: 'married')
city = City.create(name: 'Orlando', photo_url: 'https://images.unsplash.com/photo-1452717602770-b78d1b2115e1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=a4149f03474bf7486124d682a8e93e8a', summary: 'Orlando, a city in central Florida, is home to more than a dozen theme parks.', latitude: '28.5383', longitude: '81.3792', state: 'Florida', country: 'US', nickname: 'O-Town', population: '277,173', city_type: 'Urban')
post = Post.create(city: city, title: 'COWFISH', body: 'The Cowfish at CityWalk Orlando features custom-designed burgers, fresh sushi, and our own Burgushi.', post_photo:'http://www.adventuresbydaddy.com/wp-content/uploads/2014/12/B4h6uacCcAIUbXI.jpg')
post = Post.create(city: city, title: 'Disney Springs', body: 'Uncover an array of unique shops, world-class eateries and eclectic', post_photo:'https://tribunecontentagency.com/wp-content/uploads/2016/06/id20160602msttk-a.jpg') 
