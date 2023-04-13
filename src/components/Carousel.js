import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div class="carousel-inner">
                <div className="carousel-caption" style={{zIndex : "10"}}>
                    <form class="d-flex">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary my-2 my-sm-0 mx-2 text-white" type="submit">Search</button>
                    </form>
                </div>
                <div class="carousel-item active">
                <img src="https://source.unsplash.com/random/300×300/?burger" class="d-block w-100" style={{filter : "brightness(30%)"}} alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://source.unsplash.com/random/300×300/?pizza" class="d-block w-100" style={{filter : "brightness(30%)"}} alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://source.unsplash.com/random/300×300/?pastry" class="d-block w-100" style={{filter : "brightness(30%)"}} alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
