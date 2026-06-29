pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'pyoawndi12/cv-piyoaswandi-image:latest'
    }

    stages {

        stage('2. Build Docker Image') {
            steps {
                echo 'Sedang membuat Docker Image...'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('3. Push Image ke Docker Hub') {
            steps {
                echo 'Mengunggah Image ke Docker Hub...'
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    passwordVariable: 'DOCKER_PWD',
                    usernameVariable: 'DOCKER_USER'
                )]) {
                    sh "echo ${DOCKER_PWD} | docker login -u ${DOCKER_USER} --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('4. Deploy') {
            steps {
                sh 'docker stop cv-piyoaswandi-container || true'
                sh 'docker rm cv-piyoaswandi-container || true'
                sh "docker run -d --name cv-piyoaswandi-container -p 8081:80 ${DOCKER_IMAGE}"
            }
        }
    }
}