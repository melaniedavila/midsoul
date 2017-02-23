class Api::FeedsController < ApplicationController
  def show
    @feed = feed_for(user_id: params[:user_id])
    debugger
    render :show
  end

  private

  def feed_for(opts)
    debugger
    if opts[:user_id]
      debugger
      
      runs = Run.find_by(runner_id: opts[:user_id])
      routes = Route.find_by(creator_id: opts[:user_id])


    elsif opts[:friend_ids]
      # get many users' activities
    end
  end
end
