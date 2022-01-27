class SongsController < ApplicationController

    def index
        song = Song.all
        render json: song
        end


    # def create
    #     song = Song.create!(song_params)
    #     render json: song, status: :created
    # end

    def create
        song = Song.create!(song_params)
        render json: song, status: :created
    end

    def destroy
        song = find_by_id
        song.destroy
    end

    private  

    def  song_params
        params.require(:song).permit(:title, :artist, :duration, :image, :user_id)
        # params.permit(:title, :artist, :duration, :image :user_id, playlist_id: [])
    end

    def find_by_id
        Song.find(params[:id])
      end


end
