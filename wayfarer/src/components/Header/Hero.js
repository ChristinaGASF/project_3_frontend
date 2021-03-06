import React, { Component } from 'react'
import {Carousel, Well} from 'react-bootstrap'

class Hero extends Component{
    render(){
        return(
        <React.Fragment>
            <Well>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img width={1250} height={750} alt="London Hero" src="../images/london_hero.jpg" />
                            <Carousel.Caption>
                                <h3>London</h3>
                                <p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1250} height={750} alt="San Francisco Hero" src="../images/sanfrancisco_hero.jpg" />
                            <Carousel.Caption>
                                <h3>San Francisco</h3>
                                <p>San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1250} height={750} alt="Seattle Hero" src="../images/seattle-hero.jpg" />
                            <Carousel.Caption>
                                <h3>Seatle</h3>
                                <p>Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World’s Fair legacy, is its most iconic landmark.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1250} height={750} alt="Sydney Hero" src="../images/sydney_hero.jpg" />
                            <Carousel.Caption>
                                <h3>Sydney</h3>
                                <p>Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1250} height={750} alt="NewYork Hero" src="../images/newyork_hero.jpg" />
                            <Carousel.Caption>
                                <h3>New York</h3>
                                <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Well>
        </React.Fragment> 
        )
    }
}

export default Hero


