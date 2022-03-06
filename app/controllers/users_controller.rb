class UsersController < ApplicationController
  def show
    @user = current_user
    gon.user_income = @user.income
    gon.user_fixed_cost = @user.fixed_cost
  end
end
