pipeline {

	agent any
	stages {
		
		

		
		stage("Build") {

			steps  {
				sh "sudo npm install"
                                sh "sudo npm run build"
        
			} 
    
        
		}
		stage("deploy") {
		
			
			steps {
				sh "sudo rm -rf /home/samuraiaj/magicbook/*"
				sh "sudo cp -rf * /home/samuraiaj/magicbook/"
				sh "sudo su - samuraiaj && whoami"
				sh "sudo systemctl restart magicbook.service"
                		
				
			}
			
			
}
}
    }
