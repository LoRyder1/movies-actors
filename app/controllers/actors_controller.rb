class ActorsController < ApplicationController
  def create
    @movie = Movie.find(params[:mvoie_id])
    @actor = @movie.actors.create(actor_params)
    redirect_to movie_path(@movie)
  end

  private
  def actor_params
    params.require(:actor).permit(:firstname, :lastname)
  end
end
