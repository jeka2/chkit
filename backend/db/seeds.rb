require 'faker'

['general', 'new', 'popular', 'sports', 'news'].each do |category|
    Category.create(name: category)
end

10.times do |count| 
    User.create(username: "user#{count}", email: "email#{count}", password: "password")
end

1.upto(1000) {
    offset = rand(User.count)
    random_user_id = User.offset(offset).first.id

    offset = rand(Category.count)
    random_category_id = Category.offset(offset).first.id
    

    Post.create(title: Faker::Nation.capital_city, content: Faker::Lorem.sentence, 
                user_id: random_user_id, category_id: random_category_id, views: 0, likes: 0, dislikes: 0)
}