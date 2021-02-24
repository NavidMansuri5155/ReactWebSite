import React, { Component } from 'react';
import "./Home.css";



class Word extends Component {
    state = {}
    render() {
        return (
            <>
                <section class="banner-area" id="home">
                </section>

                <section class="about-area" id="about">
                    <div class="text-part">
                        <h1 style={{ textAlign: "center" }}>
                            About Area</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
                    </div>
                </section>

            </>
        );
    }
}

export default Word;