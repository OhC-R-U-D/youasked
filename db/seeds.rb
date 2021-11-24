users = [
    {
        alias: "clueless",
        email: "jimbob@email.com",
        password: "123456",
        password_confirmation: "123456"
    },

    {
        alias: "tswizzle07",
        email: "jenny@email.com",
        password: "123456",
        password_confirmation: "123456"
    },

    {
        alias: "concerneddad",
        email: "yesthisisdad@email.com",
        password: "123456",
        password_confirmation: "123456"
    },

    {
        alias: "beetfarmer",
        email: "dwightschrute@email.com",
        password: "123456",
        password_confirmation: "123456"
    },
]

users.each do |attributes|
    User.create attributes
    puts "creating user #{attributes}"
end

user1=User.find_by alias: 'clueless'
user2=User.find_by alias: 'tswizzle07'
user3=User.find_by alias: 'concerneddad'
user4=User.find_by alias: 'beetfarmer'

user1questions = [
    {
        post:"Is this toast burnt?",
        img_url:"https://live.staticflickr.com/298/31930376435_7d1dcc40ef_b.jpg"
    },

    {
        post:"My coworker hates garlic and shys away from bright light....are they are vampire?",
        img_url:"https://m.media-amazon.com/images/M/MV5BYmQxYjNiYzgtMDkxZS00NjBjLTk0MDEtZGQyZjkyNGNmYTI2XkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg"
    }
]

user1questions.each do |attributes|
    user1.questions.create attributes
    puts "creating questions for user 1 #{attributes}"
end

user2questions = [
    {
        post:"Should I tip my nail artist?"
    },

    {
        post:"My little brother likes triceratops. Do you think they would like this poster?",
        img_url:"https://30.media.tumblr.com/tumblr_lmpsytVY6q1qf5zj9o1_500.jpg"
    }
]

user2questions.each do |attributes|
    user2.questions.create attributes
    puts "creating questions for user 2 #{attributes}"
end

q1=Question.find_by post: 'Is this toast burnt?'
q2=Question.find_by post: 'My coworker hates garlic and shys away from bright light....are they are vampire?'
q3=Question.find_by post: 'Should I tip my nail artist?'
q4=Question.find_by post: 'My little brother likes triceratops. Do you think they would like this poster?'

q1answers = [
    {
        comment:"Looks like something my wife would make!",
        user_id: user3.id
    },
    
    {
        comment:"Bread is the paper of the food industry. You write your sandwich on it",
        user_id: user4.id
    }
]

q1answers.each do |attributes|
    q1.answers.create attributes
    puts "creating answers for question 1 #{attributes}"
end


q2answers = [
    
    {
        comment:"ur just being paranoid",
        user_id: user2.id
    },
    
    {
        comment:"I don’t have a lot of experience with vampires, but I have hunted werewolves. I shot one once, but by the time I got to it, it had turned back into my neighbor’s dog.",
        user_id: user4.id
    }
]

q2answers.each do |attributes|
    q2.answers.create attributes
    puts "creating answers for question 2 #{attributes}"
end

q3answers = [
    
    {
        comment:"Accepted tip for a nail salon is 20%!",
        user_id: user3.id
    },
    
    {
        comment:"Why tip someone for a job I’m capable of doing myself? I can deliver food. I can drive a taxi. I can, and do, cut my own hair. I did, however, tip my urologist, because I am unable to pulverize my own kidney stones.",
        user_id: user4.id
    }
]

q3answers.each do |attributes|
    q3.answers.create attributes
    puts "creating answers for question 3 #{attributes}"
end

q4answers = [
    
    {
        comment:"whys that guy on a dinosaur?",
        user_id: user1.id
    },

    {
        comment:"It's a Mike-Cera-tops!",
        user_id: user3.id
    },

    {
        comment:"That’s cool. Hey, you know what’s even cooler than triceratops? Every other dinosaur that ever existed.",
        user_id: user4.id
    }
]

q4answers.each do |attributes|
    q4.answers.create attributes
    puts "creating answers for question 3 #{attributes}"
end
