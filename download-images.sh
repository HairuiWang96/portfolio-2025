#!/bin/bash

# Create projects directory if it doesn't exist
mkdir -p public/projects

# Download project images
curl -o public/projects/dashboard.png https://www.hairui-wang.com/images/portfolio/dashboard.jpg
curl -o public/projects/school-lunch.png https://www.hairui-wang.com/images/portfolio/school-lunch.jpg
curl -o public/projects/shipments.png https://www.hairui-wang.com/images/portfolio/shipments.jpg
curl -o public/projects/consumer.png https://www.hairui-wang.com/images/portfolio/consumer.jpg
curl -o public/projects/heat-map.png https://www.hairui-wang.com/images/portfolio/heat-map.jpg

# Download profile image
curl -o public/profile.jpg https://www.hairui-wang.com/images/profile.jpg 