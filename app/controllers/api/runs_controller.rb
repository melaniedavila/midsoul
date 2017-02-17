class Api::RunsController < ApplicationController
  def create
    @run = Run.new(run_params)
    # @run.creator_id = current_user.id
    # @running_route = Route.find_by(id: @run.route_id)
    # @run.distance = @running_route.distance

    ##### below for testing only
    @run.creator_id = 1
    @run.route_id = 1
    ##### above for testing only

    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 422
    end
  end

  def show
    @run = Run.find(params[:id])
    render :show
  end

  def destroy
    @run = Run.find(params[:id])
    @run.destroy
    render :show
  end

  def update
    @run = Run.find(params[:id])
    if @run.update(run_params)
      render :show
    else
      render json: @run.errors.full_messages, status: 422
    end
  end

  def index
    @runs = Run.all
    render :index
  end

  private
  def run_params
    params.require(:run).permit(:date, :description, :duration, :route_id)
  end
end
