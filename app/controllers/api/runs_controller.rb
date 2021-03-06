class Api::RunsController < ApplicationController
  before_action :require_log_in!

  def create
    @run = Run.new(run_params)
    @run.runner_id = current_user.id

    if @run.save
      render :show
    else
      render json: @run.errors.full_messages, status: 422
    end
  end

  def show
    @run = Run.includes(:runner).find(params[:id])
    if current_user.id == @run.runner_id || current_user.friends.include?(@run.runner)
      render :show
    else
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
