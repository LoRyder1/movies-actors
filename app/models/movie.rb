class Movie < ActiveRecord::Base
  has_many :actors
  validates :title, presence: true, 
                    length: {minimum: 5}
end
