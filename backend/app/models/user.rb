class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

    def attributes_to_send
        self.slice(:id, :username, :email)
    end

end
