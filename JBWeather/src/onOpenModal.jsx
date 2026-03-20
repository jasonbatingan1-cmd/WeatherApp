//on-open modal for user to select city and country
import React from 'react'

export default function onOpenModal() {
  return (
    <>
      <section id="modal">
        <h2>Enter City and Country</h2>
        <input type="text" placeholder="City" id="city-input" />
        <input type="text" placeholder="Country" id="country-input" />
        <button id="submit-btn">
          Submit
        </button>
      </section>
    </>
  )
}