class Api::FeedsController < ApplicationController
  before_action :require_log_in!

  def show
    @feed = feed_for(user_id: params[:user_id])
    render :show
  end

  private
  
    def feed_for(opts)
      if opts[:user_id]
        runs = Run.find_by(runner_id: opts[:user_id])
        routes = Route.find_by(creator_id: opts[:user_id])
      end
    end
end
