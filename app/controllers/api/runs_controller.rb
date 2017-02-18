class Api::RunsController < ApplicationController
  def create
    @run = Run.new(run_params)
    # @run.creator_id = current_user.id
    # @running_route = Route.find_by(id: @run.route_id)
    # @run.distance = @running_route.distance

    ##### below for testing only
    @run.runner_id = 1
    @run.route_id = 1
    @run.date = Date.today
    ##### above for testing only
    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 422
    end
  end

  def show
    @run = Run.find(params[:id])
    if current_user.id == @run.runner_id # or we are a friend of runner:
      debugger
      render :show
    else
      # ???? below ok? remove base ????
      debugger
      # render json: { base: ['You are not authorized to see this run.'] }, status: 422
      render json: ['You are not authorized to see this page.'], status: 422
    end
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
    @runs = Run.where(runner_id: current_user.id)
    render :index
  end

  private
  def run_params
    params.require(:run).permit(:date, :description, :duration, :route_id, :title)
  end
end
