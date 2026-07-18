pipeline {

    agent any


    environment {

        IMAGE_NAME = 'pyoawndi12/cv-piyoaswandi-image'

        IMAGE_TAG = "${BUILD_NUMBER}"

        DOCKER_IMAGE = "${IMAGE_NAME}:${IMAGE_TAG}"

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
                        echo ${DOCKER_PWD} | docker login \
                        -u ${DOCKER_USER} \
                        --password-stdin

                        docker push ${DOCKER_IMAGE}
                        docker push ${IMAGE_NAME}:latest
                    """
                }
            }
        }


    }

}