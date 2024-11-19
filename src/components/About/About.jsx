import React from 'react'
import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt=""
            />
            <ul>
                <li>
                    <img
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt=""
                    />
                </li>
            </ul>
        </div>
    </section>
  )
}
