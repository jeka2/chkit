require 'faker'

['general', 'new', 'popular', 'sports', 'news'].each do |category|
    Category.create(name: category)
end

10.times do |count| 
    User.create(username: "user#{count}", email: "email#{count}", password: "password")
end

1.upto(100) {
    offset = rand(User.count)
    random_user_id = User.offset(offset).first.id

    offset = rand(Category.count)
    random_category_id = Category.offset(offset).first.id
    

    Post.create(title: Faker::Nation.capital_city, content: Faker::Lorem.sentence, 
                user_id: random_user_id, category_id: random_category_id, views: 0, score: 0)
}

1.upto(10000) {
    offset = rand(User.count)
    random_user_id = User.offset(offset).first.id

    offset = rand(Post.count)
    random_post = Post.offset(offset).first
    random_post_id = random_post.id

    type = rand(5) > 1 ? 'increase' : 'decrease'

    change = type == 'increase' ? 1 : -1

    Post.update(random_post_id, :score => random_post.score + change)
    Rating.create(user_id: random_user_id, post_id: random_post_id, rating_type: type)
}

10.times do |count| 
    post = Post.find(count + 1)

    1.upto(10) {
        offset = rand(User.count)
        random_user_id = User.offset(offset).first.id

        Comment.create(post_id: post.id, user_id: random_user_id, content: Faker::Lorem.sentence(word_count: 20))
    }
end