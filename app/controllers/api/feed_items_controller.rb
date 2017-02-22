class Api::FeedItemsController < ApplicationController
  def index
    @feed_items = FeedItem.
      order(created_at: 'DESC').
      where(user_id: params[:user_ids]).
      includes(:feedable)
  end
end
