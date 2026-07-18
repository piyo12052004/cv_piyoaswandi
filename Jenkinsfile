pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'pyoawndi12/cv-piyoaswandi-image:latest'
    }

    triggers {
        githubPush()
    }

    stages {

        stage('1. Checkout') {
            steps {
                echo 'Mengambil source code dari GitHub...'
                checkout scm
            }
        }


        stage('2. Test') {
            steps {
                echo 'Menjalankan testing...'

                sh '''
                    echo "Cek struktur project"
                    ls -la
                '''
            }
        }


        stage('3. Build Docker Image') {
            steps {
                echo 'Sedang membuat Docker Image...'

                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }


        stage('4. Push Image ke Docker Hub') {
            steps {

                echo 'Mengunggah Image ke Docker Hub...'

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    passwordVariable: 'DOCKER_PWD',
                    usernameVariable: 'DOCKER_USER'
                )]) {

                    sh """
                    echo ${DOCKER_PWD} | docker login -u ${DOCKER_USER} --password-stdin

                    docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }


        stage('5. Deploy') {

            steps {

                echo 'Deploy container...'

                sh '''
                    docker stop cv-piyoaswandi-container || true

                    docker rm cv-piyoaswandi-container || true

                    docker run -d \
                    --name cv-piyoaswandi-container \
                    -p 8081:80 \
                    ${DOCKER_IMAGE}
                '''
            }
        }
    }
}