# Install docker and docker-compose
sudo apt update && sudo apt install docker.io docker-compose

# Add user to docker group
sudo usermod -aG docker $USER

# Start docker service
sudo systemctl start docker

# Enable docker service (start on boot)
sudo systemctl enable docker