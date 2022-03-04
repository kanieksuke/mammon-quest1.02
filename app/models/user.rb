class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  with_options presence: true do
    validates :target_amount, numericality: {only_integer: true, greater_than_or_equal_to: 1}
    validates :target_date, numericality: {only_integer: true, greater_than_or_equal_to: 1}
    validates :income, numericality: {only_integer: true}
    validates :fixed_cost, numericality: {only_integer: true}
  end
end
