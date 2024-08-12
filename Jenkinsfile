pipeline {
    agent any

    environment {
        // Use the NodeJS installation defined in Jenkins
        NODEJS_HOME = tool name: 'NodeJS 18.x', type: 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your Git repository
                git url: 'https://github.com/asoorji/cypress-jenkins.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests in headless mode
                sh 'npx cypress run'
            }
        }

        stage('Publish Test Results') {
            steps {
                // Store the test results and generate a report
                junit '**/results/*.xml'  // Adjust the path to your JUnit test results
            }
        }
    }

    post {
        always {
            // Archive test results and videos/screenshots
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*, **/cypress/videos/**/*', allowEmptyArchive: true
        }
        failure {
            // Notify about failure
            mail to: 'ndubuisiaso@gmail.com',
                 subject: "Cypress Tests Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Please check the Jenkins console output for more details."
        }
    }
}
