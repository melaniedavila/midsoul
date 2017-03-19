class Api::FeedItemsController < ApplicationController
  before_action :require_log_in!

  def index
    user_ids = single_user_id || many_user_ids

    @feed_items = FeedItem.
      order(created_at: 'DESC').
      where(user_id: user_ids).
      includes(:feedable)
  end

  private

    def single_user_id
      params[:user_id]
    end

    def many_user_ids
      current_user.friends.pluck(:id)
    end
end
