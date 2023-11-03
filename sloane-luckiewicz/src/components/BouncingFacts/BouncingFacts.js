import { React } from 'react';

export const BouncingFacts = () => {
    let canvas, ctx, gravity, ball, friction
  
    function init () {
      canvas = document.getElementById('gameCanvas')
      ctx = canvas.getContext('2d')
  
      canvas.width = 800
      canvas.height = 800
  
      gravity = 0.25
      friction = 0.98
  
      window.requestAnimationFrame(update)
    }
  
    function draw () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  
    function update () {
      window.requestAnimationFrame(update)
  
      draw()
    }
  
    document.addEventListener('DOMContentLoaded', init)
  }
