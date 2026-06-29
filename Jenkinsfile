pipeline {
    agent any

    environment {
        // Nama image yang akan dibuat di Docker Hub
        DOCKER_IMAGE = 'pyoawndi12/cv-piyoaswandi-image:latest'
    }

    stages {
        stage('1. Ambil Kode (Checkout)') {
            steps {
                // Mengambil kode terbaru dari repositori GitHub
                checkout scm
            }
        }

        stage('2. Build Docker Image') {
            steps {
                echo 'Sedang membuat Docker Image...'
                // Membangun image berdasarkan Dockerfile yang kita buat di Langkah 1
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('3. Push Image ke Docker Hub') {
            steps {
                echo 'Mengunggah Image ke Docker Hub...'
                // Melakukan login otomatis dan push image menggunakan kredensial Jenkins
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PWD', usernameVariable: 'DOCKER_USER')]) {
                    sh "echo ${DOCKER_PWD} | docker login -u ${DOCKER_USER} --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('4. Deploy Aplikasi') {
            steps {
                echo 'Menjalankan kontainer aplikasi baru...'
                // Menghentikan dan menghapus kontainer lama jika ada agar port tidak bentrok
                sh 'docker stop cv-piyoaswandi-container || true'
                sh 'docker rm cv-piyoaswandi-container || true'
                
                // Menjalankan kontainer baru di port 8081 server induk Anda
                sh "docker run -d --name cv-piyoaswandi-container -p 8081:80 ${DOCKER_IMAGE}"
                echo 'Aplikasi berhasil diperbarui!'
            }
        }
    }
}