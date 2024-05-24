FROM debian:latest

#
RUN apt-get update && apt-get install -y locales

RUN dpkg-reconfigure locales && \
  locale-gen C.UTF-8 && \
  /usr/sbin/update-locale LANG=C.UTF-8

# Install needed default locale for Makefly
RUN echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen && \
  locale-gen

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8




# Update the package index and install necessary packages
RUN apt-get update && apt-get install -y \ 
    ruby \
    ruby-bundler \
    ruby-dev \
    nano \
    systemctl \
    build-essential
# Set the working directory to /app
WORKDIR /app

# Display Ruby version and bundler version
COPY . /app/
RUN ruby --version && bundle --version && gem install bundler jekyll && bundle install
EXPOSE 4000/tcp
# Command to run when the container starts
CMD bundler exec jekyll serve --host 0.0.0.0
