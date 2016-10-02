class MoviesController < ApplicationController
  def new
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def create
    @movie = Movie.new params[:movie]    

    if @movie.save
      redirect_to @movie
    else
      render 'new'
    end
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :text)
  end
end
