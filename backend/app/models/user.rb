class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :ratings

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

    def attributes_to_send
        self.slice(:id, :username, :email)
    end

end
